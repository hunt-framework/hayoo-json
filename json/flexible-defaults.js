[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA code-generation system for complex typeclass default-implementation\n configurations.  There are usage examples in this package's source \n distribution[1] and in the random-source package[2].\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ca\u003ehttps://github.com/mokus0/flexible-defaults/tree/master/examples\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttps://github.com/mokus0/random-fu/blob/master/random-source/src/Data/Random/Internal/TH.hs\u003c/a\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults.html",
        "fct-type": "module",
        "title": "FlexibleDefaults"
      },
      "index": {
        "description": "code-generation system for complex typeclass default-implementation configurations There are usage examples in this package source distribution and in the random-source package https github.com mokus0 flexible-defaults tree master examples https github.com mokus0 random-fu blob master random-source src Data Random Internal TH.hs",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "FlexibleDefaults",
        "normalized": "",
        "package": "flexible-defaults",
        "partial": "Flexible Defaults",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#t:Defaults",
      "description": {
        "fct-descr": "\u003cp\u003eA description of a system of \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003es and default \u003ccode\u003e\u003ca\u003eImplementation\u003c/a\u003e\u003c/code\u003es \n which can be used to complete a partial implementation of some type class.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "data",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#Defaults",
        "fct-type": "data",
        "title": "Defaults"
      },
      "index": {
        "description": "description of system of Function and default Implementation which can be used to complete partial implementation of some type class",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "Defaults",
        "normalized": "",
        "package": "flexible-defaults",
        "partial": "Defaults",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#t:Function",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of a function for which one or more default\n \u003ccode\u003e\u003ca\u003eImplementation\u003c/a\u003e\u003c/code\u003es exist.  Defined using the \u003ccode\u003e\u003ca\u003efunction\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "data",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#Function",
        "fct-type": "data",
        "title": "Function"
      },
      "index": {
        "description": "representation of function for which one or more default Implementation exist Defined using the function function",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "Function",
        "normalized": "",
        "package": "flexible-defaults",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#t:Implementation",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of a single possible implementation of a \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e.  Defined\n using the \u003ccode\u003e\u003ca\u003eimplementation\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "data",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#Implementation",
        "fct-type": "data",
        "title": "Implementation"
      },
      "index": {
        "description": "representation of single possible implementation of Function Defined using the implementation function",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "Implementation",
        "normalized": "",
        "package": "flexible-defaults",
        "partial": "Implementation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:cost",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the cost (negated score) associated with the current implementation.\n Only one invocation of either \u003ccode\u003e\u003ca\u003escore\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecost\u003c/a\u003e\u003c/code\u003e may be used per implementation.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "s -\u003e Implementation s ()",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#cost",
        "fct-type": "function",
        "title": "cost"
      },
      "index": {
        "description": "Specify the cost negated score associated with the current implementation Only one invocation of either score or cost may be used per implementation",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "cost",
        "normalized": "a-\u003eImplementation a()",
        "package": "flexible-defaults",
        "partial": "",
        "signature": "s-\u003eImplementation s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:dependsOn",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify that the current implementation must not be used unless the given\n function is already defined.  If this implementation can be used\n mutually-recursively with _ALL_ potential implementations of some other\n function, then a dependency need not be declared on that function.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "String -\u003e Implementation s ()",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#dependsOn",
        "fct-type": "function",
        "title": "dependsOn"
      },
      "index": {
        "description": "Specify that the current implementation must not be used unless the given function is already defined If this implementation can be used mutually-recursively with ALL potential implementations of some other function then dependency need not be declared on that function",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "dependsOn",
        "normalized": "String-\u003eImplementation a()",
        "package": "flexible-defaults",
        "partial": "On",
        "signature": "String-\u003eImplementation s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:function",
      "description": {
        "fct-descr": "\u003cp\u003eDeclare a function that must be implemented, and provide a description\n of any default implementations which can be used.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "String -\u003e Function s a -\u003e Defaults s a",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#function",
        "fct-type": "function",
        "title": "function"
      },
      "index": {
        "description": "Declare function that must be implemented and provide description of any default implementations which can be used",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "function",
        "normalized": "String-\u003eFunction a b-\u003eDefaults a b",
        "package": "flexible-defaults",
        "partial": "",
        "signature": "String-\u003eFunction s a-\u003eDefaults s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:implementDefaults",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a partial list of function declarations, complete that list based on\n the \u003ccode\u003e\u003ca\u003eDefaults\u003c/a\u003e\u003c/code\u003e specification given.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "Defaults s () -\u003e [Dec] -\u003e Q [Dec]",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults.html#implementDefaults",
        "fct-type": "function",
        "title": "implementDefaults"
      },
      "index": {
        "description": "Given partial list of function declarations complete that list based on the Defaults specification given",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "implementDefaults",
        "normalized": "Defaults a()-\u003e[Dec]-\u003eQ[Dec]",
        "package": "flexible-defaults",
        "partial": "Defaults",
        "signature": "Defaults s()-\u003e[Dec]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:implementation",
      "description": {
        "fct-descr": "\u003cp\u003eDescribe a default implementation of the current function\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "Implementation s (Q [Dec]) -\u003e Function s ()",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#implementation",
        "fct-type": "function",
        "title": "implementation"
      },
      "index": {
        "description": "Describe default implementation of the current function",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "implementation",
        "normalized": "Implementation a(Q[Dec])-\u003eFunction a()",
        "package": "flexible-defaults",
        "partial": "",
        "signature": "Implementation s(Q[Dec])-\u003eFunction s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:inline",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify that an \u003ccode\u003e\u003ca\u003eImplementation\u003c/a\u003e\u003c/code\u003e should be annotated with an INLINE pragma.\n Under GHC versions earlier than 6.12 this is a no-op, because those Template\n Haskell implementations do not support pragmas.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "Implementation s ()",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#inline",
        "fct-type": "function",
        "title": "inline"
      },
      "index": {
        "description": "Specify that an Implementation should be annotated with an INLINE pragma Under GHC versions earlier than this is no-op because those Template Haskell implementations do not support pragmas",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "inline",
        "normalized": "Implementation a()",
        "package": "flexible-defaults",
        "partial": "",
        "signature": "Implementation s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:noinline",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify that an \u003ccode\u003e\u003ca\u003eImplementation\u003c/a\u003e\u003c/code\u003e should be annotated with a NOINLINE pragma.\n Under GHC versions earlier than 6.12 this is a no-op, because those Template\n Haskell implementations do not support pragmas.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "Implementation s ()",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#noinline",
        "fct-type": "function",
        "title": "noinline"
      },
      "index": {
        "description": "Specify that an Implementation should be annotated with NOINLINE pragma Under GHC versions earlier than this is no-op because those Template Haskell implementations do not support pragmas",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "noinline",
        "normalized": "Implementation a()",
        "package": "flexible-defaults",
        "partial": "",
        "signature": "Implementation s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:requireFunction",
      "description": {
        "fct-descr": "\u003cp\u003eState that a function must be implemented but has no default implementation.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "String -\u003e Defaults s ()",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#requireFunction",
        "fct-type": "function",
        "title": "requireFunction"
      },
      "index": {
        "description": "State that function must be implemented but has no default implementation",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "requireFunction",
        "normalized": "String-\u003eDefaults a()",
        "package": "flexible-defaults",
        "partial": "Function",
        "signature": "String-\u003eDefaults s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:score",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the score associated with the current implementation.  Only one \n invocation of either \u003ccode\u003e\u003ca\u003escore\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecost\u003c/a\u003e\u003c/code\u003e may be used per implementation.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "s -\u003e Implementation s ()",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#score",
        "fct-type": "function",
        "title": "score"
      },
      "index": {
        "description": "Specify the score associated with the current implementation Only one invocation of either score or cost may be used per implementation",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "score",
        "normalized": "a-\u003eImplementation a()",
        "package": "flexible-defaults",
        "partial": "",
        "signature": "s-\u003eImplementation s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:scoreBy",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all scores.  This function's name comes from the\n following idiom (where \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e is replaced by whatever monoid-constructor\n you want to use to combine scores):\n\u003c/p\u003e\u003cpre\u003e foo = scoreBy Sum $ do\n    ...\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "(a -\u003e b) -\u003e Defaults a t -\u003e Defaults b t",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults-DSL.html#scoreBy",
        "fct-type": "function",
        "title": "scoreBy"
      },
      "index": {
        "description": "Map function over all scores This function name comes from the following idiom where Sum is replaced by whatever monoid-constructor you want to use to combine scores foo scoreBy Sum do",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "scoreBy",
        "normalized": "(a-\u003eb)-\u003eDefaults a c-\u003eDefaults b c",
        "package": "flexible-defaults",
        "partial": "By",
        "signature": "(a-\u003eb)-\u003eDefaults a t-\u003eDefaults b t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flexible-defaults/docs/Language-Haskell-TH-FlexibleDefaults.html#v:withDefaults",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003eQ [Dec]\u003c/code\u003e containing an instance declaration, complete that instance\n declaration using the given \u003ccode\u003e\u003ca\u003eDefaults\u003c/a\u003e\u003c/code\u003e specification.  Typical usage would be\n along the lines of the following:\n\u003c/p\u003e\u003cpre\u003e $(withDefaults fooDefaults [d| instance Foo t where {- ... -} |])\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.TH.FlexibleDefaults",
        "fct-package": "flexible-defaults",
        "fct-signature": "Defaults s () -\u003e Q [Dec] -\u003e Q [Dec]",
        "fct-source": "src/Language-Haskell-TH-FlexibleDefaults.html#withDefaults",
        "fct-type": "function",
        "title": "withDefaults"
      },
      "index": {
        "description": "Given Dec containing an instance declaration complete that instance declaration using the given Defaults specification Typical usage would be along the lines of the following withDefaults fooDefaults instance Foo where",
        "hierarchy": "Language Haskell TH FlexibleDefaults",
        "module": "Language.Haskell.TH.FlexibleDefaults",
        "name": "withDefaults",
        "normalized": "Defaults a()-\u003eQ[Dec]-\u003eQ[Dec]",
        "package": "flexible-defaults",
        "partial": "Defaults",
        "signature": "Defaults s()-\u003eQ[Dec]-\u003eQ[Dec]"
      }
    }
  }
]