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
        "word": "language-sh"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Arithmetic",
          "name": "Arithmetic",
          "package": "language-sh",
          "source": "src/Language-Sh-Arithmetic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Sh Arithmetic",
          "module": "Language.Sh.Arithmetic",
          "name": "Arithmetic",
          "package": "language-sh",
          "partial": "Arithmetic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Arithmetic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Arithmetic",
          "name": "runMathParser",
          "package": "language-sh",
          "signature": "SS -\u003e String -\u003e Either String (Int, SI)",
          "source": "src/Language-Sh-Arithmetic.html#runMathParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Arithmetic",
          "module": "Language.Sh.Arithmetic",
          "name": "runMathParser",
          "normalized": "SS-\u003eString-\u003eEither String(Int,SI)",
          "package": "language-sh",
          "partial": "Math Parser",
          "signature": "SS-\u003eString-\u003eEither String(Int,SI)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Arithmetic.html#v:runMathParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the expansion module.  It provides an interface for a monad\n in which expansions can happen, and then defines the expansions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sh.Expansion",
          "name": "Expansion",
          "package": "language-sh",
          "source": "src/Language-Sh-Expansion.html",
          "type": "module"
        },
        "index": {
          "description": "This is the expansion module It provides an interface for monad in which expansions can happen and then defines the expansions",
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "Expansion",
          "package": "language-sh",
          "partial": "Expansion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Expansion",
          "name": "ExpansionFunctions",
          "package": "language-sh",
          "source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "ExpansionFunctions",
          "package": "language-sh",
          "partial": "Expansion Functions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#t:ExpansionFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Expansion",
          "name": "ExpansionFunctions",
          "package": "language-sh",
          "signature": "ExpansionFunctions",
          "source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "ExpansionFunctions",
          "package": "language-sh",
          "partial": "Expansion Functions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:ExpansionFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Expansion",
          "name": "commandSub",
          "package": "language-sh",
          "signature": "[Command] -\u003e m String",
          "source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "commandSub",
          "normalized": "[Command]-\u003ea String",
          "package": "language-sh",
          "partial": "Sub",
          "signature": "[Command]-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:commandSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe have one main sticking point here... in the case of \u003ccode\u003eA=*\u003c/code\u003e, we want\n to use expandWord, and do the glob expansion.  In the case of \u003ccode\u003e\u003e*\u003c/code\u003e, we\n want to \u003cem\u003etry\u003c/em\u003e the glob expansion and then given an error in the case\n that we get multiple hits.  We could make one more expansion function?\n (expandNoAmbiguousGlob?)\n\u003c/p\u003e",
          "module": "Language.Sh.Expansion",
          "name": "expand",
          "package": "language-sh",
          "signature": "ExpansionFunctions m -\u003e [Word] -\u003e m [String]",
          "source": "src/Language-Sh-Expansion.html#expand",
          "type": "function"
        },
        "index": {
          "description": "We have one main sticking point here in the case of we want to use expandWord and do the glob expansion In the case of we want to try the glob expansion and then given an error in the case that we get multiple hits We could make one more expansion function expandNoAmbiguousGlob",
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "expand",
          "normalized": "ExpansionFunctions a-\u003e[Word]-\u003ea[String]",
          "package": "language-sh",
          "signature": "ExpansionFunctions m-\u003e[Word]-\u003em[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Expansion",
          "name": "expandGlob",
          "package": "language-sh",
          "signature": "Word -\u003e m [FilePath]",
          "source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "expandGlob",
          "normalized": "Word-\u003ea[FilePath]",
          "package": "language-sh",
          "partial": "Glob",
          "signature": "Word-\u003em[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:expandGlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a version of expandWord that doesn't deal with globs or remove\n quotes!  It's currently only used in case statements.\n\u003c/p\u003e",
          "module": "Language.Sh.Expansion",
          "name": "expandPattern",
          "package": "language-sh",
          "signature": "ExpansionFunctions m -\u003e Word -\u003e m Word",
          "source": "src/Language-Sh-Expansion.html#expandPattern",
          "type": "function"
        },
        "index": {
          "description": "This is version of expandWord that doesn deal with globs or remove quotes It currently only used in case statements",
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "expandPattern",
          "normalized": "ExpansionFunctions a-\u003eWord-\u003ea Word",
          "package": "language-sh",
          "partial": "Pattern",
          "signature": "ExpansionFunctions m-\u003eWord-\u003em Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:expandPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest: A=1  * --\u003e A=1 ... -\u003e so it's getting expand'ed/joined, and not\n expandWord'ed.  For now, we'll leave globs out of this function, but it\n seems like maybe the only use is in redirects, so then we can make this\n the one that doesn't allow ambiguity.  Also, we know that glob expansion\n comes after field splitting... (B=  ; A=2$B*)\n Tricky: A=\u003ca\u003e3$B*\u003c/a\u003e; echo $A --\u003e looks silly, but echo \u003ca\u003e$A\u003c/a\u003e...\n\u003c/p\u003e",
          "module": "Language.Sh.Expansion",
          "name": "expandWord",
          "package": "language-sh",
          "signature": "ExpansionFunctions m -\u003e Word -\u003e m String",
          "source": "src/Language-Sh-Expansion.html#expandWord",
          "type": "function"
        },
        "index": {
          "description": "Test so it getting expand ed joined and not expandWord ed For now we ll leave globs out of this function but it seems like maybe the only use is in redirects so then we can make this the one that doesn allow ambiguity Also we know that glob expansion comes after field splitting Tricky echo looks silly but echo",
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "expandWord",
          "normalized": "ExpansionFunctions a-\u003eWord-\u003ea String",
          "package": "language-sh",
          "partial": "Word",
          "signature": "ExpansionFunctions m-\u003eWord-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:expandWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Expansion",
          "name": "getAllEnv",
          "package": "language-sh",
          "signature": "m [(String, String)]",
          "source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "getAllEnv",
          "normalized": "a[(String,String)]",
          "package": "language-sh",
          "partial": "All Env",
          "signature": "m[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:getAllEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Expansion",
          "name": "homeDir",
          "package": "language-sh",
          "signature": "String -\u003e m (Maybe String)",
          "source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "homeDir",
          "normalized": "String-\u003ea(Maybe String)",
          "package": "language-sh",
          "partial": "Dir",
          "signature": "String-\u003em(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:homeDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a default function that basically treats globs as literals.\n\u003c/p\u003e",
          "module": "Language.Sh.Expansion",
          "name": "noGlobExpansion",
          "package": "language-sh",
          "signature": "Word -\u003e m [String]",
          "source": "src/Language-Sh-Expansion.html#noGlobExpansion",
          "type": "function"
        },
        "index": {
          "description": "This is default function that basically treats globs as literals",
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "noGlobExpansion",
          "normalized": "Word-\u003ea[String]",
          "package": "language-sh",
          "partial": "Glob Expansion",
          "signature": "Word-\u003em[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:noGlobExpansion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Expansion",
          "name": "positionals",
          "package": "language-sh",
          "signature": "m [String]",
          "source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "positionals",
          "normalized": "a[String]",
          "package": "language-sh",
          "signature": "m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:positionals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Expansion",
          "name": "setEnv",
          "package": "language-sh",
          "signature": "String -\u003e String -\u003e m ()",
          "source": "src/Language-Sh-Expansion.html#ExpansionFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Expansion",
          "module": "Language.Sh.Expansion",
          "name": "setEnv",
          "normalized": "String-\u003eString-\u003ea()",
          "package": "language-sh",
          "partial": "Env",
          "signature": "String-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Expansion.html#v:setEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Glob",
          "name": "Glob",
          "package": "language-sh",
          "source": "src/Language-Sh-Glob.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Sh Glob",
          "module": "Language.Sh.Glob",
          "name": "Glob",
          "package": "language-sh",
          "partial": "Glob",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Glob",
          "name": "expandGlob",
          "package": "language-sh",
          "signature": "Word -\u003e m [FilePath]",
          "source": "src/Language-Sh-Glob.html#expandGlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Glob",
          "module": "Language.Sh.Glob",
          "name": "expandGlob",
          "normalized": "Word-\u003ea[FilePath]",
          "package": "language-sh",
          "partial": "Glob",
          "signature": "Word-\u003em[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#v:expandGlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Glob",
          "name": "matchPattern",
          "package": "language-sh",
          "signature": "Word -\u003e String -\u003e Bool",
          "source": "src/Language-Sh-Glob.html#matchPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Glob",
          "module": "Language.Sh.Glob",
          "name": "matchPattern",
          "normalized": "Word-\u003eString-\u003eBool",
          "package": "language-sh",
          "partial": "Pattern",
          "signature": "Word-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#v:matchPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Glob",
          "name": "removePrefix",
          "package": "language-sh",
          "signature": "Bool-\u003e Word-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Glob",
          "module": "Language.Sh.Glob",
          "name": "removePrefix",
          "normalized": "Bool-\u003eWord-\u003eString-\u003eString",
          "package": "language-sh",
          "partial": "Prefix",
          "signature": "Bool-\u003eWord-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#v:removePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Glob",
          "name": "removeSuffix",
          "package": "language-sh",
          "signature": "Bool-\u003e Word-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Glob",
          "module": "Language.Sh.Glob",
          "name": "removeSuffix",
          "normalized": "Bool-\u003eWord-\u003eString-\u003eString",
          "package": "language-sh",
          "partial": "Suffix",
          "signature": "Bool-\u003eWord-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Glob.html#v:removeSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "Map",
          "package": "language-sh",
          "source": "src/Language-Sh-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "Map",
          "package": "language-sh",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "ExpressionMapper",
          "package": "language-sh",
          "source": "src/Language-Sh-Map.html#ExpressionMapper",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "ExpressionMapper",
          "package": "language-sh",
          "partial": "Expression Mapper",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#t:ExpressionMapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe idea here is to prevent duplicating code needlessly.\n We could go even more extreme and make a third parameter, but\n then we have WAY too many instances, and they all depend on\n every other one anyway...\n class Applicative a =\u003e ExpressionMapper a f t where\n   mapSh :: f -\u003e t -\u003e a t\n\u003c/p\u003e",
          "module": "Language.Sh.Map",
          "name": "ExpressionMapperM",
          "package": "language-sh",
          "source": "src/Language-Sh-Map.html#ExpressionMapperM",
          "type": "class"
        },
        "index": {
          "description": "The idea here is to prevent duplicating code needlessly We could go even more extreme and make third parameter but then we have WAY too many instances and they all depend on every other one anyway class Applicative ExpressionMapper where mapSh",
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "ExpressionMapperM",
          "package": "language-sh",
          "partial": "Expression Mapper",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#t:ExpressionMapperM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapAssignment",
          "package": "language-sh",
          "signature": "f -\u003e Assignment -\u003e Assignment",
          "source": "src/Language-Sh-Map.html#defaultMapAssignment",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapAssignment",
          "normalized": "a-\u003eAssignment-\u003eAssignment",
          "package": "language-sh",
          "partial": "Map Assignment",
          "signature": "f-\u003eAssignment-\u003eAssignment",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapAssignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapAssignmentM",
          "package": "language-sh",
          "signature": "f -\u003e Assignment -\u003e m Assignment",
          "source": "src/Language-Sh-Map.html#defaultMapAssignmentM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapAssignmentM",
          "normalized": "a-\u003eAssignment-\u003eb Assignment",
          "package": "language-sh",
          "partial": "Map Assignment",
          "signature": "f-\u003eAssignment-\u003em Assignment",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapAssignmentM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapCommand",
          "package": "language-sh",
          "signature": "f -\u003e Command -\u003e Command",
          "source": "src/Language-Sh-Map.html#defaultMapCommand",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapCommand",
          "normalized": "a-\u003eCommand-\u003eCommand",
          "package": "language-sh",
          "partial": "Map Command",
          "signature": "f-\u003eCommand-\u003eCommand",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapCommandM",
          "package": "language-sh",
          "signature": "f -\u003e Command -\u003e m Command",
          "source": "src/Language-Sh-Map.html#defaultMapCommandM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapCommandM",
          "normalized": "a-\u003eCommand-\u003eb Command",
          "package": "language-sh",
          "partial": "Map Command",
          "signature": "f-\u003eCommand-\u003em Command",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCommandM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapCommands",
          "package": "language-sh",
          "signature": "f -\u003e [Command] -\u003e [Command]",
          "source": "src/Language-Sh-Map.html#defaultMapCommands",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapCommands",
          "normalized": "a-\u003e[Command]-\u003e[Command]",
          "package": "language-sh",
          "partial": "Map Commands",
          "signature": "f-\u003e[Command]-\u003e[Command]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCommands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapCommandsM",
          "package": "language-sh",
          "signature": "f -\u003e [Command] -\u003e m [Command]",
          "source": "src/Language-Sh-Map.html#defaultMapCommandsM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapCommandsM",
          "normalized": "a-\u003e[Command]-\u003eb[Command]",
          "package": "language-sh",
          "partial": "Map Commands",
          "signature": "f-\u003e[Command]-\u003em[Command]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCommandsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapCompound",
          "package": "language-sh",
          "signature": "f -\u003e CompoundStatement -\u003e CompoundStatement",
          "source": "src/Language-Sh-Map.html#defaultMapCompound",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapCompound",
          "normalized": "a-\u003eCompoundStatement-\u003eCompoundStatement",
          "package": "language-sh",
          "partial": "Map Compound",
          "signature": "f-\u003eCompoundStatement-\u003eCompoundStatement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCompound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapCompoundM",
          "package": "language-sh",
          "signature": "f -\u003e CompoundStatement -\u003e m CompoundStatement",
          "source": "src/Language-Sh-Map.html#defaultMapCompoundM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapCompoundM",
          "normalized": "a-\u003eCompoundStatement-\u003eb CompoundStatement",
          "package": "language-sh",
          "partial": "Map Compound",
          "signature": "f-\u003eCompoundStatement-\u003em CompoundStatement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapCompoundM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapExpansion",
          "package": "language-sh",
          "signature": "f -\u003e Expansion -\u003e Expansion",
          "source": "src/Language-Sh-Map.html#defaultMapExpansion",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapExpansion",
          "normalized": "a-\u003eExpansion-\u003eExpansion",
          "package": "language-sh",
          "partial": "Map Expansion",
          "signature": "f-\u003eExpansion-\u003eExpansion",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapExpansion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapExpansionM",
          "package": "language-sh",
          "signature": "f -\u003e Expansion -\u003e m Expansion",
          "source": "src/Language-Sh-Map.html#defaultMapExpansionM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapExpansionM",
          "normalized": "a-\u003eExpansion-\u003eb Expansion",
          "package": "language-sh",
          "partial": "Map Expansion",
          "signature": "f-\u003eExpansion-\u003em Expansion",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapExpansionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapLexeme",
          "package": "language-sh",
          "signature": "f -\u003e Lexeme -\u003e Lexeme",
          "source": "src/Language-Sh-Map.html#defaultMapLexeme",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapLexeme",
          "normalized": "a-\u003eLexeme-\u003eLexeme",
          "package": "language-sh",
          "partial": "Map Lexeme",
          "signature": "f-\u003eLexeme-\u003eLexeme",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapLexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapLexemeM",
          "package": "language-sh",
          "signature": "f -\u003e Lexeme -\u003e m Lexeme",
          "source": "src/Language-Sh-Map.html#defaultMapLexemeM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapLexemeM",
          "normalized": "a-\u003eLexeme-\u003eb Lexeme",
          "package": "language-sh",
          "partial": "Map Lexeme",
          "signature": "f-\u003eLexeme-\u003em Lexeme",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapLexemeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapLexemes",
          "package": "language-sh",
          "signature": "f -\u003e Lexeme -\u003e [Lexeme]",
          "source": "src/Language-Sh-Map.html#defaultMapLexemes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapLexemes",
          "normalized": "a-\u003eLexeme-\u003e[Lexeme]",
          "package": "language-sh",
          "partial": "Map Lexemes",
          "signature": "f-\u003eLexeme-\u003e[Lexeme]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapLexemes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapLexemesM",
          "package": "language-sh",
          "signature": "f -\u003e Lexeme -\u003e m [Lexeme]",
          "source": "src/Language-Sh-Map.html#defaultMapLexemesM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapLexemesM",
          "normalized": "a-\u003eLexeme-\u003eb[Lexeme]",
          "package": "language-sh",
          "partial": "Map Lexemes",
          "signature": "f-\u003eLexeme-\u003em[Lexeme]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapLexemesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapList",
          "package": "language-sh",
          "signature": "f -\u003e AndOrList -\u003e AndOrList",
          "source": "src/Language-Sh-Map.html#defaultMapList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapList",
          "normalized": "a-\u003eAndOrList-\u003eAndOrList",
          "package": "language-sh",
          "partial": "Map List",
          "signature": "f-\u003eAndOrList-\u003eAndOrList",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapListM",
          "package": "language-sh",
          "signature": "f -\u003e AndOrList -\u003e m AndOrList",
          "source": "src/Language-Sh-Map.html#defaultMapListM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapListM",
          "normalized": "a-\u003eAndOrList-\u003eb AndOrList",
          "package": "language-sh",
          "partial": "Map List",
          "signature": "f-\u003eAndOrList-\u003em AndOrList",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapPipeline",
          "package": "language-sh",
          "signature": "f -\u003e Pipeline -\u003e Pipeline",
          "source": "src/Language-Sh-Map.html#defaultMapPipeline",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapPipeline",
          "normalized": "a-\u003ePipeline-\u003ePipeline",
          "package": "language-sh",
          "partial": "Map Pipeline",
          "signature": "f-\u003ePipeline-\u003ePipeline",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapPipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapPipelineM",
          "package": "language-sh",
          "signature": "f -\u003e Pipeline -\u003e m Pipeline",
          "source": "src/Language-Sh-Map.html#defaultMapPipelineM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapPipelineM",
          "normalized": "a-\u003ePipeline-\u003eb Pipeline",
          "package": "language-sh",
          "partial": "Map Pipeline",
          "signature": "f-\u003ePipeline-\u003em Pipeline",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapPipelineM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapRedir",
          "package": "language-sh",
          "signature": "f -\u003e Redir -\u003e Redir",
          "source": "src/Language-Sh-Map.html#defaultMapRedir",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapRedir",
          "normalized": "a-\u003eRedir-\u003eRedir",
          "package": "language-sh",
          "partial": "Map Redir",
          "signature": "f-\u003eRedir-\u003eRedir",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapRedir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapRedirM",
          "package": "language-sh",
          "signature": "f -\u003e Redir -\u003e m Redir",
          "source": "src/Language-Sh-Map.html#defaultMapRedirM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapRedirM",
          "normalized": "a-\u003eRedir-\u003eb Redir",
          "package": "language-sh",
          "partial": "Map Redir",
          "signature": "f-\u003eRedir-\u003em Redir",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapRedirM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapStatement",
          "package": "language-sh",
          "signature": "f -\u003e Statement -\u003e Statement",
          "source": "src/Language-Sh-Map.html#defaultMapStatement",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapStatement",
          "normalized": "a-\u003eStatement-\u003eStatement",
          "package": "language-sh",
          "partial": "Map Statement",
          "signature": "f-\u003eStatement-\u003eStatement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapStatementM",
          "package": "language-sh",
          "signature": "f -\u003e Statement -\u003e m Statement",
          "source": "src/Language-Sh-Map.html#defaultMapStatementM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapStatementM",
          "normalized": "a-\u003eStatement-\u003eb Statement",
          "package": "language-sh",
          "partial": "Map Statement",
          "signature": "f-\u003eStatement-\u003em Statement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapStatementM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapTerm",
          "package": "language-sh",
          "signature": "f -\u003e Term -\u003e Term",
          "source": "src/Language-Sh-Map.html#defaultMapTerm",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapTerm",
          "normalized": "a-\u003eTerm-\u003eTerm",
          "package": "language-sh",
          "partial": "Map Term",
          "signature": "f-\u003eTerm-\u003eTerm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapTermM",
          "package": "language-sh",
          "signature": "f -\u003e Term -\u003e m Term",
          "source": "src/Language-Sh-Map.html#defaultMapTermM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapTermM",
          "normalized": "a-\u003eTerm-\u003eb Term",
          "package": "language-sh",
          "partial": "Map Term",
          "signature": "f-\u003eTerm-\u003em Term",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapTermM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapTerms",
          "package": "language-sh",
          "signature": "f -\u003e Term -\u003e [Term]",
          "source": "src/Language-Sh-Map.html#defaultMapTerms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapTerms",
          "normalized": "a-\u003eTerm-\u003e[Term]",
          "package": "language-sh",
          "partial": "Map Terms",
          "signature": "f-\u003eTerm-\u003e[Term]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapTermsM",
          "package": "language-sh",
          "signature": "f -\u003e Term -\u003e m [Term]",
          "source": "src/Language-Sh-Map.html#defaultMapTermsM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapTermsM",
          "normalized": "a-\u003eTerm-\u003eb[Term]",
          "package": "language-sh",
          "partial": "Map Terms",
          "signature": "f-\u003eTerm-\u003em[Term]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapTermsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapWord",
          "package": "language-sh",
          "signature": "f -\u003e Word -\u003e Word",
          "source": "src/Language-Sh-Map.html#defaultMapWord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapWord",
          "normalized": "a-\u003eWord-\u003eWord",
          "package": "language-sh",
          "partial": "Map Word",
          "signature": "f-\u003eWord-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "defaultMapWordM",
          "package": "language-sh",
          "signature": "f -\u003e Word -\u003e m Word",
          "source": "src/Language-Sh-Map.html#defaultMapWordM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "defaultMapWordM",
          "normalized": "a-\u003eWord-\u003eb Word",
          "package": "language-sh",
          "partial": "Map Word",
          "signature": "f-\u003eWord-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:defaultMapWordM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapAssignment",
          "package": "language-sh",
          "signature": "f -\u003e Assignment -\u003e Assignment",
          "source": "src/Language-Sh-Map.html#mapAssignment",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapAssignment",
          "normalized": "a-\u003eAssignment-\u003eAssignment",
          "package": "language-sh",
          "partial": "Assignment",
          "signature": "f-\u003eAssignment-\u003eAssignment",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapAssignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapAssignmentM",
          "package": "language-sh",
          "signature": "f -\u003e Assignment -\u003e m Assignment",
          "source": "src/Language-Sh-Map.html#mapAssignmentM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapAssignmentM",
          "normalized": "a-\u003eAssignment-\u003eb Assignment",
          "package": "language-sh",
          "partial": "Assignment",
          "signature": "f-\u003eAssignment-\u003em Assignment",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapAssignmentM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapCommand",
          "package": "language-sh",
          "signature": "f -\u003e Command -\u003e Command",
          "source": "src/Language-Sh-Map.html#mapCommand",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapCommand",
          "normalized": "a-\u003eCommand-\u003eCommand",
          "package": "language-sh",
          "partial": "Command",
          "signature": "f-\u003eCommand-\u003eCommand",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapCommandM",
          "package": "language-sh",
          "signature": "f -\u003e Command -\u003e m Command",
          "source": "src/Language-Sh-Map.html#mapCommandM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapCommandM",
          "normalized": "a-\u003eCommand-\u003eb Command",
          "package": "language-sh",
          "partial": "Command",
          "signature": "f-\u003eCommand-\u003em Command",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCommandM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapCommands",
          "package": "language-sh",
          "signature": "f -\u003e [Command] -\u003e [Command]",
          "source": "src/Language-Sh-Map.html#mapCommands",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapCommands",
          "normalized": "a-\u003e[Command]-\u003e[Command]",
          "package": "language-sh",
          "partial": "Commands",
          "signature": "f-\u003e[Command]-\u003e[Command]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCommands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapCommandsM",
          "package": "language-sh",
          "signature": "f -\u003e [Command] -\u003e m [Command]",
          "source": "src/Language-Sh-Map.html#mapCommandsM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapCommandsM",
          "normalized": "a-\u003e[Command]-\u003eb[Command]",
          "package": "language-sh",
          "partial": "Commands",
          "signature": "f-\u003e[Command]-\u003em[Command]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCommandsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapCompound",
          "package": "language-sh",
          "signature": "f -\u003e CompoundStatement -\u003e CompoundStatement",
          "source": "src/Language-Sh-Map.html#mapCompound",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapCompound",
          "normalized": "a-\u003eCompoundStatement-\u003eCompoundStatement",
          "package": "language-sh",
          "partial": "Compound",
          "signature": "f-\u003eCompoundStatement-\u003eCompoundStatement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCompound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapCompoundM",
          "package": "language-sh",
          "signature": "f -\u003e CompoundStatement -\u003e m CompoundStatement",
          "source": "src/Language-Sh-Map.html#mapCompoundM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapCompoundM",
          "normalized": "a-\u003eCompoundStatement-\u003eb CompoundStatement",
          "package": "language-sh",
          "partial": "Compound",
          "signature": "f-\u003eCompoundStatement-\u003em CompoundStatement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapCompoundM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapExpansion",
          "package": "language-sh",
          "signature": "f -\u003e Expansion -\u003e Expansion",
          "source": "src/Language-Sh-Map.html#mapExpansion",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapExpansion",
          "normalized": "a-\u003eExpansion-\u003eExpansion",
          "package": "language-sh",
          "partial": "Expansion",
          "signature": "f-\u003eExpansion-\u003eExpansion",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapExpansion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapExpansionM",
          "package": "language-sh",
          "signature": "f -\u003e Expansion -\u003e m Expansion",
          "source": "src/Language-Sh-Map.html#mapExpansionM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapExpansionM",
          "normalized": "a-\u003eExpansion-\u003eb Expansion",
          "package": "language-sh",
          "partial": "Expansion",
          "signature": "f-\u003eExpansion-\u003em Expansion",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapExpansionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapLexeme",
          "package": "language-sh",
          "signature": "f -\u003e Lexeme -\u003e Lexeme",
          "source": "src/Language-Sh-Map.html#mapLexeme",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapLexeme",
          "normalized": "a-\u003eLexeme-\u003eLexeme",
          "package": "language-sh",
          "partial": "Lexeme",
          "signature": "f-\u003eLexeme-\u003eLexeme",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapLexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapLexemeM",
          "package": "language-sh",
          "signature": "f -\u003e Lexeme -\u003e m Lexeme",
          "source": "src/Language-Sh-Map.html#mapLexemeM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapLexemeM",
          "normalized": "a-\u003eLexeme-\u003eb Lexeme",
          "package": "language-sh",
          "partial": "Lexeme",
          "signature": "f-\u003eLexeme-\u003em Lexeme",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapLexemeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapLexemes",
          "package": "language-sh",
          "signature": "f -\u003e Lexeme -\u003e [Lexeme]",
          "source": "src/Language-Sh-Map.html#mapLexemes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapLexemes",
          "normalized": "a-\u003eLexeme-\u003e[Lexeme]",
          "package": "language-sh",
          "partial": "Lexemes",
          "signature": "f-\u003eLexeme-\u003e[Lexeme]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapLexemes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapLexemesM",
          "package": "language-sh",
          "signature": "f -\u003e Lexeme -\u003e m [Lexeme]",
          "source": "src/Language-Sh-Map.html#mapLexemesM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapLexemesM",
          "normalized": "a-\u003eLexeme-\u003eb[Lexeme]",
          "package": "language-sh",
          "partial": "Lexemes",
          "signature": "f-\u003eLexeme-\u003em[Lexeme]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapLexemesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapList",
          "package": "language-sh",
          "signature": "f -\u003e AndOrList -\u003e AndOrList",
          "source": "src/Language-Sh-Map.html#mapList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapList",
          "normalized": "a-\u003eAndOrList-\u003eAndOrList",
          "package": "language-sh",
          "partial": "List",
          "signature": "f-\u003eAndOrList-\u003eAndOrList",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapListM",
          "package": "language-sh",
          "signature": "f -\u003e AndOrList -\u003e m AndOrList",
          "source": "src/Language-Sh-Map.html#mapListM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapListM",
          "normalized": "a-\u003eAndOrList-\u003eb AndOrList",
          "package": "language-sh",
          "partial": "List",
          "signature": "f-\u003eAndOrList-\u003em AndOrList",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapPipeline",
          "package": "language-sh",
          "signature": "f -\u003e Pipeline -\u003e Pipeline",
          "source": "src/Language-Sh-Map.html#mapPipeline",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapPipeline",
          "normalized": "a-\u003ePipeline-\u003ePipeline",
          "package": "language-sh",
          "partial": "Pipeline",
          "signature": "f-\u003ePipeline-\u003ePipeline",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapPipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapPipelineM",
          "package": "language-sh",
          "signature": "f -\u003e Pipeline -\u003e m Pipeline",
          "source": "src/Language-Sh-Map.html#mapPipelineM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapPipelineM",
          "normalized": "a-\u003ePipeline-\u003eb Pipeline",
          "package": "language-sh",
          "partial": "Pipeline",
          "signature": "f-\u003ePipeline-\u003em Pipeline",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapPipelineM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapRedir",
          "package": "language-sh",
          "signature": "f -\u003e Redir -\u003e Redir",
          "source": "src/Language-Sh-Map.html#mapRedir",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapRedir",
          "normalized": "a-\u003eRedir-\u003eRedir",
          "package": "language-sh",
          "partial": "Redir",
          "signature": "f-\u003eRedir-\u003eRedir",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapRedir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapRedirM",
          "package": "language-sh",
          "signature": "f -\u003e Redir -\u003e m Redir",
          "source": "src/Language-Sh-Map.html#mapRedirM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapRedirM",
          "normalized": "a-\u003eRedir-\u003eb Redir",
          "package": "language-sh",
          "partial": "Redir",
          "signature": "f-\u003eRedir-\u003em Redir",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapRedirM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapStatement",
          "package": "language-sh",
          "signature": "f -\u003e Statement -\u003e Statement",
          "source": "src/Language-Sh-Map.html#mapStatement",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapStatement",
          "normalized": "a-\u003eStatement-\u003eStatement",
          "package": "language-sh",
          "partial": "Statement",
          "signature": "f-\u003eStatement-\u003eStatement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapStatementM",
          "package": "language-sh",
          "signature": "f -\u003e Statement -\u003e m Statement",
          "source": "src/Language-Sh-Map.html#mapStatementM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapStatementM",
          "normalized": "a-\u003eStatement-\u003eb Statement",
          "package": "language-sh",
          "partial": "Statement",
          "signature": "f-\u003eStatement-\u003em Statement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapStatementM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapTerm",
          "package": "language-sh",
          "signature": "f -\u003e Term -\u003e Term",
          "source": "src/Language-Sh-Map.html#mapTerm",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapTerm",
          "normalized": "a-\u003eTerm-\u003eTerm",
          "package": "language-sh",
          "partial": "Term",
          "signature": "f-\u003eTerm-\u003eTerm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapTermM",
          "package": "language-sh",
          "signature": "f -\u003e Term -\u003e m Term",
          "source": "src/Language-Sh-Map.html#mapTermM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapTermM",
          "normalized": "a-\u003eTerm-\u003eb Term",
          "package": "language-sh",
          "partial": "Term",
          "signature": "f-\u003eTerm-\u003em Term",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapTermM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapTerms",
          "package": "language-sh",
          "signature": "f -\u003e Term -\u003e [Term]",
          "source": "src/Language-Sh-Map.html#mapTerms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapTerms",
          "normalized": "a-\u003eTerm-\u003e[Term]",
          "package": "language-sh",
          "partial": "Terms",
          "signature": "f-\u003eTerm-\u003e[Term]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapTermsM",
          "package": "language-sh",
          "signature": "f -\u003e Term -\u003e m [Term]",
          "source": "src/Language-Sh-Map.html#mapTermsM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapTermsM",
          "normalized": "a-\u003eTerm-\u003eb[Term]",
          "package": "language-sh",
          "partial": "Terms",
          "signature": "f-\u003eTerm-\u003em[Term]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapTermsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapWord",
          "package": "language-sh",
          "signature": "f -\u003e Word -\u003e Word",
          "source": "src/Language-Sh-Map.html#mapWord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapWord",
          "normalized": "a-\u003eWord-\u003eWord",
          "package": "language-sh",
          "partial": "Word",
          "signature": "f-\u003eWord-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Map",
          "name": "mapWordM",
          "package": "language-sh",
          "signature": "f -\u003e Word -\u003e m Word",
          "source": "src/Language-Sh-Map.html#mapWordM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Map",
          "module": "Language.Sh.Map",
          "name": "mapWordM",
          "normalized": "a-\u003eWord-\u003eb Word",
          "package": "language-sh",
          "partial": "Word",
          "signature": "f-\u003eWord-\u003em Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Map.html#v:mapWordM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we use the stuff defined in the AST and Parsec modules\n to parse things.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sh.Parser",
          "name": "Parser",
          "package": "language-sh",
          "source": "src/Language-Sh-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Here we use the stuff defined in the AST and Parsec modules to parse things",
          "hierarchy": "Language Sh Parser",
          "module": "Language.Sh.Parser",
          "name": "Parser",
          "package": "language-sh",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Parser",
          "name": "hereDocsComplete",
          "package": "language-sh",
          "signature": "[Command] -\u003e Bool",
          "source": "src/Language-Sh-Parser.html#hereDocsComplete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Parser",
          "module": "Language.Sh.Parser",
          "name": "hereDocsComplete",
          "normalized": "[Command]-\u003eBool",
          "package": "language-sh",
          "partial": "Docs Complete",
          "signature": "[Command]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Parser.html#v:hereDocsComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main export here.  We take a list of aliases for the\n environment and a \u003ccode\u003eString\u003c/code\u003e to parse.  The return type is \u003ccode\u003eRight\n [Command]\u003c/code\u003e if parsing succeeded and \u003ccode\u003eLeft (String,Bool)\u003c/code\u003e upon\n failure.  The \u003ccode\u003eBool\u003c/code\u003e is \u003ccode\u003eTrue\u003c/code\u003e when the error was fatal/unrecoverable.\n\u003c/p\u003e",
          "module": "Language.Sh.Parser",
          "name": "parse",
          "package": "language-sh",
          "signature": "[(String, String)]-\u003e String-\u003e Either (String, Bool) [Command]",
          "type": "function"
        },
        "index": {
          "description": "This is the main export here We take list of aliases for the environment and String to parse The return type is Right Command if parsing succeeded and Left String Bool upon failure The Bool is True when the error was fatal unrecoverable",
          "hierarchy": "Language Sh Parser",
          "module": "Language.Sh.Parser",
          "name": "parse",
          "normalized": "[(String,String)]-\u003eString-\u003eEither(String,Bool)[Command]",
          "package": "language-sh",
          "signature": "[(String,String)]-\u003eString-\u003eEither(String,Bool)[Command]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Pretty",
          "name": "Pretty",
          "package": "language-sh",
          "source": "src/Language-Sh-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Sh Pretty",
          "module": "Language.Sh.Pretty",
          "name": "Pretty",
          "package": "language-sh",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the pretty-printing class\n\u003c/p\u003e",
          "module": "Language.Sh.Pretty",
          "name": "Pretty",
          "package": "language-sh",
          "source": "src/Language-Sh-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "This is the pretty-printing class",
          "hierarchy": "Language Sh Pretty",
          "module": "Language.Sh.Pretty",
          "name": "Pretty",
          "package": "language-sh",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Pretty",
          "name": "compacted",
          "package": "language-sh",
          "signature": "p -\u003e PrettyP String",
          "source": "src/Language-Sh-Pretty.html#compacted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Pretty",
          "module": "Language.Sh.Pretty",
          "name": "compacted",
          "normalized": "a-\u003ePrettyP String",
          "package": "language-sh",
          "signature": "p-\u003ePrettyP String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#v:compacted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Pretty",
          "name": "indented",
          "package": "language-sh",
          "signature": "Int -\u003e p -\u003e PrettyP String",
          "source": "src/Language-Sh-Pretty.html#indented",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Pretty",
          "module": "Language.Sh.Pretty",
          "name": "indented",
          "normalized": "Int-\u003ea-\u003ePrettyP String",
          "package": "language-sh",
          "signature": "Int-\u003ep-\u003ePrettyP String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#v:indented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Pretty",
          "name": "pretty",
          "package": "language-sh",
          "signature": "pretty",
          "source": "src/Language-Sh-Pretty.html#pretty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sh Pretty",
          "module": "Language.Sh.Pretty",
          "name": "pretty",
          "package": "language-sh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Pretty.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we define the \u003cem\u003ecomplete\u003c/em\u003e abstract syntax tree for\n simple and compound statements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sh.Syntax",
          "name": "Syntax",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "Here we define the complete abstract syntax tree for simple and compound statements",
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Syntax",
          "package": "language-sh",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "AndOrList",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#AndOrList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "AndOrList",
          "package": "language-sh",
          "partial": "And Or List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:AndOrList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Assignment",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#Assignment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Assignment",
          "package": "language-sh",
          "partial": "Assignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Assignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Command",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#Command",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Command",
          "package": "language-sh",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "CompoundStatement",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#CompoundStatement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "CompoundStatement",
          "package": "language-sh",
          "partial": "Compound Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:CompoundStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expansion.  The first three are all variable expansions.  The\n \u003ccode\u003e\u003ca\u003eModifiedExpansion\u003c/a\u003e\u003c/code\u003e in particular also keeps track of which operation\n it is to perform.  The \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e can be any of \u003ccode\u003e\u003ca\u003e-+=?\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n says whether it was paired with a \u003ccode\u003e\u003ccode\u003e:\u003c/code\u003e\u003c/code\u003e in the case of the first four\n or doubled in the case of the latter two.  This isn't a very good\n data structure, but I hesitate to add 12 more algebraic types, one for\n each type of expansion.  It would be elegant to use a function\n parameter here, but then we lose our data-ness and it makes it difficult\n to be \u003ccode\u003eShow\u003c/code\u003e.  We could use a data class that has functions and is\n also \u003ccode\u003eShow\u003c/code\u003e and can be pretty-printed, and this would allow arbitrary\n generalizability, but do we really want this?  It needs to be parsed\n anyway.  The other question is the \u003ccode\u003ebash\u003c/code\u003e extensions: do we parse for\n \u003ccode\u003e/\u003c/code\u003e or should it be an error?  Is there a way to prevent it optionally?\n\u003c/p\u003e",
          "module": "Language.Sh.Syntax",
          "name": "Expansion",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#Expansion",
          "type": "data"
        },
        "index": {
          "description": "An expansion The first three are all variable expansions The ModifiedExpansion in particular also keeps track of which operation it is to perform The Char can be any of and the Bool says whether it was paired with in the case of the first four or doubled in the case of the latter two This isn very good data structure but hesitate to add more algebraic types one for each type of expansion It would be elegant to use function parameter here but then we lose our data-ness and it makes it difficult to be Show We could use data class that has functions and is also Show and can be pretty-printed and this would allow arbitrary generalizability but do we really want this It needs to be parsed anyway The other question is the bash extensions do we parse for or should it be an error Is there way to prevent it optionally",
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Expansion",
          "package": "language-sh",
          "partial": "Expansion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Expansion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Lexeme",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#Lexeme",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Lexeme",
          "package": "language-sh",
          "partial": "Lexeme",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Lexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Pipeline",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#Pipeline",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Pipeline",
          "package": "language-sh",
          "partial": "Pipeline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Pipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Redir",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Redir",
          "package": "language-sh",
          "partial": "Redir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Redir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Statement",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#Statement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Statement",
          "package": "language-sh",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Term",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#Term",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Term",
          "package": "language-sh",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Word",
          "package": "language-sh",
          "source": "src/Language-Sh-Syntax.html#Word",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Word",
          "package": "language-sh",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":||:",
          "package": "language-sh",
          "signature": "AndOrList :||: Pipeline",
          "source": "src/Language-Sh-Syntax.html#AndOrList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":||:",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-124--124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":&&:",
          "package": "language-sh",
          "signature": "AndOrList :&&: Pipeline",
          "source": "src/Language-Sh-Syntax.html#AndOrList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":&&:",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-38--38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":\u003c",
          "package": "language-sh",
          "signature": "Int :\u003c Word",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":\u003c",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":\u003c&",
          "package": "language-sh",
          "signature": "Int :\u003c& Int",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":\u003c&",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":\u003c\u003c",
          "package": "language-sh",
          "signature": "Int :\u003c\u003c String",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":\u003c\u003c",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":\u003c\u003c-",
          "package": "language-sh",
          "signature": "Int :\u003c\u003c- String",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":\u003c\u003c-",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":\u003c\u003e",
          "package": "language-sh",
          "signature": "Int :\u003c\u003e Word",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":\u003c\u003e",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":=",
          "package": "language-sh",
          "signature": "String := Word",
          "source": "src/Language-Sh-Syntax.html#Assignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":=",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":\u003e",
          "package": "language-sh",
          "signature": "Int :\u003e Word",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":\u003e",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":\u003e|",
          "package": "language-sh",
          "signature": "Int :\u003e| Word",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":\u003e|",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":\u003e&",
          "package": "language-sh",
          "signature": "Int :\u003e& Int",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":\u003e&",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-62--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": ":\u003e\u003e",
          "package": "language-sh",
          "signature": "Int :\u003e\u003e Word",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": ":\u003e\u003e",
          "package": "language-sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v::-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Arithmetic",
          "package": "language-sh",
          "signature": "Arithmetic Word",
          "source": "src/Language-Sh-Syntax.html#Expansion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Arithmetic",
          "package": "language-sh",
          "partial": "Arithmetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Arithmetic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Asynchronous",
          "package": "language-sh",
          "signature": "Asynchronous AndOrList",
          "source": "src/Language-Sh-Syntax.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Asynchronous",
          "package": "language-sh",
          "partial": "Asynchronous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Asynchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "BangPipeline",
          "package": "language-sh",
          "signature": "BangPipeline [Statement]",
          "source": "src/Language-Sh-Syntax.html#Pipeline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "BangPipeline",
          "normalized": "BangPipeline[Statement]",
          "package": "language-sh",
          "partial": "Bang Pipeline",
          "signature": "BangPipeline[Statement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:BangPipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "BraceGroup",
          "package": "language-sh",
          "signature": "BraceGroup [Command]",
          "source": "src/Language-Sh-Syntax.html#CompoundStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "BraceGroup",
          "normalized": "BraceGroup[Command]",
          "package": "language-sh",
          "partial": "Brace Group",
          "signature": "BraceGroup[Command]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:BraceGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Case",
          "package": "language-sh",
          "signature": "Case Word [([Word], [Command])]",
          "source": "src/Language-Sh-Syntax.html#CompoundStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Case",
          "normalized": "Case Word[([Word],[Command])]",
          "package": "language-sh",
          "partial": "Case",
          "signature": "Case Word[([Word],[Command])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "CommandSub",
          "package": "language-sh",
          "signature": "CommandSub [Command]",
          "source": "src/Language-Sh-Syntax.html#Expansion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "CommandSub",
          "normalized": "CommandSub[Command]",
          "package": "language-sh",
          "partial": "Command Sub",
          "signature": "CommandSub[Command]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:CommandSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Compound",
          "package": "language-sh",
          "signature": "Compound CompoundStatement [Redir]",
          "source": "src/Language-Sh-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Compound",
          "normalized": "Compound CompoundStatement[Redir]",
          "package": "language-sh",
          "partial": "Compound",
          "signature": "Compound CompoundStatement[Redir]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Compound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Expand",
          "package": "language-sh",
          "signature": "Expand Expansion",
          "source": "src/Language-Sh-Syntax.html#Lexeme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Expand",
          "package": "language-sh",
          "partial": "Expand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "For",
          "package": "language-sh",
          "signature": "For String [Word] [Command]",
          "source": "src/Language-Sh-Syntax.html#CompoundStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "For",
          "normalized": "For String[Word][Command]",
          "package": "language-sh",
          "partial": "For",
          "signature": "For String[Word][Command]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "FunctionDefinition",
          "package": "language-sh",
          "signature": "FunctionDefinition String CompoundStatement [Redir]",
          "source": "src/Language-Sh-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "FunctionDefinition",
          "normalized": "FunctionDefinition String CompoundStatement[Redir]",
          "package": "language-sh",
          "partial": "Function Definition",
          "signature": "FunctionDefinition String CompoundStatement[Redir]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:FunctionDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilled in version...?\n\u003c/p\u003e",
          "module": "Language.Sh.Syntax",
          "name": "Heredoc",
          "package": "language-sh",
          "signature": "Heredoc Int Bool Word",
          "source": "src/Language-Sh-Syntax.html#Redir",
          "type": "function"
        },
        "index": {
          "description": "filled in version",
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Heredoc",
          "package": "language-sh",
          "partial": "Heredoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Heredoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "If",
          "package": "language-sh",
          "signature": "If [Command] [Command] [Command]",
          "source": "src/Language-Sh-Syntax.html#CompoundStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "If",
          "normalized": "If[Command][Command][Command]",
          "package": "language-sh",
          "partial": "If",
          "signature": "If[Command][Command][Command]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "LengthExpansion",
          "package": "language-sh",
          "signature": "LengthExpansion String",
          "source": "src/Language-Sh-Syntax.html#Expansion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "LengthExpansion",
          "package": "language-sh",
          "partial": "Length Expansion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:LengthExpansion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Literal",
          "package": "language-sh",
          "signature": "Literal Char",
          "source": "src/Language-Sh-Syntax.html#Lexeme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Literal",
          "package": "language-sh",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "ModifiedExpansion",
          "package": "language-sh",
          "signature": "ModifiedExpansion String Char Bool Word",
          "source": "src/Language-Sh-Syntax.html#Expansion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "ModifiedExpansion",
          "package": "language-sh",
          "partial": "Modified Expansion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:ModifiedExpansion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "OrderedStatement",
          "package": "language-sh",
          "signature": "OrderedStatement [Term]",
          "source": "src/Language-Sh-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "OrderedStatement",
          "normalized": "OrderedStatement[Term]",
          "package": "language-sh",
          "partial": "Ordered Statement",
          "signature": "OrderedStatement[Term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:OrderedStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Pipeline",
          "package": "language-sh",
          "signature": "Pipeline [Statement]",
          "source": "src/Language-Sh-Syntax.html#Pipeline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Pipeline",
          "normalized": "Pipeline[Statement]",
          "package": "language-sh",
          "partial": "Pipeline",
          "signature": "Pipeline[Statement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Pipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Quote",
          "package": "language-sh",
          "signature": "Quote Char",
          "source": "src/Language-Sh-Syntax.html#Lexeme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Quote",
          "package": "language-sh",
          "partial": "Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Quoted",
          "package": "language-sh",
          "signature": "Quoted Lexeme",
          "source": "src/Language-Sh-Syntax.html#Lexeme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Quoted",
          "package": "language-sh",
          "partial": "Quoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Quoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "SimpleExpansion",
          "package": "language-sh",
          "signature": "SimpleExpansion String",
          "source": "src/Language-Sh-Syntax.html#Expansion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "SimpleExpansion",
          "package": "language-sh",
          "partial": "Simple Expansion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:SimpleExpansion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Singleton",
          "package": "language-sh",
          "signature": "Singleton Pipeline",
          "source": "src/Language-Sh-Syntax.html#AndOrList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Singleton",
          "package": "language-sh",
          "partial": "Singleton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "SplitField",
          "package": "language-sh",
          "signature": "SplitField",
          "source": "src/Language-Sh-Syntax.html#Lexeme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "SplitField",
          "package": "language-sh",
          "partial": "Split Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:SplitField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Statement",
          "package": "language-sh",
          "signature": "Statement [Word] [Redir] [Assignment]",
          "source": "src/Language-Sh-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Statement",
          "normalized": "Statement[Word][Redir][Assignment]",
          "package": "language-sh",
          "partial": "Statement",
          "signature": "Statement[Word][Redir][Assignment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Subshell",
          "package": "language-sh",
          "signature": "Subshell [Command]",
          "source": "src/Language-Sh-Syntax.html#CompoundStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Subshell",
          "normalized": "Subshell[Command]",
          "package": "language-sh",
          "partial": "Subshell",
          "signature": "Subshell[Command]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Subshell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Synchronous",
          "package": "language-sh",
          "signature": "Synchronous AndOrList",
          "source": "src/Language-Sh-Syntax.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Synchronous",
          "package": "language-sh",
          "partial": "Synchronous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Synchronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "TAssignment",
          "package": "language-sh",
          "signature": "TAssignment Assignment",
          "source": "src/Language-Sh-Syntax.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "TAssignment",
          "package": "language-sh",
          "partial": "TAssignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:TAssignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "TRedir",
          "package": "language-sh",
          "signature": "TRedir Redir",
          "source": "src/Language-Sh-Syntax.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "TRedir",
          "package": "language-sh",
          "partial": "TRedir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:TRedir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "TWord",
          "package": "language-sh",
          "signature": "TWord Word",
          "source": "src/Language-Sh-Syntax.html#Term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "TWord",
          "package": "language-sh",
          "partial": "TWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:TWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "Until",
          "package": "language-sh",
          "signature": "Until [Command] [Command]",
          "source": "src/Language-Sh-Syntax.html#CompoundStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "Until",
          "normalized": "Until[Command][Command]",
          "package": "language-sh",
          "partial": "Until",
          "signature": "Until[Command][Command]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:Until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sh.Syntax",
          "name": "While",
          "package": "language-sh",
          "signature": "While [Command] [Command]",
          "source": "src/Language-Sh-Syntax.html#CompoundStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sh Syntax",
          "module": "Language.Sh.Syntax",
          "name": "While",
          "normalized": "While[Command][Command]",
          "package": "language-sh",
          "partial": "While",
          "signature": "While[Command][Command]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sh/docs/Language-Sh-Syntax.html#v:While"
      }
    }
  ]
]