[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for human-readable derived \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "module",
        "fct-source": "src/Text-Show-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "Functions for human-readable derived Show instances",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:Html",
      "description": {
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "newtype",
        "fct-source": "src/Text-Show-Html.html#Html",
        "fct-type": "newtype",
        "title": "Html"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Html",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:HtmlOpts",
      "description": {
        "fct-descr": "\u003cp\u003eOptions on how to generate Html (more to come).\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "data",
        "fct-source": "src/Text-Show-Html.html#HtmlOpts",
        "fct-type": "data",
        "title": "HtmlOpts"
      },
      "index": {
        "description": "Options on how to generate Html more to come",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "HtmlOpts",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Html Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eA name.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "type",
        "fct-source": "src/Text-Show-Value.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "name",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Name",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:PrettyVal",
      "description": {
        "fct-descr": "\u003cp\u003eA class for types that may be reified into a value.\n Instances of this class may be derived automatically,\n for datatypes that support \u003ccode\u003eGenerics\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "class",
        "fct-source": "src/Text-Show-PrettyVal.html#PrettyVal",
        "fct-type": "class",
        "title": "PrettyVal"
      },
      "index": {
        "description": "class for types that may be reified into value Instances of this class may be derived automatically for datatypes that support Generics",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "PrettyVal",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Pretty Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric Haskell values.\n \u003ccode\u003eNaN\u003c/code\u003e and \u003ccode\u003eInfinity\u003c/code\u003e are represented as constructors.\n The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in the literals is the text for the literals \"as is\".\n\u003c/p\u003e\u003cp\u003eA chain of infix constructors means that they appeared in the input string\n without parentheses, i.e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e1 :+: 2 :*: 3\u003c/code\u003e is represented with \u003ccode\u003eInfixCons 1 [(\u003ca\u003e:+:\u003c/a\u003e,2),(\u003ca\u003e:*:\u003c/a\u003e,3)]\u003c/code\u003e, whereas\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e1 :+: (2 :*: 3)\u003c/code\u003e is represented with \u003ccode\u003eInfixCons 1 [(\u003ca\u003e:+:\u003c/a\u003e,InfixCons 2 [(\u003ca\u003e:*:\u003c/a\u003e,3)])]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "data",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "Generic Haskell values NaN and Infinity are represented as constructors The String in the literals is the text for the literals as is chain of infix constructors means that they appeared in the input string without parentheses i.e is represented with InfixCons whereas is represented with InfixCons InfixCons",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Value",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Char",
      "description": {
        "fct-descr": "\u003cp\u003eCharacter\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Char String",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "Char"
      },
      "index": {
        "description": "Character",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Char",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Con",
      "description": {
        "fct-descr": "\u003cp\u003eData constructor\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Con Name [Value]",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "Con"
      },
      "index": {
        "description": "Data constructor",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Con",
        "normalized": "Con Name[Value]",
        "package": "pretty-show",
        "partial": "Con",
        "signature": "Con Name[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Float",
      "description": {
        "fct-descr": "\u003cp\u003eNon-negative floating num.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Float String",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "Float"
      },
      "index": {
        "description": "Non-negative floating num",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Float",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Html",
      "description": {
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Html",
        "fct-source": "src/Text-Show-Html.html#Html",
        "fct-type": "function",
        "title": "Html"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Html",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:HtmlOpts",
      "description": {
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "HtmlOpts",
        "fct-source": "src/Text-Show-Html.html#HtmlOpts",
        "fct-type": "function",
        "title": "HtmlOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "HtmlOpts",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Html Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:InfixCons",
      "description": {
        "fct-descr": "\u003cp\u003eInfix data constructor chain\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "InfixCons Value [(Name, Value)]",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "InfixCons"
      },
      "index": {
        "description": "Infix data constructor chain",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "InfixCons",
        "normalized": "InfixCons Value[(Name,Value)]",
        "package": "pretty-show",
        "partial": "Infix Cons",
        "signature": "InfixCons Value[(Name,Value)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Integer",
      "description": {
        "fct-descr": "\u003cp\u003eNon-negative integer\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Integer String",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "Integer"
      },
      "index": {
        "description": "Non-negative integer",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Integer",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:List",
      "description": {
        "fct-descr": "\u003cp\u003eList\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "List [Value]",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "List",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "List",
        "normalized": "List[Value]",
        "package": "pretty-show",
        "partial": "List",
        "signature": "List[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Neg",
      "description": {
        "fct-descr": "\u003cp\u003eNegated value\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Neg Value",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "Neg"
      },
      "index": {
        "description": "Negated value",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Neg",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Ratio",
      "description": {
        "fct-descr": "\u003cp\u003eRational\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Ratio Value Value",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "Ratio"
      },
      "index": {
        "description": "Rational",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Ratio",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Rec",
      "description": {
        "fct-descr": "\u003cp\u003eRecord value\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Rec Name [(Name, Value)]",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "Rec"
      },
      "index": {
        "description": "Record value",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Rec",
        "normalized": "Rec Name[(Name,Value)]",
        "package": "pretty-show",
        "partial": "Rec",
        "signature": "Rec Name[(Name,Value)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:String",
      "description": {
        "fct-descr": "\u003cp\u003eString\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "String String",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "String",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "String",
        "normalized": "",
        "package": "pretty-show",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:Tuple",
      "description": {
        "fct-descr": "\u003cp\u003eTuple\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Tuple [Value]",
        "fct-source": "src/Text-Show-Value.html#Value",
        "fct-type": "function",
        "title": "Tuple"
      },
      "index": {
        "description": "Tuple",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "Tuple",
        "normalized": "Tuple[Value]",
        "package": "pretty-show",
        "partial": "Tuple",
        "signature": "Tuple[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:dataDir",
      "description": {
        "fct-descr": "\u003cp\u003ePath for extra files.  If empty, we look in\n directory \u003ccode\u003estyle\u003c/code\u003e, relative to document.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "FilePath",
        "fct-source": "src/Text-Show-Html.html#HtmlOpts",
        "fct-type": "function",
        "title": "dataDir"
      },
      "index": {
        "description": "Path for extra files If empty we look in directory style relative to document",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "dataDir",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:defaultHtmlOpts",
      "description": {
        "fct-descr": "\u003cp\u003eDefault options.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "HtmlOpts",
        "fct-source": "src/Text-Show-Html.html#defaultHtmlOpts",
        "fct-type": "function",
        "title": "defaultHtmlOpts"
      },
      "index": {
        "description": "Default options",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "defaultHtmlOpts",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Html Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:dumpDoc",
      "description": {
        "fct-descr": "\u003cp\u003eRender a value in the \u003ccode\u003e\u003ca\u003ePrettyVal\u003c/a\u003e\u003c/code\u003e class to a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n The benefit of this function is that \u003ccode\u003e\u003ca\u003ePrettyVal\u003c/a\u003e\u003c/code\u003e instances may\n be derived automatically using generics.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Text-Show-Pretty.html#dumpDoc",
        "fct-type": "function",
        "title": "dumpDoc"
      },
      "index": {
        "description": "Render value in the PrettyVal class to Doc The benefit of this function is that PrettyVal instances may be derived automatically using generics",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "dumpDoc",
        "normalized": "a-\u003eDoc",
        "package": "pretty-show",
        "partial": "Doc",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:dumpStr",
      "description": {
        "fct-descr": "\u003cp\u003eRender a value in the \u003ccode\u003e\u003ca\u003ePrettyVal\u003c/a\u003e\u003c/code\u003e class to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n The benefit of this function is that \u003ccode\u003e\u003ca\u003ePrettyVal\u003c/a\u003e\u003c/code\u003e instances may\n be derived automatically using generics.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-Show-Pretty.html#dumpStr",
        "fct-type": "function",
        "title": "dumpStr"
      },
      "index": {
        "description": "Render value in the PrettyVal class to String The benefit of this function is that PrettyVal instances may be derived automatically using generics",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "dumpStr",
        "normalized": "a-\u003eString",
        "package": "pretty-show",
        "partial": "Str",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:exportHtml",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "String",
        "fct-source": "src/Text-Show-Html.html#Html",
        "fct-type": "function",
        "title": "exportHtml"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "exportHtml",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:getDataDir",
      "description": {
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "IO FilePath",
        "fct-source": "src/Paths_pretty_show.html#getDataDir",
        "fct-type": "function",
        "title": "getDataDir"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "getDataDir",
        "normalized": "",
        "package": "pretty-show",
        "partial": "Data Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:htmlPage",
      "description": {
        "fct-descr": "\u003cp\u003eWrap an Html fragment to make an Html page.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "HtmlOpts -\u003e Html -\u003e String",
        "fct-source": "src/Text-Show-Html.html#htmlPage",
        "fct-type": "function",
        "title": "htmlPage"
      },
      "index": {
        "description": "Wrap an Html fragment to make an Html page",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "htmlPage",
        "normalized": "HtmlOpts-\u003eHtml-\u003eString",
        "package": "pretty-show",
        "partial": "Page",
        "signature": "HtmlOpts-\u003eHtml-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:parseValue",
      "description": {
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "String -\u003e Maybe Value",
        "fct-source": "src/Text-Show-Pretty.html#parseValue",
        "fct-type": "function",
        "title": "parseValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "parseValue",
        "normalized": "String-\u003eMaybe Value",
        "package": "pretty-show",
        "partial": "Value",
        "signature": "String-\u003eMaybe Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:ppDoc",
      "description": {
        "fct-descr": "\u003cp\u003eTry to show a value, prettily. If we do not understand the value, then we\n   just use its standard \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Text-Show-Pretty.html#ppDoc",
        "fct-type": "function",
        "title": "ppDoc"
      },
      "index": {
        "description": "Try to show value prettily If we do not understand the value then we just use its standard Show instance",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "ppDoc",
        "normalized": "a-\u003eDoc",
        "package": "pretty-show",
        "partial": "Doc",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:ppShow",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a generic value into a pretty \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, if possible.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-Show-Pretty.html#ppShow",
        "fct-type": "function",
        "title": "ppShow"
      },
      "index": {
        "description": "Convert generic value into pretty String if possible",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "ppShow",
        "normalized": "a-\u003eString",
        "package": "pretty-show",
        "partial": "Show",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:ppValue",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use \u003ccode\u003e\u003ca\u003evalToDoc\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Value -\u003e Doc",
        "fct-source": "src/Text-Show-Pretty.html#ppValue",
        "fct-type": "function",
        "title": "ppValue"
      },
      "index": {
        "description": "Deprecated Please use valToDoc instead",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "ppValue",
        "normalized": "Value-\u003eDoc",
        "package": "pretty-show",
        "partial": "Value",
        "signature": "Value-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:prettyVal",
      "description": {
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "a -\u003e Value",
        "fct-source": "src/Text-Show-PrettyVal.html#prettyVal",
        "fct-type": "method",
        "title": "prettyVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "prettyVal",
        "normalized": "a-\u003eValue",
        "package": "pretty-show",
        "partial": "Val",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:reify",
      "description": {
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "a -\u003e Maybe Value",
        "fct-source": "src/Text-Show-Pretty.html#reify",
        "fct-type": "function",
        "title": "reify"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "reify",
        "normalized": "a-\u003eMaybe Value",
        "package": "pretty-show",
        "partial": "",
        "signature": "a-\u003eMaybe Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:valToDoc",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a generic value. Our intention is that the result is\n   equivalent to the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for the original value, except possibly\n   easier to understand by a human.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Value -\u003e Doc",
        "fct-source": "src/Text-Show-Pretty.html#valToDoc",
        "fct-type": "function",
        "title": "valToDoc"
      },
      "index": {
        "description": "Pretty print generic value Our intention is that the result is equivalent to the Show instance for the original value except possibly easier to understand by human",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "valToDoc",
        "normalized": "Value-\u003eDoc",
        "package": "pretty-show",
        "partial": "To Doc",
        "signature": "Value-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:valToHtml",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value into an Html fragment.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "HtmlOpts -\u003e Value -\u003e Html",
        "fct-source": "src/Text-Show-Html.html#valToHtml",
        "fct-type": "function",
        "title": "valToHtml"
      },
      "index": {
        "description": "Convert value into an Html fragment",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "valToHtml",
        "normalized": "HtmlOpts-\u003eValue-\u003eHtml",
        "package": "pretty-show",
        "partial": "To Html",
        "signature": "HtmlOpts-\u003eValue-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:valToHtmlPage",
      "description": {
        "fct-descr": "\u003cp\u003eMake an Html page representing the given value.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "HtmlOpts -\u003e Value -\u003e String",
        "fct-source": "src/Text-Show-Html.html#valToHtmlPage",
        "fct-type": "function",
        "title": "valToHtmlPage"
      },
      "index": {
        "description": "Make an Html page representing the given value",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "valToHtmlPage",
        "normalized": "HtmlOpts-\u003eValue-\u003eString",
        "package": "pretty-show",
        "partial": "To Html Page",
        "signature": "HtmlOpts-\u003eValue-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:valToStr",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a generic value. Our intention is that the result is\n   equivalent to the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for the original value, except possibly\n   easier to understand by a human.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Value -\u003e String",
        "fct-source": "src/Text-Show-Pretty.html#valToStr",
        "fct-type": "function",
        "title": "valToStr"
      },
      "index": {
        "description": "Pretty print generic value Our intention is that the result is equivalent to the Show instance for the original value except possibly easier to understand by human",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "valToStr",
        "normalized": "Value-\u003eString",
        "package": "pretty-show",
        "partial": "To Str",
        "signature": "Value-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pretty-show/docs/Text-Show-Pretty.html#v:wideListWidth",
      "description": {
        "fct-descr": "\u003cp\u003eMax. number of columns in wide lists.\n\u003c/p\u003e",
        "fct-module": "Text.Show.Pretty",
        "fct-package": "pretty-show",
        "fct-signature": "Int",
        "fct-source": "src/Text-Show-Html.html#HtmlOpts",
        "fct-type": "function",
        "title": "wideListWidth"
      },
      "index": {
        "description": "Max number of columns in wide lists",
        "hierarchy": "Text Show Pretty",
        "module": "Text.Show.Pretty",
        "name": "wideListWidth",
        "normalized": "",
        "package": "pretty-show",
        "partial": "List Width",
        "signature": ""
      }
    }
  }
]