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
        "word": "language-lua"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Lexer",
          "name": "Lexer",
          "package": "language-lua",
          "source": "src/Language-Lua-Lexer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Lua Lexer",
          "module": "Language.Lua.Lexer",
          "name": "Lexer",
          "package": "language-lua",
          "partial": "Lexer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Lexer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Lexer",
          "name": "AlexPosn",
          "package": "language-lua",
          "source": "src/Language-Lua-Lexer.html#AlexPosn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Lexer",
          "module": "Language.Lua.Lexer",
          "name": "AlexPosn",
          "package": "language-lua",
          "partial": "Alex Posn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Lexer.html#t:AlexPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLua token with position information.\n\u003c/p\u003e",
          "module": "Language.Lua.Lexer",
          "name": "LTok",
          "package": "language-lua",
          "source": "src/Language-Lua-Lexer.html#LTok",
          "type": "type"
        },
        "index": {
          "description": "Lua token with position information",
          "hierarchy": "Language Lua Lexer",
          "module": "Language.Lua.Lexer",
          "name": "LTok",
          "package": "language-lua",
          "partial": "LTok",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Lexer.html#t:LTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Lexer",
          "name": "AlexPn",
          "package": "language-lua",
          "signature": "AlexPn !Int !Int !Int",
          "source": "src/Language-Lua-Lexer.html#AlexPosn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Lexer",
          "module": "Language.Lua.Lexer",
          "name": "AlexPn",
          "package": "language-lua",
          "partial": "Alex Pn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Lexer.html#v:AlexPn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLua lexer.\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Lexer\",\"Language.Lua\"]",
          "name": "llex",
          "package": "language-lua",
          "signature": "String -\u003e [LTok]",
          "source": "src/Language-Lua-Lexer.html#llex",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Lexer.html#v:llex\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:llex\"]"
        },
        "index": {
          "description": "Lua lexer",
          "hierarchy": "Language Lua Lexer",
          "module": "Language.Lua.Lexer",
          "name": "llex",
          "normalized": "String-\u003e[LTok]",
          "package": "language-lua",
          "signature": "String-\u003e[LTok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Lexer.html#v:llex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun Lua lexer on a file.\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Lexer\",\"Language.Lua\"]",
          "name": "llexFile",
          "package": "language-lua",
          "signature": "FilePath -\u003e IO [LTok]",
          "source": "src/Language-Lua-Lexer.html#llexFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Lexer.html#v:llexFile\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:llexFile\"]"
        },
        "index": {
          "description": "Run Lua lexer on file",
          "hierarchy": "Language Lua Lexer",
          "module": "Language.Lua.Lexer",
          "name": "llexFile",
          "normalized": "FilePath-\u003eIO[LTok]",
          "package": "language-lua",
          "partial": "File",
          "signature": "FilePath-\u003eIO[LTok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Lexer.html#v:llexFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Parser",
          "name": "Parser",
          "package": "language-lua",
          "source": "src/Language-Lua-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Lua Parser",
          "module": "Language.Lua.Parser",
          "name": "Parser",
          "package": "language-lua",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLua file parser.\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Parser\",\"Language.Lua\"]",
          "name": "chunk",
          "package": "language-lua",
          "signature": "Parser (Block SourcePos)",
          "source": "src/Language-Lua-Parser.html#chunk",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:chunk\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:chunk\"]"
        },
        "index": {
          "description": "Lua file parser",
          "hierarchy": "Language Lua Parser",
          "module": "Language.Lua.Parser",
          "name": "chunk",
          "package": "language-lua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression parser.\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Parser\",\"Language.Lua\"]",
          "name": "exp",
          "package": "language-lua",
          "signature": "Parser (Exp SourcePos)",
          "source": "src/Language-Lua-Parser.html#exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:exp\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:exp\"]"
        },
        "index": {
          "description": "Expression parser",
          "hierarchy": "Language Lua Parser",
          "module": "Language.Lua.Parser",
          "name": "exp",
          "package": "language-lua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a Lua file. You can use \u003ccode\u003eparseText chunk\u003c/code\u003e to parse a file from a string.\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Parser\",\"Language.Lua\"]",
          "name": "parseFile",
          "package": "language-lua",
          "signature": "FilePath -\u003e IO (Either ParseError (Block SourcePos))",
          "source": "src/Language-Lua-Parser.html#parseFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:parseFile\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:parseFile\"]"
        },
        "index": {
          "description": "Parse Lua file You can use parseText chunk to parse file from string",
          "hierarchy": "Language Lua Parser",
          "module": "Language.Lua.Parser",
          "name": "parseFile",
          "normalized": "FilePath-\u003eIO(Either ParseError(Block SourcePos))",
          "package": "language-lua",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Either ParseError(Block SourcePos))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns Lua lexer before parsing. Use \u003ccode\u003eparseText stat\u003c/code\u003e to parse\n statements, and \u003ccode\u003eparseText exp\u003c/code\u003e to parse expressions.\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Parser\",\"Language.Lua\"]",
          "name": "parseText",
          "package": "language-lua",
          "signature": "Parsec [LTok] () a -\u003e String -\u003e Either ParseError a",
          "source": "src/Language-Lua-Parser.html#parseText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:parseText\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:parseText\"]"
        },
        "index": {
          "description": "Runs Lua lexer before parsing Use parseText stat to parse statements and parseText exp to parse expressions",
          "hierarchy": "Language Lua Parser",
          "module": "Language.Lua.Parser",
          "name": "parseText",
          "normalized": "Parsec[LTok]()a-\u003eString-\u003eEither ParseError a",
          "package": "language-lua",
          "partial": "Text",
          "signature": "Parsec[LTok]()a-\u003eString-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:parseText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement parser.\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Parser\",\"Language.Lua\"]",
          "name": "stat",
          "package": "language-lua",
          "signature": "Parser (Stat SourcePos)",
          "source": "src/Language-Lua-Parser.html#stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:stat\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:stat\"]"
        },
        "index": {
          "description": "Statement parser",
          "hierarchy": "Language Lua Parser",
          "module": "Language.Lua.Parser",
          "name": "stat",
          "package": "language-lua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Parser.html#v:stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLua pretty-printer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Lua.PrettyPrinter",
          "name": "PrettyPrinter",
          "package": "language-lua",
          "source": "src/Language-Lua-PrettyPrinter.html",
          "type": "module"
        },
        "index": {
          "description": "Lua pretty-printer",
          "hierarchy": "Language Lua PrettyPrinter",
          "module": "Language.Lua.PrettyPrinter",
          "name": "PrettyPrinter",
          "package": "language-lua",
          "partial": "Pretty Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-PrettyPrinter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.PrettyPrinter",
          "name": "LPretty",
          "package": "language-lua",
          "source": "src/Language-Lua-PrettyPrinter.html#LPretty",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Lua PrettyPrinter",
          "module": "Language.Lua.PrettyPrinter",
          "name": "LPretty",
          "package": "language-lua",
          "partial": "LPretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-PrettyPrinter.html#t:LPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(displayIO handle simpleDoc)\u003c/code\u003e writes \u003ccode\u003esimpleDoc\u003c/code\u003e to the file\n handle \u003ccode\u003ehandle\u003c/code\u003e. This function is used for example by \u003ccode\u003ehPutDoc\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e hPutDoc handle doc  = displayIO handle (renderPretty 0.4 100 doc)\n\u003c/pre\u003e",
          "module": "Language.Lua.PrettyPrinter",
          "name": "displayIO",
          "package": "language-lua",
          "signature": "Handle -\u003e SimpleDoc -\u003e IO ()",
          "source": "src/Text-PrettyPrint-Leijen.html#displayIO",
          "type": "function"
        },
        "index": {
          "description": "displayIO handle simpleDoc writes simpleDoc to the file handle handle This function is used for example by hPutDoc hPutDoc handle doc displayIO handle renderPretty doc",
          "hierarchy": "Language Lua PrettyPrinter",
          "module": "Language.Lua.PrettyPrinter",
          "name": "displayIO",
          "normalized": "Handle-\u003eSimpleDoc-\u003eIO()",
          "package": "language-lua",
          "partial": "IO",
          "signature": "Handle-\u003eSimpleDoc-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-PrettyPrinter.html#v:displayIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(displayS simpleDoc)\u003c/code\u003e takes the output \u003ccode\u003esimpleDoc\u003c/code\u003e from a\n rendering function and transforms it to a \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e type (for use in\n the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class).\n\u003c/p\u003e\u003cpre\u003e showWidth :: Int -\u003e Doc -\u003e String\n showWidth w x   = displayS (renderPretty 0.4 w x) \"\"\n\u003c/pre\u003e",
          "module": "Language.Lua.PrettyPrinter",
          "name": "displayS",
          "package": "language-lua",
          "signature": "SimpleDoc -\u003e ShowS",
          "source": "src/Text-PrettyPrint-Leijen.html#displayS",
          "type": "function"
        },
        "index": {
          "description": "displayS simpleDoc takes the output simpleDoc from rendering function and transforms it to ShowS type for use in the Show class showWidth Int Doc String showWidth displayS renderPretty",
          "hierarchy": "Language Lua PrettyPrinter",
          "module": "Language.Lua.PrettyPrinter",
          "name": "displayS",
          "normalized": "SimpleDoc-\u003eShowS",
          "package": "language-lua",
          "signature": "SimpleDoc-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-PrettyPrinter.html#v:displayS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.PrettyPrinter",
          "name": "pprint",
          "package": "language-lua",
          "signature": "a -\u003e Doc",
          "source": "src/Language-Lua-PrettyPrinter.html#pprint",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Lua PrettyPrinter",
          "module": "Language.Lua.PrettyPrinter",
          "name": "pprint",
          "normalized": "a-\u003eDoc",
          "package": "language-lua",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-PrettyPrinter.html#v:pprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the default pretty printer which is used by \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003eputDoc\u003c/code\u003e and \u003ccode\u003ehPutDoc\u003c/code\u003e. \u003ccode\u003e(renderPretty ribbonfrac width x)\u003c/code\u003e renders\n document \u003ccode\u003ex\u003c/code\u003e with a page width of \u003ccode\u003ewidth\u003c/code\u003e and a ribbon width of\n \u003ccode\u003e(ribbonfrac * width)\u003c/code\u003e characters. The ribbon width is the maximal\n amount of non-indentation characters on a line. The parameter\n \u003ccode\u003eribbonfrac\u003c/code\u003e should be between \u003ccode\u003e0.0\u003c/code\u003e and \u003ccode\u003e1.0\u003c/code\u003e. If it is lower or\n higher, the ribbon width will be 0 or \u003ccode\u003ewidth\u003c/code\u003e respectively.\n\u003c/p\u003e",
          "module": "Language.Lua.PrettyPrinter",
          "name": "renderPretty",
          "package": "language-lua",
          "signature": "Float -\u003e Int -\u003e Doc -\u003e SimpleDoc",
          "source": "src/Text-PrettyPrint-Leijen.html#renderPretty",
          "type": "function"
        },
        "index": {
          "description": "This is the default pretty printer which is used by show putDoc and hPutDoc renderPretty ribbonfrac width renders document with page width of width and ribbon width of ribbonfrac width characters The ribbon width is the maximal amount of non-indentation characters on line The parameter ribbonfrac should be between and If it is lower or higher the ribbon width will be or width respectively",
          "hierarchy": "Language Lua PrettyPrinter",
          "module": "Language.Lua.PrettyPrinter",
          "name": "renderPretty",
          "normalized": "Float-\u003eInt-\u003eDoc-\u003eSimpleDoc",
          "package": "language-lua",
          "partial": "Pretty",
          "signature": "Float-\u003eInt-\u003eDoc-\u003eSimpleDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-PrettyPrinter.html#v:renderPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Token",
          "name": "Token",
          "package": "language-lua",
          "source": "src/Language-Lua-Token.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "Token",
          "package": "language-lua",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLua tokens\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LToken",
          "package": "language-lua",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "data"
        },
        "index": {
          "description": "Lua tokens",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LToken",
          "package": "language-lua",
          "partial": "LToken",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#t:LToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eand\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokAnd",
          "package": "language-lua",
          "signature": "LTokAnd",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "and",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokAnd",
          "package": "language-lua",
          "partial": "LTok And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e=\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokAssign",
          "package": "language-lua",
          "signature": "LTokAssign",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokAssign",
          "package": "language-lua",
          "partial": "LTok Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebreak\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokBreak",
          "package": "language-lua",
          "signature": "LTokBreak",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "break",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokBreak",
          "package": "language-lua",
          "partial": "LTok Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e:\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokColon",
          "package": "language-lua",
          "signature": "LTokColon",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokColon",
          "package": "language-lua",
          "partial": "LTok Colon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokColon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e,\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokComma",
          "package": "language-lua",
          "signature": "LTokComma",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokComma",
          "package": "language-lua",
          "partial": "LTok Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e::\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokDColon",
          "package": "language-lua",
          "signature": "LTokDColon",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokDColon",
          "package": "language-lua",
          "partial": "LTok DColon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokDColon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e..\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokDDot",
          "package": "language-lua",
          "signature": "LTokDDot",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokDDot",
          "package": "language-lua",
          "partial": "LTok DDot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokDDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edo\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokDo",
          "package": "language-lua",
          "signature": "LTokDo",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "do",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokDo",
          "package": "language-lua",
          "partial": "LTok Do",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e.\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokDot",
          "package": "language-lua",
          "signature": "LTokDot",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokDot",
          "package": "language-lua",
          "partial": "LTok Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e...\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokEllipsis",
          "package": "language-lua",
          "signature": "LTokEllipsis",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokEllipsis",
          "package": "language-lua",
          "partial": "LTok Ellipsis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokEllipsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelse\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokElse",
          "package": "language-lua",
          "signature": "LTokElse",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "else",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokElse",
          "package": "language-lua",
          "partial": "LTok Else",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelseif\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokElseIf",
          "package": "language-lua",
          "signature": "LTokElseIf",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "elseif",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokElseIf",
          "package": "language-lua",
          "partial": "LTok Else If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokElseIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eend\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokEnd",
          "package": "language-lua",
          "signature": "LTokEnd",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "end",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokEnd",
          "package": "language-lua",
          "partial": "LTok End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eend of file\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokEof",
          "package": "language-lua",
          "signature": "LTokEof",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "end of file",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokEof",
          "package": "language-lua",
          "partial": "LTok Eof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e==\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokEqual",
          "package": "language-lua",
          "signature": "LTokEqual",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokEqual",
          "package": "language-lua",
          "partial": "LTok Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e^\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokExp",
          "package": "language-lua",
          "signature": "LTokExp",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokExp",
          "package": "language-lua",
          "partial": "LTok Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efalse\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokFalse",
          "package": "language-lua",
          "signature": "LTokFalse",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "false",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokFalse",
          "package": "language-lua",
          "partial": "LTok False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokFor",
          "package": "language-lua",
          "signature": "LTokFor",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "for",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokFor",
          "package": "language-lua",
          "partial": "LTok For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokFunction",
          "package": "language-lua",
          "signature": "LTokFunction",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "function",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokFunction",
          "package": "language-lua",
          "partial": "LTok Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003e=\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokGEq",
          "package": "language-lua",
          "signature": "LTokGEq",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokGEq",
          "package": "language-lua",
          "partial": "LTok GEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokGEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003e\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokGT",
          "package": "language-lua",
          "signature": "LTokGT",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokGT",
          "package": "language-lua",
          "partial": "LTok GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egoto\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokGoto",
          "package": "language-lua",
          "signature": "LTokGoto",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "goto",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokGoto",
          "package": "language-lua",
          "partial": "LTok Goto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokGoto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentifier\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokIdent",
          "package": "language-lua",
          "signature": "LTokIdent String",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "identifier",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokIdent",
          "package": "language-lua",
          "partial": "LTok Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokIf",
          "package": "language-lua",
          "signature": "LTokIf",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "if",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokIf",
          "package": "language-lua",
          "partial": "LTok If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ein\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokIn",
          "package": "language-lua",
          "signature": "LTokIn",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "in",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokIn",
          "package": "language-lua",
          "partial": "LTok In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e{\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokLBrace",
          "package": "language-lua",
          "signature": "LTokLBrace",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokLBrace",
          "package": "language-lua",
          "partial": "LTok LBrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokLBrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e[\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokLBracket",
          "package": "language-lua",
          "signature": "LTokLBracket",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokLBracket",
          "package": "language-lua",
          "partial": "LTok LBracket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokLBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003c=\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokLEq",
          "package": "language-lua",
          "signature": "LTokLEq",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokLEq",
          "package": "language-lua",
          "partial": "LTok LEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokLEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokLParen",
          "package": "language-lua",
          "signature": "LTokLParen",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokLParen",
          "package": "language-lua",
          "partial": "LTok LParen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokLParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003c\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokLT",
          "package": "language-lua",
          "signature": "LTokLT",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokLT",
          "package": "language-lua",
          "partial": "LTok LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocal\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokLocal",
          "package": "language-lua",
          "signature": "LTokLocal",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "local",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokLocal",
          "package": "language-lua",
          "partial": "LTok Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e-\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokMinus",
          "package": "language-lua",
          "signature": "LTokMinus",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokMinus",
          "package": "language-lua",
          "partial": "LTok Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enil\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokNil",
          "package": "language-lua",
          "signature": "LTokNil",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "nil",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokNil",
          "package": "language-lua",
          "partial": "LTok Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enot\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokNot",
          "package": "language-lua",
          "signature": "LTokNot",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "not",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokNot",
          "package": "language-lua",
          "partial": "LTok Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e~=\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokNotequal",
          "package": "language-lua",
          "signature": "LTokNotequal",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokNotequal",
          "package": "language-lua",
          "partial": "LTok Notequal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokNotequal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber constant\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokNum",
          "package": "language-lua",
          "signature": "LTokNum String",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "number constant",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokNum",
          "package": "language-lua",
          "partial": "LTok Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eor\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokOr",
          "package": "language-lua",
          "signature": "LTokOr",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "or",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokOr",
          "package": "language-lua",
          "partial": "LTok Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e%\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokPercent",
          "package": "language-lua",
          "signature": "LTokPercent",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokPercent",
          "package": "language-lua",
          "partial": "LTok Percent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokPercent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e+\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokPlus",
          "package": "language-lua",
          "signature": "LTokPlus",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokPlus",
          "package": "language-lua",
          "partial": "LTok Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e}\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokRBrace",
          "package": "language-lua",
          "signature": "LTokRBrace",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokRBrace",
          "package": "language-lua",
          "partial": "LTok RBrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokRBrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e]\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokRBracket",
          "package": "language-lua",
          "signature": "LTokRBracket",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokRBracket",
          "package": "language-lua",
          "partial": "LTok RBracket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokRBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e)\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokRParen",
          "package": "language-lua",
          "signature": "LTokRParen",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokRParen",
          "package": "language-lua",
          "partial": "LTok RParen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokRParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepeat\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokRepeat",
          "package": "language-lua",
          "signature": "LTokRepeat",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "repeat",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokRepeat",
          "package": "language-lua",
          "partial": "LTok Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokReturn",
          "package": "language-lua",
          "signature": "LTokReturn",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "return",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokReturn",
          "package": "language-lua",
          "partial": "LTok Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring constant\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokSLit",
          "package": "language-lua",
          "signature": "LTokSLit String",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "string constant",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokSLit",
          "package": "language-lua",
          "partial": "LTok SLit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokSLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e;\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokSemic",
          "package": "language-lua",
          "signature": "LTokSemic",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokSemic",
          "package": "language-lua",
          "partial": "LTok Semic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokSemic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e#\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokSh",
          "package": "language-lua",
          "signature": "LTokSh",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokSh",
          "package": "language-lua",
          "partial": "LTok Sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokSh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e/\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokSlash",
          "package": "language-lua",
          "signature": "LTokSlash",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokSlash",
          "package": "language-lua",
          "partial": "LTok Slash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokSlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e*\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokStar",
          "package": "language-lua",
          "signature": "LTokStar",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokStar",
          "package": "language-lua",
          "partial": "LTok Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethen\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokThen",
          "package": "language-lua",
          "signature": "LTokThen",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "then",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokThen",
          "package": "language-lua",
          "partial": "LTok Then",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrue\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokTrue",
          "package": "language-lua",
          "signature": "LTokTrue",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "true",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokTrue",
          "package": "language-lua",
          "partial": "LTok True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euntil\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokUntil",
          "package": "language-lua",
          "signature": "LTokUntil",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "until",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokUntil",
          "package": "language-lua",
          "partial": "LTok Until",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhile\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "LTokWhile",
          "package": "language-lua",
          "signature": "LTokWhile",
          "source": "src/Language-Lua-Token.html#LToken",
          "type": "function"
        },
        "index": {
          "description": "while",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "LTokWhile",
          "package": "language-lua",
          "partial": "LTok While",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:LTokWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial function, returns value of \u003ccode\u003e\u003ca\u003eLTokNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eLTokSLit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLTokIdent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Lua.Token",
          "name": "tokenValue",
          "package": "language-lua",
          "signature": "LToken -\u003e String",
          "source": "src/Language-Lua-Token.html#tokenValue",
          "type": "function"
        },
        "index": {
          "description": "Partial function returns value of LTokNum LTokSLit and LTokIdent",
          "hierarchy": "Language Lua Token",
          "module": "Language.Lua.Token",
          "name": "tokenValue",
          "normalized": "LToken-\u003eString",
          "package": "language-lua",
          "partial": "Value",
          "signature": "LToken-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Token.html#v:tokenValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLua 5.2 syntax tree, as specified in \u003ca\u003ehttp://www.lua.org/manual/5.2/manual.html#9\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Lua.Types",
          "name": "Types",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Lua syntax tree as specified in http www.lua.org manual manual.html",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Types",
          "package": "language-lua",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Annotated",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Annotated",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Annotated",
          "package": "language-lua",
          "partial": "Annotated",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:Annotated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Binop",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Binop",
          "package": "language-lua",
          "partial": "Binop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:Binop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block is list of statements with optional return statement.\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "Block",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Block",
          "type": "data"
        },
        "index": {
          "description": "block is list of statements with optional return statement",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Block",
          "package": "language-lua",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Exp",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Exp",
          "package": "language-lua",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "FunArg",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#FunArg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunArg",
          "package": "language-lua",
          "partial": "Fun Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:FunArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "FunBody",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#FunBody",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunBody",
          "package": "language-lua",
          "partial": "Fun Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:FunBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "FunCall",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#FunCall",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunCall",
          "package": "language-lua",
          "partial": "Fun Call",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:FunCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "FunDef",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#FunDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunDef",
          "package": "language-lua",
          "partial": "Fun Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:FunDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "FunName",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#FunName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunName",
          "package": "language-lua",
          "partial": "Fun Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:FunName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Name",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Name",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Name",
          "package": "language-lua",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "PrefixExp",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#PrefixExp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "PrefixExp",
          "package": "language-lua",
          "partial": "Prefix Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:PrefixExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Stat",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Stat",
          "package": "language-lua",
          "partial": "Stat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:Stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Table",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Table",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Table",
          "package": "language-lua",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "TableField",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#TableField",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "TableField",
          "package": "language-lua",
          "partial": "Table Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:TableField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Unop",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Unop",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Unop",
          "package": "language-lua",
          "partial": "Unop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:Unop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Var",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Var",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Var",
          "package": "language-lua",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Add",
          "package": "language-lua",
          "signature": "Add a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Add",
          "package": "language-lua",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "And",
          "package": "language-lua",
          "signature": "And a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "And",
          "package": "language-lua",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist of args\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "Args",
          "package": "language-lua",
          "signature": "Args a [Exp a]",
          "source": "src/Language-Lua-Types.html#FunArg",
          "type": "function"
        },
        "index": {
          "description": "list of args",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Args",
          "normalized": "Args a[Exp a]",
          "package": "language-lua",
          "partial": "Args",
          "signature": "Args a[Exp a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evar1, var2 .. = exp1, exp2 ..\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Assign",
          "package": "language-lua",
          "signature": "Assign a [Var a] [Exp a]",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Assign\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Assign\"]"
        },
        "index": {
          "description": "var1 var2 exp1 exp2",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Assign",
          "normalized": "Assign a[Var a][Exp a]",
          "package": "language-lua",
          "partial": "Assign",
          "signature": "Assign a[Var a][Exp a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary operators, \u003cem\u003e+ - * ^ % .. \u003c \u003c= \u003e \u003e= == ~= and or\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Binop",
          "package": "language-lua",
          "signature": "Binop a (Binop a) (Exp a) (Exp a)",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Binop\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Binop\"]"
        },
        "index": {
          "description": "binary operators and or",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Binop",
          "package": "language-lua",
          "partial": "Binop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Binop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Block",
          "package": "language-lua",
          "signature": "Block a [Stat a] (Maybe [Exp a])",
          "source": "src/Language-Lua-Types.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Block\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Block\"]"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Block",
          "normalized": "Block a[Stat a](Maybe[Exp a])",
          "package": "language-lua",
          "partial": "Block",
          "signature": "Block a[Stat a](Maybe[Exp a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Bool",
          "package": "language-lua",
          "signature": "Bool a Bool",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Bool\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Bool\"]"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Bool",
          "package": "language-lua",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebreak\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Break",
          "package": "language-lua",
          "signature": "Break a",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Break\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Break\"]"
        },
        "index": {
          "description": "break",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Break",
          "package": "language-lua",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Concat",
          "package": "language-lua",
          "signature": "Concat a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Concat",
          "package": "language-lua",
          "partial": "Concat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Div",
          "package": "language-lua",
          "signature": "Div a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Div",
          "package": "language-lua",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edo .. end\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Do",
          "package": "language-lua",
          "signature": "Do a (Block a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Do\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Do\"]"
        },
        "index": {
          "description": "do end",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Do",
          "package": "language-lua",
          "partial": "Do",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Do"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003efunction (..) .. end\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "EFunDef",
          "package": "language-lua",
          "signature": "EFunDef a (FunDef a)",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:EFunDef\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:EFunDef\"]"
        },
        "index": {
          "description": "function end",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "EFunDef",
          "package": "language-lua",
          "partial": "EFun Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:EFunDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "EQ",
          "package": "language-lua",
          "signature": "EQ a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "EQ",
          "package": "language-lua",
          "partial": "EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e;\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "EmptyStat",
          "package": "language-lua",
          "signature": "EmptyStat a",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:EmptyStat\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:EmptyStat\"]"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "EmptyStat",
          "package": "language-lua",
          "partial": "Empty Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:EmptyStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Exp",
          "package": "language-lua",
          "signature": "Exp a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Exp",
          "package": "language-lua",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e[exp] = exp\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "ExpField",
          "package": "language-lua",
          "signature": "ExpField a (Exp a) (Exp a)",
          "source": "src/Language-Lua-Types.html#TableField",
          "type": "function"
        },
        "index": {
          "description": "exp exp",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "ExpField",
          "package": "language-lua",
          "partial": "Exp Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:ExpField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Field",
          "package": "language-lua",
          "signature": "Field a (Exp a)",
          "source": "src/Language-Lua-Types.html#TableField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Field",
          "package": "language-lua",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor x in .. do .. end\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "ForIn",
          "package": "language-lua",
          "signature": "ForIn a [Name a] [Exp a] (Block a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:ForIn\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:ForIn\"]"
        },
        "index": {
          "description": "for in do end",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "ForIn",
          "normalized": "ForIn a[Name a][Exp a](Block a)",
          "package": "language-lua",
          "partial": "For In",
          "signature": "ForIn a[Name a][Exp a](Block a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:ForIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor x=start, end [, step] do .. end\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "ForRange",
          "package": "language-lua",
          "signature": "ForRange a (Name a) (Exp a) (Exp a) (Maybe (Exp a)) (Block a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:ForRange\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:ForRange\"]"
        },
        "index": {
          "description": "for start end step do end",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "ForRange",
          "package": "language-lua",
          "partial": "For Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:ForRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction \u003cvar\u003e (..) .. end\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "FunAssign",
          "package": "language-lua",
          "signature": "FunAssign a (FunName a) (FunBody a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:FunAssign\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:FunAssign\"]"
        },
        "index": {
          "description": "function var end",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunAssign",
          "package": "language-lua",
          "partial": "Fun Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:FunAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(args, vararg, block)\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "FunBody",
          "package": "language-lua",
          "signature": "FunBody a [Name a] (Maybe a) (Block a)",
          "source": "src/Language-Lua-Types.html#FunBody",
          "type": "function"
        },
        "index": {
          "description": "args vararg block",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunBody",
          "normalized": "FunBody a[Name a](Maybe a)(Block a)",
          "package": "language-lua",
          "partial": "Fun Body",
          "signature": "FunBody a[Name a](Maybe a)(Block a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:FunBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction call\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "FunCall",
          "package": "language-lua",
          "signature": "FunCall a (FunCall a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:FunCall\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:FunCall\"]"
        },
        "index": {
          "description": "function call",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunCall",
          "package": "language-lua",
          "partial": "Fun Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:FunCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "FunDef",
          "package": "language-lua",
          "signature": "FunDef a (FunBody a)",
          "source": "src/Language-Lua-Types.html#FunDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunDef",
          "package": "language-lua",
          "partial": "Fun Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:FunDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "FunName",
          "package": "language-lua",
          "signature": "FunName a (Name a) [Name a] (Maybe (Name a))",
          "source": "src/Language-Lua-Types.html#FunName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "FunName",
          "normalized": "FunName a(Name a)[Name a](Maybe(Name a))",
          "package": "language-lua",
          "partial": "Fun Name",
          "signature": "FunName a(Name a)[Name a](Maybe(Name a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:FunName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "GT",
          "package": "language-lua",
          "signature": "GT a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "GT",
          "package": "language-lua",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "GTE",
          "package": "language-lua",
          "signature": "GTE a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "GTE",
          "package": "language-lua",
          "partial": "GTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:GTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egoto label\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Goto",
          "package": "language-lua",
          "signature": "Goto a (Name a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Goto\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Goto\"]"
        },
        "index": {
          "description": "goto label",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Goto",
          "package": "language-lua",
          "partial": "Goto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif .. then .. [elseif ..] [else ..] end\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "If",
          "package": "language-lua",
          "signature": "If a [(Exp a, Block a)] (Maybe (Block a))",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:If\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:If\"]"
        },
        "index": {
          "description": "if then elseif else end",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "If",
          "normalized": "If a[(Exp a,Block a)](Maybe(Block a))",
          "package": "language-lua",
          "partial": "If",
          "signature": "If a[(Exp a,Block a)](Maybe(Block a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "LT",
          "package": "language-lua",
          "signature": "LT a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "LT",
          "package": "language-lua",
          "partial": "LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:LT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "LTE",
          "package": "language-lua",
          "signature": "LTE a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "LTE",
          "package": "language-lua",
          "partial": "LTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:LTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elabel for goto\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Label",
          "package": "language-lua",
          "signature": "Label a (Name a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Label\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Label\"]"
        },
        "index": {
          "description": "label for goto",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Label",
          "package": "language-lua",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Len",
          "package": "language-lua",
          "signature": "Len a",
          "source": "src/Language-Lua-Types.html#Unop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Len",
          "package": "language-lua",
          "partial": "Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocal var1, var2 .. = exp1, exp2 ..\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "LocalAssign",
          "package": "language-lua",
          "signature": "LocalAssign a [Name a] (Maybe [Exp a])",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:LocalAssign\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:LocalAssign\"]"
        },
        "index": {
          "description": "local var1 var2 exp1 exp2",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "LocalAssign",
          "normalized": "LocalAssign a[Name a](Maybe[Exp a])",
          "package": "language-lua",
          "partial": "Local Assign",
          "signature": "LocalAssign a[Name a](Maybe[Exp a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:LocalAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocal function \u003cvar\u003e (..) .. end\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "LocalFunAssign",
          "package": "language-lua",
          "signature": "LocalFunAssign a (Name a) (FunBody a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:LocalFunAssign\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:LocalFunAssign\"]"
        },
        "index": {
          "description": "local function var end",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "LocalFunAssign",
          "package": "language-lua",
          "partial": "Local Fun Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:LocalFunAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eprefixexp : name ( funarg )\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "MethodCall",
          "package": "language-lua",
          "signature": "MethodCall a (PrefixExp a) (Name a) (FunArg a)",
          "source": "src/Language-Lua-Types.html#FunCall",
          "type": "function"
        },
        "index": {
          "description": "prefixexp name funarg",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "MethodCall",
          "package": "language-lua",
          "partial": "Method Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:MethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Mod",
          "package": "language-lua",
          "signature": "Mod a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Mod",
          "package": "language-lua",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Mul",
          "package": "language-lua",
          "signature": "Mul a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Mul",
          "package": "language-lua",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "NEQ",
          "package": "language-lua",
          "signature": "NEQ a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "NEQ",
          "package": "language-lua",
          "partial": "NEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:NEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Name",
          "package": "language-lua",
          "signature": "Name a String",
          "source": "src/Language-Lua-Types.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Name",
          "package": "language-lua",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003ename = exp\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "NamedField",
          "package": "language-lua",
          "signature": "NamedField a (Name a) (Exp a)",
          "source": "src/Language-Lua-Types.html#TableField",
          "type": "function"
        },
        "index": {
          "description": "name exp",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "NamedField",
          "package": "language-lua",
          "partial": "Named Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:NamedField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Neg",
          "package": "language-lua",
          "signature": "Neg a",
          "source": "src/Language-Lua-Types.html#Unop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Neg",
          "package": "language-lua",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Nil",
          "package": "language-lua",
          "signature": "Nil a",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Nil\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Nil\"]"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Nil",
          "package": "language-lua",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eprefixexp ( funarg )\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "NormalFunCall",
          "package": "language-lua",
          "signature": "NormalFunCall a (PrefixExp a) (FunArg a)",
          "source": "src/Language-Lua-Types.html#FunCall",
          "type": "function"
        },
        "index": {
          "description": "prefixexp funarg",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "NormalFunCall",
          "package": "language-lua",
          "partial": "Normal Fun Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:NormalFunCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Not",
          "package": "language-lua",
          "signature": "Not a",
          "source": "src/Language-Lua-Types.html#Unop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Not",
          "package": "language-lua",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Number",
          "package": "language-lua",
          "signature": "Number a String",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Number\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Number\"]"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Number",
          "package": "language-lua",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Or",
          "package": "language-lua",
          "signature": "Or a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Or",
          "package": "language-lua",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "PEFunCall",
          "package": "language-lua",
          "signature": "PEFunCall a (FunCall a)",
          "source": "src/Language-Lua-Types.html#PrefixExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "PEFunCall",
          "package": "language-lua",
          "partial": "PEFun Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:PEFunCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "PEVar",
          "package": "language-lua",
          "signature": "PEVar a (Var a)",
          "source": "src/Language-Lua-Types.html#PrefixExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "PEVar",
          "package": "language-lua",
          "partial": "PEVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:PEVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Paren",
          "package": "language-lua",
          "signature": "Paren a (Exp a)",
          "source": "src/Language-Lua-Types.html#PrefixExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Paren",
          "package": "language-lua",
          "partial": "Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Paren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "PrefixExp",
          "package": "language-lua",
          "signature": "PrefixExp a (PrefixExp a)",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:PrefixExp\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:PrefixExp\"]"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "PrefixExp",
          "package": "language-lua",
          "partial": "Prefix Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:PrefixExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepeat .. until ..\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Repeat",
          "package": "language-lua",
          "signature": "Repeat a (Block a) (Exp a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Repeat\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Repeat\"]"
        },
        "index": {
          "description": "repeat until",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Repeat",
          "package": "language-lua",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003etable[exp]\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "Select",
          "package": "language-lua",
          "signature": "Select a (PrefixExp a) (Exp a)",
          "source": "src/Language-Lua-Types.html#Var",
          "type": "function"
        },
        "index": {
          "description": "table exp",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Select",
          "package": "language-lua",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003etable.variable\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "SelectName",
          "package": "language-lua",
          "signature": "SelectName a (PrefixExp a) (Name a)",
          "source": "src/Language-Lua-Types.html#Var",
          "type": "function"
        },
        "index": {
          "description": "table.variable",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "SelectName",
          "package": "language-lua",
          "partial": "Select Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:SelectName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "String",
          "package": "language-lua",
          "signature": "String a String",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:String\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:String\"]"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "String",
          "package": "language-lua",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "StringArg",
          "package": "language-lua",
          "signature": "StringArg a String",
          "source": "src/Language-Lua-Types.html#FunArg",
          "type": "function"
        },
        "index": {
          "description": "string",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "StringArg",
          "package": "language-lua",
          "partial": "String Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:StringArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua.Types",
          "name": "Sub",
          "package": "language-lua",
          "signature": "Sub a",
          "source": "src/Language-Lua-Types.html#Binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Sub",
          "package": "language-lua",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist of table fields\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "Table",
          "package": "language-lua",
          "signature": "Table a [TableField a]",
          "source": "src/Language-Lua-Types.html#Table",
          "type": "function"
        },
        "index": {
          "description": "list of table fields",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Table",
          "normalized": "Table a[TableField a]",
          "package": "language-lua",
          "partial": "Table",
          "signature": "Table a[TableField a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etable constructor\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "TableArg",
          "package": "language-lua",
          "signature": "TableArg a (Table a)",
          "source": "src/Language-Lua-Types.html#FunArg",
          "type": "function"
        },
        "index": {
          "description": "table constructor",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "TableArg",
          "package": "language-lua",
          "partial": "Table Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:TableArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etable constructor\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "TableConst",
          "package": "language-lua",
          "signature": "TableConst a (Table a)",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:TableConst\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:TableConst\"]"
        },
        "index": {
          "description": "table constructor",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "TableConst",
          "package": "language-lua",
          "partial": "Table Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:TableConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunary operators, \u003cem\u003e- not #\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Unop",
          "package": "language-lua",
          "signature": "Unop a (Unop a) (Exp a)",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Unop\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Unop\"]"
        },
        "index": {
          "description": "unary operators not",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Unop",
          "package": "language-lua",
          "partial": "Unop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Unop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariable\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "VarName",
          "package": "language-lua",
          "signature": "VarName a (Name a)",
          "source": "src/Language-Lua-Types.html#Var",
          "type": "function"
        },
        "index": {
          "description": "variable",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "VarName",
          "package": "language-lua",
          "partial": "Var Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:VarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e...\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "Vararg",
          "package": "language-lua",
          "signature": "Vararg a",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Vararg\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:Vararg\"]"
        },
        "index": {
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "Vararg",
          "package": "language-lua",
          "partial": "Vararg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:Vararg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhile .. do .. end\n\u003c/p\u003e",
          "module": "[\"Language.Lua.Types\",\"Language.Lua\"]",
          "name": "While",
          "package": "language-lua",
          "signature": "While a (Exp a) (Block a)",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:While\",\"http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:While\"]"
        },
        "index": {
          "description": "while do end",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "While",
          "package": "language-lua",
          "partial": "While",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:While"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the annotation of an AST node. Note that only the annotation of\n   the node itself is affected, and not the annotations of any child nodes.\n   if all nodes in the AST tree are to be affected, use \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "amap",
          "package": "language-lua",
          "signature": "(l -\u003e l) -\u003e ast l -\u003e ast l",
          "source": "src/Language-Lua-Types.html#amap",
          "type": "method"
        },
        "index": {
          "description": "Change the annotation of an AST node Note that only the annotation of the node itself is affected and not the annotations of any child nodes if all nodes in the AST tree are to be affected use fmap",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "amap",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
          "package": "language-lua",
          "signature": "(l-\u003el)-\u003east l-\u003east l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:amap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the annotation of an AST node.\n\u003c/p\u003e",
          "module": "Language.Lua.Types",
          "name": "ann",
          "package": "language-lua",
          "signature": "ast l -\u003e l",
          "source": "src/Language-Lua-Types.html#ann",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the annotation of an AST node",
          "hierarchy": "Language Lua Types",
          "module": "Language.Lua.Types",
          "name": "ann",
          "normalized": "a b-\u003eb",
          "package": "language-lua",
          "signature": "ast l-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua-Types.html#v:ann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua",
          "name": "Lua",
          "package": "language-lua",
          "source": "src/Language-Lua.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Lua",
          "module": "Language.Lua",
          "name": "Lua",
          "package": "language-lua",
          "partial": "Lua",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block is list of statements with optional return statement.\n\u003c/p\u003e",
          "module": "Language.Lua",
          "name": "Block",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Block",
          "type": "data"
        },
        "index": {
          "description": "block is list of statements with optional return statement",
          "hierarchy": "Language Lua",
          "module": "Language.Lua",
          "name": "Block",
          "package": "language-lua",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua",
          "name": "Exp",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Exp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua",
          "module": "Language.Lua",
          "name": "Exp",
          "package": "language-lua",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua",
          "name": "Stat",
          "package": "language-lua",
          "source": "src/Language-Lua-Types.html#Stat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Lua",
          "module": "Language.Lua",
          "name": "Stat",
          "package": "language-lua",
          "partial": "Stat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#t:Stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Lua",
          "name": "pprint",
          "package": "language-lua",
          "signature": "a -\u003e Doc",
          "source": "src/Language-Lua-PrettyPrinter.html#pprint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Lua",
          "module": "Language.Lua",
          "name": "pprint",
          "normalized": "a-\u003eDoc",
          "package": "language-lua",
          "signature": "a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Language-Lua.html#v:pprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLexer/Parsec interface\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.LTok",
          "name": "LTok",
          "package": "language-lua",
          "source": "src/Text-Parsec-LTok.html",
          "type": "module"
        },
        "index": {
          "description": "Lexer Parsec interface",
          "hierarchy": "Text Parsec LTok",
          "module": "Text.Parsec.LTok",
          "name": "LTok",
          "package": "language-lua",
          "partial": "LTok",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Text-Parsec-LTok.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.LTok",
          "name": "Parser",
          "package": "language-lua",
          "source": "src/Text-Parsec-LTok.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec LTok",
          "module": "Text.Parsec.LTok",
          "name": "Parser",
          "package": "language-lua",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Text-Parsec-LTok.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eLTokIdent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.LTok",
          "name": "anyIdent",
          "package": "language-lua",
          "signature": "ParsecT [LTok] u m LToken",
          "source": "src/Text-Parsec-LTok.html#anyIdent",
          "type": "function"
        },
        "index": {
          "description": "Parses LTokIdent",
          "hierarchy": "Text Parsec LTok",
          "module": "Text.Parsec.LTok",
          "name": "anyIdent",
          "normalized": "ParsecT[LTok]a b LToken",
          "package": "language-lua",
          "partial": "Ident",
          "signature": "ParsecT[LTok]u m LToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Text-Parsec-LTok.html#v:anyIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eLTokNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.LTok",
          "name": "anyNum",
          "package": "language-lua",
          "signature": "ParsecT [LTok] u m LToken",
          "source": "src/Text-Parsec-LTok.html#anyNum",
          "type": "function"
        },
        "index": {
          "description": "Parses LTokNum",
          "hierarchy": "Text Parsec LTok",
          "module": "Text.Parsec.LTok",
          "name": "anyNum",
          "normalized": "ParsecT[LTok]a b LToken",
          "package": "language-lua",
          "partial": "Num",
          "signature": "ParsecT[LTok]u m LToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Text-Parsec-LTok.html#v:anyNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser succeeds whenever the given predicate returns true when called with\n parsed \u003ccode\u003e\u003ca\u003eLTok\u003c/a\u003e\u003c/code\u003e. Same as \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.LTok",
          "name": "satisfy",
          "package": "language-lua",
          "signature": "(LTok -\u003e Bool) -\u003e ParsecT [LTok] u m LToken",
          "source": "src/Text-Parsec-LTok.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "This parser succeeds whenever the given predicate returns true when called with parsed LTok Same as satisfy",
          "hierarchy": "Text Parsec LTok",
          "module": "Text.Parsec.LTok",
          "name": "satisfy",
          "normalized": "(LTok-\u003eBool)-\u003eParsecT[LTok]a b LToken",
          "package": "language-lua",
          "signature": "(LTok-\u003eBool)-\u003eParsecT[LTok]u m LToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Text-Parsec-LTok.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eLTokSLit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.LTok",
          "name": "string",
          "package": "language-lua",
          "signature": "ParsecT [LTok] u m LToken",
          "source": "src/Text-Parsec-LTok.html#string",
          "type": "function"
        },
        "index": {
          "description": "Parses LTokSLit",
          "hierarchy": "Text Parsec LTok",
          "module": "Text.Parsec.LTok",
          "name": "string",
          "normalized": "ParsecT[LTok]a b LToken",
          "package": "language-lua",
          "signature": "ParsecT[LTok]u m LToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Text-Parsec-LTok.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses given \u003ccode\u003e\u003ca\u003eLToken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.LTok",
          "name": "tok",
          "package": "language-lua",
          "signature": "LToken -\u003e ParsecT [LTok] u m LToken",
          "source": "src/Text-Parsec-LTok.html#tok",
          "type": "function"
        },
        "index": {
          "description": "Parses given LToken",
          "hierarchy": "Text Parsec LTok",
          "module": "Text.Parsec.LTok",
          "name": "tok",
          "normalized": "LToken-\u003eParsecT[LTok]a b LToken",
          "package": "language-lua",
          "signature": "LToken-\u003eParsecT[LTok]u m LToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-lua/docs/Text-Parsec-LTok.html#v:tok"
      }
    }
  ]
]