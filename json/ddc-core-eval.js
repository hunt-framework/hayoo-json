[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCheck for conflicting store capabilities in the initial program.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Eval-Check.html",
        "fct-type": "module",
        "title": "Check"
      },
      "index": {
        "description": "Check for conflicting store capabilities in the initial program",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "Check",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#t:Error",
      "description": {
        "fct-descr": "\u003cp\u003eThings that can go wrong with the capabilities in a program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Check.html#Error",
        "fct-type": "data",
        "title": "Error"
      },
      "index": {
        "description": "Things that can go wrong with the capabilities in program",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "Error",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:ErrorConflict",
      "description": {
        "fct-descr": "\u003cp\u003eConflicting capabilities in program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "ErrorConflict",
        "fct-source": "src/DDC-Core-Eval-Check.html#Error",
        "fct-type": "function",
        "title": "ErrorConflict"
      },
      "index": {
        "description": "Conflicting capabilities in program",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "ErrorConflict",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Error Conflict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:ErrorNonHandle",
      "description": {
        "fct-descr": "\u003cp\u003eA capability constructor applied to a non-region handle.\n   As with \u003ccode\u003e\u003ca\u003eErrorPartial\u003c/a\u003e\u003c/code\u003e we only need to check for this because we're\n   using general witness application to represent capabilities, instead\n   of having an atomic form. \n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "ErrorNonHandle",
        "fct-source": "src/DDC-Core-Eval-Check.html#Error",
        "fct-type": "function",
        "title": "ErrorNonHandle"
      },
      "index": {
        "description": "capability constructor applied to non-region handle As with ErrorPartial we only need to check for this because we re using general witness application to represent capabilities instead of having an atomic form",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "ErrorNonHandle",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Error Non Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:ErrorPartial",
      "description": {
        "fct-descr": "\u003cp\u003eA partially applied capability constructor.\n   In the formal semantics, capabilities are atomic, so this isn't\n   a problem. However, as we're representing them with general witness\n   appliction we need to ensure the constructors aren't partially \n   applied.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "ErrorPartial",
        "fct-source": "src/DDC-Core-Eval-Check.html#Error",
        "fct-type": "function",
        "title": "ErrorPartial"
      },
      "index": {
        "description": "partially applied capability constructor In the formal semantics capabilities are atomic so this isn problem However as we re representing them with general witness appliction we need to ensure the constructors aren partially applied",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "ErrorPartial",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Error Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:checkCapsModule",
      "description": {
        "fct-descr": "\u003cp\u003eCheck for conflicting store capabilities in a module.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Module a Name -\u003e Maybe (Error a)",
        "fct-source": "src/DDC-Core-Eval-Check.html#checkCapsModule",
        "fct-type": "function",
        "title": "checkCapsModule"
      },
      "index": {
        "description": "Check for conflicting store capabilities in module",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "checkCapsModule",
        "normalized": "Module a Name-\u003eMaybe(Error a)",
        "package": "ddc-core-eval",
        "partial": "Caps Module",
        "signature": "Module a Name-\u003eMaybe(Error a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:checkCapsX",
      "description": {
        "fct-descr": "\u003cp\u003eCheck for conflicting store capabilities in an expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp a Name -\u003e Maybe (Error a)",
        "fct-source": "src/DDC-Core-Eval-Check.html#checkCapsX",
        "fct-type": "function",
        "title": "checkCapsX"
      },
      "index": {
        "description": "Check for conflicting store capabilities in an expression",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "checkCapsX",
        "normalized": "Exp a Name-\u003eMaybe(Error a)",
        "package": "ddc-core-eval",
        "partial": "Caps",
        "signature": "Exp a Name-\u003eMaybe(Error a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:errorCap1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Cap",
        "fct-source": "src/DDC-Core-Eval-Check.html#Error",
        "fct-type": "function",
        "title": "errorCap1"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "errorCap1",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:errorCap2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Cap",
        "fct-source": "src/DDC-Core-Eval-Check.html#Error",
        "fct-type": "function",
        "title": "errorCap2"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "errorCap2",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:errorRegions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Rgn",
        "fct-source": "src/DDC-Core-Eval-Check.html#Error",
        "fct-type": "function",
        "title": "errorRegions"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "errorRegions",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Regions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Check.html#v:errorWitness",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Eval.Check",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Witness () Name",
        "fct-source": "src/DDC-Core-Eval-Check.html#Error",
        "fct-type": "function",
        "title": "errorWitness"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Check",
        "module": "DDC.Core.Eval.Check",
        "name": "errorWitness",
        "normalized": "Witness()Name",
        "package": "ddc-core-eval",
        "partial": "Witness",
        "signature": "Witness()Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for constructing and destructing compound types and\n   expressions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Eval-Compounds.html",
        "fct-type": "module",
        "title": "Compounds"
      },
      "index": {
        "description": "Utilities for constructing and destructing compound types and expressions",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "Compounds",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Compounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:dcInt",
      "description": {
        "fct-descr": "\u003cp\u003eMake an integer data constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Integer -\u003e DaCon Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#dcInt",
        "fct-type": "function",
        "title": "dcInt"
      },
      "index": {
        "description": "Make an integer data constructor",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "dcInt",
        "normalized": "Integer-\u003eDaCon Name",
        "package": "ddc-core-eval",
        "partial": "Int",
        "signature": "Integer-\u003eDaCon Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:isCapConW",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a witness is a capability constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Witness a Name -\u003e Bool",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#isCapConW",
        "fct-type": "function",
        "title": "isCapConW"
      },
      "index": {
        "description": "Check whether witness is capability constructor",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "isCapConW",
        "normalized": "Witness a Name-\u003eBool",
        "package": "ddc-core-eval",
        "partial": "Cap Con",
        "signature": "Witness a Name-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:isUnitX",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether an expression is the unit constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp a Name -\u003e Bool",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#isUnitX",
        "fct-type": "function",
        "title": "isUnitX"
      },
      "index": {
        "description": "Check whether an expression is the unit constructor",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "isUnitX",
        "normalized": "Exp a Name-\u003eBool",
        "package": "ddc-core-eval",
        "partial": "Unit",
        "signature": "Exp a Name-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:stripLocX",
      "description": {
        "fct-descr": "\u003cp\u003eTake a store location from an expression, reaching under any \u003ccode\u003eforget\u003c/code\u003e casts.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp a Name -\u003e Maybe Loc",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#stripLocX",
        "fct-type": "function",
        "title": "stripLocX"
      },
      "index": {
        "description": "Take store location from an expression reaching under any forget casts",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "stripLocX",
        "normalized": "Exp a Name-\u003eMaybe Loc",
        "package": "ddc-core-eval",
        "partial": "Loc",
        "signature": "Exp a Name-\u003eMaybe Loc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:tInt",
      "description": {
        "fct-descr": "\u003cp\u003eApplication of the Int type constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Region Name -\u003e Type Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#tInt",
        "fct-type": "function",
        "title": "tInt"
      },
      "index": {
        "description": "Application of the Int type constructor",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "tInt",
        "normalized": "Region Name-\u003eType Name",
        "package": "ddc-core-eval",
        "partial": "Int",
        "signature": "Region Name-\u003eType Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:tList",
      "description": {
        "fct-descr": "\u003cp\u003eApplication of the List type constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Region Name -\u003e Type Name -\u003e Type Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#tList",
        "fct-type": "function",
        "title": "tList"
      },
      "index": {
        "description": "Application of the List type constructor",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "tList",
        "normalized": "Region Name-\u003eType Name-\u003eType Name",
        "package": "ddc-core-eval",
        "partial": "List",
        "signature": "Region Name-\u003eType Name-\u003eType Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:tPair",
      "description": {
        "fct-descr": "\u003cp\u003eApplication of the Pair type constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Region Name -\u003e Type Name -\u003e Type Name -\u003e Type Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#tPair",
        "fct-type": "function",
        "title": "tPair"
      },
      "index": {
        "description": "Application of the Pair type constructor",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "tPair",
        "normalized": "Region Name-\u003eType Name-\u003eType Name-\u003eType Name",
        "package": "ddc-core-eval",
        "partial": "Pair",
        "signature": "Region Name-\u003eType Name-\u003eType Name-\u003eType Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeHandleT",
      "description": {
        "fct-descr": "\u003cp\u003eTake a region handle from a type.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Type Name -\u003e Maybe Rgn",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#takeHandleT",
        "fct-type": "function",
        "title": "takeHandleT"
      },
      "index": {
        "description": "Take region handle from type",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "takeHandleT",
        "normalized": "Type Name-\u003eMaybe Rgn",
        "package": "ddc-core-eval",
        "partial": "Handle",
        "signature": "Type Name-\u003eMaybe Rgn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeHandleX",
      "description": {
        "fct-descr": "\u003cp\u003eTake a region handle from an expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp a Name -\u003e Maybe Rgn",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#takeHandleX",
        "fct-type": "function",
        "title": "takeHandleX"
      },
      "index": {
        "description": "Take region handle from an expression",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "takeHandleX",
        "normalized": "Exp a Name-\u003eMaybe Rgn",
        "package": "ddc-core-eval",
        "partial": "Handle",
        "signature": "Exp a Name-\u003eMaybe Rgn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeIntDC",
      "description": {
        "fct-descr": "\u003cp\u003eTake an integer literal from an data constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "DaCon Name -\u003e Maybe Integer",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#takeIntDC",
        "fct-type": "function",
        "title": "takeIntDC"
      },
      "index": {
        "description": "Take an integer literal from an data constructor",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "takeIntDC",
        "normalized": "DaCon Name-\u003eMaybe Integer",
        "package": "ddc-core-eval",
        "partial": "Int DC",
        "signature": "DaCon Name-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeIntX",
      "description": {
        "fct-descr": "\u003cp\u003eTake an integer literal from an expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp a Name -\u003e Maybe Integer",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#takeIntX",
        "fct-type": "function",
        "title": "takeIntX"
      },
      "index": {
        "description": "Take an integer literal from an expression",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "takeIntX",
        "normalized": "Exp a Name-\u003eMaybe Integer",
        "package": "ddc-core-eval",
        "partial": "Int",
        "signature": "Exp a Name-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeLocX",
      "description": {
        "fct-descr": "\u003cp\u003eTake a store location from an expression.\n   We strip off \u003ccode\u003eforget\u003c/code\u003e casts along the way\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp a Name -\u003e Maybe Loc",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#takeLocX",
        "fct-type": "function",
        "title": "takeLocX"
      },
      "index": {
        "description": "Take store location from an expression We strip off forget casts along the way",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "takeLocX",
        "normalized": "Exp a Name-\u003eMaybe Loc",
        "package": "ddc-core-eval",
        "partial": "Loc",
        "signature": "Exp a Name-\u003eMaybe Loc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:takeMutableX",
      "description": {
        "fct-descr": "\u003cp\u003eTake a witness of mutability from an expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp a Name -\u003e Maybe Rgn",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#takeMutableX",
        "fct-type": "function",
        "title": "takeMutableX"
      },
      "index": {
        "description": "Take witness of mutability from an expression",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "takeMutableX",
        "normalized": "Exp a Name-\u003eMaybe Rgn",
        "package": "ddc-core-eval",
        "partial": "Mutable",
        "signature": "Exp a Name-\u003eMaybe Rgn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:tcInt",
      "description": {
        "fct-descr": "\u003cp\u003eThe integer type constructor\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "TyCon Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#tcInt",
        "fct-type": "function",
        "title": "tcInt"
      },
      "index": {
        "description": "The integer type constructor",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "tcInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wConst",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "a -\u003e Region Name -\u003e Witness a Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wConst",
        "fct-type": "function",
        "title": "wConst"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wConst",
        "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
        "package": "ddc-core-eval",
        "partial": "Const",
        "signature": "a-\u003eRegion Name-\u003eWitness a Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wDistinct",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "a -\u003e Int -\u003e [Region Name] -\u003e Witness a Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wDistinct",
        "fct-type": "function",
        "title": "wDistinct"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wDistinct",
        "normalized": "a-\u003eInt-\u003e[Region Name]-\u003eWitness a Name",
        "package": "ddc-core-eval",
        "partial": "Distinct",
        "signature": "a-\u003eInt-\u003e[Region Name]-\u003eWitness a Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wGlobal",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "a -\u003e Region Name -\u003e Witness a Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wGlobal",
        "fct-type": "function",
        "title": "wGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wGlobal",
        "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
        "package": "ddc-core-eval",
        "partial": "Global",
        "signature": "a-\u003eRegion Name-\u003eWitness a Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wLazy",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "a -\u003e Region Name -\u003e Witness a Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wLazy",
        "fct-type": "function",
        "title": "wLazy"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wLazy",
        "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
        "package": "ddc-core-eval",
        "partial": "Lazy",
        "signature": "a-\u003eRegion Name-\u003eWitness a Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wManifest",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "a -\u003e Region Name -\u003e Witness a Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wManifest",
        "fct-type": "function",
        "title": "wManifest"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wManifest",
        "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
        "package": "ddc-core-eval",
        "partial": "Manifest",
        "signature": "a-\u003eRegion Name-\u003eWitness a Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wMutable",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "a -\u003e Region Name -\u003e Witness a Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wMutable",
        "fct-type": "function",
        "title": "wMutable"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wMutable",
        "normalized": "a-\u003eRegion Name-\u003eWitness a Name",
        "package": "ddc-core-eval",
        "partial": "Mutable",
        "signature": "a-\u003eRegion Name-\u003eWitness a Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcConst",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "WiCon Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wcConst",
        "fct-type": "function",
        "title": "wcConst"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wcConst",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcDistinct",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Int -\u003e WiCon Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wcDistinct",
        "fct-type": "function",
        "title": "wcDistinct"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wcDistinct",
        "normalized": "Int-\u003eWiCon Name",
        "package": "ddc-core-eval",
        "partial": "Distinct",
        "signature": "Int-\u003eWiCon Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcGlobal",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "WiCon Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wcGlobal",
        "fct-type": "function",
        "title": "wcGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wcGlobal",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Global",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcLazy",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "WiCon Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wcLazy",
        "fct-type": "function",
        "title": "wcLazy"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wcLazy",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcManifest",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "WiCon Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wcManifest",
        "fct-type": "function",
        "title": "wcManifest"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wcManifest",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Manifest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:wcMutable",
      "description": {
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "WiCon Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#wcMutable",
        "fct-type": "function",
        "title": "wcMutable"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "wcMutable",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Mutable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Compounds.html#v:xLoc",
      "description": {
        "fct-descr": "\u003cp\u003eMake a location expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Compounds",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Loc -\u003e Type Name -\u003e Exp () Name",
        "fct-source": "src/DDC-Core-Eval-Compounds.html#xLoc",
        "fct-type": "function",
        "title": "xLoc"
      },
      "index": {
        "description": "Make location expression",
        "hierarchy": "DDC Core Eval Compounds",
        "module": "DDC.Core.Eval.Compounds",
        "name": "xLoc",
        "normalized": "Loc-\u003eType Name-\u003eExp()Name",
        "package": "ddc-core-eval",
        "partial": "Loc",
        "signature": "Loc-\u003eType Name-\u003eExp()Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive types and operators for the core language evaluator.\n\u003c/p\u003e\u003cp\u003eThese are only a subset of the primitives supported by the real compiler, there's just\n   enough to experiment with the core language. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Eval.Env",
        "fct-package": "ddc-core-eval",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Eval-Env.html",
        "fct-type": "module",
        "title": "Env"
      },
      "index": {
        "description": "Primitive types and operators for the core language evaluator These are only subset of the primitives supported by the real compiler there just enough to experiment with the core language",
        "hierarchy": "DDC Core Eval Env",
        "module": "DDC.Core.Eval.Env",
        "name": "Env",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:arityOfName",
      "description": {
        "fct-descr": "\u003cp\u003eTake the arity of a primitive name.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Env",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Name -\u003e Maybe Int",
        "fct-source": "src/DDC-Core-Eval-Env.html#arityOfName",
        "fct-type": "function",
        "title": "arityOfName"
      },
      "index": {
        "description": "Take the arity of primitive name",
        "hierarchy": "DDC Core Eval Env",
        "module": "DDC.Core.Eval.Env",
        "name": "arityOfName",
        "normalized": "Name-\u003eMaybe Int",
        "package": "ddc-core-eval",
        "partial": "Of Name",
        "signature": "Name-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:kindOfPrimName",
      "description": {
        "fct-descr": "\u003cp\u003eTake the kind of a primitive name.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the name isn't primitive. \n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Env",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Name -\u003e Maybe (Kind Name)",
        "fct-source": "src/DDC-Core-Eval-Env.html#kindOfPrimName",
        "fct-type": "function",
        "title": "kindOfPrimName"
      },
      "index": {
        "description": "Take the kind of primitive name Returns Nothing if the name isn primitive",
        "hierarchy": "DDC Core Eval Env",
        "module": "DDC.Core.Eval.Env",
        "name": "kindOfPrimName",
        "normalized": "Name-\u003eMaybe(Kind Name)",
        "package": "ddc-core-eval",
        "partial": "Of Prim Name",
        "signature": "Name-\u003eMaybe(Kind Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:primDataDefs",
      "description": {
        "fct-descr": "\u003cp\u003eData type definitions for:\n\u003c/p\u003e\u003cpre\u003e  Type   Constructors\n  ----   ------------\n  Int    0 1 2 3 ...\n  Pair   Pr\n  List   Nil Cons\n\u003c/pre\u003e",
        "fct-module": "DDC.Core.Eval.Env",
        "fct-package": "ddc-core-eval",
        "fct-signature": "DataDefs Name",
        "fct-source": "src/DDC-Core-Eval-Env.html#primDataDefs",
        "fct-type": "function",
        "title": "primDataDefs"
      },
      "index": {
        "description": "Data type definitions for Type Constructors Int Pair Pr List Nil Cons",
        "hierarchy": "DDC Core Eval Env",
        "module": "DDC.Core.Eval.Env",
        "name": "primDataDefs",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Data Defs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:primKindEnv",
      "description": {
        "fct-descr": "\u003cp\u003eKind environment containing kinds of primitive data types.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Env",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Env Name",
        "fct-source": "src/DDC-Core-Eval-Env.html#primKindEnv",
        "fct-type": "function",
        "title": "primKindEnv"
      },
      "index": {
        "description": "Kind environment containing kinds of primitive data types",
        "hierarchy": "DDC Core Eval Env",
        "module": "DDC.Core.Eval.Env",
        "name": "primKindEnv",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Kind Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:primTypeEnv",
      "description": {
        "fct-descr": "\u003cp\u003eType environment containing types of primitive data constructors as well\n   as the following primitive operators:\n\u003c/p\u003e\u003cpre\u003enegInt, addInt, subInt, mulInt, divInt, eqInt, updateInt\u003c/pre\u003e\u003cp\u003eIt also contains types for the primitive capability constructors:\n\u003c/p\u003e\u003cpre\u003eGlobal#, Const#, Mutable#, Lazy#, Manifest#\u003c/pre\u003e",
        "fct-module": "DDC.Core.Eval.Env",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Env Name",
        "fct-source": "src/DDC-Core-Eval-Env.html#primTypeEnv",
        "fct-type": "function",
        "title": "primTypeEnv"
      },
      "index": {
        "description": "Type environment containing types of primitive data constructors as well as the following primitive operators negInt addInt subInt mulInt divInt eqInt updateInt It also contains types for the primitive capability constructors Global Const Mutable Lazy Manifest",
        "hierarchy": "DDC Core Eval Env",
        "module": "DDC.Core.Eval.Env",
        "name": "primTypeEnv",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Type Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Env.html#v:typeOfPrimName",
      "description": {
        "fct-descr": "\u003cp\u003eTake the type of a primitive name.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the name isn't primitive. \n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Env",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Name -\u003e Maybe (Type Name)",
        "fct-source": "src/DDC-Core-Eval-Env.html#typeOfPrimName",
        "fct-type": "function",
        "title": "typeOfPrimName"
      },
      "index": {
        "description": "Take the type of primitive name Returns Nothing if the name isn primitive",
        "hierarchy": "DDC Core Eval Env",
        "module": "DDC.Core.Eval.Env",
        "name": "typeOfPrimName",
        "normalized": "Name-\u003eMaybe(Type Name)",
        "package": "ddc-core-eval",
        "partial": "Of Prim Name",
        "signature": "Name-\u003eMaybe(Type Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Eval-Name.html",
        "fct-type": "module",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "Name",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:Cap",
      "description": {
        "fct-descr": "\u003cp\u003eThese are primitive witnesses that guarantee the associated property\n   of the program. Ostensibly, they are only introduced by the system\n   at runtime, but for testing purposes we can also inject them into\n   the source program.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Name.html#Cap",
        "fct-type": "data",
        "title": "Cap"
      },
      "index": {
        "description": "These are primitive witnesses that guarantee the associated property of the program Ostensibly they are only introduced by the system at runtime but for testing purposes we can also inject them into the source program",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "Cap",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:Loc",
      "description": {
        "fct-descr": "\u003cp\u003eA store location.\n\u003c/p\u003e\u003cp\u003eThese are pretty printed like \u003ccode\u003eL4#\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Name.html#Loc",
        "fct-type": "data",
        "title": "Loc"
      },
      "index": {
        "description": "store location These are pretty printed like L4",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "Loc",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eNames of things recognised by the evaluator.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Name.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "Names of things recognised by the evaluator",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "Name",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:PrimCon",
      "description": {
        "fct-descr": "\u003cp\u003eA primitive constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimCon",
        "fct-type": "data",
        "title": "PrimCon"
      },
      "index": {
        "description": "primitive constructor",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimCon",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:PrimOp",
      "description": {
        "fct-descr": "\u003cp\u003eA primitive operator.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimOp",
        "fct-type": "data",
        "title": "PrimOp"
      },
      "index": {
        "description": "primitive operator",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimOp",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#t:Rgn",
      "description": {
        "fct-descr": "\u003cp\u003eA region handle.\n\u003c/p\u003e\u003cp\u003eThese are pretty printed like \u003ccode\u003eR5#\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Name.html#Rgn",
        "fct-type": "data",
        "title": "Rgn"
      },
      "index": {
        "description": "region handle These are pretty printed like R5",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "Rgn",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Rgn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapConst",
      "description": {
        "fct-descr": "\u003cp\u003eWitness that a region is constant.\n   This lets us purify read and allocation effects on it,\n   and prevents it from being Mutable.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "CapConst",
        "fct-source": "src/DDC-Core-Eval-Name.html#Cap",
        "fct-type": "function",
        "title": "CapConst"
      },
      "index": {
        "description": "Witness that region is constant This lets us purify read and allocation effects on it and prevents it from being Mutable",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "CapConst",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Cap Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapDistinct",
      "description": {
        "fct-descr": "\u003cp\u003eWitness that some regions are distinct\n   This lets us perform aliasing based optimisations.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "CapDistinct Int",
        "fct-source": "src/DDC-Core-Eval-Name.html#Cap",
        "fct-type": "function",
        "title": "CapDistinct"
      },
      "index": {
        "description": "Witness that some regions are distinct This lets us perform aliasing based optimisations",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "CapDistinct",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Cap Distinct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eWitness that a region is global.\n   Global regions live for the duration of the program and are not\n   deallocated in a stack like manner. This lets us hide the use of\n   such regions, and rely on the garbage collector to reclaim the\n   space.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "CapGlobal",
        "fct-source": "src/DDC-Core-Eval-Name.html#Cap",
        "fct-type": "function",
        "title": "CapGlobal"
      },
      "index": {
        "description": "Witness that region is global Global regions live for the duration of the program and are not deallocated in stack like manner This lets us hide the use of such regions and rely on the garbage collector to reclaim the space",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "CapGlobal",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Cap Global",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapLazy",
      "description": {
        "fct-descr": "\u003cp\u003eWitness that a region is lazy.\n   This lets is allocate thunks into the region,\n   and prevents it from being Manifest.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "CapLazy",
        "fct-source": "src/DDC-Core-Eval-Name.html#Cap",
        "fct-type": "function",
        "title": "CapLazy"
      },
      "index": {
        "description": "Witness that region is lazy This lets is allocate thunks into the region and prevents it from being Manifest",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "CapLazy",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Cap Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapManifest",
      "description": {
        "fct-descr": "\u003cp\u003eWitness that a region is manifest.\n   This ensures there are no thunks in the region,\n   which prevents it from being Lazy.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "CapManifest",
        "fct-source": "src/DDC-Core-Eval-Name.html#Cap",
        "fct-type": "function",
        "title": "CapManifest"
      },
      "index": {
        "description": "Witness that region is manifest This ensures there are no thunks in the region which prevents it from being Lazy",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "CapManifest",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Cap Manifest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:CapMutable",
      "description": {
        "fct-descr": "\u003cp\u003eWitness that a region is mutable.\n   This lets us update objects in the region, \n   and prevents it from being Constant.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "CapMutable",
        "fct-source": "src/DDC-Core-Eval-Name.html#Cap",
        "fct-type": "function",
        "title": "CapMutable"
      },
      "index": {
        "description": "Witness that region is mutable This lets us update objects in the region and prevents it from being Constant",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "CapMutable",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Cap Mutable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:Loc",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Loc Int",
        "fct-source": "src/DDC-Core-Eval-Name.html#Loc",
        "fct-type": "function",
        "title": "Loc"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "Loc",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameCap",
      "description": {
        "fct-descr": "\u003cp\u003eStore capabilities.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "NameCap Cap",
        "fct-source": "src/DDC-Core-Eval-Name.html#Name",
        "fct-type": "function",
        "title": "NameCap"
      },
      "index": {
        "description": "Store capabilities",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "NameCap",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameCon",
      "description": {
        "fct-descr": "\u003cp\u003eUser constructors.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "NameCon String",
        "fct-source": "src/DDC-Core-Eval-Name.html#Name",
        "fct-type": "function",
        "title": "NameCon"
      },
      "index": {
        "description": "User constructors",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "NameCon",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameInt",
      "description": {
        "fct-descr": "\u003cp\u003eInteger literals (which data constructors).\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "NameInt Integer",
        "fct-source": "src/DDC-Core-Eval-Name.html#Name",
        "fct-type": "function",
        "title": "NameInt"
      },
      "index": {
        "description": "Integer literals which data constructors",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "NameInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameLoc",
      "description": {
        "fct-descr": "\u003cp\u003eStore locations.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "NameLoc Loc",
        "fct-source": "src/DDC-Core-Eval-Name.html#Name",
        "fct-type": "function",
        "title": "NameLoc"
      },
      "index": {
        "description": "Store locations",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "NameLoc",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NamePrimCon",
      "description": {
        "fct-descr": "\u003cp\u003ePrimitive constructors (eg \u003ccode\u003eList, Nil\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "NamePrimCon PrimCon",
        "fct-source": "src/DDC-Core-Eval-Name.html#Name",
        "fct-type": "function",
        "title": "NamePrimCon"
      },
      "index": {
        "description": "Primitive constructors eg List Nil",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "NamePrimCon",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name Prim Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NamePrimOp",
      "description": {
        "fct-descr": "\u003cp\u003ePrimitive operators    (eg \u003ccode\u003eaddInt, subInt\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "NamePrimOp PrimOp",
        "fct-source": "src/DDC-Core-Eval-Name.html#Name",
        "fct-type": "function",
        "title": "NamePrimOp"
      },
      "index": {
        "description": "Primitive operators eg addInt subInt",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "NamePrimOp",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name Prim Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameRgn",
      "description": {
        "fct-descr": "\u003cp\u003eRegion handles.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "NameRgn Rgn",
        "fct-source": "src/DDC-Core-Eval-Name.html#Name",
        "fct-type": "function",
        "title": "NameRgn"
      },
      "index": {
        "description": "Region handles",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "NameRgn",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name Rgn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:NameVar",
      "description": {
        "fct-descr": "\u003cp\u003eUser variables.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "NameVar String",
        "fct-source": "src/DDC-Core-Eval-Name.html#Name",
        "fct-type": "function",
        "title": "NameVar"
      },
      "index": {
        "description": "User variables",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "NameVar",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Name Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimDaConCons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCons\u003c/code\u003e data constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimDaConCons",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimCon",
        "fct-type": "function",
        "title": "PrimDaConCons"
      },
      "index": {
        "description": "Cons data constructor",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimDaConCons",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Da Con Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimDaConNil",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eNil\u003c/code\u003e data constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimDaConNil",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimCon",
        "fct-type": "function",
        "title": "PrimDaConNil"
      },
      "index": {
        "description": "Nil data constructor",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimDaConNil",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Da Con Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimDaConPr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eP\u003c/code\u003e data construct (pairs).\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimDaConPr",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimCon",
        "fct-type": "function",
        "title": "PrimDaConPr"
      },
      "index": {
        "description": "data construct pairs",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimDaConPr",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Da Con Pr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpAddInt",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimOpAddInt",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOpAddInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimOpAddInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Op Add Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpCopyInt",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimOpCopyInt",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOpCopyInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimOpCopyInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Op Copy Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpDivInt",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimOpDivInt",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOpDivInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimOpDivInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Op Div Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpEqInt",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimOpEqInt",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOpEqInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimOpEqInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Op Eq Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpMulInt",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimOpMulInt",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOpMulInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimOpMulInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Op Mul Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpNegInt",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimOpNegInt",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOpNegInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimOpNegInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Op Neg Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpSubInt",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimOpSubInt",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOpSubInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimOpSubInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Op Sub Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimOpUpdateInt",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimOpUpdateInt",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimOp",
        "fct-type": "function",
        "title": "PrimOpUpdateInt"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimOpUpdateInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Op Update Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimTyConInt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eInt\u003c/code\u003e  type constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimTyConInt",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimCon",
        "fct-type": "function",
        "title": "PrimTyConInt"
      },
      "index": {
        "description": "Int type constructor",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimTyConInt",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Ty Con Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimTyConList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eList\u003c/code\u003e type constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimTyConList",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimCon",
        "fct-type": "function",
        "title": "PrimTyConList"
      },
      "index": {
        "description": "List type constructor",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimTyConList",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Ty Con List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:PrimTyConPair",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePair\u003c/code\u003e type constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "PrimTyConPair",
        "fct-source": "src/DDC-Core-Eval-Name.html#PrimCon",
        "fct-type": "function",
        "title": "PrimTyConPair"
      },
      "index": {
        "description": "Pair type constructor",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "PrimTyConPair",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim Ty Con Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:Rgn",
      "description": {
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Rgn Int",
        "fct-source": "src/DDC-Core-Eval-Name.html#Rgn",
        "fct-type": "function",
        "title": "Rgn"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "Rgn",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Rgn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:lexExpString",
      "description": {
        "fct-descr": "\u003cp\u003eLex a string to tokens, using primitive names.\n\u003c/p\u003e\u003cp\u003eThe first argument gives the starting source line number.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "String -\u003e Int -\u003e String -\u003e [Token (Tok Name)]",
        "fct-source": "src/DDC-Core-Eval-Name.html#lexExpString",
        "fct-type": "function",
        "title": "lexExpString"
      },
      "index": {
        "description": "Lex string to tokens using primitive names The first argument gives the starting source line number",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "lexExpString",
        "normalized": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
        "package": "ddc-core-eval",
        "partial": "Exp String",
        "signature": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:lexModuleString",
      "description": {
        "fct-descr": "\u003cp\u003eLex a string to tokens, using primitive names.\n\u003c/p\u003e\u003cp\u003eThe first argument gives the starting source line number.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "String -\u003e Int -\u003e String -\u003e [Token (Tok Name)]",
        "fct-source": "src/DDC-Core-Eval-Name.html#lexModuleString",
        "fct-type": "function",
        "title": "lexModuleString"
      },
      "index": {
        "description": "Lex string to tokens using primitive names The first argument gives the starting source line number",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "lexModuleString",
        "normalized": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
        "package": "ddc-core-eval",
        "partial": "Module String",
        "signature": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Name.html#v:readName",
      "description": {
        "fct-descr": "\u003cp\u003eRead a primitive name.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Name",
        "fct-package": "ddc-core-eval",
        "fct-signature": "String -\u003e Maybe Name",
        "fct-source": "src/DDC-Core-Eval-Name.html#readName",
        "fct-type": "function",
        "title": "readName"
      },
      "index": {
        "description": "Read primitive name",
        "hierarchy": "DDC Core Eval Name",
        "module": "DDC.Core.Eval.Name",
        "name": "readName",
        "normalized": "String-\u003eMaybe Name",
        "package": "ddc-core-eval",
        "partial": "Name",
        "signature": "String-\u003eMaybe Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSingle step evaluation of primitive operators and constructors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Eval.Prim",
        "fct-package": "ddc-core-eval",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Eval-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "Single step evaluation of primitive operators and constructors",
        "hierarchy": "DDC Core Eval Prim",
        "module": "DDC.Core.Eval.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#v:primDelRegion",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edelRgn\u003c/a\u003e\u003c/code\u003e but accept a region handle wrapped in a \u003ccode\u003e\u003ca\u003eBound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Prim",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Bound Name -\u003e Store -\u003e Maybe Store",
        "fct-source": "src/DDC-Core-Eval-Prim.html#primDelRegion",
        "fct-type": "function",
        "title": "primDelRegion"
      },
      "index": {
        "description": "Like delRgn but accept region handle wrapped in Bound",
        "hierarchy": "DDC Core Eval Prim",
        "module": "DDC.Core.Eval.Prim",
        "name": "primDelRegion",
        "normalized": "Bound Name-\u003eStore-\u003eMaybe Store",
        "package": "ddc-core-eval",
        "partial": "Del Region",
        "signature": "Bound Name-\u003eStore-\u003eMaybe Store"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#v:primNewRegion",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewRgn\u003c/a\u003e\u003c/code\u003e but return the region handle wrapped in a \u003ccode\u003e\u003ca\u003eBound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Prim",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store -\u003e (Store, Bound Name)",
        "fct-source": "src/DDC-Core-Eval-Prim.html#primNewRegion",
        "fct-type": "function",
        "title": "primNewRegion"
      },
      "index": {
        "description": "Like newRgn but return the region handle wrapped in Bound",
        "hierarchy": "DDC Core Eval Prim",
        "module": "DDC.Core.Eval.Prim",
        "name": "primNewRegion",
        "normalized": "Store-\u003e(Store,Bound Name)",
        "package": "ddc-core-eval",
        "partial": "New Region",
        "signature": "Store-\u003e(Store,Bound Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#v:stepPrimCon",
      "description": {
        "fct-descr": "\u003cp\u003eStep a primitive constructor, which allocates an object in the store.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Prim",
        "fct-package": "ddc-core-eval",
        "fct-signature": "DaCon Name-\u003e [Exp () Name]-\u003e Store-\u003e Maybe (Store, Exp () Name)",
        "fct-type": "function",
        "title": "stepPrimCon"
      },
      "index": {
        "description": "Step primitive constructor which allocates an object in the store",
        "hierarchy": "DDC Core Eval Prim",
        "module": "DDC.Core.Eval.Prim",
        "name": "stepPrimCon",
        "normalized": "DaCon Name-\u003e[Exp()Name]-\u003eStore-\u003eMaybe(Store,Exp()Name)",
        "package": "ddc-core-eval",
        "partial": "Prim Con",
        "signature": "DaCon Name-\u003e[Exp()Name]-\u003eStore-\u003eMaybe(Store,Exp()Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Prim.html#v:stepPrimOp",
      "description": {
        "fct-descr": "\u003cp\u003eStep a primitive operator.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Prim",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Name-\u003e [Exp () Name]-\u003e Store-\u003e Maybe (Store, Exp () Name)",
        "fct-type": "function",
        "title": "stepPrimOp"
      },
      "index": {
        "description": "Step primitive operator",
        "hierarchy": "DDC Core Eval Prim",
        "module": "DDC.Core.Eval.Prim",
        "name": "stepPrimOp",
        "normalized": "Name-\u003e[Exp()Name]-\u003eStore-\u003eMaybe(Store,Exp()Name)",
        "package": "ddc-core-eval",
        "partial": "Prim Op",
        "signature": "Name-\u003e[Exp()Name]-\u003eStore-\u003eMaybe(Store,Exp()Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Profile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore language profile for the evaluator.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Eval.Profile",
        "fct-package": "ddc-core-eval",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Eval-Profile.html",
        "fct-type": "module",
        "title": "Profile"
      },
      "index": {
        "description": "Core language profile for the evaluator",
        "hierarchy": "DDC Core Eval Profile",
        "module": "DDC.Core.Eval.Profile",
        "name": "Profile",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Profile.html#v:evalProfile",
      "description": {
        "fct-descr": "\u003cp\u003eCore language fragment that can be directly evaluated.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Profile",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Profile Name",
        "fct-source": "src/DDC-Core-Eval-Profile.html#evalProfile",
        "fct-type": "function",
        "title": "evalProfile"
      },
      "index": {
        "description": "Core language fragment that can be directly evaluated",
        "hierarchy": "DDC Core Eval Profile",
        "module": "DDC.Core.Eval.Profile",
        "name": "evalProfile",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSingle step evalation for the Disciple Core language.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Eval-Step.html",
        "fct-type": "module",
        "title": "Step"
      },
      "index": {
        "description": "Single step evalation for the Disciple Core language",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "Step",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#t:StepResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of stepping some expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "data",
        "title": "StepResult"
      },
      "index": {
        "description": "The result of stepping some expression",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "StepResult",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Step Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepDone",
      "description": {
        "fct-descr": "\u003cp\u003eExpression cannot step and is a (weak) value.\n   We're done already.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "StepDone",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "function",
        "title": "StepDone"
      },
      "index": {
        "description": "Expression cannot step and is weak value We re done already",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "StepDone",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Step Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepMistyped",
      "description": {
        "fct-descr": "\u003cp\u003eExpression is stuck, and we know for sure it's mistyped.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "StepMistyped (Error () Name)",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "function",
        "title": "StepMistyped"
      },
      "index": {
        "description": "Expression is stuck and we know for sure it mistyped",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "StepMistyped",
        "normalized": "StepMistyped(Error()Name)",
        "package": "ddc-core-eval",
        "partial": "Step Mistyped",
        "signature": "StepMistyped(Error()Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepProgress",
      "description": {
        "fct-descr": "\u003cp\u003eExpression progressed to a new state.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "StepProgress Store (Exp () Name)",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "function",
        "title": "StepProgress"
      },
      "index": {
        "description": "Expression progressed to new state",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "StepProgress",
        "normalized": "StepProgress Store(Exp()Name)",
        "package": "ddc-core-eval",
        "partial": "Step Progress",
        "signature": "StepProgress Store(Exp()Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:StepStuck",
      "description": {
        "fct-descr": "\u003cp\u003eExpression cannot step, and is not a (weak) value.\n   The original expression was mistyped,\n   or something is wrong with the interpreter.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "StepStuck",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "function",
        "title": "StepStuck"
      },
      "index": {
        "description": "Expression cannot step and is not weak value The original expression was mistyped or something is wrong with the interpreter",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "StepStuck",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Step Stuck",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:force",
      "description": {
        "fct-descr": "\u003cp\u003eSingle step a core expression to a value.\n\u003c/p\u003e\u003cp\u003eAs opposed to \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e, if the provided expression is the location of a\n   Thunk, then the thunk will be forced.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store-\u003e Exp () Name-\u003e StepResult",
        "fct-type": "function",
        "title": "force"
      },
      "index": {
        "description": "Single step core expression to value As opposed to step if the provided expression is the location of Thunk then the thunk will be forced",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "force",
        "normalized": "Store-\u003eExp()Name-\u003eStepResult",
        "package": "ddc-core-eval",
        "partial": "",
        "signature": "Store-\u003eExp()Name-\u003eStepResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:isValue",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if an expression is a value.\n   Values can't be progressed any further, with either \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store -\u003e Exp a Name -\u003e Bool",
        "fct-source": "src/DDC-Core-Eval-Step.html#isValue",
        "fct-type": "function",
        "title": "isValue"
      },
      "index": {
        "description": "Check if an expression is value Values can be progressed any further with either force or step",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "isValue",
        "normalized": "Store-\u003eExp a Name-\u003eBool",
        "package": "ddc-core-eval",
        "partial": "Value",
        "signature": "Store-\u003eExp a Name-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:isWeakValue",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if an expression is a weak values.\n   These are all the values, and locations that point to thunks.\n\u003c/p\u003e\u003cp\u003eWeak values can be progressed with \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e, but not \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store -\u003e Exp a Name -\u003e Bool",
        "fct-source": "src/DDC-Core-Eval-Step.html#isWeakValue",
        "fct-type": "function",
        "title": "isWeakValue"
      },
      "index": {
        "description": "Check if an expression is weak values These are all the values and locations that point to thunks Weak values can be progressed with force but not step",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "isWeakValue",
        "normalized": "Store-\u003eExp a Name-\u003eBool",
        "package": "ddc-core-eval",
        "partial": "Weak Value",
        "signature": "Store-\u003eExp a Name-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Step.html#v:step",
      "description": {
        "fct-descr": "\u003cp\u003eSingle step a code expression to a weak value.\n\u003c/p\u003e\u003cp\u003eAs opposed to \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e, if the provided expression is the location of a \n   Thunk, then the thunk is not forced.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Step",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store-\u003e Exp () Name-\u003e StepResult",
        "fct-type": "function",
        "title": "step"
      },
      "index": {
        "description": "Single step code expression to weak value As opposed to force if the provided expression is the location of Thunk then the thunk is not forced",
        "hierarchy": "DDC Core Eval Step",
        "module": "DDC.Core.Eval.Step",
        "name": "step",
        "normalized": "Store-\u003eExp()Name-\u003eStepResult",
        "package": "ddc-core-eval",
        "partial": "",
        "signature": "Store-\u003eExp()Name-\u003eStepResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of the store.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Eval-Store.html",
        "fct-type": "module",
        "title": "Store"
      },
      "index": {
        "description": "Definition of the store",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "Store",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#t:Loc",
      "description": {
        "fct-descr": "\u003cp\u003eA store location.\n\u003c/p\u003e\u003cp\u003eThese are pretty printed like \u003ccode\u003eL4#\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Name.html#Loc",
        "fct-type": "data",
        "title": "Loc"
      },
      "index": {
        "description": "store location These are pretty printed like L4",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "Loc",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#t:Rgn",
      "description": {
        "fct-descr": "\u003cp\u003eA region handle.\n\u003c/p\u003e\u003cp\u003eThese are pretty printed like \u003ccode\u003eR5#\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Name.html#Rgn",
        "fct-type": "data",
        "title": "Rgn"
      },
      "index": {
        "description": "region handle These are pretty printed like R5",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "Rgn",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Rgn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#t:SBind",
      "description": {
        "fct-descr": "\u003cp\u003eStore binding.\n   These are naked objects that can be allocated directly into the heap.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Store.html#SBind",
        "fct-type": "data",
        "title": "SBind"
      },
      "index": {
        "description": "Store binding These are naked objects that can be allocated directly into the heap",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "SBind",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "SBind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#t:Store",
      "description": {
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Store.html#Store",
        "fct-type": "data",
        "title": "Store"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "Store",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:Loc",
      "description": {
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Loc Int",
        "fct-source": "src/DDC-Core-Eval-Name.html#Loc",
        "fct-type": "function",
        "title": "Loc"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "Loc",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:Rgn",
      "description": {
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Rgn Int",
        "fct-source": "src/DDC-Core-Eval-Name.html#Rgn",
        "fct-type": "function",
        "title": "Rgn"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "Rgn",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Rgn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:SLams",
      "description": {
        "fct-descr": "\u003cp\u003eLambda abstraction, used for recursive bindings.\n   The flag indicates whether each binder is level-1 (True) or level-0 (False).\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "SLams",
        "fct-source": "src/DDC-Core-Eval-Store.html#SBind",
        "fct-type": "function",
        "title": "SLams"
      },
      "index": {
        "description": "Lambda abstraction used for recursive bindings The flag indicates whether each binder is level-1 True or level-0 False",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "SLams",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "SLams",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:SObj",
      "description": {
        "fct-descr": "\u003cp\u003eAn algebraic data constructor.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "SObj",
        "fct-source": "src/DDC-Core-Eval-Store.html#SBind",
        "fct-type": "function",
        "title": "SObj"
      },
      "index": {
        "description": "An algebraic data constructor",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "SObj",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "SObj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:SThunk",
      "description": {
        "fct-descr": "\u003cp\u003eA thunk, used for lazy evaluation.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "SThunk",
        "fct-source": "src/DDC-Core-Eval-Store.html#SBind",
        "fct-type": "function",
        "title": "SThunk"
      },
      "index": {
        "description": "thunk used for lazy evaluation",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "SThunk",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "SThunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:Store",
      "description": {
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store",
        "fct-source": "src/DDC-Core-Eval-Store.html#Store",
        "fct-type": "function",
        "title": "Store"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "Store",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:addBind",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a store binding to the store, at the given location.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Loc -\u003e Rgn -\u003e Type Name -\u003e SBind -\u003e Store -\u003e Store",
        "fct-source": "src/DDC-Core-Eval-Store.html#addBind",
        "fct-type": "function",
        "title": "addBind"
      },
      "index": {
        "description": "Add store binding to the store at the given location",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "addBind",
        "normalized": "Loc-\u003eRgn-\u003eType Name-\u003eSBind-\u003eStore-\u003eStore",
        "package": "ddc-core-eval",
        "partial": "Bind",
        "signature": "Loc-\u003eRgn-\u003eType Name-\u003eSBind-\u003eStore-\u003eStore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:allocBind",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a new binding into the given region,\n    returning the new location.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Rgn -\u003e Type Name -\u003e SBind -\u003e Store -\u003e (Store, Loc)",
        "fct-source": "src/DDC-Core-Eval-Store.html#allocBind",
        "fct-type": "function",
        "title": "allocBind"
      },
      "index": {
        "description": "Allocate new binding into the given region returning the new location",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "allocBind",
        "normalized": "Rgn-\u003eType Name-\u003eSBind-\u003eStore-\u003e(Store,Loc)",
        "package": "ddc-core-eval",
        "partial": "Bind",
        "signature": "Rgn-\u003eType Name-\u003eSBind-\u003eStore-\u003e(Store,Loc)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:allocBinds",
      "description": {
        "fct-descr": "\u003cp\u003eAlloc some recursive bindings into the given region, \n     returning the new locations.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "[[Loc] -\u003e (Rgn, Type Name, SBind)] -\u003e Store -\u003e (Store, [Loc])",
        "fct-source": "src/DDC-Core-Eval-Store.html#allocBinds",
        "fct-type": "function",
        "title": "allocBinds"
      },
      "index": {
        "description": "Alloc some recursive bindings into the given region returning the new locations",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "allocBinds",
        "normalized": "[[Loc]-\u003e(Rgn,Type Name,SBind)]-\u003eStore-\u003e(Store,[Loc])",
        "package": "ddc-core-eval",
        "partial": "Binds",
        "signature": "[[Loc]-\u003e(Rgn,Type Name,SBind)]-\u003eStore-\u003e(Store,[Loc])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:delRgn",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a region, removing all its bindings.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Rgn -\u003e Store -\u003e Store",
        "fct-source": "src/DDC-Core-Eval-Store.html#delRgn",
        "fct-type": "function",
        "title": "delRgn"
      },
      "index": {
        "description": "Delete region removing all its bindings",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "delRgn",
        "normalized": "Rgn-\u003eStore-\u003eStore",
        "package": "ddc-core-eval",
        "partial": "Rgn",
        "signature": "Rgn-\u003eStore-\u003eStore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:hasRgn",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a store contains the given region.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store -\u003e Rgn -\u003e Bool",
        "fct-source": "src/DDC-Core-Eval-Store.html#hasRgn",
        "fct-type": "function",
        "title": "hasRgn"
      },
      "index": {
        "description": "Check whether store contains the given region",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "hasRgn",
        "normalized": "Store-\u003eRgn-\u003eBool",
        "package": "ddc-core-eval",
        "partial": "Rgn",
        "signature": "Store-\u003eRgn-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:initial",
      "description": {
        "fct-descr": "\u003cp\u003eInitial store containing the preallocated regions and bindings.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store",
        "fct-source": "src/DDC-Core-Eval-Store.html#initial",
        "fct-type": "function",
        "title": "initial"
      },
      "index": {
        "description": "Initial store containing the preallocated regions and bindings",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "initial",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:isUnitOrLocX",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether an expression is the unit constructor, \n   or its static heap location.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp a Name -\u003e Bool",
        "fct-source": "src/DDC-Core-Eval-Store.html#isUnitOrLocX",
        "fct-type": "function",
        "title": "isUnitOrLocX"
      },
      "index": {
        "description": "Check whether an expression is the unit constructor or its static heap location",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "isUnitOrLocX",
        "normalized": "Exp a Name-\u003eBool",
        "package": "ddc-core-eval",
        "partial": "Unit Or Loc",
        "signature": "Exp a Name-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:locUnit",
      "description": {
        "fct-descr": "\u003cp\u003eLocation of the static unit object.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Loc",
        "fct-source": "src/DDC-Core-Eval-Store.html#locUnit",
        "fct-type": "function",
        "title": "locUnit"
      },
      "index": {
        "description": "Location of the static unit object",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "locUnit",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:lookupBind",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a the binding for a location.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Loc -\u003e Store -\u003e Maybe SBind",
        "fct-source": "src/DDC-Core-Eval-Store.html#lookupBind",
        "fct-type": "function",
        "title": "lookupBind"
      },
      "index": {
        "description": "Lookup the binding for location",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "lookupBind",
        "normalized": "Loc-\u003eStore-\u003eMaybe SBind",
        "package": "ddc-core-eval",
        "partial": "Bind",
        "signature": "Loc-\u003eStore-\u003eMaybe SBind"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:lookupRegionTypeBind",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the region handle, type and binding for a location.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Loc -\u003e Store -\u003e Maybe (Rgn, Type Name, SBind)",
        "fct-source": "src/DDC-Core-Eval-Store.html#lookupRegionTypeBind",
        "fct-type": "function",
        "title": "lookupRegionTypeBind"
      },
      "index": {
        "description": "Lookup the region handle type and binding for location",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "lookupRegionTypeBind",
        "normalized": "Loc-\u003eStore-\u003eMaybe(Rgn,Type Name,SBind)",
        "package": "ddc-core-eval",
        "partial": "Region Type Bind",
        "signature": "Loc-\u003eStore-\u003eMaybe(Rgn,Type Name,SBind)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:lookupTypeOfLoc",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the type of a store location.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Loc -\u003e Store -\u003e Maybe (Type Name)",
        "fct-source": "src/DDC-Core-Eval-Store.html#lookupTypeOfLoc",
        "fct-type": "function",
        "title": "lookupTypeOfLoc"
      },
      "index": {
        "description": "Lookup the type of store location",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "lookupTypeOfLoc",
        "normalized": "Loc-\u003eStore-\u003eMaybe(Type Name)",
        "package": "ddc-core-eval",
        "partial": "Type Of Loc",
        "signature": "Loc-\u003eStore-\u003eMaybe(Type Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:newLoc",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new location in the store.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store -\u003e (Store, Loc)",
        "fct-source": "src/DDC-Core-Eval-Store.html#newLoc",
        "fct-type": "function",
        "title": "newLoc"
      },
      "index": {
        "description": "Create new location in the store",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "newLoc",
        "normalized": "Store-\u003e(Store,Loc)",
        "package": "ddc-core-eval",
        "partial": "Loc",
        "signature": "Store-\u003e(Store,Loc)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:newLocs",
      "description": {
        "fct-descr": "\u003cp\u003eCreate several new locations in the store.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Int -\u003e Store -\u003e (Store, [Loc])",
        "fct-source": "src/DDC-Core-Eval-Store.html#newLocs",
        "fct-type": "function",
        "title": "newLocs"
      },
      "index": {
        "description": "Create several new locations in the store",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "newLocs",
        "normalized": "Int-\u003eStore-\u003e(Store,[Loc])",
        "package": "ddc-core-eval",
        "partial": "Locs",
        "signature": "Int-\u003eStore-\u003e(Store,[Loc])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:newRgn",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new region in the store.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store -\u003e (Store, Rgn)",
        "fct-source": "src/DDC-Core-Eval-Store.html#newRgn",
        "fct-type": "function",
        "title": "newRgn"
      },
      "index": {
        "description": "Create new region in the store",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "newRgn",
        "normalized": "Store-\u003e(Store,Rgn)",
        "package": "ddc-core-eval",
        "partial": "Rgn",
        "signature": "Store-\u003e(Store,Rgn)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:newRgns",
      "description": {
        "fct-descr": "\u003cp\u003eCreate several new regions in the store\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Int -\u003e Store -\u003e (Store, [Rgn])",
        "fct-source": "src/DDC-Core-Eval-Store.html#newRgns",
        "fct-type": "function",
        "title": "newRgns"
      },
      "index": {
        "description": "Create several new regions in the store",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "newRgns",
        "normalized": "Int-\u003eStore-\u003e(Store,[Rgn])",
        "package": "ddc-core-eval",
        "partial": "Rgns",
        "signature": "Int-\u003eStore-\u003e(Store,[Rgn])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindDataArgs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "[Loc]",
        "fct-source": "src/DDC-Core-Eval-Store.html#SBind",
        "fct-type": "function",
        "title": "sbindDataArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "sbindDataArgs",
        "normalized": "[Loc]",
        "package": "ddc-core-eval",
        "partial": "Data Args",
        "signature": "[Loc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindDataTag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "DaCon Name",
        "fct-source": "src/DDC-Core-Eval-Store.html#SBind",
        "fct-type": "function",
        "title": "sbindDataTag"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "sbindDataTag",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Data Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindLamBinds",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "[(Bool, Bind Name)]",
        "fct-source": "src/DDC-Core-Eval-Store.html#SBind",
        "fct-type": "function",
        "title": "sbindLamBinds"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "sbindLamBinds",
        "normalized": "[(Bool,Bind Name)]",
        "package": "ddc-core-eval",
        "partial": "Lam Binds",
        "signature": "[(Bool,Bind Name)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindLamBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp () Name",
        "fct-source": "src/DDC-Core-Eval-Store.html#SBind",
        "fct-type": "function",
        "title": "sbindLamBody"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "sbindLamBody",
        "normalized": "Exp()Name",
        "package": "ddc-core-eval",
        "partial": "Lam Body",
        "signature": "Exp()Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:sbindThunkExp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Exp () Name",
        "fct-source": "src/DDC-Core-Eval-Store.html#SBind",
        "fct-type": "function",
        "title": "sbindThunkExp"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "sbindThunkExp",
        "normalized": "Exp()Name",
        "package": "ddc-core-eval",
        "partial": "Thunk Exp",
        "signature": "Exp()Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:setGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eSet a region as being global.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Rgn -\u003e Store -\u003e Store",
        "fct-source": "src/DDC-Core-Eval-Store.html#setGlobal",
        "fct-type": "function",
        "title": "setGlobal"
      },
      "index": {
        "description": "Set region as being global",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "setGlobal",
        "normalized": "Rgn-\u003eStore-\u003eStore",
        "package": "ddc-core-eval",
        "partial": "Global",
        "signature": "Rgn-\u003eStore-\u003eStore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeBinds",
      "description": {
        "fct-descr": "\u003cp\u003eMap of locations to store bindings,\n   their types, \n   and the handle for the regions they're in.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Map Loc (Rgn, Type Name, SBind)",
        "fct-source": "src/DDC-Core-Eval-Store.html#Store",
        "fct-type": "function",
        "title": "storeBinds"
      },
      "index": {
        "description": "Map of locations to store bindings their types and the handle for the regions they re in",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "storeBinds",
        "normalized": "Map Loc(Rgn,Type Name,SBind)",
        "package": "ddc-core-eval",
        "partial": "Binds",
        "signature": "Map Loc(Rgn,Type Name,SBind)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eRegions that are marked as global, and are not\n   deallocated with a stack discipline.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Set Rgn",
        "fct-source": "src/DDC-Core-Eval-Store.html#Store",
        "fct-type": "function",
        "title": "storeGlobal"
      },
      "index": {
        "description": "Regions that are marked as global and are not deallocated with stack discipline",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "storeGlobal",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Global",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeNextLoc",
      "description": {
        "fct-descr": "\u003cp\u003eNext store location to allocate.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Eval-Store.html#Store",
        "fct-type": "function",
        "title": "storeNextLoc"
      },
      "index": {
        "description": "Next store location to allocate",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "storeNextLoc",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Next Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeNextRgn",
      "description": {
        "fct-descr": "\u003cp\u003eNext region handle to allocate.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Int",
        "fct-source": "src/DDC-Core-Eval-Store.html#Store",
        "fct-type": "function",
        "title": "storeNextRgn"
      },
      "index": {
        "description": "Next region handle to allocate",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "storeNextRgn",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Next Rgn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval-Store.html#v:storeRegions",
      "description": {
        "fct-descr": "\u003cp\u003eRegion handles already allocated.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval.Store",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Set Rgn",
        "fct-source": "src/DDC-Core-Eval-Store.html#Store",
        "fct-type": "function",
        "title": "storeRegions"
      },
      "index": {
        "description": "Region handles already allocated",
        "hierarchy": "DDC Core Eval Store",
        "module": "DDC.Core.Eval.Store",
        "name": "storeRegions",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Regions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSingle step evaluator for the Disciple Core language.\n\u003c/p\u003e\u003cp\u003eThis is a direct implementation of the operational semantics and is by no\n   means fast, or a substitute for a real interpreter. Programs run with this\n   evaluator will have an asymptotic complexity much worse than if they were\n   compiled. This evaluator is intended for experimenting with the language\n   semantics, and not running actual programs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Core.Eval",
        "fct-package": "ddc-core-eval",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Eval.html",
        "fct-type": "module",
        "title": "Eval"
      },
      "index": {
        "description": "Single step evaluator for the Disciple Core language This is direct implementation of the operational semantics and is by no means fast or substitute for real interpreter Programs run with this evaluator will have an asymptotic complexity much worse than if they were compiled This evaluator is intended for experimenting with the language semantics and not running actual programs",
        "hierarchy": "DDC Core Eval",
        "module": "DDC.Core.Eval",
        "name": "Eval",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Eval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#t:StepResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of stepping some expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval",
        "fct-package": "ddc-core-eval",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "data",
        "title": "StepResult"
      },
      "index": {
        "description": "The result of stepping some expression",
        "hierarchy": "DDC Core Eval",
        "module": "DDC.Core.Eval",
        "name": "StepResult",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Step Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:StepDone",
      "description": {
        "fct-descr": "\u003cp\u003eExpression cannot step and is a (weak) value.\n   We're done already.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval",
        "fct-package": "ddc-core-eval",
        "fct-signature": "StepDone",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "function",
        "title": "StepDone"
      },
      "index": {
        "description": "Expression cannot step and is weak value We re done already",
        "hierarchy": "DDC Core Eval",
        "module": "DDC.Core.Eval",
        "name": "StepDone",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Step Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:StepMistyped",
      "description": {
        "fct-descr": "\u003cp\u003eExpression is stuck, and we know for sure it's mistyped.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval",
        "fct-package": "ddc-core-eval",
        "fct-signature": "StepMistyped (Error () Name)",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "function",
        "title": "StepMistyped"
      },
      "index": {
        "description": "Expression is stuck and we know for sure it mistyped",
        "hierarchy": "DDC Core Eval",
        "module": "DDC.Core.Eval",
        "name": "StepMistyped",
        "normalized": "StepMistyped(Error()Name)",
        "package": "ddc-core-eval",
        "partial": "Step Mistyped",
        "signature": "StepMistyped(Error()Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:StepProgress",
      "description": {
        "fct-descr": "\u003cp\u003eExpression progressed to a new state.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval",
        "fct-package": "ddc-core-eval",
        "fct-signature": "StepProgress Store (Exp () Name)",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "function",
        "title": "StepProgress"
      },
      "index": {
        "description": "Expression progressed to new state",
        "hierarchy": "DDC Core Eval",
        "module": "DDC.Core.Eval",
        "name": "StepProgress",
        "normalized": "StepProgress Store(Exp()Name)",
        "package": "ddc-core-eval",
        "partial": "Step Progress",
        "signature": "StepProgress Store(Exp()Name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:StepStuck",
      "description": {
        "fct-descr": "\u003cp\u003eExpression cannot step, and is not a (weak) value.\n   The original expression was mistyped,\n   or something is wrong with the interpreter.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval",
        "fct-package": "ddc-core-eval",
        "fct-signature": "StepStuck",
        "fct-source": "src/DDC-Core-Eval-Step.html#StepResult",
        "fct-type": "function",
        "title": "StepStuck"
      },
      "index": {
        "description": "Expression cannot step and is not weak value The original expression was mistyped or something is wrong with the interpreter",
        "hierarchy": "DDC Core Eval",
        "module": "DDC.Core.Eval",
        "name": "StepStuck",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Step Stuck",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:evalProfile",
      "description": {
        "fct-descr": "\u003cp\u003eCore language fragment that can be directly evaluated.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Profile Name",
        "fct-source": "src/DDC-Core-Eval-Profile.html#evalProfile",
        "fct-type": "function",
        "title": "evalProfile"
      },
      "index": {
        "description": "Core language fragment that can be directly evaluated",
        "hierarchy": "DDC Core Eval",
        "module": "DDC.Core.Eval",
        "name": "evalProfile",
        "normalized": "",
        "package": "ddc-core-eval",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:force",
      "description": {
        "fct-descr": "\u003cp\u003eSingle step a core expression to a value.\n\u003c/p\u003e\u003cp\u003eAs opposed to \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e, if the provided expression is the location of a\n   Thunk, then the thunk will be forced.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store-\u003e Exp () Name-\u003e StepResult",
        "fct-type": "function",
        "title": "force"
      },
      "index": {
        "description": "Single step core expression to value As opposed to step if the provided expression is the location of Thunk then the thunk will be forced",
        "hierarchy": "DDC Core Eval",
        "module": "DDC.Core.Eval",
        "name": "force",
        "normalized": "Store-\u003eExp()Name-\u003eStepResult",
        "package": "ddc-core-eval",
        "partial": "",
        "signature": "Store-\u003eExp()Name-\u003eStepResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-eval/docs/DDC-Core-Eval.html#v:step",
      "description": {
        "fct-descr": "\u003cp\u003eSingle step a code expression to a weak value.\n\u003c/p\u003e\u003cp\u003eAs opposed to \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e, if the provided expression is the location of a \n   Thunk, then the thunk is not forced.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Eval",
        "fct-package": "ddc-core-eval",
        "fct-signature": "Store-\u003e Exp () Name-\u003e StepResult",
        "fct-type": "function",
        "title": "step"
      },
      "index": {
        "description": "Single step code expression to weak value As opposed to force if the provided expression is the location of Thunk then the thunk is not forced",
        "hierarchy": "DDC Core Eval",
        "module": "DDC.Core.Eval",
        "name": "step",
        "normalized": "Store-\u003eExp()Name-\u003eStepResult",
        "package": "ddc-core-eval",
        "partial": "",
        "signature": "Store-\u003eExp()Name-\u003eStepResult"
      }
    }
  }
]