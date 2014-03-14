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
        "word": "ml-w"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some datatypes to represent a minimal ML-like language, plus\nparsing and pretty-printing functions.\n\u003c/p\u003e\u003cp\u003eThe syntax is:\n\u003c/p\u003e\u003cpre\u003e\nprogram     ::= declaration ';' program | expression\ndeclaration ::= id '=' expression ';'\nid          ::= [a-zA-Z][a-zA-Z0-9_]*\nids         ::= id+\nexpression  ::= id\n             |  '(' '\\' ids \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e expression ')'\n             |  '(' expression expression ')'\n             |  '(' 'let' id '=' expression 'in' expression ')'\n             |  '(' \u003ccode\u003efix\u003c/code\u003e id \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e expression ')'\n\u003c/pre\u003e\u003cp\u003eWe'll omit parenthesis in the usual way - \u003ccode\u003ea b c\u003c/code\u003e is equivalent to \u003ccode\u003e(a b) c\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\ns = \\ x y z . x z (y z);\nk = \\ x y . x;\ni = \\ x . x;\nk i;\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Language.ML.Syntax",
          "name": "Syntax",
          "package": "ml-w",
          "source": "src/Language-ML-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines some datatypes to represent minimal ML-like language plus parsing and pretty-printing functions The syntax is program declaration program expression declaration id expression id a-zA-Z a-zA-Z0-9 ids id expression id ids expression expression expression let id expression in expression fix id expression We ll omit parenthesis in the usual way is equivalent to Example",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Syntax",
          "package": "ml-w",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA declaration (binds a certain expression to a variable). We add this\n   abstraction on top of let so that we can write programs more easily\n   (leaving let for local declarations).\n\u003c/p\u003e",
          "module": "Language.ML.Syntax",
          "name": "Decl",
          "package": "ml-w",
          "source": "src/Language-ML-Syntax.html#Decl",
          "type": "type"
        },
        "index": {
          "description": "declaration binds certain expression to variable We add this abstraction on top of let so that we can write programs more easily leaving let for local declarations",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Decl",
          "package": "ml-w",
          "partial": "Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#t:Decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing lambda-calculus expressions.\n\u003c/p\u003e",
          "module": "Language.ML.Syntax",
          "name": "Expr",
          "package": "ml-w",
          "source": "src/Language-ML-Syntax.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "Data type representing lambda-calculus expressions",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Expr",
          "package": "ml-w",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier (predictably a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.ML.Syntax",
          "name": "Id",
          "package": "ml-w",
          "source": "src/Language-ML-Syntax.html#Id",
          "type": "type"
        },
        "index": {
          "description": "An identifier predictably String",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Id",
          "package": "ml-w",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e is a list of declaration and an expression\n   representing what the program does. Each declaration can use\n   previous declarations only (no mutual recursion).\n\u003c/p\u003e",
          "module": "Language.ML.Syntax",
          "name": "Program",
          "package": "ml-w",
          "source": "src/Language-ML-Syntax.html#Program",
          "type": "data"
        },
        "index": {
          "description": "Program is list of declaration and an expression representing what the program does Each declaration can use previous declarations only no mutual recursion",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Program",
          "package": "ml-w",
          "partial": "Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expression applied to another.\n\u003c/p\u003e",
          "module": "Language.ML.Syntax",
          "name": "App",
          "package": "ml-w",
          "signature": "App Expr Expr",
          "source": "src/Language-ML-Syntax.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "An expression applied to another",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "App",
          "package": "ml-w",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixed point combinator (bye bye normalization).\n\u003c/p\u003e",
          "module": "Language.ML.Syntax",
          "name": "Fix",
          "package": "ml-w",
          "signature": "Fix Id Expr",
          "source": "src/Language-ML-Syntax.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Fixed point combinator bye bye normalization",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Fix",
          "package": "ml-w",
          "partial": "Fix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lambda abstraction.\n\u003c/p\u003e",
          "module": "Language.ML.Syntax",
          "name": "Lam",
          "package": "ml-w",
          "signature": "Lam Id Expr",
          "source": "src/Language-ML-Syntax.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "lambda abstraction",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Lam",
          "package": "ml-w",
          "partial": "Lam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Lam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic let.\n\u003c/p\u003e",
          "module": "Language.ML.Syntax",
          "name": "Let",
          "package": "ml-w",
          "signature": "Let Id Expr Expr",
          "source": "src/Language-ML-Syntax.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Polymorphic let",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Let",
          "package": "ml-w",
          "partial": "Let",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Let"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.Syntax",
          "name": "Program",
          "package": "ml-w",
          "signature": "Program [Decl] Expr",
          "source": "src/Language-ML-Syntax.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Program",
          "normalized": "Program[Decl]Expr",
          "package": "ml-w",
          "partial": "Program",
          "signature": "Program[Decl]Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable.\n\u003c/p\u003e",
          "module": "Language.ML.Syntax",
          "name": "Var",
          "package": "ml-w",
          "signature": "Var Id",
          "source": "src/Language-ML-Syntax.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "variable",
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "Var",
          "package": "ml-w",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.Syntax",
          "name": "parseExpr",
          "package": "ml-w",
          "signature": "String -\u003e Either ParseError Expr",
          "source": "src/Language-ML-Syntax.html#parseExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "parseExpr",
          "normalized": "String-\u003eEither ParseError Expr",
          "package": "ml-w",
          "partial": "Expr",
          "signature": "String-\u003eEither ParseError Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:parseExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.Syntax",
          "name": "parseExpr'",
          "package": "ml-w",
          "signature": "FilePath -\u003e IO (Either ParseError Expr)",
          "source": "src/Language-ML-Syntax.html#parseExpr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "parseExpr'",
          "normalized": "FilePath-\u003eIO(Either ParseError Expr)",
          "package": "ml-w",
          "partial": "Expr'",
          "signature": "FilePath-\u003eIO(Either ParseError Expr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:parseExpr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.Syntax",
          "name": "parseProgram",
          "package": "ml-w",
          "signature": "String -\u003e Either ParseError Program",
          "source": "src/Language-ML-Syntax.html#parseProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "parseProgram",
          "normalized": "String-\u003eEither ParseError Program",
          "package": "ml-w",
          "partial": "Program",
          "signature": "String-\u003eEither ParseError Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:parseProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.Syntax",
          "name": "parseProgram'",
          "package": "ml-w",
          "signature": "FilePath -\u003e IO (Either ParseError Program)",
          "source": "src/Language-ML-Syntax.html#parseProgram%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "parseProgram'",
          "normalized": "FilePath-\u003eIO(Either ParseError Program)",
          "package": "ml-w",
          "partial": "Program'",
          "signature": "FilePath-\u003eIO(Either ParseError Program)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:parseProgram-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.Syntax",
          "name": "prettyDecl",
          "package": "ml-w",
          "signature": "Decl -\u003e Doc",
          "source": "src/Language-ML-Syntax.html#prettyDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "prettyDecl",
          "normalized": "Decl-\u003eDoc",
          "package": "ml-w",
          "partial": "Decl",
          "signature": "Decl-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:prettyDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.Syntax",
          "name": "prettyExpr",
          "package": "ml-w",
          "signature": "Expr -\u003e Doc",
          "source": "src/Language-ML-Syntax.html#prettyExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "prettyExpr",
          "normalized": "Expr-\u003eDoc",
          "package": "ml-w",
          "partial": "Expr",
          "signature": "Expr-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:prettyExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.Syntax",
          "name": "prettyProgram",
          "package": "ml-w",
          "signature": "Program -\u003e Doc",
          "source": "src/Language-ML-Syntax.html#prettyProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML Syntax",
          "module": "Language.ML.Syntax",
          "name": "prettyProgram",
          "normalized": "Program-\u003eDoc",
          "package": "ml-w",
          "partial": "Program",
          "signature": "Program-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-Syntax.html#v:prettyProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the W algorithm for the small language we are using.\n\u003c/p\u003e\u003cp\u003eThere is one minor annoyance: The \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e datatype distinguishes between free\n type variables and quantified type variable, but the exposed functions of\n this module should produce types completely free of free type variables. This\n could be checked statically having a separate datatype without free type\n variables, but I compromised for clarity and brevity.\n\u003c/p\u003e\u003cp\u003ePartly inspired by the paper \"\u003cem\u003eTyping Haskell in Haskell\u003c/em\u003e\" by Mark\n P. Jones, \u003ca\u003ehttp://web.cecs.pdx.edu/~mpj/thih/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "TypeCheck",
          "package": "ml-w",
          "source": "src/Language-ML-TypeCheck.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the algorithm for the small language we are using There is one minor annoyance The Type datatype distinguishes between free type variables and quantified type variable but the exposed functions of this module should produce types completely free of free type variables This could be checked statically having separate datatype without free type variables but compromised for clarity and brevity Partly inspired by the paper Typing Haskell in Haskell by Mark Jones http web.cecs.pdx.edu mpj thih",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "TypeCheck",
          "package": "ml-w",
          "partial": "Type Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn assumption about the type of a (value) variable.\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "Assump",
          "package": "ml-w",
          "source": "src/Language-ML-TypeCheck.html#Assump",
          "type": "data"
        },
        "index": {
          "description": "An assumption about the type of value variable",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "Assump",
          "package": "ml-w",
          "partial": "Assump",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:Assump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type scheme. The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e represents the number of quantified variables\n   (must be \u003e= 0).\n\u003c/p\u003e\u003cp\u003eInvariants: all the \u003ccode\u003e\u003ca\u003eTyGen\u003c/a\u003e\u003c/code\u003e in the scheme must be \u003c of the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. If this\n   is not the case the program crashes badly (see \u003ccode\u003efreshen\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "Scheme",
          "package": "ml-w",
          "source": "src/Language-ML-TypeCheck.html#Scheme",
          "type": "data"
        },
        "index": {
          "description": "type scheme The Int represents the number of quantified variables must be Invariants all the TyGen in the scheme must be of the Int If this is not the case the program crashes badly see freshen",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "Scheme",
          "package": "ml-w",
          "partial": "Scheme",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:Scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type variable. We use integers for easy generation of new variables.\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "TyVar",
          "package": "ml-w",
          "source": "src/Language-ML-TypeCheck.html#TyVar",
          "type": "type"
        },
        "index": {
          "description": "type variable We use integers for easy generation of new variables",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "TyVar",
          "package": "ml-w",
          "partial": "Ty Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:TyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type to represent types. Note that the functions of this module\n   should return \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003es without \u003ccode\u003e\u003ca\u003eTyVar\u003c/a\u003e\u003c/code\u003es (we want the schemes to have no free\n   variables).\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "Type",
          "package": "ml-w",
          "source": "src/Language-ML-TypeCheck.html#Type",
          "type": "data"
        },
        "index": {
          "description": "data type to represent types Note that the functions of this module should return Type without TyVar we want the schemes to have no free variables",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "Type",
          "package": "ml-w",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat can go wrong when inferring the types.\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "TypeError",
          "package": "ml-w",
          "source": "src/Language-ML-TypeCheck.html#TypeError",
          "type": "data"
        },
        "index": {
          "description": "What can go wrong when inferring the types",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "TypeError",
          "package": "ml-w",
          "partial": "Type Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#t:TypeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.TypeCheck",
          "name": ":\u003e:",
          "package": "ml-w",
          "signature": "Id :\u003e: Scheme",
          "source": "src/Language-ML-TypeCheck.html#Assump",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": ":\u003e:",
          "package": "ml-w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v::-62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe user is trying to construct an infinite type, e.g. 'a = a -\u003e b'.\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "InfiniteType",
          "package": "ml-w",
          "signature": "InfiniteType TyVar Type",
          "source": "src/Language-ML-TypeCheck.html#TypeError",
          "type": "function"
        },
        "index": {
          "description": "The user is trying to construct an infinite type e.g",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "InfiniteType",
          "package": "ml-w",
          "partial": "Infinite Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:InfiniteType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.TypeCheck",
          "name": "Scheme",
          "package": "ml-w",
          "signature": "Scheme Int Type",
          "source": "src/Language-ML-TypeCheck.html#Scheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "Scheme",
          "package": "ml-w",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:Scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arrow type (A -\u003e B)\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "TyArr",
          "package": "ml-w",
          "signature": "TyArr Type Type",
          "source": "src/Language-ML-TypeCheck.html#Type",
          "type": "function"
        },
        "index": {
          "description": "The arrow type",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "TyArr",
          "package": "ml-w",
          "partial": "Ty Arr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:TyArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quantified variable. We use a different constructor (separated from\n   TyVar) so that there can be no clash between the two, and we\n   immediately know what is what.\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "TyGen",
          "package": "ml-w",
          "signature": "TyGen Int",
          "source": "src/Language-ML-TypeCheck.html#Type",
          "type": "function"
        },
        "index": {
          "description": "quantified variable We use different constructor separated from TyVar so that there can be no clash between the two and we immediately know what is what",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "TyGen",
          "package": "ml-w",
          "partial": "Ty Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:TyGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type variable.\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "TyVar",
          "package": "ml-w",
          "signature": "TyVar TyVar",
          "source": "src/Language-ML-TypeCheck.html#Type",
          "type": "function"
        },
        "index": {
          "description": "type variable",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "TyVar",
          "package": "ml-w",
          "partial": "Ty Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:TyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric error, needed for the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "TypeError",
          "package": "ml-w",
          "signature": "TypeError",
          "source": "src/Language-ML-TypeCheck.html#TypeError",
          "type": "function"
        },
        "index": {
          "description": "Generic error needed for the Error instances",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "TypeError",
          "package": "ml-w",
          "partial": "Type Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:TypeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbound variable (value, not type variable).\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "UnboundVariable",
          "package": "ml-w",
          "signature": "UnboundVariable Id",
          "source": "src/Language-ML-TypeCheck.html#TypeError",
          "type": "function"
        },
        "index": {
          "description": "Unbound variable value not type variable",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "UnboundVariable",
          "package": "ml-w",
          "partial": "Unbound Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:UnboundVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnification failed (e.g. when trying to unify a quantified variable\n   with an arrow type).\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "UnificationFail",
          "package": "ml-w",
          "signature": "UnificationFail Type Type",
          "source": "src/Language-ML-TypeCheck.html#TypeError",
          "type": "function"
        },
        "index": {
          "description": "Unification failed e.g when trying to unify quantified variable with an arrow type",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "UnificationFail",
          "package": "ml-w",
          "partial": "Unification Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:UnificationFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.TypeCheck",
          "name": "prettyScheme",
          "package": "ml-w",
          "signature": "Scheme -\u003e Doc",
          "source": "src/Language-ML-TypeCheck.html#prettyScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "prettyScheme",
          "normalized": "Scheme-\u003eDoc",
          "package": "ml-w",
          "partial": "Scheme",
          "signature": "Scheme-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:prettyScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML.TypeCheck",
          "name": "prettyType",
          "package": "ml-w",
          "signature": "Type -\u003e Doc",
          "source": "src/Language-ML-TypeCheck.html#prettyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "prettyType",
          "normalized": "Type-\u003eDoc",
          "package": "ml-w",
          "partial": "Type",
          "signature": "Type-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:prettyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes an \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e given a list of \u003ccode\u003e\u003ca\u003eAssump\u003c/a\u003e\u003c/code\u003e. Returns either a \u003ccode\u003e\u003ca\u003eTypeError\u003c/a\u003e\u003c/code\u003e if\n   the algorithm failed or a \u003ccode\u003e\u003ca\u003eScheme\u003c/a\u003e\u003c/code\u003e if it succeeded.\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "typeExpr",
          "package": "ml-w",
          "signature": "[Assump] -\u003e Expr -\u003e Either TypeError Scheme",
          "source": "src/Language-ML-TypeCheck.html#typeExpr",
          "type": "function"
        },
        "index": {
          "description": "Types an Expr given list of Assump Returns either TypeError if the algorithm failed or Scheme if it succeeded",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "typeExpr",
          "normalized": "[Assump]-\u003eExpr-\u003eEither TypeError Scheme",
          "package": "ml-w",
          "partial": "Expr",
          "signature": "[Assump]-\u003eExpr-\u003eEither TypeError Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:typeExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes a list of declarations (a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e) returning the principal type for\n   each declaration and the type of the final expression.\n\u003c/p\u003e",
          "module": "Language.ML.TypeCheck",
          "name": "typeProgram",
          "package": "ml-w",
          "signature": "Program -\u003e Either TypeError ([(Id, Scheme)], Scheme)",
          "source": "src/Language-ML-TypeCheck.html#typeProgram",
          "type": "function"
        },
        "index": {
          "description": "Types list of declarations Program returning the principal type for each declaration and the type of the final expression",
          "hierarchy": "Language ML TypeCheck",
          "module": "Language.ML.TypeCheck",
          "name": "typeProgram",
          "normalized": "Program-\u003eEither TypeError([(Id,Scheme)],Scheme)",
          "package": "ml-w",
          "partial": "Program",
          "signature": "Program-\u003eEither TypeError([(Id,Scheme)],Scheme)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML-TypeCheck.html#v:typeProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ML",
          "name": "ML",
          "package": "ml-w",
          "source": "src/Language-ML.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ML",
          "module": "Language.ML",
          "name": "ML",
          "package": "ml-w",
          "partial": "ML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ml-w/docs/Language-ML.html#"
      }
    }
  ]
]