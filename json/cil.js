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
        "word": "cil"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Parse",
          "name": "Parse",
          "package": "cil",
          "source": "src/Language-CIL-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language CIL Parse",
          "module": "Language.CIL.Parse",
          "name": "Parse",
          "package": "cil",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a merged CIL program, given a file name and contents.\n\u003c/p\u003e",
          "module": "Language.CIL.Parse",
          "name": "parseCIL",
          "package": "cil",
          "signature": "String -\u003e ByteString -\u003e Stmt",
          "source": "src/Language-CIL-Parse.html#parseCIL",
          "type": "function"
        },
        "index": {
          "description": "Parses merged CIL program given file name and contents",
          "hierarchy": "Language CIL Parse",
          "module": "Language.CIL.Parse",
          "name": "parseCIL",
          "normalized": "String-\u003eByteString-\u003eStmt",
          "package": "cil",
          "partial": "CIL",
          "signature": "String-\u003eByteString-\u003eStmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Parse.html#v:parseCIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat the file position of something with ties to the orignial source, like a \u003ccode\u003e\u003ca\u003eStmt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.CIL.Parse",
          "name": "position",
          "package": "cil",
          "signature": "a -\u003e String",
          "source": "src/Language-CIL-Parse.html#position",
          "type": "function"
        },
        "index": {
          "description": "Format the file position of something with ties to the orignial source like Stmt or Expr",
          "hierarchy": "Language CIL Parse",
          "module": "Language.CIL.Parse",
          "name": "position",
          "normalized": "a-\u003eString",
          "package": "cil",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Parse.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "StmtCore",
          "package": "cil",
          "source": "src/Language-CIL-StmtCore.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "StmtCore",
          "package": "cil",
          "partial": "Stmt Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatements.\n\u003c/p\u003e",
          "module": "Language.CIL.StmtCore",
          "name": "Stmt",
          "package": "cil",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "data"
        },
        "index": {
          "description": "Statements",
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "Stmt",
          "package": "cil",
          "partial": "Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "AssignApply",
          "package": "cil",
          "signature": "AssignApply Expr Apply Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "AssignApply",
          "package": "cil",
          "partial": "Assign Apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:AssignApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "AssignExpr",
          "package": "cil",
          "signature": "AssignExpr Expr Expr Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "AssignExpr",
          "package": "cil",
          "partial": "Assign Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:AssignExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "Break",
          "package": "cil",
          "signature": "Break Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "Break",
          "package": "cil",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "Case",
          "package": "cil",
          "signature": "Case Expr Stmt Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "Case",
          "package": "cil",
          "partial": "Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "Compound",
          "package": "cil",
          "signature": "Compound [Name] [Stmt] Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "Compound",
          "normalized": "Compound[Name][Stmt]Position",
          "package": "cil",
          "partial": "Compound",
          "signature": "Compound[Name][Stmt]Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:Compound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "Default",
          "package": "cil",
          "signature": "Default Stmt Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "Default",
          "package": "cil",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "FunctionDef",
          "package": "cil",
          "signature": "FunctionDef Name Type [(Name, Type)] Stmt Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "FunctionDef",
          "normalized": "FunctionDef Name Type[(Name,Type)]Stmt Position",
          "package": "cil",
          "partial": "Function Def",
          "signature": "FunctionDef Name Type[(Name,Type)]Stmt Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:FunctionDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "Goto",
          "package": "cil",
          "signature": "Goto Name Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "Goto",
          "package": "cil",
          "partial": "Goto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:Goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "If",
          "package": "cil",
          "signature": "If Expr Stmt Stmt Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "If",
          "package": "cil",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "Null",
          "package": "cil",
          "signature": "Null",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "Null",
          "package": "cil",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "Return",
          "package": "cil",
          "signature": "Return (Maybe Expr) Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "Return",
          "package": "cil",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "StmtApply",
          "package": "cil",
          "signature": "StmtApply Apply Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "StmtApply",
          "package": "cil",
          "partial": "Stmt Apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:StmtApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "Switch",
          "package": "cil",
          "signature": "Switch Expr Stmt Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "Switch",
          "package": "cil",
          "partial": "Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:Switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "TypeDecl",
          "package": "cil",
          "signature": "TypeDecl Name Type Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "TypeDecl",
          "package": "cil",
          "partial": "Type Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:TypeDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "VariableDef",
          "package": "cil",
          "signature": "VariableDef Name Type (Maybe Init) Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "VariableDef",
          "package": "cil",
          "partial": "Variable Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:VariableDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtCore",
          "name": "While",
          "package": "cil",
          "signature": "While Expr Stmt Position",
          "source": "src/Language-CIL-StmtCore.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtCore",
          "module": "Language.CIL.StmtCore",
          "name": "While",
          "package": "cil",
          "partial": "While",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtCore.html#v:While"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtGoto",
          "name": "StmtGoto",
          "package": "cil",
          "source": "src/Language-CIL-StmtGoto.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language CIL StmtGoto",
          "module": "Language.CIL.StmtGoto",
          "name": "StmtGoto",
          "package": "cil",
          "partial": "Stmt Goto",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtGoto.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatements.\n\u003c/p\u003e",
          "module": "Language.CIL.StmtGoto",
          "name": "Stmt",
          "package": "cil",
          "source": "src/Language-CIL-StmtGoto.html#Stmt",
          "type": "data"
        },
        "index": {
          "description": "Statements",
          "hierarchy": "Language CIL StmtGoto",
          "module": "Language.CIL.StmtGoto",
          "name": "Stmt",
          "package": "cil",
          "partial": "Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtGoto.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtGoto",
          "name": "AssignExpr",
          "package": "cil",
          "signature": "AssignExpr Expr Expr Position",
          "source": "src/Language-CIL-StmtGoto.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtGoto",
          "module": "Language.CIL.StmtGoto",
          "name": "AssignExpr",
          "package": "cil",
          "partial": "Assign Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtGoto.html#v:AssignExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtGoto",
          "name": "Compound",
          "package": "cil",
          "signature": "Compound [Name] [Stmt] Position",
          "source": "src/Language-CIL-StmtGoto.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtGoto",
          "module": "Language.CIL.StmtGoto",
          "name": "Compound",
          "normalized": "Compound[Name][Stmt]Position",
          "package": "cil",
          "partial": "Compound",
          "signature": "Compound[Name][Stmt]Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtGoto.html#v:Compound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtGoto",
          "name": "Goto",
          "package": "cil",
          "signature": "Goto Name Position",
          "source": "src/Language-CIL-StmtGoto.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtGoto",
          "module": "Language.CIL.StmtGoto",
          "name": "Goto",
          "package": "cil",
          "partial": "Goto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtGoto.html#v:Goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtGoto",
          "name": "If",
          "package": "cil",
          "signature": "If Expr Stmt Stmt Position",
          "source": "src/Language-CIL-StmtGoto.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtGoto",
          "module": "Language.CIL.StmtGoto",
          "name": "If",
          "package": "cil",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtGoto.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtGoto",
          "name": "Null",
          "package": "cil",
          "signature": "Null",
          "source": "src/Language-CIL-StmtGoto.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtGoto",
          "module": "Language.CIL.StmtGoto",
          "name": "Null",
          "package": "cil",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtGoto.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtGoto",
          "name": "TypeDecl",
          "package": "cil",
          "signature": "TypeDecl Name Type Position",
          "source": "src/Language-CIL-StmtGoto.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtGoto",
          "module": "Language.CIL.StmtGoto",
          "name": "TypeDecl",
          "package": "cil",
          "partial": "Type Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtGoto.html#v:TypeDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.StmtGoto",
          "name": "VariableDef",
          "package": "cil",
          "signature": "VariableDef Name Type (Maybe Init) Position",
          "source": "src/Language-CIL-StmtGoto.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL StmtGoto",
          "module": "Language.CIL.StmtGoto",
          "name": "VariableDef",
          "package": "cil",
          "partial": "Variable Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-StmtGoto.html#v:VariableDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Types",
          "package": "cil",
          "source": "src/Language-CIL-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Types",
          "package": "cil",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction application.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Apply",
          "package": "cil",
          "source": "src/Language-CIL-Types.html#Apply",
          "type": "data"
        },
        "index": {
          "description": "Function application",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Apply",
          "package": "cil",
          "partial": "Apply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#t:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpressions.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Expr",
          "package": "cil",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "Expressions",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Expr",
          "package": "cil",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialization expressions.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Init",
          "package": "cil",
          "source": "src/Language-CIL-Types.html#Init",
          "type": "data"
        },
        "index": {
          "description": "Initialization expressions",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Init",
          "package": "cil",
          "partial": "Init",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#t:Init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifiers.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Name",
          "package": "cil",
          "source": "src/Language-CIL-Types.html#Name",
          "type": "type"
        },
        "index": {
          "description": "Identifiers",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Name",
          "package": "cil",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Type",
          "package": "cil",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Types",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Type",
          "package": "cil",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea + b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Add",
          "package": "cil",
          "signature": "Add Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Add",
          "package": "cil",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&a\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Adr",
          "package": "cil",
          "signature": "Adr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Adr",
          "package": "cil",
          "partial": "Adr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Adr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea & b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "And",
          "package": "cil",
          "signature": "And Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "And",
          "package": "cil",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Apply",
          "package": "cil",
          "signature": "Apply Expr [Expr]",
          "source": "src/Language-CIL-Types.html#Apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Apply",
          "normalized": "Apply Expr[Expr]",
          "package": "cil",
          "partial": "Apply",
          "signature": "Apply Expr[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Array",
          "package": "cil",
          "signature": "Array Int Type",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Array",
          "package": "cil",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "BitField",
          "package": "cil",
          "signature": "BitField Type [(Name, Int)]",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "BitField",
          "normalized": "BitField Type[(Name,Int)]",
          "package": "cil",
          "partial": "Bit Field",
          "signature": "BitField Type[(Name,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:BitField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(...) a\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Cast",
          "package": "cil",
          "signature": "Cast Type Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Cast",
          "package": "cil",
          "partial": "Cast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e~a\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Comp",
          "package": "cil",
          "signature": "Comp Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Comp",
          "package": "cil",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "ConstChar",
          "package": "cil",
          "signature": "ConstChar Char Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "ConstChar",
          "package": "cil",
          "partial": "Const Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:ConstChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "ConstFloat",
          "package": "cil",
          "signature": "ConstFloat Double Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "ConstFloat",
          "package": "cil",
          "partial": "Const Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:ConstFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "ConstInt",
          "package": "cil",
          "signature": "ConstInt Int Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "ConstInt",
          "package": "cil",
          "partial": "Const Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:ConstInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "ConstString",
          "package": "cil",
          "signature": "ConstString String Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "ConstString",
          "package": "cil",
          "partial": "Const String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:ConstString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea / b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Div",
          "package": "cil",
          "signature": "Div Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Div",
          "package": "cil",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Double",
          "package": "cil",
          "signature": "Double",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Double",
          "package": "cil",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Enum",
          "package": "cil",
          "signature": "Enum [(Name, Int)]",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Enum",
          "normalized": "Enum[(Name,Int)]",
          "package": "cil",
          "partial": "Enum",
          "signature": "Enum[(Name,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to an enum type.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "EnumRef",
          "package": "cil",
          "signature": "EnumRef Name",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "Reference to an enum type",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "EnumRef",
          "package": "cil",
          "partial": "Enum Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:EnumRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea == b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Eq",
          "package": "cil",
          "signature": "Eq Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Eq",
          "package": "cil",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Float",
          "package": "cil",
          "signature": "Float",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Float",
          "package": "cil",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Function",
          "package": "cil",
          "signature": "Function Type [Type]",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Function",
          "normalized": "Function Type[Type]",
          "package": "cil",
          "partial": "Function",
          "signature": "Function Type[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003e= b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Ge",
          "package": "cil",
          "signature": "Ge Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Ge",
          "package": "cil",
          "partial": "Ge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Ge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003e b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Gt",
          "package": "cil",
          "signature": "Gt Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Gt",
          "package": "cil",
          "partial": "Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e*a\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Ind",
          "package": "cil",
          "signature": "Ind Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Ind",
          "package": "cil",
          "partial": "Ind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Ind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea[b]\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Index",
          "package": "cil",
          "signature": "Index Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Index",
          "package": "cil",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Init",
          "package": "cil",
          "signature": "Init Expr",
          "source": "src/Language-CIL-Types.html#Init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Init",
          "package": "cil",
          "partial": "Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "InitList",
          "package": "cil",
          "signature": "InitList [Init]",
          "source": "src/Language-CIL-Types.html#Init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "InitList",
          "normalized": "InitList[Init]",
          "package": "cil",
          "partial": "Init List",
          "signature": "InitList[Init]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:InitList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Int16",
          "package": "cil",
          "signature": "Int16",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Int16",
          "package": "cil",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Int16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Int32",
          "package": "cil",
          "signature": "Int32",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Int32",
          "package": "cil",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Int32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Int8",
          "package": "cil",
          "signature": "Int8",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Int8",
          "package": "cil",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003c= b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Le",
          "package": "cil",
          "signature": "Le Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Le",
          "package": "cil",
          "partial": "Le",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003c b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Lt",
          "package": "cil",
          "signature": "Lt Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Lt",
          "package": "cil",
          "partial": "Lt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea.name\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Mem",
          "package": "cil",
          "signature": "Mem Expr Name Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "a.name",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Mem",
          "package": "cil",
          "partial": "Mem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea-\u003ename\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "MemInd",
          "package": "cil",
          "signature": "MemInd Expr Name Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "name",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "MemInd",
          "package": "cil",
          "partial": "Mem Ind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:MemInd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e-a\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Minus",
          "package": "cil",
          "signature": "Minus Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Minus",
          "package": "cil",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea * b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Mul",
          "package": "cil",
          "signature": "Mul Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Mul",
          "package": "cil",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e!a\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Neg",
          "package": "cil",
          "signature": "Neg Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Neg",
          "package": "cil",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea != b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Neq",
          "package": "cil",
          "signature": "Neq Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Neq",
          "package": "cil",
          "partial": "Neq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Neq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea | b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Or",
          "package": "cil",
          "signature": "Or Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Or",
          "package": "cil",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Ptr",
          "package": "cil",
          "signature": "Ptr Type",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Ptr",
          "package": "cil",
          "partial": "Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea % b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Rmd",
          "package": "cil",
          "signature": "Rmd Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Rmd",
          "package": "cil",
          "partial": "Rmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Rmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003c\u003c b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Shl",
          "package": "cil",
          "signature": "Shl Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Shl",
          "package": "cil",
          "partial": "Shl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Shl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003e\u003e b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Shr",
          "package": "cil",
          "signature": "Shr Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Shr",
          "package": "cil",
          "partial": "Shr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Shr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esizeof(expr)\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "SizeE",
          "package": "cil",
          "signature": "SizeE Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "sizeof expr",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "SizeE",
          "package": "cil",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:SizeE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esizeof(type)\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "SizeT",
          "package": "cil",
          "signature": "SizeT Type Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "sizeof type",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "SizeT",
          "package": "cil",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:SizeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Struct",
          "package": "cil",
          "signature": "Struct [(Name, Type)]",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Struct",
          "normalized": "Struct[(Name,Type)]",
          "package": "cil",
          "partial": "Struct",
          "signature": "Struct[(Name,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to a struct type.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "StructRef",
          "package": "cil",
          "signature": "StructRef Name",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "Reference to struct type",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "StructRef",
          "package": "cil",
          "partial": "Struct Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:StructRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea - b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Sub",
          "package": "cil",
          "signature": "Sub Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Sub",
          "package": "cil",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Typedef",
          "package": "cil",
          "signature": "Typedef Type",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Typedef",
          "package": "cil",
          "partial": "Typedef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Typedef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to a previously defined typedef.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "TypedefRef",
          "package": "cil",
          "signature": "TypedefRef Name",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "Reference to previously defined typedef",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "TypedefRef",
          "package": "cil",
          "partial": "Typedef Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:TypedefRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Union",
          "package": "cil",
          "signature": "Union [(Name, Type)]",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Union",
          "normalized": "Union[(Name,Type)]",
          "package": "cil",
          "partial": "Union",
          "signature": "Union[(Name,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to a union type.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "UnionRef",
          "package": "cil",
          "signature": "UnionRef Name",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "Reference to union type",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "UnionRef",
          "package": "cil",
          "partial": "Union Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:UnionRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable reference.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Var",
          "package": "cil",
          "signature": "Var Name Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Variable reference",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Var",
          "package": "cil",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Void",
          "package": "cil",
          "signature": "Void",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Void",
          "package": "cil",
          "partial": "Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA volatile qualified type.\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Volatile",
          "package": "cil",
          "signature": "Volatile Type",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "description": "volatile qualified type",
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Volatile",
          "package": "cil",
          "partial": "Volatile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Volatile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Word16",
          "package": "cil",
          "signature": "Word16",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Word16",
          "package": "cil",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Word16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Word32",
          "package": "cil",
          "signature": "Word32",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Word32",
          "package": "cil",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIL.Types",
          "name": "Word8",
          "package": "cil",
          "signature": "Word8",
          "source": "src/Language-CIL-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Word8",
          "package": "cil",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea ^ b\n\u003c/p\u003e",
          "module": "Language.CIL.Types",
          "name": "Xor",
          "package": "cil",
          "signature": "Xor Expr Expr Position",
          "source": "src/Language-CIL-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIL Types",
          "module": "Language.CIL.Types",
          "name": "Xor",
          "package": "cil",
          "partial": "Xor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL-Types.html#v:Xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing the C Intermediate Language (CIL).\n   CIL provides a manageable means to analyze and compile C code.\n\u003c/p\u003e\u003cp\u003eThe common method to reduce C to CIL is to use the cilly driver:\n\u003c/p\u003e\u003cpre\u003e cilly --merge --keepmerged { c-files-and-options }\n\u003c/pre\u003e\u003cp\u003e\u003ca\u003ehttp://cil.sourceforge.net/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CIL",
          "name": "CIL",
          "package": "cil",
          "source": "src/Language-CIL.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing the Intermediate Language CIL CIL provides manageable means to analyze and compile code The common method to reduce to CIL is to use the cilly driver cilly merge keepmerged c-files-and-options http cil.sourceforge.net",
          "hierarchy": "Language CIL",
          "module": "Language.CIL",
          "name": "CIL",
          "package": "cil",
          "partial": "CIL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cil/docs/Language-CIL.html#"
      }
    }
  ]
]