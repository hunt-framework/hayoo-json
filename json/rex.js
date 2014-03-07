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
        "word": "rex"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for accessing the compiled representation of\n PCRE regular expressions.  This byte array encodes a lookup-table based\n representation for the regular expression, and can be safely written\n out and read back by compatible PCRE versions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "Precompile",
          "package": "rex",
          "source": "src/Text-Regex-PCRE-Precompile.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides support for accessing the compiled representation of PCRE regular expressions This byte array encodes lookup-table based representation for the regular expression and can be safely written out and read back by compatible PCRE versions",
          "hierarchy": "Text Regex PCRE Precompile",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "Precompile",
          "package": "rex",
          "partial": "Precompile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym indicating which ByteStrings represent PCRE-format compiled data.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "CompiledBytes",
          "package": "rex",
          "source": "src/Text-Regex-PCRE-Precompile.html#CompiledBytes",
          "type": "type"
        },
        "index": {
          "description": "synonym indicating which ByteStrings represent PCRE-format compiled data",
          "hierarchy": "Text Regex PCRE Precompile",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "CompiledBytes",
          "package": "rex",
          "partial": "Compiled Bytes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#t:CompiledBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles the given regular expression, and assuming nothing bad happens,\n yields the bytestring filled with PCRE's compiled representation.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "precompile",
          "package": "rex",
          "signature": "ByteString -\u003e [PCREOption] -\u003e IO (Maybe CompiledBytes)",
          "source": "src/Text-Regex-PCRE-Precompile.html#precompile",
          "type": "function"
        },
        "index": {
          "description": "Compiles the given regular expression and assuming nothing bad happens yields the bytestring filled with PCRE compiled representation",
          "hierarchy": "Text Regex PCRE Precompile",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "precompile",
          "normalized": "ByteString-\u003e[PCREOption]-\u003eIO(Maybe CompiledBytes)",
          "package": "rex",
          "signature": "ByteString-\u003e[PCREOption]-\u003eIO(Maybe CompiledBytes)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#v:precompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a regular expression from the compiled representation.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "regexFromTable",
          "package": "rex",
          "signature": "CompiledBytes -\u003e IO Regex",
          "source": "src/Text-Regex-PCRE-Precompile.html#regexFromTable",
          "type": "function"
        },
        "index": {
          "description": "Creates regular expression from the compiled representation",
          "hierarchy": "Text Regex PCRE Precompile",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "regexFromTable",
          "normalized": "CompiledBytes-\u003eIO Regex",
          "package": "rex",
          "partial": "From Table",
          "signature": "CompiledBytes-\u003eIO Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#v:regexFromTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a compiled regular expression, and if successful, yields the\n compiled representation.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "regexToTable",
          "package": "rex",
          "signature": "Regex -\u003e IO (Maybe CompiledBytes)",
          "source": "src/Text-Regex-PCRE-Precompile.html#regexToTable",
          "type": "function"
        },
        "index": {
          "description": "Takes compiled regular expression and if successful yields the compiled representation",
          "hierarchy": "Text Regex PCRE Precompile",
          "module": "Text.Regex.PCRE.Precompile",
          "name": "regexToTable",
          "normalized": "Regex-\u003eIO(Maybe CompiledBytes)",
          "package": "rex",
          "partial": "To Table",
          "signature": "Regex-\u003eIO(Maybe CompiledBytes)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#v:regexToTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a template Haskell quasiquoter for regular expressions,\n which provides the following features:\n\u003c/p\u003e\u003cp\u003e1) Compile-time checking that the regular expression is valid.\n\u003c/p\u003e\u003cp\u003e2) Arity of resulting tuple based on the number of selected capture patterns\n in the regular expression.\n\u003c/p\u003e\u003cp\u003e3) Allows for the inline interpolation of mapping functions :: String -\u003e a.\n\u003c/p\u003e\u003cp\u003e4) Precompiles the regular expression at compile time, by calling into the\n PCRE library and storing a \u003ccode\u003eByteString\u003c/code\u003e literal representation of its state.\n\u003c/p\u003e\u003cp\u003e5) Compile-time configurable to use different PCRE options, turn off\n precompilation, use \u003ccode\u003eByteString\u003c/code\u003es, or set a default mapping expression.\n\u003c/p\u003e\u003cp\u003eInspired by Matt Morrow's regexqq package:\n \u003ca\u003ehttp://hackage.haskell.org/package/regexqq/docs/Text-Regex-PCRE-QQ.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAnd some code from Erik Charlebois's interpolatedstring-qq package:\n \u003ca\u003ehttp://hackage.haskell.org/package/interpolatedstring-qq/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "Rex",
          "package": "rex",
          "source": "src/Text-Regex-PCRE-Rex.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides template Haskell quasiquoter for regular expressions which provides the following features Compile-time checking that the regular expression is valid Arity of resulting tuple based on the number of selected capture patterns in the regular expression Allows for the inline interpolation of mapping functions String Precompiles the regular expression at compile time by calling into the PCRE library and storing ByteString literal representation of its state Compile-time configurable to use different PCRE options turn off precompilation use ByteString or set default mapping expression Inspired by Matt Morrow regexqq package http hackage.haskell.org package regexqq docs Text-Regex-PCRE-QQ.html And some code from Erik Charlebois interpolatedstring-qq package http hackage.haskell.org package interpolatedstring-qq",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "Rex",
          "package": "rex",
          "partial": "Rex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.PCRE.Rex",
          "name": "RexConf",
          "package": "rex",
          "source": "src/Text-Regex-PCRE-Rex.html#RexConf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "RexConf",
          "package": "rex",
          "partial": "Rex Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#t:RexConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.PCRE.Rex",
          "name": "RexConf",
          "package": "rex",
          "signature": "RexConf",
          "source": "src/Text-Regex-PCRE-Rex.html#RexConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "RexConf",
          "package": "rex",
          "partial": "Rex Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:RexConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRex quasiquoter which takes \u003ccode\u003eByteString\u003c/code\u003e as input, and otherwise uses\n  \u003ccode\u003e\u003ca\u003edefaultRexConf\u003c/a\u003e\u003c/code\u003e for its configuration.  Can be used in expressions and\n  patterns.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "brex",
          "package": "rex",
          "signature": "QuasiQuoter",
          "source": "src/Text-Regex-PCRE-Rex.html#brex",
          "type": "function"
        },
        "index": {
          "description": "Rex quasiquoter which takes ByteString as input and otherwise uses defaultRexConf for its configuration Can be used in expressions and patterns",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "brex",
          "package": "rex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:brex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault rex configuration, which specifies that the regexes operate on\n   strings, don't post-process the matched patterns, and use \u003ccode\u003e\u003ca\u003eextended\u003c/a\u003e\u003c/code\u003e.\n   This setting causes whitespace to be non-semantic, and ignores # comments.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "defaultRexConf",
          "package": "rex",
          "signature": "RexConf",
          "source": "src/Text-Regex-PCRE-Rex.html#defaultRexConf",
          "type": "function"
        },
        "index": {
          "description": "Default rex configuration which specifies that the regexes operate on strings don post-process the matched patterns and use extended This setting causes whitespace to be non-semantic and ignores comments",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "defaultRexConf",
          "package": "rex",
          "partial": "Rex Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:defaultRexConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts \u003ccode\u003eLeft\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eParseFailed\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enoLoc\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and a \u003ccode\u003eRight\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eParseOk\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "eitherToParseResult",
          "package": "rex",
          "signature": "Either String a -\u003e ParseResult a",
          "source": "src/Text-Regex-PCRE-Rex.html#eitherToParseResult",
          "type": "function"
        },
        "index": {
          "description": "Converts Left to ParseFailed noLoc and Right to ParseOk",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "eitherToParseResult",
          "normalized": "Either String a-\u003eParseResult a",
          "package": "rex",
          "partial": "To Parse Result",
          "signature": "Either String a-\u003eParseResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:eitherToParseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a \u003ccode\u003e\u003ca\u003eQuasiQuoter\u003c/a\u003e\u003c/code\u003e transformer, which allows for a whitespace-\n   sensitive quasi-quoter to be broken over multiple lines.  The default \u003ccode\u003e\u003ca\u003erex\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003ebrex\u003c/a\u003e\u003c/code\u003e functions do not need this as they are already whitespace\n   insensitive. However, if you create your own configuration, which omits the\n   \u003ccode\u003e\u003ca\u003eextended\u003c/a\u003e\u003c/code\u003e parameter, then this could be useful. The leading space of\n   each line is ignored, and all newlines removed.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "makeQuasiMultiline",
          "package": "rex",
          "signature": "QuasiQuoter -\u003e QuasiQuoter",
          "source": "src/Text-Regex-PCRE-Rex.html#makeQuasiMultiline",
          "type": "function"
        },
        "index": {
          "description": "This is QuasiQuoter transformer which allows for whitespace sensitive quasi-quoter to be broken over multiple lines The default rex and brex functions do not need this as they are already whitespace insensitive However if you create your own configuration which omits the extended parameter then this could be useful The leading space of each line is ignored and all newlines removed",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "makeQuasiMultiline",
          "normalized": "QuasiQuoter-\u003eQuasiQuoter",
          "package": "rex",
          "partial": "Quasi Multiline",
          "signature": "QuasiQuoter-\u003eQuasiQuoter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:makeQuasiMultiline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a desired list-length, if the passed list is too short, it is padded\n with the given element.  Otherwise, it trims.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "padRight",
          "package": "rex",
          "signature": "a -\u003e Int -\u003e [a] -\u003e [a]",
          "source": "src/Text-Regex-PCRE-Rex.html#padRight",
          "type": "function"
        },
        "index": {
          "description": "Given desired list-length if the passed list is too short it is padded with the given element Otherwise it trims",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "padRight",
          "normalized": "a-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "rex",
          "partial": "Right",
          "signature": "a-\u003eInt-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:padRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a Haskell expression into a Template Haskell Exp.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "parseExp",
          "package": "rex",
          "signature": "String -\u003e ParseResult Exp",
          "source": "src/Text-Regex-PCRE-Rex.html#parseExp",
          "type": "function"
        },
        "index": {
          "description": "Parse Haskell expression into Template Haskell Exp",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "parseExp",
          "normalized": "String-\u003eParseResult Exp",
          "package": "rex",
          "partial": "Exp",
          "signature": "String-\u003eParseResult Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:parseExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a Haskell pattern match into a Template Haskell Pat.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "parsePat",
          "package": "rex",
          "signature": "String -\u003e ParseResult Pat",
          "source": "src/Text-Regex-PCRE-Rex.html#parsePat",
          "type": "function"
        },
        "index": {
          "description": "Parse Haskell pattern match into Template Haskell Pat",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "parsePat",
          "normalized": "String-\u003eParseResult Pat",
          "package": "rex",
          "partial": "Pat",
          "signature": "String-\u003eParseResult Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:parsePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRex quasiquoter which takes \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as input, and uses \u003ccode\u003e\u003ca\u003edefaultRexConf\u003c/a\u003e\u003c/code\u003e\n   for its configuration.  Can be used in expressions and patterns.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rex",
          "package": "rex",
          "signature": "QuasiQuoter",
          "source": "src/Text-Regex-PCRE-Rex.html#rex",
          "type": "function"
        },
        "index": {
          "description": "Rex quasiquoter which takes String as input and uses defaultRexConf for its configuration Can be used in expressions and patterns",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rex",
          "package": "rex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen \u003ccode\u003eTrue\u003c/code\u003e, the input type is a ByteString, otherwise, it's a String.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexByteString",
          "package": "rex",
          "signature": "Bool",
          "source": "src/Text-Regex-PCRE-Rex.html#RexConf",
          "type": "function"
        },
        "index": {
          "description": "When True the input type is ByteString otherwise it String",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexByteString",
          "package": "rex",
          "partial": "Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen \u003ccode\u003eTrue\u003c/code\u003e, the regex is precompiled.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexCompiled",
          "package": "rex",
          "signature": "Bool",
          "source": "src/Text-Regex-PCRE-Rex.html#RexConf",
          "type": "function"
        },
        "index": {
          "description": "When True the regex is precompiled",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexCompiled",
          "package": "rex",
          "partial": "Compiled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexCompiled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions used when executing PCRE regular expressions.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexPCREExecOpts",
          "package": "rex",
          "signature": "[PCREExecOption]",
          "source": "src/Text-Regex-PCRE-Rex.html#RexConf",
          "type": "function"
        },
        "index": {
          "description": "Options used when executing PCRE regular expressions",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexPCREExecOpts",
          "normalized": "[PCREExecOption]",
          "package": "rex",
          "partial": "PCREExec Opts",
          "signature": "[PCREExecOption]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexPCREExecOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions used when compiling PCRE regular expressions.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexPCREOpts",
          "package": "rex",
          "signature": "[PCREOption]",
          "source": "src/Text-Regex-PCRE-Rex.html#RexConf",
          "type": "function"
        },
        "index": {
          "description": "Options used when compiling PCRE regular expressions",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexPCREOpts",
          "normalized": "[PCREOption]",
          "package": "rex",
          "partial": "PCREOpts",
          "signature": "[PCREOption]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexPCREOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse mode used by \u003ccode\u003e\u003ca\u003eparseExp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparsePat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexParseMode",
          "package": "rex",
          "signature": "ParseMode",
          "source": "src/Text-Regex-PCRE-Rex.html#rexParseMode",
          "type": "function"
        },
        "index": {
          "description": "Parse mode used by parseExp and parsePat",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexParseMode",
          "package": "rex",
          "partial": "Parse Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexParseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreprocess the string used in expression antiquotes.  \u003ccode\u003e\u003ca\u003edefaultRexConf\u003c/a\u003e\u003c/code\u003e\n   just passes through the string unaltered, unless it just consists of\n   whitespace.  When it's all whitespace, \u003ccode\u003e\u003ca\u003erexView\u003c/a\u003e\u003c/code\u003e is used.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexPreprocessExp",
          "package": "rex",
          "signature": "String -\u003e String",
          "source": "src/Text-Regex-PCRE-Rex.html#RexConf",
          "type": "function"
        },
        "index": {
          "description": "Preprocess the string used in expression antiquotes defaultRexConf just passes through the string unaltered unless it just consists of whitespace When it all whitespace rexView is used",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexPreprocessExp",
          "normalized": "String-\u003eString",
          "package": "rex",
          "partial": "Preprocess Exp",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexPreprocessExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreprocess the string used in pattern antiquotes. \u003ccode\u003e\u003ca\u003edefaultRexConf\u003c/a\u003e\u003c/code\u003e\n   adds parenthesis around the string, so that view patterns will parse\n   without requiring parenthesis around them.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexPreprocessPat",
          "package": "rex",
          "signature": "String -\u003e String",
          "source": "src/Text-Regex-PCRE-Rex.html#RexConf",
          "type": "function"
        },
        "index": {
          "description": "Preprocess the string used in pattern antiquotes defaultRexConf adds parenthesis around the string so that view patterns will parse without requiring parenthesis around them",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexPreprocessPat",
          "normalized": "String-\u003eString",
          "package": "rex",
          "partial": "Preprocess Pat",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexPreprocessPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default view function used when expression antiquotes are empty, or when\n   pattern antiquotes omit a view pattern.  See the documentation for\n   \u003ccode\u003e\u003ca\u003erexPreprocessPat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erexPreprocessExp\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e\u003cp\u003eYou can locally shadow this \u003ccode\u003e\u003ca\u003erexView\u003c/a\u003e\u003c/code\u003e with your own version, if you wish.\n   One good option is readMay from the safe package:\n   \u003ca\u003ehttp://hackage.haskell.org/package/safe/docs/Safe.html#v:readMay\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe type of this identity rexView is fully polymorphic so that it can be\n   used with either \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexView",
          "package": "rex",
          "signature": "a -\u003e a",
          "source": "src/Text-Regex-PCRE-Rex.html#rexView",
          "type": "function"
        },
        "index": {
          "description": "default view function used when expression antiquotes are empty or when pattern antiquotes omit view pattern See the documentation for rexPreprocessPat and rexPreprocessExp for more details You can locally shadow this rexView with your own version if you wish One good option is readMay from the safe package http hackage.haskell.org package safe docs Safe.html readMay The type of this identity rexView is fully polymorphic so that it can be used with either String or ByteString",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexView",
          "normalized": "a-\u003ea",
          "package": "rex",
          "partial": "View",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a pattern match doesn't have a view pattern, this expression is\n   used to preprocess it before matching.  When \u003ccode\u003e\u003ca\u003edefaultRexConf\u003c/a\u003e\u003c/code\u003e is used,\n   perhaps via \u003ccode\u003e\u003ca\u003erex\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ebrex\u003c/a\u003e\u003c/code\u003e, a reference to \u003ccode\u003erexView\u003c/code\u003e is used.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erexView\u003c/a\u003e\u003c/code\u003e exported by this module is \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e, so by default no\n   preprocessing is done before\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexViewExp",
          "package": "rex",
          "signature": "Exp",
          "source": "src/Text-Regex-PCRE-Rex.html#RexConf",
          "type": "function"
        },
        "index": {
          "description": "When pattern match doesn have view pattern this expression is used to preprocess it before matching When defaultRexConf is used perhaps via rex or brex reference to rexView is used The rexView exported by this module is id so by default no preprocessing is done before",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexViewExp",
          "package": "rex",
          "partial": "View Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexViewExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA configureable regular-expression QuasiQuoter.  Takes the options to pass\n   to the PCRE engine, along with \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003es to flag \u003ccode\u003eByteString\u003c/code\u003e usage and\n   non-compilation respecively.  The provided \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e indicates which mapping\n   function to use, when one is omitted - \"(?{} ...)\".\n\u003c/p\u003e",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexWithConf",
          "package": "rex",
          "signature": "RexConf -\u003e QuasiQuoter",
          "source": "src/Text-Regex-PCRE-Rex.html#rexWithConf",
          "type": "function"
        },
        "index": {
          "description": "configureable regular-expression QuasiQuoter Takes the options to pass to the PCRE engine along with Bool to flag ByteString usage and non-compilation respecively The provided String indicates which mapping function to use when one is omitted",
          "hierarchy": "Text Regex PCRE Rex",
          "module": "Text.Regex.PCRE.Rex",
          "name": "rexWithConf",
          "normalized": "RexConf-\u003eQuasiQuoter",
          "package": "rex",
          "partial": "With Conf",
          "signature": "RexConf-\u003eQuasiQuoter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexWithConf"
      }
    }
  ]
]