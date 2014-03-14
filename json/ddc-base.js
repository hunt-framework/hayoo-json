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
        "word": "ddc-base"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser utilities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Base.Parser",
          "name": "Parser",
          "package": "ddc-base",
          "source": "src/DDC-Base-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parser utilities",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "Parser",
          "package": "ddc-base",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic parser,\n   parameterised over token and return types.\n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "Parser",
          "package": "ddc-base",
          "source": "src/DDC-Base-Parser.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "generic parser parameterised over token and return types",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "Parser",
          "package": "ddc-base",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser state that keeps track of the name of the source file.\n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "ParserState",
          "package": "ddc-base",
          "source": "src/DDC-Base-Parser.html#ParserState",
          "type": "data"
        },
        "index": {
          "description": "parser state that keeps track of the name of the source file",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "ParserState",
          "package": "ddc-base",
          "partial": "Parser State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#t:ParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position in a source file.        \n\u003c/p\u003e\u003cp\u003eIf there is no file path then we assume that the input has been read\n   from an interactive session and display ''\u003cinteractive\u003e'' when pretty printing.\n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "SourcePos",
          "package": "ddc-base",
          "source": "src/DDC-Data-SourcePos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "position in source file If there is no file path then we assume that the input has been read from an interactive session and display interactive when pretty printing",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "SourcePos",
          "package": "ddc-base",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Base.Parser",
          "name": "ParseState",
          "package": "ddc-base",
          "signature": "ParseState",
          "source": "src/DDC-Base-Parser.html#ParserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "ParseState",
          "package": "ddc-base",
          "partial": "Parse State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:ParseState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept the given token.\n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "pTok",
          "package": "ddc-base",
          "signature": "k -\u003e Parser k ()",
          "source": "src/DDC-Base-Parser.html#pTok",
          "type": "function"
        },
        "index": {
          "description": "Accept the given token",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "pTok",
          "normalized": "a-\u003eParser a()",
          "package": "ddc-base",
          "partial": "Tok",
          "signature": "k-\u003eParser k()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:pTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept a token and return the given value.\n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "pTokAs",
          "package": "ddc-base",
          "signature": "k -\u003e t -\u003e Parser k t",
          "source": "src/DDC-Base-Parser.html#pTokAs",
          "type": "function"
        },
        "index": {
          "description": "Accept token and return the given value",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "pTokAs",
          "normalized": "a-\u003eb-\u003eParser a b",
          "package": "ddc-base",
          "partial": "Tok As",
          "signature": "k-\u003et-\u003eParser k t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:pTokAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept a token and return the given value, \n   along with the source position of the token.\n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "pTokAsSP",
          "package": "ddc-base",
          "signature": "k -\u003e t -\u003e Parser k (t, SourcePos)",
          "source": "src/DDC-Base-Parser.html#pTokAsSP",
          "type": "function"
        },
        "index": {
          "description": "Accept token and return the given value along with the source position of the token",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "pTokAsSP",
          "normalized": "a-\u003eb-\u003eParser a(b,SourcePos)",
          "package": "ddc-base",
          "partial": "Tok As SP",
          "signature": "k-\u003et-\u003eParser k(t,SourcePos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:pTokAsSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept a token if the function returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "pTokMaybe",
          "package": "ddc-base",
          "signature": "(k -\u003e Maybe a) -\u003e Parser k a",
          "source": "src/DDC-Base-Parser.html#pTokMaybe",
          "type": "function"
        },
        "index": {
          "description": "Accept token if the function returns Just",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "pTokMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eParser a b",
          "package": "ddc-base",
          "partial": "Tok Maybe",
          "signature": "(k-\u003eMaybe a)-\u003eParser k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:pTokMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept a token if the function return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, \n   also returning the source position of that token.\n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "pTokMaybeSP",
          "package": "ddc-base",
          "signature": "(k -\u003e Maybe a) -\u003e Parser k (a, SourcePos)",
          "source": "src/DDC-Base-Parser.html#pTokMaybeSP",
          "type": "function"
        },
        "index": {
          "description": "Accept token if the function return Just also returning the source position of that token",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "pTokMaybeSP",
          "normalized": "(a-\u003eMaybe b)-\u003eParser a(b,SourcePos)",
          "package": "ddc-base",
          "partial": "Tok Maybe SP",
          "signature": "(k-\u003eMaybe a)-\u003eParser k(a,SourcePos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:pTokMaybeSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept the given token, returning its source position.\n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "pTokSP",
          "package": "ddc-base",
          "signature": "k -\u003e Parser k SourcePos",
          "source": "src/DDC-Base-Parser.html#pTokSP",
          "type": "function"
        },
        "index": {
          "description": "Accept the given token returning its source position",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "pTokSP",
          "normalized": "a-\u003eParser a SourcePos",
          "package": "ddc-base",
          "partial": "Tok SP",
          "signature": "k-\u003eParser k SourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:pTokSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a generic parser.\n\u003c/p\u003e",
          "module": "DDC.Base.Parser",
          "name": "runTokenParser",
          "package": "ddc-base",
          "signature": "(k -\u003e String)-\u003e String-\u003e Parser k a-\u003e [Token k]-\u003e Either ParseError a",
          "type": "function"
        },
        "index": {
          "description": "Run generic parser",
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "runTokenParser",
          "normalized": "(a-\u003eString)-\u003eString-\u003eParser a b-\u003e[Token a]-\u003eEither ParseError b",
          "package": "ddc-base",
          "partial": "Token Parser",
          "signature": "(k-\u003eString)-\u003eString-\u003eParser k a-\u003e[Token k]-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:runTokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Base.Parser",
          "name": "stateFileName",
          "package": "ddc-base",
          "signature": "String",
          "source": "src/DDC-Base-Parser.html#ParserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "stateFileName",
          "package": "ddc-base",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:stateFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Base.Parser",
          "name": "stateTokenShow",
          "package": "ddc-base",
          "signature": "k -\u003e String",
          "source": "src/DDC-Base-Parser.html#ParserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Base Parser",
          "module": "DDC.Base.Parser",
          "name": "stateTokenShow",
          "normalized": "a-\u003eString",
          "package": "ddc-base",
          "partial": "Token Show",
          "signature": "k-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Parser.html#v:stateTokenShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printer utilities.\n\u003c/p\u003e\u003cp\u003eThis is a re-export of Daan Leijen's pretty printer package (\u003ccode\u003ewl-pprint\u003c/code\u003e),\n   but with a \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e class that includes a \u003ccode\u003e\u003ca\u003epprPrec\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Base.Pretty",
          "name": "Pretty",
          "package": "ddc-base",
          "source": "src/DDC-Base-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printer utilities This is re-export of Daan Leijen pretty printer package wl-pprint but with Pretty class that includes pprPrec function",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "Pretty",
          "package": "ddc-base",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Base.Pretty",
          "name": "Pretty",
          "package": "ddc-base",
          "source": "src/DDC-Base-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "Pretty",
          "package": "ddc-base",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to pretty print a doc.\n\u003c/p\u003e",
          "module": "DDC.Base.Pretty",
          "name": "RenderMode",
          "package": "ddc-base",
          "source": "src/DDC-Base-Pretty.html#RenderMode",
          "type": "data"
        },
        "index": {
          "description": "How to pretty print doc",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "RenderMode",
          "package": "ddc-base",
          "partial": "Render Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#t:RenderMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the doc without indenting.\n\u003c/p\u003e",
          "module": "DDC.Base.Pretty",
          "name": "RenderIndent",
          "package": "ddc-base",
          "signature": "RenderIndent",
          "source": "src/DDC-Base-Pretty.html#RenderMode",
          "type": "function"
        },
        "index": {
          "description": "Render the doc without indenting",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "RenderIndent",
          "package": "ddc-base",
          "partial": "Render Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:RenderIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the doc with indenting.\n\u003c/p\u003e",
          "module": "DDC.Base.Pretty",
          "name": "RenderPlain",
          "package": "ddc-base",
          "signature": "RenderPlain",
          "source": "src/DDC-Base-Pretty.html#RenderMode",
          "type": "function"
        },
        "index": {
          "description": "Render the doc with indenting",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "RenderPlain",
          "package": "ddc-base",
          "partial": "Render Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:RenderPlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Base.Pretty",
          "name": "ppr",
          "package": "ddc-base",
          "signature": "a -\u003e Doc",
          "source": "src/DDC-Base-Pretty.html#ppr",
          "type": "method"
        },
        "index": {
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "ppr",
          "normalized": "a-\u003eDoc",
          "package": "ddc-base",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:ppr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e in parens if the predicate is true.\n\u003c/p\u003e",
          "module": "DDC.Base.Pretty",
          "name": "pprParen",
          "package": "ddc-base",
          "signature": "Bool -\u003e Doc -\u003e Doc",
          "source": "src/DDC-Base-Pretty.html#pprParen",
          "type": "function"
        },
        "index": {
          "description": "Wrap Doc in parens if the predicate is true",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "pprParen",
          "normalized": "Bool-\u003eDoc-\u003eDoc",
          "package": "ddc-base",
          "partial": "Paren",
          "signature": "Bool-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:pprParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Base.Pretty",
          "name": "pprPrec",
          "package": "ddc-base",
          "signature": "Int -\u003e a -\u003e Doc",
          "source": "src/DDC-Base-Pretty.html#pprPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "pprPrec",
          "normalized": "Int-\u003ea-\u003eDoc",
          "package": "ddc-base",
          "partial": "Prec",
          "signature": "Int-\u003ea-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:pprPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003estdout\u003c/code\u003e using the given mode.\n\u003c/p\u003e",
          "module": "DDC.Base.Pretty",
          "name": "putDoc",
          "package": "ddc-base",
          "signature": "RenderMode -\u003e Doc -\u003e IO ()",
          "source": "src/DDC-Base-Pretty.html#putDoc",
          "type": "function"
        },
        "index": {
          "description": "Put Doc to stdout using the given mode",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "putDoc",
          "normalized": "RenderMode-\u003eDoc-\u003eIO()",
          "package": "ddc-base",
          "partial": "Doc",
          "signature": "RenderMode-\u003eDoc-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:putDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003estdout\u003c/code\u003e using the given mode.\n\u003c/p\u003e",
          "module": "DDC.Base.Pretty",
          "name": "putDocLn",
          "package": "ddc-base",
          "signature": "RenderMode -\u003e Doc -\u003e IO ()",
          "source": "src/DDC-Base-Pretty.html#putDocLn",
          "type": "function"
        },
        "index": {
          "description": "Put Doc to stdout using the given mode",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "putDocLn",
          "normalized": "RenderMode-\u003eDoc-\u003eIO()",
          "package": "ddc-base",
          "partial": "Doc Ln",
          "signature": "RenderMode-\u003eDoc-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:putDocLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a doc with the given mode.\n\u003c/p\u003e",
          "module": "DDC.Base.Pretty",
          "name": "render",
          "package": "ddc-base",
          "signature": "RenderMode -\u003e Doc -\u003e String",
          "source": "src/DDC-Base-Pretty.html#render",
          "type": "function"
        },
        "index": {
          "description": "Render doc with the given mode",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "render",
          "normalized": "RenderMode-\u003eDoc-\u003eString",
          "package": "ddc-base",
          "signature": "RenderMode-\u003eDoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e to a string with indentation\n\u003c/p\u003e",
          "module": "DDC.Base.Pretty",
          "name": "renderIndent",
          "package": "ddc-base",
          "signature": "Doc -\u003e String",
          "source": "src/DDC-Base-Pretty.html#renderIndent",
          "type": "function"
        },
        "index": {
          "description": "Convert Doc to string with indentation",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "renderIndent",
          "normalized": "Doc-\u003eString",
          "package": "ddc-base",
          "partial": "Indent",
          "signature": "Doc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:renderIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e to a string without indentation.\n\u003c/p\u003e",
          "module": "DDC.Base.Pretty",
          "name": "renderPlain",
          "package": "ddc-base",
          "signature": "Doc -\u003e String",
          "source": "src/DDC-Base-Pretty.html#renderPlain",
          "type": "function"
        },
        "index": {
          "description": "Convert Doc to string without indentation",
          "hierarchy": "DDC Base Pretty",
          "module": "DDC.Base.Pretty",
          "name": "renderPlain",
          "normalized": "Doc-\u003eString",
          "package": "ddc-base",
          "partial": "Plain",
          "signature": "Doc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Base-Pretty.html#v:renderPlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple exception monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Control.Monad.Check",
          "name": "Check",
          "package": "ddc-base",
          "source": "src/DDC-Control-Monad-Check.html",
          "type": "module"
        },
        "index": {
          "description": "simple exception monad",
          "hierarchy": "DDC Control Monad Check",
          "module": "DDC.Control.Monad.Check",
          "name": "Check",
          "package": "ddc-base",
          "partial": "Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Control-Monad-Check.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Control.Monad.Check",
          "name": "CheckM",
          "package": "ddc-base",
          "source": "src/DDC-Control-Monad-Check.html#CheckM",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Control Monad Check",
          "module": "DDC.Control.Monad.Check",
          "name": "CheckM",
          "package": "ddc-base",
          "partial": "Check",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Control-Monad-Check.html#t:CheckM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Control.Monad.Check",
          "name": "CheckM",
          "package": "ddc-base",
          "signature": "CheckM (Either err a)",
          "source": "src/DDC-Control-Monad-Check.html#CheckM",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Control Monad Check",
          "module": "DDC.Control.Monad.Check",
          "name": "CheckM",
          "package": "ddc-base",
          "partial": "Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Control-Monad-Check.html#v:CheckM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the result from a check monad.\n\u003c/p\u003e",
          "module": "DDC.Control.Monad.Check",
          "name": "result",
          "package": "ddc-base",
          "signature": "CheckM err a -\u003e Either err a",
          "source": "src/DDC-Control-Monad-Check.html#result",
          "type": "function"
        },
        "index": {
          "description": "Take the result from check monad",
          "hierarchy": "DDC Control Monad Check",
          "module": "DDC.Control.Monad.Check",
          "name": "result",
          "normalized": "CheckM a b-\u003eEither a b",
          "package": "ddc-base",
          "signature": "CheckM err a-\u003eEither err a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Control-Monad-Check.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow a type error in the monad.\n\u003c/p\u003e",
          "module": "DDC.Control.Monad.Check",
          "name": "throw",
          "package": "ddc-base",
          "signature": "err -\u003e CheckM err a",
          "source": "src/DDC-Control-Monad-Check.html#throw",
          "type": "function"
        },
        "index": {
          "description": "Throw type error in the monad",
          "hierarchy": "DDC Control Monad Check",
          "module": "DDC.Control.Monad.Check",
          "name": "throw",
          "normalized": "a-\u003eCheckM a b",
          "package": "ddc-base",
          "signature": "err-\u003eCheckM err a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Control-Monad-Check.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.Canned",
          "name": "Canned",
          "package": "ddc-base",
          "source": "src/DDC-Data-Canned.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Data Canned",
          "module": "DDC.Data.Canned",
          "name": "Canned",
          "package": "ddc-base",
          "partial": "Canned",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Canned.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function has a show instance that prints \"CANNED\" for any contained\n   type. We use it to wrap functional fields in data types that we still want\n   to derive Show instances for.\n\u003c/p\u003e",
          "module": "DDC.Data.Canned",
          "name": "Canned",
          "package": "ddc-base",
          "source": "src/DDC-Data-Canned.html#Canned",
          "type": "data"
        },
        "index": {
          "description": "This function has show instance that prints CANNED for any contained type We use it to wrap functional fields in data types that we still want to derive Show instances for",
          "hierarchy": "DDC Data Canned",
          "module": "DDC.Data.Canned",
          "name": "Canned",
          "package": "ddc-base",
          "partial": "Canned",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Canned.html#t:Canned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.Canned",
          "name": "Canned",
          "package": "ddc-base",
          "signature": "Canned a",
          "source": "src/DDC-Data-Canned.html#Canned",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Data Canned",
          "module": "DDC.Data.Canned",
          "name": "Canned",
          "package": "ddc-base",
          "partial": "Canned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Canned.html#v:Canned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReplacements for unhelpful Haskell list functions.\n   If the standard versions are passed an empty list then we don't\n   get a proper source location.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Data.ListUtils",
          "name": "ListUtils",
          "package": "ddc-base",
          "source": "src/DDC-Data-ListUtils.html",
          "type": "module"
        },
        "index": {
          "description": "Replacements for unhelpful Haskell list functions If the standard versions are passed an empty list then we don get proper source location",
          "hierarchy": "DDC Data ListUtils",
          "module": "DDC.Data.ListUtils",
          "name": "ListUtils",
          "package": "ddc-base",
          "partial": "List Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-ListUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the element at the given index,\n   or `Nothing if it's not there.\n\u003c/p\u003e",
          "module": "DDC.Data.ListUtils",
          "name": "index",
          "package": "ddc-base",
          "signature": "[a] -\u003e Int -\u003e Maybe a",
          "source": "src/DDC-Data-ListUtils.html#index",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the element at the given index or Nothing if it not there",
          "hierarchy": "DDC Data ListUtils",
          "module": "DDC.Data.ListUtils",
          "name": "index",
          "normalized": "[a]-\u003eInt-\u003eMaybe a",
          "package": "ddc-base",
          "signature": "[a]-\u003eInt-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-ListUtils.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the head of a list, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it's empty.\n\u003c/p\u003e",
          "module": "DDC.Data.ListUtils",
          "name": "takeHead",
          "package": "ddc-base",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/DDC-Data-ListUtils.html#takeHead",
          "type": "function"
        },
        "index": {
          "description": "Take the head of list or Nothing if it empty",
          "hierarchy": "DDC Data ListUtils",
          "module": "DDC.Data.ListUtils",
          "name": "takeHead",
          "normalized": "[a]-\u003eMaybe a",
          "package": "ddc-base",
          "partial": "Head",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-ListUtils.html#v:takeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the init of a list, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it's empty.\n\u003c/p\u003e",
          "module": "DDC.Data.ListUtils",
          "name": "takeInit",
          "package": "ddc-base",
          "signature": "[a] -\u003e Maybe [a]",
          "source": "src/DDC-Data-ListUtils.html#takeInit",
          "type": "function"
        },
        "index": {
          "description": "Take the init of list or Nothing if it empty",
          "hierarchy": "DDC Data ListUtils",
          "module": "DDC.Data.ListUtils",
          "name": "takeInit",
          "normalized": "[a]-\u003eMaybe[a]",
          "package": "ddc-base",
          "partial": "Init",
          "signature": "[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-ListUtils.html#v:takeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the tail of a list, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it's empty.\n\u003c/p\u003e",
          "module": "DDC.Data.ListUtils",
          "name": "takeTail",
          "package": "ddc-base",
          "signature": "[a] -\u003e Maybe [a]",
          "source": "src/DDC-Data-ListUtils.html#takeTail",
          "type": "function"
        },
        "index": {
          "description": "Take the tail of list or Nothing if it empty",
          "hierarchy": "DDC Data ListUtils",
          "module": "DDC.Data.ListUtils",
          "name": "takeTail",
          "normalized": "[a]-\u003eMaybe[a]",
          "package": "ddc-base",
          "partial": "Tail",
          "signature": "[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-ListUtils.html#v:takeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.SourcePos",
          "name": "SourcePos",
          "package": "ddc-base",
          "source": "src/DDC-Data-SourcePos.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Data SourcePos",
          "module": "DDC.Data.SourcePos",
          "name": "SourcePos",
          "package": "ddc-base",
          "partial": "Source Pos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-SourcePos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position in a source file.        \n\u003c/p\u003e\u003cp\u003eIf there is no file path then we assume that the input has been read\n   from an interactive session and display ''\u003cinteractive\u003e'' when pretty printing.\n\u003c/p\u003e",
          "module": "DDC.Data.SourcePos",
          "name": "SourcePos",
          "package": "ddc-base",
          "source": "src/DDC-Data-SourcePos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "position in source file If there is no file path then we assume that the input has been read from an interactive session and display interactive when pretty printing",
          "hierarchy": "DDC Data SourcePos",
          "module": "DDC.Data.SourcePos",
          "name": "SourcePos",
          "package": "ddc-base",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-SourcePos.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.SourcePos",
          "name": "SourcePos",
          "package": "ddc-base",
          "signature": "SourcePos",
          "source": "src/DDC-Data-SourcePos.html#SourcePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Data SourcePos",
          "module": "DDC.Data.SourcePos",
          "name": "SourcePos",
          "package": "ddc-base",
          "partial": "Source Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-SourcePos.html#v:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.SourcePos",
          "name": "sourcePosColumn",
          "package": "ddc-base",
          "signature": "Int",
          "source": "src/DDC-Data-SourcePos.html#SourcePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Data SourcePos",
          "module": "DDC.Data.SourcePos",
          "name": "sourcePosColumn",
          "package": "ddc-base",
          "partial": "Pos Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-SourcePos.html#v:sourcePosColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.SourcePos",
          "name": "sourcePosLine",
          "package": "ddc-base",
          "signature": "Int",
          "source": "src/DDC-Data-SourcePos.html#SourcePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Data SourcePos",
          "module": "DDC.Data.SourcePos",
          "name": "sourcePosLine",
          "package": "ddc-base",
          "partial": "Pos Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-SourcePos.html#v:sourcePosLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.SourcePos",
          "name": "sourcePosSource",
          "package": "ddc-base",
          "signature": "String",
          "source": "src/DDC-Data-SourcePos.html#SourcePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Data SourcePos",
          "module": "DDC.Data.SourcePos",
          "name": "sourcePosSource",
          "package": "ddc-base",
          "partial": "Pos Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-SourcePos.html#v:sourcePosSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.Token",
          "name": "Token",
          "package": "ddc-base",
          "source": "src/DDC-Data-Token.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Data Token",
          "module": "DDC.Data.Token",
          "name": "Token",
          "package": "ddc-base",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for primitive token type that gives it a source position.\n\u003c/p\u003e",
          "module": "DDC.Data.Token",
          "name": "Token",
          "package": "ddc-base",
          "source": "src/DDC-Data-Token.html#Token",
          "type": "data"
        },
        "index": {
          "description": "Wrapper for primitive token type that gives it source position",
          "hierarchy": "DDC Data Token",
          "module": "DDC.Data.Token",
          "name": "Token",
          "package": "ddc-base",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Token.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.Token",
          "name": "Token",
          "package": "ddc-base",
          "signature": "Token",
          "source": "src/DDC-Data-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Data Token",
          "module": "DDC.Data.Token",
          "name": "Token",
          "package": "ddc-base",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Token.html#v:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the parsec style source position from a token.\n\u003c/p\u003e",
          "module": "DDC.Data.Token",
          "name": "takeParsecSourcePos",
          "package": "ddc-base",
          "signature": "Token k -\u003e SourcePos",
          "source": "src/DDC-Data-Token.html#takeParsecSourcePos",
          "type": "function"
        },
        "index": {
          "description": "Take the parsec style source position from token",
          "hierarchy": "DDC Data Token",
          "module": "DDC.Data.Token",
          "name": "takeParsecSourcePos",
          "normalized": "Token a-\u003eSourcePos",
          "package": "ddc-base",
          "partial": "Parsec Source Pos",
          "signature": "Token k-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Token.html#v:takeParsecSourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the column number of a token.\n\u003c/p\u003e",
          "module": "DDC.Data.Token",
          "name": "tokenColumn",
          "package": "ddc-base",
          "signature": "Token t -\u003e Int",
          "source": "src/DDC-Data-Token.html#tokenColumn",
          "type": "function"
        },
        "index": {
          "description": "Take the column number of token",
          "hierarchy": "DDC Data Token",
          "module": "DDC.Data.Token",
          "name": "tokenColumn",
          "normalized": "Token a-\u003eInt",
          "package": "ddc-base",
          "partial": "Column",
          "signature": "Token t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Token.html#v:tokenColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the line number of a token.\n\u003c/p\u003e",
          "module": "DDC.Data.Token",
          "name": "tokenLine",
          "package": "ddc-base",
          "signature": "Token t -\u003e Int",
          "source": "src/DDC-Data-Token.html#tokenLine",
          "type": "function"
        },
        "index": {
          "description": "Take the line number of token",
          "hierarchy": "DDC Data Token",
          "module": "DDC.Data.Token",
          "name": "tokenLine",
          "normalized": "Token a-\u003eInt",
          "package": "ddc-base",
          "partial": "Line",
          "signature": "Token t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Token.html#v:tokenLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.Token",
          "name": "tokenSourcePos",
          "package": "ddc-base",
          "signature": "SourcePos",
          "source": "src/DDC-Data-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Data Token",
          "module": "DDC.Data.Token",
          "name": "tokenSourcePos",
          "package": "ddc-base",
          "partial": "Source Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Token.html#v:tokenSourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Data.Token",
          "name": "tokenTok",
          "package": "ddc-base",
          "signature": "t",
          "source": "src/DDC-Data-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Data Token",
          "module": "DDC.Data.Token",
          "name": "tokenTok",
          "package": "ddc-base",
          "partial": "Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-base/docs/DDC-Data-Token.html#v:tokenTok"
      }
    }
  ]
]