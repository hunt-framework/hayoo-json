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
        "word": "incremental-sat-solver"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell library provides an implementation of the\n Davis-Putnam-Logemann-Loveland algorithm\n (cf. \u003ca\u003ehttp://en.wikipedia.org/wiki/DPLL_algorithm\u003c/a\u003e) for the boolean\n satisfiability problem. It not only allows to solve boolean\n formulas in one go but also to add constraints and query bindings\n of variables incrementally.\n\u003c/p\u003e\u003cp\u003eThe implementation is not sophisticated at all but uses the basic\n DPLL algorithm with unit propagation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "SatSolver",
          "package": "incremental-sat-solver",
          "source": "src/Data-Boolean-SatSolver.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell library provides an implementation of the Davis-Putnam-Logemann-Loveland algorithm cf http en.wikipedia.org wiki DPLL algorithm for the boolean satisfiability problem It not only allows to solve boolean formulas in one go but also to add constraints and query bindings of variables incrementally The implementation is not sophisticated at all but uses the basic DPLL algorithm with unit propagation",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "SatSolver",
          "package": "incremental-sat-solver",
          "partial": "Sat Solver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean formulas are represented as values of type \u003ccode\u003eBoolean\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "Boolean",
          "package": "incremental-sat-solver",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "data"
        },
        "index": {
          "description": "Boolean formulas are represented as values of type Boolean",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Boolean",
          "package": "incremental-sat-solver",
          "partial": "Boolean",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eSatSolver\u003c/code\u003e can be used to solve boolean formulas.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "SatSolver",
          "package": "incremental-sat-solver",
          "source": "src/Data-Boolean-SatSolver.html#SatSolver",
          "type": "data"
        },
        "index": {
          "description": "SatSolver can be used to solve boolean formulas",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "SatSolver",
          "package": "incremental-sat-solver",
          "partial": "Sat Solver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#t:SatSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eand disjunction of boolean formulas.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": ":||:",
          "package": "incremental-sat-solver",
          "signature": "Boolean :||: Boolean",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function"
        },
        "index": {
          "description": "and disjunction of boolean formulas",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": ":||:",
          "package": "incremental-sat-solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v::-124--124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eand finally we provide conjunction\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": ":&&:",
          "package": "incremental-sat-solver",
          "signature": "Boolean :&&: Boolean",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function"
        },
        "index": {
          "description": "and finally we provide conjunction",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": ":&&:",
          "package": "incremental-sat-solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v::-38--38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNo\u003c/code\u003e represents \u003cem\u003efalse\u003c/em\u003e,\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "No",
          "package": "incremental-sat-solver",
          "signature": "No",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function"
        },
        "index": {
          "description": "No represents false",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "No",
          "package": "incremental-sat-solver",
          "partial": "No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:No"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNot\u003c/code\u003e constructs negated formulas,\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "Not",
          "package": "incremental-sat-solver",
          "signature": "Not Boolean",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function"
        },
        "index": {
          "description": "Not constructs negated formulas",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Not",
          "package": "incremental-sat-solver",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables are labeled with an \u003ccode\u003eInt\u003c/code\u003e,\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "Var",
          "package": "incremental-sat-solver",
          "signature": "Var Int",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function"
        },
        "index": {
          "description": "Variables are labeled with an Int",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Var",
          "package": "incremental-sat-solver",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eYes\u003c/code\u003e represents \u003cem\u003etrue\u003c/em\u003e,\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "Yes",
          "package": "incremental-sat-solver",
          "signature": "Yes",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function"
        },
        "index": {
          "description": "Yes represents true",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Yes",
          "package": "incremental-sat-solver",
          "partial": "Yes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:Yes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can assert boolean formulas to update a \u003ccode\u003eSatSolver\u003c/code\u003e. The\n assertion may fail if the resulting constraints are unsatisfiable.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "assertTrue",
          "package": "incremental-sat-solver",
          "signature": "Boolean -\u003e SatSolver -\u003e m SatSolver",
          "source": "src/Data-Boolean-SatSolver.html#assertTrue",
          "type": "function"
        },
        "index": {
          "description": "We can assert boolean formulas to update SatSolver The assertion may fail if the resulting constraints are unsatisfiable",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "assertTrue",
          "normalized": "Boolean-\u003eSatSolver-\u003ea SatSolver",
          "package": "incremental-sat-solver",
          "partial": "True",
          "signature": "Boolean-\u003eSatSolver-\u003em SatSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:assertTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function guesses a value for the given variable, if it is\n currently unbound. As this is a non-deterministic operation, the\n resulting solvers are returned in an instance of \u003ccode\u003eMonadPlus\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "branchOnVar",
          "package": "incremental-sat-solver",
          "signature": "Int -\u003e SatSolver -\u003e m SatSolver",
          "source": "src/Data-Boolean-SatSolver.html#branchOnVar",
          "type": "function"
        },
        "index": {
          "description": "This function guesses value for the given variable if it is currently unbound As this is non-deterministic operation the resulting solvers are returned in an instance of MonadPlus",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "branchOnVar",
          "normalized": "Int-\u003eSatSolver-\u003ea SatSolver",
          "package": "incremental-sat-solver",
          "partial": "On Var",
          "signature": "Int-\u003eSatSolver-\u003em SatSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:branchOnVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis predicate tells whether the stored constraints are\n solvable. Use with care! This might be an inefficient operation. It\n tries to find a solution using backtracking and returns \u003ccode\u003eTrue\u003c/code\u003e if\n and only if that fails.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "isSolvable",
          "package": "incremental-sat-solver",
          "signature": "SatSolver -\u003e Bool",
          "source": "src/Data-Boolean-SatSolver.html#isSolvable",
          "type": "function"
        },
        "index": {
          "description": "This predicate tells whether the stored constraints are solvable Use with care This might be an inefficient operation It tries to find solution using backtracking and returns True if and only if that fails",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "isSolvable",
          "normalized": "SatSolver-\u003eBool",
          "package": "incremental-sat-solver",
          "partial": "Solvable",
          "signature": "SatSolver-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:isSolvable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis predicate tells whether all constraints are solved.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "isSolved",
          "package": "incremental-sat-solver",
          "signature": "SatSolver -\u003e Bool",
          "source": "src/Data-Boolean-SatSolver.html#isSolved",
          "type": "function"
        },
        "index": {
          "description": "This predicate tells whether all constraints are solved",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "isSolved",
          "normalized": "SatSolver-\u003eBool",
          "package": "incremental-sat-solver",
          "partial": "Solved",
          "signature": "SatSolver-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:isSolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can lookup the binding of a variable according to the currently\n stored constraints. If the variable is unbound, the result is\n \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "lookupVar",
          "package": "incremental-sat-solver",
          "signature": "Int -\u003e SatSolver -\u003e Maybe Bool",
          "source": "src/Data-Boolean-SatSolver.html#lookupVar",
          "type": "function"
        },
        "index": {
          "description": "We can lookup the binding of variable according to the currently stored constraints If the variable is unbound the result is Nothing",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "lookupVar",
          "normalized": "Int-\u003eSatSolver-\u003eMaybe Bool",
          "package": "incremental-sat-solver",
          "partial": "Var",
          "signature": "Int-\u003eSatSolver-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:lookupVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new SAT solver without stored constraints.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "newSatSolver",
          "package": "incremental-sat-solver",
          "signature": "SatSolver",
          "source": "src/Data-Boolean-SatSolver.html#newSatSolver",
          "type": "function"
        },
        "index": {
          "description": "new SAT solver without stored constraints",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "newSatSolver",
          "package": "incremental-sat-solver",
          "partial": "Sat Solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:newSatSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe select a variable from the shortest clause hoping to produce a\n unit clause.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "selectBranchVar",
          "package": "incremental-sat-solver",
          "signature": "SatSolver -\u003e Int",
          "source": "src/Data-Boolean-SatSolver.html#selectBranchVar",
          "type": "function"
        },
        "index": {
          "description": "We select variable from the shortest clause hoping to produce unit clause",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "selectBranchVar",
          "normalized": "SatSolver-\u003eInt",
          "package": "incremental-sat-solver",
          "partial": "Branch Var",
          "signature": "SatSolver-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:selectBranchVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function guesses values for variables such that the stored\n constraints are satisfied. The result may be non-deterministic and\n is, hence, returned in an instance of \u003ccode\u003eMonadPlus\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "solve",
          "package": "incremental-sat-solver",
          "signature": "SatSolver -\u003e m SatSolver",
          "source": "src/Data-Boolean-SatSolver.html#solve",
          "type": "function"
        },
        "index": {
          "description": "This function guesses values for variables such that the stored constraints are satisfied The result may be non-deterministic and is hence returned in an instance of MonadPlus",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "solve",
          "normalized": "SatSolver-\u003ea SatSolver",
          "package": "incremental-sat-solver",
          "signature": "SatSolver-\u003em SatSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-sat-solver/docs/Data-Boolean-SatSolver.html#v:solve"
      }
    }
  ]
]