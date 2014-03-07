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
        "word": "ddc-core-eval"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCheck for conflicting store capabilities in the initial program.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Eval.Check",
          "name": "Check",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Check.html",
          "type": "module"
        },
        "index": {
          "description": "Check for conflicting store capabilities in the initial program",
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "Check",
          "package": "ddc-core-eval",
          "partial": "Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThings that can go wrong with the capabilities in a program.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Check",
          "name": "Error",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Check.html#Error",
          "type": "data"
        },
        "index": {
          "description": "Things that can go wrong with the capabilities in program",
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "Error",
          "package": "ddc-core-eval",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConflicting capabilities in program.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Check",
          "name": "ErrorConflict",
          "package": "ddc-core-eval",
          "signature": "ErrorConflict",
          "source": "src/DDC-Core-Eval-Check.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Conflicting capabilities in program",
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "ErrorConflict",
          "package": "ddc-core-eval",
          "partial": "Error Conflict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:ErrorConflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA capability constructor applied to a non-region handle.\n   As with \u003ccode\u003e\u003ca\u003eErrorPartial\u003c/a\u003e\u003c/code\u003e we only need to check for this because we're\n   using general witness application to represent capabilities, instead\n   of having an atomic form. \n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Check",
          "name": "ErrorNonHandle",
          "package": "ddc-core-eval",
          "signature": "ErrorNonHandle",
          "source": "src/DDC-Core-Eval-Check.html#Error",
          "type": "function"
        },
        "index": {
          "description": "capability constructor applied to non-region handle As with ErrorPartial we only need to check for this because we re using general witness application to represent capabilities instead of having an atomic form",
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "ErrorNonHandle",
          "package": "ddc-core-eval",
          "partial": "Error Non Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:ErrorNonHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA partially applied capability constructor.\n   In the formal semantics, capabilities are atomic, so this isn't\n   a problem. However, as we're representing them with general witness\n   appliction we need to ensure the constructors aren't partially \n   applied.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Check",
          "name": "ErrorPartial",
          "package": "ddc-core-eval",
          "signature": "ErrorPartial",
          "source": "src/DDC-Core-Eval-Check.html#Error",
          "type": "function"
        },
        "index": {
          "description": "partially applied capability constructor In the formal semantics capabilities are atomic so this isn problem However as we re representing them with general witness appliction we need to ensure the constructors aren partially applied",
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "ErrorPartial",
          "package": "ddc-core-eval",
          "partial": "Error Partial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:ErrorPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for conflicting store capabilities in a module.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Check",
          "name": "checkCapsModule",
          "package": "ddc-core-eval",
          "signature": "Module a Name -\u003e Maybe (Error a)",
          "source": "src/DDC-Core-Eval-Check.html#checkCapsModule",
          "type": "function"
        },
        "index": {
          "description": "Check for conflicting store capabilities in module",
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "checkCapsModule",
          "normalized": "Module a Name-\u003eMaybe(Error a)",
          "package": "ddc-core-eval",
          "partial": "Caps Module",
          "signature": "Module a Name-\u003eMaybe(Error a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:checkCapsModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for conflicting store capabilities in an expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Check",
          "name": "checkCapsX",
          "package": "ddc-core-eval",
          "signature": "Exp a Name -\u003e Maybe (Error a)",
          "source": "src/DDC-Core-Eval-Check.html#checkCapsX",
          "type": "function"
        },
        "index": {
          "description": "Check for conflicting store capabilities in an expression",
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "checkCapsX",
          "normalized": "Exp a Name-\u003eMaybe(Error a)",
          "package": "ddc-core-eval",
          "partial": "Caps",
          "signature": "Exp a Name-\u003eMaybe(Error a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:checkCapsX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Check",
          "name": "errorCap1",
          "package": "ddc-core-eval",
          "signature": "Cap",
          "source": "src/DDC-Core-Eval-Check.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "errorCap1",
          "package": "ddc-core-eval",
          "partial": "Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:errorCap1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Check",
          "name": "errorCap2",
          "package": "ddc-core-eval",
          "signature": "Cap",
          "source": "src/DDC-Core-Eval-Check.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "errorCap2",
          "package": "ddc-core-eval",
          "partial": "Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:errorCap2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Check",
          "name": "errorRegions",
          "package": "ddc-core-eval",
          "signature": "Rgn",
          "source": "src/DDC-Core-Eval-Check.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "errorRegions",
          "package": "ddc-core-eval",
          "partial": "Regions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:errorRegions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Check",
          "name": "errorWitness",
          "package": "ddc-core-eval",
          "signature": "Witness () Name",
          "source": "src/DDC-Core-Eval-Check.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Check",
          "module": "DDC.Core.Eval.Check",
          "name": "errorWitness",
          "normalized": "Witness()Name",
          "package": "ddc-core-eval",
          "partial": "Witness",
          "signature": "Witness()Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:errorWitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for constructing and destructing compound types and\n   expressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "Compounds",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Compounds.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for constructing and destructing compound types and expressions",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "Compounds",
          "package": "ddc-core-eval",
          "partial": "Compounds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an integer data constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "dcInt",
          "package": "ddc-core-eval",
          "signature": "Integer -\u003e DaCon Name",
          "source": "src/DDC-Core-Eval-Compounds.html#dcInt",
          "type": "function"
        },
        "index": {
          "description": "Make an integer data constructor",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "dcInt",
          "normalized": "Integer-\u003eDaCon Name",
          "package": "ddc-core-eval",
          "partial": "Int",
          "signature": "Integer-\u003eDaCon Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:dcInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a witness is a capability constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "isCapConW",
          "package": "ddc-core-eval",
          "signature": "Witness a Name -\u003e Bool",
          "source": "src/DDC-Core-Eval-Compounds.html#isCapConW",
          "type": "function"
        },
        "index": {
          "description": "Check whether witness is capability constructor",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "isCapConW",
          "normalized": "Witness a Name-\u003eBool",
          "package": "ddc-core-eval",
          "partial": "Cap Con",
          "signature": "Witness a Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:isCapConW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an expression is the unit constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "isUnitX",
          "package": "ddc-core-eval",
          "signature": "Exp a Name -\u003e Bool",
          "source": "src/DDC-Core-Eval-Compounds.html#isUnitX",
          "type": "function"
        },
        "index": {
          "description": "Check whether an expression is the unit constructor",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "isUnitX",
          "normalized": "Exp a Name-\u003eBool",
          "package": "ddc-core-eval",
          "partial": "Unit",
          "signature": "Exp a Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:isUnitX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a store location from an expression, reaching under any \u003ccode\u003eforget\u003c/code\u003e casts.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "stripLocX",
          "package": "ddc-core-eval",
          "signature": "Exp a Name -\u003e Maybe Loc",
          "source": "src/DDC-Core-Eval-Compounds.html#stripLocX",
          "type": "function"
        },
        "index": {
          "description": "Take store location from an expression reaching under any forget casts",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "stripLocX",
          "normalized": "Exp a Name-\u003eMaybe Loc",
          "package": "ddc-core-eval",
          "partial": "Loc",
          "signature": "Exp a Name-\u003eMaybe Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:stripLocX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of the Int type constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "tInt",
          "package": "ddc-core-eval",
          "signature": "Region Name -\u003e Type Name",
          "source": "src/DDC-Core-Eval-Compounds.html#tInt",
          "type": "function"
        },
        "index": {
          "description": "Application of the Int type constructor",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "tInt",
          "normalized": "Region Name-\u003eType Name",
          "package": "ddc-core-eval",
          "partial": "Int",
          "signature": "Region Name-\u003eType Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:tInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of the List type constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "tList",
          "package": "ddc-core-eval",
          "signature": "Region Name -\u003e Type Name -\u003e Type Name",
          "source": "src/DDC-Core-Eval-Compounds.html#tList",
          "type": "function"
        },
        "index": {
          "description": "Application of the List type constructor",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "tList",
          "normalized": "Region Name-\u003eType Name-\u003eType Name",
          "package": "ddc-core-eval",
          "partial": "List",
          "signature": "Region Name-\u003eType Name-\u003eType Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:tList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of the Pair type constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "tPair",
          "package": "ddc-core-eval",
          "signature": "Region Name -\u003e Type Name -\u003e Type Name -\u003e Type Name",
          "source": "src/DDC-Core-Eval-Compounds.html#tPair",
          "type": "function"
        },
        "index": {
          "description": "Application of the Pair type constructor",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "tPair",
          "normalized": "Region Name-\u003eType Name-\u003eType Name-\u003eType Name",
          "package": "ddc-core-eval",
          "partial": "Pair",
          "signature": "Region Name-\u003eType Name-\u003eType Name-\u003eType Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:tPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a region handle from a type.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeHandleT",
          "package": "ddc-core-eval",
          "signature": "Type Name -\u003e Maybe Rgn",
          "source": "src/DDC-Core-Eval-Compounds.html#takeHandleT",
          "type": "function"
        },
        "index": {
          "description": "Take region handle from type",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeHandleT",
          "normalized": "Type Name-\u003eMaybe Rgn",
          "package": "ddc-core-eval",
          "partial": "Handle",
          "signature": "Type Name-\u003eMaybe Rgn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeHandleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a region handle from an expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeHandleX",
          "package": "ddc-core-eval",
          "signature": "Exp a Name -\u003e Maybe Rgn",
          "source": "src/DDC-Core-Eval-Compounds.html#takeHandleX",
          "type": "function"
        },
        "index": {
          "description": "Take region handle from an expression",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeHandleX",
          "normalized": "Exp a Name-\u003eMaybe Rgn",
          "package": "ddc-core-eval",
          "partial": "Handle",
          "signature": "Exp a Name-\u003eMaybe Rgn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeHandleX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake an integer literal from an data constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeIntDC",
          "package": "ddc-core-eval",
          "signature": "DaCon Name -\u003e Maybe Integer",
          "source": "src/DDC-Core-Eval-Compounds.html#takeIntDC",
          "type": "function"
        },
        "index": {
          "description": "Take an integer literal from an data constructor",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeIntDC",
          "normalized": "DaCon Name-\u003eMaybe Integer",
          "package": "ddc-core-eval",
          "partial": "Int DC",
          "signature": "DaCon Name-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeIntDC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake an integer literal from an expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeIntX",
          "package": "ddc-core-eval",
          "signature": "Exp a Name -\u003e Maybe Integer",
          "source": "src/DDC-Core-Eval-Compounds.html#takeIntX",
          "type": "function"
        },
        "index": {
          "description": "Take an integer literal from an expression",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeIntX",
          "normalized": "Exp a Name-\u003eMaybe Integer",
          "package": "ddc-core-eval",
          "partial": "Int",
          "signature": "Exp a Name-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeIntX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a store location from an expression.\n   We strip off \u003ccode\u003eforget\u003c/code\u003e casts along the way\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeLocX",
          "package": "ddc-core-eval",
          "signature": "Exp a Name -\u003e Maybe Loc",
          "source": "src/DDC-Core-Eval-Compounds.html#takeLocX",
          "type": "function"
        },
        "index": {
          "description": "Take store location from an expression We strip off forget casts along the way",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeLocX",
          "normalized": "Exp a Name-\u003eMaybe Loc",
          "package": "ddc-core-eval",
          "partial": "Loc",
          "signature": "Exp a Name-\u003eMaybe Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeLocX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a witness of mutability from an expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeMutableX",
          "package": "ddc-core-eval",
          "signature": "Exp a Name -\u003e Maybe Rgn",
          "source": "src/DDC-Core-Eval-Compounds.html#takeMutableX",
          "type": "function"
        },
        "index": {
          "description": "Take witness of mutability from an expression",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "takeMutableX",
          "normalized": "Exp a Name-\u003eMaybe Rgn",
          "package": "ddc-core-eval",
          "partial": "Mutable",
          "signature": "Exp a Name-\u003eMaybe Rgn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeMutableX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe integer type constructor\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "tcInt",
          "package": "ddc-core-eval",
          "signature": "TyCon Name",
          "source": "src/DDC-Core-Eval-Compounds.html#tcInt",
          "type": "function"
        },
        "index": {
          "description": "The integer type constructor",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "tcInt",
          "package": "ddc-core-eval",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:tcInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wConst",
          "package": "ddc-core-eval",
          "signature": "a -\u003e Region Name -\u003e Witness a Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wConst",
          "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
          "package": "ddc-core-eval",
          "partial": "Const",
          "signature": "a-\u003eRegion Name-\u003eWitness a Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wDistinct",
          "package": "ddc-core-eval",
          "signature": "a -\u003e Int -\u003e [Region Name] -\u003e Witness a Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wDistinct",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wDistinct",
          "normalized": "a-\u003eInt-\u003e[Region Name]-\u003eWitness a Name",
          "package": "ddc-core-eval",
          "partial": "Distinct",
          "signature": "a-\u003eInt-\u003e[Region Name]-\u003eWitness a Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wDistinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wGlobal",
          "package": "ddc-core-eval",
          "signature": "a -\u003e Region Name -\u003e Witness a Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wGlobal",
          "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
          "package": "ddc-core-eval",
          "partial": "Global",
          "signature": "a-\u003eRegion Name-\u003eWitness a Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wLazy",
          "package": "ddc-core-eval",
          "signature": "a -\u003e Region Name -\u003e Witness a Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wLazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wLazy",
          "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
          "package": "ddc-core-eval",
          "partial": "Lazy",
          "signature": "a-\u003eRegion Name-\u003eWitness a Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wManifest",
          "package": "ddc-core-eval",
          "signature": "a -\u003e Region Name -\u003e Witness a Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wManifest",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wManifest",
          "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
          "package": "ddc-core-eval",
          "partial": "Manifest",
          "signature": "a-\u003eRegion Name-\u003eWitness a Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wManifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wMutable",
          "package": "ddc-core-eval",
          "signature": "a -\u003e Region Name -\u003e Witness a Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wMutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wMutable",
          "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
          "package": "ddc-core-eval",
          "partial": "Mutable",
          "signature": "a-\u003eRegion Name-\u003eWitness a Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcConst",
          "package": "ddc-core-eval",
          "signature": "WiCon Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wcConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcConst",
          "package": "ddc-core-eval",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcDistinct",
          "package": "ddc-core-eval",
          "signature": "Int -\u003e WiCon Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wcDistinct",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcDistinct",
          "normalized": "Int-\u003eWiCon Name",
          "package": "ddc-core-eval",
          "partial": "Distinct",
          "signature": "Int-\u003eWiCon Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcDistinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcGlobal",
          "package": "ddc-core-eval",
          "signature": "WiCon Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wcGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcGlobal",
          "package": "ddc-core-eval",
          "partial": "Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcLazy",
          "package": "ddc-core-eval",
          "signature": "WiCon Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wcLazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcLazy",
          "package": "ddc-core-eval",
          "partial": "Lazy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcManifest",
          "package": "ddc-core-eval",
          "signature": "WiCon Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wcManifest",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcManifest",
          "package": "ddc-core-eval",
          "partial": "Manifest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcManifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcMutable",
          "package": "ddc-core-eval",
          "signature": "WiCon Name",
          "source": "src/DDC-Core-Eval-Compounds.html#wcMutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "wcMutable",
          "package": "ddc-core-eval",
          "partial": "Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a location expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Compounds",
          "name": "xLoc",
          "package": "ddc-core-eval",
          "signature": "Loc -\u003e Type Name -\u003e Exp () Name",
          "source": "src/DDC-Core-Eval-Compounds.html#xLoc",
          "type": "function"
        },
        "index": {
          "description": "Make location expression",
          "hierarchy": "DDC Core Eval Compounds",
          "module": "DDC.Core.Eval.Compounds",
          "name": "xLoc",
          "normalized": "Loc-\u003eType Name-\u003eExp()Name",
          "package": "ddc-core-eval",
          "partial": "Loc",
          "signature": "Loc-\u003eType Name-\u003eExp()Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:xLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive types and operators for the core language evaluator.\n\u003c/p\u003e\u003cp\u003eThese are only a subset of the primitives supported by the real compiler, there's just\n   enough to experiment with the core language. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Eval.Env",
          "name": "Env",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Env.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive types and operators for the core language evaluator These are only subset of the primitives supported by the real compiler there just enough to experiment with the core language",
          "hierarchy": "DDC Core Eval Env",
          "module": "DDC.Core.Eval.Env",
          "name": "Env",
          "package": "ddc-core-eval",
          "partial": "Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the arity of a primitive name.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Env",
          "name": "arityOfName",
          "package": "ddc-core-eval",
          "signature": "Name -\u003e Maybe Int",
          "source": "src/DDC-Core-Eval-Env.html#arityOfName",
          "type": "function"
        },
        "index": {
          "description": "Take the arity of primitive name",
          "hierarchy": "DDC Core Eval Env",
          "module": "DDC.Core.Eval.Env",
          "name": "arityOfName",
          "normalized": "Name-\u003eMaybe Int",
          "package": "ddc-core-eval",
          "partial": "Of Name",
          "signature": "Name-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:arityOfName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the kind of a primitive name.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the name isn't primitive. \n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Env",
          "name": "kindOfPrimName",
          "package": "ddc-core-eval",
          "signature": "Name -\u003e Maybe (Kind Name)",
          "source": "src/DDC-Core-Eval-Env.html#kindOfPrimName",
          "type": "function"
        },
        "index": {
          "description": "Take the kind of primitive name Returns Nothing if the name isn primitive",
          "hierarchy": "DDC Core Eval Env",
          "module": "DDC.Core.Eval.Env",
          "name": "kindOfPrimName",
          "normalized": "Name-\u003eMaybe(Kind Name)",
          "package": "ddc-core-eval",
          "partial": "Of Prim Name",
          "signature": "Name-\u003eMaybe(Kind Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:kindOfPrimName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type definitions for:\n\u003c/p\u003e\u003cpre\u003e  Type   Constructors\n  ----   ------------\n  Int    0 1 2 3 ...\n  Pair   Pr\n  List   Nil Cons\n\u003c/pre\u003e",
          "module": "DDC.Core.Eval.Env",
          "name": "primDataDefs",
          "package": "ddc-core-eval",
          "signature": "DataDefs Name",
          "source": "src/DDC-Core-Eval-Env.html#primDataDefs",
          "type": "function"
        },
        "index": {
          "description": "Data type definitions for Type Constructors Int Pair Pr List Nil Cons",
          "hierarchy": "DDC Core Eval Env",
          "module": "DDC.Core.Eval.Env",
          "name": "primDataDefs",
          "package": "ddc-core-eval",
          "partial": "Data Defs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:primDataDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind environment containing kinds of primitive data types.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Env",
          "name": "primKindEnv",
          "package": "ddc-core-eval",
          "signature": "Env Name",
          "source": "src/DDC-Core-Eval-Env.html#primKindEnv",
          "type": "function"
        },
        "index": {
          "description": "Kind environment containing kinds of primitive data types",
          "hierarchy": "DDC Core Eval Env",
          "module": "DDC.Core.Eval.Env",
          "name": "primKindEnv",
          "package": "ddc-core-eval",
          "partial": "Kind Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:primKindEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType environment containing types of primitive data constructors as well\n   as the following primitive operators:\n\u003c/p\u003e\u003cpre\u003enegInt, addInt, subInt, mulInt, divInt, eqInt, updateInt\u003c/pre\u003e\u003cp\u003eIt also contains types for the primitive capability constructors:\n\u003c/p\u003e\u003cpre\u003eGlobal#, Const#, Mutable#, Lazy#, Manifest#\u003c/pre\u003e",
          "module": "DDC.Core.Eval.Env",
          "name": "primTypeEnv",
          "package": "ddc-core-eval",
          "signature": "Env Name",
          "source": "src/DDC-Core-Eval-Env.html#primTypeEnv",
          "type": "function"
        },
        "index": {
          "description": "Type environment containing types of primitive data constructors as well as the following primitive operators negInt addInt subInt mulInt divInt eqInt updateInt It also contains types for the primitive capability constructors Global Const Mutable Lazy Manifest",
          "hierarchy": "DDC Core Eval Env",
          "module": "DDC.Core.Eval.Env",
          "name": "primTypeEnv",
          "package": "ddc-core-eval",
          "partial": "Type Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:primTypeEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the type of a primitive name.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the name isn't primitive. \n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Env",
          "name": "typeOfPrimName",
          "package": "ddc-core-eval",
          "signature": "Name -\u003e Maybe (Type Name)",
          "source": "src/DDC-Core-Eval-Env.html#typeOfPrimName",
          "type": "function"
        },
        "index": {
          "description": "Take the type of primitive name Returns Nothing if the name isn primitive",
          "hierarchy": "DDC Core Eval Env",
          "module": "DDC.Core.Eval.Env",
          "name": "typeOfPrimName",
          "normalized": "Name-\u003eMaybe(Type Name)",
          "package": "ddc-core-eval",
          "partial": "Of Prim Name",
          "signature": "Name-\u003eMaybe(Type Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:typeOfPrimName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Name",
          "name": "Name",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Name.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "Name",
          "package": "ddc-core-eval",
          "partial": "Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese are primitive witnesses that guarantee the associated property\n   of the program. Ostensibly, they are only introduced by the system\n   at runtime, but for testing purposes we can also inject them into\n   the source program.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "Cap",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Name.html#Cap",
          "type": "data"
        },
        "index": {
          "description": "These are primitive witnesses that guarantee the associated property of the program Ostensibly they are only introduced by the system at runtime but for testing purposes we can also inject them into the source program",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "Cap",
          "package": "ddc-core-eval",
          "partial": "Cap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:Cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA store location.\n\u003c/p\u003e\u003cp\u003eThese are pretty printed like \u003ccode\u003eL4#\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "Loc",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Name.html#Loc",
          "type": "data"
        },
        "index": {
          "description": "store location These are pretty printed like L4",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "Loc",
          "package": "ddc-core-eval",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of things recognised by the evaluator.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "Name",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Name.html#Name",
          "type": "data"
        },
        "index": {
          "description": "Names of things recognised by the evaluator",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "Name",
          "package": "ddc-core-eval",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA primitive constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimCon",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Name.html#PrimCon",
          "type": "data"
        },
        "index": {
          "description": "primitive constructor",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimCon",
          "package": "ddc-core-eval",
          "partial": "Prim Con",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:PrimCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA primitive operator.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOp",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Name.html#PrimOp",
          "type": "data"
        },
        "index": {
          "description": "primitive operator",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOp",
          "package": "ddc-core-eval",
          "partial": "Prim Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:PrimOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA region handle.\n\u003c/p\u003e\u003cp\u003eThese are pretty printed like \u003ccode\u003eR5#\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "Rgn",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Name.html#Rgn",
          "type": "data"
        },
        "index": {
          "description": "region handle These are pretty printed like R5",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "Rgn",
          "package": "ddc-core-eval",
          "partial": "Rgn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:Rgn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitness that a region is constant.\n   This lets us purify read and allocation effects on it,\n   and prevents it from being Mutable.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "CapConst",
          "package": "ddc-core-eval",
          "signature": "CapConst",
          "source": "src/DDC-Core-Eval-Name.html#Cap",
          "type": "function"
        },
        "index": {
          "description": "Witness that region is constant This lets us purify read and allocation effects on it and prevents it from being Mutable",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "CapConst",
          "package": "ddc-core-eval",
          "partial": "Cap Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitness that some regions are distinct\n   This lets us perform aliasing based optimisations.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "CapDistinct",
          "package": "ddc-core-eval",
          "signature": "CapDistinct Int",
          "source": "src/DDC-Core-Eval-Name.html#Cap",
          "type": "function"
        },
        "index": {
          "description": "Witness that some regions are distinct This lets us perform aliasing based optimisations",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "CapDistinct",
          "package": "ddc-core-eval",
          "partial": "Cap Distinct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapDistinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitness that a region is global.\n   Global regions live for the duration of the program and are not\n   deallocated in a stack like manner. This lets us hide the use of\n   such regions, and rely on the garbage collector to reclaim the\n   space.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "CapGlobal",
          "package": "ddc-core-eval",
          "signature": "CapGlobal",
          "source": "src/DDC-Core-Eval-Name.html#Cap",
          "type": "function"
        },
        "index": {
          "description": "Witness that region is global Global regions live for the duration of the program and are not deallocated in stack like manner This lets us hide the use of such regions and rely on the garbage collector to reclaim the space",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "CapGlobal",
          "package": "ddc-core-eval",
          "partial": "Cap Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitness that a region is lazy.\n   This lets is allocate thunks into the region,\n   and prevents it from being Manifest.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "CapLazy",
          "package": "ddc-core-eval",
          "signature": "CapLazy",
          "source": "src/DDC-Core-Eval-Name.html#Cap",
          "type": "function"
        },
        "index": {
          "description": "Witness that region is lazy This lets is allocate thunks into the region and prevents it from being Manifest",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "CapLazy",
          "package": "ddc-core-eval",
          "partial": "Cap Lazy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitness that a region is manifest.\n   This ensures there are no thunks in the region,\n   which prevents it from being Lazy.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "CapManifest",
          "package": "ddc-core-eval",
          "signature": "CapManifest",
          "source": "src/DDC-Core-Eval-Name.html#Cap",
          "type": "function"
        },
        "index": {
          "description": "Witness that region is manifest This ensures there are no thunks in the region which prevents it from being Lazy",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "CapManifest",
          "package": "ddc-core-eval",
          "partial": "Cap Manifest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapManifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitness that a region is mutable.\n   This lets us update objects in the region, \n   and prevents it from being Constant.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "CapMutable",
          "package": "ddc-core-eval",
          "signature": "CapMutable",
          "source": "src/DDC-Core-Eval-Name.html#Cap",
          "type": "function"
        },
        "index": {
          "description": "Witness that region is mutable This lets us update objects in the region and prevents it from being Constant",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "CapMutable",
          "package": "ddc-core-eval",
          "partial": "Cap Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Core.Eval.Name\",\"DDC.Core.Eval.Store\"]",
          "name": "Loc",
          "package": "ddc-core-eval",
          "signature": "Loc Int",
          "source": "src/DDC-Core-Eval-Name.html#Loc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:Loc\",\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:Loc\"]"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "Loc",
          "package": "ddc-core-eval",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore capabilities.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "NameCap",
          "package": "ddc-core-eval",
          "signature": "NameCap Cap",
          "source": "src/DDC-Core-Eval-Name.html#Name",
          "type": "function"
        },
        "index": {
          "description": "Store capabilities",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "NameCap",
          "package": "ddc-core-eval",
          "partial": "Name Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser constructors.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "NameCon",
          "package": "ddc-core-eval",
          "signature": "NameCon String",
          "source": "src/DDC-Core-Eval-Name.html#Name",
          "type": "function"
        },
        "index": {
          "description": "User constructors",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "NameCon",
          "package": "ddc-core-eval",
          "partial": "Name Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger literals (which data constructors).\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "NameInt",
          "package": "ddc-core-eval",
          "signature": "NameInt Integer",
          "source": "src/DDC-Core-Eval-Name.html#Name",
          "type": "function"
        },
        "index": {
          "description": "Integer literals which data constructors",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "NameInt",
          "package": "ddc-core-eval",
          "partial": "Name Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore locations.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "NameLoc",
          "package": "ddc-core-eval",
          "signature": "NameLoc Loc",
          "source": "src/DDC-Core-Eval-Name.html#Name",
          "type": "function"
        },
        "index": {
          "description": "Store locations",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "NameLoc",
          "package": "ddc-core-eval",
          "partial": "Name Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive constructors (eg \u003ccode\u003eList, Nil\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "NamePrimCon",
          "package": "ddc-core-eval",
          "signature": "NamePrimCon PrimCon",
          "source": "src/DDC-Core-Eval-Name.html#Name",
          "type": "function"
        },
        "index": {
          "description": "Primitive constructors eg List Nil",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "NamePrimCon",
          "package": "ddc-core-eval",
          "partial": "Name Prim Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NamePrimCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive operators    (eg \u003ccode\u003eaddInt, subInt\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "NamePrimOp",
          "package": "ddc-core-eval",
          "signature": "NamePrimOp PrimOp",
          "source": "src/DDC-Core-Eval-Name.html#Name",
          "type": "function"
        },
        "index": {
          "description": "Primitive operators eg addInt subInt",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "NamePrimOp",
          "package": "ddc-core-eval",
          "partial": "Name Prim Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NamePrimOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegion handles.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "NameRgn",
          "package": "ddc-core-eval",
          "signature": "NameRgn Rgn",
          "source": "src/DDC-Core-Eval-Name.html#Name",
          "type": "function"
        },
        "index": {
          "description": "Region handles",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "NameRgn",
          "package": "ddc-core-eval",
          "partial": "Name Rgn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameRgn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser variables.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "NameVar",
          "package": "ddc-core-eval",
          "signature": "NameVar String",
          "source": "src/DDC-Core-Eval-Name.html#Name",
          "type": "function"
        },
        "index": {
          "description": "User variables",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "NameVar",
          "package": "ddc-core-eval",
          "partial": "Name Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCons\u003c/code\u003e data constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimDaConCons",
          "package": "ddc-core-eval",
          "signature": "PrimDaConCons",
          "source": "src/DDC-Core-Eval-Name.html#PrimCon",
          "type": "function"
        },
        "index": {
          "description": "Cons data constructor",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimDaConCons",
          "package": "ddc-core-eval",
          "partial": "Prim Da Con Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimDaConCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNil\u003c/code\u003e data constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimDaConNil",
          "package": "ddc-core-eval",
          "signature": "PrimDaConNil",
          "source": "src/DDC-Core-Eval-Name.html#PrimCon",
          "type": "function"
        },
        "index": {
          "description": "Nil data constructor",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimDaConNil",
          "package": "ddc-core-eval",
          "partial": "Prim Da Con Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimDaConNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eP\u003c/code\u003e data construct (pairs).\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimDaConPr",
          "package": "ddc-core-eval",
          "signature": "PrimDaConPr",
          "source": "src/DDC-Core-Eval-Name.html#PrimCon",
          "type": "function"
        },
        "index": {
          "description": "data construct pairs",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimDaConPr",
          "package": "ddc-core-eval",
          "partial": "Prim Da Con Pr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimDaConPr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpAddInt",
          "package": "ddc-core-eval",
          "signature": "PrimOpAddInt",
          "source": "src/DDC-Core-Eval-Name.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpAddInt",
          "package": "ddc-core-eval",
          "partial": "Prim Op Add Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpAddInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpCopyInt",
          "package": "ddc-core-eval",
          "signature": "PrimOpCopyInt",
          "source": "src/DDC-Core-Eval-Name.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpCopyInt",
          "package": "ddc-core-eval",
          "partial": "Prim Op Copy Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpCopyInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpDivInt",
          "package": "ddc-core-eval",
          "signature": "PrimOpDivInt",
          "source": "src/DDC-Core-Eval-Name.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpDivInt",
          "package": "ddc-core-eval",
          "partial": "Prim Op Div Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpDivInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpEqInt",
          "package": "ddc-core-eval",
          "signature": "PrimOpEqInt",
          "source": "src/DDC-Core-Eval-Name.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpEqInt",
          "package": "ddc-core-eval",
          "partial": "Prim Op Eq Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpEqInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpMulInt",
          "package": "ddc-core-eval",
          "signature": "PrimOpMulInt",
          "source": "src/DDC-Core-Eval-Name.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpMulInt",
          "package": "ddc-core-eval",
          "partial": "Prim Op Mul Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpMulInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpNegInt",
          "package": "ddc-core-eval",
          "signature": "PrimOpNegInt",
          "source": "src/DDC-Core-Eval-Name.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpNegInt",
          "package": "ddc-core-eval",
          "partial": "Prim Op Neg Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpNegInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpSubInt",
          "package": "ddc-core-eval",
          "signature": "PrimOpSubInt",
          "source": "src/DDC-Core-Eval-Name.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpSubInt",
          "package": "ddc-core-eval",
          "partial": "Prim Op Sub Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpSubInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpUpdateInt",
          "package": "ddc-core-eval",
          "signature": "PrimOpUpdateInt",
          "source": "src/DDC-Core-Eval-Name.html#PrimOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimOpUpdateInt",
          "package": "ddc-core-eval",
          "partial": "Prim Op Update Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpUpdateInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eInt\u003c/code\u003e  type constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimTyConInt",
          "package": "ddc-core-eval",
          "signature": "PrimTyConInt",
          "source": "src/DDC-Core-Eval-Name.html#PrimCon",
          "type": "function"
        },
        "index": {
          "description": "Int type constructor",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimTyConInt",
          "package": "ddc-core-eval",
          "partial": "Prim Ty Con Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimTyConInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eList\u003c/code\u003e type constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimTyConList",
          "package": "ddc-core-eval",
          "signature": "PrimTyConList",
          "source": "src/DDC-Core-Eval-Name.html#PrimCon",
          "type": "function"
        },
        "index": {
          "description": "List type constructor",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimTyConList",
          "package": "ddc-core-eval",
          "partial": "Prim Ty Con List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimTyConList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePair\u003c/code\u003e type constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimTyConPair",
          "package": "ddc-core-eval",
          "signature": "PrimTyConPair",
          "source": "src/DDC-Core-Eval-Name.html#PrimCon",
          "type": "function"
        },
        "index": {
          "description": "Pair type constructor",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "PrimTyConPair",
          "package": "ddc-core-eval",
          "partial": "Prim Ty Con Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimTyConPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Core.Eval.Name\",\"DDC.Core.Eval.Store\"]",
          "name": "Rgn",
          "package": "ddc-core-eval",
          "signature": "Rgn Int",
          "source": "src/DDC-Core-Eval-Name.html#Rgn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:Rgn\",\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:Rgn\"]"
        },
        "index": {
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "Rgn",
          "package": "ddc-core-eval",
          "partial": "Rgn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:Rgn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLex a string to tokens, using primitive names.\n\u003c/p\u003e\u003cp\u003eThe first argument gives the starting source line number.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "lexExpString",
          "package": "ddc-core-eval",
          "signature": "String -\u003e Int -\u003e String -\u003e [Token (Tok Name)]",
          "source": "src/DDC-Core-Eval-Name.html#lexExpString",
          "type": "function"
        },
        "index": {
          "description": "Lex string to tokens using primitive names The first argument gives the starting source line number",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "lexExpString",
          "normalized": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
          "package": "ddc-core-eval",
          "partial": "Exp String",
          "signature": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:lexExpString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLex a string to tokens, using primitive names.\n\u003c/p\u003e\u003cp\u003eThe first argument gives the starting source line number.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "lexModuleString",
          "package": "ddc-core-eval",
          "signature": "String -\u003e Int -\u003e String -\u003e [Token (Tok Name)]",
          "source": "src/DDC-Core-Eval-Name.html#lexModuleString",
          "type": "function"
        },
        "index": {
          "description": "Lex string to tokens using primitive names The first argument gives the starting source line number",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "lexModuleString",
          "normalized": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
          "package": "ddc-core-eval",
          "partial": "Module String",
          "signature": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:lexModuleString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a primitive name.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Name",
          "name": "readName",
          "package": "ddc-core-eval",
          "signature": "String -\u003e Maybe Name",
          "source": "src/DDC-Core-Eval-Name.html#readName",
          "type": "function"
        },
        "index": {
          "description": "Read primitive name",
          "hierarchy": "DDC Core Eval Name",
          "module": "DDC.Core.Eval.Name",
          "name": "readName",
          "normalized": "String-\u003eMaybe Name",
          "package": "ddc-core-eval",
          "partial": "Name",
          "signature": "String-\u003eMaybe Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:readName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSingle step evaluation of primitive operators and constructors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Eval.Prim",
          "name": "Prim",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "Single step evaluation of primitive operators and constructors",
          "hierarchy": "DDC Core Eval Prim",
          "module": "DDC.Core.Eval.Prim",
          "name": "Prim",
          "package": "ddc-core-eval",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edelRgn\u003c/a\u003e\u003c/code\u003e but accept a region handle wrapped in a \u003ccode\u003e\u003ca\u003eBound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Prim",
          "name": "primDelRegion",
          "package": "ddc-core-eval",
          "signature": "Bound Name -\u003e Store -\u003e Maybe Store",
          "source": "src/DDC-Core-Eval-Prim.html#primDelRegion",
          "type": "function"
        },
        "index": {
          "description": "Like delRgn but accept region handle wrapped in Bound",
          "hierarchy": "DDC Core Eval Prim",
          "module": "DDC.Core.Eval.Prim",
          "name": "primDelRegion",
          "normalized": "Bound Name-\u003eStore-\u003eMaybe Store",
          "package": "ddc-core-eval",
          "partial": "Del Region",
          "signature": "Bound Name-\u003eStore-\u003eMaybe Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#v:primDelRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewRgn\u003c/a\u003e\u003c/code\u003e but return the region handle wrapped in a \u003ccode\u003e\u003ca\u003eBound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Prim",
          "name": "primNewRegion",
          "package": "ddc-core-eval",
          "signature": "Store -\u003e (Store, Bound Name)",
          "source": "src/DDC-Core-Eval-Prim.html#primNewRegion",
          "type": "function"
        },
        "index": {
          "description": "Like newRgn but return the region handle wrapped in Bound",
          "hierarchy": "DDC Core Eval Prim",
          "module": "DDC.Core.Eval.Prim",
          "name": "primNewRegion",
          "normalized": "Store-\u003e(Store,Bound Name)",
          "package": "ddc-core-eval",
          "partial": "New Region",
          "signature": "Store-\u003e(Store,Bound Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#v:primNewRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep a primitive constructor, which allocates an object in the store.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Prim",
          "name": "stepPrimCon",
          "package": "ddc-core-eval",
          "signature": "DaCon Name-\u003e [Exp () Name]-\u003e Store-\u003e Maybe (Store, Exp () Name)",
          "type": "function"
        },
        "index": {
          "description": "Step primitive constructor which allocates an object in the store",
          "hierarchy": "DDC Core Eval Prim",
          "module": "DDC.Core.Eval.Prim",
          "name": "stepPrimCon",
          "normalized": "DaCon Name-\u003e[Exp()Name]-\u003eStore-\u003eMaybe(Store,Exp()Name)",
          "package": "ddc-core-eval",
          "partial": "Prim Con",
          "signature": "DaCon Name-\u003e[Exp()Name]-\u003eStore-\u003eMaybe(Store,Exp()Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#v:stepPrimCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep a primitive operator.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Prim",
          "name": "stepPrimOp",
          "package": "ddc-core-eval",
          "signature": "Name-\u003e [Exp () Name]-\u003e Store-\u003e Maybe (Store, Exp () Name)",
          "type": "function"
        },
        "index": {
          "description": "Step primitive operator",
          "hierarchy": "DDC Core Eval Prim",
          "module": "DDC.Core.Eval.Prim",
          "name": "stepPrimOp",
          "normalized": "Name-\u003e[Exp()Name]-\u003eStore-\u003eMaybe(Store,Exp()Name)",
          "package": "ddc-core-eval",
          "partial": "Prim Op",
          "signature": "Name-\u003e[Exp()Name]-\u003eStore-\u003eMaybe(Store,Exp()Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#v:stepPrimOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore language profile for the evaluator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Eval.Profile",
          "name": "Profile",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Profile.html",
          "type": "module"
        },
        "index": {
          "description": "Core language profile for the evaluator",
          "hierarchy": "DDC Core Eval Profile",
          "module": "DDC.Core.Eval.Profile",
          "name": "Profile",
          "package": "ddc-core-eval",
          "partial": "Profile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Profile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCore language fragment that can be directly evaluated.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Eval.Profile\",\"DDC.Core.Eval\"]",
          "name": "evalProfile",
          "package": "ddc-core-eval",
          "signature": "Profile Name",
          "source": "src/DDC-Core-Eval-Profile.html#evalProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Profile.html#v:evalProfile\",\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:evalProfile\"]"
        },
        "index": {
          "description": "Core language fragment that can be directly evaluated",
          "hierarchy": "DDC Core Eval Profile",
          "module": "DDC.Core.Eval.Profile",
          "name": "evalProfile",
          "package": "ddc-core-eval",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Profile.html#v:evalProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSingle step evalation for the Disciple Core language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Eval.Step",
          "name": "Step",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Step.html",
          "type": "module"
        },
        "index": {
          "description": "Single step evalation for the Disciple Core language",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "Step",
          "package": "ddc-core-eval",
          "partial": "Step",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of stepping some expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Step",
          "name": "StepResult",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Step.html#StepResult",
          "type": "data"
        },
        "index": {
          "description": "The result of stepping some expression",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "StepResult",
          "package": "ddc-core-eval",
          "partial": "Step Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#t:StepResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression cannot step and is a (weak) value.\n   We're done already.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Eval.Step\",\"DDC.Core.Eval\"]",
          "name": "StepDone",
          "package": "ddc-core-eval",
          "signature": "StepDone",
          "source": "src/DDC-Core-Eval-Step.html#StepResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepDone\",\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:StepDone\"]"
        },
        "index": {
          "description": "Expression cannot step and is weak value We re done already",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "StepDone",
          "package": "ddc-core-eval",
          "partial": "Step Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression is stuck, and we know for sure it's mistyped.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Eval.Step\",\"DDC.Core.Eval\"]",
          "name": "StepMistyped",
          "package": "ddc-core-eval",
          "signature": "StepMistyped (Error () Name)",
          "source": "src/DDC-Core-Eval-Step.html#StepResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepMistyped\",\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:StepMistyped\"]"
        },
        "index": {
          "description": "Expression is stuck and we know for sure it mistyped",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "StepMistyped",
          "normalized": "StepMistyped(Error()Name)",
          "package": "ddc-core-eval",
          "partial": "Step Mistyped",
          "signature": "StepMistyped(Error()Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepMistyped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression progressed to a new state.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Eval.Step\",\"DDC.Core.Eval\"]",
          "name": "StepProgress",
          "package": "ddc-core-eval",
          "signature": "StepProgress Store (Exp () Name)",
          "source": "src/DDC-Core-Eval-Step.html#StepResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepProgress\",\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:StepProgress\"]"
        },
        "index": {
          "description": "Expression progressed to new state",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "StepProgress",
          "normalized": "StepProgress Store(Exp()Name)",
          "package": "ddc-core-eval",
          "partial": "Step Progress",
          "signature": "StepProgress Store(Exp()Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression cannot step, and is not a (weak) value.\n   The original expression was mistyped,\n   or something is wrong with the interpreter.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Eval.Step\",\"DDC.Core.Eval\"]",
          "name": "StepStuck",
          "package": "ddc-core-eval",
          "signature": "StepStuck",
          "source": "src/DDC-Core-Eval-Step.html#StepResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepStuck\",\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:StepStuck\"]"
        },
        "index": {
          "description": "Expression cannot step and is not weak value The original expression was mistyped or something is wrong with the interpreter",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "StepStuck",
          "package": "ddc-core-eval",
          "partial": "Step Stuck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepStuck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle step a core expression to a value.\n\u003c/p\u003e\u003cp\u003eAs opposed to \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e, if the provided expression is the location of a\n   Thunk, then the thunk will be forced.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Eval.Step\",\"DDC.Core.Eval\"]",
          "name": "force",
          "package": "ddc-core-eval",
          "signature": "Store-\u003e Exp () Name-\u003e StepResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:force\",\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:force\"]"
        },
        "index": {
          "description": "Single step core expression to value As opposed to step if the provided expression is the location of Thunk then the thunk will be forced",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "force",
          "normalized": "Store-\u003eExp()Name-\u003eStepResult",
          "package": "ddc-core-eval",
          "signature": "Store-\u003eExp()Name-\u003eStepResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an expression is a value.\n   Values can't be progressed any further, with either \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Step",
          "name": "isValue",
          "package": "ddc-core-eval",
          "signature": "Store -\u003e Exp a Name -\u003e Bool",
          "source": "src/DDC-Core-Eval-Step.html#isValue",
          "type": "function"
        },
        "index": {
          "description": "Check if an expression is value Values can be progressed any further with either force or step",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "isValue",
          "normalized": "Store-\u003eExp a Name-\u003eBool",
          "package": "ddc-core-eval",
          "partial": "Value",
          "signature": "Store-\u003eExp a Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:isValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an expression is a weak values.\n   These are all the values, and locations that point to thunks.\n\u003c/p\u003e\u003cp\u003eWeak values can be progressed with \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e, but not \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Step",
          "name": "isWeakValue",
          "package": "ddc-core-eval",
          "signature": "Store -\u003e Exp a Name -\u003e Bool",
          "source": "src/DDC-Core-Eval-Step.html#isWeakValue",
          "type": "function"
        },
        "index": {
          "description": "Check if an expression is weak values These are all the values and locations that point to thunks Weak values can be progressed with force but not step",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "isWeakValue",
          "normalized": "Store-\u003eExp a Name-\u003eBool",
          "package": "ddc-core-eval",
          "partial": "Weak Value",
          "signature": "Store-\u003eExp a Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:isWeakValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle step a code expression to a weak value.\n\u003c/p\u003e\u003cp\u003eAs opposed to \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e, if the provided expression is the location of a \n   Thunk, then the thunk is not forced.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Eval.Step\",\"DDC.Core.Eval\"]",
          "name": "step",
          "package": "ddc-core-eval",
          "signature": "Store-\u003e Exp () Name-\u003e StepResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:step\",\"http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:step\"]"
        },
        "index": {
          "description": "Single step code expression to weak value As opposed to force if the provided expression is the location of Thunk then the thunk is not forced",
          "hierarchy": "DDC Core Eval Step",
          "module": "DDC.Core.Eval.Step",
          "name": "step",
          "normalized": "Store-\u003eExp()Name-\u003eStepResult",
          "package": "ddc-core-eval",
          "signature": "Store-\u003eExp()Name-\u003eStepResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of the store.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "Store",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Store.html",
          "type": "module"
        },
        "index": {
          "description": "Definition of the store",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "Store",
          "package": "ddc-core-eval",
          "partial": "Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA store location.\n\u003c/p\u003e\u003cp\u003eThese are pretty printed like \u003ccode\u003eL4#\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "Loc",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Name.html#Loc",
          "type": "data"
        },
        "index": {
          "description": "store location These are pretty printed like L4",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "Loc",
          "package": "ddc-core-eval",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA region handle.\n\u003c/p\u003e\u003cp\u003eThese are pretty printed like \u003ccode\u003eR5#\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "Rgn",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Name.html#Rgn",
          "type": "data"
        },
        "index": {
          "description": "region handle These are pretty printed like R5",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "Rgn",
          "package": "ddc-core-eval",
          "partial": "Rgn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#t:Rgn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore binding.\n   These are naked objects that can be allocated directly into the heap.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "SBind",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Store.html#SBind",
          "type": "data"
        },
        "index": {
          "description": "Store binding These are naked objects that can be allocated directly into the heap",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "SBind",
          "package": "ddc-core-eval",
          "partial": "SBind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#t:SBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Store",
          "name": "Store",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Store.html#Store",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "Store",
          "package": "ddc-core-eval",
          "partial": "Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#t:Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLambda abstraction, used for recursive bindings.\n   The flag indicates whether each binder is level-1 (True) or level-0 (False).\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "SLams",
          "package": "ddc-core-eval",
          "signature": "SLams",
          "source": "src/DDC-Core-Eval-Store.html#SBind",
          "type": "function"
        },
        "index": {
          "description": "Lambda abstraction used for recursive bindings The flag indicates whether each binder is level-1 True or level-0 False",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "SLams",
          "package": "ddc-core-eval",
          "partial": "SLams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:SLams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn algebraic data constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "SObj",
          "package": "ddc-core-eval",
          "signature": "SObj",
          "source": "src/DDC-Core-Eval-Store.html#SBind",
          "type": "function"
        },
        "index": {
          "description": "An algebraic data constructor",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "SObj",
          "package": "ddc-core-eval",
          "partial": "SObj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:SObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA thunk, used for lazy evaluation.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "SThunk",
          "package": "ddc-core-eval",
          "signature": "SThunk",
          "source": "src/DDC-Core-Eval-Store.html#SBind",
          "type": "function"
        },
        "index": {
          "description": "thunk used for lazy evaluation",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "SThunk",
          "package": "ddc-core-eval",
          "partial": "SThunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:SThunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Store",
          "name": "Store",
          "package": "ddc-core-eval",
          "signature": "Store",
          "source": "src/DDC-Core-Eval-Store.html#Store",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "Store",
          "package": "ddc-core-eval",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a store binding to the store, at the given location.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "addBind",
          "package": "ddc-core-eval",
          "signature": "Loc -\u003e Rgn -\u003e Type Name -\u003e SBind -\u003e Store -\u003e Store",
          "source": "src/DDC-Core-Eval-Store.html#addBind",
          "type": "function"
        },
        "index": {
          "description": "Add store binding to the store at the given location",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "addBind",
          "normalized": "Loc-\u003eRgn-\u003eType Name-\u003eSBind-\u003eStore-\u003eStore",
          "package": "ddc-core-eval",
          "partial": "Bind",
          "signature": "Loc-\u003eRgn-\u003eType Name-\u003eSBind-\u003eStore-\u003eStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:addBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new binding into the given region,\n    returning the new location.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "allocBind",
          "package": "ddc-core-eval",
          "signature": "Rgn -\u003e Type Name -\u003e SBind -\u003e Store -\u003e (Store, Loc)",
          "source": "src/DDC-Core-Eval-Store.html#allocBind",
          "type": "function"
        },
        "index": {
          "description": "Allocate new binding into the given region returning the new location",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "allocBind",
          "normalized": "Rgn-\u003eType Name-\u003eSBind-\u003eStore-\u003e(Store,Loc)",
          "package": "ddc-core-eval",
          "partial": "Bind",
          "signature": "Rgn-\u003eType Name-\u003eSBind-\u003eStore-\u003e(Store,Loc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:allocBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlloc some recursive bindings into the given region, \n     returning the new locations.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "allocBinds",
          "package": "ddc-core-eval",
          "signature": "[[Loc] -\u003e (Rgn, Type Name, SBind)] -\u003e Store -\u003e (Store, [Loc])",
          "source": "src/DDC-Core-Eval-Store.html#allocBinds",
          "type": "function"
        },
        "index": {
          "description": "Alloc some recursive bindings into the given region returning the new locations",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "allocBinds",
          "normalized": "[[Loc]-\u003e(Rgn,Type Name,SBind)]-\u003eStore-\u003e(Store,[Loc])",
          "package": "ddc-core-eval",
          "partial": "Binds",
          "signature": "[[Loc]-\u003e(Rgn,Type Name,SBind)]-\u003eStore-\u003e(Store,[Loc])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:allocBinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a region, removing all its bindings.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "delRgn",
          "package": "ddc-core-eval",
          "signature": "Rgn -\u003e Store -\u003e Store",
          "source": "src/DDC-Core-Eval-Store.html#delRgn",
          "type": "function"
        },
        "index": {
          "description": "Delete region removing all its bindings",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "delRgn",
          "normalized": "Rgn-\u003eStore-\u003eStore",
          "package": "ddc-core-eval",
          "partial": "Rgn",
          "signature": "Rgn-\u003eStore-\u003eStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:delRgn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a store contains the given region.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "hasRgn",
          "package": "ddc-core-eval",
          "signature": "Store -\u003e Rgn -\u003e Bool",
          "source": "src/DDC-Core-Eval-Store.html#hasRgn",
          "type": "function"
        },
        "index": {
          "description": "Check whether store contains the given region",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "hasRgn",
          "normalized": "Store-\u003eRgn-\u003eBool",
          "package": "ddc-core-eval",
          "partial": "Rgn",
          "signature": "Store-\u003eRgn-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:hasRgn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial store containing the preallocated regions and bindings.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "initial",
          "package": "ddc-core-eval",
          "signature": "Store",
          "source": "src/DDC-Core-Eval-Store.html#initial",
          "type": "function"
        },
        "index": {
          "description": "Initial store containing the preallocated regions and bindings",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "initial",
          "package": "ddc-core-eval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an expression is the unit constructor, \n   or its static heap location.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "isUnitOrLocX",
          "package": "ddc-core-eval",
          "signature": "Exp a Name -\u003e Bool",
          "source": "src/DDC-Core-Eval-Store.html#isUnitOrLocX",
          "type": "function"
        },
        "index": {
          "description": "Check whether an expression is the unit constructor or its static heap location",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "isUnitOrLocX",
          "normalized": "Exp a Name-\u003eBool",
          "package": "ddc-core-eval",
          "partial": "Unit Or Loc",
          "signature": "Exp a Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:isUnitOrLocX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of the static unit object.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "locUnit",
          "package": "ddc-core-eval",
          "signature": "Loc",
          "source": "src/DDC-Core-Eval-Store.html#locUnit",
          "type": "function"
        },
        "index": {
          "description": "Location of the static unit object",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "locUnit",
          "package": "ddc-core-eval",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:locUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a the binding for a location.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "lookupBind",
          "package": "ddc-core-eval",
          "signature": "Loc -\u003e Store -\u003e Maybe SBind",
          "source": "src/DDC-Core-Eval-Store.html#lookupBind",
          "type": "function"
        },
        "index": {
          "description": "Lookup the binding for location",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "lookupBind",
          "normalized": "Loc-\u003eStore-\u003eMaybe SBind",
          "package": "ddc-core-eval",
          "partial": "Bind",
          "signature": "Loc-\u003eStore-\u003eMaybe SBind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:lookupBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the region handle, type and binding for a location.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "lookupRegionTypeBind",
          "package": "ddc-core-eval",
          "signature": "Loc -\u003e Store -\u003e Maybe (Rgn, Type Name, SBind)",
          "source": "src/DDC-Core-Eval-Store.html#lookupRegionTypeBind",
          "type": "function"
        },
        "index": {
          "description": "Lookup the region handle type and binding for location",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "lookupRegionTypeBind",
          "normalized": "Loc-\u003eStore-\u003eMaybe(Rgn,Type Name,SBind)",
          "package": "ddc-core-eval",
          "partial": "Region Type Bind",
          "signature": "Loc-\u003eStore-\u003eMaybe(Rgn,Type Name,SBind)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:lookupRegionTypeBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the type of a store location.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "lookupTypeOfLoc",
          "package": "ddc-core-eval",
          "signature": "Loc -\u003e Store -\u003e Maybe (Type Name)",
          "source": "src/DDC-Core-Eval-Store.html#lookupTypeOfLoc",
          "type": "function"
        },
        "index": {
          "description": "Lookup the type of store location",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "lookupTypeOfLoc",
          "normalized": "Loc-\u003eStore-\u003eMaybe(Type Name)",
          "package": "ddc-core-eval",
          "partial": "Type Of Loc",
          "signature": "Loc-\u003eStore-\u003eMaybe(Type Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:lookupTypeOfLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new location in the store.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "newLoc",
          "package": "ddc-core-eval",
          "signature": "Store -\u003e (Store, Loc)",
          "source": "src/DDC-Core-Eval-Store.html#newLoc",
          "type": "function"
        },
        "index": {
          "description": "Create new location in the store",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "newLoc",
          "normalized": "Store-\u003e(Store,Loc)",
          "package": "ddc-core-eval",
          "partial": "Loc",
          "signature": "Store-\u003e(Store,Loc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:newLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate several new locations in the store.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "newLocs",
          "package": "ddc-core-eval",
          "signature": "Int -\u003e Store -\u003e (Store, [Loc])",
          "source": "src/DDC-Core-Eval-Store.html#newLocs",
          "type": "function"
        },
        "index": {
          "description": "Create several new locations in the store",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "newLocs",
          "normalized": "Int-\u003eStore-\u003e(Store,[Loc])",
          "package": "ddc-core-eval",
          "partial": "Locs",
          "signature": "Int-\u003eStore-\u003e(Store,[Loc])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:newLocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new region in the store.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "newRgn",
          "package": "ddc-core-eval",
          "signature": "Store -\u003e (Store, Rgn)",
          "source": "src/DDC-Core-Eval-Store.html#newRgn",
          "type": "function"
        },
        "index": {
          "description": "Create new region in the store",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "newRgn",
          "normalized": "Store-\u003e(Store,Rgn)",
          "package": "ddc-core-eval",
          "partial": "Rgn",
          "signature": "Store-\u003e(Store,Rgn)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:newRgn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate several new regions in the store\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "newRgns",
          "package": "ddc-core-eval",
          "signature": "Int -\u003e Store -\u003e (Store, [Rgn])",
          "source": "src/DDC-Core-Eval-Store.html#newRgns",
          "type": "function"
        },
        "index": {
          "description": "Create several new regions in the store",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "newRgns",
          "normalized": "Int-\u003eStore-\u003e(Store,[Rgn])",
          "package": "ddc-core-eval",
          "partial": "Rgns",
          "signature": "Int-\u003eStore-\u003e(Store,[Rgn])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:newRgns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Store",
          "name": "sbindDataArgs",
          "package": "ddc-core-eval",
          "signature": "[Loc]",
          "source": "src/DDC-Core-Eval-Store.html#SBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "sbindDataArgs",
          "normalized": "[Loc]",
          "package": "ddc-core-eval",
          "partial": "Data Args",
          "signature": "[Loc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindDataArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Store",
          "name": "sbindDataTag",
          "package": "ddc-core-eval",
          "signature": "DaCon Name",
          "source": "src/DDC-Core-Eval-Store.html#SBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "sbindDataTag",
          "package": "ddc-core-eval",
          "partial": "Data Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindDataTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Store",
          "name": "sbindLamBinds",
          "package": "ddc-core-eval",
          "signature": "[(Bool, Bind Name)]",
          "source": "src/DDC-Core-Eval-Store.html#SBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "sbindLamBinds",
          "normalized": "[(Bool,Bind Name)]",
          "package": "ddc-core-eval",
          "partial": "Lam Binds",
          "signature": "[(Bool,Bind Name)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindLamBinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Store",
          "name": "sbindLamBody",
          "package": "ddc-core-eval",
          "signature": "Exp () Name",
          "source": "src/DDC-Core-Eval-Store.html#SBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "sbindLamBody",
          "normalized": "Exp()Name",
          "package": "ddc-core-eval",
          "partial": "Lam Body",
          "signature": "Exp()Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindLamBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Eval.Store",
          "name": "sbindThunkExp",
          "package": "ddc-core-eval",
          "signature": "Exp () Name",
          "source": "src/DDC-Core-Eval-Store.html#SBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "sbindThunkExp",
          "normalized": "Exp()Name",
          "package": "ddc-core-eval",
          "partial": "Thunk Exp",
          "signature": "Exp()Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindThunkExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a region as being global.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "setGlobal",
          "package": "ddc-core-eval",
          "signature": "Rgn -\u003e Store -\u003e Store",
          "source": "src/DDC-Core-Eval-Store.html#setGlobal",
          "type": "function"
        },
        "index": {
          "description": "Set region as being global",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "setGlobal",
          "normalized": "Rgn-\u003eStore-\u003eStore",
          "package": "ddc-core-eval",
          "partial": "Global",
          "signature": "Rgn-\u003eStore-\u003eStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:setGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of locations to store bindings,\n   their types, \n   and the handle for the regions they're in.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "storeBinds",
          "package": "ddc-core-eval",
          "signature": "Map Loc (Rgn, Type Name, SBind)",
          "source": "src/DDC-Core-Eval-Store.html#Store",
          "type": "function"
        },
        "index": {
          "description": "Map of locations to store bindings their types and the handle for the regions they re in",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "storeBinds",
          "normalized": "Map Loc(Rgn,Type Name,SBind)",
          "package": "ddc-core-eval",
          "partial": "Binds",
          "signature": "Map Loc(Rgn,Type Name,SBind)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeBinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegions that are marked as global, and are not\n   deallocated with a stack discipline.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "storeGlobal",
          "package": "ddc-core-eval",
          "signature": "Set Rgn",
          "source": "src/DDC-Core-Eval-Store.html#Store",
          "type": "function"
        },
        "index": {
          "description": "Regions that are marked as global and are not deallocated with stack discipline",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "storeGlobal",
          "package": "ddc-core-eval",
          "partial": "Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNext store location to allocate.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "storeNextLoc",
          "package": "ddc-core-eval",
          "signature": "Int",
          "source": "src/DDC-Core-Eval-Store.html#Store",
          "type": "function"
        },
        "index": {
          "description": "Next store location to allocate",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "storeNextLoc",
          "package": "ddc-core-eval",
          "partial": "Next Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeNextLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNext region handle to allocate.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "storeNextRgn",
          "package": "ddc-core-eval",
          "signature": "Int",
          "source": "src/DDC-Core-Eval-Store.html#Store",
          "type": "function"
        },
        "index": {
          "description": "Next region handle to allocate",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "storeNextRgn",
          "package": "ddc-core-eval",
          "partial": "Next Rgn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeNextRgn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegion handles already allocated.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval.Store",
          "name": "storeRegions",
          "package": "ddc-core-eval",
          "signature": "Set Rgn",
          "source": "src/DDC-Core-Eval-Store.html#Store",
          "type": "function"
        },
        "index": {
          "description": "Region handles already allocated",
          "hierarchy": "DDC Core Eval Store",
          "module": "DDC.Core.Eval.Store",
          "name": "storeRegions",
          "package": "ddc-core-eval",
          "partial": "Regions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeRegions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSingle step evaluator for the Disciple Core language.\n\u003c/p\u003e\u003cp\u003eThis is a direct implementation of the operational semantics and is by no\n   means fast, or a substitute for a real interpreter. Programs run with this\n   evaluator will have an asymptotic complexity much worse than if they were\n   compiled. This evaluator is intended for experimenting with the language\n   semantics, and not running actual programs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Eval",
          "name": "Eval",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "Single step evaluator for the Disciple Core language This is direct implementation of the operational semantics and is by no means fast or substitute for real interpreter Programs run with this evaluator will have an asymptotic complexity much worse than if they were compiled This evaluator is intended for experimenting with the language semantics and not running actual programs",
          "hierarchy": "DDC Core Eval",
          "module": "DDC.Core.Eval",
          "name": "Eval",
          "package": "ddc-core-eval",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of stepping some expression.\n\u003c/p\u003e",
          "module": "DDC.Core.Eval",
          "name": "StepResult",
          "package": "ddc-core-eval",
          "source": "src/DDC-Core-Eval-Step.html#StepResult",
          "type": "data"
        },
        "index": {
          "description": "The result of stepping some expression",
          "hierarchy": "DDC Core Eval",
          "module": "DDC.Core.Eval",
          "name": "StepResult",
          "package": "ddc-core-eval",
          "partial": "Step Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#t:StepResult"
      }
    }
  ]
]