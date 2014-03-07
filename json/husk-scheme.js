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
        "word": "husk-scheme"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains support for compiling libraries of scheme code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Compiler.Libraries",
          "name": "Libraries",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Compiler-Libraries.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains support for compiling libraries of scheme code",
          "hierarchy": "Language Scheme Compiler Libraries",
          "module": "Language.Scheme.Compiler.Libraries",
          "name": "Libraries",
          "package": "husk-scheme",
          "partial": "Libraries",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Libraries.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport all given modules and generate code for them\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Libraries",
          "name": "importAll",
          "package": "husk-scheme",
          "signature": "Env-\u003e Env-\u003e [LispVal]-\u003e CompLibOpts-\u003e CompOpts-\u003e IOThrowsError [HaskAST]",
          "type": "function"
        },
        "index": {
          "description": "Import all given modules and generate code for them",
          "hierarchy": "Language Scheme Compiler Libraries",
          "module": "Language.Scheme.Compiler.Libraries",
          "name": "importAll",
          "normalized": "Env-\u003eEnv-\u003e[LispVal]-\u003eCompLibOpts-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "All",
          "signature": "Env-\u003eEnv-\u003e[LispVal]-\u003eCompLibOpts-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Libraries.html#v:importAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains data types used by the compiler.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "Types",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Compiler-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains data types used by the compiler",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "Types",
          "package": "husk-scheme",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions passed to the compiler library module\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "CompLibOpts",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Compiler-Types.html#CompLibOpts",
          "type": "data"
        },
        "index": {
          "description": "Options passed to the compiler library module",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "CompLibOpts",
          "package": "husk-scheme",
          "partial": "Comp Lib Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#t:CompLibOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type to store options passed to compile.\n  Eventually all of this might be able to be \n  integrated into a Compile monad.\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "CompOpts",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Compiler-Types.html#CompOpts",
          "type": "data"
        },
        "index": {
          "description": "type to store options passed to compile Eventually all of this might be able to be integrated into Compile monad",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "CompOpts",
          "package": "husk-scheme",
          "partial": "Comp Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#t:CompOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA very basic type to store a Haskell AST.\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "HaskAST",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "data"
        },
        "index": {
          "description": "very basic type to store Haskell AST",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "HaskAST",
          "package": "husk-scheme",
          "partial": "Hask AST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#t:HaskAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "AstAssignM",
          "package": "husk-scheme",
          "signature": "AstAssignM String HaskAST",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "AstAssignM",
          "package": "husk-scheme",
          "partial": "Ast Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:AstAssignM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "AstContinuation",
          "package": "husk-scheme",
          "signature": "AstContinuation",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "AstContinuation",
          "package": "husk-scheme",
          "partial": "Ast Continuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:AstContinuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "AstFunction",
          "package": "husk-scheme",
          "signature": "AstFunction",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "AstFunction",
          "package": "husk-scheme",
          "partial": "Ast Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:AstFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "AstValue",
          "package": "husk-scheme",
          "signature": "AstValue String",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "AstValue",
          "package": "husk-scheme",
          "partial": "Ast Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:AstValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "CompileLibraryOptions",
          "package": "husk-scheme",
          "signature": "CompileLibraryOptions",
          "source": "src/Language-Scheme-Compiler-Types.html#CompLibOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "CompileLibraryOptions",
          "package": "husk-scheme",
          "partial": "Compile Library Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:CompileLibraryOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "CompileOptions",
          "package": "husk-scheme",
          "signature": "CompileOptions",
          "source": "src/Language-Scheme-Compiler-Types.html#CompOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "CompileOptions",
          "package": "husk-scheme",
          "partial": "Compile Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:CompileOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert abstract syntax tree to a string\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "ast2Str",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e String",
          "source": "src/Language-Scheme-Compiler-Types.html#ast2Str",
          "type": "function"
        },
        "index": {
          "description": "Convert abstract syntax tree to string",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "ast2Str",
          "normalized": "LispVal-\u003eString",
          "package": "husk-scheme",
          "partial": "Str",
          "signature": "LispVal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:ast2Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "astcArgs",
          "package": "husk-scheme",
          "signature": "String",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "astcArgs",
          "package": "husk-scheme",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:astcArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "astcNext",
          "package": "husk-scheme",
          "signature": "String",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "astcNext",
          "package": "husk-scheme",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:astcNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "astfArgs",
          "package": "husk-scheme",
          "signature": "String",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "astfArgs",
          "package": "husk-scheme",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:astfArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "astfCode",
          "package": "husk-scheme",
          "signature": "[HaskAST]",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "astfCode",
          "normalized": "[HaskAST]",
          "package": "husk-scheme",
          "partial": "Code",
          "signature": "[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:astfCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "astfName",
          "package": "husk-scheme",
          "signature": "String",
          "source": "src/Language-Scheme-Compiler-Types.html#HaskAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "astfName",
          "package": "husk-scheme",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:astfName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of abstract syntax trees to a list of strings\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "asts2Str",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e String",
          "source": "src/Language-Scheme-Compiler-Types.html#asts2Str",
          "type": "function"
        },
        "index": {
          "description": "Convert list of abstract syntax trees to list of strings",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "asts2Str",
          "normalized": "[LispVal]-\u003eString",
          "package": "husk-scheme",
          "partial": "Str",
          "signature": "[LispVal]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:asts2Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "compBlock",
          "package": "husk-scheme",
          "signature": "String -\u003e Maybe String -\u003e Env -\u003e [HaskAST] -\u003e [LispVal] -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler-Types.html#CompLibOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "compBlock",
          "normalized": "String-\u003eMaybe String-\u003eEnv-\u003e[HaskAST]-\u003e[LispVal]-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "Block",
          "signature": "String-\u003eMaybe String-\u003eEnv-\u003e[HaskAST]-\u003e[LispVal]-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:compBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Compiler.Types",
          "name": "compLisp",
          "package": "husk-scheme",
          "signature": "Env -\u003e String -\u003e String -\u003e Maybe String -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler-Types.html#CompLibOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "compLisp",
          "normalized": "Env-\u003eString-\u003eString-\u003eMaybe String-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "Lisp",
          "signature": "Env-\u003eString-\u003eString-\u003eMaybe String-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:compLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name to use for the next function after the current\n  compiler recursion is finished. For example, after compiling\n  a block of code, the control flow would be expected to go\n  to this function.\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "coptsNextFunc",
          "package": "husk-scheme",
          "signature": "Maybe String",
          "source": "src/Language-Scheme-Compiler-Types.html#CompOpts",
          "type": "function"
        },
        "index": {
          "description": "The name to use for the next function after the current compiler recursion is finished For example after compiling block of code the control flow would be expected to go to this function",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "coptsNextFunc",
          "package": "husk-scheme",
          "partial": "Next Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:coptsNextFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediate name to use when creating a compiled function.\n  Presumably there is other code that is expecting\n  to call into it.\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "coptsThisFunc",
          "package": "husk-scheme",
          "signature": "String",
          "source": "src/Language-Scheme-Compiler-Types.html#CompOpts",
          "type": "function"
        },
        "index": {
          "description": "Immediate name to use when creating compiled function Presumably there is other code that is expecting to call into it",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "coptsThisFunc",
          "package": "husk-scheme",
          "partial": "This Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:coptsThisFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to include the \u003ccode\u003eargs\u003c/code\u003e parameter in the current function\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "coptsThisFuncUseArgs",
          "package": "husk-scheme",
          "signature": "Bool",
          "source": "src/Language-Scheme-Compiler-Types.html#CompOpts",
          "type": "function"
        },
        "index": {
          "description": "Whether to include the args parameter in the current function",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "coptsThisFuncUseArgs",
          "package": "husk-scheme",
          "partial": "This Func Use Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:coptsThisFuncUseArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to include the \u003ccode\u003evalue\u003c/code\u003e parameter in the current function\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "coptsThisFuncUseValue",
          "package": "husk-scheme",
          "signature": "Bool",
          "source": "src/Language-Scheme-Compiler-Types.html#CompOpts",
          "type": "function"
        },
        "index": {
          "description": "Whether to include the value parameter in the current function",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "coptsThisFuncUseValue",
          "package": "husk-scheme",
          "partial": "This Func Use Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:coptsThisFuncUseValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate code for a continutation\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "createAstCont",
          "package": "husk-scheme",
          "signature": "CompOpts-\u003e String-\u003e String-\u003e HaskAST",
          "type": "function"
        },
        "index": {
          "description": "Create code for continutation",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "createAstCont",
          "normalized": "CompOpts-\u003eString-\u003eString-\u003eHaskAST",
          "package": "husk-scheme",
          "partial": "Ast Cont",
          "signature": "CompOpts-\u003eString-\u003eString-\u003eHaskAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:createAstCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate code for a function\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "createAstFunc",
          "package": "husk-scheme",
          "signature": "CompOpts-\u003e [HaskAST]-\u003e HaskAST",
          "type": "function"
        },
        "index": {
          "description": "Create code for function",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "createAstFunc",
          "normalized": "CompOpts-\u003e[HaskAST]-\u003eHaskAST",
          "package": "husk-scheme",
          "partial": "Ast Func",
          "signature": "CompOpts-\u003e[HaskAST]-\u003eHaskAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:createAstFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default compiler options\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "defaultCompileOptions",
          "package": "husk-scheme",
          "signature": "String -\u003e CompOpts",
          "source": "src/Language-Scheme-Compiler-Types.html#defaultCompileOptions",
          "type": "function"
        },
        "index": {
          "description": "The default compiler options",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "defaultCompileOptions",
          "normalized": "String-\u003eCompOpts",
          "package": "husk-scheme",
          "partial": "Compile Options",
          "signature": "String-\u003eCompOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:defaultCompileOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock of code used in the header of a Haskell program \n  generated by the compiler.\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "header",
          "package": "husk-scheme",
          "signature": "String -\u003e Bool -\u003e String -\u003e [String]",
          "source": "src/Language-Scheme-Compiler-Types.html#header",
          "type": "function"
        },
        "index": {
          "description": "Block of code used in the header of Haskell program generated by the compiler",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "header",
          "normalized": "String-\u003eBool-\u003eString-\u003e[String]",
          "package": "husk-scheme",
          "signature": "String-\u003eBool-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader comment used at the top of a Haskell program generated\n  by the compiler\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "headerComment",
          "package": "husk-scheme",
          "signature": "[String]",
          "source": "src/Language-Scheme-Compiler-Types.html#headerComment",
          "type": "function"
        },
        "index": {
          "description": "Header comment used at the top of Haskell program generated by the compiler",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "headerComment",
          "normalized": "[String]",
          "package": "husk-scheme",
          "partial": "Comment",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:headerComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImports used for a compiled program\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "headerImports",
          "package": "husk-scheme",
          "signature": "[String]",
          "source": "src/Language-Scheme-Compiler-Types.html#headerImports",
          "type": "function"
        },
        "index": {
          "description": "Imports used for compiled program",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "headerImports",
          "normalized": "[String]",
          "package": "husk-scheme",
          "partial": "Imports",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:headerImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain module used in a compiled Haskell program\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "headerModule",
          "package": "husk-scheme",
          "signature": "[String]",
          "source": "src/Language-Scheme-Compiler-Types.html#headerModule",
          "type": "function"
        },
        "index": {
          "description": "Main module used in compiled Haskell program",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "headerModule",
          "normalized": "[String]",
          "package": "husk-scheme",
          "partial": "Module",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:headerModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA utility function to join list members together\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "joinL",
          "package": "husk-scheme",
          "signature": "[[a]]-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "utility function to join list members together",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "joinL",
          "normalized": "[[a]]-\u003e[a]-\u003e[a]",
          "package": "husk-scheme",
          "signature": "[[a]]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:joinL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuntime reference to module data structure\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "moduleRuntimeVar",
          "package": "husk-scheme",
          "signature": "[Char]",
          "source": "src/Language-Scheme-Compiler-Types.html#moduleRuntimeVar",
          "type": "function"
        },
        "index": {
          "description": "Runtime reference to module data structure",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "moduleRuntimeVar",
          "normalized": "[Char]",
          "package": "husk-scheme",
          "partial": "Runtime Var",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:moduleRuntimeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate code based on the given Haskell AST\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler.Types",
          "name": "showValAST",
          "package": "husk-scheme",
          "signature": "HaskAST -\u003e String",
          "source": "src/Language-Scheme-Compiler-Types.html#showValAST",
          "type": "function"
        },
        "index": {
          "description": "Generate code based on the given Haskell AST",
          "hierarchy": "Language Scheme Compiler Types",
          "module": "Language.Scheme.Compiler.Types",
          "name": "showValAST",
          "normalized": "HaskAST-\u003eString",
          "package": "husk-scheme",
          "partial": "Val AST",
          "signature": "HaskAST-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler-Types.html#v:showValAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a Scheme to Haskell compiler which performs the following \ntransformations:\n\u003c/p\u003e\u003cpre\u003e Scheme AST (LispVal) =\u003e Haskell AST (HaskAST) =\u003e Compiled Code (String)\n\u003c/pre\u003e\u003cp\u003eThe GHC compiler is then used to create a native executable. At present, the \nfocus has just been on creating a compiler that will generate correct, working \ncode. Many optimizations could and need to be made for time and space...\n\u003c/p\u003e\u003cp\u003eNote the following type is used for all functions generated by the compiler: \n\u003c/p\u003e\u003cpre\u003e compiledFunc :: \n   Env -\u003e                  -- Runtime Environment\n   LispVal -\u003e              -- Continuation\n   LispVal -\u003e              -- Value\n   Maybe [LispVal] -\u003e      -- Additional arguments\n   IOThrowsError LispVal   -- Result\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "Compiler",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Compiler.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains Scheme to Haskell compiler which performs the following transformations Scheme AST LispVal Haskell AST HaskAST Compiled Code String The GHC compiler is then used to create native executable At present the focus has just been on creating compiler that will generate correct working code Many optimizations could and need to be made for time and space Note the following type is used for all functions generated by the compiler compiledFunc Env Runtime Environment LispVal Continuation LispVal Value Maybe LispVal Additional arguments IOThrowsError LispVal Result",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "Compiler",
          "package": "husk-scheme",
          "partial": "Compiler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a Lisp expression to Haskell. Note this function does\n  not expand macros; mcompile should be used instead if macros\n  may appear in the expression.\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compile",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e CompOpts -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler.html#compile",
          "type": "function"
        },
        "index": {
          "description": "Compile Lisp expression to Haskell Note this function does not expand macros mcompile should be used instead if macros may appear in the expression",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compile",
          "normalized": "Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "signature": "Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a function call\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileApply",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e CompOpts -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler.html#compileApply",
          "type": "function"
        },
        "index": {
          "description": "Compile function call",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileApply",
          "normalized": "Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "Apply",
          "signature": "Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a list (block) of Scheme code\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileBlock",
          "package": "husk-scheme",
          "signature": "String -\u003e Maybe String -\u003e Env -\u003e [HaskAST] -\u003e [LispVal] -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler.html#compileBlock",
          "type": "function"
        },
        "index": {
          "description": "Compile list block of Scheme code",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileBlock",
          "normalized": "String-\u003eMaybe String-\u003eEnv-\u003e[HaskAST]-\u003e[LispVal]-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "Block",
          "signature": "String-\u003eMaybe String-\u003eEnv-\u003e[HaskAST]-\u003e[LispVal]-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a list of variables diverted into env at compile time, and\n  divert them into the env at runtime\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileDivertedVars",
          "package": "husk-scheme",
          "signature": "String -\u003e Env -\u003e [LispVal] -\u003e CompOpts -\u003e IOThrowsError HaskAST",
          "source": "src/Language-Scheme-Compiler.html#compileDivertedVars",
          "type": "function"
        },
        "index": {
          "description": "Take list of variables diverted into env at compile time and divert them into the env at runtime",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileDivertedVars",
          "normalized": "String-\u003eEnv-\u003e[LispVal]-\u003eCompOpts-\u003eIOThrowsError HaskAST",
          "package": "husk-scheme",
          "partial": "Diverted Vars",
          "signature": "String-\u003eEnv-\u003e[LispVal]-\u003eCompOpts-\u003eIOThrowsError HaskAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileDivertedVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile an intermediate expression (such as an arg to if) and \n   call into the next continuation with it's value\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileExpr",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e String -\u003e Maybe String -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler.html#compileExpr",
          "type": "function"
        },
        "index": {
          "description": "Compile an intermediate expression such as an arg to if and call into the next continuation with it value",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileExpr",
          "normalized": "Env-\u003eLispVal-\u003eString-\u003eMaybe String-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "Expr",
          "signature": "Env-\u003eLispVal-\u003eString-\u003eMaybe String-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile the list of arguments for a function\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileLambdaList",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError String",
          "source": "src/Language-Scheme-Compiler.html#compileLambdaList",
          "type": "function"
        },
        "index": {
          "description": "Compile the list of arguments for function",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileLambdaList",
          "normalized": "[LispVal]-\u003eIOThrowsError String",
          "package": "husk-scheme",
          "partial": "Lambda List",
          "signature": "[LispVal]-\u003eIOThrowsError String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileLambdaList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a file containing scheme code\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileLisp",
          "package": "husk-scheme",
          "signature": "Env-\u003e String-\u003e String-\u003e Maybe String-\u003e IOThrowsError [HaskAST]",
          "type": "function"
        },
        "index": {
          "description": "Compile file containing scheme code",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileLisp",
          "normalized": "Env-\u003eString-\u003eString-\u003eMaybe String-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "Lisp",
          "signature": "Env-\u003eString-\u003eString-\u003eMaybe String-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to compile expressions consisting of a scalar\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileScalar",
          "package": "husk-scheme",
          "signature": "String -\u003e CompOpts -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler.html#compileScalar",
          "type": "function"
        },
        "index": {
          "description": "Helper function to compile expressions consisting of scalar",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileScalar",
          "normalized": "String-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "Scalar",
          "signature": "String-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for compiling a special form\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileSpecialForm",
          "package": "husk-scheme",
          "signature": "String -\u003e String -\u003e CompOpts -\u003e IOThrowsError HaskAST",
          "source": "src/Language-Scheme-Compiler.html#compileSpecialForm",
          "type": "function"
        },
        "index": {
          "description": "Helper function for compiling special form",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileSpecialForm",
          "normalized": "String-\u003eString-\u003eCompOpts-\u003eIOThrowsError HaskAST",
          "package": "husk-scheme",
          "partial": "Special Form",
          "signature": "String-\u003eString-\u003eCompOpts-\u003eIOThrowsError HaskAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileSpecialForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for each special form that allows the form variable \n  (EG: \u003ca\u003eif\u003c/a\u003e) to be redefined at compile time\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileSpecialFormBody",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e CompOpts -\u003e (Maybe String -\u003e ErrorT LispError IO [HaskAST]) -\u003e ErrorT LispError IO [HaskAST]",
          "source": "src/Language-Scheme-Compiler.html#compileSpecialFormBody",
          "type": "function"
        },
        "index": {
          "description": "wrapper for each special form that allows the form variable EG if to be redefined at compile time",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileSpecialFormBody",
          "normalized": "Env-\u003eLispVal-\u003eCompOpts-\u003e(Maybe String-\u003eErrorT LispError IO[HaskAST])-\u003eErrorT LispError IO[HaskAST]",
          "package": "husk-scheme",
          "partial": "Special Form Body",
          "signature": "Env-\u003eLispVal-\u003eCompOpts-\u003e(Maybe String-\u003eErrorT LispError IO[HaskAST])-\u003eErrorT LispError IO[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileSpecialFormBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the function entry point for a special form\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "compileSpecialFormEntryPoint",
          "package": "husk-scheme",
          "signature": "String -\u003e String -\u003e CompOpts -\u003e IOThrowsError HaskAST",
          "source": "src/Language-Scheme-Compiler.html#compileSpecialFormEntryPoint",
          "type": "function"
        },
        "index": {
          "description": "Create the function entry point for special form",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "compileSpecialFormEntryPoint",
          "normalized": "String-\u003eString-\u003eCompOpts-\u003eIOThrowsError HaskAST",
          "package": "husk-scheme",
          "partial": "Special Form Entry Point",
          "signature": "String-\u003eString-\u003eCompOpts-\u003eIOThrowsError HaskAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:compileSpecialFormEntryPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd lambda variables to the compiler's environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "defineLambdaVars",
          "package": "husk-scheme",
          "signature": "Env -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Compiler.html#defineLambdaVars",
          "type": "function"
        },
        "index": {
          "description": "Add lambda variables to the compiler environment",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "defineLambdaVars",
          "normalized": "Env-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Lambda Vars",
          "signature": "Env-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:defineLambdaVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all variables defined at \u003ca\u003ethis\u003c/a\u003e level and load their symbols into\n  the environment. This allows the compiler validation to work even \n  though a variable is used in a sub-form before it is defined further\n  on down in the program\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "defineTopLevelVars",
          "package": "husk-scheme",
          "signature": "Env -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Compiler.html#defineTopLevelVars",
          "type": "function"
        },
        "index": {
          "description": "Find all variables defined at this level and load their symbols into the environment This allows the compiler validation to work even though variable is used in sub-form before it is defined further on down in the program",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "defineTopLevelVars",
          "normalized": "Env-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Top Level Vars",
          "signature": "Env-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:defineTopLevelVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo the actual insertion of diverted variables back to the \n  compiled program.\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "divertVars",
          "package": "husk-scheme",
          "signature": "Env-\u003e LispVal-\u003e CompOpts-\u003e (Env -\u003e LispVal -\u003e CompOpts -\u003e IOThrowsError [HaskAST])-\u003e IOThrowsError [HaskAST]",
          "type": "function"
        },
        "index": {
          "description": "Do the actual insertion of diverted variables back to the compiled program",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "divertVars",
          "normalized": "Env-\u003eLispVal-\u003eCompOpts-\u003e(Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST])-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "Vars",
          "signature": "Env-\u003eLispVal-\u003eCompOpts-\u003e(Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST])-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:divertVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform one-time initialization of the compiler's environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "initializeCompiler",
          "package": "husk-scheme",
          "signature": "Env -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler.html#initializeCompiler",
          "type": "function"
        },
        "index": {
          "description": "Perform one-time initialization of the compiler environment",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "initializeCompiler",
          "normalized": "Env-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "partial": "Compiler",
          "signature": "Env-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:initializeCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the given lispval is a primitive function\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "isPrim",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e IOThrowsError (Maybe LispVal)",
          "source": "src/Language-Scheme-Compiler.html#isPrim",
          "type": "function"
        },
        "index": {
          "description": "Determines if the given lispval is primitive function",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "isPrim",
          "normalized": "Env-\u003eLispVal-\u003eIOThrowsError(Maybe LispVal)",
          "package": "husk-scheme",
          "partial": "Prim",
          "signature": "Env-\u003eLispVal-\u003eIOThrowsError(Maybe LispVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:isPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand macros and compile the resulting code\n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "mcompile",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e CompOpts -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler.html#mcompile",
          "type": "function"
        },
        "index": {
          "description": "Expand macros and compile the resulting code",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "mcompile",
          "normalized": "Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "signature": "Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:mcompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand macros and then pass control to the given function \n\u003c/p\u003e",
          "module": "Language.Scheme.Compiler",
          "name": "mfunc",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e (Env -\u003e LispVal -\u003e CompOpts -\u003e IOThrowsError [HaskAST]) -\u003e CompOpts -\u003e IOThrowsError [HaskAST]",
          "source": "src/Language-Scheme-Compiler.html#mfunc",
          "type": "function"
        },
        "index": {
          "description": "Expand macros and then pass control to the given function",
          "hierarchy": "Language Scheme Compiler",
          "module": "Language.Scheme.Compiler",
          "name": "mfunc",
          "normalized": "Env-\u003eLispVal-\u003e(Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST])-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "package": "husk-scheme",
          "signature": "Env-\u003eLispVal-\u003e(Env-\u003eLispVal-\u003eCompOpts-\u003eIOThrowsError[HaskAST])-\u003eCompOpts-\u003eIOThrowsError[HaskAST]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Compiler.html#v:mfunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains Core functionality, primarily Scheme expression evaluation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Core",
          "name": "Core",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains Core functionality primarily Scheme expression evaluation",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "Core",
          "package": "husk-scheme",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall into a Scheme function\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "apply",
          "package": "husk-scheme",
          "signature": "LispVal-\u003e LispVal-\u003e [LispVal]-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Call into Scheme function",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "apply",
          "normalized": "LispVal-\u003eLispVal-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "LispVal-\u003eLispVal-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA support function for eval; eval calls into this function instead of \n    returning values directly. continueEval then uses the continuation \n    argument to manage program control flow.\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "continueEval",
          "package": "husk-scheme",
          "signature": "Env-\u003e LispVal-\u003e LispVal-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "support function for eval eval calls into this function instead of returning values directly continueEval then uses the continuation argument to manage program control flow",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "continueEval",
          "normalized": "Env-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Eval",
          "signature": "Env-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:continueEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a string and print results to console\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "evalAndPrint",
          "package": "husk-scheme",
          "signature": "Env -\u003e String -\u003e IO ()",
          "source": "src/Language-Scheme-Core.html#evalAndPrint",
          "type": "function"
        },
        "index": {
          "description": "Evaluate string and print results to console",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "evalAndPrint",
          "normalized": "Env-\u003eString-\u003eIO()",
          "package": "husk-scheme",
          "partial": "And Print",
          "signature": "Env-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:evalAndPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a lisp data structure and return a value for use by husk\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "evalLisp",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Core.html#evalLisp",
          "type": "function"
        },
        "index": {
          "description": "Evaluate lisp data structure and return value for use by husk",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "evalLisp",
          "normalized": "Env-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Lisp",
          "signature": "Env-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:evalLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a lisp data structure and return the LispVal or LispError\n  result directly\n\u003c/p\u003e\u003cpre\u003e\n  result \u003c- evalLisp' env $ List [Atom \u003ca\u003e/\u003c/a\u003e, Number 1, Number 0]\n  case result of\n    Left err -\u003e putStrLn $ \u003ca\u003eError: \u003c/a\u003e ++ (show err)\n    Right val -\u003e putStrLn $ show val\n\u003c/pre\u003e",
          "module": "Language.Scheme.Core",
          "name": "evalLisp'",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e IO (ThrowsError LispVal)",
          "source": "src/Language-Scheme-Core.html#evalLisp%27",
          "type": "function"
        },
        "index": {
          "description": "Evaluate lisp data structure and return the LispVal or LispError result directly result evalLisp env List Atom Number Number case result of Left err putStrLn Error show err Right val putStrLn show val",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "evalLisp'",
          "normalized": "Env-\u003eLispVal-\u003eIO(ThrowsError LispVal)",
          "package": "husk-scheme",
          "partial": "Lisp'",
          "signature": "Env-\u003eLispVal-\u003eIO(ThrowsError LispVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:evalLisp-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a string containing Scheme code\n\u003c/p\u003e\u003cpre\u003e\nenv \u003c- primitiveBindings\n\nevalString env \u003ca\u003e(+ x x x)\u003c/a\u003e\n\u003ca\u003e3\u003c/a\u003e\n\nevalString env \u003ca\u003e(+ x x x (* 3 9))\u003c/a\u003e\n\u003ca\u003e30\u003c/a\u003e\n\nevalString env \u003ca\u003e(* 3 9)\u003c/a\u003e\n\u003ca\u003e27\u003c/a\u003e\n\u003c/pre\u003e",
          "module": "Language.Scheme.Core",
          "name": "evalString",
          "package": "husk-scheme",
          "signature": "Env -\u003e String -\u003e IO String",
          "source": "src/Language-Scheme-Core.html#evalString",
          "type": "function"
        },
        "index": {
          "description": "Evaluate string containing Scheme code env primitiveBindings evalString env evalString env evalString env",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "evalString",
          "normalized": "Env-\u003eString-\u003eIO String",
          "package": "husk-scheme",
          "partial": "String",
          "signature": "Env-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:evalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to find the file both in the current directory and in the husk\n  libraries. If the file is not found in the current directory but exists\n  as a husk library, return the full path to the file in the library.\n  Otherwise just return the given filename.\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "findFileOrLib",
          "package": "husk-scheme",
          "signature": "[Char] -\u003e ErrorT LispError IO String",
          "source": "src/Language-Scheme-Core.html#findFileOrLib",
          "type": "function"
        },
        "index": {
          "description": "Attempts to find the file both in the current directory and in the husk libraries If the file is not found in the current directory but exists as husk library return the full path to the file in the library Otherwise just return the given filename",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "findFileOrLib",
          "normalized": "[Char]-\u003eErrorT LispError IO String",
          "package": "husk-scheme",
          "partial": "File Or Lib",
          "signature": "[Char]-\u003eErrorT LispError IO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:findFileOrLib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the full path to a data file installed for husk\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "getDataFileFullPath",
          "package": "husk-scheme",
          "signature": "String -\u003e IO String",
          "source": "src/Language-Scheme-Core.html#getDataFileFullPath",
          "type": "function"
        },
        "index": {
          "description": "Get the full path to data file installed for husk",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "getDataFileFullPath",
          "normalized": "String-\u003eIO String",
          "package": "husk-scheme",
          "partial": "Data File Full Path",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:getDataFileFullPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for macroEval and eval\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "meval",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Core.html#meval",
          "type": "function"
        },
        "index": {
          "description": "wrapper for macroEval and eval",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "meval",
          "normalized": "Env-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "Env-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:meval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty environment with the %import function. This is presently\n  just intended for internal use by the compiler.\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "nullEnvWithImport",
          "package": "husk-scheme",
          "signature": "IO Env",
          "source": "src/Language-Scheme-Core.html#nullEnvWithImport",
          "type": "function"
        },
        "index": {
          "description": "An empty environment with the import function This is presently just intended for internal use by the compiler",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "nullEnvWithImport",
          "package": "husk-scheme",
          "partial": "Env With Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:nullEnvWithImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnvironment containing the primitive forms that are built into the Scheme \n  language. This function only includes forms that are implemented in Haskell; \n  derived forms implemented in Scheme (such as let, list, etc) are available\n  in the standard library which must be pulled into the environment using \u003cem\u003e(load)\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFor the purposes of using husk as an extension language, \u003cem\u003er5rsEnv\u003c/em\u003e will\n  probably be more useful.\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "primitiveBindings",
          "package": "husk-scheme",
          "signature": "IO Env",
          "source": "src/Language-Scheme-Core.html#primitiveBindings",
          "type": "function"
        },
        "index": {
          "description": "Environment containing the primitive forms that are built into the Scheme language This function only includes forms that are implemented in Haskell derived forms implemented in Scheme such as let list etc are available in the standard library which must be pulled into the environment using load For the purposes of using husk as an extension language r5rsEnv will probably be more useful",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "primitiveBindings",
          "package": "husk-scheme",
          "partial": "Bindings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:primitiveBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the standard r5rs environment, including libraries\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "r5rsEnv",
          "package": "husk-scheme",
          "signature": "IO Env",
          "source": "src/Language-Scheme-Core.html#r5rsEnv",
          "type": "function"
        },
        "index": {
          "description": "Load the standard r5rs environment including libraries",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "r5rsEnv",
          "package": "husk-scheme",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:r5rsEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the standard r5rs environment, including libraries,\n  but do not create the (import) binding\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "r5rsEnv'",
          "package": "husk-scheme",
          "signature": "IO Env",
          "source": "src/Language-Scheme-Core.html#r5rsEnv%27",
          "type": "function"
        },
        "index": {
          "description": "Load the standard r5rs environment including libraries but do not create the import binding",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "r5rsEnv'",
          "package": "husk-scheme",
          "partial": "Env'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:r5rsEnv-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the standard r7rs environment, including libraries\n\u003c/p\u003e\u003cp\u003eNote that the only difference between this and the r5rs equivalent is that\n  slightly less Scheme code is loaded initially.\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "r7rsEnv",
          "package": "husk-scheme",
          "signature": "IO Env",
          "source": "src/Language-Scheme-Core.html#r7rsEnv",
          "type": "function"
        },
        "index": {
          "description": "Load the standard r7rs environment including libraries Note that the only difference between this and the r5rs equivalent is that slightly less Scheme code is loaded initially",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "r7rsEnv",
          "package": "husk-scheme",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:r7rsEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the standard r7rs environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "r7rsEnv'",
          "package": "husk-scheme",
          "signature": "IO Env",
          "source": "src/Language-Scheme-Core.html#r7rsEnv%27",
          "type": "function"
        },
        "index": {
          "description": "Load the standard r7rs environment",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "r7rsEnv'",
          "package": "husk-scheme",
          "partial": "Env'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:r7rsEnv-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad haskell bindings used for the r7rs time library\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "r7rsTimeEnv",
          "package": "husk-scheme",
          "signature": "IO Env",
          "source": "src/Language-Scheme-Core.html#r7rsTimeEnv",
          "type": "function"
        },
        "index": {
          "description": "Load haskell bindings used for the r7rs time library",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "r7rsTimeEnv",
          "package": "husk-scheme",
          "partial": "Time Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:r7rsTimeEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister optional SRFI extensions\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "registerExtensions",
          "package": "husk-scheme",
          "signature": "Env -\u003e (FilePath -\u003e IO FilePath) -\u003e IO ()",
          "source": "src/Language-Scheme-Core.html#registerExtensions",
          "type": "function"
        },
        "index": {
          "description": "Register optional SRFI extensions",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "registerExtensions",
          "normalized": "Env-\u003e(FilePath-\u003eIO FilePath)-\u003eIO()",
          "package": "husk-scheme",
          "partial": "Extensions",
          "signature": "Env-\u003e(FilePath-\u003eIO FilePath)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:registerExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a list element, by index. Taken from:\n  http:\u003cem/\u003estackoverflow.com\u003cem\u003equestions\u003c/em\u003e10133361/haskell-replace-element-in-list\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "replaceAtIndex",
          "package": "husk-scheme",
          "signature": "forall a.  Int -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Language-Scheme-Core.html#replaceAtIndex",
          "type": "function"
        },
        "index": {
          "description": "Replace list element by index Taken from http stackoverflow.com questions haskell-replace-element-in-list",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "replaceAtIndex",
          "normalized": "a b Int-\u003ec-\u003e[c]-\u003e[c]",
          "package": "husk-scheme",
          "partial": "At Index",
          "signature": "forall a. Int-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:replaceAtIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action and return error or Nothing if no error was thrown.\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "runIOThrows",
          "package": "husk-scheme",
          "signature": "IOThrowsError String -\u003e IO (Maybe String)",
          "source": "src/Language-Scheme-Core.html#runIOThrows",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action and return error or Nothing if no error was thrown",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "runIOThrows",
          "normalized": "IOThrowsError String-\u003eIO(Maybe String)",
          "package": "husk-scheme",
          "partial": "IOThrows",
          "signature": "IOThrowsError String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:runIOThrows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action and return result or an error message.\n  This is intended for use by a REPL, where a result is always\n  needed regardless of type.\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "runIOThrowsREPL",
          "package": "husk-scheme",
          "signature": "IOThrowsError String -\u003e IO String",
          "source": "src/Language-Scheme-Core.html#runIOThrowsREPL",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action and return result or an error message This is intended for use by REPL where result is always needed regardless of type",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "runIOThrowsREPL",
          "normalized": "IOThrowsError String-\u003eIO String",
          "package": "husk-scheme",
          "partial": "IOThrows REPL",
          "signature": "IOThrowsError String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:runIOThrowsREPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA utility function to display the husk console banner\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "showBanner",
          "package": "husk-scheme",
          "signature": "IO ()",
          "source": "src/Language-Scheme-Core.html#showBanner",
          "type": "function"
        },
        "index": {
          "description": "utility function to display the husk console banner",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "showBanner",
          "normalized": "IO()",
          "package": "husk-scheme",
          "partial": "Banner",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:showBanner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the recommended function to use to display a lisp error, instead\n  of just using show directly.\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "showLispError",
          "package": "husk-scheme",
          "signature": "LispError -\u003e IO String",
          "source": "src/Language-Scheme-Core.html#showLispError",
          "type": "function"
        },
        "index": {
          "description": "This is the recommended function to use to display lisp error instead of just using show directly",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "showLispError",
          "normalized": "LispError-\u003eIO String",
          "package": "husk-scheme",
          "partial": "Lisp Error",
          "signature": "LispError-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:showLispError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function for the special form \u003cem\u003e(string-set!)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "substr",
          "package": "husk-scheme",
          "signature": "(LispVal, LispVal, LispVal) -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Core.html#substr",
          "type": "function"
        },
        "index": {
          "description": "helper function for the special form string-set",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "substr",
          "normalized": "(LispVal,LispVal,LispVal)-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "(LispVal,LispVal,LispVal)-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:substr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function for the special form \u003cem\u003e(bytevector-u8-set!)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "updateByteVector",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e LispVal -\u003e LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Core.html#updateByteVector",
          "type": "function"
        },
        "index": {
          "description": "helper function for the special form bytevector-u8-set",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "updateByteVector",
          "normalized": "LispVal-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Byte Vector",
          "signature": "LispVal-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:updateByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function for \u003cem\u003e(list-set!)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "updateList",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e LispVal -\u003e LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Core.html#updateList",
          "type": "function"
        },
        "index": {
          "description": "helper function for list-set",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "updateList",
          "normalized": "LispVal-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "List",
          "signature": "LispVal-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:updateList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function for the special form \u003cem\u003e(vector-set!)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "updateVector",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e LispVal -\u003e LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Core.html#updateVector",
          "type": "function"
        },
        "index": {
          "description": "helper function for the special form vector-set",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "updateVector",
          "normalized": "LispVal-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector",
          "signature": "LispVal-\u003eLispVal-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:updateVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehusk version number\n\u003c/p\u003e",
          "module": "Language.Scheme.Core",
          "name": "version",
          "package": "husk-scheme",
          "signature": "String",
          "source": "src/Language-Scheme-Core.html#version",
          "type": "function"
        },
        "index": {
          "description": "husk version number",
          "hierarchy": "Language Scheme Core",
          "module": "Language.Scheme.Core",
          "name": "version",
          "package": "husk-scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Core.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Environments",
          "name": "Environments",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Environments.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Scheme Environments",
          "module": "Language.Scheme.Environments",
          "name": "Environments",
          "package": "husk-scheme",
          "partial": "Environments",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Environments.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive functions that execute within the IO monad\n\u003c/p\u003e",
          "module": "Language.Scheme.Environments",
          "name": "ioPrimitives",
          "package": "husk-scheme",
          "signature": "[(String, [LispVal] -\u003e IOThrowsError LispVal)]",
          "source": "src/Language-Scheme-Environments.html#ioPrimitives",
          "type": "function"
        },
        "index": {
          "description": "Primitive functions that execute within the IO monad",
          "hierarchy": "Language Scheme Environments",
          "module": "Language.Scheme.Environments",
          "name": "ioPrimitives",
          "normalized": "[(String,[LispVal]-\u003eIOThrowsError LispVal)]",
          "package": "husk-scheme",
          "partial": "Primitives",
          "signature": "[(String,[LispVal]-\u003eIOThrowsError LispVal)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Environments.html#v:ioPrimitives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure primitive functions\n\u003c/p\u003e",
          "module": "Language.Scheme.Environments",
          "name": "primitives",
          "package": "husk-scheme",
          "signature": "[(String, [LispVal] -\u003e ThrowsError LispVal)]",
          "source": "src/Language-Scheme-Environments.html#primitives",
          "type": "function"
        },
        "index": {
          "description": "Pure primitive functions",
          "hierarchy": "Language Scheme Environments",
          "module": "Language.Scheme.Environments",
          "name": "primitives",
          "normalized": "[(String,[LispVal]-\u003eThrowsError LispVal)]",
          "package": "husk-scheme",
          "signature": "[(String,[LispVal]-\u003eThrowsError LispVal)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Environments.html#v:primitives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains code to handle R7RS libraries.\nNOTE: Libraries are usually referred to as \u003ca\u003emodules\u003c/a\u003e in the husk source code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Libraries",
          "name": "Libraries",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Libraries.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains code to handle R7RS libraries NOTE Libraries are usually referred to as modules in the husk source code",
          "hierarchy": "Language Scheme Libraries",
          "module": "Language.Scheme.Libraries",
          "name": "Libraries",
          "package": "husk-scheme",
          "partial": "Libraries",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Libraries.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the full path to a module file\n\u003c/p\u003e",
          "module": "Language.Scheme.Libraries",
          "name": "findModuleFile",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Libraries.html#findModuleFile",
          "type": "function"
        },
        "index": {
          "description": "Get the full path to module file",
          "hierarchy": "Language Scheme Libraries",
          "module": "Language.Scheme.Libraries",
          "name": "findModuleFile",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Module File",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Libraries.html#v:findModuleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport definitions from one environment into another\n\u003c/p\u003e",
          "module": "Language.Scheme.Libraries",
          "name": "moduleImport",
          "package": "husk-scheme",
          "signature": "Env-\u003e Env-\u003e [LispVal]-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Import definitions from one environment into another",
          "hierarchy": "Language Scheme Libraries",
          "module": "Language.Scheme.Libraries",
          "name": "moduleImport",
          "normalized": "Env-\u003eEnv-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Import",
          "signature": "Env-\u003eEnv-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Libraries.html#v:moduleImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains code for explicit renaming (ER) macros, and is\nused by the Macro module to provide support for ER macros, both when \ncalled directly or when ER macros are found during macro expansion. \nThis ensures both the er-macro-transformer and syntax-rules systems \nare compatible with each other.\n\u003c/p\u003e\u003cp\u003eExplicit renaming macros are based on the low-level facility from\nWill Clinger's paper \u003ca\u003eHygienic Macros Through Explicit Renaming\u003c/a\u003e,\nwhich was developed to complement the high level specification\nlanguage (syntax-rules) from \u003ca\u003eMacros that Work\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Macro.ExplicitRenaming",
          "name": "ExplicitRenaming",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Macro-ExplicitRenaming.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains code for explicit renaming ER macros and is used by the Macro module to provide support for ER macros both when called directly or when ER macros are found during macro expansion This ensures both the er-macro-transformer and syntax-rules systems are compatible with each other Explicit renaming macros are based on the low-level facility from Will Clinger paper Hygienic Macros Through Explicit Renaming which was developed to complement the high level specification language syntax-rules from Macros that Work",
          "hierarchy": "Language Scheme Macro ExplicitRenaming",
          "module": "Language.Scheme.Macro.ExplicitRenaming",
          "name": "ExplicitRenaming",
          "package": "husk-scheme",
          "partial": "Explicit Renaming",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro-ExplicitRenaming.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle an explicit renaming macro\n\u003c/p\u003e",
          "module": "Language.Scheme.Macro.ExplicitRenaming",
          "name": "explicitRenamingTransform",
          "package": "husk-scheme",
          "signature": "Env-\u003e Env-\u003e Env-\u003e LispVal-\u003e LispVal-\u003e (LispVal -\u003e LispVal -\u003e [LispVal] -\u003e IOThrowsError LispVal)-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Handle an explicit renaming macro",
          "hierarchy": "Language Scheme Macro ExplicitRenaming",
          "module": "Language.Scheme.Macro.ExplicitRenaming",
          "name": "explicitRenamingTransform",
          "normalized": "Env-\u003eEnv-\u003eEnv-\u003eLispVal-\u003eLispVal-\u003e(LispVal-\u003eLispVal-\u003e[LispVal]-\u003eIOThrowsError LispVal)-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Renaming Transform",
          "signature": "Env-\u003eEnv-\u003eEnv-\u003eLispVal-\u003eLispVal-\u003e(LispVal-\u003eLispVal-\u003e[LispVal]-\u003eIOThrowsError LispVal)-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro-ExplicitRenaming.html#v:explicitRenamingTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains utility functions used to support macro processing,\nby storing and/or manipulating data involving 0-or-many matches.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Macro.Matches",
          "name": "Matches",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Macro-Matches.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains utility functions used to support macro processing by storing and or manipulating data involving or-many matches",
          "hierarchy": "Language Scheme Macro Matches",
          "module": "Language.Scheme.Macro.Matches",
          "name": "Matches",
          "package": "husk-scheme",
          "partial": "Matches",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro-Matches.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an element at given location in the nested list\n\u003c/p\u003e",
          "module": "Language.Scheme.Macro.Matches",
          "name": "getData",
          "package": "husk-scheme",
          "signature": "LispVal-\u003e [Int]-\u003e LispVal",
          "type": "function"
        },
        "index": {
          "description": "Get an element at given location in the nested list",
          "hierarchy": "Language Scheme Macro Matches",
          "module": "Language.Scheme.Macro.Matches",
          "name": "getData",
          "normalized": "LispVal-\u003e[Int]-\u003eLispVal",
          "package": "husk-scheme",
          "partial": "Data",
          "signature": "LispVal-\u003e[Int]-\u003eLispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro-Matches.html#v:getData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an element to the given nested list\n\u003c/p\u003e",
          "module": "Language.Scheme.Macro.Matches",
          "name": "setData",
          "package": "husk-scheme",
          "signature": "LispVal-\u003e [Int]-\u003e LispVal-\u003e LispVal",
          "type": "function"
        },
        "index": {
          "description": "Add an element to the given nested list",
          "hierarchy": "Language Scheme Macro Matches",
          "module": "Language.Scheme.Macro.Matches",
          "name": "setData",
          "normalized": "LispVal-\u003e[Int]-\u003eLispVal-\u003eLispVal",
          "package": "husk-scheme",
          "partial": "Data",
          "signature": "LispVal-\u003e[Int]-\u003eLispVal-\u003eLispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro-Matches.html#v:setData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains code for hygienic macros.\n\u003c/p\u003e\u003cp\u003eHygienic macros are implemented using the algorithm from the paper\nMacros That Work by William Clinger and Jonathan Rees. During \ntransformation, the following components are considered:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Pattern (part of a rule that matches input)\n\u003c/li\u003e\u003cli\u003e Transform (what the macro expands into)\n\u003c/li\u003e\u003cli\u003e Literal Identifiers (from the macro definition)\n\u003c/li\u003e\u003cli\u003e Input (the actual code in the user's program)\n\u003c/li\u003e\u003cli\u003e Environments of macro definition and macro use\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAt a high level, macro transformation is broken down into the following steps:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Walk the input code looking for a macro definition or macro call.\n\u003c/li\u003e\u003cli\u003e If a macro call is found, search for a rule that matches the input.\n     During this process any pattern variables in the input are loaded \n     into a temporary environment\n\u003c/li\u003e\u003cli\u003e If a rule matches, transcribe the rule's template by walking the \n     template, inserting pattern variables and renaming free identifiers \n     as needed.\n\u003c/li\u003e\u003cli\u003e Walk the expanded code, checking for each of the cases from Macros That Work. If a \n     case is found (such as a macro call or procedure abstraction) then the appropriate \n     handler will be called to deal with it.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Macro",
          "name": "Macro",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Macro.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains code for hygienic macros Hygienic macros are implemented using the algorithm from the paper Macros That Work by William Clinger and Jonathan Rees During transformation the following components are considered Pattern part of rule that matches input Transform what the macro expands into Literal Identifiers from the macro definition Input the actual code in the user program Environments of macro definition and macro use At high level macro transformation is broken down into the following steps Walk the input code looking for macro definition or macro call If macro call is found search for rule that matches the input During this process any pattern variables in the input are loaded into temporary environment If rule matches transcribe the rule template by walking the template inserting pattern variables and renaming free identifiers as needed Walk the expanded code checking for each of the cases from Macros That Work If case is found such as macro call or procedure abstraction then the appropriate handler will be called to deal with it",
          "hierarchy": "Language Scheme Macro",
          "module": "Language.Scheme.Macro",
          "name": "Macro",
          "package": "husk-scheme",
          "partial": "Macro",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function walks the given block of code using the macro expansion algorithm,\n  recursively expanding macro calls as they are encountered.\n\u003c/p\u003e",
          "module": "Language.Scheme.Macro",
          "name": "expand",
          "package": "husk-scheme",
          "signature": "Env-\u003e Bool-\u003e LispVal-\u003e (LispVal -\u003e LispVal -\u003e [LispVal] -\u003e IOThrowsError LispVal)-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "This function walks the given block of code using the macro expansion algorithm recursively expanding macro calls as they are encountered",
          "hierarchy": "Language Scheme Macro",
          "module": "Language.Scheme.Macro",
          "name": "expand",
          "normalized": "Env-\u003eBool-\u003eLispVal-\u003e(LispVal-\u003eLispVal-\u003e[LispVal]-\u003eIOThrowsError LispVal)-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "Env-\u003eBool-\u003eLispVal-\u003e(LispVal-\u003eLispVal-\u003e[LispVal]-\u003eIOThrowsError LispVal)-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of variables that the macro hygiene \n  subsystem diverted back into the calling environment.\n\u003c/p\u003e\u003cp\u003eThis is a specialized function that is only\n  mean to be used by the husk compiler.\n\u003c/p\u003e",
          "module": "Language.Scheme.Macro",
          "name": "getDivertedVars",
          "package": "husk-scheme",
          "signature": "Env -\u003e IOThrowsError [LispVal]",
          "source": "src/Language-Scheme-Macro.html#getDivertedVars",
          "type": "function"
        },
        "index": {
          "description": "Get list of variables that the macro hygiene subsystem diverted back into the calling environment This is specialized function that is only mean to be used by the husk compiler",
          "hierarchy": "Language Scheme Macro",
          "module": "Language.Scheme.Macro",
          "name": "getDivertedVars",
          "normalized": "Env-\u003eIOThrowsError[LispVal]",
          "package": "husk-scheme",
          "partial": "Diverted Vars",
          "signature": "Env-\u003eIOThrowsError[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro.html#v:getDivertedVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to load macros from a let*-syntax expression\n\u003c/p\u003e",
          "module": "Language.Scheme.Macro",
          "name": "loadMacros",
          "package": "husk-scheme",
          "signature": "Env-\u003e Env-\u003e Maybe Env-\u003e Bool-\u003e [LispVal]-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Helper function to load macros from let syntax expression",
          "hierarchy": "Language Scheme Macro",
          "module": "Language.Scheme.Macro",
          "name": "loadMacros",
          "normalized": "Env-\u003eEnv-\u003eMaybe Env-\u003eBool-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Macros",
          "signature": "Env-\u003eEnv-\u003eMaybe Env-\u003eBool-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro.html#v:loadMacros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamines the input AST to see if it is a macro call. \n  If a macro call is found, the code is expanded.\n  Otherwise the input is returned unchanged.\n\u003c/p\u003e",
          "module": "Language.Scheme.Macro",
          "name": "macroEval",
          "package": "husk-scheme",
          "signature": "Env-\u003e LispVal-\u003e (LispVal -\u003e LispVal -\u003e [LispVal] -\u003e IOThrowsError LispVal)-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Examines the input AST to see if it is macro call If macro call is found the code is expanded Otherwise the input is returned unchanged",
          "hierarchy": "Language Scheme Macro",
          "module": "Language.Scheme.Macro",
          "name": "macroEval",
          "normalized": "Env-\u003eLispVal-\u003e(LispVal-\u003eLispVal-\u003e[LispVal]-\u003eIOThrowsError LispVal)-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Eval",
          "signature": "Env-\u003eLispVal-\u003e(LispVal-\u003eLispVal-\u003e[LispVal]-\u003eIOThrowsError LispVal)-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Macro.html#v:macroEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the numerical tower.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "Numerical",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Numerical.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the numerical tower",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "Numerical",
          "package": "husk-scheme",
          "partial": "Numerical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a complex number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "buildComplex",
          "package": "husk-scheme",
          "signature": "LispVal-\u003e LispVal-\u003e ThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Create complex number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "buildComplex",
          "normalized": "LispVal-\u003eLispVal-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Complex",
          "signature": "LispVal-\u003eLispVal-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:buildComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to determine if given number is complex.\n  Keep in mind this does not just look at the types \n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isComplex",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isComplex",
          "type": "function"
        },
        "index": {
          "description": "Predicate to determine if given number is complex Keep in mind this does not just look at the types",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isComplex",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Complex",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA utility function to determine if given value is a floating point\n  number representing an whole number (integer).\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isFloatAnInteger",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e Bool",
          "source": "src/Language-Scheme-Numerical.html#isFloatAnInteger",
          "type": "function"
        },
        "index": {
          "description": "utility function to determine if given value is floating point number representing an whole number integer",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isFloatAnInteger",
          "normalized": "LispVal-\u003eBool",
          "package": "husk-scheme",
          "partial": "Float An Integer",
          "signature": "LispVal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isFloatAnInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to determine if given number is an integer.\n  Keep in mind this does not just look at the types; \n  a floating point input value can return true, for example.\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isInteger",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isInteger",
          "type": "function"
        },
        "index": {
          "description": "Predicate to determine if given number is an integer Keep in mind this does not just look at the types floating point input value can return true for example",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isInteger",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Integer",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if number is exact\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isNumExact",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isNumExact",
          "type": "function"
        },
        "index": {
          "description": "Determine if number is exact",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isNumExact",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Num Exact",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isNumExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if number is not infinite\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isNumFinite",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isNumFinite",
          "type": "function"
        },
        "index": {
          "description": "Determine if number is not infinite",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isNumFinite",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Num Finite",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isNumFinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if number is inexact\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isNumInexact",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isNumInexact",
          "type": "function"
        },
        "index": {
          "description": "Determine if number is inexact",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isNumInexact",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Num Inexact",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isNumInexact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if number is infinite\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isNumInfinite",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isNumInfinite",
          "type": "function"
        },
        "index": {
          "description": "Determine if number is infinite",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isNumInfinite",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Num Infinite",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isNumInfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given value is not a number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isNumNaN",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isNumNaN",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given value is not number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isNumNaN",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Num Na",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isNumNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to determine if given value is a number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isNumber",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isNumber",
          "type": "function"
        },
        "index": {
          "description": "Predicate to determine if given value is number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isNumber",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Number",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to determine if given number is a rational.\n  Keep in mind this does not just look at the types \n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isRational",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isRational",
          "type": "function"
        },
        "index": {
          "description": "Predicate to determine if given number is rational Keep in mind this does not just look at the types",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isRational",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Rational",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to determine if given number is a real.\n  Keep in mind this does not just look at the types \n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "isReal",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#isReal",
          "type": "function"
        },
        "index": {
          "description": "Predicate to determine if given number is real Keep in mind this does not just look at the types",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "isReal",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Real",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:isReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a number to a string; radix is optional, defaults to base 10\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "num2String",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#num2String",
          "type": "function"
        },
        "index": {
          "description": "Convert number to string radix is optional defaults to base",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "num2String",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "String",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:num2String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArccosine\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numAcos",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numAcos",
          "type": "function"
        },
        "index": {
          "description": "Arccosine",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numAcos",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Acos",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numAcos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the given numbers\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numAdd",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numAdd",
          "type": "function"
        },
        "index": {
          "description": "Add the given numbers",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numAdd",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Add",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phase of a complex number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numAngle",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numAngle",
          "type": "function"
        },
        "index": {
          "description": "The phase of complex number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numAngle",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Angle",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArcsine\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numAsin",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numAsin",
          "type": "function"
        },
        "index": {
          "description": "Arcsine",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numAsin",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Asin",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numAsin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArctangent\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numAtan",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numAtan",
          "type": "function"
        },
        "index": {
          "description": "Arctangent",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numAtan",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Atan",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numAtan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric equals\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopEq",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numBoolBinopEq",
          "type": "function"
        },
        "index": {
          "description": "Numeric equals",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopEq",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Bool Binop Eq",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numBoolBinopEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric greater than\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopGt",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numBoolBinopGt",
          "type": "function"
        },
        "index": {
          "description": "Numeric greater than",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopGt",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Bool Binop Gt",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numBoolBinopGt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric greater than equal\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopGte",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numBoolBinopGte",
          "type": "function"
        },
        "index": {
          "description": "Numeric greater than equal",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopGte",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Bool Binop Gte",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numBoolBinopGte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric less than \n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopLt",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numBoolBinopLt",
          "type": "function"
        },
        "index": {
          "description": "Numeric less than",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopLt",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Bool Binop Lt",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numBoolBinopLt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric less than equal\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopLte",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numBoolBinopLte",
          "type": "function"
        },
        "index": {
          "description": "Numeric less than equal",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numBoolBinopLte",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Bool Binop Lte",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numBoolBinopLte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept two numbers and cast one of them to the appropriate type, if necessary\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numCast",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numCast",
          "type": "function"
        },
        "index": {
          "description": "Accept two numbers and cast one of them to the appropriate type if necessary",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numCast",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Cast",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the ceiling of the given number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numCeiling",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numCeiling",
          "type": "function"
        },
        "index": {
          "description": "Take the ceiling of the given number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numCeiling",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Ceiling",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numCeiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCosine\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numCos",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numCos",
          "type": "function"
        },
        "index": {
          "description": "Cosine",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numCos",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Cos",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numCos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the denominator of the given number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numDenominator",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numDenominator",
          "type": "function"
        },
        "index": {
          "description": "Take the denominator of the given number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numDenominator",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Denominator",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numDenominator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide the given numbers\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numDiv",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numDiv",
          "type": "function"
        },
        "index": {
          "description": "Divide the given numbers",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numDiv",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Div",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an exact number to inexact\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numExact2Inexact",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numExact2Inexact",
          "type": "function"
        },
        "index": {
          "description": "Convert an exact number to inexact",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numExact2Inexact",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Exact Inexact",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numExact2Inexact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the exponent of the given number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numExp",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numExp",
          "type": "function"
        },
        "index": {
          "description": "Take the exponent of the given number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numExp",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Exp",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise the first number to the power of the second\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numExpt",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numExpt",
          "type": "function"
        },
        "index": {
          "description": "Raise the first number to the power of the second",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numExpt",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Expt",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numExpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloor the given number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numFloor",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numFloor",
          "type": "function"
        },
        "index": {
          "description": "Floor the given number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numFloor",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Floor",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numFloor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve imaginary part of a complex number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numImagPart",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numImagPart",
          "type": "function"
        },
        "index": {
          "description": "Retrieve imaginary part of complex number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numImagPart",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Imag Part",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numImagPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an inexact number to exact\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numInexact2Exact",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numInexact2Exact",
          "type": "function"
        },
        "index": {
          "description": "Convert an inexact number to exact",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numInexact2Exact",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Inexact Exact",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numInexact2Exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the log of a given number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numLog",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numLog",
          "type": "function"
        },
        "index": {
          "description": "Compute the log of given number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numLog",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Log",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nonnegative magnitude of a complex number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numMagnitude",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numMagnitude",
          "type": "function"
        },
        "index": {
          "description": "The nonnegative magnitude of complex number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numMagnitude",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Magnitude",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numMagnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a complex number from its magnitude and phase (angle)\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numMakePolar",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numMakePolar",
          "type": "function"
        },
        "index": {
          "description": "Create complex number from its magnitude and phase angle",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numMakePolar",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Make Polar",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numMakePolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a complex number given its real and imaginary parts\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numMakeRectangular",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numMakeRectangular",
          "type": "function"
        },
        "index": {
          "description": "Create complex number given its real and imaginary parts",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numMakeRectangular",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Make Rectangular",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numMakeRectangular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the modulus of the given numbers\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numMod",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numMod",
          "type": "function"
        },
        "index": {
          "description": "Take the modulus of the given numbers",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numMod",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Mod",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply the given numbers\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numMul",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numMul",
          "type": "function"
        },
        "index": {
          "description": "Multiply the given numbers",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numMul",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Mul",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the numerator of the given number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numNumerator",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numNumerator",
          "type": "function"
        },
        "index": {
          "description": "Take the numerator of the given number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numNumerator",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Numerator",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numNumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the given number to a rational\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numRationalize",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numRationalize",
          "type": "function"
        },
        "index": {
          "description": "Convert the given number to rational",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numRationalize",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Rationalize",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numRationalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve real part of a complex number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numRealPart",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numRealPart",
          "type": "function"
        },
        "index": {
          "description": "Retrieve real part of complex number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numRealPart",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Real Part",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numRealPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound the given number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numRound",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numRound",
          "type": "function"
        },
        "index": {
          "description": "Round the given number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numRound",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Round",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSine\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numSin",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numSin",
          "type": "function"
        },
        "index": {
          "description": "Sine",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numSin",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Sin",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numSin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the square root of the given number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numSqrt",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numSqrt",
          "type": "function"
        },
        "index": {
          "description": "Take the square root of the given number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numSqrt",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Sqrt",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numSqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract the given numbers\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numSub",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numSub",
          "type": "function"
        },
        "index": {
          "description": "Subtract the given numbers",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numSub",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Sub",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTangent\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numTan",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numTan",
          "type": "function"
        },
        "index": {
          "description": "Tangent",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numTan",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Tan",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numTan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate the given number\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numTruncate",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numTruncate",
          "type": "function"
        },
        "index": {
          "description": "Truncate the given number",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numTruncate",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Truncate",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numTruncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function to perform a numeric operation on two values\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "numericBinop",
          "package": "husk-scheme",
          "signature": "(Integer -\u003e Integer -\u003e Integer) -\u003e [LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Numerical.html#numericBinop",
          "type": "function"
        },
        "index": {
          "description": "helper function to perform numeric operation on two values",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "numericBinop",
          "normalized": "(Integer-\u003eInteger-\u003eInteger)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Binop",
          "signature": "(Integer-\u003eInteger-\u003eInteger)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:numericBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an integer from the given value, throwing a type error if\n  the wrong type is passed.\n\u003c/p\u003e",
          "module": "Language.Scheme.Numerical",
          "name": "unpackNum",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e ThrowsError Integer",
          "source": "src/Language-Scheme-Numerical.html#unpackNum",
          "type": "function"
        },
        "index": {
          "description": "Extract an integer from the given value throwing type error if the wrong type is passed",
          "hierarchy": "Language Scheme Numerical",
          "module": "Language.Scheme.Numerical",
          "name": "unpackNum",
          "normalized": "LispVal-\u003eThrowsError Integer",
          "package": "husk-scheme",
          "partial": "Num",
          "signature": "LispVal-\u003eThrowsError Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Numerical.html#v:unpackNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements parsing of Scheme code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Parser",
          "name": "Parser",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements parsing of Scheme code",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "Parser",
          "package": "husk-scheme",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage definition for Scheme\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "lispDef",
          "package": "husk-scheme",
          "signature": "LanguageDef ()",
          "source": "src/Language-Scheme-Parser.html#lispDef",
          "type": "function"
        },
        "index": {
          "description": "Language definition for Scheme",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "lispDef",
          "normalized": "LanguageDef()",
          "package": "husk-scheme",
          "partial": "Def",
          "signature": "LanguageDef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:lispDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial parser used by the high-level parse functions\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "mainParser",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#mainParser",
          "type": "function"
        },
        "index": {
          "description": "Initial parser used by the high-level parse functions",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "mainParser",
          "package": "husk-scheme",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:mainParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an atom (scheme symbol)\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseAtom",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseAtom",
          "type": "function"
        },
        "index": {
          "description": "Parse an atom scheme symbol",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseAtom",
          "package": "husk-scheme",
          "partial": "Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an integer in binary notation, base 2\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseBinaryNumber",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseBinaryNumber",
          "type": "function"
        },
        "index": {
          "description": "Parse an integer in binary notation base",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseBinaryNumber",
          "package": "husk-scheme",
          "partial": "Binary Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseBinaryNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a boolean\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseBool",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseBool",
          "type": "function"
        },
        "index": {
          "description": "Parse boolean",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseBool",
          "package": "husk-scheme",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a bytevector\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseByteVector",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseByteVector",
          "type": "function"
        },
        "index": {
          "description": "Parse bytevector",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseByteVector",
          "package": "husk-scheme",
          "partial": "Byte Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a character\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseChar",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseChar",
          "type": "function"
        },
        "index": {
          "description": "Parse character",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseChar",
          "package": "husk-scheme",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a complex number\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseComplexNumber",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseComplexNumber",
          "type": "function"
        },
        "index": {
          "description": "Parse complex number",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseComplexNumber",
          "package": "husk-scheme",
          "partial": "Complex Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseComplexNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for Integer, base 10\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseDecimalNumber",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseDecimalNumber",
          "type": "function"
        },
        "index": {
          "description": "Parser for Integer base",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseDecimalNumber",
          "package": "husk-scheme",
          "partial": "Decimal Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseDecimalNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a dotted list (scheme pair)\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseDottedList",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseDottedList",
          "type": "function"
        },
        "index": {
          "description": "Parse dotted list scheme pair",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseDottedList",
          "package": "husk-scheme",
          "partial": "Dotted List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseDottedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an escaped character\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseEscapedChar",
          "package": "husk-scheme",
          "signature": "forall st.  GenParser Char st Char",
          "source": "src/Language-Scheme-Parser.html#parseEscapedChar",
          "type": "function"
        },
        "index": {
          "description": "Parse an escaped character",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseEscapedChar",
          "package": "husk-scheme",
          "partial": "Escaped Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseEscapedChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an expression\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseExpr",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseExpr",
          "type": "function"
        },
        "index": {
          "description": "Parse an expression",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseExpr",
          "package": "husk-scheme",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a hash table. The table is either empty or is made up of\n  an alist (associative list)\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseHashTable",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseHashTable",
          "type": "function"
        },
        "index": {
          "description": "Parse hash table The table is either empty or is made up of an alist associative list",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseHashTable",
          "package": "husk-scheme",
          "partial": "Hash Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseHashTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an integer in hexadecimal notation, base 16\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseHexNumber",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseHexNumber",
          "type": "function"
        },
        "index": {
          "description": "Parse an integer in hexadecimal notation base",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseHexNumber",
          "package": "husk-scheme",
          "partial": "Hex Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseHexNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a list\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseList",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseList",
          "type": "function"
        },
        "index": {
          "description": "Parse list",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseList",
          "package": "husk-scheme",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an integer in any base\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseNumber",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseNumber",
          "type": "function"
        },
        "index": {
          "description": "Parse an integer in any base",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseNumber",
          "package": "husk-scheme",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an integer in octal notation, base 8\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseOctalNumber",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseOctalNumber",
          "type": "function"
        },
        "index": {
          "description": "Parse an integer in octal notation base",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseOctalNumber",
          "package": "husk-scheme",
          "partial": "Octal Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseOctalNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a quasi-quoted expression\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseQuasiQuoted",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseQuasiQuoted",
          "type": "function"
        },
        "index": {
          "description": "Parse quasi-quoted expression",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseQuasiQuoted",
          "package": "husk-scheme",
          "partial": "Quasi Quoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseQuasiQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a quoted expression\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseQuoted",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseQuoted",
          "type": "function"
        },
        "index": {
          "description": "Parse quoted expression",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseQuoted",
          "package": "husk-scheme",
          "partial": "Quoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a rational number\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseRationalNumber",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseRationalNumber",
          "type": "function"
        },
        "index": {
          "description": "Parse rational number",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseRationalNumber",
          "package": "husk-scheme",
          "partial": "Rational Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseRationalNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a floating point number\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseRealNumber",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseRealNumber",
          "type": "function"
        },
        "index": {
          "description": "Parse floating point number",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseRealNumber",
          "package": "husk-scheme",
          "partial": "Real Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseRealNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseString",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseString",
          "type": "function"
        },
        "index": {
          "description": "Parse string",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseString",
          "package": "husk-scheme",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an unquote-spliced expression\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseUnquoteSpliced",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseUnquoteSpliced",
          "type": "function"
        },
        "index": {
          "description": "Parse an unquote-spliced expression",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseUnquoteSpliced",
          "package": "husk-scheme",
          "partial": "Unquote Spliced",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseUnquoteSpliced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an unquoted expression (a quasiquotated expression preceded\n  by a comma)\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseUnquoted",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseUnquoted",
          "type": "function"
        },
        "index": {
          "description": "Parse an unquoted expression quasiquotated expression preceded by comma",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseUnquoted",
          "package": "husk-scheme",
          "partial": "Unquoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseUnquoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a vector\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "parseVector",
          "package": "husk-scheme",
          "signature": "Parser LispVal",
          "source": "src/Language-Scheme-Parser.html#parseVector",
          "type": "function"
        },
        "index": {
          "description": "Parse vector",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "parseVector",
          "package": "husk-scheme",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:parseVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an expression from a string of text\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "readExpr",
          "package": "husk-scheme",
          "signature": "String -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Parser.html#readExpr",
          "type": "function"
        },
        "index": {
          "description": "Parse an expression from string of text",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "readExpr",
          "normalized": "String-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Expr",
          "signature": "String-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:readExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse many expressions from a string of text\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "readExprList",
          "package": "husk-scheme",
          "signature": "String -\u003e ThrowsError [LispVal]",
          "source": "src/Language-Scheme-Parser.html#readExprList",
          "type": "function"
        },
        "index": {
          "description": "Parse many expressions from string of text",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "readExprList",
          "normalized": "String-\u003eThrowsError[LispVal]",
          "package": "husk-scheme",
          "partial": "Expr List",
          "signature": "String-\u003eThrowsError[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:readExprList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a parser to parse the given text, throwing an error\n  if there is a problem parsing the text.\n\u003c/p\u003e",
          "module": "Language.Scheme.Parser",
          "name": "readOrThrow",
          "package": "husk-scheme",
          "signature": "Parser a -\u003e String -\u003e ThrowsError a",
          "source": "src/Language-Scheme-Parser.html#readOrThrow",
          "type": "function"
        },
        "index": {
          "description": "Use parser to parse the given text throwing an error if there is problem parsing the text",
          "hierarchy": "Language Scheme Parser",
          "module": "Language.Scheme.Parser",
          "name": "readOrThrow",
          "normalized": "Parser a-\u003eString-\u003eThrowsError a",
          "package": "husk-scheme",
          "partial": "Or Throw",
          "signature": "Parser a-\u003eString-\u003eThrowsError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Parser.html#v:readOrThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module wraps System.CPUTime so that it can be used directly by Scheme code.\n\u003c/p\u003e\u003cp\u003eMore importantly, it serves as an example of how to wrap existing Haskell code so\nthat it can be loaded and called by husk.\n\u003c/p\u003e\u003cp\u003eSee 'examples/ffi/ffi-cputime.scm' in the husk source tree for an example of how to\ncall into this module from Scheme code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Plugins.CPUTime",
          "name": "CPUTime",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Plugins-CPUTime.html",
          "type": "module"
        },
        "index": {
          "description": "This module wraps System.CPUTime so that it can be used directly by Scheme code More importantly it serves as an example of how to wrap existing Haskell code so that it can be loaded and called by husk See examples ffi ffi-cputime.scm in the husk source tree for an example of how to call into this module from Scheme code",
          "hierarchy": "Language Scheme Plugins CPUTime",
          "module": "Language.Scheme.Plugins.CPUTime",
          "name": "CPUTime",
          "package": "husk-scheme",
          "partial": "CPUTime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Plugins-CPUTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for CPUTime.getCPUTime\n\u003c/p\u003e",
          "module": "Language.Scheme.Plugins.CPUTime",
          "name": "get",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Plugins-CPUTime.html#get",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for CPUTime.getCPUTime",
          "hierarchy": "Language Scheme Plugins CPUTime",
          "module": "Language.Scheme.Plugins.CPUTime",
          "name": "get",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Plugins-CPUTime.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for CPUTime.cpuTimePrecision\n\u003c/p\u003e",
          "module": "Language.Scheme.Plugins.CPUTime",
          "name": "precision",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Plugins-CPUTime.html#precision",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for CPUTime.cpuTimePrecision",
          "hierarchy": "Language Scheme Plugins CPUTime",
          "module": "Language.Scheme.Plugins.CPUTime",
          "name": "precision",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Plugins-CPUTime.html#v:precision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains primitive functions written in Haskell.\nMost of these map directly to an equivalent Scheme function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "Primitives",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Primitives.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains primitive functions written in Haskell Most of these map directly to an equivalent Scheme function",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "Primitives",
          "package": "husk-scheme",
          "partial": "Primitives",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of gensym that can be conveniently called from Haskell.\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "_gensym",
          "package": "husk-scheme",
          "signature": "String -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#_gensym",
          "type": "function"
        },
        "index": {
          "description": "Version of gensym that can be conveniently called from Haskell",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "_gensym",
          "normalized": "String-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "String-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:_gensym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to perform a binary logic operation on two LispVal arguments.\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "boolBinop",
          "package": "husk-scheme",
          "signature": "(LispVal -\u003e ThrowsError a) -\u003e (a -\u003e a -\u003e Bool) -\u003e [LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#boolBinop",
          "type": "function"
        },
        "index": {
          "description": "Helper function to perform binary logic operation on two LispVal arguments",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "boolBinop",
          "normalized": "(LispVal-\u003eThrowsError a)-\u003e(a-\u003ea-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Binop",
          "signature": "(LispVal-\u003eThrowsError a)-\u003e(a-\u003ea-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:boolBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform boolBinop against two boolean arguments\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "boolBoolBinop",
          "package": "husk-scheme",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e [LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#boolBoolBinop",
          "type": "function"
        },
        "index": {
          "description": "Perform boolBinop against two boolean arguments",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "boolBoolBinop",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Bool Binop",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:boolBoolBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of characters to a string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Character (one or more) - Character(s) to add to the string\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String - new string built from given chars\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "buildString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#buildString",
          "type": "function"
        },
        "index": {
          "description": "Convert list of characters to string Arguments Character one or more Character to add to the string Returns String new string built from given chars",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "buildString",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "String",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:buildString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a vector from the given lisp values\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LispVal (s)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Vector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "buildVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#buildVector",
          "type": "function"
        },
        "index": {
          "description": "Create vector from the given lisp values Arguments LispVal Returns Vector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "buildVector",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:buildVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate new bytevector containing the given data\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Objects - Objects to convert to bytes for the bytevector\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: ByteVector - A new bytevector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "byteVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#byteVector",
          "type": "function"
        },
        "index": {
          "description": "Create new bytevector containing the given data Arguments Objects Objects to convert to bytes for the bytevector Returns ByteVector new bytevector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "byteVector",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:byteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend many bytevectors into a new bytevector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ByteVector (one or more) - Bytevectors to concatenate\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: ByteVector - A new bytevector containing the values\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorAppend",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#byteVectorAppend",
          "type": "function"
        },
        "index": {
          "description": "Append many bytevectors into new bytevector Arguments ByteVector one or more Bytevectors to concatenate Returns ByteVector new bytevector containing the values",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorAppend",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector Append",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:byteVectorAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a copy of the given bytevector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ByteVector - Bytevector to copy\n\u003c/li\u003e\u003cli\u003e Number (optional) - Start of the region to copy\n\u003c/li\u003e\u003cli\u003e Number (optional) - End of the region to copy\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: ByteVector - A new bytevector containing the copied region\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorCopy",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#byteVectorCopy",
          "type": "function"
        },
        "index": {
          "description": "Create copy of the given bytevector Arguments ByteVector Bytevector to copy Number optional Start of the region to copy Number optional End of the region to copy Returns ByteVector new bytevector containing the copied region",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorCopy",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector Copy",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:byteVectorCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the length of a bytevector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ByteVector\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Number - Length of the given bytevector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorLength",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#byteVectorLength",
          "type": "function"
        },
        "index": {
          "description": "Find the length of bytevector Arguments ByteVector Returns Number Length of the given bytevector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorLength",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector Length",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:byteVectorLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn object at the given index of a bytevector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ByteVector\n\u003c/li\u003e\u003cli\u003e Number - Index of the bytevector to query\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Object at the index\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorRef",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#byteVectorRef",
          "type": "function"
        },
        "index": {
          "description": "Return object at the given index of bytevector Arguments ByteVector Number Index of the bytevector to query Returns Object at the index",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorRef",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector Ref",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:byteVectorRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a string to a bytevector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: ByteVector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorStr2Utf",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#byteVectorStr2Utf",
          "type": "function"
        },
        "index": {
          "description": "Convert string to bytevector Arguments String Returns ByteVector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorStr2Utf",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector Str Utf",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:byteVectorStr2Utf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a bytevector to a string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ByteVector\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorUtf2Str",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#byteVectorUtf2Str",
          "type": "function"
        },
        "index": {
          "description": "Convert bytevector to string Arguments ByteVector Returns String",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "byteVectorUtf2Str",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector Utf Str",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:byteVectorUtf2Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the first item from a list\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e List (or DottedList)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: LispVal - First item in the list\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "car",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#car",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the first item from list Arguments List or DottedList Returns LispVal First item in the list",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "car",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:car"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ca\u003etail\u003c/a\u003e of a list, with the first element removed\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e List (or DottedList)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List (or DottedList)\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "cdr",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#cdr",
          "type": "function"
        },
        "index": {
          "description": "Return the tail of list with the first element removed Arguments List or DottedList Returns List or DottedList",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "cdr",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:cdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a charater to an integer\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Char\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Number\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "char2Int",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#char2Int",
          "type": "function"
        },
        "index": {
          "description": "Convert from charater to an integer Arguments Char Returns Number",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "char2Int",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Int",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:char2Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform boolBinop against two char arguments\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "charBoolBinop",
          "package": "husk-scheme",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e [LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#charBoolBinop",
          "type": "function"
        },
        "index": {
          "description": "Perform boolBinop against two char arguments",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "charBoolBinop",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Bool Binop",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:charBoolBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "charCIBoolBinop",
          "package": "husk-scheme",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e [LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#charCIBoolBinop",
          "type": "function"
        },
        "index": {
          "description": "Helper function",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "charCIBoolBinop",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "CIBool Binop",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:charCIBoolBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn integer value of a char digit\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Char\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Number, or False\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "charDigitValue",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#charDigitValue",
          "type": "function"
        },
        "index": {
          "description": "Return integer value of char digit Arguments Char Returns Number or False",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "charDigitValue",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Digit Value",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:charDigitValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a character to lowercase\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Char\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Char - Character in lowercase\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "charLower",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#charLower",
          "type": "function"
        },
        "index": {
          "description": "Convert character to lowercase Arguments Char Returns Char Character in lowercase",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "charLower",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Lower",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:charLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if given character satisfies the given predicate\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "charPredicate",
          "package": "husk-scheme",
          "signature": "(Char -\u003e Bool) -\u003e [LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#charPredicate",
          "type": "function"
        },
        "index": {
          "description": "Determine if given character satisfies the given predicate",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "charPredicate",
          "normalized": "(Char-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Predicate",
          "signature": "(Char-\u003eBool)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:charPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a character to uppercase\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Char\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Char - Character in uppercase\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "charUpper",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#charUpper",
          "type": "function"
        },
        "index": {
          "description": "Convert character to uppercase Arguments Char Returns Char Character in uppercase",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "charUpper",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Upper",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:charUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the given port\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if the port was closed, false otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "closePort",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#closePort",
          "type": "function"
        },
        "index": {
          "description": "Close the given port Arguments Port Returns Bool True if the port was closed false otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "closePort",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Port",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:closePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe LISP \u003ca\u003econs\u003c/a\u003e operation - create a list from two values\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LispVal\n\u003c/li\u003e\u003cli\u003e LispVal\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List (or DottedList) containing new value(s)\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "cons",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#cons",
          "type": "function"
        },
        "index": {
          "description": "The LISP cons operation create list from two values Arguments LispVal LispVal Returns List or DottedList containing new value",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "cons",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current input port\n\u003c/p\u003e\u003cp\u003eLispVal Arguments: (None)\n\u003c/p\u003e\u003cp\u003eReturns: Port\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "currentInputPort",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#currentInputPort",
          "type": "function"
        },
        "index": {
          "description": "Return the current input port LispVal Arguments None Returns Port",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "currentInputPort",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Input Port",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:currentInputPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current input port\n\u003c/p\u003e\u003cp\u003eLispVal Arguments: (None)\n\u003c/p\u003e\u003cp\u003eReturns: Port\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "currentOutputPort",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#currentOutputPort",
          "type": "function"
        },
        "index": {
          "description": "Return the current input port LispVal Arguments None Returns Port",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "currentOutputPort",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Output Port",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:currentOutputPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current time, in seconds\n\u003c/p\u003e\u003cp\u003eArguments: (None)\n\u003c/p\u003e\u003cp\u003eReturns: Current UNIX timestamp in seconds\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "currentTimestamp",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#currentTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Return the current time in seconds Arguments None Returns Current UNIX timestamp in seconds",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "currentTimestamp",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Timestamp",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:currentTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the given file\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - Filename to delete\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if file was deleted, false if an error occurred\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "deleteFile",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#deleteFile",
          "type": "function"
        },
        "index": {
          "description": "Delete the given file Arguments String Filename to delete Returns Bool True if file was deleted false if an error occurred",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "deleteFile",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "File",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:deleteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "doMakeString",
          "package": "husk-scheme",
          "signature": "a -\u003e Char -\u003e String -\u003e LispVal",
          "source": "src/Language-Scheme-Primitives.html#doMakeString",
          "type": "function"
        },
        "index": {
          "description": "Helper function",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "doMakeString",
          "normalized": "a-\u003eChar-\u003eString-\u003eLispVal",
          "package": "husk-scheme",
          "partial": "Make String",
          "signature": "a-\u003eChar-\u003eString-\u003eLispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:doMakeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the EOF object\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "eofObject",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#eofObject",
          "type": "function"
        },
        "index": {
          "description": "Return the EOF object",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "eofObject",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Object",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:eofObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse pointer equality to compare two objects if possible, otherwise\n   fall back to the normal equality comparison\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "eq",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#eq",
          "type": "function"
        },
        "index": {
          "description": "Use pointer equality to compare two objects if possible otherwise fall back to the normal equality comparison",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "eq",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively compare two LispVals for equality\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LispVal\n\u003c/li\u003e\u003cli\u003e LispVal\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if equal, false otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "equal",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#equal",
          "type": "function"
        },
        "index": {
          "description": "Recursively compare two LispVals for equality Arguments LispVal LispVal Returns Bool True if equal false otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "equal",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given file exists\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - Filename to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if file exists, false otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "fileExists",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#fileExists",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given file exists Arguments String Filename to check Returns Bool True if file exists false otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "fileExists",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Exists",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:fileExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlush the given output port\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "flushOutputPort",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#flushOutputPort",
          "type": "function"
        },
        "index": {
          "description": "Flush the given output port",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "flushOutputPort",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Output Port",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:flushOutputPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a (reasonably) unique symbol, given an optional prefix.\n  This function is provided even though it is not part of R5RS.\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - Prefix of the unique symbol\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Atom\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "gensym",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#gensym",
          "type": "function"
        },
        "index": {
          "description": "Generate reasonably unique symbol given an optional prefix This function is provided even though it is not part of R5RS Arguments String Prefix of the unique symbol Returns Atom",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "gensym",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:gensym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet bytevector written to bytevector-output-port\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "getOutputByteVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#getOutputByteVector",
          "type": "function"
        },
        "index": {
          "description": "Get bytevector written to bytevector-output-port",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "getOutputByteVector",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Output Byte Vector",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:getOutputByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet string written to string-output-port\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "getOutputString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#getOutputString",
          "type": "function"
        },
        "index": {
          "description": "Get string written to string-output-port",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "getOutputString",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Output String",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:getOutputString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list containing all key/value pairs in the hashtable\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e HashTable\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List of (key, value) pairs\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "hashTbl2List",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#hashTbl2List",
          "type": "function"
        },
        "index": {
          "description": "Create list containing all key value pairs in the hashtable Arguments HashTable Returns List of key value pairs",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "hashTbl2List",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Tbl List",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:hashTbl2List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new copy of a hashtable\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e HashTable to copy\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: HashTable\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblCopy",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#hashTblCopy",
          "type": "function"
        },
        "index": {
          "description": "Create new copy of hashtable Arguments HashTable to copy Returns HashTable",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblCopy",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Tbl Copy",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:hashTblCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given key is found in the hashtable\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e HashTable to search\n\u003c/li\u003e\u003cli\u003e Key to search for\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if found, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblExists",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#hashTblExists",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given key is found in the hashtable Arguments HashTable to search Key to search for Returns Bool True if found False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblExists",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Tbl Exists",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:hashTblExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list containing all keys in the hashtable\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e HashTable\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List containing the keys\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblKeys",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#hashTblKeys",
          "type": "function"
        },
        "index": {
          "description": "Create list containing all keys in the hashtable Arguments HashTable Returns List containing the keys",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblKeys",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Tbl Keys",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:hashTblKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new hashtable\n\u003c/p\u003e\u003cp\u003eArguments: (None)\n\u003c/p\u003e\u003cp\u003eReturns: HashTable\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblMake",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#hashTblMake",
          "type": "function"
        },
        "index": {
          "description": "Create new hashtable Arguments None Returns HashTable",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblMake",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Tbl Make",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:hashTblMake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value from the hashtable for the given key.\n   An error is thrown if the key is not found.\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e HashTable to copy\n\u003c/li\u003e\u003cli\u003e Object that is the key to query the table for\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Object containing the key's value\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblRef",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#hashTblRef",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value from the hashtable for the given key An error is thrown if the key is not found Arguments HashTable to copy Object that is the key to query the table for Returns Object containing the key value",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblRef",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Tbl Ref",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:hashTblRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of key/value associations in the hashtable\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e HashTable\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Number - number of associations\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblSize",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#hashTblSize",
          "type": "function"
        },
        "index": {
          "description": "Return the number of key value associations in the hashtable Arguments HashTable Returns Number number of associations",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblSize",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Tbl Size",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:hashTblSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list containing all values in the hashtable\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e HashTable\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List containing the values\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblValues",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#hashTblValues",
          "type": "function"
        },
        "index": {
          "description": "Create list containing all values in the hashtable Arguments HashTable Returns List containing the values",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "hashTblValues",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Tbl Values",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:hashTblValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from an integer to a character\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Number\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Char\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "int2Char",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#int2Char",
          "type": "function"
        },
        "index": {
          "description": "Convert from an integer to character Arguments Number Returns Char",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "int2Char",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Char",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:int2Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given port is a binary port.\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isBinaryPort",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isBinaryPort",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given port is binary port Arguments Port Returns Bool",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isBinaryPort",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Binary Port",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isBinaryPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given value is a boolean\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LispVal to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if the argument is a boolean, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isBoolean",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isBoolean",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given value is boolean Arguments LispVal to check Returns Bool True if the argument is boolean False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isBoolean",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Boolean",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if multiple boolean values are the same\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A list of Bool values\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: True if the list contains booleans that are the same, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isBooleanEq",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e m LispVal",
          "source": "src/Language-Scheme-Primitives.html#isBooleanEq",
          "type": "function"
        },
        "index": {
          "description": "Determine if multiple boolean values are the same Arguments list of Bool values Returns True if the list contains booleans that are the same False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isBooleanEq",
          "normalized": "[LispVal]-\u003ea LispVal",
          "package": "husk-scheme",
          "partial": "Boolean Eq",
          "signature": "[LispVal]-\u003em LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isBooleanEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if given object is a bytevector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if bytevector, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isByteVector",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isByteVector",
          "type": "function"
        },
        "index": {
          "description": "Determine if given object is bytevector Arguments Value to check Returns Bool True if bytevector False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isByteVector",
          "normalized": "LispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Byte Vector",
          "signature": "LispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given value is a character\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LispVal to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if the argument is a character, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isChar",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isChar",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given value is character Arguments LispVal to check Returns Bool True if the argument is character False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isChar",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Char",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a character is ready on the port\n\u003c/p\u003e\u003cp\u003eLispVal Arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isCharReady",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isCharReady",
          "type": "function"
        },
        "index": {
          "description": "Determine if character is ready on the port LispVal Arguments Port Returns Bool",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isCharReady",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Char Ready",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isCharReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if given object is an improper list\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if improper list, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isDottedList",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isDottedList",
          "type": "function"
        },
        "index": {
          "description": "Determine if given object is an improper list Arguments Value to check Returns Bool True if improper list False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isDottedList",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Dotted List",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isDottedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if given object is the EOF marker\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if EOF, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isEOFObject",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isEOFObject",
          "type": "function"
        },
        "index": {
          "description": "Determine if given object is the EOF marker Arguments Value to check Returns Bool True if EOF False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isEOFObject",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "EOFObject",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isEOFObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a given object is a hashtable\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Object to inspect\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if arg was a hashtable, false otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isHashTbl",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isHashTbl",
          "type": "function"
        },
        "index": {
          "description": "Determine if given object is hashtable Arguments Object to inspect Returns Bool True if arg was hashtable false otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isHashTbl",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Hash Tbl",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isHashTbl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given objects is an input port\n\u003c/p\u003e\u003cp\u003eLispVal Arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if an input port, false otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isInputPort",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isInputPort",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given objects is an input port LispVal Arguments Port Returns Bool True if an input port false otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isInputPort",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Input Port",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isInputPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given port is open\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isInputPortOpen",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isInputPortOpen",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given port is open Arguments Port Returns Bool",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isInputPortOpen",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Input Port Open",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isInputPortOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if given object is a list\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if list, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isList",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isList",
          "type": "function"
        },
        "index": {
          "description": "Determine if given object is list Arguments Value to check Returns Bool True if list False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isList",
          "normalized": "LispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "List",
          "signature": "LispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if given object is the null list\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if null list, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isNull",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isNull",
          "type": "function"
        },
        "index": {
          "description": "Determine if given object is the null list Arguments Value to check Returns Bool True if null list False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isNull",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Null",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given objects is an output port\n\u003c/p\u003e\u003cp\u003eLispVal Arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if an output port, false otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isOutputPort",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isOutputPort",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given objects is an output port LispVal Arguments Port Returns Bool True if an output port false otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isOutputPort",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Output Port",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isOutputPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given port is open\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isOutputPortOpen",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isOutputPortOpen",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given port is open Arguments Port Returns Bool",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isOutputPortOpen",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Output Port Open",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isOutputPortOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if given object is a procedure\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if procedure, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isProcedure",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isProcedure",
          "type": "function"
        },
        "index": {
          "description": "Determine if given object is procedure Arguments Value to check Returns Bool True if procedure False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isProcedure",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Procedure",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isProcedure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given value is a string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LispVal to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if the argument is a string, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isString",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given value is string Arguments LispVal to check Returns Bool True if the argument is string False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isString",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "String",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if given object is a symbol\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if a symbol, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isSymbol",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isSymbol",
          "type": "function"
        },
        "index": {
          "description": "Determine if given object is symbol Arguments Value to check Returns Bool True if symbol False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isSymbol",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Symbol",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if multiple symbols values are the same\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A list of Atom values\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: True if all of the symbols are the same, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isSymbolEq",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e m LispVal",
          "source": "src/Language-Scheme-Primitives.html#isSymbolEq",
          "type": "function"
        },
        "index": {
          "description": "Determine if multiple symbols values are the same Arguments list of Atom values Returns True if all of the symbols are the same False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isSymbolEq",
          "normalized": "[LispVal]-\u003ea LispVal",
          "package": "husk-scheme",
          "partial": "Symbol Eq",
          "signature": "[LispVal]-\u003em LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isSymbolEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the given port is a text port.\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isTextPort",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isTextPort",
          "type": "function"
        },
        "index": {
          "description": "Determine if the given port is text port Arguments Port Returns Bool",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isTextPort",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Text Port",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isTextPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if given object is a bytevector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Value to check\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if bytevector, False otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "isVector",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#isVector",
          "type": "function"
        },
        "index": {
          "description": "Determine if given object is bytevector Arguments Value to check Returns Bool True if bytevector False otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "isVector",
          "normalized": "LispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector",
          "signature": "LispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:isVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a copy of a list\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e List\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "listCopy",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#listCopy",
          "type": "function"
        },
        "index": {
          "description": "Create copy of list Arguments List Returns List",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "listCopy",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Copy",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:listCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the given list of characters to a string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e List - list of chars to convert\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String - Resulting string\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "listToString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#listToString",
          "type": "function"
        },
        "index": {
          "description": "Convert the given list of characters to string Arguments List list of chars to convert Returns String Resulting string",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "listToString",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "To String",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:listToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the given list to a vector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e List to convert\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Vector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "listToVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#listToVector",
          "type": "function"
        },
        "index": {
          "description": "Convert the given list to vector Arguments List to convert Returns Vector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "listToVector",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "To Vector",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:listToVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given file and return a list of scheme expressions\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - Filename to read\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: [LispVal] - Raw contents of the file parsed as scheme code\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "load",
          "package": "husk-scheme",
          "signature": "String -\u003e IOThrowsError [LispVal]",
          "source": "src/Language-Scheme-Primitives.html#load",
          "type": "function"
        },
        "index": {
          "description": "Parse the given file and return list of scheme expressions Arguments String Filename to read Returns LispVal Raw contents of the file parsed as scheme code",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "load",
          "normalized": "String-\u003eIOThrowsError[LispVal]",
          "package": "husk-scheme",
          "signature": "String-\u003eIOThrowsError[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an memory-backed port\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "makeBufferPort",
          "package": "husk-scheme",
          "signature": "Maybe LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#makeBufferPort",
          "type": "function"
        },
        "index": {
          "description": "Create an memory-backed port",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "makeBufferPort",
          "normalized": "Maybe LispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Buffer Port",
          "signature": "Maybe LispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:makeBufferPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new bytevector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Number - Length of the new bytevector\n\u003c/li\u003e\u003cli\u003e Number (optional) - Byte value to fill the bytevector with\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: ByteVector - A new bytevector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "makeByteVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#makeByteVector",
          "type": "function"
        },
        "index": {
          "description": "Create new bytevector Arguments Number Length of the new bytevector Number optional Byte value to fill the bytevector with Returns ByteVector new bytevector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "makeByteVector",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Byte Vector",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:makeByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new list\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Number - Length of the list\n   * LispVal - Object to fill the list with (optional)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "makeList",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#makeList",
          "type": "function"
        },
        "index": {
          "description": "Create new list Arguments Number Length of the list LispVal Object to fill the list with optional Returns List",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "makeList",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "List",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:makeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen the given file\n\u003c/p\u003e\u003cp\u003eLispVal Arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - filename\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Port\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "makePort",
          "package": "husk-scheme",
          "signature": "(FilePath -\u003e IOMode -\u003e IO Handle) -\u003e IOMode -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#makePort",
          "type": "function"
        },
        "index": {
          "description": "Open the given file LispVal Arguments String filename Returns Port",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "makePort",
          "normalized": "(FilePath-\u003eIOMode-\u003eIO Handle)-\u003eIOMode-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Port",
          "signature": "(FilePath-\u003eIOMode-\u003eIO Handle)-\u003eIOMode-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:makePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Number - number of characters in the string\n\u003c/li\u003e\u003cli\u003e Char (optional) - Character to fill in each position of string.\n                       Defaults to space\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String - new string\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "makeString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#makeString",
          "type": "function"
        },
        "index": {
          "description": "Make new string Arguments Number number of characters in the string Char optional Character to fill in each position of string Defaults to space Returns String new string",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "makeString",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "String",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:makeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new vector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Number - Length of the vector\n\u003c/li\u003e\u003cli\u003e LispVal - Value to fill the vector with\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Vector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "makeVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#makeVector",
          "type": "function"
        },
        "index": {
          "description": "Create new vector Arguments Number Length of the vector LispVal Value to fill the vector with Returns Vector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "makeVector",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Vector",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:makeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new input bytevector buffer\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "openInputByteVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#openInputByteVector",
          "type": "function"
        },
        "index": {
          "description": "Create new input bytevector buffer",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "openInputByteVector",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Input Byte Vector",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:openInputByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new input string buffer\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "openInputString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#openInputString",
          "type": "function"
        },
        "index": {
          "description": "Create new input string buffer",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "openInputString",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Input String",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:openInputString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new output bytevector buffer\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "openOutputByteVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#openOutputByteVector",
          "type": "function"
        },
        "index": {
          "description": "Create new output bytevector buffer",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "openOutputByteVector",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Output Byte Vector",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:openOutputByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new output string buffer\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "openOutputString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#openOutputString",
          "type": "function"
        },
        "index": {
          "description": "Create new output string buffer",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "openOutputString",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Output String",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:openOutputString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the contents of the given scheme source file into a list\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - Filename to read\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List - Raw contents of the file parsed as scheme code\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "readAll",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#readAll",
          "type": "function"
        },
        "index": {
          "description": "Read the contents of the given scheme source file into list Arguments String Filename to read Returns List Raw contents of the file parsed as scheme code",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "readAll",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "All",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:readAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a byte vector from the given port\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Number - Number of bytes to read\n   * Port - Port to read from\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: ByteVector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "readByteVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#readByteVector",
          "type": "function"
        },
        "index": {
          "description": "Read byte vector from the given port Arguments Number Number of bytes to read Port Port to read from Returns ByteVector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "readByteVector",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Byte Vector",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:readByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead character from port\n\u003c/p\u003e\u003cp\u003eLispVal Arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Char\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "readCharProc",
          "package": "husk-scheme",
          "signature": "(Handle -\u003e IO Char) -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#readCharProc",
          "type": "function"
        },
        "index": {
          "description": "Read character from port LispVal Arguments Port Returns Char",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "readCharProc",
          "normalized": "(Handle-\u003eIO Char)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Char Proc",
          "signature": "(Handle-\u003eIO Char)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:readCharProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the given file and return the raw string content \n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - Filename to read\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String - Actual text read from the file\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "readContents",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#readContents",
          "type": "function"
        },
        "index": {
          "description": "Read the given file and return the raw string content Arguments String Filename to read Returns String Actual text read from the file",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "readContents",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Contents",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:readContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from the given port\n\u003c/p\u003e\u003cp\u003eLispVal Arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: LispVal\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "readProc",
          "package": "husk-scheme",
          "signature": "Bool -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#readProc",
          "type": "function"
        },
        "index": {
          "description": "Read from the given port LispVal Arguments Port Returns LispVal",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "readProc",
          "normalized": "Bool-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Proc",
          "signature": "Bool-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:readProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a string from the given port\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Number - Number of bytes to read\n   * Port - Port to read from\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "readString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#readString",
          "type": "function"
        },
        "index": {
          "description": "Read string from the given port Arguments Number Number of bytes to read Port Port to read from Returns String",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "readString",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "String",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:readString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform boolBinop against two string arguments\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "strBoolBinop",
          "package": "husk-scheme",
          "signature": "(String -\u003e String -\u003e Bool) -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#strBoolBinop",
          "type": "function"
        },
        "index": {
          "description": "Perform boolBinop against two string arguments",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "strBoolBinop",
          "normalized": "(String-\u003eString-\u003eBool)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Bool Binop",
          "signature": "(String-\u003eString-\u003eBool)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:strBoolBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a string to a symbol\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String (or pointer) - String to convert\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Atom\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "string2Symbol",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#string2Symbol",
          "type": "function"
        },
        "index": {
          "description": "Convert string to symbol Arguments String or pointer String to convert Returns Atom",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "string2Symbol",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Symbol",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:string2Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend all given strings together into a single string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String (one or more) - String(s) to concatenate\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String - all given strings appended together as a single string\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "stringAppend",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#stringAppend",
          "type": "function"
        },
        "index": {
          "description": "Append all given strings together into single string Arguments String one or more String to concatenate Returns String all given strings appended together as single string",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "stringAppend",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Append",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:stringAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "stringCIBoolBinop",
          "package": "husk-scheme",
          "signature": "([Char] -\u003e [Char] -\u003e Bool) -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#stringCIBoolBinop",
          "type": "function"
        },
        "index": {
          "description": "Helper function",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "stringCIBoolBinop",
          "normalized": "([Char]-\u003e[Char]-\u003eBool)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "CIBool Binop",
          "signature": "([Char]-\u003e[Char]-\u003eBool)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:stringCIBoolBinop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a case insensitive comparison of the given strings\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - String to compare\n\u003c/li\u003e\u003cli\u003e String - String to compare\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Bool - True if strings are equal, false otherwise\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "stringCIEquals",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#stringCIEquals",
          "type": "function"
        },
        "index": {
          "description": "Perform case insensitive comparison of the given strings Arguments String String to compare String String to compare Returns Bool True if strings are equal false otherwise",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "stringCIEquals",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "CIEquals",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:stringCIEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a copy of the given string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - String to copy\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String - New copy of the given string\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "stringCopy",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#stringCopy",
          "type": "function"
        },
        "index": {
          "description": "Create copy of the given string Arguments String String to copy Returns String New copy of the given string",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "stringCopy",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Copy",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:stringCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the length of the given string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - String to examine\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Number - Length of the given string\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "stringLength",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#stringLength",
          "type": "function"
        },
        "index": {
          "description": "Determine the length of the given string Arguments String String to examine Returns Number Length of the given string",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "stringLength",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Length",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:stringLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet character at the given position of a string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - String to examine\n\u003c/li\u003e\u003cli\u003e Number - Get the character at this position\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Char\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "stringRef",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#stringRef",
          "type": "function"
        },
        "index": {
          "description": "Get character at the given position of string Arguments String String to examine Number Get the character at this position Returns Char",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "stringRef",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Ref",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:stringRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the given string to a list of chars\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - string to deconstruct\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List - list of characters\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "stringToList",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#stringToList",
          "type": "function"
        },
        "index": {
          "description": "Convert the given string to list of chars Arguments String string to deconstruct Returns List list of characters",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "stringToList",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "To List",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:stringToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert given string to a number\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - String to convert\n\u003c/li\u003e\u003cli\u003e Number (optional) - Number base to convert from, defaults to base 10 (decimal)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Numeric type, actual type will depend upon given string\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "stringToNumber",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#stringToNumber",
          "type": "function"
        },
        "index": {
          "description": "Convert given string to number Arguments String String to convert Number optional Number base to convert from defaults to base decimal Returns Numeric type actual type will depend upon given string",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "stringToNumber",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "To Number",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:stringToNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a string to a vector\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Vector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "stringToVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#stringToVector",
          "type": "function"
        },
        "index": {
          "description": "Convert string to vector Arguments String Returns Vector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "stringToVector",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "To Vector",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:stringToVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a part of the given string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - Original string\n\u003c/li\u003e\u003cli\u003e Number - Starting position of the substring\n\u003c/li\u003e\u003cli\u003e Number - Ending position of the substring\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String - substring of the original string\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "substring",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#substring",
          "type": "function"
        },
        "index": {
          "description": "Get part of the given string Arguments String Original string Number Starting position of the substring Number Ending position of the substring Returns String substring of the original string",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "substring",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:substring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the given symbol to a string\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Atom - Symbol to convert\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "symbol2String",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#symbol2String",
          "type": "function"
        },
        "index": {
          "description": "Convert the given symbol to string Arguments Atom Symbol to convert Returns String",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "symbol2String",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "String",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:symbol2String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a system command on the underlying OS.\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - Command to execute\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Integer - program return status\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "system",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#system",
          "type": "function"
        },
        "index": {
          "description": "Execute system command on the underlying OS Arguments String Command to execute Returns Integer program return status",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "system",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:system"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the given function against a single LispVal argument\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "unaryOp",
          "package": "husk-scheme",
          "signature": "(LispVal -\u003e ThrowsError LispVal) -\u003e [LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#unaryOp",
          "type": "function"
        },
        "index": {
          "description": "Perform the given function against single LispVal argument",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "unaryOp",
          "normalized": "(LispVal-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Op",
          "signature": "(LispVal-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:unaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as unaryOp but in the IO monad\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "unaryOp'",
          "package": "husk-scheme",
          "signature": "(LispVal -\u003e IOThrowsError LispVal) -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#unaryOp%27",
          "type": "function"
        },
        "index": {
          "description": "Same as unaryOp but in the IO monad",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "unaryOp'",
          "normalized": "(LispVal-\u003eIOThrowsError LispVal)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Op'",
          "signature": "(LispVal-\u003eIOThrowsError LispVal)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:unaryOp-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack a LispVal boolean\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Bool - Boolean to unpack\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "unpackBool",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e ThrowsError Bool",
          "source": "src/Language-Scheme-Primitives.html#unpackBool",
          "type": "function"
        },
        "index": {
          "description": "Unpack LispVal boolean Arguments Bool Boolean to unpack",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "unpackBool",
          "normalized": "LispVal-\u003eThrowsError Bool",
          "package": "husk-scheme",
          "partial": "Bool",
          "signature": "LispVal-\u003eThrowsError Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:unpackBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if two lispval's are equal\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "unpackEquals",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e LispVal -\u003e Unpacker -\u003e ThrowsError Bool",
          "source": "src/Language-Scheme-Primitives.html#unpackEquals",
          "type": "function"
        },
        "index": {
          "description": "Determine if two lispval are equal",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "unpackEquals",
          "normalized": "LispVal-\u003eLispVal-\u003eUnpacker-\u003eThrowsError Bool",
          "package": "husk-scheme",
          "partial": "Equals",
          "signature": "LispVal-\u003eLispVal-\u003eUnpacker-\u003eThrowsError Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:unpackEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack a LispVal String\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String - String to unpack\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "unpackStr",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e ThrowsError String",
          "source": "src/Language-Scheme-Primitives.html#unpackStr",
          "type": "function"
        },
        "index": {
          "description": "Unpack LispVal String Arguments String String to unpack",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "unpackStr",
          "normalized": "LispVal-\u003eThrowsError String",
          "package": "husk-scheme",
          "partial": "Str",
          "signature": "LispVal-\u003eThrowsError String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:unpackStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a copy of a vector\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vector\n   * Number - Start copying the vector from this element (optional)\n   * Number - Stop copying the vector at this element (optional)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Vector\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "vectorCopy",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#vectorCopy",
          "type": "function"
        },
        "index": {
          "description": "Create copy of vector Arguments Vector Number Start copying the vector from this element optional Number Stop copying the vector at this element optional Returns Vector",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "vectorCopy",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Copy",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:vectorCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the length of the given vector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vector\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Number\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "vectorLength",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#vectorLength",
          "type": "function"
        },
        "index": {
          "description": "Determine the length of the given vector Arguments Vector Returns Number",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "vectorLength",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Length",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:vectorLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the object at the given position of a vector\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vector\n\u003c/li\u003e\u003cli\u003e Number - Index of the vector to retrieve\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: Object at the given index\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "vectorRef",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#vectorRef",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the object at the given position of vector Arguments Vector Number Index of the vector to retrieve Returns Object at the given index",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "vectorRef",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Ref",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:vectorRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the given vector to a list\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vector\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: List\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "vectorToList",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#vectorToList",
          "type": "function"
        },
        "index": {
          "description": "Convert the given vector to list Arguments Vector Returns List",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "vectorToList",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "To List",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:vectorToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a vector to a string\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vector\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: String\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "vectorToString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#vectorToString",
          "type": "function"
        },
        "index": {
          "description": "Convert vector to string Arguments Vector Returns String",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "vectorToString",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "To String",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:vectorToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function to allow a pure function to work with pointers, by\n   dereferencing the leading object in the argument list if it is\n   a pointer. This is a special hash-table specific function that will\n   also dereference a hash table key if it is included.\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "wrapHashTbl",
          "package": "husk-scheme",
          "signature": "([LispVal] -\u003e ThrowsError LispVal) -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#wrapHashTbl",
          "type": "function"
        },
        "index": {
          "description": "helper function to allow pure function to work with pointers by dereferencing the leading object in the argument list if it is pointer This is special hash-table specific function that will also dereference hash table key if it is included",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "wrapHashTbl",
          "normalized": "([LispVal]-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Hash Tbl",
          "signature": "([LispVal]-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:wrapHashTbl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function to allow a pure function to work with pointers, by\n   dereferencing the leading object in the argument list if it is\n   a pointer.\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "wrapLeadObj",
          "package": "husk-scheme",
          "signature": "([LispVal] -\u003e ThrowsError LispVal) -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#wrapLeadObj",
          "type": "function"
        },
        "index": {
          "description": "helper function to allow pure function to work with pointers by dereferencing the leading object in the argument list if it is pointer",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "wrapLeadObj",
          "normalized": "([LispVal]-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Lead Obj",
          "signature": "([LispVal]-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:wrapLeadObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a byte vector to the given port\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ByteVector\n   * Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: (unspecified)\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "writeByteVector",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#writeByteVector",
          "type": "function"
        },
        "index": {
          "description": "Write byte vector to the given port Arguments ByteVector Port Returns unspecified",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "writeByteVector",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Byte Vector",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:writeByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite character to the given port\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Char - Value to write\n\u003c/li\u003e\u003cli\u003e Port (optional) - Port to write to, defaults to standard output\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: (None)\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "writeCharProc",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#writeCharProc",
          "type": "function"
        },
        "index": {
          "description": "Write character to the given port Arguments Char Value to write Port optional Port to write to defaults to standard output Returns None",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "writeCharProc",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Char Proc",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:writeCharProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to the given port\n\u003c/p\u003e\u003cp\u003eLispVal Arguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LispVal\n\u003c/li\u003e\u003cli\u003e Port (optional)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: (None)\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "writeProc",
          "package": "husk-scheme",
          "signature": "(Handle -\u003e LispVal -\u003e IO a) -\u003e [LispVal] -\u003e ErrorT LispError IO LispVal",
          "source": "src/Language-Scheme-Primitives.html#writeProc",
          "type": "function"
        },
        "index": {
          "description": "Write to the given port LispVal Arguments LispVal Port optional Returns None",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "writeProc",
          "normalized": "(Handle-\u003eLispVal-\u003eIO a)-\u003e[LispVal]-\u003eErrorT LispError IO LispVal",
          "package": "husk-scheme",
          "partial": "Proc",
          "signature": "(Handle-\u003eLispVal-\u003eIO a)-\u003e[LispVal]-\u003eErrorT LispError IO LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:writeProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the given port\n\u003c/p\u003e\u003cp\u003eArguments\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e String\n   * Port\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns: (unspecified)\n\u003c/p\u003e",
          "module": "Language.Scheme.Primitives",
          "name": "writeString",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Primitives.html#writeString",
          "type": "function"
        },
        "index": {
          "description": "Write string to the given port Arguments String Port Returns unspecified",
          "hierarchy": "Language Scheme Primitives",
          "module": "Language.Scheme.Primitives",
          "name": "writeString",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "String",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Primitives.html#v:writeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains top-level data type definitions, environments, error types, and associated functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Types",
          "name": "Types",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains top-level data type definitions environments error types and associated functions",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Types",
          "package": "husk-scheme",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer to hold code that is passed to a continuation for deferred execution\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "DeferredCode",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Types.html#DeferredCode",
          "type": "data"
        },
        "index": {
          "description": "Container to hold code that is passed to continuation for deferred execution",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "DeferredCode",
          "package": "husk-scheme",
          "partial": "Deferred Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#t:DeferredCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer to store information from a dynamic-wind\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "DynamicWinders",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Types.html#DynamicWinders",
          "type": "data"
        },
        "index": {
          "description": "Container to store information from dynamic-wind",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "DynamicWinders",
          "package": "husk-scheme",
          "partial": "Dynamic Winders",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#t:DynamicWinders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Scheme environment containing variable bindings of form \u003ccode\u003e(namespaceName, variableName), variableValue\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Env",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Types.html#Env",
          "type": "data"
        },
        "index": {
          "description": "Scheme environment containing variable bindings of form namespaceName variableName variableValue",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Env",
          "package": "husk-scheme",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer used to provide error handling in the IO monad\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "IOThrowsError",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Types.html#IOThrowsError",
          "type": "type"
        },
        "index": {
          "description": "Container used to provide error handling in the IO monad",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "IOThrowsError",
          "package": "husk-scheme",
          "partial": "IOThrows Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#t:IOThrowsError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of errors that may occur when evaluating Scheme code\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "LispError",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "data"
        },
        "index": {
          "description": "Types of errors that may occur when evaluating Scheme code",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "LispError",
          "package": "husk-scheme",
          "partial": "Lisp Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#t:LispError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScheme data types\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "LispVal",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "data"
        },
        "index": {
          "description": "Scheme data types",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "LispVal",
          "package": "husk-scheme",
          "partial": "Lisp Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#t:LispVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer used by operations that could throw an error\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "ThrowsError",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Types.html#ThrowsError",
          "type": "type"
        },
        "index": {
          "description": "Container used by operations that could throw an error",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "ThrowsError",
          "package": "husk-scheme",
          "partial": "Throws Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#t:ThrowsError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbol\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Atom",
          "package": "husk-scheme",
          "signature": "Atom String",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Symbol",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Atom",
          "package": "husk-scheme",
          "partial": "Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid special (built-in) form\n  | NotFunction String String\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "BadSpecialForm",
          "package": "husk-scheme",
          "signature": "BadSpecialForm String LispVal",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "function"
        },
        "index": {
          "description": "Invalid special built-in form NotFunction String String",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "BadSpecialForm",
          "package": "husk-scheme",
          "partial": "Bad Special Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:BadSpecialForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Bool",
          "package": "husk-scheme",
          "signature": "Bool Bool",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Boolean",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Bool",
          "package": "husk-scheme",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eByteVector from R7RS\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "ByteVector",
          "package": "husk-scheme",
          "signature": "ByteVector ByteString",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "ByteVector from R7RS",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "ByteVector",
          "package": "husk-scheme",
          "partial": "Byte Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:ByteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Char",
          "package": "husk-scheme",
          "signature": "Char Char",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Character",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Char",
          "package": "husk-scheme",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex number\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Complex",
          "package": "husk-scheme",
          "signature": "Complex (Complex Double)",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Complex number",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Complex",
          "package": "husk-scheme",
          "partial": "Complex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinuation\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Continuation",
          "package": "husk-scheme",
          "signature": "Continuation",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Continuation",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Continuation",
          "package": "husk-scheme",
          "partial": "Continuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Continuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA custom function written by code outside of husk.\n  Any code that uses the Haskell API should define custom\n  functions using this data type.\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "CustFunc",
          "package": "husk-scheme",
          "signature": "CustFunc ([LispVal] -\u003e IOThrowsError LispVal)",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "custom function written by code outside of husk Any code that uses the Haskell API should define custom functions using this data type",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "CustFunc",
          "normalized": "CustFunc([LispVal]-\u003eIOThrowsError LispVal)",
          "package": "husk-scheme",
          "partial": "Cust Func",
          "signature": "CustFunc([LispVal]-\u003eIOThrowsError LispVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:CustFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault error\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Default",
          "package": "husk-scheme",
          "signature": "Default String",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "function"
        },
        "index": {
          "description": "Default error",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Default",
          "package": "husk-scheme",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide by Zero error\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "DivideByZero",
          "package": "husk-scheme",
          "signature": "DivideByZero",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "function"
        },
        "index": {
          "description": "Divide by Zero error",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "DivideByZero",
          "package": "husk-scheme",
          "partial": "Divide By Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:DivideByZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePair\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "DottedList",
          "package": "husk-scheme",
          "signature": "DottedList [LispVal] LispVal",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Pair",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "DottedList",
          "normalized": "DottedList[LispVal]LispVal",
          "package": "husk-scheme",
          "partial": "Dotted List",
          "signature": "DottedList[LispVal]LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:DottedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "DynamicWinders",
          "package": "husk-scheme",
          "signature": "DynamicWinders",
          "source": "src/Language-Scheme-Types.html#DynamicWinders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "DynamicWinders",
          "package": "husk-scheme",
          "partial": "Dynamic Winders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:DynamicWinders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd of file indicator\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "EOF",
          "package": "husk-scheme",
          "signature": "EOF",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "End of file indicator",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "EOF",
          "package": "husk-scheme",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:EOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "Environment",
          "package": "husk-scheme",
          "signature": "Environment",
          "source": "src/Language-Scheme-Types.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Environment",
          "package": "husk-scheme",
          "partial": "Environment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction within the IO monad with access to\n the current environment and continuation. \n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "EvalFunc",
          "package": "husk-scheme",
          "signature": "EvalFunc ([LispVal] -\u003e IOThrowsError LispVal)",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Function within the IO monad with access to the current environment and continuation",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "EvalFunc",
          "normalized": "EvalFunc([LispVal]-\u003eIOThrowsError LispVal)",
          "package": "husk-scheme",
          "partial": "Eval Func",
          "signature": "EvalFunc([LispVal]-\u003eIOThrowsError LispVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:EvalFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point number\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Float",
          "package": "husk-scheme",
          "signature": "Float Double",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Double-precision floating point number",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Float",
          "package": "husk-scheme",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction written in Scheme\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Func",
          "package": "husk-scheme",
          "signature": "Func",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Function written in Scheme",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Func",
          "package": "husk-scheme",
          "partial": "Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction formed from a Haskell function\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "HFunc",
          "package": "husk-scheme",
          "signature": "HFunc",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Function formed from Haskell function",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "HFunc",
          "package": "husk-scheme",
          "partial": "HFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:HFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash table.\n Technically this could be a derived data type instead of being built-in to the\n interpreter. And perhaps in the future it will be. But for now, a hash table\n is too important of a data type to not be included. \n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "HashTable",
          "package": "husk-scheme",
          "signature": "HashTable (Map LispVal LispVal)",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Hash table Technically this could be derived data type instead of being built-in to the interpreter And perhaps in the future it will be But for now hash table is too important of data type to not be included",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "HashTable",
          "package": "husk-scheme",
          "partial": "Hash Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:HashTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Haskell function\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "HaskellBody",
          "package": "husk-scheme",
          "signature": "HaskellBody",
          "source": "src/Language-Scheme-Types.html#DeferredCode",
          "type": "function"
        },
        "index": {
          "description": "Haskell function",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "HaskellBody",
          "package": "husk-scheme",
          "partial": "Haskell Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:HaskellBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive function within the IO monad\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "IOFunc",
          "package": "husk-scheme",
          "signature": "IOFunc ([LispVal] -\u003e IOThrowsError LispVal)",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Primitive function within the IO monad",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "IOFunc",
          "normalized": "IOFunc([LispVal]-\u003eIOThrowsError LispVal)",
          "package": "husk-scheme",
          "partial": "IOFunc",
          "signature": "IOFunc([LispVal]-\u003eIOThrowsError LispVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:IOFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn internal error within husk; in theory user (Scheme) code\n                         should never allow one of these errors to be triggered. \n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "InternalError",
          "package": "husk-scheme",
          "signature": "InternalError String",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "function"
        },
        "index": {
          "description": "An internal error within husk in theory user Scheme code should never allow one of these errors to be triggered",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "InternalError",
          "package": "husk-scheme",
          "partial": "Internal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:InternalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for a scheme environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "LispEnv",
          "package": "husk-scheme",
          "signature": "LispEnv Env",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for scheme environment",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "LispEnv",
          "package": "husk-scheme",
          "partial": "Lisp Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:LispEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "List",
          "package": "husk-scheme",
          "signature": "List [LispVal]",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "List",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "List",
          "normalized": "List[LispVal]",
          "package": "husk-scheme",
          "partial": "List",
          "signature": "List[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal use only; do not use this type directly.\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Nil",
          "package": "husk-scheme",
          "signature": "Nil String",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Internal use only do not use this type directly",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Nil",
          "package": "husk-scheme",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeature is not implemented\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "NotImplemented",
          "package": "husk-scheme",
          "signature": "NotImplemented String",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "function"
        },
        "index": {
          "description": "Feature is not implemented",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "NotImplemented",
          "package": "husk-scheme",
          "partial": "Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:NotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid number of function arguments\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "NumArgs",
          "package": "husk-scheme",
          "signature": "NumArgs (Maybe Integer) [LispVal]",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "function"
        },
        "index": {
          "description": "Invalid number of function arguments",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "NumArgs",
          "normalized": "NumArgs(Maybe Integer)[LispVal]",
          "package": "husk-scheme",
          "partial": "Num Args",
          "signature": "NumArgs(Maybe Integer)[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:NumArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger number\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Number",
          "package": "husk-scheme",
          "signature": "Number Integer",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Integer number",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Number",
          "package": "husk-scheme",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque Haskell value.\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Opaque",
          "package": "husk-scheme",
          "signature": "Opaque Dynamic",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Opaque Haskell value",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Opaque",
          "package": "husk-scheme",
          "partial": "Opaque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing error\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Parser",
          "package": "husk-scheme",
          "signature": "Parser ParseError",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "function"
        },
        "index": {
          "description": "Parsing error",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Parser",
          "package": "husk-scheme",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointer to an environment variable.\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Pointer",
          "package": "husk-scheme",
          "signature": "Pointer",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Pointer to an environment variable",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Pointer",
          "package": "husk-scheme",
          "partial": "Pointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O port\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Port",
          "package": "husk-scheme",
          "signature": "Port Handle (Maybe Knob)",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "port",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Port",
          "package": "husk-scheme",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive function\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "PrimitiveFunc",
          "package": "husk-scheme",
          "signature": "PrimitiveFunc ([LispVal] -\u003e ThrowsError LispVal)",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Primitive function",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "PrimitiveFunc",
          "normalized": "PrimitiveFunc([LispVal]-\u003eThrowsError LispVal)",
          "package": "husk-scheme",
          "partial": "Primitive Func",
          "signature": "PrimitiveFunc([LispVal]-\u003eThrowsError LispVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:PrimitiveFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRational number\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Rational",
          "package": "husk-scheme",
          "signature": "Rational Rational",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Rational number",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Rational",
          "package": "husk-scheme",
          "partial": "Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block of Scheme code\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "SchemeBody",
          "package": "husk-scheme",
          "signature": "SchemeBody [LispVal]",
          "source": "src/Language-Scheme-Types.html#DeferredCode",
          "type": "function"
        },
        "index": {
          "description": "block of Scheme code",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "SchemeBody",
          "normalized": "SchemeBody[LispVal]",
          "package": "husk-scheme",
          "partial": "Scheme Body",
          "signature": "SchemeBody[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:SchemeBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "String",
          "package": "husk-scheme",
          "signature": "String String",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "String",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "String",
          "package": "husk-scheme",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType to hold a syntax object that is created by a macro definition.\n   Syntax objects are not used like regular types in that they are not\n   passed around within variables. In other words, you cannot use set! to\n   assign a variable to a syntax object. But they are used during function\n   application. In any case, it is convenient to define the type here \n   because syntax objects are stored in the same environments and \n   manipulated by the same functions as regular variables.\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Syntax",
          "package": "husk-scheme",
          "signature": "Syntax",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Type to hold syntax object that is created by macro definition Syntax objects are not used like regular types in that they are not passed around within variables In other words you cannot use set to assign variable to syntax object But they are used during function application In any case it is convenient to define the type here because syntax objects are stored in the same environments and manipulated by the same functions as regular variables",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Syntax",
          "package": "husk-scheme",
          "partial": "Syntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Syntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSyntax for an explicit-renaming macro\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "SyntaxExplicitRenaming",
          "package": "husk-scheme",
          "signature": "SyntaxExplicitRenaming LispVal",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Syntax for an explicit-renaming macro",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "SyntaxExplicitRenaming",
          "package": "husk-scheme",
          "partial": "Syntax Explicit Renaming",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:SyntaxExplicitRenaming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType error\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "TypeMismatch",
          "package": "husk-scheme",
          "signature": "TypeMismatch String LispVal",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "function"
        },
        "index": {
          "description": "Type error",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "TypeMismatch",
          "package": "husk-scheme",
          "partial": "Type Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:TypeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA referenced variable has not been declared\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "UnboundVar",
          "package": "husk-scheme",
          "signature": "UnboundVar String String",
          "source": "src/Language-Scheme-Types.html#LispError",
          "type": "function"
        },
        "index": {
          "description": "referenced variable has not been declared",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "UnboundVar",
          "package": "husk-scheme",
          "partial": "Unbound Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:UnboundVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "Vector",
          "package": "husk-scheme",
          "signature": "Vector (Array Int LispVal)",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Vector",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "Vector",
          "package": "husk-scheme",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to execute when leaving extent of dynamic-wind\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "after",
          "package": "husk-scheme",
          "signature": "LispVal",
          "source": "src/Language-Scheme-Types.html#DynamicWinders",
          "type": "function"
        },
        "index": {
          "description": "Function to execute when leaving extent of dynamic-wind",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "after",
          "package": "husk-scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to execute when resuming continuation within extent of dynamic-wind\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "before",
          "package": "husk-scheme",
          "signature": "LispVal",
          "source": "src/Language-Scheme-Types.html#DynamicWinders",
          "type": "function"
        },
        "index": {
          "description": "Function to execute when resuming continuation within extent of dynamic-wind",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "before",
          "package": "husk-scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "bindings",
          "package": "husk-scheme",
          "signature": "IORef (Map String (IORef LispVal))",
          "source": "src/Language-Scheme-Types.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "bindings",
          "package": "husk-scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:bindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "body",
          "package": "husk-scheme",
          "signature": "[LispVal]",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "body",
          "normalized": "[LispVal]",
          "package": "husk-scheme",
          "signature": "[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function to make pointer deref code more concise\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "box",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e IOThrowsError [LispVal]",
          "source": "src/Language-Scheme-Types.html#box",
          "type": "function"
        },
        "index": {
          "description": "helper function to make pointer deref code more concise",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "box",
          "normalized": "LispVal-\u003eIOThrowsError[LispVal]",
          "package": "husk-scheme",
          "signature": "LispVal-\u003eIOThrowsError[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "closure",
          "package": "husk-scheme",
          "signature": "Env",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "closure",
          "package": "husk-scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "contClosure",
          "package": "husk-scheme",
          "signature": "Env",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "contClosure",
          "package": "husk-scheme",
          "partial": "Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:contClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "contFunction",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e LispVal -\u003e Maybe [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Types.html#DeferredCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "contFunction",
          "normalized": "Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Function",
          "signature": "Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:contFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "contFunctionArgs",
          "package": "husk-scheme",
          "signature": "Maybe [LispVal]",
          "source": "src/Language-Scheme-Types.html#DeferredCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "contFunctionArgs",
          "normalized": "Maybe[LispVal]",
          "package": "husk-scheme",
          "partial": "Function Args",
          "signature": "Maybe[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:contFunctionArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "currentCont",
          "package": "husk-scheme",
          "signature": "Maybe DeferredCode",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "currentCont",
          "package": "husk-scheme",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:currentCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "dynamicWind",
          "package": "husk-scheme",
          "signature": "Maybe [DynamicWinders]",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "dynamicWind",
          "normalized": "Maybe[DynamicWinders]",
          "package": "husk-scheme",
          "partial": "Wind",
          "signature": "Maybe[DynamicWinders]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:dynamicWind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more convenient way to call \u003cem\u003eeqv\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "eqVal",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e LispVal -\u003e Bool",
          "source": "src/Language-Scheme-Types.html#eqVal",
          "type": "function"
        },
        "index": {
          "description": "more convenient way to call eqv",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "eqVal",
          "normalized": "LispVal-\u003eLispVal-\u003eBool",
          "package": "husk-scheme",
          "partial": "Val",
          "signature": "LispVal-\u003eLispVal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:eqVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eLispVal\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "eqv",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003e ThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Compare two LispVal instances",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "eqv",
          "normalized": "[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:eqv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two lists of haskell values, using the given comparison function\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "eqvList",
          "package": "husk-scheme",
          "signature": "([LispVal] -\u003e ThrowsError LispVal) -\u003e [LispVal] -\u003e ThrowsError LispVal",
          "source": "src/Language-Scheme-Types.html#eqvList",
          "type": "function"
        },
        "index": {
          "description": "Compare two lists of haskell values using the given comparison function",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "eqvList",
          "normalized": "([LispVal]-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "List",
          "signature": "([LispVal]-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:eqvList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "extraReturnArgs",
          "package": "husk-scheme",
          "signature": "Maybe [LispVal]",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "extraReturnArgs",
          "normalized": "Maybe[LispVal]",
          "package": "husk-scheme",
          "partial": "Return Args",
          "signature": "Maybe[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:extraReturnArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an opaque Lisp value back into a Haskell value of the appropriate\n  type, or produce a TypeMismatch error.\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "fromOpaque",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e ThrowsError a",
          "source": "src/Language-Scheme-Types.html#fromOpaque",
          "type": "function"
        },
        "index": {
          "description": "Convert an opaque Lisp value back into Haskell value of the appropriate type or produce TypeMismatch error",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "fromOpaque",
          "normalized": "LispVal-\u003eThrowsError a",
          "package": "husk-scheme",
          "partial": "Opaque",
          "signature": "LispVal-\u003eThrowsError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:fromOpaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "hbody",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal -\u003e LispVal -\u003e Maybe [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "hbody",
          "normalized": "Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "signature": "Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:hbody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "hclosure",
          "package": "husk-scheme",
          "signature": "Env",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "hclosure",
          "package": "husk-scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:hclosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "hparams",
          "package": "husk-scheme",
          "signature": "[String]",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "hparams",
          "normalized": "[String]",
          "package": "husk-scheme",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:hparams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "hvararg",
          "package": "husk-scheme",
          "signature": "Maybe String",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "hvararg",
          "package": "husk-scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:hvararg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a ThrowsError into the IO monad\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "liftThrows",
          "package": "husk-scheme",
          "signature": "ThrowsError a -\u003e IOThrowsError a",
          "source": "src/Language-Scheme-Types.html#liftThrows",
          "type": "function"
        },
        "index": {
          "description": "Lift ThrowsError into the IO monad",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "liftThrows",
          "normalized": "ThrowsError a-\u003eIOThrowsError a",
          "package": "husk-scheme",
          "partial": "Throws",
          "signature": "ThrowsError a-\u003eIOThrowsError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:liftThrows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a continuation that takes a higher-order function (written in Haskell)\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "makeCPS",
          "package": "husk-scheme",
          "signature": "Env-\u003e LispVal-\u003e (Env -\u003e LispVal -\u003e LispVal -\u003e Maybe [LispVal] -\u003e IOThrowsError LispVal)-\u003e LispVal",
          "type": "function"
        },
        "index": {
          "description": "Make continuation that takes higher-order function written in Haskell",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "makeCPS",
          "normalized": "Env-\u003eLispVal-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003eLispVal",
          "package": "husk-scheme",
          "partial": "CPS",
          "signature": "Env-\u003eLispVal-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003eLispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:makeCPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a continuation that stores a higher-order function and arguments to that function\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "makeCPSWArgs",
          "package": "husk-scheme",
          "signature": "Env-\u003e LispVal-\u003e (Env -\u003e LispVal -\u003e LispVal -\u003e Maybe [LispVal] -\u003e IOThrowsError LispVal)-\u003e [LispVal]-\u003e LispVal",
          "type": "function"
        },
        "index": {
          "description": "Make continuation that stores higher-order function and arguments to that function",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "makeCPSWArgs",
          "normalized": "Env-\u003eLispVal-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003e[LispVal]-\u003eLispVal",
          "package": "husk-scheme",
          "partial": "CPSWArgs",
          "signature": "Env-\u003eLispVal-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003e[LispVal]-\u003eLispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:makeCPSWArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a scheme function\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "makeFunc",
          "package": "husk-scheme",
          "signature": "Maybe String -\u003e Env -\u003e [LispVal] -\u003e [LispVal] -\u003e m LispVal",
          "source": "src/Language-Scheme-Types.html#makeFunc",
          "type": "function"
        },
        "index": {
          "description": "Create scheme function",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "makeFunc",
          "normalized": "Maybe String-\u003eEnv-\u003e[LispVal]-\u003e[LispVal]-\u003ea LispVal",
          "package": "husk-scheme",
          "partial": "Func",
          "signature": "Maybe String-\u003eEnv-\u003e[LispVal]-\u003e[LispVal]-\u003em LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:makeFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a haskell function\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "makeHFunc",
          "package": "husk-scheme",
          "signature": "Maybe String -\u003e Env -\u003e [String] -\u003e (Env -\u003e LispVal -\u003e LispVal -\u003e Maybe [LispVal] -\u003e IOThrowsError LispVal) -\u003e m LispVal",
          "source": "src/Language-Scheme-Types.html#makeHFunc",
          "type": "function"
        },
        "index": {
          "description": "Create haskell function",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "makeHFunc",
          "normalized": "Maybe String-\u003eEnv-\u003e[String]-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003ea LispVal",
          "package": "husk-scheme",
          "partial": "HFunc",
          "signature": "Maybe String-\u003eEnv-\u003e[String]-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003em LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:makeHFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a haskell function that can receive any number of arguments\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "makeHVarargs",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e Env -\u003e [String] -\u003e (Env -\u003e LispVal -\u003e LispVal -\u003e Maybe [LispVal] -\u003e IOThrowsError LispVal) -\u003e m LispVal",
          "source": "src/Language-Scheme-Types.html#makeHVarargs",
          "type": "function"
        },
        "index": {
          "description": "Create haskell function that can receive any number of arguments",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "makeHVarargs",
          "normalized": "LispVal-\u003eEnv-\u003e[String]-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003ea LispVal",
          "package": "husk-scheme",
          "partial": "HVarargs",
          "signature": "LispVal-\u003eEnv-\u003e[String]-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003em LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:makeHVarargs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a normal scheme function\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "makeNormalFunc",
          "package": "husk-scheme",
          "signature": "Env -\u003e [LispVal] -\u003e [LispVal] -\u003e m LispVal",
          "source": "src/Language-Scheme-Types.html#makeNormalFunc",
          "type": "function"
        },
        "index": {
          "description": "Create normal scheme function",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "makeNormalFunc",
          "normalized": "Env-\u003e[LispVal]-\u003e[LispVal]-\u003ea LispVal",
          "package": "husk-scheme",
          "partial": "Normal Func",
          "signature": "Env-\u003e[LispVal]-\u003e[LispVal]-\u003em LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:makeNormalFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a normal haskell function\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "makeNormalHFunc",
          "package": "husk-scheme",
          "signature": "Env -\u003e [String] -\u003e (Env -\u003e LispVal -\u003e LispVal -\u003e Maybe [LispVal] -\u003e IOThrowsError LispVal) -\u003e m LispVal",
          "source": "src/Language-Scheme-Types.html#makeNormalHFunc",
          "type": "function"
        },
        "index": {
          "description": "Create normal haskell function",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "makeNormalHFunc",
          "normalized": "Env-\u003e[String]-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003ea LispVal",
          "package": "husk-scheme",
          "partial": "Normal HFunc",
          "signature": "Env-\u003e[String]-\u003e(Env-\u003eLispVal-\u003eLispVal-\u003eMaybe[LispVal]-\u003eIOThrowsError LispVal)-\u003em LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:makeNormalHFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an \u003ca\u003eempty\u003c/a\u003e continuation that does not contain any code\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "makeNullContinuation",
          "package": "husk-scheme",
          "signature": "Env -\u003e LispVal",
          "source": "src/Language-Scheme-Types.html#makeNullContinuation",
          "type": "function"
        },
        "index": {
          "description": "Make an empty continuation that does not contain any code",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "makeNullContinuation",
          "normalized": "Env-\u003eLispVal",
          "package": "husk-scheme",
          "partial": "Null Continuation",
          "signature": "Env-\u003eLispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:makeNullContinuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a scheme function that can receive any number of arguments\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "makeVarargs",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e Env -\u003e [LispVal] -\u003e [LispVal] -\u003e m LispVal",
          "source": "src/Language-Scheme-Types.html#makeVarargs",
          "type": "function"
        },
        "index": {
          "description": "Create scheme function that can receive any number of arguments",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "makeVarargs",
          "normalized": "LispVal-\u003eEnv-\u003e[LispVal]-\u003e[LispVal]-\u003ea LispVal",
          "package": "husk-scheme",
          "partial": "Varargs",
          "signature": "LispVal-\u003eEnv-\u003e[LispVal]-\u003e[LispVal]-\u003em LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:makeVarargs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "nextCont",
          "package": "husk-scheme",
          "signature": "Maybe LispVal",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "nextCont",
          "package": "husk-scheme",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:nextCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "nullEnv",
          "package": "husk-scheme",
          "signature": "IO Env",
          "source": "src/Language-Scheme-Types.html#nullEnv",
          "type": "function"
        },
        "index": {
          "description": "An empty environment",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "nullEnv",
          "package": "husk-scheme",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:nullEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScheme \u003ca\u003enull\u003c/a\u003e value\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "nullLisp",
          "package": "husk-scheme",
          "signature": "LispVal",
          "source": "src/Language-Scheme-Types.html#nullLisp",
          "type": "function"
        },
        "index": {
          "description": "Scheme null value",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "nullLisp",
          "package": "husk-scheme",
          "partial": "Lisp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:nullLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "params",
          "package": "husk-scheme",
          "signature": "[String]",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "params",
          "normalized": "[String]",
          "package": "husk-scheme",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "parentEnv",
          "package": "husk-scheme",
          "signature": "Maybe Env",
          "source": "src/Language-Scheme-Types.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "parentEnv",
          "package": "husk-scheme",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:parentEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "pointerEnv",
          "package": "husk-scheme",
          "signature": "Env",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "pointerEnv",
          "package": "husk-scheme",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:pointerEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "pointerVar",
          "package": "husk-scheme",
          "signature": "String",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "pointerVar",
          "package": "husk-scheme",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:pointerVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "pointers",
          "package": "husk-scheme",
          "signature": "IORef (Map String (IORef [LispVal]))",
          "source": "src/Language-Scheme-Types.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "pointers",
          "normalized": "IORef(Map String(IORef[LispVal]))",
          "package": "husk-scheme",
          "signature": "IORef(Map String(IORef[LispVal]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:pointers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode env in effect at definition time, if applicable\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "synClosure",
          "package": "husk-scheme",
          "signature": "Maybe Env",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Code env in effect at definition time if applicable",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "synClosure",
          "package": "husk-scheme",
          "partial": "Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:synClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet if macro is defined within another macro\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "synDefinedInMacro",
          "package": "husk-scheme",
          "signature": "Bool",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Set if macro is defined within another macro",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "synDefinedInMacro",
          "package": "husk-scheme",
          "partial": "Defined In Macro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:synDefinedInMacro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString to use as the ellipsis identifier\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "synEllipsis",
          "package": "husk-scheme",
          "signature": "String",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "String to use as the ellipsis identifier",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "synEllipsis",
          "package": "husk-scheme",
          "partial": "Ellipsis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:synEllipsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral identifiers from syntax-rules \n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "synIdentifiers",
          "package": "husk-scheme",
          "signature": "[LispVal]",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Literal identifiers from syntax-rules",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "synIdentifiers",
          "normalized": "[LispVal]",
          "package": "husk-scheme",
          "partial": "Identifiers",
          "signature": "[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:synIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenames (from macro hygiene) in effect at def time;\n   only applicable if this macro defined inside another macro.\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "synRenameClosure",
          "package": "husk-scheme",
          "signature": "Maybe Env",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Renames from macro hygiene in effect at def time only applicable if this macro defined inside another macro",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "synRenameClosure",
          "package": "husk-scheme",
          "partial": "Rename Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:synRenameClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRules from syntax-rules\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "synRules",
          "package": "husk-scheme",
          "signature": "[LispVal]",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "description": "Rules from syntax-rules",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "synRules",
          "normalized": "[LispVal]",
          "package": "husk-scheme",
          "partial": "Rules",
          "signature": "[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:synRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell value to an opaque Lisp value.\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "toOpaque",
          "package": "husk-scheme",
          "signature": "a -\u003e LispVal",
          "source": "src/Language-Scheme-Types.html#toOpaque",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell value to an opaque Lisp value",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "toOpaque",
          "normalized": "a-\u003eLispVal",
          "package": "husk-scheme",
          "partial": "Opaque",
          "signature": "a-\u003eLispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:toOpaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate formal function parameters.\n\u003c/p\u003e",
          "module": "Language.Scheme.Types",
          "name": "validateFuncParams",
          "package": "husk-scheme",
          "signature": "[LispVal] -\u003e Maybe Integer -\u003e IOThrowsError Bool",
          "source": "src/Language-Scheme-Types.html#validateFuncParams",
          "type": "function"
        },
        "index": {
          "description": "Validate formal function parameters",
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "validateFuncParams",
          "normalized": "[LispVal]-\u003eMaybe Integer-\u003eIOThrowsError Bool",
          "package": "husk-scheme",
          "partial": "Func Params",
          "signature": "[LispVal]-\u003eMaybe Integer-\u003eIOThrowsError Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:validateFuncParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Types",
          "name": "vararg",
          "package": "husk-scheme",
          "signature": "Maybe String",
          "source": "src/Language-Scheme-Types.html#LispVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Types",
          "module": "Language.Scheme.Types",
          "name": "vararg",
          "package": "husk-scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Types.html#v:vararg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains general-purpose utility functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Util",
          "name": "Util",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Util.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains general-purpose utility functions",
          "hierarchy": "Language Scheme Util",
          "module": "Language.Scheme.Util",
          "name": "Util",
          "package": "husk-scheme",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount occurences of a letter in a list of strings\n\u003c/p\u003e",
          "module": "Language.Scheme.Util",
          "name": "countAllLetters",
          "package": "husk-scheme",
          "signature": "Char -\u003e [String] -\u003e Int",
          "source": "src/Language-Scheme-Util.html#countAllLetters",
          "type": "function"
        },
        "index": {
          "description": "Count occurences of letter in list of strings",
          "hierarchy": "Language Scheme Util",
          "module": "Language.Scheme.Util",
          "name": "countAllLetters",
          "normalized": "Char-\u003e[String]-\u003eInt",
          "package": "husk-scheme",
          "partial": "All Letters",
          "signature": "Char-\u003e[String]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Util.html#v:countAllLetters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount occurences of a letter in a string\n\u003c/p\u003e",
          "module": "Language.Scheme.Util",
          "name": "countLetters",
          "package": "husk-scheme",
          "signature": "Char -\u003e String -\u003e Int",
          "source": "src/Language-Scheme-Util.html#countLetters",
          "type": "function"
        },
        "index": {
          "description": "Count occurences of letter in string",
          "hierarchy": "Language Scheme Util",
          "module": "Language.Scheme.Util",
          "name": "countLetters",
          "normalized": "Char-\u003eString-\u003eInt",
          "package": "husk-scheme",
          "partial": "Letters",
          "signature": "Char-\u003eString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Util.html#v:countLetters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA utility function to escape backslashes in the given string\n\u003c/p\u003e",
          "module": "Language.Scheme.Util",
          "name": "escapeBackslashes",
          "package": "husk-scheme",
          "signature": "String -\u003e String",
          "source": "src/Language-Scheme-Util.html#escapeBackslashes",
          "type": "function"
        },
        "index": {
          "description": "utility function to escape backslashes in the given string",
          "hierarchy": "Language Scheme Util",
          "module": "Language.Scheme.Util",
          "name": "escapeBackslashes",
          "normalized": "String-\u003eString",
          "package": "husk-scheme",
          "partial": "Backslashes",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Util.html#v:escapeBackslashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove leading/trailing white space from a string; based on corresponding \n   Python function. Code taken from: \n\u003c/p\u003e\u003cp\u003ehttp:\u003cem/\u003egimbo.org.uk\u003cem\u003eblog\u003c/em\u003e2007\u003cem\u003e04\u003c/em\u003e20\u003cem\u003esplitting-a-string-in-haskell\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Scheme.Util",
          "name": "strip",
          "package": "husk-scheme",
          "signature": "String -\u003e String",
          "source": "src/Language-Scheme-Util.html#strip",
          "type": "function"
        },
        "index": {
          "description": "Remove leading trailing white space from string based on corresponding Python function Code taken from http gimbo.org.uk blog splitting-a-string-in-haskell",
          "hierarchy": "Language Scheme Util",
          "module": "Language.Scheme.Util",
          "name": "strip",
          "normalized": "String-\u003eString",
          "package": "husk-scheme",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Util.html#v:strip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains code for working with Scheme variables,\nand the environments that contain them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Variables",
          "name": "Variables",
          "package": "husk-scheme",
          "source": "src/Language-Scheme-Variables.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains code for working with Scheme variables and the environments that contain them",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "Variables",
          "package": "husk-scheme",
          "partial": "Variables",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a deep copy of an environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "copyEnv",
          "package": "husk-scheme",
          "signature": "Env-\u003e IO Env",
          "type": "function"
        },
        "index": {
          "description": "Create deep copy of an environment",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "copyEnv",
          "normalized": "Env-\u003eIO Env",
          "package": "husk-scheme",
          "partial": "Env",
          "signature": "Env-\u003eIO Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:copyEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind a variable in the given namespace\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "defineNamespacedVar",
          "package": "husk-scheme",
          "signature": "Env-\u003e Char-\u003e String-\u003e LispVal-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Bind variable in the given namespace",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "defineNamespacedVar",
          "normalized": "Env-\u003eChar-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Namespaced Var",
          "signature": "Env-\u003eChar-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:defineNamespacedVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind a variable in the default namespace\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "defineVar",
          "package": "husk-scheme",
          "signature": "Env-\u003e String-\u003e LispVal-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Bind variable in the default namespace",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "defineVar",
          "normalized": "Env-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Var",
          "signature": "Env-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:defineVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a value with a pointer dereferenced, if necessary\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "derefPtr",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Variables.html#derefPtr",
          "type": "function"
        },
        "index": {
          "description": "Return value with pointer dereferenced if necessary",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "derefPtr",
          "normalized": "LispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Ptr",
          "signature": "LispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:derefPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of symbols exported from an environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "exportsFromEnv",
          "package": "husk-scheme",
          "signature": "Env -\u003e IO [LispVal]",
          "source": "src/Language-Scheme-Variables.html#exportsFromEnv",
          "type": "function"
        },
        "index": {
          "description": "Return list of symbols exported from an environment",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "exportsFromEnv",
          "normalized": "Env-\u003eIO[LispVal]",
          "package": "husk-scheme",
          "partial": "From Env",
          "signature": "Env-\u003eIO[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:exportsFromEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend given environment by binding a series of values to a new environment.\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "extendEnv",
          "package": "husk-scheme",
          "signature": "Env-\u003e [((Char, String), LispVal)]-\u003e IO Env",
          "type": "function"
        },
        "index": {
          "description": "Extend given environment by binding series of values to new environment",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "extendEnv",
          "normalized": "Env-\u003e[((Char,String),LispVal)]-\u003eIO Env",
          "package": "husk-scheme",
          "partial": "Env",
          "signature": "Env-\u003e[((Char,String),LispVal)]-\u003eIO Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:extendEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively search environments to find one that contains the given variable.\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "findNamespacedEnv",
          "package": "husk-scheme",
          "signature": "Env-\u003e Char-\u003e String-\u003e IO (Maybe Env)",
          "type": "function"
        },
        "index": {
          "description": "Recursively search environments to find one that contains the given variable",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "findNamespacedEnv",
          "normalized": "Env-\u003eChar-\u003eString-\u003eIO(Maybe Env)",
          "package": "husk-scheme",
          "partial": "Namespaced Env",
          "signature": "Env-\u003eChar-\u003eString-\u003eIO(Maybe Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:findNamespacedEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve an ioRef defined in a given namespace\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "getNamespacedRef",
          "package": "husk-scheme",
          "signature": "Env-\u003e Char-\u003e String-\u003e IOThrowsError (IORef LispVal)",
          "type": "function"
        },
        "index": {
          "description": "Retrieve an ioRef defined in given namespace",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "getNamespacedRef",
          "normalized": "Env-\u003eChar-\u003eString-\u003eIOThrowsError(IORef LispVal)",
          "package": "husk-scheme",
          "partial": "Namespaced Ref",
          "signature": "Env-\u003eChar-\u003eString-\u003eIOThrowsError(IORef LispVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:getNamespacedRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value of a variable defined in a given namespace\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "getNamespacedVar",
          "package": "husk-scheme",
          "signature": "Env-\u003e Char-\u003e String-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value of variable defined in given namespace",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "getNamespacedVar",
          "normalized": "Env-\u003eChar-\u003eString-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Namespaced Var",
          "signature": "Env-\u003eChar-\u003eString-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:getNamespacedVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value of a variable defined in a given namespace,\n  or Nothing if it is not defined\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "getNamespacedVar'",
          "package": "husk-scheme",
          "signature": "Env-\u003e Char-\u003e String-\u003e IOThrowsError (Maybe LispVal)",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value of variable defined in given namespace or Nothing if it is not defined",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "getNamespacedVar'",
          "normalized": "Env-\u003eChar-\u003eString-\u003eIOThrowsError(Maybe LispVal)",
          "package": "husk-scheme",
          "partial": "Namespaced Var'",
          "signature": "Env-\u003eChar-\u003eString-\u003eIOThrowsError(Maybe LispVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:getNamespacedVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value of a variable defined in the default namespace\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "getVar",
          "package": "husk-scheme",
          "signature": "Env-\u003e String-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value of variable defined in the default namespace",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "getVar",
          "normalized": "Env-\u003eString-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Var",
          "signature": "Env-\u003eString-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:getVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value of a variable defined in the default namespace,\n  or Nothing if it is not defined\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "getVar'",
          "package": "husk-scheme",
          "signature": "Env-\u003e String-\u003e IOThrowsError (Maybe LispVal)",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value of variable defined in the default namespace or Nothing if it is not defined",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "getVar'",
          "normalized": "Env-\u003eString-\u003eIOThrowsError(Maybe LispVal)",
          "package": "husk-scheme",
          "partial": "Var'",
          "signature": "Env-\u003eString-\u003eIOThrowsError(Maybe LispVal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:getVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a deep copy of an environment's contents into\n  another environment.\n\u003c/p\u003e\u003cp\u003eThe destination environment is modified!\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "importEnv",
          "package": "husk-scheme",
          "signature": "Env-\u003e Env-\u003e IO Env",
          "type": "function"
        },
        "index": {
          "description": "Perform deep copy of an environment contents into another environment The destination environment is modified",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "importEnv",
          "normalized": "Env-\u003eEnv-\u003eIO Env",
          "package": "husk-scheme",
          "partial": "Env",
          "signature": "Env-\u003eEnv-\u003eIO Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:importEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a variable is bound in the default namespace\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "isBound",
          "package": "husk-scheme",
          "signature": "Env-\u003e String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Determine if variable is bound in the default namespace",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "isBound",
          "normalized": "Env-\u003eString-\u003eIO Bool",
          "package": "husk-scheme",
          "partial": "Bound",
          "signature": "Env-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:isBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a variable is bound in a given namespace\n  or a parent of the given environment.\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "isNamespacedRecBound",
          "package": "husk-scheme",
          "signature": "Env-\u003e Char-\u003e String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Determine if variable is bound in given namespace or parent of the given environment",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "isNamespacedRecBound",
          "normalized": "Env-\u003eChar-\u003eString-\u003eIO Bool",
          "package": "husk-scheme",
          "partial": "Namespaced Rec Bound",
          "signature": "Env-\u003eChar-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:isNamespacedRecBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a variable is bound in the default namespace, \n  in this environment or one of its parents.\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "isRecBound",
          "package": "husk-scheme",
          "signature": "Env-\u003e String-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Determine if variable is bound in the default namespace in this environment or one of its parents",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "isRecBound",
          "normalized": "Env-\u003eString-\u003eIO Bool",
          "package": "husk-scheme",
          "partial": "Rec Bound",
          "signature": "Env-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:isRecBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal namespace for macros\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "macroNamespace",
          "package": "husk-scheme",
          "signature": "Char",
          "source": "src/Language-Scheme-Variables.html#macroNamespace",
          "type": "function"
        },
        "index": {
          "description": "Internal namespace for macros",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "macroNamespace",
          "package": "husk-scheme",
          "partial": "Namespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:macroNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a null environment with the given environment as its parent.\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "nullEnvWithParent",
          "package": "husk-scheme",
          "signature": "Env -\u003e IO Env",
          "source": "src/Language-Scheme-Variables.html#nullEnvWithParent",
          "type": "function"
        },
        "index": {
          "description": "Create null environment with the given environment as its parent",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "nullEnvWithParent",
          "normalized": "Env-\u003eIO Env",
          "package": "husk-scheme",
          "partial": "Env With Parent",
          "signature": "Env-\u003eIO Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:nullEnvWithParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the contents of an environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "printEnv",
          "package": "husk-scheme",
          "signature": "Env-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Show the contents of an environment",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "printEnv",
          "normalized": "Env-\u003eIO String",
          "package": "husk-scheme",
          "partial": "Env",
          "signature": "Env-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:printEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively process the given data structure, dereferencing\n  any pointers found along the way. \n\u003c/p\u003e\u003cp\u003eThis could potentially be expensive on large data structures \n  since it must walk the entire object.\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "recDerefPtrs",
          "package": "husk-scheme",
          "signature": "LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Variables.html#recDerefPtrs",
          "type": "function"
        },
        "index": {
          "description": "Recursively process the given data structure dereferencing any pointers found along the way This could potentially be expensive on large data structures since it must walk the entire object",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "recDerefPtrs",
          "normalized": "LispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Deref Ptrs",
          "signature": "LispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:recDerefPtrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper to recursively dereference all pointers and\n  pass results to a function\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "recDerefToFnc",
          "package": "husk-scheme",
          "signature": "([LispVal] -\u003e ThrowsError LispVal) -\u003e [LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Variables.html#recDerefToFnc",
          "type": "function"
        },
        "index": {
          "description": "helper to recursively dereference all pointers and pass results to function",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "recDerefToFnc",
          "normalized": "([LispVal]-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Deref To Fnc",
          "signature": "([LispVal]-\u003eThrowsError LispVal)-\u003e[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:recDerefToFnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively find all exports from the given environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "recExportsFromEnv",
          "package": "husk-scheme",
          "signature": "Env -\u003e IO [LispVal]",
          "source": "src/Language-Scheme-Variables.html#recExportsFromEnv",
          "type": "function"
        },
        "index": {
          "description": "Recursively find all exports from the given environment",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "recExportsFromEnv",
          "normalized": "Env-\u003eIO[LispVal]",
          "package": "husk-scheme",
          "partial": "Exports From Env",
          "signature": "Env-\u003eIO[LispVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:recExportsFromEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively print an environment to string\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "recPrintEnv",
          "package": "husk-scheme",
          "signature": "Env -\u003e IO String",
          "source": "src/Language-Scheme-Variables.html#recPrintEnv",
          "type": "function"
        },
        "index": {
          "description": "Recursively print an environment to string",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "recPrintEnv",
          "normalized": "Env-\u003eIO String",
          "package": "husk-scheme",
          "partial": "Print Env",
          "signature": "Env-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:recPrintEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a variable in a given namespace\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "setNamespacedVar",
          "package": "husk-scheme",
          "signature": "Env-\u003e Char-\u003e String-\u003e LispVal-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Set variable in given namespace",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "setNamespacedVar",
          "normalized": "Env-\u003eChar-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Namespaced Var",
          "signature": "Env-\u003eChar-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:setNamespacedVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a variable in the default namespace\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "setVar",
          "package": "husk-scheme",
          "signature": "Env-\u003e String-\u003e LispVal-\u003e IOThrowsError LispVal",
          "type": "function"
        },
        "index": {
          "description": "Set variable in the default namespace",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "setVar",
          "normalized": "Env-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Var",
          "signature": "Env-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:setVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the top-most environment\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "topmostEnv",
          "package": "husk-scheme",
          "signature": "Env -\u003e IO Env",
          "source": "src/Language-Scheme-Variables.html#topmostEnv",
          "type": "function"
        },
        "index": {
          "description": "Find the top-most environment",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "topmostEnv",
          "normalized": "Env-\u003eIO Env",
          "package": "husk-scheme",
          "partial": "Env",
          "signature": "Env-\u003eIO Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:topmostEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function updates the object that \u003ca\u003evar\u003c/a\u003e refers to. If \u003ca\u003evar\u003c/a\u003e is\n  a pointer, that means this function will update that pointer (or the last\n  pointer in the chain) to point to the given \u003ca\u003evalue\u003c/a\u003e object. If \u003ca\u003evar\u003c/a\u003e\n  is not a pointer, the result is the same as a setVar (but without updating\n  any pointer references, see below).\n\u003c/p\u003e\u003cp\u003eNote this function only updates the object, it does not\n  update any associated pointers. So it should probably only be\n  used internally by husk, unless you really know what you are\n  doing!\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "updateNamespacedObject",
          "package": "husk-scheme",
          "signature": "Env -\u003e Char -\u003e String -\u003e LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Variables.html#updateNamespacedObject",
          "type": "function"
        },
        "index": {
          "description": "This function updates the object that var refers to If var is pointer that means this function will update that pointer or the last pointer in the chain to point to the given value object If var is not pointer the result is the same as setVar but without updating any pointer references see below Note this function only updates the object it does not update any associated pointers So it should probably only be used internally by husk unless you really know what you are doing",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "updateNamespacedObject",
          "normalized": "Env-\u003eChar-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Namespaced Object",
          "signature": "Env-\u003eChar-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:updateNamespacedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for updateNamespaceObject that uses the variable namespace.\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "updateObject",
          "package": "husk-scheme",
          "signature": "Env -\u003e String -\u003e LispVal -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Variables.html#updateObject",
          "type": "function"
        },
        "index": {
          "description": "wrapper for updateNamespaceObject that uses the variable namespace",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "updateObject",
          "normalized": "Env-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "package": "husk-scheme",
          "partial": "Object",
          "signature": "Env-\u003eString-\u003eLispVal-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:updateObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal namespace for variables\n\u003c/p\u003e",
          "module": "Language.Scheme.Variables",
          "name": "varNamespace",
          "package": "husk-scheme",
          "signature": "Char",
          "source": "src/Language-Scheme-Variables.html#varNamespace",
          "type": "function"
        },
        "index": {
          "description": "Internal namespace for variables",
          "hierarchy": "Language Scheme Variables",
          "module": "Language.Scheme.Variables",
          "name": "varNamespace",
          "package": "husk-scheme",
          "partial": "Namespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme/docs/Language-Scheme-Variables.html#v:varNamespace"
      }
    }
  ]
]