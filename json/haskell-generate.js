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
        "word": "haskell-generate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Expression",
          "name": "Expression",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-Expression.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Expression",
          "module": "Language.Haskell.Generate.Expression",
          "name": "Expression",
          "package": "haskell-generate",
          "partial": "Expression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Expression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Expression",
          "name": "Expression",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-Expression.html#Expression",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Expression",
          "module": "Language.Haskell.Generate.Expression",
          "name": "Expression",
          "package": "haskell-generate",
          "partial": "Expression",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Expression.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Expression",
          "name": "Expression",
          "package": "haskell-generate",
          "signature": "Expression",
          "source": "src/Language-Haskell-Generate-Expression.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Expression",
          "module": "Language.Haskell.Generate.Expression",
          "name": "Expression",
          "package": "haskell-generate",
          "partial": "Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Expression.html#v:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Expression",
          "name": "app",
          "package": "haskell-generate",
          "signature": "Expression (a -\u003e b) -\u003e Expression a -\u003e Expression b",
          "source": "src/Language-Haskell-Generate-Expression.html#app",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Expression",
          "module": "Language.Haskell.Generate.Expression",
          "name": "app",
          "normalized": "Expression(a-\u003eb)-\u003eExpression a-\u003eExpression b",
          "package": "haskell-generate",
          "signature": "Expression(a-\u003eb)-\u003eExpression a-\u003eExpression b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Expression.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Expression",
          "name": "runExpression",
          "package": "haskell-generate",
          "signature": "Exp",
          "source": "src/Language-Haskell-Generate-Expression.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Expression",
          "module": "Language.Haskell.Generate.Expression",
          "name": "runExpression",
          "package": "haskell-generate",
          "partial": "Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Expression.html#v:runExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Monad",
          "name": "Monad",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Monad",
          "package": "haskell-generate",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a type alias for a Generate action that returns an expression of type \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "ExpG",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-Monad.html#ExpG",
          "type": "type"
        },
        "index": {
          "description": "This is type alias for Generate action that returns an expression of type",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "ExpG",
          "package": "haskell-generate",
          "partial": "Exp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#t:ExpG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to a function. With a reference to a function, you can apply it (by lifting it into ExprT using \u003ccode\u003e\u003ca\u003eexpr\u003c/a\u003e\u003c/code\u003e) to some value\n or export it using \u003ccode\u003e\u003ca\u003eexportFun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "FunRef",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-Monad.html#FunRef",
          "type": "data"
        },
        "index": {
          "description": "reference to function With reference to function you can apply it by lifting it into ExprT using expr to some value or export it using exportFun",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "FunRef",
          "package": "haskell-generate",
          "partial": "Fun Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#t:FunRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a expression from a haskell value. This can for example be used to create lambdas:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ generateExp $ expr (\\x f -\u003e f \u003c\u003e$ x)\n\u003c/code\u003e\u003c/strong\u003e\\ pvar_0 -\u003e \\ pvar_1 -\u003e pvar_1 pvar_0\n\u003c/pre\u003e\u003cp\u003eOr string literals:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ generateExp $ expr \"I'm a string!\"\n\u003c/code\u003e\u003c/strong\u003e['I', '\\'', 'm', ' ', 'a', ' ', 's', 't', 'r', 'i', 'n', 'g', '!']\n\u003c/pre\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "GenExp",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-Monad.html#GenExp",
          "type": "class"
        },
        "index": {
          "description": "Generate expression from haskell value This can for example be used to create lambdas putStrLn generateExp expr pvar pvar pvar pvar Or string literals putStrLn generateExp expr string",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "GenExp",
          "package": "haskell-generate",
          "partial": "Gen Exp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#t:GenExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis monad keeps track of a counter for generating unique names and the set of modules\n that are needed for the expression.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Generate",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-Monad.html#Generate",
          "type": "newtype"
        },
        "index": {
          "description": "This monad keeps track of counter for generating unique names and the set of modules that are needed for the expression",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Generate",
          "package": "haskell-generate",
          "partial": "Generate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#t:Generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the resulting type of a function generating a module. It is a ModuleM action returning the export list.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "ModuleG",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-Monad.html#ModuleG",
          "type": "type"
        },
        "index": {
          "description": "This is the resulting type of function generating module It is ModuleM action returning the export list",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "ModuleG",
          "package": "haskell-generate",
          "partial": "Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#t:ModuleG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA module keeps track of the needed imports, but also has a list of declarations in it.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "ModuleM",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-Monad.html#ModuleM",
          "type": "newtype"
        },
        "index": {
          "description": "module keeps track of the needed imports but also has list of declarations in it",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "ModuleM",
          "package": "haskell-generate",
          "partial": "Module",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#t:ModuleM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is used to represent variables, and also constructors.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Name",
          "package": "haskell-generate",
          "type": "data"
        },
        "index": {
          "description": "This type is used to represent variables and also constructors",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Name",
          "package": "haskell-generate",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator for \u003ccode\u003e\u003ca\u003eapplyE\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "(\u003c\u003e$)",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b) -\u003e ExpG a -\u003e ExpG b",
          "source": "src/Language-Haskell-Generate-Monad.html#%3C%3E%24",
          "type": "function"
        },
        "index": {
          "description": "Operator for applyE",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "(\u003c\u003e$) \u003c\u003e$",
          "normalized": "ExpG(a-\u003eb)-\u003eExpG a-\u003eExpG b",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb)-\u003eExpG a-\u003eExpG b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:-60--62--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Monad",
          "name": "FunRef",
          "package": "haskell-generate",
          "signature": "FunRef Name",
          "source": "src/Language-Haskell-Generate-Monad.html#FunRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "FunRef",
          "package": "haskell-generate",
          "partial": "Fun Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:FunRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Monad",
          "name": "Generate",
          "package": "haskell-generate",
          "signature": "Generate",
          "source": "src/Language-Haskell-Generate-Monad.html#Generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Generate",
          "package": "haskell-generate",
          "partial": "Generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:Generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003evarid\u003c/em\u003e or \u003cem\u003econid\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Ident",
          "package": "haskell-generate",
          "signature": "Ident String",
          "type": "function"
        },
        "index": {
          "description": "varid or conid",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Ident",
          "package": "haskell-generate",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:Ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Monad",
          "name": "ModuleM",
          "package": "haskell-generate",
          "signature": "ModuleM (Writer (Set ModuleName, [Decl]) a)",
          "source": "src/Language-Haskell-Generate-Monad.html#ModuleM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "ModuleM",
          "normalized": "ModuleM(Writer(Set ModuleName,[Decl])a)",
          "package": "haskell-generate",
          "partial": "Module",
          "signature": "ModuleM(Writer(Set ModuleName,[Decl])a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:ModuleM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003evarsym\u003c/em\u003e or \u003cem\u003econsym\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Symbol",
          "package": "haskell-generate",
          "signature": "Symbol String",
          "type": "function"
        },
        "index": {
          "description": "varsym or consym",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "Symbol",
          "package": "haskell-generate",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a declaration to the module. Return a reference to it that can be used to either apply the function to some values or export it.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "addDecl",
          "package": "haskell-generate",
          "signature": "Name -\u003e ExpG t -\u003e ModuleM (FunRef t)",
          "source": "src/Language-Haskell-Generate-Monad.html#addDecl",
          "type": "function"
        },
        "index": {
          "description": "Add declaration to the module Return reference to it that can be used to either apply the function to some values or export it",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "addDecl",
          "normalized": "Name-\u003eExpG a-\u003eModuleM(FunRef a)",
          "package": "haskell-generate",
          "partial": "Decl",
          "signature": "Name-\u003eExpG t-\u003eModuleM(FunRef t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:addDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function in a haskell expression to a value.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b) -\u003e ExpG a -\u003e ExpG b",
          "source": "src/Language-Haskell-Generate-Monad.html#applyE",
          "type": "function"
        },
        "index": {
          "description": "Apply function in haskell expression to value",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE",
          "normalized": "ExpG(a-\u003eb)-\u003eExpG a-\u003eExpG b",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb)-\u003eExpG a-\u003eExpG b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:applyE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplyE for 2 arguments\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE2",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b -\u003e c) -\u003e ExpG a -\u003e ExpG b -\u003e ExpG c",
          "source": "src/Language-Haskell-Generate-Monad.html#applyE2",
          "type": "function"
        },
        "index": {
          "description": "ApplyE for arguments",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE2",
          "normalized": "ExpG(a-\u003eb-\u003ec)-\u003eExpG a-\u003eExpG b-\u003eExpG c",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb-\u003ec)-\u003eExpG a-\u003eExpG b-\u003eExpG c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:applyE2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to 3 arguments\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE3",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b -\u003e c -\u003e d) -\u003e ExpG a -\u003e ExpG b -\u003e ExpG c -\u003e ExpG d",
          "source": "src/Language-Haskell-Generate-Monad.html#applyE3",
          "type": "function"
        },
        "index": {
          "description": "Apply function to arguments",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE3",
          "normalized": "ExpG(a-\u003eb-\u003ec-\u003ed)-\u003eExpG a-\u003eExpG b-\u003eExpG c-\u003eExpG d",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb-\u003ec-\u003ed)-\u003eExpG a-\u003eExpG b-\u003eExpG c-\u003eExpG d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:applyE3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to 4 arguments\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE4",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e ExpG a -\u003e ExpG b -\u003e ExpG c -\u003e ExpG d -\u003e ExpG e",
          "source": "src/Language-Haskell-Generate-Monad.html#applyE4",
          "type": "function"
        },
        "index": {
          "description": "Apply function to arguments",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE4",
          "normalized": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eExpG a-\u003eExpG b-\u003eExpG c-\u003eExpG d-\u003eExpG e",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eExpG a-\u003eExpG b-\u003eExpG c-\u003eExpG d-\u003eExpG e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:applyE4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to 5 arguments\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE5",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e ExpG a -\u003e ExpG b -\u003e ExpG c -\u003e ExpG d -\u003e ExpG e -\u003e ExpG f",
          "source": "src/Language-Haskell-Generate-Monad.html#applyE5",
          "type": "function"
        },
        "index": {
          "description": "Apply function to arguments",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE5",
          "normalized": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eExpG a-\u003eExpG b-\u003eExpG c-\u003eExpG d-\u003eExpG e-\u003eExpG f",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eExpG a-\u003eExpG b-\u003eExpG c-\u003eExpG d-\u003eExpG e-\u003eExpG f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:applyE5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to 6 arguments\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE6",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e ExpG a -\u003e ExpG b -\u003e ExpG c -\u003e ExpG d -\u003e ExpG e -\u003e ExpG f -\u003e ExpG g",
          "source": "src/Language-Haskell-Generate-Monad.html#applyE6",
          "type": "function"
        },
        "index": {
          "description": "Apply function to arguments",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "applyE6",
          "normalized": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eExpG a-\u003eExpG b-\u003eExpG c-\u003eExpG d-\u003eExpG e-\u003eExpG f-\u003eExpG g",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eExpG a-\u003eExpG b-\u003eExpG c-\u003eExpG d-\u003eExpG e-\u003eExpG f-\u003eExpG g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:applyE6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a case expression.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "caseE",
          "package": "haskell-generate",
          "signature": "ExpG x -\u003e [(Pat, ExpG t)] -\u003e ExpG t",
          "source": "src/Language-Haskell-Generate-Monad.html#caseE",
          "type": "function"
        },
        "index": {
          "description": "Generate case expression",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "caseE",
          "normalized": "ExpG a-\u003e[(Pat,ExpG b)]-\u003eExpG b",
          "package": "haskell-generate",
          "signature": "ExpG x-\u003e[(Pat,ExpG t)]-\u003eExpG t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:caseE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a ExportSpec for a given function item.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "exportFun",
          "package": "haskell-generate",
          "signature": "FunRef t -\u003e ExportSpec",
          "source": "src/Language-Haskell-Generate-Monad.html#exportFun",
          "type": "function"
        },
        "index": {
          "description": "Generate ExportSpec for given function item",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "exportFun",
          "normalized": "FunRef a-\u003eExportSpec",
          "package": "haskell-generate",
          "partial": "Fun",
          "signature": "FunRef t-\u003eExportSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:exportFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function generates the haskell expression from the given haskell value.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "expr",
          "package": "haskell-generate",
          "signature": "t -\u003e ExpG (GenExpType t)",
          "source": "src/Language-Haskell-Generate-Monad.html#expr",
          "type": "method"
        },
        "index": {
          "description": "This function generates the haskell expression from the given haskell value",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "expr",
          "normalized": "a-\u003eExpG(GenExpType a)",
          "package": "haskell-generate",
          "signature": "t-\u003eExpG(GenExpType t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the expression generated by a given action.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "generateExp",
          "package": "haskell-generate",
          "signature": "ExpG t -\u003e String",
          "source": "src/Language-Haskell-Generate-Monad.html#generateExp",
          "type": "function"
        },
        "index": {
          "description": "Pretty print the expression generated by given action",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "generateExp",
          "normalized": "ExpG a-\u003eString",
          "package": "haskell-generate",
          "partial": "Exp",
          "signature": "ExpG t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:generateExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the source code for a module.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "generateModule",
          "package": "haskell-generate",
          "signature": "ModuleG -\u003e String -\u003e String",
          "source": "src/Language-Haskell-Generate-Monad.html#generateModule",
          "type": "function"
        },
        "index": {
          "description": "Generate the source code for module",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "generateModule",
          "normalized": "ModuleG-\u003eString-\u003eString",
          "package": "haskell-generate",
          "partial": "Module",
          "signature": "ModuleG-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:generateModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new unique variable name with the given prefix. Note that this new variable name\n is only unique relative to other variable names generated by this function. \n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "newName",
          "package": "haskell-generate",
          "signature": "String -\u003e Generate Name",
          "source": "src/Language-Haskell-Generate-Monad.html#newName",
          "type": "function"
        },
        "index": {
          "description": "Generate new unique variable name with the given prefix Note that this new variable name is only unique relative to other variable names generated by this function",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "newName",
          "normalized": "String-\u003eGenerate Name",
          "package": "haskell-generate",
          "partial": "Name",
          "signature": "String-\u003eGenerate Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:newName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a haskell-src-exts Exp as the result of a Generate action.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "returnE",
          "package": "haskell-generate",
          "signature": "Exp -\u003e ExpG t",
          "source": "src/Language-Haskell-Generate-Monad.html#returnE",
          "type": "function"
        },
        "index": {
          "description": "Use haskell-src-exts Exp as the result of Generate action",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "returnE",
          "normalized": "Exp-\u003eExpG a",
          "package": "haskell-generate",
          "signature": "Exp-\u003eExpG t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:returnE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the set of modules and the value from a Generate action.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "runGenerate",
          "package": "haskell-generate",
          "signature": "Generate a -\u003e (a, Set ModuleName)",
          "source": "src/Language-Haskell-Generate-Monad.html#runGenerate",
          "type": "function"
        },
        "index": {
          "description": "Extract the set of modules and the value from Generate action",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "runGenerate",
          "normalized": "Generate a-\u003e(a,Set ModuleName)",
          "package": "haskell-generate",
          "partial": "Generate",
          "signature": "Generate a-\u003e(a,Set ModuleName)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:runGenerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the Module from a module generator.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "runModuleM",
          "package": "haskell-generate",
          "signature": "ModuleG -\u003e String -\u003e Module",
          "source": "src/Language-Haskell-Generate-Monad.html#runModuleM",
          "type": "function"
        },
        "index": {
          "description": "Extract the Module from module generator",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "runModuleM",
          "normalized": "ModuleG-\u003eString-\u003eModule",
          "package": "haskell-generate",
          "partial": "Module",
          "signature": "ModuleG-\u003eString-\u003eModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:runModuleM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.Monad",
          "name": "unGenerate",
          "package": "haskell-generate",
          "signature": "StateT Integer (Writer (Set ModuleName)) a",
          "source": "src/Language-Haskell-Generate-Monad.html#Generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "unGenerate",
          "package": "haskell-generate",
          "partial": "Generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:unGenerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport a value constructor from a module. Returns the qualified name of the constructor.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "useCon",
          "package": "haskell-generate",
          "signature": "String -\u003e Name -\u003e Generate QName",
          "source": "src/Language-Haskell-Generate-Monad.html#useCon",
          "type": "function"
        },
        "index": {
          "description": "Import value constructor from module Returns the qualified name of the constructor",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "useCon",
          "normalized": "String-\u003eName-\u003eGenerate QName",
          "package": "haskell-generate",
          "partial": "Con",
          "signature": "String-\u003eName-\u003eGenerate QName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:useCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport a function from a module. This function is polymorphic in the type of the resulting expression, \n you should probably only use this function to define type-restricted specializations. \n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e addInt :: ExpG (Int -\u003e Int -\u003e Int) -- Here we restricted the type to something sensible\n addInt = useValue \"Prelude\" $ Symbol \"+\"\n\u003c/pre\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "useValue",
          "package": "haskell-generate",
          "signature": "String -\u003e Name -\u003e ExpG a",
          "source": "src/Language-Haskell-Generate-Monad.html#useValue",
          "type": "function"
        },
        "index": {
          "description": "Import function from module This function is polymorphic in the type of the resulting expression you should probably only use this function to define type-restricted specializations Example addInt ExpG Int Int Int Here we restricted the type to something sensible addInt useValue Prelude Symbol",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "useValue",
          "normalized": "String-\u003eName-\u003eExpG a",
          "package": "haskell-generate",
          "partial": "Value",
          "signature": "String-\u003eName-\u003eExpG a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:useValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the value of a variable with the given name.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.Monad",
          "name": "useVar",
          "package": "haskell-generate",
          "signature": "Name -\u003e ExpG t",
          "source": "src/Language-Haskell-Generate-Monad.html#useVar",
          "type": "function"
        },
        "index": {
          "description": "Use the value of variable with the given name",
          "hierarchy": "Language Haskell Generate Monad",
          "module": "Language.Haskell.Generate.Monad",
          "name": "useVar",
          "normalized": "Name-\u003eExpG a",
          "package": "haskell-generate",
          "partial": "Var",
          "signature": "Name-\u003eExpG t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-Monad.html#v:useVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "PreludeDef",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-PreludeDef.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "PreludeDef",
          "package": "haskell-generate",
          "partial": "Prelude Def",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "(\u003c\u003e.)",
          "package": "haskell-generate",
          "signature": "ExpG (b -\u003e c) -\u003e ExpG (a -\u003e b) -\u003e ExpG (a -\u003e c)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#%3C%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "(\u003c\u003e.) \u003c\u003e.",
          "normalized": "ExpG(a-\u003eb)-\u003eExpG(c-\u003ea)-\u003eExpG(c-\u003eb)",
          "package": "haskell-generate",
          "signature": "ExpG(b-\u003ec)-\u003eExpG(a-\u003eb)-\u003eExpG(a-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:-60--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "abs'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#abs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "abs'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:abs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "acos'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#acos%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "acos'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:acos-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "acosh'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#acosh%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "acosh'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:acosh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "add'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#add%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "add'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:add-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "all'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e Bool) -\u003e [a] -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#all%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "all'",
          "normalized": "a b ExpG((c-\u003eBool)-\u003e[c]-\u003eBool)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003eBool)-\u003e[a]-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:all-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "and'",
          "package": "haskell-generate",
          "signature": "ExpG ([Bool] -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#and%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "and'",
          "normalized": "ExpG([Bool]-\u003eBool)",
          "package": "haskell-generate",
          "signature": "ExpG([Bool]-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:and-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "any'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e Bool) -\u003e [a] -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#any%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "any'",
          "normalized": "a b ExpG((c-\u003eBool)-\u003e[c]-\u003eBool)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003eBool)-\u003e[a]-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:any-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "append'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e [a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#append%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "append'",
          "normalized": "a b ExpG([c]-\u003e[c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003e[a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:append-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "appendFile'",
          "package": "haskell-generate",
          "signature": "ExpG (FilePath -\u003e String -\u003e IO ())",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#appendFile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "appendFile'",
          "normalized": "ExpG(FilePath-\u003eString-\u003eIO())",
          "package": "haskell-generate",
          "partial": "File'",
          "signature": "ExpG(FilePath-\u003eString-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:appendFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "asTypeOf'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#asTypeOf%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "asTypeOf'",
          "normalized": "a b ExpG(c-\u003ec-\u003ec)",
          "package": "haskell-generate",
          "partial": "Type Of'",
          "signature": "forall a. ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:asTypeOf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "asin'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#asin%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "asin'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:asin-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "asinh'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#asinh%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "asinh'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:asinh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "atan'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#atan%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "atan'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:atan-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "atan2'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#atan2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "atan2'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:atan2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "atanh'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#atanh%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "atanh'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:atanh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "bind'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG (m a -\u003e (a -\u003e m b) -\u003e m b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#bind%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "bind'",
          "normalized": "a b c ExpG(d b-\u003e(b-\u003ed e)-\u003ed e)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG(m a-\u003e(a-\u003em b)-\u003em b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:bind-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "break'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e Bool) -\u003e [a] -\u003e ([a], [a]))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#break%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "break'",
          "normalized": "a b ExpG((c-\u003eBool)-\u003e[c]-\u003e([c],[c]))",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003eBool)-\u003e[a]-\u003e([a],[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:break-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "ceiling'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#ceiling%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "ceiling'",
          "normalized": "ExpG(a-\u003eb)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:ceiling-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "concat'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([[a]] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#concat%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "concat'",
          "normalized": "a b ExpG([[c]]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([[a]]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:concat-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "concatMap'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ((a -\u003e [b]) -\u003e [a] -\u003e [b])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#concatMap%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "concatMap'",
          "normalized": "a b c ExpG((b-\u003e[d])-\u003e[b]-\u003e[d])",
          "package": "haskell-generate",
          "partial": "Map'",
          "signature": "forall a b. ExpG((a-\u003e[b])-\u003e[a]-\u003e[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:concatMap-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "cons",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e [a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "cons",
          "normalized": "ExpG(a-\u003e[a]-\u003e[a])",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003e[a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "const'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG (a -\u003e b -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#const%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "const'",
          "normalized": "a b c ExpG(b-\u003ed-\u003eb)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG(a-\u003eb-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:const-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "cos'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#cos%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "cos'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:cos-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "cosh'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#cosh%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "cosh'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:cosh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "curry'",
          "package": "haskell-generate",
          "signature": "forall a b c.  ExpG (((a, b) -\u003e c) -\u003e a -\u003e b -\u003e c)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#curry%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "curry'",
          "normalized": "a b c d ExpG(((b,c)-\u003ee)-\u003eb-\u003ec-\u003ee)",
          "package": "haskell-generate",
          "signature": "forall a b c. ExpG(((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:curry-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "cycle'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#cycle%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "cycle'",
          "normalized": "a b ExpG([c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:cycle-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "decodeFloat'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e (Integer, Int))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#decodeFloat%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "decodeFloat'",
          "normalized": "ExpG(a-\u003e(Integer,Int))",
          "package": "haskell-generate",
          "partial": "Float'",
          "signature": "ExpG(a-\u003e(Integer,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:decodeFloat-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "div'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#div%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "div'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:div-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "divMod'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e (a, a))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#divMod%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "divMod'",
          "normalized": "ExpG(a-\u003ea-\u003e(a,a))",
          "package": "haskell-generate",
          "partial": "Mod'",
          "signature": "ExpG(a-\u003ea-\u003e(a,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:divMod-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "divide'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#divide%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "divide'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:divide-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "dot'",
          "package": "haskell-generate",
          "signature": "forall b c a.  ExpG ((b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#dot%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "dot'",
          "normalized": "a b c d ExpG((b-\u003ec)-\u003e(e-\u003eb)-\u003ee-\u003ec)",
          "package": "haskell-generate",
          "signature": "forall b c a. ExpG((b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:dot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "drop'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (Int -\u003e [a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#drop%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "drop'",
          "normalized": "a b ExpG(Int-\u003e[c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG(Int-\u003e[a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:drop-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "dropWhile'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e Bool) -\u003e [a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#dropWhile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "dropWhile'",
          "normalized": "a b ExpG((c-\u003eBool)-\u003e[c]-\u003e[c])",
          "package": "haskell-generate",
          "partial": "While'",
          "signature": "forall a. ExpG((a-\u003eBool)-\u003e[a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:dropWhile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "either'",
          "package": "haskell-generate",
          "signature": "forall a c b.  ExpG ((a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#either%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "either'",
          "normalized": "a b c d ExpG((b-\u003ec)-\u003e(e-\u003ec)-\u003eEither b e-\u003ec)",
          "package": "haskell-generate",
          "signature": "forall a c b. ExpG((a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:either-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "elem'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e [a] -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#elem%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "elem'",
          "normalized": "ExpG(a-\u003e[a]-\u003eBool)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003e[a]-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:elem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "encodeFloat'",
          "package": "haskell-generate",
          "signature": "ExpG (Integer -\u003e Int -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#encodeFloat%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "encodeFloat'",
          "normalized": "ExpG(Integer-\u003eInt-\u003ea)",
          "package": "haskell-generate",
          "partial": "Float'",
          "signature": "ExpG(Integer-\u003eInt-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:encodeFloat-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "equal'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#equal%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "equal'",
          "normalized": "ExpG(a-\u003ea-\u003eBool)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:equal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "even'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#even%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "even'",
          "normalized": "ExpG(a-\u003eBool)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:even-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "exp'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#exp%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "exp'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:exp-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "exponent'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Int)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#exponent%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "exponent'",
          "normalized": "ExpG(a-\u003eInt)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:exponent-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "false'",
          "package": "haskell-generate",
          "signature": "ExpG Bool",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#false%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "false'",
          "package": "haskell-generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:false-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "filter'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e Bool) -\u003e [a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#filter%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "filter'",
          "normalized": "a b ExpG((c-\u003eBool)-\u003e[c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003eBool)-\u003e[a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:filter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "flip'",
          "package": "haskell-generate",
          "signature": "forall a b c.  ExpG ((a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#flip%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "flip'",
          "normalized": "a b c d ExpG((b-\u003ec-\u003ee)-\u003ec-\u003eb-\u003ee)",
          "package": "haskell-generate",
          "signature": "forall a b c. ExpG((a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:flip-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floatDigits'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Int)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#floatDigits%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floatDigits'",
          "normalized": "ExpG(a-\u003eInt)",
          "package": "haskell-generate",
          "partial": "Digits'",
          "signature": "ExpG(a-\u003eInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:floatDigits-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floatPow'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#floatPow%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floatPow'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "partial": "Pow'",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:floatPow-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floatRadix'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Integer)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#floatRadix%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floatRadix'",
          "normalized": "ExpG(a-\u003eInteger)",
          "package": "haskell-generate",
          "partial": "Radix'",
          "signature": "ExpG(a-\u003eInteger)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:floatRadix-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floatRange'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e (Int, Int))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#floatRange%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floatRange'",
          "normalized": "ExpG(a-\u003e(Int,Int))",
          "package": "haskell-generate",
          "partial": "Range'",
          "signature": "ExpG(a-\u003e(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:floatRange-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floor'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#floor%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "floor'",
          "normalized": "ExpG(a-\u003eb)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:floor-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fmap'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ((a -\u003e b) -\u003e f a -\u003e f b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#fmap%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fmap'",
          "normalized": "a b c ExpG((b-\u003ed)-\u003ee b-\u003ee d)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG((a-\u003eb)-\u003ef a-\u003ef b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:fmap-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "foldl'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ((a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "foldl'",
          "normalized": "a b c ExpG((b-\u003ed-\u003eb)-\u003eb-\u003e[d]-\u003eb)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG((a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "foldl1'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e a -\u003e a) -\u003e [a] -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "foldl1'",
          "normalized": "a b ExpG((c-\u003ec-\u003ec)-\u003e[c]-\u003ec)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003ea-\u003ea)-\u003e[a]-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "foldr'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ((a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "foldr'",
          "normalized": "a b c ExpG((b-\u003ed-\u003ed)-\u003ed-\u003e[b]-\u003ed)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG((a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "foldr1'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e a -\u003e a) -\u003e [a] -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "foldr1'",
          "normalized": "a b ExpG((c-\u003ec-\u003ec)-\u003e[c]-\u003ec)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003ea-\u003ea)-\u003e[a]-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fromInteger'",
          "package": "haskell-generate",
          "signature": "ExpG (Integer -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#fromInteger%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fromInteger'",
          "normalized": "ExpG(Integer-\u003ea)",
          "package": "haskell-generate",
          "partial": "Integer'",
          "signature": "ExpG(Integer-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:fromInteger-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fromIntegral'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#fromIntegral%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fromIntegral'",
          "normalized": "ExpG(a-\u003eb)",
          "package": "haskell-generate",
          "partial": "Integral'",
          "signature": "ExpG(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:fromIntegral-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fromRational'",
          "package": "haskell-generate",
          "signature": "ExpG (Rational -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#fromRational%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fromRational'",
          "normalized": "ExpG(Rational-\u003ea)",
          "package": "haskell-generate",
          "partial": "Rational'",
          "signature": "ExpG(Rational-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:fromRational-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fst'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ((a, b) -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#fst%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "fst'",
          "normalized": "a b c ExpG((b,d)-\u003eb)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG((a,b)-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:fst-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "gcd'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#gcd%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "gcd'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:gcd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "getChar'",
          "package": "haskell-generate",
          "signature": "ExpG (IO Char)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#getChar%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "getChar'",
          "package": "haskell-generate",
          "partial": "Char'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:getChar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "getContents'",
          "package": "haskell-generate",
          "signature": "ExpG (IO String)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#getContents%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "getContents'",
          "package": "haskell-generate",
          "partial": "Contents'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:getContents-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "getLine'",
          "package": "haskell-generate",
          "signature": "ExpG (IO String)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#getLine%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "getLine'",
          "package": "haskell-generate",
          "partial": "Line'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:getLine-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "head'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#head%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "head'",
          "normalized": "a b ExpG([c]-\u003ec)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:head-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "id'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#id%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "id'",
          "normalized": "a b ExpG(c-\u003ec)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:id-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "index'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e Int -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#index%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "index'",
          "normalized": "a b ExpG([c]-\u003eInt-\u003ec)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003eInt-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:index-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "init'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#init%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "init'",
          "normalized": "a b ExpG([c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:init-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "interact'",
          "package": "haskell-generate",
          "signature": "ExpG ((String -\u003e String) -\u003e IO ())",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#interact%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "interact'",
          "normalized": "ExpG((String-\u003eString)-\u003eIO())",
          "package": "haskell-generate",
          "signature": "ExpG((String-\u003eString)-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:interact-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isDenormalized'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#isDenormalized%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isDenormalized'",
          "normalized": "ExpG(a-\u003eBool)",
          "package": "haskell-generate",
          "partial": "Denormalized'",
          "signature": "ExpG(a-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:isDenormalized-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isIEEE'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#isIEEE%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isIEEE'",
          "normalized": "ExpG(a-\u003eBool)",
          "package": "haskell-generate",
          "partial": "IEEE'",
          "signature": "ExpG(a-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:isIEEE-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isInfinite'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#isInfinite%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isInfinite'",
          "normalized": "ExpG(a-\u003eBool)",
          "package": "haskell-generate",
          "partial": "Infinite'",
          "signature": "ExpG(a-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:isInfinite-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isNaN'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#isNaN%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isNaN'",
          "normalized": "ExpG(a-\u003eBool)",
          "package": "haskell-generate",
          "partial": "Na N'",
          "signature": "ExpG(a-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:isNaN-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isNegativeZero'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#isNegativeZero%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "isNegativeZero'",
          "normalized": "ExpG(a-\u003eBool)",
          "package": "haskell-generate",
          "partial": "Negative Zero'",
          "signature": "ExpG(a-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:isNegativeZero-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "iterate'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e a) -\u003e a -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#iterate%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "iterate'",
          "normalized": "a b ExpG((c-\u003ec)-\u003ec-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003ea)-\u003ea-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:iterate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "just'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (a -\u003e Maybe a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#just%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "just'",
          "normalized": "a b ExpG(c-\u003eMaybe c)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG(a-\u003eMaybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:just-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "last'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#last%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "last'",
          "normalized": "a b ExpG([c]-\u003ec)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:last-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "lcm'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#lcm%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "lcm'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:lcm-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "left'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG (a -\u003e Either a b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#left%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "left'",
          "normalized": "a b c ExpG(b-\u003eEither b d)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG(a-\u003eEither a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:left-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "length'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e Int)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#length%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "length'",
          "normalized": "a b ExpG([c]-\u003eInt)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003eInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:length-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "lines'",
          "package": "haskell-generate",
          "signature": "ExpG (String -\u003e [String])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#lines%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "lines'",
          "normalized": "ExpG(String-\u003e[String])",
          "package": "haskell-generate",
          "signature": "ExpG(String-\u003e[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:lines-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "log'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#log%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "log'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:log-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "logBase'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#logBase%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "logBase'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "partial": "Base'",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:logBase-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "lookup'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e [(a, b)] -\u003e Maybe b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#lookup%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "lookup'",
          "normalized": "ExpG(a-\u003e[(a,b)]-\u003eMaybe b)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003e[(a,b)]-\u003eMaybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:lookup-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "map'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ((a -\u003e b) -\u003e [a] -\u003e [b])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#map%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "map'",
          "normalized": "a b c ExpG((b-\u003ed)-\u003e[b]-\u003e[d])",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG((a-\u003eb)-\u003e[a]-\u003e[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:map-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "mapM'",
          "package": "haskell-generate",
          "signature": "ExpG ((a -\u003e m b) -\u003e [a] -\u003e m [b])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#mapM%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "mapM'",
          "normalized": "ExpG((a-\u003eb c)-\u003e[a]-\u003eb[c])",
          "package": "haskell-generate",
          "partial": "M'",
          "signature": "ExpG((a-\u003em b)-\u003e[a]-\u003em[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:mapM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "mapM_'",
          "package": "haskell-generate",
          "signature": "ExpG ((a -\u003e m b) -\u003e [a] -\u003e m ())",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#mapM_%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "mapM_'",
          "normalized": "ExpG((a-\u003eb c)-\u003e[a]-\u003eb())",
          "package": "haskell-generate",
          "signature": "ExpG((a-\u003em b)-\u003e[a]-\u003em())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:mapM_-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "maximum'",
          "package": "haskell-generate",
          "signature": "ExpG ([a] -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#maximum%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "maximum'",
          "normalized": "ExpG([a]-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG([a]-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:maximum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "maybe'",
          "package": "haskell-generate",
          "signature": "forall b a.  ExpG (b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#maybe%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "maybe'",
          "normalized": "a b c ExpG(b-\u003e(d-\u003eb)-\u003eMaybe d-\u003eb)",
          "package": "haskell-generate",
          "signature": "forall b a. ExpG(b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:maybe-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "minimum'",
          "package": "haskell-generate",
          "signature": "ExpG ([a] -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#minimum%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "minimum'",
          "normalized": "ExpG([a]-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG([a]-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:minimum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "mod'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#mod%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "mod'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:mod-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "mult'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#mult%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "mult'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:mult-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "negate'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#negate%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "negate'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:negate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "not'",
          "package": "haskell-generate",
          "signature": "ExpG (Bool -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#not%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "not'",
          "normalized": "ExpG(Bool-\u003eBool)",
          "package": "haskell-generate",
          "signature": "ExpG(Bool-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:not-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "notElem'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e [a] -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#notElem%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "notElem'",
          "normalized": "ExpG(a-\u003e[a]-\u003eBool)",
          "package": "haskell-generate",
          "partial": "Elem'",
          "signature": "ExpG(a-\u003e[a]-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:notElem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "nothing'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (Maybe a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#nothing%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "nothing'",
          "package": "haskell-generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:nothing-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "null'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#null%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "null'",
          "normalized": "a b ExpG([c]-\u003eBool)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:null-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "odd'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#odd%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "odd'",
          "normalized": "ExpG(a-\u003eBool)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:odd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "or'",
          "package": "haskell-generate",
          "signature": "ExpG ([Bool] -\u003e Bool)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#or%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "or'",
          "normalized": "ExpG([Bool]-\u003eBool)",
          "package": "haskell-generate",
          "signature": "ExpG([Bool]-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:or-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "pi'",
          "package": "haskell-generate",
          "signature": "ExpG a",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#pi%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "pi'",
          "package": "haskell-generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:pi-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "print'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e IO ())",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#print%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "print'",
          "normalized": "ExpG(a-\u003eIO())",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:print-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "product'",
          "package": "haskell-generate",
          "signature": "ExpG ([a] -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#product%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "product'",
          "normalized": "ExpG([a]-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG([a]-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:product-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "properFraction'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e (b, a))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#properFraction%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "properFraction'",
          "normalized": "ExpG(a-\u003e(b,a))",
          "package": "haskell-generate",
          "partial": "Fraction'",
          "signature": "ExpG(a-\u003e(b,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:properFraction-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "putChar'",
          "package": "haskell-generate",
          "signature": "ExpG (Char -\u003e IO ())",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#putChar%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "putChar'",
          "normalized": "ExpG(Char-\u003eIO())",
          "package": "haskell-generate",
          "partial": "Char'",
          "signature": "ExpG(Char-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:putChar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "putStr'",
          "package": "haskell-generate",
          "signature": "ExpG (String -\u003e IO ())",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#putStr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "putStr'",
          "normalized": "ExpG(String-\u003eIO())",
          "package": "haskell-generate",
          "partial": "Str'",
          "signature": "ExpG(String-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:putStr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "putStrLn'",
          "package": "haskell-generate",
          "signature": "ExpG (String -\u003e IO ())",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#putStrLn%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "putStrLn'",
          "normalized": "ExpG(String-\u003eIO())",
          "package": "haskell-generate",
          "partial": "Str Ln'",
          "signature": "ExpG(String-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:putStrLn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "quot'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#quot%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "quot'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:quot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "quotRem'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e (a, a))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#quotRem%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "quotRem'",
          "normalized": "ExpG(a-\u003ea-\u003e(a,a))",
          "package": "haskell-generate",
          "partial": "Rem'",
          "signature": "ExpG(a-\u003ea-\u003e(a,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:quotRem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "read'",
          "package": "haskell-generate",
          "signature": "ExpG (String -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#read%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "read'",
          "normalized": "ExpG(String-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(String-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:read-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "readFile'",
          "package": "haskell-generate",
          "signature": "ExpG (FilePath -\u003e IO String)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#readFile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "readFile'",
          "normalized": "ExpG(FilePath-\u003eIO String)",
          "package": "haskell-generate",
          "partial": "File'",
          "signature": "ExpG(FilePath-\u003eIO String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:readFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "readIO'",
          "package": "haskell-generate",
          "signature": "ExpG (String -\u003e IO a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#readIO%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "readIO'",
          "normalized": "ExpG(String-\u003eIO a)",
          "package": "haskell-generate",
          "partial": "IO'",
          "signature": "ExpG(String-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:readIO-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "readLn'",
          "package": "haskell-generate",
          "signature": "ExpG (IO a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#readLn%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "readLn'",
          "package": "haskell-generate",
          "partial": "Ln'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:readLn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "realToFrac'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#realToFrac%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "realToFrac'",
          "normalized": "ExpG(a-\u003eb)",
          "package": "haskell-generate",
          "partial": "To Frac'",
          "signature": "ExpG(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:realToFrac-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "recip'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#recip%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "recip'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:recip-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "rem'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#rem%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "rem'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:rem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "repeat'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (a -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#repeat%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "repeat'",
          "normalized": "a b ExpG(c-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG(a-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:repeat-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "replicate'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (Int -\u003e a -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#replicate%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "replicate'",
          "normalized": "a b ExpG(Int-\u003ec-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG(Int-\u003ea-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:replicate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "return'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (a -\u003e m a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#return%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "return'",
          "normalized": "a b ExpG(c-\u003ed c)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG(a-\u003em a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:return-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "reverse'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#reverse%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "reverse'",
          "normalized": "a b ExpG([c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:reverse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "right'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG (b -\u003e Either a b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#right%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "right'",
          "normalized": "a b c ExpG(d-\u003eEither b d)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG(b-\u003eEither a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:right-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "round'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#round%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "round'",
          "normalized": "ExpG(a-\u003eb)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:round-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scaleFloat'",
          "package": "haskell-generate",
          "signature": "ExpG (Int -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#scaleFloat%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scaleFloat'",
          "normalized": "ExpG(Int-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "partial": "Float'",
          "signature": "ExpG(Int-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:scaleFloat-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scanl'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ((a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#scanl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scanl'",
          "normalized": "a b c ExpG((b-\u003ed-\u003eb)-\u003eb-\u003e[d]-\u003e[b])",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG((a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:scanl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scanl1'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e a -\u003e a) -\u003e [a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#scanl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scanl1'",
          "normalized": "a b ExpG((c-\u003ec-\u003ec)-\u003e[c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003ea-\u003ea)-\u003e[a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:scanl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scanr'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ((a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#scanr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scanr'",
          "normalized": "a b c ExpG((b-\u003ed-\u003ed)-\u003ed-\u003e[b]-\u003e[d])",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG((a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:scanr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scanr1'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e a -\u003e a) -\u003e [a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#scanr1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "scanr1'",
          "normalized": "a b ExpG((c-\u003ec-\u003ec)-\u003e[c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003ea-\u003ea)-\u003e[a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:scanr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "show'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e String)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#show%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "show'",
          "normalized": "ExpG(a-\u003eString)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:show-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "significand'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#significand%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "significand'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:significand-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "signum'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#signum%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "signum'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:signum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "sin'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#sin%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "sin'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:sin-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "sinh'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#sinh%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "sinh'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:sinh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "snd'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ((a, b) -\u003e b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#snd%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "snd'",
          "normalized": "a b c ExpG((b,d)-\u003ed)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG((a,b)-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:snd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "span'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e Bool) -\u003e [a] -\u003e ([a], [a]))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#span%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "span'",
          "normalized": "a b ExpG((c-\u003eBool)-\u003e[c]-\u003e([c],[c]))",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003eBool)-\u003e[a]-\u003e([a],[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:span-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "splitAt'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (Int -\u003e [a] -\u003e ([a], [a]))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#splitAt%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "splitAt'",
          "normalized": "a b ExpG(Int-\u003e[c]-\u003e([c],[c]))",
          "package": "haskell-generate",
          "partial": "At'",
          "signature": "forall a. ExpG(Int-\u003e[a]-\u003e([a],[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:splitAt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "sqrt'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#sqrt%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "sqrt'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:sqrt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "subtract'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#subtract%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "subtract'",
          "normalized": "ExpG(a-\u003ea-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:subtract-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "sum'",
          "package": "haskell-generate",
          "signature": "ExpG ([a] -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#sum%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "sum'",
          "normalized": "ExpG([a]-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG([a]-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:sum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tail'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ([a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#tail%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tail'",
          "normalized": "a b ExpG([c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG([a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:tail-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "take'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG (Int -\u003e [a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#take%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "take'",
          "normalized": "a b ExpG(Int-\u003e[c]-\u003e[c])",
          "package": "haskell-generate",
          "signature": "forall a. ExpG(Int-\u003e[a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:take-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "takeWhile'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e Bool) -\u003e [a] -\u003e [a])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#takeWhile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "takeWhile'",
          "normalized": "a b ExpG((c-\u003eBool)-\u003e[c]-\u003e[c])",
          "package": "haskell-generate",
          "partial": "While'",
          "signature": "forall a. ExpG((a-\u003eBool)-\u003e[a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:takeWhile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tan'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#tan%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tan'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:tan-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tanh'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#tanh%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tanh'",
          "normalized": "ExpG(a-\u003ea)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:tanh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "then'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG (m a -\u003e m b -\u003e m b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#then%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "then'",
          "normalized": "a b c ExpG(d b-\u003ed e-\u003ed e)",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG(m a-\u003em b-\u003em b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:then-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "toInteger'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e Integer)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#toInteger%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "toInteger'",
          "normalized": "ExpG(a-\u003eInteger)",
          "package": "haskell-generate",
          "partial": "Integer'",
          "signature": "ExpG(a-\u003eInteger)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:toInteger-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "true'",
          "package": "haskell-generate",
          "signature": "ExpG Bool",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#true%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "true'",
          "package": "haskell-generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:true-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "truncate'",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#truncate%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "truncate'",
          "normalized": "ExpG(a-\u003eb)",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:truncate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple0",
          "package": "haskell-generate",
          "signature": "ExpG ()",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#tuple0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple0",
          "normalized": "ExpG()",
          "package": "haskell-generate",
          "signature": "ExpG()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:tuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple2",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b -\u003e (a, b))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#tuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple2",
          "normalized": "ExpG(a-\u003eb-\u003e(a,b))",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb-\u003e(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple3",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b -\u003e c -\u003e (a, b, c))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#tuple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple3",
          "normalized": "ExpG(a-\u003eb-\u003ec-\u003e(a,b,c))",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb-\u003ec-\u003e(a,b,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:tuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple4",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b -\u003e c -\u003e d -\u003e (a, b, c, d))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#tuple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple4",
          "normalized": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003e(a,b,c,d))",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003e(a,b,c,d))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:tuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple5",
          "package": "haskell-generate",
          "signature": "ExpG (a -\u003e b -\u003e c -\u003e d -\u003e (a, b, c, d, e))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#tuple5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "tuple5",
          "normalized": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003e(a,b,c,d,e))",
          "package": "haskell-generate",
          "signature": "ExpG(a-\u003eb-\u003ec-\u003ed-\u003e(a,b,c,d,e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:tuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "uncurry'",
          "package": "haskell-generate",
          "signature": "forall a b c.  ExpG ((a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#uncurry%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "uncurry'",
          "normalized": "a b c d ExpG((b-\u003ec-\u003ee)-\u003e(b,c)-\u003ee)",
          "package": "haskell-generate",
          "signature": "forall a b c. ExpG((a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:uncurry-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "undefined'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG a",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#undefined%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "undefined'",
          "package": "haskell-generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:undefined-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "unlines'",
          "package": "haskell-generate",
          "signature": "ExpG ([String] -\u003e String)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#unlines%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "unlines'",
          "normalized": "ExpG([String]-\u003eString)",
          "package": "haskell-generate",
          "signature": "ExpG([String]-\u003eString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:unlines-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "until'",
          "package": "haskell-generate",
          "signature": "forall a.  ExpG ((a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#until%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "until'",
          "normalized": "a b ExpG((c-\u003eBool)-\u003e(c-\u003ec)-\u003ec-\u003ec)",
          "package": "haskell-generate",
          "signature": "forall a. ExpG((a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:until-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "unwords'",
          "package": "haskell-generate",
          "signature": "ExpG ([String] -\u003e String)",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#unwords%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "unwords'",
          "normalized": "ExpG([String]-\u003eString)",
          "package": "haskell-generate",
          "signature": "ExpG([String]-\u003eString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:unwords-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "unzip'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ([(a, b)] -\u003e ([a], [b]))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#unzip%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "unzip'",
          "normalized": "a b c ExpG([(b,d)]-\u003e([b],[d]))",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG([(a,b)]-\u003e([a],[b]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:unzip-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "unzip3'",
          "package": "haskell-generate",
          "signature": "forall a b c.  ExpG ([(a, b, c)] -\u003e ([a], [b], [c]))",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#unzip3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "unzip3'",
          "normalized": "a b c d ExpG([(b,c,e)]-\u003e([b],[c],[e]))",
          "package": "haskell-generate",
          "signature": "forall a b c. ExpG([(a,b,c)]-\u003e([a],[b],[c]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:unzip3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "words'",
          "package": "haskell-generate",
          "signature": "ExpG (String -\u003e [String])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#words%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "words'",
          "normalized": "ExpG(String-\u003e[String])",
          "package": "haskell-generate",
          "signature": "ExpG(String-\u003e[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:words-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "writeFile'",
          "package": "haskell-generate",
          "signature": "ExpG (FilePath -\u003e String -\u003e IO ())",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#writeFile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "writeFile'",
          "normalized": "ExpG(FilePath-\u003eString-\u003eIO())",
          "package": "haskell-generate",
          "partial": "File'",
          "signature": "ExpG(FilePath-\u003eString-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:writeFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "zip'",
          "package": "haskell-generate",
          "signature": "forall a b.  ExpG ([a] -\u003e [b] -\u003e [(a, b)])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#zip%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "zip'",
          "normalized": "a b c ExpG([b]-\u003e[d]-\u003e[(b,d)])",
          "package": "haskell-generate",
          "signature": "forall a b. ExpG([a]-\u003e[b]-\u003e[(a,b)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:zip-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "zip3'",
          "package": "haskell-generate",
          "signature": "forall a b c.  ExpG ([a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#zip3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "zip3'",
          "normalized": "a b c d ExpG([b]-\u003e[c]-\u003e[e]-\u003e[(b,c,e)])",
          "package": "haskell-generate",
          "signature": "forall a b c. ExpG([a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:zip3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "zipWith'",
          "package": "haskell-generate",
          "signature": "forall a b c.  ExpG ((a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#zipWith%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "zipWith'",
          "normalized": "a b c d ExpG((b-\u003ec-\u003ee)-\u003e[b]-\u003e[c]-\u003e[e])",
          "package": "haskell-generate",
          "partial": "With'",
          "signature": "forall a b c. ExpG((a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:zipWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "zipWith3'",
          "package": "haskell-generate",
          "signature": "forall a b c d.  ExpG ((a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d])",
          "source": "src/Language-Haskell-Generate-PreludeDef.html#zipWith3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Generate PreludeDef",
          "module": "Language.Haskell.Generate.PreludeDef",
          "name": "zipWith3'",
          "normalized": "a b c d e ExpG((b-\u003ec-\u003ed-\u003ef)-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[f])",
          "package": "haskell-generate",
          "partial": "With",
          "signature": "forall a b c d. ExpG((a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-PreludeDef.html#v:zipWith3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate.TH",
          "name": "TH",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Generate TH",
          "module": "Language.Haskell.Generate.TH",
          "name": "TH",
          "package": "haskell-generate",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a function. The name of the definition will be the name of the function with an added apostrophe. (Example: declareFunction 'add generates \n a definition with the name add').\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.TH",
          "name": "declareFunction",
          "package": "haskell-generate",
          "signature": "Name -\u003e DecsQ",
          "source": "src/Language-Haskell-Generate-TH.html#declareFunction",
          "type": "function"
        },
        "index": {
          "description": "Declare function The name of the definition will be the name of the function with an added apostrophe Example declareFunction add generates definition with the name add",
          "hierarchy": "Language Haskell Generate TH",
          "module": "Language.Haskell.Generate.TH",
          "name": "declareFunction",
          "normalized": "Name-\u003eDecsQ",
          "package": "haskell-generate",
          "partial": "Function",
          "signature": "Name-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-TH.html#v:declareFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a ExpG for the given function, using the given name for the definition.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.TH",
          "name": "declareNamedFunction",
          "package": "haskell-generate",
          "signature": "(Name, String) -\u003e DecsQ",
          "source": "src/Language-Haskell-Generate-TH.html#declareNamedFunction",
          "type": "function"
        },
        "index": {
          "description": "Make ExpG for the given function using the given name for the definition",
          "hierarchy": "Language Haskell Generate TH",
          "module": "Language.Haskell.Generate.TH",
          "name": "declareNamedFunction",
          "normalized": "(Name,String)-\u003eDecsQ",
          "package": "haskell-generate",
          "partial": "Named Function",
          "signature": "(Name,String)-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-TH.html#v:declareNamedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a symbol, using the given name for the definition.\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.TH",
          "name": "declareNamedSymbol",
          "package": "haskell-generate",
          "signature": "(Name, String) -\u003e DecsQ",
          "source": "src/Language-Haskell-Generate-TH.html#declareNamedSymbol",
          "type": "function"
        },
        "index": {
          "description": "Declare symbol using the given name for the definition",
          "hierarchy": "Language Haskell Generate TH",
          "module": "Language.Haskell.Generate.TH",
          "name": "declareNamedSymbol",
          "normalized": "(Name,String)-\u003eDecsQ",
          "package": "haskell-generate",
          "partial": "Named Symbol",
          "signature": "(Name,String)-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-TH.html#v:declareNamedSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a ExpG for some thing, using the given name for the definition. The third tuple element\n specifies the constructor to use for constructing the Name. This can either be \u003ccode\u003e'Symbol\u003c/code\u003e (for symbols)\n or \u003ccode\u003e'Ident\u003c/code\u003e (for functions).\n\u003c/p\u003e",
          "module": "Language.Haskell.Generate.TH",
          "name": "declareNamedThing",
          "package": "haskell-generate",
          "signature": "(Name, String, Name) -\u003e DecsQ",
          "source": "src/Language-Haskell-Generate-TH.html#declareNamedThing",
          "type": "function"
        },
        "index": {
          "description": "Make ExpG for some thing using the given name for the definition The third tuple element specifies the constructor to use for constructing the Name This can either be Symbol for symbols or Ident for functions",
          "hierarchy": "Language Haskell Generate TH",
          "module": "Language.Haskell.Generate.TH",
          "name": "declareNamedThing",
          "normalized": "(Name,String,Name)-\u003eDecsQ",
          "package": "haskell-generate",
          "partial": "Named Thing",
          "signature": "(Name,String,Name)-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate-TH.html#v:declareNamedThing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Generate",
          "name": "Generate",
          "package": "haskell-generate",
          "source": "src/Language-Haskell-Generate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Generate",
          "module": "Language.Haskell.Generate",
          "name": "Generate",
          "package": "haskell-generate",
          "partial": "Generate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-generate/docs/Language-Haskell-Generate.html#"
      }
    }
  ]
]