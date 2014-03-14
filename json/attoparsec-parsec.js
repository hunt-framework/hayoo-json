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
        "word": "attoparsec-parsec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements \u003ca\u003eData.Attoparsec.Text\u003c/a\u003e in terms of Parsec.  It can be\n used to write parsers that can be compiled against both Attoparsec and\n Parsec.\n\u003c/p\u003e\u003cp\u003eDifferences from \u003ca\u003eData.Attoparsec.Text\u003c/a\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Incremental input is not supported.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esatisfyWith\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eskip\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e, and most of the numeric parsers are\n not yet implemented.  Patches are gladly welcome!\n\u003c/li\u003e\u003cli\u003e Parsec parsers (and hence the parsers provided here) do not automatically\n   backtrack on failing alternatives that consumed input.  With careful use\n   of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e it is possible to write parsers that behave consistent across\n   Attoparsec and Parsec.  Read the next section for more on that.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA simple usage example is here: \u003ca\u003ehttps://github.com/sol/attoparsec-parsec#readme\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "Parsec",
          "package": "attoparsec-parsec",
          "source": "src/Data-Attoparsec-Text-Parsec.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements Data.Attoparsec.Text in terms of Parsec It can be used to write parsers that can be compiled against both Attoparsec and Parsec Differences from Data.Attoparsec.Text Incremental input is not supported satisfyWith skip scan and most of the numeric parsers are not yet implemented Patches are gladly welcome Parsec parsers and hence the parsers provided here do not automatically backtrack on failing alternatives that consumed input With careful use of try it is possible to write parsers that behave consistent across Attoparsec and Parsec Read the next section for more on that simple usage example is here https github.com sol attoparsec-parsec readme",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "Parsec",
          "package": "attoparsec-parsec",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "Parser",
          "package": "attoparsec-parsec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "Parser",
          "package": "attoparsec-parsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName the parser, in case failure occurs.\n\u003c/p\u003e\u003cp\u003eSee Parsec's documentation of \u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e for detailed semantics.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "(\u003c?\u003e)",
          "package": "attoparsec-parsec",
          "signature": "Parser a-\u003e String-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "description": "Name the parser in case failure occurs See Parsec documentation of for detailed semantics",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "Parser a-\u003eString-\u003eParser a",
          "package": "attoparsec-parsec",
          "signature": "Parser a-\u003eString-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "anyChar",
          "package": "attoparsec-parsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Parsec.html#anyChar",
          "type": "function"
        },
        "index": {
          "description": "Match any character",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "anyChar",
          "package": "attoparsec-parsec",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an indication of whether the end of input has been\n reached.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "atEnd",
          "package": "attoparsec-parsec",
          "signature": "Parser Bool",
          "source": "src/Data-Attoparsec-Text-Parsec.html#atEnd",
          "type": "function"
        },
        "index": {
          "description": "Return an indication of whether the end of input has been reached",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "atEnd",
          "package": "attoparsec-parsec",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:atEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a specific character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "char",
          "package": "attoparsec-parsec",
          "signature": "Char -\u003e Parser Char",
          "source": "src/Data-Attoparsec-Text-Parsec.html#char",
          "type": "function"
        },
        "index": {
          "description": "Match specific character",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "char",
          "normalized": "Char-\u003eParser Char",
          "package": "attoparsec-parsec",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode an unsigned decimal number.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "decimal",
          "package": "attoparsec-parsec",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-Text-Parsec.html#decimal",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode an unsigned decimal number",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "decimal",
          "package": "attoparsec-parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single digit, as recognised by \u003ccode\u003e\u003ca\u003eisDigit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "digit",
          "package": "attoparsec-parsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Parsec.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parse single digit as recognised by isDigit",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "digit",
          "package": "attoparsec-parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch only if all input has been consumed.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "endOfInput",
          "package": "attoparsec-parsec",
          "signature": "Parser ()",
          "source": "src/Data-Attoparsec-Text-Parsec.html#endOfInput",
          "type": "function"
        },
        "index": {
          "description": "Match only if all input has been consumed",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "endOfInput",
          "normalized": "Parser()",
          "package": "attoparsec-parsec",
          "partial": "Of Input",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:endOfInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either a single newline character \u003ccode\u003e'\\n'\u003c/code\u003e, or a carriage\n return followed by a newline character \u003ccode\u003e\"\\r\\n\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "endOfLine",
          "package": "attoparsec-parsec",
          "signature": "Parser ()",
          "source": "src/Data-Attoparsec-Text-Parsec.html#endOfLine",
          "type": "function"
        },
        "index": {
          "description": "Match either single newline character or carriage return followed by newline character",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "endOfLine",
          "normalized": "Parser()",
          "package": "attoparsec-parsec",
          "partial": "Of Line",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:endOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode an unsigned hexadecimal number.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "hexadecimal",
          "package": "attoparsec-parsec",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-Text-Parsec.html#hexadecimal",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode an unsigned hexadecimal number",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "hexadecimal",
          "package": "attoparsec-parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:hexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character in a set.\n\u003c/p\u003e\u003cpre\u003evowel = inClass \"aeiou\"\n\u003c/pre\u003e\u003cp\u003eRange notation is supported.\n\u003c/p\u003e\u003cpre\u003ehalfAlphabet = inClass \"a-nA-N\"\n\u003c/pre\u003e\u003cp\u003eTo add a literal \u003ccode\u003e'-'\u003c/code\u003e to a set, place it at the beginning or end\n of the string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "inClass",
          "package": "attoparsec-parsec",
          "signature": "String -\u003e Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Match any character in set vowel inClass aeiou Range notation is supported halfAlphabet inClass a-nA-N To add literal to set place it at the beginning or end of the string",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "inClass",
          "normalized": "String-\u003eChar-\u003eBool",
          "package": "attoparsec-parsec",
          "partial": "Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:inClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that matches either a carriage return \u003ccode\u003e'\\r'\u003c/code\u003e or\n newline \u003ccode\u003e'\\n'\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "isEndOfLine",
          "package": "attoparsec-parsec",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "predicate that matches either carriage return or newline character",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "isEndOfLine",
          "normalized": "Char-\u003eBool",
          "package": "attoparsec-parsec",
          "partial": "End Of Line",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:isEndOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that matches either a space \u003ccode\u003e' '\u003c/code\u003e or horizontal tab\n \u003ccode\u003e'\\t'\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "isHorizontalSpace",
          "package": "attoparsec-parsec",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "predicate that matches either space or horizontal tab character",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "isHorizontalSpace",
          "normalized": "Char-\u003eBool",
          "package": "attoparsec-parsec",
          "partial": "Horizontal Space",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:isHorizontalSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a letter, as recognised by \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "letter",
          "package": "attoparsec-parsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Parsec.html#letter",
          "type": "function"
        },
        "index": {
          "description": "Parse letter as recognised by isAlpha",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "letter",
          "package": "attoparsec-parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character except the given one.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "notChar",
          "package": "attoparsec-parsec",
          "signature": "Char -\u003e Parser Char",
          "source": "src/Data-Attoparsec-Text-Parsec.html#notChar",
          "type": "function"
        },
        "index": {
          "description": "Match any character except the given one",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "notChar",
          "normalized": "Char-\u003eParser Char",
          "package": "attoparsec-parsec",
          "partial": "Char",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:notChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character not in a set.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "notInClass",
          "package": "attoparsec-parsec",
          "signature": "String -\u003e Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Match any character not in set",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "notInClass",
          "normalized": "String-\u003eChar-\u003eBool",
          "package": "attoparsec-parsec",
          "partial": "In Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:notInClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "parseOnly",
          "package": "attoparsec-parsec",
          "signature": "Parser a -\u003e Text -\u003e Either String a",
          "source": "src/Data-Attoparsec-Text-Parsec.html#parseOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "parseOnly",
          "normalized": "Parser a-\u003eText-\u003eEither String a",
          "package": "attoparsec-parsec",
          "partial": "Only",
          "signature": "Parser a-\u003eText-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:parseOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "peekChar",
          "package": "attoparsec-parsec",
          "signature": "Parser (Maybe Char)",
          "source": "src/Data-Attoparsec-Text-Parsec.html#peekChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "peekChar",
          "package": "attoparsec-parsec",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:peekChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy p\u003c/code\u003e succeeds for any character for which the\n predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the character that is\n actually parsed.\n\u003c/p\u003e\u003cpre\u003edigit = satisfy isDigit\n    where isDigit c = c \u003e= '0' && c \u003c= '9'\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "satisfy",
          "package": "attoparsec-parsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser Char",
          "source": "src/Data-Attoparsec-Text-Parsec.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfy succeeds for any character for which the predicate returns True Returns the character that is actually parsed digit satisfy isDigit where isDigit",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eParser Char",
          "package": "attoparsec-parsec",
          "signature": "(Char-\u003eBool)-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip over white space.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "skipSpace",
          "package": "attoparsec-parsec",
          "signature": "Parser ()",
          "source": "src/Data-Attoparsec-Text-Parsec.html#skipSpace",
          "type": "function"
        },
        "index": {
          "description": "Skip over white space",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "skipSpace",
          "normalized": "Parser()",
          "package": "attoparsec-parsec",
          "partial": "Space",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:skipSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip past input for as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "skipWhile",
          "package": "attoparsec-parsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser ()",
          "source": "src/Data-Attoparsec-Text-Parsec.html#skipWhile",
          "type": "function"
        },
        "index": {
          "description": "Skip past input for as long as the predicate returns True",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "skipWhile",
          "normalized": "(Char-\u003eBool)-\u003eParser()",
          "package": "attoparsec-parsec",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:skipWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a space character, as recognised by \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "space",
          "package": "attoparsec-parsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Parsec.html#space",
          "type": "function"
        },
        "index": {
          "description": "Parse space character as recognised by isSpace",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "space",
          "package": "attoparsec-parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of characters that identically match\n \u003ccode\u003es\u003c/code\u003e. Returns the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "string",
          "package": "attoparsec-parsec",
          "signature": "Text -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Parsec.html#string",
          "type": "function"
        },
        "index": {
          "description": "string parses sequence of characters that identically match Returns the parsed string i.e",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "string",
          "normalized": "Text-\u003eParser Text",
          "package": "attoparsec-parsec",
          "signature": "Text-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSatisfy a literal string, ignoring case.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: No proper case folding is done, yet.  Currently \u003ccode\u003estringCI s\u003c/code\u003e is just\n\u003c/p\u003e\u003cpre\u003e char (toLower c) \u003c|\u003e char (toUpper c)\n\u003c/pre\u003e\u003cp\u003efor each character of \u003ccode\u003es\u003c/code\u003e.  The implementation from \u003ca\u003eData.Attoparsec.Text\u003c/a\u003e\n tries to do proper case folding, but is actually buggy (see\n \u003ca\u003ehttps://github.com/bos/attoparsec/issues/6\u003c/a\u003e).  As long as you deal with\n characters from the ASCII range, both implementations should be fine.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "stringCI",
          "package": "attoparsec-parsec",
          "signature": "Text -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Parsec.html#stringCI",
          "type": "function"
        },
        "index": {
          "description": "Satisfy literal string ignoring case Note No proper case folding is done yet Currently stringCI is just char toLower char toUpper for each character of The implementation from Data.Attoparsec.Text tries to do proper case folding but is actually buggy see https github.com bos attoparsec issues As long as you deal with characters from the ASCII range both implementations should be fine",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "stringCI",
          "normalized": "Text-\u003eParser Text",
          "package": "attoparsec-parsec",
          "partial": "CI",
          "signature": "Text-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:stringCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume exactly \u003ccode\u003en\u003c/code\u003e characters of input.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "take",
          "package": "attoparsec-parsec",
          "signature": "Int -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Parsec.html#take",
          "type": "function"
        },
        "index": {
          "description": "Consume exactly characters of input",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "take",
          "normalized": "Int-\u003eParser Text",
          "package": "attoparsec-parsec",
          "signature": "Int-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume all remaining input and return it as a single string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeLazyText",
          "package": "attoparsec-parsec",
          "signature": "Parser Text",
          "source": "src/Data-Attoparsec-Text-Parsec.html#takeLazyText",
          "type": "function"
        },
        "index": {
          "description": "Consume all remaining input and return it as single string",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeLazyText",
          "package": "attoparsec-parsec",
          "partial": "Lazy Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:takeLazyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume all remaining input and return it as a single string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeText",
          "package": "attoparsec-parsec",
          "signature": "Parser Text",
          "source": "src/Data-Attoparsec-Text-Parsec.html#takeText",
          "type": "function"
        },
        "index": {
          "description": "Consume all remaining input and return it as single string",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeText",
          "package": "attoparsec-parsec",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:takeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n (i.e. until it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e), and return the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the first character of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeTill",
          "package": "attoparsec-parsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Parsec.html#takeTill",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns False i.e until it returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns True on the first character of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeTill",
          "normalized": "(Char-\u003eBool)-\u003eParser Text",
          "package": "attoparsec-parsec",
          "partial": "Till",
          "signature": "(Char-\u003eBool)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:takeTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e on the first character of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeWhile",
          "package": "attoparsec-parsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Parsec.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns False on the first character of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eParser Text",
          "package": "attoparsec-parsec",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser requires the predicate to succeed on at least one\n character of input: it will fail if the predicate never returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e or if there is no input left.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeWhile1",
          "package": "attoparsec-parsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Parsec.html#takeWhile1",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser requires the predicate to succeed on at least one character of input it will fail if the predicate never returns True or if there is no input left",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "takeWhile1",
          "normalized": "(Char-\u003eBool)-\u003eParser Text",
          "package": "attoparsec-parsec",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt a parse, and if it fails, rewind the input so that no input appears to have been consumed.\n\u003c/p\u003e\u003cp\u003eSee Parsec's documentation of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e for detailed semantics.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "try",
          "package": "attoparsec-parsec",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Data-Attoparsec-Text-Parsec.html#try",
          "type": "function"
        },
        "index": {
          "description": "Attempt parse and if it fails rewind the input so that no input appears to have been consumed See Parsec documentation of try for detailed semantics",
          "hierarchy": "Data Attoparsec Text Parsec",
          "module": "Data.Attoparsec.Text.Parsec",
          "name": "try",
          "normalized": "Parser a-\u003eParser a",
          "package": "attoparsec-parsec",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-parsec/docs/Data-Attoparsec-Text-Parsec.html#v:try"
      }
    }
  ]
]