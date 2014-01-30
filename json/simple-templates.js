[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple templating system with variable substitution, function invokation, for\nloops and conditionals. Most callers should use \u003ccode\u003e\u003ca\u003ecompileTemplate\u003c/a\u003e\u003c/code\u003e and invoke\nthe template with \u003ccode\u003e\u003ca\u003erenderTemplate\u003c/a\u003e\u003c/code\u003e. E.g.:\n\u003c/p\u003e\u003cpre\u003e let myTemplate = compileTemplate \"Hello, $@$!\"\n print $ renderTemplate myTemplate mempty \"World\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Web.Simple.Templates.Language",
        "fct-package": "simple-templates",
        "fct-signature": "module",
        "fct-source": "src/Web-Simple-Templates-Language.html",
        "fct-type": "module",
        "title": "Language"
      },
      "index": {
        "description": "simple templating system with variable substitution function invokation for loops and conditionals Most callers should use compileTemplate and invoke the template with renderTemplate E.g let myTemplate compileTemplate Hello print renderTemplate myTemplate mempty World",
        "hierarchy": "Web Simple Templates Language",
        "module": "Web.Simple.Templates.Language",
        "name": "Language",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:compileTemplate",
      "description": {
        "fct-module": "Web.Simple.Templates.Language",
        "fct-package": "simple-templates",
        "fct-signature": "Text -\u003e Either String Template",
        "fct-source": "src/Web-Simple-Templates-Language.html#compileTemplate",
        "fct-type": "function",
        "title": "compileTemplate"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Language",
        "module": "Web.Simple.Templates.Language",
        "name": "compileTemplate",
        "normalized": "Text-\u003eEither String Template",
        "package": "simple-templates",
        "partial": "Template",
        "signature": "Text-\u003eEither String Template"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:evaluate",
      "description": {
        "fct-module": "Web.Simple.Templates.Language",
        "fct-package": "simple-templates",
        "fct-signature": "AST -\u003e Template",
        "fct-source": "src/Web-Simple-Templates-Language.html#evaluate",
        "fct-type": "function",
        "title": "evaluate"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Language",
        "module": "Web.Simple.Templates.Language",
        "name": "evaluate",
        "normalized": "AST-\u003eTemplate",
        "package": "simple-templates",
        "partial": "",
        "signature": "AST-\u003eTemplate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:evaluateAST",
      "description": {
        "fct-module": "Web.Simple.Templates.Language",
        "fct-package": "simple-templates",
        "fct-signature": "FunctionMap-\u003e Value-\u003e AST-\u003e Value",
        "fct-type": "function",
        "title": "evaluateAST"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Language",
        "module": "Web.Simple.Templates.Language",
        "name": "evaluateAST",
        "normalized": "FunctionMap-\u003eValue-\u003eAST-\u003eValue",
        "package": "simple-templates",
        "partial": "AST",
        "signature": "FunctionMap-\u003eValue-\u003eAST-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:replaceVar",
      "description": {
        "fct-module": "Web.Simple.Templates.Language",
        "fct-package": "simple-templates",
        "fct-signature": "Value -\u003e Identifier -\u003e Value -\u003e Value",
        "fct-source": "src/Web-Simple-Templates-Language.html#replaceVar",
        "fct-type": "function",
        "title": "replaceVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Language",
        "module": "Web.Simple.Templates.Language",
        "name": "replaceVar",
        "normalized": "Value-\u003eIdentifier-\u003eValue-\u003eValue",
        "package": "simple-templates",
        "partial": "Var",
        "signature": "Value-\u003eIdentifier-\u003eValue-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:valueToText",
      "description": {
        "fct-module": "Web.Simple.Templates.Language",
        "fct-package": "simple-templates",
        "fct-signature": "Value -\u003e Text",
        "fct-source": "src/Web-Simple-Templates-Language.html#valueToText",
        "fct-type": "function",
        "title": "valueToText"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Language",
        "module": "Web.Simple.Templates.Language",
        "name": "valueToText",
        "normalized": "Value-\u003eText",
        "package": "simple-templates",
        "partial": "To Text",
        "signature": "Value-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLanguage parser \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "module",
        "fct-source": "src/Web-Simple-Templates-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Language parser",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pAST",
      "description": {
        "fct-descr": "\u003cp\u003eParse an AST\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pAST",
        "fct-type": "function",
        "title": "pAST"
      },
      "index": {
        "description": "Parse an AST",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pAST",
        "normalized": "",
        "package": "simple-templates",
        "partial": "AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pArray",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pArray",
        "fct-type": "function",
        "title": "pArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pArray",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pBoolean",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pBoolean",
        "fct-type": "function",
        "title": "pBoolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pBoolean",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pEscapedDollar",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser Text",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pEscapedDollar",
        "fct-type": "function",
        "title": "pEscapedDollar"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pEscapedDollar",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Escaped Dollar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pEscapedExpr",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pEscapedExpr",
        "fct-type": "function",
        "title": "pEscapedExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pEscapedExpr",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Escaped Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pExpr",
      "description": {
        "fct-descr": "\u003cp\u003eAnything that can be evaluated: for, if or value\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pExpr",
        "fct-type": "function",
        "title": "pExpr"
      },
      "index": {
        "description": "Anything that can be evaluated for if or value",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pExpr",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pFor",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pFor",
        "fct-type": "function",
        "title": "pFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pFor",
        "normalized": "",
        "package": "simple-templates",
        "partial": "For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pFunc",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pFunc",
        "fct-type": "function",
        "title": "pFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pFunc",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pIdentifier",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser Identifier",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pIdentifier",
        "fct-type": "function",
        "title": "pIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pIdentifier",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pIf",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pIf",
        "fct-type": "function",
        "title": "pIf"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pIf",
        "normalized": "",
        "package": "simple-templates",
        "partial": "If",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pIndex",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pIndex",
        "fct-type": "function",
        "title": "pIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pIndex",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pLiteral",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pLiteral",
        "fct-type": "function",
        "title": "pLiteral"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pLiteral",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pNull",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pNull",
        "fct-type": "function",
        "title": "pNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pNull",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pNumber",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pNumber",
        "fct-type": "function",
        "title": "pNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pNumber",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pRaw",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pRaw",
        "fct-type": "function",
        "title": "pRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pRaw",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pString",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pString",
        "fct-type": "function",
        "title": "pString"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pString",
        "normalized": "",
        "package": "simple-templates",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pValue",
      "description": {
        "fct-descr": "\u003cp\u003eA variable, function call, literal, etc\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pValue",
        "fct-type": "function",
        "title": "pValue"
      },
      "index": {
        "description": "variable function call literal etc",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pValue",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pVar",
      "description": {
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "Parser AST",
        "fct-source": "src/Web-Simple-Templates-Parser.html#pVar",
        "fct-type": "function",
        "title": "pVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "pVar",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:reservedWords",
      "description": {
        "fct-descr": "\u003cp\u003eReserved words: for, endfor, sep, if, else, endif, true, false\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Parser",
        "fct-package": "simple-templates",
        "fct-signature": "[Text]",
        "fct-source": "src/Web-Simple-Templates-Parser.html#reservedWords",
        "fct-type": "function",
        "title": "reservedWords"
      },
      "index": {
        "description": "Reserved words for endfor sep if else endif true false",
        "hierarchy": "Web Simple Templates Parser",
        "module": "Web.Simple.Templates.Parser",
        "name": "reservedWords",
        "normalized": "[Text]",
        "package": "simple-templates",
        "partial": "Words",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and helpers to encode the language AST \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "module",
        "fct-source": "src/Web-Simple-Templates-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types and helpers to encode the language AST",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "Types",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:AST",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAST\u003c/a\u003e\u003c/code\u003es encode the various types of expressions in the language.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "data",
        "fct-source": "src/Web-Simple-Templates-Types.html#AST",
        "fct-type": "data",
        "title": "AST"
      },
      "index": {
        "description": "AST encode the various types of expressions in the language",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "AST",
        "normalized": "",
        "package": "simple-templates",
        "partial": "AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:Function",
      "description": {
        "fct-descr": "\u003cp\u003eA funcation that's callable from inside a template\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "newtype",
        "fct-source": "src/Web-Simple-Templates-Types.html#Function",
        "fct-type": "newtype",
        "title": "Function"
      },
      "index": {
        "description": "funcation that callable from inside template",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "Function",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:FunctionMap",
      "description": {
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "type",
        "fct-source": "src/Web-Simple-Templates-Types.html#FunctionMap",
        "fct-type": "type",
        "title": "FunctionMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "FunctionMap",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Function Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:Identifier",
      "description": {
        "fct-descr": "\u003cp\u003eA symbol identifier following the format [a-z][a-zA-Z0-9_-]*\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "type",
        "fct-source": "src/Web-Simple-Templates-Types.html#Identifier",
        "fct-type": "type",
        "title": "Identifier"
      },
      "index": {
        "description": "symbol identifier following the format a-z a-zA-Z0-9",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "Identifier",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:Template",
      "description": {
        "fct-descr": "\u003cp\u003eA compiled template is a function that takes a \u003ccode\u003e\u003ca\u003eFunctionMap\u003c/a\u003e\u003c/code\u003e and a global\n aeson \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e and renders the template.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "newtype",
        "fct-source": "src/Web-Simple-Templates-Types.html#Template",
        "fct-type": "newtype",
        "title": "Template"
      },
      "index": {
        "description": "compiled template is function that takes FunctionMap and global aeson Value and renders the template",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "Template",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:ToFunction",
      "description": {
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "class",
        "fct-source": "src/Web-Simple-Templates-Types.html#ToFunction",
        "fct-type": "class",
        "title": "ToFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "ToFunction",
        "normalized": "",
        "package": "simple-templates",
        "partial": "To Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTArray",
      "description": {
        "fct-descr": "\u003cp\u003eA literal array (may contain non-literals)\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "ASTArray (Vector AST)",
        "fct-source": "src/Web-Simple-Templates-Types.html#AST",
        "fct-type": "function",
        "title": "ASTArray"
      },
      "index": {
        "description": "literal array may contain non-literals",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "ASTArray",
        "normalized": "",
        "package": "simple-templates",
        "partial": "ASTArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTFor",
      "description": {
        "fct-descr": "\u003cp\u003efor([k,]v in expr) body separator\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "ASTFor (Maybe Identifier) Identifier AST AST (Maybe AST)",
        "fct-source": "src/Web-Simple-Templates-Types.html#AST",
        "fct-type": "function",
        "title": "ASTFor"
      },
      "index": {
        "description": "for in expr body separator",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "ASTFor",
        "normalized": "",
        "package": "simple-templates",
        "partial": "ASTFor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTFunc",
      "description": {
        "fct-descr": "\u003cp\u003eA function call and list of arguments\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "ASTFunc Identifier [AST]",
        "fct-source": "src/Web-Simple-Templates-Types.html#AST",
        "fct-type": "function",
        "title": "ASTFunc"
      },
      "index": {
        "description": "function call and list of arguments",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "ASTFunc",
        "normalized": "ASTFunc Identifier[AST]",
        "package": "simple-templates",
        "partial": "ASTFunc",
        "signature": "ASTFunc Identifier[AST]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTIf",
      "description": {
        "fct-descr": "\u003cp\u003eIf - condition, true branch and optional false branch\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "ASTIf AST AST (Maybe AST)",
        "fct-source": "src/Web-Simple-Templates-Types.html#AST",
        "fct-type": "function",
        "title": "ASTIf"
      },
      "index": {
        "description": "If condition true branch and optional false branch",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "ASTIf",
        "normalized": "",
        "package": "simple-templates",
        "partial": "ASTIf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTIndex",
      "description": {
        "fct-descr": "\u003cp\u003eNested index into an object\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "ASTIndex AST [Identifier]",
        "fct-source": "src/Web-Simple-Templates-Types.html#AST",
        "fct-type": "function",
        "title": "ASTIndex"
      },
      "index": {
        "description": "Nested index into an object",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "ASTIndex",
        "normalized": "ASTIndex AST[Identifier]",
        "package": "simple-templates",
        "partial": "ASTIndex",
        "signature": "ASTIndex AST[Identifier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eA literal that does not require evaluation\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "ASTLiteral Value",
        "fct-source": "src/Web-Simple-Templates-Types.html#AST",
        "fct-type": "function",
        "title": "ASTLiteral"
      },
      "index": {
        "description": "literal that does not require evaluation",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "ASTLiteral",
        "normalized": "",
        "package": "simple-templates",
        "partial": "ASTLiteral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTRoot",
      "description": {
        "fct-descr": "\u003cp\u003eA series of sub-ASTs\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "ASTRoot [AST]",
        "fct-source": "src/Web-Simple-Templates-Types.html#AST",
        "fct-type": "function",
        "title": "ASTRoot"
      },
      "index": {
        "description": "series of sub-ASTs",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "ASTRoot",
        "normalized": "ASTRoot[AST]",
        "package": "simple-templates",
        "partial": "ASTRoot",
        "signature": "ASTRoot[AST]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTVar",
      "description": {
        "fct-descr": "\u003cp\u003eVariable dereference\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "ASTVar Identifier",
        "fct-source": "src/Web-Simple-Templates-Types.html#AST",
        "fct-type": "function",
        "title": "ASTVar"
      },
      "index": {
        "description": "Variable dereference",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "ASTVar",
        "normalized": "",
        "package": "simple-templates",
        "partial": "ASTVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:Function",
      "description": {
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "Function",
        "fct-source": "src/Web-Simple-Templates-Types.html#Function",
        "fct-type": "function",
        "title": "Function"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "Function",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:Template",
      "description": {
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "Template",
        "fct-source": "src/Web-Simple-Templates-Types.html#Template",
        "fct-type": "function",
        "title": "Template"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "Template",
        "normalized": "",
        "package": "simple-templates",
        "partial": "Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:astListToArray",
      "description": {
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "[AST] -\u003e AST",
        "fct-source": "src/Web-Simple-Templates-Types.html#astListToArray",
        "fct-type": "function",
        "title": "astListToArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "astListToArray",
        "normalized": "[AST]-\u003eAST",
        "package": "simple-templates",
        "partial": "List To Array",
        "signature": "[AST]-\u003eAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:call",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "[Value] -\u003e Value",
        "fct-source": "src/Web-Simple-Templates-Types.html#Function",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "call",
        "normalized": "[Value]-\u003eValue",
        "package": "simple-templates",
        "partial": "",
        "signature": "[Value]-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:fromJSONStrict",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efromJSON\u003c/a\u003e\u003c/code\u003e but throws an error if there is a parse failure.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "Value -\u003e a",
        "fct-source": "src/Web-Simple-Templates-Types.html#fromJSONStrict",
        "fct-type": "function",
        "title": "fromJSONStrict"
      },
      "index": {
        "description": "Like fromJSON but throws an error if there is parse failure",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "fromJSONStrict",
        "normalized": "Value-\u003ea",
        "package": "simple-templates",
        "partial": "JSONStrict",
        "signature": "Value-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:fromLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eASTLiteral\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "a -\u003e AST",
        "fct-source": "src/Web-Simple-Templates-Types.html#fromLiteral",
        "fct-type": "function",
        "title": "fromLiteral"
      },
      "index": {
        "description": "Lift ToJSON to an ASTLiteral",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "fromLiteral",
        "normalized": "a-\u003eAST",
        "package": "simple-templates",
        "partial": "Literal",
        "signature": "a-\u003eAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:renderTemplate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "FunctionMap -\u003e Value -\u003e Text",
        "fct-source": "src/Web-Simple-Templates-Types.html#Template",
        "fct-type": "function",
        "title": "renderTemplate"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "renderTemplate",
        "normalized": "FunctionMap-\u003eValue-\u003eText",
        "package": "simple-templates",
        "partial": "Template",
        "signature": "FunctionMap-\u003eValue-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:toFunction",
      "description": {
        "fct-module": "Web.Simple.Templates.Types",
        "fct-package": "simple-templates",
        "fct-signature": "a -\u003e Function",
        "fct-source": "src/Web-Simple-Templates-Types.html#toFunction",
        "fct-type": "method",
        "title": "toFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Templates Types",
        "module": "Web.Simple.Templates.Types",
        "name": "toFunction",
        "normalized": "a-\u003eFunction",
        "package": "simple-templates",
        "partial": "Function",
        "signature": "a-\u003eFunction"
      }
    }
  }
]