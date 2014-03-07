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
        "word": "prettyclass"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printing class, simlar to \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e but nicer looking.\n Note that the precedence level is a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e so there is an unlimited number of levels.\n Based on \u003ca\u003eText.PrettyPrint.HughesPJ\u003c/a\u003e, which is re-exported.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "HughesPJClass",
          "package": "prettyclass",
          "source": "src/Text-PrettyPrint-HughesPJClass.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printing class simlar to Show but nicer looking Note that the precedence level is Rational so there is an unlimited number of levels Based on Text.PrettyPrint.HughesPJ which is re-exported",
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "HughesPJClass",
          "package": "prettyclass",
          "partial": "Hughes PJClass",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing class.  The precedence level is used in a similar way as in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n Minimal complete definition is either \u003ccode\u003e\u003ca\u003epPrintPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003epPrint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "Pretty",
          "package": "prettyclass",
          "source": "src/Text-PrettyPrint-HughesPJClass.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "Pretty printing class The precedence level is used in similar way as in the Show class Minimal complete definition is either pPrintPrec or pPrint",
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "Pretty",
          "package": "prettyclass",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLevel of detail in the pretty printed output.\n Level 0 is the least detail.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "PrettyLevel",
          "package": "prettyclass",
          "source": "src/Text-PrettyPrint-HughesPJClass.html#PrettyLevel",
          "type": "newtype"
        },
        "index": {
          "description": "Level of detail in the pretty printed output Level is the least detail",
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "PrettyLevel",
          "package": "prettyclass",
          "partial": "Pretty Level",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#t:PrettyLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "PrettyLevel",
          "package": "prettyclass",
          "signature": "PrettyLevel Int",
          "source": "src/Text-PrettyPrint-HughesPJClass.html#PrettyLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "PrettyLevel",
          "package": "prettyclass",
          "partial": "Pretty Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#v:PrettyLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "pPrint",
          "package": "prettyclass",
          "signature": "a -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJClass.html#pPrint",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "pPrint",
          "normalized": "a-\u003eDoc",
          "package": "prettyclass",
          "partial": "Print",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#v:pPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "pPrintList",
          "package": "prettyclass",
          "signature": "PrettyLevel -\u003e [a] -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJClass.html#pPrintList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "pPrintList",
          "normalized": "PrettyLevel-\u003e[a]-\u003eDoc",
          "package": "prettyclass",
          "partial": "Print List",
          "signature": "PrettyLevel-\u003e[a]-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#v:pPrintList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "pPrintPrec",
          "package": "prettyclass",
          "signature": "PrettyLevel -\u003e Rational -\u003e a -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJClass.html#pPrintPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "pPrintPrec",
          "normalized": "PrettyLevel-\u003eRational-\u003ea-\u003eDoc",
          "package": "prettyclass",
          "partial": "Print Prec",
          "signature": "PrettyLevel-\u003eRational-\u003ea-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#v:pPrintPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "prettyNormal",
          "package": "prettyclass",
          "signature": "PrettyLevel",
          "source": "src/Text-PrettyPrint-HughesPJClass.html#prettyNormal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "prettyNormal",
          "package": "prettyclass",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#v:prettyNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParenthesize an value if the boolean is true.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "prettyParen",
          "package": "prettyclass",
          "signature": "Bool -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-HughesPJClass.html#prettyParen",
          "type": "function"
        },
        "index": {
          "description": "Parenthesize an value if the boolean is true",
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "prettyParen",
          "normalized": "Bool-\u003eDoc-\u003eDoc",
          "package": "prettyclass",
          "partial": "Paren",
          "signature": "Bool-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#v:prettyParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a value with the \u003ccode\u003e\u003ca\u003eprettyNormal\u003c/a\u003e\u003c/code\u003e level.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "prettyShow",
          "package": "prettyclass",
          "signature": "a -\u003e String",
          "source": "src/Text-PrettyPrint-HughesPJClass.html#prettyShow",
          "type": "function"
        },
        "index": {
          "description": "Pretty print value with the prettyNormal level",
          "hierarchy": "Text PrettyPrint HughesPJClass",
          "module": "Text.PrettyPrint.HughesPJClass",
          "name": "prettyShow",
          "normalized": "a-\u003eString",
          "package": "prettyclass",
          "partial": "Show",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettyclass/docs/Text-PrettyPrint-HughesPJClass.html#v:prettyShow"
      }
    }
  ]
]