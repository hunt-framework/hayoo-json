[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides parsers for the grammar defined in\n   RFC2234, \"Augmented BNF for Syntax Specifications:\n   ABNF\", \u003ca\u003ehttp://www.faqs.org/rfcs/rfc2234.html\u003c/a\u003e. The\n   terminal called \u003ccode\u003echar\u003c/code\u003e in the RFC is called \u003ccode\u003e\u003ca\u003echaracter\u003c/a\u003e\u003c/code\u003e\n   here to avoid conflicts with Parsec's \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eAddendum for Nonstandard Version:\n   This module deviates from the RFC currently in \n        * none currently.\n\u003c/p\u003e\u003cp\u003eThese allowances are subject to change, and should not be\n   used when parsing incoming messages, only for parsing messages\n   that have been stored on disk. The goal of these nonstandard\n   Parsers is to provide a higher probability of parsing _common_\n   Headers (rather than only those explicitly defined in the RFC)\n   as well as allowing for potential oddities / changes that may\n   occur during storage of an email message. These parsers have\n   be rebranded so as not to conflict with the standard parsers\n   available from the excellent \u003ccode\u003ehsemail\u003c/code\u003e package, upon which\n   this package depends. For patches to this package only (namely\n   'hsemail-ns', patches should be sent to \u003ca\u003ejfredett@gmail.com\u003c/a\u003e, \n   for patches to the Proper parsers, you can send them to the\n   original maintainer. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "module",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html",
        "fct-type": "module",
        "title": "Rfc2234NS"
      },
      "index": {
        "description": "This module provides parsers for the grammar defined in RFC2234 Augmented BNF for Syntax Specifications ABNF http www.faqs.org rfcs rfc2234.html The terminal called char in the RFC is called character here to avoid conflicts with Parsec char function Addendum for Nonstandard Version This module deviates from the RFC currently in none currently These allowances are subject to change and should not be used when parsing incoming messages only for parsing messages that have been stored on disk The goal of these nonstandard Parsers is to provide higher probability of parsing common Headers rather than only those explicitly defined in the RFC as well as allowing for potential oddities changes that may occur during storage of an email message These parsers have be rebranded so as not to conflict with the standard parsers available from the excellent hsemail package upon which this package depends For patches to this package only namely hsemail-ns patches should be sent to jfredett@gmail.com for patches to the Proper parsers you can send them to the original maintainer",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "Rfc2234NS",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Rfc NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any character of the alphabet.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#alpha",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "Match any character of the alphabet",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "alpha",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:bit",
      "description": {
        "fct-descr": "\u003cp\u003eMatch either \"1\" or \"0\".\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#bit",
        "fct-type": "function",
        "title": "bit"
      },
      "index": {
        "description": "Match either or",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "bit",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:caseChar",
      "description": {
        "fct-descr": "\u003cp\u003eCase-insensitive variant of Parsec's \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Char -\u003e CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#caseChar",
        "fct-type": "function",
        "title": "caseChar"
      },
      "index": {
        "description": "Case-insensitive variant of Parsec char function",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "caseChar",
        "normalized": "Char-\u003eCharParser a Char",
        "package": "hsemail-ns",
        "partial": "Char",
        "signature": "Char-\u003eCharParser st Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:caseString",
      "description": {
        "fct-descr": "\u003cp\u003eCase-insensitive variant of Parsec's \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "String -\u003e CharParser st ()",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#caseString",
        "fct-type": "function",
        "title": "caseString"
      },
      "index": {
        "description": "Case-insensitive variant of Parsec string function",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "caseString",
        "normalized": "String-\u003eCharParser a()",
        "package": "hsemail-ns",
        "partial": "String",
        "signature": "String-\u003eCharParser st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:character",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any 7-bit US-ASCII character except for NUL (ASCII value 0, that is).\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#character",
        "fct-type": "function",
        "title": "character"
      },
      "index": {
        "description": "Match any bit US-ASCII character except for NUL ASCII value that is",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "character",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:cr",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the carriage return character \u003ccode\u003e\\r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#cr",
        "fct-type": "function",
        "title": "cr"
      },
      "index": {
        "description": "Match the carriage return character",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "cr",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:crlf",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the Internet newline \u003ccode\u003e\\r\\n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#crlf",
        "fct-type": "function",
        "title": "crlf"
      },
      "index": {
        "description": "Match the Internet newline",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "crlf",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:ctl",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any US-ASCII control character. That is\n any character with a decimal value in the range of [0..31,127].\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#ctl",
        "fct-type": "function",
        "title": "ctl"
      },
      "index": {
        "description": "Match any US-ASCII control character That is any character with decimal value in the range of",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "ctl",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:dquote",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the double quote character \"\u003ccode\u003e\"\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#dquote",
        "fct-type": "function",
        "title": "dquote"
      },
      "index": {
        "description": "Match the double quote character",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "dquote",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:hexdig",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any character that is valid in a hexadecimal number;\n ['0'..'9'] and ['A'..'F','a'..'f'] that is.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#hexdig",
        "fct-type": "function",
        "title": "hexdig"
      },
      "index": {
        "description": "Match any character that is valid in hexadecimal number and that is",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "hexdig",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:htab",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the tab (\"\u003ccode\u003e\\t\u003c/code\u003e\") character.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#htab",
        "fct-type": "function",
        "title": "htab"
      },
      "index": {
        "description": "Match the tab character",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "htab",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:lf",
      "description": {
        "fct-descr": "\u003cp\u003eMatch returns the linefeed character \u003ccode\u003e\\n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#lf",
        "fct-type": "function",
        "title": "lf"
      },
      "index": {
        "description": "Match returns the linefeed character",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "lf",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:lwsp",
      "description": {
        "fct-descr": "\u003cp\u003eMatch \"linear white-space\". That is any number of consecutive\n \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e, optionally followed by a \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e and (at least) one more\n \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#lwsp",
        "fct-type": "function",
        "title": "lwsp"
      },
      "index": {
        "description": "Match linear white-space That is any number of consecutive wsp optionally followed by crlf and at least one more wsp",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "lwsp",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:manyN",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a parser at least \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Int -\u003e GenParser a b c -\u003e GenParser a b [c]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#manyN",
        "fct-type": "function",
        "title": "manyN"
      },
      "index": {
        "description": "Match parser at least times",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "manyN",
        "normalized": "Int-\u003eGenParser a b c-\u003eGenParser a b[c]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "Int-\u003eGenParser a b c-\u003eGenParser a b[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:manyNtoM",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a parser at least \u003ccode\u003en\u003c/code\u003e times, but no more than \u003ccode\u003em\u003c/code\u003e times.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Int -\u003e Int -\u003e GenParser a b c -\u003e GenParser a b [c]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#manyNtoM",
        "fct-type": "function",
        "title": "manyNtoM"
      },
      "index": {
        "description": "Match parser at least times but no more than times",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "manyNtoM",
        "normalized": "Int-\u003eInt-\u003eGenParser a b c-\u003eGenParser a b[c]",
        "package": "hsemail-ns",
        "partial": "Nto",
        "signature": "Int-\u003eInt-\u003eGenParser a b c-\u003eGenParser a b[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:octet",
      "description": {
        "fct-descr": "\u003cp\u003eMatch \u003cem\u003eany\u003c/em\u003e character.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#octet",
        "fct-type": "function",
        "title": "octet"
      },
      "index": {
        "description": "Match any character",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "octet",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:parsec2read",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to generate \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e-based instances for\n the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Parser a -\u003e String -\u003e [(a, String)]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#parsec2read",
        "fct-type": "function",
        "title": "parsec2read"
      },
      "index": {
        "description": "Helper function to generate Parser based instances for the Read class",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "parsec2read",
        "normalized": "Parser a-\u003eString-\u003e[(a,String)]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "Parser a-\u003eString-\u003e[(a,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:quotedPair",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a \"quoted pair\". Any characters (excluding CR and\n LF) may be quoted.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#quotedPair",
        "fct-type": "function",
        "title": "quotedPair"
      },
      "index": {
        "description": "Match quoted pair Any characters excluding CR and LF may be quoted",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "quotedPair",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:quotedString",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a quoted string. The specials \"\u003ccode\u003e\\\u003c/code\u003e\" and\n \"\u003ccode\u003e\"\u003c/code\u003e\" must be escaped inside a quoted string; CR and\n LF are not allowed at all.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#quotedString",
        "fct-type": "function",
        "title": "quotedString"
      },
      "index": {
        "description": "Match quoted string The specials and must be escaped inside quoted string CR and LF are not allowed at all",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "quotedString",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:sp",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the space.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#sp",
        "fct-type": "function",
        "title": "sp"
      },
      "index": {
        "description": "Match the space",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "sp",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:vchar",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any printable ASCII character. (The \"v\" stands for\n \"visible\".) That is any character in the decimal range of\n [33..126].\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#vchar",
        "fct-type": "function",
        "title": "vchar"
      },
      "index": {
        "description": "Match any printable ASCII character The stands for visible That is any character in the decimal range of",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "vchar",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2234NS.html#v:wsp",
      "description": {
        "fct-descr": "\u003cp\u003eMatch either \u003ccode\u003e\u003ca\u003esp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehtab\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser st Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2234NS.html#wsp",
        "fct-type": "function",
        "title": "wsp"
      },
      "index": {
        "description": "Match either sp or htab",
        "hierarchy": "Text ParserCombinators Parsec Rfc2234NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2234NS",
        "name": "wsp",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides parsers for the grammar defined in\n   RFC2822, \"Internet Message Format\",\n   \u003ca\u003ehttp://www.faqs.org/rfcs/rfc2822.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePlease note:\u003c/em\u003e The module is not particularly well tested.\n\u003c/p\u003e\u003cp\u003eAddendum for Nonstandard Version:\n   This module deviates from the RFC currently in \n        * Allowing for non-standard line endings.\n\u003c/p\u003e\u003cp\u003eThese allowances are subject to change, and should not be\n   used when parsing incoming messages, only for parsing messages\n   that have been stored on disk. The goal of these nonstandard\n   Parsers is to provide a higher probability of parsing Common_ \n   Headers (rather than only those explicitly defined in the RFC)\n   as well as allowing for potential oddities / changes that may\n   occur during storage of an email message. These parsers have\n   be rebranded so as not to conflict with the standard parsers\n   available from the excellent \u003ccode\u003ehsemail\u003c/code\u003e package, upon which\n   this package depends. For patches to this package only (namely\n   'hsemail-ns', patches should be sent to \u003ca\u003ejfredett@gmail.com\u003c/a\u003e, \n   for patches to the Proper parsers, you can send them to the\n   original maintainer. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "module",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html",
        "fct-type": "module",
        "title": "Rfc2822NS"
      },
      "index": {
        "description": "This module provides parsers for the grammar defined in RFC2822 Internet Message Format http www.faqs.org rfcs rfc2822.html Please note The module is not particularly well tested Addendum for Nonstandard Version This module deviates from the RFC currently in Allowing for non-standard line endings These allowances are subject to change and should not be used when parsing incoming messages only for parsing messages that have been stored on disk The goal of these nonstandard Parsers is to provide higher probability of parsing Common Headers rather than only those explicitly defined in the RFC as well as allowing for potential oddities changes that may occur during storage of an email message These parsers have be rebranded so as not to conflict with the standard parsers available from the excellent hsemail package upon which this package depends For patches to this package only namely hsemail-ns patches should be sent to jfredett@gmail.com for patches to the Proper parsers you can send them to the original maintainer",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Rfc2822NS",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Rfc NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type represents any of the header fields defined in this\n RFC. Each of the various instances contains with the return value\n of the corresponding parser.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "data",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "This data type represents any of the header fields defined in this RFC Each of the various instances contains with the return value of the corresponding parser",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Field",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type repesents a parsed Internet Message as defined in\n this RFC. It consists of an arbitrary number of header lines,\n represented in the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e data type, and a message body, which may\n be empty.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "data",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "This data type repesents parsed Internet Message as defined in this RFC It consists of an arbitrary number of header lines represented in the Field data type and message body which may be empty",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Message",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#t:NameAddr",
      "description": {
        "fct-descr": "\u003cp\u003eA NameAddr is composed of an optional realname a mandatory\n e-mail \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "data",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#NameAddr",
        "fct-type": "data",
        "title": "NameAddr"
      },
      "index": {
        "description": "NameAddr is composed of an optional realname mandatory e-mail address",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "NameAddr",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Name Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Bcc",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Bcc [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "Bcc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Bcc",
        "normalized": "Bcc[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Bcc",
        "signature": "Bcc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Cc",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Cc [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "Cc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Cc",
        "normalized": "Cc[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Cc",
        "signature": "Cc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Comments",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Comments String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "Comments"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Comments",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Comments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Date",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Date CalendarTime",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "Date"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Date",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:From",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "From [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "From"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "From",
        "normalized": "From[NameAddr]",
        "package": "hsemail-ns",
        "partial": "From",
        "signature": "From[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:InReplyTo",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "InReplyTo [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "InReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "InReplyTo",
        "normalized": "InReplyTo[String]",
        "package": "hsemail-ns",
        "partial": "In Reply To",
        "signature": "InReplyTo[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Keywords",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Keywords [[String]]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "Keywords"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Keywords",
        "normalized": "Keywords[[String]]",
        "package": "hsemail-ns",
        "partial": "Keywords",
        "signature": "Keywords[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Message",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Message [Field] String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Message",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Message",
        "normalized": "Message[Field]String",
        "package": "hsemail-ns",
        "partial": "Message",
        "signature": "Message[Field]String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:MessageID",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "MessageID String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "MessageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "MessageID",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Message ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:NameAddr",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "NameAddr",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#NameAddr",
        "fct-type": "function",
        "title": "NameAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "NameAddr",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Name Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ObsReceived",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ObsReceived [(String, String)]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ObsReceived"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ObsReceived",
        "normalized": "ObsReceived[(String,String)]",
        "package": "hsemail-ns",
        "partial": "Obs Received",
        "signature": "ObsReceived[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:OptionalField",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "OptionalField String String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "OptionalField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "OptionalField",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Optional Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Received",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Received ([(String, String)], CalendarTime)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "Received"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Received",
        "normalized": "Received([(String,String)],CalendarTime)",
        "package": "hsemail-ns",
        "partial": "Received",
        "signature": "Received([(String,String)],CalendarTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:References",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "References [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "References"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "References",
        "normalized": "References[String]",
        "package": "hsemail-ns",
        "partial": "References",
        "signature": "References[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ReplyTo",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ReplyTo [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ReplyTo",
        "normalized": "ReplyTo[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Reply To",
        "signature": "ReplyTo[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentBcc",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ResentBcc [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ResentBcc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ResentBcc",
        "normalized": "ResentBcc[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent Bcc",
        "signature": "ResentBcc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentCc",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ResentCc [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ResentCc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ResentCc",
        "normalized": "ResentCc[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent Cc",
        "signature": "ResentCc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentDate",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ResentDate CalendarTime",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ResentDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ResentDate",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Resent Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentFrom",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ResentFrom [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ResentFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ResentFrom",
        "normalized": "ResentFrom[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent From",
        "signature": "ResentFrom[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentMessageID",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ResentMessageID String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ResentMessageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ResentMessageID",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Resent Message ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentReplyTo",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ResentReplyTo [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ResentReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ResentReplyTo",
        "normalized": "ResentReplyTo[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent Reply To",
        "signature": "ResentReplyTo[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentSender",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ResentSender NameAddr",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ResentSender"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ResentSender",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Resent Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ResentTo",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ResentTo [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ResentTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ResentTo",
        "normalized": "ResentTo[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent To",
        "signature": "ResentTo[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ReturnPath",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "ReturnPath String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "ReturnPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ReturnPath",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Return Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Sender",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Sender NameAddr",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "Sender"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Sender",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:Subject",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Subject String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "Subject"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "Subject",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Subject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:To",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "To [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#Field",
        "fct-type": "function",
        "title": "To"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "To",
        "normalized": "To[NameAddr]",
        "package": "hsemail-ns",
        "partial": "To",
        "signature": "To[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:addrSpec",
      "description": {
        "fct-descr": "\u003cp\u003eParse an \"address specification\". That is a \u003ccode\u003e\u003ca\u003elocalPart\u003c/a\u003e\u003c/code\u003e, followed\n by an \"\u003ccode\u003e@\u003c/code\u003e\" character, followed by a \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e. Return the complete\n address as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, ignoring any whitespace or any comments.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#addrSpec",
        "fct-type": "function",
        "title": "addrSpec"
      },
      "index": {
        "description": "Parse an address specification That is localPart followed by an character followed by domain Return the complete address as String ignoring any whitespace or any comments",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "addrSpec",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:address",
      "description": {
        "fct-descr": "\u003cp\u003eParse a single \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e or an address \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e and return the\n address(es).\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#address",
        "fct-type": "function",
        "title": "address"
      },
      "index": {
        "description": "Parse single mailbox or an address group and return the address es",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "address",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:addressList",
      "description": {
        "fct-descr": "\u003cp\u003eParse a list of \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e addresses, every two addresses being\n separated by a comma, and return the list of found address(es).\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#addressList",
        "fct-type": "function",
        "title": "addressList"
      },
      "index": {
        "description": "Parse list of address addresses every two addresses being separated by comma and return the list of found address es",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "addressList",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "List",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:angleAddr",
      "description": {
        "fct-descr": "\u003cp\u003eParse an \u003ccode\u003eangle_addr\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eobsAngleAddr\u003c/a\u003e\u003c/code\u003e and return the address.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#angleAddr",
        "fct-type": "function",
        "title": "angleAddr"
      },
      "index": {
        "description": "Parse an angle addr or an obsAngleAddr and return the address",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "angleAddr",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:atext",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any US-ASCII character except for control characters,\n \u003ccode\u003e\u003ca\u003especials\u003c/a\u003e\u003c/code\u003e, or space. \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edotAtom\u003c/a\u003e\u003c/code\u003e are made up of this. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#atext",
        "fct-type": "function",
        "title": "atext"
      },
      "index": {
        "description": "Match any US-ASCII character except for control characters specials or space atom and dotAtom are made up of this",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "atext",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:atom",
      "description": {
        "fct-descr": "\u003cp\u003eMatch one or more \u003ccode\u003e\u003ca\u003eatext\u003c/a\u003e\u003c/code\u003e characters and skip any preceeding or\n trailing \u003ccode\u003e\u003ca\u003ecfws\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#atom",
        "fct-type": "function",
        "title": "atom"
      },
      "index": {
        "description": "Match one or more atext characters and skip any preceeding or trailing cfws",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "atom",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:bcc",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eBcc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#bcc",
        "fct-type": "function",
        "title": "bcc"
      },
      "index": {
        "description": "Parse Bcc header line and return the addressList address es contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "bcc",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will return a message body as specified by this RFC;\n that is basically any number of \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e characters, which may be\n divided into separate lines by \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#body",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "This parser will return message body as specified by this RFC that is basically any number of text characters which may be divided into separate lines by crlf",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "body",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:cc",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eCc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#cc",
        "fct-type": "function",
        "title": "cc"
      },
      "index": {
        "description": "Parse Cc header line and return the addressList address es contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "cc",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:cfws",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any combination of \u003ccode\u003e\u003ca\u003efws\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecomments\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#cfws",
        "fct-type": "function",
        "title": "cfws"
      },
      "index": {
        "description": "Match any combination of fws and comments",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "cfws",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:comment",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a \"comments\". That is any combination of \u003ccode\u003e\u003ca\u003ectext\u003c/a\u003e\u003c/code\u003e,\n 'quotedPair 's, and \u003ccode\u003e\u003ca\u003efws\u003c/a\u003e\u003c/code\u003e between brackets. Comments may nest.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "Match comments That is any combination of ctext quotedPair and fws between brackets Comments may nest",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "comment",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:comments",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eComments:\u003c/code\u003e\" header line and return it's contents verbatim.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#comments",
        "fct-type": "function",
        "title": "comments"
      },
      "index": {
        "description": "Parse Comments header line and return it contents verbatim",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "comments",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ctext",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any non-whitespace, non-control character except for \"\u003ccode\u003e(\u003c/code\u003e\",\n \"\u003ccode\u003e)\u003c/code\u003e\", and \"\u003ccode\u003e\\\u003c/code\u003e\". This is used to describe the legal content of\n \u003ccode\u003e\u003ca\u003ecomment\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This parser accepts 8-bit characters, even though this is\n not legal according to the RFC. Unfortunately, 8-bit content in\n comments has become fairly common in the real world, so we'll just\n accept the fact.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#ctext",
        "fct-type": "function",
        "title": "ctext"
      },
      "index": {
        "description": "Match any non-whitespace non-control character except for and This is used to describe the legal content of comment Note This parser accepts bit characters even though this is not legal according to the RFC Unfortunately bit content in comments has become fairly common in the real world so we ll just accept the fact",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ctext",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:date",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a date of the form \"\u003ccode\u003edd:mm:yyyy\u003c/code\u003e\" and return\n a tripple of the form (Int,Month,Int) - corresponding to\n (year,month,day).\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a (Int, Month, Int)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#date",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "This parser will match date of the form dd mm yyyy and return tripple of the form Int Month Int corresponding to year month day",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "date",
        "normalized": "CharParser a(Int,Month,Int)",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a(Int,Month,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dateTime",
      "description": {
        "fct-descr": "\u003cp\u003eParse a date and time specification of the form\n\u003c/p\u003e\u003cpre\u003e   Thu, 19 Dec 2002 20:35:46 +0200\n\u003c/pre\u003e\u003cp\u003ewhere the weekday specification \"\u003ccode\u003eThu,\u003c/code\u003e\" is optional. The parser\n returns a \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e, which is set to the appropriate values.\n Note, though, that not all fields of \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e will\n necessarily be set correctly! Obviously, when no weekday has been\n provided, the parser will set this field to \u003ccode\u003e\u003ca\u003eMonday\u003c/a\u003e\u003c/code\u003e - regardless\n of whether the day actually is a monday or not. Similarly, the day\n of the year will always be returned as \u003ccode\u003e0\u003c/code\u003e. The timezone name will\n always be empty: \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNor will the \u003ccode\u003e\u003ca\u003edateTime\u003c/a\u003e\u003c/code\u003e parser perform \u003cem\u003eany\u003c/em\u003e consistency checking.\n It will accept\n\u003c/p\u003e\u003cpre\u003e    40 Apr 2002 13:12 +0100\n\u003c/pre\u003e\u003cp\u003eas a perfectly valid date.\n\u003c/p\u003e\u003cp\u003eIn order to get all fields set to meaningful values, and in order\n to verify the date's consistency, you will have to feed it into any\n of the conversion routines provided in \u003ca\u003eSystem.Time\u003c/a\u003e, such as\n \u003ccode\u003e\u003ca\u003etoClockTime\u003c/a\u003e\u003c/code\u003e. (When doing this, keep in mind that most functions\n return \u003cem\u003elocal time\u003c/em\u003e. This will not necessarily be the time you're\n expecting.)\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a CalendarTime",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dateTime",
        "fct-type": "function",
        "title": "dateTime"
      },
      "index": {
        "description": "Parse date and time specification of the form Thu Dec where the weekday specification Thu is optional The parser returns CalendarTime which is set to the appropriate values Note though that not all fields of CalendarTime will necessarily be set correctly Obviously when no weekday has been provided the parser will set this field to Monday regardless of whether the day actually is monday or not Similarly the day of the year will always be returned as The timezone name will always be empty Nor will the dateTime parser perform any consistency checking It will accept Apr as perfectly valid date In order to get all fields set to meaningful values and in order to verify the date consistency you will have to feed it into any of the conversion routines provided in System.Time such as toClockTime When doing this keep in mind that most functions return local time This will not necessarily be the time you re expecting",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "dateTime",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:day",
      "description": {
        "fct-descr": "\u003cp\u003eMatch either an \u003ccode\u003e\u003ca\u003eobsDay\u003c/a\u003e\u003c/code\u003e, or a one or two digit number and return it. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#day",
        "fct-type": "function",
        "title": "day"
      },
      "index": {
        "description": "Match either an obsDay or one or two digit number and return it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "day",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dayName",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will the abbreviated weekday names (\"\u003ccode\u003eMon\u003c/code\u003e\", \"\u003ccode\u003eTue\u003c/code\u003e\", ...)\n and return the appropriate \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Day",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dayName",
        "fct-type": "function",
        "title": "dayName"
      },
      "index": {
        "description": "This parser will the abbreviated weekday names Mon Tue and return the appropriate Day value",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "dayName",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dayOfWeek",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a \u003ccode\u003e\u003ca\u003edayName\u003c/a\u003e\u003c/code\u003e, optionally wrapped in folding\n whitespace, or an \u003ccode\u003e\u003ca\u003eobsDayOfWeek\u003c/a\u003e\u003c/code\u003e and return it's \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e value.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Day",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dayOfWeek",
        "fct-type": "function",
        "title": "dayOfWeek"
      },
      "index": {
        "description": "This parser will match dayName optionally wrapped in folding whitespace or an obsDayOfWeek and return it Day value",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "dayOfWeek",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Of Week",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dcontent",
      "description": {
        "fct-descr": "\u003cp\u003eParse and return any characters that are legal in a\n \u003ccode\u003e\u003ca\u003edomainLiteral\u003c/a\u003e\u003c/code\u003e. That is \u003ccode\u003e\u003ca\u003edtext\u003c/a\u003e\u003c/code\u003e or a 'quotedPair '. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dcontent",
        "fct-type": "function",
        "title": "dcontent"
      },
      "index": {
        "description": "Parse and return any characters that are legal in domainLiteral That is dtext or quotedPair",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "dcontent",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:displayName",
      "description": {
        "fct-descr": "\u003cp\u003eParse and return a \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#displayName",
        "fct-type": "function",
        "title": "displayName"
      },
      "index": {
        "description": "Parse and return phrase",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "displayName",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:domain",
      "description": {
        "fct-descr": "\u003cp\u003eParse and return a \"domain part\" of an \u003ccode\u003e\u003ca\u003eaddrSpec\u003c/a\u003e\u003c/code\u003e. That is either \n a \u003ccode\u003e\u003ca\u003edotAtom\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003edomainLiteral\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#domain",
        "fct-type": "function",
        "title": "domain"
      },
      "index": {
        "description": "Parse and return domain part of an addrSpec That is either dotAtom or domainLiteral",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "domain",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:domainLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"domain literal\". That is a \"\u003ccode\u003e[\u003c/code\u003e\" character, followed by\n any amount of \u003ccode\u003e\u003ca\u003edcontent\u003c/a\u003e\u003c/code\u003e, followed by a terminating \"\u003ccode\u003e]\u003c/code\u003e\"\n character. The complete string is returned verbatim.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#domainLiteral",
        "fct-type": "function",
        "title": "domainLiteral"
      },
      "index": {
        "description": "Parse domain literal That is character followed by any amount of dcontent followed by terminating character The complete string is returned verbatim",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "domainLiteral",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dotAtom",
      "description": {
        "fct-descr": "\u003cp\u003eMatch \u003ccode\u003e\u003ca\u003edotAtomText\u003c/a\u003e\u003c/code\u003e and skip any preceeding or trailing \u003ccode\u003e\u003ca\u003ecfws\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dotAtom",
        "fct-type": "function",
        "title": "dotAtom"
      },
      "index": {
        "description": "Match dotAtomText and skip any preceeding or trailing cfws",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "dotAtom",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dotAtomText",
      "description": {
        "fct-descr": "\u003cp\u003eMatch two or more \u003ccode\u003e\u003ca\u003eatext\u003c/a\u003e\u003c/code\u003es interspersed by dots.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dotAtomText",
        "fct-type": "function",
        "title": "dotAtomText"
      },
      "index": {
        "description": "Match two or more atext interspersed by dots",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "dotAtomText",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Atom Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:dtext",
      "description": {
        "fct-descr": "\u003cp\u003eParse and return any ASCII characters except \"\u003ccode\u003e[\u003c/code\u003e\", \"\u003ccode\u003e]\u003c/code\u003e\", and\n \"\u003ccode\u003e\\\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#dtext",
        "fct-type": "function",
        "title": "dtext"
      },
      "index": {
        "description": "Parse and return any ASCII characters except and",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "dtext",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:fieldName",
      "description": {
        "fct-descr": "\u003cp\u003eParse and return an arbitrary header field name. That is one or\n more \u003ccode\u003e\u003ca\u003eftext\u003c/a\u003e\u003c/code\u003e characters.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#fieldName",
        "fct-type": "function",
        "title": "fieldName"
      },
      "index": {
        "description": "Parse and return an arbitrary header field name That is one or more ftext characters",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "fieldName",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:fields",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will parse an arbitrary number of header fields as\n defined in this RFC. For each field, an appropriate \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e value\n is created, all of them making up the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e list that this parser\n returns.\n\u003c/p\u003e\u003cp\u003eIf you look at the implementation of this parser, you will find\n that it uses Parsec's \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e modifier around \u003cem\u003eall\u003c/em\u003e of the fields.\n The idea behind this is that fields, which contain syntax errors,\n fall back to the catch-all \u003ccode\u003e\u003ca\u003eoptionalField\u003c/a\u003e\u003c/code\u003e. Thus, this parser will \n hardly ever return a syntax error -- what conforms with the idea\n that any message that can possibly be accepted \u003cem\u003eshould\u003c/em\u003e be.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [Field]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#fields",
        "fct-type": "function",
        "title": "fields"
      },
      "index": {
        "description": "This parser will parse an arbitrary number of header fields as defined in this RFC For each field an appropriate Field value is created all of them making up the Field list that this parser returns If you look at the implementation of this parser you will find that it uses Parsec try modifier around all of the fields The idea behind this is that fields which contain syntax errors fall back to the catch-all optionalField Thus this parser will hardly ever return syntax error what conforms with the idea that any message that can possibly be accepted should be",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "fields",
        "normalized": "CharParser a[Field]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[Field]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:from",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eFrom:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#from",
        "fct-type": "function",
        "title": "from"
      },
      "index": {
        "description": "Parse From header line and return the mailboxList address es contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "from",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:ftext",
      "description": {
        "fct-descr": "\u003cp\u003eMatch and return any ASCII character except for control\n characters, whitespace, and \"\u003ccode\u003e:\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#ftext",
        "fct-type": "function",
        "title": "ftext"
      },
      "index": {
        "description": "Match and return any ASCII character except for control characters whitespace and",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "ftext",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:fws",
      "description": {
        "fct-descr": "\u003cp\u003eMatch \"folding whitespace\". That is any combination of \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#fws",
        "fct-type": "function",
        "title": "fws"
      },
      "index": {
        "description": "Match folding whitespace That is any combination of wsp and crlf followed by wsp",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "fws",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"group\" of addresses. That is a \u003ccode\u003e\u003ca\u003edisplayName\u003c/a\u003e\u003c/code\u003e, followed\n by a colon, optionally followed by a \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e, followed by a \n semicolon. The found address(es) are returned - what may be none.\n Here is an example:\n\u003c/p\u003e\u003cpre\u003e    parse group \"\" \"my group: user1@example.org, user2@example.org;\"\n\u003c/pre\u003e\u003cp\u003eThis input comes out as:\n\u003c/p\u003e\u003cpre\u003e    Right [\"user1@example.org\",\"user2@example.org\"]\n\u003c/pre\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Parse group of addresses That is displayName followed by colon optionally followed by mailboxList followed by semicolon The found address es are returned what may be none Here is an example parse group my group user1@example.org user2@example.org This input comes out as Right user1@example.org user2@example.org",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "group",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:header",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a parser for a message header line from the\n header's name and a parser for the body.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "String -\u003e CharParser a b -\u003e CharParser a b",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#header",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "Construct parser for message header line from the header name and parser for the body",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "header",
        "normalized": "String-\u003eCharParser a b-\u003eCharParser a b",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "String-\u003eCharParser a b-\u003eCharParser a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:hour",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a two-digit number and return it's integer\n value. No range checking is performed.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#hour",
        "fct-type": "function",
        "title": "hour"
      },
      "index": {
        "description": "This parser will match two-digit number and return it integer value No range checking is performed",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "hour",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:idLeft",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"left ID\" part of a \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e. This is almost identical to \n the \u003ccode\u003e\u003ca\u003elocalPart\u003c/a\u003e\u003c/code\u003e of an e-mail address, but with stricter rules\n about folding and whitespace.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#idLeft",
        "fct-type": "function",
        "title": "idLeft"
      },
      "index": {
        "description": "Parse left ID part of msgId This is almost identical to the localPart of an e-mail address but with stricter rules about folding and whitespace",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "idLeft",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:idRight",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"right ID\" part of a \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e. This is almost identical to \n the \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e of an e-mail address, but with stricter rules about\n folding and whitespace.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#idRight",
        "fct-type": "function",
        "title": "idRight"
      },
      "index": {
        "description": "Parse right ID part of msgId This is almost identical to the domain of an e-mail address but with stricter rules about folding and whitespace",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "idRight",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:inReplyTo",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eIn-Reply-To:\u003c/code\u003e\" header line and return the list of\n \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003es contained in it. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#inReplyTo",
        "fct-type": "function",
        "title": "inReplyTo"
      },
      "index": {
        "description": "Parse In-Reply-To header line and return the list of msgId contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "inReplyTo",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "Reply To",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:itemName",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#itemName",
        "fct-type": "function",
        "title": "itemName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "itemName",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:itemValue",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#itemValue",
        "fct-type": "function",
        "title": "itemValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "itemValue",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:keywords",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eKeywords:\u003c/code\u003e\" header line and return the list of \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003es\n found. Please not that each phrase is again a list of \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003es, as\n returned by the \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e parser.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [[String]]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#keywords",
        "fct-type": "function",
        "title": "keywords"
      },
      "index": {
        "description": "Parse Keywords header line and return the list of phrase found Please not that each phrase is again list of atom as returned by the phrase parser",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "keywords",
        "normalized": "CharParser a[[String]]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:localPart",
      "description": {
        "fct-descr": "\u003cp\u003eParse and return a \"local part\" of an \u003ccode\u003e\u003ca\u003eaddrSpec\u003c/a\u003e\u003c/code\u003e. That is either \n a \u003ccode\u003e\u003ca\u003edotAtom\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003equotedString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#localPart",
        "fct-type": "function",
        "title": "localPart"
      },
      "index": {
        "description": "Parse and return local part of an addrSpec That is either dotAtom or quotedString",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "localPart",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:mailbox",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003enameAddr\u003c/a\u003e\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eaddrSpec\u003c/a\u003e\u003c/code\u003e and return the  \n address.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a NameAddr",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#mailbox",
        "fct-type": "function",
        "title": "mailbox"
      },
      "index": {
        "description": "Parse nameAddr or an addrSpec and return the address",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "mailbox",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:mailboxList",
      "description": {
        "fct-descr": "\u003cp\u003eParse a list of \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e addresses, every two addresses being\n separated by a comma, and return the list of found address(es).\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#mailboxList",
        "fct-type": "function",
        "title": "mailboxList"
      },
      "index": {
        "description": "Parse list of mailbox addresses every two addresses being separated by comma and return the list of found address es",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "mailboxList",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "List",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:maybeOption",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003eNothing\u003c/code\u003e if the given parser doesn't match. This\n combinator is included in the latest parsec distribution as\n \u003ccode\u003eoptionMaybe\u003c/code\u003e, but ghc-6.6.1 apparently doesn't have it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "GenParser tok st a -\u003e GenParser tok st (Maybe a)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#maybeOption",
        "fct-type": "function",
        "title": "maybeOption"
      },
      "index": {
        "description": "Return Nothing if the given parser doesn match This combinator is included in the latest parsec distribution as optionMaybe but ghc-6.6.1 apparently doesn have it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "maybeOption",
        "normalized": "GenParser a b c-\u003eGenParser a b(Maybe c)",
        "package": "hsemail-ns",
        "partial": "Option",
        "signature": "GenParser tok st a-\u003eGenParser tok st(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:message",
      "description": {
        "fct-descr": "\u003cp\u003eParse a complete message as defined by this RFC and it broken down\n into the separate header fields and the message body. Header lines,\n which contain syntax errors, will not cause the parser to abort.\n Rather, these headers will appear as \u003ccode\u003e\u003ca\u003eOptionalField\u003c/a\u003e\u003c/code\u003es (which are\n unparsed) in the resulting \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e. A message must be really,\n really badly broken for this parser to fail.\n\u003c/p\u003e\u003cp\u003eThis behaviour was chosen because it is impossible to predict what\n the user of this module considers to be a fatal error;\n traditionally, parsers are very forgiving when it comes to Internet\n messages.\n\u003c/p\u003e\u003cp\u003eIf you want to implement a really strict parser, you'll have to put\n the appropriate parser together yourself. You'll find that this is\n rather easy to do. Refer to the \u003ccode\u003e\u003ca\u003efields\u003c/a\u003e\u003c/code\u003e parser for further details.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Message",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#message",
        "fct-type": "function",
        "title": "message"
      },
      "index": {
        "description": "Parse complete message as defined by this RFC and it broken down into the separate header fields and the message body Header lines which contain syntax errors will not cause the parser to abort Rather these headers will appear as OptionalField which are unparsed in the resulting Message message must be really really badly broken for this parser to fail This behaviour was chosen because it is impossible to predict what the user of this module considers to be fatal error traditionally parsers are very forgiving when it comes to Internet messages If you want to implement really strict parser you ll have to put the appropriate parser together yourself You ll find that this is rather easy to do Refer to the fields parser for further details",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "message",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:messageId",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eMessage-Id:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e \n contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#messageId",
        "fct-type": "function",
        "title": "messageId"
      },
      "index": {
        "description": "Parse Message-Id header line and return the msgId contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "messageId",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:minute",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a two-digit number and return it's integer\n value. No range checking is performed.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#minute",
        "fct-type": "function",
        "title": "minute"
      },
      "index": {
        "description": "This parser will match two-digit number and return it integer value No range checking is performed",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "minute",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:month",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a \u003ccode\u003e\u003ca\u003emonthName\u003c/a\u003e\u003c/code\u003e, optionally wrapped in\n folding whitespace, or an \u003ccode\u003e\u003ca\u003eobsMonth\u003c/a\u003e\u003c/code\u003e and return it's \u003ccode\u003e\u003ca\u003eMonth\u003c/a\u003e\u003c/code\u003e \n value.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Month",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#month",
        "fct-type": "function",
        "title": "month"
      },
      "index": {
        "description": "This parser will match monthName optionally wrapped in folding whitespace or an obsMonth and return it Month value",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "month",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:monthName",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will the abbreviated month names (\"\u003ccode\u003eJan\u003c/code\u003e\", \"\u003ccode\u003eFeb\u003c/code\u003e\", ...)\n and return the appropriate \u003ccode\u003e\u003ca\u003eMonth\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Month",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#monthName",
        "fct-type": "function",
        "title": "monthName"
      },
      "index": {
        "description": "This parser will the abbreviated month names Jan Feb and return the appropriate Month value",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "monthName",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:msgId",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003emessage ID:\u003c/code\u003e\" and return it. A message ID is almost\n identical to an \u003ccode\u003e\u003ca\u003eangleAddr\u003c/a\u003e\u003c/code\u003e, but with stricter rules about folding \n and whitespace.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#msgId",
        "fct-type": "function",
        "title": "msgId"
      },
      "index": {
        "description": "Parse message ID and return it message ID is almost identical to an angleAddr but with stricter rules about folding and whitespace",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "msgId",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameAddr",
      "description": {
        "fct-descr": "\u003cp\u003eParse an \u003ccode\u003e\u003ca\u003eangleAddr\u003c/a\u003e\u003c/code\u003e, optionally prefaced with a \u003ccode\u003e\u003ca\u003edisplayName\u003c/a\u003e\u003c/code\u003e, \n and return the address.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a NameAddr",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#nameAddr",
        "fct-type": "function",
        "title": "nameAddr"
      },
      "index": {
        "description": "Parse an angleAddr optionally prefaced with displayName and return the address",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "nameAddr",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameAddrAddr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#NameAddr",
        "fct-type": "function",
        "title": "nameAddrAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "nameAddrAddr",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Addr Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameAddrName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#NameAddr",
        "fct-type": "function",
        "title": "nameAddrName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "nameAddrName",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Addr Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameValList",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [(String, String)]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#nameValList",
        "fct-type": "function",
        "title": "nameValList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "nameValList",
        "normalized": "CharParser a[(String,String)]",
        "package": "hsemail-ns",
        "partial": "Val List",
        "signature": "CharParser a[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:nameValPair",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a (String, String)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#nameValPair",
        "fct-type": "function",
        "title": "nameValPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "nameValPair",
        "normalized": "CharParser a(String,String)",
        "package": "hsemail-ns",
        "partial": "Val Pair",
        "signature": "CharParser a(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:noFoldLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eParse one or more occurences of \u003ccode\u003e\u003ca\u003edtext\u003c/a\u003e\u003c/code\u003e or 'quotedPair ' and\n return the concatenated string. This makes up the \u003ccode\u003e\u003ca\u003eidRight\u003c/a\u003e\u003c/code\u003e of a \n \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#noFoldLiteral",
        "fct-type": "function",
        "title": "noFoldLiteral"
      },
      "index": {
        "description": "Parse one or more occurences of dtext or quotedPair and return the concatenated string This makes up the idRight of msgId",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "noFoldLiteral",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Fold Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:noFoldQuote",
      "description": {
        "fct-descr": "\u003cp\u003eParse one or more occurences of \u003ccode\u003e\u003ca\u003eqtext\u003c/a\u003e\u003c/code\u003e or 'quotedPair ' and\n return the concatenated string. This makes up the \u003ccode\u003e\u003ca\u003eidLeft\u003c/a\u003e\u003c/code\u003e of a \n \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#noFoldQuote",
        "fct-type": "function",
        "title": "noFoldQuote"
      },
      "index": {
        "description": "Parse one or more occurences of qtext or quotedPair and return the concatenated string This makes up the idLeft of msgId",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "noFoldQuote",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Fold Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:noWsCtl",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any US-ASCII non-whitespace control character.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#noWsCtl",
        "fct-type": "function",
        "title": "noWsCtl"
      },
      "index": {
        "description": "Match any US-ASCII non-whitespace control character",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "noWsCtl",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Ws Ctl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsAddrList",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser is identical to \u003ccode\u003e\u003ca\u003eobsMboxList\u003c/a\u003e\u003c/code\u003e but parses a list of  \n \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003ees rather than \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003ees. The main difference is that an\n \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e may contain \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003es. Please note that as of now, the\n parser will return a simple list of addresses; the grouping\n information is lost.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsAddrList",
        "fct-type": "function",
        "title": "obsAddrList"
      },
      "index": {
        "description": "This parser is identical to obsMboxList but parses list of address es rather than mailbox es The main difference is that an address may contain group Please note that as of now the parser will return simple list of addresses the grouping information is lost",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsAddrList",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Addr List",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsAngleAddr",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match the \"obsolete angle address\" syntax. This\n construct used to be known as a \"route address\" in earlier RFCs.\n There are two differences between this construct and the\n \u003ccode\u003e\u003ca\u003eangleAddr\u003c/a\u003e\u003c/code\u003e: For one - as usual -, the obsolete form allows for \n more liberal insertion of folding whitespace and comments.\n\u003c/p\u003e\u003cp\u003eSecondly, and more importantly, angle addresses used to allow the\n (optional) specification of a \"route\". The newer version does not.\n Such a routing address looks like this:\n\u003c/p\u003e\u003cpre\u003e    \u003c@example1.org,@example2.org:simons@example.org\u003e\n\u003c/pre\u003e\u003cp\u003eThe parser will return a tuple that - in case of the above address -\n looks like this:\n\u003c/p\u003e\u003cpre\u003e    ([\"example1.org\",\"example2.org\"],\"simons@example.org\")\n\u003c/pre\u003e\u003cp\u003eThe first part contains a list of hosts that constitute the route\n part. This list may be empty! The second part of the tuple is the\n actual \u003ccode\u003e\u003ca\u003eaddrSpec\u003c/a\u003e\u003c/code\u003e address. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsAngleAddr",
        "fct-type": "function",
        "title": "obsAngleAddr"
      },
      "index": {
        "description": "This parser will match the obsolete angle address syntax This construct used to be known as route address in earlier RFCs There are two differences between this construct and the angleAddr For one as usual the obsolete form allows for more liberal insertion of folding whitespace and comments Secondly and more importantly angle addresses used to allow the optional specification of route The newer version does not Such routing address looks like this example1.org example2.org simons@example.org The parser will return tuple that in case of the above address looks like this example1.org example2.org simons@example.org The first part contains list of hosts that constitute the route part This list may be empty The second part of the tuple is the actual addrSpec address",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsAngleAddr",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Angle Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsBcc",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ebcc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsBcc",
        "fct-type": "function",
        "title": "obsBcc"
      },
      "index": {
        "description": "Parse bcc header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsBcc",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Bcc",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsCc",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ecc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsCc",
        "fct-type": "function",
        "title": "obsCc"
      },
      "index": {
        "description": "Parse cc header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsCc",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Cc",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsChar",
      "description": {
        "fct-descr": "\u003cp\u003eMatch and return the obsolete \"char\" syntax, which - unlike\n \u003ccode\u003e\u003ca\u003echaracter\u003c/a\u003e\u003c/code\u003e - did not allow \"carriage return\" and \"linefeed\".\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsChar",
        "fct-type": "function",
        "title": "obsChar"
      },
      "index": {
        "description": "Match and return the obsolete char syntax which unlike character did not allow carriage return and linefeed",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsChar",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsComments",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ecomments\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsComments",
        "fct-type": "function",
        "title": "obsComments"
      },
      "index": {
        "description": "Parse comments header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsComments",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Comments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsDay",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eday\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsDay",
        "fct-type": "function",
        "title": "obsDay"
      },
      "index": {
        "description": "Parse day but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsDay",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsDayOfWeek",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003edayName\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Day",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsDayOfWeek",
        "fct-type": "function",
        "title": "obsDayOfWeek"
      },
      "index": {
        "description": "Parse dayName but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsDayOfWeek",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Day Of Week",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsDomain",
      "description": {
        "fct-descr": "\u003cp\u003eParse the obsolete syntax of a \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e, which allowed for more\n liberal insertion of folding whitespace and comments. The actual\n string is returned.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsDomain",
        "fct-type": "function",
        "title": "obsDomain"
      },
      "index": {
        "description": "Parse the obsolete syntax of domain which allowed for more liberal insertion of folding whitespace and comments The actual string is returned",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsDomain",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsDomainList",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser parses a list of domain names, each of them prefaced\n with an \"at\". Multiple names are separated by a comma. The list of\n \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003es is returned - and may be empty.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsDomainList",
        "fct-type": "function",
        "title": "obsDomainList"
      },
      "index": {
        "description": "This parser parses list of domain names each of them prefaced with an at Multiple names are separated by comma The list of domain is returned and may be empty",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsDomainList",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "Domain List",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsFields",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "GenParser Char a [Field]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsFields",
        "fct-type": "function",
        "title": "obsFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsFields",
        "normalized": "GenParser Char a[Field]",
        "package": "hsemail-ns",
        "partial": "Fields",
        "signature": "GenParser Char a[Field]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsFrom",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsFrom",
        "fct-type": "function",
        "title": "obsFrom"
      },
      "index": {
        "description": "Parse from header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsFrom",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "From",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsFws",
      "description": {
        "fct-descr": "\u003cp\u003eParse and return an \"obsolete fws\" token. That is at least one\n \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e character, followed by an arbitrary number (including zero)\n of \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e followed by at least one more \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e character.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsFws",
        "fct-type": "function",
        "title": "obsFws"
      },
      "index": {
        "description": "Parse and return an obsolete fws token That is at least one wsp character followed by an arbitrary number including zero of crlf followed by at least one more wsp character",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsFws",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Fws",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsHeader",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eheader\u003c/a\u003e\u003c/code\u003e, but allows the obsolete white-space rules.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "String -\u003e CharParser a b -\u003e CharParser a b",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsHeader",
        "fct-type": "function",
        "title": "obsHeader"
      },
      "index": {
        "description": "Like header but allows the obsolete white-space rules",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsHeader",
        "normalized": "String-\u003eCharParser a b-\u003eCharParser a b",
        "package": "hsemail-ns",
        "partial": "Header",
        "signature": "String-\u003eCharParser a b-\u003eCharParser a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsHour",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ehour\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsHour",
        "fct-type": "function",
        "title": "obsHour"
      },
      "index": {
        "description": "Parse hour but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsHour",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Hour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsIdLeft",
      "description": {
        "fct-descr": "\u003cp\u003eParses the \"left part\" of a message ID, but allows the obsolete\n syntax, which is identical to a \u003ccode\u003e\u003ca\u003elocalPart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsIdLeft",
        "fct-type": "function",
        "title": "obsIdLeft"
      },
      "index": {
        "description": "Parses the left part of message ID but allows the obsolete syntax which is identical to localPart",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsIdLeft",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Id Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsIdRight",
      "description": {
        "fct-descr": "\u003cp\u003eParses the \"right part\" of a message ID, but allows the obsolete\n syntax, which is identical to a \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsIdRight",
        "fct-type": "function",
        "title": "obsIdRight"
      },
      "index": {
        "description": "Parses the right part of message ID but allows the obsolete syntax which is identical to domain",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsIdRight",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Id Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsInReplyTo",
      "description": {
        "fct-descr": "\u003cp\u003eParse an \u003ccode\u003e\u003ca\u003einReplyTo\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding and the obsolete phrase syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsInReplyTo",
        "fct-type": "function",
        "title": "obsInReplyTo"
      },
      "index": {
        "description": "Parse an inReplyTo header line but allow for the obsolete folding and the obsolete phrase syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsInReplyTo",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "In Reply To",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsKeywords",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ekeywords\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax. Also, this parser accepts \u003ccode\u003e\u003ca\u003eobsPhraseList\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsKeywords",
        "fct-type": "function",
        "title": "obsKeywords"
      },
      "index": {
        "description": "Parse keywords header line but allow for the obsolete folding syntax Also this parser accepts obsPhraseList",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsKeywords",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "Keywords",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsLocalPart",
      "description": {
        "fct-descr": "\u003cp\u003eParse the obsolete syntax of a \u003ccode\u003e\u003ca\u003elocalPart\u003c/a\u003e\u003c/code\u003e, which allowed for\n more liberal insertion of folding whitespace and comments. The\n actual string is returned.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsLocalPart",
        "fct-type": "function",
        "title": "obsLocalPart"
      },
      "index": {
        "description": "Parse the obsolete syntax of localPart which allowed for more liberal insertion of folding whitespace and comments The actual string is returned",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsLocalPart",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Local Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsMboxList",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match the obsolete syntax for a \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e. \n This one is quite weird: An \u003ccode\u003e\u003ca\u003eobsMboxList\u003c/a\u003e\u003c/code\u003e contains an arbitrary  \n number of \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003ees - including none -, which are separated by\n commas. But you may have multiple consecutive commas without giving\n a \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e. You may also have a valid \u003ccode\u003e\u003ca\u003eobsMboxList\u003c/a\u003e\u003c/code\u003e that  \n contains \u003cem\u003eno\u003c/em\u003e \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e at all. On the other hand, you \u003cem\u003emust\u003c/em\u003e have\n at least one comma.\n\u003c/p\u003e\u003cp\u003eSo, this input is perfectly valid:\n\u003c/p\u003e\u003cpre\u003e    \",\"\n\u003c/pre\u003e\u003cp\u003eBut this one is - contrary to all intuition - not:\n\u003c/p\u003e\u003cpre\u003e    \"simons@example.org\"\n\u003c/pre\u003e\u003cp\u003eStrange, isn't it?\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsMboxList",
        "fct-type": "function",
        "title": "obsMboxList"
      },
      "index": {
        "description": "This parser will match the obsolete syntax for mailboxList This one is quite weird An obsMboxList contains an arbitrary number of mailbox es including none which are separated by commas But you may have multiple consecutive commas without giving mailbox You may also have valid obsMboxList that contains no mailbox at all On the other hand you must have at least one comma So this input is perfectly valid But this one is contrary to all intuition not simons@example.org Strange isn it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsMboxList",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Mbox List",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsMessageId",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003emessageId\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsMessageId",
        "fct-type": "function",
        "title": "obsMessageId"
      },
      "index": {
        "description": "Parse messageId header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsMessageId",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Message Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsMinute",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eminute\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsMinute",
        "fct-type": "function",
        "title": "obsMinute"
      },
      "index": {
        "description": "Parse minute but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsMinute",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Minute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsMonth",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003emonthName\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Month",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsMonth",
        "fct-type": "function",
        "title": "obsMonth"
      },
      "index": {
        "description": "Parse monthName but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsMonth",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsOptional",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser is identical to \u003ccode\u003e\u003ca\u003eoptionalField\u003c/a\u003e\u003c/code\u003e but allows the more \n liberal line-folding syntax between the \"fieldName\" and the \"field\n text\".\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a (String, String)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsOptional",
        "fct-type": "function",
        "title": "obsOptional"
      },
      "index": {
        "description": "This parser is identical to optionalField but allows the more liberal line-folding syntax between the fieldName and the field text",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsOptional",
        "normalized": "CharParser a(String,String)",
        "package": "hsemail-ns",
        "partial": "Optional",
        "signature": "CharParser a(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsOrigDate",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003edate\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a CalendarTime",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsOrigDate",
        "fct-type": "function",
        "title": "obsOrigDate"
      },
      "index": {
        "description": "Parse date header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsOrigDate",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Orig Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsPath",
      "description": {
        "fct-descr": "\u003cp\u003eMatch \u003ccode\u003e\u003ca\u003eobsAngleAddr\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsPath",
        "fct-type": "function",
        "title": "obsPath"
      },
      "index": {
        "description": "Match obsAngleAddr",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsPath",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsPhrase",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the obsolete \"phrase\" syntax, which - unlike \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e -\n allows dots between tokens.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsPhrase",
        "fct-type": "function",
        "title": "obsPhrase"
      },
      "index": {
        "description": "Match the obsolete phrase syntax which unlike phrase allows dots between tokens",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsPhrase",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "Phrase",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsPhraseList",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a  \"phrase list\" syntax and return the list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n that make up the phrase. In contrast to a \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003e\u003ca\u003eobsPhraseList\u003c/a\u003e\u003c/code\u003e separates the individual words by commas. This \n syntax is - as you will have guessed - obsolete.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsPhraseList",
        "fct-type": "function",
        "title": "obsPhraseList"
      },
      "index": {
        "description": "Match phrase list syntax and return the list of String that make up the phrase In contrast to phrase the obsPhraseList separates the individual words by commas This syntax is as you will have guessed obsolete",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsPhraseList",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "Phrase List",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsQp",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the obsolete \"quoted pair\" syntax, which - unlike\n 'quotedPair ' - allowed \u003cem\u003eany\u003c/em\u003e ASCII character to be specified when\n quoted. The parser will return both, the backslash and the actual\n character.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsQp",
        "fct-type": "function",
        "title": "obsQp"
      },
      "index": {
        "description": "Match the obsolete quoted pair syntax which unlike quotedPair allowed any ASCII character to be specified when quoted The parser will return both the backslash and the actual character",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsQp",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Qp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsReceived",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [(String, String)]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsReceived",
        "fct-type": "function",
        "title": "obsReceived"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsReceived",
        "normalized": "CharParser a[(String,String)]",
        "package": "hsemail-ns",
        "partial": "Received",
        "signature": "CharParser a[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsReferences",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ereferences\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding and the obsolete phrase syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsReferences",
        "fct-type": "function",
        "title": "obsReferences"
      },
      "index": {
        "description": "Parse references header line but allow for the obsolete folding and the obsolete phrase syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsReferences",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "References",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsReplyTo",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ereplyTo\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsReplyTo",
        "fct-type": "function",
        "title": "obsReplyTo"
      },
      "index": {
        "description": "Parse replyTo header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsReplyTo",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Reply To",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentBcc",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentBcc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentBcc",
        "fct-type": "function",
        "title": "obsResentBcc"
      },
      "index": {
        "description": "Parse resentBcc header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsResentBcc",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent Bcc",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentCc",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentCc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentCc",
        "fct-type": "function",
        "title": "obsResentCc"
      },
      "index": {
        "description": "Parse resentCc header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsResentCc",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent Cc",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentDate",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentDate\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a CalendarTime",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentDate",
        "fct-type": "function",
        "title": "obsResentDate"
      },
      "index": {
        "description": "Parse resentDate header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsResentDate",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Resent Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentFrom",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentFrom\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentFrom",
        "fct-type": "function",
        "title": "obsResentFrom"
      },
      "index": {
        "description": "Parse resentFrom header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsResentFrom",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent From",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentMid",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentMsgId\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete  \n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentMid",
        "fct-type": "function",
        "title": "obsResentMid"
      },
      "index": {
        "description": "Parse resentMsgId header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsResentMid",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Resent Mid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentReply",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003eResent-Reply-To\u003c/code\u003e header line but allow for the\n obsolete folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentReply",
        "fct-type": "function",
        "title": "obsResentReply"
      },
      "index": {
        "description": "Parse Resent-Reply-To header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsResentReply",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent Reply",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentSend",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentSender\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete \n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a NameAddr",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentSend",
        "fct-type": "function",
        "title": "obsResentSend"
      },
      "index": {
        "description": "Parse resentSender header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsResentSend",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Resent Send",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsResentTo",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresentTo\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsResentTo",
        "fct-type": "function",
        "title": "obsResentTo"
      },
      "index": {
        "description": "Parse resentTo header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsResentTo",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Resent To",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsReturn",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsReturn",
        "fct-type": "function",
        "title": "obsReturn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsReturn",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsRoute",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser parses the \"route\" part of \u003ccode\u003e\u003ca\u003eobsAngleAddr\u003c/a\u003e\u003c/code\u003e and  \n returns the list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es that make up this route. Relies on\n \u003ccode\u003e\u003ca\u003eobsDomainList\u003c/a\u003e\u003c/code\u003e for the actual parsing.  \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsRoute",
        "fct-type": "function",
        "title": "obsRoute"
      },
      "index": {
        "description": "This parser parses the route part of obsAngleAddr and returns the list of String that make up this route Relies on obsDomainList for the actual parsing",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsRoute",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "Route",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsSecond",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsSecond",
        "fct-type": "function",
        "title": "obsSecond"
      },
      "index": {
        "description": "Parse second but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsSecond",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsSender",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003esender\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a NameAddr",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsSender",
        "fct-type": "function",
        "title": "obsSender"
      },
      "index": {
        "description": "Parse sender header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsSender",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsSubject",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003esubject\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsSubject",
        "fct-type": "function",
        "title": "obsSubject"
      },
      "index": {
        "description": "Parse subject header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsSubject",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Subject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsText",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the obsolete \"text\" syntax, which - unlike \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e - allowed\n \"carriage returns\" and \"linefeeds\". This is really weird; you\n better consult the RFC for details. The parser will return the\n complete string, including those special characters.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsText",
        "fct-type": "function",
        "title": "obsText"
      },
      "index": {
        "description": "Match the obsolete text syntax which unlike text allowed carriage returns and linefeeds This is really weird you better consult the RFC for details The parser will return the complete string including those special characters",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsText",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsTo",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsTo",
        "fct-type": "function",
        "title": "obsTo"
      },
      "index": {
        "description": "Parse to header line but allow for the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsTo",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "To",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsUtext",
      "description": {
        "fct-descr": "\u003cp\u003eMatch and return the obsolete \"utext\" syntax, which is identical\n to \u003ccode\u003e\u003ca\u003eobsText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsUtext",
        "fct-type": "function",
        "title": "obsUtext"
      },
      "index": {
        "description": "Match and return the obsolete utext syntax which is identical to obsText",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsUtext",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Utext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsYear",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eyear\u003c/a\u003e\u003c/code\u003e but allow for a two-digit number (obsolete) and the\n obsolete folding syntax.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsYear",
        "fct-type": "function",
        "title": "obsYear"
      },
      "index": {
        "description": "Parse year but allow for two-digit number obsolete and the obsolete folding syntax",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsYear",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:obsZone",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the obsolete zone names and return the appropriate offset.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#obsZone",
        "fct-type": "function",
        "title": "obsZone"
      },
      "index": {
        "description": "Match the obsolete zone names and return the appropriate offset",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "obsZone",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Zone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:optionalField",
      "description": {
        "fct-descr": "\u003cp\u003eParse an arbitrary header field and return a tuple containing the\n \u003ccode\u003e\u003ca\u003efieldName\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunstructured\u003c/a\u003e\u003c/code\u003e text of the header. The name will\n \u003cem\u003enot\u003c/em\u003e contain the terminating colon.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a (String, String)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#optionalField",
        "fct-type": "function",
        "title": "optionalField"
      },
      "index": {
        "description": "Parse an arbitrary header field and return tuple containing the fieldName and unstructured text of the header The name will not contain the terminating colon",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "optionalField",
        "normalized": "CharParser a(String,String)",
        "package": "hsemail-ns",
        "partial": "Field",
        "signature": "CharParser a(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:origDate",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eDate:\u003c/code\u003e\" header line and return the date it contains a\n \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a CalendarTime",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#origDate",
        "fct-type": "function",
        "title": "origDate"
      },
      "index": {
        "description": "Parse Date header line and return the date it contains CalendarTime",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "origDate",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:path",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#path",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "path",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:phrase",
      "description": {
        "fct-descr": "\u003cp\u003eMatch either one or more \u003ccode\u003e\u003ca\u003eword\u003c/a\u003e\u003c/code\u003es or an \u003ccode\u003e\u003ca\u003eobsPhrase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#phrase",
        "fct-type": "function",
        "title": "phrase"
      },
      "index": {
        "description": "Match either one or more word or an obsPhrase",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "phrase",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:qcontent",
      "description": {
        "fct-descr": "\u003cp\u003eMatch either \u003ccode\u003e\u003ca\u003eqtext\u003c/a\u003e\u003c/code\u003e or 'quotedPair '.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#qcontent",
        "fct-type": "function",
        "title": "qcontent"
      },
      "index": {
        "description": "Match either qtext or quotedPair",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "qcontent",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:qtext",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any non-whitespace, non-control US-ASCII character except\n for \"\u003ccode\u003e\\\u003c/code\u003e\" and \"\u003ccode\u003e\"\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#qtext",
        "fct-type": "function",
        "title": "qtext"
      },
      "index": {
        "description": "Match any non-whitespace non-control US-ASCII character except for and",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "qtext",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:quotedPair",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a \"quoted pair\". All characters matched by \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e may be\n quoted. Note that the parsers returns \u003cem\u003eboth\u003c/em\u003e characters, the\n backslash and the actual content.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#quotedPair",
        "fct-type": "function",
        "title": "quotedPair"
      },
      "index": {
        "description": "Match quoted pair All characters matched by text may be quoted Note that the parsers returns both characters the backslash and the actual content",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "quotedPair",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:quotedString",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any number of \u003ccode\u003e\u003ca\u003eqcontent\u003c/a\u003e\u003c/code\u003e between double quotes. Any \u003ccode\u003e\u003ca\u003ecfws\u003c/a\u003e\u003c/code\u003e\n preceeding or following the \"atom\" is skipped automatically.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#quotedString",
        "fct-type": "function",
        "title": "quotedString"
      },
      "index": {
        "description": "Match any number of qcontent between double quotes Any cfws preceeding or following the atom is skipped automatically",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "quotedString",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:received",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a ([(String, String)], CalendarTime)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#received",
        "fct-type": "function",
        "title": "received"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "received",
        "normalized": "CharParser a([(String,String)],CalendarTime)",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a([(String,String)],CalendarTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:references",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eReferences:\u003c/code\u003e\" header line and return the list of\n \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003es contained in it. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [String]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#references",
        "fct-type": "function",
        "title": "references"
      },
      "index": {
        "description": "Parse References header line and return the list of msgId contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "references",
        "normalized": "CharParser a[String]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:replyTo",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eReply-To:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#replyTo",
        "fct-type": "function",
        "title": "replyTo"
      },
      "index": {
        "description": "Parse Reply-To header line and return the addressList address es contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "replyTo",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "To",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentBcc",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Bcc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it. (This list may be empty.)\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentBcc",
        "fct-type": "function",
        "title": "resentBcc"
      },
      "index": {
        "description": "Parse Resent-Bcc header line and return the addressList address es contained in it This list may be empty",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "resentBcc",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Bcc",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentCc",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Cc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentCc",
        "fct-type": "function",
        "title": "resentCc"
      },
      "index": {
        "description": "Parse Resent-Cc header line and return the addressList address es contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "resentCc",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "Cc",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentDate",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Date:\u003c/code\u003e\" header line and return the date it\n contains as \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a CalendarTime",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentDate",
        "fct-type": "function",
        "title": "resentDate"
      },
      "index": {
        "description": "Parse Resent-Date header line and return the date it contains as CalendarTime",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "resentDate",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentFrom",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eResent-From:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentFrom",
        "fct-type": "function",
        "title": "resentFrom"
      },
      "index": {
        "description": "Parse Resent-From header line and return the mailboxList address es contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "resentFrom",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "From",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentMsgId",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Message-ID:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emsgId\u003c/a\u003e\u003c/code\u003e \n contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentMsgId",
        "fct-type": "function",
        "title": "resentMsgId"
      },
      "index": {
        "description": "Parse Resent-Message-ID header line and return the msgId contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "resentMsgId",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Msg Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentSender",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Sender:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailboxList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a NameAddr",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentSender",
        "fct-type": "function",
        "title": "resentSender"
      },
      "index": {
        "description": "Parse Resent-Sender header line and return the mailboxList address es contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "resentSender",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:resentTo",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eResent-To:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e\n address contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#resentTo",
        "fct-type": "function",
        "title": "resentTo"
      },
      "index": {
        "description": "Parse Resent-To header line and return the mailbox address contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "resentTo",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "To",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:returnPath",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#returnPath",
        "fct-type": "function",
        "title": "returnPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "returnPath",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:second",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a two-digit number and return it's integer\n value. No range checking takes place.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#second",
        "fct-type": "function",
        "title": "second"
      },
      "index": {
        "description": "This parser will match two-digit number and return it integer value No range checking takes place",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "second",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:sender",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eSender:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e address\n contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a NameAddr",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#sender",
        "fct-type": "function",
        "title": "sender"
      },
      "index": {
        "description": "Parse Sender header line and return the mailbox address contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "sender",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:specials",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any of the RFC's \"special\" characters: \u003ccode\u003e()\u003c\u003e[]:;@,.\\\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#specials",
        "fct-type": "function",
        "title": "specials"
      },
      "index": {
        "description": "Match any of the RFC special characters",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "specials",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:subject",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eSubject:\u003c/code\u003e\" header line and return it's contents verbatim.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#subject",
        "fct-type": "function",
        "title": "subject"
      },
      "index": {
        "description": "Parse Subject header line and return it contents verbatim",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "subject",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any US-ASCII character except for \u003ccode\u003er\u003c/code\u003e, \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Match any US-ASCII character except for",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "text",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:time",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a \u003ccode\u003e\u003ca\u003etimeOfDay\u003c/a\u003e\u003c/code\u003e specification followed by a \n \u003ccode\u003e\u003ca\u003ezone\u003c/a\u003e\u003c/code\u003e. It returns the tuple (TimeDiff,Int) corresponding to the\n return values of either parser.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a (TimeDiff, Int)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "This parser will match timeOfDay specification followed by zone It returns the tuple TimeDiff Int corresponding to the return values of either parser",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "time",
        "normalized": "CharParser a(TimeDiff,Int)",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a(TimeDiff,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:timeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a time-of-day specification of \"\u003ccode\u003ehh:mm\u003c/code\u003e\" or\n \"\u003ccode\u003ehh:mm:ss\u003c/code\u003e\" and return the corrsponding time as a \u003ccode\u003e\u003ca\u003eTimeDiff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a TimeDiff",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#timeOfDay",
        "fct-type": "function",
        "title": "timeOfDay"
      },
      "index": {
        "description": "This parser will match time-of-day specification of hh mm or hh mm ss and return the corrsponding time as TimeDiff",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "timeOfDay",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:to",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \"\u003ccode\u003eTo:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddressList\u003c/a\u003e\u003c/code\u003e \n address(es) contained in it.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a [NameAddr]",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#to",
        "fct-type": "function",
        "title": "to"
      },
      "index": {
        "description": "Parse To header line and return the addressList address es contained in it",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "to",
        "normalized": "CharParser a[NameAddr]",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eunfold\u003c/code\u003e \u003ccode\u003e=\u003c/code\u003e \u003ccode\u003ebetween (optional cfws) (optional cfws)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a b -\u003e CharParser a b",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "unfold between optional cfws optional cfws",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "unfold",
        "normalized": "CharParser a b-\u003eCharParser a b",
        "package": "hsemail-ns",
        "partial": "",
        "signature": "CharParser a b-\u003eCharParser a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:unstructured",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any number of \u003ccode\u003e\u003ca\u003eutext\u003c/a\u003e\u003c/code\u003e tokens.\n\u003c/p\u003e\u003cp\u003e\"Unstructured text\" is used in free text fields such as \u003ccode\u003e\u003ca\u003esubject\u003c/a\u003e\u003c/code\u003e.\n Please note that any comments or whitespace that prefaces or\n follows the actual \u003ccode\u003e\u003ca\u003eutext\u003c/a\u003e\u003c/code\u003e is \u003cem\u003eincluded\u003c/em\u003e in the returned string.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#unstructured",
        "fct-type": "function",
        "title": "unstructured"
      },
      "index": {
        "description": "Match any number of utext tokens Unstructured text is used in free text fields such as subject Please note that any comments or whitespace that prefaces or follows the actual utext is included in the returned string",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "unstructured",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:utext",
      "description": {
        "fct-descr": "\u003cp\u003eMatch any non-whitespace, non-control US-ASCII character except\n for \"\u003ccode\u003e\\\u003c/code\u003e\" and \"\u003ccode\u003e\"\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Char",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#utext",
        "fct-type": "function",
        "title": "utext"
      },
      "index": {
        "description": "Match any non-whitespace non-control US-ASCII character except for and",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "utext",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:word",
      "description": {
        "fct-descr": "\u003cp\u003eMatch either \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003equotedString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a String",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#word",
        "fct-type": "function",
        "title": "word"
      },
      "index": {
        "description": "Match either atom or quotedString",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "word",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:year",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a four digit number and return it's integer\n value. No range checking is performed.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#year",
        "fct-type": "function",
        "title": "year"
      },
      "index": {
        "description": "This parser will match four digit number and return it integer value No range checking is performed",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "year",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsemail-ns/docs/Text-ParserCombinators-Parsec-Rfc2822NS.html#v:zone",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser will match a timezone specification of the form\n \"\u003ccode\u003e+hhmm\u003c/code\u003e\" or \"\u003ccode\u003e-hhmm\u003c/code\u003e\" and return the zone's offset to UTC in\n seconds as an integer. \u003ccode\u003e\u003ca\u003eobsZone\u003c/a\u003e\u003c/code\u003e is matched as well. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "fct-package": "hsemail-ns",
        "fct-signature": "CharParser a Int",
        "fct-source": "src/Text-ParserCombinators-Parsec-Rfc2822NS.html#zone",
        "fct-type": "function",
        "title": "zone"
      },
      "index": {
        "description": "This parser will match timezone specification of the form hhmm or hhmm and return the zone offset to UTC in seconds as an integer obsZone is matched as well",
        "hierarchy": "Text ParserCombinators Parsec Rfc2822NS",
        "module": "Text.ParserCombinators.Parsec.Rfc2822NS",
        "name": "zone",
        "normalized": "",
        "package": "hsemail-ns",
        "partial": "",
        "signature": ""
      }
    }
  }
]