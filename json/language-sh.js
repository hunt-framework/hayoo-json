[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Arithmetic.html#",
      "description": {
        "fct-module": "Language.Sh.Arithmetic",
        "fct-package": "language-sh",
        "fct-signature": "module",
        "fct-source": "src/Language-Sh-Arithmetic.html",
        "fct-type": "module",
        "title": "Arithmetic"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Arithmetic",
        "module": "Language.Sh.Arithmetic",
        "name": "Arithmetic",
        "normalized": "",
        "package": "language-sh",
        "partial": "Arithmetic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Arithmetic.html#v:runMathParser",
      "description": {
        "fct-module": "Language.Sh.Arithmetic",
        "fct-package": "language-sh",
        "fct-signature": "SS -\u003e String -\u003e Either String (Int, SI)",
        "fct-source": "src/Language-Sh-Arithmetic.html#runMathParser",
        "fct-type": "function",
        "title": "runMathParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Arithmetic",
        "module": "Language.Sh.Arithmetic",
        "name": "runMathParser",
        "normalized": "SS-\u003eString-\u003eEither String(Int,SI)",
        "package": "language-sh",
        "partial": "Math Parser",
        "signature": "SS-\u003eString-\u003eEither String(Int,SI)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the expansion module.  It provides an interface for a monad\n in which expansions can happen, and then defines the expansions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "module",
        "fct-source": "src/Language-Sh-Expansion.html",
        "fct-type": "module",
        "title": "Expansion"
      },
      "index": {
        "description": "This is the expansion module It provides an interface for monad in which expansions can happen and then defines the expansions",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "Expansion",
        "normalized": "",
        "package": "language-sh",
        "partial": "Expansion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#t:ExpansionFunctions",
      "description": {
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
        "fct-type": "data",
        "title": "ExpansionFunctions"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "ExpansionFunctions",
        "normalized": "",
        "package": "language-sh",
        "partial": "Expansion Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:ExpansionFunctions",
      "description": {
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "ExpansionFunctions",
        "fct-source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
        "fct-type": "function",
        "title": "ExpansionFunctions"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "ExpansionFunctions",
        "normalized": "",
        "package": "language-sh",
        "partial": "Expansion Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:commandSub",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "[Command] -\u003e m String",
        "fct-source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
        "fct-type": "function",
        "title": "commandSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "commandSub",
        "normalized": "[Command]-\u003ea String",
        "package": "language-sh",
        "partial": "Sub",
        "signature": "[Command]-\u003em String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:expand",
      "description": {
        "fct-descr": "\u003cp\u003eWe have one main sticking point here... in the case of \u003ccode\u003eA=*\u003c/code\u003e, we want\n to use expandWord, and do the glob expansion.  In the case of \u003ccode\u003e\u003e*\u003c/code\u003e, we\n want to \u003cem\u003etry\u003c/em\u003e the glob expansion and then given an error in the case\n that we get multiple hits.  We could make one more expansion function?\n (expandNoAmbiguousGlob?)\n\u003c/p\u003e",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "ExpansionFunctions m -\u003e [Word] -\u003e m [String]",
        "fct-source": "src/Language-Sh-Expansion.html#expand",
        "fct-type": "function",
        "title": "expand"
      },
      "index": {
        "description": "We have one main sticking point here in the case of we want to use expandWord and do the glob expansion In the case of we want to try the glob expansion and then given an error in the case that we get multiple hits We could make one more expansion function expandNoAmbiguousGlob",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "expand",
        "normalized": "ExpansionFunctions a-\u003e[Word]-\u003ea[String]",
        "package": "language-sh",
        "partial": "",
        "signature": "ExpansionFunctions m-\u003e[Word]-\u003em[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:expandGlob",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "Word -\u003e m [FilePath]",
        "fct-source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
        "fct-type": "function",
        "title": "expandGlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "expandGlob",
        "normalized": "Word-\u003ea[FilePath]",
        "package": "language-sh",
        "partial": "Glob",
        "signature": "Word-\u003em[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:expandPattern",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a version of expandWord that doesn't deal with globs or remove\n quotes!  It's currently only used in case statements.\n\u003c/p\u003e",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "ExpansionFunctions m -\u003e Word -\u003e m Word",
        "fct-source": "src/Language-Sh-Expansion.html#expandPattern",
        "fct-type": "function",
        "title": "expandPattern"
      },
      "index": {
        "description": "This is version of expandWord that doesn deal with globs or remove quotes It currently only used in case statements",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "expandPattern",
        "normalized": "ExpansionFunctions a-\u003eWord-\u003ea Word",
        "package": "language-sh",
        "partial": "Pattern",
        "signature": "ExpansionFunctions m-\u003eWord-\u003em Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:expandWord",
      "description": {
        "fct-descr": "\u003cp\u003eTest: A=1  * --\u003e A=1 ... -\u003e so it's getting expand'ed/joined, and not\n expandWord'ed.  For now, we'll leave globs out of this function, but it\n seems like maybe the only use is in redirects, so then we can make this\n the one that doesn't allow ambiguity.  Also, we know that glob expansion\n comes after field splitting... (B=  ; A=2$B*)\n Tricky: A=\u003ca\u003e3$B*\u003c/a\u003e; echo $A --\u003e looks silly, but echo \u003ca\u003e$A\u003c/a\u003e...\n\u003c/p\u003e",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "ExpansionFunctions m -\u003e Word -\u003e m String",
        "fct-source": "src/Language-Sh-Expansion.html#expandWord",
        "fct-type": "function",
        "title": "expandWord"
      },
      "index": {
        "description": "Test so it getting expand ed joined and not expandWord ed For now we ll leave globs out of this function but it seems like maybe the only use is in redirects so then we can make this the one that doesn allow ambiguity Also we know that glob expansion comes after field splitting Tricky echo looks silly but echo",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "expandWord",
        "normalized": "ExpansionFunctions a-\u003eWord-\u003ea String",
        "package": "language-sh",
        "partial": "Word",
        "signature": "ExpansionFunctions m-\u003eWord-\u003em String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:getAllEnv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "m [(String, String)]",
        "fct-source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
        "fct-type": "function",
        "title": "getAllEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "getAllEnv",
        "normalized": "a[(String,String)]",
        "package": "language-sh",
        "partial": "All Env",
        "signature": "m[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:homeDir",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "String -\u003e m (Maybe String)",
        "fct-source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
        "fct-type": "function",
        "title": "homeDir"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "homeDir",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "language-sh",
        "partial": "Dir",
        "signature": "String-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:noGlobExpansion",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a default function that basically treats globs as literals.\n\u003c/p\u003e",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "Word -\u003e m [String]",
        "fct-source": "src/Language-Sh-Expansion.html#noGlobExpansion",
        "fct-type": "function",
        "title": "noGlobExpansion"
      },
      "index": {
        "description": "This is default function that basically treats globs as literals",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "noGlobExpansion",
        "normalized": "Word-\u003ea[String]",
        "package": "language-sh",
        "partial": "Glob Expansion",
        "signature": "Word-\u003em[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:positionals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "m [String]",
        "fct-source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
        "fct-type": "function",
        "title": "positionals"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "positionals",
        "normalized": "a[String]",
        "package": "language-sh",
        "partial": "",
        "signature": "m[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:setEnv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Sh.Expansion",
        "fct-package": "language-sh",
        "fct-signature": "String -\u003e String -\u003e m ()",
        "fct-source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
        "fct-type": "function",
        "title": "setEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Expansion",
        "module": "Language.Sh.Expansion",
        "name": "setEnv",
        "normalized": "String-\u003eString-\u003ea()",
        "package": "language-sh",
        "partial": "Env",
        "signature": "String-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#",
      "description": {
        "fct-module": "Language.Sh.Glob",
        "fct-package": "language-sh",
        "fct-signature": "module",
        "fct-source": "src/Language-Sh-Glob.html",
        "fct-type": "module",
        "title": "Glob"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Glob",
        "module": "Language.Sh.Glob",
        "name": "Glob",
        "normalized": "",
        "package": "language-sh",
        "partial": "Glob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#v:expandGlob",
      "description": {
        "fct-module": "Language.Sh.Glob",
        "fct-package": "language-sh",
        "fct-signature": "Word -\u003e m [FilePath]",
        "fct-source": "src/Language-Sh-Glob.html#expandGlob",
        "fct-type": "function",
        "title": "expandGlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Glob",
        "module": "Language.Sh.Glob",
        "name": "expandGlob",
        "normalized": "Word-\u003ea[FilePath]",
        "package": "language-sh",
        "partial": "Glob",
        "signature": "Word-\u003em[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#v:matchPattern",
      "description": {
        "fct-module": "Language.Sh.Glob",
        "fct-package": "language-sh",
        "fct-signature": "Word -\u003e String -\u003e Bool",
        "fct-source": "src/Language-Sh-Glob.html#matchPattern",
        "fct-type": "function",
        "title": "matchPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Glob",
        "module": "Language.Sh.Glob",
        "name": "matchPattern",
        "normalized": "Word-\u003eString-\u003eBool",
        "package": "language-sh",
        "partial": "Pattern",
        "signature": "Word-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#v:removePrefix",
      "description": {
        "fct-module": "Language.Sh.Glob",
        "fct-package": "language-sh",
        "fct-signature": "Bool-\u003e Word-\u003e String-\u003e String",
        "fct-type": "function",
        "title": "removePrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Glob",
        "module": "Language.Sh.Glob",
        "name": "removePrefix",
        "normalized": "Bool-\u003eWord-\u003eString-\u003eString",
        "package": "language-sh",
        "partial": "Prefix",
        "signature": "Bool-\u003eWord-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#v:removeSuffix",
      "description": {
        "fct-module": "Language.Sh.Glob",
        "fct-package": "language-sh",
        "fct-signature": "Bool-\u003e Word-\u003e String-\u003e String",
        "fct-type": "function",
        "title": "removeSuffix"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Glob",
        "module": "Language.Sh.Glob",
        "name": "removeSuffix",
        "normalized": "Bool-\u003eWord-\u003eString-\u003eString",
        "package": "language-sh",
        "partial": "Suffix",
        "signature": "Bool-\u003eWord-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "module",
        "fct-source": "src/Language-Sh-Map.html",
        "fct-type": "module",
        "title": "Map"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "Map",
        "normalized": "",
        "package": "language-sh",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#t:ExpressionMapper",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "class",
        "fct-source": "src/Language-Sh-Map.html#ExpressionMapper",
        "fct-type": "class",
        "title": "ExpressionMapper"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "ExpressionMapper",
        "normalized": "",
        "package": "language-sh",
        "partial": "Expression Mapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#t:ExpressionMapperM",
      "description": {
        "fct-descr": "\u003cp\u003eThe idea here is to prevent duplicating code needlessly.\n We could go even more extreme and make a third parameter, but\n then we have WAY too many instances, and they all depend on\n every other one anyway...\n class Applicative a =\u003e ExpressionMapper a f t where\n   mapSh :: f -\u003e t -\u003e a t\n\u003c/p\u003e",
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "class",
        "fct-source": "src/Language-Sh-Map.html#ExpressionMapperM",
        "fct-type": "class",
        "title": "ExpressionMapperM"
      },
      "index": {
        "description": "The idea here is to prevent duplicating code needlessly We could go even more extreme and make third parameter but then we have WAY too many instances and they all depend on every other one anyway class Applicative ExpressionMapper where mapSh",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "ExpressionMapperM",
        "normalized": "",
        "package": "language-sh",
        "partial": "Expression Mapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapAssignment",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Assignment -\u003e Assignment",
        "fct-source": "src/Language-Sh-Map.html#defaultMapAssignment",
        "fct-type": "method",
        "title": "defaultMapAssignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapAssignment",
        "normalized": "a-\u003eAssignment-\u003eAssignment",
        "package": "language-sh",
        "partial": "Map Assignment",
        "signature": "f-\u003eAssignment-\u003eAssignment"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapAssignmentM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Assignment -\u003e m Assignment",
        "fct-source": "src/Language-Sh-Map.html#defaultMapAssignmentM",
        "fct-type": "method",
        "title": "defaultMapAssignmentM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapAssignmentM",
        "normalized": "a-\u003eAssignment-\u003eb Assignment",
        "package": "language-sh",
        "partial": "Map Assignment",
        "signature": "f-\u003eAssignment-\u003em Assignment"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCommand",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Command -\u003e Command",
        "fct-source": "src/Language-Sh-Map.html#defaultMapCommand",
        "fct-type": "method",
        "title": "defaultMapCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapCommand",
        "normalized": "a-\u003eCommand-\u003eCommand",
        "package": "language-sh",
        "partial": "Map Command",
        "signature": "f-\u003eCommand-\u003eCommand"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCommandM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Command -\u003e m Command",
        "fct-source": "src/Language-Sh-Map.html#defaultMapCommandM",
        "fct-type": "method",
        "title": "defaultMapCommandM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapCommandM",
        "normalized": "a-\u003eCommand-\u003eb Command",
        "package": "language-sh",
        "partial": "Map Command",
        "signature": "f-\u003eCommand-\u003em Command"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCommands",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e [Command] -\u003e [Command]",
        "fct-source": "src/Language-Sh-Map.html#defaultMapCommands",
        "fct-type": "method",
        "title": "defaultMapCommands"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapCommands",
        "normalized": "a-\u003e[Command]-\u003e[Command]",
        "package": "language-sh",
        "partial": "Map Commands",
        "signature": "f-\u003e[Command]-\u003e[Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCommandsM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e [Command] -\u003e m [Command]",
        "fct-source": "src/Language-Sh-Map.html#defaultMapCommandsM",
        "fct-type": "method",
        "title": "defaultMapCommandsM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapCommandsM",
        "normalized": "a-\u003e[Command]-\u003eb[Command]",
        "package": "language-sh",
        "partial": "Map Commands",
        "signature": "f-\u003e[Command]-\u003em[Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCompound",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e CompoundStatement -\u003e CompoundStatement",
        "fct-source": "src/Language-Sh-Map.html#defaultMapCompound",
        "fct-type": "method",
        "title": "defaultMapCompound"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapCompound",
        "normalized": "a-\u003eCompoundStatement-\u003eCompoundStatement",
        "package": "language-sh",
        "partial": "Map Compound",
        "signature": "f-\u003eCompoundStatement-\u003eCompoundStatement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCompoundM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e CompoundStatement -\u003e m CompoundStatement",
        "fct-source": "src/Language-Sh-Map.html#defaultMapCompoundM",
        "fct-type": "method",
        "title": "defaultMapCompoundM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapCompoundM",
        "normalized": "a-\u003eCompoundStatement-\u003eb CompoundStatement",
        "package": "language-sh",
        "partial": "Map Compound",
        "signature": "f-\u003eCompoundStatement-\u003em CompoundStatement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapExpansion",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Expansion -\u003e Expansion",
        "fct-source": "src/Language-Sh-Map.html#defaultMapExpansion",
        "fct-type": "method",
        "title": "defaultMapExpansion"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapExpansion",
        "normalized": "a-\u003eExpansion-\u003eExpansion",
        "package": "language-sh",
        "partial": "Map Expansion",
        "signature": "f-\u003eExpansion-\u003eExpansion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapExpansionM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Expansion -\u003e m Expansion",
        "fct-source": "src/Language-Sh-Map.html#defaultMapExpansionM",
        "fct-type": "method",
        "title": "defaultMapExpansionM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapExpansionM",
        "normalized": "a-\u003eExpansion-\u003eb Expansion",
        "package": "language-sh",
        "partial": "Map Expansion",
        "signature": "f-\u003eExpansion-\u003em Expansion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapLexeme",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Lexeme -\u003e Lexeme",
        "fct-source": "src/Language-Sh-Map.html#defaultMapLexeme",
        "fct-type": "method",
        "title": "defaultMapLexeme"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapLexeme",
        "normalized": "a-\u003eLexeme-\u003eLexeme",
        "package": "language-sh",
        "partial": "Map Lexeme",
        "signature": "f-\u003eLexeme-\u003eLexeme"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapLexemeM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Lexeme -\u003e m Lexeme",
        "fct-source": "src/Language-Sh-Map.html#defaultMapLexemeM",
        "fct-type": "method",
        "title": "defaultMapLexemeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapLexemeM",
        "normalized": "a-\u003eLexeme-\u003eb Lexeme",
        "package": "language-sh",
        "partial": "Map Lexeme",
        "signature": "f-\u003eLexeme-\u003em Lexeme"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapLexemes",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Lexeme -\u003e [Lexeme]",
        "fct-source": "src/Language-Sh-Map.html#defaultMapLexemes",
        "fct-type": "method",
        "title": "defaultMapLexemes"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapLexemes",
        "normalized": "a-\u003eLexeme-\u003e[Lexeme]",
        "package": "language-sh",
        "partial": "Map Lexemes",
        "signature": "f-\u003eLexeme-\u003e[Lexeme]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapLexemesM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Lexeme -\u003e m [Lexeme]",
        "fct-source": "src/Language-Sh-Map.html#defaultMapLexemesM",
        "fct-type": "method",
        "title": "defaultMapLexemesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapLexemesM",
        "normalized": "a-\u003eLexeme-\u003eb[Lexeme]",
        "package": "language-sh",
        "partial": "Map Lexemes",
        "signature": "f-\u003eLexeme-\u003em[Lexeme]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapList",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e AndOrList -\u003e AndOrList",
        "fct-source": "src/Language-Sh-Map.html#defaultMapList",
        "fct-type": "method",
        "title": "defaultMapList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapList",
        "normalized": "a-\u003eAndOrList-\u003eAndOrList",
        "package": "language-sh",
        "partial": "Map List",
        "signature": "f-\u003eAndOrList-\u003eAndOrList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapListM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e AndOrList -\u003e m AndOrList",
        "fct-source": "src/Language-Sh-Map.html#defaultMapListM",
        "fct-type": "method",
        "title": "defaultMapListM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapListM",
        "normalized": "a-\u003eAndOrList-\u003eb AndOrList",
        "package": "language-sh",
        "partial": "Map List",
        "signature": "f-\u003eAndOrList-\u003em AndOrList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapPipeline",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Pipeline -\u003e Pipeline",
        "fct-source": "src/Language-Sh-Map.html#defaultMapPipeline",
        "fct-type": "method",
        "title": "defaultMapPipeline"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapPipeline",
        "normalized": "a-\u003ePipeline-\u003ePipeline",
        "package": "language-sh",
        "partial": "Map Pipeline",
        "signature": "f-\u003ePipeline-\u003ePipeline"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapPipelineM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Pipeline -\u003e m Pipeline",
        "fct-source": "src/Language-Sh-Map.html#defaultMapPipelineM",
        "fct-type": "method",
        "title": "defaultMapPipelineM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapPipelineM",
        "normalized": "a-\u003ePipeline-\u003eb Pipeline",
        "package": "language-sh",
        "partial": "Map Pipeline",
        "signature": "f-\u003ePipeline-\u003em Pipeline"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapRedir",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Redir -\u003e Redir",
        "fct-source": "src/Language-Sh-Map.html#defaultMapRedir",
        "fct-type": "method",
        "title": "defaultMapRedir"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapRedir",
        "normalized": "a-\u003eRedir-\u003eRedir",
        "package": "language-sh",
        "partial": "Map Redir",
        "signature": "f-\u003eRedir-\u003eRedir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapRedirM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Redir -\u003e m Redir",
        "fct-source": "src/Language-Sh-Map.html#defaultMapRedirM",
        "fct-type": "method",
        "title": "defaultMapRedirM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapRedirM",
        "normalized": "a-\u003eRedir-\u003eb Redir",
        "package": "language-sh",
        "partial": "Map Redir",
        "signature": "f-\u003eRedir-\u003em Redir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapStatement",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Statement -\u003e Statement",
        "fct-source": "src/Language-Sh-Map.html#defaultMapStatement",
        "fct-type": "method",
        "title": "defaultMapStatement"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapStatement",
        "normalized": "a-\u003eStatement-\u003eStatement",
        "package": "language-sh",
        "partial": "Map Statement",
        "signature": "f-\u003eStatement-\u003eStatement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapStatementM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Statement -\u003e m Statement",
        "fct-source": "src/Language-Sh-Map.html#defaultMapStatementM",
        "fct-type": "method",
        "title": "defaultMapStatementM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapStatementM",
        "normalized": "a-\u003eStatement-\u003eb Statement",
        "package": "language-sh",
        "partial": "Map Statement",
        "signature": "f-\u003eStatement-\u003em Statement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapTerm",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Term -\u003e Term",
        "fct-source": "src/Language-Sh-Map.html#defaultMapTerm",
        "fct-type": "method",
        "title": "defaultMapTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapTerm",
        "normalized": "a-\u003eTerm-\u003eTerm",
        "package": "language-sh",
        "partial": "Map Term",
        "signature": "f-\u003eTerm-\u003eTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapTermM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Term -\u003e m Term",
        "fct-source": "src/Language-Sh-Map.html#defaultMapTermM",
        "fct-type": "method",
        "title": "defaultMapTermM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapTermM",
        "normalized": "a-\u003eTerm-\u003eb Term",
        "package": "language-sh",
        "partial": "Map Term",
        "signature": "f-\u003eTerm-\u003em Term"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapTerms",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Term -\u003e [Term]",
        "fct-source": "src/Language-Sh-Map.html#defaultMapTerms",
        "fct-type": "method",
        "title": "defaultMapTerms"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapTerms",
        "normalized": "a-\u003eTerm-\u003e[Term]",
        "package": "language-sh",
        "partial": "Map Terms",
        "signature": "f-\u003eTerm-\u003e[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapTermsM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Term -\u003e m [Term]",
        "fct-source": "src/Language-Sh-Map.html#defaultMapTermsM",
        "fct-type": "method",
        "title": "defaultMapTermsM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapTermsM",
        "normalized": "a-\u003eTerm-\u003eb[Term]",
        "package": "language-sh",
        "partial": "Map Terms",
        "signature": "f-\u003eTerm-\u003em[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapWord",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Word -\u003e Word",
        "fct-source": "src/Language-Sh-Map.html#defaultMapWord",
        "fct-type": "method",
        "title": "defaultMapWord"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapWord",
        "normalized": "a-\u003eWord-\u003eWord",
        "package": "language-sh",
        "partial": "Map Word",
        "signature": "f-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapWordM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Word -\u003e m Word",
        "fct-source": "src/Language-Sh-Map.html#defaultMapWordM",
        "fct-type": "method",
        "title": "defaultMapWordM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "defaultMapWordM",
        "normalized": "a-\u003eWord-\u003eb Word",
        "package": "language-sh",
        "partial": "Map Word",
        "signature": "f-\u003eWord-\u003em Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapAssignment",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Assignment -\u003e Assignment",
        "fct-source": "src/Language-Sh-Map.html#mapAssignment",
        "fct-type": "method",
        "title": "mapAssignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapAssignment",
        "normalized": "a-\u003eAssignment-\u003eAssignment",
        "package": "language-sh",
        "partial": "Assignment",
        "signature": "f-\u003eAssignment-\u003eAssignment"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapAssignmentM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Assignment -\u003e m Assignment",
        "fct-source": "src/Language-Sh-Map.html#mapAssignmentM",
        "fct-type": "method",
        "title": "mapAssignmentM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapAssignmentM",
        "normalized": "a-\u003eAssignment-\u003eb Assignment",
        "package": "language-sh",
        "partial": "Assignment",
        "signature": "f-\u003eAssignment-\u003em Assignment"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCommand",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Command -\u003e Command",
        "fct-source": "src/Language-Sh-Map.html#mapCommand",
        "fct-type": "method",
        "title": "mapCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapCommand",
        "normalized": "a-\u003eCommand-\u003eCommand",
        "package": "language-sh",
        "partial": "Command",
        "signature": "f-\u003eCommand-\u003eCommand"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCommandM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Command -\u003e m Command",
        "fct-source": "src/Language-Sh-Map.html#mapCommandM",
        "fct-type": "method",
        "title": "mapCommandM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapCommandM",
        "normalized": "a-\u003eCommand-\u003eb Command",
        "package": "language-sh",
        "partial": "Command",
        "signature": "f-\u003eCommand-\u003em Command"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCommands",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e [Command] -\u003e [Command]",
        "fct-source": "src/Language-Sh-Map.html#mapCommands",
        "fct-type": "method",
        "title": "mapCommands"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapCommands",
        "normalized": "a-\u003e[Command]-\u003e[Command]",
        "package": "language-sh",
        "partial": "Commands",
        "signature": "f-\u003e[Command]-\u003e[Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCommandsM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e [Command] -\u003e m [Command]",
        "fct-source": "src/Language-Sh-Map.html#mapCommandsM",
        "fct-type": "method",
        "title": "mapCommandsM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapCommandsM",
        "normalized": "a-\u003e[Command]-\u003eb[Command]",
        "package": "language-sh",
        "partial": "Commands",
        "signature": "f-\u003e[Command]-\u003em[Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCompound",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e CompoundStatement -\u003e CompoundStatement",
        "fct-source": "src/Language-Sh-Map.html#mapCompound",
        "fct-type": "method",
        "title": "mapCompound"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapCompound",
        "normalized": "a-\u003eCompoundStatement-\u003eCompoundStatement",
        "package": "language-sh",
        "partial": "Compound",
        "signature": "f-\u003eCompoundStatement-\u003eCompoundStatement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCompoundM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e CompoundStatement -\u003e m CompoundStatement",
        "fct-source": "src/Language-Sh-Map.html#mapCompoundM",
        "fct-type": "method",
        "title": "mapCompoundM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapCompoundM",
        "normalized": "a-\u003eCompoundStatement-\u003eb CompoundStatement",
        "package": "language-sh",
        "partial": "Compound",
        "signature": "f-\u003eCompoundStatement-\u003em CompoundStatement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapExpansion",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Expansion -\u003e Expansion",
        "fct-source": "src/Language-Sh-Map.html#mapExpansion",
        "fct-type": "method",
        "title": "mapExpansion"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapExpansion",
        "normalized": "a-\u003eExpansion-\u003eExpansion",
        "package": "language-sh",
        "partial": "Expansion",
        "signature": "f-\u003eExpansion-\u003eExpansion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapExpansionM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Expansion -\u003e m Expansion",
        "fct-source": "src/Language-Sh-Map.html#mapExpansionM",
        "fct-type": "method",
        "title": "mapExpansionM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapExpansionM",
        "normalized": "a-\u003eExpansion-\u003eb Expansion",
        "package": "language-sh",
        "partial": "Expansion",
        "signature": "f-\u003eExpansion-\u003em Expansion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapLexeme",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Lexeme -\u003e Lexeme",
        "fct-source": "src/Language-Sh-Map.html#mapLexeme",
        "fct-type": "method",
        "title": "mapLexeme"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapLexeme",
        "normalized": "a-\u003eLexeme-\u003eLexeme",
        "package": "language-sh",
        "partial": "Lexeme",
        "signature": "f-\u003eLexeme-\u003eLexeme"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapLexemeM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Lexeme -\u003e m Lexeme",
        "fct-source": "src/Language-Sh-Map.html#mapLexemeM",
        "fct-type": "method",
        "title": "mapLexemeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapLexemeM",
        "normalized": "a-\u003eLexeme-\u003eb Lexeme",
        "package": "language-sh",
        "partial": "Lexeme",
        "signature": "f-\u003eLexeme-\u003em Lexeme"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapLexemes",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Lexeme -\u003e [Lexeme]",
        "fct-source": "src/Language-Sh-Map.html#mapLexemes",
        "fct-type": "method",
        "title": "mapLexemes"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapLexemes",
        "normalized": "a-\u003eLexeme-\u003e[Lexeme]",
        "package": "language-sh",
        "partial": "Lexemes",
        "signature": "f-\u003eLexeme-\u003e[Lexeme]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapLexemesM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Lexeme -\u003e m [Lexeme]",
        "fct-source": "src/Language-Sh-Map.html#mapLexemesM",
        "fct-type": "method",
        "title": "mapLexemesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapLexemesM",
        "normalized": "a-\u003eLexeme-\u003eb[Lexeme]",
        "package": "language-sh",
        "partial": "Lexemes",
        "signature": "f-\u003eLexeme-\u003em[Lexeme]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapList",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e AndOrList -\u003e AndOrList",
        "fct-source": "src/Language-Sh-Map.html#mapList",
        "fct-type": "method",
        "title": "mapList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapList",
        "normalized": "a-\u003eAndOrList-\u003eAndOrList",
        "package": "language-sh",
        "partial": "List",
        "signature": "f-\u003eAndOrList-\u003eAndOrList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapListM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e AndOrList -\u003e m AndOrList",
        "fct-source": "src/Language-Sh-Map.html#mapListM",
        "fct-type": "method",
        "title": "mapListM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapListM",
        "normalized": "a-\u003eAndOrList-\u003eb AndOrList",
        "package": "language-sh",
        "partial": "List",
        "signature": "f-\u003eAndOrList-\u003em AndOrList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapPipeline",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Pipeline -\u003e Pipeline",
        "fct-source": "src/Language-Sh-Map.html#mapPipeline",
        "fct-type": "method",
        "title": "mapPipeline"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapPipeline",
        "normalized": "a-\u003ePipeline-\u003ePipeline",
        "package": "language-sh",
        "partial": "Pipeline",
        "signature": "f-\u003ePipeline-\u003ePipeline"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapPipelineM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Pipeline -\u003e m Pipeline",
        "fct-source": "src/Language-Sh-Map.html#mapPipelineM",
        "fct-type": "method",
        "title": "mapPipelineM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapPipelineM",
        "normalized": "a-\u003ePipeline-\u003eb Pipeline",
        "package": "language-sh",
        "partial": "Pipeline",
        "signature": "f-\u003ePipeline-\u003em Pipeline"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapRedir",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Redir -\u003e Redir",
        "fct-source": "src/Language-Sh-Map.html#mapRedir",
        "fct-type": "method",
        "title": "mapRedir"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapRedir",
        "normalized": "a-\u003eRedir-\u003eRedir",
        "package": "language-sh",
        "partial": "Redir",
        "signature": "f-\u003eRedir-\u003eRedir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapRedirM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Redir -\u003e m Redir",
        "fct-source": "src/Language-Sh-Map.html#mapRedirM",
        "fct-type": "method",
        "title": "mapRedirM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapRedirM",
        "normalized": "a-\u003eRedir-\u003eb Redir",
        "package": "language-sh",
        "partial": "Redir",
        "signature": "f-\u003eRedir-\u003em Redir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapStatement",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Statement -\u003e Statement",
        "fct-source": "src/Language-Sh-Map.html#mapStatement",
        "fct-type": "method",
        "title": "mapStatement"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapStatement",
        "normalized": "a-\u003eStatement-\u003eStatement",
        "package": "language-sh",
        "partial": "Statement",
        "signature": "f-\u003eStatement-\u003eStatement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapStatementM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Statement -\u003e m Statement",
        "fct-source": "src/Language-Sh-Map.html#mapStatementM",
        "fct-type": "method",
        "title": "mapStatementM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapStatementM",
        "normalized": "a-\u003eStatement-\u003eb Statement",
        "package": "language-sh",
        "partial": "Statement",
        "signature": "f-\u003eStatement-\u003em Statement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapTerm",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Term -\u003e Term",
        "fct-source": "src/Language-Sh-Map.html#mapTerm",
        "fct-type": "method",
        "title": "mapTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapTerm",
        "normalized": "a-\u003eTerm-\u003eTerm",
        "package": "language-sh",
        "partial": "Term",
        "signature": "f-\u003eTerm-\u003eTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapTermM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Term -\u003e m Term",
        "fct-source": "src/Language-Sh-Map.html#mapTermM",
        "fct-type": "method",
        "title": "mapTermM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapTermM",
        "normalized": "a-\u003eTerm-\u003eb Term",
        "package": "language-sh",
        "partial": "Term",
        "signature": "f-\u003eTerm-\u003em Term"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapTerms",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Term -\u003e [Term]",
        "fct-source": "src/Language-Sh-Map.html#mapTerms",
        "fct-type": "method",
        "title": "mapTerms"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapTerms",
        "normalized": "a-\u003eTerm-\u003e[Term]",
        "package": "language-sh",
        "partial": "Terms",
        "signature": "f-\u003eTerm-\u003e[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapTermsM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Term -\u003e m [Term]",
        "fct-source": "src/Language-Sh-Map.html#mapTermsM",
        "fct-type": "method",
        "title": "mapTermsM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapTermsM",
        "normalized": "a-\u003eTerm-\u003eb[Term]",
        "package": "language-sh",
        "partial": "Terms",
        "signature": "f-\u003eTerm-\u003em[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapWord",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Word -\u003e Word",
        "fct-source": "src/Language-Sh-Map.html#mapWord",
        "fct-type": "method",
        "title": "mapWord"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapWord",
        "normalized": "a-\u003eWord-\u003eWord",
        "package": "language-sh",
        "partial": "Word",
        "signature": "f-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapWordM",
      "description": {
        "fct-module": "Language.Sh.Map",
        "fct-package": "language-sh",
        "fct-signature": "f -\u003e Word -\u003e m Word",
        "fct-source": "src/Language-Sh-Map.html#mapWordM",
        "fct-type": "method",
        "title": "mapWordM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Map",
        "module": "Language.Sh.Map",
        "name": "mapWordM",
        "normalized": "a-\u003eWord-\u003eb Word",
        "package": "language-sh",
        "partial": "Word",
        "signature": "f-\u003eWord-\u003em Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we use the stuff defined in the AST and Parsec modules\n to parse things.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Sh.Parser",
        "fct-package": "language-sh",
        "fct-signature": "module",
        "fct-source": "src/Language-Sh-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Here we use the stuff defined in the AST and Parsec modules to parse things",
        "hierarchy": "Language Sh Parser",
        "module": "Language.Sh.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "language-sh",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Parser.html#v:hereDocsComplete",
      "description": {
        "fct-module": "Language.Sh.Parser",
        "fct-package": "language-sh",
        "fct-signature": "[Command] -\u003e Bool",
        "fct-source": "src/Language-Sh-Parser.html#hereDocsComplete",
        "fct-type": "function",
        "title": "hereDocsComplete"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Parser",
        "module": "Language.Sh.Parser",
        "name": "hereDocsComplete",
        "normalized": "[Command]-\u003eBool",
        "package": "language-sh",
        "partial": "Docs Complete",
        "signature": "[Command]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Parser.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the main export here.  We take a list of aliases for the\n environment and a \u003ccode\u003eString\u003c/code\u003e to parse.  The return type is \u003ccode\u003eRight\n [Command]\u003c/code\u003e if parsing succeeded and \u003ccode\u003eLeft (String,Bool)\u003c/code\u003e upon\n failure.  The \u003ccode\u003eBool\u003c/code\u003e is \u003ccode\u003eTrue\u003c/code\u003e when the error was fatal/unrecoverable.\n\u003c/p\u003e",
        "fct-module": "Language.Sh.Parser",
        "fct-package": "language-sh",
        "fct-signature": "[(String, String)]-\u003e String-\u003e Either (String, Bool) [Command]",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "This is the main export here We take list of aliases for the environment and String to parse The return type is Right Command if parsing succeeded and Left String Bool upon failure The Bool is True when the error was fatal unrecoverable",
        "hierarchy": "Language Sh Parser",
        "module": "Language.Sh.Parser",
        "name": "parse",
        "normalized": "[(String,String)]-\u003eString-\u003eEither(String,Bool)[Command]",
        "package": "language-sh",
        "partial": "",
        "signature": "[(String,String)]-\u003eString-\u003eEither(String,Bool)[Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#",
      "description": {
        "fct-module": "Language.Sh.Pretty",
        "fct-package": "language-sh",
        "fct-signature": "module",
        "fct-source": "src/Language-Sh-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Pretty",
        "module": "Language.Sh.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "language-sh",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the pretty-printing class\n\u003c/p\u003e",
        "fct-module": "Language.Sh.Pretty",
        "fct-package": "language-sh",
        "fct-signature": "class",
        "fct-source": "src/Language-Sh-Pretty.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "This is the pretty-printing class",
        "hierarchy": "Language Sh Pretty",
        "module": "Language.Sh.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "language-sh",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#v:compacted",
      "description": {
        "fct-module": "Language.Sh.Pretty",
        "fct-package": "language-sh",
        "fct-signature": "p -\u003e PrettyP String",
        "fct-source": "src/Language-Sh-Pretty.html#compacted",
        "fct-type": "function",
        "title": "compacted"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Pretty",
        "module": "Language.Sh.Pretty",
        "name": "compacted",
        "normalized": "a-\u003ePrettyP String",
        "package": "language-sh",
        "partial": "",
        "signature": "p-\u003ePrettyP String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#v:indented",
      "description": {
        "fct-module": "Language.Sh.Pretty",
        "fct-package": "language-sh",
        "fct-signature": "Int -\u003e p -\u003e PrettyP String",
        "fct-source": "src/Language-Sh-Pretty.html#indented",
        "fct-type": "function",
        "title": "indented"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Pretty",
        "module": "Language.Sh.Pretty",
        "name": "indented",
        "normalized": "Int-\u003ea-\u003ePrettyP String",
        "package": "language-sh",
        "partial": "",
        "signature": "Int-\u003ep-\u003ePrettyP String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#v:pretty",
      "description": {
        "fct-module": "Language.Sh.Pretty",
        "fct-package": "language-sh",
        "fct-signature": "pretty",
        "fct-source": "src/Language-Sh-Pretty.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Pretty",
        "module": "Language.Sh.Pretty",
        "name": "pretty",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we define the \u003cem\u003ecomplete\u003c/em\u003e abstract syntax tree for\n simple and compound statements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "module",
        "fct-source": "src/Language-Sh-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "Here we define the complete abstract syntax tree for simple and compound statements",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "language-sh",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:AndOrList",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#AndOrList",
        "fct-type": "data",
        "title": "AndOrList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "AndOrList",
        "normalized": "",
        "package": "language-sh",
        "partial": "And Or List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Assignment",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#Assignment",
        "fct-type": "data",
        "title": "Assignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Assignment",
        "normalized": "",
        "package": "language-sh",
        "partial": "Assignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Command",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#Command",
        "fct-type": "data",
        "title": "Command"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Command",
        "normalized": "",
        "package": "language-sh",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:CompoundStatement",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#CompoundStatement",
        "fct-type": "data",
        "title": "CompoundStatement"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "CompoundStatement",
        "normalized": "",
        "package": "language-sh",
        "partial": "Compound Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Expansion",
      "description": {
        "fct-descr": "\u003cp\u003eAn expansion.  The first three are all variable expansions.  The\n \u003ccode\u003e\u003ca\u003eModifiedExpansion\u003c/a\u003e\u003c/code\u003e in particular also keeps track of which operation\n it is to perform.  The \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e can be any of \u003ccode\u003e\u003ca\u003e-+=?\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n says whether it was paired with a \u003ccode\u003e\u003ccode\u003e:\u003c/code\u003e\u003c/code\u003e in the case of the first four\n or doubled in the case of the latter two.  This isn't a very good\n data structure, but I hesitate to add 12 more algebraic types, one for\n each type of expansion.  It would be elegant to use a function\n parameter here, but then we lose our data-ness and it makes it difficult\n to be \u003ccode\u003eShow\u003c/code\u003e.  We could use a data class that has functions and is\n also \u003ccode\u003eShow\u003c/code\u003e and can be pretty-printed, and this would allow arbitrary\n generalizability, but do we really want this?  It needs to be parsed\n anyway.  The other question is the \u003ccode\u003ebash\u003c/code\u003e extensions: do we parse for\n \u003ccode\u003e/\u003c/code\u003e or should it be an error?  Is there a way to prevent it optionally?\n\u003c/p\u003e",
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#Expansion",
        "fct-type": "data",
        "title": "Expansion"
      },
      "index": {
        "description": "An expansion The first three are all variable expansions The ModifiedExpansion in particular also keeps track of which operation it is to perform The Char can be any of and the Bool says whether it was paired with in the case of the first four or doubled in the case of the latter two This isn very good data structure but hesitate to add more algebraic types one for each type of expansion It would be elegant to use function parameter here but then we lose our data-ness and it makes it difficult to be Show We could use data class that has functions and is also Show and can be pretty-printed and this would allow arbitrary generalizability but do we really want this It needs to be parsed anyway The other question is the bash extensions do we parse for or should it be an error Is there way to prevent it optionally",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Expansion",
        "normalized": "",
        "package": "language-sh",
        "partial": "Expansion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Lexeme",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#Lexeme",
        "fct-type": "data",
        "title": "Lexeme"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Lexeme",
        "normalized": "",
        "package": "language-sh",
        "partial": "Lexeme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Pipeline",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#Pipeline",
        "fct-type": "data",
        "title": "Pipeline"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Pipeline",
        "normalized": "",
        "package": "language-sh",
        "partial": "Pipeline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Redir",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "data",
        "title": "Redir"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Redir",
        "normalized": "",
        "package": "language-sh",
        "partial": "Redir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Statement",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#Statement",
        "fct-type": "data",
        "title": "Statement"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Statement",
        "normalized": "",
        "package": "language-sh",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Term",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "data",
        "fct-source": "src/Language-Sh-Syntax.html#Term",
        "fct-type": "data",
        "title": "Term"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Term",
        "normalized": "",
        "package": "language-sh",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Word",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "type",
        "fct-source": "src/Language-Sh-Syntax.html#Word",
        "fct-type": "type",
        "title": "Word"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Word",
        "normalized": "",
        "package": "language-sh",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-124--124-:",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "AndOrList :||: Pipeline",
        "fct-source": "src/Language-Sh-Syntax.html#AndOrList",
        "fct-type": "function",
        "title": ":||:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":||:",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-38--38-:",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "AndOrList :&&: Pipeline",
        "fct-source": "src/Language-Sh-Syntax.html#AndOrList",
        "fct-type": "function",
        "title": ":&&:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":&&:",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Int :\u003c Word",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": ":\u003c"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":\u003c",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60--38-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Int :\u003c& Int",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": ":\u003c&"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":\u003c&",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60--60-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Int :\u003c\u003c String",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": ":\u003c\u003c"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":\u003c\u003c",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60--60--45-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Int :\u003c\u003c- String",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": ":\u003c\u003c-"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":\u003c\u003c-",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60--62-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Int :\u003c\u003e Word",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": ":\u003c\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":\u003c\u003e",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-61-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "String := Word",
        "fct-source": "src/Language-Sh-Syntax.html#Assignment",
        "fct-type": "function",
        "title": ":="
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":=",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-62-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Int :\u003e Word",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": ":\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":\u003e",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-62--124-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Int :\u003e| Word",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": ":\u003e|"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":\u003e|",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-62--38-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Int :\u003e& Int",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": ":\u003e&"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":\u003e&",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-62--62-",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Int :\u003e\u003e Word",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": ":\u003e\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": ":\u003e\u003e",
        "normalized": "",
        "package": "language-sh",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Arithmetic",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Arithmetic Word",
        "fct-source": "src/Language-Sh-Syntax.html#Expansion",
        "fct-type": "function",
        "title": "Arithmetic"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Arithmetic",
        "normalized": "",
        "package": "language-sh",
        "partial": "Arithmetic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Asynchronous",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Asynchronous AndOrList",
        "fct-source": "src/Language-Sh-Syntax.html#Command",
        "fct-type": "function",
        "title": "Asynchronous"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Asynchronous",
        "normalized": "",
        "package": "language-sh",
        "partial": "Asynchronous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:BangPipeline",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "BangPipeline [Statement]",
        "fct-source": "src/Language-Sh-Syntax.html#Pipeline",
        "fct-type": "function",
        "title": "BangPipeline"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "BangPipeline",
        "normalized": "BangPipeline[Statement]",
        "package": "language-sh",
        "partial": "Bang Pipeline",
        "signature": "BangPipeline[Statement]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:BraceGroup",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "BraceGroup [Command]",
        "fct-source": "src/Language-Sh-Syntax.html#CompoundStatement",
        "fct-type": "function",
        "title": "BraceGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "BraceGroup",
        "normalized": "BraceGroup[Command]",
        "package": "language-sh",
        "partial": "Brace Group",
        "signature": "BraceGroup[Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Case",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Case Word [([Word], [Command])]",
        "fct-source": "src/Language-Sh-Syntax.html#CompoundStatement",
        "fct-type": "function",
        "title": "Case"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Case",
        "normalized": "Case Word[([Word],[Command])]",
        "package": "language-sh",
        "partial": "Case",
        "signature": "Case Word[([Word],[Command])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:CommandSub",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "CommandSub [Command]",
        "fct-source": "src/Language-Sh-Syntax.html#Expansion",
        "fct-type": "function",
        "title": "CommandSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "CommandSub",
        "normalized": "CommandSub[Command]",
        "package": "language-sh",
        "partial": "Command Sub",
        "signature": "CommandSub[Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Compound",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Compound CompoundStatement [Redir]",
        "fct-source": "src/Language-Sh-Syntax.html#Statement",
        "fct-type": "function",
        "title": "Compound"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Compound",
        "normalized": "Compound CompoundStatement[Redir]",
        "package": "language-sh",
        "partial": "Compound",
        "signature": "Compound CompoundStatement[Redir]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Expand",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Expand Expansion",
        "fct-source": "src/Language-Sh-Syntax.html#Lexeme",
        "fct-type": "function",
        "title": "Expand"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Expand",
        "normalized": "",
        "package": "language-sh",
        "partial": "Expand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:For",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "For String [Word] [Command]",
        "fct-source": "src/Language-Sh-Syntax.html#CompoundStatement",
        "fct-type": "function",
        "title": "For"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "For",
        "normalized": "For String[Word][Command]",
        "package": "language-sh",
        "partial": "For",
        "signature": "For String[Word][Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:FunctionDefinition",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "FunctionDefinition String CompoundStatement [Redir]",
        "fct-source": "src/Language-Sh-Syntax.html#Statement",
        "fct-type": "function",
        "title": "FunctionDefinition"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "FunctionDefinition",
        "normalized": "FunctionDefinition String CompoundStatement[Redir]",
        "package": "language-sh",
        "partial": "Function Definition",
        "signature": "FunctionDefinition String CompoundStatement[Redir]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Heredoc",
      "description": {
        "fct-descr": "\u003cp\u003efilled in version...?\n\u003c/p\u003e",
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Heredoc Int Bool Word",
        "fct-source": "src/Language-Sh-Syntax.html#Redir",
        "fct-type": "function",
        "title": "Heredoc"
      },
      "index": {
        "description": "filled in version",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Heredoc",
        "normalized": "",
        "package": "language-sh",
        "partial": "Heredoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:If",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "If [Command] [Command] [Command]",
        "fct-source": "src/Language-Sh-Syntax.html#CompoundStatement",
        "fct-type": "function",
        "title": "If"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "If",
        "normalized": "If[Command][Command][Command]",
        "package": "language-sh",
        "partial": "If",
        "signature": "If[Command][Command][Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:LengthExpansion",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "LengthExpansion String",
        "fct-source": "src/Language-Sh-Syntax.html#Expansion",
        "fct-type": "function",
        "title": "LengthExpansion"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "LengthExpansion",
        "normalized": "",
        "package": "language-sh",
        "partial": "Length Expansion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Literal",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Literal Char",
        "fct-source": "src/Language-Sh-Syntax.html#Lexeme",
        "fct-type": "function",
        "title": "Literal"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Literal",
        "normalized": "",
        "package": "language-sh",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:ModifiedExpansion",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "ModifiedExpansion String Char Bool Word",
        "fct-source": "src/Language-Sh-Syntax.html#Expansion",
        "fct-type": "function",
        "title": "ModifiedExpansion"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "ModifiedExpansion",
        "normalized": "",
        "package": "language-sh",
        "partial": "Modified Expansion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:OrderedStatement",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "OrderedStatement [Term]",
        "fct-source": "src/Language-Sh-Syntax.html#Statement",
        "fct-type": "function",
        "title": "OrderedStatement"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "OrderedStatement",
        "normalized": "OrderedStatement[Term]",
        "package": "language-sh",
        "partial": "Ordered Statement",
        "signature": "OrderedStatement[Term]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Pipeline",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Pipeline [Statement]",
        "fct-source": "src/Language-Sh-Syntax.html#Pipeline",
        "fct-type": "function",
        "title": "Pipeline"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Pipeline",
        "normalized": "Pipeline[Statement]",
        "package": "language-sh",
        "partial": "Pipeline",
        "signature": "Pipeline[Statement]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Quote",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Quote Char",
        "fct-source": "src/Language-Sh-Syntax.html#Lexeme",
        "fct-type": "function",
        "title": "Quote"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Quote",
        "normalized": "",
        "package": "language-sh",
        "partial": "Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Quoted",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Quoted Lexeme",
        "fct-source": "src/Language-Sh-Syntax.html#Lexeme",
        "fct-type": "function",
        "title": "Quoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Quoted",
        "normalized": "",
        "package": "language-sh",
        "partial": "Quoted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:SimpleExpansion",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "SimpleExpansion String",
        "fct-source": "src/Language-Sh-Syntax.html#Expansion",
        "fct-type": "function",
        "title": "SimpleExpansion"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "SimpleExpansion",
        "normalized": "",
        "package": "language-sh",
        "partial": "Simple Expansion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Singleton",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Singleton Pipeline",
        "fct-source": "src/Language-Sh-Syntax.html#AndOrList",
        "fct-type": "function",
        "title": "Singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Singleton",
        "normalized": "",
        "package": "language-sh",
        "partial": "Singleton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:SplitField",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "SplitField",
        "fct-source": "src/Language-Sh-Syntax.html#Lexeme",
        "fct-type": "function",
        "title": "SplitField"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "SplitField",
        "normalized": "",
        "package": "language-sh",
        "partial": "Split Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Statement",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Statement [Word] [Redir] [Assignment]",
        "fct-source": "src/Language-Sh-Syntax.html#Statement",
        "fct-type": "function",
        "title": "Statement"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Statement",
        "normalized": "Statement[Word][Redir][Assignment]",
        "package": "language-sh",
        "partial": "Statement",
        "signature": "Statement[Word][Redir][Assignment]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Subshell",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Subshell [Command]",
        "fct-source": "src/Language-Sh-Syntax.html#CompoundStatement",
        "fct-type": "function",
        "title": "Subshell"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Subshell",
        "normalized": "Subshell[Command]",
        "package": "language-sh",
        "partial": "Subshell",
        "signature": "Subshell[Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Synchronous",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Synchronous AndOrList",
        "fct-source": "src/Language-Sh-Syntax.html#Command",
        "fct-type": "function",
        "title": "Synchronous"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Synchronous",
        "normalized": "",
        "package": "language-sh",
        "partial": "Synchronous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:TAssignment",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "TAssignment Assignment",
        "fct-source": "src/Language-Sh-Syntax.html#Term",
        "fct-type": "function",
        "title": "TAssignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "TAssignment",
        "normalized": "",
        "package": "language-sh",
        "partial": "TAssignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:TRedir",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "TRedir Redir",
        "fct-source": "src/Language-Sh-Syntax.html#Term",
        "fct-type": "function",
        "title": "TRedir"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "TRedir",
        "normalized": "",
        "package": "language-sh",
        "partial": "TRedir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:TWord",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "TWord Word",
        "fct-source": "src/Language-Sh-Syntax.html#Term",
        "fct-type": "function",
        "title": "TWord"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "TWord",
        "normalized": "",
        "package": "language-sh",
        "partial": "TWord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Until",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "Until [Command] [Command]",
        "fct-source": "src/Language-Sh-Syntax.html#CompoundStatement",
        "fct-type": "function",
        "title": "Until"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "Until",
        "normalized": "Until[Command][Command]",
        "package": "language-sh",
        "partial": "Until",
        "signature": "Until[Command][Command]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:While",
      "description": {
        "fct-module": "Language.Sh.Syntax",
        "fct-package": "language-sh",
        "fct-signature": "While [Command] [Command]",
        "fct-source": "src/Language-Sh-Syntax.html#CompoundStatement",
        "fct-type": "function",
        "title": "While"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sh Syntax",
        "module": "Language.Sh.Syntax",
        "name": "While",
        "normalized": "While[Command][Command]",
        "package": "language-sh",
        "partial": "While",
        "signature": "While[Command][Command]"
      }
    }
  }
]