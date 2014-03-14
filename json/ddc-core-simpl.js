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
        "word": "ddc-core-simpl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSlurp out arities of function bindings.\n   and infer arities for primitives based on their types.\n\u003c/p\u003e\u003cp\u003eFor function bindings the arity is the number of outer-most lambdas\n   in the definition. \n\u003c/p\u003e\u003cp\u003eFor primitives, the arity is the number of function\n   constructors in its type. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "Arity",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Analysis-Arity.html",
          "type": "module"
        },
        "index": {
          "description": "Slurp out arities of function bindings and infer arities for primitives based on their types For function bindings the arity is the number of outer-most lambdas in the definition For primitives the arity is the number of function constructors in its type",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "Arity",
          "package": "ddc-core-simpl",
          "partial": "Arity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArities of named and anonymous bindings.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "Arities",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Analysis-Arity.html#Arities",
          "type": "type"
        },
        "index": {
          "description": "Arities of named and anonymous bindings",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "Arities",
          "package": "ddc-core-simpl",
          "partial": "Arities",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#t:Arities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the arities of a \u003ccode\u003e\u003ca\u003eLets\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "aritiesOfLets",
          "package": "ddc-core-simpl",
          "signature": "Lets a n -\u003e Maybe [(Bind n, Int)]",
          "source": "src/DDC-Core-Analysis-Arity.html#aritiesOfLets",
          "type": "function"
        },
        "index": {
          "description": "Get the arities of Lets",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "aritiesOfLets",
          "normalized": "Lets a b-\u003eMaybe[(Bind b,Int)]",
          "package": "ddc-core-simpl",
          "partial": "Of Lets",
          "signature": "Lets a n-\u003eMaybe[(Bind n,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:aritiesOfLets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlurp out arities of imports and top-level bindings from a module.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "aritiesOfModule",
          "package": "ddc-core-simpl",
          "signature": "Module a n -\u003e Arities n",
          "source": "src/DDC-Core-Analysis-Arity.html#aritiesOfModule",
          "type": "function"
        },
        "index": {
          "description": "Slurp out arities of imports and top-level bindings from module",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "aritiesOfModule",
          "normalized": "Module a b-\u003eArities b",
          "package": "ddc-core-simpl",
          "partial": "Of Module",
          "signature": "Module a n-\u003eArities n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:aritiesOfModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve binders from case pattern, so we can extend the arity context.\n   We don't know anything about their values, so record as 0.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "aritiesOfPat",
          "package": "ddc-core-simpl",
          "signature": "Pat n -\u003e [(Bind n, Int)]",
          "source": "src/DDC-Core-Analysis-Arity.html#aritiesOfPat",
          "type": "function"
        },
        "index": {
          "description": "Retrieve binders from case pattern so we can extend the arity context We don know anything about their values so record as",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "aritiesOfPat",
          "normalized": "Pat a-\u003e[(Bind a,Int)]",
          "package": "ddc-core-simpl",
          "partial": "Of Pat",
          "signature": "Pat n-\u003e[(Bind n,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:aritiesOfPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the arity of an expression by looking at its type.\n   Count all the function arrows, and foralls.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "arityFromType",
          "package": "ddc-core-simpl",
          "signature": "Type n -\u003e Maybe Int",
          "source": "src/DDC-Core-Analysis-Arity.html#arityFromType",
          "type": "function"
        },
        "index": {
          "description": "Determine the arity of an expression by looking at its type Count all the function arrows and foralls",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "arityFromType",
          "normalized": "Type a-\u003eMaybe Int",
          "package": "ddc-core-simpl",
          "partial": "From Type",
          "signature": "Type n-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:arityFromType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the arity of an expression. \n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "arityOfExp",
          "package": "ddc-core-simpl",
          "signature": "Exp a n -\u003e Maybe Int",
          "source": "src/DDC-Core-Analysis-Arity.html#arityOfExp",
          "type": "function"
        },
        "index": {
          "description": "Get the arity of an expression",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "arityOfExp",
          "normalized": "Exp a b-\u003eMaybe Int",
          "package": "ddc-core-simpl",
          "partial": "Of Exp",
          "signature": "Exp a n-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:arityOfExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty arities context.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "emptyArities",
          "package": "ddc-core-simpl",
          "signature": "Arities n",
          "source": "src/DDC-Core-Analysis-Arity.html#emptyArities",
          "type": "function"
        },
        "index": {
          "description": "Empty arities context",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "emptyArities",
          "package": "ddc-core-simpl",
          "partial": "Arities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:emptyArities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend map with some binders and their arities.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "extendsArities",
          "package": "ddc-core-simpl",
          "signature": "Arities n -\u003e [(Bind n, Int)] -\u003e Arities n",
          "source": "src/DDC-Core-Analysis-Arity.html#extendsArities",
          "type": "function"
        },
        "index": {
          "description": "Extend map with some binders and their arities",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "extendsArities",
          "normalized": "Arities a-\u003e[(Bind a,Int)]-\u003eArities a",
          "package": "ddc-core-simpl",
          "partial": "Arities",
          "signature": "Arities n-\u003e[(Bind n,Int)]-\u003eArities n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:extendsArities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a binder's arity from the arity map\n   or determine it from its type in the case of primops.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Arity",
          "name": "getArity",
          "package": "ddc-core-simpl",
          "signature": "Arities n -\u003e Bound n -\u003e Maybe Int",
          "source": "src/DDC-Core-Analysis-Arity.html#getArity",
          "type": "function"
        },
        "index": {
          "description": "Look up binder arity from the arity map or determine it from its type in the case of primops",
          "hierarchy": "DDC Core Analysis Arity",
          "module": "DDC.Core.Analysis.Arity",
          "name": "getArity",
          "normalized": "Arities a-\u003eBound a-\u003eMaybe Int",
          "package": "ddc-core-simpl",
          "partial": "Arity",
          "signature": "Arities n-\u003eBound n-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Arity.html#v:getArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnnotate let bindings with how their bound variables are used.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "Usage",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Analysis-Usage.html",
          "type": "module"
        },
        "index": {
          "description": "Annotate let bindings with how their bound variables are used",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "Usage",
          "package": "ddc-core-simpl",
          "partial": "Usage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTracks how a bound variable is used.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "Used",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Analysis-Usage.html#Used",
          "type": "data"
        },
        "index": {
          "description": "Tracks how bound variable is used",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "Used",
          "package": "ddc-core-simpl",
          "partial": "Used",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#t:Used"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of bound name to how the variable is used.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedMap",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Analysis-Usage.html#UsedMap",
          "type": "data"
        },
        "index": {
          "description": "Map of bound name to how the variable is used",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedMap",
          "package": "ddc-core-simpl",
          "partial": "Used Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#t:UsedMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBound variable is destructed by a case-expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedDestruct",
          "package": "ddc-core-simpl",
          "signature": "UsedDestruct",
          "source": "src/DDC-Core-Analysis-Usage.html#Used",
          "type": "function"
        },
        "index": {
          "description": "Bound variable is destructed by case-expression",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedDestruct",
          "package": "ddc-core-simpl",
          "partial": "Used Destruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedDestruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBound variable is used as the function in an application.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedFunction",
          "package": "ddc-core-simpl",
          "signature": "UsedFunction",
          "source": "src/DDC-Core-Analysis-Usage.html#Used",
          "type": "function"
        },
        "index": {
          "description": "Bound variable is used as the function in an application",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedFunction",
          "package": "ddc-core-simpl",
          "partial": "Used Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsage is inside a case alternative.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedInAlt",
          "package": "ddc-core-simpl",
          "signature": "UsedInAlt Used",
          "source": "src/DDC-Core-Analysis-Usage.html#Used",
          "type": "function"
        },
        "index": {
          "description": "Usage is inside case alternative",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedInAlt",
          "package": "ddc-core-simpl",
          "partial": "Used In Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedInAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBound variable is used inside a \u003ccode\u003eweakclo\u003c/code\u003e cast.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedInCast",
          "package": "ddc-core-simpl",
          "signature": "UsedInCast",
          "source": "src/DDC-Core-Analysis-Usage.html#Used",
          "type": "function"
        },
        "index": {
          "description": "Bound variable is used inside weakclo cast",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedInCast",
          "package": "ddc-core-simpl",
          "partial": "Used In Cast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedInCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsage is inside a Lambda abstraction (either type or value)\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedInLambda",
          "package": "ddc-core-simpl",
          "signature": "UsedInLambda Used",
          "source": "src/DDC-Core-Analysis-Usage.html#Used",
          "type": "function"
        },
        "index": {
          "description": "Usage is inside Lambda abstraction either type or value",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedInLambda",
          "package": "ddc-core-simpl",
          "partial": "Used In Lambda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedInLambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedMap",
          "package": "ddc-core-simpl",
          "signature": "UsedMap (Map n [Used])",
          "source": "src/DDC-Core-Analysis-Usage.html#UsedMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedMap",
          "normalized": "UsedMap(Map a[Used])",
          "package": "ddc-core-simpl",
          "partial": "Used Map",
          "signature": "UsedMap(Map n[Used])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBound variable has an occurrence that is not one of the above.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedOcc",
          "package": "ddc-core-simpl",
          "signature": "UsedOcc",
          "source": "src/DDC-Core-Analysis-Usage.html#Used",
          "type": "function"
        },
        "index": {
          "description": "Bound variable has an occurrence that is not one of the above",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "UsedOcc",
          "package": "ddc-core-simpl",
          "partial": "Used Occ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:UsedOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate all binding occurrences of variables in an expression\n   with how they are used.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "usageModule",
          "package": "ddc-core-simpl",
          "signature": "Module a n -\u003e Module (UsedMap n, a) n",
          "source": "src/DDC-Core-Analysis-Usage.html#usageModule",
          "type": "function"
        },
        "index": {
          "description": "Annotate all binding occurrences of variables in an expression with how they are used",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "usageModule",
          "normalized": "Module a b-\u003eModule(UsedMap b,a)b",
          "package": "ddc-core-simpl",
          "partial": "Module",
          "signature": "Module a n-\u003eModule(UsedMap n,a)n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:usageModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate all binding occurrences of variables in an expression\n   with how they are used.\n\u003c/p\u003e",
          "module": "DDC.Core.Analysis.Usage",
          "name": "usageX",
          "package": "ddc-core-simpl",
          "signature": "Exp a n -\u003e Exp (UsedMap n, a) n",
          "source": "src/DDC-Core-Analysis-Usage.html#usageX",
          "type": "function"
        },
        "index": {
          "description": "Annotate all binding occurrences of variables in an expression with how they are used",
          "hierarchy": "DDC Core Analysis Usage",
          "module": "DDC.Core.Analysis.Usage",
          "name": "usageX",
          "normalized": "Exp a b-\u003eExp(UsedMap b,a)b",
          "package": "ddc-core-simpl",
          "signature": "Exp a n-\u003eExp(UsedMap n,a)n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Analysis-Usage.html#v:usageX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Simplifier.Parser",
          "name": "Parser",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Simplifier Parser",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "Parser",
          "package": "ddc-core-simpl",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuxilliary information that may be used by a simplifier.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "SimplifierDetails",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
          "type": "data"
        },
        "index": {
          "description": "Auxilliary information that may be used by simplifier",
          "hierarchy": "DDC Core Simplifier Parser",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "SimplifierDetails",
          "package": "ddc-core-simpl",
          "partial": "Simplifier Details",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#t:SimplifierDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Simplifier.Parser",
          "name": "SimplifierDetails",
          "package": "ddc-core-simpl",
          "signature": "SimplifierDetails",
          "source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Simplifier Parser",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "SimplifierDetails",
          "package": "ddc-core-simpl",
          "partial": "Simplifier Details",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:SimplifierDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a simplifier from a string.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "parseSimplifier",
          "package": "ddc-core-simpl",
          "signature": "(String -\u003e Maybe n) -\u003e SimplifierDetails s a n -\u003e String -\u003e Either ParseError (Simplifier s a n)",
          "source": "src/DDC-Core-Simplifier-Parser.html#parseSimplifier",
          "type": "function"
        },
        "index": {
          "description": "Parse simplifier from string",
          "hierarchy": "DDC Core Simplifier Parser",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "parseSimplifier",
          "normalized": "(String-\u003eMaybe a)-\u003eSimplifierDetails b c a-\u003eString-\u003eEither ParseError(Simplifier b c a)",
          "package": "ddc-core-simpl",
          "partial": "Simplifier",
          "signature": "(String-\u003eMaybe n)-\u003eSimplifierDetails s a n-\u003eString-\u003eEither ParseError(Simplifier s a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:parseSimplifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a namifier to make fresh type (level-1) \n   names that don't conflict with any already in this environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "simplifierMkNamifierT",
          "package": "ddc-core-simpl",
          "signature": "Env n -\u003e Namifier s n",
          "source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
          "type": "function"
        },
        "index": {
          "description": "Create namifier to make fresh type level-1 names that don conflict with any already in this environment",
          "hierarchy": "DDC Core Simplifier Parser",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "simplifierMkNamifierT",
          "normalized": "Env a-\u003eNamifier b a",
          "package": "ddc-core-simpl",
          "partial": "Mk Namifier",
          "signature": "Env n-\u003eNamifier s n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:simplifierMkNamifierT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a namifier to make fresh value or witness (level-0) \n   names that don't conflict with any already in this environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "simplifierMkNamifierX",
          "package": "ddc-core-simpl",
          "signature": "Env n -\u003e Namifier s n",
          "source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
          "type": "function"
        },
        "index": {
          "description": "Create namifier to make fresh value or witness level-0 names that don conflict with any already in this environment",
          "hierarchy": "DDC Core Simplifier Parser",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "simplifierMkNamifierX",
          "normalized": "Env a-\u003eNamifier b a",
          "package": "ddc-core-simpl",
          "partial": "Mk Namifier",
          "signature": "Env n-\u003eNamifier s n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:simplifierMkNamifierX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite rules along with their names.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "simplifierRules",
          "package": "ddc-core-simpl",
          "signature": "NamedRewriteRules a n",
          "source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
          "type": "function"
        },
        "index": {
          "description": "Rewrite rules along with their names",
          "hierarchy": "DDC Core Simplifier Parser",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "simplifierRules",
          "package": "ddc-core-simpl",
          "partial": "Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:simplifierRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModules available for inlining.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "simplifierTemplates",
          "package": "ddc-core-simpl",
          "signature": "[Module a n]",
          "source": "src/DDC-Core-Simplifier-Parser.html#SimplifierDetails",
          "type": "function"
        },
        "index": {
          "description": "Modules available for inlining",
          "hierarchy": "DDC Core Simplifier Parser",
          "module": "DDC.Core.Simplifier.Parser",
          "name": "simplifierTemplates",
          "normalized": "[Module a b]",
          "package": "ddc-core-simpl",
          "partial": "Templates",
          "signature": "[Module a n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Parser.html#v:simplifierTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon simplifier recipes that combine multiple transforms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "Recipe",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Recipe.html",
          "type": "module"
        },
        "index": {
          "description": "Common simplifier recipes that combine multiple transforms",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "Recipe",
          "package": "ddc-core-simpl",
          "partial": "Recipe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite named binders to anonymous debruijn binders.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "anonymize",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#anonymize",
          "type": "function"
        },
        "index": {
          "description": "Rewrite named binders to anonymous debruijn binders",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "anonymize",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:anonymize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion to administrative normal-form.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "anormalize",
          "package": "ddc-core-simpl",
          "signature": "(KindEnv n -\u003e Namifier s n)-\u003e (TypeEnv n -\u003e Namifier s n)-\u003e Simplifier s a n",
          "type": "function"
        },
        "index": {
          "description": "Conversion to administrative normal-form",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "anormalize",
          "normalized": "(KindEnv a-\u003eNamifier b a)-\u003e(TypeEnv a-\u003eNamifier b a)-\u003eSimplifier b c a",
          "package": "ddc-core-simpl",
          "signature": "(KindEnv n-\u003eNamifier s n)-\u003e(TypeEnv n-\u003eNamifier s n)-\u003eSimplifier s a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:anormalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform beta reduction\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "beta",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#beta",
          "type": "function"
        },
        "index": {
          "description": "Perform beta reduction",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "beta",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform beta reduction, introducing let-expressions for compound arguments.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "betaLets",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#betaLets",
          "type": "function"
        },
        "index": {
          "description": "Perform beta reduction introducing let-expressions for compound arguments",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "betaLets",
          "package": "ddc-core-simpl",
          "partial": "Lets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:betaLets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat casts outwards.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "bubble",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#bubble",
          "type": "function"
        },
        "index": {
          "description": "Float casts outwards",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "bubble",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:bubble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElaborate possible Const and Distinct witnesses that aren't\n   otherwise in the program.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "elaborate",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#elaborate",
          "type": "function"
        },
        "index": {
          "description": "Elaborate possible Const and Distinct witnesses that aren otherwise in the program",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "elaborate",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:elaborate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten nested let and case expressions.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "flatten",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Flatten nested let and case expressions",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "flatten",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat single-use bindings forward into their use sites.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "forward",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#forward",
          "type": "function"
        },
        "index": {
          "description": "Float single-use bindings forward into their use sites",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "forward",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity simplifier returns the code unharmed.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "idsimp",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#idsimp",
          "type": "function"
        },
        "index": {
          "description": "The identity simplifier returns the code unharmed",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "idsimp",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:idsimp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove unused, pure let bindings.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "prune",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#prune",
          "type": "function"
        },
        "index": {
          "description": "Remove unused pure let bindings",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "prune",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:prune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersperse rewrites and beta reduction\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "rewriteSimp",
          "package": "ddc-core-simpl",
          "signature": "Int-\u003e NamedRewriteRules a n-\u003e Simplifier s a n",
          "type": "function"
        },
        "index": {
          "description": "Intersperse rewrites and beta reduction",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "rewriteSimp",
          "normalized": "Int-\u003eNamedRewriteRules a b-\u003eSimplifier c a b",
          "package": "ddc-core-simpl",
          "partial": "Simp",
          "signature": "Int-\u003eNamedRewriteRules a n-\u003eSimplifier s a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:rewriteSimp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce let-bindings for nested applications.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "snip",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#snip",
          "type": "function"
        },
        "index": {
          "description": "Introduce let-bindings for nested applications",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "snip",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:snip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce let-bindings for nested applications.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "snipOver",
          "package": "ddc-core-simpl",
          "signature": "Simplifier s a n",
          "source": "src/DDC-Core-Simplifier-Recipe.html#snipOver",
          "type": "function"
        },
        "index": {
          "description": "Introduce let-bindings for nested applications",
          "hierarchy": "DDC Core Simplifier Recipe",
          "module": "DDC.Core.Simplifier.Recipe",
          "name": "snipOver",
          "package": "ddc-core-simpl",
          "partial": "Over",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Recipe.html#v:snipOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Simplifier.Result",
          "name": "Result",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Result.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "Result",
          "package": "ddc-core-simpl",
          "partial": "Result",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace-holder type to use when there is no real \u003ccode\u003e\u003ca\u003eTransformResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Result",
          "name": "NoInformation",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Result.html#NoInformation",
          "type": "data"
        },
        "index": {
          "description": "Place-holder type to use when there is no real TransformResult",
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "NoInformation",
          "package": "ddc-core-simpl",
          "partial": "No Information",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#t:NoInformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential package for a typeable thing,\n   used in \u003ccode\u003e\u003ca\u003eTransformResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Result",
          "name": "TransformInfo",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformInfo",
          "type": "data"
        },
        "index": {
          "description": "Existential package for typeable thing used in TransformResult",
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "TransformInfo",
          "package": "ddc-core-simpl",
          "partial": "Transform Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#t:TransformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage up the result of applying a single transform.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier.Result",
          "name": "TransformResult",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
          "type": "data"
        },
        "index": {
          "description": "Package up the result of applying single transform",
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "TransformResult",
          "package": "ddc-core-simpl",
          "partial": "Transform Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#t:TransformResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Core.Simplifier.Result\",\"DDC.Core.Simplifier\"]",
          "name": "TransformInfo",
          "package": "ddc-core-simpl",
          "signature": "TransformInfo i",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:TransformInfo\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:TransformInfo\"]"
        },
        "index": {
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "TransformInfo",
          "package": "ddc-core-simpl",
          "partial": "Transform Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:TransformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Core.Simplifier.Result\",\"DDC.Core.Simplifier\"]",
          "name": "TransformResult",
          "package": "ddc-core-simpl",
          "signature": "TransformResult",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:TransformResult\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:TransformResult\"]"
        },
        "index": {
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "TransformResult",
          "package": "ddc-core-simpl",
          "partial": "Transform Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:TransformResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform result proper (eg the new module)\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Simplifier.Result\",\"DDC.Core.Simplifier\"]",
          "name": "result",
          "package": "ddc-core-simpl",
          "signature": "r",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:result\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:result\"]"
        },
        "index": {
          "description": "Transform result proper eg the new module",
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "result",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether it might help to run the same transform again.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e then a simplifier fixpoint won't apply this transform\n   again to the result program.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Simplifier.Result\",\"DDC.Core.Simplifier\"]",
          "name": "resultAgain",
          "package": "ddc-core-simpl",
          "signature": "Bool",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultAgain\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:resultAgain\"]"
        },
        "index": {
          "description": "Whether it might help to run the same transform again If False then simplifier fixpoint won apply this transform again to the result program",
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "resultAgain",
          "package": "ddc-core-simpl",
          "partial": "Again",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultAgain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a default result with no transform again.\n\u003c/p\u003e\u003cp\u003eWe'll say we made progress, but set \u003ccode\u003e\u003ca\u003eresultAgain\u003c/a\u003e\u003c/code\u003e to False\n   so to stop any simplifier fixpoints.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Simplifier.Result\",\"DDC.Core.Simplifier\"]",
          "name": "resultDone",
          "package": "ddc-core-simpl",
          "signature": "String -\u003e r -\u003e TransformResult r",
          "source": "src/DDC-Core-Simplifier-Result.html#resultDone",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultDone\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:resultDone\"]"
        },
        "index": {
          "description": "Create default result with no transform again We ll say we made progress but set resultAgain to False so to stop any simplifier fixpoints",
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "resultDone",
          "normalized": "String-\u003ea-\u003eTransformResult a",
          "package": "ddc-core-simpl",
          "partial": "Done",
          "signature": "String-\u003er-\u003eTransformResult r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform specific log. This might contain a count of what rules\n   fired, or information about what parts of the program couldn't\n   be processed.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Simplifier.Result\",\"DDC.Core.Simplifier\"]",
          "name": "resultInfo",
          "package": "ddc-core-simpl",
          "signature": "TransformInfo",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultInfo\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:resultInfo\"]"
        },
        "index": {
          "description": "Transform specific log This might contain count of what rules fired or information about what parts of the program couldn be processed",
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "resultInfo",
          "package": "ddc-core-simpl",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether this transform made any progess.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e then the result program must be the same as the\n   input program, and a simplifer fixpoint won't apply this\n   transform again to the result program.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Simplifier.Result\",\"DDC.Core.Simplifier\"]",
          "name": "resultProgress",
          "package": "ddc-core-simpl",
          "signature": "Bool",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultProgress\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:resultProgress\"]"
        },
        "index": {
          "description": "Whether this transform made any progess If False then the result program must be the same as the input program and simplifer fixpoint won apply this transform again to the result program",
          "hierarchy": "DDC Core Simplifier Result",
          "module": "DDC.Core.Simplifier.Result",
          "name": "resultProgress",
          "package": "ddc-core-simpl",
          "partial": "Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier-Result.html#v:resultProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Simplifier",
          "name": "Simplifier",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Simplifier",
          "package": "ddc-core-simpl",
          "partial": "Simplifier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to get the inliner template (unfolding) for the given name.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "InlinerTemplates",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Base.html#InlinerTemplates",
          "type": "type"
        },
        "index": {
          "description": "Function to get the inliner template unfolding for the given name",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "InlinerTemplates",
          "package": "ddc-core-simpl",
          "partial": "Inliner Templates",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:InlinerTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite rules along with their names.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "NamedRewriteRules",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Base.html#NamedRewriteRules",
          "type": "type"
        },
        "index": {
          "description": "Rewrite rules along with their names",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "NamedRewriteRules",
          "package": "ddc-core-simpl",
          "partial": "Named Rewrite Rules",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:NamedRewriteRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecification of how to simplify a core program.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Simplifier",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Base.html#Simplifier",
          "type": "data"
        },
        "index": {
          "description": "Specification of how to simplify core program",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Simplifier",
          "package": "ddc-core-simpl",
          "partial": "Simplifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:Simplifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndividual transforms to apply during simplification.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Transform",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "data"
        },
        "index": {
          "description": "Individual transforms to apply during simplification",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Transform",
          "package": "ddc-core-simpl",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential package for a typeable thing,\n   used in \u003ccode\u003e\u003ca\u003eTransformResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "TransformInfo",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformInfo",
          "type": "data"
        },
        "index": {
          "description": "Existential package for typeable thing used in TransformResult",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "TransformInfo",
          "package": "ddc-core-simpl",
          "partial": "Transform Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:TransformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage up the result of applying a single transform.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "TransformResult",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Simplifier-Result.html#TransformResult",
          "type": "data"
        },
        "index": {
          "description": "Package up the result of applying single transform",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "TransformResult",
          "package": "ddc-core-simpl",
          "partial": "Transform Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#t:TransformResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite named binders to anonymous deBruijn binders.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Anonymize",
          "package": "ddc-core-simpl",
          "signature": "Anonymize",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Rewrite named binders to anonymous deBruijn binders",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Anonymize",
          "package": "ddc-core-simpl",
          "partial": "Anonymize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Anonymize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform beta reduction when the argument is not a redex.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Beta",
          "package": "ddc-core-simpl",
          "signature": "Beta Config",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Perform beta reduction when the argument is not redex",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Beta",
          "package": "ddc-core-simpl",
          "partial": "Beta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat casts outwards.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Bubble",
          "package": "ddc-core-simpl",
          "signature": "Bubble",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Float casts outwards",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Bubble",
          "package": "ddc-core-simpl",
          "partial": "Bubble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Bubble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElaborate possible Const and Distinct witnesses that aren't\n   otherwise in the program.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Elaborate",
          "package": "ddc-core-simpl",
          "signature": "Elaborate",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Elaborate possible Const and Distinct witnesses that aren otherwise in the program",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Elaborate",
          "package": "ddc-core-simpl",
          "partial": "Elaborate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Elaborate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform eta expansion and reduction.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Eta",
          "package": "ddc-core-simpl",
          "signature": "Eta Config",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Perform eta expansion and reduction",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Eta",
          "package": "ddc-core-simpl",
          "partial": "Eta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Eta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep applying a transform until it reports that further\n   applications won't be helpful, bailing out after a maximum number\n   of applications.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Fix",
          "package": "ddc-core-simpl",
          "signature": "Fix Int (Simplifier s a n)",
          "source": "src/DDC-Core-Simplifier-Base.html#Simplifier",
          "type": "function"
        },
        "index": {
          "description": "Keep applying transform until it reports that further applications won be helpful bailing out after maximum number of applications",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Fix",
          "package": "ddc-core-simpl",
          "partial": "Fix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten nested let and case expressions.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Flatten",
          "package": "ddc-core-simpl",
          "signature": "Flatten",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Flatten nested let and case expressions",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Flatten",
          "package": "ddc-core-simpl",
          "partial": "Flatten",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat single-use bindings forward into their use sites.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Forward",
          "package": "ddc-core-simpl",
          "signature": "Forward",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Float single-use bindings forward into their use sites",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Forward",
          "package": "ddc-core-simpl",
          "partial": "Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Identity transform returns the original program unharmed.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Id",
          "package": "ddc-core-simpl",
          "signature": "Id",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "The Identity transform returns the original program unharmed",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Id",
          "package": "ddc-core-simpl",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline definitions into their use sites.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Inline",
          "package": "ddc-core-simpl",
          "signature": "Inline",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Inline definitions into their use sites",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Inline",
          "package": "ddc-core-simpl",
          "partial": "Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Inline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite anonymous binders to fresh named binders.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Namify",
          "package": "ddc-core-simpl",
          "signature": "Namify",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Rewrite anonymous binders to fresh named binders",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Namify",
          "package": "ddc-core-simpl",
          "partial": "Namify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Namify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove unused, pure let bindings.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Prune",
          "package": "ddc-core-simpl",
          "signature": "Prune",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Remove unused pure let bindings",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Prune",
          "package": "ddc-core-simpl",
          "partial": "Prune",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Prune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply general rule-based rewrites.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Rewrite",
          "package": "ddc-core-simpl",
          "signature": "Rewrite",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Apply general rule-based rewrites",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Rewrite",
          "package": "ddc-core-simpl",
          "partial": "Rewrite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply two simplifiers in sequence.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Seq",
          "package": "ddc-core-simpl",
          "signature": "Seq (Simplifier s a n) (Simplifier s a n)",
          "source": "src/DDC-Core-Simplifier-Base.html#Simplifier",
          "type": "function"
        },
        "index": {
          "description": "Apply two simplifiers in sequence",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Seq",
          "package": "ddc-core-simpl",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce let-bindings for nested applications.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Snip",
          "package": "ddc-core-simpl",
          "signature": "Snip Config",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Introduce let-bindings for nested applications",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Snip",
          "package": "ddc-core-simpl",
          "partial": "Snip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Snip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a single transform.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "Trans",
          "package": "ddc-core-simpl",
          "signature": "Trans (Transform s a n)",
          "source": "src/DDC-Core-Simplifier-Base.html#Simplifier",
          "type": "function"
        },
        "index": {
          "description": "Apply single transform",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "Trans",
          "package": "ddc-core-simpl",
          "partial": "Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:Trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a simplifier to a module.\n\u003c/p\u003e\u003cp\u003eThe state monad can be used by \u003ccode\u003e\u003ca\u003eNamifier\u003c/a\u003e\u003c/code\u003e functions to generate fresh names.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "applySimplifier",
          "package": "ddc-core-simpl",
          "signature": "Profile n-\u003e KindEnv n-\u003e TypeEnv n-\u003e Simplifier s a n-\u003e Module a n-\u003e State s (Module a n)",
          "type": "function"
        },
        "index": {
          "description": "Apply simplifier to module The state monad can be used by Namifier functions to generate fresh names",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "applySimplifier",
          "normalized": "Profile a-\u003eKindEnv a-\u003eTypeEnv a-\u003eSimplifier b c a-\u003eModule c a-\u003eState b(Module c a)",
          "package": "ddc-core-simpl",
          "partial": "Simplifier",
          "signature": "Profile n-\u003eKindEnv n-\u003eTypeEnv n-\u003eSimplifier s a n-\u003eModule a n-\u003eState s(Module a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:applySimplifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a simplifier to an expression.\n\u003c/p\u003e\u003cp\u003eThe state monad can be used by \u003ccode\u003e\u003ca\u003eNamifier\u003c/a\u003e\u003c/code\u003e functions to generate fresh names.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "applySimplifierX",
          "package": "ddc-core-simpl",
          "signature": "Profile n-\u003e KindEnv n-\u003e TypeEnv n-\u003e Simplifier s a n-\u003e Exp a n-\u003e State s (TransformResult (Exp a n))",
          "type": "function"
        },
        "index": {
          "description": "Apply simplifier to an expression The state monad can be used by Namifier functions to generate fresh names",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "applySimplifierX",
          "normalized": "Profile a-\u003eKindEnv a-\u003eTypeEnv a-\u003eSimplifier b c a-\u003eExp c a-\u003eState b(TransformResult(Exp c a))",
          "package": "ddc-core-simpl",
          "partial": "Simplifier",
          "signature": "Profile n-\u003eKindEnv n-\u003eTypeEnv n-\u003eSimplifier s a n-\u003eExp a n-\u003eState s(TransformResult(Exp a n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:applySimplifierX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the unfolding for a named variable.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "transInlineDef",
          "package": "ddc-core-simpl",
          "signature": "InlinerTemplates a n",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Get the unfolding for named variable",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "transInlineDef",
          "package": "ddc-core-simpl",
          "partial": "Inline Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:transInlineDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a namifier to make fresh type (level-1) \n   names that don't conflict with any already in this\n   environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "transMkNamifierT",
          "package": "ddc-core-simpl",
          "signature": "Env n -\u003e Namifier s n",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Create namifier to make fresh type level-1 names that don conflict with any already in this environment",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "transMkNamifierT",
          "normalized": "Env a-\u003eNamifier b a",
          "package": "ddc-core-simpl",
          "partial": "Mk Namifier",
          "signature": "Env n-\u003eNamifier s n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:transMkNamifierT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a namifier to make fresh value or witness (level-0) \n   names that don't conflict with any already in this\n   environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "transMkNamifierX",
          "package": "ddc-core-simpl",
          "signature": "Env n -\u003e Namifier s n",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "Create namifier to make fresh value or witness level-0 names that don conflict with any already in this environment",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "transMkNamifierX",
          "normalized": "Env a-\u003eNamifier b a",
          "package": "ddc-core-simpl",
          "partial": "Mk Namifier",
          "signature": "Env n-\u003eNamifier s n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:transMkNamifierX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of rewrite rules along with their names.\n\u003c/p\u003e",
          "module": "DDC.Core.Simplifier",
          "name": "transRules",
          "package": "ddc-core-simpl",
          "signature": "NamedRewriteRules a n",
          "source": "src/DDC-Core-Simplifier-Base.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "List of rewrite rules along with their names",
          "hierarchy": "DDC Core Simplifier",
          "module": "DDC.Core.Simplifier",
          "name": "transRules",
          "package": "ddc-core-simpl",
          "partial": "Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Simplifier.html#v:transRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRewrite all binders to anonymous deBruijn form.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "AnonymizeX",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-AnonymizeX.html",
          "type": "module"
        },
        "index": {
          "description": "Rewrite all binders to anonymous deBruijn form",
          "hierarchy": "DDC Core Transform AnonymizeX",
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "AnonymizeX",
          "package": "ddc-core-simpl",
          "partial": "Anonymize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "AnonymizeX",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-AnonymizeX.html#AnonymizeX",
          "type": "class"
        },
        "index": {
          "hierarchy": "DDC Core Transform AnonymizeX",
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "AnonymizeX",
          "package": "ddc-core-simpl",
          "partial": "Anonymize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#t:AnonymizeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite all binders in a thing to be anonymous.\n   The stacks contains existing anonymous binders that we have entered into,\n   and named binders that we have rewritten. All bound occurrences of variables\n   will be replaced by references into these stacks.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "anonymizeWithX",
          "package": "ddc-core-simpl",
          "signature": "anonymizeWithX",
          "source": "src/DDC-Core-Transform-AnonymizeX.html#anonymizeWithX",
          "type": "method"
        },
        "index": {
          "description": "Rewrite all binders in thing to be anonymous The stacks contains existing anonymous binders that we have entered into and named binders that we have rewritten All bound occurrences of variables will be replaced by references into these stacks",
          "hierarchy": "DDC Core Transform AnonymizeX",
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "anonymizeWithX",
          "package": "ddc-core-simpl",
          "partial": "With",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#v:anonymizeWithX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite all binders in a thing to anonymous form.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "anonymizeX",
          "package": "ddc-core-simpl",
          "signature": "c n -\u003e c n",
          "source": "src/DDC-Core-Transform-AnonymizeX.html#anonymizeX",
          "type": "function"
        },
        "index": {
          "description": "Rewrite all binders in thing to anonymous form",
          "hierarchy": "DDC Core Transform AnonymizeX",
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "anonymizeX",
          "normalized": "a b-\u003ea b",
          "package": "ddc-core-simpl",
          "signature": "c n-\u003ec n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#v:anonymizeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush a binding occurrence of a level-0 on the stack, \n   returning the anonyized binding occurrence and the new stack.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "pushAnonymizeBindX",
          "package": "ddc-core-simpl",
          "signature": "Set n-\u003e [Bind n]-\u003e [Bind n]-\u003e Bind n-\u003e ([Bind n], Bind n)",
          "type": "function"
        },
        "index": {
          "description": "Push binding occurrence of level-0 on the stack returning the anonyized binding occurrence and the new stack",
          "hierarchy": "DDC Core Transform AnonymizeX",
          "module": "DDC.Core.Transform.AnonymizeX",
          "name": "pushAnonymizeBindX",
          "normalized": "Set a-\u003e[Bind a]-\u003e[Bind a]-\u003eBind a-\u003e([Bind a],Bind a)",
          "package": "ddc-core-simpl",
          "partial": "Anonymize Bind",
          "signature": "Set n-\u003e[Bind n]-\u003e[Bind n]-\u003eBind n-\u003e([Bind n],Bind n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-AnonymizeX.html#v:pushAnonymizeBindX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBeta-reduce applications of a explicit lambda abstractions \n   to variables and values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "Beta",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Beta.html",
          "type": "module"
        },
        "index": {
          "description": "Beta-reduce applications of explicit lambda abstractions to variables and values",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "Beta",
          "package": "ddc-core-simpl",
          "partial": "Beta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Beta",
          "name": "Config",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Beta.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA summary of what the beta reduction transform did.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "Info",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Beta.html#Info",
          "type": "data"
        },
        "index": {
          "description": "summary of what the beta reduction transform did",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "Info",
          "package": "ddc-core-simpl",
          "partial": "Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#t:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Beta",
          "name": "Config",
          "package": "ddc-core-simpl",
          "signature": "Config",
          "source": "src/DDC-Core-Transform-Beta.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Beta",
          "name": "Info",
          "package": "ddc-core-simpl",
          "signature": "Info",
          "source": "src/DDC-Core-Transform-Beta.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "Info",
          "package": "ddc-core-simpl",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeta-reduce applications of a explicit lambda abstractions \n   to variables and values.\n\u003c/p\u003e\u003cp\u003eIf the flag is set then if we find a lambda abstraction that is applied\n   to a redex then let-bind the redex and substitute the new variable\n   instead.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "betaReduce",
          "package": "ddc-core-simpl",
          "signature": "Config -\u003e c a n -\u003e TransformResult (c a n)",
          "source": "src/DDC-Core-Transform-Beta.html#betaReduce",
          "type": "function"
        },
        "index": {
          "description": "Beta-reduce applications of explicit lambda abstractions to variables and values If the flag is set then if we find lambda abstraction that is applied to redex then let-bind the redex and substitute the new variable instead",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "betaReduce",
          "normalized": "Config-\u003ea b c-\u003eTransformResult(a b c)",
          "package": "ddc-core-simpl",
          "partial": "Reduce",
          "signature": "Config-\u003ec a n-\u003eTransformResult(c a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:betaReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf we find a lambda abstraction applied to a redex then let-bind\n   the redex and substitute the new variable instead.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "configBindRedexes",
          "package": "ddc-core-simpl",
          "signature": "Bool",
          "source": "src/DDC-Core-Transform-Beta.html#Config",
          "type": "function"
        },
        "index": {
          "description": "If we find lambda abstraction applied to redex then let-bind the redex and substitute the new variable instead",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "configBindRedexes",
          "package": "ddc-core-simpl",
          "partial": "Bind Redexes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:configBindRedexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty beta configuration with all flags set to False.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "configZero",
          "package": "ddc-core-simpl",
          "signature": "Config",
          "source": "src/DDC-Core-Transform-Beta.html#configZero",
          "type": "function"
        },
        "index": {
          "description": "Empty beta configuration with all flags set to False",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "configZero",
          "package": "ddc-core-simpl",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:configZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of type applications reduced.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoTypes",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Beta.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of type applications reduced",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoTypes",
          "package": "ddc-core-simpl",
          "partial": "Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of value applications reduced.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoValues",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Beta.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of value applications reduced",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoValues",
          "package": "ddc-core-simpl",
          "partial": "Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of redexes let-bound.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoValuesLetted",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Beta.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of redexes let-bound",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoValuesLetted",
          "package": "ddc-core-simpl",
          "partial": "Values Letted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoValuesLetted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of applications that we couldn't reduce.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoValuesSkipped",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Beta.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of applications that we couldn reduce",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoValuesSkipped",
          "package": "ddc-core-simpl",
          "partial": "Values Skipped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoValuesSkipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of witness applications reduced.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoWits",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Beta.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of witness applications reduced",
          "hierarchy": "DDC Core Transform Beta",
          "module": "DDC.Core.Transform.Beta",
          "name": "infoWits",
          "package": "ddc-core-simpl",
          "partial": "Wits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Beta.html#v:infoWits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBubble casts outwards.\n   We float casts up and outwards so they are just inside the inner-most\n   enclosing let. This way the functions still have the same effect and\n   closure, but the casts don't get in the way of subsequent transforms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Bubble",
          "name": "Bubble",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Bubble.html",
          "type": "module"
        },
        "index": {
          "description": "Bubble casts outwards We float casts up and outwards so they are just inside the inner-most enclosing let This way the functions still have the same effect and closure but the casts don get in the way of subsequent transforms",
          "hierarchy": "DDC Core Transform Bubble",
          "module": "DDC.Core.Transform.Bubble",
          "name": "Bubble",
          "package": "ddc-core-simpl",
          "partial": "Bubble",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Bubble.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBubble casts outwards in a \u003ccode\u003e\u003ca\u003eModule\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Bubble",
          "name": "bubbleModule",
          "package": "ddc-core-simpl",
          "signature": "Module a n -\u003e Module a n",
          "source": "src/DDC-Core-Transform-Bubble.html#bubbleModule",
          "type": "function"
        },
        "index": {
          "description": "Bubble casts outwards in Module",
          "hierarchy": "DDC Core Transform Bubble",
          "module": "DDC.Core.Transform.Bubble",
          "name": "bubbleModule",
          "normalized": "Module a b-\u003eModule a b",
          "package": "ddc-core-simpl",
          "partial": "Module",
          "signature": "Module a n-\u003eModule a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Bubble.html#v:bubbleModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBubble casts outwards in an \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Bubble",
          "name": "bubbleX",
          "package": "ddc-core-simpl",
          "signature": "KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e Exp a n",
          "source": "src/DDC-Core-Transform-Bubble.html#bubbleX",
          "type": "function"
        },
        "index": {
          "description": "Bubble casts outwards in an Exp",
          "hierarchy": "DDC Core Transform Bubble",
          "module": "DDC.Core.Transform.Bubble",
          "name": "bubbleX",
          "normalized": "KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eExp b a",
          "package": "ddc-core-simpl",
          "signature": "KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eExp a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Bubble.html#v:bubbleX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdd possible Const and Distinct witnesses that aren't\n   otherwise in the program.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Elaborate",
          "name": "Elaborate",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Elaborate.html",
          "type": "module"
        },
        "index": {
          "description": "Add possible Const and Distinct witnesses that aren otherwise in the program",
          "hierarchy": "DDC Core Transform Elaborate",
          "module": "DDC.Core.Transform.Elaborate",
          "name": "Elaborate",
          "package": "ddc-core-simpl",
          "partial": "Elaborate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Elaborate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElaborate witnesses in a module.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Elaborate",
          "name": "elaborateModule",
          "package": "ddc-core-simpl",
          "signature": "Module a n -\u003e Module a n",
          "source": "src/DDC-Core-Transform-Elaborate.html#elaborateModule",
          "type": "function"
        },
        "index": {
          "description": "Elaborate witnesses in module",
          "hierarchy": "DDC Core Transform Elaborate",
          "module": "DDC.Core.Transform.Elaborate",
          "name": "elaborateModule",
          "normalized": "Module a b-\u003eModule a b",
          "package": "ddc-core-simpl",
          "partial": "Module",
          "signature": "Module a n-\u003eModule a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Elaborate.html#v:elaborateModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElaborate witnesses in an expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Elaborate",
          "name": "elaborateX",
          "package": "ddc-core-simpl",
          "signature": "Exp a n -\u003e Exp a n",
          "source": "src/DDC-Core-Transform-Elaborate.html#elaborateX",
          "type": "function"
        },
        "index": {
          "description": "Elaborate witnesses in an expression",
          "hierarchy": "DDC Core Transform Elaborate",
          "module": "DDC.Core.Transform.Elaborate",
          "name": "elaborateX",
          "normalized": "Exp a b-\u003eExp a b",
          "package": "ddc-core-simpl",
          "signature": "Exp a n-\u003eExp a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Elaborate.html#v:elaborateX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Eta",
          "name": "Eta",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Eta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "Eta",
          "package": "ddc-core-simpl",
          "partial": "Eta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Eta",
          "name": "Config",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Eta.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Eta",
          "name": "Info",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Eta.html#Info",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "Info",
          "package": "ddc-core-simpl",
          "partial": "Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#t:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Eta",
          "name": "Config",
          "package": "ddc-core-simpl",
          "signature": "Config",
          "source": "src/DDC-Core-Transform-Eta.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Eta",
          "name": "Info",
          "package": "ddc-core-simpl",
          "signature": "Info",
          "source": "src/DDC-Core-Transform-Eta.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "Info",
          "package": "ddc-core-simpl",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Eta",
          "name": "configExpand",
          "package": "ddc-core-simpl",
          "signature": "Bool",
          "source": "src/DDC-Core-Transform-Eta.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "configExpand",
          "package": "ddc-core-simpl",
          "partial": "Expand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:configExpand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty eta configuration with all flags set to False.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Eta",
          "name": "configZero",
          "package": "ddc-core-simpl",
          "signature": "Config",
          "source": "src/DDC-Core-Transform-Eta.html#configZero",
          "type": "function"
        },
        "index": {
          "description": "Empty eta configuration with all flags set to False",
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "configZero",
          "package": "ddc-core-simpl",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:configZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEta-transform expressions in a module.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Eta",
          "name": "etaModule",
          "package": "ddc-core-simpl",
          "signature": "Config -\u003e Profile n -\u003e Module a n -\u003e TransformResult (Module a n)",
          "source": "src/DDC-Core-Transform-Eta.html#etaModule",
          "type": "function"
        },
        "index": {
          "description": "Eta-transform expressions in module",
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "etaModule",
          "normalized": "Config-\u003eProfile a-\u003eModule b a-\u003eTransformResult(Module b a)",
          "package": "ddc-core-simpl",
          "partial": "Module",
          "signature": "Config-\u003eProfile n-\u003eModule a n-\u003eTransformResult(Module a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:etaModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEta-transform an expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Eta",
          "name": "etaX",
          "package": "ddc-core-simpl",
          "signature": "Config-\u003e Profile n-\u003e KindEnv n-\u003e TypeEnv n-\u003e Exp a n-\u003e TransformResult (Exp a n)",
          "type": "function"
        },
        "index": {
          "description": "Eta-transform an expression",
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "etaX",
          "normalized": "Config-\u003eProfile a-\u003eKindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eTransformResult(Exp b a)",
          "package": "ddc-core-simpl",
          "signature": "Config-\u003eProfile n-\u003eKindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eTransformResult(Exp a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:etaX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of level-1 lambdas added.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Eta",
          "name": "infoExpandedXLAMs",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Eta.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of level-1 lambdas added",
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "infoExpandedXLAMs",
          "package": "ddc-core-simpl",
          "partial": "Expanded XLAMs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:infoExpandedXLAMs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of level-0 lambdas added. \n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Eta",
          "name": "infoExpandedXLams",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Eta.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of level-0 lambdas added",
          "hierarchy": "DDC Core Transform Eta",
          "module": "DDC.Core.Transform.Eta",
          "name": "infoExpandedXLams",
          "package": "ddc-core-simpl",
          "partial": "Expanded XLams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Eta.html#v:infoExpandedXLams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFlattening nested let and case expressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Flatten",
          "name": "Flatten",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Flatten.html",
          "type": "module"
        },
        "index": {
          "description": "Flattening nested let and case expressions",
          "hierarchy": "DDC Core Transform Flatten",
          "module": "DDC.Core.Transform.Flatten",
          "name": "Flatten",
          "package": "ddc-core-simpl",
          "partial": "Flatten",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Flatten.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten binding structure in a thing.\n\u003c/p\u003e\u003cp\u003eFlattens nested let-expressions, \n   and single alternative let-case expressions. \n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Flatten",
          "name": "flatten",
          "package": "ddc-core-simpl",
          "signature": "c a n -\u003e c a n",
          "source": "src/DDC-Core-Transform-Flatten.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Flatten binding structure in thing Flattens nested let-expressions and single alternative let-case expressions",
          "hierarchy": "DDC Core Transform Flatten",
          "module": "DDC.Core.Transform.Flatten",
          "name": "flatten",
          "normalized": "a b c-\u003ea b c",
          "package": "ddc-core-simpl",
          "signature": "c a n-\u003ec a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Flatten.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFloat let-bindings with a single use forward into their use-sites.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "Forward",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Forward.html",
          "type": "module"
        },
        "index": {
          "description": "Float let-bindings with single use forward into their use-sites",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "Forward",
          "package": "ddc-core-simpl",
          "partial": "Forward",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Forward",
          "name": "Config",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Forward.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFine control over what should be floated.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "FloatControl",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Forward.html#FloatControl",
          "type": "data"
        },
        "index": {
          "description": "Fine control over what should be floated",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "FloatControl",
          "package": "ddc-core-simpl",
          "partial": "Float Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#t:FloatControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSummary of number of bindings floated.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "ForwardInfo",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
          "type": "data"
        },
        "index": {
          "description": "Summary of number of bindings floated",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "ForwardInfo",
          "package": "ddc-core-simpl",
          "partial": "Forward Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#t:ForwardInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Forward",
          "name": "Config",
          "package": "ddc-core-simpl",
          "signature": "Config",
          "source": "src/DDC-Core-Transform-Forward.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow binding to be floated, but don't require it.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "FloatAllow",
          "package": "ddc-core-simpl",
          "signature": "FloatAllow",
          "source": "src/DDC-Core-Transform-Forward.html#FloatControl",
          "type": "function"
        },
        "index": {
          "description": "Allow binding to be floated but don require it",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "FloatAllow",
          "package": "ddc-core-simpl",
          "partial": "Float Allow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:FloatAllow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrevent a binding being floated, at all times.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "FloatDeny",
          "package": "ddc-core-simpl",
          "signature": "FloatDeny",
          "source": "src/DDC-Core-Transform-Forward.html#FloatControl",
          "type": "function"
        },
        "index": {
          "description": "Prevent binding being floated at all times",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "FloatDeny",
          "package": "ddc-core-simpl",
          "partial": "Float Deny",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:FloatDeny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce   a binding to be floated, at all times.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "FloatForce",
          "package": "ddc-core-simpl",
          "signature": "FloatForce",
          "source": "src/DDC-Core-Transform-Forward.html#FloatControl",
          "type": "function"
        },
        "index": {
          "description": "Force binding to be floated at all times",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "FloatForce",
          "package": "ddc-core-simpl",
          "partial": "Float Force",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:FloatForce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Forward",
          "name": "ForwardInfo",
          "package": "ddc-core-simpl",
          "signature": "ForwardInfo",
          "source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "ForwardInfo",
          "package": "ddc-core-simpl",
          "partial": "Forward Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:ForwardInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Forward",
          "name": "configFloatControl",
          "package": "ddc-core-simpl",
          "signature": "Lets a n -\u003e FloatControl",
          "source": "src/DDC-Core-Transform-Forward.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "configFloatControl",
          "normalized": "Lets a b-\u003eFloatControl",
          "package": "ddc-core-simpl",
          "partial": "Float Control",
          "signature": "Lets a n-\u003eFloatControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:configFloatControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Forward",
          "name": "configFloatLetBody",
          "package": "ddc-core-simpl",
          "signature": "Bool",
          "source": "src/DDC-Core-Transform-Forward.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "configFloatLetBody",
          "package": "ddc-core-simpl",
          "partial": "Float Let Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:configFloatLetBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat let-bindings in a module with a single use forward into\n   their use sites.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "forwardModule",
          "package": "ddc-core-simpl",
          "signature": "Profile n-\u003e Config a n-\u003e Module a n-\u003e TransformResult (Module a n)",
          "type": "function"
        },
        "index": {
          "description": "Float let-bindings in module with single use forward into their use sites",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "forwardModule",
          "normalized": "Profile a-\u003eConfig b a-\u003eModule b a-\u003eTransformResult(Module b a)",
          "package": "ddc-core-simpl",
          "partial": "Module",
          "signature": "Profile n-\u003eConfig a n-\u003eModule a n-\u003eTransformResult(Module a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:forwardModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat let-bindings in an expression with a single use forward into\n   their use-sites.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "forwardX",
          "package": "ddc-core-simpl",
          "signature": "Profile n-\u003e Config a n-\u003e Exp a n-\u003e TransformResult (Exp a n)",
          "type": "function"
        },
        "index": {
          "description": "Float let-bindings in an expression with single use forward into their use-sites",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "forwardX",
          "normalized": "Profile a-\u003eConfig b a-\u003eExp b a-\u003eTransformResult(Exp b a)",
          "package": "ddc-core-simpl",
          "signature": "Profile n-\u003eConfig a n-\u003eExp a n-\u003eTransformResult(Exp a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:forwardX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of bindings floated forwards.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "infoBindings",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
          "type": "function"
        },
        "index": {
          "description": "Number of bindings floated forwards",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "infoBindings",
          "package": "ddc-core-simpl",
          "partial": "Bindings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:infoBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of bindings inspected.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "infoInspected",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
          "type": "function"
        },
        "index": {
          "description": "Number of bindings inspected",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "infoInspected",
          "package": "ddc-core-simpl",
          "partial": "Inspected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:infoInspected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of trivial \u003ccode\u003ev1 = v2\u003c/code\u003e bindings inlined.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Forward",
          "name": "infoSubsts",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Forward.html#ForwardInfo",
          "type": "function"
        },
        "index": {
          "description": "Number of trivial v1 v2 bindings inlined",
          "hierarchy": "DDC Core Transform Forward",
          "module": "DDC.Core.Transform.Forward",
          "name": "infoSubsts",
          "package": "ddc-core-simpl",
          "partial": "Substs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Forward.html#v:infoSubsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInlining definitions into their use sites.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Inline",
          "name": "Inline",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Inline.html",
          "type": "module"
        },
        "index": {
          "description": "Inlining definitions into their use sites",
          "hierarchy": "DDC Core Transform Inline",
          "module": "DDC.Core.Transform.Inline",
          "name": "Inline",
          "package": "ddc-core-simpl",
          "partial": "Inline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInlining specification says what bindings we should inline\n   from a particular module.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Inline",
          "name": "InlineSpec",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
          "type": "data"
        },
        "index": {
          "description": "Inlining specification says what bindings we should inline from particular module",
          "hierarchy": "DDC Core Transform Inline",
          "module": "DDC.Core.Transform.Inline",
          "name": "InlineSpec",
          "package": "ddc-core-simpl",
          "partial": "Inline Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#t:InlineSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline all bindings from a module,\n   but exclude some particulars.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Inline",
          "name": "InlineSpecAll",
          "package": "ddc-core-simpl",
          "signature": "InlineSpecAll",
          "source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
          "type": "function"
        },
        "index": {
          "description": "Inline all bindings from module but exclude some particulars",
          "hierarchy": "DDC Core Transform Inline",
          "module": "DDC.Core.Transform.Inline",
          "name": "InlineSpecAll",
          "package": "ddc-core-simpl",
          "partial": "Inline Spec All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:InlineSpecAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline no bindings from a module,\n   but include some particulars.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Inline",
          "name": "InlineSpecNone",
          "package": "ddc-core-simpl",
          "signature": "InlineSpecNone",
          "source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
          "type": "function"
        },
        "index": {
          "description": "Inline no bindings from module but include some particulars",
          "hierarchy": "DDC Core Transform Inline",
          "module": "DDC.Core.Transform.Inline",
          "name": "InlineSpecNone",
          "package": "ddc-core-simpl",
          "partial": "Inline Spec None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:InlineSpecNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Inline",
          "name": "inline",
          "package": "ddc-core-simpl",
          "signature": "(n -\u003e Maybe (Exp a n))-\u003e Set n-\u003e c a n-\u003e c a n",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Inline",
          "module": "DDC.Core.Transform.Inline",
          "name": "inline",
          "normalized": "(a-\u003eMaybe(Exp b a))-\u003eSet a-\u003ec b a-\u003ec b a",
          "package": "ddc-core-simpl",
          "signature": "(n-\u003eMaybe(Exp a n))-\u003eSet n-\u003ec a n-\u003ec a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:inline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Inline",
          "name": "inlineSpecExclude",
          "package": "ddc-core-simpl",
          "signature": "Set n",
          "source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Inline",
          "module": "DDC.Core.Transform.Inline",
          "name": "inlineSpecExclude",
          "package": "ddc-core-simpl",
          "partial": "Spec Exclude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:inlineSpecExclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Inline",
          "name": "inlineSpecInclude",
          "package": "ddc-core-simpl",
          "signature": "Set n",
          "source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Inline",
          "module": "DDC.Core.Transform.Inline",
          "name": "inlineSpecInclude",
          "package": "ddc-core-simpl",
          "partial": "Spec Include",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:inlineSpecInclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Inline",
          "name": "inlineSpecModuleName",
          "package": "ddc-core-simpl",
          "signature": "ModuleName",
          "source": "src/DDC-Core-Transform-Inline-Templates.html#InlineSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Inline",
          "module": "DDC.Core.Transform.Inline",
          "name": "inlineSpecModuleName",
          "package": "ddc-core-simpl",
          "partial": "Spec Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:inlineSpecModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup an inliner template from a list of modules.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Inline",
          "name": "lookupTemplateFromModules",
          "package": "ddc-core-simpl",
          "signature": "Map ModuleName (InlineSpec n)-\u003e [Module a n]-\u003e n-\u003e Maybe (Exp a n)",
          "type": "function"
        },
        "index": {
          "description": "Lookup an inliner template from list of modules",
          "hierarchy": "DDC Core Transform Inline",
          "module": "DDC.Core.Transform.Inline",
          "name": "lookupTemplateFromModules",
          "normalized": "Map ModuleName(InlineSpec a)-\u003e[Module b a]-\u003ea-\u003eMaybe(Exp b a)",
          "package": "ddc-core-simpl",
          "partial": "Template From Modules",
          "signature": "Map ModuleName(InlineSpec n)-\u003e[Module a n]-\u003en-\u003eMaybe(Exp a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Inline.html#v:lookupTemplateFromModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRewriting of anonymous binders to named binders.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Namify",
          "name": "Namify",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Namify.html",
          "type": "module"
        },
        "index": {
          "description": "Rewriting of anonymous binders to named binders",
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "Namify",
          "package": "ddc-core-simpl",
          "partial": "Namify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds a function to rename binders, \n   and the state of the renamer as we decend into the tree.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Namify",
          "name": "Namifier",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Namify.html#Namifier",
          "type": "data"
        },
        "index": {
          "description": "Holds function to rename binders and the state of the renamer as we decend into the tree",
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "Namifier",
          "package": "ddc-core-simpl",
          "partial": "Namifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#t:Namifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Namify",
          "name": "Namify",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Namify.html#Namify",
          "type": "class"
        },
        "index": {
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "Namify",
          "package": "ddc-core-simpl",
          "partial": "Namify",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#t:Namify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Namify",
          "name": "Namifier",
          "package": "ddc-core-simpl",
          "signature": "Namifier",
          "source": "src/DDC-Core-Transform-Namify.html#Namifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "Namifier",
          "package": "ddc-core-simpl",
          "partial": "Namifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:Namifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new namifier.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Namify",
          "name": "makeNamifier",
          "package": "ddc-core-simpl",
          "signature": "(Env n -\u003e Bind n -\u003e State s n)-\u003e Env n-\u003e Namifier s n",
          "type": "function"
        },
        "index": {
          "description": "Construct new namifier",
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "makeNamifier",
          "normalized": "(Env a-\u003eBind a-\u003eState b a)-\u003eEnv a-\u003eNamifier b a",
          "package": "ddc-core-simpl",
          "partial": "Namifier",
          "signature": "(Env n-\u003eBind n-\u003eState s n)-\u003eEnv n-\u003eNamifier s n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:makeNamifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds the current environment during namification.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Namify",
          "name": "namifierEnv",
          "package": "ddc-core-simpl",
          "signature": "Env n",
          "source": "src/DDC-Core-Transform-Namify.html#Namifier",
          "type": "function"
        },
        "index": {
          "description": "Holds the current environment during namification",
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "namifierEnv",
          "package": "ddc-core-simpl",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namifierEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new name for this bind that is not in the given\n   environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Namify",
          "name": "namifierNew",
          "package": "ddc-core-simpl",
          "signature": "Env n -\u003e Bind n -\u003e State s n",
          "source": "src/DDC-Core-Transform-Namify.html#Namifier",
          "type": "function"
        },
        "index": {
          "description": "Create new name for this bind that is not in the given environment",
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "namifierNew",
          "normalized": "Env a-\u003eBind a-\u003eState b a",
          "package": "ddc-core-simpl",
          "partial": "New",
          "signature": "Env n-\u003eBind n-\u003eState s n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namifierNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStack of debruijn binders that have been rewritten during\n   namification.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Namify",
          "name": "namifierStack",
          "package": "ddc-core-simpl",
          "signature": "[Bind n]",
          "source": "src/DDC-Core-Transform-Namify.html#Namifier",
          "type": "function"
        },
        "index": {
          "description": "Stack of debruijn binders that have been rewritten during namification",
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "namifierStack",
          "normalized": "[Bind a]",
          "package": "ddc-core-simpl",
          "partial": "Stack",
          "signature": "[Bind n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namifierStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite anonymous binders to named binders in a thing.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Namify",
          "name": "namify",
          "package": "ddc-core-simpl",
          "signature": "namify",
          "source": "src/DDC-Core-Transform-Namify.html#namify",
          "type": "method"
        },
        "index": {
          "description": "Rewrite anonymous binders to named binders in thing",
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "namify",
          "package": "ddc-core-simpl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamify a thing, \n   not reusing names already in the program.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Namify",
          "name": "namifyUnique",
          "package": "ddc-core-simpl",
          "signature": "(KindEnv n -\u003e Namifier s n)-\u003e (TypeEnv n -\u003e Namifier s n)-\u003e c n-\u003e State s (c n)",
          "type": "function"
        },
        "index": {
          "description": "Namify thing not reusing names already in the program",
          "hierarchy": "DDC Core Transform Namify",
          "module": "DDC.Core.Transform.Namify",
          "name": "namifyUnique",
          "normalized": "(KindEnv a-\u003eNamifier b a)-\u003e(TypeEnv a-\u003eNamifier b a)-\u003ec a-\u003eState b(c a)",
          "package": "ddc-core-simpl",
          "partial": "Unique",
          "signature": "(KindEnv n-\u003eNamifier s n)-\u003e(TypeEnv n-\u003eNamifier s n)-\u003ec n-\u003eState s(c n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Namify.html#v:namifyUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eErase contained let-bindings that have no uses.\n\u003c/p\u003e\u003cp\u003eContained bindings are ones that do not perform effects that are\n   visible to anything in the calling context. This includes allocation\n   and read effects, but not writes or any globally visible effects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Prune",
          "name": "Prune",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Prune.html",
          "type": "module"
        },
        "index": {
          "description": "Erase contained let-bindings that have no uses Contained bindings are ones that do not perform effects that are visible to anything in the calling context This includes allocation and read effects but not writes or any globally visible effects",
          "hierarchy": "DDC Core Transform Prune",
          "module": "DDC.Core.Transform.Prune",
          "name": "Prune",
          "package": "ddc-core-simpl",
          "partial": "Prune",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA summary of what the prune transform did.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Prune",
          "name": "PruneInfo",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Prune.html#PruneInfo",
          "type": "data"
        },
        "index": {
          "description": "summary of what the prune transform did",
          "hierarchy": "DDC Core Transform Prune",
          "module": "DDC.Core.Transform.Prune",
          "name": "PruneInfo",
          "package": "ddc-core-simpl",
          "partial": "Prune Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#t:PruneInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Prune",
          "name": "PruneInfo",
          "package": "ddc-core-simpl",
          "signature": "PruneInfo",
          "source": "src/DDC-Core-Transform-Prune.html#PruneInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Prune",
          "module": "DDC.Core.Transform.Prune",
          "name": "PruneInfo",
          "package": "ddc-core-simpl",
          "partial": "Prune Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#v:PruneInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many let-bindings we erased.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Prune",
          "name": "infoBindingsErased",
          "package": "ddc-core-simpl",
          "signature": "Int",
          "source": "src/DDC-Core-Transform-Prune.html#PruneInfo",
          "type": "function"
        },
        "index": {
          "description": "How many let-bindings we erased",
          "hierarchy": "DDC Core Transform Prune",
          "module": "DDC.Core.Transform.Prune",
          "name": "infoBindingsErased",
          "package": "ddc-core-simpl",
          "partial": "Bindings Erased",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#v:infoBindingsErased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErase pure let-bindings in a module that have no uses.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Prune",
          "name": "pruneModule",
          "package": "ddc-core-simpl",
          "signature": "Profile n-\u003e Module a n-\u003e Module a n",
          "type": "function"
        },
        "index": {
          "description": "Erase pure let-bindings in module that have no uses",
          "hierarchy": "DDC Core Transform Prune",
          "module": "DDC.Core.Transform.Prune",
          "name": "pruneModule",
          "normalized": "Profile a-\u003eModule b a-\u003eModule b a",
          "package": "ddc-core-simpl",
          "partial": "Module",
          "signature": "Profile n-\u003eModule a n-\u003eModule a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#v:pruneModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErase pure let-bindings in an expression that have no uses.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Prune",
          "name": "pruneX",
          "package": "ddc-core-simpl",
          "signature": "Profile n-\u003e KindEnv n-\u003e TypeEnv n-\u003e Exp a n-\u003e TransformResult (Exp a n)",
          "type": "function"
        },
        "index": {
          "description": "Erase pure let-bindings in an expression that have no uses",
          "hierarchy": "DDC Core Transform Prune",
          "module": "DDC.Core.Transform.Prune",
          "name": "pruneX",
          "normalized": "Profile a-\u003eKindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eTransformResult(Exp b a)",
          "package": "ddc-core-simpl",
          "signature": "Profile n-\u003eKindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eTransformResult(Exp a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Prune.html#v:pruneX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCheck whether two effects are non-interfering\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Rewrite.Disjoint",
          "name": "Disjoint",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Disjoint.html",
          "type": "module"
        },
        "index": {
          "description": "Check whether two effects are non-interfering",
          "hierarchy": "DDC Core Transform Rewrite Disjoint",
          "module": "DDC.Core.Transform.Rewrite.Disjoint",
          "name": "Disjoint",
          "package": "ddc-core-simpl",
          "partial": "Disjoint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Disjoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a disjointness property is true in the given\n   rewrite environment.\n\u003c/p\u003e\u003cp\u003eDisjointness means that two effects do not interfere.\n\u003c/p\u003e\u003cp\u003eContext is important because if two regions are known to be\n   distinct, reading from one and writing to another is valid.\n   If they have different names they may not be distinct.\n\u003c/p\u003e\u003cp\u003eAll read effects are disjoint with other reads.\n\u003c/p\u003e\u003cpre\u003e Disjoint (Read r1) (Read r2)\n Disjoint (Read r1) (DeepRead a)\n\u003c/pre\u003e\u003cp\u003eAllocation effects are disjoint with everything.\n\u003c/p\u003e\u003cpre\u003e Disjoint (Alloc r) (_)\n\u003c/pre\u003e\u003cp\u003eAtomic reads and write effects are disjoint if they are to distinct regions.\n\u003c/p\u003e\u003cpre\u003e         Distinct r1 r2\n -----------------------------\n Disjoint (Read r1) (Write r2)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eDeepWrite\u003c/code\u003e effects are only disjoint with allocation effects, because\n   we don't know what regions it will write to.\n\u003c/p\u003e\u003cp\u003eAn effect sum is disjoint from some other effect if all its components are.\n\u003c/p\u003e\u003cpre\u003e Disjoint f1 g /\\ Disjoint f2 g\n -----------------------------\n      Disjoint (f1 + f2) g\n\u003c/pre\u003e\u003cp\u003eDisjointness is commutative.\n\u003c/p\u003e\u003cpre\u003e Disjoint f g\n ------------\n Disjoint g f\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e  checkDisjoint\n\t(Disjoint (Read r1 + Read r2) (Write r3))\n\t[Distinct r1 r3, Distinct r2 r3]\n  = True\n\u003c/pre\u003e",
          "module": "DDC.Core.Transform.Rewrite.Disjoint",
          "name": "checkDisjoint",
          "package": "ddc-core-simpl",
          "signature": "Type n-\u003e RewriteEnv a n-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether disjointness property is true in the given rewrite environment Disjointness means that two effects do not interfere Context is important because if two regions are known to be distinct reading from one and writing to another is valid If they have different names they may not be distinct All read effects are disjoint with other reads Disjoint Read r1 Read r2 Disjoint Read r1 DeepRead Allocation effects are disjoint with everything Disjoint Alloc Atomic reads and write effects are disjoint if they are to distinct regions Distinct r1 r2 Disjoint Read r1 Write r2 DeepWrite effects are only disjoint with allocation effects because we don know what regions it will write to An effect sum is disjoint from some other effect if all its components are Disjoint f1 Disjoint f2 Disjoint f1 f2 Disjointness is commutative Disjoint Disjoint Example checkDisjoint Disjoint Read r1 Read r2 Write r3 Distinct r1 r3 Distinct r2 r3 True",
          "hierarchy": "DDC Core Transform Rewrite Disjoint",
          "module": "DDC.Core.Transform.Rewrite.Disjoint",
          "name": "checkDisjoint",
          "normalized": "Type a-\u003eRewriteEnv b a-\u003eBool",
          "package": "ddc-core-simpl",
          "partial": "Disjoint",
          "signature": "Type n-\u003eRewriteEnv a n-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Disjoint.html#v:checkDisjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a distintness property is true in the given \n   rewrite environment.\n\u003c/p\u003e\u003cp\u003eDistinctness means that two regions do not alias.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Disjoint",
          "name": "checkDistinct",
          "package": "ddc-core-simpl",
          "signature": "Type n-\u003e RewriteEnv a n-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether distintness property is true in the given rewrite environment Distinctness means that two regions do not alias",
          "hierarchy": "DDC Core Transform Rewrite Disjoint",
          "module": "DDC.Core.Transform.Rewrite.Disjoint",
          "name": "checkDistinct",
          "normalized": "Type a-\u003eRewriteEnv b a-\u003eBool",
          "package": "ddc-core-simpl",
          "partial": "Distinct",
          "signature": "Type n-\u003eRewriteEnv a n-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Disjoint.html#v:checkDistinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "Env",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "Env",
          "package": "ddc-core-simpl",
          "partial": "Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA summary of the environment that we perform a rewrite in.\n\u003c/p\u003e\u003cp\u003eAs we decend into the program looking for expressions to rewrite, \n   we keep track of what information as been defined in the environment\n   in a \u003ccode\u003e\u003ca\u003eRewriteEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen we go under an anonymous binder then we push a new outermost\n   list instead of lifting every element on the environment eagerly.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "RewriteEnv",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#RewriteEnv",
          "type": "data"
        },
        "index": {
          "description": "summary of the environment that we perform rewrite in As we decend into the program looking for expressions to rewrite we keep track of what information as been defined in the environment in RewriteEnv When we go under an anonymous binder then we push new outermost list instead of lifting every element on the environment eagerly",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "RewriteEnv",
          "package": "ddc-core-simpl",
          "partial": "Rewrite Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#t:RewriteEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an environment contains the given region, \n   bound by a letregion.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "containsRegion",
          "package": "ddc-core-simpl",
          "signature": "Bound n -\u003e RewriteEnv a n -\u003e Bool",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#containsRegion",
          "type": "function"
        },
        "index": {
          "description": "Check whether an environment contains the given region bound by letregion",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "containsRegion",
          "normalized": "Bound a-\u003eRewriteEnv b a-\u003eBool",
          "package": "ddc-core-simpl",
          "partial": "Region",
          "signature": "Bound n-\u003eRewriteEnv a n-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:containsRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the witness map in the given environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "containsWitness",
          "package": "ddc-core-simpl",
          "signature": "Type n -\u003e RewriteEnv a n -\u003e Bool",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#containsWitness",
          "type": "function"
        },
        "index": {
          "description": "Check if the witness map in the given environment",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "containsWitness",
          "normalized": "Type a-\u003eRewriteEnv b a-\u003eBool",
          "package": "ddc-core-simpl",
          "partial": "Witness",
          "signature": "Type n-\u003eRewriteEnv a n-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:containsWitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "empty",
          "package": "ddc-core-simpl",
          "signature": "RewriteEnv a n",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty environment",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "empty",
          "package": "ddc-core-simpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend an environment with some lambda-bound binder (XLam)\n   Might be a witness. Don't count if it's a region.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "extend",
          "package": "ddc-core-simpl",
          "signature": "Bind n -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#extend",
          "type": "function"
        },
        "index": {
          "description": "Extend an environment with some lambda-bound binder XLam Might be witness Don count if it region",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "extend",
          "normalized": "Bind a-\u003eRewriteEnv b a-\u003eRewriteEnv b a",
          "package": "ddc-core-simpl",
          "signature": "Bind n-\u003eRewriteEnv a n-\u003eRewriteEnv a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend an environment with the variables bount by these let-bindings.\n\u003c/p\u003e\u003cp\u003eIf it's a letregion, remember the region's name and any witnesses.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "extendLets",
          "package": "ddc-core-simpl",
          "signature": "Lets a n -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#extendLets",
          "type": "function"
        },
        "index": {
          "description": "Extend an environment with the variables bount by these let-bindings If it letregion remember the region name and any witnesses",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "extendLets",
          "normalized": "Lets a b-\u003eRewriteEnv a b-\u003eRewriteEnv a b",
          "package": "ddc-core-simpl",
          "partial": "Lets",
          "signature": "Lets a n-\u003eRewriteEnv a n-\u003eRewriteEnv a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:extendLets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the definition of some let-bound variable from the environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "getDef",
          "package": "ddc-core-simpl",
          "signature": "Bound n -\u003e RewriteEnv a n -\u003e Maybe (Exp a n)",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#getDef",
          "type": "function"
        },
        "index": {
          "description": "Lookup the definition of some let-bound variable from the environment",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "getDef",
          "normalized": "Bound a-\u003eRewriteEnv b a-\u003eMaybe(Exp b a)",
          "package": "ddc-core-simpl",
          "partial": "Def",
          "signature": "Bound n-\u003eRewriteEnv a n-\u003eMaybe(Exp a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:getDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all the witness types in an environment, \n   normalising their indices.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "getWitnesses",
          "package": "ddc-core-simpl",
          "signature": "RewriteEnv a n -\u003e [Type n]",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#getWitnesses",
          "type": "function"
        },
        "index": {
          "description": "Get list of all the witness types in an environment normalising their indices",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "getWitnesses",
          "normalized": "RewriteEnv a b-\u003e[Type b]",
          "package": "ddc-core-simpl",
          "partial": "Witnesses",
          "signature": "RewriteEnv a n-\u003e[Type n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:getWitnesses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "hasDef",
          "package": "ddc-core-simpl",
          "signature": "Bound n -\u003e RewriteEnv a n -\u003e Bool",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#hasDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "hasDef",
          "normalized": "Bound a-\u003eRewriteEnv b a-\u003eBool",
          "package": "ddc-core-simpl",
          "partial": "Def",
          "signature": "Bound n-\u003eRewriteEnv a n-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:hasDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a rewrite definition into the environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "insertDef",
          "package": "ddc-core-simpl",
          "signature": "Bind n -\u003e Maybe (Exp a n) -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#insertDef",
          "type": "function"
        },
        "index": {
          "description": "Insert rewrite definition into the environment",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "insertDef",
          "normalized": "Bind a-\u003eMaybe(Exp b a)-\u003eRewriteEnv b a-\u003eRewriteEnv b a",
          "package": "ddc-core-simpl",
          "partial": "Def",
          "signature": "Bind n-\u003eMaybe(Exp a n)-\u003eRewriteEnv a n-\u003eRewriteEnv a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:insertDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise all elements in witness map if binder is anonymous.\n   Only call with type binders: ie XLAM, not XLam\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "lift",
          "package": "ddc-core-simpl",
          "signature": "Bind n -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#lift",
          "type": "function"
        },
        "index": {
          "description": "Raise all elements in witness map if binder is anonymous Only call with type binders ie XLAM not XLam",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "lift",
          "normalized": "Bind a-\u003eRewriteEnv b a-\u003eRewriteEnv b a",
          "package": "ddc-core-simpl",
          "signature": "Bind n-\u003eRewriteEnv a n-\u003eRewriteEnv a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise all elements in definitions map if binder is anonymous\n   Use for *value* binders, not type binders.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "liftValue",
          "package": "ddc-core-simpl",
          "signature": "Bind n -\u003e RewriteEnv a n -\u003e RewriteEnv a n",
          "source": "src/DDC-Core-Transform-Rewrite-Env.html#liftValue",
          "type": "function"
        },
        "index": {
          "description": "Raise all elements in definitions map if binder is anonymous Use for value binders not type binders",
          "hierarchy": "DDC Core Transform Rewrite Env",
          "module": "DDC.Core.Transform.Rewrite.Env",
          "name": "liftValue",
          "normalized": "Bind a-\u003eRewriteEnv b a-\u003eRewriteEnv b a",
          "package": "ddc-core-simpl",
          "partial": "Value",
          "signature": "Bind n-\u003eRewriteEnv a n-\u003eRewriteEnv a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Env.html#v:liftValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate substitution to make (subst template) == target\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Rewrite.Match",
          "name": "Match",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Match.html",
          "type": "module"
        },
        "index": {
          "description": "Create substitution to make subst template target",
          "hierarchy": "DDC Core Transform Rewrite Match",
          "module": "DDC.Core.Transform.Rewrite.Match",
          "name": "Match",
          "package": "ddc-core-simpl",
          "partial": "Match",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Match.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue and type substition.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Match",
          "name": "SubstInfo",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Match.html#SubstInfo",
          "type": "type"
        },
        "index": {
          "description": "Value and type substition",
          "hierarchy": "DDC Core Transform Rewrite Match",
          "module": "DDC.Core.Transform.Rewrite.Match",
          "name": "SubstInfo",
          "package": "ddc-core-simpl",
          "partial": "Subst Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Match.html#t:SubstInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty substition info.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Match",
          "name": "emptySubstInfo",
          "package": "ddc-core-simpl",
          "signature": "SubstInfo a n",
          "source": "src/DDC-Core-Transform-Rewrite-Match.html#emptySubstInfo",
          "type": "function"
        },
        "index": {
          "description": "An empty substition info",
          "hierarchy": "DDC Core Transform Rewrite Match",
          "module": "DDC.Core.Transform.Rewrite.Match",
          "name": "emptySubstInfo",
          "package": "ddc-core-simpl",
          "partial": "Subst Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Match.html#v:emptySubstInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate substitution to make (subst template) == target\n   Does not handle higher-order templates (ie ones with binders)\n\u003c/p\u003e\u003cpre\u003e match emptySubstInfo (Set.fromList [r1, r2, s])\n   (stream [r1]  (unstream [r2]  s))\n   (stream [R0\u003ca name=\"] (unstream [R1\"/\u003e] (someStream 23))\n\n=\u003e { r1 |-\u003e R0#, r2 |-\u003e R1, s |-\u003e someStream 23 }\n\u003c/pre\u003e",
          "module": "DDC.Core.Transform.Rewrite.Match",
          "name": "match",
          "package": "ddc-core-simpl",
          "signature": "SubstInfo a n-\u003e Set n-\u003e Exp a n-\u003e Exp a n-\u003e Maybe (SubstInfo a n)",
          "type": "function"
        },
        "index": {
          "description": "Create substitution to make subst template target Does not handle higher-order templates ie ones with binders match emptySubstInfo Set.fromList r1 r2 stream r1 unstream r2 stream R0 someStream r1 R0 r2 R1 someStream",
          "hierarchy": "DDC Core Transform Rewrite Match",
          "module": "DDC.Core.Transform.Rewrite.Match",
          "name": "match",
          "normalized": "SubstInfo a b-\u003eSet b-\u003eExp a b-\u003eExp a b-\u003eMaybe(SubstInfo a b)",
          "package": "ddc-core-simpl",
          "signature": "SubstInfo a n-\u003eSet n-\u003eExp a n-\u003eExp a n-\u003eMaybe(SubstInfo a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Match.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore language parser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Rewrite.Parser",
          "name": "Parser",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Core language parser",
          "hierarchy": "DDC Core Transform Rewrite Parser",
          "module": "DDC.Core.Transform.Rewrite.Parser",
          "name": "Parser",
          "package": "ddc-core-simpl",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a rewrite rule.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Parser",
          "name": "pRule",
          "package": "ddc-core-simpl",
          "signature": "Context -\u003e Parser n (RewriteRule SourcePos n)",
          "source": "src/DDC-Core-Transform-Rewrite-Parser.html#pRule",
          "type": "function"
        },
        "index": {
          "description": "Parse rewrite rule",
          "hierarchy": "DDC Core Transform Rewrite Parser",
          "module": "DDC.Core.Transform.Rewrite.Parser",
          "name": "pRule",
          "normalized": "Context-\u003eParser a(RewriteRule SourcePos a)",
          "package": "ddc-core-simpl",
          "partial": "Rule",
          "signature": "Context-\u003eParser n(RewriteRule SourcePos n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Parser.html#v:pRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse many rewrite rules.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Parser",
          "name": "pRuleMany",
          "package": "ddc-core-simpl",
          "signature": "Context -\u003e Parser n [(n, RewriteRule SourcePos n)]",
          "source": "src/DDC-Core-Transform-Rewrite-Parser.html#pRuleMany",
          "type": "function"
        },
        "index": {
          "description": "Parse many rewrite rules",
          "hierarchy": "DDC Core Transform Rewrite Parser",
          "module": "DDC.Core.Transform.Rewrite.Parser",
          "name": "pRuleMany",
          "normalized": "Context-\u003eParser a[(a,RewriteRule SourcePos a)]",
          "package": "ddc-core-simpl",
          "partial": "Rule Many",
          "signature": "Context-\u003eParser n[(n,RewriteRule SourcePos n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Parser.html#v:pRuleMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstructing and checking whether rewrite rules are valid\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Rule",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html",
          "type": "module"
        },
        "index": {
          "description": "Constructing and checking whether rewrite rules are valid",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Rule",
          "package": "ddc-core-simpl",
          "partial": "Rule",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinding level for the binders in a rewrite rule.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "BindMode",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#BindMode",
          "type": "data"
        },
        "index": {
          "description": "Binding level for the binders in rewrite rule",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "BindMode",
          "package": "ddc-core-simpl",
          "partial": "Bind Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:BindMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat can go wrong when checking a rewrite rule.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Error",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "data"
        },
        "index": {
          "description": "What can go wrong when checking rewrite rule",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Error",
          "package": "ddc-core-simpl",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "NamedRewriteRule",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#NamedRewriteRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "NamedRewriteRule",
          "package": "ddc-core-simpl",
          "partial": "Named Rewrite Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:NamedRewriteRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rewrite rule. For example:\n\u003c/p\u003e\u003cpre\u003e RULE [r1 r2 r3 : %] (x : Int r1)\n      . addInt  [:r1 r2 r3:] x (0 [r2] ()\n      = copyInt [:r1 r3:]    x\n\u003c/pre\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "RewriteRule",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "data"
        },
        "index": {
          "description": "rewrite rule For example RULE r1 r2 r3 Int r1 addInt r1 r2 r3 r2 copyInt r1 r3",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "RewriteRule",
          "package": "ddc-core-simpl",
          "partial": "Rewrite Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:RewriteRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat side of a rewrite rule we're talking about.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Side",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Side",
          "type": "data"
        },
        "index": {
          "description": "What side of rewrite rule we re talking about",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Side",
          "package": "ddc-core-simpl",
          "partial": "Side",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#t:Side"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLevel-1 binder (specs)\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "BMSpec",
          "package": "ddc-core-simpl",
          "signature": "BMSpec",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#BindMode",
          "type": "function"
        },
        "index": {
          "description": "Level-1 binder specs",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "BMSpec",
          "package": "ddc-core-simpl",
          "partial": "BMSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:BMSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of usages\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "BMValue",
          "package": "ddc-core-simpl",
          "signature": "BMValue Int",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#BindMode",
          "type": "function"
        },
        "index": {
          "description": "number of usages",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "BMValue",
          "package": "ddc-core-simpl",
          "partial": "BMValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:BMValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI don't want to deal with anonymous variables.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorAnonymousBinder",
          "package": "ddc-core-simpl",
          "signature": "ErrorAnonymousBinder",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "don want to deal with anonymous variables",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorAnonymousBinder",
          "package": "ddc-core-simpl",
          "partial": "Error Anonymous Binder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorAnonymousBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError typechecking one of the expressions\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorBadConstraint",
          "package": "ddc-core-simpl",
          "signature": "ErrorBadConstraint",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Error typechecking one of the expressions",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorBadConstraint",
          "package": "ddc-core-simpl",
          "partial": "Error Bad Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorBadConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo binders allowed in left-hand side (right is fine, eg \u003ccode\u003elet\u003c/code\u003es)\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorNotFirstOrder",
          "package": "ddc-core-simpl",
          "signature": "ErrorNotFirstOrder",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "No binders allowed in left-hand side right is fine eg let",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorNotFirstOrder",
          "package": "ddc-core-simpl",
          "partial": "Error Not First Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorNotFirstOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError typechecking one of the expressions\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorTypeCheck",
          "package": "ddc-core-simpl",
          "signature": "ErrorTypeCheck",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Error typechecking one of the expressions",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorTypeCheck",
          "package": "ddc-core-simpl",
          "partial": "Error Type Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorTypeCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes don't match...\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorTypeConflict",
          "package": "ddc-core-simpl",
          "signature": "ErrorTypeConflict",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Types don match",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorTypeConflict",
          "package": "ddc-core-simpl",
          "partial": "Error Type Conflict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorTypeConflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll variables must be mentioned in left-hand side,\n   otherwise they won't get bound.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorVarUnmentioned",
          "package": "ddc-core-simpl",
          "signature": "ErrorVarUnmentioned",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "All variables must be mentioned in left-hand side otherwise they won get bound",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ErrorVarUnmentioned",
          "package": "ddc-core-simpl",
          "partial": "Error Var Unmentioned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ErrorVarUnmentioned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Lhs",
          "package": "ddc-core-simpl",
          "signature": "Lhs",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Lhs",
          "package": "ddc-core-simpl",
          "partial": "Lhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:Lhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Core.Transform.Rewrite.Rule\",\"DDC.Core.Transform.Rewrite\"]",
          "name": "RewriteRule",
          "package": "ddc-core-simpl",
          "signature": "RewriteRule",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:RewriteRule\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:RewriteRule\"]"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "RewriteRule",
          "package": "ddc-core-simpl",
          "partial": "Rewrite Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:RewriteRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Rhs",
          "package": "ddc-core-simpl",
          "signature": "Rhs",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "Rhs",
          "package": "ddc-core-simpl",
          "partial": "Rhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:Rhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a rule, make sure it's valid and fill in type, closure and effect\n   information.\n\u003c/p\u003e\u003cp\u003eThe left-hand side of rule can't have any binders (lambdas, lets etc).\n\u003c/p\u003e\u003cp\u003eAll binders must appear in the left-hand side, otherwise they would match\n   with no value.\n\u003c/p\u003e\u003cp\u003eBoth sides must have the same types, but the right can have fewer effects\n   and smaller closure.\n\u003c/p\u003e\u003cp\u003eWe don't handle anonymous binders on either the left or right.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "checkRewriteRule",
          "package": "ddc-core-simpl",
          "signature": "Config n-\u003e Env n-\u003e Env n-\u003e RewriteRule a n-\u003e Either (Error a n) (RewriteRule (AnTEC a n) n)",
          "type": "function"
        },
        "index": {
          "description": "Take rule make sure it valid and fill in type closure and effect information The left-hand side of rule can have any binders lambdas lets etc All binders must appear in the left-hand side otherwise they would match with no value Both sides must have the same types but the right can have fewer effects and smaller closure We don handle anonymous binders on either the left or right",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "checkRewriteRule",
          "normalized": "Config a-\u003eEnv a-\u003eEnv a-\u003eRewriteRule b a-\u003eEither(Error b a)(RewriteRule(AnTEC b a)a)",
          "package": "ddc-core-simpl",
          "partial": "Rewrite Rule",
          "signature": "Config n-\u003eEnv n-\u003eEnv n-\u003eRewriteRule a n-\u003eEither(Error a n)(RewriteRule(AnTEC a n)n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:checkRewriteRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorBinder",
          "package": "ddc-core-simpl",
          "signature": "Bind n",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorBinder",
          "package": "ddc-core-simpl",
          "partial": "Binder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorCheckError",
          "package": "ddc-core-simpl",
          "signature": "Error a n",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorCheckError",
          "package": "ddc-core-simpl",
          "partial": "Check Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorCheckError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorConstraint",
          "package": "ddc-core-simpl",
          "signature": "Type n",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorConstraint",
          "package": "ddc-core-simpl",
          "partial": "Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorExp",
          "package": "ddc-core-simpl",
          "signature": "Exp a n",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorExp",
          "package": "ddc-core-simpl",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat side of the rule the error was on.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorSide",
          "package": "ddc-core-simpl",
          "signature": "Side",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "description": "What side of the rule the error was on",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorSide",
          "package": "ddc-core-simpl",
          "partial": "Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorTypeLhs",
          "package": "ddc-core-simpl",
          "signature": "(Type n, Effect n, Closure n)",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorTypeLhs",
          "normalized": "(Type a,Effect a,Closure a)",
          "package": "ddc-core-simpl",
          "partial": "Type Lhs",
          "signature": "(Type n,Effect n,Closure n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorTypeLhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorTypeRhs",
          "package": "ddc-core-simpl",
          "signature": "(Type n, Effect n, Closure n)",
          "source": "src/DDC-Core-Transform-Rewrite-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "errorTypeRhs",
          "normalized": "(Type a,Effect a,Closure a)",
          "package": "ddc-core-simpl",
          "partial": "Type Rhs",
          "signature": "(Type n,Effect n,Closure n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:errorTypeRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eBindMode\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eBMSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "isBMSpec",
          "package": "ddc-core-simpl",
          "signature": "BindMode -\u003e Bool",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#isBMSpec",
          "type": "function"
        },
        "index": {
          "description": "Check if BindMode is BMSpec",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "isBMSpec",
          "normalized": "BindMode-\u003eBool",
          "package": "ddc-core-simpl",
          "partial": "BMSpec",
          "signature": "BindMode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:isBMSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eBindMode\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eBMValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "isBMValue",
          "package": "ddc-core-simpl",
          "signature": "BindMode -\u003e Bool",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#isBMValue",
          "type": "function"
        },
        "index": {
          "description": "Check if BindMode is BMValue",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "isBMValue",
          "normalized": "BindMode-\u003eBool",
          "package": "ddc-core-simpl",
          "partial": "BMValue",
          "signature": "BindMode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:isBMValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a rewrite rule, but do not check if it's valid.\n\u003c/p\u003e\u003cp\u003eYou then need to apply \u003ccode\u003e\u003ca\u003echeckRewriteRule\u003c/a\u003e\u003c/code\u003e to check it.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "mkRewriteRule",
          "package": "ddc-core-simpl",
          "signature": "[(BindMode, Bind n)]-\u003e [Type n]-\u003e Exp a n-\u003e Maybe (Exp a n)-\u003e Exp a n-\u003e RewriteRule a n",
          "type": "function"
        },
        "index": {
          "description": "Construct rewrite rule but do not check if it valid You then need to apply checkRewriteRule to check it",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "mkRewriteRule",
          "normalized": "[(BindMode,Bind a)]-\u003e[Type a]-\u003eExp b a-\u003eMaybe(Exp b a)-\u003eExp b a-\u003eRewriteRule b a",
          "package": "ddc-core-simpl",
          "partial": "Rewrite Rule",
          "signature": "[(BindMode,Bind n)]-\u003e[Type n]-\u003eExp a n-\u003eMaybe(Exp a n)-\u003eExp a n-\u003eRewriteRule a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:mkRewriteRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables bound by the rule.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Transform.Rewrite.Rule\",\"DDC.Core.Transform.Rewrite\"]",
          "name": "ruleBinds",
          "package": "ddc-core-simpl",
          "signature": "[(BindMode, Bind n)]",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleBinds\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleBinds\"]"
        },
        "index": {
          "description": "Variables bound by the rule",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ruleBinds",
          "normalized": "[(BindMode,Bind a)]",
          "package": "ddc-core-simpl",
          "partial": "Binds",
          "signature": "[(BindMode,Bind n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleBinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra constraints on the rule.\n   These must all be satisfied for the rule to fire.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Transform.Rewrite.Rule\",\"DDC.Core.Transform.Rewrite\"]",
          "name": "ruleConstraints",
          "package": "ddc-core-simpl",
          "signature": "[Type n]",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleConstraints\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleConstraints\"]"
        },
        "index": {
          "description": "Extra constraints on the rule These must all be satisfied for the rule to fire",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ruleConstraints",
          "normalized": "[Type a]",
          "package": "ddc-core-simpl",
          "partial": "Constraints",
          "signature": "[Type n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReferences to environment. \n   Used to check whether the rule is shadowed.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Transform.Rewrite.Rule\",\"DDC.Core.Transform.Rewrite\"]",
          "name": "ruleFreeVars",
          "package": "ddc-core-simpl",
          "signature": "[Bound n]",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleFreeVars\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleFreeVars\"]"
        },
        "index": {
          "description": "References to environment Used to check whether the rule is shadowed",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ruleFreeVars",
          "normalized": "[Bound a]",
          "package": "ddc-core-simpl",
          "partial": "Free Vars",
          "signature": "[Bound n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleFreeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-hand side of the rule.\n   We match on this part.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Transform.Rewrite.Rule\",\"DDC.Core.Transform.Rewrite\"]",
          "name": "ruleLeft",
          "package": "ddc-core-simpl",
          "signature": "Exp a n",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleLeft\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleLeft\"]"
        },
        "index": {
          "description": "Left-hand side of the rule We match on this part",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ruleLeft",
          "package": "ddc-core-simpl",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra part of left-hand side,\n   but allow this bit to be out-of-context.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Transform.Rewrite.Rule\",\"DDC.Core.Transform.Rewrite\"]",
          "name": "ruleLeftHole",
          "package": "ddc-core-simpl",
          "signature": "Maybe (Exp a n)",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleLeftHole\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleLeftHole\"]"
        },
        "index": {
          "description": "Extra part of left-hand side but allow this bit to be out-of-context",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ruleLeftHole",
          "package": "ddc-core-simpl",
          "partial": "Left Hole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleLeftHole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-hand side of the rule.\n   We replace the matched expression with this part.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Transform.Rewrite.Rule\",\"DDC.Core.Transform.Rewrite\"]",
          "name": "ruleRight",
          "package": "ddc-core-simpl",
          "signature": "Exp a n",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleRight\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleRight\"]"
        },
        "index": {
          "description": "Right-hand side of the rule We replace the matched expression with this part",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ruleRight",
          "package": "ddc-core-simpl",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClosure that the left has that is not present in the right.\n   When applying the rule we add a closure weakening to ensure\n   the rewritten expression has the same closure.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Transform.Rewrite.Rule\",\"DDC.Core.Transform.Rewrite\"]",
          "name": "ruleWeakClo",
          "package": "ddc-core-simpl",
          "signature": "[Exp a n]",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleWeakClo\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleWeakClo\"]"
        },
        "index": {
          "description": "Closure that the left has that is not present in the right When applying the rule we add closure weakening to ensure the rewritten expression has the same closure",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ruleWeakClo",
          "normalized": "[Exp a b]",
          "package": "ddc-core-simpl",
          "partial": "Weak Clo",
          "signature": "[Exp a n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleWeakClo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEffects that are caused by the left but not the right.\n   When applying the rule we add an effect weakning to ensure\n   the rewritten expression has the same effects.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Transform.Rewrite.Rule\",\"DDC.Core.Transform.Rewrite\"]",
          "name": "ruleWeakEff",
          "package": "ddc-core-simpl",
          "signature": "Maybe (Effect n)",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleWeakEff\",\"http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:ruleWeakEff\"]"
        },
        "index": {
          "description": "Effects that are caused by the left but not the right When applying the rule we add an effect weakning to ensure the rewritten expression has the same effects",
          "hierarchy": "DDC Core Transform Rewrite Rule",
          "module": "DDC.Core.Transform.Rewrite.Rule",
          "name": "ruleWeakEff",
          "package": "ddc-core-simpl",
          "partial": "Weak Eff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite-Rule.html#v:ruleWeakEff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApply rewrite rules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Rewrite",
          "name": "Rewrite",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite.html",
          "type": "module"
        },
        "index": {
          "description": "Apply rewrite rules",
          "hierarchy": "DDC Core Transform Rewrite",
          "module": "DDC.Core.Transform.Rewrite",
          "name": "Rewrite",
          "package": "ddc-core-simpl",
          "partial": "Rewrite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rewrite rule. For example:\n\u003c/p\u003e\u003cpre\u003e RULE [r1 r2 r3 : %] (x : Int r1)\n      . addInt  [:r1 r2 r3:] x (0 [r2] ()\n      = copyInt [:r1 r3:]    x\n\u003c/pre\u003e",
          "module": "DDC.Core.Transform.Rewrite",
          "name": "RewriteRule",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Rewrite-Rule.html#RewriteRule",
          "type": "data"
        },
        "index": {
          "description": "rewrite rule For example RULE r1 r2 r3 Int r1 addInt r1 r2 r3 r2 copyInt r1 r3",
          "hierarchy": "DDC Core Transform Rewrite",
          "module": "DDC.Core.Transform.Rewrite",
          "name": "RewriteRule",
          "package": "ddc-core-simpl",
          "partial": "Rewrite Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#t:RewriteRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply rewrite rules to a module.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite",
          "name": "rewriteModule",
          "package": "ddc-core-simpl",
          "signature": "[NamedRewriteRule a n]-\u003e Module a n-\u003e Module a n",
          "type": "function"
        },
        "index": {
          "description": "Apply rewrite rules to module",
          "hierarchy": "DDC Core Transform Rewrite",
          "module": "DDC.Core.Transform.Rewrite",
          "name": "rewriteModule",
          "normalized": "[NamedRewriteRule a b]-\u003eModule a b-\u003eModule a b",
          "package": "ddc-core-simpl",
          "partial": "Module",
          "signature": "[NamedRewriteRule a n]-\u003eModule a n-\u003eModule a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:rewriteModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform rewrites top-down, repeatedly.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Rewrite",
          "name": "rewriteX",
          "package": "ddc-core-simpl",
          "signature": "[NamedRewriteRule a n]-\u003e Exp a n-\u003e TransformResult (Exp a n)",
          "type": "function"
        },
        "index": {
          "description": "Perform rewrites top-down repeatedly",
          "hierarchy": "DDC Core Transform Rewrite",
          "module": "DDC.Core.Transform.Rewrite",
          "name": "rewriteX",
          "normalized": "[NamedRewriteRule a b]-\u003eExp a b-\u003eTransformResult(Exp a b)",
          "package": "ddc-core-simpl",
          "signature": "[NamedRewriteRule a n]-\u003eExp a n-\u003eTransformResult(Exp a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Rewrite.html#v:rewriteX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSnip out nested applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Snip",
          "name": "Snip",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Snip.html",
          "type": "module"
        },
        "index": {
          "description": "Snip out nested applications",
          "hierarchy": "DDC Core Transform Snip",
          "module": "DDC.Core.Transform.Snip",
          "name": "Snip",
          "package": "ddc-core-simpl",
          "partial": "Snip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnipper configuration.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Snip",
          "name": "Config",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Snip.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Snipper configuration",
          "hierarchy": "DDC Core Transform Snip",
          "module": "DDC.Core.Transform.Snip",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of things that can have things snipped out of them.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Snip",
          "name": "Snip",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Snip.html#Snip",
          "type": "class"
        },
        "index": {
          "description": "Class of things that can have things snipped out of them",
          "hierarchy": "DDC Core Transform Snip",
          "module": "DDC.Core.Transform.Snip",
          "name": "Snip",
          "package": "ddc-core-simpl",
          "partial": "Snip",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#t:Snip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Snip",
          "name": "Config",
          "package": "ddc-core-simpl",
          "signature": "Config",
          "source": "src/DDC-Core-Transform-Snip.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Snip",
          "module": "DDC.Core.Transform.Snip",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure the body of a let-expression is a variable.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Snip",
          "name": "configSnipLetBody",
          "package": "ddc-core-simpl",
          "signature": "Bool",
          "source": "src/DDC-Core-Transform-Snip.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Ensure the body of let-expression is variable",
          "hierarchy": "DDC Core Transform Snip",
          "module": "DDC.Core.Transform.Snip",
          "name": "configSnipLetBody",
          "package": "ddc-core-simpl",
          "partial": "Snip Let Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:configSnipLetBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce new bindings for over-applied functions.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Snip",
          "name": "configSnipOverApplied",
          "package": "ddc-core-simpl",
          "signature": "Bool",
          "source": "src/DDC-Core-Transform-Snip.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Introduce new bindings for over-applied functions",
          "hierarchy": "DDC Core Transform Snip",
          "module": "DDC.Core.Transform.Snip",
          "name": "configSnipOverApplied",
          "package": "ddc-core-simpl",
          "partial": "Snip Over Applied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:configSnipOverApplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnipper configuration with all flags set to False.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Snip",
          "name": "configZero",
          "package": "ddc-core-simpl",
          "signature": "Config",
          "source": "src/DDC-Core-Transform-Snip.html#configZero",
          "type": "function"
        },
        "index": {
          "description": "Snipper configuration with all flags set to False",
          "hierarchy": "DDC Core Transform Snip",
          "module": "DDC.Core.Transform.Snip",
          "name": "configZero",
          "package": "ddc-core-simpl",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:configZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnip out nested applications as anonymous bindings.\n\u003c/p\u003e\u003cpre\u003e\n      f (g x) (h y)\n  ==\u003e let ^ = g x in ^ = h y in f ^1 ^0\n\u003c/pre\u003e",
          "module": "DDC.Core.Transform.Snip",
          "name": "snip",
          "package": "ddc-core-simpl",
          "signature": "Config -\u003e c n -\u003e c n",
          "source": "src/DDC-Core-Transform-Snip.html#snip",
          "type": "method"
        },
        "index": {
          "description": "Snip out nested applications as anonymous bindings let in in",
          "hierarchy": "DDC Core Transform Snip",
          "module": "DDC.Core.Transform.Snip",
          "name": "snip",
          "normalized": "Config-\u003ea b-\u003ea b",
          "package": "ddc-core-simpl",
          "signature": "Config-\u003ec n-\u003ec n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Snip.html#v:snip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThread a state token through calls to given functions.\n\u003c/p\u003e\u003cp\u003eASSUMPTIONS:\n   * Program is a-normalized and fully named.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "Thread",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Thread.html",
          "type": "module"
        },
        "index": {
          "description": "Thread state token through calls to given functions ASSUMPTIONS Program is a-normalized and fully named",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "Thread",
          "package": "ddc-core-simpl",
          "partial": "Thread",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration for the Thread transform.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "Config",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Thread.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration for the Thread transform",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of things that can have a state token threaded through them.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "Thread",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-Thread.html#Thread",
          "type": "class"
        },
        "index": {
          "description": "Class of things that can have state token threaded through them",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "Thread",
          "package": "ddc-core-simpl",
          "partial": "Thread",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#t:Thread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Thread",
          "name": "Config",
          "package": "ddc-core-simpl",
          "signature": "Config",
          "source": "src/DDC-Core-Transform-Thread.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "Config",
          "package": "ddc-core-simpl",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfig for the type checker.\n   We need to reconstruct the type of the result of stateful\n   functions when bundling them into the tuple that holds the \n   state token.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "configCheckConfig",
          "package": "ddc-core-simpl",
          "signature": "Config n",
          "source": "src/DDC-Core-Transform-Thread.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Config for the type checker We need to reconstruct the type of the result of stateful functions when bundling them into the tuple that holds the state token",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "configCheckConfig",
          "package": "ddc-core-simpl",
          "partial": "Check Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configCheckConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to decide which top-level bindings are stateful and\n   need the state token threaded through them. If the binding with\n   the given name is stateful then the function should return the\n   new type for the binding that accepts and returns the state token.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "configThreadMe",
          "package": "ddc-core-simpl",
          "signature": "n -\u003e Type n -\u003e Maybe (Type n)",
          "source": "src/DDC-Core-Transform-Thread.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Function to decide which top-level bindings are stateful and need the state token threaded through them If the binding with the given name is stateful then the function should return the new type for the binding that accepts and returns the state token",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "configThreadMe",
          "normalized": "a-\u003eType a-\u003eMaybe(Type a)",
          "package": "ddc-core-simpl",
          "partial": "Thread Me",
          "signature": "n-\u003eType n-\u003eMaybe(Type n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configThreadMe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a pattern which binds the world argument\n   from a threaded primop.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "configThreadPat",
          "package": "ddc-core-simpl",
          "signature": "n -\u003e Maybe (Bind n -\u003e [Bind n] -\u003e Pat n)",
          "source": "src/DDC-Core-Transform-Thread.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Make pattern which binds the world argument from threaded primop",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "configThreadPat",
          "normalized": "a-\u003eMaybe(Bind a-\u003e[Bind a]-\u003ePat a)",
          "package": "ddc-core-simpl",
          "partial": "Thread Pat",
          "signature": "n-\u003eMaybe(Bind n-\u003e[Bind n]-\u003ePat n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configThreadPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the state token to use.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "configTokenType",
          "package": "ddc-core-simpl",
          "signature": "Type n",
          "source": "src/DDC-Core-Transform-Thread.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Type of the state token to use",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "configTokenType",
          "package": "ddc-core-simpl",
          "partial": "Token Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configTokenType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType that represents a missing value.\n   If a stateful function returns a void then our thread transform\n   rewrites it to return the state token, instead of a tuple\n   that contains the token as well as a void value.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "configVoidType",
          "package": "ddc-core-simpl",
          "signature": "Type n",
          "source": "src/DDC-Core-Transform-Thread.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Type that represents missing value If stateful function returns void then our thread transform rewrites it to return the state token instead of tuple that contains the token as well as void value",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "configVoidType",
          "package": "ddc-core-simpl",
          "partial": "Void Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configVoidType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a result expression with the state token.\n   The function is given the types of the world token and result,\n   then the expressions for the same.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "configWrapResultExp",
          "package": "ddc-core-simpl",
          "signature": "Exp (AnTEC a n) n -\u003e Exp (AnTEC a n) n -\u003e Exp a n",
          "source": "src/DDC-Core-Transform-Thread.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Wrap result expression with the state token The function is given the types of the world token and result then the expressions for the same",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "configWrapResultExp",
          "normalized": "Exp(AnTEC a b)b-\u003eExp(AnTEC a b)b-\u003eExp a b",
          "package": "ddc-core-simpl",
          "partial": "Wrap Result Exp",
          "signature": "Exp(AnTEC a n)n-\u003eExp(AnTEC a n)n-\u003eExp a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configWrapResultExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a type with the world token.\n   eg change Int to (World#, Int)\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "configWrapResultType",
          "package": "ddc-core-simpl",
          "signature": "Type n -\u003e Type n",
          "source": "src/DDC-Core-Transform-Thread.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Wrap type with the world token eg change Int to World Int",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "configWrapResultType",
          "normalized": "Type a-\u003eType a",
          "package": "ddc-core-simpl",
          "partial": "Wrap Result Type",
          "signature": "Type n-\u003eType n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:configWrapResultType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject the state token into the type of an effectful function.\n   Eg, change  ([a b : Data]. a -\u003e b -\u003e Int) \n          to   ([a b : Data]. a -\u003e b -\u003e World -\u003e (World, Int)\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.Thread",
          "name": "injectStateType",
          "package": "ddc-core-simpl",
          "signature": "Config a n -\u003e Type n -\u003e Type n",
          "source": "src/DDC-Core-Transform-Thread.html#injectStateType",
          "type": "function"
        },
        "index": {
          "description": "Inject the state token into the type of an effectful function Eg change Data Int to Data World World Int",
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "injectStateType",
          "normalized": "Config a b-\u003eType b-\u003eType b",
          "package": "ddc-core-simpl",
          "partial": "State Type",
          "signature": "Config a n-\u003eType n-\u003eType n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:injectStateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.Thread",
          "name": "thread",
          "package": "ddc-core-simpl",
          "signature": "Config a n -\u003e KindEnv n -\u003e TypeEnv n -\u003e c (AnTEC a n) n -\u003e c a n",
          "source": "src/DDC-Core-Transform-Thread.html#thread",
          "type": "method"
        },
        "index": {
          "hierarchy": "DDC Core Transform Thread",
          "module": "DDC.Core.Transform.Thread",
          "name": "thread",
          "normalized": "Config a b-\u003eKindEnv b-\u003eTypeEnv b-\u003ec(AnTEC a b)b-\u003ec a b",
          "package": "ddc-core-simpl",
          "signature": "Config a n-\u003eKindEnv n-\u003eTypeEnv n-\u003ec(AnTEC a n)n-\u003ec a n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-Thread.html#v:thread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral purpose tree walking boilerplate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "TransformDownX",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-TransformDownX.html",
          "type": "module"
        },
        "index": {
          "description": "General purpose tree walking boilerplate",
          "hierarchy": "DDC Core Transform TransformDownX",
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "TransformDownX",
          "package": "ddc-core-simpl",
          "partial": "Transform Down",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "TransformDownMX",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-TransformDownX.html#TransformDownMX",
          "type": "class"
        },
        "index": {
          "hierarchy": "DDC Core Transform TransformDownX",
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "TransformDownMX",
          "package": "ddc-core-simpl",
          "partial": "Transform Down MX",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#t:TransformDownMX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down monadic rewrite of all core expressions in a thing.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "transformDownMX",
          "package": "ddc-core-simpl",
          "signature": "transformDownMX",
          "source": "src/DDC-Core-Transform-TransformDownX.html#transformDownMX",
          "type": "method"
        },
        "index": {
          "description": "Top-down monadic rewrite of all core expressions in thing",
          "hierarchy": "DDC Core Transform TransformDownX",
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "transformDownMX",
          "package": "ddc-core-simpl",
          "partial": "Down MX",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#v:transformDownMX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down rewrite of all core expressions in a thing.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "transformDownX",
          "package": "ddc-core-simpl",
          "signature": "(KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e Exp a n)-\u003e KindEnv n-\u003e TypeEnv n-\u003e c a n-\u003e c a n",
          "type": "function"
        },
        "index": {
          "description": "Top-down rewrite of all core expressions in thing",
          "hierarchy": "DDC Core Transform TransformDownX",
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "transformDownX",
          "normalized": "(KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eExp b a)-\u003eKindEnv a-\u003eTypeEnv a-\u003ec b a-\u003ec b a",
          "package": "ddc-core-simpl",
          "partial": "Down",
          "signature": "(KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eExp a n)-\u003eKindEnv n-\u003eTypeEnv n-\u003ec a n-\u003ec a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#v:transformDownX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike transformDownX, but without using environments.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "transformDownX'",
          "package": "ddc-core-simpl",
          "signature": "(Exp a n -\u003e Exp a n)-\u003e c a n-\u003e c a n",
          "type": "function"
        },
        "index": {
          "description": "Like transformDownX but without using environments",
          "hierarchy": "DDC Core Transform TransformDownX",
          "module": "DDC.Core.Transform.TransformDownX",
          "name": "transformDownX'",
          "normalized": "(Exp a b-\u003eExp a b)-\u003ec a b-\u003ec a b",
          "package": "ddc-core-simpl",
          "partial": "Down X'",
          "signature": "(Exp a n-\u003eExp a n)-\u003ec a n-\u003ec a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformDownX.html#v:transformDownX-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral purpose tree walking boilerplate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "TransformUpX",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-TransformUpX.html",
          "type": "module"
        },
        "index": {
          "description": "General purpose tree walking boilerplate",
          "hierarchy": "DDC Core Transform TransformUpX",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "TransformUpX",
          "package": "ddc-core-simpl",
          "partial": "Transform Up",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "TransformUpMX",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Core-Transform-TransformUpX.html#TransformUpMX",
          "type": "class"
        },
        "index": {
          "hierarchy": "DDC Core Transform TransformUpX",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "TransformUpMX",
          "package": "ddc-core-simpl",
          "partial": "Transform Up MX",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#t:TransformUpMX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etransformUpMX\u003c/a\u003e\u003c/code\u003e, but the worker takes the Simple version of the AST.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e To avoid repeated conversions between the different versions of the AST,\n     the worker should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided expression is unchanged.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformSimpleUpMX",
          "package": "ddc-core-simpl",
          "signature": "(KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e m (Maybe (Exp a n)))-\u003e KindEnv n-\u003e TypeEnv n-\u003e c a n-\u003e m (c a n)",
          "type": "function"
        },
        "index": {
          "description": "Like transformUpMX but the worker takes the Simple version of the AST To avoid repeated conversions between the different versions of the AST the worker should return Nothing if the provided expression is unchanged",
          "hierarchy": "DDC Core Transform TransformUpX",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformSimpleUpMX",
          "normalized": "(KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003ec(Maybe(Exp b a)))-\u003eKindEnv a-\u003eTypeEnv a-\u003ed b a-\u003ec(d b a)",
          "package": "ddc-core-simpl",
          "partial": "Simple Up MX",
          "signature": "(KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003em(Maybe(Exp a n)))-\u003eKindEnv n-\u003eTypeEnv n-\u003ec a n-\u003em(c a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformSimpleUpMX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etransformUpX\u003c/a\u003e\u003c/code\u003e, but the worker takes the Simple version of the AST.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e To avoid repeated conversions between the different versions of the AST,\n     the worker should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided expression is unchanged.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformSimpleUpX",
          "package": "ddc-core-simpl",
          "signature": "(KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e Maybe (Exp a n))-\u003e KindEnv n-\u003e TypeEnv n-\u003e c a n-\u003e c a n",
          "type": "function"
        },
        "index": {
          "description": "Like transformUpX but the worker takes the Simple version of the AST To avoid repeated conversions between the different versions of the AST the worker should return Nothing if the provided expression is unchanged",
          "hierarchy": "DDC Core Transform TransformUpX",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformSimpleUpX",
          "normalized": "(KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eMaybe(Exp b a))-\u003eKindEnv a-\u003eTypeEnv a-\u003ec b a-\u003ec b a",
          "package": "ddc-core-simpl",
          "partial": "Simple Up",
          "signature": "(KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eMaybe(Exp a n))-\u003eKindEnv n-\u003eTypeEnv n-\u003ec a n-\u003ec a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformSimpleUpX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etransformUpX'\u003c/a\u003e\u003c/code\u003e, but the worker takes the Simple version of the AST.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e To avoid repeated conversions between the different versions of the AST,\n     the worker should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the provided expression is unchanged.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformSimpleUpX'",
          "package": "ddc-core-simpl",
          "signature": "(Exp a n -\u003e Maybe (Exp a n))-\u003e c a n-\u003e c a n",
          "type": "function"
        },
        "index": {
          "description": "Like transformUpX but the worker takes the Simple version of the AST To avoid repeated conversions between the different versions of the AST the worker should return Nothing if the provided expression is unchanged",
          "hierarchy": "DDC Core Transform TransformUpX",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformSimpleUpX'",
          "normalized": "(Exp a b-\u003eMaybe(Exp a b))-\u003ec a b-\u003ec a b",
          "package": "ddc-core-simpl",
          "partial": "Simple Up X'",
          "signature": "(Exp a n-\u003eMaybe(Exp a n))-\u003ec a n-\u003ec a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformSimpleUpX-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom-up monadic rewrite of all core expressions in a thing.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformUpMX",
          "package": "ddc-core-simpl",
          "signature": "transformUpMX",
          "source": "src/DDC-Core-Transform-TransformUpX.html#transformUpMX",
          "type": "method"
        },
        "index": {
          "description": "Bottom-up monadic rewrite of all core expressions in thing",
          "hierarchy": "DDC Core Transform TransformUpX",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformUpMX",
          "package": "ddc-core-simpl",
          "partial": "Up MX",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformUpMX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom up rewrite of all core expressions in a thing.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformUpX",
          "package": "ddc-core-simpl",
          "signature": "(KindEnv n -\u003e TypeEnv n -\u003e Exp a n -\u003e Exp a n)-\u003e KindEnv n-\u003e TypeEnv n-\u003e c a n-\u003e c a n",
          "type": "function"
        },
        "index": {
          "description": "Bottom up rewrite of all core expressions in thing",
          "hierarchy": "DDC Core Transform TransformUpX",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformUpX",
          "normalized": "(KindEnv a-\u003eTypeEnv a-\u003eExp b a-\u003eExp b a)-\u003eKindEnv a-\u003eTypeEnv a-\u003ec b a-\u003ec b a",
          "package": "ddc-core-simpl",
          "partial": "Up",
          "signature": "(KindEnv n-\u003eTypeEnv n-\u003eExp a n-\u003eExp a n)-\u003eKindEnv n-\u003eTypeEnv n-\u003ec a n-\u003ec a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformUpX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike transformUpX, but without using environments.\n\u003c/p\u003e",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformUpX'",
          "package": "ddc-core-simpl",
          "signature": "(Exp a n -\u003e Exp a n)-\u003e c a n-\u003e c a n",
          "type": "function"
        },
        "index": {
          "description": "Like transformUpX but without using environments",
          "hierarchy": "DDC Core Transform TransformUpX",
          "module": "DDC.Core.Transform.TransformUpX",
          "name": "transformUpX'",
          "normalized": "(Exp a b-\u003eExp a b)-\u003ec a b-\u003ec a b",
          "package": "ddc-core-simpl",
          "partial": "Up X'",
          "signature": "(Exp a n-\u003eExp a n)-\u003ec a n-\u003ec a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Core-Transform-TransformUpX.html#v:transformUpX-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Type.Transform.Alpha",
          "name": "Alpha",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Type-Transform-Alpha.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Type Transform Alpha",
          "module": "DDC.Type.Transform.Alpha",
          "name": "Alpha",
          "package": "ddc-core-simpl",
          "partial": "Alpha",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-Alpha.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Type.Transform.Alpha",
          "name": "Alpha",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Type-Transform-Alpha.html#Alpha",
          "type": "class"
        },
        "index": {
          "hierarchy": "DDC Type Transform Alpha",
          "module": "DDC.Type.Transform.Alpha",
          "name": "Alpha",
          "package": "ddc-core-simpl",
          "partial": "Alpha",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-Alpha.html#t:Alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all the names in a thing.\n\u003c/p\u003e",
          "module": "DDC.Type.Transform.Alpha",
          "name": "alpha",
          "package": "ddc-core-simpl",
          "signature": "(n1 -\u003e n2) -\u003e c n1 -\u003e c n2",
          "source": "src/DDC-Type-Transform-Alpha.html#alpha",
          "type": "method"
        },
        "index": {
          "description": "Apply function to all the names in thing",
          "hierarchy": "DDC Type Transform Alpha",
          "module": "DDC.Type.Transform.Alpha",
          "name": "alpha",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
          "package": "ddc-core-simpl",
          "signature": "(n-\u003en)-\u003ec n-\u003ec n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-Alpha.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "AnonymizeT",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Type-Transform-AnonymizeT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Type Transform AnonymizeT",
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "AnonymizeT",
          "package": "ddc-core-simpl",
          "partial": "Anonymize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "AnonymizeT",
          "package": "ddc-core-simpl",
          "source": "src/DDC-Type-Transform-AnonymizeT.html#AnonymizeT",
          "type": "class"
        },
        "index": {
          "hierarchy": "DDC Type Transform AnonymizeT",
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "AnonymizeT",
          "package": "ddc-core-simpl",
          "partial": "Anonymize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#t:AnonymizeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite all binders in a thing to be of anonymous form.\n\u003c/p\u003e",
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "anonymizeT",
          "package": "ddc-core-simpl",
          "signature": "c n -\u003e c n",
          "source": "src/DDC-Type-Transform-AnonymizeT.html#anonymizeT",
          "type": "function"
        },
        "index": {
          "description": "Rewrite all binders in thing to be of anonymous form",
          "hierarchy": "DDC Type Transform AnonymizeT",
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "anonymizeT",
          "normalized": "a b-\u003ea b",
          "package": "ddc-core-simpl",
          "signature": "c n-\u003ec n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#v:anonymizeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite all binders in a thing to be of anonymous form.\n\u003c/p\u003e\u003cp\u003eThe stack contains existing anonymous binders that we have entered into,\n   and named binders that we have rewritten. All bound occurrences of variables\n   will be replaced by references into this stack.\n\u003c/p\u003e",
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "anonymizeWithT",
          "package": "ddc-core-simpl",
          "signature": "[Bind n] -\u003e c n -\u003e c n",
          "source": "src/DDC-Type-Transform-AnonymizeT.html#anonymizeWithT",
          "type": "method"
        },
        "index": {
          "description": "Rewrite all binders in thing to be of anonymous form The stack contains existing anonymous binders that we have entered into and named binders that we have rewritten All bound occurrences of variables will be replaced by references into this stack",
          "hierarchy": "DDC Type Transform AnonymizeT",
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "anonymizeWithT",
          "normalized": "[Bind a]-\u003eb a-\u003eb a",
          "package": "ddc-core-simpl",
          "partial": "With",
          "signature": "[Bind n]-\u003ec n-\u003ec n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#v:anonymizeWithT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush a binding occurrence of a level-1 variable on the stack, \n   returning the anonyized binding occurrence and the new stack.\n\u003c/p\u003e",
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "pushAnonymizeBindT",
          "package": "ddc-core-simpl",
          "signature": "[Bind n]-\u003e Bind n-\u003e ([Bind n], Bind n)",
          "type": "function"
        },
        "index": {
          "description": "Push binding occurrence of level-1 variable on the stack returning the anonyized binding occurrence and the new stack",
          "hierarchy": "DDC Type Transform AnonymizeT",
          "module": "DDC.Type.Transform.AnonymizeT",
          "name": "pushAnonymizeBindT",
          "normalized": "[Bind a]-\u003eBind a-\u003e([Bind a],Bind a)",
          "package": "ddc-core-simpl",
          "partial": "Anonymize Bind",
          "signature": "[Bind n]-\u003eBind n-\u003e([Bind n],Bind n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-simpl/docs/DDC-Type-Transform-AnonymizeT.html#v:pushAnonymizeBindT"
      }
    }
  ]
]