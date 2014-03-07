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
        "word": "ifscs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an implementation of a set (inclusion) constraint solver.\n\u003c/p\u003e\u003cp\u003eSet constraints, also known as inclusion constraints, are a\n convenient, expressive, and efficient way to solve graph\n reachability problems.  A constraint system consists of set\n variables and constructed terms representing atomic literals and\n compound terms in the domain.  Terms and atomic literals are\n \u003cem\u003eincluded\u003c/em\u003e in sets by inclusion constraints, and inclusion\n relationships are established between set variables.\n\u003c/p\u003e\u003cp\u003eFor example, consider the following constraint system:\n\u003c/p\u003e\u003cpre\u003e 5 &#8838; S[B] 6 &#8838; S[B] S[B] &#8838; S[A]\u003c/pre\u003e\u003cp\u003eThis says that 5 and 6 (atomic literals) are included in the set\n represented by set variable B.  It also says that set B is a subset\n of set A.  Thus, the least solution to this system is:\n\u003c/p\u003e\u003cpre\u003e S[B] = { 5, 6 }\n S[A] = { 5, 6 }\n\u003c/pre\u003e\u003cp\u003eThis example can be solved with this library with the following\n code:\n\u003c/p\u003e\u003cpre\u003e let constraints = [ atom 6 \u003c=! setVariable \"b\"\n                   , atom 5 \u003c=! setVariable \"b\"\n                   , setVariable \"b\" \u003c=! setVariable \"a\"\n                   ]\n     Just solved = solveSystem constraints\n     Just solutionA = leastSolution solved \"a\"\n\u003c/pre\u003e\u003cp\u003ewhich gives the answer: [ ConstructedTerm 5 [], ConstructedTerm 6\n [] ] corresponding to two atoms: 5 and 6.  The \u003ccode\u003e\u003ca\u003esolveSystem\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eleastSolution\u003c/a\u003e\u003c/code\u003e functions report errors using the \u003ccode\u003eFailure\u003c/code\u003e\n abstraction from the failure package.  This abstraction lets\n callers receive errors in the format they prefer.  This example\n discards errors by treating them as Maybe values.  Errors can be\n observed purely using the Either instance of Failure or impurely in\n the IO monad using the IO instance.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on the set constraint formulation\n described in the FFSA98 paper in PLDI'98:\n \u003ca\u003ehttp://dx.doi.org/10.1145/277650.277667\u003c/a\u003e.  Also available at\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://theory.stanford.edu/~aiken/publications/papers/pldi98b.ps\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis formulation is notable for representing the constraint graph\n in \u003cem\u003einductive\u003c/em\u003e form.  Briefly, inductive form assigns an ordering\n to the set variables in the graph and uses this ordering to reduce\n the amount of work required to saturate the graph.  The reduction\n implies a tradeoff: not all solutions are immediately manifest in\n the solved constraint graph.  Instead, a DFS is required to extract\n each solution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Constraints.Set.Solver",
          "name": "Solver",
          "package": "ifscs",
          "source": "src/Constraints-Set-Solver.html",
          "type": "module"
        },
        "index": {
          "description": "This is an implementation of set inclusion constraint solver Set constraints also known as inclusion constraints are convenient expressive and efficient way to solve graph reachability problems constraint system consists of set variables and constructed terms representing atomic literals and compound terms in the domain Terms and atomic literals are included in sets by inclusion constraints and inclusion relationships are established between set variables For example consider the following constraint system This says that and atomic literals are included in the set represented by set variable It also says that set is subset of set Thus the least solution to this system is This example can be solved with this library with the following code let constraints atom setVariable atom setVariable setVariable setVariable Just solved solveSystem constraints Just solutionA leastSolution solved which gives the answer ConstructedTerm ConstructedTerm corresponding to two atoms and The solveSystem and leastSolution functions report errors using the Failure abstraction from the failure package This abstraction lets callers receive errors in the format they prefer This example discards errors by treating them as Maybe values Errors can be observed purely using the Either instance of Failure or impurely in the IO monad using the IO instance The implementation is based on the set constraint formulation described in the FFSA98 paper in PLDI http dx.doi.org Also available at http theory.stanford.edu aiken publications papers pldi98b.ps This formulation is notable for representing the constraint graph in inductive form Briefly inductive form assigns an ordering to the set variables in the graph and uses this ordering to reduce the amount of work required to saturate the graph The reduction implies tradeoff not all solutions are immediately manifest in the solved constraint graph Instead DFS is required to extract each solution",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "Solver",
          "package": "ifscs",
          "partial": "Solver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe types of errors that can be encountered during constraint\n resolution\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "ConstraintError",
          "package": "ifscs",
          "source": "src/Constraints-Set-Implementation.html#ConstraintError",
          "type": "data"
        },
        "index": {
          "description": "The types of errors that can be encountered during constraint resolution",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "ConstraintError",
          "package": "ifscs",
          "partial": "Constraint Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#t:ConstraintError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn inclusion is a constraint of the form \u003ccode\u003ese1 &#8838; se\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "Inclusion",
          "package": "ifscs",
          "source": "src/Constraints-Set-Implementation.html#Inclusion",
          "type": "data"
        },
        "index": {
          "description": "An inclusion is constraint of the form se1 se",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "Inclusion",
          "package": "ifscs",
          "partial": "Inclusion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#t:Inclusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpressions in the language of set constraints.\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "SetExpression",
          "package": "ifscs",
          "source": "src/Constraints-Set-Implementation.html#SetExpression",
          "type": "data"
        },
        "index": {
          "description": "Expressions in the language of set constraints",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "SetExpression",
          "package": "ifscs",
          "partial": "Set Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#t:SetExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe solved constraint system\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "SolvedSystem",
          "package": "ifscs",
          "source": "src/Constraints-Set-Implementation.html#SolvedSystem",
          "type": "data"
        },
        "index": {
          "description": "The solved constraint system",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "SolvedSystem",
          "package": "ifscs",
          "partial": "Solved System",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#t:SolvedSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags to mark term arguments as covariant or contravariant.\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "Variance",
          "package": "ifscs",
          "source": "src/Constraints-Set-Implementation.html#Variance",
          "type": "data"
        },
        "index": {
          "description": "Tags to mark term arguments as covariant or contravariant",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "Variance",
          "package": "ifscs",
          "partial": "Variance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#t:Variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an inclusion relation between two set expressions.\n\u003c/p\u003e\u003cp\u003eThis is equivalent to \u003ccode\u003ese1 &#8838; se\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "(\u003c=!)",
          "package": "ifscs",
          "signature": "SetExpression v c -\u003e SetExpression v c -\u003e Inclusion v c",
          "source": "src/Constraints-Set-Implementation.html#%3C%3D%21",
          "type": "function"
        },
        "index": {
          "description": "Construct an inclusion relation between two set expressions This is equivalent to se1 se",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "(\u003c=!) \u003c=!",
          "normalized": "SetExpression a b-\u003eSetExpression a b-\u003eInclusion a b",
          "package": "ifscs",
          "signature": "SetExpression v c-\u003eSetExpression v c-\u003eInclusion v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:-60--61--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Constraints.Set.Solver",
          "name": "ConstructedTerm",
          "package": "ifscs",
          "signature": "ConstructedTerm c [Variance] [SetExpression v c]",
          "source": "src/Constraints-Set-Implementation.html#SetExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "ConstructedTerm",
          "normalized": "ConstructedTerm a[Variance][SetExpression b a]",
          "package": "ifscs",
          "partial": "Constructed Term",
          "signature": "ConstructedTerm c[Variance][SetExpression v c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:ConstructedTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Constraints.Set.Solver",
          "name": "Contravariant",
          "package": "ifscs",
          "signature": "Contravariant",
          "source": "src/Constraints-Set-Implementation.html#Variance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "Contravariant",
          "package": "ifscs",
          "partial": "Contravariant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:Contravariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Constraints.Set.Solver",
          "name": "Covariant",
          "package": "ifscs",
          "signature": "Covariant",
          "source": "src/Constraints-Set-Implementation.html#Variance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "Covariant",
          "package": "ifscs",
          "partial": "Covariant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:Covariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Constraints.Set.Solver",
          "name": "EmptySet",
          "package": "ifscs",
          "signature": "EmptySet",
          "source": "src/Constraints-Set-Implementation.html#SetExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "EmptySet",
          "package": "ifscs",
          "partial": "Empty Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:EmptySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe system has no solution because of the given inclusion constraint\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "NoSolution",
          "package": "ifscs",
          "signature": "NoSolution (Inclusion v c)",
          "source": "src/Constraints-Set-Implementation.html#ConstraintError",
          "type": "function"
        },
        "index": {
          "description": "The system has no solution because of the given inclusion constraint",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "NoSolution",
          "package": "ifscs",
          "partial": "No Solution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:NoSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen searching for a solution, the requested variable was not present in the constraint graph\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "NoVariableLabel",
          "package": "ifscs",
          "signature": "NoVariableLabel v",
          "source": "src/Constraints-Set-Implementation.html#ConstraintError",
          "type": "function"
        },
        "index": {
          "description": "When searching for solution the requested variable was not present in the constraint graph",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "NoVariableLabel",
          "package": "ifscs",
          "partial": "No Variable Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:NoVariableLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Constraints.Set.Solver",
          "name": "SetVariable",
          "package": "ifscs",
          "signature": "SetVariable v",
          "source": "src/Constraints-Set-Implementation.html#SetExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "SetVariable",
          "package": "ifscs",
          "partial": "Set Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:SetVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Constraints.Set.Solver",
          "name": "UniversalSet",
          "package": "ifscs",
          "signature": "UniversalSet",
          "source": "src/Constraints-Set-Implementation.html#SetExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "UniversalSet",
          "package": "ifscs",
          "partial": "Universal Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:UniversalSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic terms have a label and arity zero.  This is a shortcut for\n\u003c/p\u003e\u003cpre\u003e term conLabel [] []\n\u003c/pre\u003e",
          "module": "Constraints.Set.Solver",
          "name": "atom",
          "package": "ifscs",
          "signature": "c -\u003e SetExpression v c",
          "source": "src/Constraints-Set-Implementation.html#atom",
          "type": "function"
        },
        "index": {
          "description": "Atomic terms have label and arity zero This is shortcut for term conLabel",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "atom",
          "normalized": "a-\u003eSetExpression b a",
          "package": "ifscs",
          "signature": "c-\u003eSetExpression v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a set expression representing the empty set\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "emptySet",
          "package": "ifscs",
          "signature": "SetExpression v c",
          "source": "src/Constraints-Set-Implementation.html#emptySet",
          "type": "function"
        },
        "index": {
          "description": "Create set expression representing the empty set",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "emptySet",
          "package": "ifscs",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:emptySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the least solution for the given variable.  This can fail\n if the requested variable is not present in the constraint system\n (see \u003ccode\u003e\u003ca\u003eConstraintError\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eLS(y) = All source nodes with a predecessor edge to y, plus LS(x)\n for all x where x has a predecessor edge to y.\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "leastSolution",
          "package": "ifscs",
          "signature": "SolvedSystem v c -\u003e v -\u003e m [SetExpression v c]",
          "source": "src/Constraints-Set-Implementation.html#leastSolution",
          "type": "function"
        },
        "index": {
          "description": "Compute the least solution for the given variable This can fail if the requested variable is not present in the constraint system see ConstraintError LS All source nodes with predecessor edge to plus LS for all where has predecessor edge to",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "leastSolution",
          "normalized": "SolvedSystem a b-\u003ea-\u003ec[SetExpression a b]",
          "package": "ifscs",
          "partial": "Solution",
          "signature": "SolvedSystem v c-\u003ev-\u003em[SetExpression v c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:leastSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new set variable with the given label\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "setVariable",
          "package": "ifscs",
          "signature": "v -\u003e SetExpression v c",
          "source": "src/Constraints-Set-Implementation.html#setVariable",
          "type": "function"
        },
        "index": {
          "description": "Create new set variable with the given label",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "setVariable",
          "normalized": "a-\u003eSetExpression a b",
          "package": "ifscs",
          "partial": "Variable",
          "signature": "v-\u003eSetExpression v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:setVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify and solve the system of set constraints\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "solveSystem",
          "package": "ifscs",
          "signature": "[Inclusion v c] -\u003e m (SolvedSystem v c)",
          "source": "src/Constraints-Set-Implementation.html#solveSystem",
          "type": "function"
        },
        "index": {
          "description": "Simplify and solve the system of set constraints",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "solveSystem",
          "normalized": "[Inclusion a b]-\u003ec(SolvedSystem a b)",
          "package": "ifscs",
          "partial": "System",
          "signature": "[Inclusion v c]-\u003em(SolvedSystem v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:solveSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis returns a function to create terms from lists of\n SetExpressions.  It is meant to be partially applied so that as\n many terms as possible can share the same reference to a label and\n signature.\n\u003c/p\u003e\u003cp\u003eThe list of variances specifies the variance (Covariant or\n Contravariant) for each argument of the term.  A mismatch in the\n length of the variance descriptor and the arguments to the term\n will result in a run-time error.\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "term",
          "package": "ifscs",
          "signature": "c -\u003e [Variance] -\u003e [SetExpression v c] -\u003e SetExpression v c",
          "source": "src/Constraints-Set-Implementation.html#term",
          "type": "function"
        },
        "index": {
          "description": "This returns function to create terms from lists of SetExpressions It is meant to be partially applied so that as many terms as possible can share the same reference to label and signature The list of variances specifies the variance Covariant or Contravariant for each argument of the term mismatch in the length of the variance descriptor and the arguments to the term will result in run-time error",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "term",
          "normalized": "a-\u003e[Variance]-\u003e[SetExpression b a]-\u003eSetExpression b a",
          "package": "ifscs",
          "signature": "c-\u003e[Variance]-\u003e[SetExpression v c]-\u003eSetExpression v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a set expression representing the universal set\n\u003c/p\u003e",
          "module": "Constraints.Set.Solver",
          "name": "universalSet",
          "package": "ifscs",
          "signature": "SetExpression v c",
          "source": "src/Constraints-Set-Implementation.html#universalSet",
          "type": "function"
        },
        "index": {
          "description": "Create set expression representing the universal set",
          "hierarchy": "Constraints Set Solver",
          "module": "Constraints.Set.Solver",
          "name": "universalSet",
          "package": "ifscs",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ifscs/docs/Constraints-Set-Solver.html#v:universalSet"
      }
    }
  ]
]