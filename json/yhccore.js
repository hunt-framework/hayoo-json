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
        "word": "yhccore"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Binary",
          "name": "Binary",
          "package": "yhccore",
          "source": "src/Yhc-Core-Binary.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Binary",
          "module": "Yhc.Core.Binary",
          "name": "Binary",
          "package": "yhccore",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.CaseElimination",
          "name": "CaseElimination",
          "package": "yhccore",
          "source": "src/Yhc-Core-CaseElimination.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core CaseElimination",
          "module": "Yhc.Core.CaseElimination",
          "name": "CaseElimination",
          "package": "yhccore",
          "partial": "Case Elimination",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-CaseElimination.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEliminate useless default statements\n   where the other options cover everything\n\u003c/p\u003e",
          "module": "Yhc.Core.CaseElimination",
          "name": "coreCaseElim",
          "package": "yhccore",
          "signature": "Core -\u003e Core",
          "source": "src/Yhc-Core-CaseElimination.html#coreCaseElim",
          "type": "function"
        },
        "index": {
          "description": "Eliminate useless default statements where the other options cover everything",
          "hierarchy": "Yhc Core CaseElimination",
          "module": "Yhc.Core.CaseElimination",
          "name": "coreCaseElim",
          "normalized": "Core-\u003eCore",
          "package": "yhccore",
          "partial": "Case Elim",
          "signature": "Core-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-CaseElimination.html#v:coreCaseElim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Clean",
          "name": "Clean",
          "package": "yhccore",
          "source": "src/Yhc-Core-Clean.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Clean",
          "module": "Yhc.Core.Clean",
          "name": "Clean",
          "package": "yhccore",
          "partial": "Clean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Clean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e program, and output Clean.\n   Currently one definition per line, although this is not guaranteed (pretty printing would be nice!)\n   Does not include a \u003cem\u003emodule\u003c/em\u003e definition, or imports.\n\u003c/p\u003e",
          "module": "Yhc.Core.Clean",
          "name": "coreClean",
          "package": "yhccore",
          "signature": "Core -\u003e String",
          "source": "src/Yhc-Core-Clean.html#coreClean",
          "type": "function"
        },
        "index": {
          "description": "Take Core program and output Clean Currently one definition per line although this is not guaranteed pretty printing would be nice Does not include module definition or imports",
          "hierarchy": "Yhc Core Clean",
          "module": "Yhc.Core.Clean",
          "name": "coreClean",
          "normalized": "Core-\u003eString",
          "package": "yhccore",
          "partial": "Clean",
          "signature": "Core-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Clean.html#v:coreClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEqual checks if two CoreExpr's are equal ignoring any children\n    expressions. Usually \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is what is wanted, but for some stuff\n    this is more appropriate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.Equal",
          "name": "Equal",
          "package": "yhccore",
          "source": "src/Yhc-Core-Equal.html",
          "type": "module"
        },
        "index": {
          "description": "Equal checks if two CoreExpr are equal ignoring any children expressions Usually Eq is what is wanted but for some stuff this is more appropriate",
          "hierarchy": "Yhc Core Equal",
          "module": "Yhc.Core.Equal",
          "name": "Equal",
          "package": "yhccore",
          "partial": "Equal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Equal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould be equivalent to:\n\u003c/p\u003e\u003cpre\u003e eqCoreExpr1 x y = length xs == length ys && _x vs == _y vs\n     where\n         vs = replicate (length xs) (CoreVar \"\")\n         (xs,_x) = uniplate x\n         (ys,_y) = uniplate y\n\u003c/pre\u003e",
          "module": "Yhc.Core.Equal",
          "name": "CoreExpr1",
          "package": "yhccore",
          "source": "src/Yhc-Core-Equal.html#CoreExpr1",
          "type": "data"
        },
        "index": {
          "description": "Should be equivalent to eqCoreExpr1 length xs length ys vs vs where vs replicate length xs CoreVar xs uniplate ys uniplate",
          "hierarchy": "Yhc Core Equal",
          "module": "Yhc.Core.Equal",
          "name": "CoreExpr1",
          "package": "yhccore",
          "partial": "Core Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Equal.html#t:CoreExpr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Equal",
          "name": "coreExpr1",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreExpr1",
          "source": "src/Yhc-Core-Equal.html#coreExpr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Equal",
          "module": "Yhc.Core.Equal",
          "name": "coreExpr1",
          "normalized": "CoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Expr",
          "signature": "CoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Equal.html#v:coreExpr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Equal",
          "name": "eqCoreExpr1",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Equal.html#eqCoreExpr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Equal",
          "module": "Yhc.Core.Equal",
          "name": "eqCoreExpr1",
          "normalized": "CoreExpr-\u003eCoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Expr",
          "signature": "CoreExpr-\u003eCoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Equal.html#v:eqCoreExpr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn: x -\u003e y x\n\u003c/p\u003e\u003cp\u003ex is bound\n\u003c/p\u003e\u003cp\u003ey is free\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.FreeVar",
          "name": "FreeVar",
          "package": "yhccore",
          "source": "src/Yhc-Core-FreeVar.html",
          "type": "module"
        },
        "index": {
          "description": "In is bound is free",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "FreeVar",
          "package": "yhccore",
          "partial": "Free Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich variables are mentioned in an expression\n\u003c/p\u003e",
          "module": "[\"Yhc.Core.FreeVar\",\"Yhc.Core.FreeVar2\",\"Yhc.Core.FreeVar3\"]",
          "name": "collectAllVars",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e [CoreVarName]",
          "source": "src/Yhc-Core-FreeVar3.html#collectAllVars",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:collectAllVars\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:collectAllVars\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:collectAllVars\"]"
        },
        "index": {
          "description": "Which variables are mentioned in an expression",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "collectAllVars",
          "normalized": "CoreExpr-\u003e[CoreVarName]",
          "package": "yhccore",
          "partial": "All Vars",
          "signature": "CoreExpr-\u003e[CoreVarName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:collectAllVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich variables are introduced at any point,\n   i.e. LHS of a case alternative, or by a let\n\u003c/p\u003e",
          "module": "[\"Yhc.Core.FreeVar\",\"Yhc.Core.FreeVar2\",\"Yhc.Core.FreeVar3\"]",
          "name": "collectBoundVars",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e [CoreVarName]",
          "source": "src/Yhc-Core-FreeVar3.html#collectBoundVars",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:collectBoundVars\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:collectBoundVars\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:collectBoundVars\"]"
        },
        "index": {
          "description": "Which variables are introduced at any point i.e LHS of case alternative or by let",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "collectBoundVars",
          "normalized": "CoreExpr-\u003e[CoreVarName]",
          "package": "yhccore",
          "partial": "Bound Vars",
          "signature": "CoreExpr-\u003e[CoreVarName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:collectBoundVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich variables are in the used in an expression\n   before being defined. No variable will occur more than once\n\u003c/p\u003e",
          "module": "[\"Yhc.Core.FreeVar\",\"Yhc.Core.FreeVar2\",\"Yhc.Core.FreeVar3\"]",
          "name": "collectFreeVars",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e [CoreVarName]",
          "source": "src/Yhc-Core-FreeVar3.html#collectFreeVars",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:collectFreeVars\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:collectFreeVars\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:collectFreeVars\"]"
        },
        "index": {
          "description": "Which variables are in the used in an expression before being defined No variable will occur more than once",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "collectFreeVars",
          "normalized": "CoreExpr-\u003e[CoreVarName]",
          "package": "yhccore",
          "partial": "Free Vars",
          "signature": "CoreExpr-\u003e[CoreVarName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:collectFreeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of uses of a free variable.\n   If a variable is used in different branches of a case, it is only\n   considered to be the maximum of these two branches.\n\u003c/p\u003e",
          "module": "[\"Yhc.Core.FreeVar\",\"Yhc.Core.FreeVar2\",\"Yhc.Core.FreeVar3\"]",
          "name": "countFreeVar",
          "package": "yhccore",
          "signature": "CoreVarName -\u003e CoreExpr -\u003e Int",
          "source": "src/Yhc-Core-FreeVar3.html#countFreeVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:countFreeVar\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:countFreeVar\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:countFreeVar\"]"
        },
        "index": {
          "description": "Count the number of uses of free variable If variable is used in different branches of case it is only considered to be the maximum of these two branches",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "countFreeVar",
          "normalized": "CoreVarName-\u003eCoreExpr-\u003eInt",
          "package": "yhccore",
          "partial": "Free Var",
          "signature": "CoreVarName-\u003eCoreExpr-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:countFreeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all free occurances of variables with a new expression\n\u003c/p\u003e",
          "module": "[\"Yhc.Core.FreeVar\",\"Yhc.Core.FreeVar2\",\"Yhc.Core.FreeVar3\"]",
          "name": "replaceFreeVars",
          "package": "yhccore",
          "signature": "[(CoreVarName, CoreExpr)] -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-FreeVar3.html#replaceFreeVars",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:replaceFreeVars\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:replaceFreeVars\",\"http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:replaceFreeVars\"]"
        },
        "index": {
          "description": "Replace all free occurances of variables with new expression",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "replaceFreeVars",
          "normalized": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Free Vars",
          "signature": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:replaceFreeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust \u003ccode\u003euniqueFreeVarsWith\u003c/code\u003e, but with a default set of variables\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVars",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-FreeVar.html#uniqueBoundVars",
          "type": "function"
        },
        "index": {
          "description": "Just uniqueFreeVarsWith but with default set of variables",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVars",
          "normalized": "CoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Bound Vars",
          "signature": "CoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a whole Core program have unique free variables.\n   Between functions, they may share variables\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVarsCore",
          "package": "yhccore",
          "signature": "Core -\u003e Core",
          "source": "src/Yhc-Core-FreeVar.html#uniqueBoundVarsCore",
          "type": "function"
        },
        "index": {
          "description": "Make whole Core program have unique free variables Between functions they may share variables",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVarsCore",
          "normalized": "Core-\u003eCore",
          "package": "yhccore",
          "partial": "Bound Vars Core",
          "signature": "Core-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVarsCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a whole function have unique free variables\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVarsFunc",
          "package": "yhccore",
          "signature": "CoreFunc -\u003e CoreFunc",
          "source": "src/Yhc-Core-FreeVar.html#uniqueBoundVarsFunc",
          "type": "function"
        },
        "index": {
          "description": "Make whole function have unique free variables",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVarsFunc",
          "normalized": "CoreFunc-\u003eCoreFunc",
          "package": "yhccore",
          "partial": "Bound Vars Func",
          "signature": "CoreFunc-\u003eCoreFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVarsFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all variables which are locally defined with new names\n   from the given list. Raises an error if not enough free variables\n   are supplied\n\u003c/p\u003e\u003cp\u003eIf any in the new list clashes with a name in \u003ccode\u003e\u003ca\u003ecollectFreeVars\u003c/a\u003e\u003c/code\u003e this\n   will return a program with different semantics!\n\u003c/p\u003e\u003cp\u003eProperty: collectFreeVars (uniqueFreeVarsWith newvars x) \u003ccode\u003esubset\u003c/code\u003e newvars\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVarsWith",
          "package": "yhccore",
          "signature": "[String] -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-FreeVar.html#uniqueBoundVarsWith",
          "type": "function"
        },
        "index": {
          "description": "Replace all variables which are locally defined with new names from the given list Raises an error if not enough free variables are supplied If any in the new list clashes with name in collectFreeVars this will return program with different semantics Property collectFreeVars uniqueFreeVarsWith newvars subset newvars",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVarsWith",
          "normalized": "[String]-\u003eCoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Bound Vars With",
          "signature": "[String]-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVarsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust \u003ccode\u003euniqueFreeVarsWith\u003c/code\u003e, but with a certain set excluded\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVarsWithout",
          "package": "yhccore",
          "signature": "[String] -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-FreeVar.html#uniqueBoundVarsWithout",
          "type": "function"
        },
        "index": {
          "description": "Just uniqueFreeVarsWith but with certain set excluded",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "uniqueBoundVarsWithout",
          "normalized": "[String]-\u003eCoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Bound Vars Without",
          "signature": "[String]-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVarsWithout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a prefix, generate a stream of variables\n   Each will be unique in the series\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar",
          "name": "variableSupply",
          "package": "yhccore",
          "signature": "Char -\u003e [String]",
          "source": "src/Yhc-Core-FreeVar.html#variableSupply",
          "type": "function"
        },
        "index": {
          "description": "Given prefix generate stream of variables Each will be unique in the series",
          "hierarchy": "Yhc Core FreeVar",
          "module": "Yhc.Core.FreeVar",
          "name": "variableSupply",
          "normalized": "Char-\u003e[String]",
          "package": "yhccore",
          "partial": "Supply",
          "signature": "Char-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:variableSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn: x -\u003e y x\n\u003c/p\u003e\u003cp\u003ex is bound\n\u003c/p\u003e\u003cp\u003ey is free\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.FreeVar2",
          "name": "FreeVar2",
          "package": "yhccore",
          "source": "src/Yhc-Core-FreeVar2.html",
          "type": "module"
        },
        "index": {
          "description": "In is bound is free",
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "FreeVar2",
          "package": "yhccore",
          "partial": "Free Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar2",
          "name": "FreeVar",
          "package": "yhccore",
          "source": "src/Yhc-Core-FreeVar2.html#FreeVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "FreeVar",
          "package": "yhccore",
          "partial": "Free Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#t:FreeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar2",
          "name": "deleteVars",
          "package": "yhccore",
          "signature": "[String] -\u003e FreeVar ()",
          "source": "src/Yhc-Core-FreeVar2.html#deleteVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "deleteVars",
          "normalized": "[String]-\u003eFreeVar()",
          "package": "yhccore",
          "partial": "Vars",
          "signature": "[String]-\u003eFreeVar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:deleteVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar2",
          "name": "freeVars",
          "package": "yhccore",
          "signature": "Char -\u003e [String]",
          "source": "src/Yhc-Core-FreeVar2.html#freeVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "freeVars",
          "normalized": "Char-\u003e[String]",
          "package": "yhccore",
          "partial": "Vars",
          "signature": "Char-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:freeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar2",
          "name": "getVar",
          "package": "yhccore",
          "signature": "FreeVar String",
          "source": "src/Yhc-Core-FreeVar2.html#getVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "getVar",
          "package": "yhccore",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:getVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar2",
          "name": "getVars",
          "package": "yhccore",
          "signature": "FreeVar [String]",
          "source": "src/Yhc-Core-FreeVar2.html#getVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "getVars",
          "normalized": "FreeVar[String]",
          "package": "yhccore",
          "partial": "Vars",
          "signature": "FreeVar[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:getVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar2",
          "name": "putVars",
          "package": "yhccore",
          "signature": "[String] -\u003e FreeVar ()",
          "source": "src/Yhc-Core-FreeVar2.html#putVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "putVars",
          "normalized": "[String]-\u003eFreeVar()",
          "package": "yhccore",
          "partial": "Vars",
          "signature": "[String]-\u003eFreeVar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:putVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar2",
          "name": "runFreeVars",
          "package": "yhccore",
          "signature": "FreeVar a -\u003e a",
          "source": "src/Yhc-Core-FreeVar2.html#runFreeVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "runFreeVars",
          "normalized": "FreeVar a-\u003ea",
          "package": "yhccore",
          "partial": "Free Vars",
          "signature": "FreeVar a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:runFreeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all variables which are locally defined with new names\n   from the given list. Raises an error if not enough free variables\n   are supplied\n\u003c/p\u003e\u003cp\u003eIf any in the new list clashes with a name in \u003ccode\u003e\u003ca\u003ecollectFreeVars\u003c/a\u003e\u003c/code\u003e this\n   will return a program with different semantics!\n\u003c/p\u003e\u003cp\u003eProperty: collectFreeVars (uniqueFreeVarsWith newvars x) \u003ccode\u003esubset\u003c/code\u003e newvars\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar2",
          "name": "uniqueBoundVars",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e FreeVar CoreExpr",
          "source": "src/Yhc-Core-FreeVar2.html#uniqueBoundVars",
          "type": "function"
        },
        "index": {
          "description": "Replace all variables which are locally defined with new names from the given list Raises an error if not enough free variables are supplied If any in the new list clashes with name in collectFreeVars this will return program with different semantics Property collectFreeVars uniqueFreeVarsWith newvars subset newvars",
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "uniqueBoundVars",
          "normalized": "CoreExpr-\u003eFreeVar CoreExpr",
          "package": "yhccore",
          "partial": "Bound Vars",
          "signature": "CoreExpr-\u003eFreeVar CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:uniqueBoundVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a whole Core program have unique free variables.\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar2",
          "name": "uniqueBoundVarsCore",
          "package": "yhccore",
          "signature": "Core -\u003e FreeVar Core",
          "source": "src/Yhc-Core-FreeVar2.html#uniqueBoundVarsCore",
          "type": "function"
        },
        "index": {
          "description": "Make whole Core program have unique free variables",
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "uniqueBoundVarsCore",
          "normalized": "Core-\u003eFreeVar Core",
          "package": "yhccore",
          "partial": "Bound Vars Core",
          "signature": "Core-\u003eFreeVar Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:uniqueBoundVarsCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a whole function have unique free variables\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar2",
          "name": "uniqueBoundVarsFunc",
          "package": "yhccore",
          "signature": "CoreFunc -\u003e FreeVar CoreFunc",
          "source": "src/Yhc-Core-FreeVar2.html#uniqueBoundVarsFunc",
          "type": "function"
        },
        "index": {
          "description": "Make whole function have unique free variables",
          "hierarchy": "Yhc Core FreeVar2",
          "module": "Yhc.Core.FreeVar2",
          "name": "uniqueBoundVarsFunc",
          "normalized": "CoreFunc-\u003eFreeVar CoreFunc",
          "package": "yhccore",
          "partial": "Bound Vars Func",
          "signature": "CoreFunc-\u003eFreeVar CoreFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:uniqueBoundVarsFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn: x -\u003e y x\n\u003c/p\u003e\u003cp\u003ex is bound\n\u003c/p\u003e\u003cp\u003ey is free\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.FreeVar3",
          "name": "FreeVar3",
          "package": "yhccore",
          "source": "src/Yhc-Core-FreeVar3.html",
          "type": "module"
        },
        "index": {
          "description": "In is bound is free",
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "FreeVar3",
          "package": "yhccore",
          "partial": "Free Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the free variables in the second expression\n   are also in the first one. It usually indicates an error to\n   introduce new free variables in transformation.\n\u003c/p\u003e\u003cp\u003eReturn True for safe, False for probably buggy.\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar3",
          "name": "checkFreeVar",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-FreeVar3.html#checkFreeVar",
          "type": "function"
        },
        "index": {
          "description": "Check that the free variables in the second expression are also in the first one It usually indicates an error to introduce new free variables in transformation Return True for safe False for probably buggy",
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "checkFreeVar",
          "normalized": "CoreExpr-\u003eCoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Free Var",
          "signature": "CoreExpr-\u003eCoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:checkFreeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar3",
          "name": "duplicateExpr",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e m CoreExpr",
          "source": "src/Yhc-Core-FreeVar3.html#duplicateExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "duplicateExpr",
          "normalized": "CoreExpr-\u003ea CoreExpr",
          "package": "yhccore",
          "partial": "Expr",
          "signature": "CoreExpr-\u003em CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:duplicateExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar3",
          "name": "freeVars",
          "package": "yhccore",
          "signature": "Char -\u003e [String]",
          "source": "src/Yhc-Core-FreeVar3.html#freeVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "freeVars",
          "normalized": "Char-\u003e[String]",
          "package": "yhccore",
          "partial": "Vars",
          "signature": "Char-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:freeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar3",
          "name": "getVar",
          "package": "yhccore",
          "signature": "m CoreVarName",
          "source": "src/Yhc-Core-FreeVar3.html#getVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "getVar",
          "package": "yhccore",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:getVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar3",
          "name": "getVars",
          "package": "yhccore",
          "signature": "Int -\u003e m [CoreVarName]",
          "source": "src/Yhc-Core-FreeVar3.html#getVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "getVars",
          "normalized": "Int-\u003ea[CoreVarName]",
          "package": "yhccore",
          "partial": "Vars",
          "signature": "Int-\u003em[CoreVarName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:getVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.FreeVar3",
          "name": "replaceFreeVarsUnique",
          "package": "yhccore",
          "signature": "[(CoreVarName, CoreExpr)] -\u003e CoreExpr -\u003e m CoreExpr",
          "source": "src/Yhc-Core-FreeVar3.html#replaceFreeVarsUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "replaceFreeVarsUnique",
          "normalized": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003ea CoreExpr",
          "package": "yhccore",
          "partial": "Free Vars Unique",
          "signature": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003em CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:replaceFreeVarsUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the variables that are defined to one-level depth\n   and a function to replace them\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar3",
          "name": "uniplateBoundVars",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e ([CoreVarName], [CoreVarName] -\u003e CoreExpr)",
          "source": "src/Yhc-Core-FreeVar3.html#uniplateBoundVars",
          "type": "function"
        },
        "index": {
          "description": "Get the variables that are defined to one-level depth and function to replace them",
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "uniplateBoundVars",
          "normalized": "CoreExpr-\u003e([CoreVarName],[CoreVarName]-\u003eCoreExpr)",
          "package": "yhccore",
          "partial": "Bound Vars",
          "signature": "CoreExpr-\u003e([CoreVarName],[CoreVarName]-\u003eCoreExpr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:uniplateBoundVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake care: If v123 is a free variable, then make sure getVar starts above that\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar3",
          "name": "uniqueBoundVars",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e m CoreExpr",
          "source": "src/Yhc-Core-FreeVar3.html#uniqueBoundVars",
          "type": "function"
        },
        "index": {
          "description": "Take care If v123 is free variable then make sure getVar starts above that",
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "uniqueBoundVars",
          "normalized": "CoreExpr-\u003ea CoreExpr",
          "package": "yhccore",
          "partial": "Bound Vars",
          "signature": "CoreExpr-\u003em CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:uniqueBoundVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a whole Core program have unique free variables.\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar3",
          "name": "uniqueBoundVarsCore",
          "package": "yhccore",
          "signature": "Core -\u003e m Core",
          "source": "src/Yhc-Core-FreeVar3.html#uniqueBoundVarsCore",
          "type": "function"
        },
        "index": {
          "description": "Make whole Core program have unique free variables",
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "uniqueBoundVarsCore",
          "normalized": "Core-\u003ea Core",
          "package": "yhccore",
          "partial": "Bound Vars Core",
          "signature": "Core-\u003em Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:uniqueBoundVarsCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a whole function have unique free variables\n\u003c/p\u003e",
          "module": "Yhc.Core.FreeVar3",
          "name": "uniqueBoundVarsFunc",
          "package": "yhccore",
          "signature": "CoreFunc -\u003e m CoreFunc",
          "source": "src/Yhc-Core-FreeVar3.html#uniqueBoundVarsFunc",
          "type": "function"
        },
        "index": {
          "description": "Make whole function have unique free variables",
          "hierarchy": "Yhc Core FreeVar3",
          "module": "Yhc.Core.FreeVar3",
          "name": "uniqueBoundVarsFunc",
          "normalized": "CoreFunc-\u003ea CoreFunc",
          "package": "yhccore",
          "partial": "Bound Vars Func",
          "signature": "CoreFunc-\u003em CoreFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:uniqueBoundVarsFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Haskell",
          "name": "Haskell",
          "package": "yhccore",
          "source": "src/Yhc-Core-Haskell.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Haskell",
          "module": "Yhc.Core.Haskell",
          "name": "Haskell",
          "package": "yhccore",
          "partial": "Haskell",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Haskell.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e program, and output Haskell.\n   Fix up as much as possible\n\u003c/p\u003e",
          "module": "Yhc.Core.Haskell",
          "name": "coreHaskell",
          "package": "yhccore",
          "signature": "Core -\u003e String",
          "source": "src/Yhc-Core-Haskell.html#coreHaskell",
          "type": "function"
        },
        "index": {
          "description": "Take Core program and output Haskell Fix up as much as possible",
          "hierarchy": "Yhc Core Haskell",
          "module": "Yhc.Core.Haskell",
          "name": "coreHaskell",
          "normalized": "Core-\u003eString",
          "package": "yhccore",
          "partial": "Haskell",
          "signature": "Core-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Haskell.html#v:coreHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e program, and output Haskell.\n   Currently one definition per line, although this is not guaranteed (pretty printing would be nice!)\n   Does not include a \u003cem\u003emodule\u003c/em\u003e definition, or imports.\n\u003c/p\u003e",
          "module": "Yhc.Core.Haskell",
          "name": "coreHaskellDirect",
          "package": "yhccore",
          "signature": "Core -\u003e String",
          "source": "src/Yhc-Core-Haskell.html#coreHaskellDirect",
          "type": "function"
        },
        "index": {
          "description": "Take Core program and output Haskell Currently one definition per line although this is not guaranteed pretty printing would be nice Does not include module definition or imports",
          "hierarchy": "Yhc Core Haskell",
          "module": "Yhc.Core.Haskell",
          "name": "coreHaskellDirect",
          "normalized": "Core-\u003eString",
          "package": "yhccore",
          "partial": "Haskell Direct",
          "signature": "Core-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Haskell.html#v:coreHaskellDirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Html",
          "name": "Html",
          "package": "yhccore",
          "source": "src/Yhc-Core-Html.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Html",
          "module": "Yhc.Core.Html",
          "name": "Html",
          "package": "yhccore",
          "partial": "Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Html.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Html",
          "name": "coreHtml",
          "package": "yhccore",
          "signature": "Core -\u003e String",
          "source": "src/Yhc-Core-Html.html#coreHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Html",
          "module": "Yhc.Core.Html",
          "name": "coreHtml",
          "normalized": "Core-\u003eString",
          "package": "yhccore",
          "partial": "Html",
          "signature": "Core-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Html.html#v:coreHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInlining module.\n\u003c/p\u003e\u003cp\u003eThis module will let you perform some inlining on Yhc.Core code. The \u003ccode\u003e\u003ca\u003eInlineMode\u003c/a\u003e\u003c/code\u003e argument\n    lets you select what algorithm is used. All should be terminating, and none should\n    increase the number of function calls in a program.\n\u003c/p\u003e\u003cp\u003eFor comparison, GHC's inlining mode is more powerful than \u003ccode\u003e\u003ca\u003eInlineForward\u003c/a\u003e\u003c/code\u003e, but less\n    powerful than \u003ccode\u003e\u003ca\u003eInlineFull\u003c/a\u003e\u003c/code\u003e. (And just so people understand, powerful does not mean more\n    performance, it means more inlining - the two are not always the same!)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineNone\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNo inlining. Equivalent to \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e :)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineAlias\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA function is inlined if it is aliased to another function.\n\u003c/p\u003e\u003cp\u003eA function is aliased if all it does is call another function with the\n    same arguments in the same order. i.e.\n\u003c/p\u003e\u003cpre\u003e f x y z = g x y z\n\u003c/pre\u003e\u003cp\u003eNote that a function is not aliased if any argument is duplicated, the\n    RHS is a primitive or a constructor, or the arguments are reordered.\n\u003c/p\u003e\u003cp\u003eThis restriction means that inlining can even occur when f is used\n    higher order, g can be replaced.\n\u003c/p\u003e\u003cp\u003eThis mode will never increase the code size.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineForward\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA function is inlined if it is a forwarder.\n\u003c/p\u003e\u003cp\u003eA function is a forwarder if all it does is call another function,\n    using only the given arguments, possibly reordered but not duplicated.\n    A forwarder can also be a single constant value, or a simple argument\n    value (a projection), or a constructor with no arguments. i.e.\n\u003c/p\u003e\u003cpre\u003e f x y z = 12\n f x y z = g z y\n f x y z = x\n\u003c/pre\u003e\u003cp\u003eThe function is only inlined if it is called saturated.\n\u003c/p\u003e\u003cp\u003eThis mode will never increase the code size.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineCallOnce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA function is inlined if it is a forwarder, or if there is only one\n    caller. Only inlined if called saturated. Will never increase the code\n    size.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineFull\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis does the most inlining it can, but never inlines the same function\n    more than once in a given expression - to ensure termination. Also doesn't\n    inline CAF's, since that would go wrong. Large functions, recursive functions,\n    duplicated arguments etc - all are inlined without question.\n\u003c/p\u003e\u003cp\u003eDuplicated arguments are moved into a let, to ensure they are not computed\n    additional times.\n\u003c/p\u003e\u003cp\u003eThis mode is more than likely to increase the code size in most programs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.Inline",
          "name": "Inline",
          "package": "yhccore",
          "source": "src/Yhc-Core-Inline.html",
          "type": "module"
        },
        "index": {
          "description": "Inlining module This module will let you perform some inlining on Yhc.Core code The InlineMode argument lets you select what algorithm is used All should be terminating and none should increase the number of function calls in program For comparison GHC inlining mode is more powerful than InlineForward but less powerful than InlineFull And just so people understand powerful does not mean more performance it means more inlining the two are not always the same InlineNone No inlining Equivalent to id InlineAlias function is inlined if it is aliased to another function function is aliased if all it does is call another function with the same arguments in the same order i.e Note that function is not aliased if any argument is duplicated the RHS is primitive or constructor or the arguments are reordered This restriction means that inlining can even occur when is used higher order can be replaced This mode will never increase the code size InlineForward function is inlined if it is forwarder function is forwarder if all it does is call another function using only the given arguments possibly reordered but not duplicated forwarder can also be single constant value or simple argument value projection or constructor with no arguments i.e The function is only inlined if it is called saturated This mode will never increase the code size InlineCallOnce function is inlined if it is forwarder or if there is only one caller Only inlined if called saturated Will never increase the code size InlineFull This does the most inlining it can but never inlines the same function more than once in given expression to ensure termination Also doesn inline CAF since that would go wrong Large functions recursive functions duplicated arguments etc all are inlined without question Duplicated arguments are moved into let to ensure they are not computed additional times This mode is more than likely to increase the code size in most programs",
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "Inline",
          "package": "yhccore",
          "partial": "Inline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Inline",
          "name": "InlineMode",
          "package": "yhccore",
          "source": "src/Yhc-Core-Inline.html#InlineMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "InlineMode",
          "package": "yhccore",
          "partial": "Inline Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#t:InlineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ef a b c = g a b c, calls to g become calls to f\n\u003c/p\u003e",
          "module": "Yhc.Core.Inline",
          "name": "InlineAlias",
          "package": "yhccore",
          "signature": "InlineAlias",
          "source": "src/Yhc-Core-Inline.html#InlineMode",
          "type": "function"
        },
        "index": {
          "description": "calls to become calls to",
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "InlineAlias",
          "package": "yhccore",
          "partial": "Inline Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ef is called only once\n\u003c/p\u003e",
          "module": "Yhc.Core.Inline",
          "name": "InlineCallOnce",
          "package": "yhccore",
          "signature": "InlineCallOnce",
          "source": "src/Yhc-Core-Inline.html#InlineMode",
          "type": "function"
        },
        "index": {
          "description": "is called only once",
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "InlineCallOnce",
          "package": "yhccore",
          "partial": "Inline Call Once",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineCallOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ef a b c = g a b, g b a, a (g may be a constructor)\n\u003c/p\u003e",
          "module": "Yhc.Core.Inline",
          "name": "InlineForward",
          "package": "yhccore",
          "signature": "InlineForward",
          "source": "src/Yhc-Core-Inline.html#InlineMode",
          "type": "function"
        },
        "index": {
          "description": "may be constructor",
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "InlineForward",
          "package": "yhccore",
          "partial": "Inline Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you can inline it, do so! Breaks on first recursive call\n\u003c/p\u003e",
          "module": "Yhc.Core.Inline",
          "name": "InlineFull",
          "package": "yhccore",
          "signature": "InlineFull",
          "source": "src/Yhc-Core-Inline.html#InlineMode",
          "type": "function"
        },
        "index": {
          "description": "If you can inline it do so Breaks on first recursive call",
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "InlineFull",
          "package": "yhccore",
          "partial": "Inline Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno inlining at all\n\u003c/p\u003e",
          "module": "Yhc.Core.Inline",
          "name": "InlineNone",
          "package": "yhccore",
          "signature": "InlineNone",
          "source": "src/Yhc-Core-Inline.html#InlineMode",
          "type": "function"
        },
        "index": {
          "description": "no inlining at all",
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "InlineNone",
          "package": "yhccore",
          "partial": "Inline None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Inline",
          "name": "coreInline",
          "package": "yhccore",
          "signature": "InlineMode -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-Inline.html#coreInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "coreInline",
          "normalized": "InlineMode-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Inline",
          "signature": "InlineMode-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:coreInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline a function, fails if it would produce a lambda\n   See \u003ccode\u003e\u003ca\u003ecoreInlineFuncLambda\u003c/a\u003e\u003c/code\u003e for a version without this property\n\u003c/p\u003e",
          "module": "Yhc.Core.Inline",
          "name": "coreInlineFunc",
          "package": "yhccore",
          "signature": "CoreFunc -\u003e [CoreExpr] -\u003e Maybe CoreExpr",
          "source": "src/Yhc-Core-Inline.html#coreInlineFunc",
          "type": "function"
        },
        "index": {
          "description": "Inline function fails if it would produce lambda See coreInlineFuncLambda for version without this property",
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "coreInlineFunc",
          "normalized": "CoreFunc-\u003e[CoreExpr]-\u003eMaybe CoreExpr",
          "package": "yhccore",
          "partial": "Inline Func",
          "signature": "CoreFunc-\u003e[CoreExpr]-\u003eMaybe CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:coreInlineFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline a function, generating a lambda if necessary\n   NOTE: Should this return a CoreLam now we have this in the AST\n\u003c/p\u003e",
          "module": "Yhc.Core.Inline",
          "name": "coreInlineFuncLambda",
          "package": "yhccore",
          "signature": "CoreFunc -\u003e [CoreExpr] -\u003e ([String], CoreExpr)",
          "source": "src/Yhc-Core-Inline.html#coreInlineFuncLambda",
          "type": "function"
        },
        "index": {
          "description": "Inline function generating lambda if necessary NOTE Should this return CoreLam now we have this in the AST",
          "hierarchy": "Yhc Core Inline",
          "module": "Yhc.Core.Inline",
          "name": "coreInlineFuncLambda",
          "normalized": "CoreFunc-\u003e[CoreExpr]-\u003e([String],CoreExpr)",
          "package": "yhccore",
          "partial": "Inline Func Lambda",
          "signature": "CoreFunc-\u003e[CoreExpr]-\u003e([String],CoreExpr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:coreInlineFuncLambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "Binary",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-Binary.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "Binary",
          "package": "yhccore",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "Binary",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-Binary.html#Binary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "Binary",
          "package": "yhccore",
          "partial": "Binary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#t:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "get",
          "package": "yhccore",
          "signature": "Handle -\u003e IO a",
          "source": "src/Yhc-Core-Internal-Binary.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "get",
          "normalized": "Handle-\u003eIO a",
          "package": "yhccore",
          "signature": "Handle-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "getByte",
          "package": "yhccore",
          "signature": "Handle -\u003e IO Int",
          "source": "src/Yhc-Core-Internal-Binary.html#getByte",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "getByte",
          "normalized": "Handle-\u003eIO Int",
          "package": "yhccore",
          "partial": "Byte",
          "signature": "Handle-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:getByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "putByte",
          "package": "yhccore",
          "signature": "Handle -\u003e Int -\u003e IO ()",
          "source": "src/Yhc-Core-Internal-Binary.html#putByte",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "putByte",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "yhccore",
          "partial": "Byte",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:putByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "put_",
          "package": "yhccore",
          "signature": "Handle -\u003e a -\u003e IO ()",
          "source": "src/Yhc-Core-Internal-Binary.html#put_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "put_",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "yhccore",
          "signature": "Handle-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "readBinary",
          "package": "yhccore",
          "signature": "FilePath -\u003e IO a",
          "source": "src/Yhc-Core-Internal-Binary.html#readBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "readBinary",
          "normalized": "FilePath-\u003eIO a",
          "package": "yhccore",
          "partial": "Binary",
          "signature": "FilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:readBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "showGet",
          "package": "yhccore",
          "signature": "Handle -\u003e IO a",
          "source": "src/Yhc-Core-Internal-Binary.html#showGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "showGet",
          "normalized": "Handle-\u003eIO a",
          "package": "yhccore",
          "partial": "Get",
          "signature": "Handle-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:showGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "showPut",
          "package": "yhccore",
          "signature": "Handle -\u003e a -\u003e IO ()",
          "source": "src/Yhc-Core-Internal-Binary.html#showPut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "showPut",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "yhccore",
          "partial": "Put",
          "signature": "Handle-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:showPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Binary",
          "name": "writeBinary",
          "package": "yhccore",
          "signature": "FilePath -\u003e a -\u003e IO ()",
          "source": "src/Yhc-Core-Internal-Binary.html#writeBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Binary",
          "module": "Yhc.Core.Internal.Binary",
          "name": "writeBinary",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "yhccore",
          "partial": "Binary",
          "signature": "FilePath-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:writeBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.General",
          "name": "General",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-General.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Internal General",
          "module": "Yhc.Core.Internal.General",
          "name": "General",
          "package": "yhccore",
          "partial": "General",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-General.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.General",
          "name": "disjoint",
          "package": "yhccore",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Yhc-Core-Internal-General.html#disjoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal General",
          "module": "Yhc.Core.Internal.General",
          "name": "disjoint",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "yhccore",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-General.html#v:disjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.General",
          "name": "ordNub",
          "package": "yhccore",
          "signature": "[a] -\u003e [a]",
          "source": "src/Yhc-Core-Internal-General.html#ordNub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal General",
          "module": "Yhc.Core.Internal.General",
          "name": "ordNub",
          "normalized": "[a]-\u003e[a]",
          "package": "yhccore",
          "partial": "Nub",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-General.html#v:ordNub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJohn Hughes's and Simon Peyton Jones's Pretty Printer Combinators\n\u003c/p\u003e\u003cp\u003eBased on \u003cem\u003eThe Design of a Pretty-printing Library\u003c/em\u003e\n in Advanced Functional Programming,\n Johan Jeuring and Erik Meijer (eds), LNCS 925\n \u003ca\u003ehttp://www.cs.chalmers.se/~rjmh/Papers/pretty.ps\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eHeavily modified by Simon Peyton Jones, Dec 96\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "HughesPJ",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-HughesPJ.html",
          "type": "module"
        },
        "index": {
          "description": "John Hughes and Simon Peyton Jones Pretty Printer Combinators Based on The Design of Pretty-printing Library in Advanced Functional Programming Johan Jeuring and Erik Meijer eds LNCS http www.cs.chalmers.se rjmh Papers pretty.ps Heavily modified by Simon Peyton Jones Dec",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "HughesPJ",
          "package": "yhccore",
          "partial": "Hughes PJ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract type of documents.\n The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance is equivalent to using \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Doc",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "The abstract type of documents The Show instance is equivalent to using render",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Doc",
          "package": "yhccore",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRendering mode.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Mode",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "Rendering mode",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Mode",
          "package": "yhccore",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rendering style.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Style",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
          "type": "data"
        },
        "index": {
          "description": "rendering style",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Style",
          "package": "yhccore",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "TextDetails",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#TextDetails",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "TextDetails",
          "package": "yhccore",
          "partial": "Text Details",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#t:TextDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbove, except that if the last line of the first argument stops\n at least one position before the first line of the second begins,\n these two lines are overlapped.  For example:\n\u003c/p\u003e\u003cpre\u003e    text \"hi\" $$ nest 5 (text \"there\")\n\u003c/pre\u003e\u003cp\u003elays out as\n\u003c/p\u003e\u003cpre\u003e    hi   there\n\u003c/pre\u003e\u003cp\u003erather than\n\u003c/p\u003e\u003cpre\u003e    hi\n         there\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, and also satisfies\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z = x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e (y \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z)\u003c/code\u003e, if \u003ccode\u003ey\u003c/code\u003e non-empty.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "($$)",
          "package": "yhccore",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#%24%24",
          "type": "function"
        },
        "index": {
          "description": "Above except that if the last line of the first argument stops at least one position before the first line of the second begins these two lines are overlapped For example text hi nest text there lays out as hi there rather than hi there is associative with identity empty and also satisfies if non-empty",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "($$) $$",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "yhccore",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbove, with no overlapping.\n \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "($+$)",
          "package": "yhccore",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#%24%2B%24",
          "type": "function"
        },
        "index": {
          "description": "Above with no overlapping is associative with identity empty",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "($+$) $+$",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "yhccore",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:-36--43--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeside, separated by space, unless one of the arguments is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "(\u003c+\u003e)",
          "package": "yhccore",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Beside separated by space unless one of the arguments is empty is associative with identity empty",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "yhccore",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeside.\n \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "(\u003c\u003e)",
          "package": "yhccore",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "Beside is associative with identity empty",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "yhccore",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Chr",
          "package": "yhccore",
          "signature": "Chr Char",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#TextDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Chr",
          "package": "yhccore",
          "partial": "Chr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:Chr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo indentation, infinitely long lines\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "LeftMode",
          "package": "yhccore",
          "signature": "LeftMode",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "No indentation infinitely long lines",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "LeftMode",
          "package": "yhccore",
          "partial": "Left Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:LeftMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll on one line\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "OneLineMode",
          "package": "yhccore",
          "signature": "OneLineMode",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "All on one line",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "OneLineMode",
          "package": "yhccore",
          "partial": "One Line Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:OneLineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "PStr",
          "package": "yhccore",
          "signature": "PStr String",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#TextDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "PStr",
          "package": "yhccore",
          "partial": "PStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:PStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal \n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "PageMode",
          "package": "yhccore",
          "signature": "PageMode",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Normal",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "PageMode",
          "package": "yhccore",
          "partial": "Page Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:PageMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Str",
          "package": "yhccore",
          "signature": "Str String",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#TextDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Str",
          "package": "yhccore",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Style",
          "package": "yhccore",
          "signature": "Style",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "Style",
          "package": "yhccore",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith zig-zag cuts\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "ZigZagMode",
          "package": "yhccore",
          "signature": "ZigZagMode",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "With zig-zag cuts",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "ZigZagMode",
          "package": "yhccore",
          "partial": "Zig Zag Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:ZigZagMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap document in \u003ccode\u003e{...}\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "braces",
          "package": "yhccore",
          "signature": "Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#braces",
          "type": "function"
        },
        "index": {
          "description": "Wrap document in",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "braces",
          "normalized": "Doc-\u003eDoc",
          "package": "yhccore",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap document in \u003ccode\u003e[...]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "brackets",
          "package": "yhccore",
          "signature": "Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#brackets",
          "type": "function"
        },
        "index": {
          "description": "Wrap document in",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "brackets",
          "normalized": "Doc-\u003eDoc",
          "package": "yhccore",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "cat",
          "package": "yhccore",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#cat",
          "type": "function"
        },
        "index": {
          "description": "Either hcat or vcat",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "cat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "yhccore",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document of height and width 1, containing a literal character.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "char",
          "package": "yhccore",
          "signature": "Char -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#char",
          "type": "function"
        },
        "index": {
          "description": "document of height and width containing literal character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "char",
          "normalized": "Char-\u003eDoc",
          "package": "yhccore",
          "signature": "Char-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e:\u003c/code\u003e character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "colon",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#colon",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "colon",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ',' character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "comma",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#comma",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "comma",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003edouble n = text (show n)\u003c/pre\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "double",
          "package": "yhccore",
          "signature": "Double -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#double",
          "type": "function"
        },
        "index": {
          "description": "double text show",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "double",
          "normalized": "Double-\u003eDoc",
          "package": "yhccore",
          "signature": "Double-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap document in \u003ccode\u003e\"...\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "doubleQuotes",
          "package": "yhccore",
          "signature": "Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#doubleQuotes",
          "type": "function"
        },
        "index": {
          "description": "Wrap document in",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "doubleQuotes",
          "normalized": "Doc-\u003eDoc",
          "package": "yhccore",
          "partial": "Quotes",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:doubleQuotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty document, with no height and no width.\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e, and anywhere\n in the argument list for \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efcat\u003c/a\u003e\u003c/code\u003e etc.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "empty",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty document with no height and no width empty is the identity for and and anywhere in the argument list for sep hcat hsep vcat fcat etc",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "empty",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '=' character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "equals",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#equals",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "equals",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "fcat",
          "package": "yhccore",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#fcat",
          "type": "function"
        },
        "index": {
          "description": "Paragraph fill version of cat",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "fcat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "yhccore",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:fcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efloat n = text (show n)\u003c/pre\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "float",
          "package": "yhccore",
          "signature": "Float -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#float",
          "type": "function"
        },
        "index": {
          "description": "float text show",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "float",
          "normalized": "Float-\u003eDoc",
          "package": "yhccore",
          "signature": "Float-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "fsep",
          "package": "yhccore",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#fsep",
          "type": "function"
        },
        "index": {
          "description": "Paragraph fill version of sep",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "fsep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "yhccore",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:fsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe general rendering interface.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "fullRender",
          "package": "yhccore",
          "signature": "Mode-\u003e Int-\u003e Float-\u003e (TextDetails -\u003e a -\u003e a)-\u003e a-\u003e Doc-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The general rendering interface",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "fullRender",
          "normalized": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea",
          "package": "yhccore",
          "partial": "Render",
          "signature": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:fullRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ehang d1 n d2 = sep [d1, nest n d2]\u003c/pre\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "hang",
          "package": "yhccore",
          "signature": "Doc -\u003e Int -\u003e Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#hang",
          "type": "function"
        },
        "index": {
          "description": "hang d1 d2 sep d1 nest d2",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "hang",
          "normalized": "Doc-\u003eInt-\u003eDoc-\u003eDoc",
          "package": "yhccore",
          "signature": "Doc-\u003eInt-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:hang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "hcat",
          "package": "yhccore",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#hcat",
          "type": "function"
        },
        "index": {
          "description": "List version of",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "hcat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "yhccore",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:hcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "hsep",
          "package": "yhccore",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#hsep",
          "type": "function"
        },
        "index": {
          "description": "List version of",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "hsep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "yhccore",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:hsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eint n = text (show n)\u003c/pre\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "int",
          "package": "yhccore",
          "signature": "Int -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#int",
          "type": "function"
        },
        "index": {
          "description": "int text show",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "int",
          "normalized": "Int-\u003eDoc",
          "package": "yhccore",
          "signature": "Int-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003einteger n = text (show n)\u003c/pre\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "integer",
          "package": "yhccore",
          "signature": "Integer -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#integer",
          "type": "function"
        },
        "index": {
          "description": "integer text show",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "integer",
          "normalized": "Integer-\u003eDoc",
          "package": "yhccore",
          "signature": "Integer-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the document is empty\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "isEmpty",
          "package": "yhccore",
          "signature": "Doc -\u003e Bool",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the document is empty",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "isEmpty",
          "normalized": "Doc-\u003eBool",
          "package": "yhccore",
          "partial": "Empty",
          "signature": "Doc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '{' character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "lbrace",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#lbrace",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "lbrace",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:lbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '[' character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "lbrack",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#lbrack",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "lbrack",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:lbrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of line, in chars\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "lineLength",
          "package": "yhccore",
          "signature": "Int",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
          "type": "function"
        },
        "index": {
          "description": "Length of line in chars",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "lineLength",
          "package": "yhccore",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:lineLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '(' character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "lparen",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#lparen",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "lparen",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:lparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rendering mode\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "mode",
          "package": "yhccore",
          "signature": "Mode",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
          "type": "function"
        },
        "index": {
          "description": "The rendering mode",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "mode",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNest (or indent) a document by a given number of positions\n (which may also be negative).  \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e satisfies the laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e 0 x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k' x) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e (k+k') x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k z \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y = x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is needed because\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is a left identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "nest",
          "package": "yhccore",
          "signature": "Int -\u003e Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#nest",
          "type": "function"
        },
        "index": {
          "description": "Nest or indent document by given number of positions which may also be negative nest satisfies the laws nest nest nest nest nest nest nest nest nest nest nest empty empty nest if non-empty The side condition on the last law is needed because empty is left identity for",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "nest",
          "normalized": "Int-\u003eDoc-\u003eDoc",
          "package": "yhccore",
          "signature": "Int-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap document in \u003ccode\u003e(...)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "parens",
          "package": "yhccore",
          "signature": "Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#parens",
          "type": "function"
        },
        "index": {
          "description": "Wrap document in",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "parens",
          "normalized": "Doc-\u003eDoc",
          "package": "yhccore",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn obsolete function, now identical to \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "ptext",
          "package": "yhccore",
          "signature": "String -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#ptext",
          "type": "function"
        },
        "index": {
          "description": "An obsolete function now identical to text",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "ptext",
          "normalized": "String-\u003eDoc",
          "package": "yhccore",
          "signature": "String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:ptext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003epunctuate p [d1, ... dn] = [d1 \u003c\u003e p, d2 \u003c\u003e p, ... dn-1 \u003c\u003e p, dn]\u003c/pre\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "punctuate",
          "package": "yhccore",
          "signature": "Doc -\u003e [Doc] -\u003e [Doc]",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#punctuate",
          "type": "function"
        },
        "index": {
          "description": "punctuate d1 dn d1 d2 dn-1 dn",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "punctuate",
          "normalized": "Doc-\u003e[Doc]-\u003e[Doc]",
          "package": "yhccore",
          "signature": "Doc-\u003e[Doc]-\u003e[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:punctuate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap document in \u003ccode\u003e'...'\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "quotes",
          "package": "yhccore",
          "signature": "Doc -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#quotes",
          "type": "function"
        },
        "index": {
          "description": "Wrap document in",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "quotes",
          "normalized": "Doc-\u003eDoc",
          "package": "yhccore",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:quotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003erational n = text (show n)\u003c/pre\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "rational",
          "package": "yhccore",
          "signature": "Rational -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#rational",
          "type": "function"
        },
        "index": {
          "description": "rational text show",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "rational",
          "normalized": "Rational-\u003eDoc",
          "package": "yhccore",
          "signature": "Rational-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '}' character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "rbrace",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#rbrace",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "rbrace",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:rbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ']' character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "rbrack",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#rbrack",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "rbrack",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:rbrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the document as a string using the default \u003ccode\u003e\u003ca\u003estyle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "render",
          "package": "yhccore",
          "signature": "Doc -\u003e String",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#render",
          "type": "function"
        },
        "index": {
          "description": "Renders the document as string using the default style",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "render",
          "normalized": "Doc-\u003eString",
          "package": "yhccore",
          "signature": "Doc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the document as a string using a specified style.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "renderStyle",
          "package": "yhccore",
          "signature": "Style -\u003e Doc -\u003e String",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#renderStyle",
          "type": "function"
        },
        "index": {
          "description": "Render the document as string using specified style",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "renderStyle",
          "normalized": "Style-\u003eDoc-\u003eString",
          "package": "yhccore",
          "partial": "Style",
          "signature": "Style-\u003eDoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:renderStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRatio of ribbon length to line length\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "ribbonsPerLine",
          "package": "yhccore",
          "signature": "Float",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
          "type": "function"
        },
        "index": {
          "description": "Ratio of ribbon length to line length",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "ribbonsPerLine",
          "package": "yhccore",
          "partial": "Per Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:ribbonsPerLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ')' character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "rparen",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#rparen",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "rparen",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:rparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ';' character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "semi",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#semi",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "semi",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "sep",
          "package": "yhccore",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#sep",
          "type": "function"
        },
        "index": {
          "description": "Either hsep or vcat",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "sep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "yhccore",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:sep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space character\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "space",
          "package": "yhccore",
          "signature": "Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#space",
          "type": "function"
        },
        "index": {
          "description": "space character",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "space",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default style (\u003ccode\u003emode=PageMode, lineLength=100, ribbonsPerLine=1.5\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "style",
          "package": "yhccore",
          "signature": "Style",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#style",
          "type": "function"
        },
        "index": {
          "description": "The default style mode PageMode lineLength ribbonsPerLine",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "style",
          "package": "yhccore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document of height 1 containing a literal string.\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e satisfies the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e t = \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e (s\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003et)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\" \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e x = x\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is necessary because \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e\n has height 1, while \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e has no height.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "text",
          "package": "yhccore",
          "signature": "String -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#text",
          "type": "function"
        },
        "index": {
          "description": "document of height containing literal string text satisfies the following laws text text text text if non-empty The side condition on the last law is necessary because text has height while empty has no height",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "text",
          "normalized": "String-\u003eDoc",
          "package": "yhccore",
          "signature": "String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "vcat",
          "package": "yhccore",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#vcat",
          "type": "function"
        },
        "index": {
          "description": "List version of",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "vcat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "yhccore",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:vcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome text, but without any width. Use for non-printing text\n such as a HTML or Latex tags\n\u003c/p\u003e",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "zeroText",
          "package": "yhccore",
          "signature": "String -\u003e Doc",
          "source": "src/Yhc-Core-Internal-HughesPJ.html#zeroText",
          "type": "function"
        },
        "index": {
          "description": "Some text but without any width Use for non-printing text such as HTML or Latex tags",
          "hierarchy": "Yhc Core Internal HughesPJ",
          "module": "Yhc.Core.Internal.HughesPJ",
          "name": "zeroText",
          "normalized": "String-\u003eDoc",
          "package": "yhccore",
          "partial": "Text",
          "signature": "String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:zeroText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Play",
          "name": "Play",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-Play.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Play",
          "module": "Yhc.Core.Internal.Play",
          "name": "Play",
          "package": "yhccore",
          "partial": "Play",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Play",
          "name": "Play",
          "package": "yhccore",
          "source": "src/Yhc-Core-Internal-Play.html#Play",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Play",
          "module": "Yhc.Core.Internal.Play",
          "name": "Play",
          "package": "yhccore",
          "partial": "Play",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#t:Play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Play",
          "name": "allChildren",
          "package": "yhccore",
          "signature": "a -\u003e [a]",
          "source": "src/Yhc-Core-Internal-Play.html#allChildren",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Play",
          "module": "Yhc.Core.Internal.Play",
          "name": "allChildren",
          "normalized": "a-\u003e[a]",
          "package": "yhccore",
          "partial": "Children",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:allChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Play",
          "name": "getChildren",
          "package": "yhccore",
          "signature": "a -\u003e [a]",
          "source": "src/Yhc-Core-Internal-Play.html#getChildren",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Play",
          "module": "Yhc.Core.Internal.Play",
          "name": "getChildren",
          "normalized": "a-\u003e[a]",
          "package": "yhccore",
          "partial": "Children",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:getChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Play",
          "name": "mapOver",
          "package": "yhccore",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Yhc-Core-Internal-Play.html#mapOver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Play",
          "module": "Yhc.Core.Internal.Play",
          "name": "mapOver",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "yhccore",
          "partial": "Over",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:mapOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Play",
          "name": "mapUnder",
          "package": "yhccore",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Yhc-Core-Internal-Play.html#mapUnder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Play",
          "module": "Yhc.Core.Internal.Play",
          "name": "mapUnder",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "yhccore",
          "partial": "Under",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:mapUnder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Play",
          "name": "mapUnderM",
          "package": "yhccore",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Yhc-Core-Internal-Play.html#mapUnderM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Play",
          "module": "Yhc.Core.Internal.Play",
          "name": "mapUnderM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "yhccore",
          "partial": "Under",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:mapUnderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Internal.Play",
          "name": "setChildren",
          "package": "yhccore",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Yhc-Core-Internal-Play.html#setChildren",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Internal Play",
          "module": "Yhc.Core.Internal.Play",
          "name": "setChildren",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "yhccore",
          "partial": "Children",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:setChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Invariant.LambdaLift",
          "name": "LambdaLift",
          "package": "yhccore",
          "source": "src/Yhc-Core-Invariant-LambdaLift.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Invariant LambdaLift",
          "module": "Yhc.Core.Invariant.LambdaLift",
          "name": "LambdaLift",
          "package": "yhccore",
          "partial": "Lambda Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant-LambdaLift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Invariant.LambdaLift",
          "name": "coreLambdaLift",
          "package": "yhccore",
          "signature": "Core -\u003e Core",
          "source": "src/Yhc-Core-Invariant-LambdaLift.html#coreLambdaLift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Invariant LambdaLift",
          "module": "Yhc.Core.Invariant.LambdaLift",
          "name": "coreLambdaLift",
          "normalized": "Core-\u003eCore",
          "package": "yhccore",
          "partial": "Lambda Lift",
          "signature": "Core-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant-LambdaLift.html#v:coreLambdaLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Invariant",
          "name": "Invariant",
          "package": "yhccore",
          "source": "src/Yhc-Core-Invariant.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "Invariant",
          "package": "yhccore",
          "partial": "Invariant",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote, not all combinations are yet implemented - they crash at runtime.\n   If you want any invariant, just email the list.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "Invariant",
          "package": "yhccore",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "data"
        },
        "index": {
          "description": "Note not all combinations are yet implemented they crash at runtime If you want any invariant just email the list",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "Invariant",
          "package": "yhccore",
          "partial": "Invariant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#t:Invariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow function numbers\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "ConsecutiveFuncs",
          "package": "yhccore",
          "signature": "ConsecutiveFuncs",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "Low function numbers",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "ConsecutiveFuncs",
          "package": "yhccore",
          "partial": "Consecutive Funcs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:ConsecutiveFuncs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll CoreCon's must be enclosed in a CoreApp.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "CoreAppCon",
          "package": "yhccore",
          "signature": "CoreAppCon",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "All CoreCon must be enclosed in CoreApp",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "CoreAppCon",
          "package": "yhccore",
          "partial": "Core App Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:CoreAppCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll CoreFun's must be enclosed in a CoreApp.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "CoreAppFun",
          "package": "yhccore",
          "signature": "CoreAppFun",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "All CoreFun must be enclosed in CoreApp",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "CoreAppFun",
          "package": "yhccore",
          "partial": "Core App Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:CoreAppFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll CoreCase's must be on a variable.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "CoreCaseVar",
          "package": "yhccore",
          "signature": "CoreCaseVar",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "All CoreCase must be on variable",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "CoreCaseVar",
          "package": "yhccore",
          "partial": "Core Case Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:CoreCaseVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll CoreApp CoreFun's must have at most one argument directly present\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "FuncArityAtMostOne",
          "package": "yhccore",
          "signature": "FuncArityAtMostOne",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "All CoreApp CoreFun must have at most one argument directly present",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "FuncArityAtMostOne",
          "package": "yhccore",
          "partial": "Func Arity At Most One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:FuncArityAtMostOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll CoreApp CoreFun's must have exactly one argument present\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "FuncArityExactlyOne",
          "package": "yhccore",
          "signature": "FuncArityExactlyOne",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "All CoreApp CoreFun must have exactly one argument present",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "FuncArityExactlyOne",
          "package": "yhccore",
          "partial": "Func Arity Exactly One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:FuncArityExactlyOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll CoreCase's must be on constructors, not constants.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoCaseConst",
          "package": "yhccore",
          "signature": "NoCaseConst",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "All CoreCase must be on constructors not constants",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoCaseConst",
          "package": "yhccore",
          "partial": "No Case Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCaseConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll constructor CoreCase's must not contain a default.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoCaseDefault",
          "package": "yhccore",
          "signature": "NoCaseDefault",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "All constructor CoreCase must not contain default",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoCaseDefault",
          "package": "yhccore",
          "partial": "No Case Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCaseDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll constructor CoreCase defaults must represent at least two constructors.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoCaseDefaultOne",
          "package": "yhccore",
          "signature": "NoCaseDefaultOne",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "All constructor CoreCase defaults must represent at least two constructors",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoCaseDefaultOne",
          "package": "yhccore",
          "partial": "No Case Default One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCaseDefaultOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CoreLam constructor must not occur.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoCoreLam",
          "package": "yhccore",
          "signature": "NoCoreLam",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "The CoreLam constructor must not occur",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoCoreLam",
          "package": "yhccore",
          "partial": "No Core Lam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCoreLam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CoreLet constructor must not occur. Removal reduces sharing\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoCoreLet",
          "package": "yhccore",
          "signature": "NoCoreLet",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "The CoreLet constructor must not occur Removal reduces sharing",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoCoreLet",
          "package": "yhccore",
          "partial": "No Core Let",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCoreLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CorePos constructor must not occur.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoCorePos",
          "package": "yhccore",
          "signature": "NoCorePos",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "The CorePos constructor must not occur",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoCorePos",
          "package": "yhccore",
          "partial": "No Core Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCorePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll CoreApp's must not have an empty argument list.\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoEmptyApp",
          "package": "yhccore",
          "signature": "NoEmptyApp",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "All CoreApp must not have an empty argument list",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoEmptyApp",
          "package": "yhccore",
          "partial": "No Empty App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoEmptyApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo partial applications of CoreCon\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoPartialAppCon",
          "package": "yhccore",
          "signature": "NoPartialAppCon",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "No partial applications of CoreCon",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoPartialAppCon",
          "package": "yhccore",
          "partial": "No Partial App Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoPartialAppCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo partial applications of CoreFun to a CorePrim\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoPartialAppPrim",
          "package": "yhccore",
          "signature": "NoPartialAppPrim",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "No partial applications of CoreFun to CorePrim",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoPartialAppPrim",
          "package": "yhccore",
          "partial": "No Partial App Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoPartialAppPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoreLet's must not be recursive. Removal reduces sharing in limited cases\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "NoRecursiveLet",
          "package": "yhccore",
          "signature": "NoRecursiveLet",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "CoreLet must not be recursive Removal reduces sharing in limited cases",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "NoRecursiveLet",
          "package": "yhccore",
          "partial": "No Recursive Let",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoRecursiveLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique variables in the whole program\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "UniqueVarsCore",
          "package": "yhccore",
          "signature": "UniqueVarsCore",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "Unique variables in the whole program",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "UniqueVarsCore",
          "package": "yhccore",
          "partial": "Unique Vars Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:UniqueVarsCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique variables in each function\n\u003c/p\u003e",
          "module": "Yhc.Core.Invariant",
          "name": "UniqueVarsFunc",
          "package": "yhccore",
          "signature": "UniqueVarsFunc",
          "source": "src/Yhc-Core-Invariant.html#Invariant",
          "type": "function"
        },
        "index": {
          "description": "Unique variables in each function",
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "UniqueVarsFunc",
          "package": "yhccore",
          "partial": "Unique Vars Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:UniqueVarsFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Invariant",
          "name": "checkInvariant",
          "package": "yhccore",
          "signature": "Invariant -\u003e Core -\u003e Bool",
          "source": "src/Yhc-Core-Invariant.html#checkInvariant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "checkInvariant",
          "normalized": "Invariant-\u003eCore-\u003eBool",
          "package": "yhccore",
          "partial": "Invariant",
          "signature": "Invariant-\u003eCore-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:checkInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Invariant",
          "name": "checkInvariants",
          "package": "yhccore",
          "signature": "[Invariant] -\u003e Core -\u003e Bool",
          "source": "src/Yhc-Core-Invariant.html#checkInvariants",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "checkInvariants",
          "normalized": "[Invariant]-\u003eCore-\u003eBool",
          "package": "yhccore",
          "partial": "Invariants",
          "signature": "[Invariant]-\u003eCore-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:checkInvariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Invariant",
          "name": "ensureInvariant",
          "package": "yhccore",
          "signature": "Invariant -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-Invariant.html#ensureInvariant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "ensureInvariant",
          "normalized": "Invariant-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Invariant",
          "signature": "Invariant-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:ensureInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Invariant",
          "name": "ensureInvariants",
          "package": "yhccore",
          "signature": "[Invariant] -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-Invariant.html#ensureInvariants",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Invariant",
          "module": "Yhc.Core.Invariant",
          "name": "ensureInvariants",
          "normalized": "[Invariant]-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Invariants",
          "signature": "[Invariant]-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:ensureInvariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Overlay",
          "name": "Overlay",
          "package": "yhccore",
          "source": "src/Yhc-Core-Overlay.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Overlay",
          "module": "Yhc.Core.Overlay",
          "name": "Overlay",
          "package": "yhccore",
          "partial": "Overlay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Overlay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecoreOverlay original overlay, returns original with the overlay substituted in\n\u003c/p\u003e",
          "module": "Yhc.Core.Overlay",
          "name": "coreOverlay",
          "package": "yhccore",
          "signature": "Core -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-Overlay.html#coreOverlay",
          "type": "function"
        },
        "index": {
          "description": "coreOverlay original overlay returns original with the overlay substituted in",
          "hierarchy": "Yhc Core Overlay",
          "module": "Yhc.Core.Overlay",
          "name": "coreOverlay",
          "normalized": "Core-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Overlay",
          "signature": "Core-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Overlay.html#v:coreOverlay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Play",
          "name": "Play",
          "package": "yhccore",
          "source": "src/Yhc-Core-Play.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Play",
          "module": "Yhc.Core.Play",
          "name": "Play",
          "package": "yhccore",
          "partial": "Play",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Play",
          "name": "PlayCore",
          "package": "yhccore",
          "source": "src/Yhc-Core-Play.html#PlayCore",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yhc Core Play",
          "module": "Yhc.Core.Play",
          "name": "PlayCore",
          "package": "yhccore",
          "partial": "Play Core",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#t:PlayCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Play",
          "name": "allCore",
          "package": "yhccore",
          "signature": "a -\u003e [CoreExpr]",
          "source": "src/Yhc-Core-Play.html#allCore",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Play",
          "module": "Yhc.Core.Play",
          "name": "allCore",
          "normalized": "a-\u003e[CoreExpr]",
          "package": "yhccore",
          "partial": "Core",
          "signature": "a-\u003e[CoreExpr]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:allCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the variables in a CoreExpr\n\u003c/p\u003e",
          "module": "Yhc.Core.Play",
          "name": "allCoreVar",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e [String]",
          "source": "src/Yhc-Core-Play.html#allCoreVar",
          "type": "function"
        },
        "index": {
          "description": "All the variables in CoreExpr",
          "hierarchy": "Yhc Core Play",
          "module": "Yhc.Core.Play",
          "name": "allCoreVar",
          "normalized": "CoreExpr-\u003e[String]",
          "package": "yhccore",
          "partial": "Core Var",
          "signature": "CoreExpr-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:allCoreVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Play",
          "name": "getChildrenCore",
          "package": "yhccore",
          "signature": "a -\u003e [CoreExpr]",
          "source": "src/Yhc-Core-Play.html#getChildrenCore",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Play",
          "module": "Yhc.Core.Play",
          "name": "getChildrenCore",
          "normalized": "a-\u003e[CoreExpr]",
          "package": "yhccore",
          "partial": "Children Core",
          "signature": "a-\u003e[CoreExpr]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:getChildrenCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Play",
          "name": "mapOverCore",
          "package": "yhccore",
          "signature": "(CoreExpr -\u003e CoreExpr) -\u003e a -\u003e a",
          "source": "src/Yhc-Core-Play.html#mapOverCore",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Play",
          "module": "Yhc.Core.Play",
          "name": "mapOverCore",
          "normalized": "(CoreExpr-\u003eCoreExpr)-\u003ea-\u003ea",
          "package": "yhccore",
          "partial": "Over Core",
          "signature": "(CoreExpr-\u003eCoreExpr)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:mapOverCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Play",
          "name": "mapUnderCore",
          "package": "yhccore",
          "signature": "(CoreExpr -\u003e CoreExpr) -\u003e a -\u003e a",
          "source": "src/Yhc-Core-Play.html#mapUnderCore",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Play",
          "module": "Yhc.Core.Play",
          "name": "mapUnderCore",
          "normalized": "(CoreExpr-\u003eCoreExpr)-\u003ea-\u003ea",
          "package": "yhccore",
          "partial": "Under Core",
          "signature": "(CoreExpr-\u003eCoreExpr)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:mapUnderCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Play",
          "name": "mapUnderCoreM",
          "package": "yhccore",
          "signature": "(CoreExpr -\u003e m CoreExpr) -\u003e a -\u003e m a",
          "source": "src/Yhc-Core-Play.html#mapUnderCoreM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Play",
          "module": "Yhc.Core.Play",
          "name": "mapUnderCoreM",
          "normalized": "(CoreExpr-\u003ea CoreExpr)-\u003eb-\u003ea b",
          "package": "yhccore",
          "partial": "Under Core",
          "signature": "(CoreExpr-\u003em CoreExpr)-\u003ea-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:mapUnderCoreM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Play",
          "name": "setChildrenCore",
          "package": "yhccore",
          "signature": "a -\u003e [CoreExpr] -\u003e a",
          "source": "src/Yhc-Core-Play.html#setChildrenCore",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Play",
          "module": "Yhc.Core.Play",
          "name": "setChildrenCore",
          "normalized": "a-\u003e[CoreExpr]-\u003ea",
          "package": "yhccore",
          "partial": "Children Core",
          "signature": "a-\u003e[CoreExpr]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:setChildrenCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "Prim",
          "package": "yhccore",
          "source": "src/Yhc-Core-Prim.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "Prim",
          "package": "yhccore",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "Prim",
          "package": "yhccore",
          "source": "src/Yhc-Core-Prim.html#Prim",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "Prim",
          "package": "yhccore",
          "partial": "Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#t:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimOp",
          "package": "yhccore",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimOp",
          "package": "yhccore",
          "partial": "Prim Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#t:PrimOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimType",
          "package": "yhccore",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimType",
          "package": "yhccore",
          "partial": "Prim Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#t:PrimType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "Prim",
          "package": "yhccore",
          "signature": "Prim",
          "source": "src/Yhc-Core-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "Prim",
          "package": "yhccore",
          "partial": "Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimAbs",
          "package": "yhccore",
          "signature": "PrimAbs",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimAbs",
          "package": "yhccore",
          "partial": "Prim Abs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimAdd",
          "package": "yhccore",
          "signature": "PrimAdd",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimAdd",
          "package": "yhccore",
          "partial": "Prim Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimBool",
          "package": "yhccore",
          "signature": "PrimBool",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimBool",
          "package": "yhccore",
          "partial": "Prim Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimCast",
          "package": "yhccore",
          "signature": "PrimCast",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimCast",
          "package": "yhccore",
          "partial": "Prim Cast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimChar",
          "package": "yhccore",
          "signature": "PrimChar",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimChar",
          "package": "yhccore",
          "partial": "Prim Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimDiv",
          "package": "yhccore",
          "signature": "PrimDiv",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimDiv",
          "package": "yhccore",
          "partial": "Prim Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimDouble",
          "package": "yhccore",
          "signature": "PrimDouble",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimDouble",
          "package": "yhccore",
          "partial": "Prim Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimEq",
          "package": "yhccore",
          "signature": "PrimEq",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimEq",
          "package": "yhccore",
          "partial": "Prim Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimFloat",
          "package": "yhccore",
          "signature": "PrimFloat",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimFloat",
          "package": "yhccore",
          "partial": "Prim Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimGe",
          "package": "yhccore",
          "signature": "PrimGe",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimGe",
          "package": "yhccore",
          "partial": "Prim Ge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimGe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimGt",
          "package": "yhccore",
          "signature": "PrimGt",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimGt",
          "package": "yhccore",
          "partial": "Prim Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimGt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimHaskell",
          "package": "yhccore",
          "signature": "PrimHaskell",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimHaskell",
          "package": "yhccore",
          "partial": "Prim Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimIO",
          "package": "yhccore",
          "signature": "PrimIO",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimIO",
          "package": "yhccore",
          "partial": "Prim IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimInt",
          "package": "yhccore",
          "signature": "PrimInt",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimInt",
          "package": "yhccore",
          "partial": "Prim Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimInteger",
          "package": "yhccore",
          "signature": "PrimInteger",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimInteger",
          "package": "yhccore",
          "partial": "Prim Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimLe",
          "package": "yhccore",
          "signature": "PrimLe",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimLe",
          "package": "yhccore",
          "partial": "Prim Le",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimLe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimLt",
          "package": "yhccore",
          "signature": "PrimLt",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimLt",
          "package": "yhccore",
          "partial": "Prim Lt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimLt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimMul",
          "package": "yhccore",
          "signature": "PrimMul",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimMul",
          "package": "yhccore",
          "partial": "Prim Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimNe",
          "package": "yhccore",
          "signature": "PrimNe",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimNe",
          "package": "yhccore",
          "partial": "Prim Ne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimNe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimNeg",
          "package": "yhccore",
          "signature": "PrimNeg",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimNeg",
          "package": "yhccore",
          "partial": "Prim Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimOrd",
          "package": "yhccore",
          "signature": "PrimOrd",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimOrd",
          "package": "yhccore",
          "partial": "Prim Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimOther",
          "package": "yhccore",
          "signature": "PrimOther String",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimOther",
          "package": "yhccore",
          "partial": "Prim Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimQuot",
          "package": "yhccore",
          "signature": "PrimQuot",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimQuot",
          "package": "yhccore",
          "partial": "Prim Quot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimQuot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimQuotRem",
          "package": "yhccore",
          "signature": "PrimQuotRem",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimQuotRem",
          "package": "yhccore",
          "partial": "Prim Quot Rem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimQuotRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimRem",
          "package": "yhccore",
          "signature": "PrimRem",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimRem",
          "package": "yhccore",
          "partial": "Prim Rem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimSeq",
          "package": "yhccore",
          "signature": "PrimSeq",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimSeq",
          "package": "yhccore",
          "partial": "Prim Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimSignum",
          "package": "yhccore",
          "signature": "PrimSignum",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimSignum",
          "package": "yhccore",
          "partial": "Prim Signum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimSignum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimString",
          "package": "yhccore",
          "signature": "PrimString",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimString",
          "package": "yhccore",
          "partial": "Prim String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimSub",
          "package": "yhccore",
          "signature": "PrimSub",
          "source": "src/Yhc-Core-Prim.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimSub",
          "package": "yhccore",
          "partial": "Prim Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimTypeAny",
          "package": "yhccore",
          "signature": "PrimTypeAny",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimTypeAny",
          "package": "yhccore",
          "partial": "Prim Type Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimTypeAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimTypeHaskell",
          "package": "yhccore",
          "signature": "PrimTypeHaskell String",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimTypeHaskell",
          "package": "yhccore",
          "partial": "Prim Type Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimTypeHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "PrimTypeUnknown",
          "package": "yhccore",
          "signature": "PrimTypeUnknown",
          "source": "src/Yhc-Core-Prim.html#PrimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "PrimTypeUnknown",
          "package": "yhccore",
          "partial": "Prim Type Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimTypeUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "coreBytecodePrims",
          "package": "yhccore",
          "signature": "[Prim]",
          "source": "src/Yhc-Core-Prim.html#coreBytecodePrims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "coreBytecodePrims",
          "normalized": "[Prim]",
          "package": "yhccore",
          "partial": "Bytecode Prims",
          "signature": "[Prim]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:coreBytecodePrims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "coreHaskellPrims",
          "package": "yhccore",
          "signature": "[Prim]",
          "source": "src/Yhc-Core-Prim.html#coreHaskellPrims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "coreHaskellPrims",
          "normalized": "[Prim]",
          "package": "yhccore",
          "partial": "Haskell Prims",
          "signature": "[Prim]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:coreHaskellPrims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "coreHaskellTypes",
          "package": "yhccore",
          "signature": "[(String, String)]",
          "source": "src/Yhc-Core-Prim.html#coreHaskellTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "coreHaskellTypes",
          "normalized": "[(String,String)]",
          "package": "yhccore",
          "partial": "Haskell Types",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:coreHaskellTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "corePrim",
          "package": "yhccore",
          "signature": "String -\u003e Prim",
          "source": "src/Yhc-Core-Prim.html#corePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "corePrim",
          "normalized": "String-\u003ePrim",
          "package": "yhccore",
          "partial": "Prim",
          "signature": "String-\u003ePrim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:corePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "corePrimMaybe",
          "package": "yhccore",
          "signature": "String -\u003e Maybe Prim",
          "source": "src/Yhc-Core-Prim.html#corePrimMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "corePrimMaybe",
          "normalized": "String-\u003eMaybe Prim",
          "package": "yhccore",
          "partial": "Prim Maybe",
          "signature": "String-\u003eMaybe Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:corePrimMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "corePrims",
          "package": "yhccore",
          "signature": "[Prim]",
          "source": "src/Yhc-Core-Prim.html#corePrims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "corePrims",
          "normalized": "[Prim]",
          "package": "yhccore",
          "partial": "Prims",
          "signature": "[Prim]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:corePrims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "primArity",
          "package": "yhccore",
          "signature": "Prim -\u003e Int",
          "source": "src/Yhc-Core-Prim.html#primArity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "primArity",
          "normalized": "Prim-\u003eInt",
          "package": "yhccore",
          "partial": "Arity",
          "signature": "Prim-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue is strict in argument n, [] is unknown\n\u003c/p\u003e",
          "module": "Yhc.Core.Prim",
          "name": "primEval",
          "package": "yhccore",
          "signature": "[CoreExpr] -\u003e CoreExpr",
          "source": "src/Yhc-Core-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "description": "True is strict in argument is unknown",
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "primEval",
          "normalized": "[CoreExpr]-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Eval",
          "signature": "[CoreExpr]-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "primName",
          "package": "yhccore",
          "signature": "String",
          "source": "src/Yhc-Core-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "primName",
          "package": "yhccore",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "primOp",
          "package": "yhccore",
          "signature": "PrimOp",
          "source": "src/Yhc-Core-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "primOp",
          "package": "yhccore",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function signature\n\u003c/p\u003e",
          "module": "Yhc.Core.Prim",
          "name": "primStrict",
          "package": "yhccore",
          "signature": "[Bool]",
          "source": "src/Yhc-Core-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "description": "function signature",
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "primStrict",
          "normalized": "[Bool]",
          "package": "yhccore",
          "partial": "Strict",
          "signature": "[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Prim",
          "name": "primType",
          "package": "yhccore",
          "signature": "[PrimType]",
          "source": "src/Yhc-Core-Prim.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Prim",
          "module": "Yhc.Core.Prim",
          "name": "primType",
          "normalized": "[PrimType]",
          "package": "yhccore",
          "partial": "Type",
          "signature": "[PrimType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Reachable",
          "name": "Reachable",
          "package": "yhccore",
          "source": "src/Yhc-Core-Reachable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Reachable",
          "module": "Yhc.Core.Reachable",
          "name": "Reachable",
          "package": "yhccore",
          "partial": "Reachable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Reachable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Reachable",
          "name": "coreReachable",
          "package": "yhccore",
          "signature": "[CoreFuncName] -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-Reachable.html#coreReachable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Reachable",
          "module": "Yhc.Core.Reachable",
          "name": "coreReachable",
          "normalized": "[CoreFuncName]-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Reachable",
          "signature": "[CoreFuncName]-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Reachable.html#v:coreReachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Reachable",
          "name": "coreReachableMap",
          "package": "yhccore",
          "signature": "[CoreFuncName] -\u003e CoreFuncMap -\u003e CoreFuncMap",
          "source": "src/Yhc-Core-Reachable.html#coreReachableMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Reachable",
          "module": "Yhc.Core.Reachable",
          "name": "coreReachableMap",
          "normalized": "[CoreFuncName]-\u003eCoreFuncMap-\u003eCoreFuncMap",
          "package": "yhccore",
          "partial": "Reachable Map",
          "signature": "[CoreFuncName]-\u003eCoreFuncMap-\u003eCoreFuncMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Reachable.html#v:coreReachableMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.RecursiveLet",
          "name": "RecursiveLet",
          "package": "yhccore",
          "source": "src/Yhc-Core-RecursiveLet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core RecursiveLet",
          "module": "Yhc.Core.RecursiveLet",
          "name": "RecursiveLet",
          "package": "yhccore",
          "partial": "Recursive Let",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-RecursiveLet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a CoreLet recursive, i.e. do any of the introduced variables (LHS of bind)\n   also show up in the RHS of bind.\n\u003c/p\u003e\u003cp\u003eReturns False if the expression is not a CoreLet.\n\u003c/p\u003e",
          "module": "Yhc.Core.RecursiveLet",
          "name": "isCoreLetRec",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-RecursiveLet.html#isCoreLetRec",
          "type": "function"
        },
        "index": {
          "description": "Is CoreLet recursive i.e do any of the introduced variables LHS of bind also show up in the RHS of bind Returns False if the expression is not CoreLet",
          "hierarchy": "Yhc Core RecursiveLet",
          "module": "Yhc.Core.RecursiveLet",
          "name": "isCoreLetRec",
          "normalized": "CoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Let Rec",
          "signature": "CoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-RecursiveLet.html#v:isCoreLetRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the number of recursive lets, but splitting lets\n   which have recursive bindings, but can be linearised\n\u003c/p\u003e",
          "module": "Yhc.Core.RecursiveLet",
          "name": "reduceRecursiveLet",
          "package": "yhccore",
          "signature": "Core -\u003e Core",
          "source": "src/Yhc-Core-RecursiveLet.html#reduceRecursiveLet",
          "type": "function"
        },
        "index": {
          "description": "Reduce the number of recursive lets but splitting lets which have recursive bindings but can be linearised",
          "hierarchy": "Yhc Core RecursiveLet",
          "module": "Yhc.Core.RecursiveLet",
          "name": "reduceRecursiveLet",
          "normalized": "Core-\u003eCore",
          "package": "yhccore",
          "partial": "Recursive Let",
          "signature": "Core-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-RecursiveLet.html#v:reduceRecursiveLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove recursive lets\n\u003c/p\u003e\u003cp\u003eLet's are rearranged so a variable is not used in the defining block\n\u003c/p\u003e",
          "module": "Yhc.Core.RecursiveLet",
          "name": "removeRecursiveLet",
          "package": "yhccore",
          "signature": "Core -\u003e Core",
          "source": "src/Yhc-Core-RecursiveLet.html#removeRecursiveLet",
          "type": "function"
        },
        "index": {
          "description": "Remove recursive lets Let are rearranged so variable is not used in the defining block",
          "hierarchy": "Yhc Core RecursiveLet",
          "module": "Yhc.Core.RecursiveLet",
          "name": "removeRecursiveLet",
          "normalized": "Core-\u003eCore",
          "package": "yhccore",
          "partial": "Recursive Let",
          "signature": "Core-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-RecursiveLet.html#v:removeRecursiveLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Saturated",
          "name": "Saturated",
          "package": "yhccore",
          "source": "src/Yhc-Core-Saturated.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Saturated",
          "module": "Yhc.Core.Saturated",
          "name": "Saturated",
          "package": "yhccore",
          "partial": "Saturated",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Saturated.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an expr (normally a \u003ccode\u003e\u003ca\u003eCoreApp\u003c/a\u003e\u003c/code\u003e)\n   say if it is saturated or not.\n\u003c/p\u003e",
          "module": "Yhc.Core.Saturated",
          "name": "coreSaturated",
          "package": "yhccore",
          "signature": "Core -\u003e CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Saturated.html#coreSaturated",
          "type": "function"
        },
        "index": {
          "description": "Given an expr normally CoreApp say if it is saturated or not",
          "hierarchy": "Yhc Core Saturated",
          "module": "Yhc.Core.Saturated",
          "name": "coreSaturated",
          "normalized": "Core-\u003eCoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Saturated",
          "signature": "Core-\u003eCoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Saturated.html#v:coreSaturated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Serialise",
          "name": "Serialise",
          "package": "yhccore",
          "source": "src/Yhc-Core-Serialise.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Serialise",
          "module": "Yhc.Core.Serialise",
          "name": "Serialise",
          "package": "yhccore",
          "partial": "Serialise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Serialise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Serialise",
          "name": "loadCore",
          "package": "yhccore",
          "signature": "FilePath -\u003e IO Core",
          "source": "src/Yhc-Core-Serialise.html#loadCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Serialise",
          "module": "Yhc.Core.Serialise",
          "name": "loadCore",
          "normalized": "FilePath-\u003eIO Core",
          "package": "yhccore",
          "partial": "Core",
          "signature": "FilePath-\u003eIO Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Serialise.html#v:loadCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Serialise",
          "name": "saveCore",
          "package": "yhccore",
          "signature": "FilePath -\u003e Core -\u003e IO ()",
          "source": "src/Yhc-Core-Serialise.html#saveCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Serialise",
          "module": "Yhc.Core.Serialise",
          "name": "saveCore",
          "normalized": "FilePath-\u003eCore-\u003eIO()",
          "package": "yhccore",
          "partial": "Core",
          "signature": "FilePath-\u003eCore-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Serialise.html#v:saveCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Show",
          "name": "Show",
          "package": "yhccore",
          "source": "src/Yhc-Core-Show.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Show",
          "module": "Yhc.Core.Show",
          "name": "Show",
          "package": "yhccore",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Show",
          "name": "isCoreOperator",
          "package": "yhccore",
          "signature": "String -\u003e Bool",
          "source": "src/Yhc-Core-Show.html#isCoreOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Show",
          "module": "Yhc.Core.Show",
          "name": "isCoreOperator",
          "normalized": "String-\u003eBool",
          "package": "yhccore",
          "partial": "Core Operator",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Show.html#v:isCoreOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a CoreExpr, but with brackets if needed\n   so the result is a group. Does not bracket\n   simple variables or constants etc\n\u003c/p\u003e",
          "module": "Yhc.Core.Show",
          "name": "showCoreExprGroup",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e String",
          "source": "src/Yhc-Core-Show.html#showCoreExprGroup",
          "type": "function"
        },
        "index": {
          "description": "Show CoreExpr but with brackets if needed so the result is group Does not bracket simple variables or constants etc",
          "hierarchy": "Yhc Core Show",
          "module": "Yhc.Core.Show",
          "name": "showCoreExprGroup",
          "normalized": "CoreExpr-\u003eString",
          "package": "yhccore",
          "partial": "Core Expr Group",
          "signature": "CoreExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Show.html#v:showCoreExprGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShowRaw is intended for debugging, to print a rather complete\n    syntax tree. The basic rule is that every constructor MUST appear\n    visibly in the output. For example, \u003ccode\u003eshow (CoreApp x []) == show x\u003c/code\u003e,\n    but \u003ccode\u003e(showRaw x == showRaw y) ==\u003e (x == y)\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.ShowRaw",
          "name": "ShowRaw",
          "package": "yhccore",
          "source": "src/Yhc-Core-ShowRaw.html",
          "type": "module"
        },
        "index": {
          "description": "ShowRaw is intended for debugging to print rather complete syntax tree The basic rule is that every constructor MUST appear visibly in the output For example show CoreApp show but showRaw showRaw",
          "hierarchy": "Yhc Core ShowRaw",
          "module": "Yhc.Core.ShowRaw",
          "name": "ShowRaw",
          "package": "yhccore",
          "partial": "Show Raw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-ShowRaw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.ShowRaw",
          "name": "ShowRaw",
          "package": "yhccore",
          "source": "src/Yhc-Core-ShowRaw.html#ShowRaw",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yhc Core ShowRaw",
          "module": "Yhc.Core.ShowRaw",
          "name": "ShowRaw",
          "package": "yhccore",
          "partial": "Show Raw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-ShowRaw.html#t:ShowRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.ShowRaw",
          "name": "showRaw",
          "package": "yhccore",
          "signature": "a -\u003e String",
          "source": "src/Yhc-Core-ShowRaw.html#showRaw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core ShowRaw",
          "module": "Yhc.Core.ShowRaw",
          "name": "showRaw",
          "normalized": "a-\u003eString",
          "package": "yhccore",
          "partial": "Raw",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-ShowRaw.html#v:showRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Simplify",
          "name": "Simplify",
          "package": "yhccore",
          "source": "src/Yhc-Core-Simplify.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Simplify",
          "module": "Yhc.Core.Simplify",
          "name": "Simplify",
          "package": "yhccore",
          "partial": "Simplify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplify",
          "package": "yhccore",
          "signature": "a -\u003e a",
          "source": "src/Yhc-Core-Simplify.html#coreSimplify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Simplify",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplify",
          "normalized": "a-\u003ea",
          "package": "yhccore",
          "partial": "Simplify",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the Case (Case ..) rule\n\u003c/p\u003e",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyCaseCase",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-Simplify.html#coreSimplifyCaseCase",
          "type": "function"
        },
        "index": {
          "description": "Apply the Case Case rule",
          "hierarchy": "Yhc Core Simplify",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyCaseCase",
          "normalized": "CoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Simplify Case Case",
          "signature": "CoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyCaseCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the Case (CoreCon ..) rule\n   This rule has a serious sharing bug (doh!)\n\u003c/p\u003e",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyCaseCon",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-Simplify.html#coreSimplifyCaseCon",
          "type": "function"
        },
        "index": {
          "description": "Apply the Case CoreCon rule This rule has serious sharing bug doh",
          "hierarchy": "Yhc Core Simplify",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyCaseCon",
          "normalized": "CoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Simplify Case Con",
          "signature": "CoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyCaseCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the Case (Let ..) rule\n\u003c/p\u003e",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyCaseLet",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-Simplify.html#coreSimplifyCaseLet",
          "type": "function"
        },
        "index": {
          "description": "Apply the Case Let rule",
          "hierarchy": "Yhc Core Simplify",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyCaseLet",
          "normalized": "CoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Simplify Case Let",
          "signature": "CoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyCaseLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify a single Core Expr.\n\u003c/p\u003e\u003cp\u003ePerforms NO inlining, guaranteed to run in same or better\n   space and time. May increase code size.\n\u003c/p\u003e\u003cp\u003eBugs lurk here, with inadvertant free variable capture. Move to\n   a proper free variable monad and a guarantee of uniqueness\n\u003c/p\u003e",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyExpr",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-Simplify.html#coreSimplifyExpr",
          "type": "function"
        },
        "index": {
          "description": "Simplify single Core Expr Performs NO inlining guaranteed to run in same or better space and time May increase code size Bugs lurk here with inadvertant free variable capture Move to proper free variable monad and guarantee of uniqueness",
          "hierarchy": "Yhc Core Simplify",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyExpr",
          "normalized": "CoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Simplify Expr",
          "signature": "CoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecondition:\n    All variables must be unique\n\u003c/p\u003e\u003cp\u003eThe following patterns must not occur:\n\u003c/p\u003e\u003cp\u003eCoreApp _ []\n    CoreLet [] _\n    CoreLam [] _\n    CorePos _ _\n\u003c/p\u003e\u003cp\u003eCoreCase on _ =\u003e on \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e {CoreCon _, CoreApp (CoreCon _) _, CoreLet _ _, CoreCase _ _}\n    CoreApp x _ =\u003e x \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e {CoreApp _ _, CoreLet _ _, CoreCase _ _, CoreLam _ _}\n    CoreLet bind _ =\u003e all (map snd bind) \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e {CoreLet _ _, CoreVar _}\n\u003c/p\u003e\u003cp\u003eThe following should be applied if possible (and not breaking sharing):\n\u003c/p\u003e\u003cp\u003eCoreLet bind x =\u003e replaceFreeVars bind x\n    CoreLet (CoreCase x alts) =\u003e CoreCase x (CoreLet inside each alt)\n\u003c/p\u003e",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyExprUnique",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e m CoreExpr",
          "source": "src/Yhc-Core-Simplify.html#coreSimplifyExprUnique",
          "type": "function"
        },
        "index": {
          "description": "Precondition All variables must be unique The following patterns must not occur CoreApp CoreLet CoreLam CorePos CoreCase on on notElem CoreCon CoreApp CoreCon CoreLet CoreCase CoreApp notElem CoreApp CoreLet CoreCase CoreLam CoreLet bind all map snd bind notElem CoreLet CoreVar The following should be applied if possible and not breaking sharing CoreLet bind replaceFreeVars bind CoreLet CoreCase alts CoreCase CoreLet inside each alt",
          "hierarchy": "Yhc Core Simplify",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyExprUnique",
          "normalized": "CoreExpr-\u003ea CoreExpr",
          "package": "yhccore",
          "partial": "Simplify Expr Unique",
          "signature": "CoreExpr-\u003em CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyExprUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSismplify in an extensible manner.\n\u003c/p\u003e\u003cpre\u003emyfunc retransform\u003c/pre\u003e\u003cp\u003eYou should invoke retransform on all constructors you create.\n\u003c/p\u003e",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyExprUniqueExt",
          "package": "yhccore",
          "signature": "((CoreExpr -\u003e m CoreExpr) -\u003e CoreExpr -\u003e m CoreExpr) -\u003e CoreExpr -\u003e m CoreExpr",
          "source": "src/Yhc-Core-Simplify.html#coreSimplifyExprUniqueExt",
          "type": "function"
        },
        "index": {
          "description": "Sismplify in an extensible manner myfunc retransform You should invoke retransform on all constructors you create",
          "hierarchy": "Yhc Core Simplify",
          "module": "Yhc.Core.Simplify",
          "name": "coreSimplifyExprUniqueExt",
          "normalized": "((CoreExpr-\u003ea CoreExpr)-\u003eCoreExpr-\u003ea CoreExpr)-\u003eCoreExpr-\u003ea CoreExpr",
          "package": "yhccore",
          "partial": "Simplify Expr Unique Ext",
          "signature": "((CoreExpr-\u003em CoreExpr)-\u003eCoreExpr-\u003em CoreExpr)-\u003eCoreExpr-\u003em CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyExprUniqueExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Strictness",
          "name": "Strictness",
          "package": "yhccore",
          "source": "src/Yhc-Core-Strictness.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Strictness",
          "module": "Yhc.Core.Strictness",
          "name": "Strictness",
          "package": "yhccore",
          "partial": "Strictness",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Strictness.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function, return a list of arguments.\n   True is strict in that argument, False is not.\n   [] is unknown strictness\n\u003c/p\u003e",
          "module": "Yhc.Core.Strictness",
          "name": "coreStrictness",
          "package": "yhccore",
          "signature": "Core -\u003e CoreFuncName -\u003e [Bool]",
          "source": "src/Yhc-Core-Strictness.html#coreStrictness",
          "type": "function"
        },
        "index": {
          "description": "Given function return list of arguments True is strict in that argument False is not is unknown strictness",
          "hierarchy": "Yhc Core Strictness",
          "module": "Yhc.Core.Strictness",
          "name": "coreStrictness",
          "normalized": "Core-\u003eCoreFuncName-\u003e[Bool]",
          "package": "yhccore",
          "partial": "Strictness",
          "signature": "Core-\u003eCoreFuncName-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Strictness.html#v:coreStrictness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "Type",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "Type",
          "package": "yhccore",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "Core",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#Core",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "Core",
          "package": "yhccore",
          "partial": "Core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:Core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreCtor",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreCtor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreCtor",
          "package": "yhccore",
          "partial": "Core Ctor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreCtor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreCtorName",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreCtorName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreCtorName",
          "package": "yhccore",
          "partial": "Core Ctor Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreCtorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreData",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreData",
          "package": "yhccore",
          "partial": "Core Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreDataName",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreDataName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreDataName",
          "package": "yhccore",
          "partial": "Core Data Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreDataName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreExpr",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreExpr",
          "package": "yhccore",
          "partial": "Core Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreFieldName",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreFieldName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreFieldName",
          "package": "yhccore",
          "partial": "Core Field Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreFunc",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreFunc",
          "package": "yhccore",
          "partial": "Core Func",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreFuncMap",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreFuncMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreFuncMap",
          "package": "yhccore",
          "partial": "Core Func Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreFuncMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreFuncName",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreFuncName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreFuncName",
          "package": "yhccore",
          "partial": "Core Func Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreFuncName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreLit",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreLit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreLit",
          "package": "yhccore",
          "partial": "Core Lit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CorePat",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CorePat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CorePat",
          "package": "yhccore",
          "partial": "Core Pat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CorePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreVarName",
          "package": "yhccore",
          "source": "src/Yhc-Core-Type.html#CoreVarName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreVarName",
          "package": "yhccore",
          "partial": "Core Var Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreVarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "Core",
          "package": "yhccore",
          "signature": "Core",
          "source": "src/Yhc-Core-Type.html#Core",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "Core",
          "package": "yhccore",
          "partial": "Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:Core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreApp",
          "package": "yhccore",
          "signature": "CoreApp CoreExpr [CoreExpr]",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreApp",
          "normalized": "CoreApp CoreExpr[CoreExpr]",
          "package": "yhccore",
          "partial": "Core App",
          "signature": "CoreApp CoreExpr[CoreExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreCase",
          "package": "yhccore",
          "signature": "CoreCase CoreExpr [(CorePat, CoreExpr)]",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreCase",
          "normalized": "CoreCase CoreExpr[(CorePat,CoreExpr)]",
          "package": "yhccore",
          "partial": "Core Case",
          "signature": "CoreCase CoreExpr[(CorePat,CoreExpr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreChr",
          "package": "yhccore",
          "signature": "CoreChr Char",
          "source": "src/Yhc-Core-Type.html#CoreLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreChr",
          "package": "yhccore",
          "partial": "Core Chr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreChr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreCon",
          "package": "yhccore",
          "signature": "CoreCon CoreCtorName",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreCon",
          "package": "yhccore",
          "partial": "Core Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreCtor",
          "package": "yhccore",
          "signature": "CoreCtor",
          "source": "src/Yhc-Core-Type.html#CoreCtor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreCtor",
          "package": "yhccore",
          "partial": "Core Ctor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreCtor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreData",
          "package": "yhccore",
          "signature": "CoreData",
          "source": "src/Yhc-Core-Type.html#CoreData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreData",
          "package": "yhccore",
          "partial": "Core Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreDouble",
          "package": "yhccore",
          "signature": "CoreDouble Double",
          "source": "src/Yhc-Core-Type.html#CoreLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreDouble",
          "package": "yhccore",
          "partial": "Core Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreFloat",
          "package": "yhccore",
          "signature": "CoreFloat Float",
          "source": "src/Yhc-Core-Type.html#CoreLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreFloat",
          "package": "yhccore",
          "partial": "Core Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreFun",
          "package": "yhccore",
          "signature": "CoreFun CoreFuncName",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreFun",
          "package": "yhccore",
          "partial": "Core Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreFunc",
          "package": "yhccore",
          "signature": "CoreFunc",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreFunc",
          "package": "yhccore",
          "partial": "Core Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreInt",
          "package": "yhccore",
          "signature": "CoreInt Int",
          "source": "src/Yhc-Core-Type.html#CoreLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreInt",
          "package": "yhccore",
          "partial": "Core Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreInteger",
          "package": "yhccore",
          "signature": "CoreInteger Integer",
          "source": "src/Yhc-Core-Type.html#CoreLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreInteger",
          "package": "yhccore",
          "partial": "Core Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreLam",
          "package": "yhccore",
          "signature": "CoreLam [CoreVarName] CoreExpr",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreLam",
          "normalized": "CoreLam[CoreVarName]CoreExpr",
          "package": "yhccore",
          "partial": "Core Lam",
          "signature": "CoreLam[CoreVarName]CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreLam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreLet",
          "package": "yhccore",
          "signature": "CoreLet [(CoreVarName, CoreExpr)] CoreExpr",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreLet",
          "normalized": "CoreLet[(CoreVarName,CoreExpr)]CoreExpr",
          "package": "yhccore",
          "partial": "Core Let",
          "signature": "CoreLet[(CoreVarName,CoreExpr)]CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreLit",
          "package": "yhccore",
          "signature": "CoreLit CoreLit",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreLit",
          "package": "yhccore",
          "partial": "Core Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CorePos",
          "package": "yhccore",
          "signature": "CorePos String CoreExpr",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CorePos",
          "package": "yhccore",
          "partial": "Core Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CorePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CorePrim",
          "package": "yhccore",
          "signature": "CorePrim",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CorePrim",
          "package": "yhccore",
          "partial": "Core Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CorePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreStr",
          "package": "yhccore",
          "signature": "CoreStr String",
          "source": "src/Yhc-Core-Type.html#CoreLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreStr",
          "package": "yhccore",
          "partial": "Core Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "CoreVar",
          "package": "yhccore",
          "signature": "CoreVar CoreVarName",
          "source": "src/Yhc-Core-Type.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "CoreVar",
          "package": "yhccore",
          "partial": "Core Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "PatCon",
          "package": "yhccore",
          "signature": "PatCon",
          "source": "src/Yhc-Core-Type.html#CorePat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "PatCon",
          "package": "yhccore",
          "partial": "Pat Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:PatCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "PatDefault",
          "package": "yhccore",
          "signature": "PatDefault",
          "source": "src/Yhc-Core-Type.html#CorePat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "PatDefault",
          "package": "yhccore",
          "partial": "Pat Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:PatDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "PatLit",
          "package": "yhccore",
          "signature": "PatLit",
          "source": "src/Yhc-Core-Type.html#CorePat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "PatLit",
          "package": "yhccore",
          "partial": "Pat Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:PatLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a function that operates on bodies, and apply it to a program\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "applyBodyCore",
          "package": "yhccore",
          "signature": "(CoreExpr -\u003e CoreExpr) -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-Type.html#applyBodyCore",
          "type": "function"
        },
        "index": {
          "description": "Take function that operates on bodies and apply it to program",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "applyBodyCore",
          "normalized": "(CoreExpr-\u003eCoreExpr)-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Body Core",
          "signature": "(CoreExpr-\u003eCoreExpr)-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyBodyCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "applyBodyCoreM",
          "package": "yhccore",
          "signature": "(CoreExpr -\u003e m CoreExpr) -\u003e Core -\u003e m Core",
          "source": "src/Yhc-Core-Type.html#applyBodyCoreM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "applyBodyCoreM",
          "normalized": "(CoreExpr-\u003ea CoreExpr)-\u003eCore-\u003ea Core",
          "package": "yhccore",
          "partial": "Body Core",
          "signature": "(CoreExpr-\u003em CoreExpr)-\u003eCore-\u003em Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyBodyCoreM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a function that operates on bodies, and apply it to a function\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "applyBodyFunc",
          "package": "yhccore",
          "signature": "(CoreExpr -\u003e CoreExpr) -\u003e CoreFunc -\u003e CoreFunc",
          "source": "src/Yhc-Core-Type.html#applyBodyFunc",
          "type": "function"
        },
        "index": {
          "description": "Take function that operates on bodies and apply it to function",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "applyBodyFunc",
          "normalized": "(CoreExpr-\u003eCoreExpr)-\u003eCoreFunc-\u003eCoreFunc",
          "package": "yhccore",
          "partial": "Body Func",
          "signature": "(CoreExpr-\u003eCoreExpr)-\u003eCoreFunc-\u003eCoreFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyBodyFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "applyCtorCore",
          "package": "yhccore",
          "signature": "(CoreCtor -\u003e CoreCtor) -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-Type.html#applyCtorCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "applyCtorCore",
          "normalized": "(CoreCtor-\u003eCoreCtor)-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Ctor Core",
          "signature": "(CoreCtor-\u003eCoreCtor)-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyCtorCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "applyCtorData",
          "package": "yhccore",
          "signature": "(CoreCtor -\u003e CoreCtor) -\u003e CoreData -\u003e CoreData",
          "source": "src/Yhc-Core-Type.html#applyCtorData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "applyCtorData",
          "normalized": "(CoreCtor-\u003eCoreCtor)-\u003eCoreData-\u003eCoreData",
          "package": "yhccore",
          "partial": "Ctor Data",
          "signature": "(CoreCtor-\u003eCoreCtor)-\u003eCoreData-\u003eCoreData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyCtorData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "applyDataCore",
          "package": "yhccore",
          "signature": "(CoreData -\u003e CoreData) -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-Type.html#applyDataCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "applyDataCore",
          "normalized": "(CoreData-\u003eCoreData)-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Data Core",
          "signature": "(CoreData-\u003eCoreData)-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyDataCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a function that operates on functions, and apply it to a program\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "applyFuncCore",
          "package": "yhccore",
          "signature": "(CoreFunc -\u003e CoreFunc) -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-Type.html#applyFuncCore",
          "type": "function"
        },
        "index": {
          "description": "Take function that operates on functions and apply it to program",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "applyFuncCore",
          "normalized": "(CoreFunc-\u003eCoreFunc)-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Func Core",
          "signature": "(CoreFunc-\u003eCoreFunc)-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyFuncCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "applyFuncCoreM",
          "package": "yhccore",
          "signature": "(CoreFunc -\u003e m CoreFunc) -\u003e Core -\u003e m Core",
          "source": "src/Yhc-Core-Type.html#applyFuncCoreM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "applyFuncCoreM",
          "normalized": "(CoreFunc-\u003ea CoreFunc)-\u003eCore-\u003ea Core",
          "package": "yhccore",
          "partial": "Func Core",
          "signature": "(CoreFunc-\u003em CoreFunc)-\u003eCore-\u003em Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyFuncCoreM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreApp",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e [CoreExpr] -\u003e CoreExpr",
          "source": "src/Yhc-Core-Type.html#coreApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreApp",
          "normalized": "CoreExpr-\u003e[CoreExpr]-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "App",
          "signature": "CoreExpr-\u003e[CoreExpr]-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreCtor",
          "package": "yhccore",
          "signature": "Core -\u003e CoreCtorName -\u003e CoreCtor",
          "source": "src/Yhc-Core-Type.html#coreCtor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreCtor",
          "normalized": "Core-\u003eCoreCtorName-\u003eCoreCtor",
          "package": "yhccore",
          "partial": "Ctor",
          "signature": "Core-\u003eCoreCtorName-\u003eCoreCtor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreCtorData",
          "package": "yhccore",
          "signature": "Core -\u003e CoreCtorName -\u003e CoreData",
          "source": "src/Yhc-Core-Type.html#coreCtorData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreCtorData",
          "normalized": "Core-\u003eCoreCtorName-\u003eCoreData",
          "package": "yhccore",
          "partial": "Ctor Data",
          "signature": "Core-\u003eCoreCtorName-\u003eCoreData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtorData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eCoreData\u003c/a\u003e\u003c/code\u003e from a ctor name\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "coreCtorDataMaybe",
          "package": "yhccore",
          "signature": "Core -\u003e CoreCtorName -\u003e Maybe CoreData",
          "source": "src/Yhc-Core-Type.html#coreCtorDataMaybe",
          "type": "function"
        },
        "index": {
          "description": "Get CoreData from ctor name",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreCtorDataMaybe",
          "normalized": "Core-\u003eCoreCtorName-\u003eMaybe CoreData",
          "package": "yhccore",
          "partial": "Ctor Data Maybe",
          "signature": "Core-\u003eCoreCtorName-\u003eMaybe CoreData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtorDataMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreCtorFields",
          "package": "yhccore",
          "signature": "[(String, Maybe CoreFieldName)]",
          "source": "src/Yhc-Core-Type.html#CoreCtor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreCtorFields",
          "normalized": "[(String,Maybe CoreFieldName)]",
          "package": "yhccore",
          "partial": "Ctor Fields",
          "signature": "[(String,Maybe CoreFieldName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtorFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreCtorName",
          "package": "yhccore",
          "signature": "CoreCtorName",
          "source": "src/Yhc-Core-Type.html#CoreCtor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreCtorName",
          "package": "yhccore",
          "partial": "Ctor Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreData",
          "package": "yhccore",
          "signature": "Core -\u003e CoreDataName -\u003e CoreData",
          "source": "src/Yhc-Core-Type.html#coreData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreData",
          "normalized": "Core-\u003eCoreDataName-\u003eCoreData",
          "package": "yhccore",
          "partial": "Data",
          "signature": "Core-\u003eCoreDataName-\u003eCoreData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreDataCtors",
          "package": "yhccore",
          "signature": "[CoreCtor]",
          "source": "src/Yhc-Core-Type.html#CoreData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreDataCtors",
          "normalized": "[CoreCtor]",
          "package": "yhccore",
          "partial": "Data Ctors",
          "signature": "[CoreCtor]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataCtors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreDataName",
          "package": "yhccore",
          "signature": "CoreDataName",
          "source": "src/Yhc-Core-Type.html#CoreData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreDataName",
          "package": "yhccore",
          "partial": "Data Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecan pretty print much nicer, just something that works for now\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "coreDataTypeJoin",
          "package": "yhccore",
          "signature": "[String] -\u003e String",
          "source": "src/Yhc-Core-Type.html#coreDataTypeJoin",
          "type": "function"
        },
        "index": {
          "description": "can pretty print much nicer just something that works for now",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreDataTypeJoin",
          "normalized": "[String]-\u003eString",
          "package": "yhccore",
          "partial": "Data Type Join",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataTypeJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit up a coreDataType into lexical elements\n   None of the result elements will be space, or blank\n   Some may be \u003ca\u003e(\u003c/a\u003e, \u003ca\u003e)\u003c/a\u003e or \u003ca\u003e!\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "coreDataTypeSplit",
          "package": "yhccore",
          "signature": "String -\u003e [String]",
          "source": "src/Yhc-Core-Type.html#coreDataTypeSplit",
          "type": "function"
        },
        "index": {
          "description": "Split up coreDataType into lexical elements None of the result elements will be space or blank Some may be or",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreDataTypeSplit",
          "normalized": "String-\u003e[String]",
          "package": "yhccore",
          "partial": "Data Type Split",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataTypeSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreDataTypes",
          "package": "yhccore",
          "signature": "[String]",
          "source": "src/Yhc-Core-Type.html#CoreData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreDataTypes",
          "normalized": "[String]",
          "package": "yhccore",
          "partial": "Data Types",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreDatas",
          "package": "yhccore",
          "signature": "[CoreData]",
          "source": "src/Yhc-Core-Type.html#Core",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreDatas",
          "normalized": "[CoreData]",
          "package": "yhccore",
          "partial": "Datas",
          "signature": "[CoreData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDatas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFieldCtor",
          "package": "yhccore",
          "signature": "Core -\u003e CoreFieldName -\u003e CoreCtor",
          "source": "src/Yhc-Core-Type.html#coreFieldCtor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFieldCtor",
          "normalized": "Core-\u003eCoreFieldName-\u003eCoreCtor",
          "package": "yhccore",
          "partial": "Field Ctor",
          "signature": "Core-\u003eCoreFieldName-\u003eCoreCtor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFieldCtor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eCoreCtor\u003c/a\u003e\u003c/code\u003e from a field name\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "coreFieldCtorMaybe",
          "package": "yhccore",
          "signature": "Core -\u003e CoreFieldName -\u003e Maybe CoreCtor",
          "source": "src/Yhc-Core-Type.html#coreFieldCtorMaybe",
          "type": "function"
        },
        "index": {
          "description": "Get CoreCtor from field name",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFieldCtorMaybe",
          "normalized": "Core-\u003eCoreFieldName-\u003eMaybe CoreCtor",
          "package": "yhccore",
          "partial": "Field Ctor Maybe",
          "signature": "Core-\u003eCoreFieldName-\u003eMaybe CoreCtor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFieldCtorMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFieldData",
          "package": "yhccore",
          "signature": "Core -\u003e CoreFieldName -\u003e CoreData",
          "source": "src/Yhc-Core-Type.html#coreFieldData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFieldData",
          "normalized": "Core-\u003eCoreFieldName-\u003eCoreData",
          "package": "yhccore",
          "partial": "Field Data",
          "signature": "Core-\u003eCoreFieldName-\u003eCoreData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFieldData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eCoreData\u003c/a\u003e\u003c/code\u003e from a field (the snd element of \u003ccode\u003e\u003ca\u003ecoreCtorFields\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "coreFieldDataMaybe",
          "package": "yhccore",
          "signature": "Core -\u003e CoreFieldName -\u003e Maybe CoreData",
          "source": "src/Yhc-Core-Type.html#coreFieldDataMaybe",
          "type": "function"
        },
        "index": {
          "description": "Get CoreData from field the snd element of coreCtorFields",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFieldDataMaybe",
          "normalized": "Core-\u003eCoreFieldName-\u003eMaybe CoreData",
          "package": "yhccore",
          "partial": "Field Data Maybe",
          "signature": "Core-\u003eCoreFieldName-\u003eMaybe CoreData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFieldDataMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a function from a Core type\n   crashes if the function does not exist\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "coreFunc",
          "package": "yhccore",
          "signature": "Core -\u003e CoreFuncName -\u003e CoreFunc",
          "source": "src/Yhc-Core-Type.html#coreFunc",
          "type": "function"
        },
        "index": {
          "description": "Get function from Core type crashes if the function does not exist",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFunc",
          "normalized": "Core-\u003eCoreFuncName-\u003eCoreFunc",
          "package": "yhccore",
          "partial": "Func",
          "signature": "Core-\u003eCoreFuncName-\u003eCoreFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFuncArgList",
          "package": "yhccore",
          "signature": "CoreFunc -\u003e [CoreVarName]",
          "source": "src/Yhc-Core-Type.html#coreFuncArgList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFuncArgList",
          "normalized": "CoreFunc-\u003e[CoreVarName]",
          "package": "yhccore",
          "partial": "Func Arg List",
          "signature": "CoreFunc-\u003e[CoreVarName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncArgList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFuncArgs",
          "package": "yhccore",
          "signature": "[CoreVarName]",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFuncArgs",
          "normalized": "[CoreVarName]",
          "package": "yhccore",
          "partial": "Func Args",
          "signature": "[CoreVarName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFuncArity",
          "package": "yhccore",
          "signature": "CoreFunc -\u003e Int",
          "source": "src/Yhc-Core-Type.html#coreFuncArity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFuncArity",
          "normalized": "CoreFunc-\u003eInt",
          "package": "yhccore",
          "partial": "Func Arity",
          "signature": "CoreFunc-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFuncBody",
          "package": "yhccore",
          "signature": "CoreExpr",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFuncBody",
          "package": "yhccore",
          "partial": "Func Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFuncMap",
          "package": "yhccore",
          "signature": "CoreFuncMap -\u003e CoreFuncName -\u003e CoreFunc",
          "source": "src/Yhc-Core-Type.html#coreFuncMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFuncMap",
          "normalized": "CoreFuncMap-\u003eCoreFuncName-\u003eCoreFunc",
          "package": "yhccore",
          "partial": "Func Map",
          "signature": "CoreFuncMap-\u003eCoreFuncName-\u003eCoreFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFuncMapMaybe",
          "package": "yhccore",
          "signature": "CoreFuncMap -\u003e CoreFuncName -\u003e Maybe CoreFunc",
          "source": "src/Yhc-Core-Type.html#coreFuncMapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFuncMapMaybe",
          "normalized": "CoreFuncMap-\u003eCoreFuncName-\u003eMaybe CoreFunc",
          "package": "yhccore",
          "partial": "Func Map Maybe",
          "signature": "CoreFuncMap-\u003eCoreFuncName-\u003eMaybe CoreFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncMapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-crashing version of \u003ccode\u003e\u003ca\u003ecoreFunc\u003c/a\u003e\u003c/code\u003e\n   returns Nothing if the function does not exist.\n   If multiple functions with the same name exist, this crashes.\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "coreFuncMaybe",
          "package": "yhccore",
          "signature": "Core -\u003e CoreFuncName -\u003e Maybe CoreFunc",
          "source": "src/Yhc-Core-Type.html#coreFuncMaybe",
          "type": "function"
        },
        "index": {
          "description": "non-crashing version of coreFunc returns Nothing if the function does not exist If multiple functions with the same name exist this crashes",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFuncMaybe",
          "normalized": "Core-\u003eCoreFuncName-\u003eMaybe CoreFunc",
          "package": "yhccore",
          "partial": "Func Maybe",
          "signature": "Core-\u003eCoreFuncName-\u003eMaybe CoreFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFuncName",
          "package": "yhccore",
          "signature": "CoreFuncName",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFuncName",
          "package": "yhccore",
          "partial": "Func Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreFuncs",
          "package": "yhccore",
          "signature": "[CoreFunc]",
          "source": "src/Yhc-Core-Type.html#Core",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreFuncs",
          "normalized": "[CoreFunc]",
          "package": "yhccore",
          "partial": "Funcs",
          "signature": "[CoreFunc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreImports",
          "package": "yhccore",
          "signature": "[String]",
          "source": "src/Yhc-Core-Type.html#Core",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreImports",
          "normalized": "[String]",
          "package": "yhccore",
          "partial": "Imports",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreLam",
          "package": "yhccore",
          "signature": "[CoreVarName] -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-Type.html#coreLam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreLam",
          "normalized": "[CoreVarName]-\u003eCoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Lam",
          "signature": "[CoreVarName]-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreLam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreLet",
          "package": "yhccore",
          "signature": "[(CoreVarName, CoreExpr)] -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-Type.html#coreLet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreLet",
          "normalized": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Let",
          "signature": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "coreName",
          "package": "yhccore",
          "signature": "String",
          "source": "src/Yhc-Core-Type.html#Core",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "coreName",
          "package": "yhccore",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "corePrimArity",
          "package": "yhccore",
          "signature": "Int",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "corePrimArity",
          "package": "yhccore",
          "partial": "Prim Arity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "corePrimConv",
          "package": "yhccore",
          "signature": "String",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "corePrimConv",
          "package": "yhccore",
          "partial": "Prim Conv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "corePrimExternal",
          "package": "yhccore",
          "signature": "String",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "corePrimExternal",
          "package": "yhccore",
          "partial": "Prim External",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimExternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "corePrimImport",
          "package": "yhccore",
          "signature": "Bool",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "corePrimImport",
          "package": "yhccore",
          "partial": "Prim Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "corePrimTypes",
          "package": "yhccore",
          "signature": "[String]",
          "source": "src/Yhc-Core-Type.html#CoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "corePrimTypes",
          "normalized": "[String]",
          "package": "yhccore",
          "partial": "Prim Types",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edrop a module from a Core declaration\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "dropModule",
          "package": "yhccore",
          "signature": "String -\u003e String",
          "source": "src/Yhc-Core-Type.html#dropModule",
          "type": "function"
        },
        "index": {
          "description": "drop module from Core declaration",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "dropModule",
          "normalized": "String-\u003eString",
          "package": "yhccore",
          "partial": "Module",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:dropModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "exprToPat",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CorePat",
          "source": "src/Yhc-Core-Type.html#exprToPat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "exprToPat",
          "normalized": "CoreExpr-\u003eCorePat",
          "package": "yhccore",
          "partial": "To Pat",
          "signature": "CoreExpr-\u003eCorePat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:exprToPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "fromCoreApp",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e (CoreExpr, [CoreExpr])",
          "source": "src/Yhc-Core-Type.html#fromCoreApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "fromCoreApp",
          "normalized": "CoreExpr-\u003e(CoreExpr,[CoreExpr])",
          "package": "yhccore",
          "partial": "Core App",
          "signature": "CoreExpr-\u003e(CoreExpr,[CoreExpr])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "fromCoreCon",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e String",
          "source": "src/Yhc-Core-Type.html#fromCoreCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "fromCoreCon",
          "normalized": "CoreExpr-\u003eString",
          "package": "yhccore",
          "partial": "Core Con",
          "signature": "CoreExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "fromCoreFun",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e String",
          "source": "src/Yhc-Core-Type.html#fromCoreFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "fromCoreFun",
          "normalized": "CoreExpr-\u003eString",
          "package": "yhccore",
          "partial": "Core Fun",
          "signature": "CoreExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "fromCoreFuncMap",
          "package": "yhccore",
          "signature": "Core -\u003e CoreFuncMap -\u003e Core",
          "source": "src/Yhc-Core-Type.html#fromCoreFuncMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "fromCoreFuncMap",
          "normalized": "Core-\u003eCoreFuncMap-\u003eCore",
          "package": "yhccore",
          "partial": "Core Func Map",
          "signature": "Core-\u003eCoreFuncMap-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreFuncMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "fromCoreLam",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e ([CoreVarName], CoreExpr)",
          "source": "src/Yhc-Core-Type.html#fromCoreLam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "fromCoreLam",
          "normalized": "CoreExpr-\u003e([CoreVarName],CoreExpr)",
          "package": "yhccore",
          "partial": "Core Lam",
          "signature": "CoreExpr-\u003e([CoreVarName],CoreExpr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreLam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "fromCoreLet",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e ([(CoreVarName, CoreExpr)], CoreExpr)",
          "source": "src/Yhc-Core-Type.html#fromCoreLet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "fromCoreLet",
          "normalized": "CoreExpr-\u003e([(CoreVarName,CoreExpr)],CoreExpr)",
          "package": "yhccore",
          "partial": "Core Let",
          "signature": "CoreExpr-\u003e([(CoreVarName,CoreExpr)],CoreExpr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "fromCoreLit",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreLit",
          "source": "src/Yhc-Core-Type.html#fromCoreLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "fromCoreLit",
          "normalized": "CoreExpr-\u003eCoreLit",
          "package": "yhccore",
          "partial": "Core Lit",
          "signature": "CoreExpr-\u003eCoreLit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "fromCoreVar",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e String",
          "source": "src/Yhc-Core-Type.html#fromCoreVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "fromCoreVar",
          "normalized": "CoreExpr-\u003eString",
          "package": "yhccore",
          "partial": "Core Var",
          "signature": "CoreExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreCase",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreCase",
          "normalized": "CoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Case",
          "signature": "CoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreChr",
          "package": "yhccore",
          "signature": "CoreLit -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreChr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreChr",
          "normalized": "CoreLit-\u003eBool",
          "package": "yhccore",
          "partial": "Core Chr",
          "signature": "CoreLit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreChr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreCon",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreCon",
          "normalized": "CoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Con",
          "signature": "CoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreFun",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreFun",
          "normalized": "CoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Fun",
          "signature": "CoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreFunc",
          "package": "yhccore",
          "signature": "CoreFunc -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreFunc",
          "normalized": "CoreFunc-\u003eBool",
          "package": "yhccore",
          "partial": "Core Func",
          "signature": "CoreFunc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreInt",
          "package": "yhccore",
          "signature": "CoreLit -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreInt",
          "normalized": "CoreLit-\u003eBool",
          "package": "yhccore",
          "partial": "Core Int",
          "signature": "CoreLit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreLam",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreLam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreLam",
          "normalized": "CoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Lam",
          "signature": "CoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreLam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreLet",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreLet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreLet",
          "normalized": "CoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Let",
          "signature": "CoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreLit",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreLit",
          "normalized": "CoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Lit",
          "signature": "CoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true for constants that take a small, bounded\n amount of space\n\u003c/p\u003e",
          "module": "Yhc.Core.Type",
          "name": "isCoreLitSmall",
          "package": "yhccore",
          "signature": "CoreLit -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreLitSmall",
          "type": "function"
        },
        "index": {
          "description": "Returns true for constants that take small bounded amount of space",
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreLitSmall",
          "normalized": "CoreLit-\u003eBool",
          "package": "yhccore",
          "partial": "Core Lit Small",
          "signature": "CoreLit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreLitSmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCorePos",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCorePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCorePos",
          "normalized": "CoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Pos",
          "signature": "CoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCorePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCorePrim",
          "package": "yhccore",
          "signature": "CoreFunc -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCorePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCorePrim",
          "normalized": "CoreFunc-\u003eBool",
          "package": "yhccore",
          "partial": "Core Prim",
          "signature": "CoreFunc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCorePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreStr",
          "package": "yhccore",
          "signature": "CoreLit -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreStr",
          "normalized": "CoreLit-\u003eBool",
          "package": "yhccore",
          "partial": "Core Str",
          "signature": "CoreLit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isCoreVar",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isCoreVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isCoreVar",
          "normalized": "CoreExpr-\u003eBool",
          "package": "yhccore",
          "partial": "Core Var",
          "signature": "CoreExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isPatCon",
          "package": "yhccore",
          "signature": "CorePat -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isPatCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isPatCon",
          "normalized": "CorePat-\u003eBool",
          "package": "yhccore",
          "partial": "Pat Con",
          "signature": "CorePat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isPatCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isPatDefault",
          "package": "yhccore",
          "signature": "CorePat -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isPatDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isPatDefault",
          "normalized": "CorePat-\u003eBool",
          "package": "yhccore",
          "partial": "Pat Default",
          "signature": "CorePat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isPatDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "isPatLit",
          "package": "yhccore",
          "signature": "CorePat -\u003e Bool",
          "source": "src/Yhc-Core-Type.html#isPatLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "isPatLit",
          "normalized": "CorePat-\u003eBool",
          "package": "yhccore",
          "partial": "Pat Lit",
          "signature": "CorePat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isPatLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "patCon",
          "package": "yhccore",
          "signature": "CoreCtorName",
          "source": "src/Yhc-Core-Type.html#CorePat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "patCon",
          "package": "yhccore",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:patCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "patLit",
          "package": "yhccore",
          "signature": "CoreLit",
          "source": "src/Yhc-Core-Type.html#CorePat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "patLit",
          "package": "yhccore",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:patLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "patToExpr",
          "package": "yhccore",
          "signature": "CorePat -\u003e CoreExpr",
          "source": "src/Yhc-Core-Type.html#patToExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "patToExpr",
          "normalized": "CorePat-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "To Expr",
          "signature": "CorePat-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:patToExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "patVars",
          "package": "yhccore",
          "signature": "[CoreVarName]",
          "source": "src/Yhc-Core-Type.html#CorePat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "patVars",
          "normalized": "[CoreVarName]",
          "package": "yhccore",
          "partial": "Vars",
          "signature": "[CoreVarName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:patVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "remCorePos",
          "package": "yhccore",
          "signature": "CoreExpr -\u003e CoreExpr",
          "source": "src/Yhc-Core-Type.html#remCorePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "remCorePos",
          "normalized": "CoreExpr-\u003eCoreExpr",
          "package": "yhccore",
          "partial": "Core Pos",
          "signature": "CoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:remCorePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Type",
          "name": "toCoreFuncMap",
          "package": "yhccore",
          "signature": "Core -\u003e CoreFuncMap",
          "source": "src/Yhc-Core-Type.html#toCoreFuncMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Type",
          "module": "Yhc.Core.Type",
          "name": "toCoreFuncMap",
          "normalized": "Core-\u003eCoreFuncMap",
          "package": "yhccore",
          "partial": "Core Func Map",
          "signature": "Core-\u003eCoreFuncMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:toCoreFuncMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Uniplate",
          "name": "Uniplate",
          "package": "yhccore",
          "source": "src/Yhc-Core-Uniplate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Uniplate",
          "module": "Yhc.Core.Uniplate",
          "name": "Uniplate",
          "package": "yhccore",
          "partial": "Uniplate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Uniplate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Uniplate",
          "name": "UniplateExpr",
          "package": "yhccore",
          "source": "src/Yhc-Core-Uniplate.html#UniplateExpr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yhc Core Uniplate",
          "module": "Yhc.Core.Uniplate",
          "name": "UniplateExpr",
          "package": "yhccore",
          "partial": "Uniplate Expr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Uniplate.html#t:UniplateExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Uniplate",
          "name": "uniplateExpr",
          "package": "yhccore",
          "signature": "BiplateType a CoreExpr",
          "source": "src/Yhc-Core-Uniplate.html#uniplateExpr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Uniplate",
          "module": "Yhc.Core.Uniplate",
          "name": "uniplateExpr",
          "package": "yhccore",
          "partial": "Expr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Uniplate.html#v:uniplateExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Uniplate",
          "name": "universeExprVar",
          "package": "yhccore",
          "signature": "a -\u003e [String]",
          "source": "src/Yhc-Core-Uniplate.html#universeExprVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Uniplate",
          "module": "Yhc.Core.Uniplate",
          "name": "universeExprVar",
          "normalized": "a-\u003e[String]",
          "package": "yhccore",
          "partial": "Expr Var",
          "signature": "a-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Uniplate.html#v:universeExprVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements unique ID's in Yhc.Core.\n\u003c/p\u003e\u003cp\u003eThe intention is that a program can use this interface to a unique ID quite cheaply.\n    Or an existing state monad can be reused.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.UniqueId",
          "name": "UniqueId",
          "package": "yhccore",
          "source": "src/Yhc-Core-UniqueId.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements unique ID in Yhc.Core The intention is that program can use this interface to unique ID quite cheaply Or an existing state monad can be reused",
          "hierarchy": "Yhc Core UniqueId",
          "module": "Yhc.Core.UniqueId",
          "name": "UniqueId",
          "package": "yhccore",
          "partial": "Unique Id",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.UniqueId",
          "name": "UniqueId",
          "package": "yhccore",
          "source": "src/Yhc-Core-UniqueId.html#UniqueId",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yhc Core UniqueId",
          "module": "Yhc.Core.UniqueId",
          "name": "UniqueId",
          "package": "yhccore",
          "partial": "Unique Id",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#t:UniqueId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.UniqueId",
          "name": "UniqueIdM",
          "package": "yhccore",
          "source": "src/Yhc-Core-UniqueId.html#UniqueIdM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yhc Core UniqueId",
          "module": "Yhc.Core.UniqueId",
          "name": "UniqueIdM",
          "package": "yhccore",
          "partial": "Unique Id",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#t:UniqueIdM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.UniqueId",
          "name": "getId",
          "package": "yhccore",
          "signature": "a -\u003e Int",
          "source": "src/Yhc-Core-UniqueId.html#getId",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core UniqueId",
          "module": "Yhc.Core.UniqueId",
          "name": "getId",
          "normalized": "a-\u003eInt",
          "package": "yhccore",
          "partial": "Id",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:getId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.UniqueId",
          "name": "getIdM",
          "package": "yhccore",
          "signature": "m Int",
          "source": "src/Yhc-Core-UniqueId.html#getIdM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core UniqueId",
          "module": "Yhc.Core.UniqueId",
          "name": "getIdM",
          "package": "yhccore",
          "partial": "Id",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:getIdM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.UniqueId",
          "name": "nextId",
          "package": "yhccore",
          "signature": "m Int",
          "source": "src/Yhc-Core-UniqueId.html#nextId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core UniqueId",
          "module": "Yhc.Core.UniqueId",
          "name": "nextId",
          "package": "yhccore",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:nextId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.UniqueId",
          "name": "putId",
          "package": "yhccore",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Yhc-Core-UniqueId.html#putId",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core UniqueId",
          "module": "Yhc.Core.UniqueId",
          "name": "putId",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "yhccore",
          "partial": "Id",
          "signature": "Int-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:putId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.UniqueId",
          "name": "putIdM",
          "package": "yhccore",
          "signature": "Int -\u003e m ()",
          "source": "src/Yhc-Core-UniqueId.html#putIdM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core UniqueId",
          "module": "Yhc.Core.UniqueId",
          "name": "putIdM",
          "normalized": "Int-\u003ea()",
          "package": "yhccore",
          "partial": "Id",
          "signature": "Int-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:putIdM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements unique names in Yhc.Core.\n\u003c/p\u003e\u003cp\u003eGiven a name, it can be dividied into [rest][digits].     \n    The digits form a number (0 for no digits).\n\u003c/p\u003e\u003cp\u003eGiven a set of names, they must all represent unique numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.UniqueName",
          "name": "UniqueName",
          "package": "yhccore",
          "source": "src/Yhc-Core-UniqueName.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements unique names in Yhc.Core Given name it can be dividied into rest digits The digits form number for no digits Given set of names they must all represent unique numbers",
          "hierarchy": "Yhc Core UniqueName",
          "module": "Yhc.Core.UniqueName",
          "name": "UniqueName",
          "package": "yhccore",
          "partial": "Unique Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueFuncsNext",
          "package": "yhccore",
          "signature": "Core -\u003e Int",
          "source": "src/Yhc-Core-UniqueName.html#uniqueFuncsNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core UniqueName",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueFuncsNext",
          "normalized": "Core-\u003eInt",
          "package": "yhccore",
          "partial": "Funcs Next",
          "signature": "Core-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueFuncsNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename functions so they use consecutive numbers starting at 2,\n   to aid human understanding\n\u003c/p\u003e",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueFuncsRename",
          "package": "yhccore",
          "signature": "Core -\u003e Core",
          "source": "src/Yhc-Core-UniqueName.html#uniqueFuncsRename",
          "type": "function"
        },
        "index": {
          "description": "Rename functions so they use consecutive numbers starting at to aid human understanding",
          "hierarchy": "Yhc Core UniqueName",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueFuncsRename",
          "normalized": "Core-\u003eCore",
          "package": "yhccore",
          "partial": "Funcs Rename",
          "signature": "Core-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueFuncsRename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more advanced combinator to capture the pattern of splitting\n   one function into many (i.e. recursive let's, lambda lifting)\n\u003c/p\u003e\u003cp\u003eNeeds rank-2 types to do properly\n\u003c/p\u003e",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueFuncsSplit",
          "package": "yhccore",
          "signature": "(FuncsSplitM CoreFuncName -\u003e (CoreFunc -\u003e FuncsSplitM ()) -\u003e CoreExpr -\u003e FuncsSplitM CoreExpr) -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-UniqueName.html#uniqueFuncsSplit",
          "type": "function"
        },
        "index": {
          "description": "more advanced combinator to capture the pattern of splitting one function into many i.e recursive let lambda lifting Needs rank-2 types to do properly",
          "hierarchy": "Yhc Core UniqueName",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueFuncsSplit",
          "normalized": "(FuncsSplitM CoreFuncName-\u003e(CoreFunc-\u003eFuncsSplitM())-\u003eCoreExpr-\u003eFuncsSplitM CoreExpr)-\u003eCore-\u003eCore",
          "package": "yhccore",
          "partial": "Funcs Split",
          "signature": "(FuncsSplitM CoreFuncName-\u003e(CoreFunc-\u003eFuncsSplitM())-\u003eCoreExpr-\u003eFuncsSplitM CoreExpr)-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueFuncsSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a name, and a unique id, join them together.\n   Replaces any existing id.\n\u003c/p\u003e",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueJoin",
          "package": "yhccore",
          "signature": "String -\u003e Int -\u003e String",
          "source": "src/Yhc-Core-UniqueName.html#uniqueJoin",
          "type": "function"
        },
        "index": {
          "description": "Given name and unique id join them together Replaces any existing id",
          "hierarchy": "Yhc Core UniqueName",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueJoin",
          "normalized": "String-\u003eInt-\u003eString",
          "package": "yhccore",
          "partial": "Join",
          "signature": "String-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueNamesNext",
          "package": "yhccore",
          "signature": "[String] -\u003e Int",
          "source": "src/Yhc-Core-UniqueName.html#uniqueNamesNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core UniqueName",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueNamesNext",
          "normalized": "[String]-\u003eInt",
          "package": "yhccore",
          "partial": "Names Next",
          "signature": "[String]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueNamesNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a name into a prefix and a unique id.\n   0 means no trailing number.\n\u003c/p\u003e",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueSplit",
          "package": "yhccore",
          "signature": "String -\u003e (String, Int)",
          "source": "src/Yhc-Core-UniqueName.html#uniqueSplit",
          "type": "function"
        },
        "index": {
          "description": "Split name into prefix and unique id means no trailing number",
          "hierarchy": "Yhc Core UniqueName",
          "module": "Yhc.Core.UniqueName",
          "name": "uniqueSplit",
          "normalized": "String-\u003e(String,Int)",
          "package": "yhccore",
          "partial": "Split",
          "signature": "String-\u003e(String,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core",
          "name": "Core",
          "package": "yhccore",
          "source": "src/Yhc-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core",
          "module": "Yhc.Core",
          "name": "Core",
          "package": "yhccore",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core.html#"
      }
    }
  ]
]