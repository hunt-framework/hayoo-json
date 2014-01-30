[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell utils for declaring flags instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Flags.TH",
        "fct-package": "data-flags",
        "fct-signature": "module",
        "fct-source": "src/Data-Flags-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Template Haskell utils for declaring flags instances",
        "hierarchy": "Data Flags TH",
        "module": "Data.Flags.TH",
        "name": "TH",
        "normalized": "",
        "package": "data-flags",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags-TH.html#v:bitmaskWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eDeclare a newtype wrapper around the specified integral type and make\n   it an instance of \u003ccode\u003e\u003ca\u003eBoundedFlags\u003c/a\u003e\u003c/code\u003e. For each individual\n   flag declare a constant. If a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance wasn't requested for\n   automatic derivation, declare one with\n\u003c/p\u003e\u003cpre\u003e show flags = \"WrappingTypeName [IndividualFlags in flags]\"\n\u003c/pre\u003e",
        "fct-module": "Data.Flags.TH",
        "fct-package": "data-flags",
        "fct-signature": "String-\u003e Name-\u003e [Name]-\u003e [(String, Integer)]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "bitmaskWrapper"
      },
      "index": {
        "description": "Declare newtype wrapper around the specified integral type and make it an instance of BoundedFlags For each individual flag declare constant If Show instance wasn requested for automatic derivation declare one with show flags WrappingTypeName IndividualFlags in flags",
        "hierarchy": "Data Flags TH",
        "module": "Data.Flags.TH",
        "name": "bitmaskWrapper",
        "normalized": "String-\u003eName-\u003e[Name]-\u003e[(String,Integer)]-\u003eQ[Dec]",
        "package": "data-flags",
        "partial": "Wrapper",
        "signature": "String-\u003eName-\u003e[Name]-\u003e[(String,Integer)]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags-TH.html#v:dataBitsAsBoundedFlags",
      "description": {
        "fct-descr": "\u003cp\u003eProduces \u003ccode\u003e\u003ca\u003eFlags\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBoundedFlags\u003c/a\u003e\u003c/code\u003e\n   instances declarations for the specified instance of \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags.TH",
        "fct-package": "data-flags",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Flags-TH.html#dataBitsAsBoundedFlags",
        "fct-type": "function",
        "title": "dataBitsAsBoundedFlags"
      },
      "index": {
        "description": "Produces Flags and BoundedFlags instances declarations for the specified instance of Bits",
        "hierarchy": "Data Flags TH",
        "module": "Data.Flags.TH",
        "name": "dataBitsAsBoundedFlags",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "data-flags",
        "partial": "Bits As Bounded Flags",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags-TH.html#v:dataBitsAsFlags",
      "description": {
        "fct-descr": "\u003cp\u003eProduces \u003ccode\u003e\u003ca\u003eFlags\u003c/a\u003e\u003c/code\u003e instance declaration for the specified\n   instance of \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags.TH",
        "fct-package": "data-flags",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Flags-TH.html#dataBitsAsFlags",
        "fct-type": "function",
        "title": "dataBitsAsFlags"
      },
      "index": {
        "description": "Produces Flags instance declaration for the specified instance of Bits",
        "hierarchy": "Data Flags TH",
        "module": "Data.Flags.TH",
        "name": "dataBitsAsFlags",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "data-flags",
        "partial": "Bits As Flags",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags-TH.html#v:enumADT",
      "description": {
        "fct-descr": "\u003cp\u003eDeclare an ADT with the specified constructors and make it an instance\n   of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags.TH",
        "fct-package": "data-flags",
        "fct-signature": "String-\u003e Name-\u003e [(String, Integer)]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "enumADT"
      },
      "index": {
        "description": "Declare an ADT with the specified constructors and make it an instance of Eq Ord Show and Storable",
        "hierarchy": "Data Flags TH",
        "module": "Data.Flags.TH",
        "name": "enumADT",
        "normalized": "String-\u003eName-\u003e[(String,Integer)]-\u003eQ[Dec]",
        "package": "data-flags",
        "partial": "ADT",
        "signature": "String-\u003eName-\u003e[(String,Integer)]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides type classes for working with sets of flags.\n   In particular, with wrappers around bit masks:\n\u003c/p\u003e\u003cpre\u003e import Data.Flags\n\n newtype MyFlags = MyFlags CInt deriving (Eq, Flags)\n\n #{enum MyFlags, MyFlags\n  , myFlag1 = C_FLAG1\n  , myFlag2 = C_FLAG2\n  , myFlag3 = C_FLAG3\n  }\n\n f :: MyFlags -\u003e IO ()\n f = ...\n\u003c/pre\u003e\u003cp\u003eOr, using Template Haskell:\n\u003c/p\u003e\u003cpre\u003e import Data.Flags.TH\n\n $(bitmaskWrapper \"MyFlags\" ''CInt [] False\n     [(\"myFlag1\", #{const C_FLAG1}),\n      (\"myFlag2\", #{const C_FLAG2}),\n      (\"myFlag3\", #{const C_FLAG3})])\n\n\u003c/pre\u003e\u003cp\u003eAnd then use it like this:\n\u003c/p\u003e\u003cpre\u003e f $ myFlag1 .+. myFlag3\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "module",
        "fct-source": "src/Data-Flags.html",
        "fct-type": "module",
        "title": "Flags"
      },
      "index": {
        "description": "This module provides type classes for working with sets of flags In particular with wrappers around bit masks import Data.Flags newtype MyFlags MyFlags CInt deriving Eq Flags enum MyFlags MyFlags myFlag1 FLAG1 myFlag2 FLAG2 myFlag3 FLAG3 MyFlags IO Or using Template Haskell import Data.Flags.TH bitmaskWrapper MyFlags CInt False myFlag1 const FLAG1 myFlag2 const FLAG2 myFlag3 const FLAG3 And then use it like this myFlag1 myFlag3",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "Flags",
        "normalized": "",
        "package": "data-flags",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#t:BoundedFlags",
      "description": {
        "fct-descr": "\u003cp\u003eUse this class when the set of flags is fixed and not likely\n   to change in the future.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "class",
        "fct-source": "src/Data-Flags-Base.html#BoundedFlags",
        "fct-type": "class",
        "title": "BoundedFlags"
      },
      "index": {
        "description": "Use this class when the set of flags is fixed and not likely to change in the future",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "BoundedFlags",
        "normalized": "",
        "package": "data-flags",
        "partial": "Bounded Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#t:Flags",
      "description": {
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "class",
        "fct-source": "src/Data-Flags-Base.html#Flags",
        "fct-type": "class",
        "title": "Flags"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "Flags",
        "normalized": "",
        "package": "data-flags",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:.-126-.",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003econtainsSome\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Flags.html#.~.",
        "fct-type": "function",
        "title": "(.~.)"
      },
      "index": {
        "description": "Alias for containsSome",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "(.~.) .~.",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "data-flags",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:.-42-.",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003ecommonFlags\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Flags.html#.%2A.",
        "fct-type": "function",
        "title": "(.*.)"
      },
      "index": {
        "description": "Alias for commonFlags",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "(.*.) .*.",
        "normalized": "a-\u003ea-\u003ea",
        "package": "data-flags",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:.-43-.",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eandFlags\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Flags.html#.%2B.",
        "fct-type": "function",
        "title": "(.+.)"
      },
      "index": {
        "description": "Alias for andFlags",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "(.+.) .+.",
        "normalized": "a-\u003ea-\u003ea",
        "package": "data-flags",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:.-45-.",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003ebutFlags\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Flags.html#.-.",
        "fct-type": "function",
        "title": "(.-.)"
      },
      "index": {
        "description": "Alias for butFlags",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "(.-.) .-.",
        "normalized": "a-\u003ea-\u003ea",
        "package": "data-flags",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:.-47--126-.",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003econtainsNone\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Flags.html#.%2F~.",
        "fct-type": "function",
        "title": "(./~.)"
      },
      "index": {
        "description": "Alias for containsNone",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "(./~.) ./~.",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "data-flags",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:.-60--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econtainsAll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Flags.html#.%3C%3D.",
        "fct-type": "function",
        "title": "(.\u003c=.)"
      },
      "index": {
        "description": "Shorthand for flip containsAll",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "(.\u003c=.) .\u003c=.",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "data-flags",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:.-62--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003econtainsAll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Flags.html#.%3E%3D.",
        "fct-type": "function",
        "title": "(.\u003e=.)"
      },
      "index": {
        "description": "Alias for containsAll",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "(.\u003e=.) .\u003e=.",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "data-flags",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:allBut",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for \u003ccode\u003e\u003ca\u003eallFlags\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.-.\u003c/a\u003e\u003c/code\u003e \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Flags.html#allBut",
        "fct-type": "function",
        "title": "allBut"
      },
      "index": {
        "description": "Shorthand for allFlags",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "allBut",
        "normalized": "a-\u003ea",
        "package": "data-flags",
        "partial": "But",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:allFlags",
      "description": {
        "fct-descr": "\u003cp\u003eSet of all flags.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a",
        "fct-source": "src/Data-Flags-Base.html#allFlags",
        "fct-type": "method",
        "title": "allFlags"
      },
      "index": {
        "description": "Set of all flags",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "allFlags",
        "normalized": "",
        "package": "data-flags",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:andFlags",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of two flag sets.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Flags-Base.html#andFlags",
        "fct-type": "method",
        "title": "andFlags"
      },
      "index": {
        "description": "Union of two flag sets",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "andFlags",
        "normalized": "a-\u003ea-\u003ea",
        "package": "data-flags",
        "partial": "Flags",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:butFlags",
      "description": {
        "fct-descr": "\u003cp\u003eDifference between two flag sets.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Flags-Base.html#butFlags",
        "fct-type": "method",
        "title": "butFlags"
      },
      "index": {
        "description": "Difference between two flag sets",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "butFlags",
        "normalized": "a-\u003ea-\u003ea",
        "package": "data-flags",
        "partial": "Flags",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:commonFlags",
      "description": {
        "fct-descr": "\u003cp\u003eIntersection of two flag sets.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Flags-Base.html#commonFlags",
        "fct-type": "method",
        "title": "commonFlags"
      },
      "index": {
        "description": "Intersection of two flag sets",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "commonFlags",
        "normalized": "a-\u003ea-\u003ea",
        "package": "data-flags",
        "partial": "Flags",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:containsAll",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the first flag set contains all flags from the second.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Flags.html#containsAll",
        "fct-type": "function",
        "title": "containsAll"
      },
      "index": {
        "description": "Test if the first flag set contains all flags from the second",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "containsAll",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "data-flags",
        "partial": "All",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:containsNone",
      "description": {
        "fct-descr": "\u003cp\u003eTest if two flag sets do not intersect.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Flags.html#containsNone",
        "fct-type": "function",
        "title": "containsNone"
      },
      "index": {
        "description": "Test if two flag sets do not intersect",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "containsNone",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "data-flags",
        "partial": "None",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:containsSome",
      "description": {
        "fct-descr": "\u003cp\u003eTest if two flag sets intersect.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Flags.html#containsSome",
        "fct-type": "function",
        "title": "containsSome"
      },
      "index": {
        "description": "Test if two flag sets intersect",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "containsSome",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "data-flags",
        "partial": "Some",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:enumFlags",
      "description": {
        "fct-descr": "\u003cp\u003eList the individual flags.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Data-Flags-Base.html#enumFlags",
        "fct-type": "method",
        "title": "enumFlags"
      },
      "index": {
        "description": "List the individual flags",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "enumFlags",
        "normalized": "a-\u003e[a]",
        "package": "data-flags",
        "partial": "Flags",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-flags/docs/Data-Flags.html#v:noFlags",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty set of flags.\n\u003c/p\u003e",
        "fct-module": "Data.Flags",
        "fct-package": "data-flags",
        "fct-signature": "a",
        "fct-source": "src/Data-Flags-Base.html#noFlags",
        "fct-type": "method",
        "title": "noFlags"
      },
      "index": {
        "description": "The empty set of flags",
        "hierarchy": "Data Flags",
        "module": "Data.Flags",
        "name": "noFlags",
        "normalized": "",
        "package": "data-flags",
        "partial": "Flags",
        "signature": ""
      }
    }
  }
]