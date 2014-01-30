[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides parsing of while-language code.\n Supports reading either a file or stdin, resulting in an AST.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.While.Parser",
        "fct-package": "while-lang-parser",
        "fct-signature": "module",
        "fct-source": "src/Language-While-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Provides parsing of while-language code Supports reading either file or stdin resulting in an AST",
        "hierarchy": "Language While Parser",
        "module": "Language.While.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Parser.html#v:loadFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse the specified file and return either failure or the program.\n\u003c/p\u003e",
        "fct-module": "Language.While.Parser",
        "fct-package": "while-lang-parser",
        "fct-signature": "FilePath -\u003e IO (Either String Stm)",
        "fct-source": "src/Language-While-Parser.html#loadFile",
        "fct-type": "function",
        "title": "loadFile"
      },
      "index": {
        "description": "Parse the specified file and return either failure or the program",
        "hierarchy": "Language While Parser",
        "module": "Language.While.Parser",
        "name": "loadFile",
        "normalized": "FilePath-\u003eIO(Either String Stm)",
        "package": "while-lang-parser",
        "partial": "File",
        "signature": "FilePath-\u003eIO(Either String Stm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Parser.html#v:loadStdin",
      "description": {
        "fct-descr": "\u003cp\u003eParse stdin and return either failure or the program.\n\u003c/p\u003e",
        "fct-module": "Language.While.Parser",
        "fct-package": "while-lang-parser",
        "fct-signature": "IO (Either String Stm)",
        "fct-source": "src/Language-While-Parser.html#loadStdin",
        "fct-type": "function",
        "title": "loadStdin"
      },
      "index": {
        "description": "Parse stdin and return either failure or the program",
        "hierarchy": "Language While Parser",
        "module": "Language.While.Parser",
        "name": "loadStdin",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Stdin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides shared type definitions forming the parsed AST.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "module",
        "fct-source": "src/Language-While-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Provides shared type definitions forming the parsed AST",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Types",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#t:Aexp",
      "description": {
        "fct-descr": "\u003cp\u003eArithmetic expressions, including integer division.\n\u003c/p\u003e",
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "data",
        "fct-source": "src/Language-While-Types.html#Aexp",
        "fct-type": "data",
        "title": "Aexp"
      },
      "index": {
        "description": "Arithmetic expressions including integer division",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Aexp",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Aexp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#t:Bexp",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean expressions.\n\u003c/p\u003e",
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "data",
        "fct-source": "src/Language-While-Types.html#Bexp",
        "fct-type": "data",
        "title": "Bexp"
      },
      "index": {
        "description": "Boolean expressions",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Bexp",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Bexp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#t:Stm",
      "description": {
        "fct-descr": "\u003cp\u003eStatements, including try-catch clauses.\n\u003c/p\u003e",
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "data",
        "fct-source": "src/Language-While-Types.html#Stm",
        "fct-type": "data",
        "title": "Stm"
      },
      "index": {
        "description": "Statements including try-catch clauses",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Stm",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Stm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#t:Varname",
      "description": {
        "fct-descr": "\u003cp\u003eVariables type alias.\n\u003c/p\u003e",
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "type",
        "fct-source": "src/Language-While-Types.html#Varname",
        "fct-type": "type",
        "title": "Varname"
      },
      "index": {
        "description": "Variables type alias",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Varname",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Varname",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Aadd",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Aadd Aexp Aexp",
        "fct-source": "src/Language-While-Types.html#Aexp",
        "fct-type": "function",
        "title": "Aadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Aadd",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Aadd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Adiv",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Adiv Aexp Aexp",
        "fct-source": "src/Language-While-Types.html#Aexp",
        "fct-type": "function",
        "title": "Adiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Adiv",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Adiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Amul",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Amul Aexp Aexp",
        "fct-source": "src/Language-While-Types.html#Aexp",
        "fct-type": "function",
        "title": "Amul"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Amul",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Amul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Asub",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Asub Aexp Aexp",
        "fct-source": "src/Language-While-Types.html#Aexp",
        "fct-type": "function",
        "title": "Asub"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Asub",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Asub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Band",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Band Bexp Bexp",
        "fct-source": "src/Language-While-Types.html#Bexp",
        "fct-type": "function",
        "title": "Band"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Band",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Band",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Beq",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Beq Aexp Aexp",
        "fct-source": "src/Language-While-Types.html#Bexp",
        "fct-type": "function",
        "title": "Beq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Beq",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Beq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Bfalse",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Bfalse",
        "fct-source": "src/Language-While-Types.html#Bexp",
        "fct-type": "function",
        "title": "Bfalse"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Bfalse",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Bfalse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Bleq",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Bleq Aexp Aexp",
        "fct-source": "src/Language-While-Types.html#Bexp",
        "fct-type": "function",
        "title": "Bleq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Bleq",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Bleq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Bneg",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Bneg Bexp",
        "fct-source": "src/Language-While-Types.html#Bexp",
        "fct-type": "function",
        "title": "Bneg"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Bneg",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Bneg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Btrue",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Btrue",
        "fct-source": "src/Language-While-Types.html#Bexp",
        "fct-type": "function",
        "title": "Btrue"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Btrue",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Btrue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Numeral",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Numeral Integer",
        "fct-source": "src/Language-While-Types.html#Aexp",
        "fct-type": "function",
        "title": "Numeral"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Numeral",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Numeral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Sass",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Sass Varname Aexp",
        "fct-source": "src/Language-While-Types.html#Stm",
        "fct-type": "function",
        "title": "Sass"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Sass",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Sass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Scomp",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Scomp Stm Stm",
        "fct-source": "src/Language-While-Types.html#Stm",
        "fct-type": "function",
        "title": "Scomp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Scomp",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Scomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Sif",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Sif Bexp Stm Stm",
        "fct-source": "src/Language-While-Types.html#Stm",
        "fct-type": "function",
        "title": "Sif"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Sif",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Sif",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Sskip",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Sskip",
        "fct-source": "src/Language-While-Types.html#Stm",
        "fct-type": "function",
        "title": "Sskip"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Sskip",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Sskip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Stry",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Stry Stm Stm",
        "fct-source": "src/Language-While-Types.html#Stm",
        "fct-type": "function",
        "title": "Stry"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Stry",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Stry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Swhile",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Swhile Bexp Stm",
        "fct-source": "src/Language-While-Types.html#Stm",
        "fct-type": "function",
        "title": "Swhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Swhile",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Swhile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Variable",
      "description": {
        "fct-module": "Language.While.Types",
        "fct-package": "while-lang-parser",
        "fct-signature": "Variable Varname",
        "fct-source": "src/Language-While-Types.html#Aexp",
        "fct-type": "function",
        "title": "Variable"
      },
      "index": {
        "description": "",
        "hierarchy": "Language While Types",
        "module": "Language.While.Types",
        "name": "Variable",
        "normalized": "",
        "package": "while-lang-parser",
        "partial": "Variable",
        "signature": ""
      }
    }
  }
]