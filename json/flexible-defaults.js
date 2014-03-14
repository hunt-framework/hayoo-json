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
        "word": "flexible-defaults"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA code-generation system for complex typeclass default-implementation\n configurations.  There are usage examples in this package's source \n distribution[1] and in the random-source package[2].\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ca\u003ehttps://github.com/mokus0/flexible-defaults/tree/master/examples\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttps://github.com/mokus0/random-fu/blob/master/random-source/src/Data/Random/Internal/TH.hs\u003c/a\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "FlexibleDefaults",
          "package": "flexible-defaults",
          "source": "src/Language-Haskell-TH-FlexibleDefaults.html",
          "type": "module"
        },
        "index": {
          "description": "code-generation system for complex typeclass default-implementation configurations There are usage examples in this package source distribution and in the random-source package https github.com mokus0 flexible-defaults tree master examples https github.com mokus0 random-fu blob master random-source src Data Random Internal TH.hs",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "FlexibleDefaults",
          "package": "flexible-defaults",
          "partial": "Flexible Defaults",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of a system of \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003es and default \u003ccode\u003e\u003ca\u003eImplementation\u003c/a\u003e\u003c/code\u003es \n which can be used to complete a partial implementation of some type class.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "Defaults",
          "package": "flexible-defaults",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#Defaults",
          "type": "data"
        },
        "index": {
          "description": "description of system of Function and default Implementation which can be used to complete partial implementation of some type class",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "Defaults",
          "package": "flexible-defaults",
          "partial": "Defaults",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#t:Defaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of a function for which one or more default\n \u003ccode\u003e\u003ca\u003eImplementation\u003c/a\u003e\u003c/code\u003es exist.  Defined using the \u003ccode\u003e\u003ca\u003efunction\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "Function",
          "package": "flexible-defaults",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#Function",
          "type": "data"
        },
        "index": {
          "description": "representation of function for which one or more default Implementation exist Defined using the function function",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "Function",
          "package": "flexible-defaults",
          "partial": "Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of a single possible implementation of a \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e.  Defined\n using the \u003ccode\u003e\u003ca\u003eimplementation\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "Implementation",
          "package": "flexible-defaults",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#Implementation",
          "type": "data"
        },
        "index": {
          "description": "representation of single possible implementation of Function Defined using the implementation function",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "Implementation",
          "package": "flexible-defaults",
          "partial": "Implementation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#t:Implementation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the cost (negated score) associated with the current implementation.\n Only one invocation of either \u003ccode\u003e\u003ca\u003escore\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecost\u003c/a\u003e\u003c/code\u003e may be used per implementation.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "cost",
          "package": "flexible-defaults",
          "signature": "s -\u003e Implementation s ()",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#cost",
          "type": "function"
        },
        "index": {
          "description": "Specify the cost negated score associated with the current implementation Only one invocation of either score or cost may be used per implementation",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "cost",
          "normalized": "a-\u003eImplementation a()",
          "package": "flexible-defaults",
          "signature": "s-\u003eImplementation s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:cost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify that the current implementation must not be used unless the given\n function is already defined.  If this implementation can be used\n mutually-recursively with _ALL_ potential implementations of some other\n function, then a dependency need not be declared on that function.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "dependsOn",
          "package": "flexible-defaults",
          "signature": "String -\u003e Implementation s ()",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#dependsOn",
          "type": "function"
        },
        "index": {
          "description": "Specify that the current implementation must not be used unless the given function is already defined If this implementation can be used mutually-recursively with ALL potential implementations of some other function then dependency need not be declared on that function",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "dependsOn",
          "normalized": "String-\u003eImplementation a()",
          "package": "flexible-defaults",
          "partial": "On",
          "signature": "String-\u003eImplementation s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:dependsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a function that must be implemented, and provide a description\n of any default implementations which can be used.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "function",
          "package": "flexible-defaults",
          "signature": "String -\u003e Function s a -\u003e Defaults s a",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#function",
          "type": "function"
        },
        "index": {
          "description": "Declare function that must be implemented and provide description of any default implementations which can be used",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "function",
          "normalized": "String-\u003eFunction a b-\u003eDefaults a b",
          "package": "flexible-defaults",
          "signature": "String-\u003eFunction s a-\u003eDefaults s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a partial list of function declarations, complete that list based on\n the \u003ccode\u003e\u003ca\u003eDefaults\u003c/a\u003e\u003c/code\u003e specification given.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "implementDefaults",
          "package": "flexible-defaults",
          "signature": "Defaults s () -\u003e [Dec] -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-FlexibleDefaults.html#implementDefaults",
          "type": "function"
        },
        "index": {
          "description": "Given partial list of function declarations complete that list based on the Defaults specification given",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "implementDefaults",
          "normalized": "Defaults a()-\u003e[Dec]-\u003eQ[Dec]",
          "package": "flexible-defaults",
          "partial": "Defaults",
          "signature": "Defaults s()-\u003e[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:implementDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe a default implementation of the current function\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "implementation",
          "package": "flexible-defaults",
          "signature": "Implementation s (Q [Dec]) -\u003e Function s ()",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#implementation",
          "type": "function"
        },
        "index": {
          "description": "Describe default implementation of the current function",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "implementation",
          "normalized": "Implementation a(Q[Dec])-\u003eFunction a()",
          "package": "flexible-defaults",
          "signature": "Implementation s(Q[Dec])-\u003eFunction s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:implementation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify that an \u003ccode\u003e\u003ca\u003eImplementation\u003c/a\u003e\u003c/code\u003e should be annotated with an INLINE pragma.\n Under GHC versions earlier than 6.12 this is a no-op, because those Template\n Haskell implementations do not support pragmas.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "inline",
          "package": "flexible-defaults",
          "signature": "Implementation s ()",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#inline",
          "type": "function"
        },
        "index": {
          "description": "Specify that an Implementation should be annotated with an INLINE pragma Under GHC versions earlier than this is no-op because those Template Haskell implementations do not support pragmas",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "inline",
          "normalized": "Implementation a()",
          "package": "flexible-defaults",
          "signature": "Implementation s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:inline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify that an \u003ccode\u003e\u003ca\u003eImplementation\u003c/a\u003e\u003c/code\u003e should be annotated with a NOINLINE pragma.\n Under GHC versions earlier than 6.12 this is a no-op, because those Template\n Haskell implementations do not support pragmas.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "noinline",
          "package": "flexible-defaults",
          "signature": "Implementation s ()",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#noinline",
          "type": "function"
        },
        "index": {
          "description": "Specify that an Implementation should be annotated with NOINLINE pragma Under GHC versions earlier than this is no-op because those Template Haskell implementations do not support pragmas",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "noinline",
          "normalized": "Implementation a()",
          "package": "flexible-defaults",
          "signature": "Implementation s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:noinline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState that a function must be implemented but has no default implementation.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "requireFunction",
          "package": "flexible-defaults",
          "signature": "String -\u003e Defaults s ()",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#requireFunction",
          "type": "function"
        },
        "index": {
          "description": "State that function must be implemented but has no default implementation",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "requireFunction",
          "normalized": "String-\u003eDefaults a()",
          "package": "flexible-defaults",
          "partial": "Function",
          "signature": "String-\u003eDefaults s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:requireFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the score associated with the current implementation.  Only one \n invocation of either \u003ccode\u003e\u003ca\u003escore\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecost\u003c/a\u003e\u003c/code\u003e may be used per implementation.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "score",
          "package": "flexible-defaults",
          "signature": "s -\u003e Implementation s ()",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#score",
          "type": "function"
        },
        "index": {
          "description": "Specify the score associated with the current implementation Only one invocation of either score or cost may be used per implementation",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "score",
          "normalized": "a-\u003eImplementation a()",
          "package": "flexible-defaults",
          "signature": "s-\u003eImplementation s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all scores.  This function's name comes from the\n following idiom (where \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e is replaced by whatever monoid-constructor\n you want to use to combine scores):\n\u003c/p\u003e\u003cpre\u003e foo = scoreBy Sum $ do\n    ...\n\u003c/pre\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "scoreBy",
          "package": "flexible-defaults",
          "signature": "(a -\u003e b) -\u003e Defaults a t -\u003e Defaults b t",
          "source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#scoreBy",
          "type": "function"
        },
        "index": {
          "description": "Map function over all scores This function name comes from the following idiom where Sum is replaced by whatever monoid-constructor you want to use to combine scores foo scoreBy Sum do",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "scoreBy",
          "normalized": "(a-\u003eb)-\u003eDefaults a c-\u003eDefaults b c",
          "package": "flexible-defaults",
          "partial": "By",
          "signature": "(a-\u003eb)-\u003eDefaults a t-\u003eDefaults b t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:scoreBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003eQ [Dec]\u003c/code\u003e containing an instance declaration, complete that instance\n declaration using the given \u003ccode\u003e\u003ca\u003eDefaults\u003c/a\u003e\u003c/code\u003e specification.  Typical usage would be\n along the lines of the following:\n\u003c/p\u003e\u003cpre\u003e $(withDefaults fooDefaults [d| instance Foo t where {- ... -} |])\n\u003c/pre\u003e",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "withDefaults",
          "package": "flexible-defaults",
          "signature": "Defaults s () -\u003e Q [Dec] -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-FlexibleDefaults.html#withDefaults",
          "type": "function"
        },
        "index": {
          "description": "Given Dec containing an instance declaration complete that instance declaration using the given Defaults specification Typical usage would be along the lines of the following withDefaults fooDefaults instance Foo where",
          "hierarchy": "Language Haskell TH FlexibleDefaults",
          "module": "Language.Haskell.TH.FlexibleDefaults",
          "name": "withDefaults",
          "normalized": "Defaults a()-\u003eQ[Dec]-\u003eQ[Dec]",
          "package": "flexible-defaults",
          "partial": "Defaults",
          "signature": "Defaults s()-\u003eQ[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:withDefaults"
      }
    }
  ]
]