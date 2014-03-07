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
        "word": "logic-classes"
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
          "package": "logic-classes",
          "source": "src/Data-Boolean-SatSolver.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell library provides an implementation of the Davis-Putnam-Logemann-Loveland algorithm cf http en.wikipedia.org wiki DPLL algorithm for the boolean satisfiability problem It not only allows to solve boolean formulas in one go but also to add constraints and query bindings of variables incrementally The implementation is not sophisticated at all but uses the basic DPLL algorithm with unit propagation",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "SatSolver",
          "package": "logic-classes",
          "partial": "Sat Solver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean formulas are represented as values of type \u003ccode\u003eBoolean\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "Boolean",
          "package": "logic-classes",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "data"
        },
        "index": {
          "description": "Boolean formulas are represented as values of type Boolean",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Boolean",
          "package": "logic-classes",
          "partial": "Boolean",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunctive normalforms are lists of lists of literals.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "CNF",
          "package": "logic-classes",
          "source": "src/Data-Boolean.html#CNF",
          "type": "type"
        },
        "index": {
          "description": "Conjunctive normalforms are lists of lists of literals",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "CNF",
          "package": "logic-classes",
          "partial": "CNF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#t:CNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Boolean.SatSolver",
          "name": "Clause",
          "package": "logic-classes",
          "source": "src/Data-Boolean.html#Clause",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Clause",
          "package": "logic-classes",
          "partial": "Clause",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#t:Clause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiterals are variables that occur either positively or negatively.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "Literal",
          "package": "logic-classes",
          "source": "src/Data-Boolean.html#Literal",
          "type": "data"
        },
        "index": {
          "description": "Literals are variables that occur either positively or negatively",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Literal",
          "package": "logic-classes",
          "partial": "Literal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eSatSolver\u003c/code\u003e can be used to solve boolean formulas.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "SatSolver",
          "package": "logic-classes",
          "source": "src/Data-Boolean-SatSolver.html#SatSolver",
          "type": "data"
        },
        "index": {
          "description": "SatSolver can be used to solve boolean formulas",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "SatSolver",
          "package": "logic-classes",
          "partial": "Sat Solver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#t:SatSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eand disjunction of boolean formulas.\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": ":||:",
          "package": "logic-classes",
          "signature": "Boolean :||: Boolean",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v::-124--124-:\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v::-124--124-:\"]"
        },
        "index": {
          "description": "and disjunction of boolean formulas",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": ":||:",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v::-124--124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eand finally we provide conjunction\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": ":&&:",
          "package": "logic-classes",
          "signature": "Boolean :&&: Boolean",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v::-38--38-:\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v::-38--38-:\"]"
        },
        "index": {
          "description": "and finally we provide conjunction",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": ":&&:",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v::-38--38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "Neg",
          "package": "logic-classes",
          "signature": "Neg Int",
          "source": "src/Data-Boolean.html#Literal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Neg\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:Neg\"]"
        },
        "index": {
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Neg",
          "package": "logic-classes",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNo\u003c/code\u003e represents \u003cem\u003efalse\u003c/em\u003e,\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "No",
          "package": "logic-classes",
          "signature": "No",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:No\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:No\"]"
        },
        "index": {
          "description": "No represents false",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "No",
          "package": "logic-classes",
          "partial": "No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:No"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNot\u003c/code\u003e constructs negated formulas,\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "Not",
          "package": "logic-classes",
          "signature": "Not Boolean",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Not\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:Not\"]"
        },
        "index": {
          "description": "Not constructs negated formulas",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Not",
          "package": "logic-classes",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "Pos",
          "package": "logic-classes",
          "signature": "Pos Int",
          "source": "src/Data-Boolean.html#Literal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Pos\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:Pos\"]"
        },
        "index": {
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Pos",
          "package": "logic-classes",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables are labeled with an \u003ccode\u003eInt\u003c/code\u003e,\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "Var",
          "package": "logic-classes",
          "signature": "Var Int",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Var\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:Var\"]"
        },
        "index": {
          "description": "Variables are labeled with an Int",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Var",
          "package": "logic-classes",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eYes\u003c/code\u003e represents \u003cem\u003etrue\u003c/em\u003e,\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "Yes",
          "package": "logic-classes",
          "signature": "Yes",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Yes\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:Yes\"]"
        },
        "index": {
          "description": "Yes represents true",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "Yes",
          "package": "logic-classes",
          "partial": "Yes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:Yes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can assert boolean formulas to update a \u003ccode\u003eSatSolver\u003c/code\u003e. The\n assertion may fail if the resulting constraints are unsatisfiable.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "assertTrue",
          "package": "logic-classes",
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
          "package": "logic-classes",
          "partial": "True",
          "signature": "Boolean-\u003eSatSolver-\u003em SatSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:assertTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Boolean.SatSolver",
          "name": "assertTrue'",
          "package": "logic-classes",
          "signature": "CNF -\u003e SatSolver -\u003e m SatSolver",
          "source": "src/Data-Boolean-SatSolver.html#assertTrue%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "assertTrue'",
          "normalized": "CNF-\u003eSatSolver-\u003ea SatSolver",
          "package": "logic-classes",
          "partial": "True'",
          "signature": "CNF-\u003eSatSolver-\u003em SatSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:assertTrue-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe convert boolean formulas to conjunctive normal form by pushing\n negations down to variables and repeatedly applying the\n distributive laws.\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "booleanToCNF",
          "package": "logic-classes",
          "signature": "Boolean -\u003e CNF",
          "source": "src/Data-Boolean.html#booleanToCNF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:booleanToCNF\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:booleanToCNF\"]"
        },
        "index": {
          "description": "We convert boolean formulas to conjunctive normal form by pushing negations down to variables and repeatedly applying the distributive laws",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "booleanToCNF",
          "normalized": "Boolean-\u003eCNF",
          "package": "logic-classes",
          "partial": "To CNF",
          "signature": "Boolean-\u003eCNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:booleanToCNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function guesses a value for the given variable, if it is\n currently unbound. As this is a non-deterministic operation, the\n resulting solvers are returned in an instance of \u003ccode\u003eMonadPlus\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "branchOnVar",
          "package": "logic-classes",
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
          "package": "logic-classes",
          "partial": "On Var",
          "signature": "Int-\u003eSatSolver-\u003em SatSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:branchOnVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function negates a literal.\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "invLiteral",
          "package": "logic-classes",
          "signature": "Literal -\u003e Literal",
          "source": "src/Data-Boolean.html#invLiteral",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:invLiteral\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:invLiteral\"]"
        },
        "index": {
          "description": "This function negates literal",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "invLiteral",
          "normalized": "Literal-\u003eLiteral",
          "package": "logic-classes",
          "partial": "Literal",
          "signature": "Literal-\u003eLiteral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:invLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis predicate checks whether the given literal is positive.\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "isPositiveLiteral",
          "package": "logic-classes",
          "signature": "Literal -\u003e Bool",
          "source": "src/Data-Boolean.html#isPositiveLiteral",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:isPositiveLiteral\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:isPositiveLiteral\"]"
        },
        "index": {
          "description": "This predicate checks whether the given literal is positive",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "isPositiveLiteral",
          "normalized": "Literal-\u003eBool",
          "package": "logic-classes",
          "partial": "Positive Literal",
          "signature": "Literal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:isPositiveLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis predicate tells whether the stored constraints are\n solvable. Use with care! This might be an inefficient operation. It\n tries to find a solution using backtracking and returns \u003ccode\u003eTrue\u003c/code\u003e if\n and only if that fails.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "isSolvable",
          "package": "logic-classes",
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
          "package": "logic-classes",
          "partial": "Solvable",
          "signature": "SatSolver-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:isSolvable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis predicate tells whether all constraints are solved.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "isSolved",
          "package": "logic-classes",
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
          "package": "logic-classes",
          "partial": "Solved",
          "signature": "SatSolver-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:isSolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function returns the name of the variable in a literal.\n\u003c/p\u003e",
          "module": "[\"Data.Boolean.SatSolver\",\"Data.Boolean\"]",
          "name": "literalVar",
          "package": "logic-classes",
          "signature": "Literal -\u003e Int",
          "source": "src/Data-Boolean.html#literalVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:literalVar\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#v:literalVar\"]"
        },
        "index": {
          "description": "This function returns the name of the variable in literal",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "literalVar",
          "normalized": "Literal-\u003eInt",
          "package": "logic-classes",
          "partial": "Var",
          "signature": "Literal-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:literalVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can lookup the binding of a variable according to the currently\n stored constraints. If the variable is unbound, the result is\n \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "lookupVar",
          "package": "logic-classes",
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
          "package": "logic-classes",
          "partial": "Var",
          "signature": "Int-\u003eSatSolver-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:lookupVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new SAT solver without stored constraints.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "newSatSolver",
          "package": "logic-classes",
          "signature": "SatSolver",
          "source": "src/Data-Boolean-SatSolver.html#newSatSolver",
          "type": "function"
        },
        "index": {
          "description": "new SAT solver without stored constraints",
          "hierarchy": "Data Boolean SatSolver",
          "module": "Data.Boolean.SatSolver",
          "name": "newSatSolver",
          "package": "logic-classes",
          "partial": "Sat Solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:newSatSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe select a variable from the shortest clause hoping to produce a\n unit clause.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "selectBranchVar",
          "package": "logic-classes",
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
          "package": "logic-classes",
          "partial": "Branch Var",
          "signature": "SatSolver-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:selectBranchVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function guesses values for variables such that the stored\n constraints are satisfied. The result may be non-deterministic and\n is, hence, returned in an instance of \u003ccode\u003eMonadPlus\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean.SatSolver",
          "name": "solve",
          "package": "logic-classes",
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
          "package": "logic-classes",
          "signature": "SatSolver-\u003em SatSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean-SatSolver.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides a representation of boolean formulas that is\n used by the solver in \u003ca\u003eData.Boolean.SatSolver\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWe also define a function to simplify formulas, a type for\n conjunctive normalforms, and a function that creates them from\n boolean formulas.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Boolean",
          "name": "Boolean",
          "package": "logic-classes",
          "source": "src/Data-Boolean.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides representation of boolean formulas that is used by the solver in Data.Boolean.SatSolver We also define function to simplify formulas type for conjunctive normalforms and function that creates them from boolean formulas",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "Boolean",
          "package": "logic-classes",
          "partial": "Boolean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean formulas are represented as values of type \u003ccode\u003eBoolean\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Boolean",
          "name": "Boolean",
          "package": "logic-classes",
          "source": "src/Data-Boolean.html#Boolean",
          "type": "data"
        },
        "index": {
          "description": "Boolean formulas are represented as values of type Boolean",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "Boolean",
          "package": "logic-classes",
          "partial": "Boolean",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunctive normalforms are lists of lists of literals.\n\u003c/p\u003e",
          "module": "Data.Boolean",
          "name": "CNF",
          "package": "logic-classes",
          "source": "src/Data-Boolean.html#CNF",
          "type": "type"
        },
        "index": {
          "description": "Conjunctive normalforms are lists of lists of literals",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "CNF",
          "package": "logic-classes",
          "partial": "CNF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#t:CNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Boolean",
          "name": "Clause",
          "package": "logic-classes",
          "source": "src/Data-Boolean.html#Clause",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "Clause",
          "package": "logic-classes",
          "partial": "Clause",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#t:Clause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiterals are variables that occur either positively or negatively.\n\u003c/p\u003e",
          "module": "Data.Boolean",
          "name": "Literal",
          "package": "logic-classes",
          "source": "src/Data-Boolean.html#Literal",
          "type": "data"
        },
        "index": {
          "description": "Literals are variables that occur either positively or negatively",
          "hierarchy": "Data Boolean",
          "module": "Data.Boolean",
          "name": "Literal",
          "package": "logic-classes",
          "partial": "Literal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Boolean.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Apply class represents a type of atom the only supports predicate application.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Logic.Classes.Apply",
          "name": "Apply",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Apply.html",
          "type": "module"
        },
        "index": {
          "description": "The Apply class represents type of atom the only supports predicate application",
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "Apply",
          "package": "logic-classes",
          "partial": "Apply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "Apply",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Apply.html#Apply",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "Apply",
          "package": "logic-classes",
          "partial": "Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#t:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "Predicate",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Apply.html#Predicate",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "Predicate",
          "package": "logic-classes",
          "partial": "Predicate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply' with an arity check - clients should always call this.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply",
          "package": "logic-classes",
          "signature": "p -\u003e [term] -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply",
          "type": "function"
        },
        "index": {
          "description": "apply with an arity check clients should always call this",
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply",
          "normalized": "a-\u003e[b]-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003e[term]-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "apply'",
          "package": "logic-classes",
          "signature": "p -\u003e [term] -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply'",
          "normalized": "a-\u003e[b]-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003e[term]-\u003eatom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "apply0",
          "package": "logic-classes",
          "signature": "p -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply0",
          "normalized": "a-\u003eb",
          "package": "logic-classes",
          "signature": "p-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "apply1",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply1",
          "normalized": "a-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003eterm-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "apply2",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply2",
          "normalized": "a-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003eterm-\u003eterm-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "apply3",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply3",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "apply4",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply4",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "apply5",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply5",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "apply6",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply6",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "apply7",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#apply7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "apply7",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:apply7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "foldApply",
          "package": "logic-classes",
          "signature": "(p -\u003e [term] -\u003e r) -\u003e (Bool -\u003e r) -\u003e atom -\u003e r",
          "source": "src/Data-Logic-Classes-Apply.html#foldApply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "foldApply",
          "normalized": "(a-\u003e[b]-\u003ec)-\u003e(Bool-\u003ec)-\u003ed-\u003ec",
          "package": "logic-classes",
          "partial": "Apply",
          "signature": "(p-\u003e[term]-\u003er)-\u003e(Bool-\u003er)-\u003eatom-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:foldApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "prettyApply",
          "package": "logic-classes",
          "signature": "(v -\u003e Doc) -\u003e (p -\u003e Doc) -\u003e (f -\u003e Doc) -\u003e Int -\u003e atom -\u003e Doc",
          "source": "src/Data-Logic-Classes-Apply.html#prettyApply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "prettyApply",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003e(c-\u003eDoc)-\u003eInt-\u003ed-\u003eDoc",
          "package": "logic-classes",
          "partial": "Apply",
          "signature": "(v-\u003eDoc)-\u003e(p-\u003eDoc)-\u003e(f-\u003eDoc)-\u003eInt-\u003eatom-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:prettyApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "showApply",
          "package": "logic-classes",
          "signature": "atom -\u003e String",
          "source": "src/Data-Logic-Classes-Apply.html#showApply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "showApply",
          "normalized": "a-\u003eString",
          "package": "logic-classes",
          "partial": "Apply",
          "signature": "atom-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:showApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "substApply",
          "package": "logic-classes",
          "signature": "Map v term -\u003e atom -\u003e atom",
          "source": "src/Data-Logic-Classes-Apply.html#substApply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "substApply",
          "normalized": "Map a b-\u003ec-\u003ec",
          "package": "logic-classes",
          "partial": "Apply",
          "signature": "Map v term-\u003eatom-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:substApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the variables that occur in an instance of Apply.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Apply",
          "name": "varApply",
          "package": "logic-classes",
          "signature": "atom -\u003e Set v",
          "source": "src/Data-Logic-Classes-Apply.html#varApply",
          "type": "function"
        },
        "index": {
          "description": "Return the variables that occur in an instance of Apply",
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "varApply",
          "normalized": "a-\u003eSet b",
          "package": "logic-classes",
          "partial": "Apply",
          "signature": "atom-\u003eSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:varApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Apply",
          "name": "zipApplys",
          "package": "logic-classes",
          "signature": "(p -\u003e [term] -\u003e p -\u003e [term] -\u003e Maybe r) -\u003e (Bool -\u003e Bool -\u003e Maybe r) -\u003e atom -\u003e atom -\u003e Maybe r",
          "source": "src/Data-Logic-Classes-Apply.html#zipApplys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Apply",
          "module": "Data.Logic.Classes.Apply",
          "name": "zipApplys",
          "normalized": "(a-\u003e[b]-\u003ea-\u003e[b]-\u003eMaybe c)-\u003e(Bool-\u003eBool-\u003eMaybe c)-\u003ed-\u003ed-\u003eMaybe c",
          "package": "logic-classes",
          "partial": "Applys",
          "signature": "(p-\u003e[term]-\u003ep-\u003e[term]-\u003eMaybe r)-\u003e(Bool-\u003eBool-\u003eMaybe r)-\u003eatom-\u003eatom-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Apply.html#v:zipApplys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Arity",
          "name": "Arity",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Arity.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes Arity",
          "module": "Data.Logic.Classes.Arity",
          "name": "Arity",
          "package": "logic-classes",
          "partial": "Arity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Arity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class that characterizes how many arguments a predicate or\n function takes.  Depending on the context, a result of Nothing may\n mean that the arity is undetermined or unknown.  However, even if\n this returns Nothing, the same number of arguments must be passed\n to all uses of a given predicate or function.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Arity",
          "name": "Arity",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Arity.html#Arity",
          "type": "class"
        },
        "index": {
          "description": "class that characterizes how many arguments predicate or function takes Depending on the context result of Nothing may mean that the arity is undetermined or unknown However even if this returns Nothing the same number of arguments must be passed to all uses of given predicate or function",
          "hierarchy": "Data Logic Classes Arity",
          "module": "Data.Logic.Classes.Arity",
          "name": "Arity",
          "package": "logic-classes",
          "partial": "Arity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Arity.html#t:Arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Arity",
          "name": "arity",
          "package": "logic-classes",
          "signature": "p -\u003e Maybe Int",
          "source": "src/Data-Logic-Classes-Arity.html#arity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Arity",
          "module": "Data.Logic.Classes.Arity",
          "name": "arity",
          "normalized": "a-\u003eMaybe Int",
          "package": "logic-classes",
          "signature": "p-\u003eMaybe Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Arity.html#v:arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubstitution and finding variables are two basic operations on\n formulas that contain terms and variables.  If a formula type\n supports quantifiers we can also find free variables, otherwise all\n variables are considered free.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Logic.Classes.Atom",
          "name": "Atom",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Atom.html",
          "type": "module"
        },
        "index": {
          "description": "Substitution and finding variables are two basic operations on formulas that contain terms and variables If formula type supports quantifiers we can also find free variables otherwise all variables are considered free",
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "Atom",
          "package": "logic-classes",
          "partial": "Atom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Atom",
          "name": "Atom",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Atom.html#Atom",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "Atom",
          "package": "logic-classes",
          "partial": "Atom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Atom",
          "name": "allVariables",
          "package": "logic-classes",
          "signature": "atom -\u003e Set v",
          "source": "src/Data-Logic-Classes-Atom.html#allVariables",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "allVariables",
          "normalized": "a-\u003eSet b",
          "package": "logic-classes",
          "partial": "Variables",
          "signature": "atom-\u003eSet v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#v:allVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Atom",
          "name": "foldTerms",
          "package": "logic-classes",
          "signature": "(term -\u003e r -\u003e r) -\u003e r -\u003e atom -\u003e r",
          "source": "src/Data-Logic-Classes-Atom.html#foldTerms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "foldTerms",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "logic-classes",
          "partial": "Terms",
          "signature": "(term-\u003er-\u003er)-\u003er-\u003eatom-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#v:foldTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Atom",
          "name": "freeVariables",
          "package": "logic-classes",
          "signature": "atom -\u003e Set v",
          "source": "src/Data-Logic-Classes-Atom.html#freeVariables",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "freeVariables",
          "normalized": "a-\u003eSet b",
          "package": "logic-classes",
          "partial": "Variables",
          "signature": "atom-\u003eSet v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#v:freeVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Atom",
          "name": "getSubst",
          "package": "logic-classes",
          "signature": "Map v term -\u003e atom -\u003e Map v term",
          "source": "src/Data-Logic-Classes-Atom.html#getSubst",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "getSubst",
          "normalized": "Map a b-\u003ec-\u003eMap a b",
          "package": "logic-classes",
          "partial": "Subst",
          "signature": "Map v term-\u003eatom-\u003eMap v term",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#v:getSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Atom",
          "name": "isRename",
          "package": "logic-classes",
          "signature": "atom -\u003e atom -\u003e Bool",
          "source": "src/Data-Logic-Classes-Atom.html#isRename",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "isRename",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "logic-classes",
          "partial": "Rename",
          "signature": "atom-\u003eatom-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#v:isRename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVery similar to unify, not quite sure if there is a difference\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Atom",
          "name": "match",
          "package": "logic-classes",
          "signature": "Map v term -\u003e atom -\u003e atom -\u003e Failing (Map v term)",
          "source": "src/Data-Logic-Classes-Atom.html#match",
          "type": "method"
        },
        "index": {
          "description": "Very similar to unify not quite sure if there is difference",
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "match",
          "normalized": "Map a b-\u003ec-\u003ec-\u003eFailing(Map a b)",
          "package": "logic-classes",
          "signature": "Map v term-\u003eatom-\u003eatom-\u003eFailing(Map v term)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Atom",
          "name": "substitute",
          "package": "logic-classes",
          "signature": "Map v term -\u003e atom -\u003e atom",
          "source": "src/Data-Logic-Classes-Atom.html#substitute",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "substitute",
          "normalized": "Map a b-\u003ec-\u003ec",
          "package": "logic-classes",
          "signature": "Map v term-\u003eatom-\u003eatom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#v:substitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Atom",
          "name": "unify",
          "package": "logic-classes",
          "signature": "Map v term -\u003e atom -\u003e atom -\u003e Failing (Map v term)",
          "source": "src/Data-Logic-Classes-Atom.html#unify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Atom",
          "module": "Data.Logic.Classes.Atom",
          "name": "unify",
          "normalized": "Map a b-\u003ec-\u003ec-\u003eFailing(Map a b)",
          "package": "logic-classes",
          "signature": "Map v term-\u003eatom-\u003eatom-\u003eFailing(Map v term)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Atom.html#v:unify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "ClauseNormalForm",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-ClauseNormalForm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes ClauseNormalForm",
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "ClauseNormalForm",
          "package": "logic-classes",
          "partial": "Clause Normal Form",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-ClauseNormalForm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class to represent formulas in CNF, which is the conjunction of\n a set of disjuncted literals each which may or may not be negated.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "ClauseNormalFormula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-ClauseNormalForm.html#ClauseNormalFormula",
          "type": "class"
        },
        "index": {
          "description": "class to represent formulas in CNF which is the conjunction of set of disjuncted literals each which may or may not be negated",
          "hierarchy": "Data Logic Classes ClauseNormalForm",
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "ClauseNormalFormula",
          "package": "logic-classes",
          "partial": "Clause Normal Formula",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-ClauseNormalForm.html#t:ClauseNormalFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "clauses",
          "package": "logic-classes",
          "signature": "cnf -\u003e Set (Set lit)",
          "source": "src/Data-Logic-Classes-ClauseNormalForm.html#clauses",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes ClauseNormalForm",
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "clauses",
          "normalized": "a-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "cnf-\u003eSet(Set lit)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-ClauseNormalForm.html#v:clauses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "makeCNF",
          "package": "logic-classes",
          "signature": "Set (Set lit) -\u003e cnf",
          "source": "src/Data-Logic-Classes-ClauseNormalForm.html#makeCNF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes ClauseNormalForm",
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "makeCNF",
          "normalized": "Set(Set a)-\u003eb",
          "package": "logic-classes",
          "partial": "CNF",
          "signature": "Set(Set lit)-\u003ecnf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-ClauseNormalForm.html#v:makeCNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "satisfiable",
          "package": "logic-classes",
          "signature": "cnf -\u003e m Bool",
          "source": "src/Data-Logic-Classes-ClauseNormalForm.html#satisfiable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes ClauseNormalForm",
          "module": "Data.Logic.Classes.ClauseNormalForm",
          "name": "satisfiable",
          "normalized": "a-\u003eb Bool",
          "package": "logic-classes",
          "signature": "cnf-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-ClauseNormalForm.html#v:satisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass Logic defines the basic boolean logic operations,\n AND, OR, NOT, and so on.  Definitions which pertain to both\n propositional and first order logic are here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "Combine",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Combine.html",
          "type": "module"
        },
        "index": {
          "description": "Class Logic defines the basic boolean logic operations AND OR NOT and so on Definitions which pertain to both propositional and first order logic are here",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "Combine",
          "package": "logic-classes",
          "partial": "Combine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the boolean logic binary operations, used in the\n Combination type above.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "BinOp",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Combine.html#BinOp",
          "type": "data"
        },
        "index": {
          "description": "Represents the boolean logic binary operations used in the Combination type above",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "BinOp",
          "package": "logic-classes",
          "partial": "Bin Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#t:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for logical formulas.  Minimal implementation:\n \u003ccode\u003e\n  (.|.)\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "Combinable",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Combine.html#Combinable",
          "type": "class"
        },
        "index": {
          "description": "type class for logical formulas Minimal implementation",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "Combinable",
          "package": "logic-classes",
          "partial": "Combinable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#t:Combinable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCombination\u003c/a\u003e\u003c/code\u003e is a helper type used in the signatures of the\n \u003ccode\u003efoldPropositional\u003c/code\u003e and \u003ccode\u003efoldFirstOrder\u003c/code\u003e methods so can represent\n all the ways that formulas can be combined using boolean logic -\n negation, logical And, and so forth.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "Combination",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Combine.html#Combination",
          "type": "data"
        },
        "index": {
          "description": "Combination is helper type used in the signatures of the foldPropositional and foldFirstOrder methods so can represent all the ways that formulas can be combined using boolean logic negation logical And and so forth",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "Combination",
          "package": "logic-classes",
          "partial": "Combination",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#t:Combination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Combine",
          "name": "(\u003c=\u003e)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#%3C%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(\u003c=\u003e) \u003c=\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:-60--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Combine",
          "name": "(==\u003e)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#%3D%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(==\u003e) ==\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:-61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#8658; can't be a function when -XUnicodeSyntax is enabled.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "(⇒)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#%21D2",
          "type": "function"
        },
        "index": {
          "description": "can be function when XUnicodeSyntax is enabled",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(⇒) ⇒",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:-8658-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Combine",
          "name": "(⇔)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#%21D4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(⇔) ⇔",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:-8660-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Combine",
          "name": "(∧)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#%2227",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(∧) ∧",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:-8743-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Combine",
          "name": "(∨)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#%2228",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(∨) ∨",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:-8744-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunction/OR\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.|.)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#.%7C.",
          "type": "method"
        },
        "index": {
          "description": "Disjunction OR",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.|.) .|.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNor\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.~|.)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#.~%7C.",
          "type": "method"
        },
        "index": {
          "description": "Nor",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.~|.) .~|.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:.-126--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNand\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.~&.)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#.~%26.",
          "type": "method"
        },
        "index": {
          "description": "Nand",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.~&.) .~&.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:.-126--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerived formula combinators.  These could (and should!) be\n overridden with expressions native to the instance.\n\u003c/p\u003e\u003cp\u003e| Conjunction/AND\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.&.)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#.%26.",
          "type": "method"
        },
        "index": {
          "description": "Derived formula combinators These could and should be overridden with expressions native to the instance Conjunction AND",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.&.) .&.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExclusive or\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.\u003c~\u003e.)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#.%3C~%3E.",
          "type": "method"
        },
        "index": {
          "description": "Exclusive or",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.\u003c~\u003e.) .\u003c~\u003e.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:.-60--126--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormula combinators: Equivalence\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.\u003c=\u003e.)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#.%3C%3D%3E.",
          "type": "method"
        },
        "index": {
          "description": "Formula combinators Equivalence",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.\u003c=\u003e.) .\u003c=\u003e.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:.-60--61--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse implication:\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.\u003c=.)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#.%3C%3D.",
          "type": "method"
        },
        "index": {
          "description": "Reverse implication",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.\u003c=.) .\u003c=.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:.-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplication\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.=\u003e.)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#.%3D%3E.",
          "type": "method"
        },
        "index": {
          "description": "Implication",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "(.=\u003e.) .=\u003e.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:.-61--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOR\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": ":|:",
          "package": "logic-classes",
          "signature": ":|:",
          "source": "src/Data-Logic-Classes-Combine.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "OR",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": ":|:",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v::-124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Combine",
          "name": ":~:",
          "package": "logic-classes",
          "signature": ":~: formula",
          "source": "src/Data-Logic-Classes-Combine.html#Combination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": ":~:",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v::-126-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAND\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": ":&:",
          "package": "logic-classes",
          "signature": ":&:",
          "source": "src/Data-Logic-Classes-Combine.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "AND",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": ":&:",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalence\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": ":\u003c=\u003e:",
          "package": "logic-classes",
          "signature": ":",
          "source": "src/Data-Logic-Classes-Combine.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "Equivalence",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": ":\u003c=\u003e:",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v::-60--61--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplication\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Combine",
          "name": ":=\u003e:",
          "package": "logic-classes",
          "signature": ":",
          "source": "src/Data-Logic-Classes-Combine.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "Implication",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": ":=\u003e:",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v::-61--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Combine",
          "name": "BinOp",
          "package": "logic-classes",
          "signature": "BinOp formula BinOp formula",
          "source": "src/Data-Logic-Classes-Combine.html#Combination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "BinOp",
          "package": "logic-classes",
          "partial": "Bin Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Combine",
          "name": "binop",
          "package": "logic-classes",
          "signature": "formula -\u003e BinOp -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#binop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "binop",
          "normalized": "a-\u003eBinOp-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eBinOp-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:binop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function for building folds:\n \u003ccode\u003e\n   foldPropositional combine atomic\n \u003c/code\u003e\n is a no-op.\n\u003c/p\u003e",
          "module": "[\"Data.Logic.Classes.Combine\",\"Data.Logic.Classes.Propositional\"]",
          "name": "combine",
          "package": "logic-classes",
          "signature": "Combination formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Combine.html#combine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:combine\",\"http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:combine\"]"
        },
        "index": {
          "description": "helper function for building folds foldPropositional combine atomic is no-op",
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "combine",
          "normalized": "Combination a-\u003ea",
          "package": "logic-classes",
          "signature": "Combination formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Combine",
          "name": "prettyBinOp",
          "package": "logic-classes",
          "signature": "BinOp -\u003e Doc",
          "source": "src/Data-Logic-Classes-Combine.html#prettyBinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Combine",
          "module": "Data.Logic.Classes.Combine",
          "name": "prettyBinOp",
          "normalized": "BinOp-\u003eDoc",
          "package": "logic-classes",
          "partial": "Bin Op",
          "signature": "BinOp-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Combine.html#v:prettyBinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Constants",
          "name": "Constants",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Constants.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "Constants",
          "package": "logic-classes",
          "partial": "Constants",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome types in the Logic class heirarchy need to have True and\n False elements.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Constants",
          "name": "Constants",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Constants.html#Constants",
          "type": "class"
        },
        "index": {
          "description": "Some types in the Logic class heirarchy need to have True and False elements",
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "Constants",
          "package": "logic-classes",
          "partial": "Constants",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#t:Constants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Constants",
          "name": "(⊨)",
          "package": "logic-classes",
          "signature": "formula",
          "source": "src/Data-Logic-Classes-Constants.html#%22A8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "(⊨) ⊨",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#v:-8872-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Constants",
          "name": "(⊭)",
          "package": "logic-classes",
          "signature": "formula",
          "source": "src/Data-Logic-Classes-Constants.html#%22AD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "(⊭) ⊭",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#v:-8877-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Constants",
          "name": "asBool",
          "package": "logic-classes",
          "signature": "p -\u003e Maybe Bool",
          "source": "src/Data-Logic-Classes-Constants.html#asBool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "asBool",
          "normalized": "a-\u003eMaybe Bool",
          "package": "logic-classes",
          "partial": "Bool",
          "signature": "p-\u003eMaybe Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#v:asBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Constants",
          "name": "false",
          "package": "logic-classes",
          "signature": "p",
          "source": "src/Data-Logic-Classes-Constants.html#false",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "false",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Constants",
          "name": "fromBool",
          "package": "logic-classes",
          "signature": "Bool -\u003e p",
          "source": "src/Data-Logic-Classes-Constants.html#fromBool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "fromBool",
          "normalized": "Bool-\u003ea",
          "package": "logic-classes",
          "partial": "Bool",
          "signature": "Bool-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Constants",
          "name": "ifElse",
          "package": "logic-classes",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/Data-Logic-Classes-Constants.html#ifElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "ifElse",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "logic-classes",
          "partial": "Else",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#v:ifElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Constants",
          "name": "prettyBool",
          "package": "logic-classes",
          "signature": "Bool -\u003e Doc",
          "source": "src/Data-Logic-Classes-Constants.html#prettyBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "prettyBool",
          "normalized": "Bool-\u003eDoc",
          "package": "logic-classes",
          "partial": "Bool",
          "signature": "Bool-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#v:prettyBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Constants",
          "name": "true",
          "package": "logic-classes",
          "signature": "p",
          "source": "src/Data-Logic-Classes-Constants.html#true",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Constants",
          "module": "Data.Logic.Classes.Constants",
          "name": "true",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Constants.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for equality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Logic.Classes.Equals",
          "name": "Equals",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Equals.html",
          "type": "module"
        },
        "index": {
          "description": "Support for equality",
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "Equals",
          "package": "logic-classes",
          "partial": "Equals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIts not safe to make Atom a superclass of AtomEq, because the Atom methods will fail on AtomEq instances.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Equals",
          "name": "AtomEq",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Equals.html#AtomEq",
          "type": "class"
        },
        "index": {
          "description": "Its not safe to make Atom superclass of AtomEq because the Atom methods will fail on AtomEq instances",
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "AtomEq",
          "package": "logic-classes",
          "partial": "Atom Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#t:AtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA way to represent any predicate's name.  Frequently the equality\n predicate has no standalone representation in the p type, it is\n just a constructor in the atom type, or even the formula type.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Equals",
          "name": "PredicateName",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Equals.html#PredicateName",
          "type": "data"
        },
        "index": {
          "description": "way to represent any predicate name Frequently the equality predicate has no standalone representation in the type it is just constructor in the atom type or even the formula type",
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "PredicateName",
          "package": "logic-classes",
          "partial": "Predicate Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#t:PredicateName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "(≡)",
          "package": "logic-classes",
          "signature": "term -\u003e term -\u003e fof",
          "source": "src/Data-Logic-Classes-Equals.html#%2261",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "(≡) ≡",
          "normalized": "a-\u003ea-\u003eb",
          "package": "logic-classes",
          "signature": "term-\u003eterm-\u003efof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:-8801-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "(≢)",
          "package": "logic-classes",
          "signature": "term -\u003e term -\u003e fof",
          "source": "src/Data-Logic-Classes-Equals.html#%2262",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "(≢) ≢",
          "normalized": "a-\u003ea-\u003eb",
          "package": "logic-classes",
          "signature": "term-\u003eterm-\u003efof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:-8802-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "(.!=.)",
          "package": "logic-classes",
          "signature": "term -\u003e term -\u003e fof",
          "source": "src/Data-Logic-Classes-Equals.html#.%21%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "(.!=.) .!=.",
          "normalized": "a-\u003ea-\u003eb",
          "package": "logic-classes",
          "signature": "term-\u003eterm-\u003efof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:.-33--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "(.=.)",
          "package": "logic-classes",
          "signature": "term -\u003e term -\u003e fof",
          "source": "src/Data-Logic-Classes-Equals.html#.%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "(.=.) .=.",
          "normalized": "a-\u003ea-\u003eb",
          "package": "logic-classes",
          "signature": "term-\u003eterm-\u003efof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:.-61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "Equals",
          "package": "logic-classes",
          "signature": "Equals",
          "source": "src/Data-Logic-Classes-Equals.html#PredicateName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "Equals",
          "package": "logic-classes",
          "partial": "Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:Equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "Named",
          "package": "logic-classes",
          "signature": "Named p Int",
          "source": "src/Data-Logic-Classes-Equals.html#PredicateName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "Named",
          "package": "logic-classes",
          "partial": "Named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:Named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "apply0",
          "package": "logic-classes",
          "signature": "p -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#apply0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "apply0",
          "normalized": "a-\u003eb",
          "package": "logic-classes",
          "signature": "p-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:apply0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "apply1",
          "package": "logic-classes",
          "signature": "p -\u003e a -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#apply1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "apply1",
          "normalized": "a-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003ea-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:apply1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "apply2",
          "package": "logic-classes",
          "signature": "p -\u003e a -\u003e a -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#apply2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "apply2",
          "normalized": "a-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003ea-\u003ea-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:apply2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "apply3",
          "package": "logic-classes",
          "signature": "p -\u003e a -\u003e a -\u003e a -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#apply3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "apply3",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003ea-\u003ea-\u003ea-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:apply3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "apply4",
          "package": "logic-classes",
          "signature": "p -\u003e a -\u003e a -\u003e a -\u003e a -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#apply4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "apply4",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003ea-\u003ea-\u003ea-\u003ea-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:apply4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "apply5",
          "package": "logic-classes",
          "signature": "p -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#apply5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "apply5",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:apply5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "apply6",
          "package": "logic-classes",
          "signature": "p -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#apply6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "apply6",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:apply6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "apply7",
          "package": "logic-classes",
          "signature": "p -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#apply7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "apply7",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "signature": "p-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:apply7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplyEq' with an arity check - clients should always call this.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Equals",
          "name": "applyEq",
          "package": "logic-classes",
          "signature": "p -\u003e [term] -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#applyEq",
          "type": "function"
        },
        "index": {
          "description": "applyEq with an arity check clients should always call this",
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "applyEq",
          "normalized": "a-\u003e[b]-\u003ec",
          "package": "logic-classes",
          "partial": "Eq",
          "signature": "p-\u003e[term]-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:applyEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "applyEq'",
          "package": "logic-classes",
          "signature": "p -\u003e [term] -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#applyEq%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "applyEq'",
          "normalized": "a-\u003e[b]-\u003ec",
          "package": "logic-classes",
          "partial": "Eq'",
          "signature": "p-\u003e[term]-\u003eatom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:applyEq-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "equals",
          "package": "logic-classes",
          "signature": "term -\u003e term -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#equals",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "equals",
          "normalized": "a-\u003ea-\u003eb",
          "package": "logic-classes",
          "signature": "term-\u003eterm-\u003eatom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "foldAtomEq",
          "package": "logic-classes",
          "signature": "(p -\u003e [term] -\u003e r) -\u003e (Bool -\u003e r) -\u003e (term -\u003e term -\u003e r) -\u003e atom -\u003e r",
          "source": "src/Data-Logic-Classes-Equals.html#foldAtomEq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "foldAtomEq",
          "normalized": "(a-\u003e[b]-\u003ec)-\u003e(Bool-\u003ec)-\u003e(b-\u003eb-\u003ec)-\u003ed-\u003ec",
          "package": "logic-classes",
          "partial": "Atom Eq",
          "signature": "(p-\u003e[term]-\u003er)-\u003e(Bool-\u003er)-\u003e(term-\u003eterm-\u003er)-\u003eatom-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:foldAtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "fromAtomEq",
          "package": "logic-classes",
          "signature": "(v1 -\u003e v2) -\u003e (p1 -\u003e p2) -\u003e (f1 -\u003e f2) -\u003e atom1 -\u003e atom2",
          "source": "src/Data-Logic-Classes-Equals.html#fromAtomEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "fromAtomEq",
          "normalized": "(a-\u003ea)-\u003e(b-\u003eb)-\u003e(c-\u003ec)-\u003ed-\u003ed",
          "package": "logic-classes",
          "partial": "Atom Eq",
          "signature": "(v-\u003ev)-\u003e(p-\u003ep)-\u003e(f-\u003ef)-\u003eatom-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:fromAtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "funcsAtomEq",
          "package": "logic-classes",
          "signature": "atom -\u003e Set (f, Int)",
          "source": "src/Data-Logic-Classes-Equals.html#funcsAtomEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "funcsAtomEq",
          "normalized": "a-\u003eSet(b,Int)",
          "package": "logic-classes",
          "partial": "Atom Eq",
          "signature": "atom-\u003eSet(f,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:funcsAtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp",
          "package": "logic-classes",
          "signature": "p -\u003e [term] -\u003e formula",
          "source": "src/Data-Logic-Classes-Equals.html#pApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp",
          "normalized": "a-\u003e[b]-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003e[term]-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:pApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersions of pApp specialized for different argument counts.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp0",
          "package": "logic-classes",
          "signature": "p -\u003e formula",
          "source": "src/Data-Logic-Classes-Equals.html#pApp0",
          "type": "function"
        },
        "index": {
          "description": "Versions of pApp specialized for different argument counts",
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp0",
          "normalized": "a-\u003eb",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:pApp0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp1",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-Equals.html#pApp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp1",
          "normalized": "a-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:pApp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp2",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-Equals.html#pApp2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp2",
          "normalized": "a-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:pApp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp3",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-Equals.html#pApp3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp3",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:pApp3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp4",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-Equals.html#pApp4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp4",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:pApp4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp5",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-Equals.html#pApp5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp5",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:pApp5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp6",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-Equals.html#pApp6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp6",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:pApp6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp7",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-Equals.html#pApp7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "pApp7",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:pApp7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "prettyAtomEq",
          "package": "logic-classes",
          "signature": "(v -\u003e Doc) -\u003e (p -\u003e Doc) -\u003e (f -\u003e Doc) -\u003e Int -\u003e atom -\u003e Doc",
          "source": "src/Data-Logic-Classes-Equals.html#prettyAtomEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "prettyAtomEq",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003e(c-\u003eDoc)-\u003eInt-\u003ed-\u003eDoc",
          "package": "logic-classes",
          "partial": "Atom Eq",
          "signature": "(v-\u003eDoc)-\u003e(p-\u003eDoc)-\u003e(f-\u003eDoc)-\u003eInt-\u003eatom-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:prettyAtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "showAtomEq",
          "package": "logic-classes",
          "signature": "atom -\u003e String",
          "source": "src/Data-Logic-Classes-Equals.html#showAtomEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "showAtomEq",
          "normalized": "a-\u003eString",
          "package": "logic-classes",
          "partial": "Atom Eq",
          "signature": "atom-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:showAtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "showFirstOrderFormulaEq",
          "package": "logic-classes",
          "signature": "fof -\u003e String",
          "source": "src/Data-Logic-Classes-Equals.html#showFirstOrderFormulaEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "showFirstOrderFormulaEq",
          "normalized": "a-\u003eString",
          "package": "logic-classes",
          "partial": "First Order Formula Eq",
          "signature": "fof-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:showFirstOrderFormulaEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "substAtomEq",
          "package": "logic-classes",
          "signature": "Map v term -\u003e atom -\u003e atom",
          "source": "src/Data-Logic-Classes-Equals.html#substAtomEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "substAtomEq",
          "normalized": "Map a b-\u003ec-\u003ec",
          "package": "logic-classes",
          "partial": "Atom Eq",
          "signature": "Map v term-\u003eatom-\u003eatom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:substAtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the variables that occur in an instance of AtomEq.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Equals",
          "name": "varAtomEq",
          "package": "logic-classes",
          "signature": "atom -\u003e Set v",
          "source": "src/Data-Logic-Classes-Equals.html#varAtomEq",
          "type": "function"
        },
        "index": {
          "description": "Return the variables that occur in an instance of AtomEq",
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "varAtomEq",
          "normalized": "a-\u003eSet b",
          "package": "logic-classes",
          "partial": "Atom Eq",
          "signature": "atom-\u003eSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:varAtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Equals",
          "name": "zipAtomsEq",
          "package": "logic-classes",
          "signature": "(p -\u003e [term] -\u003e p -\u003e [term] -\u003e Maybe r) -\u003e (Bool -\u003e Bool -\u003e Maybe r) -\u003e (term -\u003e term -\u003e term -\u003e term -\u003e Maybe r) -\u003e atom -\u003e atom -\u003e Maybe r",
          "source": "src/Data-Logic-Classes-Equals.html#zipAtomsEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Equals",
          "module": "Data.Logic.Classes.Equals",
          "name": "zipAtomsEq",
          "normalized": "(a-\u003e[b]-\u003ea-\u003e[b]-\u003eMaybe c)-\u003e(Bool-\u003eBool-\u003eMaybe c)-\u003e(b-\u003eb-\u003eb-\u003eb-\u003eMaybe c)-\u003ed-\u003ed-\u003eMaybe c",
          "package": "logic-classes",
          "partial": "Atoms Eq",
          "signature": "(p-\u003e[term]-\u003ep-\u003e[term]-\u003eMaybe r)-\u003e(Bool-\u003eBool-\u003eMaybe r)-\u003e(term-\u003eterm-\u003eterm-\u003eterm-\u003eMaybe r)-\u003eatom-\u003eatom-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Equals.html#v:zipAtomsEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "FirstOrder",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-FirstOrder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "FirstOrder",
          "package": "logic-classes",
          "partial": "First Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFirstOrderFormula\u003c/a\u003e\u003c/code\u003e type class.  Minimal implementation:\n \u003ccode\u003efor_all, exists, foldFirstOrder, foldTerm, (.=.), pApp0-pApp7, fApp, var\u003c/code\u003e.  The\n functional dependencies are necessary here so we can write\n functions that don't fix all of the type parameters.  For example,\n without them the univquant_free_vars function gives the error \u003ccode\u003eNo\n instance for (FirstOrderFormula Formula atom V)\u003c/code\u003e because the\n function doesn't mention the Term type.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "FirstOrderFormula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-FirstOrder.html#FirstOrderFormula",
          "type": "class"
        },
        "index": {
          "description": "The FirstOrderFormula type class Minimal implementation for all exists foldFirstOrder foldTerm pApp0-pApp7 fApp var The functional dependencies are necessary here so we can write functions that don fix all of the type parameters For example without them the univquant free vars function gives the error No instance for FirstOrderFormula Formula atom because the function doesn mention the Term type",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "FirstOrderFormula",
          "package": "logic-classes",
          "partial": "First Order Formula",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#t:FirstOrderFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eQuant\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eInfixPred\u003c/code\u003e types, like the BinOp type in\n \u003ccode\u003e\u003ca\u003ePropositional\u003c/a\u003e\u003c/code\u003e, could be additional parameters to the type\n class, but it would add additional complexity with unclear\n benefits.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "Quant",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-FirstOrder.html#Quant",
          "type": "data"
        },
        "index": {
          "description": "The Quant and InfixPred types like the BinOp type in Propositional could be additional parameters to the type class but it would add additional complexity with unclear benefits",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "Quant",
          "package": "logic-classes",
          "partial": "Quant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#t:Quant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames for for_all and exists inspired by the conventions of the\n TPTP project.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "(!)",
          "package": "logic-classes",
          "signature": "v -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Names for for all and exists inspired by the conventions of the TPTP project",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "(!) !",
          "normalized": "a-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "v-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "(?)",
          "package": "logic-classes",
          "signature": "v -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "(?) ?",
          "normalized": "a-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "v-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#8704; can't be a function when -XUnicodeSyntax is enabled.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "(∀)",
          "package": "logic-classes",
          "signature": "v -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#%2200",
          "type": "function"
        },
        "index": {
          "description": "can be function when XUnicodeSyntax is enabled",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "(∀) ∀",
          "normalized": "a-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "v-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:-8704-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "(∃)",
          "package": "logic-classes",
          "signature": "v -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#%2203",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "(∃) ∃",
          "normalized": "a-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "v-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:-8707-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "Exists",
          "package": "logic-classes",
          "signature": "Exists",
          "source": "src/Data-Logic-Classes-FirstOrder.html#Quant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "Exists",
          "package": "logic-classes",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "Forall",
          "package": "logic-classes",
          "signature": "Forall",
          "source": "src/Data-Logic-Classes-FirstOrder.html#Quant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "Forall",
          "package": "logic-classes",
          "partial": "Forall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:Forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "atom_union",
          "package": "logic-classes",
          "signature": "(atom -\u003e Set a) -\u003e formula -\u003e Set a",
          "source": "src/Data-Logic-Classes-FirstOrder.html#atom_union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "atom_union",
          "normalized": "(a-\u003eSet b)-\u003ec-\u003eSet b",
          "package": "logic-classes",
          "signature": "(atom-\u003eSet a)-\u003eformula-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:atom_union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "convertFOF",
          "package": "logic-classes",
          "signature": "(atom1 -\u003e atom2) -\u003e (v1 -\u003e v2) -\u003e formula1 -\u003e formula2",
          "source": "src/Data-Logic-Classes-FirstOrder.html#convertFOF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "convertFOF",
          "normalized": "(a-\u003ea)-\u003e(b-\u003eb)-\u003ec-\u003ec",
          "package": "logic-classes",
          "partial": "FOF",
          "signature": "(atom-\u003eatom)-\u003e(v-\u003ev)-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:convertFOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential quantification - there exists x such that (formula x)\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "exists",
          "package": "logic-classes",
          "signature": "v -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#exists",
          "type": "method"
        },
        "index": {
          "description": "Existential quantification there exists such that formula",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "exists",
          "normalized": "a-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "v-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexists with a list of variables, for backwards compatibility.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "exists'",
          "package": "logic-classes",
          "signature": "[v] -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#exists%27",
          "type": "function"
        },
        "index": {
          "description": "exists with list of variables for backwards compatibility",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "exists'",
          "normalized": "[a]-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "[v]-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:exists-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "fixityFirstOrder",
          "package": "logic-classes",
          "signature": "formula -\u003e Fixity",
          "source": "src/Data-Logic-Classes-FirstOrder.html#fixityFirstOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "fixityFirstOrder",
          "normalized": "a-\u003eFixity",
          "package": "logic-classes",
          "partial": "First Order",
          "signature": "formula-\u003eFixity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:fixityFirstOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "foldAtomsFirstOrder",
          "package": "logic-classes",
          "signature": "(r -\u003e atom -\u003e r) -\u003e r -\u003e fof -\u003e r",
          "source": "src/Data-Logic-Classes-FirstOrder.html#foldAtomsFirstOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "foldAtomsFirstOrder",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "logic-classes",
          "partial": "Atoms First Order",
          "signature": "(r-\u003eatom-\u003er)-\u003er-\u003efof-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:foldAtomsFirstOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fold function similar to the one in \u003ccode\u003ePropositionalFormula\u003c/code\u003e\n but extended to cover both the existing formula types and the\n ones introduced here.  \u003ccode\u003efoldFirstOrder (.~.) quant binOp infixPred pApp\u003c/code\u003e\n is a no op.  The argument order is taken from Logic-TPTP.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "foldFirstOrder",
          "package": "logic-classes",
          "signature": "(Quant -\u003e v -\u003e formula -\u003e r) -\u003e (Combination formula -\u003e r) -\u003e (Bool -\u003e r) -\u003e (atom -\u003e r) -\u003e formula -\u003e r",
          "source": "src/Data-Logic-Classes-FirstOrder.html#foldFirstOrder",
          "type": "method"
        },
        "index": {
          "description": "fold function similar to the one in PropositionalFormula but extended to cover both the existing formula types and the ones introduced here foldFirstOrder quant binOp infixPred pApp is no op The argument order is taken from Logic-TPTP",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "foldFirstOrder",
          "normalized": "(Quant-\u003ea-\u003eb-\u003ec)-\u003e(Combination b-\u003ec)-\u003e(Bool-\u003ec)-\u003e(d-\u003ec)-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "First Order",
          "signature": "(Quant-\u003ev-\u003eformula-\u003er)-\u003e(Combination formula-\u003er)-\u003e(Bool-\u003er)-\u003e(atom-\u003er)-\u003eformula-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:foldFirstOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniversal quantification - for all x (formula x)\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "for_all",
          "package": "logic-classes",
          "signature": "v -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#for_all",
          "type": "method"
        },
        "index": {
          "description": "Universal quantification for all formula",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "for_all",
          "normalized": "a-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "v-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:for_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor_all with a list of variables, for backwards compatibility.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "for_all'",
          "package": "logic-classes",
          "signature": "[v] -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#for_all%27",
          "type": "function"
        },
        "index": {
          "description": "for all with list of variables for backwards compatibility",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "for_all'",
          "normalized": "[a]-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "[v]-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:for_all-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like Logic.FirstOrder.convertFOF except it rejects anything\n with a construct unsupported in a normal logic formula,\n i.e. quantifiers and formula combinators other than negation.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "fromFirstOrder",
          "package": "logic-classes",
          "signature": "(atom -\u003e atom2) -\u003e formula -\u003e Failing lit",
          "source": "src/Data-Logic-Classes-FirstOrder.html#fromFirstOrder",
          "type": "function"
        },
        "index": {
          "description": "Just like Logic.FirstOrder.convertFOF except it rejects anything with construct unsupported in normal logic formula i.e quantifiers and formula combinators other than negation",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "fromFirstOrder",
          "normalized": "(a-\u003ea)-\u003eb-\u003eFailing c",
          "package": "logic-classes",
          "partial": "First Order",
          "signature": "(atom-\u003eatom)-\u003eformula-\u003eFailing lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:fromFirstOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "fromLiteral",
          "package": "logic-classes",
          "signature": "(atom -\u003e atom2) -\u003e lit -\u003e fof",
          "source": "src/Data-Logic-Classes-FirstOrder.html#fromLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "fromLiteral",
          "normalized": "(a-\u003ea)-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "Literal",
          "signature": "(atom-\u003eatom)-\u003elit-\u003efof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:fromLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "mapAtomsFirstOrder",
          "package": "logic-classes",
          "signature": "(atom -\u003e formula) -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#mapAtomsFirstOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "mapAtomsFirstOrder",
          "normalized": "(a-\u003eb)-\u003eb-\u003eb",
          "package": "logic-classes",
          "partial": "Atoms First Order",
          "signature": "(atom-\u003eformula)-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:mapAtomsFirstOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated - use mapAtoms\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "onatoms",
          "package": "logic-classes",
          "signature": "(atom -\u003e formula) -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#onatoms",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use mapAtoms",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "onatoms",
          "normalized": "(a-\u003eb)-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "(atom-\u003eformula)-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:onatoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated - use foldAtoms\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "overatoms",
          "package": "logic-classes",
          "signature": "(atom -\u003e r -\u003e r) -\u003e formula -\u003e r -\u003e r",
          "source": "src/Data-Logic-Classes-FirstOrder.html#overatoms",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use foldAtoms",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "overatoms",
          "normalized": "(a-\u003eb-\u003eb)-\u003ec-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "(atom-\u003er-\u003er)-\u003eformula-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:overatoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp",
          "package": "logic-classes",
          "signature": "p -\u003e [term] -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#pApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp",
          "normalized": "a-\u003e[b]-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003e[term]-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:pApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersions of pApp specialized for different argument counts.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp0",
          "package": "logic-classes",
          "signature": "p -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#pApp0",
          "type": "function"
        },
        "index": {
          "description": "Versions of pApp specialized for different argument counts",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp0",
          "normalized": "a-\u003eb",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:pApp0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp1",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#pApp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp1",
          "normalized": "a-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:pApp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp2",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#pApp2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp2",
          "normalized": "a-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:pApp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp3",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#pApp3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp3",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:pApp3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp4",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#pApp4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp4",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:pApp4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp5",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#pApp5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp5",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:pApp5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp6",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#pApp6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp6",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:pApp6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp7",
          "package": "logic-classes",
          "signature": "p -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e term -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#pApp7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "pApp7",
          "normalized": "a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "App",
          "signature": "p-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eterm-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:pApp7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "prettyFirstOrder",
          "package": "logic-classes",
          "signature": "(Int -\u003e atom -\u003e Doc) -\u003e (v -\u003e Doc) -\u003e Int -\u003e formula -\u003e Doc",
          "source": "src/Data-Logic-Classes-FirstOrder.html#prettyFirstOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "prettyFirstOrder",
          "normalized": "(Int-\u003ea-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eInt-\u003ec-\u003eDoc",
          "package": "logic-classes",
          "partial": "First Order",
          "signature": "(Int-\u003eatom-\u003eDoc)-\u003e(v-\u003eDoc)-\u003eInt-\u003eformula-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:prettyFirstOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for building folds.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "quant",
          "package": "logic-classes",
          "signature": "Quant -\u003e v -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#quant",
          "type": "function"
        },
        "index": {
          "description": "Helper function for building folds",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "quant",
          "normalized": "Quant-\u003ea-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "Quant-\u003ev-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:quant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLegacy version of quant from when we supported lists of quantified\n variables.  It also has the virtue of eliding quantifications with\n empty variable lists (by calling for_all' and exists'.)\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "quant'",
          "package": "logic-classes",
          "signature": "Quant -\u003e [v] -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-FirstOrder.html#quant%27",
          "type": "function"
        },
        "index": {
          "description": "Legacy version of quant from when we supported lists of quantified variables It also has the virtue of eliding quantifications with empty variable lists by calling for all and exists",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "quant'",
          "normalized": "Quant-\u003e[a]-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "Quant-\u003e[v]-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:quant-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a formula in a format that can be read into the interpreter.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "showFirstOrder",
          "package": "logic-classes",
          "signature": "(atom -\u003e String) -\u003e formula -\u003e String",
          "source": "src/Data-Logic-Classes-FirstOrder.html#showFirstOrder",
          "type": "function"
        },
        "index": {
          "description": "Display formula in format that can be read into the interpreter",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "showFirstOrder",
          "normalized": "(a-\u003eString)-\u003eb-\u003eString",
          "package": "logic-classes",
          "partial": "First Order",
          "signature": "(atom-\u003eString)-\u003eformula-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:showFirstOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to convert a first order logic formula to propositional.  This\n will return Nothing if there are any quantifiers, or if it runs\n into an atom that it is unable to convert.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "toPropositional",
          "package": "logic-classes",
          "signature": "(atom -\u003e atom2) -\u003e formula1 -\u003e formula2",
          "source": "src/Data-Logic-Classes-FirstOrder.html#toPropositional",
          "type": "function"
        },
        "index": {
          "description": "Try to convert first order logic formula to propositional This will return Nothing if there are any quantifiers or if it runs into an atom that it is unable to convert",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "toPropositional",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "logic-classes",
          "partial": "Propositional",
          "signature": "(atom-\u003eatom)-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:toPropositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamine the formula to find the list of outermost universally\n quantified variables, and call a function with that list and the\n formula after the quantifiers are removed.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "withUnivQuants",
          "package": "logic-classes",
          "signature": "([v] -\u003e formula -\u003e r) -\u003e formula -\u003e r",
          "source": "src/Data-Logic-Classes-FirstOrder.html#withUnivQuants",
          "type": "function"
        },
        "index": {
          "description": "Examine the formula to find the list of outermost universally quantified variables and call function with that list and the formula after the quantifiers are removed",
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "withUnivQuants",
          "normalized": "([a]-\u003eb-\u003ec)-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "Univ Quants",
          "signature": "([v]-\u003eformula-\u003er)-\u003eformula-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:withUnivQuants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "zipFirstOrder",
          "package": "logic-classes",
          "signature": "(Quant -\u003e v -\u003e formula -\u003e Quant -\u003e v -\u003e formula -\u003e Maybe r) -\u003e (Combination formula -\u003e Combination formula -\u003e Maybe r) -\u003e (Bool -\u003e Bool -\u003e Maybe r) -\u003e (atom -\u003e atom -\u003e Maybe r) -\u003e formula -\u003e formula -\u003e Maybe r",
          "source": "src/Data-Logic-Classes-FirstOrder.html#zipFirstOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes FirstOrder",
          "module": "Data.Logic.Classes.FirstOrder",
          "name": "zipFirstOrder",
          "normalized": "(Quant-\u003ea-\u003eb-\u003eQuant-\u003ea-\u003eb-\u003eMaybe c)-\u003e(Combination b-\u003eCombination b-\u003eMaybe c)-\u003e(Bool-\u003eBool-\u003eMaybe c)-\u003e(d-\u003ed-\u003eMaybe c)-\u003eb-\u003eb-\u003eMaybe c",
          "package": "logic-classes",
          "partial": "First Order",
          "signature": "(Quant-\u003ev-\u003eformula-\u003eQuant-\u003ev-\u003eformula-\u003eMaybe r)-\u003e(Combination formula-\u003eCombination formula-\u003eMaybe r)-\u003e(Bool-\u003eBool-\u003eMaybe r)-\u003e(atom-\u003eatom-\u003eMaybe r)-\u003eformula-\u003eformula-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-FirstOrder.html#v:zipFirstOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Formula",
          "name": "Formula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Formula.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes Formula",
          "module": "Data.Logic.Classes.Formula",
          "name": "Formula",
          "package": "logic-classes",
          "partial": "Formula",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Formula.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Formula",
          "name": "Formula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Formula.html#Formula",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Classes Formula",
          "module": "Data.Logic.Classes.Formula",
          "name": "Formula",
          "package": "logic-classes",
          "partial": "Formula",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Formula.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Formula",
          "name": "atomic",
          "package": "logic-classes",
          "signature": "atom -\u003e formula",
          "source": "src/Data-Logic-Classes-Formula.html#atomic",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Formula",
          "module": "Data.Logic.Classes.Formula",
          "name": "atomic",
          "normalized": "a-\u003eb",
          "package": "logic-classes",
          "signature": "atom-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Formula.html#v:atomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Formula",
          "name": "foldAtoms",
          "package": "logic-classes",
          "signature": "(r -\u003e atom -\u003e r) -\u003e r -\u003e formula -\u003e r",
          "source": "src/Data-Logic-Classes-Formula.html#foldAtoms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Formula",
          "module": "Data.Logic.Classes.Formula",
          "name": "foldAtoms",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "logic-classes",
          "partial": "Atoms",
          "signature": "(r-\u003eatom-\u003er)-\u003er-\u003eformula-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Formula.html#v:foldAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Formula",
          "name": "mapAtoms",
          "package": "logic-classes",
          "signature": "(atom -\u003e formula) -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Formula.html#mapAtoms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Formula",
          "module": "Data.Logic.Classes.Formula",
          "name": "mapAtoms",
          "normalized": "(a-\u003eb)-\u003eb-\u003eb",
          "package": "logic-classes",
          "partial": "Atoms",
          "signature": "(atom-\u003eformula)-\u003eformula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Formula.html#v:mapAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Literal",
          "name": "Literal",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Literal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes Literal",
          "module": "Data.Logic.Classes.Literal",
          "name": "Literal",
          "package": "logic-classes",
          "partial": "Literal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Literal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiterals are the building blocks of the clause and implicative normal\n |forms.  They support negation and must include True and False elements.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Literal",
          "name": "Literal",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Literal.html#Literal",
          "type": "class"
        },
        "index": {
          "description": "Literals are the building blocks of the clause and implicative normal forms They support negation and must include True and False elements",
          "hierarchy": "Data Logic Classes Literal",
          "module": "Data.Logic.Classes.Literal",
          "name": "Literal",
          "package": "logic-classes",
          "partial": "Literal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Literal.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Literal",
          "name": "foldAtomsLiteral",
          "package": "logic-classes",
          "signature": "(r -\u003e atom -\u003e r) -\u003e r -\u003e lit -\u003e r",
          "source": "src/Data-Logic-Classes-Literal.html#foldAtomsLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Literal",
          "module": "Data.Logic.Classes.Literal",
          "name": "foldAtomsLiteral",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "logic-classes",
          "partial": "Atoms Literal",
          "signature": "(r-\u003eatom-\u003er)-\u003er-\u003elit-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Literal.html#v:foldAtomsLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Literal",
          "name": "foldLiteral",
          "package": "logic-classes",
          "signature": "(lit -\u003e r) -\u003e (Bool -\u003e r) -\u003e (atom -\u003e r) -\u003e lit -\u003e r",
          "source": "src/Data-Logic-Classes-Literal.html#foldLiteral",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Literal",
          "module": "Data.Logic.Classes.Literal",
          "name": "foldLiteral",
          "normalized": "(a-\u003eb)-\u003e(Bool-\u003eb)-\u003e(c-\u003eb)-\u003ea-\u003eb",
          "package": "logic-classes",
          "partial": "Literal",
          "signature": "(lit-\u003er)-\u003e(Bool-\u003er)-\u003e(atom-\u003er)-\u003elit-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Literal.html#v:foldLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Literal",
          "name": "prettyLit",
          "package": "logic-classes",
          "signature": "(Int -\u003e atom -\u003e Doc) -\u003e (v -\u003e Doc) -\u003e Int -\u003e lit -\u003e Doc",
          "source": "src/Data-Logic-Classes-Literal.html#prettyLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Literal",
          "module": "Data.Logic.Classes.Literal",
          "name": "prettyLit",
          "normalized": "(Int-\u003ea-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eInt-\u003ec-\u003eDoc",
          "package": "logic-classes",
          "partial": "Lit",
          "signature": "(Int-\u003eatom-\u003eDoc)-\u003e(v-\u003eDoc)-\u003eInt-\u003elit-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Literal.html#v:prettyLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Literal",
          "name": "toPropositional",
          "package": "logic-classes",
          "signature": "(atom -\u003e atom2) -\u003e lit -\u003e pf",
          "source": "src/Data-Logic-Classes-Literal.html#toPropositional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Literal",
          "module": "Data.Logic.Classes.Literal",
          "name": "toPropositional",
          "normalized": "(a-\u003ea)-\u003eb-\u003ec",
          "package": "logic-classes",
          "partial": "Propositional",
          "signature": "(atom-\u003eatom)-\u003elit-\u003epf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Literal.html#v:toPropositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Literal",
          "name": "zipLiterals",
          "package": "logic-classes",
          "signature": "(lit -\u003e lit -\u003e Maybe r) -\u003e (Bool -\u003e Bool -\u003e Maybe r) -\u003e (atom -\u003e atom -\u003e Maybe r) -\u003e lit -\u003e lit -\u003e Maybe r",
          "source": "src/Data-Logic-Classes-Literal.html#zipLiterals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Literal",
          "module": "Data.Logic.Classes.Literal",
          "name": "zipLiterals",
          "normalized": "(a-\u003ea-\u003eMaybe b)-\u003e(Bool-\u003eBool-\u003eMaybe b)-\u003e(c-\u003ec-\u003eMaybe b)-\u003ea-\u003ea-\u003eMaybe b",
          "package": "logic-classes",
          "partial": "Literals",
          "signature": "(lit-\u003elit-\u003eMaybe r)-\u003e(Bool-\u003eBool-\u003eMaybe r)-\u003e(atom-\u003eatom-\u003eMaybe r)-\u003elit-\u003elit-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Literal.html#v:zipLiterals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Negate",
          "name": "Negate",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Negate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes Negate",
          "module": "Data.Logic.Classes.Negate",
          "name": "Negate",
          "package": "logic-classes",
          "partial": "Negate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Negate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of formulas that can be negated.  There are some types\n that can be negated but do not support the other Boolean Logic\n operators, such as the \u003ccode\u003eLiteral\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Negate",
          "name": "Negatable",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Negate.html#Negatable",
          "type": "class"
        },
        "index": {
          "description": "The class of formulas that can be negated There are some types that can be negated but do not support the other Boolean Logic operators such as the Literal class",
          "hierarchy": "Data Logic Classes Negate",
          "module": "Data.Logic.Classes.Negate",
          "name": "Negatable",
          "package": "logic-classes",
          "partial": "Negatable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Negate.html#t:Negatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Negate",
          "name": "(¬)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Negate.html#%AC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Negate",
          "module": "Data.Logic.Classes.Negate",
          "name": "(¬) ¬",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Negate.html#v:-172-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate the formula, avoiding double negation\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Negate",
          "name": "(.~.)",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Negate.html#.~.",
          "type": "function"
        },
        "index": {
          "description": "Negate the formula avoiding double negation",
          "hierarchy": "Data Logic Classes Negate",
          "module": "Data.Logic.Classes.Negate",
          "name": "(.~.) .~.",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Negate.html#v:.-126-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a formula is negated or normal\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Negate",
          "name": "foldNegation",
          "package": "logic-classes",
          "signature": "foldNegation",
          "source": "src/Data-Logic-Classes-Negate.html#foldNegation",
          "type": "method"
        },
        "index": {
          "description": "Test whether formula is negated or normal",
          "hierarchy": "Data Logic Classes Negate",
          "module": "Data.Logic.Classes.Negate",
          "name": "foldNegation",
          "package": "logic-classes",
          "partial": "Negation",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Negate.html#v:foldNegation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate a formula in a naive fashion, the operators below\n prevent double negation.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Negate",
          "name": "negatePrivate",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Negate.html#negatePrivate",
          "type": "method"
        },
        "index": {
          "description": "Negate formula in naive fashion the operators below prevent double negation",
          "hierarchy": "Data Logic Classes Negate",
          "module": "Data.Logic.Classes.Negate",
          "name": "negatePrivate",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "partial": "Private",
          "signature": "formula-\u003eformula",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Negate.html#v:negatePrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this formula negated at the top level?\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Negate",
          "name": "negated",
          "package": "logic-classes",
          "signature": "formula -\u003e Bool",
          "source": "src/Data-Logic-Classes-Negate.html#negated",
          "type": "function"
        },
        "index": {
          "description": "Is this formula negated at the top level",
          "hierarchy": "Data Logic Classes Negate",
          "module": "Data.Logic.Classes.Negate",
          "name": "negated",
          "normalized": "a-\u003eBool",
          "package": "logic-classes",
          "signature": "formula-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Negate.html#v:negated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Negate",
          "name": "negative",
          "package": "logic-classes",
          "signature": "formula -\u003e Bool",
          "source": "src/Data-Logic-Classes-Negate.html#negative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Negate",
          "module": "Data.Logic.Classes.Negate",
          "name": "negative",
          "normalized": "a-\u003eBool",
          "package": "logic-classes",
          "signature": "formula-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Negate.html#v:negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Negate",
          "name": "positive",
          "package": "logic-classes",
          "signature": "formula -\u003e Bool",
          "source": "src/Data-Logic-Classes-Negate.html#positive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Negate",
          "module": "Data.Logic.Classes.Negate",
          "name": "positive",
          "normalized": "a-\u003eBool",
          "package": "logic-classes",
          "signature": "formula-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Negate.html#v:positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Pretty",
          "name": "Pretty",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "Pretty",
          "package": "logic-classes",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Pretty",
          "name": "Fixity",
          "package": "logic-classes",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "Fixity",
          "package": "logic-classes",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Pretty",
          "name": "FixityDirection",
          "package": "logic-classes",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "FixityDirection",
          "package": "logic-classes",
          "partial": "Fixity Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#t:FixityDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class used to do proper parenthesization of formulas.  If we\n nest a higher precedence formula inside a lower one parentheses can\n be omitted.  Because \u003ccode\u003e|\u003c/code\u003e has lower precedence than \u003ccode\u003e&\u003c/code\u003e, the formula\n \u003ccode\u003ea | (b & c)\u003c/code\u003e appears as \u003ccode\u003ea | b & c\u003c/code\u003e, while \u003ccode\u003e(a | b) & c\u003c/code\u003e appears\n unchanged.  (Name Precedence chosen because Fixity was taken.)\n\u003c/p\u003e\u003cp\u003eThe second field of Fixity is the FixityDirection, which can be\n left, right, or non.  A left associative operator like \u003ccode\u003e/\u003c/code\u003e is\n grouped left to right, so parenthese can be omitted from \u003ccode\u003e(a \u003cem\u003e b) \u003c/em\u003e\n c\u003c/code\u003e but not from \u003ccode\u003ea \u003cem\u003e (b \u003c/em\u003e c)\u003c/code\u003e.  It is a syntax error to omit\n parentheses when formatting a non-associative operator.\n\u003c/p\u003e\u003cp\u003eThe Haskell FixityDirection type is concerned with how to interpret\n a formula formatted in a certain way, but here we are concerned\n with how to format a formula given its interpretation.  As such,\n one case the Haskell type does not capture is whether the operator\n follows the associative law, so we can omit parentheses in an\n expression such as \u003ccode\u003ea & b & c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Pretty",
          "name": "HasFixity",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Pretty.html#HasFixity",
          "type": "class"
        },
        "index": {
          "description": "class used to do proper parenthesization of formulas If we nest higher precedence formula inside lower one parentheses can be omitted Because has lower precedence than the formula appears as while appears unchanged Name Precedence chosen because Fixity was taken The second field of Fixity is the FixityDirection which can be left right or non left associative operator like is grouped left to right so parenthese can be omitted from but not from It is syntax error to omit parentheses when formatting non-associative operator The Haskell FixityDirection type is concerned with how to interpret formula formatted in certain way but here we are concerned with how to format formula given its interpretation As such one case the Haskell type does not capture is whether the operator follows the associative law so we can omit parentheses in an expression such as",
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "HasFixity",
          "package": "logic-classes",
          "partial": "Has Fixity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#t:HasFixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intent of this class is to be similar to Show, but only one\n way, with no corresponding Read class.  It doesn't really belong\n here in logic-classes.  To put something in a pretty printing class\n implies that there is only one way to pretty print it, which is not\n an assumption made by Text.PrettyPrint.  But in practice this is\n often good enough.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Pretty",
          "name": "Pretty",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "The intent of this class is to be similar to Show but only one way with no corresponding Read class It doesn really belong here in logic-classes To put something in pretty printing class implies that there is only one way to pretty print it which is not an assumption made by Text.PrettyPrint But in practice this is often good enough",
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "Pretty",
          "package": "logic-classes",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Pretty",
          "name": "Fixity",
          "package": "logic-classes",
          "signature": "Fixity Int FixityDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "Fixity",
          "package": "logic-classes",
          "partial": "Fixity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#v:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Pretty",
          "name": "InfixL",
          "package": "logic-classes",
          "signature": "InfixL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "InfixL",
          "package": "logic-classes",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#v:InfixL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Pretty",
          "name": "InfixN",
          "package": "logic-classes",
          "signature": "InfixN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "InfixN",
          "package": "logic-classes",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#v:InfixN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Pretty",
          "name": "InfixR",
          "package": "logic-classes",
          "signature": "InfixR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "InfixR",
          "package": "logic-classes",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#v:InfixR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used as the fixity for things that never need\n parenthesization, such as function application.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Pretty",
          "name": "botFixity",
          "package": "logic-classes",
          "signature": "Fixity",
          "source": "src/Data-Logic-Classes-Pretty.html#botFixity",
          "type": "function"
        },
        "index": {
          "description": "This is used as the fixity for things that never need parenthesization such as function application",
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "botFixity",
          "package": "logic-classes",
          "partial": "Fixity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#v:botFixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Pretty",
          "name": "fixity",
          "package": "logic-classes",
          "signature": "x -\u003e Fixity",
          "source": "src/Data-Logic-Classes-Pretty.html#fixity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "fixity",
          "normalized": "a-\u003eFixity",
          "package": "logic-classes",
          "signature": "x-\u003eFixity",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#v:fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Pretty",
          "name": "pretty",
          "package": "logic-classes",
          "signature": "x -\u003e Doc",
          "source": "src/Data-Logic-Classes-Pretty.html#pretty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "pretty",
          "normalized": "a-\u003eDoc",
          "package": "logic-classes",
          "signature": "x-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used as the initial value for the parent fixity.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Pretty",
          "name": "topFixity",
          "package": "logic-classes",
          "signature": "Fixity",
          "source": "src/Data-Logic-Classes-Pretty.html#topFixity",
          "type": "function"
        },
        "index": {
          "description": "This is used as the initial value for the parent fixity",
          "hierarchy": "Data Logic Classes Pretty",
          "module": "Data.Logic.Classes.Pretty",
          "name": "topFixity",
          "package": "logic-classes",
          "partial": "Fixity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Pretty.html#v:topFixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePropositionalFormula is a multi-parameter type class for\n representing instance of propositional (aka zeroth order) logic\n datatypes.  These are formulas which have truth values, but no \u003ca\u003efor\n all\u003c/a\u003e or \u003ca\u003ethere exists\u003c/a\u003e quantifiers and thus no variables or terms\n as we have in first order or predicate logic.  It is intended that\n we will be able to write instances for various different\n implementations to allow these systems to interoperate.  The\n operator names were adopted from the Logic-TPTP package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "Propositional",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Propositional.html",
          "type": "module"
        },
        "index": {
          "description": "PropositionalFormula is multi-parameter type class for representing instance of propositional aka zeroth order logic datatypes These are formulas which have truth values but no for all or there exists quantifiers and thus no variables or terms as we have in first order or predicate logic It is intended that we will be able to write instances for various different implementations to allow these systems to interoperate The operator names were adopted from the Logic-TPTP package",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "Propositional",
          "package": "logic-classes",
          "partial": "Propositional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for propositional logic.  If the type we are writing\n an instance for is a zero-order (aka propositional) logic type\n there will generally by a type or a type parameter corresponding to\n atom.  For first order or predicate logic types, it is generally\n easiest to just use the formula type itself as the atom type, and\n raise errors in the implementation if a non-atomic formula somehow\n appears where an atomic formula is expected (i.e. as an argument to\n atomic or to the third argument of foldPropositional.)\n\u003c/p\u003e\u003cp\u003eThe Ord superclass is required so we can put formulas in sets\n during the normal form computations.  Negatable and Combinable are\n also considered basic operations that we can't build this package\n without.  It is less obvious whether Constants is always required,\n but the implementation of functions like simplify would be more\n elaborate if we didn't have it, so we will require it.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "PropositionalFormula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Propositional.html#PropositionalFormula",
          "type": "class"
        },
        "index": {
          "description": "type class for propositional logic If the type we are writing an instance for is zero-order aka propositional logic type there will generally by type or type parameter corresponding to atom For first order or predicate logic types it is generally easiest to just use the formula type itself as the atom type and raise errors in the implementation if non-atomic formula somehow appears where an atomic formula is expected i.e as an argument to atomic or to the third argument of foldPropositional The Ord superclass is required so we can put formulas in sets during the normal form computations Negatable and Combinable are also considered basic operations that we can build this package without It is less obvious whether Constants is always required but the implementation of functions like simplify would be more elaborate if we didn have it so we will require it",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "PropositionalFormula",
          "package": "logic-classes",
          "partial": "Propositional Formula",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#t:PropositionalFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Propositional",
          "name": "clauseNormalForm",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Propositional.html#clauseNormalForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "clauseNormalForm",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "partial": "Normal Form",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:clauseNormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Propositional",
          "name": "clauseNormalForm'",
          "package": "logic-classes",
          "signature": "formula -\u003e Set (Set formula)",
          "source": "src/Data-Logic-Classes-Propositional.html#clauseNormalForm%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "clauseNormalForm'",
          "normalized": "a-\u003eSet(Set a)",
          "package": "logic-classes",
          "partial": "Normal Form'",
          "signature": "formula-\u003eSet(Set formula)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:clauseNormalForm-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Propositional",
          "name": "clauseNormalFormAlt",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Propositional.html#clauseNormalFormAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "clauseNormalFormAlt",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "partial": "Normal Form Alt",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:clauseNormalFormAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI'm not sure of the clauseNormalForm functions above are wrong or just different.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "clauseNormalFormAlt'",
          "package": "logic-classes",
          "signature": "formula -\u003e Set (Set formula)",
          "source": "src/Data-Logic-Classes-Propositional.html#clauseNormalFormAlt%27",
          "type": "function"
        },
        "index": {
          "description": "not sure of the clauseNormalForm functions above are wrong or just different",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "clauseNormalFormAlt'",
          "normalized": "a-\u003eSet(Set a)",
          "package": "logic-classes",
          "partial": "Normal Form Alt'",
          "signature": "formula-\u003eSet(Set formula)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:clauseNormalFormAlt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert any instance of a propositional logic expression to any\n other using the supplied atom conversion function.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "convertProp",
          "package": "logic-classes",
          "signature": "(atom1 -\u003e atom2) -\u003e formula1 -\u003e formula2",
          "source": "src/Data-Logic-Classes-Propositional.html#convertProp",
          "type": "function"
        },
        "index": {
          "description": "Convert any instance of propositional logic expression to any other using the supplied atom conversion function",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "convertProp",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "logic-classes",
          "partial": "Prop",
          "signature": "(atom-\u003eatom)-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:convertProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Propositional",
          "name": "disjunctiveNormalForm",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Propositional.html#disjunctiveNormalForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "disjunctiveNormalForm",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "partial": "Normal Form",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:disjunctiveNormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Propositional",
          "name": "disjunctiveNormalForm'",
          "package": "logic-classes",
          "signature": "formula -\u003e Set (Set formula)",
          "source": "src/Data-Logic-Classes-Propositional.html#disjunctiveNormalForm%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "disjunctiveNormalForm'",
          "normalized": "a-\u003eSet(Set a)",
          "package": "logic-classes",
          "partial": "Normal Form'",
          "signature": "formula-\u003eSet(Set formula)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:disjunctiveNormalForm-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Propositional",
          "name": "fixityPropositional",
          "package": "logic-classes",
          "signature": "formula -\u003e Fixity",
          "source": "src/Data-Logic-Classes-Propositional.html#fixityPropositional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "fixityPropositional",
          "normalized": "a-\u003eFixity",
          "package": "logic-classes",
          "partial": "Propositional",
          "signature": "formula-\u003eFixity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:fixityPropositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this to implement foldAtoms\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "foldAtomsPropositional",
          "package": "logic-classes",
          "signature": "(r -\u003e atom -\u003e r) -\u003e r -\u003e pf -\u003e r",
          "source": "src/Data-Logic-Classes-Propositional.html#foldAtomsPropositional",
          "type": "function"
        },
        "index": {
          "description": "Use this to implement foldAtoms",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "foldAtomsPropositional",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "logic-classes",
          "partial": "Atoms Propositional",
          "signature": "(r-\u003eatom-\u003er)-\u003er-\u003epf-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:foldAtomsPropositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an atomic formula from the atom type.\n | A fold function that distributes different sorts of formula\n to its parameter functions, one to handle binary operators, one\n for negations, and one for atomic formulas.  See examples of its\n use to implement the polymorphic functions below.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "foldPropositional",
          "package": "logic-classes",
          "signature": "(Combination formula -\u003e r) -\u003e (Bool -\u003e r) -\u003e (atom -\u003e r) -\u003e formula -\u003e r",
          "source": "src/Data-Logic-Classes-Propositional.html#foldPropositional",
          "type": "method"
        },
        "index": {
          "description": "Build an atomic formula from the atom type fold function that distributes different sorts of formula to its parameter functions one to handle binary operators one for negations and one for atomic formulas See examples of its use to implement the polymorphic functions below",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "foldPropositional",
          "normalized": "(Combination a-\u003eb)-\u003e(Bool-\u003eb)-\u003e(c-\u003eb)-\u003ea-\u003eb",
          "package": "logic-classes",
          "partial": "Propositional",
          "signature": "(Combination formula-\u003er)-\u003e(Bool-\u003er)-\u003e(atom-\u003er)-\u003eformula-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:foldPropositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Propositional",
          "name": "mapAtomsPropositional",
          "package": "logic-classes",
          "signature": "(atom -\u003e formula) -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Propositional.html#mapAtomsPropositional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "mapAtomsPropositional",
          "normalized": "(a-\u003eb)-\u003eb-\u003eb",
          "package": "logic-classes",
          "partial": "Atoms Propositional",
          "signature": "(atom-\u003eformula)-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:mapAtomsPropositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify and recursively apply nnf.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "negationNormalForm",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Classes-Propositional.html#negationNormalForm",
          "type": "function"
        },
        "index": {
          "description": "Simplify and recursively apply nnf",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "negationNormalForm",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "partial": "Normal Form",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:negationNormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated - use foldAtoms.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "overatoms",
          "package": "logic-classes",
          "signature": "(atom -\u003e r -\u003e r) -\u003e formula -\u003e r -\u003e r",
          "source": "src/Data-Logic-Classes-Propositional.html#overatoms",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use foldAtoms",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "overatoms",
          "normalized": "(a-\u003eb-\u003eb)-\u003ec-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "(atom-\u003er-\u003er)-\u003eformula-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:overatoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a formula in a visually pleasing format.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "prettyPropositional",
          "package": "logic-classes",
          "signature": "(atom -\u003e Doc)-\u003e Fixity-\u003e formula-\u003e Doc",
          "type": "function"
        },
        "index": {
          "description": "Show formula in visually pleasing format",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "prettyPropositional",
          "normalized": "(a-\u003eDoc)-\u003eFixity-\u003eb-\u003eDoc",
          "package": "logic-classes",
          "partial": "Propositional",
          "signature": "(atom-\u003eDoc)-\u003eFixity-\u003eformula-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:prettyPropositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a formula in a format that can be evaluated \n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Propositional",
          "name": "showPropositional",
          "package": "logic-classes",
          "signature": "(atom -\u003e String) -\u003e formula -\u003e String",
          "source": "src/Data-Logic-Classes-Propositional.html#showPropositional",
          "type": "function"
        },
        "index": {
          "description": "Show formula in format that can be evaluated",
          "hierarchy": "Data Logic Classes Propositional",
          "module": "Data.Logic.Classes.Propositional",
          "name": "showPropositional",
          "normalized": "(a-\u003eString)-\u003eb-\u003eString",
          "package": "logic-classes",
          "partial": "Propositional",
          "signature": "(atom-\u003eString)-\u003eformula-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Propositional.html#v:showPropositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Skolem",
          "name": "Skolem",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Skolem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes Skolem",
          "module": "Data.Logic.Classes.Skolem",
          "name": "Skolem",
          "package": "logic-classes",
          "partial": "Skolem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Skolem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class shows how to convert between atomic Skolem functions\n and Ints.  We include a variable type as a parameter because we\n create skolem functions to replace an existentially quantified\n variable, and it can be helpful to retain a reference to the\n variable.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Skolem",
          "name": "Skolem",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Skolem.html#Skolem",
          "type": "class"
        },
        "index": {
          "description": "This class shows how to convert between atomic Skolem functions and Ints We include variable type as parameter because we create skolem functions to replace an existentially quantified variable and it can be helpful to retain reference to the variable",
          "hierarchy": "Data Logic Classes Skolem",
          "module": "Data.Logic.Classes.Skolem",
          "name": "Skolem",
          "package": "logic-classes",
          "partial": "Skolem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Skolem.html#t:Skolem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Skolem",
          "name": "isSkolem",
          "package": "logic-classes",
          "signature": "f -\u003e Bool",
          "source": "src/Data-Logic-Classes-Skolem.html#isSkolem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Skolem",
          "module": "Data.Logic.Classes.Skolem",
          "name": "isSkolem",
          "normalized": "a-\u003eBool",
          "package": "logic-classes",
          "partial": "Skolem",
          "signature": "f-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Skolem.html#v:isSkolem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilt a Skolem function from the given variable and number.\n The number is generally obtained from the skolem monad.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Skolem",
          "name": "toSkolem",
          "package": "logic-classes",
          "signature": "v -\u003e f",
          "source": "src/Data-Logic-Classes-Skolem.html#toSkolem",
          "type": "method"
        },
        "index": {
          "description": "Built Skolem function from the given variable and number The number is generally obtained from the skolem monad",
          "hierarchy": "Data Logic Classes Skolem",
          "module": "Data.Logic.Classes.Skolem",
          "name": "toSkolem",
          "normalized": "a-\u003eb",
          "package": "logic-classes",
          "partial": "Skolem",
          "signature": "v-\u003ef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Skolem.html#v:toSkolem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "Term",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Term.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "Term",
          "package": "logic-classes",
          "partial": "Term",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "Function",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Term.html#Function",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "Function",
          "package": "logic-classes",
          "partial": "Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "Term",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Term.html#Term",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "Term",
          "package": "logic-classes",
          "partial": "Term",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "convertTerm",
          "package": "logic-classes",
          "signature": "(v1 -\u003e v2) -\u003e (f1 -\u003e f2) -\u003e term1 -\u003e term2",
          "source": "src/Data-Logic-Classes-Term.html#convertTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "convertTerm",
          "normalized": "(a-\u003ea)-\u003e(b-\u003eb)-\u003ec-\u003ec",
          "package": "logic-classes",
          "partial": "Term",
          "signature": "(v-\u003ev)-\u003e(f-\u003ef)-\u003eterm-\u003eterm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:convertTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a term by applying terms to an atomic function.  \u003ccode\u003ef\u003c/code\u003e\n (atomic function) is one of the type parameters, this package\n is mostly indifferent to its internal structure.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Term",
          "name": "fApp",
          "package": "logic-classes",
          "signature": "f -\u003e [term] -\u003e term",
          "source": "src/Data-Logic-Classes-Term.html#fApp",
          "type": "method"
        },
        "index": {
          "description": "Build term by applying terms to an atomic function atomic function is one of the type parameters this package is mostly indifferent to its internal structure",
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "fApp",
          "normalized": "a-\u003e[b]-\u003eb",
          "package": "logic-classes",
          "partial": "App",
          "signature": "f-\u003e[term]-\u003eterm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:fApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fold for the term data type, which understands terms built\n from a variable and a term built from the application of a\n primitive function to other terms.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Term",
          "name": "foldTerm",
          "package": "logic-classes",
          "signature": "(v -\u003e r) -\u003e (f -\u003e [term] -\u003e r) -\u003e term -\u003e r",
          "source": "src/Data-Logic-Classes-Term.html#foldTerm",
          "type": "method"
        },
        "index": {
          "description": "fold for the term data type which understands terms built from variable and term built from the application of primitive function to other terms",
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "foldTerm",
          "normalized": "(a-\u003eb)-\u003e(c-\u003e[d]-\u003eb)-\u003ed-\u003eb",
          "package": "logic-classes",
          "partial": "Term",
          "signature": "(v-\u003er)-\u003e(f-\u003e[term]-\u003er)-\u003eterm-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:foldTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "funcs",
          "package": "logic-classes",
          "signature": "term -\u003e Set (f, Int)",
          "source": "src/Data-Logic-Classes-Term.html#funcs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "funcs",
          "normalized": "a-\u003eSet(b,Int)",
          "package": "logic-classes",
          "signature": "term-\u003eSet(f,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:funcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "fvt",
          "package": "logic-classes",
          "signature": "term -\u003e Set v",
          "source": "src/Data-Logic-Classes-Term.html#fvt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "fvt",
          "normalized": "a-\u003eSet b",
          "package": "logic-classes",
          "signature": "term-\u003eSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:fvt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "prettyTerm",
          "package": "logic-classes",
          "signature": "(v -\u003e Doc) -\u003e (f -\u003e Doc) -\u003e term -\u003e Doc",
          "source": "src/Data-Logic-Classes-Term.html#prettyTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "prettyTerm",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003ec-\u003eDoc",
          "package": "logic-classes",
          "partial": "Term",
          "signature": "(v-\u003eDoc)-\u003e(f-\u003eDoc)-\u003eterm-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:prettyTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "showTerm",
          "package": "logic-classes",
          "signature": "term -\u003e String",
          "source": "src/Data-Logic-Classes-Term.html#showTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "showTerm",
          "normalized": "a-\u003eString",
          "package": "logic-classes",
          "partial": "Term",
          "signature": "term-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:showTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "tsubst",
          "package": "logic-classes",
          "signature": "Map v term -\u003e term -\u003e term",
          "source": "src/Data-Logic-Classes-Term.html#tsubst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "tsubst",
          "normalized": "Map a b-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "Map v term-\u003eterm-\u003eterm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:tsubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a term which is a variable reference.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Term",
          "name": "vt",
          "package": "logic-classes",
          "signature": "v -\u003e term",
          "source": "src/Data-Logic-Classes-Term.html#vt",
          "type": "method"
        },
        "index": {
          "description": "Build term which is variable reference",
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "vt",
          "normalized": "a-\u003eb",
          "package": "logic-classes",
          "signature": "v-\u003eterm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:vt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Term",
          "name": "zipTerms",
          "package": "logic-classes",
          "signature": "(v -\u003e v -\u003e Maybe r) -\u003e (f -\u003e [term] -\u003e f -\u003e [term] -\u003e Maybe r) -\u003e term -\u003e term -\u003e Maybe r",
          "source": "src/Data-Logic-Classes-Term.html#zipTerms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Classes Term",
          "module": "Data.Logic.Classes.Term",
          "name": "zipTerms",
          "normalized": "(a-\u003ea-\u003eMaybe b)-\u003e(c-\u003e[d]-\u003ec-\u003e[d]-\u003eMaybe b)-\u003ed-\u003ed-\u003eMaybe b",
          "package": "logic-classes",
          "partial": "Terms",
          "signature": "(v-\u003ev-\u003eMaybe r)-\u003e(f-\u003e[term]-\u003ef-\u003e[term]-\u003eMaybe r)-\u003eterm-\u003eterm-\u003eMaybe r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Term.html#v:zipTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Variable",
          "name": "Variable",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Variable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Classes Variable",
          "module": "Data.Logic.Classes.Variable",
          "name": "Variable",
          "package": "logic-classes",
          "partial": "Variable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Variable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Variable",
          "name": "Variable",
          "package": "logic-classes",
          "source": "src/Data-Logic-Classes-Variable.html#Variable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Classes Variable",
          "module": "Data.Logic.Classes.Variable",
          "name": "Variable",
          "package": "logic-classes",
          "partial": "Variable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Variable.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a variable by adding a prefix.  This unfortunately\n assumes that v is \u003ca\u003estring-like\u003c/a\u003e but at least one algorithm in\n Harrison currently requires this.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Variable",
          "name": "prefix",
          "package": "logic-classes",
          "signature": "String -\u003e v -\u003e v",
          "source": "src/Data-Logic-Classes-Variable.html#prefix",
          "type": "method"
        },
        "index": {
          "description": "Modify variable by adding prefix This unfortunately assumes that is string-like but at least one algorithm in Harrison currently requires this",
          "hierarchy": "Data Logic Classes Variable",
          "module": "Data.Logic.Classes.Variable",
          "name": "prefix",
          "normalized": "String-\u003ea-\u003ea",
          "package": "logic-classes",
          "signature": "String-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Variable.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a variable\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Variable",
          "name": "prettyVariable",
          "package": "logic-classes",
          "signature": "v -\u003e Doc",
          "source": "src/Data-Logic-Classes-Variable.html#prettyVariable",
          "type": "method"
        },
        "index": {
          "description": "Pretty print variable",
          "hierarchy": "Data Logic Classes Variable",
          "module": "Data.Logic.Classes.Variable",
          "name": "prettyVariable",
          "normalized": "a-\u003eDoc",
          "package": "logic-classes",
          "partial": "Variable",
          "signature": "v-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Variable.html#v:prettyVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Classes.Variable",
          "name": "showVariable",
          "package": "logic-classes",
          "signature": "v -\u003e String",
          "source": "src/Data-Logic-Classes-Variable.html#showVariable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Classes Variable",
          "module": "Data.Logic.Classes.Variable",
          "name": "showVariable",
          "normalized": "a-\u003eString",
          "package": "logic-classes",
          "partial": "Variable",
          "signature": "v-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Variable.html#v:showVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a variable based on v but different from any set\n element.  The result may be v itself if v is not a member of\n the set.\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Variable",
          "name": "variant",
          "package": "logic-classes",
          "signature": "v -\u003e Set v -\u003e v",
          "source": "src/Data-Logic-Classes-Variable.html#variant",
          "type": "method"
        },
        "index": {
          "description": "Return variable based on but different from any set element The result may be itself if is not member of the set",
          "hierarchy": "Data Logic Classes Variable",
          "module": "Data.Logic.Classes.Variable",
          "name": "variant",
          "normalized": "a-\u003eSet a-\u003ea",
          "package": "logic-classes",
          "signature": "v-\u003eSet v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Variable.html#v:variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an infinite list of variations on v\n\u003c/p\u003e",
          "module": "Data.Logic.Classes.Variable",
          "name": "variants",
          "package": "logic-classes",
          "signature": "v -\u003e [v]",
          "source": "src/Data-Logic-Classes-Variable.html#variants",
          "type": "function"
        },
        "index": {
          "description": "Return an infinite list of variations on",
          "hierarchy": "Data Logic Classes Variable",
          "module": "Data.Logic.Classes.Variable",
          "name": "variants",
          "normalized": "a-\u003e[a]",
          "package": "logic-classes",
          "signature": "v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Classes-Variable.html#v:variants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Failing",
          "name": "Failing",
          "package": "logic-classes",
          "source": "src/Data-Logic-Failing.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Failing",
          "module": "Data.Logic.Failing",
          "name": "Failing",
          "package": "logic-classes",
          "partial": "Failing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Failing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error idiom.  Rather like the error monad, but collect all\n | errors together \n\u003c/p\u003e",
          "module": "Data.Logic.Failing",
          "name": "Failing",
          "package": "logic-classes",
          "type": "data"
        },
        "index": {
          "description": "An error idiom Rather like the error monad but collect all errors together",
          "hierarchy": "Data Logic Failing",
          "module": "Data.Logic.Failing",
          "name": "Failing",
          "package": "logic-classes",
          "partial": "Failing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Failing.html#t:Failing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Failing",
          "name": "Failure",
          "package": "logic-classes",
          "signature": "Failure [ErrorMsg]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Failing",
          "module": "Data.Logic.Failing",
          "name": "Failure",
          "normalized": "Failure[ErrorMsg]",
          "package": "logic-classes",
          "partial": "Failure",
          "signature": "Failure[ErrorMsg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Failing.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Failing",
          "name": "Success",
          "package": "logic-classes",
          "signature": "Success a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Failing",
          "module": "Data.Logic.Failing",
          "name": "Success",
          "package": "logic-classes",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Failing.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Failing",
          "name": "failing",
          "package": "logic-classes",
          "signature": "([String] -\u003e b) -\u003e (a -\u003e b) -\u003e Failing a -\u003e b",
          "source": "src/Data-Logic-Failing.html#failing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Failing",
          "module": "Data.Logic.Failing",
          "name": "failing",
          "normalized": "([String]-\u003ea)-\u003e(b-\u003ea)-\u003eFailing b-\u003ea",
          "package": "logic-classes",
          "signature": "([String]-\u003eb)-\u003e(a-\u003eb)-\u003eFailing a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Failing.html#v:failing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DP",
          "name": "DP",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-DP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DP",
          "module": "Data.Logic.Harrison.DP",
          "name": "DP",
          "package": "logic-classes",
          "partial": "DP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DP",
          "name": "dpll",
          "package": "logic-classes",
          "signature": "Set (Set lit) -\u003e Failing Bool",
          "source": "src/Data-Logic-Harrison-DP.html#dpll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DP",
          "module": "Data.Logic.Harrison.DP",
          "name": "dpll",
          "normalized": "Set(Set a)-\u003eFailing Bool",
          "package": "logic-classes",
          "signature": "Set(Set lit)-\u003eFailing Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DP.html#v:dpll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DP",
          "name": "tests",
          "package": "logic-classes",
          "signature": "Test",
          "source": "src/Data-Logic-Harrison-DP.html#tests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DP",
          "module": "Data.Logic.Harrison.DP",
          "name": "tests",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DP.html#v:tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "DefCNF",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-DefCNF.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "DefCNF",
          "package": "logic-classes",
          "partial": "Def CNF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "Atom",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-DefCNF.html#Atom",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "Atom",
          "package": "logic-classes",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "NumAtom",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-DefCNF.html#NumAtom",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "NumAtom",
          "package": "logic-classes",
          "partial": "Num Atom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#t:NumAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "P",
          "package": "logic-classes",
          "signature": "P a",
          "source": "src/Data-Logic-Harrison-DefCNF.html#Atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "P",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "ai",
          "package": "logic-classes",
          "signature": "atom -\u003e N",
          "source": "src/Data-Logic-Harrison-DefCNF.html#ai",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "ai",
          "normalized": "a-\u003eN",
          "package": "logic-classes",
          "signature": "atom-\u003eN",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:ai"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "andcnf",
          "package": "logic-classes",
          "signature": "(pf, Map pf pf, Int) -\u003e (pf, Map pf pf, Int)",
          "source": "src/Data-Logic-Harrison-DefCNF.html#andcnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "andcnf",
          "normalized": "(a,Map a a,Int)-\u003e(a,Map a a,Int)",
          "package": "logic-classes",
          "signature": "(pf,Map pf pf,Int)-\u003e(pf,Map pf pf,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:andcnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "andcnf3",
          "package": "logic-classes",
          "signature": "(pf, Map pf pf, Int) -\u003e (pf, Map pf pf, Int)",
          "source": "src/Data-Logic-Harrison-DefCNF.html#andcnf3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "andcnf3",
          "normalized": "(a,Map a a,Int)-\u003e(a,Map a a,Int)",
          "package": "logic-classes",
          "signature": "(pf,Map pf pf,Int)-\u003e(pf,Map pf pf,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:andcnf3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defcnf1",
          "package": "logic-classes",
          "signature": "pf -\u003e pf",
          "source": "src/Data-Logic-Harrison-DefCNF.html#defcnf1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defcnf1",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "pf-\u003epf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:defcnf1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defcnf2",
          "package": "logic-classes",
          "signature": "pf -\u003e pf",
          "source": "src/Data-Logic-Harrison-DefCNF.html#defcnf2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defcnf2",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "pf-\u003epf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:defcnf2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defcnf3",
          "package": "logic-classes",
          "signature": "pf -\u003e pf",
          "source": "src/Data-Logic-Harrison-DefCNF.html#defcnf3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defcnf3",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "pf-\u003epf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:defcnf3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defcnfs",
          "package": "logic-classes",
          "signature": "pf -\u003e Set (Set lit)",
          "source": "src/Data-Logic-Harrison-DefCNF.html#defcnfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defcnfs",
          "normalized": "a-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "pf-\u003eSet(Set lit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:defcnfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defstep",
          "package": "logic-classes",
          "signature": "(pf -\u003e pf -\u003e pf) -\u003e (pf, pf) -\u003e (pf, Map pf pf, Int) -\u003e (pf, Map pf pf, Int)",
          "source": "src/Data-Logic-Harrison-DefCNF.html#defstep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "defstep",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(a,a)-\u003e(a,Map a a,Int)-\u003e(a,Map a a,Int)",
          "package": "logic-classes",
          "signature": "(pf-\u003epf-\u003epf)-\u003e(pf,pf)-\u003e(pf,Map pf pf,Int)-\u003e(pf,Map pf pf,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:defstep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "ma",
          "package": "logic-classes",
          "signature": "N -\u003e atom",
          "source": "src/Data-Logic-Harrison-DefCNF.html#ma",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "ma",
          "normalized": "N-\u003ea",
          "package": "logic-classes",
          "signature": "N-\u003eatom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:ma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "maincnf",
          "package": "logic-classes",
          "signature": "(pf, Map pf pf, Int) -\u003e (pf, Map pf pf, Int)",
          "source": "src/Data-Logic-Harrison-DefCNF.html#maincnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "maincnf",
          "normalized": "(a,Map a a,Int)-\u003e(a,Map a a,Int)",
          "package": "logic-classes",
          "signature": "(pf,Map pf pf,Int)-\u003e(pf,Map pf pf,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:maincnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "max_varindex",
          "package": "logic-classes",
          "signature": "atom -\u003e Int -\u003e Int",
          "source": "src/Data-Logic-Harrison-DefCNF.html#max_varindex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "max_varindex",
          "normalized": "a-\u003eInt-\u003eInt",
          "package": "logic-classes",
          "signature": "atom-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:max_varindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "mk_defcnf",
          "package": "logic-classes",
          "signature": "((pf, Map pf pf, Int) -\u003e (pf, Map pf pf, Int)) -\u003e pf -\u003e Set (Set lit)",
          "source": "src/Data-Logic-Harrison-DefCNF.html#mk_defcnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "mk_defcnf",
          "normalized": "((a,Map a a,Int)-\u003e(a,Map a a,Int))-\u003ea-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "((pf,Map pf pf,Int)-\u003e(pf,Map pf pf,Int))-\u003epf-\u003eSet(Set lit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:mk_defcnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "mkprop",
          "package": "logic-classes",
          "signature": "N -\u003e (pf, N)",
          "source": "src/Data-Logic-Harrison-DefCNF.html#mkprop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "mkprop",
          "normalized": "N-\u003e(a,N)",
          "package": "logic-classes",
          "signature": "N-\u003e(pf,N)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:mkprop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "orcnf",
          "package": "logic-classes",
          "signature": "(pf, Map pf pf, Int) -\u003e (pf, Map pf pf, Int)",
          "source": "src/Data-Logic-Harrison-DefCNF.html#orcnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "orcnf",
          "normalized": "(a,Map a a,Int)-\u003e(a,Map a a,Int)",
          "package": "logic-classes",
          "signature": "(pf,Map pf pf,Int)-\u003e(pf,Map pf pf,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:orcnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "subcnf",
          "package": "logic-classes",
          "signature": "((pf, Map pf pf, Int) -\u003e (pf, Map pf pf, Int)) -\u003e (pf -\u003e pf -\u003e pf) -\u003e pf -\u003e pf -\u003e (pf, Map pf pf, Int) -\u003e (pf, Map pf pf, Int)",
          "source": "src/Data-Logic-Harrison-DefCNF.html#subcnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison DefCNF",
          "module": "Data.Logic.Harrison.DefCNF",
          "name": "subcnf",
          "normalized": "((a,Map a a,Int)-\u003e(a,Map a a,Int))-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003e(a,Map a a,Int)-\u003e(a,Map a a,Int)",
          "package": "logic-classes",
          "signature": "((pf,Map pf pf,Int)-\u003e(pf,Map pf pf,Int))-\u003e(pf-\u003epf-\u003epf)-\u003epf-\u003epf-\u003e(pf,Map pf pf,Int)-\u003e(pf,Map pf pf,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-DefCNF.html#v:subcnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Equal",
          "name": "Equal",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Equal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Equal",
          "module": "Data.Logic.Harrison.Equal",
          "name": "Equal",
          "package": "logic-classes",
          "partial": "Equal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Equal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Equal",
          "name": "equalitize",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Equal.html#equalitize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Equal",
          "module": "Data.Logic.Harrison.Equal",
          "name": "equalitize",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Equal.html#v:equalitize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Equal",
          "name": "equivalence_axioms",
          "package": "logic-classes",
          "signature": "Set fof",
          "source": "src/Data-Logic-Harrison-Equal.html#equivalence_axioms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Equal",
          "module": "Data.Logic.Harrison.Equal",
          "name": "equivalence_axioms",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Equal.html#v:equivalence_axioms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Equal",
          "name": "function_congruence",
          "package": "logic-classes",
          "signature": "(f, Int) -\u003e Set fof",
          "source": "src/Data-Logic-Harrison-Equal.html#function_congruence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Equal",
          "module": "Data.Logic.Harrison.Equal",
          "name": "function_congruence",
          "normalized": "(a,Int)-\u003eSet b",
          "package": "logic-classes",
          "signature": "(f,Int)-\u003eSet fof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Equal.html#v:function_congruence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Equal",
          "name": "functions'",
          "package": "logic-classes",
          "signature": "(atom -\u003e Set (f, Int)) -\u003e formula -\u003e Set (f, Int)",
          "source": "src/Data-Logic-Harrison-Equal.html#functions%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Equal",
          "module": "Data.Logic.Harrison.Equal",
          "name": "functions'",
          "normalized": "(a-\u003eSet(b,Int))-\u003ec-\u003eSet(b,Int)",
          "package": "logic-classes",
          "signature": "(atom-\u003eSet(f,Int))-\u003eformula-\u003eSet(f,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Equal.html#v:functions-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Equal",
          "name": "predicate_congruence",
          "package": "logic-classes",
          "signature": "PredicateName p -\u003e Set fof",
          "source": "src/Data-Logic-Harrison-Equal.html#predicate_congruence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Equal",
          "module": "Data.Logic.Harrison.Equal",
          "name": "predicate_congruence",
          "normalized": "PredicateName a-\u003eSet b",
          "package": "logic-classes",
          "signature": "PredicateName p-\u003eSet fof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Equal.html#v:predicate_congruence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Equal",
          "name": "predicates",
          "package": "logic-classes",
          "signature": "formula -\u003e Set (PredicateName p)",
          "source": "src/Data-Logic-Harrison-Equal.html#predicates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Equal",
          "module": "Data.Logic.Harrison.Equal",
          "name": "predicates",
          "normalized": "a-\u003eSet(PredicateName b)",
          "package": "logic-classes",
          "signature": "formula-\u003eSet(PredicateName p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Equal.html#v:predicates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.FOL",
          "name": "FOL",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-FOL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison FOL",
          "module": "Data.Logic.Harrison.FOL",
          "name": "FOL",
          "package": "logic-classes",
          "partial": "FOL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-FOL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.FOL",
          "name": "eval",
          "package": "logic-classes",
          "signature": "formula -\u003e (atom -\u003e Bool) -\u003e Bool",
          "source": "src/Data-Logic-Harrison-FOL.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison FOL",
          "module": "Data.Logic.Harrison.FOL",
          "name": "eval",
          "normalized": "a-\u003e(b-\u003eBool)-\u003eBool",
          "package": "logic-classes",
          "signature": "formula-\u003e(atom-\u003eBool)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-FOL.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the variables that occur free in a formula.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.FOL",
          "name": "fv",
          "package": "logic-classes",
          "signature": "formula -\u003e Set v",
          "source": "src/Data-Logic-Harrison-FOL.html#fv",
          "type": "function"
        },
        "index": {
          "description": "Return the variables that occur free in formula",
          "hierarchy": "Data Logic Harrison FOL",
          "module": "Data.Logic.Harrison.FOL",
          "name": "fv",
          "normalized": "a-\u003eSet b",
          "package": "logic-classes",
          "signature": "formula-\u003eSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-FOL.html#v:fv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.FOL",
          "name": "generalize",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-FOL.html#generalize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison FOL",
          "module": "Data.Logic.Harrison.FOL",
          "name": "generalize",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-FOL.html#v:generalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.FOL",
          "name": "list_conj",
          "package": "logic-classes",
          "signature": "Set formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-FOL.html#list_conj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison FOL",
          "module": "Data.Logic.Harrison.FOL",
          "name": "list_conj",
          "normalized": "Set a-\u003ea",
          "package": "logic-classes",
          "signature": "Set formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-FOL.html#v:list_conj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.FOL",
          "name": "list_disj",
          "package": "logic-classes",
          "signature": "Set formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-FOL.html#list_disj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison FOL",
          "module": "Data.Logic.Harrison.FOL",
          "name": "list_disj",
          "normalized": "Set a-\u003ea",
          "package": "logic-classes",
          "signature": "Set formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-FOL.html#v:list_disj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.FOL",
          "name": "subst",
          "package": "logic-classes",
          "signature": "Map v term -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-FOL.html#subst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison FOL",
          "module": "Data.Logic.Harrison.FOL",
          "name": "subst",
          "normalized": "Map a b-\u003ec-\u003ec",
          "package": "logic-classes",
          "signature": "Map v term-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-FOL.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all variables occurring in a formula.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.FOL",
          "name": "var",
          "package": "logic-classes",
          "signature": "formula -\u003e Set v",
          "source": "src/Data-Logic-Harrison-FOL.html#var",
          "type": "function"
        },
        "index": {
          "description": "Return all variables occurring in formula",
          "hierarchy": "Data Logic Harrison FOL",
          "module": "Data.Logic.Harrison.FOL",
          "name": "var",
          "normalized": "a-\u003eSet b",
          "package": "logic-classes",
          "signature": "formula-\u003eSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-FOL.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "FirstOrder",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Formulas-FirstOrder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas FirstOrder",
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "FirstOrder",
          "package": "logic-classes",
          "partial": "First Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-FirstOrder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "antecedent",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Formulas-FirstOrder.html#antecedent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas FirstOrder",
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "antecedent",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-FirstOrder.html#v:antecedent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "atom_union",
          "package": "logic-classes",
          "signature": "(atom -\u003e Set b) -\u003e formula -\u003e Set b",
          "source": "src/Data-Logic-Harrison-Formulas-FirstOrder.html#atom_union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas FirstOrder",
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "atom_union",
          "normalized": "(a-\u003eSet b)-\u003ec-\u003eSet b",
          "package": "logic-classes",
          "signature": "(atom-\u003eSet b)-\u003eformula-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-FirstOrder.html#v:atom_union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "consequent",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Formulas-FirstOrder.html#consequent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas FirstOrder",
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "consequent",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-FirstOrder.html#v:consequent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "on_atoms",
          "package": "logic-classes",
          "signature": "(atom -\u003e formula) -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Formulas-FirstOrder.html#on_atoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas FirstOrder",
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "on_atoms",
          "normalized": "(a-\u003eb)-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "(atom-\u003eformula)-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-FirstOrder.html#v:on_atoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "over_atoms",
          "package": "logic-classes",
          "signature": "(atom -\u003e b -\u003e b) -\u003e formula -\u003e b -\u003e b",
          "source": "src/Data-Logic-Harrison-Formulas-FirstOrder.html#over_atoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas FirstOrder",
          "module": "Data.Logic.Harrison.Formulas.FirstOrder",
          "name": "over_atoms",
          "normalized": "(a-\u003eb-\u003eb)-\u003ec-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "(atom-\u003eb-\u003eb)-\u003eformula-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-FirstOrder.html#v:over_atoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "Propositional",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Formulas-Propositional.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas Propositional",
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "Propositional",
          "package": "logic-classes",
          "partial": "Propositional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-Propositional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "antecedent",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Formulas-Propositional.html#antecedent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas Propositional",
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "antecedent",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-Propositional.html#v:antecedent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "atom_union",
          "package": "logic-classes",
          "signature": "(atomic -\u003e Set b) -\u003e formula -\u003e Set b",
          "source": "src/Data-Logic-Harrison-Formulas-Propositional.html#atom_union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas Propositional",
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "atom_union",
          "normalized": "(a-\u003eSet b)-\u003ec-\u003eSet b",
          "package": "logic-classes",
          "signature": "(atomic-\u003eSet b)-\u003eformula-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-Propositional.html#v:atom_union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "consequent",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Formulas-Propositional.html#consequent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas Propositional",
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "consequent",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-Propositional.html#v:consequent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "on_atoms",
          "package": "logic-classes",
          "signature": "(atomic -\u003e formula) -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Formulas-Propositional.html#on_atoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas Propositional",
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "on_atoms",
          "normalized": "(a-\u003eb)-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "(atomic-\u003eformula)-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-Propositional.html#v:on_atoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "over_atoms",
          "package": "logic-classes",
          "signature": "(atomic -\u003e b -\u003e b) -\u003e formula -\u003e b -\u003e b",
          "source": "src/Data-Logic-Harrison-Formulas-Propositional.html#over_atoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Formulas Propositional",
          "module": "Data.Logic.Harrison.Formulas.Propositional",
          "name": "over_atoms",
          "normalized": "(a-\u003eb-\u003eb)-\u003ec-\u003eb-\u003eb",
          "package": "logic-classes",
          "signature": "(atomic-\u003eb-\u003eb)-\u003eformula-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Formulas-Propositional.html#v:over_atoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "Herbrand",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Herbrand.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "Herbrand",
          "package": "logic-classes",
          "partial": "Herbrand",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "davisputnam",
          "package": "logic-classes",
          "signature": "(atom -\u003e Set (f, Int)) -\u003e fof -\u003e Failing Int",
          "source": "src/Data-Logic-Harrison-Herbrand.html#davisputnam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "davisputnam",
          "normalized": "(a-\u003eSet(b,Int))-\u003ec-\u003eFailing Int",
          "package": "logic-classes",
          "signature": "(atom-\u003eSet(f,Int))-\u003efof-\u003eFailing Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:davisputnam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "davisputnam'",
          "package": "logic-classes",
          "signature": "(atom -\u003e Set (f, Int)) -\u003e fof -\u003e Failing Int",
          "source": "src/Data-Logic-Harrison-Herbrand.html#davisputnam%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "davisputnam'",
          "normalized": "(a-\u003eSet(b,Int))-\u003ec-\u003eFailing Int",
          "package": "logic-classes",
          "signature": "(atom-\u003eSet(f,Int))-\u003efof-\u003eFailing Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:davisputnam-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "dp_loop",
          "package": "logic-classes",
          "signature": "Set (Set lit) -\u003e Set term -\u003e Set (f, Int) -\u003e [v] -\u003e Int -\u003e Set (Set lit) -\u003e Set [term] -\u003e Set [term] -\u003e Failing (Set [term])",
          "source": "src/Data-Logic-Harrison-Herbrand.html#dp_loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "dp_loop",
          "normalized": "Set(Set a)-\u003eSet b-\u003eSet(c,Int)-\u003e[d]-\u003eInt-\u003eSet(Set a)-\u003eSet[b]-\u003eSet[b]-\u003eFailing(Set[b])",
          "package": "logic-classes",
          "signature": "Set(Set lit)-\u003eSet term-\u003eSet(f,Int)-\u003e[v]-\u003eInt-\u003eSet(Set lit)-\u003eSet[term]-\u003eSet[term]-\u003eFailing(Set[term])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:dp_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "dp_mfn",
          "package": "logic-classes",
          "signature": "Set (Set a) -\u003e (a -\u003e b) -\u003e Set (Set b) -\u003e Set (Set b)",
          "source": "src/Data-Logic-Harrison-Herbrand.html#dp_mfn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "dp_mfn",
          "normalized": "Set(Set a)-\u003e(a-\u003eb)-\u003eSet(Set b)-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "Set(Set a)-\u003e(a-\u003eb)-\u003eSet(Set b)-\u003eSet(Set b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:dp_mfn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "dp_refine",
          "package": "logic-classes",
          "signature": "Set (Set lit) -\u003e [v] -\u003e Set [term] -\u003e Set [term] -\u003e Failing (Set [term])",
          "source": "src/Data-Logic-Harrison-Herbrand.html#dp_refine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "dp_refine",
          "normalized": "Set(Set a)-\u003e[b]-\u003eSet[c]-\u003eSet[c]-\u003eFailing(Set[c])",
          "package": "logic-classes",
          "signature": "Set(Set lit)-\u003e[v]-\u003eSet[term]-\u003eSet[term]-\u003eFailing(Set[term])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:dp_refine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "dp_refine_loop",
          "package": "logic-classes",
          "signature": "Set (Set lit) -\u003e Set term -\u003e Set (f, Int) -\u003e [v] -\u003e Int -\u003e Set (Set lit) -\u003e Set [term] -\u003e Set [term] -\u003e Failing (Set [term])",
          "source": "src/Data-Logic-Harrison-Herbrand.html#dp_refine_loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "dp_refine_loop",
          "normalized": "Set(Set a)-\u003eSet b-\u003eSet(c,Int)-\u003e[d]-\u003eInt-\u003eSet(Set a)-\u003eSet[b]-\u003eSet[b]-\u003eFailing(Set[b])",
          "package": "logic-classes",
          "signature": "Set(Set lit)-\u003eSet term-\u003eSet(f,Int)-\u003e[v]-\u003eInt-\u003eSet(Set lit)-\u003eSet[term]-\u003eSet[term]-\u003eFailing(Set[term])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:dp_refine_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "gilmore",
          "package": "logic-classes",
          "signature": "(atom -\u003e Set (f, Int)) -\u003e fof -\u003e Failing Int",
          "source": "src/Data-Logic-Harrison-Herbrand.html#gilmore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "gilmore",
          "normalized": "(a-\u003eSet(b,Int))-\u003ec-\u003eFailing Int",
          "package": "logic-classes",
          "signature": "(atom-\u003eSet(f,Int))-\u003efof-\u003eFailing Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:gilmore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "gilmore_loop",
          "package": "logic-classes",
          "signature": "Set (Set lit) -\u003e Set term -\u003e Set (f, Int) -\u003e [v] -\u003e Int -\u003e Set (Set lit) -\u003e Set [term] -\u003e Set [term] -\u003e Failing (Set [term])",
          "source": "src/Data-Logic-Harrison-Herbrand.html#gilmore_loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "gilmore_loop",
          "normalized": "Set(Set a)-\u003eSet b-\u003eSet(c,Int)-\u003e[d]-\u003eInt-\u003eSet(Set a)-\u003eSet[b]-\u003eSet[b]-\u003eFailing(Set[b])",
          "package": "logic-classes",
          "signature": "Set(Set lit)-\u003eSet term-\u003eSet(f,Int)-\u003e[v]-\u003eInt-\u003eSet(Set lit)-\u003eSet[term]-\u003eSet[term]-\u003eFailing(Set[term])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:gilmore_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "groundterms",
          "package": "logic-classes",
          "signature": "Set term -\u003e Set (f, Int) -\u003e Int -\u003e Set term",
          "source": "src/Data-Logic-Harrison-Herbrand.html#groundterms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "groundterms",
          "normalized": "Set a-\u003eSet(b,Int)-\u003eInt-\u003eSet a",
          "package": "logic-classes",
          "signature": "Set term-\u003eSet(f,Int)-\u003eInt-\u003eSet term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:groundterms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "groundtuples",
          "package": "logic-classes",
          "signature": "Set term -\u003e Set (f, Int) -\u003e Int -\u003e Int -\u003e Set [term]",
          "source": "src/Data-Logic-Harrison-Herbrand.html#groundtuples",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "groundtuples",
          "normalized": "Set a-\u003eSet(b,Int)-\u003eInt-\u003eInt-\u003eSet[a]",
          "package": "logic-classes",
          "signature": "Set term-\u003eSet(f,Int)-\u003eInt-\u003eInt-\u003eSet[term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:groundtuples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "herbfuns",
          "package": "logic-classes",
          "signature": "(atom -\u003e Set (f, Int)) -\u003e pf -\u003e (Set (f, Int), Set (f, Int))",
          "source": "src/Data-Logic-Harrison-Herbrand.html#herbfuns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "herbfuns",
          "normalized": "(a-\u003eSet(b,Int))-\u003ec-\u003e(Set(b,Int),Set(b,Int))",
          "package": "logic-classes",
          "signature": "(atom-\u003eSet(f,Int))-\u003epf-\u003e(Set(f,Int),Set(f,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:herbfuns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "herbloop",
          "package": "logic-classes",
          "signature": "(Set (Set lit) -\u003e (lit -\u003e lit) -\u003e Set (Set lit) -\u003e Set (Set lit)) -\u003e (Set (Set lit) -\u003e Failing Bool) -\u003e Set (Set lit) -\u003e Set term -\u003e Set (f, Int) -\u003e [v] -\u003e Int -\u003e Set (Set lit) -\u003e Set [term] -\u003e Set [term] -\u003e Failing (Set [term])",
          "source": "src/Data-Logic-Harrison-Herbrand.html#herbloop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "herbloop",
          "normalized": "(Set(Set a)-\u003e(a-\u003ea)-\u003eSet(Set a)-\u003eSet(Set a))-\u003e(Set(Set a)-\u003eFailing Bool)-\u003eSet(Set a)-\u003eSet b-\u003eSet(c,Int)-\u003e[d]-\u003eInt-\u003eSet(Set a)-\u003eSet[b]-\u003eSet[b]-\u003eFailing(Set[b])",
          "package": "logic-classes",
          "signature": "(Set(Set lit)-\u003e(lit-\u003elit)-\u003eSet(Set lit)-\u003eSet(Set lit))-\u003e(Set(Set lit)-\u003eFailing Bool)-\u003eSet(Set lit)-\u003eSet term-\u003eSet(f,Int)-\u003e[v]-\u003eInt-\u003eSet(Set lit)-\u003eSet[term]-\u003eSet[term]-\u003eFailing(Set[term])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:herbloop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "pholds",
          "package": "logic-classes",
          "signature": "Map atom Bool -\u003e formula -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Herbrand.html#pholds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "pholds",
          "normalized": "Map a Bool-\u003eb-\u003eBool",
          "package": "logic-classes",
          "signature": "Map atom Bool-\u003eformula-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:pholds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "subst'",
          "package": "logic-classes",
          "signature": "Map v term -\u003e lit -\u003e lit",
          "source": "src/Data-Logic-Harrison-Herbrand.html#subst%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Herbrand",
          "module": "Data.Logic.Harrison.Herbrand",
          "name": "subst'",
          "normalized": "Map a b-\u003ec-\u003ec",
          "package": "logic-classes",
          "signature": "Map v term-\u003elit-\u003elit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Herbrand.html#v:subst-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "Lib",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Lib.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "Lib",
          "package": "logic-classes",
          "partial": "Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "(|-\u003e)",
          "package": "logic-classes",
          "signature": "k -\u003e a -\u003e Map k a -\u003e Map k a",
          "source": "src/Data-Logic-Harrison-Lib.html#%7C-%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "(|-\u003e) |-\u003e",
          "normalized": "a-\u003eb-\u003eMap a b-\u003eMap a b",
          "package": "logic-classes",
          "signature": "k-\u003ea-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:-124--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "(|=\u003e)",
          "package": "logic-classes",
          "signature": "k -\u003e a -\u003e Map k a",
          "source": "src/Data-Logic-Harrison-Lib.html#%7C%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "(|=\u003e) |=\u003e",
          "normalized": "a-\u003eb-\u003eMap a b",
          "package": "logic-classes",
          "signature": "k-\u003ea-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:-124--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "(∅)",
          "package": "logic-classes",
          "signature": "Set a",
          "source": "src/Data-Logic-Harrison-Lib.html#%2205",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "(∅) ∅",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:-8709-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "allnonemptysubsets",
          "package": "logic-classes",
          "signature": "Set a -\u003e Set (Set a)",
          "source": "src/Data-Logic-Harrison-Lib.html#allnonemptysubsets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "allnonemptysubsets",
          "normalized": "Set a-\u003eSet(Set a)",
          "package": "logic-classes",
          "signature": "Set a-\u003eSet(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:allnonemptysubsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "allpairs",
          "package": "logic-classes",
          "signature": "(a -\u003e b -\u003e c) -\u003e Set a -\u003e Set b -\u003e Set c",
          "source": "src/Data-Logic-Harrison-Lib.html#allpairs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "allpairs",
          "normalized": "(a-\u003eb-\u003ec)-\u003eSet a-\u003eSet b-\u003eSet c",
          "package": "logic-classes",
          "signature": "(a-\u003eb-\u003ec)-\u003eSet a-\u003eSet b-\u003eSet c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:allpairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "allsets",
          "package": "logic-classes",
          "signature": "a -\u003e Set b -\u003e Set (Set b)",
          "source": "src/Data-Logic-Harrison-Lib.html#allsets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "allsets",
          "normalized": "a-\u003eSet b-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "a-\u003eSet b-\u003eSet(Set b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:allsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "allsubsets",
          "package": "logic-classes",
          "signature": "Set a -\u003e Set (Set a)",
          "source": "src/Data-Logic-Harrison-Lib.html#allsubsets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "allsubsets",
          "normalized": "Set a-\u003eSet(Set a)",
          "package": "logic-classes",
          "signature": "Set a-\u003eSet(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:allsubsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "apply",
          "package": "logic-classes",
          "signature": "Map k a -\u003e k -\u003e Maybe a",
          "source": "src/Data-Logic-Harrison-Lib.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "apply",
          "normalized": "Map a b-\u003ea-\u003eMaybe b",
          "package": "logic-classes",
          "signature": "Map k a-\u003ek-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "can",
          "package": "logic-classes",
          "signature": "(t -\u003e Failing a) -\u003e t -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Lib.html#can",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "can",
          "normalized": "(a-\u003eFailing b)-\u003ea-\u003eBool",
          "package": "logic-classes",
          "signature": "(t-\u003eFailing a)-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:can"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "defined",
          "package": "logic-classes",
          "signature": "Map t a -\u003e t -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Lib.html#defined",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "defined",
          "normalized": "Map a b-\u003ea-\u003eBool",
          "package": "logic-classes",
          "signature": "Map t a-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:defined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "distrib'",
          "package": "logic-classes",
          "signature": "Set (Set a) -\u003e Set (Set a) -\u003e Set (Set a)",
          "source": "src/Data-Logic-Harrison-Lib.html#distrib%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "distrib'",
          "normalized": "Set(Set a)-\u003eSet(Set a)-\u003eSet(Set a)",
          "package": "logic-classes",
          "signature": "Set(Set a)-\u003eSet(Set a)-\u003eSet(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:distrib-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "exists",
          "package": "logic-classes",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Lib.html#exists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "exists",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "logic-classes",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "fpf",
          "package": "logic-classes",
          "signature": "Map a b -\u003e a -\u003e Maybe b",
          "source": "src/Data-Logic-Harrison-Lib.html#fpf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "fpf",
          "normalized": "Map a b-\u003ea-\u003eMaybe b",
          "package": "logic-classes",
          "signature": "Map a b-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:fpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "image",
          "package": "logic-classes",
          "signature": "(a -\u003e b) -\u003e Set a -\u003e Set b",
          "source": "src/Data-Logic-Harrison-Lib.html#image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "image",
          "normalized": "(a-\u003eb)-\u003eSet a-\u003eSet b",
          "package": "logic-classes",
          "signature": "(a-\u003eb)-\u003eSet a-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "mapfilter",
          "package": "logic-classes",
          "signature": "(a -\u003e Failing b) -\u003e [a] -\u003e [b]",
          "source": "src/Data-Logic-Harrison-Lib.html#mapfilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "mapfilter",
          "normalized": "(a-\u003eFailing b)-\u003e[a]-\u003e[b]",
          "package": "logic-classes",
          "signature": "(a-\u003eFailing b)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:mapfilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "maximize",
          "package": "logic-classes",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e Maybe a",
          "source": "src/Data-Logic-Harrison-Lib.html#maximize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "maximize",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003eMaybe a",
          "package": "logic-classes",
          "signature": "(a-\u003eb)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "maximize'",
          "package": "logic-classes",
          "signature": "(a -\u003e b) -\u003e Set a -\u003e Maybe a",
          "source": "src/Data-Logic-Harrison-Lib.html#maximize%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "maximize'",
          "normalized": "(a-\u003eb)-\u003eSet a-\u003eMaybe a",
          "package": "logic-classes",
          "signature": "(a-\u003eb)-\u003eSet a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:maximize-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "minimize",
          "package": "logic-classes",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e Maybe a",
          "source": "src/Data-Logic-Harrison-Lib.html#minimize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "minimize",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003eMaybe a",
          "package": "logic-classes",
          "signature": "(a-\u003eb)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "minimize'",
          "package": "logic-classes",
          "signature": "(a -\u003e b) -\u003e Set a -\u003e Maybe a",
          "source": "src/Data-Logic-Harrison-Lib.html#minimize%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "minimize'",
          "normalized": "(a-\u003eb)-\u003eSet a-\u003eMaybe a",
          "package": "logic-classes",
          "signature": "(a-\u003eb)-\u003eSet a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:minimize-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "optimize",
          "package": "logic-classes",
          "signature": "forall a b.  (b -\u003e b -\u003e Bool) -\u003e (a -\u003e b) -\u003e [a] -\u003e Maybe a",
          "source": "src/Data-Logic-Harrison-Lib.html#optimize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "optimize",
          "normalized": "a b c(d-\u003ed-\u003eBool)-\u003e(b-\u003ed)-\u003e[b]-\u003eMaybe b",
          "package": "logic-classes",
          "signature": "forall a b.(b-\u003eb-\u003eBool)-\u003e(a-\u003eb)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "optimize'",
          "package": "logic-classes",
          "signature": "forall a b.  (b -\u003e b -\u003e Bool) -\u003e (a -\u003e b) -\u003e Set a -\u003e Maybe a",
          "source": "src/Data-Logic-Harrison-Lib.html#optimize%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "optimize'",
          "normalized": "a b c(d-\u003ed-\u003eBool)-\u003e(b-\u003ed)-\u003eSet b-\u003eMaybe b",
          "package": "logic-classes",
          "signature": "forall a b.(b-\u003eb-\u003eBool)-\u003e(a-\u003eb)-\u003eSet a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:optimize-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "setAll",
          "package": "logic-classes",
          "signature": "(a -\u003e Bool) -\u003e Set a -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Lib.html#setAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "setAll",
          "normalized": "(a-\u003eBool)-\u003eSet a-\u003eBool",
          "package": "logic-classes",
          "partial": "All",
          "signature": "(a-\u003eBool)-\u003eSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:setAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "setAny",
          "package": "logic-classes",
          "signature": "(a -\u003e Bool) -\u003e Set a -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Lib.html#setAny",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "setAny",
          "normalized": "(a-\u003eBool)-\u003eSet a-\u003eBool",
          "package": "logic-classes",
          "partial": "Any",
          "signature": "(a-\u003eBool)-\u003eSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:setAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "setmapfilter",
          "package": "logic-classes",
          "signature": "(a -\u003e Failing b) -\u003e Set a -\u003e Set b",
          "source": "src/Data-Logic-Harrison-Lib.html#setmapfilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "setmapfilter",
          "normalized": "(a-\u003eFailing b)-\u003eSet a-\u003eSet b",
          "package": "logic-classes",
          "signature": "(a-\u003eFailing b)-\u003eSet a-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:setmapfilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "settryfind",
          "package": "logic-classes",
          "signature": "(t -\u003e Failing a) -\u003e Set t -\u003e Failing a",
          "source": "src/Data-Logic-Harrison-Lib.html#settryfind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "settryfind",
          "normalized": "(a-\u003eFailing b)-\u003eSet a-\u003eFailing b",
          "package": "logic-classes",
          "signature": "(t-\u003eFailing a)-\u003eSet t-\u003eFailing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:settryfind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "tests",
          "package": "logic-classes",
          "signature": "Test",
          "source": "src/Data-Logic-Harrison-Lib.html#tests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "tests",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "tryApplyD",
          "package": "logic-classes",
          "signature": "Map k a -\u003e k -\u003e a -\u003e a",
          "source": "src/Data-Logic-Harrison-Lib.html#tryApplyD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "tryApplyD",
          "normalized": "Map a b-\u003ea-\u003eb-\u003eb",
          "package": "logic-classes",
          "partial": "Apply",
          "signature": "Map k a-\u003ek-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:tryApplyD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Lib",
          "name": "tryfind",
          "package": "logic-classes",
          "signature": "(t -\u003e Failing a) -\u003e [t] -\u003e Failing a",
          "source": "src/Data-Logic-Harrison-Lib.html#tryfind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Lib",
          "module": "Data.Logic.Harrison.Lib",
          "name": "tryfind",
          "normalized": "(a-\u003eFailing b)-\u003e[a]-\u003eFailing b",
          "package": "logic-classes",
          "signature": "(t-\u003eFailing a)-\u003e[t]-\u003eFailing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Lib.html#v:tryfind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Meson",
          "name": "Meson",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Meson.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Meson",
          "module": "Data.Logic.Harrison.Meson",
          "name": "Meson",
          "package": "logic-classes",
          "partial": "Meson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Meson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Meson",
          "name": "contrapositives",
          "package": "logic-classes",
          "signature": "Set fof -\u003e Set (Set fof, fof)",
          "source": "src/Data-Logic-Harrison-Meson.html#contrapositives",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Meson",
          "module": "Data.Logic.Harrison.Meson",
          "name": "contrapositives",
          "normalized": "Set a-\u003eSet(Set a,a)",
          "package": "logic-classes",
          "signature": "Set fof-\u003eSet(Set fof,fof)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Meson.html#v:contrapositives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Meson",
          "name": "meson",
          "package": "logic-classes",
          "signature": "Maybe Int -\u003e fof -\u003e SkolemT v term m (Set (Failing ((Map v term, Int, Int), Int)))",
          "source": "src/Data-Logic-Harrison-Meson.html#meson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Meson",
          "module": "Data.Logic.Harrison.Meson",
          "name": "meson",
          "normalized": "Maybe Int-\u003ea-\u003eSkolemT b c d(Set(Failing((Map b c,Int,Int),Int)))",
          "package": "logic-classes",
          "signature": "Maybe Int-\u003efof-\u003eSkolemT v term m(Set(Failing((Map v term,Int,Int),Int)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Meson.html#v:meson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Meson",
          "name": "mexpand",
          "package": "logic-classes",
          "signature": "Set (Set fof, fof) -\u003e Set fof -\u003e fof -\u003e ((Map v term, Int, Int) -\u003e Failing (Map v term, Int, Int)) -\u003e (Map v term, Int, Int) -\u003e Failing (Map v term, Int, Int)",
          "source": "src/Data-Logic-Harrison-Meson.html#mexpand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Meson",
          "module": "Data.Logic.Harrison.Meson",
          "name": "mexpand",
          "normalized": "Set(Set a,a)-\u003eSet a-\u003ea-\u003e((Map b c,Int,Int)-\u003eFailing(Map b c,Int,Int))-\u003e(Map b c,Int,Int)-\u003eFailing(Map b c,Int,Int)",
          "package": "logic-classes",
          "signature": "Set(Set fof,fof)-\u003eSet fof-\u003efof-\u003e((Map v term,Int,Int)-\u003eFailing(Map v term,Int,Int))-\u003e(Map v term,Int,Int)-\u003eFailing(Map v term,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Meson.html#v:mexpand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Meson",
          "name": "puremeson",
          "package": "logic-classes",
          "signature": "Maybe Int -\u003e fof -\u003e Failing ((Map v term, Int, Int), Int)",
          "source": "src/Data-Logic-Harrison-Meson.html#puremeson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Meson",
          "module": "Data.Logic.Harrison.Meson",
          "name": "puremeson",
          "normalized": "Maybe Int-\u003ea-\u003eFailing((Map b c,Int,Int),Int)",
          "package": "logic-classes",
          "signature": "Maybe Int-\u003efof-\u003eFailing((Map v term,Int,Int),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Meson.html#v:puremeson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersions of the normal form functions in Prop for FirstOrderFormula.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Logic.Harrison.Normal",
          "name": "Normal",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Normal.html",
          "type": "module"
        },
        "index": {
          "description": "Versions of the normal form functions in Prop for FirstOrderFormula",
          "hierarchy": "Data Logic Harrison Normal",
          "module": "Data.Logic.Harrison.Normal",
          "name": "Normal",
          "package": "logic-classes",
          "partial": "Normal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Normal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Normal",
          "name": "simpcnf",
          "package": "logic-classes",
          "signature": "fof -\u003e Set (Set fof)",
          "source": "src/Data-Logic-Harrison-Normal.html#simpcnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Normal",
          "module": "Data.Logic.Harrison.Normal",
          "name": "simpcnf",
          "normalized": "a-\u003eSet(Set a)",
          "package": "logic-classes",
          "signature": "fof-\u003eSet(Set fof)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Normal.html#v:simpcnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Normal",
          "name": "simpcnf'",
          "package": "logic-classes",
          "signature": "fof -\u003e Set (Set lit)",
          "source": "src/Data-Logic-Harrison-Normal.html#simpcnf%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Normal",
          "module": "Data.Logic.Harrison.Normal",
          "name": "simpcnf'",
          "normalized": "a-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "fof-\u003eSet(Set lit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Normal.html#v:simpcnf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Normal",
          "name": "simpdnf",
          "package": "logic-classes",
          "signature": "fof -\u003e Set (Set fof)",
          "source": "src/Data-Logic-Harrison-Normal.html#simpdnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Normal",
          "module": "Data.Logic.Harrison.Normal",
          "name": "simpdnf",
          "normalized": "a-\u003eSet(Set a)",
          "package": "logic-classes",
          "signature": "fof-\u003eSet(Set fof)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Normal.html#v:simpdnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Normal",
          "name": "simpdnf'",
          "package": "logic-classes",
          "signature": "fof -\u003e Set (Set lit)",
          "source": "src/Data-Logic-Harrison-Normal.html#simpdnf%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Normal",
          "module": "Data.Logic.Harrison.Normal",
          "name": "simpdnf'",
          "normalized": "a-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "fof-\u003eSet(Set lit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Normal.html#v:simpdnf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Normal",
          "name": "trivial",
          "package": "logic-classes",
          "signature": "Set lit -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Normal.html#trivial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Normal",
          "module": "Data.Logic.Harrison.Normal",
          "name": "trivial",
          "normalized": "Set a-\u003eBool",
          "package": "logic-classes",
          "signature": "Set lit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Normal.html#v:trivial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prolog",
          "name": "Prolog",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Prolog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prolog",
          "module": "Data.Logic.Harrison.Prolog",
          "name": "Prolog",
          "package": "logic-classes",
          "partial": "Prolog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prolog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prolog",
          "name": "renamerule",
          "package": "logic-classes",
          "signature": "Int -\u003e (Set fof, fof) -\u003e ((Set fof, fof), Int)",
          "source": "src/Data-Logic-Harrison-Prolog.html#renamerule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prolog",
          "module": "Data.Logic.Harrison.Prolog",
          "name": "renamerule",
          "normalized": "Int-\u003e(Set a,a)-\u003e((Set a,a),Int)",
          "package": "logic-classes",
          "signature": "Int-\u003e(Set fof,fof)-\u003e((Set fof,fof),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prolog.html#v:renamerule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "Prop",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Prop.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "Prop",
          "package": "logic-classes",
          "partial": "Prop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "TruthTable",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Prop.html#TruthTable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "TruthTable",
          "package": "logic-classes",
          "partial": "Truth Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#t:TruthTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "TruthTableRow",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Prop.html#TruthTableRow",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "TruthTableRow",
          "package": "logic-classes",
          "partial": "Truth Table Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#t:TruthTableRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "allSatValuations",
          "package": "logic-classes",
          "signature": "(Map a Bool -\u003e Bool) -\u003e Map a Bool -\u003e Set a -\u003e [Map a Bool]",
          "source": "src/Data-Logic-Harrison-Prop.html#allSatValuations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "allSatValuations",
          "normalized": "(Map a Bool-\u003eBool)-\u003eMap a Bool-\u003eSet a-\u003e[Map a Bool]",
          "package": "logic-classes",
          "partial": "Sat Valuations",
          "signature": "(Map a Bool-\u003eBool)-\u003eMap a Bool-\u003eSet a-\u003e[Map a Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:allSatValuations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "atoms",
          "package": "logic-classes",
          "signature": "formula -\u003e Set atomic",
          "source": "src/Data-Logic-Harrison-Prop.html#atoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "atoms",
          "normalized": "a-\u003eSet b",
          "package": "logic-classes",
          "signature": "formula-\u003eSet atomic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:atoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "cnf",
          "package": "logic-classes",
          "signature": "Set (Set lit) -\u003e pf",
          "source": "src/Data-Logic-Harrison-Prop.html#cnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "cnf",
          "normalized": "Set(Set a)-\u003eb",
          "package": "logic-classes",
          "signature": "Set(Set lit)-\u003epf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:cnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "cnf'",
          "package": "logic-classes",
          "signature": "pf -\u003e pf",
          "source": "src/Data-Logic-Harrison-Prop.html#cnf%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "cnf'",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "pf-\u003epf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:cnf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "distrib",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#distrib",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "distrib",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:distrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "dnf",
          "package": "logic-classes",
          "signature": "Set (Set lit) -\u003e pf",
          "source": "src/Data-Logic-Harrison-Prop.html#dnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "dnf",
          "normalized": "Set(Set a)-\u003eb",
          "package": "logic-classes",
          "signature": "Set(Set lit)-\u003epf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:dnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "dnf'",
          "package": "logic-classes",
          "signature": "pf -\u003e pf",
          "source": "src/Data-Logic-Harrison-Prop.html#dnf%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "dnf'",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "pf-\u003epf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:dnf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "dnf0",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#dnf0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "dnf0",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:dnf0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "dual",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "dual",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "eval",
          "package": "logic-classes",
          "signature": "formula -\u003e Map atomic Bool -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Prop.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "eval",
          "normalized": "a-\u003eMap b Bool-\u003eBool",
          "package": "logic-classes",
          "signature": "formula-\u003eMap atomic Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "list_conj",
          "package": "logic-classes",
          "signature": "Set formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#list_conj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "list_conj",
          "normalized": "Set a-\u003ea",
          "package": "logic-classes",
          "signature": "Set formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:list_conj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "list_disj",
          "package": "logic-classes",
          "signature": "Set formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#list_disj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "list_disj",
          "normalized": "Set a-\u003ea",
          "package": "logic-classes",
          "signature": "Set formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:list_disj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "mkLits",
          "package": "logic-classes",
          "signature": "Set formula -\u003e Map atomic Bool -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#mkLits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "mkLits",
          "normalized": "Set a-\u003eMap b Bool-\u003ea",
          "package": "logic-classes",
          "partial": "Lits",
          "signature": "Set formula-\u003eMap atomic Bool-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:mkLits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "negate",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "negative",
          "package": "logic-classes",
          "signature": "lit -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Prop.html#negative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "negative",
          "normalized": "a-\u003eBool",
          "package": "logic-classes",
          "signature": "lit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "nenf",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#nenf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "nenf",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:nenf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "nnf",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#nnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "nnf",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:nnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "onAllValuations",
          "package": "logic-classes",
          "signature": "(r -\u003e r -\u003e r)-\u003e (Map a Bool -\u003e r)-\u003e Map a Bool-\u003e Set a-\u003e r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "onAllValuations",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(Map b Bool-\u003ea)-\u003eMap b Bool-\u003eSet b-\u003ea",
          "package": "logic-classes",
          "partial": "All Valuations",
          "signature": "(r-\u003er-\u003er)-\u003e(Map a Bool-\u003er)-\u003eMap a Bool-\u003eSet a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:onAllValuations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "pSubst",
          "package": "logic-classes",
          "signature": "Map atomic formula -\u003e formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#pSubst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "pSubst",
          "normalized": "Map a b-\u003eb-\u003eb",
          "package": "logic-classes",
          "partial": "Subst",
          "signature": "Map atomic formula-\u003eformula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:pSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "positive",
          "package": "logic-classes",
          "signature": "lit -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Prop.html#positive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "positive",
          "normalized": "a-\u003eBool",
          "package": "logic-classes",
          "signature": "lit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "psimplify",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#psimplify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "psimplify",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:psimplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "purednf",
          "package": "logic-classes",
          "signature": "pf -\u003e Set (Set lit)",
          "source": "src/Data-Logic-Harrison-Prop.html#purednf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "purednf",
          "normalized": "a-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "pf-\u003eSet(Set lit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:purednf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "rawdnf",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Prop.html#rawdnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "rawdnf",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:rawdnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "satisfiable",
          "package": "logic-classes",
          "signature": "formula -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Prop.html#satisfiable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "satisfiable",
          "normalized": "a-\u003eBool",
          "package": "logic-classes",
          "signature": "formula-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:satisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "simpcnf",
          "package": "logic-classes",
          "signature": "pf -\u003e Set (Set lit)",
          "source": "src/Data-Logic-Harrison-Prop.html#simpcnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "simpcnf",
          "normalized": "a-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "pf-\u003eSet(Set lit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:simpcnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "simpdnf",
          "package": "logic-classes",
          "signature": "pf -\u003e Set (Set lit)",
          "source": "src/Data-Logic-Harrison-Prop.html#simpdnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "simpdnf",
          "normalized": "a-\u003eSet(Set b)",
          "package": "logic-classes",
          "signature": "pf-\u003eSet(Set lit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:simpdnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "tautology",
          "package": "logic-classes",
          "signature": "formula -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Prop.html#tautology",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "tautology",
          "normalized": "a-\u003eBool",
          "package": "logic-classes",
          "signature": "formula-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:tautology"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "trivial",
          "package": "logic-classes",
          "signature": "Set lit -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Prop.html#trivial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "trivial",
          "normalized": "Set a-\u003eBool",
          "package": "logic-classes",
          "signature": "Set lit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:trivial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "truthTable",
          "package": "logic-classes",
          "signature": "formula -\u003e TruthTable atom",
          "source": "src/Data-Logic-Harrison-Prop.html#truthTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "truthTable",
          "normalized": "a-\u003eTruthTable b",
          "package": "logic-classes",
          "partial": "Table",
          "signature": "formula-\u003eTruthTable atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:truthTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Prop",
          "name": "unsatisfiable",
          "package": "logic-classes",
          "signature": "formula -\u003e Bool",
          "source": "src/Data-Logic-Harrison-Prop.html#unsatisfiable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Prop",
          "module": "Data.Logic.Harrison.Prop",
          "name": "unsatisfiable",
          "normalized": "a-\u003eBool",
          "package": "logic-classes",
          "signature": "formula-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Prop.html#v:unsatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "PropExamples",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-PropExamples.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison PropExamples",
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "PropExamples",
          "package": "logic-classes",
          "partial": "Prop Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-PropExamples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "Atom",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-PropExamples.html#Atom",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Harrison PropExamples",
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "Atom",
          "package": "logic-classes",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-PropExamples.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "N",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-PropExamples.html#N",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Logic Harrison PropExamples",
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "N",
          "package": "logic-classes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-PropExamples.html#t:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "P",
          "package": "logic-classes",
          "signature": "P String a (Maybe a)",
          "source": "src/Data-Logic-Harrison-PropExamples.html#Atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison PropExamples",
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "P",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-PropExamples.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "prime",
          "package": "logic-classes",
          "signature": "N -\u003e formula",
          "source": "src/Data-Logic-Harrison-PropExamples.html#prime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison PropExamples",
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "prime",
          "normalized": "N-\u003ea",
          "package": "logic-classes",
          "signature": "N-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-PropExamples.html#v:prime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "ramsey",
          "package": "logic-classes",
          "signature": "Int -\u003e Int -\u003e N -\u003e formula",
          "source": "src/Data-Logic-Harrison-PropExamples.html#ramsey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison PropExamples",
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "ramsey",
          "normalized": "Int-\u003eInt-\u003eN-\u003ea",
          "package": "logic-classes",
          "signature": "Int-\u003eInt-\u003eN-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-PropExamples.html#v:ramsey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "tests",
          "package": "logic-classes",
          "signature": "Test",
          "source": "src/Data-Logic-Harrison-PropExamples.html#tests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison PropExamples",
          "module": "Data.Logic.Harrison.PropExamples",
          "name": "tests",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-PropExamples.html#v:tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Resolution",
          "name": "Resolution",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Resolution.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Resolution",
          "module": "Data.Logic.Harrison.Resolution",
          "name": "Resolution",
          "package": "logic-classes",
          "partial": "Resolution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Resolution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Resolution",
          "name": "matchAtomsEq",
          "package": "logic-classes",
          "signature": "Map v term -\u003e atom -\u003e atom -\u003e Failing (Map v term)",
          "source": "src/Data-Logic-Harrison-Resolution.html#matchAtomsEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Resolution",
          "module": "Data.Logic.Harrison.Resolution",
          "name": "matchAtomsEq",
          "normalized": "Map a b-\u003ec-\u003ec-\u003eFailing(Map a b)",
          "package": "logic-classes",
          "partial": "Atoms Eq",
          "signature": "Map v term-\u003eatom-\u003eatom-\u003eFailing(Map v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Resolution.html#v:matchAtomsEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Resolution",
          "name": "presolution",
          "package": "logic-classes",
          "signature": "fof -\u003e SkolemT v term m (Set (Failing Bool))",
          "source": "src/Data-Logic-Harrison-Resolution.html#presolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Resolution",
          "module": "Data.Logic.Harrison.Resolution",
          "name": "presolution",
          "normalized": "a-\u003eSkolemT b c d(Set(Failing Bool))",
          "package": "logic-classes",
          "signature": "fof-\u003eSkolemT v term m(Set(Failing Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Resolution.html#v:presolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Resolution",
          "name": "resolution1",
          "package": "logic-classes",
          "signature": "fof -\u003e SkolemT v term m (Set (Failing Bool))",
          "source": "src/Data-Logic-Harrison-Resolution.html#resolution1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Resolution",
          "module": "Data.Logic.Harrison.Resolution",
          "name": "resolution1",
          "normalized": "a-\u003eSkolemT b c d(Set(Failing Bool))",
          "package": "logic-classes",
          "signature": "fof-\u003eSkolemT v term m(Set(Failing Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Resolution.html#v:resolution1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Resolution",
          "name": "resolution2",
          "package": "logic-classes",
          "signature": "fof -\u003e SkolemT v term m (Set (Failing Bool))",
          "source": "src/Data-Logic-Harrison-Resolution.html#resolution2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Resolution",
          "module": "Data.Logic.Harrison.Resolution",
          "name": "resolution2",
          "normalized": "a-\u003eSkolemT b c d(Set(Failing Bool))",
          "package": "logic-classes",
          "signature": "fof-\u003eSkolemT v term m(Set(Failing Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Resolution.html#v:resolution2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Resolution",
          "name": "resolution3",
          "package": "logic-classes",
          "signature": "fof -\u003e SkolemT v term m (Set (Failing Bool))",
          "source": "src/Data-Logic-Harrison-Resolution.html#resolution3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Resolution",
          "module": "Data.Logic.Harrison.Resolution",
          "name": "resolution3",
          "normalized": "a-\u003eSkolemT b c d(Set(Failing Bool))",
          "package": "logic-classes",
          "signature": "fof-\u003eSkolemT v term m(Set(Failing Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Resolution.html#v:resolution3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Skolem",
          "name": "Skolem",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Skolem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "Skolem",
          "package": "logic-classes",
          "partial": "Skolem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Skolem monad\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "Skolem",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Skolem.html#Skolem",
          "type": "type"
        },
        "index": {
          "description": "The Skolem monad",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "Skolem",
          "package": "logic-classes",
          "partial": "Skolem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#t:Skolem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Skolem monad transformer\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "SkolemT",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Skolem.html#SkolemT",
          "type": "type"
        },
        "index": {
          "description": "The Skolem monad transformer",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "SkolemT",
          "package": "logic-classes",
          "partial": "Skolem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#t:SkolemT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI need to consult the Harrison book for the reasons why we don't\n |just Skolemize the result of prenexNormalForm.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "askolemize",
          "package": "logic-classes",
          "signature": "fof -\u003e SkolemT v term m fof",
          "source": "src/Data-Logic-Harrison-Skolem.html#askolemize",
          "type": "function"
        },
        "index": {
          "description": "need to consult the Harrison book for the reasons why we don just Skolemize the result of prenexNormalForm",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "askolemize",
          "normalized": "a-\u003eSkolemT b c d a",
          "package": "logic-classes",
          "signature": "fof-\u003eSkolemT v term m fof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:askolemize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Skolem",
          "name": "functions",
          "package": "logic-classes",
          "signature": "(atom -\u003e Set (f, Int)) -\u003e formula -\u003e Set (f, Int)",
          "source": "src/Data-Logic-Harrison-Skolem.html#functions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "functions",
          "normalized": "(a-\u003eSet(b,Int))-\u003ec-\u003eSet(b,Int)",
          "package": "logic-classes",
          "signature": "(atom-\u003eSet(f,Int))-\u003eformula-\u003eSet(f,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:functions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust looks for double negatives and negated constants.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "lsimplify",
          "package": "logic-classes",
          "signature": "lit -\u003e lit",
          "source": "src/Data-Logic-Harrison-Skolem.html#lsimplify",
          "type": "function"
        },
        "index": {
          "description": "Just looks for double negatives and negated constants",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "lsimplify",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "lit-\u003elit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:lsimplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Skolem",
          "name": "nnf",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Skolem.html#nnf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "nnf",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:nnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to Prenex normal form, with all quantifiers at the left.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "pnf",
          "package": "logic-classes",
          "signature": "formula -\u003e formula",
          "source": "src/Data-Logic-Harrison-Skolem.html#pnf",
          "type": "function"
        },
        "index": {
          "description": "Convert to Prenex normal form with all quantifiers at the left",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "pnf",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "formula-\u003eformula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:pnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation in the Skolem monad.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "runSkolem",
          "package": "logic-classes",
          "signature": "SkolemT v term Identity a -\u003e a",
          "source": "src/Data-Logic-Harrison-Skolem.html#runSkolem",
          "type": "function"
        },
        "index": {
          "description": "Run computation in the Skolem monad",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "runSkolem",
          "normalized": "SkolemT a b Identity c-\u003ec",
          "package": "logic-classes",
          "partial": "Skolem",
          "signature": "SkolemT v term Identity a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:runSkolem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation in a stacked invocation of the Skolem monad.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "runSkolemT",
          "package": "logic-classes",
          "signature": "SkolemT v term m a -\u003e m a",
          "source": "src/Data-Logic-Harrison-Skolem.html#runSkolemT",
          "type": "function"
        },
        "index": {
          "description": "Run computation in stacked invocation of the Skolem monad",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "runSkolemT",
          "normalized": "SkolemT a b c d-\u003ec d",
          "package": "logic-classes",
          "partial": "Skolem",
          "signature": "SkolemT v term m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:runSkolemT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Skolem",
          "name": "simplify",
          "package": "logic-classes",
          "signature": "fof -\u003e fof",
          "source": "src/Data-Logic-Harrison-Skolem.html#simplify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "simplify",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "fof-\u003efof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:simplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkolemize the formula by removing the existential quantifiers and\n replacing the variables they quantify with skolem functions (and\n constants, which are functions of zero variables.)  The Skolem\n functions are new functions (obtained from the SkolemT monad) which\n are applied to the list of variables which are universally\n quantified in the context where the existential quantifier\n appeared.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "skolem",
          "package": "logic-classes",
          "signature": "fof -\u003e SkolemT v term m fof",
          "source": "src/Data-Logic-Harrison-Skolem.html#skolem",
          "type": "function"
        },
        "index": {
          "description": "Skolemize the formula by removing the existential quantifiers and replacing the variables they quantify with skolem functions and constants which are functions of zero variables The Skolem functions are new functions obtained from the SkolemT monad which are applied to the list of variables which are universally quantified in the context where the existential quantifier appeared",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "skolem",
          "normalized": "a-\u003eSkolemT b c d a",
          "package": "logic-classes",
          "signature": "fof-\u003eSkolemT v term m fof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:skolem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe get Skolem Normal Form by skolemizing and then converting to\n Prenex Normal Form, and finally eliminating the remaining quantifiers.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "skolemNormalForm",
          "package": "logic-classes",
          "signature": "(atom -\u003e atom2) -\u003e fof -\u003e SkolemT v term m pf",
          "source": "src/Data-Logic-Harrison-Skolem.html#skolemNormalForm",
          "type": "function"
        },
        "index": {
          "description": "We get Skolem Normal Form by skolemizing and then converting to Prenex Normal Form and finally eliminating the remaining quantifiers",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "skolemNormalForm",
          "normalized": "(a-\u003ea)-\u003eb-\u003eSkolemT c d e f",
          "package": "logic-classes",
          "partial": "Normal Form",
          "signature": "(atom-\u003eatom)-\u003efof-\u003eSkolemT v term m pf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:skolemNormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkolemize and then specialize.  Because we know all quantifiers\n are gone we can convert to any instance of PropositionalFormula.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "skolemize",
          "package": "logic-classes",
          "signature": "(atom -\u003e atom2) -\u003e fof -\u003e SkolemT v term m pf",
          "source": "src/Data-Logic-Harrison-Skolem.html#skolemize",
          "type": "function"
        },
        "index": {
          "description": "Skolemize and then specialize Because we know all quantifiers are gone we can convert to any instance of PropositionalFormula",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "skolemize",
          "normalized": "(a-\u003ea)-\u003eb-\u003eSkolemT c d e f",
          "package": "logic-classes",
          "signature": "(atom-\u003eatom)-\u003efof-\u003eSkolemT v term m pf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:skolemize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the leading universal quantifiers.  After a call to pnf\n this will be all the universal quantifiers, and the skolemization\n will have already turned all the existential quantifiers into\n skolem functions.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "specialize",
          "package": "logic-classes",
          "signature": "fof -\u003e fof",
          "source": "src/Data-Logic-Harrison-Skolem.html#specialize",
          "type": "function"
        },
        "index": {
          "description": "Remove the leading universal quantifiers After call to pnf this will be all the universal quantifiers and the skolemization will have already turned all the existential quantifiers into skolem functions",
          "hierarchy": "Data Logic Harrison Skolem",
          "module": "Data.Logic.Harrison.Skolem",
          "name": "specialize",
          "normalized": "a-\u003ea",
          "package": "logic-classes",
          "signature": "fof-\u003efof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Skolem.html#v:specialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Tableaux",
          "name": "Tableaux",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Tableaux.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Tableaux",
          "module": "Data.Logic.Harrison.Tableaux",
          "name": "Tableaux",
          "package": "logic-classes",
          "partial": "Tableaux",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Tableaux.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry f with higher and higher values of n until it succeeds, or\n optional maximum depth limit is exceeded.\n\u003c/p\u003e",
          "module": "Data.Logic.Harrison.Tableaux",
          "name": "deepen",
          "package": "logic-classes",
          "signature": "(Int -\u003e Failing t) -\u003e Int -\u003e Maybe Int -\u003e Failing (t, Int)",
          "source": "src/Data-Logic-Harrison-Tableaux.html#deepen",
          "type": "function"
        },
        "index": {
          "description": "Try with higher and higher values of until it succeeds or optional maximum depth limit is exceeded",
          "hierarchy": "Data Logic Harrison Tableaux",
          "module": "Data.Logic.Harrison.Tableaux",
          "name": "deepen",
          "normalized": "(Int-\u003eFailing a)-\u003eInt-\u003eMaybe Int-\u003eFailing(a,Int)",
          "package": "logic-classes",
          "signature": "(Int-\u003eFailing t)-\u003eInt-\u003eMaybe Int-\u003eFailing(t,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Tableaux.html#v:deepen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Tableaux",
          "name": "unifyAtomsEq",
          "package": "logic-classes",
          "signature": "Map v term -\u003e atom -\u003e atom -\u003e Failing (Map v term)",
          "source": "src/Data-Logic-Harrison-Tableaux.html#unifyAtomsEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Tableaux",
          "module": "Data.Logic.Harrison.Tableaux",
          "name": "unifyAtomsEq",
          "normalized": "Map a b-\u003ec-\u003ec-\u003eFailing(Map a b)",
          "package": "logic-classes",
          "partial": "Atoms Eq",
          "signature": "Map v term-\u003eatom-\u003eatom-\u003eFailing(Map v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Tableaux.html#v:unifyAtomsEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Tableaux",
          "name": "unify_literals",
          "package": "logic-classes",
          "signature": "Map v term -\u003e lit -\u003e lit -\u003e Failing (Map v term)",
          "source": "src/Data-Logic-Harrison-Tableaux.html#unify_literals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Tableaux",
          "module": "Data.Logic.Harrison.Tableaux",
          "name": "unify_literals",
          "normalized": "Map a b-\u003ec-\u003ec-\u003eFailing(Map a b)",
          "package": "logic-classes",
          "signature": "Map v term-\u003elit-\u003elit-\u003eFailing(Map v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Tableaux.html#v:unify_literals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Unif",
          "name": "Unif",
          "package": "logic-classes",
          "source": "src/Data-Logic-Harrison-Unif.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Unif",
          "module": "Data.Logic.Harrison.Unif",
          "name": "Unif",
          "package": "logic-classes",
          "partial": "Unif",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Unif.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Unif",
          "name": "fullUnify",
          "package": "logic-classes",
          "signature": "[(term, term)] -\u003e Failing (Map v term)",
          "source": "src/Data-Logic-Harrison-Unif.html#fullUnify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Unif",
          "module": "Data.Logic.Harrison.Unif",
          "name": "fullUnify",
          "normalized": "[(a,a)]-\u003eFailing(Map b a)",
          "package": "logic-classes",
          "partial": "Unify",
          "signature": "[(term,term)]-\u003eFailing(Map v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Unif.html#v:fullUnify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Unif",
          "name": "solve",
          "package": "logic-classes",
          "signature": "Map v term -\u003e Map v term",
          "source": "src/Data-Logic-Harrison-Unif.html#solve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Unif",
          "module": "Data.Logic.Harrison.Unif",
          "name": "solve",
          "normalized": "Map a b-\u003eMap a b",
          "package": "logic-classes",
          "signature": "Map v term-\u003eMap v term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Unif.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Unif",
          "name": "unify",
          "package": "logic-classes",
          "signature": "Map v term -\u003e [(term, term)] -\u003e Failing (Map v term)",
          "source": "src/Data-Logic-Harrison-Unif.html#unify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Unif",
          "module": "Data.Logic.Harrison.Unif",
          "name": "unify",
          "normalized": "Map a b-\u003e[(b,b)]-\u003eFailing(Map a b)",
          "package": "logic-classes",
          "signature": "Map v term-\u003e[(term,term)]-\u003eFailing(Map v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Unif.html#v:unify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Harrison.Unif",
          "name": "unifyAndApply",
          "package": "logic-classes",
          "signature": "[(term, term)] -\u003e Failing [(term, term)]",
          "source": "src/Data-Logic-Harrison-Unif.html#unifyAndApply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Harrison Unif",
          "module": "Data.Logic.Harrison.Unif",
          "name": "unifyAndApply",
          "normalized": "[(a,a)]-\u003eFailing[(a,a)]",
          "package": "logic-classes",
          "partial": "And Apply",
          "signature": "[(term,term)]-\u003eFailing[(term,term)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Harrison-Unif.html#v:unifyAndApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Chiou",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-Chiou.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Chiou",
          "package": "logic-classes",
          "partial": "Chiou",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "CTerm",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-Chiou.html#CTerm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "CTerm",
          "package": "logic-classes",
          "partial": "CTerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#t:CTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "ConjunctiveNormalForm",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-Chiou.html#ConjunctiveNormalForm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "ConjunctiveNormalForm",
          "package": "logic-classes",
          "partial": "Conjunctive Normal Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#t:ConjunctiveNormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Connective",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-Chiou.html#Connective",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Connective",
          "package": "logic-classes",
          "partial": "Connective",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#t:Connective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "NormalSentence",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-Chiou.html#NormalSentence",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "NormalSentence",
          "package": "logic-classes",
          "partial": "Normal Sentence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#t:NormalSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "NormalTerm",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-Chiou.html#NormalTerm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "NormalTerm",
          "package": "logic-classes",
          "partial": "Normal Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#t:NormalTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Quantifier",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-Chiou.html#Quantifier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Quantifier",
          "package": "logic-classes",
          "partial": "Quantifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#t:Quantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Sentence",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-Chiou.html#Sentence",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Sentence",
          "package": "logic-classes",
          "partial": "Sentence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#t:Sentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "And",
          "package": "logic-classes",
          "signature": "And",
          "source": "src/Data-Logic-Instances-Chiou.html#Connective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "And",
          "package": "logic-classes",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "CNF",
          "package": "logic-classes",
          "signature": "CNF [Sentence v p f]",
          "source": "src/Data-Logic-Instances-Chiou.html#ConjunctiveNormalForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "CNF",
          "normalized": "CNF[Sentence a b c]",
          "package": "logic-classes",
          "partial": "CNF",
          "signature": "CNF[Sentence v p f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:CNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Connective",
          "package": "logic-classes",
          "signature": "Connective (Sentence v p f) Connective (Sentence v p f)",
          "source": "src/Data-Logic-Instances-Chiou.html#Sentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Connective",
          "package": "logic-classes",
          "partial": "Connective",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Connective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Equal",
          "package": "logic-classes",
          "signature": "Equal (CTerm v f) (CTerm v f)",
          "source": "src/Data-Logic-Instances-Chiou.html#Sentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Equal",
          "package": "logic-classes",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Equiv",
          "package": "logic-classes",
          "signature": "Equiv",
          "source": "src/Data-Logic-Instances-Chiou.html#Connective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Equiv",
          "package": "logic-classes",
          "partial": "Equiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Equiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "ExistsCh",
          "package": "logic-classes",
          "signature": "ExistsCh",
          "source": "src/Data-Logic-Instances-Chiou.html#Quantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "ExistsCh",
          "package": "logic-classes",
          "partial": "Exists Ch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:ExistsCh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "ForAll",
          "package": "logic-classes",
          "signature": "ForAll",
          "source": "src/Data-Logic-Instances-Chiou.html#Quantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "ForAll",
          "package": "logic-classes",
          "partial": "For All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:ForAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Function",
          "package": "logic-classes",
          "signature": "Function f [CTerm v f]",
          "source": "src/Data-Logic-Instances-Chiou.html#CTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Function",
          "normalized": "Function a[CTerm b a]",
          "package": "logic-classes",
          "partial": "Function",
          "signature": "Function f[CTerm v f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Imply",
          "package": "logic-classes",
          "signature": "Imply",
          "source": "src/Data-Logic-Instances-Chiou.html#Connective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Imply",
          "package": "logic-classes",
          "partial": "Imply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Imply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "NFEqual",
          "package": "logic-classes",
          "signature": "NFEqual (NormalTerm v f) (NormalTerm v f)",
          "source": "src/Data-Logic-Instances-Chiou.html#NormalSentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "NFEqual",
          "package": "logic-classes",
          "partial": "NFEqual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:NFEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "NFNot",
          "package": "logic-classes",
          "signature": "NFNot (NormalSentence v p f)",
          "source": "src/Data-Logic-Instances-Chiou.html#NormalSentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "NFNot",
          "package": "logic-classes",
          "partial": "NFNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:NFNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "NFPredicate",
          "package": "logic-classes",
          "signature": "NFPredicate p [NormalTerm v f]",
          "source": "src/Data-Logic-Instances-Chiou.html#NormalSentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "NFPredicate",
          "normalized": "NFPredicate a[NormalTerm b c]",
          "package": "logic-classes",
          "partial": "NFPredicate",
          "signature": "NFPredicate p[NormalTerm v f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:NFPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "NormalFunction",
          "package": "logic-classes",
          "signature": "NormalFunction f [NormalTerm v f]",
          "source": "src/Data-Logic-Instances-Chiou.html#NormalTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "NormalFunction",
          "normalized": "NormalFunction a[NormalTerm b a]",
          "package": "logic-classes",
          "partial": "Normal Function",
          "signature": "NormalFunction f[NormalTerm v f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:NormalFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "NormalVariable",
          "package": "logic-classes",
          "signature": "NormalVariable v",
          "source": "src/Data-Logic-Instances-Chiou.html#NormalTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "NormalVariable",
          "package": "logic-classes",
          "partial": "Normal Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:NormalVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Not",
          "package": "logic-classes",
          "signature": "Not (Sentence v p f)",
          "source": "src/Data-Logic-Instances-Chiou.html#Sentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Not",
          "package": "logic-classes",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Or",
          "package": "logic-classes",
          "signature": "Or",
          "source": "src/Data-Logic-Instances-Chiou.html#Connective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Or",
          "package": "logic-classes",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Predicate",
          "package": "logic-classes",
          "signature": "Predicate p [CTerm v f]",
          "source": "src/Data-Logic-Instances-Chiou.html#Sentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Predicate",
          "normalized": "Predicate a[CTerm b c]",
          "package": "logic-classes",
          "partial": "Predicate",
          "signature": "Predicate p[CTerm v f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Quantifier",
          "package": "logic-classes",
          "signature": "Quantifier Quantifier [v] (Sentence v p f)",
          "source": "src/Data-Logic-Instances-Chiou.html#Sentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Quantifier",
          "normalized": "Quantifier Quantifier[a](Sentence a b c)",
          "package": "logic-classes",
          "partial": "Quantifier",
          "signature": "Quantifier Quantifier[v](Sentence v p f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Quantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "Variable",
          "package": "logic-classes",
          "signature": "Variable v",
          "source": "src/Data-Logic-Instances-Chiou.html#CTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "Variable",
          "package": "logic-classes",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "fromSentence",
          "package": "logic-classes",
          "signature": "Sentence v p f -\u003e NormalSentence v p f",
          "source": "src/Data-Logic-Instances-Chiou.html#fromSentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "fromSentence",
          "normalized": "Sentence a b c-\u003eNormalSentence a b c",
          "package": "logic-classes",
          "partial": "Sentence",
          "signature": "Sentence v p f-\u003eNormalSentence v p f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:fromSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.Chiou",
          "name": "toSentence",
          "package": "logic-classes",
          "signature": "NormalSentence v p f -\u003e Sentence v p f",
          "source": "src/Data-Logic-Instances-Chiou.html#toSentence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances Chiou",
          "module": "Data.Logic.Instances.Chiou",
          "name": "toSentence",
          "normalized": "NormalSentence a b c-\u003eSentence a b c",
          "package": "logic-classes",
          "partial": "Sentence",
          "signature": "NormalSentence v p f-\u003eSentence v p f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-Chiou.html#v:toSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.PropLogic",
          "name": "PropLogic",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-PropLogic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Instances PropLogic",
          "module": "Data.Logic.Instances.PropLogic",
          "name": "PropLogic",
          "package": "logic-classes",
          "partial": "Prop Logic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-PropLogic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.PropLogic",
          "name": "flatten",
          "package": "logic-classes",
          "signature": "PropForm a -\u003e PropForm a",
          "source": "src/Data-Logic-Instances-PropLogic.html#flatten",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances PropLogic",
          "module": "Data.Logic.Instances.PropLogic",
          "name": "flatten",
          "normalized": "PropForm a-\u003ePropForm a",
          "package": "logic-classes",
          "signature": "PropForm a-\u003ePropForm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-PropLogic.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.PropLogic",
          "name": "plSat",
          "package": "logic-classes",
          "signature": "formula -\u003e SkolemT v term m Bool",
          "source": "src/Data-Logic-Instances-PropLogic.html#plSat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances PropLogic",
          "module": "Data.Logic.Instances.PropLogic",
          "name": "plSat",
          "normalized": "a-\u003eSkolemT b c d Bool",
          "package": "logic-classes",
          "partial": "Sat",
          "signature": "formula-\u003eSkolemT v term m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-PropLogic.html#v:plSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.PropLogic",
          "name": "plSat0",
          "package": "logic-classes",
          "signature": "PropForm formula -\u003e Bool",
          "source": "src/Data-Logic-Instances-PropLogic.html#plSat0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances PropLogic",
          "module": "Data.Logic.Instances.PropLogic",
          "name": "plSat0",
          "normalized": "PropForm a-\u003eBool",
          "package": "logic-classes",
          "partial": "Sat",
          "signature": "PropForm formula-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-PropLogic.html#v:plSat0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.SatSolver",
          "name": "SatSolver",
          "package": "logic-classes",
          "source": "src/Data-Logic-Instances-SatSolver.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Instances SatSolver",
          "module": "Data.Logic.Instances.SatSolver",
          "name": "SatSolver",
          "package": "logic-classes",
          "partial": "Sat Solver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-SatSolver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Instances.SatSolver",
          "name": "toCNF",
          "package": "logic-classes",
          "signature": "formula -\u003e NormalT formula v term m CNF",
          "source": "src/Data-Logic-Instances-SatSolver.html#toCNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Instances SatSolver",
          "module": "Data.Logic.Instances.SatSolver",
          "name": "toCNF",
          "normalized": "a-\u003eNormalT a b c d CNF",
          "package": "logic-classes",
          "partial": "CNF",
          "signature": "formula-\u003eNormalT formula v term m CNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-SatSolver.html#v:toCNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a [[formula]] to CNF, which means building a map from\n formula to Literal.\n\u003c/p\u003e",
          "module": "Data.Logic.Instances.SatSolver",
          "name": "toLiteral",
          "package": "logic-classes",
          "signature": "lit -\u003e LiteralMapT lit m Literal",
          "source": "src/Data-Logic-Instances-SatSolver.html#toLiteral",
          "type": "function"
        },
        "index": {
          "description": "Convert formula to CNF which means building map from formula to Literal",
          "hierarchy": "Data Logic Instances SatSolver",
          "module": "Data.Logic.Instances.SatSolver",
          "name": "toLiteral",
          "normalized": "a-\u003eLiteralMapT a b Literal",
          "package": "logic-classes",
          "partial": "Literal",
          "signature": "lit-\u003eLiteralMapT lit m Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Instances-SatSolver.html#v:toLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "KnowledgeBase",
          "package": "logic-classes",
          "source": "src/Data-Logic-KnowledgeBase.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "KnowledgeBase",
          "package": "logic-classes",
          "partial": "Knowledge Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "Proof",
          "package": "logic-classes",
          "source": "src/Data-Logic-KnowledgeBase.html#Proof",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "Proof",
          "package": "logic-classes",
          "partial": "Proof",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#t:Proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "ProofResult",
          "package": "logic-classes",
          "source": "src/Data-Logic-KnowledgeBase.html#ProofResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "ProofResult",
          "package": "logic-classes",
          "partial": "Proof Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#t:ProofResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for running the knowledge base.\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "ProverT",
          "package": "logic-classes",
          "source": "src/Data-Logic-KnowledgeBase.html#ProverT",
          "type": "type"
        },
        "index": {
          "description": "monad for running the knowledge base",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "ProverT",
          "package": "logic-classes",
          "partial": "Prover",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#t:ProverT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "WithId",
          "package": "logic-classes",
          "source": "src/Data-Logic-KnowledgeBase.html#WithId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "WithId",
          "package": "logic-classes",
          "partial": "With Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#t:WithId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conjecture is unsatisfiable\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "Disproved",
          "package": "logic-classes",
          "signature": "Disproved",
          "source": "src/Data-Logic-KnowledgeBase.html#ProofResult",
          "type": "function"
        },
        "index": {
          "description": "The conjecture is unsatisfiable",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "Disproved",
          "package": "logic-classes",
          "partial": "Disproved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:Disproved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth are satisfiable\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "Invalid",
          "package": "logic-classes",
          "signature": "Invalid",
          "source": "src/Data-Logic-KnowledgeBase.html#ProofResult",
          "type": "function"
        },
        "index": {
          "description": "Both are satisfiable",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "Invalid",
          "package": "logic-classes",
          "partial": "Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:Invalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "Proof",
          "package": "logic-classes",
          "signature": "Proof",
          "source": "src/Data-Logic-KnowledgeBase.html#Proof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "Proof",
          "package": "logic-classes",
          "partial": "Proof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:Proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe negated conjecture is unsatisfiable\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "Proved",
          "package": "logic-classes",
          "signature": "Proved",
          "source": "src/Data-Logic-KnowledgeBase.html#ProofResult",
          "type": "function"
        },
        "index": {
          "description": "The negated conjecture is unsatisfiable",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "Proved",
          "package": "logic-classes",
          "partial": "Proved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:Proved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "WithId",
          "package": "logic-classes",
          "signature": "WithId",
          "source": "src/Data-Logic-KnowledgeBase.html#WithId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "WithId",
          "package": "logic-classes",
          "partial": "With Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:WithId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to prove a sentence, return the result and the proof.\n askKB should be in KnowledgeBase module. However, since resolution\n is here functions are here, it is also placed in this module.\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "askKB",
          "package": "logic-classes",
          "signature": "formula -\u003e ProverT' v term (ImplicativeForm lit) m Bool",
          "source": "src/Data-Logic-KnowledgeBase.html#askKB",
          "type": "function"
        },
        "index": {
          "description": "Try to prove sentence return the result and the proof askKB should be in KnowledgeBase module However since resolution is here functions are here it is also placed in this module",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "askKB",
          "normalized": "a-\u003eProverT' b c(ImplicativeForm d)e Bool",
          "package": "logic-classes",
          "partial": "KB",
          "signature": "formula-\u003eProverT' v term(ImplicativeForm lit)m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:askKB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the contents of the knowledgebase.\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "getKB",
          "package": "logic-classes",
          "signature": "ProverT inf m (Set (WithId inf))",
          "source": "src/Data-Logic-KnowledgeBase.html#getKB",
          "type": "function"
        },
        "index": {
          "description": "Return the contents of the knowledgebase",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "getKB",
          "package": "logic-classes",
          "partial": "KB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:getKB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a flag indicating whether sentence was disproved, along\n with a disproof.\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "inconsistantKB",
          "package": "logic-classes",
          "signature": "formula -\u003e ProverT' v term (ImplicativeForm lit) m (Bool, SetOfSupport lit v term)",
          "source": "src/Data-Logic-KnowledgeBase.html#inconsistantKB",
          "type": "function"
        },
        "index": {
          "description": "Return flag indicating whether sentence was disproved along with disproof",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "inconsistantKB",
          "normalized": "a-\u003eProverT' b c(ImplicativeForm d)e(Bool,SetOfSupport d b c)",
          "package": "logic-classes",
          "partial": "KB",
          "signature": "formula-\u003eProverT' v term(ImplicativeForm lit)m(Bool,SetOfSupport lit v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:inconsistantKB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "loadKB",
          "package": "logic-classes",
          "signature": "[formula] -\u003e ProverT' v term (ImplicativeForm lit) m [Proof lit]",
          "source": "src/Data-Logic-KnowledgeBase.html#loadKB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "loadKB",
          "normalized": "[a]-\u003eProverT' b c(ImplicativeForm d)e[Proof d]",
          "package": "logic-classes",
          "partial": "KB",
          "signature": "[formula]-\u003eProverT' v term(ImplicativeForm lit)m[Proof lit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:loadKB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "proof",
          "package": "logic-classes",
          "signature": "Set (ImplicativeForm lit)",
          "source": "src/Data-Logic-KnowledgeBase.html#Proof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "proof",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "proofResult",
          "package": "logic-classes",
          "signature": "ProofResult",
          "source": "src/Data-Logic-KnowledgeBase.html#Proof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "proofResult",
          "package": "logic-classes",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:proofResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "runProver'",
          "package": "logic-classes",
          "signature": "Maybe Int -\u003e ProverT' v term inf Identity a -\u003e a",
          "source": "src/Data-Logic-KnowledgeBase.html#runProver%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "runProver'",
          "normalized": "Maybe Int-\u003eProverT' a b c Identity d-\u003ed",
          "package": "logic-classes",
          "partial": "Prover'",
          "signature": "Maybe Int-\u003eProverT' v term inf Identity a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:runProver-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "runProverT'",
          "package": "logic-classes",
          "signature": "Maybe Int -\u003e ProverT' v term inf m a -\u003e m a",
          "source": "src/Data-Logic-KnowledgeBase.html#runProverT%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "runProverT'",
          "normalized": "Maybe Int-\u003eProverT' a b c d e-\u003ed e",
          "package": "logic-classes",
          "partial": "Prover T'",
          "signature": "Maybe Int-\u003eProverT' v term inf m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:runProverT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an entry from the KB.\n\u003c/p\u003e\u003cp\u003eReturn a text description of the contents of the knowledgebase.\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "showKB",
          "package": "logic-classes",
          "signature": "ProverT inf m String",
          "source": "src/Data-Logic-KnowledgeBase.html#showKB",
          "type": "function"
        },
        "index": {
          "description": "Delete an entry from the KB Return text description of the contents of the knowledgebase",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "showKB",
          "package": "logic-classes",
          "partial": "KB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:showKB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a sentence and insert it into the knowledgebase.  Returns\n the INF sentences derived from the new sentence, or Nothing if the\n new sentence is inconsistant with the current knowledgebase.\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "tellKB",
          "package": "logic-classes",
          "signature": "formula -\u003e ProverT' v term (ImplicativeForm lit) m (Proof lit)",
          "source": "src/Data-Logic-KnowledgeBase.html#tellKB",
          "type": "function"
        },
        "index": {
          "description": "Validate sentence and insert it into the knowledgebase Returns the INF sentences derived from the new sentence or Nothing if the new sentence is inconsistant with the current knowledgebase",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "tellKB",
          "normalized": "a-\u003eProverT' b c(ImplicativeForm d)e(Proof d)",
          "package": "logic-classes",
          "partial": "KB",
          "signature": "formula-\u003eProverT' v term(ImplicativeForm lit)m(Proof lit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:tellKB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a flag indicating whether sentence was proved, along with a\n proof.\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "theoremKB",
          "package": "logic-classes",
          "signature": "formula -\u003e ProverT' v term (ImplicativeForm lit) m (Bool, SetOfSupport lit v term)",
          "source": "src/Data-Logic-KnowledgeBase.html#theoremKB",
          "type": "function"
        },
        "index": {
          "description": "Return flag indicating whether sentence was proved along with proof",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "theoremKB",
          "normalized": "a-\u003eProverT' b c(ImplicativeForm d)e(Bool,SetOfSupport d b c)",
          "package": "logic-classes",
          "partial": "KB",
          "signature": "formula-\u003eProverT' v term(ImplicativeForm lit)m(Bool,SetOfSupport lit v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:theoremKB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a particular sentence from the knowledge base\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "unloadKB",
          "package": "logic-classes",
          "signature": "SentenceCount -\u003e ProverT inf m (Maybe (KnowledgeBase inf))",
          "source": "src/Data-Logic-KnowledgeBase.html#unloadKB",
          "type": "function"
        },
        "index": {
          "description": "Remove particular sentence from the knowledge base",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "unloadKB",
          "normalized": "SentenceCount-\u003eProverT a b(Maybe(KnowledgeBase a))",
          "package": "logic-classes",
          "partial": "KB",
          "signature": "SentenceCount-\u003eProverT inf m(Maybe(KnowledgeBase inf))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:unloadKB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee whether the sentence is true, false or invalid.  Return proofs\n for truth and falsity.\n\u003c/p\u003e",
          "module": "Data.Logic.KnowledgeBase",
          "name": "validKB",
          "package": "logic-classes",
          "signature": "formula -\u003e ProverT' v term (ImplicativeForm lit) m (ProofResult, SetOfSupport lit v term, SetOfSupport lit v term)",
          "source": "src/Data-Logic-KnowledgeBase.html#validKB",
          "type": "function"
        },
        "index": {
          "description": "See whether the sentence is true false or invalid Return proofs for truth and falsity",
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "validKB",
          "normalized": "a-\u003eProverT' b c(ImplicativeForm d)e(ProofResult,SetOfSupport d b c,SetOfSupport d b c)",
          "package": "logic-classes",
          "partial": "KB",
          "signature": "formula-\u003eProverT' v term(ImplicativeForm lit)m(ProofResult,SetOfSupport lit v term,SetOfSupport lit v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:validKB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "wiIdent",
          "package": "logic-classes",
          "signature": "Int",
          "source": "src/Data-Logic-KnowledgeBase.html#WithId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "wiIdent",
          "package": "logic-classes",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:wiIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.KnowledgeBase",
          "name": "wiItem",
          "package": "logic-classes",
          "signature": "a",
          "source": "src/Data-Logic-KnowledgeBase.html#WithId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic KnowledgeBase",
          "module": "Data.Logic.KnowledgeBase",
          "name": "wiItem",
          "package": "logic-classes",
          "partial": "Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-KnowledgeBase.html#v:wiItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA series of transformations to convert first order logic formulas\n into (ultimately) Clause Normal Form.\n\u003c/p\u003e\u003cpre\u003e\n 1st order formula:\n   &#8704;Y (&#8704;X (taller(Y,X) | wise(X)) =\u003e wise(Y))\n\nSimplify\n   &#8704;Y (~&#8704;X (taller(Y,X) | wise(X)) | wise(Y))\n\nMove negations in - Negation Normal Form\n   &#8704;Y (&#8707;X (~taller(Y,X) & ~wise(X)) | wise(Y))\n\nMove quantifiers out - Prenex Normal Form\n   &#8704;Y (&#8707;X ((~taller(Y,X) & ~wise(X)) | wise(Y)))\n\nDistribute disjunctions\n   &#8704;Y &#8707;X ((~taller(Y,X) | wise(Y)) & (~wise(X) | wise(Y)))\n\nSkolemize  - Skolem Normal Form\n   &#8704;Y (~taller(Y,x(Y)) | wise(Y)) & (~wise(x(Y)) | wise(Y))\n\nConvert to CNF\n   { ~taller(Y,x(Y)) | wise(Y),\n     ~wise(x(Y)) | wise(Y) } \n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Logic.Normal.Clause",
          "name": "Clause",
          "package": "logic-classes",
          "source": "src/Data-Logic-Normal-Clause.html",
          "type": "module"
        },
        "index": {
          "description": "series of transformations to convert first order logic formulas into ultimately Clause Normal Form st order formula taller wise wise Simplify taller wise wise Move negations in Negation Normal Form taller wise wise Move quantifiers out Prenex Normal Form taller wise wise Distribute disjunctions taller wise wise wise Skolemize Skolem Normal Form taller wise wise wise Convert to CNF taller wise wise wise",
          "hierarchy": "Data Logic Normal Clause",
          "module": "Data.Logic.Normal.Clause",
          "name": "Clause",
          "package": "logic-classes",
          "partial": "Clause",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Clause.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to Skolem Normal Form and then distribute the disjunctions over the conjunctions:\n\u003c/p\u003e\u003cpre\u003e\n Formula      Rewrites to\n P | (Q & R)  (P | Q) & (P | R)\n (Q & R) | P  (Q | P) & (R | P)\n\u003c/pre\u003e",
          "module": "Data.Logic.Normal.Clause",
          "name": "clauseNormalForm",
          "package": "logic-classes",
          "signature": "formula -\u003e SkolemT v term m (Set (Set lit))",
          "source": "src/Data-Logic-Normal-Clause.html#clauseNormalForm",
          "type": "function"
        },
        "index": {
          "description": "Convert to Skolem Normal Form and then distribute the disjunctions over the conjunctions Formula Rewrites to",
          "hierarchy": "Data Logic Normal Clause",
          "module": "Data.Logic.Normal.Clause",
          "name": "clauseNormalForm",
          "normalized": "a-\u003eSkolemT b c d(Set(Set e))",
          "package": "logic-classes",
          "partial": "Normal Form",
          "signature": "formula-\u003eSkolemT v term m(Set(Set lit))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Clause.html#v:clauseNormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Clause",
          "name": "cnfTrace",
          "package": "logic-classes",
          "signature": "(v -\u003e Doc) -\u003e (p -\u003e Doc) -\u003e (f -\u003e Doc) -\u003e formula -\u003e SkolemT v term m (String, Set (Set lit))",
          "source": "src/Data-Logic-Normal-Clause.html#cnfTrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Normal Clause",
          "module": "Data.Logic.Normal.Clause",
          "name": "cnfTrace",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003e(c-\u003eDoc)-\u003ed-\u003eSkolemT a e f(String,Set(Set g))",
          "package": "logic-classes",
          "partial": "Trace",
          "signature": "(v-\u003eDoc)-\u003e(p-\u003eDoc)-\u003e(f-\u003eDoc)-\u003eformula-\u003eSkolemT v term m(String,Set(Set lit))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Clause.html#v:cnfTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Implicative",
          "name": "Implicative",
          "package": "logic-classes",
          "source": "src/Data-Logic-Normal-Implicative.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "Implicative",
          "package": "logic-classes",
          "partial": "Implicative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type to represent a formula in Implicative Normal Form.  Such a\n formula has the form \u003ccode\u003ea & b & c .=\u003e. d | e | f\u003c/code\u003e, where a thru f are\n literals.  One more restriction that is not implied by the type is\n that no literal can appear in both the pos set and the neg set.\n\u003c/p\u003e",
          "module": "Data.Logic.Normal.Implicative",
          "name": "ImplicativeForm",
          "package": "logic-classes",
          "source": "src/Data-Logic-Normal-Implicative.html#ImplicativeForm",
          "type": "data"
        },
        "index": {
          "description": "type to represent formula in Implicative Normal Form Such formula has the form where thru are literals One more restriction that is not implied by the type is that no literal can appear in both the pos set and the neg set",
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "ImplicativeForm",
          "package": "logic-classes",
          "partial": "Implicative Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#t:ImplicativeForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Implicative",
          "name": "LiteralMapT",
          "package": "logic-classes",
          "source": "src/Data-Logic-Normal-Implicative.html#LiteralMapT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "LiteralMapT",
          "package": "logic-classes",
          "partial": "Literal Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#t:LiteralMapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombination of Normal monad and LiteralMap monad\n\u003c/p\u003e",
          "module": "Data.Logic.Normal.Implicative",
          "name": "NormalT",
          "package": "logic-classes",
          "source": "src/Data-Logic-Normal-Implicative.html#NormalT",
          "type": "type"
        },
        "index": {
          "description": "Combination of Normal monad and LiteralMap monad",
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "NormalT",
          "package": "logic-classes",
          "partial": "Normal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#t:NormalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Implicative",
          "name": "INF",
          "package": "logic-classes",
          "signature": "INF",
          "source": "src/Data-Logic-Normal-Implicative.html#ImplicativeForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "INF",
          "package": "logic-classes",
          "partial": "INF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#v:INF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the clause normal form, and turn it into implicative form,\n where each clauses becomes an (LHS, RHS) pair with the negated\n literals on the LHS and the non-negated literals on the RHS:\n \u003ccode\u003e\n   (a | ~b | c | ~d) becomes (b & d) =\u003e (a | c)\n   (~b | ~d) | (a | c)\n   ~~(~b | ~d) | (a | c)\n   ~(b & d) | (a | c)\n \u003c/code\u003e\n If there are skolem functions on the RHS, split the formula using\n this identity:\n \u003ccode\u003e\n   (a | b | c) =\u003e (d & e & f)\n \u003c/code\u003e\n becomes\n \u003ccode\u003e\n    a | b | c =\u003e d\n    a | b | c =\u003e e\n    a | b | c =\u003e f\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Logic.Normal.Implicative",
          "name": "implicativeNormalForm",
          "package": "logic-classes",
          "signature": "formula -\u003e SkolemT v term m (Set (ImplicativeForm lit))",
          "source": "src/Data-Logic-Normal-Implicative.html#implicativeNormalForm",
          "type": "function"
        },
        "index": {
          "description": "Take the clause normal form and turn it into implicative form where each clauses becomes an LHS RHS pair with the negated literals on the LHS and the non-negated literals on the RHS becomes If there are skolem functions on the RHS split the formula using this identity becomes",
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "implicativeNormalForm",
          "normalized": "a-\u003eSkolemT b c d(Set(ImplicativeForm e))",
          "package": "logic-classes",
          "partial": "Normal Form",
          "signature": "formula-\u003eSkolemT v term m(Set(ImplicativeForm lit))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#v:implicativeNormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of MakeINF that takes lists instead of sets, used for\n implementing a more attractive show method.\n\u003c/p\u003e",
          "module": "Data.Logic.Normal.Implicative",
          "name": "makeINF'",
          "package": "logic-classes",
          "signature": "[lit] -\u003e [lit] -\u003e ImplicativeForm lit",
          "source": "src/Data-Logic-Normal-Implicative.html#makeINF%27",
          "type": "function"
        },
        "index": {
          "description": "version of MakeINF that takes lists instead of sets used for implementing more attractive show method",
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "makeINF'",
          "normalized": "[a]-\u003e[a]-\u003eImplicativeForm a",
          "package": "logic-classes",
          "partial": "INF'",
          "signature": "[lit]-\u003e[lit]-\u003eImplicativeForm lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#v:makeINF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Implicative",
          "name": "neg",
          "package": "logic-classes",
          "signature": "Set lit",
          "source": "src/Data-Logic-Normal-Implicative.html#ImplicativeForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "neg",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Implicative",
          "name": "pos",
          "package": "logic-classes",
          "signature": "Set lit",
          "source": "src/Data-Logic-Normal-Implicative.html#ImplicativeForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "pos",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Implicative",
          "name": "prettyINF",
          "package": "logic-classes",
          "signature": "(lit -\u003e Doc) -\u003e ImplicativeForm lit -\u003e Doc",
          "source": "src/Data-Logic-Normal-Implicative.html#prettyINF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "prettyINF",
          "normalized": "(a-\u003eDoc)-\u003eImplicativeForm a-\u003eDoc",
          "package": "logic-classes",
          "partial": "INF",
          "signature": "(lit-\u003eDoc)-\u003eImplicativeForm lit-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#v:prettyINF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Implicative",
          "name": "prettyProof",
          "package": "logic-classes",
          "signature": "(lit -\u003e Doc) -\u003e Set (ImplicativeForm lit) -\u003e Doc",
          "source": "src/Data-Logic-Normal-Implicative.html#prettyProof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "prettyProof",
          "normalized": "(a-\u003eDoc)-\u003eSet(ImplicativeForm a)-\u003eDoc",
          "package": "logic-classes",
          "partial": "Proof",
          "signature": "(lit-\u003eDoc)-\u003eSet(ImplicativeForm lit)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#v:prettyProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Implicative",
          "name": "runNormal",
          "package": "logic-classes",
          "signature": "NormalT formula v term Identity a -\u003e a",
          "source": "src/Data-Logic-Normal-Implicative.html#runNormal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "runNormal",
          "normalized": "NormalT a b c Identity d-\u003ed",
          "package": "logic-classes",
          "partial": "Normal",
          "signature": "NormalT formula v term Identity a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#v:runNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Normal.Implicative",
          "name": "runNormalT",
          "package": "logic-classes",
          "signature": "NormalT formula v term m a -\u003e m a",
          "source": "src/Data-Logic-Normal-Implicative.html#runNormalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Normal Implicative",
          "module": "Data.Logic.Normal.Implicative",
          "name": "runNormalT",
          "normalized": "NormalT a b c d e-\u003ed e",
          "package": "logic-classes",
          "partial": "Normal",
          "signature": "NormalT formula v term m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Normal-Implicative.html#v:runNormalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Resolution",
          "name": "Resolution",
          "package": "logic-classes",
          "source": "src/Data-Logic-Resolution.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Resolution",
          "module": "Data.Logic.Resolution",
          "name": "Resolution",
          "package": "logic-classes",
          "partial": "Resolution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Resolution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Resolution",
          "name": "SetOfSupport",
          "package": "logic-classes",
          "source": "src/Data-Logic-Resolution.html#SetOfSupport",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Logic Resolution",
          "module": "Data.Logic.Resolution",
          "name": "SetOfSupport",
          "package": "logic-classes",
          "partial": "Set Of Support",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Resolution.html#t:SetOfSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Resolution",
          "name": "Unification",
          "package": "logic-classes",
          "source": "src/Data-Logic-Resolution.html#Unification",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Logic Resolution",
          "module": "Data.Logic.Resolution",
          "name": "Unification",
          "package": "logic-classes",
          "partial": "Unification",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Resolution.html#t:Unification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the \u003ca\u003equestion\u003c/a\u003e to a set of support.\n\u003c/p\u003e",
          "module": "Data.Logic.Resolution",
          "name": "getSetOfSupport",
          "package": "logic-classes",
          "signature": "Set (ImplicativeForm lit) -\u003e Set (ImplicativeForm lit, Map v term)",
          "source": "src/Data-Logic-Resolution.html#getSetOfSupport",
          "type": "function"
        },
        "index": {
          "description": "Convert the question to set of support",
          "hierarchy": "Data Logic Resolution",
          "module": "Data.Logic.Resolution",
          "name": "getSetOfSupport",
          "normalized": "Set(ImplicativeForm a)-\u003eSet(ImplicativeForm a,Map b c)",
          "package": "logic-classes",
          "partial": "Set Of Support",
          "signature": "Set(ImplicativeForm lit)-\u003eSet(ImplicativeForm lit,Map v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Resolution.html#v:getSetOfSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Resolution",
          "name": "getSubstAtomEq",
          "package": "logic-classes",
          "signature": "Map v term -\u003e atom -\u003e Map v term",
          "source": "src/Data-Logic-Resolution.html#getSubstAtomEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Resolution",
          "module": "Data.Logic.Resolution",
          "name": "getSubstAtomEq",
          "normalized": "Map a b-\u003ec-\u003eMap a b",
          "package": "logic-classes",
          "partial": "Subst Atom Eq",
          "signature": "Map v term-\u003eatom-\u003eMap v term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Resolution.html#v:getSubstAtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Resolution",
          "name": "isRenameOfAtomEq",
          "package": "logic-classes",
          "signature": "atom -\u003e atom -\u003e Bool",
          "source": "src/Data-Logic-Resolution.html#isRenameOfAtomEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Resolution",
          "module": "Data.Logic.Resolution",
          "name": "isRenameOfAtomEq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "logic-classes",
          "partial": "Rename Of Atom Eq",
          "signature": "atom-\u003eatom-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Resolution.html#v:isRenameOfAtomEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Resolution",
          "name": "prove",
          "package": "logic-classes",
          "signature": "Maybe Int-\u003e SetOfSupport lit v term-\u003e SetOfSupport lit v term-\u003e Set (ImplicativeForm lit)-\u003e (Bool, SetOfSupport lit v term)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Resolution",
          "module": "Data.Logic.Resolution",
          "name": "prove",
          "normalized": "Maybe Int-\u003eSetOfSupport a b c-\u003eSetOfSupport a b c-\u003eSet(ImplicativeForm a)-\u003e(Bool,SetOfSupport a b c)",
          "package": "logic-classes",
          "signature": "Maybe Int-\u003eSetOfSupport lit v term-\u003eSetOfSupport lit v term-\u003eSet(ImplicativeForm lit)-\u003e(Bool,SetOfSupport lit v term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Resolution.html#v:prove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDo satisfiability computations on any FirstOrderFormula formula by\n converting it to a convenient instance of PropositionalFormula and\n using the satisfiable function from that instance.  Currently we\n use the satisfiable function from the PropLogic package, by the\n Bucephalus project.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Logic.Satisfiable",
          "name": "Satisfiable",
          "package": "logic-classes",
          "source": "src/Data-Logic-Satisfiable.html",
          "type": "module"
        },
        "index": {
          "description": "Do satisfiability computations on any FirstOrderFormula formula by converting it to convenient instance of PropositionalFormula and using the satisfiable function from that instance Currently we use the satisfiable function from the PropLogic package by the Bucephalus project",
          "hierarchy": "Data Logic Satisfiable",
          "module": "Data.Logic.Satisfiable",
          "name": "Satisfiable",
          "package": "logic-classes",
          "partial": "Satisfiable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Satisfiable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the formula always false?  (Not satisfiable.)\n\u003c/p\u003e",
          "module": "Data.Logic.Satisfiable",
          "name": "inconsistant",
          "package": "logic-classes",
          "signature": "formula -\u003e SkolemT v term m Bool",
          "source": "src/Data-Logic-Satisfiable.html#inconsistant",
          "type": "function"
        },
        "index": {
          "description": "Is the formula always false Not satisfiable",
          "hierarchy": "Data Logic Satisfiable",
          "module": "Data.Logic.Satisfiable",
          "name": "inconsistant",
          "normalized": "a-\u003eSkolemT b c d Bool",
          "package": "logic-classes",
          "signature": "formula-\u003eSkolemT v term m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Satisfiable.html#v:inconsistant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formula is invalid if it is neither a theorem nor inconsistent.\n\u003c/p\u003e",
          "module": "Data.Logic.Satisfiable",
          "name": "invalid",
          "package": "logic-classes",
          "signature": "formula -\u003e SkolemT v term m Bool",
          "source": "src/Data-Logic-Satisfiable.html#invalid",
          "type": "function"
        },
        "index": {
          "description": "formula is invalid if it is neither theorem nor inconsistent",
          "hierarchy": "Data Logic Satisfiable",
          "module": "Data.Logic.Satisfiable",
          "name": "invalid",
          "normalized": "a-\u003eSkolemT b c d Bool",
          "package": "logic-classes",
          "signature": "formula-\u003eSkolemT v term m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Satisfiable.html#v:invalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs there any variable assignment that makes the formula true?\n satisfiable :: forall formula atom term v f m. (Monad m, FirstOrderFormula formula atom v, Formula atom term v, Term term v f, Ord formula, Literal formula atom v, Ord atom) =\u003e\n                 formula -\u003e SkolemT v term m Bool\n\u003c/p\u003e",
          "module": "Data.Logic.Satisfiable",
          "name": "satisfiable",
          "package": "logic-classes",
          "signature": "formula -\u003e SkolemT v term m Bool",
          "source": "src/Data-Logic-Satisfiable.html#satisfiable",
          "type": "function"
        },
        "index": {
          "description": "Is there any variable assignment that makes the formula true satisfiable forall formula atom term Monad FirstOrderFormula formula atom Formula atom term Term term Ord formula Literal formula atom Ord atom formula SkolemT term Bool",
          "hierarchy": "Data Logic Satisfiable",
          "module": "Data.Logic.Satisfiable",
          "name": "satisfiable",
          "normalized": "a-\u003eSkolemT b c d Bool",
          "package": "logic-classes",
          "signature": "formula-\u003eSkolemT v term m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Satisfiable.html#v:satisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the negation of the formula inconsistant?\n\u003c/p\u003e",
          "module": "Data.Logic.Satisfiable",
          "name": "theorem",
          "package": "logic-classes",
          "signature": "formula -\u003e SkolemT v term m Bool",
          "source": "src/Data-Logic-Satisfiable.html#theorem",
          "type": "function"
        },
        "index": {
          "description": "Is the negation of the formula inconsistant",
          "hierarchy": "Data Logic Satisfiable",
          "module": "Data.Logic.Satisfiable",
          "name": "theorem",
          "normalized": "a-\u003eSkolemT b c d Bool",
          "package": "logic-classes",
          "signature": "formula-\u003eSkolemT v term m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Satisfiable.html#v:theorem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Tests.HUnit",
          "name": "HUnit",
          "package": "logic-classes",
          "source": "src/Data-Logic-Tests-HUnit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "HUnit",
          "package": "logic-classes",
          "partial": "HUnit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Tests.HUnit",
          "name": "Assertion",
          "package": "logic-classes",
          "source": "src/Data-Logic-Tests-HUnit.html#Assertion",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "Assertion",
          "package": "logic-classes",
          "partial": "Assertion",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#t:Assertion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHUnit Test type with an added phantom type parameter.  To run\n such a test you use the convert function below:\n \u003ccode\u003e\n   :load Data.Logic.Tests.Harrison.Meson\n   :m +Data.Logic.Tests.HUnit\n   :m +Test.HUnit\n   runTestTT (convert tests)\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Logic.Tests.HUnit",
          "name": "Test",
          "package": "logic-classes",
          "source": "src/Data-Logic-Tests-HUnit.html#Test",
          "type": "data"
        },
        "index": {
          "description": "HUnit Test type with an added phantom type parameter To run such test you use the convert function below load Data.Logic.Tests.Harrison.Meson Data.Logic.Tests.HUnit Test.HUnit runTestTT convert tests",
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "Test",
          "package": "logic-classes",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestFormula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Tests-HUnit.html#TestFormula",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestFormula",
          "package": "logic-classes",
          "partial": "Test Formula",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#t:TestFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestFormulaEq",
          "package": "logic-classes",
          "source": "src/Data-Logic-Tests-HUnit.html#TestFormulaEq",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestFormulaEq",
          "package": "logic-classes",
          "partial": "Test Formula Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#t:TestFormulaEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Tests.HUnit",
          "name": "Test0",
          "package": "logic-classes",
          "signature": "Test0 Test",
          "source": "src/Data-Logic-Tests-HUnit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "Test0",
          "package": "logic-classes",
          "partial": "Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#v:Test0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestCase",
          "package": "logic-classes",
          "signature": "TestCase (Assertion t)",
          "source": "src/Data-Logic-Tests-HUnit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestCase",
          "package": "logic-classes",
          "partial": "Test Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#v:TestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestLabel",
          "package": "logic-classes",
          "signature": "TestLabel String (Test t)",
          "source": "src/Data-Logic-Tests-HUnit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestLabel",
          "package": "logic-classes",
          "partial": "Test Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#v:TestLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestList",
          "package": "logic-classes",
          "signature": "TestList [Test t]",
          "source": "src/Data-Logic-Tests-HUnit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "TestList",
          "normalized": "TestList[Test a]",
          "package": "logic-classes",
          "partial": "Test List",
          "signature": "TestList[Test t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#v:TestList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the specified actual value is equal to the expected value.\n The output message will contain the prefix, the expected value, and the \n actual value.\n\u003c/p\u003e\u003cp\u003eIf the prefix is the empty string (i.e., \u003ccode\u003e\"\"\u003c/code\u003e), then the prefix is omitted\n and only the expected and actual values are output.\n\u003c/p\u003e",
          "module": "Data.Logic.Tests.HUnit",
          "name": "assertEqual",
          "package": "logic-classes",
          "signature": "String-\u003e a-\u003e a-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the specified actual value is equal to the expected value The output message will contain the prefix the expected value and the actual value If the prefix is the empty string i.e then the prefix is omitted and only the expected and actual values are output",
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "assertEqual",
          "normalized": "String-\u003ea-\u003ea-\u003eAssertion",
          "package": "logic-classes",
          "partial": "Equal",
          "signature": "String-\u003ea-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#v:assertEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Tests.HUnit",
          "name": "convert",
          "package": "logic-classes",
          "signature": "Test t -\u003e Test",
          "source": "src/Data-Logic-Tests-HUnit.html#convert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Tests HUnit",
          "module": "Data.Logic.Tests.HUnit",
          "name": "convert",
          "normalized": "Test a-\u003eTest",
          "package": "logic-classes",
          "signature": "Test t-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Tests-HUnit.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Common",
          "name": "Common",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Types Common",
          "module": "Data.Logic.Types.Common",
          "name": "Common",
          "package": "logic-classes",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types which are instances of the Logic type class for use\n when you just want to use the classes and you don't have a\n particular representation you need to use.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "FirstOrder",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-FirstOrder.html",
          "type": "module"
        },
        "index": {
          "description": "Data types which are instances of the Logic type class for use when you just want to use the classes and you don have particular representation you need to use",
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "FirstOrder",
          "package": "logic-classes",
          "partial": "First Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range of a formula is {True, False} when it has no free variables.\n\u003c/p\u003e",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Formula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-FirstOrder.html#Formula",
          "type": "data"
        },
        "index": {
          "description": "The range of formula is True False when it has no free variables",
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Formula",
          "package": "logic-classes",
          "partial": "Formula",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range of a term is an element of a set.\n\u003c/p\u003e",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "PTerm",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-FirstOrder.html#PTerm",
          "type": "data"
        },
        "index": {
          "description": "The range of term is an element of set",
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "PTerm",
          "package": "logic-classes",
          "partial": "PTerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#t:PTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA temporary type used in the fold method to represent the\n combination of a predicate and its arguments.  This reduces the\n number of arguments to foldFirstOrder and makes it easier to manage the\n mapping of the different instances to the class methods.\n\u003c/p\u003e",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Predicate",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-FirstOrder.html#Predicate",
          "type": "data"
        },
        "index": {
          "description": "temporary type used in the fold method to represent the combination of predicate and its arguments This reduces the number of arguments to foldFirstOrder and makes it easier to manage the mapping of the different instances to the class methods",
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Predicate",
          "package": "logic-classes",
          "partial": "Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Apply",
          "package": "logic-classes",
          "signature": "Apply p [term]",
          "source": "src/Data-Logic-Types-FirstOrder.html#Predicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Apply",
          "normalized": "Apply a[b]",
          "package": "logic-classes",
          "partial": "Apply",
          "signature": "Apply p[term]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#v:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Combine",
          "package": "logic-classes",
          "signature": "Combine (Combination (Formula v p f))",
          "source": "src/Data-Logic-Types-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Combine",
          "package": "logic-classes",
          "partial": "Combine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#v:Combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Equal",
          "package": "logic-classes",
          "signature": "Equal term term",
          "source": "src/Data-Logic-Types-FirstOrder.html#Predicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Equal",
          "package": "logic-classes",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction application.\n Constants are encoded as\n nullary functions.  The result\n is another term.\n\u003c/p\u003e",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "FunApp",
          "package": "logic-classes",
          "signature": "FunApp f [PTerm v f]",
          "source": "src/Data-Logic-Types-FirstOrder.html#PTerm",
          "type": "function"
        },
        "index": {
          "description": "Function application Constants are encoded as nullary functions The result is another term",
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "FunApp",
          "normalized": "FunApp a[PTerm b a]",
          "package": "logic-classes",
          "partial": "Fun App",
          "signature": "FunApp f[PTerm v f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#v:FunApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Predicate",
          "package": "logic-classes",
          "signature": "Predicate (Predicate p (PTerm v f))",
          "source": "src/Data-Logic-Types-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Predicate",
          "package": "logic-classes",
          "partial": "Predicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#v:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Quant",
          "package": "logic-classes",
          "signature": "Quant Quant v (Formula v p f)",
          "source": "src/Data-Logic-Types-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Quant",
          "package": "logic-classes",
          "partial": "Quant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#v:Quant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable, either free or\n bound by an enclosing quantifier.\n\u003c/p\u003e",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Var",
          "package": "logic-classes",
          "signature": "Var v",
          "source": "src/Data-Logic-Types-FirstOrder.html#PTerm",
          "type": "function"
        },
        "index": {
          "description": "variable either free or bound by an enclosing quantifier",
          "hierarchy": "Data Logic Types FirstOrder",
          "module": "Data.Logic.Types.FirstOrder",
          "name": "Var",
          "package": "logic-classes",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrder.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn instance of FirstOrderFormula which implements Eq and Ord by comparing\n after conversion to normal form.  This helps us notice that formula which\n only differ in ways that preserve identity, e.g. swapped arguments to a\n commutative operator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "FirstOrderPublic",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-FirstOrderPublic.html",
          "type": "module"
        },
        "index": {
          "description": "An instance of FirstOrderFormula which implements Eq and Ord by comparing after conversion to normal form This helps us notice that formula which only differ in ways that preserve identity e.g swapped arguments to commutative operator",
          "hierarchy": "Data Logic Types FirstOrderPublic",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "FirstOrderPublic",
          "package": "logic-classes",
          "partial": "First Order Public",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrderPublic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between the public and internal representations.\n\u003c/p\u003e",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "Bijection",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-FirstOrderPublic.html#Bijection",
          "type": "class"
        },
        "index": {
          "description": "Convert between the public and internal representations",
          "hierarchy": "Data Logic Types FirstOrderPublic",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "Bijection",
          "package": "logic-classes",
          "partial": "Bijection",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrderPublic.html#t:Bijection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe new Formula type is just a wrapper around the Native instance\n (which eventually should be renamed the Internal instance.)  No\n derived Eq or Ord instances.\n\u003c/p\u003e",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "Formula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-FirstOrderPublic.html#Formula",
          "type": "data"
        },
        "index": {
          "description": "The new Formula type is just wrapper around the Native instance which eventually should be renamed the Internal instance No derived Eq or Ord instances",
          "hierarchy": "Data Logic Types FirstOrderPublic",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "Formula",
          "package": "logic-classes",
          "partial": "Formula",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrderPublic.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "Formula",
          "package": "logic-classes",
          "signature": "Formula",
          "source": "src/Data-Logic-Types-FirstOrderPublic.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types FirstOrderPublic",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "Formula",
          "package": "logic-classes",
          "partial": "Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrderPublic.html#v:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "intern",
          "package": "logic-classes",
          "signature": "p -\u003e i",
          "source": "src/Data-Logic-Types-FirstOrderPublic.html#intern",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Types FirstOrderPublic",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "intern",
          "normalized": "a-\u003eb",
          "package": "logic-classes",
          "signature": "p-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrderPublic.html#v:intern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "public",
          "package": "logic-classes",
          "signature": "i -\u003e p",
          "source": "src/Data-Logic-Types-FirstOrderPublic.html#public",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Logic Types FirstOrderPublic",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "public",
          "normalized": "a-\u003eb",
          "package": "logic-classes",
          "signature": "i-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrderPublic.html#v:public"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "unFormula",
          "package": "logic-classes",
          "signature": "Formula v p f",
          "source": "src/Data-Logic-Types-FirstOrderPublic.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types FirstOrderPublic",
          "module": "Data.Logic.Types.FirstOrderPublic",
          "name": "unFormula",
          "package": "logic-classes",
          "partial": "Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-FirstOrderPublic.html#v:unFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "Equal",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-Equal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Equal",
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "Equal",
          "package": "logic-classes",
          "partial": "Equal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Equal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "FOLEQ",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-Equal.html#FOLEQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Equal",
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "FOLEQ",
          "package": "logic-classes",
          "partial": "FOLEQ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Equal.html#t:FOLEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "PredName",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-Equal.html#PredName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Equal",
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "PredName",
          "package": "logic-classes",
          "partial": "Pred Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Equal.html#t:PredName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": ":=:",
          "package": "logic-classes",
          "signature": ":=:",
          "source": "src/Data-Logic-Types-Harrison-Equal.html#PredName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Equal",
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": ":=:",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Equal.html#v::-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "EQUALS",
          "package": "logic-classes",
          "signature": "EQUALS TermType TermType",
          "source": "src/Data-Logic-Types-Harrison-Equal.html#FOLEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Equal",
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "EQUALS",
          "package": "logic-classes",
          "partial": "EQUALS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Equal.html#v:EQUALS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "Named",
          "package": "logic-classes",
          "signature": "Named String",
          "source": "src/Data-Logic-Types-Harrison-Equal.html#PredName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Equal",
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "Named",
          "package": "logic-classes",
          "partial": "Named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Equal.html#v:Named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "R",
          "package": "logic-classes",
          "signature": "R String [TermType]",
          "source": "src/Data-Logic-Types-Harrison-Equal.html#FOLEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Equal",
          "module": "Data.Logic.Types.Harrison.Equal",
          "name": "R",
          "normalized": "R String[TermType]",
          "package": "logic-classes",
          "signature": "R String[TermType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Equal.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "FOL",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-FOL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison FOL",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "FOL",
          "package": "logic-classes",
          "partial": "FOL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-FOL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "FOL",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-FOL.html#FOL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison FOL",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "FOL",
          "package": "logic-classes",
          "partial": "FOL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-FOL.html#t:FOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Harrison book uses String for atomic function, but we need\n something a little more type safe because of our Skolem class.\n\u003c/p\u003e",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "Function",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-FOL.html#Function",
          "type": "data"
        },
        "index": {
          "description": "The Harrison book uses String for atomic function but we need something little more type safe because of our Skolem class",
          "hierarchy": "Data Logic Types Harrison FOL",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "Function",
          "package": "logic-classes",
          "partial": "Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-FOL.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "TermType",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-FOL.html#TermType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison FOL",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "TermType",
          "package": "logic-classes",
          "partial": "Term Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-FOL.html#t:TermType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "FName",
          "package": "logic-classes",
          "signature": "FName String",
          "source": "src/Data-Logic-Types-Harrison-FOL.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison FOL",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "FName",
          "package": "logic-classes",
          "partial": "FName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-FOL.html#v:FName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "Fn",
          "package": "logic-classes",
          "signature": "Fn Function [TermType]",
          "source": "src/Data-Logic-Types-Harrison-FOL.html#TermType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison FOL",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "Fn",
          "normalized": "Fn Function[TermType]",
          "package": "logic-classes",
          "partial": "Fn",
          "signature": "Fn Function[TermType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-FOL.html#v:Fn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "R",
          "package": "logic-classes",
          "signature": "R String [TermType]",
          "source": "src/Data-Logic-Types-Harrison-FOL.html#FOL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison FOL",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "R",
          "normalized": "R String[TermType]",
          "package": "logic-classes",
          "signature": "R String[TermType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-FOL.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "Skolem",
          "package": "logic-classes",
          "signature": "Skolem String",
          "source": "src/Data-Logic-Types-Harrison-FOL.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison FOL",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "Skolem",
          "package": "logic-classes",
          "partial": "Skolem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-FOL.html#v:Skolem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "Var",
          "package": "logic-classes",
          "signature": "Var String",
          "source": "src/Data-Logic-Types-Harrison-FOL.html#TermType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison FOL",
          "module": "Data.Logic.Types.Harrison.FOL",
          "name": "Var",
          "package": "logic-classes",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-FOL.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "FirstOrder",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "FirstOrder",
          "package": "logic-classes",
          "partial": "First Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Formula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Formula",
          "package": "logic-classes",
          "partial": "Formula",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "And",
          "package": "logic-classes",
          "signature": "And (Formula a) (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "And",
          "package": "logic-classes",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Atom",
          "package": "logic-classes",
          "signature": "Atom a",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Atom",
          "package": "logic-classes",
          "partial": "Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Exists",
          "package": "logic-classes",
          "signature": "Exists String (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Exists",
          "package": "logic-classes",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "F",
          "package": "logic-classes",
          "signature": "F",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "F",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Forall",
          "package": "logic-classes",
          "signature": "Forall String (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Forall",
          "package": "logic-classes",
          "partial": "Forall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:Forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Iff",
          "package": "logic-classes",
          "signature": "Iff (Formula a) (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Iff",
          "package": "logic-classes",
          "partial": "Iff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:Iff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Imp",
          "package": "logic-classes",
          "signature": "Imp (Formula a) (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Imp",
          "package": "logic-classes",
          "partial": "Imp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:Imp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Not",
          "package": "logic-classes",
          "signature": "Not (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Not",
          "package": "logic-classes",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Or",
          "package": "logic-classes",
          "signature": "Or (Formula a) (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "Or",
          "package": "logic-classes",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "T",
          "package": "logic-classes",
          "signature": "T",
          "source": "src/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas FirstOrder",
          "module": "Data.Logic.Types.Harrison.Formulas.FirstOrder",
          "name": "T",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-FirstOrder.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Propositional",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Propositional",
          "package": "logic-classes",
          "partial": "Propositional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Formula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html#Formula",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Formula",
          "package": "logic-classes",
          "partial": "Formula",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "And",
          "package": "logic-classes",
          "signature": "And (Formula a) (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "And",
          "package": "logic-classes",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Atom",
          "package": "logic-classes",
          "signature": "Atom a",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Atom",
          "package": "logic-classes",
          "partial": "Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#v:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "F",
          "package": "logic-classes",
          "signature": "F",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "F",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Iff",
          "package": "logic-classes",
          "signature": "Iff (Formula a) (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Iff",
          "package": "logic-classes",
          "partial": "Iff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#v:Iff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Imp",
          "package": "logic-classes",
          "signature": "Imp (Formula a) (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Imp",
          "package": "logic-classes",
          "partial": "Imp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#v:Imp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Not",
          "package": "logic-classes",
          "signature": "Not (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Not",
          "package": "logic-classes",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Or",
          "package": "logic-classes",
          "signature": "Or (Formula a) (Formula a)",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "Or",
          "package": "logic-classes",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "T",
          "package": "logic-classes",
          "signature": "T",
          "source": "src/Data-Logic-Types-Harrison-Formulas-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Formulas Propositional",
          "module": "Data.Logic.Types.Harrison.Formulas.Propositional",
          "name": "T",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Formulas-Propositional.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Prop",
          "name": "Prop",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-Prop.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Prop",
          "module": "Data.Logic.Types.Harrison.Prop",
          "name": "Prop",
          "package": "logic-classes",
          "partial": "Prop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Prop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Prop",
          "name": "Prop",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Harrison-Prop.html#Prop",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Prop",
          "module": "Data.Logic.Types.Harrison.Prop",
          "name": "Prop",
          "package": "logic-classes",
          "partial": "Prop",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Prop.html#t:Prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Prop",
          "name": "P",
          "package": "logic-classes",
          "signature": "P",
          "source": "src/Data-Logic-Types-Harrison-Prop.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Prop",
          "module": "Data.Logic.Types.Harrison.Prop",
          "name": "P",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Prop.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Harrison.Prop",
          "name": "pname",
          "package": "logic-classes",
          "signature": "String",
          "source": "src/Data-Logic-Types-Harrison-Prop.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Harrison Prop",
          "module": "Data.Logic.Types.Harrison.Prop",
          "name": "pname",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Harrison-Prop.html#v:pname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Propositional",
          "name": "Propositional",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Propositional.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Logic Types Propositional",
          "module": "Data.Logic.Types.Propositional",
          "name": "Propositional",
          "package": "logic-classes",
          "partial": "Propositional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Propositional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range of a formula is {True, False} when it has no free variables.\n\u003c/p\u003e",
          "module": "Data.Logic.Types.Propositional",
          "name": "Formula",
          "package": "logic-classes",
          "source": "src/Data-Logic-Types-Propositional.html#Formula",
          "type": "data"
        },
        "index": {
          "description": "The range of formula is True False when it has no free variables",
          "hierarchy": "Data Logic Types Propositional",
          "module": "Data.Logic.Types.Propositional",
          "name": "Formula",
          "package": "logic-classes",
          "partial": "Formula",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Propositional.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Propositional",
          "name": "Atom",
          "package": "logic-classes",
          "signature": "Atom atom",
          "source": "src/Data-Logic-Types-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Propositional",
          "module": "Data.Logic.Types.Propositional",
          "name": "Atom",
          "package": "logic-classes",
          "partial": "Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Propositional.html#v:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Propositional",
          "name": "Combine",
          "package": "logic-classes",
          "signature": "Combine (Combination (Formula atom))",
          "source": "src/Data-Logic-Types-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Propositional",
          "module": "Data.Logic.Types.Propositional",
          "name": "Combine",
          "package": "logic-classes",
          "partial": "Combine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Propositional.html#v:Combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Propositional",
          "name": "F",
          "package": "logic-classes",
          "signature": "F",
          "source": "src/Data-Logic-Types-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Propositional",
          "module": "Data.Logic.Types.Propositional",
          "name": "F",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Propositional.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Logic.Types.Propositional",
          "name": "T",
          "package": "logic-classes",
          "signature": "T",
          "source": "src/Data-Logic-Types-Propositional.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Logic Types Propositional",
          "module": "Data.Logic.Types.Propositional",
          "name": "T",
          "package": "logic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logic-classes/docs/Data-Logic-Types-Propositional.html#v:T"
      }
    }
  ]
]