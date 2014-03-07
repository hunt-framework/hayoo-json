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
        "word": "attoparsec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient, character-oriented combinator parsing for\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e strings, loosely based on the Parsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Char8",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-ByteString-Char8.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient character-oriented combinator parsing for ByteString strings loosely based on the Parsec library",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Char8",
          "package": "attoparsec",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.  This is parameterised over the type \u003ccode\u003et\u003c/code\u003e\n of string that was processed.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, where \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e transforms the\n value in a \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "IResult",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Internal-Types.html#IResult",
          "type": "data"
        },
        "index": {
          "description": "The result of parse This is parameterised over the type of string that was processed This type is an instance of Functor where fmap transforms the value in Done result",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "IResult",
          "package": "attoparsec",
          "partial": "IResult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#t:IResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric type that can represent integers accurately, and\n floating point numbers to the precision of a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Number",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Number.html#Number",
          "type": "data"
        },
        "index": {
          "description": "numeric type that can represent integers accurately and floating point numbers to the precision of Double",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Number",
          "package": "attoparsec",
          "partial": "Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Parser",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Parser",
          "package": "attoparsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Result",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#Result",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Result",
          "package": "attoparsec",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-specialized version of \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "(\u003c*.)",
          "package": "attoparsec",
          "signature": "Parser a -\u003e ByteString -\u003e Parser a",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#%3C%2A.",
          "type": "function"
        },
        "index": {
          "description": "Type-specialized version of for ByteString",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "(\u003c*.) \u003c*.",
          "normalized": "Parser a-\u003eByteString-\u003eParser a",
          "package": "attoparsec",
          "signature": "Parser a-\u003eByteString-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:-60--42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-specialized version of \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "(.*\u003e)",
          "package": "attoparsec",
          "signature": "ByteString -\u003e Parser a -\u003e Parser a",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#.%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Type-specialized version of for ByteString",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "(.*\u003e) .*\u003e",
          "normalized": "ByteString-\u003eParser a-\u003eParser a",
          "package": "attoparsec",
          "signature": "ByteString-\u003eParser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:.-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.Number\",\"Data.Attoparsec.Text\"]",
          "name": "D",
          "package": "attoparsec",
          "signature": "D !Double",
          "source": "src/Data-Attoparsec-Number.html#Number",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:D\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Number.html#v:D\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:D\"]"
        },
        "index": {
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "D",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse succeeded.  The \u003ccode\u003et\u003c/code\u003e parameter is the\n input that had not yet been consumed (if any) when\n the parse succeeded.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\",\"Data.Attoparsec.Text\",\"Data.Attoparsec.Types\"]",
          "name": "Done",
          "package": "attoparsec",
          "signature": "Done t r",
          "source": "src/Data-Attoparsec-Internal-Types.html#IResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:Done\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:Done\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:Done\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#v:Done\"]"
        },
        "index": {
          "description": "The parse succeeded The parameter is the input that had not yet been consumed if any when the parse succeeded",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Done",
          "package": "attoparsec",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse failed.  The \u003ccode\u003et\u003c/code\u003e parameter is the\n input that had not yet been consumed when the\n failure occurred.  The \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e is a list of\n contexts in which the error occurred.  The\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the message describing the error, if\n any.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\",\"Data.Attoparsec.Text\",\"Data.Attoparsec.Types\"]",
          "name": "Fail",
          "package": "attoparsec",
          "signature": "Fail t [String] String",
          "source": "src/Data-Attoparsec-Internal-Types.html#IResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:Fail\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:Fail\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:Fail\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#v:Fail\"]"
        },
        "index": {
          "description": "The parse failed The parameter is the input that had not yet been consumed when the failure occurred The String is list of contexts in which the error occurred The String is the message describing the error if any",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Fail",
          "normalized": "Fail a[String]String",
          "package": "attoparsec",
          "partial": "Fail",
          "signature": "Fail t[String]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.Number\",\"Data.Attoparsec.Text\"]",
          "name": "I",
          "package": "attoparsec",
          "signature": "I !Integer",
          "source": "src/Data-Attoparsec-Number.html#Number",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:I\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Number.html#v:I\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:I\"]"
        },
        "index": {
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "I",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply this continuation with more input so that\n the parser can resume.  To indicate that no more\n input is available, use an empty string.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\",\"Data.Attoparsec.Text\",\"Data.Attoparsec.Types\"]",
          "name": "Partial",
          "package": "attoparsec",
          "signature": "Partial (t -\u003e IResult t r)",
          "source": "src/Data-Attoparsec-Internal-Types.html#IResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:Partial\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:Partial\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:Partial\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#v:Partial\"]"
        },
        "index": {
          "description": "Supply this continuation with more input so that the parser can resume To indicate that no more input is available use an empty string",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "Partial",
          "normalized": "Partial(a-\u003eIResult a b)",
          "package": "attoparsec",
          "partial": "Partial",
          "signature": "Partial(t-\u003eIResult t r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "anyChar",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#anyChar",
          "type": "function"
        },
        "index": {
          "description": "Match any character",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "anyChar",
          "package": "attoparsec",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a specific character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "char",
          "package": "attoparsec",
          "signature": "Char -\u003e Parser Char",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#char",
          "type": "function"
        },
        "index": {
          "description": "Match specific character",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "char",
          "normalized": "Char-\u003eParser Char",
          "package": "attoparsec",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a specific character, but return its \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "char8",
          "package": "attoparsec",
          "signature": "Char -\u003e Parser Word8",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#char8",
          "type": "function"
        },
        "index": {
          "description": "Match specific character but return its Word8 value",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "char8",
          "normalized": "Char-\u003eParser Word",
          "package": "attoparsec",
          "signature": "Char-\u003eParser Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:char8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eIResult\u003c/a\u003e\u003c/code\u003e values for equality.\n\u003c/p\u003e\u003cp\u003eIf both \u003ccode\u003e\u003ca\u003eIResult\u003c/a\u003e\u003c/code\u003es are \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e, the result will be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, as\n they are incomplete and hence their equality cannot be known.\n (This is why there is no \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eIResult\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\",\"Data.Attoparsec.Text\"]",
          "name": "compareResults",
          "package": "attoparsec",
          "signature": "IResult t r -\u003e IResult t r -\u003e Maybe Bool",
          "source": "src/Data-Attoparsec-Internal.html#compareResults",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:compareResults\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:compareResults\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:compareResults\"]"
        },
        "index": {
          "description": "Compare two IResult values for equality If both IResult are Partial the result will be Nothing as they are incomplete and hence their equality cannot be known This is why there is no Eq instance for IResult",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "compareResults",
          "normalized": "IResult a b-\u003eIResult a b-\u003eMaybe Bool",
          "package": "attoparsec",
          "partial": "Results",
          "signature": "IResult t r-\u003eIResult t r-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:compareResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode an unsigned decimal number.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "decimal",
          "package": "attoparsec",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#decimal",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode an unsigned decimal number",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "decimal",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single digit.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "digit",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parse single digit",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "digit",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a rational number.\n\u003c/p\u003e\u003cp\u003eThe syntax accepted by this parser is the same as for \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This function is almost ten times faster than \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e,\n but is slightly less accurate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type supports about 16 decimal places of accuracy.\n For 94.2% of numbers, this function and \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e give identical\n results, but for the remaining 5.8%, this function loses precision\n around the 15th decimal place.  For 0.001% of numbers, this\n function will lose precision at the 13th or 14th decimal place.\n\u003c/p\u003e\u003cp\u003eThis function does not accept string representations of \"NaN\" or\n \"Infinity\".\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "double",
          "package": "attoparsec",
          "signature": "Parser Double",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#double",
          "type": "function"
        },
        "index": {
          "description": "Parse rational number The syntax accepted by this parser is the same as for rational Note This function is almost ten times faster than rational but is slightly less accurate The Double type supports about decimal places of accuracy For of numbers this function and rational give identical results but for the remaining this function loses precision around the th decimal place For of numbers this function will lose precision at the th or th decimal place This function does not accept string representations of NaN or Infinity",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "double",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value. A \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e\n result is treated as failure.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "eitherResult",
          "package": "attoparsec",
          "signature": "Result r -\u003e Either String r",
          "source": "src/Data-Attoparsec-ByteString.html#eitherResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:eitherResult\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:eitherResult\"]"
        },
        "index": {
          "description": "Convert Result value to an Either value Partial result is treated as failure",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "eitherResult",
          "normalized": "Result a-\u003eEither String a",
          "package": "attoparsec",
          "partial": "Result",
          "signature": "Result r-\u003eEither String r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:eitherResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either a single newline character \u003ccode\u003e'\\n'\u003c/code\u003e, or a carriage\n return followed by a newline character \u003ccode\u003e\"\\r\\n\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "endOfLine",
          "package": "attoparsec",
          "signature": "Parser ()",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#endOfLine",
          "type": "function"
        },
        "index": {
          "description": "Match either single newline character or carriage return followed by newline character",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "endOfLine",
          "normalized": "Parser()",
          "package": "attoparsec",
          "partial": "Of Line",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:endOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a parser has returned a \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result, supply it with more\n input.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "feed",
          "package": "attoparsec",
          "signature": "Result r -\u003e ByteString -\u003e Result r",
          "source": "src/Data-Attoparsec-ByteString.html#feed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:feed\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:feed\"]"
        },
        "index": {
          "description": "If parser has returned Partial result supply it with more input",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "feed",
          "normalized": "Result a-\u003eByteString-\u003eResult a",
          "package": "attoparsec",
          "signature": "Result r-\u003eByteString-\u003eResult r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode an unsigned hexadecimal number.  The hex digits\n \u003ccode\u003e'a'\u003c/code\u003e through \u003ccode\u003e'f'\u003c/code\u003e may be upper or lower case.\n\u003c/p\u003e\u003cp\u003eThis parser does not accept a leading \u003ccode\u003e\"0x\"\u003c/code\u003e string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "hexadecimal",
          "package": "attoparsec",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#hexadecimal",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode an unsigned hexadecimal number The hex digits through may be upper or lower case This parser does not accept leading string",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "hexadecimal",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:hexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character in a set.\n\u003c/p\u003e\u003cpre\u003evowel = inClass \"aeiou\"\n\u003c/pre\u003e\u003cp\u003eRange notation is supported.\n\u003c/p\u003e\u003cpre\u003ehalfAlphabet = inClass \"a-nA-N\"\n\u003c/pre\u003e\u003cp\u003eTo add a literal '-' to a set, place it at the beginning or end\n of the string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "inClass",
          "package": "attoparsec",
          "signature": "String -\u003e Char -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#inClass",
          "type": "function"
        },
        "index": {
          "description": "Match any character in set vowel inClass aeiou Range notation is supported halfAlphabet inClass a-nA-N To add literal to set place it at the beginning or end of the string",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "inClass",
          "normalized": "String-\u003eChar-\u003eBool",
          "package": "attoparsec",
          "partial": "Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:inClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fast alphabetic predicate for the ASCII encoding\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: For all character encodings other than ASCII, and\n almost all Unicode code points above U+007F, this predicate gives\n \u003cem\u003ewrong answers\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isAlpha_ascii",
          "package": "attoparsec",
          "signature": "Char -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#isAlpha_ascii",
          "type": "function"
        },
        "index": {
          "description": "fast alphabetic predicate for the ASCII encoding Note For all character encodings other than ASCII and almost all Unicode code points above this predicate gives wrong answers",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isAlpha_ascii",
          "normalized": "Char-\u003eBool",
          "package": "attoparsec",
          "partial": "Alpha",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:isAlpha_ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fast alphabetic predicate for the ISO-8859-15 encoding\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: For all character encodings other than ISO-8859-15, and\n almost all Unicode code points above U+00A3, this predicate gives\n \u003cem\u003ewrong answers\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isAlpha_iso8859_15",
          "package": "attoparsec",
          "signature": "Char -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#isAlpha_iso8859_15",
          "type": "function"
        },
        "index": {
          "description": "fast alphabetic predicate for the ISO-8859-15 encoding Note For all character encodings other than ISO-8859-15 and almost all Unicode code points above A3 this predicate gives wrong answers",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isAlpha_iso8859_15",
          "normalized": "Char-\u003eBool",
          "package": "attoparsec",
          "partial": "Alpha",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:isAlpha_iso8859_15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fast digit predicate.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isDigit",
          "package": "attoparsec",
          "signature": "Char -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#isDigit",
          "type": "function"
        },
        "index": {
          "description": "fast digit predicate",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isDigit",
          "normalized": "Char-\u003eBool",
          "package": "attoparsec",
          "partial": "Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:isDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fast digit predicate.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isDigit_w8",
          "package": "attoparsec",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#isDigit_w8",
          "type": "function"
        },
        "index": {
          "description": "fast digit predicate",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isDigit_w8",
          "normalized": "Word-\u003eBool",
          "package": "attoparsec",
          "partial": "Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:isDigit_w8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that matches either a carriage return \u003ccode\u003e'\\r'\u003c/code\u003e or\n newline \u003ccode\u003e'\\n'\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isEndOfLine",
          "package": "attoparsec",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#isEndOfLine",
          "type": "function"
        },
        "index": {
          "description": "predicate that matches either carriage return or newline character",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isEndOfLine",
          "normalized": "Word-\u003eBool",
          "package": "attoparsec",
          "partial": "End Of Line",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:isEndOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that matches either a space \u003ccode\u003e' '\u003c/code\u003e or horizontal tab\n \u003ccode\u003e'\\t'\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isHorizontalSpace",
          "package": "attoparsec",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#isHorizontalSpace",
          "type": "function"
        },
        "index": {
          "description": "predicate that matches either space or horizontal tab character",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isHorizontalSpace",
          "normalized": "Word-\u003eBool",
          "package": "attoparsec",
          "partial": "Horizontal Space",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:isHorizontalSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFast predicate for matching ASCII space characters.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This predicate only gives correct answers for the ASCII\n encoding.  For instance, it does not recognise U+00A0 (non-breaking\n space) as a space character, even though it is a valid ISO-8859-15\n byte. For a Unicode-aware and only slightly slower predicate,\n use \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isSpace",
          "package": "attoparsec",
          "signature": "Char -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#isSpace",
          "type": "function"
        },
        "index": {
          "description": "Fast predicate for matching ASCII space characters Note This predicate only gives correct answers for the ASCII encoding For instance it does not recognise A0 non-breaking space as space character even though it is valid ISO-8859-15 byte For Unicode-aware and only slightly slower predicate use isSpace",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isSpace",
          "normalized": "Char-\u003eBool",
          "package": "attoparsec",
          "partial": "Space",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:isSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFast \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e predicate for matching ASCII space characters.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isSpace_w8",
          "package": "attoparsec",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#isSpace_w8",
          "type": "function"
        },
        "index": {
          "description": "Fast Word8 predicate for matching ASCII space characters",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "isSpace_w8",
          "normalized": "Word-\u003eBool",
          "package": "attoparsec",
          "partial": "Space",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:isSpace_w8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a letter, in the ASCII encoding.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "letter_ascii",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#letter_ascii",
          "type": "function"
        },
        "index": {
          "description": "Match letter in the ASCII encoding",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "letter_ascii",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:letter_ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a letter, in the ISO-8859-15 encoding.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "letter_iso8859_15",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#letter_iso8859_15",
          "type": "function"
        },
        "index": {
          "description": "Match letter in the ISO-8859-15 encoding",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "letter_iso8859_15",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:letter_iso8859_15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value. A \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result\n is treated as failure.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "maybeResult",
          "package": "attoparsec",
          "signature": "Result r -\u003e Maybe r",
          "source": "src/Data-Attoparsec-ByteString.html#maybeResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:maybeResult\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:maybeResult\"]"
        },
        "index": {
          "description": "Convert Result value to Maybe value Partial result is treated as failure",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "maybeResult",
          "normalized": "Result a-\u003eMaybe a",
          "package": "attoparsec",
          "partial": "Result",
          "signature": "Result r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:maybeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character except the given one.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "notChar",
          "package": "attoparsec",
          "signature": "Char -\u003e Parser Char",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#notChar",
          "type": "function"
        },
        "index": {
          "description": "Match any character except the given one",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "notChar",
          "normalized": "Char-\u003eParser Char",
          "package": "attoparsec",
          "partial": "Char",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:notChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character not in a set.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "notInClass",
          "package": "attoparsec",
          "signature": "String -\u003e Char -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#notInClass",
          "type": "function"
        },
        "index": {
          "description": "Match any character not in set",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "notInClass",
          "normalized": "String-\u003eChar-\u003eBool",
          "package": "attoparsec",
          "partial": "In Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:notInClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a number, attempting to preserve both speed and precision.\n\u003c/p\u003e\u003cp\u003eThe syntax accepted by this parser is the same as for \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This function is almost ten times faster than \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n On integral inputs, it gives perfectly accurate answers, and on\n floating point inputs, it is slightly less accurate than\n \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does not accept string representations of \"NaN\" or\n \"\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "number",
          "package": "attoparsec",
          "signature": "Parser Number",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#number",
          "type": "function"
        },
        "index": {
          "description": "Parse number attempting to preserve both speed and precision The syntax accepted by this parser is the same as for rational Note This function is almost ten times faster than rational On integral inputs it gives perfectly accurate answers and on floating point inputs it is slightly less accurate than rational This function does not accept string representations of NaN or",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "number",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "parse",
          "package": "attoparsec",
          "signature": "Parser a -\u003e ByteString -\u003e Result a",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:parse\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:parse\"]"
        },
        "index": {
          "description": "Run parser",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "parse",
          "normalized": "Parser a-\u003eByteString-\u003eResult a",
          "package": "attoparsec",
          "signature": "Parser a-\u003eByteString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser that cannot be resupplied via a \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "parseOnly",
          "package": "attoparsec",
          "signature": "Parser a -\u003e ByteString -\u003e Either String a",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#parseOnly",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:parseOnly\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:parseOnly\"]"
        },
        "index": {
          "description": "Run parser that cannot be resupplied via Partial result",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "parseOnly",
          "normalized": "Parser a-\u003eByteString-\u003eEither String a",
          "package": "attoparsec",
          "partial": "Only",
          "signature": "Parser a-\u003eByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:parseOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and print its result to standard output.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "parseTest",
          "package": "attoparsec",
          "signature": "Parser a -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Attoparsec-ByteString.html#parseTest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:parseTest\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:parseTest\"]"
        },
        "index": {
          "description": "Run parser and print its result to standard output",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "parseTest",
          "normalized": "Parser a-\u003eByteString-\u003eIO()",
          "package": "attoparsec",
          "partial": "Test",
          "signature": "Parser a-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser with an initial input string, and a monadic action\n that can supply more input if needed.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "parseWith",
          "package": "attoparsec",
          "signature": "m ByteString-\u003e Parser a-\u003e ByteString-\u003e m (Result a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:parseWith\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:parseWith\"]"
        },
        "index": {
          "description": "Run parser with an initial input string and monadic action that can supply more input if needed",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "parseWith",
          "normalized": "a ByteString-\u003eParser b-\u003eByteString-\u003ea(Result b)",
          "package": "attoparsec",
          "partial": "With",
          "signature": "m ByteString-\u003eParser a-\u003eByteString-\u003em(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:parseWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character, to perform lookahead. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n end of input has been reached. Does not consume any input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "peekChar",
          "package": "attoparsec",
          "signature": "Parser (Maybe Char)",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#peekChar",
          "type": "function"
        },
        "index": {
          "description": "Match any character to perform lookahead Returns Nothing if end of input has been reached Does not consume any input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "peekChar",
          "package": "attoparsec",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:peekChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character, to perform lookahead.  Does not consume any\n input, but will fail if end of input has been reached.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "peekChar'",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#peekChar%27",
          "type": "function"
        },
        "index": {
          "description": "Match any character to perform lookahead Does not consume any input but will fail if end of input has been reached",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "peekChar'",
          "package": "attoparsec",
          "partial": "Char'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:peekChar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a rational number.\n\u003c/p\u003e\u003cp\u003eThis parser accepts an optional leading sign character, followed by\n at least one decimal digit.  The syntax similar to that accepted by\n the \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function, with the exception that a trailing \u003ccode\u003e'.'\u003c/code\u003e or\n \u003ccode\u003e'e'\u003c/code\u003e \u003cem\u003enot\u003c/em\u003e followed by a number is not consumed.\n\u003c/p\u003e\u003cp\u003eExamples with behaviour identical to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e, if you feed an empty\n continuation to the first result:\n\u003c/p\u003e\u003cpre\u003erational \"3\"     == Done 3.0 \"\"\nrational \"3.1\"   == Done 3.1 \"\"\nrational \"3e4\"   == Done 30000.0 \"\"\nrational \"3.1e4\" == Done 31000.0, \"\"\n\u003c/pre\u003e\u003cp\u003eExamples with behaviour identical to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003erational \".3\"    == Fail \"input does not start with a digit\"\nrational \"e3\"    == Fail \"input does not start with a digit\"\n\u003c/pre\u003e\u003cp\u003eExamples of differences from \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003erational \"3.foo\" == Done 3.0 \".foo\"\nrational \"3e\"    == Done 3.0 \"e\"\n\u003c/pre\u003e\u003cp\u003eThis function does not accept string representations of \"NaN\" or\n \"Infinity\".\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "rational",
          "package": "attoparsec",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#rational",
          "type": "function"
        },
        "index": {
          "description": "Parse rational number This parser accepts an optional leading sign character followed by at least one decimal digit The syntax similar to that accepted by the read function with the exception that trailing or not followed by number is not consumed Examples with behaviour identical to read if you feed an empty continuation to the first result rational Done rational Done rational e4 Done rational e4 Done Examples with behaviour identical to read rational Fail input does not start with digit rational e3 Fail input does not start with digit Examples of differences from read rational foo Done foo rational Done This function does not accept string representations of NaN or Infinity",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "rational",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy p\u003c/code\u003e succeeds for any byte for which the\n predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the byte that is actually\n parsed.\n\u003c/p\u003e\u003cpre\u003edigit = satisfy isDigit\n    where isDigit c = c \u003e= '0' && c \u003c= '9'\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "satisfy",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser Char",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfy succeeds for any byte for which the predicate returns True Returns the byte that is actually parsed digit satisfy isDigit where isDigit",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eParser Char",
          "package": "attoparsec",
          "signature": "(Char-\u003eBool)-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stateful scanner.  The predicate consumes and transforms a\n state argument, and each transformed state is passed to successive\n invocations of the predicate on each byte of the input until one\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or the input ends.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on the first byte of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "scan",
          "package": "attoparsec",
          "signature": "s -\u003e (s -\u003e Char -\u003e Maybe s) -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#scan",
          "type": "function"
        },
        "index": {
          "description": "stateful scanner The predicate consumes and transforms state argument and each transformed state is passed to successive invocations of the predicate on each byte of the input until one returns Nothing or the input ends This parser does not fail It will return an empty string if the predicate returns Nothing on the first byte of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "scan",
          "normalized": "a-\u003e(a-\u003eChar-\u003eMaybe a)-\u003eParser ByteString",
          "package": "attoparsec",
          "signature": "s-\u003e(s-\u003eChar-\u003eMaybe s)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a number with an optional leading \u003ccode\u003e'+'\u003c/code\u003e or \u003ccode\u003e'-'\u003c/code\u003e sign\n character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "signed",
          "package": "attoparsec",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#signed",
          "type": "function"
        },
        "index": {
          "description": "Parse number with an optional leading or sign character",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "signed",
          "normalized": "Parser a-\u003eParser a",
          "package": "attoparsec",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip over white space.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "skipSpace",
          "package": "attoparsec",
          "signature": "Parser ()",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#skipSpace",
          "type": "function"
        },
        "index": {
          "description": "Skip over white space",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "skipSpace",
          "normalized": "Parser()",
          "package": "attoparsec",
          "partial": "Space",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:skipSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip past input for as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "skipWhile",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser ()",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#skipWhile",
          "type": "function"
        },
        "index": {
          "description": "Skip past input for as long as the predicate returns True",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "skipWhile",
          "normalized": "(Char-\u003eBool)-\u003eParser()",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:skipWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a space character.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This parser only gives correct answers for the ASCII\n encoding.  For instance, it does not recognise U+00A0 (non-breaking\n space) as a space character, even though it is a valid ISO-8859-15\n byte.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "space",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#space",
          "type": "function"
        },
        "index": {
          "description": "Parse space character Note This parser only gives correct answers for the ASCII encoding For instance it does not recognise A0 non-breaking space as space character even though it is valid ISO-8859-15 byte",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "space",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of bytes that identically match\n \u003ccode\u003es\u003c/code\u003e. Returns the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).  This parser consumes no\n input if it fails (even if a partial match).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: The behaviour of this parser is different to that of the\n similarly-named parser in Parsec, as this one is all-or-nothing.\n To illustrate the difference, the following parser will fail under\n Parsec given an input of \u003ccode\u003e\"for\"\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003estring \"foo\" \u003c|\u003e string \"for\"\n\u003c/pre\u003e\u003cp\u003eThe reason for its failure is that the first branch is a\n partial match, and will consume the letters \u003ccode\u003e'f'\u003c/code\u003e and \u003ccode\u003e'o'\u003c/code\u003e\n before failing.  In Attoparsec, the above parser will \u003cem\u003esucceed\u003c/em\u003e on\n that input, because the failed first branch will consume nothing.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "string",
          "package": "attoparsec",
          "signature": "ByteString -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:string\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:string\"]"
        },
        "index": {
          "description": "string parses sequence of bytes that identically match Returns the parsed string i.e This parser consumes no input if it fails even if partial match Note The behaviour of this parser is different to that of the similarly-named parser in Parsec as this one is all-or-nothing To illustrate the difference the following parser will fail under Parsec given an input of for string foo string for The reason for its failure is that the first branch is partial match and will consume the letters and before failing In Attoparsec the above parser will succeed on that input because the failed first branch will consume nothing",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "string",
          "normalized": "ByteString-\u003eParser ByteString",
          "package": "attoparsec",
          "signature": "ByteString-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSatisfy a literal string, ignoring case.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "stringCI",
          "package": "attoparsec",
          "signature": "ByteString -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#stringCI",
          "type": "function"
        },
        "index": {
          "description": "Satisfy literal string ignoring case",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "stringCI",
          "normalized": "ByteString-\u003eParser ByteString",
          "package": "attoparsec",
          "partial": "CI",
          "signature": "ByteString-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:stringCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume exactly \u003ccode\u003en\u003c/code\u003e bytes of input.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "take",
          "package": "attoparsec",
          "signature": "Int -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#take",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:take\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:take\"]"
        },
        "index": {
          "description": "Consume exactly bytes of input",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "take",
          "normalized": "Int-\u003eParser ByteString",
          "package": "attoparsec",
          "signature": "Int-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume all remaining input and return it as a single string.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "takeByteString",
          "package": "attoparsec",
          "signature": "Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#takeByteString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:takeByteString\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:takeByteString\"]"
        },
        "index": {
          "description": "Consume all remaining input and return it as single string",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "takeByteString",
          "package": "attoparsec",
          "partial": "Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:takeByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume all remaining input and return it as a single string.\n\u003c/p\u003e",
          "module": "[\"Data.Attoparsec.ByteString.Char8\",\"Data.Attoparsec.ByteString\"]",
          "name": "takeLazyByteString",
          "package": "attoparsec",
          "signature": "Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#takeLazyByteString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:takeLazyByteString\",\"http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:takeLazyByteString\"]"
        },
        "index": {
          "description": "Consume all remaining input and return it as single string",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "takeLazyByteString",
          "package": "attoparsec",
          "partial": "Lazy Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:takeLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n (i.e. until it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e), and return the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the first byte of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "takeTill",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#takeTill",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns False i.e until it returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns True on the first byte of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "takeTill",
          "normalized": "(Char-\u003eBool)-\u003eParser ByteString",
          "package": "attoparsec",
          "partial": "Till",
          "signature": "(Char-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:takeTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e on the first byte of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "takeWhile",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns False on the first byte of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eParser ByteString",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser requires the predicate to succeed on at least one byte\n of input: it will fail if the predicate never returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e or if\n there is no input left.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "takeWhile1",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Char8.html#takeWhile1",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser requires the predicate to succeed on at least one byte of input it will fail if the predicate never returns True or if there is no input left",
          "hierarchy": "Data Attoparsec ByteString Char8",
          "module": "Data.Attoparsec.ByteString.Char8",
          "name": "takeWhile1",
          "normalized": "(Char-\u003eBool)-\u003eParser ByteString",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Char8.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient combinator parsing that can consume lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e strings, loosely based on the Parsec library.\n\u003c/p\u003e\u003cp\u003eThis is essentially the same code as in the \u003ccode\u003e\u003ca\u003eAttoparsec\u003c/a\u003e\u003c/code\u003e\n module, only with a \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e function that can consume a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e incrementally, and a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e type that does not allow\n more input to be fed in.  Think of this as suitable for use with a\n lazily read file, e.g. via \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The various parser functions and combinators such as\n \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e still expect \u003cem\u003estrict\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e parameters, and\n return strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e results.  Behind the scenes, strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values are still used internally to store parser\n input and manipulate it efficiently.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "Lazy",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-ByteString-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient combinator parsing that can consume lazy ByteString strings loosely based on the Parsec library This is essentially the same code as in the Attoparsec module only with parse function that can consume lazy ByteString incrementally and Result type that does not allow more input to be fed in Think of this as suitable for use with lazily read file e.g via readFile or hGetContents Note The various parser functions and combinators such as string still expect strict ByteString parameters and return strict ByteString results Behind the scenes strict ByteString values are still used internally to store parser input and manipulate it efficiently",
          "hierarchy": "Data Attoparsec ByteString Lazy",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "Lazy",
          "package": "attoparsec",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "Result",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-ByteString-Lazy.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of parse",
          "hierarchy": "Data Attoparsec ByteString Lazy",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "Result",
          "package": "attoparsec",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Lazy.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse succeeded.  The \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is the\n input that had not yet been consumed (if any) when\n the parse succeeded.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "Done",
          "package": "attoparsec",
          "signature": "Done ByteString r",
          "source": "src/Data-Attoparsec-ByteString-Lazy.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse succeeded The ByteString is the input that had not yet been consumed if any when the parse succeeded",
          "hierarchy": "Data Attoparsec ByteString Lazy",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "Done",
          "package": "attoparsec",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Lazy.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse failed.  The \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is the input\n that had not yet been consumed when the failure\n occurred.  The \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e is a list of contexts\n in which the error occurred.  The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the\n message describing the error, if any.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "Fail",
          "package": "attoparsec",
          "signature": "Fail ByteString [String] String",
          "source": "src/Data-Attoparsec-ByteString-Lazy.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse failed The ByteString is the input that had not yet been consumed when the failure occurred The String is list of contexts in which the error occurred The String is the message describing the error if any",
          "hierarchy": "Data Attoparsec ByteString Lazy",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "Fail",
          "normalized": "Fail ByteString[String]String",
          "package": "attoparsec",
          "partial": "Fail",
          "signature": "Fail ByteString[String]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Lazy.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "eitherResult",
          "package": "attoparsec",
          "signature": "Result r -\u003e Either String r",
          "source": "src/Data-Attoparsec-ByteString-Lazy.html#eitherResult",
          "type": "function"
        },
        "index": {
          "description": "Convert Result value to an Either value",
          "hierarchy": "Data Attoparsec ByteString Lazy",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "eitherResult",
          "normalized": "Result a-\u003eEither String a",
          "package": "attoparsec",
          "partial": "Result",
          "signature": "Result r-\u003eEither String r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Lazy.html#v:eitherResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "maybeResult",
          "package": "attoparsec",
          "signature": "Result r -\u003e Maybe r",
          "source": "src/Data-Attoparsec-ByteString-Lazy.html#maybeResult",
          "type": "function"
        },
        "index": {
          "description": "Convert Result value to Maybe value",
          "hierarchy": "Data Attoparsec ByteString Lazy",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "maybeResult",
          "normalized": "Result a-\u003eMaybe a",
          "package": "attoparsec",
          "partial": "Result",
          "signature": "Result r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Lazy.html#v:maybeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and return its result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "parse",
          "package": "attoparsec",
          "signature": "Parser a -\u003e ByteString -\u003e Result a",
          "source": "src/Data-Attoparsec-ByteString-Lazy.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run parser and return its result",
          "hierarchy": "Data Attoparsec ByteString Lazy",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "parse",
          "normalized": "Parser a-\u003eByteString-\u003eResult a",
          "package": "attoparsec",
          "signature": "Parser a-\u003eByteString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Lazy.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and print its result to standard output.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "parseTest",
          "package": "attoparsec",
          "signature": "Parser a -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Attoparsec-ByteString-Lazy.html#parseTest",
          "type": "function"
        },
        "index": {
          "description": "Run parser and print its result to standard output",
          "hierarchy": "Data Attoparsec ByteString Lazy",
          "module": "Data.Attoparsec.ByteString.Lazy",
          "name": "parseTest",
          "normalized": "Parser a-\u003eByteString-\u003eIO()",
          "package": "attoparsec",
          "partial": "Test",
          "signature": "Parser a-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString-Lazy.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient combinator parsing for \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e strings,\n loosely based on the Parsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "ByteString",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient combinator parsing for ByteString strings loosely based on the Parsec library",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "ByteString",
          "package": "attoparsec",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.  This is parameterised over the type \u003ccode\u003et\u003c/code\u003e\n of string that was processed.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, where \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e transforms the\n value in a \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "IResult",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Internal-Types.html#IResult",
          "type": "data"
        },
        "index": {
          "description": "The result of parse This is parameterised over the type of string that was processed This type is an instance of Functor where fmap transforms the value in Done result",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "IResult",
          "package": "attoparsec",
          "partial": "IResult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#t:IResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.ByteString",
          "name": "Parser",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "Parser",
          "package": "attoparsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.ByteString",
          "name": "Result",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#Result",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "Result",
          "package": "attoparsec",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any byte.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "anyWord8",
          "package": "attoparsec",
          "signature": "Parser Word8",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#anyWord8",
          "type": "function"
        },
        "index": {
          "description": "Match any byte",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "anyWord8",
          "package": "attoparsec",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:anyWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any byte in a set.\n\u003c/p\u003e\u003cpre\u003evowel = inClass \"aeiou\"\n\u003c/pre\u003e\u003cp\u003eRange notation is supported.\n\u003c/p\u003e\u003cpre\u003ehalfAlphabet = inClass \"a-nA-N\"\n\u003c/pre\u003e\u003cp\u003eTo add a literal \u003ccode\u003e'-'\u003c/code\u003e to a set, place it at the beginning or end\n of the string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "inClass",
          "package": "attoparsec",
          "signature": "String -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#inClass",
          "type": "function"
        },
        "index": {
          "description": "Match any byte in set vowel inClass aeiou Range notation is supported halfAlphabet inClass a-nA-N To add literal to set place it at the beginning or end of the string",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "inClass",
          "normalized": "String-\u003eWord-\u003eBool",
          "package": "attoparsec",
          "partial": "Class",
          "signature": "String-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:inClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any byte not in a set.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "notInClass",
          "package": "attoparsec",
          "signature": "String -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#notInClass",
          "type": "function"
        },
        "index": {
          "description": "Match any byte not in set",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "notInClass",
          "normalized": "String-\u003eWord-\u003eBool",
          "package": "attoparsec",
          "partial": "In Class",
          "signature": "String-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:notInClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any byte except the given one.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "notWord8",
          "package": "attoparsec",
          "signature": "Word8 -\u003e Parser Word8",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#notWord8",
          "type": "function"
        },
        "index": {
          "description": "Match any byte except the given one",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "notWord8",
          "normalized": "Word-\u003eParser Word",
          "package": "attoparsec",
          "partial": "Word",
          "signature": "Word-\u003eParser Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:notWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any byte, to perform lookahead. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if end of\n input has been reached. Does not consume any input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "peekWord8",
          "package": "attoparsec",
          "signature": "Parser (Maybe Word8)",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#peekWord8",
          "type": "function"
        },
        "index": {
          "description": "Match any byte to perform lookahead Returns Nothing if end of input has been reached Does not consume any input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "peekWord8",
          "package": "attoparsec",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:peekWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any byte, to perform lookahead.  Does not consume any\n input, but will fail if end of input has been reached.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "peekWord8'",
          "package": "attoparsec",
          "signature": "Parser Word8",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#peekWord8%27",
          "type": "function"
        },
        "index": {
          "description": "Match any byte to perform lookahead Does not consume any input but will fail if end of input has been reached",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "peekWord8'",
          "package": "attoparsec",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:peekWord8-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy p\u003c/code\u003e succeeds for any byte for which the\n predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the byte that is actually\n parsed.\n\u003c/p\u003e\u003cpre\u003edigit = satisfy isDigit\n    where isDigit w = w \u003e= 48 && w \u003c= 57\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "satisfy",
          "package": "attoparsec",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser Word8",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfy succeeds for any byte for which the predicate returns True Returns the byte that is actually parsed digit satisfy isDigit where isDigit",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "satisfy",
          "normalized": "(Word-\u003eBool)-\u003eParser Word",
          "package": "attoparsec",
          "signature": "(Word-\u003eBool)-\u003eParser Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfyWith f p\u003c/code\u003e transforms a byte, and succeeds if\n the predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the transformed value. The\n parser returns the transformed byte that was parsed.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "satisfyWith",
          "package": "attoparsec",
          "signature": "(Word8 -\u003e a) -\u003e (a -\u003e Bool) -\u003e Parser a",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#satisfyWith",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfyWith transforms byte and succeeds if the predicate returns True on the transformed value The parser returns the transformed byte that was parsed",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "satisfyWith",
          "normalized": "(Word-\u003ea)-\u003e(a-\u003eBool)-\u003eParser a",
          "package": "attoparsec",
          "partial": "With",
          "signature": "(Word-\u003ea)-\u003e(a-\u003eBool)-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:satisfyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stateful scanner.  The predicate consumes and transforms a\n state argument, and each transformed state is passed to successive\n invocations of the predicate on each byte of the input until one\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or the input ends.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on the first byte of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "scan",
          "package": "attoparsec",
          "signature": "s -\u003e (s -\u003e Word8 -\u003e Maybe s) -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#scan",
          "type": "function"
        },
        "index": {
          "description": "stateful scanner The predicate consumes and transforms state argument and each transformed state is passed to successive invocations of the predicate on each byte of the input until one returns Nothing or the input ends This parser does not fail It will return an empty string if the predicate returns Nothing on the first byte of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "scan",
          "normalized": "a-\u003e(a-\u003eWord-\u003eMaybe a)-\u003eParser ByteString",
          "package": "attoparsec",
          "signature": "s-\u003e(s-\u003eWord-\u003eMaybe s)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eskip p\u003c/code\u003e succeeds for any byte for which the predicate\n \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eskipDigit = skip isDigit\n    where isDigit w = w \u003e= 48 && w \u003c= 57\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "skip",
          "package": "attoparsec",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ()",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#skip",
          "type": "function"
        },
        "index": {
          "description": "The parser skip succeeds for any byte for which the predicate returns True skipDigit skip isDigit where isDigit",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "skip",
          "normalized": "(Word-\u003eBool)-\u003eParser()",
          "package": "attoparsec",
          "signature": "(Word-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip past input for as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "skipWhile",
          "package": "attoparsec",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ()",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#skipWhile",
          "type": "function"
        },
        "index": {
          "description": "Skip past input for as long as the predicate returns True",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "skipWhile",
          "normalized": "(Word-\u003eBool)-\u003eParser()",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:skipWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n (i.e. until it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e), and return the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the first byte of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "takeTill",
          "package": "attoparsec",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#takeTill",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns False i.e until it returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns True on the first byte of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "takeTill",
          "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
          "package": "attoparsec",
          "partial": "Till",
          "signature": "(Word-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:takeTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e on the first byte of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "takeWhile",
          "package": "attoparsec",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns False on the first byte of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser requires the predicate to succeed on at least one byte\n of input: it will fail if the predicate never returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e or if\n there is no input left.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "takeWhile1",
          "package": "attoparsec",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#takeWhile1",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser requires the predicate to succeed on at least one byte of input it will fail if the predicate never returns True or if there is no input left",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "takeWhile1",
          "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a specific byte.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.ByteString",
          "name": "word8",
          "package": "attoparsec",
          "signature": "Word8 -\u003e Parser Word8",
          "source": "src/Data-Attoparsec-ByteString-Internal.html#word8",
          "type": "function"
        },
        "index": {
          "description": "Match specific byte",
          "hierarchy": "Data Attoparsec ByteString",
          "module": "Data.Attoparsec.ByteString",
          "name": "word8",
          "normalized": "Word-\u003eParser Word",
          "package": "attoparsec",
          "signature": "Word-\u003eParser Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-ByteString.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient, character-oriented combinator parsing for\n \u003ccode\u003eByteString\u003c/code\u003e strings, loosely based on the Parsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Char8",
          "name": "Char8",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Char8.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient character-oriented combinator parsing for ByteString strings loosely based on the Parsec library",
          "hierarchy": "Data Attoparsec Char8",
          "module": "Data.Attoparsec.Char8",
          "name": "Char8",
          "package": "attoparsec",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Char8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseful parser combinators, similar to those provided by Parsec.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "Combinator",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Useful parser combinators similar to those provided by Parsec",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "Combinator",
          "package": "attoparsec",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName the parser, in case failure occurs.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "(\u003c?\u003e)",
          "package": "attoparsec",
          "signature": "Parser t a-\u003e String-\u003e Parser t a",
          "type": "function"
        },
        "index": {
          "description": "Name the parser in case failure occurs",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "Parser a b-\u003eString-\u003eParser a b",
          "package": "attoparsec",
          "signature": "Parser t a-\u003eString-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an indication of whether the end of input has been\n reached.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "atEnd",
          "package": "attoparsec",
          "signature": "Parser t Bool",
          "source": "src/Data-Attoparsec-Combinator.html#atEnd",
          "type": "function"
        },
        "index": {
          "description": "Return an indication of whether the end of input has been reached",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "atEnd",
          "package": "attoparsec",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:atEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echoice ps\u003c/code\u003e tries to apply the actions in the list \u003ccode\u003eps\u003c/code\u003e in order,\n until one of them succeeds. Returns the value of the succeeding\n action.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "choice",
          "package": "attoparsec",
          "signature": "[f a] -\u003e f a",
          "source": "src/Data-Attoparsec-Combinator.html#choice",
          "type": "function"
        },
        "index": {
          "description": "choice ps tries to apply the actions in the list ps in order until one of them succeeds Returns the value of the succeeding action",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "choice",
          "normalized": "[a b]-\u003ea b",
          "package": "attoparsec",
          "signature": "[f a]-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given action repeatedly, returning every result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "count",
          "package": "attoparsec",
          "signature": "Int -\u003e m a -\u003e m [a]",
          "source": "src/Data-Attoparsec-Combinator.html#count",
          "type": "function"
        },
        "index": {
          "description": "Apply the given action repeatedly returning every result",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "count",
          "normalized": "Int-\u003ea b-\u003ea[b]",
          "package": "attoparsec",
          "signature": "Int-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two alternatives.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "eitherP",
          "package": "attoparsec",
          "signature": "f a -\u003e f b -\u003e f (Either a b)",
          "source": "src/Data-Attoparsec-Combinator.html#eitherP",
          "type": "function"
        },
        "index": {
          "description": "Combine two alternatives",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "eitherP",
          "normalized": "a b-\u003ea c-\u003ea(Either b c)",
          "package": "attoparsec",
          "signature": "f a-\u003ef b-\u003ef(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:eitherP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch only if all input has been consumed.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "endOfInput",
          "package": "attoparsec",
          "signature": "Parser t ()",
          "source": "src/Data-Attoparsec-Combinator.html#endOfInput",
          "type": "function"
        },
        "index": {
          "description": "Match only if all input has been consumed",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "endOfInput",
          "normalized": "Parser a()",
          "package": "attoparsec",
          "partial": "Of Input",
          "signature": "Parser t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:endOfInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany' p\u003c/code\u003e applies the action \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times. Returns a\n list of the returned values of \u003ccode\u003ep\u003c/code\u003e. The value returned by \u003ccode\u003ep\u003c/code\u003e is\n forced to WHNF.\n\u003c/p\u003e\u003cpre\u003e  word  = many' letter\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "many'",
          "package": "attoparsec",
          "signature": "m a -\u003e m [a]",
          "source": "src/Data-Attoparsec-Combinator.html#many%27",
          "type": "function"
        },
        "index": {
          "description": "many applies the action zero or more times Returns list of the returned values of The value returned by is forced to WHNF word many letter",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "many'",
          "normalized": "a b-\u003ea[b]",
          "package": "attoparsec",
          "signature": "m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:many-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany1 p\u003c/code\u003e applies the action \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times. Returns a\n list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  word  = many1 letter\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "many1",
          "package": "attoparsec",
          "signature": "f a -\u003e f [a]",
          "source": "src/Data-Attoparsec-Combinator.html#many1",
          "type": "function"
        },
        "index": {
          "description": "many1 applies the action one or more times Returns list of the returned values of word many1 letter",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "many1",
          "normalized": "a b-\u003ea[b]",
          "package": "attoparsec",
          "signature": "f a-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany1' p\u003c/code\u003e applies the action \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times. Returns a\n list of the returned values of \u003ccode\u003ep\u003c/code\u003e. The value returned by \u003ccode\u003ep\u003c/code\u003e is\n forced to WHNF.\n\u003c/p\u003e\u003cpre\u003e  word  = many1' letter\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "many1'",
          "package": "attoparsec",
          "signature": "m a -\u003e m [a]",
          "source": "src/Data-Attoparsec-Combinator.html#many1%27",
          "type": "function"
        },
        "index": {
          "description": "many1 applies the action one or more times Returns list of the returned values of The value returned by is forced to WHNF word many1 letter",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "many1'",
          "normalized": "a b-\u003ea[b]",
          "package": "attoparsec",
          "signature": "m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:many1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emanyTill p end\u003c/code\u003e applies action \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times until\n action \u003ccode\u003eend\u003c/code\u003e succeeds, and returns the list of values returned by\n \u003ccode\u003ep\u003c/code\u003e.  This can be used to scan comments:\n\u003c/p\u003e\u003cpre\u003e  simpleComment   = string \"\u003c!--\" *\u003e manyTill anyChar (string \"--\u003e\")\n\u003c/pre\u003e\u003cp\u003e(Note the overlapping parsers \u003ccode\u003eanyChar\u003c/code\u003e and \u003ccode\u003estring \"--\u003e\"\u003c/code\u003e.\n While this will work, it is not very efficient, as it will cause a\n lot of backtracking.)\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "manyTill",
          "package": "attoparsec",
          "signature": "f a -\u003e f b -\u003e f [a]",
          "source": "src/Data-Attoparsec-Combinator.html#manyTill",
          "type": "function"
        },
        "index": {
          "description": "manyTill end applies action zero or more times until action end succeeds and returns the list of values returned by This can be used to scan comments simpleComment string manyTill anyChar string Note the overlapping parsers anyChar and string While this will work it is not very efficient as it will cause lot of backtracking",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "manyTill",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "attoparsec",
          "partial": "Till",
          "signature": "f a-\u003ef b-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emanyTill' p end\u003c/code\u003e applies action \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times until\n action \u003ccode\u003eend\u003c/code\u003e succeeds, and returns the list of values returned by\n \u003ccode\u003ep\u003c/code\u003e.  This can be used to scan comments:\n\u003c/p\u003e\u003cpre\u003e  simpleComment   = string \"\u003c!--\" *\u003e manyTill' anyChar (string \"--\u003e\")\n\u003c/pre\u003e\u003cp\u003e(Note the overlapping parsers \u003ccode\u003eanyChar\u003c/code\u003e and \u003ccode\u003estring \"--\u003e\"\u003c/code\u003e.\n While this will work, it is not very efficient, as it will cause a\n lot of backtracking.)\n\u003c/p\u003e\u003cp\u003eThe value returned by \u003ccode\u003ep\u003c/code\u003e is forced to WHNF.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "manyTill'",
          "package": "attoparsec",
          "signature": "m a -\u003e m b -\u003e m [a]",
          "source": "src/Data-Attoparsec-Combinator.html#manyTill%27",
          "type": "function"
        },
        "index": {
          "description": "manyTill end applies action zero or more times until action end succeeds and returns the list of values returned by This can be used to scan comments simpleComment string manyTill anyChar string Note the overlapping parsers anyChar and string While this will work it is not very efficient as it will cause lot of backtracking The value returned by is forced to WHNF",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "manyTill'",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "attoparsec",
          "partial": "Till'",
          "signature": "m a-\u003em b-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:manyTill-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoption x p\u003c/code\u003e tries to apply action \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it returns the value \u003ccode\u003ex\u003c/code\u003e, otherwise the value\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e priority  = option 0 (digitToInt \u003c$\u003e digit)\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "option",
          "package": "attoparsec",
          "signature": "a -\u003e f a -\u003e f a",
          "source": "src/Data-Attoparsec-Combinator.html#option",
          "type": "function"
        },
        "index": {
          "description": "option tries to apply action If fails without consuming input it returns the value otherwise the value returned by priority option digitToInt digit",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "option",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "attoparsec",
          "signature": "a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfyElem p\u003c/code\u003e succeeds for any chunk element for which the\n predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the element that is\n actually parsed.\n\u003c/p\u003e\u003cpre\u003edigit = satisfyElem isDigit\n    where isDigit c = c \u003e= '0' && c \u003c= '9'\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "satisfyElem",
          "package": "attoparsec",
          "signature": "(ChunkElem t -\u003e Bool) -\u003e Parser t (ChunkElem t)",
          "source": "src/Data-Attoparsec-Combinator.html#satisfyElem",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfyElem succeeds for any chunk element for which the predicate returns True Returns the element that is actually parsed digit satisfyElem isDigit where isDigit",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "satisfyElem",
          "normalized": "(ChunkElem a-\u003eBool)-\u003eParser a(ChunkElem a)",
          "package": "attoparsec",
          "partial": "Elem",
          "signature": "(ChunkElem t-\u003eBool)-\u003eParser t(ChunkElem t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:satisfyElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy p sep\u003c/code\u003e applies \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of the values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e commaSep p  = p `sepBy` (symbol \",\")\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "sepBy",
          "package": "attoparsec",
          "signature": "f a -\u003e f s -\u003e f [a]",
          "source": "src/Data-Attoparsec-Combinator.html#sepBy",
          "type": "function"
        },
        "index": {
          "description": "sepBy sep applies zero or more occurrences of separated by sep Returns list of the values returned by commaSep sepBy symbol",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "sepBy",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "attoparsec",
          "partial": "By",
          "signature": "f a-\u003ef s-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy' p sep\u003c/code\u003e applies \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of the values returned by \u003ccode\u003ep\u003c/code\u003e. The value\n returned by \u003ccode\u003ep\u003c/code\u003e is forced to WHNF.\n\u003c/p\u003e\u003cpre\u003e commaSep p  = p `sepBy'` (symbol \",\")\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "sepBy'",
          "package": "attoparsec",
          "signature": "m a -\u003e m s -\u003e m [a]",
          "source": "src/Data-Attoparsec-Combinator.html#sepBy%27",
          "type": "function"
        },
        "index": {
          "description": "sepBy sep applies zero or more occurrences of separated by sep Returns list of the values returned by The value returned by is forced to WHNF commaSep sepBy symbol",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "sepBy'",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "attoparsec",
          "partial": "By'",
          "signature": "m a-\u003em s-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:sepBy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy1 p sep\u003c/code\u003e applies \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of the values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e commaSep p  = p `sepBy1` (symbol \",\")\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "sepBy1",
          "package": "attoparsec",
          "signature": "f a -\u003e f s -\u003e f [a]",
          "source": "src/Data-Attoparsec-Combinator.html#sepBy1",
          "type": "function"
        },
        "index": {
          "description": "sepBy1 sep applies one or more occurrences of separated by sep Returns list of the values returned by commaSep sepBy1 symbol",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "sepBy1",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "attoparsec",
          "partial": "By",
          "signature": "f a-\u003ef s-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy1' p sep\u003c/code\u003e applies \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of the values returned by \u003ccode\u003ep\u003c/code\u003e. The value\n returned by \u003ccode\u003ep\u003c/code\u003e is forced to WHNF.\n\u003c/p\u003e\u003cpre\u003e commaSep p  = p `sepBy1'` (symbol \",\")\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "sepBy1'",
          "package": "attoparsec",
          "signature": "m a -\u003e m s -\u003e m [a]",
          "source": "src/Data-Attoparsec-Combinator.html#sepBy1%27",
          "type": "function"
        },
        "index": {
          "description": "sepBy1 sep applies one or more occurrences of separated by sep Returns list of the values returned by The value returned by is forced to WHNF commaSep sepBy1 symbol",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "sepBy1'",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "attoparsec",
          "partial": "By",
          "signature": "m a-\u003em s-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:sepBy1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip zero or more instances of an action.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "skipMany",
          "package": "attoparsec",
          "signature": "f a -\u003e f ()",
          "source": "src/Data-Attoparsec-Combinator.html#skipMany",
          "type": "function"
        },
        "index": {
          "description": "Skip zero or more instances of an action",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "skipMany",
          "normalized": "a b-\u003ea()",
          "package": "attoparsec",
          "partial": "Many",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip one or more instances of an action.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "skipMany1",
          "package": "attoparsec",
          "signature": "f a -\u003e f ()",
          "source": "src/Data-Attoparsec-Combinator.html#skipMany1",
          "type": "function"
        },
        "index": {
          "description": "Skip one or more instances of an action",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "skipMany1",
          "normalized": "a b-\u003ea()",
          "package": "attoparsec",
          "partial": "Many",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:skipMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt a parse, and if it fails, rewind the input so that no\n input appears to have been consumed.\n\u003c/p\u003e\u003cp\u003eThis combinator is provided for compatibility with Parsec.\n Attoparsec parsers always backtrack on failure.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Combinator",
          "name": "try",
          "package": "attoparsec",
          "signature": "Parser t a -\u003e Parser t a",
          "source": "src/Data-Attoparsec-Combinator.html#try",
          "type": "function"
        },
        "index": {
          "description": "Attempt parse and if it fails rewind the input so that no input appears to have been consumed This combinator is provided for compatibility with Parsec Attoparsec parsers always backtrack on failure",
          "hierarchy": "Data Attoparsec Combinator",
          "module": "Data.Attoparsec.Combinator",
          "name": "try",
          "normalized": "Parser a b-\u003eParser a b",
          "package": "attoparsec",
          "signature": "Parser t a-\u003eParser t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Combinator.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient combinator parsing for lazy \u003ccode\u003eByteString\u003c/code\u003e\n strings, loosely based on the Parsec library.\n\u003c/p\u003e\u003cp\u003eThis is essentially the same code as in the \u003ccode\u003e\u003ca\u003eAttoparsec\u003c/a\u003e\u003c/code\u003e\n module, only with a \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e function that can consume a lazy\n \u003ccode\u003eByteString\u003c/code\u003e incrementally, and a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e type that does not allow\n more input to be fed in.  Think of this as suitable for use with a\n lazily read file, e.g. via \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBehind the scenes, strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values are still used\n internally to store parser input and manipulate it efficiently.\n High-performance parsers such as \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e still expect strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e parameters.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Lazy",
          "name": "Lazy",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient combinator parsing for lazy ByteString strings loosely based on the Parsec library This is essentially the same code as in the Attoparsec module only with parse function that can consume lazy ByteString incrementally and Result type that does not allow more input to be fed in Think of this as suitable for use with lazily read file e.g via readFile or hGetContents Behind the scenes strict ByteString values are still used internally to store parser input and manipulate it efficiently High-performance parsers such as string still expect strict ByteString parameters",
          "hierarchy": "Data Attoparsec Lazy",
          "module": "Data.Attoparsec.Lazy",
          "name": "Lazy",
          "package": "attoparsec",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple number type, useful for parsing both exact and inexact\n quantities without losing much precision.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Number",
          "name": "Number",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Number.html",
          "type": "module"
        },
        "index": {
          "description": "simple number type useful for parsing both exact and inexact quantities without losing much precision",
          "hierarchy": "Data Attoparsec Number",
          "module": "Data.Attoparsec.Number",
          "name": "Number",
          "package": "attoparsec",
          "partial": "Number",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Number.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric type that can represent integers accurately, and\n floating point numbers to the precision of a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Number",
          "name": "Number",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Number.html#Number",
          "type": "data"
        },
        "index": {
          "description": "numeric type that can represent integers accurately and floating point numbers to the precision of Double",
          "hierarchy": "Data Attoparsec Number",
          "module": "Data.Attoparsec.Number",
          "name": "Number",
          "package": "attoparsec",
          "partial": "Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Number.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient combinator parsing that can consume lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n strings, loosely based on the Parsec library.\n\u003c/p\u003e\u003cp\u003eThis is essentially the same code as in the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n module, only with a \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e function that can consume a lazy\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e incrementally, and a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e type that does not allow\n more input to be fed in.  Think of this as suitable for use with a\n lazily read file, e.g. via \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The various parser functions and combinators such as\n \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e still expect \u003cem\u003estrict\u003c/em\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e parameters, and return\n strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e results.  Behind the scenes, strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values\n are still used internally to store parser input and manipulate it\n efficiently.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Lazy",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Text-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient combinator parsing that can consume lazy Text strings loosely based on the Parsec library This is essentially the same code as in the Text module only with parse function that can consume lazy Text incrementally and Result type that does not allow more input to be fed in Think of this as suitable for use with lazily read file e.g via readFile or hGetContents Note The various parser functions and combinators such as string still expect strict Text parameters and return strict Text results Behind the scenes strict Text values are still used internally to store parser input and manipulate it efficiently",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Lazy",
          "package": "attoparsec",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Result",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Text-Lazy.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of parse",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Result",
          "package": "attoparsec",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text-Lazy.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse succeeded.  The \u003ccode\u003eByteString\u003c/code\u003e is the\n input that had not yet been consumed (if any) when\n the parse succeeded.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Done",
          "package": "attoparsec",
          "signature": "Done Text r",
          "source": "src/Data-Attoparsec-Text-Lazy.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse succeeded The ByteString is the input that had not yet been consumed if any when the parse succeeded",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Done",
          "package": "attoparsec",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text-Lazy.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse failed.  The \u003ccode\u003eByteString\u003c/code\u003e is the input\n that had not yet been consumed when the failure\n occurred.  The \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e is a list of contexts\n in which the error occurred.  The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the\n message describing the error, if any.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Fail",
          "package": "attoparsec",
          "signature": "Fail Text [String] String",
          "source": "src/Data-Attoparsec-Text-Lazy.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse failed The ByteString is the input that had not yet been consumed when the failure occurred The String is list of contexts in which the error occurred The String is the message describing the error if any",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Fail",
          "normalized": "Fail Text[String]String",
          "package": "attoparsec",
          "partial": "Fail",
          "signature": "Fail Text[String]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text-Lazy.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "eitherResult",
          "package": "attoparsec",
          "signature": "Result r -\u003e Either String r",
          "source": "src/Data-Attoparsec-Text-Lazy.html#eitherResult",
          "type": "function"
        },
        "index": {
          "description": "Convert Result value to an Either value",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "eitherResult",
          "normalized": "Result a-\u003eEither String a",
          "package": "attoparsec",
          "partial": "Result",
          "signature": "Result r-\u003eEither String r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text-Lazy.html#v:eitherResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "maybeResult",
          "package": "attoparsec",
          "signature": "Result r -\u003e Maybe r",
          "source": "src/Data-Attoparsec-Text-Lazy.html#maybeResult",
          "type": "function"
        },
        "index": {
          "description": "Convert Result value to Maybe value",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "maybeResult",
          "normalized": "Result a-\u003eMaybe a",
          "package": "attoparsec",
          "partial": "Result",
          "signature": "Result r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text-Lazy.html#v:maybeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and return its result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "parse",
          "package": "attoparsec",
          "signature": "Parser a -\u003e Text -\u003e Result a",
          "source": "src/Data-Attoparsec-Text-Lazy.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run parser and return its result",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "parse",
          "normalized": "Parser a-\u003eText-\u003eResult a",
          "package": "attoparsec",
          "signature": "Parser a-\u003eText-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text-Lazy.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and print its result to standard output.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "parseTest",
          "package": "attoparsec",
          "signature": "Parser a -\u003e Text -\u003e IO ()",
          "source": "src/Data-Attoparsec-Text-Lazy.html#parseTest",
          "type": "function"
        },
        "index": {
          "description": "Run parser and print its result to standard output",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "parseTest",
          "normalized": "Parser a-\u003eText-\u003eIO()",
          "package": "attoparsec",
          "partial": "Test",
          "signature": "Parser a-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text-Lazy.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient combinator parsing for \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e strings,\n loosely based on the Parsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "Text",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient combinator parsing for Text strings loosely based on the Parsec library",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Text",
          "package": "attoparsec",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.  This is parameterised over the type \u003ccode\u003et\u003c/code\u003e\n of string that was processed.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, where \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e transforms the\n value in a \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "IResult",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Internal-Types.html#IResult",
          "type": "data"
        },
        "index": {
          "description": "The result of parse This is parameterised over the type of string that was processed This type is an instance of Functor where fmap transforms the value in Done result",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "IResult",
          "package": "attoparsec",
          "partial": "IResult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#t:IResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric type that can represent integers accurately, and\n floating point numbers to the precision of a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "Number",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Number.html#Number",
          "type": "data"
        },
        "index": {
          "description": "numeric type that can represent integers accurately and floating point numbers to the precision of Double",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Number",
          "package": "attoparsec",
          "partial": "Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text",
          "name": "Parser",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Text-Internal.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Parser",
          "package": "attoparsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text",
          "name": "Result",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Text-Internal.html#Result",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Result",
          "package": "attoparsec",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-specialized version of \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "(\u003c*.)",
          "package": "attoparsec",
          "signature": "Parser a -\u003e Text -\u003e Parser a",
          "source": "src/Data-Attoparsec-Text.html#%3C%2A.",
          "type": "function"
        },
        "index": {
          "description": "Type-specialized version of for Text",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "(\u003c*.) \u003c*.",
          "normalized": "Parser a-\u003eText-\u003eParser a",
          "package": "attoparsec",
          "signature": "Parser a-\u003eText-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:-60--42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-specialized version of \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "(.*\u003e)",
          "package": "attoparsec",
          "signature": "Text -\u003e Parser a -\u003e Parser a",
          "source": "src/Data-Attoparsec-Text.html#.%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Type-specialized version of for Text",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "(.*\u003e) .*\u003e",
          "normalized": "Text-\u003eParser a-\u003eParser a",
          "package": "attoparsec",
          "signature": "Text-\u003eParser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:.-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "anyChar",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#anyChar",
          "type": "function"
        },
        "index": {
          "description": "Match any character",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "anyChar",
          "package": "attoparsec",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSatisfy a literal string, ignoring case for characters in the ASCII range.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "asciiCI",
          "package": "attoparsec",
          "signature": "Text -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#asciiCI",
          "type": "function"
        },
        "index": {
          "description": "Satisfy literal string ignoring case for characters in the ASCII range",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "asciiCI",
          "normalized": "Text-\u003eParser Text",
          "package": "attoparsec",
          "partial": "CI",
          "signature": "Text-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:asciiCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a specific character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "char",
          "package": "attoparsec",
          "signature": "Char -\u003e Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#char",
          "type": "function"
        },
        "index": {
          "description": "Match specific character",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "char",
          "normalized": "Char-\u003eParser Char",
          "package": "attoparsec",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode an unsigned decimal number.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "decimal",
          "package": "attoparsec",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-Text.html#decimal",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode an unsigned decimal number",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "decimal",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single digit, as recognised by \u003ccode\u003e\u003ca\u003eisDigit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "digit",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parse single digit as recognised by isDigit",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "digit",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a rational number.\n\u003c/p\u003e\u003cp\u003eThe syntax accepted by this parser is the same as for \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This function is almost ten times faster than \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e,\n but is slightly less accurate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type supports about 16 decimal places of accuracy.\n For 94.2% of numbers, this function and \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e give identical\n results, but for the remaining 5.8%, this function loses precision\n around the 15th decimal place.  For 0.001% of numbers, this\n function will lose precision at the 13th or 14th decimal place.\n\u003c/p\u003e\u003cp\u003eThis function does not accept string representations of \"NaN\" or\n \"Infinity\".\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "double",
          "package": "attoparsec",
          "signature": "Parser Double",
          "source": "src/Data-Attoparsec-Text.html#double",
          "type": "function"
        },
        "index": {
          "description": "Parse rational number The syntax accepted by this parser is the same as for rational Note This function is almost ten times faster than rational but is slightly less accurate The Double type supports about decimal places of accuracy For of numbers this function and rational give identical results but for the remaining this function loses precision around the th decimal place For of numbers this function will lose precision at the th or th decimal place This function does not accept string representations of NaN or Infinity",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "double",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value. A \u003ccode\u003ePartial\u003c/code\u003e result\n is treated as failure.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "eitherResult",
          "package": "attoparsec",
          "signature": "Result r -\u003e Either String r",
          "source": "src/Data-Attoparsec-Text.html#eitherResult",
          "type": "function"
        },
        "index": {
          "description": "Convert Result value to an Either value Partial result is treated as failure",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "eitherResult",
          "normalized": "Result a-\u003eEither String a",
          "package": "attoparsec",
          "partial": "Result",
          "signature": "Result r-\u003eEither String r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:eitherResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either a single newline character \u003ccode\u003e'\\n'\u003c/code\u003e, or a carriage\n return followed by a newline character \u003ccode\u003e\"\\r\\n\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "endOfLine",
          "package": "attoparsec",
          "signature": "Parser ()",
          "source": "src/Data-Attoparsec-Text-Internal.html#endOfLine",
          "type": "function"
        },
        "index": {
          "description": "Match either single newline character or carriage return followed by newline character",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "endOfLine",
          "normalized": "Parser()",
          "package": "attoparsec",
          "partial": "Of Line",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:endOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a parser has returned a \u003ccode\u003ePartial\u003c/code\u003e result, supply it with more\n input.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "feed",
          "package": "attoparsec",
          "signature": "Result r -\u003e Text -\u003e Result r",
          "source": "src/Data-Attoparsec-Text.html#feed",
          "type": "function"
        },
        "index": {
          "description": "If parser has returned Partial result supply it with more input",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "feed",
          "normalized": "Result a-\u003eText-\u003eResult a",
          "package": "attoparsec",
          "signature": "Result r-\u003eText-\u003eResult r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode an unsigned hexadecimal number.  The hex digits\n \u003ccode\u003e'a'\u003c/code\u003e through \u003ccode\u003e'f'\u003c/code\u003e may be upper or lower case.\n\u003c/p\u003e\u003cp\u003eThis parser does not accept a leading \u003ccode\u003e\"0x\"\u003c/code\u003e string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "hexadecimal",
          "package": "attoparsec",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-Text.html#hexadecimal",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode an unsigned hexadecimal number The hex digits through may be upper or lower case This parser does not accept leading string",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "hexadecimal",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:hexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character in a set.\n\u003c/p\u003e\u003cpre\u003evowel = inClass \"aeiou\"\n\u003c/pre\u003e\u003cp\u003eRange notation is supported.\n\u003c/p\u003e\u003cpre\u003ehalfAlphabet = inClass \"a-nA-N\"\n\u003c/pre\u003e\u003cp\u003eTo add a literal \u003ccode\u003e'-'\u003c/code\u003e to a set, place it at the beginning or end\n of the string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "inClass",
          "package": "attoparsec",
          "signature": "String -\u003e Char -\u003e Bool",
          "source": "src/Data-Attoparsec-Text-Internal.html#inClass",
          "type": "function"
        },
        "index": {
          "description": "Match any character in set vowel inClass aeiou Range notation is supported halfAlphabet inClass a-nA-N To add literal to set place it at the beginning or end of the string",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "inClass",
          "normalized": "String-\u003eChar-\u003eBool",
          "package": "attoparsec",
          "partial": "Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:inClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that matches either a carriage return \u003ccode\u003e'\\r'\u003c/code\u003e or\n newline \u003ccode\u003e'\\n'\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "isEndOfLine",
          "package": "attoparsec",
          "signature": "Char -\u003e Bool",
          "source": "src/Data-Attoparsec-Text.html#isEndOfLine",
          "type": "function"
        },
        "index": {
          "description": "predicate that matches either carriage return or newline character",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "isEndOfLine",
          "normalized": "Char-\u003eBool",
          "package": "attoparsec",
          "partial": "End Of Line",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:isEndOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that matches either a space \u003ccode\u003e' '\u003c/code\u003e or horizontal tab\n \u003ccode\u003e'\\t'\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "isHorizontalSpace",
          "package": "attoparsec",
          "signature": "Char -\u003e Bool",
          "source": "src/Data-Attoparsec-Text.html#isHorizontalSpace",
          "type": "function"
        },
        "index": {
          "description": "predicate that matches either space or horizontal tab character",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "isHorizontalSpace",
          "normalized": "Char-\u003eBool",
          "package": "attoparsec",
          "partial": "Horizontal Space",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:isHorizontalSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a letter, as recognised by \u003ccode\u003e\u003ca\u003eisAlpha\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "letter",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text.html#letter",
          "type": "function"
        },
        "index": {
          "description": "Parse letter as recognised by isAlpha",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "letter",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value. A \u003ccode\u003ePartial\u003c/code\u003e result\n is treated as failure.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "maybeResult",
          "package": "attoparsec",
          "signature": "Result r -\u003e Maybe r",
          "source": "src/Data-Attoparsec-Text.html#maybeResult",
          "type": "function"
        },
        "index": {
          "description": "Convert Result value to Maybe value Partial result is treated as failure",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "maybeResult",
          "normalized": "Result a-\u003eMaybe a",
          "package": "attoparsec",
          "partial": "Result",
          "signature": "Result r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:maybeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character except the given one.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "notChar",
          "package": "attoparsec",
          "signature": "Char -\u003e Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#notChar",
          "type": "function"
        },
        "index": {
          "description": "Match any character except the given one",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "notChar",
          "normalized": "Char-\u003eParser Char",
          "package": "attoparsec",
          "partial": "Char",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:notChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character not in a set.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "notInClass",
          "package": "attoparsec",
          "signature": "String -\u003e Char -\u003e Bool",
          "source": "src/Data-Attoparsec-Text-Internal.html#notInClass",
          "type": "function"
        },
        "index": {
          "description": "Match any character not in set",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "notInClass",
          "normalized": "String-\u003eChar-\u003eBool",
          "package": "attoparsec",
          "partial": "In Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:notInClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a number, attempting to preserve both speed and precision.\n\u003c/p\u003e\u003cp\u003eThe syntax accepted by this parser is the same as for \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This function is almost ten times faster than \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n On integral inputs, it gives perfectly accurate answers, and on\n floating point inputs, it is slightly less accurate than\n \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does not accept string representations of \"NaN\" or\n \"Infinity\".\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "number",
          "package": "attoparsec",
          "signature": "Parser Number",
          "source": "src/Data-Attoparsec-Text.html#number",
          "type": "function"
        },
        "index": {
          "description": "Parse number attempting to preserve both speed and precision The syntax accepted by this parser is the same as for rational Note This function is almost ten times faster than rational On integral inputs it gives perfectly accurate answers and on floating point inputs it is slightly less accurate than rational This function does not accept string representations of NaN or Infinity",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "number",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "parse",
          "package": "attoparsec",
          "signature": "Parser a -\u003e Text -\u003e Result a",
          "source": "src/Data-Attoparsec-Text-Internal.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run parser",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "parse",
          "normalized": "Parser a-\u003eText-\u003eResult a",
          "package": "attoparsec",
          "signature": "Parser a-\u003eText-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser that cannot be resupplied via a \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "parseOnly",
          "package": "attoparsec",
          "signature": "Parser a -\u003e Text -\u003e Either String a",
          "source": "src/Data-Attoparsec-Text-Internal.html#parseOnly",
          "type": "function"
        },
        "index": {
          "description": "Run parser that cannot be resupplied via Partial result",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "parseOnly",
          "normalized": "Parser a-\u003eText-\u003eEither String a",
          "package": "attoparsec",
          "partial": "Only",
          "signature": "Parser a-\u003eText-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:parseOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and print its result to standard output.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "parseTest",
          "package": "attoparsec",
          "signature": "Parser a -\u003e Text -\u003e IO ()",
          "source": "src/Data-Attoparsec-Text.html#parseTest",
          "type": "function"
        },
        "index": {
          "description": "Run parser and print its result to standard output",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "parseTest",
          "normalized": "Parser a-\u003eText-\u003eIO()",
          "package": "attoparsec",
          "partial": "Test",
          "signature": "Parser a-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser with an initial input string, and a monadic action\n that can supply more input if needed.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "parseWith",
          "package": "attoparsec",
          "signature": "m Text-\u003e Parser a-\u003e Text-\u003e m (Result a)",
          "type": "function"
        },
        "index": {
          "description": "Run parser with an initial input string and monadic action that can supply more input if needed",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "parseWith",
          "normalized": "a Text-\u003eParser b-\u003eText-\u003ea(Result b)",
          "package": "attoparsec",
          "partial": "With",
          "signature": "m Text-\u003eParser a-\u003eText-\u003em(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:parseWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character, to perform lookahead. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n end of input has been reached. Does not consume any input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "peekChar",
          "package": "attoparsec",
          "signature": "Parser (Maybe Char)",
          "source": "src/Data-Attoparsec-Text-Internal.html#peekChar",
          "type": "function"
        },
        "index": {
          "description": "Match any character to perform lookahead Returns Nothing if end of input has been reached Does not consume any input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "peekChar",
          "package": "attoparsec",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:peekChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character, to perform lookahead.  Does not consume any\n input, but will fail if end of input has been reached.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "peekChar'",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#peekChar%27",
          "type": "function"
        },
        "index": {
          "description": "Match any character to perform lookahead Does not consume any input but will fail if end of input has been reached",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "peekChar'",
          "package": "attoparsec",
          "partial": "Char'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:peekChar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a rational number.\n\u003c/p\u003e\u003cp\u003eThis parser accepts an optional leading sign character, followed by\n at least one decimal digit.  The syntax similar to that accepted by\n the \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function, with the exception that a trailing \u003ccode\u003e'.'\u003c/code\u003e or\n \u003ccode\u003e'e'\u003c/code\u003e \u003cem\u003enot\u003c/em\u003e followed by a number is not consumed.\n\u003c/p\u003e\u003cp\u003eExamples with behaviour identical to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e, if you feed an empty\n continuation to the first result:\n\u003c/p\u003e\u003cpre\u003erational \"3\"     == Done 3.0 \"\"\nrational \"3.1\"   == Done 3.1 \"\"\nrational \"3e4\"   == Done 30000.0 \"\"\nrational \"3.1e4\" == Done 31000.0, \"\"\n\u003c/pre\u003e\u003cp\u003eExamples with behaviour identical to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003erational \".3\"    == Fail \"input does not start with a digit\"\nrational \"e3\"    == Fail \"input does not start with a digit\"\n\u003c/pre\u003e\u003cp\u003eExamples of differences from \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003erational \"3.foo\" == Done 3.0 \".foo\"\nrational \"3e\"    == Done 3.0 \"e\"\n\u003c/pre\u003e\u003cp\u003eThis function does not accept string representations of \"NaN\" or\n \"Infinity\".\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "rational",
          "package": "attoparsec",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-Text.html#rational",
          "type": "function"
        },
        "index": {
          "description": "Parse rational number This parser accepts an optional leading sign character followed by at least one decimal digit The syntax similar to that accepted by the read function with the exception that trailing or not followed by number is not consumed Examples with behaviour identical to read if you feed an empty continuation to the first result rational Done rational Done rational e4 Done rational e4 Done Examples with behaviour identical to read rational Fail input does not start with digit rational e3 Fail input does not start with digit Examples of differences from read rational foo Done foo rational Done This function does not accept string representations of NaN or Infinity",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "rational",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy p\u003c/code\u003e succeeds for any character for which the\n predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the character that is\n actually parsed.\n\u003c/p\u003e\u003cpre\u003edigit = satisfy isDigit\n    where isDigit c = c \u003e= '0' && c \u003c= '9'\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "satisfy",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfy succeeds for any character for which the predicate returns True Returns the character that is actually parsed digit satisfy isDigit where isDigit",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eParser Char",
          "package": "attoparsec",
          "signature": "(Char-\u003eBool)-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfyWith f p\u003c/code\u003e transforms a character, and succeeds\n if the predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the transformed value. The\n parser returns the transformed character that was parsed.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "satisfyWith",
          "package": "attoparsec",
          "signature": "(Char -\u003e a) -\u003e (a -\u003e Bool) -\u003e Parser a",
          "source": "src/Data-Attoparsec-Text-Internal.html#satisfyWith",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfyWith transforms character and succeeds if the predicate returns True on the transformed value The parser returns the transformed character that was parsed",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "satisfyWith",
          "normalized": "(Char-\u003ea)-\u003e(a-\u003eBool)-\u003eParser a",
          "package": "attoparsec",
          "partial": "With",
          "signature": "(Char-\u003ea)-\u003e(a-\u003eBool)-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:satisfyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stateful scanner.  The predicate consumes and transforms a\n state argument, and each transformed state is passed to successive\n invocations of the predicate on each character of the input until one\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or the input ends.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on the first character of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "scan",
          "package": "attoparsec",
          "signature": "s -\u003e (s -\u003e Char -\u003e Maybe s) -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#scan",
          "type": "function"
        },
        "index": {
          "description": "stateful scanner The predicate consumes and transforms state argument and each transformed state is passed to successive invocations of the predicate on each character of the input until one returns Nothing or the input ends This parser does not fail It will return an empty string if the predicate returns Nothing on the first character of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "scan",
          "normalized": "a-\u003e(a-\u003eChar-\u003eMaybe a)-\u003eParser Text",
          "package": "attoparsec",
          "signature": "s-\u003e(s-\u003eChar-\u003eMaybe s)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a number with an optional leading \u003ccode\u003e'+'\u003c/code\u003e or \u003ccode\u003e'-'\u003c/code\u003e sign\n character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "signed",
          "package": "attoparsec",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Data-Attoparsec-Text.html#signed",
          "type": "function"
        },
        "index": {
          "description": "Parse number with an optional leading or sign character",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "signed",
          "normalized": "Parser a-\u003eParser a",
          "package": "attoparsec",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eskip p\u003c/code\u003e succeeds for any character for which the\n predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eskipDigit = skip isDigit\n    where isDigit c = c \u003e= '0' && c \u003c= '9'\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "skip",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser ()",
          "source": "src/Data-Attoparsec-Text-Internal.html#skip",
          "type": "function"
        },
        "index": {
          "description": "The parser skip succeeds for any character for which the predicate returns True skipDigit skip isDigit where isDigit",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "skip",
          "normalized": "(Char-\u003eBool)-\u003eParser()",
          "package": "attoparsec",
          "signature": "(Char-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip over white space.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "skipSpace",
          "package": "attoparsec",
          "signature": "Parser ()",
          "source": "src/Data-Attoparsec-Text.html#skipSpace",
          "type": "function"
        },
        "index": {
          "description": "Skip over white space",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "skipSpace",
          "normalized": "Parser()",
          "package": "attoparsec",
          "partial": "Space",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:skipSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip past input for as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "skipWhile",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser ()",
          "source": "src/Data-Attoparsec-Text-Internal.html#skipWhile",
          "type": "function"
        },
        "index": {
          "description": "Skip past input for as long as the predicate returns True",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "skipWhile",
          "normalized": "(Char-\u003eBool)-\u003eParser()",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:skipWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a space character, as recognised by \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "space",
          "package": "attoparsec",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text.html#space",
          "type": "function"
        },
        "index": {
          "description": "Parse space character as recognised by isSpace",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "space",
          "package": "attoparsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of characters that identically match\n \u003ccode\u003es\u003c/code\u003e. Returns the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).  This parser consumes no\n input if it fails (even if a partial match).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: The behaviour of this parser is different to that of the\n similarly-named parser in Parsec, as this one is all-or-nothing.\n To illustrate the difference, the following parser will fail under\n Parsec given an input of \u003ccode\u003e\"for\"\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003estring \"foo\" \u003c|\u003e string \"for\"\n\u003c/pre\u003e\u003cp\u003eThe reason for its failure is that the first branch is a\n partial match, and will consume the letters \u003ccode\u003e'f'\u003c/code\u003e and \u003ccode\u003e'o'\u003c/code\u003e\n before failing.  In Attoparsec, the above parser will \u003cem\u003esucceed\u003c/em\u003e on\n that input, because the failed first branch will consume nothing.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "string",
          "package": "attoparsec",
          "signature": "Text -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#string",
          "type": "function"
        },
        "index": {
          "description": "string parses sequence of characters that identically match Returns the parsed string i.e This parser consumes no input if it fails even if partial match Note The behaviour of this parser is different to that of the similarly-named parser in Parsec as this one is all-or-nothing To illustrate the difference the following parser will fail under Parsec given an input of for string foo string for The reason for its failure is that the first branch is partial match and will consume the letters and before failing In Attoparsec the above parser will succeed on that input because the failed first branch will consume nothing",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "string",
          "normalized": "Text-\u003eParser Text",
          "package": "attoparsec",
          "signature": "Text-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: this is very inefficient, use asciiCI instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eSatisfy a literal string, ignoring case.\n\u003c/p\u003e\u003cp\u003eNote: this function is currently quite inefficient. Unicode case\n folding can change the length of a string (\"&#223;\" becomes\n \u003ca\u003ess\u003c/a\u003e), which makes a simple, efficient implementation tricky.  We\n have (for now) chosen simplicity over efficiency.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "stringCI",
          "package": "attoparsec",
          "signature": "Text -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#stringCI",
          "type": "function"
        },
        "index": {
          "description": "Deprecated this is very inefficient use asciiCI instead Satisfy literal string ignoring case Note this function is currently quite inefficient Unicode case folding can change the length of string becomes ss which makes simple efficient implementation tricky We have for now chosen simplicity over efficiency",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "stringCI",
          "normalized": "Text-\u003eParser Text",
          "package": "attoparsec",
          "partial": "CI",
          "signature": "Text-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:stringCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume exactly \u003ccode\u003en\u003c/code\u003e characters of input.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "take",
          "package": "attoparsec",
          "signature": "Int -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#take",
          "type": "function"
        },
        "index": {
          "description": "Consume exactly characters of input",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "take",
          "normalized": "Int-\u003eParser Text",
          "package": "attoparsec",
          "signature": "Int-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume all remaining input and return it as a single string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeLazyText",
          "package": "attoparsec",
          "signature": "Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#takeLazyText",
          "type": "function"
        },
        "index": {
          "description": "Consume all remaining input and return it as single string",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "takeLazyText",
          "package": "attoparsec",
          "partial": "Lazy Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:takeLazyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume all remaining input and return it as a single string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeText",
          "package": "attoparsec",
          "signature": "Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#takeText",
          "type": "function"
        },
        "index": {
          "description": "Consume all remaining input and return it as single string",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "takeText",
          "package": "attoparsec",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:takeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n (i.e. until it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e), and return the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the first character of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeTill",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#takeTill",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns False i.e until it returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns True on the first character of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "takeTill",
          "normalized": "(Char-\u003eBool)-\u003eParser Text",
          "package": "attoparsec",
          "partial": "Till",
          "signature": "(Char-\u003eBool)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:takeTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e on the first character of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003emany\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeWhile",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns False on the first character of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eParser Text",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser requires the predicate to succeed on at least one\n character of input: it will fail if the predicate never returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e or if there is no input left.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeWhile1",
          "package": "attoparsec",
          "signature": "(Char -\u003e Bool) -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#takeWhile1",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser requires the predicate to succeed on at least one character of input it will fail if the predicate never returns True or if there is no input left",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "takeWhile1",
          "normalized": "(Char-\u003eBool)-\u003eParser Text",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Text.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient parser combinators for strings, loosely based on\n the Parsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Types",
          "name": "Types",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient parser combinators for strings loosely based on the Parsec library",
          "hierarchy": "Data Attoparsec Types",
          "module": "Data.Attoparsec.Types",
          "name": "Types",
          "package": "attoparsec",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA common interface for input chunks.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Types",
          "name": "Chunk",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Internal-Types.html#Chunk",
          "type": "class"
        },
        "index": {
          "description": "common interface for input chunks",
          "hierarchy": "Data Attoparsec Types",
          "module": "Data.Attoparsec.Types",
          "name": "Chunk",
          "package": "attoparsec",
          "partial": "Chunk",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#t:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.  This is parameterised over the type \u003ccode\u003et\u003c/code\u003e\n of string that was processed.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, where \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e transforms the\n value in a \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Types",
          "name": "IResult",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Internal-Types.html#IResult",
          "type": "data"
        },
        "index": {
          "description": "The result of parse This is parameterised over the type of string that was processed This type is an instance of Functor where fmap transforms the value in Done result",
          "hierarchy": "Data Attoparsec Types",
          "module": "Data.Attoparsec.Types",
          "name": "IResult",
          "package": "attoparsec",
          "partial": "IResult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#t:IResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe core parser type.  This is parameterised over the type \u003ccode\u003et\u003c/code\u003e of\n string being processed.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of the following classes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, where \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e throws an exception (i.e. fails) with an\n   error message.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, which follow the usual definitions.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e, where \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e fails (with no error message) and\n   \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e executes the right-hand parser if the left-hand one\n   fails.  When the parser on the right executes, the input is reset\n   to the same state as the parser on the left started with. (In\n   other words, Attoparsec is a backtracking parser that supports\n   arbitrary lookahead.)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e, which follows \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Attoparsec.Types",
          "name": "Parser",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Internal-Types.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "The core parser type This is parameterised over the type of string being processed This type is an instance of the following classes Monad where fail throws an exception i.e fails with an error message Functor and Applicative which follow the usual definitions MonadPlus where mzero fails with no error message and mplus executes the right-hand parser if the left-hand one fails When the parser on the right executes the input is reset to the same state as the parser on the left started with In other words Attoparsec is backtracking parser that supports arbitrary lookahead Alternative which follows MonadPlus",
          "hierarchy": "Data Attoparsec Types",
          "module": "Data.Attoparsec.Types",
          "name": "Parser",
          "package": "attoparsec",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap an element to the corresponding character.\n   The first argument is ignored.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Types",
          "name": "chunkElemToChar",
          "package": "attoparsec",
          "signature": "c -\u003e ChunkElem c -\u003e Char",
          "source": "src/Data-Attoparsec-Internal-Types.html#chunkElemToChar",
          "type": "method"
        },
        "index": {
          "description": "Map an element to the corresponding character The first argument is ignored",
          "hierarchy": "Data Attoparsec Types",
          "module": "Data.Attoparsec.Types",
          "name": "chunkElemToChar",
          "normalized": "a-\u003eChunkElem a-\u003eChar",
          "package": "attoparsec",
          "partial": "Elem To Char",
          "signature": "c-\u003eChunkElem c-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#v:chunkElemToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the chunk has the length of at least \u003ccode\u003en\u003c/code\u003e elements.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Types",
          "name": "chunkLengthAtLeast",
          "package": "attoparsec",
          "signature": "c -\u003e Int -\u003e Bool",
          "source": "src/Data-Attoparsec-Internal-Types.html#chunkLengthAtLeast",
          "type": "method"
        },
        "index": {
          "description": "Check if the chunk has the length of at least elements",
          "hierarchy": "Data Attoparsec Types",
          "module": "Data.Attoparsec.Types",
          "name": "chunkLengthAtLeast",
          "normalized": "a-\u003eInt-\u003eBool",
          "package": "attoparsec",
          "partial": "Length At Least",
          "signature": "c-\u003eInt-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#v:chunkLengthAtLeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the chunk is empty.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Types",
          "name": "nullChunk",
          "package": "attoparsec",
          "signature": "c -\u003e Bool",
          "source": "src/Data-Attoparsec-Internal-Types.html#nullChunk",
          "type": "method"
        },
        "index": {
          "description": "Test if the chunk is empty",
          "hierarchy": "Data Attoparsec Types",
          "module": "Data.Attoparsec.Types",
          "name": "nullChunk",
          "normalized": "a-\u003eBool",
          "package": "attoparsec",
          "partial": "Chunk",
          "signature": "c-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#v:nullChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the head element of a non-empty chunk.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Types",
          "name": "unsafeChunkHead",
          "package": "attoparsec",
          "signature": "c -\u003e ChunkElem c",
          "source": "src/Data-Attoparsec-Internal-Types.html#unsafeChunkHead",
          "type": "method"
        },
        "index": {
          "description": "Get the head element of non-empty chunk",
          "hierarchy": "Data Attoparsec Types",
          "module": "Data.Attoparsec.Types",
          "name": "unsafeChunkHead",
          "normalized": "a-\u003eChunkElem a",
          "package": "attoparsec",
          "partial": "Chunk Head",
          "signature": "c-\u003eChunkElem c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#v:unsafeChunkHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the tail of a non-empty chunk.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Types",
          "name": "unsafeChunkTail",
          "package": "attoparsec",
          "signature": "c -\u003e c",
          "source": "src/Data-Attoparsec-Internal-Types.html#unsafeChunkTail",
          "type": "method"
        },
        "index": {
          "description": "Get the tail of non-empty chunk",
          "hierarchy": "Data Attoparsec Types",
          "module": "Data.Attoparsec.Types",
          "name": "unsafeChunkTail",
          "normalized": "a-\u003ea",
          "package": "attoparsec",
          "partial": "Chunk Tail",
          "signature": "c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Types.html#v:unsafeChunkTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA tiny, highly specialized combinator parser for \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n strings.\n\u003c/p\u003e\u003cp\u003eWhile the main Attoparsec module generally performs well, this\n module is particularly fast for simple non-recursive loops that\n should not normally result in failed parses.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: on more complex inputs involving recursion or failure,\n parsers based on this module may be as much as \u003cem\u003eten times slower\u003c/em\u003e\n than regular Attoparsec! You should \u003cem\u003eonly\u003c/em\u003e use this module when you\n have benchmarks that prove that its use speeds your code up.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Zepto",
          "name": "Zepto",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Zepto.html",
          "type": "module"
        },
        "index": {
          "description": "tiny highly specialized combinator parser for ByteString strings While the main Attoparsec module generally performs well this module is particularly fast for simple non-recursive loops that should not normally result in failed parses Warning on more complex inputs involving recursion or failure parsers based on this module may be as much as ten times slower than regular Attoparsec You should only use this module when you have benchmarks that prove that its use speeds your code up",
          "hierarchy": "Data Attoparsec Zepto",
          "module": "Data.Attoparsec.Zepto",
          "name": "Zepto",
          "package": "attoparsec",
          "partial": "Zepto",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Zepto.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple parser.\n\u003c/p\u003e\u003cp\u003eThis monad is strict in its state, and the monadic bind operator\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) evaluates each result to weak head normal form before\n passing it along.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Zepto",
          "name": "Parser",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec-Zepto.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "simple parser This monad is strict in its state and the monadic bind operator evaluates each result to weak head normal form before passing it along",
          "hierarchy": "Data Attoparsec Zepto",
          "module": "Data.Attoparsec.Zepto",
          "name": "Parser",
          "package": "attoparsec",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Zepto.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether the end of the input has been reached.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Zepto",
          "name": "atEnd",
          "package": "attoparsec",
          "signature": "Parser Bool",
          "source": "src/Data-Attoparsec-Zepto.html#atEnd",
          "type": "function"
        },
        "index": {
          "description": "Indicate whether the end of the input has been reached",
          "hierarchy": "Data Attoparsec Zepto",
          "module": "Data.Attoparsec.Zepto",
          "name": "atEnd",
          "package": "attoparsec",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Zepto.html#v:atEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Zepto",
          "name": "parse",
          "package": "attoparsec",
          "signature": "Parser a -\u003e ByteString -\u003e Either String a",
          "source": "src/Data-Attoparsec-Zepto.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run parser",
          "hierarchy": "Data Attoparsec Zepto",
          "module": "Data.Attoparsec.Zepto",
          "name": "parse",
          "normalized": "Parser a-\u003eByteString-\u003eEither String a",
          "package": "attoparsec",
          "signature": "Parser a-\u003eByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Zepto.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a string exactly.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Zepto",
          "name": "string",
          "package": "attoparsec",
          "signature": "ByteString -\u003e Parser ()",
          "source": "src/Data-Attoparsec-Zepto.html#string",
          "type": "function"
        },
        "index": {
          "description": "Match string exactly",
          "hierarchy": "Data Attoparsec Zepto",
          "module": "Data.Attoparsec.Zepto",
          "name": "string",
          "normalized": "ByteString-\u003eParser()",
          "package": "attoparsec",
          "signature": "ByteString-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Zepto.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume \u003ccode\u003en\u003c/code\u003e bytes of input.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Zepto",
          "name": "take",
          "package": "attoparsec",
          "signature": "Int -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-Zepto.html#take",
          "type": "function"
        },
        "index": {
          "description": "Consume bytes of input",
          "hierarchy": "Data Attoparsec Zepto",
          "module": "Data.Attoparsec.Zepto",
          "name": "take",
          "normalized": "Int-\u003eParser ByteString",
          "package": "attoparsec",
          "signature": "Int-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Zepto.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input while the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Zepto",
          "name": "takeWhile",
          "package": "attoparsec",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
          "source": "src/Data-Attoparsec-Zepto.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Consume input while the predicate returns True",
          "hierarchy": "Data Attoparsec Zepto",
          "module": "Data.Attoparsec.Zepto",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
          "package": "attoparsec",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec-Zepto.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient combinator parsing for \u003ccode\u003eByteString\u003c/code\u003e strings,\n loosely based on the Parsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec",
          "name": "Attoparsec",
          "package": "attoparsec",
          "source": "src/Data-Attoparsec.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient combinator parsing for ByteString strings loosely based on the Parsec library",
          "hierarchy": "Data Attoparsec",
          "module": "Data.Attoparsec",
          "name": "Attoparsec",
          "package": "attoparsec",
          "partial": "Attoparsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec/docs/Data-Attoparsec.html#"
      }
    }
  ]
]