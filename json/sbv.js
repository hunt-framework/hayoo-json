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
        "word": "sbv"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the Boolector SMT solver. Import this module if you want to use the\n Boolector SMT prover as your backend solver. Also see:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Yices\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Z3\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.CVC4\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.MathSAT\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "Boolector",
          "package": "sbv",
          "source": "src/Data-SBV-Bridge-Boolector.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the Boolector SMT solver Import this module if you want to use the Boolector SMT prover as your backend solver Also see Data.SBV.Bridge.Yices Data.SBV.Bridge.Z3 Data.SBV.Bridge.CVC4 Data.SBV.Bridge.MathSAT",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "Boolector",
          "package": "sbv",
          "partial": "Boolector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all satisfying solutions, using the CVC4 SMT solver\n\u003c/p\u003e",
          "module": "[\"Data.SBV.Bridge.Boolector\",\"Data.SBV.Bridge.CVC4\",\"Data.SBV.Bridge.MathSAT\"]",
          "name": "allSat",
          "package": "sbv",
          "signature": "a-\u003e IO AllSatResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:allSat\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:allSat\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:allSat\"]"
        },
        "index": {
          "description": "Find all satisfying solutions using the CVC4 SMT solver",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "allSat",
          "normalized": "a-\u003eIO AllSatResult",
          "package": "sbv",
          "partial": "Sat",
          "signature": "a-\u003eIO AllSatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:allSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the statement is satisfiable, with an optional time-out in seconds, using the CVC4 SMT solver\n\u003c/p\u003e",
          "module": "[\"Data.SBV.Bridge.Boolector\",\"Data.SBV.Bridge.CVC4\",\"Data.SBV.Bridge.MathSAT\"]",
          "name": "isSatisfiable",
          "package": "sbv",
          "signature": "Maybe Int-\u003e a-\u003e IO (Maybe Bool)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:isSatisfiable\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:isSatisfiable\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:isSatisfiable\"]"
        },
        "index": {
          "description": "Check if the statement is satisfiable with an optional time-out in seconds using the CVC4 SMT solver",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "isSatisfiable",
          "normalized": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Satisfiable",
          "signature": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:isSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the statement is a theorem, with an optional time-out in seconds, using the CVC4 SMT solver\n\u003c/p\u003e",
          "module": "[\"Data.SBV.Bridge.Boolector\",\"Data.SBV.Bridge.CVC4\",\"Data.SBV.Bridge.MathSAT\"]",
          "name": "isTheorem",
          "package": "sbv",
          "signature": "Maybe Int-\u003e a-\u003e IO (Maybe Bool)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:isTheorem\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:isTheorem\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:isTheorem\"]"
        },
        "index": {
          "description": "Check if the statement is theorem with an optional time-out in seconds using the CVC4 SMT solver",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "isTheorem",
          "normalized": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Theorem",
          "signature": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:isTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck vacuity of the explicit constraints introduced by calls to the \u003ccode\u003e\u003ca\u003econstrain\u003c/a\u003e\u003c/code\u003e function, using the CVC4 SMT solver\n\u003c/p\u003e",
          "module": "[\"Data.SBV.Bridge.Boolector\",\"Data.SBV.Bridge.CVC4\",\"Data.SBV.Bridge.MathSAT\"]",
          "name": "isVacuous",
          "package": "sbv",
          "signature": "a-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:isVacuous\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:isVacuous\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:isVacuous\"]"
        },
        "index": {
          "description": "Check vacuity of the explicit constraints introduced by calls to the constrain function using the CVC4 SMT solver",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "isVacuous",
          "normalized": "a-\u003eIO Bool",
          "package": "sbv",
          "partial": "Vacuous",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:isVacuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximize cost functions, using the CVC4 SMT solver\n\u003c/p\u003e",
          "module": "[\"Data.SBV.Bridge.Boolector\",\"Data.SBV.Bridge.CVC4\",\"Data.SBV.Bridge.MathSAT\"]",
          "name": "maximize",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:maximize\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:maximize\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:maximize\"]"
        },
        "index": {
          "description": "Maximize cost functions using the CVC4 SMT solver",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "maximize",
          "normalized": "OptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimize cost functions, using the CVC4 SMT solver\n\u003c/p\u003e",
          "module": "[\"Data.SBV.Bridge.Boolector\",\"Data.SBV.Bridge.CVC4\",\"Data.SBV.Bridge.MathSAT\"]",
          "name": "minimize",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:minimize\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:minimize\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:minimize\"]"
        },
        "index": {
          "description": "Minimize cost functions using the CVC4 SMT solver",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "minimize",
          "normalized": "OptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimize cost functions, using the CVC4 SMT solver\n\u003c/p\u003e",
          "module": "[\"Data.SBV.Bridge.Boolector\",\"Data.SBV.Bridge.CVC4\",\"Data.SBV.Bridge.MathSAT\"]",
          "name": "optimize",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e (SBV c -\u003e SBV c -\u003e SBool)-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:optimize\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:optimize\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:optimize\"]"
        },
        "index": {
          "description": "Optimize cost functions using the CVC4 SMT solver",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "optimize",
          "normalized": "OptimizeOpts-\u003e(SBV a-\u003eSBV a-\u003eSBool)-\u003e([SBV b]-\u003eSBV a)-\u003eInt-\u003e([SBV b]-\u003eSBool)-\u003eIO(Maybe[b])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e(SBV c-\u003eSBV c-\u003eSBool)-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve theorems, using the CVC4 SMT solver\n\u003c/p\u003e",
          "module": "[\"Data.SBV.Bridge.Boolector\",\"Data.SBV.Bridge.CVC4\",\"Data.SBV.Bridge.MathSAT\"]",
          "name": "prove",
          "package": "sbv",
          "signature": "a-\u003e IO ThmResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:prove\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:prove\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:prove\"]"
        },
        "index": {
          "description": "Prove theorems using the CVC4 SMT solver",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "prove",
          "normalized": "a-\u003eIO ThmResult",
          "package": "sbv",
          "signature": "a-\u003eIO ThmResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:prove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind satisfying solutions, using the CVC4 SMT solver\n\u003c/p\u003e",
          "module": "[\"Data.SBV.Bridge.Boolector\",\"Data.SBV.Bridge.CVC4\",\"Data.SBV.Bridge.MathSAT\"]",
          "name": "sat",
          "package": "sbv",
          "signature": "a-\u003e IO SatResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:sat\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:sat\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:sat\"]"
        },
        "index": {
          "description": "Find satisfying solutions using the CVC4 SMT solver",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "sat",
          "normalized": "a-\u003eIO SatResult",
          "package": "sbv",
          "signature": "a-\u003eIO SatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent solver instance, pointing to cvc4.\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Bridge-Boolector.html#sbvCurrentSolver",
          "type": "function"
        },
        "index": {
          "description": "Current solver instance pointing to cvc4",
          "hierarchy": "Data SBV Bridge Boolector",
          "module": "Data.SBV.Bridge.Boolector",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "partial": "Current Solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Boolector.html#v:sbvCurrentSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the CVC4 SMT solver. Import this module if you want to use the\n CVC4 SMT prover as your backend solver. Also see:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Yices\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Z3\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Boolector\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.MathSAT\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.SBV.Bridge.CVC4",
          "name": "CVC4",
          "package": "sbv",
          "source": "src/Data-SBV-Bridge-CVC4.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the CVC4 SMT solver Import this module if you want to use the CVC4 SMT prover as your backend solver Also see Data.SBV.Bridge.Yices Data.SBV.Bridge.Z3 Data.SBV.Bridge.Boolector Data.SBV.Bridge.MathSAT",
          "hierarchy": "Data SBV Bridge CVC4",
          "module": "Data.SBV.Bridge.CVC4",
          "name": "CVC4",
          "package": "sbv",
          "partial": "CVC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent solver instance, pointing to cvc4.\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.CVC4",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Bridge-CVC4.html#sbvCurrentSolver",
          "type": "function"
        },
        "index": {
          "description": "Current solver instance pointing to cvc4",
          "hierarchy": "Data SBV Bridge CVC4",
          "module": "Data.SBV.Bridge.CVC4",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "partial": "Current Solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-CVC4.html#v:sbvCurrentSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the MathSAT SMT solver. Import this module if you want to use the\n MathSAT SMT prover as your backend solver. Also see:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Yices\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Z3\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.CVC4\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Boolector\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.SBV.Bridge.MathSAT",
          "name": "MathSAT",
          "package": "sbv",
          "source": "src/Data-SBV-Bridge-MathSAT.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the MathSAT SMT solver Import this module if you want to use the MathSAT SMT prover as your backend solver Also see Data.SBV.Bridge.Yices Data.SBV.Bridge.Z3 Data.SBV.Bridge.CVC4 Data.SBV.Bridge.Boolector",
          "hierarchy": "Data SBV Bridge MathSAT",
          "module": "Data.SBV.Bridge.MathSAT",
          "name": "MathSAT",
          "package": "sbv",
          "partial": "Math SAT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent solver instance, pointing to cvc4.\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.MathSAT",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Bridge-MathSAT.html#sbvCurrentSolver",
          "type": "function"
        },
        "index": {
          "description": "Current solver instance pointing to cvc4",
          "hierarchy": "Data SBV Bridge MathSAT",
          "module": "Data.SBV.Bridge.MathSAT",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "partial": "Current Solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-MathSAT.html#v:sbvCurrentSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the Yices SMT solver. Import this module if you want to use the\n Yices SMT prover as your backend solver. Also see:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Boolector\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.CVC4\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Z3\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.MathSAT\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "Yices",
          "package": "sbv",
          "source": "src/Data-SBV-Bridge-Yices.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the Yices SMT solver Import this module if you want to use the Yices SMT prover as your backend solver Also see Data.SBV.Bridge.Boolector Data.SBV.Bridge.CVC4 Data.SBV.Bridge.Z3 Data.SBV.Bridge.MathSAT",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "Yices",
          "package": "sbv",
          "partial": "Yices",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all satisfying solutions, using the Yices SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "allSat",
          "package": "sbv",
          "signature": "a-\u003e IO AllSatResult",
          "type": "function"
        },
        "index": {
          "description": "Find all satisfying solutions using the Yices SMT solver",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "allSat",
          "normalized": "a-\u003eIO AllSatResult",
          "package": "sbv",
          "partial": "Sat",
          "signature": "a-\u003eIO AllSatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:allSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the statement is satisfiable, with an optional time-out in seconds, using the Yices SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "isSatisfiable",
          "package": "sbv",
          "signature": "Maybe Int-\u003e a-\u003e IO (Maybe Bool)",
          "type": "function"
        },
        "index": {
          "description": "Check if the statement is satisfiable with an optional time-out in seconds using the Yices SMT solver",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "isSatisfiable",
          "normalized": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Satisfiable",
          "signature": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:isSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the statement is a theorem, with an optional time-out in seconds, using the Yices SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "isTheorem",
          "package": "sbv",
          "signature": "Maybe Int-\u003e a-\u003e IO (Maybe Bool)",
          "type": "function"
        },
        "index": {
          "description": "Check if the statement is theorem with an optional time-out in seconds using the Yices SMT solver",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "isTheorem",
          "normalized": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Theorem",
          "signature": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:isTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck vacuity of the explicit constraints introduced by calls to the \u003ccode\u003e\u003ca\u003econstrain\u003c/a\u003e\u003c/code\u003e function, using the Yices SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "isVacuous",
          "package": "sbv",
          "signature": "a-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Check vacuity of the explicit constraints introduced by calls to the constrain function using the Yices SMT solver",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "isVacuous",
          "normalized": "a-\u003eIO Bool",
          "package": "sbv",
          "partial": "Vacuous",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:isVacuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximize cost functions, using the Yices SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "maximize",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function"
        },
        "index": {
          "description": "Maximize cost functions using the Yices SMT solver",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "maximize",
          "normalized": "OptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimize cost functions, using the Yices SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "minimize",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function"
        },
        "index": {
          "description": "Minimize cost functions using the Yices SMT solver",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "minimize",
          "normalized": "OptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimize cost functions, using the Yices SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "optimize",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e (SBV c -\u003e SBV c -\u003e SBool)-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function"
        },
        "index": {
          "description": "Optimize cost functions using the Yices SMT solver",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "optimize",
          "normalized": "OptimizeOpts-\u003e(SBV a-\u003eSBV a-\u003eSBool)-\u003e([SBV b]-\u003eSBV a)-\u003eInt-\u003e([SBV b]-\u003eSBool)-\u003eIO(Maybe[b])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e(SBV c-\u003eSBV c-\u003eSBool)-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve theorems, using the Yices SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "prove",
          "package": "sbv",
          "signature": "a-\u003e IO ThmResult",
          "type": "function"
        },
        "index": {
          "description": "Prove theorems using the Yices SMT solver",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "prove",
          "normalized": "a-\u003eIO ThmResult",
          "package": "sbv",
          "signature": "a-\u003eIO ThmResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:prove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind satisfying solutions, using the Yices SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "sat",
          "package": "sbv",
          "signature": "a-\u003e IO SatResult",
          "type": "function"
        },
        "index": {
          "description": "Find satisfying solutions using the Yices SMT solver",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "sat",
          "normalized": "a-\u003eIO SatResult",
          "package": "sbv",
          "signature": "a-\u003eIO SatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent solver instance, pointing to yices.\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Yices",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Bridge-Yices.html#sbvCurrentSolver",
          "type": "function"
        },
        "index": {
          "description": "Current solver instance pointing to yices",
          "hierarchy": "Data SBV Bridge Yices",
          "module": "Data.SBV.Bridge.Yices",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "partial": "Current Solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Yices.html#v:sbvCurrentSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the Z3 SMT solver. Import this module if you want to use the\n Z3 SMT prover as your backend solver. Also see:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Boolector\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.CVC4\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.Yices\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.SBV.Bridge.MathSAT\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "Z3",
          "package": "sbv",
          "source": "src/Data-SBV-Bridge-Z3.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the Z3 SMT solver Import this module if you want to use the Z3 SMT prover as your backend solver Also see Data.SBV.Bridge.Boolector Data.SBV.Bridge.CVC4 Data.SBV.Bridge.Yices Data.SBV.Bridge.MathSAT",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "Z3",
          "package": "sbv",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all satisfying solutions, using the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "allSat",
          "package": "sbv",
          "signature": "a-\u003e IO AllSatResult",
          "type": "function"
        },
        "index": {
          "description": "Find all satisfying solutions using the Z3 SMT solver",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "allSat",
          "normalized": "a-\u003eIO AllSatResult",
          "package": "sbv",
          "partial": "Sat",
          "signature": "a-\u003eIO AllSatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:allSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the statement is satisfiable, with an optional time-out in seconds, using the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "isSatisfiable",
          "package": "sbv",
          "signature": "Maybe Int-\u003e a-\u003e IO (Maybe Bool)",
          "type": "function"
        },
        "index": {
          "description": "Check if the statement is satisfiable with an optional time-out in seconds using the Z3 SMT solver",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "isSatisfiable",
          "normalized": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Satisfiable",
          "signature": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:isSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the statement is a theorem, with an optional time-out in seconds, using the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "isTheorem",
          "package": "sbv",
          "signature": "Maybe Int-\u003e a-\u003e IO (Maybe Bool)",
          "type": "function"
        },
        "index": {
          "description": "Check if the statement is theorem with an optional time-out in seconds using the Z3 SMT solver",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "isTheorem",
          "normalized": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Theorem",
          "signature": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:isTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck vacuity of the explicit constraints introduced by calls to the \u003ccode\u003e\u003ca\u003econstrain\u003c/a\u003e\u003c/code\u003e function, using the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "isVacuous",
          "package": "sbv",
          "signature": "a-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Check vacuity of the explicit constraints introduced by calls to the constrain function using the Z3 SMT solver",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "isVacuous",
          "normalized": "a-\u003eIO Bool",
          "package": "sbv",
          "partial": "Vacuous",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:isVacuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximize cost functions, using the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "maximize",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function"
        },
        "index": {
          "description": "Maximize cost functions using the Z3 SMT solver",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "maximize",
          "normalized": "OptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimize cost functions, using the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "minimize",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function"
        },
        "index": {
          "description": "Minimize cost functions using the Z3 SMT solver",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "minimize",
          "normalized": "OptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimize cost functions, using the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "optimize",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e (SBV c -\u003e SBV c -\u003e SBool)-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function"
        },
        "index": {
          "description": "Optimize cost functions using the Z3 SMT solver",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "optimize",
          "normalized": "OptimizeOpts-\u003e(SBV a-\u003eSBV a-\u003eSBool)-\u003e([SBV b]-\u003eSBV a)-\u003eInt-\u003e([SBV b]-\u003eSBool)-\u003eIO(Maybe[b])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e(SBV c-\u003eSBV c-\u003eSBool)-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve theorems, using the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "prove",
          "package": "sbv",
          "signature": "a-\u003e IO ThmResult",
          "type": "function"
        },
        "index": {
          "description": "Prove theorems using the Z3 SMT solver",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "prove",
          "normalized": "a-\u003eIO ThmResult",
          "package": "sbv",
          "signature": "a-\u003eIO ThmResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:prove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind satisfying solutions, using the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "sat",
          "package": "sbv",
          "signature": "a-\u003e IO SatResult",
          "type": "function"
        },
        "index": {
          "description": "Find satisfying solutions using the Z3 SMT solver",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "sat",
          "normalized": "a-\u003eIO SatResult",
          "package": "sbv",
          "signature": "a-\u003eIO SatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent solver instance, pointing to z3.\n\u003c/p\u003e",
          "module": "Data.SBV.Bridge.Z3",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Bridge-Z3.html#sbvCurrentSolver",
          "type": "function"
        },
        "index": {
          "description": "Current solver instance pointing to z3",
          "hierarchy": "Data SBV Bridge Z3",
          "module": "Data.SBV.Bridge.Z3",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "partial": "Current Solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Bridge-Z3.html#v:sbvCurrentSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eChecks the correctness of a few tricks from the large collection found in:\n      \u003ca\u003ehttp://graphics.stanford.edu/~seander/bithacks.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "BitTricks",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-BitTricks.html",
          "type": "module"
        },
        "index": {
          "description": "Checks the correctness of few tricks from the large collection found in http graphics.stanford.edu seander bithacks.html",
          "hierarchy": "Data SBV Examples BitPrecise BitTricks",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "BitTricks",
          "package": "sbv",
          "partial": "Bit Tricks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-BitTricks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormalizes \u003ca\u003ehttp://graphics.stanford.edu/~seander/bithacks.html#ConditionalSetOrClearBitsWithoutBranching\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "conditionalSetClearCorrect",
          "package": "sbv",
          "signature": "SBool -\u003e SWord32 -\u003e SWord32 -\u003e SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-BitTricks.html#conditionalSetClearCorrect",
          "type": "function"
        },
        "index": {
          "description": "Formalizes http graphics.stanford.edu seander bithacks.html ConditionalSetOrClearBitsWithoutBranching",
          "hierarchy": "Data SBV Examples BitPrecise BitTricks",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "conditionalSetClearCorrect",
          "normalized": "SBool-\u003eSWord-\u003eSWord-\u003eSBool",
          "package": "sbv",
          "partial": "Set Clear Correct",
          "signature": "SBool-\u003eSWord-\u003eSWord-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-BitTricks.html#v:conditionalSetClearCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormalizes \u003ca\u003ehttp://graphics.stanford.edu/~seander/bithacks.html#IntegerMinOrMax\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "fastMaxCorrect",
          "package": "sbv",
          "signature": "SInt32 -\u003e SInt32 -\u003e SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-BitTricks.html#fastMaxCorrect",
          "type": "function"
        },
        "index": {
          "description": "Formalizes http graphics.stanford.edu seander bithacks.html IntegerMinOrMax",
          "hierarchy": "Data SBV Examples BitPrecise BitTricks",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "fastMaxCorrect",
          "normalized": "SInt-\u003eSInt-\u003eSBool",
          "package": "sbv",
          "partial": "Max Correct",
          "signature": "SInt-\u003eSInt-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-BitTricks.html#v:fastMaxCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormalizes \u003ca\u003ehttp://graphics.stanford.edu/~seander/bithacks.html#IntegerMinOrMax\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "fastMinCorrect",
          "package": "sbv",
          "signature": "SInt32 -\u003e SInt32 -\u003e SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-BitTricks.html#fastMinCorrect",
          "type": "function"
        },
        "index": {
          "description": "Formalizes http graphics.stanford.edu seander bithacks.html IntegerMinOrMax",
          "hierarchy": "Data SBV Examples BitPrecise BitTricks",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "fastMinCorrect",
          "normalized": "SInt-\u003eSInt-\u003eSBool",
          "package": "sbv",
          "partial": "Min Correct",
          "signature": "SInt-\u003eSInt-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-BitTricks.html#v:fastMinCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormalizes \u003ca\u003ehttp://graphics.stanford.edu/~seander/bithacks.html#DetectOppositeSigns\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "oppositeSignsCorrect",
          "package": "sbv",
          "signature": "SInt32 -\u003e SInt32 -\u003e SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-BitTricks.html#oppositeSignsCorrect",
          "type": "function"
        },
        "index": {
          "description": "Formalizes http graphics.stanford.edu seander bithacks.html DetectOppositeSigns",
          "hierarchy": "Data SBV Examples BitPrecise BitTricks",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "oppositeSignsCorrect",
          "normalized": "SInt-\u003eSInt-\u003eSBool",
          "package": "sbv",
          "partial": "Signs Correct",
          "signature": "SInt-\u003eSInt-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-BitTricks.html#v:oppositeSignsCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormalizes \u003ca\u003ehttp://graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "powerOfTwoCorrect",
          "package": "sbv",
          "signature": "SWord32 -\u003e SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-BitTricks.html#powerOfTwoCorrect",
          "type": "function"
        },
        "index": {
          "description": "Formalizes http graphics.stanford.edu seander bithacks.html DetermineIfPowerOf2",
          "hierarchy": "Data SBV Examples BitPrecise BitTricks",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "powerOfTwoCorrect",
          "normalized": "SWord-\u003eSBool",
          "package": "sbv",
          "partial": "Of Two Correct",
          "signature": "SWord-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-BitTricks.html#v:powerOfTwoCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollection of queries\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "queries",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-BitPrecise-BitTricks.html#queries",
          "type": "function"
        },
        "index": {
          "description": "Collection of queries",
          "hierarchy": "Data SBV Examples BitPrecise BitTricks",
          "module": "Data.SBV.Examples.BitPrecise.BitTricks",
          "name": "queries",
          "normalized": "IO()",
          "package": "sbv",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-BitTricks.html#v:queries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn encoding and correctness proof of Legato's multiplier in Haskell. Bill Legato came\n up with an interesting way to multiply two 8-bit numbers on Mostek, as described here:\n   \u003ca\u003ehttp://www.cs.utexas.edu/~moore/acl2/workshop-2004/contrib/legato/Weakest-Preconditions-Report.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eHere's Legato's algorithm, as coded in Mostek assembly:\n\u003c/p\u003e\u003cpre\u003e\n    step1 :       LDX #8         ; load X immediate with the integer 8 \n    step2 :       LDA #0         ; load A immediate with the integer 0 \n    step3 : LOOP  ROR F1         ; rotate F1 right circular through C \n    step4 :       BCC ZCOEF      ; branch to ZCOEF if C = 0 \n    step5 :       CLC            ; set C to 0 \n    step6 :       ADC F2         ; set A to A+F2+C and C to the carry \n    step7 : ZCOEF ROR A          ; rotate A right circular through C \n    step8 :       ROR LOW        ; rotate LOW right circular through C \n    step9 :       DEX            ; set X to X-1 \n    step10:       BNE LOOP       ; branch to LOOP if Z = 0 \n\u003c/pre\u003e\u003cp\u003eThis program came to be known as the Legato's challenge in the community, where\n the challenge was to prove that it indeed does perform multiplication. This file\n formalizes the Mostek architecture in Haskell and proves that Legato's algorithm\n is indeed correct.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Legato",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html",
          "type": "module"
        },
        "index": {
          "description": "An encoding and correctness proof of Legato multiplier in Haskell Bill Legato came up with an interesting way to multiply two bit numbers on Mostek as described here http www.cs.utexas.edu moore acl2 workshop-2004 contrib legato Weakest-Preconditions-Report.pdf Here Legato algorithm as coded in Mostek assembly step1 LDX load immediate with the integer step2 LDA load immediate with the integer step3 LOOP ROR F1 rotate F1 right circular through step4 BCC ZCOEF branch to ZCOEF if step5 CLC set to step6 ADC F2 set to F2 and to the carry step7 ZCOEF ROR rotate right circular through step8 ROR LOW rotate LOW right circular through step9 DEX set to X-1 step10 BNE LOOP branch to LOOP if This program came to be known as the Legato challenge in the community where the challenge was to prove that it indeed does perform multiplication This file formalizes the Mostek architecture in Haskell and proves that Legato algorithm is indeed correct",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Legato",
          "package": "sbv",
          "partial": "Legato",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe memory is addressed by 32-bit words.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Address",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Address",
          "type": "type"
        },
        "index": {
          "description": "The memory is addressed by bit words",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Address",
          "package": "sbv",
          "partial": "Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient synonym for symbolic machine bits.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Bit",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Bit",
          "type": "type"
        },
        "index": {
          "description": "Convenient synonym for symbolic machine bits",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Bit",
          "package": "sbv",
          "partial": "Bit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a machine state, compute a value out of it\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Extract",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Extract",
          "type": "type"
        },
        "index": {
          "description": "Given machine state compute value out of it",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Extract",
          "package": "sbv",
          "partial": "Extract",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe carry flag (\u003ccode\u003e\u003ca\u003eFlagC\u003c/a\u003e\u003c/code\u003e) and the zero flag (\u003ccode\u003e\u003ca\u003eFlagZ\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Flag",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Flag",
          "type": "data"
        },
        "index": {
          "description": "The carry flag FlagC and the zero flag FlagZ",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Flag",
          "package": "sbv",
          "partial": "Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag bank\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Flags",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Flags",
          "type": "type"
        },
        "index": {
          "description": "Flag bank",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Flags",
          "package": "sbv",
          "partial": "Flags",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper synonym for capturing relevant bits of Mostek\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "InitVals",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#InitVals",
          "type": "type"
        },
        "index": {
          "description": "Helper synonym for capturing relevant bits of Mostek",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "InitVals",
          "package": "sbv",
          "partial": "Init Vals",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:InitVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instruction is modeled as a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e transformer. We model\n mostek programs in direct continuation passing style.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Instruction",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Instruction",
          "type": "type"
        },
        "index": {
          "description": "An instruction is modeled as Program transformer We model mostek programs in direct continuation passing style",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Instruction",
          "package": "sbv",
          "partial": "Instruction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe memory maps 32-bit words to 8-bit words. (The \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e data-type is\n defined later, depending on the verification model used.)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Memory",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Memory",
          "type": "type"
        },
        "index": {
          "description": "The memory maps bit words to bit words The Model data-type is defined later depending on the verification model used",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Memory",
          "package": "sbv",
          "partial": "Memory",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose the appropriate array model to be used for modeling the memory. (See \u003ccode\u003e\u003ca\u003eMemory\u003c/a\u003e\u003c/code\u003e.)\n The \u003ccode\u003e\u003ca\u003eSFunArray\u003c/a\u003e\u003c/code\u003e is the function based model. \u003ccode\u003e\u003ca\u003eSArray\u003c/a\u003e\u003c/code\u003e is the SMT-Lib array's based model.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Model",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Model",
          "type": "type"
        },
        "index": {
          "description": "Choose the appropriate array model to be used for modeling the memory See Memory The SFunArray is the function based model SArray is the SMT-Lib array based model",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Model",
          "package": "sbv",
          "partial": "Model",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstraction of the machine: The CPU consists of memory, registers, and flags.\n Unlike traditional hardware, we assume the program is stored in some other memory area that\n we need not model. (No self modifying programs!)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Mostek",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Mostek",
          "type": "data"
        },
        "index": {
          "description": "Abstraction of the machine The CPU consists of memory registers and flags Unlike traditional hardware we assume the program is stored in some other memory area that we need not model No self modifying programs",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Mostek",
          "package": "sbv",
          "partial": "Mostek",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Mostek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrograms are essentially state transformers (on the machine state)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Program",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Program",
          "type": "type"
        },
        "index": {
          "description": "Programs are essentially state transformers on the machine state",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Program",
          "package": "sbv",
          "partial": "Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe model only two registers of Mostek that is used in the above algorithm, can add more.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Register",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Register",
          "type": "data"
        },
        "index": {
          "description": "We model only two registers of Mostek that is used in the above algorithm can add more",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Register",
          "package": "sbv",
          "partial": "Register",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister bank\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Registers",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Registers",
          "type": "type"
        },
        "index": {
          "description": "Register bank",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Registers",
          "package": "sbv",
          "partial": "Registers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Registers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMostek was an 8-bit machine.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Value",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Value",
          "type": "type"
        },
        "index": {
          "description": "Mostek was an bit machine",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Value",
          "package": "sbv",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "FlagC",
          "package": "sbv",
          "signature": "FlagC",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "FlagC",
          "package": "sbv",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:FlagC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "FlagZ",
          "package": "sbv",
          "signature": "FlagZ",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "FlagZ",
          "package": "sbv",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:FlagZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Mostek",
          "package": "sbv",
          "signature": "Mostek",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Mostek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "Mostek",
          "package": "sbv",
          "partial": "Mostek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:Mostek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "RegA",
          "package": "sbv",
          "signature": "RegA",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Register",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "RegA",
          "package": "sbv",
          "partial": "Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:RegA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "RegX",
          "package": "sbv",
          "signature": "RegX",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Register",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "RegX",
          "package": "sbv",
          "partial": "Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:RegX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eADC: Increment the value of register \u003ccode\u003eA\u003c/code\u003e by the value of memory contents\n at address \u003ccode\u003ea\u003c/code\u003e, using the carry-bit as the carry-in for the addition.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "adc",
          "package": "sbv",
          "signature": "Address -\u003e Instruction",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#adc",
          "type": "function"
        },
        "index": {
          "description": "ADC Increment the value of register by the value of memory contents at address using the carry-bit as the carry-in for the addition",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "adc",
          "normalized": "Address-\u003eInstruction",
          "package": "sbv",
          "signature": "Address-\u003eInstruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:adc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBCC: branch to label \u003ccode\u003el\u003c/code\u003e if the carry flag is false\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "bcc",
          "package": "sbv",
          "signature": "Program -\u003e Instruction",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#bcc",
          "type": "function"
        },
        "index": {
          "description": "BCC branch to label if the carry flag is false",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "bcc",
          "normalized": "Program-\u003eInstruction",
          "package": "sbv",
          "signature": "Program-\u003eInstruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBNE: Branch if the zero-flag is false\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "bne",
          "package": "sbv",
          "signature": "Program -\u003e Instruction",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#bne",
          "type": "function"
        },
        "index": {
          "description": "BNE Branch if the zero-flag is false",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "bne",
          "normalized": "Program-\u003eInstruction",
          "package": "sbv",
          "signature": "Program-\u003eInstruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:bne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking overflow. In Legato's multipler the \u003ccode\u003eADC\u003c/code\u003e instruction\n needs to see if the expression x + y + c overflowed, as checked\n by this function. Note that we verify the correctness of this check\n separately below in \u003ccode\u003e\u003ca\u003echeckOverflowCorrect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "checkOverflow",
          "package": "sbv",
          "signature": "SWord8 -\u003e SWord8 -\u003e SBool -\u003e SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#checkOverflow",
          "type": "function"
        },
        "index": {
          "description": "Checking overflow In Legato multipler the ADC instruction needs to see if the expression overflowed as checked by this function Note that we verify the correctness of this check separately below in checkOverflowCorrect",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "checkOverflow",
          "normalized": "SWord-\u003eSWord-\u003eSBool-\u003eSBool",
          "package": "sbv",
          "partial": "Overflow",
          "signature": "SWord-\u003eSWord-\u003eSBool-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:checkOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrectness theorem for our \u003ccode\u003e\u003ca\u003echeckOverflow\u003c/a\u003e\u003c/code\u003e implementation.\n\u003c/p\u003e\u003cp\u003eWe have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003echeckOverflowCorrect\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "checkOverflowCorrect",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#checkOverflowCorrect",
          "type": "function"
        },
        "index": {
          "description": "Correctness theorem for our checkOverflow implementation We have checkOverflowCorrect Q.E.D",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "checkOverflowCorrect",
          "package": "sbv",
          "partial": "Overflow Correct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:checkOverflowCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCLC: Clear the carry flag\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "clc",
          "package": "sbv",
          "signature": "Instruction",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#clc",
          "type": "function"
        },
        "index": {
          "description": "CLC Clear the carry flag",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "clc",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:clc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe correctness theorem.\n   On a decent MacBook Pro, this proof takes about 3 minutes with the \u003ccode\u003e\u003ca\u003eSFunArray\u003c/a\u003e\u003c/code\u003e memory model\n   and about 30 minutes with the \u003ccode\u003e\u003ca\u003eSArray\u003c/a\u003e\u003c/code\u003e model, using yices as the SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "correctnessTheorem",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#correctnessTheorem",
          "type": "function"
        },
        "index": {
          "description": "The correctness theorem On decent MacBook Pro this proof takes about minutes with the SFunArray memory model and about minutes with the SArray model using yices as the SMT solver",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "correctnessTheorem",
          "package": "sbv",
          "partial": "Theorem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:correctnessTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDEX: Decrement the value of register \u003ccode\u003eX\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "dex",
          "package": "sbv",
          "signature": "Instruction",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#dex",
          "type": "function"
        },
        "index": {
          "description": "DEX Decrement the value of register",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "dex",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:dex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e combinator \u003ca\u003estops\u003c/a\u003e our program, providing the final continuation\n that does nothing.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "end",
          "package": "sbv",
          "signature": "Program",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#end",
          "type": "function"
        },
        "index": {
          "description": "The end combinator stops our program providing the final continuation that does nothing",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "end",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "flags",
          "package": "sbv",
          "signature": "Flags",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Mostek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "flags",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of a flag\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "getFlag",
          "package": "sbv",
          "signature": "Flag -\u003e Extract Bit",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#getFlag",
          "type": "function"
        },
        "index": {
          "description": "Get the value of flag",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "getFlag",
          "normalized": "Flag-\u003eExtract Bit",
          "package": "sbv",
          "partial": "Flag",
          "signature": "Flag-\u003eExtract Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:getFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of a given register\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "getReg",
          "package": "sbv",
          "signature": "Register -\u003e Extract Value",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#getReg",
          "type": "function"
        },
        "index": {
          "description": "Get the value of given register",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "getReg",
          "normalized": "Register-\u003eExtract Value",
          "package": "sbv",
          "partial": "Reg",
          "signature": "Register-\u003eExtract Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:getReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an instance of the Mostek machine, initialized by the memory and the relevant\n values of the registers and the flags\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "initMachine",
          "package": "sbv",
          "signature": "Memory -\u003e InitVals -\u003e Mostek",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#initMachine",
          "type": "function"
        },
        "index": {
          "description": "Create an instance of the Mostek machine initialized by the memory and the relevant values of the registers and the flags",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "initMachine",
          "normalized": "Memory-\u003eInitVals-\u003eMostek",
          "package": "sbv",
          "partial": "Machine",
          "signature": "Memory-\u003eInitVals-\u003eMostek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:initMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLDA: Set register \u003ccode\u003eA\u003c/code\u003e to value \u003ccode\u003ev\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "lda",
          "package": "sbv",
          "signature": "Value -\u003e Instruction",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#lda",
          "type": "function"
        },
        "index": {
          "description": "LDA Set register to value",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "lda",
          "normalized": "Value-\u003eInstruction",
          "package": "sbv",
          "signature": "Value-\u003eInstruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:lda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLDX: Set register \u003ccode\u003eX\u003c/code\u003e to value \u003ccode\u003ev\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "ldx",
          "package": "sbv",
          "signature": "Value -\u003e Instruction",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#ldx",
          "type": "function"
        },
        "index": {
          "description": "LDX Set register to value",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "ldx",
          "normalized": "Value-\u003eInstruction",
          "package": "sbv",
          "signature": "Value-\u003eInstruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:ldx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameterized by the addresses of locations of the factors (\u003ccode\u003eF1\u003c/code\u003e and \u003ccode\u003eF2\u003c/code\u003e),\n the following program multiplies them, storing the low-byte of the result\n in the memory location \u003ccode\u003elowAddr\u003c/code\u003e, and the high-byte in register \u003ccode\u003eA\u003c/code\u003e. The\n implementation is a direct transliteration of Legato's algorithm given\n at the top, using our notation.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "legato",
          "package": "sbv",
          "signature": "Address -\u003e Address -\u003e Address -\u003e Program",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#legato",
          "type": "function"
        },
        "index": {
          "description": "Parameterized by the addresses of locations of the factors F1 and F2 the following program multiplies them storing the low-byte of the result in the memory location lowAddr and the high-byte in register The implementation is direct transliteration of Legato algorithm given at the top using our notation",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "legato",
          "normalized": "Address-\u003eAddress-\u003eAddress-\u003eProgram",
          "package": "sbv",
          "signature": "Address-\u003eAddress-\u003eAddress-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:legato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a C program that implements Legato's algorithm automatically.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "legatoInC",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#legatoInC",
          "type": "function"
        },
        "index": {
          "description": "Generate program that implements Legato algorithm automatically",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "legatoInC",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "In",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:legatoInC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe correctness theorem. For all possible memory configurations, the factors (\u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e below), the location\n of the low-byte result and the initial-values of registers and the flags, this function will return True only if\n running Legato's algorithm does indeed compute the product of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e correctly.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "legatoIsCorrect",
          "package": "sbv",
          "signature": "Memory -\u003e (Address, Value) -\u003e (Address, Value) -\u003e Address -\u003e InitVals -\u003e SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#legatoIsCorrect",
          "type": "function"
        },
        "index": {
          "description": "The correctness theorem For all possible memory configurations the factors and below the location of the low-byte result and the initial-values of registers and the flags this function will return True only if running Legato algorithm does indeed compute the product of and correctly",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "legatoIsCorrect",
          "normalized": "Memory-\u003e(Address,Value)-\u003e(Address,Value)-\u003eAddress-\u003eInitVals-\u003eSBool",
          "package": "sbv",
          "partial": "Is Correct",
          "signature": "Memory-\u003e(Address,Value)-\u003e(Address,Value)-\u003eAddress-\u003eInitVals-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:legatoIsCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "memory",
          "package": "sbv",
          "signature": "Memory",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Mostek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "memory",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead memory\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "peek",
          "package": "sbv",
          "signature": "Address -\u003e Extract Value",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Read memory",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "peek",
          "normalized": "Address-\u003eExtract Value",
          "package": "sbv",
          "signature": "Address-\u003eExtract Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to memory\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "poke",
          "package": "sbv",
          "signature": "Address -\u003e Value -\u003e Program",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#poke",
          "type": "function"
        },
        "index": {
          "description": "Write to memory",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "poke",
          "normalized": "Address-\u003eValue-\u003eProgram",
          "package": "sbv",
          "signature": "Address-\u003eValue-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:poke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "registers",
          "package": "sbv",
          "signature": "Registers",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#Mostek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "registers",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:registers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eROR, memory version: Rotate the value at memory location \u003ccode\u003ea\u003c/code\u003e\n to the right by 1 bit, using the carry flag as a transfer position.\n That is, the final bit of the memory location becomes the new carry\n and the carry moves over to the first bit. This very instruction\n is one of the reasons why Legato's multiplier is quite hard to understand\n and is typically presented as a verification challenge.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "rorM",
          "package": "sbv",
          "signature": "Address -\u003e Instruction",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#rorM",
          "type": "function"
        },
        "index": {
          "description": "ROR memory version Rotate the value at memory location to the right by bit using the carry flag as transfer position That is the final bit of the memory location becomes the new carry and the carry moves over to the first bit This very instruction is one of the reasons why Legato multiplier is quite hard to understand and is typically presented as verification challenge",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "rorM",
          "normalized": "Address-\u003eInstruction",
          "package": "sbv",
          "signature": "Address-\u003eInstruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:rorM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eROR, register version: Same as \u003ccode\u003e\u003ca\u003erorM\u003c/a\u003e\u003c/code\u003e, except through register \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "rorR",
          "package": "sbv",
          "signature": "Register -\u003e Instruction",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#rorR",
          "type": "function"
        },
        "index": {
          "description": "ROR register version Same as rorM except through register",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "rorR",
          "normalized": "Register-\u003eInstruction",
          "package": "sbv",
          "signature": "Register-\u003eInstruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:rorR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven address/value pairs for F1 and F2, and the location of where the low-byte\n of the result should go, \u003ccode\u003erunLegato\u003c/code\u003e takes an arbitrary machine state \u003ccode\u003em\u003c/code\u003e and\n returns the high and low bytes of the multiplication.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "runLegato",
          "package": "sbv",
          "signature": "(Address, Value) -\u003e (Address, Value) -\u003e Address -\u003e Mostek -\u003e (Value, Value)",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#runLegato",
          "type": "function"
        },
        "index": {
          "description": "Given address value pairs for F1 and F2 and the location of where the low-byte of the result should go runLegato takes an arbitrary machine state and returns the high and low bytes of the multiplication",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "runLegato",
          "normalized": "(Address,Value)-\u003e(Address,Value)-\u003eAddress-\u003eMostek-\u003e(Value,Value)",
          "package": "sbv",
          "partial": "Legato",
          "signature": "(Address,Value)-\u003e(Address,Value)-\u003eAddress-\u003eMostek-\u003e(Value,Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:runLegato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of a flag\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "setFlag",
          "package": "sbv",
          "signature": "Flag -\u003e Bit -\u003e Program",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#setFlag",
          "type": "function"
        },
        "index": {
          "description": "Set the value of flag",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "setFlag",
          "normalized": "Flag-\u003eBit-\u003eProgram",
          "package": "sbv",
          "partial": "Flag",
          "signature": "Flag-\u003eBit-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:setFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of a given register\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "setReg",
          "package": "sbv",
          "signature": "Register -\u003e Value -\u003e Program",
          "source": "src/Data-SBV-Examples-BitPrecise-Legato.html#setReg",
          "type": "function"
        },
        "index": {
          "description": "Set the value of given register",
          "hierarchy": "Data SBV Examples BitPrecise Legato",
          "module": "Data.SBV.Examples.BitPrecise.Legato",
          "name": "setReg",
          "normalized": "Register-\u003eValue-\u003eProgram",
          "package": "sbv",
          "partial": "Reg",
          "signature": "Register-\u003eValue-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-Legato.html#v:setReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSymbolic implementation of merge-sort and its correctness.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "MergeSort",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-MergeSort.html",
          "type": "module"
        },
        "index": {
          "description": "Symbolic implementation of merge-sort and its correctness",
          "hierarchy": "Data SBV Examples BitPrecise MergeSort",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "MergeSort",
          "package": "sbv",
          "partial": "Merge Sort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-MergeSort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement type of lists we'd like to sort. For simplicity, we'll just\n use \u003ccode\u003e\u003ca\u003eSWord8\u003c/a\u003e\u003c/code\u003e here, but we can pick any symbolic type.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "E",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-MergeSort.html#E",
          "type": "type"
        },
        "index": {
          "description": "Element type of lists we like to sort For simplicity we ll just use SWord8 here but we can pick any symbolic type",
          "hierarchy": "Data SBV Examples BitPrecise MergeSort",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "E",
          "package": "sbv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-MergeSort.html#t:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate C code for merge-sorting an array of size \u003ccode\u003en\u003c/code\u003e. Again, we're restricted\n to fixed size inputs. While the output is not how one would code merge sort in C\n by hand, it's a faithful rendering of all the operations merge-sort would do as\n described by it's Haskell counterpart.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "codeGen",
          "package": "sbv",
          "signature": "Int -\u003e IO ()",
          "source": "src/Data-SBV-Examples-BitPrecise-MergeSort.html#codeGen",
          "type": "function"
        },
        "index": {
          "description": "Generate code for merge-sorting an array of size Again we re restricted to fixed size inputs While the output is not how one would code merge sort in by hand it faithful rendering of all the operations merge-sort would do as described by it Haskell counterpart",
          "hierarchy": "Data SBV Examples BitPrecise MergeSort",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "codeGen",
          "normalized": "Int-\u003eIO()",
          "package": "sbv",
          "partial": "Gen",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-MergeSort.html#v:codeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserting correctness of merge-sort for a list of the given size. Note that we can\n only check correctness for fixed-size lists. Also, the proof will get more and more\n complicated for the backend SMT solver as \u003ccode\u003en\u003c/code\u003e increases. A value around 5 or 6 should\n be fairly easy to prove. For instance, we have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecorrectness 5\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "correctness",
          "package": "sbv",
          "signature": "Int -\u003e IO ThmResult",
          "source": "src/Data-SBV-Examples-BitPrecise-MergeSort.html#correctness",
          "type": "function"
        },
        "index": {
          "description": "Asserting correctness of merge-sort for list of the given size Note that we can only check correctness for fixed-size lists Also the proof will get more and more complicated for the backend SMT solver as increases value around or should be fairly easy to prove For instance we have correctness Q.E.D",
          "hierarchy": "Data SBV Examples BitPrecise MergeSort",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "correctness",
          "normalized": "Int-\u003eIO ThmResult",
          "package": "sbv",
          "signature": "Int-\u003eIO ThmResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-MergeSort.html#v:correctness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether two given sequences are permutations. We simply check that each sequence\n is a subset of the other, when considered as a set. The check is slightly complicated\n for the need to account for possibly duplicated elements.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "isPermutationOf",
          "package": "sbv",
          "signature": "[E] -\u003e [E] -\u003e SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-MergeSort.html#isPermutationOf",
          "type": "function"
        },
        "index": {
          "description": "Check whether two given sequences are permutations We simply check that each sequence is subset of the other when considered as set The check is slightly complicated for the need to account for possibly duplicated elements",
          "hierarchy": "Data SBV Examples BitPrecise MergeSort",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "isPermutationOf",
          "normalized": "[E]-\u003e[E]-\u003eSBool",
          "package": "sbv",
          "partial": "Permutation Of",
          "signature": "[E]-\u003e[E]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-MergeSort.html#v:isPermutationOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerging two given sorted lists, preserving the order.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "merge",
          "package": "sbv",
          "signature": "[E] -\u003e [E] -\u003e [E]",
          "source": "src/Data-SBV-Examples-BitPrecise-MergeSort.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merging two given sorted lists preserving the order",
          "hierarchy": "Data SBV Examples BitPrecise MergeSort",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "merge",
          "normalized": "[E]-\u003e[E]-\u003e[E]",
          "package": "sbv",
          "signature": "[E]-\u003e[E]-\u003e[E]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-MergeSort.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple merge-sort implementation. We simply divide the input list\n in two two halves so long as it has at least two elements, sort\n each half on its own, and then merge.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "mergeSort",
          "package": "sbv",
          "signature": "[E] -\u003e [E]",
          "source": "src/Data-SBV-Examples-BitPrecise-MergeSort.html#mergeSort",
          "type": "function"
        },
        "index": {
          "description": "Simple merge-sort implementation We simply divide the input list in two two halves so long as it has at least two elements sort each half on its own and then merge",
          "hierarchy": "Data SBV Examples BitPrecise MergeSort",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "mergeSort",
          "normalized": "[E]-\u003e[E]",
          "package": "sbv",
          "partial": "Sort",
          "signature": "[E]-\u003e[E]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-MergeSort.html#v:mergeSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given sequence is non-decreasing.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "nonDecreasing",
          "package": "sbv",
          "signature": "[E] -\u003e SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-MergeSort.html#nonDecreasing",
          "type": "function"
        },
        "index": {
          "description": "Check whether given sequence is non-decreasing",
          "hierarchy": "Data SBV Examples BitPrecise MergeSort",
          "module": "Data.SBV.Examples.BitPrecise.MergeSort",
          "name": "nonDecreasing",
          "normalized": "[E]-\u003eSBool",
          "package": "sbv",
          "partial": "Decreasing",
          "signature": "[E]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-MergeSort.html#v:nonDecreasing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe PrefixSum algorithm over power-lists and proof of\n the Ladner-Fischer implementation.\n See \u003ca\u003ehttp://www.cs.utexas.edu/users/psp/powerlist.pdf\u003c/a\u003e\n and \u003ca\u003ehttp://www.cs.utexas.edu/~plaxton/c/337/05f/slides/ParallelRecursion-4.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "PrefixSum",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html",
          "type": "module"
        },
        "index": {
          "description": "The PrefixSum algorithm over power-lists and proof of the Ladner-Fischer implementation See http www.cs.utexas.edu users psp powerlist.pdf and http www.cs.utexas.edu plaxton slides ParallelRecursion-4.pdf",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "PrefixSum",
          "package": "sbv",
          "partial": "Prefix Sum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA poor man's representation of powerlists and\n basic operations on them: \u003ca\u003ehttp://www.cs.utexas.edu/users/psp/powerlist.pdf\u003c/a\u003e.\n We merely represent power-lists by ordinary lists.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "PowerList",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#PowerList",
          "type": "type"
        },
        "index": {
          "description": "poor man representation of powerlists and basic operations on them http www.cs.utexas.edu users psp powerlist.pdf We merely represent power-lists by ordinary lists",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "PowerList",
          "package": "sbv",
          "partial": "Power List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#t:PowerList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrectness theorem, for a powerlist of given size, an associative operator, and its left-unit element.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "flIsCorrect",
          "package": "sbv",
          "signature": "(a, a -\u003e a -\u003e a)) -\u003e Symbolic SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#flIsCorrect",
          "type": "function"
        },
        "index": {
          "description": "Correctness theorem for powerlist of given size an associative operator and its left-unit element",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "flIsCorrect",
          "normalized": "(a,a-\u003ea-\u003ea))-\u003eSymbolic SBool",
          "package": "sbv",
          "partial": "Is Correct",
          "signature": "(a,a-\u003ea-\u003ea))-\u003eSymbolic SBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:flIsCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an instance of the prefix-sum problem for an arbitrary operator, by telling the SMT solver\n the necessary axioms for associativity and left-unit. The first argument states how wide the power list should be.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "genPrefixSumInstance",
          "package": "sbv",
          "signature": "Int -\u003e Symbolic SBool",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#genPrefixSumInstance",
          "type": "function"
        },
        "index": {
          "description": "Generate an instance of the prefix-sum problem for an arbitrary operator by telling the SMT solver the necessary axioms for associativity and left-unit The first argument states how wide the power list should be",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "genPrefixSumInstance",
          "normalized": "Int-\u003eSymbolic SBool",
          "package": "sbv",
          "partial": "Prefix Sum Instance",
          "signature": "Int-\u003eSymbolic SBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:genPrefixSumInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbolic trace can help illustrate the action of Ladner-Fischer. This\n generator produces the actions of Ladner-Fischer for addition, showing how\n the computation proceeds:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eladnerFischerTrace 8\n\u003c/code\u003e\u003c/strong\u003eINPUTS\n  s0 :: SWord8\n  s1 :: SWord8\n  s2 :: SWord8\n  s3 :: SWord8\n  s4 :: SWord8\n  s5 :: SWord8\n  s6 :: SWord8\n  s7 :: SWord8\nCONSTANTS\n  s_2 = False\n  s_1 = True\nTABLES\nARRAYS\nUNINTERPRETED CONSTANTS\nUSER GIVEN CODE SEGMENTS\nAXIOMS\nDEFINE\n  s8 :: SWord8 = s0 + s1\n  s9 :: SWord8 = s2 + s8\n  s10 :: SWord8 = s2 + s3\n  s11 :: SWord8 = s8 + s10\n  s12 :: SWord8 = s4 + s11\n  s13 :: SWord8 = s4 + s5\n  s14 :: SWord8 = s11 + s13\n  s15 :: SWord8 = s6 + s14\n  s16 :: SWord8 = s6 + s7\n  s17 :: SWord8 = s13 + s16\n  s18 :: SWord8 = s11 + s17\nCONSTRAINTS\nOUTPUTS\n  s0\n  s8\n  s9\n  s11\n  s12\n  s14\n  s15\n  s18\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "ladnerFischerTrace",
          "package": "sbv",
          "signature": "Int -\u003e IO ()",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#ladnerFischerTrace",
          "type": "function"
        },
        "index": {
          "description": "symbolic trace can help illustrate the action of Ladner-Fischer This generator produces the actions of Ladner-Fischer for addition showing how the computation proceeds ladnerFischerTrace INPUTS s0 SWord8 s1 SWord8 s2 SWord8 s3 SWord8 s4 SWord8 s5 SWord8 s6 SWord8 s7 SWord8 CONSTANTS False True TABLES ARRAYS UNINTERPRETED CONSTANTS USER GIVEN CODE SEGMENTS AXIOMS DEFINE s8 SWord8 s0 s1 s9 SWord8 s2 s8 s10 SWord8 s2 s3 s11 SWord8 s8 s10 s12 SWord8 s4 s11 s13 SWord8 s4 s5 s14 SWord8 s11 s13 s15 SWord8 s6 s14 s16 SWord8 s6 s7 s17 SWord8 s13 s16 s18 SWord8 s11 s17 CONSTRAINTS OUTPUTS s0 s8 s9 s11 s12 s14 s15 s18",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "ladnerFischerTrace",
          "normalized": "Int-\u003eIO()",
          "package": "sbv",
          "partial": "Fischer Trace",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:ladnerFischerTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Ladner-Fischer (\u003ccode\u003elf\u003c/code\u003e) implementation of prefix-sum. See \u003ca\u003ehttp://www.cs.utexas.edu/~plaxton/c/337/05f/slides/ParallelRecursion-4.pdf\u003c/a\u003e\n or pg. 16 of \u003ca\u003ehttp://www.cs.utexas.edu/users/psp/powerlist.pdf\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "lf",
          "package": "sbv",
          "signature": "(a, a -\u003e a -\u003e a) -\u003e PowerList a -\u003e PowerList a",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#lf",
          "type": "function"
        },
        "index": {
          "description": "The Ladner-Fischer lf implementation of prefix-sum See http www.cs.utexas.edu plaxton slides ParallelRecursion-4.pdf or pg of http www.cs.utexas.edu users psp powerlist.pdf",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "lf",
          "normalized": "(a,a-\u003ea-\u003ea)-\u003ePowerList a-\u003ePowerList a",
          "package": "sbv",
          "signature": "(a,a-\u003ea-\u003ea)-\u003ePowerList a-\u003ePowerList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:lf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve the generic problem for powerlists of given sizes. Note that\n this will only work for Yices-1. This is due to the fact that Yices-2\n follows the SMT-Lib standard and does not accept bit-vector problems with\n quantified axioms in them, while Yices-1 did allow for that. The crux of\n the problem is that there are no SMT-Lib logics that combine BV's and\n quantifiers, see: \u003ca\u003ehttp://goedel.cs.uiowa.edu/smtlib/logics.html\u003c/a\u003e. So we\n are stuck until new powerful logics are added to SMT-Lib.\n\u003c/p\u003e\u003cp\u003eHere, we explicitly tell SBV to use Yices-1 that did not have that limitation.\n Tweak the executable location accordingly below for your platform..\n\u003c/p\u003e\u003cp\u003eWe have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprefixSum 2\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprefixSum 4\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e\u003cp\u003eNote that these proofs tend to run long. Also, Yices ran out of memory\n and crashed on my box when I tried for size \u003ccode\u003e8\u003c/code\u003e, after running for about 2.5 minutes..\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "prefixSum",
          "package": "sbv",
          "signature": "Int -\u003e IO ThmResult",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#prefixSum",
          "type": "function"
        },
        "index": {
          "description": "Prove the generic problem for powerlists of given sizes Note that this will only work for Yices-1 This is due to the fact that Yices-2 follows the SMT-Lib standard and does not accept bit-vector problems with quantified axioms in them while Yices-1 did allow for that The crux of the problem is that there are no SMT-Lib logics that combine BV and quantifiers see http goedel.cs.uiowa.edu smtlib logics.html So we are stuck until new powerful logics are added to SMT-Lib Here we explicitly tell SBV to use Yices-1 that did not have that limitation Tweak the executable location accordingly below for your platform We have prefixSum Q.E.D prefixSum Q.E.D Note that these proofs tend to run long Also Yices ran out of memory and crashed on my box when tried for size after running for about minutes",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "prefixSum",
          "normalized": "Int-\u003eIO ThmResult",
          "package": "sbv",
          "partial": "Sum",
          "signature": "Int-\u003eIO ThmResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:prefixSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference prefix sum (\u003ccode\u003eps\u003c/code\u003e) is simply Haskell's \u003ccode\u003escanl1\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "ps",
          "package": "sbv",
          "signature": "(a, a -\u003e a -\u003e a) -\u003e PowerList a -\u003e PowerList a",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#ps",
          "type": "function"
        },
        "index": {
          "description": "Reference prefix sum ps is simply Haskell scanl1 function",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "ps",
          "normalized": "(a,a-\u003ea-\u003ea)-\u003ePowerList a-\u003ePowerList a",
          "package": "sbv",
          "signature": "(a,a-\u003ea-\u003ea)-\u003ePowerList a-\u003ePowerList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrace generator for the reference spec. It clearly demonstrates that the reference\n implementation fewer operations, but is not parallelizable at all:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003escanlTrace 8\n\u003c/code\u003e\u003c/strong\u003eINPUTS\n  s0 :: SWord8\n  s1 :: SWord8\n  s2 :: SWord8\n  s3 :: SWord8\n  s4 :: SWord8\n  s5 :: SWord8\n  s6 :: SWord8\n  s7 :: SWord8\nCONSTANTS\n  s_2 = False\n  s_1 = True\nTABLES\nARRAYS\nUNINTERPRETED CONSTANTS\nUSER GIVEN CODE SEGMENTS\nAXIOMS\nDEFINE\n  s8 :: SWord8 = s0 + s1\n  s9 :: SWord8 = s2 + s8\n  s10 :: SWord8 = s3 + s9\n  s11 :: SWord8 = s4 + s10\n  s12 :: SWord8 = s5 + s11\n  s13 :: SWord8 = s6 + s12\n  s14 :: SWord8 = s7 + s13\nCONSTRAINTS\nOUTPUTS\n  s0\n  s8\n  s9\n  s10\n  s11\n  s12\n  s13\n  s14\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "scanlTrace",
          "package": "sbv",
          "signature": "Int -\u003e IO ()",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#scanlTrace",
          "type": "function"
        },
        "index": {
          "description": "Trace generator for the reference spec It clearly demonstrates that the reference implementation fewer operations but is not parallelizable at all scanlTrace INPUTS s0 SWord8 s1 SWord8 s2 SWord8 s3 SWord8 s4 SWord8 s5 SWord8 s6 SWord8 s7 SWord8 CONSTANTS False True TABLES ARRAYS UNINTERPRETED CONSTANTS USER GIVEN CODE SEGMENTS AXIOMS DEFINE s8 SWord8 s0 s1 s9 SWord8 s2 s8 s10 SWord8 s3 s9 s11 SWord8 s4 s10 s12 SWord8 s5 s11 s13 SWord8 s6 s12 s14 SWord8 s7 s13 CONSTRAINTS OUTPUTS s0 s8 s9 s10 s11 s12 s13 s14",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "scanlTrace",
          "normalized": "Int-\u003eIO()",
          "package": "sbv",
          "partial": "Trace",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:scanlTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProves Ladner-Fischer is equivalent to reference specification for addition.\n \u003ccode\u003e0\u003c/code\u003e is the left-unit element, and we use a power-list of size \u003ccode\u003e8\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "thm1",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#thm1",
          "type": "function"
        },
        "index": {
          "description": "Proves Ladner-Fischer is equivalent to reference specification for addition is the left-unit element and we use power-list of size",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "thm1",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:thm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProves Ladner-Fischer is equivalent to reference specification for the function \u003ccode\u003emax\u003c/code\u003e.\n \u003ccode\u003e0\u003c/code\u003e is the left-unit element, and we use a power-list of size \u003ccode\u003e16\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "thm2",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#thm2",
          "type": "function"
        },
        "index": {
          "description": "Proves Ladner-Fischer is equivalent to reference specification for the function max is the left-unit element and we use power-list of size",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "thm2",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:thm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry proving correctness for an arbitrary operator. This proof will \u003cem\u003enot\u003c/em\u003e go through since the\n SMT solver does not know that the operator associative and has the given left-unit element. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ethm3\n\u003c/code\u003e\u003c/strong\u003eFalsifiable. Counter-example:\n  s0 = 0 :: SWord32\n  s1 = 0 :: SWord32\n  s2 = 0 :: SWord32\n  s3 = 0 :: SWord32\n  s4 = 1073741824 :: SWord32\n  s5 = 0 :: SWord32\n  s6 = 0 :: SWord32\n  s7 = 0 :: SWord32\n  -- uninterpreted: u\n       u  = 0\n  -- uninterpreted: flOp\n       flOp 0          0          = 2147483648\n       flOp 0          1073741824 = 3221225472\n       flOp 2147483648 0          = 3221225472\n       flOp 2147483648 1073741824 = 1073741824\n       flOp _          _          = 0\n\u003c/pre\u003e\u003cp\u003eYou can verify that the function \u003ccode\u003eflOp\u003c/code\u003e is indeed not associative:\n\u003c/p\u003e\u003cpre\u003e\n   ghci\u003e flOp 3221225472 (flOp 2147483648 1073741824)\n   0\n   ghci\u003e flOp (flOp 3221225472 2147483648) 1073741824\n   3221225472\n\u003c/pre\u003e\u003cp\u003eAlso, the unit \u003ccode\u003e0\u003c/code\u003e is clearly not a left-unit for \u003ccode\u003eflOp\u003c/code\u003e, as the last\n equation for \u003ccode\u003eflOp\u003c/code\u003e will simply map many elements to \u003ccode\u003e0\u003c/code\u003e.\n (NB. We need to use yices for this proof as the uninterpreted function\n examples are only supported through the yices interface currently.)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "thm3",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#thm3",
          "type": "function"
        },
        "index": {
          "description": "Try proving correctness for an arbitrary operator This proof will not go through since the SMT solver does not know that the operator associative and has the given left-unit element We have thm3 Falsifiable Counter-example s0 SWord32 s1 SWord32 s2 SWord32 s3 SWord32 s4 SWord32 s5 SWord32 s6 SWord32 s7 SWord32 uninterpreted uninterpreted flOp flOp flOp flOp flOp flOp You can verify that the function flOp is indeed not associative ghci flOp flOp ghci flOp flOp Also the unit is clearly not left-unit for flOp as the last equation for flOp will simply map many elements to NB We need to use yices for this proof as the uninterpreted function examples are only supported through the yices interface currently",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "thm3",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:thm3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tie operator, concatenation.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "tiePL",
          "package": "sbv",
          "signature": "PowerList a -\u003e PowerList a -\u003e PowerList a",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#tiePL",
          "type": "function"
        },
        "index": {
          "description": "The tie operator concatenation",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "tiePL",
          "normalized": "PowerList a-\u003ePowerList a-\u003ePowerList a",
          "package": "sbv",
          "partial": "PL",
          "signature": "PowerList a-\u003ePowerList a-\u003ePowerList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:tiePL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of zipping.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "unzipPL",
          "package": "sbv",
          "signature": "PowerList a -\u003e (PowerList a, PowerList a)",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#unzipPL",
          "type": "function"
        },
        "index": {
          "description": "Inverse of zipping",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "unzipPL",
          "normalized": "PowerList a-\u003e(PowerList a,PowerList a)",
          "package": "sbv",
          "partial": "PL",
          "signature": "PowerList a-\u003e(PowerList a,PowerList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:unzipPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOld version of Yices that supports quantified axioms in SMT-Lib1\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "yices1029",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#yices1029",
          "type": "function"
        },
        "index": {
          "description": "Old version of Yices that supports quantified axioms in SMT-Lib1",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "yices1029",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:yices1029"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother old version of yices, suitable for the non-axiom based problem\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "yicesSMT09",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#yicesSMT09",
          "type": "function"
        },
        "index": {
          "description": "Another old version of yices suitable for the non-axiom based problem",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "yicesSMT09",
          "package": "sbv",
          "partial": "SMT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:yicesSMT09"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe zip operator, zips the power-lists of the same size, returns\n a powerlist of double the size.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "zipPL",
          "package": "sbv",
          "signature": "PowerList a -\u003e PowerList a -\u003e PowerList a",
          "source": "src/Data-SBV-Examples-BitPrecise-PrefixSum.html#zipPL",
          "type": "function"
        },
        "index": {
          "description": "The zip operator zips the power-lists of the same size returns powerlist of double the size",
          "hierarchy": "Data SBV Examples BitPrecise PrefixSum",
          "module": "Data.SBV.Examples.BitPrecise.PrefixSum",
          "name": "zipPL",
          "normalized": "PowerList a-\u003ePowerList a-\u003ePowerList a",
          "package": "sbv",
          "partial": "PL",
          "signature": "PowerList a-\u003ePowerList a-\u003ePowerList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-BitPrecise-PrefixSum.html#v:zipPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple code generation example.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.AddSub",
          "name": "AddSub",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-CodeGeneration-AddSub.html",
          "type": "module"
        },
        "index": {
          "description": "Simple code generation example",
          "hierarchy": "Data SBV Examples CodeGeneration AddSub",
          "module": "Data.SBV.Examples.CodeGeneration.AddSub",
          "name": "AddSub",
          "package": "sbv",
          "partial": "Add Sub",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-AddSub.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple function that returns add/sum of args\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.AddSub",
          "name": "addSub",
          "package": "sbv",
          "signature": "SWord8 -\u003e SWord8 -\u003e (SWord8, SWord8)",
          "source": "src/Data-SBV-Examples-CodeGeneration-AddSub.html#addSub",
          "type": "function"
        },
        "index": {
          "description": "Simple function that returns add sum of args",
          "hierarchy": "Data SBV Examples CodeGeneration AddSub",
          "module": "Data.SBV.Examples.CodeGeneration.AddSub",
          "name": "addSub",
          "normalized": "SWord-\u003eSWord-\u003e(SWord,SWord)",
          "package": "sbv",
          "partial": "Sub",
          "signature": "SWord-\u003eSWord-\u003e(SWord,SWord)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-AddSub.html#v:addSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate C code for addSub. Here's the output showing the generated C code:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egenAddSub\n\u003c/code\u003e\u003c/strong\u003e== BEGIN: \"Makefile\" ================\n# Makefile for addSub. Automatically generated by SBV. Do not edit!\n\n# include any user-defined .mk file in the current directory.\n-include *.mk\n\nCC=gcc\nCCFLAGS?=-Wall -O3 -DNDEBUG -fomit-frame-pointer\n\nall: addSub_driver\n\naddSub.o: addSub.c addSub.h\n\t${CC} ${CCFLAGS} -c $\u003c -o $@\n\naddSub_driver.o: addSub_driver.c\n\t${CC} ${CCFLAGS} -c $\u003c -o $@\n\naddSub_driver: addSub.o addSub_driver.o\n\t${CC} ${CCFLAGS} $^ -o $@\n\nclean:\n\trm -f *.o\n\nveryclean: clean\n\trm -f addSub_driver\n== END: \"Makefile\" ==================\n== BEGIN: \"addSub.h\" ================\n/* Header file for addSub. Automatically generated by SBV. Do not edit! */\n\n#ifndef __addSub__HEADER_INCLUDED__\n#define __addSub__HEADER_INCLUDED__\n\n#include \u003cinttypes.h\u003e\n#include \u003cstdint.h\u003e\n#include \u003cstdbool.h\u003e\n#include \u003cmath.h\u003e\n\n/* The boolean type */\ntypedef bool SBool;\n\n/* The float type */\ntypedef float SFloat;\n\n/* The double type */\ntypedef double SDouble;\n\n/* Unsigned bit-vectors */\ntypedef uint8_t  SWord8 ;\ntypedef uint16_t SWord16;\ntypedef uint32_t SWord32;\ntypedef uint64_t SWord64;\n\n/* Signed bit-vectors */\ntypedef int8_t  SInt8 ;\ntypedef int16_t SInt16;\ntypedef int32_t SInt32;\ntypedef int64_t SInt64;\n\n/* Entry point prototype: */\nvoid addSub(const SWord8 x, const SWord8 y, SWord8 *sum,\n            SWord8 *dif);\n\n#endif /* __addSub__HEADER_INCLUDED__ */\n== END: \"addSub.h\" ==================\n== BEGIN: \"addSub_driver.c\" ================\n/* Example driver program for addSub. */\n/* Automatically generated by SBV. Edit as you see fit! */\n\n#include \u003cinttypes.h\u003e\n#include \u003cstdint.h\u003e\n#include \u003cstdbool.h\u003e\n#include \u003cmath.h\u003e\n#include \u003cstdio.h\u003e\n#include \"addSub.h\"\n\nint main(void)\n{\n  SWord8 sum;\n  SWord8 dif;\n\n  addSub(132, 241, &sum, &dif);\n\n  printf(\"addSub(132, 241, &sum, &dif) -\u003e\\n\");\n  printf(\"  sum = %\"PRIu8\"\\n\", sum);\n  printf(\"  dif = %\"PRIu8\"\\n\", dif);\n\n  return 0;\n}\n== END: \"addSub_driver.c\" ==================\n== BEGIN: \"addSub.c\" ================\n/* File: \"addSub.c\". Automatically generated by SBV. Do not edit! */\n\n#include \u003cinttypes.h\u003e\n#include \u003cstdint.h\u003e\n#include \u003cstdbool.h\u003e\n#include \u003cmath.h\u003e\n#include \"addSub.h\"\n\nvoid addSub(const SWord8 x, const SWord8 y, SWord8 *sum,\n            SWord8 *dif)\n{\n  const SWord8 s0 = x;\n  const SWord8 s1 = y;\n  const SWord8 s2 = s0 + s1;\n  const SWord8 s3 = s0 - s1;\n\n  *sum = s2;\n  *dif = s3;\n}\n== END: \"addSub.c\" ==================\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.AddSub",
          "name": "genAddSub",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-CodeGeneration-AddSub.html#genAddSub",
          "type": "function"
        },
        "index": {
          "description": "Generate code for addSub Here the output showing the generated code genAddSub BEGIN Makefile Makefile for addSub Automatically generated by SBV Do not edit include any user-defined mk file in the current directory include mk CC gcc CCFLAGS Wall O3 DNDEBUG fomit-frame-pointer all addSub driver addSub.o addSub.c addSub.h CC CCFLAGS addSub driver.o addSub driver.c CC CCFLAGS addSub driver addSub.o addSub driver.o CC CCFLAGS clean rm veryclean clean rm addSub driver END Makefile BEGIN addSub.h Header file for addSub Automatically generated by SBV Do not edit ifndef addSub HEADER INCLUDED define addSub HEADER INCLUDED include inttypes.h include stdint.h include stdbool.h include math.h The boolean type typedef bool SBool The float type typedef float SFloat The double type typedef double SDouble Unsigned bit-vectors typedef uint8 SWord8 typedef uint16 SWord16 typedef uint32 SWord32 typedef uint64 SWord64 Signed bit-vectors typedef int8 SInt8 typedef int16 SInt16 typedef int32 SInt32 typedef int64 SInt64 Entry point prototype void addSub const SWord8 const SWord8 SWord8 sum SWord8 dif endif addSub HEADER INCLUDED END addSub.h BEGIN addSub driver.c Example driver program for addSub Automatically generated by SBV Edit as you see fit include inttypes.h include stdint.h include stdbool.h include math.h include stdio.h include addSub.h int main void SWord8 sum SWord8 dif addSub sum dif printf addSub sum dif printf sum PRIu8 sum printf dif PRIu8 dif return END addSub driver.c BEGIN addSub.c File addSub.c Automatically generated by SBV Do not edit include inttypes.h include stdint.h include stdbool.h include math.h include addSub.h void addSub const SWord8 const SWord8 SWord8 sum SWord8 dif const SWord8 s0 const SWord8 s1 const SWord8 s2 s0 s1 const SWord8 s3 s0 s1 sum s2 dif s3 END addSub.c",
          "hierarchy": "Data SBV Examples CodeGeneration AddSub",
          "module": "Data.SBV.Examples.CodeGeneration.AddSub",
          "name": "genAddSub",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "Add Sub",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-AddSub.html#v:genAddSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputing the CRC symbolically, using the USB polynomial. We also\n generating C code for it as well. This example demonstrates the\n use of the \u003ccode\u003e\u003ca\u003ecrcBV\u003c/a\u003e\u003c/code\u003e function, along with how CRC's can be computed\n mathematically using polynomial division. While the results are the\n same (i.e., proven equivalent, see \u003ccode\u003e\u003ca\u003ecrcGood\u003c/a\u003e\u003c/code\u003e below), the internal\n CRC implementation generates much better code, compare \u003ccode\u003e\u003ca\u003ecg1\u003c/a\u003e\u003c/code\u003e vs \u003ccode\u003e\u003ca\u003ecg2\u003c/a\u003e\u003c/code\u003e below.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "CRC_USB5",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-CodeGeneration-CRC_USB5.html",
          "type": "module"
        },
        "index": {
          "description": "Computing the CRC symbolically using the USB polynomial We also generating code for it as well This example demonstrates the use of the crcBV function along with how CRC can be computed mathematically using polynomial division While the results are the same i.e proven equivalent see crcGood below the internal CRC implementation generates much better code compare cg1 vs cg2 below",
          "hierarchy": "Data SBV Examples CodeGeneration CRC_USB5",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "CRC_USB5",
          "package": "sbv",
          "partial": "CRC USB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a C function to compute the USB CRC, using the internal CRC\n function.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "cg1",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#cg1",
          "type": "function"
        },
        "index": {
          "description": "Generate function to compute the USB CRC using the internal CRC function",
          "hierarchy": "Data SBV Examples CodeGeneration CRC_USB5",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "cg1",
          "normalized": "IO()",
          "package": "sbv",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#v:cg1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a C function to compute the USB CRC, using the mathematical\n definition of the CRCs. Whule this version generates functionally eqivalent\n C code, it's less efficient; it has about 30% more code. So, the above\n version is preferable for code generation purposes.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "cg2",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#cg2",
          "type": "function"
        },
        "index": {
          "description": "Generate function to compute the USB CRC using the mathematical definition of the CRCs Whule this version generates functionally eqivalent code it less efficient it has about more code So the above version is preferable for code generation purposes",
          "hierarchy": "Data SBV Examples CodeGeneration CRC_USB5",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "cg2",
          "normalized": "IO()",
          "package": "sbv",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#v:cg2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve that the custom \u003ccode\u003e\u003ca\u003ecrcBV\u003c/a\u003e\u003c/code\u003e function is equivalent to the mathematical\n definition of CRC's for 11 bit messages. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecrcGood\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "crcGood",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#crcGood",
          "type": "function"
        },
        "index": {
          "description": "Prove that the custom crcBV function is equivalent to the mathematical definition of CRC for bit messages We have crcGood Q.E.D",
          "hierarchy": "Data SBV Examples CodeGeneration CRC_USB5",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "crcGood",
          "package": "sbv",
          "partial": "Good",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#v:crcGood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an 11 bit message, compute the CRC of it using the USB polynomial,\n which is 5 bits, and then append it to the msg to get a 16-bit word. Again,\n the incoming 11-bits is represented as a 16-bit word, with 5 highest bits\n essentially ignored for input purposes.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "crcUSB",
          "package": "sbv",
          "signature": "SWord16 -\u003e SWord16",
          "source": "src/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#crcUSB",
          "type": "function"
        },
        "index": {
          "description": "Given an bit message compute the CRC of it using the USB polynomial which is bits and then append it to the msg to get bit word Again the incoming bits is represented as bit word with highest bits essentially ignored for input purposes",
          "hierarchy": "Data SBV Examples CodeGeneration CRC_USB5",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "crcUSB",
          "normalized": "SWord-\u003eSWord",
          "package": "sbv",
          "partial": "USB",
          "signature": "SWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#v:crcUSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternate method for computing the CRC, \u003cem\u003emathematically\u003c/em\u003e. We shift\n the number to the left by 5, and then compute the remainder from the\n polynomial division by the USB polynomial. The result is then appended\n to the end of the message.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "crcUSB'",
          "package": "sbv",
          "signature": "SWord16 -\u003e SWord16",
          "source": "src/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#crcUSB%27",
          "type": "function"
        },
        "index": {
          "description": "Alternate method for computing the CRC mathematically We shift the number to the left by and then compute the remainder from the polynomial division by the USB polynomial The result is then appended to the end of the message",
          "hierarchy": "Data SBV Examples CodeGeneration CRC_USB5",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "crcUSB'",
          "normalized": "SWord-\u003eSWord",
          "package": "sbv",
          "partial": "USB'",
          "signature": "SWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#v:crcUSB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe USB CRC polynomial: \u003ccode\u003ex^5 + x^2 + 1\u003c/code\u003e.\n Although this polynomial needs just 6 bits to represent (5 if higher\n order bit is implicitly assumed to be set), we'll simply use a 16 bit\n number for its representation to keep things simple for code generation\n purposes.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "usb5",
          "package": "sbv",
          "signature": "SWord16",
          "source": "src/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#usb5",
          "type": "function"
        },
        "index": {
          "description": "The USB CRC polynomial Although this polynomial needs just bits to represent if higher order bit is implicitly assumed to be set we ll simply use bit number for its representation to keep things simple for code generation purposes",
          "hierarchy": "Data SBV Examples CodeGeneration CRC_USB5",
          "module": "Data.SBV.Examples.CodeGeneration.CRC_USB5",
          "name": "usb5",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-CRC_USB5.html#v:usb5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputing Fibonacci numbers and generating C code. Inspired by Lee Pike's\n original implementation, modified for inclusion in the package. It illustrates\n symbolic termination issues one can have when working with recursive algorithms\n and how to deal with such, eventually generating good C code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "Fibonacci",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-CodeGeneration-Fibonacci.html",
          "type": "module"
        },
        "index": {
          "description": "Computing Fibonacci numbers and generating code Inspired by Lee Pike original implementation modified for inclusion in the package It illustrates symbolic termination issues one can have when working with recursive algorithms and how to deal with such eventually generating good code",
          "hierarchy": "Data SBV Examples CodeGeneration Fibonacci",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "Fibonacci",
          "package": "sbv",
          "partial": "Fibonacci",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Fibonacci.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a naive implementation of fibonacci, and will work fine (albeit slow)\n for concrete inputs:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap fib0 [0..6]\n\u003c/code\u003e\u003c/strong\u003e[0 :: SWord64,1 :: SWord64,1 :: SWord64,2 :: SWord64,3 :: SWord64,5 :: SWord64,8 :: SWord64]\n\u003c/pre\u003e\u003cp\u003eHowever, it is not suitable for doing proofs or generating code, as it is not\n symbolically terminating when it is called with a symbolic value \u003ccode\u003en\u003c/code\u003e. When we\n recursively call \u003ccode\u003efib0\u003c/code\u003e on \u003ccode\u003en-1\u003c/code\u003e (or \u003ccode\u003en-2\u003c/code\u003e), the test against \u003ccode\u003e0\u003c/code\u003e will always\n explore both branches since the result will be symbolic, hence will not\n terminate. (An integrated theorem prover can establish termination\n after a certain number of unrollings, but this would be quite expensive to\n implement, and would be impractical.)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "fib0",
          "package": "sbv",
          "signature": "SWord64 -\u003e SWord64",
          "source": "src/Data-SBV-Examples-CodeGeneration-Fibonacci.html#fib0",
          "type": "function"
        },
        "index": {
          "description": "This is naive implementation of fibonacci and will work fine albeit slow for concrete inputs map fib0 SWord64 SWord64 SWord64 SWord64 SWord64 SWord64 SWord64 However it is not suitable for doing proofs or generating code as it is not symbolically terminating when it is called with symbolic value When we recursively call fib0 on n-1 or n-2 the test against will always explore both branches since the result will be symbolic hence will not terminate An integrated theorem prover can establish termination after certain number of unrollings but this would be quite expensive to implement and would be impractical",
          "hierarchy": "Data SBV Examples CodeGeneration Fibonacci",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "fib0",
          "normalized": "SWord-\u003eSWord",
          "package": "sbv",
          "signature": "SWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Fibonacci.html#v:fib0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe recursion-depth limited version of fibonacci. Limiting the maximum number to be 20, we can say:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap (fib1 20) [0..6]\n\u003c/code\u003e\u003c/strong\u003e[0 :: SWord64,1 :: SWord64,1 :: SWord64,2 :: SWord64,3 :: SWord64,5 :: SWord64,8 :: SWord64]\n\u003c/pre\u003e\u003cp\u003eThe function will work correctly, so long as the index we query is at most \u003ccode\u003etop\u003c/code\u003e, and otherwise\n will return the value at \u003ccode\u003etop\u003c/code\u003e. Note that we also use accumulating parameters here for efficiency,\n although this is orthogonal to the termination concern.\n\u003c/p\u003e\u003cp\u003eA note on modular arithmetic: The 64-bit word we use to represent the values will of course\n eventually overflow, beware! Fibonacci is a fast growing function..\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "fib1",
          "package": "sbv",
          "signature": "SWord64 -\u003e SWord64 -\u003e SWord64",
          "source": "src/Data-SBV-Examples-CodeGeneration-Fibonacci.html#fib1",
          "type": "function"
        },
        "index": {
          "description": "The recursion-depth limited version of fibonacci Limiting the maximum number to be we can say map fib1 SWord64 SWord64 SWord64 SWord64 SWord64 SWord64 SWord64 The function will work correctly so long as the index we query is at most top and otherwise will return the value at top Note that we also use accumulating parameters here for efficiency although this is orthogonal to the termination concern note on modular arithmetic The bit word we use to represent the values will of course eventually overflow beware Fibonacci is fast growing function",
          "hierarchy": "Data SBV Examples CodeGeneration Fibonacci",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "fib1",
          "normalized": "SWord-\u003eSWord-\u003eSWord",
          "package": "sbv",
          "signature": "SWord-\u003eSWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Fibonacci.html#v:fib1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the fibonacci numbers statically at \u003cem\u003ecode-generation\u003c/em\u003e time and\n put them in a table, accessed by the \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e call. \n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "fib2",
          "package": "sbv",
          "signature": "SWord64 -\u003e SWord64 -\u003e SWord64",
          "source": "src/Data-SBV-Examples-CodeGeneration-Fibonacci.html#fib2",
          "type": "function"
        },
        "index": {
          "description": "Compute the fibonacci numbers statically at code-generation time and put them in table accessed by the select call",
          "hierarchy": "Data SBV Examples CodeGeneration Fibonacci",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "fib2",
          "normalized": "SWord-\u003eSWord-\u003eSWord",
          "package": "sbv",
          "signature": "SWord-\u003eSWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Fibonacci.html#v:fib2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can generate code for \u003ccode\u003e\u003ca\u003efib1\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003egenFib1\u003c/a\u003e\u003c/code\u003e action. Note that the\n generated code will grow larger as we pick larger values of \u003ccode\u003etop\u003c/code\u003e, but only linearly,\n thanks to the accumulating parameter trick used by \u003ccode\u003e\u003ca\u003efib1\u003c/a\u003e\u003c/code\u003e. The following is an excerpt\n from the code generated for the call \u003ccode\u003egenFib1 10\u003c/code\u003e, where the code will work correctly\n for indexes up to 10:\n\u003c/p\u003e\u003cpre\u003e SWord64 fib1(const SWord64 x)\n {\n   const SWord64 s0 = x;\n   const SBool   s2 = s0 == 0x0000000000000000ULL;\n   const SBool   s4 = s0 == 0x0000000000000001ULL;\n   const SBool   s6 = s0 == 0x0000000000000002ULL;\n   const SBool   s8 = s0 == 0x0000000000000003ULL;\n   const SBool   s10 = s0 == 0x0000000000000004ULL;\n   const SBool   s12 = s0 == 0x0000000000000005ULL;\n   const SBool   s14 = s0 == 0x0000000000000006ULL;\n   const SBool   s17 = s0 == 0x0000000000000007ULL;\n   const SBool   s19 = s0 == 0x0000000000000008ULL;\n   const SBool   s22 = s0 == 0x0000000000000009ULL;\n   const SWord64 s25 = s22 ? 0x0000000000000022ULL : 0x0000000000000037ULL;\n   const SWord64 s26 = s19 ? 0x0000000000000015ULL : s25;\n   const SWord64 s27 = s17 ? 0x000000000000000dULL : s26;\n   const SWord64 s28 = s14 ? 0x0000000000000008ULL : s27;\n   const SWord64 s29 = s12 ? 0x0000000000000005ULL : s28;\n   const SWord64 s30 = s10 ? 0x0000000000000003ULL : s29;\n   const SWord64 s31 = s8 ? 0x0000000000000002ULL : s30;\n   const SWord64 s32 = s6 ? 0x0000000000000001ULL : s31;\n   const SWord64 s33 = s4 ? 0x0000000000000001ULL : s32;\n   const SWord64 s34 = s2 ? 0x0000000000000000ULL : s33;\n   \n   return s34;\n }\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "genFib1",
          "package": "sbv",
          "signature": "SWord64 -\u003e IO ()",
          "source": "src/Data-SBV-Examples-CodeGeneration-Fibonacci.html#genFib1",
          "type": "function"
        },
        "index": {
          "description": "We can generate code for fib1 using the genFib1 action Note that the generated code will grow larger as we pick larger values of top but only linearly thanks to the accumulating parameter trick used by fib1 The following is an excerpt from the code generated for the call genFib1 where the code will work correctly for indexes up to SWord64 fib1 const SWord64 const SWord64 s0 const SBool s2 s0 x0000000000000000ULL const SBool s4 s0 x0000000000000001ULL const SBool s6 s0 x0000000000000002ULL const SBool s8 s0 x0000000000000003ULL const SBool s10 s0 x0000000000000004ULL const SBool s12 s0 x0000000000000005ULL const SBool s14 s0 x0000000000000006ULL const SBool s17 s0 x0000000000000007ULL const SBool s19 s0 x0000000000000008ULL const SBool s22 s0 x0000000000000009ULL const SWord64 s25 s22 x0000000000000022ULL x0000000000000037ULL const SWord64 s26 s19 x0000000000000015ULL s25 const SWord64 s27 s17 x000000000000000dULL s26 const SWord64 s28 s14 x0000000000000008ULL s27 const SWord64 s29 s12 x0000000000000005ULL s28 const SWord64 s30 s10 x0000000000000003ULL s29 const SWord64 s31 s8 x0000000000000002ULL s30 const SWord64 s32 s6 x0000000000000001ULL s31 const SWord64 s33 s4 x0000000000000001ULL s32 const SWord64 s34 s2 x0000000000000000ULL s33 return s34",
          "hierarchy": "Data SBV Examples CodeGeneration Fibonacci",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "genFib1",
          "normalized": "SWord-\u003eIO()",
          "package": "sbv",
          "partial": "Fib",
          "signature": "SWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Fibonacci.html#v:genFib1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnce we have \u003ccode\u003e\u003ca\u003efib2\u003c/a\u003e\u003c/code\u003e, we can generate the C code straightforwardly. Below\n is an excerpt from the code that SBV generates for the call \u003ccode\u003egenFib2 64\u003c/code\u003e. Note\n that this code is a constant-time look-up table implementation of fibonacci,\n with no run-time overhead. The index can be made arbitrarily large,\n naturally. (Note that this function returns \u003ccode\u003e0\u003c/code\u003e if the index is larger\n than 64, as specified by the call to \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e with default \u003ccode\u003e0\u003c/code\u003e.)\n\u003c/p\u003e\u003cpre\u003e SWord64 fibLookup(const SWord64 x)\n {\n   const SWord64 s0 = x;\n   static const SWord64 table0[] = {\n       0x0000000000000000ULL, 0x0000000000000001ULL,\n       0x0000000000000001ULL, 0x0000000000000002ULL,\n       0x0000000000000003ULL, 0x0000000000000005ULL,\n       0x0000000000000008ULL, 0x000000000000000dULL,\n       0x0000000000000015ULL, 0x0000000000000022ULL,\n       0x0000000000000037ULL, 0x0000000000000059ULL,\n       0x0000000000000090ULL, 0x00000000000000e9ULL,\n       0x0000000000000179ULL, 0x0000000000000262ULL,\n       0x00000000000003dbULL, 0x000000000000063dULL,\n       0x0000000000000a18ULL, 0x0000000000001055ULL,\n       0x0000000000001a6dULL, 0x0000000000002ac2ULL,\n       0x000000000000452fULL, 0x0000000000006ff1ULL,\n       0x000000000000b520ULL, 0x0000000000012511ULL,\n       0x000000000001da31ULL, 0x000000000002ff42ULL,\n       0x000000000004d973ULL, 0x000000000007d8b5ULL,\n       0x00000000000cb228ULL, 0x0000000000148addULL,\n       0x0000000000213d05ULL, 0x000000000035c7e2ULL,\n       0x00000000005704e7ULL, 0x00000000008cccc9ULL,\n       0x0000000000e3d1b0ULL, 0x0000000001709e79ULL,\n       0x0000000002547029ULL, 0x0000000003c50ea2ULL,\n       0x0000000006197ecbULL, 0x0000000009de8d6dULL,\n       0x000000000ff80c38ULL, 0x0000000019d699a5ULL,\n       0x0000000029cea5ddULL, 0x0000000043a53f82ULL,\n       0x000000006d73e55fULL, 0x00000000b11924e1ULL,\n       0x000000011e8d0a40ULL, 0x00000001cfa62f21ULL,\n       0x00000002ee333961ULL, 0x00000004bdd96882ULL,\n       0x00000007ac0ca1e3ULL, 0x0000000c69e60a65ULL,\n       0x0000001415f2ac48ULL, 0x000000207fd8b6adULL,\n       0x0000003495cb62f5ULL, 0x0000005515a419a2ULL,\n       0x00000089ab6f7c97ULL, 0x000000dec1139639ULL,\n       0x000001686c8312d0ULL, 0x000002472d96a909ULL,\n       0x000003af9a19bbd9ULL, 0x000005f6c7b064e2ULL, 0x000009a661ca20bbULL\n   };\n   const SWord64 s65 = s0 \u003e= 65 ? 0x0000000000000000ULL : table0[s0];\n   \n   return s65;\n }\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "genFib2",
          "package": "sbv",
          "signature": "SWord64 -\u003e IO ()",
          "source": "src/Data-SBV-Examples-CodeGeneration-Fibonacci.html#genFib2",
          "type": "function"
        },
        "index": {
          "description": "Once we have fib2 we can generate the code straightforwardly Below is an excerpt from the code that SBV generates for the call genFib2 Note that this code is constant-time look-up table implementation of fibonacci with no run-time overhead The index can be made arbitrarily large naturally Note that this function returns if the index is larger than as specified by the call to select with default SWord64 fibLookup const SWord64 const SWord64 s0 static const SWord64 table0 x0000000000000000ULL x0000000000000001ULL x0000000000000001ULL x0000000000000002ULL x0000000000000003ULL x0000000000000005ULL x0000000000000008ULL x000000000000000dULL x0000000000000015ULL x0000000000000022ULL x0000000000000037ULL x0000000000000059ULL x0000000000000090ULL x00000000000000e9ULL x0000000000000179ULL x0000000000000262ULL x00000000000003dbULL x000000000000063dULL x0000000000000a18ULL x0000000000001055ULL x0000000000001a6dULL x0000000000002ac2ULL x000000000000452fULL x0000000000006ff1ULL x000000000000b520ULL x0000000000012511ULL x000000000001da31ULL x000000000002ff42ULL x000000000004d973ULL x000000000007d8b5ULL x00000000000cb228ULL x0000000000148addULL x0000000000213d05ULL x000000000035c7e2ULL x00000000005704e7ULL x00000000008cccc9ULL x0000000000e3d1b0ULL x0000000001709e79ULL x0000000002547029ULL x0000000003c50ea2ULL x0000000006197ecbULL x0000000009de8d6dULL x000000000ff80c38ULL x0000000019d699a5ULL x0000000029cea5ddULL x0000000043a53f82ULL x000000006d73e55fULL x00000000b11924e1ULL x000000011e8d0a40ULL x00000001cfa62f21ULL x00000002ee333961ULL x00000004bdd96882ULL x00000007ac0ca1e3ULL x0000000c69e60a65ULL x0000001415f2ac48ULL x000000207fd8b6adULL x0000003495cb62f5ULL x0000005515a419a2ULL x00000089ab6f7c97ULL x000000dec1139639ULL x000001686c8312d0ULL x000002472d96a909ULL x000003af9a19bbd9ULL x000005f6c7b064e2ULL x000009a661ca20bbULL const SWord64 s65 s0 x0000000000000000ULL table0 s0 return s65",
          "hierarchy": "Data SBV Examples CodeGeneration Fibonacci",
          "module": "Data.SBV.Examples.CodeGeneration.Fibonacci",
          "name": "genFib2",
          "normalized": "SWord-\u003eIO()",
          "package": "sbv",
          "partial": "Fib",
          "signature": "SWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Fibonacci.html#v:genFib2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputing GCD symbolically, and generating C code for it. This example\n illustrates symbolic termination related issues when programming with\n SBV, when the termination of a recursive algorithm crucially depends\n on the value of a symbolic variable. The technique we use is to statically\n enforce termination by using a recursion depth counter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.GCD",
          "name": "GCD",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-CodeGeneration-GCD.html",
          "type": "module"
        },
        "index": {
          "description": "Computing GCD symbolically and generating code for it This example illustrates symbolic termination related issues when programming with SBV when the termination of recursive algorithm crucially depends on the value of symbolic variable The technique we use is to statically enforce termination by using recursion depth counter",
          "hierarchy": "Data SBV Examples CodeGeneration GCD",
          "module": "Data.SBV.Examples.CodeGeneration.GCD",
          "name": "GCD",
          "package": "sbv",
          "partial": "GCD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-GCD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis call will generate the required C files. The following is the function\n body generated for \u003ccode\u003e\u003ca\u003esgcd\u003c/a\u003e\u003c/code\u003e. (We are not showing the generated header, \u003ccode\u003eMakefile\u003c/code\u003e,\n and the driver programs for brevity.) Note that the generated function is\n a constant time algorithm for GCD. It is not necessarily fastest, but it will take\n precisely the same amount of time for all values of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e /* File: \"sgcd.c\". Automatically generated by SBV. Do not edit! */\n \n #include \u003cinttypes.h\u003e\n #include \u003cstdint.h\u003e\n #include \u003cstdbool.h\u003e\n #include \"sgcd.h\"\n \n SWord8 sgcd(const SWord8 x, const SWord8 y)\n {\n   const SWord8 s0 = x;\n   const SWord8 s1 = y;\n   const SBool  s3 = s1 == 0;\n   const SWord8 s4 = (s1 == 0) ? s0 : (s0 % s1);\n   const SWord8 s5 = s3 ? s0 : s4;\n   const SBool  s6 = 0 == s5;\n   const SWord8 s7 = (s5 == 0) ? s1 : (s1 % s5);\n   const SWord8 s8 = s6 ? s1 : s7;\n   const SBool  s9 = 0 == s8;\n   const SWord8 s10 = (s8 == 0) ? s5 : (s5 % s8);\n   const SWord8 s11 = s9 ? s5 : s10;\n   const SBool  s12 = 0 == s11;\n   const SWord8 s13 = (s11 == 0) ? s8 : (s8 % s11);\n   const SWord8 s14 = s12 ? s8 : s13;\n   const SBool  s15 = 0 == s14;\n   const SWord8 s16 = (s14 == 0) ? s11 : (s11 % s14);\n   const SWord8 s17 = s15 ? s11 : s16;\n   const SBool  s18 = 0 == s17;\n   const SWord8 s19 = (s17 == 0) ? s14 : (s14 % s17);\n   const SWord8 s20 = s18 ? s14 : s19;\n   const SBool  s21 = 0 == s20;\n   const SWord8 s22 = (s20 == 0) ? s17 : (s17 % s20);\n   const SWord8 s23 = s21 ? s17 : s22;\n   const SBool  s24 = 0 == s23;\n   const SWord8 s25 = (s23 == 0) ? s20 : (s20 % s23);\n   const SWord8 s26 = s24 ? s20 : s25;\n   const SBool  s27 = 0 == s26;\n   const SWord8 s28 = (s26 == 0) ? s23 : (s23 % s26);\n   const SWord8 s29 = s27 ? s23 : s28;\n   const SBool  s30 = 0 == s29;\n   const SWord8 s31 = (s29 == 0) ? s26 : (s26 % s29);\n   const SWord8 s32 = s30 ? s26 : s31;\n   const SBool  s33 = 0 == s32;\n   const SWord8 s34 = (s32 == 0) ? s29 : (s29 % s32);\n   const SWord8 s35 = s33 ? s29 : s34;\n   const SBool  s36 = 0 == s35;\n   const SWord8 s37 = s36 ? s32 : s35;\n   const SWord8 s38 = s33 ? s29 : s37;\n   const SWord8 s39 = s30 ? s26 : s38;\n   const SWord8 s40 = s27 ? s23 : s39;\n   const SWord8 s41 = s24 ? s20 : s40;\n   const SWord8 s42 = s21 ? s17 : s41;\n   const SWord8 s43 = s18 ? s14 : s42;\n   const SWord8 s44 = s15 ? s11 : s43;\n   const SWord8 s45 = s12 ? s8 : s44;\n   const SWord8 s46 = s9 ? s5 : s45;\n   const SWord8 s47 = s6 ? s1 : s46;\n   const SWord8 s48 = s3 ? s0 : s47;\n   \n   return s48;\n }\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.GCD",
          "name": "genGCDInC",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-CodeGeneration-GCD.html#genGCDInC",
          "type": "function"
        },
        "index": {
          "description": "This call will generate the required files The following is the function body generated for sgcd We are not showing the generated header Makefile and the driver programs for brevity Note that the generated function is constant time algorithm for GCD It is not necessarily fastest but it will take precisely the same amount of time for all values of and File sgcd.c Automatically generated by SBV Do not edit include inttypes.h include stdint.h include stdbool.h include sgcd.h SWord8 sgcd const SWord8 const SWord8 const SWord8 s0 const SWord8 s1 const SBool s3 s1 const SWord8 s4 s1 s0 s0 s1 const SWord8 s5 s3 s0 s4 const SBool s6 s5 const SWord8 s7 s5 s1 s1 s5 const SWord8 s8 s6 s1 s7 const SBool s9 s8 const SWord8 s10 s8 s5 s5 s8 const SWord8 s11 s9 s5 s10 const SBool s12 s11 const SWord8 s13 s11 s8 s8 s11 const SWord8 s14 s12 s8 s13 const SBool s15 s14 const SWord8 s16 s14 s11 s11 s14 const SWord8 s17 s15 s11 s16 const SBool s18 s17 const SWord8 s19 s17 s14 s14 s17 const SWord8 s20 s18 s14 s19 const SBool s21 s20 const SWord8 s22 s20 s17 s17 s20 const SWord8 s23 s21 s17 s22 const SBool s24 s23 const SWord8 s25 s23 s20 s20 s23 const SWord8 s26 s24 s20 s25 const SBool s27 s26 const SWord8 s28 s26 s23 s23 s26 const SWord8 s29 s27 s23 s28 const SBool s30 s29 const SWord8 s31 s29 s26 s26 s29 const SWord8 s32 s30 s26 s31 const SBool s33 s32 const SWord8 s34 s32 s29 s29 s32 const SWord8 s35 s33 s29 s34 const SBool s36 s35 const SWord8 s37 s36 s32 s35 const SWord8 s38 s33 s29 s37 const SWord8 s39 s30 s26 s38 const SWord8 s40 s27 s23 s39 const SWord8 s41 s24 s20 s40 const SWord8 s42 s21 s17 s41 const SWord8 s43 s18 s14 s42 const SWord8 s44 s15 s11 s43 const SWord8 s45 s12 s8 s44 const SWord8 s46 s9 s5 s45 const SWord8 s47 s6 s1 s46 const SWord8 s48 s3 s0 s47 return s48",
          "hierarchy": "Data SBV Examples CodeGeneration GCD",
          "module": "Data.SBV.Examples.CodeGeneration.GCD",
          "name": "genGCDInC",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "GCDIn",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-GCD.html#v:genGCDInC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe symbolic GCD algorithm, over two 8-bit numbers. We define \u003ccode\u003esgcd a 0\u003c/code\u003e to\n be \u003ccode\u003ea\u003c/code\u003e for all \u003ccode\u003ea\u003c/code\u003e, which implies \u003ccode\u003esgcd 0 0 = 0\u003c/code\u003e. Note that this is essentially\n Euclid's algorithm, except with a recursion depth counter. We need the depth\n counter since the algorithm is not \u003cem\u003esymbolically terminating\u003c/em\u003e, as we don't have\n a means of determining that the second argument (\u003ccode\u003eb\u003c/code\u003e) will eventually reach 0 in a symbolic\n context. Hence we stop after 12 iterations. Why 12? We've empirically determined that this\n algorithm will recurse at most 12 times for arbitrary 8-bit numbers. Of course, this is\n a claim that we shall prove below.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.GCD",
          "name": "sgcd",
          "package": "sbv",
          "signature": "SWord8 -\u003e SWord8 -\u003e SWord8",
          "source": "src/Data-SBV-Examples-CodeGeneration-GCD.html#sgcd",
          "type": "function"
        },
        "index": {
          "description": "The symbolic GCD algorithm over two bit numbers We define sgcd to be for all which implies sgcd Note that this is essentially Euclid algorithm except with recursion depth counter We need the depth counter since the algorithm is not symbolically terminating as we don have means of determining that the second argument will eventually reach in symbolic context Hence we stop after iterations Why We ve empirically determined that this algorithm will recurse at most times for arbitrary bit numbers Of course this is claim that we shall prove below",
          "hierarchy": "Data SBV Examples CodeGeneration GCD",
          "module": "Data.SBV.Examples.CodeGeneration.GCD",
          "name": "sgcd",
          "normalized": "SWord-\u003eSWord-\u003eSWord",
          "package": "sbv",
          "signature": "SWord-\u003eSWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-GCD.html#v:sgcd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove sgcdIsCorrect\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.GCD",
          "name": "sgcdIsCorrect",
          "package": "sbv",
          "signature": "SWord8 -\u003e SWord8 -\u003e SWord8 -\u003e SBool",
          "source": "src/Data-SBV-Examples-CodeGeneration-GCD.html#sgcdIsCorrect",
          "type": "function"
        },
        "index": {
          "description": "We have prove sgcdIsCorrect Q.E.D",
          "hierarchy": "Data SBV Examples CodeGeneration GCD",
          "module": "Data.SBV.Examples.CodeGeneration.GCD",
          "name": "sgcdIsCorrect",
          "normalized": "SWord-\u003eSWord-\u003eSWord-\u003eSBool",
          "package": "sbv",
          "partial": "Is Correct",
          "signature": "SWord-\u003eSWord-\u003eSWord-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-GCD.html#v:sgcdIsCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputing population-counts (number of set bits) and autimatically\n generating C code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "PopulationCount",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-CodeGeneration-PopulationCount.html",
          "type": "module"
        },
        "index": {
          "description": "Computing population-counts number of set bits and autimatically generating code",
          "hierarchy": "Data SBV Examples CodeGeneration PopulationCount",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "PopulationCount",
          "package": "sbv",
          "partial": "Population Count",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-PopulationCount.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStates the correctness of faster population-count algorithm, with respect\n to the reference slow version. (We use yices here as it's quite fast for\n this problem. Z3 seems to take much longer.) We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eproveWith yices fastPopCountIsCorrect\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "fastPopCountIsCorrect",
          "package": "sbv",
          "signature": "SWord64 -\u003e SBool",
          "source": "src/Data-SBV-Examples-CodeGeneration-PopulationCount.html#fastPopCountIsCorrect",
          "type": "function"
        },
        "index": {
          "description": "States the correctness of faster population-count algorithm with respect to the reference slow version We use yices here as it quite fast for this problem Z3 seems to take much longer We have proveWith yices fastPopCountIsCorrect Q.E.D",
          "hierarchy": "Data SBV Examples CodeGeneration PopulationCount",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "fastPopCountIsCorrect",
          "normalized": "SWord-\u003eSBool",
          "package": "sbv",
          "partial": "Pop Count Is Correct",
          "signature": "SWord-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-PopulationCount.html#v:fastPopCountIsCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot only we can prove that faster version is correct, but we can also automatically\n generate C code to compute population-counts for us. This action will generate all the\n C files that you will need, including a driver program for test purposes.\n\u003c/p\u003e\u003cp\u003eBelow is the generated header file for \u003ccode\u003e\u003ca\u003epopCountFast\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egenPopCountInC\n\u003c/code\u003e\u003c/strong\u003e== BEGIN: \"Makefile\" ================\n# Makefile for popCount. Automatically generated by SBV. Do not edit!\n\n# include any user-defined .mk file in the current directory.\n-include *.mk\n\nCC=gcc\nCCFLAGS?=-Wall -O3 -DNDEBUG -fomit-frame-pointer\n\nall: popCount_driver\n\npopCount.o: popCount.c popCount.h\n\t${CC} ${CCFLAGS} -c $\u003c -o $@\n\npopCount_driver.o: popCount_driver.c\n\t${CC} ${CCFLAGS} -c $\u003c -o $@\n\npopCount_driver: popCount.o popCount_driver.o\n\t${CC} ${CCFLAGS} $^ -o $@\n\nclean:\n\trm -f *.o\n\nveryclean: clean\n\trm -f popCount_driver\n== END: \"Makefile\" ==================\n== BEGIN: \"popCount.h\" ================\n/* Header file for popCount. Automatically generated by SBV. Do not edit! */\n\n#ifndef __popCount__HEADER_INCLUDED__\n#define __popCount__HEADER_INCLUDED__\n\n#include \u003cinttypes.h\u003e\n#include \u003cstdint.h\u003e\n#include \u003cstdbool.h\u003e\n#include \u003cmath.h\u003e\n\n/* The boolean type */\ntypedef bool SBool;\n\n/* The float type */\ntypedef float SFloat;\n\n/* The double type */\ntypedef double SDouble;\n\n/* Unsigned bit-vectors */\ntypedef uint8_t  SWord8 ;\ntypedef uint16_t SWord16;\ntypedef uint32_t SWord32;\ntypedef uint64_t SWord64;\n\n/* Signed bit-vectors */\ntypedef int8_t  SInt8 ;\ntypedef int16_t SInt16;\ntypedef int32_t SInt32;\ntypedef int64_t SInt64;\n\n/* Entry point prototype: */\nSWord8 popCount(const SWord64 x);\n\n#endif /* __popCount__HEADER_INCLUDED__ */\n== END: \"popCount.h\" ==================\n== BEGIN: \"popCount_driver.c\" ================\n/* Example driver program for popCount. */\n/* Automatically generated by SBV. Edit as you see fit! */\n\n#include \u003cinttypes.h\u003e\n#include \u003cstdint.h\u003e\n#include \u003cstdbool.h\u003e\n#include \u003cmath.h\u003e\n#include \u003cstdio.h\u003e\n#include \"popCount.h\"\n\nint main(void)\n{\n  const SWord8 __result = popCount(0x1b02e143e4f0e0e5ULL);\n\n  printf(\"popCount(0x1b02e143e4f0e0e5ULL) = %\"PRIu8\"\\n\", __result);\n\n  return 0;\n}\n== END: \"popCount_driver.c\" ==================\n== BEGIN: \"popCount.c\" ================\n/* File: \"popCount.c\". Automatically generated by SBV. Do not edit! */\n\n#include \u003cinttypes.h\u003e\n#include \u003cstdint.h\u003e\n#include \u003cstdbool.h\u003e\n#include \u003cmath.h\u003e\n#include \"popCount.h\"\n\nSWord8 popCount(const SWord64 x)\n{\n  const SWord64 s0 = x;\n  static const SWord8 table0[] = {\n      0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1, 2, 2, 3, 2, 3,\n      3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4,\n      3, 4, 4, 5, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5, 5, 6, 1, 2,\n      2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 2, 3, 3, 4, 3, 4, 4, 5,\n      3, 4, 4, 5, 4, 5, 5, 6, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5,\n      5, 6, 3, 4, 4, 5, 4, 5, 5, 6, 4, 5, 5, 6, 5, 6, 6, 7, 1, 2, 2, 3,\n      2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4,\n      4, 5, 4, 5, 5, 6, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5, 5, 6,\n      3, 4, 4, 5, 4, 5, 5, 6, 4, 5, 5, 6, 5, 6, 6, 7, 2, 3, 3, 4, 3, 4,\n      4, 5, 3, 4, 4, 5, 4, 5, 5, 6, 3, 4, 4, 5, 4, 5, 5, 6, 4, 5, 5, 6,\n      5, 6, 6, 7, 3, 4, 4, 5, 4, 5, 5, 6, 4, 5, 5, 6, 5, 6, 6, 7, 4, 5,\n      5, 6, 5, 6, 6, 7, 5, 6, 6, 7, 6, 7, 7, 8\n  };\n  const SWord64 s11 = s0 & 0x00000000000000ffULL;\n  const SWord8  s12 = table0[s11];\n  const SWord64 s13 = s0 \u003e\u003e 8;\n  const SWord64 s14 = 0x00000000000000ffULL & s13;\n  const SWord8  s15 = table0[s14];\n  const SWord8  s16 = s12 + s15;\n  const SWord64 s17 = s13 \u003e\u003e 8;\n  const SWord64 s18 = 0x00000000000000ffULL & s17;\n  const SWord8  s19 = table0[s18];\n  const SWord8  s20 = s16 + s19;\n  const SWord64 s21 = s17 \u003e\u003e 8;\n  const SWord64 s22 = 0x00000000000000ffULL & s21;\n  const SWord8  s23 = table0[s22];\n  const SWord8  s24 = s20 + s23;\n  const SWord64 s25 = s21 \u003e\u003e 8;\n  const SWord64 s26 = 0x00000000000000ffULL & s25;\n  const SWord8  s27 = table0[s26];\n  const SWord8  s28 = s24 + s27;\n  const SWord64 s29 = s25 \u003e\u003e 8;\n  const SWord64 s30 = 0x00000000000000ffULL & s29;\n  const SWord8  s31 = table0[s30];\n  const SWord8  s32 = s28 + s31;\n  const SWord64 s33 = s29 \u003e\u003e 8;\n  const SWord64 s34 = 0x00000000000000ffULL & s33;\n  const SWord8  s35 = table0[s34];\n  const SWord8  s36 = s32 + s35;\n  const SWord64 s37 = s33 \u003e\u003e 8;\n  const SWord64 s38 = 0x00000000000000ffULL & s37;\n  const SWord8  s39 = table0[s38];\n  const SWord8  s40 = s36 + s39;\n\n  return s40;\n}\n== END: \"popCount.c\" ==================\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "genPopCountInC",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-CodeGeneration-PopulationCount.html#genPopCountInC",
          "type": "function"
        },
        "index": {
          "description": "Not only we can prove that faster version is correct but we can also automatically generate code to compute population-counts for us This action will generate all the files that you will need including driver program for test purposes Below is the generated header file for popCountFast genPopCountInC BEGIN Makefile Makefile for popCount Automatically generated by SBV Do not edit include any user-defined mk file in the current directory include mk CC gcc CCFLAGS Wall O3 DNDEBUG fomit-frame-pointer all popCount driver popCount.o popCount.c popCount.h CC CCFLAGS popCount driver.o popCount driver.c CC CCFLAGS popCount driver popCount.o popCount driver.o CC CCFLAGS clean rm veryclean clean rm popCount driver END Makefile BEGIN popCount.h Header file for popCount Automatically generated by SBV Do not edit ifndef popCount HEADER INCLUDED define popCount HEADER INCLUDED include inttypes.h include stdint.h include stdbool.h include math.h The boolean type typedef bool SBool The float type typedef float SFloat The double type typedef double SDouble Unsigned bit-vectors typedef uint8 SWord8 typedef uint16 SWord16 typedef uint32 SWord32 typedef uint64 SWord64 Signed bit-vectors typedef int8 SInt8 typedef int16 SInt16 typedef int32 SInt32 typedef int64 SInt64 Entry point prototype SWord8 popCount const SWord64 endif popCount HEADER INCLUDED END popCount.h BEGIN popCount driver.c Example driver program for popCount Automatically generated by SBV Edit as you see fit include inttypes.h include stdint.h include stdbool.h include math.h include stdio.h include popCount.h int main void const SWord8 result popCount x1b02e143e4f0e0e5ULL printf popCount x1b02e143e4f0e0e5ULL PRIu8 result return END popCount driver.c BEGIN popCount.c File popCount.c Automatically generated by SBV Do not edit include inttypes.h include stdint.h include stdbool.h include math.h include popCount.h SWord8 popCount const SWord64 const SWord64 s0 static const SWord8 table0 const SWord64 s11 s0 x00000000000000ffULL const SWord8 s12 table0 s11 const SWord64 s13 s0 const SWord64 s14 x00000000000000ffULL s13 const SWord8 s15 table0 s14 const SWord8 s16 s12 s15 const SWord64 s17 s13 const SWord64 s18 x00000000000000ffULL s17 const SWord8 s19 table0 s18 const SWord8 s20 s16 s19 const SWord64 s21 s17 const SWord64 s22 x00000000000000ffULL s21 const SWord8 s23 table0 s22 const SWord8 s24 s20 s23 const SWord64 s25 s21 const SWord64 s26 x00000000000000ffULL s25 const SWord8 s27 table0 s26 const SWord8 s28 s24 s27 const SWord64 s29 s25 const SWord64 s30 x00000000000000ffULL s29 const SWord8 s31 table0 s30 const SWord8 s32 s28 s31 const SWord64 s33 s29 const SWord64 s34 x00000000000000ffULL s33 const SWord8 s35 table0 s34 const SWord8 s36 s32 s35 const SWord64 s37 s33 const SWord64 s38 x00000000000000ffULL s37 const SWord8 s39 table0 s38 const SWord8 s40 s36 s39 return s40 END popCount.c",
          "hierarchy": "Data SBV Examples CodeGeneration PopulationCount",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "genPopCountInC",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "Pop Count In",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-PopulationCount.html#v:genPopCountInC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook-up table, containing population counts for all possible 8-bit\n value, from 0 to 255. Note that we do not \"hard-code\" the values, but\n merely use the slow version to compute them.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "pop8",
          "package": "sbv",
          "signature": "[SWord8]",
          "source": "src/Data-SBV-Examples-CodeGeneration-PopulationCount.html#pop8",
          "type": "function"
        },
        "index": {
          "description": "Look-up table containing population counts for all possible bit value from to Note that we do not hard-code the values but merely use the slow version to compute them",
          "hierarchy": "Data SBV Examples CodeGeneration PopulationCount",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "pop8",
          "normalized": "[SWord]",
          "package": "sbv",
          "signature": "[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-PopulationCount.html#v:pop8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFaster version. This is essentially the same algorithm, except we\n go 8 bits at a time instead of one by one, by using a precomputed table\n of population-count values for each byte. This algorithm \u003cem\u003eloops\u003c/em\u003e only\n 8 times, and hence is at least 8 times more efficient.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "popCountFast",
          "package": "sbv",
          "signature": "SWord64 -\u003e SWord8",
          "source": "src/Data-SBV-Examples-CodeGeneration-PopulationCount.html#popCountFast",
          "type": "function"
        },
        "index": {
          "description": "Faster version This is essentially the same algorithm except we go bits at time instead of one by one by using precomputed table of population-count values for each byte This algorithm loops only times and hence is at least times more efficient",
          "hierarchy": "Data SBV Examples CodeGeneration PopulationCount",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "popCountFast",
          "normalized": "SWord-\u003eSWord",
          "package": "sbv",
          "partial": "Count Fast",
          "signature": "SWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-PopulationCount.html#v:popCountFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a 64-bit quantity, the simplest (and obvious) way to count the\n number of bits that are set in it is to simply walk through all the bits\n and add 1 to a running count. This is slow, as it requires 64 iterations,\n but is simple and easy to convince yourself that it is correct. For instance:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epopCountSlow 0x0123456789ABCDEF\n\u003c/code\u003e\u003c/strong\u003e32 :: SWord8\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "popCountSlow",
          "package": "sbv",
          "signature": "SWord64 -\u003e SWord8",
          "source": "src/Data-SBV-Examples-CodeGeneration-PopulationCount.html#popCountSlow",
          "type": "function"
        },
        "index": {
          "description": "Given bit quantity the simplest and obvious way to count the number of bits that are set in it is to simply walk through all the bits and add to running count This is slow as it requires iterations but is simple and easy to convince yourself that it is correct For instance popCountSlow x0123456789ABCDEF SWord8",
          "hierarchy": "Data SBV Examples CodeGeneration PopulationCount",
          "module": "Data.SBV.Examples.CodeGeneration.PopulationCount",
          "name": "popCountSlow",
          "normalized": "SWord-\u003eSWord",
          "package": "sbv",
          "partial": "Count Slow",
          "signature": "SWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-PopulationCount.html#v:popCountSlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstrates the use of uninterpreted functions for the purposes of\n code generation. This facility is important when we want to take\n advantage of native libraries in the target platform, or when we'd\n like to hand-generate code for certain functions for various\n purposes, such as efficiency, or reliability.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Uninterpreted",
          "name": "Uninterpreted",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-CodeGeneration-Uninterpreted.html",
          "type": "module"
        },
        "index": {
          "description": "Demonstrates the use of uninterpreted functions for the purposes of code generation This facility is important when we want to take advantage of native libraries in the target platform or when we like to hand-generate code for certain functions for various purposes such as efficiency or reliability",
          "hierarchy": "Data SBV Examples CodeGeneration Uninterpreted",
          "module": "Data.SBV.Examples.CodeGeneration.Uninterpreted",
          "name": "Uninterpreted",
          "package": "sbv",
          "partial": "Uninterpreted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Uninterpreted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate C code for \u003ca\u003etstShiftLeft\u003c/a\u003e. In this case, SBV will *use* the user given definition\n verbatim, instead of generating code for it. (Also see the functions \u003ccode\u003e\u003ca\u003ecgAddDecl\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecgAddLDFlags\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003ecgAddPrototype\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Uninterpreted",
          "name": "genCCode",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-CodeGeneration-Uninterpreted.html#genCCode",
          "type": "function"
        },
        "index": {
          "description": "Generate code for tstShiftLeft In this case SBV will use the user given definition verbatim instead of generating code for it Also see the functions cgAddDecl cgAddLDFlags and cgAddPrototype",
          "hierarchy": "Data SBV Examples CodeGeneration Uninterpreted",
          "module": "Data.SBV.Examples.CodeGeneration.Uninterpreted",
          "name": "genCCode",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "CCode",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Uninterpreted.html#v:genCCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA definition of shiftLeft that can deal with variable length shifts.\n (Note that the `\u003ccode\u003e\u003ca\u003eshiftL\u003c/a\u003e\u003c/code\u003e` method from the \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e class requires an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e shift\n amount.) Unfortunately, this'll generate rather clumsy C code due to the\n use of tables etc., so we uninterpret it for code generation purposes\n using the \u003ccode\u003e\u003ca\u003ecgUninterpret\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Uninterpreted",
          "name": "shiftLeft",
          "package": "sbv",
          "signature": "SWord32 -\u003e SWord32 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-CodeGeneration-Uninterpreted.html#shiftLeft",
          "type": "function"
        },
        "index": {
          "description": "definition of shiftLeft that can deal with variable length shifts Note that the shiftL method from the Bits class requires an Int shift amount Unfortunately this ll generate rather clumsy code due to the use of tables etc so we uninterpret it for code generation purposes using the cgUninterpret function",
          "hierarchy": "Data SBV Examples CodeGeneration Uninterpreted",
          "module": "Data.SBV.Examples.CodeGeneration.Uninterpreted",
          "name": "shiftLeft",
          "normalized": "SWord-\u003eSWord-\u003eSWord",
          "package": "sbv",
          "partial": "Left",
          "signature": "SWord-\u003eSWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Uninterpreted.html#v:shiftLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest function that uses shiftLeft defined above. When used as a normal Haskell function\n or in verification the definition is fully used, i.e., no uninterpretation happens. To wit,\n we have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etstShiftLeft 3 4 5\n\u003c/code\u003e\u003c/strong\u003e224 :: SWord32\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove $ \\x y -\u003e tstShiftLeft x y 0 .== x + y\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.CodeGeneration.Uninterpreted",
          "name": "tstShiftLeft",
          "package": "sbv",
          "signature": "SWord32 -\u003e SWord32 -\u003e SWord32 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-CodeGeneration-Uninterpreted.html#tstShiftLeft",
          "type": "function"
        },
        "index": {
          "description": "Test function that uses shiftLeft defined above When used as normal Haskell function or in verification the definition is fully used i.e no uninterpretation happens To wit we have tstShiftLeft SWord32 prove tstShiftLeft Q.E.D",
          "hierarchy": "Data SBV Examples CodeGeneration Uninterpreted",
          "module": "Data.SBV.Examples.CodeGeneration.Uninterpreted",
          "name": "tstShiftLeft",
          "normalized": "SWord-\u003eSWord-\u003eSWord-\u003eSWord",
          "package": "sbv",
          "partial": "Shift Left",
          "signature": "SWord-\u003eSWord-\u003eSWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-CodeGeneration-Uninterpreted.html#v:tstShiftLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of AES (Advanced Encryption Standard), using SBV.\n For details on AES, see FIPS-197: \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips197/fips-197.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWe do a T-box implementation, which leads to good C code as we can take\n advantage of look-up tables. Note that we make virtually no attempt to\n optimize our Haskell code. The concern here is not with getting Haskell running\n fast at all. The idea is to program the T-Box implementation as naturally and clearly\n as possible in Haskell, and have SBV's code-generator generate fast C code automatically.\n Therefore, we merely use ordinary Haskell lists as our data-structures, and do not\n bother with any unboxing or strictness annotations. Thus, we achieve the separation\n of concerns: Correctness via clairty and simplicity and proofs on the Haskell side,\n performance by relying on SBV's code generator. If necessary, the generated code\n can be FFI'd back into Haskell to complete the loop.\n\u003c/p\u003e\u003cp\u003eAll 3 valid key sizes (128, 192, and 256) as required by the FIPS-197 standard\n are supported.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "AES",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Crypto-AES.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of AES Advanced Encryption Standard using SBV For details on AES see FIPS-197 http csrc.nist.gov publications fips fips197 fips-197.pdf We do T-box implementation which leads to good code as we can take advantage of look-up tables Note that we make virtually no attempt to optimize our Haskell code The concern here is not with getting Haskell running fast at all The idea is to program the T-Box implementation as naturally and clearly as possible in Haskell and have SBV code-generator generate fast code automatically Therefore we merely use ordinary Haskell lists as our data-structures and do not bother with any unboxing or strictness annotations Thus we achieve the separation of concerns Correctness via clairty and simplicity and proofs on the Haskell side performance by relying on SBV code generator If necessary the generated code can be FFI back into Haskell to complete the loop All valid key sizes and as required by the FIPS-197 standard are supported",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "AES",
          "package": "sbv",
          "partial": "AES",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn element of the Galois Field 2^8, which are essentially polynomials with\n maximum degree 7. They are conveniently represented as values between 0 and 255.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "GF28",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#GF28",
          "type": "type"
        },
        "index": {
          "description": "An element of the Galois Field which are essentially polynomials with maximum degree They are conveniently represented as values between and",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "GF28",
          "package": "sbv",
          "partial": "GF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#t:GF28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe key schedule. AES executes in rounds, and it treats first and last round keys slightly\n differently than the middle ones. We reflect that choice by being explicit about it in our type.\n The length of the middle list of keys depends on the key-size, which in turn determines\n the number of rounds.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "KS",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#KS",
          "type": "type"
        },
        "index": {
          "description": "The key schedule AES executes in rounds and it treats first and last round keys slightly differently than the middle ones We reflect that choice by being explicit about it in our type The length of the middle list of keys depends on the key-size which in turn determines the number of rounds",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "KS",
          "package": "sbv",
          "partial": "KS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#t:KS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe key, which can be 128, 192, or 256 bits. Represented as a sequence of 32-bit words.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "Key",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#Key",
          "type": "type"
        },
        "index": {
          "description": "The key which can be or bits Represented as sequence of bit words",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "Key",
          "package": "sbv",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES state. The state consists of four 32-bit words, each of which is in turn treated\n as four GF28's, i.e., 4 bytes. The T-Box implementation keeps the four-bytes together\n for efficient representation.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "State",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#State",
          "type": "type"
        },
        "index": {
          "description": "AES state The state consists of four bit words each of which is in turn treated as four GF28 i.e bytes The T-Box implementation keeps the four-bytes together for efficient representation",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "State",
          "package": "sbv",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdding the round-key to the current state. We simply exploit the fact\n that addition is just xor in implementing this transformation.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "addRoundKey",
          "package": "sbv",
          "signature": "Key -\u003e State -\u003e State",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#addRoundKey",
          "type": "function"
        },
        "index": {
          "description": "Adding the round-key to the current state We simply exploit the fact that addition is just xor in implementing this transformation",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "addRoundKey",
          "normalized": "Key-\u003eState-\u003eState",
          "package": "sbv",
          "partial": "Round Key",
          "signature": "Key-\u003eState-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:addRoundKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrectness theorem for 128-bit AES. Ideally, we would run:\n\u003c/p\u003e\u003cpre\u003e\n   prove aes128IsCorrect\n\u003c/pre\u003e\u003cp\u003eto get a proof automatically. Unfortunately, while SBV will successfully generate the proof\n obligation for this theorem and ship it to the SMT solver, it would be naive to expect the SMT-solver\n to finish that proof in any reasonable time with the currently available SMT solving technologies.\n Instead, we can issue:\n\u003c/p\u003e\u003cpre\u003e\n   quickCheck aes128IsCorrect\n\u003c/pre\u003e\u003cp\u003eand get some degree of confidence in our code. Similar predicates can be easily constructed for 192, and\n 256 bit cases as well.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aes128IsCorrect",
          "package": "sbv",
          "signature": "(SWord32, SWord32, SWord32, SWord32)-\u003e (SWord32, SWord32, SWord32, SWord32)-\u003e SBool",
          "type": "function"
        },
        "index": {
          "description": "Correctness theorem for bit AES Ideally we would run prove aes128IsCorrect to get proof automatically Unfortunately while SBV will successfully generate the proof obligation for this theorem and ship it to the SMT solver it would be naive to expect the SMT-solver to finish that proof in any reasonable time with the currently available SMT solving technologies Instead we can issue quickCheck aes128IsCorrect and get some degree of confidence in our code Similar predicates can be easily constructed for and bit cases as well",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aes128IsCorrect",
          "normalized": "(SWord,SWord,SWord,SWord)-\u003e(SWord,SWord,SWord,SWord)-\u003eSBool",
          "package": "sbv",
          "partial": "Is Correct",
          "signature": "(SWord,SWord,SWord,SWord)-\u003e(SWord,SWord,SWord,SWord)-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:aes128IsCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComponents of the AES-128 implementation that the library is generated from\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aes128LibComponents",
          "package": "sbv",
          "signature": "[(String, SBVCodeGen ())]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#aes128LibComponents",
          "type": "function"
        },
        "index": {
          "description": "Components of the AES-128 implementation that the library is generated from",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aes128LibComponents",
          "normalized": "[(String,SBVCodeGen())]",
          "package": "sbv",
          "partial": "Lib Components",
          "signature": "[(String,SBVCodeGen())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:aes128LibComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock decryption. The arguments are the same as in \u003ccode\u003e\u003ca\u003eaesEncrypt\u003c/a\u003e\u003c/code\u003e, except\n the first argument is the cipher-text and the output is the corresponding\n plain-text.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesDecrypt",
          "package": "sbv",
          "signature": "[SWord32] -\u003e KS -\u003e [SWord32]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#aesDecrypt",
          "type": "function"
        },
        "index": {
          "description": "Block decryption The arguments are the same as in aesEncrypt except the first argument is the cipher-text and the output is the corresponding plain-text",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesDecrypt",
          "normalized": "[SWord]-\u003eKS-\u003e[SWord]",
          "package": "sbv",
          "partial": "Decrypt",
          "signature": "[SWord]-\u003eKS-\u003e[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:aesDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock encryption. The first argument is the plain-text, which must have\n precisely 4 elements, for a total of 128-bits of input. The second\n argument is the key-schedule to be used, obtained by a call to \u003ccode\u003e\u003ca\u003eaesKeySchedule\u003c/a\u003e\u003c/code\u003e.\n The output will always have 4 32-bit words, which is the cipher-text.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesEncrypt",
          "package": "sbv",
          "signature": "[SWord32] -\u003e KS -\u003e [SWord32]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#aesEncrypt",
          "type": "function"
        },
        "index": {
          "description": "Block encryption The first argument is the plain-text which must have precisely elements for total of bits of input The second argument is the key-schedule to be used obtained by call to aesKeySchedule The output will always have bit words which is the cipher-text",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesEncrypt",
          "normalized": "[SWord]-\u003eKS-\u003e[SWord]",
          "package": "sbv",
          "partial": "Encrypt",
          "signature": "[SWord]-\u003eKS-\u003e[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:aesEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne decryption round. Similar to the encryption round, the first argument\n indicates whether this is the final round or not.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesInvRound",
          "package": "sbv",
          "signature": "Bool -\u003e State -\u003e Key -\u003e State",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#aesInvRound",
          "type": "function"
        },
        "index": {
          "description": "One decryption round Similar to the encryption round the first argument indicates whether this is the final round or not",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesInvRound",
          "normalized": "Bool-\u003eState-\u003eKey-\u003eState",
          "package": "sbv",
          "partial": "Inv Round",
          "signature": "Bool-\u003eState-\u003eKey-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:aesInvRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey schedule. Given a 128, 192, or 256 bit key, expand it to get key-schedules\n for encryption and decryption. The key is given as a sequence of 32-bit words.\n (4 elements for 128-bits, 6 for 192, and 8 for 256.)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesKeySchedule",
          "package": "sbv",
          "signature": "Key -\u003e (KS, KS)",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#aesKeySchedule",
          "type": "function"
        },
        "index": {
          "description": "Key schedule Given or bit key expand it to get key-schedules for encryption and decryption The key is given as sequence of bit words elements for bits for and for",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesKeySchedule",
          "normalized": "Key-\u003e(KS,KS)",
          "package": "sbv",
          "partial": "Key Schedule",
          "signature": "Key-\u003e(KS,KS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:aesKeySchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne encryption round. The first argument indicates whether this is the final round\n or not, in which case the construction is slightly different.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesRound",
          "package": "sbv",
          "signature": "Bool -\u003e State -\u003e Key -\u003e State",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#aesRound",
          "type": "function"
        },
        "index": {
          "description": "One encryption round The first argument indicates whether this is the final round or not in which case the construction is slightly different",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "aesRound",
          "normalized": "Bool-\u003eState-\u003eKey-\u003eState",
          "package": "sbv",
          "partial": "Round",
          "signature": "Bool-\u003eState-\u003eKey-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:aesRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode generation for 128-bit AES encryption.\n\u003c/p\u003e\u003cp\u003eThe following sample from the generated code-lines show how T-Boxes are rendered as C arrays:\n\u003c/p\u003e\u003cpre\u003e\n   static const SWord32 table1[] = {\n       0xc66363a5UL, 0xf87c7c84UL, 0xee777799UL, 0xf67b7b8dUL,\n       0xfff2f20dUL, 0xd66b6bbdUL, 0xde6f6fb1UL, 0x91c5c554UL,\n       0x60303050UL, 0x02010103UL, 0xce6767a9UL, 0x562b2b7dUL,\n       0xe7fefe19UL, 0xb5d7d762UL, 0x4dababe6UL, 0xec76769aUL,\n       ...\n       }\n\u003c/pre\u003e\u003cp\u003eThe generated program has 5 tables (one sbox table, and 4-Tboxes), all converted to fast C arrays. Here\n is a sample of the generated straightline C-code:\n\u003c/p\u003e\u003cpre\u003e\n   const SWord8  s1915 = (SWord8) s1912;\n   const SWord8  s1916 = table0[s1915];\n   const SWord16 s1917 = (((SWord16) s1914) \u003c\u003c 8) | ((SWord16) s1916);\n   const SWord32 s1918 = (((SWord32) s1911) \u003c\u003c 16) | ((SWord32) s1917);\n   const SWord32 s1919 = s1844 ^ s1918;\n   const SWord32 s1920 = s1903 ^ s1919;\n\u003c/pre\u003e\u003cp\u003eThe GNU C-compiler does a fine job of optimizing this straightline code to generate a fairly efficient C implementation.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "cgAES128BlockEncrypt",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#cgAES128BlockEncrypt",
          "type": "function"
        },
        "index": {
          "description": "Code generation for bit AES encryption The following sample from the generated code-lines show how T-Boxes are rendered as arrays static const SWord32 table1 xc66363a5UL xf87c7c84UL xee777799UL xf67b7b8dUL xfff2f20dUL xd66b6bbdUL xde6f6fb1UL x91c5c554UL x60303050UL x02010103UL xce6767a9UL x562b2b7dUL xe7fefe19UL xb5d7d762UL x4dababe6UL xec76769aUL The generated program has tables one sbox table and Tboxes all converted to fast arrays Here is sample of the generated straightline C-code const SWord8 s1915 SWord8 s1912 const SWord8 s1916 table0 s1915 const SWord16 s1917 SWord16 s1914 SWord16 s1916 const SWord32 s1918 SWord32 s1911 SWord32 s1917 const SWord32 s1919 s1844 s1918 const SWord32 s1920 s1903 s1919 The GNU C-compiler does fine job of optimizing this straightline code to generate fairly efficient implementation",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "cgAES128BlockEncrypt",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "AES Block Encrypt",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:cgAES128BlockEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a C library, containing functions for performing 128-bit enc\u003cem\u003edec\u003c/em\u003ekey-expansion.\n A note on performance: In a very rough speed test, the generated code was able to do\n 6.3 million block encryptions per second on a decent MacBook Pro. On the same machine, OpenSSL\n reports 8.2 million block encryptions per second. So, the generated code is about 25% slower\n as compared to the highly optimized OpenSSL implementation. (Note that the speed test was done\n somewhat simplistically, so these numbers should be considered very rough estimates.)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "cgAES128Library",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#cgAES128Library",
          "type": "function"
        },
        "index": {
          "description": "Generate library containing functions for performing bit enc dec key-expansion note on performance In very rough speed test the generated code was able to do million block encryptions per second on decent MacBook Pro On the same machine OpenSSL reports million block encryptions per second So the generated code is about slower as compared to the highly optimized OpenSSL implementation Note that the speed test was done somewhat simplistically so these numbers should be considered very rough estimates",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "cgAES128Library",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "AES Library",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:cgAES128Library"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric round function. Given the function to perform one round, a key-schedule,\n and a starting state, it performs the AES rounds.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "doRounds",
          "package": "sbv",
          "signature": "(Bool -\u003e State -\u003e Key -\u003e State) -\u003e KS -\u003e State -\u003e State",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#doRounds",
          "type": "function"
        },
        "index": {
          "description": "Generic round function Given the function to perform one round key-schedule and starting state it performs the AES rounds",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "doRounds",
          "normalized": "(Bool-\u003eState-\u003eKey-\u003eState)-\u003eKS-\u003eState-\u003eState",
          "package": "sbv",
          "partial": "Rounds",
          "signature": "(Bool-\u003eState-\u003eKey-\u003eState)-\u003eKS-\u003eState-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:doRounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from 4 bytes, back to a 32-bit row, inverse of \u003ccode\u003e\u003ca\u003etoBytes\u003c/a\u003e\u003c/code\u003e above. We\n have the following simple theorems stating this relationship formally:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove $ \\a b c d -\u003e toBytes (fromBytes [a, b, c, d]) .== [a, b, c, d]\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove $ \\r -\u003e fromBytes (toBytes r) .== r\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "fromBytes",
          "package": "sbv",
          "signature": "[GF28] -\u003e SWord32",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#fromBytes",
          "type": "function"
        },
        "index": {
          "description": "Conversion from bytes back to bit row inverse of toBytes above We have the following simple theorems stating this relationship formally prove toBytes fromBytes Q.E.D prove fromBytes toBytes Q.E.D",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "fromBytes",
          "normalized": "[GF]-\u003eSWord",
          "package": "sbv",
          "partial": "Bytes",
          "signature": "[GF]-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:fromBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputing inverses in GF(2^8). By the mathematical properties of GF(2^8)\n and the particular irreducible polynomial used \u003ccode\u003ex^8+x^5+x^3+x^1+1\u003c/code\u003e, it\n turns out that raising to the 254 power gives us the multiplicative inverse.\n Of course, we can prove this using SBV:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove $ \\x -\u003e x ./= 0 ==\u003e x `gf28Mult` gf28Inverse x .== 1\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e\u003cp\u003eNote that we exclude \u003ccode\u003e0\u003c/code\u003e in our theorem, as it does not have a\n multiplicative inverse.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "gf28Inverse",
          "package": "sbv",
          "signature": "GF28 -\u003e GF28",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#gf28Inverse",
          "type": "function"
        },
        "index": {
          "description": "Computing inverses in GF By the mathematical properties of GF and the particular irreducible polynomial used it turns out that raising to the power gives us the multiplicative inverse Of course we can prove this using SBV prove gf28Mult gf28Inverse Q.E.D Note that we exclude in our theorem as it does not have multiplicative inverse",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "gf28Inverse",
          "normalized": "GF-\u003eGF",
          "package": "sbv",
          "partial": "Inverse",
          "signature": "GF-\u003eGF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:gf28Inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication in GF(2^8). This is simple polynomial multipliation, followed\n by the irreducible polynomial \u003ccode\u003ex^8+x^4+x^3+x^1+1\u003c/code\u003e. We simply use the \u003ccode\u003e\u003ca\u003epMult\u003c/a\u003e\u003c/code\u003e\n function exported by SBV to do the operation. \n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "gf28Mult",
          "package": "sbv",
          "signature": "GF28 -\u003e GF28 -\u003e GF28",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#gf28Mult",
          "type": "function"
        },
        "index": {
          "description": "Multiplication in GF This is simple polynomial multipliation followed by the irreducible polynomial We simply use the pMult function exported by SBV to do the operation",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "gf28Mult",
          "normalized": "GF-\u003eGF-\u003eGF",
          "package": "sbv",
          "partial": "Mult",
          "signature": "GF-\u003eGF-\u003eGF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:gf28Mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExponentiation by a constant in GF(2^8). The implementation uses the usual\n square-and-multiply trick to speed up the computation.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "gf28Pow",
          "package": "sbv",
          "signature": "GF28 -\u003e Int -\u003e GF28",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#gf28Pow",
          "type": "function"
        },
        "index": {
          "description": "Exponentiation by constant in GF The implementation uses the usual square-and-multiply trick to speed up the computation",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "gf28Pow",
          "normalized": "GF-\u003eInt-\u003eGF",
          "package": "sbv",
          "partial": "Pow",
          "signature": "GF-\u003eInt-\u003eGF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:gf28Pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eInvMixColumns\u003c/code\u003e transformation, as described in Section 5.3.3 of the standard. Note\n that this transformation is only used explicitly during key-expansion in the T-Box implementation\n of AES.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "invMixColumns",
          "package": "sbv",
          "signature": "State -\u003e State",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#invMixColumns",
          "type": "function"
        },
        "index": {
          "description": "The InvMixColumns transformation as described in Section of the standard Note that this transformation is only used explicitly during key-expansion in the T-Box implementation of AES",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "invMixColumns",
          "normalized": "State-\u003eState",
          "package": "sbv",
          "partial": "Mix Columns",
          "signature": "State-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:invMixColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey expansion. Starting with the given key, returns an infinite sequence of\n words, as described by the AES standard, Section 5.2, Figure 11.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "keyExpansion",
          "package": "sbv",
          "signature": "Int -\u003e Key -\u003e [Key]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#keyExpansion",
          "type": "function"
        },
        "index": {
          "description": "Key expansion Starting with the given key returns an infinite sequence of words as described by the AES standard Section Figure",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "keyExpansion",
          "normalized": "Int-\u003eKey-\u003e[Key]",
          "package": "sbv",
          "partial": "Expansion",
          "signature": "Int-\u003eKey-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:keyExpansion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotating a state row by a fixed amount to the right.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "rotR",
          "package": "sbv",
          "signature": "[GF28] -\u003e Int -\u003e [GF28]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#rotR",
          "type": "function"
        },
        "index": {
          "description": "Rotating state row by fixed amount to the right",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "rotR",
          "normalized": "[GF]-\u003eInt-\u003e[GF]",
          "package": "sbv",
          "signature": "[GF]-\u003eInt-\u003e[GF]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:rotR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of round-constants, as specified in Section 5.2 of the AES standard.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "roundConstants",
          "package": "sbv",
          "signature": "[GF28]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#roundConstants",
          "type": "function"
        },
        "index": {
          "description": "Definition of round-constants as specified in Section of the AES standard",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "roundConstants",
          "normalized": "[GF]",
          "package": "sbv",
          "partial": "Constants",
          "signature": "[GF]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:roundConstants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sbox transformation. We simply select from the sbox table. Note that we\n are obliged to give a default value (here \u003ccode\u003e0\u003c/code\u003e) to be used if the index is out-of-bounds\n as required by SBV's \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e function. However, that will never happen since\n the table has all 256 elements in it.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "sbox",
          "package": "sbv",
          "signature": "GF28 -\u003e GF28",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#sbox",
          "type": "function"
        },
        "index": {
          "description": "The sbox transformation We simply select from the sbox table Note that we are obliged to give default value here to be used if the index is out-of-bounds as required by SBV select function However that will never happen since the table has all elements in it",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "sbox",
          "normalized": "GF-\u003eGF",
          "package": "sbv",
          "signature": "GF-\u003eGF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:sbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve that the \u003ccode\u003e\u003ca\u003esbox\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunSBox\u003c/a\u003e\u003c/code\u003e are inverses. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove sboxInverseCorrect\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "sboxInverseCorrect",
          "package": "sbv",
          "signature": "GF28 -\u003e SBool",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#sboxInverseCorrect",
          "type": "function"
        },
        "index": {
          "description": "Prove that the sbox and unSBox are inverses We have prove sboxInverseCorrect Q.E.D",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "sboxInverseCorrect",
          "normalized": "GF-\u003eSBool",
          "package": "sbv",
          "partial": "Inverse Correct",
          "signature": "GF-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:sboxInverseCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe values of the AES S-box table. Note that we describe the S-box programmatically\n using the mathematical construction given in Section 5.1.1 of the standard. However,\n the code-generation will turn this into a mere look-up table, as it is just a\n constant table, all computation being done at \"compile-time\".\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "sboxTable",
          "package": "sbv",
          "signature": "[GF28]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#sboxTable",
          "type": "function"
        },
        "index": {
          "description": "The values of the AES S-box table Note that we describe the S-box programmatically using the mathematical construction given in Section of the standard However the code-generation will turn this into mere look-up table as it is just constant table all computation being done at compile-time",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "sboxTable",
          "normalized": "[GF]",
          "package": "sbv",
          "partial": "Table",
          "signature": "[GF]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:sboxTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst look-up table used in encryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t0",
          "package": "sbv",
          "signature": "GF28 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t0",
          "type": "function"
        },
        "index": {
          "description": "First look-up table used in encryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t0",
          "normalized": "GF-\u003eSWord",
          "package": "sbv",
          "signature": "GF-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eT-box table generation function for encryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t0Func",
          "package": "sbv",
          "signature": "GF28 -\u003e [GF28]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t0Func",
          "type": "function"
        },
        "index": {
          "description": "T-box table generation function for encryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t0Func",
          "normalized": "GF-\u003e[GF]",
          "package": "sbv",
          "partial": "Func",
          "signature": "GF-\u003e[GF]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t0Func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond look-up table used in encryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t1",
          "package": "sbv",
          "signature": "GF28 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t1",
          "type": "function"
        },
        "index": {
          "description": "Second look-up table used in encryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t1",
          "normalized": "GF-\u003eSWord",
          "package": "sbv",
          "signature": "GF-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e128-bit decryption test, from Appendix C.1 of the AES standard:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap hex t128Dec\n\u003c/code\u003e\u003c/strong\u003e[\"00112233\",\"44556677\",\"8899aabb\",\"ccddeeff\"]\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t128Dec",
          "package": "sbv",
          "signature": "[SWord32]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t128Dec",
          "type": "function"
        },
        "index": {
          "description": "bit decryption test from Appendix C.1 of the AES standard map hex t128Dec aabb ccddeeff",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t128Dec",
          "normalized": "[SWord]",
          "package": "sbv",
          "partial": "Dec",
          "signature": "[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t128Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e128-bit encryption test, from Appendix C.1 of the AES standard:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap hex t128Enc\n\u003c/code\u003e\u003c/strong\u003e[\"69c4e0d8\",\"6a7b0430\",\"d8cdb780\",\"70b4c55a\"]\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t128Enc",
          "package": "sbv",
          "signature": "[SWord32]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t128Enc",
          "type": "function"
        },
        "index": {
          "description": "bit encryption test from Appendix C.1 of the AES standard map hex t128Enc c4e0d8 a7b0430 d8cdb780 b4c55a",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t128Enc",
          "normalized": "[SWord]",
          "package": "sbv",
          "partial": "Enc",
          "signature": "[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t128Enc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e192-bit decryption test, from Appendix C.2 of the AES standard:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap hex t192Dec\n\u003c/code\u003e\u003c/strong\u003e[\"00112233\",\"44556677\",\"8899aabb\",\"ccddeeff\"]\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t192Dec",
          "package": "sbv",
          "signature": "[SWord32]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t192Dec",
          "type": "function"
        },
        "index": {
          "description": "bit decryption test from Appendix C.2 of the AES standard map hex t192Dec aabb ccddeeff",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t192Dec",
          "normalized": "[SWord]",
          "package": "sbv",
          "partial": "Dec",
          "signature": "[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t192Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e192-bit encryption test, from Appendix C.2 of the AES standard:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap hex t192Enc\n\u003c/code\u003e\u003c/strong\u003e[\"dda97ca4\",\"864cdfe0\",\"6eaf70a0\",\"ec0d7191\"]\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t192Enc",
          "package": "sbv",
          "signature": "[SWord32]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t192Enc",
          "type": "function"
        },
        "index": {
          "description": "bit encryption test from Appendix C.2 of the AES standard map hex t192Enc dda97ca4 cdfe0 eaf70a0 ec0d7191",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t192Enc",
          "normalized": "[SWord]",
          "package": "sbv",
          "partial": "Enc",
          "signature": "[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t192Enc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThird look-up table used in encryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t2",
          "package": "sbv",
          "signature": "GF28 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t2",
          "type": "function"
        },
        "index": {
          "description": "Third look-up table used in encryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t2",
          "normalized": "GF-\u003eSWord",
          "package": "sbv",
          "signature": "GF-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e256-bit decryption, from Appendix C.3 of the AES standard:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap hex t256Dec\n\u003c/code\u003e\u003c/strong\u003e[\"00112233\",\"44556677\",\"8899aabb\",\"ccddeeff\"]\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t256Dec",
          "package": "sbv",
          "signature": "[SWord32]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t256Dec",
          "type": "function"
        },
        "index": {
          "description": "bit decryption from Appendix C.3 of the AES standard map hex t256Dec aabb ccddeeff",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t256Dec",
          "normalized": "[SWord]",
          "package": "sbv",
          "partial": "Dec",
          "signature": "[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t256Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e256-bit encryption, from Appendix C.3 of the AES standard:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap hex t256Enc\n\u003c/code\u003e\u003c/strong\u003e[\"8ea2b7ca\",\"516745bf\",\"eafc4990\",\"4b496089\"]\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t256Enc",
          "package": "sbv",
          "signature": "[SWord32]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t256Enc",
          "type": "function"
        },
        "index": {
          "description": "bit encryption from Appendix C.3 of the AES standard map hex t256Enc ea2b7ca bf eafc4990 b496089",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t256Enc",
          "normalized": "[SWord]",
          "package": "sbv",
          "partial": "Enc",
          "signature": "[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t256Enc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFourth look-up table used in encryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t3",
          "package": "sbv",
          "signature": "GF28 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#t3",
          "type": "function"
        },
        "index": {
          "description": "Fourth look-up table used in encryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "t3",
          "normalized": "GF-\u003eSWord",
          "package": "sbv",
          "signature": "GF-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:t3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from 32-bit words to 4 constituent bytes.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "toBytes",
          "package": "sbv",
          "signature": "SWord32 -\u003e [GF28]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#toBytes",
          "type": "function"
        },
        "index": {
          "description": "Conversion from bit words to constituent bytes",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "toBytes",
          "normalized": "SWord-\u003e[GF]",
          "package": "sbv",
          "partial": "Bytes",
          "signature": "SWord-\u003e[GF]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:toBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst look-up table used in decryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u0",
          "package": "sbv",
          "signature": "GF28 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#u0",
          "type": "function"
        },
        "index": {
          "description": "First look-up table used in decryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u0",
          "normalized": "GF-\u003eSWord",
          "package": "sbv",
          "signature": "GF-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:u0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eT-box table generating function for decryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u0Func",
          "package": "sbv",
          "signature": "GF28 -\u003e [GF28]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#u0Func",
          "type": "function"
        },
        "index": {
          "description": "T-box table generating function for decryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u0Func",
          "normalized": "GF-\u003e[GF]",
          "package": "sbv",
          "partial": "Func",
          "signature": "GF-\u003e[GF]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:u0Func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond look-up table used in decryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u1",
          "package": "sbv",
          "signature": "GF28 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#u1",
          "type": "function"
        },
        "index": {
          "description": "Second look-up table used in decryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u1",
          "normalized": "GF-\u003eSWord",
          "package": "sbv",
          "signature": "GF-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:u1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThird look-up table used in decryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u2",
          "package": "sbv",
          "signature": "GF28 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#u2",
          "type": "function"
        },
        "index": {
          "description": "Third look-up table used in decryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u2",
          "normalized": "GF-\u003eSWord",
          "package": "sbv",
          "signature": "GF-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:u2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFourth look-up table used in decryption\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u3",
          "package": "sbv",
          "signature": "GF28 -\u003e SWord32",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#u3",
          "type": "function"
        },
        "index": {
          "description": "Fourth look-up table used in decryption",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "u3",
          "normalized": "GF-\u003eSWord",
          "package": "sbv",
          "signature": "GF-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:u3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse s-box transformation.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "unSBox",
          "package": "sbv",
          "signature": "GF28 -\u003e GF28",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#unSBox",
          "type": "function"
        },
        "index": {
          "description": "The inverse s-box transformation",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "unSBox",
          "normalized": "GF-\u003eGF",
          "package": "sbv",
          "partial": "SBox",
          "signature": "GF-\u003eGF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:unSBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe values of the inverse S-box table. Again, the construction is programmatic.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "unSBoxTable",
          "package": "sbv",
          "signature": "[GF28]",
          "source": "src/Data-SBV-Examples-Crypto-AES.html#unSBoxTable",
          "type": "function"
        },
        "index": {
          "description": "The values of the inverse S-box table Again the construction is programmatic",
          "hierarchy": "Data SBV Examples Crypto AES",
          "module": "Data.SBV.Examples.Crypto.AES",
          "name": "unSBoxTable",
          "normalized": "[GF]",
          "package": "sbv",
          "partial": "SBox Table",
          "signature": "[GF]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-AES.html#v:unSBoxTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of RC4 (AKA Rivest Cipher 4 or Alleged RC4/ARC4),\n using SBV. For information on RC4, see: \u003ca\u003ehttp://en.wikipedia.org/wiki/RC4\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWe make no effort to optimize the code, and instead focus on a clear\n implementation. In fact, the RC4 algorithm relies on in-place update of\n its state heavily for efficiency, and is therefore unsuitable for a purely\n functional implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "RC4",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of RC4 AKA Rivest Cipher or Alleged RC4 ARC4 using SBV For information on RC4 see http en.wikipedia.org wiki RC4 We make no effort to optimize the code and instead focus on clear implementation In fact the RC4 algorithm relies on in-place update of its state heavily for efficiency and is therefore unsuitable for purely functional implementation",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "RC4",
          "package": "sbv",
          "partial": "RC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe key is a stream of \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "Key",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#Key",
          "type": "type"
        },
        "index": {
          "description": "The key is stream of Word8 values",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "Key",
          "package": "sbv",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the current state of the RC4 stream: it is the \u003ccode\u003eS\u003c/code\u003e array\n along with the \u003ccode\u003ei\u003c/code\u003e and \u003ccode\u003ej\u003c/code\u003e index values used by the PRGA.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "RC4",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#RC4",
          "type": "type"
        },
        "index": {
          "description": "Represents the current state of the RC4 stream it is the array along with the and index values used by the PRGA",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "RC4",
          "package": "sbv",
          "partial": "RC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#t:RC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC4 State contains 256 8-bit values. We use the symbolically accessible\n full-binary type \u003ccode\u003e\u003ca\u003eSTree\u003c/a\u003e\u003c/code\u003e to represent the state, since RC4 needs\n access to the array via a symbolic index and it's important to minimize access time.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "S",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#S",
          "type": "type"
        },
        "index": {
          "description": "RC4 State contains bit values We use the symbolically accessible full-binary type STree to represent the state since RC4 needs access to the array via symbolic index and it important to minimize access time",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "S",
          "package": "sbv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC4 decryption. Essentially the same as decryption. For the above test vectors we have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecrypt \"Key\" [0xbb, 0xf3, 0x16, 0xe8, 0xd9, 0x40, 0xaf, 0x0a, 0xd3]\n\u003c/code\u003e\u003c/strong\u003e\"Plaintext\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecrypt \"Wiki\" [0x10, 0x21, 0xbf, 0x04, 0x20]\n\u003c/code\u003e\u003c/strong\u003e\"pedia\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecrypt \"Secret\" [0x45, 0xa0, 0x1f, 0x64, 0x5f, 0xc3, 0x5b, 0x38, 0x35, 0x52, 0x54, 0x4b, 0x9b, 0xf5]\n\u003c/code\u003e\u003c/strong\u003e\"Attack at dawn\"\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "decrypt",
          "package": "sbv",
          "signature": "String -\u003e [SWord8] -\u003e String",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "RC4 decryption Essentially the same as decryption For the above test vectors we have decrypt Key xbb xf3 x16 xe8 xd9 x40 xaf x0a xd3 Plaintext decrypt Wiki x10 x21 xbf x04 x20 pedia decrypt Secret x45 xa0 x1f x64 x5f xc3 x5b x38 x35 x52 x54 x4b x9b xf5 Attack at dawn",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "decrypt",
          "normalized": "String-\u003e[SWord]-\u003eString",
          "package": "sbv",
          "signature": "String-\u003e[SWord]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC4 encryption. We generate key-words and xor it with the input. The\n following test-vectors are from Wikipedia \u003ca\u003ehttp://en.wikipedia.org/wiki/RC4\u003c/a\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econcatMap hex $ encrypt \"Key\" \"Plaintext\"\n\u003c/code\u003e\u003c/strong\u003e\"bbf316e8d940af0ad3\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econcatMap hex $ encrypt \"Wiki\" \"pedia\"\n\u003c/code\u003e\u003c/strong\u003e\"1021bf0420\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econcatMap hex $ encrypt \"Secret\" \"Attack at dawn\"\n\u003c/code\u003e\u003c/strong\u003e\"45a01f645fc35b383552544b9bf5\"\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "encrypt",
          "package": "sbv",
          "signature": "String -\u003e String -\u003e [SWord8]",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "RC4 encryption We generate key-words and xor it with the input The following test-vectors are from Wikipedia http en.wikipedia.org wiki RC4 concatMap hex encrypt Key Plaintext bbf316e8d940af0ad3 concatMap hex encrypt Wiki pedia bf0420 concatMap hex encrypt Secret Attack at dawn a01f645fc35b383552544b9bf5",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "encrypt",
          "normalized": "String-\u003eString-\u003e[SWord]",
          "package": "sbv",
          "signature": "String-\u003eString-\u003e[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs the state to be used by the PRGA using the given key.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "initRC4",
          "package": "sbv",
          "signature": "Key -\u003e S",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#initRC4",
          "type": "function"
        },
        "index": {
          "description": "Constructs the state to be used by the PRGA using the given key",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "initRC4",
          "normalized": "Key-\u003eS",
          "package": "sbv",
          "partial": "RC",
          "signature": "Key-\u003eS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#v:initRC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the fully balanced initial tree, where the leaves are simply the numbers \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003e255\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "initS",
          "package": "sbv",
          "signature": "S",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#initS",
          "type": "function"
        },
        "index": {
          "description": "Construct the fully balanced initial tree where the leaves are simply the numbers through",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "initS",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#v:initS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe key-schedule. Note that this function returns an infinite list.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "keySchedule",
          "package": "sbv",
          "signature": "Key -\u003e [SWord8]",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#keySchedule",
          "type": "function"
        },
        "index": {
          "description": "The key-schedule Note that this function returns an infinite list",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "keySchedule",
          "normalized": "Key-\u003e[SWord]",
          "package": "sbv",
          "partial": "Schedule",
          "signature": "Key-\u003e[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#v:keySchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a key-schedule from a given key-string.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "keyScheduleString",
          "package": "sbv",
          "signature": "String -\u003e [SWord8]",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#keyScheduleString",
          "type": "function"
        },
        "index": {
          "description": "Generate key-schedule from given key-string",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "keyScheduleString",
          "normalized": "String-\u003e[SWord]",
          "package": "sbv",
          "partial": "Schedule String",
          "signature": "String-\u003e[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#v:keyScheduleString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements the PRGA used in RC4. We return the new state and the next key value generated.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "prga",
          "package": "sbv",
          "signature": "RC4 -\u003e (SWord8, RC4)",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#prga",
          "type": "function"
        },
        "index": {
          "description": "Implements the PRGA used in RC4 We return the new state and the next key value generated",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "prga",
          "normalized": "RC-\u003e(SWord,RC)",
          "package": "sbv",
          "signature": "RC-\u003e(SWord,RC)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#v:prga"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve that round-trip encryption/decryption leaves the plain-text unchanged.\n The theorem is stated parametrically over key and plain-text sizes. The expression\n performs the proof for a 40-bit key (5 bytes) and 40-bit plaintext (again 5 bytes).\n\u003c/p\u003e\u003cp\u003eNote that this theorem is trivial to prove, since it is essentially establishing\n xor'in the same value twice leaves a word unchanged (i.e., \u003ccode\u003ex \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e y \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e y = x\u003c/code\u003e).\n However, the proof takes quite a while to complete, as it gives rise to a fairly\n large symbolic trace.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "rc4IsCorrect",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#rc4IsCorrect",
          "type": "function"
        },
        "index": {
          "description": "Prove that round-trip encryption decryption leaves the plain-text unchanged The theorem is stated parametrically over key and plain-text sizes The expression performs the proof for bit key bytes and bit plaintext again bytes Note that this theorem is trivial to prove since it is essentially establishing xor in the same value twice leaves word unchanged i.e xor xor However the proof takes quite while to complete as it gives rise to fairly large symbolic trace",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "rc4IsCorrect",
          "package": "sbv",
          "partial": "Is Correct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#v:rc4IsCorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwaps two elements in the RC4 array.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "swap",
          "package": "sbv",
          "signature": "SWord8 -\u003e SWord8 -\u003e S -\u003e S",
          "source": "src/Data-SBV-Examples-Crypto-RC4.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Swaps two elements in the RC4 array",
          "hierarchy": "Data SBV Examples Crypto RC4",
          "module": "Data.SBV.Examples.Crypto.RC4",
          "name": "swap",
          "normalized": "SWord-\u003eSWord-\u003eS-\u003eS",
          "package": "sbv",
          "signature": "SWord-\u003eSWord-\u003eS-\u003eS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Crypto-RC4.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis program demonstrates the use of the existentials and the QBVF (quantified\n bit-vector solver). We generate CRC polynomials of degree 16 that can be used\n for messages of size 48-bits. The query finds all such polynomials that have hamming\n distance is at least 4. That is, if the CRC can't tell two different 48-bit messages\n apart, then they must differ in at least 4 bits.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "CRCPolynomial",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Existentials-CRCPolynomial.html",
          "type": "module"
        },
        "index": {
          "description": "This program demonstrates the use of the existentials and the QBVF quantified bit-vector solver We generate CRC polynomials of degree that can be used for messages of size bits The query finds all such polynomials that have hamming distance is at least That is if the CRC can tell two different bit messages apart then they must differ in at least bits",
          "hierarchy": "Data SBV Examples Existentials CRCPolynomial",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "CRCPolynomial",
          "package": "sbv",
          "partial": "CRCPolynomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-CRCPolynomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSBV doesn't support 48 bit words natively. So, we represent them\n as a tuple, 32 high-bits and 16 low-bits.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "SWord48",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Existentials-CRCPolynomial.html#SWord48",
          "type": "type"
        },
        "index": {
          "description": "SBV doesn support bit words natively So we represent them as tuple high-bits and low-bits",
          "hierarchy": "Data SBV Examples Existentials CRCPolynomial",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "SWord48",
          "package": "sbv",
          "partial": "SWord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-CRCPolynomial.html#t:SWord48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a hamming distance value \u003ccode\u003ehd\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecrcGood\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003etrue\u003c/code\u003e if\n the 16 bit polynomial can distinguish all messages that has at most\n \u003ccode\u003ehd\u003c/code\u003e different bits. Note that we express this conversely: If the\n \u003ccode\u003esent\u003c/code\u003e and \u003ccode\u003ereceived\u003c/code\u003e messages are different, then it must be the\n case that that must differ from each other (including CRCs), in\n more than \u003ccode\u003ehd\u003c/code\u003e bits.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "crcGood",
          "package": "sbv",
          "signature": "SWord8 -\u003e SWord16 -\u003e SWord48 -\u003e SWord48 -\u003e SBool",
          "source": "src/Data-SBV-Examples-Existentials-CRCPolynomial.html#crcGood",
          "type": "function"
        },
        "index": {
          "description": "Given hamming distance value hd crcGood returns true if the bit polynomial can distinguish all messages that has at most hd different bits Note that we express this conversely If the sent and received messages are different then it must be the case that that must differ from each other including CRCs in more than hd bits",
          "hierarchy": "Data SBV Examples Existentials CRCPolynomial",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "crcGood",
          "normalized": "SWord-\u003eSWord-\u003eSWord-\u003eSWord-\u003eSBool",
          "package": "sbv",
          "partial": "Good",
          "signature": "SWord-\u003eSWord-\u003eSWord-\u003eSWord-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-CRCPolynomial.html#v:crcGood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the 16 bit CRC of a 48 bit message, using the given polynomial\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "crc_48_16",
          "package": "sbv",
          "signature": "SWord48 -\u003e SWord16 -\u003e [SBool]",
          "source": "src/Data-SBV-Examples-Existentials-CRCPolynomial.html#crc_48_16",
          "type": "function"
        },
        "index": {
          "description": "Compute the bit CRC of bit message using the given polynomial",
          "hierarchy": "Data SBV Examples Existentials CRCPolynomial",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "crc_48_16",
          "normalized": "SWord-\u003eSWord-\u003e[SBool]",
          "package": "sbv",
          "signature": "SWord-\u003eSWord-\u003e[SBool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-CRCPolynomial.html#v:crc_48_16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the differing bits in the message and the corresponding CRC\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "diffCount",
          "package": "sbv",
          "signature": "(SWord48, [SBool]) -\u003e (SWord48, [SBool]) -\u003e SWord8",
          "source": "src/Data-SBV-Examples-Existentials-CRCPolynomial.html#diffCount",
          "type": "function"
        },
        "index": {
          "description": "Count the differing bits in the message and the corresponding CRC",
          "hierarchy": "Data SBV Examples Existentials CRCPolynomial",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "diffCount",
          "normalized": "(SWord,[SBool])-\u003e(SWord,[SBool])-\u003eSWord",
          "package": "sbv",
          "partial": "Count",
          "signature": "(SWord,[SBool])-\u003e(SWord,[SBool])-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-CRCPolynomial.html#v:diffCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind and display all degree 16 polynomials with hamming distance at least 4, for 48 bit messages.\n\u003c/p\u003e\u003cp\u003eWhen run, this function prints:\n\u003c/p\u003e\u003cpre\u003e\n    Polynomial #1. x^16 + x^2 + x + 1\n    Polynomial #2. x^16 + x^15 + x^2 + 1\n    Polynomial #3. x^16 + x^15 + x^14 + 1\n    Polynomial #4. x^16 + x^15 + x^2 + x + 1\n    Polynomial #5. x^16 + x^14 + x + 1\n    ...\n\u003c/pre\u003e\u003cp\u003eNote that different runs can produce different results, depending on the random\n numbers used by the solver, solver version, etc. (Also, the solver will take some\n time to generate these results. On my machine, the first five polynomials were\n generated in about 5 minutes.)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "findHD4Polynomials",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Existentials-CRCPolynomial.html#findHD4Polynomials",
          "type": "function"
        },
        "index": {
          "description": "Find and display all degree polynomials with hamming distance at least for bit messages When run this function prints Polynomial Polynomial Polynomial Polynomial Polynomial Note that different runs can produce different results depending on the random numbers used by the solver solver version etc Also the solver will take some time to generate these results On my machine the first five polynomials were generated in about minutes",
          "hierarchy": "Data SBV Examples Existentials CRCPolynomial",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "findHD4Polynomials",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "HD Polynomials",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-CRCPolynomial.html#v:findHD4Polynomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate good CRC polynomials for 48-bit words, given the hamming distance \u003ccode\u003ehd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "genPoly",
          "package": "sbv",
          "signature": "SWord8 -\u003e IO ()",
          "source": "src/Data-SBV-Examples-Existentials-CRCPolynomial.html#genPoly",
          "type": "function"
        },
        "index": {
          "description": "Generate good CRC polynomials for bit words given the hamming distance hd",
          "hierarchy": "Data SBV Examples Existentials CRCPolynomial",
          "module": "Data.SBV.Examples.Existentials.CRCPolynomial",
          "name": "genPoly",
          "normalized": "SWord-\u003eIO()",
          "package": "sbv",
          "partial": "Poly",
          "signature": "SWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-CRCPolynomial.html#v:genPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinding minimal natural number solutions to linear Diophantine equations,\n using explicit quantification.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "Diophantine",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Existentials-Diophantine.html",
          "type": "module"
        },
        "index": {
          "description": "Finding minimal natural number solutions to linear Diophantine equations using explicit quantification",
          "hierarchy": "Data SBV Examples Existentials Diophantine",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "Diophantine",
          "package": "sbv",
          "partial": "Diophantine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-Diophantine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a homogeneous problem, the solution is any linear combination of the resulting vectors.\n For a non-homogeneous problem, the solution is any linear combination of the vectors in the\n second component plus one of the vectors in the first component.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "Solution",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Existentials-Diophantine.html#Solution",
          "type": "data"
        },
        "index": {
          "description": "For homogeneous problem the solution is any linear combination of the resulting vectors For non-homogeneous problem the solution is any linear combination of the vectors in the second component plus one of the vectors in the first component",
          "hierarchy": "Data SBV Examples Existentials Diophantine",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "Solution",
          "package": "sbv",
          "partial": "Solution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-Diophantine.html#t:Solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "Homogeneous",
          "package": "sbv",
          "signature": "Homogeneous [[Integer]]",
          "source": "src/Data-SBV-Examples-Existentials-Diophantine.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Existentials Diophantine",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "Homogeneous",
          "normalized": "Homogeneous[[Integer]]",
          "package": "sbv",
          "partial": "Homogeneous",
          "signature": "Homogeneous[[Integer]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-Diophantine.html#v:Homogeneous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "NonHomogeneous",
          "package": "sbv",
          "signature": "NonHomogeneous [[Integer]] [[Integer]]",
          "source": "src/Data-SBV-Examples-Existentials-Diophantine.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Existentials Diophantine",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "NonHomogeneous",
          "normalized": "NonHomogeneous[[Integer]][[Integer]]",
          "package": "sbv",
          "partial": "Non Homogeneous",
          "signature": "NonHomogeneous[[Integer]][[Integer]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-Diophantine.html#v:NonHomogeneous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the basis solution. By definition, the basis has all non-trivial (i.e., non-0) solutions\n that cannot be written as the sum of two other solutions. We use the mathematically equivalent\n statement that a solution is in the basis if it's least according to the lexicographic\n order using the ordinary less-than relation. (NB. We explicitly tell z3 to use the logic\n AUFLIA for this problem, as the BV solver that is chosen automatically has a performance\n issue. See: https:\u003cem/\u003ez3.codeplex.com\u003cem\u003eworkitem\u003c/em\u003e88.)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "basis",
          "package": "sbv",
          "signature": "[[SInteger]] -\u003e IO [[Integer]]",
          "source": "src/Data-SBV-Examples-Existentials-Diophantine.html#basis",
          "type": "function"
        },
        "index": {
          "description": "Find the basis solution By definition the basis has all non-trivial i.e non-0 solutions that cannot be written as the sum of two other solutions We use the mathematically equivalent statement that solution is in the basis if it least according to the lexicographic order using the ordinary less-than relation NB We explicitly tell z3 to use the logic AUFLIA for this problem as the BV solver that is chosen automatically has performance issue See https z3.codeplex.com workitem",
          "hierarchy": "Data SBV Examples Existentials Diophantine",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "basis",
          "normalized": "[[SInteger]]-\u003eIO[[Integer]]",
          "package": "sbv",
          "signature": "[[SInteger]]-\u003eIO[[Integer]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-Diophantine.html#v:basis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eldn: Solve a (L)inear (D)iophantine equation, returning minimal solutions over (N)aturals.\n The input is given as a rows of equations, with rhs values separated into a tuple.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "ldn",
          "package": "sbv",
          "signature": "[([Integer], Integer)] -\u003e IO Solution",
          "source": "src/Data-SBV-Examples-Existentials-Diophantine.html#ldn",
          "type": "function"
        },
        "index": {
          "description": "ldn Solve inear iophantine equation returning minimal solutions over aturals The input is given as rows of equations with rhs values separated into tuple",
          "hierarchy": "Data SBV Examples Existentials Diophantine",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "ldn",
          "normalized": "[([Integer],Integer)]-\u003eIO Solution",
          "package": "sbv",
          "signature": "[([Integer],Integer)]-\u003eIO Solution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-Diophantine.html#v:ldn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA puzzle: Five sailors and a monkey escape from a naufrage and reach an island with\n coconuts. Before dawn, they gather a few of them and decide to sleep first and share\n the next day. At night, however, one of them awakes, counts the nuts, makes five parts,\n gives the remaining nut to the monkey, saves his share away, and sleeps. All other\n sailors do the same, one by one. When they all wake up in the morning, they again make 5 shares,\n and give the last remaining nut to the monkey. How many nuts were there at the beginning?\n\u003c/p\u003e\u003cp\u003eWe can model this as a series of diophantine equations:\n\u003c/p\u003e\u003cpre\u003e\n       x_0 = 5 x_1 + 1\n     4 x_1 = 5 x_2 + 1\n     4 x_2 = 5 x_3 + 1\n     4 x_3 = 5 x_4 + 1\n     4 x_4 = 5 x_5 + 1\n     4 x_5 = 5 x_6 + 1\n\u003c/pre\u003e\u003cp\u003eWe need to solve for x_0, over the naturals. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esailors\n\u003c/code\u003e\u003c/strong\u003e[15621,3124,2499,1999,1599,1279,1023]\n\u003c/pre\u003e\u003cp\u003eThat is:\n\u003c/p\u003e\u003cpre\u003e\n   * There was a total of 15621 coconuts\n   * 1st sailor: 15621 = 3124*5+1, leaving 15621-3124-1 = 12496\n   * 2nd sailor: 12496 = 2499*5+1, leaving 12496-2499-1 =  9996\n   * 3rd sailor:  9996 = 1999*5+1, leaving  9996-1999-1 =  7996\n   * 4th sailor:  7996 = 1599*5+1, leaving  7996-1599-1 =  6396\n   * 5th sailor:  6396 = 1279*5+1, leaving  6396-1279-1 =  5116\n   * In the morning, they had: 5116 = 1023*5+1.\n\u003c/pre\u003e\u003cp\u003eNote that this is the minimum solution, that is, we are guaranteed that there's\n no solution with less number of coconuts. In fact, any member of \u003ccode\u003e[15625*k-4 | k \u003c- [1..]]\u003c/code\u003e\n is a solution, i.e., so are \u003ccode\u003e31246\u003c/code\u003e, \u003ccode\u003e46871\u003c/code\u003e, \u003ccode\u003e62496\u003c/code\u003e, \u003ccode\u003e78121\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "sailors",
          "package": "sbv",
          "signature": "IO [Integer]",
          "source": "src/Data-SBV-Examples-Existentials-Diophantine.html#sailors",
          "type": "function"
        },
        "index": {
          "description": "puzzle Five sailors and monkey escape from naufrage and reach an island with coconuts Before dawn they gather few of them and decide to sleep first and share the next day At night however one of them awakes counts the nuts makes five parts gives the remaining nut to the monkey saves his share away and sleeps All other sailors do the same one by one When they all wake up in the morning they again make shares and give the last remaining nut to the monkey How many nuts were there at the beginning We can model this as series of diophantine equations We need to solve for over the naturals We have sailors That is There was total of coconuts st sailor leaving nd sailor leaving rd sailor leaving th sailor leaving th sailor leaving In the morning they had Note that this is the minimum solution that is we are guaranteed that there no solution with less number of coconuts In fact any member of k-4 is solution i.e so are etc",
          "hierarchy": "Data SBV Examples Existentials Diophantine",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "sailors",
          "normalized": "IO[Integer]",
          "package": "sbv",
          "signature": "IO[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-Diophantine.html#v:sailors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve the equation:\n\u003c/p\u003e\u003cpre\u003e2x + y - z = 2\u003c/pre\u003e\u003cp\u003eWe have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etest\n\u003c/code\u003e\u003c/strong\u003eNonHomogeneous [[0,2,0],[1,0,0]] [[1,0,2],[0,1,1]]\n\u003c/pre\u003e\u003cp\u003ewhich means that the solutions are of the form:\n\u003c/p\u003e\u003cpre\u003e(1, 0, 0) + k (0, 1, 1) + k' (1, 0, 2) = (1+k', k, k+2k')\u003c/pre\u003e\u003cp\u003eOR\n\u003c/p\u003e\u003cpre\u003e(0, 2, 0) + k (0, 1, 1) + k' (1, 0, 2) = (k', 2+k, k+2k')\u003c/pre\u003e\u003cp\u003efor arbitrary \u003ccode\u003ek\u003c/code\u003e, \u003ccode\u003ek'\u003c/code\u003e. It's easy to see that these are really solutions\n to the equation given. It's harder to see that they cover all possibilities,\n but a moments thought reveals that is indeed the case.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "test",
          "package": "sbv",
          "signature": "IO Solution",
          "source": "src/Data-SBV-Examples-Existentials-Diophantine.html#test",
          "type": "function"
        },
        "index": {
          "description": "Solve the equation We have test NonHomogeneous which means that the solutions are of the form OR for arbitrary It easy to see that these are really solutions to the equation given It harder to see that they cover all possibilities but moments thought reveals that is indeed the case",
          "hierarchy": "Data SBV Examples Existentials Diophantine",
          "module": "Data.SBV.Examples.Existentials.Diophantine",
          "name": "test",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Existentials-Diophantine.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSeveral examples involving IEEE-754 floating point numbers, i.e., single\n precision \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eSFloat\u003c/a\u003e\u003c/code\u003e) and double precision \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eSDouble\u003c/a\u003e\u003c/code\u003e) types.\n\u003c/p\u003e\u003cp\u003eNote that arithmetic with floating point is full of surprises; due to precision\n issues associativity of arithmetic operations typically do not hold. Also,\n the presence of \u003ccode\u003eNaN\u003c/code\u003e is always something to look out for.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "Floating",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Misc-Floating.html",
          "type": "module"
        },
        "index": {
          "description": "Several examples involving IEEE-754 floating point numbers i.e single precision Float SFloat and double precision Double SDouble types Note that arithmetic with floating point is full of surprises due to precision issues associativity of arithmetic operations typically do not hold Also the presence of NaN is always something to look out for",
          "hierarchy": "Data SBV Examples Misc Floating",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "Floating",
          "package": "sbv",
          "partial": "Floating",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Misc-Floating.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve that floating point addition is not associative. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove assocPlus\n\u003c/code\u003e\u003c/strong\u003eFalsifiable. Counter-example:\n  s0 = -Infinity :: SFloat\n  s1 = Infinity :: SFloat\n  s2 = -9.403955e-38 :: SFloat\n\u003c/pre\u003e\u003cp\u003eIndeed:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet i = 1/0 :: Float\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e((-i) + i) + (-9.403955e-38) :: Float\n\u003c/code\u003e\u003c/strong\u003eNaN\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-i) + (i + (-9.403955e-38)) :: Float\n\u003c/code\u003e\u003c/strong\u003eNaN\n\u003c/pre\u003e\u003cp\u003eBut keep in mind that \u003ccode\u003eNaN\u003c/code\u003e does not equal itself in the floating point world! We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet nan = 0/0 :: Float in nan == nan\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "assocPlus",
          "package": "sbv",
          "signature": "SFloat -\u003e SFloat -\u003e SFloat -\u003e SBool",
          "source": "src/Data-SBV-Examples-Misc-Floating.html#assocPlus",
          "type": "function"
        },
        "index": {
          "description": "Prove that floating point addition is not associative We have prove assocPlus Falsifiable Counter-example s0 Infinity SFloat s1 Infinity SFloat s2 e-38 SFloat Indeed let Float e-38 Float NaN e-38 Float NaN But keep in mind that NaN does not equal itself in the floating point world We have let nan Float in nan nan False",
          "hierarchy": "Data SBV Examples Misc Floating",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "assocPlus",
          "normalized": "SFloat-\u003eSFloat-\u003eSFloat-\u003eSBool",
          "package": "sbv",
          "partial": "Plus",
          "signature": "SFloat-\u003eSFloat-\u003eSFloat-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Misc-Floating.html#v:assocPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve that addition is not associative, even if we ignore \u003ccode\u003eNaN\u003c/code\u003e/\u003ccode\u003eInfinity\u003c/code\u003e values.\n To do this, we use the predicate \u003ccode\u003e\u003ca\u003eisFPPoint\u003c/a\u003e\u003c/code\u003e, which is true of a floating point\n number (\u003ccode\u003e\u003ca\u003eSFloat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eSDouble\u003c/a\u003e\u003c/code\u003e) if it is neither \u003ccode\u003eNaN\u003c/code\u003e nor \u003ccode\u003eInfinity\u003c/code\u003e. (That is, it's a\n representable point in the real-number line.)\n\u003c/p\u003e\u003cp\u003eWe have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eassocPlusRegular\n\u003c/code\u003e\u003c/strong\u003eFalsifiable. Counter-example:\n  x = 1.5775295e-30 :: SFloat\n  y = 1.92593e-34 :: SFloat\n  z = -2.1521e-41 :: SFloat\n\u003c/pre\u003e\u003cp\u003eIndeed, we have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(1.5775295e-30 + 1.92593e-34) + (-2.1521e-41) :: Float\n\u003c/code\u003e\u003c/strong\u003e1.5777222e-30\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e1.5775295e-30 + (1.92593e-34 + (-2.1521e-41)) :: Float\n\u003c/code\u003e\u003c/strong\u003e1.577722e-30\n\u003c/pre\u003e\u003cp\u003eNote the loss of precision in the second expression.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "assocPlusRegular",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Misc-Floating.html#assocPlusRegular",
          "type": "function"
        },
        "index": {
          "description": "Prove that addition is not associative even if we ignore NaN Infinity values To do this we use the predicate isFPPoint which is true of floating point number SFloat or SDouble if it is neither NaN nor Infinity That is it representable point in the real-number line We have assocPlusRegular Falsifiable Counter-example e-30 SFloat e-34 SFloat e-41 SFloat Indeed we have e-30 e-34 e-41 Float e-30 e-30 e-34 e-41 Float e-30 Note the loss of precision in the second expression",
          "hierarchy": "Data SBV Examples Misc Floating",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "assocPlusRegular",
          "package": "sbv",
          "partial": "Plus Regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Misc-Floating.html#v:assocPlusRegular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last example illustrates that \u003ccode\u003ea * (1/a)\u003c/code\u003e does not necessarily equal \u003ccode\u003e1\u003c/code\u003e. Again,\n we protect against division by \u003ccode\u003e0\u003c/code\u003e and \u003ccode\u003eNaN\u003c/code\u003e/\u003ccode\u003eInfinity\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emultInverse\n\u003c/code\u003e\u003c/strong\u003eFalsifiable. Counter-example:\n  a = 1.3999060872492817e-308 :: SDouble\n\u003c/pre\u003e\u003cp\u003eIndeed, we have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet a = 1.3999060872492817e-308 :: Double\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ea * (1/a)\n\u003c/code\u003e\u003c/strong\u003e0.9999999999999999\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "multInverse",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Misc-Floating.html#multInverse",
          "type": "function"
        },
        "index": {
          "description": "The last example illustrates that does not necessarily equal Again we protect against division by and NaN Infinity We have multInverse Falsifiable Counter-example e-308 SDouble Indeed we have let e-308 Double",
          "hierarchy": "Data SBV Examples Misc Floating",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "multInverse",
          "package": "sbv",
          "partial": "Inverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Misc-Floating.html#v:multInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemonstrate that \u003ccode\u003ea+b = a\u003c/code\u003e does not necessarily mean \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e in the floating point world,\n even when we disallow the obvious solution when \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are \u003ccode\u003eInfinity.\u003c/code\u003e\n We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enonZeroAddition\n\u003c/code\u003e\u003c/strong\u003eFalsifiable. Counter-example:\n  a = -4.0 :: SFloat\n  b = 4.5918e-41 :: SFloat\n\u003c/pre\u003e\u003cp\u003eIndeed, we have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e-4.0 + 4.5918e-41 == (-4.0 :: Float)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cp\u003eBut:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e4.5918e-41 == (0 :: Float)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "nonZeroAddition",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Misc-Floating.html#nonZeroAddition",
          "type": "function"
        },
        "index": {
          "description": "Demonstrate that does not necessarily mean is in the floating point world even when we disallow the obvious solution when and are Infinity We have nonZeroAddition Falsifiable Counter-example SFloat e-41 SFloat Indeed we have e-41 Float True But e-41 Float False",
          "hierarchy": "Data SBV Examples Misc Floating",
          "module": "Data.SBV.Examples.Misc.Floating",
          "name": "nonZeroAddition",
          "package": "sbv",
          "partial": "Zero Addition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Misc-Floating.html#v:nonZeroAddition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstrates use of programmatic model extraction. When programming with\n SBV, we typically use \u003ccode\u003e\u003ca\u003esat\u003c/a\u003e\u003c/code\u003e/\u003ccode\u003e\u003ca\u003eallSat\u003c/a\u003e\u003c/code\u003e calls to compute models automatically.\n In more advanced uses, however, the user might want to use programmable\n extraction features to do fancier programming. We demonstrate some of\n these utilities here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Misc.ModelExtract",
          "name": "ModelExtract",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Misc-ModelExtract.html",
          "type": "module"
        },
        "index": {
          "description": "Demonstrates use of programmatic model extraction When programming with SBV we typically use sat allSat calls to compute models automatically In more advanced uses however the user might want to use programmable extraction features to do fancier programming We demonstrate some of these utilities here",
          "hierarchy": "Data SBV Examples Misc ModelExtract",
          "module": "Data.SBV.Examples.Misc.ModelExtract",
          "name": "ModelExtract",
          "package": "sbv",
          "partial": "Model Extract",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Misc-ModelExtract.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe now use \u003ca\u003eoutside\u003c/a\u003e repeatedly to generate 10 integers, such that we not only disallow\n previously generated elements, but also any value that differs from previous solutions\n by less than 5.  Here, we use the \u003ccode\u003e\u003ca\u003egetModelValue\u003c/a\u003e\u003c/code\u003e function. We could have also extracted the dictionary\n via \u003ccode\u003e\u003ca\u003egetModelDictionary\u003c/a\u003e\u003c/code\u003e and did fancier programming as well, as necessary. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egenVals\n\u003c/code\u003e\u003c/strong\u003e[45,40,35,30,25,20,15,10,5,0]\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Misc.ModelExtract",
          "name": "genVals",
          "package": "sbv",
          "signature": "IO [Integer]",
          "source": "src/Data-SBV-Examples-Misc-ModelExtract.html#genVals",
          "type": "function"
        },
        "index": {
          "description": "We now use outside repeatedly to generate integers such that we not only disallow previously generated elements but also any value that differs from previous solutions by less than Here we use the getModelValue function We could have also extracted the dictionary via getModelDictionary and did fancier programming as well as necessary We have genVals",
          "hierarchy": "Data SBV Examples Misc ModelExtract",
          "module": "Data.SBV.Examples.Misc.ModelExtract",
          "name": "genVals",
          "normalized": "IO[Integer]",
          "package": "sbv",
          "partial": "Vals",
          "signature": "IO[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Misc-ModelExtract.html#v:genVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple function to generate a new integer value, that is not in the\n given set of values. We also require the value to be non-negative\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Misc.ModelExtract",
          "name": "outside",
          "package": "sbv",
          "signature": "[Integer] -\u003e IO SatResult",
          "source": "src/Data-SBV-Examples-Misc-ModelExtract.html#outside",
          "type": "function"
        },
        "index": {
          "description": "simple function to generate new integer value that is not in the given set of values We also require the value to be non-negative",
          "hierarchy": "Data SBV Examples Misc ModelExtract",
          "module": "Data.SBV.Examples.Misc.ModelExtract",
          "name": "outside",
          "normalized": "[Integer]-\u003eIO SatResult",
          "package": "sbv",
          "signature": "[Integer]-\u003eIO SatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Misc-ModelExtract.html#v:outside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple usage of polynomials over GF(2^n), using Rijndael's\n finite field: \u003ca\u003ehttp://en.wikipedia.org/wiki/Finite_field_arithmetic#Rijndael.27s_finite_field\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe functions available are:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003epMult\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e GF(2^n) Multiplication\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003epDiv\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e GF(2^n) Division\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003epMod\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e GF(2^n) Modulus\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003epDivMod\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e GF(2^n) Division/Modulus, packed together\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eNote that addition in GF(2^n) is simply \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e, so no custom function is provided.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "Polynomials",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Polynomials-Polynomials.html",
          "type": "module"
        },
        "index": {
          "description": "Simple usage of polynomials over GF using Rijndael finite field http en.wikipedia.org wiki Finite field arithmetic Rijndael.27s finite field The functions available are pMult GF Multiplication pDiv GF Division pMod GF Modulus pDivMod GF Division Modulus packed together Note that addition in GF is simply xor so no custom function is provided",
          "hierarchy": "Data SBV Examples Polynomials Polynomials",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "Polynomials",
          "package": "sbv",
          "partial": "Polynomials",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Polynomials-Polynomials.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper synonym for representing GF(2^8); which are merely 8-bit unsigned words. Largest\n term in such a polynomial has degree 7.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "GF28",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Polynomials-Polynomials.html#GF28",
          "type": "type"
        },
        "index": {
          "description": "Helper synonym for representing GF which are merely bit unsigned words Largest term in such polynomial has degree",
          "hierarchy": "Data SBV Examples Polynomials Polynomials",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "GF28",
          "package": "sbv",
          "partial": "GF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Polynomials-Polynomials.html#t:GF28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication in Rijndael's field; usual polynomial multiplication followed by reduction\n by the irreducible polynomial.  The irreducible used by Rijndael's field is the polynomial\n \u003ccode\u003ex^8 + x^4 + x^3 + x + 1\u003c/code\u003e, which we write by giving it's \u003cem\u003eexponents\u003c/em\u003e in SBV.\n See: \u003ca\u003ehttp://en.wikipedia.org/wiki/Finite_field_arithmetic#Rijndael.27s_finite_field\u003c/a\u003e.\n Note that the irreducible itself is not in GF28! It has a degree of 8.\n\u003c/p\u003e\u003cp\u003eNB. You can use the \u003ccode\u003e\u003ca\u003eshowPoly\u003c/a\u003e\u003c/code\u003e function to print polynomials nicely, as a mathematician would write.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "(\u003c*\u003e)",
          "package": "sbv",
          "signature": "GF28 -\u003e GF28 -\u003e GF28",
          "source": "src/Data-SBV-Examples-Polynomials-Polynomials.html#%3C%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Multiplication in Rijndael field usual polynomial multiplication followed by reduction by the irreducible polynomial The irreducible used by Rijndael field is the polynomial which we write by giving it exponents in SBV See http en.wikipedia.org wiki Finite field arithmetic Rijndael.27s finite field Note that the irreducible itself is not in GF28 It has degree of NB You can use the showPoly function to print polynomials nicely as mathematician would write",
          "hierarchy": "Data SBV Examples Polynomials Polynomials",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "GF-\u003eGF-\u003eGF",
          "package": "sbv",
          "signature": "GF-\u003eGF-\u003eGF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Polynomials-Polynomials.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStates that multiplication is associative, note that associativity\n proofs are notoriously hard for SAT/SMT solvers\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "multAssoc",
          "package": "sbv",
          "signature": "GF28 -\u003e GF28 -\u003e GF28 -\u003e SBool",
          "source": "src/Data-SBV-Examples-Polynomials-Polynomials.html#multAssoc",
          "type": "function"
        },
        "index": {
          "description": "States that multiplication is associative note that associativity proofs are notoriously hard for SAT SMT solvers",
          "hierarchy": "Data SBV Examples Polynomials Polynomials",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "multAssoc",
          "normalized": "GF-\u003eGF-\u003eGF-\u003eSBool",
          "package": "sbv",
          "partial": "Assoc",
          "signature": "GF-\u003eGF-\u003eGF-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Polynomials-Polynomials.html#v:multAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStates that multiplication is commutative\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "multComm",
          "package": "sbv",
          "signature": "GF28 -\u003e GF28 -\u003e SBool",
          "source": "src/Data-SBV-Examples-Polynomials-Polynomials.html#multComm",
          "type": "function"
        },
        "index": {
          "description": "States that multiplication is commutative",
          "hierarchy": "Data SBV Examples Polynomials Polynomials",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "multComm",
          "normalized": "GF-\u003eGF-\u003eSBool",
          "package": "sbv",
          "partial": "Comm",
          "signature": "GF-\u003eGF-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Polynomials-Polynomials.html#v:multComm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStates that the unit polynomial \u003ccode\u003e1\u003c/code\u003e, is the unit element\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "multUnit",
          "package": "sbv",
          "signature": "GF28 -\u003e SBool",
          "source": "src/Data-SBV-Examples-Polynomials-Polynomials.html#multUnit",
          "type": "function"
        },
        "index": {
          "description": "States that the unit polynomial is the unit element",
          "hierarchy": "Data SBV Examples Polynomials Polynomials",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "multUnit",
          "normalized": "GF-\u003eSBool",
          "package": "sbv",
          "partial": "Unit",
          "signature": "GF-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Polynomials-Polynomials.html#v:multUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStates that the usual multiplication rule holds over GF(2^n) polynomials\n Checks:\n\u003c/p\u003e\u003cpre\u003e\n    if (a, b) = x \u003ccode\u003e\u003ca\u003epDivMod\u003c/a\u003e\u003c/code\u003e y then x = y \u003ccode\u003e\u003ca\u003epMult\u003c/a\u003e\u003c/code\u003e a + b\n\u003c/pre\u003e\u003cp\u003ebeing careful about \u003ccode\u003ey = 0\u003c/code\u003e. When divisor is 0, then quotient is\n defined to be 0 and the remainder is the numerator.\n (Note that addition is simply \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e in GF(2^8).)\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "polyDivMod",
          "package": "sbv",
          "signature": "GF28 -\u003e GF28 -\u003e SBool",
          "source": "src/Data-SBV-Examples-Polynomials-Polynomials.html#polyDivMod",
          "type": "function"
        },
        "index": {
          "description": "States that the usual multiplication rule holds over GF polynomials Checks if pDivMod then pMult being careful about When divisor is then quotient is defined to be and the remainder is the numerator Note that addition is simply xor in GF",
          "hierarchy": "Data SBV Examples Polynomials Polynomials",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "polyDivMod",
          "normalized": "GF-\u003eGF-\u003eSBool",
          "package": "sbv",
          "partial": "Div Mod",
          "signature": "GF-\u003eGF-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Polynomials-Polynomials.html#v:polyDivMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "testGF28",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Polynomials-Polynomials.html#testGF28",
          "type": "function"
        },
        "index": {
          "description": "Queries",
          "hierarchy": "Data SBV Examples Polynomials Polynomials",
          "module": "Data.SBV.Examples.Polynomials.Polynomials",
          "name": "testGF28",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "GF",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Polynomials-Polynomials.html#v:testGF28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSolves the following puzzle:\n\u003c/p\u003e\u003cpre\u003e\n You and a friend pass by a standard coin operated vending machine and you decide to get a candy bar.\n The price is US $0.95, but after checking your pockets you only have a dollar (US $1) and the machine\n only takes coins. You turn to your friend and have this conversation:\n   you: Hey, do you have change for a dollar?\n   friend: Let's see. I have 6 US coins but, although they add up to a US $1.15, I can't break a dollar.\n   you: Huh? Can you make change for half a dollar?\n   friend: No.\n   you: How about a quarter?\n   friend: Nope, and before you ask I cant make change for a dime or nickel either.\n   you: Really? and these six coins are all US government coins currently in production? \n   friend: Yes.\n   you: Well can you just put your coins into the vending machine and buy me a candy bar, and I'll pay you back?\n   friend: Sorry, I would like to but I cant with the coins I have.\n What coins are your friend holding?\n\u003c/pre\u003e\u003cp\u003eTo be fair, the problem has no solution \u003cem\u003emathematically\u003c/em\u003e. But there is a solution when one takes into account that\n vending machines typically do not take the 50 cent coins!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "Coins",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html",
          "type": "module"
        },
        "index": {
          "description": "Solves the following puzzle You and friend pass by standard coin operated vending machine and you decide to get candy bar The price is US but after checking your pockets you only have dollar US and the machine only takes coins You turn to your friend and have this conversation you Hey do you have change for dollar friend Let see have US coins but although they add up to US can break dollar you Huh Can you make change for half dollar friend No you How about quarter friend Nope and before you ask cant make change for dime or nickel either you Really and these six coins are all US government coins currently in production friend Yes you Well can you just put your coins into the vending machine and buy me candy bar and ll pay you back friend Sorry would like to but cant with the coins have What coins are your friend holding To be fair the problem has no solution mathematically But there is solution when one takes into account that vending machines typically do not take the cent coins",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "Coins",
          "package": "sbv",
          "partial": "Coins",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe will represent coins with 16-bit words (more than enough precision for coins).\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "Coin",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#Coin",
          "type": "type"
        },
        "index": {
          "description": "We will represent coins with bit words more than enough precision for coins",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "Coin",
          "package": "sbv",
          "partial": "Coin",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#t:Coin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraint 1: Cannot make change for a dollar.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c1",
          "package": "sbv",
          "signature": "[Coin] -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#c1",
          "type": "function"
        },
        "index": {
          "description": "Constraint Cannot make change for dollar",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c1",
          "normalized": "[Coin]-\u003eSBool",
          "package": "sbv",
          "signature": "[Coin]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#v:c1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraint 2: Cannot make change for half a dollar.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c2",
          "package": "sbv",
          "signature": "[Coin] -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#c2",
          "type": "function"
        },
        "index": {
          "description": "Constraint Cannot make change for half dollar",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c2",
          "normalized": "[Coin]-\u003eSBool",
          "package": "sbv",
          "signature": "[Coin]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#v:c2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraint 3: Cannot make change for a quarter.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c3",
          "package": "sbv",
          "signature": "[Coin] -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#c3",
          "type": "function"
        },
        "index": {
          "description": "Constraint Cannot make change for quarter",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c3",
          "normalized": "[Coin]-\u003eSBool",
          "package": "sbv",
          "signature": "[Coin]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#v:c3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraint 4: Cannot make change for a dime.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c4",
          "package": "sbv",
          "signature": "[Coin] -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#c4",
          "type": "function"
        },
        "index": {
          "description": "Constraint Cannot make change for dime",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c4",
          "normalized": "[Coin]-\u003eSBool",
          "package": "sbv",
          "signature": "[Coin]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#v:c4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraint 5: Cannot make change for a nickel\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c5",
          "package": "sbv",
          "signature": "[Coin] -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#c5",
          "type": "function"
        },
        "index": {
          "description": "Constraint Cannot make change for nickel",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c5",
          "normalized": "[Coin]-\u003eSBool",
          "package": "sbv",
          "signature": "[Coin]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#v:c5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraint 6: Cannot buy the candy either. Here's where we need to have the extra knowledge\n that the vending machines do not take 50 cent coins.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c6",
          "package": "sbv",
          "signature": "[Coin] -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#c6",
          "type": "function"
        },
        "index": {
          "description": "Constraint Cannot buy the candy either Here where we need to have the extra knowledge that the vending machines do not take cent coins",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "c6",
          "normalized": "[Coin]-\u003eSBool",
          "package": "sbv",
          "signature": "[Coin]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#v:c6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all combinations of a sequence of values.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "combinations",
          "package": "sbv",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#combinations",
          "type": "function"
        },
        "index": {
          "description": "Return all combinations of sequence of values",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "combinations",
          "normalized": "[a]-\u003e[[a]]",
          "package": "sbv",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#v:combinations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a coin. The argument Int argument just used for naming the coin. Note that\n we constrain the value to be one of the valid U.S. coin values as we create it.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "mkCoin",
          "package": "sbv",
          "signature": "Int -\u003e Symbolic Coin",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#mkCoin",
          "type": "function"
        },
        "index": {
          "description": "Create coin The argument Int argument just used for naming the coin Note that we constrain the value to be one of the valid U.S coin values as we create it",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "mkCoin",
          "normalized": "Int-\u003eSymbolic Coin",
          "package": "sbv",
          "partial": "Coin",
          "signature": "Int-\u003eSymbolic Coin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#v:mkCoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve the puzzle. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epuzzle\n\u003c/code\u003e\u003c/strong\u003eSatisfiable. Model:\n  c1 = 50 :: SWord16\n  c2 = 25 :: SWord16\n  c3 = 10 :: SWord16\n  c4 = 10 :: SWord16\n  c5 = 10 :: SWord16\n  c6 = 10 :: SWord16\n\u003c/pre\u003e\u003cp\u003ei.e., your friend has 4 dimes, a quarter, and a half dollar.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "puzzle",
          "package": "sbv",
          "signature": "IO SatResult",
          "source": "src/Data-SBV-Examples-Puzzles-Coins.html#puzzle",
          "type": "function"
        },
        "index": {
          "description": "Solve the puzzle We have puzzle Satisfiable Model c1 SWord16 c2 SWord16 c3 SWord16 c4 SWord16 c5 SWord16 c6 SWord16 i.e your friend has dimes quarter and half dollar",
          "hierarchy": "Data SBV Examples Puzzles Coins",
          "module": "Data.SBV.Examples.Puzzles.Coins",
          "name": "puzzle",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Coins.html#v:puzzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConsider the sentence:\n\u003c/p\u003e\u003cpre\u003e\n    In this sentence, the number of occurrences of 0 is _, of 1 is _, of 2 is _,\n    of 3 is _, of 4 is _, of 5 is _, of 6 is _, of 7 is _, of 8 is _, and of 9 is _.\n\u003c/pre\u003e\u003cp\u003eThe puzzle is to fill the blanks with numbers, such that the sentence\n will be correct. There are precisely two solutions to this puzzle, both of\n which are found by SBV successfully.\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Douglas Hofstadter, Metamagical Themes, pg. 27.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.lboro.ac.uk/departments/ma/gallery/selfref/index.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "Counts",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-Counts.html",
          "type": "module"
        },
        "index": {
          "description": "Consider the sentence In this sentence the number of occurrences of is of is of is of is of is of is of is of is of is and of is The puzzle is to fill the blanks with numbers such that the sentence will be correct There are precisely two solutions to this puzzle both of which are found by SBV successfully References Douglas Hofstadter Metamagical Themes pg http www.lboro.ac.uk departments ma gallery selfref index.html",
          "hierarchy": "Data SBV Examples Puzzles Counts",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "Counts",
          "package": "sbv",
          "partial": "Counts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Counts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe will assume each number can be represented by an 8-bit word, i.e., can be at most 128.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "Count",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-Counts.html#Count",
          "type": "type"
        },
        "index": {
          "description": "We will assume each number can be represented by an bit word i.e can be at most",
          "hierarchy": "Data SBV Examples Puzzles Counts",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "Count",
          "package": "sbv",
          "partial": "Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Counts.html#t:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a number, increment the count array depending on the digits of the number\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "count",
          "package": "sbv",
          "signature": "Count -\u003e [Count] -\u003e [Count]",
          "source": "src/Data-SBV-Examples-Puzzles-Counts.html#count",
          "type": "function"
        },
        "index": {
          "description": "Given number increment the count array depending on the digits of the number",
          "hierarchy": "Data SBV Examples Puzzles Counts",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "count",
          "normalized": "Count-\u003e[Count]-\u003e[Count]",
          "package": "sbv",
          "signature": "Count-\u003e[Count]-\u003e[Count]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Counts.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all two known solutions to this puzzle. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecounts\n\u003c/code\u003e\u003c/strong\u003eSolution #1\nIn this sentence, the number of occurrences of 0 is 1, of 1 is 11, of 2 is 2, of 3 is 1, of 4 is 1, of 5 is 1, of 6 is 1, of 7 is 1, of 8 is 1, of 9 is 1.\nSolution #2\nIn this sentence, the number of occurrences of 0 is 1, of 1 is 7, of 2 is 3, of 3 is 2, of 4 is 1, of 5 is 1, of 6 is 1, of 7 is 2, of 8 is 1, of 9 is 1.\nFound: 2 solution(s).\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "counts",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Puzzles-Counts.html#counts",
          "type": "function"
        },
        "index": {
          "description": "Finds all two known solutions to this puzzle We have counts Solution In this sentence the number of occurrences of is of is of is of is of is of is of is of is of is of is Solution In this sentence the number of occurrences of is of is of is of is of is of is of is of is of is of is Found solution",
          "hierarchy": "Data SBV Examples Puzzles Counts",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "counts",
          "normalized": "IO()",
          "package": "sbv",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Counts.html#v:counts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding of the puzzle. The solution is a sequence of 10 numbers\n for the occurrences of the digits such that if we count each digit,\n we find these numbers.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "puzzle",
          "package": "sbv",
          "signature": "[Count] -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Counts.html#puzzle",
          "type": "function"
        },
        "index": {
          "description": "Encoding of the puzzle The solution is sequence of numbers for the occurrences of the digits such that if we count each digit we find these numbers",
          "hierarchy": "Data SBV Examples Puzzles Counts",
          "module": "Data.SBV.Examples.Puzzles.Counts",
          "name": "puzzle",
          "normalized": "[Count]-\u003eSBool",
          "package": "sbv",
          "signature": "[Count]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Counts.html#v:puzzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePuzzle:\n   Spend exactly 100 dollars and buy exactly 100 animals.\n   Dogs cost 15 dollars, cats cost 1 dollar, and mice cost 25 cents each.\n   You have to buy at least one of each.\n   How many of each should you buy?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Puzzles.DogCatMouse",
          "name": "DogCatMouse",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-DogCatMouse.html",
          "type": "module"
        },
        "index": {
          "description": "Puzzle Spend exactly dollars and buy exactly animals Dogs cost dollars cats cost dollar and mice cost cents each You have to buy at least one of each How many of each should you buy",
          "hierarchy": "Data SBV Examples Puzzles DogCatMouse",
          "module": "Data.SBV.Examples.Puzzles.DogCatMouse",
          "name": "DogCatMouse",
          "package": "sbv",
          "partial": "Dog Cat Mouse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-DogCatMouse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints the only solution:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epuzzle\n\u003c/code\u003e\u003c/strong\u003eSolution #1:\n  dog = 3 :: SInteger\n  cat = 41 :: SInteger\n  mouse = 56 :: SInteger\nThis is the only solution.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Puzzles.DogCatMouse",
          "name": "puzzle",
          "package": "sbv",
          "signature": "IO AllSatResult",
          "source": "src/Data-SBV-Examples-Puzzles-DogCatMouse.html#puzzle",
          "type": "function"
        },
        "index": {
          "description": "Prints the only solution puzzle Solution dog SInteger cat SInteger mouse SInteger This is the only solution",
          "hierarchy": "Data SBV Examples Puzzles DogCatMouse",
          "module": "Data.SBV.Examples.Puzzles.DogCatMouse",
          "name": "puzzle",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-DogCatMouse.html#v:puzzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA solution to Project Euler problem #185: \u003ca\u003ehttp://projecteuler.net/index.php?section=problems&id=185\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Puzzles.Euler185",
          "name": "Euler185",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-Euler185.html",
          "type": "module"
        },
        "index": {
          "description": "solution to Project Euler problem http projecteuler.net index.php section problems id",
          "hierarchy": "Data SBV Examples Puzzles Euler185",
          "module": "Data.SBV.Examples.Puzzles.Euler185",
          "name": "Euler185",
          "package": "sbv",
          "partial": "Euler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Euler185.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the problem, note that we check digits are within 0-9 as\n we use 8-bit words to represent them. Otherwise, the constraints are simply\n generated by zipping the alleged solution with each guess, and making sure the\n number of matching digits match what's given in the problem statement.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Euler185",
          "name": "euler185",
          "package": "sbv",
          "signature": "Symbolic SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Euler185.html#euler185",
          "type": "function"
        },
        "index": {
          "description": "Encode the problem note that we check digits are within as we use bit words to represent them Otherwise the constraints are simply generated by zipping the alleged solution with each guess and making sure the number of matching digits match what given in the problem statement",
          "hierarchy": "Data SBV Examples Puzzles Euler185",
          "module": "Data.SBV.Examples.Puzzles.Euler185",
          "name": "euler185",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Euler185.html#v:euler185"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe given guesses and the correct digit counts, encoded as a simple list.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Euler185",
          "name": "guesses",
          "package": "sbv",
          "signature": "[(String, SWord8)]",
          "source": "src/Data-SBV-Examples-Puzzles-Euler185.html#guesses",
          "type": "function"
        },
        "index": {
          "description": "The given guesses and the correct digit counts encoded as simple list",
          "hierarchy": "Data SBV Examples Puzzles Euler185",
          "module": "Data.SBV.Examples.Puzzles.Euler185",
          "name": "guesses",
          "normalized": "[(String,SWord)]",
          "package": "sbv",
          "signature": "[(String,SWord)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Euler185.html#v:guesses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint out the solution nicely. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esolveEuler185\n\u003c/code\u003e\u003c/strong\u003e4640261571849533\nNumber of solutions: 1\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Puzzles.Euler185",
          "name": "solveEuler185",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Puzzles-Euler185.html#solveEuler185",
          "type": "function"
        },
        "index": {
          "description": "Print out the solution nicely We have solveEuler185 Number of solutions",
          "hierarchy": "Data SBV Examples Puzzles Euler185",
          "module": "Data.SBV.Examples.Puzzles.Euler185",
          "name": "solveEuler185",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "Euler",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Euler185.html#v:solveEuler185"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSolves the magic-square puzzle. An NxN magic square is one where all entries\n are filled with numbers from 1 to NxN such that sums of all rows, columns\n and diagonals is the same.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "MagicSquare",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-MagicSquare.html",
          "type": "module"
        },
        "index": {
          "description": "Solves the magic-square puzzle An NxN magic square is one where all entries are filled with numbers from to NxN such that sums of all rows columns and diagonals is the same",
          "hierarchy": "Data SBV Examples Puzzles MagicSquare",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "MagicSquare",
          "package": "sbv",
          "partial": "Magic Square",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-MagicSquare.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe puzzle board is a list of rows\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "Board",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-MagicSquare.html#Board",
          "type": "type"
        },
        "index": {
          "description": "The puzzle board is list of rows",
          "hierarchy": "Data SBV Examples Puzzles MagicSquare",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "Board",
          "package": "sbv",
          "partial": "Board",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-MagicSquare.html#t:Board"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse 32-bit words for elements.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "Elem",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-MagicSquare.html#Elem",
          "type": "type"
        },
        "index": {
          "description": "Use bit words for elements",
          "hierarchy": "Data SBV Examples Puzzles MagicSquare",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "Elem",
          "package": "sbv",
          "partial": "Elem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-MagicSquare.html#t:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA row is a list of elements\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "Row",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-MagicSquare.html#Row",
          "type": "type"
        },
        "index": {
          "description": "row is list of elements",
          "hierarchy": "Data SBV Examples Puzzles MagicSquare",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "Row",
          "package": "sbv",
          "partial": "Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-MagicSquare.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that all elements in a list are within bounds\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "check",
          "package": "sbv",
          "signature": "Elem -\u003e Elem -\u003e [Elem] -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-MagicSquare.html#check",
          "type": "function"
        },
        "index": {
          "description": "Checks that all elements in list are within bounds",
          "hierarchy": "Data SBV Examples Puzzles MagicSquare",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "check",
          "normalized": "Elem-\u003eElem-\u003e[Elem]-\u003eSBool",
          "package": "sbv",
          "signature": "Elem-\u003eElem-\u003e[Elem]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-MagicSquare.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup a list of elements in the sublists of length \u003ccode\u003ei\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "chunk",
          "package": "sbv",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-SBV-Examples-Puzzles-MagicSquare.html#chunk",
          "type": "function"
        },
        "index": {
          "description": "Group list of elements in the sublists of length",
          "hierarchy": "Data SBV Examples Puzzles MagicSquare",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "chunk",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "sbv",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-MagicSquare.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the diagonal of a square matrix\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "diag",
          "package": "sbv",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Data-SBV-Examples-Puzzles-MagicSquare.html#diag",
          "type": "function"
        },
        "index": {
          "description": "Get the diagonal of square matrix",
          "hierarchy": "Data SBV Examples Puzzles MagicSquare",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "diag",
          "normalized": "[[a]]-\u003e[a]",
          "package": "sbv",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-MagicSquare.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a given board is a magic square\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "isMagic",
          "package": "sbv",
          "signature": "Board -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-MagicSquare.html#isMagic",
          "type": "function"
        },
        "index": {
          "description": "Test if given board is magic square",
          "hierarchy": "Data SBV Examples Puzzles MagicSquare",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "isMagic",
          "normalized": "Board-\u003eSBool",
          "package": "sbv",
          "partial": "Magic",
          "signature": "Board-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-MagicSquare.html#v:isMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven \u003ccode\u003en\u003c/code\u003e, magic \u003ccode\u003en\u003c/code\u003e prints all solutions to the \u003ccode\u003enxn\u003c/code\u003e magic square problem\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "magic",
          "package": "sbv",
          "signature": "Int -\u003e IO ()",
          "source": "src/Data-SBV-Examples-Puzzles-MagicSquare.html#magic",
          "type": "function"
        },
        "index": {
          "description": "Given magic prints all solutions to the nxn magic square problem",
          "hierarchy": "Data SBV Examples Puzzles MagicSquare",
          "module": "Data.SBV.Examples.Puzzles.MagicSquare",
          "name": "magic",
          "normalized": "Int-\u003eIO()",
          "package": "sbv",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-MagicSquare.html#v:magic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSolves the NQueens puzzle: \u003ca\u003ehttp://en.wikipedia.org/wiki/Eight_queens_puzzle\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Puzzles.NQueens",
          "name": "NQueens",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-NQueens.html",
          "type": "module"
        },
        "index": {
          "description": "Solves the NQueens puzzle http en.wikipedia.org wiki Eight queens puzzle",
          "hierarchy": "Data SBV Examples Puzzles NQueens",
          "module": "Data.SBV.Examples.Puzzles.NQueens",
          "name": "NQueens",
          "package": "sbv",
          "partial": "NQueens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-NQueens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA solution is a sequence of row-numbers where queens should be placed\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.NQueens",
          "name": "Solution",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-NQueens.html#Solution",
          "type": "type"
        },
        "index": {
          "description": "solution is sequence of row-numbers where queens should be placed",
          "hierarchy": "Data SBV Examples Puzzles NQueens",
          "module": "Data.SBV.Examples.Puzzles.NQueens",
          "name": "Solution",
          "package": "sbv",
          "partial": "Solution",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-NQueens.html#t:Solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that a given solution of \u003ccode\u003en\u003c/code\u003e-queens is valid, i.e., no queen\n captures any other.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.NQueens",
          "name": "isValid",
          "package": "sbv",
          "signature": "Int -\u003e Solution -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-NQueens.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Checks that given solution of queens is valid i.e no queen captures any other",
          "hierarchy": "Data SBV Examples Puzzles NQueens",
          "module": "Data.SBV.Examples.Puzzles.NQueens",
          "name": "isValid",
          "normalized": "Int-\u003eSolution-\u003eSBool",
          "package": "sbv",
          "partial": "Valid",
          "signature": "Int-\u003eSolution-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-NQueens.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven \u003ccode\u003en\u003c/code\u003e, it solves the \u003ccode\u003en-queens\u003c/code\u003e puzzle, printing all possible solutions.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.NQueens",
          "name": "nQueens",
          "package": "sbv",
          "signature": "Int -\u003e IO ()",
          "source": "src/Data-SBV-Examples-Puzzles-NQueens.html#nQueens",
          "type": "function"
        },
        "index": {
          "description": "Given it solves the n-queens puzzle printing all possible solutions",
          "hierarchy": "Data SBV Examples Puzzles NQueens",
          "module": "Data.SBV.Examples.Puzzles.NQueens",
          "name": "nQueens",
          "normalized": "Int-\u003eIO()",
          "package": "sbv",
          "partial": "Queens",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-NQueens.html#v:nQueens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Sudoku solver, quintessential SMT solver example!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "Sudoku",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html",
          "type": "module"
        },
        "index": {
          "description": "The Sudoku solver quintessential SMT solver example",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "Sudoku",
          "package": "sbv",
          "partial": "Sudoku",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Sudoku board is a sequence of 9 rows\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "Board",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#Board",
          "type": "type"
        },
        "index": {
          "description": "Sudoku board is sequence of rows",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "Board",
          "package": "sbv",
          "partial": "Board",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#t:Board"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA puzzle is a pair: First is the number of missing elements, second\n is a function that given that many elements returns the final board.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "Puzzle",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#Puzzle",
          "type": "type"
        },
        "index": {
          "description": "puzzle is pair First is the number of missing elements second is function that given that many elements returns the final board",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "Puzzle",
          "package": "sbv",
          "partial": "Puzzle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#t:Puzzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA row is a sequence of 8-bit words, too large indeed for representing 1-9, but does not harm\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "Row",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#Row",
          "type": "type"
        },
        "index": {
          "description": "row is sequence of bit words too large indeed for representing but does not harm",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "Row",
          "package": "sbv",
          "partial": "Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve them all, this takes a fraction of a second to run for each case\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "allPuzzles",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#allPuzzles",
          "type": "function"
        },
        "index": {
          "description": "Solve them all this takes fraction of second to run for each case",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "allPuzzles",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "Puzzles",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:allPuzzles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a series of elements, make sure they are all different\n and they all are numbers between 1 and 9\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "check",
          "package": "sbv",
          "signature": "[SWord8] -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#check",
          "type": "function"
        },
        "index": {
          "description": "Given series of elements make sure they are all different and they all are numbers between and",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "check",
          "normalized": "[SWord]-\u003eSBool",
          "package": "sbv",
          "signature": "[SWord]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to display results nicely, not really needed, but helps presentation\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "dispSolution",
          "package": "sbv",
          "signature": "Puzzle -\u003e (Bool, [Word8]) -\u003e IO ()",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#dispSolution",
          "type": "function"
        },
        "index": {
          "description": "Helper function to display results nicely not really needed but helps presentation",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "dispSolution",
          "normalized": "Puzzle-\u003e(Bool,[Word])-\u003eIO()",
          "package": "sbv",
          "partial": "Solution",
          "signature": "Puzzle-\u003e(Bool,[Word])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:dispSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an arbitrary good board\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle0",
          "package": "sbv",
          "signature": "Puzzle",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#puzzle0",
          "type": "function"
        },
        "index": {
          "description": "Find an arbitrary good board",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle0",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:puzzle0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random puzzle, found on the internet..\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle1",
          "package": "sbv",
          "signature": "Puzzle",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#puzzle1",
          "type": "function"
        },
        "index": {
          "description": "random puzzle found on the internet",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle1",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:puzzle1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother random puzzle, found on the internet..\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle2",
          "package": "sbv",
          "signature": "Puzzle",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#puzzle2",
          "type": "function"
        },
        "index": {
          "description": "Another random puzzle found on the internet",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle2",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:puzzle2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother random puzzle, found on the internet..\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle3",
          "package": "sbv",
          "signature": "Puzzle",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#puzzle3",
          "type": "function"
        },
        "index": {
          "description": "Another random puzzle found on the internet",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle3",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:puzzle3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccording to the web, this is the toughest \n sudoku puzzle ever.. It even has a name: Al Escargot:\n \u003ca\u003ehttp://zonkedyak.blogspot.com/2006/11/worlds-hardest-sudoku-puzzle-al.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle4",
          "package": "sbv",
          "signature": "Puzzle",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#puzzle4",
          "type": "function"
        },
        "index": {
          "description": "According to the web this is the toughest sudoku puzzle ever It even has name Al Escargot http zonkedyak.blogspot.com worlds-hardest-sudoku-puzzle-al.html",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle4",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:puzzle4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis one has been called diabolical, apparently\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle5",
          "package": "sbv",
          "signature": "Puzzle",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#puzzle5",
          "type": "function"
        },
        "index": {
          "description": "This one has been called diabolical apparently",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle5",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:puzzle5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe following is nefarious according to\n \u003ca\u003ehttp://haskell.org/haskellwiki/Sudoku\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle6",
          "package": "sbv",
          "signature": "Puzzle",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#puzzle6",
          "type": "function"
        },
        "index": {
          "description": "The following is nefarious according to http haskell.org haskellwiki Sudoku",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "puzzle6",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:puzzle6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all solutions to a puzzle\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "solveAll",
          "package": "sbv",
          "signature": "Puzzle -\u003e IO ()",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#solveAll",
          "type": "function"
        },
        "index": {
          "description": "Find all solutions to puzzle",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "solveAll",
          "normalized": "Puzzle-\u003eIO()",
          "package": "sbv",
          "partial": "All",
          "signature": "Puzzle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:solveAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve a given puzzle and print the results\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "sudoku",
          "package": "sbv",
          "signature": "Puzzle -\u003e IO ()",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#sudoku",
          "type": "function"
        },
        "index": {
          "description": "Solve given puzzle and print the results",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "sudoku",
          "normalized": "Puzzle-\u003eIO()",
          "package": "sbv",
          "signature": "Puzzle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:sudoku"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a full Sudoku board, check that it is valid\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "valid",
          "package": "sbv",
          "signature": "Board -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-Sudoku.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Given full Sudoku board check that it is valid",
          "hierarchy": "Data SBV Examples Puzzles Sudoku",
          "module": "Data.SBV.Examples.Puzzles.Sudoku",
          "name": "valid",
          "normalized": "Board-\u003eSBool",
          "package": "sbv",
          "signature": "Board-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-Sudoku.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe famous U2 bridge crossing puzzle: \u003ca\u003ehttp://www.brainj.net/puzzle.php?id=u2\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "U2Bridge",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html",
          "type": "module"
        },
        "index": {
          "description": "The famous U2 bridge crossing puzzle http www.brainj.net puzzle.php id u2",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "U2Bridge",
          "package": "sbv",
          "partial": "Bridge",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA move action is a sequence of triples. The first component is symbolically\n True if only one member crosses. (In this case the third element of the triple\n is irrelevant.) If the first component is (symbolically) False, then both members\n move together\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Actions",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Actions",
          "type": "type"
        },
        "index": {
          "description": "move action is sequence of triples The first component is symbolically True if only one member crosses In this case the third element of the triple is irrelevant If the first component is symbolically False then both members move together",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Actions",
          "package": "sbv",
          "partial": "Actions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#t:Actions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of the flash\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Location",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Location",
          "type": "type"
        },
        "index": {
          "description": "Location of the flash",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Location",
          "package": "sbv",
          "partial": "Location",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA puzzle move is modeled as a state-transformer\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Move",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Move",
          "type": "type"
        },
        "index": {
          "description": "puzzle move is modeled as state-transformer",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Move",
          "package": "sbv",
          "partial": "Move",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#t:Move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach member gets an 8-bit id\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "SU2Member",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#SU2Member",
          "type": "type"
        },
        "index": {
          "description": "Each member gets an bit id",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "SU2Member",
          "package": "sbv",
          "partial": "SU Member",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#t:SU2Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe status of the puzzle after each move\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Status",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Status",
          "type": "data"
        },
        "index": {
          "description": "The status of the puzzle after each move",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Status",
          "package": "sbv",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModel time using 32 bits\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Time",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Time",
          "type": "type"
        },
        "index": {
          "description": "Model time using bits",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Time",
          "package": "sbv",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eU2 band members\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "U2Member",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#U2Member",
          "type": "data"
        },
        "index": {
          "description": "U2 band members",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "U2Member",
          "package": "sbv",
          "partial": "Member",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#t:U2Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Adam",
          "package": "sbv",
          "signature": "Adam",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#U2Member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Adam",
          "package": "sbv",
          "partial": "Adam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:Adam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Bono",
          "package": "sbv",
          "signature": "Bono",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#U2Member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Bono",
          "package": "sbv",
          "partial": "Bono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:Bono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Edge",
          "package": "sbv",
          "signature": "Edge",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#U2Member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Edge",
          "package": "sbv",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Larry",
          "package": "sbv",
          "signature": "Larry",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#U2Member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Larry",
          "package": "sbv",
          "partial": "Larry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:Larry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Status",
          "package": "sbv",
          "signature": "Status",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "Status",
          "package": "sbv",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdam's ID\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "adam",
          "package": "sbv",
          "signature": "SU2Member",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#adam",
          "type": "function"
        },
        "index": {
          "description": "Adam ID",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "adam",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:adam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBono's ID\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "bono",
          "package": "sbv",
          "signature": "SU2Member",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#bono",
          "type": "function"
        },
        "index": {
          "description": "Bono ID",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "bono",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:bono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the time, when only one person crosses\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "bumpTime1",
          "package": "sbv",
          "signature": "SU2Member -\u003e Move ()",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#bumpTime1",
          "type": "function"
        },
        "index": {
          "description": "Increment the time when only one person crosses",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "bumpTime1",
          "normalized": "SU Member-\u003eMove()",
          "package": "sbv",
          "partial": "Time",
          "signature": "SU Member-\u003eMove()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:bumpTime1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the time, when two people cross together\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "bumpTime2",
          "package": "sbv",
          "signature": "SU2Member -\u003e SU2Member -\u003e Move ()",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#bumpTime2",
          "type": "function"
        },
        "index": {
          "description": "Increment the time when two people cross together",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "bumpTime2",
          "normalized": "SU Member-\u003eSU Member-\u003eMove()",
          "package": "sbv",
          "partial": "Time",
          "signature": "SU Member-\u003eSU Member-\u003eMove()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:bumpTime2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrossing times for each member of the band\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "crossTime",
          "package": "sbv",
          "signature": "SU2Member -\u003e Time",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#crossTime",
          "type": "function"
        },
        "index": {
          "description": "Crossing times for each member of the band",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "crossTime",
          "normalized": "SU Member-\u003eTime",
          "package": "sbv",
          "partial": "Time",
          "signature": "SU Member-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:crossTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEdge's ID\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "edge",
          "package": "sbv",
          "signature": "SU2Member",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#edge",
          "type": "function"
        },
        "index": {
          "description": "Edge ID",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "edge",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation of the flash\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "flash",
          "package": "sbv",
          "signature": "Location",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Status",
          "type": "function"
        },
        "index": {
          "description": "location of the flash",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "flash",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:flash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe represent this side of the bridge as \u003ccode\u003e\u003ca\u003ehere\u003c/a\u003e\u003c/code\u003e, and arbitrarily as \u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "here",
          "package": "sbv",
          "signature": "Location",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#here",
          "type": "function"
        },
        "index": {
          "description": "We represent this side of the bridge as here and arbitrarily as false",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "here",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:here"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this a valid person?\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "isU2Member",
          "package": "sbv",
          "signature": "SU2Member -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#isU2Member",
          "type": "function"
        },
        "index": {
          "description": "Is this valid person",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "isU2Member",
          "normalized": "SU Member-\u003eSBool",
          "package": "sbv",
          "partial": "Member",
          "signature": "SU Member-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:isU2Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a given sequence of actions is valid, i.e., they must all\n cross the bridge according to the rules and in less than 17 seconds\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "isValid",
          "package": "sbv",
          "signature": "Actions -\u003e SBool",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Check if given sequence of actions is valid i.e they must all cross the bridge according to the rules and in less than seconds",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "isValid",
          "normalized": "Actions-\u003eSBool",
          "package": "sbv",
          "partial": "Valid",
          "signature": "Actions-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation of Adam\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "lAdam",
          "package": "sbv",
          "signature": "Location",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Status",
          "type": "function"
        },
        "index": {
          "description": "location of Adam",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "lAdam",
          "package": "sbv",
          "partial": "Adam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:lAdam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation of Bono\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "lBono",
          "package": "sbv",
          "signature": "Location",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Status",
          "type": "function"
        },
        "index": {
          "description": "location of Bono",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "lBono",
          "package": "sbv",
          "partial": "Bono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:lBono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation of Edge\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "lEdge",
          "package": "sbv",
          "signature": "Location",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Status",
          "type": "function"
        },
        "index": {
          "description": "location of Edge",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "lEdge",
          "package": "sbv",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:lEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation of Larry\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "lLarry",
          "package": "sbv",
          "signature": "Location",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Status",
          "type": "function"
        },
        "index": {
          "description": "location of Larry",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "lLarry",
          "package": "sbv",
          "partial": "Larry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:lLarry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLarry's ID\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "larry",
          "package": "sbv",
          "signature": "SU2Member",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#larry",
          "type": "function"
        },
        "index": {
          "description": "Larry ID",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "larry",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:larry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove one member, remembering to take the flash\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "move1",
          "package": "sbv",
          "signature": "SU2Member -\u003e Move ()",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#move1",
          "type": "function"
        },
        "index": {
          "description": "Move one member remembering to take the flash",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "move1",
          "normalized": "SU Member-\u003eMove()",
          "package": "sbv",
          "signature": "SU Member-\u003eMove()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:move1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove two members, again with the flash\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "move2",
          "package": "sbv",
          "signature": "SU2Member -\u003e SU2Member -\u003e Move ()",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#move2",
          "type": "function"
        },
        "index": {
          "description": "Move two members again with the flash",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "move2",
          "normalized": "SU Member-\u003eSU Member-\u003eMove()",
          "package": "sbv",
          "signature": "SU Member-\u003eSU Member-\u003eMove()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:move2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the state via an accessor function\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "peek",
          "package": "sbv",
          "signature": "(Status -\u003e a) -\u003e Move a",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Read the state via an accessor function",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "peek",
          "normalized": "(Status-\u003ea)-\u003eMove a",
          "package": "sbv",
          "signature": "(Status-\u003ea)-\u003eMove a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a sequence of given actions.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "run",
          "package": "sbv",
          "signature": "Actions -\u003e Move [Status]",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run sequence of given actions",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "run",
          "normalized": "Actions-\u003eMove[Status]",
          "package": "sbv",
          "signature": "Actions-\u003eMove[Status]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if there is a solution that has precisely \u003ccode\u003en\u003c/code\u003e steps\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "solveN",
          "package": "sbv",
          "signature": "Int -\u003e IO Bool",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#solveN",
          "type": "function"
        },
        "index": {
          "description": "See if there is solution that has precisely steps",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "solveN",
          "normalized": "Int-\u003eIO Bool",
          "package": "sbv",
          "signature": "Int-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:solveN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve the U2-bridge crossing puzzle, starting by testing solutions with\n increasing number of steps, until we find one. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esolveU2\n\u003c/code\u003e\u003c/strong\u003eChecking for solutions with 1 move.\nChecking for solutions with 2 moves.\nChecking for solutions with 3 moves.\nChecking for solutions with 4 moves.\nChecking for solutions with 5 moves.\nSolution #1: \n 0 --\u003e Edge, Bono\n 2 \u003c-- Edge\n 4 --\u003e Larry, Adam\n14 \u003c-- Bono\n15 --\u003e Edge, Bono\nTotal time: 17\nSolution #2: \n 0 --\u003e Edge, Bono\n 2 \u003c-- Bono\n 3 --\u003e Larry, Adam\n13 \u003c-- Edge\n15 --\u003e Edge, Bono\nTotal time: 17\nFound: 2 solutions with 5 moves.\n\u003c/pre\u003e\u003cp\u003eFinding all possible solutions to the puzzle.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "solveU2",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#solveU2",
          "type": "function"
        },
        "index": {
          "description": "Solve the U2-bridge crossing puzzle starting by testing solutions with increasing number of steps until we find one We have solveU2 Checking for solutions with move Checking for solutions with moves Checking for solutions with moves Checking for solutions with moves Checking for solutions with moves Solution Edge Bono Edge Larry Adam Bono Edge Bono Total time Solution Edge Bono Bono Larry Adam Edge Edge Bono Total time Found solutions with moves Finding all possible solutions to the puzzle",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "solveU2",
          "normalized": "IO()",
          "package": "sbv",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:solveU2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart configuration, time elapsed is 0 and everybody is \u003ccode\u003e\u003ca\u003ehere\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "start",
          "package": "sbv",
          "signature": "Status",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#start",
          "type": "function"
        },
        "index": {
          "description": "Start configuration time elapsed is and everybody is here",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "start",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe represent other side of the bridge as \u003ccode\u003e\u003ca\u003ethere\u003c/a\u003e\u003c/code\u003e, and arbitrarily as \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "there",
          "package": "sbv",
          "signature": "Location",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#there",
          "type": "function"
        },
        "index": {
          "description": "We represent other side of the bridge as there and arbitrarily as true",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "there",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:there"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelapsed time\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "time",
          "package": "sbv",
          "signature": "Time",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#Status",
          "type": "function"
        },
        "index": {
          "description": "elapsed time",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "time",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic version of \u003ccode\u003ewhen\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "whenS",
          "package": "sbv",
          "signature": "SBool -\u003e Move () -\u003e Move ()",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#whenS",
          "type": "function"
        },
        "index": {
          "description": "Symbolic version of when",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "whenS",
          "normalized": "SBool-\u003eMove()-\u003eMove()",
          "package": "sbv",
          "signature": "SBool-\u003eMove()-\u003eMove()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:whenS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an arbitrary member, return his location\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "whereIs",
          "package": "sbv",
          "signature": "SU2Member -\u003e Move SBool",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#whereIs",
          "type": "function"
        },
        "index": {
          "description": "Given an arbitrary member return his location",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "whereIs",
          "normalized": "SU Member-\u003eMove SBool",
          "package": "sbv",
          "partial": "Is",
          "signature": "SU Member-\u003eMove SBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:whereIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransferring the flash to the other side\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "xferFlash",
          "package": "sbv",
          "signature": "Move ()",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#xferFlash",
          "type": "function"
        },
        "index": {
          "description": "Transferring the flash to the other side",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "xferFlash",
          "normalized": "Move()",
          "package": "sbv",
          "partial": "Flash",
          "signature": "Move()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:xferFlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransferring a person to the other side\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "xferPerson",
          "package": "sbv",
          "signature": "SU2Member -\u003e Move ()",
          "source": "src/Data-SBV-Examples-Puzzles-U2Bridge.html#xferPerson",
          "type": "function"
        },
        "index": {
          "description": "Transferring person to the other side",
          "hierarchy": "Data SBV Examples Puzzles U2Bridge",
          "module": "Data.SBV.Examples.Puzzles.U2Bridge",
          "name": "xferPerson",
          "normalized": "SU Member-\u003eMove()",
          "package": "sbv",
          "partial": "Person",
          "signature": "SU Member-\u003eMove()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Puzzles-U2Bridge.html#v:xferPerson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormalizes and proves the following theorem, about arithmetic,\n uninterpreted functions, and arrays. (For reference, see \u003ca\u003ehttp://research.microsoft.com/en-us/um/redmond/projects/z3/fmcad06-slides.pdf\u003c/a\u003e\n slide number 24):\n\u003c/p\u003e\u003cpre\u003e\n    x + 2 = y  implies  f (read (write (a, x, 3), y - 2)) = f (y - x + 1)\n\u003c/pre\u003e\u003cp\u003eWe interpret the types as follows (other interpretations certainly possible):\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003ex\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eSWord32\u003c/a\u003e\u003c/code\u003e (32-bit unsigned address)\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ey\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eSWord32\u003c/a\u003e\u003c/code\u003e (32-bit unsigned address)\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ea\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e An array, indexed by 32-bit addresses, returning 32-bit unsigned integers\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ef\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e An uninterpreted function of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSWord32\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eSWord64\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe function \u003ccode\u003eread\u003c/code\u003e and \u003ccode\u003ewrite\u003c/code\u003e are usual array operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "AUF",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-AUF.html",
          "type": "module"
        },
        "index": {
          "description": "Formalizes and proves the following theorem about arithmetic uninterpreted functions and arrays For reference see http research.microsoft.com en-us um redmond projects z3 fmcad06-slides.pdf slide number implies read write We interpret the types as follows other interpretations certainly possible SWord32 bit unsigned address SWord32 bit unsigned address An array indexed by bit addresses returning bit unsigned integers An uninterpreted function of type SWord32 SWord64 The function read and write are usual array operations",
          "hierarchy": "Data SBV Examples Uninterpreted AUF",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "AUF",
          "package": "sbv",
          "partial": "AUF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-AUF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe array type, takes symbolic 32-bit unsigned indexes\n and stores 32-bit unsigned symbolic values. These are\n functional arrays where reading before writing a cell\n throws an exception.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "A",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-AUF.html#A",
          "type": "type"
        },
        "index": {
          "description": "The array type takes symbolic bit unsigned indexes and stores bit unsigned symbolic values These are functional arrays where reading before writing cell throws an exception",
          "hierarchy": "Data SBV Examples Uninterpreted AUF",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "A",
          "package": "sbv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-AUF.html#t:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis version directly uses SMT-arrays and hence does not need an initializer.\n Reading an element before writing to it returns an arbitrary value.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "B",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-AUF.html#B",
          "type": "type"
        },
        "index": {
          "description": "This version directly uses SMT-arrays and hence does not need an initializer Reading an element before writing to it returns an arbitrary value",
          "hierarchy": "Data SBV Examples Uninterpreted AUF",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "B",
          "package": "sbv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-AUF.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUninterpreted function in the theorem\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "f",
          "package": "sbv",
          "signature": "SWord32 -\u003e SWord64",
          "source": "src/Data-SBV-Examples-Uninterpreted-AUF.html#f",
          "type": "function"
        },
        "index": {
          "description": "Uninterpreted function in the theorem",
          "hierarchy": "Data SBV Examples Uninterpreted AUF",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "f",
          "normalized": "SWord-\u003eSWord",
          "package": "sbv",
          "signature": "SWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-AUF.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints Q.E.D. when run, as expected\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eproveThm1\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "proveThm1",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Uninterpreted-AUF.html#proveThm1",
          "type": "function"
        },
        "index": {
          "description": "Prints Q.E.D when run as expected proveThm1 Q.E.D",
          "hierarchy": "Data SBV Examples Uninterpreted AUF",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "proveThm1",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "Thm",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-AUF.html#v:proveThm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints Q.E.D. when run, as expected:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eproveThm2\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "proveThm2",
          "package": "sbv",
          "signature": "IO ()",
          "source": "src/Data-SBV-Examples-Uninterpreted-AUF.html#proveThm2",
          "type": "function"
        },
        "index": {
          "description": "Prints Q.E.D when run as expected proveThm2 Q.E.D",
          "hierarchy": "Data SBV Examples Uninterpreted AUF",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "proveThm2",
          "normalized": "IO()",
          "package": "sbv",
          "partial": "Thm",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-AUF.html#v:proveThm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrectness theorem. We state it for all values of \u003ccode\u003ex\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e, and \n the array \u003ccode\u003ea\u003c/code\u003e. We also take an arbitrary initializer for the array.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "thm1",
          "package": "sbv",
          "signature": "SWord32 -\u003e SWord32 -\u003e A -\u003e SWord32 -\u003e SBool",
          "source": "src/Data-SBV-Examples-Uninterpreted-AUF.html#thm1",
          "type": "function"
        },
        "index": {
          "description": "Correctness theorem We state it for all values of and the array We also take an arbitrary initializer for the array",
          "hierarchy": "Data SBV Examples Uninterpreted AUF",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "thm1",
          "normalized": "SWord-\u003eSWord-\u003eA-\u003eSWord-\u003eSBool",
          "package": "sbv",
          "signature": "SWord-\u003eSWord-\u003eA-\u003eSWord-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-AUF.html#v:thm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ethm1\u003c/a\u003e\u003c/code\u003e, except we don't need an initializer with the \u003ccode\u003e\u003ca\u003eSArray\u003c/a\u003e\u003c/code\u003e model.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "thm2",
          "package": "sbv",
          "signature": "SWord32 -\u003e SWord32 -\u003e B -\u003e SBool",
          "source": "src/Data-SBV-Examples-Uninterpreted-AUF.html#thm2",
          "type": "function"
        },
        "index": {
          "description": "Same as thm1 except we don need an initializer with the SArray model",
          "hierarchy": "Data SBV Examples Uninterpreted AUF",
          "module": "Data.SBV.Examples.Uninterpreted.AUF",
          "name": "thm2",
          "normalized": "SWord-\u003eSWord-\u003eB-\u003eSBool",
          "package": "sbv",
          "signature": "SWord-\u003eSWord-\u003eB-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-AUF.html#v:thm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstrates uninterpreted sorts and how they can be used for deduction.\n This example is inspired by the discussion at \u003ca\u003ehttp://stackoverflow.com/questions/10635783/using-axioms-for-deductions-in-z3\u003c/a\u003e,\n essentially showing how to show the required deduction using SBV.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "Deduce",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html",
          "type": "module"
        },
        "index": {
          "description": "Demonstrates uninterpreted sorts and how they can be used for deduction This example is inspired by the discussion at http stackoverflow.com questions using-axioms-for-deductions-in-z3 essentially showing how to show the required deduction using SBV",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "Deduce",
          "package": "sbv",
          "partial": "Deduce",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe uninterpreted sort \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e, corresponding to the carrier.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "B",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#B",
          "type": "data"
        },
        "index": {
          "description": "The uninterpreted sort corresponding to the carrier",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "B",
          "package": "sbv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy shortcut for the type of symbolic values over \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "SB",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#SB",
          "type": "type"
        },
        "index": {
          "description": "Handy shortcut for the type of symbolic values over",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "SB",
          "package": "sbv",
          "partial": "SB",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#t:SB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "B",
          "package": "sbv",
          "signature": "B",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "B",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUninterpreted logical connective \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "and",
          "package": "sbv",
          "signature": "SB -\u003e SB -\u003e SB",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#and",
          "type": "function"
        },
        "index": {
          "description": "Uninterpreted logical connective and",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "and",
          "normalized": "SB-\u003eSB-\u003eSB",
          "package": "sbv",
          "signature": "SB-\u003eSB-\u003eSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistributivity of OR over AND, as an axiom in terms of\n the uninterpreted functions we have introduced. Note how\n variables range over the uninterpreted sort \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "ax1",
          "package": "sbv",
          "signature": "[String]",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#ax1",
          "type": "function"
        },
        "index": {
          "description": "Distributivity of OR over AND as an axiom in terms of the uninterpreted functions we have introduced Note how variables range over the uninterpreted sort",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "ax1",
          "normalized": "[String]",
          "package": "sbv",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#v:ax1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne of De Morgan's laws, again as an axiom in terms\n of our uninterpeted logical connectives.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "ax2",
          "package": "sbv",
          "signature": "[String]",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#ax2",
          "type": "function"
        },
        "index": {
          "description": "One of De Morgan laws again as an axiom in terms of our uninterpeted logical connectives",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "ax2",
          "normalized": "[String]",
          "package": "sbv",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#v:ax2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble negation axiom, similar to the above.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "ax3",
          "package": "sbv",
          "signature": "[String]",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#ax3",
          "type": "function"
        },
        "index": {
          "description": "Double negation axiom similar to the above",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "ax3",
          "normalized": "[String]",
          "package": "sbv",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#v:ax3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUninterpreted logical connective \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "not",
          "package": "sbv",
          "signature": "SB -\u003e SB",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#not",
          "type": "function"
        },
        "index": {
          "description": "Uninterpreted logical connective not",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "not",
          "normalized": "SB-\u003eSB",
          "package": "sbv",
          "signature": "SB-\u003eSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUninterpreted logical connective \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "or",
          "package": "sbv",
          "signature": "SB -\u003e SB -\u003e SB",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#or",
          "type": "function"
        },
        "index": {
          "description": "Uninterpreted logical connective or",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "or",
          "normalized": "SB-\u003eSB-\u003eSB",
          "package": "sbv",
          "signature": "SB-\u003eSB-\u003eSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProves the equivalence \u003ccode\u003eNOT (p OR (q AND r)) == (NOT p AND NOT q) OR (NOT p AND NOT r)\u003c/code\u003e,\n following from the axioms we have specified above. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etest\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "test",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Uninterpreted-Deduce.html#test",
          "type": "function"
        },
        "index": {
          "description": "Proves the equivalence NOT OR AND NOT AND NOT OR NOT AND NOT following from the axioms we have specified above We have test Q.E.D",
          "hierarchy": "Data SBV Examples Uninterpreted Deduce",
          "module": "Data.SBV.Examples.Uninterpreted.Deduce",
          "name": "test",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Deduce.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstrates function counter-examples\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "Function",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-Function.html",
          "type": "module"
        },
        "index": {
          "description": "Demonstrates function counter-examples",
          "hierarchy": "Data SBV Examples Uninterpreted Function",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "Function",
          "package": "sbv",
          "partial": "Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Function.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn uninterpreted function\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "f",
          "package": "sbv",
          "signature": "SWord8 -\u003e SWord8 -\u003e SWord16",
          "source": "src/Data-SBV-Examples-Uninterpreted-Function.html#f",
          "type": "function"
        },
        "index": {
          "description": "An uninterpreted function",
          "hierarchy": "Data SBV Examples Uninterpreted Function",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "f",
          "normalized": "SWord-\u003eSWord-\u003eSWord",
          "package": "sbv",
          "signature": "SWord-\u003eSWord-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Function.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that \u003ccode\u003ef\u003c/code\u003e is commutative; which is not necessarily true!\n Indeed, the SMT solver returns a counter-example function that is\n not commutative. (Note that we have to use Yices as Z3 function\n counterexamples are not yet supported by sbv.) We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eproveWith yicesSMT09 $ forAll [\"x\", \"y\"] thmBad\n\u003c/code\u003e\u003c/strong\u003eFalsifiable. Counter-example:\n  x = 0 :: SWord8\n  y = 128 :: SWord8\n  -- uninterpreted: f\n       f 128 0 = 32768\n       f _   _ = 0\n\u003c/pre\u003e\u003cp\u003eNote how the counterexample function \u003ccode\u003ef\u003c/code\u003e returned by Yices violates commutativity;\n thus providing evidence that the asserted theorem is not valid.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "thmBad",
          "package": "sbv",
          "signature": "SWord8 -\u003e SWord8 -\u003e SBool",
          "source": "src/Data-SBV-Examples-Uninterpreted-Function.html#thmBad",
          "type": "function"
        },
        "index": {
          "description": "Asserts that is commutative which is not necessarily true Indeed the SMT solver returns counter-example function that is not commutative Note that we have to use Yices as Z3 function counterexamples are not yet supported by sbv We have proveWith yicesSMT09 forAll thmBad Falsifiable Counter-example SWord8 SWord8 uninterpreted Note how the counterexample function returned by Yices violates commutativity thus providing evidence that the asserted theorem is not valid",
          "hierarchy": "Data SBV Examples Uninterpreted Function",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "thmBad",
          "normalized": "SWord-\u003eSWord-\u003eSBool",
          "package": "sbv",
          "partial": "Bad",
          "signature": "SWord-\u003eSWord-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Function.html#v:thmBad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that \u003ccode\u003ef x z == f (y+2) z\u003c/code\u003e whenever \u003ccode\u003ex == y+2\u003c/code\u003e. Naturally correct:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove thmGood\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "thmGood",
          "package": "sbv",
          "signature": "SWord8 -\u003e SWord8 -\u003e SWord8 -\u003e SBool",
          "source": "src/Data-SBV-Examples-Uninterpreted-Function.html#thmGood",
          "type": "function"
        },
        "index": {
          "description": "Asserts that whenever Naturally correct prove thmGood Q.E.D",
          "hierarchy": "Data SBV Examples Uninterpreted Function",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "thmGood",
          "normalized": "SWord-\u003eSWord-\u003eSWord-\u003eSBool",
          "package": "sbv",
          "partial": "Good",
          "signature": "SWord-\u003eSWord-\u003eSWord-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Function.html#v:thmGood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOld version of Yices, which supports nice output for uninterpreted functions.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "yicesSMT09",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Examples-Uninterpreted-Function.html#yicesSMT09",
          "type": "function"
        },
        "index": {
          "description": "Old version of Yices which supports nice output for uninterpreted functions",
          "hierarchy": "Data SBV Examples Uninterpreted Function",
          "module": "Data.SBV.Examples.Uninterpreted.Function",
          "name": "yicesSMT09",
          "package": "sbv",
          "partial": "SMT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Function.html#v:yicesSMT09"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProves (instances of) Shannon's expansion theorem and other relevant\n facts.  See: \u003ca\u003ehttp://en.wikipedia.org/wiki/Shannon's_expansion\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "Shannon",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html",
          "type": "module"
        },
        "index": {
          "description": "Proves instances of Shannon expansion theorem and other relevant facts See http en.wikipedia.org wiki Shannon expansion",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "Shannon",
          "package": "sbv",
          "partial": "Shannon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA binary boolean function\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "Binary",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#Binary",
          "type": "type"
        },
        "index": {
          "description": "binary boolean function",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "Binary",
          "package": "sbv",
          "partial": "Binary",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#t:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ternary boolean function\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "Ternary",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#Ternary",
          "type": "type"
        },
        "index": {
          "description": "ternary boolean function",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "Ternary",
          "package": "sbv",
          "partial": "Ternary",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#t:Ternary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputing the derivative of a boolean function (boolean difference).\n Defined as exclusive-or of Shannon cofactors with respect to that\n variable.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "derivative",
          "package": "sbv",
          "signature": "Ternary -\u003e Binary",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#derivative",
          "type": "function"
        },
        "index": {
          "description": "Computing the derivative of boolean function boolean difference Defined as exclusive-or of Shannon cofactors with respect to that variable",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "derivative",
          "normalized": "Ternary-\u003eBinary",
          "package": "sbv",
          "signature": "Ternary-\u003eBinary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:derivative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential quantification of a boolean function with respect to a variable.\n Simply defined as the conjunction of the Shannon cofactors.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "existential",
          "package": "sbv",
          "signature": "Ternary -\u003e Binary",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#existential",
          "type": "function"
        },
        "index": {
          "description": "Existential quantification of boolean function with respect to variable Simply defined as the conjunction of the Shannon cofactors",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "existential",
          "normalized": "Ternary-\u003eBinary",
          "package": "sbv",
          "signature": "Ternary-\u003eBinary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:existential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow that existential quantification is really meaningful: That is, if the existential\n quantification with respect to a variable is True, then one of the cofactors must be true for\n those arguments. Again, this is a trivial theorem if you think about it for a moment, but\n we will just let SBV prove it:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eexistsOK\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "existsOK",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#existsOK",
          "type": "function"
        },
        "index": {
          "description": "Show that existential quantification is really meaningful That is if the existential quantification with respect to variable is True then one of the cofactors must be true for those arguments Again this is trivial theorem if you think about it for moment but we will just let SBV prove it existsOK Q.E.D",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "existsOK",
          "package": "sbv",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:existsOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegative Shannon cofactor of a boolean function, with\n respect to its first argument\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "neg",
          "package": "sbv",
          "signature": "(SBool -\u003e a) -\u003e a",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#neg",
          "type": "function"
        },
        "index": {
          "description": "Negative Shannon cofactor of boolean function with respect to its first argument",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "neg",
          "normalized": "(SBool-\u003ea)-\u003ea",
          "package": "sbv",
          "signature": "(SBool-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe no-wiggle theorem: If the derivative of a function with respect to\n a variable is constant False, then that variable does not \u003ca\u003ewiggle\u003c/a\u003e the\n function; i.e., any changes to it won't affect the result of the function.\n In fact, we have an equivalence: The variable only changes the\n result of the function iff the derivative with respect to it is not False:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enoWiggle\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "noWiggle",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#noWiggle",
          "type": "function"
        },
        "index": {
          "description": "The no-wiggle theorem If the derivative of function with respect to variable is constant False then that variable does not wiggle the function i.e any changes to it won affect the result of the function In fact we have an equivalence The variable only changes the result of the function iff the derivative with respect to it is not False noWiggle Q.E.D",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "noWiggle",
          "package": "sbv",
          "partial": "Wiggle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:noWiggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePositive Shannon cofactor of a boolean function, with\n respect to its first argument\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "pos",
          "package": "sbv",
          "signature": "(SBool -\u003e a) -\u003e a",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#pos",
          "type": "function"
        },
        "index": {
          "description": "Positive Shannon cofactor of boolean function with respect to its first argument",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "pos",
          "normalized": "(SBool-\u003ea)-\u003ea",
          "package": "sbv",
          "signature": "(SBool-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShannon's expansion over the first argument of a function. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshannon\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "shannon",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#shannon",
          "type": "function"
        },
        "index": {
          "description": "Shannon expansion over the first argument of function We have shannon Q.E.D",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "shannon",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:shannon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative form of Shannon's expansion over the first argument of a function. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshannon2\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "shannon2",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#shannon2",
          "type": "function"
        },
        "index": {
          "description": "Alternative form of Shannon expansion over the first argument of function We have shannon2 Q.E.D",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "shannon2",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:shannon2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow that universal quantification is really meaningful: That is, if the universal\n quantification with respect to a variable is True, then both cofactors are true for\n those arguments. Of course, this is a trivial theorem if you think about it for a\n moment, or you can just let SBV prove it for you:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunivOK\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "univOK",
          "package": "sbv",
          "signature": "IO ThmResult",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#univOK",
          "type": "function"
        },
        "index": {
          "description": "Show that universal quantification is really meaningful That is if the universal quantification with respect to variable is True then both cofactors are true for those arguments Of course this is trivial theorem if you think about it for moment or you can just let SBV prove it for you univOK Q.E.D",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "univOK",
          "package": "sbv",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:univOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniversal quantification of a boolean function with respect to a variable.\n Simply defined as the conjunction of the Shannon cofactors.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "universal",
          "package": "sbv",
          "signature": "Ternary -\u003e Binary",
          "source": "src/Data-SBV-Examples-Uninterpreted-Shannon.html#universal",
          "type": "function"
        },
        "index": {
          "description": "Universal quantification of boolean function with respect to variable Simply defined as the conjunction of the Shannon cofactors",
          "hierarchy": "Data SBV Examples Uninterpreted Shannon",
          "module": "Data.SBV.Examples.Uninterpreted.Shannon",
          "name": "universal",
          "normalized": "Ternary-\u003eBinary",
          "package": "sbv",
          "signature": "Ternary-\u003eBinary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Shannon.html#v:universal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstrates uninterpreted sorts, together with axioms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "Sort",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-Sort.html",
          "type": "module"
        },
        "index": {
          "description": "Demonstrates uninterpreted sorts together with axioms",
          "hierarchy": "Data SBV Examples Uninterpreted Sort",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "Sort",
          "package": "sbv",
          "partial": "Sort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Sort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new data-type that we expect to use in an uninterpreted fashion\n in the backend SMT solver. Note the custom \u003ccode\u003ederiving\u003c/code\u003e clause, which\n takes care of most of the boilerplate.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "Q",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-Sort.html#Q",
          "type": "data"
        },
        "index": {
          "description": "new data-type that we expect to use in an uninterpreted fashion in the backend SMT solver Note the custom deriving clause which takes care of most of the boilerplate",
          "hierarchy": "Data SBV Examples Uninterpreted Sort",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "Q",
          "package": "sbv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Sort.html#t:Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "Q",
          "package": "sbv",
          "signature": "Q",
          "source": "src/Data-SBV-Examples-Uninterpreted-Sort.html#Q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Uninterpreted Sort",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "Q",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Sort.html#v:Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an uninterpreted function that works over Q's\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "f",
          "package": "sbv",
          "signature": "SBV Q -\u003e SBV Q",
          "source": "src/Data-SBV-Examples-Uninterpreted-Sort.html#f",
          "type": "function"
        },
        "index": {
          "description": "Declare an uninterpreted function that works over",
          "hierarchy": "Data SBV Examples Uninterpreted Sort",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "f",
          "normalized": "SBV Q-\u003eSBV Q",
          "package": "sbv",
          "signature": "SBV Q-\u003eSBV Q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Sort.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA satisfiable example, stating that there is an element of the domain\n \u003ccode\u003e\u003ca\u003eQ\u003c/a\u003e\u003c/code\u003e such that \u003ccode\u003e\u003ca\u003ef\u003c/a\u003e\u003c/code\u003e returns a different element. Note that this is valid only\n when the domain \u003ccode\u003e\u003ca\u003eQ\u003c/a\u003e\u003c/code\u003e has at least two elements. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003et1\n\u003c/code\u003e\u003c/strong\u003eSatisfiable. Model:\n  x = Q!val!0 :: Q\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "t1",
          "package": "sbv",
          "signature": "IO SatResult",
          "source": "src/Data-SBV-Examples-Uninterpreted-Sort.html#t1",
          "type": "function"
        },
        "index": {
          "description": "satisfiable example stating that there is an element of the domain such that returns different element Note that this is valid only when the domain has at least two elements We have t1 Satisfiable Model val",
          "hierarchy": "Data SBV Examples Uninterpreted Sort",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "t1",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Sort.html#v:t1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a variant on the first example, except we also add an axiom\n for the sort, stating that the domain \u003ccode\u003e\u003ca\u003eQ\u003c/a\u003e\u003c/code\u003e has only one element. In this case\n the problem naturally becomes unsat. We have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003et2\n\u003c/code\u003e\u003c/strong\u003eUnsatisfiable\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "t2",
          "package": "sbv",
          "signature": "IO SatResult",
          "source": "src/Data-SBV-Examples-Uninterpreted-Sort.html#t2",
          "type": "function"
        },
        "index": {
          "description": "This is variant on the first example except we also add an axiom for the sort stating that the domain has only one element In this case the problem naturally becomes unsat We have t2 Unsatisfiable",
          "hierarchy": "Data SBV Examples Uninterpreted Sort",
          "module": "Data.SBV.Examples.Uninterpreted.Sort",
          "name": "t2",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-Sort.html#v:t2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstrates uninterpreted sorts and how all-sat behaves for them.\n Thanks to Eric Seidel for the idea.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "UISortAllSat",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-UISortAllSat.html",
          "type": "module"
        },
        "index": {
          "description": "Demonstrates uninterpreted sorts and how all-sat behaves for them Thanks to Eric Seidel for the idea",
          "hierarchy": "Data SBV Examples Uninterpreted UISortAllSat",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "UISortAllSat",
          "package": "sbv",
          "partial": "UISort All Sat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ca\u003elist-like\u003c/a\u003e data type, but one we plan to uninterpret at the SMT level.\n The actual shape is really immaterial for us, but could be used as a proxy\n to generate test cases or explore data-space in some other part of a program.\n Note that we neither rely on the shape of this data, nor need the actual\n constructors.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "L",
          "package": "sbv",
          "source": "src/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#L",
          "type": "data"
        },
        "index": {
          "description": "list-like data type but one we plan to uninterpret at the SMT level The actual shape is really immaterial for us but could be used as proxy to generate test cases or explore data-space in some other part of program Note that we neither rely on the shape of this data nor need the actual constructors",
          "hierarchy": "Data SBV Examples Uninterpreted UISortAllSat",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "L",
          "package": "sbv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "Cons",
          "package": "sbv",
          "signature": "Cons Int L",
          "source": "src/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Uninterpreted UISortAllSat",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "Cons",
          "package": "sbv",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "Nil",
          "package": "sbv",
          "signature": "Nil",
          "source": "src/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Examples Uninterpreted UISortAllSat",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "Nil",
          "package": "sbv",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn uninterpreted \u003ca\u003eclassify\u003c/a\u003e function. Really, we only care about\n the fact that such a function exists, not what it does.\n\u003c/p\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "classify",
          "package": "sbv",
          "signature": "SBV L -\u003e SInteger",
          "source": "src/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#classify",
          "type": "function"
        },
        "index": {
          "description": "An uninterpreted classify function Really we only care about the fact that such function exists not what it does",
          "hierarchy": "Data SBV Examples Uninterpreted UISortAllSat",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "classify",
          "normalized": "SBV L-\u003eSInteger",
          "package": "sbv",
          "signature": "SBV L-\u003eSInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#v:classify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormulate a query that essentially asserts a cardinality constraint on\n the uninterpreted sort \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e. The goal is to say there are precisely 3\n such things, as it might be the case. We manage this by declaring four\n elements, and asserting that for a free variable of this sort, the\n shape of the data matches one of these three instances. That is, we\n assert that all the instances of the data \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e can be classified into\n 3 equivalence classes. Then, allSat returns all the possible instances,\n which of course are all uninterpreted.\n\u003c/p\u003e\u003cp\u003eAs expected, we have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egenLs\n\u003c/code\u003e\u003c/strong\u003eSolution #1:\n  l = L!val!0 :: L\n  l0 = L!val!0 :: L\n  l1 = L!val!1 :: L\n  l2 = L!val!2 :: L\nSolution #2:\n  l = L!val!2 :: L\n  l0 = L!val!0 :: L\n  l1 = L!val!1 :: L\n  l2 = L!val!2 :: L\nSolution #3:\n  l = L!val!1 :: L\n  l0 = L!val!0 :: L\n  l1 = L!val!1 :: L\n  l2 = L!val!2 :: L\nFound 3 different solutions.\n\u003c/pre\u003e",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "genLs",
          "package": "sbv",
          "signature": "IO AllSatResult",
          "source": "src/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#genLs",
          "type": "function"
        },
        "index": {
          "description": "Formulate query that essentially asserts cardinality constraint on the uninterpreted sort The goal is to say there are precisely such things as it might be the case We manage this by declaring four elements and asserting that for free variable of this sort the shape of the data matches one of these three instances That is we assert that all the instances of the data can be classified into equivalence classes Then allSat returns all the possible instances which of course are all uninterpreted As expected we have genLs Solution val l0 val l1 val l2 val Solution val l0 val l1 val l2 val Solution val l0 val l1 val l2 val Found different solutions",
          "hierarchy": "Data SBV Examples Uninterpreted UISortAllSat",
          "module": "Data.SBV.Examples.Uninterpreted.UISortAllSat",
          "name": "genLs",
          "package": "sbv",
          "partial": "Ls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Examples-Uninterpreted-UISortAllSat.html#v:genLs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow level functions to access the SBV infrastructure, for developers who\n want to build further tools on top of SBV. End-users of the library\n should not need to use this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV.Internals",
          "name": "Internals",
          "package": "sbv",
          "source": "src/Data-SBV-Internals.html",
          "type": "module"
        },
        "index": {
          "description": "Low level functions to access the SBV infrastructure for developers who want to build further tools on top of SBV End-users of the library should not need to use this module",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "Internals",
          "package": "sbv",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgebraic reals. Note that the representation is left abstract. We represent\n rational results explicitly, while the roots-of-polynomials are represented\n implicitly by their defining equation\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "AlgReal",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-AlgReals.html#AlgReal",
          "type": "data"
        },
        "index": {
          "description": "Algebraic reals Note that the representation is left abstract We represent rational results explicitly while the roots-of-polynomials are represented implicitly by their defining equation",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "AlgReal",
          "package": "sbv",
          "partial": "Alg Real",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#t:AlgReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCW\u003c/a\u003e\u003c/code\u003e represents a concrete word of a fixed size:\n Endianness is mostly irrelevant (see the \u003ccode\u003eFromBits\u003c/code\u003e class).\n For signed words, the most significant digit is considered to be the sign.\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CW",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#CW",
          "type": "data"
        },
        "index": {
          "description": "CW represents concrete word of fixed size Endianness is mostly irrelevant see the FromBits class For signed words the most significant digit is considered to be the sign",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CW",
          "package": "sbv",
          "partial": "CW",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#t:CW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constant value\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CWVal",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#CWVal",
          "type": "data"
        },
        "index": {
          "description": "constant value",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CWVal",
          "package": "sbv",
          "partial": "CWVal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#t:CWVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a collection of generated programs.\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CgPgmBundle",
          "package": "sbv",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgPgmBundle",
          "type": "data"
        },
        "index": {
          "description": "Representation of collection of generated programs",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CgPgmBundle",
          "package": "sbv",
          "partial": "Cg Pgm Bundle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#t:CgPgmBundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent kinds of \u003ca\u003efiles\u003c/a\u003e we can produce. Currently this is quite \u003ca\u003eC\u003c/a\u003e specific.\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CgPgmKind",
          "package": "sbv",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgPgmKind",
          "type": "data"
        },
        "index": {
          "description": "Different kinds of files we can produce Currently this is quite specific",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CgPgmKind",
          "package": "sbv",
          "partial": "Cg Pgm Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#t:CgPgmKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind of symbolic value\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "Kind",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#Kind",
          "type": "data"
        },
        "index": {
          "description": "Kind of symbolic value",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "Kind",
          "package": "sbv",
          "partial": "Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#t:Kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of running a symbolic computation\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "Result",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Result of running symbolic computation",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "Result",
          "package": "sbv",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003eSymbolic\u003c/a\u003e value. Either a constant (\u003ccode\u003eLeft\u003c/code\u003e) or a symbolic\n value (\u003ccode\u003eRight Cached\u003c/code\u003e). Note that caching is essential for making\n sure sharing is preserved. The parameter \u003ccode\u003ea\u003c/code\u003e is phantom, but is\n extremely important in keeping the user interface strongly typed.\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "SBV",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SBV",
          "type": "data"
        },
        "index": {
          "description": "The Symbolic value Either constant Left or symbolic value Right Cached Note that caching is essential for making sure sharing is preserved The parameter is phantom but is extremely important in keeping the user interface strongly typed",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "SBV",
          "package": "sbv",
          "partial": "SBV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#t:SBV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent means of running a symbolic piece of code\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "SBVRunMode",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SBVRunMode",
          "type": "data"
        },
        "index": {
          "description": "Different means of running symbolic piece of code",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "SBVRunMode",
          "package": "sbv",
          "partial": "SBVRun Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#t:SBVRunMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Internals",
          "name": "AlgPolyRoot",
          "package": "sbv",
          "signature": "AlgPolyRoot (Integer, Polynomial) (Maybe String)",
          "source": "src/Data-SBV-BitVectors-AlgReals.html#AlgReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "AlgPolyRoot",
          "normalized": "AlgPolyRoot(Integer,Polynomial)(Maybe String)",
          "package": "sbv",
          "partial": "Alg Poly Root",
          "signature": "AlgPolyRoot(Integer,Polynomial)(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:AlgPolyRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Internals",
          "name": "AlgRational",
          "package": "sbv",
          "signature": "AlgRational Bool Rational",
          "source": "src/Data-SBV-BitVectors-AlgReals.html#AlgReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "AlgRational",
          "package": "sbv",
          "partial": "Alg Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:AlgRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SBV.Internals\",\"Data.SBV\"]",
          "name": "CW",
          "package": "sbv",
          "signature": "CW",
          "source": "src/Data-SBV-BitVectors-Data.html#CW",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CW\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:CW\"]"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CW",
          "package": "sbv",
          "partial": "CW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealgebraic real\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CWAlgReal",
          "package": "sbv",
          "signature": "CWAlgReal AlgReal",
          "source": "src/Data-SBV-BitVectors-Data.html#CWVal",
          "type": "function"
        },
        "index": {
          "description": "algebraic real",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CWAlgReal",
          "package": "sbv",
          "partial": "CWAlg Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CWAlgReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edouble\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CWDouble",
          "package": "sbv",
          "signature": "CWDouble Double",
          "source": "src/Data-SBV-BitVectors-Data.html#CWVal",
          "type": "function"
        },
        "index": {
          "description": "double",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CWDouble",
          "package": "sbv",
          "partial": "CWDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CWDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efloat\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CWFloat",
          "package": "sbv",
          "signature": "CWFloat Float",
          "source": "src/Data-SBV-BitVectors-Data.html#CWVal",
          "type": "function"
        },
        "index": {
          "description": "float",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CWFloat",
          "package": "sbv",
          "partial": "CWFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CWFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebit-vector/unbounded integer\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CWInteger",
          "package": "sbv",
          "signature": "CWInteger Integer",
          "source": "src/Data-SBV-BitVectors-Data.html#CWVal",
          "type": "function"
        },
        "index": {
          "description": "bit-vector unbounded integer",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CWInteger",
          "package": "sbv",
          "partial": "CWInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CWInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalue of an uninterpreted kind\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CWUninterpreted",
          "package": "sbv",
          "signature": "CWUninterpreted String",
          "source": "src/Data-SBV-BitVectors-Data.html#CWVal",
          "type": "function"
        },
        "index": {
          "description": "value of an uninterpreted kind",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CWUninterpreted",
          "package": "sbv",
          "partial": "CWUninterpreted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CWUninterpreted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Internals",
          "name": "CgDriver",
          "package": "sbv",
          "signature": "CgDriver",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgPgmKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CgDriver",
          "package": "sbv",
          "partial": "Cg Driver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CgDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Internals",
          "name": "CgHeader",
          "package": "sbv",
          "signature": "CgHeader [Doc]",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgPgmKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CgHeader",
          "normalized": "CgHeader[Doc]",
          "package": "sbv",
          "partial": "Cg Header",
          "signature": "CgHeader[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CgHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Internals",
          "name": "CgMakefile",
          "package": "sbv",
          "signature": "CgMakefile [String]",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgPgmKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CgMakefile",
          "normalized": "CgMakefile[String]",
          "package": "sbv",
          "partial": "Cg Makefile",
          "signature": "CgMakefile[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CgMakefile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Internals",
          "name": "CgPgmBundle",
          "package": "sbv",
          "signature": "CgPgmBundle (Maybe Int, Maybe CgSRealType) [(FilePath, (CgPgmKind, [Doc]))]",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgPgmBundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CgPgmBundle",
          "normalized": "CgPgmBundle(Maybe Int,Maybe CgSRealType)[(FilePath,(CgPgmKind,[Doc]))]",
          "package": "sbv",
          "partial": "Cg Pgm Bundle",
          "signature": "CgPgmBundle(Maybe Int,Maybe CgSRealType)[(FilePath,(CgPgmKind,[Doc]))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CgPgmBundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Internals",
          "name": "CgSource",
          "package": "sbv",
          "signature": "CgSource",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgPgmKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CgSource",
          "package": "sbv",
          "partial": "Cg Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CgSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode generation mode\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "CodeGen",
          "package": "sbv",
          "signature": "CodeGen",
          "source": "src/Data-SBV-BitVectors-Data.html#SBVRunMode",
          "type": "function"
        },
        "index": {
          "description": "Code generation mode",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "CodeGen",
          "package": "sbv",
          "partial": "Code Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:CodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete simulation mode. The StdGen is for the pConstrain acceptance in cross runs\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "Concrete",
          "package": "sbv",
          "signature": "Concrete StdGen",
          "source": "src/Data-SBV-BitVectors-Data.html#SBVRunMode",
          "type": "function"
        },
        "index": {
          "description": "Concrete simulation mode The StdGen is for the pConstrain acceptance in cross runs",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "Concrete",
          "package": "sbv",
          "partial": "Concrete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:Concrete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SBV.Internals\",\"Data.SBV\"]",
          "name": "KBounded",
          "package": "sbv",
          "signature": "KBounded Bool Int",
          "source": "src/Data-SBV-BitVectors-Data.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KBounded\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:KBounded\"]"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "KBounded",
          "package": "sbv",
          "partial": "KBounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SBV.Internals\",\"Data.SBV\"]",
          "name": "KDouble",
          "package": "sbv",
          "signature": "KDouble",
          "source": "src/Data-SBV-BitVectors-Data.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KDouble\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:KDouble\"]"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "KDouble",
          "package": "sbv",
          "partial": "KDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SBV.Internals\",\"Data.SBV\"]",
          "name": "KFloat",
          "package": "sbv",
          "signature": "KFloat",
          "source": "src/Data-SBV-BitVectors-Data.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KFloat\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:KFloat\"]"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "KFloat",
          "package": "sbv",
          "partial": "KFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SBV.Internals\",\"Data.SBV\"]",
          "name": "KReal",
          "package": "sbv",
          "signature": "KReal",
          "source": "src/Data-SBV-BitVectors-Data.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KReal\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:KReal\"]"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "KReal",
          "package": "sbv",
          "partial": "KReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SBV.Internals\",\"Data.SBV\"]",
          "name": "KUnbounded",
          "package": "sbv",
          "signature": "KUnbounded",
          "source": "src/Data-SBV-BitVectors-Data.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KUnbounded\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:KUnbounded\"]"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "KUnbounded",
          "package": "sbv",
          "partial": "KUnbounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KUnbounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SBV.Internals\",\"Data.SBV\"]",
          "name": "KUninterpreted",
          "package": "sbv",
          "signature": "KUninterpreted String",
          "source": "src/Data-SBV-BitVectors-Data.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KUninterpreted\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:KUninterpreted\"]"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "KUninterpreted",
          "package": "sbv",
          "partial": "KUninterpreted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:KUninterpreted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic simulation mode, for proof purposes. Bool is True if it's a sat instance\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "Proof",
          "package": "sbv",
          "signature": "Proof Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#SBVRunMode",
          "type": "function"
        },
        "index": {
          "description": "Symbolic simulation mode for proof purposes Bool is True if it sat instance",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "Proof",
          "package": "sbv",
          "partial": "Proof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:Proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV.Internals",
          "name": "SBV",
          "package": "sbv",
          "signature": "SBV !Kind !(Either CW (Cached SW))",
          "source": "src/Data-SBV-BitVectors-Data.html#SBV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "SBV",
          "package": "sbv",
          "partial": "SBV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:SBV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower level version of \u003ccode\u003e\u003ca\u003ecompileToC\u003c/a\u003e\u003c/code\u003e, producing a \u003ccode\u003e\u003ca\u003eCgPgmBundle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "compileToC'",
          "package": "sbv",
          "signature": "String -\u003e SBVCodeGen () -\u003e IO CgPgmBundle",
          "source": "src/Data-SBV-Compilers-C.html#compileToC%27",
          "type": "function"
        },
        "index": {
          "description": "Lower level version of compileToC producing CgPgmBundle",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "compileToC'",
          "normalized": "String-\u003eSBVCodeGen()-\u003eIO CgPgmBundle",
          "package": "sbv",
          "partial": "To C'",
          "signature": "String-\u003eSBVCodeGen()-\u003eIO CgPgmBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:compileToC-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower level version of \u003ccode\u003e\u003ca\u003ecompileToCLib\u003c/a\u003e\u003c/code\u003e, producing a \u003ccode\u003e\u003ca\u003eCgPgmBundle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "compileToCLib'",
          "package": "sbv",
          "signature": "String -\u003e [(String, SBVCodeGen ())] -\u003e IO CgPgmBundle",
          "source": "src/Data-SBV-Compilers-C.html#compileToCLib%27",
          "type": "function"
        },
        "index": {
          "description": "Lower level version of compileToCLib producing CgPgmBundle",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "compileToCLib'",
          "normalized": "String-\u003e[(String,SBVCodeGen())]-\u003eIO CgPgmBundle",
          "package": "sbv",
          "partial": "To CLib'",
          "signature": "String-\u003e[(String,SBVCodeGen())]-\u003eIO CgPgmBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:compileToCLib-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SBV.Internals\",\"Data.SBV\"]",
          "name": "cwKind",
          "package": "sbv",
          "signature": "Kind",
          "source": "src/Data-SBV-BitVectors-Data.html#CW",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:cwKind\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cwKind\"]"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "cwKind",
          "package": "sbv",
          "partial": "Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:cwKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.SBV.Internals\",\"Data.SBV\"]",
          "name": "cwVal",
          "package": "sbv",
          "signature": "CWVal",
          "source": "src/Data-SBV-BitVectors-Data.html#CW",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:cwVal\",\"http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cwVal\"]"
        },
        "index": {
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "cwVal",
          "package": "sbv",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:cwVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a finite symbolic bitvector, named\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "genVar",
          "package": "sbv",
          "signature": "Maybe Quantifier -\u003e Kind -\u003e String -\u003e Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Model.html#genVar",
          "type": "function"
        },
        "index": {
          "description": "Generate finite symbolic bitvector named",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "genVar",
          "normalized": "Maybe Quantifier-\u003eKind-\u003eString-\u003eSymbolic(SBV a)",
          "package": "sbv",
          "partial": "Var",
          "signature": "Maybe Quantifier-\u003eKind-\u003eString-\u003eSymbolic(SBV a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:genVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a finite symbolic bitvector, unnamed\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "genVar_",
          "package": "sbv",
          "signature": "Maybe Quantifier -\u003e Kind -\u003e Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Model.html#genVar_",
          "type": "function"
        },
        "index": {
          "description": "Generate finite symbolic bitvector unnamed",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "genVar_",
          "normalized": "Maybe Quantifier-\u003eKind-\u003eSymbolic(SBV a)",
          "package": "sbv",
          "partial": "Var",
          "signature": "Maybe Quantifier-\u003eKind-\u003eSymbolic(SBV a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:genVar_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a constant word from an integral\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "mkConstCW",
          "package": "sbv",
          "signature": "Kind -\u003e a -\u003e CW",
          "source": "src/Data-SBV-BitVectors-Data.html#mkConstCW",
          "type": "function"
        },
        "index": {
          "description": "Create constant word from an integral",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "mkConstCW",
          "normalized": "Kind-\u003ea-\u003eCW",
          "package": "sbv",
          "partial": "Const CW",
          "signature": "Kind-\u003ea-\u003eCW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:mkConstCW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a symbolic computation in Proof mode and return a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e. The boolean\n argument indicates if this is a sat instance or not.\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "runSymbolic",
          "package": "sbv",
          "signature": "Bool -\u003e Symbolic a -\u003e IO Result",
          "source": "src/Data-SBV-BitVectors-Data.html#runSymbolic",
          "type": "function"
        },
        "index": {
          "description": "Run symbolic computation in Proof mode and return Result The boolean argument indicates if this is sat instance or not",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "runSymbolic",
          "normalized": "Bool-\u003eSymbolic a-\u003eIO Result",
          "package": "sbv",
          "partial": "Symbolic",
          "signature": "Bool-\u003eSymbolic a-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:runSymbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a symbolic computation, and return a extra value paired up with the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "runSymbolic'",
          "package": "sbv",
          "signature": "SBVRunMode -\u003e Symbolic a -\u003e IO (a, Result)",
          "source": "src/Data-SBV-BitVectors-Data.html#runSymbolic%27",
          "type": "function"
        },
        "index": {
          "description": "Run symbolic computation and return extra value paired up with the Result",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "runSymbolic'",
          "normalized": "SBVRunMode-\u003eSymbolic a-\u003eIO(a,Result)",
          "package": "sbv",
          "partial": "Symbolic'",
          "signature": "SBVRunMode-\u003eSymbolic a-\u003eIO(a,Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:runSymbolic-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicit sharing combinator. The SBV library has internal caching/hash-consing mechanisms\n built in, based on Andy Gill's type-safe obervable sharing technique (see: \u003ca\u003ehttp://ittc.ku.edu/~andygill/paper.php?label=DSLExtract09\u003c/a\u003e).\n However, there might be times where being explicit on the sharing can help, especially in experimental code. The \u003ccode\u003e\u003ca\u003eslet\u003c/a\u003e\u003c/code\u003e combinator\n ensures that its first argument is computed once and passed on to its continuation, explicitly indicating the intent of sharing. Most\n use cases of the SBV library should simply use Haskell's \u003ccode\u003elet\u003c/code\u003e construct for this purpose.\n\u003c/p\u003e",
          "module": "Data.SBV.Internals",
          "name": "slet",
          "package": "sbv",
          "signature": "SBV a -\u003e (SBV a -\u003e SBV b) -\u003e SBV b",
          "source": "src/Data-SBV-BitVectors-Model.html#slet",
          "type": "function"
        },
        "index": {
          "description": "Explicit sharing combinator The SBV library has internal caching hash-consing mechanisms built in based on Andy Gill type-safe obervable sharing technique see http ittc.ku.edu andygill paper.php label DSLExtract09 However there might be times where being explicit on the sharing can help especially in experimental code The slet combinator ensures that its first argument is computed once and passed on to its continuation explicitly indicating the intent of sharing Most use cases of the SBV library should simply use Haskell let construct for this purpose",
          "hierarchy": "Data SBV Internals",
          "module": "Data.SBV.Internals",
          "name": "slet",
          "normalized": "SBV a-\u003e(SBV a-\u003eSBV b)-\u003eSBV b",
          "package": "sbv",
          "signature": "SBV a-\u003e(SBV a-\u003eSBV b)-\u003eSBV b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV-Internals.html#v:slet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e(The sbv library is hosted at \u003ca\u003ehttp://github.com/LeventErkok/sbv\u003c/a\u003e.\n Comments, bug reports, and patches are always welcome.)\n\u003c/p\u003e\u003cp\u003eSBV: SMT Based Verification\n\u003c/p\u003e\u003cp\u003eExpress properties about Haskell programs and automatically prove\n them using SMT solvers.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove $ \\x -\u003e x `shiftL` 2 .== 4 * (x :: SWord8)\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove $ forAll [\"x\"] $ \\x -\u003e x `shiftL` 2 .== (x :: SWord8)\n\u003c/code\u003e\u003c/strong\u003eFalsifiable. Counter-example:\n  x = 51 :: SWord8\n\u003c/pre\u003e\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eprove\u003c/a\u003e\u003c/code\u003e has the following type:\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eprove\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eProvable\u003c/a\u003e\u003c/code\u003e a =\u003e a -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eThmResult\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eProvable\u003c/a\u003e\u003c/code\u003e comes with instances for n-ary predicates, for arbitrary n.\n The predicates are just regular Haskell functions over symbolic signed and unsigned\n bit-vectors. Functions for checking satisfiability (\u003ccode\u003e\u003ca\u003esat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eallSat\u003c/a\u003e\u003c/code\u003e) are also\n provided.\n\u003c/p\u003e\u003cp\u003eIn particular, the sbv library introduces the types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSBool\u003c/a\u003e\u003c/code\u003e: Symbolic Booleans (bits).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSWord16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSWord32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSWord64\u003c/a\u003e\u003c/code\u003e: Symbolic Words (unsigned).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSInt8\u003c/a\u003e\u003c/code\u003e,  \u003ccode\u003e\u003ca\u003eSInt16\u003c/a\u003e\u003c/code\u003e,  \u003ccode\u003e\u003ca\u003eSInt32\u003c/a\u003e\u003c/code\u003e,  \u003ccode\u003e\u003ca\u003eSInt64\u003c/a\u003e\u003c/code\u003e: Symbolic Ints (signed).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSInteger\u003c/a\u003e\u003c/code\u003e: Unbounded signed integers.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSReal\u003c/a\u003e\u003c/code\u003e: Algebraic-real numbers\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSFloat\u003c/a\u003e\u003c/code\u003e: IEEE-754 single-precision floating point values\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSDouble\u003c/a\u003e\u003c/code\u003e: IEEE-754 double-precision floating point values\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSArray\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSFunArray\u003c/a\u003e\u003c/code\u003e: Flat arrays of symbolic values.\n\u003c/li\u003e\u003cli\u003e Symbolic polynomials over GF(2^n), polynomial arithmetic, and CRCs.\n\u003c/li\u003e\u003cli\u003e Uninterpreted constants and functions over symbolic values, with user\n     defined SMT-Lib axioms.\n\u003c/li\u003e\u003cli\u003e Uninterpreted sorts, and proofs over such sorts, potentially with axioms.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe user can construct ordinary Haskell programs using these types, which behave\n very similar to their concrete counterparts. In particular these types belong to the\n standard classes \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e, custom versions of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEqSymbolic\u003c/a\u003e\u003c/code\u003e) \n and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eOrdSymbolic\u003c/a\u003e\u003c/code\u003e), along with several other custom classes for simplifying\n programming with symbolic values. The framework takes full advantage of Haskell's type\n inference to avoid many common mistakes.\n\u003c/p\u003e\u003cp\u003eFurthermore, predicates (i.e., functions that return \u003ccode\u003e\u003ca\u003eSBool\u003c/a\u003e\u003c/code\u003e) built out of\n these types can also be:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e proven correct via an external SMT solver (the \u003ccode\u003e\u003ca\u003eprove\u003c/a\u003e\u003c/code\u003e function)\n\u003c/li\u003e\u003cli\u003e checked for satisfiability (the \u003ccode\u003e\u003ca\u003esat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eallSat\u003c/a\u003e\u003c/code\u003e functions)\n\u003c/li\u003e\u003cli\u003e used in synthesis (the \u003ccode\u003e\u003ca\u003esat\u003c/a\u003e\u003c/code\u003e function with existentials)\n\u003c/li\u003e\u003cli\u003e quick-checked\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf a predicate is not valid, \u003ccode\u003e\u003ca\u003eprove\u003c/a\u003e\u003c/code\u003e will return a counterexample: An\n assignment to inputs such that the predicate fails. The \u003ccode\u003e\u003ca\u003esat\u003c/a\u003e\u003c/code\u003e function will\n return a satisfying assignment, if there is one. The \u003ccode\u003e\u003ca\u003eallSat\u003c/a\u003e\u003c/code\u003e function returns\n all satisfying assignments, lazily.\n\u003c/p\u003e\u003cp\u003eThe sbv library uses third-party SMT solvers via the standard SMT-Lib interface:\n \u003ca\u003ehttp://goedel.cs.uiowa.edu/smtlib/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe SBV library is designed to work with any SMT-Lib compliant SMT-solver.\n Currently, we support the following SMT-Solvers out-of-the box:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Z3 from Microsoft: \u003ca\u003ehttp://research.microsoft.com/en-us/um/redmond/projects/z3/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Yices from SRI: \u003ca\u003ehttp://yices.csl.sri.com/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e CVC4 from New York University and University of Iowa: \u003ca\u003ehttp://cvc4.cs.nyu.edu/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Boolector from Johannes Kepler University: \u003ca\u003ehttp://fmv.jku.at/boolector/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e MathSAT from Fondazione Bruno Kessler and DISI-University of Trento: \u003ca\u003ehttp://mathsat.fbk.eu/\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSupport for other compliant solvers can be added relatively easily, please\n get in touch if there is a solver you'd like to see included.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SBV",
          "name": "SBV",
          "package": "sbv",
          "source": "src/Data-SBV.html",
          "type": "module"
        },
        "index": {
          "description": "The sbv library is hosted at http github.com LeventErkok sbv Comments bug reports and patches are always welcome SBV SMT Based Verification Express properties about Haskell programs and automatically prove them using SMT solvers prove shiftL SWord8 Q.E.D prove forAll shiftL SWord8 Falsifiable Counter-example SWord8 The function prove has the following type prove Provable IO ThmResult The class Provable comes with instances for n-ary predicates for arbitrary The predicates are just regular Haskell functions over symbolic signed and unsigned bit-vectors Functions for checking satisfiability sat and allSat are also provided In particular the sbv library introduces the types SBool Symbolic Booleans bits SWord8 SWord16 SWord32 SWord64 Symbolic Words unsigned SInt8 SInt16 SInt32 SInt64 Symbolic Ints signed SInteger Unbounded signed integers SReal Algebraic-real numbers SFloat IEEE-754 single-precision floating point values SDouble IEEE-754 double-precision floating point values SArray SFunArray Flat arrays of symbolic values Symbolic polynomials over GF polynomial arithmetic and CRCs Uninterpreted constants and functions over symbolic values with user defined SMT-Lib axioms Uninterpreted sorts and proofs over such sorts potentially with axioms The user can construct ordinary Haskell programs using these types which behave very similar to their concrete counterparts In particular these types belong to the standard classes Num Bits custom versions of Eq EqSymbolic and Ord OrdSymbolic along with several other custom classes for simplifying programming with symbolic values The framework takes full advantage of Haskell type inference to avoid many common mistakes Furthermore predicates i.e functions that return SBool built out of these types can also be proven correct via an external SMT solver the prove function checked for satisfiability the sat allSat functions used in synthesis the sat function with existentials quick-checked If predicate is not valid prove will return counterexample An assignment to inputs such that the predicate fails The sat function will return satisfying assignment if there is one The allSat function returns all satisfying assignments lazily The sbv library uses third-party SMT solvers via the standard SMT-Lib interface http goedel.cs.uiowa.edu smtlib The SBV library is designed to work with any SMT-Lib compliant SMT-solver Currently we support the following SMT-Solvers out-of-the box Z3 from Microsoft http research.microsoft.com en-us um redmond projects z3 Yices from SRI http yices.csl.sri.com CVC4 from New York University and University of Iowa http cvc4.cs.nyu.edu Boolector from Johannes Kepler University http fmv.jku.at boolector MathSAT from Fondazione Bruno Kessler and DISI-University of Trento http mathsat.fbk.eu Support for other compliant solvers can be added relatively easily please get in touch if there is solver you like to see included",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SBV",
          "package": "sbv",
          "partial": "SBV",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgebraic reals. Note that the representation is left abstract. We represent\n rational results explicitly, while the roots-of-polynomials are represented\n implicitly by their defining equation\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "AlgReal",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-AlgReals.html#AlgReal",
          "type": "data"
        },
        "index": {
          "description": "Algebraic reals Note that the representation is left abstract We represent rational results explicitly while the roots-of-polynomials are represented implicitly by their defining equation",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "AlgReal",
          "package": "sbv",
          "partial": "Alg Real",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:AlgReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eallSat\u003c/code\u003e call results in a \u003ccode\u003e\u003ca\u003eAllSatResult\u003c/a\u003e\u003c/code\u003e. The boolean says whether\n we should warn the user about prefix-existentials.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "AllSatResult",
          "package": "sbv",
          "source": "src/Data-SBV-SMT-SMT.html#AllSatResult",
          "type": "newtype"
        },
        "index": {
          "description": "An allSat call results in AllSatResult The boolean says whether we should warn the user about prefix-existentials",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "AllSatResult",
          "package": "sbv",
          "partial": "All Sat Result",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:AllSatResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBoolean\u003c/a\u003e\u003c/code\u003e class: a generalization of Haskell's \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e type\n Haskell \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e and SBV's \u003ccode\u003eSBool\u003c/code\u003e are instances of this class, unifying the treatment of boolean values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebnot\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e\n However, it's advisable to define \u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003e|||\u003c/a\u003e\u003c/code\u003e as well (typically), for clarity.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Boolean",
          "package": "sbv",
          "source": "src/Data-SBV-Utils-Boolean.html#Boolean",
          "type": "class"
        },
        "index": {
          "description": "The Boolean class generalization of Haskell Bool type Haskell Bool and SBV SBool are instances of this class unifying the treatment of boolean values Minimal complete definition true bnot However it advisable to define false and as well typically for clarity",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Boolean",
          "package": "sbv",
          "partial": "Boolean",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCW\u003c/a\u003e\u003c/code\u003e represents a concrete word of a fixed size:\n Endianness is mostly irrelevant (see the \u003ccode\u003eFromBits\u003c/code\u003e class).\n For signed words, the most significant digit is considered to be the sign.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "CW",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#CW",
          "type": "data"
        },
        "index": {
          "description": "CW represents concrete word of fixed size Endianness is mostly irrelevant see the FromBits class For signed words the most significant digit is considered to be the sign",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "CW",
          "package": "sbv",
          "partial": "CW",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:CW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible mappings for the \u003ccode\u003e\u003ca\u003eSReal\u003c/a\u003e\u003c/code\u003e type when translated to C. Used in conjunction\n with the function \u003ccode\u003e\u003ca\u003ecgSRealType\u003c/a\u003e\u003c/code\u003e. Note that the particular characteristics of the\n mapped types depend on the platform and the compiler used for compiling the generated\n C program. See \u003ca\u003ehttp://en.wikipedia.org/wiki/C_data_types\u003c/a\u003e for details.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "CgSRealType",
          "package": "sbv",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgSRealType",
          "type": "data"
        },
        "index": {
          "description": "Possible mappings for the SReal type when translated to Used in conjunction with the function cgSRealType Note that the particular characteristics of the mapped types depend on the platform and the compiler used for compiling the generated program See http en.wikipedia.org wiki data types for details",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "CgSRealType",
          "package": "sbv",
          "partial": "Cg SReal Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:CgSRealType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic Equality. Note that we can't use Haskell's \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class since Haskell insists on returning Bool\n Comparing symbolic values will necessarily return a symbolic value.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e.==\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "EqSymbolic",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Model.html#EqSymbolic",
          "type": "class"
        },
        "index": {
          "description": "Symbolic Equality Note that we can use Haskell Eq class since Haskell insists on returning Bool Comparing symbolic values will necessarily return symbolic value Minimal complete definition",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "EqSymbolic",
          "package": "sbv",
          "partial": "Eq Symbolic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:EqSymbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality as a proof method. Allows for\n very concise construction of equivalence proofs, which is very typical in\n bit-precise proofs.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Equality",
          "package": "sbv",
          "source": "src/Data-SBV-Provers-Prover.html#Equality",
          "type": "class"
        },
        "index": {
          "description": "Equality as proof method Allows for very concise construction of equivalence proofs which is very typical in bit-precise proofs",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Equality",
          "package": "sbv",
          "partial": "Equality",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Equality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnblasting a value from symbolic-bits. The bits can be given little-endian\n or big-endian. For a signed number in little-endian, we assume the very last bit\n is the sign digit. This is a bit awkward, but it is more consistent with the \u003ca\u003ereverse\u003c/a\u003e view of\n little-big-endian representations\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efromBitsLE\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "FromBits",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Splittable.html#FromBits",
          "type": "class"
        },
        "index": {
          "description": "Unblasting value from symbolic-bits The bits can be given little-endian or big-endian For signed number in little-endian we assume the very last bit is the sign digit This is bit awkward but it is more consistent with the reverse view of little-big-endian representations Minimal complete definition fromBitsLE",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "FromBits",
          "package": "sbv",
          "partial": "From Bits",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:FromBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for capturing values that have a sign and a size (finite or infinite)\n minimal complete definition: kindOf. This class can be automatically derived\n for data-types that have a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instance; this is useful for creating uninterpreted\n sorts.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "HasKind",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#HasKind",
          "type": "class"
        },
        "index": {
          "description": "class for capturing values that have sign and size finite or infinite minimal complete definition kindOf This class can be automatically derived for data-types that have Data instance this is useful for creating uninterpreted sorts",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "HasKind",
          "package": "sbv",
          "partial": "Has Kind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:HasKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind of symbolic value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Kind",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#Kind",
          "type": "data"
        },
        "index": {
          "description": "Kind of symbolic value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Kind",
          "package": "sbv",
          "partial": "Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChosen logic for the solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Logic",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#Logic",
          "type": "data"
        },
        "index": {
          "description": "Chosen logic for the solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Logic",
          "package": "sbv",
          "partial": "Logic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Logic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic conditionals are modeled by the \u003ccode\u003e\u003ca\u003eMergeable\u003c/a\u003e\u003c/code\u003e class, describing\n how to merge the results of an if-then-else call with a symbolic test. SBV\n provides all basic types as instances of this class, so users only need\n to declare instances for custom data-types of their programs as needed.\n\u003c/p\u003e\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e is a total-indexing function out of a list of choices\n with a default value, simulating array/list indexing. It's an n-way generalization\n of the \u003ccode\u003e\u003ca\u003eite\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003esymbolicMerge\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Mergeable",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Model.html#Mergeable",
          "type": "class"
        },
        "index": {
          "description": "Symbolic conditionals are modeled by the Mergeable class describing how to merge the results of an if-then-else call with symbolic test SBV provides all basic types as instances of this class so users only need to declare instances for custom data-types of their programs as needed The function select is total-indexing function out of list of choices with default value simulating array list indexing It an n-way generalization of the ite function Minimal complete definition symbolicMerge",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Mergeable",
          "package": "sbv",
          "partial": "Mergeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Mergeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVarious SMT results that we can extract models out of.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Modelable",
          "package": "sbv",
          "source": "src/Data-SBV-SMT-SMT.html#Modelable",
          "type": "class"
        },
        "index": {
          "description": "Various SMT results that we can extract models out of",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Modelable",
          "package": "sbv",
          "partial": "Modelable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Modelable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimizer configuration. Note that iterative and quantified approaches are in general not interchangeable.\n For instance, iterative solutions will loop infinitely when there is no optimal value, but quantified solutions\n can handle such problems. Of course, quantified problems are harder for SMT solvers, naturally.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "OptimizeOpts",
          "package": "sbv",
          "source": "src/Data-SBV-Tools-Optimize.html#OptimizeOpts",
          "type": "data"
        },
        "index": {
          "description": "Optimizer configuration Note that iterative and quantified approaches are in general not interchangeable For instance iterative solutions will loop infinitely when there is no optimal value but quantified solutions can handle such problems Of course quantified problems are harder for SMT solvers naturally",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "OptimizeOpts",
          "package": "sbv",
          "partial": "Optimize Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:OptimizeOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic Comparisons. Similar to \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, we cannot implement Haskell's \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class\n since there is no way to return an \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e value from a symbolic comparison.\n Furthermore, \u003ccode\u003e\u003ca\u003eOrdSymbolic\u003c/a\u003e\u003c/code\u003e requires \u003ccode\u003e\u003ca\u003eMergeable\u003c/a\u003e\u003c/code\u003e to implement if-then-else, for the\n benefit of implementing symbolic versions of \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e.\u003c\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "OrdSymbolic",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Model.html#OrdSymbolic",
          "type": "class"
        },
        "index": {
          "description": "Symbolic Comparisons Similar to Eq we cannot implement Haskell Ord class since there is no way to return an Ordering value from symbolic comparison Furthermore OrdSymbolic requires Mergeable to implement if-then-else for the benefit of implementing symbolic versions of max and min functions Minimal complete definition",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "OrdSymbolic",
          "package": "sbv",
          "partial": "Ord Symbolic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:OrdSymbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements polynomial addition, multiplication, division, and modulus operations\n over GF(2^n).  NB. Similar to \u003ccode\u003e\u003ca\u003esQuotRem\u003c/a\u003e\u003c/code\u003e, division by \u003ccode\u003e0\u003c/code\u003e is interpreted as follows:\n\u003c/p\u003e\u003cpre\u003ex \u003ccode\u003e\u003ca\u003epDivMod\u003c/a\u003e\u003c/code\u003e 0 = (0, x)\u003c/pre\u003e\u003cp\u003efor all \u003ccode\u003ex\u003c/code\u003e (including \u003ccode\u003e0\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003epMult\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epDivMod\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshowPolynomial\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Polynomial",
          "package": "sbv",
          "source": "src/Data-SBV-Tools-Polynomial.html#Polynomial",
          "type": "class"
        },
        "index": {
          "description": "Implements polynomial addition multiplication division and modulus operations over GF NB Similar to sQuotRem division by is interpreted as follows pDivMod for all including Minimal complete definition pMult pDivMod showPolynomial",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Polynomial",
          "package": "sbv",
          "partial": "Polynomial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Polynomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate is a symbolic program that returns a (symbolic) boolean value. For all intents and\n purposes, it can be treated as an n-ary function from symbolic-values to a boolean. The \u003ccode\u003e\u003ca\u003eSymbolic\u003c/a\u003e\u003c/code\u003e\n monad captures the underlying representation, and can/should be ignored by the users of the library,\n unless you are building further utilities on top of SBV itself. Instead, simply use the \u003ccode\u003e\u003ca\u003ePredicate\u003c/a\u003e\u003c/code\u003e\n type when necessary.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Predicate",
          "package": "sbv",
          "source": "src/Data-SBV-Provers-Prover.html#Predicate",
          "type": "type"
        },
        "index": {
          "description": "predicate is symbolic program that returns symbolic boolean value For all intents and purposes it can be treated as an n-ary function from symbolic-values to boolean The Symbolic monad captures the underlying representation and can should be ignored by the users of the library unless you are building further utilities on top of SBV itself Instead simply use the Predicate type when necessary",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Predicate",
          "package": "sbv",
          "partial": "Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrettyNum class captures printing of numbers in hex and binary formats; also supporting negative numbers.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ehexS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebinS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "PrettyNum",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-PrettyNum.html#PrettyNum",
          "type": "class"
        },
        "index": {
          "description": "PrettyNum class captures printing of numbers in hex and binary formats also supporting negative numbers Minimal complete definition hexS and binS",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "PrettyNum",
          "package": "sbv",
          "partial": "Pretty Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:PrettyNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type \u003ccode\u003ea\u003c/code\u003e is provable if we can turn it into a predicate.\n Note that a predicate can be made from a curried function of arbitrary arity, where\n each element is either a symbolic type or up-to a 7-tuple of symbolic-types. So\n predicates can be constructed from almost arbitrary Haskell functions that have arbitrary\n shapes. (See the instance declarations below.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Provable",
          "package": "sbv",
          "source": "src/Data-SBV-Provers-Prover.html#Provable",
          "type": "class"
        },
        "index": {
          "description": "type is provable if we can turn it into predicate Note that predicate can be made from curried function of arbitrary arity where each element is either symbolic type or up-to tuple of symbolic-types So predicates can be constructed from almost arbitrary Haskell functions that have arbitrary shapes See the instance declarations below",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Provable",
          "package": "sbv",
          "partial": "Provable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Provable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRounding mode to be used for the IEEE floating-point operations.\n Note that Haskell's default is \u003ccode\u003e\u003ca\u003eRoundNearestTiesToEven\u003c/a\u003e\u003c/code\u003e. If you use\n a different rounding mode, then the counter-examples you get may not\n match what you observe in Haskell.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "RoundingMode",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#RoundingMode",
          "type": "data"
        },
        "index": {
          "description": "Rounding mode to be used for the IEEE floating-point operations Note that Haskell default is RoundNearestTiesToEven If you use different rounding mode then the counter-examples you get may not match what you observe in Haskell",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "RoundingMode",
          "package": "sbv",
          "partial": "Rounding Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:RoundingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrays implemented in terms of SMT-arrays: \u003ca\u003ehttp://goedel.cs.uiowa.edu/smtlib/theories/ArraysEx.smt2\u003c/a\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Maps directly to SMT-lib arrays\n\u003c/li\u003e\u003cli\u003e Reading from an unintialized value is OK and yields an uninterpreted result\n\u003c/li\u003e\u003cli\u003e Can check for equality of these arrays\n\u003c/li\u003e\u003cli\u003e Cannot quick-check theorems using \u003ccode\u003eSArray\u003c/code\u003e values\n\u003c/li\u003e\u003cli\u003e Typically slower as it heavily relies on SMT-solving for the array theory\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.SBV",
          "name": "SArray",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SArray",
          "type": "data"
        },
        "index": {
          "description": "Arrays implemented in terms of SMT-arrays http goedel.cs.uiowa.edu smtlib theories ArraysEx.smt2 Maps directly to SMT-lib arrays Reading from an unintialized value is OK and yields an uninterpreted result Can check for equality of these arrays Cannot quick-check theorems using SArray values Typically slower as it heavily relies on SMT-solving for the array theory",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SArray",
          "package": "sbv",
          "partial": "SArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003eSymbolic\u003c/a\u003e value. Either a constant (\u003ccode\u003eLeft\u003c/code\u003e) or a symbolic\n value (\u003ccode\u003eRight Cached\u003c/code\u003e). Note that caching is essential for making\n sure sharing is preserved. The parameter \u003ccode\u003ea\u003c/code\u003e is phantom, but is\n extremely important in keeping the user interface strongly typed.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SBV",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SBV",
          "type": "data"
        },
        "index": {
          "description": "The Symbolic value Either constant Left or symbolic value Right Cached Note that caching is essential for making sure sharing is preserved The parameter is phantom but is extremely important in keeping the user interface strongly typed",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SBV",
          "package": "sbv",
          "partial": "SBV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SBV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe code-generation monad. Allows for precise layout of input values\n reference parameters (for returning composite values in languages such as C),\n and return values.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SBVCodeGen",
          "package": "sbv",
          "source": "src/Data-SBV-Compilers-CodeGen.html#SBVCodeGen",
          "type": "data"
        },
        "index": {
          "description": "The code-generation monad Allows for precise layout of input values reference parameters for returning composite values in languages such as and return values",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SBVCodeGen",
          "package": "sbv",
          "partial": "SBVCode Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SBVCodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbolic boolean/bit\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SBool",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SBool",
          "type": "type"
        },
        "index": {
          "description": "symbolic boolean bit",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SBool",
          "package": "sbv",
          "partial": "SBool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSDivisible\u003c/a\u003e\u003c/code\u003e class captures the essence of division.\n Unfortunately we cannot use Haskell's \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e class since the \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e superclasses are not implementable for symbolic bit-vectors.\n However, \u003ccode\u003e\u003ca\u003equotRem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edivMod\u003c/a\u003e\u003c/code\u003e makes perfect sense, and the \u003ccode\u003e\u003ca\u003eSDivisible\u003c/a\u003e\u003c/code\u003e class captures\n this operation. One issue is how division by 0 behaves. The verification\n technology requires total functions, and there are several design choices\n here. We follow Isabelle/HOL approach of assigning the value 0 for division\n by 0. Therefore, we impose the following law:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e x \u003ccode\u003e\u003ca\u003esQuotRem\u003c/a\u003e\u003c/code\u003e 0 = (0, x) \u003c/code\u003e\n     \u003ccode\u003e x \u003ccode\u003e\u003ca\u003esDivMod\u003c/a\u003e\u003c/code\u003e  0 = (0, x) \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote that our instances implement this law even when \u003ccode\u003ex\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e itself.\n\u003c/p\u003e\u003cp\u003eNB. \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e truncates toward zero, while \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e truncates toward negative infinity.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003esQuotRem\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esDivMod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SDivisible",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Model.html#SDivisible",
          "type": "class"
        },
        "index": {
          "description": "The SDivisible class captures the essence of division Unfortunately we cannot use Haskell Integral class since the Real and Enum superclasses are not implementable for symbolic bit-vectors However quotRem and divMod makes perfect sense and the SDivisible class captures this operation One issue is how division by behaves The verification technology requires total functions and there are several design choices here We follow Isabelle HOL approach of assigning the value for division by Therefore we impose the following law sQuotRem sDivMod Note that our instances implement this law even when is itself NB quot truncates toward zero while div truncates toward negative infinity Minimal complete definition sQuotRem sDivMod",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SDivisible",
          "package": "sbv",
          "partial": "SDivisible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SDivisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIEEE-754 double-precision floating point numbers\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SDouble",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SDouble",
          "type": "type"
        },
        "index": {
          "description": "IEEE-754 double-precision floating point numbers",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SDouble",
          "package": "sbv",
          "partial": "SDouble",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIEEE-754 single-precision floating point numbers\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SFloat",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SFloat",
          "type": "type"
        },
        "index": {
          "description": "IEEE-754 single-precision floating point numbers",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SFloat",
          "package": "sbv",
          "partial": "SFloat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrays implemented internally as functions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Internally handled by the library and not mapped to SMT-Lib\n\u003c/li\u003e\u003cli\u003e Reading an uninitialized value is considered an error (will throw exception)\n\u003c/li\u003e\u003cli\u003e Cannot check for equality (internally represented as functions)\n\u003c/li\u003e\u003cli\u003e Can quick-check\n\u003c/li\u003e\u003cli\u003e Typically faster as it gets compiled away during translation\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.SBV",
          "name": "SFunArray",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SFunArray",
          "type": "data"
        },
        "index": {
          "description": "Arrays implemented internally as functions Internally handled by the library and not mapped to SMT-Lib Reading an uninitialized value is considered an error will throw exception Cannot check for equality internally represented as functions Can quick-check Typically faster as it gets compiled away during translation",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SFunArray",
          "package": "sbv",
          "partial": "SFun Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SFunArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16-bit signed symbolic value, 2's complement representation\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SInt16",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SInt16",
          "type": "type"
        },
        "index": {
          "description": "bit signed symbolic value complement representation",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SInt16",
          "package": "sbv",
          "partial": "SInt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit signed symbolic value, 2's complement representation\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SInt32",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SInt32",
          "type": "type"
        },
        "index": {
          "description": "bit signed symbolic value complement representation",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SInt32",
          "package": "sbv",
          "partial": "SInt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit signed symbolic value, 2's complement representation\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SInt64",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SInt64",
          "type": "type"
        },
        "index": {
          "description": "bit signed symbolic value complement representation",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SInt64",
          "package": "sbv",
          "partial": "SInt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit signed symbolic value, 2's complement representation\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SInt8",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SInt8",
          "type": "type"
        },
        "index": {
          "description": "bit signed symbolic value complement representation",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SInt8",
          "package": "sbv",
          "partial": "SInt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinite precision signed symbolic value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SInteger",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SInteger",
          "type": "type"
        },
        "index": {
          "description": "Infinite precision signed symbolic value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SInteger",
          "package": "sbv",
          "partial": "SInteger",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic Numbers. This is a simple class that simply incorporates all number like\n base types together, simplifying writing polymorphic type-signatures that work for all\n symbolic numbers, such as \u003ccode\u003e\u003ca\u003eSWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSInt8\u003c/a\u003e\u003c/code\u003e etc. For instance, we can write a generic\n list-minimum function as follows:\n\u003c/p\u003e\u003cpre\u003e\n    mm :: SIntegral a =\u003e [SBV a] -\u003e SBV a\n    mm = foldr1 (a b -\u003e ite (a .\u003c= b) a b)\n\u003c/pre\u003e\u003cp\u003eIt is similar to the standard \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e class, except ranging over symbolic instances.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SIntegral",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Model.html#SIntegral",
          "type": "class"
        },
        "index": {
          "description": "Symbolic Numbers This is simple class that simply incorporates all number like base types together simplifying writing polymorphic type-signatures that work for all symbolic numbers such as SWord8 SInt8 etc For instance we can write generic list-minimum function as follows mm SIntegral SBV SBV mm foldr1 ite It is similar to the standard Integral class except ranging over symbolic instances",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SIntegral",
          "package": "sbv",
          "partial": "SIntegral",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolver configuration. See also \u003ccode\u003ez3\u003c/code\u003e, \u003ccode\u003eyices\u003c/code\u003e, \u003ccode\u003ecvc4\u003c/code\u003e, and 'boolector, which are instantiations of this type for those solvers, with\n reasonable defaults. In particular, custom configuration can be created by varying those values. (Such as \u003ccode\u003ez3{verbose=True}\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eMost fields are self explanatory. The notion of precision for printing algebraic reals stems from the fact that such values does\n not necessarily have finite decimal representations, and hence we have to stop printing at some depth. It is important to\n emphasize that such values always have infinite precision internally. The issue is merely with how we print such an infinite\n precision value on the screen. The field \u003ccode\u003e\u003ca\u003eprintRealPrec\u003c/a\u003e\u003c/code\u003e controls the printing precision, by specifying the number of digits after\n the decimal point. The default value is 16, but it can be set to any positive integer.\n\u003c/p\u003e\u003cp\u003eWhen printing, SBV will add the suffix \u003ccode\u003e...\u003c/code\u003e at the and of a real-value, if the given bound is not sufficient to represent the real-value\n exactly. Otherwise, the number will be written out in standard decimal notation. Note that SBV will always print the whole value if it\n is precise (i.e., if it fits in a finite number of digits), regardless of the precision limit. The limit only applies if the representation\n of the real value is not finite, i.e., if it is not rational.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SMTConfig",
          "package": "sbv",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "data"
        },
        "index": {
          "description": "Solver configuration See also z3 yices cvc4 and boolector which are instantiations of this type for those solvers with reasonable defaults In particular custom configuration can be created by varying those values Such as z3 verbose True Most fields are self explanatory The notion of precision for printing algebraic reals stems from the fact that such values does not necessarily have finite decimal representations and hence we have to stop printing at some depth It is important to emphasize that such values always have infinite precision internally The issue is merely with how we print such an infinite precision value on the screen The field printRealPrec controls the printing precision by specifying the number of digits after the decimal point The default value is but it can be set to any positive integer When printing SBV will add the suffix at the and of real-value if the given bound is not sufficient to represent the real-value exactly Otherwise the number will be written out in standard decimal notation Note that SBV will always print the whole value if it is precise i.e if it fits in finite number of digits regardless of the precision limit The limit only applies if the representation of the real value is not finite i.e if it is not rational",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SMTConfig",
          "package": "sbv",
          "partial": "SMTConfig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SMTConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSMT-Lib logics. If left unspecified SBV will pick the logic based on what it determines is needed. However, the\n user can override this choice using the \u003ccode\u003euseLogic\u003c/code\u003e parameter to the configuration. This is especially handy if\n one is experimenting with custom logics that might be supported on new solvers.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SMTLibLogic",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "data"
        },
        "index": {
          "description": "SMT-Lib logics If left unspecified SBV will pick the logic based on what it determines is needed However the user can override this choice using the useLogic parameter to the configuration This is especially handy if one is experimenting with custom logics that might be supported on new solvers",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SMTLibLogic",
          "package": "sbv",
          "partial": "SMTLib Logic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SMTLibLogic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of an SMT solver call. Each constructor is tagged with\n the \u003ccode\u003e\u003ca\u003eSMTConfig\u003c/a\u003e\u003c/code\u003e that created it so that further tools can inspect it\n and build layers of results, if needed. For ordinary uses of the library,\n this type should not be needed, instead use the accessor functions on\n it. (Custom Show instances and model extractors.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SMTResult",
          "package": "sbv",
          "source": "src/Data-SBV-SMT-SMT.html#SMTResult",
          "type": "data"
        },
        "index": {
          "description": "The result of an SMT solver call Each constructor is tagged with the SMTConfig that created it so that further tools can inspect it and build layers of results if needed For ordinary uses of the library this type should not be needed instead use the accessor functions on it Custom Show instances and model extractors",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SMTResult",
          "package": "sbv",
          "partial": "SMTResult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SMTResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SMTSolver",
          "package": "sbv",
          "source": "src/Data-SBV-SMT-SMT.html#SMTSolver",
          "type": "data"
        },
        "index": {
          "description": "An SMT solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SMTSolver",
          "package": "sbv",
          "partial": "SMTSolver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SMTSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinite precision symbolic algebraic real value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SReal",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SReal",
          "type": "type"
        },
        "index": {
          "description": "Infinite precision symbolic algebraic real value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SReal",
          "package": "sbv",
          "partial": "SReal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbolic tree containing values of type e, indexed by\n elements of type i. Note that these are full-trees, and their\n their shapes remain constant. There is no API provided that\n can change the shape of the tree. These structures are useful\n when dealing with data-structures that are indexed with symbolic\n values where access time is important. \u003ccode\u003e\u003ca\u003eSTree\u003c/a\u003e\u003c/code\u003e structures provide\n logarithmic time reads and writes.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "STree",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-STree.html#STree",
          "type": "type"
        },
        "index": {
          "description": "symbolic tree containing values of type indexed by elements of type Note that these are full-trees and their their shapes remain constant There is no API provided that can change the shape of the tree These structures are useful when dealing with data-structures that are indexed with symbolic values where access time is important STree structures provide logarithmic time reads and writes",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "STree",
          "package": "sbv",
          "partial": "STree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:STree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16-bit unsigned symbolic value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SWord16",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SWord16",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned symbolic value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SWord16",
          "package": "sbv",
          "partial": "SWord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit unsigned symbolic value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SWord32",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SWord32",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned symbolic value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SWord32",
          "package": "sbv",
          "partial": "SWord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit unsigned symbolic value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SWord64",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SWord64",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned symbolic value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SWord64",
          "package": "sbv",
          "partial": "SWord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned symbolic value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SWord8",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SWord8",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned symbolic value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SWord8",
          "package": "sbv",
          "partial": "SWord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eSatModel\u003c/a\u003e\u003c/code\u003e can be automatically extracted from models returned by the\n solvers. The idea is that the sbv infrastructure provides a stream of \u003ccode\u003eCW'\u003c/code\u003es (constant-words)\n coming from the solver, and the type \u003ccode\u003ea\u003c/code\u003e is interpreted based on these constants. Many typical\n instances are already provided, so new instances can be declared with relative ease.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003eparseCWs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SatModel",
          "package": "sbv",
          "source": "src/Data-SBV-SMT-SMT.html#SatModel",
          "type": "class"
        },
        "index": {
          "description": "Instances of SatModel can be automatically extracted from models returned by the solvers The idea is that the sbv infrastructure provides stream of CW constant-words coming from the solver and the type is interpreted based on these constants Many typical instances are already provided so new instances can be declared with relative ease Minimum complete definition parseCWs",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SatModel",
          "package": "sbv",
          "partial": "Sat Model",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SatModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003esat\u003c/code\u003e call results in a \u003ccode\u003e\u003ca\u003eSatResult\u003c/a\u003e\u003c/code\u003e\n The reason for having a separate \u003ccode\u003e\u003ca\u003eSatResult\u003c/a\u003e\u003c/code\u003e is to have a more meaningful \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SatResult",
          "package": "sbv",
          "source": "src/Data-SBV-SMT-SMT.html#SatResult",
          "type": "newtype"
        },
        "index": {
          "description": "sat call results in SatResult The reason for having separate SatResult is to have more meaningful Show instance",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SatResult",
          "package": "sbv",
          "partial": "Sat Result",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SatResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign casting a value into another. This essentially\n means forgetting the sign bit and reinterpreting the bits\n accordingly when converting a signed value to an unsigned\n one. Similarly, when an unsigned quantity is converted to\n a signed one, the most significant bit is interpreted\n as the sign. We only define instances when the source\n and target types are precisely the same size.\n The idea is that \u003ccode\u003e\u003ca\u003esignCast\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunsignCast\u003c/a\u003e\u003c/code\u003e must form\n an isomorphism pair between the types \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, i.e., we\n expect the following two properties to hold:\n\u003c/p\u003e\u003cpre\u003e\n    signCast . unsignCast = id\n    unsingCast . signCast = id\n\u003c/pre\u003e\u003cp\u003eNote that one naive way to implement both these operations\n is simply to compute \u003ccode\u003efromBitsLE . blastLE\u003c/code\u003e, i.e., first\n get all the bits of the word and then reconstruct in the target\n type. While this is semantically correct, it generates a lot\n of code (both during proofs via SMT-Lib, and when compiled to C).\n The goal of this class is to avoid that cost, so these operations\n can be compiled very efficiently, they will essentially become no-op's.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: All, no defaults.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SignCast",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-SignCast.html#SignCast",
          "type": "class"
        },
        "index": {
          "description": "Sign casting value into another This essentially means forgetting the sign bit and reinterpreting the bits accordingly when converting signed value to an unsigned one Similarly when an unsigned quantity is converted to signed one the most significant bit is interpreted as the sign We only define instances when the source and target types are precisely the same size The idea is that signCast and unsignCast must form an isomorphism pair between the types and i.e we expect the following two properties to hold signCast unsignCast id unsingCast signCast id Note that one naive way to implement both these operations is simply to compute fromBitsLE blastLE i.e first get all the bits of the word and then reconstruct in the target type While this is semantically correct it generates lot of code both during proofs via SMT-Lib and when compiled to The goal of this class is to avoid that cost so these operations can be compiled very efficiently they will essentially become no-op Minimal complete definition All no defaults",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SignCast",
          "package": "sbv",
          "partial": "Sign Cast",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SignCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting an \u003ccode\u003ea\u003c/code\u003e into two \u003ccode\u003eb\u003c/code\u003e's and joining back.\n Intuitively, \u003ccode\u003ea\u003c/code\u003e is a larger bit-size word than \u003ccode\u003eb\u003c/code\u003e, typically double.\n The \u003ccode\u003e\u003ca\u003eextend\u003c/a\u003e\u003c/code\u003e operation captures embedding of a \u003ccode\u003eb\u003c/code\u003e value into an \u003ccode\u003ea\u003c/code\u003e\n without changing its semantic value.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: All, no defaults.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Splittable",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Splittable.html#Splittable",
          "type": "class"
        },
        "index": {
          "description": "Splitting an into two and joining back Intuitively is larger bit-size word than typically double The extend operation captures embedding of value into an without changing its semantic value Minimal complete definition All no defaults",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Splittable",
          "package": "sbv",
          "partial": "Splittable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Splittable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlat arrays of symbolic values\n An \u003ccode\u003earray a b\u003c/code\u003e is an array indexed by the type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSBV\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, with elements of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSBV\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e\n If an initial value is not provided in \u003ccode\u003e\u003ca\u003enewArray_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enewArray\u003c/a\u003e\u003c/code\u003e methods, then the elements\n are left unspecified, i.e., the solver is free to choose any value. This is the right thing\n to do if arrays are used as inputs to functions to be verified, typically. \n\u003c/p\u003e\u003cp\u003eWhile it's certainly possible for user to create instances of \u003ccode\u003e\u003ca\u003eSymArray\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003e\u003ca\u003eSArray\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSFunArray\u003c/a\u003e\u003c/code\u003e instances already provided should cover most use cases\n in practice. (There are some differences between these models, however, see the corresponding\n declaration.)\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: All methods are required, no defaults.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SymArray",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SymArray",
          "type": "class"
        },
        "index": {
          "description": "Flat arrays of symbolic values An array is an array indexed by the type SBV with elements of type SBV If an initial value is not provided in newArray and newArray methods then the elements are left unspecified i.e the solver is free to choose any value This is the right thing to do if arrays are used as inputs to functions to be verified typically While it certainly possible for user to create instances of SymArray the SArray and SFunArray instances already provided should cover most use cases in practice There are some differences between these models however see the corresponding declaration Minimal complete definition All methods are required no defaults",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SymArray",
          "package": "sbv",
          "partial": "Sym Array",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SymArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSymWord\u003c/a\u003e\u003c/code\u003e is a potential symbolic bitvector that can be created instances of\n to be fed to a symbolic program. Note that these methods are typically not needed\n in casual uses with \u003ccode\u003eprove\u003c/code\u003e, \u003ccode\u003esat\u003c/code\u003e, \u003ccode\u003eallSat\u003c/code\u003e etc, as default instances automatically\n provide the necessary bits.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "SymWord",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#SymWord",
          "type": "class"
        },
        "index": {
          "description": "SymWord is potential symbolic bitvector that can be created instances of to be fed to symbolic program Note that these methods are typically not needed in casual uses with prove sat allSat etc as default instances automatically provide the necessary bits",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SymWord",
          "package": "sbv",
          "partial": "Sym Word",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:SymWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Symbolic computation. Represented by a reader monad carrying the\n state of the computation, layered on top of IO for creating unique\n references to hold onto intermediate results.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Symbolic",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Data.html#Symbolic",
          "type": "data"
        },
        "index": {
          "description": "Symbolic computation Represented by reader monad carrying the state of the computation layered on top of IO for creating unique references to hold onto intermediate results",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Symbolic",
          "package": "sbv",
          "partial": "Symbolic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Symbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest output style\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "TestStyle",
          "package": "sbv",
          "source": "src/Data-SBV-Tools-GenTest.html#TestStyle",
          "type": "data"
        },
        "index": {
          "description": "Test output style",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "TestStyle",
          "package": "sbv",
          "partial": "Test Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:TestStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of test vectors (abstract)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "TestVectors",
          "package": "sbv",
          "source": "src/Data-SBV-Tools-GenTest.html#TestVectors",
          "type": "data"
        },
        "index": {
          "description": "Type of test vectors abstract",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "TestVectors",
          "package": "sbv",
          "partial": "Test Vectors",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:TestVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eprove\u003c/code\u003e call results in a \u003ccode\u003e\u003ca\u003eThmResult\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "ThmResult",
          "package": "sbv",
          "source": "src/Data-SBV-SMT-SMT.html#ThmResult",
          "type": "newtype"
        },
        "index": {
          "description": "prove call results in ThmResult",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "ThmResult",
          "package": "sbv",
          "partial": "Thm Result",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:ThmResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUninterpreted constants and functions. An uninterpreted constant is\n a value that is indexed by its name. The only property the prover assumes\n about these values are that they are equivalent to themselves; i.e., (for\n functions) they return the same results when applied to same arguments.\n We support uninterpreted-functions as a general means of black-box'ing\n operations that are \u003cem\u003eirrelevant\u003c/em\u003e for the purposes of the proof; i.e., when\n the proofs can be performed without any knowledge about the function itself.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003esbvUninterpret\u003c/a\u003e\u003c/code\u003e. However, most instances in\n practice are already provided by SBV, so end-users should not need to define their\n own instances.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Uninterpreted",
          "package": "sbv",
          "source": "src/Data-SBV-BitVectors-Model.html#Uninterpreted",
          "type": "class"
        },
        "index": {
          "description": "Uninterpreted constants and functions An uninterpreted constant is value that is indexed by its name The only property the prover assumes about these values are that they are equivalent to themselves i.e for functions they return the same results when applied to same arguments We support uninterpreted-functions as general means of black-box ing operations that are irrelevant for the purposes of the proof i.e when the proofs can be performed without any knowledge about the function itself Minimal complete definition sbvUninterpret However most instances in practice are already provided by SBV so end-users should not need to define their own instances",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Uninterpreted",
          "package": "sbv",
          "partial": "Uninterpreted",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#t:Uninterpreted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eor\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "(|||)",
          "package": "sbv",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#%7C%7C%7C",
          "type": "method"
        },
        "index": {
          "description": "or",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(|||) |||",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enor\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "(~|)",
          "package": "sbv",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#~%7C",
          "type": "method"
        },
        "index": {
          "description": "nor",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(~|) ~|",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:-126--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enand\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "(~&)",
          "package": "sbv",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#~%26",
          "type": "method"
        },
        "index": {
          "description": "nand",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(~&) ~&",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:-126--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "(#)",
          "package": "sbv",
          "signature": "b -\u003e b -\u003e a",
          "source": "src/Data-SBV-BitVectors-Splittable.html#%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(#) #",
          "normalized": "a-\u003ea-\u003eb",
          "package": "sbv",
          "signature": "b-\u003eb-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eand\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "(&&&)",
          "package": "sbv",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#%26%26%26",
          "type": "method"
        },
        "index": {
          "description": "and",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(&&&) &&&",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exor\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "(\u003c+\u003e)",
          "package": "sbv",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#%3C%2B%3E",
          "type": "method"
        },
        "index": {
          "description": "xor",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalence\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "(\u003c=\u003e)",
          "package": "sbv",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#%3C%3D%3E",
          "type": "method"
        },
        "index": {
          "description": "equivalence",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(\u003c=\u003e) \u003c=\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:-60--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "(===)",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e IO ThmResult",
          "source": "src/Data-SBV-Provers-Prover.html#%3D%3D%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(===) ===",
          "normalized": "a-\u003ea-\u003eIO ThmResult",
          "package": "sbv",
          "signature": "a-\u003ea-\u003eIO ThmResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimplies\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "(==\u003e)",
          "package": "sbv",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#%3D%3D%3E",
          "type": "method"
        },
        "index": {
          "description": "implies",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(==\u003e) ==\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:-61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "(.\u003c)",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#.%3C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(.\u003c) .\u003c",
          "normalized": "a-\u003ea-\u003eSBool",
          "package": "sbv",
          "signature": "a-\u003ea-\u003eSBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:.-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "(.==)",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#.%3D%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "(.==) .==",
          "normalized": "a-\u003ea-\u003eSBool",
          "package": "sbv",
          "signature": "a-\u003ea-\u003eSBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:.-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormulas over the theory of linear integer arithmetic and arrays extended with free sort and function symbols but restricted to arrays with integer indices and values\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "AUFLIA",
          "package": "sbv",
          "signature": "AUFLIA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Formulas over the theory of linear integer arithmetic and arrays extended with free sort and function symbols but restricted to arrays with integer indices and values",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "AUFLIA",
          "package": "sbv",
          "partial": "AUFLIA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:AUFLIA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear formulas with free sort and function symbols over one- and two-dimentional arrays of integer index and real value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "AUFLIRA",
          "package": "sbv",
          "signature": "AUFLIRA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Linear formulas with free sort and function symbols over one and two-dimentional arrays of integer index and real value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "AUFLIRA",
          "package": "sbv",
          "partial": "AUFLIRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:AUFLIRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormulas with free function and predicate symbols over a theory of arrays of arrays of integer index and real value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "AUFNIRA",
          "package": "sbv",
          "signature": "AUFNIRA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Formulas with free function and predicate symbols over theory of arrays of arrays of integer index and real value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "AUFNIRA",
          "package": "sbv",
          "partial": "AUFNIRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:AUFNIRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "AllSatResult",
          "package": "sbv",
          "signature": "AllSatResult (Bool, [SMTResult])",
          "source": "src/Data-SBV-SMT-SMT.html#AllSatResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "AllSatResult",
          "normalized": "AllSatResult(Bool,[SMTResult])",
          "package": "sbv",
          "partial": "All Sat Result",
          "signature": "AllSatResult(Bool,[SMTResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:AllSatResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs a C array of structs with given name\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "C",
          "package": "sbv",
          "signature": "C String",
          "source": "src/Data-SBV-Tools-GenTest.html#TestStyle",
          "type": "function"
        },
        "index": {
          "description": "As array of structs with given name",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "C",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003edouble\u003c/pre\u003e",
          "module": "Data.SBV",
          "name": "CgDouble",
          "package": "sbv",
          "signature": "CgDouble",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgSRealType",
          "type": "function"
        },
        "index": {
          "description": "double",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "CgDouble",
          "package": "sbv",
          "partial": "Cg Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:CgDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efloat\u003c/pre\u003e",
          "module": "Data.SBV",
          "name": "CgFloat",
          "package": "sbv",
          "signature": "CgFloat",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgSRealType",
          "type": "function"
        },
        "index": {
          "description": "float",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "CgFloat",
          "package": "sbv",
          "partial": "Cg Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:CgFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003elong double\u003c/pre\u003e",
          "module": "Data.SBV",
          "name": "CgLongDouble",
          "package": "sbv",
          "signature": "CgLongDouble",
          "source": "src/Data-SBV-Compilers-CodeGen.html#CgSRealType",
          "type": "function"
        },
        "index": {
          "description": "long double",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "CgLongDouble",
          "package": "sbv",
          "partial": "Cg Long Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:CgLongDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this name for the logic\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "CustomLogic",
          "package": "sbv",
          "signature": "CustomLogic String",
          "source": "src/Data-SBV-BitVectors-Data.html#Logic",
          "type": "function"
        },
        "index": {
          "description": "Use this name for the logic",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "CustomLogic",
          "package": "sbv",
          "partial": "Custom Logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:CustomLogic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs a Forte/Verilog value with given name.\n If the boolean is True then vectors are blasted big-endian, otherwise little-endian\n The indices are the split points on bit-vectors for input and output values\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Forte",
          "package": "sbv",
          "signature": "Forte String Bool ([Int], [Int])",
          "source": "src/Data-SBV-Tools-GenTest.html#TestStyle",
          "type": "function"
        },
        "index": {
          "description": "As Forte Verilog value with given name If the boolean is True then vectors are blasted big-endian otherwise little-endian The indices are the split points on bit-vectors for input and output values",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Forte",
          "normalized": "Forte String Bool([Int],[Int])",
          "package": "sbv",
          "partial": "Forte",
          "signature": "Forte String Bool([Int],[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:Forte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs a Haskell value with given name\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Haskell",
          "package": "sbv",
          "signature": "Haskell String",
          "source": "src/Data-SBV-Tools-GenTest.html#TestStyle",
          "type": "function"
        },
        "index": {
          "description": "As Haskell value with given name",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Haskell",
          "package": "sbv",
          "partial": "Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:Haskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratively search. if True, it will be reporting progress\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Iterative",
          "package": "sbv",
          "signature": "Iterative Bool",
          "source": "src/Data-SBV-Tools-Optimize.html#OptimizeOpts",
          "type": "function"
        },
        "index": {
          "description": "Iteratively search if True it will be reporting progress",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Iterative",
          "package": "sbv",
          "partial": "Iterative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:Iterative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear formulas in linear real arithmetic\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "LRA",
          "package": "sbv",
          "signature": "LRA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Linear formulas in linear real arithmetic",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "LRA",
          "package": "sbv",
          "partial": "LRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:LRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse one of the logics as defined by the standard\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "PredefinedLogic",
          "package": "sbv",
          "signature": "PredefinedLogic SMTLibLogic",
          "source": "src/Data-SBV-BitVectors-Data.html#Logic",
          "type": "function"
        },
        "index": {
          "description": "Use one of the logics as defined by the standard",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "PredefinedLogic",
          "package": "sbv",
          "partial": "Predefined Logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:PredefinedLogic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProver errored out\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "ProofError",
          "package": "sbv",
          "signature": "ProofError SMTConfig [String]",
          "source": "src/Data-SBV-SMT-SMT.html#SMTResult",
          "type": "function"
        },
        "index": {
          "description": "Prover errored out",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "ProofError",
          "normalized": "ProofError SMTConfig[String]",
          "package": "sbv",
          "partial": "Proof Error",
          "signature": "ProofError SMTConfig[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:ProofError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier-free formulas over the theory of bitvectors and bitvector arrays\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_ABV",
          "package": "sbv",
          "signature": "QF_ABV",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Quantifier-free formulas over the theory of bitvectors and bitvector arrays",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_ABV",
          "package": "sbv",
          "partial": "QF ABV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_ABV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier-free formulas over the theory of bitvectors and bitvector arrays extended with free sort and function symbols\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_AUFBV",
          "package": "sbv",
          "signature": "QF_AUFBV",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Quantifier-free formulas over the theory of bitvectors and bitvector arrays extended with free sort and function symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_AUFBV",
          "package": "sbv",
          "partial": "QF AUFBV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_AUFBV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier-free linear formulas over the theory of integer arrays extended with free sort and function symbols\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_AUFLIA",
          "package": "sbv",
          "signature": "QF_AUFLIA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Quantifier-free linear formulas over the theory of integer arrays extended with free sort and function symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_AUFLIA",
          "package": "sbv",
          "partial": "QF AUFLIA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_AUFLIA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier-free formulas over the theory of arrays with extensionality\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_AX",
          "package": "sbv",
          "signature": "QF_AX",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Quantifier-free formulas over the theory of arrays with extensionality",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_AX",
          "package": "sbv",
          "partial": "QF AX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_AX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier-free formulas over the theory of fixed-size bitvectors\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_BV",
          "package": "sbv",
          "signature": "QF_BV",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Quantifier-free formulas over the theory of fixed-size bitvectors",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_BV",
          "package": "sbv",
          "partial": "QF BV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_BV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier-free formulas over the theory of floating point numbers\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_FPA",
          "package": "sbv",
          "signature": "QF_FPA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Quantifier-free formulas over the theory of floating point numbers",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_FPA",
          "package": "sbv",
          "partial": "QF FPA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_FPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier-free formulas over the theory of floating point numbers, arrays, and bit-vectors\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_FPABV",
          "package": "sbv",
          "signature": "QF_FPABV",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Quantifier-free formulas over the theory of floating point numbers arrays and bit-vectors",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_FPABV",
          "package": "sbv",
          "partial": "QF FPABV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_FPABV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference Logic over the integers. Boolean combinations of inequations of the form x - y \u003c b where x and y are integer variables and b is an integer constant\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_IDL",
          "package": "sbv",
          "signature": "QF_IDL",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Difference Logic over the integers Boolean combinations of inequations of the form where and are integer variables and is an integer constant",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_IDL",
          "package": "sbv",
          "partial": "QF IDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_IDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnquantified linear integer arithmetic. In essence, Boolean combinations of inequations between linear polynomials over integer variables\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_LIA",
          "package": "sbv",
          "signature": "QF_LIA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Unquantified linear integer arithmetic In essence Boolean combinations of inequations between linear polynomials over integer variables",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_LIA",
          "package": "sbv",
          "partial": "QF LIA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_LIA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnquantified linear real arithmetic. In essence, Boolean combinations of inequations between linear polynomials over real variables. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_LRA",
          "package": "sbv",
          "signature": "QF_LRA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Unquantified linear real arithmetic In essence Boolean combinations of inequations between linear polynomials over real variables",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_LRA",
          "package": "sbv",
          "partial": "QF LRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_LRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier-free integer arithmetic. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_NIA",
          "package": "sbv",
          "signature": "QF_NIA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Quantifier-free integer arithmetic",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_NIA",
          "package": "sbv",
          "partial": "QF NIA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_NIA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifier-free real arithmetic. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_NRA",
          "package": "sbv",
          "signature": "QF_NRA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Quantifier-free real arithmetic",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_NRA",
          "package": "sbv",
          "partial": "QF NRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_NRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference Logic over the reals. In essence, Boolean combinations of inequations of the form x - y \u003c b where x and y are real variables and b is a rational constant. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_RDL",
          "package": "sbv",
          "signature": "QF_RDL",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Difference Logic over the reals In essence Boolean combinations of inequations of the form where and are real variables and is rational constant",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_RDL",
          "package": "sbv",
          "partial": "QF RDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_RDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnquantified formulas built over a signature of uninterpreted (i.e., free) sort and function symbols. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_UF",
          "package": "sbv",
          "signature": "QF_UF",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Unquantified formulas built over signature of uninterpreted i.e free sort and function symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_UF",
          "package": "sbv",
          "partial": "QF UF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_UF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnquantified formulas over bitvectors with uninterpreted sort function and symbols. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_UFBV",
          "package": "sbv",
          "signature": "QF_UFBV",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Unquantified formulas over bitvectors with uninterpreted sort function and symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_UFBV",
          "package": "sbv",
          "partial": "QF UFBV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_UFBV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference Logic over the integers (in essence) but with uninterpreted sort and function symbols. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_UFIDL",
          "package": "sbv",
          "signature": "QF_UFIDL",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Difference Logic over the integers in essence but with uninterpreted sort and function symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_UFIDL",
          "package": "sbv",
          "partial": "QF UFIDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_UFIDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnquantified linear integer arithmetic with uninterpreted sort and function symbols. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_UFLIA",
          "package": "sbv",
          "signature": "QF_UFLIA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Unquantified linear integer arithmetic with uninterpreted sort and function symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_UFLIA",
          "package": "sbv",
          "partial": "QF UFLIA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_UFLIA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnquantified linear real arithmetic with uninterpreted sort and function symbols. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_UFLRA",
          "package": "sbv",
          "signature": "QF_UFLRA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Unquantified linear real arithmetic with uninterpreted sort and function symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_UFLRA",
          "package": "sbv",
          "partial": "QF UFLRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_UFLRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnquantified non-linear real arithmetic with uninterpreted sort and function symbols. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "QF_UFNRA",
          "package": "sbv",
          "signature": "QF_UFNRA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Unquantified non-linear real arithmetic with uninterpreted sort and function symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "QF_UFNRA",
          "package": "sbv",
          "partial": "QF UFNRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:QF_UFNRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse quantifiers\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Quantified",
          "package": "sbv",
          "signature": "Quantified",
          "source": "src/Data-SBV-Tools-Optimize.html#OptimizeOpts",
          "type": "function"
        },
        "index": {
          "description": "Use quantifiers",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Quantified",
          "package": "sbv",
          "partial": "Quantified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:Quantified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound to nearest representable floating point value.\n If precisely at half-way, pick the number further away from 0.\n (That is, for positive values, pick the greater; for negative values, pick the smaller.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "RoundNearestTiesToAway",
          "package": "sbv",
          "signature": "RoundNearestTiesToAway",
          "source": "src/Data-SBV-BitVectors-Data.html#RoundingMode",
          "type": "function"
        },
        "index": {
          "description": "Round to nearest representable floating point value If precisely at half-way pick the number further away from That is for positive values pick the greater for negative values pick the smaller",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "RoundNearestTiesToAway",
          "package": "sbv",
          "partial": "Round Nearest Ties To Away",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:RoundNearestTiesToAway"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound to nearest representable floating point value.\n If precisely at half-way, pick the even number.\n (In this context, \u003cem\u003eeven\u003c/em\u003e means the lowest-order bit is zero.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "RoundNearestTiesToEven",
          "package": "sbv",
          "signature": "RoundNearestTiesToEven",
          "source": "src/Data-SBV-BitVectors-Data.html#RoundingMode",
          "type": "function"
        },
        "index": {
          "description": "Round to nearest representable floating point value If precisely at half-way pick the even number In this context even means the lowest-order bit is zero",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "RoundNearestTiesToEven",
          "package": "sbv",
          "partial": "Round Nearest Ties To Even",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:RoundNearestTiesToEven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound towards negative infinity. (Also known as rounding-down or floor.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "RoundTowardNegative",
          "package": "sbv",
          "signature": "RoundTowardNegative",
          "source": "src/Data-SBV-BitVectors-Data.html#RoundingMode",
          "type": "function"
        },
        "index": {
          "description": "Round towards negative infinity Also known as rounding-down or floor",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "RoundTowardNegative",
          "package": "sbv",
          "partial": "Round Toward Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:RoundTowardNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound towards positive infinity. (Also known as rounding-up or ceiling.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "RoundTowardPositive",
          "package": "sbv",
          "signature": "RoundTowardPositive",
          "source": "src/Data-SBV-BitVectors-Data.html#RoundingMode",
          "type": "function"
        },
        "index": {
          "description": "Round towards positive infinity Also known as rounding-up or ceiling",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "RoundTowardPositive",
          "package": "sbv",
          "partial": "Round Toward Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:RoundTowardPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound towards zero. (Also known as truncation.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "RoundTowardZero",
          "package": "sbv",
          "signature": "RoundTowardZero",
          "source": "src/Data-SBV-BitVectors-Data.html#RoundingMode",
          "type": "function"
        },
        "index": {
          "description": "Round towards zero Also known as truncation",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "RoundTowardZero",
          "package": "sbv",
          "partial": "Round Toward Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:RoundTowardZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "SMTConfig",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SMTConfig",
          "package": "sbv",
          "partial": "SMTConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:SMTConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "SMTSolver",
          "package": "sbv",
          "signature": "SMTSolver",
          "source": "src/Data-SBV-SMT-SMT.html#SMTSolver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SMTSolver",
          "package": "sbv",
          "partial": "SMTSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:SMTSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "SatResult",
          "package": "sbv",
          "signature": "SatResult SMTResult",
          "source": "src/Data-SBV-SMT-SMT.html#SatResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "SatResult",
          "package": "sbv",
          "partial": "Sat Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:SatResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSatisfiable with model\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Satisfiable",
          "package": "sbv",
          "signature": "Satisfiable SMTConfig SMTModel",
          "source": "src/Data-SBV-SMT-SMT.html#SMTResult",
          "type": "function"
        },
        "index": {
          "description": "Satisfiable with model",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Satisfiable",
          "package": "sbv",
          "partial": "Satisfiable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:Satisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "ThmResult",
          "package": "sbv",
          "signature": "ThmResult SMTResult",
          "source": "src/Data-SBV-SMT-SMT.html#ThmResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "ThmResult",
          "package": "sbv",
          "partial": "Thm Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:ThmResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation timed out (see the \u003ccode\u003etimeout\u003c/code\u003e combinator)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "TimeOut",
          "package": "sbv",
          "signature": "TimeOut SMTConfig",
          "source": "src/Data-SBV-SMT-SMT.html#SMTResult",
          "type": "function"
        },
        "index": {
          "description": "Computation timed out see the timeout combinator",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "TimeOut",
          "package": "sbv",
          "partial": "Time Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:TimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear real arithmetic with uninterpreted sort and function symbols. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "UFLRA",
          "package": "sbv",
          "signature": "UFLRA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Linear real arithmetic with uninterpreted sort and function symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "UFLRA",
          "package": "sbv",
          "partial": "UFLRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:UFLRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-linear integer arithmetic with uninterpreted sort and function symbols. \n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "UFNIA",
          "package": "sbv",
          "signature": "UFNIA",
          "source": "src/Data-SBV-BitVectors-Data.html#SMTLibLogic",
          "type": "function"
        },
        "index": {
          "description": "Non-linear integer arithmetic with uninterpreted sort and function symbols",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "UFNIA",
          "package": "sbv",
          "partial": "UFNIA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:UFNIA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProver returned unknown, with a potential (possibly bogus) model\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Unknown",
          "package": "sbv",
          "signature": "Unknown SMTConfig SMTModel",
          "source": "src/Data-SBV-SMT-SMT.html#SMTResult",
          "type": "function"
        },
        "index": {
          "description": "Prover returned unknown with potential possibly bogus model",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Unknown",
          "package": "sbv",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsatisfiable\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "Unsatisfiable",
          "package": "sbv",
          "signature": "Unsatisfiable SMTConfig",
          "source": "src/Data-SBV-SMT-SMT.html#SMTResult",
          "type": "function"
        },
        "index": {
          "description": "Unsatisfiable",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "Unsatisfiable",
          "package": "sbv",
          "partial": "Unsatisfiable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:Unsatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a user specified axiom to the generated SMT-Lib file. The first argument is a mere\n string, use for commenting purposes. The second argument is intended to hold the multiple-lines\n of the axiom text as expressed in SMT-Lib notation. Note that we perform no checks on the axiom\n itself, to see whether it's actually well-formed or is sensical by any means.\n A separate formalization of SMT-Lib would be very useful here.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "addAxiom",
          "package": "sbv",
          "signature": "String -\u003e [String] -\u003e Symbolic ()",
          "source": "src/Data-SBV-BitVectors-Data.html#addAxiom",
          "type": "function"
        },
        "index": {
          "description": "Add user specified axiom to the generated SMT-Lib file The first argument is mere string use for commenting purposes The second argument is intended to hold the multiple-lines of the axiom text as expressed in SMT-Lib notation Note that we perform no checks on the axiom itself to see whether it actually well-formed or is sensical by any means separate formalization of SMT-Lib would be very useful here",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "addAxiom",
          "normalized": "String-\u003e[String]-\u003eSymbolic()",
          "package": "sbv",
          "partial": "Axiom",
          "signature": "String-\u003e[String]-\u003eSymbolic()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:addAxiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns (symbolic) true if all the elements of the given list are different.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "allDifferent",
          "package": "sbv",
          "signature": "[a] -\u003e SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#allDifferent",
          "type": "function"
        },
        "index": {
          "description": "Returns symbolic true if all the elements of the given list are different",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "allDifferent",
          "normalized": "[a]-\u003eSBool",
          "package": "sbv",
          "partial": "Different",
          "signature": "[a]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:allDifferent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns (symbolic) true if all the elements of the given list are the same.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "allEqual",
          "package": "sbv",
          "signature": "[a] -\u003e SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#allEqual",
          "type": "function"
        },
        "index": {
          "description": "Returns symbolic true if all the elements of the given list are the same",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "allEqual",
          "normalized": "[a]-\u003eSBool",
          "package": "sbv",
          "partial": "Equal",
          "signature": "[a]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:allEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all satisfying assignments for a predicate, equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eallSatWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultSMTCfg\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n Satisfying assignments are constructed lazily, so they will be available as returned by the solver\n and on demand.\n\u003c/p\u003e\u003cp\u003eNB. Uninterpreted constant/function values and counter-examples for array values are ignored for\n the purposes of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eallSat\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. That is, only the satisfying assignments modulo uninterpreted functions and\n array inputs will be returned. This is due to the limitation of not having a robust means of getting a\n function counter-example back from the SMT solver.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "allSat",
          "package": "sbv",
          "signature": "a -\u003e IO AllSatResult",
          "source": "src/Data-SBV-Provers-Prover.html#allSat",
          "type": "function"
        },
        "index": {
          "description": "Return all satisfying assignments for predicate equivalent to allSatWith defaultSMTCfg Satisfying assignments are constructed lazily so they will be available as returned by the solver and on demand NB Uninterpreted constant function values and counter-examples for array values are ignored for the purposes of allSat That is only the satisfying assignments modulo uninterpreted functions and array inputs will be returned This is due to the limitation of not having robust means of getting function counter-example back from the SMT solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "allSat",
          "normalized": "a-\u003eIO AllSatResult",
          "package": "sbv",
          "partial": "Sat",
          "signature": "a-\u003eIO AllSatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:allSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all satisfying assignments using the given SMT-solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "allSatWith",
          "package": "sbv",
          "signature": "SMTConfig -\u003e a -\u003e IO AllSatResult",
          "source": "src/Data-SBV-Provers-Prover.html#allSatWith",
          "type": "function"
        },
        "index": {
          "description": "Find all satisfying assignments using the given SMT-solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "allSatWith",
          "normalized": "SMTConfig-\u003ea-\u003eIO AllSatResult",
          "package": "sbv",
          "partial": "Sat With",
          "signature": "SMTConfig-\u003ea-\u003eIO AllSatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:allSatWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "bAll",
          "package": "sbv",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#bAll",
          "type": "function"
        },
        "index": {
          "description": "Generalization of all",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "bAll",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003eb",
          "package": "sbv",
          "partial": "All",
          "signature": "(a-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:bAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "bAnd",
          "package": "sbv",
          "signature": "[b] -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#bAnd",
          "type": "function"
        },
        "index": {
          "description": "Generalization of and",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "bAnd",
          "normalized": "[a]-\u003ea",
          "package": "sbv",
          "partial": "And",
          "signature": "[b]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:bAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "bAny",
          "package": "sbv",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#bAny",
          "type": "function"
        },
        "index": {
          "description": "Generalization of any",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "bAny",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003eb",
          "package": "sbv",
          "partial": "Any",
          "signature": "(a-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:bAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "bOr",
          "package": "sbv",
          "signature": "[b] -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#bOr",
          "type": "function"
        },
        "index": {
          "description": "Generalization of or",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "bOr",
          "normalized": "[a]-\u003ea",
          "package": "sbv",
          "partial": "Or",
          "signature": "[b]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:bOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a number in bin, without prefix, or types.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "bin",
          "package": "sbv",
          "signature": "a -\u003e String",
          "source": "src/Data-SBV-BitVectors-PrettyNum.html#bin",
          "type": "method"
        },
        "index": {
          "description": "Show number in bin without prefix or types",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "bin",
          "normalized": "a-\u003eString",
          "package": "sbv",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:bin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a number in binary (starting with \u003ccode\u003e0b\u003c/code\u003e and type.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "binS",
          "package": "sbv",
          "signature": "a -\u003e String",
          "source": "src/Data-SBV-BitVectors-PrettyNum.html#binS",
          "type": "method"
        },
        "index": {
          "description": "Show number in binary starting with and type",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "binS",
          "normalized": "a-\u003eString",
          "package": "sbv",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:binS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBig-endian blasting of a word into its bits. Also see the \u003ccode\u003eFromBits\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "blastBE",
          "package": "sbv",
          "signature": "SBV a -\u003e [SBool]",
          "source": "src/Data-SBV-BitVectors-Model.html#blastBE",
          "type": "function"
        },
        "index": {
          "description": "Big-endian blasting of word into its bits Also see the FromBits class",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "blastBE",
          "normalized": "SBV a-\u003e[SBool]",
          "package": "sbv",
          "partial": "BE",
          "signature": "SBV a-\u003e[SBool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:blastBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLittle-endian blasting of a word into its bits. Also see the \u003ccode\u003eFromBits\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "blastLE",
          "package": "sbv",
          "signature": "SBV a -\u003e [SBool]",
          "source": "src/Data-SBV-BitVectors-Model.html#blastLE",
          "type": "function"
        },
        "index": {
          "description": "Little-endian blasting of word into its bits Also see the FromBits class",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "blastLE",
          "normalized": "SBV a-\u003e[SBool]",
          "package": "sbv",
          "partial": "LE",
          "signature": "SBV a-\u003e[SBool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:blastLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomplement\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "bnot",
          "package": "sbv",
          "signature": "b -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#bnot",
          "type": "method"
        },
        "index": {
          "description": "complement",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "bnot",
          "normalized": "a-\u003ea",
          "package": "sbv",
          "signature": "b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:bnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration for the Boolector SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "boolector",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Provers-Prover.html#boolector",
          "type": "function"
        },
        "index": {
          "description": "Default configuration for the Boolector SMT solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "boolector",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:boolector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVarious capabilities of the solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "capabilities",
          "package": "sbv",
          "signature": "SolverCapabilities",
          "source": "src/Data-SBV-SMT-SMT.html#SMTSolver",
          "type": "function"
        },
        "index": {
          "description": "Various capabilities of the solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "capabilities",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:capabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given lines to the program file generated, useful for generating programs with uninterpreted functions.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgAddDecl",
          "package": "sbv",
          "signature": "[String] -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgAddDecl",
          "type": "function"
        },
        "index": {
          "description": "Adds the given lines to the program file generated useful for generating programs with uninterpreted functions",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgAddDecl",
          "normalized": "[String]-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Add Decl",
          "signature": "[String]-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgAddDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given words to the compiler options in the generated Makefile, useful for linking extra stuff in.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgAddLDFlags",
          "package": "sbv",
          "signature": "[String] -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgAddLDFlags",
          "type": "function"
        },
        "index": {
          "description": "Adds the given words to the compiler options in the generated Makefile useful for linking extra stuff in",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgAddLDFlags",
          "normalized": "[String]-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Add LDFlags",
          "signature": "[String]-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgAddLDFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given lines to the header file generated, useful for generating programs with uninterpreted functions.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgAddPrototype",
          "package": "sbv",
          "signature": "[String] -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgAddPrototype",
          "type": "function"
        },
        "index": {
          "description": "Adds the given lines to the header file generated useful for generating programs with uninterpreted functions",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgAddPrototype",
          "normalized": "[String]-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Add Prototype",
          "signature": "[String]-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgAddPrototype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould we generate a driver program? Default: \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. When a library is generated, it will have\n a driver if any of the contituent functions has a driver. (See \u003ccode\u003ecompileToCLib\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgGenerateDriver",
          "package": "sbv",
          "signature": "Bool -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgGenerateDriver",
          "type": "function"
        },
        "index": {
          "description": "Should we generate driver program Default True When library is generated it will have driver if any of the contituent functions has driver See compileToCLib",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgGenerateDriver",
          "normalized": "Bool-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Generate Driver",
          "signature": "Bool-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgGenerateDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould we generate a Makefile? Default: \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgGenerateMakefile",
          "package": "sbv",
          "signature": "Bool -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgGenerateMakefile",
          "type": "function"
        },
        "index": {
          "description": "Should we generate Makefile Default True",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgGenerateMakefile",
          "normalized": "Bool-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Generate Makefile",
          "signature": "Bool-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgGenerateMakefile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an atomic input in the generated code.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgInput",
          "package": "sbv",
          "signature": "String -\u003e SBVCodeGen (SBV a)",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgInput",
          "type": "function"
        },
        "index": {
          "description": "Creates an atomic input in the generated code",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgInput",
          "normalized": "String-\u003eSBVCodeGen(SBV a)",
          "package": "sbv",
          "partial": "Input",
          "signature": "String-\u003eSBVCodeGen(SBV a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an array input in the generated code.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgInputArr",
          "package": "sbv",
          "signature": "Int -\u003e String -\u003e SBVCodeGen [SBV a]",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgInputArr",
          "type": "function"
        },
        "index": {
          "description": "Creates an array input in the generated code",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgInputArr",
          "normalized": "Int-\u003eString-\u003eSBVCodeGen[SBV a]",
          "package": "sbv",
          "partial": "Input Arr",
          "signature": "Int-\u003eString-\u003eSBVCodeGen[SBV a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgInputArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets number of bits to be used for representing the \u003ccode\u003e\u003ca\u003eSInteger\u003c/a\u003e\u003c/code\u003e type in the generated C code.\n The argument must be one of \u003ccode\u003e8\u003c/code\u003e, \u003ccode\u003e16\u003c/code\u003e, \u003ccode\u003e32\u003c/code\u003e, or \u003ccode\u003e64\u003c/code\u003e. Note that this is essentially unsafe as\n the semantics of unbounded Haskell integers becomes reduced to the corresponding bit size, as\n typical in most C implementations.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgIntegerSize",
          "package": "sbv",
          "signature": "Int -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgIntegerSize",
          "type": "function"
        },
        "index": {
          "description": "Sets number of bits to be used for representing the SInteger type in the generated code The argument must be one of or Note that this is essentially unsafe as the semantics of unbounded Haskell integers becomes reduced to the corresponding bit size as typical in most implementations",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgIntegerSize",
          "normalized": "Int-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Integer Size",
          "signature": "Int-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgIntegerSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an atomic output in the generated code.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgOutput",
          "package": "sbv",
          "signature": "String -\u003e SBV a -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgOutput",
          "type": "function"
        },
        "index": {
          "description": "Creates an atomic output in the generated code",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgOutput",
          "normalized": "String-\u003eSBV a-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Output",
          "signature": "String-\u003eSBV a-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an array output in the generated code.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgOutputArr",
          "package": "sbv",
          "signature": "String -\u003e [SBV a] -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgOutputArr",
          "type": "function"
        },
        "index": {
          "description": "Creates an array output in the generated code",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgOutputArr",
          "normalized": "String-\u003e[SBV a]-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Output Arr",
          "signature": "String-\u003e[SBV a]-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgOutputArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets RTC (run-time-checks) for index-out-of-bounds, shift-with-large value etc. on/off. Default: \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgPerformRTCs",
          "package": "sbv",
          "signature": "Bool -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgPerformRTCs",
          "type": "function"
        },
        "index": {
          "description": "Sets RTC run-time-checks for index-out-of-bounds shift-with-large value etc on off Default False",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgPerformRTCs",
          "normalized": "Bool-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Perform RTCs",
          "signature": "Bool-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgPerformRTCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a returned (unnamed) value in the generated code.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgReturn",
          "package": "sbv",
          "signature": "SBV a -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgReturn",
          "type": "function"
        },
        "index": {
          "description": "Creates returned unnamed value in the generated code",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgReturn",
          "normalized": "SBV a-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Return",
          "signature": "SBV a-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a returned (unnamed) array value in the generated code.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgReturnArr",
          "package": "sbv",
          "signature": "[SBV a] -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgReturnArr",
          "type": "function"
        },
        "index": {
          "description": "Creates returned unnamed array value in the generated code",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgReturnArr",
          "normalized": "[SBV a]-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Return Arr",
          "signature": "[SBV a]-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgReturnArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the C type to be used for representing the \u003ccode\u003e\u003ca\u003eSReal\u003c/a\u003e\u003c/code\u003e type in the generated C code.\n The setting can be one of C's \u003ccode\u003e\u003ca\u003efloat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edouble\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003elong double\u003c/a\u003e\u003c/code\u003e, types, depending\n on the precision needed. Note that this is essentially unsafe as the semantics of\n infinite precision SReal values becomes reduced to the corresponding floating point type in\n C, and hence it is subject to rounding errors.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgSRealType",
          "package": "sbv",
          "signature": "CgSRealType -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgSRealType",
          "type": "function"
        },
        "index": {
          "description": "Sets the type to be used for representing the SReal type in the generated code The setting can be one of float double or long double types depending on the precision needed Note that this is essentially unsafe as the semantics of infinite precision SReal values becomes reduced to the corresponding floating point type in and hence it is subject to rounding errors",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgSRealType",
          "normalized": "CgSRealType-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "SReal Type",
          "signature": "CgSRealType-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgSRealType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets driver program run time values, useful for generating programs with fixed drivers for testing. Default: None, i.e., use random values.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgSetDriverValues",
          "package": "sbv",
          "signature": "[Integer] -\u003e SBVCodeGen ()",
          "source": "src/Data-SBV-Compilers-CodeGen.html#cgSetDriverValues",
          "type": "function"
        },
        "index": {
          "description": "Sets driver program run time values useful for generating programs with fixed drivers for testing Default None i.e use random values",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgSetDriverValues",
          "normalized": "[Integer]-\u003eSBVCodeGen()",
          "package": "sbv",
          "partial": "Set Driver Values",
          "signature": "[Integer]-\u003eSBVCodeGen()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgSetDriverValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUninterpret a value, only for the purposes of code-generation. For execution\n and verification the value is used as is. For code-generation, the alternate\n definition is used. This is useful when we want to take advantage of native\n libraries on the target languages.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cgUninterpret",
          "package": "sbv",
          "signature": "String -\u003e [String] -\u003e a -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#cgUninterpret",
          "type": "method"
        },
        "index": {
          "description": "Uninterpret value only for the purposes of code-generation For execution and verification the value is used as is For code-generation the alternate definition is used This is useful when we want to take advantage of native libraries on the target languages",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cgUninterpret",
          "normalized": "String-\u003e[String]-\u003ea-\u003ea",
          "package": "sbv",
          "partial": "Uninterpret",
          "signature": "String-\u003e[String]-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cgUninterpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a symbolic computation, render it as an equivalent collection of files\n that make up a C program:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first argument is the directory name under which the files will be saved. To save\n     files in the current directory pass \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \".\"\u003c/code\u003e. Use \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for printing to stdout.\n\u003c/li\u003e\u003cli\u003e The second argument is the name of the C function to generate.\n\u003c/li\u003e\u003cli\u003e The final argument is the function to be compiled.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eCompilation will also generate a \u003ccode\u003eMakefile\u003c/code\u003e,  a header file, and a driver (test) program, etc.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "compileToC",
          "package": "sbv",
          "signature": "Maybe FilePath -\u003e String -\u003e SBVCodeGen () -\u003e IO ()",
          "source": "src/Data-SBV-Compilers-C.html#compileToC",
          "type": "function"
        },
        "index": {
          "description": "Given symbolic computation render it as an equivalent collection of files that make up program The first argument is the directory name under which the files will be saved To save files in the current directory pass Just Use Nothing for printing to stdout The second argument is the name of the function to generate The final argument is the function to be compiled Compilation will also generate Makefile header file and driver test program etc",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "compileToC",
          "normalized": "Maybe FilePath-\u003eString-\u003eSBVCodeGen()-\u003eIO()",
          "package": "sbv",
          "partial": "To",
          "signature": "Maybe FilePath-\u003eString-\u003eSBVCodeGen()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:compileToC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate code to generate a library archive (.a) from given symbolic functions. Useful when generating code\n from multiple functions that work together as a library.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first argument is the directory name under which the files will be saved. To save\n     files in the current directory pass \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \".\"\u003c/code\u003e. Use \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for printing to stdout.\n\u003c/li\u003e\u003cli\u003e The second argument is the name of the archive to generate.\n\u003c/li\u003e\u003cli\u003e The third argument is the list of functions to include, in the form of function-name/code pairs, similar\n     to the second and third arguments of \u003ccode\u003e\u003ca\u003ecompileToC\u003c/a\u003e\u003c/code\u003e, except in a list.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.SBV",
          "name": "compileToCLib",
          "package": "sbv",
          "signature": "Maybe FilePath -\u003e String -\u003e [(String, SBVCodeGen ())] -\u003e IO ()",
          "source": "src/Data-SBV-Compilers-C.html#compileToCLib",
          "type": "function"
        },
        "index": {
          "description": "Create code to generate library archive from given symbolic functions Useful when generating code from multiple functions that work together as library The first argument is the directory name under which the files will be saved To save files in the current directory pass Just Use Nothing for printing to stdout The second argument is the name of the archive to generate The third argument is the list of functions to include in the form of function-name code pairs similar to the second and third arguments of compileToC except in list",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "compileToCLib",
          "normalized": "Maybe FilePath-\u003eString-\u003e[(String,SBVCodeGen())]-\u003eIO()",
          "package": "sbv",
          "partial": "To CLib",
          "signature": "Maybe FilePath-\u003eString-\u003e[(String,SBVCodeGen())]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:compileToCLib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles to SMT-Lib and returns the resulting program as a string. Useful for saving\n the result to a file for off-line analysis, for instance if you have an SMT solver that's not natively\n supported out-of-the box by the SBV library. It takes two booleans:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e smtLib2: If \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, will generate SMT-Lib2 output, otherwise SMT-Lib1 output\n\u003c/li\u003e\u003cli\u003e isSat  : If \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, will translate it as a SAT query, i.e., in the positive. If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, will\n               translate as a PROVE query, i.e., it will negate the result. (In this case, the check-sat\n               call to the SMT solver will produce UNSAT if the input is a theorem, as usual.)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.SBV",
          "name": "compileToSMTLib",
          "package": "sbv",
          "signature": "Bool-\u003e Bool-\u003e a-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Compiles to SMT-Lib and returns the resulting program as string Useful for saving the result to file for off-line analysis for instance if you have an SMT solver that not natively supported out-of-the box by the SBV library It takes two booleans smtLib2 If True will generate SMT-Lib2 output otherwise SMT-Lib1 output isSat If True will translate it as SAT query i.e in the positive If False will translate as PROVE query i.e it will negate the result In this case the check-sat call to the SMT solver will produce UNSAT if the input is theorem as usual",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "compileToSMTLib",
          "normalized": "Bool-\u003eBool-\u003ea-\u003eIO String",
          "package": "sbv",
          "partial": "To SMTLib",
          "signature": "Bool-\u003eBool-\u003ea-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:compileToSMTLib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdding arbitrary constraints.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "constrain",
          "package": "sbv",
          "signature": "SBool -\u003e Symbolic ()",
          "source": "src/Data-SBV-BitVectors-Model.html#constrain",
          "type": "function"
        },
        "index": {
          "description": "Adding arbitrary constraints",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "constrain",
          "normalized": "SBool-\u003eSymbolic()",
          "package": "sbv",
          "signature": "SBool-\u003eSymbolic()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:constrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute CRC's over polynomials, i.e., symbolic words. The first\n \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument plays the same role as the one in the \u003ccode\u003e\u003ca\u003ecrcBV\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "crc",
          "package": "sbv",
          "signature": "Int -\u003e SBV a -\u003e SBV b -\u003e SBV b",
          "source": "src/Data-SBV-Tools-Polynomial.html#crc",
          "type": "function"
        },
        "index": {
          "description": "Compute CRC over polynomials i.e symbolic words The first Int argument plays the same role as the one in the crcBV function",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "crc",
          "normalized": "Int-\u003eSBV a-\u003eSBV b-\u003eSBV b",
          "package": "sbv",
          "signature": "Int-\u003eSBV a-\u003eSBV b-\u003eSBV b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:crc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute CRCs over bit-vectors. The call \u003ccode\u003ecrcBV n m p\u003c/code\u003e computes\n the CRC of the message \u003ccode\u003em\u003c/code\u003e with respect to polynomial \u003ccode\u003ep\u003c/code\u003e. The\n inputs are assumed to be blasted big-endian. The number\n \u003ccode\u003en\u003c/code\u003e specifies how many bits of CRC is needed. Note that \u003ccode\u003en\u003c/code\u003e\n is actually the degree of the polynomial \u003ccode\u003ep\u003c/code\u003e, and thus it seems\n redundant to pass it in. However, in a typical proof context,\n the polynomial can be symbolic, so we cannot compute the degree\n easily. While this can be worked-around by generating code that\n accounts for all possible degrees, the resulting code would\n be unnecessarily big and complicated, and much harder to reason\n with. (Also note that a CRC is just the remainder from the\n polynomial division, but this routine is much faster in practice.)\n\u003c/p\u003e\u003cp\u003eNB. The \u003ccode\u003en\u003c/code\u003eth bit of the polynomial \u003ccode\u003ep\u003c/code\u003e \u003cem\u003emust\u003c/em\u003e be set for the CRC\n to be computed correctly. Note that the polynomial argument \u003ccode\u003ep\u003c/code\u003e will\n not even have this bit present most of the time, as it will typically\n contain bits \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003en-1\u003c/code\u003e as usual in the CRC literature. The higher\n order \u003ccode\u003en\u003c/code\u003eth bit is simply assumed to be set, as it does not make\n sense to use a polynomial of a lesser degree. This is usually not a problem\n since CRC polynomials are designed and expressed this way.\n\u003c/p\u003e\u003cp\u003eNB. The literature on CRC's has many variants on how CRC's are computed.\n We follow the painless guide (\u003ca\u003ehttp://www.ross.net/crc/download/crc_v3.txt\u003c/a\u003e)\n and compute the CRC as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Extend the message \u003ccode\u003em\u003c/code\u003e by adding \u003ccode\u003en\u003c/code\u003e 0 bits on the right\n\u003c/li\u003e\u003cli\u003e Divide the polynomial thus obtained by the \u003ccode\u003ep\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e The remainder is the CRC value.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere are many variants on final XOR's, reversed polynomials etc., so\n it is essential to double check you use the correct \u003cem\u003ealgorithm\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "crcBV",
          "package": "sbv",
          "signature": "Int -\u003e [SBool] -\u003e [SBool] -\u003e [SBool]",
          "source": "src/Data-SBV-Tools-Polynomial.html#crcBV",
          "type": "function"
        },
        "index": {
          "description": "Compute CRCs over bit-vectors The call crcBV computes the CRC of the message with respect to polynomial The inputs are assumed to be blasted big-endian The number specifies how many bits of CRC is needed Note that is actually the degree of the polynomial and thus it seems redundant to pass it in However in typical proof context the polynomial can be symbolic so we cannot compute the degree easily While this can be worked-around by generating code that accounts for all possible degrees the resulting code would be unnecessarily big and complicated and much harder to reason with Also note that CRC is just the remainder from the polynomial division but this routine is much faster in practice NB The th bit of the polynomial must be set for the CRC to be computed correctly Note that the polynomial argument will not even have this bit present most of the time as it will typically contain bits through n-1 as usual in the CRC literature The higher order th bit is simply assumed to be set as it does not make sense to use polynomial of lesser degree This is usually not problem since CRC polynomials are designed and expressed this way NB The literature on CRC has many variants on how CRC are computed We follow the painless guide http www.ross.net crc download crc v3.txt and compute the CRC as follows Extend the message by adding bits on the right Divide the polynomial thus obtained by the The remainder is the CRC value There are many variants on final XOR reversed polynomials etc so it is essential to double check you use the correct algorithm",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "crcBV",
          "normalized": "Int-\u003e[SBool]-\u003e[SBool]-\u003e[SBool]",
          "package": "sbv",
          "partial": "BV",
          "signature": "Int-\u003e[SBool]-\u003e[SBool]-\u003e[SBool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:crcBV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration for the CVC4 SMT Solver.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cvc4",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Provers-Prover.html#cvc4",
          "type": "function"
        },
        "index": {
          "description": "Default configuration for the CVC4 SMT Solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cvc4",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cvc4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a parsed model instance, transform it using \u003ccode\u003ef\u003c/code\u003e, and return the result.\n The default definition for this method should be sufficient in most use cases.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cvtModel",
          "package": "sbv",
          "signature": "(a -\u003e Maybe b) -\u003e Maybe (a, [CW]) -\u003e Maybe (b, [CW])",
          "source": "src/Data-SBV-SMT-SMT.html#cvtModel",
          "type": "method"
        },
        "index": {
          "description": "Given parsed model instance transform it using and return the result The default definition for this method should be sufficient in most use cases",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cvtModel",
          "normalized": "(a-\u003eMaybe b)-\u003eMaybe(a,[CW])-\u003eMaybe(b,[CW])",
          "package": "sbv",
          "partial": "Model",
          "signature": "(a-\u003eMaybe b)-\u003eMaybe(a,[CW])-\u003eMaybe(b,[CW])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cvtModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CW to a Haskell boolean (NB. Assumes input is well-kinded)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "cwToBool",
          "package": "sbv",
          "signature": "CW -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#cwToBool",
          "type": "function"
        },
        "index": {
          "description": "Convert CW to Haskell boolean NB Assumes input is well-kinded",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "cwToBool",
          "normalized": "CW-\u003eBool",
          "package": "sbv",
          "partial": "To Bool",
          "signature": "CW-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:cwToBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default solver used by SBV. This is currently set to z3.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "defaultSMTCfg",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Provers-Prover.html#defaultSMTCfg",
          "type": "function"
        },
        "index": {
          "description": "The default solver used by SBV This is currently set to z3",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "defaultSMTCfg",
          "package": "sbv",
          "partial": "SMTCfg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:defaultSMTCfg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003eallSat\u003c/code\u003e call, we typically want to iterate over it and print the results in sequence. The\n \u003ccode\u003e\u003ca\u003edisplayModels\u003c/a\u003e\u003c/code\u003e function automates this task by calling \u003ccode\u003edisp\u003c/code\u003e on each result, consecutively. The first\n \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument to \u003ccode\u003edisp\u003c/code\u003e 'is the current model number. The second argument is a tuple, where the first\n element indicates whether the model is alleged (i.e., if the solver is not sure, returing Unknown)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "displayModels",
          "package": "sbv",
          "signature": "(Int -\u003e (Bool, a) -\u003e IO ()) -\u003e AllSatResult -\u003e IO Int",
          "source": "src/Data-SBV-SMT-SMT.html#displayModels",
          "type": "function"
        },
        "index": {
          "description": "Given an allSat call we typically want to iterate over it and print the results in sequence The displayModels function automates this task by calling disp on each result consecutively The first Int argument to disp is the current model number The second argument is tuple where the first element indicates whether the model is alleged i.e if the solver is not sure returing Unknown",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "displayModels",
          "normalized": "(Int-\u003e(Bool,a)-\u003eIO())-\u003eAllSatResult-\u003eIO Int",
          "package": "sbv",
          "partial": "Models",
          "signature": "(Int-\u003e(Bool,a)-\u003eIO())-\u003eAllSatResult-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:displayModels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe solver engine, responsible for interpreting solver output\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "engine",
          "package": "sbv",
          "signature": "SMTEngine",
          "source": "src/Data-SBV-SMT-SMT.html#SMTSolver",
          "type": "function"
        },
        "index": {
          "description": "The solver engine responsible for interpreting solver output",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "engine",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:engine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path to its executable\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "executable",
          "package": "sbv",
          "signature": "String",
          "source": "src/Data-SBV-SMT-SMT.html#SMTSolver",
          "type": "function"
        },
        "index": {
          "description": "The path to its executable",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "executable",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:executable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an existential variable\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "exists",
          "package": "sbv",
          "signature": "String -\u003e Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Data.html#exists",
          "type": "method"
        },
        "index": {
          "description": "Create an existential variable",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "exists",
          "normalized": "String-\u003eSymbolic(SBV a)",
          "package": "sbv",
          "signature": "String-\u003eSymbolic(SBV a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an automatically named existential variable\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "exists_",
          "package": "sbv",
          "signature": "Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Data.html#exists_",
          "type": "method"
        },
        "index": {
          "description": "Create an automatically named existential variable",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "exists_",
          "package": "sbv",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:exists_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a symbolic computation that produces a value, compute the\n expected value that value would take if this computation is run\n with its free variables drawn from uniform distributions of its\n respective values, satisfying the given constraints specified by\n \u003ccode\u003econstrain\u003c/code\u003e and \u003ccode\u003epConstrain\u003c/code\u003e calls. This is equivalent to calling\n \u003ccode\u003e\u003ca\u003eexpectedValueWith\u003c/a\u003e\u003c/code\u003e the following parameters: verbose, warm-up\n round count of \u003ccode\u003e10000\u003c/code\u003e, no maximum iteration count, and with\n convergence margin \u003ccode\u003e0.0001\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "expectedValue",
          "package": "sbv",
          "signature": "Symbolic a -\u003e IO [Double]",
          "source": "src/Data-SBV-Tools-ExpectedValue.html#expectedValue",
          "type": "function"
        },
        "index": {
          "description": "Given symbolic computation that produces value compute the expected value that value would take if this computation is run with its free variables drawn from uniform distributions of its respective values satisfying the given constraints specified by constrain and pConstrain calls This is equivalent to calling expectedValueWith the following parameters verbose warm-up round count of no maximum iteration count and with convergence margin",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "expectedValue",
          "normalized": "Symbolic a-\u003eIO[Double]",
          "package": "sbv",
          "partial": "Value",
          "signature": "Symbolic a-\u003eIO[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:expectedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eexpectedValue\u003c/a\u003e\u003c/code\u003e, allowing the user to specify the\n warm-up count and the convergence factor. Maximum iteration count can also\n be specified, at which point convergence won't be sought. The boolean controls verbosity.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "expectedValueWith",
          "package": "sbv",
          "signature": "Bool -\u003e Int -\u003e Maybe Int -\u003e Double -\u003e Symbolic a -\u003e IO [Double]",
          "source": "src/Data-SBV-Tools-ExpectedValue.html#expectedValueWith",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of expectedValue allowing the user to specify the warm-up count and the convergence factor Maximum iteration count can also be specified at which point convergence won be sought The boolean controls verbosity",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "expectedValueWith",
          "normalized": "Bool-\u003eInt-\u003eMaybe Int-\u003eDouble-\u003eSymbolic a-\u003eIO[Double]",
          "package": "sbv",
          "partial": "Value With",
          "signature": "Bool-\u003eInt-\u003eMaybe Int-\u003eDouble-\u003eSymbolic a-\u003eIO[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:expectedValueWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "extend",
          "package": "sbv",
          "signature": "b -\u003e a",
          "source": "src/Data-SBV-BitVectors-Splittable.html#extend",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "extend",
          "normalized": "a-\u003eb",
          "package": "sbv",
          "signature": "b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simpler variant of \u003ccode\u003e\u003ca\u003egetModel\u003c/a\u003e\u003c/code\u003e to get a model out without the fuss.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "extractModel",
          "package": "sbv",
          "signature": "a -\u003e Maybe b",
          "source": "src/Data-SBV-SMT-SMT.html#extractModel",
          "type": "method"
        },
        "index": {
          "description": "simpler variant of getModel to get model out without the fuss",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "extractModel",
          "normalized": "a-\u003eMaybe b",
          "package": "sbv",
          "partial": "Model",
          "signature": "a-\u003eMaybe b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:extractModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the models from an \u003ccode\u003eallSat\u003c/code\u003e call, similar to \u003ccode\u003e\u003ca\u003eextractModel\u003c/a\u003e\u003c/code\u003e but\n is suitable for the case of multiple results.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "extractModels",
          "package": "sbv",
          "signature": "AllSatResult -\u003e [a]",
          "source": "src/Data-SBV-SMT-SMT.html#extractModels",
          "type": "function"
        },
        "index": {
          "description": "Return all the models from an allSat call similar to extractModel but is suitable for the case of multiple results",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "extractModels",
          "normalized": "AllSatResult-\u003e[a]",
          "package": "sbv",
          "partial": "Models",
          "signature": "AllSatResult-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:extractModels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elogical false\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "false",
          "package": "sbv",
          "signature": "b",
          "source": "src/Data-SBV-Utils-Boolean.html#false",
          "type": "method"
        },
        "index": {
          "description": "logical false",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "false",
          "package": "sbv",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a value into a predicate, allowing users to provide names for the inputs.\n If the user does not provide enough number of names for the variables, the remaining ones\n will be internally generated. Note that the names are only used for printing models and has no\n other significance; in particular, we do not check that they are unique. Example:\n\u003c/p\u003e\u003cpre\u003e  forAll [\"x\", \"y\"] $ \\(x::SWord8) y -\u003e x `shiftL` 2 .== y\n\u003c/pre\u003e\u003cp\u003eThis is the same as above, except the variables will be named \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e respectively,\n simplifying the counter-examples when they are printed.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "forAll",
          "package": "sbv",
          "signature": "[String] -\u003e a -\u003e Predicate",
          "source": "src/Data-SBV-Provers-Prover.html#forAll",
          "type": "method"
        },
        "index": {
          "description": "Turns value into predicate allowing users to provide names for the inputs If the user does not provide enough number of names for the variables the remaining ones will be internally generated Note that the names are only used for printing models and has no other significance in particular we do not check that they are unique Example forAll SWord8 shiftL This is the same as above except the variables will be named and respectively simplifying the counter-examples when they are printed",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "forAll",
          "normalized": "[String]-\u003ea-\u003ePredicate",
          "package": "sbv",
          "partial": "All",
          "signature": "[String]-\u003ea-\u003ePredicate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:forAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a value into a universally quantified predicate, internally naming the inputs.\n In this case the sbv library will use names of the form \u003ccode\u003es1, s2\u003c/code\u003e, etc. to name these variables\n Example:\n\u003c/p\u003e\u003cpre\u003e  forAll_ $ \\(x::SWord8) y -\u003e x `shiftL` 2 .== y\n\u003c/pre\u003e\u003cp\u003eis a predicate with two arguments, captured using an ordinary Haskell function. Internally,\n \u003ccode\u003ex\u003c/code\u003e will be named \u003ccode\u003es0\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e will be named \u003ccode\u003es1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "forAll_",
          "package": "sbv",
          "signature": "a -\u003e Predicate",
          "source": "src/Data-SBV-Provers-Prover.html#forAll_",
          "type": "method"
        },
        "index": {
          "description": "Turns value into universally quantified predicate internally naming the inputs In this case the sbv library will use names of the form s1 s2 etc to name these variables Example forAll SWord8 shiftL is predicate with two arguments captured using an ordinary Haskell function Internally will be named s0 and will be named s1",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "forAll_",
          "normalized": "a-\u003ePredicate",
          "package": "sbv",
          "partial": "All",
          "signature": "a-\u003ePredicate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:forAll_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eforSome\u003c/a\u003e\u003c/code\u003e that allows user defined names\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "forSome",
          "package": "sbv",
          "signature": "[String] -\u003e a -\u003e Predicate",
          "source": "src/Data-SBV-Provers-Prover.html#forSome",
          "type": "method"
        },
        "index": {
          "description": "Version of forSome that allows user defined names",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "forSome",
          "normalized": "[String]-\u003ea-\u003ePredicate",
          "package": "sbv",
          "partial": "Some",
          "signature": "[String]-\u003ea-\u003ePredicate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:forSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a value into an existentially quantified predicate. (Indeed, \u003ccode\u003e\u003ca\u003eexists\u003c/a\u003e\u003c/code\u003e would have been\n a better choice here for the name, but alas it's already taken.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "forSome_",
          "package": "sbv",
          "signature": "a -\u003e Predicate",
          "source": "src/Data-SBV-Provers-Prover.html#forSome_",
          "type": "method"
        },
        "index": {
          "description": "Turns value into an existentially quantified predicate Indeed exists would have been better choice here for the name but alas it already taken",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "forSome_",
          "normalized": "a-\u003ePredicate",
          "package": "sbv",
          "partial": "Some",
          "signature": "a-\u003ePredicate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:forSome_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a user named input (universal)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "forall",
          "package": "sbv",
          "signature": "String -\u003e Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Data.html#forall",
          "type": "method"
        },
        "index": {
          "description": "Create user named input universal",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "forall",
          "normalized": "String-\u003eSymbolic(SBV a)",
          "package": "sbv",
          "signature": "String-\u003eSymbolic(SBV a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an automatically named input\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "forall_",
          "package": "sbv",
          "signature": "Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Data.html#forall_",
          "type": "method"
        },
        "index": {
          "description": "Create an automatically named input",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "forall_",
          "package": "sbv",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:forall_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a free variable, universal in a proof, existential in sat\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "free",
          "package": "sbv",
          "signature": "String -\u003e Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Data.html#free",
          "type": "method"
        },
        "index": {
          "description": "Create free variable universal in proof existential in sat",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "free",
          "normalized": "String-\u003eSymbolic(SBV a)",
          "package": "sbv",
          "signature": "String-\u003eSymbolic(SBV a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unnamed free variable, universal in proof, existential in sat\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "free_",
          "package": "sbv",
          "signature": "Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Data.html#free_",
          "type": "method"
        },
        "index": {
          "description": "Create an unnamed free variable universal in proof existential in sat",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "free_",
          "package": "sbv",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:free_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "fromBitsLE",
          "package": "sbv",
          "signature": "[SBool] -\u003e a",
          "source": "src/Data-SBV-BitVectors-Splittable.html#fromBitsLE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "fromBitsLE",
          "normalized": "[SBool]-\u003ea",
          "package": "sbv",
          "partial": "Bits LE",
          "signature": "[SBool]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:fromBitsLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecast from Bool\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "fromBool",
          "package": "sbv",
          "signature": "Bool -\u003e b",
          "source": "src/Data-SBV-Utils-Boolean.html#fromBool",
          "type": "method"
        },
        "index": {
          "description": "cast from Bool",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "fromBool",
          "normalized": "Bool-\u003ea",
          "package": "sbv",
          "partial": "Bool",
          "signature": "Bool-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a literal, from a CW representation\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "fromCW",
          "package": "sbv",
          "signature": "CW -\u003e a",
          "source": "src/Data-SBV-BitVectors-Data.html#fromCW",
          "type": "method"
        },
        "index": {
          "description": "Extract literal from CW representation",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "fromCW",
          "normalized": "CW-\u003ea",
          "package": "sbv",
          "partial": "CW",
          "signature": "CW-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:fromCW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull adder. Returns the carry-out from the addition.\n\u003c/p\u003e\u003cp\u003eN.B. Only works for unsigned types. Signed arguments will be rejected.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "fullAdder",
          "package": "sbv",
          "signature": "SBV a -\u003e SBV a -\u003e (SBool, SBV a)",
          "source": "src/Data-SBV-BitVectors-Model.html#fullAdder",
          "type": "function"
        },
        "index": {
          "description": "Full adder Returns the carry-out from the addition N.B Only works for unsigned types Signed arguments will be rejected",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "fullAdder",
          "normalized": "SBV a-\u003eSBV a-\u003e(SBool,SBV a)",
          "package": "sbv",
          "partial": "Adder",
          "signature": "SBV a-\u003eSBV a-\u003e(SBool,SBV a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:fullAdder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull multiplier: Returns both the high-order and the low-order bits in a tuple,\n thus fully accounting for the overflow.\n\u003c/p\u003e\u003cp\u003eN.B. Only works for unsigned types. Signed arguments will be rejected.\n\u003c/p\u003e\u003cp\u003eN.B. The higher-order bits are determined using a simple shift-add multiplier,\n thus involving bit-blasting. It'd be naive to expect SMT solvers to deal efficiently\n with properties involving this function, at least with the current state of the art.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "fullMultiplier",
          "package": "sbv",
          "signature": "SBV a -\u003e SBV a -\u003e (SBV a, SBV a)",
          "source": "src/Data-SBV-BitVectors-Model.html#fullMultiplier",
          "type": "function"
        },
        "index": {
          "description": "Full multiplier Returns both the high-order and the low-order bits in tuple thus fully accounting for the overflow N.B Only works for unsigned types Signed arguments will be rejected N.B The higher-order bits are determined using simple shift-add multiplier thus involving bit-blasting It be naive to expect SMT solvers to deal efficiently with properties involving this function at least with the current state of the art",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "fullMultiplier",
          "normalized": "SBV a-\u003eSBV a-\u003e(SBV a,SBV a)",
          "package": "sbv",
          "partial": "Multiplier",
          "signature": "SBV a-\u003eSBV a-\u003e(SBV a,SBV a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:fullMultiplier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFused-multiply add. \u003ccode\u003efusedMA a b c = a * b + c\u003c/code\u003e, for double and floating point values.\n Note that a \u003ccode\u003e\u003ca\u003efusedMA\u003c/a\u003e\u003c/code\u003e call will *never* be concrete, even if all the arguments are constants; since\n we cannot guarantee the precision requirements, which is the whole reason why \u003ccode\u003e\u003ca\u003efusedMA\u003c/a\u003e\u003c/code\u003e exists in the\n first place. (NB. \u003ccode\u003e\u003ca\u003efusedMA\u003c/a\u003e\u003c/code\u003e only rounds once, even though it does two operations, and hence the extra\n precision.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "fusedMA",
          "package": "sbv",
          "signature": "SBV a -\u003e SBV a -\u003e SBV a -\u003e SBV a",
          "source": "src/Data-SBV-BitVectors-Model.html#fusedMA",
          "type": "function"
        },
        "index": {
          "description": "Fused-multiply add fusedMA for double and floating point values Note that fusedMA call will never be concrete even if all the arguments are constants since we cannot guarantee the precision requirements which is the whole reason why fusedMA exists in the first place NB fusedMA only rounds once even though it does two operations and hence the extra precision",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "fusedMA",
          "normalized": "SBV a-\u003eSBV a-\u003eSBV a-\u003eSBV a",
          "package": "sbv",
          "partial": "MA",
          "signature": "SBV a-\u003eSBV a-\u003eSBV a-\u003eSBV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:fusedMA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a set of concrete test values from a symbolic program. The output\n can be rendered as test vectors in different languages as necessary. Use the\n function \u003ccode\u003e\u003ca\u003eoutput\u003c/a\u003e\u003c/code\u003e call to indicate what fields should be in the test result.\n (Also see \u003ccode\u003econstrain\u003c/code\u003e and \u003ccode\u003epConstrain\u003c/code\u003e for filtering acceptable test values.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "genTest",
          "package": "sbv",
          "signature": "Int -\u003e Symbolic a -\u003e IO TestVectors",
          "source": "src/Data-SBV-Tools-GenTest.html#genTest",
          "type": "function"
        },
        "index": {
          "description": "Generate set of concrete test values from symbolic program The output can be rendered as test vectors in different languages as necessary Use the function output call to indicate what fields should be in the test result Also see constrain and pConstrain for filtering acceptable test values",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "genTest",
          "normalized": "Int-\u003eSymbolic a-\u003eIO TestVectors",
          "package": "sbv",
          "partial": "Test",
          "signature": "Int-\u003eSymbolic a-\u003eIO TestVectors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:genTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate both SMT-Lib1 and SMT-Lib2 benchmarks. The first argument is the basename of the file,\n SMT-Lib1 version will be written with suffix \u003ca\u003e.smt1\u003c/a\u003e and SMT-Lib2 version will be written with\n suffix \u003ca\u003e.smt2\u003c/a\u003e. The \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e argument controls whether this is a SAT instance, i.e., translate the query\n directly, or a PROVE instance, i.e., translate the negated query. (See the second boolean argument to\n \u003ccode\u003e\u003ca\u003ecompileToSMTLib\u003c/a\u003e\u003c/code\u003e for details.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "generateSMTBenchmarks",
          "package": "sbv",
          "signature": "Bool -\u003e FilePath -\u003e a -\u003e IO ()",
          "source": "src/Data-SBV-Provers-Prover.html#generateSMTBenchmarks",
          "type": "function"
        },
        "index": {
          "description": "Create both SMT-Lib1 and SMT-Lib2 benchmarks The first argument is the basename of the file SMT-Lib1 version will be written with suffix smt1 and SMT-Lib2 version will be written with suffix smt2 The Bool argument controls whether this is SAT instance i.e translate the query directly or PROVE instance i.e translate the negated query See the second boolean argument to compileToSMTLib for details",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "generateSMTBenchmarks",
          "normalized": "Bool-\u003eFilePath-\u003ea-\u003eIO()",
          "package": "sbv",
          "partial": "SMTBenchmarks",
          "signature": "Bool-\u003eFilePath-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:generateSMTBenchmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a model, the result is a tuple where the first argument (if True)\n indicates whether the model was \u003ca\u003eprobable\u003c/a\u003e. (i.e., if the solver returned unknown.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "getModel",
          "package": "sbv",
          "signature": "a -\u003e Either String (Bool, b)",
          "source": "src/Data-SBV-SMT-SMT.html#getModel",
          "type": "method"
        },
        "index": {
          "description": "Extract model the result is tuple where the first argument if True indicates whether the model was probable i.e if the solver returned unknown",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "getModel",
          "normalized": "a-\u003eEither String(Bool,b)",
          "package": "sbv",
          "partial": "Model",
          "signature": "a-\u003eEither String(Bool,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:getModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet dictionaries from an all-sat call. Similar to \u003ccode\u003e\u003ca\u003egetModelDictionary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "getModelDictionaries",
          "package": "sbv",
          "signature": "AllSatResult -\u003e [Map String CW]",
          "source": "src/Data-SBV-SMT-SMT.html#getModelDictionaries",
          "type": "function"
        },
        "index": {
          "description": "Get dictionaries from an all-sat call Similar to getModelDictionary",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "getModelDictionaries",
          "normalized": "AllSatResult-\u003e[Map String CW]",
          "package": "sbv",
          "partial": "Model Dictionaries",
          "signature": "AllSatResult-\u003e[Map String CW]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:getModelDictionaries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a model dictionary. Extract a dictionary mapping the variables to\n their respective values as returned by the SMT solver. Also see \u003ccode\u003e\u003ca\u003egetModelDictionaries\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "getModelDictionary",
          "package": "sbv",
          "signature": "a -\u003e Map String CW",
          "source": "src/Data-SBV-SMT-SMT.html#getModelDictionary",
          "type": "method"
        },
        "index": {
          "description": "Extract model dictionary Extract dictionary mapping the variables to their respective values as returned by the SMT solver Also see getModelDictionaries",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "getModelDictionary",
          "normalized": "a-\u003eMap String CW",
          "package": "sbv",
          "partial": "Model Dictionary",
          "signature": "a-\u003eMap String CW",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:getModelDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a representative name for the model value of an uninterpreted kind.\n This is supposed to correspond to the value as computed internally by the\n SMT solver; and is unportable from solver to solver. Also see \u003ccode\u003e\u003ca\u003egetModelUninterpretedValues\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "getModelUninterpretedValue",
          "package": "sbv",
          "signature": "String -\u003e a -\u003e Maybe String",
          "source": "src/Data-SBV-SMT-SMT.html#getModelUninterpretedValue",
          "type": "method"
        },
        "index": {
          "description": "Extract representative name for the model value of an uninterpreted kind This is supposed to correspond to the value as computed internally by the SMT solver and is unportable from solver to solver Also see getModelUninterpretedValues",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "getModelUninterpretedValue",
          "normalized": "String-\u003ea-\u003eMaybe String",
          "package": "sbv",
          "partial": "Model Uninterpreted Value",
          "signature": "String-\u003ea-\u003eMaybe String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:getModelUninterpretedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract value of an uninterpreted variable from an all-sat call. Similar to \u003ccode\u003e\u003ca\u003egetModelUninterpretedValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "getModelUninterpretedValues",
          "package": "sbv",
          "signature": "String -\u003e AllSatResult -\u003e [Maybe String]",
          "source": "src/Data-SBV-SMT-SMT.html#getModelUninterpretedValues",
          "type": "function"
        },
        "index": {
          "description": "Extract value of an uninterpreted variable from an all-sat call Similar to getModelUninterpretedValue",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "getModelUninterpretedValues",
          "normalized": "String-\u003eAllSatResult-\u003e[Maybe String]",
          "package": "sbv",
          "partial": "Model Uninterpreted Values",
          "signature": "String-\u003eAllSatResult-\u003e[Maybe String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:getModelUninterpretedValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a model value for a given element. Also see \u003ccode\u003e\u003ca\u003egetModelValues\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "getModelValue",
          "package": "sbv",
          "signature": "String -\u003e a -\u003e Maybe b",
          "source": "src/Data-SBV-SMT-SMT.html#getModelValue",
          "type": "method"
        },
        "index": {
          "description": "Extract model value for given element Also see getModelValues",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "getModelValue",
          "normalized": "String-\u003ea-\u003eMaybe b",
          "package": "sbv",
          "partial": "Model Value",
          "signature": "String-\u003ea-\u003eMaybe b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:getModelValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract value of a variable from an all-sat call. Similar to \u003ccode\u003e\u003ca\u003egetModelValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "getModelValues",
          "package": "sbv",
          "signature": "String -\u003e AllSatResult -\u003e [Maybe b]",
          "source": "src/Data-SBV-SMT-SMT.html#getModelValues",
          "type": "function"
        },
        "index": {
          "description": "Extract value of variable from an all-sat call Similar to getModelValue",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "getModelValues",
          "normalized": "String-\u003eAllSatResult-\u003e[Maybe a]",
          "package": "sbv",
          "partial": "Model Values",
          "signature": "String-\u003eAllSatResult-\u003e[Maybe b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:getModelValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the test vectors for further processing. This function\n is useful in cases where \u003ccode\u003e\u003ca\u003erenderTest\u003c/a\u003e\u003c/code\u003e is not sufficient and custom\n output (or further preprocessing) is needed.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "getTestValues",
          "package": "sbv",
          "signature": "TestVectors -\u003e [([CW], [CW])]",
          "source": "src/Data-SBV-Tools-GenTest.html#getTestValues",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the test vectors for further processing This function is useful in cases where renderTest is not sufficient and custom output or further preprocessing is needed",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "getTestValues",
          "normalized": "TestVectors-\u003e[([CW],[CW])]",
          "package": "sbv",
          "partial": "Test Values",
          "signature": "TestVectors-\u003e[([CW],[CW])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:getTestValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "hasSign",
          "package": "sbv",
          "signature": "a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#hasSign",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "hasSign",
          "normalized": "a-\u003eBool",
          "package": "sbv",
          "partial": "Sign",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:hasSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a number in hex, without prefix, or types.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "hex",
          "package": "sbv",
          "signature": "a -\u003e String",
          "source": "src/Data-SBV-BitVectors-PrettyNum.html#hex",
          "type": "method"
        },
        "index": {
          "description": "Show number in hex without prefix or types",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "hex",
          "normalized": "a-\u003eString",
          "package": "sbv",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a number in hexadecimal (starting with \u003ccode\u003e0x\u003c/code\u003e and type.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "hexS",
          "package": "sbv",
          "signature": "a -\u003e String",
          "source": "src/Data-SBV-BitVectors-PrettyNum.html#hexS",
          "type": "method"
        },
        "index": {
          "description": "Show number in hexadecimal starting with and type",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "hexS",
          "normalized": "a-\u003eString",
          "package": "sbv",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:hexS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns (symbolic) true if the argument is in range\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "inRange",
          "package": "sbv",
          "signature": "a -\u003e (a, a) -\u003e SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#inRange",
          "type": "function"
        },
        "index": {
          "description": "Returns symbolic true if the argument is in range",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "inRange",
          "normalized": "a-\u003e(a,a)-\u003eSBool",
          "package": "sbv",
          "partial": "Range",
          "signature": "a-\u003e(a,a)-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinity for \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e. Surprisingly, Haskell\n Prelude doesn't have this value defined, so we provide it here.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "infinity",
          "package": "sbv",
          "signature": "a",
          "source": "src/Data-SBV-BitVectors-Data.html#infinity",
          "type": "function"
        },
        "index": {
          "description": "Infinity for Double and Float Surprisingly Haskell Prelude doesn have this value defined so we provide it here",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "infinity",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "intSizeOf",
          "package": "sbv",
          "signature": "a -\u003e Int",
          "source": "src/Data-SBV-BitVectors-Data.html#intSizeOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "intSizeOf",
          "normalized": "a-\u003eInt",
          "package": "sbv",
          "partial": "Size Of",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:intSizeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "isBoolean",
          "package": "sbv",
          "signature": "a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isBoolean",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isBoolean",
          "normalized": "a-\u003eBool",
          "package": "sbv",
          "partial": "Boolean",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "isBounded",
          "package": "sbv",
          "signature": "a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isBounded",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isBounded",
          "normalized": "a-\u003eBool",
          "package": "sbv",
          "partial": "Bounded",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the symbolic word concrete?\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "isConcrete",
          "package": "sbv",
          "signature": "SBV a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isConcrete",
          "type": "method"
        },
        "index": {
          "description": "Is the symbolic word concrete",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isConcrete",
          "normalized": "SBV a-\u003eBool",
          "package": "sbv",
          "partial": "Concrete",
          "signature": "SBV a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isConcrete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes it concretely satisfy the given predicate?\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "isConcretely",
          "package": "sbv",
          "signature": "SBV a -\u003e (a -\u003e Bool) -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isConcretely",
          "type": "method"
        },
        "index": {
          "description": "Does it concretely satisfy the given predicate",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isConcretely",
          "normalized": "SBV a-\u003e(a-\u003eBool)-\u003eBool",
          "package": "sbv",
          "partial": "Concretely",
          "signature": "SBV a-\u003e(a-\u003eBool)-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isConcretely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "isDouble",
          "package": "sbv",
          "signature": "a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isDouble",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isDouble",
          "normalized": "a-\u003eBool",
          "package": "sbv",
          "partial": "Double",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe call a FP number FPPoint if it is neither NaN, nor +/- infinity.\n Note that we cannot use == to test for this, as NaN does not compare equal to itself.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "isFPPoint",
          "package": "sbv",
          "signature": "SBV a -\u003e SBool",
          "source": "src/Data-SBV.html#isFPPoint",
          "type": "function"
        },
        "index": {
          "description": "We call FP number FPPoint if it is neither NaN nor infinity Note that we cannot use to test for this as NaN does not compare equal to itself",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isFPPoint",
          "normalized": "SBV a-\u003eSBool",
          "package": "sbv",
          "partial": "FPPoint",
          "signature": "SBV a-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isFPPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "isFloat",
          "package": "sbv",
          "signature": "a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isFloat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isFloat",
          "normalized": "a-\u003eBool",
          "package": "sbv",
          "partial": "Float",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "isInteger",
          "package": "sbv",
          "signature": "a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isInteger",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isInteger",
          "normalized": "a-\u003eBool",
          "package": "sbv",
          "partial": "Integer",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "isReal",
          "package": "sbv",
          "signature": "a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isReal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isReal",
          "normalized": "a-\u003eBool",
          "package": "sbv",
          "partial": "Real",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks satisfiability within the given optional time limit of \u003ccode\u003ei\u003c/code\u003e seconds.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if times out, or the result wrapped in a \u003ccode\u003eJust\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "isSatisfiable",
          "package": "sbv",
          "signature": "Maybe Int -\u003e a -\u003e IO (Maybe Bool)",
          "source": "src/Data-SBV-Provers-Prover.html#isSatisfiable",
          "type": "function"
        },
        "index": {
          "description": "Checks satisfiability within the given optional time limit of seconds Returns Nothing if times out or the result wrapped in Just otherwise",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isSatisfiable",
          "normalized": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Satisfiable",
          "signature": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isSatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given property is satisfiable, with an optional time out and the given solver.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if times out, or the result wrapped in a \u003ccode\u003eJust\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "isSatisfiableWith",
          "package": "sbv",
          "signature": "SMTConfig -\u003e Maybe Int -\u003e a -\u003e IO (Maybe Bool)",
          "source": "src/Data-SBV-Provers-Prover.html#isSatisfiableWith",
          "type": "function"
        },
        "index": {
          "description": "Check whether given property is satisfiable with an optional time out and the given solver Returns Nothing if times out or the result wrapped in Just otherwise",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isSatisfiableWith",
          "normalized": "SMTConfig-\u003eMaybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Satisfiable With",
          "signature": "SMTConfig-\u003eMaybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isSatisfiableWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the symbolic word really symbolic?\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "isSymbolic",
          "package": "sbv",
          "signature": "SBV a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isSymbolic",
          "type": "method"
        },
        "index": {
          "description": "Is the symbolic word really symbolic",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isSymbolic",
          "normalized": "SBV a-\u003eBool",
          "package": "sbv",
          "partial": "Symbolic",
          "signature": "SBV a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isSymbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks theoremhood within the given optional time limit of \u003ccode\u003ei\u003c/code\u003e seconds.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if times out, or the result wrapped in a \u003ccode\u003eJust\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "isTheorem",
          "package": "sbv",
          "signature": "Maybe Int -\u003e a -\u003e IO (Maybe Bool)",
          "source": "src/Data-SBV-Provers-Prover.html#isTheorem",
          "type": "function"
        },
        "index": {
          "description": "Checks theoremhood within the given optional time limit of seconds Returns Nothing if times out or the result wrapped in Just otherwise",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isTheorem",
          "normalized": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Theorem",
          "signature": "Maybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isTheorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given property is a theorem, with an optional time out and the given solver.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if times out, or the result wrapped in a \u003ccode\u003eJust\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "isTheoremWith",
          "package": "sbv",
          "signature": "SMTConfig -\u003e Maybe Int -\u003e a -\u003e IO (Maybe Bool)",
          "source": "src/Data-SBV-Provers-Prover.html#isTheoremWith",
          "type": "function"
        },
        "index": {
          "description": "Check whether given property is theorem with an optional time out and the given solver Returns Nothing if times out or the result wrapped in Just otherwise",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isTheoremWith",
          "normalized": "SMTConfig-\u003eMaybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "package": "sbv",
          "partial": "Theorem With",
          "signature": "SMTConfig-\u003eMaybe Int-\u003ea-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isTheoremWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "isUninterpreted",
          "package": "sbv",
          "signature": "a -\u003e Bool",
          "source": "src/Data-SBV-BitVectors-Data.html#isUninterpreted",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isUninterpreted",
          "normalized": "a-\u003eBool",
          "package": "sbv",
          "partial": "Uninterpreted",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isUninterpreted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the given constraints are satisfiable, equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisVacuousWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultSMTCfg\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. This\n call can be used to ensure that the specified constraints (via \u003ccode\u003e\u003ca\u003econstrain\u003c/a\u003e\u003c/code\u003e) are satisfiable, i.e., that\n the proof involving these constraints is not passing vacuously. Here is an example. Consider the following\n predicate:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet pred = do { x \u003c- forall \"x\"; constrain $ x .\u003c x; return $ x .\u003e= (5 :: SWord8) }\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThis predicate asserts that all 8-bit values are larger than 5, subject to the constraint that the\n values considered satisfy \u003ccode\u003ex .\u003c x\u003c/code\u003e, i.e., they are less than themselves. Since there are no values that\n satisfy this constraint, the proof will pass vacuously:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove pred\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e\u003cp\u003eWe can use \u003ccode\u003e\u003ca\u003eisVacuous\u003c/a\u003e\u003c/code\u003e to make sure to see that the pass was vacuous:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisVacuous pred\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cp\u003eWhile the above example is trivial, things can get complicated if there are multiple constraints with\n non-straightforward relations; so if constraints are used one should make sure to check the predicate\n is not vacuously true. Here's an example that is not vacuous:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet pred' = do { x \u003c- forall \"x\"; constrain $ x .\u003e 6; return $ x .\u003e= (5 :: SWord8) }\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThis time the proof passes as expected:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprove pred'\n\u003c/code\u003e\u003c/strong\u003eQ.E.D.\n\u003c/pre\u003e\u003cp\u003eAnd the proof is not vacuous:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisVacuous pred'\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.SBV",
          "name": "isVacuous",
          "package": "sbv",
          "signature": "a -\u003e IO Bool",
          "source": "src/Data-SBV-Provers-Prover.html#isVacuous",
          "type": "function"
        },
        "index": {
          "description": "Check if the given constraints are satisfiable equivalent to isVacuousWith defaultSMTCfg This call can be used to ensure that the specified constraints via constrain are satisfiable i.e that the proof involving these constraints is not passing vacuously Here is an example Consider the following predicate let pred do forall constrain return SWord8 This predicate asserts that all bit values are larger than subject to the constraint that the values considered satisfy i.e they are less than themselves Since there are no values that satisfy this constraint the proof will pass vacuously prove pred Q.E.D We can use isVacuous to make sure to see that the pass was vacuous isVacuous pred True While the above example is trivial things can get complicated if there are multiple constraints with non-straightforward relations so if constraints are used one should make sure to check the predicate is not vacuously true Here an example that is not vacuous let pred do forall constrain return SWord8 This time the proof passes as expected prove pred Q.E.D And the proof is not vacuous isVacuous pred False",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isVacuous",
          "normalized": "a-\u003eIO Bool",
          "package": "sbv",
          "partial": "Vacuous",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isVacuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the constraints are vacuous using the given SMT-solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "isVacuousWith",
          "package": "sbv",
          "signature": "SMTConfig -\u003e a -\u003e IO Bool",
          "source": "src/Data-SBV-Provers-Prover.html#isVacuousWith",
          "type": "function"
        },
        "index": {
          "description": "Determine if the constraints are vacuous using the given SMT-solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "isVacuousWith",
          "normalized": "SMTConfig-\u003ea-\u003eIO Bool",
          "package": "sbv",
          "partial": "Vacuous With",
          "signature": "SMTConfig-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:isVacuousWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose one or the other element, based on the condition.\n This is similar to \u003ccode\u003e\u003ca\u003esymbolicMerge\u003c/a\u003e\u003c/code\u003e, but it has a default\n implementation that makes sure it's short-cut if the condition is concrete.\n The idea is that use symbolicMerge if you know the condition is symbolic,\n otherwise use ite, if there's a chance it might be concrete.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "ite",
          "package": "sbv",
          "signature": "SBool -\u003e a -\u003e a -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#ite",
          "type": "method"
        },
        "index": {
          "description": "Choose one or the other element based on the condition This is similar to symbolicMerge but it has default implementation that makes sure it short-cut if the condition is concrete The idea is that use symbolicMerge if you know the condition is symbolic otherwise use ite if there chance it might be concrete",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "ite",
          "normalized": "SBool-\u003ea-\u003ea-\u003ea",
          "package": "sbv",
          "signature": "SBool-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:ite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "kindOf",
          "package": "sbv",
          "signature": "a -\u003e Kind",
          "source": "src/Data-SBV-BitVectors-Data.html#kindOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "kindOf",
          "normalized": "a-\u003eKind",
          "package": "sbv",
          "partial": "Of",
          "signature": "a-\u003eKind",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:kindOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a literal constant to symbolic\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "literal",
          "package": "sbv",
          "signature": "a -\u003e SBV a",
          "source": "src/Data-SBV-BitVectors-Data.html#literal",
          "type": "method"
        },
        "index": {
          "description": "Turn literal constant to symbolic",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "literal",
          "normalized": "a-\u003eSBV a",
          "package": "sbv",
          "signature": "a-\u003eSBV a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeast significant bit of a word, always stored at index 0.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "lsb",
          "package": "sbv",
          "signature": "SBV a -\u003e SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#lsb",
          "type": "function"
        },
        "index": {
          "description": "Least significant bit of word always stored at index",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "lsb",
          "normalized": "SBV a-\u003eSBool",
          "package": "sbv",
          "signature": "SBV a-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:lsb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration for the MathSAT SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "mathSAT",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Provers-Prover.html#mathSAT",
          "type": "function"
        },
        "index": {
          "description": "Default configuration for the MathSAT SMT solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "mathSAT",
          "package": "sbv",
          "partial": "SAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:mathSAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximizes a cost function with respect to a constraint. Examples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximize Quantified sum 3 (bAll (.\u003c (10 :: SInteger)))\n\u003c/code\u003e\u003c/strong\u003eJust [9,9,9]\n\u003c/pre\u003e",
          "module": "Data.SBV",
          "name": "maximize",
          "package": "sbv",
          "signature": "OptimizeOpts -\u003e ([SBV a] -\u003e SBV c) -\u003e Int -\u003e ([SBV a] -\u003e SBool) -\u003e IO (Maybe [a])",
          "source": "src/Data-SBV-Tools-Optimize.html#maximize",
          "type": "function"
        },
        "index": {
          "description": "Maximizes cost function with respect to constraint Examples maximize Quantified sum bAll SInteger Just",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "maximize",
          "normalized": "OptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003emaximize\u003c/a\u003e\u003c/code\u003e allowing the use of a user specified solver. See \u003ccode\u003e\u003ca\u003eoptimizeWith\u003c/a\u003e\u003c/code\u003e for parameter descriptions.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "maximizeWith",
          "package": "sbv",
          "signature": "SMTConfig -\u003e OptimizeOpts -\u003e ([SBV a] -\u003e SBV c) -\u003e Int -\u003e ([SBV a] -\u003e SBool) -\u003e IO (Maybe [a])",
          "source": "src/Data-SBV-Tools-Optimize.html#maximizeWith",
          "type": "function"
        },
        "index": {
          "description": "Variant of maximize allowing the use of user specified solver See optimizeWith for parameter descriptions",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "maximizeWith",
          "normalized": "SMTConfig-\u003eOptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "partial": "With",
          "signature": "SMTConfig-\u003eOptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:maximizeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emax/minbounds, if available. Note that we don't want\n to impose \u003ca\u003eBounded\u003c/a\u003e on our class as Integer is not Bounded but it is a SymWord\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "mbMaxBound",
          "package": "sbv",
          "signature": "Maybe a",
          "source": "src/Data-SBV-BitVectors-Data.html#mbMaxBound",
          "type": "method"
        },
        "index": {
          "description": "max minbounds if available Note that we don want to impose Bounded on our class as Integer is not Bounded but it is SymWord",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "mbMaxBound",
          "package": "sbv",
          "partial": "Max Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:mbMaxBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two given arrays on the symbolic condition\n Intuitively: \u003ccode\u003emergeArrays cond a b = if cond then a else b\u003c/code\u003e.\n Merging pushes the if-then-else choice down on to elements\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "mergeArrays",
          "package": "sbv",
          "signature": "SBV Bool -\u003e array a b -\u003e array a b -\u003e array a b",
          "source": "src/Data-SBV-BitVectors-Data.html#mergeArrays",
          "type": "method"
        },
        "index": {
          "description": "Merge two given arrays on the symbolic condition Intuitively mergeArrays cond if cond then else Merging pushes the if-then-else choice down on to elements",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "mergeArrays",
          "normalized": "SBV Bool-\u003ea b c-\u003ea b c-\u003ea b c",
          "package": "sbv",
          "partial": "Arrays",
          "signature": "SBV Bool-\u003earray a b-\u003earray a b-\u003earray a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:mergeArrays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimizes a cost function with respect to a constraint. Examples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimize Quantified sum 3 (bAll (.\u003e (10 :: SInteger)))\n\u003c/code\u003e\u003c/strong\u003eJust [11,11,11]\n\u003c/pre\u003e",
          "module": "Data.SBV",
          "name": "minimize",
          "package": "sbv",
          "signature": "OptimizeOpts -\u003e ([SBV a] -\u003e SBV c) -\u003e Int -\u003e ([SBV a] -\u003e SBool) -\u003e IO (Maybe [a])",
          "source": "src/Data-SBV-Tools-Optimize.html#minimize",
          "type": "function"
        },
        "index": {
          "description": "Minimizes cost function with respect to constraint Examples minimize Quantified sum bAll SInteger Just",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "minimize",
          "normalized": "OptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eminimize\u003c/a\u003e\u003c/code\u003e allowing the use of a user specified solver. See \u003ccode\u003e\u003ca\u003eoptimizeWith\u003c/a\u003e\u003c/code\u003e for parameter descriptions.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "minimizeWith",
          "package": "sbv",
          "signature": "SMTConfig -\u003e OptimizeOpts -\u003e ([SBV a] -\u003e SBV c) -\u003e Int -\u003e ([SBV a] -\u003e SBool) -\u003e IO (Maybe [a])",
          "source": "src/Data-SBV-Tools-Optimize.html#minimizeWith",
          "type": "function"
        },
        "index": {
          "description": "Variant of minimize allowing the use of user specified solver See optimizeWith for parameter descriptions",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "minimizeWith",
          "normalized": "SMTConfig-\u003eOptimizeOpts-\u003e([SBV a]-\u003eSBV b)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "package": "sbv",
          "partial": "With",
          "signature": "SMTConfig-\u003eOptimizeOpts-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:minimizeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a bunch of existentials\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "mkExistVars",
          "package": "sbv",
          "signature": "Int -\u003e Symbolic [SBV a]",
          "source": "src/Data-SBV-BitVectors-Data.html#mkExistVars",
          "type": "method"
        },
        "index": {
          "description": "Create bunch of existentials",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "mkExistVars",
          "normalized": "Int-\u003eSymbolic[SBV a]",
          "package": "sbv",
          "partial": "Exist Vars",
          "signature": "Int-\u003eSymbolic[SBV a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:mkExistVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a bunch of new words\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "mkForallVars",
          "package": "sbv",
          "signature": "Int -\u003e Symbolic [SBV a]",
          "source": "src/Data-SBV-BitVectors-Data.html#mkForallVars",
          "type": "method"
        },
        "index": {
          "description": "Get bunch of new words",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "mkForallVars",
          "normalized": "Int-\u003eSymbolic[SBV a]",
          "package": "sbv",
          "partial": "Forall Vars",
          "signature": "Int-\u003eSymbolic[SBV a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:mkForallVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a bunch of free vars\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "mkFreeVars",
          "package": "sbv",
          "signature": "Int -\u003e Symbolic [SBV a]",
          "source": "src/Data-SBV-BitVectors-Data.html#mkFreeVars",
          "type": "method"
        },
        "index": {
          "description": "Create bunch of free vars",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "mkFreeVars",
          "normalized": "Int-\u003eSymbolic[SBV a]",
          "package": "sbv",
          "partial": "Free Vars",
          "signature": "Int-\u003eSymbolic[SBV a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:mkFreeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function to an array. Useful for creating arrays in a pure context. (Otherwise use \u003ccode\u003e\u003ca\u003enewArray\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "mkSFunArray",
          "package": "sbv",
          "signature": "(SBV a -\u003e SBV b) -\u003e SFunArray a b",
          "source": "src/Data-SBV-BitVectors-Data.html#mkSFunArray",
          "type": "function"
        },
        "index": {
          "description": "Lift function to an array Useful for creating arrays in pure context Otherwise use newArray",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "mkSFunArray",
          "normalized": "(SBV a-\u003eSBV b)-\u003eSFunArray a b",
          "package": "sbv",
          "partial": "SFun Array",
          "signature": "(SBV a-\u003eSBV b)-\u003eSFunArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:mkSFunArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the fully balanced initial tree using the given values.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "mkSTree",
          "package": "sbv",
          "signature": "[SBV e] -\u003e STree i e",
          "source": "src/Data-SBV-BitVectors-STree.html#mkSTree",
          "type": "function"
        },
        "index": {
          "description": "Construct the fully balanced initial tree using the given values",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "mkSTree",
          "normalized": "[SBV a]-\u003eSTree b a",
          "package": "sbv",
          "partial": "STree",
          "signature": "[SBV e]-\u003eSTree i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:mkSTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne stop allocator\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "mkSymWord",
          "package": "sbv",
          "signature": "Maybe Quantifier -\u003e Maybe String -\u003e Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Data.html#mkSymWord",
          "type": "method"
        },
        "index": {
          "description": "One stop allocator",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "mkSymWord",
          "normalized": "Maybe Quantifier-\u003eMaybe String-\u003eSymbolic(SBV a)",
          "package": "sbv",
          "partial": "Sym Word",
          "signature": "Maybe Quantifier-\u003eMaybe String-\u003eSymbolic(SBV a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:mkSymWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs there a model?\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "modelExists",
          "package": "sbv",
          "signature": "a -\u003e Bool",
          "source": "src/Data-SBV-SMT-SMT.html#modelExists",
          "type": "method"
        },
        "index": {
          "description": "Is there model",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "modelExists",
          "normalized": "a-\u003eBool",
          "package": "sbv",
          "partial": "Exists",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:modelExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost significant bit of a word, always stored at the last position.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "msb",
          "package": "sbv",
          "signature": "SBV a -\u003e SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#msb",
          "type": "function"
        },
        "index": {
          "description": "Most significant bit of word always stored at the last position",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "msb",
          "normalized": "SBV a-\u003eSBool",
          "package": "sbv",
          "signature": "SBV a-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:msb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrintable name of the solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "name",
          "package": "sbv",
          "signature": "String",
          "source": "src/Data-SBV-SMT-SMT.html#SMTSolver",
          "type": "function"
        },
        "index": {
          "description": "Printable name of the solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "name",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot-A-Number for \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e. Surprisingly, Haskell\n Prelude doesn't have this value defined, so we provide it here.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "nan",
          "package": "sbv",
          "signature": "a",
          "source": "src/Data-SBV-BitVectors-Data.html#nan",
          "type": "function"
        },
        "index": {
          "description": "Not-A-Number for Double and Float Surprisingly Haskell Prelude doesn have this value defined so we provide it here",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "nan",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:nan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a named new array, with an optional initial value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "newArray",
          "package": "sbv",
          "signature": "String -\u003e Maybe (SBV b) -\u003e Symbolic (array a b)",
          "source": "src/Data-SBV-BitVectors-Data.html#newArray",
          "type": "method"
        },
        "index": {
          "description": "Create named new array with an optional initial value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "newArray",
          "normalized": "String-\u003eMaybe(SBV a)-\u003eSymbolic(b c a)",
          "package": "sbv",
          "partial": "Array",
          "signature": "String-\u003eMaybe(SBV b)-\u003eSymbolic(array a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array, with an optional initial value\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "newArray_",
          "package": "sbv",
          "signature": "Maybe (SBV b) -\u003e Symbolic (array a b)",
          "source": "src/Data-SBV-BitVectors-Data.html#newArray_",
          "type": "method"
        },
        "index": {
          "description": "Create new array with an optional initial value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "newArray_",
          "normalized": "Maybe(SBV a)-\u003eSymbolic(b c a)",
          "package": "sbv",
          "partial": "Array",
          "signature": "Maybe(SBV b)-\u003eSymbolic(array a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:newArray_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns 1 if the boolean is true, otherwise 0.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "oneIf",
          "package": "sbv",
          "signature": "SBool -\u003e SBV a",
          "source": "src/Data-SBV-BitVectors-Model.html#oneIf",
          "type": "function"
        },
        "index": {
          "description": "Returns if the boolean is true otherwise",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "oneIf",
          "normalized": "SBool-\u003eSBV a",
          "package": "sbv",
          "partial": "If",
          "signature": "SBool-\u003eSBV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:oneIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eoptimizeWith\u003c/a\u003e\u003c/code\u003e using the default solver. See \u003ccode\u003e\u003ca\u003eoptimizeWith\u003c/a\u003e\u003c/code\u003e for parameter descriptions.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "optimize",
          "package": "sbv",
          "signature": "OptimizeOpts -\u003e (SBV c -\u003e SBV c -\u003e SBool) -\u003e ([SBV a] -\u003e SBV c) -\u003e Int -\u003e ([SBV a] -\u003e SBool) -\u003e IO (Maybe [a])",
          "source": "src/Data-SBV-Tools-Optimize.html#optimize",
          "type": "function"
        },
        "index": {
          "description": "Variant of optimizeWith using the default solver See optimizeWith for parameter descriptions",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "optimize",
          "normalized": "OptimizeOpts-\u003e(SBV a-\u003eSBV a-\u003eSBool)-\u003e([SBV b]-\u003eSBV a)-\u003eInt-\u003e([SBV b]-\u003eSBool)-\u003eIO(Maybe[b])",
          "package": "sbv",
          "signature": "OptimizeOpts-\u003e(SBV c-\u003eSBV c-\u003eSBool)-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic optimization. Generalization on \u003ccode\u003e\u003ca\u003eminimize\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaximize\u003c/a\u003e\u003c/code\u003e that allows arbitrary\n cost functions and comparisons.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "optimizeWith",
          "package": "sbv",
          "signature": "SMTConfig-\u003e OptimizeOpts-\u003e (SBV c -\u003e SBV c -\u003e SBool)-\u003e ([SBV a] -\u003e SBV c)-\u003e Int-\u003e ([SBV a] -\u003e SBool)-\u003e IO (Maybe [a])",
          "type": "function"
        },
        "index": {
          "description": "Symbolic optimization Generalization on minimize and maximize that allows arbitrary cost functions and comparisons",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "optimizeWith",
          "normalized": "SMTConfig-\u003eOptimizeOpts-\u003e(SBV a-\u003eSBV a-\u003eSBool)-\u003e([SBV b]-\u003eSBV a)-\u003eInt-\u003e([SBV b]-\u003eSBool)-\u003eIO(Maybe[b])",
          "package": "sbv",
          "partial": "With",
          "signature": "SMTConfig-\u003eOptimizeOpts-\u003e(SBV c-\u003eSBV c-\u003eSBool)-\u003e([SBV a]-\u003eSBV c)-\u003eInt-\u003e([SBV a]-\u003eSBool)-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:optimizeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions to provide to the solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "options",
          "package": "sbv",
          "signature": "[String]",
          "source": "src/Data-SBV-SMT-SMT.html#SMTSolver",
          "type": "function"
        },
        "index": {
          "description": "Options to provide to the solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "options",
          "normalized": "[String]",
          "package": "sbv",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark an interim result as an output. Useful when constructing Symbolic programs\n that return multiple values, or when the result is programmatically computed.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "output",
          "package": "sbv",
          "signature": "a -\u003e Symbolic a",
          "source": "src/Data-SBV-BitVectors-Data.html#output",
          "type": "function"
        },
        "index": {
          "description": "Mark an interim result as an output Useful when constructing Symbolic programs that return multiple values or when the result is programmatically computed",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "output",
          "normalized": "a-\u003eSymbolic a",
          "package": "sbv",
          "signature": "a-\u003eSymbolic a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two polynomials in GF(2^n).\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "pAdd",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-SBV-Tools-Polynomial.html#pAdd",
          "type": "method"
        },
        "index": {
          "description": "Add two polynomials in GF",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "pAdd",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "partial": "Add",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:pAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdding a probabilistic constraint. The \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e argument is the probability\n threshold. Probabilistic constraints are useful for \u003ccode\u003egenTest\u003c/code\u003e and \u003ccode\u003equickCheck\u003c/code\u003e\n calls where we restrict our attention to \u003cem\u003einteresting\u003c/em\u003e parts of the input domain.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "pConstrain",
          "package": "sbv",
          "signature": "Double -\u003e SBool -\u003e Symbolic ()",
          "source": "src/Data-SBV-BitVectors-Model.html#pConstrain",
          "type": "function"
        },
        "index": {
          "description": "Adding probabilistic constraint The Double argument is the probability threshold Probabilistic constraints are useful for genTest and quickCheck calls where we restrict our attention to interesting parts of the input domain",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "pConstrain",
          "normalized": "Double-\u003eSBool-\u003eSymbolic()",
          "package": "sbv",
          "partial": "Constrain",
          "signature": "Double-\u003eSBool-\u003eSymbolic()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:pConstrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide two polynomials in GF(2^n), see above note for division by 0.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "pDiv",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-SBV-Tools-Polynomial.html#pDiv",
          "type": "method"
        },
        "index": {
          "description": "Divide two polynomials in GF see above note for division by",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "pDiv",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "partial": "Div",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:pDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision and modulus packed together.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "pDivMod",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e (a, a)",
          "source": "src/Data-SBV-Tools-Polynomial.html#pDivMod",
          "type": "method"
        },
        "index": {
          "description": "Division and modulus packed together",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "pDivMod",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "sbv",
          "partial": "Div Mod",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:pDivMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute modulus of two polynomials in GF(2^n), see above note for modulus by 0.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "pMod",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-SBV-Tools-Polynomial.html#pMod",
          "type": "method"
        },
        "index": {
          "description": "Compute modulus of two polynomials in GF see above note for modulus by",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "pMod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "partial": "Mod",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:pMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two polynomials in GF(2^n), and reduce it by the irreducible specified by\n the polynomial as specified by coefficients of the third argument. Note that the third\n argument is specifically left in this form as it is usally in GF(2^(n+1)), which is not available in our\n formalism. (That is, we would need SWord9 for SWord8 multiplication, etc.) Also note that we do not\n support symbolic irreducibles, which is a minor shortcoming. (Most GF's will come with fixed irreducibles,\n so this should not be a problem in practice.)\n\u003c/p\u003e\u003cp\u003ePassing [] for the third argument will multiply the polynomials and then ignore the higher bits that won't\n fit into the resulting size.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "pMult",
          "package": "sbv",
          "signature": "(a, a, [Int]) -\u003e a",
          "source": "src/Data-SBV-Tools-Polynomial.html#pMult",
          "type": "method"
        },
        "index": {
          "description": "Multiply two polynomials in GF and reduce it by the irreducible specified by the polynomial as specified by coefficients of the third argument Note that the third argument is specifically left in this form as it is usally in GF which is not available in our formalism That is we would need SWord9 for SWord8 multiplication etc Also note that we do not support symbolic irreducibles which is minor shortcoming Most GF will come with fixed irreducibles so this should not be problem in practice Passing for the third argument will multiply the polynomials and then ignore the higher bits that won fit into the resulting size",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "pMult",
          "normalized": "(a,a,[Int])-\u003ea",
          "package": "sbv",
          "partial": "Mult",
          "signature": "(a,a,[Int])-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:pMult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence of constant-words, extract one instance of the type \u003ccode\u003ea\u003c/code\u003e, returning\n the remaining elements untouched. If the next element is not what's expected for this\n type you should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "parseCWs",
          "package": "sbv",
          "signature": "[CW] -\u003e Maybe (a, [CW])",
          "source": "src/Data-SBV-SMT-SMT.html#parseCWs",
          "type": "method"
        },
        "index": {
          "description": "Given sequence of constant-words extract one instance of the type returning the remaining elements untouched If the next element is not what expected for this type you should return Nothing",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "parseCWs",
          "normalized": "[CW]-\u003eMaybe(a,[CW])",
          "package": "sbv",
          "partial": "CWs",
          "signature": "[CW]-\u003eMaybe(a,[CW])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:parseCWs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven bit-positions to be set, create a polynomial\n For instance\n\u003c/p\u003e\u003cpre\u003epolynomial [0, 1, 3] :: SWord8\u003c/pre\u003e\u003cp\u003ewill evaluate to \u003ccode\u003e11\u003c/code\u003e, since it sets the bits \u003ccode\u003e0\u003c/code\u003e, \u003ccode\u003e1\u003c/code\u003e, and \u003ccode\u003e3\u003c/code\u003e. Mathematicans would write this polynomial\n as \u003ccode\u003ex^3 + x + 1\u003c/code\u003e. And in fact, \u003ccode\u003e\u003ca\u003eshowPoly\u003c/a\u003e\u003c/code\u003e will show it like that.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "polynomial",
          "package": "sbv",
          "signature": "[Int] -\u003e a",
          "source": "src/Data-SBV-Tools-Polynomial.html#polynomial",
          "type": "method"
        },
        "index": {
          "description": "Given bit-positions to be set create polynomial For instance polynomial SWord8 will evaluate to since it sets the bits and Mathematicans would write this polynomial as And in fact showPoly will show it like that",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "polynomial",
          "normalized": "[Int]-\u003ea",
          "package": "sbv",
          "signature": "[Int]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:polynomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint integral literals in this base (2, 8, and 10, and 16 are supported.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "printBase",
          "package": "sbv",
          "signature": "Int",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "Print integral literals in this base and and are supported",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "printBase",
          "package": "sbv",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:printBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint algebraic real values with this precision. (SReal, default: 16)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "printRealPrec",
          "package": "sbv",
          "signature": "Int",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "Print algebraic real values with this precision SReal default",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "printRealPrec",
          "package": "sbv",
          "partial": "Real Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:printRealPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve a predicate, equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eproveWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultSMTCfg\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "prove",
          "package": "sbv",
          "signature": "a -\u003e IO ThmResult",
          "source": "src/Data-SBV-Provers-Prover.html#prove",
          "type": "function"
        },
        "index": {
          "description": "Prove predicate equivalent to proveWith defaultSMTCfg",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "prove",
          "normalized": "a-\u003eIO ThmResult",
          "package": "sbv",
          "signature": "a-\u003eIO ThmResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:prove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProves the predicate using the given SMT-solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "proveWith",
          "package": "sbv",
          "signature": "SMTConfig -\u003e a -\u003e IO ThmResult",
          "source": "src/Data-SBV-Provers-Prover.html#proveWith",
          "type": "function"
        },
        "index": {
          "description": "Proves the predicate using the given SMT-solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "proveWith",
          "normalized": "SMTConfig-\u003ea-\u003eIO ThmResult",
          "package": "sbv",
          "partial": "With",
          "signature": "SMTConfig-\u003ea-\u003eIO ThmResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:proveWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the array element at \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "readArray",
          "package": "sbv",
          "signature": "array a b -\u003e SBV a -\u003e SBV b",
          "source": "src/Data-SBV-BitVectors-Data.html#readArray",
          "type": "method"
        },
        "index": {
          "description": "Read the array element at",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "readArray",
          "normalized": "a b c-\u003eSBV b-\u003eSBV c",
          "package": "sbv",
          "partial": "Array",
          "signature": "array a b-\u003eSBV a-\u003eSBV b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:readArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more convenient interface for reading binary numbers, also supports negative numbers\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "readBin",
          "package": "sbv",
          "signature": "String -\u003e a",
          "source": "src/Data-SBV-BitVectors-PrettyNum.html#readBin",
          "type": "function"
        },
        "index": {
          "description": "more convenient interface for reading binary numbers also supports negative numbers",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "readBin",
          "normalized": "String-\u003ea",
          "package": "sbv",
          "partial": "Bin",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:readBin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReading a value. We bit-blast the index and descend down the full tree\n according to bit-values.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "readSTree",
          "package": "sbv",
          "signature": "STree i e -\u003e SBV i -\u003e SBV e",
          "source": "src/Data-SBV-BitVectors-STree.html#readSTree",
          "type": "function"
        },
        "index": {
          "description": "Reading value We bit-blast the index and descend down the full tree according to bit-values",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "readSTree",
          "normalized": "STree a b-\u003eSBV a-\u003eSBV b",
          "package": "sbv",
          "partial": "STree",
          "signature": "STree i e-\u003eSBV i-\u003eSBV e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:readSTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the test as a Haskell value with the given name \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "renderTest",
          "package": "sbv",
          "signature": "TestStyle -\u003e TestVectors -\u003e String",
          "source": "src/Data-SBV-Tools-GenTest.html#renderTest",
          "type": "function"
        },
        "index": {
          "description": "Render the test as Haskell value with the given name",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "renderTest",
          "normalized": "TestStyle-\u003eTestVectors-\u003eString",
          "package": "sbv",
          "partial": "Test",
          "signature": "TestStyle-\u003eTestVectors-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:renderTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset all the elements of the array to the value \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "resetArray",
          "package": "sbv",
          "signature": "array a b -\u003e SBV b -\u003e array a b",
          "source": "src/Data-SBV-BitVectors-Data.html#resetArray",
          "type": "method"
        },
        "index": {
          "description": "Reset all the elements of the array to the value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "resetArray",
          "normalized": "a b c-\u003eSBV c-\u003ea b c",
          "package": "sbv",
          "partial": "Array",
          "signature": "array a b-\u003eSBV b-\u003earray a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:resetArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRounding mode to use for floating-point conversions\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "roundingMode",
          "package": "sbv",
          "signature": "RoundingMode",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "Rounding mode to use for floating-point conversions",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "roundingMode",
          "package": "sbv",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:roundingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sBool",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#sBool",
          "type": "function"
        },
        "index": {
          "description": "Declare an SBool",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sBool",
          "normalized": "String-\u003eSymbolic SBool",
          "package": "sbv",
          "partial": "Bool",
          "signature": "String-\u003eSymbolic SBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSBool\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sBools",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SBool]",
          "source": "src/Data-SBV-BitVectors-Model.html#sBools",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SBool",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sBools",
          "normalized": "[String]-\u003eSymbolic[SBool]",
          "package": "sbv",
          "partial": "Bools",
          "signature": "[String]-\u003eSymbolic[SBool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sBools"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "sDiv",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#sDiv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sDiv",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "partial": "Div",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "sDivMod",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e (a, a)",
          "source": "src/Data-SBV-BitVectors-Model.html#sDivMod",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sDivMod",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "sbv",
          "partial": "Div Mod",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sDivMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSDouble\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sDouble",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SDouble",
          "source": "src/Data-SBV-BitVectors-Model.html#sDouble",
          "type": "function"
        },
        "index": {
          "description": "Declare an SDouble",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sDouble",
          "normalized": "String-\u003eSymbolic SDouble",
          "package": "sbv",
          "partial": "Double",
          "signature": "String-\u003eSymbolic SDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSDouble\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sDoubles",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SDouble]",
          "source": "src/Data-SBV-BitVectors-Model.html#sDoubles",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SDouble",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sDoubles",
          "normalized": "[String]-\u003eSymbolic[SDouble]",
          "package": "sbv",
          "partial": "Doubles",
          "signature": "[String]-\u003eSymbolic[SDouble]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sDoubles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic membership test\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sElem",
          "package": "sbv",
          "signature": "a -\u003e [a] -\u003e SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#sElem",
          "type": "function"
        },
        "index": {
          "description": "Symbolic membership test",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sElem",
          "normalized": "a-\u003e[a]-\u003eSBool",
          "package": "sbv",
          "partial": "Elem",
          "signature": "a-\u003e[a]-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSFloat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sFloat",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SFloat",
          "source": "src/Data-SBV-BitVectors-Model.html#sFloat",
          "type": "function"
        },
        "index": {
          "description": "Declare an SFloat",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sFloat",
          "normalized": "String-\u003eSymbolic SFloat",
          "package": "sbv",
          "partial": "Float",
          "signature": "String-\u003eSymbolic SFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSFloat\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sFloats",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SFloat]",
          "source": "src/Data-SBV-BitVectors-Model.html#sFloats",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SFloat",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sFloats",
          "normalized": "[String]-\u003eSymbolic[SFloat]",
          "package": "sbv",
          "partial": "Floats",
          "signature": "[String]-\u003eSymbolic[SFloat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sFloats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic variant of infinity. This value will inhabit both\n \u003ccode\u003e\u003ca\u003eSDouble\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInfinity",
          "package": "sbv",
          "signature": "SBV a",
          "source": "src/Data-SBV-BitVectors-Data.html#sInfinity",
          "type": "function"
        },
        "index": {
          "description": "Symbolic variant of infinity This value will inhabit both SDouble and SFloat",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInfinity",
          "package": "sbv",
          "partial": "Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSInt16\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInt16",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SInt16",
          "source": "src/Data-SBV-BitVectors-Model.html#sInt16",
          "type": "function"
        },
        "index": {
          "description": "Declare an SInt16",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInt16",
          "normalized": "String-\u003eSymbolic SInt",
          "package": "sbv",
          "partial": "Int",
          "signature": "String-\u003eSymbolic SInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSInt16\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInt16s",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SInt16]",
          "source": "src/Data-SBV-BitVectors-Model.html#sInt16s",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SInt16",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInt16s",
          "normalized": "[String]-\u003eSymbolic[SInt]",
          "package": "sbv",
          "partial": "Int",
          "signature": "[String]-\u003eSymbolic[SInt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInt16s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSInt32\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInt32",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SInt32",
          "source": "src/Data-SBV-BitVectors-Model.html#sInt32",
          "type": "function"
        },
        "index": {
          "description": "Declare an SInt32",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInt32",
          "normalized": "String-\u003eSymbolic SInt",
          "package": "sbv",
          "partial": "Int",
          "signature": "String-\u003eSymbolic SInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSInt32\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInt32s",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SInt32]",
          "source": "src/Data-SBV-BitVectors-Model.html#sInt32s",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SInt32",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInt32s",
          "normalized": "[String]-\u003eSymbolic[SInt]",
          "package": "sbv",
          "partial": "Int",
          "signature": "[String]-\u003eSymbolic[SInt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInt32s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSInt64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInt64",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SInt64",
          "source": "src/Data-SBV-BitVectors-Model.html#sInt64",
          "type": "function"
        },
        "index": {
          "description": "Declare an SInt64",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInt64",
          "normalized": "String-\u003eSymbolic SInt",
          "package": "sbv",
          "partial": "Int",
          "signature": "String-\u003eSymbolic SInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSInt64\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInt64s",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SInt64]",
          "source": "src/Data-SBV-BitVectors-Model.html#sInt64s",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SInt64",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInt64s",
          "normalized": "[String]-\u003eSymbolic[SInt]",
          "package": "sbv",
          "partial": "Int",
          "signature": "[String]-\u003eSymbolic[SInt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInt64s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSInt8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInt8",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SInt8",
          "source": "src/Data-SBV-BitVectors-Model.html#sInt8",
          "type": "function"
        },
        "index": {
          "description": "Declare an SInt8",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInt8",
          "normalized": "String-\u003eSymbolic SInt",
          "package": "sbv",
          "partial": "Int",
          "signature": "String-\u003eSymbolic SInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSInt8\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInt8s",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SInt8]",
          "source": "src/Data-SBV-BitVectors-Model.html#sInt8s",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SInt8",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInt8s",
          "normalized": "[String]-\u003eSymbolic[SInt]",
          "package": "sbv",
          "partial": "Int",
          "signature": "[String]-\u003eSymbolic[SInt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInt8s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sInteger",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SInteger",
          "source": "src/Data-SBV-BitVectors-Model.html#sInteger",
          "type": "function"
        },
        "index": {
          "description": "Declare an SInteger",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sInteger",
          "normalized": "String-\u003eSymbolic SInteger",
          "package": "sbv",
          "partial": "Integer",
          "signature": "String-\u003eSymbolic SInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSInteger\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sIntegers",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SInteger]",
          "source": "src/Data-SBV-BitVectors-Model.html#sIntegers",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SInteger",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sIntegers",
          "normalized": "[String]-\u003eSymbolic[SInteger]",
          "package": "sbv",
          "partial": "Integers",
          "signature": "[String]-\u003eSymbolic[SInteger]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sIntegers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "sMod",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#sMod",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sMod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "partial": "Mod",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic variant of Not-A-Number. This value will inhabit both\n \u003ccode\u003e\u003ca\u003eSDouble\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sNaN",
          "package": "sbv",
          "signature": "SBV a",
          "source": "src/Data-SBV-BitVectors-Data.html#sNaN",
          "type": "function"
        },
        "index": {
          "description": "Symbolic variant of Not-A-Number This value will inhabit both SDouble and SFloat",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sNaN",
          "package": "sbv",
          "partial": "Na",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "sQuot",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#sQuot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sQuot",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "partial": "Quot",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sQuot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "sQuotRem",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e (a, a)",
          "source": "src/Data-SBV-BitVectors-Model.html#sQuotRem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sQuotRem",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "sbv",
          "partial": "Quot Rem",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sQuotRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSReal\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sReal",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SReal",
          "source": "src/Data-SBV-BitVectors-Model.html#sReal",
          "type": "function"
        },
        "index": {
          "description": "Declare an SReal",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sReal",
          "normalized": "String-\u003eSymbolic SReal",
          "package": "sbv",
          "partial": "Real",
          "signature": "String-\u003eSymbolic SReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSReal\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sReals",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SReal]",
          "source": "src/Data-SBV-BitVectors-Model.html#sReals",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SReal",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sReals",
          "normalized": "[String]-\u003eSymbolic[SReal]",
          "package": "sbv",
          "partial": "Reals",
          "signature": "[String]-\u003eSymbolic[SReal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sReals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "sRem",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#sRem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sRem",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "partial": "Rem",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSWord16\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sWord16",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SWord16",
          "source": "src/Data-SBV-BitVectors-Model.html#sWord16",
          "type": "function"
        },
        "index": {
          "description": "Declare an SWord16",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sWord16",
          "normalized": "String-\u003eSymbolic SWord",
          "package": "sbv",
          "partial": "Word",
          "signature": "String-\u003eSymbolic SWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSWord16\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sWord16s",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SWord16]",
          "source": "src/Data-SBV-BitVectors-Model.html#sWord16s",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SWord16",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sWord16s",
          "normalized": "[String]-\u003eSymbolic[SWord]",
          "package": "sbv",
          "partial": "Word",
          "signature": "[String]-\u003eSymbolic[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sWord16s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSWord32\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sWord32",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SWord32",
          "source": "src/Data-SBV-BitVectors-Model.html#sWord32",
          "type": "function"
        },
        "index": {
          "description": "Declare an SWord32",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sWord32",
          "normalized": "String-\u003eSymbolic SWord",
          "package": "sbv",
          "partial": "Word",
          "signature": "String-\u003eSymbolic SWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSWord32\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sWord32s",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SWord32]",
          "source": "src/Data-SBV-BitVectors-Model.html#sWord32s",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SWord32",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sWord32s",
          "normalized": "[String]-\u003eSymbolic[SWord]",
          "package": "sbv",
          "partial": "Word",
          "signature": "[String]-\u003eSymbolic[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sWord32s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSWord64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sWord64",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SWord64",
          "source": "src/Data-SBV-BitVectors-Model.html#sWord64",
          "type": "function"
        },
        "index": {
          "description": "Declare an SWord64",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sWord64",
          "normalized": "String-\u003eSymbolic SWord",
          "package": "sbv",
          "partial": "Word",
          "signature": "String-\u003eSymbolic SWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSWord64\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sWord64s",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SWord64]",
          "source": "src/Data-SBV-BitVectors-Model.html#sWord64s",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SWord64",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sWord64s",
          "normalized": "[String]-\u003eSymbolic[SWord]",
          "package": "sbv",
          "partial": "Word",
          "signature": "[String]-\u003eSymbolic[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sWord64s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ca\u003eSWord8\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sWord8",
          "package": "sbv",
          "signature": "String -\u003e Symbolic SWord8",
          "source": "src/Data-SBV-BitVectors-Model.html#sWord8",
          "type": "function"
        },
        "index": {
          "description": "Declare an SWord8",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sWord8",
          "normalized": "String-\u003eSymbolic SWord",
          "package": "sbv",
          "partial": "Word",
          "signature": "String-\u003eSymbolic SWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a list of \u003ccode\u003e\u003ca\u003eSWord8\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sWord8s",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SWord8]",
          "source": "src/Data-SBV-BitVectors-Model.html#sWord8s",
          "type": "function"
        },
        "index": {
          "description": "Declare list of SWord8",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sWord8s",
          "normalized": "[String]-\u003eSymbolic[SWord]",
          "package": "sbv",
          "partial": "Word",
          "signature": "[String]-\u003eSymbolic[SWord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sWord8s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a satisfying assignment for a predicate, equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esatWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultSMTCfg\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sat",
          "package": "sbv",
          "signature": "a -\u003e IO SatResult",
          "source": "src/Data-SBV-Provers-Prover.html#sat",
          "type": "function"
        },
        "index": {
          "description": "Find satisfying assignment for predicate equivalent to satWith defaultSMTCfg",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sat",
          "normalized": "a-\u003eIO SatResult",
          "package": "sbv",
          "signature": "a-\u003eIO SatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsually \u003ca\u003e(check-sat)\u003c/a\u003e. However, users might tweak it based on solver characteristics.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "satCmd",
          "package": "sbv",
          "signature": "String",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "Usually check-sat However users might tweak it based on solver characteristics",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "satCmd",
          "package": "sbv",
          "partial": "Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:satCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a satisfying assignment using the given SMT-solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "satWith",
          "package": "sbv",
          "signature": "SMTConfig -\u003e a -\u003e IO SatResult",
          "source": "src/Data-SBV-Provers-Prover.html#satWith",
          "type": "function"
        },
        "index": {
          "description": "Find satisfying assignment using the given SMT-solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "satWith",
          "normalized": "SMTConfig-\u003ea-\u003eIO SatResult",
          "package": "sbv",
          "partial": "With",
          "signature": "SMTConfig-\u003ea-\u003eIO SatResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:satWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the given solver is installed and is ready to go. This call does a\n simple call to the solver to ensure all is well.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sbvCheckSolverInstallation",
          "package": "sbv",
          "signature": "SMTConfig -\u003e IO Bool",
          "source": "src/Data-SBV-Provers-Prover.html#sbvCheckSolverInstallation",
          "type": "function"
        },
        "index": {
          "description": "Check whether the given solver is installed and is ready to go This call does simple call to the solver to ensure all is well",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sbvCheckSolverInstallation",
          "normalized": "SMTConfig-\u003eIO Bool",
          "package": "sbv",
          "partial": "Check Solver Installation",
          "signature": "SMTConfig-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sbvCheckSolverInstallation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe currently active solver, obtained by importing \u003ca\u003eData.SBV\u003c/a\u003e.\n To have other solvers \u003cem\u003ecurrent\u003c/em\u003e, import one of the bridge\n modules \u003ca\u003eData.SBV.Bridge.CVC4\u003c/a\u003e, \u003ca\u003eData.SBV.Bridge.Yices\u003c/a\u003e, or\n \u003ca\u003eData.SBV.Bridge.Z3\u003c/a\u003e directly.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV.html#sbvCurrentSolver",
          "type": "function"
        },
        "index": {
          "description": "The currently active solver obtained by importing Data.SBV To have other solvers current import one of the bridge modules Data.SBV.Bridge.CVC4 Data.SBV.Bridge.Yices or Data.SBV.Bridge.Z3 directly",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sbvCurrentSolver",
          "package": "sbv",
          "partial": "Current Solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sbvCurrentSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplacement for \u003ccode\u003e\u003ca\u003epopCount\u003c/a\u003e\u003c/code\u003e. Since \u003ccode\u003e\u003ca\u003epopCount\u003c/a\u003e\u003c/code\u003e returns an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, we cannot implement\n it for symbolic words. Here, we return an \u003ccode\u003e\u003ca\u003eSWord8\u003c/a\u003e\u003c/code\u003e, which can overflow when used on\n quantities that have more than 255 bits. Currently, that's only the \u003ccode\u003e\u003ca\u003eSInteger\u003c/a\u003e\u003c/code\u003e type\n that SBV supports, all other types are safe. Even with \u003ccode\u003e\u003ca\u003eSInteger\u003c/a\u003e\u003c/code\u003e, this will only\n overflow if there are at least 256-bits set in the number, and the smallest such\n number is 2^256-1, which is a pretty darn big number to worry about for practical\n purposes. In any case, we do not support \u003ccode\u003e\u003ca\u003esbvPopCount\u003c/a\u003e\u003c/code\u003e for unbounded symbolic integers,\n as the only possible implementation wouldn't symbolically terminate. So the only overflow\n issue is with really-really large concrete \u003ccode\u003e\u003ca\u003eSInteger\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sbvPopCount",
          "package": "sbv",
          "signature": "SBV a -\u003e SWord8",
          "source": "src/Data-SBV-BitVectors-Model.html#sbvPopCount",
          "type": "function"
        },
        "index": {
          "description": "Replacement for popCount Since popCount returns an Int we cannot implement it for symbolic words Here we return an SWord8 which can overflow when used on quantities that have more than bits Currently that only the SInteger type that SBV supports all other types are safe Even with SInteger this will only overflow if there are at least bits set in the number and the smallest such number is which is pretty darn big number to worry about for practical purposes In any case we do not support sbvPopCount for unbounded symbolic integers as the only possible implementation wouldn symbolically terminate So the only overflow issue is with really-really large concrete SInteger values",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sbvPopCount",
          "normalized": "SBV a-\u003eSWord",
          "package": "sbv",
          "partial": "Pop Count",
          "signature": "SBV a-\u003eSWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sbvPopCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eshiftL\u003c/a\u003e\u003c/code\u003e, when the shift-amount is symbolic. Since Haskell's\n \u003ccode\u003e\u003ca\u003eshiftL\u003c/a\u003e\u003c/code\u003e only takes an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e as the shift amount, it cannot be used when we have\n a symbolic amount to shift with. The shift amount must be an unsigned quantity.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sbvShiftLeft",
          "package": "sbv",
          "signature": "SBV a -\u003e SBV b -\u003e SBV a",
          "source": "src/Data-SBV-BitVectors-Model.html#sbvShiftLeft",
          "type": "function"
        },
        "index": {
          "description": "Generalization of shiftL when the shift-amount is symbolic Since Haskell shiftL only takes an Int as the shift amount it cannot be used when we have symbolic amount to shift with The shift amount must be an unsigned quantity",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sbvShiftLeft",
          "normalized": "SBV a-\u003eSBV b-\u003eSBV a",
          "package": "sbv",
          "partial": "Shift Left",
          "signature": "SBV a-\u003eSBV b-\u003eSBV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sbvShiftLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eshiftR\u003c/a\u003e\u003c/code\u003e, when the shift-amount is symbolic. Since Haskell's\n \u003ccode\u003e\u003ca\u003eshiftR\u003c/a\u003e\u003c/code\u003e only takes an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e as the shift amount, it cannot be used when we have\n a symbolic amount to shift with. The shift amount must be an unsigned quantity.\n\u003c/p\u003e\u003cp\u003eNB. If the shiftee is signed, then this is an arithmetic shift; otherwise it's logical,\n following the usual Haskell convention. See \u003ccode\u003e\u003ca\u003esbvSignedShiftArithRight\u003c/a\u003e\u003c/code\u003e for a variant\n that explicitly uses the msb as the sign bit, even for unsigned underlying types.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sbvShiftRight",
          "package": "sbv",
          "signature": "SBV a -\u003e SBV b -\u003e SBV a",
          "source": "src/Data-SBV-BitVectors-Model.html#sbvShiftRight",
          "type": "function"
        },
        "index": {
          "description": "Generalization of shiftR when the shift-amount is symbolic Since Haskell shiftR only takes an Int as the shift amount it cannot be used when we have symbolic amount to shift with The shift amount must be an unsigned quantity NB If the shiftee is signed then this is an arithmetic shift otherwise it logical following the usual Haskell convention See sbvSignedShiftArithRight for variant that explicitly uses the msb as the sign bit even for unsigned underlying types",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sbvShiftRight",
          "normalized": "SBV a-\u003eSBV b-\u003eSBV a",
          "package": "sbv",
          "partial": "Shift Right",
          "signature": "SBV a-\u003eSBV b-\u003eSBV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sbvShiftRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArithmetic shift-right with a symbolic unsigned shift amount. This is equivalent\n to \u003ccode\u003e\u003ca\u003esbvShiftRight\u003c/a\u003e\u003c/code\u003e when the argument is signed. However, if the argument is unsigned,\n then it explicitly treats its msb as a sign-bit, and uses it as the bit that\n gets shifted in. Useful when using the underlying unsigned bit representation to implement\n custom signed operations. Note that there is no direct Haskell analogue of this function.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sbvSignedShiftArithRight",
          "package": "sbv",
          "signature": "SBV a -\u003e SBV b -\u003e SBV a",
          "source": "src/Data-SBV-BitVectors-Model.html#sbvSignedShiftArithRight",
          "type": "function"
        },
        "index": {
          "description": "Arithmetic shift-right with symbolic unsigned shift amount This is equivalent to sbvShiftRight when the argument is signed However if the argument is unsigned then it explicitly treats its msb as sign-bit and uses it as the bit that gets shifted in Useful when using the underlying unsigned bit representation to implement custom signed operations Note that there is no direct Haskell analogue of this function",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sbvSignedShiftArithRight",
          "normalized": "SBV a-\u003eSBV b-\u003eSBV a",
          "package": "sbv",
          "partial": "Signed Shift Arith Right",
          "signature": "SBV a-\u003eSBV b-\u003eSBV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sbvSignedShiftArithRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplacement for \u003ccode\u003e\u003ca\u003etestBit\u003c/a\u003e\u003c/code\u003e. Since \u003ccode\u003e\u003ca\u003etestBit\u003c/a\u003e\u003c/code\u003e requires a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to be returned,\n we cannot implement it for symbolic words. Index 0 is the least-significant bit.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sbvTestBit",
          "package": "sbv",
          "signature": "SBV a -\u003e Int -\u003e SBool",
          "source": "src/Data-SBV-BitVectors-Model.html#sbvTestBit",
          "type": "function"
        },
        "index": {
          "description": "Replacement for testBit Since testBit requires Bool to be returned we cannot implement it for symbolic words Index is the least-significant bit",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sbvTestBit",
          "normalized": "SBV a-\u003eInt-\u003eSBool",
          "package": "sbv",
          "partial": "Test Bit",
          "signature": "SBV a-\u003eInt-\u003eSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sbvTestBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost generalized form of uninterpretation, this function should not be needed\n by end-user-code, but is rather useful for the library development.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "sbvUninterpret",
          "package": "sbv",
          "signature": "Maybe ([String], a) -\u003e String -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#sbvUninterpret",
          "type": "method"
        },
        "index": {
          "description": "Most generalized form of uninterpretation this function should not be needed by end-user-code but is rather useful for the library development",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "sbvUninterpret",
          "normalized": "Maybe([String],a)-\u003eString-\u003ea",
          "package": "sbv",
          "partial": "Uninterpret",
          "signature": "Maybe([String],a)-\u003eString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:sbvUninterpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal indexing operation. \u003ccode\u003eselect xs default index\u003c/code\u003e is intuitively\n the same as \u003ccode\u003exs !! index\u003c/code\u003e, except it evaluates to \u003ccode\u003edefault\u003c/code\u003e if \u003ccode\u003eindex\u003c/code\u003e\n overflows\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "select",
          "package": "sbv",
          "signature": "[a] -\u003e a -\u003e SBV b -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#select",
          "type": "method"
        },
        "index": {
          "description": "Total indexing operation select xs default index is intuitively the same as xs index except it evaluates to default if index overflows",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "select",
          "normalized": "[a]-\u003ea-\u003eSBV b-\u003ea",
          "package": "sbv",
          "signature": "[a]-\u003ea-\u003eSBV b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003esetBit\u003c/a\u003e\u003c/code\u003e based on a symbolic boolean. Note that \u003ccode\u003e\u003ca\u003esetBit\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eclearBit\u003c/a\u003e\u003c/code\u003e are still available on Symbolic words, this operation comes handy when\n the condition to set/clear happens to be symbolic.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "setBitTo",
          "package": "sbv",
          "signature": "SBV a -\u003e Int -\u003e SBool -\u003e SBV a",
          "source": "src/Data-SBV-BitVectors-Model.html#setBitTo",
          "type": "function"
        },
        "index": {
          "description": "Generalization of setBit based on symbolic boolean Note that setBit and clearBit are still available on Symbolic words this operation comes handy when the condition to set clear happens to be symbolic",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "setBitTo",
          "normalized": "SBV a-\u003eInt-\u003eSBool-\u003eSBV a",
          "package": "sbv",
          "partial": "Bit To",
          "signature": "SBV a-\u003eInt-\u003eSBool-\u003eSBV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:setBitTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a polynomial like a mathematician would (over the monomial \u003ccode\u003ex\u003c/code\u003e), with a type.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "showPoly",
          "package": "sbv",
          "signature": "a -\u003e String",
          "source": "src/Data-SBV-Tools-Polynomial.html#showPoly",
          "type": "method"
        },
        "index": {
          "description": "Display polynomial like mathematician would over the monomial with type",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "showPoly",
          "normalized": "a-\u003eString",
          "package": "sbv",
          "partial": "Poly",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:showPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a polynomial like a mathematician would (over the monomial \u003ccode\u003ex\u003c/code\u003e), the first argument\n controls if the final type is shown as well.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "showPolynomial",
          "package": "sbv",
          "signature": "Bool -\u003e a -\u003e String",
          "source": "src/Data-SBV-Tools-Polynomial.html#showPolynomial",
          "type": "method"
        },
        "index": {
          "description": "Display polynomial like mathematician would over the monomial the first argument controls if the final type is shown as well",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "showPolynomial",
          "normalized": "Bool-\u003ea-\u003eString",
          "package": "sbv",
          "partial": "Polynomial",
          "signature": "Bool-\u003ea-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:showPolynomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "showType",
          "package": "sbv",
          "signature": "a -\u003e String",
          "source": "src/Data-SBV-BitVectors-Data.html#showType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "showType",
          "normalized": "a-\u003eString",
          "package": "sbv",
          "partial": "Type",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:showType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret as a signed word\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "signCast",
          "package": "sbv",
          "signature": "a -\u003e b",
          "source": "src/Data-SBV-BitVectors-SignCast.html#signCast",
          "type": "method"
        },
        "index": {
          "description": "Interpret as signed word",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "signCast",
          "normalized": "a-\u003eb",
          "package": "sbv",
          "partial": "Cast",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:signCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "smin",
          "package": "sbv",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#smin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "smin",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sbv",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:smin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf Just, the generated SMT script will be put in this file (for debugging purposes mostly)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "smtFile",
          "package": "sbv",
          "signature": "Maybe FilePath",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "If Just the generated SMT script will be put in this file for debugging purposes mostly",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "smtFile",
          "package": "sbv",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:smtFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm the symbolic conjunction of a given list of boolean conditions. Useful in expressing\n problems with constraints, like the following:\n\u003c/p\u003e\u003cpre\u003e\n   do [x, y, z] \u003c- sIntegers [\"x\", \"y\", \"z\"]\n      solve [x .\u003e 5, y + z .\u003c x]\n\u003c/pre\u003e",
          "module": "Data.SBV",
          "name": "solve",
          "package": "sbv",
          "signature": "[SBool] -\u003e Symbolic SBool",
          "source": "src/Data-SBV-Provers-Prover.html#solve",
          "type": "function"
        },
        "index": {
          "description": "Form the symbolic conjunction of given list of boolean conditions Useful in expressing problems with constraints like the following do sIntegers solve",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "solve",
          "normalized": "[SBool]-\u003eSymbolic SBool",
          "package": "sbv",
          "signature": "[SBool]-\u003eSymbolic SBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual SMT solver.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "solver",
          "package": "sbv",
          "signature": "SMTSolver",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "The actual SMT solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "solver",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:solver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional lines of script to give to the solver (user specified)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "solverTweaks",
          "package": "sbv",
          "signature": "[String]",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "Additional lines of script to give to the solver user specified",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "solverTweaks",
          "normalized": "[String]",
          "package": "sbv",
          "partial": "Tweaks",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:solverTweaks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SBV",
          "name": "split",
          "package": "sbv",
          "signature": "a -\u003e (b, b)",
          "source": "src/Data-SBV-BitVectors-Splittable.html#split",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "split",
          "normalized": "a-\u003e(b,b)",
          "package": "sbv",
          "signature": "a-\u003e(b,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to free; Just a more convenient name\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "symbolic",
          "package": "sbv",
          "signature": "String -\u003e Symbolic (SBV a)",
          "source": "src/Data-SBV-BitVectors-Data.html#symbolic",
          "type": "method"
        },
        "index": {
          "description": "Similar to free Just more convenient name",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "symbolic",
          "normalized": "String-\u003eSymbolic(SBV a)",
          "package": "sbv",
          "signature": "String-\u003eSymbolic(SBV a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:symbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two values based on the condition. This is intended\n to be a \u003ca\u003estructural\u003c/a\u003e copy, walking down the values and merging\n recursively through the structure of \u003ccode\u003ea\u003c/code\u003e. In particular,\n symbolicMerge should *not* waste its time testing whether the\n condition might be a literal; that will be handled by \u003ccode\u003e\u003ca\u003eite\u003c/a\u003e\u003c/code\u003e\n which should be used in all user code. In particular, any\n implementation of \u003ccode\u003e\u003ca\u003esymbolicMerge\u003c/a\u003e\u003c/code\u003e should just call \u003ccode\u003e\u003ca\u003esymbolicMerge\u003c/a\u003e\u003c/code\u003e\n recursively in the constituents of \u003ccode\u003ea\u003c/code\u003e, instead of \u003ccode\u003e\u003ca\u003eite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "symbolicMerge",
          "package": "sbv",
          "signature": "SBool -\u003e a -\u003e a -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#symbolicMerge",
          "type": "method"
        },
        "index": {
          "description": "Merge two values based on the condition This is intended to be structural copy walking down the values and merging recursively through the structure of In particular symbolicMerge should not waste its time testing whether the condition might be literal that will be handled by ite which should be used in all user code In particular any implementation of symbolicMerge should just call symbolicMerge recursively in the constituents of instead of ite",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "symbolicMerge",
          "normalized": "SBool-\u003ea-\u003ea-\u003ea",
          "package": "sbv",
          "partial": "Merge",
          "signature": "SBool-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:symbolicMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to mkFreeVars; but automatically gives names based on the strings\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "symbolics",
          "package": "sbv",
          "signature": "[String] -\u003e Symbolic [SBV a]",
          "source": "src/Data-SBV-BitVectors-Data.html#symbolics",
          "type": "method"
        },
        "index": {
          "description": "Similar to mkFreeVars but automatically gives names based on the strings",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "symbolics",
          "normalized": "[String]-\u003eSymbolic[SBV a]",
          "package": "sbv",
          "signature": "[String]-\u003eSymbolic[SBV a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:symbolics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow much time to give to the solver. (In seconds)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "timeOut",
          "package": "sbv",
          "signature": "Maybe Int",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "How much time to give to the solver In seconds",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "timeOut",
          "package": "sbv",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:timeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint timing information on how long different phases took (construction, solving, etc.)\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "timing",
          "package": "sbv",
          "signature": "Bool",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "Print timing information on how long different phases took construction solving etc",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "timing",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:timing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote an SInteger to an SReal\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "toSReal",
          "package": "sbv",
          "signature": "SInteger -\u003e SReal",
          "source": "src/Data-SBV-BitVectors-Model.html#toSReal",
          "type": "function"
        },
        "index": {
          "description": "Promote an SInteger to an SReal",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "toSReal",
          "normalized": "SInteger-\u003eSReal",
          "package": "sbv",
          "partial": "SReal",
          "signature": "SInteger-\u003eSReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:toSReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elogical true\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "true",
          "package": "sbv",
          "signature": "b",
          "source": "src/Data-SBV-Utils-Boolean.html#true",
          "type": "method"
        },
        "index": {
          "description": "logical true",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "true",
          "package": "sbv",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUninterpret a value, receiving an object that can be used instead. Use this version\n when you do not need to add an axiom about this value.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "uninterpret",
          "package": "sbv",
          "signature": "String -\u003e a",
          "source": "src/Data-SBV-BitVectors-Model.html#uninterpret",
          "type": "method"
        },
        "index": {
          "description": "Uninterpret value receiving an object that can be used instead Use this version when you do not need to add an axiom about this value",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "uninterpret",
          "normalized": "String-\u003ea",
          "package": "sbv",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:uninterpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a literal, if the value is concrete\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "unliteral",
          "package": "sbv",
          "signature": "SBV a -\u003e Maybe a",
          "source": "src/Data-SBV-BitVectors-Data.html#unliteral",
          "type": "method"
        },
        "index": {
          "description": "Extract literal if the value is concrete",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "unliteral",
          "normalized": "SBV a-\u003eMaybe a",
          "package": "sbv",
          "signature": "SBV a-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:unliteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret as an unsigned word\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "unsignCast",
          "package": "sbv",
          "signature": "b -\u003e a",
          "source": "src/Data-SBV-BitVectors-SignCast.html#unsignCast",
          "type": "method"
        },
        "index": {
          "description": "Interpret as an unsigned word",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "unsignCast",
          "normalized": "a-\u003eb",
          "package": "sbv",
          "partial": "Cast",
          "signature": "b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:unsignCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf Nothing, pick automatically. Otherwise, either use the given one, or use the custom string.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "useLogic",
          "package": "sbv",
          "signature": "Maybe Logic",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "If Nothing pick automatically Otherwise either use the given one or use the custom string",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "useLogic",
          "package": "sbv",
          "partial": "Logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:useLogic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True, we'll treat the solver as using SMTLib2 input format. Otherwise, SMTLib1\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "useSMTLib2",
          "package": "sbv",
          "signature": "Bool",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "If True we ll treat the solver as using SMTLib2 input format Otherwise SMTLib1",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "useSMTLib2",
          "package": "sbv",
          "partial": "SMTLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:useSMTLib2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebug mode\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "verbose",
          "package": "sbv",
          "signature": "Bool",
          "source": "src/Data-SBV-SMT-SMT.html#SMTConfig",
          "type": "function"
        },
        "index": {
          "description": "Debug mode",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "verbose",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the element at \u003ccode\u003ea\u003c/code\u003e to be \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "writeArray",
          "package": "sbv",
          "signature": "array a b -\u003e SBV a -\u003e SBV b -\u003e array a b",
          "source": "src/Data-SBV-BitVectors-Data.html#writeArray",
          "type": "method"
        },
        "index": {
          "description": "Update the element at to be",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "writeArray",
          "normalized": "a b c-\u003eSBV b-\u003eSBV c-\u003ea b c",
          "package": "sbv",
          "partial": "Array",
          "signature": "array a b-\u003eSBV a-\u003eSBV b-\u003earray a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:writeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWriting a value, similar to how reads are done. The important thing is that the tree\n representation keeps updates to a minimum.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "writeSTree",
          "package": "sbv",
          "signature": "STree i e -\u003e SBV i -\u003e SBV e -\u003e STree i e",
          "source": "src/Data-SBV-BitVectors-STree.html#writeSTree",
          "type": "function"
        },
        "index": {
          "description": "Writing value similar to how reads are done The important thing is that the tree representation keeps updates to minimum",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "writeSTree",
          "normalized": "STree a b-\u003eSBV a-\u003eSBV b-\u003eSTree a b",
          "package": "sbv",
          "partial": "STree",
          "signature": "STree i e-\u003eSBV i-\u003eSBV e-\u003eSTree i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:writeSTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould we re-interpret exit codes. Most solvers behave rationally, i.e., id will do. Some (like CVC4) don't.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "xformExitCode",
          "package": "sbv",
          "signature": "ExitCode -\u003e ExitCode",
          "source": "src/Data-SBV-SMT-SMT.html#SMTSolver",
          "type": "function"
        },
        "index": {
          "description": "Should we re-interpret exit codes Most solvers behave rationally i.e id will do Some like CVC4 don",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "xformExitCode",
          "normalized": "ExitCode-\u003eExitCode",
          "package": "sbv",
          "partial": "Exit Code",
          "signature": "ExitCode-\u003eExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:xformExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration for the Yices SMT Solver.\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "yices",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Provers-Prover.html#yices",
          "type": "function"
        },
        "index": {
          "description": "Default configuration for the Yices SMT Solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "yices",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:yices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration for the Z3 SMT solver\n\u003c/p\u003e",
          "module": "Data.SBV",
          "name": "z3",
          "package": "sbv",
          "signature": "SMTConfig",
          "source": "src/Data-SBV-Provers-Prover.html#z3",
          "type": "function"
        },
        "index": {
          "description": "Default configuration for the Z3 SMT solver",
          "hierarchy": "Data SBV",
          "module": "Data.SBV",
          "name": "z3",
          "package": "sbv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sbv/docs/Data-SBV.html#v:z3"
      }
    }
  ]
]