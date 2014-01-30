[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSlurp out arities of function bindings.\n   and infer arities for primitives based on their types.\n\u003c/p\u003e\u003cp\u003eFor function bindings the arity is the number of outer-most lambdas\n   in the definition. \n\u003c/p\u003e\u003cp\u003eFor primitives, the arity is the number of function\n   constructors in its type. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Analysis-Arity.html",
        "fct-type": "module",
        "title": "Arity"
      },
      "index": {
        "description": "Slurp out arities of function bindings and infer arities for primitives based on their types For function bindings the arity is the number of outer-most lambdas in the definition For primitives the arity is the number of function constructors in its type",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "Arity",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Arity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#t:Arities",
      "description": {
        "fct-descr": "\u003cp\u003eArities of named and anonymous bindings.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "type",
        "fct-source": "src/DDC-Core-Analysis-Arity.html#Arities",
        "fct-type": "type",
        "title": "Arities"
      },
      "index": {
        "description": "Arities of named and anonymous bindings",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "Arities",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Arities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:aritiesOfLets",
      "description": {
        "fct-descr": "\u003cp\u003eGet the arities of a \u003ccode\u003e\u003ca\u003eLets\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Lets a n -\u003e Maybe [(Bind n, Int)]",
        "fct-source": "src/DDC-Core-Analysis-Arity.html#aritiesOfLets",
        "fct-type": "function",
        "title": "aritiesOfLets"
      },
      "index": {
        "description": "Get the arities of Lets",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "aritiesOfLets",
        "normalized": "Lets a b-\u003eMaybe[(Bind b,Int)]",
        "package": "ddc-core-simpl",
        "partial": "Of Lets",
        "signature": "Lets a n-\u003eMaybe[(Bind n,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:aritiesOfModule",
      "description": {
        "fct-descr": "\u003cp\u003eSlurp out arities of imports and top-level bindings from a module.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Module a n -\u003e Arities n",
        "fct-source": "src/DDC-Core-Analysis-Arity.html#aritiesOfModule",
        "fct-type": "function",
        "title": "aritiesOfModule"
      },
      "index": {
        "description": "Slurp out arities of imports and top-level bindings from module",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "aritiesOfModule",
        "normalized": "Module a b-\u003eArities b",
        "package": "ddc-core-simpl",
        "partial": "Of Module",
        "signature": "Module a n-\u003eArities n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:aritiesOfPat",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve binders from case pattern, so we can extend the arity context.\n   We don't know anything about their values, so record as 0.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Pat n -\u003e [(Bind n, Int)]",
        "fct-source": "src/DDC-Core-Analysis-Arity.html#aritiesOfPat",
        "fct-type": "function",
        "title": "aritiesOfPat"
      },
      "index": {
        "description": "Retrieve binders from case pattern so we can extend the arity context We don know anything about their values so record as",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "aritiesOfPat",
        "normalized": "Pat a-\u003e[(Bind a,Int)]",
        "package": "ddc-core-simpl",
        "partial": "Of Pat",
        "signature": "Pat n-\u003e[(Bind n,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:arityFromType",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the arity of an expression by looking at its type.\n   Count all the function arrows, and foralls.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Type n -\u003e Maybe Int",
        "fct-source": "src/DDC-Core-Analysis-Arity.html#arityFromType",
        "fct-type": "function",
        "title": "arityFromType"
      },
      "index": {
        "description": "Determine the arity of an expression by looking at its type Count all the function arrows and foralls",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "arityFromType",
        "normalized": "Type a-\u003eMaybe Int",
        "package": "ddc-core-simpl",
        "partial": "From Type",
        "signature": "Type n-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:arityOfExp",
      "description": {
        "fct-descr": "\u003cp\u003eGet the arity of an expression. \n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Exp a n -\u003e Maybe Int",
        "fct-source": "src/DDC-Core-Analysis-Arity.html#arityOfExp",
        "fct-type": "function",
        "title": "arityOfExp"
      },
      "index": {
        "description": "Get the arity of an expression",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "arityOfExp",
        "normalized": "Exp a b-\u003eMaybe Int",
        "package": "ddc-core-simpl",
        "partial": "Of Exp",
        "signature": "Exp a n-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:emptyArities",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty arities context.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Arities n",
        "fct-source": "src/DDC-Core-Analysis-Arity.html#emptyArities",
        "fct-type": "function",
        "title": "emptyArities"
      },
      "index": {
        "description": "Empty arities context",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "emptyArities",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Arities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:extendsArities",
      "description": {
        "fct-descr": "\u003cp\u003eExtend map with some binders and their arities.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Arities n -\u003e [(Bind n, Int)] -\u003e Arities n",
        "fct-source": "src/DDC-Core-Analysis-Arity.html#extendsArities",
        "fct-type": "function",
        "title": "extendsArities"
      },
      "index": {
        "description": "Extend map with some binders and their arities",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "extendsArities",
        "normalized": "Arities a-\u003e[(Bind a,Int)]-\u003eArities a",
        "package": "ddc-core-simpl",
        "partial": "Arities",
        "signature": "Arities n-\u003e[(Bind n,Int)]-\u003eArities n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:getArity",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a binder's arity from the arity map\n   or determine it from its type in the case of primops.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Arity",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Arities n -\u003e Bound n -\u003e Maybe Int",
        "fct-source": "src/DDC-Core-Analysis-Arity.html#getArity",
        "fct-type": "function",
        "title": "getArity"
      },
      "index": {
        "description": "Look up binder arity from the arity map or determine it from its type in the case of primops",
        "hierarchy": "DDC Core Analysis Arity",
        "module": "DDC.Core.Analysis.Arity",
        "name": "getArity",
        "normalized": "Arities a-\u003eBound a-\u003eMaybe Int",
        "package": "ddc-core-simpl",
        "partial": "Arity",
        "signature": "Arities n-\u003eBound n-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnnotate let bindings with how their bound variables are used.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Analysis-Usage.html",
        "fct-type": "module",
        "title": "Usage"
      },
      "index": {
        "description": "Annotate let bindings with how their bound variables are used",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "Usage",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Usage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#t:Used",
      "description": {
        "fct-descr": "\u003cp\u003eTracks how a bound variable is used.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#Used",
        "fct-type": "data",
        "title": "Used"
      },
      "index": {
        "description": "Tracks how bound variable is used",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "Used",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Used",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#t:UsedMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap of bound name to how the variable is used.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#UsedMap",
        "fct-type": "data",
        "title": "UsedMap"
      },
      "index": {
        "description": "Map of bound name to how the variable is used",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "UsedMap",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Used Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedDestruct",
      "description": {
        "fct-descr": "\u003cp\u003eBound variable is destructed by a case-expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "UsedDestruct",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#Used",
        "fct-type": "function",
        "title": "UsedDestruct"
      },
      "index": {
        "description": "Bound variable is destructed by case-expression",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "UsedDestruct",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Used Destruct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedFunction",
      "description": {
        "fct-descr": "\u003cp\u003eBound variable is used as the function in an application.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "UsedFunction",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#Used",
        "fct-type": "function",
        "title": "UsedFunction"
      },
      "index": {
        "description": "Bound variable is used as the function in an application",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "UsedFunction",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Used Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedInAlt",
      "description": {
        "fct-descr": "\u003cp\u003eUsage is inside a case alternative.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "UsedInAlt Used",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#Used",
        "fct-type": "function",
        "title": "UsedInAlt"
      },
      "index": {
        "description": "Usage is inside case alternative",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "UsedInAlt",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Used In Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedInCast",
      "description": {
        "fct-descr": "\u003cp\u003eBound variable is used inside a \u003ccode\u003eweakclo\u003c/code\u003e cast.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "UsedInCast",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#Used",
        "fct-type": "function",
        "title": "UsedInCast"
      },
      "index": {
        "description": "Bound variable is used inside weakclo cast",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "UsedInCast",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Used In Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedInLambda",
      "description": {
        "fct-descr": "\u003cp\u003eUsage is inside a Lambda abstraction (either type or value)\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "UsedInLambda Used",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#Used",
        "fct-type": "function",
        "title": "UsedInLambda"
      },
      "index": {
        "description": "Usage is inside Lambda abstraction either type or value",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "UsedInLambda",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Used In Lambda",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedMap",
      "description": {
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "UsedMap (Map n [Used])",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#UsedMap",
        "fct-type": "function",
        "title": "UsedMap"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "UsedMap",
        "normalized": "UsedMap(Map a[Used])",
        "package": "ddc-core-simpl",
        "partial": "Used Map",
        "signature": "UsedMap(Map n[Used])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedOcc",
      "description": {
        "fct-descr": "\u003cp\u003eBound variable has an occurrence that is not one of the above.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "UsedOcc",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#Used",
        "fct-type": "function",
        "title": "UsedOcc"
      },
      "index": {
        "description": "Bound variable has an occurrence that is not one of the above",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "UsedOcc",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Used Occ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:usageModule",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate all binding occurrences of variables in an expression\n   with how they are used.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Module a n -\u003e Module (UsedMap n, a) n",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#usageModule",
        "fct-type": "function",
        "title": "usageModule"
      },
      "index": {
        "description": "Annotate all binding occurrences of variables in an expression with how they are used",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "usageModule",
        "normalized": "Module a b-\u003eModule(UsedMap b,a)b",
        "package": "ddc-core-simpl",
        "partial": "Module",
        "signature": "Module a n-\u003eModule(UsedMap n,a)n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:usageX",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate all binding occurrences of variables in an expression\n   with how they are used.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Analysis.Usage",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Exp a n -\u003e Exp (UsedMap n, a) n",
        "fct-source": "src/DDC-Core-Analysis-Usage.html#usageX",
        "fct-type": "function",
        "title": "usageX"
      },
      "index": {
        "description": "Annotate all binding occurrences of variables in an expression with how they are used",
        "hierarchy": "DDC Core Analysis Usage",
        "module": "DDC.Core.Analysis.Usage",
        "name": "usageX",
        "normalized": "Exp a b-\u003eExp(UsedMap b,a)b",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "Exp a n-\u003eExp(UsedMap n,a)n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#",
      "description": {
        "fct-module": "DDC.Core.Simplifier.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Simplifier-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Simplifier Parser",
        "module": "DDC.Core.Simplifier.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#t:SimplifierDetails",
      "description": {
        "fct-descr": "\u003cp\u003eAuxilliary information that may be used by a simplifier.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
        "fct-type": "data",
        "title": "SimplifierDetails"
      },
      "index": {
        "description": "Auxilliary information that may be used by simplifier",
        "hierarchy": "DDC Core Simplifier Parser",
        "module": "DDC.Core.Simplifier.Parser",
        "name": "SimplifierDetails",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Simplifier Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:SimplifierDetails",
      "description": {
        "fct-module": "DDC.Core.Simplifier.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "SimplifierDetails",
        "fct-source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
        "fct-type": "function",
        "title": "SimplifierDetails"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Simplifier Parser",
        "module": "DDC.Core.Simplifier.Parser",
        "name": "SimplifierDetails",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Simplifier Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:parseSimplifier",
      "description": {
        "fct-descr": "\u003cp\u003eParse a simplifier from a string.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(String -\u003e Maybe n) -\u003e SimplifierDetails s a n -\u003e String -\u003e Either ParseError (Simplifier s a n)",
        "fct-source": "src/DDC-Core-Simplifier-Parser.html#parseSimplifier",
        "fct-type": "function",
        "title": "parseSimplifier"
      },
      "index": {
        "description": "Parse simplifier from string",
        "hierarchy": "DDC Core Simplifier Parser",
        "module": "DDC.Core.Simplifier.Parser",
        "name": "parseSimplifier",
        "normalized": "(String-\u003eMaybe a)-\u003eSimplifierDetails b c a-\u003eString-\u003eEither ParseError(Simplifier b c a)",
        "package": "ddc-core-simpl",
        "partial": "Simplifier",
        "signature": "(String-\u003eMaybe n)-\u003eSimplifierDetails s a n-\u003eString-\u003eEither ParseError(Simplifier s a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:simplifierMkNamifierT",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a namifier to make fresh type (level-1) \n   names that don't conflict with any already in this environment.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Env n -\u003e Namifier s n",
        "fct-source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
        "fct-type": "function",
        "title": "simplifierMkNamifierT"
      },
      "index": {
        "description": "Create namifier to make fresh type level-1 names that don conflict with any already in this environment",
        "hierarchy": "DDC Core Simplifier Parser",
        "module": "DDC.Core.Simplifier.Parser",
        "name": "simplifierMkNamifierT",
        "normalized": "Env a-\u003eNamifier b a",
        "package": "ddc-core-simpl",
        "partial": "Mk Namifier",
        "signature": "Env n-\u003eNamifier s n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:simplifierMkNamifierX",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a namifier to make fresh value or witness (level-0) \n   names that don't conflict with any already in this environment.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Env n -\u003e Namifier s n",
        "fct-source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
        "fct-type": "function",
        "title": "simplifierMkNamifierX"
      },
      "index": {
        "description": "Create namifier to make fresh value or witness level-0 names that don conflict with any already in this environment",
        "hierarchy": "DDC Core Simplifier Parser",
        "module": "DDC.Core.Simplifier.Parser",
        "name": "simplifierMkNamifierX",
        "normalized": "Env a-\u003eNamifier b a",
        "package": "ddc-core-simpl",
        "partial": "Mk Namifier",
        "signature": "Env n-\u003eNamifier s n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:simplifierRules",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite rules along with their names.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "NamedRewriteRules a n",
        "fct-source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
        "fct-type": "function",
        "title": "simplifierRules"
      },
      "index": {
        "description": "Rewrite rules along with their names",
        "hierarchy": "DDC Core Simplifier Parser",
        "module": "DDC.Core.Simplifier.Parser",
        "name": "simplifierRules",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:simplifierTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eModules available for inlining.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Module a n]",
        "fct-source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
        "fct-type": "function",
        "title": "simplifierTemplates"
      },
      "index": {
        "description": "Modules available for inlining",
        "hierarchy": "DDC Core Simplifier Parser",
        "module": "DDC.Core.Simplifier.Parser",
        "name": "simplifierTemplates",
        "normalized": "[Module a b]",
        "package": "ddc-core-simpl",
        "partial": "Templates",
        "signature": "[Module a n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon simplifier recipes that combine multiple transforms.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html",
        "fct-type": "module",
        "title": "Recipe"
      },
      "index": {
        "description": "Common simplifier recipes that combine multiple transforms",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "Recipe",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Recipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:anonymize",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite named binders to anonymous debruijn binders.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#anonymize",
        "fct-type": "function",
        "title": "anonymize"
      },
      "index": {
        "description": "Rewrite named binders to anonymous debruijn binders",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "anonymize",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:anormalize",
      "description": {
        "fct-descr": "\u003cp\u003eConversion to administrative normal-form.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(KindEnv n -\u003e Namifier s n)-\u003e (TypeEnv n -\u003e Namifier s n)-\u003e Simplifier s a n",
        "fct-type": "function",
        "title": "anormalize"
      },
      "index": {
        "description": "Conversion to administrative normal-form",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "anormalize",
        "normalized": "(KindEnv a-\u003eNamifier b a)-\u003e(TypeEnv a-\u003eNamifier b a)-\u003eSimplifier b c a",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "(KindEnv n-\u003eNamifier s n)-\u003e(TypeEnv n-\u003eNamifier s n)-\u003eSimplifier s a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:beta",
      "description": {
        "fct-descr": "\u003cp\u003ePerform beta reduction\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#beta",
        "fct-type": "function",
        "title": "beta"
      },
      "index": {
        "description": "Perform beta reduction",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "beta",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:betaLets",
      "description": {
        "fct-descr": "\u003cp\u003ePerform beta reduction, introducing let-expressions for compound arguments.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#betaLets",
        "fct-type": "function",
        "title": "betaLets"
      },
      "index": {
        "description": "Perform beta reduction introducing let-expressions for compound arguments",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "betaLets",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Lets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:bubble",
      "description": {
        "fct-descr": "\u003cp\u003eFloat casts outwards.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#bubble",
        "fct-type": "function",
        "title": "bubble"
      },
      "index": {
        "description": "Float casts outwards",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "bubble",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:elaborate",
      "description": {
        "fct-descr": "\u003cp\u003eElaborate possible Const and Distinct witnesses that aren't\n   otherwise in the program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#elaborate",
        "fct-type": "function",
        "title": "elaborate"
      },
      "index": {
        "description": "Elaborate possible Const and Distinct witnesses that aren otherwise in the program",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "elaborate",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten nested let and case expressions.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "Flatten nested let and case expressions",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "flatten",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:forward",
      "description": {
        "fct-descr": "\u003cp\u003eFloat single-use bindings forward into their use sites.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#forward",
        "fct-type": "function",
        "title": "forward"
      },
      "index": {
        "description": "Float single-use bindings forward into their use sites",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "forward",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:idsimp",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity simplifier returns the code unharmed.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#idsimp",
        "fct-type": "function",
        "title": "idsimp"
      },
      "index": {
        "description": "The identity simplifier returns the code unharmed",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "idsimp",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:prune",
      "description": {
        "fct-descr": "\u003cp\u003eRemove unused, pure let bindings.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#prune",
        "fct-type": "function",
        "title": "prune"
      },
      "index": {
        "description": "Remove unused pure let bindings",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "prune",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:rewriteSimp",
      "description": {
        "fct-descr": "\u003cp\u003eIntersperse rewrites and beta reduction\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Int-\u003e NamedRewriteRules a n-\u003e Simplifier s a n",
        "fct-type": "function",
        "title": "rewriteSimp"
      },
      "index": {
        "description": "Intersperse rewrites and beta reduction",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "rewriteSimp",
        "normalized": "Int-\u003eNamedRewriteRules a b-\u003eSimplifier c a b",
        "package": "ddc-core-simpl",
        "partial": "Simp",
        "signature": "Int-\u003eNamedRewriteRules a n-\u003eSimplifier s a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:snip",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce let-bindings for nested applications.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#snip",
        "fct-type": "function",
        "title": "snip"
      },
      "index": {
        "description": "Introduce let-bindings for nested applications",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "snip",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:snipOver",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce let-bindings for nested applications.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Recipe",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Simplifier s a n",
        "fct-source": "src/DDC-Core-Simplifier-Recipe.html#snipOver",
        "fct-type": "function",
        "title": "snipOver"
      },
      "index": {
        "description": "Introduce let-bindings for nested applications",
        "hierarchy": "DDC Core Simplifier Recipe",
        "module": "DDC.Core.Simplifier.Recipe",
        "name": "snipOver",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Over",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#",
      "description": {
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Simplifier-Result.html",
        "fct-type": "module",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "Result",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#t:NoInformation",
      "description": {
        "fct-descr": "\u003cp\u003ePlace-holder type to use when there is no real \u003ccode\u003e\u003ca\u003eTransformResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#NoInformation",
        "fct-type": "data",
        "title": "NoInformation"
      },
      "index": {
        "description": "Place-holder type to use when there is no real TransformResult",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "NoInformation",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "No Information",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#t:TransformInfo",
      "description": {
        "fct-descr": "\u003cp\u003eExistential package for a typeable thing,\n   used in \u003ccode\u003e\u003ca\u003eTransformResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformInfo",
        "fct-type": "data",
        "title": "TransformInfo"
      },
      "index": {
        "description": "Existential package for typeable thing used in TransformResult",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "TransformInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#t:TransformResult",
      "description": {
        "fct-descr": "\u003cp\u003ePackage up the result of applying a single transform.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "data",
        "title": "TransformResult"
      },
      "index": {
        "description": "Package up the result of applying single transform",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "TransformResult",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:TransformInfo",
      "description": {
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "TransformInfo i",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformInfo",
        "fct-type": "function",
        "title": "TransformInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "TransformInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:TransformResult",
      "description": {
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "TransformResult",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "TransformResult"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "TransformResult",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eTransform result proper (eg the new module)\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "r",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Transform result proper eg the new module",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "result",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultAgain",
      "description": {
        "fct-descr": "\u003cp\u003eWhether it might help to run the same transform again.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e then a simplifier fixpoint won't apply this transform\n   again to the result program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bool",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "resultAgain"
      },
      "index": {
        "description": "Whether it might help to run the same transform again If False then simplifier fixpoint won apply this transform again to the result program",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "resultAgain",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Again",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultDone",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a default result with no transform again.\n\u003c/p\u003e\u003cp\u003eWe'll say we made progress, but set \u003ccode\u003e\u003ca\u003eresultAgain\u003c/a\u003e\u003c/code\u003e to False\n   so to stop any simplifier fixpoints.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "String -\u003e r -\u003e TransformResult r",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#resultDone",
        "fct-type": "function",
        "title": "resultDone"
      },
      "index": {
        "description": "Create default result with no transform again We ll say we made progress but set resultAgain to False so to stop any simplifier fixpoints",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "resultDone",
        "normalized": "String-\u003ea-\u003eTransformResult a",
        "package": "ddc-core-simpl",
        "partial": "Done",
        "signature": "String-\u003er-\u003eTransformResult r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultInfo",
      "description": {
        "fct-descr": "\u003cp\u003eTransform specific log. This might contain a count of what rules\n   fired, or information about what parts of the program couldn't\n   be processed.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "TransformInfo",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "resultInfo"
      },
      "index": {
        "description": "Transform specific log This might contain count of what rules fired or information about what parts of the program couldn be processed",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "resultInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultProgress",
      "description": {
        "fct-descr": "\u003cp\u003eWhether this transform made any progess.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e then the result program must be the same as the\n   input program, and a simplifer fixpoint won't apply this\n   transform again to the result program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier.Result",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bool",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "resultProgress"
      },
      "index": {
        "description": "Whether this transform made any progess If False then the result program must be the same as the input program and simplifer fixpoint won apply this transform again to the result program",
        "hierarchy": "DDC Core Simplifier Result",
        "module": "DDC.Core.Simplifier.Result",
        "name": "resultProgress",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#",
      "description": {
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Simplifier.html",
        "fct-type": "module",
        "title": "Simplifier"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Simplifier",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Simplifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:InlinerTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to get the inliner template (unfolding) for the given name.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "type",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#InlinerTemplates",
        "fct-type": "type",
        "title": "InlinerTemplates"
      },
      "index": {
        "description": "Function to get the inliner template unfolding for the given name",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "InlinerTemplates",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Inliner Templates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:NamedRewriteRules",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite rules along with their names.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "type",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#NamedRewriteRules",
        "fct-type": "type",
        "title": "NamedRewriteRules"
      },
      "index": {
        "description": "Rewrite rules along with their names",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "NamedRewriteRules",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Named Rewrite Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:Simplifier",
      "description": {
        "fct-descr": "\u003cp\u003eSpecification of how to simplify a core program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Simplifier",
        "fct-type": "data",
        "title": "Simplifier"
      },
      "index": {
        "description": "Specification of how to simplify core program",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Simplifier",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Simplifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:Transform",
      "description": {
        "fct-descr": "\u003cp\u003eIndividual transforms to apply during simplification.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "data",
        "title": "Transform"
      },
      "index": {
        "description": "Individual transforms to apply during simplification",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Transform",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:TransformInfo",
      "description": {
        "fct-descr": "\u003cp\u003eExistential package for a typeable thing,\n   used in \u003ccode\u003e\u003ca\u003eTransformResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformInfo",
        "fct-type": "data",
        "title": "TransformInfo"
      },
      "index": {
        "description": "Existential package for typeable thing used in TransformResult",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "TransformInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:TransformResult",
      "description": {
        "fct-descr": "\u003cp\u003ePackage up the result of applying a single transform.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "data",
        "title": "TransformResult"
      },
      "index": {
        "description": "Package up the result of applying single transform",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "TransformResult",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Anonymize",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite named binders to anonymous deBruijn binders.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Anonymize",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Anonymize"
      },
      "index": {
        "description": "Rewrite named binders to anonymous deBruijn binders",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Anonymize",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Anonymize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Beta",
      "description": {
        "fct-descr": "\u003cp\u003ePerform beta reduction when the argument is not a redex.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Beta Config",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Beta"
      },
      "index": {
        "description": "Perform beta reduction when the argument is not redex",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Beta",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Beta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Bubble",
      "description": {
        "fct-descr": "\u003cp\u003eFloat casts outwards.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bubble",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Bubble"
      },
      "index": {
        "description": "Float casts outwards",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Bubble",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Bubble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Elaborate",
      "description": {
        "fct-descr": "\u003cp\u003eElaborate possible Const and Distinct witnesses that aren't\n   otherwise in the program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Elaborate",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Elaborate"
      },
      "index": {
        "description": "Elaborate possible Const and Distinct witnesses that aren otherwise in the program",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Elaborate",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Elaborate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Eta",
      "description": {
        "fct-descr": "\u003cp\u003ePerform eta expansion and reduction.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Eta Config",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Eta"
      },
      "index": {
        "description": "Perform eta expansion and reduction",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Eta",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Eta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Fix",
      "description": {
        "fct-descr": "\u003cp\u003eKeep applying a transform until it reports that further\n   applications won't be helpful, bailing out after a maximum number\n   of applications.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Fix Int (Simplifier s a n)",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Simplifier",
        "fct-type": "function",
        "title": "Fix"
      },
      "index": {
        "description": "Keep applying transform until it reports that further applications won be helpful bailing out after maximum number of applications",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Fix",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Flatten",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten nested let and case expressions.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Flatten",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Flatten"
      },
      "index": {
        "description": "Flatten nested let and case expressions",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Flatten",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Flatten",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Forward",
      "description": {
        "fct-descr": "\u003cp\u003eFloat single-use bindings forward into their use sites.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Forward",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Forward"
      },
      "index": {
        "description": "Float single-use bindings forward into their use sites",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Forward",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Id",
      "description": {
        "fct-descr": "\u003cp\u003eThe Identity transform returns the original program unharmed.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Id",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Id"
      },
      "index": {
        "description": "The Identity transform returns the original program unharmed",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Id",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Inline",
      "description": {
        "fct-descr": "\u003cp\u003eInline definitions into their use sites.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Inline",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Inline"
      },
      "index": {
        "description": "Inline definitions into their use sites",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Inline",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Namify",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite anonymous binders to fresh named binders.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Namify",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Namify"
      },
      "index": {
        "description": "Rewrite anonymous binders to fresh named binders",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Namify",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Namify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Prune",
      "description": {
        "fct-descr": "\u003cp\u003eRemove unused, pure let bindings.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Prune",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Prune"
      },
      "index": {
        "description": "Remove unused pure let bindings",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Prune",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Prune",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Rewrite",
      "description": {
        "fct-descr": "\u003cp\u003eApply general rule-based rewrites.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Rewrite",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Rewrite"
      },
      "index": {
        "description": "Apply general rule-based rewrites",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Rewrite",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rewrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Seq",
      "description": {
        "fct-descr": "\u003cp\u003eApply two simplifiers in sequence.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Seq (Simplifier s a n) (Simplifier s a n)",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Simplifier",
        "fct-type": "function",
        "title": "Seq"
      },
      "index": {
        "description": "Apply two simplifiers in sequence",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Seq",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Snip",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce let-bindings for nested applications.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Snip Config",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "Snip"
      },
      "index": {
        "description": "Introduce let-bindings for nested applications",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Snip",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Snip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Trans",
      "description": {
        "fct-descr": "\u003cp\u003eApply a single transform.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Trans (Transform s a n)",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Simplifier",
        "fct-type": "function",
        "title": "Trans"
      },
      "index": {
        "description": "Apply single transform",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "Trans",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:TransformInfo",
      "description": {
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "TransformInfo i",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformInfo",
        "fct-type": "function",
        "title": "TransformInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "TransformInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:TransformResult",
      "description": {
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "TransformResult",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "TransformResult"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "TransformResult",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:applySimplifier",
      "description": {
        "fct-descr": "\u003cp\u003eApply a simplifier to a module.\n\u003c/p\u003e\u003cp\u003eThe state monad can be used by \u003ccode\u003e\u003ca\u003eNamifier\u003c/a\u003e\u003c/code\u003e functions to generate fresh names.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Profile n-\u003e KindEnv n-\u003e TypeEnv n-\u003e Simplifier s a n-\u003e Module a n-\u003e State s (Module a n)",
        "fct-type": "function",
        "title": "applySimplifier"
      },
      "index": {
        "description": "Apply simplifier to module The state monad can be used by Namifier functions to generate fresh names",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "applySimplifier",
        "normalized": "Profile a-\u003eKindEnv a-\u003eTypeEnv a-\u003eSimplifier b c a-\u003eModule c a-\u003eState b(Module c a)",
        "package": "ddc-core-simpl",
        "partial": "Simplifier",
        "signature": "Profile n-\u003eKindEnv n-\u003eTypeEnv n-\u003eSimplifier s a n-\u003eModule a n-\u003eState s(Module a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:applySimplifierX",
      "description": {
        "fct-descr": "\u003cp\u003eApply a simplifier to an expression.\n\u003c/p\u003e\u003cp\u003eThe state monad can be used by \u003ccode\u003e\u003ca\u003eNamifier\u003c/a\u003e\u003c/code\u003e functions to generate fresh names.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Profile n-\u003e KindEnv n-\u003e TypeEnv n-\u003e Simplifier s a n-\u003e Exp a n-\u003e State s (TransformResult (Exp a n))",
        "fct-type": "function",
        "title": "applySimplifierX"
      },
      "index": {
        "description": "Apply simplifier to an expression The state monad can be used by Namifier functions to generate fresh names",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "applySimplifierX",
        "normalized": "Profile a-\u003eKindEnv a-\u003eTypeEnv a-\u003eSimplifier b c a-\u003eExp c a-\u003eState b(TransformResult(Exp c a))",
        "package": "ddc-core-simpl",
        "partial": "Simplifier",
        "signature": "Profile n-\u003eKindEnv n-\u003eTypeEnv n-\u003eSimplifier s a n-\u003eExp a n-\u003eState s(TransformResult(Exp a n))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eTransform result proper (eg the new module)\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "r",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Transform result proper eg the new module",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "result",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:resultAgain",
      "description": {
        "fct-descr": "\u003cp\u003eWhether it might help to run the same transform again.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e then a simplifier fixpoint won't apply this transform\n   again to the result program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bool",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "resultAgain"
      },
      "index": {
        "description": "Whether it might help to run the same transform again If False then simplifier fixpoint won apply this transform again to the result program",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "resultAgain",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Again",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:resultDone",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a default result with no transform again.\n\u003c/p\u003e\u003cp\u003eWe'll say we made progress, but set \u003ccode\u003e\u003ca\u003eresultAgain\u003c/a\u003e\u003c/code\u003e to False\n   so to stop any simplifier fixpoints.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "String -\u003e r -\u003e TransformResult r",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#resultDone",
        "fct-type": "function",
        "title": "resultDone"
      },
      "index": {
        "description": "Create default result with no transform again We ll say we made progress but set resultAgain to False so to stop any simplifier fixpoints",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "resultDone",
        "normalized": "String-\u003ea-\u003eTransformResult a",
        "package": "ddc-core-simpl",
        "partial": "Done",
        "signature": "String-\u003er-\u003eTransformResult r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:resultInfo",
      "description": {
        "fct-descr": "\u003cp\u003eTransform specific log. This might contain a count of what rules\n   fired, or information about what parts of the program couldn't\n   be processed.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "TransformInfo",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "resultInfo"
      },
      "index": {
        "description": "Transform specific log This might contain count of what rules fired or information about what parts of the program couldn be processed",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "resultInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:resultProgress",
      "description": {
        "fct-descr": "\u003cp\u003eWhether this transform made any progess.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e then the result program must be the same as the\n   input program, and a simplifer fixpoint won't apply this\n   transform again to the result program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bool",
        "fct-source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
        "fct-type": "function",
        "title": "resultProgress"
      },
      "index": {
        "description": "Whether this transform made any progess If False then the result program must be the same as the input program and simplifer fixpoint won apply this transform again to the result program",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "resultProgress",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:transInlineDef",
      "description": {
        "fct-descr": "\u003cp\u003eGet the unfolding for a named variable.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "InlinerTemplates a n",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "transInlineDef"
      },
      "index": {
        "description": "Get the unfolding for named variable",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "transInlineDef",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Inline Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:transMkNamifierT",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a namifier to make fresh type (level-1) \n   names that don't conflict with any already in this\n   environment.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Env n -\u003e Namifier s n",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "transMkNamifierT"
      },
      "index": {
        "description": "Create namifier to make fresh type level-1 names that don conflict with any already in this environment",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "transMkNamifierT",
        "normalized": "Env a-\u003eNamifier b a",
        "package": "ddc-core-simpl",
        "partial": "Mk Namifier",
        "signature": "Env n-\u003eNamifier s n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:transMkNamifierX",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a namifier to make fresh value or witness (level-0) \n   names that don't conflict with any already in this\n   environment.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Env n -\u003e Namifier s n",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "transMkNamifierX"
      },
      "index": {
        "description": "Create namifier to make fresh value or witness level-0 names that don conflict with any already in this environment",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "transMkNamifierX",
        "normalized": "Env a-\u003eNamifier b a",
        "package": "ddc-core-simpl",
        "partial": "Mk Namifier",
        "signature": "Env n-\u003eNamifier s n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:transRules",
      "description": {
        "fct-descr": "\u003cp\u003eList of rewrite rules along with their names.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Simplifier",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "NamedRewriteRules a n",
        "fct-source": "src/DDC-Core-Simplifier-Base.html#Transform",
        "fct-type": "function",
        "title": "transRules"
      },
      "index": {
        "description": "List of rewrite rules along with their names",
        "hierarchy": "DDC Core Simplifier",
        "module": "DDC.Core.Simplifier",
        "name": "transRules",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRewrite all binders to anonymous deBruijn form.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.AnonymizeX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-AnonymizeX.html",
        "fct-type": "module",
        "title": "AnonymizeX"
      },
      "index": {
        "description": "Rewrite all binders to anonymous deBruijn form",
        "hierarchy": "DDC Core Transform AnonymizeX",
        "module": "DDC.Core.Transform.AnonymizeX",
        "name": "AnonymizeX",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Anonymize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#t:AnonymizeX",
      "description": {
        "fct-module": "DDC.Core.Transform.AnonymizeX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "class",
        "fct-source": "src/DDC-Core-Transform-AnonymizeX.html#AnonymizeX",
        "fct-type": "class",
        "title": "AnonymizeX"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform AnonymizeX",
        "module": "DDC.Core.Transform.AnonymizeX",
        "name": "AnonymizeX",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Anonymize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#v:anonymizeWithX",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite all binders in a thing to be anonymous.\n   The stacks contains existing anonymous binders that we have entered into,\n   and named binders that we have rewritten. All bound occurrences of variables\n   will be replaced by references into these stacks.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.AnonymizeX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "anonymizeWithX",
        "fct-source": "src/DDC-Core-Transform-AnonymizeX.html#anonymizeWithX",
        "fct-type": "method",
        "title": "anonymizeWithX"
      },
      "index": {
        "description": "Rewrite all binders in thing to be anonymous The stacks contains existing anonymous binders that we have entered into and named binders that we have rewritten All bound occurrences of variables will be replaced by references into these stacks",
        "hierarchy": "DDC Core Transform AnonymizeX",
        "module": "DDC.Core.Transform.AnonymizeX",
        "name": "anonymizeWithX",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#v:anonymizeX",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite all binders in a thing to anonymous form.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.AnonymizeX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "c n -\u003e c n",
        "fct-source": "src/DDC-Core-Transform-AnonymizeX.html#anonymizeX",
        "fct-type": "function",
        "title": "anonymizeX"
      },
      "index": {
        "description": "Rewrite all binders in thing to anonymous form",
        "hierarchy": "DDC Core Transform AnonymizeX",
        "module": "DDC.Core.Transform.AnonymizeX",
        "name": "anonymizeX",
        "normalized": "a b-\u003ea b",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "c n-\u003ec n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#v:pushAnonymizeBindX",
      "description": {
        "fct-descr": "\u003cp\u003ePush a binding occurrence of a level-0 on the stack, \n   returning the anonyized binding occurrence and the new stack.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.AnonymizeX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Set n-\u003e [Bind n]-\u003e [Bind n]-\u003e Bind n-\u003e ([Bind n], Bind n)",
        "fct-type": "function",
        "title": "pushAnonymizeBindX"
      },
      "index": {
        "description": "Push binding occurrence of level-0 on the stack returning the anonyized binding occurrence and the new stack",
        "hierarchy": "DDC Core Transform AnonymizeX",
        "module": "DDC.Core.Transform.AnonymizeX",
        "name": "pushAnonymizeBindX",
        "normalized": "Set a-\u003e[Bind a]-\u003e[Bind a]-\u003eBind a-\u003e([Bind a],Bind a)",
        "package": "ddc-core-simpl",
        "partial": "Anonymize Bind",
        "signature": "Set n-\u003e[Bind n]-\u003e[Bind n]-\u003eBind n-\u003e([Bind n],Bind n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBeta-reduce applications of a explicit lambda abstractions \n   to variables and values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Beta.html",
        "fct-type": "module",
        "title": "Beta"
      },
      "index": {
        "description": "Beta-reduce applications of explicit lambda abstractions to variables and values",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "Beta",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Beta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#t:Config",
      "description": {
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#t:Info",
      "description": {
        "fct-descr": "\u003cp\u003eA summary of what the beta reduction transform did.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Info",
        "fct-type": "data",
        "title": "Info"
      },
      "index": {
        "description": "summary of what the beta reduction transform did",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "Info",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:Config",
      "description": {
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:Info",
      "description": {
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Info",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Info",
        "fct-type": "function",
        "title": "Info"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "Info",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:betaReduce",
      "description": {
        "fct-descr": "\u003cp\u003eBeta-reduce applications of a explicit lambda abstractions \n   to variables and values.\n\u003c/p\u003e\u003cp\u003eIf the flag is set then if we find a lambda abstraction that is applied\n   to a redex then let-bind the redex and substitute the new variable\n   instead.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config -\u003e c a n -\u003e TransformResult (c a n)",
        "fct-source": "src/DDC-Core-Transform-Beta.html#betaReduce",
        "fct-type": "function",
        "title": "betaReduce"
      },
      "index": {
        "description": "Beta-reduce applications of explicit lambda abstractions to variables and values If the flag is set then if we find lambda abstraction that is applied to redex then let-bind the redex and substitute the new variable instead",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "betaReduce",
        "normalized": "Config-\u003ea b c-\u003eTransformResult(a b c)",
        "package": "ddc-core-simpl",
        "partial": "Reduce",
        "signature": "Config-\u003ec a n-\u003eTransformResult(c a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:configBindRedexes",
      "description": {
        "fct-descr": "\u003cp\u003eIf we find a lambda abstraction applied to a redex then let-bind\n   the redex and substitute the new variable instead.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bool",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Config",
        "fct-type": "function",
        "title": "configBindRedexes"
      },
      "index": {
        "description": "If we find lambda abstraction applied to redex then let-bind the redex and substitute the new variable instead",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "configBindRedexes",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Bind Redexes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:configZero",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty beta configuration with all flags set to False.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config",
        "fct-source": "src/DDC-Core-Transform-Beta.html#configZero",
        "fct-type": "function",
        "title": "configZero"
      },
      "index": {
        "description": "Empty beta configuration with all flags set to False",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "configZero",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoTypes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of type applications reduced.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Info",
        "fct-type": "function",
        "title": "infoTypes"
      },
      "index": {
        "description": "Number of type applications reduced",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "infoTypes",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoValues",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of value applications reduced.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Info",
        "fct-type": "function",
        "title": "infoValues"
      },
      "index": {
        "description": "Number of value applications reduced",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "infoValues",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoValuesLetted",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of redexes let-bound.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Info",
        "fct-type": "function",
        "title": "infoValuesLetted"
      },
      "index": {
        "description": "Number of redexes let-bound",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "infoValuesLetted",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Values Letted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoValuesSkipped",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of applications that we couldn't reduce.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Info",
        "fct-type": "function",
        "title": "infoValuesSkipped"
      },
      "index": {
        "description": "Number of applications that we couldn reduce",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "infoValuesSkipped",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Values Skipped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoWits",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of witness applications reduced.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Beta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Transform-Beta.html#Info",
        "fct-type": "function",
        "title": "infoWits"
      },
      "index": {
        "description": "Number of witness applications reduced",
        "hierarchy": "DDC Core Transform Beta",
        "module": "DDC.Core.Transform.Beta",
        "name": "infoWits",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Wits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Bubble.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBubble casts outwards.\n   We float casts up and outwards so they are just inside the inner-most\n   enclosing let. This way the functions still have the same effect and\n   closure, but the casts don't get in the way of subsequent transforms.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Bubble",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Bubble.html",
        "fct-type": "module",
        "title": "Bubble"
      },
      "index": {
        "description": "Bubble casts outwards We float casts up and outwards so they are just inside the inner-most enclosing let This way the functions still have the same effect and closure but the casts don get in the way of subsequent transforms",
        "hierarchy": "DDC Core Transform Bubble",
        "module": "DDC.Core.Transform.Bubble",
        "name": "Bubble",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Bubble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Bubble.html#v:bubbleModule",
      "description": {
        "fct-descr": "\u003cp\u003eBubble casts outwards in a \u003ccode\u003e\u003ca\u003eModule\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Bubble",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Module a n -\u003e Module a n",
        "fct-source": "src/DDC-Core-Transform-Bubble.html#bubbleModule",
        "fct-type": "function",
        "title": "bubbleModule"
      },
      "index": {
        "description": "Bubble casts outwards in Module",
        "hierarchy": "DDC Core Transform Bubble",
        "module": "DDC.Core.Transform.Bubble",
        "name": "bubbleModule",
        "normalized": "Module a b-\u003eModule a b",
        "package": "ddc-core-simpl",
        "partial": "Module",
        "signature": "Module a n-\u003eModule a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Bubble.html#v:bubbleX",
      "description": {
        "fct-descr": "\u003cp\u003eBubble casts outwards in an \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Bubble",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e Exp a n",
        "fct-source": "src/DDC-Core-Transform-Bubble.html#bubbleX",
        "fct-type": "function",
        "title": "bubbleX"
      },
      "index": {
        "description": "Bubble casts outwards in an Exp",
        "hierarchy": "DDC Core Transform Bubble",
        "module": "DDC.Core.Transform.Bubble",
        "name": "bubbleX",
        "normalized": "KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eExp b a",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eExp a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Elaborate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdd possible Const and Distinct witnesses that aren't\n   otherwise in the program.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Elaborate",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Elaborate.html",
        "fct-type": "module",
        "title": "Elaborate"
      },
      "index": {
        "description": "Add possible Const and Distinct witnesses that aren otherwise in the program",
        "hierarchy": "DDC Core Transform Elaborate",
        "module": "DDC.Core.Transform.Elaborate",
        "name": "Elaborate",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Elaborate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Elaborate.html#v:elaborateModule",
      "description": {
        "fct-descr": "\u003cp\u003eElaborate witnesses in a module.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Elaborate",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Module a n -\u003e Module a n",
        "fct-source": "src/DDC-Core-Transform-Elaborate.html#elaborateModule",
        "fct-type": "function",
        "title": "elaborateModule"
      },
      "index": {
        "description": "Elaborate witnesses in module",
        "hierarchy": "DDC Core Transform Elaborate",
        "module": "DDC.Core.Transform.Elaborate",
        "name": "elaborateModule",
        "normalized": "Module a b-\u003eModule a b",
        "package": "ddc-core-simpl",
        "partial": "Module",
        "signature": "Module a n-\u003eModule a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Elaborate.html#v:elaborateX",
      "description": {
        "fct-descr": "\u003cp\u003eElaborate witnesses in an expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Elaborate",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Exp a n -\u003e Exp a n",
        "fct-source": "src/DDC-Core-Transform-Elaborate.html#elaborateX",
        "fct-type": "function",
        "title": "elaborateX"
      },
      "index": {
        "description": "Elaborate witnesses in an expression",
        "hierarchy": "DDC Core Transform Elaborate",
        "module": "DDC.Core.Transform.Elaborate",
        "name": "elaborateX",
        "normalized": "Exp a b-\u003eExp a b",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "Exp a n-\u003eExp a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#",
      "description": {
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Eta.html",
        "fct-type": "module",
        "title": "Eta"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "Eta",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Eta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#t:Config",
      "description": {
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Eta.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#t:Info",
      "description": {
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Eta.html#Info",
        "fct-type": "data",
        "title": "Info"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "Info",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:Config",
      "description": {
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config",
        "fct-source": "src/DDC-Core-Transform-Eta.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:Info",
      "description": {
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Info",
        "fct-source": "src/DDC-Core-Transform-Eta.html#Info",
        "fct-type": "function",
        "title": "Info"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "Info",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:configExpand",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bool",
        "fct-source": "src/DDC-Core-Transform-Eta.html#Config",
        "fct-type": "function",
        "title": "configExpand"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "configExpand",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Expand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:configZero",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty eta configuration with all flags set to False.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config",
        "fct-source": "src/DDC-Core-Transform-Eta.html#configZero",
        "fct-type": "function",
        "title": "configZero"
      },
      "index": {
        "description": "Empty eta configuration with all flags set to False",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "configZero",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:etaModule",
      "description": {
        "fct-descr": "\u003cp\u003eEta-transform expressions in a module.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config -\u003e Profile n -\u003e Module a n -\u003e TransformResult (Module a n)",
        "fct-source": "src/DDC-Core-Transform-Eta.html#etaModule",
        "fct-type": "function",
        "title": "etaModule"
      },
      "index": {
        "description": "Eta-transform expressions in module",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "etaModule",
        "normalized": "Config-\u003eProfile a-\u003eModule b a-\u003eTransformResult(Module b a)",
        "package": "ddc-core-simpl",
        "partial": "Module",
        "signature": "Config-\u003eProfile n-\u003eModule a n-\u003eTransformResult(Module a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:etaX",
      "description": {
        "fct-descr": "\u003cp\u003eEta-transform an expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config-\u003e Profile n-\u003e KindEnv n-\u003e TypeEnv n-\u003e Exp a n-\u003e TransformResult (Exp a n)",
        "fct-type": "function",
        "title": "etaX"
      },
      "index": {
        "description": "Eta-transform an expression",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "etaX",
        "normalized": "Config-\u003eProfile a-\u003eKindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eTransformResult(Exp b a)",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "Config-\u003eProfile n-\u003eKindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eTransformResult(Exp a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:infoExpandedXLAMs",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of level-1 lambdas added.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Transform-Eta.html#Info",
        "fct-type": "function",
        "title": "infoExpandedXLAMs"
      },
      "index": {
        "description": "Number of level-1 lambdas added",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "infoExpandedXLAMs",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Expanded XLAMs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:infoExpandedXLams",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of level-0 lambdas added. \n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Eta",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Transform-Eta.html#Info",
        "fct-type": "function",
        "title": "infoExpandedXLams"
      },
      "index": {
        "description": "Number of level-0 lambdas added",
        "hierarchy": "DDC Core Transform Eta",
        "module": "DDC.Core.Transform.Eta",
        "name": "infoExpandedXLams",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Expanded XLams",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Flatten.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFlattening nested let and case expressions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Flatten",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Flatten.html",
        "fct-type": "module",
        "title": "Flatten"
      },
      "index": {
        "description": "Flattening nested let and case expressions",
        "hierarchy": "DDC Core Transform Flatten",
        "module": "DDC.Core.Transform.Flatten",
        "name": "Flatten",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Flatten",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Flatten.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten binding structure in a thing.\n\u003c/p\u003e\u003cp\u003eFlattens nested let-expressions, \n   and single alternative let-case expressions. \n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Flatten",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "c a n -\u003e c a n",
        "fct-source": "src/DDC-Core-Transform-Flatten.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "Flatten binding structure in thing Flattens nested let-expressions and single alternative let-case expressions",
        "hierarchy": "DDC Core Transform Flatten",
        "module": "DDC.Core.Transform.Flatten",
        "name": "flatten",
        "normalized": "a b c-\u003ea b c",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "c a n-\u003ec a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFloat let-bindings with a single use forward into their use-sites.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Forward.html",
        "fct-type": "module",
        "title": "Forward"
      },
      "index": {
        "description": "Float let-bindings with single use forward into their use-sites",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "Forward",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#t:Config",
      "description": {
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Forward.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#t:FloatControl",
      "description": {
        "fct-descr": "\u003cp\u003eFine control over what should be floated.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Forward.html#FloatControl",
        "fct-type": "data",
        "title": "FloatControl"
      },
      "index": {
        "description": "Fine control over what should be floated",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "FloatControl",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Float Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#t:ForwardInfo",
      "description": {
        "fct-descr": "\u003cp\u003eSummary of number of bindings floated.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
        "fct-type": "data",
        "title": "ForwardInfo"
      },
      "index": {
        "description": "Summary of number of bindings floated",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "ForwardInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Forward Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:Config",
      "description": {
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config",
        "fct-source": "src/DDC-Core-Transform-Forward.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:FloatAllow",
      "description": {
        "fct-descr": "\u003cp\u003eAllow binding to be floated, but don't require it.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "FloatAllow",
        "fct-source": "src/DDC-Core-Transform-Forward.html#FloatControl",
        "fct-type": "function",
        "title": "FloatAllow"
      },
      "index": {
        "description": "Allow binding to be floated but don require it",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "FloatAllow",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Float Allow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:FloatDeny",
      "description": {
        "fct-descr": "\u003cp\u003ePrevent a binding being floated, at all times.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "FloatDeny",
        "fct-source": "src/DDC-Core-Transform-Forward.html#FloatControl",
        "fct-type": "function",
        "title": "FloatDeny"
      },
      "index": {
        "description": "Prevent binding being floated at all times",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "FloatDeny",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Float Deny",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:FloatForce",
      "description": {
        "fct-descr": "\u003cp\u003eForce   a binding to be floated, at all times.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "FloatForce",
        "fct-source": "src/DDC-Core-Transform-Forward.html#FloatControl",
        "fct-type": "function",
        "title": "FloatForce"
      },
      "index": {
        "description": "Force binding to be floated at all times",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "FloatForce",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Float Force",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:ForwardInfo",
      "description": {
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "ForwardInfo",
        "fct-source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
        "fct-type": "function",
        "title": "ForwardInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "ForwardInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Forward Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:configFloatControl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Lets a n -\u003e FloatControl",
        "fct-source": "src/DDC-Core-Transform-Forward.html#Config",
        "fct-type": "function",
        "title": "configFloatControl"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "configFloatControl",
        "normalized": "Lets a b-\u003eFloatControl",
        "package": "ddc-core-simpl",
        "partial": "Float Control",
        "signature": "Lets a n-\u003eFloatControl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:configFloatLetBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bool",
        "fct-source": "src/DDC-Core-Transform-Forward.html#Config",
        "fct-type": "function",
        "title": "configFloatLetBody"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "configFloatLetBody",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Float Let Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:forwardModule",
      "description": {
        "fct-descr": "\u003cp\u003eFloat let-bindings in a module with a single use forward into\n   their use sites.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Profile n-\u003e Config a n-\u003e Module a n-\u003e TransformResult (Module a n)",
        "fct-type": "function",
        "title": "forwardModule"
      },
      "index": {
        "description": "Float let-bindings in module with single use forward into their use sites",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "forwardModule",
        "normalized": "Profile a-\u003eConfig b a-\u003eModule b a-\u003eTransformResult(Module b a)",
        "package": "ddc-core-simpl",
        "partial": "Module",
        "signature": "Profile n-\u003eConfig a n-\u003eModule a n-\u003eTransformResult(Module a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:forwardX",
      "description": {
        "fct-descr": "\u003cp\u003eFloat let-bindings in an expression with a single use forward into\n   their use-sites.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Profile n-\u003e Config a n-\u003e Exp a n-\u003e TransformResult (Exp a n)",
        "fct-type": "function",
        "title": "forwardX"
      },
      "index": {
        "description": "Float let-bindings in an expression with single use forward into their use-sites",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "forwardX",
        "normalized": "Profile a-\u003eConfig b a-\u003eExp b a-\u003eTransformResult(Exp b a)",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "Profile n-\u003eConfig a n-\u003eExp a n-\u003eTransformResult(Exp a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:infoBindings",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of bindings floated forwards.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "!Int",
        "fct-source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
        "fct-type": "function",
        "title": "infoBindings"
      },
      "index": {
        "description": "Number of bindings floated forwards",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "infoBindings",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Bindings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:infoInspected",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of bindings inspected.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "!Int",
        "fct-source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
        "fct-type": "function",
        "title": "infoInspected"
      },
      "index": {
        "description": "Number of bindings inspected",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "infoInspected",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Inspected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:infoSubsts",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of trivial \u003ccode\u003ev1 = v2\u003c/code\u003e bindings inlined.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Forward",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "!Int",
        "fct-source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
        "fct-type": "function",
        "title": "infoSubsts"
      },
      "index": {
        "description": "Number of trivial v1 v2 bindings inlined",
        "hierarchy": "DDC Core Transform Forward",
        "module": "DDC.Core.Transform.Forward",
        "name": "infoSubsts",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Substs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInlining definitions into their use sites.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Inline",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Inline.html",
        "fct-type": "module",
        "title": "Inline"
      },
      "index": {
        "description": "Inlining definitions into their use sites",
        "hierarchy": "DDC Core Transform Inline",
        "module": "DDC.Core.Transform.Inline",
        "name": "Inline",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#t:InlineSpec",
      "description": {
        "fct-descr": "\u003cp\u003eInlining specification says what bindings we should inline\n   from a particular module.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Inline",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
        "fct-type": "data",
        "title": "InlineSpec"
      },
      "index": {
        "description": "Inlining specification says what bindings we should inline from particular module",
        "hierarchy": "DDC Core Transform Inline",
        "module": "DDC.Core.Transform.Inline",
        "name": "InlineSpec",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Inline Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:InlineSpecAll",
      "description": {
        "fct-descr": "\u003cp\u003eInline all bindings from a module,\n   but exclude some particulars.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Inline",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "InlineSpecAll",
        "fct-source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
        "fct-type": "function",
        "title": "InlineSpecAll"
      },
      "index": {
        "description": "Inline all bindings from module but exclude some particulars",
        "hierarchy": "DDC Core Transform Inline",
        "module": "DDC.Core.Transform.Inline",
        "name": "InlineSpecAll",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Inline Spec All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:InlineSpecNone",
      "description": {
        "fct-descr": "\u003cp\u003eInline no bindings from a module,\n   but include some particulars.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Inline",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "InlineSpecNone",
        "fct-source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
        "fct-type": "function",
        "title": "InlineSpecNone"
      },
      "index": {
        "description": "Inline no bindings from module but include some particulars",
        "hierarchy": "DDC Core Transform Inline",
        "module": "DDC.Core.Transform.Inline",
        "name": "InlineSpecNone",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Inline Spec None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:inline",
      "description": {
        "fct-module": "DDC.Core.Transform.Inline",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(n -\u003e Maybe (Exp a n))-\u003e Set n-\u003e c a n-\u003e c a n",
        "fct-type": "function",
        "title": "inline"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Inline",
        "module": "DDC.Core.Transform.Inline",
        "name": "inline",
        "normalized": "(a-\u003eMaybe(Exp b a))-\u003eSet a-\u003ec b a-\u003ec b a",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "(n-\u003eMaybe(Exp a n))-\u003eSet n-\u003ec a n-\u003ec a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:inlineSpecExclude",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Inline",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Set n",
        "fct-source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
        "fct-type": "function",
        "title": "inlineSpecExclude"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Inline",
        "module": "DDC.Core.Transform.Inline",
        "name": "inlineSpecExclude",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Spec Exclude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:inlineSpecInclude",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Inline",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Set n",
        "fct-source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
        "fct-type": "function",
        "title": "inlineSpecInclude"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Inline",
        "module": "DDC.Core.Transform.Inline",
        "name": "inlineSpecInclude",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Spec Include",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:inlineSpecModuleName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Inline",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "ModuleName",
        "fct-source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
        "fct-type": "function",
        "title": "inlineSpecModuleName"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Inline",
        "module": "DDC.Core.Transform.Inline",
        "name": "inlineSpecModuleName",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Spec Module Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:lookupTemplateFromModules",
      "description": {
        "fct-descr": "\u003cp\u003eLookup an inliner template from a list of modules.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Inline",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Map ModuleName (InlineSpec n)-\u003e [Module a n]-\u003e n-\u003e Maybe (Exp a n)",
        "fct-type": "function",
        "title": "lookupTemplateFromModules"
      },
      "index": {
        "description": "Lookup an inliner template from list of modules",
        "hierarchy": "DDC Core Transform Inline",
        "module": "DDC.Core.Transform.Inline",
        "name": "lookupTemplateFromModules",
        "normalized": "Map ModuleName(InlineSpec a)-\u003e[Module b a]-\u003ea-\u003eMaybe(Exp b a)",
        "package": "ddc-core-simpl",
        "partial": "Template From Modules",
        "signature": "Map ModuleName(InlineSpec n)-\u003e[Module a n]-\u003en-\u003eMaybe(Exp a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRewriting of anonymous binders to named binders.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Namify.html",
        "fct-type": "module",
        "title": "Namify"
      },
      "index": {
        "description": "Rewriting of anonymous binders to named binders",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "Namify",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Namify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#t:Namifier",
      "description": {
        "fct-descr": "\u003cp\u003eHolds a function to rename binders, \n   and the state of the renamer as we decend into the tree.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Namify.html#Namifier",
        "fct-type": "data",
        "title": "Namifier"
      },
      "index": {
        "description": "Holds function to rename binders and the state of the renamer as we decend into the tree",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "Namifier",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Namifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#t:Namify",
      "description": {
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "class",
        "fct-source": "src/DDC-Core-Transform-Namify.html#Namify",
        "fct-type": "class",
        "title": "Namify"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "Namify",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Namify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:Namifier",
      "description": {
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Namifier",
        "fct-source": "src/DDC-Core-Transform-Namify.html#Namifier",
        "fct-type": "function",
        "title": "Namifier"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "Namifier",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Namifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:makeNamifier",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new namifier.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(Env n -\u003e Bind n -\u003e State s n)-\u003e Env n-\u003e Namifier s n",
        "fct-type": "function",
        "title": "makeNamifier"
      },
      "index": {
        "description": "Construct new namifier",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "makeNamifier",
        "normalized": "(Env a-\u003eBind a-\u003eState b a)-\u003eEnv a-\u003eNamifier b a",
        "package": "ddc-core-simpl",
        "partial": "Namifier",
        "signature": "(Env n-\u003eBind n-\u003eState s n)-\u003eEnv n-\u003eNamifier s n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namifierEnv",
      "description": {
        "fct-descr": "\u003cp\u003eHolds the current environment during namification.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Env n",
        "fct-source": "src/DDC-Core-Transform-Namify.html#Namifier",
        "fct-type": "function",
        "title": "namifierEnv"
      },
      "index": {
        "description": "Holds the current environment during namification",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "namifierEnv",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namifierNew",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new name for this bind that is not in the given\n   environment.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Env n -\u003e Bind n -\u003e State s n",
        "fct-source": "src/DDC-Core-Transform-Namify.html#Namifier",
        "fct-type": "function",
        "title": "namifierNew"
      },
      "index": {
        "description": "Create new name for this bind that is not in the given environment",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "namifierNew",
        "normalized": "Env a-\u003eBind a-\u003eState b a",
        "package": "ddc-core-simpl",
        "partial": "New",
        "signature": "Env n-\u003eBind n-\u003eState s n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namifierStack",
      "description": {
        "fct-descr": "\u003cp\u003eStack of debruijn binders that have been rewritten during\n   namification.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Bind n]",
        "fct-source": "src/DDC-Core-Transform-Namify.html#Namifier",
        "fct-type": "function",
        "title": "namifierStack"
      },
      "index": {
        "description": "Stack of debruijn binders that have been rewritten during namification",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "namifierStack",
        "normalized": "[Bind a]",
        "package": "ddc-core-simpl",
        "partial": "Stack",
        "signature": "[Bind n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namify",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite anonymous binders to named binders in a thing.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "namify",
        "fct-source": "src/DDC-Core-Transform-Namify.html#namify",
        "fct-type": "method",
        "title": "namify"
      },
      "index": {
        "description": "Rewrite anonymous binders to named binders in thing",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "namify",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namifyUnique",
      "description": {
        "fct-descr": "\u003cp\u003eNamify a thing, \n   not reusing names already in the program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Namify",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(KindEnv n -\u003e Namifier s n)-\u003e (TypeEnv n -\u003e Namifier s n)-\u003e c n-\u003e State s (c n)",
        "fct-type": "function",
        "title": "namifyUnique"
      },
      "index": {
        "description": "Namify thing not reusing names already in the program",
        "hierarchy": "DDC Core Transform Namify",
        "module": "DDC.Core.Transform.Namify",
        "name": "namifyUnique",
        "normalized": "(KindEnv a-\u003eNamifier b a)-\u003e(TypeEnv a-\u003eNamifier b a)-\u003ec a-\u003eState b(c a)",
        "package": "ddc-core-simpl",
        "partial": "Unique",
        "signature": "(KindEnv n-\u003eNamifier s n)-\u003e(TypeEnv n-\u003eNamifier s n)-\u003ec n-\u003eState s(c n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eErase contained let-bindings that have no uses.\n\u003c/p\u003e\u003cp\u003eContained bindings are ones that do not perform effects that are\n   visible to anything in the calling context. This includes allocation\n   and read effects, but not writes or any globally visible effects.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Prune",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Prune.html",
        "fct-type": "module",
        "title": "Prune"
      },
      "index": {
        "description": "Erase contained let-bindings that have no uses Contained bindings are ones that do not perform effects that are visible to anything in the calling context This includes allocation and read effects but not writes or any globally visible effects",
        "hierarchy": "DDC Core Transform Prune",
        "module": "DDC.Core.Transform.Prune",
        "name": "Prune",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Prune",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#t:PruneInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA summary of what the prune transform did.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Prune",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Prune.html#PruneInfo",
        "fct-type": "data",
        "title": "PruneInfo"
      },
      "index": {
        "description": "summary of what the prune transform did",
        "hierarchy": "DDC Core Transform Prune",
        "module": "DDC.Core.Transform.Prune",
        "name": "PruneInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Prune Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#v:PruneInfo",
      "description": {
        "fct-module": "DDC.Core.Transform.Prune",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "PruneInfo",
        "fct-source": "src/DDC-Core-Transform-Prune.html#PruneInfo",
        "fct-type": "function",
        "title": "PruneInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Prune",
        "module": "DDC.Core.Transform.Prune",
        "name": "PruneInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Prune Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#v:infoBindingsErased",
      "description": {
        "fct-descr": "\u003cp\u003eHow many let-bindings we erased.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Prune",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Transform-Prune.html#PruneInfo",
        "fct-type": "function",
        "title": "infoBindingsErased"
      },
      "index": {
        "description": "How many let-bindings we erased",
        "hierarchy": "DDC Core Transform Prune",
        "module": "DDC.Core.Transform.Prune",
        "name": "infoBindingsErased",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Bindings Erased",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#v:pruneModule",
      "description": {
        "fct-descr": "\u003cp\u003eErase pure let-bindings in a module that have no uses.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Prune",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Profile n-\u003e Module a n-\u003e Module a n",
        "fct-type": "function",
        "title": "pruneModule"
      },
      "index": {
        "description": "Erase pure let-bindings in module that have no uses",
        "hierarchy": "DDC Core Transform Prune",
        "module": "DDC.Core.Transform.Prune",
        "name": "pruneModule",
        "normalized": "Profile a-\u003eModule b a-\u003eModule b a",
        "package": "ddc-core-simpl",
        "partial": "Module",
        "signature": "Profile n-\u003eModule a n-\u003eModule a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#v:pruneX",
      "description": {
        "fct-descr": "\u003cp\u003eErase pure let-bindings in an expression that have no uses.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Prune",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Profile n-\u003e KindEnv n-\u003e TypeEnv n-\u003e Exp a n-\u003e TransformResult (Exp a n)",
        "fct-type": "function",
        "title": "pruneX"
      },
      "index": {
        "description": "Erase pure let-bindings in an expression that have no uses",
        "hierarchy": "DDC Core Transform Prune",
        "module": "DDC.Core.Transform.Prune",
        "name": "pruneX",
        "normalized": "Profile a-\u003eKindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eTransformResult(Exp b a)",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "Profile n-\u003eKindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eTransformResult(Exp a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Disjoint.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCheck whether two effects are non-interfering\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Disjoint",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Disjoint.html",
        "fct-type": "module",
        "title": "Disjoint"
      },
      "index": {
        "description": "Check whether two effects are non-interfering",
        "hierarchy": "DDC Core Transform Rewrite Disjoint",
        "module": "DDC.Core.Transform.Rewrite.Disjoint",
        "name": "Disjoint",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Disjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Disjoint.html#v:checkDisjoint",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a disjointness property is true in the given\n   rewrite environment.\n\u003c/p\u003e\u003cp\u003eDisjointness means that two effects do not interfere.\n\u003c/p\u003e\u003cp\u003eContext is important because if two regions are known to be\n   distinct, reading from one and writing to another is valid.\n   If they have different names they may not be distinct.\n\u003c/p\u003e\u003cp\u003eAll read effects are disjoint with other reads.\n\u003c/p\u003e\u003cpre\u003e Disjoint (Read r1) (Read r2)\n Disjoint (Read r1) (DeepRead a)\n\u003c/pre\u003e\u003cp\u003eAllocation effects are disjoint with everything.\n\u003c/p\u003e\u003cpre\u003e Disjoint (Alloc r) (_)\n\u003c/pre\u003e\u003cp\u003eAtomic reads and write effects are disjoint if they are to distinct regions.\n\u003c/p\u003e\u003cpre\u003e         Distinct r1 r2\n -----------------------------\n Disjoint (Read r1) (Write r2)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eDeepWrite\u003c/code\u003e effects are only disjoint with allocation effects, because\n   we don't know what regions it will write to.\n\u003c/p\u003e\u003cp\u003eAn effect sum is disjoint from some other effect if all its components are.\n\u003c/p\u003e\u003cpre\u003e Disjoint f1 g /\\ Disjoint f2 g\n -----------------------------\n      Disjoint (f1 + f2) g\n\u003c/pre\u003e\u003cp\u003eDisjointness is commutative.\n\u003c/p\u003e\u003cpre\u003e Disjoint f g\n ------------\n Disjoint g f\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e  checkDisjoint\n\t(Disjoint (Read r1 + Read r2) (Write r3))\n\t[Distinct r1 r3, Distinct r2 r3]\n  = True\n\u003c/pre\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Disjoint",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Type n-\u003e RewriteEnv a n-\u003e Bool",
        "fct-type": "function",
        "title": "checkDisjoint"
      },
      "index": {
        "description": "Check whether disjointness property is true in the given rewrite environment Disjointness means that two effects do not interfere Context is important because if two regions are known to be distinct reading from one and writing to another is valid If they have different names they may not be distinct All read effects are disjoint with other reads Disjoint Read r1 Read r2 Disjoint Read r1 DeepRead Allocation effects are disjoint with everything Disjoint Alloc Atomic reads and write effects are disjoint if they are to distinct regions Distinct r1 r2 Disjoint Read r1 Write r2 DeepWrite effects are only disjoint with allocation effects because we don know what regions it will write to An effect sum is disjoint from some other effect if all its components are Disjoint f1 Disjoint f2 Disjoint f1 f2 Disjointness is commutative Disjoint Disjoint Example checkDisjoint Disjoint Read r1 Read r2 Write r3 Distinct r1 r3 Distinct r2 r3 True",
        "hierarchy": "DDC Core Transform Rewrite Disjoint",
        "module": "DDC.Core.Transform.Rewrite.Disjoint",
        "name": "checkDisjoint",
        "normalized": "Type a-\u003eRewriteEnv b a-\u003eBool",
        "package": "ddc-core-simpl",
        "partial": "Disjoint",
        "signature": "Type n-\u003eRewriteEnv a n-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Disjoint.html#v:checkDistinct",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a distintness property is true in the given \n   rewrite environment.\n\u003c/p\u003e\u003cp\u003eDistinctness means that two regions do not alias.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Disjoint",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Type n-\u003e RewriteEnv a n-\u003e Bool",
        "fct-type": "function",
        "title": "checkDistinct"
      },
      "index": {
        "description": "Check whether distintness property is true in the given rewrite environment Distinctness means that two regions do not alias",
        "hierarchy": "DDC Core Transform Rewrite Disjoint",
        "module": "DDC.Core.Transform.Rewrite.Disjoint",
        "name": "checkDistinct",
        "normalized": "Type a-\u003eRewriteEnv b a-\u003eBool",
        "package": "ddc-core-simpl",
        "partial": "Distinct",
        "signature": "Type n-\u003eRewriteEnv a n-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#",
      "description": {
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html",
        "fct-type": "module",
        "title": "Env"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "Env",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#t:RewriteEnv",
      "description": {
        "fct-descr": "\u003cp\u003eA summary of the environment that we perform a rewrite in.\n\u003c/p\u003e\u003cp\u003eAs we decend into the program looking for expressions to rewrite, \n   we keep track of what information as been defined in the environment\n   in a \u003ccode\u003e\u003ca\u003eRewriteEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen we go under an anonymous binder then we push a new outermost\n   list instead of lifting every element on the environment eagerly.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#RewriteEnv",
        "fct-type": "data",
        "title": "RewriteEnv"
      },
      "index": {
        "description": "summary of the environment that we perform rewrite in As we decend into the program looking for expressions to rewrite we keep track of what information as been defined in the environment in RewriteEnv When we go under an anonymous binder then we push new outermost list instead of lifting every element on the environment eagerly",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "RewriteEnv",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rewrite Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:containsRegion",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether an environment contains the given region, \n   bound by a letregion.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bound n -\u003e RewriteEnv a n -\u003e Bool",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#containsRegion",
        "fct-type": "function",
        "title": "containsRegion"
      },
      "index": {
        "description": "Check whether an environment contains the given region bound by letregion",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "containsRegion",
        "normalized": "Bound a-\u003eRewriteEnv b a-\u003eBool",
        "package": "ddc-core-simpl",
        "partial": "Region",
        "signature": "Bound n-\u003eRewriteEnv a n-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:containsWitness",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the witness map in the given environment.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Type n -\u003e RewriteEnv a n -\u003e Bool",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#containsWitness",
        "fct-type": "function",
        "title": "containsWitness"
      },
      "index": {
        "description": "Check if the witness map in the given environment",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "containsWitness",
        "normalized": "Type a-\u003eRewriteEnv b a-\u003eBool",
        "package": "ddc-core-simpl",
        "partial": "Witness",
        "signature": "Type n-\u003eRewriteEnv a n-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty environment.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "RewriteEnv a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty environment",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "empty",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:extend",
      "description": {
        "fct-descr": "\u003cp\u003eExtend an environment with some lambda-bound binder (XLam)\n   Might be a witness. Don't count if it's a region.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bind n -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#extend",
        "fct-type": "function",
        "title": "extend"
      },
      "index": {
        "description": "Extend an environment with some lambda-bound binder XLam Might be witness Don count if it region",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "extend",
        "normalized": "Bind a-\u003eRewriteEnv b a-\u003eRewriteEnv b a",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "Bind n-\u003eRewriteEnv a n-\u003eRewriteEnv a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:extendLets",
      "description": {
        "fct-descr": "\u003cp\u003eExtend an environment with the variables bount by these let-bindings.\n\u003c/p\u003e\u003cp\u003eIf it's a letregion, remember the region's name and any witnesses.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Lets a n -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#extendLets",
        "fct-type": "function",
        "title": "extendLets"
      },
      "index": {
        "description": "Extend an environment with the variables bount by these let-bindings If it letregion remember the region name and any witnesses",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "extendLets",
        "normalized": "Lets a b-\u003eRewriteEnv a b-\u003eRewriteEnv a b",
        "package": "ddc-core-simpl",
        "partial": "Lets",
        "signature": "Lets a n-\u003eRewriteEnv a n-\u003eRewriteEnv a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:getDef",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the definition of some let-bound variable from the environment.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bound n -\u003e RewriteEnv a n -\u003e Maybe (Exp a n)",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#getDef",
        "fct-type": "function",
        "title": "getDef"
      },
      "index": {
        "description": "Lookup the definition of some let-bound variable from the environment",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "getDef",
        "normalized": "Bound a-\u003eRewriteEnv b a-\u003eMaybe(Exp b a)",
        "package": "ddc-core-simpl",
        "partial": "Def",
        "signature": "Bound n-\u003eRewriteEnv a n-\u003eMaybe(Exp a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:getWitnesses",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all the witness types in an environment, \n   normalising their indices.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "RewriteEnv a n -\u003e [Type n]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#getWitnesses",
        "fct-type": "function",
        "title": "getWitnesses"
      },
      "index": {
        "description": "Get list of all the witness types in an environment normalising their indices",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "getWitnesses",
        "normalized": "RewriteEnv a b-\u003e[Type b]",
        "package": "ddc-core-simpl",
        "partial": "Witnesses",
        "signature": "RewriteEnv a n-\u003e[Type n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:hasDef",
      "description": {
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bound n -\u003e RewriteEnv a n -\u003e Bool",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#hasDef",
        "fct-type": "function",
        "title": "hasDef"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "hasDef",
        "normalized": "Bound a-\u003eRewriteEnv b a-\u003eBool",
        "package": "ddc-core-simpl",
        "partial": "Def",
        "signature": "Bound n-\u003eRewriteEnv a n-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:insertDef",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a rewrite definition into the environment.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bind n -\u003e Maybe (Exp a n) -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#insertDef",
        "fct-type": "function",
        "title": "insertDef"
      },
      "index": {
        "description": "Insert rewrite definition into the environment",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "insertDef",
        "normalized": "Bind a-\u003eMaybe(Exp b a)-\u003eRewriteEnv b a-\u003eRewriteEnv b a",
        "package": "ddc-core-simpl",
        "partial": "Def",
        "signature": "Bind n-\u003eMaybe(Exp a n)-\u003eRewriteEnv a n-\u003eRewriteEnv a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eRaise all elements in witness map if binder is anonymous.\n   Only call with type binders: ie XLAM, not XLam\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bind n -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "Raise all elements in witness map if binder is anonymous Only call with type binders ie XLAM not XLam",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "lift",
        "normalized": "Bind a-\u003eRewriteEnv b a-\u003eRewriteEnv b a",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "Bind n-\u003eRewriteEnv a n-\u003eRewriteEnv a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:liftValue",
      "description": {
        "fct-descr": "\u003cp\u003eRaise all elements in definitions map if binder is anonymous\n   Use for *value* binders, not type binders.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Env",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bind n -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Env.html#liftValue",
        "fct-type": "function",
        "title": "liftValue"
      },
      "index": {
        "description": "Raise all elements in definitions map if binder is anonymous Use for value binders not type binders",
        "hierarchy": "DDC Core Transform Rewrite Env",
        "module": "DDC.Core.Transform.Rewrite.Env",
        "name": "liftValue",
        "normalized": "Bind a-\u003eRewriteEnv b a-\u003eRewriteEnv b a",
        "package": "ddc-core-simpl",
        "partial": "Value",
        "signature": "Bind n-\u003eRewriteEnv a n-\u003eRewriteEnv a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Match.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate substitution to make (subst template) == target\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Match",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Match.html",
        "fct-type": "module",
        "title": "Match"
      },
      "index": {
        "description": "Create substitution to make subst template target",
        "hierarchy": "DDC Core Transform Rewrite Match",
        "module": "DDC.Core.Transform.Rewrite.Match",
        "name": "Match",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Match.html#t:SubstInfo",
      "description": {
        "fct-descr": "\u003cp\u003eValue and type substition.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Match",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "type",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Match.html#SubstInfo",
        "fct-type": "type",
        "title": "SubstInfo"
      },
      "index": {
        "description": "Value and type substition",
        "hierarchy": "DDC Core Transform Rewrite Match",
        "module": "DDC.Core.Transform.Rewrite.Match",
        "name": "SubstInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Subst Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Match.html#v:emptySubstInfo",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty substition info.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Match",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "SubstInfo a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Match.html#emptySubstInfo",
        "fct-type": "function",
        "title": "emptySubstInfo"
      },
      "index": {
        "description": "An empty substition info",
        "hierarchy": "DDC Core Transform Rewrite Match",
        "module": "DDC.Core.Transform.Rewrite.Match",
        "name": "emptySubstInfo",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Subst Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Match.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003eCreate substitution to make (subst template) == target\n   Does not handle higher-order templates (ie ones with binders)\n\u003c/p\u003e\u003cpre\u003e match emptySubstInfo (Set.fromList [r1, r2, s])\n   (stream [r1]  (unstream [r2]  s))\n   (stream [R0\u003ca name=\"] (unstream [R1\"/\u003e] (someStream 23))\n\n=\u003e { r1 |-\u003e R0#, r2 |-\u003e R1, s |-\u003e someStream 23 }\n\u003c/pre\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Match",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "SubstInfo a n-\u003e Set n-\u003e Exp a n-\u003e Exp a n-\u003e Maybe (SubstInfo a n)",
        "fct-type": "function",
        "title": "match"
      },
      "index": {
        "description": "Create substitution to make subst template target Does not handle higher-order templates ie ones with binders match emptySubstInfo Set.fromList r1 r2 stream r1 unstream r2 stream R0 someStream r1 R0 r2 R1 someStream",
        "hierarchy": "DDC Core Transform Rewrite Match",
        "module": "DDC.Core.Transform.Rewrite.Match",
        "name": "match",
        "normalized": "SubstInfo a b-\u003eSet b-\u003eExp a b-\u003eExp a b-\u003eMaybe(SubstInfo a b)",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "SubstInfo a n-\u003eSet n-\u003eExp a n-\u003eExp a n-\u003eMaybe(SubstInfo a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore language parser.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Core language parser",
        "hierarchy": "DDC Core Transform Rewrite Parser",
        "module": "DDC.Core.Transform.Rewrite.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Parser.html#v:pRule",
      "description": {
        "fct-descr": "\u003cp\u003eParse a rewrite rule.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Context -\u003e Parser n (RewriteRule SourcePos n)",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Parser.html#pRule",
        "fct-type": "function",
        "title": "pRule"
      },
      "index": {
        "description": "Parse rewrite rule",
        "hierarchy": "DDC Core Transform Rewrite Parser",
        "module": "DDC.Core.Transform.Rewrite.Parser",
        "name": "pRule",
        "normalized": "Context-\u003eParser a(RewriteRule SourcePos a)",
        "package": "ddc-core-simpl",
        "partial": "Rule",
        "signature": "Context-\u003eParser n(RewriteRule SourcePos n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Parser.html#v:pRuleMany",
      "description": {
        "fct-descr": "\u003cp\u003eParse many rewrite rules.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Parser",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Context -\u003e Parser n [(n, RewriteRule SourcePos n)]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Parser.html#pRuleMany",
        "fct-type": "function",
        "title": "pRuleMany"
      },
      "index": {
        "description": "Parse many rewrite rules",
        "hierarchy": "DDC Core Transform Rewrite Parser",
        "module": "DDC.Core.Transform.Rewrite.Parser",
        "name": "pRuleMany",
        "normalized": "Context-\u003eParser a[(a,RewriteRule SourcePos a)]",
        "package": "ddc-core-simpl",
        "partial": "Rule Many",
        "signature": "Context-\u003eParser n[(n,RewriteRule SourcePos n)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstructing and checking whether rewrite rules are valid\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html",
        "fct-type": "module",
        "title": "Rule"
      },
      "index": {
        "description": "Constructing and checking whether rewrite rules are valid",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "Rule",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:BindMode",
      "description": {
        "fct-descr": "\u003cp\u003eBinding level for the binders in a rewrite rule.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#BindMode",
        "fct-type": "data",
        "title": "BindMode"
      },
      "index": {
        "description": "Binding level for the binders in rewrite rule",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "BindMode",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Bind Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:Error",
      "description": {
        "fct-descr": "\u003cp\u003eWhat can go wrong when checking a rewrite rule.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "data",
        "title": "Error"
      },
      "index": {
        "description": "What can go wrong when checking rewrite rule",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "Error",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:NamedRewriteRule",
      "description": {
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "type",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#NamedRewriteRule",
        "fct-type": "type",
        "title": "NamedRewriteRule"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "NamedRewriteRule",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Named Rewrite Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:RewriteRule",
      "description": {
        "fct-descr": "\u003cp\u003eA rewrite rule. For example:\n\u003c/p\u003e\u003cpre\u003e RULE [r1 r2 r3 : %] (x : Int r1)\n      . addInt  [:r1 r2 r3:] x (0 [r2] ()\n      = copyInt [:r1 r3:]    x\n\u003c/pre\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "data",
        "title": "RewriteRule"
      },
      "index": {
        "description": "rewrite rule For example RULE r1 r2 r3 Int r1 addInt r1 r2 r3 r2 copyInt r1 r3",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "RewriteRule",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rewrite Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:Side",
      "description": {
        "fct-descr": "\u003cp\u003eWhat side of a rewrite rule we're talking about.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Side",
        "fct-type": "data",
        "title": "Side"
      },
      "index": {
        "description": "What side of rewrite rule we re talking about",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "Side",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Side",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:BMSpec",
      "description": {
        "fct-descr": "\u003cp\u003eLevel-1 binder (specs)\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "BMSpec",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#BindMode",
        "fct-type": "function",
        "title": "BMSpec"
      },
      "index": {
        "description": "Level-1 binder specs",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "BMSpec",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "BMSpec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:BMValue",
      "description": {
        "fct-descr": "\u003cp\u003enumber of usages\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "BMValue Int",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#BindMode",
        "fct-type": "function",
        "title": "BMValue"
      },
      "index": {
        "description": "number of usages",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "BMValue",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "BMValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorAnonymousBinder",
      "description": {
        "fct-descr": "\u003cp\u003eI don't want to deal with anonymous variables.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "ErrorAnonymousBinder",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorAnonymousBinder"
      },
      "index": {
        "description": "don want to deal with anonymous variables",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ErrorAnonymousBinder",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Error Anonymous Binder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorBadConstraint",
      "description": {
        "fct-descr": "\u003cp\u003eError typechecking one of the expressions\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "ErrorBadConstraint",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorBadConstraint"
      },
      "index": {
        "description": "Error typechecking one of the expressions",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ErrorBadConstraint",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Error Bad Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorNotFirstOrder",
      "description": {
        "fct-descr": "\u003cp\u003eNo binders allowed in left-hand side (right is fine, eg \u003ccode\u003elet\u003c/code\u003es)\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "ErrorNotFirstOrder",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorNotFirstOrder"
      },
      "index": {
        "description": "No binders allowed in left-hand side right is fine eg let",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ErrorNotFirstOrder",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Error Not First Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorTypeCheck",
      "description": {
        "fct-descr": "\u003cp\u003eError typechecking one of the expressions\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "ErrorTypeCheck",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorTypeCheck"
      },
      "index": {
        "description": "Error typechecking one of the expressions",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ErrorTypeCheck",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Error Type Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorTypeConflict",
      "description": {
        "fct-descr": "\u003cp\u003eTypes don't match...\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "ErrorTypeConflict",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorTypeConflict"
      },
      "index": {
        "description": "Types don match",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ErrorTypeConflict",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Error Type Conflict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorVarUnmentioned",
      "description": {
        "fct-descr": "\u003cp\u003eAll variables must be mentioned in left-hand side,\n   otherwise they won't get bound.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "ErrorVarUnmentioned",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "ErrorVarUnmentioned"
      },
      "index": {
        "description": "All variables must be mentioned in left-hand side otherwise they won get bound",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ErrorVarUnmentioned",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Error Var Unmentioned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:Lhs",
      "description": {
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Lhs",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Side",
        "fct-type": "function",
        "title": "Lhs"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "Lhs",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Lhs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:RewriteRule",
      "description": {
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "RewriteRule",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "RewriteRule"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "RewriteRule",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rewrite Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:Rhs",
      "description": {
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Rhs",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Side",
        "fct-type": "function",
        "title": "Rhs"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "Rhs",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rhs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:checkRewriteRule",
      "description": {
        "fct-descr": "\u003cp\u003eTake a rule, make sure it's valid and fill in type, closure and effect\n   information.\n\u003c/p\u003e\u003cp\u003eThe left-hand side of rule can't have any binders (lambdas, lets etc).\n\u003c/p\u003e\u003cp\u003eAll binders must appear in the left-hand side, otherwise they would match\n   with no value.\n\u003c/p\u003e\u003cp\u003eBoth sides must have the same types, but the right can have fewer effects\n   and smaller closure.\n\u003c/p\u003e\u003cp\u003eWe don't handle anonymous binders on either the left or right.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config n-\u003e Env n-\u003e Env n-\u003e RewriteRule a n-\u003e Either (Error a n) (RewriteRule (AnTEC a n) n)",
        "fct-type": "function",
        "title": "checkRewriteRule"
      },
      "index": {
        "description": "Take rule make sure it valid and fill in type closure and effect information The left-hand side of rule can have any binders lambdas lets etc All binders must appear in the left-hand side otherwise they would match with no value Both sides must have the same types but the right can have fewer effects and smaller closure We don handle anonymous binders on either the left or right",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "checkRewriteRule",
        "normalized": "Config a-\u003eEnv a-\u003eEnv a-\u003eRewriteRule b a-\u003eEither(Error b a)(RewriteRule(AnTEC b a)a)",
        "package": "ddc-core-simpl",
        "partial": "Rewrite Rule",
        "signature": "Config n-\u003eEnv n-\u003eEnv n-\u003eRewriteRule a n-\u003eEither(Error a n)(RewriteRule(AnTEC a n)n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorBinder",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bind n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "errorBinder"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "errorBinder",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Binder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorCheckError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Error a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "errorCheckError"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "errorCheckError",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Check Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorConstraint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Type n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "errorConstraint"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "errorConstraint",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorExp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Exp a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "errorExp"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "errorExp",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorSide",
      "description": {
        "fct-descr": "\u003cp\u003eWhat side of the rule the error was on.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Side",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "errorSide"
      },
      "index": {
        "description": "What side of the rule the error was on",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "errorSide",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Side",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorTypeLhs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(Type n, Effect n, Closure n)",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "errorTypeLhs"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "errorTypeLhs",
        "normalized": "(Type a,Effect a,Closure a)",
        "package": "ddc-core-simpl",
        "partial": "Type Lhs",
        "signature": "(Type n,Effect n,Closure n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorTypeRhs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(Type n, Effect n, Closure n)",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
        "fct-type": "function",
        "title": "errorTypeRhs"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "errorTypeRhs",
        "normalized": "(Type a,Effect a,Closure a)",
        "package": "ddc-core-simpl",
        "partial": "Type Rhs",
        "signature": "(Type n,Effect n,Closure n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:isBMSpec",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eBindMode\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eBMSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "BindMode -\u003e Bool",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#isBMSpec",
        "fct-type": "function",
        "title": "isBMSpec"
      },
      "index": {
        "description": "Check if BindMode is BMSpec",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "isBMSpec",
        "normalized": "BindMode-\u003eBool",
        "package": "ddc-core-simpl",
        "partial": "BMSpec",
        "signature": "BindMode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:isBMValue",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eBindMode\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eBMValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "BindMode -\u003e Bool",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#isBMValue",
        "fct-type": "function",
        "title": "isBMValue"
      },
      "index": {
        "description": "Check if BindMode is BMValue",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "isBMValue",
        "normalized": "BindMode-\u003eBool",
        "package": "ddc-core-simpl",
        "partial": "BMValue",
        "signature": "BindMode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:mkRewriteRule",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a rewrite rule, but do not check if it's valid.\n\u003c/p\u003e\u003cp\u003eYou then need to apply \u003ccode\u003e\u003ca\u003echeckRewriteRule\u003c/a\u003e\u003c/code\u003e to check it.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[(BindMode, Bind n)]-\u003e [Type n]-\u003e Exp a n-\u003e Maybe (Exp a n)-\u003e Exp a n-\u003e RewriteRule a n",
        "fct-type": "function",
        "title": "mkRewriteRule"
      },
      "index": {
        "description": "Construct rewrite rule but do not check if it valid You then need to apply checkRewriteRule to check it",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "mkRewriteRule",
        "normalized": "[(BindMode,Bind a)]-\u003e[Type a]-\u003eExp b a-\u003eMaybe(Exp b a)-\u003eExp b a-\u003eRewriteRule b a",
        "package": "ddc-core-simpl",
        "partial": "Rewrite Rule",
        "signature": "[(BindMode,Bind n)]-\u003e[Type n]-\u003eExp a n-\u003eMaybe(Exp a n)-\u003eExp a n-\u003eRewriteRule a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleBinds",
      "description": {
        "fct-descr": "\u003cp\u003eVariables bound by the rule.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[(BindMode, Bind n)]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleBinds"
      },
      "index": {
        "description": "Variables bound by the rule",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ruleBinds",
        "normalized": "[(BindMode,Bind a)]",
        "package": "ddc-core-simpl",
        "partial": "Binds",
        "signature": "[(BindMode,Bind n)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleConstraints",
      "description": {
        "fct-descr": "\u003cp\u003eExtra constraints on the rule.\n   These must all be satisfied for the rule to fire.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Type n]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleConstraints"
      },
      "index": {
        "description": "Extra constraints on the rule These must all be satisfied for the rule to fire",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ruleConstraints",
        "normalized": "[Type a]",
        "package": "ddc-core-simpl",
        "partial": "Constraints",
        "signature": "[Type n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleFreeVars",
      "description": {
        "fct-descr": "\u003cp\u003eReferences to environment. \n   Used to check whether the rule is shadowed.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Bound n]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleFreeVars"
      },
      "index": {
        "description": "References to environment Used to check whether the rule is shadowed",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ruleFreeVars",
        "normalized": "[Bound a]",
        "package": "ddc-core-simpl",
        "partial": "Free Vars",
        "signature": "[Bound n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleLeft",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-hand side of the rule.\n   We match on this part.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Exp a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleLeft"
      },
      "index": {
        "description": "Left-hand side of the rule We match on this part",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ruleLeft",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleLeftHole",
      "description": {
        "fct-descr": "\u003cp\u003eExtra part of left-hand side,\n   but allow this bit to be out-of-context.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Maybe (Exp a n)",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleLeftHole"
      },
      "index": {
        "description": "Extra part of left-hand side but allow this bit to be out-of-context",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ruleLeftHole",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Left Hole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleRight",
      "description": {
        "fct-descr": "\u003cp\u003eRight-hand side of the rule.\n   We replace the matched expression with this part.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Exp a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleRight"
      },
      "index": {
        "description": "Right-hand side of the rule We replace the matched expression with this part",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ruleRight",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleWeakClo",
      "description": {
        "fct-descr": "\u003cp\u003eClosure that the left has that is not present in the right.\n   When applying the rule we add a closure weakening to ensure\n   the rewritten expression has the same closure.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Exp a n]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleWeakClo"
      },
      "index": {
        "description": "Closure that the left has that is not present in the right When applying the rule we add closure weakening to ensure the rewritten expression has the same closure",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ruleWeakClo",
        "normalized": "[Exp a b]",
        "package": "ddc-core-simpl",
        "partial": "Weak Clo",
        "signature": "[Exp a n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleWeakEff",
      "description": {
        "fct-descr": "\u003cp\u003eEffects that are caused by the left but not the right.\n   When applying the rule we add an effect weakning to ensure\n   the rewritten expression has the same effects.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite.Rule",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Maybe (Effect n)",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleWeakEff"
      },
      "index": {
        "description": "Effects that are caused by the left but not the right When applying the rule we add an effect weakning to ensure the rewritten expression has the same effects",
        "hierarchy": "DDC Core Transform Rewrite Rule",
        "module": "DDC.Core.Transform.Rewrite.Rule",
        "name": "ruleWeakEff",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Weak Eff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApply rewrite rules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Rewrite.html",
        "fct-type": "module",
        "title": "Rewrite"
      },
      "index": {
        "description": "Apply rewrite rules",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "Rewrite",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rewrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#t:RewriteRule",
      "description": {
        "fct-descr": "\u003cp\u003eA rewrite rule. For example:\n\u003c/p\u003e\u003cpre\u003e RULE [r1 r2 r3 : %] (x : Int r1)\n      . addInt  [:r1 r2 r3:] x (0 [r2] ()\n      = copyInt [:r1 r3:]    x\n\u003c/pre\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "data",
        "title": "RewriteRule"
      },
      "index": {
        "description": "rewrite rule For example RULE r1 r2 r3 Int r1 addInt r1 r2 r3 r2 copyInt r1 r3",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "RewriteRule",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rewrite Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:RewriteRule",
      "description": {
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "RewriteRule",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "RewriteRule"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "RewriteRule",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Rewrite Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:rewriteModule",
      "description": {
        "fct-descr": "\u003cp\u003eApply rewrite rules to a module.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[NamedRewriteRule a n]-\u003e Module a n-\u003e Module a n",
        "fct-type": "function",
        "title": "rewriteModule"
      },
      "index": {
        "description": "Apply rewrite rules to module",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "rewriteModule",
        "normalized": "[NamedRewriteRule a b]-\u003eModule a b-\u003eModule a b",
        "package": "ddc-core-simpl",
        "partial": "Module",
        "signature": "[NamedRewriteRule a n]-\u003eModule a n-\u003eModule a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:rewriteX",
      "description": {
        "fct-descr": "\u003cp\u003ePerform rewrites top-down, repeatedly.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[NamedRewriteRule a n]-\u003e Exp a n-\u003e TransformResult (Exp a n)",
        "fct-type": "function",
        "title": "rewriteX"
      },
      "index": {
        "description": "Perform rewrites top-down repeatedly",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "rewriteX",
        "normalized": "[NamedRewriteRule a b]-\u003eExp a b-\u003eTransformResult(Exp a b)",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "[NamedRewriteRule a n]-\u003eExp a n-\u003eTransformResult(Exp a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleBinds",
      "description": {
        "fct-descr": "\u003cp\u003eVariables bound by the rule.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[(BindMode, Bind n)]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleBinds"
      },
      "index": {
        "description": "Variables bound by the rule",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "ruleBinds",
        "normalized": "[(BindMode,Bind a)]",
        "package": "ddc-core-simpl",
        "partial": "Binds",
        "signature": "[(BindMode,Bind n)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleConstraints",
      "description": {
        "fct-descr": "\u003cp\u003eExtra constraints on the rule.\n   These must all be satisfied for the rule to fire.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Type n]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleConstraints"
      },
      "index": {
        "description": "Extra constraints on the rule These must all be satisfied for the rule to fire",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "ruleConstraints",
        "normalized": "[Type a]",
        "package": "ddc-core-simpl",
        "partial": "Constraints",
        "signature": "[Type n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleFreeVars",
      "description": {
        "fct-descr": "\u003cp\u003eReferences to environment. \n   Used to check whether the rule is shadowed.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Bound n]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleFreeVars"
      },
      "index": {
        "description": "References to environment Used to check whether the rule is shadowed",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "ruleFreeVars",
        "normalized": "[Bound a]",
        "package": "ddc-core-simpl",
        "partial": "Free Vars",
        "signature": "[Bound n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleLeft",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-hand side of the rule.\n   We match on this part.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Exp a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleLeft"
      },
      "index": {
        "description": "Left-hand side of the rule We match on this part",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "ruleLeft",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleLeftHole",
      "description": {
        "fct-descr": "\u003cp\u003eExtra part of left-hand side,\n   but allow this bit to be out-of-context.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Maybe (Exp a n)",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleLeftHole"
      },
      "index": {
        "description": "Extra part of left-hand side but allow this bit to be out-of-context",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "ruleLeftHole",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Left Hole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleRight",
      "description": {
        "fct-descr": "\u003cp\u003eRight-hand side of the rule.\n   We replace the matched expression with this part.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Exp a n",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleRight"
      },
      "index": {
        "description": "Right-hand side of the rule We replace the matched expression with this part",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "ruleRight",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleWeakClo",
      "description": {
        "fct-descr": "\u003cp\u003eClosure that the left has that is not present in the right.\n   When applying the rule we add a closure weakening to ensure\n   the rewritten expression has the same closure.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Exp a n]",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleWeakClo"
      },
      "index": {
        "description": "Closure that the left has that is not present in the right When applying the rule we add closure weakening to ensure the rewritten expression has the same closure",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "ruleWeakClo",
        "normalized": "[Exp a b]",
        "package": "ddc-core-simpl",
        "partial": "Weak Clo",
        "signature": "[Exp a n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleWeakEff",
      "description": {
        "fct-descr": "\u003cp\u003eEffects that are caused by the left but not the right.\n   When applying the rule we add an effect weakning to ensure\n   the rewritten expression has the same effects.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Rewrite",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Maybe (Effect n)",
        "fct-source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
        "fct-type": "function",
        "title": "ruleWeakEff"
      },
      "index": {
        "description": "Effects that are caused by the left but not the right When applying the rule we add an effect weakning to ensure the rewritten expression has the same effects",
        "hierarchy": "DDC Core Transform Rewrite",
        "module": "DDC.Core.Transform.Rewrite",
        "name": "ruleWeakEff",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Weak Eff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSnip out nested applications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Snip",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Snip.html",
        "fct-type": "module",
        "title": "Snip"
      },
      "index": {
        "description": "Snip out nested applications",
        "hierarchy": "DDC Core Transform Snip",
        "module": "DDC.Core.Transform.Snip",
        "name": "Snip",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Snip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eSnipper configuration.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Snip",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Snip.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Snipper configuration",
        "hierarchy": "DDC Core Transform Snip",
        "module": "DDC.Core.Transform.Snip",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#t:Snip",
      "description": {
        "fct-descr": "\u003cp\u003eClass of things that can have things snipped out of them.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Snip",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "class",
        "fct-source": "src/DDC-Core-Transform-Snip.html#Snip",
        "fct-type": "class",
        "title": "Snip"
      },
      "index": {
        "description": "Class of things that can have things snipped out of them",
        "hierarchy": "DDC Core Transform Snip",
        "module": "DDC.Core.Transform.Snip",
        "name": "Snip",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Snip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:Config",
      "description": {
        "fct-module": "DDC.Core.Transform.Snip",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config",
        "fct-source": "src/DDC-Core-Transform-Snip.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Snip",
        "module": "DDC.Core.Transform.Snip",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:configSnipLetBody",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure the body of a let-expression is a variable.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Snip",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bool",
        "fct-source": "src/DDC-Core-Transform-Snip.html#Config",
        "fct-type": "function",
        "title": "configSnipLetBody"
      },
      "index": {
        "description": "Ensure the body of let-expression is variable",
        "hierarchy": "DDC Core Transform Snip",
        "module": "DDC.Core.Transform.Snip",
        "name": "configSnipLetBody",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Snip Let Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:configSnipOverApplied",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce new bindings for over-applied functions.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Snip",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Bool",
        "fct-source": "src/DDC-Core-Transform-Snip.html#Config",
        "fct-type": "function",
        "title": "configSnipOverApplied"
      },
      "index": {
        "description": "Introduce new bindings for over-applied functions",
        "hierarchy": "DDC Core Transform Snip",
        "module": "DDC.Core.Transform.Snip",
        "name": "configSnipOverApplied",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Snip Over Applied",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:configZero",
      "description": {
        "fct-descr": "\u003cp\u003eSnipper configuration with all flags set to False.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Snip",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config",
        "fct-source": "src/DDC-Core-Transform-Snip.html#configZero",
        "fct-type": "function",
        "title": "configZero"
      },
      "index": {
        "description": "Snipper configuration with all flags set to False",
        "hierarchy": "DDC Core Transform Snip",
        "module": "DDC.Core.Transform.Snip",
        "name": "configZero",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:snip",
      "description": {
        "fct-descr": "\u003cp\u003eSnip out nested applications as anonymous bindings.\n\u003c/p\u003e\u003cpre\u003e\n      f (g x) (h y)\n  ==\u003e let ^ = g x in ^ = h y in f ^1 ^0\n\u003c/pre\u003e",
        "fct-module": "DDC.Core.Transform.Snip",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config -\u003e c n -\u003e c n",
        "fct-source": "src/DDC-Core-Transform-Snip.html#snip",
        "fct-type": "method",
        "title": "snip"
      },
      "index": {
        "description": "Snip out nested applications as anonymous bindings let in in",
        "hierarchy": "DDC Core Transform Snip",
        "module": "DDC.Core.Transform.Snip",
        "name": "snip",
        "normalized": "Config-\u003ea b-\u003ea b",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "Config-\u003ec n-\u003ec n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThread a state token through calls to given functions.\n\u003c/p\u003e\u003cp\u003eASSUMPTIONS:\n   * Program is a-normalized and fully named.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-Thread.html",
        "fct-type": "module",
        "title": "Thread"
      },
      "index": {
        "description": "Thread state token through calls to given functions ASSUMPTIONS Program is a-normalized and fully named",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "Thread",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration for the Thread transform.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Configuration for the Thread transform",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#t:Thread",
      "description": {
        "fct-descr": "\u003cp\u003eClass of things that can have a state token threaded through them.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "class",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Thread",
        "fct-type": "class",
        "title": "Thread"
      },
      "index": {
        "description": "Class of things that can have state token threaded through them",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "Thread",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:Config",
      "description": {
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "Config",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configCheckConfig",
      "description": {
        "fct-descr": "\u003cp\u003eConfig for the type checker.\n   We need to reconstruct the type of the result of stateful\n   functions when bundling them into the tuple that holds the \n   state token.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config n",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Config",
        "fct-type": "function",
        "title": "configCheckConfig"
      },
      "index": {
        "description": "Config for the type checker We need to reconstruct the type of the result of stateful functions when bundling them into the tuple that holds the state token",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "configCheckConfig",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Check Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configThreadMe",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to decide which top-level bindings are stateful and\n   need the state token threaded through them. If the binding with\n   the given name is stateful then the function should return the\n   new type for the binding that accepts and returns the state token.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "n -\u003e Type n -\u003e Maybe (Type n)",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Config",
        "fct-type": "function",
        "title": "configThreadMe"
      },
      "index": {
        "description": "Function to decide which top-level bindings are stateful and need the state token threaded through them If the binding with the given name is stateful then the function should return the new type for the binding that accepts and returns the state token",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "configThreadMe",
        "normalized": "a-\u003eType a-\u003eMaybe(Type a)",
        "package": "ddc-core-simpl",
        "partial": "Thread Me",
        "signature": "n-\u003eType n-\u003eMaybe(Type n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configThreadPat",
      "description": {
        "fct-descr": "\u003cp\u003eMake a pattern which binds the world argument\n   from a threaded primop.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "n -\u003e Maybe (Bind n -\u003e [Bind n] -\u003e Pat n)",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Config",
        "fct-type": "function",
        "title": "configThreadPat"
      },
      "index": {
        "description": "Make pattern which binds the world argument from threaded primop",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "configThreadPat",
        "normalized": "a-\u003eMaybe(Bind a-\u003e[Bind a]-\u003ePat a)",
        "package": "ddc-core-simpl",
        "partial": "Thread Pat",
        "signature": "n-\u003eMaybe(Bind n-\u003e[Bind n]-\u003ePat n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configTokenType",
      "description": {
        "fct-descr": "\u003cp\u003eType of the state token to use.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Type n",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Config",
        "fct-type": "function",
        "title": "configTokenType"
      },
      "index": {
        "description": "Type of the state token to use",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "configTokenType",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Token Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configVoidType",
      "description": {
        "fct-descr": "\u003cp\u003eType that represents a missing value.\n   If a stateful function returns a void then our thread transform\n   rewrites it to return the state token, instead of a tuple\n   that contains the token as well as a void value.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Type n",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Config",
        "fct-type": "function",
        "title": "configVoidType"
      },
      "index": {
        "description": "Type that represents missing value If stateful function returns void then our thread transform rewrites it to return the state token instead of tuple that contains the token as well as void value",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "configVoidType",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Void Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configWrapResultExp",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a result expression with the state token.\n   The function is given the types of the world token and result,\n   then the expressions for the same.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Exp (AnTEC a n) n -\u003e Exp (AnTEC a n) n -\u003e Exp a n",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Config",
        "fct-type": "function",
        "title": "configWrapResultExp"
      },
      "index": {
        "description": "Wrap result expression with the state token The function is given the types of the world token and result then the expressions for the same",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "configWrapResultExp",
        "normalized": "Exp(AnTEC a b)b-\u003eExp(AnTEC a b)b-\u003eExp a b",
        "package": "ddc-core-simpl",
        "partial": "Wrap Result Exp",
        "signature": "Exp(AnTEC a n)n-\u003eExp(AnTEC a n)n-\u003eExp a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configWrapResultType",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a type with the world token.\n   eg change Int to (World#, Int)\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Type n -\u003e Type n",
        "fct-source": "src/DDC-Core-Transform-Thread.html#Config",
        "fct-type": "function",
        "title": "configWrapResultType"
      },
      "index": {
        "description": "Wrap type with the world token eg change Int to World Int",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "configWrapResultType",
        "normalized": "Type a-\u003eType a",
        "package": "ddc-core-simpl",
        "partial": "Wrap Result Type",
        "signature": "Type n-\u003eType n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:injectStateType",
      "description": {
        "fct-descr": "\u003cp\u003eInject the state token into the type of an effectful function.\n   Eg, change  ([a b : Data]. a -\u003e b -\u003e Int) \n          to   ([a b : Data]. a -\u003e b -\u003e World -\u003e (World, Int)\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config a n -\u003e Type n -\u003e Type n",
        "fct-source": "src/DDC-Core-Transform-Thread.html#injectStateType",
        "fct-type": "function",
        "title": "injectStateType"
      },
      "index": {
        "description": "Inject the state token into the type of an effectful function Eg change Data Int to Data World World Int",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "injectStateType",
        "normalized": "Config a b-\u003eType b-\u003eType b",
        "package": "ddc-core-simpl",
        "partial": "State Type",
        "signature": "Config a n-\u003eType n-\u003eType n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:thread",
      "description": {
        "fct-module": "DDC.Core.Transform.Thread",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "Config a n -\u003e KindEnv n -\u003e TypeEnv n -\u003e c (AnTEC a n) n -\u003e c a n",
        "fct-source": "src/DDC-Core-Transform-Thread.html#thread",
        "fct-type": "method",
        "title": "thread"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform Thread",
        "module": "DDC.Core.Transform.Thread",
        "name": "thread",
        "normalized": "Config a b-\u003eKindEnv b-\u003eTypeEnv b-\u003ec(AnTEC a b)b-\u003ec a b",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "Config a n-\u003eKindEnv n-\u003eTypeEnv n-\u003ec(AnTEC a n)n-\u003ec a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral purpose tree walking boilerplate.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.TransformDownX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-TransformDownX.html",
        "fct-type": "module",
        "title": "TransformDownX"
      },
      "index": {
        "description": "General purpose tree walking boilerplate",
        "hierarchy": "DDC Core Transform TransformDownX",
        "module": "DDC.Core.Transform.TransformDownX",
        "name": "TransformDownX",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#t:TransformDownMX",
      "description": {
        "fct-module": "DDC.Core.Transform.TransformDownX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "class",
        "fct-source": "src/DDC-Core-Transform-TransformDownX.html#TransformDownMX",
        "fct-type": "class",
        "title": "TransformDownMX"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform TransformDownX",
        "module": "DDC.Core.Transform.TransformDownX",
        "name": "TransformDownMX",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Down MX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#v:transformDownMX",
      "description": {
        "fct-descr": "\u003cp\u003eTop-down monadic rewrite of all core expressions in a thing.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.TransformDownX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "transformDownMX",
        "fct-source": "src/DDC-Core-Transform-TransformDownX.html#transformDownMX",
        "fct-type": "method",
        "title": "transformDownMX"
      },
      "index": {
        "description": "Top-down monadic rewrite of all core expressions in thing",
        "hierarchy": "DDC Core Transform TransformDownX",
        "module": "DDC.Core.Transform.TransformDownX",
        "name": "transformDownMX",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Down MX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#v:transformDownX",
      "description": {
        "fct-descr": "\u003cp\u003eTop-down rewrite of all core expressions in a thing.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.TransformDownX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e Exp a n)-\u003e KindEnv n-\u003e TypeEnv n-\u003e c a n-\u003e c a n",
        "fct-type": "function",
        "title": "transformDownX"
      },
      "index": {
        "description": "Top-down rewrite of all core expressions in thing",
        "hierarchy": "DDC Core Transform TransformDownX",
        "module": "DDC.Core.Transform.TransformDownX",
        "name": "transformDownX",
        "normalized": "(KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eExp b a)-\u003eKindEnv a-\u003eTypeEnv a-\u003ec b a-\u003ec b a",
        "package": "ddc-core-simpl",
        "partial": "Down",
        "signature": "(KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eExp a n)-\u003eKindEnv n-\u003eTypeEnv n-\u003ec a n-\u003ec a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#v:transformDownX-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike transformDownX, but without using environments.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.TransformDownX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(Exp a n -\u003e Exp a n)-\u003e c a n-\u003e c a n",
        "fct-type": "function",
        "title": "transformDownX'"
      },
      "index": {
        "description": "Like transformDownX but without using environments",
        "hierarchy": "DDC Core Transform TransformDownX",
        "module": "DDC.Core.Transform.TransformDownX",
        "name": "transformDownX'",
        "normalized": "(Exp a b-\u003eExp a b)-\u003ec a b-\u003ec a b",
        "package": "ddc-core-simpl",
        "partial": "Down X'",
        "signature": "(Exp a n-\u003eExp a n)-\u003ec a n-\u003ec a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral purpose tree walking boilerplate.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Transform.TransformUpX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Transform-TransformUpX.html",
        "fct-type": "module",
        "title": "TransformUpX"
      },
      "index": {
        "description": "General purpose tree walking boilerplate",
        "hierarchy": "DDC Core Transform TransformUpX",
        "module": "DDC.Core.Transform.TransformUpX",
        "name": "TransformUpX",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#t:TransformUpMX",
      "description": {
        "fct-module": "DDC.Core.Transform.TransformUpX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "class",
        "fct-source": "src/DDC-Core-Transform-TransformUpX.html#TransformUpMX",
        "fct-type": "class",
        "title": "TransformUpMX"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Transform TransformUpX",
        "module": "DDC.Core.Transform.TransformUpX",
        "name": "TransformUpMX",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Transform Up MX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformSimpleUpMX",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etransformUpMX\u003c/a\u003e\u003c/code\u003e, but the worker takes the Simple version of the AST.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e To avoid repeated conversions between the different versions of the AST,\n     the worker should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided expression is unchanged.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "DDC.Core.Transform.TransformUpX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e m (Maybe (Exp a n)))-\u003e KindEnv n-\u003e TypeEnv n-\u003e c a n-\u003e m (c a n)",
        "fct-type": "function",
        "title": "transformSimpleUpMX"
      },
      "index": {
        "description": "Like transformUpMX but the worker takes the Simple version of the AST To avoid repeated conversions between the different versions of the AST the worker should return Nothing if the provided expression is unchanged",
        "hierarchy": "DDC Core Transform TransformUpX",
        "module": "DDC.Core.Transform.TransformUpX",
        "name": "transformSimpleUpMX",
        "normalized": "(KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003ec(Maybe(Exp b a)))-\u003eKindEnv a-\u003eTypeEnv a-\u003ed b a-\u003ec(d b a)",
        "package": "ddc-core-simpl",
        "partial": "Simple Up MX",
        "signature": "(KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003em(Maybe(Exp a n)))-\u003eKindEnv n-\u003eTypeEnv n-\u003ec a n-\u003em(c a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformSimpleUpX",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etransformUpX\u003c/a\u003e\u003c/code\u003e, but the worker takes the Simple version of the AST.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e To avoid repeated conversions between the different versions of the AST,\n     the worker should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided expression is unchanged.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "DDC.Core.Transform.TransformUpX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e Maybe (Exp a n))-\u003e KindEnv n-\u003e TypeEnv n-\u003e c a n-\u003e c a n",
        "fct-type": "function",
        "title": "transformSimpleUpX"
      },
      "index": {
        "description": "Like transformUpX but the worker takes the Simple version of the AST To avoid repeated conversions between the different versions of the AST the worker should return Nothing if the provided expression is unchanged",
        "hierarchy": "DDC Core Transform TransformUpX",
        "module": "DDC.Core.Transform.TransformUpX",
        "name": "transformSimpleUpX",
        "normalized": "(KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eMaybe(Exp b a))-\u003eKindEnv a-\u003eTypeEnv a-\u003ec b a-\u003ec b a",
        "package": "ddc-core-simpl",
        "partial": "Simple Up",
        "signature": "(KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eMaybe(Exp a n))-\u003eKindEnv n-\u003eTypeEnv n-\u003ec a n-\u003ec a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformSimpleUpX-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etransformUpX'\u003c/a\u003e\u003c/code\u003e, but the worker takes the Simple version of the AST.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e To avoid repeated conversions between the different versions of the AST,\n     the worker should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided expression is unchanged.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "DDC.Core.Transform.TransformUpX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(Exp a n -\u003e Maybe (Exp a n))-\u003e c a n-\u003e c a n",
        "fct-type": "function",
        "title": "transformSimpleUpX'"
      },
      "index": {
        "description": "Like transformUpX but the worker takes the Simple version of the AST To avoid repeated conversions between the different versions of the AST the worker should return Nothing if the provided expression is unchanged",
        "hierarchy": "DDC Core Transform TransformUpX",
        "module": "DDC.Core.Transform.TransformUpX",
        "name": "transformSimpleUpX'",
        "normalized": "(Exp a b-\u003eMaybe(Exp a b))-\u003ec a b-\u003ec a b",
        "package": "ddc-core-simpl",
        "partial": "Simple Up X'",
        "signature": "(Exp a n-\u003eMaybe(Exp a n))-\u003ec a n-\u003ec a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformUpMX",
      "description": {
        "fct-descr": "\u003cp\u003eBottom-up monadic rewrite of all core expressions in a thing.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.TransformUpX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "transformUpMX",
        "fct-source": "src/DDC-Core-Transform-TransformUpX.html#transformUpMX",
        "fct-type": "method",
        "title": "transformUpMX"
      },
      "index": {
        "description": "Bottom-up monadic rewrite of all core expressions in thing",
        "hierarchy": "DDC Core Transform TransformUpX",
        "module": "DDC.Core.Transform.TransformUpX",
        "name": "transformUpMX",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Up MX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformUpX",
      "description": {
        "fct-descr": "\u003cp\u003eBottom up rewrite of all core expressions in a thing.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.TransformUpX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e Exp a n)-\u003e KindEnv n-\u003e TypeEnv n-\u003e c a n-\u003e c a n",
        "fct-type": "function",
        "title": "transformUpX"
      },
      "index": {
        "description": "Bottom up rewrite of all core expressions in thing",
        "hierarchy": "DDC Core Transform TransformUpX",
        "module": "DDC.Core.Transform.TransformUpX",
        "name": "transformUpX",
        "normalized": "(KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eExp b a)-\u003eKindEnv a-\u003eTypeEnv a-\u003ec b a-\u003ec b a",
        "package": "ddc-core-simpl",
        "partial": "Up",
        "signature": "(KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eExp a n)-\u003eKindEnv n-\u003eTypeEnv n-\u003ec a n-\u003ec a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformUpX-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike transformUpX, but without using environments.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Transform.TransformUpX",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(Exp a n -\u003e Exp a n)-\u003e c a n-\u003e c a n",
        "fct-type": "function",
        "title": "transformUpX'"
      },
      "index": {
        "description": "Like transformUpX but without using environments",
        "hierarchy": "DDC Core Transform TransformUpX",
        "module": "DDC.Core.Transform.TransformUpX",
        "name": "transformUpX'",
        "normalized": "(Exp a b-\u003eExp a b)-\u003ec a b-\u003ec a b",
        "package": "ddc-core-simpl",
        "partial": "Up X'",
        "signature": "(Exp a n-\u003eExp a n)-\u003ec a n-\u003ec a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-Alpha.html#",
      "description": {
        "fct-module": "DDC.Type.Transform.Alpha",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Type-Transform-Alpha.html",
        "fct-type": "module",
        "title": "Alpha"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Type Transform Alpha",
        "module": "DDC.Type.Transform.Alpha",
        "name": "Alpha",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-Alpha.html#t:Alpha",
      "description": {
        "fct-module": "DDC.Type.Transform.Alpha",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "class",
        "fct-source": "src/DDC-Type-Transform-Alpha.html#Alpha",
        "fct-type": "class",
        "title": "Alpha"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Type Transform Alpha",
        "module": "DDC.Type.Transform.Alpha",
        "name": "Alpha",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-Alpha.html#v:alpha",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all the names in a thing.\n\u003c/p\u003e",
        "fct-module": "DDC.Type.Transform.Alpha",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "(n1 -\u003e n2) -\u003e c n1 -\u003e c n2",
        "fct-source": "src/DDC-Type-Transform-Alpha.html#alpha",
        "fct-type": "method",
        "title": "alpha"
      },
      "index": {
        "description": "Apply function to all the names in thing",
        "hierarchy": "DDC Type Transform Alpha",
        "module": "DDC.Type.Transform.Alpha",
        "name": "alpha",
        "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "(n-\u003en)-\u003ec n-\u003ec n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#",
      "description": {
        "fct-module": "DDC.Type.Transform.AnonymizeT",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "module",
        "fct-source": "src/DDC-Type-Transform-AnonymizeT.html",
        "fct-type": "module",
        "title": "AnonymizeT"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Type Transform AnonymizeT",
        "module": "DDC.Type.Transform.AnonymizeT",
        "name": "AnonymizeT",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Anonymize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#t:AnonymizeT",
      "description": {
        "fct-module": "DDC.Type.Transform.AnonymizeT",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "class",
        "fct-source": "src/DDC-Type-Transform-AnonymizeT.html#AnonymizeT",
        "fct-type": "class",
        "title": "AnonymizeT"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Type Transform AnonymizeT",
        "module": "DDC.Type.Transform.AnonymizeT",
        "name": "AnonymizeT",
        "normalized": "",
        "package": "ddc-core-simpl",
        "partial": "Anonymize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#v:anonymizeT",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite all binders in a thing to be of anonymous form.\n\u003c/p\u003e",
        "fct-module": "DDC.Type.Transform.AnonymizeT",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "c n -\u003e c n",
        "fct-source": "src/DDC-Type-Transform-AnonymizeT.html#anonymizeT",
        "fct-type": "function",
        "title": "anonymizeT"
      },
      "index": {
        "description": "Rewrite all binders in thing to be of anonymous form",
        "hierarchy": "DDC Type Transform AnonymizeT",
        "module": "DDC.Type.Transform.AnonymizeT",
        "name": "anonymizeT",
        "normalized": "a b-\u003ea b",
        "package": "ddc-core-simpl",
        "partial": "",
        "signature": "c n-\u003ec n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#v:anonymizeWithT",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite all binders in a thing to be of anonymous form.\n\u003c/p\u003e\u003cp\u003eThe stack contains existing anonymous binders that we have entered into,\n   and named binders that we have rewritten. All bound occurrences of variables\n   will be replaced by references into this stack.\n\u003c/p\u003e",
        "fct-module": "DDC.Type.Transform.AnonymizeT",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Bind n] -\u003e c n -\u003e c n",
        "fct-source": "src/DDC-Type-Transform-AnonymizeT.html#anonymizeWithT",
        "fct-type": "method",
        "title": "anonymizeWithT"
      },
      "index": {
        "description": "Rewrite all binders in thing to be of anonymous form The stack contains existing anonymous binders that we have entered into and named binders that we have rewritten All bound occurrences of variables will be replaced by references into this stack",
        "hierarchy": "DDC Type Transform AnonymizeT",
        "module": "DDC.Type.Transform.AnonymizeT",
        "name": "anonymizeWithT",
        "normalized": "[Bind a]-\u003eb a-\u003eb a",
        "package": "ddc-core-simpl",
        "partial": "With",
        "signature": "[Bind n]-\u003ec n-\u003ec n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#v:pushAnonymizeBindT",
      "description": {
        "fct-descr": "\u003cp\u003ePush a binding occurrence of a level-1 variable on the stack, \n   returning the anonyized binding occurrence and the new stack.\n\u003c/p\u003e",
        "fct-module": "DDC.Type.Transform.AnonymizeT",
        "fct-package": "ddc-core-simpl",
        "fct-signature": "[Bind n]-\u003e Bind n-\u003e ([Bind n], Bind n)",
        "fct-type": "function",
        "title": "pushAnonymizeBindT"
      },
      "index": {
        "description": "Push binding occurrence of level-1 variable on the stack returning the anonyized binding occurrence and the new stack",
        "hierarchy": "DDC Type Transform AnonymizeT",
        "module": "DDC.Type.Transform.AnonymizeT",
        "name": "pushAnonymizeBindT",
        "normalized": "[Bind a]-\u003eBind a-\u003e([Bind a],Bind a)",
        "package": "ddc-core-simpl",
        "partial": "Anonymize Bind",
        "signature": "[Bind n]-\u003eBind n-\u003e([Bind n],Bind n)"
      }
    }
  }
]