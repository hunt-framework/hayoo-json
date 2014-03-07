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
        "word": "parsergen"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing and unparsing for commonly used datatypes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ParserGen.Common",
          "name": "Common",
          "package": "parsergen",
          "source": "src/ParserGen-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing and unparsing for commonly used datatypes",
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "Common",
          "package": "parsergen",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan keep up to 12 characters from 0..9, A..Z\n\u003c/p\u003e",
          "module": "ParserGen.Common",
          "name": "AlphaNum",
          "package": "parsergen",
          "source": "src/ParserGen-Common.html#AlphaNum",
          "type": "newtype"
        },
        "index": {
          "description": "Can keep up to characters from A..Z",
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "AlphaNum",
          "package": "parsergen",
          "partial": "Alpha Num",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#t:AlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Common",
          "name": "AlphaNum",
          "package": "parsergen",
          "signature": "AlphaNum",
          "source": "src/ParserGen-Common.html#AlphaNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "AlphaNum",
          "package": "parsergen",
          "partial": "Alpha Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:AlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Common",
          "name": "putAlphaNum",
          "package": "parsergen",
          "signature": "AlphaNum -\u003e ByteString",
          "source": "src/ParserGen-Common.html#putAlphaNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "putAlphaNum",
          "normalized": "AlphaNum-\u003eByteString",
          "package": "parsergen",
          "partial": "Alpha Num",
          "signature": "AlphaNum-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:putAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Common",
          "name": "putDecimalX",
          "package": "parsergen",
          "signature": "Int -\u003e Int -\u003e ByteString",
          "source": "src/ParserGen-Common.html#putDecimalX",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "putDecimalX",
          "normalized": "Int-\u003eInt-\u003eByteString",
          "package": "parsergen",
          "partial": "Decimal",
          "signature": "Int-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:putDecimalX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Common",
          "name": "putDecimalXS",
          "package": "parsergen",
          "signature": "Int -\u003e Int -\u003e ByteString",
          "source": "src/ParserGen-Common.html#putDecimalXS",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "putDecimalXS",
          "normalized": "Int-\u003eInt-\u003eByteString",
          "package": "parsergen",
          "partial": "Decimal XS",
          "signature": "Int-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:putDecimalXS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Common",
          "name": "unAlphaNum",
          "package": "parsergen",
          "signature": "Int64",
          "source": "src/ParserGen-Common.html#AlphaNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "unAlphaNum",
          "package": "parsergen",
          "partial": "Alpha Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:unAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Common",
          "name": "unsafeAlphaNum",
          "package": "parsergen",
          "signature": "Int -\u003e Parser AlphaNum",
          "source": "src/ParserGen-Common.html#unsafeAlphaNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "unsafeAlphaNum",
          "normalized": "Int-\u003eParser AlphaNum",
          "package": "parsergen",
          "partial": "Alpha Num",
          "signature": "Int-\u003eParser AlphaNum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:unsafeAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Common",
          "name": "unsafeDecimalX",
          "package": "parsergen",
          "signature": "Int -\u003e Parser Int",
          "source": "src/ParserGen-Common.html#unsafeDecimalX",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "unsafeDecimalX",
          "normalized": "Int-\u003eParser Int",
          "package": "parsergen",
          "partial": "Decimal",
          "signature": "Int-\u003eParser Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:unsafeDecimalX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Common",
          "name": "unsafeDecimalXS",
          "package": "parsergen",
          "signature": "Int -\u003e Parser Int",
          "source": "src/ParserGen-Common.html#unsafeDecimalXS",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "unsafeDecimalXS",
          "normalized": "Int-\u003eParser Int",
          "package": "parsergen",
          "partial": "Decimal XS",
          "signature": "Int-\u003eParser Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:unsafeDecimalXS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Common",
          "name": "unsafeDecimalXSTH",
          "package": "parsergen",
          "signature": "Int -\u003e Q Exp",
          "source": "src/ParserGen-Common.html#unsafeDecimalXSTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "unsafeDecimalXSTH",
          "normalized": "Int-\u003eQ Exp",
          "package": "parsergen",
          "partial": "Decimal XSTH",
          "signature": "Int-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:unsafeDecimalXSTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a template-haskell based version of \u003ccode\u003e\u003ca\u003eunsafeDecimalX\u003c/a\u003e\u003c/code\u003e which\n generates a fast, unrolled loop\n\u003c/p\u003e",
          "module": "ParserGen.Common",
          "name": "unsafeDecimalXTH",
          "package": "parsergen",
          "signature": "Int -\u003e Q Exp",
          "source": "src/ParserGen-Common.html#unsafeDecimalXTH",
          "type": "function"
        },
        "index": {
          "description": "This is template-haskell based version of unsafeDecimalX which generates fast unrolled loop",
          "hierarchy": "ParserGen Common",
          "module": "ParserGen.Common",
          "name": "unsafeDecimalXTH",
          "normalized": "Int-\u003eQ Exp",
          "package": "parsergen",
          "partial": "Decimal XTH",
          "signature": "Int-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Common.html#v:unsafeDecimalXTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Gen",
          "name": "Gen",
          "package": "parsergen",
          "source": "src/ParserGen-Gen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ParserGen Gen",
          "module": "ParserGen.Gen",
          "name": "Gen",
          "package": "parsergen",
          "partial": "Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Gen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Gen",
          "name": "genDataTypeFromFile",
          "package": "parsergen",
          "signature": "FilePath -\u003e Q [Dec]",
          "source": "src/ParserGen-Gen.html#genDataTypeFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Gen",
          "module": "ParserGen.Gen",
          "name": "genDataTypeFromFile",
          "normalized": "FilePath-\u003eQ[Dec]",
          "package": "parsergen",
          "partial": "Data Type From File",
          "signature": "FilePath-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Gen.html#v:genDataTypeFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Gen",
          "name": "genDataTypeFromFile'",
          "package": "parsergen",
          "signature": "FilePath -\u003e Q [Dec]",
          "source": "src/ParserGen-Gen.html#genDataTypeFromFile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Gen",
          "module": "ParserGen.Gen",
          "name": "genDataTypeFromFile'",
          "normalized": "FilePath-\u003eQ[Dec]",
          "package": "parsergen",
          "partial": "Data Type From File'",
          "signature": "FilePath-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Gen.html#v:genDataTypeFromFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Gen",
          "name": "genParserFromFile",
          "package": "parsergen",
          "signature": "FilePath -\u003e Q [Dec]",
          "source": "src/ParserGen-Gen.html#genParserFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Gen",
          "module": "ParserGen.Gen",
          "name": "genParserFromFile",
          "normalized": "FilePath-\u003eQ[Dec]",
          "package": "parsergen",
          "partial": "Parser From File",
          "signature": "FilePath-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Gen.html#v:genParserFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Gen",
          "name": "genParserFromFile'",
          "package": "parsergen",
          "signature": "FilePath -\u003e Q [Dec]",
          "source": "src/ParserGen-Gen.html#genParserFromFile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Gen",
          "module": "ParserGen.Gen",
          "name": "genParserFromFile'",
          "normalized": "FilePath-\u003eQ[Dec]",
          "package": "parsergen",
          "partial": "Parser From File'",
          "signature": "FilePath-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Gen.html#v:genParserFromFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Gen",
          "name": "genWidthFromFile",
          "package": "parsergen",
          "signature": "FilePath -\u003e Q [Dec]",
          "source": "src/ParserGen-Gen.html#genWidthFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Gen",
          "module": "ParserGen.Gen",
          "name": "genWidthFromFile",
          "normalized": "FilePath-\u003eQ[Dec]",
          "package": "parsergen",
          "partial": "Width From File",
          "signature": "FilePath-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Gen.html#v:genWidthFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Gen",
          "name": "genWidthFromFile'",
          "package": "parsergen",
          "signature": "FilePath -\u003e Q [Dec]",
          "source": "src/ParserGen-Gen.html#genWidthFromFile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Gen",
          "module": "ParserGen.Gen",
          "name": "genWidthFromFile'",
          "normalized": "FilePath-\u003eQ[Dec]",
          "package": "parsergen",
          "partial": "Width From File'",
          "signature": "FilePath-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Gen.html#v:genWidthFromFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBased on Data.Attoparsec.Zepto by  Bryan O'Sullivan 2011\n\u003c/p\u003e\u003cp\u003eA tiny, highly specialized combinator parser for \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n strings. Designed to split bytestrings into fields with fixed widths.\n\u003c/p\u003e\u003cp\u003eunsafe versions of the functions do not perform checks that there\n is enough data left in the bytestring\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ParserGen.Parser",
          "name": "Parser",
          "package": "parsergen",
          "source": "src/ParserGen-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Based on Data.Attoparsec.Zepto by Bryan Sullivan tiny highly specialized combinator parser for ByteString strings Designed to split bytestrings into fields with fixed widths unsafe versions of the functions do not perform checks that there is enough data left in the bytestring",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "Parser",
          "package": "parsergen",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple parser.\n\u003c/p\u003e\u003cp\u003eThis monad is strict in its state, and the monadic bind operator\n (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) evaluates each result to weak head normal form before\n passing it along.\n\u003c/p\u003e",
          "module": "ParserGen.Parser",
          "name": "Parser",
          "package": "parsergen",
          "source": "src/ParserGen-Parser.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "simple parser This monad is strict in its state and the monadic bind operator evaluates each result to weak head normal form before passing it along",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "Parser",
          "package": "parsergen",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Parser",
          "name": "anyChar",
          "package": "parsergen",
          "signature": "Parser Char",
          "source": "src/ParserGen-Parser.html#anyChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "anyChar",
          "package": "parsergen",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether the end of the input has been reached.\n\u003c/p\u003e",
          "module": "ParserGen.Parser",
          "name": "atEnd",
          "package": "parsergen",
          "signature": "Parser Bool",
          "source": "src/ParserGen-Parser.html#atEnd",
          "type": "function"
        },
        "index": {
          "description": "Indicate whether the end of the input has been reached",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "atEnd",
          "package": "parsergen",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:atEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Parser",
          "name": "ensureBytesLeft",
          "package": "parsergen",
          "signature": "Int -\u003e Parser ()",
          "source": "src/ParserGen-Parser.html#ensureBytesLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "ensureBytesLeft",
          "normalized": "Int-\u003eParser()",
          "package": "parsergen",
          "partial": "Bytes Left",
          "signature": "Int-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:ensureBytesLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser.\n\u003c/p\u003e",
          "module": "ParserGen.Parser",
          "name": "parse",
          "package": "parsergen",
          "signature": "Parser a -\u003e ByteString -\u003e Either String a",
          "source": "src/ParserGen-Parser.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run parser",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "parse",
          "normalized": "Parser a-\u003eByteString-\u003eEither String a",
          "package": "parsergen",
          "signature": "Parser a-\u003eByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip \u003ccode\u003en\u003c/code\u003e bytes of input\n\u003c/p\u003e",
          "module": "ParserGen.Parser",
          "name": "skip",
          "package": "parsergen",
          "signature": "Int -\u003e Parser ()",
          "source": "src/ParserGen-Parser.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Skip bytes of input",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "skip",
          "normalized": "Int-\u003eParser()",
          "package": "parsergen",
          "signature": "Int-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a string exactly.\n\u003c/p\u003e",
          "module": "ParserGen.Parser",
          "name": "string",
          "package": "parsergen",
          "signature": "ByteString -\u003e Parser ()",
          "source": "src/ParserGen-Parser.html#string",
          "type": "function"
        },
        "index": {
          "description": "Match string exactly",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "string",
          "normalized": "ByteString-\u003eParser()",
          "package": "parsergen",
          "signature": "ByteString-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume \u003ccode\u003en\u003c/code\u003e bytes of input.\n\u003c/p\u003e",
          "module": "ParserGen.Parser",
          "name": "take",
          "package": "parsergen",
          "signature": "Int -\u003e Parser ByteString",
          "source": "src/ParserGen-Parser.html#take",
          "type": "function"
        },
        "index": {
          "description": "Consume bytes of input",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "take",
          "normalized": "Int-\u003eParser ByteString",
          "package": "parsergen",
          "signature": "Int-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input while the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ParserGen.Parser",
          "name": "takeWhile",
          "package": "parsergen",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
          "source": "src/ParserGen-Parser.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Consume input while the predicate returns True",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
          "package": "parsergen",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip \u003ccode\u003en\u003c/code\u003e bytes of input without checking if it's available\n\u003c/p\u003e",
          "module": "ParserGen.Parser",
          "name": "unsafeSkip",
          "package": "parsergen",
          "signature": "Int -\u003e Parser ()",
          "source": "src/ParserGen-Parser.html#unsafeSkip",
          "type": "function"
        },
        "index": {
          "description": "Skip bytes of input without checking if it available",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "unsafeSkip",
          "normalized": "Int-\u003eParser()",
          "package": "parsergen",
          "partial": "Skip",
          "signature": "Int-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:unsafeSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume \u003ccode\u003en\u003c/code\u003e bytes of input without checking if it's available\n\u003c/p\u003e",
          "module": "ParserGen.Parser",
          "name": "unsafeTake",
          "package": "parsergen",
          "signature": "Int -\u003e Parser ByteString",
          "source": "src/ParserGen-Parser.html#unsafeTake",
          "type": "function"
        },
        "index": {
          "description": "Consume bytes of input without checking if it available",
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "unsafeTake",
          "normalized": "Int-\u003eParser ByteString",
          "package": "parsergen",
          "partial": "Take",
          "signature": "Int-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:unsafeTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Parser",
          "name": "word8",
          "package": "parsergen",
          "signature": "Word8 -\u003e Parser ()",
          "source": "src/ParserGen-Parser.html#word8",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Parser",
          "module": "ParserGen.Parser",
          "name": "word8",
          "normalized": "Word-\u003eParser()",
          "package": "parsergen",
          "signature": "Word-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Parser.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Repack",
          "name": "Repack",
          "package": "parsergen",
          "source": "src/ParserGen-Repack.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ParserGen Repack",
          "module": "ParserGen.Repack",
          "name": "Repack",
          "package": "parsergen",
          "partial": "Repack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Repack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen.Repack",
          "name": "genRepackFromFile",
          "package": "parsergen",
          "signature": "FilePath -\u003e Q [Dec]",
          "source": "src/ParserGen-Repack.html#genRepackFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "ParserGen Repack",
          "module": "ParserGen.Repack",
          "name": "genRepackFromFile",
          "normalized": "FilePath-\u003eQ[Dec]",
          "package": "parsergen",
          "partial": "Repack From File",
          "signature": "FilePath-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen-Repack.html#v:genRepackFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ParserGen",
          "name": "ParserGen",
          "package": "parsergen",
          "source": "src/ParserGen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ParserGen",
          "module": "ParserGen",
          "name": "ParserGen",
          "package": "parsergen",
          "partial": "Parser Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsergen/docs/ParserGen.html#"
      }
    }
  ]
]