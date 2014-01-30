[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBig-step proofs using case distinctions on the possible sources of a fact.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.Solver.CaseDistinctions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-Solver-CaseDistinctions.html",
        "fct-type": "module",
        "title": "CaseDistinctions"
      },
      "index": {
        "description": "Big-step proofs using case distinctions on the possible sources of fact",
        "hierarchy": "Theory Constraint Solver CaseDistinctions",
        "module": "Theory.Constraint.Solver.CaseDistinctions",
        "name": "CaseDistinctions",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Distinctions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:precomputeCaseDistinctions",
      "description": {
        "fct-descr": "\u003cp\u003ePrecompute a saturated set of case distinctions.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.CaseDistinctions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext-\u003e [LNGuarded]-\u003e [CaseDistinction]",
        "fct-type": "function",
        "title": "precomputeCaseDistinctions"
      },
      "index": {
        "description": "Precompute saturated set of case distinctions",
        "hierarchy": "Theory Constraint Solver CaseDistinctions",
        "module": "Theory.Constraint.Solver.CaseDistinctions",
        "name": "precomputeCaseDistinctions",
        "normalized": "ProofContext-\u003e[LNGuarded]-\u003e[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "Case Distinctions",
        "signature": "ProofContext-\u003e[LNGuarded]-\u003e[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:refineWithTypingAsms",
      "description": {
        "fct-descr": "\u003cp\u003eRefine a set of case distinction by exploiting additional typing\n assumptions.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.CaseDistinctions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[LNGuarded]-\u003e ProofContext-\u003e [CaseDistinction]-\u003e [CaseDistinction]",
        "fct-type": "function",
        "title": "refineWithTypingAsms"
      },
      "index": {
        "description": "Refine set of case distinction by exploiting additional typing assumptions",
        "hierarchy": "Theory Constraint Solver CaseDistinctions",
        "module": "Theory.Constraint.Solver.CaseDistinctions",
        "name": "refineWithTypingAsms",
        "normalized": "[LNGuarded]-\u003eProofContext-\u003e[CaseDistinction]-\u003e[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "With Typing Asms",
        "signature": "[LNGuarded]-\u003eProofContext-\u003e[CaseDistinction]-\u003e[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:removeRedundantCases",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of stable variables (that are referenced from outside and cannot be simply\n renamed) and a list containing systems, this function returns a subsequence of the list\n such that for all removed systems, there is a remaining system that is equal modulo\n renaming of non-stable variables.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.CaseDistinctions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext -\u003e [LVar] -\u003e (a -\u003e System) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Theory-Constraint-Solver-CaseDistinctions.html#removeRedundantCases",
        "fct-type": "function",
        "title": "removeRedundantCases"
      },
      "index": {
        "description": "Given list of stable variables that are referenced from outside and cannot be simply renamed and list containing systems this function returns subsequence of the list such that for all removed systems there is remaining system that is equal modulo renaming of non-stable variables",
        "hierarchy": "Theory Constraint Solver CaseDistinctions",
        "module": "Theory.Constraint.Solver.CaseDistinctions",
        "name": "removeRedundantCases",
        "normalized": "ProofContext-\u003e[LVar]-\u003e(a-\u003eSystem)-\u003e[a]-\u003e[a]",
        "package": "tamarin-prover-theory",
        "partial": "Redundant Cases",
        "signature": "ProofContext-\u003e[LVar]-\u003e(a-\u003eSystem)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:solveWithCaseDistinction",
      "description": {
        "fct-descr": "\u003cp\u003eTry to solve a premise goal or \u003ccode\u003eKU\u003c/code\u003e action using the first precomputed\n case distinction with a matching premise.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.CaseDistinctions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext -\u003e [CaseDistinction] -\u003e Goal -\u003e Maybe (Reduction [String])",
        "fct-source": "src/Theory-Constraint-Solver-CaseDistinctions.html#solveWithCaseDistinction",
        "fct-type": "function",
        "title": "solveWithCaseDistinction"
      },
      "index": {
        "description": "Try to solve premise goal or KU action using the first precomputed case distinction with matching premise",
        "hierarchy": "Theory Constraint Solver CaseDistinctions",
        "module": "Theory.Constraint.Solver.CaseDistinctions",
        "name": "solveWithCaseDistinction",
        "normalized": "ProofContext-\u003e[CaseDistinction]-\u003eGoal-\u003eMaybe(Reduction[String])",
        "package": "tamarin-prover-theory",
        "partial": "With Case Distinction",
        "signature": "ProofContext-\u003e[CaseDistinction]-\u003eGoal-\u003eMaybe(Reduction[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:unsolvedChainConstraints",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of remaining chain constraints of each case.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.CaseDistinctions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CaseDistinction -\u003e [Int]",
        "fct-source": "src/Theory-Constraint-Solver-CaseDistinctions.html#unsolvedChainConstraints",
        "fct-type": "function",
        "title": "unsolvedChainConstraints"
      },
      "index": {
        "description": "The number of remaining chain constraints of each case",
        "hierarchy": "Theory Constraint Solver CaseDistinctions",
        "module": "Theory.Constraint.Solver.CaseDistinctions",
        "name": "unsolvedChainConstraints",
        "normalized": "CaseDistinction-\u003e[Int]",
        "package": "tamarin-prover-theory",
        "partial": "Chain Constraints",
        "signature": "CaseDistinction-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the public interface for constructing and deconstructing constraint\n systems. The interface for performing constraint solving provided by\n \u003ca\u003eTheory.Constraint.Solver\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html",
        "fct-type": "module",
        "title": "Contradictions"
      },
      "index": {
        "description": "This is the public interface for constructing and deconstructing constraint systems The interface for performing constraint solving provided by Theory.Constraint.Solver",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "Contradictions",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Contradictions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#t:Contradiction",
      "description": {
        "fct-descr": "\u003cp\u003eReasons why a constraint \u003ccode\u003e\u003ca\u003eSystem\u003c/a\u003e\u003c/code\u003e can be contradictory.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "data",
        "title": "Contradiction"
      },
      "index": {
        "description": "Reasons why constraint System can be contradictory",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "Contradiction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Contradiction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:Cyclic",
      "description": {
        "fct-descr": "\u003cp\u003eThe paths are cyclic.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Cyclic",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "Cyclic"
      },
      "index": {
        "description": "The paths are cyclic",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "Cyclic",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Cyclic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:ForbiddenBP",
      "description": {
        "fct-descr": "\u003cp\u003eForbidden bilinear pairing rule instance\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ForbiddenBP",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "ForbiddenBP"
      },
      "index": {
        "description": "Forbidden bilinear pairing rule instance",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "ForbiddenBP",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Forbidden BP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:ForbiddenExp",
      "description": {
        "fct-descr": "\u003cp\u003eForbidden Exp-down rule instance\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ForbiddenExp",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "ForbiddenExp"
      },
      "index": {
        "description": "Forbidden Exp-down rule instance",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "ForbiddenExp",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Forbidden Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:ForbiddenKD",
      "description": {
        "fct-descr": "\u003cp\u003ehas forbidden KD-fact\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ForbiddenKD",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "ForbiddenKD"
      },
      "index": {
        "description": "has forbidden KD-fact",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "ForbiddenKD",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Forbidden KD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:FormulasFalse",
      "description": {
        "fct-descr": "\u003cp\u003eFalse in formulas\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FormulasFalse",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "FormulasFalse"
      },
      "index": {
        "description": "False in formulas",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "FormulasFalse",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Formulas False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:ImpossibleChain",
      "description": {
        "fct-descr": "\u003cp\u003ehas impossible chain\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ImpossibleChain",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "ImpossibleChain"
      },
      "index": {
        "description": "has impossible chain",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "ImpossibleChain",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Impossible Chain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:IncompatibleEqs",
      "description": {
        "fct-descr": "\u003cp\u003eIncompatible equalities.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "IncompatibleEqs",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "IncompatibleEqs"
      },
      "index": {
        "description": "Incompatible equalities",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "IncompatibleEqs",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Incompatible Eqs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:NodeAfterLast",
      "description": {
        "fct-descr": "\u003cp\u003eThere is a node after the last node.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeAfterLast (NodeId, NodeId)",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "NodeAfterLast"
      },
      "index": {
        "description": "There is node after the last node",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "NodeAfterLast",
        "normalized": "NodeAfterLast(NodeId,NodeId)",
        "package": "tamarin-prover-theory",
        "partial": "Node After Last",
        "signature": "NodeAfterLast(NodeId,NodeId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:NonInjectiveFactInstance",
      "description": {
        "fct-descr": "\u003cp\u003eContradicts that certain facts have unique instances.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NonInjectiveFactInstance (NodeId, NodeId, NodeId)",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "NonInjectiveFactInstance"
      },
      "index": {
        "description": "Contradicts that certain facts have unique instances",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "NonInjectiveFactInstance",
        "normalized": "NonInjectiveFactInstance(NodeId,NodeId,NodeId)",
        "package": "tamarin-prover-theory",
        "partial": "Non Injective Fact Instance",
        "signature": "NonInjectiveFactInstance(NodeId,NodeId,NodeId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:NonNormalTerms",
      "description": {
        "fct-descr": "\u003cp\u003eHas terms that are not in normal form.\n | NonLastNode                    -- ^ Has a non-silent node after the last node.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NonNormalTerms",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "NonNormalTerms"
      },
      "index": {
        "description": "Has terms that are not in normal form NonLastNode Has non-silent node after the last node",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "NonNormalTerms",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Non Normal Terms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:SuperfluousLearn",
      "description": {
        "fct-descr": "\u003cp\u003eA term is derived both before and after a learn\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SuperfluousLearn LNTerm NodeId",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "function",
        "title": "SuperfluousLearn"
      },
      "index": {
        "description": "term is derived both before and after learn",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "SuperfluousLearn",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Superfluous Learn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:contradictions",
      "description": {
        "fct-descr": "\u003cp\u003eAll CR-rules reducing a constraint system to *&#10178;* represented as a list of\n trivial contradictions. Note that some constraint systems are also removed\n because they have no unifier. This is part of unification. Note also that\n *S_{&#172;,@}* is handled as part of *S_&#8704;*.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext -\u003e System -\u003e [Contradiction]",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#contradictions",
        "fct-type": "function",
        "title": "contradictions"
      },
      "index": {
        "description": "All CR-rules reducing constraint system to represented as list of trivial contradictions Note that some constraint systems are also removed because they have no unifier This is part of unification Note also that is handled as part of",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "contradictions",
        "normalized": "ProofContext-\u003eSystem-\u003e[Contradiction]",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "ProofContext-\u003eSystem-\u003e[Contradiction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:contradictorySystem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the constraint system is contradictory.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext -\u003e System -\u003e Bool",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#contradictorySystem",
        "fct-type": "function",
        "title": "contradictorySystem"
      },
      "index": {
        "description": "True if the constraint system is contradictory",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "contradictorySystem",
        "normalized": "ProofContext-\u003eSystem-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "System",
        "signature": "ProofContext-\u003eSystem-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:prettyContradiction",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a \u003ccode\u003e\u003ca\u003eContradiction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Contradiction -\u003e d",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#prettyContradiction",
        "fct-type": "function",
        "title": "prettyContradiction"
      },
      "index": {
        "description": "Pretty-print Contradiction",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "prettyContradiction",
        "normalized": "Contradiction-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Contradiction",
        "signature": "Contradiction-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:substCreatesNonNormalTerms",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Contradictions",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "MaudeHandle -\u003e System -\u003e LNSubst -\u003e LNSubstVFresh -\u003e Bool",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#substCreatesNonNormalTerms",
        "fct-type": "function",
        "title": "substCreatesNonNormalTerms"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Contradictions",
        "module": "Theory.Constraint.Solver.Contradictions",
        "name": "substCreatesNonNormalTerms",
        "normalized": "MaudeHandle-\u003eSystem-\u003eLNSubst-\u003eLNSubstVFresh-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Creates Non Normal Terms",
        "signature": "MaudeHandle-\u003eSystem-\u003eLNSubst-\u003eLNSubstVFresh-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe constraint reduction rules, which are not enforced as invariants in\n \u003ca\u003eTheory.Constraint.Solver.Reduction\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA goal represents a possible application of a rule that may result in\n multiple cases or even non-termination (if applied repeatedly). These goals\n are computed as the list of \u003ccode\u003e\u003ca\u003eopenGoals\u003c/a\u003e\u003c/code\u003e. See\n \u003ca\u003eTheory.Constraint.Solver.ProofMethod\u003c/a\u003e for the public interface to solving\n goals and the implementation of heuristics.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.Solver.Goals",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-Solver-Goals.html",
        "fct-type": "module",
        "title": "Goals"
      },
      "index": {
        "description": "The constraint reduction rules which are not enforced as invariants in Theory.Constraint.Solver.Reduction goal represents possible application of rule that may result in multiple cases or even non-termination if applied repeatedly These goals are computed as the list of openGoals See Theory.Constraint.Solver.ProofMethod for the public interface to solving goals and the implementation of heuristics",
        "hierarchy": "Theory Constraint Solver Goals",
        "module": "Theory.Constraint.Solver.Goals",
        "name": "Goals",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#t:AnnotatedGoal",
      "description": {
        "fct-descr": "\u003cp\u003eGoals annotated with their number and usefulness.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Goals",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Constraint-Solver-Goals.html#AnnotatedGoal",
        "fct-type": "type",
        "title": "AnnotatedGoal"
      },
      "index": {
        "description": "Goals annotated with their number and usefulness",
        "hierarchy": "Theory Constraint Solver Goals",
        "module": "Theory.Constraint.Solver.Goals",
        "name": "AnnotatedGoal",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Annotated Goal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#t:Usefulness",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Goals",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
        "fct-type": "data",
        "title": "Usefulness"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Goals",
        "module": "Theory.Constraint.Solver.Goals",
        "name": "Usefulness",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Usefulness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:CurrentlyDeducible",
      "description": {
        "fct-descr": "\u003cp\u003eA message that is deducible for the current solution.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Goals",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CurrentlyDeducible",
        "fct-source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
        "fct-type": "function",
        "title": "CurrentlyDeducible"
      },
      "index": {
        "description": "message that is deducible for the current solution",
        "hierarchy": "Theory Constraint Solver Goals",
        "module": "Theory.Constraint.Solver.Goals",
        "name": "CurrentlyDeducible",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Currently Deducible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:LoopBreaker",
      "description": {
        "fct-descr": "\u003cp\u003eA goal that is delayed to avoid immediate termination.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Goals",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LoopBreaker",
        "fct-source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
        "fct-type": "function",
        "title": "LoopBreaker"
      },
      "index": {
        "description": "goal that is delayed to avoid immediate termination",
        "hierarchy": "Theory Constraint Solver Goals",
        "module": "Theory.Constraint.Solver.Goals",
        "name": "LoopBreaker",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Loop Breaker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:ProbablyConstructible",
      "description": {
        "fct-descr": "\u003cp\u003eA goal that is likely to be constructible by the adversary.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Goals",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProbablyConstructible",
        "fct-source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
        "fct-type": "function",
        "title": "ProbablyConstructible"
      },
      "index": {
        "description": "goal that is likely to be constructible by the adversary",
        "hierarchy": "Theory Constraint Solver Goals",
        "module": "Theory.Constraint.Solver.Goals",
        "name": "ProbablyConstructible",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Probably Constructible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:Useful",
      "description": {
        "fct-descr": "\u003cp\u003eA goal that is likely to result in progress.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Goals",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Useful",
        "fct-source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
        "fct-type": "function",
        "title": "Useful"
      },
      "index": {
        "description": "goal that is likely to result in progress",
        "hierarchy": "Theory Constraint Solver Goals",
        "module": "Theory.Constraint.Solver.Goals",
        "name": "Useful",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Useful",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:openGoals",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of goals that must be solved before a solution can be extracted.\n Each goal is annotated with its age and an indicator for its usefulness.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Goals",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [AnnotatedGoal]",
        "fct-source": "src/Theory-Constraint-Solver-Goals.html#openGoals",
        "fct-type": "function",
        "title": "openGoals"
      },
      "index": {
        "description": "The list of goals that must be solved before solution can be extracted Each goal is annotated with its age and an indicator for its usefulness",
        "hierarchy": "Theory Constraint Solver Goals",
        "module": "Theory.Constraint.Solver.Goals",
        "name": "openGoals",
        "normalized": "System-\u003e[AnnotatedGoal]",
        "package": "tamarin-prover-theory",
        "partial": "Goals",
        "signature": "System-\u003e[AnnotatedGoal]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:solveGoal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esolveGoal rules goal\u003c/code\u003e enumerates all possible cases of how this goal\n could be solved in the context of the given \u003ccode\u003erules\u003c/code\u003e. For each case, a\n sensible case-name is returned.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Goals",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal -\u003e Reduction String",
        "fct-source": "src/Theory-Constraint-Solver-Goals.html#solveGoal",
        "fct-type": "function",
        "title": "solveGoal"
      },
      "index": {
        "description": "solveGoal rules goal enumerates all possible cases of how this goal could be solved in the context of the given rules For each case sensible case-name is returned",
        "hierarchy": "Theory Constraint Solver Goals",
        "module": "Theory.Constraint.Solver.Goals",
        "name": "solveGoal",
        "normalized": "Goal-\u003eReduction String",
        "package": "tamarin-prover-theory",
        "partial": "Goal",
        "signature": "Goal-\u003eReduction String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProof methods and heuristics: the external small-step interface to the\n constraint solver.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html",
        "fct-type": "module",
        "title": "ProofMethod"
      },
      "index": {
        "description": "Proof methods and heuristics the external small-step interface to the constraint solver",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "ProofMethod",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#t:CaseName",
      "description": {
        "fct-descr": "\u003cp\u003eEvery case in a proof is uniquely named.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#CaseName",
        "fct-type": "type",
        "title": "CaseName"
      },
      "index": {
        "description": "Every case in proof is uniquely named",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "CaseName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#t:GoalRanking",
      "description": {
        "fct-descr": "\u003cp\u003eThe different available functions to rank goals with respect to their\n order of solving in a constraint system.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#GoalRanking",
        "fct-type": "data",
        "title": "GoalRanking"
      },
      "index": {
        "description": "The different available functions to rank goals with respect to their order of solving in constraint system",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "GoalRanking",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goal Ranking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#t:Heuristic",
      "description": {
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#Heuristic",
        "fct-type": "data",
        "title": "Heuristic"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "Heuristic",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Heuristic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#t:ProofMethod",
      "description": {
        "fct-descr": "\u003cp\u003eSound transformations of sequents.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
        "fct-type": "data",
        "title": "ProofMethod"
      },
      "index": {
        "description": "Sound transformations of sequents",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "ProofMethod",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Contradiction",
      "description": {
        "fct-descr": "\u003cp\u003eA contradiction could be\n derived, possibly with a reason.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Contradiction (Maybe Contradiction)",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
        "fct-type": "function",
        "title": "Contradiction"
      },
      "index": {
        "description": "contradiction could be derived possibly with reason",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "Contradiction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Contradiction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:GoalNrRanking",
      "description": {
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GoalNrRanking",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#GoalRanking",
        "fct-type": "function",
        "title": "GoalNrRanking"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "GoalNrRanking",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goal Nr Ranking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Induction",
      "description": {
        "fct-descr": "\u003cp\u003eUse inductive strengthening on\n the single formula constraint in\n the system.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Induction",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
        "fct-type": "function",
        "title": "Induction"
      },
      "index": {
        "description": "Use inductive strengthening on the single formula constraint in the system",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "Induction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Induction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Simplify",
      "description": {
        "fct-descr": "\u003cp\u003eA simplification step.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Simplify",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
        "fct-type": "function",
        "title": "Simplify"
      },
      "index": {
        "description": "simplification step",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "Simplify",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Simplify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:SmartRanking",
      "description": {
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SmartRanking Bool",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#GoalRanking",
        "fct-type": "function",
        "title": "SmartRanking"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "SmartRanking",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Smart Ranking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:SolveGoal",
      "description": {
        "fct-descr": "\u003cp\u003eA goal that was solved.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SolveGoal Goal",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
        "fct-type": "function",
        "title": "SolveGoal"
      },
      "index": {
        "description": "goal that was solved",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "SolveGoal",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Solve Goal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Solved",
      "description": {
        "fct-descr": "\u003cp\u003eAn attack was fond\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Solved",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
        "fct-type": "function",
        "title": "Solved"
      },
      "index": {
        "description": "An attack was fond",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "Solved",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Solved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Sorry",
      "description": {
        "fct-descr": "\u003cp\u003eProof was not completed\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Sorry (Maybe String)",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
        "fct-type": "function",
        "title": "Sorry"
      },
      "index": {
        "description": "Proof was not completed",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "Sorry",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Sorry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:UsefulGoalNrRanking",
      "description": {
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "UsefulGoalNrRanking",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#GoalRanking",
        "fct-type": "function",
        "title": "UsefulGoalNrRanking"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "UsefulGoalNrRanking",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Useful Goal Nr Ranking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:execProofMethod",
      "description": {
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext -\u003e ProofMethod -\u003e System -\u003e Maybe (Map CaseName System)",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#execProofMethod",
        "fct-type": "function",
        "title": "execProofMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "execProofMethod",
        "normalized": "ProofContext-\u003eProofMethod-\u003eSystem-\u003eMaybe(Map CaseName System)",
        "package": "tamarin-prover-theory",
        "partial": "Proof Method",
        "signature": "ProofContext-\u003eProofMethod-\u003eSystem-\u003eMaybe(Map CaseName System)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:goalRankingName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name/explanation of a \u003ccode\u003e\u003ca\u003eGoalRanking\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GoalRanking -\u003e String",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#goalRankingName",
        "fct-type": "function",
        "title": "goalRankingName"
      },
      "index": {
        "description": "The name explanation of GoalRanking",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "goalRankingName",
        "normalized": "GoalRanking-\u003eString",
        "package": "tamarin-prover-theory",
        "partial": "Ranking Name",
        "signature": "GoalRanking-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:prettyProofMethod",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a proof method.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofMethod -\u003e d",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#prettyProofMethod",
        "fct-type": "function",
        "title": "prettyProofMethod"
      },
      "index": {
        "description": "Pretty-print proof method",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "prettyProofMethod",
        "normalized": "ProofMethod-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Proof Method",
        "signature": "ProofMethod-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:rankProofMethods",
      "description": {
        "fct-descr": "\u003cp\u003eUse a \u003ccode\u003e\u003ca\u003eGoalRanking\u003c/a\u003e\u003c/code\u003e to generate the ranked, list of possible\n \u003ccode\u003e\u003ca\u003eProofMethod\u003c/a\u003e\u003c/code\u003es and their corresponding results in this \u003ccode\u003e\u003ca\u003eProofContext\u003c/a\u003e\u003c/code\u003e and\n for this \u003ccode\u003e\u003ca\u003eSystem\u003c/a\u003e\u003c/code\u003e. If the resulting list is empty, then the constraint\n system is solved.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GoalRanking -\u003e ProofContext -\u003e System -\u003e [(ProofMethod, (Map CaseName System, String))]",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#rankProofMethods",
        "fct-type": "function",
        "title": "rankProofMethods"
      },
      "index": {
        "description": "Use GoalRanking to generate the ranked list of possible ProofMethod and their corresponding results in this ProofContext and for this System If the resulting list is empty then the constraint system is solved",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "rankProofMethods",
        "normalized": "GoalRanking-\u003eProofContext-\u003eSystem-\u003e[(ProofMethod,(Map CaseName System,String))]",
        "package": "tamarin-prover-theory",
        "partial": "Proof Methods",
        "signature": "GoalRanking-\u003eProofContext-\u003eSystem-\u003e[(ProofMethod,(Map CaseName System,String))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:roundRobinHeuristic",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for heuristics. Schedules the goal rankings in a\n round-robin fashion dependent on the proof depth.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[GoalRanking] -\u003e Heuristic",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#roundRobinHeuristic",
        "fct-type": "function",
        "title": "roundRobinHeuristic"
      },
      "index": {
        "description": "Smart constructor for heuristics Schedules the goal rankings in round-robin fashion dependent on the proof depth",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "roundRobinHeuristic",
        "normalized": "[GoalRanking]-\u003eHeuristic",
        "package": "tamarin-prover-theory",
        "partial": "Robin Heuristic",
        "signature": "[GoalRanking]-\u003eHeuristic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:useHeuristic",
      "description": {
        "fct-descr": "\u003cp\u003eUse a heuristic to schedule a \u003ccode\u003e\u003ca\u003eGoalRanking\u003c/a\u003e\u003c/code\u003e according to the given\n proof-depth.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.ProofMethod",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Heuristic -\u003e Int -\u003e GoalRanking",
        "fct-source": "src/Theory-Constraint-Solver-ProofMethod.html#useHeuristic",
        "fct-type": "function",
        "title": "useHeuristic"
      },
      "index": {
        "description": "Use heuristic to schedule GoalRanking according to the given proof-depth",
        "hierarchy": "Theory Constraint Solver ProofMethod",
        "module": "Theory.Constraint.Solver.ProofMethod",
        "name": "useHeuristic",
        "normalized": "Heuristic-\u003eInt-\u003eGoalRanking",
        "package": "tamarin-prover-theory",
        "partial": "Heuristic",
        "signature": "Heuristic-\u003eInt-\u003eGoalRanking"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad for writing constraint reduction steps together with basic steps\n for inserting nodes, edges, actions, and equations and applying\n substitutions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html",
        "fct-type": "module",
        "title": "Reduction"
      },
      "index": {
        "description": "monad for writing constraint reduction steps together with basic steps for inserting nodes edges actions and equations and applying substitutions",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "Reduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Reduction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#t:ChangeIndicator",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate whether the constraint system was changed or not.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#ChangeIndicator",
        "fct-type": "data",
        "title": "ChangeIndicator"
      },
      "index": {
        "description": "Indicate whether the constraint system was changed or not",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "ChangeIndicator",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Change Indicator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#t:Reduction",
      "description": {
        "fct-descr": "\u003cp\u003eA constraint reduction step. Its state is the current constraint system,\n it can generate fresh names, split over cases, and access the proof\n context.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#Reduction",
        "fct-type": "type",
        "title": "Reduction"
      },
      "index": {
        "description": "constraint reduction step Its state is the current constraint system it can generate fresh names split over cases and access the proof context",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "Reduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Reduction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#t:SplitStrategy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSplitStrategy\u003c/a\u003e\u003c/code\u003e denotes if the equation store should be split into\n multiple equation stores.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#SplitStrategy",
        "fct-type": "data",
        "title": "SplitStrategy"
      },
      "index": {
        "description": "SplitStrategy denotes if the equation store should be split into multiple equation stores",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "SplitStrategy",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Split Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:Changed",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Changed",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#ChangeIndicator",
        "fct-type": "function",
        "title": "Changed"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "Changed",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Changed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:SplitLater",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SplitLater",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#SplitStrategy",
        "fct-type": "function",
        "title": "SplitLater"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "SplitLater",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Split Later",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:SplitNow",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SplitNow",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#SplitStrategy",
        "fct-type": "function",
        "title": "SplitNow"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "SplitNow",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Split Now",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:Unchanged",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Unchanged",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#ChangeIndicator",
        "fct-type": "function",
        "title": "Unchanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "Unchanged",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Unchanged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:applyChangeList",
      "description": {
        "fct-descr": "\u003cp\u003eApply a list of changes to the proof state.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[Reduction ()] -\u003e Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#applyChangeList",
        "fct-type": "function",
        "title": "applyChangeList"
      },
      "index": {
        "description": "Apply list of changes to the proof state",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "applyChangeList",
        "normalized": "[Reduction()]-\u003eReduction ChangeIndicator",
        "package": "tamarin-prover-theory",
        "partial": "Change List",
        "signature": "[Reduction()]-\u003eReduction ChangeIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:conjoinSystem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003econjoinSystem se\u003c/code\u003e conjoins the logical information in \u003ccode\u003ese\u003c/code\u003e to the\n constraint system. It assumes that the free variables in \u003ccode\u003ese\u003c/code\u003e are shared\n with the free variables in the proof state.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#conjoinSystem",
        "fct-type": "function",
        "title": "conjoinSystem"
      },
      "index": {
        "description": "conjoinSystem se conjoins the logical information in se to the constraint system It assumes that the free variables in se are shared with the free variables in the proof state",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "conjoinSystem",
        "normalized": "System-\u003eReduction()",
        "package": "tamarin-prover-theory",
        "partial": "System",
        "signature": "System-\u003eReduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:execReduction",
      "description": {
        "fct-descr": "\u003cp\u003eRun a constraint reduction returning only the updated constraint systems\n and the new freshness states.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction a -\u003e ProofContext -\u003e System -\u003e FreshState -\u003e Disj (System, FreshState)",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#execReduction",
        "fct-type": "function",
        "title": "execReduction"
      },
      "index": {
        "description": "Run constraint reduction returning only the updated constraint systems and the new freshness states",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "execReduction",
        "normalized": "Reduction a-\u003eProofContext-\u003eSystem-\u003eFreshState-\u003eDisj(System,FreshState)",
        "package": "tamarin-prover-theory",
        "partial": "Reduction",
        "signature": "Reduction a-\u003eProofContext-\u003eSystem-\u003eFreshState-\u003eDisj(System,FreshState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:getMaudeHandle",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eMaudeHandle\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eProofContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction MaudeHandle",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#getMaudeHandle",
        "fct-type": "function",
        "title": "getMaudeHandle"
      },
      "index": {
        "description": "Retrieve the MaudeHandle from the ProofContext",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "getMaudeHandle",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Maude Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:getProofContext",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eProofContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ProofContext",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#getProofContext",
        "fct-type": "function",
        "title": "getProofContext"
      },
      "index": {
        "description": "Retrieve the ProofContext",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "getProofContext",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertAction",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e atom. Ensures that (almost all) trivial *KU* actions\n are solved immediately using rule *S_{at,u,triv}*. We currently avoid\n adding intermediate products. Indicates whether nodes other than the given\n action have been added to the constraint system.\n\u003c/p\u003e\u003cp\u003eFIXME: Ensure that intermediate products are also solved before stating\n that no rule is applicable.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeId -\u003e LNFact -\u003e Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#insertAction",
        "fct-type": "function",
        "title": "insertAction"
      },
      "index": {
        "description": "Insert an Action atom Ensures that almost all trivial KU actions are solved immediately using rule at triv We currently avoid adding intermediate products Indicates whether nodes other than the given action have been added to the constraint system FIXME Ensure that intermediate products are also solved before stating that no rule is applicable",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "insertAction",
        "normalized": "NodeId-\u003eLNFact-\u003eReduction ChangeIndicator",
        "package": "tamarin-prover-theory",
        "partial": "Action",
        "signature": "NodeId-\u003eLNFact-\u003eReduction ChangeIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertAtom",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an atom. Returns \u003ccode\u003e\u003ca\u003eChanged\u003c/a\u003e\u003c/code\u003e if another part of the constraint\n system than the set of actions was changed.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNAtom -\u003e Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#insertAtom",
        "fct-type": "function",
        "title": "insertAtom"
      },
      "index": {
        "description": "Insert an atom Returns Changed if another part of the constraint system than the set of actions was changed",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "insertAtom",
        "normalized": "LNAtom-\u003eReduction ChangeIndicator",
        "package": "tamarin-prover-theory",
        "partial": "Atom",
        "signature": "LNAtom-\u003eReduction ChangeIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertChain",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a chain constrain.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeConc -\u003e NodePrem -\u003e Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#insertChain",
        "fct-type": "function",
        "title": "insertChain"
      },
      "index": {
        "description": "Insert chain constrain",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "insertChain",
        "normalized": "NodeConc-\u003eNodePrem-\u003eReduction()",
        "package": "tamarin-prover-theory",
        "partial": "Chain",
        "signature": "NodeConc-\u003eNodePrem-\u003eReduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertEdges",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an edge constraint. CR-rule *DG1_2* is enforced automatically,\n i.e., the fact equalities are enforced.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[(NodeConc, LNFact, LNFact, NodePrem)] -\u003e Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#insertEdges",
        "fct-type": "function",
        "title": "insertEdges"
      },
      "index": {
        "description": "Insert an edge constraint CR-rule DG1 is enforced automatically i.e the fact equalities are enforced",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "insertEdges",
        "normalized": "[(NodeConc,LNFact,LNFact,NodePrem)]-\u003eReduction()",
        "package": "tamarin-prover-theory",
        "partial": "Edges",
        "signature": "[(NodeConc,LNFact,LNFact,NodePrem)]-\u003eReduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertFormula",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eGuarded\u003c/a\u003e\u003c/code\u003e formula. Ensures that existentials, conjunctions, negated\n last atoms, and negated less atoms, are immediately solved using the rules\n *S_exists*, *S_and*, *S_not,last*, and *S_not,less*. Only the inserted\n formula is marked as solved. Other intermediate formulas are not marked.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNGuarded -\u003e Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#insertFormula",
        "fct-type": "function",
        "title": "insertFormula"
      },
      "index": {
        "description": "Insert Guarded formula Ensures that existentials conjunctions negated last atoms and negated less atoms are immediately solved using the rules exists and not last and not less Only the inserted formula is marked as solved Other intermediate formulas are not marked",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "insertFormula",
        "normalized": "LNGuarded-\u003eReduction()",
        "package": "tamarin-prover-theory",
        "partial": "Formula",
        "signature": "LNGuarded-\u003eReduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertFreshNode",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a fresh rule node labelled with a fresh instance of one of the rules\n and solve it's \u003ccode\u003eFr\u003c/code\u003e, \u003ccode\u003eIn\u003c/code\u003e, and \u003ccode\u003eKU\u003c/code\u003e premises immediatly.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[RuleAC] -\u003e Reduction (NodeId, RuleACInst)",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#insertFreshNode",
        "fct-type": "function",
        "title": "insertFreshNode"
      },
      "index": {
        "description": "Insert fresh rule node labelled with fresh instance of one of the rules and solve it Fr In and KU premises immediatly",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "insertFreshNode",
        "normalized": "[RuleAC]-\u003eReduction(NodeId,RuleACInst)",
        "package": "tamarin-prover-theory",
        "partial": "Fresh Node",
        "signature": "[RuleAC]-\u003eReduction(NodeId,RuleACInst)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertFreshNodeConc",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a fresh rule node labelled with a fresh instance of one of the\n rules and return one of the conclusions.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[RuleAC] -\u003e Reduction (RuleACInst, NodeConc, LNFact)",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#insertFreshNodeConc",
        "fct-type": "function",
        "title": "insertFreshNodeConc"
      },
      "index": {
        "description": "Insert fresh rule node labelled with fresh instance of one of the rules and return one of the conclusions",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "insertFreshNodeConc",
        "normalized": "[RuleAC]-\u003eReduction(RuleACInst,NodeConc,LNFact)",
        "package": "tamarin-prover-theory",
        "partial": "Fresh Node Conc",
        "signature": "[RuleAC]-\u003eReduction(RuleACInst,NodeConc,LNFact)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertGoal",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eGoal\u003c/a\u003e\u003c/code\u003e and store its age.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal -\u003e Bool -\u003e Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#insertGoal",
        "fct-type": "function",
        "title": "insertGoal"
      },
      "index": {
        "description": "Insert Goal and store its age",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "insertGoal",
        "normalized": "Goal-\u003eBool-\u003eReduction()",
        "package": "tamarin-prover-theory",
        "partial": "Goal",
        "signature": "Goal-\u003eBool-\u003eReduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertLess",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eLess\u003c/a\u003e\u003c/code\u003e atom. \u003ccode\u003einsertLess i j\u003c/code\u003e means that *i \u003c j* is added.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeId -\u003e NodeId -\u003e Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#insertLess",
        "fct-type": "function",
        "title": "insertLess"
      },
      "index": {
        "description": "Insert Less atom insertLess means that is added",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "insertLess",
        "normalized": "NodeId-\u003eNodeId-\u003eReduction()",
        "package": "tamarin-prover-theory",
        "partial": "Less",
        "signature": "NodeId-\u003eNodeId-\u003eReduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:labelNodeId",
      "description": {
        "fct-descr": "\u003cp\u003eLabel a node-id with a fresh instance of one of the rules and\n solve it's \u003ccode\u003eFr\u003c/code\u003e, \u003ccode\u003eIn\u003c/code\u003e, and \u003ccode\u003eKU\u003c/code\u003e premises immediatly.\n\u003c/p\u003e\u003cp\u003ePRE: Node must not yet be labelled with a rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeId -\u003e [RuleAC] -\u003e Reduction RuleACInst",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#labelNodeId",
        "fct-type": "function",
        "title": "labelNodeId"
      },
      "index": {
        "description": "Label node-id with fresh instance of one of the rules and solve it Fr In and KU premises immediatly PRE Node must not yet be labelled with rule",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "labelNodeId",
        "normalized": "NodeId-\u003e[RuleAC]-\u003eReduction RuleACInst",
        "package": "tamarin-prover-theory",
        "partial": "Node Id",
        "signature": "NodeId-\u003e[RuleAC]-\u003eReduction RuleACInst"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:markGoalAsSolved",
      "description": {
        "fct-descr": "\u003cp\u003eMark the given goal as solved.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e Goal -\u003e Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#markGoalAsSolved",
        "fct-type": "function",
        "title": "markGoalAsSolved"
      },
      "index": {
        "description": "Mark the given goal as solved",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "markGoalAsSolved",
        "normalized": "String-\u003eGoal-\u003eReduction()",
        "package": "tamarin-prover-theory",
        "partial": "Goal As Solved",
        "signature": "String-\u003eGoal-\u003eReduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:reducibleFormula",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the formula can be reduced by one of the rules implemented in\n \u003ccode\u003e\u003ca\u003einsertFormula\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNGuarded -\u003e Bool",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#reducibleFormula",
        "fct-type": "function",
        "title": "reducibleFormula"
      },
      "index": {
        "description": "True iff the formula can be reduced by one of the rules implemented in insertFormula",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "reducibleFormula",
        "normalized": "LNGuarded-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Formula",
        "signature": "LNGuarded-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:removeSolvedSplitGoals",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#removeSolvedSplitGoals",
        "fct-type": "function",
        "title": "removeSolvedSplitGoals"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "removeSolvedSplitGoals",
        "normalized": "Reduction()",
        "package": "tamarin-prover-theory",
        "partial": "Solved Split Goals",
        "signature": "Reduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:runReduction",
      "description": {
        "fct-descr": "\u003cp\u003eRun a constraint reduction. Returns a list of constraint systems whose\n combined solutions are equal to the solutions of the given system. This\n property is obviously not enforced, but it must be respected by all\n functions of type \u003ccode\u003e\u003ca\u003eReduction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction a -\u003e ProofContext -\u003e System -\u003e FreshState -\u003e Disj ((a, System), FreshState)",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#runReduction",
        "fct-type": "function",
        "title": "runReduction"
      },
      "index": {
        "description": "Run constraint reduction Returns list of constraint systems whose combined solutions are equal to the solutions of the given system This property is obviously not enforced but it must be respected by all functions of type Reduction",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "runReduction",
        "normalized": "Reduction a-\u003eProofContext-\u003eSystem-\u003eFreshState-\u003eDisj((a,System),FreshState)",
        "package": "tamarin-prover-theory",
        "partial": "Reduction",
        "signature": "Reduction a-\u003eProofContext-\u003eSystem-\u003eFreshState-\u003eDisj((a,System),FreshState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveFactEqs",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a list of fact equalities to the equation store, if possible.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SplitStrategy -\u003e [Equal LNFact] -\u003e Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#solveFactEqs",
        "fct-type": "function",
        "title": "solveFactEqs"
      },
      "index": {
        "description": "Add list of fact equalities to the equation store if possible",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "solveFactEqs",
        "normalized": "SplitStrategy-\u003e[Equal LNFact]-\u003eReduction ChangeIndicator",
        "package": "tamarin-prover-theory",
        "partial": "Fact Eqs",
        "signature": "SplitStrategy-\u003e[Equal LNFact]-\u003eReduction ChangeIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveNodeIdEqs",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a list of node equalities to the equation store.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[Equal NodeId] -\u003e Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#solveNodeIdEqs",
        "fct-type": "function",
        "title": "solveNodeIdEqs"
      },
      "index": {
        "description": "Add list of node equalities to the equation store",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "solveNodeIdEqs",
        "normalized": "[Equal NodeId]-\u003eReduction ChangeIndicator",
        "package": "tamarin-prover-theory",
        "partial": "Node Id Eqs",
        "signature": "[Equal NodeId]-\u003eReduction ChangeIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveRuleEqs",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a list of rule equalities to the equation store, if possible.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SplitStrategy -\u003e [Equal RuleACInst] -\u003e Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#solveRuleEqs",
        "fct-type": "function",
        "title": "solveRuleEqs"
      },
      "index": {
        "description": "Add list of rule equalities to the equation store if possible",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "solveRuleEqs",
        "normalized": "SplitStrategy-\u003e[Equal RuleACInst]-\u003eReduction ChangeIndicator",
        "package": "tamarin-prover-theory",
        "partial": "Rule Eqs",
        "signature": "SplitStrategy-\u003e[Equal RuleACInst]-\u003eReduction ChangeIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveSubstEqs",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a list of equalities in substitution form to the equation store\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SplitStrategy -\u003e LNSubst -\u003e Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#solveSubstEqs",
        "fct-type": "function",
        "title": "solveSubstEqs"
      },
      "index": {
        "description": "Add list of equalities in substitution form to the equation store",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "solveSubstEqs",
        "normalized": "SplitStrategy-\u003eLNSubst-\u003eReduction ChangeIndicator",
        "package": "tamarin-prover-theory",
        "partial": "Subst Eqs",
        "signature": "SplitStrategy-\u003eLNSubst-\u003eReduction ChangeIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveTermEqs",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a list of term equalities to the equation store. And\n  split resulting disjunction of equations according\n  to given split strategy.\n\u003c/p\u003e\u003cp\u003eNote that updating the remaining parts of the constraint system with the\n substitution has to be performed using a separate call to \u003ccode\u003e\u003ca\u003esubstSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SplitStrategy -\u003e [Equal LNTerm] -\u003e Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#solveTermEqs",
        "fct-type": "function",
        "title": "solveTermEqs"
      },
      "index": {
        "description": "Add list of term equalities to the equation store And split resulting disjunction of equations according to given split strategy Note that updating the remaining parts of the constraint system with the substitution has to be performed using separate call to substSystem",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "solveTermEqs",
        "normalized": "SplitStrategy-\u003e[Equal LNTerm]-\u003eReduction ChangeIndicator",
        "package": "tamarin-prover-theory",
        "partial": "Term Eqs",
        "signature": "SplitStrategy-\u003e[Equal LNTerm]-\u003eReduction ChangeIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substEdges",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#substEdges",
        "fct-type": "function",
        "title": "substEdges"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "substEdges",
        "normalized": "Reduction()",
        "package": "tamarin-prover-theory",
        "partial": "Edges",
        "signature": "Reduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substFormulas",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#substFormulas",
        "fct-type": "function",
        "title": "substFormulas"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "substFormulas",
        "normalized": "Reduction()",
        "package": "tamarin-prover-theory",
        "partial": "Formulas",
        "signature": "Reduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substLastAtom",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#substLastAtom",
        "fct-type": "function",
        "title": "substLastAtom"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "substLastAtom",
        "normalized": "Reduction()",
        "package": "tamarin-prover-theory",
        "partial": "Last Atom",
        "signature": "Reduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substLessAtoms",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#substLessAtoms",
        "fct-type": "function",
        "title": "substLessAtoms"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "substLessAtoms",
        "normalized": "Reduction()",
        "package": "tamarin-prover-theory",
        "partial": "Less Atoms",
        "signature": "Reduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substNodes",
      "description": {
        "fct-descr": "\u003cp\u003eApply the current substitution of the equation store the nodes of the\n constraint system. Indicates whether additional equalities were added to\n the equations store.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#substNodes",
        "fct-type": "function",
        "title": "substNodes"
      },
      "index": {
        "description": "Apply the current substitution of the equation store the nodes of the constraint system Indicates whether additional equalities were added to the equations store",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "substNodes",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Nodes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substSolvedFormulas",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#substSolvedFormulas",
        "fct-type": "function",
        "title": "substSolvedFormulas"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "substSolvedFormulas",
        "normalized": "Reduction()",
        "package": "tamarin-prover-theory",
        "partial": "Solved Formulas",
        "signature": "Reduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substSystem",
      "description": {
        "fct-descr": "\u003cp\u003eApply the current substitution of the equation store to the remainder of\n the sequent.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#substSystem",
        "fct-type": "function",
        "title": "substSystem"
      },
      "index": {
        "description": "Apply the current substitution of the equation store to the remainder of the sequent",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "substSystem",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:whenChanged",
      "description": {
        "fct-descr": "\u003cp\u003eOnly apply a monadic action, if there has been a change.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ChangeIndicator -\u003e m () -\u003e m ()",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#whenChanged",
        "fct-type": "function",
        "title": "whenChanged"
      },
      "index": {
        "description": "Only apply monadic action if there has been change",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "whenChanged",
        "normalized": "ChangeIndicator-\u003ea()-\u003ea()",
        "package": "tamarin-prover-theory",
        "partial": "Changed",
        "signature": "ChangeIndicator-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:whileChanging",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a \u003ccode\u003e\u003ca\u003eReduction\u003c/a\u003e\u003c/code\u003e as long as it results in changes. Indicate whether\n at least one change was performed.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Reduction",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ChangeIndicator -\u003e Reduction ChangeIndicator",
        "fct-source": "src/Theory-Constraint-Solver-Reduction.html#whileChanging",
        "fct-type": "function",
        "title": "whileChanging"
      },
      "index": {
        "description": "Execute Reduction as long as it results in changes Indicate whether at least one change was performed",
        "hierarchy": "Theory Constraint Solver Reduction",
        "module": "Theory.Constraint.Solver.Reduction",
        "name": "whileChanging",
        "normalized": "Reduction ChangeIndicator-\u003eReduction ChangeIndicator",
        "package": "tamarin-prover-theory",
        "partial": "Changing",
        "signature": "Reduction ChangeIndicator-\u003eReduction ChangeIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Simplify.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements all rules that do not result in case distinctions\n and equation solving. Some additional cases may although result from\n splitting over multiple AC-unifiers. Note that a few of these rules are\n implemented directly in the methods for inserting constraints to the\n constraint system.  These methods are provided by\n \u003ca\u003eTheory.Constraint.Solver.Reduction\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.Solver.Simplify",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-Solver-Simplify.html",
        "fct-type": "module",
        "title": "Simplify"
      },
      "index": {
        "description": "This module implements all rules that do not result in case distinctions and equation solving Some additional cases may although result from splitting over multiple AC-unifiers Note that few of these rules are implemented directly in the methods for inserting constraints to the constraint system These methods are provided by Theory.Constraint.Solver.Reduction",
        "hierarchy": "Theory Constraint Solver Simplify",
        "module": "Theory.Constraint.Solver.Simplify",
        "name": "Simplify",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Simplify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Simplify.html#v:simplifySystem",
      "description": {
        "fct-descr": "\u003cp\u003eApply CR-rules that don't result in case splitting until the constraint\n system does not change anymore.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Simplify",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Reduction ()",
        "fct-source": "src/Theory-Constraint-Solver-Simplify.html#simplifySystem",
        "fct-type": "function",
        "title": "simplifySystem"
      },
      "index": {
        "description": "Apply CR-rules that don result in case splitting until the constraint system does not change anymore",
        "hierarchy": "Theory Constraint Solver Simplify",
        "module": "Theory.Constraint.Solver.Simplify",
        "name": "simplifySystem",
        "normalized": "Reduction()",
        "package": "tamarin-prover-theory",
        "partial": "System",
        "signature": "Reduction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon types for our constraint solver. They must be declared jointly\n because there is a recursive dependency between goals, proof contexts, and\n case distinctions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-Solver-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Common types for our constraint solver They must be declared jointly because there is recursive dependency between goals proof contexts and case distinctions",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "Types",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#t:CaseDistinction",
      "description": {
        "fct-descr": "\u003cp\u003eA big-step case distinction.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
        "fct-type": "data",
        "title": "CaseDistinction"
      },
      "index": {
        "description": "big-step case distinction",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "CaseDistinction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Distinction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#t:ClassifiedRules",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "data",
        "title": "ClassifiedRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "ClassifiedRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Classified Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#t:InductionHint",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
        "fct-type": "data",
        "title": "InductionHint"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "InductionHint",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Induction Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#t:ProofContext",
      "description": {
        "fct-descr": "\u003cp\u003eA proof context contains the globally fresh facts, classified rewrite\n rules and the corresponding precomputed premise case distinction theorems.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "data",
        "title": "ProofContext"
      },
      "index": {
        "description": "proof context contains the globally fresh facts classified rewrite rules and the corresponding precomputed premise case distinction theorems",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "ProofContext",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:AvoidInduction",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "AvoidInduction",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
        "fct-type": "function",
        "title": "AvoidInduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "AvoidInduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Avoid Induction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:CaseDistinction",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CaseDistinction",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
        "fct-type": "function",
        "title": "CaseDistinction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "CaseDistinction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Distinction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:ClassifiedRules",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClassifiedRules",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "function",
        "title": "ClassifiedRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "ClassifiedRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Classified Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:ProofContext",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "ProofContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "ProofContext",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:UseInduction",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "UseInduction",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
        "fct-type": "function",
        "title": "UseInduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "UseInduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Use Induction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_cdCases",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Disj ([String], System)",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
        "fct-type": "function",
        "title": "_cdCases"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_cdCases",
        "normalized": "Disj([String],System)",
        "package": "tamarin-prover-theory",
        "partial": "Cases",
        "signature": "Disj([String],System)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_cdGoal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
        "fct-type": "function",
        "title": "_cdGoal"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_cdGoal",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_crConstruct",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "function",
        "title": "_crConstruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_crConstruct",
        "normalized": "[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Construct",
        "signature": "[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_crDestruct",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "function",
        "title": "_crDestruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_crDestruct",
        "normalized": "[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Destruct",
        "signature": "[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_crProtocol",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "function",
        "title": "_crProtocol"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_crProtocol",
        "normalized": "[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Protocol",
        "signature": "[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcCaseDistKind",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CaseDistKind",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcCaseDistKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_pcCaseDistKind",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Dist Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcCaseDists",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[CaseDistinction]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcCaseDists"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_pcCaseDists",
        "normalized": "[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "Case Dists",
        "signature": "[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcInjectiveFactInsts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Set FactTag",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcInjectiveFactInsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_pcInjectiveFactInsts",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Injective Fact Insts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcRules",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClassifiedRules",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_pcRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcSignature",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SignatureWithMaude",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_pcSignature",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcTraceQuantifier",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SystemTraceQuantifier",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcTraceQuantifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_pcTraceQuantifier",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Trace Quantifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcUseInduction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "InductionHint",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcUseInduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "_pcUseInduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Use Induction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:cdCases",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr CaseDistinction (Disj ([String], System))",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#cdCases",
        "fct-type": "function",
        "title": "cdCases"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "cdCases",
        "normalized": "Lens a CaseDistinction(Disj([String],System))",
        "package": "tamarin-prover-theory",
        "partial": "Cases",
        "signature": "Lens arr CaseDistinction(Disj([String],System))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:cdGoal",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr CaseDistinction Goal",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#cdGoal",
        "fct-type": "function",
        "title": "cdGoal"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "cdGoal",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:crConstruct",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ClassifiedRules [RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#crConstruct",
        "fct-type": "function",
        "title": "crConstruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "crConstruct",
        "normalized": "Lens a ClassifiedRules[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Construct",
        "signature": "Lens arr ClassifiedRules[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:crDestruct",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ClassifiedRules [RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#crDestruct",
        "fct-type": "function",
        "title": "crDestruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "crDestruct",
        "normalized": "Lens a ClassifiedRules[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Destruct",
        "signature": "Lens arr ClassifiedRules[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:crProtocol",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ClassifiedRules [RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#crProtocol",
        "fct-type": "function",
        "title": "crProtocol"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "crProtocol",
        "normalized": "Lens a ClassifiedRules[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Protocol",
        "signature": "Lens arr ClassifiedRules[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:emptyClassifiedRules",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty proof rule set.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClassifiedRules",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#emptyClassifiedRules",
        "fct-type": "function",
        "title": "emptyClassifiedRules"
      },
      "index": {
        "description": "The empty proof rule set",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "emptyClassifiedRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Classified Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:joinAllRules",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ejoinAllRules rules\u003c/code\u003e computes the union of all rules classified in\n \u003ccode\u003erules\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClassifiedRules -\u003e [RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#joinAllRules",
        "fct-type": "function",
        "title": "joinAllRules"
      },
      "index": {
        "description": "joinAllRules rules computes the union of all rules classified in rules",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "joinAllRules",
        "normalized": "ClassifiedRules-\u003e[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "All Rules",
        "signature": "ClassifiedRules-\u003e[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:nonSilentRules",
      "description": {
        "fct-descr": "\u003cp\u003eExtract all non-silent rules.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClassifiedRules -\u003e [RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#nonSilentRules",
        "fct-type": "function",
        "title": "nonSilentRules"
      },
      "index": {
        "description": "Extract all non-silent rules",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "nonSilentRules",
        "normalized": "ClassifiedRules-\u003e[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Silent Rules",
        "signature": "ClassifiedRules-\u003e[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcCaseDistKind",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext CaseDistKind",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcCaseDistKind",
        "fct-type": "function",
        "title": "pcCaseDistKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "pcCaseDistKind",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Dist Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcCaseDists",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext [CaseDistinction]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcCaseDists",
        "fct-type": "function",
        "title": "pcCaseDists"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "pcCaseDists",
        "normalized": "Lens a ProofContext[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "Case Dists",
        "signature": "Lens arr ProofContext[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcInjectiveFactInsts",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext (Set FactTag)",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcInjectiveFactInsts",
        "fct-type": "function",
        "title": "pcInjectiveFactInsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "pcInjectiveFactInsts",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Injective Fact Insts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcMaudeHandle",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaudeHandle\u003c/a\u003e\u003c/code\u003e of a proof-context.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext :-\u003e MaudeHandle",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcMaudeHandle",
        "fct-type": "function",
        "title": "pcMaudeHandle"
      },
      "index": {
        "description": "The MaudeHandle of proof-context",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "pcMaudeHandle",
        "normalized": "ProofContext-\u003eMaudeHandle",
        "package": "tamarin-prover-theory",
        "partial": "Maude Handle",
        "signature": "ProofContext-\u003eMaudeHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcRules",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext ClassifiedRules",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcRules",
        "fct-type": "function",
        "title": "pcRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "pcRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcSignature",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext SignatureWithMaude",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcSignature",
        "fct-type": "function",
        "title": "pcSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "pcSignature",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcTraceQuantifier",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext SystemTraceQuantifier",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcTraceQuantifier",
        "fct-type": "function",
        "title": "pcTraceQuantifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "pcTraceQuantifier",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Trace Quantifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcUseInduction",
      "description": {
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext InductionHint",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcUseInduction",
        "fct-type": "function",
        "title": "pcUseInduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "pcUseInduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Use Induction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:prettyCaseDistinction",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a case distinction\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver.Types",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CaseDistinction -\u003e d",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#prettyCaseDistinction",
        "fct-type": "function",
        "title": "prettyCaseDistinction"
      },
      "index": {
        "description": "Pretty print case distinction",
        "hierarchy": "Theory Constraint Solver Types",
        "module": "Theory.Constraint.Solver.Types",
        "name": "prettyCaseDistinction",
        "normalized": "CaseDistinction-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Case Distinction",
        "signature": "CaseDistinction-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe public interface of the constraint solver, which implements all\n constraint reduction rules and together with a rule application heuristic.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-Solver.html",
        "fct-type": "module",
        "title": "Solver"
      },
      "index": {
        "description": "The public interface of the constraint solver which implements all constraint reduction rules and together with rule application heuristic",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "Solver",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Solver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:CaseDistinction",
      "description": {
        "fct-descr": "\u003cp\u003eA big-step case distinction.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
        "fct-type": "data",
        "title": "CaseDistinction"
      },
      "index": {
        "description": "big-step case distinction",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "CaseDistinction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Distinction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:ClassifiedRules",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "data",
        "title": "ClassifiedRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "ClassifiedRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Classified Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:Contradiction",
      "description": {
        "fct-descr": "\u003cp\u003eReasons why a constraint \u003ccode\u003e\u003ca\u003eSystem\u003c/a\u003e\u003c/code\u003e can be contradictory.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
        "fct-type": "data",
        "title": "Contradiction"
      },
      "index": {
        "description": "Reasons why constraint System can be contradictory",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "Contradiction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Contradiction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:InductionHint",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
        "fct-type": "data",
        "title": "InductionHint"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "InductionHint",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Induction Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:ProofContext",
      "description": {
        "fct-descr": "\u003cp\u003eA proof context contains the globally fresh facts, classified rewrite\n rules and the corresponding precomputed premise case distinction theorems.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "data",
        "title": "ProofContext"
      },
      "index": {
        "description": "proof context contains the globally fresh facts classified rewrite rules and the corresponding precomputed premise case distinction theorems",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "ProofContext",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:AvoidInduction",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "AvoidInduction",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
        "fct-type": "function",
        "title": "AvoidInduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "AvoidInduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Avoid Induction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:ClassifiedRules",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClassifiedRules",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "function",
        "title": "ClassifiedRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "ClassifiedRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Classified Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:ProofContext",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "ProofContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "ProofContext",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:UseInduction",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "UseInduction",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
        "fct-type": "function",
        "title": "UseInduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "UseInduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Use Induction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_crConstruct",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "function",
        "title": "_crConstruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_crConstruct",
        "normalized": "[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Construct",
        "signature": "[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_crDestruct",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "function",
        "title": "_crDestruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_crDestruct",
        "normalized": "[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Destruct",
        "signature": "[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_crProtocol",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
        "fct-type": "function",
        "title": "_crProtocol"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_crProtocol",
        "normalized": "[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Protocol",
        "signature": "[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcCaseDistKind",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CaseDistKind",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcCaseDistKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_pcCaseDistKind",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Dist Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcCaseDists",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[CaseDistinction]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcCaseDists"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_pcCaseDists",
        "normalized": "[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "Case Dists",
        "signature": "[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcInjectiveFactInsts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Set FactTag",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcInjectiveFactInsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_pcInjectiveFactInsts",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Injective Fact Insts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcRules",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClassifiedRules",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_pcRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcSignature",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SignatureWithMaude",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_pcSignature",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcTraceQuantifier",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SystemTraceQuantifier",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcTraceQuantifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_pcTraceQuantifier",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Trace Quantifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcUseInduction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "InductionHint",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
        "fct-type": "function",
        "title": "_pcUseInduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "_pcUseInduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Use Induction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:cdCases",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr CaseDistinction (Disj ([String], System))",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#cdCases",
        "fct-type": "function",
        "title": "cdCases"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "cdCases",
        "normalized": "Lens a CaseDistinction(Disj([String],System))",
        "package": "tamarin-prover-theory",
        "partial": "Cases",
        "signature": "Lens arr CaseDistinction(Disj([String],System))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:cdGoal",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr CaseDistinction Goal",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#cdGoal",
        "fct-type": "function",
        "title": "cdGoal"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "cdGoal",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:contradictions",
      "description": {
        "fct-descr": "\u003cp\u003eAll CR-rules reducing a constraint system to *&#10178;* represented as a list of\n trivial contradictions. Note that some constraint systems are also removed\n because they have no unifier. This is part of unification. Note also that\n *S_{&#172;,@}* is handled as part of *S_&#8704;*.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext -\u003e System -\u003e [Contradiction]",
        "fct-source": "src/Theory-Constraint-Solver-Contradictions.html#contradictions",
        "fct-type": "function",
        "title": "contradictions"
      },
      "index": {
        "description": "All CR-rules reducing constraint system to represented as list of trivial contradictions Note that some constraint systems are also removed because they have no unifier This is part of unification Note also that is handled as part of",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "contradictions",
        "normalized": "ProofContext-\u003eSystem-\u003e[Contradiction]",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "ProofContext-\u003eSystem-\u003e[Contradiction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:crConstruct",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ClassifiedRules [RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#crConstruct",
        "fct-type": "function",
        "title": "crConstruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "crConstruct",
        "normalized": "Lens a ClassifiedRules[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Construct",
        "signature": "Lens arr ClassifiedRules[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:crDestruct",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ClassifiedRules [RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#crDestruct",
        "fct-type": "function",
        "title": "crDestruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "crDestruct",
        "normalized": "Lens a ClassifiedRules[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Destruct",
        "signature": "Lens arr ClassifiedRules[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:crProtocol",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ClassifiedRules [RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#crProtocol",
        "fct-type": "function",
        "title": "crProtocol"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "crProtocol",
        "normalized": "Lens a ClassifiedRules[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Protocol",
        "signature": "Lens arr ClassifiedRules[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:joinAllRules",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ejoinAllRules rules\u003c/code\u003e computes the union of all rules classified in\n \u003ccode\u003erules\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClassifiedRules -\u003e [RuleAC]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#joinAllRules",
        "fct-type": "function",
        "title": "joinAllRules"
      },
      "index": {
        "description": "joinAllRules rules computes the union of all rules classified in rules",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "joinAllRules",
        "normalized": "ClassifiedRules-\u003e[RuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "All Rules",
        "signature": "ClassifiedRules-\u003e[RuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcCaseDistKind",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext CaseDistKind",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcCaseDistKind",
        "fct-type": "function",
        "title": "pcCaseDistKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "pcCaseDistKind",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Dist Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcCaseDists",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext [CaseDistinction]",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcCaseDists",
        "fct-type": "function",
        "title": "pcCaseDists"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "pcCaseDists",
        "normalized": "Lens a ProofContext[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "Case Dists",
        "signature": "Lens arr ProofContext[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcInjectiveFactInsts",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext (Set FactTag)",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcInjectiveFactInsts",
        "fct-type": "function",
        "title": "pcInjectiveFactInsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "pcInjectiveFactInsts",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Injective Fact Insts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcRules",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext ClassifiedRules",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcRules",
        "fct-type": "function",
        "title": "pcRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "pcRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcSignature",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext SignatureWithMaude",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcSignature",
        "fct-type": "function",
        "title": "pcSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "pcSignature",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcTraceQuantifier",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext SystemTraceQuantifier",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcTraceQuantifier",
        "fct-type": "function",
        "title": "pcTraceQuantifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "pcTraceQuantifier",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Trace Quantifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcUseInduction",
      "description": {
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProofContext InductionHint",
        "fct-source": "src/Theory-Constraint-Solver-Types.html#pcUseInduction",
        "fct-type": "function",
        "title": "pcUseInduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "pcUseInduction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Use Induction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:precomputeCaseDistinctions",
      "description": {
        "fct-descr": "\u003cp\u003ePrecompute a saturated set of case distinctions.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofContext-\u003e [LNGuarded]-\u003e [CaseDistinction]",
        "fct-type": "function",
        "title": "precomputeCaseDistinctions"
      },
      "index": {
        "description": "Precompute saturated set of case distinctions",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "precomputeCaseDistinctions",
        "normalized": "ProofContext-\u003e[LNGuarded]-\u003e[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "Case Distinctions",
        "signature": "ProofContext-\u003e[LNGuarded]-\u003e[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:refineWithTypingAsms",
      "description": {
        "fct-descr": "\u003cp\u003eRefine a set of case distinction by exploiting additional typing\n assumptions.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[LNGuarded]-\u003e ProofContext-\u003e [CaseDistinction]-\u003e [CaseDistinction]",
        "fct-type": "function",
        "title": "refineWithTypingAsms"
      },
      "index": {
        "description": "Refine set of case distinction by exploiting additional typing assumptions",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "refineWithTypingAsms",
        "normalized": "[LNGuarded]-\u003eProofContext-\u003e[CaseDistinction]-\u003e[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "With Typing Asms",
        "signature": "[LNGuarded]-\u003eProofContext-\u003e[CaseDistinction]-\u003e[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:unsolvedChainConstraints",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of remaining chain constraints of each case.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.Solver",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CaseDistinction -\u003e [Int]",
        "fct-source": "src/Theory-Constraint-Solver-CaseDistinctions.html#unsolvedChainConstraints",
        "fct-type": "function",
        "title": "unsolvedChainConstraints"
      },
      "index": {
        "description": "The number of remaining chain constraints of each case",
        "hierarchy": "Theory Constraint Solver",
        "module": "Theory.Constraint.Solver",
        "name": "unsolvedChainConstraints",
        "normalized": "CaseDistinction-\u003e[Int]",
        "package": "tamarin-prover-theory",
        "partial": "Chain Constraints",
        "signature": "CaseDistinction-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes representing constraints.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-System-Constraints.html",
        "fct-type": "module",
        "title": "Constraints"
      },
      "index": {
        "description": "Types representing constraints",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "Constraints",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Constraints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:Edge",
      "description": {
        "fct-descr": "\u003cp\u003eA labeled edge in a derivation graph.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Edge",
        "fct-type": "data",
        "title": "Edge"
      },
      "index": {
        "description": "labeled edge in derivation graph",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "Edge",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:Goal",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGoal\u003c/a\u003e\u003c/code\u003e denotes that a constraint reduction rule is applicable, which\n might result in case splits. We either use a heuristic to decide what goal\n to solve next or leave the choice to user (in case of the interactive UI).\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Goal",
        "fct-type": "data",
        "title": "Goal"
      },
      "index": {
        "description": "Goal denotes that constraint reduction rule is applicable which might result in case splits We either use heuristic to decide what goal to solve next or leave the choice to user in case of the interactive UI",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "Goal",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:Less",
      "description": {
        "fct-descr": "\u003cp\u003eA *&#8918;* constraint between \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Less",
        "fct-type": "type",
        "title": "Less"
      },
      "index": {
        "description": "constraint between NodeId",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "Less",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Less",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:NodeConc",
      "description": {
        "fct-descr": "\u003cp\u003eA conclusion of a node.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#NodeConc",
        "fct-type": "type",
        "title": "NodeConc"
      },
      "index": {
        "description": "conclusion of node",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "NodeConc",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Node Conc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:NodePrem",
      "description": {
        "fct-descr": "\u003cp\u003eA premise of a node.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#NodePrem",
        "fct-type": "type",
        "title": "NodePrem"
      },
      "index": {
        "description": "premise of node",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "NodePrem",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Node Prem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:ActionG",
      "description": {
        "fct-descr": "\u003cp\u003eAn action that must exist in the trace.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ActionG LVar LNFact",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Goal",
        "fct-type": "function",
        "title": "ActionG"
      },
      "index": {
        "description": "An action that must exist in the trace",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "ActionG",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:ChainG",
      "description": {
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ChainG NodeConc NodePrem",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Goal",
        "fct-type": "function",
        "title": "ChainG"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "ChainG",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Chain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:DisjG",
      "description": {
        "fct-descr": "\u003cp\u003eA case split over a disjunction.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "DisjG (Disj LNGuarded)",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Goal",
        "fct-type": "function",
        "title": "DisjG"
      },
      "index": {
        "description": "case split over disjunction",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "DisjG",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Disj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:Edge",
      "description": {
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Edge",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Edge",
        "fct-type": "function",
        "title": "Edge"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "Edge",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:PremiseG",
      "description": {
        "fct-descr": "\u003cp\u003eA premise that must have an incoming direct edge.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "PremiseG NodePrem LNFact",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Goal",
        "fct-type": "function",
        "title": "PremiseG"
      },
      "index": {
        "description": "premise that must have an incoming direct edge",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "PremiseG",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Premise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:SplitG",
      "description": {
        "fct-descr": "\u003cp\u003eA case split over equalities.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SplitG SplitId",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Goal",
        "fct-type": "function",
        "title": "SplitG"
      },
      "index": {
        "description": "case split over equalities",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "SplitG",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:eSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeConc",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Edge",
        "fct-type": "function",
        "title": "eSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "eSrc",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:eTgt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodePrem",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#Edge",
        "fct-type": "function",
        "title": "eTgt"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "eTgt",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Tgt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isActionGoal",
      "description": {
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#isActionGoal",
        "fct-type": "function",
        "title": "isActionGoal"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "isActionGoal",
        "normalized": "Goal-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Action Goal",
        "signature": "Goal-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isChainGoal",
      "description": {
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#isChainGoal",
        "fct-type": "function",
        "title": "isChainGoal"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "isChainGoal",
        "normalized": "Goal-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Chain Goal",
        "signature": "Goal-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isDisjGoal",
      "description": {
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#isDisjGoal",
        "fct-type": "function",
        "title": "isDisjGoal"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "isDisjGoal",
        "normalized": "Goal-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Disj Goal",
        "signature": "Goal-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isPremiseGoal",
      "description": {
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#isPremiseGoal",
        "fct-type": "function",
        "title": "isPremiseGoal"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "isPremiseGoal",
        "normalized": "Goal-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Premise Goal",
        "signature": "Goal-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isSplitGoal",
      "description": {
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#isSplitGoal",
        "fct-type": "function",
        "title": "isSplitGoal"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "isSplitGoal",
        "normalized": "Goal-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Split Goal",
        "signature": "Goal-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isStandardActionGoal",
      "description": {
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#isStandardActionGoal",
        "fct-type": "function",
        "title": "isStandardActionGoal"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "isStandardActionGoal",
        "normalized": "Goal-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Standard Action Goal",
        "signature": "Goal-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyEdge",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a edge as \u003ccode\u003esrc \u003e-i--j-\u003e tgt\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Edge -\u003e d",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#prettyEdge",
        "fct-type": "function",
        "title": "prettyEdge"
      },
      "index": {
        "description": "Pretty print edge as src i--j tgt",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "prettyEdge",
        "normalized": "Edge-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Edge",
        "signature": "Edge-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyGoal",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a goal.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Goal -\u003e d",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#prettyGoal",
        "fct-type": "function",
        "title": "prettyGoal"
      },
      "index": {
        "description": "Pretty print goal",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "prettyGoal",
        "normalized": "Goal-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Goal",
        "signature": "Goal-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyLess",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a less-atom as \u003ccode\u003esrc \u003c tgt\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Less -\u003e d",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#prettyLess",
        "fct-type": "function",
        "title": "prettyLess"
      },
      "index": {
        "description": "Pretty print less-atom as src tgt",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "prettyLess",
        "normalized": "Less-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Less",
        "signature": "Less-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyNode",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a node.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(NodeId, RuleACInst) -\u003e d",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#prettyNode",
        "fct-type": "function",
        "title": "prettyNode"
      },
      "index": {
        "description": "Pretty print node",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "prettyNode",
        "normalized": "(NodeId,RuleACInst)-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Node",
        "signature": "(NodeId,RuleACInst)-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyNodeConc",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a node conclusion.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeConc -\u003e d",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#prettyNodeConc",
        "fct-type": "function",
        "title": "prettyNodeConc"
      },
      "index": {
        "description": "Pretty print node conclusion",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "prettyNodeConc",
        "normalized": "NodeConc-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Node Conc",
        "signature": "NodeConc-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyNodePrem",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a node premise.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Constraints",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodePrem -\u003e d",
        "fct-source": "src/Theory-Constraint-System-Constraints.html#prettyNodePrem",
        "fct-type": "function",
        "title": "prettyNodePrem"
      },
      "index": {
        "description": "Pretty print node premise",
        "hierarchy": "Theory Constraint System Constraints",
        "module": "Theory.Constraint.System.Constraints",
        "name": "prettyNodePrem",
        "normalized": "NodePrem-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Node Prem",
        "signature": "NodePrem-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of the graph part of a sequent to a Graphviz Dot file.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.System.Dot",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-System-Dot.html",
        "fct-type": "module",
        "title": "Dot"
      },
      "index": {
        "description": "Conversion of the graph part of sequent to Graphviz Dot file",
        "hierarchy": "Theory Constraint System Dot",
        "module": "Theory.Constraint.System.Dot",
        "name": "Dot",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Dot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#t:BoringNodeStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThe style for nodes of the intruder.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Dot",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-System-Dot.html#BoringNodeStyle",
        "fct-type": "data",
        "title": "BoringNodeStyle"
      },
      "index": {
        "description": "The style for nodes of the intruder",
        "hierarchy": "Theory Constraint System Dot",
        "module": "Theory.Constraint.System.Dot",
        "name": "BoringNodeStyle",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Boring Node Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:CompactBoringNodes",
      "description": {
        "fct-module": "Theory.Constraint.System.Dot",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CompactBoringNodes",
        "fct-source": "src/Theory-Constraint-System-Dot.html#BoringNodeStyle",
        "fct-type": "function",
        "title": "CompactBoringNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Dot",
        "module": "Theory.Constraint.System.Dot",
        "name": "CompactBoringNodes",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Compact Boring Nodes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:FullBoringNodes",
      "description": {
        "fct-module": "Theory.Constraint.System.Dot",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FullBoringNodes",
        "fct-source": "src/Theory-Constraint-System-Dot.html#BoringNodeStyle",
        "fct-type": "function",
        "title": "FullBoringNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Dot",
        "module": "Theory.Constraint.System.Dot",
        "name": "FullBoringNodes",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Full Boring Nodes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:compressSystem",
      "description": {
        "fct-descr": "\u003cp\u003eUnsound compression of the sequent that drops fully connected learns and\n knows nodes.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Dot",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e System",
        "fct-source": "src/Theory-Constraint-System-Dot.html#compressSystem",
        "fct-type": "function",
        "title": "compressSystem"
      },
      "index": {
        "description": "Unsound compression of the sequent that drops fully connected learns and knows nodes",
        "hierarchy": "Theory Constraint System Dot",
        "module": "Theory.Constraint.System.Dot",
        "name": "compressSystem",
        "normalized": "System-\u003eSystem",
        "package": "tamarin-prover-theory",
        "partial": "System",
        "signature": "System-\u003eSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:dotSystemCompact",
      "description": {
        "fct-descr": "\u003cp\u003eDot a sequent in compact form (one record per rule), if there is anything\n to draw.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Dot",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "BoringNodeStyle -\u003e System -\u003e Dot ()",
        "fct-source": "src/Theory-Constraint-System-Dot.html#dotSystemCompact",
        "fct-type": "function",
        "title": "dotSystemCompact"
      },
      "index": {
        "description": "Dot sequent in compact form one record per rule if there is anything to draw",
        "hierarchy": "Theory Constraint System Dot",
        "module": "Theory.Constraint.System.Dot",
        "name": "dotSystemCompact",
        "normalized": "BoringNodeStyle-\u003eSystem-\u003eDot()",
        "package": "tamarin-prover-theory",
        "partial": "System Compact",
        "signature": "BoringNodeStyle-\u003eSystem-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:dotSystemLoose",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the sequent to a \u003ccode\u003e\u003ca\u003eDot\u003c/a\u003e\u003c/code\u003e action representing this sequent as a\n graph in the GraphViz format. The style is loose in the sense that each\n premise and conclusion gets its own node.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Dot",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e Dot ()",
        "fct-source": "src/Theory-Constraint-System-Dot.html#dotSystemLoose",
        "fct-type": "function",
        "title": "dotSystemLoose"
      },
      "index": {
        "description": "Convert the sequent to Dot action representing this sequent as graph in the GraphViz format The style is loose in the sense that each premise and conclusion gets its own node",
        "hierarchy": "Theory Constraint System Dot",
        "module": "Theory.Constraint.System.Dot",
        "name": "dotSystemLoose",
        "normalized": "System-\u003eDot()",
        "package": "tamarin-prover-theory",
        "partial": "System Loose",
        "signature": "System-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:nonEmptyGraph",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the dotted system will be a non-empty graph.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Dot",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Dot.html#nonEmptyGraph",
        "fct-type": "function",
        "title": "nonEmptyGraph"
      },
      "index": {
        "description": "True iff the dotted system will be non-empty graph",
        "hierarchy": "Theory Constraint System Dot",
        "module": "Theory.Constraint.System.Dot",
        "name": "nonEmptyGraph",
        "normalized": "System-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Empty Graph",
        "signature": "System-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGuarded formulas.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-System-Guarded.html",
        "fct-type": "module",
        "title": "Guarded"
      },
      "index": {
        "description": "Guarded formulas",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "Guarded",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Guarded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#t:GAtom",
      "description": {
        "fct-descr": "\u003cp\u003eAtoms that are allowed as guards.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#GAtom",
        "fct-type": "data",
        "title": "GAtom"
      },
      "index": {
        "description": "Atoms that are allowed as guards",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "GAtom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "GAtom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#t:Guarded",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#Guarded",
        "fct-type": "data",
        "title": "Guarded"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "Guarded",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Guarded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#t:LGuarded",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#LGuarded",
        "fct-type": "type",
        "title": "LGuarded"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "LGuarded",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LGuarded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#t:LNGuarded",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#LNGuarded",
        "fct-type": "type",
        "title": "LNGuarded"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "LNGuarded",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LNGuarded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GAction",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GAction (t, Fact t)",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#GAtom",
        "fct-type": "function",
        "title": "GAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "GAction",
        "normalized": "GAction(a,Fact a)",
        "package": "tamarin-prover-theory",
        "partial": "GAction",
        "signature": "GAction(t,Fact t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GAto",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GAto (Atom (VTerm c (BVar v)))",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#Guarded",
        "fct-type": "function",
        "title": "GAto"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "GAto",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "GAto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GConj",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GConj (Conj (Guarded s c v))",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#Guarded",
        "fct-type": "function",
        "title": "GConj"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "GConj",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "GConj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GDisj",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GDisj (Disj (Guarded s c v))",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#Guarded",
        "fct-type": "function",
        "title": "GDisj"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "GDisj",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "GDisj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GEqE",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GEqE (t, t)",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#GAtom",
        "fct-type": "function",
        "title": "GEqE"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "GEqE",
        "normalized": "GEqE(a,a)",
        "package": "tamarin-prover-theory",
        "partial": "GEq",
        "signature": "GEqE(t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GGuarded",
      "description": {
        "fct-descr": "\u003cp\u003eDenotes \u003ccode\u003eALL xs. as =\u003e gf\u003c/code\u003e or \u003ccode\u003eEx xs. as & gf&\n depending on the \u003ccode\u003e\u003ca\u003eQuantifier\u003c/a\u003e\u003c/code\u003e.\n We assume that all bound variables xs occur in\n f\u003c/code\u003ei atoms in as.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GGuarded Quantifier [s] [Atom (VTerm c (BVar v))] (Guarded s c v)",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#Guarded",
        "fct-type": "function",
        "title": "GGuarded"
      },
      "index": {
        "description": "Denotes ALL xs as gf or Ex xs as gf depending on the Quantifier We assume that all bound variables xs occur in atoms in as",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "GGuarded",
        "normalized": "GGuarded Quantifier[a][Atom(VTerm b(BVar c))](Guarded a b c)",
        "package": "tamarin-prover-theory",
        "partial": "GGuarded",
        "signature": "GGuarded Quantifier[s][Atom(VTerm c(BVar v))](Guarded s c v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:atomToGAtom",
      "description": {
        "fct-descr": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eAtom\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003eGAtom\u003c/a\u003e\u003c/code\u003es, if possible.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Atom t -\u003e GAtom t",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#atomToGAtom",
        "fct-type": "function",
        "title": "atomToGAtom"
      },
      "index": {
        "description": "Convert Atom to GAtom if possible",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "atomToGAtom",
        "normalized": "Atom a-\u003eGAtom a",
        "package": "tamarin-prover-theory",
        "partial": "To GAtom",
        "signature": "Atom t-\u003eGAtom t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:bvarToLVar",
      "description": {
        "fct-descr": "\u003cp\u003eAssuming that there are no more bound variables left in an atom of a\n formula, convert it to an atom with free variables only.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Atom (VTerm c (BVar LVar)) -\u003e Atom (VTerm c LVar)",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#bvarToLVar",
        "fct-type": "function",
        "title": "bvarToLVar"
      },
      "index": {
        "description": "Assuming that there are no more bound variables left in an atom of formula convert it to an atom with free variables only",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "bvarToLVar",
        "normalized": "Atom(VTerm a(BVar LVar))-\u003eAtom(VTerm a LVar)",
        "package": "tamarin-prover-theory",
        "partial": "To LVar",
        "signature": "Atom(VTerm c(BVar LVar))-\u003eAtom(VTerm c LVar)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:formulaToGuarded",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eformulaToGuarded fm\u003c/code\u003e returns a guarded formula \u003ccode\u003egf\u003c/code\u003e that is\n equivalent to \u003ccode\u003efm\u003c/code\u003e if possible.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFormula -\u003e Either d LNGuarded",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#formulaToGuarded",
        "fct-type": "function",
        "title": "formulaToGuarded"
      },
      "index": {
        "description": "formulaToGuarded fm returns guarded formula gf that is equivalent to fm if possible",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "formulaToGuarded",
        "normalized": "LNFormula-\u003eEither a LNGuarded",
        "package": "tamarin-prover-theory",
        "partial": "To Guarded",
        "signature": "LNFormula-\u003eEither d LNGuarded"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:formulaToGuarded_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eformulaToGuarded fm\u003c/code\u003e returns a guarded formula \u003ccode\u003egf\u003c/code\u003e that is\n equivalent to \u003ccode\u003efm\u003c/code\u003e under the assumption that this is possible.\n If not, then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is called.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFormula -\u003e LNGuarded",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#formulaToGuarded_",
        "fct-type": "function",
        "title": "formulaToGuarded_"
      },
      "index": {
        "description": "formulaToGuarded fm returns guarded formula gf that is equivalent to fm under the assumption that this is possible If not then error is called",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "formulaToGuarded_",
        "normalized": "LNFormula-\u003eLNGuarded",
        "package": "tamarin-prover-theory",
        "partial": "To Guarded",
        "signature": "LNFormula-\u003eLNGuarded"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gall",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[s] -\u003e [Atom (VTerm c (BVar v))] -\u003e Guarded s c v -\u003e Guarded s c v",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#gall",
        "fct-type": "function",
        "title": "gall"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "gall",
        "normalized": "[a]-\u003e[Atom(VTerm b(BVar c))]-\u003eGuarded a b c-\u003eGuarded a b c",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "[s]-\u003e[Atom(VTerm c(BVar v))]-\u003eGuarded s c v-\u003eGuarded s c v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gconj",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egconj gfs\u003c/code\u003e smart constructor for the conjunction of gfs.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[Guarded s c v] -\u003e Guarded s c v",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#gconj",
        "fct-type": "function",
        "title": "gconj"
      },
      "index": {
        "description": "gconj gfs smart constructor for the conjunction of gfs",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "gconj",
        "normalized": "[Guarded a b c]-\u003eGuarded a b c",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "[Guarded s c v]-\u003eGuarded s c v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gdisj",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egdisj gfs\u003c/code\u003e smart constructor for the disjunction of gfs.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[Guarded s c v] -\u003e Guarded s c v",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#gdisj",
        "fct-type": "function",
        "title": "gdisj"
      },
      "index": {
        "description": "gdisj gfs smart constructor for the disjunction of gfs",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "gdisj",
        "normalized": "[Guarded a b c]-\u003eGuarded a b c",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "[Guarded s c v]-\u003eGuarded s c v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gex",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[s] -\u003e [Atom (VTerm c (BVar v))] -\u003e Guarded s c v -\u003e Guarded s c v",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#gex",
        "fct-type": "function",
        "title": "gex"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "gex",
        "normalized": "[a]-\u003e[Atom(VTerm b(BVar c))]-\u003eGuarded a b c-\u003eGuarded a b c",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "[s]-\u003e[Atom(VTerm c(BVar v))]-\u003eGuarded s c v-\u003eGuarded s c v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gfalse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egfalse\u003c/code\u003e returns the guarded formula f with \u003ccode\u003eFalse \u003ca\u003e-\u003c/a\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Guarded s c v",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#gfalse",
        "fct-type": "function",
        "title": "gfalse"
      },
      "index": {
        "description": "gfalse returns the guarded formula with False",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "gfalse",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:ginduct",
      "description": {
        "fct-descr": "\u003cp\u003eTry to prove the formula by applying induction over the trace.\n Returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e if this is not possible. Returns a tuple of\n formulas: one formalizing the proof obligation of the base-case and one\n formalizing the proof obligation of the step-case.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LGuarded c -\u003e Either String (LGuarded c, LGuarded c)",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#ginduct",
        "fct-type": "function",
        "title": "ginduct"
      },
      "index": {
        "description": "Try to prove the formula by applying induction over the trace Returns Left errMsg if this is not possible Returns tuple of formulas one formalizing the proof obligation of the base-case and one formalizing the proof obligation of the step-case",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "ginduct",
        "normalized": "LGuarded a-\u003eEither String(LGuarded a,LGuarded a)",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "LGuarded c-\u003eEither String(LGuarded c,LGuarded c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gnot",
      "description": {
        "fct-descr": "\u003cp\u003eNegate a guarded formula.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Guarded s c v -\u003e Guarded s c v",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#gnot",
        "fct-type": "function",
        "title": "gnot"
      },
      "index": {
        "description": "Negate guarded formula",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "gnot",
        "normalized": "Guarded a b c-\u003eGuarded a b c",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Guarded s c v-\u003eGuarded s c v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gtrue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egtrue\u003c/code\u003e returns the guarded formula f with \u003ccode\u003eTrue \u003ca\u003e-\u003c/a\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Guarded s c v",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#gtrue",
        "fct-type": "function",
        "title": "gtrue"
      },
      "index": {
        "description": "gtrue returns the guarded formula with True",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "gtrue",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:guardFactTags",
      "description": {
        "fct-descr": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eFactTag\u003c/a\u003e\u003c/code\u003es that are used in guards.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Guarded s c v -\u003e [FactTag]",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#guardFactTags",
        "fct-type": "function",
        "title": "guardFactTags"
      },
      "index": {
        "description": "All FactTag that are used in guards",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "guardFactTags",
        "normalized": "Guarded a b c-\u003e[FactTag]",
        "package": "tamarin-prover-theory",
        "partial": "Fact Tags",
        "signature": "Guarded s c v-\u003e[FactTag]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isAllGuarded",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Guarded s c v -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#isAllGuarded",
        "fct-type": "function",
        "title": "isAllGuarded"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "isAllGuarded",
        "normalized": "Guarded a b c-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "All Guarded",
        "signature": "Guarded s c v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isConjunction",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Guarded s c v -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#isConjunction",
        "fct-type": "function",
        "title": "isConjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "isConjunction",
        "normalized": "Guarded a b c-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Conjunction",
        "signature": "Guarded s c v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isDisjunction",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Guarded s c v -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#isDisjunction",
        "fct-type": "function",
        "title": "isDisjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "isDisjunction",
        "normalized": "Guarded a b c-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Disjunction",
        "signature": "Guarded s c v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isExGuarded",
      "description": {
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Guarded s c v -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#isExGuarded",
        "fct-type": "function",
        "title": "isExGuarded"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "isExGuarded",
        "normalized": "Guarded a b c-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Ex Guarded",
        "signature": "Guarded s c v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isSafetyFormula",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the guarded formula is closed and does not contain an\n existential quantifier. This under-approximates the question whether the\n formula is a safety formula. A safety formula \u003ccode\u003ephi\u003c/code\u003e has the property that a\n trace violating it can never be extended to a trace satisfying it.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Guarded s c v -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#isSafetyFormula",
        "fct-type": "function",
        "title": "isSafetyFormula"
      },
      "index": {
        "description": "Check whether the guarded formula is closed and does not contain an existential quantifier This under-approximates the question whether the formula is safety formula safety formula phi has the property that trace violating it can never be extended to trace satisfying it",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "isSafetyFormula",
        "normalized": "Guarded a b c-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Safety Formula",
        "signature": "Guarded s c v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:mapGuardedAtoms",
      "description": {
        "fct-descr": "\u003cp\u003eMap a guarded formula with scope info.\n The Integer argument denotes the number of\n quantifiers that have been encountered so far.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(Integer -\u003e Atom (VTerm c (BVar v)) -\u003e Atom (VTerm d (BVar w))) -\u003e Guarded s c v -\u003e Guarded s d w",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#mapGuardedAtoms",
        "fct-type": "function",
        "title": "mapGuardedAtoms"
      },
      "index": {
        "description": "Map guarded formula with scope info The Integer argument denotes the number of quantifiers that have been encountered so far",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "mapGuardedAtoms",
        "normalized": "(Integer-\u003eAtom(VTerm a(BVar b))-\u003eAtom(VTerm c(BVar d)))-\u003eGuarded e a b-\u003eGuarded e c d",
        "package": "tamarin-prover-theory",
        "partial": "Guarded Atoms",
        "signature": "(Integer-\u003eAtom(VTerm c(BVar v))-\u003eAtom(VTerm d(BVar w)))-\u003eGuarded s c v-\u003eGuarded s d w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:openGuarded",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eopenGuarded gf\u003c/code\u003e returns \u003ccode\u003eJust (qua,vs,ats,gf')\u003c/code\u003e if \u003ccode\u003egf\u003c/code\u003e is a guarded\n clause and \u003ccode\u003eNothing\u003c/code\u003e otherwise. In the first case, \u003ccode\u003equa\u003c/code\u003e is the quantifier,\n \u003ccode\u003evs\u003c/code\u003e is a list of fresh variables, \u003ccode\u003eats\u003c/code\u003e is the antecedent, and \u003ccode\u003egf'\u003c/code\u003e is the\n succedent. In both antecedent and succedent, the bound variables are\n replaced by \u003ccode\u003evs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LGuarded c -\u003e m (Maybe (Quantifier, [LVar], [Atom (VTerm c LVar)], LGuarded c))",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#openGuarded",
        "fct-type": "function",
        "title": "openGuarded"
      },
      "index": {
        "description": "openGuarded gf returns Just qua vs ats gf if gf is guarded clause and Nothing otherwise In the first case qua is the quantifier vs is list of fresh variables ats is the antecedent and gf is the succedent In both antecedent and succedent the bound variables are replaced by vs",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "openGuarded",
        "normalized": "LGuarded a-\u003eb(Maybe(Quantifier,[LVar],[Atom(VTerm a LVar)],LGuarded a))",
        "package": "tamarin-prover-theory",
        "partial": "Guarded",
        "signature": "LGuarded c-\u003em(Maybe(Quantifier,[LVar],[Atom(VTerm c LVar)],LGuarded c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:prettyGuarded",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a formula.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNGuarded-\u003e d",
        "fct-type": "function",
        "title": "prettyGuarded"
      },
      "index": {
        "description": "Pretty print formula",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "prettyGuarded",
        "normalized": "LNGuarded-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Guarded",
        "signature": "LNGuarded-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:simplifyGuarded",
      "description": {
        "fct-descr": "\u003cp\u003eSimplify a \u003ccode\u003e\u003ca\u003eGuarded\u003c/a\u003e\u003c/code\u003e formula by replacing atoms with their truth value,\n if it can be determined.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(LNAtom -\u003e Maybe Bool)-\u003e LNGuarded-\u003e Maybe LNGuarded",
        "fct-type": "function",
        "title": "simplifyGuarded"
      },
      "index": {
        "description": "Simplify Guarded formula by replacing atoms with their truth value if it can be determined",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "simplifyGuarded",
        "normalized": "(LNAtom-\u003eMaybe Bool)-\u003eLNGuarded-\u003eMaybe LNGuarded",
        "package": "tamarin-prover-theory",
        "partial": "Guarded",
        "signature": "(LNAtom-\u003eMaybe Bool)-\u003eLNGuarded-\u003eMaybe LNGuarded"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:sortGAtoms",
      "description": {
        "fct-descr": "\u003cp\u003eStable sort that ensures that actions occur before equations.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[GAtom t] -\u003e [GAtom t]",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#sortGAtoms",
        "fct-type": "function",
        "title": "sortGAtoms"
      },
      "index": {
        "description": "Stable sort that ensures that actions occur before equations",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "sortGAtoms",
        "normalized": "[GAtom a]-\u003e[GAtom a]",
        "package": "tamarin-prover-theory",
        "partial": "GAtoms",
        "signature": "[GAtom t]-\u003e[GAtom t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:substBound",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esubstBound s gf\u003c/code\u003e substitutes each occurence of a bound\n variable \u003ccode\u003ei\u003c/code\u003e in \u003ccode\u003edom(s)\u003c/code\u003e with the corresponding free variable\n \u003ccode\u003es(i)=x\u003c/code\u003e in all atoms in \u003ccode\u003egf\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[(Integer, LVar)] -\u003e LGuarded c -\u003e LGuarded c",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#substBound",
        "fct-type": "function",
        "title": "substBound"
      },
      "index": {
        "description": "substBound gf substitutes each occurence of bound variable in dom with the corresponding free variable in all atoms in gf",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "substBound",
        "normalized": "[(Integer,LVar)]-\u003eLGuarded a-\u003eLGuarded a",
        "package": "tamarin-prover-theory",
        "partial": "Bound",
        "signature": "[(Integer,LVar)]-\u003eLGuarded c-\u003eLGuarded c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:substBoundAtom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esubstBoundAtom s a\u003c/code\u003e substitutes each occurence of a bound variables \u003ccode\u003ei\u003c/code\u003e\n in \u003ccode\u003edom(s)\u003c/code\u003e with the corresponding free variable \u003ccode\u003ex=s(i)\u003c/code\u003e in the atom \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[(Integer, LVar)] -\u003e Atom (VTerm c (BVar LVar)) -\u003e Atom (VTerm c (BVar LVar))",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#substBoundAtom",
        "fct-type": "function",
        "title": "substBoundAtom"
      },
      "index": {
        "description": "substBoundAtom substitutes each occurence of bound variables in dom with the corresponding free variable in the atom",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "substBoundAtom",
        "normalized": "[(Integer,LVar)]-\u003eAtom(VTerm a(BVar LVar))-\u003eAtom(VTerm a(BVar LVar))",
        "package": "tamarin-prover-theory",
        "partial": "Bound Atom",
        "signature": "[(Integer,LVar)]-\u003eAtom(VTerm c(BVar LVar))-\u003eAtom(VTerm c(BVar LVar))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:substFree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esubstFreeAtom s gf\u003c/code\u003e substitutes each occurence of a free variables\n \u003ccode\u003ev in dom(s)\u003c/code\u003e with the correpsonding bound variables \u003ccode\u003ei=s(v)\u003c/code\u003e\n in all atoms in  \u003ccode\u003egf\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[(LVar, Integer)] -\u003e LGuarded c -\u003e LGuarded c",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#substFree",
        "fct-type": "function",
        "title": "substFree"
      },
      "index": {
        "description": "substFreeAtom gf substitutes each occurence of free variables in dom with the correpsonding bound variables in all atoms in gf",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "substFree",
        "normalized": "[(LVar,Integer)]-\u003eLGuarded a-\u003eLGuarded a",
        "package": "tamarin-prover-theory",
        "partial": "Free",
        "signature": "[(LVar,Integer)]-\u003eLGuarded c-\u003eLGuarded c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:substFreeAtom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esubstFreeAtom s a\u003c/code\u003e substitutes each occurence of a free variables \u003ccode\u003ev\u003c/code\u003e\n in \u003ccode\u003edom(s)\u003c/code\u003e with the bound variables \u003ccode\u003ei=s(v)\u003c/code\u003e in the atom \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System.Guarded",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[(LVar, Integer)] -\u003e Atom (VTerm c (BVar LVar)) -\u003e Atom (VTerm c (BVar LVar))",
        "fct-source": "src/Theory-Constraint-System-Guarded.html#substFreeAtom",
        "fct-type": "function",
        "title": "substFreeAtom"
      },
      "index": {
        "description": "substFreeAtom substitutes each occurence of free variables in dom with the bound variables in the atom",
        "hierarchy": "Theory Constraint System Guarded",
        "module": "Theory.Constraint.System.Guarded",
        "name": "substFreeAtom",
        "normalized": "[(LVar,Integer)]-\u003eAtom(VTerm a(BVar LVar))-\u003eAtom(VTerm a(BVar LVar))",
        "package": "tamarin-prover-theory",
        "partial": "Free Atom",
        "signature": "[(LVar,Integer)]-\u003eAtom(VTerm c(BVar LVar))-\u003eAtom(VTerm c(BVar LVar))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the public interface for constructing and deconstructing constraint\n systems. The interface for performing constraint solving provided by\n \u003ca\u003eTheory.Constraint.Solver\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Constraint-System.html",
        "fct-type": "module",
        "title": "System"
      },
      "index": {
        "description": "This is the public interface for constructing and deconstructing constraint systems The interface for performing constraint solving provided by Theory.Constraint.Solver",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "System",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#t:CaseDistKind",
      "description": {
        "fct-descr": "\u003cp\u003eCase dinstinction kind that are allowed. The order of the kinds\n corresponds to the subkinding relation: untyped \u003c typed.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-System.html#CaseDistKind",
        "fct-type": "data",
        "title": "CaseDistKind"
      },
      "index": {
        "description": "Case dinstinction kind that are allowed The order of the kinds corresponds to the subkinding relation untyped typed",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "CaseDistKind",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Dist Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#t:GoalStatus",
      "description": {
        "fct-descr": "\u003cp\u003eThe status of a \u003ccode\u003e\u003ca\u003eGoal\u003c/a\u003e\u003c/code\u003e. Use its \u003ccode\u003eSemigroup\u003c/code\u003e instance to combine the\n status info of goals that collapse.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-System.html#GoalStatus",
        "fct-type": "data",
        "title": "GoalStatus"
      },
      "index": {
        "description": "The status of Goal Use its Semigroup instance to combine the status info of goals that collapse",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "GoalStatus",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goal Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#t:System",
      "description": {
        "fct-descr": "\u003cp\u003eA constraint system.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-System.html#System",
        "fct-type": "data",
        "title": "System"
      },
      "index": {
        "description": "constraint system",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "System",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#t:SystemTraceQuantifier",
      "description": {
        "fct-descr": "\u003cp\u003eWhether we are checking for the existence of a trace satisfiying a the\n current constraint system or whether we're checking that no traces\n satisfies the current constraint system.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Constraint-System.html#SystemTraceQuantifier",
        "fct-type": "data",
        "title": "SystemTraceQuantifier"
      },
      "index": {
        "description": "Whether we are checking for the existence of trace satisfiying the current constraint system or whether we re checking that no traces satisfies the current constraint system",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "SystemTraceQuantifier",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "System Trace Quantifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:ExistsNoTrace",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ExistsNoTrace",
        "fct-source": "src/Theory-Constraint-System.html#SystemTraceQuantifier",
        "fct-type": "function",
        "title": "ExistsNoTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "ExistsNoTrace",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Exists No Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:ExistsSomeTrace",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ExistsSomeTrace",
        "fct-source": "src/Theory-Constraint-System.html#SystemTraceQuantifier",
        "fct-type": "function",
        "title": "ExistsSomeTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "ExistsSomeTrace",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Exists Some Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:GoalStatus",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "GoalStatus",
        "fct-source": "src/Theory-Constraint-System.html#GoalStatus",
        "fct-type": "function",
        "title": "GoalStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "GoalStatus",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goal Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:TypedCaseDist",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "TypedCaseDist",
        "fct-source": "src/Theory-Constraint-System.html#CaseDistKind",
        "fct-type": "function",
        "title": "TypedCaseDist"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "TypedCaseDist",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Typed Case Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:UntypedCaseDist",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "UntypedCaseDist",
        "fct-source": "src/Theory-Constraint-System.html#CaseDistKind",
        "fct-type": "function",
        "title": "UntypedCaseDist"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "UntypedCaseDist",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Untyped Case Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:_gsLoopBreaker",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Bool",
        "fct-source": "src/Theory-Constraint-System.html#GoalStatus",
        "fct-type": "function",
        "title": "_gsLoopBreaker"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "_gsLoopBreaker",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Loop Breaker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:_gsNr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Integer",
        "fct-source": "src/Theory-Constraint-System.html#GoalStatus",
        "fct-type": "function",
        "title": "_gsNr"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "_gsNr",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Nr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:_gsSolved",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Bool",
        "fct-source": "src/Theory-Constraint-System.html#GoalStatus",
        "fct-type": "function",
        "title": "_gsSolved"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "_gsSolved",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Solved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:allActions",
      "description": {
        "fct-descr": "\u003cp\u003eAll actions that hold in a sequent.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [(NodeId, LNFact)]",
        "fct-source": "src/Theory-Constraint-System.html#allActions",
        "fct-type": "function",
        "title": "allActions"
      },
      "index": {
        "description": "All actions that hold in sequent",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "allActions",
        "normalized": "System-\u003e[(NodeId,LNFact)]",
        "package": "tamarin-prover-theory",
        "partial": "Actions",
        "signature": "System-\u003e[(NodeId,LNFact)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:allKDConcs",
      "description": {
        "fct-descr": "\u003cp\u003eA list of all KD-conclusions in the \u003ccode\u003e\u003ca\u003eSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [(NodeId, RuleACInst, LNTerm)]",
        "fct-source": "src/Theory-Constraint-System.html#allKDConcs",
        "fct-type": "function",
        "title": "allKDConcs"
      },
      "index": {
        "description": "list of all KD-conclusions in the System",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "allKDConcs",
        "normalized": "System-\u003e[(NodeId,RuleACInst,LNTerm)]",
        "package": "tamarin-prover-theory",
        "partial": "KDConcs",
        "signature": "System-\u003e[(NodeId,RuleACInst,LNTerm)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:allKUActions",
      "description": {
        "fct-descr": "\u003cp\u003eAll actions that hold in a sequent.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [(NodeId, LNFact, LNTerm)]",
        "fct-source": "src/Theory-Constraint-System.html#allKUActions",
        "fct-type": "function",
        "title": "allKUActions"
      },
      "index": {
        "description": "All actions that hold in sequent",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "allKUActions",
        "normalized": "System-\u003e[(NodeId,LNFact,LNTerm)]",
        "package": "tamarin-prover-theory",
        "partial": "KUActions",
        "signature": "System-\u003e[(NodeId,LNFact,LNTerm)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:alwaysBefore",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a predicate that is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first argument happens before\n the second argument in all models of the sequent.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e NodeId -\u003e NodeId -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System.html#alwaysBefore",
        "fct-type": "function",
        "title": "alwaysBefore"
      },
      "index": {
        "description": "Returns predicate that is True iff the first argument happens before the second argument in all models of the sequent",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "alwaysBefore",
        "normalized": "System-\u003eNodeId-\u003eNodeId-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Before",
        "signature": "System-\u003eNodeId-\u003eNodeId-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:emptySystem",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty constraint system, which is logically equivalent to true.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CaseDistKind -\u003e System",
        "fct-source": "src/Theory-Constraint-System.html#emptySystem",
        "fct-type": "function",
        "title": "emptySystem"
      },
      "index": {
        "description": "The empty constraint system which is logically equivalent to true",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "emptySystem",
        "normalized": "CaseDistKind-\u003eSystem",
        "package": "tamarin-prover-theory",
        "partial": "System",
        "signature": "CaseDistKind-\u003eSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:formulaToSystem",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the constraint system that has to be proven to show that given\n formula holds in the context of the given theory.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[LNGuarded]-\u003e CaseDistKind-\u003e SystemTraceQuantifier-\u003e LNFormula-\u003e System",
        "fct-type": "function",
        "title": "formulaToSystem"
      },
      "index": {
        "description": "Returns the constraint system that has to be proven to show that given formula holds in the context of the given theory",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "formulaToSystem",
        "normalized": "[LNGuarded]-\u003eCaseDistKind-\u003eSystemTraceQuantifier-\u003eLNFormula-\u003eSystem",
        "package": "tamarin-prover-theory",
        "partial": "To System",
        "signature": "[LNGuarded]-\u003eCaseDistKind-\u003eSystemTraceQuantifier-\u003eLNFormula-\u003eSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:gsLoopBreaker",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr GoalStatus Bool",
        "fct-source": "src/Theory-Constraint-System.html#gsLoopBreaker",
        "fct-type": "function",
        "title": "gsLoopBreaker"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "gsLoopBreaker",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Loop Breaker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:gsNr",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr GoalStatus Integer",
        "fct-source": "src/Theory-Constraint-System.html#gsNr",
        "fct-type": "function",
        "title": "gsNr"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "gsNr",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Nr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:gsSolved",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr GoalStatus Bool",
        "fct-source": "src/Theory-Constraint-System.html#gsSolved",
        "fct-type": "function",
        "title": "gsSolved"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "gsSolved",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Solved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:insertLemmas",
      "description": {
        "fct-descr": "\u003cp\u003eAdd lemmas / additional assumptions to a constraint system.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[LNGuarded] -\u003e System -\u003e System",
        "fct-source": "src/Theory-Constraint-System.html#insertLemmas",
        "fct-type": "function",
        "title": "insertLemmas"
      },
      "index": {
        "description": "Add lemmas additional assumptions to constraint system",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "insertLemmas",
        "normalized": "[LNGuarded]-\u003eSystem-\u003eSystem",
        "package": "tamarin-prover-theory",
        "partial": "Lemmas",
        "signature": "[LNGuarded]-\u003eSystem-\u003eSystem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:isInTrace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given node id is guaranteed to be instantiated to an\n index in the trace.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e NodeId -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System.html#isInTrace",
        "fct-type": "function",
        "title": "isInTrace"
      },
      "index": {
        "description": "True iff the given node id is guaranteed to be instantiated to an index in the trace",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "isInTrace",
        "normalized": "System-\u003eNodeId-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "In Trace",
        "signature": "System-\u003eNodeId-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:isLast",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given node id is guaranteed to be instantiated to the last\n index of the trace.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e NodeId -\u003e Bool",
        "fct-source": "src/Theory-Constraint-System.html#isLast",
        "fct-type": "function",
        "title": "isLast"
      },
      "index": {
        "description": "True iff the given node id is guaranteed to be instantiated to the last index of the trace",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "isLast",
        "normalized": "System-\u003eNodeId-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Last",
        "signature": "System-\u003eNodeId-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:kuActionAtoms",
      "description": {
        "fct-descr": "\u003cp\u003eAll KU-actions.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [(NodeId, LNFact, LNTerm)]",
        "fct-source": "src/Theory-Constraint-System.html#kuActionAtoms",
        "fct-type": "function",
        "title": "kuActionAtoms"
      },
      "index": {
        "description": "All KU-actions",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "kuActionAtoms",
        "normalized": "System-\u003e[(NodeId,LNFact,LNTerm)]",
        "package": "tamarin-prover-theory",
        "partial": "Action Atoms",
        "signature": "System-\u003e[(NodeId,LNFact,LNTerm)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodeConcFact",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enodeConcFact (NodeConc (v, i))\u003c/code\u003e accesses the \u003ccode\u003ei\u003c/code\u003e-th conclusion of the\n rule associated with node \u003ccode\u003ev\u003c/code\u003e under the assumption that \u003ccode\u003ev\u003c/code\u003e is labeled with\n a rule that has an \u003ccode\u003ei\u003c/code\u003e-th conclusion.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeConc -\u003e System -\u003e LNFact",
        "fct-source": "src/Theory-Constraint-System.html#nodeConcFact",
        "fct-type": "function",
        "title": "nodeConcFact"
      },
      "index": {
        "description": "nodeConcFact NodeConc accesses the th conclusion of the rule associated with node under the assumption that is labeled with rule that has an th conclusion",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "nodeConcFact",
        "normalized": "NodeConc-\u003eSystem-\u003eLNFact",
        "package": "tamarin-prover-theory",
        "partial": "Conc Fact",
        "signature": "NodeConc-\u003eSystem-\u003eLNFact"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodeConcNode",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enodeConcNode\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e compute the node-id of the node conclusion \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeConc -\u003e NodeId",
        "fct-source": "src/Theory-Constraint-System.html#nodeConcNode",
        "fct-type": "function",
        "title": "nodeConcNode"
      },
      "index": {
        "description": "nodeConcNode compute the node-id of the node conclusion",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "nodeConcNode",
        "normalized": "NodeConc-\u003eNodeId",
        "package": "tamarin-prover-theory",
        "partial": "Conc Node",
        "signature": "NodeConc-\u003eNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodePremFact",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enodePremFact prem se\u003c/code\u003e computes the fact associated to premise \u003ccode\u003eprem\u003c/code\u003e in\n sequent \u003ccode\u003ese\u003c/code\u003e under the assumption that premise \u003ccode\u003eprem\u003c/code\u003e is a a premise in\n \u003ccode\u003ese\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodePrem -\u003e System -\u003e LNFact",
        "fct-source": "src/Theory-Constraint-System.html#nodePremFact",
        "fct-type": "function",
        "title": "nodePremFact"
      },
      "index": {
        "description": "nodePremFact prem se computes the fact associated to premise prem in sequent se under the assumption that premise prem is premise in se",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "nodePremFact",
        "normalized": "NodePrem-\u003eSystem-\u003eLNFact",
        "package": "tamarin-prover-theory",
        "partial": "Prem Fact",
        "signature": "NodePrem-\u003eSystem-\u003eLNFact"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodePremNode",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enodePremNode prem\u003c/code\u003e is the node that this premise is referring to.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodePrem -\u003e NodeId",
        "fct-source": "src/Theory-Constraint-System.html#nodePremNode",
        "fct-type": "function",
        "title": "nodePremNode"
      },
      "index": {
        "description": "nodePremNode prem is the node that this premise is referring to",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "nodePremNode",
        "normalized": "NodePrem-\u003eNodeId",
        "package": "tamarin-prover-theory",
        "partial": "Prem Node",
        "signature": "NodePrem-\u003eNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodeRule",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enodeRule v\u003c/code\u003e accesses the rule label of node \u003ccode\u003ev\u003c/code\u003e under the assumption that\n it is present in the sequent.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeId -\u003e System -\u003e RuleACInst",
        "fct-source": "src/Theory-Constraint-System.html#nodeRule",
        "fct-type": "function",
        "title": "nodeRule"
      },
      "index": {
        "description": "nodeRule accesses the rule label of node under the assumption that it is present in the sequent",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "nodeRule",
        "normalized": "NodeId-\u003eSystem-\u003eRuleACInst",
        "package": "tamarin-prover-theory",
        "partial": "Rule",
        "signature": "NodeId-\u003eSystem-\u003eRuleACInst"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:prettyNonGraphSystem",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the non-graph part of the sequent; i.e. equation store and\n clauses.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e d",
        "fct-source": "src/Theory-Constraint-System.html#prettyNonGraphSystem",
        "fct-type": "function",
        "title": "prettyNonGraphSystem"
      },
      "index": {
        "description": "Pretty print the non-graph part of the sequent i.e equation store and clauses",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "prettyNonGraphSystem",
        "normalized": "System-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Non Graph System",
        "signature": "System-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:prettySystem",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a sequent\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e d",
        "fct-source": "src/Theory-Constraint-System.html#prettySystem",
        "fct-type": "function",
        "title": "prettySystem"
      },
      "index": {
        "description": "Pretty print sequent",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "prettySystem",
        "normalized": "System-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "System",
        "signature": "System-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:rawEdgeRel",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(from,to)\u003c/code\u003e is in \u003ccode\u003erawEdgeRel se\u003c/code\u003e iff we can prove that there is an\n edge-path from \u003ccode\u003efrom\u003c/code\u003e to \u003ccode\u003eto\u003c/code\u003e in \u003ccode\u003ese\u003c/code\u003e without appealing to transitivity.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [(NodeId, NodeId)]",
        "fct-source": "src/Theory-Constraint-System.html#rawEdgeRel",
        "fct-type": "function",
        "title": "rawEdgeRel"
      },
      "index": {
        "description": "from to is in rawEdgeRel se iff we can prove that there is an edge-path from from to to in se without appealing to transitivity",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "rawEdgeRel",
        "normalized": "System-\u003e[(NodeId,NodeId)]",
        "package": "tamarin-prover-theory",
        "partial": "Edge Rel",
        "signature": "System-\u003e[(NodeId,NodeId)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:rawLessRel",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(from,to)\u003c/code\u003e is in \u003ccode\u003erawLessRel se\u003c/code\u003e iff we can prove that there is a path\n (possibly using the \u003ccode\u003e\u003ca\u003eLess\u003c/a\u003e\u003c/code\u003e relation) from \u003ccode\u003efrom\u003c/code\u003e to \u003ccode\u003eto\u003c/code\u003e in \u003ccode\u003ese\u003c/code\u003e without\n appealing to transitivity.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [(NodeId, NodeId)]",
        "fct-source": "src/Theory-Constraint-System.html#rawLessRel",
        "fct-type": "function",
        "title": "rawLessRel"
      },
      "index": {
        "description": "from to is in rawLessRel se iff we can prove that there is path possibly using the Less relation from from to to in se without appealing to transitivity",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "rawLessRel",
        "normalized": "System-\u003e[(NodeId,NodeId)]",
        "package": "tamarin-prover-theory",
        "partial": "Less Rel",
        "signature": "System-\u003e[(NodeId,NodeId)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:resolveNodeConcFact",
      "description": {
        "fct-descr": "\u003cp\u003eThe fact associated with this node conclusion, if there is one.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodeConc -\u003e System -\u003e Maybe LNFact",
        "fct-source": "src/Theory-Constraint-System.html#resolveNodeConcFact",
        "fct-type": "function",
        "title": "resolveNodeConcFact"
      },
      "index": {
        "description": "The fact associated with this node conclusion if there is one",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "resolveNodeConcFact",
        "normalized": "NodeConc-\u003eSystem-\u003eMaybe LNFact",
        "package": "tamarin-prover-theory",
        "partial": "Node Conc Fact",
        "signature": "NodeConc-\u003eSystem-\u003eMaybe LNFact"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:resolveNodePremFact",
      "description": {
        "fct-descr": "\u003cp\u003eAll facts associated to this node premise.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NodePrem -\u003e System -\u003e Maybe LNFact",
        "fct-source": "src/Theory-Constraint-System.html#resolveNodePremFact",
        "fct-type": "function",
        "title": "resolveNodePremFact"
      },
      "index": {
        "description": "All facts associated to this node premise",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "resolveNodePremFact",
        "normalized": "NodePrem-\u003eSystem-\u003eMaybe LNFact",
        "package": "tamarin-prover-theory",
        "partial": "Node Prem Fact",
        "signature": "NodePrem-\u003eSystem-\u003eMaybe LNFact"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sCaseDistKind",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System CaseDistKind",
        "fct-source": "src/Theory-Constraint-System.html#sCaseDistKind",
        "fct-type": "function",
        "title": "sCaseDistKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sCaseDistKind",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case Dist Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sConjDisjEqs",
      "description": {
        "fct-descr": "\u003cp\u003eLabel to access the conjunction of disjunctions of fresh substutitution in\n the equation store.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System :-\u003e Conj (SplitId, Set LNSubstVFresh)",
        "fct-source": "src/Theory-Constraint-System.html#sConjDisjEqs",
        "fct-type": "function",
        "title": "sConjDisjEqs"
      },
      "index": {
        "description": "Label to access the conjunction of disjunctions of fresh substutitution in the equation store",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sConjDisjEqs",
        "normalized": "System-\u003eConj(SplitId,Set LNSubstVFresh)",
        "package": "tamarin-prover-theory",
        "partial": "Conj Disj Eqs",
        "signature": "System-\u003eConj(SplitId,Set LNSubstVFresh)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sEdges",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System (Set Edge)",
        "fct-source": "src/Theory-Constraint-System.html#sEdges",
        "fct-type": "function",
        "title": "sEdges"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sEdges",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Edges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sEqStore",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System EqStore",
        "fct-source": "src/Theory-Constraint-System.html#sEqStore",
        "fct-type": "function",
        "title": "sEqStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sEqStore",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Eq Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sFormulas",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System (Set LNGuarded)",
        "fct-source": "src/Theory-Constraint-System.html#sFormulas",
        "fct-type": "function",
        "title": "sFormulas"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sFormulas",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Formulas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sGoals",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System (Map Goal GoalStatus)",
        "fct-source": "src/Theory-Constraint-System.html#sGoals",
        "fct-type": "function",
        "title": "sGoals"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sGoals",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Goals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sLastAtom",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System (Maybe NodeId)",
        "fct-source": "src/Theory-Constraint-System.html#sLastAtom",
        "fct-type": "function",
        "title": "sLastAtom"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sLastAtom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Last Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sLemmas",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System (Set LNGuarded)",
        "fct-source": "src/Theory-Constraint-System.html#sLemmas",
        "fct-type": "function",
        "title": "sLemmas"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sLemmas",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Lemmas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sLessAtoms",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System (Set (NodeId, NodeId))",
        "fct-source": "src/Theory-Constraint-System.html#sLessAtoms",
        "fct-type": "function",
        "title": "sLessAtoms"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sLessAtoms",
        "normalized": "Lens a System(Set(NodeId,NodeId))",
        "package": "tamarin-prover-theory",
        "partial": "Less Atoms",
        "signature": "Lens arr System(Set(NodeId,NodeId))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sNextGoalNr",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System Integer",
        "fct-source": "src/Theory-Constraint-System.html#sNextGoalNr",
        "fct-type": "function",
        "title": "sNextGoalNr"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sNextGoalNr",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Next Goal Nr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sNodes",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System (Map NodeId RuleACInst)",
        "fct-source": "src/Theory-Constraint-System.html#sNodes",
        "fct-type": "function",
        "title": "sNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sNodes",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Nodes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sSolvedFormulas",
      "description": {
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr System (Set LNGuarded)",
        "fct-source": "src/Theory-Constraint-System.html#sSolvedFormulas",
        "fct-type": "function",
        "title": "sSolvedFormulas"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sSolvedFormulas",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Solved Formulas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sSubst",
      "description": {
        "fct-descr": "\u003cp\u003eLabel to access the free substitution of the equation store.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System :-\u003e LNSubst",
        "fct-source": "src/Theory-Constraint-System.html#sSubst",
        "fct-type": "function",
        "title": "sSubst"
      },
      "index": {
        "description": "Label to access the free substitution of the equation store",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "sSubst",
        "normalized": "System-\u003eLNSubst",
        "package": "tamarin-prover-theory",
        "partial": "Subst",
        "signature": "System-\u003eLNSubst"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:standardActionAtoms",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard actions, i.e., non-KU-actions.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [(NodeId, LNFact)]",
        "fct-source": "src/Theory-Constraint-System.html#standardActionAtoms",
        "fct-type": "function",
        "title": "standardActionAtoms"
      },
      "index": {
        "description": "The standard actions i.e non-KU-actions",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "standardActionAtoms",
        "normalized": "System-\u003e[(NodeId,LNFact)]",
        "package": "tamarin-prover-theory",
        "partial": "Action Atoms",
        "signature": "System-\u003e[(NodeId,LNFact)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:unsolvedActionAtoms",
      "description": {
        "fct-descr": "\u003cp\u003eAll actions that hold in a sequent.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [(NodeId, LNFact)]",
        "fct-source": "src/Theory-Constraint-System.html#unsolvedActionAtoms",
        "fct-type": "function",
        "title": "unsolvedActionAtoms"
      },
      "index": {
        "description": "All actions that hold in sequent",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "unsolvedActionAtoms",
        "normalized": "System-\u003e[(NodeId,LNFact)]",
        "package": "tamarin-prover-theory",
        "partial": "Action Atoms",
        "signature": "System-\u003e[(NodeId,LNFact)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:unsolvedChains",
      "description": {
        "fct-descr": "\u003cp\u003eAll unsolved destruction chains in the constraint system.\n\u003c/p\u003e",
        "fct-module": "Theory.Constraint.System",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "System -\u003e [(NodeConc, NodePrem)]",
        "fct-source": "src/Theory-Constraint-System.html#unsolvedChains",
        "fct-type": "function",
        "title": "unsolvedChains"
      },
      "index": {
        "description": "All unsolved destruction chains in the constraint system",
        "hierarchy": "Theory Constraint System",
        "module": "Theory.Constraint.System",
        "name": "unsolvedChains",
        "normalized": "System-\u003e[(NodeConc,NodePrem)]",
        "package": "tamarin-prover-theory",
        "partial": "Chains",
        "signature": "System-\u003e[(NodeConc,NodePrem)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormulas that represent security properties.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Model-Atom.html",
        "fct-type": "module",
        "title": "Atom"
      },
      "index": {
        "description": "Formulas that represent security properties",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "Atom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#t:Atom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eAtom\u003c/code\u003e's are the atoms of trace formulas parametrized over arbitrary\n terms.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Atom.html#Atom",
        "fct-type": "data",
        "title": "Atom"
      },
      "index": {
        "description": "Atom are the atoms of trace formulas parametrized over arbitrary terms",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "Atom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#t:BLAtom",
      "description": {
        "fct-descr": "\u003cp\u003eAtoms built over \u003ccode\u003e\u003ca\u003eBLTerm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Atom.html#BLAtom",
        "fct-type": "type",
        "title": "BLAtom"
      },
      "index": {
        "description": "Atoms built over BLTerm",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "BLAtom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "BLAtom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#t:LNAtom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eLAtom\u003c/code\u003e are the atoms we actually use in graph formulas input by the user.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Atom.html#LNAtom",
        "fct-type": "type",
        "title": "LNAtom"
      },
      "index": {
        "description": "LAtom are the atoms we actually use in graph formulas input by the user",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "LNAtom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LNAtom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#t:NAtom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eLAtom\u003c/code\u003e are the atoms we actually use in graph formulas input by the user.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Atom.html#NAtom",
        "fct-type": "type",
        "title": "NAtom"
      },
      "index": {
        "description": "LAtom are the atoms we actually use in graph formulas input by the user",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "NAtom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "NAtom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:Action",
      "description": {
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Action t (Fact t)",
        "fct-source": "src/Theory-Model-Atom.html#Atom",
        "fct-type": "function",
        "title": "Action"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "Action",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:EqE",
      "description": {
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqE t t",
        "fct-source": "src/Theory-Model-Atom.html#Atom",
        "fct-type": "function",
        "title": "EqE"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "EqE",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:Last",
      "description": {
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Last t",
        "fct-source": "src/Theory-Model-Atom.html#Atom",
        "fct-type": "function",
        "title": "Last"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "Last",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Last",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:Less",
      "description": {
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Less t t",
        "fct-source": "src/Theory-Model-Atom.html#Atom",
        "fct-type": "function",
        "title": "Less"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "Less",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Less",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:isActionAtom",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the atom is an action atom.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Atom t -\u003e Bool",
        "fct-source": "src/Theory-Model-Atom.html#isActionAtom",
        "fct-type": "function",
        "title": "isActionAtom"
      },
      "index": {
        "description": "True iff the atom is an action atom",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "isActionAtom",
        "normalized": "Atom a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Action Atom",
        "signature": "Atom t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:isEqAtom",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the atom is an equality atom.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Atom t -\u003e Bool",
        "fct-source": "src/Theory-Model-Atom.html#isEqAtom",
        "fct-type": "function",
        "title": "isEqAtom"
      },
      "index": {
        "description": "True iff the atom is an equality atom",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "isEqAtom",
        "normalized": "Atom a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Eq Atom",
        "signature": "Atom t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:isLastAtom",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the atom is a last atom.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Atom t -\u003e Bool",
        "fct-source": "src/Theory-Model-Atom.html#isLastAtom",
        "fct-type": "function",
        "title": "isLastAtom"
      },
      "index": {
        "description": "True iff the atom is last atom",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "isLastAtom",
        "normalized": "Atom a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Last Atom",
        "signature": "Atom t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:isLessAtom",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the atom is a temporal ordering atom.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Atom t -\u003e Bool",
        "fct-source": "src/Theory-Model-Atom.html#isLessAtom",
        "fct-type": "function",
        "title": "isLessAtom"
      },
      "index": {
        "description": "True iff the atom is temporal ordering atom",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "isLessAtom",
        "normalized": "Atom a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Less Atom",
        "signature": "Atom t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:prettyNAtom",
      "description": {
        "fct-module": "Theory.Model.Atom",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "NAtom v -\u003e d",
        "fct-source": "src/Theory-Model-Atom.html#prettyNAtom",
        "fct-type": "function",
        "title": "prettyNAtom"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Atom",
        "module": "Theory.Model.Atom",
        "name": "prettyNAtom",
        "normalized": "NAtom a-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "NAtom",
        "signature": "NAtom v-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFacts used to formulate and reason about protocol execution.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Model-Fact.html",
        "fct-type": "module",
        "title": "Fact"
      },
      "index": {
        "description": "Facts used to formulate and reason about protocol execution",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "Fact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:DirTag",
      "description": {
        "fct-descr": "\u003cp\u003eA direction tag\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Fact.html#DirTag",
        "fct-type": "data",
        "title": "DirTag"
      },
      "index": {
        "description": "direction tag",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "DirTag",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Dir Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:Fact",
      "description": {
        "fct-descr": "\u003cp\u003eFacts.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Fact.html#Fact",
        "fct-type": "data",
        "title": "Fact"
      },
      "index": {
        "description": "Facts",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "Fact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:FactTag",
      "description": {
        "fct-descr": "\u003cp\u003eFact tags/symbols\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Fact.html#FactTag",
        "fct-type": "data",
        "title": "FactTag"
      },
      "index": {
        "description": "Fact tags symbols",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "FactTag",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Fact Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:LFact",
      "description": {
        "fct-descr": "\u003cp\u003eFacts with literals arbitrary constants and logical variables.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Fact.html#LFact",
        "fct-type": "type",
        "title": "LFact"
      },
      "index": {
        "description": "Facts with literals arbitrary constants and logical variables",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "LFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LFact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:LNFact",
      "description": {
        "fct-descr": "\u003cp\u003eFacts used for proving; i.e. variables fixed to logical variables\n and constant fixed to names.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Fact.html#LNFact",
        "fct-type": "type",
        "title": "LNFact"
      },
      "index": {
        "description": "Facts used for proving i.e variables fixed to logical variables and constant fixed to names",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "LNFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LNFact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:Multiplicity",
      "description": {
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Fact.html#Multiplicity",
        "fct-type": "data",
        "title": "Multiplicity"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "Multiplicity",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Multiplicity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:NFact",
      "description": {
        "fct-descr": "\u003cp\u003eFacts with literals containing names and arbitrary variables.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Fact.html#NFact",
        "fct-type": "type",
        "title": "NFact"
      },
      "index": {
        "description": "Facts with literals containing names and arbitrary variables",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "NFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "NFact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:DedFact",
      "description": {
        "fct-descr": "\u003cp\u003eLog-fact denoting that the intruder deduced\n a message using a construction rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "DedFact",
        "fct-source": "src/Theory-Model-Fact.html#FactTag",
        "fct-type": "function",
        "title": "DedFact"
      },
      "index": {
        "description": "Log-fact denoting that the intruder deduced message using construction rule",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "DedFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Ded Fact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:DnK",
      "description": {
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "DnK",
        "fct-source": "src/Theory-Model-Fact.html#DirTag",
        "fct-type": "function",
        "title": "DnK"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "DnK",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Dn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:Fact",
      "description": {
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Fact",
        "fct-source": "src/Theory-Model-Fact.html#Fact",
        "fct-type": "function",
        "title": "Fact"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "Fact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:FreshFact",
      "description": {
        "fct-descr": "\u003cp\u003eFreshly generated value.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FreshFact",
        "fct-source": "src/Theory-Model-Fact.html#FactTag",
        "fct-type": "function",
        "title": "FreshFact"
      },
      "index": {
        "description": "Freshly generated value",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "FreshFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Fresh Fact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:InFact",
      "description": {
        "fct-descr": "\u003cp\u003eOfficially known by the intruder/network.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "InFact",
        "fct-source": "src/Theory-Model-Fact.html#FactTag",
        "fct-type": "function",
        "title": "InFact"
      },
      "index": {
        "description": "Officially known by the intruder network",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "InFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "In Fact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:KDFact",
      "description": {
        "fct-descr": "\u003cp\u003eDown-knowledge fact in message deduction.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "KDFact",
        "fct-source": "src/Theory-Model-Fact.html#FactTag",
        "fct-type": "function",
        "title": "KDFact"
      },
      "index": {
        "description": "Down-knowledge fact in message deduction",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "KDFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "KDFact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:KUFact",
      "description": {
        "fct-descr": "\u003cp\u003eUp-knowledge fact in messsage deduction.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "KUFact",
        "fct-source": "src/Theory-Model-Fact.html#FactTag",
        "fct-type": "function",
        "title": "KUFact"
      },
      "index": {
        "description": "Up-knowledge fact in messsage deduction",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "KUFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "KUFact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:Linear",
      "description": {
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Linear",
        "fct-source": "src/Theory-Model-Fact.html#Multiplicity",
        "fct-type": "function",
        "title": "Linear"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "Linear",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:OutFact",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the protocol\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "OutFact",
        "fct-source": "src/Theory-Model-Fact.html#FactTag",
        "fct-type": "function",
        "title": "OutFact"
      },
      "index": {
        "description": "Sent by the protocol",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "OutFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Out Fact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:Persistent",
      "description": {
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Persistent",
        "fct-source": "src/Theory-Model-Fact.html#Multiplicity",
        "fct-type": "function",
        "title": "Persistent"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "Persistent",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Persistent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:ProtoFact",
      "description": {
        "fct-descr": "\u003cp\u003eA protocol fact together with its arity and multiplicity.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoFact Multiplicity String Int",
        "fct-source": "src/Theory-Model-Fact.html#FactTag",
        "fct-type": "function",
        "title": "ProtoFact"
      },
      "index": {
        "description": "protocol fact together with its arity and multiplicity",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "ProtoFact",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proto Fact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:UpK",
      "description": {
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "UpK",
        "fct-source": "src/Theory-Model-Fact.html#DirTag",
        "fct-type": "function",
        "title": "UpK"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "UpK",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:dedFactView",
      "description": {
        "fct-descr": "\u003cp\u003eView a deduction logging fact.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFact -\u003e Maybe LNTerm",
        "fct-source": "src/Theory-Model-Fact.html#dedFactView",
        "fct-type": "function",
        "title": "dedFactView"
      },
      "index": {
        "description": "View deduction logging fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "dedFactView",
        "normalized": "LNFact-\u003eMaybe LNTerm",
        "package": "tamarin-prover-theory",
        "partial": "Fact View",
        "signature": "LNFact-\u003eMaybe LNTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:dedLogFact",
      "description": {
        "fct-descr": "\u003cp\u003eA fact logging that the intruder deduced a message using a construction\n rule. We use this to formulate invariants over normal dependency graphs.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "t -\u003e Fact t",
        "fct-source": "src/Theory-Model-Fact.html#dedLogFact",
        "fct-type": "function",
        "title": "dedLogFact"
      },
      "index": {
        "description": "fact logging that the intruder deduced message using construction rule We use this to formulate invariants over normal dependency graphs",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "dedLogFact",
        "normalized": "a-\u003eFact a",
        "package": "tamarin-prover-theory",
        "partial": "Log Fact",
        "signature": "t-\u003eFact t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factArity",
      "description": {
        "fct-descr": "\u003cp\u003eThe arity of a \u003ccode\u003e\u003ca\u003eFact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Fact t -\u003e Int",
        "fct-source": "src/Theory-Model-Fact.html#factArity",
        "fct-type": "function",
        "title": "factArity"
      },
      "index": {
        "description": "The arity of Fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "factArity",
        "normalized": "Fact a-\u003eInt",
        "package": "tamarin-prover-theory",
        "partial": "Arity",
        "signature": "Fact t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factMultiplicity",
      "description": {
        "fct-descr": "\u003cp\u003eThe multiplicity of a \u003ccode\u003e\u003ca\u003eFact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Fact t -\u003e Multiplicity",
        "fct-source": "src/Theory-Model-Fact.html#factMultiplicity",
        "fct-type": "function",
        "title": "factMultiplicity"
      },
      "index": {
        "description": "The multiplicity of Fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "factMultiplicity",
        "normalized": "Fact a-\u003eMultiplicity",
        "package": "tamarin-prover-theory",
        "partial": "Multiplicity",
        "signature": "Fact t-\u003eMultiplicity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FactTag",
        "fct-source": "src/Theory-Model-Fact.html#Fact",
        "fct-type": "function",
        "title": "factTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "factTag",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTagArity",
      "description": {
        "fct-descr": "\u003cp\u003eThe arity of a \u003ccode\u003e\u003ca\u003eFactTag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FactTag -\u003e Int",
        "fct-source": "src/Theory-Model-Fact.html#factTagArity",
        "fct-type": "function",
        "title": "factTagArity"
      },
      "index": {
        "description": "The arity of FactTag",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "factTagArity",
        "normalized": "FactTag-\u003eInt",
        "package": "tamarin-prover-theory",
        "partial": "Tag Arity",
        "signature": "FactTag-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTagMultiplicity",
      "description": {
        "fct-descr": "\u003cp\u003eThe multiplicity of a \u003ccode\u003e\u003ca\u003eFactTag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FactTag -\u003e Multiplicity",
        "fct-source": "src/Theory-Model-Fact.html#factTagMultiplicity",
        "fct-type": "function",
        "title": "factTagMultiplicity"
      },
      "index": {
        "description": "The multiplicity of FactTag",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "factTagMultiplicity",
        "normalized": "FactTag-\u003eMultiplicity",
        "package": "tamarin-prover-theory",
        "partial": "Tag Multiplicity",
        "signature": "FactTag-\u003eMultiplicity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTagName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a fact tag, e.g., \u003ccode\u003efactTagName KUFact = \u003ca\u003eKU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FactTag -\u003e String",
        "fct-source": "src/Theory-Model-Fact.html#factTagName",
        "fct-type": "function",
        "title": "factTagName"
      },
      "index": {
        "description": "The name of fact tag e.g factTagName KUFact KU",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "factTagName",
        "normalized": "FactTag-\u003eString",
        "package": "tamarin-prover-theory",
        "partial": "Tag Name",
        "signature": "FactTag-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTerms",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[t]",
        "fct-source": "src/Theory-Model-Fact.html#Fact",
        "fct-type": "function",
        "title": "factTerms"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "factTerms",
        "normalized": "[a]",
        "package": "tamarin-prover-theory",
        "partial": "Terms",
        "signature": "[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:freshFact",
      "description": {
        "fct-descr": "\u003cp\u003eA fresh fact denotes a fresh unguessable name.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "t -\u003e Fact t",
        "fct-source": "src/Theory-Model-Fact.html#freshFact",
        "fct-type": "function",
        "title": "freshFact"
      },
      "index": {
        "description": "fresh fact denotes fresh unguessable name",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "freshFact",
        "normalized": "a-\u003eFact a",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": "t-\u003eFact t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:inFact",
      "description": {
        "fct-descr": "\u003cp\u003eA fact denoting that the intruder sent a message to the protocol.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "t -\u003e Fact t",
        "fct-source": "src/Theory-Model-Fact.html#inFact",
        "fct-type": "function",
        "title": "inFact"
      },
      "index": {
        "description": "fact denoting that the intruder sent message to the protocol",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "inFact",
        "normalized": "a-\u003eFact a",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": "t-\u003eFact t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isKDFact",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the fact is a KD-fact.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFact -\u003e Bool",
        "fct-source": "src/Theory-Model-Fact.html#isKDFact",
        "fct-type": "function",
        "title": "isKDFact"
      },
      "index": {
        "description": "True if the fact is KD-fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "isKDFact",
        "normalized": "LNFact-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "KDFact",
        "signature": "LNFact-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isKFact",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the fact is a message-deduction fact.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFact -\u003e Bool",
        "fct-source": "src/Theory-Model-Fact.html#isKFact",
        "fct-type": "function",
        "title": "isKFact"
      },
      "index": {
        "description": "True if the fact is message-deduction fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "isKFact",
        "normalized": "LNFact-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "KFact",
        "signature": "LNFact-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isKUFact",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the fact is a KU-fact.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFact -\u003e Bool",
        "fct-source": "src/Theory-Model-Fact.html#isKUFact",
        "fct-type": "function",
        "title": "isKUFact"
      },
      "index": {
        "description": "True if the fact is KU-fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "isKUFact",
        "normalized": "LNFact-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "KUFact",
        "signature": "LNFact-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isLinearFact",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the fact is a linear fact.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Fact t -\u003e Bool",
        "fct-source": "src/Theory-Model-Fact.html#isLinearFact",
        "fct-type": "function",
        "title": "isLinearFact"
      },
      "index": {
        "description": "True if the fact is linear fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "isLinearFact",
        "normalized": "Fact a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Linear Fact",
        "signature": "Fact t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isPersistentFact",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the fact is a persistent fact.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Fact t -\u003e Bool",
        "fct-source": "src/Theory-Model-Fact.html#isPersistentFact",
        "fct-type": "function",
        "title": "isPersistentFact"
      },
      "index": {
        "description": "True if the fact is persistent fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "isPersistentFact",
        "normalized": "Fact a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Persistent Fact",
        "signature": "Fact t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isProtoFact",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the fact is a non-special protocol fact.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Fact t -\u003e Bool",
        "fct-source": "src/Theory-Model-Fact.html#isProtoFact",
        "fct-type": "function",
        "title": "isProtoFact"
      },
      "index": {
        "description": "True iff the fact is non-special protocol fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "isProtoFact",
        "normalized": "Fact a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Proto Fact",
        "signature": "Fact t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:kFactView",
      "description": {
        "fct-descr": "\u003cp\u003eView a message-deduction fact.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFact -\u003e Maybe (DirTag, LNTerm)",
        "fct-source": "src/Theory-Model-Fact.html#kFactView",
        "fct-type": "function",
        "title": "kFactView"
      },
      "index": {
        "description": "View message-deduction fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "kFactView",
        "normalized": "LNFact-\u003eMaybe(DirTag,LNTerm)",
        "package": "tamarin-prover-theory",
        "partial": "Fact View",
        "signature": "LNFact-\u003eMaybe(DirTag,LNTerm)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:kLogFact",
      "description": {
        "fct-descr": "\u003cp\u003eA fact logging that the intruder knows a message.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "t -\u003e Fact t",
        "fct-source": "src/Theory-Model-Fact.html#kLogFact",
        "fct-type": "function",
        "title": "kLogFact"
      },
      "index": {
        "description": "fact logging that the intruder knows message",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "kLogFact",
        "normalized": "a-\u003eFact a",
        "package": "tamarin-prover-theory",
        "partial": "Log Fact",
        "signature": "t-\u003eFact t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:kdFact",
      "description": {
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "t -\u003e Fact t",
        "fct-source": "src/Theory-Model-Fact.html#kdFact",
        "fct-type": "function",
        "title": "kdFact"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "kdFact",
        "normalized": "a-\u003eFact a",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": "t-\u003eFact t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:kuFact",
      "description": {
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "t -\u003e Fact t",
        "fct-source": "src/Theory-Model-Fact.html#kuFact",
        "fct-type": "function",
        "title": "kuFact"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "kuFact",
        "normalized": "a-\u003eFact a",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": "t-\u003eFact t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:matchFact",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ematchLFact t p\u003c/code\u003e is a complete set of AC matchers for the term fact \u003ccode\u003et\u003c/code\u003e\n and the pattern fact \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Fact t-\u003e Fact t-\u003e Match t",
        "fct-type": "function",
        "title": "matchFact"
      },
      "index": {
        "description": "matchLFact is complete set of AC matchers for the term fact and the pattern fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "matchFact",
        "normalized": "Fact a-\u003eFact a-\u003eMatch a",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": "Fact t-\u003eFact t-\u003eMatch t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:outFact",
      "description": {
        "fct-descr": "\u003cp\u003eA fact denoting a message sent by the protocol to the intruder.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "t -\u003e Fact t",
        "fct-source": "src/Theory-Model-Fact.html#outFact",
        "fct-type": "function",
        "title": "outFact"
      },
      "index": {
        "description": "fact denoting message sent by the protocol to the intruder",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "outFact",
        "normalized": "a-\u003eFact a",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": "t-\u003eFact t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:prettyFact",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a fact.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(t -\u003e d) -\u003e Fact t -\u003e d",
        "fct-source": "src/Theory-Model-Fact.html#prettyFact",
        "fct-type": "function",
        "title": "prettyFact"
      },
      "index": {
        "description": "Pretty print fact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "prettyFact",
        "normalized": "(a-\u003eb)-\u003eFact a-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": "(t-\u003ed)-\u003eFact t-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:prettyLNFact",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eLFact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFact -\u003e d",
        "fct-source": "src/Theory-Model-Fact.html#prettyLNFact",
        "fct-type": "function",
        "title": "prettyLNFact"
      },
      "index": {
        "description": "Pretty print LFact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "prettyLNFact",
        "normalized": "LNFact-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "LNFact",
        "signature": "LNFact-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:prettyNFact",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eNFact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFact -\u003e d",
        "fct-source": "src/Theory-Model-Fact.html#prettyNFact",
        "fct-type": "function",
        "title": "prettyNFact"
      },
      "index": {
        "description": "Pretty print NFact",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "prettyNFact",
        "normalized": "LNFact-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "NFact",
        "signature": "LNFact-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:protoFact",
      "description": {
        "fct-descr": "\u003cp\u003eA protocol fact denotes a fact generated by a protocol rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Multiplicity -\u003e String -\u003e [t] -\u003e Fact t",
        "fct-source": "src/Theory-Model-Fact.html#protoFact",
        "fct-type": "function",
        "title": "protoFact"
      },
      "index": {
        "description": "protocol fact denotes fact generated by protocol rule",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "protoFact",
        "normalized": "Multiplicity-\u003eString-\u003e[a]-\u003eFact a",
        "package": "tamarin-prover-theory",
        "partial": "Fact",
        "signature": "Multiplicity-\u003eString-\u003e[t]-\u003eFact t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:showFactTag",
      "description": {
        "fct-descr": "\u003cp\u003eShow a fact tag as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e. This is the \u003ccode\u003e\u003ca\u003efactTagName\u003c/a\u003e\u003c/code\u003e prefixed with\n the multiplicity.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FactTag -\u003e String",
        "fct-source": "src/Theory-Model-Fact.html#showFactTag",
        "fct-type": "function",
        "title": "showFactTag"
      },
      "index": {
        "description": "Show fact tag as String This is the factTagName prefixed with the multiplicity",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "showFactTag",
        "normalized": "FactTag-\u003eString",
        "package": "tamarin-prover-theory",
        "partial": "Fact Tag",
        "signature": "FactTag-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:showFactTagArity",
      "description": {
        "fct-descr": "\u003cp\u003eShow a fact tag together with its aritiy.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FactTag -\u003e String",
        "fct-source": "src/Theory-Model-Fact.html#showFactTagArity",
        "fct-type": "function",
        "title": "showFactTagArity"
      },
      "index": {
        "description": "Show fact tag together with its aritiy",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "showFactTagArity",
        "normalized": "FactTag-\u003eString",
        "package": "tamarin-prover-theory",
        "partial": "Fact Tag Arity",
        "signature": "FactTag-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:unifiableLNFacts",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the two facts are unifiable.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFact -\u003e LNFact -\u003e WithMaude Bool",
        "fct-source": "src/Theory-Model-Fact.html#unifiableLNFacts",
        "fct-type": "function",
        "title": "unifiableLNFacts"
      },
      "index": {
        "description": "True iff the two facts are unifiable",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "unifiableLNFacts",
        "normalized": "LNFact-\u003eLNFact-\u003eWithMaude Bool",
        "package": "tamarin-prover-theory",
        "partial": "LNFacts",
        "signature": "LNFact-\u003eLNFact-\u003eWithMaude Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:unifyLNFactEqs",
      "description": {
        "fct-descr": "\u003cp\u003eUnify a list of \u003ccode\u003eLFact\u003c/code\u003e equalities.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Fact",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[Equal LNFact] -\u003e WithMaude [LNSubstVFresh]",
        "fct-source": "src/Theory-Model-Fact.html#unifyLNFactEqs",
        "fct-type": "function",
        "title": "unifyLNFactEqs"
      },
      "index": {
        "description": "Unify list of LFact equalities",
        "hierarchy": "Theory Model Fact",
        "module": "Theory.Model.Fact",
        "name": "unifyLNFactEqs",
        "normalized": "[Equal LNFact]-\u003eWithMaude[LNSubstVFresh]",
        "package": "tamarin-prover-theory",
        "partial": "LNFact Eqs",
        "signature": "[Equal LNFact]-\u003eWithMaude[LNSubstVFresh]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and operations for handling sorted first-order logic\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Model-Formula.html",
        "fct-type": "module",
        "title": "Formula"
      },
      "index": {
        "description": "Types and operations for handling sorted first-order logic",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Formula",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Formula",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:Connective",
      "description": {
        "fct-descr": "\u003cp\u003eLogical connectives.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Formula.html#Connective",
        "fct-type": "data",
        "title": "Connective"
      },
      "index": {
        "description": "Logical connectives",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Connective",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Connective",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:Formula",
      "description": {
        "fct-descr": "\u003cp\u003eFirst-order formulas in locally nameless representation with hints for the\n names/sorts of quantified variables.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Formula.html#Formula",
        "fct-type": "data",
        "title": "Formula"
      },
      "index": {
        "description": "First-order formulas in locally nameless representation with hints for the names sorts of quantified variables",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Formula",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Formula",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:LFormula",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eLFormula\u003c/code\u003e are FOL formulas with sorts abused to denote both a hint for\n the name of the bound variable, as well as the variable's actual sort.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Formula.html#LFormula",
        "fct-type": "type",
        "title": "LFormula"
      },
      "index": {
        "description": "LFormula are FOL formulas with sorts abused to denote both hint for the name of the bound variable as well as the variable actual sort",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "LFormula",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LFormula",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:LNFormula",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Formula.html#LNFormula",
        "fct-type": "type",
        "title": "LNFormula"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "LNFormula",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LNFormula",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:Quantifier",
      "description": {
        "fct-descr": "\u003cp\u003eQuantifiers.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Formula.html#Quantifier",
        "fct-type": "data",
        "title": "Quantifier"
      },
      "index": {
        "description": "Quantifiers",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Quantifier",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Quantifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:.-124--124-.",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Formula a s v -\u003e Formula a s v -\u003e Formula a s v",
        "fct-source": "src/Theory-Model-Formula.html#.%7C%7C.",
        "fct-type": "function",
        "title": "(.||.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "(.||.) .||.",
        "normalized": "Formula a b c-\u003eFormula a b c-\u003eFormula a b c",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Formula a s v-\u003eFormula a s v-\u003eFormula a s v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:.-38--38-.",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Formula a s v -\u003e Formula a s v -\u003e Formula a s v",
        "fct-source": "src/Theory-Model-Formula.html#.%26%26.",
        "fct-type": "function",
        "title": "(.&&.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "(.&&.) .&&.",
        "normalized": "Formula a b c-\u003eFormula a b c-\u003eFormula a b c",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Formula a s v-\u003eFormula a s v-\u003eFormula a s v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:.-60--61--62-.",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Formula a s v -\u003e Formula a s v -\u003e Formula a s v",
        "fct-source": "src/Theory-Model-Formula.html#.%3C%3D%3E.",
        "fct-type": "function",
        "title": "(.\u003c=\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "(.\u003c=\u003e.) .\u003c=\u003e.",
        "normalized": "Formula a b c-\u003eFormula a b c-\u003eFormula a b c",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Formula a s v-\u003eFormula a s v-\u003eFormula a s v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:.-61--61--62-.",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Formula a s v -\u003e Formula a s v -\u003e Formula a s v",
        "fct-source": "src/Theory-Model-Formula.html#.%3D%3D%3E.",
        "fct-type": "function",
        "title": "(.==\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "(.==\u003e.) .==\u003e.",
        "normalized": "Formula a b c-\u003eFormula a b c-\u003eFormula a b c",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Formula a s v-\u003eFormula a s v-\u003eFormula a s v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:All",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "All",
        "fct-source": "src/Theory-Model-Formula.html#Quantifier",
        "fct-type": "function",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "All",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:And",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "And",
        "fct-source": "src/Theory-Model-Formula.html#Connective",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "And",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Ato",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Ato (Atom (VTerm c (BVar v)))",
        "fct-source": "src/Theory-Model-Formula.html#Formula",
        "fct-type": "function",
        "title": "Ato"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Ato",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Ato",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Conn",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Conn !Connective (Formula s c v) (Formula s c v)",
        "fct-source": "src/Theory-Model-Formula.html#Formula",
        "fct-type": "function",
        "title": "Conn"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Conn",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Conn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Ex",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Ex",
        "fct-source": "src/Theory-Model-Formula.html#Quantifier",
        "fct-type": "function",
        "title": "Ex"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Ex",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Iff",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Iff",
        "fct-source": "src/Theory-Model-Formula.html#Connective",
        "fct-type": "function",
        "title": "Iff"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Iff",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Iff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Imp",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Imp",
        "fct-source": "src/Theory-Model-Formula.html#Connective",
        "fct-type": "function",
        "title": "Imp"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Imp",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Imp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Not",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Not (Formula s c v)",
        "fct-source": "src/Theory-Model-Formula.html#Formula",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Not",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Or",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Or",
        "fct-source": "src/Theory-Model-Formula.html#Connective",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Or",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Qua",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Qua !Quantifier s (Formula s c v)",
        "fct-source": "src/Theory-Model-Formula.html#Formula",
        "fct-type": "function",
        "title": "Qua"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "Qua",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Qua",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:TF",
      "description": {
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "TF !Bool",
        "fct-source": "src/Theory-Model-Formula.html#Formula",
        "fct-type": "function",
        "title": "TF"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "TF",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "TF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:exists",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a existential quantification with a sort hint for the bound variable.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "s -\u003e v -\u003e Formula s c v -\u003e Formula s c v",
        "fct-source": "src/Theory-Model-Formula.html#exists",
        "fct-type": "function",
        "title": "exists"
      },
      "index": {
        "description": "Create existential quantification with sort hint for the bound variable",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "exists",
        "normalized": "a-\u003eb-\u003eFormula a c b-\u003eFormula a c b",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "s-\u003ev-\u003eFormula s c v-\u003eFormula s c v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:foldFormula",
      "description": {
        "fct-descr": "\u003cp\u003eFold a formula.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(Atom (VTerm c (BVar v)) -\u003e b) -\u003e (Bool -\u003e b) -\u003e (b -\u003e b) -\u003e (Connective -\u003e b -\u003e b -\u003e b) -\u003e (Quantifier -\u003e s -\u003e b -\u003e b) -\u003e Formula s c v -\u003e b",
        "fct-source": "src/Theory-Model-Formula.html#foldFormula",
        "fct-type": "function",
        "title": "foldFormula"
      },
      "index": {
        "description": "Fold formula",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "foldFormula",
        "normalized": "(Atom(VTerm a(BVar b))-\u003ec)-\u003e(Bool-\u003ec)-\u003e(c-\u003ec)-\u003e(Connective-\u003ec-\u003ec-\u003ec)-\u003e(Quantifier-\u003ed-\u003ec-\u003ec)-\u003eFormula d a b-\u003ec",
        "package": "tamarin-prover-theory",
        "partial": "Formula",
        "signature": "(Atom(VTerm c(BVar v))-\u003eb)-\u003e(Bool-\u003eb)-\u003e(b-\u003eb)-\u003e(Connective-\u003eb-\u003eb-\u003eb)-\u003e(Quantifier-\u003es-\u003eb-\u003eb)-\u003eFormula s c v-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:forall",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a universal quantification with a sort hint for the bound variable.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "s -\u003e v -\u003e Formula s c v -\u003e Formula s c v",
        "fct-source": "src/Theory-Model-Formula.html#forall",
        "fct-type": "function",
        "title": "forall"
      },
      "index": {
        "description": "Create universal quantification with sort hint for the bound variable",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "forall",
        "normalized": "a-\u003eb-\u003eFormula a c b-\u003eFormula a c b",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "s-\u003ev-\u003eFormula s c v-\u003eFormula s c v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:lfalse",
      "description": {
        "fct-descr": "\u003cp\u003eLogically false.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Formula a s v",
        "fct-source": "src/Theory-Model-Formula.html#lfalse",
        "fct-type": "function",
        "title": "lfalse"
      },
      "index": {
        "description": "Logically false",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "lfalse",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:ltrue",
      "description": {
        "fct-descr": "\u003cp\u003eLogically true.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Formula a s v",
        "fct-source": "src/Theory-Model-Formula.html#ltrue",
        "fct-type": "function",
        "title": "ltrue"
      },
      "index": {
        "description": "Logically true",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "ltrue",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:mapAtoms",
      "description": {
        "fct-descr": "\u003cp\u003eChange the representation of atoms.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(Integer -\u003e Atom (VTerm c (BVar v)) -\u003e Atom (VTerm c1 (BVar v1))) -\u003e Formula s c v -\u003e Formula s c1 v1",
        "fct-source": "src/Theory-Model-Formula.html#mapAtoms",
        "fct-type": "function",
        "title": "mapAtoms"
      },
      "index": {
        "description": "Change the representation of atoms",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "mapAtoms",
        "normalized": "(Integer-\u003eAtom(VTerm a(BVar b))-\u003eAtom(VTerm a(BVar b)))-\u003eFormula c a b-\u003eFormula c a b",
        "package": "tamarin-prover-theory",
        "partial": "Atoms",
        "signature": "(Integer-\u003eAtom(VTerm c(BVar v))-\u003eAtom(VTerm c(BVar v)))-\u003eFormula s c v-\u003eFormula s c v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:openFormula",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eopenFormula f\u003c/code\u003e returns \u003ccode\u003eJust (v,Q,f')\u003c/code\u003e if \u003ccode\u003ef = Q v. f'\u003c/code\u003e modulo\n alpha renaming and \u003ccode\u003eNothing otherwise\u003c/code\u003e. \u003ccode\u003ev\u003c/code\u003e is always chosen to be fresh.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LFormula c -\u003e Maybe (Quantifier, m (LVar, LFormula c))",
        "fct-source": "src/Theory-Model-Formula.html#openFormula",
        "fct-type": "function",
        "title": "openFormula"
      },
      "index": {
        "description": "openFormula returns Just if modulo alpha renaming and Nothing otherwise is always chosen to be fresh",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "openFormula",
        "normalized": "LFormula a-\u003eMaybe(Quantifier,b(LVar,LFormula a))",
        "package": "tamarin-prover-theory",
        "partial": "Formula",
        "signature": "LFormula c-\u003eMaybe(Quantifier,m(LVar,LFormula c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:openFormulaPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eopenFormulaPrefix f\u003c/code\u003e returns \u003ccode\u003eJust (vs,Q,f')\u003c/code\u003e if \u003ccode\u003ef = Q v_1 .. v_k. f'\u003c/code\u003e\n modulo alpha renaming and \u003ccode\u003eNothing otherwise\u003c/code\u003e. \u003ccode\u003evs\u003c/code\u003e is always chosen to be\n fresh.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LFormula c -\u003e m ([LVar], Quantifier, LFormula c)",
        "fct-source": "src/Theory-Model-Formula.html#openFormulaPrefix",
        "fct-type": "function",
        "title": "openFormulaPrefix"
      },
      "index": {
        "description": "openFormulaPrefix returns Just vs if modulo alpha renaming and Nothing otherwise vs is always chosen to be fresh",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "openFormulaPrefix",
        "normalized": "LFormula a-\u003eb([LVar],Quantifier,LFormula a)",
        "package": "tamarin-prover-theory",
        "partial": "Formula Prefix",
        "signature": "LFormula c-\u003em([LVar],Quantifier,LFormula c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:prettyLNFormula",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a logical formula\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFormula -\u003e d",
        "fct-source": "src/Theory-Model-Formula.html#prettyLNFormula",
        "fct-type": "function",
        "title": "prettyLNFormula"
      },
      "index": {
        "description": "Pretty print logical formula",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "prettyLNFormula",
        "normalized": "LNFormula-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "LNFormula",
        "signature": "LNFormula-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:quantify",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce a bound variable for a free variable.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Formula",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "v -\u003e Formula s c v -\u003e Formula s c v",
        "fct-source": "src/Theory-Model-Formula.html#quantify",
        "fct-type": "function",
        "title": "quantify"
      },
      "index": {
        "description": "Introduce bound variable for free variable",
        "hierarchy": "Theory Model Formula",
        "module": "Theory.Model.Formula",
        "name": "quantify",
        "normalized": "a-\u003eFormula b c a-\u003eFormula b c a",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "v-\u003eFormula s c v-\u003eFormula s c v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRewriting rules representing protocol execution and intruder deduction. Once\n modulo the full Diffie-Hellman equational theory and once modulo AC.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Model-Rule.html",
        "fct-type": "module",
        "title": "Rule"
      },
      "index": {
        "description": "Rewriting rules representing protocol execution and intruder deduction Once modulo the full Diffie-Hellman equational theory and once modulo AC",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "Rule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ConcIdx",
      "description": {
        "fct-descr": "\u003cp\u003eAn index of a conclusion. The first conclusion has index '0'.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "newtype",
        "fct-source": "src/Theory-Model-Rule.html#ConcIdx",
        "fct-type": "newtype",
        "title": "ConcIdx"
      },
      "index": {
        "description": "An index of conclusion The first conclusion has index",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ConcIdx",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Conc Idx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:HasRuleName",
      "description": {
        "fct-descr": "\u003cp\u003eTypes that have an associated name.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "class",
        "fct-source": "src/Theory-Model-Rule.html#HasRuleName",
        "fct-type": "class",
        "title": "HasRuleName"
      },
      "index": {
        "description": "Types that have an associated name",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "HasRuleName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Has Rule Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:IntrRuleAC",
      "description": {
        "fct-descr": "\u003cp\u003eAn intruder rule modulo AC.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Rule.html#IntrRuleAC",
        "fct-type": "type",
        "title": "IntrRuleAC"
      },
      "index": {
        "description": "An intruder rule modulo AC",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "IntrRuleAC",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Intr Rule AC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:IntrRuleACInfo",
      "description": {
        "fct-descr": "\u003cp\u003eAn intruder rule modulo AC is described by its name.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
        "fct-type": "data",
        "title": "IntrRuleACInfo"
      },
      "index": {
        "description": "An intruder rule modulo AC is described by its name",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "IntrRuleACInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Intr Rule ACInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:PremIdx",
      "description": {
        "fct-descr": "\u003cp\u003eAn index of a premise. The first premise has index '0'.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "newtype",
        "fct-source": "src/Theory-Model-Rule.html#PremIdx",
        "fct-type": "newtype",
        "title": "PremIdx"
      },
      "index": {
        "description": "An index of premise The first premise has index",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "PremIdx",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Prem Idx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleAC",
      "description": {
        "fct-descr": "\u003cp\u003eA protocol rule modulo AC.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleAC",
        "fct-type": "type",
        "title": "ProtoRuleAC"
      },
      "index": {
        "description": "protocol rule modulo AC",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ProtoRuleAC",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule AC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleACInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation for protocol rules modulo AC. The variants list the possible\n instantiations of the free variables of the rule. The typing is interpreted\n modulo AC; i.e., its variants were also built.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
        "fct-type": "data",
        "title": "ProtoRuleACInfo"
      },
      "index": {
        "description": "Information for protocol rules modulo AC The variants list the possible instantiations of the free variables of the rule The typing is interpreted modulo AC i.e its variants were also built",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ProtoRuleACInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule ACInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleACInstInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation for instances of protocol rules modulo AC.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleACInstInfo",
        "fct-type": "data",
        "title": "ProtoRuleACInstInfo"
      },
      "index": {
        "description": "Information for instances of protocol rules modulo AC",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ProtoRuleACInstInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule ACInst Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleE",
      "description": {
        "fct-descr": "\u003cp\u003eA rule modulo E is always a protocol rule. Intruder rules are specified\n abstractly by their operations generating them and are only available once\n their variants are built.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleE",
        "fct-type": "type",
        "title": "ProtoRuleE"
      },
      "index": {
        "description": "rule modulo is always protocol rule Intruder rules are specified abstractly by their operations generating them and are only available once their variants are built",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ProtoRuleE",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleName",
      "description": {
        "fct-descr": "\u003cp\u003eA name of a protocol rule is either one of the special reserved rules or\n some standard rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleName",
        "fct-type": "data",
        "title": "ProtoRuleName"
      },
      "index": {
        "description": "name of protocol rule is either one of the special reserved rules or some standard rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ProtoRuleName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:Rule",
      "description": {
        "fct-descr": "\u003cp\u003eRewriting rules with arbitrary additional information and facts with names\n and logical variables.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Rule.html#Rule",
        "fct-type": "data",
        "title": "Rule"
      },
      "index": {
        "description": "Rewriting rules with arbitrary additional information and facts with names and logical variables",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "Rule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:RuleAC",
      "description": {
        "fct-descr": "\u003cp\u003eA rule modulo AC is either a protocol rule or an intruder rule\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Rule.html#RuleAC",
        "fct-type": "type",
        "title": "RuleAC"
      },
      "index": {
        "description": "rule modulo AC is either protocol rule or an intruder rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "RuleAC",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule AC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:RuleACConstrs",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Rule.html#RuleACConstrs",
        "fct-type": "type",
        "title": "RuleACConstrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "RuleACConstrs",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule ACConstrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:RuleACInst",
      "description": {
        "fct-descr": "\u003cp\u003eA rule instance module AC is either a protocol rule or an intruder rule.\n The info identifies the corresponding rule modulo AC that the instance was\n derived from.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Rule.html#RuleACInst",
        "fct-type": "type",
        "title": "RuleACInst"
      },
      "index": {
        "description": "rule instance module AC is either protocol rule or an intruder rule The info identifies the corresponding rule modulo AC that the instance was derived from",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "RuleACInst",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule ACInst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:RuleInfo",
      "description": {
        "fct-descr": "\u003cp\u003eRule information for protocol and intruder rules.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Rule.html#RuleInfo",
        "fct-type": "data",
        "title": "RuleInfo"
      },
      "index": {
        "description": "Rule information for protocol and intruder rules",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "RuleInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:CoerceRule",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CoerceRule",
        "fct-source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
        "fct-type": "function",
        "title": "CoerceRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "CoerceRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Coerce Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ConcIdx",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ConcIdx",
        "fct-source": "src/Theory-Model-Rule.html#ConcIdx",
        "fct-type": "function",
        "title": "ConcIdx"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ConcIdx",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Conc Idx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ConstrRule",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ConstrRule ByteString",
        "fct-source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
        "fct-type": "function",
        "title": "ConstrRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ConstrRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Constr Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:DestrRule",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "DestrRule ByteString",
        "fct-source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
        "fct-type": "function",
        "title": "DestrRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "DestrRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Destr Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:FreshConstrRule",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FreshConstrRule",
        "fct-source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
        "fct-type": "function",
        "title": "FreshConstrRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "FreshConstrRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Fresh Constr Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:FreshRule",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FreshRule",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleName",
        "fct-type": "function",
        "title": "FreshRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "FreshRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Fresh Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:IRecvRule",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "IRecvRule",
        "fct-source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
        "fct-type": "function",
        "title": "IRecvRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "IRecvRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "IRecv Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ISendRule",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ISendRule",
        "fct-source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
        "fct-type": "function",
        "title": "ISendRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ISendRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "ISend Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:IntrInfo",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "IntrInfo i",
        "fct-source": "src/Theory-Model-Rule.html#RuleInfo",
        "fct-type": "function",
        "title": "IntrInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "IntrInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Intr Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:PremIdx",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "PremIdx",
        "fct-source": "src/Theory-Model-Rule.html#PremIdx",
        "fct-type": "function",
        "title": "PremIdx"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "PremIdx",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Prem Idx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ProtoInfo",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoInfo p",
        "fct-source": "src/Theory-Model-Rule.html#RuleInfo",
        "fct-type": "function",
        "title": "ProtoInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ProtoInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proto Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ProtoRuleACInfo",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleACInfo",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
        "fct-type": "function",
        "title": "ProtoRuleACInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ProtoRuleACInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule ACInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ProtoRuleACInstInfo",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleACInstInfo",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleACInstInfo",
        "fct-type": "function",
        "title": "ProtoRuleACInstInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ProtoRuleACInstInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule ACInst Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:PubConstrRule",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "PubConstrRule",
        "fct-source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
        "fct-type": "function",
        "title": "PubConstrRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "PubConstrRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Pub Constr Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:Rule",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Rule",
        "fct-source": "src/Theory-Model-Rule.html#Rule",
        "fct-type": "function",
        "title": "Rule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "Rule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:StandRule",
      "description": {
        "fct-descr": "\u003cp\u003eSome standard protocol rule\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "StandRule String",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleName",
        "fct-type": "function",
        "title": "StandRule"
      },
      "index": {
        "description": "Some standard protocol rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "StandRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Stand Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_pracLoopBreakers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[PremIdx]",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
        "fct-type": "function",
        "title": "_pracLoopBreakers"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "_pracLoopBreakers",
        "normalized": "[PremIdx]",
        "package": "tamarin-prover-theory",
        "partial": "Loop Breakers",
        "signature": "[PremIdx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_pracName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleName",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
        "fct-type": "function",
        "title": "_pracName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "_pracName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_pracVariants",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Disj LNSubstVFresh",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
        "fct-type": "function",
        "title": "_pracVariants"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "_pracVariants",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Variants",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_praciLoopBreakers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[PremIdx]",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleACInstInfo",
        "fct-type": "function",
        "title": "_praciLoopBreakers"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "_praciLoopBreakers",
        "normalized": "[PremIdx]",
        "package": "tamarin-prover-theory",
        "partial": "Loop Breakers",
        "signature": "[PremIdx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_praciName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleName",
        "fct-source": "src/Theory-Model-Rule.html#ProtoRuleACInstInfo",
        "fct-type": "function",
        "title": "_praciName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "_praciName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_rActs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[LNFact]",
        "fct-source": "src/Theory-Model-Rule.html#Rule",
        "fct-type": "function",
        "title": "_rActs"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "_rActs",
        "normalized": "[LNFact]",
        "package": "tamarin-prover-theory",
        "partial": "Acts",
        "signature": "[LNFact]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_rConcs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[LNFact]",
        "fct-source": "src/Theory-Model-Rule.html#Rule",
        "fct-type": "function",
        "title": "_rConcs"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "_rConcs",
        "normalized": "[LNFact]",
        "package": "tamarin-prover-theory",
        "partial": "Concs",
        "signature": "[LNFact]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_rInfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "i",
        "fct-source": "src/Theory-Model-Rule.html#Rule",
        "fct-type": "function",
        "title": "_rInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "_rInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_rPrems",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[LNFact]",
        "fct-source": "src/Theory-Model-Rule.html#Rule",
        "fct-type": "function",
        "title": "_rPrems"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "_rPrems",
        "normalized": "[LNFact]",
        "package": "tamarin-prover-theory",
        "partial": "Prems",
        "signature": "[LNFact]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:enumConcs",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate all conclusions of a rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Rule i -\u003e [(ConcIdx, LNFact)]",
        "fct-source": "src/Theory-Model-Rule.html#enumConcs",
        "fct-type": "function",
        "title": "enumConcs"
      },
      "index": {
        "description": "Enumerate all conclusions of rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "enumConcs",
        "normalized": "Rule a-\u003e[(ConcIdx,LNFact)]",
        "package": "tamarin-prover-theory",
        "partial": "Concs",
        "signature": "Rule i-\u003e[(ConcIdx,LNFact)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:enumPrems",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate all premises of a rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Rule i -\u003e [(PremIdx, LNFact)]",
        "fct-source": "src/Theory-Model-Rule.html#enumPrems",
        "fct-type": "function",
        "title": "enumPrems"
      },
      "index": {
        "description": "Enumerate all premises of rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "enumPrems",
        "normalized": "Rule a-\u003e[(PremIdx,LNFact)]",
        "package": "tamarin-prover-theory",
        "partial": "Prems",
        "signature": "Rule i-\u003e[(PremIdx,LNFact)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:getConcIdx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Int",
        "fct-source": "src/Theory-Model-Rule.html#ConcIdx",
        "fct-type": "function",
        "title": "getConcIdx"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "getConcIdx",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Conc Idx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:getPremIdx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Int",
        "fct-source": "src/Theory-Model-Rule.html#PremIdx",
        "fct-type": "function",
        "title": "getPremIdx"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "getPremIdx",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Prem Idx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isCoerceRule",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the rule is the special coerce rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "r -\u003e Bool",
        "fct-source": "src/Theory-Model-Rule.html#isCoerceRule",
        "fct-type": "function",
        "title": "isCoerceRule"
      },
      "index": {
        "description": "True iff the rule is the special coerce rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "isCoerceRule",
        "normalized": "a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Coerce Rule",
        "signature": "r-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isConstrRule",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the rule is a construction rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "r -\u003e Bool",
        "fct-source": "src/Theory-Model-Rule.html#isConstrRule",
        "fct-type": "function",
        "title": "isConstrRule"
      },
      "index": {
        "description": "True iff the rule is construction rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "isConstrRule",
        "normalized": "a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Constr Rule",
        "signature": "r-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isDestrRule",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the rule is a destruction rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "r -\u003e Bool",
        "fct-source": "src/Theory-Model-Rule.html#isDestrRule",
        "fct-type": "function",
        "title": "isDestrRule"
      },
      "index": {
        "description": "True iff the rule is destruction rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "isDestrRule",
        "normalized": "a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Destr Rule",
        "signature": "r-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isFreshRule",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the rule is the special fresh rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "r -\u003e Bool",
        "fct-source": "src/Theory-Model-Rule.html#isFreshRule",
        "fct-type": "function",
        "title": "isFreshRule"
      },
      "index": {
        "description": "True iff the rule is the special fresh rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "isFreshRule",
        "normalized": "a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Fresh Rule",
        "signature": "r-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isIRecvRule",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the rule is the special learn rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "r -\u003e Bool",
        "fct-source": "src/Theory-Model-Rule.html#isIRecvRule",
        "fct-type": "function",
        "title": "isIRecvRule"
      },
      "index": {
        "description": "True iff the rule is the special learn rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "isIRecvRule",
        "normalized": "a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "IRecv Rule",
        "signature": "r-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isISendRule",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the rule is the special knows rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "r -\u003e Bool",
        "fct-source": "src/Theory-Model-Rule.html#isISendRule",
        "fct-type": "function",
        "title": "isISendRule"
      },
      "index": {
        "description": "True iff the rule is the special knows rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "isISendRule",
        "normalized": "a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "ISend Rule",
        "signature": "r-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isIntruderRule",
      "description": {
        "fct-descr": "\u003cp\u003eTrue iff the rule is an intruder rule\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "r -\u003e Bool",
        "fct-source": "src/Theory-Model-Rule.html#isIntruderRule",
        "fct-type": "function",
        "title": "isIntruderRule"
      },
      "index": {
        "description": "True iff the rule is an intruder rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "isIntruderRule",
        "normalized": "a-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Intruder Rule",
        "signature": "r-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isTrivialProtoVariantAC",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the protocol rule has only the trivial variant.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleAC -\u003e ProtoRuleE -\u003e Bool",
        "fct-source": "src/Theory-Model-Rule.html#isTrivialProtoVariantAC",
        "fct-type": "function",
        "title": "isTrivialProtoVariantAC"
      },
      "index": {
        "description": "True if the protocol rule has only the trivial variant",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "isTrivialProtoVariantAC",
        "normalized": "ProtoRuleAC-\u003eProtoRuleE-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Trivial Proto Variant AC",
        "signature": "ProtoRuleAC-\u003eProtoRuleE-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:lookupConc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elookupConc i ru\u003c/code\u003e returns the \u003ccode\u003ei\u003c/code\u003e-th conclusion of rule \u003ccode\u003eru\u003c/code\u003e, if possible.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ConcIdx -\u003e Rule i -\u003e Maybe LNFact",
        "fct-source": "src/Theory-Model-Rule.html#lookupConc",
        "fct-type": "function",
        "title": "lookupConc"
      },
      "index": {
        "description": "lookupConc ru returns the th conclusion of rule ru if possible",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "lookupConc",
        "normalized": "ConcIdx-\u003eRule a-\u003eMaybe LNFact",
        "package": "tamarin-prover-theory",
        "partial": "Conc",
        "signature": "ConcIdx-\u003eRule i-\u003eMaybe LNFact"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:lookupPrem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elookupPrem i ru\u003c/code\u003e returns the \u003ccode\u003ei\u003c/code\u003e-th premise of rule \u003ccode\u003eru\u003c/code\u003e, if possible.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "PremIdx -\u003e Rule i -\u003e Maybe LNFact",
        "fct-source": "src/Theory-Model-Rule.html#lookupPrem",
        "fct-type": "function",
        "title": "lookupPrem"
      },
      "index": {
        "description": "lookupPrem ru returns the th premise of rule ru if possible",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "lookupPrem",
        "normalized": "PremIdx-\u003eRule a-\u003eMaybe LNFact",
        "package": "tamarin-prover-theory",
        "partial": "Prem",
        "signature": "PremIdx-\u003eRule i-\u003eMaybe LNFact"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:nfRule",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the messages in premises and conclusions are in normal form\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Rule i -\u003e WithMaude Bool",
        "fct-source": "src/Theory-Model-Rule.html#nfRule",
        "fct-type": "function",
        "title": "nfRule"
      },
      "index": {
        "description": "True if the messages in premises and conclusions are in normal form",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "nfRule",
        "normalized": "Rule a-\u003eWithMaude Bool",
        "package": "tamarin-prover-theory",
        "partial": "Rule",
        "signature": "Rule i-\u003eWithMaude Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:pracLoopBreakers",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProtoRuleACInfo [PremIdx]",
        "fct-source": "src/Theory-Model-Rule.html#pracLoopBreakers",
        "fct-type": "function",
        "title": "pracLoopBreakers"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "pracLoopBreakers",
        "normalized": "Lens a ProtoRuleACInfo[PremIdx]",
        "package": "tamarin-prover-theory",
        "partial": "Loop Breakers",
        "signature": "Lens arr ProtoRuleACInfo[PremIdx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:pracName",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProtoRuleACInfo ProtoRuleName",
        "fct-source": "src/Theory-Model-Rule.html#pracName",
        "fct-type": "function",
        "title": "pracName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "pracName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:pracVariants",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProtoRuleACInfo (Disj LNSubstVFresh)",
        "fct-source": "src/Theory-Model-Rule.html#pracVariants",
        "fct-type": "function",
        "title": "pracVariants"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "pracVariants",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Variants",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:praciLoopBreakers",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProtoRuleACInstInfo [PremIdx]",
        "fct-source": "src/Theory-Model-Rule.html#praciLoopBreakers",
        "fct-type": "function",
        "title": "praciLoopBreakers"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "praciLoopBreakers",
        "normalized": "Lens a ProtoRuleACInstInfo[PremIdx]",
        "package": "tamarin-prover-theory",
        "partial": "Loop Breakers",
        "signature": "Lens arr ProtoRuleACInstInfo[PremIdx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:praciName",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ProtoRuleACInstInfo ProtoRuleName",
        "fct-source": "src/Theory-Model-Rule.html#praciName",
        "fct-type": "function",
        "title": "praciName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "praciName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyIntrRuleAC",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "IntrRuleAC -\u003e d",
        "fct-source": "src/Theory-Model-Rule.html#prettyIntrRuleAC",
        "fct-type": "function",
        "title": "prettyIntrRuleAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "prettyIntrRuleAC",
        "normalized": "IntrRuleAC-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Intr Rule AC",
        "signature": "IntrRuleAC-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyIntrRuleACInfo",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "IntrRuleACInfo -\u003e d",
        "fct-source": "src/Theory-Model-Rule.html#prettyIntrRuleACInfo",
        "fct-type": "function",
        "title": "prettyIntrRuleACInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "prettyIntrRuleACInfo",
        "normalized": "IntrRuleACInfo-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Intr Rule ACInfo",
        "signature": "IntrRuleACInfo-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyLoopBreakers",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleACInfo -\u003e d",
        "fct-source": "src/Theory-Model-Rule.html#prettyLoopBreakers",
        "fct-type": "function",
        "title": "prettyLoopBreakers"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "prettyLoopBreakers",
        "normalized": "ProtoRuleACInfo-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Loop Breakers",
        "signature": "ProtoRuleACInfo-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyProtoRuleAC",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleAC -\u003e d",
        "fct-source": "src/Theory-Model-Rule.html#prettyProtoRuleAC",
        "fct-type": "function",
        "title": "prettyProtoRuleAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "prettyProtoRuleAC",
        "normalized": "ProtoRuleAC-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule AC",
        "signature": "ProtoRuleAC-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyProtoRuleE",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleE -\u003e d",
        "fct-source": "src/Theory-Model-Rule.html#prettyProtoRuleE",
        "fct-type": "function",
        "title": "prettyProtoRuleE"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "prettyProtoRuleE",
        "normalized": "ProtoRuleE-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule",
        "signature": "ProtoRuleE-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyProtoRuleName",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleName -\u003e d",
        "fct-source": "src/Theory-Model-Rule.html#prettyProtoRuleName",
        "fct-type": "function",
        "title": "prettyProtoRuleName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "prettyProtoRuleName",
        "normalized": "ProtoRuleName-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule Name",
        "signature": "ProtoRuleName-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyRuleAC",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "RuleAC -\u003e d",
        "fct-source": "src/Theory-Model-Rule.html#prettyRuleAC",
        "fct-type": "function",
        "title": "prettyRuleAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "prettyRuleAC",
        "normalized": "RuleAC-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Rule AC",
        "signature": "RuleAC-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyRuleACInst",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "RuleACInst -\u003e d",
        "fct-source": "src/Theory-Model-Rule.html#prettyRuleACInst",
        "fct-type": "function",
        "title": "prettyRuleACInst"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "prettyRuleACInst",
        "normalized": "RuleACInst-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Rule ACInst",
        "signature": "RuleACInst-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyRuleName",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Rule i -\u003e d",
        "fct-source": "src/Theory-Model-Rule.html#prettyRuleName",
        "fct-type": "function",
        "title": "prettyRuleName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "prettyRuleName",
        "normalized": "Rule a-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "Rule Name",
        "signature": "Rule i-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rActs",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Rule i) [LNFact]",
        "fct-source": "src/Theory-Model-Rule.html#rActs",
        "fct-type": "function",
        "title": "rActs"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "rActs",
        "normalized": "Lens a(Rule b)[LNFact]",
        "package": "tamarin-prover-theory",
        "partial": "Acts",
        "signature": "Lens arr(Rule i)[LNFact]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rConc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erConc i\u003c/code\u003e is a lens for the \u003ccode\u003ei\u003c/code\u003e-th conclusion of a rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ConcIdx -\u003e Rule i :-\u003e LNFact",
        "fct-source": "src/Theory-Model-Rule.html#rConc",
        "fct-type": "function",
        "title": "rConc"
      },
      "index": {
        "description": "rConc is lens for the th conclusion of rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "rConc",
        "normalized": "ConcIdx-\u003eRule a-\u003eLNFact",
        "package": "tamarin-prover-theory",
        "partial": "Conc",
        "signature": "ConcIdx-\u003eRule i-\u003eLNFact"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rConcs",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Rule i) [LNFact]",
        "fct-source": "src/Theory-Model-Rule.html#rConcs",
        "fct-type": "function",
        "title": "rConcs"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "rConcs",
        "normalized": "Lens a(Rule b)[LNFact]",
        "package": "tamarin-prover-theory",
        "partial": "Concs",
        "signature": "Lens arr(Rule i)[LNFact]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rInfo",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Rule i) i",
        "fct-source": "src/Theory-Model-Rule.html#rInfo",
        "fct-type": "function",
        "title": "rInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "rInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rPrem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erPrem i\u003c/code\u003e is a lens for the \u003ccode\u003ei\u003c/code\u003e-th premise of a rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "PremIdx -\u003e Rule i :-\u003e LNFact",
        "fct-source": "src/Theory-Model-Rule.html#rPrem",
        "fct-type": "function",
        "title": "rPrem"
      },
      "index": {
        "description": "rPrem is lens for the th premise of rule",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "rPrem",
        "normalized": "PremIdx-\u003eRule a-\u003eLNFact",
        "package": "tamarin-prover-theory",
        "partial": "Prem",
        "signature": "PremIdx-\u003eRule i-\u003eLNFact"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rPrems",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Rule i) [LNFact]",
        "fct-source": "src/Theory-Model-Rule.html#rPrems",
        "fct-type": "function",
        "title": "rPrems"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "rPrems",
        "normalized": "Lens a(Rule b)[LNFact]",
        "package": "tamarin-prover-theory",
        "partial": "Prems",
        "signature": "Lens arr(Rule i)[LNFact]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:reservedRuleNames",
      "description": {
        "fct-descr": "\u003cp\u003eList of all reserved rule names.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[String]",
        "fct-source": "src/Theory-Model-Rule.html#reservedRuleNames",
        "fct-type": "function",
        "title": "reservedRuleNames"
      },
      "index": {
        "description": "List of all reserved rule names",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "reservedRuleNames",
        "normalized": "[String]",
        "package": "tamarin-prover-theory",
        "partial": "Rule Names",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleACIntrToRuleAC",
      "description": {
        "fct-descr": "\u003cp\u003eConverts between these two types of rules.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "IntrRuleAC -\u003e RuleAC",
        "fct-source": "src/Theory-Model-Rule.html#ruleACIntrToRuleAC",
        "fct-type": "function",
        "title": "ruleACIntrToRuleAC"
      },
      "index": {
        "description": "Converts between these two types of rules",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ruleACIntrToRuleAC",
        "normalized": "IntrRuleAC-\u003eRuleAC",
        "package": "tamarin-prover-theory",
        "partial": "ACIntr To Rule AC",
        "signature": "IntrRuleAC-\u003eRuleAC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleACIntrToRuleACInst",
      "description": {
        "fct-descr": "\u003cp\u003eConverts between these two types of rules.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "IntrRuleAC -\u003e RuleACInst",
        "fct-source": "src/Theory-Model-Rule.html#ruleACIntrToRuleACInst",
        "fct-type": "function",
        "title": "ruleACIntrToRuleACInst"
      },
      "index": {
        "description": "Converts between these two types of rules",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ruleACIntrToRuleACInst",
        "normalized": "IntrRuleAC-\u003eRuleACInst",
        "package": "tamarin-prover-theory",
        "partial": "ACIntr To Rule ACInst",
        "signature": "IntrRuleAC-\u003eRuleACInst"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleACToIntrRuleAC",
      "description": {
        "fct-descr": "\u003cp\u003eConverts between these two types of rules, if possible.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "RuleAC -\u003e Maybe IntrRuleAC",
        "fct-source": "src/Theory-Model-Rule.html#ruleACToIntrRuleAC",
        "fct-type": "function",
        "title": "ruleACToIntrRuleAC"
      },
      "index": {
        "description": "Converts between these two types of rules if possible",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ruleACToIntrRuleAC",
        "normalized": "RuleAC-\u003eMaybe IntrRuleAC",
        "package": "tamarin-prover-theory",
        "partial": "ACTo Intr Rule AC",
        "signature": "RuleAC-\u003eMaybe IntrRuleAC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleInfo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eruleInfo proto intr\u003c/code\u003e maps the protocol information with \u003ccode\u003eproto\u003c/code\u003e and the\n intruder information with \u003ccode\u003eintr\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(p -\u003e c) -\u003e (i -\u003e c) -\u003e RuleInfo p i -\u003e c",
        "fct-source": "src/Theory-Model-Rule.html#ruleInfo",
        "fct-type": "function",
        "title": "ruleInfo"
      },
      "index": {
        "description": "ruleInfo proto intr maps the protocol information with proto and the intruder information with intr",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ruleInfo",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eRuleInfo a c-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "Info",
        "signature": "(p-\u003ec)-\u003e(i-\u003ec)-\u003eRuleInfo p i-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleName",
      "description": {
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "t -\u003e RuleInfo ProtoRuleName IntrRuleACInfo",
        "fct-source": "src/Theory-Model-Rule.html#ruleName",
        "fct-type": "method",
        "title": "ruleName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "ruleName",
        "normalized": "a-\u003eRuleInfo ProtoRuleName IntrRuleACInfo",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": "t-\u003eRuleInfo ProtoRuleName IntrRuleACInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:showRuleCaseName",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the rule name such that it can be used as a case name\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Rule i -\u003e String",
        "fct-source": "src/Theory-Model-Rule.html#showRuleCaseName",
        "fct-type": "function",
        "title": "showRuleCaseName"
      },
      "index": {
        "description": "Pretty print the rule name such that it can be used as case name",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "showRuleCaseName",
        "normalized": "Rule a-\u003eString",
        "package": "tamarin-prover-theory",
        "partial": "Rule Case Name",
        "signature": "Rule i-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:someRuleACInst",
      "description": {
        "fct-descr": "\u003cp\u003eCompute \u003cem\u003esome\u003c/em\u003e rule instance of a rule modulo AC. If the rule is a\n protocol rule, then the given typing and variants also need to be handled.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "RuleAC -\u003e m (RuleACInst, Maybe RuleACConstrs)",
        "fct-source": "src/Theory-Model-Rule.html#someRuleACInst",
        "fct-type": "function",
        "title": "someRuleACInst"
      },
      "index": {
        "description": "Compute some rule instance of rule modulo AC If the rule is protocol rule then the given typing and variants also need to be handled",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "someRuleACInst",
        "normalized": "RuleAC-\u003ea(RuleACInst,Maybe RuleACConstrs)",
        "package": "tamarin-prover-theory",
        "partial": "Rule ACInst",
        "signature": "RuleAC-\u003em(RuleACInst,Maybe RuleACConstrs)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:unifiableRuleACInsts",
      "description": {
        "fct-descr": "\u003cp\u003eAre these two rule instances unifiable.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "RuleACInst -\u003e RuleACInst -\u003e WithMaude Bool",
        "fct-source": "src/Theory-Model-Rule.html#unifiableRuleACInsts",
        "fct-type": "function",
        "title": "unifiableRuleACInsts"
      },
      "index": {
        "description": "Are these two rule instances unifiable",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "unifiableRuleACInsts",
        "normalized": "RuleACInst-\u003eRuleACInst-\u003eWithMaude Bool",
        "package": "tamarin-prover-theory",
        "partial": "Rule ACInsts",
        "signature": "RuleACInst-\u003eRuleACInst-\u003eWithMaude Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:unifyRuleACInstEqs",
      "description": {
        "fct-descr": "\u003cp\u003eUnify a list of \u003ccode\u003eRuleACInst\u003c/code\u003e equalities.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Rule",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[Equal RuleACInst] -\u003e WithMaude [LNSubstVFresh]",
        "fct-source": "src/Theory-Model-Rule.html#unifyRuleACInstEqs",
        "fct-type": "function",
        "title": "unifyRuleACInstEqs"
      },
      "index": {
        "description": "Unify list of RuleACInst equalities",
        "hierarchy": "Theory Model Rule",
        "module": "Theory.Model.Rule",
        "name": "unifyRuleACInstEqs",
        "normalized": "[Equal RuleACInst]-\u003eWithMaude[LNSubstVFresh]",
        "package": "tamarin-prover-theory",
        "partial": "Rule ACInst Eqs",
        "signature": "[Equal RuleACInst]-\u003eWithMaude[LNSubstVFresh]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSignatures for the terms and multiset rewriting rules used to model and\n reason about a security protocol.\n modulo the full Diffie-Hellman equational theory and once modulo AC.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Model-Signature.html",
        "fct-type": "module",
        "title": "Signature"
      },
      "index": {
        "description": "Signatures for the terms and multiset rewriting rules used to model and reason about security protocol modulo the full Diffie-Hellman equational theory and once modulo AC",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "Signature",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#t:Signature",
      "description": {
        "fct-descr": "\u003cp\u003eA theory signature.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Model-Signature.html#Signature",
        "fct-type": "data",
        "title": "Signature"
      },
      "index": {
        "description": "theory signature",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "Signature",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#t:SignaturePure",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e without an associated Maude process.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Signature.html#SignaturePure",
        "fct-type": "type",
        "title": "SignaturePure"
      },
      "index": {
        "description": "Signature without an associated Maude process",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "SignaturePure",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#t:SignatureWithMaude",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e with an associated, running Maude process.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Model-Signature.html#SignatureWithMaude",
        "fct-type": "type",
        "title": "SignatureWithMaude"
      },
      "index": {
        "description": "Signature with an associated running Maude process",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "SignatureWithMaude",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature With Maude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:Signature",
      "description": {
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Signature",
        "fct-source": "src/Theory-Model-Signature.html#Signature",
        "fct-type": "function",
        "title": "Signature"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "Signature",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:_sigMaudeInfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "a",
        "fct-source": "src/Theory-Model-Signature.html#Signature",
        "fct-type": "function",
        "title": "_sigMaudeInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "_sigMaudeInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Maude Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:emptySignaturePure",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty pure signature.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SignaturePure",
        "fct-source": "src/Theory-Model-Signature.html#emptySignaturePure",
        "fct-type": "function",
        "title": "emptySignaturePure"
      },
      "index": {
        "description": "The empty pure signature",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "emptySignaturePure",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:prettySignaturePure",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a signature with maude.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SignaturePure -\u003e d",
        "fct-source": "src/Theory-Model-Signature.html#prettySignaturePure",
        "fct-type": "function",
        "title": "prettySignaturePure"
      },
      "index": {
        "description": "Pretty-print signature with maude",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "prettySignaturePure",
        "normalized": "SignaturePure-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Signature Pure",
        "signature": "SignaturePure-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:prettySignatureWithMaude",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a pure signature.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SignatureWithMaude -\u003e d",
        "fct-source": "src/Theory-Model-Signature.html#prettySignatureWithMaude",
        "fct-type": "function",
        "title": "prettySignatureWithMaude"
      },
      "index": {
        "description": "Pretty-print pure signature",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "prettySignatureWithMaude",
        "normalized": "SignatureWithMaude-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Signature With Maude",
        "signature": "SignatureWithMaude-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:sigmMaudeHandle",
      "description": {
        "fct-descr": "\u003cp\u003eAccess the maude handle in a signature.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SignatureWithMaude :-\u003e MaudeHandle",
        "fct-source": "src/Theory-Model-Signature.html#sigmMaudeHandle",
        "fct-type": "function",
        "title": "sigmMaudeHandle"
      },
      "index": {
        "description": "Access the maude handle in signature",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "sigmMaudeHandle",
        "normalized": "SignatureWithMaude-\u003eMaudeHandle",
        "package": "tamarin-prover-theory",
        "partial": "Maude Handle",
        "signature": "SignatureWithMaude-\u003eMaudeHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:sigpMaudeSig",
      "description": {
        "fct-descr": "\u003cp\u003eAccess the maude signature.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SignaturePure :-\u003e MaudeSig",
        "fct-source": "src/Theory-Model-Signature.html#sigpMaudeSig",
        "fct-type": "function",
        "title": "sigpMaudeSig"
      },
      "index": {
        "description": "Access the maude signature",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "sigpMaudeSig",
        "normalized": "SignaturePure-\u003eMaudeSig",
        "package": "tamarin-prover-theory",
        "partial": "Maude Sig",
        "signature": "SignaturePure-\u003eMaudeSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:toSignaturePure",
      "description": {
        "fct-descr": "\u003cp\u003eThe pure signature of a \u003ccode\u003e\u003ca\u003eSignatureWithMaude\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SignatureWithMaude -\u003e SignaturePure",
        "fct-source": "src/Theory-Model-Signature.html#toSignaturePure",
        "fct-type": "function",
        "title": "toSignaturePure"
      },
      "index": {
        "description": "The pure signature of SignatureWithMaude",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "toSignaturePure",
        "normalized": "SignatureWithMaude-\u003eSignaturePure",
        "package": "tamarin-prover-theory",
        "partial": "Signature Pure",
        "signature": "SignatureWithMaude-\u003eSignaturePure"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:toSignatureWithMaude",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure that maude is running and configured with the current signature.\n\u003c/p\u003e",
        "fct-module": "Theory.Model.Signature",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FilePath-\u003e SignaturePure-\u003e IO SignatureWithMaude",
        "fct-type": "function",
        "title": "toSignatureWithMaude"
      },
      "index": {
        "description": "Ensure that maude is running and configured with the current signature",
        "hierarchy": "Theory Model Signature",
        "module": "Theory.Model.Signature",
        "name": "toSignatureWithMaude",
        "normalized": "FilePath-\u003eSignaturePure-\u003eIO SignatureWithMaude",
        "package": "tamarin-prover-theory",
        "partial": "Signature With Maude",
        "signature": "FilePath-\u003eSignaturePure-\u003eIO SignatureWithMaude"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSecurity protocol model.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Model",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Model.html",
        "fct-type": "module",
        "title": "Model"
      },
      "index": {
        "description": "Security protocol model",
        "hierarchy": "Theory Model",
        "module": "Theory.Model",
        "name": "Model",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes to represent proofs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Proof.html",
        "fct-type": "module",
        "title": "Proof"
      },
      "index": {
        "description": "Types to represent proofs",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "Proof",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:AutoProver",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Proof.html#AutoProver",
        "fct-type": "data",
        "title": "AutoProver"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "AutoProver",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Auto Prover",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:IncrementalProof",
      "description": {
        "fct-descr": "\u003cp\u003eIncremental proofs are used to represent intermediate results of proof\n checking/construction.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Proof.html#IncrementalProof",
        "fct-type": "type",
        "title": "IncrementalProof"
      },
      "index": {
        "description": "Incremental proofs are used to represent intermediate results of proof checking construction",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "IncrementalProof",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Incremental Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:LTree",
      "description": {
        "fct-descr": "\u003cp\u003eTrees with uniquely labelled edges.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Proof.html#LTree",
        "fct-type": "data",
        "title": "LTree"
      },
      "index": {
        "description": "Trees with uniquely labelled edges",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "LTree",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:Proof",
      "description": {
        "fct-descr": "\u003cp\u003eA proof is a tree of proof steps whose edges are labelled with case names.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Proof.html#Proof",
        "fct-type": "type",
        "title": "Proof"
      },
      "index": {
        "description": "proof is tree of proof steps whose edges are labelled with case names",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "Proof",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:ProofPath",
      "description": {
        "fct-descr": "\u003cp\u003eA path to a subproof.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Proof.html#ProofPath",
        "fct-type": "type",
        "title": "ProofPath"
      },
      "index": {
        "description": "path to subproof",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "ProofPath",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:ProofStatus",
      "description": {
        "fct-descr": "\u003cp\u003eThe status of a \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Proof.html#ProofStatus",
        "fct-type": "data",
        "title": "ProofStatus"
      },
      "index": {
        "description": "The status of Proof",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "ProofStatus",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:ProofStep",
      "description": {
        "fct-descr": "\u003cp\u003eA proof steps is a proof method together with additional context-dependent\n information.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Proof.html#ProofStep",
        "fct-type": "data",
        "title": "ProofStep"
      },
      "index": {
        "description": "proof steps is proof method together with additional context-dependent information",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "ProofStep",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:Prover",
      "description": {
        "fct-descr": "\u003cp\u003eProvers whose sequencing is handled via the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cpre\u003e p1 `mappend` p2\n\u003c/pre\u003e\u003cp\u003eIs a prover that first runs p1 and then p2 on the resulting proof.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Proof.html#Prover",
        "fct-type": "data",
        "title": "Prover"
      },
      "index": {
        "description": "Provers whose sequencing is handled via the Monoid instance p1 mappend p2 Is prover that first runs p1 and then p2 on the resulting proof",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "Prover",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Prover",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:SolutionExtractor",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Proof.html#SolutionExtractor",
        "fct-type": "data",
        "title": "SolutionExtractor"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "SolutionExtractor",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Solution Extractor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:AutoProver",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "AutoProver",
        "fct-source": "src/Theory-Proof.html#AutoProver",
        "fct-type": "function",
        "title": "AutoProver"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "AutoProver",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Auto Prover",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:CompleteProof",
      "description": {
        "fct-descr": "\u003cp\u003eThe proof is complete: no annotated sorry,\n  no annotated solved step\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CompleteProof",
        "fct-source": "src/Theory-Proof.html#ProofStatus",
        "fct-type": "function",
        "title": "CompleteProof"
      },
      "index": {
        "description": "The proof is complete no annotated sorry no annotated solved step",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "CompleteProof",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Complete Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:CutBFS",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CutBFS",
        "fct-source": "src/Theory-Proof.html#SolutionExtractor",
        "fct-type": "function",
        "title": "CutBFS"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "CutBFS",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Cut BFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:CutDFS",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CutDFS",
        "fct-source": "src/Theory-Proof.html#SolutionExtractor",
        "fct-type": "function",
        "title": "CutDFS"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "CutDFS",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Cut DFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:CutNothing",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CutNothing",
        "fct-source": "src/Theory-Proof.html#SolutionExtractor",
        "fct-type": "function",
        "title": "CutNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "CutNothing",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Cut Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:IncompleteProof",
      "description": {
        "fct-descr": "\u003cp\u003eThere is a annotated sorry,\n   but no annotatd solved step.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "IncompleteProof",
        "fct-source": "src/Theory-Proof.html#ProofStatus",
        "fct-type": "function",
        "title": "IncompleteProof"
      },
      "index": {
        "description": "There is annotated sorry but no annotatd solved step",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "IncompleteProof",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Incomplete Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:LNode",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNode",
        "fct-source": "src/Theory-Proof.html#LTree",
        "fct-type": "function",
        "title": "LNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "LNode",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:ProofStep",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofStep",
        "fct-source": "src/Theory-Proof.html#ProofStep",
        "fct-type": "function",
        "title": "ProofStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "ProofStep",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:TraceFound",
      "description": {
        "fct-descr": "\u003cp\u003eThere is an annotated solved step\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "TraceFound",
        "fct-source": "src/Theory-Proof.html#ProofStatus",
        "fct-type": "function",
        "title": "TraceFound"
      },
      "index": {
        "description": "There is an annotated solved step",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "TraceFound",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Trace Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:UndeterminedProof",
      "description": {
        "fct-descr": "\u003cp\u003eAll steps are unannotated\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "UndeterminedProof",
        "fct-source": "src/Theory-Proof.html#ProofStatus",
        "fct-type": "function",
        "title": "UndeterminedProof"
      },
      "index": {
        "description": "All steps are unannotated",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "UndeterminedProof",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Undetermined Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:annotateProof",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate a proof in a bottom-up fashion.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(ProofStep a -\u003e [b] -\u003e b) -\u003e Proof a -\u003e Proof b",
        "fct-source": "src/Theory-Proof.html#annotateProof",
        "fct-type": "function",
        "title": "annotateProof"
      },
      "index": {
        "description": "Annotate proof in bottom-up fashion",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "annotateProof",
        "normalized": "(ProofStep a-\u003e[b]-\u003eb)-\u003eProof a-\u003eProof b",
        "package": "tamarin-prover-theory",
        "partial": "Proof",
        "signature": "(ProofStep a-\u003e[b]-\u003eb)-\u003eProof a-\u003eProof b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:apBound",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Theory-Proof.html#AutoProver",
        "fct-type": "function",
        "title": "apBound"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "apBound",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:apCut",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SolutionExtractor",
        "fct-source": "src/Theory-Proof.html#AutoProver",
        "fct-type": "function",
        "title": "apCut"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "apCut",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Cut",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:apHeuristic",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Heuristic",
        "fct-source": "src/Theory-Proof.html#AutoProver",
        "fct-type": "function",
        "title": "apHeuristic"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "apHeuristic",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Heuristic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:atPath",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eprf \u003ccode\u003e\u003ca\u003eatPath\u003c/a\u003e\u003c/code\u003e path\u003c/code\u003e returns the subproof at the \u003ccode\u003epath\u003c/code\u003e in \u003ccode\u003eprf\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Proof a -\u003e ProofPath -\u003e Maybe (Proof a)",
        "fct-source": "src/Theory-Proof.html#atPath",
        "fct-type": "function",
        "title": "atPath"
      },
      "index": {
        "description": "prf atPath path returns the subproof at the path in prf",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "atPath",
        "normalized": "Proof a-\u003eProofPath-\u003eMaybe(Proof a)",
        "package": "tamarin-prover-theory",
        "partial": "Path",
        "signature": "Proof a-\u003eProofPath-\u003eMaybe(Proof a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:checkAndExtendProver",
      "description": {
        "fct-descr": "\u003cp\u003eCheck the proof and handle new cases using the given prover.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Prover -\u003e Prover",
        "fct-source": "src/Theory-Proof.html#checkAndExtendProver",
        "fct-type": "function",
        "title": "checkAndExtendProver"
      },
      "index": {
        "description": "Check the proof and handle new cases using the given prover",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "checkAndExtendProver",
        "normalized": "Prover-\u003eProver",
        "package": "tamarin-prover-theory",
        "partial": "And Extend Prover",
        "signature": "Prover-\u003eProver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:children",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Map l (LTree l a)",
        "fct-source": "src/Theory-Proof.html#LTree",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "children",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:contradictionProver",
      "description": {
        "fct-descr": "\u003cp\u003eProver that does one contradiction step.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Prover",
        "fct-source": "src/Theory-Proof.html#contradictionProver",
        "fct-type": "function",
        "title": "contradictionProver"
      },
      "index": {
        "description": "Prover that does one contradiction step",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "contradictionProver",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Prover",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:focus",
      "description": {
        "fct-descr": "\u003cp\u003eApply a prover only to a sub-proof, fails if the subproof doesn't exist.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofPath -\u003e Prover -\u003e Prover",
        "fct-source": "src/Theory-Proof.html#focus",
        "fct-type": "function",
        "title": "focus"
      },
      "index": {
        "description": "Apply prover only to sub-proof fails if the subproof doesn exist",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "focus",
        "normalized": "ProofPath-\u003eProver-\u003eProver",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "ProofPath-\u003eProver-\u003eProver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:foldProof",
      "description": {
        "fct-descr": "\u003cp\u003eFold a proof.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(ProofStep a -\u003e m) -\u003e Proof a -\u003e m",
        "fct-source": "src/Theory-Proof.html#foldProof",
        "fct-type": "function",
        "title": "foldProof"
      },
      "index": {
        "description": "Fold proof",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "foldProof",
        "normalized": "(ProofStep a-\u003eb)-\u003eProof a-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "Proof",
        "signature": "(ProofStep a-\u003em)-\u003eProof a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:insertPaths",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einsertPaths prf\u003c/code\u003e inserts the path to every proof node.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Proof a -\u003e Proof (a, ProofPath)",
        "fct-source": "src/Theory-Proof.html#insertPaths",
        "fct-type": "function",
        "title": "insertPaths"
      },
      "index": {
        "description": "insertPaths prf inserts the path to every proof node",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "insertPaths",
        "normalized": "Proof a-\u003eProof(a,ProofPath)",
        "package": "tamarin-prover-theory",
        "partial": "Paths",
        "signature": "Proof a-\u003eProof(a,ProofPath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:mapProofInfo",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the information of every proof step.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(a -\u003e b) -\u003e Proof a -\u003e Proof b",
        "fct-source": "src/Theory-Proof.html#mapProofInfo",
        "fct-type": "function",
        "title": "mapProofInfo"
      },
      "index": {
        "description": "Apply function to the information of every proof step",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "mapProofInfo",
        "normalized": "(a-\u003eb)-\u003eProof a-\u003eProof b",
        "package": "tamarin-prover-theory",
        "partial": "Proof Info",
        "signature": "(a-\u003eb)-\u003eProof a-\u003eProof b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:mapProverProof",
      "description": {
        "fct-descr": "\u003cp\u003eMap the proof generated by the prover.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(IncrementalProof -\u003e IncrementalProof) -\u003e Prover -\u003e Prover",
        "fct-source": "src/Theory-Proof.html#mapProverProof",
        "fct-type": "function",
        "title": "mapProverProof"
      },
      "index": {
        "description": "Map the proof generated by the prover",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "mapProverProof",
        "normalized": "(IncrementalProof-\u003eIncrementalProof)-\u003eProver-\u003eProver",
        "package": "tamarin-prover-theory",
        "partial": "Prover Proof",
        "signature": "(IncrementalProof-\u003eIncrementalProof)-\u003eProver-\u003eProver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:mergeMapsWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. A generalized union operator for maps with differing types.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e (a -\u003e b -\u003e c) -\u003e Map k a -\u003e Map k b -\u003e Map k c",
        "fct-source": "src/Theory-Proof.html#mergeMapsWith",
        "fct-type": "function",
        "title": "mergeMapsWith"
      },
      "index": {
        "description": "generalized union operator for maps with differing types",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "mergeMapsWith",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003e(a-\u003ec-\u003eb)-\u003eMap d a-\u003eMap d c-\u003eMap d b",
        "package": "tamarin-prover-theory",
        "partial": "Maps With",
        "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003eMap k a-\u003eMap k b-\u003eMap k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:oneStepProver",
      "description": {
        "fct-descr": "\u003cp\u003eTry to execute one proof step using the given proof method.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofMethod -\u003e Prover",
        "fct-source": "src/Theory-Proof.html#oneStepProver",
        "fct-type": "function",
        "title": "oneStepProver"
      },
      "index": {
        "description": "Try to execute one proof step using the given proof method",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "oneStepProver",
        "normalized": "ProofMethod-\u003eProver",
        "package": "tamarin-prover-theory",
        "partial": "Step Prover",
        "signature": "ProofMethod-\u003eProver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:orelse",
      "description": {
        "fct-descr": "\u003cp\u003eResorts to the second prover, if the first one is not successful.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Prover -\u003e Prover -\u003e Prover",
        "fct-source": "src/Theory-Proof.html#orelse",
        "fct-type": "function",
        "title": "orelse"
      },
      "index": {
        "description": "Resorts to the second prover if the first one is not successful",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "orelse",
        "normalized": "Prover-\u003eProver-\u003eProver",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Prover-\u003eProver-\u003eProver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:parLTreeDFS",
      "description": {
        "fct-descr": "\u003cp\u003eA parallel evaluation strategy well-suited for DFS traversal: As soon as\n a node is forced it sparks off the computation of the number of case-maps\n of all its children. This way most of the data is already evaulated, when\n the actual DFS traversal visits it.\n\u003c/p\u003e\u003cp\u003eNOT used for now. It sometimes required too much memory.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Strategy (LTree l a)",
        "fct-source": "src/Theory-Proof.html#parLTreeDFS",
        "fct-type": "function",
        "title": "parLTreeDFS"
      },
      "index": {
        "description": "parallel evaluation strategy well-suited for DFS traversal As soon as node is forced it sparks off the computation of the number of case-maps of all its children This way most of the data is already evaulated when the actual DFS traversal visits it NOT used for now It sometimes required too much memory",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "parLTreeDFS",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LTree DFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:prettyProof",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Proof a -\u003e d",
        "fct-source": "src/Theory-Proof.html#prettyProof",
        "fct-type": "function",
        "title": "prettyProof"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "prettyProof",
        "normalized": "Proof a-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "Proof",
        "signature": "Proof a-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:prettyProofWith",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(ProofStep a -\u003e d)-\u003e (ProofStep a -\u003e d -\u003e d)-\u003e Proof a-\u003e d",
        "fct-type": "function",
        "title": "prettyProofWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "prettyProofWith",
        "normalized": "(ProofStep a-\u003eb)-\u003e(ProofStep a-\u003eb-\u003eb)-\u003eProof a-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "Proof With",
        "signature": "(ProofStep a-\u003ed)-\u003e(ProofStep a-\u003ed-\u003ed)-\u003eProof a-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:proofStepStatus",
      "description": {
        "fct-descr": "\u003cp\u003eThe status of a \u003ccode\u003e\u003ca\u003eProofStep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofStep (Maybe a) -\u003e ProofStatus",
        "fct-source": "src/Theory-Proof.html#proofStepStatus",
        "fct-type": "function",
        "title": "proofStepStatus"
      },
      "index": {
        "description": "The status of ProofStep",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "proofStepStatus",
        "normalized": "ProofStep(Maybe a)-\u003eProofStatus",
        "package": "tamarin-prover-theory",
        "partial": "Step Status",
        "signature": "ProofStep(Maybe a)-\u003eProofStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:psInfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "a",
        "fct-source": "src/Theory-Proof.html#ProofStep",
        "fct-type": "function",
        "title": "psInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "psInfo",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:psMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProofMethod",
        "fct-source": "src/Theory-Proof.html#ProofStep",
        "fct-type": "function",
        "title": "psMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "psMethod",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:replaceSorryProver",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all annotated sorry steps using the given prover.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Prover -\u003e Prover",
        "fct-source": "src/Theory-Proof.html#replaceSorryProver",
        "fct-type": "function",
        "title": "replaceSorryProver"
      },
      "index": {
        "description": "Replace all annotated sorry steps using the given prover",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "replaceSorryProver",
        "normalized": "Prover-\u003eProver",
        "package": "tamarin-prover-theory",
        "partial": "Sorry Prover",
        "signature": "Prover-\u003eProver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:root",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "a",
        "fct-source": "src/Theory-Proof.html#LTree",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "root",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:runAutoProver",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "AutoProver -\u003e Prover",
        "fct-source": "src/Theory-Proof.html#runAutoProver",
        "fct-type": "function",
        "title": "runAutoProver"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "runAutoProver",
        "normalized": "AutoProver-\u003eProver",
        "package": "tamarin-prover-theory",
        "partial": "Auto Prover",
        "signature": "AutoProver-\u003eProver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:runProver",
      "description": {
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Prover -\u003e ProofContext -\u003e Int -\u003e System -\u003e IncrementalProof -\u003e Maybe IncrementalProof",
        "fct-source": "src/Theory-Proof.html#runProver",
        "fct-type": "function",
        "title": "runProver"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "runProver",
        "normalized": "Prover-\u003eProofContext-\u003eInt-\u003eSystem-\u003eIncrementalProof-\u003eMaybe IncrementalProof",
        "package": "tamarin-prover-theory",
        "partial": "Prover",
        "signature": "Prover-\u003eProofContext-\u003eInt-\u003eSystem-\u003eIncrementalProof-\u003eMaybe IncrementalProof"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:showProofStatus",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a proof status to a redable string.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SystemTraceQuantifier -\u003e ProofStatus -\u003e String",
        "fct-source": "src/Theory-Proof.html#showProofStatus",
        "fct-type": "function",
        "title": "showProofStatus"
      },
      "index": {
        "description": "Convert proof status to redable string",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "showProofStatus",
        "normalized": "SystemTraceQuantifier-\u003eProofStatus-\u003eString",
        "package": "tamarin-prover-theory",
        "partial": "Proof Status",
        "signature": "SystemTraceQuantifier-\u003eProofStatus-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:sorry",
      "description": {
        "fct-descr": "\u003cp\u003eA proof using the \u003ccode\u003e\u003ca\u003esorry\u003c/a\u003e\u003c/code\u003e proof method.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Maybe String -\u003e a -\u003e Proof a",
        "fct-source": "src/Theory-Proof.html#sorry",
        "fct-type": "function",
        "title": "sorry"
      },
      "index": {
        "description": "proof using the sorry proof method",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "sorry",
        "normalized": "Maybe String-\u003ea-\u003eProof a",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Maybe String-\u003ea-\u003eProof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:sorryProver",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the current proof with a sorry step and the given reason.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Maybe String -\u003e Prover",
        "fct-source": "src/Theory-Proof.html#sorryProver",
        "fct-type": "function",
        "title": "sorryProver"
      },
      "index": {
        "description": "Replace the current proof with sorry step and the given reason",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "sorryProver",
        "normalized": "Maybe String-\u003eProver",
        "package": "tamarin-prover-theory",
        "partial": "Prover",
        "signature": "Maybe String-\u003eProver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:tryProver",
      "description": {
        "fct-descr": "\u003cp\u003eTry to apply a prover. If it fails, just return the original proof.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Prover -\u003e Prover",
        "fct-source": "src/Theory-Proof.html#tryProver",
        "fct-type": "function",
        "title": "tryProver"
      },
      "index": {
        "description": "Try to apply prover If it fails just return the original proof",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "tryProver",
        "normalized": "Prover-\u003eProver",
        "package": "tamarin-prover-theory",
        "partial": "Prover",
        "signature": "Prover-\u003eProver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:unproven",
      "description": {
        "fct-descr": "\u003cp\u003eA proof denoting an unproven part of the proof.\n\u003c/p\u003e",
        "fct-module": "Theory.Proof",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "a -\u003e Proof a",
        "fct-source": "src/Theory-Proof.html#unproven",
        "fct-type": "function",
        "title": "unproven"
      },
      "index": {
        "description": "proof denoting an unproven part of the proof",
        "hierarchy": "Theory Proof",
        "module": "Theory.Proof",
        "name": "unproven",
        "normalized": "a-\u003eProof a",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "a-\u003eProof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTokenizing infrastructure\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Text-Parser-Token.html",
        "fct-type": "module",
        "title": "Token"
      },
      "index": {
        "description": "Tokenizing infrastructure",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "Token",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eA parser for a stream of tokens.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Text-Parser-Token.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "parser for stream of tokens",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "Parser",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:angled",
      "description": {
        "fct-descr": "\u003cp\u003eBetween angular brackets.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e Parser a",
        "fct-source": "src/Theory-Text-Parser-Token.html#angled",
        "fct-type": "function",
        "title": "angled"
      },
      "index": {
        "description": "Between angular brackets",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "angled",
        "normalized": "Parser a-\u003eParser a",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Parser a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:braced",
      "description": {
        "fct-descr": "\u003cp\u003eBetween braces.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e Parser a",
        "fct-source": "src/Theory-Text-Parser-Token.html#braced",
        "fct-type": "function",
        "title": "braced"
      },
      "index": {
        "description": "Between braces",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "braced",
        "normalized": "Parser a-\u003eParser a",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Parser a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:brackets",
      "description": {
        "fct-descr": "\u003cp\u003eBetween brackets.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e Parser a",
        "fct-source": "src/Theory-Text-Parser-Token.html#brackets",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "Between brackets",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "brackets",
        "normalized": "Parser a-\u003eParser a",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Parser a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:colon",
      "description": {
        "fct-descr": "\u003cp\u003eA colon \u003ccode\u003e:\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#colon",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "colon",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "colon",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:comma",
      "description": {
        "fct-descr": "\u003cp\u003eA comma \u003ccode\u003e,\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#comma",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "comma",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "comma",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:commaSep",
      "description": {
        "fct-descr": "\u003cp\u003eA comma separated list of elements.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e Parser [a]",
        "fct-source": "src/Theory-Text-Parser-Token.html#commaSep",
        "fct-type": "function",
        "title": "commaSep"
      },
      "index": {
        "description": "comma separated list of elements",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "commaSep",
        "normalized": "Parser a-\u003eParser[a]",
        "package": "tamarin-prover-theory",
        "partial": "Sep",
        "signature": "Parser a-\u003eParser[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:commaSep1",
      "description": {
        "fct-descr": "\u003cp\u003eA comma separated non-empty list of elements.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e Parser [a]",
        "fct-source": "src/Theory-Text-Parser-Token.html#commaSep1",
        "fct-type": "function",
        "title": "commaSep1"
      },
      "index": {
        "description": "comma separated non-empty list of elements",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "commaSep1",
        "normalized": "Parser a-\u003eParser[a]",
        "package": "tamarin-prover-theory",
        "partial": "Sep",
        "signature": "Parser a-\u003eParser[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:dot",
      "description": {
        "fct-descr": "\u003cp\u003eA dot \u003ccode\u003e.\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "dot",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "dot",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:doubleQuoted",
      "description": {
        "fct-descr": "\u003cp\u003eBetween double quotes.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e Parser a",
        "fct-source": "src/Theory-Text-Parser-Token.html#doubleQuoted",
        "fct-type": "function",
        "title": "doubleQuoted"
      },
      "index": {
        "description": "Between double quotes",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "doubleQuoted",
        "normalized": "Parser a-\u003eParser a",
        "package": "tamarin-prover-theory",
        "partial": "Quoted",
        "signature": "Parser a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:equalSign",
      "description": {
        "fct-descr": "\u003cp\u003eThe equal sign \u003ccode\u003e=\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#equalSign",
        "fct-type": "function",
        "title": "equalSign"
      },
      "index": {
        "description": "The equal sign",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "equalSign",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Sign",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:formalComment",
      "description": {
        "fct-descr": "\u003cp\u003eA formal comment; i.e., (header, body)\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser (String, String)",
        "fct-source": "src/Theory-Text-Parser-Token.html#formalComment",
        "fct-type": "function",
        "title": "formalComment"
      },
      "index": {
        "description": "formal comment i.e header body",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "formalComment",
        "normalized": "Parser(String,String)",
        "package": "tamarin-prover-theory",
        "partial": "Comment",
        "signature": "Parser(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:freshName",
      "description": {
        "fct-descr": "\u003cp\u003eParse a literal fresh name, e.g., \u003ccode\u003e~\u003ccode\u003en\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser String",
        "fct-source": "src/Theory-Text-Parser-Token.html#freshName",
        "fct-type": "function",
        "title": "freshName"
      },
      "index": {
        "description": "Parse literal fresh name e.g",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "freshName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:identifier",
      "description": {
        "fct-descr": "\u003cp\u003eParse an identifier as a string\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser String",
        "fct-source": "src/Theory-Text-Parser-Token.html#identifier",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "Parse an identifier as string",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "identifier",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:indexedIdentifier",
      "description": {
        "fct-descr": "\u003cp\u003eParse an identifier possibly indexed with a number.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser (String, Integer)",
        "fct-source": "src/Theory-Text-Parser-Token.html#indexedIdentifier",
        "fct-type": "function",
        "title": "indexedIdentifier"
      },
      "index": {
        "description": "Parse an identifier possibly indexed with number",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "indexedIdentifier",
        "normalized": "Parser(String,Integer)",
        "package": "tamarin-prover-theory",
        "partial": "Identifier",
        "signature": "Parser(String,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eParse a list of items '[' item ',' ... ',' item ']'\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e Parser [a]",
        "fct-source": "src/Theory-Text-Parser-Token.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "Parse list of items item item",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "list",
        "normalized": "Parser a-\u003eParser[a]",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Parser a-\u003eParser[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:lvar",
      "description": {
        "fct-descr": "\u003cp\u003eAn arbitrary logical variable.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser LVar",
        "fct-source": "src/Theory-Text-Parser-Token.html#lvar",
        "fct-type": "function",
        "title": "lvar"
      },
      "index": {
        "description": "An arbitrary logical variable",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "lvar",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:msgvar",
      "description": {
        "fct-descr": "\u003cp\u003eParse a non-node variable.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser LVar",
        "fct-source": "src/Theory-Text-Parser-Token.html#msgvar",
        "fct-type": "function",
        "title": "msgvar"
      },
      "index": {
        "description": "Parse non-node variable",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "msgvar",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:natural",
      "description": {
        "fct-descr": "\u003cp\u003eParse an natural.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser Integer",
        "fct-source": "src/Theory-Text-Parser-Token.html#natural",
        "fct-type": "function",
        "title": "natural"
      },
      "index": {
        "description": "Parse an natural",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "natural",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:naturalSubscript",
      "description": {
        "fct-descr": "\u003cp\u003eParse a Unicode-subscripted natural number.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser Integer",
        "fct-source": "src/Theory-Text-Parser-Token.html#naturalSubscript",
        "fct-type": "function",
        "title": "naturalSubscript"
      },
      "index": {
        "description": "Parse Unicode-subscripted natural number",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "naturalSubscript",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Subscript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:nodevar",
      "description": {
        "fct-descr": "\u003cp\u003eParse a graph node variable.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser NodeId",
        "fct-source": "src/Theory-Text-Parser-Token.html#nodevar",
        "fct-type": "function",
        "title": "nodevar"
      },
      "index": {
        "description": "Parse graph node variable",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "nodevar",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opAt",
      "description": {
        "fct-descr": "\u003cp\u003eThe action-at-timepoint operator @.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opAt",
        "fct-type": "function",
        "title": "opAt"
      },
      "index": {
        "description": "The action-at-timepoint operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opAt",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "At",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opBang",
      "description": {
        "fct-descr": "\u003cp\u003eThe bang operator \u003ccode\u003e!\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opBang",
        "fct-type": "function",
        "title": "opBang"
      },
      "index": {
        "description": "The bang operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opBang",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Bang",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opChain",
      "description": {
        "fct-descr": "\u003cp\u003eThe chain operator \u003ccode\u003e~~\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opChain",
        "fct-type": "function",
        "title": "opChain"
      },
      "index": {
        "description": "The chain operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opChain",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Chain",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opEqual",
      "description": {
        "fct-descr": "\u003cp\u003eThe equality operator \u003ccode\u003e=\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opEqual",
        "fct-type": "function",
        "title": "opEqual"
      },
      "index": {
        "description": "The equality operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opEqual",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Equal",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opExists",
      "description": {
        "fct-descr": "\u003cp\u003eThe logical-exists operator \u003ccode\u003eEx\u003c/code\u003e or \u003ccode\u003e&#8707;\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opExists",
        "fct-type": "function",
        "title": "opExists"
      },
      "index": {
        "description": "The logical-exists operator Ex or",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opExists",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Exists",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opExp",
      "description": {
        "fct-descr": "\u003cp\u003eThe exponentiation operator \u003ccode\u003e^\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opExp",
        "fct-type": "function",
        "title": "opExp"
      },
      "index": {
        "description": "The exponentiation operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opExp",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Exp",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opForall",
      "description": {
        "fct-descr": "\u003cp\u003eThe logical-forall operator \u003ccode\u003eAll\u003c/code\u003e or \u003ccode\u003e&#8704;\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opForall",
        "fct-type": "function",
        "title": "opForall"
      },
      "index": {
        "description": "The logical-forall operator All or",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opForall",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Forall",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opImplies",
      "description": {
        "fct-descr": "\u003cp\u003eThe logical-implies operator \u003ccode\u003e==\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opImplies",
        "fct-type": "function",
        "title": "opImplies"
      },
      "index": {
        "description": "The logical-implies operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opImplies",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Implies",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLAnd",
      "description": {
        "fct-descr": "\u003cp\u003eThe logical-and operator \u003ccode\u003e&\u003c/code\u003e or \u003ccode\u003e&#8743;\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLAnd",
        "fct-type": "function",
        "title": "opLAnd"
      },
      "index": {
        "description": "The logical-and operator or",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLAnd",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "LAnd",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLEquiv",
      "description": {
        "fct-descr": "\u003cp\u003eThe logical-equivalence operator \u003ccode\u003e\u003ca\u003e=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLEquiv",
        "fct-type": "function",
        "title": "opLEquiv"
      },
      "index": {
        "description": "The logical-equivalence operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLEquiv",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "LEquiv",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLFalse",
      "description": {
        "fct-descr": "\u003cp\u003eA logical false, \u003ccode\u003eF\u003c/code\u003e or \u003ccode\u003e&#8869;\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLFalse",
        "fct-type": "function",
        "title": "opLFalse"
      },
      "index": {
        "description": "logical false or",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLFalse",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "LFalse",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLNot",
      "description": {
        "fct-descr": "\u003cp\u003eThe logical not operator \u003ccode\u003enot\u003c/code\u003e or \u003ccode\u003e&#172;\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLNot",
        "fct-type": "function",
        "title": "opLNot"
      },
      "index": {
        "description": "The logical not operator not or",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLNot",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "LNot",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLOr",
      "description": {
        "fct-descr": "\u003cp\u003eThe logical-or operator \u003ccode\u003e|\u003c/code\u003e or \u003ccode\u003e&#8744;\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLOr",
        "fct-type": "function",
        "title": "opLOr"
      },
      "index": {
        "description": "The logical-or operator or",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLOr",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "LOr",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLTrue",
      "description": {
        "fct-descr": "\u003cp\u003eA logical false, \u003ccode\u003eT\u003c/code\u003e or \u003ccode\u003e&#8869;\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLTrue",
        "fct-type": "function",
        "title": "opLTrue"
      },
      "index": {
        "description": "logical false or",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLTrue",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "LTrue",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLeftarrow",
      "description": {
        "fct-descr": "\u003cp\u003eThe leftarrow operator \u003ccode\u003e\u003c--\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLeftarrow",
        "fct-type": "function",
        "title": "opLeftarrow"
      },
      "index": {
        "description": "The leftarrow operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLeftarrow",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Leftarrow",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLess",
      "description": {
        "fct-descr": "\u003cp\u003eThe timepoint comparison operator \u003ccode\u003e\u003c\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLess",
        "fct-type": "function",
        "title": "opLess"
      },
      "index": {
        "description": "The timepoint comparison operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLess",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Less",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLongleftarrow",
      "description": {
        "fct-descr": "\u003cp\u003eThe longleftarrow operator \u003ccode\u003e\u003c--\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLongleftarrow",
        "fct-type": "function",
        "title": "opLongleftarrow"
      },
      "index": {
        "description": "The longleftarrow operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLongleftarrow",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Longleftarrow",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLongrightarrow",
      "description": {
        "fct-descr": "\u003cp\u003eThe longrightarrow operator \u003ccode\u003e--\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opLongrightarrow",
        "fct-type": "function",
        "title": "opLongrightarrow"
      },
      "index": {
        "description": "The longrightarrow operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opLongrightarrow",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Longrightarrow",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opMinus",
      "description": {
        "fct-descr": "\u003cp\u003eThe minus operator \u003ccode\u003e-\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opMinus",
        "fct-type": "function",
        "title": "opMinus"
      },
      "index": {
        "description": "The minus operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opMinus",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Minus",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opMult",
      "description": {
        "fct-descr": "\u003cp\u003eThe multiplication operator \u003ccode\u003e*\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opMult",
        "fct-type": "function",
        "title": "opMult"
      },
      "index": {
        "description": "The multiplication operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opMult",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Mult",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opPlus",
      "description": {
        "fct-descr": "\u003cp\u003eThe multiplication operator \u003ccode\u003e*\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opPlus",
        "fct-type": "function",
        "title": "opPlus"
      },
      "index": {
        "description": "The multiplication operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opPlus",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Plus",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opRequires",
      "description": {
        "fct-descr": "\u003cp\u003eThe requires-a-premise operator, \u003ccode\u003e&#9654; subscript-idx\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser PremIdx",
        "fct-source": "src/Theory-Text-Parser-Token.html#opRequires",
        "fct-type": "function",
        "title": "opRequires"
      },
      "index": {
        "description": "The requires-a-premise operator subscript-idx",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opRequires",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Requires",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opRightarrow",
      "description": {
        "fct-descr": "\u003cp\u003eThe rightarrow operator \u003ccode\u003e--\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opRightarrow",
        "fct-type": "function",
        "title": "opRightarrow"
      },
      "index": {
        "description": "The rightarrow operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opRightarrow",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Rightarrow",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opSharp",
      "description": {
        "fct-descr": "\u003cp\u003eThe sharp operator \u003ccode\u003e#\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opSharp",
        "fct-type": "function",
        "title": "opSharp"
      },
      "index": {
        "description": "The sharp operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opSharp",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Sharp",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opSlash",
      "description": {
        "fct-descr": "\u003cp\u003eThe slash operator \u003ccode\u003e/\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#opSlash",
        "fct-type": "function",
        "title": "opSlash"
      },
      "index": {
        "description": "The slash operator",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "opSlash",
        "normalized": "Parser()",
        "package": "tamarin-prover-theory",
        "partial": "Slash",
        "signature": "Parser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:parens",
      "description": {
        "fct-descr": "\u003cp\u003eBetween parentheses.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e Parser a",
        "fct-source": "src/Theory-Text-Parser-Token.html#parens",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "Between parentheses",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "parens",
        "normalized": "Parser a-\u003eParser a",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "Parser a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:parseFile",
      "description": {
        "fct-descr": "\u003cp\u003eRun a parser on the contents of a file.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e FilePath -\u003e IO a",
        "fct-source": "src/Theory-Text-Parser-Token.html#parseFile",
        "fct-type": "function",
        "title": "parseFile"
      },
      "index": {
        "description": "Run parser on the contents of file",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "parseFile",
        "normalized": "Parser a-\u003eFilePath-\u003eIO a",
        "package": "tamarin-prover-theory",
        "partial": "File",
        "signature": "Parser a-\u003eFilePath-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:parseString",
      "description": {
        "fct-descr": "\u003cp\u003eRun a given parser on a given string.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FilePath-\u003e Parser a-\u003e String-\u003e Either ParseError a",
        "fct-type": "function",
        "title": "parseString"
      },
      "index": {
        "description": "Run given parser on given string",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "parseString",
        "normalized": "FilePath-\u003eParser a-\u003eString-\u003eEither ParseError a",
        "package": "tamarin-prover-theory",
        "partial": "String",
        "signature": "FilePath-\u003eParser a-\u003eString-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:pubName",
      "description": {
        "fct-descr": "\u003cp\u003eParse a literal public name, e.g., \u003ccode\u003e\u003ccode\u003en\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser String",
        "fct-source": "src/Theory-Text-Parser-Token.html#pubName",
        "fct-type": "function",
        "title": "pubName"
      },
      "index": {
        "description": "Parse literal public name e.g",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "pubName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:singleQuoted",
      "description": {
        "fct-descr": "\u003cp\u003eBetween single quotes.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Parser a -\u003e Parser a",
        "fct-source": "src/Theory-Text-Parser-Token.html#singleQuoted",
        "fct-type": "function",
        "title": "singleQuoted"
      },
      "index": {
        "description": "Between single quotes",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "singleQuoted",
        "normalized": "Parser a-\u003eParser a",
        "package": "tamarin-prover-theory",
        "partial": "Quoted",
        "signature": "Parser a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:sortedLVar",
      "description": {
        "fct-descr": "\u003cp\u003eParse a logical variable with the given sorts allowed.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[LSort] -\u003e Parser LVar",
        "fct-source": "src/Theory-Text-Parser-Token.html#sortedLVar",
        "fct-type": "function",
        "title": "sortedLVar"
      },
      "index": {
        "description": "Parse logical variable with the given sorts allowed",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "sortedLVar",
        "normalized": "[LSort]-\u003eParser LVar",
        "package": "tamarin-prover-theory",
        "partial": "LVar",
        "signature": "[LSort]-\u003eParser LVar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:symbol",
      "description": {
        "fct-descr": "\u003cp\u003eParse a symbol.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e Parser String",
        "fct-source": "src/Theory-Text-Parser-Token.html#symbol",
        "fct-type": "function",
        "title": "symbol"
      },
      "index": {
        "description": "Parse symbol",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "symbol",
        "normalized": "String-\u003eParser String",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "String-\u003eParser String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:symbol_",
      "description": {
        "fct-descr": "\u003cp\u003eParse a symbol without returning the parsed string.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser.Token",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e Parser ()",
        "fct-source": "src/Theory-Text-Parser-Token.html#symbol_",
        "fct-type": "function",
        "title": "symbol_"
      },
      "index": {
        "description": "Parse symbol without returning the parsed string",
        "hierarchy": "Theory Text Parser Token",
        "module": "Theory.Text.Parser.Token",
        "name": "symbol_",
        "normalized": "String-\u003eParser()",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "String-\u003eParser()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing protocol theories. See the MANUAL for a high-level description of\n the syntax.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Text.Parser",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Text-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Parsing protocol theories See the MANUAL for high-level description of the syntax",
        "hierarchy": "Theory Text Parser",
        "module": "Theory.Text.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#v:parseIntruderRules",
      "description": {
        "fct-descr": "\u003cp\u003eParse DH intruder rules.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "MaudeSig -\u003e FilePath -\u003e IO [IntrRuleAC]",
        "fct-source": "src/Theory-Text-Parser.html#parseIntruderRules",
        "fct-type": "function",
        "title": "parseIntruderRules"
      },
      "index": {
        "description": "Parse DH intruder rules",
        "hierarchy": "Theory Text Parser",
        "module": "Theory.Text.Parser",
        "name": "parseIntruderRules",
        "normalized": "MaudeSig-\u003eFilePath-\u003eIO[IntrRuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Intruder Rules",
        "signature": "MaudeSig-\u003eFilePath-\u003eIO[IntrRuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#v:parseLemma",
      "description": {
        "fct-descr": "\u003cp\u003eParse a lemma for an open theory from a string.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e Either ParseError (Lemma ProofSkeleton)",
        "fct-source": "src/Theory-Text-Parser.html#parseLemma",
        "fct-type": "function",
        "title": "parseLemma"
      },
      "index": {
        "description": "Parse lemma for an open theory from string",
        "hierarchy": "Theory Text Parser",
        "module": "Theory.Text.Parser",
        "name": "parseLemma",
        "normalized": "String-\u003eEither ParseError(Lemma ProofSkeleton)",
        "package": "tamarin-prover-theory",
        "partial": "Lemma",
        "signature": "String-\u003eEither ParseError(Lemma ProofSkeleton)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#v:parseOpenTheory",
      "description": {
        "fct-descr": "\u003cp\u003eParse a security protocol theory file.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[String]-\u003e FilePath-\u003e IO OpenTheory",
        "fct-type": "function",
        "title": "parseOpenTheory"
      },
      "index": {
        "description": "Parse security protocol theory file",
        "hierarchy": "Theory Text Parser",
        "module": "Theory.Text.Parser",
        "name": "parseOpenTheory",
        "normalized": "[String]-\u003eFilePath-\u003eIO OpenTheory",
        "package": "tamarin-prover-theory",
        "partial": "Open Theory",
        "signature": "[String]-\u003eFilePath-\u003eIO OpenTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#v:parseOpenTheoryString",
      "description": {
        "fct-descr": "\u003cp\u003eParse a security protocol theory from a string.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Parser",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[String]-\u003e String-\u003e Either ParseError OpenTheory",
        "fct-type": "function",
        "title": "parseOpenTheoryString"
      },
      "index": {
        "description": "Parse security protocol theory from string",
        "hierarchy": "Theory Text Parser",
        "module": "Theory.Text.Parser",
        "name": "parseOpenTheoryString",
        "normalized": "[String]-\u003eString-\u003eEither ParseError OpenTheory",
        "package": "tamarin-prover-theory",
        "partial": "Open Theory String",
        "signature": "[String]-\u003eString-\u003eEither ParseError OpenTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral support for pretty printing theories.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Text-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "General support for pretty printing theories",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:fsepList",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a list of values as a comma-separated list wrapped in\n paragraph mode.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(a -\u003e d) -\u003e [a] -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#fsepList",
        "fct-type": "function",
        "title": "fsepList"
      },
      "index": {
        "description": "Pretty print list of values as comma-separated list wrapped in paragraph mode",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "fsepList",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "List",
        "signature": "(a-\u003ed)-\u003e[a]-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwAxiom",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#kwAxiom",
        "fct-type": "function",
        "title": "kwAxiom"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwAxiom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Axiom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwBy",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#kwBy",
        "fct-type": "function",
        "title": "kwBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwBy",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwCase",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#kwCase",
        "fct-type": "function",
        "title": "kwCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwCase",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwEnd",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#kwEnd",
        "fct-type": "function",
        "title": "kwEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwEnd",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwInstanceModulo",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#kwInstanceModulo",
        "fct-type": "function",
        "title": "kwInstanceModulo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwInstanceModulo",
        "normalized": "String-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Instance Modulo",
        "signature": "String-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwLemma",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#kwLemma",
        "fct-type": "function",
        "title": "kwLemma"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwLemma",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Lemma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwModulo",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String-\u003e String-\u003e d",
        "fct-type": "function",
        "title": "kwModulo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwModulo",
        "normalized": "String-\u003eString-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Modulo",
        "signature": "String-\u003eString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwNext",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#kwNext",
        "fct-type": "function",
        "title": "kwNext"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwNext",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwQED",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#kwQED",
        "fct-type": "function",
        "title": "kwQED"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwQED",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "QED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwRuleModulo",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#kwRuleModulo",
        "fct-type": "function",
        "title": "kwRuleModulo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwRuleModulo",
        "normalized": "String-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Rule Modulo",
        "signature": "String-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwTheoryHeader",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#kwTheoryHeader",
        "fct-type": "function",
        "title": "kwTheoryHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwTheoryHeader",
        "normalized": "a-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Theory Header",
        "signature": "d-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwTypesModulo",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#kwTypesModulo",
        "fct-type": "function",
        "title": "kwTypesModulo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwTypesModulo",
        "normalized": "String-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Types Modulo",
        "signature": "String-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwVariantsModulo",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#kwVariantsModulo",
        "fct-type": "function",
        "title": "kwVariantsModulo"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "kwVariantsModulo",
        "normalized": "String-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Variants Modulo",
        "signature": "String-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:lineComment",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#lineComment",
        "fct-type": "function",
        "title": "lineComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "lineComment",
        "normalized": "a-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Comment",
        "signature": "d-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:lineComment_",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#lineComment_",
        "fct-type": "function",
        "title": "lineComment_"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "lineComment_",
        "normalized": "String-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Comment",
        "signature": "String-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:multiComment",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#multiComment",
        "fct-type": "function",
        "title": "multiComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "multiComment",
        "normalized": "a-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Comment",
        "signature": "d-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:multiComment_",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[String] -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#multiComment_",
        "fct-type": "function",
        "title": "multiComment_"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "multiComment_",
        "normalized": "[String]-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Comment",
        "signature": "[String]-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opAction",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opAction",
        "fct-type": "function",
        "title": "opAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opAction",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opDedBefore",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opDedBefore",
        "fct-type": "function",
        "title": "opDedBefore"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opDedBefore",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Ded Before",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opDot",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opDot",
        "fct-type": "function",
        "title": "opDot"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opDot",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Dot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opEdge",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opEdge",
        "fct-type": "function",
        "title": "opEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opEdge",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opEqual",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opEqual",
        "fct-type": "function",
        "title": "opEqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opEqual",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opExists",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opExists",
        "fct-type": "function",
        "title": "opExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opExists",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opForall",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opForall",
        "fct-type": "function",
        "title": "opForall"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opForall",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Forall",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opIff",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opIff",
        "fct-type": "function",
        "title": "opIff"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opIff",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Iff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opImp",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opImp",
        "fct-type": "function",
        "title": "opImp"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opImp",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Imp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opLAnd",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opLAnd",
        "fct-type": "function",
        "title": "opLAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opLAnd",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opLOr",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opLOr",
        "fct-type": "function",
        "title": "opLOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opLOr",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "LOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opLess",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opLess",
        "fct-type": "function",
        "title": "opLess"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opLess",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Less",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opPath",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opPath",
        "fct-type": "function",
        "title": "opPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opPath",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opProvides",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opProvides",
        "fct-type": "function",
        "title": "opProvides"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opProvides",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Provides",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opRequires",
      "description": {
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "d",
        "fct-source": "src/Theory-Text-Pretty.html#opRequires",
        "fct-type": "function",
        "title": "opRequires"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "opRequires",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Requires",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:vsep",
      "description": {
        "fct-descr": "\u003cp\u003eVertically separate a list of documents by empty lines.\n\u003c/p\u003e",
        "fct-module": "Theory.Text.Pretty",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[d] -\u003e d",
        "fct-source": "src/Theory-Text-Pretty.html#vsep",
        "fct-type": "function",
        "title": "vsep"
      },
      "index": {
        "description": "Vertically separate list of documents by empty lines",
        "hierarchy": "Theory Text Pretty",
        "module": "Theory.Text.Pretty",
        "name": "vsep",
        "normalized": "[a]-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "[d]-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract intepretation for partial evaluation of multiset rewriting\n systems.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Tools.AbstractInterpretation",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Tools-AbstractInterpretation.html",
        "fct-type": "module",
        "title": "AbstractInterpretation"
      },
      "index": {
        "description": "Abstract intepretation for partial evaluation of multiset rewriting systems",
        "hierarchy": "Theory Tools AbstractInterpretation",
        "module": "Theory.Tools.AbstractInterpretation",
        "name": "AbstractInterpretation",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Abstract Interpretation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#t:EvaluationStyle",
      "description": {
        "fct-descr": "\u003cp\u003eHow to report on performing a partial evaluation.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.AbstractInterpretation",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Tools-AbstractInterpretation.html#EvaluationStyle",
        "fct-type": "data",
        "title": "EvaluationStyle"
      },
      "index": {
        "description": "How to report on performing partial evaluation",
        "hierarchy": "Theory Tools AbstractInterpretation",
        "module": "Theory.Tools.AbstractInterpretation",
        "name": "EvaluationStyle",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Evaluation Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:Silent",
      "description": {
        "fct-module": "Theory.Tools.AbstractInterpretation",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Silent",
        "fct-source": "src/Theory-Tools-AbstractInterpretation.html#EvaluationStyle",
        "fct-type": "function",
        "title": "Silent"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools AbstractInterpretation",
        "module": "Theory.Tools.AbstractInterpretation",
        "name": "Silent",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Silent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:Summary",
      "description": {
        "fct-module": "Theory.Tools.AbstractInterpretation",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Summary",
        "fct-source": "src/Theory-Tools-AbstractInterpretation.html#EvaluationStyle",
        "fct-type": "function",
        "title": "Summary"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools AbstractInterpretation",
        "module": "Theory.Tools.AbstractInterpretation",
        "name": "Summary",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Summary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:Tracing",
      "description": {
        "fct-module": "Theory.Tools.AbstractInterpretation",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Tracing",
        "fct-source": "src/Theory-Tools-AbstractInterpretation.html#EvaluationStyle",
        "fct-type": "function",
        "title": "Tracing"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools AbstractInterpretation",
        "module": "Theory.Tools.AbstractInterpretation",
        "name": "Tracing",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Tracing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:interpretAbstractly",
      "description": {
        "fct-descr": "\u003cp\u003eHigher-order combinator to construct abstract interpreters.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.AbstractInterpretation",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "([Equal LNFact] -\u003e [LNSubstVFresh])-\u003e s-\u003e (LNFact -\u003e s -\u003e s)-\u003e (s -\u003e [LNFact])-\u003e [Rule i]-\u003e [(s, [Rule i])]",
        "fct-type": "function",
        "title": "interpretAbstractly"
      },
      "index": {
        "description": "Higher-order combinator to construct abstract interpreters",
        "hierarchy": "Theory Tools AbstractInterpretation",
        "module": "Theory.Tools.AbstractInterpretation",
        "name": "interpretAbstractly",
        "normalized": "([Equal LNFact]-\u003e[LNSubstVFresh])-\u003ea-\u003e(LNFact-\u003ea-\u003ea)-\u003e(a-\u003e[LNFact])-\u003e[Rule b]-\u003e[(a,[Rule b])]",
        "package": "tamarin-prover-theory",
        "partial": "Abstractly",
        "signature": "([Equal LNFact]-\u003e[LNSubstVFresh])-\u003es-\u003e(LNFact-\u003es-\u003es)-\u003e(s-\u003e[LNFact])-\u003e[Rule i]-\u003e[(s,[Rule i])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:partialEvaluation",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete partial evaluator activated with flag: --partial-evaluation\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.AbstractInterpretation",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EvaluationStyle -\u003e [ProtoRuleE] -\u003e WithMaude (Set LNFact, [ProtoRuleE])",
        "fct-source": "src/Theory-Tools-AbstractInterpretation.html#partialEvaluation",
        "fct-type": "function",
        "title": "partialEvaluation"
      },
      "index": {
        "description": "Concrete partial evaluator activated with flag partial-evaluation",
        "hierarchy": "Theory Tools AbstractInterpretation",
        "module": "Theory.Tools.AbstractInterpretation",
        "name": "partialEvaluation",
        "normalized": "EvaluationStyle-\u003e[ProtoRuleE]-\u003eWithMaude(Set LNFact,[ProtoRuleE])",
        "package": "tamarin-prover-theory",
        "partial": "Evaluation",
        "signature": "EvaluationStyle-\u003e[ProtoRuleE]-\u003eWithMaude(Set LNFact,[ProtoRuleE])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for reasoning with and about disjunctions of substitutions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Tools-EquationStore.html",
        "fct-type": "module",
        "title": "EquationStore"
      },
      "index": {
        "description": "Support for reasoning with and about disjunctions of substitutions",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "EquationStore",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Equation Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#t:EqStore",
      "description": {
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory-Tools-EquationStore.html#EqStore",
        "fct-type": "data",
        "title": "EqStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "EqStore",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Eq Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#t:SplitId",
      "description": {
        "fct-descr": "\u003cp\u003eIndex of disjunction in equation store\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "newtype",
        "fct-source": "src/Theory-Tools-EquationStore.html#SplitId",
        "fct-type": "newtype",
        "title": "SplitId"
      },
      "index": {
        "description": "Index of disjunction in equation store",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "SplitId",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Split Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:EqStore",
      "description": {
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore",
        "fct-source": "src/Theory-Tools-EquationStore.html#EqStore",
        "fct-type": "function",
        "title": "EqStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "EqStore",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Eq Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:SplitId",
      "description": {
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SplitId",
        "fct-source": "src/Theory-Tools-EquationStore.html#SplitId",
        "fct-type": "function",
        "title": "SplitId"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "SplitId",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Split Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:_eqsConj",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Conj (SplitId, Set LNSubstVFresh)",
        "fct-source": "src/Theory-Tools-EquationStore.html#EqStore",
        "fct-type": "function",
        "title": "_eqsConj"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "_eqsConj",
        "normalized": "Conj(SplitId,Set LNSubstVFresh)",
        "package": "tamarin-prover-theory",
        "partial": "Conj",
        "signature": "Conj(SplitId,Set LNSubstVFresh)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:_eqsNextSplitId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "SplitId",
        "fct-source": "src/Theory-Tools-EquationStore.html#EqStore",
        "fct-type": "function",
        "title": "_eqsNextSplitId"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "_eqsNextSplitId",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Next Split Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:_eqsSubst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNSubst",
        "fct-source": "src/Theory-Tools-EquationStore.html#EqStore",
        "fct-type": "function",
        "title": "_eqsSubst"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "_eqsSubst",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:addDisj",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a disjunction to the equation store at the beginning\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore -\u003e Set LNSubstVFresh -\u003e (EqStore, SplitId)",
        "fct-source": "src/Theory-Tools-EquationStore.html#addDisj",
        "fct-type": "function",
        "title": "addDisj"
      },
      "index": {
        "description": "Add disjunction to the equation store at the beginning",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "addDisj",
        "normalized": "EqStore-\u003eSet LNSubstVFresh-\u003e(EqStore,SplitId)",
        "package": "tamarin-prover-theory",
        "partial": "Disj",
        "signature": "EqStore-\u003eSet LNSubstVFresh-\u003e(EqStore,SplitId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:addEqs",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a list of term equalities to the equation store. Returns the split\n identifier of the disjunction in resulting equation store.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "MaudeHandle -\u003e [Equal LNTerm] -\u003e EqStore -\u003e m (EqStore, Maybe SplitId)",
        "fct-source": "src/Theory-Tools-EquationStore.html#addEqs",
        "fct-type": "function",
        "title": "addEqs"
      },
      "index": {
        "description": "Add list of term equalities to the equation store Returns the split identifier of the disjunction in resulting equation store",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "addEqs",
        "normalized": "MaudeHandle-\u003e[Equal LNTerm]-\u003eEqStore-\u003ea(EqStore,Maybe SplitId)",
        "package": "tamarin-prover-theory",
        "partial": "Eqs",
        "signature": "MaudeHandle-\u003e[Equal LNTerm]-\u003eEqStore-\u003em(EqStore,Maybe SplitId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:addRuleVariants",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the given rule variants.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Disj LNSubstVFresh -\u003e EqStore -\u003e (EqStore, SplitId)",
        "fct-source": "src/Theory-Tools-EquationStore.html#addRuleVariants",
        "fct-type": "function",
        "title": "addRuleVariants"
      },
      "index": {
        "description": "Add the given rule variants",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "addRuleVariants",
        "normalized": "Disj LNSubstVFresh-\u003eEqStore-\u003e(EqStore,SplitId)",
        "package": "tamarin-prover-theory",
        "partial": "Rule Variants",
        "signature": "Disj LNSubstVFresh-\u003eEqStore-\u003e(EqStore,SplitId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:dropNameHintsBound",
      "description": {
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore -\u003e EqStore",
        "fct-source": "src/Theory-Tools-EquationStore.html#dropNameHintsBound",
        "fct-type": "function",
        "title": "dropNameHintsBound"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "dropNameHintsBound",
        "normalized": "EqStore-\u003eEqStore",
        "package": "tamarin-prover-theory",
        "partial": "Name Hints Bound",
        "signature": "EqStore-\u003eEqStore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:emptyEqStore",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eemptyEqStore\u003c/code\u003e is the empty equation store.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore",
        "fct-source": "src/Theory-Tools-EquationStore.html#emptyEqStore",
        "fct-type": "function",
        "title": "emptyEqStore"
      },
      "index": {
        "description": "emptyEqStore is the empty equation store",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "emptyEqStore",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Eq Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:eqsConj",
      "description": {
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr EqStore (Conj (SplitId, Set LNSubstVFresh))",
        "fct-source": "src/Theory-Tools-EquationStore.html#eqsConj",
        "fct-type": "function",
        "title": "eqsConj"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "eqsConj",
        "normalized": "Lens a EqStore(Conj(SplitId,Set LNSubstVFresh))",
        "package": "tamarin-prover-theory",
        "partial": "Conj",
        "signature": "Lens arr EqStore(Conj(SplitId,Set LNSubstVFresh))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:eqsIsFalse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003eEqStore\u003c/a\u003e\u003c/code\u003e is contradictory.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore -\u003e Bool",
        "fct-source": "src/Theory-Tools-EquationStore.html#eqsIsFalse",
        "fct-type": "function",
        "title": "eqsIsFalse"
      },
      "index": {
        "description": "True iff the EqStore is contradictory",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "eqsIsFalse",
        "normalized": "EqStore-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Is False",
        "signature": "EqStore-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:eqsSubst",
      "description": {
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr EqStore LNSubst",
        "fct-source": "src/Theory-Tools-EquationStore.html#eqsSubst",
        "fct-type": "function",
        "title": "eqsSubst"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "eqsSubst",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:falseEqConstrConj",
      "description": {
        "fct-descr": "\u003cp\u003eThe false conjunction. It is always identified with split number -1.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Conj (SplitId, Set LNSubstVFresh)",
        "fct-source": "src/Theory-Tools-EquationStore.html#falseEqConstrConj",
        "fct-type": "function",
        "title": "falseEqConstrConj"
      },
      "index": {
        "description": "The false conjunction It is always identified with split number",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "falseEqConstrConj",
        "normalized": "Conj(SplitId,Set LNSubstVFresh)",
        "package": "tamarin-prover-theory",
        "partial": "Eq Constr Conj",
        "signature": "Conj(SplitId,Set LNSubstVFresh)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:performSplit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eperformSplit eqs i\u003c/code\u003e performs a case-split on the first disjunction\n with the given \u003ccode\u003e\u003ca\u003eSplitId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore -\u003e SplitId -\u003e Maybe [EqStore]",
        "fct-source": "src/Theory-Tools-EquationStore.html#performSplit",
        "fct-type": "function",
        "title": "performSplit"
      },
      "index": {
        "description": "performSplit eqs performs case-split on the first disjunction with the given SplitId",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "performSplit",
        "normalized": "EqStore-\u003eSplitId-\u003eMaybe[EqStore]",
        "package": "tamarin-prover-theory",
        "partial": "Split",
        "signature": "EqStore-\u003eSplitId-\u003eMaybe[EqStore]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:prettyEqStore",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print an \u003ccode\u003e\u003ca\u003eEqStore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore -\u003e d",
        "fct-source": "src/Theory-Tools-EquationStore.html#prettyEqStore",
        "fct-type": "function",
        "title": "prettyEqStore"
      },
      "index": {
        "description": "Pretty print an EqStore",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "prettyEqStore",
        "normalized": "EqStore-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Eq Store",
        "signature": "EqStore-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:simp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esimp eqStore\u003c/code\u003e simplifies the equation store.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "MaudeHandle -\u003e (LNSubst -\u003e LNSubstVFresh -\u003e Bool) -\u003e EqStore -\u003e m EqStore",
        "fct-source": "src/Theory-Tools-EquationStore.html#simp",
        "fct-type": "function",
        "title": "simp"
      },
      "index": {
        "description": "simp eqStore simplifies the equation store",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "simp",
        "normalized": "MaudeHandle-\u003e(LNSubst-\u003eLNSubstVFresh-\u003eBool)-\u003eEqStore-\u003ea EqStore",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "MaudeHandle-\u003e(LNSubst-\u003eLNSubstVFresh-\u003eBool)-\u003eEqStore-\u003em EqStore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:simpDisjunction",
      "description": {
        "fct-descr": "\u003cp\u003eSimplify given disjunction via EqStore simplification. Obtains fresh\n   names for variables from the underlying \u003ccode\u003e\u003ca\u003eMonadFresh\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "MaudeHandle -\u003e (LNSubst -\u003e LNSubstVFresh -\u003e Bool) -\u003e Disj LNSubstVFresh -\u003e m (LNSubst, Maybe [LNSubstVFresh])",
        "fct-source": "src/Theory-Tools-EquationStore.html#simpDisjunction",
        "fct-type": "function",
        "title": "simpDisjunction"
      },
      "index": {
        "description": "Simplify given disjunction via EqStore simplification Obtains fresh names for variables from the underlying MonadFresh",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "simpDisjunction",
        "normalized": "MaudeHandle-\u003e(LNSubst-\u003eLNSubstVFresh-\u003eBool)-\u003eDisj LNSubstVFresh-\u003ea(LNSubst,Maybe[LNSubstVFresh])",
        "package": "tamarin-prover-theory",
        "partial": "Disjunction",
        "signature": "MaudeHandle-\u003e(LNSubst-\u003eLNSubstVFresh-\u003eBool)-\u003eDisj LNSubstVFresh-\u003em(LNSubst,Maybe[LNSubstVFresh])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:splitExists",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eSplitId\u003c/a\u003e\u003c/code\u003e is valid.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore -\u003e SplitId -\u003e Bool",
        "fct-source": "src/Theory-Tools-EquationStore.html#splitExists",
        "fct-type": "function",
        "title": "splitExists"
      },
      "index": {
        "description": "Returns True if the SplitId is valid",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "splitExists",
        "normalized": "EqStore-\u003eSplitId-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "Exists",
        "signature": "EqStore-\u003eSplitId-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:splitSize",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of cases for a given \u003ccode\u003e\u003ca\u003eSplitId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore -\u003e SplitId -\u003e Maybe Int",
        "fct-source": "src/Theory-Tools-EquationStore.html#splitSize",
        "fct-type": "function",
        "title": "splitSize"
      },
      "index": {
        "description": "Returns the number of cases for given SplitId",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "splitSize",
        "normalized": "EqStore-\u003eSplitId-\u003eMaybe Int",
        "package": "tamarin-prover-theory",
        "partial": "Size",
        "signature": "EqStore-\u003eSplitId-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:splits",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all \u003ccode\u003eSplitId\u003c/code\u003es valid for the given equation store\n sorted by the size of the disjunctions.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EqStore -\u003e [SplitId]",
        "fct-source": "src/Theory-Tools-EquationStore.html#splits",
        "fct-type": "function",
        "title": "splits"
      },
      "index": {
        "description": "Returns the list of all SplitId valid for the given equation store sorted by the size of the disjunctions",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "splits",
        "normalized": "EqStore-\u003e[SplitId]",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": "EqStore-\u003e[SplitId]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:unSplitId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory.Tools.EquationStore",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Integer",
        "fct-source": "src/Theory-Tools-EquationStore.html#SplitId",
        "fct-type": "function",
        "title": "unSplitId"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools EquationStore",
        "module": "Theory.Tools.EquationStore",
        "name": "unSplitId",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Split Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-InjectiveFactInstances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputate an under-approximation to the set of all facts with unique\n instances, i.e., fact whose instances never occur more than once in a\n state. We use this information to reason about protocols that exploit\n exclusivity of linear facts.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Tools.InjectiveFactInstances",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Tools-InjectiveFactInstances.html",
        "fct-type": "module",
        "title": "InjectiveFactInstances"
      },
      "index": {
        "description": "Computate an under-approximation to the set of all facts with unique instances i.e fact whose instances never occur more than once in state We use this information to reason about protocols that exploit exclusivity of linear facts",
        "hierarchy": "Theory Tools InjectiveFactInstances",
        "module": "Theory.Tools.InjectiveFactInstances",
        "name": "InjectiveFactInstances",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Injective Fact Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-InjectiveFactInstances.html#v:simpleInjectiveFactInstances",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a simple under-approximation to the set of facts with injective\n instances. A fact-tag is has injective instances, if there is no state of\n the protocol with more than one instance with the same term as a first\n argument of the fact-tag.\n\u003c/p\u003e\u003cp\u003eWe compute the under-approximation by checking that\n (1) the fact-tag is linear,\n (2) every introduction of such a fact-tag is protected by a Fr-fact of the\n     first term, and\n (3) every rule has at most one copy of this fact-tag in the conlcusion and\n     the first term arguments agree.\n\u003c/p\u003e\u003cp\u003eWe exclude facts that are not copied in a rule, as they are already handled\n properly by the naive backwards reasoning.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.InjectiveFactInstances",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[ProtoRuleE] -\u003e Set FactTag",
        "fct-source": "src/Theory-Tools-InjectiveFactInstances.html#simpleInjectiveFactInstances",
        "fct-type": "function",
        "title": "simpleInjectiveFactInstances"
      },
      "index": {
        "description": "Compute simple under-approximation to the set of facts with injective instances fact-tag is has injective instances if there is no state of the protocol with more than one instance with the same term as first argument of the fact-tag We compute the under-approximation by checking that the fact-tag is linear every introduction of such fact-tag is protected by Fr-fact of the first term and every rule has at most one copy of this fact-tag in the conlcusion and the first term arguments agree We exclude facts that are not copied in rule as they are already handled properly by the naive backwards reasoning",
        "hierarchy": "Theory Tools InjectiveFactInstances",
        "module": "Theory.Tools.InjectiveFactInstances",
        "name": "simpleInjectiveFactInstances",
        "normalized": "[ProtoRuleE]-\u003eSet FactTag",
        "package": "tamarin-prover-theory",
        "partial": "Injective Fact Instances",
        "signature": "[ProtoRuleE]-\u003eSet FactTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#",
      "description": {
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Tools-IntruderRules.html",
        "fct-type": "module",
        "title": "IntruderRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "IntruderRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Intruder Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:bpIntruderRules",
      "description": {
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "WithMaude [IntrRuleAC]",
        "fct-source": "src/Theory-Tools-IntruderRules.html#bpIntruderRules",
        "fct-type": "function",
        "title": "bpIntruderRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "bpIntruderRules",
        "normalized": "WithMaude[IntrRuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Intruder Rules",
        "signature": "WithMaude[IntrRuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:dhIntruderRules",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edhIntruderRules\u003c/code\u003e computes the intruder rules for DH\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "WithMaude [IntrRuleAC]",
        "fct-source": "src/Theory-Tools-IntruderRules.html#dhIntruderRules",
        "fct-type": "function",
        "title": "dhIntruderRules"
      },
      "index": {
        "description": "dhIntruderRules computes the intruder rules for DH",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "dhIntruderRules",
        "normalized": "WithMaude[IntrRuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Intruder Rules",
        "signature": "WithMaude[IntrRuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:isDEMapRule",
      "description": {
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Rule (RuleInfo t IntrRuleACInfo) -\u003e Bool",
        "fct-source": "src/Theory-Tools-IntruderRules.html#isDEMapRule",
        "fct-type": "function",
        "title": "isDEMapRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "isDEMapRule",
        "normalized": "Rule(RuleInfo a IntrRuleACInfo)-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "DEMap Rule",
        "signature": "Rule(RuleInfo t IntrRuleACInfo)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:isDExpRule",
      "description": {
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Rule (RuleInfo t IntrRuleACInfo) -\u003e Bool",
        "fct-source": "src/Theory-Tools-IntruderRules.html#isDExpRule",
        "fct-type": "function",
        "title": "isDExpRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "isDExpRule",
        "normalized": "Rule(RuleInfo a IntrRuleACInfo)-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "DExp Rule",
        "signature": "Rule(RuleInfo t IntrRuleACInfo)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:isDPMultRule",
      "description": {
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Rule (RuleInfo t IntrRuleACInfo) -\u003e Bool",
        "fct-source": "src/Theory-Tools-IntruderRules.html#isDPMultRule",
        "fct-type": "function",
        "title": "isDPMultRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "isDPMultRule",
        "normalized": "Rule(RuleInfo a IntrRuleACInfo)-\u003eBool",
        "package": "tamarin-prover-theory",
        "partial": "DPMult Rule",
        "signature": "Rule(RuleInfo t IntrRuleACInfo)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:mkDUnionRule",
      "description": {
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[LNTerm] -\u003e LNTerm -\u003e IntrRuleAC",
        "fct-source": "src/Theory-Tools-IntruderRules.html#mkDUnionRule",
        "fct-type": "function",
        "title": "mkDUnionRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "mkDUnionRule",
        "normalized": "[LNTerm]-\u003eLNTerm-\u003eIntrRuleAC",
        "package": "tamarin-prover-theory",
        "partial": "DUnion Rule",
        "signature": "[LNTerm]-\u003eLNTerm-\u003eIntrRuleAC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:multisetIntruderRules",
      "description": {
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[IntrRuleAC]",
        "fct-source": "src/Theory-Tools-IntruderRules.html#multisetIntruderRules",
        "fct-type": "function",
        "title": "multisetIntruderRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "multisetIntruderRules",
        "normalized": "[IntrRuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Intruder Rules",
        "signature": "[IntrRuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:specialIntruderRules",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003especialIntruderRules\u003c/code\u003e returns the special intruder rules that are\n   included independently of the message theory\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[IntrRuleAC]",
        "fct-source": "src/Theory-Tools-IntruderRules.html#specialIntruderRules",
        "fct-type": "function",
        "title": "specialIntruderRules"
      },
      "index": {
        "description": "specialIntruderRules returns the special intruder rules that are included independently of the message theory",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "specialIntruderRules",
        "normalized": "[IntrRuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Intruder Rules",
        "signature": "[IntrRuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:subtermIntruderRules",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esubtermIntruderRules maudeSig\u003c/code\u003e returns the set of intruder rules for\n   the subterm (not Xor, DH, and MSet) part of the given signature.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.IntruderRules",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "MaudeSig -\u003e [IntrRuleAC]",
        "fct-source": "src/Theory-Tools-IntruderRules.html#subtermIntruderRules",
        "fct-type": "function",
        "title": "subtermIntruderRules"
      },
      "index": {
        "description": "subtermIntruderRules maudeSig returns the set of intruder rules for the subterm not Xor DH and MSet part of the given signature",
        "hierarchy": "Theory Tools IntruderRules",
        "module": "Theory.Tools.IntruderRules",
        "name": "subtermIntruderRules",
        "normalized": "MaudeSig-\u003e[IntrRuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Intruder Rules",
        "signature": "MaudeSig-\u003e[IntrRuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-LoopBreakers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputate the loop-breakers in the premise-conclusion graph of a set of\n multiset rewriting rules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Tools.LoopBreakers",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Tools-LoopBreakers.html",
        "fct-type": "module",
        "title": "LoopBreakers"
      },
      "index": {
        "description": "Computate the loop-breakers in the premise-conclusion graph of set of multiset rewriting rules",
        "hierarchy": "Theory Tools LoopBreakers",
        "module": "Theory.Tools.LoopBreakers",
        "name": "LoopBreakers",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Loop Breakers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-LoopBreakers.html#v:useAutoLoopBreakersAC",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all loop-breaker information with loop-breakers computed\n automatically from the dataflow relation \u003ccode\u003edataflowRelAC\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.LoopBreakers",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(a -\u003e [(PremIdx, LNFact)])-\u003e (a -\u003e [(ConcIdx, LNFact)])-\u003e (a -\u003e [LNSubstVFresh])-\u003e ([PremIdx] -\u003e a -\u003e a)-\u003e [a]-\u003e WithMaude ([a], Relation (a, PremIdx), [(a, PremIdx)])",
        "fct-type": "function",
        "title": "useAutoLoopBreakersAC"
      },
      "index": {
        "description": "Replace all loop-breaker information with loop-breakers computed automatically from the dataflow relation dataflowRelAC",
        "hierarchy": "Theory Tools LoopBreakers",
        "module": "Theory.Tools.LoopBreakers",
        "name": "useAutoLoopBreakersAC",
        "normalized": "(a-\u003e[(PremIdx,LNFact)])-\u003e(a-\u003e[(ConcIdx,LNFact)])-\u003e(a-\u003e[LNSubstVFresh])-\u003e([PremIdx]-\u003ea-\u003ea)-\u003e[a]-\u003eWithMaude([a],Relation(a,PremIdx),[(a,PremIdx)])",
        "package": "tamarin-prover-theory",
        "partial": "Auto Loop Breakers AC",
        "signature": "(a-\u003e[(PremIdx,LNFact)])-\u003e(a-\u003e[(ConcIdx,LNFact)])-\u003e(a-\u003e[LNSubstVFresh])-\u003e([PremIdx]-\u003ea-\u003ea)-\u003e[a]-\u003eWithMaude([a],Relation(a,PremIdx),[(a,PremIdx)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-RuleVariants.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariants of protocol rules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory.Tools.RuleVariants",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Tools-RuleVariants.html",
        "fct-type": "module",
        "title": "RuleVariants"
      },
      "index": {
        "description": "Variants of protocol rules",
        "hierarchy": "Theory Tools RuleVariants",
        "module": "Theory.Tools.RuleVariants",
        "name": "RuleVariants",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule Variants",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-RuleVariants.html#v:computeVariantsCached",
      "description": {
        "fct-module": "Theory.Tools.RuleVariants",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNTerm -\u003e MaudeHandle -\u003e [LNSubstVFresh]",
        "fct-source": "src/Theory-Tools-RuleVariants.html#computeVariantsCached",
        "fct-type": "function",
        "title": "computeVariantsCached"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools RuleVariants",
        "module": "Theory.Tools.RuleVariants",
        "name": "computeVariantsCached",
        "normalized": "LNTerm-\u003eMaudeHandle-\u003e[LNSubstVFresh]",
        "package": "tamarin-prover-theory",
        "partial": "Variants Cached",
        "signature": "LNTerm-\u003eMaudeHandle-\u003e[LNSubstVFresh]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-RuleVariants.html#v:tmpdir",
      "description": {
        "fct-module": "Theory.Tools.RuleVariants",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FilePath",
        "fct-source": "src/Theory-Tools-RuleVariants.html#tmpdir",
        "fct-type": "function",
        "title": "tmpdir"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools RuleVariants",
        "module": "Theory.Tools.RuleVariants",
        "name": "tmpdir",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-RuleVariants.html#v:variantsProtoRule",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the variants of a protocol rule.\n   1. Abstract away terms in facts with variables.\n   2. Compute variants of RHSs of equations.\n   3. Apply variant substitutions to equations\n      to obtain DNF of equations.\n   4. Simplify rule.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.RuleVariants",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "MaudeHandle -\u003e ProtoRuleE -\u003e ProtoRuleAC",
        "fct-source": "src/Theory-Tools-RuleVariants.html#variantsProtoRule",
        "fct-type": "function",
        "title": "variantsProtoRule"
      },
      "index": {
        "description": "Compute the variants of protocol rule Abstract away terms in facts with variables Compute variants of RHSs of equations Apply variant substitutions to equations to obtain DNF of equations Simplify rule",
        "hierarchy": "Theory Tools RuleVariants",
        "module": "Theory.Tools.RuleVariants",
        "name": "variantsProtoRule",
        "normalized": "MaudeHandle-\u003eProtoRuleE-\u003eProtoRuleAC",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule",
        "signature": "MaudeHandle-\u003eProtoRuleE-\u003eProtoRuleAC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWellformedness checks for intruder variants, protocol rules, and\n properties.\n\u003c/p\u003e\u003cp\u003eThe following checks are/should be performed\n (FIXME: compare the list below to what is really implemented.)\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eprotocol rules\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003col\u003e\u003cli\u003e no fresh names in rule. (protocol cond. 1)\n     ==\u003e freshNamesReport\n\u003c/li\u003e\u003cli\u003e no Out or K facts in premises. (protocol cond. 2)\n     ==\u003e factReports\n\u003c/li\u003e\u003cli\u003e no Fr, In, or K facts in conclusions. (protocol cond. 3)\n     ==\u003e factReports\n\u003c/li\u003e\u003cli\u003e vars(rhs) subset of vars(lhs) u V_Pub\n     ==\u003e multRestrictedReport\n\u003c/li\u003e\u003cli\u003e lhs does not contain reducible function symbols (*-restricted (a))\n     ==\u003e multRestrictedReport\n\u003c/li\u003e\u003cli\u003e rhs does not contain * (*-restricted (b))\n     ==\u003e multRestrictedReport\n\u003c/li\u003e\u003cli\u003e all facts are used with the same arity.\n\u003c/li\u003e\u003cli\u003e fr, in, and out, facts are used with arity 1.\n\u003c/li\u003e\u003cli\u003e fr facts are used with a variable of sort msg or sort fresh\n\u003c/li\u003e\u003cli\u003e fresh facts of the same rule contain different variables. [TODO]\n\u003c/li\u003e\u003cli\u003e no protocol fact uses a reserved name =\u003e\n        [TODO] change parser to ensure this and pretty printer to show this.\n\u003c/li\u003e\u003c/ol\u003e\u003cdl\u003e\u003cdt\u003esecurity properties\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003col\u003e\u003cli\u003e all facts occur with the same arity in the action of some\n        protocol rule.\n\u003c/li\u003e\u003cli\u003e no node variable is used in a message position and vice versa.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Theory.Tools.Wellformedness",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory-Tools-Wellformedness.html",
        "fct-type": "module",
        "title": "Wellformedness"
      },
      "index": {
        "description": "Wellformedness checks for intruder variants protocol rules and properties The following checks are should be performed FIXME compare the list below to what is really implemented protocol rules no fresh names in rule protocol cond freshNamesReport no Out or facts in premises protocol cond factReports no Fr In or facts in conclusions protocol cond factReports vars rhs subset of vars lhs Pub multRestrictedReport lhs does not contain reducible function symbols restricted multRestrictedReport rhs does not contain restricted multRestrictedReport all facts are used with the same arity fr in and out facts are used with arity fr facts are used with variable of sort msg or sort fresh fresh facts of the same rule contain different variables TODO no protocol fact uses reserved name TODO change parser to ensure this and pretty printer to show this security properties all facts occur with the same arity in the action of some protocol rule no node variable is used in message position and vice versa",
        "hierarchy": "Theory Tools Wellformedness",
        "module": "Theory.Tools.Wellformedness",
        "name": "Wellformedness",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Wellformedness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#t:WfErrorReport",
      "description": {
        "fct-module": "Theory.Tools.Wellformedness",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory-Tools-Wellformedness.html#WfErrorReport",
        "fct-type": "type",
        "title": "WfErrorReport"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools Wellformedness",
        "module": "Theory.Tools.Wellformedness",
        "name": "WfErrorReport",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Wf Error Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#v:checkWellformedness",
      "description": {
        "fct-descr": "\u003cp\u003eAll 2-multicombinations of a list.\n multicombine2 :: [a] -\u003e [(a,a)]\n multicombine2 xs0 = do (x,xs) \u003ca\u003ezip xs0 $ tails xs0; (,) x \u003c$\u003c/a\u003e xs\n\u003c/p\u003e\u003cp\u003eReturns a list of errors, if there are any.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.Wellformedness",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "OpenTheory -\u003e WfErrorReport",
        "fct-source": "src/Theory-Tools-Wellformedness.html#checkWellformedness",
        "fct-type": "function",
        "title": "checkWellformedness"
      },
      "index": {
        "description": "All multicombinations of list multicombine2 multicombine2 xs0 do xs zip xs0 tails xs0 xs Returns list of errors if there are any",
        "hierarchy": "Theory Tools Wellformedness",
        "module": "Theory.Tools.Wellformedness",
        "name": "checkWellformedness",
        "normalized": "OpenTheory-\u003eWfErrorReport",
        "package": "tamarin-prover-theory",
        "partial": "Wellformedness",
        "signature": "OpenTheory-\u003eWfErrorReport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#v:noteWellformedness",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a note to the end of the theory, if it is not well-formed.\n\u003c/p\u003e",
        "fct-module": "Theory.Tools.Wellformedness",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "WfErrorReport -\u003e OpenTheory -\u003e OpenTheory",
        "fct-source": "src/Theory-Tools-Wellformedness.html#noteWellformedness",
        "fct-type": "function",
        "title": "noteWellformedness"
      },
      "index": {
        "description": "Adds note to the end of the theory if it is not well-formed",
        "hierarchy": "Theory Tools Wellformedness",
        "module": "Theory.Tools.Wellformedness",
        "name": "noteWellformedness",
        "normalized": "WfErrorReport-\u003eOpenTheory-\u003eOpenTheory",
        "package": "tamarin-prover-theory",
        "partial": "Wellformedness",
        "signature": "WfErrorReport-\u003eOpenTheory-\u003eOpenTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#v:prettyWfErrorReport",
      "description": {
        "fct-module": "Theory.Tools.Wellformedness",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "WfErrorReport -\u003e Doc",
        "fct-source": "src/Theory-Tools-Wellformedness.html#prettyWfErrorReport",
        "fct-type": "function",
        "title": "prettyWfErrorReport"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory Tools Wellformedness",
        "module": "Theory.Tools.Wellformedness",
        "name": "prettyWfErrorReport",
        "normalized": "WfErrorReport-\u003eDoc",
        "package": "tamarin-prover-theory",
        "partial": "Wf Error Report",
        "signature": "WfErrorReport-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTheory datatype and transformations on it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "module",
        "fct-source": "src/Theory.html",
        "fct-type": "module",
        "title": "Theory"
      },
      "index": {
        "description": "Theory datatype and transformations on it",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "Theory",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Theory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:Axiom",
      "description": {
        "fct-descr": "\u003cp\u003eAn axiom describes a property that must hold for all traces. Axioms are\n always used as lemmas in proofs.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory.html#Axiom",
        "fct-type": "data",
        "title": "Axiom"
      },
      "index": {
        "description": "An axiom describes property that must hold for all traces Axioms are always used as lemmas in proofs",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "Axiom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Axiom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:ClosedProtoRule",
      "description": {
        "fct-descr": "\u003cp\u003eA closed proto rule lists its original rule modulo E, the corresponding\n variant modulo AC, and if required the assertion soundness proof.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory.html#ClosedProtoRule",
        "fct-type": "data",
        "title": "ClosedProtoRule"
      },
      "index": {
        "description": "closed proto rule lists its original rule modulo the corresponding variant modulo AC and if required the assertion soundness proof",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "ClosedProtoRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Closed Proto Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:ClosedRuleCache",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory.html#ClosedRuleCache",
        "fct-type": "data",
        "title": "ClosedRuleCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "ClosedRuleCache",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Closed Rule Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:ClosedTheory",
      "description": {
        "fct-descr": "\u003cp\u003eClosed theories can be proven. Invariants:\n     1. Lemma names are unique\n     2. All proof steps with annotated sequents are sound with respect to the\n        closed rule set of the theory.\n     3. Maude is running under the given handle.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory.html#ClosedTheory",
        "fct-type": "type",
        "title": "ClosedTheory"
      },
      "index": {
        "description": "Closed theories can be proven Invariants Lemma names are unique All proof steps with annotated sequents are sound with respect to the closed rule set of the theory Maude is running under the given handle",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "ClosedTheory",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Closed Theory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:Lemma",
      "description": {
        "fct-descr": "\u003cp\u003eA lemma describes a property that holds in the context of a theory\n together with a proof of its correctness.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory.html#Lemma",
        "fct-type": "data",
        "title": "Lemma"
      },
      "index": {
        "description": "lemma describes property that holds in the context of theory together with proof of its correctness",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "Lemma",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Lemma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:LemmaAttribute",
      "description": {
        "fct-descr": "\u003cp\u003eAn attribute for a \u003ccode\u003e\u003ca\u003eLemma\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory.html#LemmaAttribute",
        "fct-type": "data",
        "title": "LemmaAttribute"
      },
      "index": {
        "description": "An attribute for Lemma",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "LemmaAttribute",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Lemma Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:OpenTheory",
      "description": {
        "fct-descr": "\u003cp\u003eOpen theories can be extended. Invariants:\n   1. Lemma names are unique.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory.html#OpenTheory",
        "fct-type": "type",
        "title": "OpenTheory"
      },
      "index": {
        "description": "Open theories can be extended Invariants Lemma names are unique",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "OpenTheory",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Open Theory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:ProofSkeleton",
      "description": {
        "fct-descr": "\u003cp\u003eProof skeletons are used to represent proofs in open theories.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "type",
        "fct-source": "src/Theory.html#ProofSkeleton",
        "fct-type": "type",
        "title": "ProofSkeleton"
      },
      "index": {
        "description": "Proof skeletons are used to represent proofs in open theories",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "ProofSkeleton",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof Skeleton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:Theory",
      "description": {
        "fct-descr": "\u003cp\u003eA theory contains a single set of rewriting rules modeling a protocol\n and the lemmas that\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory.html#Theory",
        "fct-type": "data",
        "title": "Theory"
      },
      "index": {
        "description": "theory contains single set of rewriting rules modeling protocol and the lemmas that",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "Theory",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Theory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:TheoryItem",
      "description": {
        "fct-descr": "\u003cp\u003eA theory item built over the given rule type.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory.html#TheoryItem",
        "fct-type": "data",
        "title": "TheoryItem"
      },
      "index": {
        "description": "theory item built over the given rule type",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "TheoryItem",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Theory Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:TraceQuantifier",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTraceQuantifier\u003c/a\u003e\u003c/code\u003e stating whether we check satisfiability of validity.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "data",
        "fct-source": "src/Theory.html#TraceQuantifier",
        "fct-type": "data",
        "title": "TraceQuantifier"
      },
      "index": {
        "description": "TraceQuantifier stating whether we check satisfiability of validity",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "TraceQuantifier",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Trace Quantifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:AllTraces",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "AllTraces",
        "fct-source": "src/Theory.html#TraceQuantifier",
        "fct-type": "function",
        "title": "AllTraces"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "AllTraces",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "All Traces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:Axiom",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Axiom",
        "fct-source": "src/Theory.html#Axiom",
        "fct-type": "function",
        "title": "Axiom"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "Axiom",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Axiom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:AxiomItem",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "AxiomItem Axiom",
        "fct-source": "src/Theory.html#TheoryItem",
        "fct-type": "function",
        "title": "AxiomItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "AxiomItem",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Axiom Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:ClosedProtoRule",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedProtoRule",
        "fct-source": "src/Theory.html#ClosedProtoRule",
        "fct-type": "function",
        "title": "ClosedProtoRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "ClosedProtoRule",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Closed Proto Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:ClosedRuleCache",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedRuleCache",
        "fct-source": "src/Theory.html#ClosedRuleCache",
        "fct-type": "function",
        "title": "ClosedRuleCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "ClosedRuleCache",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Closed Rule Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:ExistsTrace",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ExistsTrace",
        "fct-source": "src/Theory.html#TraceQuantifier",
        "fct-type": "function",
        "title": "ExistsTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "ExistsTrace",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Exists Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:InvariantLemma",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "InvariantLemma",
        "fct-source": "src/Theory.html#LemmaAttribute",
        "fct-type": "function",
        "title": "InvariantLemma"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "InvariantLemma",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Invariant Lemma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:LemmaItem",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LemmaItem (Lemma p)",
        "fct-source": "src/Theory.html#TheoryItem",
        "fct-type": "function",
        "title": "LemmaItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "LemmaItem",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Lemma Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:ReuseLemma",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ReuseLemma",
        "fct-source": "src/Theory.html#LemmaAttribute",
        "fct-type": "function",
        "title": "ReuseLemma"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "ReuseLemma",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Reuse Lemma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:RuleItem",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "RuleItem r",
        "fct-source": "src/Theory.html#TheoryItem",
        "fct-type": "function",
        "title": "RuleItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "RuleItem",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:TextItem",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "TextItem FormalComment",
        "fct-source": "src/Theory.html#TheoryItem",
        "fct-type": "function",
        "title": "TextItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "TextItem",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Text Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:Theory",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Theory",
        "fct-source": "src/Theory.html#Theory",
        "fct-type": "function",
        "title": "Theory"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "Theory",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Theory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:TypingLemma",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "TypingLemma",
        "fct-source": "src/Theory.html#LemmaAttribute",
        "fct-type": "function",
        "title": "TypingLemma"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "TypingLemma",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Typing Lemma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_axFormula",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LNFormula",
        "fct-source": "src/Theory.html#Axiom",
        "fct-type": "function",
        "title": "_axFormula"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_axFormula",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Formula",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_axName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String",
        "fct-source": "src/Theory.html#Axiom",
        "fct-type": "function",
        "title": "_axName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_axName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_cprRuleAC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleAC",
        "fct-source": "src/Theory.html#ClosedProtoRule",
        "fct-type": "function",
        "title": "_cprRuleAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_cprRuleAC",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule AC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_cprRuleE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleE",
        "fct-source": "src/Theory.html#ClosedProtoRule",
        "fct-type": "function",
        "title": "_cprRuleE"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_cprRuleE",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_crcInjectiveFactInsts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Set FactTag",
        "fct-source": "src/Theory.html#ClosedRuleCache",
        "fct-type": "function",
        "title": "_crcInjectiveFactInsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_crcInjectiveFactInsts",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Injective Fact Insts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_crcRules",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClassifiedRules",
        "fct-source": "src/Theory.html#ClosedRuleCache",
        "fct-type": "function",
        "title": "_crcRules"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_crcRules",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_crcTypedCaseDists",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[CaseDistinction]",
        "fct-source": "src/Theory.html#ClosedRuleCache",
        "fct-type": "function",
        "title": "_crcTypedCaseDists"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_crcTypedCaseDists",
        "normalized": "[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "Typed Case Dists",
        "signature": "[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_crcUntypedCaseDists",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[CaseDistinction]",
        "fct-source": "src/Theory.html#ClosedRuleCache",
        "fct-type": "function",
        "title": "_crcUntypedCaseDists"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_crcUntypedCaseDists",
        "normalized": "[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "Untyped Case Dists",
        "signature": "[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_thyCache",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "c",
        "fct-source": "src/Theory.html#Theory",
        "fct-type": "function",
        "title": "_thyCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_thyCache",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_thyItems",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[TheoryItem r p]",
        "fct-source": "src/Theory.html#Theory",
        "fct-type": "function",
        "title": "_thyItems"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_thyItems",
        "normalized": "[TheoryItem a b]",
        "package": "tamarin-prover-theory",
        "partial": "Items",
        "signature": "[TheoryItem r p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_thyName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String",
        "fct-source": "src/Theory.html#Theory",
        "fct-type": "function",
        "title": "_thyName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_thyName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_thySignature",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "sig",
        "fct-source": "src/Theory.html#Theory",
        "fct-type": "function",
        "title": "_thySignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "_thySignature",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addAxiom",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new axiom. Fails, if axiom with the same name exists.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Axiom -\u003e Theory sig c r p -\u003e Maybe (Theory sig c r p)",
        "fct-source": "src/Theory.html#addAxiom",
        "fct-type": "function",
        "title": "addAxiom"
      },
      "index": {
        "description": "Add new axiom Fails if axiom with the same name exists",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "addAxiom",
        "normalized": "Axiom-\u003eTheory a b c d-\u003eMaybe(Theory a b c d)",
        "package": "tamarin-prover-theory",
        "partial": "Axiom",
        "signature": "Axiom-\u003eTheory sig c r p-\u003eMaybe(Theory sig c r p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addComment",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a comment to the theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Doc -\u003e Theory sig c r p -\u003e Theory sig c r p",
        "fct-source": "src/Theory.html#addComment",
        "fct-type": "function",
        "title": "addComment"
      },
      "index": {
        "description": "Add comment to the theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "addComment",
        "normalized": "Doc-\u003eTheory a b c d-\u003eTheory a b c d",
        "package": "tamarin-prover-theory",
        "partial": "Comment",
        "signature": "Doc-\u003eTheory sig c r p-\u003eTheory sig c r p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addFormalComment",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FormalComment -\u003e Theory sig c r p -\u003e Theory sig c r p",
        "fct-source": "src/Theory.html#addFormalComment",
        "fct-type": "function",
        "title": "addFormalComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "addFormalComment",
        "normalized": "FormalComment-\u003eTheory a b c d-\u003eTheory a b c d",
        "package": "tamarin-prover-theory",
        "partial": "Formal Comment",
        "signature": "FormalComment-\u003eTheory sig c r p-\u003eTheory sig c r p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addIntrRuleACs",
      "description": {
        "fct-descr": "\u003cp\u003eAdd intruder proof rules.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[IntrRuleAC] -\u003e OpenTheory -\u003e OpenTheory",
        "fct-source": "src/Theory.html#addIntrRuleACs",
        "fct-type": "function",
        "title": "addIntrRuleACs"
      },
      "index": {
        "description": "Add intruder proof rules",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "addIntrRuleACs",
        "normalized": "[IntrRuleAC]-\u003eOpenTheory-\u003eOpenTheory",
        "package": "tamarin-prover-theory",
        "partial": "Intr Rule ACs",
        "signature": "[IntrRuleAC]-\u003eOpenTheory-\u003eOpenTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addLemma",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new lemma. Fails, if a lemma with the same name exists.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lemma p -\u003e Theory sig c r p -\u003e Maybe (Theory sig c r p)",
        "fct-source": "src/Theory.html#addLemma",
        "fct-type": "function",
        "title": "addLemma"
      },
      "index": {
        "description": "Add new lemma Fails if lemma with the same name exists",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "addLemma",
        "normalized": "Lemma a-\u003eTheory b c d a-\u003eMaybe(Theory b c d a)",
        "package": "tamarin-prover-theory",
        "partial": "Lemma",
        "signature": "Lemma p-\u003eTheory sig c r p-\u003eMaybe(Theory sig c r p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addProtoRule",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new protocol rules. Fails, if a protocol rule with the same name\n exists.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ProtoRuleE -\u003e OpenTheory -\u003e Maybe OpenTheory",
        "fct-source": "src/Theory.html#addProtoRule",
        "fct-type": "function",
        "title": "addProtoRule"
      },
      "index": {
        "description": "Add new protocol rules Fails if protocol rule with the same name exists",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "addProtoRule",
        "normalized": "ProtoRuleE-\u003eOpenTheory-\u003eMaybe OpenTheory",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule",
        "signature": "ProtoRuleE-\u003eOpenTheory-\u003eMaybe OpenTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addStringComment",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a comment represented as a string to the theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e Theory sig c r p -\u003e Theory sig c r p",
        "fct-source": "src/Theory.html#addStringComment",
        "fct-type": "function",
        "title": "addStringComment"
      },
      "index": {
        "description": "Add comment represented as string to the theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "addStringComment",
        "normalized": "String-\u003eTheory a b c d-\u003eTheory a b c d",
        "package": "tamarin-prover-theory",
        "partial": "String Comment",
        "signature": "String-\u003eTheory sig c r p-\u003eTheory sig c r p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:applyPartialEvaluation",
      "description": {
        "fct-descr": "\u003cp\u003eApply partial evaluation.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "EvaluationStyle -\u003e ClosedTheory -\u003e ClosedTheory",
        "fct-source": "src/Theory.html#applyPartialEvaluation",
        "fct-type": "function",
        "title": "applyPartialEvaluation"
      },
      "index": {
        "description": "Apply partial evaluation",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "applyPartialEvaluation",
        "normalized": "EvaluationStyle-\u003eClosedTheory-\u003eClosedTheory",
        "package": "tamarin-prover-theory",
        "partial": "Partial Evaluation",
        "signature": "EvaluationStyle-\u003eClosedTheory-\u003eClosedTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:axFormula",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr Axiom LNFormula",
        "fct-source": "src/Theory.html#axFormula",
        "fct-type": "function",
        "title": "axFormula"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "axFormula",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Formula",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:axName",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr Axiom String",
        "fct-source": "src/Theory.html#axName",
        "fct-type": "function",
        "title": "axName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "axName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:closeTheory",
      "description": {
        "fct-descr": "\u003cp\u003eClose a theory by closing its associated rule set and checking the proof\n skeletons and caching AC variants as well as precomputed case distinctions.\n\u003c/p\u003e\u003cp\u003eThis function initializes the relation to the Maude process with the\n correct signature. This is the right place to do that because in a closed\n theory the signature may not change any longer.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "FilePath-\u003e OpenTheory-\u003e IO ClosedTheory",
        "fct-type": "function",
        "title": "closeTheory"
      },
      "index": {
        "description": "Close theory by closing its associated rule set and checking the proof skeletons and caching AC variants as well as precomputed case distinctions This function initializes the relation to the Maude process with the correct signature This is the right place to do that because in closed theory the signature may not change any longer",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "closeTheory",
        "normalized": "FilePath-\u003eOpenTheory-\u003eIO ClosedTheory",
        "package": "tamarin-prover-theory",
        "partial": "Theory",
        "signature": "FilePath-\u003eOpenTheory-\u003eIO ClosedTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:cprRuleE",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr ClosedProtoRule ProtoRuleE",
        "fct-source": "src/Theory.html#cprRuleE",
        "fct-type": "function",
        "title": "cprRuleE"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "cprRuleE",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:defaultOpenTheory",
      "description": {
        "fct-descr": "\u003cp\u003eDefault theory\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "OpenTheory",
        "fct-source": "src/Theory.html#defaultOpenTheory",
        "fct-type": "function",
        "title": "defaultOpenTheory"
      },
      "index": {
        "description": "Default theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "defaultOpenTheory",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Open Theory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getCaseDistinction",
      "description": {
        "fct-descr": "\u003cp\u003eThe precomputed case distinctions.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "CaseDistKind -\u003e ClosedTheory -\u003e [CaseDistinction]",
        "fct-source": "src/Theory.html#getCaseDistinction",
        "fct-type": "function",
        "title": "getCaseDistinction"
      },
      "index": {
        "description": "The precomputed case distinctions",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "getCaseDistinction",
        "normalized": "CaseDistKind-\u003eClosedTheory-\u003e[CaseDistinction]",
        "package": "tamarin-prover-theory",
        "partial": "Case Distinction",
        "signature": "CaseDistKind-\u003eClosedTheory-\u003e[CaseDistinction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getClassifiedRules",
      "description": {
        "fct-descr": "\u003cp\u003eThe classified set of rules modulo AC in this theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedTheory -\u003e ClassifiedRules",
        "fct-source": "src/Theory.html#getClassifiedRules",
        "fct-type": "function",
        "title": "getClassifiedRules"
      },
      "index": {
        "description": "The classified set of rules modulo AC in this theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "getClassifiedRules",
        "normalized": "ClosedTheory-\u003eClassifiedRules",
        "package": "tamarin-prover-theory",
        "partial": "Classified Rules",
        "signature": "ClosedTheory-\u003eClassifiedRules"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getInjectiveFactInsts",
      "description": {
        "fct-descr": "\u003cp\u003eThe facts with injective instances in this theory\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedTheory -\u003e Set FactTag",
        "fct-source": "src/Theory.html#getInjectiveFactInsts",
        "fct-type": "function",
        "title": "getInjectiveFactInsts"
      },
      "index": {
        "description": "The facts with injective instances in this theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "getInjectiveFactInsts",
        "normalized": "ClosedTheory-\u003eSet FactTag",
        "package": "tamarin-prover-theory",
        "partial": "Injective Fact Insts",
        "signature": "ClosedTheory-\u003eSet FactTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getIntrVariants",
      "description": {
        "fct-descr": "\u003cp\u003eThe variants of the intruder rules.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedTheory -\u003e [IntrRuleAC]",
        "fct-source": "src/Theory.html#getIntrVariants",
        "fct-type": "function",
        "title": "getIntrVariants"
      },
      "index": {
        "description": "The variants of the intruder rules",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "getIntrVariants",
        "normalized": "ClosedTheory-\u003e[IntrRuleAC]",
        "package": "tamarin-prover-theory",
        "partial": "Intr Variants",
        "signature": "ClosedTheory-\u003e[IntrRuleAC]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getLemmas",
      "description": {
        "fct-descr": "\u003cp\u003eAll lemmas.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedTheory -\u003e [Lemma IncrementalProof]",
        "fct-source": "src/Theory.html#getLemmas",
        "fct-type": "function",
        "title": "getLemmas"
      },
      "index": {
        "description": "All lemmas",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "getLemmas",
        "normalized": "ClosedTheory-\u003e[Lemma IncrementalProof]",
        "package": "tamarin-prover-theory",
        "partial": "Lemmas",
        "signature": "ClosedTheory-\u003e[Lemma IncrementalProof]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getProofContext",
      "description": {
        "fct-descr": "\u003cp\u003eGet the proof context for a lemma of the closed theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lemma a -\u003e ClosedTheory -\u003e ProofContext",
        "fct-source": "src/Theory.html#getProofContext",
        "fct-type": "function",
        "title": "getProofContext"
      },
      "index": {
        "description": "Get the proof context for lemma of the closed theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "getProofContext",
        "normalized": "Lemma a-\u003eClosedTheory-\u003eProofContext",
        "package": "tamarin-prover-theory",
        "partial": "Proof Context",
        "signature": "Lemma a-\u003eClosedTheory-\u003eProofContext"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getProtoRuleEs",
      "description": {
        "fct-descr": "\u003cp\u003eAll protocol rules modulo E.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedTheory -\u003e [ProtoRuleE]",
        "fct-source": "src/Theory.html#getProtoRuleEs",
        "fct-type": "function",
        "title": "getProtoRuleEs"
      },
      "index": {
        "description": "All protocol rules modulo",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "getProtoRuleEs",
        "normalized": "ClosedTheory-\u003e[ProtoRuleE]",
        "package": "tamarin-prover-theory",
        "partial": "Proto Rule Es",
        "signature": "ClosedTheory-\u003e[ProtoRuleE]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lAttributes",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Lemma p) [LemmaAttribute]",
        "fct-source": "src/Theory.html#lAttributes",
        "fct-type": "function",
        "title": "lAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "lAttributes",
        "normalized": "Lens a(Lemma b)[LemmaAttribute]",
        "package": "tamarin-prover-theory",
        "partial": "Attributes",
        "signature": "Lens arr(Lemma p)[LemmaAttribute]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lFormula",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Lemma p) LNFormula",
        "fct-source": "src/Theory.html#lFormula",
        "fct-type": "function",
        "title": "lFormula"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "lFormula",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Formula",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lName",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Lemma p) String",
        "fct-source": "src/Theory.html#lName",
        "fct-type": "function",
        "title": "lName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "lName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lProof",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Lemma p) p",
        "fct-source": "src/Theory.html#lProof",
        "fct-type": "function",
        "title": "lProof"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "lProof",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lTraceQuantifier",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Lemma p) TraceQuantifier",
        "fct-source": "src/Theory.html#lTraceQuantifier",
        "fct-type": "function",
        "title": "lTraceQuantifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "lTraceQuantifier",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Trace Quantifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lookupLemma",
      "description": {
        "fct-descr": "\u003cp\u003eFind the lemma with the given name.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e Theory sig c r p -\u003e Maybe (Lemma p)",
        "fct-source": "src/Theory.html#lookupLemma",
        "fct-type": "function",
        "title": "lookupLemma"
      },
      "index": {
        "description": "Find the lemma with the given name",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "lookupLemma",
        "normalized": "String-\u003eTheory a b c d-\u003eMaybe(Lemma d)",
        "package": "tamarin-prover-theory",
        "partial": "Lemma",
        "signature": "String-\u003eTheory sig c r p-\u003eMaybe(Lemma p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lookupLemmaProof",
      "description": {
        "fct-descr": "\u003cp\u003eResolve a path in a theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "LemmaRef -\u003e ClosedTheory -\u003e Maybe IncrementalProof",
        "fct-source": "src/Theory.html#lookupLemmaProof",
        "fct-type": "function",
        "title": "lookupLemmaProof"
      },
      "index": {
        "description": "Resolve path in theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "lookupLemmaProof",
        "normalized": "LemmaRef-\u003eClosedTheory-\u003eMaybe IncrementalProof",
        "package": "tamarin-prover-theory",
        "partial": "Lemma Proof",
        "signature": "LemmaRef-\u003eClosedTheory-\u003eMaybe IncrementalProof"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:modifyLemmaProof",
      "description": {
        "fct-descr": "\u003cp\u003eModify the proof at the given lemma ref, if there is one. Fails if the\n path is not present or if the prover fails.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Prover -\u003e LemmaRef -\u003e ClosedTheory -\u003e Maybe ClosedTheory",
        "fct-source": "src/Theory.html#modifyLemmaProof",
        "fct-type": "function",
        "title": "modifyLemmaProof"
      },
      "index": {
        "description": "Modify the proof at the given lemma ref if there is one Fails if the path is not present or if the prover fails",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "modifyLemmaProof",
        "normalized": "Prover-\u003eLemmaRef-\u003eClosedTheory-\u003eMaybe ClosedTheory",
        "package": "tamarin-prover-theory",
        "partial": "Lemma Proof",
        "signature": "Prover-\u003eLemmaRef-\u003eClosedTheory-\u003eMaybe ClosedTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:normalizeTheory",
      "description": {
        "fct-descr": "\u003cp\u003eNormalize the theory representation such that they remain semantically\n equivalent. Use this function when you want to compare two theories (quite\n strictly) for semantic equality; e.g., when testing the parser.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "OpenTheory -\u003e OpenTheory",
        "fct-source": "src/Theory.html#normalizeTheory",
        "fct-type": "function",
        "title": "normalizeTheory"
      },
      "index": {
        "description": "Normalize the theory representation such that they remain semantically equivalent Use this function when you want to compare two theories quite strictly for semantic equality e.g when testing the parser",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "normalizeTheory",
        "normalized": "OpenTheory-\u003eOpenTheory",
        "package": "tamarin-prover-theory",
        "partial": "Theory",
        "signature": "OpenTheory-\u003eOpenTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:openTheory",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a theory by dropping the closed world assumption and values whose\n soundness dependens on it.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedTheory -\u003e OpenTheory",
        "fct-source": "src/Theory.html#openTheory",
        "fct-type": "function",
        "title": "openTheory"
      },
      "index": {
        "description": "Open theory by dropping the closed world assumption and values whose soundness dependens on it",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "openTheory",
        "normalized": "ClosedTheory-\u003eOpenTheory",
        "package": "tamarin-prover-theory",
        "partial": "Theory",
        "signature": "ClosedTheory-\u003eOpenTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyAxiom",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print an axiom.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Axiom -\u003e d",
        "fct-source": "src/Theory.html#prettyAxiom",
        "fct-type": "function",
        "title": "prettyAxiom"
      },
      "index": {
        "description": "Pretty print an axiom",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "prettyAxiom",
        "normalized": "Axiom-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Axiom",
        "signature": "Axiom-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyClosedSummary",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedTheory -\u003e d",
        "fct-source": "src/Theory.html#prettyClosedSummary",
        "fct-type": "function",
        "title": "prettyClosedSummary"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "prettyClosedSummary",
        "normalized": "ClosedTheory-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Closed Summary",
        "signature": "ClosedTheory-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyClosedTheory",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a closed theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "ClosedTheory -\u003e d",
        "fct-source": "src/Theory.html#prettyClosedTheory",
        "fct-type": "function",
        "title": "prettyClosedTheory"
      },
      "index": {
        "description": "Pretty print closed theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "prettyClosedTheory",
        "normalized": "ClosedTheory-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Closed Theory",
        "signature": "ClosedTheory-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyFormalComment",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a formal comment\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e String -\u003e d",
        "fct-source": "src/Theory.html#prettyFormalComment",
        "fct-type": "function",
        "title": "prettyFormalComment"
      },
      "index": {
        "description": "Pretty print formal comment",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "prettyFormalComment",
        "normalized": "String-\u003eString-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Formal Comment",
        "signature": "String-\u003eString-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyIntruderVariants",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a non-empty bunch of intruder rules.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "[IntrRuleAC] -\u003e d",
        "fct-source": "src/Theory.html#prettyIntruderVariants",
        "fct-type": "function",
        "title": "prettyIntruderVariants"
      },
      "index": {
        "description": "Pretty-print non-empty bunch of intruder rules",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "prettyIntruderVariants",
        "normalized": "[IntrRuleAC]-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Intruder Variants",
        "signature": "[IntrRuleAC]-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyLemma",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a lemma.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(p -\u003e d) -\u003e Lemma p -\u003e d",
        "fct-source": "src/Theory.html#prettyLemma",
        "fct-type": "function",
        "title": "prettyLemma"
      },
      "index": {
        "description": "Pretty print lemma",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "prettyLemma",
        "normalized": "(a-\u003eb)-\u003eLemma a-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "Lemma",
        "signature": "(p-\u003ed)-\u003eLemma p-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyLemmaName",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the lemma name together with its attributes.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lemma p -\u003e d",
        "fct-source": "src/Theory.html#prettyLemmaName",
        "fct-type": "function",
        "title": "prettyLemmaName"
      },
      "index": {
        "description": "Pretty print the lemma name together with its attributes",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "prettyLemmaName",
        "normalized": "Lemma a-\u003eb",
        "package": "tamarin-prover-theory",
        "partial": "Lemma Name",
        "signature": "Lemma p-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyOpenTheory",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print an open theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "OpenTheory -\u003e d",
        "fct-source": "src/Theory.html#prettyOpenTheory",
        "fct-type": "function",
        "title": "prettyOpenTheory"
      },
      "index": {
        "description": "Pretty print an open theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "prettyOpenTheory",
        "normalized": "OpenTheory-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Open Theory",
        "signature": "OpenTheory-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyTraceQuantifier",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eTraceQuantifier\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "TraceQuantifier -\u003e d",
        "fct-source": "src/Theory.html#prettyTraceQuantifier",
        "fct-type": "function",
        "title": "prettyTraceQuantifier"
      },
      "index": {
        "description": "Pretty print TraceQuantifier",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "prettyTraceQuantifier",
        "normalized": "TraceQuantifier-\u003ea",
        "package": "tamarin-prover-theory",
        "partial": "Trace Quantifier",
        "signature": "TraceQuantifier-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:proveTheory",
      "description": {
        "fct-descr": "\u003cp\u003eProve both the assertion soundness as well as all lemmas of the theory. If\n the prover fails on a lemma, then its proof remains unchanged.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "(Lemma IncrementalProof -\u003e Bool)-\u003e Prover-\u003e ClosedTheory-\u003e ClosedTheory",
        "fct-type": "function",
        "title": "proveTheory"
      },
      "index": {
        "description": "Prove both the assertion soundness as well as all lemmas of the theory If the prover fails on lemma then its proof remains unchanged",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "proveTheory",
        "normalized": "(Lemma IncrementalProof-\u003eBool)-\u003eProver-\u003eClosedTheory-\u003eClosedTheory",
        "package": "tamarin-prover-theory",
        "partial": "Theory",
        "signature": "(Lemma IncrementalProof-\u003eBool)-\u003eProver-\u003eClosedTheory-\u003eClosedTheory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:removeLemma",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a lemma by name. Fails, if the lemma does not exist.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e Theory sig c r p -\u003e Maybe (Theory sig c r p)",
        "fct-source": "src/Theory.html#removeLemma",
        "fct-type": "function",
        "title": "removeLemma"
      },
      "index": {
        "description": "Remove lemma by name Fails if the lemma does not exist",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "removeLemma",
        "normalized": "String-\u003eTheory a b c d-\u003eMaybe(Theory a b c d)",
        "package": "tamarin-prover-theory",
        "partial": "Lemma",
        "signature": "String-\u003eTheory sig c r p-\u003eMaybe(Theory sig c r p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:skeletonLemma",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e [LemmaAttribute] -\u003e TraceQuantifier -\u003e LNFormula -\u003e ProofSkeleton -\u003e Lemma ProofSkeleton",
        "fct-source": "src/Theory.html#skeletonLemma",
        "fct-type": "function",
        "title": "skeletonLemma"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "skeletonLemma",
        "normalized": "String-\u003e[LemmaAttribute]-\u003eTraceQuantifier-\u003eLNFormula-\u003eProofSkeleton-\u003eLemma ProofSkeleton",
        "package": "tamarin-prover-theory",
        "partial": "Lemma",
        "signature": "String-\u003e[LemmaAttribute]-\u003eTraceQuantifier-\u003eLNFormula-\u003eProofSkeleton-\u003eLemma ProofSkeleton"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:theoryAxioms",
      "description": {
        "fct-descr": "\u003cp\u003eAll axioms of a theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Theory sig c r p -\u003e [Axiom]",
        "fct-source": "src/Theory.html#theoryAxioms",
        "fct-type": "function",
        "title": "theoryAxioms"
      },
      "index": {
        "description": "All axioms of theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "theoryAxioms",
        "normalized": "Theory a b c d-\u003e[Axiom]",
        "package": "tamarin-prover-theory",
        "partial": "Axioms",
        "signature": "Theory sig c r p-\u003e[Axiom]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:theoryLemmas",
      "description": {
        "fct-descr": "\u003cp\u003eAll lemmas of a theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Theory sig c r p -\u003e [Lemma p]",
        "fct-source": "src/Theory.html#theoryLemmas",
        "fct-type": "function",
        "title": "theoryLemmas"
      },
      "index": {
        "description": "All lemmas of theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "theoryLemmas",
        "normalized": "Theory a b c d-\u003e[Lemma d]",
        "package": "tamarin-prover-theory",
        "partial": "Lemmas",
        "signature": "Theory sig c r p-\u003e[Lemma p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:theoryRules",
      "description": {
        "fct-descr": "\u003cp\u003eAll rules of a theory.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Theory sig c r p -\u003e [r]",
        "fct-source": "src/Theory.html#theoryRules",
        "fct-type": "function",
        "title": "theoryRules"
      },
      "index": {
        "description": "All rules of theory",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "theoryRules",
        "normalized": "Theory a b c d-\u003e[c]",
        "package": "tamarin-prover-theory",
        "partial": "Rules",
        "signature": "Theory sig c r p-\u003e[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:thyCache",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Theory sig c r p) c",
        "fct-source": "src/Theory.html#thyCache",
        "fct-type": "function",
        "title": "thyCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "thyCache",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:thyItems",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Theory sig c r p) [TheoryItem r p]",
        "fct-source": "src/Theory.html#thyItems",
        "fct-type": "function",
        "title": "thyItems"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "thyItems",
        "normalized": "Lens a(Theory b c d e)[TheoryItem d e]",
        "package": "tamarin-prover-theory",
        "partial": "Items",
        "signature": "Lens arr(Theory sig c r p)[TheoryItem r p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:thyName",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Theory sig c r p) String",
        "fct-source": "src/Theory.html#thyName",
        "fct-type": "function",
        "title": "thyName"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "thyName",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:thySignature",
      "description": {
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "Lens arr (Theory sig c r p) sig",
        "fct-source": "src/Theory.html#thySignature",
        "fct-type": "function",
        "title": "thySignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "thySignature",
        "normalized": "",
        "package": "tamarin-prover-theory",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:unprovenLemma",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new unproven lemma from a formula modulo E.\n\u003c/p\u003e",
        "fct-module": "Theory",
        "fct-package": "tamarin-prover-theory",
        "fct-signature": "String -\u003e [LemmaAttribute] -\u003e TraceQuantifier -\u003e LNFormula -\u003e Lemma ProofSkeleton",
        "fct-source": "src/Theory.html#unprovenLemma",
        "fct-type": "function",
        "title": "unprovenLemma"
      },
      "index": {
        "description": "Create new unproven lemma from formula modulo",
        "hierarchy": "Theory",
        "module": "Theory",
        "name": "unprovenLemma",
        "normalized": "String-\u003e[LemmaAttribute]-\u003eTraceQuantifier-\u003eLNFormula-\u003eLemma ProofSkeleton",
        "package": "tamarin-prover-theory",
        "partial": "Lemma",
        "signature": "String-\u003e[LemmaAttribute]-\u003eTraceQuantifier-\u003eLNFormula-\u003eLemma ProofSkeleton"
      }
    }
  }
]