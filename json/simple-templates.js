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
        "word": "simple-templates"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple templating system with variable substitution, function invokation, for\nloops and conditionals. Most callers should use \u003ccode\u003e\u003ca\u003ecompileTemplate\u003c/a\u003e\u003c/code\u003e and invoke\nthe template with \u003ccode\u003e\u003ca\u003erenderTemplate\u003c/a\u003e\u003c/code\u003e. E.g.:\n\u003c/p\u003e\u003cpre\u003e let myTemplate = compileTemplate \"Hello, $@$!\"\n print $ renderTemplate myTemplate mempty \"World\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Web.Simple.Templates.Language",
          "name": "Language",
          "package": "simple-templates",
          "source": "src/Web-Simple-Templates-Language.html",
          "type": "module"
        },
        "index": {
          "description": "simple templating system with variable substitution function invokation for loops and conditionals Most callers should use compileTemplate and invoke the template with renderTemplate E.g let myTemplate compileTemplate Hello print renderTemplate myTemplate mempty World",
          "hierarchy": "Web Simple Templates Language",
          "module": "Web.Simple.Templates.Language",
          "name": "Language",
          "package": "simple-templates",
          "partial": "Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Language",
          "name": "compileTemplate",
          "package": "simple-templates",
          "signature": "Text -\u003e Either String Template",
          "source": "src/Web-Simple-Templates-Language.html#compileTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Language",
          "module": "Web.Simple.Templates.Language",
          "name": "compileTemplate",
          "normalized": "Text-\u003eEither String Template",
          "package": "simple-templates",
          "partial": "Template",
          "signature": "Text-\u003eEither String Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:compileTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Language",
          "name": "evaluate",
          "package": "simple-templates",
          "signature": "AST -\u003e Template",
          "source": "src/Web-Simple-Templates-Language.html#evaluate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Language",
          "module": "Web.Simple.Templates.Language",
          "name": "evaluate",
          "normalized": "AST-\u003eTemplate",
          "package": "simple-templates",
          "signature": "AST-\u003eTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Language",
          "name": "evaluateAST",
          "package": "simple-templates",
          "signature": "FunctionMap-\u003e Value-\u003e AST-\u003e Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Language",
          "module": "Web.Simple.Templates.Language",
          "name": "evaluateAST",
          "normalized": "FunctionMap-\u003eValue-\u003eAST-\u003eValue",
          "package": "simple-templates",
          "partial": "AST",
          "signature": "FunctionMap-\u003eValue-\u003eAST-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:evaluateAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Language",
          "name": "replaceVar",
          "package": "simple-templates",
          "signature": "Value -\u003e Identifier -\u003e Value -\u003e Value",
          "source": "src/Web-Simple-Templates-Language.html#replaceVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Language",
          "module": "Web.Simple.Templates.Language",
          "name": "replaceVar",
          "normalized": "Value-\u003eIdentifier-\u003eValue-\u003eValue",
          "package": "simple-templates",
          "partial": "Var",
          "signature": "Value-\u003eIdentifier-\u003eValue-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:replaceVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Language",
          "name": "valueToText",
          "package": "simple-templates",
          "signature": "Value -\u003e Text",
          "source": "src/Web-Simple-Templates-Language.html#valueToText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Language",
          "module": "Web.Simple.Templates.Language",
          "name": "valueToText",
          "normalized": "Value-\u003eText",
          "package": "simple-templates",
          "partial": "To Text",
          "signature": "Value-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Language.html#v:valueToText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLanguage parser \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Simple.Templates.Parser",
          "name": "Parser",
          "package": "simple-templates",
          "source": "src/Web-Simple-Templates-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Language parser",
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "Parser",
          "package": "simple-templates",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an AST\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Parser",
          "name": "pAST",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pAST",
          "type": "function"
        },
        "index": {
          "description": "Parse an AST",
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pAST",
          "package": "simple-templates",
          "partial": "AST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pArray",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pArray",
          "package": "simple-templates",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pBoolean",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pBoolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pBoolean",
          "package": "simple-templates",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pEscapedDollar",
          "package": "simple-templates",
          "signature": "Parser Text",
          "source": "src/Web-Simple-Templates-Parser.html#pEscapedDollar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pEscapedDollar",
          "package": "simple-templates",
          "partial": "Escaped Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pEscapedDollar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pEscapedExpr",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pEscapedExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pEscapedExpr",
          "package": "simple-templates",
          "partial": "Escaped Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pEscapedExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnything that can be evaluated: for, if or value\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Parser",
          "name": "pExpr",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pExpr",
          "type": "function"
        },
        "index": {
          "description": "Anything that can be evaluated for if or value",
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pExpr",
          "package": "simple-templates",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pFor",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pFor",
          "package": "simple-templates",
          "partial": "For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pFunc",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pFunc",
          "package": "simple-templates",
          "partial": "Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pIdentifier",
          "package": "simple-templates",
          "signature": "Parser Identifier",
          "source": "src/Web-Simple-Templates-Parser.html#pIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pIdentifier",
          "package": "simple-templates",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pIf",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pIf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pIf",
          "package": "simple-templates",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pIndex",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pIndex",
          "package": "simple-templates",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pLiteral",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pLiteral",
          "package": "simple-templates",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pNull",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pNull",
          "package": "simple-templates",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pNumber",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pNumber",
          "package": "simple-templates",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pRaw",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pRaw",
          "package": "simple-templates",
          "partial": "Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pString",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pString",
          "package": "simple-templates",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable, function call, literal, etc\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Parser",
          "name": "pValue",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pValue",
          "type": "function"
        },
        "index": {
          "description": "variable function call literal etc",
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pValue",
          "package": "simple-templates",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Parser",
          "name": "pVar",
          "package": "simple-templates",
          "signature": "Parser AST",
          "source": "src/Web-Simple-Templates-Parser.html#pVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "pVar",
          "package": "simple-templates",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:pVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved words: for, endfor, sep, if, else, endif, true, false\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Parser",
          "name": "reservedWords",
          "package": "simple-templates",
          "signature": "[Text]",
          "source": "src/Web-Simple-Templates-Parser.html#reservedWords",
          "type": "function"
        },
        "index": {
          "description": "Reserved words for endfor sep if else endif true false",
          "hierarchy": "Web Simple Templates Parser",
          "module": "Web.Simple.Templates.Parser",
          "name": "reservedWords",
          "normalized": "[Text]",
          "package": "simple-templates",
          "partial": "Words",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Parser.html#v:reservedWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and helpers to encode the language AST \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "Types",
          "package": "simple-templates",
          "source": "src/Web-Simple-Templates-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types and helpers to encode the language AST",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "Types",
          "package": "simple-templates",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAST\u003c/a\u003e\u003c/code\u003es encode the various types of expressions in the language.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "AST",
          "package": "simple-templates",
          "source": "src/Web-Simple-Templates-Types.html#AST",
          "type": "data"
        },
        "index": {
          "description": "AST encode the various types of expressions in the language",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "AST",
          "package": "simple-templates",
          "partial": "AST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:AST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA funcation that's callable from inside a template\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "Function",
          "package": "simple-templates",
          "source": "src/Web-Simple-Templates-Types.html#Function",
          "type": "newtype"
        },
        "index": {
          "description": "funcation that callable from inside template",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "Function",
          "package": "simple-templates",
          "partial": "Function",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Types",
          "name": "FunctionMap",
          "package": "simple-templates",
          "source": "src/Web-Simple-Templates-Types.html#FunctionMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "FunctionMap",
          "package": "simple-templates",
          "partial": "Function Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:FunctionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbol identifier following the format [a-z][a-zA-Z0-9_-]*\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "Identifier",
          "package": "simple-templates",
          "source": "src/Web-Simple-Templates-Types.html#Identifier",
          "type": "type"
        },
        "index": {
          "description": "symbol identifier following the format a-z a-zA-Z0-9",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "Identifier",
          "package": "simple-templates",
          "partial": "Identifier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled template is a function that takes a \u003ccode\u003e\u003ca\u003eFunctionMap\u003c/a\u003e\u003c/code\u003e and a global\n aeson \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e and renders the template.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "Template",
          "package": "simple-templates",
          "source": "src/Web-Simple-Templates-Types.html#Template",
          "type": "newtype"
        },
        "index": {
          "description": "compiled template is function that takes FunctionMap and global aeson Value and renders the template",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "Template",
          "package": "simple-templates",
          "partial": "Template",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Types",
          "name": "ToFunction",
          "package": "simple-templates",
          "source": "src/Web-Simple-Templates-Types.html#ToFunction",
          "type": "class"
        },
        "index": {
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "ToFunction",
          "package": "simple-templates",
          "partial": "To Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#t:ToFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA literal array (may contain non-literals)\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTArray",
          "package": "simple-templates",
          "signature": "ASTArray (Vector AST)",
          "source": "src/Web-Simple-Templates-Types.html#AST",
          "type": "function"
        },
        "index": {
          "description": "literal array may contain non-literals",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTArray",
          "package": "simple-templates",
          "partial": "ASTArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor([k,]v in expr) body separator\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTFor",
          "package": "simple-templates",
          "signature": "ASTFor (Maybe Identifier) Identifier AST AST (Maybe AST)",
          "source": "src/Web-Simple-Templates-Types.html#AST",
          "type": "function"
        },
        "index": {
          "description": "for in expr body separator",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTFor",
          "package": "simple-templates",
          "partial": "ASTFor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function call and list of arguments\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTFunc",
          "package": "simple-templates",
          "signature": "ASTFunc Identifier [AST]",
          "source": "src/Web-Simple-Templates-Types.html#AST",
          "type": "function"
        },
        "index": {
          "description": "function call and list of arguments",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTFunc",
          "normalized": "ASTFunc Identifier[AST]",
          "package": "simple-templates",
          "partial": "ASTFunc",
          "signature": "ASTFunc Identifier[AST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf - condition, true branch and optional false branch\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTIf",
          "package": "simple-templates",
          "signature": "ASTIf AST AST (Maybe AST)",
          "source": "src/Web-Simple-Templates-Types.html#AST",
          "type": "function"
        },
        "index": {
          "description": "If condition true branch and optional false branch",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTIf",
          "package": "simple-templates",
          "partial": "ASTIf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNested index into an object\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTIndex",
          "package": "simple-templates",
          "signature": "ASTIndex AST [Identifier]",
          "source": "src/Web-Simple-Templates-Types.html#AST",
          "type": "function"
        },
        "index": {
          "description": "Nested index into an object",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTIndex",
          "normalized": "ASTIndex AST[Identifier]",
          "package": "simple-templates",
          "partial": "ASTIndex",
          "signature": "ASTIndex AST[Identifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA literal that does not require evaluation\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTLiteral",
          "package": "simple-templates",
          "signature": "ASTLiteral Value",
          "source": "src/Web-Simple-Templates-Types.html#AST",
          "type": "function"
        },
        "index": {
          "description": "literal that does not require evaluation",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTLiteral",
          "package": "simple-templates",
          "partial": "ASTLiteral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA series of sub-ASTs\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTRoot",
          "package": "simple-templates",
          "signature": "ASTRoot [AST]",
          "source": "src/Web-Simple-Templates-Types.html#AST",
          "type": "function"
        },
        "index": {
          "description": "series of sub-ASTs",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTRoot",
          "normalized": "ASTRoot[AST]",
          "package": "simple-templates",
          "partial": "ASTRoot",
          "signature": "ASTRoot[AST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable dereference\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTVar",
          "package": "simple-templates",
          "signature": "ASTVar Identifier",
          "source": "src/Web-Simple-Templates-Types.html#AST",
          "type": "function"
        },
        "index": {
          "description": "Variable dereference",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "ASTVar",
          "package": "simple-templates",
          "partial": "ASTVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:ASTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Types",
          "name": "Function",
          "package": "simple-templates",
          "signature": "Function",
          "source": "src/Web-Simple-Templates-Types.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "Function",
          "package": "simple-templates",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Types",
          "name": "Template",
          "package": "simple-templates",
          "signature": "Template",
          "source": "src/Web-Simple-Templates-Types.html#Template",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "Template",
          "package": "simple-templates",
          "partial": "Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Types",
          "name": "astListToArray",
          "package": "simple-templates",
          "signature": "[AST] -\u003e AST",
          "source": "src/Web-Simple-Templates-Types.html#astListToArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "astListToArray",
          "normalized": "[AST]-\u003eAST",
          "package": "simple-templates",
          "partial": "List To Array",
          "signature": "[AST]-\u003eAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:astListToArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Types",
          "name": "call",
          "package": "simple-templates",
          "signature": "[Value] -\u003e Value",
          "source": "src/Web-Simple-Templates-Types.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "call",
          "normalized": "[Value]-\u003eValue",
          "package": "simple-templates",
          "signature": "[Value]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efromJSON\u003c/a\u003e\u003c/code\u003e but throws an error if there is a parse failure.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "fromJSONStrict",
          "package": "simple-templates",
          "signature": "Value -\u003e a",
          "source": "src/Web-Simple-Templates-Types.html#fromJSONStrict",
          "type": "function"
        },
        "index": {
          "description": "Like fromJSON but throws an error if there is parse failure",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "fromJSONStrict",
          "normalized": "Value-\u003ea",
          "package": "simple-templates",
          "partial": "JSONStrict",
          "signature": "Value-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:fromJSONStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eASTLiteral\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Simple.Templates.Types",
          "name": "fromLiteral",
          "package": "simple-templates",
          "signature": "a -\u003e AST",
          "source": "src/Web-Simple-Templates-Types.html#fromLiteral",
          "type": "function"
        },
        "index": {
          "description": "Lift ToJSON to an ASTLiteral",
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "fromLiteral",
          "normalized": "a-\u003eAST",
          "package": "simple-templates",
          "partial": "Literal",
          "signature": "a-\u003eAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:fromLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Types",
          "name": "renderTemplate",
          "package": "simple-templates",
          "signature": "FunctionMap -\u003e Value -\u003e Text",
          "source": "src/Web-Simple-Templates-Types.html#Template",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "renderTemplate",
          "normalized": "FunctionMap-\u003eValue-\u003eText",
          "package": "simple-templates",
          "partial": "Template",
          "signature": "FunctionMap-\u003eValue-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:renderTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates.Types",
          "name": "toFunction",
          "package": "simple-templates",
          "signature": "a -\u003e Function",
          "source": "src/Web-Simple-Templates-Types.html#toFunction",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web Simple Templates Types",
          "module": "Web.Simple.Templates.Types",
          "name": "toFunction",
          "normalized": "a-\u003eFunction",
          "package": "simple-templates",
          "partial": "Function",
          "signature": "a-\u003eFunction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-templates/docs/Web-Simple-Templates-Types.html#v:toFunction"
      }
    }
  ]
]