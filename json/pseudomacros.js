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
        "word": "pseudomacros"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe pseudo-macros in this module are meant to be used via Template\n Haskell (see \u003ca\u003ehttp://www.haskell.org/ghc/docs/latest/html/users_guide/template-haskell.html\u003c/a\u003e for more information).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import PseudoMacros\n\n main :: IO ()\n main = putStrLn (\"Hello from \" ++ $__FILE__ ++ \", line \" ++ show $__LINE__ ++ \"!\")\n\u003c/pre\u003e\u003cp\u003eThat is, enable the \u003ccode\u003eTemplateHaskell\u003c/code\u003e extension and put a \u003ccode\u003e$\u003c/code\u003e before each\n pseudo-macro.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "PseudoMacros",
          "name": "PseudoMacros",
          "package": "pseudomacros",
          "source": "src/PseudoMacros.html",
          "type": "module"
        },
        "index": {
          "description": "The pseudo-macros in this module are meant to be used via Template Haskell see http www.haskell.org ghc docs latest html users guide template-haskell.html for more information Example LANGUAGE TemplateHaskell import PseudoMacros main IO main putStrLn Hello from FILE line show LINE That is enable the TemplateHaskell extension and put before each pseudo-macro",
          "hierarchy": "PseudoMacros",
          "module": "PseudoMacros",
          "name": "PseudoMacros",
          "package": "pseudomacros",
          "partial": "Pseudo Macros",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string containing the current date in the format \u003cem\u003eYYYY-MM-DD\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "PseudoMacros",
          "name": "__DATE__",
          "package": "pseudomacros",
          "signature": "Q Exp",
          "source": "src/PseudoMacros.html#__DATE__",
          "type": "function"
        },
        "index": {
          "description": "string containing the current date in the format YYYY-MM-DD",
          "hierarchy": "PseudoMacros",
          "module": "PseudoMacros",
          "name": "__DATE__",
          "package": "pseudomacros",
          "partial": "DATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__DATE__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string containing the current file name.\n\u003c/p\u003e",
          "module": "PseudoMacros",
          "name": "__FILE__",
          "package": "pseudomacros",
          "signature": "Q Exp",
          "source": "src/PseudoMacros.html#__FILE__",
          "type": "function"
        },
        "index": {
          "description": "string containing the current file name",
          "hierarchy": "PseudoMacros",
          "module": "PseudoMacros",
          "name": "__FILE__",
          "package": "pseudomacros",
          "partial": "FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__FILE__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integer containing the current line number.\n\u003c/p\u003e",
          "module": "PseudoMacros",
          "name": "__LINE__",
          "package": "pseudomacros",
          "signature": "Q Exp",
          "source": "src/PseudoMacros.html#__LINE__",
          "type": "function"
        },
        "index": {
          "description": "An integer containing the current line number",
          "hierarchy": "PseudoMacros",
          "module": "PseudoMacros",
          "name": "__LINE__",
          "package": "pseudomacros",
          "partial": "LINE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__LINE__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string containing the current module name.\n\u003c/p\u003e",
          "module": "PseudoMacros",
          "name": "__MODULE__",
          "package": "pseudomacros",
          "signature": "Q Exp",
          "source": "src/PseudoMacros.html#__MODULE__",
          "type": "function"
        },
        "index": {
          "description": "string containing the current module name",
          "hierarchy": "PseudoMacros",
          "module": "PseudoMacros",
          "name": "__MODULE__",
          "package": "pseudomacros",
          "partial": "MODULE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__MODULE__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string containing the current package name.\n\u003c/p\u003e",
          "module": "PseudoMacros",
          "name": "__PACKAGE__",
          "package": "pseudomacros",
          "signature": "Q Exp",
          "source": "src/PseudoMacros.html#__PACKAGE__",
          "type": "function"
        },
        "index": {
          "description": "string containing the current package name",
          "hierarchy": "PseudoMacros",
          "module": "PseudoMacros",
          "name": "__PACKAGE__",
          "package": "pseudomacros",
          "partial": "PACKAGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__PACKAGE__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string containing the current time in the format \u003cem\u003eHH:MM:SS\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "PseudoMacros",
          "name": "__TIME__",
          "package": "pseudomacros",
          "signature": "Q Exp",
          "source": "src/PseudoMacros.html#__TIME__",
          "type": "function"
        },
        "index": {
          "description": "string containing the current time in the format HH MM SS",
          "hierarchy": "PseudoMacros",
          "module": "PseudoMacros",
          "name": "__TIME__",
          "package": "pseudomacros",
          "partial": "TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__TIME__"
      }
    }
  ]
]