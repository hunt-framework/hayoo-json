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
        "word": "while-lang-parser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides parsing of while-language code.\n Supports reading either a file or stdin, resulting in an AST.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.While.Parser",
          "name": "Parser",
          "package": "while-lang-parser",
          "source": "src/Language-While-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Provides parsing of while-language code Supports reading either file or stdin resulting in an AST",
          "hierarchy": "Language While Parser",
          "module": "Language.While.Parser",
          "name": "Parser",
          "package": "while-lang-parser",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the specified file and return either failure or the program.\n\u003c/p\u003e",
          "module": "Language.While.Parser",
          "name": "loadFile",
          "package": "while-lang-parser",
          "signature": "FilePath -\u003e IO (Either String Stm)",
          "source": "src/Language-While-Parser.html#loadFile",
          "type": "function"
        },
        "index": {
          "description": "Parse the specified file and return either failure or the program",
          "hierarchy": "Language While Parser",
          "module": "Language.While.Parser",
          "name": "loadFile",
          "normalized": "FilePath-\u003eIO(Either String Stm)",
          "package": "while-lang-parser",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Either String Stm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Parser.html#v:loadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse stdin and return either failure or the program.\n\u003c/p\u003e",
          "module": "Language.While.Parser",
          "name": "loadStdin",
          "package": "while-lang-parser",
          "signature": "IO (Either String Stm)",
          "source": "src/Language-While-Parser.html#loadStdin",
          "type": "function"
        },
        "index": {
          "description": "Parse stdin and return either failure or the program",
          "hierarchy": "Language While Parser",
          "module": "Language.While.Parser",
          "name": "loadStdin",
          "package": "while-lang-parser",
          "partial": "Stdin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Parser.html#v:loadStdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides shared type definitions forming the parsed AST.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.While.Types",
          "name": "Types",
          "package": "while-lang-parser",
          "source": "src/Language-While-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Provides shared type definitions forming the parsed AST",
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Types",
          "package": "while-lang-parser",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArithmetic expressions, including integer division.\n\u003c/p\u003e",
          "module": "Language.While.Types",
          "name": "Aexp",
          "package": "while-lang-parser",
          "source": "src/Language-While-Types.html#Aexp",
          "type": "data"
        },
        "index": {
          "description": "Arithmetic expressions including integer division",
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Aexp",
          "package": "while-lang-parser",
          "partial": "Aexp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#t:Aexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean expressions.\n\u003c/p\u003e",
          "module": "Language.While.Types",
          "name": "Bexp",
          "package": "while-lang-parser",
          "source": "src/Language-While-Types.html#Bexp",
          "type": "data"
        },
        "index": {
          "description": "Boolean expressions",
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Bexp",
          "package": "while-lang-parser",
          "partial": "Bexp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#t:Bexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatements, including try-catch clauses.\n\u003c/p\u003e",
          "module": "Language.While.Types",
          "name": "Stm",
          "package": "while-lang-parser",
          "source": "src/Language-While-Types.html#Stm",
          "type": "data"
        },
        "index": {
          "description": "Statements including try-catch clauses",
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Stm",
          "package": "while-lang-parser",
          "partial": "Stm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#t:Stm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables type alias.\n\u003c/p\u003e",
          "module": "Language.While.Types",
          "name": "Varname",
          "package": "while-lang-parser",
          "source": "src/Language-While-Types.html#Varname",
          "type": "type"
        },
        "index": {
          "description": "Variables type alias",
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Varname",
          "package": "while-lang-parser",
          "partial": "Varname",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#t:Varname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Aadd",
          "package": "while-lang-parser",
          "signature": "Aadd Aexp Aexp",
          "source": "src/Language-While-Types.html#Aexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Aadd",
          "package": "while-lang-parser",
          "partial": "Aadd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Aadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Adiv",
          "package": "while-lang-parser",
          "signature": "Adiv Aexp Aexp",
          "source": "src/Language-While-Types.html#Aexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Adiv",
          "package": "while-lang-parser",
          "partial": "Adiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Adiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Amul",
          "package": "while-lang-parser",
          "signature": "Amul Aexp Aexp",
          "source": "src/Language-While-Types.html#Aexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Amul",
          "package": "while-lang-parser",
          "partial": "Amul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Amul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Asub",
          "package": "while-lang-parser",
          "signature": "Asub Aexp Aexp",
          "source": "src/Language-While-Types.html#Aexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Asub",
          "package": "while-lang-parser",
          "partial": "Asub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Asub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Band",
          "package": "while-lang-parser",
          "signature": "Band Bexp Bexp",
          "source": "src/Language-While-Types.html#Bexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Band",
          "package": "while-lang-parser",
          "partial": "Band",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Band"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Beq",
          "package": "while-lang-parser",
          "signature": "Beq Aexp Aexp",
          "source": "src/Language-While-Types.html#Bexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Beq",
          "package": "while-lang-parser",
          "partial": "Beq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Beq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Bfalse",
          "package": "while-lang-parser",
          "signature": "Bfalse",
          "source": "src/Language-While-Types.html#Bexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Bfalse",
          "package": "while-lang-parser",
          "partial": "Bfalse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Bfalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Bleq",
          "package": "while-lang-parser",
          "signature": "Bleq Aexp Aexp",
          "source": "src/Language-While-Types.html#Bexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Bleq",
          "package": "while-lang-parser",
          "partial": "Bleq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Bleq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Bneg",
          "package": "while-lang-parser",
          "signature": "Bneg Bexp",
          "source": "src/Language-While-Types.html#Bexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Bneg",
          "package": "while-lang-parser",
          "partial": "Bneg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Bneg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Btrue",
          "package": "while-lang-parser",
          "signature": "Btrue",
          "source": "src/Language-While-Types.html#Bexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Btrue",
          "package": "while-lang-parser",
          "partial": "Btrue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Btrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Numeral",
          "package": "while-lang-parser",
          "signature": "Numeral Integer",
          "source": "src/Language-While-Types.html#Aexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Numeral",
          "package": "while-lang-parser",
          "partial": "Numeral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Numeral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Sass",
          "package": "while-lang-parser",
          "signature": "Sass Varname Aexp",
          "source": "src/Language-While-Types.html#Stm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Sass",
          "package": "while-lang-parser",
          "partial": "Sass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Sass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Scomp",
          "package": "while-lang-parser",
          "signature": "Scomp Stm Stm",
          "source": "src/Language-While-Types.html#Stm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Scomp",
          "package": "while-lang-parser",
          "partial": "Scomp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Scomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Sif",
          "package": "while-lang-parser",
          "signature": "Sif Bexp Stm Stm",
          "source": "src/Language-While-Types.html#Stm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Sif",
          "package": "while-lang-parser",
          "partial": "Sif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Sif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Sskip",
          "package": "while-lang-parser",
          "signature": "Sskip",
          "source": "src/Language-While-Types.html#Stm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Sskip",
          "package": "while-lang-parser",
          "partial": "Sskip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Sskip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Stry",
          "package": "while-lang-parser",
          "signature": "Stry Stm Stm",
          "source": "src/Language-While-Types.html#Stm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Stry",
          "package": "while-lang-parser",
          "partial": "Stry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Stry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Swhile",
          "package": "while-lang-parser",
          "signature": "Swhile Bexp Stm",
          "source": "src/Language-While-Types.html#Stm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Swhile",
          "package": "while-lang-parser",
          "partial": "Swhile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Swhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.While.Types",
          "name": "Variable",
          "package": "while-lang-parser",
          "signature": "Variable Varname",
          "source": "src/Language-While-Types.html#Aexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language While Types",
          "module": "Language.While.Types",
          "name": "Variable",
          "package": "while-lang-parser",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/while-lang-parser/docs/Language-While-Types.html#v:Variable"
      }
    }
  ]
]