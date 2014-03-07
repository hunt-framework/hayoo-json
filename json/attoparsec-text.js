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
        "word": "attoparsec-text"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast set membership tests for \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e values.  The set\n representation is unboxed for efficiency.  We test for\n membership using a binary search.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "FastSet",
          "package": "attoparsec-text",
          "source": "src/Data-Attoparsec-Text-FastSet.html",
          "type": "module"
        },
        "index": {
          "description": "Fast set membership tests for Char values The set representation is unboxed for efficiency We test for membership using binary search",
          "hierarchy": "Data Attoparsec Text FastSet",
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "FastSet",
          "package": "attoparsec-text",
          "partial": "Fast Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-FastSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "FastSet",
          "package": "attoparsec-text",
          "source": "src/Data-Attoparsec-Text-FastSet.html#FastSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text FastSet",
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "FastSet",
          "package": "attoparsec-text",
          "partial": "Fast Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-FastSet.html#t:FastSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "charClass",
          "package": "attoparsec-text",
          "signature": "String -\u003e FastSet",
          "source": "src/Data-Attoparsec-Text-FastSet.html#charClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text FastSet",
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "charClass",
          "normalized": "String-\u003eFastSet",
          "package": "attoparsec-text",
          "partial": "Class",
          "signature": "String-\u003eFastSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-FastSet.html#v:charClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "fromList",
          "package": "attoparsec-text",
          "signature": "[Char] -\u003e FastSet",
          "source": "src/Data-Attoparsec-Text-FastSet.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text FastSet",
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "fromList",
          "normalized": "[Char]-\u003eFastSet",
          "package": "attoparsec-text",
          "partial": "List",
          "signature": "[Char]-\u003eFastSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-FastSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the set for membership.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "member",
          "package": "attoparsec-text",
          "signature": "Char -\u003e FastSet -\u003e Bool",
          "source": "src/Data-Attoparsec-Text-FastSet.html#member",
          "type": "function"
        },
        "index": {
          "description": "Check the set for membership",
          "hierarchy": "Data Attoparsec Text FastSet",
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "member",
          "normalized": "Char-\u003eFastSet-\u003eBool",
          "package": "attoparsec-text",
          "signature": "Char-\u003eFastSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-FastSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a set.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "set",
          "package": "attoparsec-text",
          "signature": "Text -\u003e FastSet",
          "source": "src/Data-Attoparsec-Text-FastSet.html#set",
          "type": "function"
        },
        "index": {
          "description": "Create set",
          "hierarchy": "Data Attoparsec Text FastSet",
          "module": "Data.Attoparsec.Text.FastSet",
          "name": "set",
          "normalized": "Text-\u003eFastSet",
          "package": "attoparsec-text",
          "signature": "Text-\u003eFastSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-FastSet.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient combinator parsing for lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n strings, loosely based on the Parsec library.\n\u003c/p\u003e\u003cp\u003eThis is essentially the same code as in the \u003ccode\u003eData.Attoparsec\u003c/code\u003e\n module, only with a \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e function that can consume a lazy\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e incrementally, and a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e type that does not allow\n more input to be fed in.  Think of this as suitable for use with a\n lazily read file, e.g. via \u003ccode\u003eL.readFile\u003c/code\u003e or \u003ccode\u003eL.hGetContents\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBehind the scenes, strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values are still used\n internally to store parser input and manipulate it efficiently.\n High-performance parsers such as \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e still expect strict\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e parameters.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Lazy",
          "package": "attoparsec-text",
          "source": "src/Data-Attoparsec-Text-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient combinator parsing for lazy Text strings loosely based on the Parsec library This is essentially the same code as in the Data.Attoparsec module only with parse function that can consume lazy Text incrementally and Result type that does not allow more input to be fed in Think of this as suitable for use with lazily read file e.g via L.readFile or L.hGetContents Behind the scenes strict Text values are still used internally to store parser input and manipulate it efficiently High-performance parsers such as string still expect strict Text parameters",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Lazy",
          "package": "attoparsec-text",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Result",
          "package": "attoparsec-text",
          "source": "src/Data-Attoparsec-Text-Lazy.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of parse",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Result",
          "package": "attoparsec-text",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-Lazy.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse succeeded.  The \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the\n input that had not yet been consumed (if any) when\n the parse succeeded.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Done",
          "package": "attoparsec-text",
          "signature": "Done Text r",
          "source": "src/Data-Attoparsec-Text-Lazy.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse succeeded The Text is the input that had not yet been consumed if any when the parse succeeded",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Done",
          "package": "attoparsec-text",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-Lazy.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse failed.  The \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the input\n that had not yet been consumed when the failure\n occurred.  The \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e is a list of contexts\n in which the error occurred.  The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the\n message describing the error, if any.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Fail",
          "package": "attoparsec-text",
          "signature": "Fail Text [String] String",
          "source": "src/Data-Attoparsec-Text-Lazy.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse failed The Text is the input that had not yet been consumed when the failure occurred The String is list of contexts in which the error occurred The String is the message describing the error if any",
          "hierarchy": "Data Attoparsec Text Lazy",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "Fail",
          "normalized": "Fail Text[String]String",
          "package": "attoparsec-text",
          "partial": "Fail",
          "signature": "Fail Text[String]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-Lazy.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "eitherResult",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Result",
          "signature": "Result r-\u003eEither String r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-Lazy.html#v:eitherResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "maybeResult",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Result",
          "signature": "Result r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-Lazy.html#v:maybeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and return its result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "parse",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "signature": "Parser a-\u003eText-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-Lazy.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and print its result to standard output.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Lazy",
          "name": "parseTest",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Test",
          "signature": "Parser a-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text-Lazy.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient combinator parsing for \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e strings,\n loosely based on the Parsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "Text",
          "package": "attoparsec-text",
          "source": "src/Data-Attoparsec-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient combinator parsing for Text strings loosely based on the Parsec library",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Text",
          "package": "attoparsec-text",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e type is a monad.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "Parser",
          "package": "attoparsec-text",
          "source": "src/Data-Attoparsec-Text-Internal.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "The Parser type is monad",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Parser",
          "package": "attoparsec-text",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "Result",
          "package": "attoparsec-text",
          "source": "src/Data-Attoparsec-Text-Internal.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of parse",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Result",
          "package": "attoparsec-text",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003eApplicative\u003c/code\u003e's \u003ccode\u003e\u003c*\u003c/code\u003e but specialized to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n on the second argument.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "(\u003c*.)",
          "package": "attoparsec-text",
          "signature": "f a -\u003e f Text -\u003e f a",
          "source": "src/Data-Attoparsec-Text.html#%3C%2A.",
          "type": "function"
        },
        "index": {
          "description": "Same as Applicative but specialized to Text on the second argument",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "(\u003c*.) \u003c*.",
          "normalized": "a b-\u003ea Text-\u003ea b",
          "package": "attoparsec-text",
          "signature": "f a-\u003ef Text-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:-60--42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text",
          "name": "(\u003c?\u003e)",
          "package": "attoparsec-text",
          "signature": "Parser a-\u003e String-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "Parser a-\u003eString-\u003eParser a",
          "package": "attoparsec-text",
          "signature": "Parser a-\u003eString-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003eApplicative\u003c/code\u003e's \u003ccode\u003e*\u003e\u003c/code\u003e but specialized to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n on the first argument.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "(.*\u003e)",
          "package": "attoparsec-text",
          "signature": "f Text -\u003e f a -\u003e f a",
          "source": "src/Data-Attoparsec-Text.html#.%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Same as Applicative but specialized to Text on the first argument",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "(.*\u003e) .*\u003e",
          "normalized": "a Text-\u003ea b-\u003ea b",
          "package": "attoparsec-text",
          "signature": "f Text-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:.-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse succeeded.  The \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the\n input that had not yet been consumed (if any) when\n the parse succeeded.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "Done",
          "package": "attoparsec-text",
          "signature": "Done Text r",
          "source": "src/Data-Attoparsec-Text-Internal.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse succeeded The Text is the input that had not yet been consumed if any when the parse succeeded",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Done",
          "package": "attoparsec-text",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse failed.  The \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is the input\n that had not yet been consumed when the failure\n occurred.  The \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e is a list of contexts\n in which the error occurred.  The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the\n message describing the error, if any.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "Fail",
          "package": "attoparsec-text",
          "signature": "Fail Text [String] String",
          "source": "src/Data-Attoparsec-Text-Internal.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse failed The Text is the input that had not yet been consumed when the failure occurred The String is list of contexts in which the error occurred The String is the message describing the error if any",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Fail",
          "normalized": "Fail Text[String]String",
          "package": "attoparsec-text",
          "partial": "Fail",
          "signature": "Fail Text[String]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply this continuation with more input so that\n the parser can resume.  To indicate that no more\n input is available, use an \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "Partial",
          "package": "attoparsec-text",
          "signature": "Partial (Text -\u003e Result r)",
          "source": "src/Data-Attoparsec-Text-Internal.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Supply this continuation with more input so that the parser can resume To indicate that no more input is available use an empty string",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "Partial",
          "normalized": "Partial(Text-\u003eResult a)",
          "package": "attoparsec-text",
          "partial": "Partial",
          "signature": "Partial(Text-\u003eResult r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "anyChar",
          "package": "attoparsec-text",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#anyChar",
          "type": "function"
        },
        "index": {
          "description": "Match any character",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "anyChar",
          "package": "attoparsec-text",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an indication of whether the end of input has been\n reached.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "atEnd",
          "package": "attoparsec-text",
          "signature": "Parser Bool",
          "source": "src/Data-Attoparsec-Text-Internal.html#atEnd",
          "type": "function"
        },
        "index": {
          "description": "Return an indication of whether the end of input has been reached",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "atEnd",
          "package": "attoparsec-text",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:atEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a specific character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "char",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode an unsigned decimal number.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "decimal",
          "package": "attoparsec-text",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-Text-Internal.html#decimal",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode an unsigned decimal number",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "decimal",
          "package": "attoparsec-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single digit.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "digit",
          "package": "attoparsec-text",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parse single digit",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "digit",
          "package": "attoparsec-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a rational number.\n\u003c/p\u003e\u003cp\u003eThe syntax accepted by this parser is the same as for \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This function is almost ten times faster than \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e,\n but is slightly less accurate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type supports about 16 decimal places of accuracy.\n For 94.2% of numbers, this function and \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e give identical\n results, but for the remaining 5.8%, this function loses precision\n around the 15th decimal place.  For 0.001% of numbers, this\n function will lose precision at the 13th or 14th decimal place.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "double",
          "package": "attoparsec-text",
          "signature": "Parser Double",
          "source": "src/Data-Attoparsec-Text-Internal.html#double",
          "type": "function"
        },
        "index": {
          "description": "Parse rational number The syntax accepted by this parser is the same as for rational Note This function is almost ten times faster than rational but is slightly less accurate The Double type supports about decimal places of accuracy For of numbers this function and rational give identical results but for the remaining this function loses precision around the th decimal place For of numbers this function will lose precision at the th or th decimal place",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "double",
          "package": "attoparsec-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value. A \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result\n is treated as failure.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "eitherResult",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Result",
          "signature": "Result r-\u003eEither String r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:eitherResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch only if all input has been consumed.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "endOfInput",
          "package": "attoparsec-text",
          "signature": "Parser ()",
          "source": "src/Data-Attoparsec-Text-Internal.html#endOfInput",
          "type": "function"
        },
        "index": {
          "description": "Match only if all input has been consumed",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "endOfInput",
          "normalized": "Parser()",
          "package": "attoparsec-text",
          "partial": "Of Input",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:endOfInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either a single newline character \u003ccode\u003e'\\n'\u003c/code\u003e, or a carriage\n return followed by a newline character \u003ccode\u003e\"\\r\\n\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "endOfLine",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Of Line",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:endOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a parser has returned a \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result, supply it with more\n input.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "feed",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "signature": "Result r-\u003eText-\u003eResult r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode an unsigned hexadecimal number.  The hex digits\n \u003ccode\u003e'a'\u003c/code\u003e through \u003ccode\u003e'f'\u003c/code\u003e may be upper or lower case.\n\u003c/p\u003e\u003cp\u003eThis parser does not accept a leading \u003ccode\u003e\"0x\"\u003c/code\u003e string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "hexadecimal",
          "package": "attoparsec-text",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-Text-Internal.html#hexadecimal",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode an unsigned hexadecimal number The hex digits through may be upper or lower case This parser does not accept leading string",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "hexadecimal",
          "package": "attoparsec-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:hexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character in a set.\n\u003c/p\u003e\u003cpre\u003evowel = inClass \"aeiou\"\n\u003c/pre\u003e\u003cp\u003eRange notation is supported.\n\u003c/p\u003e\u003cpre\u003ehalfAlphabet = inClass \"a-nA-N\"\n\u003c/pre\u003e\u003cp\u003eTo add a literal \u003ccode\u003e'-'\u003c/code\u003e to a set, place it at the beginning or end\n of the string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "inClass",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:inClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single letter.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "letter",
          "package": "attoparsec-text",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#letter",
          "type": "function"
        },
        "index": {
          "description": "Parse single letter",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "letter",
          "package": "attoparsec-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value. A \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result\n is treated as failure.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "maybeResult",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Result",
          "signature": "Result r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:maybeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character except the given one.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "notChar",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Char",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:notChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character not in a set.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "notInClass",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "In Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:notInClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "parse",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "signature": "Parser a-\u003eText-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser that cannot be resupplied via a \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "parseOnly",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Only",
          "signature": "Parser a-\u003eText-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:parseOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and print its result to standard output.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "parseTest",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Test",
          "signature": "Parser a-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser with an initial input string, and a monadic action\n that can supply more input if needed.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "parseWith",
          "package": "attoparsec-text",
          "signature": "m Text-\u003e Parser a-\u003e Text-\u003e m (Result a)",
          "type": "function"
        },
        "index": {
          "description": "Run parser with an initial input string and monadic action that can supply more input if needed",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "parseWith",
          "normalized": "a Text-\u003eParser b-\u003eText-\u003ea(Result b)",
          "package": "attoparsec-text",
          "partial": "With",
          "signature": "m Text-\u003eParser a-\u003eText-\u003em(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:parseWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a rational number.\n\u003c/p\u003e\u003cp\u003eThis parser accepts an optional leading sign character, followed by\n at least one decimal digit.  The syntax similar to that accepted by\n the \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function, with the exception that a trailing \u003ccode\u003e'.'\u003c/code\u003e or\n \u003ccode\u003e'e'\u003c/code\u003e \u003cem\u003enot\u003c/em\u003e followed by a number is not consumed.\n\u003c/p\u003e\u003cp\u003eExamples with behaviour identical to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e, if you feed an empty\n continuation to the first result:\n\u003c/p\u003e\u003cpre\u003erational \"3\"     == Done 3.0 \"\"\nrational \"3.1\"   == Done 3.1 \"\"\nrational \"3e4\"   == Done 30000.0 \"\"\nrational \"3.1e4\" == Done 31000.0 \"\"\n\u003c/pre\u003e\u003cp\u003eExamples with behaviour identical to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003erational \".3\"    == Fail \"input does not start with a digit\"\nrational \"e3\"    == Fail \"input does not start with a digit\"\n\u003c/pre\u003e\u003cp\u003eExamples of differences from \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003erational \"3.foo\" == Done 3.0 \".foo\"\nrational \"3e\"    == Done 3.0 \"e\"\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "rational",
          "package": "attoparsec-text",
          "signature": "Parser a",
          "source": "src/Data-Attoparsec-Text-Internal.html#rational",
          "type": "function"
        },
        "index": {
          "description": "Parse rational number This parser accepts an optional leading sign character followed by at least one decimal digit The syntax similar to that accepted by the read function with the exception that trailing or not followed by number is not consumed Examples with behaviour identical to read if you feed an empty continuation to the first result rational Done rational Done rational e4 Done rational e4 Done Examples with behaviour identical to read rational Fail input does not start with digit rational e3 Fail input does not start with digit Examples of differences from read rational foo Done foo rational Done",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "rational",
          "package": "attoparsec-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy p\u003c/code\u003e succeeds for any character for which\n the predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the character that\n is actually parsed.\n\u003c/p\u003e\u003cpre\u003eimport Data.Char (isDigit)\ndigit = satisfy isDigit\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "satisfy",
          "package": "attoparsec-text",
          "signature": "(Char -\u003e Bool) -\u003e Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfy succeeds for any character for which the predicate returns True Returns the character that is actually parsed import Data.Char isDigit digit satisfy isDigit",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eParser Char",
          "package": "attoparsec-text",
          "signature": "(Char-\u003eBool)-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfyWith f p\u003c/code\u003e transforms a character, and\n succeeds if the predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the\n transformed value. The parser returns the transformed\n character that was parsed.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "satisfyWith",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "With",
          "signature": "(Char-\u003ea)-\u003e(a-\u003eBool)-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:satisfyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stateful scanner.  The predicate consumes and transforms a\n state argument, and each transformed state is passed to successive\n invocations of the predicate on each character of the input until one\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or the input ends.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on the first character of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "scan",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "signature": "s-\u003e(s-\u003eChar-\u003eMaybe s)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a number with an optional leading \u003ccode\u003e'+'\u003c/code\u003e or \u003ccode\u003e'-'\u003c/code\u003e sign\n character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "signed",
          "package": "attoparsec-text",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Data-Attoparsec-Text-Internal.html#signed",
          "type": "function"
        },
        "index": {
          "description": "Parse number with an optional leading or sign character",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "signed",
          "normalized": "Parser a-\u003eParser a",
          "package": "attoparsec-text",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eskip p\u003c/code\u003e succeeds for any character for which the\n predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eimport Data.Char (isDigit)\ndigit = satisfy isDigit\n\u003c/pre\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "skip",
          "package": "attoparsec-text",
          "signature": "(Char -\u003e Bool) -\u003e Parser ()",
          "source": "src/Data-Attoparsec-Text-Internal.html#skip",
          "type": "function"
        },
        "index": {
          "description": "The parser skip succeeds for any character for which the predicate returns True import Data.Char isDigit digit satisfy isDigit",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "skip",
          "normalized": "(Char-\u003eBool)-\u003eParser()",
          "package": "attoparsec-text",
          "signature": "(Char-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip over white space.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "skipSpace",
          "package": "attoparsec-text",
          "signature": "Parser ()",
          "source": "src/Data-Attoparsec-Text-Internal.html#skipSpace",
          "type": "function"
        },
        "index": {
          "description": "Skip over white space",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "skipSpace",
          "normalized": "Parser()",
          "package": "attoparsec-text",
          "partial": "Space",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:skipSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip past input for as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "skipWhile",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:skipWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a space character.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "space",
          "package": "attoparsec-text",
          "signature": "Parser Char",
          "source": "src/Data-Attoparsec-Text-Internal.html#space",
          "type": "function"
        },
        "index": {
          "description": "Parse space character",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "space",
          "package": "attoparsec-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of characters that identically\n match \u003ccode\u003es\u003c/code\u003e. Returns the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).  This parser\n consumes no input if it fails (even if a partial match).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: The behaviour of this parser is different to that of the\n similarly-named parser in Parsec, as this one is all-or-nothing.\n To illustrate the difference, the following parser will fail under\n Parsec given an input of \u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003estring \"foo\" \u003c|\u003e string \"for\"\n\u003c/pre\u003e\u003cp\u003eThe reason for its failure is that that the first branch is a\n partial match, and will consume the letters \u003ccode\u003e'f'\u003c/code\u003e and\n \u003ccode\u003e'o'\u003c/code\u003e before failing.  In Attoparsec, both the original on\n bytestrings and this one on texts, the above parser will\n \u003cem\u003esucceed\u003c/em\u003e on that input, because the failed first branch will\n consume nothing.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "string",
          "package": "attoparsec-text",
          "signature": "Text -\u003e Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#string",
          "type": "function"
        },
        "index": {
          "description": "string parses sequence of characters that identically match Returns the parsed string i.e This parser consumes no input if it fails even if partial match Note The behaviour of this parser is different to that of the similarly-named parser in Parsec as this one is all-or-nothing To illustrate the difference the following parser will fail under Parsec given an input of for string foo string for The reason for its failure is that that the first branch is partial match and will consume the letters and before failing In Attoparsec both the original on bytestrings and this one on texts the above parser will succeed on that input because the failed first branch will consume nothing",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "string",
          "normalized": "Text-\u003eParser Text",
          "package": "attoparsec-text",
          "signature": "Text-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume exactly \u003ccode\u003en\u003c/code\u003e characters of input.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "take",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "signature": "Int-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume all remaining input and return it as a single string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeLazyText",
          "package": "attoparsec-text",
          "signature": "Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#takeLazyText",
          "type": "function"
        },
        "index": {
          "description": "Consume all remaining input and return it as single string",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "takeLazyText",
          "package": "attoparsec-text",
          "partial": "Lazy Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:takeLazyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume all remaining input and return it as a single string.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeText",
          "package": "attoparsec-text",
          "signature": "Parser Text",
          "source": "src/Data-Attoparsec-Text-Internal.html#takeText",
          "type": "function"
        },
        "index": {
          "description": "Consume all remaining input and return it as single string",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "takeText",
          "package": "attoparsec-text",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:takeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n (i.e. until it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e), and return the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the first character of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeTill",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "Till",
          "signature": "(Char-\u003eBool)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:takeTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e on the first character of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeWhile",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser requires the predicate to succeed on at least one\n character of input: it will fail if the predicate never\n returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e or if there is no input left.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "takeWhile1",
          "package": "attoparsec-text",
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
          "package": "attoparsec-text",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt a parse, and if it fails, rewind the input so that no\n input appears to have been consumed.\n\u003c/p\u003e\u003cp\u003eThis combinator is useful in cases where a parser might consume\n some input before failing, i.e. the parser needs arbitrary\n lookahead.  The downside to using this combinator is that it can\n retain input for longer than is desirable.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text",
          "name": "try",
          "package": "attoparsec-text",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Data-Attoparsec-Text-Internal.html#try",
          "type": "function"
        },
        "index": {
          "description": "Attempt parse and if it fails rewind the input so that no input appears to have been consumed This combinator is useful in cases where parser might consume some input before failing i.e the parser needs arbitrary lookahead The downside to using this combinator is that it can retain input for longer than is desirable",
          "hierarchy": "Data Attoparsec Text",
          "module": "Data.Attoparsec.Text",
          "name": "try",
          "normalized": "Parser a-\u003eParser a",
          "package": "attoparsec-text",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text/docs/Data-Attoparsec-Text.html#v:try"
      }
    }
  ]
]