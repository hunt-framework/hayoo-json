[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-CLI.html#",
      "description": {
        "fct-module": "Laborantin.CLI",
        "fct-package": "laborantin-hs",
        "fct-signature": "module",
        "fct-source": "src/Laborantin-CLI.html",
        "fct-type": "module",
        "title": "CLI"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin CLI",
        "module": "Laborantin.CLI",
        "name": "CLI",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "CLI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-CLI.html#v:defaultMain",
      "description": {
        "fct-module": "Laborantin.CLI",
        "fct-package": "laborantin-hs",
        "fct-signature": "[ScenarioDescription EnvIO] -\u003e IO ()",
        "fct-source": "src/Laborantin-CLI.html#defaultMain",
        "fct-type": "function",
        "title": "defaultMain"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin CLI",
        "module": "Laborantin.CLI",
        "name": "defaultMain",
        "normalized": "[ScenarioDescription EnvIO]-\u003eIO()",
        "package": "laborantin-hs",
        "partial": "Main",
        "signature": "[ScenarioDescription EnvIO]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#",
      "description": {
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "module",
        "fct-source": "src/Laborantin-DSL.html",
        "fct-type": "module",
        "title": "DSL"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "DSL",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "DSL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:analyze",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the offline analysis hook for this scenario\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Step m () -\u003e State (ScenarioDescription m) ()",
        "fct-source": "src/Laborantin-DSL.html#analyze",
        "fct-type": "function",
        "title": "analyze"
      },
      "index": {
        "description": "Define the offline analysis hook for this scenario",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "analyze",
        "normalized": "Step a()-\u003eState(ScenarioDescription a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Step m()-\u003eState(ScenarioDescription m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:ancestors",
      "description": {
        "fct-descr": "\u003cp\u003eGet all ancestors for a given scenario name.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e Step m [Execution m]",
        "fct-source": "src/Laborantin-DSL.html#ancestors",
        "fct-type": "function",
        "title": "ancestors"
      },
      "index": {
        "description": "Get all ancestors for given scenario name",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "ancestors",
        "normalized": "Text-\u003eStep a[Execution a]",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Text-\u003eStep m[Execution m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:ancestorsMatching",
      "description": {
        "fct-descr": "\u003cp\u003eGet all ancestors for a given scenario name and matching a query expressed as a string.\n Current implementation silences errors.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e Text -\u003e Step m [Execution m]",
        "fct-source": "src/Laborantin-DSL.html#ancestorsMatching",
        "fct-type": "function",
        "title": "ancestorsMatching"
      },
      "index": {
        "description": "Get all ancestors for given scenario name and matching query expressed as string Current implementation silences errors",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "ancestorsMatching",
        "normalized": "Text-\u003eText-\u003eStep a[Execution a]",
        "package": "laborantin-hs",
        "partial": "Matching",
        "signature": "Text-\u003eText-\u003eStep m[Execution m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:ancestorsMatchingTExpr",
      "description": {
        "fct-descr": "\u003cp\u003eGet all ancestors for a given scenario name and matching a TExpr Bool query.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e TExpr Bool -\u003e Step m [Execution m]",
        "fct-source": "src/Laborantin-DSL.html#ancestorsMatchingTExpr",
        "fct-type": "function",
        "title": "ancestorsMatchingTExpr"
      },
      "index": {
        "description": "Get all ancestors for given scenario name and matching TExpr Bool query",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "ancestorsMatchingTExpr",
        "normalized": "Text-\u003eTExpr Bool-\u003eStep a[Execution a]",
        "package": "laborantin-hs",
        "partial": "Matching TExpr",
        "signature": "Text-\u003eTExpr Bool-\u003eStep m[Execution m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:appendResult",
      "description": {
        "fct-descr": "\u003cp\u003eAppends a chunk of data to the result. \n\u003c/p\u003e\u003cp\u003eImplementations will return their specific results.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "FilePath-\u003e Text-\u003e Step m ()",
        "fct-type": "function",
        "title": "appendResult"
      },
      "index": {
        "description": "Appends chunk of data to the result Implementations will return their specific results",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "appendResult",
        "normalized": "FilePath-\u003eText-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Result",
        "signature": "FilePath-\u003eText-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:arr",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulate an array of \u003ccode\u003e\u003ca\u003estr\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enum\u003c/a\u003e\u003c/code\u003e values as a \u003ccode\u003e\u003ca\u003eParameterValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "[ParameterValue] -\u003e ParameterValue",
        "fct-source": "src/Laborantin-DSL.html#arr",
        "fct-type": "function",
        "title": "arr"
      },
      "index": {
        "description": "Encapsulate an array of str or num values as ParameterValue",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "arr",
        "normalized": "[ParameterValue]-\u003eParameterValue",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "[ParameterValue]-\u003eParameterValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:backend",
      "description": {
        "fct-descr": "\u003cp\u003eReturns current backend\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Step m (Backend m)",
        "fct-source": "src/Laborantin-DSL.html#backend",
        "fct-type": "function",
        "title": "backend"
      },
      "index": {
        "description": "Returns current backend",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "backend",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003eSet verification action for the dependency\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "(Execution m -\u003e m Bool) -\u003e State (Dependency m) ()",
        "fct-source": "src/Laborantin-DSL.html#check",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "Set verification action for the dependency",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "check",
        "normalized": "(Execution a-\u003ea Bool)-\u003eState(Dependency a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "(Execution m-\u003em Bool)-\u003eState(Dependency m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:dbg",
      "description": {
        "fct-descr": "\u003cp\u003eSends a line of data to the logger (debug mode)\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e Step m ()",
        "fct-source": "src/Laborantin-DSL.html#dbg",
        "fct-type": "function",
        "title": "dbg"
      },
      "index": {
        "description": "Sends line of data to the logger debug mode",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "dbg",
        "normalized": "Text-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Text-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:dependency",
      "description": {
        "fct-descr": "\u003cp\u003eDSL entry point to build a 'Dependency a' within a scenario.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e State (Dependency m) () -\u003e State (ScenarioDescription m) ()",
        "fct-source": "src/Laborantin-DSL.html#dependency",
        "fct-type": "function",
        "title": "dependency"
      },
      "index": {
        "description": "DSL entry point to build Dependency within scenario",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "dependency",
        "normalized": "Text-\u003eState(Dependency a)()-\u003eState(ScenarioDescription a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Text-\u003eState(Dependency m)()-\u003eState(ScenarioDescription m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:describe",
      "description": {
        "fct-descr": "\u003cp\u003eAttach a description to the \u003ccode\u003eParameter\u003c/code\u003e / \u003ccode\u003eScnario\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e State a ()",
        "fct-source": "src/Laborantin-DSL.html#describe",
        "fct-type": "function",
        "title": "describe"
      },
      "index": {
        "description": "Attach description to the Parameter Scnario",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "describe",
        "normalized": "Text-\u003eState a()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Text-\u003eState a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:err",
      "description": {
        "fct-descr": "\u003cp\u003eInterrupts the scenario by throwing an error\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "String -\u003e Step m ()",
        "fct-source": "src/Laborantin-DSL.html#err",
        "fct-type": "function",
        "title": "err"
      },
      "index": {
        "description": "Interrupts the scenario by throwing an error",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "err",
        "normalized": "String-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "String-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:getVar",
      "description": {
        "fct-descr": "\u003cp\u003eGet an execution variable and tries to cast it from it's Dynamic\n representation.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the variable is missing or if it could not\n be cast to the wanted type.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text-\u003e m (Maybe v)",
        "fct-type": "function",
        "title": "getVar"
      },
      "index": {
        "description": "Get an execution variable and tries to cast it from it Dynamic representation Returns Nothing if the variable is missing or if it could not be cast to the wanted type",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "getVar",
        "normalized": "Text-\u003ea(Maybe b)",
        "package": "laborantin-hs",
        "partial": "Var",
        "signature": "Text-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:logger",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003e object for this scenario.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Step m (LogHandler m)",
        "fct-source": "src/Laborantin-DSL.html#logger",
        "fct-type": "function",
        "title": "logger"
      },
      "index": {
        "description": "Return LogHandler object for this scenario",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "logger",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:num",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulate an integer value as a \u003ccode\u003e\u003ca\u003eParameterValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Integer -\u003e ParameterValue",
        "fct-source": "src/Laborantin-DSL.html#num",
        "fct-type": "function",
        "title": "num"
      },
      "index": {
        "description": "Encapsulate an integer value as ParameterValue",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "num",
        "normalized": "Integer-\u003eParameterValue",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Integer-\u003eParameterValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:param",
      "description": {
        "fct-descr": "\u003cp\u003eGet the parameter with given name.\n Throw an error if the parameter is missing.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text-\u003e Step m ParameterValue",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "Get the parameter with given name Throw an error if the parameter is missing",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "param",
        "normalized": "Text-\u003eStep a ParameterValue",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Text-\u003eStep m ParameterValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:parameter",
      "description": {
        "fct-descr": "\u003cp\u003eDSL entry point to build a \u003ccode\u003e\u003ca\u003eParameterDescription\u003c/a\u003e\u003c/code\u003e within a scenario.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e State ParameterDescription () -\u003e State (ScenarioDescription m) ()",
        "fct-source": "src/Laborantin-DSL.html#parameter",
        "fct-type": "function",
        "title": "parameter"
      },
      "index": {
        "description": "DSL entry point to build ParameterDescription within scenario",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "parameter",
        "normalized": "Text-\u003eState ParameterDescription()-\u003eState(ScenarioDescription a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Text-\u003eState ParameterDescription()-\u003eState(ScenarioDescription m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:range",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulate a range as a \u003ccode\u003e\u003ca\u003eParameterValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Rational -\u003e Rational -\u003e Rational -\u003e ParameterValue",
        "fct-source": "src/Laborantin-DSL.html#range",
        "fct-type": "function",
        "title": "range"
      },
      "index": {
        "description": "Encapsulate range as ParameterValue",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "range",
        "normalized": "Rational-\u003eRational-\u003eRational-\u003eParameterValue",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Rational-\u003eRational-\u003eRational-\u003eParameterValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:recover",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the recovery hook for this scenario\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "(ExecutionError -\u003e Step m ()) -\u003e State (ScenarioDescription m) ()",
        "fct-source": "src/Laborantin-DSL.html#recover",
        "fct-type": "function",
        "title": "recover"
      },
      "index": {
        "description": "Define the recovery hook for this scenario",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "recover",
        "normalized": "(ExecutionError-\u003eStep a())-\u003eState(ScenarioDescription a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "(ExecutionError-\u003eStep m())-\u003eState(ScenarioDescription m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:require",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the TExpr Bool to load ancestor\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "ScenarioDescription m -\u003e Text -\u003e State (ScenarioDescription m) ()",
        "fct-source": "src/Laborantin-DSL.html#require",
        "fct-type": "function",
        "title": "require"
      },
      "index": {
        "description": "Defines the TExpr Bool to load ancestor",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "require",
        "normalized": "ScenarioDescription a-\u003eText-\u003eState(ScenarioDescription a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "ScenarioDescription m-\u003eText-\u003eState(ScenarioDescription m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:requireTExpr",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the TExpr Bool to load ancestor\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "ScenarioDescription m -\u003e TExpr Bool -\u003e State (ScenarioDescription m) ()",
        "fct-source": "src/Laborantin-DSL.html#requireTExpr",
        "fct-type": "function",
        "title": "requireTExpr"
      },
      "index": {
        "description": "Defines the TExpr Bool to load ancestor",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "requireTExpr",
        "normalized": "ScenarioDescription a-\u003eTExpr Bool-\u003eState(ScenarioDescription a)()",
        "package": "laborantin-hs",
        "partial": "TExpr",
        "signature": "ScenarioDescription m-\u003eTExpr Bool-\u003eState(ScenarioDescription m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:resolve",
      "description": {
        "fct-descr": "\u003cp\u003eSet resolution action for the dependency\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "((Execution m, Backend m) -\u003e m (Execution m)) -\u003e State (Dependency m) ()",
        "fct-source": "src/Laborantin-DSL.html#resolve",
        "fct-type": "function",
        "title": "resolve"
      },
      "index": {
        "description": "Set resolution action for the dependency",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "resolve",
        "normalized": "((Execution a,Backend a)-\u003ea(Execution a))-\u003eState(Dependency a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "((Execution m,Backend m)-\u003em(Execution m))-\u003eState(Dependency m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e object for the given name.\n\u003c/p\u003e\u003cp\u003eImplementations will return their specific results.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "FilePath -\u003e Step m (Result m)",
        "fct-source": "src/Laborantin-DSL.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Returns Result object for the given name Implementations will return their specific results",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "result",
        "normalized": "FilePath-\u003eStep a(Result a)",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "FilePath-\u003eStep m(Result m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the main run hook for this scenario\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Step m () -\u003e State (ScenarioDescription m) ()",
        "fct-source": "src/Laborantin-DSL.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Define the main run hook for this scenario",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "run",
        "normalized": "Step a()-\u003eState(ScenarioDescription a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Step m()-\u003eState(ScenarioDescription m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:scenario",
      "description": {
        "fct-descr": "\u003cp\u003eDSL entry point to build a \u003ccode\u003e\u003ca\u003eScenarioDescription\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e State (ScenarioDescription m) () -\u003e ScenarioDescription m",
        "fct-source": "src/Laborantin-DSL.html#scenario",
        "fct-type": "function",
        "title": "scenario"
      },
      "index": {
        "description": "DSL entry point to build ScenarioDescription",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "scenario",
        "normalized": "Text-\u003eState(ScenarioDescription a)()-\u003eScenarioDescription a",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Text-\u003eState(ScenarioDescription m)()-\u003eScenarioDescription m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:self",
      "description": {
        "fct-descr": "\u003cp\u003eReturns current execution\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Step m (Execution m)",
        "fct-source": "src/Laborantin-DSL.html#self",
        "fct-type": "function",
        "title": "self"
      },
      "index": {
        "description": "Returns current execution",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "self",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:setVar",
      "description": {
        "fct-descr": "\u003cp\u003eSet an execution variable.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text-\u003e v-\u003e m ()",
        "fct-type": "function",
        "title": "setVar"
      },
      "index": {
        "description": "Set an execution variable",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "setVar",
        "normalized": "Text-\u003ea-\u003eb()",
        "package": "laborantin-hs",
        "partial": "Var",
        "signature": "Text-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:setup",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the setup hook for this scenario\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Step m () -\u003e State (ScenarioDescription m) ()",
        "fct-source": "src/Laborantin-DSL.html#setup",
        "fct-type": "function",
        "title": "setup"
      },
      "index": {
        "description": "Define the setup hook for this scenario",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "setup",
        "normalized": "Step a()-\u003eState(ScenarioDescription a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Step m()-\u003eState(ScenarioDescription m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:str",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulate a Text as a \u003ccode\u003e\u003ca\u003eParameterValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e ParameterValue",
        "fct-source": "src/Laborantin-DSL.html#str",
        "fct-type": "function",
        "title": "str"
      },
      "index": {
        "description": "Encapsulate Text as ParameterValue",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "str",
        "normalized": "Text-\u003eParameterValue",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Text-\u003eParameterValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:teardown",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the teardown hook for this scenario\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "Step m () -\u003e State (ScenarioDescription m) ()",
        "fct-source": "src/Laborantin-DSL.html#teardown",
        "fct-type": "function",
        "title": "teardown"
      },
      "index": {
        "description": "Define the teardown hook for this scenario",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "teardown",
        "normalized": "Step a()-\u003eState(ScenarioDescription a)()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Step m()-\u003eState(ScenarioDescription m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:values",
      "description": {
        "fct-descr": "\u003cp\u003eSet default values for the paramater\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "[ParameterValue] -\u003e State ParameterDescription ()",
        "fct-source": "src/Laborantin-DSL.html#values",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "Set default values for the paramater",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "values",
        "normalized": "[ParameterValue]-\u003eState ParameterDescription()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "[ParameterValue]-\u003eState ParameterDescription()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:writeResult",
      "description": {
        "fct-descr": "\u003cp\u003eWrite (overwrite) the result in its entirety.\n\u003c/p\u003e\u003cp\u003eImplementations will return their specific results.\n\u003c/p\u003e",
        "fct-module": "Laborantin.DSL",
        "fct-package": "laborantin-hs",
        "fct-signature": "FilePath-\u003e Text-\u003e Step m ()",
        "fct-type": "function",
        "title": "writeResult"
      },
      "index": {
        "description": "Write overwrite the result in its entirety Implementations will return their specific results",
        "hierarchy": "Laborantin DSL",
        "module": "Laborantin.DSL",
        "name": "writeResult",
        "normalized": "FilePath-\u003eText-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Result",
        "signature": "FilePath-\u003eText-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#",
      "description": {
        "fct-module": "Laborantin.Implementation",
        "fct-package": "laborantin-hs",
        "fct-signature": "module",
        "fct-source": "src/Laborantin-Implementation.html",
        "fct-type": "module",
        "title": "Implementation"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Implementation",
        "module": "Laborantin.Implementation",
        "name": "Implementation",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Implementation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#t:EnvIO",
      "description": {
        "fct-descr": "\u003cp\u003eDefault monad for \u003ccode\u003e\u003ca\u003edefaultBackend\u003c/a\u003e\u003c/code\u003e.\n   EnvIO carries a \u003ccode\u003e\u003ca\u003eDynEnv\u003c/a\u003e\u003c/code\u003e in a state and allows you to perform IO actions.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Implementation",
        "fct-package": "laborantin-hs",
        "fct-signature": "type",
        "fct-source": "src/Laborantin-Implementation.html#EnvIO",
        "fct-type": "type",
        "title": "EnvIO"
      },
      "index": {
        "description": "Default monad for defaultBackend EnvIO carries DynEnv in state and allows you to perform IO actions",
        "hierarchy": "Laborantin Implementation",
        "module": "Laborantin.Implementation",
        "name": "EnvIO",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Env IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:defaultBackend",
      "description": {
        "fct-descr": "\u003cp\u003eDefault backend for the \u003ccode\u003e\u003ca\u003eEnvIO\u003c/a\u003e\u003c/code\u003e monad.  This backend uses the filesystem\n as storage and UUIDs for scenario instances (supposes that UUID collision\n cannot happen).\n\u003c/p\u003e\u003cp\u003eParameters, logfiles, and result data all are stored in a unique directory named\n .\u003cem\u003e\u003cscenario-name\u003e\u003c/em\u003e\u003ca\u003euuid\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eResults are individual files in this directory. There is no namespacing\n hence avoid the following names: 'execution.json', 'execution-log.txt', and\n 'execution-log.xml'. These three files are the scenario execution metadata\n and logs.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Implementation",
        "fct-package": "laborantin-hs",
        "fct-signature": "Backend EnvIO",
        "fct-source": "src/Laborantin-Implementation.html#defaultBackend",
        "fct-type": "function",
        "title": "defaultBackend"
      },
      "index": {
        "description": "Default backend for the EnvIO monad This backend uses the filesystem as storage and UUIDs for scenario instances supposes that UUID collision cannot happen Parameters logfiles and result data all are stored in unique directory named scenario-name uuid Results are individual files in this directory There is no namespacing hence avoid the following names execution.json execution-log.txt and execution-log.xml These three files are the scenario execution metadata and logs",
        "hierarchy": "Laborantin Implementation",
        "module": "Laborantin.Implementation",
        "name": "defaultBackend",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:defaultLog",
      "description": {
        "fct-descr": "\u003cp\u003eDefault logger for the \u003ccode\u003e\u003ca\u003eEnvIO\u003c/a\u003e\u003c/code\u003e monad (see \u003ccode\u003e\u003ca\u003edefaultBackend\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Laborantin.Implementation",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e LogHandler EnvIO",
        "fct-source": "src/Laborantin-Implementation.html#defaultLog",
        "fct-type": "function",
        "title": "defaultLog"
      },
      "index": {
        "description": "Default logger for the EnvIO monad see defaultBackend",
        "hierarchy": "Laborantin Implementation",
        "module": "Laborantin.Implementation",
        "name": "defaultLog",
        "normalized": "Execution a-\u003eLogHandler EnvIO",
        "package": "laborantin-hs",
        "partial": "Log",
        "signature": "Execution m-\u003eLogHandler EnvIO"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:defaultResult",
      "description": {
        "fct-descr": "\u003cp\u003eDefault result handler for the \u003ccode\u003e\u003ca\u003eEnvIO\u003c/a\u003e\u003c/code\u003e monad (see \u003ccode\u003e\u003ca\u003edefaultBackend\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Laborantin.Implementation",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e FilePath -\u003e Result EnvIO",
        "fct-source": "src/Laborantin-Implementation.html#defaultResult",
        "fct-type": "function",
        "title": "defaultResult"
      },
      "index": {
        "description": "Default result handler for the EnvIO monad see defaultBackend",
        "hierarchy": "Laborantin Implementation",
        "module": "Laborantin.Implementation",
        "name": "defaultResult",
        "normalized": "Execution a-\u003eFilePath-\u003eResult EnvIO",
        "package": "laborantin-hs",
        "partial": "Result",
        "signature": "Execution m-\u003eFilePath-\u003eResult EnvIO"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Implementation",
        "fct-package": "laborantin-hs",
        "fct-signature": "forall a.  IO a -\u003e m a",
        "fct-type": "function",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Laborantin Implementation",
        "module": "Laborantin.Implementation",
        "name": "liftIO",
        "normalized": "a b IO c-\u003ed c",
        "package": "laborantin-hs",
        "partial": "IO",
        "signature": "forall a. IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:runEnvIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an EnvIO action in IO.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Implementation",
        "fct-package": "laborantin-hs",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/Laborantin-Implementation.html#runEnvIO",
        "fct-type": "function",
        "title": "runEnvIO"
      },
      "index": {
        "description": "Execute an EnvIO action in IO",
        "hierarchy": "Laborantin Implementation",
        "module": "Laborantin.Implementation",
        "name": "runEnvIO",
        "normalized": "IO a-\u003eIO a",
        "package": "laborantin-hs",
        "partial": "Env IO",
        "signature": "IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#",
      "description": {
        "fct-module": "Laborantin.Query",
        "fct-package": "laborantin-hs",
        "fct-signature": "module",
        "fct-source": "src/Laborantin-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Query",
        "module": "Laborantin.Query",
        "name": "Query",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#v:expandParamSpace",
      "description": {
        "fct-descr": "\u003cp\u003eExpands a ParameterSpace to all values that could match a TExpr Bool.\n\u003c/p\u003e\u003cp\u003eCurrently only supports countably finite expansions of parameters. \n That is TExpr Bool such as (\u003ccode\u003esc.param \u003ca\u003eparam\u003c/a\u003e \u003e 32) are ignored.\n Instead (\u003c/code\u003esc.param \u003ca\u003eparam\u003c/a\u003e in [\u003ca\u003efoo\u003c/a\u003e, \u003ca\u003ebar\u003c/a\u003e]) gets expanded to (\u003ca\u003eparam\u003c/a\u003e, [StringParam \u003ca\u003efoo\u003c/a\u003e, StringParam \u003ca\u003ebar\u003c/a\u003e])\n Supported expensions are  And \u003cem\u003e Or \u003c/em\u003e Eq / Contains.\n\u003c/p\u003e\u003cp\u003eThe idea is that you can generate a list of Execution to run by first\n expanding all possible points in the ParameterSpace modified by the TExpr,\n and then filter these possible points using a same TExpr.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Query",
        "fct-package": "laborantin-hs",
        "fct-signature": "ParameterSpace -\u003e TExpr Bool -\u003e ParameterSpace",
        "fct-source": "src/Laborantin-Query.html#expandParamSpace",
        "fct-type": "function",
        "title": "expandParamSpace"
      },
      "index": {
        "description": "Expands ParameterSpace to all values that could match TExpr Bool Currently only supports countably finite expansions of parameters That is TExpr Bool such as sc.param param are ignored Instead sc.param param in foo bar gets expanded to param StringParam foo StringParam bar Supported expensions are And Or Eq Contains The idea is that you can generate list of Execution to run by first expanding all possible points in the ParameterSpace modified by the TExpr and then filter these possible points using same TExpr",
        "hierarchy": "Laborantin Query",
        "module": "Laborantin.Query",
        "name": "expandParamSpace",
        "normalized": "ParameterSpace-\u003eTExpr Bool-\u003eParameterSpace",
        "package": "laborantin-hs",
        "partial": "Param Space",
        "signature": "ParameterSpace-\u003eTExpr Bool-\u003eParameterSpace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#v:matchTExpr",
      "description": {
        "fct-module": "Laborantin.Query",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Bool -\u003e Execution m -\u003e Bool",
        "fct-source": "src/Laborantin-Query.html#matchTExpr",
        "fct-type": "function",
        "title": "matchTExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Query",
        "module": "Laborantin.Query",
        "name": "matchTExpr",
        "normalized": "TExpr Bool-\u003eExecution a-\u003eBool",
        "package": "laborantin-hs",
        "partial": "TExpr",
        "signature": "TExpr Bool-\u003eExecution m-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#v:matchTExpr-39-",
      "description": {
        "fct-module": "Laborantin.Query",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Bool -\u003e ScenarioDescription m -\u003e ParameterSet -\u003e Bool",
        "fct-source": "src/Laborantin-Query.html#matchTExpr%27",
        "fct-type": "function",
        "title": "matchTExpr'"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Query",
        "module": "Laborantin.Query",
        "name": "matchTExpr'",
        "normalized": "TExpr Bool-\u003eScenarioDescription a-\u003eParameterSet-\u003eBool",
        "package": "laborantin-hs",
        "partial": "TExpr'",
        "signature": "TExpr Bool-\u003eScenarioDescription m-\u003eParameterSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#v:simplifyOneBoolLevel",
      "description": {
        "fct-module": "Laborantin.Query",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Bool -\u003e TExpr Bool",
        "fct-source": "src/Laborantin-Query.html#simplifyOneBoolLevel",
        "fct-type": "function",
        "title": "simplifyOneBoolLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Query",
        "module": "Laborantin.Query",
        "name": "simplifyOneBoolLevel",
        "normalized": "TExpr Bool-\u003eTExpr Bool",
        "package": "laborantin-hs",
        "partial": "One Bool Level",
        "signature": "TExpr Bool-\u003eTExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "module",
        "fct-source": "src/Laborantin-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Types",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eAn Action wraps a monadic computation inside a step.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "newtype",
        "fct-source": "src/Laborantin-Types.html#Action",
        "fct-type": "newtype",
        "title": "Action"
      },
      "index": {
        "description": "An Action wraps monadic computation inside step",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Action",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:AnalysisError",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#AnalysisError",
        "fct-type": "data",
        "title": "AnalysisError"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "AnalysisError",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Analysis Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Backend",
      "description": {
        "fct-descr": "\u003cp\u003eA Backend captures all functions that an object must provide to run\n Laborantin experiments.\n\u003c/p\u003e\u003cp\u003eSuch functions give ways to prepare, run, analyze, and finalize executions.\n As well as provide support for logging info, storing,\n finding, and deleting prior results.\n\u003c/p\u003e\u003cp\u003eWe prefer such a design over a typeclass to simplify overall design and\n unclutter type definitions everywhere.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "data",
        "title": "Backend"
      },
      "index": {
        "description": "Backend captures all functions that an object must provide to run Laborantin experiments Such functions give ways to prepare run analyze and finalize executions As well as provide support for logging info storing finding and deleting prior results We prefer such design over typeclass to simplify overall design and unclutter type definitions everywhere",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Backend",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Dependency",
      "description": {
        "fct-descr": "\u003cp\u003eA Dependency is a lose but flexible way of expressing dependencies for\n experiments.\n\u003c/p\u003e\u003cp\u003eDependencies can check whether they are fullfilled, and try to solve.\n The main goal for the design of Dependency dCheck and dSolve hooks is to let\n a Dependency run experiments and add them as ancestors *before* starting any\n Step. Types may slightly vary in the future.\n\u003c/p\u003e\u003cp\u003eDependencies can do anything that a ScenarioDescription allows (hence they\n are parametrized with the same monad as the ScenarioDescription owning a\n Dependency). However, Dependency check and Dependency resolution do not live\n in a Step m . That is they do not have access to, and cannot modify, the\n DynEnv. Thus, this limits the possibility to read execution parameters from\n within the dCheck and dSolve.\n\u003c/p\u003e\u003cp\u003eTo compensate for this limitation, the dCheck hook accepts the Execution as\n parameter and the dSolve hook accepts both the Execution and the Backend as\n parameter, and get a chance to return a modified Execution object.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#Dependency",
        "fct-type": "data",
        "title": "Dependency"
      },
      "index": {
        "description": "Dependency is lose but flexible way of expressing dependencies for experiments Dependencies can check whether they are fullfilled and try to solve The main goal for the design of Dependency dCheck and dSolve hooks is to let Dependency run experiments and add them as ancestors before starting any Step Types may slightly vary in the future Dependencies can do anything that ScenarioDescription allows hence they are parametrized with the same monad as the ScenarioDescription owning Dependency However Dependency check and Dependency resolution do not live in Step That is they do not have access to and cannot modify the DynEnv Thus this limits the possibility to read execution parameters from within the dCheck and dSolve To compensate for this limitation the dCheck hook accepts the Execution as parameter and the dSolve hook accepts both the Execution and the Backend as parameter and get chance to return modified Execution object",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Dependency",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Dependency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:DynEnv",
      "description": {
        "fct-descr": "\u003cp\u003eDynEnv is a map between Text keys and Dynamic values.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "type",
        "fct-source": "src/Laborantin-Types.html#DynEnv",
        "fct-type": "type",
        "title": "DynEnv"
      },
      "index": {
        "description": "DynEnv is map between Text keys and Dynamic values",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "DynEnv",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Dyn Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Execution",
      "description": {
        "fct-descr": "\u003cp\u003eAn Execution represents an ongoing or past experiment result.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#Execution",
        "fct-type": "data",
        "title": "Execution"
      },
      "index": {
        "description": "An Execution represents an ongoing or past experiment result",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Execution",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Execution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ExecutionError",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#ExecutionError",
        "fct-type": "data",
        "title": "ExecutionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ExecutionError",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Execution Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ExecutionStatus",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#ExecutionStatus",
        "fct-type": "data",
        "title": "ExecutionStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ExecutionStatus",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Execution Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Finalizer",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "type",
        "fct-source": "src/Laborantin-Types.html#Finalizer",
        "fct-type": "type",
        "title": "Finalizer"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Finalizer",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Finalizer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:LogHandler",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "newtype",
        "fct-source": "src/Laborantin-Types.html#LogHandler",
        "fct-type": "newtype",
        "title": "LogHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "LogHandler",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Log Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ParameterDescription",
      "description": {
        "fct-descr": "\u003cp\u003eA ParameterDescription description carries information for a single\n parameter.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#ParameterDescription",
        "fct-type": "data",
        "title": "ParameterDescription"
      },
      "index": {
        "description": "ParameterDescription description carries information for single parameter",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ParameterDescription",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Parameter Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ParameterSet",
      "description": {
        "fct-descr": "\u003cp\u003eA ParameterSet (slightly different from a ParameterSpace) is a mapping\n between parameter names and a single ParameterValue.\n\u003c/p\u003e\u003cp\u003eYou can see a ParameterSet as a datapoint within a (multidimensional)\n ParameterSpace.\n\u003c/p\u003e\u003cp\u003eThus, to keep things clearer, we recommend that executions use only text and\n numbers as ParameterValues.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "type",
        "fct-source": "src/Laborantin-Types.html#ParameterSet",
        "fct-type": "type",
        "title": "ParameterSet"
      },
      "index": {
        "description": "ParameterSet slightly different from ParameterSpace is mapping between parameter names and single ParameterValue You can see ParameterSet as datapoint within multidimensional ParameterSpace Thus to keep things clearer we recommend that executions use only text and numbers as ParameterValues",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ParameterSet",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Parameter Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ParameterSpace",
      "description": {
        "fct-descr": "\u003cp\u003eA ParameterSpace maps parameter names to their descriptions.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "type",
        "fct-source": "src/Laborantin-Types.html#ParameterSpace",
        "fct-type": "type",
        "title": "ParameterSpace"
      },
      "index": {
        "description": "ParameterSpace maps parameter names to their descriptions",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ParameterSpace",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Parameter Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ParameterValue",
      "description": {
        "fct-descr": "\u003cp\u003eTwo parameter values type should be enough for command-line demands: text\n and numbers.\n\u003c/p\u003e\u003cp\u003eHowever, we provide two other constructors (Array and Range) for the\n ParameterDescriptions in the DSL.\n\u003c/p\u003e\u003cp\u003eExecutions should use text and numbers only.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#ParameterValue",
        "fct-type": "data",
        "title": "ParameterValue"
      },
      "index": {
        "description": "Two parameter values type should be enough for command-line demands text and numbers However we provide two other constructors Array and Range for the ParameterDescriptions in the DSL Executions should use text and numbers only",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ParameterValue",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Parameter Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eBackends must generate results that are easy to operate. They represent\n files with read\u003cem\u003ewrite\u003c/em\u003eappend operations as execution steps.\n\u003c/p\u003e\u003cp\u003eNote that Backend might not implement all three of read, write, append\n operations.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Backends must generate results that are easy to operate They represent files with read write append operations as execution steps Note that Backend might not implement all three of read write append operations",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Result",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ScenarioDescription",
      "description": {
        "fct-descr": "\u003cp\u003eA Scenario description carries all information to run an experiment.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#ScenarioDescription",
        "fct-type": "data",
        "title": "ScenarioDescription"
      },
      "index": {
        "description": "Scenario description carries all information to run an experiment",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ScenarioDescription",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Scenario Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Step",
      "description": {
        "fct-descr": "\u003cp\u003eA step is a stateful operation for a Scenario phase.\n It carries a modifiable DynEnv between hooks and handle ExecutionErrors.\n In addition, you can read (but not modify) the Backend and the Execution.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "type",
        "fct-source": "src/Laborantin-Types.html#Step",
        "fct-type": "type",
        "title": "Step"
      },
      "index": {
        "description": "step is stateful operation for Scenario phase It carries modifiable DynEnv between hooks and handle ExecutionErrors In addition you can read but not modify the Backend and the Execution",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Step",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:StoredExecution",
      "description": {
        "fct-descr": "\u003cp\u003eAn StoredExecution is a stripped-down version of an Execution.\n\u003c/p\u003e\u003cp\u003eAs it represents an experiment stored on disk, it does not need to carry the\n ScenarioDescription object (otherwise it would become harder to create\n instances such as FromJSON for Executions).\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#StoredExecution",
        "fct-type": "data",
        "title": "StoredExecution"
      },
      "index": {
        "description": "An StoredExecution is stripped-down version of an Execution As it represents an experiment stored on disk it does not need to carry the ScenarioDescription object otherwise it would become harder to create instances such as FromJSON for Executions",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "StoredExecution",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Stored Execution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:TExpr",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "data",
        "title": "TExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "TExpr",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "TExpr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:UExpr",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "data",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "data",
        "title": "UExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UExpr",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UExpr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Action",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Action",
        "fct-source": "src/Laborantin-Types.html#Action",
        "fct-type": "function",
        "title": "Action"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Action",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:AnalysisError",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "AnalysisError String",
        "fct-source": "src/Laborantin-Types.html#AnalysisError",
        "fct-type": "function",
        "title": "AnalysisError"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "AnalysisError",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Analysis Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:And",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Bool -\u003e TExpr Bool -\u003e TExpr Bool",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "And",
        "normalized": "TExpr Bool-\u003eTExpr Bool-\u003eTExpr Bool",
        "package": "laborantin-hs",
        "partial": "And",
        "signature": "TExpr Bool-\u003eTExpr Bool-\u003eTExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Array",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Array [ParameterValue]",
        "fct-source": "src/Laborantin-Types.html#ParameterValue",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Array",
        "normalized": "Array[ParameterValue]",
        "package": "laborantin-hs",
        "partial": "Array",
        "signature": "Array[ParameterValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:B",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Bool -\u003e TExpr Bool",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "B",
        "normalized": "Bool-\u003eTExpr Bool",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Bool-\u003eTExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Backend",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Backend",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "Backend"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Backend",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Contains",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr a -\u003e TExpr [a] -\u003e TExpr Bool",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "Contains"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Contains",
        "normalized": "TExpr a-\u003eTExpr[a]-\u003eTExpr Bool",
        "package": "laborantin-hs",
        "partial": "Contains",
        "signature": "TExpr a-\u003eTExpr[a]-\u003eTExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Dep",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Dep",
        "fct-source": "src/Laborantin-Types.html#Dependency",
        "fct-type": "function",
        "title": "Dep"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Dep",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Dep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Eq",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr a -\u003e TExpr a -\u003e TExpr Bool",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "Eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Eq",
        "normalized": "TExpr a-\u003eTExpr a-\u003eTExpr Bool",
        "package": "laborantin-hs",
        "partial": "Eq",
        "signature": "TExpr a-\u003eTExpr a-\u003eTExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Exec",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Exec",
        "fct-source": "src/Laborantin-Types.html#Execution",
        "fct-type": "function",
        "title": "Exec"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Exec",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Exec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ExecutionError",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ExecutionError String",
        "fct-source": "src/Laborantin-Types.html#ExecutionError",
        "fct-type": "function",
        "title": "ExecutionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ExecutionError",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Execution Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Failure",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Failure",
        "fct-source": "src/Laborantin-Types.html#ExecutionStatus",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Failure",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Gt",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr a -\u003e TExpr a -\u003e TExpr Bool",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "Gt"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Gt",
        "normalized": "TExpr a-\u003eTExpr a-\u003eTExpr Bool",
        "package": "laborantin-hs",
        "partial": "Gt",
        "signature": "TExpr a-\u003eTExpr a-\u003eTExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:L",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "[TExpr a] -\u003e TExpr [a]",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "L",
        "normalized": "[TExpr a]-\u003eTExpr[a]",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "[TExpr a]-\u003eTExpr[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:LogHandler",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "LogHandler",
        "fct-source": "src/Laborantin-Types.html#LogHandler",
        "fct-type": "function",
        "title": "LogHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "LogHandler",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Log Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:N",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Rational -\u003e TExpr Rational",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "N"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "N",
        "normalized": "Rational-\u003eTExpr Rational",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Rational-\u003eTExpr Rational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:NCoerce",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr (Text, Maybe ParameterValue) -\u003e TExpr Rational",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "NCoerce"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "NCoerce",
        "normalized": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Rational",
        "package": "laborantin-hs",
        "partial": "NCoerce",
        "signature": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Rational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Not",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Bool -\u003e TExpr Bool",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Not",
        "normalized": "TExpr Bool-\u003eTExpr Bool",
        "package": "laborantin-hs",
        "partial": "Not",
        "signature": "TExpr Bool-\u003eTExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:NumberParam",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "NumberParam Rational",
        "fct-source": "src/Laborantin-Types.html#ParameterValue",
        "fct-type": "function",
        "title": "NumberParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "NumberParam",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Number Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Or",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Bool -\u003e TExpr Bool -\u003e TExpr Bool",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Or",
        "normalized": "TExpr Bool-\u003eTExpr Bool-\u003eTExpr Bool",
        "package": "laborantin-hs",
        "partial": "Or",
        "signature": "TExpr Bool-\u003eTExpr Bool-\u003eTExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:PDesc",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "PDesc",
        "fct-source": "src/Laborantin-Types.html#ParameterDescription",
        "fct-type": "function",
        "title": "PDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "PDesc",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "PDesc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Plus",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Rational -\u003e TExpr Rational -\u003e TExpr Rational",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Plus",
        "normalized": "TExpr Rational-\u003eTExpr Rational-\u003eTExpr Rational",
        "package": "laborantin-hs",
        "partial": "Plus",
        "signature": "TExpr Rational-\u003eTExpr Rational-\u003eTExpr Rational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Range",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Range Rational Rational Rational",
        "fct-source": "src/Laborantin-Types.html#ParameterValue",
        "fct-type": "function",
        "title": "Range"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Range",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Result",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Result",
        "fct-source": "src/Laborantin-Types.html#Result",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Result",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Running",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Running",
        "fct-source": "src/Laborantin-Types.html#ExecutionStatus",
        "fct-type": "function",
        "title": "Running"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Running",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Running",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:S",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e TExpr Text",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "S"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "S",
        "normalized": "Text-\u003eTExpr Text",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Text-\u003eTExpr Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:SCoerce",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr (Text, Maybe ParameterValue) -\u003e TExpr Text",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "SCoerce"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "SCoerce",
        "normalized": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Text",
        "package": "laborantin-hs",
        "partial": "SCoerce",
        "signature": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:SDesc",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "SDesc",
        "fct-source": "src/Laborantin-Types.html#ScenarioDescription",
        "fct-type": "function",
        "title": "SDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "SDesc",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "SDesc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ScName",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Text",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "ScName"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ScName",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Sc Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ScParam",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e TExpr (Text, Maybe ParameterValue)",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "ScParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ScParam",
        "normalized": "Text-\u003eTExpr(Text,Maybe ParameterValue)",
        "package": "laborantin-hs",
        "partial": "Sc Param",
        "signature": "Text-\u003eTExpr(Text,Maybe ParameterValue)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ScStatus",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Text",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "ScStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ScStatus",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Sc Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ScTimestamp",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr UTCTime",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "ScTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ScTimestamp",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Sc Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:SilentNCoerce",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr (Text, Maybe ParameterValue) -\u003e TExpr Rational",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "SilentNCoerce"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "SilentNCoerce",
        "normalized": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Rational",
        "package": "laborantin-hs",
        "partial": "Silent NCoerce",
        "signature": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Rational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:SilentSCoerce",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr (Text, Maybe ParameterValue) -\u003e TExpr Text",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "SilentSCoerce"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "SilentSCoerce",
        "normalized": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Text",
        "package": "laborantin-hs",
        "partial": "Silent SCoerce",
        "signature": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Stored",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Stored",
        "fct-source": "src/Laborantin-Types.html#StoredExecution",
        "fct-type": "function",
        "title": "Stored"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Stored",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Stored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:StringParam",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "StringParam Text",
        "fct-source": "src/Laborantin-Types.html#ParameterValue",
        "fct-type": "function",
        "title": "StringParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "StringParam",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "String Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Success",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Success",
        "fct-source": "src/Laborantin-Types.html#ExecutionStatus",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Success",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:T",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UTCTime -\u003e TExpr UTCTime",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "T",
        "normalized": "UTCTime-\u003eTExpr UTCTime",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "UTCTime-\u003eTExpr UTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:TBind",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "String -\u003e (a -\u003e TExpr b) -\u003e TExpr a -\u003e TExpr b",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "TBind"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "TBind",
        "normalized": "String-\u003e(a-\u003eTExpr b)-\u003eTExpr a-\u003eTExpr b",
        "package": "laborantin-hs",
        "partial": "TBind",
        "signature": "String-\u003e(a-\u003eTExpr b)-\u003eTExpr a-\u003eTExpr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Times",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Rational -\u003e TExpr Rational -\u003e TExpr Rational",
        "fct-source": "src/Laborantin-Types.html#TExpr",
        "fct-type": "function",
        "title": "Times"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "Times",
        "normalized": "TExpr Rational-\u003eTExpr Rational-\u003eTExpr Rational",
        "package": "laborantin-hs",
        "partial": "Times",
        "signature": "TExpr Rational-\u003eTExpr Rational-\u003eTExpr Rational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UAnd",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UAnd UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UAnd",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UB",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UB Bool",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UB"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UB",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UContains",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UContains UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UContains"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UContains",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UContains",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UDiv",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UDiv UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UDiv",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UDiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UEq",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UEq UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UEq",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UGt",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UGt UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UGt"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UGt",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UGt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UGte",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UGte UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UGte"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UGte",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UGte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UL",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UL [UExpr]",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UL"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UL",
        "normalized": "UL[UExpr]",
        "package": "laborantin-hs",
        "partial": "UL",
        "signature": "UL[UExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ULt",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ULt UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "ULt"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ULt",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "ULt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ULte",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ULte UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "ULte"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ULte",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "ULte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UMinus",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UMinus UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UMinus"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UMinus",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UMinus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UN",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UN Rational",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UN"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UN",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UNot",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UNot UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UNot",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UNot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UOr",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UOr UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UOr",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UPlus",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UPlus UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UPlus",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UPlus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:US",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "US Text",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "US"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "US",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "US",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UScName",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UScName",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UScName"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UScName",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "USc Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UScParam",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UScParam Text",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UScParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UScParam",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "USc Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UScStatus",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UScStatus",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UScStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UScStatus",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "USc Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UScTimestamp",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UScTimestamp",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UScTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UScTimestamp",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "USc Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UT",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UT UTCTime",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UT"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UT",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UTimes",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "UTimes UExpr UExpr",
        "fct-source": "src/Laborantin-Types.html#UExpr",
        "fct-type": "function",
        "title": "UTimes"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "UTimes",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "UTimes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bAnalyze",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e Step m ()",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bAnalyze"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bAnalyze",
        "normalized": "Execution a-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Analyze",
        "signature": "Execution m-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bFinalizeExecution",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e Finalizer m -\u003e m ()",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bFinalizeExecution"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bFinalizeExecution",
        "normalized": "Execution a-\u003eFinalizer a-\u003ea()",
        "package": "laborantin-hs",
        "partial": "Finalize Execution",
        "signature": "Execution m-\u003eFinalizer m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bLoad",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "[ScenarioDescription m] -\u003e TExpr Bool -\u003e m [Execution m]",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bLoad"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bLoad",
        "normalized": "[ScenarioDescription a]-\u003eTExpr Bool-\u003ea[Execution a]",
        "package": "laborantin-hs",
        "partial": "Load",
        "signature": "[ScenarioDescription m]-\u003eTExpr Bool-\u003em[Execution m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bLogger",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e Step m (LogHandler m)",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bLogger"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bLogger",
        "normalized": "Execution a-\u003eStep a(LogHandler a)",
        "package": "laborantin-hs",
        "partial": "Logger",
        "signature": "Execution m-\u003eStep m(LogHandler m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bName"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bName",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bPrepareExecution",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ScenarioDescription m -\u003e ParameterSet -\u003e m (Execution m, Finalizer m)",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bPrepareExecution"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bPrepareExecution",
        "normalized": "ScenarioDescription a-\u003eParameterSet-\u003ea(Execution a,Finalizer a)",
        "package": "laborantin-hs",
        "partial": "Prepare Execution",
        "signature": "ScenarioDescription m-\u003eParameterSet-\u003em(Execution m,Finalizer m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bRecover",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ExecutionError -\u003e Execution m -\u003e Step m ()",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bRecover"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bRecover",
        "normalized": "ExecutionError-\u003eExecution a-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Recover",
        "signature": "ExecutionError-\u003eExecution m-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bRemove",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e m ()",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bRemove"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bRemove",
        "normalized": "Execution a-\u003ea()",
        "package": "laborantin-hs",
        "partial": "Remove",
        "signature": "Execution m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bResult",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e FilePath -\u003e Step m (Result m)",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bResult",
        "normalized": "Execution a-\u003eFilePath-\u003eStep a(Result a)",
        "package": "laborantin-hs",
        "partial": "Result",
        "signature": "Execution m-\u003eFilePath-\u003eStep m(Result m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bRun",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e Step m ()",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bRun"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bRun",
        "normalized": "Execution a-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Run",
        "signature": "Execution m-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bSetup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e Step m ()",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bSetup"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bSetup",
        "normalized": "Execution a-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Setup",
        "signature": "Execution m-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bTeardown",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e Step m ()",
        "fct-source": "src/Laborantin-Types.html#Backend",
        "fct-type": "function",
        "title": "bTeardown"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "bTeardown",
        "normalized": "Execution a-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Teardown",
        "signature": "Execution m-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:dCheck",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Execution m -\u003e m Bool",
        "fct-source": "src/Laborantin-Types.html#Dependency",
        "fct-type": "function",
        "title": "dCheck"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "dCheck",
        "normalized": "Execution a-\u003ea Bool",
        "package": "laborantin-hs",
        "partial": "Check",
        "signature": "Execution m-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:dDesc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text",
        "fct-source": "src/Laborantin-Types.html#Dependency",
        "fct-type": "function",
        "title": "dDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "dDesc",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:dName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text",
        "fct-source": "src/Laborantin-Types.html#Dependency",
        "fct-type": "function",
        "title": "dName"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "dName",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:dSolve",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "(Execution m, Backend m) -\u003e m (Execution m)",
        "fct-source": "src/Laborantin-Types.html#Dependency",
        "fct-type": "function",
        "title": "dSolve"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "dSolve",
        "normalized": "(Execution a,Backend a)-\u003ea(Execution a)",
        "package": "laborantin-hs",
        "partial": "Solve",
        "signature": "(Execution m,Backend m)-\u003em(Execution m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eAncestors",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "[Execution m]",
        "fct-source": "src/Laborantin-Types.html#Execution",
        "fct-type": "function",
        "title": "eAncestors"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "eAncestors",
        "normalized": "[Execution a]",
        "package": "laborantin-hs",
        "partial": "Ancestors",
        "signature": "[Execution m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eParamSet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ParameterSet",
        "fct-source": "src/Laborantin-Types.html#Execution",
        "fct-type": "function",
        "title": "eParamSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "eParamSet",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Param Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "FilePath",
        "fct-source": "src/Laborantin-Types.html#Execution",
        "fct-type": "function",
        "title": "ePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "ePath",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eScenario",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ScenarioDescription m",
        "fct-source": "src/Laborantin-Types.html#Execution",
        "fct-type": "function",
        "title": "eScenario"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "eScenario",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Scenario",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eStatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ExecutionStatus",
        "fct-source": "src/Laborantin-Types.html#Execution",
        "fct-type": "function",
        "title": "eStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "eStatus",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eTimeStamps",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "(UTCTime, UTCTime)",
        "fct-source": "src/Laborantin-Types.html#Execution",
        "fct-type": "function",
        "title": "eTimeStamps"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "eTimeStamps",
        "normalized": "(UTCTime,UTCTime)",
        "package": "laborantin-hs",
        "partial": "Time Stamps",
        "signature": "(UTCTime,UTCTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:emptyEnv",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "DynEnv",
        "fct-source": "src/Laborantin-Types.html#emptyEnv",
        "fct-type": "function",
        "title": "emptyEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "emptyEnv",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:emptyParameter",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ParameterDescription",
        "fct-source": "src/Laborantin-Types.html#emptyParameter",
        "fct-type": "function",
        "title": "emptyParameter"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "emptyParameter",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Parameter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:emptyScenario",
      "description": {
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ScenarioDescription m",
        "fct-source": "src/Laborantin-Types.html#emptyScenario",
        "fct-type": "function",
        "title": "emptyScenario"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "emptyScenario",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Scenario",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:expandValue",
      "description": {
        "fct-descr": "\u003cp\u003eExpands a ParameterValue to a list of ParameterValues.\n  Mainly flattens ranges.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ParameterValue -\u003e [ParameterValue]",
        "fct-source": "src/Laborantin-Types.html#expandValue",
        "fct-type": "function",
        "title": "expandValue"
      },
      "index": {
        "description": "Expands ParameterValue to list of ParameterValues Mainly flattens ranges",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "expandValue",
        "normalized": "ParameterValue-\u003e[ParameterValue]",
        "package": "laborantin-hs",
        "partial": "Value",
        "signature": "ParameterValue-\u003e[ParameterValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:lLog",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e Step m ()",
        "fct-source": "src/Laborantin-Types.html#LogHandler",
        "fct-type": "function",
        "title": "lLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "lLog",
        "normalized": "Text-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Log",
        "signature": "Text-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:mergeParamSpaces",
      "description": {
        "fct-descr": "\u003cp\u003eMerges two ParameterSpace by extending all dimensions.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ParameterSpace -\u003e ParameterSpace -\u003e ParameterSpace",
        "fct-source": "src/Laborantin-Types.html#mergeParamSpaces",
        "fct-type": "function",
        "title": "mergeParamSpaces"
      },
      "index": {
        "description": "Merges two ParameterSpace by extending all dimensions",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "mergeParamSpaces",
        "normalized": "ParameterSpace-\u003eParameterSpace-\u003eParameterSpace",
        "package": "laborantin-hs",
        "partial": "Param Spaces",
        "signature": "ParameterSpace-\u003eParameterSpace-\u003eParameterSpace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pAppend",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e Step m ()",
        "fct-source": "src/Laborantin-Types.html#Result",
        "fct-type": "function",
        "title": "pAppend"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "pAppend",
        "normalized": "Text-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Append",
        "signature": "Text-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pDesc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text",
        "fct-source": "src/Laborantin-Types.html#ParameterDescription",
        "fct-type": "function",
        "title": "pDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "pDesc",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text",
        "fct-source": "src/Laborantin-Types.html#ParameterDescription",
        "fct-type": "function",
        "title": "pName"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "pName",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "FilePath",
        "fct-source": "src/Laborantin-Types.html#Result",
        "fct-type": "function",
        "title": "pPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "pPath",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pRead",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Step m Text",
        "fct-source": "src/Laborantin-Types.html#Result",
        "fct-type": "function",
        "title": "pRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "pRead",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pValues",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "[ParameterValue]",
        "fct-source": "src/Laborantin-Types.html#ParameterDescription",
        "fct-type": "function",
        "title": "pValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "pValues",
        "normalized": "[ParameterValue]",
        "package": "laborantin-hs",
        "partial": "Values",
        "signature": "[ParameterValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pWrite",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text -\u003e Step m ()",
        "fct-source": "src/Laborantin-Types.html#Result",
        "fct-type": "function",
        "title": "pWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "pWrite",
        "normalized": "Text-\u003eStep a()",
        "package": "laborantin-hs",
        "partial": "Write",
        "signature": "Text-\u003eStep m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:paramSets",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an exhaustive list of ParameterSet (i.e., all data points) to\n cover a (multidimensional) ParameterSpace.\n\u003c/p\u003e\u003cp\u003eBasically a Cartesian product.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ParameterSpace -\u003e [ParameterSet]",
        "fct-source": "src/Laborantin-Types.html#paramSets",
        "fct-type": "function",
        "title": "paramSets"
      },
      "index": {
        "description": "Returns an exhaustive list of ParameterSet i.e all data points to cover multidimensional ParameterSpace Basically Cartesian product",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "paramSets",
        "normalized": "ParameterSpace-\u003e[ParameterSet]",
        "package": "laborantin-hs",
        "partial": "Sets",
        "signature": "ParameterSpace-\u003e[ParameterSet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sDeps",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "[Dependency m]",
        "fct-source": "src/Laborantin-Types.html#ScenarioDescription",
        "fct-type": "function",
        "title": "sDeps"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "sDeps",
        "normalized": "[Dependency a]",
        "package": "laborantin-hs",
        "partial": "Deps",
        "signature": "[Dependency m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sDesc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text",
        "fct-source": "src/Laborantin-Types.html#ScenarioDescription",
        "fct-type": "function",
        "title": "sDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "sDesc",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sHooks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Map Text (Action m)",
        "fct-source": "src/Laborantin-Types.html#ScenarioDescription",
        "fct-type": "function",
        "title": "sHooks"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "sHooks",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Hooks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Text",
        "fct-source": "src/Laborantin-Types.html#ScenarioDescription",
        "fct-type": "function",
        "title": "sName"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "sName",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sParams",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ParameterSpace",
        "fct-source": "src/Laborantin-Types.html#ScenarioDescription",
        "fct-type": "function",
        "title": "sParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "sParams",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "TExpr Bool",
        "fct-source": "src/Laborantin-Types.html#ScenarioDescription",
        "fct-type": "function",
        "title": "sQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "sQuery",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sRecoveryAction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Maybe (ExecutionError -\u003e Action m)",
        "fct-source": "src/Laborantin-Types.html#ScenarioDescription",
        "fct-type": "function",
        "title": "sRecoveryAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "sRecoveryAction",
        "normalized": "Maybe(ExecutionError-\u003eAction a)",
        "package": "laborantin-hs",
        "partial": "Recovery Action",
        "signature": "Maybe(ExecutionError-\u003eAction m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:seAncestors",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "[(FilePath, Text)]",
        "fct-source": "src/Laborantin-Types.html#StoredExecution",
        "fct-type": "function",
        "title": "seAncestors"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "seAncestors",
        "normalized": "[(FilePath,Text)]",
        "package": "laborantin-hs",
        "partial": "Ancestors",
        "signature": "[(FilePath,Text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:seParamSet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ParameterSet",
        "fct-source": "src/Laborantin-Types.html#StoredExecution",
        "fct-type": "function",
        "title": "seParamSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "seParamSet",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Param Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "FilePath",
        "fct-source": "src/Laborantin-Types.html#StoredExecution",
        "fct-type": "function",
        "title": "sePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "sePath",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:seStatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ExecutionStatus",
        "fct-source": "src/Laborantin-Types.html#StoredExecution",
        "fct-type": "function",
        "title": "seStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "seStatus",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:seTimeStamps",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "(UTCTime, UTCTime)",
        "fct-source": "src/Laborantin-Types.html#StoredExecution",
        "fct-type": "function",
        "title": "seTimeStamps"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "seTimeStamps",
        "normalized": "(UTCTime,UTCTime)",
        "package": "laborantin-hs",
        "partial": "Time Stamps",
        "signature": "(UTCTime,UTCTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:unAction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "Step m ()",
        "fct-source": "src/Laborantin-Types.html#Action",
        "fct-type": "function",
        "title": "unAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "unAction",
        "normalized": "Step a()",
        "package": "laborantin-hs",
        "partial": "Action",
        "signature": "Step m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:updateParam",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates a single dimension of the ParameterSpace to be the list of\n ParameterValue s in 3rd parameter.\n\u003c/p\u003e",
        "fct-module": "Laborantin.Types",
        "fct-package": "laborantin-hs",
        "fct-signature": "ParameterSpace -\u003e Text -\u003e [ParameterValue] -\u003e ParameterSpace",
        "fct-source": "src/Laborantin-Types.html#updateParam",
        "fct-type": "function",
        "title": "updateParam"
      },
      "index": {
        "description": "Updates single dimension of the ParameterSpace to be the list of ParameterValue in rd parameter",
        "hierarchy": "Laborantin Types",
        "module": "Laborantin.Types",
        "name": "updateParam",
        "normalized": "ParameterSpace-\u003eText-\u003e[ParameterValue]-\u003eParameterSpace",
        "package": "laborantin-hs",
        "partial": "Param",
        "signature": "ParameterSpace-\u003eText-\u003e[ParameterValue]-\u003eParameterSpace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#",
      "description": {
        "fct-module": "Laborantin",
        "fct-package": "laborantin-hs",
        "fct-signature": "module",
        "fct-source": "src/Laborantin.html",
        "fct-type": "module",
        "title": "Laborantin"
      },
      "index": {
        "description": "",
        "hierarchy": "Laborantin",
        "module": "Laborantin",
        "name": "Laborantin",
        "normalized": "",
        "package": "laborantin-hs",
        "partial": "Laborantin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:expandParameterSets",
      "description": {
        "fct-descr": "\u003cp\u003eExpands parameters given a TExpr and a ScenarioDescription into a list of\n parameter spaces (sort of cartesian product of all possible params)\n\u003c/p\u003e",
        "fct-module": "Laborantin",
        "fct-package": "laborantin-hs",
        "fct-signature": "ScenarioDescription m -\u003e TExpr Bool -\u003e [ParameterSet]",
        "fct-source": "src/Laborantin.html#expandParameterSets",
        "fct-type": "function",
        "title": "expandParameterSets"
      },
      "index": {
        "description": "Expands parameters given TExpr and ScenarioDescription into list of parameter spaces sort of cartesian product of all possible params",
        "hierarchy": "Laborantin",
        "module": "Laborantin",
        "name": "expandParameterSets",
        "normalized": "ScenarioDescription a-\u003eTExpr Bool-\u003e[ParameterSet]",
        "package": "laborantin-hs",
        "partial": "Parameter Sets",
        "signature": "ScenarioDescription m-\u003eTExpr Bool-\u003e[ParameterSet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eLoads executions of given ScenarioDescription and matching a given query\n using a specific backend.\n\u003c/p\u003e",
        "fct-module": "Laborantin",
        "fct-package": "laborantin-hs",
        "fct-signature": "Backend m -\u003e [ScenarioDescription m] -\u003e TExpr Bool -\u003e m [Execution m]",
        "fct-source": "src/Laborantin.html#load",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "Loads executions of given ScenarioDescription and matching given query using specific backend",
        "hierarchy": "Laborantin",
        "module": "Laborantin",
        "name": "load",
        "normalized": "Backend a-\u003e[ScenarioDescription a]-\u003eTExpr Bool-\u003ea[Execution a]",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Backend m-\u003e[ScenarioDescription m]-\u003eTExpr Bool-\u003em[Execution m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:missingParameterSets",
      "description": {
        "fct-descr": "\u003cp\u003eLike matchingParameterSets but also remove existing ParameterSet given as\n third parameter.\n\u003c/p\u003e",
        "fct-module": "Laborantin",
        "fct-package": "laborantin-hs",
        "fct-signature": "ScenarioDescription m -\u003e TExpr Bool -\u003e [ParameterSet] -\u003e [ParameterSet]",
        "fct-source": "src/Laborantin.html#missingParameterSets",
        "fct-type": "function",
        "title": "missingParameterSets"
      },
      "index": {
        "description": "Like matchingParameterSets but also remove existing ParameterSet given as third parameter",
        "hierarchy": "Laborantin",
        "module": "Laborantin",
        "name": "missingParameterSets",
        "normalized": "ScenarioDescription a-\u003eTExpr Bool-\u003e[ParameterSet]-\u003e[ParameterSet]",
        "package": "laborantin-hs",
        "partial": "Parameter Sets",
        "signature": "ScenarioDescription m-\u003eTExpr Bool-\u003e[ParameterSet]-\u003e[ParameterSet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:prepare",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare a list of execution actions for a given\n (scenario, parameter-query, existing) ancestors.\n\u003c/p\u003e\u003cp\u003eThis function returns one action per ParameterSet which is required by the\n parameter-query and not yet present in the existing list of executions.\n\u003c/p\u003e\u003cp\u003eFor instance, if the scenario has one parameter \u003ccode\u003efoo\u003c/code\u003e; the query wants \u003ccode\u003efoo\u003c/code\u003e\n in [1,2,3,4]; and there is one execution with \u003ccode\u003efoo\u003c/code\u003e == 2; then this function\n returns 3 actions (for parameters 1, 3, and 4).\n\u003c/p\u003e\u003cp\u003eA user can then run these actions in sequence (or concurrently if it makes\n sense).\n\u003c/p\u003e",
        "fct-module": "Laborantin",
        "fct-package": "laborantin-hs",
        "fct-signature": "Backend m -\u003e TExpr Bool -\u003e [Execution m] -\u003e ScenarioDescription m -\u003e [m (Execution m)]",
        "fct-source": "src/Laborantin.html#prepare",
        "fct-type": "function",
        "title": "prepare"
      },
      "index": {
        "description": "Prepare list of execution actions for given scenario parameter-query existing ancestors This function returns one action per ParameterSet which is required by the parameter-query and not yet present in the existing list of executions For instance if the scenario has one parameter foo the query wants foo in and there is one execution with foo then this function returns actions for parameters and user can then run these actions in sequence or concurrently if it makes sense",
        "hierarchy": "Laborantin",
        "module": "Laborantin",
        "name": "prepare",
        "normalized": "Backend a-\u003eTExpr Bool-\u003e[Execution a]-\u003eScenarioDescription a-\u003e[a(Execution a)]",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Backend m-\u003eTExpr Bool-\u003e[Execution m]-\u003eScenarioDescription m-\u003e[m(Execution m)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:remove",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an execution using a specific backend.\n\u003c/p\u003e",
        "fct-module": "Laborantin",
        "fct-package": "laborantin-hs",
        "fct-signature": "Backend m -\u003e Execution m -\u003e m ()",
        "fct-source": "src/Laborantin.html#remove",
        "fct-type": "function",
        "title": "remove"
      },
      "index": {
        "description": "Remove an execution using specific backend",
        "hierarchy": "Laborantin",
        "module": "Laborantin",
        "name": "remove",
        "normalized": "Backend a-\u003eExecution a-\u003ea()",
        "package": "laborantin-hs",
        "partial": "",
        "signature": "Backend m-\u003eExecution m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:runAnalyze",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the analysis hooks.\n\u003c/p\u003e",
        "fct-module": "Laborantin",
        "fct-package": "laborantin-hs",
        "fct-signature": "Backend m -\u003e Execution m -\u003e m (Either AnalysisError ())",
        "fct-source": "src/Laborantin.html#runAnalyze",
        "fct-type": "function",
        "title": "runAnalyze"
      },
      "index": {
        "description": "Runs the analysis hooks",
        "hierarchy": "Laborantin",
        "module": "Laborantin",
        "name": "runAnalyze",
        "normalized": "Backend a-\u003eExecution a-\u003ea(Either AnalysisError())",
        "package": "laborantin-hs",
        "partial": "Analyze",
        "signature": "Backend m-\u003eExecution m-\u003em(Either AnalysisError())"
      }
    }
  }
]