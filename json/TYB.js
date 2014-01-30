[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the code for \"Template Your Boilerplate\" under review at the Haskell Symposium 2012.\n\u003c/p\u003e\u003cp\u003eA draft copy of that paper is available at \u003ca\u003ehttp://cs.pdx.edu/~adamsmic/projects/tyb/TYB.pdf\u003c/a\u003e\nand provides more thorough documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "This is the code for Template Your Boilerplate under review at the Haskell Symposium draft copy of that paper is available at http cs.pdx.edu adamsmic projects tyb TYB.pdf and provides more thorough documentation",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "TH",
        "normalized": "",
        "package": "TYB",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:constructorsOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the constructors of a given type.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if the type is primitive.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "Type -\u003e m (Maybe [(Name, [Type])])",
        "fct-source": "src/Data-Generics-TH.html#constructorsOf",
        "fct-type": "function",
        "title": "constructorsOf"
      },
      "index": {
        "description": "Returns the constructors of given type Returns Nothing if the type is primitive",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "constructorsOf",
        "normalized": "Type-\u003ea(Maybe[(Name,[Type])])",
        "package": "TYB",
        "partial": "Of",
        "signature": "Type-\u003em(Maybe[(Name,[Type])])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:eqType",
      "description": {
        "fct-descr": "\u003cp\u003eTests if two types are equal modulo type synonyms and kind\n annotations.  Naive equality would fail to equate \u003ca\u003eString\u003c/a\u003e and\n \u003ca\u003e[Char]\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "m Type -\u003e Type -\u003e m Bool",
        "fct-source": "src/Data-Generics-TH.html#eqType",
        "fct-type": "function",
        "title": "eqType"
      },
      "index": {
        "description": "Tests if two types are equal modulo type synonyms and kind annotations Naive equality would fail to equate String and Char",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "eqType",
        "normalized": "a Type-\u003eType-\u003ea Bool",
        "package": "TYB",
        "partial": "Type",
        "signature": "m Type-\u003eType-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:eqTypes",
      "description": {
        "fct-descr": "\u003cp\u003eTest if any of a list of types is equal to a particular type\n modulo type synonyms and kind annotations.  Useful when multiple\n types share the same type-specific behavior.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "[m Type] -\u003e Type -\u003e m Bool",
        "fct-source": "src/Data-Generics-TH.html#eqTypes",
        "fct-type": "function",
        "title": "eqTypes"
      },
      "index": {
        "description": "Test if any of list of types is equal to particular type modulo type synonyms and kind annotations Useful when multiple types share the same type-specific behavior",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "eqTypes",
        "normalized": "[a Type]-\u003eType-\u003ea Bool",
        "package": "TYB",
        "partial": "Types",
        "signature": "[m Type]-\u003eType-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everything",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive query (bottom-up).\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "m Exp-\u003e (Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everything"
      },
      "index": {
        "description": "Generic recursive query bottom-up",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everything",
        "normalized": "a Exp-\u003e(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "m Exp-\u003e(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingAccL",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive query with left-associative accumulation.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e Q Exp)-\u003e Q Type -\u003e Q Exp",
        "fct-type": "function",
        "title": "everythingAccL"
      },
      "index": {
        "description": "Generic recursive query with left-associative accumulation",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingAccL",
        "normalized": "(Type-\u003eQ Exp)-\u003eQ Type-\u003eQ Exp",
        "package": "TYB",
        "partial": "Acc",
        "signature": "(Type-\u003eQ Exp)-\u003eQ Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingAccL-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive query with strict left-associative accumulation\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e Q Exp)-\u003e Q Type -\u003e Q Exp",
        "fct-type": "function",
        "title": "everythingAccL'"
      },
      "index": {
        "description": "Generic recursive query with strict left-associative accumulation",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingAccL'",
        "normalized": "(Type-\u003eQ Exp)-\u003eQ Type-\u003eQ Exp",
        "package": "TYB",
        "partial": "Acc L'",
        "signature": "(Type-\u003eQ Exp)-\u003eQ Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingAccR",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive query with right-associative accumulation\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e Q Exp)-\u003e Q Type -\u003e Q Exp",
        "fct-type": "function",
        "title": "everythingAccR"
      },
      "index": {
        "description": "Generic recursive query with right-associative accumulation",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingAccR",
        "normalized": "(Type-\u003eQ Exp)-\u003eQ Type-\u003eQ Exp",
        "package": "TYB",
        "partial": "Acc",
        "signature": "(Type-\u003eQ Exp)-\u003eQ Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingBut",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive query with selective traversal\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "m Exp-\u003e (Type -\u003e m (Exp, Bool))-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everythingBut"
      },
      "index": {
        "description": "Generic recursive query with selective traversal",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingBut",
        "normalized": "a Exp-\u003e(Type-\u003ea(Exp,Bool))-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "But",
        "signature": "m Exp-\u003e(Type-\u003em(Exp,Bool))-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingButAccL",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive query with left-associative accumulation and selective traversal\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e Q (Exp, Bool))-\u003e Q Type -\u003e Q Exp",
        "fct-type": "function",
        "title": "everythingButAccL"
      },
      "index": {
        "description": "Generic recursive query with left-associative accumulation and selective traversal",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingButAccL",
        "normalized": "(Type-\u003eQ(Exp,Bool))-\u003eQ Type-\u003eQ Exp",
        "package": "TYB",
        "partial": "But Acc",
        "signature": "(Type-\u003eQ(Exp,Bool))-\u003eQ Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingButAccL-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive query with strict left-associative accumulation and selective traversal\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e Q (Exp, Bool))-\u003e Q Type -\u003e Q Exp",
        "fct-type": "function",
        "title": "everythingButAccL'"
      },
      "index": {
        "description": "Generic recursive query with strict left-associative accumulation and selective traversal",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingButAccL'",
        "normalized": "(Type-\u003eQ(Exp,Bool))-\u003eQ Type-\u003eQ Exp",
        "package": "TYB",
        "partial": "But Acc L'",
        "signature": "(Type-\u003eQ(Exp,Bool))-\u003eQ Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingButAccR",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive query with right-associative accumulation and selective traversal\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e Q (Exp, Bool))-\u003e Q Type -\u003e Q Exp",
        "fct-type": "function",
        "title": "everythingButAccR"
      },
      "index": {
        "description": "Generic recursive query with right-associative accumulation and selective traversal",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingButAccR",
        "normalized": "(Type-\u003eQ(Exp,Bool))-\u003eQ Type-\u003eQ Exp",
        "package": "TYB",
        "partial": "But Acc",
        "signature": "(Type-\u003eQ(Exp,Bool))-\u003eQ Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingForL",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive traversal using left-associative accumulation\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "Name-\u003e Q Type -\u003e Q Exp",
        "fct-type": "function",
        "title": "everythingForL"
      },
      "index": {
        "description": "Generic recursive traversal using left-associative accumulation",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingForL",
        "normalized": "Name-\u003eQ Type-\u003eQ Exp",
        "package": "TYB",
        "partial": "For",
        "signature": "Name-\u003eQ Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingForL-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive traversal using strict left-associative accumulation\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "Name-\u003e Q Type -\u003e Q Exp",
        "fct-type": "function",
        "title": "everythingForL'"
      },
      "index": {
        "description": "Generic recursive traversal using strict left-associative accumulation",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingForL'",
        "normalized": "Name-\u003eQ Type-\u003eQ Exp",
        "package": "TYB",
        "partial": "For L'",
        "signature": "Name-\u003eQ Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everythingForR",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive traversal using right-associative accumulation\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "Name-\u003e Q Type -\u003e Q Exp",
        "fct-type": "function",
        "title": "everythingForR"
      },
      "index": {
        "description": "Generic recursive traversal using right-associative accumulation",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everythingForR",
        "normalized": "Name-\u003eQ Type-\u003eQ Exp",
        "package": "TYB",
        "partial": "For",
        "signature": "Name-\u003eQ Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everywhere",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive transformation (bottom-up)\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everywhere"
      },
      "index": {
        "description": "Generic recursive transformation bottom-up",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everywhere",
        "normalized": "(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everywhere-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive transformation (top-down)\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everywhere'"
      },
      "index": {
        "description": "Generic recursive transformation top-down",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everywhere'",
        "normalized": "(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everywhereBut",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive transformation (bottom-up) with selective traversal.\n Skips traversal when a given query returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Bool)-\u003e (Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everywhereBut"
      },
      "index": {
        "description": "Generic recursive transformation bottom-up with selective traversal Skips traversal when given query returns True",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everywhereBut",
        "normalized": "(Type-\u003ea Bool)-\u003e(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "But",
        "signature": "(Type-\u003em Bool)-\u003e(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everywhereButM-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive monadic transformation (top-down) with selective traversal.\n Skips traversal when a given query returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Bool)-\u003e (Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everywhereButM'"
      },
      "index": {
        "description": "Generic recursive monadic transformation top-down with selective traversal Skips traversal when given query returns True",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everywhereButM'",
        "normalized": "(Type-\u003ea Bool)-\u003e(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "But M'",
        "signature": "(Type-\u003em Bool)-\u003e(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everywhereFor",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive transformation (bottom-up) with selective\n traversal.  Recurs on only types that can contain a type with type\n specific behavior.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "Name-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everywhereFor"
      },
      "index": {
        "description": "Generic recursive transformation bottom-up with selective traversal Recurs on only types that can contain type with type specific behavior",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everywhereFor",
        "normalized": "Name-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "For",
        "signature": "Name-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everywhereForM",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive monadic transformation (bottom-up) with\n selective traversal.  Recurs on only types that can contain a type\n with type specific behavior.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "Name-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everywhereForM"
      },
      "index": {
        "description": "Generic recursive monadic transformation bottom-up with selective traversal Recurs on only types that can contain type with type specific behavior",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everywhereForM",
        "normalized": "Name-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "For",
        "signature": "Name-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everywhereM",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive monadic transformation (bottom-up)\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everywhereM"
      },
      "index": {
        "description": "Generic recursive monadic transformation bottom-up",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everywhereM",
        "normalized": "(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:everywhereM-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive monadic transformation (top-down)\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "everywhereM'"
      },
      "index": {
        "description": "Generic recursive monadic transformation top-down",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "everywhereM'",
        "normalized": "(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "M'",
        "signature": "(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:extE",
      "description": {
        "fct-descr": "\u003cp\u003eExtends a generic operation with type specific behavior.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m exp)-\u003e (Type -\u003e m Bool, m exp)-\u003e Type -\u003e m exp",
        "fct-type": "function",
        "title": "extE"
      },
      "index": {
        "description": "Extends generic operation with type specific behavior",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "extE",
        "normalized": "(Type-\u003ea b)-\u003e(Type-\u003ea Bool,a b)-\u003eType-\u003ea b",
        "package": "TYB",
        "partial": "",
        "signature": "(Type-\u003em exp)-\u003e(Type-\u003em Bool,m exp)-\u003eType-\u003em exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:extE-39-",
      "description": {
        "fct-descr": "\u003cp\u003eExtends a generic operation with type specific behavior.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m exp)-\u003e (Type -\u003e m Bool, Type -\u003e m exp)-\u003e Type -\u003e m exp",
        "fct-type": "function",
        "title": "extE'"
      },
      "index": {
        "description": "Extends generic operation with type specific behavior",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "extE'",
        "normalized": "(Type-\u003ea b)-\u003e(Type-\u003ea Bool,Type-\u003ea b)-\u003eType-\u003ea b",
        "package": "TYB",
        "partial": "E'",
        "signature": "(Type-\u003em exp)-\u003e(Type-\u003em Bool,Type-\u003em exp)-\u003eType-\u003em exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:extN",
      "description": {
        "fct-descr": "\u003cp\u003eExtends a generic operation with type specific behavior based on the type of the given name.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Exp)-\u003e Name-\u003e Type -\u003e m Exp",
        "fct-type": "function",
        "title": "extN"
      },
      "index": {
        "description": "Extends generic operation with type specific behavior based on the type of the given name",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "extN",
        "normalized": "(Type-\u003ea Exp)-\u003eName-\u003eType-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(Type-\u003em Exp)-\u003eName-\u003eType-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:inType",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einType t1 t2 = True\u003c/code\u003e iff \u003ccode\u003et1\u003c/code\u003e is (even recursively) inside \u003ccode\u003et2\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "m Type -\u003e Type -\u003e m Bool",
        "fct-source": "src/Data-Generics-TH.html#inType",
        "fct-type": "function",
        "title": "inType"
      },
      "index": {
        "description": "inType t1 t2 True iff t1 is even recursively inside t2",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "inType",
        "normalized": "a Type-\u003eType-\u003ea Bool",
        "package": "TYB",
        "partial": "Type",
        "signature": "m Type-\u003eType-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:inTypes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einTypes ts t2 = True\u003c/code\u003e iff any of \u003ccode\u003ets\u003c/code\u003e is (even recursively) inside \u003ccode\u003et2\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "[m Type] -\u003e Type -\u003e m Bool",
        "fct-source": "src/Data-Generics-TH.html#inTypes",
        "fct-type": "function",
        "title": "inTypes"
      },
      "index": {
        "description": "inTypes ts t2 True iff any of ts is even recursively inside t2",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "inTypes",
        "normalized": "[a Type]-\u003eType-\u003ea Bool",
        "package": "TYB",
        "partial": "Types",
        "signature": "[m Type]-\u003eType-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:memoizeDec",
      "description": {
        "fct-descr": "\u003cp\u003eMemoizes a code generation function.  Most users will want to use\n\u003ccode\u003e\u003ca\u003ememoizeExp\u003c/a\u003e\u003c/code\u003e instead as it provides a simplified interface, but all\nthe notes about this function also apply to \u003ccode\u003e\u003ca\u003ememoizeExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe memoize a function returning an \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e by creating a \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003e with a\nbody that is the \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e returned by that function.  The return value\nof the function is replaced with a \u003ccode\u003e\u003ca\u003eVarE\u003c/a\u003e\u003c/code\u003e that refers to the \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003e.\nThis allows functions like \u003ccode\u003e\u003ca\u003eeverywhere\u003c/a\u003e\u003c/code\u003e to avoid infinite\nrecursions when they traverse recursive types like lists.\n\u003c/p\u003e\u003cp\u003eThe memoization functions come in two flavors: \u003ccode\u003e\u003ca\u003ememoizeDec\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003ememoizeExp\u003c/a\u003e\u003c/code\u003e.  With \u003ccode\u003e\u003ca\u003ememoizeDec\u003c/a\u003e\u003c/code\u003e it is the responsibility of the\ncaller to place the \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003e in an appropriate place.  The\n\u003ccode\u003e\u003ca\u003ememoizeExp\u003c/a\u003e\u003c/code\u003e function automatically handles the \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003e by wrapping\nthem in a local \u003ccode\u003e\u003ca\u003eLetE\u003c/a\u003e\u003c/code\u003e form.\n\u003c/p\u003e\u003cp\u003eEvery memoized function is passed a memoized version of itself.\nThis is the function that should be used in recursive calls.\nFailing to do so will prevent those calls from being memoized.\n\u003c/p\u003e\u003cp\u003eMutually recursive functions are possible using \u003ccode\u003e\u003ca\u003ememoizeDec2\u003c/a\u003e\u003c/code\u003e,\netc. and \u003ccode\u003e\u003ca\u003ememoizeExp2\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eIf the function being memoized needs to accept multiple arguments,\nthen they must be packed into a tuple and passed as a single argument.\n\u003c/p\u003e\u003cp\u003eEffects in the \u003ccode\u003em\u003c/code\u003e monad are only performed the first time the\nmemoized function is called with a particular argument.  Subsequent\ntimes the monad is simply the result of a \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.  Thus while it\nis tempting to store extra return values in the monad, this should\nbe avoided due to the high likelihood of unexpected behavior.\n\u003c/p\u003e\u003cp\u003eImplementation Notes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note that \u003ccode\u003em\u003c/code\u003e should not store a copy of the function, otherwise\n  a memory leak is introduced.  It wouldn't even make sense to do\n  it anyway since the results refer to expressions that might not\n  be in scope.\n\u003c/li\u003e\u003cli\u003e The memoized function stores a reference to the memoization\n  table, Thus if a reference to the memoized function gets tucked\n  inside \u003ccode\u003em\u003c/code\u003e, then a memory leak can be introduced.  We could\n  eliminate this leak by clearing and invalidating the table when\n  \u003ccode\u003e\u003ca\u003ememoizeDec\u003c/a\u003e\u003c/code\u003e returns.  To fully do this properly the table would\n  have to be invalidated in such a way that the memoized version of\n  the function would not continue to try populating the table if\n  the user called it after \u003ccode\u003e\u003ca\u003ememoizeDec\u003c/a\u003e\u003c/code\u003e return.\n\u003c/li\u003e\u003cli\u003e Conceptually we should use a State monad instead of an IORef but\n  we choose IORef since we can embed IO operations in a Quasi\n  without imposing extra restrictions on \u003ccode\u003em\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Other designs are possible.  This design was choosen for its\n  simplicity of use.  The choice of memoization interface is\n  largely orthogonal to the rest of this library.\n\u003c/li\u003e\u003cli\u003e Type synonyms and kind annotations may lead to duplicate versions\n  of the code (e.g. versions for both \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e)\n  Usually this isn't a problem, but if it is, then the type\n  synonyms should be expanded before each call to the memoized\n  function.\n\u003c/li\u003e\u003cli\u003e GADTs and data/type families haven't been considered in this\n  code.  It is unknown whether they work.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that polymorphically recursive types (e.g. \u003ccode\u003edata F a = N a | F (F\n(Int, a))\u003c/code\u003e) have an infinite number of types in them and thus despite\nmemoization this function will not terminate on those types.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "((a -\u003e m Exp) -\u003e a -\u003e m Exp)-\u003e a-\u003e m ([Dec], Exp)",
        "fct-type": "function",
        "title": "memoizeDec"
      },
      "index": {
        "description": "Memoizes code generation function Most users will want to use memoizeExp instead as it provides simplified interface but all the notes about this function also apply to memoizeExp We memoize function returning an Exp by creating Dec with body that is the Exp returned by that function The return value of the function is replaced with VarE that refers to the Dec This allows functions like everywhere to avoid infinite recursions when they traverse recursive types like lists The memoization functions come in two flavors memoizeDec and memoizeExp With memoizeDec it is the responsibility of the caller to place the Dec in an appropriate place The memoizeExp function automatically handles the Dec by wrapping them in local LetE form Every memoized function is passed memoized version of itself This is the function that should be used in recursive calls Failing to do so will prevent those calls from being memoized Mutually recursive functions are possible using memoizeDec2 etc and memoizeExp2 etc If the function being memoized needs to accept multiple arguments then they must be packed into tuple and passed as single argument Effects in the monad are only performed the first time the memoized function is called with particular argument Subsequent times the monad is simply the result of return Thus while it is tempting to store extra return values in the monad this should be avoided due to the high likelihood of unexpected behavior Implementation Notes Note that should not store copy of the function otherwise memory leak is introduced It wouldn even make sense to do it anyway since the results refer to expressions that might not be in scope The memoized function stores reference to the memoization table Thus if reference to the memoized function gets tucked inside then memory leak can be introduced We could eliminate this leak by clearing and invalidating the table when memoizeDec returns To fully do this properly the table would have to be invalidated in such way that the memoized version of the function would not continue to try populating the table if the user called it after memoizeDec return Conceptually we should use State monad instead of an IORef but we choose IORef since we can embed IO operations in Quasi without imposing extra restrictions on Other designs are possible This design was choosen for its simplicity of use The choice of memoization interface is largely orthogonal to the rest of this library Type synonyms and kind annotations may lead to duplicate versions of the code e.g versions for both String and Char Usually this isn problem but if it is then the type synonyms should be expanded before each call to the memoized function GADTs and data type families haven been considered in this code It is unknown whether they work Note that polymorphically recursive types e.g data Int have an infinite number of types in them and thus despite memoization this function will not terminate on those types",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "memoizeDec",
        "normalized": "((a-\u003eb Exp)-\u003ea-\u003eb Exp)-\u003ea-\u003eb([Dec],Exp)",
        "package": "TYB",
        "partial": "Dec",
        "signature": "((a-\u003em Exp)-\u003ea-\u003em Exp)-\u003ea-\u003em([Dec],Exp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:memoizeDec2",
      "description": {
        "fct-descr": "\u003cp\u003eSimultaneously memoizes two code generation functions.  All of\n the notes about \u003ccode\u003e\u003ca\u003ememoizeDec\u003c/a\u003e\u003c/code\u003e also apply to this function.  Most\n users will want to use \u003ccode\u003e\u003ca\u003ememoizeExp2\u003c/a\u003e\u003c/code\u003e instead of this function as it\n provides a simplified interface.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "((a -\u003e m Exp) -\u003e (b -\u003e m Exp) -\u003e a -\u003e m Exp)-\u003e ((a -\u003e m Exp) -\u003e (b -\u003e m Exp) -\u003e b -\u003e m Exp)-\u003e a-\u003e m ([Dec], Exp)",
        "fct-type": "function",
        "title": "memoizeDec2"
      },
      "index": {
        "description": "Simultaneously memoizes two code generation functions All of the notes about memoizeDec also apply to this function Most users will want to use memoizeExp2 instead of this function as it provides simplified interface",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "memoizeDec2",
        "normalized": "((a-\u003eb Exp)-\u003e(c-\u003eb Exp)-\u003ea-\u003eb Exp)-\u003e((a-\u003eb Exp)-\u003e(c-\u003eb Exp)-\u003ec-\u003eb Exp)-\u003ea-\u003eb([Dec],Exp)",
        "package": "TYB",
        "partial": "Dec",
        "signature": "((a-\u003em Exp)-\u003e(b-\u003em Exp)-\u003ea-\u003em Exp)-\u003e((a-\u003em Exp)-\u003e(b-\u003em Exp)-\u003eb-\u003em Exp)-\u003ea-\u003em([Dec],Exp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:memoizeExp",
      "description": {
        "fct-descr": "\u003cp\u003eMemoizes a code generation function.  Behaves identically to\n \u003ccode\u003e\u003ca\u003ememoizeDec\u003c/a\u003e\u003c/code\u003e except that it returns a \u003ccode\u003e\u003ca\u003eLetE\u003c/a\u003e\u003c/code\u003e that binds the \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003e\n resulting from \u003ccode\u003e\u003ca\u003ememoizeDec\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e resulting from\n \u003ccode\u003e\u003ca\u003ememoizeDec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "((a -\u003e m Exp) -\u003e a -\u003e m Exp) -\u003e a -\u003e m Exp",
        "fct-source": "src/Data-Generics-TH.html#memoizeExp",
        "fct-type": "function",
        "title": "memoizeExp"
      },
      "index": {
        "description": "Memoizes code generation function Behaves identically to memoizeDec except that it returns LetE that binds the Dec resulting from memoizeDec for the Exp resulting from memoizeDec",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "memoizeExp",
        "normalized": "((a-\u003eb Exp)-\u003ea-\u003eb Exp)-\u003ea-\u003eb Exp",
        "package": "TYB",
        "partial": "Exp",
        "signature": "((a-\u003em Exp)-\u003ea-\u003em Exp)-\u003ea-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:memoizeExp2",
      "description": {
        "fct-descr": "\u003cp\u003eSimultaneously memoizes two code generation functions.  Behaves\n identically to \u003ccode\u003e\u003ca\u003ememoizeDec2\u003c/a\u003e\u003c/code\u003e except that it returns a \u003ccode\u003e\u003ca\u003eLetE\u003c/a\u003e\u003c/code\u003e that\n binds the \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003e resulting from \u003ccode\u003e\u003ca\u003ememoizeDec2\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e\n resulting from \u003ccode\u003e\u003ca\u003ememoizeDec2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "((a -\u003e m Exp) -\u003e (b -\u003e m Exp) -\u003e a -\u003e m Exp) -\u003e ((a -\u003e m Exp) -\u003e (b -\u003e m Exp) -\u003e b -\u003e m Exp) -\u003e a -\u003e m Exp",
        "fct-source": "src/Data-Generics-TH.html#memoizeExp2",
        "fct-type": "function",
        "title": "memoizeExp2"
      },
      "index": {
        "description": "Simultaneously memoizes two code generation functions Behaves identically to memoizeDec2 except that it returns LetE that binds the Dec resulting from memoizeDec2 for the Exp resulting from memoizeDec2",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "memoizeExp2",
        "normalized": "((a-\u003eb Exp)-\u003e(c-\u003eb Exp)-\u003ea-\u003eb Exp)-\u003e((a-\u003eb Exp)-\u003e(c-\u003eb Exp)-\u003ec-\u003eb Exp)-\u003ea-\u003eb Exp",
        "package": "TYB",
        "partial": "Exp",
        "signature": "((a-\u003em Exp)-\u003e(b-\u003em Exp)-\u003ea-\u003em Exp)-\u003e((a-\u003em Exp)-\u003e(b-\u003em Exp)-\u003eb-\u003em Exp)-\u003ea-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:mkM",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a monadic transformation from a named function.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "Name-\u003e Type -\u003e m Exp",
        "fct-type": "function",
        "title": "mkM"
      },
      "index": {
        "description": "Makes monadic transformation from named function",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "mkM",
        "normalized": "Name-\u003eType-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "Name-\u003eType-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:mkMs",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a monadic transformation from several named functions.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "[Name]-\u003e Type -\u003e m Exp",
        "fct-type": "function",
        "title": "mkMs"
      },
      "index": {
        "description": "Makes monadic transformation from several named functions",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "mkMs",
        "normalized": "[Name]-\u003eType-\u003ea Exp",
        "package": "TYB",
        "partial": "Ms",
        "signature": "[Name]-\u003eType-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:mkQ",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a query from a named function.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "m Exp-\u003e Name-\u003e Type -\u003e m Exp",
        "fct-type": "function",
        "title": "mkQ"
      },
      "index": {
        "description": "Makes query from named function",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "mkQ",
        "normalized": "a Exp-\u003eName-\u003eType-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "m Exp-\u003eName-\u003eType-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:mkQs",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a query from several named functions.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "m Exp-\u003e [Name]-\u003e Type -\u003e m Exp",
        "fct-type": "function",
        "title": "mkQs"
      },
      "index": {
        "description": "Makes query from several named functions",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "mkQs",
        "normalized": "a Exp-\u003e[Name]-\u003eType-\u003ea Exp",
        "package": "TYB",
        "partial": "Qs",
        "signature": "m Exp-\u003e[Name]-\u003eType-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:mkT",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a transformation from a named function.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "Name-\u003e Type -\u003e m Exp",
        "fct-type": "function",
        "title": "mkT"
      },
      "index": {
        "description": "Makes transformation from named function",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "mkT",
        "normalized": "Name-\u003eType-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "Name-\u003eType-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:mkTs",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a transformation from several named functions.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "[Name]-\u003e Type -\u003e m Exp",
        "fct-type": "function",
        "title": "mkTs"
      },
      "index": {
        "description": "Makes transformation from several named functions",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "mkTs",
        "normalized": "[Name]-\u003eType-\u003ea Exp",
        "package": "TYB",
        "partial": "Ts",
        "signature": "[Name]-\u003eType-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:somewhere",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive transformation (bottom-up) with selective traversal.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "((Type -\u003e m Exp) -\u003e Type -\u003e m (Maybe Exp))-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "somewhere"
      },
      "index": {
        "description": "Generic recursive transformation bottom-up with selective traversal",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "somewhere",
        "normalized": "((Type-\u003ea Exp)-\u003eType-\u003ea(Maybe Exp))-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "((Type-\u003em Exp)-\u003eType-\u003em(Maybe Exp))-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:somewhereM",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric recursive monadic transformation (bottom-up) with selective traversal.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "((Type -\u003e m Exp) -\u003e Type -\u003e m (Maybe Exp))-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "somewhereM"
      },
      "index": {
        "description": "Generic recursive monadic transformation bottom-up with selective traversal",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "somewhereM",
        "normalized": "((Type-\u003ea Exp)-\u003eType-\u003ea(Maybe Exp))-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "((Type-\u003em Exp)-\u003eType-\u003em(Maybe Exp))-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:thcase",
      "description": {
        "fct-descr": "\u003cp\u003eCase expression generation.  This is the core function of the\n Template Your Boilerplate library.\n\u003c/p\u003e\u003cp\u003eThis function is similar to \u003ccode\u003ethcase'\u003c/code\u003e, except that since most users\n will note care about the distinction between types and primitive\n types, this function smooths over the differences by treating primitive\n types as types with nullary constructors.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(m Exp -\u003e [(Type, m Exp)] -\u003e m Exp)-\u003e m Type-\u003e m Exp",
        "fct-type": "function",
        "title": "thcase"
      },
      "index": {
        "description": "Case expression generation This is the core function of the Template Your Boilerplate library This function is similar to thcase except that since most users will note care about the distinction between types and primitive types this function smooths over the differences by treating primitive types as types with nullary constructors",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "thcase",
        "normalized": "(a Exp-\u003e[(Type,a Exp)]-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(m Exp-\u003e[(Type,m Exp)]-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:thcase-39-",
      "description": {
        "fct-descr": "\u003cp\u003ePrimitive case expression generation.  Most users will want to use\n \u003ccode\u003e\u003ca\u003ethcase\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Either Name (Name, [(Type, Name)]) -\u003e m Exp)-\u003e m Type-\u003e m Exp",
        "fct-type": "function",
        "title": "thcase'"
      },
      "index": {
        "description": "Primitive case expression generation Most users will want to use thcase instead",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "thcase'",
        "normalized": "(Either Name(Name,[(Type,Name)])-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(Either Name(Name,[(Type,Name)])-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:thfoldl",
      "description": {
        "fct-descr": "\u003cp\u003eScrap Your Boilerplate style case expression generation.  The\n \u003ccode\u003e\u003ca\u003ethcase\u003c/a\u003e\u003c/code\u003e function is generally simpler to use instead of this and\n is more powerful.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(m Exp -\u003e Type -\u003e m Exp -\u003e m Exp)-\u003e (m Exp -\u003e m Exp)-\u003e m Type-\u003e m Exp",
        "fct-type": "function",
        "title": "thfoldl"
      },
      "index": {
        "description": "Scrap Your Boilerplate style case expression generation The thcase function is generally simpler to use instead of this and is more powerful",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "thfoldl",
        "normalized": "(a Exp-\u003eType-\u003ea Exp-\u003ea Exp)-\u003e(a Exp-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(m Exp-\u003eType-\u003em Exp-\u003em Exp)-\u003e(m Exp-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:thmapM",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric single-layer monadic transformation.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "thmapM"
      },
      "index": {
        "description": "Generic single-layer monadic transformation",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "thmapM",
        "normalized": "(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:thmapQ",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric single-layer query.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "thmapQ"
      },
      "index": {
        "description": "Generic single-layer query",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "thmapQ",
        "normalized": "(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:thmapQl",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric single-layer query (left associative).\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "m Exp-\u003e m Exp-\u003e (Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "thmapQl"
      },
      "index": {
        "description": "Generic single-layer query left associative",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "thmapQl",
        "normalized": "a Exp-\u003ea Exp-\u003e(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "Ql",
        "signature": "m Exp-\u003em Exp-\u003e(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:thmapQr",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric single-layer query (right associative).\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "m Exp-\u003e m Exp-\u003e (Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "thmapQr"
      },
      "index": {
        "description": "Generic single-layer query right associative",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "thmapQr",
        "normalized": "a Exp-\u003ea Exp-\u003e(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "Qr",
        "signature": "m Exp-\u003em Exp-\u003e(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:thmapT",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric single-layer transformation\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "(Type -\u003e m Exp)-\u003e m Type -\u003e m Exp",
        "fct-type": "function",
        "title": "thmapT"
      },
      "index": {
        "description": "Generic single-layer transformation",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "thmapT",
        "normalized": "(Type-\u003ea Exp)-\u003ea Type-\u003ea Exp",
        "package": "TYB",
        "partial": "",
        "signature": "(Type-\u003em Exp)-\u003em Type-\u003em Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TYB/docs/Data-Generics-TH.html#v:typeOfName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the type of a variable, method or constructor name.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.TH",
        "fct-package": "TYB",
        "fct-signature": "Name -\u003e m Type",
        "fct-source": "src/Data-Generics-TH.html#typeOfName",
        "fct-type": "function",
        "title": "typeOfName"
      },
      "index": {
        "description": "Returns the type of variable method or constructor name",
        "hierarchy": "Data Generics TH",
        "module": "Data.Generics.TH",
        "name": "typeOfName",
        "normalized": "Name-\u003ea Type",
        "package": "TYB",
        "partial": "Of Name",
        "signature": "Name-\u003em Type"
      }
    }
  }
]