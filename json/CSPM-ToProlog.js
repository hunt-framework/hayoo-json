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
        "word": "CSPM-ToProlog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert an AST to Prolog. An experiment with the new GHC-Generic extentions\n This would be more compact with SYB.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CSPM.AstToProlog",
          "name": "AstToProlog",
          "package": "CSPM-ToProlog",
          "source": "src/Language-CSPM-AstToProlog.html",
          "type": "module"
        },
        "index": {
          "description": "Convert an AST to Prolog An experiment with the new GHC-Generic extentions This would be more compact with SYB",
          "hierarchy": "Language CSPM AstToProlog",
          "module": "Language.CSPM.AstToProlog",
          "name": "AstToProlog",
          "package": "CSPM-ToProlog",
          "partial": "Ast To Prolog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-AstToProlog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CSPM.AstToProlog",
          "name": "toProlog",
          "package": "CSPM-ToProlog",
          "signature": "d -\u003e Doc",
          "source": "src/Language-CSPM-AstToProlog.html#toProlog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CSPM AstToProlog",
          "module": "Language.CSPM.AstToProlog",
          "name": "toProlog",
          "normalized": "a-\u003eDoc",
          "package": "CSPM-ToProlog",
          "partial": "Prolog",
          "signature": "d-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-AstToProlog.html#v:toProlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTranslation of an AST into Prolog terms, suitable for the ProB CSPM-Interpreter\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CSPM.CompileAstToProlog",
          "name": "CompileAstToProlog",
          "package": "CSPM-ToProlog",
          "source": "src/Language-CSPM-CompileAstToProlog.html",
          "type": "module"
        },
        "index": {
          "description": "Translation of an AST into Prolog terms suitable for the ProB CSPM-Interpreter",
          "hierarchy": "Language CSPM CompileAstToProlog",
          "module": "Language.CSPM.CompileAstToProlog",
          "name": "CompileAstToProlog",
          "package": "CSPM-ToProlog",
          "partial": "Compile Ast To Prolog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-CompileAstToProlog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a \u003ca\u003eLModule\u003c/a\u003e into a \u003ca\u003eDoc\u003c/a\u003e containing a number of Prolog facts.\n The LModule must be a renamed,i.e. contain only unique \u003ca\u003eIdent\u003c/a\u003eifier.\n\u003c/p\u003e",
          "module": "Language.CSPM.CompileAstToProlog",
          "name": "cspToProlog",
          "package": "CSPM-ToProlog",
          "signature": "ModuleFromRenaming-\u003e Doc",
          "type": "function"
        },
        "index": {
          "description": "Translate LModule into Doc containing number of Prolog facts The LModule must be renamed i.e contain only unique Ident ifier",
          "hierarchy": "Language CSPM CompileAstToProlog",
          "module": "Language.CSPM.CompileAstToProlog",
          "name": "cspToProlog",
          "normalized": "ModuleFromRenaming-\u003eDoc",
          "package": "CSPM-ToProlog",
          "partial": "To Prolog",
          "signature": "ModuleFromRenaming-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-CompileAstToProlog.html#v:cspToProlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a source location to Prolog\n\u003c/p\u003e",
          "module": "Language.CSPM.CompileAstToProlog",
          "name": "mkSrcLoc",
          "package": "CSPM-ToProlog",
          "signature": "SrcLoc -\u003e Term",
          "source": "src/Language-CSPM-CompileAstToProlog.html#mkSrcLoc",
          "type": "function"
        },
        "index": {
          "description": "Translate source location to Prolog",
          "hierarchy": "Language CSPM CompileAstToProlog",
          "module": "Language.CSPM.CompileAstToProlog",
          "name": "mkSrcLoc",
          "normalized": "SrcLoc-\u003eTerm",
          "package": "CSPM-ToProlog",
          "partial": "Src Loc",
          "signature": "SrcLoc-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-CompileAstToProlog.html#v:mkSrcLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a \u003ca\u003eAstAnnotation\u003c/a\u003e with \u003ca\u003eUnqiueIdentifier\u003c/a\u003e (i.e. a Symboltable)\n into a \u003ca\u003eDoc\u003c/a\u003e containing Prolog facts\n\u003c/p\u003e",
          "module": "Language.CSPM.CompileAstToProlog",
          "name": "mkSymbolTable",
          "package": "CSPM-ToProlog",
          "signature": "AstAnnotation UniqueIdent -\u003e Doc",
          "source": "src/Language-CSPM-CompileAstToProlog.html#mkSymbolTable",
          "type": "function"
        },
        "index": {
          "description": "Translate AstAnnotation with UnqiueIdentifier i.e Symboltable into Doc containing Prolog facts",
          "hierarchy": "Language CSPM CompileAstToProlog",
          "module": "Language.CSPM.CompileAstToProlog",
          "name": "mkSymbolTable",
          "normalized": "AstAnnotation UniqueIdent-\u003eDoc",
          "package": "CSPM-ToProlog",
          "partial": "Symbol Table",
          "signature": "AstAnnotation UniqueIdent-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-CompileAstToProlog.html#v:mkSymbolTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTranslate a CSPM-specification to Prolog.\n This is the interface used by Prolog\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CSPM.TranslateToProlog",
          "name": "TranslateToProlog",
          "package": "CSPM-ToProlog",
          "source": "src/Language-CSPM-TranslateToProlog.html",
          "type": "module"
        },
        "index": {
          "description": "Translate CSPM-specification to Prolog This is the interface used by Prolog",
          "hierarchy": "Language CSPM TranslateToProlog",
          "module": "Language.CSPM.TranslateToProlog",
          "name": "TranslateToProlog",
          "package": "CSPM-ToProlog",
          "partial": "Translate To Prolog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-TranslateToProlog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the CSPM-ToProlog library\n\u003c/p\u003e",
          "module": "Language.CSPM.TranslateToProlog",
          "name": "toPrologVersion",
          "package": "CSPM-ToProlog",
          "signature": "Version",
          "source": "src/Language-CSPM-TranslateToProlog.html#toPrologVersion",
          "type": "function"
        },
        "index": {
          "description": "The version of the CSPM-ToProlog library",
          "hierarchy": "Language CSPM TranslateToProlog",
          "module": "Language.CSPM.TranslateToProlog",
          "name": "toPrologVersion",
          "package": "CSPM-ToProlog",
          "partial": "Prolog Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-TranslateToProlog.html#v:toPrologVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etranslateToProlog\u003c/a\u003e\u003c/code\u003e reads a CSPM specification from inFile\n and writes the Prolog representation to outFile.\n It handles all lexer and parser errors and catches all exceptions.\n\u003c/p\u003e",
          "module": "Language.CSPM.TranslateToProlog",
          "name": "translateToProlog",
          "package": "CSPM-ToProlog",
          "signature": "FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "translateToProlog reads CSPM specification from inFile and writes the Prolog representation to outFile It handles all lexer and parser errors and catches all exceptions",
          "hierarchy": "Language CSPM TranslateToProlog",
          "module": "Language.CSPM.TranslateToProlog",
          "name": "translateToProlog",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "CSPM-ToProlog",
          "partial": "To Prolog",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-TranslateToProlog.html#v:translateToProlog"
      }
    }
  ]
]