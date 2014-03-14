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
        "word": "CoreErlang"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCoreErlang parser.\n \u003ca\u003ehttp://www.it.uu.se/research/group/hipe/cerl/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CoreErlang.Parser",
          "name": "Parser",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "CoreErlang parser http www.it.uu.se research group hipe cerl",
          "hierarchy": "Language CoreErlang Parser",
          "module": "Language.CoreErlang.Parser",
          "name": "Parser",
          "package": "CoreErlang",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003eText.Parsec.Prim.parse\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Language.CoreErlang.Parser",
          "name": "ParseError",
          "package": "CoreErlang",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function Text.Parsec.Prim.parse ParseError is an instance of the Show class",
          "hierarchy": "Language CoreErlang Parser",
          "module": "Language.CoreErlang.Parser",
          "name": "ParseError",
          "package": "CoreErlang",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Parser.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse of a string, which should contain a complete CoreErlang module\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Parser",
          "name": "parseModule",
          "package": "CoreErlang",
          "signature": "String -\u003e Either ParseError (Ann Module)",
          "source": "src/Language-CoreErlang-Parser.html#parseModule",
          "type": "function"
        },
        "index": {
          "description": "Parse of string which should contain complete CoreErlang module",
          "hierarchy": "Language CoreErlang Parser",
          "module": "Language.CoreErlang.Parser",
          "name": "parseModule",
          "normalized": "String-\u003eEither ParseError(Ann Module)",
          "package": "CoreErlang",
          "partial": "Module",
          "signature": "String-\u003eEither ParseError(Ann Module)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Parser.html#v:parseModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printer for CoreErlang.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "Pretty",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printer for CoreErlang",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "Pretty",
          "package": "CoreErlang",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Pretty",
          "name": "Indent",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Pretty.html#Indent",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "Indent",
          "package": "CoreErlang",
          "partial": "Indent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#t:Indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRendering mode.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "Mode",
          "package": "CoreErlang",
          "type": "data"
        },
        "index": {
          "description": "Rendering mode",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "Mode",
          "package": "CoreErlang",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVarieties of layout we can use.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "PPLayout",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Pretty.html#PPLayout",
          "type": "data"
        },
        "index": {
          "description": "Varieties of layout we can use",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "PPLayout",
          "package": "CoreErlang",
          "partial": "PPLayout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#t:PPLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printing parameters.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "PPMode",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "data"
        },
        "index": {
          "description": "Pretty-printing parameters",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "PPMode",
          "package": "CoreErlang",
          "partial": "PPMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#t:PPMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThings that can be pretty-printed, including all the syntactic objects\n in \u003ca\u003eLanguage.CoreErlang.Syntax\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "Pretty",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "Things that can be pretty-printed including all the syntactic objects in Language.CoreErlang.Syntax",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "Pretty",
          "package": "CoreErlang",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rendering style.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "Style",
          "package": "CoreErlang",
          "type": "data"
        },
        "index": {
          "description": "rendering style",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "Style",
          "package": "CoreErlang",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo indentation, infinitely long lines\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "LeftMode",
          "package": "CoreErlang",
          "signature": "LeftMode",
          "type": "function"
        },
        "index": {
          "description": "No indentation infinitely long lines",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "LeftMode",
          "package": "CoreErlang",
          "partial": "Left Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:LeftMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll on one line\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "OneLineMode",
          "package": "CoreErlang",
          "signature": "OneLineMode",
          "type": "function"
        },
        "index": {
          "description": "All on one line",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "OneLineMode",
          "package": "CoreErlang",
          "partial": "One Line Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:OneLineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclassical layout\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "PPDefault",
          "package": "CoreErlang",
          "signature": "PPDefault",
          "source": "src/Language-CoreErlang-Pretty.html#PPLayout",
          "type": "function"
        },
        "index": {
          "description": "classical layout",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "PPDefault",
          "package": "CoreErlang",
          "partial": "PPDefault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:PPDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Pretty",
          "name": "PPMode",
          "package": "CoreErlang",
          "signature": "PPMode",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "PPMode",
          "package": "CoreErlang",
          "partial": "PPMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:PPMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeverything on a single line\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "PPNoLayout",
          "package": "CoreErlang",
          "signature": "PPNoLayout",
          "source": "src/Language-CoreErlang-Pretty.html#PPLayout",
          "type": "function"
        },
        "index": {
          "description": "everything on single line",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "PPNoLayout",
          "package": "CoreErlang",
          "partial": "PPNo Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:PPNoLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "PageMode",
          "package": "CoreErlang",
          "signature": "PageMode",
          "type": "function"
        },
        "index": {
          "description": "Normal",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "PageMode",
          "package": "CoreErlang",
          "partial": "Page Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:PageMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Pretty",
          "name": "Style",
          "package": "CoreErlang",
          "signature": "Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "Style",
          "package": "CoreErlang",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith zig-zag cuts\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "ZigZagMode",
          "package": "CoreErlang",
          "signature": "ZigZagMode",
          "type": "function"
        },
        "index": {
          "description": "With zig-zag cuts",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "ZigZagMode",
          "package": "CoreErlang",
          "partial": "Zig Zag Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:ZigZagMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindentation of the alternatives\n in a \u003ccode\u003ecase\u003c/code\u003e expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "altIndent",
          "package": "CoreErlang",
          "signature": "Indent",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "function"
        },
        "index": {
          "description": "indentation of the alternatives in case expression",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "altIndent",
          "package": "CoreErlang",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:altIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindentation of the declarations\n in a \u003ccode\u003ecase\u003c/code\u003e expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "caseIndent",
          "package": "CoreErlang",
          "signature": "Indent",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "function"
        },
        "index": {
          "description": "indentation of the declarations in case expression",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "caseIndent",
          "package": "CoreErlang",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:caseIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default mode: pretty-print using sensible defaults.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "defaultMode",
          "package": "CoreErlang",
          "signature": "PPMode",
          "source": "src/Language-CoreErlang-Pretty.html#defaultMode",
          "type": "function"
        },
        "index": {
          "description": "The default mode pretty-print using sensible defaults",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "defaultMode",
          "package": "CoreErlang",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:defaultMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindentation of the declarations\n in a function definition\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "fundefIndent",
          "package": "CoreErlang",
          "signature": "Indent",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "function"
        },
        "index": {
          "description": "indentation of the declarations in function definition",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "fundefIndent",
          "package": "CoreErlang",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:fundefIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindentation of the declarations\n in a \u003ccode\u003elambda\u003c/code\u003e expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "lambdaIndent",
          "package": "CoreErlang",
          "signature": "Indent",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "function"
        },
        "index": {
          "description": "indentation of the declarations in lambda expression",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "lambdaIndent",
          "package": "CoreErlang",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:lambdaIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printing style to use\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "layout",
          "package": "CoreErlang",
          "signature": "PPLayout",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "function"
        },
        "index": {
          "description": "Pretty-printing style to use",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "layout",
          "package": "CoreErlang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindentation of the declarations\n in a \u003ccode\u003elet\u003c/code\u003e expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "letIndent",
          "package": "CoreErlang",
          "signature": "Indent",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "function"
        },
        "index": {
          "description": "indentation of the declarations in let expression",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "letIndent",
          "package": "CoreErlang",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:letIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindentation of the declarations\n in a \u003ccode\u003eletrec\u003c/code\u003e expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "letrecIndent",
          "package": "CoreErlang",
          "signature": "Indent",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "function"
        },
        "index": {
          "description": "indentation of the declarations in letrec expression",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "letrecIndent",
          "package": "CoreErlang",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:letrecIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of line, in chars\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "lineLength",
          "package": "CoreErlang",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Length of line in chars",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "lineLength",
          "package": "CoreErlang",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:lineLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rendering mode\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "mode",
          "package": "CoreErlang",
          "signature": "Mode",
          "type": "function"
        },
        "index": {
          "description": "The rendering mode",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "mode",
          "package": "CoreErlang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindentation added for continuation\n lines that would otherwise be offside\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "onsideIndent",
          "package": "CoreErlang",
          "signature": "Indent",
          "source": "src/Language-CoreErlang-Pretty.html#PPMode",
          "type": "function"
        },
        "index": {
          "description": "indentation added for continuation lines that would otherwise be offside",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "onsideIndent",
          "package": "CoreErlang",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:onsideIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty-print with the default style and \u003ccode\u003e\u003ca\u003edefaultMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "prettyPrint",
          "package": "CoreErlang",
          "signature": "a -\u003e String",
          "source": "src/Language-CoreErlang-Pretty.html#prettyPrint",
          "type": "function"
        },
        "index": {
          "description": "pretty-print with the default style and defaultMode",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "prettyPrint",
          "normalized": "a-\u003eString",
          "package": "CoreErlang",
          "partial": "Print",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:prettyPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty-print with a given style and mode.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "prettyPrintStyleMode",
          "package": "CoreErlang",
          "signature": "Style -\u003e PPMode -\u003e a -\u003e String",
          "source": "src/Language-CoreErlang-Pretty.html#prettyPrintStyleMode",
          "type": "function"
        },
        "index": {
          "description": "pretty-print with given style and mode",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "prettyPrintStyleMode",
          "normalized": "Style-\u003ePPMode-\u003ea-\u003eString",
          "package": "CoreErlang",
          "partial": "Print Style Mode",
          "signature": "Style-\u003ePPMode-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:prettyPrintStyleMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty-print with the default style and a given mode.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "prettyPrintWithMode",
          "package": "CoreErlang",
          "signature": "PPMode -\u003e a -\u003e String",
          "source": "src/Language-CoreErlang-Pretty.html#prettyPrintWithMode",
          "type": "function"
        },
        "index": {
          "description": "pretty-print with the default style and given mode",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "prettyPrintWithMode",
          "normalized": "PPMode-\u003ea-\u003eString",
          "package": "CoreErlang",
          "partial": "Print With Mode",
          "signature": "PPMode-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:prettyPrintWithMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRatio of ribbon length to line length\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "ribbonsPerLine",
          "package": "CoreErlang",
          "signature": "Float",
          "type": "function"
        },
        "index": {
          "description": "Ratio of ribbon length to line length",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "ribbonsPerLine",
          "package": "CoreErlang",
          "partial": "Per Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:ribbonsPerLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default style (\u003ccode\u003emode=PageMode, lineLength=100, ribbonsPerLine=1.5\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Pretty",
          "name": "style",
          "package": "CoreErlang",
          "signature": "Style",
          "type": "function"
        },
        "index": {
          "description": "The default style mode PageMode lineLength ribbonsPerLine",
          "hierarchy": "Language CoreErlang Pretty",
          "module": "Language.CoreErlang.Pretty",
          "name": "style",
          "package": "CoreErlang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Pretty.html#v:style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA suite of datatypes describing the abstract syntax of CoreErlang 1.0.3.\n \u003ca\u003ehttp://www.it.uu.se/research/group/hipe/cerl/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Syntax",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "suite of datatypes describing the abstract syntax of CoreErlang http www.it.uu.se research group hipe cerl",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Syntax",
          "package": "CoreErlang",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias, used in patterns\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Alias",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Alias",
          "type": "data"
        },
        "index": {
          "description": "An alias used in patterns",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Alias",
          "package": "CoreErlang",
          "partial": "Alias",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Alias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003cem\u003ealt\u003c/em\u003e in a \u003ccode\u003ecase\u003c/code\u003e expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Alt",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Alt",
          "type": "data"
        },
        "index": {
          "description": "An alt in case expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Alt",
          "package": "CoreErlang",
          "partial": "Alt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn annotation for modules, variables, ...\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Ann",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Ann",
          "type": "data"
        },
        "index": {
          "description": "An annotation for modules variables",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Ann",
          "package": "CoreErlang",
          "partial": "Ann",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Ann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is used to represent atoms\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Atom",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Atom",
          "type": "data"
        },
        "index": {
          "description": "This type is used to represent atoms",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Atom",
          "package": "CoreErlang",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitstring.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "BitString",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#BitString",
          "type": "data"
        },
        "index": {
          "description": "bitstring",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "BitString",
          "package": "CoreErlang",
          "partial": "Bit String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:BitString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is used to represent constants\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Const",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Const",
          "type": "data"
        },
        "index": {
          "description": "This type is used to represent constants",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Const",
          "package": "CoreErlang",
          "partial": "Const",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoreErlang expression.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Exp",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "data"
        },
        "index": {
          "description": "CoreErlang expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Exp",
          "package": "CoreErlang",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoreErlang expressions.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Exps",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Exps",
          "type": "data"
        },
        "index": {
          "description": "CoreErlang expressions",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Exps",
          "package": "CoreErlang",
          "partial": "Exps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Exps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is used to represent lambdas\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "FunDef",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#FunDef",
          "type": "data"
        },
        "index": {
          "description": "This type is used to represent lambdas",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "FunDef",
          "package": "CoreErlang",
          "partial": "Fun Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:FunDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is used to represent function names\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Function",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Function",
          "type": "data"
        },
        "index": {
          "description": "This type is used to represent function names",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Function",
          "package": "CoreErlang",
          "partial": "Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA guarded alternative \u003ccode\u003ewhen\u003c/code\u003e \u003cem\u003eexp\u003c/em\u003e \u003ccode\u003e-\u003e\u003c/code\u003e \u003cem\u003eexp\u003c/em\u003e.\n The first expression will be Boolean-valued.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Guard",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Guard",
          "type": "data"
        },
        "index": {
          "description": "guarded alternative when exp exp The first expression will be Boolean-valued",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Guard",
          "package": "CoreErlang",
          "partial": "Guard",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of expressions\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "List",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#List",
          "type": "data"
        },
        "index": {
          "description": "list of expressions",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "List",
          "package": "CoreErlang",
          "partial": "List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eliteral\u003c/em\u003e.\n Values of this type hold the abstract value of the literal, not the\n precise string representation used. For example, \u003ccode\u003e10\u003c/code\u003e, \u003ccode\u003e0o12\u003c/code\u003e and \u003ccode\u003e0xa\u003c/code\u003e\n have the same representation.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Literal",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Literal",
          "type": "data"
        },
        "index": {
          "description": "literal Values of this type hold the abstract value of the literal not the precise string representation used For example o12 and xa have the same representation",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Literal",
          "package": "CoreErlang",
          "partial": "Literal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CoreErlang source module.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Module",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Module",
          "type": "data"
        },
        "index": {
          "description": "CoreErlang source module",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Module",
          "package": "CoreErlang",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pattern, to be matched against a value.\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Pat",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Pat",
          "type": "data"
        },
        "index": {
          "description": "pattern to be matched against value",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Pat",
          "package": "CoreErlang",
          "partial": "Pat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "Pats",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Pats",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Pats",
          "package": "CoreErlang",
          "partial": "Pats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Pats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe timeout of a receive expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "TimeOut",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#TimeOut",
          "type": "data"
        },
        "index": {
          "description": "The timeout of receive expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "TimeOut",
          "package": "CoreErlang",
          "partial": "Time Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:TimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is used to represent variables\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Var",
          "package": "CoreErlang",
          "source": "src/Language-CoreErlang-Syntax.html#Var",
          "type": "type"
        },
        "index": {
          "description": "This type is used to represent variables",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Var",
          "package": "CoreErlang",
          "partial": "Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "Alias",
          "package": "CoreErlang",
          "signature": "Alias Var Pat",
          "source": "src/Language-CoreErlang-Syntax.html#Alias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Alias",
          "package": "CoreErlang",
          "partial": "Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Alias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "Alt",
          "package": "CoreErlang",
          "signature": "Alt Pats Guard Exps",
          "source": "src/Language-CoreErlang-Syntax.html#Alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Alt",
          "package": "CoreErlang",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecore erlang annotated construct\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Ann",
          "package": "CoreErlang",
          "signature": "Ann a [Const]",
          "source": "src/Language-CoreErlang-Syntax.html#Ann",
          "type": "function"
        },
        "index": {
          "description": "core erlang annotated construct",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Ann",
          "normalized": "Ann a[Const]",
          "package": "CoreErlang",
          "partial": "Ann",
          "signature": "Ann a[Const]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Ann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplication\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "App",
          "package": "CoreErlang",
          "signature": "App Exps [Exps]",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "application",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "App",
          "normalized": "App Exps[Exps]",
          "package": "CoreErlang",
          "partial": "App",
          "signature": "App Exps[Exps]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "Atom",
          "package": "CoreErlang",
          "signature": "Atom String",
          "source": "src/Language-CoreErlang-Syntax.html#Atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Atom",
          "package": "CoreErlang",
          "partial": "Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Binary",
          "package": "CoreErlang",
          "signature": "Binary [BitString Exps]",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "binary expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Binary",
          "normalized": "Binary[BitString Exps]",
          "package": "CoreErlang",
          "partial": "Binary",
          "signature": "Binary[BitString Exps]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "BitString",
          "package": "CoreErlang",
          "signature": "BitString a [Exps]",
          "source": "src/Language-CoreErlang-Syntax.html#BitString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "BitString",
          "normalized": "BitString a[Exps]",
          "package": "CoreErlang",
          "partial": "Bit String",
          "signature": "BitString a[Exps]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:BitString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "CList",
          "package": "CoreErlang",
          "signature": "CList (List Const)",
          "source": "src/Language-CoreErlang-Syntax.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "CList",
          "package": "CoreErlang",
          "partial": "CList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:CList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "CLit",
          "package": "CoreErlang",
          "signature": "CLit Literal",
          "source": "src/Language-CoreErlang-Syntax.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "CLit",
          "package": "CoreErlang",
          "partial": "CLit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:CLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "CTuple",
          "package": "CoreErlang",
          "signature": "CTuple [Const]",
          "source": "src/Language-CoreErlang-Syntax.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "CTuple",
          "normalized": "CTuple[Const]",
          "package": "CoreErlang",
          "partial": "CTuple",
          "signature": "CTuple[Const]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:CTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecase\u003c/code\u003e \u003cem\u003eexp\u003c/em\u003e \u003ccode\u003eof\u003c/code\u003e \u003cem\u003ealts\u003c/em\u003e end\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Case",
          "package": "CoreErlang",
          "signature": "Case Exps [Ann Alt]",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "case exp of alts end",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Case",
          "normalized": "Case Exps[Ann Alt]",
          "package": "CoreErlang",
          "partial": "Case",
          "signature": "Case Exps[Ann Alt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecatch expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Catch",
          "package": "CoreErlang",
          "signature": "Catch Exps",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "catch expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Catch",
          "package": "CoreErlang",
          "partial": "Catch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecore erlang construct\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Constr",
          "package": "CoreErlang",
          "signature": "Constr a",
          "source": "src/Language-CoreErlang-Syntax.html#Ann",
          "type": "function"
        },
        "index": {
          "description": "core erlang construct",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Constr",
          "package": "CoreErlang",
          "partial": "Constr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Constr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingle expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Exp",
          "package": "CoreErlang",
          "signature": "Exp (Ann Exp)",
          "source": "src/Language-CoreErlang-Syntax.html#Exps",
          "type": "function"
        },
        "index": {
          "description": "single expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Exp",
          "package": "CoreErlang",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist of expressions\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Exps",
          "package": "CoreErlang",
          "signature": "Exps (Ann [Ann Exp])",
          "source": "src/Language-CoreErlang-Syntax.html#Exps",
          "type": "function"
        },
        "index": {
          "description": "list of expressions",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Exps",
          "normalized": "Exps(Ann[Ann Exp])",
          "package": "CoreErlang",
          "partial": "Exps",
          "signature": "Exps(Ann[Ann Exp])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Exps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction name\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Fun",
          "package": "CoreErlang",
          "signature": "Fun Function",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "function name",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Fun",
          "package": "CoreErlang",
          "partial": "Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "FunDef",
          "package": "CoreErlang",
          "signature": "FunDef (Ann Function) (Ann Exp)",
          "source": "src/Language-CoreErlang-Syntax.html#FunDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "FunDef",
          "package": "CoreErlang",
          "partial": "Fun Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:FunDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "Function",
          "package": "CoreErlang",
          "signature": "Function (Atom, Integer)",
          "source": "src/Language-CoreErlang-Syntax.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Function",
          "normalized": "Function(Atom,Integer)",
          "package": "CoreErlang",
          "partial": "Function",
          "signature": "Function(Atom,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "Guard",
          "package": "CoreErlang",
          "signature": "Guard Exps",
          "source": "src/Language-CoreErlang-Syntax.html#Guard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Guard",
          "package": "CoreErlang",
          "partial": "Guard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "L",
          "package": "CoreErlang",
          "signature": "L [a]",
          "source": "src/Language-CoreErlang-Syntax.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "L",
          "normalized": "L[a]",
          "package": "CoreErlang",
          "signature": "L[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eatom literal\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "LAtom",
          "package": "CoreErlang",
          "signature": "LAtom Atom",
          "source": "src/Language-CoreErlang-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "atom literal",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "LAtom",
          "package": "CoreErlang",
          "partial": "LAtom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:LAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echaracter literal\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "LChar",
          "package": "CoreErlang",
          "signature": "LChar Char",
          "source": "src/Language-CoreErlang-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "character literal",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "LChar",
          "package": "CoreErlang",
          "partial": "LChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:LChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efloating point literal\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "LFloat",
          "package": "CoreErlang",
          "signature": "LFloat Double",
          "source": "src/Language-CoreErlang-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "floating point literal",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "LFloat",
          "package": "CoreErlang",
          "partial": "LFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:LFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger literal\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "LInt",
          "package": "CoreErlang",
          "signature": "LInt Integer",
          "source": "src/Language-CoreErlang-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "integer literal",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "LInt",
          "package": "CoreErlang",
          "partial": "LInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:LInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "LL",
          "package": "CoreErlang",
          "signature": "LL [a] a",
          "source": "src/Language-CoreErlang-Syntax.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "LL",
          "normalized": "LL[a]a",
          "package": "CoreErlang",
          "partial": "LL",
          "signature": "LL[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:LL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eempty list\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "LNil",
          "package": "CoreErlang",
          "signature": "LNil",
          "source": "src/Language-CoreErlang-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "empty list",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "LNil",
          "package": "CoreErlang",
          "partial": "LNil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:LNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring literal\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "LString",
          "package": "CoreErlang",
          "signature": "LString String",
          "source": "src/Language-CoreErlang-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "string literal",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "LString",
          "package": "CoreErlang",
          "partial": "LString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:LString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elambda expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Lambda",
          "package": "CoreErlang",
          "signature": "Lambda [Var] Exps",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "lambda expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Lambda",
          "normalized": "Lambda[Var]Exps",
          "package": "CoreErlang",
          "partial": "Lambda",
          "signature": "Lambda[Var]Exps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocal declaration\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Let",
          "package": "CoreErlang",
          "signature": "Let ([Var], Exps) Exps",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "local declaration",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Let",
          "normalized": "Let([Var],Exps)Exps",
          "package": "CoreErlang",
          "partial": "Let",
          "signature": "Let([Var],Exps)Exps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Let"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eletrec expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "LetRec",
          "package": "CoreErlang",
          "signature": "LetRec [FunDef] Exps",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "letrec expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "LetRec",
          "normalized": "LetRec[FunDef]Exps",
          "package": "CoreErlang",
          "partial": "Let Rec",
          "signature": "LetRec[FunDef]Exps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:LetRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "List",
          "package": "CoreErlang",
          "signature": "List (List Exps)",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "list expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "List",
          "package": "CoreErlang",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eliteral constant\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Lit",
          "package": "CoreErlang",
          "signature": "Lit Literal",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "literal constant",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Lit",
          "package": "CoreErlang",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodule call\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "ModCall",
          "package": "CoreErlang",
          "signature": "ModCall (Exps, Exps) [Exps]",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "module call",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "ModCall",
          "normalized": "ModCall(Exps,Exps)[Exps]",
          "package": "CoreErlang",
          "partial": "Mod Call",
          "signature": "ModCall(Exps,Exps)[Exps]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:ModCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "Module",
          "package": "CoreErlang",
          "signature": "Module Atom [Function] [(Atom, Const)] [FunDef]",
          "source": "src/Language-CoreErlang-Syntax.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Module",
          "normalized": "Module Atom[Function][(Atom,Const)][FunDef]",
          "package": "CoreErlang",
          "partial": "Module",
          "signature": "Module Atom[Function][(Atom,Const)][FunDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoperator application\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Op",
          "package": "CoreErlang",
          "signature": "Op Atom [Exps]",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "operator application",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Op",
          "normalized": "Op Atom[Exps]",
          "package": "CoreErlang",
          "partial": "Op",
          "signature": "Op Atom[Exps]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealias pattern\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "PAlias",
          "package": "CoreErlang",
          "signature": "PAlias Alias",
          "source": "src/Language-CoreErlang-Syntax.html#Pat",
          "type": "function"
        },
        "index": {
          "description": "alias pattern",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "PAlias",
          "package": "CoreErlang",
          "partial": "PAlias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:PAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist of bitstring patterns\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "PBinary",
          "package": "CoreErlang",
          "signature": "PBinary [BitString Pat]",
          "source": "src/Language-CoreErlang-Syntax.html#Pat",
          "type": "function"
        },
        "index": {
          "description": "list of bitstring patterns",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "PBinary",
          "normalized": "PBinary[BitString Pat]",
          "package": "CoreErlang",
          "partial": "PBinary",
          "signature": "PBinary[BitString Pat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:PBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist pattern\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "PList",
          "package": "CoreErlang",
          "signature": "PList (List Pat)",
          "source": "src/Language-CoreErlang-Syntax.html#Pat",
          "type": "function"
        },
        "index": {
          "description": "list pattern",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "PList",
          "package": "CoreErlang",
          "partial": "PList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:PList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eliteral constant\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "PLit",
          "package": "CoreErlang",
          "signature": "PLit Literal",
          "source": "src/Language-CoreErlang-Syntax.html#Pat",
          "type": "function"
        },
        "index": {
          "description": "literal constant",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "PLit",
          "package": "CoreErlang",
          "partial": "PLit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:PLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etuple pattern\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "PTuple",
          "package": "CoreErlang",
          "signature": "PTuple [Pat]",
          "source": "src/Language-CoreErlang-Syntax.html#Pat",
          "type": "function"
        },
        "index": {
          "description": "tuple pattern",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "PTuple",
          "normalized": "PTuple[Pat]",
          "package": "CoreErlang",
          "partial": "PTuple",
          "signature": "PTuple[Pat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:PTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariable\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "PVar",
          "package": "CoreErlang",
          "signature": "PVar Var",
          "source": "src/Language-CoreErlang-Syntax.html#Pat",
          "type": "function"
        },
        "index": {
          "description": "variable",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "PVar",
          "package": "CoreErlang",
          "partial": "PVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:PVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingle pattern\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Pat",
          "package": "CoreErlang",
          "signature": "Pat Pat",
          "source": "src/Language-CoreErlang-Syntax.html#Pats",
          "type": "function"
        },
        "index": {
          "description": "single pattern",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Pat",
          "package": "CoreErlang",
          "partial": "Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist of patterns\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Pats",
          "package": "CoreErlang",
          "signature": "Pats [Pat]",
          "source": "src/Language-CoreErlang-Syntax.html#Pats",
          "type": "function"
        },
        "index": {
          "description": "list of patterns",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Pats",
          "normalized": "Pats[Pat]",
          "package": "CoreErlang",
          "partial": "Pats",
          "signature": "Pats[Pat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Pats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereceive expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Rec",
          "package": "CoreErlang",
          "signature": "Rec [Ann Alt] TimeOut",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "receive expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Rec",
          "normalized": "Rec[Ann Alt]TimeOut",
          "package": "CoreErlang",
          "partial": "Rec",
          "signature": "Rec[Ann Alt]TimeOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esequencing\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Seq",
          "package": "CoreErlang",
          "signature": "Seq Exps Exps",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "sequencing",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Seq",
          "package": "CoreErlang",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CoreErlang.Syntax",
          "name": "TimeOut",
          "package": "CoreErlang",
          "signature": "TimeOut Exps Exps",
          "source": "src/Language-CoreErlang-Syntax.html#TimeOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "TimeOut",
          "package": "CoreErlang",
          "partial": "Time Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:TimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Try",
          "package": "CoreErlang",
          "signature": "Try Exps ([Var], Exps) ([Var], Exps)",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "try expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Try",
          "normalized": "Try Exps([Var],Exps)([Var],Exps)",
          "package": "CoreErlang",
          "partial": "Try",
          "signature": "Try Exps([Var],Exps)([Var],Exps)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etuple expression\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Tuple",
          "package": "CoreErlang",
          "signature": "Tuple [Exps]",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "tuple expression",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Tuple",
          "normalized": "Tuple[Exps]",
          "package": "CoreErlang",
          "partial": "Tuple",
          "signature": "Tuple[Exps]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariable\n\u003c/p\u003e",
          "module": "Language.CoreErlang.Syntax",
          "name": "Var",
          "package": "CoreErlang",
          "signature": "Var Var",
          "source": "src/Language-CoreErlang-Syntax.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "variable",
          "hierarchy": "Language CoreErlang Syntax",
          "module": "Language.CoreErlang.Syntax",
          "name": "Var",
          "package": "CoreErlang",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CoreErlang/docs/Language-CoreErlang-Syntax.html#v:Var"
      }
    }
  ]
]