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
        "word": "simple-pascal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Builtin",
          "name": "Builtin",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Builtin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Pascal Builtin",
          "module": "Language.Pascal.Builtin",
          "name": "Builtin",
          "package": "simple-pascal",
          "partial": "Builtin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Builtin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of builtin functions\n\u003c/p\u003e",
          "module": "Language.Pascal.Builtin",
          "name": "builtinFunctions",
          "package": "simple-pascal",
          "signature": "[(Id, Type, Generate ())]",
          "source": "src/Language-Pascal-Builtin.html#builtinFunctions",
          "type": "function"
        },
        "index": {
          "description": "List of builtin functions",
          "hierarchy": "Language Pascal Builtin",
          "module": "Language.Pascal.Builtin",
          "name": "builtinFunctions",
          "normalized": "[(Id,Type,Generate())]",
          "package": "simple-pascal",
          "partial": "Functions",
          "signature": "[(Id,Type,Generate())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Builtin.html#v:builtinFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate instruction\n\u003c/p\u003e",
          "module": "Language.Pascal.Builtin",
          "name": "i",
          "package": "simple-pascal",
          "signature": "Instruction -\u003e Generate ()",
          "source": "src/Language-Pascal-Builtin.html#i",
          "type": "function"
        },
        "index": {
          "description": "Generate instruction",
          "hierarchy": "Language Pascal Builtin",
          "module": "Language.Pascal.Builtin",
          "name": "i",
          "normalized": "Instruction-\u003eGenerate()",
          "package": "simple-pascal",
          "signature": "Instruction-\u003eGenerate()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Builtin.html#v:i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf named symbol is builtin, return it's definition\n\u003c/p\u003e",
          "module": "Language.Pascal.Builtin",
          "name": "lookupBuiltin",
          "package": "simple-pascal",
          "signature": "Id -\u003e Maybe (Generate ())",
          "source": "src/Language-Pascal-Builtin.html#lookupBuiltin",
          "type": "function"
        },
        "index": {
          "description": "If named symbol is builtin return it definition",
          "hierarchy": "Language Pascal Builtin",
          "module": "Language.Pascal.Builtin",
          "name": "lookupBuiltin",
          "normalized": "Id-\u003eMaybe(Generate())",
          "package": "simple-pascal",
          "partial": "Builtin",
          "signature": "Id-\u003eMaybe(Generate())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Builtin.html#v:lookupBuiltin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate PUSH instruction\n\u003c/p\u003e",
          "module": "Language.Pascal.Builtin",
          "name": "push",
          "package": "simple-pascal",
          "signature": "a -\u003e Generate ()",
          "source": "src/Language-Pascal-Builtin.html#push",
          "type": "function"
        },
        "index": {
          "description": "Generate PUSH instruction",
          "hierarchy": "Language Pascal Builtin",
          "module": "Language.Pascal.Builtin",
          "name": "push",
          "normalized": "a-\u003eGenerate()",
          "package": "simple-pascal",
          "signature": "a-\u003eGenerate()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Builtin.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.CodeGen",
          "name": "CodeGen",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-CodeGen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Pascal CodeGen",
          "module": "Language.Pascal.CodeGen",
          "name": "CodeGen",
          "package": "simple-pascal",
          "partial": "Code Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-CodeGen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.CodeGen",
          "name": "CodeGen",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-CodeGen.html#CodeGen",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Pascal CodeGen",
          "module": "Language.Pascal.CodeGen",
          "name": "CodeGen",
          "package": "simple-pascal",
          "partial": "Code Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-CodeGen.html#t:CodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.CodeGen",
          "name": "generate",
          "package": "simple-pascal",
          "signature": "a -\u003e Generate ()",
          "source": "src/Language-Pascal-CodeGen.html#generate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Pascal CodeGen",
          "module": "Language.Pascal.CodeGen",
          "name": "generate",
          "normalized": "a-\u003eGenerate()",
          "package": "simple-pascal",
          "signature": "a-\u003eGenerate()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-CodeGen.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun code generator\n\u003c/p\u003e",
          "module": "Language.Pascal.CodeGen",
          "name": "runCodeGen",
          "package": "simple-pascal",
          "signature": "Generate () -\u003e Code",
          "source": "src/Language-Pascal-CodeGen.html#runCodeGen",
          "type": "function"
        },
        "index": {
          "description": "Run code generator",
          "hierarchy": "Language Pascal CodeGen",
          "module": "Language.Pascal.CodeGen",
          "name": "runCodeGen",
          "normalized": "Generate()-\u003eCode",
          "package": "simple-pascal",
          "partial": "Code Gen",
          "signature": "Generate()-\u003eCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-CodeGen.html#v:runCodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Parser",
          "name": "Parser",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Pascal Parser",
          "module": "Language.Pascal.Parser",
          "name": "Parser",
          "package": "simple-pascal",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Parser",
          "name": "pProgram",
          "package": "simple-pascal",
          "signature": "Parser (Program :~ SrcPos)",
          "source": "src/Language-Pascal-Parser.html#pProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Parser",
          "module": "Language.Pascal.Parser",
          "name": "pProgram",
          "package": "simple-pascal",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Parser.html#v:pProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Parser",
          "name": "parseSource",
          "package": "simple-pascal",
          "signature": "FilePath -\u003e IO (Program :~ SrcPos)",
          "source": "src/Language-Pascal-Parser.html#parseSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Parser",
          "module": "Language.Pascal.Parser",
          "name": "parseSource",
          "normalized": "FilePath-\u003eIO(Program SrcPos)",
          "package": "simple-pascal",
          "partial": "Source",
          "signature": "FilePath-\u003eIO(Program SrcPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Parser.html#v:parseSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.TypeCheck",
          "name": "TypeCheck",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-TypeCheck.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Pascal TypeCheck",
          "module": "Language.Pascal.TypeCheck",
          "name": "TypeCheck",
          "package": "simple-pascal",
          "partial": "Type Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-TypeCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbol table of builtin symbols\n\u003c/p\u003e",
          "module": "Language.Pascal.TypeCheck",
          "name": "builtinSymbols",
          "package": "simple-pascal",
          "signature": "Map Id Symbol",
          "source": "src/Language-Pascal-TypeCheck.html#builtinSymbols",
          "type": "function"
        },
        "index": {
          "description": "Symbol table of builtin symbols",
          "hierarchy": "Language Pascal TypeCheck",
          "module": "Language.Pascal.TypeCheck",
          "name": "builtinSymbols",
          "package": "simple-pascal",
          "partial": "Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-TypeCheck.html#v:builtinSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.TypeCheck",
          "name": "checkSource",
          "package": "simple-pascal",
          "signature": "FilePath -\u003e IO (Program :~ TypeAnn)",
          "source": "src/Language-Pascal-TypeCheck.html#checkSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal TypeCheck",
          "module": "Language.Pascal.TypeCheck",
          "name": "checkSource",
          "normalized": "FilePath-\u003eIO(Program TypeAnn)",
          "package": "simple-pascal",
          "partial": "Source",
          "signature": "FilePath-\u003eIO(Program TypeAnn)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-TypeCheck.html#v:checkSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.TypeCheck",
          "name": "checkTypes",
          "package": "simple-pascal",
          "signature": "(Program :~ SrcPos) -\u003e Program :~ TypeAnn",
          "source": "src/Language-Pascal-TypeCheck.html#checkTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal TypeCheck",
          "module": "Language.Pascal.TypeCheck",
          "name": "checkTypes",
          "normalized": "(Program SrcPos)-\u003eProgram TypeAnn",
          "package": "simple-pascal",
          "partial": "Types",
          "signature": "(Program SrcPos)-\u003eProgram TypeAnn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-TypeCheck.html#v:checkTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Types",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Types",
          "package": "simple-pascal",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive annotated type\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": ":~",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#%3A~",
          "type": "type"
        },
        "index": {
          "description": "Recursive annotated type",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": ":~",
          "package": "simple-pascal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t::-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach annotation to node\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Annotate",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Annotate",
          "type": "data"
        },
        "index": {
          "description": "Attach annotation to node",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Annotate",
          "package": "simple-pascal",
          "partial": "Annotate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupported binary operations\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "BinOp",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "data"
        },
        "index": {
          "description": "Supported binary operations",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "BinOp",
          "package": "simple-pascal",
          "partial": "Bin Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Check",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Check",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Check",
          "package": "simple-pascal",
          "partial": "Check",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType checker state\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "CheckState",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#CheckState",
          "type": "data"
        },
        "index": {
          "description": "Type checker state",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "CheckState",
          "package": "simple-pascal",
          "partial": "Check State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:CheckState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Checker",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Checker",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Checker",
          "package": "simple-pascal",
          "partial": "Checker",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Checker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode generator state\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "CodeGenState",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#CodeGenState",
          "type": "data"
        },
        "index": {
          "description": "Code generator state",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "CodeGenState",
          "package": "simple-pascal",
          "partial": "Code Gen State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:CodeGenState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiler context (where we are?)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Context",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Context",
          "type": "data"
        },
        "index": {
          "description": "Compiler context where we are",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Context",
          "package": "simple-pascal",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpressions\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Expression",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Expression",
          "type": "data"
        },
        "index": {
          "description": "Expressions",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Expression",
          "package": "simple-pascal",
          "partial": "Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction (or procedure)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Function",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Function",
          "type": "data"
        },
        "index": {
          "description": "Function or procedure",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Function",
          "package": "simple-pascal",
          "partial": "Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Generate",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Generate",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Generate",
          "package": "simple-pascal",
          "partial": "Generate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for symbol identifiers\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Id",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Id",
          "type": "type"
        },
        "index": {
          "description": "Type for symbol identifiers",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Id",
          "package": "simple-pascal",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssignment LHS value: variable or array item\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "LValue",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#LValue",
          "type": "data"
        },
        "index": {
          "description": "Assignment LHS value variable or array item",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "LValue",
          "package": "simple-pascal",
          "partial": "LValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:LValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral values\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Lit",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Lit",
          "type": "data"
        },
        "index": {
          "description": "Literal values",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Lit",
          "package": "simple-pascal",
          "partial": "Lit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Program",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Program",
          "type": "data"
        },
        "index": {
          "description": "Program",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Program",
          "package": "simple-pascal",
          "partial": "Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition of node in the source code\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "SrcPos",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#SrcPos",
          "type": "data"
        },
        "index": {
          "description": "Position of node in the source code",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "SrcPos",
          "package": "simple-pascal",
          "partial": "Src Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:SrcPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram statements\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Statement",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "Program statements",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Statement",
          "package": "simple-pascal",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbol\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Symbol",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Symbol",
          "type": "data"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Symbol",
          "package": "simple-pascal",
          "partial": "Symbol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbol table\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "SymbolTable",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#SymbolTable",
          "type": "type"
        },
        "index": {
          "description": "Symbol table",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "SymbolTable",
          "package": "simple-pascal",
          "partial": "Symbol Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:SymbolTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiler error\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "TError",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#TError",
          "type": "data"
        },
        "index": {
          "description": "Compiler error",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TError",
          "package": "simple-pascal",
          "partial": "TError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:TError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupported data types\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Type",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Supported data types",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Type",
          "package": "simple-pascal",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode type info\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "TypeAnn",
          "package": "simple-pascal",
          "source": "src/Language-Pascal-Types.html#TypeAnn",
          "type": "data"
        },
        "index": {
          "description": "Node type info",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TypeAnn",
          "package": "simple-pascal",
          "partial": "Type Ann",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#t:TypeAnn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake symbol from it's name and type\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "(#)",
          "package": "simple-pascal",
          "signature": "Id -\u003e Type -\u003e Symbol",
          "source": "src/Language-Pascal-Types.html#%23",
          "type": "function"
        },
        "index": {
          "description": "Make symbol from it name and type",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "(#) #",
          "normalized": "Id-\u003eType-\u003eSymbol",
          "package": "simple-pascal",
          "signature": "Id-\u003eType-\u003eSymbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Add",
          "package": "simple-pascal",
          "signature": "Add",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Add",
          "package": "simple-pascal",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Annotate",
          "package": "simple-pascal",
          "signature": "Annotate",
          "source": "src/Language-Pascal-Types.html#Annotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Annotate",
          "package": "simple-pascal",
          "partial": "Annotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003earray item\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "ArrayItem",
          "package": "simple-pascal",
          "signature": "ArrayItem Id (Expression :~ a)",
          "source": "src/Language-Pascal-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "array item",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "ArrayItem",
          "package": "simple-pascal",
          "partial": "Array Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:ArrayItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elvalue := expression;\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Assign",
          "package": "simple-pascal",
          "signature": "Assign (LValue :~ a) (Expression :~ a)",
          "source": "src/Language-Pascal-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "lvalue expression",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Assign",
          "package": "simple-pascal",
          "partial": "Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebreak (for loop)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Break",
          "package": "simple-pascal",
          "signature": "Break",
          "source": "src/Language-Pascal-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "break for loop",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Break",
          "package": "simple-pascal",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealready generated code\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "CGState",
          "package": "simple-pascal",
          "signature": "CGState",
          "source": "src/Language-Pascal-Types.html#CodeGenState",
          "type": "function"
        },
        "index": {
          "description": "already generated code",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "CGState",
          "package": "simple-pascal",
          "partial": "CGState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:CGState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctionName(arguments)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Call",
          "package": "simple-pascal",
          "signature": "Call Id [Expression :~ a]",
          "source": "src/Language-Pascal-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "functionName arguments",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Call",
          "normalized": "Call Id[Expression a]",
          "package": "simple-pascal",
          "partial": "Call",
          "signature": "Call Id[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Check",
          "package": "simple-pascal",
          "signature": "Check",
          "source": "src/Language-Pascal-Types.html#Check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Check",
          "package": "simple-pascal",
          "partial": "Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "CheckState",
          "package": "simple-pascal",
          "signature": "CheckState",
          "source": "src/Language-Pascal-Types.html#CheckState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "CheckState",
          "package": "simple-pascal",
          "partial": "Check State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:CheckState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtnune (for loop)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Continue",
          "package": "simple-pascal",
          "signature": "Continue",
          "source": "src/Language-Pascal-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "contnune for loop",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Continue",
          "package": "simple-pascal",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Div",
          "package": "simple-pascal",
          "signature": "Div",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Div",
          "package": "simple-pascal",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexit (procedure or program)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Exit",
          "package": "simple-pascal",
          "signature": "Exit",
          "source": "src/Language-Pascal-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "exit procedure or program",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Exit",
          "package": "simple-pascal",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor i := start to end do ...\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "For",
          "package": "simple-pascal",
          "signature": "For Id (Expression :~ a) (Expression :~ a) [Statement :~ a]",
          "source": "src/Language-Pascal-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "for start to end do",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "For",
          "normalized": "For Id(Expression a)(Expression a)[Statement a]",
          "package": "simple-pascal",
          "partial": "For",
          "signature": "For Id(Expression a)(Expression a)[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the for loop (started on nth instruction, with named counter)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "ForLoop",
          "package": "simple-pascal",
          "signature": "ForLoop Id Int",
          "source": "src/Language-Pascal-Types.html#Context",
          "type": "function"
        },
        "index": {
          "description": "In the for loop started on nth instruction with named counter",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "ForLoop",
          "package": "simple-pascal",
          "partial": "For Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:ForLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Function",
          "package": "simple-pascal",
          "signature": "Function",
          "source": "src/Language-Pascal-Types.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Function",
          "package": "simple-pascal",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Generate",
          "package": "simple-pascal",
          "signature": "Generate",
          "source": "src/Language-Pascal-Types.html#Generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Generate",
          "package": "simple-pascal",
          "partial": "Generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif expression then ... else ...\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "IfThenElse",
          "package": "simple-pascal",
          "signature": "IfThenElse (Expression :~ a) [Statement :~ a] [Statement :~ a]",
          "source": "src/Language-Pascal-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "if expression then else",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "IfThenElse",
          "normalized": "IfThenElse(Expression a)[Statement a][Statement a]",
          "package": "simple-pascal",
          "partial": "If Then Else",
          "signature": "IfThenElse(Expression a)[Statement a][Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:IfThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the named function (returning named type)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "InFunction",
          "package": "simple-pascal",
          "signature": "InFunction Id Type",
          "source": "src/Language-Pascal-Types.html#Context",
          "type": "function"
        },
        "index": {
          "description": "In the named function returning named type",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "InFunction",
          "package": "simple-pascal",
          "partial": "In Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:InFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "IsEQ",
          "package": "simple-pascal",
          "signature": "IsEQ",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "IsEQ",
          "package": "simple-pascal",
          "partial": "Is EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:IsEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "IsGT",
          "package": "simple-pascal",
          "signature": "IsGT",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "IsGT",
          "package": "simple-pascal",
          "partial": "Is GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:IsGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "IsLT",
          "package": "simple-pascal",
          "signature": "IsLT",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "IsLT",
          "package": "simple-pascal",
          "partial": "Is LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:IsLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "IsNE",
          "package": "simple-pascal",
          "signature": "IsNE",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "IsNE",
          "package": "simple-pascal",
          "partial": "Is NE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:IsNE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "LArray",
          "package": "simple-pascal",
          "signature": "LArray Id (Expression :~ a)",
          "source": "src/Language-Pascal-Types.html#LValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "LArray",
          "package": "simple-pascal",
          "partial": "LArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:LArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "LBool",
          "package": "simple-pascal",
          "signature": "LBool Bool",
          "source": "src/Language-Pascal-Types.html#Lit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "LBool",
          "package": "simple-pascal",
          "partial": "LBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:LBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "LField",
          "package": "simple-pascal",
          "signature": "LField Id Id",
          "source": "src/Language-Pascal-Types.html#LValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "LField",
          "package": "simple-pascal",
          "partial": "LField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:LField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "LInteger",
          "package": "simple-pascal",
          "signature": "LInteger Integer",
          "source": "src/Language-Pascal-Types.html#Lit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "LInteger",
          "package": "simple-pascal",
          "partial": "LInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:LInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "LString",
          "package": "simple-pascal",
          "signature": "LString String",
          "source": "src/Language-Pascal-Types.html#Lit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "LString",
          "package": "simple-pascal",
          "partial": "LString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:LString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "LVariable",
          "package": "simple-pascal",
          "signature": "LVariable Id",
          "source": "src/Language-Pascal-Types.html#LValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "LVariable",
          "package": "simple-pascal",
          "partial": "LVariable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:LVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eliteral value\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Literal",
          "package": "simple-pascal",
          "signature": "Literal Lit",
          "source": "src/Language-Pascal-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "literal value",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Literal",
          "package": "simple-pascal",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Mod",
          "package": "simple-pascal",
          "signature": "Mod",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Mod",
          "package": "simple-pascal",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Mul",
          "package": "simple-pascal",
          "signature": "Mul",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Mul",
          "package": "simple-pascal",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary operation (x+y etc)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Op",
          "package": "simple-pascal",
          "signature": "Op BinOp (Expression :~ a) (Expression :~ a)",
          "source": "src/Language-Pascal-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "binary operation etc",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Op",
          "package": "simple-pascal",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutside program body or functions\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Outside",
          "package": "simple-pascal",
          "signature": "Outside",
          "source": "src/Language-Pascal-Types.html#Context",
          "type": "function"
        },
        "index": {
          "description": "Outside program body or functions",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Outside",
          "package": "simple-pascal",
          "partial": "Outside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Outside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Pow",
          "package": "simple-pascal",
          "signature": "Pow",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Pow",
          "package": "simple-pascal",
          "partial": "Pow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocedureName(arguments);\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Procedure",
          "package": "simple-pascal",
          "signature": "Procedure Id [Expression :~ a]",
          "source": "src/Language-Pascal-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "procedureName arguments",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Procedure",
          "normalized": "Procedure Id[Expression a]",
          "package": "simple-pascal",
          "partial": "Procedure",
          "signature": "Procedure Id[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Procedure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Program",
          "package": "simple-pascal",
          "signature": "Program",
          "source": "src/Language-Pascal-Types.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Program",
          "package": "simple-pascal",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the program body\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "ProgramBody",
          "package": "simple-pascal",
          "signature": "ProgramBody",
          "source": "src/Language-Pascal-Types.html#Context",
          "type": "function"
        },
        "index": {
          "description": "In the program body",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "ProgramBody",
          "package": "simple-pascal",
          "partial": "Program Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:ProgramBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecord field\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "RecordField",
          "package": "simple-pascal",
          "signature": "RecordField Id Id",
          "source": "src/Language-Pascal-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "record field",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "RecordField",
          "package": "simple-pascal",
          "partial": "Record Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:RecordField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn expression;\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Return",
          "package": "simple-pascal",
          "signature": "Return (Expression :~ a)",
          "source": "src/Language-Pascal-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "return expression",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Return",
          "package": "simple-pascal",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "SrcPos",
          "package": "simple-pascal",
          "signature": "SrcPos",
          "source": "src/Language-Pascal-Types.html#SrcPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "SrcPos",
          "package": "simple-pascal",
          "partial": "Src Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:SrcPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Sub",
          "package": "simple-pascal",
          "signature": "Sub",
          "source": "src/Language-Pascal-Types.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Sub",
          "package": "simple-pascal",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "Symbol",
          "package": "simple-pascal",
          "signature": "Symbol",
          "source": "src/Language-Pascal-Types.html#Symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Symbol",
          "package": "simple-pascal",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany value (dynamic typing)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "TAny",
          "package": "simple-pascal",
          "signature": "TAny",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "any value dynamic typing",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TAny",
          "package": "simple-pascal",
          "partial": "TAny",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003earray of some type\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "TArray",
          "package": "simple-pascal",
          "signature": "TArray Integer Type",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "array of some type",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TArray",
          "package": "simple-pascal",
          "partial": "TArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "TBool",
          "package": "simple-pascal",
          "signature": "TBool",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TBool",
          "package": "simple-pascal",
          "partial": "TBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "TError",
          "package": "simple-pascal",
          "signature": "TError",
          "source": "src/Language-Pascal-Types.html#TError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TError",
          "package": "simple-pascal",
          "partial": "TError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecord field: field index and type\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "TField",
          "package": "simple-pascal",
          "signature": "TField Int Type",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "record field field index and type",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TField",
          "package": "simple-pascal",
          "partial": "TField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformal arguments types and return type\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "TFunction",
          "package": "simple-pascal",
          "signature": "TFunction [Type] Type",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "formal arguments types and return type",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TFunction",
          "normalized": "TFunction[Type]Type",
          "package": "simple-pascal",
          "partial": "TFunction",
          "signature": "TFunction[Type]Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "TInteger",
          "package": "simple-pascal",
          "signature": "TInteger",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TInteger",
          "package": "simple-pascal",
          "partial": "TInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecord\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "TRecord",
          "package": "simple-pascal",
          "signature": "TRecord [(Id, Type)]",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "record",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TRecord",
          "normalized": "TRecord[(Id,Type)]",
          "package": "simple-pascal",
          "partial": "TRecord",
          "signature": "TRecord[(Id,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "TString",
          "package": "simple-pascal",
          "signature": "TString",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TString",
          "package": "simple-pascal",
          "partial": "TString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euser defined type\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "TUser",
          "package": "simple-pascal",
          "signature": "TUser Id",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "user defined type",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TUser",
          "package": "simple-pascal",
          "partial": "TUser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "TVoid",
          "package": "simple-pascal",
          "signature": "TVoid",
          "source": "src/Language-Pascal-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TVoid",
          "package": "simple-pascal",
          "partial": "TVoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "TypeAnn",
          "package": "simple-pascal",
          "signature": "TypeAnn",
          "source": "src/Language-Pascal-Types.html#TypeAnn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "TypeAnn",
          "package": "simple-pascal",
          "partial": "Type Ann",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:TypeAnn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunknown context (== internal error)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Unknown",
          "package": "simple-pascal",
          "signature": "Unknown",
          "source": "src/Language-Pascal-Types.html#Context",
          "type": "function"
        },
        "index": {
          "description": "unknown context internal error",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Unknown",
          "package": "simple-pascal",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enamed variable value\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "Variable",
          "package": "simple-pascal",
          "signature": "Variable Id",
          "source": "src/Language-Pascal-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "named variable value",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "Variable",
          "package": "simple-pascal",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange annotation of annotated node\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "annotate",
          "package": "simple-pascal",
          "signature": "ann -\u003e Annotate node old -\u003e Annotate node ann",
          "source": "src/Language-Pascal-Types.html#annotate",
          "type": "function"
        },
        "index": {
          "description": "Change annotation of annotated node",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "annotate",
          "normalized": "a-\u003eAnnotate b c-\u003eAnnotate b a",
          "package": "simple-pascal",
          "signature": "ann-\u003eAnnotate node old-\u003eAnnotate node ann",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "annotation",
          "package": "simple-pascal",
          "signature": "ann",
          "source": "src/Language-Pascal-Types.html#Annotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "annotation",
          "package": "simple-pascal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "ckColumn",
          "package": "simple-pascal",
          "signature": "Int",
          "source": "src/Language-Pascal-Types.html#CheckState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "ckColumn",
          "package": "simple-pascal",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:ckColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "ckLine",
          "package": "simple-pascal",
          "signature": "Int",
          "source": "src/Language-Pascal-Types.html#CheckState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "ckLine",
          "package": "simple-pascal",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:ckLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "constants",
          "package": "simple-pascal",
          "signature": "[(Id, Lit)]",
          "source": "src/Language-Pascal-Types.html#CodeGenState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "constants",
          "normalized": "[(Id,Lit)]",
          "package": "simple-pascal",
          "signature": "[(Id,Lit)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:constants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "content",
          "package": "simple-pascal",
          "signature": "node",
          "source": "src/Language-Pascal-Types.html#Annotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "content",
          "package": "simple-pascal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext ID, for labels and variable names generation\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "contextId",
          "package": "simple-pascal",
          "signature": "Context -\u003e String",
          "source": "src/Language-Pascal-Types.html#contextId",
          "type": "function"
        },
        "index": {
          "description": "Context ID for labels and variable names generation",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "contextId",
          "normalized": "Context-\u003eString",
          "package": "simple-pascal",
          "partial": "Id",
          "signature": "Context-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:contextId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "contexts",
          "package": "simple-pascal",
          "signature": "[Context]",
          "source": "src/Language-Pascal-Types.html#CheckState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "contexts",
          "normalized": "[Context]",
          "package": "simple-pascal",
          "signature": "[Context]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:contexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent contexts stack\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "currentContext",
          "package": "simple-pascal",
          "signature": "[Context]",
          "source": "src/Language-Pascal-Types.html#CodeGenState",
          "type": "function"
        },
        "index": {
          "description": "current contexts stack",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "currentContext",
          "normalized": "[Context]",
          "package": "simple-pascal",
          "partial": "Context",
          "signature": "[Context]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:currentContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "dropContext",
          "package": "simple-pascal",
          "signature": "m ()",
          "source": "src/Language-Pascal-Types.html#dropContext",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "dropContext",
          "normalized": "a()",
          "package": "simple-pascal",
          "partial": "Context",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:dropContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting code generator state\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "emptyGState",
          "package": "simple-pascal",
          "signature": "CodeGenState",
          "source": "src/Language-Pascal-Types.html#emptyGState",
          "type": "function"
        },
        "index": {
          "description": "Starting code generator state",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "emptyGState",
          "package": "simple-pascal",
          "partial": "GState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:emptyGState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "enterContext",
          "package": "simple-pascal",
          "signature": "Context -\u003e m ()",
          "source": "src/Language-Pascal-Types.html#enterContext",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "enterContext",
          "normalized": "Context-\u003ea()",
          "package": "simple-pascal",
          "partial": "Context",
          "signature": "Context-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:enterContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "errColumn",
          "package": "simple-pascal",
          "signature": "Int",
          "source": "src/Language-Pascal-Types.html#TError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "errColumn",
          "package": "simple-pascal",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:errColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "errContext",
          "package": "simple-pascal",
          "signature": "Context",
          "source": "src/Language-Pascal-Types.html#TError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "errContext",
          "package": "simple-pascal",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:errContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "errLine",
          "package": "simple-pascal",
          "signature": "Int",
          "source": "src/Language-Pascal-Types.html#TError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "errLine",
          "package": "simple-pascal",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:errLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "errMessage",
          "package": "simple-pascal",
          "signature": "String",
          "source": "src/Language-Pascal-Types.html#TError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "errMessage",
          "package": "simple-pascal",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:errMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "failCheck",
          "package": "simple-pascal",
          "signature": "String -\u003e m a",
          "source": "src/Language-Pascal-Types.html#failCheck",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "failCheck",
          "normalized": "String-\u003ea b",
          "package": "simple-pascal",
          "partial": "Check",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:failCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction body statements\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "fnBody",
          "package": "simple-pascal",
          "signature": "[Statement :~ a]",
          "source": "src/Language-Pascal-Types.html#Function",
          "type": "function"
        },
        "index": {
          "description": "function body statements",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "fnBody",
          "normalized": "[Statement a]",
          "package": "simple-pascal",
          "partial": "Body",
          "signature": "[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:fnBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformal arguments\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "fnFormalArgs",
          "package": "simple-pascal",
          "signature": "[Annotate Symbol a]",
          "source": "src/Language-Pascal-Types.html#Function",
          "type": "function"
        },
        "index": {
          "description": "formal arguments",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "fnFormalArgs",
          "normalized": "[Annotate Symbol a]",
          "package": "simple-pascal",
          "partial": "Formal Args",
          "signature": "[Annotate Symbol a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:fnFormalArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction name\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "fnName",
          "package": "simple-pascal",
          "signature": "String",
          "source": "src/Language-Pascal-Types.html#Function",
          "type": "function"
        },
        "index": {
          "description": "function name",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "fnName",
          "package": "simple-pascal",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:fnName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn type (if TVoid then this is procedure)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "fnResultType",
          "package": "simple-pascal",
          "signature": "Type",
          "source": "src/Language-Pascal-Types.html#Function",
          "type": "function"
        },
        "index": {
          "description": "return type if TVoid then this is procedure",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "fnResultType",
          "package": "simple-pascal",
          "partial": "Result Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:fnResultType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocal variables\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "fnVars",
          "package": "simple-pascal",
          "signature": "[Annotate Symbol a]",
          "source": "src/Language-Pascal-Types.html#Function",
          "type": "function"
        },
        "index": {
          "description": "local variables",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "fnVars",
          "normalized": "[Annotate Symbol a]",
          "package": "simple-pascal",
          "partial": "Vars",
          "signature": "[Annotate Symbol a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:fnVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "generated",
          "package": "simple-pascal",
          "signature": "Code",
          "source": "src/Language-Pascal-Types.html#CodeGenState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "generated",
          "package": "simple-pascal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:generated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "inContext",
          "package": "simple-pascal",
          "signature": "Context -\u003e m a -\u003e m a",
          "source": "src/Language-Pascal-Types.html#inContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "inContext",
          "normalized": "Context-\u003ea b-\u003ea b",
          "package": "simple-pascal",
          "partial": "Context",
          "signature": "Context-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:inContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "localSymbols",
          "package": "simple-pascal",
          "signature": "Map Id Symbol",
          "source": "src/Language-Pascal-Types.html#TypeAnn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "localSymbols",
          "package": "simple-pascal",
          "partial": "Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:localSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprogram body statements\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "progBody",
          "package": "simple-pascal",
          "signature": "[Statement :~ a]",
          "source": "src/Language-Pascal-Types.html#Program",
          "type": "function"
        },
        "index": {
          "description": "program body statements",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "progBody",
          "normalized": "[Statement a]",
          "package": "simple-pascal",
          "partial": "Body",
          "signature": "[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:progBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstants\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "progConsts",
          "package": "simple-pascal",
          "signature": "[(Id, Expression :~ a)]",
          "source": "src/Language-Pascal-Types.html#Program",
          "type": "function"
        },
        "index": {
          "description": "constants",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "progConsts",
          "normalized": "[(Id,Expression a)]",
          "package": "simple-pascal",
          "partial": "Consts",
          "signature": "[(Id,Expression a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:progConsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctions\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "progFunctions",
          "package": "simple-pascal",
          "signature": "[Function :~ a]",
          "source": "src/Language-Pascal-Types.html#Program",
          "type": "function"
        },
        "index": {
          "description": "functions",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "progFunctions",
          "normalized": "[Function a]",
          "package": "simple-pascal",
          "partial": "Functions",
          "signature": "[Function a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:progFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euser defined types\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "progTypes",
          "package": "simple-pascal",
          "signature": "Map Id Type",
          "source": "src/Language-Pascal-Types.html#Program",
          "type": "function"
        },
        "index": {
          "description": "user defined types",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "progTypes",
          "package": "simple-pascal",
          "partial": "Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:progTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eglobal variables\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "progVariables",
          "package": "simple-pascal",
          "signature": "[Annotate Symbol a]",
          "source": "src/Language-Pascal-Types.html#Program",
          "type": "function"
        },
        "index": {
          "description": "global variables",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "progVariables",
          "normalized": "[Annotate Symbol a]",
          "package": "simple-pascal",
          "partial": "Variables",
          "signature": "[Annotate Symbol a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:progVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equote (word declaration) mode\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "quoteMode",
          "package": "simple-pascal",
          "signature": "Bool",
          "source": "src/Language-Pascal-Types.html#CodeGenState",
          "type": "function"
        },
        "index": {
          "description": "quote word declaration mode",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "quoteMode",
          "package": "simple-pascal",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:quoteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "runCheck",
          "package": "simple-pascal",
          "signature": "ErrorT TError (State CheckState) a",
          "source": "src/Language-Pascal-Types.html#Check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "runCheck",
          "package": "simple-pascal",
          "partial": "Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:runCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "runGenerate",
          "package": "simple-pascal",
          "signature": "ErrorT TError (State CodeGenState) a",
          "source": "src/Language-Pascal-Types.html#Generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "runGenerate",
          "package": "simple-pascal",
          "partial": "Generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:runGenerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "setType",
          "package": "simple-pascal",
          "signature": "Annotate Symbol a -\u003e Type -\u003e Annotate Symbol a",
          "source": "src/Language-Pascal-Types.html#setType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "setType",
          "normalized": "Annotate Symbol a-\u003eType-\u003eAnnotate Symbol a",
          "package": "simple-pascal",
          "partial": "Type",
          "signature": "Annotate Symbol a-\u003eType-\u003eAnnotate Symbol a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:setType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "showSymbol",
          "package": "simple-pascal",
          "signature": "Symbol -\u003e String",
          "source": "src/Language-Pascal-Types.html#showSymbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "showSymbol",
          "normalized": "Symbol-\u003eString",
          "package": "simple-pascal",
          "partial": "Symbol",
          "signature": "Symbol-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:showSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "srcColumn",
          "package": "simple-pascal",
          "signature": "Int",
          "source": "src/Language-Pascal-Types.html#SrcPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "srcColumn",
          "package": "simple-pascal",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:srcColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "srcLine",
          "package": "simple-pascal",
          "signature": "Int",
          "source": "src/Language-Pascal-Types.html#SrcPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "srcLine",
          "package": "simple-pascal",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:srcLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "srcPos",
          "package": "simple-pascal",
          "signature": "SrcPos",
          "source": "src/Language-Pascal-Types.html#TypeAnn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "srcPos",
          "package": "simple-pascal",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:srcPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource column\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "symbolDefCol",
          "package": "simple-pascal",
          "signature": "Int",
          "source": "src/Language-Pascal-Types.html#Symbol",
          "type": "function"
        },
        "index": {
          "description": "Source column",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "symbolDefCol",
          "package": "simple-pascal",
          "partial": "Def Col",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:symbolDefCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource line where symbol was defined\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "symbolDefLine",
          "package": "simple-pascal",
          "signature": "Int",
          "source": "src/Language-Pascal-Types.html#Symbol",
          "type": "function"
        },
        "index": {
          "description": "Source line where symbol was defined",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "symbolDefLine",
          "package": "simple-pascal",
          "partial": "Def Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:symbolDefLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "symbolName",
          "package": "simple-pascal",
          "signature": "Id",
          "source": "src/Language-Pascal-Types.html#Symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "symbolName",
          "package": "simple-pascal",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:symbolName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "symbolNameC",
          "package": "simple-pascal",
          "signature": "Annotate Symbol ann -\u003e Id",
          "source": "src/Language-Pascal-Types.html#symbolNameC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "symbolNameC",
          "normalized": "Annotate Symbol a-\u003eId",
          "package": "simple-pascal",
          "partial": "Name",
          "signature": "Annotate Symbol ann-\u003eId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:symbolNameC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "symbolTable",
          "package": "simple-pascal",
          "signature": "SymbolTable",
          "source": "src/Language-Pascal-Types.html#CheckState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "symbolTable",
          "package": "simple-pascal",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:symbolTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "symbolType",
          "package": "simple-pascal",
          "signature": "Type",
          "source": "src/Language-Pascal-Types.html#Symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "symbolType",
          "package": "simple-pascal",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:symbolType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "symbolTypeC",
          "package": "simple-pascal",
          "signature": "Annotate Symbol ann -\u003e Type",
          "source": "src/Language-Pascal-Types.html#symbolTypeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "symbolTypeC",
          "normalized": "Annotate Symbol a-\u003eType",
          "package": "simple-pascal",
          "partial": "Type",
          "signature": "Annotate Symbol ann-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:symbolTypeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "typeOf",
          "package": "simple-pascal",
          "signature": "Type",
          "source": "src/Language-Pascal-Types.html#TypeAnn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "typeOf",
          "package": "simple-pascal",
          "partial": "Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "typeOfA",
          "package": "simple-pascal",
          "signature": "Annotate node TypeAnn -\u003e Type",
          "source": "src/Language-Pascal-Types.html#typeOfA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "typeOfA",
          "normalized": "Annotate a TypeAnn-\u003eType",
          "package": "simple-pascal",
          "partial": "Of",
          "signature": "Annotate node TypeAnn-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:typeOfA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "userConsts",
          "package": "simple-pascal",
          "signature": "[(Id, Expression :~ TypeAnn)]",
          "source": "src/Language-Pascal-Types.html#CheckState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "userConsts",
          "normalized": "[(Id,Expression TypeAnn)]",
          "package": "simple-pascal",
          "partial": "Consts",
          "signature": "[(Id,Expression TypeAnn)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:userConsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Pascal.Types",
          "name": "userTypes",
          "package": "simple-pascal",
          "signature": "Map Id Type",
          "source": "src/Language-Pascal-Types.html#CheckState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "userTypes",
          "package": "simple-pascal",
          "partial": "Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:userTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeclared variables (not used currently)\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "variables",
          "package": "simple-pascal",
          "signature": "[Id]",
          "source": "src/Language-Pascal-Types.html#CodeGenState",
          "type": "function"
        },
        "index": {
          "description": "declared variables not used currently",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "variables",
          "normalized": "[Id]",
          "package": "simple-pascal",
          "signature": "[Id]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:variables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach type info to node\n\u003c/p\u003e",
          "module": "Language.Pascal.Types",
          "name": "withType",
          "package": "simple-pascal",
          "signature": "Annotate a SrcPos -\u003e Type -\u003e Annotate a TypeAnn",
          "source": "src/Language-Pascal-Types.html#withType",
          "type": "function"
        },
        "index": {
          "description": "Attach type info to node",
          "hierarchy": "Language Pascal Types",
          "module": "Language.Pascal.Types",
          "name": "withType",
          "normalized": "Annotate a SrcPos-\u003eType-\u003eAnnotate a TypeAnn",
          "package": "simple-pascal",
          "partial": "Type",
          "signature": "Annotate a SrcPos-\u003eType-\u003eAnnotate a TypeAnn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-pascal/docs/Language-Pascal-Types.html#v:withType"
      }
    }
  ]
]