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
        "word": "pretty-show"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for human-readable derived \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Show.Pretty",
          "name": "Pretty",
          "package": "pretty-show",
          "source": "src/Text-Show-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for human-readable derived Show instances",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Pretty",
          "package": "pretty-show",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.Pretty",
          "name": "Html",
          "package": "pretty-show",
          "source": "src/Text-Show-Html.html#Html",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Html",
          "package": "pretty-show",
          "partial": "Html",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:Html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions on how to generate Html (more to come).\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "HtmlOpts",
          "package": "pretty-show",
          "source": "src/Text-Show-Html.html#HtmlOpts",
          "type": "data"
        },
        "index": {
          "description": "Options on how to generate Html more to come",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "HtmlOpts",
          "package": "pretty-show",
          "partial": "Html Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:HtmlOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Name",
          "package": "pretty-show",
          "source": "src/Text-Show-Value.html#Name",
          "type": "type"
        },
        "index": {
          "description": "name",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Name",
          "package": "pretty-show",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for types that may be reified into a value.\n Instances of this class may be derived automatically,\n for datatypes that support \u003ccode\u003eGenerics\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "PrettyVal",
          "package": "pretty-show",
          "source": "src/Text-Show-PrettyVal.html#PrettyVal",
          "type": "class"
        },
        "index": {
          "description": "class for types that may be reified into value Instances of this class may be derived automatically for datatypes that support Generics",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "PrettyVal",
          "package": "pretty-show",
          "partial": "Pretty Val",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:PrettyVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric Haskell values.\n \u003ccode\u003eNaN\u003c/code\u003e and \u003ccode\u003eInfinity\u003c/code\u003e are represented as constructors.\n The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in the literals is the text for the literals \"as is\".\n\u003c/p\u003e\u003cp\u003eA chain of infix constructors means that they appeared in the input string\n without parentheses, i.e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e1 :+: 2 :*: 3\u003c/code\u003e is represented with \u003ccode\u003eInfixCons 1 [(\u003ca\u003e:+:\u003c/a\u003e,2),(\u003ca\u003e:*:\u003c/a\u003e,3)]\u003c/code\u003e, whereas\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e1 :+: (2 :*: 3)\u003c/code\u003e is represented with \u003ccode\u003eInfixCons 1 [(\u003ca\u003e:+:\u003c/a\u003e,InfixCons 2 [(\u003ca\u003e:*:\u003c/a\u003e,3)])]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Value",
          "package": "pretty-show",
          "source": "src/Text-Show-Value.html#Value",
          "type": "data"
        },
        "index": {
          "description": "Generic Haskell values NaN and Infinity are represented as constructors The String in the literals is the text for the literals as is chain of infix constructors means that they appeared in the input string without parentheses i.e is represented with InfixCons whereas is represented with InfixCons InfixCons",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Value",
          "package": "pretty-show",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Char",
          "package": "pretty-show",
          "signature": "Char String",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Character",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Char",
          "package": "pretty-show",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData constructor\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Con",
          "package": "pretty-show",
          "signature": "Con Name [Value]",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Data constructor",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Con",
          "normalized": "Con Name[Value]",
          "package": "pretty-show",
          "partial": "Con",
          "signature": "Con Name[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-negative floating num.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Float",
          "package": "pretty-show",
          "signature": "Float String",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Non-negative floating num",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Float",
          "package": "pretty-show",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.Pretty",
          "name": "Html",
          "package": "pretty-show",
          "signature": "Html",
          "source": "src/Text-Show-Html.html#Html",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Html",
          "package": "pretty-show",
          "partial": "Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.Pretty",
          "name": "HtmlOpts",
          "package": "pretty-show",
          "signature": "HtmlOpts",
          "source": "src/Text-Show-Html.html#HtmlOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "HtmlOpts",
          "package": "pretty-show",
          "partial": "Html Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:HtmlOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix data constructor chain\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "InfixCons",
          "package": "pretty-show",
          "signature": "InfixCons Value [(Name, Value)]",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Infix data constructor chain",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "InfixCons",
          "normalized": "InfixCons Value[(Name,Value)]",
          "package": "pretty-show",
          "partial": "Infix Cons",
          "signature": "InfixCons Value[(Name,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:InfixCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-negative integer\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Integer",
          "package": "pretty-show",
          "signature": "Integer String",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Non-negative integer",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Integer",
          "package": "pretty-show",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "List",
          "package": "pretty-show",
          "signature": "List [Value]",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "List",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "List",
          "normalized": "List[Value]",
          "package": "pretty-show",
          "partial": "List",
          "signature": "List[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegated value\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Neg",
          "package": "pretty-show",
          "signature": "Neg Value",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Negated value",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Neg",
          "package": "pretty-show",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRational\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Ratio",
          "package": "pretty-show",
          "signature": "Ratio Value Value",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Rational",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Ratio",
          "package": "pretty-show",
          "partial": "Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Ratio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord value\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Rec",
          "package": "pretty-show",
          "signature": "Rec Name [(Name, Value)]",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Record value",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Rec",
          "normalized": "Rec Name[(Name,Value)]",
          "package": "pretty-show",
          "partial": "Rec",
          "signature": "Rec Name[(Name,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "String",
          "package": "pretty-show",
          "signature": "String String",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "String",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "String",
          "package": "pretty-show",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuple\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "Tuple",
          "package": "pretty-show",
          "signature": "Tuple [Value]",
          "source": "src/Text-Show-Value.html#Value",
          "type": "function"
        },
        "index": {
          "description": "Tuple",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "Tuple",
          "normalized": "Tuple[Value]",
          "package": "pretty-show",
          "partial": "Tuple",
          "signature": "Tuple[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath for extra files.  If empty, we look in\n directory \u003ccode\u003estyle\u003c/code\u003e, relative to document.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "dataDir",
          "package": "pretty-show",
          "signature": "FilePath",
          "source": "src/Text-Show-Html.html#HtmlOpts",
          "type": "function"
        },
        "index": {
          "description": "Path for extra files If empty we look in directory style relative to document",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "dataDir",
          "package": "pretty-show",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:dataDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault options.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "defaultHtmlOpts",
          "package": "pretty-show",
          "signature": "HtmlOpts",
          "source": "src/Text-Show-Html.html#defaultHtmlOpts",
          "type": "function"
        },
        "index": {
          "description": "Default options",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "defaultHtmlOpts",
          "package": "pretty-show",
          "partial": "Html Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:defaultHtmlOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a value in the \u003ccode\u003e\u003ca\u003ePrettyVal\u003c/a\u003e\u003c/code\u003e class to a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n The benefit of this function is that \u003ccode\u003e\u003ca\u003ePrettyVal\u003c/a\u003e\u003c/code\u003e instances may\n be derived automatically using generics.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "dumpDoc",
          "package": "pretty-show",
          "signature": "a -\u003e Doc",
          "source": "src/Text-Show-Pretty.html#dumpDoc",
          "type": "function"
        },
        "index": {
          "description": "Render value in the PrettyVal class to Doc The benefit of this function is that PrettyVal instances may be derived automatically using generics",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "dumpDoc",
          "normalized": "a-\u003eDoc",
          "package": "pretty-show",
          "partial": "Doc",
          "signature": "a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:dumpDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a value in the \u003ccode\u003e\u003ca\u003ePrettyVal\u003c/a\u003e\u003c/code\u003e class to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n The benefit of this function is that \u003ccode\u003e\u003ca\u003ePrettyVal\u003c/a\u003e\u003c/code\u003e instances may\n be derived automatically using generics.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "dumpStr",
          "package": "pretty-show",
          "signature": "a -\u003e String",
          "source": "src/Text-Show-Pretty.html#dumpStr",
          "type": "function"
        },
        "index": {
          "description": "Render value in the PrettyVal class to String The benefit of this function is that PrettyVal instances may be derived automatically using generics",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "dumpStr",
          "normalized": "a-\u003eString",
          "package": "pretty-show",
          "partial": "Str",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:dumpStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.Pretty",
          "name": "exportHtml",
          "package": "pretty-show",
          "signature": "String",
          "source": "src/Text-Show-Html.html#Html",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "exportHtml",
          "package": "pretty-show",
          "partial": "Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:exportHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.Pretty",
          "name": "getDataDir",
          "package": "pretty-show",
          "signature": "IO FilePath",
          "source": "src/Paths_pretty_show.html#getDataDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "getDataDir",
          "package": "pretty-show",
          "partial": "Data Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:getDataDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an Html fragment to make an Html page.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "htmlPage",
          "package": "pretty-show",
          "signature": "HtmlOpts -\u003e Html -\u003e String",
          "source": "src/Text-Show-Html.html#htmlPage",
          "type": "function"
        },
        "index": {
          "description": "Wrap an Html fragment to make an Html page",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "htmlPage",
          "normalized": "HtmlOpts-\u003eHtml-\u003eString",
          "package": "pretty-show",
          "partial": "Page",
          "signature": "HtmlOpts-\u003eHtml-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:htmlPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.Pretty",
          "name": "parseValue",
          "package": "pretty-show",
          "signature": "String -\u003e Maybe Value",
          "source": "src/Text-Show-Pretty.html#parseValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "parseValue",
          "normalized": "String-\u003eMaybe Value",
          "package": "pretty-show",
          "partial": "Value",
          "signature": "String-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:parseValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to show a value, prettily. If we do not understand the value, then we\n   just use its standard \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "ppDoc",
          "package": "pretty-show",
          "signature": "a -\u003e Doc",
          "source": "src/Text-Show-Pretty.html#ppDoc",
          "type": "function"
        },
        "index": {
          "description": "Try to show value prettily If we do not understand the value then we just use its standard Show instance",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "ppDoc",
          "normalized": "a-\u003eDoc",
          "package": "pretty-show",
          "partial": "Doc",
          "signature": "a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:ppDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a generic value into a pretty \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, if possible.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "ppShow",
          "package": "pretty-show",
          "signature": "a -\u003e String",
          "source": "src/Text-Show-Pretty.html#ppShow",
          "type": "function"
        },
        "index": {
          "description": "Convert generic value into pretty String if possible",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "ppShow",
          "normalized": "a-\u003eString",
          "package": "pretty-show",
          "partial": "Show",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:ppShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use \u003ccode\u003e\u003ca\u003evalToDoc\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Show.Pretty",
          "name": "ppValue",
          "package": "pretty-show",
          "signature": "Value -\u003e Doc",
          "source": "src/Text-Show-Pretty.html#ppValue",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Please use valToDoc instead",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "ppValue",
          "normalized": "Value-\u003eDoc",
          "package": "pretty-show",
          "partial": "Value",
          "signature": "Value-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:ppValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.Pretty",
          "name": "prettyVal",
          "package": "pretty-show",
          "signature": "a -\u003e Value",
          "source": "src/Text-Show-PrettyVal.html#prettyVal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "prettyVal",
          "normalized": "a-\u003eValue",
          "package": "pretty-show",
          "partial": "Val",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:prettyVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.Pretty",
          "name": "reify",
          "package": "pretty-show",
          "signature": "a -\u003e Maybe Value",
          "source": "src/Text-Show-Pretty.html#reify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "reify",
          "normalized": "a-\u003eMaybe Value",
          "package": "pretty-show",
          "signature": "a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:reify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a generic value. Our intention is that the result is\n   equivalent to the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for the original value, except possibly\n   easier to understand by a human.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "valToDoc",
          "package": "pretty-show",
          "signature": "Value -\u003e Doc",
          "source": "src/Text-Show-Pretty.html#valToDoc",
          "type": "function"
        },
        "index": {
          "description": "Pretty print generic value Our intention is that the result is equivalent to the Show instance for the original value except possibly easier to understand by human",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "valToDoc",
          "normalized": "Value-\u003eDoc",
          "package": "pretty-show",
          "partial": "To Doc",
          "signature": "Value-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:valToDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value into an Html fragment.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "valToHtml",
          "package": "pretty-show",
          "signature": "HtmlOpts -\u003e Value -\u003e Html",
          "source": "src/Text-Show-Html.html#valToHtml",
          "type": "function"
        },
        "index": {
          "description": "Convert value into an Html fragment",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "valToHtml",
          "normalized": "HtmlOpts-\u003eValue-\u003eHtml",
          "package": "pretty-show",
          "partial": "To Html",
          "signature": "HtmlOpts-\u003eValue-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:valToHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an Html page representing the given value.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "valToHtmlPage",
          "package": "pretty-show",
          "signature": "HtmlOpts -\u003e Value -\u003e String",
          "source": "src/Text-Show-Html.html#valToHtmlPage",
          "type": "function"
        },
        "index": {
          "description": "Make an Html page representing the given value",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "valToHtmlPage",
          "normalized": "HtmlOpts-\u003eValue-\u003eString",
          "package": "pretty-show",
          "partial": "To Html Page",
          "signature": "HtmlOpts-\u003eValue-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:valToHtmlPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a generic value. Our intention is that the result is\n   equivalent to the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for the original value, except possibly\n   easier to understand by a human.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "valToStr",
          "package": "pretty-show",
          "signature": "Value -\u003e String",
          "source": "src/Text-Show-Pretty.html#valToStr",
          "type": "function"
        },
        "index": {
          "description": "Pretty print generic value Our intention is that the result is equivalent to the Show instance for the original value except possibly easier to understand by human",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "valToStr",
          "normalized": "Value-\u003eString",
          "package": "pretty-show",
          "partial": "To Str",
          "signature": "Value-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:valToStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMax. number of columns in wide lists.\n\u003c/p\u003e",
          "module": "Text.Show.Pretty",
          "name": "wideListWidth",
          "package": "pretty-show",
          "signature": "Int",
          "source": "src/Text-Show-Html.html#HtmlOpts",
          "type": "function"
        },
        "index": {
          "description": "Max number of columns in wide lists",
          "hierarchy": "Text Show Pretty",
          "module": "Text.Show.Pretty",
          "name": "wideListWidth",
          "package": "pretty-show",
          "partial": "List Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:wideListWidth"
      }
    }
  ]
]