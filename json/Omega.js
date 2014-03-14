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
        "word": "Omega"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExpressions are the high-level interface for creating Presburger\n formulae.  As in Presburger arithmetic, expressions can\n represent addition, subtraction, quantification, inequalities, and boolean\n operators.\n\u003c/p\u003e\u003cp\u003eExpressions allow formulas to be input in a freeform manner.  When\n converted to a formula with \u003ccode\u003e\u003ca\u003eexpToFormula\u003c/a\u003e\u003c/code\u003e, they will be simplified to a\n form that the underlying library can use.\n Multplication is unrestricted; however, if an\n expression involves the product of two non-constant terms, it cannot be\n converted to a formula.\n\u003c/p\u003e\u003cp\u003eThis module handles expressions and converts them to formulas.\n Sets and relations are managed by the \u003ca\u003eData.Presburger.Omega.Set\u003c/a\u003e\n and \u003ca\u003eData.Presburger.Omega.Rel\u003c/a\u003e modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Expr",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html",
          "type": "module"
        },
        "index": {
          "description": "Expressions are the high-level interface for creating Presburger formulae As in Presburger arithmetic expressions can represent addition subtraction quantification inequalities and boolean operators Expressions allow formulas to be input in freeform manner When converted to formula with expToFormula they will be simplified to form that the underlying library can use Multplication is unrestricted however if an expression involves the product of two non-constant terms it cannot be converted to formula This module handles expressions and converts them to formulas Sets and relations are managed by the Data.Presburger.Omega.Set and Data.Presburger.Omega.Rel modules",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Expr",
          "package": "Omega",
          "partial": "Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "BoolExp",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html#BoolExp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "BoolExp",
          "package": "Omega",
          "partial": "Bool Exp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#t:BoolExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "BoolExpr",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html#BoolExpr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "BoolExpr",
          "package": "Omega",
          "partial": "Bool Expr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#t:BoolExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger and boolean-valued expressions.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Exp",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html#Exp",
          "type": "data"
        },
        "index": {
          "description": "Integer and boolean-valued expressions",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Exp",
          "package": "Omega",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe internal representation of expressions.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Expr",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "The internal representation of expressions",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Expr",
          "package": "Omega",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "IntExp",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html#IntExp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "IntExp",
          "package": "Omega",
          "partial": "Int Exp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#t:IntExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "IntExpr",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html#IntExpr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "IntExpr",
          "package": "Omega",
          "partial": "Int Expr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#t:IntExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate on an integer expresion.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "PredOp",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html#PredOp",
          "type": "data"
        },
        "index": {
          "description": "predicate on an integer expresion",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "PredOp",
          "package": "Omega",
          "partial": "Pred Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#t:PredOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "Quantifier",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html#Quantifier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Quantifier",
          "package": "Omega",
          "partial": "Quantifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#t:Quantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables.  Variables are represented internally by de Bruijn indices.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Var",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Expr.html#Var",
          "type": "data"
        },
        "index": {
          "description": "Variables Variables are represented internally by de Bruijn indices",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Var",
          "package": "Omega",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunction\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|&&|)",
          "package": "Omega",
          "signature": "BoolExp -\u003e BoolExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C%26%26%7C",
          "type": "function"
        },
        "index": {
          "description": "Conjunction",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|&&|) |&&|",
          "normalized": "BoolExp-\u003eBoolExp-\u003eBoolExp",
          "package": "Omega",
          "signature": "BoolExp-\u003eBoolExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--38--38--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|*|)",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C%2A%7C",
          "type": "function"
        },
        "index": {
          "description": "Multiply",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|*|) |*|",
          "normalized": "IntExp-\u003eIntExp-\u003eIntExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|+|)",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C%2B%7C",
          "type": "function"
        },
        "index": {
          "description": "Add",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|+|) |+|",
          "normalized": "IntExp-\u003eIntExp-\u003eIntExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--43--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|-|)",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C-%7C",
          "type": "function"
        },
        "index": {
          "description": "Subtract",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|-|) |-|",
          "normalized": "IntExp-\u003eIntExp-\u003eIntExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInequality test\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|/=|)",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C%2F%3D%7C",
          "type": "function"
        },
        "index": {
          "description": "Inequality test",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|/=|) |/=|",
          "normalized": "IntExp-\u003eIntExp-\u003eBoolExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--47--61--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess than\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|\u003c|)",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Less than",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|\u003c|) |\u003c|",
          "normalized": "IntExp-\u003eIntExp-\u003eBoolExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess than or equal\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|\u003c=|)",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C%3C%3D%7C",
          "type": "function"
        },
        "index": {
          "description": "Less than or equal",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|\u003c=|) |\u003c=|",
          "normalized": "IntExp-\u003eIntExp-\u003eBoolExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--60--61--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality test\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|==|)",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C%3D%3D%7C",
          "type": "function"
        },
        "index": {
          "description": "Equality test",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|==|) |==|",
          "normalized": "IntExp-\u003eIntExp-\u003eBoolExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--61--61--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater than\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|\u003e|)",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C%3E%7C",
          "type": "function"
        },
        "index": {
          "description": "Greater than",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|\u003e|) |\u003e|",
          "normalized": "IntExp-\u003eIntExp-\u003eBoolExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater than or equal\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|\u003e=|)",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%7C%3E%3D%7C",
          "type": "function"
        },
        "index": {
          "description": "Greater than or equal",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(|\u003e=|) |\u003e=|",
          "normalized": "IntExp-\u003eIntExp-\u003eBoolExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-124--62--61--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply by an integer\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(*|)",
          "package": "Omega",
          "signature": "Int -\u003e IntExp -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#%2A%7C",
          "type": "function"
        },
        "index": {
          "description": "Multiply by an integer",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "(*|) *|",
          "normalized": "Int-\u003eIntExp-\u003eIntExp",
          "package": "Omega",
          "signature": "Int-\u003eIntExp-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:-42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "Exists",
          "package": "Omega",
          "signature": "Exists",
          "source": "src/Data-Presburger-Omega-Expr.html#Quantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Exists",
          "package": "Omega",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "Forall",
          "package": "Omega",
          "signature": "Forall",
          "source": "src/Data-Presburger-Omega-Expr.html#Quantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "Forall",
          "package": "Omega",
          "partial": "Forall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:Forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "IsGEZ",
          "package": "Omega",
          "signature": "IsGEZ",
          "source": "src/Data-Presburger-Omega-Expr.html#PredOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "IsGEZ",
          "package": "Omega",
          "partial": "Is GEZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:IsGEZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "IsZero",
          "package": "Omega",
          "signature": "IsZero",
          "source": "src/Data-Presburger-Omega-Expr.html#PredOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "IsZero",
          "package": "Omega",
          "partial": "Is Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:IsZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust bound variable bindings by adding an offset to all bound variable\n indices beyond a given level.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "adjustBindings",
          "package": "Omega",
          "signature": "Int-\u003e Int-\u003e Exp t-\u003e Exp t",
          "type": "function"
        },
        "index": {
          "description": "Adjust bound variable bindings by adding an offset to all bound variable indices beyond given level",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "adjustBindings",
          "normalized": "Int-\u003eInt-\u003eExp a-\u003eExp a",
          "package": "Omega",
          "partial": "Bindings",
          "signature": "Int-\u003eInt-\u003eExp t-\u003eExp t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:adjustBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "boolE",
          "package": "Omega",
          "signature": "Bool -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#boolE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "boolE",
          "normalized": "Bool-\u003eBoolExp",
          "package": "Omega",
          "signature": "Bool-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:boolE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunction\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "conjE",
          "package": "Omega",
          "signature": "[BoolExp] -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#conjE",
          "type": "function"
        },
        "index": {
          "description": "Conjunction",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "conjE",
          "normalized": "[BoolExp]-\u003eBoolExp",
          "package": "Omega",
          "signature": "[BoolExp]-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:conjE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "conjExpr",
          "package": "Omega",
          "signature": "[BoolExpr] -\u003e BoolExpr",
          "source": "src/Data-Presburger-Omega-Expr.html#conjExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "conjExpr",
          "normalized": "[BoolExpr]-\u003eBoolExpr",
          "package": "Omega",
          "partial": "Expr",
          "signature": "[BoolExpr]-\u003eBoolExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:conjExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunction\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "disjE",
          "package": "Omega",
          "signature": "[BoolExp] -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#disjE",
          "type": "function"
        },
        "index": {
          "description": "Disjunction",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "disjE",
          "normalized": "[BoolExp]-\u003eBoolExp",
          "package": "Omega",
          "signature": "[BoolExp]-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:disjE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "disjExpr",
          "package": "Omega",
          "signature": "[BoolExpr] -\u003e BoolExpr",
          "source": "src/Data-Presburger-Omega-Expr.html#disjExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "disjExpr",
          "normalized": "[BoolExpr]-\u003eBoolExpr",
          "package": "Omega",
          "partial": "Expr",
          "signature": "[BoolExpr]-\u003eBoolExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:disjExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an existentially quantified formula.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "existsE",
          "package": "Omega",
          "signature": "(Var -\u003e BoolExp) -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#existsE",
          "type": "function"
        },
        "index": {
          "description": "Build an existentially quantified formula",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "existsE",
          "normalized": "(Var-\u003eBoolExp)-\u003eBoolExp",
          "package": "Omega",
          "signature": "(Var-\u003eBoolExp)-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:existsE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "existsExpr",
          "package": "Omega",
          "signature": "BoolExpr -\u003e BoolExpr",
          "source": "src/Data-Presburger-Omega-Expr.html#existsExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "existsExpr",
          "normalized": "BoolExpr-\u003eBoolExpr",
          "package": "Omega",
          "partial": "Expr",
          "signature": "BoolExpr-\u003eBoolExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:existsExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecide whether two expressions are syntactically equal, modulo\n commutativity, associativity, and alpha-renaming.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "expEqual",
          "package": "Omega",
          "signature": "Expr t -\u003e Expr t -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Expr.html#expEqual",
          "type": "function"
        },
        "index": {
          "description": "Decide whether two expressions are syntactically equal modulo commutativity associativity and alpha-renaming",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "expEqual",
          "normalized": "Expr a-\u003eExpr a-\u003eBool",
          "package": "Omega",
          "partial": "Equal",
          "signature": "Expr t-\u003eExpr t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:expEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a boolean expression to a formula.\n\u003c/p\u003e\u003cp\u003eThe expression must be a Presburger formula.  In particular, if an\n expression involves the product of two non-constant terms, it cannot be\n converted to a formula.  The library\n internally simplifies expressions to sum-of-products form, so complex\n expressions are valid as long as each simplified product has at most\n one variable.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "expToFormula",
          "package": "Omega",
          "signature": "[VarHandle]-\u003e BoolExp-\u003e Formula",
          "type": "function"
        },
        "index": {
          "description": "Convert boolean expression to formula The expression must be Presburger formula In particular if an expression involves the product of two non-constant terms it cannot be converted to formula The library internally simplifies expressions to sum-of-products form so complex expressions are valid as long as each simplified product has at most one variable",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "expToFormula",
          "normalized": "[VarHandle]-\u003eBoolExp-\u003eFormula",
          "package": "Omega",
          "partial": "To Formula",
          "signature": "[VarHandle]-\u003eBoolExp-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:expToFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "falseE",
          "package": "Omega",
          "signature": "BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#trueE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "falseE",
          "package": "Omega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:falseE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a boolean expression to a value.  Values for free variables\n are provided explicitly in an environment.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "foldBoolExp",
          "package": "Omega",
          "signature": "(Int -\u003e [b] -\u003e b)-\u003e (Int -\u003e [b] -\u003e b)-\u003e (Int -\u003e b)-\u003e ([a] -\u003e a)-\u003e ([a] -\u003e a)-\u003e (a -\u003e a)-\u003e (Quantifier -\u003e (b -\u003e a) -\u003e a)-\u003e (PredOp -\u003e b -\u003e a)-\u003e a-\u003e a-\u003e [b]-\u003e BoolExp -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Reduce boolean expression to value Values for free variables are provided explicitly in an environment",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "foldBoolExp",
          "normalized": "(Int-\u003e[a]-\u003ea)-\u003e(Int-\u003e[a]-\u003ea)-\u003e(Int-\u003ea)-\u003e([b]-\u003eb)-\u003e([b]-\u003eb)-\u003e(b-\u003eb)-\u003e(Quantifier-\u003e(a-\u003eb)-\u003eb)-\u003e(PredOp-\u003ea-\u003eb)-\u003eb-\u003eb-\u003e[a]-\u003eBoolExp-\u003eb",
          "package": "Omega",
          "partial": "Bool Exp",
          "signature": "(Int-\u003e[b]-\u003eb)-\u003e(Int-\u003e[b]-\u003eb)-\u003e(Int-\u003eb)-\u003e([a]-\u003ea)-\u003e([a]-\u003ea)-\u003e(a-\u003ea)-\u003e(Quantifier-\u003e(b-\u003ea)-\u003ea)-\u003e(PredOp-\u003eb-\u003ea)-\u003ea-\u003ea-\u003e[b]-\u003eBoolExp-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:foldBoolExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce an integer expression to a value.  Values for free variables\n are provided explicitly in an environment.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "foldIntExp",
          "package": "Omega",
          "signature": "(Int -\u003e [a] -\u003e a)-\u003e (Int -\u003e [a] -\u003e a)-\u003e (Int -\u003e a)-\u003e [a]-\u003e IntExp -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Reduce an integer expression to value Values for free variables are provided explicitly in an environment",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "foldIntExp",
          "normalized": "(Int-\u003e[a]-\u003ea)-\u003e(Int-\u003e[a]-\u003ea)-\u003e(Int-\u003ea)-\u003e[a]-\u003eIntExp-\u003ea",
          "package": "Omega",
          "partial": "Int Exp",
          "signature": "(Int-\u003e[a]-\u003ea)-\u003e(Int-\u003e[a]-\u003ea)-\u003e(Int-\u003ea)-\u003e[a]-\u003eIntExp-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:foldIntExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a universally quantified formula.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "forallE",
          "package": "Omega",
          "signature": "(Var -\u003e BoolExp) -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#forallE",
          "type": "function"
        },
        "index": {
          "description": "Build universally quantified formula",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "forallE",
          "normalized": "(Var-\u003eBoolExp)-\u003eBoolExp",
          "package": "Omega",
          "signature": "(Var-\u003eBoolExp)-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:forallE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "intE",
          "package": "Omega",
          "signature": "Int -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#intE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "intE",
          "normalized": "Int-\u003eIntExp",
          "package": "Omega",
          "signature": "Int-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:intE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether an integer expression is nonnegative\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "isNonnegativeE",
          "package": "Omega",
          "signature": "IntExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#isNonnegativeE",
          "type": "function"
        },
        "index": {
          "description": "Test whether an integer expression is nonnegative",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "isNonnegativeE",
          "normalized": "IntExp-\u003eBoolExp",
          "package": "Omega",
          "partial": "Nonnegative",
          "signature": "IntExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:isNonnegativeE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether an integer expression is zero\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "isZeroE",
          "package": "Omega",
          "signature": "IntExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#isZeroE",
          "type": "function"
        },
        "index": {
          "description": "Test whether an integer expression is zero",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "isZeroE",
          "normalized": "IntExp-\u003eBoolExp",
          "package": "Omega",
          "partial": "Zero",
          "signature": "IntExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:isZeroE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication by -1\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "negateE",
          "package": "Omega",
          "signature": "IntExp -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#negateE",
          "type": "function"
        },
        "index": {
          "description": "Multiplication by",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "negateE",
          "normalized": "IntExp-\u003eIntExp",
          "package": "Omega",
          "signature": "IntExp-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:negateE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical negation\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "notE",
          "package": "Omega",
          "signature": "BoolExp -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#notE",
          "type": "function"
        },
        "index": {
          "description": "Logical negation",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "notE",
          "normalized": "BoolExp-\u003eBoolExp",
          "package": "Omega",
          "signature": "BoolExp-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:notE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "nthVarE",
          "package": "Omega",
          "signature": "Int -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#nthVarE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "nthVarE",
          "normalized": "Int-\u003eIntExp",
          "package": "Omega",
          "partial": "Var",
          "signature": "Int-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:nthVarE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the Nth bound variable.  Zero is the innermost variable index.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "nthVariable",
          "package": "Omega",
          "signature": "Int -\u003e Var",
          "source": "src/Data-Presburger-Omega-Expr.html#nthVariable",
          "type": "function"
        },
        "index": {
          "description": "Produce the Nth bound variable Zero is the innermost variable index",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "nthVariable",
          "normalized": "Int-\u003eVar",
          "package": "Omega",
          "partial": "Variable",
          "signature": "Int-\u003eVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:nthVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "prodE",
          "package": "Omega",
          "signature": "[IntExp] -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#prodE",
          "type": "function"
        },
        "index": {
          "description": "Multiplication",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "prodE",
          "normalized": "[IntExp]-\u003eIntExp",
          "package": "Omega",
          "signature": "[IntExp]-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:prodE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute a single variable in an expression.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "rename",
          "package": "Omega",
          "signature": "Var-\u003e Var-\u003e Exp t-\u003e Exp t",
          "type": "function"
        },
        "index": {
          "description": "Substitute single variable in an expression",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "rename",
          "normalized": "Var-\u003eVar-\u003eExp a-\u003eExp a",
          "package": "Omega",
          "signature": "Var-\u003eVar-\u003eExp t-\u003eExp t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSummation\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "sumE",
          "package": "Omega",
          "signature": "[IntExp] -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#sumE",
          "type": "function"
        },
        "index": {
          "description": "Summation",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "sumE",
          "normalized": "[IntExp]-\u003eIntExp",
          "package": "Omega",
          "signature": "[IntExp]-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:sumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sum of products expression\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "sumOfProductsE",
          "package": "Omega",
          "signature": "Int-\u003e [(Int, [Var])]-\u003e IntExp",
          "type": "function"
        },
        "index": {
          "description": "Create sum of products expression",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "sumOfProductsE",
          "normalized": "Int-\u003e[(Int,[Var])]-\u003eIntExp",
          "package": "Omega",
          "partial": "Of Products",
          "signature": "Int-\u003e[(Int,[Var])]-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:sumOfProductsE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "sumOfProductsExpr",
          "package": "Omega",
          "signature": "Int-\u003e [(Int, [Var])]-\u003e IntExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "sumOfProductsExpr",
          "normalized": "Int-\u003e[(Int,[Var])]-\u003eIntExpr",
          "package": "Omega",
          "partial": "Of Products Expr",
          "signature": "Int-\u003e[(Int,[Var])]-\u003eIntExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:sumOfProductsExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a set of variables to use as free variables in an expression.\n This produces the list \u003ccode\u003e[nthVariable 0, nthVariable 1, ...]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "takeFreeVariables",
          "package": "Omega",
          "signature": "Int -\u003e [Var]",
          "source": "src/Data-Presburger-Omega-Expr.html#takeFreeVariables",
          "type": "function"
        },
        "index": {
          "description": "Produce set of variables to use as free variables in an expression This produces the list nthVariable nthVariable",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "takeFreeVariables",
          "normalized": "Int-\u003e[Var]",
          "package": "Omega",
          "partial": "Free Variables",
          "signature": "Int-\u003e[Var]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:takeFreeVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etakeFreeVariables\u003c/a\u003e\u003c/code\u003e, but produce the expression corresponding to\n each variable.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "takeFreeVariables'",
          "package": "Omega",
          "signature": "Int -\u003e [IntExp]",
          "source": "src/Data-Presburger-Omega-Expr.html#takeFreeVariables%27",
          "type": "function"
        },
        "index": {
          "description": "Like takeFreeVariables but produce the expression corresponding to each variable",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "takeFreeVariables'",
          "normalized": "Int-\u003e[IntExp]",
          "package": "Omega",
          "partial": "Free Variables'",
          "signature": "Int-\u003e[IntExp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:takeFreeVariables-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "testExpr",
          "package": "Omega",
          "signature": "PredOp -\u003e IntExpr -\u003e BoolExpr",
          "source": "src/Data-Presburger-Omega-Expr.html#testExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "testExpr",
          "normalized": "PredOp-\u003eIntExpr-\u003eBoolExpr",
          "package": "Omega",
          "partial": "Expr",
          "signature": "PredOp-\u003eIntExpr-\u003eBoolExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:testExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "trueE",
          "package": "Omega",
          "signature": "BoolExp",
          "source": "src/Data-Presburger-Omega-Expr.html#trueE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "trueE",
          "package": "Omega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:trueE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "varE",
          "package": "Omega",
          "signature": "Var -\u003e IntExp",
          "source": "src/Data-Presburger-Omega-Expr.html#varE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "varE",
          "normalized": "Var-\u003eIntExp",
          "package": "Omega",
          "signature": "Var-\u003eIntExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:varE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Expr",
          "name": "varExpr",
          "package": "Omega",
          "signature": "Var -\u003e IntExpr",
          "source": "src/Data-Presburger-Omega-Expr.html#varExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "varExpr",
          "normalized": "Var-\u003eIntExpr",
          "package": "Omega",
          "partial": "Expr",
          "signature": "Var-\u003eIntExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:varExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the expression has no more than the specified number\n of free variables.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "variablesWithinRange",
          "package": "Omega",
          "signature": "Int -\u003e Exp t -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Expr.html#variablesWithinRange",
          "type": "function"
        },
        "index": {
          "description": "True if the expression has no more than the specified number of free variables",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "variablesWithinRange",
          "normalized": "Int-\u003eExp a-\u003eBool",
          "package": "Omega",
          "partial": "Within Range",
          "signature": "Int-\u003eExp t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:variablesWithinRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an expression.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "wrapExpr",
          "package": "Omega",
          "signature": "Expr t -\u003e Exp t",
          "source": "src/Data-Presburger-Omega-Expr.html#wrapExpr",
          "type": "function"
        },
        "index": {
          "description": "Wrap an expression",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "wrapExpr",
          "normalized": "Expr a-\u003eExp a",
          "package": "Omega",
          "partial": "Expr",
          "signature": "Expr t-\u003eExp t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:wrapExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an expression that is known to be in simplified form.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Expr",
          "name": "wrapSimplifiedExpr",
          "package": "Omega",
          "signature": "Expr t -\u003e Exp t",
          "source": "src/Data-Presburger-Omega-Expr.html#wrapSimplifiedExpr",
          "type": "function"
        },
        "index": {
          "description": "Wrap an expression that is known to be in simplified form",
          "hierarchy": "Data Presburger Omega Expr",
          "module": "Data.Presburger.Omega.Expr",
          "name": "wrapSimplifiedExpr",
          "normalized": "Expr a-\u003eExp a",
          "package": "Omega",
          "partial": "Simplified Expr",
          "signature": "Expr t-\u003eExp t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Expr.html#v:wrapSimplifiedExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a low-level interface for creating,\n manipulating, and querying Presburger arithmetic formulae.\n The real work is done by the C++ Omega library\n (\u003ca\u003ehttp://github.com/davewathaverford/the-omega-project\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe main data types are \u003ccode\u003e\u003ca\u003eOmegaSet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOmegaRel\u003c/a\u003e\u003c/code\u003e, which use a formula\n to define a set or relation, respectively, on integer-valued points in\n Cartesian space.\n A typical use involves creating a Presburger arithmetic \u003ccode\u003e\u003ca\u003eFormula\u003c/a\u003e\u003c/code\u003e, using\n it to create a set or relation, and then querying the set or relation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "LowLevel",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides low-level interface for creating manipulating and querying Presburger arithmetic formulae The real work is done by the Omega library http github.com davewathaverford the-omega-project The main data types are OmegaSet and OmegaRel which use formula to define set or relation respectively on integer-valued points in Cartesian space typical use involves creating Presburger arithmetic Formula using it to create set or relation and then querying the set or relation",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "LowLevel",
          "package": "Omega",
          "partial": "Low Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integer-valued term \u003ccode\u003en*v\u003c/code\u003e in a formula.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Coefficient",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Coefficient",
          "type": "data"
        },
        "index": {
          "description": "An integer-valued term in formula",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Coefficient",
          "package": "Omega",
          "partial": "Coefficient",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#t:Coefficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egist\u003c/a\u003e\u003c/code\u003e routine takes a parameter specifying how much effort to\n put into generating a good result.  Higher effort takes more time.\n It's unspecified what a given effort level does.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Effort",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Effort",
          "type": "data"
        },
        "index": {
          "description": "The gist routine takes parameter specifying how much effort to put into generating good result Higher effort takes more time It unspecified what given effort level does",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Effort",
          "package": "Omega",
          "partial": "Effort",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#t:Effort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA boolean-valued Presburger formula.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Formula",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Formula",
          "type": "data"
        },
        "index": {
          "description": "boolean-valued Presburger formula",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Formula",
          "package": "Omega",
          "partial": "Formula",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation from points in a \u003cem\u003edomain\u003c/em\u003e Z^m\n to points in a \u003cem\u003erange\u003c/em\u003e Z^n.\n This is a wrapper around the Omega library's Relation type.\n\u003c/p\u003e\u003cp\u003eA relation can be considered as just a set of points in Z^(m+n).\n However, many routines treat the domain and range differently.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "OmegaRel",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html#OmegaRel",
          "type": "data"
        },
        "index": {
          "description": "relation from points in domain to points in range This is wrapper around the Omega library Relation type relation can be considered as just set of points in However many routines treat the domain and range differently",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "OmegaRel",
          "package": "Omega",
          "partial": "Omega Rel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#t:OmegaRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of points in Z^n.\n This is a wrapper around the Omega library's Relation type.  \n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "OmegaSet",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html#OmegaSet",
          "type": "data"
        },
        "index": {
          "description": "set of points in This is wrapper around the Omega library Relation type",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "OmegaSet",
          "package": "Omega",
          "partial": "Omega Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#t:OmegaSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData types containing Presburger formulae.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Presburger",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Presburger",
          "type": "class"
        },
        "index": {
          "description": "Data types containing Presburger formulae",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Presburger",
          "package": "Omega",
          "partial": "Presburger",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#t:Presburger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable in a formula.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "VarHandle",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html#VarHandle",
          "type": "data"
        },
        "index": {
          "description": "variable in formula",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "VarHandle",
          "package": "Omega",
          "partial": "Var Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#t:VarHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Coefficient",
          "package": "Omega",
          "signature": "Coefficient",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Coefficient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Coefficient",
          "package": "Omega",
          "partial": "Coefficient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:Coefficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Presburger.Omega.LowLevel\",\"Data.Presburger.Omega.Rel\",\"Data.Presburger.Omega.Set\"]",
          "name": "Light",
          "package": "Omega",
          "signature": "Light",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Effort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:Light\",\"http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:Light\",\"http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:Light\"]"
        },
        "index": {
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Light",
          "package": "Omega",
          "partial": "Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:Light"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Presburger.Omega.LowLevel\",\"Data.Presburger.Omega.Rel\",\"Data.Presburger.Omega.Set\"]",
          "name": "Moderate",
          "package": "Omega",
          "signature": "Moderate",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Effort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:Moderate\",\"http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:Moderate\",\"http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:Moderate\"]"
        },
        "index": {
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Moderate",
          "package": "Omega",
          "partial": "Moderate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:Moderate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Presburger.Omega.LowLevel\",\"Data.Presburger.Omega.Rel\",\"Data.Presburger.Omega.Set\"]",
          "name": "Strenuous",
          "package": "Omega",
          "signature": "Strenuous",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Effort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:Strenuous\",\"http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:Strenuous\",\"http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:Strenuous\"]"
        },
        "index": {
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "Strenuous",
          "package": "Omega",
          "partial": "Strenuous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:Strenuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate a set or relation by allowing all existentially quantified\n variables to take on rational values.  This allows these variables to be\n eliminated from the formula.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "approximate",
          "package": "Omega",
          "signature": "a -\u003e IO a",
          "source": "src/Data-Presburger-Omega-LowLevel.html#approximate",
          "type": "function"
        },
        "index": {
          "description": "Approximate set or relation by allowing all existentially quantified variables to take on rational values This allows these variables to be eliminated from the formula",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "approximate",
          "normalized": "a-\u003eIO a",
          "package": "Omega",
          "signature": "a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:approximate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "coeffValue",
          "package": "Omega",
          "signature": "Int",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Coefficient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "coeffValue",
          "package": "Omega",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:coeffValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "coeffVar",
          "package": "Omega",
          "signature": "VarHandle",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Coefficient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "coeffVar",
          "package": "Omega",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:coeffVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the complement of a set or relation.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "complement",
          "package": "Omega",
          "signature": "a -\u003e IO a",
          "source": "src/Data-Presburger-Omega-LowLevel.html#complement",
          "type": "function"
        },
        "index": {
          "description": "Get the complement of set or relation",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "complement",
          "normalized": "a-\u003eIO a",
          "package": "Omega",
          "signature": "a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the composition of two sets or relations.  The\n first relation's domain must be the same dimension as the second's range.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "composition",
          "package": "Omega",
          "signature": "OmegaRel -\u003e OmegaRel -\u003e IO OmegaRel",
          "source": "src/Data-Presburger-Omega-LowLevel.html#composition",
          "type": "function"
        },
        "index": {
          "description": "Compute the composition of two sets or relations The first relation domain must be the same dimension as the second range",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "composition",
          "normalized": "OmegaRel-\u003eOmegaRel-\u003eIO OmegaRel",
          "package": "Omega",
          "signature": "OmegaRel-\u003eOmegaRel-\u003eIO OmegaRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:composition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical conjunction (and).\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "conjunction",
          "package": "Omega",
          "signature": "[Formula] -\u003e Formula",
          "source": "src/Data-Presburger-Omega-LowLevel.html#conjunction",
          "type": "function"
        },
        "index": {
          "description": "Logical conjunction and",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "conjunction",
          "normalized": "[Formula]-\u003eFormula",
          "package": "Omega",
          "signature": "[Formula]-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:conjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the cross product of two sets.\n   The cross product relates every element of \u003ccode\u003es\u003c/code\u003e to every element of \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "crossProduct",
          "package": "Omega",
          "signature": "OmegaSet -\u003e OmegaSet -\u003e IO OmegaRel",
          "source": "src/Data-Presburger-Omega-LowLevel.html#crossProduct",
          "type": "function"
        },
        "index": {
          "description": "Compute the cross product of two sets The cross product relates every element of to every element of",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "crossProduct",
          "normalized": "OmegaSet-\u003eOmegaSet-\u003eIO OmegaRel",
          "package": "Omega",
          "partial": "Product",
          "signature": "OmegaSet-\u003eOmegaSet-\u003eIO OmegaRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:crossProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the formula is a tautology.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "definiteTautology",
          "package": "Omega",
          "signature": "a -\u003e IO Bool",
          "source": "src/Data-Presburger-Omega-LowLevel.html#definiteTautology",
          "type": "function"
        },
        "index": {
          "description": "True if the formula is tautology",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "definiteTautology",
          "normalized": "a-\u003eIO Bool",
          "package": "Omega",
          "partial": "Tautology",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:definiteTautology"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the deltas of a relation.\n The relation's input dimensionality must be the same as its output\n dimensionality.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "deltas",
          "package": "Omega",
          "signature": "OmegaRel -\u003e IO OmegaSet",
          "source": "src/Data-Presburger-Omega-LowLevel.html#deltas",
          "type": "function"
        },
        "index": {
          "description": "Get the deltas of relation The relation input dimensionality must be the same as its output dimensionality",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "deltas",
          "normalized": "OmegaRel-\u003eIO OmegaSet",
          "package": "Omega",
          "signature": "OmegaRel-\u003eIO OmegaSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:deltas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the difference of two relations or sets.\n   The members of \u003ccode\u003edifference x y\u003c/code\u003e are the members of \u003ccode\u003ex\u003c/code\u003e that are not\n   members of \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "difference",
          "package": "Omega",
          "signature": "a -\u003e a -\u003e IO a",
          "source": "src/Data-Presburger-Omega-LowLevel.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Compute the difference of two relations or sets The members of difference are the members of that are not members of",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "difference",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "Omega",
          "signature": "a-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical disjunction (or).\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "disjunction",
          "package": "Omega",
          "signature": "[Formula] -\u003e Formula",
          "source": "src/Data-Presburger-Omega-LowLevel.html#disjunction",
          "type": "function"
        },
        "index": {
          "description": "Logical disjunction or",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "disjunction",
          "normalized": "[Formula]-\u003eFormula",
          "package": "Omega",
          "signature": "[Formula]-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:disjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the domain of a relation.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "domain",
          "package": "Omega",
          "signature": "OmegaRel -\u003e IO OmegaSet",
          "source": "src/Data-Presburger-Omega-LowLevel.html#domain",
          "type": "function"
        },
        "index": {
          "description": "Get the domain of relation",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "domain",
          "normalized": "OmegaRel-\u003eIO OmegaSet",
          "package": "Omega",
          "signature": "OmegaRel-\u003eIO OmegaSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether two sets or relations are equal.\n The sets or relations must have the same arity.\n\u003c/p\u003e\u003cp\u003eThe answer is precise if both arguments are \u003ccode\u003e\u003ca\u003eexact\u003c/a\u003e\u003c/code\u003e.\n If either argument is inexact, this function returns \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "equal",
          "package": "Omega",
          "signature": "a -\u003e a -\u003e IO Bool",
          "source": "src/Data-Presburger-Omega-LowLevel.html#equal",
          "type": "function"
        },
        "index": {
          "description": "Test whether two sets or relations are equal The sets or relations must have the same arity The answer is precise if both arguments are exact If either argument is inexact this function returns False",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "equal",
          "normalized": "a-\u003ea-\u003eIO Bool",
          "package": "Omega",
          "signature": "a-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an equation of the form \u003ccode\u003ea*x + b*y + ... + d = 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "equality",
          "package": "Omega",
          "signature": "[Coefficient] -\u003e Int -\u003e Formula",
          "source": "src/Data-Presburger-Omega-LowLevel.html#equality",
          "type": "function"
        },
        "index": {
          "description": "Construct an equation of the form",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "equality",
          "normalized": "[Coefficient]-\u003eInt-\u003eFormula",
          "package": "Omega",
          "signature": "[Coefficient]-\u003eInt-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:equality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the formula has no UNKNOWN constraints.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "exact",
          "package": "Omega",
          "signature": "a -\u003e IO Bool",
          "source": "src/Data-Presburger-Omega-LowLevel.html#exact",
          "type": "function"
        },
        "index": {
          "description": "True if the formula has no UNKNOWN constraints",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "exact",
          "normalized": "a-\u003eIO Bool",
          "package": "Omega",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFalsity.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "false",
          "package": "Omega",
          "signature": "Formula",
          "source": "src/Data-Presburger-Omega-LowLevel.html#false",
          "type": "function"
        },
        "index": {
          "description": "Falsity",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "false",
          "package": "Omega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the gist of a set or relation, given some background truth.  The\n gist operator uses heuristics to make a set or relation simpler, while\n still retaining sufficient information to regenerate the original by\n re-introducing the background truth.  The sets or relations\n must have the same arity.\n\u003c/p\u003e\u003cp\u003eGiven \u003ccode\u003ex\u003c/code\u003e computed by\n\u003c/p\u003e\u003cpre\u003e x \u003c- intersection given =\u003c\u003c gist effort r given\n\u003c/pre\u003e\u003cp\u003ewe have \u003ccode\u003ex == r\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "gist",
          "package": "Omega",
          "signature": "Effort -\u003e a -\u003e a -\u003e IO a",
          "source": "src/Data-Presburger-Omega-LowLevel.html#gist",
          "type": "function"
        },
        "index": {
          "description": "Get the gist of set or relation given some background truth The gist operator uses heuristics to make set or relation simpler while still retaining sufficient information to regenerate the original by re-introducing the background truth The sets or relations must have the same arity Given computed by intersection given gist effort given we have",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "gist",
          "normalized": "Effort-\u003ea-\u003ea-\u003eIO a",
          "package": "Omega",
          "signature": "Effort-\u003ea-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:gist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an inequation of the form \u003ccode\u003ea*x + b*y + ... + d \u003e= 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "inequality",
          "package": "Omega",
          "signature": "[Coefficient] -\u003e Int -\u003e Formula",
          "source": "src/Data-Presburger-Omega-LowLevel.html#inequality",
          "type": "function"
        },
        "index": {
          "description": "Construct an inequation of the form",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "inequality",
          "normalized": "[Coefficient]-\u003eInt-\u003eFormula",
          "package": "Omega",
          "signature": "[Coefficient]-\u003eInt-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:inequality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the formula has UNKNOWN constraints.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "inexact",
          "package": "Omega",
          "signature": "a -\u003e IO Bool",
          "source": "src/Data-Presburger-Omega-LowLevel.html#inexact",
          "type": "function"
        },
        "index": {
          "description": "True if the formula has UNKNOWN constraints",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "inexact",
          "normalized": "a-\u003eIO Bool",
          "package": "Omega",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:inexact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the intersection of two sets or relations.  The sets or relations\n must have the same arity.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "intersection",
          "package": "Omega",
          "signature": "a -\u003e a -\u003e IO a",
          "source": "src/Data-Presburger-Omega-LowLevel.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Compute the intersection of two sets or relations The sets or relations must have the same arity",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "intersection",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "Omega",
          "signature": "a-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the inverse of a relation.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "inverse",
          "package": "Omega",
          "signature": "OmegaRel -\u003e IO OmegaRel",
          "source": "src/Data-Presburger-Omega-LowLevel.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "Get the inverse of relation",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "inverse",
          "normalized": "OmegaRel-\u003eIO OmegaRel",
          "package": "Omega",
          "signature": "OmegaRel-\u003eIO OmegaRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the lower bound of a set or relation by setting all UNKNOWN\n constraints to false.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "lowerBound",
          "package": "Omega",
          "signature": "a -\u003e IO a",
          "source": "src/Data-Presburger-Omega-LowLevel.html#lowerBound",
          "type": "function"
        },
        "index": {
          "description": "Compute the lower bound of set or relation by setting all UNKNOWN constraints to false",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "lowerBound",
          "normalized": "a-\u003eIO a",
          "package": "Omega",
          "partial": "Bound",
          "signature": "a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:lowerBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine a lower bound on whether the formula is satisfiable.\n The lower bound is based on treating all UNKNOWN constraints as false.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "lowerBoundSatisfiable",
          "package": "Omega",
          "signature": "a -\u003e IO Bool",
          "source": "src/Data-Presburger-Omega-LowLevel.html#lowerBoundSatisfiable",
          "type": "function"
        },
        "index": {
          "description": "Determine lower bound on whether the formula is satisfiable The lower bound is based on treating all UNKNOWN constraints as false",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "lowerBoundSatisfiable",
          "normalized": "a-\u003eIO Bool",
          "package": "Omega",
          "partial": "Bound Satisfiable",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:lowerBoundSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical negation.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "negation",
          "package": "Omega",
          "signature": "Formula -\u003e Formula",
          "source": "src/Data-Presburger-Omega-LowLevel.html#negation",
          "type": "function"
        },
        "index": {
          "description": "Logical negation",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "negation",
          "normalized": "Formula-\u003eFormula",
          "package": "Omega",
          "signature": "Formula-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:negation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Omega relation.  The first two parameters are the number\n of dimensions of the domain and range, respectively.  The third parameter\n builds a formula defining the relation.  Two points are related iff the\n formula evaluates to True on those points.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "newOmegaRel",
          "package": "Omega",
          "signature": "Int-\u003e Int-\u003e ([VarHandle] -\u003e [VarHandle] -\u003e Formula)-\u003e IO OmegaRel",
          "type": "function"
        },
        "index": {
          "description": "Create an Omega relation The first two parameters are the number of dimensions of the domain and range respectively The third parameter builds formula defining the relation Two points are related iff the formula evaluates to True on those points",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "newOmegaRel",
          "normalized": "Int-\u003eInt-\u003e([VarHandle]-\u003e[VarHandle]-\u003eFormula)-\u003eIO OmegaRel",
          "package": "Omega",
          "partial": "Omega Rel",
          "signature": "Int-\u003eInt-\u003e([VarHandle]-\u003e[VarHandle]-\u003eFormula)-\u003eIO OmegaRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:newOmegaRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Omega set.  The first parameter is the number of dimensions\n the set inhabits.  The second parameter builds a formula\n defining the set's members. The set's members are those points\n for which the formula evaluates to True.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "newOmegaSet",
          "package": "Omega",
          "signature": "Int-\u003e ([VarHandle] -\u003e Formula)-\u003e IO OmegaSet",
          "type": "function"
        },
        "index": {
          "description": "Create an Omega set The first parameter is the number of dimensions the set inhabits The second parameter builds formula defining the set members The set members are those points for which the formula evaluates to True",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "newOmegaSet",
          "normalized": "Int-\u003e([VarHandle]-\u003eFormula)-\u003eIO OmegaSet",
          "package": "Omega",
          "partial": "Omega Set",
          "signature": "Int-\u003e([VarHandle]-\u003eFormula)-\u003eIO OmegaSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:newOmegaSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse simple, fast tests to decide whether the formula is a tautology.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "obviousTautology",
          "package": "Omega",
          "signature": "a -\u003e IO Bool",
          "source": "src/Data-Presburger-Omega-LowLevel.html#obviousTautology",
          "type": "function"
        },
        "index": {
          "description": "Use simple fast tests to decide whether the formula is tautology",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "obviousTautology",
          "normalized": "a-\u003eIO Bool",
          "package": "Omega",
          "partial": "Tautology",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:obviousTautology"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential quantification.  The \u003ccode\u003e\u003ca\u003eVarHandle\u003c/a\u003e\u003c/code\u003e parameter is the variable\n bound by the quantifier.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "qExists",
          "package": "Omega",
          "signature": "(VarHandle -\u003e Formula) -\u003e Formula",
          "source": "src/Data-Presburger-Omega-LowLevel.html#qExists",
          "type": "function"
        },
        "index": {
          "description": "Existential quantification The VarHandle parameter is the variable bound by the quantifier",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "qExists",
          "normalized": "(VarHandle-\u003eFormula)-\u003eFormula",
          "package": "Omega",
          "partial": "Exists",
          "signature": "(VarHandle-\u003eFormula)-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:qExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniversal quantification.  The \u003ccode\u003e\u003ca\u003eVarHandle\u003c/a\u003e\u003c/code\u003e parameter is the variable\n bound by the quantifier.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "qForall",
          "package": "Omega",
          "signature": "(VarHandle -\u003e Formula) -\u003e Formula",
          "source": "src/Data-Presburger-Omega-LowLevel.html#qForall",
          "type": "function"
        },
        "index": {
          "description": "Universal quantification The VarHandle parameter is the variable bound by the quantifier",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "qForall",
          "normalized": "(VarHandle-\u003eFormula)-\u003eFormula",
          "package": "Omega",
          "partial": "Forall",
          "signature": "(VarHandle-\u003eFormula)-\u003eFormula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:qForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInspect a relation's low-level representation directly.  This function\n takes care of data structure traversal and relies on other routines to\n interpret the data.\n\u003c/p\u003e\u003cp\u003eAll three accumulating functions take the relation's input and\n output variables as their first and second parameters, respectively,\n and any existentially quantified variables as\n their second parameter.  The relation's input and output variables are\n returned along with a result value.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "queryDNFRelation",
          "package": "Omega",
          "signature": "([VarHandle] -\u003e [VarHandle] -\u003e [VarHandle] -\u003e [Coefficient] -\u003e Int -\u003e a -\u003e a)-\u003e a-\u003e ([VarHandle] -\u003e [VarHandle] -\u003e [VarHandle] -\u003e [Coefficient] -\u003e Int -\u003e b -\u003e b)-\u003e b-\u003e ([VarHandle] -\u003e [VarHandle] -\u003e [VarHandle] -\u003e a -\u003e b -\u003e c -\u003e c)-\u003e c-\u003e OmegaRel-\u003e IO ([VarHandle], [VarHandle], c)",
          "type": "function"
        },
        "index": {
          "description": "Inspect relation low-level representation directly This function takes care of data structure traversal and relies on other routines to interpret the data All three accumulating functions take the relation input and output variables as their first and second parameters respectively and any existentially quantified variables as their second parameter The relation input and output variables are returned along with result value",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "queryDNFRelation",
          "normalized": "([VarHandle]-\u003e[VarHandle]-\u003e[VarHandle]-\u003e[Coefficient]-\u003eInt-\u003ea-\u003ea)-\u003ea-\u003e([VarHandle]-\u003e[VarHandle]-\u003e[VarHandle]-\u003e[Coefficient]-\u003eInt-\u003eb-\u003eb)-\u003eb-\u003e([VarHandle]-\u003e[VarHandle]-\u003e[VarHandle]-\u003ea-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eOmegaRel-\u003eIO([VarHandle],[VarHandle],c)",
          "package": "Omega",
          "partial": "DNFRelation",
          "signature": "([VarHandle]-\u003e[VarHandle]-\u003e[VarHandle]-\u003e[Coefficient]-\u003eInt-\u003ea-\u003ea)-\u003ea-\u003e([VarHandle]-\u003e[VarHandle]-\u003e[VarHandle]-\u003e[Coefficient]-\u003eInt-\u003eb-\u003eb)-\u003eb-\u003e([VarHandle]-\u003e[VarHandle]-\u003e[VarHandle]-\u003ea-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eOmegaRel-\u003eIO([VarHandle],[VarHandle],c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:queryDNFRelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInspect a set's low-level representation directly.  This function\n takes care of data structure traversal and relies on other routines to\n interpret the data.\n\u003c/p\u003e\u003cp\u003eAll three accumulating functions take the set variables as their\n first parameter, and any existentially quantified variables as\n their second parameter.  The set variables are returned along with\n a result value.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "queryDNFSet",
          "package": "Omega",
          "signature": "([VarHandle] -\u003e [VarHandle] -\u003e [Coefficient] -\u003e Int -\u003e a -\u003e a)-\u003e a-\u003e ([VarHandle] -\u003e [VarHandle] -\u003e [Coefficient] -\u003e Int -\u003e b -\u003e b)-\u003e b-\u003e ([VarHandle] -\u003e [VarHandle] -\u003e a -\u003e b -\u003e c -\u003e c)-\u003e c-\u003e OmegaSet-\u003e IO ([VarHandle], c)",
          "type": "function"
        },
        "index": {
          "description": "Inspect set low-level representation directly This function takes care of data structure traversal and relies on other routines to interpret the data All three accumulating functions take the set variables as their first parameter and any existentially quantified variables as their second parameter The set variables are returned along with result value",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "queryDNFSet",
          "normalized": "([VarHandle]-\u003e[VarHandle]-\u003e[Coefficient]-\u003eInt-\u003ea-\u003ea)-\u003ea-\u003e([VarHandle]-\u003e[VarHandle]-\u003e[Coefficient]-\u003eInt-\u003eb-\u003eb)-\u003eb-\u003e([VarHandle]-\u003e[VarHandle]-\u003ea-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eOmegaSet-\u003eIO([VarHandle],c)",
          "package": "Omega",
          "partial": "DNFSet",
          "signature": "([VarHandle]-\u003e[VarHandle]-\u003e[Coefficient]-\u003eInt-\u003ea-\u003ea)-\u003ea-\u003e([VarHandle]-\u003e[VarHandle]-\u003e[Coefficient]-\u003eInt-\u003eb-\u003eb)-\u003eb-\u003e([VarHandle]-\u003e[VarHandle]-\u003ea-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eOmegaSet-\u003eIO([VarHandle],c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:queryDNFSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the range of a relation.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "range",
          "package": "Omega",
          "signature": "OmegaRel -\u003e IO OmegaSet",
          "source": "src/Data-Presburger-Omega-LowLevel.html#range",
          "type": "function"
        },
        "index": {
          "description": "Get the range of relation",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "range",
          "normalized": "OmegaRel-\u003eIO OmegaSet",
          "package": "Omega",
          "signature": "OmegaRel-\u003eIO OmegaSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict the domain of a relation.\n   If \u003ccode\u003edomain r\u003c/code\u003e is \u003ccode\u003ed\u003c/code\u003e, then \u003ccode\u003edomain =\u003c\u003c restrictDomain r s\u003c/code\u003e\n   is \u003ccode\u003eintersection d s\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "restrictDomain",
          "package": "Omega",
          "signature": "OmegaRel -\u003e OmegaSet -\u003e IO OmegaRel",
          "source": "src/Data-Presburger-Omega-LowLevel.html#restrictDomain",
          "type": "function"
        },
        "index": {
          "description": "Restrict the domain of relation If domain is then domain restrictDomain is intersection",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "restrictDomain",
          "normalized": "OmegaRel-\u003eOmegaSet-\u003eIO OmegaRel",
          "package": "Omega",
          "partial": "Domain",
          "signature": "OmegaRel-\u003eOmegaSet-\u003eIO OmegaRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:restrictDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict the range of a relation.\n   If \u003ccode\u003erange r\u003c/code\u003e is \u003ccode\u003ed\u003c/code\u003e, then \u003ccode\u003erange =\u003c\u003c restrictRange r s\u003c/code\u003e\n   is \u003ccode\u003eintersection d s\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "restrictRange",
          "package": "Omega",
          "signature": "OmegaRel -\u003e OmegaSet -\u003e IO OmegaRel",
          "source": "src/Data-Presburger-Omega-LowLevel.html#restrictRange",
          "type": "function"
        },
        "index": {
          "description": "Restrict the range of relation If range is then range restrictRange is intersection",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "restrictRange",
          "normalized": "OmegaRel-\u003eOmegaSet-\u003eIO OmegaRel",
          "package": "Omega",
          "partial": "Range",
          "signature": "OmegaRel-\u003eOmegaSet-\u003eIO OmegaRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:restrictRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the transitive closure of a relation.  In some cases, the transitive\n closure cannot be computed exactly, in which case a lower bound is\n returned.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "transitiveClosure",
          "package": "Omega",
          "signature": "OmegaRel -\u003e IO OmegaRel",
          "source": "src/Data-Presburger-Omega-LowLevel.html#transitiveClosure",
          "type": "function"
        },
        "index": {
          "description": "Get the transitive closure of relation In some cases the transitive closure cannot be computed exactly in which case lower bound is returned",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "transitiveClosure",
          "normalized": "OmegaRel-\u003eIO OmegaRel",
          "package": "Omega",
          "partial": "Closure",
          "signature": "OmegaRel-\u003eIO OmegaRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:transitiveClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruth.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "true",
          "package": "Omega",
          "signature": "Formula",
          "source": "src/Data-Presburger-Omega-LowLevel.html#true",
          "type": "function"
        },
        "index": {
          "description": "Truth",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "true",
          "package": "Omega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the union of two sets or relations.  The sets or relations\n must have the same arity.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "union",
          "package": "Omega",
          "signature": "a -\u003e a -\u003e IO a",
          "source": "src/Data-Presburger-Omega-LowLevel.html#union",
          "type": "function"
        },
        "index": {
          "description": "Compute the union of two sets or relations The sets or relations must have the same arity",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "union",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "Omega",
          "signature": "a-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the formula is UNKNOWN.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "unknown",
          "package": "Omega",
          "signature": "a -\u003e IO Bool",
          "source": "src/Data-Presburger-Omega-LowLevel.html#unknown",
          "type": "function"
        },
        "index": {
          "description": "True if the formula is UNKNOWN",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "unknown",
          "normalized": "a-\u003eIO Bool",
          "package": "Omega",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the upper bound of a set or relation by setting all UNKNOWN\n constraints to true.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "upperBound",
          "package": "Omega",
          "signature": "a -\u003e IO a",
          "source": "src/Data-Presburger-Omega-LowLevel.html#upperBound",
          "type": "function"
        },
        "index": {
          "description": "Compute the upper bound of set or relation by setting all UNKNOWN constraints to true",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "upperBound",
          "normalized": "a-\u003eIO a",
          "package": "Omega",
          "partial": "Bound",
          "signature": "a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:upperBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine an upper bound on whether the formula is satisfiable.\n The upper bound is based on treating all UNKNOWN constraints as true.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "upperBoundSatisfiable",
          "package": "Omega",
          "signature": "a -\u003e IO Bool",
          "source": "src/Data-Presburger-Omega-LowLevel.html#upperBoundSatisfiable",
          "type": "function"
        },
        "index": {
          "description": "Determine an upper bound on whether the formula is satisfiable The upper bound is based on treating all UNKNOWN constraints as true",
          "hierarchy": "Data Presburger Omega LowLevel",
          "module": "Data.Presburger.Omega.LowLevel",
          "name": "upperBoundSatisfiable",
          "normalized": "a-\u003eIO Bool",
          "package": "Omega",
          "partial": "Bound Satisfiable",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-LowLevel.html#v:upperBoundSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRelations whose members are represented compactly using a\n Presburger arithmetic formula.  This is a high-level interface to\n \u003ccode\u003e\u003ca\u003eOmegaRel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Presburger.Omega.Rel as WRel\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "Rel",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Rel.html",
          "type": "module"
        },
        "index": {
          "description": "Relations whose members are represented compactly using Presburger arithmetic formula This is high-level interface to OmegaRel This module is intended to be imported qualified e.g import qualified Data.Presburger.Omega.Rel as WRel",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "Rel",
          "package": "Omega",
          "partial": "Rel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egist\u003c/a\u003e\u003c/code\u003e routine takes a parameter specifying how much effort to\n put into generating a good result.  Higher effort takes more time.\n It's unspecified what a given effort level does.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "Effort",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Effort",
          "type": "data"
        },
        "index": {
          "description": "The gist routine takes parameter specifying how much effort to put into generating good result Higher effort takes more time It unspecified what given effort level does",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "Effort",
          "package": "Omega",
          "partial": "Effort",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#t:Effort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation from points in a \u003cem\u003edomain\u003c/em\u003e Z^m to points in a \u003cem\u003erange\u003c/em\u003e Z^n.\n\u003c/p\u003e\u003cp\u003eA relation can be considered just a set of points in Z^(m+n).  However,\n many functions that operate on relations treat the domain and range\n differently.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "Rel",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Rel.html#Rel",
          "type": "data"
        },
        "index": {
          "description": "relation from points in domain to points in range relation can be considered just set of points in However many functions that operate on relations treat the domain and range differently",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "Rel",
          "package": "Omega",
          "partial": "Rel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#t:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate a relation by allowing all existentially quantified\n variables to take on rational values.  This allows these variables to be\n eliminated from the formula.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "approximate",
          "package": "Omega",
          "signature": "Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#approximate",
          "type": "function"
        },
        "index": {
          "description": "Approximate relation by allowing all existentially quantified variables to take on rational values This allows these variables to be eliminated from the formula",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "approximate",
          "normalized": "Rel-\u003eRel",
          "package": "Omega",
          "signature": "Rel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:approximate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the complement of a relation.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "complement",
          "package": "Omega",
          "signature": "Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#complement",
          "type": "function"
        },
        "index": {
          "description": "Get the complement of relation",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "complement",
          "normalized": "Rel-\u003eRel",
          "package": "Omega",
          "signature": "Rel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of two relations.\n The second relation's output must be the same size as the first's input\n (\u003ccode\u003eoutputDimension r2 == inputDimension r1\u003c/code\u003e),\n or an error will be raised.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "composition",
          "package": "Omega",
          "signature": "Rel -\u003e Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#composition",
          "type": "function"
        },
        "index": {
          "description": "Composition of two relations The second relation output must be the same size as the first input outputDimension r2 inputDimension r1 or an error will be raised",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "composition",
          "normalized": "Rel-\u003eRel-\u003eRel",
          "package": "Omega",
          "signature": "Rel-\u003eRel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:composition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCross product of two sets.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "crossProduct",
          "package": "Omega",
          "signature": "Set -\u003e Set -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#crossProduct",
          "type": "function"
        },
        "index": {
          "description": "Cross product of two sets",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "crossProduct",
          "normalized": "Set-\u003eSet-\u003eRel",
          "package": "Omega",
          "partial": "Product",
          "signature": "Set-\u003eSet-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:crossProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Rel",
          "name": "definiteTautology",
          "package": "Omega",
          "signature": "Rel -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Rel.html#definiteTautology",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "definiteTautology",
          "normalized": "Rel-\u003eBool",
          "package": "Omega",
          "partial": "Tautology",
          "signature": "Rel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:definiteTautology"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Rel",
          "name": "deltas",
          "package": "Omega",
          "signature": "Rel -\u003e Set",
          "source": "src/Data-Presburger-Omega-Rel.html#deltas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "deltas",
          "normalized": "Rel-\u003eSet",
          "package": "Omega",
          "signature": "Rel-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:deltas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference of two relations.\n The relations must have the same dimension\n (\u003ccode\u003einputDimension r1 == inputDimension r2 && outputDimension r1 == outputDimension r2\u003c/code\u003e),\n or an error will be raised.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "difference",
          "package": "Omega",
          "signature": "Rel -\u003e Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference of two relations The relations must have the same dimension inputDimension r1 inputDimension r2 outputDimension r1 outputDimension r2 or an error will be raised",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "difference",
          "normalized": "Rel-\u003eRel-\u003eRel",
          "package": "Omega",
          "signature": "Rel-\u003eRel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Rel",
          "name": "domain",
          "package": "Omega",
          "signature": "Rel -\u003e Set",
          "source": "src/Data-Presburger-Omega-Rel.html#domain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "domain",
          "normalized": "Rel-\u003eSet",
          "package": "Omega",
          "signature": "Rel-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether two relations are equal.\n The relations must have the same dimension\n (\u003ccode\u003einputDimension r1 == inputDimension r2 && outputDimension r1 == outputDimension r2\u003c/code\u003e),\n or an error will be raised.\n\u003c/p\u003e\u003cp\u003eThe answer is precise if both relations are \u003ccode\u003e\u003ca\u003eexact\u003c/a\u003e\u003c/code\u003e.\n If either relation is inexact, this function returns \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "equal",
          "package": "Omega",
          "signature": "Rel -\u003e Rel -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Rel.html#equal",
          "type": "function"
        },
        "index": {
          "description": "Test whether two relations are equal The relations must have the same dimension inputDimension r1 inputDimension r2 outputDimension r1 outputDimension r2 or an error will be raised The answer is precise if both relations are exact If either relation is inexact this function returns False",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "equal",
          "normalized": "Rel-\u003eRel-\u003eBool",
          "package": "Omega",
          "signature": "Rel-\u003eRel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the relation has no UNKNOWN constraints.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "exact",
          "package": "Omega",
          "signature": "Rel -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Rel.html#exact",
          "type": "function"
        },
        "index": {
          "description": "True if the relation has no UNKNOWN constraints",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "exact",
          "normalized": "Rel-\u003eBool",
          "package": "Omega",
          "signature": "Rel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOmegaRel\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eRel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "fromOmegaRel",
          "package": "Omega",
          "signature": "OmegaRel -\u003e IO Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#fromOmegaRel",
          "type": "function"
        },
        "index": {
          "description": "Convert an OmegaRel to Rel",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "fromOmegaRel",
          "normalized": "OmegaRel-\u003eIO Rel",
          "package": "Omega",
          "partial": "Omega Rel",
          "signature": "OmegaRel-\u003eIO Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:fromOmegaRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a relation where each output is a function of the inputs.\n\u003c/p\u003e\u003cp\u003eEach expression should have \u003ccode\u003em\u003c/code\u003e free variables, where \u003ccode\u003em\u003c/code\u003e\n is the first parameter.\n\u003c/p\u003e\u003cp\u003eFor example, the relation \u003ccode\u003e{(x, y) -\u003e (y, x) | x \u003e 0 && y \u003e 0}\u003c/code\u003e is\n\u003c/p\u003e\u003cpre\u003e let [x, y] = takeFreeVariables' 2\n in functionalRel 2 [y, x] (conjE [y |\u003e| intE 0, x |\u003e| intE 0])\n\u003c/pre\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "functionalRel",
          "package": "Omega",
          "signature": "Int-\u003e [IntExp]-\u003e BoolExp-\u003e Rel",
          "type": "function"
        },
        "index": {
          "description": "Create relation where each output is function of the inputs Each expression should have free variables where is the first parameter For example the relation is let takeFreeVariables in functionalRel conjE intE intE",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "functionalRel",
          "normalized": "Int-\u003e[IntExp]-\u003eBoolExp-\u003eRel",
          "package": "Omega",
          "partial": "Rel",
          "signature": "Int-\u003e[IntExp]-\u003eBoolExp-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:functionalRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the gist of a relation, given some background truth.  The\n gist operator uses heuristics to simplify the relation while\n retaining sufficient information to regenerate the original by\n re-introducing the background truth.  The relations must have the\n same input dimensions and the same output dimensions.\n\u003c/p\u003e\u003cp\u003eThe gist satisfies the property\n\u003c/p\u003e\u003cpre\u003e x === gist effort x given `intersection` given\n\u003c/pre\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "gist",
          "package": "Omega",
          "signature": "Effort -\u003e Rel -\u003e Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#gist",
          "type": "function"
        },
        "index": {
          "description": "Get the gist of relation given some background truth The gist operator uses heuristics to simplify the relation while retaining sufficient information to regenerate the original by re-introducing the background truth The relations must have the same input dimensions and the same output dimensions The gist satisfies the property gist effort given intersection given",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "gist",
          "normalized": "Effort-\u003eRel-\u003eRel-\u003eRel",
          "package": "Omega",
          "signature": "Effort-\u003eRel-\u003eRel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:gist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the relation has UNKNOWN constraints.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "inexact",
          "package": "Omega",
          "signature": "Rel -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Rel.html#inexact",
          "type": "function"
        },
        "index": {
          "description": "True if the relation has UNKNOWN constraints",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "inexact",
          "normalized": "Rel-\u003eBool",
          "package": "Omega",
          "signature": "Rel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:inexact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the dimensionality of a relation's domain\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "inputDimension",
          "package": "Omega",
          "signature": "Rel -\u003e Int",
          "source": "src/Data-Presburger-Omega-Rel.html#inputDimension",
          "type": "function"
        },
        "index": {
          "description": "Get the dimensionality of relation domain",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "inputDimension",
          "normalized": "Rel-\u003eInt",
          "package": "Omega",
          "partial": "Dimension",
          "signature": "Rel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:inputDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection of two relations.\n The relations must have the same dimension\n (\u003ccode\u003einputDimension r1 == inputDimension r2 && outputDimension r1 == outputDimension r2\u003c/code\u003e),\n or an error will be raised.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "intersection",
          "package": "Omega",
          "signature": "Rel -\u003e Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Intersection of two relations The relations must have the same dimension inputDimension r1 inputDimension r2 outputDimension r1 outputDimension r2 or an error will be raised",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "intersection",
          "normalized": "Rel-\u003eRel-\u003eRel",
          "package": "Omega",
          "signature": "Rel-\u003eRel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert a relation, swapping the domain and range.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "inverse",
          "package": "Omega",
          "signature": "Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "Invert relation swapping the domain and range",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "inverse",
          "normalized": "Rel-\u003eRel",
          "package": "Omega",
          "signature": "Rel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ecomposition\u003c/a\u003e\u003c/code\u003e, with the arguments swapped.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "join",
          "package": "Omega",
          "signature": "Rel -\u003e Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#join",
          "type": "function"
        },
        "index": {
          "description": "Same as composition with the arguments swapped",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "join",
          "normalized": "Rel-\u003eRel-\u003eRel",
          "package": "Omega",
          "signature": "Rel-\u003eRel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Rel",
          "name": "lowerBound",
          "package": "Omega",
          "signature": "Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#lowerBound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "lowerBound",
          "normalized": "Rel-\u003eRel",
          "package": "Omega",
          "partial": "Bound",
          "signature": "Rel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:lowerBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Rel",
          "name": "lowerBoundSatisfiable",
          "package": "Omega",
          "signature": "Rel -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Rel.html#lowerBoundSatisfiable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "lowerBoundSatisfiable",
          "normalized": "Rel-\u003eBool",
          "package": "Omega",
          "partial": "Bound Satisfiable",
          "signature": "Rel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:lowerBoundSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Rel",
          "name": "obviousTautology",
          "package": "Omega",
          "signature": "Rel -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Rel.html#obviousTautology",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "obviousTautology",
          "normalized": "Rel-\u003eBool",
          "package": "Omega",
          "partial": "Tautology",
          "signature": "Rel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:obviousTautology"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the dimensionality of a relation's range\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "outputDimension",
          "package": "Omega",
          "signature": "Rel -\u003e Int",
          "source": "src/Data-Presburger-Omega-Rel.html#outputDimension",
          "type": "function"
        },
        "index": {
          "description": "Get the dimensionality of relation range",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "outputDimension",
          "normalized": "Rel-\u003eInt",
          "package": "Omega",
          "partial": "Dimension",
          "signature": "Rel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:outputDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the predicate defining a relation.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "predicate",
          "package": "Omega",
          "signature": "Rel -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Rel.html#predicate",
          "type": "function"
        },
        "index": {
          "description": "Get the predicate defining relation",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "predicate",
          "normalized": "Rel-\u003eBoolExp",
          "package": "Omega",
          "signature": "Rel-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Rel",
          "name": "range",
          "package": "Omega",
          "signature": "Rel -\u003e Set",
          "source": "src/Data-Presburger-Omega-Rel.html#range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "range",
          "normalized": "Rel-\u003eSet",
          "package": "Omega",
          "signature": "Rel-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a relation whose members are defined by a predicate.\n\u003c/p\u003e\u003cp\u003eThe expression should have \u003ccode\u003em+n\u003c/code\u003e free variables, where \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e are\n the first two parameters.  The first \u003ccode\u003em\u003c/code\u003e\n variables refer to the domain, and the remaining variables refer to\n the range.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "rel",
          "package": "Omega",
          "signature": "Int-\u003e Int-\u003e BoolExp-\u003e Rel",
          "type": "function"
        },
        "index": {
          "description": "Create relation whose members are defined by predicate The expression should have free variables where and are the first two parameters The first variables refer to the domain and the remaining variables refer to the range",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "rel",
          "normalized": "Int-\u003eInt-\u003eBoolExp-\u003eRel",
          "package": "Omega",
          "signature": "Int-\u003eInt-\u003eBoolExp-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict the domain of a relation.\n\u003c/p\u003e\u003cpre\u003e domain (restrictDomain r s) === intersection (domain r) s\n\u003c/pre\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "restrictDomain",
          "package": "Omega",
          "signature": "Rel -\u003e Set -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#restrictDomain",
          "type": "function"
        },
        "index": {
          "description": "Restrict the domain of relation domain restrictDomain intersection domain",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "restrictDomain",
          "normalized": "Rel-\u003eSet-\u003eRel",
          "package": "Omega",
          "partial": "Domain",
          "signature": "Rel-\u003eSet-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:restrictDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict the range of a relation.\n\u003c/p\u003e\u003cpre\u003e range (restrictRange r s) === intersection (range r) s\n\u003c/pre\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "restrictRange",
          "package": "Omega",
          "signature": "Rel -\u003e Set -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#restrictRange",
          "type": "function"
        },
        "index": {
          "description": "Restrict the range of relation range restrictRange intersection range",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "restrictRange",
          "normalized": "Rel-\u003eSet-\u003eRel",
          "package": "Omega",
          "partial": "Range",
          "signature": "Rel-\u003eSet-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:restrictRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eRel\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eOmegaRel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "toOmegaRel",
          "package": "Omega",
          "signature": "Rel -\u003e OmegaRel",
          "source": "src/Data-Presburger-Omega-Rel.html#toOmegaRel",
          "type": "function"
        },
        "index": {
          "description": "Convert Rel to an OmegaRel",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "toOmegaRel",
          "normalized": "Rel-\u003eOmegaRel",
          "package": "Omega",
          "partial": "Omega Rel",
          "signature": "Rel-\u003eOmegaRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:toOmegaRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the transitive closure of a relation.  In some cases, the transitive\n closure cannot be computed exactly, in which case a lower bound is\n returned.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "transitiveClosure",
          "package": "Omega",
          "signature": "Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#transitiveClosure",
          "type": "function"
        },
        "index": {
          "description": "Get the transitive closure of relation In some cases the transitive closure cannot be computed exactly in which case lower bound is returned",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "transitiveClosure",
          "normalized": "Rel-\u003eRel",
          "package": "Omega",
          "partial": "Closure",
          "signature": "Rel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:transitiveClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of two relations.\n The relations must have the same dimension\n (\u003ccode\u003einputDimension r1 == inputDimension r2 && outputDimension r1 == outputDimension r2\u003c/code\u003e),\n or an error will be raised.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "union",
          "package": "Omega",
          "signature": "Rel -\u003e Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#union",
          "type": "function"
        },
        "index": {
          "description": "Union of two relations The relations must have the same dimension inputDimension r1 inputDimension r2 outputDimension r1 outputDimension r2 or an error will be raised",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "union",
          "normalized": "Rel-\u003eRel-\u003eRel",
          "package": "Omega",
          "signature": "Rel-\u003eRel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the relation is entirely UNKNOWN.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Rel",
          "name": "unknown",
          "package": "Omega",
          "signature": "Rel -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Rel.html#unknown",
          "type": "function"
        },
        "index": {
          "description": "True if the relation is entirely UNKNOWN",
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "unknown",
          "normalized": "Rel-\u003eBool",
          "package": "Omega",
          "signature": "Rel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Rel",
          "name": "upperBound",
          "package": "Omega",
          "signature": "Rel -\u003e Rel",
          "source": "src/Data-Presburger-Omega-Rel.html#upperBound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "upperBound",
          "normalized": "Rel-\u003eRel",
          "package": "Omega",
          "partial": "Bound",
          "signature": "Rel-\u003eRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:upperBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Rel",
          "name": "upperBoundSatisfiable",
          "package": "Omega",
          "signature": "Rel -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Rel.html#upperBoundSatisfiable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Rel",
          "module": "Data.Presburger.Omega.Rel",
          "name": "upperBoundSatisfiable",
          "normalized": "Rel-\u003eBool",
          "package": "Omega",
          "partial": "Bound Satisfiable",
          "signature": "Rel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Rel.html#v:upperBoundSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSets whose members are represented compactly using a\n Presburger arithmetic formula.  This is a high-level interface to\n \u003ccode\u003e\u003ca\u003eOmegaSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Presburger.Omega.Set as WSet\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "Set",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Set.html",
          "type": "module"
        },
        "index": {
          "description": "Sets whose members are represented compactly using Presburger arithmetic formula This is high-level interface to OmegaSet This module is intended to be imported qualified e.g import qualified Data.Presburger.Omega.Set as WSet",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "Set",
          "package": "Omega",
          "partial": "Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egist\u003c/a\u003e\u003c/code\u003e routine takes a parameter specifying how much effort to\n put into generating a good result.  Higher effort takes more time.\n It's unspecified what a given effort level does.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "Effort",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-LowLevel.html#Effort",
          "type": "data"
        },
        "index": {
          "description": "The gist routine takes parameter specifying how much effort to put into generating good result Higher effort takes more time It unspecified what given effort level does",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "Effort",
          "package": "Omega",
          "partial": "Effort",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#t:Effort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets of points in Z^n defined by a formula.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "Set",
          "package": "Omega",
          "source": "src/Data-Presburger-Omega-Set.html#Set",
          "type": "data"
        },
        "index": {
          "description": "Sets of points in defined by formula",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "Set",
          "package": "Omega",
          "partial": "Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#t:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Set",
          "name": "approximate",
          "package": "Omega",
          "signature": "Set -\u003e Set",
          "source": "src/Data-Presburger-Omega-Set.html#approximate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "approximate",
          "normalized": "Set-\u003eSet",
          "package": "Omega",
          "signature": "Set-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:approximate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Set",
          "name": "complement",
          "package": "Omega",
          "signature": "Set -\u003e Set",
          "source": "src/Data-Presburger-Omega-Set.html#complement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "complement",
          "normalized": "Set-\u003eSet",
          "package": "Omega",
          "signature": "Set-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Set",
          "name": "definiteTautology",
          "package": "Omega",
          "signature": "Set -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Set.html#definiteTautology",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "definiteTautology",
          "normalized": "Set-\u003eBool",
          "package": "Omega",
          "partial": "Tautology",
          "signature": "Set-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:definiteTautology"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference of two sets.\n The sets must have the same dimension\n (\u003ccode\u003edimension s1 == dimension s2\u003c/code\u003e), or an error will be raised.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "difference",
          "package": "Omega",
          "signature": "Set -\u003e Set -\u003e Set",
          "source": "src/Data-Presburger-Omega-Set.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference of two sets The sets must have the same dimension dimension s1 dimension s2 or an error will be raised",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "difference",
          "normalized": "Set-\u003eSet-\u003eSet",
          "package": "Omega",
          "signature": "Set-\u003eSet-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the dimensionality of the space a set inhabits\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "dimension",
          "package": "Omega",
          "signature": "Set -\u003e Int",
          "source": "src/Data-Presburger-Omega-Set.html#dimension",
          "type": "function"
        },
        "index": {
          "description": "Get the dimensionality of the space set inhabits",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "dimension",
          "normalized": "Set-\u003eInt",
          "package": "Omega",
          "signature": "Set-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:dimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether two sets are equal.\n The sets must have the same dimension\n (\u003ccode\u003edimension s1 == dimension s2\u003c/code\u003e), or an error will be raised.\n\u003c/p\u003e\u003cp\u003eThe answer is precise if both relations are \u003ccode\u003e\u003ca\u003eexact\u003c/a\u003e\u003c/code\u003e.\n If either relation is inexact, this function returns \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "equal",
          "package": "Omega",
          "signature": "Set -\u003e Set -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Set.html#equal",
          "type": "function"
        },
        "index": {
          "description": "Test whether two sets are equal The sets must have the same dimension dimension s1 dimension s2 or an error will be raised The answer is precise if both relations are exact If either relation is inexact this function returns False",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "equal",
          "normalized": "Set-\u003eSet-\u003eBool",
          "package": "Omega",
          "signature": "Set-\u003eSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the set has no UNKNOWN constraints.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "exact",
          "package": "Omega",
          "signature": "Set -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Set.html#exact",
          "type": "function"
        },
        "index": {
          "description": "True if the set has no UNKNOWN constraints",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "exact",
          "normalized": "Set-\u003eBool",
          "package": "Omega",
          "signature": "Set-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOmegaSet\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "fromOmegaSet",
          "package": "Omega",
          "signature": "OmegaSet -\u003e IO Set",
          "source": "src/Data-Presburger-Omega-Set.html#fromOmegaSet",
          "type": "function"
        },
        "index": {
          "description": "Convert an OmegaSet to Set",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "fromOmegaSet",
          "normalized": "OmegaSet-\u003eIO Set",
          "package": "Omega",
          "partial": "Omega Set",
          "signature": "OmegaSet-\u003eIO Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:fromOmegaSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the gist of a set, given some background truth.  The\n gist operator uses heuristics to simplify the set while\n retaining sufficient information to regenerate the original by\n re-introducing the background truth.  The sets must have the\n same dimension.\n\u003c/p\u003e\u003cp\u003eThe gist satisfies the property\n\u003c/p\u003e\u003cpre\u003e x === gist effort x given `intersection` given\n\u003c/pre\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "gist",
          "package": "Omega",
          "signature": "Effort -\u003e Set -\u003e Set -\u003e Set",
          "source": "src/Data-Presburger-Omega-Set.html#gist",
          "type": "function"
        },
        "index": {
          "description": "Get the gist of set given some background truth The gist operator uses heuristics to simplify the set while retaining sufficient information to regenerate the original by re-introducing the background truth The sets must have the same dimension The gist satisfies the property gist effort given intersection given",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "gist",
          "normalized": "Effort-\u003eSet-\u003eSet-\u003eSet",
          "package": "Omega",
          "signature": "Effort-\u003eSet-\u003eSet-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:gist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the set has UNKNOWN constraints.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "inexact",
          "package": "Omega",
          "signature": "Set -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Set.html#inexact",
          "type": "function"
        },
        "index": {
          "description": "True if the set has UNKNOWN constraints",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "inexact",
          "normalized": "Set-\u003eBool",
          "package": "Omega",
          "signature": "Set-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:inexact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection of two sets.\n The sets must have the same dimension\n (\u003ccode\u003edimension s1 == dimension s2\u003c/code\u003e), or an error will be raised.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "intersection",
          "package": "Omega",
          "signature": "Set -\u003e Set -\u003e Set",
          "source": "src/Data-Presburger-Omega-Set.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Intersection of two sets The sets must have the same dimension dimension s1 dimension s2 or an error will be raised",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "intersection",
          "normalized": "Set-\u003eSet-\u003eSet",
          "package": "Omega",
          "signature": "Set-\u003eSet-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the lower bound of a set by setting all UNKNOWN\n   constraints to false.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "lowerBound",
          "package": "Omega",
          "signature": "Set -\u003e Set",
          "source": "src/Data-Presburger-Omega-Set.html#lowerBound",
          "type": "function"
        },
        "index": {
          "description": "Compute the lower bound of set by setting all UNKNOWN constraints to false",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "lowerBound",
          "normalized": "Set-\u003eSet",
          "package": "Omega",
          "partial": "Bound",
          "signature": "Set-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:lowerBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Set",
          "name": "lowerBoundSatisfiable",
          "package": "Omega",
          "signature": "Set -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Set.html#lowerBoundSatisfiable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "lowerBoundSatisfiable",
          "normalized": "Set-\u003eBool",
          "package": "Omega",
          "partial": "Bound Satisfiable",
          "signature": "Set-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:lowerBoundSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Set",
          "name": "obviousTautology",
          "package": "Omega",
          "signature": "Set -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Set.html#obviousTautology",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "obviousTautology",
          "normalized": "Set-\u003eBool",
          "package": "Omega",
          "partial": "Tautology",
          "signature": "Set-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:obviousTautology"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the predicate defining a set's members\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "predicate",
          "package": "Omega",
          "signature": "Set -\u003e BoolExp",
          "source": "src/Data-Presburger-Omega-Set.html#predicate",
          "type": "function"
        },
        "index": {
          "description": "Get the predicate defining set members",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "predicate",
          "normalized": "Set-\u003eBoolExp",
          "package": "Omega",
          "signature": "Set-\u003eBoolExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a set whose members are defined by a predicate.\n\u003c/p\u003e\u003cp\u003eThe expression should have one free variable for each dimension.\n\u003c/p\u003e\u003cp\u003eFor example, the set of all points on the plane is\n\u003c/p\u003e\u003cpre\u003e  set 2 trueE\n\u003c/pre\u003e\u003cp\u003eThe set of all points (x, y, z) where x \u003e y + z is\n\u003c/p\u003e\u003cpre\u003e  set 3 (case takeFreeVariables' 3 of [x,y,z] -\u003e x |\u003e| y |+| z)\n\u003c/pre\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "set",
          "package": "Omega",
          "signature": "Int-\u003e BoolExp-\u003e Set",
          "type": "function"
        },
        "index": {
          "description": "Create set whose members are defined by predicate The expression should have one free variable for each dimension For example the set of all points on the plane is set trueE The set of all points where is set case takeFreeVariables of",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "set",
          "normalized": "Int-\u003eBoolExp-\u003eSet",
          "package": "Omega",
          "signature": "Int-\u003eBoolExp-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eOmegaSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "toOmegaSet",
          "package": "Omega",
          "signature": "Set -\u003e OmegaSet",
          "source": "src/Data-Presburger-Omega-Set.html#toOmegaSet",
          "type": "function"
        },
        "index": {
          "description": "Convert Set to an OmegaSet",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "toOmegaSet",
          "normalized": "Set-\u003eOmegaSet",
          "package": "Omega",
          "partial": "Omega Set",
          "signature": "Set-\u003eOmegaSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:toOmegaSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of two sets.\n The sets must have the same dimension\n (\u003ccode\u003edimension s1 == dimension s2\u003c/code\u003e), or an error will be raised.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "union",
          "package": "Omega",
          "signature": "Set -\u003e Set -\u003e Set",
          "source": "src/Data-Presburger-Omega-Set.html#union",
          "type": "function"
        },
        "index": {
          "description": "Union of two sets The sets must have the same dimension dimension s1 dimension s2 or an error will be raised",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "union",
          "normalized": "Set-\u003eSet-\u003eSet",
          "package": "Omega",
          "signature": "Set-\u003eSet-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the set is completely UNKNOWN.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "unknown",
          "package": "Omega",
          "signature": "Set -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Set.html#unknown",
          "type": "function"
        },
        "index": {
          "description": "True if the set is completely UNKNOWN",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "unknown",
          "normalized": "Set-\u003eBool",
          "package": "Omega",
          "signature": "Set-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the upper bound of a set by setting all UNKNOWN\n   constraints to true.\n\u003c/p\u003e",
          "module": "Data.Presburger.Omega.Set",
          "name": "upperBound",
          "package": "Omega",
          "signature": "Set -\u003e Set",
          "source": "src/Data-Presburger-Omega-Set.html#upperBound",
          "type": "function"
        },
        "index": {
          "description": "Compute the upper bound of set by setting all UNKNOWN constraints to true",
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "upperBound",
          "normalized": "Set-\u003eSet",
          "package": "Omega",
          "partial": "Bound",
          "signature": "Set-\u003eSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:upperBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Presburger.Omega.Set",
          "name": "upperBoundSatisfiable",
          "package": "Omega",
          "signature": "Set -\u003e Bool",
          "source": "src/Data-Presburger-Omega-Set.html#upperBoundSatisfiable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Presburger Omega Set",
          "module": "Data.Presburger.Omega.Set",
          "name": "upperBoundSatisfiable",
          "normalized": "Set-\u003eBool",
          "package": "Omega",
          "partial": "Bound Satisfiable",
          "signature": "Set-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Omega/docs/Data-Presburger-Omega-Set.html#v:upperBoundSatisfiable"
      }
    }
  ]
]