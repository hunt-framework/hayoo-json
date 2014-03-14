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
        "word": "laborantin-hs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.CLI",
          "name": "CLI",
          "package": "laborantin-hs",
          "source": "src/Laborantin-CLI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Laborantin CLI",
          "module": "Laborantin.CLI",
          "name": "CLI",
          "package": "laborantin-hs",
          "partial": "CLI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-CLI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.CLI",
          "name": "defaultMain",
          "package": "laborantin-hs",
          "signature": "[ScenarioDescription EnvIO] -\u003e IO ()",
          "source": "src/Laborantin-CLI.html#defaultMain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin CLI",
          "module": "Laborantin.CLI",
          "name": "defaultMain",
          "normalized": "[ScenarioDescription EnvIO]-\u003eIO()",
          "package": "laborantin-hs",
          "partial": "Main",
          "signature": "[ScenarioDescription EnvIO]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-CLI.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.DSL",
          "name": "DSL",
          "package": "laborantin-hs",
          "source": "src/Laborantin-DSL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "DSL",
          "package": "laborantin-hs",
          "partial": "DSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the offline analysis hook for this scenario\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "analyze",
          "package": "laborantin-hs",
          "signature": "Step m () -\u003e State (ScenarioDescription m) ()",
          "source": "src/Laborantin-DSL.html#analyze",
          "type": "function"
        },
        "index": {
          "description": "Define the offline analysis hook for this scenario",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "analyze",
          "normalized": "Step a()-\u003eState(ScenarioDescription a)()",
          "package": "laborantin-hs",
          "signature": "Step m()-\u003eState(ScenarioDescription m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:analyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all ancestors for a given scenario name.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "ancestors",
          "package": "laborantin-hs",
          "signature": "Text -\u003e Step m [Execution m]",
          "source": "src/Laborantin-DSL.html#ancestors",
          "type": "function"
        },
        "index": {
          "description": "Get all ancestors for given scenario name",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "ancestors",
          "normalized": "Text-\u003eStep a[Execution a]",
          "package": "laborantin-hs",
          "signature": "Text-\u003eStep m[Execution m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:ancestors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all ancestors for a given scenario name and matching a query expressed as a string.\n Current implementation silences errors.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "ancestorsMatching",
          "package": "laborantin-hs",
          "signature": "Text -\u003e Text -\u003e Step m [Execution m]",
          "source": "src/Laborantin-DSL.html#ancestorsMatching",
          "type": "function"
        },
        "index": {
          "description": "Get all ancestors for given scenario name and matching query expressed as string Current implementation silences errors",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "ancestorsMatching",
          "normalized": "Text-\u003eText-\u003eStep a[Execution a]",
          "package": "laborantin-hs",
          "partial": "Matching",
          "signature": "Text-\u003eText-\u003eStep m[Execution m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:ancestorsMatching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all ancestors for a given scenario name and matching a TExpr Bool query.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "ancestorsMatchingTExpr",
          "package": "laborantin-hs",
          "signature": "Text -\u003e TExpr Bool -\u003e Step m [Execution m]",
          "source": "src/Laborantin-DSL.html#ancestorsMatchingTExpr",
          "type": "function"
        },
        "index": {
          "description": "Get all ancestors for given scenario name and matching TExpr Bool query",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "ancestorsMatchingTExpr",
          "normalized": "Text-\u003eTExpr Bool-\u003eStep a[Execution a]",
          "package": "laborantin-hs",
          "partial": "Matching TExpr",
          "signature": "Text-\u003eTExpr Bool-\u003eStep m[Execution m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:ancestorsMatchingTExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends a chunk of data to the result. \n\u003c/p\u003e\u003cp\u003eImplementations will return their specific results.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "appendResult",
          "package": "laborantin-hs",
          "signature": "FilePath-\u003e Text-\u003e Step m ()",
          "type": "function"
        },
        "index": {
          "description": "Appends chunk of data to the result Implementations will return their specific results",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "appendResult",
          "normalized": "FilePath-\u003eText-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Result",
          "signature": "FilePath-\u003eText-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:appendResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulate an array of \u003ccode\u003e\u003ca\u003estr\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enum\u003c/a\u003e\u003c/code\u003e values as a \u003ccode\u003e\u003ca\u003eParameterValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "arr",
          "package": "laborantin-hs",
          "signature": "[ParameterValue] -\u003e ParameterValue",
          "source": "src/Laborantin-DSL.html#arr",
          "type": "function"
        },
        "index": {
          "description": "Encapsulate an array of str or num values as ParameterValue",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "arr",
          "normalized": "[ParameterValue]-\u003eParameterValue",
          "package": "laborantin-hs",
          "signature": "[ParameterValue]-\u003eParameterValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns current backend\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "backend",
          "package": "laborantin-hs",
          "signature": "Step m (Backend m)",
          "source": "src/Laborantin-DSL.html#backend",
          "type": "function"
        },
        "index": {
          "description": "Returns current backend",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "backend",
          "package": "laborantin-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet verification action for the dependency\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "check",
          "package": "laborantin-hs",
          "signature": "(Execution m -\u003e m Bool) -\u003e State (Dependency m) ()",
          "source": "src/Laborantin-DSL.html#check",
          "type": "function"
        },
        "index": {
          "description": "Set verification action for the dependency",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "check",
          "normalized": "(Execution a-\u003ea Bool)-\u003eState(Dependency a)()",
          "package": "laborantin-hs",
          "signature": "(Execution m-\u003em Bool)-\u003eState(Dependency m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a line of data to the logger (debug mode)\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "dbg",
          "package": "laborantin-hs",
          "signature": "Text -\u003e Step m ()",
          "source": "src/Laborantin-DSL.html#dbg",
          "type": "function"
        },
        "index": {
          "description": "Sends line of data to the logger debug mode",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "dbg",
          "normalized": "Text-\u003eStep a()",
          "package": "laborantin-hs",
          "signature": "Text-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:dbg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSL entry point to build a 'Dependency a' within a scenario.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "dependency",
          "package": "laborantin-hs",
          "signature": "Text -\u003e State (Dependency m) () -\u003e State (ScenarioDescription m) ()",
          "source": "src/Laborantin-DSL.html#dependency",
          "type": "function"
        },
        "index": {
          "description": "DSL entry point to build Dependency within scenario",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "dependency",
          "normalized": "Text-\u003eState(Dependency a)()-\u003eState(ScenarioDescription a)()",
          "package": "laborantin-hs",
          "signature": "Text-\u003eState(Dependency m)()-\u003eState(ScenarioDescription m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:dependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach a description to the \u003ccode\u003eParameter\u003c/code\u003e / \u003ccode\u003eScnario\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "describe",
          "package": "laborantin-hs",
          "signature": "Text -\u003e State a ()",
          "source": "src/Laborantin-DSL.html#describe",
          "type": "function"
        },
        "index": {
          "description": "Attach description to the Parameter Scnario",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "describe",
          "normalized": "Text-\u003eState a()",
          "package": "laborantin-hs",
          "signature": "Text-\u003eState a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:describe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterrupts the scenario by throwing an error\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "err",
          "package": "laborantin-hs",
          "signature": "String -\u003e Step m ()",
          "source": "src/Laborantin-DSL.html#err",
          "type": "function"
        },
        "index": {
          "description": "Interrupts the scenario by throwing an error",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "err",
          "normalized": "String-\u003eStep a()",
          "package": "laborantin-hs",
          "signature": "String-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an execution variable and tries to cast it from it's Dynamic\n representation.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the variable is missing or if it could not\n be cast to the wanted type.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "getVar",
          "package": "laborantin-hs",
          "signature": "Text-\u003e m (Maybe v)",
          "type": "function"
        },
        "index": {
          "description": "Get an execution variable and tries to cast it from it Dynamic representation Returns Nothing if the variable is missing or if it could not be cast to the wanted type",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "getVar",
          "normalized": "Text-\u003ea(Maybe b)",
          "package": "laborantin-hs",
          "partial": "Var",
          "signature": "Text-\u003em(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:getVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003e object for this scenario.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "logger",
          "package": "laborantin-hs",
          "signature": "Step m (LogHandler m)",
          "source": "src/Laborantin-DSL.html#logger",
          "type": "function"
        },
        "index": {
          "description": "Return LogHandler object for this scenario",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "logger",
          "package": "laborantin-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulate an integer value as a \u003ccode\u003e\u003ca\u003eParameterValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "num",
          "package": "laborantin-hs",
          "signature": "Integer -\u003e ParameterValue",
          "source": "src/Laborantin-DSL.html#num",
          "type": "function"
        },
        "index": {
          "description": "Encapsulate an integer value as ParameterValue",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "num",
          "normalized": "Integer-\u003eParameterValue",
          "package": "laborantin-hs",
          "signature": "Integer-\u003eParameterValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the parameter with given name.\n Throw an error if the parameter is missing.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "param",
          "package": "laborantin-hs",
          "signature": "Text-\u003e Step m ParameterValue",
          "type": "function"
        },
        "index": {
          "description": "Get the parameter with given name Throw an error if the parameter is missing",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "param",
          "normalized": "Text-\u003eStep a ParameterValue",
          "package": "laborantin-hs",
          "signature": "Text-\u003eStep m ParameterValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSL entry point to build a \u003ccode\u003e\u003ca\u003eParameterDescription\u003c/a\u003e\u003c/code\u003e within a scenario.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "parameter",
          "package": "laborantin-hs",
          "signature": "Text -\u003e State ParameterDescription () -\u003e State (ScenarioDescription m) ()",
          "source": "src/Laborantin-DSL.html#parameter",
          "type": "function"
        },
        "index": {
          "description": "DSL entry point to build ParameterDescription within scenario",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "parameter",
          "normalized": "Text-\u003eState ParameterDescription()-\u003eState(ScenarioDescription a)()",
          "package": "laborantin-hs",
          "signature": "Text-\u003eState ParameterDescription()-\u003eState(ScenarioDescription m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulate a range as a \u003ccode\u003e\u003ca\u003eParameterValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "range",
          "package": "laborantin-hs",
          "signature": "Rational -\u003e Rational -\u003e Rational -\u003e ParameterValue",
          "source": "src/Laborantin-DSL.html#range",
          "type": "function"
        },
        "index": {
          "description": "Encapsulate range as ParameterValue",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "range",
          "normalized": "Rational-\u003eRational-\u003eRational-\u003eParameterValue",
          "package": "laborantin-hs",
          "signature": "Rational-\u003eRational-\u003eRational-\u003eParameterValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the recovery hook for this scenario\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "recover",
          "package": "laborantin-hs",
          "signature": "(ExecutionError -\u003e Step m ()) -\u003e State (ScenarioDescription m) ()",
          "source": "src/Laborantin-DSL.html#recover",
          "type": "function"
        },
        "index": {
          "description": "Define the recovery hook for this scenario",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "recover",
          "normalized": "(ExecutionError-\u003eStep a())-\u003eState(ScenarioDescription a)()",
          "package": "laborantin-hs",
          "signature": "(ExecutionError-\u003eStep m())-\u003eState(ScenarioDescription m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:recover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the TExpr Bool to load ancestor\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "require",
          "package": "laborantin-hs",
          "signature": "ScenarioDescription m -\u003e Text -\u003e State (ScenarioDescription m) ()",
          "source": "src/Laborantin-DSL.html#require",
          "type": "function"
        },
        "index": {
          "description": "Defines the TExpr Bool to load ancestor",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "require",
          "normalized": "ScenarioDescription a-\u003eText-\u003eState(ScenarioDescription a)()",
          "package": "laborantin-hs",
          "signature": "ScenarioDescription m-\u003eText-\u003eState(ScenarioDescription m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the TExpr Bool to load ancestor\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "requireTExpr",
          "package": "laborantin-hs",
          "signature": "ScenarioDescription m -\u003e TExpr Bool -\u003e State (ScenarioDescription m) ()",
          "source": "src/Laborantin-DSL.html#requireTExpr",
          "type": "function"
        },
        "index": {
          "description": "Defines the TExpr Bool to load ancestor",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "requireTExpr",
          "normalized": "ScenarioDescription a-\u003eTExpr Bool-\u003eState(ScenarioDescription a)()",
          "package": "laborantin-hs",
          "partial": "TExpr",
          "signature": "ScenarioDescription m-\u003eTExpr Bool-\u003eState(ScenarioDescription m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:requireTExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet resolution action for the dependency\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "resolve",
          "package": "laborantin-hs",
          "signature": "((Execution m, Backend m) -\u003e m (Execution m)) -\u003e State (Dependency m) ()",
          "source": "src/Laborantin-DSL.html#resolve",
          "type": "function"
        },
        "index": {
          "description": "Set resolution action for the dependency",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "resolve",
          "normalized": "((Execution a,Backend a)-\u003ea(Execution a))-\u003eState(Dependency a)()",
          "package": "laborantin-hs",
          "signature": "((Execution m,Backend m)-\u003em(Execution m))-\u003eState(Dependency m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e object for the given name.\n\u003c/p\u003e\u003cp\u003eImplementations will return their specific results.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "result",
          "package": "laborantin-hs",
          "signature": "FilePath -\u003e Step m (Result m)",
          "source": "src/Laborantin-DSL.html#result",
          "type": "function"
        },
        "index": {
          "description": "Returns Result object for the given name Implementations will return their specific results",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "result",
          "normalized": "FilePath-\u003eStep a(Result a)",
          "package": "laborantin-hs",
          "signature": "FilePath-\u003eStep m(Result m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the main run hook for this scenario\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "run",
          "package": "laborantin-hs",
          "signature": "Step m () -\u003e State (ScenarioDescription m) ()",
          "source": "src/Laborantin-DSL.html#run",
          "type": "function"
        },
        "index": {
          "description": "Define the main run hook for this scenario",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "run",
          "normalized": "Step a()-\u003eState(ScenarioDescription a)()",
          "package": "laborantin-hs",
          "signature": "Step m()-\u003eState(ScenarioDescription m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSL entry point to build a \u003ccode\u003e\u003ca\u003eScenarioDescription\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "scenario",
          "package": "laborantin-hs",
          "signature": "Text -\u003e State (ScenarioDescription m) () -\u003e ScenarioDescription m",
          "source": "src/Laborantin-DSL.html#scenario",
          "type": "function"
        },
        "index": {
          "description": "DSL entry point to build ScenarioDescription",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "scenario",
          "normalized": "Text-\u003eState(ScenarioDescription a)()-\u003eScenarioDescription a",
          "package": "laborantin-hs",
          "signature": "Text-\u003eState(ScenarioDescription m)()-\u003eScenarioDescription m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:scenario"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns current execution\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "self",
          "package": "laborantin-hs",
          "signature": "Step m (Execution m)",
          "source": "src/Laborantin-DSL.html#self",
          "type": "function"
        },
        "index": {
          "description": "Returns current execution",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "self",
          "package": "laborantin-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an execution variable.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "setVar",
          "package": "laborantin-hs",
          "signature": "Text-\u003e v-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Set an execution variable",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "setVar",
          "normalized": "Text-\u003ea-\u003eb()",
          "package": "laborantin-hs",
          "partial": "Var",
          "signature": "Text-\u003ev-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:setVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the setup hook for this scenario\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "setup",
          "package": "laborantin-hs",
          "signature": "Step m () -\u003e State (ScenarioDescription m) ()",
          "source": "src/Laborantin-DSL.html#setup",
          "type": "function"
        },
        "index": {
          "description": "Define the setup hook for this scenario",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "setup",
          "normalized": "Step a()-\u003eState(ScenarioDescription a)()",
          "package": "laborantin-hs",
          "signature": "Step m()-\u003eState(ScenarioDescription m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:setup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulate a Text as a \u003ccode\u003e\u003ca\u003eParameterValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "str",
          "package": "laborantin-hs",
          "signature": "Text -\u003e ParameterValue",
          "source": "src/Laborantin-DSL.html#str",
          "type": "function"
        },
        "index": {
          "description": "Encapsulate Text as ParameterValue",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "str",
          "normalized": "Text-\u003eParameterValue",
          "package": "laborantin-hs",
          "signature": "Text-\u003eParameterValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the teardown hook for this scenario\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "teardown",
          "package": "laborantin-hs",
          "signature": "Step m () -\u003e State (ScenarioDescription m) ()",
          "source": "src/Laborantin-DSL.html#teardown",
          "type": "function"
        },
        "index": {
          "description": "Define the teardown hook for this scenario",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "teardown",
          "normalized": "Step a()-\u003eState(ScenarioDescription a)()",
          "package": "laborantin-hs",
          "signature": "Step m()-\u003eState(ScenarioDescription m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:teardown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet default values for the paramater\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "values",
          "package": "laborantin-hs",
          "signature": "[ParameterValue] -\u003e State ParameterDescription ()",
          "source": "src/Laborantin-DSL.html#values",
          "type": "function"
        },
        "index": {
          "description": "Set default values for the paramater",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "values",
          "normalized": "[ParameterValue]-\u003eState ParameterDescription()",
          "package": "laborantin-hs",
          "signature": "[ParameterValue]-\u003eState ParameterDescription()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite (overwrite) the result in its entirety.\n\u003c/p\u003e\u003cp\u003eImplementations will return their specific results.\n\u003c/p\u003e",
          "module": "Laborantin.DSL",
          "name": "writeResult",
          "package": "laborantin-hs",
          "signature": "FilePath-\u003e Text-\u003e Step m ()",
          "type": "function"
        },
        "index": {
          "description": "Write overwrite the result in its entirety Implementations will return their specific results",
          "hierarchy": "Laborantin DSL",
          "module": "Laborantin.DSL",
          "name": "writeResult",
          "normalized": "FilePath-\u003eText-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Result",
          "signature": "FilePath-\u003eText-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-DSL.html#v:writeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Implementation",
          "name": "Implementation",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Implementation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Laborantin Implementation",
          "module": "Laborantin.Implementation",
          "name": "Implementation",
          "package": "laborantin-hs",
          "partial": "Implementation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault monad for \u003ccode\u003e\u003ca\u003edefaultBackend\u003c/a\u003e\u003c/code\u003e.\n   EnvIO carries a \u003ccode\u003e\u003ca\u003eDynEnv\u003c/a\u003e\u003c/code\u003e in a state and allows you to perform IO actions.\n\u003c/p\u003e",
          "module": "Laborantin.Implementation",
          "name": "EnvIO",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Implementation.html#EnvIO",
          "type": "type"
        },
        "index": {
          "description": "Default monad for defaultBackend EnvIO carries DynEnv in state and allows you to perform IO actions",
          "hierarchy": "Laborantin Implementation",
          "module": "Laborantin.Implementation",
          "name": "EnvIO",
          "package": "laborantin-hs",
          "partial": "Env IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#t:EnvIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault backend for the \u003ccode\u003e\u003ca\u003eEnvIO\u003c/a\u003e\u003c/code\u003e monad.  This backend uses the filesystem\n as storage and UUIDs for scenario instances (supposes that UUID collision\n cannot happen).\n\u003c/p\u003e\u003cp\u003eParameters, logfiles, and result data all are stored in a unique directory named\n .\u003cem\u003e\u003cscenario-name\u003e\u003c/em\u003e\u003ca\u003euuid\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eResults are individual files in this directory. There is no namespacing\n hence avoid the following names: 'execution.json', 'execution-log.txt', and\n 'execution-log.xml'. These three files are the scenario execution metadata\n and logs.\n\u003c/p\u003e",
          "module": "Laborantin.Implementation",
          "name": "defaultBackend",
          "package": "laborantin-hs",
          "signature": "Backend EnvIO",
          "source": "src/Laborantin-Implementation.html#defaultBackend",
          "type": "function"
        },
        "index": {
          "description": "Default backend for the EnvIO monad This backend uses the filesystem as storage and UUIDs for scenario instances supposes that UUID collision cannot happen Parameters logfiles and result data all are stored in unique directory named scenario-name uuid Results are individual files in this directory There is no namespacing hence avoid the following names execution.json execution-log.txt and execution-log.xml These three files are the scenario execution metadata and logs",
          "hierarchy": "Laborantin Implementation",
          "module": "Laborantin.Implementation",
          "name": "defaultBackend",
          "package": "laborantin-hs",
          "partial": "Backend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:defaultBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault logger for the \u003ccode\u003e\u003ca\u003eEnvIO\u003c/a\u003e\u003c/code\u003e monad (see \u003ccode\u003e\u003ca\u003edefaultBackend\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Laborantin.Implementation",
          "name": "defaultLog",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e LogHandler EnvIO",
          "source": "src/Laborantin-Implementation.html#defaultLog",
          "type": "function"
        },
        "index": {
          "description": "Default logger for the EnvIO monad see defaultBackend",
          "hierarchy": "Laborantin Implementation",
          "module": "Laborantin.Implementation",
          "name": "defaultLog",
          "normalized": "Execution a-\u003eLogHandler EnvIO",
          "package": "laborantin-hs",
          "partial": "Log",
          "signature": "Execution m-\u003eLogHandler EnvIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:defaultLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault result handler for the \u003ccode\u003e\u003ca\u003eEnvIO\u003c/a\u003e\u003c/code\u003e monad (see \u003ccode\u003e\u003ca\u003edefaultBackend\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Laborantin.Implementation",
          "name": "defaultResult",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e FilePath -\u003e Result EnvIO",
          "source": "src/Laborantin-Implementation.html#defaultResult",
          "type": "function"
        },
        "index": {
          "description": "Default result handler for the EnvIO monad see defaultBackend",
          "hierarchy": "Laborantin Implementation",
          "module": "Laborantin.Implementation",
          "name": "defaultResult",
          "normalized": "Execution a-\u003eFilePath-\u003eResult EnvIO",
          "package": "laborantin-hs",
          "partial": "Result",
          "signature": "Execution m-\u003eFilePath-\u003eResult EnvIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:defaultResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Laborantin.Implementation",
          "name": "liftIO",
          "package": "laborantin-hs",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Laborantin Implementation",
          "module": "Laborantin.Implementation",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "laborantin-hs",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an EnvIO action in IO.\n\u003c/p\u003e",
          "module": "Laborantin.Implementation",
          "name": "runEnvIO",
          "package": "laborantin-hs",
          "signature": "IO a -\u003e IO a",
          "source": "src/Laborantin-Implementation.html#runEnvIO",
          "type": "function"
        },
        "index": {
          "description": "Execute an EnvIO action in IO",
          "hierarchy": "Laborantin Implementation",
          "module": "Laborantin.Implementation",
          "name": "runEnvIO",
          "normalized": "IO a-\u003eIO a",
          "package": "laborantin-hs",
          "partial": "Env IO",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Implementation.html#v:runEnvIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Query",
          "name": "Query",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Query.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Laborantin Query",
          "module": "Laborantin.Query",
          "name": "Query",
          "package": "laborantin-hs",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpands a ParameterSpace to all values that could match a TExpr Bool.\n\u003c/p\u003e\u003cp\u003eCurrently only supports countably finite expansions of parameters. \n That is TExpr Bool such as (\u003ccode\u003esc.param \u003ca\u003eparam\u003c/a\u003e \u003e 32) are ignored.\n Instead (\u003c/code\u003esc.param \u003ca\u003eparam\u003c/a\u003e in [\u003ca\u003efoo\u003c/a\u003e, \u003ca\u003ebar\u003c/a\u003e]) gets expanded to (\u003ca\u003eparam\u003c/a\u003e, [StringParam \u003ca\u003efoo\u003c/a\u003e, StringParam \u003ca\u003ebar\u003c/a\u003e])\n Supported expensions are  And \u003cem\u003e Or \u003c/em\u003e Eq / Contains.\n\u003c/p\u003e\u003cp\u003eThe idea is that you can generate a list of Execution to run by first\n expanding all possible points in the ParameterSpace modified by the TExpr,\n and then filter these possible points using a same TExpr.\n\u003c/p\u003e",
          "module": "Laborantin.Query",
          "name": "expandParamSpace",
          "package": "laborantin-hs",
          "signature": "ParameterSpace -\u003e TExpr Bool -\u003e ParameterSpace",
          "source": "src/Laborantin-Query.html#expandParamSpace",
          "type": "function"
        },
        "index": {
          "description": "Expands ParameterSpace to all values that could match TExpr Bool Currently only supports countably finite expansions of parameters That is TExpr Bool such as sc.param param are ignored Instead sc.param param in foo bar gets expanded to param StringParam foo StringParam bar Supported expensions are And Or Eq Contains The idea is that you can generate list of Execution to run by first expanding all possible points in the ParameterSpace modified by the TExpr and then filter these possible points using same TExpr",
          "hierarchy": "Laborantin Query",
          "module": "Laborantin.Query",
          "name": "expandParamSpace",
          "normalized": "ParameterSpace-\u003eTExpr Bool-\u003eParameterSpace",
          "package": "laborantin-hs",
          "partial": "Param Space",
          "signature": "ParameterSpace-\u003eTExpr Bool-\u003eParameterSpace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#v:expandParamSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Query",
          "name": "matchTExpr",
          "package": "laborantin-hs",
          "signature": "TExpr Bool -\u003e Execution m -\u003e Bool",
          "source": "src/Laborantin-Query.html#matchTExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Query",
          "module": "Laborantin.Query",
          "name": "matchTExpr",
          "normalized": "TExpr Bool-\u003eExecution a-\u003eBool",
          "package": "laborantin-hs",
          "partial": "TExpr",
          "signature": "TExpr Bool-\u003eExecution m-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#v:matchTExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Query",
          "name": "matchTExpr'",
          "package": "laborantin-hs",
          "signature": "TExpr Bool -\u003e ScenarioDescription m -\u003e ParameterSet -\u003e Bool",
          "source": "src/Laborantin-Query.html#matchTExpr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Query",
          "module": "Laborantin.Query",
          "name": "matchTExpr'",
          "normalized": "TExpr Bool-\u003eScenarioDescription a-\u003eParameterSet-\u003eBool",
          "package": "laborantin-hs",
          "partial": "TExpr'",
          "signature": "TExpr Bool-\u003eScenarioDescription m-\u003eParameterSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#v:matchTExpr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Query",
          "name": "simplifyOneBoolLevel",
          "package": "laborantin-hs",
          "signature": "TExpr Bool -\u003e TExpr Bool",
          "source": "src/Laborantin-Query.html#simplifyOneBoolLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Query",
          "module": "Laborantin.Query",
          "name": "simplifyOneBoolLevel",
          "normalized": "TExpr Bool-\u003eTExpr Bool",
          "package": "laborantin-hs",
          "partial": "One Bool Level",
          "signature": "TExpr Bool-\u003eTExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Query.html#v:simplifyOneBoolLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Types",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Types",
          "package": "laborantin-hs",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Action wraps a monadic computation inside a step.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "Action",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#Action",
          "type": "newtype"
        },
        "index": {
          "description": "An Action wraps monadic computation inside step",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Action",
          "package": "laborantin-hs",
          "partial": "Action",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "AnalysisError",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#AnalysisError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "AnalysisError",
          "package": "laborantin-hs",
          "partial": "Analysis Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:AnalysisError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Backend captures all functions that an object must provide to run\n Laborantin experiments.\n\u003c/p\u003e\u003cp\u003eSuch functions give ways to prepare, run, analyze, and finalize executions.\n As well as provide support for logging info, storing,\n finding, and deleting prior results.\n\u003c/p\u003e\u003cp\u003eWe prefer such a design over a typeclass to simplify overall design and\n unclutter type definitions everywhere.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "Backend",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "data"
        },
        "index": {
          "description": "Backend captures all functions that an object must provide to run Laborantin experiments Such functions give ways to prepare run analyze and finalize executions As well as provide support for logging info storing finding and deleting prior results We prefer such design over typeclass to simplify overall design and unclutter type definitions everywhere",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Backend",
          "package": "laborantin-hs",
          "partial": "Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Dependency is a lose but flexible way of expressing dependencies for\n experiments.\n\u003c/p\u003e\u003cp\u003eDependencies can check whether they are fullfilled, and try to solve.\n The main goal for the design of Dependency dCheck and dSolve hooks is to let\n a Dependency run experiments and add them as ancestors *before* starting any\n Step. Types may slightly vary in the future.\n\u003c/p\u003e\u003cp\u003eDependencies can do anything that a ScenarioDescription allows (hence they\n are parametrized with the same monad as the ScenarioDescription owning a\n Dependency). However, Dependency check and Dependency resolution do not live\n in a Step m . That is they do not have access to, and cannot modify, the\n DynEnv. Thus, this limits the possibility to read execution parameters from\n within the dCheck and dSolve.\n\u003c/p\u003e\u003cp\u003eTo compensate for this limitation, the dCheck hook accepts the Execution as\n parameter and the dSolve hook accepts both the Execution and the Backend as\n parameter, and get a chance to return a modified Execution object.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "Dependency",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#Dependency",
          "type": "data"
        },
        "index": {
          "description": "Dependency is lose but flexible way of expressing dependencies for experiments Dependencies can check whether they are fullfilled and try to solve The main goal for the design of Dependency dCheck and dSolve hooks is to let Dependency run experiments and add them as ancestors before starting any Step Types may slightly vary in the future Dependencies can do anything that ScenarioDescription allows hence they are parametrized with the same monad as the ScenarioDescription owning Dependency However Dependency check and Dependency resolution do not live in Step That is they do not have access to and cannot modify the DynEnv Thus this limits the possibility to read execution parameters from within the dCheck and dSolve To compensate for this limitation the dCheck hook accepts the Execution as parameter and the dSolve hook accepts both the Execution and the Backend as parameter and get chance to return modified Execution object",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Dependency",
          "package": "laborantin-hs",
          "partial": "Dependency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Dependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDynEnv is a map between Text keys and Dynamic values.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "DynEnv",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#DynEnv",
          "type": "type"
        },
        "index": {
          "description": "DynEnv is map between Text keys and Dynamic values",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "DynEnv",
          "package": "laborantin-hs",
          "partial": "Dyn Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:DynEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Execution represents an ongoing or past experiment result.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "Execution",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#Execution",
          "type": "data"
        },
        "index": {
          "description": "An Execution represents an ongoing or past experiment result",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Execution",
          "package": "laborantin-hs",
          "partial": "Execution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Execution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ExecutionError",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#ExecutionError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ExecutionError",
          "package": "laborantin-hs",
          "partial": "Execution Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ExecutionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ExecutionStatus",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#ExecutionStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ExecutionStatus",
          "package": "laborantin-hs",
          "partial": "Execution Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ExecutionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Finalizer",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#Finalizer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Finalizer",
          "package": "laborantin-hs",
          "partial": "Finalizer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Finalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "LogHandler",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#LogHandler",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "LogHandler",
          "package": "laborantin-hs",
          "partial": "Log Handler",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:LogHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ParameterDescription description carries information for a single\n parameter.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "ParameterDescription",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#ParameterDescription",
          "type": "data"
        },
        "index": {
          "description": "ParameterDescription description carries information for single parameter",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ParameterDescription",
          "package": "laborantin-hs",
          "partial": "Parameter Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ParameterDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ParameterSet (slightly different from a ParameterSpace) is a mapping\n between parameter names and a single ParameterValue.\n\u003c/p\u003e\u003cp\u003eYou can see a ParameterSet as a datapoint within a (multidimensional)\n ParameterSpace.\n\u003c/p\u003e\u003cp\u003eThus, to keep things clearer, we recommend that executions use only text and\n numbers as ParameterValues.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "ParameterSet",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#ParameterSet",
          "type": "type"
        },
        "index": {
          "description": "ParameterSet slightly different from ParameterSpace is mapping between parameter names and single ParameterValue You can see ParameterSet as datapoint within multidimensional ParameterSpace Thus to keep things clearer we recommend that executions use only text and numbers as ParameterValues",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ParameterSet",
          "package": "laborantin-hs",
          "partial": "Parameter Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ParameterSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ParameterSpace maps parameter names to their descriptions.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "ParameterSpace",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#ParameterSpace",
          "type": "type"
        },
        "index": {
          "description": "ParameterSpace maps parameter names to their descriptions",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ParameterSpace",
          "package": "laborantin-hs",
          "partial": "Parameter Space",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ParameterSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo parameter values type should be enough for command-line demands: text\n and numbers.\n\u003c/p\u003e\u003cp\u003eHowever, we provide two other constructors (Array and Range) for the\n ParameterDescriptions in the DSL.\n\u003c/p\u003e\u003cp\u003eExecutions should use text and numbers only.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "ParameterValue",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#ParameterValue",
          "type": "data"
        },
        "index": {
          "description": "Two parameter values type should be enough for command-line demands text and numbers However we provide two other constructors Array and Range for the ParameterDescriptions in the DSL Executions should use text and numbers only",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ParameterValue",
          "package": "laborantin-hs",
          "partial": "Parameter Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ParameterValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackends must generate results that are easy to operate. They represent\n files with read\u003cem\u003ewrite\u003c/em\u003eappend operations as execution steps.\n\u003c/p\u003e\u003cp\u003eNote that Backend might not implement all three of read, write, append\n operations.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "Result",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Backends must generate results that are easy to operate They represent files with read write append operations as execution steps Note that Backend might not implement all three of read write append operations",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Result",
          "package": "laborantin-hs",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Scenario description carries all information to run an experiment.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "ScenarioDescription",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#ScenarioDescription",
          "type": "data"
        },
        "index": {
          "description": "Scenario description carries all information to run an experiment",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ScenarioDescription",
          "package": "laborantin-hs",
          "partial": "Scenario Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:ScenarioDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA step is a stateful operation for a Scenario phase.\n It carries a modifiable DynEnv between hooks and handle ExecutionErrors.\n In addition, you can read (but not modify) the Backend and the Execution.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "Step",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#Step",
          "type": "type"
        },
        "index": {
          "description": "step is stateful operation for Scenario phase It carries modifiable DynEnv between hooks and handle ExecutionErrors In addition you can read but not modify the Backend and the Execution",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Step",
          "package": "laborantin-hs",
          "partial": "Step",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn StoredExecution is a stripped-down version of an Execution.\n\u003c/p\u003e\u003cp\u003eAs it represents an experiment stored on disk, it does not need to carry the\n ScenarioDescription object (otherwise it would become harder to create\n instances such as FromJSON for Executions).\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "StoredExecution",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#StoredExecution",
          "type": "data"
        },
        "index": {
          "description": "An StoredExecution is stripped-down version of an Execution As it represents an experiment stored on disk it does not need to carry the ScenarioDescription object otherwise it would become harder to create instances such as FromJSON for Executions",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "StoredExecution",
          "package": "laborantin-hs",
          "partial": "Stored Execution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:StoredExecution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "TExpr",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "TExpr",
          "package": "laborantin-hs",
          "partial": "TExpr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:TExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UExpr",
          "package": "laborantin-hs",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UExpr",
          "package": "laborantin-hs",
          "partial": "UExpr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#t:UExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Action",
          "package": "laborantin-hs",
          "signature": "Action",
          "source": "src/Laborantin-Types.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Action",
          "package": "laborantin-hs",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "AnalysisError",
          "package": "laborantin-hs",
          "signature": "AnalysisError String",
          "source": "src/Laborantin-Types.html#AnalysisError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "AnalysisError",
          "package": "laborantin-hs",
          "partial": "Analysis Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:AnalysisError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "And",
          "package": "laborantin-hs",
          "signature": "TExpr Bool -\u003e TExpr Bool -\u003e TExpr Bool",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "And",
          "normalized": "TExpr Bool-\u003eTExpr Bool-\u003eTExpr Bool",
          "package": "laborantin-hs",
          "partial": "And",
          "signature": "TExpr Bool-\u003eTExpr Bool-\u003eTExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Array",
          "package": "laborantin-hs",
          "signature": "Array [ParameterValue]",
          "source": "src/Laborantin-Types.html#ParameterValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Array",
          "normalized": "Array[ParameterValue]",
          "package": "laborantin-hs",
          "partial": "Array",
          "signature": "Array[ParameterValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "B",
          "package": "laborantin-hs",
          "signature": "Bool -\u003e TExpr Bool",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "B",
          "normalized": "Bool-\u003eTExpr Bool",
          "package": "laborantin-hs",
          "signature": "Bool-\u003eTExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Backend",
          "package": "laborantin-hs",
          "signature": "Backend",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Backend",
          "package": "laborantin-hs",
          "partial": "Backend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Contains",
          "package": "laborantin-hs",
          "signature": "TExpr a -\u003e TExpr [a] -\u003e TExpr Bool",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Contains",
          "normalized": "TExpr a-\u003eTExpr[a]-\u003eTExpr Bool",
          "package": "laborantin-hs",
          "partial": "Contains",
          "signature": "TExpr a-\u003eTExpr[a]-\u003eTExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Dep",
          "package": "laborantin-hs",
          "signature": "Dep",
          "source": "src/Laborantin-Types.html#Dependency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Dep",
          "package": "laborantin-hs",
          "partial": "Dep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Dep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Eq",
          "package": "laborantin-hs",
          "signature": "TExpr a -\u003e TExpr a -\u003e TExpr Bool",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Eq",
          "normalized": "TExpr a-\u003eTExpr a-\u003eTExpr Bool",
          "package": "laborantin-hs",
          "partial": "Eq",
          "signature": "TExpr a-\u003eTExpr a-\u003eTExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Exec",
          "package": "laborantin-hs",
          "signature": "Exec",
          "source": "src/Laborantin-Types.html#Execution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Exec",
          "package": "laborantin-hs",
          "partial": "Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ExecutionError",
          "package": "laborantin-hs",
          "signature": "ExecutionError String",
          "source": "src/Laborantin-Types.html#ExecutionError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ExecutionError",
          "package": "laborantin-hs",
          "partial": "Execution Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ExecutionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Failure",
          "package": "laborantin-hs",
          "signature": "Failure",
          "source": "src/Laborantin-Types.html#ExecutionStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Failure",
          "package": "laborantin-hs",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Gt",
          "package": "laborantin-hs",
          "signature": "TExpr a -\u003e TExpr a -\u003e TExpr Bool",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Gt",
          "normalized": "TExpr a-\u003eTExpr a-\u003eTExpr Bool",
          "package": "laborantin-hs",
          "partial": "Gt",
          "signature": "TExpr a-\u003eTExpr a-\u003eTExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "L",
          "package": "laborantin-hs",
          "signature": "[TExpr a] -\u003e TExpr [a]",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "L",
          "normalized": "[TExpr a]-\u003eTExpr[a]",
          "package": "laborantin-hs",
          "signature": "[TExpr a]-\u003eTExpr[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "LogHandler",
          "package": "laborantin-hs",
          "signature": "LogHandler",
          "source": "src/Laborantin-Types.html#LogHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "LogHandler",
          "package": "laborantin-hs",
          "partial": "Log Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:LogHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "N",
          "package": "laborantin-hs",
          "signature": "Rational -\u003e TExpr Rational",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "N",
          "normalized": "Rational-\u003eTExpr Rational",
          "package": "laborantin-hs",
          "signature": "Rational-\u003eTExpr Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "NCoerce",
          "package": "laborantin-hs",
          "signature": "TExpr (Text, Maybe ParameterValue) -\u003e TExpr Rational",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "NCoerce",
          "normalized": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Rational",
          "package": "laborantin-hs",
          "partial": "NCoerce",
          "signature": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:NCoerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Not",
          "package": "laborantin-hs",
          "signature": "TExpr Bool -\u003e TExpr Bool",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Not",
          "normalized": "TExpr Bool-\u003eTExpr Bool",
          "package": "laborantin-hs",
          "partial": "Not",
          "signature": "TExpr Bool-\u003eTExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "NumberParam",
          "package": "laborantin-hs",
          "signature": "NumberParam Rational",
          "source": "src/Laborantin-Types.html#ParameterValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "NumberParam",
          "package": "laborantin-hs",
          "partial": "Number Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:NumberParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Or",
          "package": "laborantin-hs",
          "signature": "TExpr Bool -\u003e TExpr Bool -\u003e TExpr Bool",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Or",
          "normalized": "TExpr Bool-\u003eTExpr Bool-\u003eTExpr Bool",
          "package": "laborantin-hs",
          "partial": "Or",
          "signature": "TExpr Bool-\u003eTExpr Bool-\u003eTExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "PDesc",
          "package": "laborantin-hs",
          "signature": "PDesc",
          "source": "src/Laborantin-Types.html#ParameterDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "PDesc",
          "package": "laborantin-hs",
          "partial": "PDesc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:PDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Plus",
          "package": "laborantin-hs",
          "signature": "TExpr Rational -\u003e TExpr Rational -\u003e TExpr Rational",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Plus",
          "normalized": "TExpr Rational-\u003eTExpr Rational-\u003eTExpr Rational",
          "package": "laborantin-hs",
          "partial": "Plus",
          "signature": "TExpr Rational-\u003eTExpr Rational-\u003eTExpr Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Range",
          "package": "laborantin-hs",
          "signature": "Range Rational Rational Rational",
          "source": "src/Laborantin-Types.html#ParameterValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Range",
          "package": "laborantin-hs",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Result",
          "package": "laborantin-hs",
          "signature": "Result",
          "source": "src/Laborantin-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Result",
          "package": "laborantin-hs",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Running",
          "package": "laborantin-hs",
          "signature": "Running",
          "source": "src/Laborantin-Types.html#ExecutionStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Running",
          "package": "laborantin-hs",
          "partial": "Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Running"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "S",
          "package": "laborantin-hs",
          "signature": "Text -\u003e TExpr Text",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "S",
          "normalized": "Text-\u003eTExpr Text",
          "package": "laborantin-hs",
          "signature": "Text-\u003eTExpr Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "SCoerce",
          "package": "laborantin-hs",
          "signature": "TExpr (Text, Maybe ParameterValue) -\u003e TExpr Text",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "SCoerce",
          "normalized": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Text",
          "package": "laborantin-hs",
          "partial": "SCoerce",
          "signature": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:SCoerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "SDesc",
          "package": "laborantin-hs",
          "signature": "SDesc",
          "source": "src/Laborantin-Types.html#ScenarioDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "SDesc",
          "package": "laborantin-hs",
          "partial": "SDesc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:SDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ScName",
          "package": "laborantin-hs",
          "signature": "TExpr Text",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ScName",
          "package": "laborantin-hs",
          "partial": "Sc Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ScName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ScParam",
          "package": "laborantin-hs",
          "signature": "Text -\u003e TExpr (Text, Maybe ParameterValue)",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ScParam",
          "normalized": "Text-\u003eTExpr(Text,Maybe ParameterValue)",
          "package": "laborantin-hs",
          "partial": "Sc Param",
          "signature": "Text-\u003eTExpr(Text,Maybe ParameterValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ScParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ScStatus",
          "package": "laborantin-hs",
          "signature": "TExpr Text",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ScStatus",
          "package": "laborantin-hs",
          "partial": "Sc Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ScStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ScTimestamp",
          "package": "laborantin-hs",
          "signature": "TExpr UTCTime",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ScTimestamp",
          "package": "laborantin-hs",
          "partial": "Sc Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ScTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "SilentNCoerce",
          "package": "laborantin-hs",
          "signature": "TExpr (Text, Maybe ParameterValue) -\u003e TExpr Rational",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "SilentNCoerce",
          "normalized": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Rational",
          "package": "laborantin-hs",
          "partial": "Silent NCoerce",
          "signature": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:SilentNCoerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "SilentSCoerce",
          "package": "laborantin-hs",
          "signature": "TExpr (Text, Maybe ParameterValue) -\u003e TExpr Text",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "SilentSCoerce",
          "normalized": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Text",
          "package": "laborantin-hs",
          "partial": "Silent SCoerce",
          "signature": "TExpr(Text,Maybe ParameterValue)-\u003eTExpr Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:SilentSCoerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Stored",
          "package": "laborantin-hs",
          "signature": "Stored",
          "source": "src/Laborantin-Types.html#StoredExecution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Stored",
          "package": "laborantin-hs",
          "partial": "Stored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Stored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "StringParam",
          "package": "laborantin-hs",
          "signature": "StringParam Text",
          "source": "src/Laborantin-Types.html#ParameterValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "StringParam",
          "package": "laborantin-hs",
          "partial": "String Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:StringParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Success",
          "package": "laborantin-hs",
          "signature": "Success",
          "source": "src/Laborantin-Types.html#ExecutionStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Success",
          "package": "laborantin-hs",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "T",
          "package": "laborantin-hs",
          "signature": "UTCTime -\u003e TExpr UTCTime",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "T",
          "normalized": "UTCTime-\u003eTExpr UTCTime",
          "package": "laborantin-hs",
          "signature": "UTCTime-\u003eTExpr UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "TBind",
          "package": "laborantin-hs",
          "signature": "String -\u003e (a -\u003e TExpr b) -\u003e TExpr a -\u003e TExpr b",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "TBind",
          "normalized": "String-\u003e(a-\u003eTExpr b)-\u003eTExpr a-\u003eTExpr b",
          "package": "laborantin-hs",
          "partial": "TBind",
          "signature": "String-\u003e(a-\u003eTExpr b)-\u003eTExpr a-\u003eTExpr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:TBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "Times",
          "package": "laborantin-hs",
          "signature": "TExpr Rational -\u003e TExpr Rational -\u003e TExpr Rational",
          "source": "src/Laborantin-Types.html#TExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "Times",
          "normalized": "TExpr Rational-\u003eTExpr Rational-\u003eTExpr Rational",
          "package": "laborantin-hs",
          "partial": "Times",
          "signature": "TExpr Rational-\u003eTExpr Rational-\u003eTExpr Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:Times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UAnd",
          "package": "laborantin-hs",
          "signature": "UAnd UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UAnd",
          "package": "laborantin-hs",
          "partial": "UAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UB",
          "package": "laborantin-hs",
          "signature": "UB Bool",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UB",
          "package": "laborantin-hs",
          "partial": "UB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UContains",
          "package": "laborantin-hs",
          "signature": "UContains UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UContains",
          "package": "laborantin-hs",
          "partial": "UContains",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UContains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UDiv",
          "package": "laborantin-hs",
          "signature": "UDiv UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UDiv",
          "package": "laborantin-hs",
          "partial": "UDiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UEq",
          "package": "laborantin-hs",
          "signature": "UEq UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UEq",
          "package": "laborantin-hs",
          "partial": "UEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UGt",
          "package": "laborantin-hs",
          "signature": "UGt UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UGt",
          "package": "laborantin-hs",
          "partial": "UGt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UGt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UGte",
          "package": "laborantin-hs",
          "signature": "UGte UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UGte",
          "package": "laborantin-hs",
          "partial": "UGte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UGte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UL",
          "package": "laborantin-hs",
          "signature": "UL [UExpr]",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UL",
          "normalized": "UL[UExpr]",
          "package": "laborantin-hs",
          "partial": "UL",
          "signature": "UL[UExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ULt",
          "package": "laborantin-hs",
          "signature": "ULt UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ULt",
          "package": "laborantin-hs",
          "partial": "ULt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ULt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ULte",
          "package": "laborantin-hs",
          "signature": "ULte UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ULte",
          "package": "laborantin-hs",
          "partial": "ULte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ULte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UMinus",
          "package": "laborantin-hs",
          "signature": "UMinus UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UMinus",
          "package": "laborantin-hs",
          "partial": "UMinus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UN",
          "package": "laborantin-hs",
          "signature": "UN Rational",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UN",
          "package": "laborantin-hs",
          "partial": "UN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UNot",
          "package": "laborantin-hs",
          "signature": "UNot UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UNot",
          "package": "laborantin-hs",
          "partial": "UNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UOr",
          "package": "laborantin-hs",
          "signature": "UOr UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UOr",
          "package": "laborantin-hs",
          "partial": "UOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UPlus",
          "package": "laborantin-hs",
          "signature": "UPlus UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UPlus",
          "package": "laborantin-hs",
          "partial": "UPlus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "US",
          "package": "laborantin-hs",
          "signature": "US Text",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "US",
          "package": "laborantin-hs",
          "partial": "US",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:US"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UScName",
          "package": "laborantin-hs",
          "signature": "UScName",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UScName",
          "package": "laborantin-hs",
          "partial": "USc Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UScName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UScParam",
          "package": "laborantin-hs",
          "signature": "UScParam Text",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UScParam",
          "package": "laborantin-hs",
          "partial": "USc Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UScParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UScStatus",
          "package": "laborantin-hs",
          "signature": "UScStatus",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UScStatus",
          "package": "laborantin-hs",
          "partial": "USc Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UScStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UScTimestamp",
          "package": "laborantin-hs",
          "signature": "UScTimestamp",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UScTimestamp",
          "package": "laborantin-hs",
          "partial": "USc Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UScTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UT",
          "package": "laborantin-hs",
          "signature": "UT UTCTime",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UT",
          "package": "laborantin-hs",
          "partial": "UT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "UTimes",
          "package": "laborantin-hs",
          "signature": "UTimes UExpr UExpr",
          "source": "src/Laborantin-Types.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "UTimes",
          "package": "laborantin-hs",
          "partial": "UTimes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:UTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bAnalyze",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e Step m ()",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bAnalyze",
          "normalized": "Execution a-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Analyze",
          "signature": "Execution m-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bAnalyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bFinalizeExecution",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e Finalizer m -\u003e m ()",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bFinalizeExecution",
          "normalized": "Execution a-\u003eFinalizer a-\u003ea()",
          "package": "laborantin-hs",
          "partial": "Finalize Execution",
          "signature": "Execution m-\u003eFinalizer m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bFinalizeExecution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bLoad",
          "package": "laborantin-hs",
          "signature": "[ScenarioDescription m] -\u003e TExpr Bool -\u003e m [Execution m]",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bLoad",
          "normalized": "[ScenarioDescription a]-\u003eTExpr Bool-\u003ea[Execution a]",
          "package": "laborantin-hs",
          "partial": "Load",
          "signature": "[ScenarioDescription m]-\u003eTExpr Bool-\u003em[Execution m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bLogger",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e Step m (LogHandler m)",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bLogger",
          "normalized": "Execution a-\u003eStep a(LogHandler a)",
          "package": "laborantin-hs",
          "partial": "Logger",
          "signature": "Execution m-\u003eStep m(LogHandler m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bName",
          "package": "laborantin-hs",
          "signature": "Text",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bName",
          "package": "laborantin-hs",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bPrepareExecution",
          "package": "laborantin-hs",
          "signature": "ScenarioDescription m -\u003e ParameterSet -\u003e m (Execution m, Finalizer m)",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bPrepareExecution",
          "normalized": "ScenarioDescription a-\u003eParameterSet-\u003ea(Execution a,Finalizer a)",
          "package": "laborantin-hs",
          "partial": "Prepare Execution",
          "signature": "ScenarioDescription m-\u003eParameterSet-\u003em(Execution m,Finalizer m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bPrepareExecution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bRecover",
          "package": "laborantin-hs",
          "signature": "ExecutionError -\u003e Execution m -\u003e Step m ()",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bRecover",
          "normalized": "ExecutionError-\u003eExecution a-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Recover",
          "signature": "ExecutionError-\u003eExecution m-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bRecover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bRemove",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e m ()",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bRemove",
          "normalized": "Execution a-\u003ea()",
          "package": "laborantin-hs",
          "partial": "Remove",
          "signature": "Execution m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bResult",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e FilePath -\u003e Step m (Result m)",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bResult",
          "normalized": "Execution a-\u003eFilePath-\u003eStep a(Result a)",
          "package": "laborantin-hs",
          "partial": "Result",
          "signature": "Execution m-\u003eFilePath-\u003eStep m(Result m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bRun",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e Step m ()",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bRun",
          "normalized": "Execution a-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Run",
          "signature": "Execution m-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bSetup",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e Step m ()",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bSetup",
          "normalized": "Execution a-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Setup",
          "signature": "Execution m-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bSetup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "bTeardown",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e Step m ()",
          "source": "src/Laborantin-Types.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "bTeardown",
          "normalized": "Execution a-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Teardown",
          "signature": "Execution m-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:bTeardown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "dCheck",
          "package": "laborantin-hs",
          "signature": "Execution m -\u003e m Bool",
          "source": "src/Laborantin-Types.html#Dependency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "dCheck",
          "normalized": "Execution a-\u003ea Bool",
          "package": "laborantin-hs",
          "partial": "Check",
          "signature": "Execution m-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:dCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "dDesc",
          "package": "laborantin-hs",
          "signature": "Text",
          "source": "src/Laborantin-Types.html#Dependency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "dDesc",
          "package": "laborantin-hs",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:dDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "dName",
          "package": "laborantin-hs",
          "signature": "Text",
          "source": "src/Laborantin-Types.html#Dependency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "dName",
          "package": "laborantin-hs",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:dName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "dSolve",
          "package": "laborantin-hs",
          "signature": "(Execution m, Backend m) -\u003e m (Execution m)",
          "source": "src/Laborantin-Types.html#Dependency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "dSolve",
          "normalized": "(Execution a,Backend a)-\u003ea(Execution a)",
          "package": "laborantin-hs",
          "partial": "Solve",
          "signature": "(Execution m,Backend m)-\u003em(Execution m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:dSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "eAncestors",
          "package": "laborantin-hs",
          "signature": "[Execution m]",
          "source": "src/Laborantin-Types.html#Execution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "eAncestors",
          "normalized": "[Execution a]",
          "package": "laborantin-hs",
          "partial": "Ancestors",
          "signature": "[Execution m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eAncestors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "eParamSet",
          "package": "laborantin-hs",
          "signature": "ParameterSet",
          "source": "src/Laborantin-Types.html#Execution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "eParamSet",
          "package": "laborantin-hs",
          "partial": "Param Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eParamSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "ePath",
          "package": "laborantin-hs",
          "signature": "FilePath",
          "source": "src/Laborantin-Types.html#Execution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "ePath",
          "package": "laborantin-hs",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:ePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "eScenario",
          "package": "laborantin-hs",
          "signature": "ScenarioDescription m",
          "source": "src/Laborantin-Types.html#Execution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "eScenario",
          "package": "laborantin-hs",
          "partial": "Scenario",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eScenario"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "eStatus",
          "package": "laborantin-hs",
          "signature": "ExecutionStatus",
          "source": "src/Laborantin-Types.html#Execution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "eStatus",
          "package": "laborantin-hs",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "eTimeStamps",
          "package": "laborantin-hs",
          "signature": "(UTCTime, UTCTime)",
          "source": "src/Laborantin-Types.html#Execution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "eTimeStamps",
          "normalized": "(UTCTime,UTCTime)",
          "package": "laborantin-hs",
          "partial": "Time Stamps",
          "signature": "(UTCTime,UTCTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:eTimeStamps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "emptyEnv",
          "package": "laborantin-hs",
          "signature": "DynEnv",
          "source": "src/Laborantin-Types.html#emptyEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "emptyEnv",
          "package": "laborantin-hs",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:emptyEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "emptyParameter",
          "package": "laborantin-hs",
          "signature": "ParameterDescription",
          "source": "src/Laborantin-Types.html#emptyParameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "emptyParameter",
          "package": "laborantin-hs",
          "partial": "Parameter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:emptyParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "emptyScenario",
          "package": "laborantin-hs",
          "signature": "ScenarioDescription m",
          "source": "src/Laborantin-Types.html#emptyScenario",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "emptyScenario",
          "package": "laborantin-hs",
          "partial": "Scenario",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:emptyScenario"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpands a ParameterValue to a list of ParameterValues.\n  Mainly flattens ranges.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "expandValue",
          "package": "laborantin-hs",
          "signature": "ParameterValue -\u003e [ParameterValue]",
          "source": "src/Laborantin-Types.html#expandValue",
          "type": "function"
        },
        "index": {
          "description": "Expands ParameterValue to list of ParameterValues Mainly flattens ranges",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "expandValue",
          "normalized": "ParameterValue-\u003e[ParameterValue]",
          "package": "laborantin-hs",
          "partial": "Value",
          "signature": "ParameterValue-\u003e[ParameterValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:expandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "lLog",
          "package": "laborantin-hs",
          "signature": "Text -\u003e Step m ()",
          "source": "src/Laborantin-Types.html#LogHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "lLog",
          "normalized": "Text-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Log",
          "signature": "Text-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:lLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two ParameterSpace by extending all dimensions.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "mergeParamSpaces",
          "package": "laborantin-hs",
          "signature": "ParameterSpace -\u003e ParameterSpace -\u003e ParameterSpace",
          "source": "src/Laborantin-Types.html#mergeParamSpaces",
          "type": "function"
        },
        "index": {
          "description": "Merges two ParameterSpace by extending all dimensions",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "mergeParamSpaces",
          "normalized": "ParameterSpace-\u003eParameterSpace-\u003eParameterSpace",
          "package": "laborantin-hs",
          "partial": "Param Spaces",
          "signature": "ParameterSpace-\u003eParameterSpace-\u003eParameterSpace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:mergeParamSpaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "pAppend",
          "package": "laborantin-hs",
          "signature": "Text -\u003e Step m ()",
          "source": "src/Laborantin-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "pAppend",
          "normalized": "Text-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Append",
          "signature": "Text-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "pDesc",
          "package": "laborantin-hs",
          "signature": "Text",
          "source": "src/Laborantin-Types.html#ParameterDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "pDesc",
          "package": "laborantin-hs",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "pName",
          "package": "laborantin-hs",
          "signature": "Text",
          "source": "src/Laborantin-Types.html#ParameterDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "pName",
          "package": "laborantin-hs",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "pPath",
          "package": "laborantin-hs",
          "signature": "FilePath",
          "source": "src/Laborantin-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "pPath",
          "package": "laborantin-hs",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "pRead",
          "package": "laborantin-hs",
          "signature": "Step m Text",
          "source": "src/Laborantin-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "pRead",
          "package": "laborantin-hs",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "pValues",
          "package": "laborantin-hs",
          "signature": "[ParameterValue]",
          "source": "src/Laborantin-Types.html#ParameterDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "pValues",
          "normalized": "[ParameterValue]",
          "package": "laborantin-hs",
          "partial": "Values",
          "signature": "[ParameterValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "pWrite",
          "package": "laborantin-hs",
          "signature": "Text -\u003e Step m ()",
          "source": "src/Laborantin-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "pWrite",
          "normalized": "Text-\u003eStep a()",
          "package": "laborantin-hs",
          "partial": "Write",
          "signature": "Text-\u003eStep m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:pWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an exhaustive list of ParameterSet (i.e., all data points) to\n cover a (multidimensional) ParameterSpace.\n\u003c/p\u003e\u003cp\u003eBasically a Cartesian product.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "paramSets",
          "package": "laborantin-hs",
          "signature": "ParameterSpace -\u003e [ParameterSet]",
          "source": "src/Laborantin-Types.html#paramSets",
          "type": "function"
        },
        "index": {
          "description": "Returns an exhaustive list of ParameterSet i.e all data points to cover multidimensional ParameterSpace Basically Cartesian product",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "paramSets",
          "normalized": "ParameterSpace-\u003e[ParameterSet]",
          "package": "laborantin-hs",
          "partial": "Sets",
          "signature": "ParameterSpace-\u003e[ParameterSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:paramSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "sDeps",
          "package": "laborantin-hs",
          "signature": "[Dependency m]",
          "source": "src/Laborantin-Types.html#ScenarioDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "sDeps",
          "normalized": "[Dependency a]",
          "package": "laborantin-hs",
          "partial": "Deps",
          "signature": "[Dependency m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "sDesc",
          "package": "laborantin-hs",
          "signature": "Text",
          "source": "src/Laborantin-Types.html#ScenarioDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "sDesc",
          "package": "laborantin-hs",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "sHooks",
          "package": "laborantin-hs",
          "signature": "Map Text (Action m)",
          "source": "src/Laborantin-Types.html#ScenarioDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "sHooks",
          "package": "laborantin-hs",
          "partial": "Hooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "sName",
          "package": "laborantin-hs",
          "signature": "Text",
          "source": "src/Laborantin-Types.html#ScenarioDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "sName",
          "package": "laborantin-hs",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "sParams",
          "package": "laborantin-hs",
          "signature": "ParameterSpace",
          "source": "src/Laborantin-Types.html#ScenarioDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "sParams",
          "package": "laborantin-hs",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "sQuery",
          "package": "laborantin-hs",
          "signature": "TExpr Bool",
          "source": "src/Laborantin-Types.html#ScenarioDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "sQuery",
          "package": "laborantin-hs",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "sRecoveryAction",
          "package": "laborantin-hs",
          "signature": "Maybe (ExecutionError -\u003e Action m)",
          "source": "src/Laborantin-Types.html#ScenarioDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "sRecoveryAction",
          "normalized": "Maybe(ExecutionError-\u003eAction a)",
          "package": "laborantin-hs",
          "partial": "Recovery Action",
          "signature": "Maybe(ExecutionError-\u003eAction m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sRecoveryAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "seAncestors",
          "package": "laborantin-hs",
          "signature": "[(FilePath, Text)]",
          "source": "src/Laborantin-Types.html#StoredExecution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "seAncestors",
          "normalized": "[(FilePath,Text)]",
          "package": "laborantin-hs",
          "partial": "Ancestors",
          "signature": "[(FilePath,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:seAncestors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "seParamSet",
          "package": "laborantin-hs",
          "signature": "ParameterSet",
          "source": "src/Laborantin-Types.html#StoredExecution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "seParamSet",
          "package": "laborantin-hs",
          "partial": "Param Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:seParamSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "sePath",
          "package": "laborantin-hs",
          "signature": "FilePath",
          "source": "src/Laborantin-Types.html#StoredExecution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "sePath",
          "package": "laborantin-hs",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:sePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "seStatus",
          "package": "laborantin-hs",
          "signature": "ExecutionStatus",
          "source": "src/Laborantin-Types.html#StoredExecution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "seStatus",
          "package": "laborantin-hs",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:seStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "seTimeStamps",
          "package": "laborantin-hs",
          "signature": "(UTCTime, UTCTime)",
          "source": "src/Laborantin-Types.html#StoredExecution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "seTimeStamps",
          "normalized": "(UTCTime,UTCTime)",
          "package": "laborantin-hs",
          "partial": "Time Stamps",
          "signature": "(UTCTime,UTCTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:seTimeStamps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin.Types",
          "name": "unAction",
          "package": "laborantin-hs",
          "signature": "Step m ()",
          "source": "src/Laborantin-Types.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "unAction",
          "normalized": "Step a()",
          "package": "laborantin-hs",
          "partial": "Action",
          "signature": "Step m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:unAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a single dimension of the ParameterSpace to be the list of\n ParameterValue s in 3rd parameter.\n\u003c/p\u003e",
          "module": "Laborantin.Types",
          "name": "updateParam",
          "package": "laborantin-hs",
          "signature": "ParameterSpace -\u003e Text -\u003e [ParameterValue] -\u003e ParameterSpace",
          "source": "src/Laborantin-Types.html#updateParam",
          "type": "function"
        },
        "index": {
          "description": "Updates single dimension of the ParameterSpace to be the list of ParameterValue in rd parameter",
          "hierarchy": "Laborantin Types",
          "module": "Laborantin.Types",
          "name": "updateParam",
          "normalized": "ParameterSpace-\u003eText-\u003e[ParameterValue]-\u003eParameterSpace",
          "package": "laborantin-hs",
          "partial": "Param",
          "signature": "ParameterSpace-\u003eText-\u003e[ParameterValue]-\u003eParameterSpace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin-Types.html#v:updateParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Laborantin",
          "name": "Laborantin",
          "package": "laborantin-hs",
          "source": "src/Laborantin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Laborantin",
          "module": "Laborantin",
          "name": "Laborantin",
          "package": "laborantin-hs",
          "partial": "Laborantin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpands parameters given a TExpr and a ScenarioDescription into a list of\n parameter spaces (sort of cartesian product of all possible params)\n\u003c/p\u003e",
          "module": "Laborantin",
          "name": "expandParameterSets",
          "package": "laborantin-hs",
          "signature": "ScenarioDescription m -\u003e TExpr Bool -\u003e [ParameterSet]",
          "source": "src/Laborantin.html#expandParameterSets",
          "type": "function"
        },
        "index": {
          "description": "Expands parameters given TExpr and ScenarioDescription into list of parameter spaces sort of cartesian product of all possible params",
          "hierarchy": "Laborantin",
          "module": "Laborantin",
          "name": "expandParameterSets",
          "normalized": "ScenarioDescription a-\u003eTExpr Bool-\u003e[ParameterSet]",
          "package": "laborantin-hs",
          "partial": "Parameter Sets",
          "signature": "ScenarioDescription m-\u003eTExpr Bool-\u003e[ParameterSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:expandParameterSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads executions of given ScenarioDescription and matching a given query\n using a specific backend.\n\u003c/p\u003e",
          "module": "Laborantin",
          "name": "load",
          "package": "laborantin-hs",
          "signature": "Backend m -\u003e [ScenarioDescription m] -\u003e TExpr Bool -\u003e m [Execution m]",
          "source": "src/Laborantin.html#load",
          "type": "function"
        },
        "index": {
          "description": "Loads executions of given ScenarioDescription and matching given query using specific backend",
          "hierarchy": "Laborantin",
          "module": "Laborantin",
          "name": "load",
          "normalized": "Backend a-\u003e[ScenarioDescription a]-\u003eTExpr Bool-\u003ea[Execution a]",
          "package": "laborantin-hs",
          "signature": "Backend m-\u003e[ScenarioDescription m]-\u003eTExpr Bool-\u003em[Execution m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike matchingParameterSets but also remove existing ParameterSet given as\n third parameter.\n\u003c/p\u003e",
          "module": "Laborantin",
          "name": "missingParameterSets",
          "package": "laborantin-hs",
          "signature": "ScenarioDescription m -\u003e TExpr Bool -\u003e [ParameterSet] -\u003e [ParameterSet]",
          "source": "src/Laborantin.html#missingParameterSets",
          "type": "function"
        },
        "index": {
          "description": "Like matchingParameterSets but also remove existing ParameterSet given as third parameter",
          "hierarchy": "Laborantin",
          "module": "Laborantin",
          "name": "missingParameterSets",
          "normalized": "ScenarioDescription a-\u003eTExpr Bool-\u003e[ParameterSet]-\u003e[ParameterSet]",
          "package": "laborantin-hs",
          "partial": "Parameter Sets",
          "signature": "ScenarioDescription m-\u003eTExpr Bool-\u003e[ParameterSet]-\u003e[ParameterSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:missingParameterSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a list of execution actions for a given\n (scenario, parameter-query, existing) ancestors.\n\u003c/p\u003e\u003cp\u003eThis function returns one action per ParameterSet which is required by the\n parameter-query and not yet present in the existing list of executions.\n\u003c/p\u003e\u003cp\u003eFor instance, if the scenario has one parameter \u003ccode\u003efoo\u003c/code\u003e; the query wants \u003ccode\u003efoo\u003c/code\u003e\n in [1,2,3,4]; and there is one execution with \u003ccode\u003efoo\u003c/code\u003e == 2; then this function\n returns 3 actions (for parameters 1, 3, and 4).\n\u003c/p\u003e\u003cp\u003eA user can then run these actions in sequence (or concurrently if it makes\n sense).\n\u003c/p\u003e",
          "module": "Laborantin",
          "name": "prepare",
          "package": "laborantin-hs",
          "signature": "Backend m -\u003e TExpr Bool -\u003e [Execution m] -\u003e ScenarioDescription m -\u003e [m (Execution m)]",
          "source": "src/Laborantin.html#prepare",
          "type": "function"
        },
        "index": {
          "description": "Prepare list of execution actions for given scenario parameter-query existing ancestors This function returns one action per ParameterSet which is required by the parameter-query and not yet present in the existing list of executions For instance if the scenario has one parameter foo the query wants foo in and there is one execution with foo then this function returns actions for parameters and user can then run these actions in sequence or concurrently if it makes sense",
          "hierarchy": "Laborantin",
          "module": "Laborantin",
          "name": "prepare",
          "normalized": "Backend a-\u003eTExpr Bool-\u003e[Execution a]-\u003eScenarioDescription a-\u003e[a(Execution a)]",
          "package": "laborantin-hs",
          "signature": "Backend m-\u003eTExpr Bool-\u003e[Execution m]-\u003eScenarioDescription m-\u003e[m(Execution m)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:prepare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an execution using a specific backend.\n\u003c/p\u003e",
          "module": "Laborantin",
          "name": "remove",
          "package": "laborantin-hs",
          "signature": "Backend m -\u003e Execution m -\u003e m ()",
          "source": "src/Laborantin.html#remove",
          "type": "function"
        },
        "index": {
          "description": "Remove an execution using specific backend",
          "hierarchy": "Laborantin",
          "module": "Laborantin",
          "name": "remove",
          "normalized": "Backend a-\u003eExecution a-\u003ea()",
          "package": "laborantin-hs",
          "signature": "Backend m-\u003eExecution m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the analysis hooks.\n\u003c/p\u003e",
          "module": "Laborantin",
          "name": "runAnalyze",
          "package": "laborantin-hs",
          "signature": "Backend m -\u003e Execution m -\u003e m (Either AnalysisError ())",
          "source": "src/Laborantin.html#runAnalyze",
          "type": "function"
        },
        "index": {
          "description": "Runs the analysis hooks",
          "hierarchy": "Laborantin",
          "module": "Laborantin",
          "name": "runAnalyze",
          "normalized": "Backend a-\u003eExecution a-\u003ea(Either AnalysisError())",
          "package": "laborantin-hs",
          "partial": "Analyze",
          "signature": "Backend m-\u003eExecution m-\u003em(Either AnalysisError())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/laborantin-hs/docs/Laborantin.html#v:runAnalyze"
      }
    }
  ]
]