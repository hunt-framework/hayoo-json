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
        "word": "hsemail-ns"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides parsers for the grammar defined in\n   RFC2234, \"Augmented BNF for Syntax Specifications:\n   ABNF\", \u003ca\u003ehttp://www.faqs.org/rfcs/rfc2234.html\u003c/a\u003e. The\n   terminal called \u003ccode\u003echar\u003c/code\u003e in the RFC is called \u003ccode\u003e\u003ca\u003echaracter\u003c/a\u003e\u003c/code\u003e\n   here to avoid conflicts with Parsec's \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eAddendum for Nonstandard Version:\n   This module deviates from the RFC currently in \n        * none currently.\n\u003c/p\u003e\u003cp\u003eThese allowances are subject to change, and should not be\n   used when parsing incoming messages, only for parsing messages\n   that have been stored on disk. The goal of these nonstandard\n   Parsers is to provide a higher probability of parsing _common_\n   Headers (rather than only those explicitly defined in the RFC)\n   as well as allowing for potential oddities / changes that may\n   occur during storage of an email message. These parsers have\n   be rebranded so as not to conflict with the standard parsers\n   available from the excellent \u003ccode\u003ehsemail\u003c/code\u003e package, upon which\n   this package depends. For patches to this package only (namely\n   'hsemail-ns', patches should be sent to \u003ca\u003ejfredett@gmail.com\u003c/a\u003e, \n   for patches to the Proper parsers, you can send them to the\n   original maintainer. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "Rfc2234NS",
          "package": "hsemail-ns",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides parsers for the grammar defined in RFC2234 Augmented BNF for Syntax Specifications ABNF http www.faqs.org rfcs rfc2234.html The terminal called char in the RFC is called character here to avoid conflicts with Parsec char function Addendum for Nonstandard Version This module deviates from the RFC currently in none currently These allowances are subject to change and should not be used when parsing incoming messages only for parsing messages that have been stored on disk The goal of these nonstandard Parsers is to provide higher probability of parsing common Headers rather than only those explicitly defined in the RFC as well as allowing for potential oddities changes that may occur during storage of an email message These parsers have be rebranded so as not to conflict with the standard parsers available from the excellent hsemail package upon which this package depends For patches to this package only namely hsemail-ns patches should be sent to jfredett@gmail.com for patches to the Proper parsers you can send them to the original maintainer",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "Rfc2234NS",
          "package": "hsemail-ns",
          "partial": "Rfc NS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character of the alphabet.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "alpha",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#alpha",
          "type": "function"
        },
        "index": {
          "description": "Match any character of the alphabet",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "alpha",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either \"1\" or \"0\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "bit",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#bit",
          "type": "function"
        },
        "index": {
          "description": "Match either or",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "bit",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase-insensitive variant of Parsec's \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "caseChar",
          "package": "hsemail-ns",
          "signature": "Char -\u003e CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#caseChar",
          "type": "function"
        },
        "index": {
          "description": "Case-insensitive variant of Parsec char function",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "caseChar",
          "normalized": "Char-\u003eCharParser a Char",
          "package": "hsemail-ns",
          "partial": "Char",
          "signature": "Char-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:caseChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase-insensitive variant of Parsec's \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "caseString",
          "package": "hsemail-ns",
          "signature": "String -\u003e CharParser st ()",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#caseString",
          "type": "function"
        },
        "index": {
          "description": "Case-insensitive variant of Parsec string function",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "caseString",
          "normalized": "String-\u003eCharParser a()",
          "package": "hsemail-ns",
          "partial": "String",
          "signature": "String-\u003eCharParser st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:caseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any 7-bit US-ASCII character except for NUL (ASCII value 0, that is).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "character",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#character",
          "type": "function"
        },
        "index": {
          "description": "Match any bit US-ASCII character except for NUL ASCII value that is",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "character",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:character"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the carriage return character \u003ccode\u003e\\r\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "cr",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#cr",
          "type": "function"
        },
        "index": {
          "description": "Match the carriage return character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "cr",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:cr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the Internet newline \u003ccode\u003e\\r\\n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "crlf",
          "package": "hsemail-ns",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#crlf",
          "type": "function"
        },
        "index": {
          "description": "Match the Internet newline",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "crlf",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:crlf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any US-ASCII control character. That is\n any character with a decimal value in the range of [0..31,127].\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "ctl",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#ctl",
          "type": "function"
        },
        "index": {
          "description": "Match any US-ASCII control character That is any character with decimal value in the range of",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "ctl",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:ctl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the double quote character \"\u003ccode\u003e\"\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "dquote",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#dquote",
          "type": "function"
        },
        "index": {
          "description": "Match the double quote character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "dquote",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:dquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character that is valid in a hexadecimal number;\n ['0'..'9'] and ['A'..'F','a'..'f'] that is.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "hexdig",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#hexdig",
          "type": "function"
        },
        "index": {
          "description": "Match any character that is valid in hexadecimal number and that is",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "hexdig",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:hexdig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the tab (\"\u003ccode\u003e\\t\u003c/code\u003e\") character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "htab",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#htab",
          "type": "function"
        },
        "index": {
          "description": "Match the tab character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "htab",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:htab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch returns the linefeed character \u003ccode\u003e\\n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "lf",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#lf",
          "type": "function"
        },
        "index": {
          "description": "Match returns the linefeed character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "lf",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:lf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \"linear white-space\". That is any number of consecutive\n \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e, optionally followed by a \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e and (at least) one more\n \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "lwsp",
          "package": "hsemail-ns",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#lwsp",
          "type": "function"
        },
        "index": {
          "description": "Match linear white-space That is any number of consecutive wsp optionally followed by crlf and at least one more wsp",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "lwsp",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:lwsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a parser at least \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "manyN",
          "package": "hsemail-ns",
          "signature": "Int -\u003e GenParser a b c -\u003e GenParser a b [c]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#manyN",
          "type": "function"
        },
        "index": {
          "description": "Match parser at least times",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "manyN",
          "normalized": "Int-\u003eGenParser a b c-\u003eGenParser a b[c]",
          "package": "hsemail-ns",
          "signature": "Int-\u003eGenParser a b c-\u003eGenParser a b[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:manyN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a parser at least \u003ccode\u003en\u003c/code\u003e times, but no more than \u003ccode\u003em\u003c/code\u003e times.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "manyNtoM",
          "package": "hsemail-ns",
          "signature": "Int -\u003e Int -\u003e GenParser a b c -\u003e GenParser a b [c]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#manyNtoM",
          "type": "function"
        },
        "index": {
          "description": "Match parser at least times but no more than times",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "manyNtoM",
          "normalized": "Int-\u003eInt-\u003eGenParser a b c-\u003eGenParser a b[c]",
          "package": "hsemail-ns",
          "partial": "Nto",
          "signature": "Int-\u003eInt-\u003eGenParser a b c-\u003eGenParser a b[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:manyNtoM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \u003cem\u003eany\u003c/em\u003e character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "octet",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#octet",
          "type": "function"
        },
        "index": {
          "description": "Match any character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "octet",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:octet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to generate \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e-based instances for\n the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "parsec2read",
          "package": "hsemail-ns",
          "signature": "Parser a -\u003e String -\u003e [(a, String)]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#parsec2read",
          "type": "function"
        },
        "index": {
          "description": "Helper function to generate Parser based instances for the Read class",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "parsec2read",
          "normalized": "Parser a-\u003eString-\u003e[(a,String)]",
          "package": "hsemail-ns",
          "signature": "Parser a-\u003eString-\u003e[(a,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:parsec2read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a \"quoted pair\". Any characters (excluding CR and\n LF) may be quoted.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "quotedPair",
          "package": "hsemail-ns",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#quotedPair",
          "type": "function"
        },
        "index": {
          "description": "Match quoted pair Any characters excluding CR and LF may be quoted",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "quotedPair",
          "package": "hsemail-ns",
          "partial": "Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:quotedPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a quoted string. The specials \"\u003ccode\u003e\\\u003c/code\u003e\" and\n \"\u003ccode\u003e\"\u003c/code\u003e\" must be escaped inside a quoted string; CR and\n LF are not allowed at all.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "quotedString",
          "package": "hsemail-ns",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#quotedString",
          "type": "function"
        },
        "index": {
          "description": "Match quoted string The specials and must be escaped inside quoted string CR and LF are not allowed at all",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "quotedString",
          "package": "hsemail-ns",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:quotedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the space.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "sp",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#sp",
          "type": "function"
        },
        "index": {
          "description": "Match the space",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "sp",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:sp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any printable ASCII character. (The \"v\" stands for\n \"visible\".) That is any character in the decimal range of\n [33..126].\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "vchar",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#vchar",
          "type": "function"
        },
        "index": {
          "description": "Match any printable ASCII character The stands for visible That is any character in the decimal range of",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "vchar",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:vchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either \u003ccode\u003e\u003ca\u003esp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehtab\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "wsp",
          "package": "hsemail-ns",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#wsp",
          "type": "function"
        },
        "index": {
          "description": "Match either sp or htab",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
          "name": "wsp",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:wsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides parsers for the grammar defined in\n   RFC2822, \"Internet Message Format\",\n   \u003ca\u003ehttp://www.faqs.org/rfcs/rfc2822.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePlease note:\u003c/em\u003e The module is not particularly well tested.\n\u003c/p\u003e\u003cp\u003eAddendum for Nonstandard Version:\n   This module deviates from the RFC currently in \n        * Allowing for non-standard line endings.\n\u003c/p\u003e\u003cp\u003eThese allowances are subject to change, and should not be\n   used when parsing incoming messages, only for parsing messages\n   that have been stored on disk. The goal of these nonstandard\n   Parsers is to provide a higher probability of parsing Common_ \n   Headers (rather than only those explicitly defined in the RFC)\n   as well as allowing for potential oddities / changes that may\n   occur during storage of an email message. These parsers have\n   be rebranded so as not to conflict with the standard parsers\n   available from the excellent \u003ccode\u003ehsemail\u003c/code\u003e package, upon which\n   this package depends. For patches to this package only (namely\n   'hsemail-ns', patches should be sent to \u003ca\u003ejfredett@gmail.com\u003c/a\u003e, \n   for patches to the Proper parsers, you can send them to the\n   original maintainer. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Rfc2822NS",
          "package": "hsemail-ns",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides parsers for the grammar defined in RFC2822 Internet Message Format http www.faqs.org rfcs rfc2822.html Please note The module is not particularly well tested Addendum for Nonstandard Version This module deviates from the RFC currently in Allowing for non-standard line endings These allowances are subject to change and should not be used when parsing incoming messages only for parsing messages that have been stored on disk The goal of these nonstandard Parsers is to provide higher probability of parsing Common Headers rather than only those explicitly defined in the RFC as well as allowing for potential oddities changes that may occur during storage of an email message These parsers have be rebranded so as not to conflict with the standard parsers available from the excellent hsemail package upon which this package depends For patches to this package only namely hsemail-ns patches should be sent to jfredett@gmail.com for patches to the Proper parsers you can send them to the original maintainer",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Rfc2822NS",
          "package": "hsemail-ns",
          "partial": "Rfc NS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type represents any of the header fields defined in this\n RFC. Each of the various instances contains with the return value\n of the corresponding parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Field",
          "package": "hsemail-ns",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "data"
        },
        "index": {
          "description": "This data type represents any of the header fields defined in this RFC Each of the various instances contains with the return value of the corresponding parser",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Field",
          "package": "hsemail-ns",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type repesents a parsed Internet Message as defined in\n this RFC. It consists of an arbitrary number of header lines,\n represented in the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e data type, and a message body, which may\n be empty.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Message",
          "package": "hsemail-ns",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Message",
          "type": "data"
        },
        "index": {
          "description": "This data type repesents parsed Internet Message as defined in this RFC It consists of an arbitrary number of header lines represented in the Field data type and message body which may be empty",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Message",
          "package": "hsemail-ns",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA NameAddr is composed of an optional realname a mandatory\n e-mail \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "NameAddr",
          "package": "hsemail-ns",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#NameAddr",
          "type": "data"
        },
        "index": {
          "description": "NameAddr is composed of an optional realname mandatory e-mail address",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "NameAddr",
          "package": "hsemail-ns",
          "partial": "Name Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#t:NameAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Bcc",
          "package": "hsemail-ns",
          "signature": "Bcc [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Bcc",
          "normalized": "Bcc[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Bcc",
          "signature": "Bcc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Cc",
          "package": "hsemail-ns",
          "signature": "Cc [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Cc",
          "normalized": "Cc[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Cc",
          "signature": "Cc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Comments",
          "package": "hsemail-ns",
          "signature": "Comments String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Comments",
          "package": "hsemail-ns",
          "partial": "Comments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Date",
          "package": "hsemail-ns",
          "signature": "Date CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Date",
          "package": "hsemail-ns",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "From",
          "package": "hsemail-ns",
          "signature": "From [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "From",
          "normalized": "From[NameAddr]",
          "package": "hsemail-ns",
          "partial": "From",
          "signature": "From[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "InReplyTo",
          "package": "hsemail-ns",
          "signature": "InReplyTo [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "InReplyTo",
          "normalized": "InReplyTo[String]",
          "package": "hsemail-ns",
          "partial": "In Reply To",
          "signature": "InReplyTo[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:InReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Keywords",
          "package": "hsemail-ns",
          "signature": "Keywords [[String]]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Keywords",
          "normalized": "Keywords[[String]]",
          "package": "hsemail-ns",
          "partial": "Keywords",
          "signature": "Keywords[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Keywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Message",
          "package": "hsemail-ns",
          "signature": "Message [Field] String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Message",
          "normalized": "Message[Field]String",
          "package": "hsemail-ns",
          "partial": "Message",
          "signature": "Message[Field]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "MessageID",
          "package": "hsemail-ns",
          "signature": "MessageID String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "MessageID",
          "package": "hsemail-ns",
          "partial": "Message ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:MessageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "NameAddr",
          "package": "hsemail-ns",
          "signature": "NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#NameAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "NameAddr",
          "package": "hsemail-ns",
          "partial": "Name Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:NameAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ObsReceived",
          "package": "hsemail-ns",
          "signature": "ObsReceived [(String, String)]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ObsReceived",
          "normalized": "ObsReceived[(String,String)]",
          "package": "hsemail-ns",
          "partial": "Obs Received",
          "signature": "ObsReceived[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ObsReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "OptionalField",
          "package": "hsemail-ns",
          "signature": "OptionalField String String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "OptionalField",
          "package": "hsemail-ns",
          "partial": "Optional Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:OptionalField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Received",
          "package": "hsemail-ns",
          "signature": "Received ([(String, String)], CalendarTime)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Received",
          "normalized": "Received([(String,String)],CalendarTime)",
          "package": "hsemail-ns",
          "partial": "Received",
          "signature": "Received([(String,String)],CalendarTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "References",
          "package": "hsemail-ns",
          "signature": "References [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "References",
          "normalized": "References[String]",
          "package": "hsemail-ns",
          "partial": "References",
          "signature": "References[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:References"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ReplyTo",
          "package": "hsemail-ns",
          "signature": "ReplyTo [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ReplyTo",
          "normalized": "ReplyTo[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Reply To",
          "signature": "ReplyTo[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentBcc",
          "package": "hsemail-ns",
          "signature": "ResentBcc [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentBcc",
          "normalized": "ResentBcc[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent Bcc",
          "signature": "ResentBcc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentBcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentCc",
          "package": "hsemail-ns",
          "signature": "ResentCc [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentCc",
          "normalized": "ResentCc[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent Cc",
          "signature": "ResentCc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentCc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentDate",
          "package": "hsemail-ns",
          "signature": "ResentDate CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentDate",
          "package": "hsemail-ns",
          "partial": "Resent Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentFrom",
          "package": "hsemail-ns",
          "signature": "ResentFrom [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentFrom",
          "normalized": "ResentFrom[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent From",
          "signature": "ResentFrom[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentMessageID",
          "package": "hsemail-ns",
          "signature": "ResentMessageID String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentMessageID",
          "package": "hsemail-ns",
          "partial": "Resent Message ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentMessageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentReplyTo",
          "package": "hsemail-ns",
          "signature": "ResentReplyTo [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentReplyTo",
          "normalized": "ResentReplyTo[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent Reply To",
          "signature": "ResentReplyTo[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentSender",
          "package": "hsemail-ns",
          "signature": "ResentSender NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentSender",
          "package": "hsemail-ns",
          "partial": "Resent Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentTo",
          "package": "hsemail-ns",
          "signature": "ResentTo [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ResentTo",
          "normalized": "ResentTo[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent To",
          "signature": "ResentTo[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ReturnPath",
          "package": "hsemail-ns",
          "signature": "ReturnPath String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ReturnPath",
          "package": "hsemail-ns",
          "partial": "Return Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ReturnPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Sender",
          "package": "hsemail-ns",
          "signature": "Sender NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Sender",
          "package": "hsemail-ns",
          "partial": "Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Sender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Subject",
          "package": "hsemail-ns",
          "signature": "Subject String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "Subject",
          "package": "hsemail-ns",
          "partial": "Subject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "To",
          "package": "hsemail-ns",
          "signature": "To [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "To",
          "normalized": "To[NameAddr]",
          "package": "hsemail-ns",
          "partial": "To",
          "signature": "To[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:To"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \"address specification\". That is a \u003ccode\u003e\u003ca\u003elocalPart\u003c/a\u003e\u003c/code\u003e, followed\n by an \"\u003ccode\u003e@\u003c/code\u003e\" character, followed by a \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e. Return the complete\n address as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, ignoring any whitespace or any comments.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "addrSpec",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#addrSpec",
          "type": "function"
        },
        "index": {
          "description": "Parse an address specification That is localPart followed by an character followed by domain Return the complete address as String ignoring any whitespace or any comments",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "addrSpec",
          "package": "hsemail-ns",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:addrSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e or an address \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e and return the\n address(es).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "address",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#address",
          "type": "function"
        },
        "index": {
          "description": "Parse single mailbox or an address group and return the address es",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "address",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a list of \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e addresses, every two addresses being\n separated by a comma, and return the list of found address(es).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "addressList",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#addressList",
          "type": "function"
        },
        "index": {
          "description": "Parse list of address addresses every two addresses being separated by comma and return the list of found address es",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "addressList",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "List",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:addressList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \u003ccode\u003eangle_addr\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eobsAngleAddr\u003c/a\u003e\u003c/code\u003e and return the address.  \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "angleAddr",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#angleAddr",
          "type": "function"
        },
        "index": {
          "description": "Parse an angle addr or an obsAngleAddr and return the address",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "angleAddr",
          "package": "hsemail-ns",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:angleAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any US-ASCII character except for control characters,\n \u003ccode\u003e\u003ca\u003especials\u003c/a\u003e\u003c/code\u003e, or space. \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edotAtom\u003c/a\u003e\u003c/code\u003e are made up of this. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "atext",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#atext",
          "type": "function"
        },
        "index": {
          "description": "Match any US-ASCII character except for control characters specials or space atom and dotAtom are made up of this",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "atext",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:atext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch one or more \u003ccode\u003e\u003ca\u003eatext\u003c/a\u003e\u003c/code\u003e characters and skip any preceeding or\n trailing \u003ccode\u003e\u003ca\u003ecfws\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "atom",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#atom",
          "type": "function"
        },
        "index": {
          "description": "Match one or more atext characters and skip any preceeding or trailing cfws",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "atom",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eBcc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "bcc",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#bcc",
          "type": "function"
        },
        "index": {
          "description": "Parse Bcc header line and return the addressList address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "bcc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will return a message body as specified by this RFC;\n that is basically any number of \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e characters, which may be\n divided into separate lines by \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "body",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#body",
          "type": "function"
        },
        "index": {
          "description": "This parser will return message body as specified by this RFC that is basically any number of text characters which may be divided into separate lines by crlf",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "body",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eCc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "cc",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#cc",
          "type": "function"
        },
        "index": {
          "description": "Parse Cc header line and return the addressList address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "cc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any combination of \u003ccode\u003e\u003ca\u003efws\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecomments\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "cfws",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#cfws",
          "type": "function"
        },
        "index": {
          "description": "Match any combination of fws and comments",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "cfws",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:cfws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a \"comments\". That is any combination of \u003ccode\u003e\u003ca\u003ectext\u003c/a\u003e\u003c/code\u003e,\n 'quotedPair 's, and \u003ccode\u003e\u003ca\u003efws\u003c/a\u003e\u003c/code\u003e between brackets. Comments may nest.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "comment",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#comment",
          "type": "function"
        },
        "index": {
          "description": "Match comments That is any combination of ctext quotedPair and fws between brackets Comments may nest",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "comment",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eComments:\u003c/code\u003e\" header line and return it's contents verbatim.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "comments",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#comments",
          "type": "function"
        },
        "index": {
          "description": "Parse Comments header line and return it contents verbatim",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "comments",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any non-whitespace, non-control character except for \"\u003ccode\u003e(\u003c/code\u003e\",\n \"\u003ccode\u003e)\u003c/code\u003e\", and \"\u003ccode\u003e\\\u003c/code\u003e\". This is used to describe the legal content of\n \u003ccode\u003e\u003ca\u003ecomment\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This parser accepts 8-bit characters, even though this is\n not legal according to the RFC. Unfortunately, 8-bit content in\n comments has become fairly common in the real world, so we'll just\n accept the fact.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ctext",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#ctext",
          "type": "function"
        },
        "index": {
          "description": "Match any non-whitespace non-control character except for and This is used to describe the legal content of comment Note This parser accepts bit characters even though this is not legal according to the RFC Unfortunately bit content in comments has become fairly common in the real world so we ll just accept the fact",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ctext",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ctext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a date of the form \"\u003ccode\u003edd:mm:yyyy\u003c/code\u003e\" and return\n a tripple of the form (Int,Month,Int) - corresponding to\n (year,month,day).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "date",
          "package": "hsemail-ns",
          "signature": "CharParser a (Int, Month, Int)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#date",
          "type": "function"
        },
        "index": {
          "description": "This parser will match date of the form dd mm yyyy and return tripple of the form Int Month Int corresponding to year month day",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "date",
          "normalized": "CharParser a(Int,Month,Int)",
          "package": "hsemail-ns",
          "signature": "CharParser a(Int,Month,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date and time specification of the form\n\u003c/p\u003e\u003cpre\u003e   Thu, 19 Dec 2002 20:35:46 +0200\n\u003c/pre\u003e\u003cp\u003ewhere the weekday specification \"\u003ccode\u003eThu,\u003c/code\u003e\" is optional. The parser\n returns a \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e, which is set to the appropriate values.\n Note, though, that not all fields of \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e will\n necessarily be set correctly! Obviously, when no weekday has been\n provided, the parser will set this field to \u003ccode\u003e\u003ca\u003eMonday\u003c/a\u003e\u003c/code\u003e - regardless\n of whether the day actually is a monday or not. Similarly, the day\n of the year will always be returned as \u003ccode\u003e0\u003c/code\u003e. The timezone name will\n always be empty: \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNor will the \u003ccode\u003e\u003ca\u003edateTime\u003c/a\u003e\u003c/code\u003e parser perform \u003cem\u003eany\u003c/em\u003e consistency checking.\n It will accept\n\u003c/p\u003e\u003cpre\u003e    40 Apr 2002 13:12 +0100\n\u003c/pre\u003e\u003cp\u003eas a perfectly valid date.\n\u003c/p\u003e\u003cp\u003eIn order to get all fields set to meaningful values, and in order\n to verify the date's consistency, you will have to feed it into any\n of the conversion routines provided in \u003ca\u003eSystem.Time\u003c/a\u003e, such as\n \u003ccode\u003e\u003ca\u003etoClockTime\u003c/a\u003e\u003c/code\u003e. (When doing this, keep in mind that most functions\n return \u003cem\u003elocal time\u003c/em\u003e. This will not necessarily be the time you're\n expecting.)\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dateTime",
          "package": "hsemail-ns",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dateTime",
          "type": "function"
        },
        "index": {
          "description": "Parse date and time specification of the form Thu Dec where the weekday specification Thu is optional The parser returns CalendarTime which is set to the appropriate values Note though that not all fields of CalendarTime will necessarily be set correctly Obviously when no weekday has been provided the parser will set this field to Monday regardless of whether the day actually is monday or not Similarly the day of the year will always be returned as The timezone name will always be empty Nor will the dateTime parser perform any consistency checking It will accept Apr as perfectly valid date In order to get all fields set to meaningful values and in order to verify the date consistency you will have to feed it into any of the conversion routines provided in System.Time such as toClockTime When doing this keep in mind that most functions return local time This will not necessarily be the time you re expecting",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dateTime",
          "package": "hsemail-ns",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either an \u003ccode\u003e\u003ca\u003eobsDay\u003c/a\u003e\u003c/code\u003e, or a one or two digit number and return it. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "day",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#day",
          "type": "function"
        },
        "index": {
          "description": "Match either an obsDay or one or two digit number and return it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "day",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will the abbreviated weekday names (\"\u003ccode\u003eMon\u003c/code\u003e\", \"\u003ccode\u003eTue\u003c/code\u003e\", ...)\n and return the appropriate \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dayName",
          "package": "hsemail-ns",
          "signature": "CharParser a Day",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dayName",
          "type": "function"
        },
        "index": {
          "description": "This parser will the abbreviated weekday names Mon Tue and return the appropriate Day value",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dayName",
          "package": "hsemail-ns",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a \u003ccode\u003e\u003ca\u003edayName\u003c/a\u003e\u003c/code\u003e, optionally wrapped in folding\n whitespace, or an \u003ccode\u003e\u003ca\u003eobsDayOfWeek\u003c/a\u003e\u003c/code\u003e and return it's \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e value.  \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dayOfWeek",
          "package": "hsemail-ns",
          "signature": "CharParser a Day",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dayOfWeek",
          "type": "function"
        },
        "index": {
          "description": "This parser will match dayName optionally wrapped in folding whitespace or an obsDayOfWeek and return it Day value",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dayOfWeek",
          "package": "hsemail-ns",
          "partial": "Of Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dayOfWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return any characters that are legal in a\n \u003ccode\u003e\u003ca\u003edomainLiteral\u003c/a\u003e\u003c/code\u003e. That is \u003ccode\u003e\u003ca\u003edtext\u003c/a\u003e\u003c/code\u003e or a 'quotedPair '. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dcontent",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dcontent",
          "type": "function"
        },
        "index": {
          "description": "Parse and return any characters that are legal in domainLiteral That is dtext or quotedPair",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dcontent",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dcontent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return a \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "displayName",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#displayName",
          "type": "function"
        },
        "index": {
          "description": "Parse and return phrase",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "displayName",
          "package": "hsemail-ns",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:displayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return a \"domain part\" of an \u003ccode\u003e\u003ca\u003eaddrSpec\u003c/a\u003e\u003c/code\u003e. That is either \n a \u003ccode\u003e\u003ca\u003edotAtom\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003edomainLiteral\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "domain",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#domain",
          "type": "function"
        },
        "index": {
          "description": "Parse and return domain part of an addrSpec That is either dotAtom or domainLiteral",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "domain",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"domain literal\". That is a \"\u003ccode\u003e[\u003c/code\u003e\" character, followed by\n any amount of \u003ccode\u003e\u003ca\u003edcontent\u003c/a\u003e\u003c/code\u003e, followed by a terminating \"\u003ccode\u003e]\u003c/code\u003e\"\n character. The complete string is returned verbatim.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "domainLiteral",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#domainLiteral",
          "type": "function"
        },
        "index": {
          "description": "Parse domain literal That is character followed by any amount of dcontent followed by terminating character The complete string is returned verbatim",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "domainLiteral",
          "package": "hsemail-ns",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:domainLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \u003ccode\u003e\u003ca\u003edotAtomText\u003c/a\u003e\u003c/code\u003e and skip any preceeding or trailing \u003ccode\u003e\u003ca\u003ecfws\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dotAtom",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dotAtom",
          "type": "function"
        },
        "index": {
          "description": "Match dotAtomText and skip any preceeding or trailing cfws",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dotAtom",
          "package": "hsemail-ns",
          "partial": "Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dotAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch two or more \u003ccode\u003e\u003ca\u003eatext\u003c/a\u003e\u003c/code\u003es interspersed by dots.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dotAtomText",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dotAtomText",
          "type": "function"
        },
        "index": {
          "description": "Match two or more atext interspersed by dots",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dotAtomText",
          "package": "hsemail-ns",
          "partial": "Atom Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dotAtomText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return any ASCII characters except \"\u003ccode\u003e[\u003c/code\u003e\", \"\u003ccode\u003e]\u003c/code\u003e\", and\n \"\u003ccode\u003e\\\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dtext",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dtext",
          "type": "function"
        },
        "index": {
          "description": "Parse and return any ASCII characters except and",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "dtext",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dtext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return an arbitrary header field name. That is one or\n more \u003ccode\u003e\u003ca\u003eftext\u003c/a\u003e\u003c/code\u003e characters.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "fieldName",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#fieldName",
          "type": "function"
        },
        "index": {
          "description": "Parse and return an arbitrary header field name That is one or more ftext characters",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "fieldName",
          "package": "hsemail-ns",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:fieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will parse an arbitrary number of header fields as\n defined in this RFC. For each field, an appropriate \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e value\n is created, all of them making up the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e list that this parser\n returns.\n\u003c/p\u003e\u003cp\u003eIf you look at the implementation of this parser, you will find\n that it uses Parsec's \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e modifier around \u003cem\u003eall\u003c/em\u003e of the fields.\n The idea behind this is that fields, which contain syntax errors,\n fall back to the catch-all \u003ccode\u003e\u003ca\u003eoptionalField\u003c/a\u003e\u003c/code\u003e. Thus, this parser will \n hardly ever return a syntax error -- what conforms with the idea\n that any message that can possibly be accepted \u003cem\u003eshould\u003c/em\u003e be.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "fields",
          "package": "hsemail-ns",
          "signature": "CharParser a [Field]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#fields",
          "type": "function"
        },
        "index": {
          "description": "This parser will parse an arbitrary number of header fields as defined in this RFC For each field an appropriate Field value is created all of them making up the Field list that this parser returns If you look at the implementation of this parser you will find that it uses Parsec try modifier around all of the fields The idea behind this is that fields which contain syntax errors fall back to the catch-all optionalField Thus this parser will hardly ever return syntax error what conforms with the idea that any message that can possibly be accepted should be",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "fields",
          "normalized": "CharParser a[Field]",
          "package": "hsemail-ns",
          "signature": "CharParser a[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eFrom:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "from",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#from",
          "type": "function"
        },
        "index": {
          "description": "Parse From header line and return the mailboxList address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "from",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch and return any ASCII character except for control\n characters, whitespace, and \"\u003ccode\u003e:\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ftext",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#ftext",
          "type": "function"
        },
        "index": {
          "description": "Match and return any ASCII character except for control characters whitespace and",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "ftext",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ftext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \"folding whitespace\". That is any combination of \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "fws",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#fws",
          "type": "function"
        },
        "index": {
          "description": "Match folding whitespace That is any combination of wsp and crlf followed by wsp",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "fws",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:fws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"group\" of addresses. That is a \u003ccode\u003e\u003ca\u003edisplayName\u003c/a\u003e\u003c/code\u003e, followed\n by a colon, optionally followed by a \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e, followed by a \n semicolon. The found address(es) are returned - what may be none.\n Here is an example:\n\u003c/p\u003e\u003cpre\u003e    parse group \"\" \"my group: user1@example.org, user2@example.org;\"\n\u003c/pre\u003e\u003cp\u003eThis input comes out as:\n\u003c/p\u003e\u003cpre\u003e    Right [\"user1@example.org\",\"user2@example.org\"]\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "group",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#group",
          "type": "function"
        },
        "index": {
          "description": "Parse group of addresses That is displayName followed by colon optionally followed by mailboxList followed by semicolon The found address es are returned what may be none Here is an example parse group my group user1@example.org user2@example.org This input comes out as Right user1@example.org user2@example.org",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "group",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a parser for a message header line from the\n header's name and a parser for the body.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "header",
          "package": "hsemail-ns",
          "signature": "String -\u003e CharParser a b -\u003e CharParser a b",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#header",
          "type": "function"
        },
        "index": {
          "description": "Construct parser for message header line from the header name and parser for the body",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "header",
          "normalized": "String-\u003eCharParser a b-\u003eCharParser a b",
          "package": "hsemail-ns",
          "signature": "String-\u003eCharParser a b-\u003eCharParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a two-digit number and return it's integer\n value. No range checking is performed.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "hour",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#hour",
          "type": "function"
        },
        "index": {
          "description": "This parser will match two-digit number and return it integer value No range checking is performed",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "hour",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:hour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"left ID\" part of a \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e. This is almost identical to \n the \u003ccode\u003e\u003ca\u003elocalPart\u003c/a\u003e\u003c/code\u003e of an e-mail address, but with stricter rules\n about folding and whitespace.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "idLeft",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#idLeft",
          "type": "function"
        },
        "index": {
          "description": "Parse left ID part of msgId This is almost identical to the localPart of an e-mail address but with stricter rules about folding and whitespace",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "idLeft",
          "package": "hsemail-ns",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:idLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"right ID\" part of a \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e. This is almost identical to \n the \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e of an e-mail address, but with stricter rules about\n folding and whitespace.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "idRight",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#idRight",
          "type": "function"
        },
        "index": {
          "description": "Parse right ID part of msgId This is almost identical to the domain of an e-mail address but with stricter rules about folding and whitespace",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "idRight",
          "package": "hsemail-ns",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:idRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eIn-Reply-To:\u003c/code\u003e\" header line and return the list of\n \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003es contained in it. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "inReplyTo",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#inReplyTo",
          "type": "function"
        },
        "index": {
          "description": "Parse In-Reply-To header line and return the list of msgId contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "inReplyTo",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "partial": "Reply To",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:inReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "itemName",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#itemName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "itemName",
          "package": "hsemail-ns",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:itemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "itemValue",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#itemValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "itemValue",
          "package": "hsemail-ns",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:itemValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eKeywords:\u003c/code\u003e\" header line and return the list of \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003es\n found. Please not that each phrase is again a list of \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003es, as\n returned by the \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "keywords",
          "package": "hsemail-ns",
          "signature": "CharParser a [[String]]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#keywords",
          "type": "function"
        },
        "index": {
          "description": "Parse Keywords header line and return the list of phrase found Please not that each phrase is again list of atom as returned by the phrase parser",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "keywords",
          "normalized": "CharParser a[[String]]",
          "package": "hsemail-ns",
          "signature": "CharParser a[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:keywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return a \"local part\" of an \u003ccode\u003e\u003ca\u003eaddrSpec\u003c/a\u003e\u003c/code\u003e. That is either \n a \u003ccode\u003e\u003ca\u003edotAtom\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003equotedString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "localPart",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#localPart",
          "type": "function"
        },
        "index": {
          "description": "Parse and return local part of an addrSpec That is either dotAtom or quotedString",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "localPart",
          "package": "hsemail-ns",
          "partial": "Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:localPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003enameAddr\u003c/a\u003e\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eaddrSpec\u003c/a\u003e\u003c/code\u003e and return the  \n address.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "mailbox",
          "package": "hsemail-ns",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#mailbox",
          "type": "function"
        },
        "index": {
          "description": "Parse nameAddr or an addrSpec and return the address",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "mailbox",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:mailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a list of \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e addresses, every two addresses being\n separated by a comma, and return the list of found address(es).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "mailboxList",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#mailboxList",
          "type": "function"
        },
        "index": {
          "description": "Parse list of mailbox addresses every two addresses being separated by comma and return the list of found address es",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "mailboxList",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "List",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:mailboxList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003eNothing\u003c/code\u003e if the given parser doesn't match. This\n combinator is included in the latest parsec distribution as\n \u003ccode\u003eoptionMaybe\u003c/code\u003e, but ghc-6.6.1 apparently doesn't have it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "maybeOption",
          "package": "hsemail-ns",
          "signature": "GenParser tok st a -\u003e GenParser tok st (Maybe a)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#maybeOption",
          "type": "function"
        },
        "index": {
          "description": "Return Nothing if the given parser doesn match This combinator is included in the latest parsec distribution as optionMaybe but ghc-6.6.1 apparently doesn have it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "maybeOption",
          "normalized": "GenParser a b c-\u003eGenParser a b(Maybe c)",
          "package": "hsemail-ns",
          "partial": "Option",
          "signature": "GenParser tok st a-\u003eGenParser tok st(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:maybeOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a complete message as defined by this RFC and it broken down\n into the separate header fields and the message body. Header lines,\n which contain syntax errors, will not cause the parser to abort.\n Rather, these headers will appear as \u003ccode\u003e\u003ca\u003eOptionalField\u003c/a\u003e\u003c/code\u003es (which are\n unparsed) in the resulting \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e. A message must be really,\n really badly broken for this parser to fail.\n\u003c/p\u003e\u003cp\u003eThis behaviour was chosen because it is impossible to predict what\n the user of this module considers to be a fatal error;\n traditionally, parsers are very forgiving when it comes to Internet\n messages.\n\u003c/p\u003e\u003cp\u003eIf you want to implement a really strict parser, you'll have to put\n the appropriate parser together yourself. You'll find that this is\n rather easy to do. Refer to the \u003ccode\u003e\u003ca\u003efields\u003c/a\u003e\u003c/code\u003e parser for further details.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "message",
          "package": "hsemail-ns",
          "signature": "CharParser a Message",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#message",
          "type": "function"
        },
        "index": {
          "description": "Parse complete message as defined by this RFC and it broken down into the separate header fields and the message body Header lines which contain syntax errors will not cause the parser to abort Rather these headers will appear as OptionalField which are unparsed in the resulting Message message must be really really badly broken for this parser to fail This behaviour was chosen because it is impossible to predict what the user of this module considers to be fatal error traditionally parsers are very forgiving when it comes to Internet messages If you want to implement really strict parser you ll have to put the appropriate parser together yourself You ll find that this is rather easy to do Refer to the fields parser for further details",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "message",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eMessage-Id:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e \n contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "messageId",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#messageId",
          "type": "function"
        },
        "index": {
          "description": "Parse Message-Id header line and return the msgId contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "messageId",
          "package": "hsemail-ns",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:messageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a two-digit number and return it's integer\n value. No range checking is performed.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "minute",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#minute",
          "type": "function"
        },
        "index": {
          "description": "This parser will match two-digit number and return it integer value No range checking is performed",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "minute",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:minute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a \u003ccode\u003e\u003ca\u003emonthName\u003c/a\u003e\u003c/code\u003e, optionally wrapped in\n folding whitespace, or an \u003ccode\u003e\u003ca\u003eobsMonth\u003c/a\u003e\u003c/code\u003e and return it's \u003ccode\u003e\u003ca\u003eMonth\u003c/a\u003e\u003c/code\u003e \n value.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "month",
          "package": "hsemail-ns",
          "signature": "CharParser a Month",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#month",
          "type": "function"
        },
        "index": {
          "description": "This parser will match monthName optionally wrapped in folding whitespace or an obsMonth and return it Month value",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "month",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will the abbreviated month names (\"\u003ccode\u003eJan\u003c/code\u003e\", \"\u003ccode\u003eFeb\u003c/code\u003e\", ...)\n and return the appropriate \u003ccode\u003e\u003ca\u003eMonth\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "monthName",
          "package": "hsemail-ns",
          "signature": "CharParser a Month",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#monthName",
          "type": "function"
        },
        "index": {
          "description": "This parser will the abbreviated month names Jan Feb and return the appropriate Month value",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "monthName",
          "package": "hsemail-ns",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:monthName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003emessage ID:\u003c/code\u003e\" and return it. A message ID is almost\n identical to an \u003ccode\u003e\u003ca\u003eangleAddr\u003c/a\u003e\u003c/code\u003e, but with stricter rules about folding \n and whitespace.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "msgId",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#msgId",
          "type": "function"
        },
        "index": {
          "description": "Parse message ID and return it message ID is almost identical to an angleAddr but with stricter rules about folding and whitespace",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "msgId",
          "package": "hsemail-ns",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:msgId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \u003ccode\u003e\u003ca\u003eangleAddr\u003c/a\u003e\u003c/code\u003e, optionally prefaced with a \u003ccode\u003e\u003ca\u003edisplayName\u003c/a\u003e\u003c/code\u003e, \n and return the address.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameAddr",
          "package": "hsemail-ns",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#nameAddr",
          "type": "function"
        },
        "index": {
          "description": "Parse an angleAddr optionally prefaced with displayName and return the address",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameAddr",
          "package": "hsemail-ns",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameAddrAddr",
          "package": "hsemail-ns",
          "signature": "String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#NameAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameAddrAddr",
          "package": "hsemail-ns",
          "partial": "Addr Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameAddrAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameAddrName",
          "package": "hsemail-ns",
          "signature": "Maybe String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#NameAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameAddrName",
          "package": "hsemail-ns",
          "partial": "Addr Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameAddrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameValList",
          "package": "hsemail-ns",
          "signature": "CharParser a [(String, String)]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#nameValList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameValList",
          "normalized": "CharParser a[(String,String)]",
          "package": "hsemail-ns",
          "partial": "Val List",
          "signature": "CharParser a[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameValList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameValPair",
          "package": "hsemail-ns",
          "signature": "CharParser a (String, String)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#nameValPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "nameValPair",
          "normalized": "CharParser a(String,String)",
          "package": "hsemail-ns",
          "partial": "Val Pair",
          "signature": "CharParser a(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameValPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more occurences of \u003ccode\u003e\u003ca\u003edtext\u003c/a\u003e\u003c/code\u003e or 'quotedPair ' and\n return the concatenated string. This makes up the \u003ccode\u003e\u003ca\u003eidRight\u003c/a\u003e\u003c/code\u003e of a \n \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "noFoldLiteral",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#noFoldLiteral",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more occurences of dtext or quotedPair and return the concatenated string This makes up the idRight of msgId",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "noFoldLiteral",
          "package": "hsemail-ns",
          "partial": "Fold Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:noFoldLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more occurences of \u003ccode\u003e\u003ca\u003eqtext\u003c/a\u003e\u003c/code\u003e or 'quotedPair ' and\n return the concatenated string. This makes up the \u003ccode\u003e\u003ca\u003eidLeft\u003c/a\u003e\u003c/code\u003e of a \n \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "noFoldQuote",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#noFoldQuote",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more occurences of qtext or quotedPair and return the concatenated string This makes up the idLeft of msgId",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "noFoldQuote",
          "package": "hsemail-ns",
          "partial": "Fold Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:noFoldQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any US-ASCII non-whitespace control character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "noWsCtl",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#noWsCtl",
          "type": "function"
        },
        "index": {
          "description": "Match any US-ASCII non-whitespace control character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "noWsCtl",
          "package": "hsemail-ns",
          "partial": "Ws Ctl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:noWsCtl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser is identical to \u003ccode\u003e\u003ca\u003eobsMboxList\u003c/a\u003e\u003c/code\u003e but parses a list of  \n \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003ees rather than \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003ees. The main difference is that an\n \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e may contain \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003es. Please note that as of now, the\n parser will return a simple list of addresses; the grouping\n information is lost.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsAddrList",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsAddrList",
          "type": "function"
        },
        "index": {
          "description": "This parser is identical to obsMboxList but parses list of address es rather than mailbox es The main difference is that an address may contain group Please note that as of now the parser will return simple list of addresses the grouping information is lost",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsAddrList",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Addr List",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsAddrList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match the \"obsolete angle address\" syntax. This\n construct used to be known as a \"route address\" in earlier RFCs.\n There are two differences between this construct and the\n \u003ccode\u003e\u003ca\u003eangleAddr\u003c/a\u003e\u003c/code\u003e: For one - as usual -, the obsolete form allows for \n more liberal insertion of folding whitespace and comments.\n\u003c/p\u003e\u003cp\u003eSecondly, and more importantly, angle addresses used to allow the\n (optional) specification of a \"route\". The newer version does not.\n Such a routing address looks like this:\n\u003c/p\u003e\u003cpre\u003e    \u003c@example1.org,@example2.org:simons@example.org\u003e\n\u003c/pre\u003e\u003cp\u003eThe parser will return a tuple that - in case of the above address -\n looks like this:\n\u003c/p\u003e\u003cpre\u003e    ([\"example1.org\",\"example2.org\"],\"simons@example.org\")\n\u003c/pre\u003e\u003cp\u003eThe first part contains a list of hosts that constitute the route\n part. This list may be empty! The second part of the tuple is the\n actual \u003ccode\u003e\u003ca\u003eaddrSpec\u003c/a\u003e\u003c/code\u003e address. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsAngleAddr",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsAngleAddr",
          "type": "function"
        },
        "index": {
          "description": "This parser will match the obsolete angle address syntax This construct used to be known as route address in earlier RFCs There are two differences between this construct and the angleAddr For one as usual the obsolete form allows for more liberal insertion of folding whitespace and comments Secondly and more importantly angle addresses used to allow the optional specification of route The newer version does not Such routing address looks like this example1.org example2.org simons@example.org The parser will return tuple that in case of the above address looks like this example1.org example2.org simons@example.org The first part contains list of hosts that constitute the route part This list may be empty The second part of the tuple is the actual addrSpec address",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsAngleAddr",
          "package": "hsemail-ns",
          "partial": "Angle Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsAngleAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ebcc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsBcc",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsBcc",
          "type": "function"
        },
        "index": {
          "description": "Parse bcc header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsBcc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Bcc",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsBcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ecc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsCc",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsCc",
          "type": "function"
        },
        "index": {
          "description": "Parse cc header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsCc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Cc",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsCc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch and return the obsolete \"char\" syntax, which - unlike\n \u003ccode\u003e\u003ca\u003echaracter\u003c/a\u003e\u003c/code\u003e - did not allow \"carriage return\" and \"linefeed\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsChar",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsChar",
          "type": "function"
        },
        "index": {
          "description": "Match and return the obsolete char syntax which unlike character did not allow carriage return and linefeed",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsChar",
          "package": "hsemail-ns",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ecomments\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsComments",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsComments",
          "type": "function"
        },
        "index": {
          "description": "Parse comments header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsComments",
          "package": "hsemail-ns",
          "partial": "Comments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eday\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsDay",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsDay",
          "type": "function"
        },
        "index": {
          "description": "Parse day but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsDay",
          "package": "hsemail-ns",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003edayName\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsDayOfWeek",
          "package": "hsemail-ns",
          "signature": "CharParser a Day",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsDayOfWeek",
          "type": "function"
        },
        "index": {
          "description": "Parse dayName but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsDayOfWeek",
          "package": "hsemail-ns",
          "partial": "Day Of Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsDayOfWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the obsolete syntax of a \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e, which allowed for more\n liberal insertion of folding whitespace and comments. The actual\n string is returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsDomain",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsDomain",
          "type": "function"
        },
        "index": {
          "description": "Parse the obsolete syntax of domain which allowed for more liberal insertion of folding whitespace and comments The actual string is returned",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsDomain",
          "package": "hsemail-ns",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser parses a list of domain names, each of them prefaced\n with an \"at\". Multiple names are separated by a comma. The list of\n \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003es is returned - and may be empty.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsDomainList",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsDomainList",
          "type": "function"
        },
        "index": {
          "description": "This parser parses list of domain names each of them prefaced with an at Multiple names are separated by comma The list of domain is returned and may be empty",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsDomainList",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "partial": "Domain List",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsDomainList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsFields",
          "package": "hsemail-ns",
          "signature": "GenParser Char a [Field]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsFields",
          "normalized": "GenParser Char a[Field]",
          "package": "hsemail-ns",
          "partial": "Fields",
          "signature": "GenParser Char a[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsFrom",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsFrom",
          "type": "function"
        },
        "index": {
          "description": "Parse from header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsFrom",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "From",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return an \"obsolete fws\" token. That is at least one\n \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e character, followed by an arbitrary number (including zero)\n of \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e followed by at least one more \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsFws",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsFws",
          "type": "function"
        },
        "index": {
          "description": "Parse and return an obsolete fws token That is at least one wsp character followed by an arbitrary number including zero of crlf followed by at least one more wsp character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsFws",
          "package": "hsemail-ns",
          "partial": "Fws",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsFws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eheader\u003c/a\u003e\u003c/code\u003e, but allows the obsolete white-space rules.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsHeader",
          "package": "hsemail-ns",
          "signature": "String -\u003e CharParser a b -\u003e CharParser a b",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsHeader",
          "type": "function"
        },
        "index": {
          "description": "Like header but allows the obsolete white-space rules",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsHeader",
          "normalized": "String-\u003eCharParser a b-\u003eCharParser a b",
          "package": "hsemail-ns",
          "partial": "Header",
          "signature": "String-\u003eCharParser a b-\u003eCharParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ehour\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsHour",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsHour",
          "type": "function"
        },
        "index": {
          "description": "Parse hour but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsHour",
          "package": "hsemail-ns",
          "partial": "Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the \"left part\" of a message ID, but allows the obsolete\n syntax, which is identical to a \u003ccode\u003e\u003ca\u003elocalPart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsIdLeft",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsIdLeft",
          "type": "function"
        },
        "index": {
          "description": "Parses the left part of message ID but allows the obsolete syntax which is identical to localPart",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsIdLeft",
          "package": "hsemail-ns",
          "partial": "Id Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsIdLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the \"right part\" of a message ID, but allows the obsolete\n syntax, which is identical to a \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsIdRight",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsIdRight",
          "type": "function"
        },
        "index": {
          "description": "Parses the right part of message ID but allows the obsolete syntax which is identical to domain",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsIdRight",
          "package": "hsemail-ns",
          "partial": "Id Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsIdRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \u003ccode\u003e\u003ca\u003einReplyTo\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding and the obsolete phrase syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsInReplyTo",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsInReplyTo",
          "type": "function"
        },
        "index": {
          "description": "Parse an inReplyTo header line but allow for the obsolete folding and the obsolete phrase syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsInReplyTo",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "partial": "In Reply To",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsInReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ekeywords\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax. Also, this parser accepts \u003ccode\u003e\u003ca\u003eobsPhraseList\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsKeywords",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsKeywords",
          "type": "function"
        },
        "index": {
          "description": "Parse keywords header line but allow for the obsolete folding syntax Also this parser accepts obsPhraseList",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsKeywords",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "partial": "Keywords",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsKeywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the obsolete syntax of a \u003ccode\u003e\u003ca\u003elocalPart\u003c/a\u003e\u003c/code\u003e, which allowed for\n more liberal insertion of folding whitespace and comments. The\n actual string is returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsLocalPart",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsLocalPart",
          "type": "function"
        },
        "index": {
          "description": "Parse the obsolete syntax of localPart which allowed for more liberal insertion of folding whitespace and comments The actual string is returned",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsLocalPart",
          "package": "hsemail-ns",
          "partial": "Local Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsLocalPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match the obsolete syntax for a \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e. \n This one is quite weird: An \u003ccode\u003e\u003ca\u003eobsMboxList\u003c/a\u003e\u003c/code\u003e contains an arbitrary  \n number of \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003ees - including none -, which are separated by\n commas. But you may have multiple consecutive commas without giving\n a \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e. You may also have a valid \u003ccode\u003e\u003ca\u003eobsMboxList\u003c/a\u003e\u003c/code\u003e that  \n contains \u003cem\u003eno\u003c/em\u003e \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e at all. On the other hand, you \u003cem\u003emust\u003c/em\u003e have\n at least one comma.\n\u003c/p\u003e\u003cp\u003eSo, this input is perfectly valid:\n\u003c/p\u003e\u003cpre\u003e    \",\"\n\u003c/pre\u003e\u003cp\u003eBut this one is - contrary to all intuition - not:\n\u003c/p\u003e\u003cpre\u003e    \"simons@example.org\"\n\u003c/pre\u003e\u003cp\u003eStrange, isn't it?\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsMboxList",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsMboxList",
          "type": "function"
        },
        "index": {
          "description": "This parser will match the obsolete syntax for mailboxList This one is quite weird An obsMboxList contains an arbitrary number of mailbox es including none which are separated by commas But you may have multiple consecutive commas without giving mailbox You may also have valid obsMboxList that contains no mailbox at all On the other hand you must have at least one comma So this input is perfectly valid But this one is contrary to all intuition not simons@example.org Strange isn it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsMboxList",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Mbox List",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsMboxList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003emessageId\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsMessageId",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsMessageId",
          "type": "function"
        },
        "index": {
          "description": "Parse messageId header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsMessageId",
          "package": "hsemail-ns",
          "partial": "Message Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsMessageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eminute\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsMinute",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsMinute",
          "type": "function"
        },
        "index": {
          "description": "Parse minute but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsMinute",
          "package": "hsemail-ns",
          "partial": "Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003emonthName\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsMonth",
          "package": "hsemail-ns",
          "signature": "CharParser a Month",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsMonth",
          "type": "function"
        },
        "index": {
          "description": "Parse monthName but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsMonth",
          "package": "hsemail-ns",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser is identical to \u003ccode\u003e\u003ca\u003eoptionalField\u003c/a\u003e\u003c/code\u003e but allows the more \n liberal line-folding syntax between the \"fieldName\" and the \"field\n text\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsOptional",
          "package": "hsemail-ns",
          "signature": "CharParser a (String, String)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsOptional",
          "type": "function"
        },
        "index": {
          "description": "This parser is identical to optionalField but allows the more liberal line-folding syntax between the fieldName and the field text",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsOptional",
          "normalized": "CharParser a(String,String)",
          "package": "hsemail-ns",
          "partial": "Optional",
          "signature": "CharParser a(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsOptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003edate\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsOrigDate",
          "package": "hsemail-ns",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsOrigDate",
          "type": "function"
        },
        "index": {
          "description": "Parse date header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsOrigDate",
          "package": "hsemail-ns",
          "partial": "Orig Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsOrigDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \u003ccode\u003e\u003ca\u003eobsAngleAddr\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsPath",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsPath",
          "type": "function"
        },
        "index": {
          "description": "Match obsAngleAddr",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsPath",
          "package": "hsemail-ns",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the obsolete \"phrase\" syntax, which - unlike \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e -\n allows dots between tokens.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsPhrase",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsPhrase",
          "type": "function"
        },
        "index": {
          "description": "Match the obsolete phrase syntax which unlike phrase allows dots between tokens",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsPhrase",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "partial": "Phrase",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsPhrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a  \"phrase list\" syntax and return the list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n that make up the phrase. In contrast to a \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003e\u003ca\u003eobsPhraseList\u003c/a\u003e\u003c/code\u003e separates the individual words by commas. This \n syntax is - as you will have guessed - obsolete.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsPhraseList",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsPhraseList",
          "type": "function"
        },
        "index": {
          "description": "Match phrase list syntax and return the list of String that make up the phrase In contrast to phrase the obsPhraseList separates the individual words by commas This syntax is as you will have guessed obsolete",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsPhraseList",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "partial": "Phrase List",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsPhraseList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the obsolete \"quoted pair\" syntax, which - unlike\n 'quotedPair ' - allowed \u003cem\u003eany\u003c/em\u003e ASCII character to be specified when\n quoted. The parser will return both, the backslash and the actual\n character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsQp",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsQp",
          "type": "function"
        },
        "index": {
          "description": "Match the obsolete quoted pair syntax which unlike quotedPair allowed any ASCII character to be specified when quoted The parser will return both the backslash and the actual character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsQp",
          "package": "hsemail-ns",
          "partial": "Qp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsQp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsReceived",
          "package": "hsemail-ns",
          "signature": "CharParser a [(String, String)]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsReceived",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsReceived",
          "normalized": "CharParser a[(String,String)]",
          "package": "hsemail-ns",
          "partial": "Received",
          "signature": "CharParser a[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ereferences\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding and the obsolete phrase syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsReferences",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsReferences",
          "type": "function"
        },
        "index": {
          "description": "Parse references header line but allow for the obsolete folding and the obsolete phrase syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsReferences",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "partial": "References",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ereplyTo\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsReplyTo",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsReplyTo",
          "type": "function"
        },
        "index": {
          "description": "Parse replyTo header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsReplyTo",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Reply To",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentBcc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentBcc",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentBcc",
          "type": "function"
        },
        "index": {
          "description": "Parse resentBcc header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentBcc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent Bcc",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentBcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentCc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentCc",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentCc",
          "type": "function"
        },
        "index": {
          "description": "Parse resentCc header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentCc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent Cc",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentCc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentDate\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentDate",
          "package": "hsemail-ns",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentDate",
          "type": "function"
        },
        "index": {
          "description": "Parse resentDate header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentDate",
          "package": "hsemail-ns",
          "partial": "Resent Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentFrom\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentFrom",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentFrom",
          "type": "function"
        },
        "index": {
          "description": "Parse resentFrom header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentFrom",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent From",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentMsgId\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete  \n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentMid",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentMid",
          "type": "function"
        },
        "index": {
          "description": "Parse resentMsgId header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentMid",
          "package": "hsemail-ns",
          "partial": "Resent Mid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentMid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003eResent-Reply-To\u003c/code\u003e header line but allow for the\n obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentReply",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentReply",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Reply-To header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentReply",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent Reply",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentSender\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentSend",
          "package": "hsemail-ns",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentSend",
          "type": "function"
        },
        "index": {
          "description": "Parse resentSender header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentSend",
          "package": "hsemail-ns",
          "partial": "Resent Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentTo\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentTo",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentTo",
          "type": "function"
        },
        "index": {
          "description": "Parse resentTo header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsResentTo",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Resent To",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsReturn",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsReturn",
          "package": "hsemail-ns",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser parses the \"route\" part of \u003ccode\u003e\u003ca\u003eobsAngleAddr\u003c/a\u003e\u003c/code\u003e and  \n returns the list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es that make up this route. Relies on\n \u003ccode\u003e\u003ca\u003eobsDomainList\u003c/a\u003e\u003c/code\u003e for the actual parsing.  \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsRoute",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsRoute",
          "type": "function"
        },
        "index": {
          "description": "This parser parses the route part of obsAngleAddr and returns the list of String that make up this route Relies on obsDomainList for the actual parsing",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsRoute",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "partial": "Route",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsSecond",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsSecond",
          "type": "function"
        },
        "index": {
          "description": "Parse second but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsSecond",
          "package": "hsemail-ns",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003esender\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsSender",
          "package": "hsemail-ns",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsSender",
          "type": "function"
        },
        "index": {
          "description": "Parse sender header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsSender",
          "package": "hsemail-ns",
          "partial": "Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003esubject\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsSubject",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsSubject",
          "type": "function"
        },
        "index": {
          "description": "Parse subject header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsSubject",
          "package": "hsemail-ns",
          "partial": "Subject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsSubject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the obsolete \"text\" syntax, which - unlike \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e - allowed\n \"carriage returns\" and \"linefeeds\". This is really weird; you\n better consult the RFC for details. The parser will return the\n complete string, including those special characters.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsText",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsText",
          "type": "function"
        },
        "index": {
          "description": "Match the obsolete text syntax which unlike text allowed carriage returns and linefeeds This is really weird you better consult the RFC for details The parser will return the complete string including those special characters",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsText",
          "package": "hsemail-ns",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsTo",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsTo",
          "type": "function"
        },
        "index": {
          "description": "Parse to header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsTo",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "To",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch and return the obsolete \"utext\" syntax, which is identical\n to \u003ccode\u003e\u003ca\u003eobsText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsUtext",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsUtext",
          "type": "function"
        },
        "index": {
          "description": "Match and return the obsolete utext syntax which is identical to obsText",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsUtext",
          "package": "hsemail-ns",
          "partial": "Utext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsUtext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eyear\u003c/a\u003e\u003c/code\u003e but allow for a two-digit number (obsolete) and the\n obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsYear",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsYear",
          "type": "function"
        },
        "index": {
          "description": "Parse year but allow for two-digit number obsolete and the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsYear",
          "package": "hsemail-ns",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the obsolete zone names and return the appropriate offset.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsZone",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsZone",
          "type": "function"
        },
        "index": {
          "description": "Match the obsolete zone names and return the appropriate offset",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "obsZone",
          "package": "hsemail-ns",
          "partial": "Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an arbitrary header field and return a tuple containing the\n \u003ccode\u003e\u003ca\u003efieldName\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunstructured\u003c/a\u003e\u003c/code\u003e text of the header. The name will\n \u003cem\u003enot\u003c/em\u003e contain the terminating colon.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "optionalField",
          "package": "hsemail-ns",
          "signature": "CharParser a (String, String)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#optionalField",
          "type": "function"
        },
        "index": {
          "description": "Parse an arbitrary header field and return tuple containing the fieldName and unstructured text of the header The name will not contain the terminating colon",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "optionalField",
          "normalized": "CharParser a(String,String)",
          "package": "hsemail-ns",
          "partial": "Field",
          "signature": "CharParser a(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:optionalField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eDate:\u003c/code\u003e\" header line and return the date it contains a\n \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "origDate",
          "package": "hsemail-ns",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#origDate",
          "type": "function"
        },
        "index": {
          "description": "Parse Date header line and return the date it contains CalendarTime",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "origDate",
          "package": "hsemail-ns",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:origDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "path",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "path",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either one or more \u003ccode\u003e\u003ca\u003eword\u003c/a\u003e\u003c/code\u003es or an \u003ccode\u003e\u003ca\u003eobsPhrase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "phrase",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#phrase",
          "type": "function"
        },
        "index": {
          "description": "Match either one or more word or an obsPhrase",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "phrase",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:phrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either \u003ccode\u003e\u003ca\u003eqtext\u003c/a\u003e\u003c/code\u003e or 'quotedPair '.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "qcontent",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#qcontent",
          "type": "function"
        },
        "index": {
          "description": "Match either qtext or quotedPair",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "qcontent",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:qcontent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any non-whitespace, non-control US-ASCII character except\n for \"\u003ccode\u003e\\\u003c/code\u003e\" and \"\u003ccode\u003e\"\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "qtext",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#qtext",
          "type": "function"
        },
        "index": {
          "description": "Match any non-whitespace non-control US-ASCII character except for and",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "qtext",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:qtext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a \"quoted pair\". All characters matched by \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e may be\n quoted. Note that the parsers returns \u003cem\u003eboth\u003c/em\u003e characters, the\n backslash and the actual content.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "quotedPair",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#quotedPair",
          "type": "function"
        },
        "index": {
          "description": "Match quoted pair All characters matched by text may be quoted Note that the parsers returns both characters the backslash and the actual content",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "quotedPair",
          "package": "hsemail-ns",
          "partial": "Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:quotedPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any number of \u003ccode\u003e\u003ca\u003eqcontent\u003c/a\u003e\u003c/code\u003e between double quotes. Any \u003ccode\u003e\u003ca\u003ecfws\u003c/a\u003e\u003c/code\u003e\n preceeding or following the \"atom\" is skipped automatically.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "quotedString",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#quotedString",
          "type": "function"
        },
        "index": {
          "description": "Match any number of qcontent between double quotes Any cfws preceeding or following the atom is skipped automatically",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "quotedString",
          "package": "hsemail-ns",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:quotedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "received",
          "package": "hsemail-ns",
          "signature": "CharParser a ([(String, String)], CalendarTime)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#received",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "received",
          "normalized": "CharParser a([(String,String)],CalendarTime)",
          "package": "hsemail-ns",
          "signature": "CharParser a([(String,String)],CalendarTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eReferences:\u003c/code\u003e\" header line and return the list of\n \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003es contained in it. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "references",
          "package": "hsemail-ns",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#references",
          "type": "function"
        },
        "index": {
          "description": "Parse References header line and return the list of msgId contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "references",
          "normalized": "CharParser a[String]",
          "package": "hsemail-ns",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:references"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eReply-To:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "replyTo",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#replyTo",
          "type": "function"
        },
        "index": {
          "description": "Parse Reply-To header line and return the addressList address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "replyTo",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "To",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:replyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Bcc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it. (This list may be empty.)\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentBcc",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentBcc",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Bcc header line and return the addressList address es contained in it This list may be empty",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentBcc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Bcc",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentBcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Cc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentCc",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentCc",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Cc header line and return the addressList address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentCc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "Cc",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentCc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Date:\u003c/code\u003e\" header line and return the date it\n contains as \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentDate",
          "package": "hsemail-ns",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentDate",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Date header line and return the date it contains as CalendarTime",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentDate",
          "package": "hsemail-ns",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-From:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentFrom",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentFrom",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-From header line and return the mailboxList address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentFrom",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "From",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Message-ID:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e \n contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentMsgId",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentMsgId",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Message-ID header line and return the msgId contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentMsgId",
          "package": "hsemail-ns",
          "partial": "Msg Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentMsgId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Sender:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentSender",
          "package": "hsemail-ns",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentSender",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Sender header line and return the mailboxList address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentSender",
          "package": "hsemail-ns",
          "partial": "Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-To:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e\n address contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentTo",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentTo",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-To header line and return the mailbox address contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "resentTo",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "partial": "To",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "returnPath",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#returnPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "returnPath",
          "package": "hsemail-ns",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:returnPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a two-digit number and return it's integer\n value. No range checking takes place.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "second",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#second",
          "type": "function"
        },
        "index": {
          "description": "This parser will match two-digit number and return it integer value No range checking takes place",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "second",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eSender:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e address\n contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "sender",
          "package": "hsemail-ns",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#sender",
          "type": "function"
        },
        "index": {
          "description": "Parse Sender header line and return the mailbox address contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "sender",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:sender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any of the RFC's \"special\" characters: \u003ccode\u003e()\u003c\u003e[]:;@,.\\\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "specials",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#specials",
          "type": "function"
        },
        "index": {
          "description": "Match any of the RFC special characters",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "specials",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:specials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eSubject:\u003c/code\u003e\" header line and return it's contents verbatim.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "subject",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#subject",
          "type": "function"
        },
        "index": {
          "description": "Parse Subject header line and return it contents verbatim",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "subject",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any US-ASCII character except for \u003ccode\u003er\u003c/code\u003e, \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "text",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#text",
          "type": "function"
        },
        "index": {
          "description": "Match any US-ASCII character except for",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "text",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a \u003ccode\u003e\u003ca\u003etimeOfDay\u003c/a\u003e\u003c/code\u003e specification followed by a \n \u003ccode\u003e\u003ca\u003ezone\u003c/a\u003e\u003c/code\u003e. It returns the tuple (TimeDiff,Int) corresponding to the\n return values of either parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "time",
          "package": "hsemail-ns",
          "signature": "CharParser a (TimeDiff, Int)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#time",
          "type": "function"
        },
        "index": {
          "description": "This parser will match timeOfDay specification followed by zone It returns the tuple TimeDiff Int corresponding to the return values of either parser",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "time",
          "normalized": "CharParser a(TimeDiff,Int)",
          "package": "hsemail-ns",
          "signature": "CharParser a(TimeDiff,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a time-of-day specification of \"\u003ccode\u003ehh:mm\u003c/code\u003e\" or\n \"\u003ccode\u003ehh:mm:ss\u003c/code\u003e\" and return the corrsponding time as a \u003ccode\u003e\u003ca\u003eTimeDiff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "timeOfDay",
          "package": "hsemail-ns",
          "signature": "CharParser a TimeDiff",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#timeOfDay",
          "type": "function"
        },
        "index": {
          "description": "This parser will match time-of-day specification of hh mm or hh mm ss and return the corrsponding time as TimeDiff",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "timeOfDay",
          "package": "hsemail-ns",
          "partial": "Of Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:timeOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eTo:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "to",
          "package": "hsemail-ns",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#to",
          "type": "function"
        },
        "index": {
          "description": "Parse To header line and return the addressList address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "to",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail-ns",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunfold\u003c/code\u003e \u003ccode\u003e=\u003c/code\u003e \u003ccode\u003ebetween (optional cfws) (optional cfws)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "unfold",
          "package": "hsemail-ns",
          "signature": "CharParser a b -\u003e CharParser a b",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "unfold between optional cfws optional cfws",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "unfold",
          "normalized": "CharParser a b-\u003eCharParser a b",
          "package": "hsemail-ns",
          "signature": "CharParser a b-\u003eCharParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any number of \u003ccode\u003e\u003ca\u003eutext\u003c/a\u003e\u003c/code\u003e tokens.\n\u003c/p\u003e\u003cp\u003e\"Unstructured text\" is used in free text fields such as \u003ccode\u003e\u003ca\u003esubject\u003c/a\u003e\u003c/code\u003e.\n Please note that any comments or whitespace that prefaces or\n follows the actual \u003ccode\u003e\u003ca\u003eutext\u003c/a\u003e\u003c/code\u003e is \u003cem\u003eincluded\u003c/em\u003e in the returned string.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "unstructured",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#unstructured",
          "type": "function"
        },
        "index": {
          "description": "Match any number of utext tokens Unstructured text is used in free text fields such as subject Please note that any comments or whitespace that prefaces or follows the actual utext is included in the returned string",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "unstructured",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:unstructured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any non-whitespace, non-control US-ASCII character except\n for \"\u003ccode\u003e\\\u003c/code\u003e\" and \"\u003ccode\u003e\"\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "utext",
          "package": "hsemail-ns",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#utext",
          "type": "function"
        },
        "index": {
          "description": "Match any non-whitespace non-control US-ASCII character except for and",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "utext",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:utext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003equotedString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "word",
          "package": "hsemail-ns",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#word",
          "type": "function"
        },
        "index": {
          "description": "Match either atom or quotedString",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "word",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a four digit number and return it's integer\n value. No range checking is performed.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "year",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#year",
          "type": "function"
        },
        "index": {
          "description": "This parser will match four digit number and return it integer value No range checking is performed",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "year",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a timezone specification of the form\n \"\u003ccode\u003e+hhmm\u003c/code\u003e\" or \"\u003ccode\u003e-hhmm\u003c/code\u003e\" and return the zone's offset to UTC in\n seconds as an integer. \u003ccode\u003e\u003ca\u003eobsZone\u003c/a\u003e\u003c/code\u003e is matched as well. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "zone",
          "package": "hsemail-ns",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#zone",
          "type": "function"
        },
        "index": {
          "description": "This parser will match timezone specification of the form hhmm or hhmm and return the zone offset to UTC in seconds as an integer obsZone is matched as well",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
          "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
          "name": "zone",
          "package": "hsemail-ns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:zone"
      }
    }
  ]
]