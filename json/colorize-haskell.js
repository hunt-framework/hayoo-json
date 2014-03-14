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
        "word": "colorize-haskell"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Colorize",
          "name": "Colorize",
          "package": "colorize-haskell",
          "source": "src/Language-Haskell-Colorize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "Colorize",
          "package": "colorize-haskell",
          "partial": "Colorize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of functions that specify how to render a value.\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "Style",
          "package": "colorize-haskell",
          "source": "src/Language-Haskell-Colorize.html#Style",
          "type": "type"
        },
        "index": {
          "description": "The type of functions that specify how to render value",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "Style",
          "package": "colorize-haskell",
          "partial": "Style",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe different types of that we recognize.\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "Token",
          "package": "colorize-haskell",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "data"
        },
        "index": {
          "description": "The different types of that we recognize",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "Token",
          "package": "colorize-haskell",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter literals\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "CharLit",
          "package": "colorize-haskell",
          "signature": "CharLit",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Character literals",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "CharLit",
          "package": "colorize-haskell",
          "partial": "Char Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:CharLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComment\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "Comment",
          "package": "colorize-haskell",
          "signature": "Comment",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Comment",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "Comment",
          "package": "colorize-haskell",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "Con",
          "package": "colorize-haskell",
          "signature": "Con",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Constructors",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "Con",
          "package": "colorize-haskell",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor operators\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "ConOp",
          "package": "colorize-haskell",
          "signature": "ConOp",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Constructor operators",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "ConOp",
          "package": "colorize-haskell",
          "partial": "Con Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:ConOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating point literals\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "FloatLit",
          "package": "colorize-haskell",
          "signature": "FloatLit",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Floating point literals",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "FloatLit",
          "package": "colorize-haskell",
          "partial": "Float Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:FloatLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger lieterals\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "IntLit",
          "package": "colorize-haskell",
          "signature": "IntLit",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Integer lieterals",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "IntLit",
          "package": "colorize-haskell",
          "partial": "Int Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:IntLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved word\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "Reserved",
          "package": "colorize-haskell",
          "signature": "Reserved",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Reserved word",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "Reserved",
          "package": "colorize-haskell",
          "partial": "Reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:Reserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved operator\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "ReservedOp",
          "package": "colorize-haskell",
          "signature": "ReservedOp",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Reserved operator",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "ReservedOp",
          "package": "colorize-haskell",
          "partial": "Reserved Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:ReservedOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial syntax  (e.g., parens,brackets)\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "Special",
          "package": "colorize-haskell",
          "signature": "Special",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Special syntax e.g parens brackets",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "Special",
          "package": "colorize-haskell",
          "partial": "Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:Special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString literals\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "StringLit",
          "package": "colorize-haskell",
          "signature": "StringLit",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "String literals",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "StringLit",
          "package": "colorize-haskell",
          "partial": "String Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:StringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "Var",
          "package": "colorize-haskell",
          "signature": "Var",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Variables",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "Var",
          "package": "colorize-haskell",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable operatros\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "VarOp",
          "package": "colorize-haskell",
          "signature": "VarOp",
          "source": "src/Language-Haskell-Colorize.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Variable operatros",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "VarOp",
          "package": "colorize-haskell",
          "partial": "Var Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:VarOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotates tokens with ANSI escape sequences, suitable for a dark termianl\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "ansiDark",
          "package": "colorize-haskell",
          "signature": "Style",
          "source": "src/Language-Haskell-Colorize.html#ansiDark",
          "type": "function"
        },
        "index": {
          "description": "Annotates tokens with ANSI escape sequences suitable for dark termianl",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "ansiDark",
          "package": "colorize-haskell",
          "partial": "Dark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:ansiDark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotates tokens with ANSI escape sequences, suitable for a dark termianl\n\u003c/p\u003e",
          "module": "Language.Haskell.Colorize",
          "name": "ansiLight",
          "package": "colorize-haskell",
          "signature": "Style",
          "source": "src/Language-Haskell-Colorize.html#ansiLight",
          "type": "function"
        },
        "index": {
          "description": "Annotates tokens with ANSI escape sequences suitable for dark termianl",
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "ansiLight",
          "package": "colorize-haskell",
          "partial": "Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:ansiLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Colorize",
          "name": "render",
          "package": "colorize-haskell",
          "signature": "Style -\u003e String -\u003e ShowS",
          "source": "src/Language-Haskell-Colorize.html#render",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Colorize",
          "module": "Language.Haskell.Colorize",
          "name": "render",
          "normalized": "Style-\u003eString-\u003eShowS",
          "package": "colorize-haskell",
          "signature": "Style-\u003eString-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colorize-haskell/docs/Language-Haskell-Colorize.html#v:render"
      }
    }
  ]
]