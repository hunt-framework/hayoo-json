[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Binary.html#",
      "description": {
        "fct-module": "Yhc.Core.Binary",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Binary",
        "module": "Yhc.Core.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "yhccore",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-CaseElimination.html#",
      "description": {
        "fct-module": "Yhc.Core.CaseElimination",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-CaseElimination.html",
        "fct-type": "module",
        "title": "CaseElimination"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core CaseElimination",
        "module": "Yhc.Core.CaseElimination",
        "name": "CaseElimination",
        "normalized": "",
        "package": "yhccore",
        "partial": "Case Elimination",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-CaseElimination.html#v:coreCaseElim",
      "description": {
        "fct-descr": "\u003cp\u003eEliminate useless default statements\n   where the other options cover everything\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.CaseElimination",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e Core",
        "fct-source": "src/Yhc-Core-CaseElimination.html#coreCaseElim",
        "fct-type": "function",
        "title": "coreCaseElim"
      },
      "index": {
        "description": "Eliminate useless default statements where the other options cover everything",
        "hierarchy": "Yhc Core CaseElimination",
        "module": "Yhc.Core.CaseElimination",
        "name": "coreCaseElim",
        "normalized": "Core-\u003eCore",
        "package": "yhccore",
        "partial": "Case Elim",
        "signature": "Core-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Clean.html#",
      "description": {
        "fct-module": "Yhc.Core.Clean",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Clean.html",
        "fct-type": "module",
        "title": "Clean"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Clean",
        "module": "Yhc.Core.Clean",
        "name": "Clean",
        "normalized": "",
        "package": "yhccore",
        "partial": "Clean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Clean.html#v:coreClean",
      "description": {
        "fct-descr": "\u003cp\u003eTake a \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e program, and output Clean.\n   Currently one definition per line, although this is not guaranteed (pretty printing would be nice!)\n   Does not include a \u003cem\u003emodule\u003c/em\u003e definition, or imports.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Clean",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e String",
        "fct-source": "src/Yhc-Core-Clean.html#coreClean",
        "fct-type": "function",
        "title": "coreClean"
      },
      "index": {
        "description": "Take Core program and output Clean Currently one definition per line although this is not guaranteed pretty printing would be nice Does not include module definition or imports",
        "hierarchy": "Yhc Core Clean",
        "module": "Yhc.Core.Clean",
        "name": "coreClean",
        "normalized": "Core-\u003eString",
        "package": "yhccore",
        "partial": "Clean",
        "signature": "Core-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Equal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEqual checks if two CoreExpr's are equal ignoring any children\n    expressions. Usually \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is what is wanted, but for some stuff\n    this is more appropriate.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.Equal",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Equal.html",
        "fct-type": "module",
        "title": "Equal"
      },
      "index": {
        "description": "Equal checks if two CoreExpr are equal ignoring any children expressions Usually Eq is what is wanted but for some stuff this is more appropriate",
        "hierarchy": "Yhc Core Equal",
        "module": "Yhc.Core.Equal",
        "name": "Equal",
        "normalized": "",
        "package": "yhccore",
        "partial": "Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Equal.html#t:CoreExpr1",
      "description": {
        "fct-descr": "\u003cp\u003eShould be equivalent to:\n\u003c/p\u003e\u003cpre\u003e eqCoreExpr1 x y = length xs == length ys && _x vs == _y vs\n     where\n         vs = replicate (length xs) (CoreVar \"\")\n         (xs,_x) = uniplate x\n         (ys,_y) = uniplate y\n\u003c/pre\u003e",
        "fct-module": "Yhc.Core.Equal",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Equal.html#CoreExpr1",
        "fct-type": "data",
        "title": "CoreExpr1"
      },
      "index": {
        "description": "Should be equivalent to eqCoreExpr1 length xs length ys vs vs where vs replicate length xs CoreVar xs uniplate ys uniplate",
        "hierarchy": "Yhc Core Equal",
        "module": "Yhc.Core.Equal",
        "name": "CoreExpr1",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Equal.html#v:coreExpr1",
      "description": {
        "fct-module": "Yhc.Core.Equal",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreExpr1",
        "fct-source": "src/Yhc-Core-Equal.html#coreExpr1",
        "fct-type": "function",
        "title": "coreExpr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Equal",
        "module": "Yhc.Core.Equal",
        "name": "coreExpr1",
        "normalized": "CoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Expr",
        "signature": "CoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Equal.html#v:eqCoreExpr1",
      "description": {
        "fct-module": "Yhc.Core.Equal",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Equal.html#eqCoreExpr1",
        "fct-type": "function",
        "title": "eqCoreExpr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Equal",
        "module": "Yhc.Core.Equal",
        "name": "eqCoreExpr1",
        "normalized": "CoreExpr-\u003eCoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Expr",
        "signature": "CoreExpr-\u003eCoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn: x -\u003e y x\n\u003c/p\u003e\u003cp\u003ex is bound\n\u003c/p\u003e\u003cp\u003ey is free\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-FreeVar.html",
        "fct-type": "module",
        "title": "FreeVar"
      },
      "index": {
        "description": "In is bound is free",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "FreeVar",
        "normalized": "",
        "package": "yhccore",
        "partial": "Free Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:collectAllVars",
      "description": {
        "fct-descr": "\u003cp\u003eWhich variables are mentioned in an expression\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#collectAllVars",
        "fct-type": "function",
        "title": "collectAllVars"
      },
      "index": {
        "description": "Which variables are mentioned in an expression",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "collectAllVars",
        "normalized": "CoreExpr-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "All Vars",
        "signature": "CoreExpr-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:collectBoundVars",
      "description": {
        "fct-descr": "\u003cp\u003eWhich variables are introduced at any point,\n   i.e. LHS of a case alternative, or by a let\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#collectBoundVars",
        "fct-type": "function",
        "title": "collectBoundVars"
      },
      "index": {
        "description": "Which variables are introduced at any point i.e LHS of case alternative or by let",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "collectBoundVars",
        "normalized": "CoreExpr-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "Bound Vars",
        "signature": "CoreExpr-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:collectFreeVars",
      "description": {
        "fct-descr": "\u003cp\u003eWhich variables are in the used in an expression\n   before being defined. No variable will occur more than once\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#collectFreeVars",
        "fct-type": "function",
        "title": "collectFreeVars"
      },
      "index": {
        "description": "Which variables are in the used in an expression before being defined No variable will occur more than once",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "collectFreeVars",
        "normalized": "CoreExpr-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "Free Vars",
        "signature": "CoreExpr-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:countFreeVar",
      "description": {
        "fct-descr": "\u003cp\u003eCount the number of uses of a free variable.\n   If a variable is used in different branches of a case, it is only\n   considered to be the maximum of these two branches.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "CoreVarName -\u003e CoreExpr -\u003e Int",
        "fct-source": "src/Yhc-Core-FreeVar3.html#countFreeVar",
        "fct-type": "function",
        "title": "countFreeVar"
      },
      "index": {
        "description": "Count the number of uses of free variable If variable is used in different branches of case it is only considered to be the maximum of these two branches",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "countFreeVar",
        "normalized": "CoreVarName-\u003eCoreExpr-\u003eInt",
        "package": "yhccore",
        "partial": "Free Var",
        "signature": "CoreVarName-\u003eCoreExpr-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:replaceFreeVars",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all free occurances of variables with a new expression\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "[(CoreVarName, CoreExpr)] -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar3.html#replaceFreeVars",
        "fct-type": "function",
        "title": "replaceFreeVars"
      },
      "index": {
        "description": "Replace all free occurances of variables with new expression",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "replaceFreeVars",
        "normalized": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Free Vars",
        "signature": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVars",
      "description": {
        "fct-descr": "\u003cp\u003eJust \u003ccode\u003euniqueFreeVarsWith\u003c/code\u003e, but with a default set of variables\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar.html#uniqueBoundVars",
        "fct-type": "function",
        "title": "uniqueBoundVars"
      },
      "index": {
        "description": "Just uniqueFreeVarsWith but with default set of variables",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "uniqueBoundVars",
        "normalized": "CoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Bound Vars",
        "signature": "CoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVarsCore",
      "description": {
        "fct-descr": "\u003cp\u003eMake a whole Core program have unique free variables.\n   Between functions, they may share variables\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e Core",
        "fct-source": "src/Yhc-Core-FreeVar.html#uniqueBoundVarsCore",
        "fct-type": "function",
        "title": "uniqueBoundVarsCore"
      },
      "index": {
        "description": "Make whole Core program have unique free variables Between functions they may share variables",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "uniqueBoundVarsCore",
        "normalized": "Core-\u003eCore",
        "package": "yhccore",
        "partial": "Bound Vars Core",
        "signature": "Core-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVarsFunc",
      "description": {
        "fct-descr": "\u003cp\u003eMake a whole function have unique free variables\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc -\u003e CoreFunc",
        "fct-source": "src/Yhc-Core-FreeVar.html#uniqueBoundVarsFunc",
        "fct-type": "function",
        "title": "uniqueBoundVarsFunc"
      },
      "index": {
        "description": "Make whole function have unique free variables",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "uniqueBoundVarsFunc",
        "normalized": "CoreFunc-\u003eCoreFunc",
        "package": "yhccore",
        "partial": "Bound Vars Func",
        "signature": "CoreFunc-\u003eCoreFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVarsWith",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all variables which are locally defined with new names\n   from the given list. Raises an error if not enough free variables\n   are supplied\n\u003c/p\u003e\u003cp\u003eIf any in the new list clashes with a name in \u003ccode\u003e\u003ca\u003ecollectFreeVars\u003c/a\u003e\u003c/code\u003e this\n   will return a program with different semantics!\n\u003c/p\u003e\u003cp\u003eProperty: collectFreeVars (uniqueFreeVarsWith newvars x) \u003ccode\u003esubset\u003c/code\u003e newvars\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "[String] -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar.html#uniqueBoundVarsWith",
        "fct-type": "function",
        "title": "uniqueBoundVarsWith"
      },
      "index": {
        "description": "Replace all variables which are locally defined with new names from the given list Raises an error if not enough free variables are supplied If any in the new list clashes with name in collectFreeVars this will return program with different semantics Property collectFreeVars uniqueFreeVarsWith newvars subset newvars",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "uniqueBoundVarsWith",
        "normalized": "[String]-\u003eCoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Bound Vars With",
        "signature": "[String]-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:uniqueBoundVarsWithout",
      "description": {
        "fct-descr": "\u003cp\u003eJust \u003ccode\u003euniqueFreeVarsWith\u003c/code\u003e, but with a certain set excluded\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "[String] -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar.html#uniqueBoundVarsWithout",
        "fct-type": "function",
        "title": "uniqueBoundVarsWithout"
      },
      "index": {
        "description": "Just uniqueFreeVarsWith but with certain set excluded",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "uniqueBoundVarsWithout",
        "normalized": "[String]-\u003eCoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Bound Vars Without",
        "signature": "[String]-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar.html#v:variableSupply",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a prefix, generate a stream of variables\n   Each will be unique in the series\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar",
        "fct-package": "yhccore",
        "fct-signature": "Char -\u003e [String]",
        "fct-source": "src/Yhc-Core-FreeVar.html#variableSupply",
        "fct-type": "function",
        "title": "variableSupply"
      },
      "index": {
        "description": "Given prefix generate stream of variables Each will be unique in the series",
        "hierarchy": "Yhc Core FreeVar",
        "module": "Yhc.Core.FreeVar",
        "name": "variableSupply",
        "normalized": "Char-\u003e[String]",
        "package": "yhccore",
        "partial": "Supply",
        "signature": "Char-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn: x -\u003e y x\n\u003c/p\u003e\u003cp\u003ex is bound\n\u003c/p\u003e\u003cp\u003ey is free\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-FreeVar2.html",
        "fct-type": "module",
        "title": "FreeVar2"
      },
      "index": {
        "description": "In is bound is free",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "FreeVar2",
        "normalized": "",
        "package": "yhccore",
        "partial": "Free Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#t:FreeVar",
      "description": {
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-FreeVar2.html#FreeVar",
        "fct-type": "data",
        "title": "FreeVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "FreeVar",
        "normalized": "",
        "package": "yhccore",
        "partial": "Free Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:collectAllVars",
      "description": {
        "fct-descr": "\u003cp\u003eWhich variables are mentioned in an expression\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#collectAllVars",
        "fct-type": "function",
        "title": "collectAllVars"
      },
      "index": {
        "description": "Which variables are mentioned in an expression",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "collectAllVars",
        "normalized": "CoreExpr-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "All Vars",
        "signature": "CoreExpr-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:collectBoundVars",
      "description": {
        "fct-descr": "\u003cp\u003eWhich variables are introduced at any point,\n   i.e. LHS of a case alternative, or by a let\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#collectBoundVars",
        "fct-type": "function",
        "title": "collectBoundVars"
      },
      "index": {
        "description": "Which variables are introduced at any point i.e LHS of case alternative or by let",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "collectBoundVars",
        "normalized": "CoreExpr-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "Bound Vars",
        "signature": "CoreExpr-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:collectFreeVars",
      "description": {
        "fct-descr": "\u003cp\u003eWhich variables are in the used in an expression\n   before being defined. No variable will occur more than once\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#collectFreeVars",
        "fct-type": "function",
        "title": "collectFreeVars"
      },
      "index": {
        "description": "Which variables are in the used in an expression before being defined No variable will occur more than once",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "collectFreeVars",
        "normalized": "CoreExpr-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "Free Vars",
        "signature": "CoreExpr-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:countFreeVar",
      "description": {
        "fct-descr": "\u003cp\u003eCount the number of uses of a free variable.\n   If a variable is used in different branches of a case, it is only\n   considered to be the maximum of these two branches.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "CoreVarName -\u003e CoreExpr -\u003e Int",
        "fct-source": "src/Yhc-Core-FreeVar3.html#countFreeVar",
        "fct-type": "function",
        "title": "countFreeVar"
      },
      "index": {
        "description": "Count the number of uses of free variable If variable is used in different branches of case it is only considered to be the maximum of these two branches",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "countFreeVar",
        "normalized": "CoreVarName-\u003eCoreExpr-\u003eInt",
        "package": "yhccore",
        "partial": "Free Var",
        "signature": "CoreVarName-\u003eCoreExpr-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:deleteVars",
      "description": {
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "[String] -\u003e FreeVar ()",
        "fct-source": "src/Yhc-Core-FreeVar2.html#deleteVars",
        "fct-type": "function",
        "title": "deleteVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "deleteVars",
        "normalized": "[String]-\u003eFreeVar()",
        "package": "yhccore",
        "partial": "Vars",
        "signature": "[String]-\u003eFreeVar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:freeVars",
      "description": {
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "Char -\u003e [String]",
        "fct-source": "src/Yhc-Core-FreeVar2.html#freeVars",
        "fct-type": "function",
        "title": "freeVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "freeVars",
        "normalized": "Char-\u003e[String]",
        "package": "yhccore",
        "partial": "Vars",
        "signature": "Char-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:getVar",
      "description": {
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "FreeVar String",
        "fct-source": "src/Yhc-Core-FreeVar2.html#getVar",
        "fct-type": "function",
        "title": "getVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "getVar",
        "normalized": "",
        "package": "yhccore",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:getVars",
      "description": {
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "FreeVar [String]",
        "fct-source": "src/Yhc-Core-FreeVar2.html#getVars",
        "fct-type": "function",
        "title": "getVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "getVars",
        "normalized": "FreeVar[String]",
        "package": "yhccore",
        "partial": "Vars",
        "signature": "FreeVar[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:putVars",
      "description": {
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "[String] -\u003e FreeVar ()",
        "fct-source": "src/Yhc-Core-FreeVar2.html#putVars",
        "fct-type": "function",
        "title": "putVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "putVars",
        "normalized": "[String]-\u003eFreeVar()",
        "package": "yhccore",
        "partial": "Vars",
        "signature": "[String]-\u003eFreeVar()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:replaceFreeVars",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all free occurances of variables with a new expression\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "[(CoreVarName, CoreExpr)] -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar3.html#replaceFreeVars",
        "fct-type": "function",
        "title": "replaceFreeVars"
      },
      "index": {
        "description": "Replace all free occurances of variables with new expression",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "replaceFreeVars",
        "normalized": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Free Vars",
        "signature": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:runFreeVars",
      "description": {
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "FreeVar a -\u003e a",
        "fct-source": "src/Yhc-Core-FreeVar2.html#runFreeVars",
        "fct-type": "function",
        "title": "runFreeVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "runFreeVars",
        "normalized": "FreeVar a-\u003ea",
        "package": "yhccore",
        "partial": "Free Vars",
        "signature": "FreeVar a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:uniqueBoundVars",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all variables which are locally defined with new names\n   from the given list. Raises an error if not enough free variables\n   are supplied\n\u003c/p\u003e\u003cp\u003eIf any in the new list clashes with a name in \u003ccode\u003e\u003ca\u003ecollectFreeVars\u003c/a\u003e\u003c/code\u003e this\n   will return a program with different semantics!\n\u003c/p\u003e\u003cp\u003eProperty: collectFreeVars (uniqueFreeVarsWith newvars x) \u003ccode\u003esubset\u003c/code\u003e newvars\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e FreeVar CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar2.html#uniqueBoundVars",
        "fct-type": "function",
        "title": "uniqueBoundVars"
      },
      "index": {
        "description": "Replace all variables which are locally defined with new names from the given list Raises an error if not enough free variables are supplied If any in the new list clashes with name in collectFreeVars this will return program with different semantics Property collectFreeVars uniqueFreeVarsWith newvars subset newvars",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "uniqueBoundVars",
        "normalized": "CoreExpr-\u003eFreeVar CoreExpr",
        "package": "yhccore",
        "partial": "Bound Vars",
        "signature": "CoreExpr-\u003eFreeVar CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:uniqueBoundVarsCore",
      "description": {
        "fct-descr": "\u003cp\u003eMake a whole Core program have unique free variables.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e FreeVar Core",
        "fct-source": "src/Yhc-Core-FreeVar2.html#uniqueBoundVarsCore",
        "fct-type": "function",
        "title": "uniqueBoundVarsCore"
      },
      "index": {
        "description": "Make whole Core program have unique free variables",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "uniqueBoundVarsCore",
        "normalized": "Core-\u003eFreeVar Core",
        "package": "yhccore",
        "partial": "Bound Vars Core",
        "signature": "Core-\u003eFreeVar Core"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar2.html#v:uniqueBoundVarsFunc",
      "description": {
        "fct-descr": "\u003cp\u003eMake a whole function have unique free variables\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar2",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc -\u003e FreeVar CoreFunc",
        "fct-source": "src/Yhc-Core-FreeVar2.html#uniqueBoundVarsFunc",
        "fct-type": "function",
        "title": "uniqueBoundVarsFunc"
      },
      "index": {
        "description": "Make whole function have unique free variables",
        "hierarchy": "Yhc Core FreeVar2",
        "module": "Yhc.Core.FreeVar2",
        "name": "uniqueBoundVarsFunc",
        "normalized": "CoreFunc-\u003eFreeVar CoreFunc",
        "package": "yhccore",
        "partial": "Bound Vars Func",
        "signature": "CoreFunc-\u003eFreeVar CoreFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn: x -\u003e y x\n\u003c/p\u003e\u003cp\u003ex is bound\n\u003c/p\u003e\u003cp\u003ey is free\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-FreeVar3.html",
        "fct-type": "module",
        "title": "FreeVar3"
      },
      "index": {
        "description": "In is bound is free",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "FreeVar3",
        "normalized": "",
        "package": "yhccore",
        "partial": "Free Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:checkFreeVar",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that the free variables in the second expression\n   are also in the first one. It usually indicates an error to\n   introduce new free variables in transformation.\n\u003c/p\u003e\u003cp\u003eReturn True for safe, False for probably buggy.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-FreeVar3.html#checkFreeVar",
        "fct-type": "function",
        "title": "checkFreeVar"
      },
      "index": {
        "description": "Check that the free variables in the second expression are also in the first one It usually indicates an error to introduce new free variables in transformation Return True for safe False for probably buggy",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "checkFreeVar",
        "normalized": "CoreExpr-\u003eCoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Free Var",
        "signature": "CoreExpr-\u003eCoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:collectAllVars",
      "description": {
        "fct-descr": "\u003cp\u003eWhich variables are mentioned in an expression\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#collectAllVars",
        "fct-type": "function",
        "title": "collectAllVars"
      },
      "index": {
        "description": "Which variables are mentioned in an expression",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "collectAllVars",
        "normalized": "CoreExpr-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "All Vars",
        "signature": "CoreExpr-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:collectBoundVars",
      "description": {
        "fct-descr": "\u003cp\u003eWhich variables are introduced at any point,\n   i.e. LHS of a case alternative, or by a let\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#collectBoundVars",
        "fct-type": "function",
        "title": "collectBoundVars"
      },
      "index": {
        "description": "Which variables are introduced at any point i.e LHS of case alternative or by let",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "collectBoundVars",
        "normalized": "CoreExpr-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "Bound Vars",
        "signature": "CoreExpr-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:collectFreeVars",
      "description": {
        "fct-descr": "\u003cp\u003eWhich variables are in the used in an expression\n   before being defined. No variable will occur more than once\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#collectFreeVars",
        "fct-type": "function",
        "title": "collectFreeVars"
      },
      "index": {
        "description": "Which variables are in the used in an expression before being defined No variable will occur more than once",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "collectFreeVars",
        "normalized": "CoreExpr-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "Free Vars",
        "signature": "CoreExpr-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:countFreeVar",
      "description": {
        "fct-descr": "\u003cp\u003eCount the number of uses of a free variable.\n   If a variable is used in different branches of a case, it is only\n   considered to be the maximum of these two branches.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "CoreVarName -\u003e CoreExpr -\u003e Int",
        "fct-source": "src/Yhc-Core-FreeVar3.html#countFreeVar",
        "fct-type": "function",
        "title": "countFreeVar"
      },
      "index": {
        "description": "Count the number of uses of free variable If variable is used in different branches of case it is only considered to be the maximum of these two branches",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "countFreeVar",
        "normalized": "CoreVarName-\u003eCoreExpr-\u003eInt",
        "package": "yhccore",
        "partial": "Free Var",
        "signature": "CoreVarName-\u003eCoreExpr-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:duplicateExpr",
      "description": {
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e m CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar3.html#duplicateExpr",
        "fct-type": "function",
        "title": "duplicateExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "duplicateExpr",
        "normalized": "CoreExpr-\u003ea CoreExpr",
        "package": "yhccore",
        "partial": "Expr",
        "signature": "CoreExpr-\u003em CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:freeVars",
      "description": {
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "Char -\u003e [String]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#freeVars",
        "fct-type": "function",
        "title": "freeVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "freeVars",
        "normalized": "Char-\u003e[String]",
        "package": "yhccore",
        "partial": "Vars",
        "signature": "Char-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:getVar",
      "description": {
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "m CoreVarName",
        "fct-source": "src/Yhc-Core-FreeVar3.html#getVar",
        "fct-type": "function",
        "title": "getVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "getVar",
        "normalized": "",
        "package": "yhccore",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:getVars",
      "description": {
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "Int -\u003e m [CoreVarName]",
        "fct-source": "src/Yhc-Core-FreeVar3.html#getVars",
        "fct-type": "function",
        "title": "getVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "getVars",
        "normalized": "Int-\u003ea[CoreVarName]",
        "package": "yhccore",
        "partial": "Vars",
        "signature": "Int-\u003em[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:replaceFreeVars",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all free occurances of variables with a new expression\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "[(CoreVarName, CoreExpr)] -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar3.html#replaceFreeVars",
        "fct-type": "function",
        "title": "replaceFreeVars"
      },
      "index": {
        "description": "Replace all free occurances of variables with new expression",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "replaceFreeVars",
        "normalized": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Free Vars",
        "signature": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:replaceFreeVarsUnique",
      "description": {
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "[(CoreVarName, CoreExpr)] -\u003e CoreExpr -\u003e m CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar3.html#replaceFreeVarsUnique",
        "fct-type": "function",
        "title": "replaceFreeVarsUnique"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "replaceFreeVarsUnique",
        "normalized": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003ea CoreExpr",
        "package": "yhccore",
        "partial": "Free Vars Unique",
        "signature": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003em CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:uniplateBoundVars",
      "description": {
        "fct-descr": "\u003cp\u003eGet the variables that are defined to one-level depth\n   and a function to replace them\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e ([CoreVarName], [CoreVarName] -\u003e CoreExpr)",
        "fct-source": "src/Yhc-Core-FreeVar3.html#uniplateBoundVars",
        "fct-type": "function",
        "title": "uniplateBoundVars"
      },
      "index": {
        "description": "Get the variables that are defined to one-level depth and function to replace them",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "uniplateBoundVars",
        "normalized": "CoreExpr-\u003e([CoreVarName],[CoreVarName]-\u003eCoreExpr)",
        "package": "yhccore",
        "partial": "Bound Vars",
        "signature": "CoreExpr-\u003e([CoreVarName],[CoreVarName]-\u003eCoreExpr)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:uniqueBoundVars",
      "description": {
        "fct-descr": "\u003cp\u003eTake care: If v123 is a free variable, then make sure getVar starts above that\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e m CoreExpr",
        "fct-source": "src/Yhc-Core-FreeVar3.html#uniqueBoundVars",
        "fct-type": "function",
        "title": "uniqueBoundVars"
      },
      "index": {
        "description": "Take care If v123 is free variable then make sure getVar starts above that",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "uniqueBoundVars",
        "normalized": "CoreExpr-\u003ea CoreExpr",
        "package": "yhccore",
        "partial": "Bound Vars",
        "signature": "CoreExpr-\u003em CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:uniqueBoundVarsCore",
      "description": {
        "fct-descr": "\u003cp\u003eMake a whole Core program have unique free variables.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e m Core",
        "fct-source": "src/Yhc-Core-FreeVar3.html#uniqueBoundVarsCore",
        "fct-type": "function",
        "title": "uniqueBoundVarsCore"
      },
      "index": {
        "description": "Make whole Core program have unique free variables",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "uniqueBoundVarsCore",
        "normalized": "Core-\u003ea Core",
        "package": "yhccore",
        "partial": "Bound Vars Core",
        "signature": "Core-\u003em Core"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-FreeVar3.html#v:uniqueBoundVarsFunc",
      "description": {
        "fct-descr": "\u003cp\u003eMake a whole function have unique free variables\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FreeVar3",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc -\u003e m CoreFunc",
        "fct-source": "src/Yhc-Core-FreeVar3.html#uniqueBoundVarsFunc",
        "fct-type": "function",
        "title": "uniqueBoundVarsFunc"
      },
      "index": {
        "description": "Make whole function have unique free variables",
        "hierarchy": "Yhc Core FreeVar3",
        "module": "Yhc.Core.FreeVar3",
        "name": "uniqueBoundVarsFunc",
        "normalized": "CoreFunc-\u003ea CoreFunc",
        "package": "yhccore",
        "partial": "Bound Vars Func",
        "signature": "CoreFunc-\u003em CoreFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Haskell.html#",
      "description": {
        "fct-module": "Yhc.Core.Haskell",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Haskell.html",
        "fct-type": "module",
        "title": "Haskell"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Haskell",
        "module": "Yhc.Core.Haskell",
        "name": "Haskell",
        "normalized": "",
        "package": "yhccore",
        "partial": "Haskell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Haskell.html#v:coreHaskell",
      "description": {
        "fct-descr": "\u003cp\u003eTake a \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e program, and output Haskell.\n   Fix up as much as possible\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Haskell",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e String",
        "fct-source": "src/Yhc-Core-Haskell.html#coreHaskell",
        "fct-type": "function",
        "title": "coreHaskell"
      },
      "index": {
        "description": "Take Core program and output Haskell Fix up as much as possible",
        "hierarchy": "Yhc Core Haskell",
        "module": "Yhc.Core.Haskell",
        "name": "coreHaskell",
        "normalized": "Core-\u003eString",
        "package": "yhccore",
        "partial": "Haskell",
        "signature": "Core-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Haskell.html#v:coreHaskellDirect",
      "description": {
        "fct-descr": "\u003cp\u003eTake a \u003ccode\u003e\u003ca\u003eCore\u003c/a\u003e\u003c/code\u003e program, and output Haskell.\n   Currently one definition per line, although this is not guaranteed (pretty printing would be nice!)\n   Does not include a \u003cem\u003emodule\u003c/em\u003e definition, or imports.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Haskell",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e String",
        "fct-source": "src/Yhc-Core-Haskell.html#coreHaskellDirect",
        "fct-type": "function",
        "title": "coreHaskellDirect"
      },
      "index": {
        "description": "Take Core program and output Haskell Currently one definition per line although this is not guaranteed pretty printing would be nice Does not include module definition or imports",
        "hierarchy": "Yhc Core Haskell",
        "module": "Yhc.Core.Haskell",
        "name": "coreHaskellDirect",
        "normalized": "Core-\u003eString",
        "package": "yhccore",
        "partial": "Haskell Direct",
        "signature": "Core-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Html.html#",
      "description": {
        "fct-module": "Yhc.Core.Html",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Html.html",
        "fct-type": "module",
        "title": "Html"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Html",
        "module": "Yhc.Core.Html",
        "name": "Html",
        "normalized": "",
        "package": "yhccore",
        "partial": "Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Html.html#v:coreHtml",
      "description": {
        "fct-module": "Yhc.Core.Html",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e String",
        "fct-source": "src/Yhc-Core-Html.html#coreHtml",
        "fct-type": "function",
        "title": "coreHtml"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Html",
        "module": "Yhc.Core.Html",
        "name": "coreHtml",
        "normalized": "Core-\u003eString",
        "package": "yhccore",
        "partial": "Html",
        "signature": "Core-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInlining module.\n\u003c/p\u003e\u003cp\u003eThis module will let you perform some inlining on Yhc.Core code. The \u003ccode\u003e\u003ca\u003eInlineMode\u003c/a\u003e\u003c/code\u003e argument\n    lets you select what algorithm is used. All should be terminating, and none should\n    increase the number of function calls in a program.\n\u003c/p\u003e\u003cp\u003eFor comparison, GHC's inlining mode is more powerful than \u003ccode\u003e\u003ca\u003eInlineForward\u003c/a\u003e\u003c/code\u003e, but less\n    powerful than \u003ccode\u003e\u003ca\u003eInlineFull\u003c/a\u003e\u003c/code\u003e. (And just so people understand, powerful does not mean more\n    performance, it means more inlining - the two are not always the same!)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineNone\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNo inlining. Equivalent to \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e :)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineAlias\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA function is inlined if it is aliased to another function.\n\u003c/p\u003e\u003cp\u003eA function is aliased if all it does is call another function with the\n    same arguments in the same order. i.e.\n\u003c/p\u003e\u003cpre\u003e f x y z = g x y z\n\u003c/pre\u003e\u003cp\u003eNote that a function is not aliased if any argument is duplicated, the\n    RHS is a primitive or a constructor, or the arguments are reordered.\n\u003c/p\u003e\u003cp\u003eThis restriction means that inlining can even occur when f is used\n    higher order, g can be replaced.\n\u003c/p\u003e\u003cp\u003eThis mode will never increase the code size.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineForward\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA function is inlined if it is a forwarder.\n\u003c/p\u003e\u003cp\u003eA function is a forwarder if all it does is call another function,\n    using only the given arguments, possibly reordered but not duplicated.\n    A forwarder can also be a single constant value, or a simple argument\n    value (a projection), or a constructor with no arguments. i.e.\n\u003c/p\u003e\u003cpre\u003e f x y z = 12\n f x y z = g z y\n f x y z = x\n\u003c/pre\u003e\u003cp\u003eThe function is only inlined if it is called saturated.\n\u003c/p\u003e\u003cp\u003eThis mode will never increase the code size.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineCallOnce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA function is inlined if it is a forwarder, or if there is only one\n    caller. Only inlined if called saturated. Will never increase the code\n    size.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eInlineFull\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis does the most inlining it can, but never inlines the same function\n    more than once in a given expression - to ensure termination. Also doesn't\n    inline CAF's, since that would go wrong. Large functions, recursive functions,\n    duplicated arguments etc - all are inlined without question.\n\u003c/p\u003e\u003cp\u003eDuplicated arguments are moved into a let, to ensure they are not computed\n    additional times.\n\u003c/p\u003e\u003cp\u003eThis mode is more than likely to increase the code size in most programs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Inline.html",
        "fct-type": "module",
        "title": "Inline"
      },
      "index": {
        "description": "Inlining module This module will let you perform some inlining on Yhc.Core code The InlineMode argument lets you select what algorithm is used All should be terminating and none should increase the number of function calls in program For comparison GHC inlining mode is more powerful than InlineForward but less powerful than InlineFull And just so people understand powerful does not mean more performance it means more inlining the two are not always the same InlineNone No inlining Equivalent to id InlineAlias function is inlined if it is aliased to another function function is aliased if all it does is call another function with the same arguments in the same order i.e Note that function is not aliased if any argument is duplicated the RHS is primitive or constructor or the arguments are reordered This restriction means that inlining can even occur when is used higher order can be replaced This mode will never increase the code size InlineForward function is inlined if it is forwarder function is forwarder if all it does is call another function using only the given arguments possibly reordered but not duplicated forwarder can also be single constant value or simple argument value projection or constructor with no arguments i.e The function is only inlined if it is called saturated This mode will never increase the code size InlineCallOnce function is inlined if it is forwarder or if there is only one caller Only inlined if called saturated Will never increase the code size InlineFull This does the most inlining it can but never inlines the same function more than once in given expression to ensure termination Also doesn inline CAF since that would go wrong Large functions recursive functions duplicated arguments etc all are inlined without question Duplicated arguments are moved into let to ensure they are not computed additional times This mode is more than likely to increase the code size in most programs",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "Inline",
        "normalized": "",
        "package": "yhccore",
        "partial": "Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#t:InlineMode",
      "description": {
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Inline.html#InlineMode",
        "fct-type": "data",
        "title": "InlineMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "InlineMode",
        "normalized": "",
        "package": "yhccore",
        "partial": "Inline Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineAlias",
      "description": {
        "fct-descr": "\u003cp\u003ef a b c = g a b c, calls to g become calls to f\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "InlineAlias",
        "fct-source": "src/Yhc-Core-Inline.html#InlineMode",
        "fct-type": "function",
        "title": "InlineAlias"
      },
      "index": {
        "description": "calls to become calls to",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "InlineAlias",
        "normalized": "",
        "package": "yhccore",
        "partial": "Inline Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineCallOnce",
      "description": {
        "fct-descr": "\u003cp\u003ef is called only once\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "InlineCallOnce",
        "fct-source": "src/Yhc-Core-Inline.html#InlineMode",
        "fct-type": "function",
        "title": "InlineCallOnce"
      },
      "index": {
        "description": "is called only once",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "InlineCallOnce",
        "normalized": "",
        "package": "yhccore",
        "partial": "Inline Call Once",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineForward",
      "description": {
        "fct-descr": "\u003cp\u003ef a b c = g a b, g b a, a (g may be a constructor)\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "InlineForward",
        "fct-source": "src/Yhc-Core-Inline.html#InlineMode",
        "fct-type": "function",
        "title": "InlineForward"
      },
      "index": {
        "description": "may be constructor",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "InlineForward",
        "normalized": "",
        "package": "yhccore",
        "partial": "Inline Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineFull",
      "description": {
        "fct-descr": "\u003cp\u003eIf you can inline it, do so! Breaks on first recursive call\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "InlineFull",
        "fct-source": "src/Yhc-Core-Inline.html#InlineMode",
        "fct-type": "function",
        "title": "InlineFull"
      },
      "index": {
        "description": "If you can inline it do so Breaks on first recursive call",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "InlineFull",
        "normalized": "",
        "package": "yhccore",
        "partial": "Inline Full",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:InlineNone",
      "description": {
        "fct-descr": "\u003cp\u003eno inlining at all\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "InlineNone",
        "fct-source": "src/Yhc-Core-Inline.html#InlineMode",
        "fct-type": "function",
        "title": "InlineNone"
      },
      "index": {
        "description": "no inlining at all",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "InlineNone",
        "normalized": "",
        "package": "yhccore",
        "partial": "Inline None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:coreInline",
      "description": {
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "InlineMode -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Inline.html#coreInline",
        "fct-type": "function",
        "title": "coreInline"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "coreInline",
        "normalized": "InlineMode-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Inline",
        "signature": "InlineMode-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:coreInlineFunc",
      "description": {
        "fct-descr": "\u003cp\u003eInline a function, fails if it would produce a lambda\n   See \u003ccode\u003e\u003ca\u003ecoreInlineFuncLambda\u003c/a\u003e\u003c/code\u003e for a version without this property\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc -\u003e [CoreExpr] -\u003e Maybe CoreExpr",
        "fct-source": "src/Yhc-Core-Inline.html#coreInlineFunc",
        "fct-type": "function",
        "title": "coreInlineFunc"
      },
      "index": {
        "description": "Inline function fails if it would produce lambda See coreInlineFuncLambda for version without this property",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "coreInlineFunc",
        "normalized": "CoreFunc-\u003e[CoreExpr]-\u003eMaybe CoreExpr",
        "package": "yhccore",
        "partial": "Inline Func",
        "signature": "CoreFunc-\u003e[CoreExpr]-\u003eMaybe CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Inline.html#v:coreInlineFuncLambda",
      "description": {
        "fct-descr": "\u003cp\u003eInline a function, generating a lambda if necessary\n   NOTE: Should this return a CoreLam now we have this in the AST\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Inline",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc -\u003e [CoreExpr] -\u003e ([String], CoreExpr)",
        "fct-source": "src/Yhc-Core-Inline.html#coreInlineFuncLambda",
        "fct-type": "function",
        "title": "coreInlineFuncLambda"
      },
      "index": {
        "description": "Inline function generating lambda if necessary NOTE Should this return CoreLam now we have this in the AST",
        "hierarchy": "Yhc Core Inline",
        "module": "Yhc.Core.Inline",
        "name": "coreInlineFuncLambda",
        "normalized": "CoreFunc-\u003e[CoreExpr]-\u003e([String],CoreExpr)",
        "package": "yhccore",
        "partial": "Inline Func Lambda",
        "signature": "CoreFunc-\u003e[CoreExpr]-\u003e([String],CoreExpr)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Internal-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "yhccore",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#t:Binary",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "class",
        "fct-source": "src/Yhc-Core-Internal-Binary.html#Binary",
        "fct-type": "class",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "yhccore",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:get",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "Handle -\u003e IO a",
        "fct-source": "src/Yhc-Core-Internal-Binary.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "get",
        "normalized": "Handle-\u003eIO a",
        "package": "yhccore",
        "partial": "",
        "signature": "Handle-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:getByte",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "Handle -\u003e IO Int",
        "fct-source": "src/Yhc-Core-Internal-Binary.html#getByte",
        "fct-type": "function",
        "title": "getByte"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "getByte",
        "normalized": "Handle-\u003eIO Int",
        "package": "yhccore",
        "partial": "Byte",
        "signature": "Handle-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:putByte",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "Handle -\u003e Int -\u003e IO ()",
        "fct-source": "src/Yhc-Core-Internal-Binary.html#putByte",
        "fct-type": "function",
        "title": "putByte"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "putByte",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "yhccore",
        "partial": "Byte",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:put_",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "Handle -\u003e a -\u003e IO ()",
        "fct-source": "src/Yhc-Core-Internal-Binary.html#put_",
        "fct-type": "method",
        "title": "put_"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "put_",
        "normalized": "Handle-\u003ea-\u003eIO()",
        "package": "yhccore",
        "partial": "",
        "signature": "Handle-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:readBinary",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "FilePath -\u003e IO a",
        "fct-source": "src/Yhc-Core-Internal-Binary.html#readBinary",
        "fct-type": "function",
        "title": "readBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "readBinary",
        "normalized": "FilePath-\u003eIO a",
        "package": "yhccore",
        "partial": "Binary",
        "signature": "FilePath-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:showGet",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "Handle -\u003e IO a",
        "fct-source": "src/Yhc-Core-Internal-Binary.html#showGet",
        "fct-type": "function",
        "title": "showGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "showGet",
        "normalized": "Handle-\u003eIO a",
        "package": "yhccore",
        "partial": "Get",
        "signature": "Handle-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:showPut",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "Handle -\u003e a -\u003e IO ()",
        "fct-source": "src/Yhc-Core-Internal-Binary.html#showPut",
        "fct-type": "function",
        "title": "showPut"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "showPut",
        "normalized": "Handle-\u003ea-\u003eIO()",
        "package": "yhccore",
        "partial": "Put",
        "signature": "Handle-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Binary.html#v:writeBinary",
      "description": {
        "fct-module": "Yhc.Core.Internal.Binary",
        "fct-package": "yhccore",
        "fct-signature": "FilePath -\u003e a -\u003e IO ()",
        "fct-source": "src/Yhc-Core-Internal-Binary.html#writeBinary",
        "fct-type": "function",
        "title": "writeBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Binary",
        "module": "Yhc.Core.Internal.Binary",
        "name": "writeBinary",
        "normalized": "FilePath-\u003ea-\u003eIO()",
        "package": "yhccore",
        "partial": "Binary",
        "signature": "FilePath-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-General.html#",
      "description": {
        "fct-module": "Yhc.Core.Internal.General",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Internal-General.html",
        "fct-type": "module",
        "title": "General"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal General",
        "module": "Yhc.Core.Internal.General",
        "name": "General",
        "normalized": "",
        "package": "yhccore",
        "partial": "General",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-General.html#v:disjoint",
      "description": {
        "fct-module": "Yhc.Core.Internal.General",
        "fct-package": "yhccore",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Yhc-Core-Internal-General.html#disjoint",
        "fct-type": "function",
        "title": "disjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal General",
        "module": "Yhc.Core.Internal.General",
        "name": "disjoint",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "yhccore",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-General.html#v:ordNub",
      "description": {
        "fct-module": "Yhc.Core.Internal.General",
        "fct-package": "yhccore",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Yhc-Core-Internal-General.html#ordNub",
        "fct-type": "function",
        "title": "ordNub"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal General",
        "module": "Yhc.Core.Internal.General",
        "name": "ordNub",
        "normalized": "[a]-\u003e[a]",
        "package": "yhccore",
        "partial": "Nub",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJohn Hughes's and Simon Peyton Jones's Pretty Printer Combinators\n\u003c/p\u003e\u003cp\u003eBased on \u003cem\u003eThe Design of a Pretty-printing Library\u003c/em\u003e\n in Advanced Functional Programming,\n Johan Jeuring and Erik Meijer (eds), LNCS 925\n \u003ca\u003ehttp://www.cs.chalmers.se/~rjmh/Papers/pretty.ps\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eHeavily modified by Simon Peyton Jones, Dec 96\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html",
        "fct-type": "module",
        "title": "HughesPJ"
      },
      "index": {
        "description": "John Hughes and Simon Peyton Jones Pretty Printer Combinators Based on The Design of Pretty-printing Library in Advanced Functional Programming Johan Jeuring and Erik Meijer eds LNCS http www.cs.chalmers.se rjmh Papers pretty.ps Heavily modified by Simon Peyton Jones Dec",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "HughesPJ",
        "normalized": "",
        "package": "yhccore",
        "partial": "Hughes PJ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract type of documents.\n The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance is equivalent to using \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "The abstract type of documents The Show instance is equivalent to using render",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "Doc",
        "normalized": "",
        "package": "yhccore",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eRendering mode.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "Rendering mode",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "Mode",
        "normalized": "",
        "package": "yhccore",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#t:Style",
      "description": {
        "fct-descr": "\u003cp\u003eA rendering style.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "rendering style",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "Style",
        "normalized": "",
        "package": "yhccore",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#t:TextDetails",
      "description": {
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#TextDetails",
        "fct-type": "data",
        "title": "TextDetails"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "TextDetails",
        "normalized": "",
        "package": "yhccore",
        "partial": "Text Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eAbove, except that if the last line of the first argument stops\n at least one position before the first line of the second begins,\n these two lines are overlapped.  For example:\n\u003c/p\u003e\u003cpre\u003e    text \"hi\" $$ nest 5 (text \"there\")\n\u003c/pre\u003e\u003cp\u003elays out as\n\u003c/p\u003e\u003cpre\u003e    hi   there\n\u003c/pre\u003e\u003cp\u003erather than\n\u003c/p\u003e\u003cpre\u003e    hi\n         there\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, and also satisfies\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z = x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e (y \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z)\u003c/code\u003e, if \u003ccode\u003ey\u003c/code\u003e non-empty.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "Above except that if the last line of the first argument stops at least one position before the first line of the second begins these two lines are overlapped For example text hi nest text there lays out as hi there rather than hi there is associative with identity empty and also satisfies if non-empty",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "($$) $$",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:-36--43--36-",
      "description": {
        "fct-descr": "\u003cp\u003eAbove, with no overlapping.\n \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#%24%2B%24",
        "fct-type": "function",
        "title": "($+$)"
      },
      "index": {
        "description": "Above with no overlapping is associative with identity empty",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "($+$) $+$",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBeside, separated by space, unless one of the arguments is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Beside separated by space unless one of the arguments is empty is associative with identity empty",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBeside.\n \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "Beside is associative with identity empty",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:Chr",
      "description": {
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Chr Char",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#TextDetails",
        "fct-type": "function",
        "title": "Chr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "Chr",
        "normalized": "",
        "package": "yhccore",
        "partial": "Chr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:LeftMode",
      "description": {
        "fct-descr": "\u003cp\u003eNo indentation, infinitely long lines\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "LeftMode",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "LeftMode"
      },
      "index": {
        "description": "No indentation infinitely long lines",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "LeftMode",
        "normalized": "",
        "package": "yhccore",
        "partial": "Left Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:OneLineMode",
      "description": {
        "fct-descr": "\u003cp\u003eAll on one line\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "OneLineMode",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "OneLineMode"
      },
      "index": {
        "description": "All on one line",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "OneLineMode",
        "normalized": "",
        "package": "yhccore",
        "partial": "One Line Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:PStr",
      "description": {
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "PStr String",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#TextDetails",
        "fct-type": "function",
        "title": "PStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "PStr",
        "normalized": "",
        "package": "yhccore",
        "partial": "PStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:PageMode",
      "description": {
        "fct-descr": "\u003cp\u003eNormal \n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "PageMode",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "PageMode"
      },
      "index": {
        "description": "Normal",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "PageMode",
        "normalized": "",
        "package": "yhccore",
        "partial": "Page Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:Str",
      "description": {
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Str String",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#TextDetails",
        "fct-type": "function",
        "title": "Str"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "Str",
        "normalized": "",
        "package": "yhccore",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:Style",
      "description": {
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Style",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "Style",
        "normalized": "",
        "package": "yhccore",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:ZigZagMode",
      "description": {
        "fct-descr": "\u003cp\u003eWith zig-zag cuts\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "ZigZagMode",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Mode",
        "fct-type": "function",
        "title": "ZigZagMode"
      },
      "index": {
        "description": "With zig-zag cuts",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "ZigZagMode",
        "normalized": "",
        "package": "yhccore",
        "partial": "Zig Zag Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:braces",
      "description": {
        "fct-descr": "\u003cp\u003eWrap document in \u003ccode\u003e{...}\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#braces",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "Wrap document in",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "braces",
        "normalized": "Doc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:brackets",
      "description": {
        "fct-descr": "\u003cp\u003eWrap document in \u003ccode\u003e[...]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#brackets",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "Wrap document in",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "brackets",
        "normalized": "Doc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "Either hcat or vcat",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "cat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003eA document of height and width 1, containing a literal character.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Char -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "document of height and width containing literal character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "char",
        "normalized": "Char-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Char-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:colon",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e:\u003c/code\u003e character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#colon",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "colon",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:comma",
      "description": {
        "fct-descr": "\u003cp\u003eA ',' character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#comma",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "comma",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:double",
      "description": {
        "fct-descr": "\u003cpre\u003edouble n = text (show n)\u003c/pre\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Double -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#double",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "double text show",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "double",
        "normalized": "Double-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Double-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:doubleQuotes",
      "description": {
        "fct-descr": "\u003cp\u003eWrap document in \u003ccode\u003e\"...\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#doubleQuotes",
        "fct-type": "function",
        "title": "doubleQuotes"
      },
      "index": {
        "description": "Wrap document in",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "doubleQuotes",
        "normalized": "Doc-\u003eDoc",
        "package": "yhccore",
        "partial": "Quotes",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty document, with no height and no width.\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e$+$\u003c/a\u003e\u003c/code\u003e, and anywhere\n in the argument list for \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efcat\u003c/a\u003e\u003c/code\u003e etc.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty document with no height and no width empty is the identity for and and anywhere in the argument list for sep hcat hsep vcat fcat etc",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "empty",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:equals",
      "description": {
        "fct-descr": "\u003cp\u003eA '=' character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#equals",
        "fct-type": "function",
        "title": "equals"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "equals",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:fcat",
      "description": {
        "fct-descr": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#fcat",
        "fct-type": "function",
        "title": "fcat"
      },
      "index": {
        "description": "Paragraph fill version of cat",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "fcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:float",
      "description": {
        "fct-descr": "\u003cpre\u003efloat n = text (show n)\u003c/pre\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Float -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#float",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "float text show",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "float",
        "normalized": "Float-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Float-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:fsep",
      "description": {
        "fct-descr": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#fsep",
        "fct-type": "function",
        "title": "fsep"
      },
      "index": {
        "description": "Paragraph fill version of sep",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "fsep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:fullRender",
      "description": {
        "fct-descr": "\u003cp\u003eThe general rendering interface.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Mode-\u003e Int-\u003e Float-\u003e (TextDetails -\u003e a -\u003e a)-\u003e a-\u003e Doc-\u003e a",
        "fct-type": "function",
        "title": "fullRender"
      },
      "index": {
        "description": "The general rendering interface",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "fullRender",
        "normalized": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea",
        "package": "yhccore",
        "partial": "Render",
        "signature": "Mode-\u003eInt-\u003eFloat-\u003e(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eDoc-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:hang",
      "description": {
        "fct-descr": "\u003cpre\u003ehang d1 n d2 = sep [d1, nest n d2]\u003c/pre\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Int -\u003e Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#hang",
        "fct-type": "function",
        "title": "hang"
      },
      "index": {
        "description": "hang d1 d2 sep d1 nest d2",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "hang",
        "normalized": "Doc-\u003eInt-\u003eDoc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eInt-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:hcat",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#hcat",
        "fct-type": "function",
        "title": "hcat"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "hcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:hsep",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#hsep",
        "fct-type": "function",
        "title": "hsep"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "hsep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:int",
      "description": {
        "fct-descr": "\u003cpre\u003eint n = text (show n)\u003c/pre\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Int -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "int text show",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "int",
        "normalized": "Int-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Int-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:integer",
      "description": {
        "fct-descr": "\u003cpre\u003einteger n = text (show n)\u003c/pre\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Integer -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#integer",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "integer text show",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "integer",
        "normalized": "Integer-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Integer-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the document is empty\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Bool",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Returns True if the document is empty",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "isEmpty",
        "normalized": "Doc-\u003eBool",
        "package": "yhccore",
        "partial": "Empty",
        "signature": "Doc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:lbrace",
      "description": {
        "fct-descr": "\u003cp\u003eA '{' character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#lbrace",
        "fct-type": "function",
        "title": "lbrace"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "lbrace",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:lbrack",
      "description": {
        "fct-descr": "\u003cp\u003eA '[' character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#lbrack",
        "fct-type": "function",
        "title": "lbrack"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "lbrack",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:lineLength",
      "description": {
        "fct-descr": "\u003cp\u003eLength of line, in chars\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Int",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "lineLength"
      },
      "index": {
        "description": "Length of line in chars",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "lineLength",
        "normalized": "",
        "package": "yhccore",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:lparen",
      "description": {
        "fct-descr": "\u003cp\u003eA '(' character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#lparen",
        "fct-type": "function",
        "title": "lparen"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "lparen",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:mode",
      "description": {
        "fct-descr": "\u003cp\u003eThe rendering mode\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Mode",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "The rendering mode",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "mode",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:nest",
      "description": {
        "fct-descr": "\u003cp\u003eNest (or indent) a document by a given number of positions\n (which may also be negative).  \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e satisfies the laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e 0 x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k' x) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e (k+k') x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k z \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k x \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y = x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is needed because\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is a left identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Int -\u003e Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#nest",
        "fct-type": "function",
        "title": "nest"
      },
      "index": {
        "description": "Nest or indent document by given number of positions which may also be negative nest satisfies the laws nest nest nest nest nest nest nest nest nest nest nest empty empty nest if non-empty The side condition on the last law is needed because empty is left identity for",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "nest",
        "normalized": "Int-\u003eDoc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Int-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:parens",
      "description": {
        "fct-descr": "\u003cp\u003eWrap document in \u003ccode\u003e(...)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#parens",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "Wrap document in",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "parens",
        "normalized": "Doc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:ptext",
      "description": {
        "fct-descr": "\u003cp\u003eAn obsolete function, now identical to \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#ptext",
        "fct-type": "function",
        "title": "ptext"
      },
      "index": {
        "description": "An obsolete function now identical to text",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "ptext",
        "normalized": "String-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:punctuate",
      "description": {
        "fct-descr": "\u003cpre\u003epunctuate p [d1, ... dn] = [d1 \u003c\u003e p, d2 \u003c\u003e p, ... dn-1 \u003c\u003e p, dn]\u003c/pre\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e [Doc] -\u003e [Doc]",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#punctuate",
        "fct-type": "function",
        "title": "punctuate"
      },
      "index": {
        "description": "punctuate d1 dn d1 d2 dn-1 dn",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "punctuate",
        "normalized": "Doc-\u003e[Doc]-\u003e[Doc]",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003e[Doc]-\u003e[Doc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:quotes",
      "description": {
        "fct-descr": "\u003cp\u003eWrap document in \u003ccode\u003e'...'\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#quotes",
        "fct-type": "function",
        "title": "quotes"
      },
      "index": {
        "description": "Wrap document in",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "quotes",
        "normalized": "Doc-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:rational",
      "description": {
        "fct-descr": "\u003cpre\u003erational n = text (show n)\u003c/pre\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Rational -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#rational",
        "fct-type": "function",
        "title": "rational"
      },
      "index": {
        "description": "rational text show",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "rational",
        "normalized": "Rational-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "Rational-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:rbrace",
      "description": {
        "fct-descr": "\u003cp\u003eA '}' character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#rbrace",
        "fct-type": "function",
        "title": "rbrace"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "rbrace",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:rbrack",
      "description": {
        "fct-descr": "\u003cp\u003eA ']' character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#rbrack",
        "fct-type": "function",
        "title": "rbrack"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "rbrack",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the document as a string using the default \u003ccode\u003e\u003ca\u003estyle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc -\u003e String",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#render",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Renders the document as string using the default style",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "render",
        "normalized": "Doc-\u003eString",
        "package": "yhccore",
        "partial": "",
        "signature": "Doc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:renderStyle",
      "description": {
        "fct-descr": "\u003cp\u003eRender the document as a string using a specified style.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Style -\u003e Doc -\u003e String",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#renderStyle",
        "fct-type": "function",
        "title": "renderStyle"
      },
      "index": {
        "description": "Render the document as string using specified style",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "renderStyle",
        "normalized": "Style-\u003eDoc-\u003eString",
        "package": "yhccore",
        "partial": "Style",
        "signature": "Style-\u003eDoc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:ribbonsPerLine",
      "description": {
        "fct-descr": "\u003cp\u003eRatio of ribbon length to line length\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Float",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#Style",
        "fct-type": "function",
        "title": "ribbonsPerLine"
      },
      "index": {
        "description": "Ratio of ribbon length to line length",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "ribbonsPerLine",
        "normalized": "",
        "package": "yhccore",
        "partial": "Per Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:rparen",
      "description": {
        "fct-descr": "\u003cp\u003eA ')' character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#rparen",
        "fct-type": "function",
        "title": "rparen"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "rparen",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:semi",
      "description": {
        "fct-descr": "\u003cp\u003eA ';' character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#semi",
        "fct-type": "function",
        "title": "semi"
      },
      "index": {
        "description": "character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "semi",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:sep",
      "description": {
        "fct-descr": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#sep",
        "fct-type": "function",
        "title": "sep"
      },
      "index": {
        "description": "Either hsep or vcat",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "sep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003eA space character\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "space character",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "space",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:style",
      "description": {
        "fct-descr": "\u003cp\u003eThe default style (\u003ccode\u003emode=PageMode, lineLength=100, ribbonsPerLine=1.5\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "Style",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#style",
        "fct-type": "function",
        "title": "style"
      },
      "index": {
        "description": "The default style mode PageMode lineLength ribbonsPerLine",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "style",
        "normalized": "",
        "package": "yhccore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eA document of height 1 containing a literal string.\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e satisfies the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e t = \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e (s\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003et)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\" \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e x = x\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is necessary because \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e\n has height 1, while \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e has no height.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "document of height containing literal string text satisfies the following laws text text text text if non-empty The side condition on the last law is necessary because text has height while empty has no height",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "text",
        "normalized": "String-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "vcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "yhccore",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-HughesPJ.html#v:zeroText",
      "description": {
        "fct-descr": "\u003cp\u003eSome text, but without any width. Use for non-printing text\n such as a HTML or Latex tags\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Internal.HughesPJ",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Yhc-Core-Internal-HughesPJ.html#zeroText",
        "fct-type": "function",
        "title": "zeroText"
      },
      "index": {
        "description": "Some text but without any width Use for non-printing text such as HTML or Latex tags",
        "hierarchy": "Yhc Core Internal HughesPJ",
        "module": "Yhc.Core.Internal.HughesPJ",
        "name": "zeroText",
        "normalized": "String-\u003eDoc",
        "package": "yhccore",
        "partial": "Text",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#",
      "description": {
        "fct-module": "Yhc.Core.Internal.Play",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Internal-Play.html",
        "fct-type": "module",
        "title": "Play"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Play",
        "module": "Yhc.Core.Internal.Play",
        "name": "Play",
        "normalized": "",
        "package": "yhccore",
        "partial": "Play",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#t:Play",
      "description": {
        "fct-module": "Yhc.Core.Internal.Play",
        "fct-package": "yhccore",
        "fct-signature": "class",
        "fct-source": "src/Yhc-Core-Internal-Play.html#Play",
        "fct-type": "class",
        "title": "Play"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Play",
        "module": "Yhc.Core.Internal.Play",
        "name": "Play",
        "normalized": "",
        "package": "yhccore",
        "partial": "Play",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:allChildren",
      "description": {
        "fct-module": "Yhc.Core.Internal.Play",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Yhc-Core-Internal-Play.html#allChildren",
        "fct-type": "function",
        "title": "allChildren"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Play",
        "module": "Yhc.Core.Internal.Play",
        "name": "allChildren",
        "normalized": "a-\u003e[a]",
        "package": "yhccore",
        "partial": "Children",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:getChildren",
      "description": {
        "fct-module": "Yhc.Core.Internal.Play",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Yhc-Core-Internal-Play.html#getChildren",
        "fct-type": "method",
        "title": "getChildren"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Play",
        "module": "Yhc.Core.Internal.Play",
        "name": "getChildren",
        "normalized": "a-\u003e[a]",
        "package": "yhccore",
        "partial": "Children",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:mapOver",
      "description": {
        "fct-module": "Yhc.Core.Internal.Play",
        "fct-package": "yhccore",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/Yhc-Core-Internal-Play.html#mapOver",
        "fct-type": "function",
        "title": "mapOver"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Play",
        "module": "Yhc.Core.Internal.Play",
        "name": "mapOver",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea",
        "package": "yhccore",
        "partial": "Over",
        "signature": "(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:mapUnder",
      "description": {
        "fct-module": "Yhc.Core.Internal.Play",
        "fct-package": "yhccore",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/Yhc-Core-Internal-Play.html#mapUnder",
        "fct-type": "function",
        "title": "mapUnder"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Play",
        "module": "Yhc.Core.Internal.Play",
        "name": "mapUnder",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea",
        "package": "yhccore",
        "partial": "Under",
        "signature": "(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:mapUnderM",
      "description": {
        "fct-module": "Yhc.Core.Internal.Play",
        "fct-package": "yhccore",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/Yhc-Core-Internal-Play.html#mapUnderM",
        "fct-type": "function",
        "title": "mapUnderM"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Play",
        "module": "Yhc.Core.Internal.Play",
        "name": "mapUnderM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "yhccore",
        "partial": "Under",
        "signature": "(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Internal-Play.html#v:setChildren",
      "description": {
        "fct-module": "Yhc.Core.Internal.Play",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e [a] -\u003e a",
        "fct-source": "src/Yhc-Core-Internal-Play.html#setChildren",
        "fct-type": "method",
        "title": "setChildren"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Internal Play",
        "module": "Yhc.Core.Internal.Play",
        "name": "setChildren",
        "normalized": "a-\u003e[a]-\u003ea",
        "package": "yhccore",
        "partial": "Children",
        "signature": "a-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant-LambdaLift.html#",
      "description": {
        "fct-module": "Yhc.Core.Invariant.LambdaLift",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Invariant-LambdaLift.html",
        "fct-type": "module",
        "title": "LambdaLift"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Invariant LambdaLift",
        "module": "Yhc.Core.Invariant.LambdaLift",
        "name": "LambdaLift",
        "normalized": "",
        "package": "yhccore",
        "partial": "Lambda Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant-LambdaLift.html#v:coreLambdaLift",
      "description": {
        "fct-module": "Yhc.Core.Invariant.LambdaLift",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Invariant-LambdaLift.html#coreLambdaLift",
        "fct-type": "function",
        "title": "coreLambdaLift"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Invariant LambdaLift",
        "module": "Yhc.Core.Invariant.LambdaLift",
        "name": "coreLambdaLift",
        "normalized": "Core-\u003eCore",
        "package": "yhccore",
        "partial": "Lambda Lift",
        "signature": "Core-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#",
      "description": {
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Invariant.html",
        "fct-type": "module",
        "title": "Invariant"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "Invariant",
        "normalized": "",
        "package": "yhccore",
        "partial": "Invariant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#t:Invariant",
      "description": {
        "fct-descr": "\u003cp\u003eNote, not all combinations are yet implemented - they crash at runtime.\n   If you want any invariant, just email the list.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "data",
        "title": "Invariant"
      },
      "index": {
        "description": "Note not all combinations are yet implemented they crash at runtime If you want any invariant just email the list",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "Invariant",
        "normalized": "",
        "package": "yhccore",
        "partial": "Invariant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:ConsecutiveFuncs",
      "description": {
        "fct-descr": "\u003cp\u003eLow function numbers\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "ConsecutiveFuncs",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "ConsecutiveFuncs"
      },
      "index": {
        "description": "Low function numbers",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "ConsecutiveFuncs",
        "normalized": "",
        "package": "yhccore",
        "partial": "Consecutive Funcs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:CoreAppCon",
      "description": {
        "fct-descr": "\u003cp\u003eAll CoreCon's must be enclosed in a CoreApp.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "CoreAppCon",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "CoreAppCon"
      },
      "index": {
        "description": "All CoreCon must be enclosed in CoreApp",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "CoreAppCon",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core App Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:CoreAppFun",
      "description": {
        "fct-descr": "\u003cp\u003eAll CoreFun's must be enclosed in a CoreApp.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "CoreAppFun",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "CoreAppFun"
      },
      "index": {
        "description": "All CoreFun must be enclosed in CoreApp",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "CoreAppFun",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core App Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:CoreCaseVar",
      "description": {
        "fct-descr": "\u003cp\u003eAll CoreCase's must be on a variable.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "CoreCaseVar",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "CoreCaseVar"
      },
      "index": {
        "description": "All CoreCase must be on variable",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "CoreCaseVar",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Case Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:FuncArityAtMostOne",
      "description": {
        "fct-descr": "\u003cp\u003eAll CoreApp CoreFun's must have at most one argument directly present\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "FuncArityAtMostOne",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "FuncArityAtMostOne"
      },
      "index": {
        "description": "All CoreApp CoreFun must have at most one argument directly present",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "FuncArityAtMostOne",
        "normalized": "",
        "package": "yhccore",
        "partial": "Func Arity At Most One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:FuncArityExactlyOne",
      "description": {
        "fct-descr": "\u003cp\u003eAll CoreApp CoreFun's must have exactly one argument present\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "FuncArityExactlyOne",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "FuncArityExactlyOne"
      },
      "index": {
        "description": "All CoreApp CoreFun must have exactly one argument present",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "FuncArityExactlyOne",
        "normalized": "",
        "package": "yhccore",
        "partial": "Func Arity Exactly One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCaseConst",
      "description": {
        "fct-descr": "\u003cp\u003eAll CoreCase's must be on constructors, not constants.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoCaseConst",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoCaseConst"
      },
      "index": {
        "description": "All CoreCase must be on constructors not constants",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoCaseConst",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Case Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCaseDefault",
      "description": {
        "fct-descr": "\u003cp\u003eAll constructor CoreCase's must not contain a default.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoCaseDefault",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoCaseDefault"
      },
      "index": {
        "description": "All constructor CoreCase must not contain default",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoCaseDefault",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Case Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCaseDefaultOne",
      "description": {
        "fct-descr": "\u003cp\u003eAll constructor CoreCase defaults must represent at least two constructors.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoCaseDefaultOne",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoCaseDefaultOne"
      },
      "index": {
        "description": "All constructor CoreCase defaults must represent at least two constructors",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoCaseDefaultOne",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Case Default One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCoreLam",
      "description": {
        "fct-descr": "\u003cp\u003eThe CoreLam constructor must not occur.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoCoreLam",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoCoreLam"
      },
      "index": {
        "description": "The CoreLam constructor must not occur",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoCoreLam",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Core Lam",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCoreLet",
      "description": {
        "fct-descr": "\u003cp\u003eThe CoreLet constructor must not occur. Removal reduces sharing\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoCoreLet",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoCoreLet"
      },
      "index": {
        "description": "The CoreLet constructor must not occur Removal reduces sharing",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoCoreLet",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Core Let",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoCorePos",
      "description": {
        "fct-descr": "\u003cp\u003eThe CorePos constructor must not occur.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoCorePos",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoCorePos"
      },
      "index": {
        "description": "The CorePos constructor must not occur",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoCorePos",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Core Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoEmptyApp",
      "description": {
        "fct-descr": "\u003cp\u003eAll CoreApp's must not have an empty argument list.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoEmptyApp",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoEmptyApp"
      },
      "index": {
        "description": "All CoreApp must not have an empty argument list",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoEmptyApp",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Empty App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoPartialAppCon",
      "description": {
        "fct-descr": "\u003cp\u003eNo partial applications of CoreCon\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoPartialAppCon",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoPartialAppCon"
      },
      "index": {
        "description": "No partial applications of CoreCon",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoPartialAppCon",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Partial App Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoPartialAppPrim",
      "description": {
        "fct-descr": "\u003cp\u003eNo partial applications of CoreFun to a CorePrim\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoPartialAppPrim",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoPartialAppPrim"
      },
      "index": {
        "description": "No partial applications of CoreFun to CorePrim",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoPartialAppPrim",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Partial App Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:NoRecursiveLet",
      "description": {
        "fct-descr": "\u003cp\u003eCoreLet's must not be recursive. Removal reduces sharing in limited cases\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "NoRecursiveLet",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "NoRecursiveLet"
      },
      "index": {
        "description": "CoreLet must not be recursive Removal reduces sharing in limited cases",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "NoRecursiveLet",
        "normalized": "",
        "package": "yhccore",
        "partial": "No Recursive Let",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:UniqueVarsCore",
      "description": {
        "fct-descr": "\u003cp\u003eUnique variables in the whole program\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "UniqueVarsCore",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "UniqueVarsCore"
      },
      "index": {
        "description": "Unique variables in the whole program",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "UniqueVarsCore",
        "normalized": "",
        "package": "yhccore",
        "partial": "Unique Vars Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:UniqueVarsFunc",
      "description": {
        "fct-descr": "\u003cp\u003eUnique variables in each function\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "UniqueVarsFunc",
        "fct-source": "src/Yhc-Core-Invariant.html#Invariant",
        "fct-type": "function",
        "title": "UniqueVarsFunc"
      },
      "index": {
        "description": "Unique variables in each function",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "UniqueVarsFunc",
        "normalized": "",
        "package": "yhccore",
        "partial": "Unique Vars Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:checkInvariant",
      "description": {
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "Invariant -\u003e Core -\u003e Bool",
        "fct-source": "src/Yhc-Core-Invariant.html#checkInvariant",
        "fct-type": "function",
        "title": "checkInvariant"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "checkInvariant",
        "normalized": "Invariant-\u003eCore-\u003eBool",
        "package": "yhccore",
        "partial": "Invariant",
        "signature": "Invariant-\u003eCore-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:checkInvariants",
      "description": {
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "[Invariant] -\u003e Core -\u003e Bool",
        "fct-source": "src/Yhc-Core-Invariant.html#checkInvariants",
        "fct-type": "function",
        "title": "checkInvariants"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "checkInvariants",
        "normalized": "[Invariant]-\u003eCore-\u003eBool",
        "package": "yhccore",
        "partial": "Invariants",
        "signature": "[Invariant]-\u003eCore-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:ensureInvariant",
      "description": {
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "Invariant -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Invariant.html#ensureInvariant",
        "fct-type": "function",
        "title": "ensureInvariant"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "ensureInvariant",
        "normalized": "Invariant-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Invariant",
        "signature": "Invariant-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Invariant.html#v:ensureInvariants",
      "description": {
        "fct-module": "Yhc.Core.Invariant",
        "fct-package": "yhccore",
        "fct-signature": "[Invariant] -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Invariant.html#ensureInvariants",
        "fct-type": "function",
        "title": "ensureInvariants"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Invariant",
        "module": "Yhc.Core.Invariant",
        "name": "ensureInvariants",
        "normalized": "[Invariant]-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Invariants",
        "signature": "[Invariant]-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Overlay.html#",
      "description": {
        "fct-module": "Yhc.Core.Overlay",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Overlay.html",
        "fct-type": "module",
        "title": "Overlay"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Overlay",
        "module": "Yhc.Core.Overlay",
        "name": "Overlay",
        "normalized": "",
        "package": "yhccore",
        "partial": "Overlay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Overlay.html#v:coreOverlay",
      "description": {
        "fct-descr": "\u003cp\u003ecoreOverlay original overlay, returns original with the overlay substituted in\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Overlay",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Overlay.html#coreOverlay",
        "fct-type": "function",
        "title": "coreOverlay"
      },
      "index": {
        "description": "coreOverlay original overlay returns original with the overlay substituted in",
        "hierarchy": "Yhc Core Overlay",
        "module": "Yhc.Core.Overlay",
        "name": "coreOverlay",
        "normalized": "Core-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Overlay",
        "signature": "Core-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#",
      "description": {
        "fct-module": "Yhc.Core.Play",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Play.html",
        "fct-type": "module",
        "title": "Play"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Play",
        "module": "Yhc.Core.Play",
        "name": "Play",
        "normalized": "",
        "package": "yhccore",
        "partial": "Play",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#t:PlayCore",
      "description": {
        "fct-module": "Yhc.Core.Play",
        "fct-package": "yhccore",
        "fct-signature": "class",
        "fct-source": "src/Yhc-Core-Play.html#PlayCore",
        "fct-type": "class",
        "title": "PlayCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Play",
        "module": "Yhc.Core.Play",
        "name": "PlayCore",
        "normalized": "",
        "package": "yhccore",
        "partial": "Play Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:allCore",
      "description": {
        "fct-module": "Yhc.Core.Play",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e [CoreExpr]",
        "fct-source": "src/Yhc-Core-Play.html#allCore",
        "fct-type": "method",
        "title": "allCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Play",
        "module": "Yhc.Core.Play",
        "name": "allCore",
        "normalized": "a-\u003e[CoreExpr]",
        "package": "yhccore",
        "partial": "Core",
        "signature": "a-\u003e[CoreExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:allCoreVar",
      "description": {
        "fct-descr": "\u003cp\u003eAll the variables in a CoreExpr\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Play",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [String]",
        "fct-source": "src/Yhc-Core-Play.html#allCoreVar",
        "fct-type": "function",
        "title": "allCoreVar"
      },
      "index": {
        "description": "All the variables in CoreExpr",
        "hierarchy": "Yhc Core Play",
        "module": "Yhc.Core.Play",
        "name": "allCoreVar",
        "normalized": "CoreExpr-\u003e[String]",
        "package": "yhccore",
        "partial": "Core Var",
        "signature": "CoreExpr-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:getChildrenCore",
      "description": {
        "fct-module": "Yhc.Core.Play",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e [CoreExpr]",
        "fct-source": "src/Yhc-Core-Play.html#getChildrenCore",
        "fct-type": "method",
        "title": "getChildrenCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Play",
        "module": "Yhc.Core.Play",
        "name": "getChildrenCore",
        "normalized": "a-\u003e[CoreExpr]",
        "package": "yhccore",
        "partial": "Children Core",
        "signature": "a-\u003e[CoreExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:mapOverCore",
      "description": {
        "fct-module": "Yhc.Core.Play",
        "fct-package": "yhccore",
        "fct-signature": "(CoreExpr -\u003e CoreExpr) -\u003e a -\u003e a",
        "fct-source": "src/Yhc-Core-Play.html#mapOverCore",
        "fct-type": "method",
        "title": "mapOverCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Play",
        "module": "Yhc.Core.Play",
        "name": "mapOverCore",
        "normalized": "(CoreExpr-\u003eCoreExpr)-\u003ea-\u003ea",
        "package": "yhccore",
        "partial": "Over Core",
        "signature": "(CoreExpr-\u003eCoreExpr)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:mapUnderCore",
      "description": {
        "fct-module": "Yhc.Core.Play",
        "fct-package": "yhccore",
        "fct-signature": "(CoreExpr -\u003e CoreExpr) -\u003e a -\u003e a",
        "fct-source": "src/Yhc-Core-Play.html#mapUnderCore",
        "fct-type": "method",
        "title": "mapUnderCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Play",
        "module": "Yhc.Core.Play",
        "name": "mapUnderCore",
        "normalized": "(CoreExpr-\u003eCoreExpr)-\u003ea-\u003ea",
        "package": "yhccore",
        "partial": "Under Core",
        "signature": "(CoreExpr-\u003eCoreExpr)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:mapUnderCoreM",
      "description": {
        "fct-module": "Yhc.Core.Play",
        "fct-package": "yhccore",
        "fct-signature": "(CoreExpr -\u003e m CoreExpr) -\u003e a -\u003e m a",
        "fct-source": "src/Yhc-Core-Play.html#mapUnderCoreM",
        "fct-type": "method",
        "title": "mapUnderCoreM"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Play",
        "module": "Yhc.Core.Play",
        "name": "mapUnderCoreM",
        "normalized": "(CoreExpr-\u003ea CoreExpr)-\u003eb-\u003ea b",
        "package": "yhccore",
        "partial": "Under Core",
        "signature": "(CoreExpr-\u003em CoreExpr)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Play.html#v:setChildrenCore",
      "description": {
        "fct-module": "Yhc.Core.Play",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e [CoreExpr] -\u003e a",
        "fct-source": "src/Yhc-Core-Play.html#setChildrenCore",
        "fct-type": "method",
        "title": "setChildrenCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Play",
        "module": "Yhc.Core.Play",
        "name": "setChildrenCore",
        "normalized": "a-\u003e[CoreExpr]-\u003ea",
        "package": "yhccore",
        "partial": "Children Core",
        "signature": "a-\u003e[CoreExpr]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#t:Prim",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Prim.html#Prim",
        "fct-type": "data",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#t:PrimOp",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "data",
        "title": "PrimOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimOp",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#t:PrimType",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "data",
        "title": "PrimType"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimType",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:Prim",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "Prim",
        "fct-source": "src/Yhc-Core-Prim.html#Prim",
        "fct-type": "function",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimAbs",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimAbs",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimAbs"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimAbs",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Abs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimAdd",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimAdd",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimAdd",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimBool",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimBool",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimBool",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimCast",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimCast",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimCast"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimCast",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimChar",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimChar",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimChar",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimDiv",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimDiv",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimDiv",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimDouble",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimDouble",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimDouble",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimEq",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimEq",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimEq",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimFloat",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimFloat",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimFloat",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimGe",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimGe",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimGe"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimGe",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Ge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimGt",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimGt",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimGt"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimGt",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Gt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimHaskell",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimHaskell",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimHaskell"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimHaskell",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Haskell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimIO",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimIO",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimIO",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimInt",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimInt",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimInt",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimInteger",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimInteger",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimInteger",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimLe",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimLe",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimLe"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimLe",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Le",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimLt",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimLt",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimLt"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimLt",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Lt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimMul",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimMul",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimMul"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimMul",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimNe",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimNe",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimNe"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimNe",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Ne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimNeg",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimNeg",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimNeg",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimOrd",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimOrd",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOrd"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimOrd",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimOther",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimOther String",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimOther",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimQuot",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimQuot",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimQuot"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimQuot",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Quot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimQuotRem",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimQuotRem",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimQuotRem"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimQuotRem",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Quot Rem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimRem",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimRem",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimRem"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimRem",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Rem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimSeq",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimSeq",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimSeq"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimSeq",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimSignum",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimSignum",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimSignum"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimSignum",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Signum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimString",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimString",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimString"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimString",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimSub",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimSub",
        "fct-source": "src/Yhc-Core-Prim.html#PrimOp",
        "fct-type": "function",
        "title": "PrimSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimSub",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimTypeAny",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimTypeAny",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimTypeAny"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimTypeAny",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Type Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimTypeHaskell",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimTypeHaskell String",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimTypeHaskell"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimTypeHaskell",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Type Haskell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:PrimTypeUnknown",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimTypeUnknown",
        "fct-source": "src/Yhc-Core-Prim.html#PrimType",
        "fct-type": "function",
        "title": "PrimTypeUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "PrimTypeUnknown",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Type Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:coreBytecodePrims",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "[Prim]",
        "fct-source": "src/Yhc-Core-Prim.html#coreBytecodePrims",
        "fct-type": "function",
        "title": "coreBytecodePrims"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "coreBytecodePrims",
        "normalized": "[Prim]",
        "package": "yhccore",
        "partial": "Bytecode Prims",
        "signature": "[Prim]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:coreHaskellPrims",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "[Prim]",
        "fct-source": "src/Yhc-Core-Prim.html#coreHaskellPrims",
        "fct-type": "function",
        "title": "coreHaskellPrims"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "coreHaskellPrims",
        "normalized": "[Prim]",
        "package": "yhccore",
        "partial": "Haskell Prims",
        "signature": "[Prim]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:coreHaskellTypes",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/Yhc-Core-Prim.html#coreHaskellTypes",
        "fct-type": "function",
        "title": "coreHaskellTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "coreHaskellTypes",
        "normalized": "[(String,String)]",
        "package": "yhccore",
        "partial": "Haskell Types",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:corePrim",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e Prim",
        "fct-source": "src/Yhc-Core-Prim.html#corePrim",
        "fct-type": "function",
        "title": "corePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "corePrim",
        "normalized": "String-\u003ePrim",
        "package": "yhccore",
        "partial": "Prim",
        "signature": "String-\u003ePrim"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:corePrimMaybe",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e Maybe Prim",
        "fct-source": "src/Yhc-Core-Prim.html#corePrimMaybe",
        "fct-type": "function",
        "title": "corePrimMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "corePrimMaybe",
        "normalized": "String-\u003eMaybe Prim",
        "package": "yhccore",
        "partial": "Prim Maybe",
        "signature": "String-\u003eMaybe Prim"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:corePrims",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "[Prim]",
        "fct-source": "src/Yhc-Core-Prim.html#corePrims",
        "fct-type": "function",
        "title": "corePrims"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "corePrims",
        "normalized": "[Prim]",
        "package": "yhccore",
        "partial": "Prims",
        "signature": "[Prim]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primArity",
      "description": {
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "Prim -\u003e Int",
        "fct-source": "src/Yhc-Core-Prim.html#primArity",
        "fct-type": "function",
        "title": "primArity"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "primArity",
        "normalized": "Prim-\u003eInt",
        "package": "yhccore",
        "partial": "Arity",
        "signature": "Prim-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primEval",
      "description": {
        "fct-descr": "\u003cp\u003eTrue is strict in argument n, [] is unknown\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "[CoreExpr] -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Prim.html#Prim",
        "fct-type": "function",
        "title": "primEval"
      },
      "index": {
        "description": "True is strict in argument is unknown",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "primEval",
        "normalized": "[CoreExpr]-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Eval",
        "signature": "[CoreExpr]-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "String",
        "fct-source": "src/Yhc-Core-Prim.html#Prim",
        "fct-type": "function",
        "title": "primName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "primName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primOp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "PrimOp",
        "fct-source": "src/Yhc-Core-Prim.html#Prim",
        "fct-type": "function",
        "title": "primOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "primOp",
        "normalized": "",
        "package": "yhccore",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primStrict",
      "description": {
        "fct-descr": "\u003cp\u003ea function signature\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "[Bool]",
        "fct-source": "src/Yhc-Core-Prim.html#Prim",
        "fct-type": "function",
        "title": "primStrict"
      },
      "index": {
        "description": "function signature",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "primStrict",
        "normalized": "[Bool]",
        "package": "yhccore",
        "partial": "Strict",
        "signature": "[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Prim.html#v:primType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Prim",
        "fct-package": "yhccore",
        "fct-signature": "[PrimType]",
        "fct-source": "src/Yhc-Core-Prim.html#Prim",
        "fct-type": "function",
        "title": "primType"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Prim",
        "module": "Yhc.Core.Prim",
        "name": "primType",
        "normalized": "[PrimType]",
        "package": "yhccore",
        "partial": "Type",
        "signature": "[PrimType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Reachable.html#",
      "description": {
        "fct-module": "Yhc.Core.Reachable",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Reachable.html",
        "fct-type": "module",
        "title": "Reachable"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Reachable",
        "module": "Yhc.Core.Reachable",
        "name": "Reachable",
        "normalized": "",
        "package": "yhccore",
        "partial": "Reachable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Reachable.html#v:coreReachable",
      "description": {
        "fct-module": "Yhc.Core.Reachable",
        "fct-package": "yhccore",
        "fct-signature": "[CoreFuncName] -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Reachable.html#coreReachable",
        "fct-type": "function",
        "title": "coreReachable"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Reachable",
        "module": "Yhc.Core.Reachable",
        "name": "coreReachable",
        "normalized": "[CoreFuncName]-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Reachable",
        "signature": "[CoreFuncName]-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Reachable.html#v:coreReachableMap",
      "description": {
        "fct-module": "Yhc.Core.Reachable",
        "fct-package": "yhccore",
        "fct-signature": "[CoreFuncName] -\u003e CoreFuncMap -\u003e CoreFuncMap",
        "fct-source": "src/Yhc-Core-Reachable.html#coreReachableMap",
        "fct-type": "function",
        "title": "coreReachableMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Reachable",
        "module": "Yhc.Core.Reachable",
        "name": "coreReachableMap",
        "normalized": "[CoreFuncName]-\u003eCoreFuncMap-\u003eCoreFuncMap",
        "package": "yhccore",
        "partial": "Reachable Map",
        "signature": "[CoreFuncName]-\u003eCoreFuncMap-\u003eCoreFuncMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-RecursiveLet.html#",
      "description": {
        "fct-module": "Yhc.Core.RecursiveLet",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-RecursiveLet.html",
        "fct-type": "module",
        "title": "RecursiveLet"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core RecursiveLet",
        "module": "Yhc.Core.RecursiveLet",
        "name": "RecursiveLet",
        "normalized": "",
        "package": "yhccore",
        "partial": "Recursive Let",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-RecursiveLet.html#v:isCoreLetRec",
      "description": {
        "fct-descr": "\u003cp\u003eIs a CoreLet recursive, i.e. do any of the introduced variables (LHS of bind)\n   also show up in the RHS of bind.\n\u003c/p\u003e\u003cp\u003eReturns False if the expression is not a CoreLet.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.RecursiveLet",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-RecursiveLet.html#isCoreLetRec",
        "fct-type": "function",
        "title": "isCoreLetRec"
      },
      "index": {
        "description": "Is CoreLet recursive i.e do any of the introduced variables LHS of bind also show up in the RHS of bind Returns False if the expression is not CoreLet",
        "hierarchy": "Yhc Core RecursiveLet",
        "module": "Yhc.Core.RecursiveLet",
        "name": "isCoreLetRec",
        "normalized": "CoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Let Rec",
        "signature": "CoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-RecursiveLet.html#v:reduceRecursiveLet",
      "description": {
        "fct-descr": "\u003cp\u003eReduce the number of recursive lets, but splitting lets\n   which have recursive bindings, but can be linearised\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.RecursiveLet",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e Core",
        "fct-source": "src/Yhc-Core-RecursiveLet.html#reduceRecursiveLet",
        "fct-type": "function",
        "title": "reduceRecursiveLet"
      },
      "index": {
        "description": "Reduce the number of recursive lets but splitting lets which have recursive bindings but can be linearised",
        "hierarchy": "Yhc Core RecursiveLet",
        "module": "Yhc.Core.RecursiveLet",
        "name": "reduceRecursiveLet",
        "normalized": "Core-\u003eCore",
        "package": "yhccore",
        "partial": "Recursive Let",
        "signature": "Core-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-RecursiveLet.html#v:removeRecursiveLet",
      "description": {
        "fct-descr": "\u003cp\u003eRemove recursive lets\n\u003c/p\u003e\u003cp\u003eLet's are rearranged so a variable is not used in the defining block\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.RecursiveLet",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e Core",
        "fct-source": "src/Yhc-Core-RecursiveLet.html#removeRecursiveLet",
        "fct-type": "function",
        "title": "removeRecursiveLet"
      },
      "index": {
        "description": "Remove recursive lets Let are rearranged so variable is not used in the defining block",
        "hierarchy": "Yhc Core RecursiveLet",
        "module": "Yhc.Core.RecursiveLet",
        "name": "removeRecursiveLet",
        "normalized": "Core-\u003eCore",
        "package": "yhccore",
        "partial": "Recursive Let",
        "signature": "Core-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Saturated.html#",
      "description": {
        "fct-module": "Yhc.Core.Saturated",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Saturated.html",
        "fct-type": "module",
        "title": "Saturated"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Saturated",
        "module": "Yhc.Core.Saturated",
        "name": "Saturated",
        "normalized": "",
        "package": "yhccore",
        "partial": "Saturated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Saturated.html#v:coreSaturated",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an expr (normally a \u003ccode\u003e\u003ca\u003eCoreApp\u003c/a\u003e\u003c/code\u003e)\n   say if it is saturated or not.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Saturated",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Saturated.html#coreSaturated",
        "fct-type": "function",
        "title": "coreSaturated"
      },
      "index": {
        "description": "Given an expr normally CoreApp say if it is saturated or not",
        "hierarchy": "Yhc Core Saturated",
        "module": "Yhc.Core.Saturated",
        "name": "coreSaturated",
        "normalized": "Core-\u003eCoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Saturated",
        "signature": "Core-\u003eCoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Serialise.html#",
      "description": {
        "fct-module": "Yhc.Core.Serialise",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Serialise.html",
        "fct-type": "module",
        "title": "Serialise"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Serialise",
        "module": "Yhc.Core.Serialise",
        "name": "Serialise",
        "normalized": "",
        "package": "yhccore",
        "partial": "Serialise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Serialise.html#v:loadCore",
      "description": {
        "fct-module": "Yhc.Core.Serialise",
        "fct-package": "yhccore",
        "fct-signature": "FilePath -\u003e IO Core",
        "fct-source": "src/Yhc-Core-Serialise.html#loadCore",
        "fct-type": "function",
        "title": "loadCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Serialise",
        "module": "Yhc.Core.Serialise",
        "name": "loadCore",
        "normalized": "FilePath-\u003eIO Core",
        "package": "yhccore",
        "partial": "Core",
        "signature": "FilePath-\u003eIO Core"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Serialise.html#v:saveCore",
      "description": {
        "fct-module": "Yhc.Core.Serialise",
        "fct-package": "yhccore",
        "fct-signature": "FilePath -\u003e Core -\u003e IO ()",
        "fct-source": "src/Yhc-Core-Serialise.html#saveCore",
        "fct-type": "function",
        "title": "saveCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Serialise",
        "module": "Yhc.Core.Serialise",
        "name": "saveCore",
        "normalized": "FilePath-\u003eCore-\u003eIO()",
        "package": "yhccore",
        "partial": "Core",
        "signature": "FilePath-\u003eCore-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Show.html#",
      "description": {
        "fct-module": "Yhc.Core.Show",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Show.html",
        "fct-type": "module",
        "title": "Show"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Show",
        "module": "Yhc.Core.Show",
        "name": "Show",
        "normalized": "",
        "package": "yhccore",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Show.html#v:isCoreOperator",
      "description": {
        "fct-module": "Yhc.Core.Show",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Yhc-Core-Show.html#isCoreOperator",
        "fct-type": "function",
        "title": "isCoreOperator"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Show",
        "module": "Yhc.Core.Show",
        "name": "isCoreOperator",
        "normalized": "String-\u003eBool",
        "package": "yhccore",
        "partial": "Core Operator",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Show.html#v:showCoreExprGroup",
      "description": {
        "fct-descr": "\u003cp\u003eShow a CoreExpr, but with brackets if needed\n   so the result is a group. Does not bracket\n   simple variables or constants etc\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Show",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e String",
        "fct-source": "src/Yhc-Core-Show.html#showCoreExprGroup",
        "fct-type": "function",
        "title": "showCoreExprGroup"
      },
      "index": {
        "description": "Show CoreExpr but with brackets if needed so the result is group Does not bracket simple variables or constants etc",
        "hierarchy": "Yhc Core Show",
        "module": "Yhc.Core.Show",
        "name": "showCoreExprGroup",
        "normalized": "CoreExpr-\u003eString",
        "package": "yhccore",
        "partial": "Core Expr Group",
        "signature": "CoreExpr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-ShowRaw.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShowRaw is intended for debugging, to print a rather complete\n    syntax tree. The basic rule is that every constructor MUST appear\n    visibly in the output. For example, \u003ccode\u003eshow (CoreApp x []) == show x\u003c/code\u003e,\n    but \u003ccode\u003e(showRaw x == showRaw y) ==\u003e (x == y)\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.ShowRaw",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-ShowRaw.html",
        "fct-type": "module",
        "title": "ShowRaw"
      },
      "index": {
        "description": "ShowRaw is intended for debugging to print rather complete syntax tree The basic rule is that every constructor MUST appear visibly in the output For example show CoreApp show but showRaw showRaw",
        "hierarchy": "Yhc Core ShowRaw",
        "module": "Yhc.Core.ShowRaw",
        "name": "ShowRaw",
        "normalized": "",
        "package": "yhccore",
        "partial": "Show Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-ShowRaw.html#t:ShowRaw",
      "description": {
        "fct-module": "Yhc.Core.ShowRaw",
        "fct-package": "yhccore",
        "fct-signature": "class",
        "fct-source": "src/Yhc-Core-ShowRaw.html#ShowRaw",
        "fct-type": "class",
        "title": "ShowRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core ShowRaw",
        "module": "Yhc.Core.ShowRaw",
        "name": "ShowRaw",
        "normalized": "",
        "package": "yhccore",
        "partial": "Show Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-ShowRaw.html#v:showRaw",
      "description": {
        "fct-module": "Yhc.Core.ShowRaw",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Yhc-Core-ShowRaw.html#showRaw",
        "fct-type": "method",
        "title": "showRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core ShowRaw",
        "module": "Yhc.Core.ShowRaw",
        "name": "showRaw",
        "normalized": "a-\u003eString",
        "package": "yhccore",
        "partial": "Raw",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#",
      "description": {
        "fct-module": "Yhc.Core.Simplify",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Simplify.html",
        "fct-type": "module",
        "title": "Simplify"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Simplify",
        "module": "Yhc.Core.Simplify",
        "name": "Simplify",
        "normalized": "",
        "package": "yhccore",
        "partial": "Simplify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplify",
      "description": {
        "fct-module": "Yhc.Core.Simplify",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Yhc-Core-Simplify.html#coreSimplify",
        "fct-type": "function",
        "title": "coreSimplify"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Simplify",
        "module": "Yhc.Core.Simplify",
        "name": "coreSimplify",
        "normalized": "a-\u003ea",
        "package": "yhccore",
        "partial": "Simplify",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyCaseCase",
      "description": {
        "fct-descr": "\u003cp\u003eApply the Case (Case ..) rule\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Simplify",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Simplify.html#coreSimplifyCaseCase",
        "fct-type": "function",
        "title": "coreSimplifyCaseCase"
      },
      "index": {
        "description": "Apply the Case Case rule",
        "hierarchy": "Yhc Core Simplify",
        "module": "Yhc.Core.Simplify",
        "name": "coreSimplifyCaseCase",
        "normalized": "CoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Simplify Case Case",
        "signature": "CoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyCaseCon",
      "description": {
        "fct-descr": "\u003cp\u003eApply the Case (CoreCon ..) rule\n   This rule has a serious sharing bug (doh!)\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Simplify",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Simplify.html#coreSimplifyCaseCon",
        "fct-type": "function",
        "title": "coreSimplifyCaseCon"
      },
      "index": {
        "description": "Apply the Case CoreCon rule This rule has serious sharing bug doh",
        "hierarchy": "Yhc Core Simplify",
        "module": "Yhc.Core.Simplify",
        "name": "coreSimplifyCaseCon",
        "normalized": "CoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Simplify Case Con",
        "signature": "CoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyCaseLet",
      "description": {
        "fct-descr": "\u003cp\u003eApply the Case (Let ..) rule\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Simplify",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Simplify.html#coreSimplifyCaseLet",
        "fct-type": "function",
        "title": "coreSimplifyCaseLet"
      },
      "index": {
        "description": "Apply the Case Let rule",
        "hierarchy": "Yhc Core Simplify",
        "module": "Yhc.Core.Simplify",
        "name": "coreSimplifyCaseLet",
        "normalized": "CoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Simplify Case Let",
        "signature": "CoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyExpr",
      "description": {
        "fct-descr": "\u003cp\u003eSimplify a single Core Expr.\n\u003c/p\u003e\u003cp\u003ePerforms NO inlining, guaranteed to run in same or better\n   space and time. May increase code size.\n\u003c/p\u003e\u003cp\u003eBugs lurk here, with inadvertant free variable capture. Move to\n   a proper free variable monad and a guarantee of uniqueness\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Simplify",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Simplify.html#coreSimplifyExpr",
        "fct-type": "function",
        "title": "coreSimplifyExpr"
      },
      "index": {
        "description": "Simplify single Core Expr Performs NO inlining guaranteed to run in same or better space and time May increase code size Bugs lurk here with inadvertant free variable capture Move to proper free variable monad and guarantee of uniqueness",
        "hierarchy": "Yhc Core Simplify",
        "module": "Yhc.Core.Simplify",
        "name": "coreSimplifyExpr",
        "normalized": "CoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Simplify Expr",
        "signature": "CoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyExprUnique",
      "description": {
        "fct-descr": "\u003cp\u003ePrecondition:\n    All variables must be unique\n\u003c/p\u003e\u003cp\u003eThe following patterns must not occur:\n\u003c/p\u003e\u003cp\u003eCoreApp _ []\n    CoreLet [] _\n    CoreLam [] _\n    CorePos _ _\n\u003c/p\u003e\u003cp\u003eCoreCase on _ =\u003e on \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e {CoreCon _, CoreApp (CoreCon _) _, CoreLet _ _, CoreCase _ _}\n    CoreApp x _ =\u003e x \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e {CoreApp _ _, CoreLet _ _, CoreCase _ _, CoreLam _ _}\n    CoreLet bind _ =\u003e all (map snd bind) \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e {CoreLet _ _, CoreVar _}\n\u003c/p\u003e\u003cp\u003eThe following should be applied if possible (and not breaking sharing):\n\u003c/p\u003e\u003cp\u003eCoreLet bind x =\u003e replaceFreeVars bind x\n    CoreLet (CoreCase x alts) =\u003e CoreCase x (CoreLet inside each alt)\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Simplify",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e m CoreExpr",
        "fct-source": "src/Yhc-Core-Simplify.html#coreSimplifyExprUnique",
        "fct-type": "function",
        "title": "coreSimplifyExprUnique"
      },
      "index": {
        "description": "Precondition All variables must be unique The following patterns must not occur CoreApp CoreLet CoreLam CorePos CoreCase on on notElem CoreCon CoreApp CoreCon CoreLet CoreCase CoreApp notElem CoreApp CoreLet CoreCase CoreLam CoreLet bind all map snd bind notElem CoreLet CoreVar The following should be applied if possible and not breaking sharing CoreLet bind replaceFreeVars bind CoreLet CoreCase alts CoreCase CoreLet inside each alt",
        "hierarchy": "Yhc Core Simplify",
        "module": "Yhc.Core.Simplify",
        "name": "coreSimplifyExprUnique",
        "normalized": "CoreExpr-\u003ea CoreExpr",
        "package": "yhccore",
        "partial": "Simplify Expr Unique",
        "signature": "CoreExpr-\u003em CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Simplify.html#v:coreSimplifyExprUniqueExt",
      "description": {
        "fct-descr": "\u003cp\u003eSismplify in an extensible manner.\n\u003c/p\u003e\u003cpre\u003emyfunc retransform\u003c/pre\u003e\u003cp\u003eYou should invoke retransform on all constructors you create.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Simplify",
        "fct-package": "yhccore",
        "fct-signature": "((CoreExpr -\u003e m CoreExpr) -\u003e CoreExpr -\u003e m CoreExpr) -\u003e CoreExpr -\u003e m CoreExpr",
        "fct-source": "src/Yhc-Core-Simplify.html#coreSimplifyExprUniqueExt",
        "fct-type": "function",
        "title": "coreSimplifyExprUniqueExt"
      },
      "index": {
        "description": "Sismplify in an extensible manner myfunc retransform You should invoke retransform on all constructors you create",
        "hierarchy": "Yhc Core Simplify",
        "module": "Yhc.Core.Simplify",
        "name": "coreSimplifyExprUniqueExt",
        "normalized": "((CoreExpr-\u003ea CoreExpr)-\u003eCoreExpr-\u003ea CoreExpr)-\u003eCoreExpr-\u003ea CoreExpr",
        "package": "yhccore",
        "partial": "Simplify Expr Unique Ext",
        "signature": "((CoreExpr-\u003em CoreExpr)-\u003eCoreExpr-\u003em CoreExpr)-\u003eCoreExpr-\u003em CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Strictness.html#",
      "description": {
        "fct-module": "Yhc.Core.Strictness",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Strictness.html",
        "fct-type": "module",
        "title": "Strictness"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Strictness",
        "module": "Yhc.Core.Strictness",
        "name": "Strictness",
        "normalized": "",
        "package": "yhccore",
        "partial": "Strictness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Strictness.html#v:coreStrictness",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function, return a list of arguments.\n   True is strict in that argument, False is not.\n   [] is unknown strictness\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Strictness",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreFuncName -\u003e [Bool]",
        "fct-source": "src/Yhc-Core-Strictness.html#coreStrictness",
        "fct-type": "function",
        "title": "coreStrictness"
      },
      "index": {
        "description": "Given function return list of arguments True is strict in that argument False is not is unknown strictness",
        "hierarchy": "Yhc Core Strictness",
        "module": "Yhc.Core.Strictness",
        "name": "coreStrictness",
        "normalized": "Core-\u003eCoreFuncName-\u003e[Bool]",
        "package": "yhccore",
        "partial": "Strictness",
        "signature": "Core-\u003eCoreFuncName-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Type.html",
        "fct-type": "module",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "Type",
        "normalized": "",
        "package": "yhccore",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:Core",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Type.html#Core",
        "fct-type": "data",
        "title": "Core"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "Core",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreCtor",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Type.html#CoreCtor",
        "fct-type": "data",
        "title": "CoreCtor"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreCtor",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Ctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreCtorName",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "type",
        "fct-source": "src/Yhc-Core-Type.html#CoreCtorName",
        "fct-type": "type",
        "title": "CoreCtorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreCtorName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Ctor Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreData",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Type.html#CoreData",
        "fct-type": "data",
        "title": "CoreData"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreData",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreDataName",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "type",
        "fct-source": "src/Yhc-Core-Type.html#CoreDataName",
        "fct-type": "type",
        "title": "CoreDataName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreDataName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Data Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreExpr",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "data",
        "title": "CoreExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreExpr",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreFieldName",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "type",
        "fct-source": "src/Yhc-Core-Type.html#CoreFieldName",
        "fct-type": "type",
        "title": "CoreFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreFieldName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreFunc",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "data",
        "title": "CoreFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreFunc",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreFuncMap",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "type",
        "fct-source": "src/Yhc-Core-Type.html#CoreFuncMap",
        "fct-type": "type",
        "title": "CoreFuncMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreFuncMap",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Func Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreFuncName",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "type",
        "fct-source": "src/Yhc-Core-Type.html#CoreFuncName",
        "fct-type": "type",
        "title": "CoreFuncName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreFuncName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Func Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreLit",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Type.html#CoreLit",
        "fct-type": "data",
        "title": "CoreLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreLit",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CorePat",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "data",
        "fct-source": "src/Yhc-Core-Type.html#CorePat",
        "fct-type": "data",
        "title": "CorePat"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CorePat",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Pat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#t:CoreVarName",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "type",
        "fct-source": "src/Yhc-Core-Type.html#CoreVarName",
        "fct-type": "type",
        "title": "CoreVarName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreVarName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Var Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:Core",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core",
        "fct-source": "src/Yhc-Core-Type.html#Core",
        "fct-type": "function",
        "title": "Core"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "Core",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreApp",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreApp CoreExpr [CoreExpr]",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "function",
        "title": "CoreApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreApp",
        "normalized": "CoreApp CoreExpr[CoreExpr]",
        "package": "yhccore",
        "partial": "Core App",
        "signature": "CoreApp CoreExpr[CoreExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreCase",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreCase CoreExpr [(CorePat, CoreExpr)]",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "function",
        "title": "CoreCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreCase",
        "normalized": "CoreCase CoreExpr[(CorePat,CoreExpr)]",
        "package": "yhccore",
        "partial": "Core Case",
        "signature": "CoreCase CoreExpr[(CorePat,CoreExpr)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreChr",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreChr Char",
        "fct-source": "src/Yhc-Core-Type.html#CoreLit",
        "fct-type": "function",
        "title": "CoreChr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreChr",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Chr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreCon",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreCon CoreCtorName",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "function",
        "title": "CoreCon"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreCon",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreCtor",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreCtor",
        "fct-source": "src/Yhc-Core-Type.html#CoreCtor",
        "fct-type": "function",
        "title": "CoreCtor"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreCtor",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Ctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreData",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreData",
        "fct-source": "src/Yhc-Core-Type.html#CoreData",
        "fct-type": "function",
        "title": "CoreData"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreData",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreDouble",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreDouble Double",
        "fct-source": "src/Yhc-Core-Type.html#CoreLit",
        "fct-type": "function",
        "title": "CoreDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreDouble",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreFloat",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFloat Float",
        "fct-source": "src/Yhc-Core-Type.html#CoreLit",
        "fct-type": "function",
        "title": "CoreFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreFloat",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreFun",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFun CoreFuncName",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "function",
        "title": "CoreFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreFun",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreFunc",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "CoreFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreFunc",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreInt",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreInt Int",
        "fct-source": "src/Yhc-Core-Type.html#CoreLit",
        "fct-type": "function",
        "title": "CoreInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreInt",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreInteger",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreInteger Integer",
        "fct-source": "src/Yhc-Core-Type.html#CoreLit",
        "fct-type": "function",
        "title": "CoreInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreInteger",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreLam",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreLam [CoreVarName] CoreExpr",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "function",
        "title": "CoreLam"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreLam",
        "normalized": "CoreLam[CoreVarName]CoreExpr",
        "package": "yhccore",
        "partial": "Core Lam",
        "signature": "CoreLam[CoreVarName]CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreLet",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreLet [(CoreVarName, CoreExpr)] CoreExpr",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "function",
        "title": "CoreLet"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreLet",
        "normalized": "CoreLet[(CoreVarName,CoreExpr)]CoreExpr",
        "package": "yhccore",
        "partial": "Core Let",
        "signature": "CoreLet[(CoreVarName,CoreExpr)]CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreLit",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreLit CoreLit",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "function",
        "title": "CoreLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreLit",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CorePos",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CorePos String CoreExpr",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "function",
        "title": "CorePos"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CorePos",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CorePrim",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CorePrim",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "CorePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CorePrim",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreStr",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreStr String",
        "fct-source": "src/Yhc-Core-Type.html#CoreLit",
        "fct-type": "function",
        "title": "CoreStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreStr",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:CoreVar",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreVar CoreVarName",
        "fct-source": "src/Yhc-Core-Type.html#CoreExpr",
        "fct-type": "function",
        "title": "CoreVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "CoreVar",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:PatCon",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "PatCon",
        "fct-source": "src/Yhc-Core-Type.html#CorePat",
        "fct-type": "function",
        "title": "PatCon"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "PatCon",
        "normalized": "",
        "package": "yhccore",
        "partial": "Pat Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:PatDefault",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "PatDefault",
        "fct-source": "src/Yhc-Core-Type.html#CorePat",
        "fct-type": "function",
        "title": "PatDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "PatDefault",
        "normalized": "",
        "package": "yhccore",
        "partial": "Pat Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:PatLit",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "PatLit",
        "fct-source": "src/Yhc-Core-Type.html#CorePat",
        "fct-type": "function",
        "title": "PatLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "PatLit",
        "normalized": "",
        "package": "yhccore",
        "partial": "Pat Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyBodyCore",
      "description": {
        "fct-descr": "\u003cp\u003eTake a function that operates on bodies, and apply it to a program\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "(CoreExpr -\u003e CoreExpr) -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Type.html#applyBodyCore",
        "fct-type": "function",
        "title": "applyBodyCore"
      },
      "index": {
        "description": "Take function that operates on bodies and apply it to program",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "applyBodyCore",
        "normalized": "(CoreExpr-\u003eCoreExpr)-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Body Core",
        "signature": "(CoreExpr-\u003eCoreExpr)-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyBodyCoreM",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "(CoreExpr -\u003e m CoreExpr) -\u003e Core -\u003e m Core",
        "fct-source": "src/Yhc-Core-Type.html#applyBodyCoreM",
        "fct-type": "function",
        "title": "applyBodyCoreM"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "applyBodyCoreM",
        "normalized": "(CoreExpr-\u003ea CoreExpr)-\u003eCore-\u003ea Core",
        "package": "yhccore",
        "partial": "Body Core",
        "signature": "(CoreExpr-\u003em CoreExpr)-\u003eCore-\u003em Core"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyBodyFunc",
      "description": {
        "fct-descr": "\u003cp\u003eTake a function that operates on bodies, and apply it to a function\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "(CoreExpr -\u003e CoreExpr) -\u003e CoreFunc -\u003e CoreFunc",
        "fct-source": "src/Yhc-Core-Type.html#applyBodyFunc",
        "fct-type": "function",
        "title": "applyBodyFunc"
      },
      "index": {
        "description": "Take function that operates on bodies and apply it to function",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "applyBodyFunc",
        "normalized": "(CoreExpr-\u003eCoreExpr)-\u003eCoreFunc-\u003eCoreFunc",
        "package": "yhccore",
        "partial": "Body Func",
        "signature": "(CoreExpr-\u003eCoreExpr)-\u003eCoreFunc-\u003eCoreFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyCtorCore",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "(CoreCtor -\u003e CoreCtor) -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Type.html#applyCtorCore",
        "fct-type": "function",
        "title": "applyCtorCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "applyCtorCore",
        "normalized": "(CoreCtor-\u003eCoreCtor)-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Ctor Core",
        "signature": "(CoreCtor-\u003eCoreCtor)-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyCtorData",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "(CoreCtor -\u003e CoreCtor) -\u003e CoreData -\u003e CoreData",
        "fct-source": "src/Yhc-Core-Type.html#applyCtorData",
        "fct-type": "function",
        "title": "applyCtorData"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "applyCtorData",
        "normalized": "(CoreCtor-\u003eCoreCtor)-\u003eCoreData-\u003eCoreData",
        "package": "yhccore",
        "partial": "Ctor Data",
        "signature": "(CoreCtor-\u003eCoreCtor)-\u003eCoreData-\u003eCoreData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyDataCore",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "(CoreData -\u003e CoreData) -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Type.html#applyDataCore",
        "fct-type": "function",
        "title": "applyDataCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "applyDataCore",
        "normalized": "(CoreData-\u003eCoreData)-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Data Core",
        "signature": "(CoreData-\u003eCoreData)-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyFuncCore",
      "description": {
        "fct-descr": "\u003cp\u003eTake a function that operates on functions, and apply it to a program\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "(CoreFunc -\u003e CoreFunc) -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-Type.html#applyFuncCore",
        "fct-type": "function",
        "title": "applyFuncCore"
      },
      "index": {
        "description": "Take function that operates on functions and apply it to program",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "applyFuncCore",
        "normalized": "(CoreFunc-\u003eCoreFunc)-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Func Core",
        "signature": "(CoreFunc-\u003eCoreFunc)-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:applyFuncCoreM",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "(CoreFunc -\u003e m CoreFunc) -\u003e Core -\u003e m Core",
        "fct-source": "src/Yhc-Core-Type.html#applyFuncCoreM",
        "fct-type": "function",
        "title": "applyFuncCoreM"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "applyFuncCoreM",
        "normalized": "(CoreFunc-\u003ea CoreFunc)-\u003eCore-\u003ea Core",
        "package": "yhccore",
        "partial": "Func Core",
        "signature": "(CoreFunc-\u003em CoreFunc)-\u003eCore-\u003em Core"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreApp",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e [CoreExpr] -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Type.html#coreApp",
        "fct-type": "function",
        "title": "coreApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreApp",
        "normalized": "CoreExpr-\u003e[CoreExpr]-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "App",
        "signature": "CoreExpr-\u003e[CoreExpr]-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtor",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreCtorName -\u003e CoreCtor",
        "fct-source": "src/Yhc-Core-Type.html#coreCtor",
        "fct-type": "function",
        "title": "coreCtor"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreCtor",
        "normalized": "Core-\u003eCoreCtorName-\u003eCoreCtor",
        "package": "yhccore",
        "partial": "Ctor",
        "signature": "Core-\u003eCoreCtorName-\u003eCoreCtor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtorData",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreCtorName -\u003e CoreData",
        "fct-source": "src/Yhc-Core-Type.html#coreCtorData",
        "fct-type": "function",
        "title": "coreCtorData"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreCtorData",
        "normalized": "Core-\u003eCoreCtorName-\u003eCoreData",
        "package": "yhccore",
        "partial": "Ctor Data",
        "signature": "Core-\u003eCoreCtorName-\u003eCoreData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtorDataMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eCoreData\u003c/a\u003e\u003c/code\u003e from a ctor name\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreCtorName -\u003e Maybe CoreData",
        "fct-source": "src/Yhc-Core-Type.html#coreCtorDataMaybe",
        "fct-type": "function",
        "title": "coreCtorDataMaybe"
      },
      "index": {
        "description": "Get CoreData from ctor name",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreCtorDataMaybe",
        "normalized": "Core-\u003eCoreCtorName-\u003eMaybe CoreData",
        "package": "yhccore",
        "partial": "Ctor Data Maybe",
        "signature": "Core-\u003eCoreCtorName-\u003eMaybe CoreData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtorFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[(String, Maybe CoreFieldName)]",
        "fct-source": "src/Yhc-Core-Type.html#CoreCtor",
        "fct-type": "function",
        "title": "coreCtorFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreCtorFields",
        "normalized": "[(String,Maybe CoreFieldName)]",
        "package": "yhccore",
        "partial": "Ctor Fields",
        "signature": "[(String,Maybe CoreFieldName)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreCtorName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreCtorName",
        "fct-source": "src/Yhc-Core-Type.html#CoreCtor",
        "fct-type": "function",
        "title": "coreCtorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreCtorName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Ctor Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreData",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreDataName -\u003e CoreData",
        "fct-source": "src/Yhc-Core-Type.html#coreData",
        "fct-type": "function",
        "title": "coreData"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreData",
        "normalized": "Core-\u003eCoreDataName-\u003eCoreData",
        "package": "yhccore",
        "partial": "Data",
        "signature": "Core-\u003eCoreDataName-\u003eCoreData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataCtors",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[CoreCtor]",
        "fct-source": "src/Yhc-Core-Type.html#CoreData",
        "fct-type": "function",
        "title": "coreDataCtors"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreDataCtors",
        "normalized": "[CoreCtor]",
        "package": "yhccore",
        "partial": "Data Ctors",
        "signature": "[CoreCtor]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreDataName",
        "fct-source": "src/Yhc-Core-Type.html#CoreData",
        "fct-type": "function",
        "title": "coreDataName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreDataName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Data Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataTypeJoin",
      "description": {
        "fct-descr": "\u003cp\u003ecan pretty print much nicer, just something that works for now\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Yhc-Core-Type.html#coreDataTypeJoin",
        "fct-type": "function",
        "title": "coreDataTypeJoin"
      },
      "index": {
        "description": "can pretty print much nicer just something that works for now",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreDataTypeJoin",
        "normalized": "[String]-\u003eString",
        "package": "yhccore",
        "partial": "Data Type Join",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataTypeSplit",
      "description": {
        "fct-descr": "\u003cp\u003eSplit up a coreDataType into lexical elements\n   None of the result elements will be space, or blank\n   Some may be \u003ca\u003e(\u003c/a\u003e, \u003ca\u003e)\u003c/a\u003e or \u003ca\u003e!\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Yhc-Core-Type.html#coreDataTypeSplit",
        "fct-type": "function",
        "title": "coreDataTypeSplit"
      },
      "index": {
        "description": "Split up coreDataType into lexical elements None of the result elements will be space or blank Some may be or",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreDataTypeSplit",
        "normalized": "String-\u003e[String]",
        "package": "yhccore",
        "partial": "Data Type Split",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDataTypes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[String]",
        "fct-source": "src/Yhc-Core-Type.html#CoreData",
        "fct-type": "function",
        "title": "coreDataTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreDataTypes",
        "normalized": "[String]",
        "package": "yhccore",
        "partial": "Data Types",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreDatas",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[CoreData]",
        "fct-source": "src/Yhc-Core-Type.html#Core",
        "fct-type": "function",
        "title": "coreDatas"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreDatas",
        "normalized": "[CoreData]",
        "package": "yhccore",
        "partial": "Datas",
        "signature": "[CoreData]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFieldCtor",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreFieldName -\u003e CoreCtor",
        "fct-source": "src/Yhc-Core-Type.html#coreFieldCtor",
        "fct-type": "function",
        "title": "coreFieldCtor"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFieldCtor",
        "normalized": "Core-\u003eCoreFieldName-\u003eCoreCtor",
        "package": "yhccore",
        "partial": "Field Ctor",
        "signature": "Core-\u003eCoreFieldName-\u003eCoreCtor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFieldCtorMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eCoreCtor\u003c/a\u003e\u003c/code\u003e from a field name\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreFieldName -\u003e Maybe CoreCtor",
        "fct-source": "src/Yhc-Core-Type.html#coreFieldCtorMaybe",
        "fct-type": "function",
        "title": "coreFieldCtorMaybe"
      },
      "index": {
        "description": "Get CoreCtor from field name",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFieldCtorMaybe",
        "normalized": "Core-\u003eCoreFieldName-\u003eMaybe CoreCtor",
        "package": "yhccore",
        "partial": "Field Ctor Maybe",
        "signature": "Core-\u003eCoreFieldName-\u003eMaybe CoreCtor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFieldData",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreFieldName -\u003e CoreData",
        "fct-source": "src/Yhc-Core-Type.html#coreFieldData",
        "fct-type": "function",
        "title": "coreFieldData"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFieldData",
        "normalized": "Core-\u003eCoreFieldName-\u003eCoreData",
        "package": "yhccore",
        "partial": "Field Data",
        "signature": "Core-\u003eCoreFieldName-\u003eCoreData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFieldDataMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eCoreData\u003c/a\u003e\u003c/code\u003e from a field (the snd element of \u003ccode\u003e\u003ca\u003ecoreCtorFields\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreFieldName -\u003e Maybe CoreData",
        "fct-source": "src/Yhc-Core-Type.html#coreFieldDataMaybe",
        "fct-type": "function",
        "title": "coreFieldDataMaybe"
      },
      "index": {
        "description": "Get CoreData from field the snd element of coreCtorFields",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFieldDataMaybe",
        "normalized": "Core-\u003eCoreFieldName-\u003eMaybe CoreData",
        "package": "yhccore",
        "partial": "Field Data Maybe",
        "signature": "Core-\u003eCoreFieldName-\u003eMaybe CoreData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFunc",
      "description": {
        "fct-descr": "\u003cp\u003eGet a function from a Core type\n   crashes if the function does not exist\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreFuncName -\u003e CoreFunc",
        "fct-source": "src/Yhc-Core-Type.html#coreFunc",
        "fct-type": "function",
        "title": "coreFunc"
      },
      "index": {
        "description": "Get function from Core type crashes if the function does not exist",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFunc",
        "normalized": "Core-\u003eCoreFuncName-\u003eCoreFunc",
        "package": "yhccore",
        "partial": "Func",
        "signature": "Core-\u003eCoreFuncName-\u003eCoreFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncArgList",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc -\u003e [CoreVarName]",
        "fct-source": "src/Yhc-Core-Type.html#coreFuncArgList",
        "fct-type": "function",
        "title": "coreFuncArgList"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFuncArgList",
        "normalized": "CoreFunc-\u003e[CoreVarName]",
        "package": "yhccore",
        "partial": "Func Arg List",
        "signature": "CoreFunc-\u003e[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncArgs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[CoreVarName]",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "coreFuncArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFuncArgs",
        "normalized": "[CoreVarName]",
        "package": "yhccore",
        "partial": "Func Args",
        "signature": "[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncArity",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc -\u003e Int",
        "fct-source": "src/Yhc-Core-Type.html#coreFuncArity",
        "fct-type": "function",
        "title": "coreFuncArity"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFuncArity",
        "normalized": "CoreFunc-\u003eInt",
        "package": "yhccore",
        "partial": "Func Arity",
        "signature": "CoreFunc-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "coreFuncBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFuncBody",
        "normalized": "",
        "package": "yhccore",
        "partial": "Func Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncMap",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFuncMap -\u003e CoreFuncName -\u003e CoreFunc",
        "fct-source": "src/Yhc-Core-Type.html#coreFuncMap",
        "fct-type": "function",
        "title": "coreFuncMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFuncMap",
        "normalized": "CoreFuncMap-\u003eCoreFuncName-\u003eCoreFunc",
        "package": "yhccore",
        "partial": "Func Map",
        "signature": "CoreFuncMap-\u003eCoreFuncName-\u003eCoreFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncMapMaybe",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFuncMap -\u003e CoreFuncName -\u003e Maybe CoreFunc",
        "fct-source": "src/Yhc-Core-Type.html#coreFuncMapMaybe",
        "fct-type": "function",
        "title": "coreFuncMapMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFuncMapMaybe",
        "normalized": "CoreFuncMap-\u003eCoreFuncName-\u003eMaybe CoreFunc",
        "package": "yhccore",
        "partial": "Func Map Maybe",
        "signature": "CoreFuncMap-\u003eCoreFuncName-\u003eMaybe CoreFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eA non-crashing version of \u003ccode\u003e\u003ca\u003ecoreFunc\u003c/a\u003e\u003c/code\u003e\n   returns Nothing if the function does not exist.\n   If multiple functions with the same name exist, this crashes.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreFuncName -\u003e Maybe CoreFunc",
        "fct-source": "src/Yhc-Core-Type.html#coreFuncMaybe",
        "fct-type": "function",
        "title": "coreFuncMaybe"
      },
      "index": {
        "description": "non-crashing version of coreFunc returns Nothing if the function does not exist If multiple functions with the same name exist this crashes",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFuncMaybe",
        "normalized": "Core-\u003eCoreFuncName-\u003eMaybe CoreFunc",
        "package": "yhccore",
        "partial": "Func Maybe",
        "signature": "Core-\u003eCoreFuncName-\u003eMaybe CoreFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFuncName",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "coreFuncName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFuncName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Func Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreFuncs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[CoreFunc]",
        "fct-source": "src/Yhc-Core-Type.html#Core",
        "fct-type": "function",
        "title": "coreFuncs"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreFuncs",
        "normalized": "[CoreFunc]",
        "package": "yhccore",
        "partial": "Funcs",
        "signature": "[CoreFunc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreImports",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[String]",
        "fct-source": "src/Yhc-Core-Type.html#Core",
        "fct-type": "function",
        "title": "coreImports"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreImports",
        "normalized": "[String]",
        "package": "yhccore",
        "partial": "Imports",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreLam",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[CoreVarName] -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Type.html#coreLam",
        "fct-type": "function",
        "title": "coreLam"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreLam",
        "normalized": "[CoreVarName]-\u003eCoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Lam",
        "signature": "[CoreVarName]-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreLet",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[(CoreVarName, CoreExpr)] -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Type.html#coreLet",
        "fct-type": "function",
        "title": "coreLet"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreLet",
        "normalized": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Let",
        "signature": "[(CoreVarName,CoreExpr)]-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:coreName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "String",
        "fct-source": "src/Yhc-Core-Type.html#Core",
        "fct-type": "function",
        "title": "coreName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "coreName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimArity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Int",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "corePrimArity"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "corePrimArity",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Arity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimConv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "String",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "corePrimConv"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "corePrimConv",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Conv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimExternal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "String",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "corePrimExternal"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "corePrimExternal",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim External",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimImport",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Bool",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "corePrimImport"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "corePrimImport",
        "normalized": "",
        "package": "yhccore",
        "partial": "Prim Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:corePrimTypes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[String]",
        "fct-source": "src/Yhc-Core-Type.html#CoreFunc",
        "fct-type": "function",
        "title": "corePrimTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "corePrimTypes",
        "normalized": "[String]",
        "package": "yhccore",
        "partial": "Prim Types",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:dropModule",
      "description": {
        "fct-descr": "\u003cp\u003edrop a module from a Core declaration\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Yhc-Core-Type.html#dropModule",
        "fct-type": "function",
        "title": "dropModule"
      },
      "index": {
        "description": "drop module from Core declaration",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "dropModule",
        "normalized": "String-\u003eString",
        "package": "yhccore",
        "partial": "Module",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:exprToPat",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CorePat",
        "fct-source": "src/Yhc-Core-Type.html#exprToPat",
        "fct-type": "function",
        "title": "exprToPat"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "exprToPat",
        "normalized": "CoreExpr-\u003eCorePat",
        "package": "yhccore",
        "partial": "To Pat",
        "signature": "CoreExpr-\u003eCorePat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreApp",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e (CoreExpr, [CoreExpr])",
        "fct-source": "src/Yhc-Core-Type.html#fromCoreApp",
        "fct-type": "function",
        "title": "fromCoreApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "fromCoreApp",
        "normalized": "CoreExpr-\u003e(CoreExpr,[CoreExpr])",
        "package": "yhccore",
        "partial": "Core App",
        "signature": "CoreExpr-\u003e(CoreExpr,[CoreExpr])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreCon",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e String",
        "fct-source": "src/Yhc-Core-Type.html#fromCoreCon",
        "fct-type": "function",
        "title": "fromCoreCon"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "fromCoreCon",
        "normalized": "CoreExpr-\u003eString",
        "package": "yhccore",
        "partial": "Core Con",
        "signature": "CoreExpr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreFun",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e String",
        "fct-source": "src/Yhc-Core-Type.html#fromCoreFun",
        "fct-type": "function",
        "title": "fromCoreFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "fromCoreFun",
        "normalized": "CoreExpr-\u003eString",
        "package": "yhccore",
        "partial": "Core Fun",
        "signature": "CoreExpr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreFuncMap",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreFuncMap -\u003e Core",
        "fct-source": "src/Yhc-Core-Type.html#fromCoreFuncMap",
        "fct-type": "function",
        "title": "fromCoreFuncMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "fromCoreFuncMap",
        "normalized": "Core-\u003eCoreFuncMap-\u003eCore",
        "package": "yhccore",
        "partial": "Core Func Map",
        "signature": "Core-\u003eCoreFuncMap-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreLam",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e ([CoreVarName], CoreExpr)",
        "fct-source": "src/Yhc-Core-Type.html#fromCoreLam",
        "fct-type": "function",
        "title": "fromCoreLam"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "fromCoreLam",
        "normalized": "CoreExpr-\u003e([CoreVarName],CoreExpr)",
        "package": "yhccore",
        "partial": "Core Lam",
        "signature": "CoreExpr-\u003e([CoreVarName],CoreExpr)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreLet",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e ([(CoreVarName, CoreExpr)], CoreExpr)",
        "fct-source": "src/Yhc-Core-Type.html#fromCoreLet",
        "fct-type": "function",
        "title": "fromCoreLet"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "fromCoreLet",
        "normalized": "CoreExpr-\u003e([(CoreVarName,CoreExpr)],CoreExpr)",
        "package": "yhccore",
        "partial": "Core Let",
        "signature": "CoreExpr-\u003e([(CoreVarName,CoreExpr)],CoreExpr)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreLit",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreLit",
        "fct-source": "src/Yhc-Core-Type.html#fromCoreLit",
        "fct-type": "function",
        "title": "fromCoreLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "fromCoreLit",
        "normalized": "CoreExpr-\u003eCoreLit",
        "package": "yhccore",
        "partial": "Core Lit",
        "signature": "CoreExpr-\u003eCoreLit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:fromCoreVar",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e String",
        "fct-source": "src/Yhc-Core-Type.html#fromCoreVar",
        "fct-type": "function",
        "title": "fromCoreVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "fromCoreVar",
        "normalized": "CoreExpr-\u003eString",
        "package": "yhccore",
        "partial": "Core Var",
        "signature": "CoreExpr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreCase",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreCase",
        "fct-type": "function",
        "title": "isCoreCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreCase",
        "normalized": "CoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Case",
        "signature": "CoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreChr",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreLit -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreChr",
        "fct-type": "function",
        "title": "isCoreChr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreChr",
        "normalized": "CoreLit-\u003eBool",
        "package": "yhccore",
        "partial": "Core Chr",
        "signature": "CoreLit-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreCon",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreCon",
        "fct-type": "function",
        "title": "isCoreCon"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreCon",
        "normalized": "CoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Con",
        "signature": "CoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreFun",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreFun",
        "fct-type": "function",
        "title": "isCoreFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreFun",
        "normalized": "CoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Fun",
        "signature": "CoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreFunc",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreFunc",
        "fct-type": "function",
        "title": "isCoreFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreFunc",
        "normalized": "CoreFunc-\u003eBool",
        "package": "yhccore",
        "partial": "Core Func",
        "signature": "CoreFunc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreInt",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreLit -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreInt",
        "fct-type": "function",
        "title": "isCoreInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreInt",
        "normalized": "CoreLit-\u003eBool",
        "package": "yhccore",
        "partial": "Core Int",
        "signature": "CoreLit-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreLam",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreLam",
        "fct-type": "function",
        "title": "isCoreLam"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreLam",
        "normalized": "CoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Lam",
        "signature": "CoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreLet",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreLet",
        "fct-type": "function",
        "title": "isCoreLet"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreLet",
        "normalized": "CoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Let",
        "signature": "CoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreLit",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreLit",
        "fct-type": "function",
        "title": "isCoreLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreLit",
        "normalized": "CoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Lit",
        "signature": "CoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreLitSmall",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true for constants that take a small, bounded\n amount of space\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreLit -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreLitSmall",
        "fct-type": "function",
        "title": "isCoreLitSmall"
      },
      "index": {
        "description": "Returns true for constants that take small bounded amount of space",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreLitSmall",
        "normalized": "CoreLit-\u003eBool",
        "package": "yhccore",
        "partial": "Core Lit Small",
        "signature": "CoreLit-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCorePos",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCorePos",
        "fct-type": "function",
        "title": "isCorePos"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCorePos",
        "normalized": "CoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Pos",
        "signature": "CoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCorePrim",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreFunc -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCorePrim",
        "fct-type": "function",
        "title": "isCorePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCorePrim",
        "normalized": "CoreFunc-\u003eBool",
        "package": "yhccore",
        "partial": "Core Prim",
        "signature": "CoreFunc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreStr",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreLit -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreStr",
        "fct-type": "function",
        "title": "isCoreStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreStr",
        "normalized": "CoreLit-\u003eBool",
        "package": "yhccore",
        "partial": "Core Str",
        "signature": "CoreLit-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isCoreVar",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isCoreVar",
        "fct-type": "function",
        "title": "isCoreVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isCoreVar",
        "normalized": "CoreExpr-\u003eBool",
        "package": "yhccore",
        "partial": "Core Var",
        "signature": "CoreExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isPatCon",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CorePat -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isPatCon",
        "fct-type": "function",
        "title": "isPatCon"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isPatCon",
        "normalized": "CorePat-\u003eBool",
        "package": "yhccore",
        "partial": "Pat Con",
        "signature": "CorePat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isPatDefault",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CorePat -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isPatDefault",
        "fct-type": "function",
        "title": "isPatDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isPatDefault",
        "normalized": "CorePat-\u003eBool",
        "package": "yhccore",
        "partial": "Pat Default",
        "signature": "CorePat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:isPatLit",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CorePat -\u003e Bool",
        "fct-source": "src/Yhc-Core-Type.html#isPatLit",
        "fct-type": "function",
        "title": "isPatLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "isPatLit",
        "normalized": "CorePat-\u003eBool",
        "package": "yhccore",
        "partial": "Pat Lit",
        "signature": "CorePat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:patCon",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreCtorName",
        "fct-source": "src/Yhc-Core-Type.html#CorePat",
        "fct-type": "function",
        "title": "patCon"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "patCon",
        "normalized": "",
        "package": "yhccore",
        "partial": "Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:patLit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreLit",
        "fct-source": "src/Yhc-Core-Type.html#CorePat",
        "fct-type": "function",
        "title": "patLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "patLit",
        "normalized": "",
        "package": "yhccore",
        "partial": "Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:patToExpr",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CorePat -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Type.html#patToExpr",
        "fct-type": "function",
        "title": "patToExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "patToExpr",
        "normalized": "CorePat-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "To Expr",
        "signature": "CorePat-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:patVars",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "[CoreVarName]",
        "fct-source": "src/Yhc-Core-Type.html#CorePat",
        "fct-type": "function",
        "title": "patVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "patVars",
        "normalized": "[CoreVarName]",
        "package": "yhccore",
        "partial": "Vars",
        "signature": "[CoreVarName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:remCorePos",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Yhc-Core-Type.html#remCorePos",
        "fct-type": "function",
        "title": "remCorePos"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "remCorePos",
        "normalized": "CoreExpr-\u003eCoreExpr",
        "package": "yhccore",
        "partial": "Core Pos",
        "signature": "CoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Type.html#v:toCoreFuncMap",
      "description": {
        "fct-module": "Yhc.Core.Type",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e CoreFuncMap",
        "fct-source": "src/Yhc-Core-Type.html#toCoreFuncMap",
        "fct-type": "function",
        "title": "toCoreFuncMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Type",
        "module": "Yhc.Core.Type",
        "name": "toCoreFuncMap",
        "normalized": "Core-\u003eCoreFuncMap",
        "package": "yhccore",
        "partial": "Core Func Map",
        "signature": "Core-\u003eCoreFuncMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Uniplate.html#",
      "description": {
        "fct-module": "Yhc.Core.Uniplate",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Uniplate.html",
        "fct-type": "module",
        "title": "Uniplate"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Uniplate",
        "module": "Yhc.Core.Uniplate",
        "name": "Uniplate",
        "normalized": "",
        "package": "yhccore",
        "partial": "Uniplate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Uniplate.html#t:UniplateExpr",
      "description": {
        "fct-module": "Yhc.Core.Uniplate",
        "fct-package": "yhccore",
        "fct-signature": "class",
        "fct-source": "src/Yhc-Core-Uniplate.html#UniplateExpr",
        "fct-type": "class",
        "title": "UniplateExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Uniplate",
        "module": "Yhc.Core.Uniplate",
        "name": "UniplateExpr",
        "normalized": "",
        "package": "yhccore",
        "partial": "Uniplate Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Uniplate.html#v:uniplateExpr",
      "description": {
        "fct-module": "Yhc.Core.Uniplate",
        "fct-package": "yhccore",
        "fct-signature": "BiplateType a CoreExpr",
        "fct-source": "src/Yhc-Core-Uniplate.html#uniplateExpr",
        "fct-type": "method",
        "title": "uniplateExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Uniplate",
        "module": "Yhc.Core.Uniplate",
        "name": "uniplateExpr",
        "normalized": "",
        "package": "yhccore",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-Uniplate.html#v:universeExprVar",
      "description": {
        "fct-module": "Yhc.Core.Uniplate",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e [String]",
        "fct-source": "src/Yhc-Core-Uniplate.html#universeExprVar",
        "fct-type": "function",
        "title": "universeExprVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Uniplate",
        "module": "Yhc.Core.Uniplate",
        "name": "universeExprVar",
        "normalized": "a-\u003e[String]",
        "package": "yhccore",
        "partial": "Expr Var",
        "signature": "a-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements unique ID's in Yhc.Core.\n\u003c/p\u003e\u003cp\u003eThe intention is that a program can use this interface to a unique ID quite cheaply.\n    Or an existing state monad can be reused.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.UniqueId",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-UniqueId.html",
        "fct-type": "module",
        "title": "UniqueId"
      },
      "index": {
        "description": "This module implements unique ID in Yhc.Core The intention is that program can use this interface to unique ID quite cheaply Or an existing state monad can be reused",
        "hierarchy": "Yhc Core UniqueId",
        "module": "Yhc.Core.UniqueId",
        "name": "UniqueId",
        "normalized": "",
        "package": "yhccore",
        "partial": "Unique Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#t:UniqueId",
      "description": {
        "fct-module": "Yhc.Core.UniqueId",
        "fct-package": "yhccore",
        "fct-signature": "class",
        "fct-source": "src/Yhc-Core-UniqueId.html#UniqueId",
        "fct-type": "class",
        "title": "UniqueId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core UniqueId",
        "module": "Yhc.Core.UniqueId",
        "name": "UniqueId",
        "normalized": "",
        "package": "yhccore",
        "partial": "Unique Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#t:UniqueIdM",
      "description": {
        "fct-module": "Yhc.Core.UniqueId",
        "fct-package": "yhccore",
        "fct-signature": "class",
        "fct-source": "src/Yhc-Core-UniqueId.html#UniqueIdM",
        "fct-type": "class",
        "title": "UniqueIdM"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core UniqueId",
        "module": "Yhc.Core.UniqueId",
        "name": "UniqueIdM",
        "normalized": "",
        "package": "yhccore",
        "partial": "Unique Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:getId",
      "description": {
        "fct-module": "Yhc.Core.UniqueId",
        "fct-package": "yhccore",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Yhc-Core-UniqueId.html#getId",
        "fct-type": "method",
        "title": "getId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core UniqueId",
        "module": "Yhc.Core.UniqueId",
        "name": "getId",
        "normalized": "a-\u003eInt",
        "package": "yhccore",
        "partial": "Id",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:getIdM",
      "description": {
        "fct-module": "Yhc.Core.UniqueId",
        "fct-package": "yhccore",
        "fct-signature": "m Int",
        "fct-source": "src/Yhc-Core-UniqueId.html#getIdM",
        "fct-type": "method",
        "title": "getIdM"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core UniqueId",
        "module": "Yhc.Core.UniqueId",
        "name": "getIdM",
        "normalized": "",
        "package": "yhccore",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:nextId",
      "description": {
        "fct-module": "Yhc.Core.UniqueId",
        "fct-package": "yhccore",
        "fct-signature": "m Int",
        "fct-source": "src/Yhc-Core-UniqueId.html#nextId",
        "fct-type": "function",
        "title": "nextId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core UniqueId",
        "module": "Yhc.Core.UniqueId",
        "name": "nextId",
        "normalized": "",
        "package": "yhccore",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:putId",
      "description": {
        "fct-module": "Yhc.Core.UniqueId",
        "fct-package": "yhccore",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Yhc-Core-UniqueId.html#putId",
        "fct-type": "method",
        "title": "putId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core UniqueId",
        "module": "Yhc.Core.UniqueId",
        "name": "putId",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "yhccore",
        "partial": "Id",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueId.html#v:putIdM",
      "description": {
        "fct-module": "Yhc.Core.UniqueId",
        "fct-package": "yhccore",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Yhc-Core-UniqueId.html#putIdM",
        "fct-type": "method",
        "title": "putIdM"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core UniqueId",
        "module": "Yhc.Core.UniqueId",
        "name": "putIdM",
        "normalized": "Int-\u003ea()",
        "package": "yhccore",
        "partial": "Id",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements unique names in Yhc.Core.\n\u003c/p\u003e\u003cp\u003eGiven a name, it can be dividied into [rest][digits].     \n    The digits form a number (0 for no digits).\n\u003c/p\u003e\u003cp\u003eGiven a set of names, they must all represent unique numbers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.UniqueName",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-UniqueName.html",
        "fct-type": "module",
        "title": "UniqueName"
      },
      "index": {
        "description": "This module implements unique names in Yhc.Core Given name it can be dividied into rest digits The digits form number for no digits Given set of names they must all represent unique numbers",
        "hierarchy": "Yhc Core UniqueName",
        "module": "Yhc.Core.UniqueName",
        "name": "UniqueName",
        "normalized": "",
        "package": "yhccore",
        "partial": "Unique Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueFuncsNext",
      "description": {
        "fct-module": "Yhc.Core.UniqueName",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e Int",
        "fct-source": "src/Yhc-Core-UniqueName.html#uniqueFuncsNext",
        "fct-type": "function",
        "title": "uniqueFuncsNext"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core UniqueName",
        "module": "Yhc.Core.UniqueName",
        "name": "uniqueFuncsNext",
        "normalized": "Core-\u003eInt",
        "package": "yhccore",
        "partial": "Funcs Next",
        "signature": "Core-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueFuncsRename",
      "description": {
        "fct-descr": "\u003cp\u003eRename functions so they use consecutive numbers starting at 2,\n   to aid human understanding\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.UniqueName",
        "fct-package": "yhccore",
        "fct-signature": "Core -\u003e Core",
        "fct-source": "src/Yhc-Core-UniqueName.html#uniqueFuncsRename",
        "fct-type": "function",
        "title": "uniqueFuncsRename"
      },
      "index": {
        "description": "Rename functions so they use consecutive numbers starting at to aid human understanding",
        "hierarchy": "Yhc Core UniqueName",
        "module": "Yhc.Core.UniqueName",
        "name": "uniqueFuncsRename",
        "normalized": "Core-\u003eCore",
        "package": "yhccore",
        "partial": "Funcs Rename",
        "signature": "Core-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueFuncsSplit",
      "description": {
        "fct-descr": "\u003cp\u003eA more advanced combinator to capture the pattern of splitting\n   one function into many (i.e. recursive let's, lambda lifting)\n\u003c/p\u003e\u003cp\u003eNeeds rank-2 types to do properly\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.UniqueName",
        "fct-package": "yhccore",
        "fct-signature": "(FuncsSplitM CoreFuncName -\u003e (CoreFunc -\u003e FuncsSplitM ()) -\u003e CoreExpr -\u003e FuncsSplitM CoreExpr) -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-UniqueName.html#uniqueFuncsSplit",
        "fct-type": "function",
        "title": "uniqueFuncsSplit"
      },
      "index": {
        "description": "more advanced combinator to capture the pattern of splitting one function into many i.e recursive let lambda lifting Needs rank-2 types to do properly",
        "hierarchy": "Yhc Core UniqueName",
        "module": "Yhc.Core.UniqueName",
        "name": "uniqueFuncsSplit",
        "normalized": "(FuncsSplitM CoreFuncName-\u003e(CoreFunc-\u003eFuncsSplitM())-\u003eCoreExpr-\u003eFuncsSplitM CoreExpr)-\u003eCore-\u003eCore",
        "package": "yhccore",
        "partial": "Funcs Split",
        "signature": "(FuncsSplitM CoreFuncName-\u003e(CoreFunc-\u003eFuncsSplitM())-\u003eCoreExpr-\u003eFuncsSplitM CoreExpr)-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueJoin",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a name, and a unique id, join them together.\n   Replaces any existing id.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.UniqueName",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e Int -\u003e String",
        "fct-source": "src/Yhc-Core-UniqueName.html#uniqueJoin",
        "fct-type": "function",
        "title": "uniqueJoin"
      },
      "index": {
        "description": "Given name and unique id join them together Replaces any existing id",
        "hierarchy": "Yhc Core UniqueName",
        "module": "Yhc.Core.UniqueName",
        "name": "uniqueJoin",
        "normalized": "String-\u003eInt-\u003eString",
        "package": "yhccore",
        "partial": "Join",
        "signature": "String-\u003eInt-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueNamesNext",
      "description": {
        "fct-module": "Yhc.Core.UniqueName",
        "fct-package": "yhccore",
        "fct-signature": "[String] -\u003e Int",
        "fct-source": "src/Yhc-Core-UniqueName.html#uniqueNamesNext",
        "fct-type": "function",
        "title": "uniqueNamesNext"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core UniqueName",
        "module": "Yhc.Core.UniqueName",
        "name": "uniqueNamesNext",
        "normalized": "[String]-\u003eInt",
        "package": "yhccore",
        "partial": "Names Next",
        "signature": "[String]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core-UniqueName.html#v:uniqueSplit",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a name into a prefix and a unique id.\n   0 means no trailing number.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.UniqueName",
        "fct-package": "yhccore",
        "fct-signature": "String -\u003e (String, Int)",
        "fct-source": "src/Yhc-Core-UniqueName.html#uniqueSplit",
        "fct-type": "function",
        "title": "uniqueSplit"
      },
      "index": {
        "description": "Split name into prefix and unique id means no trailing number",
        "hierarchy": "Yhc Core UniqueName",
        "module": "Yhc.Core.UniqueName",
        "name": "uniqueSplit",
        "normalized": "String-\u003e(String,Int)",
        "package": "yhccore",
        "partial": "Split",
        "signature": "String-\u003e(String,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yhccore/docs/Yhc-Core.html#",
      "description": {
        "fct-module": "Yhc.Core",
        "fct-package": "yhccore",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core",
        "module": "Yhc.Core",
        "name": "Core",
        "normalized": "",
        "package": "yhccore",
        "partial": "Core",
        "signature": ""
      }
    }
  }
]