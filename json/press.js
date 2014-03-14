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
        "word": "press"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Parser",
          "name": "failWithParseError",
          "package": "press",
          "signature": "ParseError -\u003e ParsecT s u m a",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Parser.html#failWithParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Parser",
          "module": "Text.Press.Parser",
          "name": "failWithParseError",
          "normalized": "ParseError-\u003eParsecT a b c d",
          "package": "press",
          "partial": "With Parse Error",
          "signature": "ParseError-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Parser.html#v:failWithParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Parser",
          "name": "parseFile",
          "package": "press",
          "signature": "Parser -\u003e String -\u003e IO (Either ParseError Template)",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Parser.html#parseFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Parser",
          "module": "Text.Press.Parser",
          "name": "parseFile",
          "normalized": "Parser-\u003eString-\u003eIO(Either ParseError Template)",
          "package": "press",
          "partial": "File",
          "signature": "Parser-\u003eString-\u003eIO(Either ParseError Template)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Parser.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Parser",
          "name": "parseString",
          "package": "press",
          "signature": "Parser -\u003e String -\u003e Either ParseError Template",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Parser.html#parseString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Parser",
          "module": "Text.Press.Parser",
          "name": "parseString",
          "normalized": "Parser-\u003eString-\u003eEither ParseError Template",
          "package": "press",
          "partial": "String",
          "signature": "Parser-\u003eString-\u003eEither ParseError Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Parser.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Parser",
          "name": "tokensToTemplate",
          "package": "press",
          "signature": "Parsec [(Token, SourcePos)] ParserState Template",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Parser.html#tokensToTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Parser",
          "module": "Text.Press.Parser",
          "name": "tokensToTemplate",
          "normalized": "Parsec[(Token,SourcePos)]ParserState Template",
          "package": "press",
          "partial": "To Template",
          "signature": "Parsec[(Token,SourcePos)]ParserState Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Parser.html#v:tokensToTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Render",
          "name": "coerceJSToBool",
          "package": "press",
          "signature": "JSValue -\u003e Bool",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Render.html#coerceJSToBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Render",
          "module": "Text.Press.Render",
          "name": "coerceJSToBool",
          "normalized": "JSValue-\u003eBool",
          "package": "press",
          "partial": "JSTo Bool",
          "signature": "JSValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Render.html#v:coerceJSToBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Render",
          "name": "lookupFirst",
          "package": "press",
          "signature": "k -\u003e [Map k a] -\u003e Maybe a",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Render.html#lookupFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Render",
          "module": "Text.Press.Render",
          "name": "lookupFirst",
          "normalized": "a-\u003e[Map a b]-\u003eMaybe b",
          "package": "press",
          "partial": "First",
          "signature": "k-\u003e[Map k a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Render.html#v:lookupFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Render",
          "name": "showBlock",
          "package": "press",
          "signature": "String -\u003e RenderT_",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Render.html#showBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Render",
          "module": "Text.Press.Render",
          "name": "showBlock",
          "normalized": "String-\u003eRenderT_",
          "package": "press",
          "partial": "Block",
          "signature": "String-\u003eRenderT_",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Render.html#v:showBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Render",
          "name": "split",
          "package": "press",
          "signature": "String -\u003e String -\u003e [String]",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Render.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Render",
          "module": "Text.Press.Render",
          "name": "split",
          "normalized": "String-\u003eString-\u003e[String]",
          "package": "press",
          "signature": "String-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Render.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Run",
          "name": "Result",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Run.html#Result",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Press Run",
          "module": "Text.Press.Run",
          "name": "Result",
          "package": "press",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Run.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Run",
          "name": "runJSValuesWithBody",
          "package": "press",
          "signature": "[JSValue] -\u003e String -\u003e IO Result",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Run.html#runJSValuesWithBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Run",
          "module": "Text.Press.Run",
          "name": "runJSValuesWithBody",
          "normalized": "[JSValue]-\u003eString-\u003eIO Result",
          "package": "press",
          "partial": "JSValues With Body",
          "signature": "[JSValue]-\u003eString-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Run.html#v:runJSValuesWithBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Run",
          "name": "runJSValuesWithPathStTErrT",
          "package": "press",
          "signature": "[JSValue] -\u003e String -\u003e StateT Parser (ErrorT PressError IO) [String]",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Run.html#runJSValuesWithPathStTErrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Run",
          "module": "Text.Press.Run",
          "name": "runJSValuesWithPathStTErrT",
          "normalized": "[JSValue]-\u003eString-\u003eStateT Parser(ErrorT PressError IO)[String]",
          "package": "press",
          "partial": "JSValues With Path St TErr",
          "signature": "[JSValue]-\u003eString-\u003eStateT Parser(ErrorT PressError IO)[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Run.html#v:runJSValuesWithPathStTErrT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Run",
          "name": "runJSValuesWithTemplate",
          "package": "press",
          "signature": "[JSValue] -\u003e Template -\u003e Parser -\u003e IO Result",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Run.html#runJSValuesWithTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Run",
          "module": "Text.Press.Run",
          "name": "runJSValuesWithTemplate",
          "normalized": "[JSValue]-\u003eTemplate-\u003eParser-\u003eIO Result",
          "package": "press",
          "partial": "JSValues With Template",
          "signature": "[JSValue]-\u003eTemplate-\u003eParser-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Run.html#v:runJSValuesWithTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Run",
          "name": "runJSValuesWithTemplateStTErrT",
          "package": "press",
          "signature": "[JSValue] -\u003e Template -\u003e StateT Parser (ErrorT PressError IO) [String]",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Run.html#runJSValuesWithTemplateStTErrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Run",
          "module": "Text.Press.Run",
          "name": "runJSValuesWithTemplateStTErrT",
          "normalized": "[JSValue]-\u003eTemplate-\u003eStateT Parser(ErrorT PressError IO)[String]",
          "package": "press",
          "partial": "JSValues With Template St TErr",
          "signature": "[JSValue]-\u003eTemplate-\u003eStateT Parser(ErrorT PressError IO)[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Run.html#v:runJSValuesWithTemplateStTErrT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Tags",
          "name": "exprToBool",
          "package": "press",
          "signature": "Expr -\u003e RenderT Bool",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Tags.html#exprToBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Tags",
          "module": "Text.Press.Tags",
          "name": "exprToBool",
          "normalized": "Expr-\u003eRenderT Bool",
          "package": "press",
          "partial": "To Bool",
          "signature": "Expr-\u003eRenderT Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Tags.html#v:exprToBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Tags",
          "name": "showFor",
          "package": "press",
          "signature": "String -\u003e Expr -\u003e [Node] -\u003e [Node] -\u003e RenderT_",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Tags.html#showFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Tags",
          "module": "Text.Press.Tags",
          "name": "showFor",
          "normalized": "String-\u003eExpr-\u003e[Node]-\u003e[Node]-\u003eRenderT_",
          "package": "press",
          "partial": "For",
          "signature": "String-\u003eExpr-\u003e[Node]-\u003e[Node]-\u003eRenderT_",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Tags.html#v:showFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Tags",
          "name": "showIfElse",
          "package": "press",
          "signature": "[(Expr, [Node])] -\u003e [Node] -\u003e RenderT_",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Tags.html#showIfElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Tags",
          "module": "Text.Press.Tags",
          "name": "showIfElse",
          "normalized": "[(Expr,[Node])]-\u003e[Node]-\u003eRenderT_",
          "package": "press",
          "partial": "If Else",
          "signature": "[(Expr,[Node])]-\u003e[Node]-\u003eRenderT_",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Tags.html#v:showIfElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "Expr",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#Expr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "Expr",
          "package": "press",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "Node",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "Node",
          "package": "press",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "NodeParser",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#NodeParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "NodeParser",
          "package": "press",
          "partial": "Node Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:NodeParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "Parser",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#Parser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "Parser",
          "package": "press",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "ParserState",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#ParserState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "ParserState",
          "package": "press",
          "partial": "Parser State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:ParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "PressError",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#PressError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "PressError",
          "package": "press",
          "partial": "Press Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:PressError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "RenderState",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#RenderState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "RenderState",
          "package": "press",
          "partial": "Render State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:RenderState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "RenderT",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#RenderT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "RenderT",
          "package": "press",
          "partial": "Render",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:RenderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "RenderT_",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#RenderT_",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "RenderT_",
          "package": "press",
          "partial": "Render",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:RenderT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "TagFunc",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#TagFunc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "TagFunc",
          "package": "press",
          "partial": "Tag Func",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:TagFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "TagName",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#TagName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "TagName",
          "package": "press",
          "partial": "Tag Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:TagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "TagType",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#TagType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "TagType",
          "package": "press",
          "partial": "Tag Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:TagType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "Template",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#Template",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "Template",
          "package": "press",
          "partial": "Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "TemplateParser",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#TemplateParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "TemplateParser",
          "package": "press",
          "partial": "Template Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:TemplateParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "TemplatePath",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#TemplatePath",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "TemplatePath",
          "package": "press",
          "partial": "Template Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:TemplatePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "Token",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "Token",
          "package": "press",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "Render",
          "package": "press",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#Render",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "Render",
          "package": "press",
          "partial": "Render",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#v:Render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "getRenderState",
          "package": "press",
          "signature": "RenderT RenderState",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#getRenderState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "getRenderState",
          "package": "press",
          "partial": "Render State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#v:getRenderState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "render",
          "package": "press",
          "signature": "a -\u003e RenderT_",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#render",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "render",
          "normalized": "a-\u003eRenderT_",
          "package": "press",
          "signature": "a-\u003eRenderT_",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Press.Types",
          "name": "setRenderState",
          "package": "press",
          "signature": "RenderState -\u003e RenderT ()",
          "source": "http://hackage.haskell.org/package/press/docs/src/Text-Press-Types.html#setRenderState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Press Types",
          "module": "Text.Press.Types",
          "name": "setRenderState",
          "normalized": "RenderState-\u003eRenderT()",
          "package": "press",
          "partial": "Render State",
          "signature": "RenderState-\u003eRenderT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/press/docs/Text-Press-Types.html#v:setRenderState"
      }
    }
  ]
]