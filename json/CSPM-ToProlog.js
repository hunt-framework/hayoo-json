[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-AstToProlog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert an AST to Prolog. An experiment with the new GHC-Generic extentions\n This would be more compact with SYB.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.CSPM.AstToProlog",
        "fct-package": "CSPM-ToProlog",
        "fct-signature": "module",
        "fct-source": "src/Language-CSPM-AstToProlog.html",
        "fct-type": "module",
        "title": "AstToProlog"
      },
      "index": {
        "description": "Convert an AST to Prolog An experiment with the new GHC-Generic extentions This would be more compact with SYB",
        "hierarchy": "Language CSPM AstToProlog",
        "module": "Language.CSPM.AstToProlog",
        "name": "AstToProlog",
        "normalized": "",
        "package": "CSPM-ToProlog",
        "partial": "Ast To Prolog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-AstToProlog.html#v:toProlog",
      "description": {
        "fct-module": "Language.CSPM.AstToProlog",
        "fct-package": "CSPM-ToProlog",
        "fct-signature": "d -\u003e Doc",
        "fct-source": "src/Language-CSPM-AstToProlog.html#toProlog",
        "fct-type": "function",
        "title": "toProlog"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CSPM AstToProlog",
        "module": "Language.CSPM.AstToProlog",
        "name": "toProlog",
        "normalized": "a-\u003eDoc",
        "package": "CSPM-ToProlog",
        "partial": "Prolog",
        "signature": "d-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-CompileAstToProlog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTranslation of an AST into Prolog terms, suitable for the ProB CSPM-Interpreter\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.CSPM.CompileAstToProlog",
        "fct-package": "CSPM-ToProlog",
        "fct-signature": "module",
        "fct-source": "src/Language-CSPM-CompileAstToProlog.html",
        "fct-type": "module",
        "title": "CompileAstToProlog"
      },
      "index": {
        "description": "Translation of an AST into Prolog terms suitable for the ProB CSPM-Interpreter",
        "hierarchy": "Language CSPM CompileAstToProlog",
        "module": "Language.CSPM.CompileAstToProlog",
        "name": "CompileAstToProlog",
        "normalized": "",
        "package": "CSPM-ToProlog",
        "partial": "Compile Ast To Prolog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-CompileAstToProlog.html#v:cspToProlog",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a \u003ca\u003eLModule\u003c/a\u003e into a \u003ca\u003eDoc\u003c/a\u003e containing a number of Prolog facts.\n The LModule must be a renamed,i.e. contain only unique \u003ca\u003eIdent\u003c/a\u003eifier.\n\u003c/p\u003e",
        "fct-module": "Language.CSPM.CompileAstToProlog",
        "fct-package": "CSPM-ToProlog",
        "fct-signature": "ModuleFromRenaming-\u003e Doc",
        "fct-type": "function",
        "title": "cspToProlog"
      },
      "index": {
        "description": "Translate LModule into Doc containing number of Prolog facts The LModule must be renamed i.e contain only unique Ident ifier",
        "hierarchy": "Language CSPM CompileAstToProlog",
        "module": "Language.CSPM.CompileAstToProlog",
        "name": "cspToProlog",
        "normalized": "ModuleFromRenaming-\u003eDoc",
        "package": "CSPM-ToProlog",
        "partial": "To Prolog",
        "signature": "ModuleFromRenaming-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-CompileAstToProlog.html#v:mkSrcLoc",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a source location to Prolog\n\u003c/p\u003e",
        "fct-module": "Language.CSPM.CompileAstToProlog",
        "fct-package": "CSPM-ToProlog",
        "fct-signature": "SrcLoc -\u003e Term",
        "fct-source": "src/Language-CSPM-CompileAstToProlog.html#mkSrcLoc",
        "fct-type": "function",
        "title": "mkSrcLoc"
      },
      "index": {
        "description": "Translate source location to Prolog",
        "hierarchy": "Language CSPM CompileAstToProlog",
        "module": "Language.CSPM.CompileAstToProlog",
        "name": "mkSrcLoc",
        "normalized": "SrcLoc-\u003eTerm",
        "package": "CSPM-ToProlog",
        "partial": "Src Loc",
        "signature": "SrcLoc-\u003eTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-CompileAstToProlog.html#v:mkSymbolTable",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a \u003ca\u003eAstAnnotation\u003c/a\u003e with \u003ca\u003eUnqiueIdentifier\u003c/a\u003e (i.e. a Symboltable)\n into a \u003ca\u003eDoc\u003c/a\u003e containing Prolog facts\n\u003c/p\u003e",
        "fct-module": "Language.CSPM.CompileAstToProlog",
        "fct-package": "CSPM-ToProlog",
        "fct-signature": "AstAnnotation UniqueIdent -\u003e Doc",
        "fct-source": "src/Language-CSPM-CompileAstToProlog.html#mkSymbolTable",
        "fct-type": "function",
        "title": "mkSymbolTable"
      },
      "index": {
        "description": "Translate AstAnnotation with UnqiueIdentifier i.e Symboltable into Doc containing Prolog facts",
        "hierarchy": "Language CSPM CompileAstToProlog",
        "module": "Language.CSPM.CompileAstToProlog",
        "name": "mkSymbolTable",
        "normalized": "AstAnnotation UniqueIdent-\u003eDoc",
        "package": "CSPM-ToProlog",
        "partial": "Symbol Table",
        "signature": "AstAnnotation UniqueIdent-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-TranslateToProlog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTranslate a CSPM-specification to Prolog.\n This is the interface used by Prolog\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.CSPM.TranslateToProlog",
        "fct-package": "CSPM-ToProlog",
        "fct-signature": "module",
        "fct-source": "src/Language-CSPM-TranslateToProlog.html",
        "fct-type": "module",
        "title": "TranslateToProlog"
      },
      "index": {
        "description": "Translate CSPM-specification to Prolog This is the interface used by Prolog",
        "hierarchy": "Language CSPM TranslateToProlog",
        "module": "Language.CSPM.TranslateToProlog",
        "name": "TranslateToProlog",
        "normalized": "",
        "package": "CSPM-ToProlog",
        "partial": "Translate To Prolog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-TranslateToProlog.html#v:toPrologVersion",
      "description": {
        "fct-descr": "\u003cp\u003eThe version of the CSPM-ToProlog library\n\u003c/p\u003e",
        "fct-module": "Language.CSPM.TranslateToProlog",
        "fct-package": "CSPM-ToProlog",
        "fct-signature": "Version",
        "fct-source": "src/Language-CSPM-TranslateToProlog.html#toPrologVersion",
        "fct-type": "function",
        "title": "toPrologVersion"
      },
      "index": {
        "description": "The version of the CSPM-ToProlog library",
        "hierarchy": "Language CSPM TranslateToProlog",
        "module": "Language.CSPM.TranslateToProlog",
        "name": "toPrologVersion",
        "normalized": "",
        "package": "CSPM-ToProlog",
        "partial": "Prolog Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CSPM-ToProlog/docs/Language-CSPM-TranslateToProlog.html#v:translateToProlog",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etranslateToProlog\u003c/a\u003e\u003c/code\u003e reads a CSPM specification from inFile\n and writes the Prolog representation to outFile.\n It handles all lexer and parser errors and catches all exceptions.\n\u003c/p\u003e",
        "fct-module": "Language.CSPM.TranslateToProlog",
        "fct-package": "CSPM-ToProlog",
        "fct-signature": "FilePath-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "translateToProlog"
      },
      "index": {
        "description": "translateToProlog reads CSPM specification from inFile and writes the Prolog representation to outFile It handles all lexer and parser errors and catches all exceptions",
        "hierarchy": "Language CSPM TranslateToProlog",
        "module": "Language.CSPM.TranslateToProlog",
        "name": "translateToProlog",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "CSPM-ToProlog",
        "partial": "To Prolog",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  }
]