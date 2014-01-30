[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe pseudo-macros in this module are meant to be used via Template\n Haskell (see \u003ca\u003ehttp://www.haskell.org/ghc/docs/latest/html/users_guide/template-haskell.html\u003c/a\u003e for more information).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import PseudoMacros\n\n main :: IO ()\n main = putStrLn (\"Hello from \" ++ $__FILE__ ++ \", line \" ++ show $__LINE__ ++ \"!\")\n\u003c/pre\u003e\u003cp\u003eThat is, enable the \u003ccode\u003eTemplateHaskell\u003c/code\u003e extension and put a \u003ccode\u003e$\u003c/code\u003e before each\n pseudo-macro.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "PseudoMacros",
        "fct-package": "pseudomacros",
        "fct-signature": "module",
        "fct-source": "src/PseudoMacros.html",
        "fct-type": "module",
        "title": "PseudoMacros"
      },
      "index": {
        "description": "The pseudo-macros in this module are meant to be used via Template Haskell see http www.haskell.org ghc docs latest html users guide template-haskell.html for more information Example LANGUAGE TemplateHaskell import PseudoMacros main IO main putStrLn Hello from FILE line show LINE That is enable the TemplateHaskell extension and put before each pseudo-macro",
        "hierarchy": "PseudoMacros",
        "module": "PseudoMacros",
        "name": "PseudoMacros",
        "normalized": "",
        "package": "pseudomacros",
        "partial": "Pseudo Macros",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__DATE__",
      "description": {
        "fct-descr": "\u003cp\u003eA string containing the current date in the format \u003cem\u003eYYYY-MM-DD\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "PseudoMacros",
        "fct-package": "pseudomacros",
        "fct-signature": "Q Exp",
        "fct-source": "src/PseudoMacros.html#__DATE__",
        "fct-type": "function",
        "title": "__DATE__"
      },
      "index": {
        "description": "string containing the current date in the format YYYY-MM-DD",
        "hierarchy": "PseudoMacros",
        "module": "PseudoMacros",
        "name": "__DATE__",
        "normalized": "",
        "package": "pseudomacros",
        "partial": "DATE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__FILE__",
      "description": {
        "fct-descr": "\u003cp\u003eA string containing the current file name.\n\u003c/p\u003e",
        "fct-module": "PseudoMacros",
        "fct-package": "pseudomacros",
        "fct-signature": "Q Exp",
        "fct-source": "src/PseudoMacros.html#__FILE__",
        "fct-type": "function",
        "title": "__FILE__"
      },
      "index": {
        "description": "string containing the current file name",
        "hierarchy": "PseudoMacros",
        "module": "PseudoMacros",
        "name": "__FILE__",
        "normalized": "",
        "package": "pseudomacros",
        "partial": "FILE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__LINE__",
      "description": {
        "fct-descr": "\u003cp\u003eAn integer containing the current line number.\n\u003c/p\u003e",
        "fct-module": "PseudoMacros",
        "fct-package": "pseudomacros",
        "fct-signature": "Q Exp",
        "fct-source": "src/PseudoMacros.html#__LINE__",
        "fct-type": "function",
        "title": "__LINE__"
      },
      "index": {
        "description": "An integer containing the current line number",
        "hierarchy": "PseudoMacros",
        "module": "PseudoMacros",
        "name": "__LINE__",
        "normalized": "",
        "package": "pseudomacros",
        "partial": "LINE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__MODULE__",
      "description": {
        "fct-descr": "\u003cp\u003eA string containing the current module name.\n\u003c/p\u003e",
        "fct-module": "PseudoMacros",
        "fct-package": "pseudomacros",
        "fct-signature": "Q Exp",
        "fct-source": "src/PseudoMacros.html#__MODULE__",
        "fct-type": "function",
        "title": "__MODULE__"
      },
      "index": {
        "description": "string containing the current module name",
        "hierarchy": "PseudoMacros",
        "module": "PseudoMacros",
        "name": "__MODULE__",
        "normalized": "",
        "package": "pseudomacros",
        "partial": "MODULE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__PACKAGE__",
      "description": {
        "fct-descr": "\u003cp\u003eA string containing the current package name.\n\u003c/p\u003e",
        "fct-module": "PseudoMacros",
        "fct-package": "pseudomacros",
        "fct-signature": "Q Exp",
        "fct-source": "src/PseudoMacros.html#__PACKAGE__",
        "fct-type": "function",
        "title": "__PACKAGE__"
      },
      "index": {
        "description": "string containing the current package name",
        "hierarchy": "PseudoMacros",
        "module": "PseudoMacros",
        "name": "__PACKAGE__",
        "normalized": "",
        "package": "pseudomacros",
        "partial": "PACKAGE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pseudomacros/docs/PseudoMacros.html#v:__TIME__",
      "description": {
        "fct-descr": "\u003cp\u003eA string containing the current time in the format \u003cem\u003eHH:MM:SS\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "PseudoMacros",
        "fct-package": "pseudomacros",
        "fct-signature": "Q Exp",
        "fct-source": "src/PseudoMacros.html#__TIME__",
        "fct-type": "function",
        "title": "__TIME__"
      },
      "index": {
        "description": "string containing the current time in the format HH MM SS",
        "hierarchy": "PseudoMacros",
        "module": "PseudoMacros",
        "name": "__TIME__",
        "normalized": "",
        "package": "pseudomacros",
        "partial": "TIME",
        "signature": ""
      }
    }
  }
]