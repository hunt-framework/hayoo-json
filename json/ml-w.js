[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some datatypes to represent a minimal ML-like language, plus\nparsing and pretty-printing functions.\n\u003c/p\u003e\u003cp\u003eThe syntax is:\n\u003c/p\u003e\u003cpre\u003e\nprogram     ::= declaration ';' program | expression\ndeclaration ::= id '=' expression ';'\nid          ::= [a-zA-Z][a-zA-Z0-9_]*\nids         ::= id+\nexpression  ::= id\n             |  '(' '\\' ids \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e expression ')'\n             |  '(' expression expression ')'\n             |  '(' 'let' id '=' expression 'in' expression ')'\n             |  '(' \u003ccode\u003efix\u003c/code\u003e id \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e expression ')'\n\u003c/pre\u003e\u003cp\u003eWe'll omit parenthesis in the usual way - \u003ccode\u003ea b c\u003c/code\u003e is equivalent to \u003ccode\u003e(a b) c\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\ns = \\ x y z . x z (y z);\nk = \\ x y . x;\ni = \\ x . x;\nk i;\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "module",
        "fct-source": "src/Language-ML-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "This module defines some datatypes to represent minimal ML-like language plus parsing and pretty-printing functions The syntax is program declaration program expression declaration id expression id a-zA-Z a-zA-Z0-9 ids id expression id ids expression expression expression let id expression in expression fix id expression We ll omit parenthesis in the usual way is equivalent to Example",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "ml-w",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#t:Decl",
      "description": {
        "fct-descr": "\u003cp\u003eA declaration (binds a certain expression to a variable). We add this\n   abstraction on top of let so that we can write programs more easily\n   (leaving let for local declarations).\n\u003c/p\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "type",
        "fct-source": "src/Language-ML-Syntax.html#Decl",
        "fct-type": "type",
        "title": "Decl"
      },
      "index": {
        "description": "declaration binds certain expression to variable We add this abstraction on top of let so that we can write programs more easily leaving let for local declarations",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Decl",
        "normalized": "",
        "package": "ml-w",
        "partial": "Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing lambda-calculus expressions.\n\u003c/p\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "data",
        "fct-source": "src/Language-ML-Syntax.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "Data type representing lambda-calculus expressions",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Expr",
        "normalized": "",
        "package": "ml-w",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#t:Id",
      "description": {
        "fct-descr": "\u003cp\u003eAn identifier (predictably a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "type",
        "fct-source": "src/Language-ML-Syntax.html#Id",
        "fct-type": "type",
        "title": "Id"
      },
      "index": {
        "description": "An identifier predictably String",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Id",
        "normalized": "",
        "package": "ml-w",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#t:Program",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e is a list of declaration and an expression\n   representing what the program does. Each declaration can use\n   previous declarations only (no mutual recursion).\n\u003c/p\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "data",
        "fct-source": "src/Language-ML-Syntax.html#Program",
        "fct-type": "data",
        "title": "Program"
      },
      "index": {
        "description": "Program is list of declaration and an expression representing what the program does Each declaration can use previous declarations only no mutual recursion",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Program",
        "normalized": "",
        "package": "ml-w",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:App",
      "description": {
        "fct-descr": "\u003cp\u003eAn expression applied to another.\n\u003c/p\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "App Expr Expr",
        "fct-source": "src/Language-ML-Syntax.html#Expr",
        "fct-type": "function",
        "title": "App"
      },
      "index": {
        "description": "An expression applied to another",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "App",
        "normalized": "",
        "package": "ml-w",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Fix",
      "description": {
        "fct-descr": "\u003cp\u003eFixed point combinator (bye bye normalization).\n\u003c/p\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "Fix Id Expr",
        "fct-source": "src/Language-ML-Syntax.html#Expr",
        "fct-type": "function",
        "title": "Fix"
      },
      "index": {
        "description": "Fixed point combinator bye bye normalization",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Fix",
        "normalized": "",
        "package": "ml-w",
        "partial": "Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Lam",
      "description": {
        "fct-descr": "\u003cp\u003eA lambda abstraction.\n\u003c/p\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "Lam Id Expr",
        "fct-source": "src/Language-ML-Syntax.html#Expr",
        "fct-type": "function",
        "title": "Lam"
      },
      "index": {
        "description": "lambda abstraction",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Lam",
        "normalized": "",
        "package": "ml-w",
        "partial": "Lam",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Let",
      "description": {
        "fct-descr": "\u003cp\u003ePolymorphic let.\n\u003c/p\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "Let Id Expr Expr",
        "fct-source": "src/Language-ML-Syntax.html#Expr",
        "fct-type": "function",
        "title": "Let"
      },
      "index": {
        "description": "Polymorphic let",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Let",
        "normalized": "",
        "package": "ml-w",
        "partial": "Let",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Program",
      "description": {
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "Program [Decl] Expr",
        "fct-source": "src/Language-ML-Syntax.html#Program",
        "fct-type": "function",
        "title": "Program"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Program",
        "normalized": "Program[Decl]Expr",
        "package": "ml-w",
        "partial": "Program",
        "signature": "Program[Decl]Expr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Var",
      "description": {
        "fct-descr": "\u003cp\u003eA variable.\n\u003c/p\u003e",
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "Var Id",
        "fct-source": "src/Language-ML-Syntax.html#Expr",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "variable",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "Var",
        "normalized": "",
        "package": "ml-w",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:parseExpr",
      "description": {
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "String -\u003e Either ParseError Expr",
        "fct-source": "src/Language-ML-Syntax.html#parseExpr",
        "fct-type": "function",
        "title": "parseExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "parseExpr",
        "normalized": "String-\u003eEither ParseError Expr",
        "package": "ml-w",
        "partial": "Expr",
        "signature": "String-\u003eEither ParseError Expr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:parseExpr-39-",
      "description": {
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "FilePath -\u003e IO (Either ParseError Expr)",
        "fct-source": "src/Language-ML-Syntax.html#parseExpr%27",
        "fct-type": "function",
        "title": "parseExpr'"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "parseExpr'",
        "normalized": "FilePath-\u003eIO(Either ParseError Expr)",
        "package": "ml-w",
        "partial": "Expr'",
        "signature": "FilePath-\u003eIO(Either ParseError Expr)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:parseProgram",
      "description": {
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "String -\u003e Either ParseError Program",
        "fct-source": "src/Language-ML-Syntax.html#parseProgram",
        "fct-type": "function",
        "title": "parseProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "parseProgram",
        "normalized": "String-\u003eEither ParseError Program",
        "package": "ml-w",
        "partial": "Program",
        "signature": "String-\u003eEither ParseError Program"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:parseProgram-39-",
      "description": {
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "FilePath -\u003e IO (Either ParseError Program)",
        "fct-source": "src/Language-ML-Syntax.html#parseProgram%27",
        "fct-type": "function",
        "title": "parseProgram'"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "parseProgram'",
        "normalized": "FilePath-\u003eIO(Either ParseError Program)",
        "package": "ml-w",
        "partial": "Program'",
        "signature": "FilePath-\u003eIO(Either ParseError Program)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:prettyDecl",
      "description": {
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "Decl -\u003e Doc",
        "fct-source": "src/Language-ML-Syntax.html#prettyDecl",
        "fct-type": "function",
        "title": "prettyDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "prettyDecl",
        "normalized": "Decl-\u003eDoc",
        "package": "ml-w",
        "partial": "Decl",
        "signature": "Decl-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:prettyExpr",
      "description": {
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "Expr -\u003e Doc",
        "fct-source": "src/Language-ML-Syntax.html#prettyExpr",
        "fct-type": "function",
        "title": "prettyExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "prettyExpr",
        "normalized": "Expr-\u003eDoc",
        "package": "ml-w",
        "partial": "Expr",
        "signature": "Expr-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:prettyProgram",
      "description": {
        "fct-module": "Language.ML.Syntax",
        "fct-package": "ml-w",
        "fct-signature": "Program -\u003e Doc",
        "fct-source": "src/Language-ML-Syntax.html#prettyProgram",
        "fct-type": "function",
        "title": "prettyProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML Syntax",
        "module": "Language.ML.Syntax",
        "name": "prettyProgram",
        "normalized": "Program-\u003eDoc",
        "package": "ml-w",
        "partial": "Program",
        "signature": "Program-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the W algorithm for the small language we are using.\n\u003c/p\u003e\u003cp\u003eThere is one minor annoyance: The \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e datatype distinguishes between free\n type variables and quantified type variable, but the exposed functions of\n this module should produce types completely free of free type variables. This\n could be checked statically having a separate datatype without free type\n variables, but I compromised for clarity and brevity.\n\u003c/p\u003e\u003cp\u003ePartly inspired by the paper \"\u003cem\u003eTyping Haskell in Haskell\u003c/em\u003e\" by Mark\n P. Jones, \u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/thih/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "module",
        "fct-source": "src/Language-ML-TypeCheck.html",
        "fct-type": "module",
        "title": "TypeCheck"
      },
      "index": {
        "description": "This module implements the algorithm for the small language we are using There is one minor annoyance The Type datatype distinguishes between free type variables and quantified type variable but the exposed functions of this module should produce types completely free of free type variables This could be checked statically having separate datatype without free type variables but compromised for clarity and brevity Partly inspired by the paper Typing Haskell in Haskell by Mark Jones http web.cecs.pdx.edu mpj thih",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "TypeCheck",
        "normalized": "",
        "package": "ml-w",
        "partial": "Type Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:Assump",
      "description": {
        "fct-descr": "\u003cp\u003eAn assumption about the type of a (value) variable.\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "data",
        "fct-source": "src/Language-ML-TypeCheck.html#Assump",
        "fct-type": "data",
        "title": "Assump"
      },
      "index": {
        "description": "An assumption about the type of value variable",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "Assump",
        "normalized": "",
        "package": "ml-w",
        "partial": "Assump",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:Scheme",
      "description": {
        "fct-descr": "\u003cp\u003eA type scheme. The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e represents the number of quantified variables\n   (must be \u003e= 0).\n\u003c/p\u003e\u003cp\u003eInvariants: all the \u003ccode\u003e\u003ca\u003eTyGen\u003c/a\u003e\u003c/code\u003e in the scheme must be \u003c of the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. If this\n   is not the case the program crashes badly (see \u003ccode\u003efreshen\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "data",
        "fct-source": "src/Language-ML-TypeCheck.html#Scheme",
        "fct-type": "data",
        "title": "Scheme"
      },
      "index": {
        "description": "type scheme The Int represents the number of quantified variables must be Invariants all the TyGen in the scheme must be of the Int If this is not the case the program crashes badly see freshen",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "Scheme",
        "normalized": "",
        "package": "ml-w",
        "partial": "Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:TyVar",
      "description": {
        "fct-descr": "\u003cp\u003eA type variable. We use integers for easy generation of new variables.\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "type",
        "fct-source": "src/Language-ML-TypeCheck.html#TyVar",
        "fct-type": "type",
        "title": "TyVar"
      },
      "index": {
        "description": "type variable We use integers for easy generation of new variables",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "TyVar",
        "normalized": "",
        "package": "ml-w",
        "partial": "Ty Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eA data type to represent types. Note that the functions of this module\n   should return \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003es without \u003ccode\u003e\u003ca\u003eTyVar\u003c/a\u003e\u003c/code\u003es (we want the schemes to have no free\n   variables).\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "data",
        "fct-source": "src/Language-ML-TypeCheck.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "data type to represent types Note that the functions of this module should return Type without TyVar we want the schemes to have no free variables",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "Type",
        "normalized": "",
        "package": "ml-w",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:TypeError",
      "description": {
        "fct-descr": "\u003cp\u003eWhat can go wrong when inferring the types.\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "data",
        "fct-source": "src/Language-ML-TypeCheck.html#TypeError",
        "fct-type": "data",
        "title": "TypeError"
      },
      "index": {
        "description": "What can go wrong when inferring the types",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "TypeError",
        "normalized": "",
        "package": "ml-w",
        "partial": "Type Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v::-62-:",
      "description": {
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "Id :\u003e: Scheme",
        "fct-source": "src/Language-ML-TypeCheck.html#Assump",
        "fct-type": "function",
        "title": ":\u003e:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": ":\u003e:",
        "normalized": "",
        "package": "ml-w",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:InfiniteType",
      "description": {
        "fct-descr": "\u003cp\u003eThe user is trying to construct an infinite type, e.g. 'a = a -\u003e b'.\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "InfiniteType TyVar Type",
        "fct-source": "src/Language-ML-TypeCheck.html#TypeError",
        "fct-type": "function",
        "title": "InfiniteType"
      },
      "index": {
        "description": "The user is trying to construct an infinite type e.g",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "InfiniteType",
        "normalized": "",
        "package": "ml-w",
        "partial": "Infinite Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:Scheme",
      "description": {
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "Scheme Int Type",
        "fct-source": "src/Language-ML-TypeCheck.html#Scheme",
        "fct-type": "function",
        "title": "Scheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "Scheme",
        "normalized": "",
        "package": "ml-w",
        "partial": "Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:TyArr",
      "description": {
        "fct-descr": "\u003cp\u003eThe arrow type (A -\u003e B)\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "TyArr Type Type",
        "fct-source": "src/Language-ML-TypeCheck.html#Type",
        "fct-type": "function",
        "title": "TyArr"
      },
      "index": {
        "description": "The arrow type",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "TyArr",
        "normalized": "",
        "package": "ml-w",
        "partial": "Ty Arr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:TyGen",
      "description": {
        "fct-descr": "\u003cp\u003eA quantified variable. We use a different constructor (separated from\n   TyVar) so that there can be no clash between the two, and we\n   immediately know what is what.\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "TyGen Int",
        "fct-source": "src/Language-ML-TypeCheck.html#Type",
        "fct-type": "function",
        "title": "TyGen"
      },
      "index": {
        "description": "quantified variable We use different constructor separated from TyVar so that there can be no clash between the two and we immediately know what is what",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "TyGen",
        "normalized": "",
        "package": "ml-w",
        "partial": "Ty Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:TyVar",
      "description": {
        "fct-descr": "\u003cp\u003eA type variable.\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "TyVar TyVar",
        "fct-source": "src/Language-ML-TypeCheck.html#Type",
        "fct-type": "function",
        "title": "TyVar"
      },
      "index": {
        "description": "type variable",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "TyVar",
        "normalized": "",
        "package": "ml-w",
        "partial": "Ty Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:TypeError",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric error, needed for the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "TypeError",
        "fct-source": "src/Language-ML-TypeCheck.html#TypeError",
        "fct-type": "function",
        "title": "TypeError"
      },
      "index": {
        "description": "Generic error needed for the Error instances",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "TypeError",
        "normalized": "",
        "package": "ml-w",
        "partial": "Type Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:UnboundVariable",
      "description": {
        "fct-descr": "\u003cp\u003eUnbound variable (value, not type variable).\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "UnboundVariable Id",
        "fct-source": "src/Language-ML-TypeCheck.html#TypeError",
        "fct-type": "function",
        "title": "UnboundVariable"
      },
      "index": {
        "description": "Unbound variable value not type variable",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "UnboundVariable",
        "normalized": "",
        "package": "ml-w",
        "partial": "Unbound Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:UnificationFail",
      "description": {
        "fct-descr": "\u003cp\u003eUnification failed (e.g. when trying to unify a quantified variable\n   with an arrow type).\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "UnificationFail Type Type",
        "fct-source": "src/Language-ML-TypeCheck.html#TypeError",
        "fct-type": "function",
        "title": "UnificationFail"
      },
      "index": {
        "description": "Unification failed e.g when trying to unify quantified variable with an arrow type",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "UnificationFail",
        "normalized": "",
        "package": "ml-w",
        "partial": "Unification Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:prettyScheme",
      "description": {
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "Scheme -\u003e Doc",
        "fct-source": "src/Language-ML-TypeCheck.html#prettyScheme",
        "fct-type": "function",
        "title": "prettyScheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "prettyScheme",
        "normalized": "Scheme-\u003eDoc",
        "package": "ml-w",
        "partial": "Scheme",
        "signature": "Scheme-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:prettyType",
      "description": {
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "Type -\u003e Doc",
        "fct-source": "src/Language-ML-TypeCheck.html#prettyType",
        "fct-type": "function",
        "title": "prettyType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "prettyType",
        "normalized": "Type-\u003eDoc",
        "package": "ml-w",
        "partial": "Type",
        "signature": "Type-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:typeExpr",
      "description": {
        "fct-descr": "\u003cp\u003eTypes an \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e given a list of \u003ccode\u003e\u003ca\u003eAssump\u003c/a\u003e\u003c/code\u003e. Returns either a \u003ccode\u003e\u003ca\u003eTypeError\u003c/a\u003e\u003c/code\u003e if\n   the algorithm failed or a \u003ccode\u003e\u003ca\u003eScheme\u003c/a\u003e\u003c/code\u003e if it succeeded.\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "[Assump] -\u003e Expr -\u003e Either TypeError Scheme",
        "fct-source": "src/Language-ML-TypeCheck.html#typeExpr",
        "fct-type": "function",
        "title": "typeExpr"
      },
      "index": {
        "description": "Types an Expr given list of Assump Returns either TypeError if the algorithm failed or Scheme if it succeeded",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "typeExpr",
        "normalized": "[Assump]-\u003eExpr-\u003eEither TypeError Scheme",
        "package": "ml-w",
        "partial": "Expr",
        "signature": "[Assump]-\u003eExpr-\u003eEither TypeError Scheme"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:typeProgram",
      "description": {
        "fct-descr": "\u003cp\u003eTypes a list of declarations (a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e) returning the principal type for\n   each declaration and the type of the final expression.\n\u003c/p\u003e",
        "fct-module": "Language.ML.TypeCheck",
        "fct-package": "ml-w",
        "fct-signature": "Program -\u003e Either TypeError ([(Id, Scheme)], Scheme)",
        "fct-source": "src/Language-ML-TypeCheck.html#typeProgram",
        "fct-type": "function",
        "title": "typeProgram"
      },
      "index": {
        "description": "Types list of declarations Program returning the principal type for each declaration and the type of the final expression",
        "hierarchy": "Language ML TypeCheck",
        "module": "Language.ML.TypeCheck",
        "name": "typeProgram",
        "normalized": "Program-\u003eEither TypeError([(Id,Scheme)],Scheme)",
        "package": "ml-w",
        "partial": "Program",
        "signature": "Program-\u003eEither TypeError([(Id,Scheme)],Scheme)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML.html#",
      "description": {
        "fct-module": "Language.ML",
        "fct-package": "ml-w",
        "fct-signature": "module",
        "fct-source": "src/Language-ML.html",
        "fct-type": "module",
        "title": "ML"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ML",
        "module": "Language.ML",
        "name": "ML",
        "normalized": "",
        "package": "ml-w",
        "partial": "ML",
        "signature": ""
      }
    }
  }
]