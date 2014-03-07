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
        "word": "tamarin-prover-theory"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBig-step proofs using case distinctions on the possible sources of a fact.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.Solver.CaseDistinctions",
          "name": "CaseDistinctions",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-CaseDistinctions.html",
          "type": "module"
        },
        "index": {
          "description": "Big-step proofs using case distinctions on the possible sources of fact",
          "hierarchy": "Theory Constraint Solver CaseDistinctions",
          "module": "Theory.Constraint.Solver.CaseDistinctions",
          "name": "CaseDistinctions",
          "package": "tamarin-prover-theory",
          "partial": "Case Distinctions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecompute a saturated set of case distinctions.\n\u003c/p\u003e",
          "module": "[\"Theory.Constraint.Solver.CaseDistinctions\",\"Theory.Constraint.Solver\"]",
          "name": "precomputeCaseDistinctions",
          "package": "tamarin-prover-theory",
          "signature": "ProofContext-\u003e [LNGuarded]-\u003e [CaseDistinction]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:precomputeCaseDistinctions\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:precomputeCaseDistinctions\"]"
        },
        "index": {
          "description": "Precompute saturated set of case distinctions",
          "hierarchy": "Theory Constraint Solver CaseDistinctions",
          "module": "Theory.Constraint.Solver.CaseDistinctions",
          "name": "precomputeCaseDistinctions",
          "normalized": "ProofContext-\u003e[LNGuarded]-\u003e[CaseDistinction]",
          "package": "tamarin-prover-theory",
          "partial": "Case Distinctions",
          "signature": "ProofContext-\u003e[LNGuarded]-\u003e[CaseDistinction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:precomputeCaseDistinctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefine a set of case distinction by exploiting additional typing\n assumptions.\n\u003c/p\u003e",
          "module": "[\"Theory.Constraint.Solver.CaseDistinctions\",\"Theory.Constraint.Solver\"]",
          "name": "refineWithTypingAsms",
          "package": "tamarin-prover-theory",
          "signature": "[LNGuarded]-\u003e ProofContext-\u003e [CaseDistinction]-\u003e [CaseDistinction]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:refineWithTypingAsms\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:refineWithTypingAsms\"]"
        },
        "index": {
          "description": "Refine set of case distinction by exploiting additional typing assumptions",
          "hierarchy": "Theory Constraint Solver CaseDistinctions",
          "module": "Theory.Constraint.Solver.CaseDistinctions",
          "name": "refineWithTypingAsms",
          "normalized": "[LNGuarded]-\u003eProofContext-\u003e[CaseDistinction]-\u003e[CaseDistinction]",
          "package": "tamarin-prover-theory",
          "partial": "With Typing Asms",
          "signature": "[LNGuarded]-\u003eProofContext-\u003e[CaseDistinction]-\u003e[CaseDistinction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:refineWithTypingAsms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of stable variables (that are referenced from outside and cannot be simply\n renamed) and a list containing systems, this function returns a subsequence of the list\n such that for all removed systems, there is a remaining system that is equal modulo\n renaming of non-stable variables.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.CaseDistinctions",
          "name": "removeRedundantCases",
          "package": "tamarin-prover-theory",
          "signature": "ProofContext -\u003e [LVar] -\u003e (a -\u003e System) -\u003e [a] -\u003e [a]",
          "source": "src/Theory-Constraint-Solver-CaseDistinctions.html#removeRedundantCases",
          "type": "function"
        },
        "index": {
          "description": "Given list of stable variables that are referenced from outside and cannot be simply renamed and list containing systems this function returns subsequence of the list such that for all removed systems there is remaining system that is equal modulo renaming of non-stable variables",
          "hierarchy": "Theory Constraint Solver CaseDistinctions",
          "module": "Theory.Constraint.Solver.CaseDistinctions",
          "name": "removeRedundantCases",
          "normalized": "ProofContext-\u003e[LVar]-\u003e(a-\u003eSystem)-\u003e[a]-\u003e[a]",
          "package": "tamarin-prover-theory",
          "partial": "Redundant Cases",
          "signature": "ProofContext-\u003e[LVar]-\u003e(a-\u003eSystem)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:removeRedundantCases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to solve a premise goal or \u003ccode\u003eKU\u003c/code\u003e action using the first precomputed\n case distinction with a matching premise.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.CaseDistinctions",
          "name": "solveWithCaseDistinction",
          "package": "tamarin-prover-theory",
          "signature": "ProofContext -\u003e [CaseDistinction] -\u003e Goal -\u003e Maybe (Reduction [String])",
          "source": "src/Theory-Constraint-Solver-CaseDistinctions.html#solveWithCaseDistinction",
          "type": "function"
        },
        "index": {
          "description": "Try to solve premise goal or KU action using the first precomputed case distinction with matching premise",
          "hierarchy": "Theory Constraint Solver CaseDistinctions",
          "module": "Theory.Constraint.Solver.CaseDistinctions",
          "name": "solveWithCaseDistinction",
          "normalized": "ProofContext-\u003e[CaseDistinction]-\u003eGoal-\u003eMaybe(Reduction[String])",
          "package": "tamarin-prover-theory",
          "partial": "With Case Distinction",
          "signature": "ProofContext-\u003e[CaseDistinction]-\u003eGoal-\u003eMaybe(Reduction[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:solveWithCaseDistinction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of remaining chain constraints of each case.\n\u003c/p\u003e",
          "module": "[\"Theory.Constraint.Solver.CaseDistinctions\",\"Theory.Constraint.Solver\"]",
          "name": "unsolvedChainConstraints",
          "package": "tamarin-prover-theory",
          "signature": "CaseDistinction -\u003e [Int]",
          "source": "src/Theory-Constraint-Solver-CaseDistinctions.html#unsolvedChainConstraints",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:unsolvedChainConstraints\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:unsolvedChainConstraints\"]"
        },
        "index": {
          "description": "The number of remaining chain constraints of each case",
          "hierarchy": "Theory Constraint Solver CaseDistinctions",
          "module": "Theory.Constraint.Solver.CaseDistinctions",
          "name": "unsolvedChainConstraints",
          "normalized": "CaseDistinction-\u003e[Int]",
          "package": "tamarin-prover-theory",
          "partial": "Chain Constraints",
          "signature": "CaseDistinction-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-CaseDistinctions.html#v:unsolvedChainConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the public interface for constructing and deconstructing constraint\n systems. The interface for performing constraint solving provided by\n \u003ca\u003eTheory.Constraint.Solver\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "Contradictions",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Contradictions.html",
          "type": "module"
        },
        "index": {
          "description": "This is the public interface for constructing and deconstructing constraint systems The interface for performing constraint solving provided by Theory.Constraint.Solver",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "Contradictions",
          "package": "tamarin-prover-theory",
          "partial": "Contradictions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReasons why a constraint \u003ccode\u003e\u003ca\u003eSystem\u003c/a\u003e\u003c/code\u003e can be contradictory.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "Contradiction",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "data"
        },
        "index": {
          "description": "Reasons why constraint System can be contradictory",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "Contradiction",
          "package": "tamarin-prover-theory",
          "partial": "Contradiction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#t:Contradiction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe paths are cyclic.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "Cyclic",
          "package": "tamarin-prover-theory",
          "signature": "Cyclic",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "The paths are cyclic",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "Cyclic",
          "package": "tamarin-prover-theory",
          "partial": "Cyclic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:Cyclic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForbidden bilinear pairing rule instance\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "ForbiddenBP",
          "package": "tamarin-prover-theory",
          "signature": "ForbiddenBP",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "Forbidden bilinear pairing rule instance",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "ForbiddenBP",
          "package": "tamarin-prover-theory",
          "partial": "Forbidden BP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:ForbiddenBP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForbidden Exp-down rule instance\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "ForbiddenExp",
          "package": "tamarin-prover-theory",
          "signature": "ForbiddenExp",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "Forbidden Exp-down rule instance",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "ForbiddenExp",
          "package": "tamarin-prover-theory",
          "partial": "Forbidden Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:ForbiddenExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehas forbidden KD-fact\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "ForbiddenKD",
          "package": "tamarin-prover-theory",
          "signature": "ForbiddenKD",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "has forbidden KD-fact",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "ForbiddenKD",
          "package": "tamarin-prover-theory",
          "partial": "Forbidden KD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:ForbiddenKD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFalse in formulas\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "FormulasFalse",
          "package": "tamarin-prover-theory",
          "signature": "FormulasFalse",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "False in formulas",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "FormulasFalse",
          "package": "tamarin-prover-theory",
          "partial": "Formulas False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:FormulasFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehas impossible chain\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "ImpossibleChain",
          "package": "tamarin-prover-theory",
          "signature": "ImpossibleChain",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "has impossible chain",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "ImpossibleChain",
          "package": "tamarin-prover-theory",
          "partial": "Impossible Chain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:ImpossibleChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncompatible equalities.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "IncompatibleEqs",
          "package": "tamarin-prover-theory",
          "signature": "IncompatibleEqs",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "Incompatible equalities",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "IncompatibleEqs",
          "package": "tamarin-prover-theory",
          "partial": "Incompatible Eqs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:IncompatibleEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is a node after the last node.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "NodeAfterLast",
          "package": "tamarin-prover-theory",
          "signature": "NodeAfterLast (NodeId, NodeId)",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "There is node after the last node",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "NodeAfterLast",
          "normalized": "NodeAfterLast(NodeId,NodeId)",
          "package": "tamarin-prover-theory",
          "partial": "Node After Last",
          "signature": "NodeAfterLast(NodeId,NodeId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:NodeAfterLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContradicts that certain facts have unique instances.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "NonInjectiveFactInstance",
          "package": "tamarin-prover-theory",
          "signature": "NonInjectiveFactInstance (NodeId, NodeId, NodeId)",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "Contradicts that certain facts have unique instances",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "NonInjectiveFactInstance",
          "normalized": "NonInjectiveFactInstance(NodeId,NodeId,NodeId)",
          "package": "tamarin-prover-theory",
          "partial": "Non Injective Fact Instance",
          "signature": "NonInjectiveFactInstance(NodeId,NodeId,NodeId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:NonInjectiveFactInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHas terms that are not in normal form.\n | NonLastNode                    -- ^ Has a non-silent node after the last node.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "NonNormalTerms",
          "package": "tamarin-prover-theory",
          "signature": "NonNormalTerms",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "Has terms that are not in normal form NonLastNode Has non-silent node after the last node",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "NonNormalTerms",
          "package": "tamarin-prover-theory",
          "partial": "Non Normal Terms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:NonNormalTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term is derived both before and after a learn\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "SuperfluousLearn",
          "package": "tamarin-prover-theory",
          "signature": "SuperfluousLearn LNTerm NodeId",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "function"
        },
        "index": {
          "description": "term is derived both before and after learn",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "SuperfluousLearn",
          "package": "tamarin-prover-theory",
          "partial": "Superfluous Learn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:SuperfluousLearn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll CR-rules reducing a constraint system to *&#10178;* represented as a list of\n trivial contradictions. Note that some constraint systems are also removed\n because they have no unifier. This is part of unification. Note also that\n *S_{&#172;@}* is handled as part of *S_&#8704;*.\n\u003c/p\u003e",
          "module": "[\"Theory.Constraint.Solver.Contradictions\",\"Theory.Constraint.Solver\"]",
          "name": "contradictions",
          "package": "tamarin-prover-theory",
          "signature": "ProofContext -\u003e System -\u003e [Contradiction]",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#contradictions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:contradictions\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:contradictions\"]"
        },
        "index": {
          "description": "All CR-rules reducing constraint system to represented as list of trivial contradictions Note that some constraint systems are also removed because they have no unifier This is part of unification Note also that is handled as part of",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "contradictions",
          "normalized": "ProofContext-\u003eSystem-\u003e[Contradiction]",
          "package": "tamarin-prover-theory",
          "signature": "ProofContext-\u003eSystem-\u003e[Contradiction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:contradictions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the constraint system is contradictory.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "contradictorySystem",
          "package": "tamarin-prover-theory",
          "signature": "ProofContext -\u003e System -\u003e Bool",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#contradictorySystem",
          "type": "function"
        },
        "index": {
          "description": "True if the constraint system is contradictory",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "contradictorySystem",
          "normalized": "ProofContext-\u003eSystem-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "System",
          "signature": "ProofContext-\u003eSystem-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:contradictorySystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a \u003ccode\u003e\u003ca\u003eContradiction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "prettyContradiction",
          "package": "tamarin-prover-theory",
          "signature": "Contradiction -\u003e d",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#prettyContradiction",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print Contradiction",
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "prettyContradiction",
          "normalized": "Contradiction-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Contradiction",
          "signature": "Contradiction-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:prettyContradiction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "substCreatesNonNormalTerms",
          "package": "tamarin-prover-theory",
          "signature": "MaudeHandle -\u003e System -\u003e LNSubst -\u003e LNSubstVFresh -\u003e Bool",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#substCreatesNonNormalTerms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Contradictions",
          "module": "Theory.Constraint.Solver.Contradictions",
          "name": "substCreatesNonNormalTerms",
          "normalized": "MaudeHandle-\u003eSystem-\u003eLNSubst-\u003eLNSubstVFresh-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Creates Non Normal Terms",
          "signature": "MaudeHandle-\u003eSystem-\u003eLNSubst-\u003eLNSubstVFresh-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Contradictions.html#v:substCreatesNonNormalTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe constraint reduction rules, which are not enforced as invariants in\n \u003ca\u003eTheory.Constraint.Solver.Reduction\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA goal represents a possible application of a rule that may result in\n multiple cases or even non-termination (if applied repeatedly). These goals\n are computed as the list of \u003ccode\u003e\u003ca\u003eopenGoals\u003c/a\u003e\u003c/code\u003e. See\n \u003ca\u003eTheory.Constraint.Solver.ProofMethod\u003c/a\u003e for the public interface to solving\n goals and the implementation of heuristics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "Goals",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Goals.html",
          "type": "module"
        },
        "index": {
          "description": "The constraint reduction rules which are not enforced as invariants in Theory.Constraint.Solver.Reduction goal represents possible application of rule that may result in multiple cases or even non-termination if applied repeatedly These goals are computed as the list of openGoals See Theory.Constraint.Solver.ProofMethod for the public interface to solving goals and the implementation of heuristics",
          "hierarchy": "Theory Constraint Solver Goals",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "Goals",
          "package": "tamarin-prover-theory",
          "partial": "Goals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGoals annotated with their number and usefulness.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "AnnotatedGoal",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Goals.html#AnnotatedGoal",
          "type": "type"
        },
        "index": {
          "description": "Goals annotated with their number and usefulness",
          "hierarchy": "Theory Constraint Solver Goals",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "AnnotatedGoal",
          "package": "tamarin-prover-theory",
          "partial": "Annotated Goal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#t:AnnotatedGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Goals",
          "name": "Usefulness",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Goals",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "Usefulness",
          "package": "tamarin-prover-theory",
          "partial": "Usefulness",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#t:Usefulness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message that is deducible for the current solution.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "CurrentlyDeducible",
          "package": "tamarin-prover-theory",
          "signature": "CurrentlyDeducible",
          "source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
          "type": "function"
        },
        "index": {
          "description": "message that is deducible for the current solution",
          "hierarchy": "Theory Constraint Solver Goals",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "CurrentlyDeducible",
          "package": "tamarin-prover-theory",
          "partial": "Currently Deducible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:CurrentlyDeducible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA goal that is delayed to avoid immediate termination.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "LoopBreaker",
          "package": "tamarin-prover-theory",
          "signature": "LoopBreaker",
          "source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
          "type": "function"
        },
        "index": {
          "description": "goal that is delayed to avoid immediate termination",
          "hierarchy": "Theory Constraint Solver Goals",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "LoopBreaker",
          "package": "tamarin-prover-theory",
          "partial": "Loop Breaker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:LoopBreaker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA goal that is likely to be constructible by the adversary.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "ProbablyConstructible",
          "package": "tamarin-prover-theory",
          "signature": "ProbablyConstructible",
          "source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
          "type": "function"
        },
        "index": {
          "description": "goal that is likely to be constructible by the adversary",
          "hierarchy": "Theory Constraint Solver Goals",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "ProbablyConstructible",
          "package": "tamarin-prover-theory",
          "partial": "Probably Constructible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:ProbablyConstructible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA goal that is likely to result in progress.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "Useful",
          "package": "tamarin-prover-theory",
          "signature": "Useful",
          "source": "src/Theory-Constraint-Solver-Goals.html#Usefulness",
          "type": "function"
        },
        "index": {
          "description": "goal that is likely to result in progress",
          "hierarchy": "Theory Constraint Solver Goals",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "Useful",
          "package": "tamarin-prover-theory",
          "partial": "Useful",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:Useful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of goals that must be solved before a solution can be extracted.\n Each goal is annotated with its age and an indicator for its usefulness.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "openGoals",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [AnnotatedGoal]",
          "source": "src/Theory-Constraint-Solver-Goals.html#openGoals",
          "type": "function"
        },
        "index": {
          "description": "The list of goals that must be solved before solution can be extracted Each goal is annotated with its age and an indicator for its usefulness",
          "hierarchy": "Theory Constraint Solver Goals",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "openGoals",
          "normalized": "System-\u003e[AnnotatedGoal]",
          "package": "tamarin-prover-theory",
          "partial": "Goals",
          "signature": "System-\u003e[AnnotatedGoal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:openGoals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esolveGoal rules goal\u003c/code\u003e enumerates all possible cases of how this goal\n could be solved in the context of the given \u003ccode\u003erules\u003c/code\u003e. For each case, a\n sensible case-name is returned.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "solveGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal -\u003e Reduction String",
          "source": "src/Theory-Constraint-Solver-Goals.html#solveGoal",
          "type": "function"
        },
        "index": {
          "description": "solveGoal rules goal enumerates all possible cases of how this goal could be solved in the context of the given rules For each case sensible case-name is returned",
          "hierarchy": "Theory Constraint Solver Goals",
          "module": "Theory.Constraint.Solver.Goals",
          "name": "solveGoal",
          "normalized": "Goal-\u003eReduction String",
          "package": "tamarin-prover-theory",
          "partial": "Goal",
          "signature": "Goal-\u003eReduction String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Goals.html#v:solveGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProof methods and heuristics: the external small-step interface to the\n constraint solver.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "ProofMethod",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html",
          "type": "module"
        },
        "index": {
          "description": "Proof methods and heuristics the external small-step interface to the constraint solver",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "ProofMethod",
          "package": "tamarin-prover-theory",
          "partial": "Proof Method",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery case in a proof is uniquely named.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "CaseName",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#CaseName",
          "type": "type"
        },
        "index": {
          "description": "Every case in proof is uniquely named",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "CaseName",
          "package": "tamarin-prover-theory",
          "partial": "Case Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#t:CaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe different available functions to rank goals with respect to their\n order of solving in a constraint system.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "GoalRanking",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#GoalRanking",
          "type": "data"
        },
        "index": {
          "description": "The different available functions to rank goals with respect to their order of solving in constraint system",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "GoalRanking",
          "package": "tamarin-prover-theory",
          "partial": "Goal Ranking",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#t:GoalRanking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Heuristic",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#Heuristic",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Heuristic",
          "package": "tamarin-prover-theory",
          "partial": "Heuristic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#t:Heuristic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSound transformations of sequents.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "ProofMethod",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
          "type": "data"
        },
        "index": {
          "description": "Sound transformations of sequents",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "ProofMethod",
          "package": "tamarin-prover-theory",
          "partial": "Proof Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#t:ProofMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA contradiction could be\n derived, possibly with a reason.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Contradiction",
          "package": "tamarin-prover-theory",
          "signature": "Contradiction (Maybe Contradiction)",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
          "type": "function"
        },
        "index": {
          "description": "contradiction could be derived possibly with reason",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Contradiction",
          "package": "tamarin-prover-theory",
          "partial": "Contradiction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Contradiction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "GoalNrRanking",
          "package": "tamarin-prover-theory",
          "signature": "GoalNrRanking",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#GoalRanking",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "GoalNrRanking",
          "package": "tamarin-prover-theory",
          "partial": "Goal Nr Ranking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:GoalNrRanking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse inductive strengthening on\n the single formula constraint in\n the system.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Induction",
          "package": "tamarin-prover-theory",
          "signature": "Induction",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
          "type": "function"
        },
        "index": {
          "description": "Use inductive strengthening on the single formula constraint in the system",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Induction",
          "package": "tamarin-prover-theory",
          "partial": "Induction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Induction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simplification step.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Simplify",
          "package": "tamarin-prover-theory",
          "signature": "Simplify",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
          "type": "function"
        },
        "index": {
          "description": "simplification step",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Simplify",
          "package": "tamarin-prover-theory",
          "partial": "Simplify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Simplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "SmartRanking",
          "package": "tamarin-prover-theory",
          "signature": "SmartRanking Bool",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#GoalRanking",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "SmartRanking",
          "package": "tamarin-prover-theory",
          "partial": "Smart Ranking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:SmartRanking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA goal that was solved.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "SolveGoal",
          "package": "tamarin-prover-theory",
          "signature": "SolveGoal Goal",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
          "type": "function"
        },
        "index": {
          "description": "goal that was solved",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "SolveGoal",
          "package": "tamarin-prover-theory",
          "partial": "Solve Goal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:SolveGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn attack was fond\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Solved",
          "package": "tamarin-prover-theory",
          "signature": "Solved",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
          "type": "function"
        },
        "index": {
          "description": "An attack was fond",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Solved",
          "package": "tamarin-prover-theory",
          "partial": "Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Solved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProof was not completed\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Sorry",
          "package": "tamarin-prover-theory",
          "signature": "Sorry (Maybe String)",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#ProofMethod",
          "type": "function"
        },
        "index": {
          "description": "Proof was not completed",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "Sorry",
          "package": "tamarin-prover-theory",
          "partial": "Sorry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:Sorry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "UsefulGoalNrRanking",
          "package": "tamarin-prover-theory",
          "signature": "UsefulGoalNrRanking",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#GoalRanking",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "UsefulGoalNrRanking",
          "package": "tamarin-prover-theory",
          "partial": "Useful Goal Nr Ranking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:UsefulGoalNrRanking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "execProofMethod",
          "package": "tamarin-prover-theory",
          "signature": "ProofContext -\u003e ProofMethod -\u003e System -\u003e Maybe (Map CaseName System)",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#execProofMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "execProofMethod",
          "normalized": "ProofContext-\u003eProofMethod-\u003eSystem-\u003eMaybe(Map CaseName System)",
          "package": "tamarin-prover-theory",
          "partial": "Proof Method",
          "signature": "ProofContext-\u003eProofMethod-\u003eSystem-\u003eMaybe(Map CaseName System)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:execProofMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name/explanation of a \u003ccode\u003e\u003ca\u003eGoalRanking\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "goalRankingName",
          "package": "tamarin-prover-theory",
          "signature": "GoalRanking -\u003e String",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#goalRankingName",
          "type": "function"
        },
        "index": {
          "description": "The name explanation of GoalRanking",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "goalRankingName",
          "normalized": "GoalRanking-\u003eString",
          "package": "tamarin-prover-theory",
          "partial": "Ranking Name",
          "signature": "GoalRanking-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:goalRankingName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a proof method.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "prettyProofMethod",
          "package": "tamarin-prover-theory",
          "signature": "ProofMethod -\u003e d",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#prettyProofMethod",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print proof method",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "prettyProofMethod",
          "normalized": "ProofMethod-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Proof Method",
          "signature": "ProofMethod-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:prettyProofMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a \u003ccode\u003e\u003ca\u003eGoalRanking\u003c/a\u003e\u003c/code\u003e to generate the ranked, list of possible\n \u003ccode\u003e\u003ca\u003eProofMethod\u003c/a\u003e\u003c/code\u003es and their corresponding results in this \u003ccode\u003e\u003ca\u003eProofContext\u003c/a\u003e\u003c/code\u003e and\n for this \u003ccode\u003e\u003ca\u003eSystem\u003c/a\u003e\u003c/code\u003e. If the resulting list is empty, then the constraint\n system is solved.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "rankProofMethods",
          "package": "tamarin-prover-theory",
          "signature": "GoalRanking -\u003e ProofContext -\u003e System -\u003e [(ProofMethod, (Map CaseName System, String))]",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#rankProofMethods",
          "type": "function"
        },
        "index": {
          "description": "Use GoalRanking to generate the ranked list of possible ProofMethod and their corresponding results in this ProofContext and for this System If the resulting list is empty then the constraint system is solved",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "rankProofMethods",
          "normalized": "GoalRanking-\u003eProofContext-\u003eSystem-\u003e[(ProofMethod,(Map CaseName System,String))]",
          "package": "tamarin-prover-theory",
          "partial": "Proof Methods",
          "signature": "GoalRanking-\u003eProofContext-\u003eSystem-\u003e[(ProofMethod,(Map CaseName System,String))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:rankProofMethods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for heuristics. Schedules the goal rankings in a\n round-robin fashion dependent on the proof depth.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "roundRobinHeuristic",
          "package": "tamarin-prover-theory",
          "signature": "[GoalRanking] -\u003e Heuristic",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#roundRobinHeuristic",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for heuristics Schedules the goal rankings in round-robin fashion dependent on the proof depth",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "roundRobinHeuristic",
          "normalized": "[GoalRanking]-\u003eHeuristic",
          "package": "tamarin-prover-theory",
          "partial": "Robin Heuristic",
          "signature": "[GoalRanking]-\u003eHeuristic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:roundRobinHeuristic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a heuristic to schedule a \u003ccode\u003e\u003ca\u003eGoalRanking\u003c/a\u003e\u003c/code\u003e according to the given\n proof-depth.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "useHeuristic",
          "package": "tamarin-prover-theory",
          "signature": "Heuristic -\u003e Int -\u003e GoalRanking",
          "source": "src/Theory-Constraint-Solver-ProofMethod.html#useHeuristic",
          "type": "function"
        },
        "index": {
          "description": "Use heuristic to schedule GoalRanking according to the given proof-depth",
          "hierarchy": "Theory Constraint Solver ProofMethod",
          "module": "Theory.Constraint.Solver.ProofMethod",
          "name": "useHeuristic",
          "normalized": "Heuristic-\u003eInt-\u003eGoalRanking",
          "package": "tamarin-prover-theory",
          "partial": "Heuristic",
          "signature": "Heuristic-\u003eInt-\u003eGoalRanking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-ProofMethod.html#v:useHeuristic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad for writing constraint reduction steps together with basic steps\n for inserting nodes, edges, actions, and equations and applying\n substitutions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "Reduction",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Reduction.html",
          "type": "module"
        },
        "index": {
          "description": "monad for writing constraint reduction steps together with basic steps for inserting nodes edges actions and equations and applying substitutions",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "Reduction",
          "package": "tamarin-prover-theory",
          "partial": "Reduction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether the constraint system was changed or not.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "ChangeIndicator",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Reduction.html#ChangeIndicator",
          "type": "data"
        },
        "index": {
          "description": "Indicate whether the constraint system was changed or not",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Change Indicator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#t:ChangeIndicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constraint reduction step. Its state is the current constraint system,\n it can generate fresh names, split over cases, and access the proof\n context.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "Reduction",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Reduction.html#Reduction",
          "type": "type"
        },
        "index": {
          "description": "constraint reduction step Its state is the current constraint system it can generate fresh names split over cases and access the proof context",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "Reduction",
          "package": "tamarin-prover-theory",
          "partial": "Reduction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#t:Reduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSplitStrategy\u003c/a\u003e\u003c/code\u003e denotes if the equation store should be split into\n multiple equation stores.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "SplitStrategy",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Reduction.html#SplitStrategy",
          "type": "data"
        },
        "index": {
          "description": "SplitStrategy denotes if the equation store should be split into multiple equation stores",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "SplitStrategy",
          "package": "tamarin-prover-theory",
          "partial": "Split Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#t:SplitStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "Changed",
          "package": "tamarin-prover-theory",
          "signature": "Changed",
          "source": "src/Theory-Constraint-Solver-Reduction.html#ChangeIndicator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "Changed",
          "package": "tamarin-prover-theory",
          "partial": "Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:Changed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "SplitLater",
          "package": "tamarin-prover-theory",
          "signature": "SplitLater",
          "source": "src/Theory-Constraint-Solver-Reduction.html#SplitStrategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "SplitLater",
          "package": "tamarin-prover-theory",
          "partial": "Split Later",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:SplitLater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "SplitNow",
          "package": "tamarin-prover-theory",
          "signature": "SplitNow",
          "source": "src/Theory-Constraint-Solver-Reduction.html#SplitStrategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "SplitNow",
          "package": "tamarin-prover-theory",
          "partial": "Split Now",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:SplitNow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "Unchanged",
          "package": "tamarin-prover-theory",
          "signature": "Unchanged",
          "source": "src/Theory-Constraint-Solver-Reduction.html#ChangeIndicator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "Unchanged",
          "package": "tamarin-prover-theory",
          "partial": "Unchanged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:Unchanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a list of changes to the proof state.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "applyChangeList",
          "package": "tamarin-prover-theory",
          "signature": "[Reduction ()] -\u003e Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#applyChangeList",
          "type": "function"
        },
        "index": {
          "description": "Apply list of changes to the proof state",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "applyChangeList",
          "normalized": "[Reduction()]-\u003eReduction ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Change List",
          "signature": "[Reduction()]-\u003eReduction ChangeIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:applyChangeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003econjoinSystem se\u003c/code\u003e conjoins the logical information in \u003ccode\u003ese\u003c/code\u003e to the\n constraint system. It assumes that the free variables in \u003ccode\u003ese\u003c/code\u003e are shared\n with the free variables in the proof state.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "conjoinSystem",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#conjoinSystem",
          "type": "function"
        },
        "index": {
          "description": "conjoinSystem se conjoins the logical information in se to the constraint system It assumes that the free variables in se are shared with the free variables in the proof state",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "conjoinSystem",
          "normalized": "System-\u003eReduction()",
          "package": "tamarin-prover-theory",
          "partial": "System",
          "signature": "System-\u003eReduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:conjoinSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a constraint reduction returning only the updated constraint systems\n and the new freshness states.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "execReduction",
          "package": "tamarin-prover-theory",
          "signature": "Reduction a -\u003e ProofContext -\u003e System -\u003e FreshState -\u003e Disj (System, FreshState)",
          "source": "src/Theory-Constraint-Solver-Reduction.html#execReduction",
          "type": "function"
        },
        "index": {
          "description": "Run constraint reduction returning only the updated constraint systems and the new freshness states",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "execReduction",
          "normalized": "Reduction a-\u003eProofContext-\u003eSystem-\u003eFreshState-\u003eDisj(System,FreshState)",
          "package": "tamarin-prover-theory",
          "partial": "Reduction",
          "signature": "Reduction a-\u003eProofContext-\u003eSystem-\u003eFreshState-\u003eDisj(System,FreshState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:execReduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eMaudeHandle\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eProofContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "getMaudeHandle",
          "package": "tamarin-prover-theory",
          "signature": "Reduction MaudeHandle",
          "source": "src/Theory-Constraint-Solver-Reduction.html#getMaudeHandle",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the MaudeHandle from the ProofContext",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "getMaudeHandle",
          "package": "tamarin-prover-theory",
          "partial": "Maude Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:getMaudeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eProofContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "getProofContext",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ProofContext",
          "source": "src/Theory-Constraint-Solver-Reduction.html#getProofContext",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the ProofContext",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "getProofContext",
          "package": "tamarin-prover-theory",
          "partial": "Proof Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:getProofContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e atom. Ensures that (almost all) trivial *KU* actions\n are solved immediately using rule *S_{at,u,triv}*. We currently avoid\n adding intermediate products. Indicates whether nodes other than the given\n action have been added to the constraint system.\n\u003c/p\u003e\u003cp\u003eFIXME: Ensure that intermediate products are also solved before stating\n that no rule is applicable.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertAction",
          "package": "tamarin-prover-theory",
          "signature": "NodeId -\u003e LNFact -\u003e Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#insertAction",
          "type": "function"
        },
        "index": {
          "description": "Insert an Action atom Ensures that almost all trivial KU actions are solved immediately using rule at triv We currently avoid adding intermediate products Indicates whether nodes other than the given action have been added to the constraint system FIXME Ensure that intermediate products are also solved before stating that no rule is applicable",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertAction",
          "normalized": "NodeId-\u003eLNFact-\u003eReduction ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Action",
          "signature": "NodeId-\u003eLNFact-\u003eReduction ChangeIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an atom. Returns \u003ccode\u003e\u003ca\u003eChanged\u003c/a\u003e\u003c/code\u003e if another part of the constraint\n system than the set of actions was changed.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertAtom",
          "package": "tamarin-prover-theory",
          "signature": "LNAtom -\u003e Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#insertAtom",
          "type": "function"
        },
        "index": {
          "description": "Insert an atom Returns Changed if another part of the constraint system than the set of actions was changed",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertAtom",
          "normalized": "LNAtom-\u003eReduction ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Atom",
          "signature": "LNAtom-\u003eReduction ChangeIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a chain constrain.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertChain",
          "package": "tamarin-prover-theory",
          "signature": "NodeConc -\u003e NodePrem -\u003e Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#insertChain",
          "type": "function"
        },
        "index": {
          "description": "Insert chain constrain",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertChain",
          "normalized": "NodeConc-\u003eNodePrem-\u003eReduction()",
          "package": "tamarin-prover-theory",
          "partial": "Chain",
          "signature": "NodeConc-\u003eNodePrem-\u003eReduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an edge constraint. CR-rule *DG1_2* is enforced automatically,\n i.e., the fact equalities are enforced.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertEdges",
          "package": "tamarin-prover-theory",
          "signature": "[(NodeConc, LNFact, LNFact, NodePrem)] -\u003e Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#insertEdges",
          "type": "function"
        },
        "index": {
          "description": "Insert an edge constraint CR-rule DG1 is enforced automatically i.e the fact equalities are enforced",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertEdges",
          "normalized": "[(NodeConc,LNFact,LNFact,NodePrem)]-\u003eReduction()",
          "package": "tamarin-prover-theory",
          "partial": "Edges",
          "signature": "[(NodeConc,LNFact,LNFact,NodePrem)]-\u003eReduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eGuarded\u003c/a\u003e\u003c/code\u003e formula. Ensures that existentials, conjunctions, negated\n last atoms, and negated less atoms, are immediately solved using the rules\n *S_exists*, *S_and*, *S_not,last*, and *S_not,less*. Only the inserted\n formula is marked as solved. Other intermediate formulas are not marked.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertFormula",
          "package": "tamarin-prover-theory",
          "signature": "LNGuarded -\u003e Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#insertFormula",
          "type": "function"
        },
        "index": {
          "description": "Insert Guarded formula Ensures that existentials conjunctions negated last atoms and negated less atoms are immediately solved using the rules exists and not last and not less Only the inserted formula is marked as solved Other intermediate formulas are not marked",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertFormula",
          "normalized": "LNGuarded-\u003eReduction()",
          "package": "tamarin-prover-theory",
          "partial": "Formula",
          "signature": "LNGuarded-\u003eReduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a fresh rule node labelled with a fresh instance of one of the rules\n and solve it's \u003ccode\u003eFr\u003c/code\u003e, \u003ccode\u003eIn\u003c/code\u003e, and \u003ccode\u003eKU\u003c/code\u003e premises immediatly.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertFreshNode",
          "package": "tamarin-prover-theory",
          "signature": "[RuleAC] -\u003e Reduction (NodeId, RuleACInst)",
          "source": "src/Theory-Constraint-Solver-Reduction.html#insertFreshNode",
          "type": "function"
        },
        "index": {
          "description": "Insert fresh rule node labelled with fresh instance of one of the rules and solve it Fr In and KU premises immediatly",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertFreshNode",
          "normalized": "[RuleAC]-\u003eReduction(NodeId,RuleACInst)",
          "package": "tamarin-prover-theory",
          "partial": "Fresh Node",
          "signature": "[RuleAC]-\u003eReduction(NodeId,RuleACInst)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertFreshNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a fresh rule node labelled with a fresh instance of one of the\n rules and return one of the conclusions.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertFreshNodeConc",
          "package": "tamarin-prover-theory",
          "signature": "[RuleAC] -\u003e Reduction (RuleACInst, NodeConc, LNFact)",
          "source": "src/Theory-Constraint-Solver-Reduction.html#insertFreshNodeConc",
          "type": "function"
        },
        "index": {
          "description": "Insert fresh rule node labelled with fresh instance of one of the rules and return one of the conclusions",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertFreshNodeConc",
          "normalized": "[RuleAC]-\u003eReduction(RuleACInst,NodeConc,LNFact)",
          "package": "tamarin-prover-theory",
          "partial": "Fresh Node Conc",
          "signature": "[RuleAC]-\u003eReduction(RuleACInst,NodeConc,LNFact)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertFreshNodeConc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eGoal\u003c/a\u003e\u003c/code\u003e and store its age.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal -\u003e Bool -\u003e Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#insertGoal",
          "type": "function"
        },
        "index": {
          "description": "Insert Goal and store its age",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertGoal",
          "normalized": "Goal-\u003eBool-\u003eReduction()",
          "package": "tamarin-prover-theory",
          "partial": "Goal",
          "signature": "Goal-\u003eBool-\u003eReduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eLess\u003c/a\u003e\u003c/code\u003e atom. \u003ccode\u003einsertLess i j\u003c/code\u003e means that *i \u003c j* is added.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertLess",
          "package": "tamarin-prover-theory",
          "signature": "NodeId -\u003e NodeId -\u003e Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#insertLess",
          "type": "function"
        },
        "index": {
          "description": "Insert Less atom insertLess means that is added",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "insertLess",
          "normalized": "NodeId-\u003eNodeId-\u003eReduction()",
          "package": "tamarin-prover-theory",
          "partial": "Less",
          "signature": "NodeId-\u003eNodeId-\u003eReduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:insertLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel a node-id with a fresh instance of one of the rules and\n solve it's \u003ccode\u003eFr\u003c/code\u003e, \u003ccode\u003eIn\u003c/code\u003e, and \u003ccode\u003eKU\u003c/code\u003e premises immediatly.\n\u003c/p\u003e\u003cp\u003ePRE: Node must not yet be labelled with a rule.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "labelNodeId",
          "package": "tamarin-prover-theory",
          "signature": "NodeId -\u003e [RuleAC] -\u003e Reduction RuleACInst",
          "source": "src/Theory-Constraint-Solver-Reduction.html#labelNodeId",
          "type": "function"
        },
        "index": {
          "description": "Label node-id with fresh instance of one of the rules and solve it Fr In and KU premises immediatly PRE Node must not yet be labelled with rule",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "labelNodeId",
          "normalized": "NodeId-\u003e[RuleAC]-\u003eReduction RuleACInst",
          "package": "tamarin-prover-theory",
          "partial": "Node Id",
          "signature": "NodeId-\u003e[RuleAC]-\u003eReduction RuleACInst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:labelNodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark the given goal as solved.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "markGoalAsSolved",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e Goal -\u003e Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#markGoalAsSolved",
          "type": "function"
        },
        "index": {
          "description": "Mark the given goal as solved",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "markGoalAsSolved",
          "normalized": "String-\u003eGoal-\u003eReduction()",
          "package": "tamarin-prover-theory",
          "partial": "Goal As Solved",
          "signature": "String-\u003eGoal-\u003eReduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:markGoalAsSolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the formula can be reduced by one of the rules implemented in\n \u003ccode\u003e\u003ca\u003einsertFormula\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "reducibleFormula",
          "package": "tamarin-prover-theory",
          "signature": "LNGuarded -\u003e Bool",
          "source": "src/Theory-Constraint-Solver-Reduction.html#reducibleFormula",
          "type": "function"
        },
        "index": {
          "description": "True iff the formula can be reduced by one of the rules implemented in insertFormula",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "reducibleFormula",
          "normalized": "LNGuarded-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Formula",
          "signature": "LNGuarded-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:reducibleFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "removeSolvedSplitGoals",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#removeSolvedSplitGoals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "removeSolvedSplitGoals",
          "normalized": "Reduction()",
          "package": "tamarin-prover-theory",
          "partial": "Solved Split Goals",
          "signature": "Reduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:removeSolvedSplitGoals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a constraint reduction. Returns a list of constraint systems whose\n combined solutions are equal to the solutions of the given system. This\n property is obviously not enforced, but it must be respected by all\n functions of type \u003ccode\u003e\u003ca\u003eReduction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "runReduction",
          "package": "tamarin-prover-theory",
          "signature": "Reduction a -\u003e ProofContext -\u003e System -\u003e FreshState -\u003e Disj ((a, System), FreshState)",
          "source": "src/Theory-Constraint-Solver-Reduction.html#runReduction",
          "type": "function"
        },
        "index": {
          "description": "Run constraint reduction Returns list of constraint systems whose combined solutions are equal to the solutions of the given system This property is obviously not enforced but it must be respected by all functions of type Reduction",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "runReduction",
          "normalized": "Reduction a-\u003eProofContext-\u003eSystem-\u003eFreshState-\u003eDisj((a,System),FreshState)",
          "package": "tamarin-prover-theory",
          "partial": "Reduction",
          "signature": "Reduction a-\u003eProofContext-\u003eSystem-\u003eFreshState-\u003eDisj((a,System),FreshState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:runReduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a list of fact equalities to the equation store, if possible.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveFactEqs",
          "package": "tamarin-prover-theory",
          "signature": "SplitStrategy -\u003e [Equal LNFact] -\u003e Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#solveFactEqs",
          "type": "function"
        },
        "index": {
          "description": "Add list of fact equalities to the equation store if possible",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveFactEqs",
          "normalized": "SplitStrategy-\u003e[Equal LNFact]-\u003eReduction ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Fact Eqs",
          "signature": "SplitStrategy-\u003e[Equal LNFact]-\u003eReduction ChangeIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveFactEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a list of node equalities to the equation store.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveNodeIdEqs",
          "package": "tamarin-prover-theory",
          "signature": "[Equal NodeId] -\u003e Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#solveNodeIdEqs",
          "type": "function"
        },
        "index": {
          "description": "Add list of node equalities to the equation store",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveNodeIdEqs",
          "normalized": "[Equal NodeId]-\u003eReduction ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Node Id Eqs",
          "signature": "[Equal NodeId]-\u003eReduction ChangeIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveNodeIdEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a list of rule equalities to the equation store, if possible.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveRuleEqs",
          "package": "tamarin-prover-theory",
          "signature": "SplitStrategy -\u003e [Equal RuleACInst] -\u003e Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#solveRuleEqs",
          "type": "function"
        },
        "index": {
          "description": "Add list of rule equalities to the equation store if possible",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveRuleEqs",
          "normalized": "SplitStrategy-\u003e[Equal RuleACInst]-\u003eReduction ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Rule Eqs",
          "signature": "SplitStrategy-\u003e[Equal RuleACInst]-\u003eReduction ChangeIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveRuleEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a list of equalities in substitution form to the equation store\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveSubstEqs",
          "package": "tamarin-prover-theory",
          "signature": "SplitStrategy -\u003e LNSubst -\u003e Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#solveSubstEqs",
          "type": "function"
        },
        "index": {
          "description": "Add list of equalities in substitution form to the equation store",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveSubstEqs",
          "normalized": "SplitStrategy-\u003eLNSubst-\u003eReduction ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Subst Eqs",
          "signature": "SplitStrategy-\u003eLNSubst-\u003eReduction ChangeIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveSubstEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a list of term equalities to the equation store. And\n  split resulting disjunction of equations according\n  to given split strategy.\n\u003c/p\u003e\u003cp\u003eNote that updating the remaining parts of the constraint system with the\n substitution has to be performed using a separate call to \u003ccode\u003e\u003ca\u003esubstSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveTermEqs",
          "package": "tamarin-prover-theory",
          "signature": "SplitStrategy -\u003e [Equal LNTerm] -\u003e Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#solveTermEqs",
          "type": "function"
        },
        "index": {
          "description": "Add list of term equalities to the equation store And split resulting disjunction of equations according to given split strategy Note that updating the remaining parts of the constraint system with the substitution has to be performed using separate call to substSystem",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "solveTermEqs",
          "normalized": "SplitStrategy-\u003e[Equal LNTerm]-\u003eReduction ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Term Eqs",
          "signature": "SplitStrategy-\u003e[Equal LNTerm]-\u003eReduction ChangeIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:solveTermEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substEdges",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#substEdges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substEdges",
          "normalized": "Reduction()",
          "package": "tamarin-prover-theory",
          "partial": "Edges",
          "signature": "Reduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substFormulas",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#substFormulas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substFormulas",
          "normalized": "Reduction()",
          "package": "tamarin-prover-theory",
          "partial": "Formulas",
          "signature": "Reduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substFormulas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substLastAtom",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#substLastAtom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substLastAtom",
          "normalized": "Reduction()",
          "package": "tamarin-prover-theory",
          "partial": "Last Atom",
          "signature": "Reduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substLastAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substLessAtoms",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#substLessAtoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substLessAtoms",
          "normalized": "Reduction()",
          "package": "tamarin-prover-theory",
          "partial": "Less Atoms",
          "signature": "Reduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substLessAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the current substitution of the equation store the nodes of the\n constraint system. Indicates whether additional equalities were added to\n the equations store.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substNodes",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#substNodes",
          "type": "function"
        },
        "index": {
          "description": "Apply the current substitution of the equation store the nodes of the constraint system Indicates whether additional equalities were added to the equations store",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substNodes",
          "package": "tamarin-prover-theory",
          "partial": "Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substSolvedFormulas",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#substSolvedFormulas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substSolvedFormulas",
          "normalized": "Reduction()",
          "package": "tamarin-prover-theory",
          "partial": "Solved Formulas",
          "signature": "Reduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substSolvedFormulas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the current substitution of the equation store to the remainder of\n the sequent.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substSystem",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#substSystem",
          "type": "function"
        },
        "index": {
          "description": "Apply the current substitution of the equation store to the remainder of the sequent",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "substSystem",
          "package": "tamarin-prover-theory",
          "partial": "System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:substSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly apply a monadic action, if there has been a change.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "whenChanged",
          "package": "tamarin-prover-theory",
          "signature": "ChangeIndicator -\u003e m () -\u003e m ()",
          "source": "src/Theory-Constraint-Solver-Reduction.html#whenChanged",
          "type": "function"
        },
        "index": {
          "description": "Only apply monadic action if there has been change",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "whenChanged",
          "normalized": "ChangeIndicator-\u003ea()-\u003ea()",
          "package": "tamarin-prover-theory",
          "partial": "Changed",
          "signature": "ChangeIndicator-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:whenChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a \u003ccode\u003e\u003ca\u003eReduction\u003c/a\u003e\u003c/code\u003e as long as it results in changes. Indicate whether\n at least one change was performed.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "whileChanging",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ChangeIndicator -\u003e Reduction ChangeIndicator",
          "source": "src/Theory-Constraint-Solver-Reduction.html#whileChanging",
          "type": "function"
        },
        "index": {
          "description": "Execute Reduction as long as it results in changes Indicate whether at least one change was performed",
          "hierarchy": "Theory Constraint Solver Reduction",
          "module": "Theory.Constraint.Solver.Reduction",
          "name": "whileChanging",
          "normalized": "Reduction ChangeIndicator-\u003eReduction ChangeIndicator",
          "package": "tamarin-prover-theory",
          "partial": "Changing",
          "signature": "Reduction ChangeIndicator-\u003eReduction ChangeIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Reduction.html#v:whileChanging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements all rules that do not result in case distinctions\n and equation solving. Some additional cases may although result from\n splitting over multiple AC-unifiers. Note that a few of these rules are\n implemented directly in the methods for inserting constraints to the\n constraint system.  These methods are provided by\n \u003ca\u003eTheory.Constraint.Solver.Reduction\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.Solver.Simplify",
          "name": "Simplify",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Simplify.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements all rules that do not result in case distinctions and equation solving Some additional cases may although result from splitting over multiple AC-unifiers Note that few of these rules are implemented directly in the methods for inserting constraints to the constraint system These methods are provided by Theory.Constraint.Solver.Reduction",
          "hierarchy": "Theory Constraint Solver Simplify",
          "module": "Theory.Constraint.Solver.Simplify",
          "name": "Simplify",
          "package": "tamarin-prover-theory",
          "partial": "Simplify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Simplify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply CR-rules that don't result in case splitting until the constraint\n system does not change anymore.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Simplify",
          "name": "simplifySystem",
          "package": "tamarin-prover-theory",
          "signature": "Reduction ()",
          "source": "src/Theory-Constraint-Solver-Simplify.html#simplifySystem",
          "type": "function"
        },
        "index": {
          "description": "Apply CR-rules that don result in case splitting until the constraint system does not change anymore",
          "hierarchy": "Theory Constraint Solver Simplify",
          "module": "Theory.Constraint.Solver.Simplify",
          "name": "simplifySystem",
          "normalized": "Reduction()",
          "package": "tamarin-prover-theory",
          "partial": "System",
          "signature": "Reduction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Simplify.html#v:simplifySystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon types for our constraint solver. They must be declared jointly\n because there is a recursive dependency between goals, proof contexts, and\n case distinctions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.Solver.Types",
          "name": "Types",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Common types for our constraint solver They must be declared jointly because there is recursive dependency between goals proof contexts and case distinctions",
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "Types",
          "package": "tamarin-prover-theory",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA big-step case distinction.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Types",
          "name": "CaseDistinction",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
          "type": "data"
        },
        "index": {
          "description": "big-step case distinction",
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "CaseDistinction",
          "package": "tamarin-prover-theory",
          "partial": "Case Distinction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#t:CaseDistinction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Types",
          "name": "ClassifiedRules",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "ClassifiedRules",
          "package": "tamarin-prover-theory",
          "partial": "Classified Rules",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#t:ClassifiedRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Types",
          "name": "InductionHint",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "InductionHint",
          "package": "tamarin-prover-theory",
          "partial": "Induction Hint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#t:InductionHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proof context contains the globally fresh facts, classified rewrite\n rules and the corresponding precomputed premise case distinction theorems.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Types",
          "name": "ProofContext",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "data"
        },
        "index": {
          "description": "proof context contains the globally fresh facts classified rewrite rules and the corresponding precomputed premise case distinction theorems",
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "ProofContext",
          "package": "tamarin-prover-theory",
          "partial": "Proof Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#t:ProofContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "AvoidInduction",
          "package": "tamarin-prover-theory",
          "signature": "AvoidInduction",
          "source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:AvoidInduction\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:AvoidInduction\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "AvoidInduction",
          "package": "tamarin-prover-theory",
          "partial": "Avoid Induction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:AvoidInduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Types",
          "name": "CaseDistinction",
          "package": "tamarin-prover-theory",
          "signature": "CaseDistinction",
          "source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "CaseDistinction",
          "package": "tamarin-prover-theory",
          "partial": "Case Distinction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:CaseDistinction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "ClassifiedRules",
          "package": "tamarin-prover-theory",
          "signature": "ClassifiedRules",
          "source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:ClassifiedRules\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:ClassifiedRules\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "ClassifiedRules",
          "package": "tamarin-prover-theory",
          "partial": "Classified Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:ClassifiedRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "ProofContext",
          "package": "tamarin-prover-theory",
          "signature": "ProofContext",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:ProofContext\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:ProofContext\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "ProofContext",
          "package": "tamarin-prover-theory",
          "partial": "Proof Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:ProofContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "UseInduction",
          "package": "tamarin-prover-theory",
          "signature": "UseInduction",
          "source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:UseInduction\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:UseInduction\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "UseInduction",
          "package": "tamarin-prover-theory",
          "partial": "Use Induction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:UseInduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Types",
          "name": "_cdCases",
          "package": "tamarin-prover-theory",
          "signature": "Disj ([String], System)",
          "source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_cdCases",
          "normalized": "Disj([String],System)",
          "package": "tamarin-prover-theory",
          "partial": "Cases",
          "signature": "Disj([String],System)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_cdCases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver.Types",
          "name": "_cdGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal",
          "source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_cdGoal",
          "package": "tamarin-prover-theory",
          "partial": "Goal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_cdGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_crConstruct",
          "package": "tamarin-prover-theory",
          "signature": "[RuleAC]",
          "source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_crConstruct\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_crConstruct\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_crConstruct",
          "normalized": "[RuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Construct",
          "signature": "[RuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_crConstruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_crDestruct",
          "package": "tamarin-prover-theory",
          "signature": "[RuleAC]",
          "source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_crDestruct\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_crDestruct\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_crDestruct",
          "normalized": "[RuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Destruct",
          "signature": "[RuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_crDestruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_crProtocol",
          "package": "tamarin-prover-theory",
          "signature": "[RuleAC]",
          "source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_crProtocol\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_crProtocol\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_crProtocol",
          "normalized": "[RuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Protocol",
          "signature": "[RuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_crProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_pcCaseDistKind",
          "package": "tamarin-prover-theory",
          "signature": "CaseDistKind",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcCaseDistKind\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcCaseDistKind\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_pcCaseDistKind",
          "package": "tamarin-prover-theory",
          "partial": "Case Dist Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcCaseDistKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_pcCaseDists",
          "package": "tamarin-prover-theory",
          "signature": "[CaseDistinction]",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcCaseDists\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcCaseDists\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_pcCaseDists",
          "normalized": "[CaseDistinction]",
          "package": "tamarin-prover-theory",
          "partial": "Case Dists",
          "signature": "[CaseDistinction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcCaseDists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_pcInjectiveFactInsts",
          "package": "tamarin-prover-theory",
          "signature": "Set FactTag",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcInjectiveFactInsts\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcInjectiveFactInsts\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_pcInjectiveFactInsts",
          "package": "tamarin-prover-theory",
          "partial": "Injective Fact Insts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcInjectiveFactInsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_pcRules",
          "package": "tamarin-prover-theory",
          "signature": "ClassifiedRules",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcRules\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcRules\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_pcRules",
          "package": "tamarin-prover-theory",
          "partial": "Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_pcSignature",
          "package": "tamarin-prover-theory",
          "signature": "SignatureWithMaude",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcSignature\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcSignature\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_pcSignature",
          "package": "tamarin-prover-theory",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_pcTraceQuantifier",
          "package": "tamarin-prover-theory",
          "signature": "SystemTraceQuantifier",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcTraceQuantifier\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcTraceQuantifier\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_pcTraceQuantifier",
          "package": "tamarin-prover-theory",
          "partial": "Trace Quantifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcTraceQuantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "_pcUseInduction",
          "package": "tamarin-prover-theory",
          "signature": "InductionHint",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcUseInduction\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:_pcUseInduction\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "_pcUseInduction",
          "package": "tamarin-prover-theory",
          "partial": "Use Induction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:_pcUseInduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "cdCases",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr CaseDistinction (Disj ([String], System))",
          "source": "src/Theory-Constraint-Solver-Types.html#cdCases",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:cdCases\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:cdCases\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "cdCases",
          "normalized": "Lens a CaseDistinction(Disj([String],System))",
          "package": "tamarin-prover-theory",
          "partial": "Cases",
          "signature": "Lens arr CaseDistinction(Disj([String],System))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:cdCases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "cdGoal",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr CaseDistinction Goal",
          "source": "src/Theory-Constraint-Solver-Types.html#cdGoal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:cdGoal\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:cdGoal\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "cdGoal",
          "package": "tamarin-prover-theory",
          "partial": "Goal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:cdGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "crConstruct",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ClassifiedRules [RuleAC]",
          "source": "src/Theory-Constraint-Solver-Types.html#crConstruct",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:crConstruct\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:crConstruct\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "crConstruct",
          "normalized": "Lens a ClassifiedRules[RuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Construct",
          "signature": "Lens arr ClassifiedRules[RuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:crConstruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "crDestruct",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ClassifiedRules [RuleAC]",
          "source": "src/Theory-Constraint-Solver-Types.html#crDestruct",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:crDestruct\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:crDestruct\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "crDestruct",
          "normalized": "Lens a ClassifiedRules[RuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Destruct",
          "signature": "Lens arr ClassifiedRules[RuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:crDestruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "crProtocol",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ClassifiedRules [RuleAC]",
          "source": "src/Theory-Constraint-Solver-Types.html#crProtocol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:crProtocol\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:crProtocol\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "crProtocol",
          "normalized": "Lens a ClassifiedRules[RuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Protocol",
          "signature": "Lens arr ClassifiedRules[RuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:crProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty proof rule set.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Types",
          "name": "emptyClassifiedRules",
          "package": "tamarin-prover-theory",
          "signature": "ClassifiedRules",
          "source": "src/Theory-Constraint-Solver-Types.html#emptyClassifiedRules",
          "type": "function"
        },
        "index": {
          "description": "The empty proof rule set",
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "emptyClassifiedRules",
          "package": "tamarin-prover-theory",
          "partial": "Classified Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:emptyClassifiedRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ejoinAllRules rules\u003c/code\u003e computes the union of all rules classified in\n \u003ccode\u003erules\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "joinAllRules",
          "package": "tamarin-prover-theory",
          "signature": "ClassifiedRules -\u003e [RuleAC]",
          "source": "src/Theory-Constraint-Solver-Types.html#joinAllRules",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:joinAllRules\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:joinAllRules\"]"
        },
        "index": {
          "description": "joinAllRules rules computes the union of all rules classified in rules",
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "joinAllRules",
          "normalized": "ClassifiedRules-\u003e[RuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "All Rules",
          "signature": "ClassifiedRules-\u003e[RuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:joinAllRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all non-silent rules.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Types",
          "name": "nonSilentRules",
          "package": "tamarin-prover-theory",
          "signature": "ClassifiedRules -\u003e [RuleAC]",
          "source": "src/Theory-Constraint-Solver-Types.html#nonSilentRules",
          "type": "function"
        },
        "index": {
          "description": "Extract all non-silent rules",
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "nonSilentRules",
          "normalized": "ClassifiedRules-\u003e[RuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Silent Rules",
          "signature": "ClassifiedRules-\u003e[RuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:nonSilentRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "pcCaseDistKind",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProofContext CaseDistKind",
          "source": "src/Theory-Constraint-Solver-Types.html#pcCaseDistKind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcCaseDistKind\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcCaseDistKind\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "pcCaseDistKind",
          "package": "tamarin-prover-theory",
          "partial": "Case Dist Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcCaseDistKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "pcCaseDists",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProofContext [CaseDistinction]",
          "source": "src/Theory-Constraint-Solver-Types.html#pcCaseDists",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcCaseDists\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcCaseDists\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "pcCaseDists",
          "normalized": "Lens a ProofContext[CaseDistinction]",
          "package": "tamarin-prover-theory",
          "partial": "Case Dists",
          "signature": "Lens arr ProofContext[CaseDistinction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcCaseDists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "pcInjectiveFactInsts",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProofContext (Set FactTag)",
          "source": "src/Theory-Constraint-Solver-Types.html#pcInjectiveFactInsts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcInjectiveFactInsts\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcInjectiveFactInsts\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "pcInjectiveFactInsts",
          "package": "tamarin-prover-theory",
          "partial": "Injective Fact Insts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcInjectiveFactInsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaudeHandle\u003c/a\u003e\u003c/code\u003e of a proof-context.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Types",
          "name": "pcMaudeHandle",
          "package": "tamarin-prover-theory",
          "signature": "ProofContext :-\u003e MaudeHandle",
          "source": "src/Theory-Constraint-Solver-Types.html#pcMaudeHandle",
          "type": "function"
        },
        "index": {
          "description": "The MaudeHandle of proof-context",
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "pcMaudeHandle",
          "normalized": "ProofContext-\u003eMaudeHandle",
          "package": "tamarin-prover-theory",
          "partial": "Maude Handle",
          "signature": "ProofContext-\u003eMaudeHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcMaudeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "pcRules",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProofContext ClassifiedRules",
          "source": "src/Theory-Constraint-Solver-Types.html#pcRules",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcRules\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcRules\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "pcRules",
          "package": "tamarin-prover-theory",
          "partial": "Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "pcSignature",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProofContext SignatureWithMaude",
          "source": "src/Theory-Constraint-Solver-Types.html#pcSignature",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcSignature\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcSignature\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "pcSignature",
          "package": "tamarin-prover-theory",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "pcTraceQuantifier",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProofContext SystemTraceQuantifier",
          "source": "src/Theory-Constraint-Solver-Types.html#pcTraceQuantifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcTraceQuantifier\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcTraceQuantifier\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "pcTraceQuantifier",
          "package": "tamarin-prover-theory",
          "partial": "Trace Quantifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcTraceQuantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Theory.Constraint.Solver.Types\",\"Theory.Constraint.Solver\"]",
          "name": "pcUseInduction",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProofContext InductionHint",
          "source": "src/Theory-Constraint-Solver-Types.html#pcUseInduction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcUseInduction\",\"http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#v:pcUseInduction\"]"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "pcUseInduction",
          "package": "tamarin-prover-theory",
          "partial": "Use Induction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:pcUseInduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a case distinction\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver.Types",
          "name": "prettyCaseDistinction",
          "package": "tamarin-prover-theory",
          "signature": "CaseDistinction -\u003e d",
          "source": "src/Theory-Constraint-Solver-Types.html#prettyCaseDistinction",
          "type": "function"
        },
        "index": {
          "description": "Pretty print case distinction",
          "hierarchy": "Theory Constraint Solver Types",
          "module": "Theory.Constraint.Solver.Types",
          "name": "prettyCaseDistinction",
          "normalized": "CaseDistinction-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Case Distinction",
          "signature": "CaseDistinction-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver-Types.html#v:prettyCaseDistinction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe public interface of the constraint solver, which implements all\n constraint reduction rules and together with a rule application heuristic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.Solver",
          "name": "Solver",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver.html",
          "type": "module"
        },
        "index": {
          "description": "The public interface of the constraint solver which implements all constraint reduction rules and together with rule application heuristic",
          "hierarchy": "Theory Constraint Solver",
          "module": "Theory.Constraint.Solver",
          "name": "Solver",
          "package": "tamarin-prover-theory",
          "partial": "Solver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA big-step case distinction.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver",
          "name": "CaseDistinction",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Types.html#CaseDistinction",
          "type": "data"
        },
        "index": {
          "description": "big-step case distinction",
          "hierarchy": "Theory Constraint Solver",
          "module": "Theory.Constraint.Solver",
          "name": "CaseDistinction",
          "package": "tamarin-prover-theory",
          "partial": "Case Distinction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:CaseDistinction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver",
          "name": "ClassifiedRules",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Types.html#ClassifiedRules",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver",
          "module": "Theory.Constraint.Solver",
          "name": "ClassifiedRules",
          "package": "tamarin-prover-theory",
          "partial": "Classified Rules",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:ClassifiedRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReasons why a constraint \u003ccode\u003e\u003ca\u003eSystem\u003c/a\u003e\u003c/code\u003e can be contradictory.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver",
          "name": "Contradiction",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Contradictions.html#Contradiction",
          "type": "data"
        },
        "index": {
          "description": "Reasons why constraint System can be contradictory",
          "hierarchy": "Theory Constraint Solver",
          "module": "Theory.Constraint.Solver",
          "name": "Contradiction",
          "package": "tamarin-prover-theory",
          "partial": "Contradiction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:Contradiction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.Solver",
          "name": "InductionHint",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Types.html#InductionHint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Constraint Solver",
          "module": "Theory.Constraint.Solver",
          "name": "InductionHint",
          "package": "tamarin-prover-theory",
          "partial": "Induction Hint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:InductionHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proof context contains the globally fresh facts, classified rewrite\n rules and the corresponding precomputed premise case distinction theorems.\n\u003c/p\u003e",
          "module": "Theory.Constraint.Solver",
          "name": "ProofContext",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-Solver-Types.html#ProofContext",
          "type": "data"
        },
        "index": {
          "description": "proof context contains the globally fresh facts classified rewrite rules and the corresponding precomputed premise case distinction theorems",
          "hierarchy": "Theory Constraint Solver",
          "module": "Theory.Constraint.Solver",
          "name": "ProofContext",
          "package": "tamarin-prover-theory",
          "partial": "Proof Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-Solver.html#t:ProofContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes representing constraints.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "Constraints",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Constraints.html",
          "type": "module"
        },
        "index": {
          "description": "Types representing constraints",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "Constraints",
          "package": "tamarin-prover-theory",
          "partial": "Constraints",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA labeled edge in a derivation graph.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "Edge",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Constraints.html#Edge",
          "type": "data"
        },
        "index": {
          "description": "labeled edge in derivation graph",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "Edge",
          "package": "tamarin-prover-theory",
          "partial": "Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGoal\u003c/a\u003e\u003c/code\u003e denotes that a constraint reduction rule is applicable, which\n might result in case splits. We either use a heuristic to decide what goal\n to solve next or leave the choice to user (in case of the interactive UI).\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "Goal",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Constraints.html#Goal",
          "type": "data"
        },
        "index": {
          "description": "Goal denotes that constraint reduction rule is applicable which might result in case splits We either use heuristic to decide what goal to solve next or leave the choice to user in case of the interactive UI",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "Goal",
          "package": "tamarin-prover-theory",
          "partial": "Goal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:Goal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA *&#8918;* constraint between \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "Less",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Constraints.html#Less",
          "type": "type"
        },
        "index": {
          "description": "constraint between NodeId",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "Less",
          "package": "tamarin-prover-theory",
          "partial": "Less",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:Less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conclusion of a node.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "NodeConc",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Constraints.html#NodeConc",
          "type": "type"
        },
        "index": {
          "description": "conclusion of node",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "NodeConc",
          "package": "tamarin-prover-theory",
          "partial": "Node Conc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:NodeConc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA premise of a node.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "NodePrem",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Constraints.html#NodePrem",
          "type": "type"
        },
        "index": {
          "description": "premise of node",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "NodePrem",
          "package": "tamarin-prover-theory",
          "partial": "Node Prem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#t:NodePrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action that must exist in the trace.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "ActionG",
          "package": "tamarin-prover-theory",
          "signature": "ActionG LVar LNFact",
          "source": "src/Theory-Constraint-System-Constraints.html#Goal",
          "type": "function"
        },
        "index": {
          "description": "An action that must exist in the trace",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "ActionG",
          "package": "tamarin-prover-theory",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:ActionG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "ChainG",
          "package": "tamarin-prover-theory",
          "signature": "ChainG NodeConc NodePrem",
          "source": "src/Theory-Constraint-System-Constraints.html#Goal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "ChainG",
          "package": "tamarin-prover-theory",
          "partial": "Chain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:ChainG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA case split over a disjunction.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "DisjG",
          "package": "tamarin-prover-theory",
          "signature": "DisjG (Disj LNGuarded)",
          "source": "src/Theory-Constraint-System-Constraints.html#Goal",
          "type": "function"
        },
        "index": {
          "description": "case split over disjunction",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "DisjG",
          "package": "tamarin-prover-theory",
          "partial": "Disj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:DisjG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "Edge",
          "package": "tamarin-prover-theory",
          "signature": "Edge",
          "source": "src/Theory-Constraint-System-Constraints.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "Edge",
          "package": "tamarin-prover-theory",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA premise that must have an incoming direct edge.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "PremiseG",
          "package": "tamarin-prover-theory",
          "signature": "PremiseG NodePrem LNFact",
          "source": "src/Theory-Constraint-System-Constraints.html#Goal",
          "type": "function"
        },
        "index": {
          "description": "premise that must have an incoming direct edge",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "PremiseG",
          "package": "tamarin-prover-theory",
          "partial": "Premise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:PremiseG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA case split over equalities.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "SplitG",
          "package": "tamarin-prover-theory",
          "signature": "SplitG SplitId",
          "source": "src/Theory-Constraint-System-Constraints.html#Goal",
          "type": "function"
        },
        "index": {
          "description": "case split over equalities",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "SplitG",
          "package": "tamarin-prover-theory",
          "partial": "Split",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:SplitG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "eSrc",
          "package": "tamarin-prover-theory",
          "signature": "NodeConc",
          "source": "src/Theory-Constraint-System-Constraints.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "eSrc",
          "package": "tamarin-prover-theory",
          "partial": "Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:eSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "eTgt",
          "package": "tamarin-prover-theory",
          "signature": "NodePrem",
          "source": "src/Theory-Constraint-System-Constraints.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "eTgt",
          "package": "tamarin-prover-theory",
          "partial": "Tgt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:eTgt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "isActionGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal -\u003e Bool",
          "source": "src/Theory-Constraint-System-Constraints.html#isActionGoal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "isActionGoal",
          "normalized": "Goal-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Action Goal",
          "signature": "Goal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isActionGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "isChainGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal -\u003e Bool",
          "source": "src/Theory-Constraint-System-Constraints.html#isChainGoal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "isChainGoal",
          "normalized": "Goal-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Chain Goal",
          "signature": "Goal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isChainGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "isDisjGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal -\u003e Bool",
          "source": "src/Theory-Constraint-System-Constraints.html#isDisjGoal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "isDisjGoal",
          "normalized": "Goal-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Disj Goal",
          "signature": "Goal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isDisjGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "isPremiseGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal -\u003e Bool",
          "source": "src/Theory-Constraint-System-Constraints.html#isPremiseGoal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "isPremiseGoal",
          "normalized": "Goal-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Premise Goal",
          "signature": "Goal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isPremiseGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "isSplitGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal -\u003e Bool",
          "source": "src/Theory-Constraint-System-Constraints.html#isSplitGoal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "isSplitGoal",
          "normalized": "Goal-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Split Goal",
          "signature": "Goal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isSplitGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Constraints",
          "name": "isStandardActionGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal -\u003e Bool",
          "source": "src/Theory-Constraint-System-Constraints.html#isStandardActionGoal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "isStandardActionGoal",
          "normalized": "Goal-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Standard Action Goal",
          "signature": "Goal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:isStandardActionGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a edge as \u003ccode\u003esrc \u003e-i--j-\u003e tgt\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyEdge",
          "package": "tamarin-prover-theory",
          "signature": "Edge -\u003e d",
          "source": "src/Theory-Constraint-System-Constraints.html#prettyEdge",
          "type": "function"
        },
        "index": {
          "description": "Pretty print edge as src i--j tgt",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyEdge",
          "normalized": "Edge-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Edge",
          "signature": "Edge-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a goal.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyGoal",
          "package": "tamarin-prover-theory",
          "signature": "Goal -\u003e d",
          "source": "src/Theory-Constraint-System-Constraints.html#prettyGoal",
          "type": "function"
        },
        "index": {
          "description": "Pretty print goal",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyGoal",
          "normalized": "Goal-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Goal",
          "signature": "Goal-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a less-atom as \u003ccode\u003esrc \u003c tgt\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyLess",
          "package": "tamarin-prover-theory",
          "signature": "Less -\u003e d",
          "source": "src/Theory-Constraint-System-Constraints.html#prettyLess",
          "type": "function"
        },
        "index": {
          "description": "Pretty print less-atom as src tgt",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyLess",
          "normalized": "Less-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Less",
          "signature": "Less-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a node.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyNode",
          "package": "tamarin-prover-theory",
          "signature": "(NodeId, RuleACInst) -\u003e d",
          "source": "src/Theory-Constraint-System-Constraints.html#prettyNode",
          "type": "function"
        },
        "index": {
          "description": "Pretty print node",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyNode",
          "normalized": "(NodeId,RuleACInst)-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Node",
          "signature": "(NodeId,RuleACInst)-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a node conclusion.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyNodeConc",
          "package": "tamarin-prover-theory",
          "signature": "NodeConc -\u003e d",
          "source": "src/Theory-Constraint-System-Constraints.html#prettyNodeConc",
          "type": "function"
        },
        "index": {
          "description": "Pretty print node conclusion",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyNodeConc",
          "normalized": "NodeConc-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Node Conc",
          "signature": "NodeConc-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyNodeConc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a node premise.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyNodePrem",
          "package": "tamarin-prover-theory",
          "signature": "NodePrem -\u003e d",
          "source": "src/Theory-Constraint-System-Constraints.html#prettyNodePrem",
          "type": "function"
        },
        "index": {
          "description": "Pretty print node premise",
          "hierarchy": "Theory Constraint System Constraints",
          "module": "Theory.Constraint.System.Constraints",
          "name": "prettyNodePrem",
          "normalized": "NodePrem-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Node Prem",
          "signature": "NodePrem-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Constraints.html#v:prettyNodePrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of the graph part of a sequent to a Graphviz Dot file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.System.Dot",
          "name": "Dot",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Dot.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of the graph part of sequent to Graphviz Dot file",
          "hierarchy": "Theory Constraint System Dot",
          "module": "Theory.Constraint.System.Dot",
          "name": "Dot",
          "package": "tamarin-prover-theory",
          "partial": "Dot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe style for nodes of the intruder.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Dot",
          "name": "BoringNodeStyle",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Dot.html#BoringNodeStyle",
          "type": "data"
        },
        "index": {
          "description": "The style for nodes of the intruder",
          "hierarchy": "Theory Constraint System Dot",
          "module": "Theory.Constraint.System.Dot",
          "name": "BoringNodeStyle",
          "package": "tamarin-prover-theory",
          "partial": "Boring Node Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#t:BoringNodeStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Dot",
          "name": "CompactBoringNodes",
          "package": "tamarin-prover-theory",
          "signature": "CompactBoringNodes",
          "source": "src/Theory-Constraint-System-Dot.html#BoringNodeStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Dot",
          "module": "Theory.Constraint.System.Dot",
          "name": "CompactBoringNodes",
          "package": "tamarin-prover-theory",
          "partial": "Compact Boring Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:CompactBoringNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Dot",
          "name": "FullBoringNodes",
          "package": "tamarin-prover-theory",
          "signature": "FullBoringNodes",
          "source": "src/Theory-Constraint-System-Dot.html#BoringNodeStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Dot",
          "module": "Theory.Constraint.System.Dot",
          "name": "FullBoringNodes",
          "package": "tamarin-prover-theory",
          "partial": "Full Boring Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:FullBoringNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsound compression of the sequent that drops fully connected learns and\n knows nodes.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Dot",
          "name": "compressSystem",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e System",
          "source": "src/Theory-Constraint-System-Dot.html#compressSystem",
          "type": "function"
        },
        "index": {
          "description": "Unsound compression of the sequent that drops fully connected learns and knows nodes",
          "hierarchy": "Theory Constraint System Dot",
          "module": "Theory.Constraint.System.Dot",
          "name": "compressSystem",
          "normalized": "System-\u003eSystem",
          "package": "tamarin-prover-theory",
          "partial": "System",
          "signature": "System-\u003eSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:compressSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot a sequent in compact form (one record per rule), if there is anything\n to draw.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Dot",
          "name": "dotSystemCompact",
          "package": "tamarin-prover-theory",
          "signature": "BoringNodeStyle -\u003e System -\u003e Dot ()",
          "source": "src/Theory-Constraint-System-Dot.html#dotSystemCompact",
          "type": "function"
        },
        "index": {
          "description": "Dot sequent in compact form one record per rule if there is anything to draw",
          "hierarchy": "Theory Constraint System Dot",
          "module": "Theory.Constraint.System.Dot",
          "name": "dotSystemCompact",
          "normalized": "BoringNodeStyle-\u003eSystem-\u003eDot()",
          "package": "tamarin-prover-theory",
          "partial": "System Compact",
          "signature": "BoringNodeStyle-\u003eSystem-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:dotSystemCompact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the sequent to a \u003ccode\u003e\u003ca\u003eDot\u003c/a\u003e\u003c/code\u003e action representing this sequent as a\n graph in the GraphViz format. The style is loose in the sense that each\n premise and conclusion gets its own node.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Dot",
          "name": "dotSystemLoose",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e Dot ()",
          "source": "src/Theory-Constraint-System-Dot.html#dotSystemLoose",
          "type": "function"
        },
        "index": {
          "description": "Convert the sequent to Dot action representing this sequent as graph in the GraphViz format The style is loose in the sense that each premise and conclusion gets its own node",
          "hierarchy": "Theory Constraint System Dot",
          "module": "Theory.Constraint.System.Dot",
          "name": "dotSystemLoose",
          "normalized": "System-\u003eDot()",
          "package": "tamarin-prover-theory",
          "partial": "System Loose",
          "signature": "System-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:dotSystemLoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the dotted system will be a non-empty graph.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Dot",
          "name": "nonEmptyGraph",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e Bool",
          "source": "src/Theory-Constraint-System-Dot.html#nonEmptyGraph",
          "type": "function"
        },
        "index": {
          "description": "True iff the dotted system will be non-empty graph",
          "hierarchy": "Theory Constraint System Dot",
          "module": "Theory.Constraint.System.Dot",
          "name": "nonEmptyGraph",
          "normalized": "System-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Empty Graph",
          "signature": "System-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Dot.html#v:nonEmptyGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGuarded formulas.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "Guarded",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Guarded.html",
          "type": "module"
        },
        "index": {
          "description": "Guarded formulas",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "Guarded",
          "package": "tamarin-prover-theory",
          "partial": "Guarded",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtoms that are allowed as guards.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "GAtom",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Guarded.html#GAtom",
          "type": "data"
        },
        "index": {
          "description": "Atoms that are allowed as guards",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "GAtom",
          "package": "tamarin-prover-theory",
          "partial": "GAtom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#t:GAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "Guarded",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Guarded.html#Guarded",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "Guarded",
          "package": "tamarin-prover-theory",
          "partial": "Guarded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#t:Guarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "LGuarded",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Guarded.html#LGuarded",
          "type": "type"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "LGuarded",
          "package": "tamarin-prover-theory",
          "partial": "LGuarded",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#t:LGuarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "LNGuarded",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System-Guarded.html#LNGuarded",
          "type": "type"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "LNGuarded",
          "package": "tamarin-prover-theory",
          "partial": "LNGuarded",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#t:LNGuarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "GAction",
          "package": "tamarin-prover-theory",
          "signature": "GAction (t, Fact t)",
          "source": "src/Theory-Constraint-System-Guarded.html#GAtom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "GAction",
          "normalized": "GAction(a,Fact a)",
          "package": "tamarin-prover-theory",
          "partial": "GAction",
          "signature": "GAction(t,Fact t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "GAto",
          "package": "tamarin-prover-theory",
          "signature": "GAto (Atom (VTerm c (BVar v)))",
          "source": "src/Theory-Constraint-System-Guarded.html#Guarded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "GAto",
          "package": "tamarin-prover-theory",
          "partial": "GAto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GAto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "GConj",
          "package": "tamarin-prover-theory",
          "signature": "GConj (Conj (Guarded s c v))",
          "source": "src/Theory-Constraint-System-Guarded.html#Guarded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "GConj",
          "package": "tamarin-prover-theory",
          "partial": "GConj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "GDisj",
          "package": "tamarin-prover-theory",
          "signature": "GDisj (Disj (Guarded s c v))",
          "source": "src/Theory-Constraint-System-Guarded.html#Guarded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "GDisj",
          "package": "tamarin-prover-theory",
          "partial": "GDisj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GDisj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "GEqE",
          "package": "tamarin-prover-theory",
          "signature": "GEqE (t, t)",
          "source": "src/Theory-Constraint-System-Guarded.html#GAtom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "GEqE",
          "normalized": "GEqE(a,a)",
          "package": "tamarin-prover-theory",
          "partial": "GEq",
          "signature": "GEqE(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GEqE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDenotes \u003ccode\u003eALL xs. as =\u003e gf\u003c/code\u003e or \u003ccode\u003eEx xs. as & gf&\n depending on the \u003ccode\u003e\u003ca\u003eQuantifier\u003c/a\u003e\u003c/code\u003e.\n We assume that all bound variables xs occur in\n f\u003c/code\u003ei atoms in as.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "GGuarded",
          "package": "tamarin-prover-theory",
          "signature": "GGuarded Quantifier [s] [Atom (VTerm c (BVar v))] (Guarded s c v)",
          "source": "src/Theory-Constraint-System-Guarded.html#Guarded",
          "type": "function"
        },
        "index": {
          "description": "Denotes ALL xs as gf or Ex xs as gf depending on the Quantifier We assume that all bound variables xs occur in atoms in as",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "GGuarded",
          "normalized": "GGuarded Quantifier[a][Atom(VTerm b(BVar c))](Guarded a b c)",
          "package": "tamarin-prover-theory",
          "partial": "GGuarded",
          "signature": "GGuarded Quantifier[s][Atom(VTerm c(BVar v))](Guarded s c v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:GGuarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eAtom\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003eGAtom\u003c/a\u003e\u003c/code\u003es, if possible.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "atomToGAtom",
          "package": "tamarin-prover-theory",
          "signature": "Atom t -\u003e GAtom t",
          "source": "src/Theory-Constraint-System-Guarded.html#atomToGAtom",
          "type": "function"
        },
        "index": {
          "description": "Convert Atom to GAtom if possible",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "atomToGAtom",
          "normalized": "Atom a-\u003eGAtom a",
          "package": "tamarin-prover-theory",
          "partial": "To GAtom",
          "signature": "Atom t-\u003eGAtom t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:atomToGAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssuming that there are no more bound variables left in an atom of a\n formula, convert it to an atom with free variables only.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "bvarToLVar",
          "package": "tamarin-prover-theory",
          "signature": "Atom (VTerm c (BVar LVar)) -\u003e Atom (VTerm c LVar)",
          "source": "src/Theory-Constraint-System-Guarded.html#bvarToLVar",
          "type": "function"
        },
        "index": {
          "description": "Assuming that there are no more bound variables left in an atom of formula convert it to an atom with free variables only",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "bvarToLVar",
          "normalized": "Atom(VTerm a(BVar LVar))-\u003eAtom(VTerm a LVar)",
          "package": "tamarin-prover-theory",
          "partial": "To LVar",
          "signature": "Atom(VTerm c(BVar LVar))-\u003eAtom(VTerm c LVar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:bvarToLVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eformulaToGuarded fm\u003c/code\u003e returns a guarded formula \u003ccode\u003egf\u003c/code\u003e that is\n equivalent to \u003ccode\u003efm\u003c/code\u003e if possible.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "formulaToGuarded",
          "package": "tamarin-prover-theory",
          "signature": "LNFormula -\u003e Either d LNGuarded",
          "source": "src/Theory-Constraint-System-Guarded.html#formulaToGuarded",
          "type": "function"
        },
        "index": {
          "description": "formulaToGuarded fm returns guarded formula gf that is equivalent to fm if possible",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "formulaToGuarded",
          "normalized": "LNFormula-\u003eEither a LNGuarded",
          "package": "tamarin-prover-theory",
          "partial": "To Guarded",
          "signature": "LNFormula-\u003eEither d LNGuarded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:formulaToGuarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eformulaToGuarded fm\u003c/code\u003e returns a guarded formula \u003ccode\u003egf\u003c/code\u003e that is\n equivalent to \u003ccode\u003efm\u003c/code\u003e under the assumption that this is possible.\n If not, then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is called.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "formulaToGuarded_",
          "package": "tamarin-prover-theory",
          "signature": "LNFormula -\u003e LNGuarded",
          "source": "src/Theory-Constraint-System-Guarded.html#formulaToGuarded_",
          "type": "function"
        },
        "index": {
          "description": "formulaToGuarded fm returns guarded formula gf that is equivalent to fm under the assumption that this is possible If not then error is called",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "formulaToGuarded_",
          "normalized": "LNFormula-\u003eLNGuarded",
          "package": "tamarin-prover-theory",
          "partial": "To Guarded",
          "signature": "LNFormula-\u003eLNGuarded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:formulaToGuarded_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "gall",
          "package": "tamarin-prover-theory",
          "signature": "[s] -\u003e [Atom (VTerm c (BVar v))] -\u003e Guarded s c v -\u003e Guarded s c v",
          "source": "src/Theory-Constraint-System-Guarded.html#gall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gall",
          "normalized": "[a]-\u003e[Atom(VTerm b(BVar c))]-\u003eGuarded a b c-\u003eGuarded a b c",
          "package": "tamarin-prover-theory",
          "signature": "[s]-\u003e[Atom(VTerm c(BVar v))]-\u003eGuarded s c v-\u003eGuarded s c v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egconj gfs\u003c/code\u003e smart constructor for the conjunction of gfs.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gconj",
          "package": "tamarin-prover-theory",
          "signature": "[Guarded s c v] -\u003e Guarded s c v",
          "source": "src/Theory-Constraint-System-Guarded.html#gconj",
          "type": "function"
        },
        "index": {
          "description": "gconj gfs smart constructor for the conjunction of gfs",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gconj",
          "normalized": "[Guarded a b c]-\u003eGuarded a b c",
          "package": "tamarin-prover-theory",
          "signature": "[Guarded s c v]-\u003eGuarded s c v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gconj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egdisj gfs\u003c/code\u003e smart constructor for the disjunction of gfs.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gdisj",
          "package": "tamarin-prover-theory",
          "signature": "[Guarded s c v] -\u003e Guarded s c v",
          "source": "src/Theory-Constraint-System-Guarded.html#gdisj",
          "type": "function"
        },
        "index": {
          "description": "gdisj gfs smart constructor for the disjunction of gfs",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gdisj",
          "normalized": "[Guarded a b c]-\u003eGuarded a b c",
          "package": "tamarin-prover-theory",
          "signature": "[Guarded s c v]-\u003eGuarded s c v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gdisj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "gex",
          "package": "tamarin-prover-theory",
          "signature": "[s] -\u003e [Atom (VTerm c (BVar v))] -\u003e Guarded s c v -\u003e Guarded s c v",
          "source": "src/Theory-Constraint-System-Guarded.html#gex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gex",
          "normalized": "[a]-\u003e[Atom(VTerm b(BVar c))]-\u003eGuarded a b c-\u003eGuarded a b c",
          "package": "tamarin-prover-theory",
          "signature": "[s]-\u003e[Atom(VTerm c(BVar v))]-\u003eGuarded s c v-\u003eGuarded s c v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egfalse\u003c/code\u003e returns the guarded formula f with \u003ccode\u003eFalse \u003ca\u003e-\u003c/a\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gfalse",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v",
          "source": "src/Theory-Constraint-System-Guarded.html#gfalse",
          "type": "function"
        },
        "index": {
          "description": "gfalse returns the guarded formula with False",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gfalse",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gfalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to prove the formula by applying induction over the trace.\n Returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e errMsg\u003c/code\u003e if this is not possible. Returns a tuple of\n formulas: one formalizing the proof obligation of the base-case and one\n formalizing the proof obligation of the step-case.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "ginduct",
          "package": "tamarin-prover-theory",
          "signature": "LGuarded c -\u003e Either String (LGuarded c, LGuarded c)",
          "source": "src/Theory-Constraint-System-Guarded.html#ginduct",
          "type": "function"
        },
        "index": {
          "description": "Try to prove the formula by applying induction over the trace Returns Left errMsg if this is not possible Returns tuple of formulas one formalizing the proof obligation of the base-case and one formalizing the proof obligation of the step-case",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "ginduct",
          "normalized": "LGuarded a-\u003eEither String(LGuarded a,LGuarded a)",
          "package": "tamarin-prover-theory",
          "signature": "LGuarded c-\u003eEither String(LGuarded c,LGuarded c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:ginduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate a guarded formula.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gnot",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v -\u003e Guarded s c v",
          "source": "src/Theory-Constraint-System-Guarded.html#gnot",
          "type": "function"
        },
        "index": {
          "description": "Negate guarded formula",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gnot",
          "normalized": "Guarded a b c-\u003eGuarded a b c",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v-\u003eGuarded s c v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egtrue\u003c/code\u003e returns the guarded formula f with \u003ccode\u003eTrue \u003ca\u003e-\u003c/a\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gtrue",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v",
          "source": "src/Theory-Constraint-System-Guarded.html#gtrue",
          "type": "function"
        },
        "index": {
          "description": "gtrue returns the guarded formula with True",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "gtrue",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:gtrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eFactTag\u003c/a\u003e\u003c/code\u003es that are used in guards.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "guardFactTags",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v -\u003e [FactTag]",
          "source": "src/Theory-Constraint-System-Guarded.html#guardFactTags",
          "type": "function"
        },
        "index": {
          "description": "All FactTag that are used in guards",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "guardFactTags",
          "normalized": "Guarded a b c-\u003e[FactTag]",
          "package": "tamarin-prover-theory",
          "partial": "Fact Tags",
          "signature": "Guarded s c v-\u003e[FactTag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:guardFactTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "isAllGuarded",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v -\u003e Bool",
          "source": "src/Theory-Constraint-System-Guarded.html#isAllGuarded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "isAllGuarded",
          "normalized": "Guarded a b c-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "All Guarded",
          "signature": "Guarded s c v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isAllGuarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "isConjunction",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v -\u003e Bool",
          "source": "src/Theory-Constraint-System-Guarded.html#isConjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "isConjunction",
          "normalized": "Guarded a b c-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Conjunction",
          "signature": "Guarded s c v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isConjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "isDisjunction",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v -\u003e Bool",
          "source": "src/Theory-Constraint-System-Guarded.html#isDisjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "isDisjunction",
          "normalized": "Guarded a b c-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Disjunction",
          "signature": "Guarded s c v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isDisjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System.Guarded",
          "name": "isExGuarded",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v -\u003e Bool",
          "source": "src/Theory-Constraint-System-Guarded.html#isExGuarded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "isExGuarded",
          "normalized": "Guarded a b c-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Ex Guarded",
          "signature": "Guarded s c v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isExGuarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the guarded formula is closed and does not contain an\n existential quantifier. This under-approximates the question whether the\n formula is a safety formula. A safety formula \u003ccode\u003ephi\u003c/code\u003e has the property that a\n trace violating it can never be extended to a trace satisfying it.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "isSafetyFormula",
          "package": "tamarin-prover-theory",
          "signature": "Guarded s c v -\u003e Bool",
          "source": "src/Theory-Constraint-System-Guarded.html#isSafetyFormula",
          "type": "function"
        },
        "index": {
          "description": "Check whether the guarded formula is closed and does not contain an existential quantifier This under-approximates the question whether the formula is safety formula safety formula phi has the property that trace violating it can never be extended to trace satisfying it",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "isSafetyFormula",
          "normalized": "Guarded a b c-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Safety Formula",
          "signature": "Guarded s c v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:isSafetyFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a guarded formula with scope info.\n The Integer argument denotes the number of\n quantifiers that have been encountered so far.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "mapGuardedAtoms",
          "package": "tamarin-prover-theory",
          "signature": "(Integer -\u003e Atom (VTerm c (BVar v)) -\u003e Atom (VTerm d (BVar w))) -\u003e Guarded s c v -\u003e Guarded s d w",
          "source": "src/Theory-Constraint-System-Guarded.html#mapGuardedAtoms",
          "type": "function"
        },
        "index": {
          "description": "Map guarded formula with scope info The Integer argument denotes the number of quantifiers that have been encountered so far",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "mapGuardedAtoms",
          "normalized": "(Integer-\u003eAtom(VTerm a(BVar b))-\u003eAtom(VTerm c(BVar d)))-\u003eGuarded e a b-\u003eGuarded e c d",
          "package": "tamarin-prover-theory",
          "partial": "Guarded Atoms",
          "signature": "(Integer-\u003eAtom(VTerm c(BVar v))-\u003eAtom(VTerm d(BVar w)))-\u003eGuarded s c v-\u003eGuarded s d w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:mapGuardedAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenGuarded gf\u003c/code\u003e returns \u003ccode\u003eJust (qua,vs,ats,gf')\u003c/code\u003e if \u003ccode\u003egf\u003c/code\u003e is a guarded\n clause and \u003ccode\u003eNothing\u003c/code\u003e otherwise. In the first case, \u003ccode\u003equa\u003c/code\u003e is the quantifier,\n \u003ccode\u003evs\u003c/code\u003e is a list of fresh variables, \u003ccode\u003eats\u003c/code\u003e is the antecedent, and \u003ccode\u003egf'\u003c/code\u003e is the\n succedent. In both antecedent and succedent, the bound variables are\n replaced by \u003ccode\u003evs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "openGuarded",
          "package": "tamarin-prover-theory",
          "signature": "LGuarded c -\u003e m (Maybe (Quantifier, [LVar], [Atom (VTerm c LVar)], LGuarded c))",
          "source": "src/Theory-Constraint-System-Guarded.html#openGuarded",
          "type": "function"
        },
        "index": {
          "description": "openGuarded gf returns Just qua vs ats gf if gf is guarded clause and Nothing otherwise In the first case qua is the quantifier vs is list of fresh variables ats is the antecedent and gf is the succedent In both antecedent and succedent the bound variables are replaced by vs",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "openGuarded",
          "normalized": "LGuarded a-\u003eb(Maybe(Quantifier,[LVar],[Atom(VTerm a LVar)],LGuarded a))",
          "package": "tamarin-prover-theory",
          "partial": "Guarded",
          "signature": "LGuarded c-\u003em(Maybe(Quantifier,[LVar],[Atom(VTerm c LVar)],LGuarded c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:openGuarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a formula.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "prettyGuarded",
          "package": "tamarin-prover-theory",
          "signature": "LNGuarded-\u003e d",
          "type": "function"
        },
        "index": {
          "description": "Pretty print formula",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "prettyGuarded",
          "normalized": "LNGuarded-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Guarded",
          "signature": "LNGuarded-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:prettyGuarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify a \u003ccode\u003e\u003ca\u003eGuarded\u003c/a\u003e\u003c/code\u003e formula by replacing atoms with their truth value,\n if it can be determined.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "simplifyGuarded",
          "package": "tamarin-prover-theory",
          "signature": "(LNAtom -\u003e Maybe Bool)-\u003e LNGuarded-\u003e Maybe LNGuarded",
          "type": "function"
        },
        "index": {
          "description": "Simplify Guarded formula by replacing atoms with their truth value if it can be determined",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "simplifyGuarded",
          "normalized": "(LNAtom-\u003eMaybe Bool)-\u003eLNGuarded-\u003eMaybe LNGuarded",
          "package": "tamarin-prover-theory",
          "partial": "Guarded",
          "signature": "(LNAtom-\u003eMaybe Bool)-\u003eLNGuarded-\u003eMaybe LNGuarded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:simplifyGuarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStable sort that ensures that actions occur before equations.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "sortGAtoms",
          "package": "tamarin-prover-theory",
          "signature": "[GAtom t] -\u003e [GAtom t]",
          "source": "src/Theory-Constraint-System-Guarded.html#sortGAtoms",
          "type": "function"
        },
        "index": {
          "description": "Stable sort that ensures that actions occur before equations",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "sortGAtoms",
          "normalized": "[GAtom a]-\u003e[GAtom a]",
          "package": "tamarin-prover-theory",
          "partial": "GAtoms",
          "signature": "[GAtom t]-\u003e[GAtom t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:sortGAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubstBound s gf\u003c/code\u003e substitutes each occurence of a bound\n variable \u003ccode\u003ei\u003c/code\u003e in \u003ccode\u003edom(s)\u003c/code\u003e with the corresponding free variable\n \u003ccode\u003es(i)=x\u003c/code\u003e in all atoms in \u003ccode\u003egf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "substBound",
          "package": "tamarin-prover-theory",
          "signature": "[(Integer, LVar)] -\u003e LGuarded c -\u003e LGuarded c",
          "source": "src/Theory-Constraint-System-Guarded.html#substBound",
          "type": "function"
        },
        "index": {
          "description": "substBound gf substitutes each occurence of bound variable in dom with the corresponding free variable in all atoms in gf",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "substBound",
          "normalized": "[(Integer,LVar)]-\u003eLGuarded a-\u003eLGuarded a",
          "package": "tamarin-prover-theory",
          "partial": "Bound",
          "signature": "[(Integer,LVar)]-\u003eLGuarded c-\u003eLGuarded c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:substBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubstBoundAtom s a\u003c/code\u003e substitutes each occurence of a bound variables \u003ccode\u003ei\u003c/code\u003e\n in \u003ccode\u003edom(s)\u003c/code\u003e with the corresponding free variable \u003ccode\u003ex=s(i)\u003c/code\u003e in the atom \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "substBoundAtom",
          "package": "tamarin-prover-theory",
          "signature": "[(Integer, LVar)] -\u003e Atom (VTerm c (BVar LVar)) -\u003e Atom (VTerm c (BVar LVar))",
          "source": "src/Theory-Constraint-System-Guarded.html#substBoundAtom",
          "type": "function"
        },
        "index": {
          "description": "substBoundAtom substitutes each occurence of bound variables in dom with the corresponding free variable in the atom",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "substBoundAtom",
          "normalized": "[(Integer,LVar)]-\u003eAtom(VTerm a(BVar LVar))-\u003eAtom(VTerm a(BVar LVar))",
          "package": "tamarin-prover-theory",
          "partial": "Bound Atom",
          "signature": "[(Integer,LVar)]-\u003eAtom(VTerm c(BVar LVar))-\u003eAtom(VTerm c(BVar LVar))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:substBoundAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubstFreeAtom s gf\u003c/code\u003e substitutes each occurence of a free variables\n \u003ccode\u003ev in dom(s)\u003c/code\u003e with the correpsonding bound variables \u003ccode\u003ei=s(v)\u003c/code\u003e\n in all atoms in  \u003ccode\u003egf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "substFree",
          "package": "tamarin-prover-theory",
          "signature": "[(LVar, Integer)] -\u003e LGuarded c -\u003e LGuarded c",
          "source": "src/Theory-Constraint-System-Guarded.html#substFree",
          "type": "function"
        },
        "index": {
          "description": "substFreeAtom gf substitutes each occurence of free variables in dom with the correpsonding bound variables in all atoms in gf",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "substFree",
          "normalized": "[(LVar,Integer)]-\u003eLGuarded a-\u003eLGuarded a",
          "package": "tamarin-prover-theory",
          "partial": "Free",
          "signature": "[(LVar,Integer)]-\u003eLGuarded c-\u003eLGuarded c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:substFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubstFreeAtom s a\u003c/code\u003e substitutes each occurence of a free variables \u003ccode\u003ev\u003c/code\u003e\n in \u003ccode\u003edom(s)\u003c/code\u003e with the bound variables \u003ccode\u003ei=s(v)\u003c/code\u003e in the atom \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System.Guarded",
          "name": "substFreeAtom",
          "package": "tamarin-prover-theory",
          "signature": "[(LVar, Integer)] -\u003e Atom (VTerm c (BVar LVar)) -\u003e Atom (VTerm c (BVar LVar))",
          "source": "src/Theory-Constraint-System-Guarded.html#substFreeAtom",
          "type": "function"
        },
        "index": {
          "description": "substFreeAtom substitutes each occurence of free variables in dom with the bound variables in the atom",
          "hierarchy": "Theory Constraint System Guarded",
          "module": "Theory.Constraint.System.Guarded",
          "name": "substFreeAtom",
          "normalized": "[(LVar,Integer)]-\u003eAtom(VTerm a(BVar LVar))-\u003eAtom(VTerm a(BVar LVar))",
          "package": "tamarin-prover-theory",
          "partial": "Free Atom",
          "signature": "[(LVar,Integer)]-\u003eAtom(VTerm c(BVar LVar))-\u003eAtom(VTerm c(BVar LVar))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System-Guarded.html#v:substFreeAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the public interface for constructing and deconstructing constraint\n systems. The interface for performing constraint solving provided by\n \u003ca\u003eTheory.Constraint.Solver\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Constraint.System",
          "name": "System",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System.html",
          "type": "module"
        },
        "index": {
          "description": "This is the public interface for constructing and deconstructing constraint systems The interface for performing constraint solving provided by Theory.Constraint.Solver",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "System",
          "package": "tamarin-prover-theory",
          "partial": "System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase dinstinction kind that are allowed. The order of the kinds\n corresponds to the subkinding relation: untyped \u003c typed.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "CaseDistKind",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System.html#CaseDistKind",
          "type": "data"
        },
        "index": {
          "description": "Case dinstinction kind that are allowed The order of the kinds corresponds to the subkinding relation untyped typed",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "CaseDistKind",
          "package": "tamarin-prover-theory",
          "partial": "Case Dist Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#t:CaseDistKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe status of a \u003ccode\u003e\u003ca\u003eGoal\u003c/a\u003e\u003c/code\u003e. Use its \u003ccode\u003eSemigroup\u003c/code\u003e instance to combine the\n status info of goals that collapse.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "GoalStatus",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System.html#GoalStatus",
          "type": "data"
        },
        "index": {
          "description": "The status of Goal Use its Semigroup instance to combine the status info of goals that collapse",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "GoalStatus",
          "package": "tamarin-prover-theory",
          "partial": "Goal Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#t:GoalStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constraint system.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "System",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System.html#System",
          "type": "data"
        },
        "index": {
          "description": "constraint system",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "System",
          "package": "tamarin-prover-theory",
          "partial": "System",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#t:System"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether we are checking for the existence of a trace satisfiying a the\n current constraint system or whether we're checking that no traces\n satisfies the current constraint system.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "SystemTraceQuantifier",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Constraint-System.html#SystemTraceQuantifier",
          "type": "data"
        },
        "index": {
          "description": "Whether we are checking for the existence of trace satisfiying the current constraint system or whether we re checking that no traces satisfies the current constraint system",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "SystemTraceQuantifier",
          "package": "tamarin-prover-theory",
          "partial": "System Trace Quantifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#t:SystemTraceQuantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "ExistsNoTrace",
          "package": "tamarin-prover-theory",
          "signature": "ExistsNoTrace",
          "source": "src/Theory-Constraint-System.html#SystemTraceQuantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "ExistsNoTrace",
          "package": "tamarin-prover-theory",
          "partial": "Exists No Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:ExistsNoTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "ExistsSomeTrace",
          "package": "tamarin-prover-theory",
          "signature": "ExistsSomeTrace",
          "source": "src/Theory-Constraint-System.html#SystemTraceQuantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "ExistsSomeTrace",
          "package": "tamarin-prover-theory",
          "partial": "Exists Some Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:ExistsSomeTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "GoalStatus",
          "package": "tamarin-prover-theory",
          "signature": "GoalStatus",
          "source": "src/Theory-Constraint-System.html#GoalStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "GoalStatus",
          "package": "tamarin-prover-theory",
          "partial": "Goal Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:GoalStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "TypedCaseDist",
          "package": "tamarin-prover-theory",
          "signature": "TypedCaseDist",
          "source": "src/Theory-Constraint-System.html#CaseDistKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "TypedCaseDist",
          "package": "tamarin-prover-theory",
          "partial": "Typed Case Dist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:TypedCaseDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "UntypedCaseDist",
          "package": "tamarin-prover-theory",
          "signature": "UntypedCaseDist",
          "source": "src/Theory-Constraint-System.html#CaseDistKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "UntypedCaseDist",
          "package": "tamarin-prover-theory",
          "partial": "Untyped Case Dist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:UntypedCaseDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "_gsLoopBreaker",
          "package": "tamarin-prover-theory",
          "signature": "Bool",
          "source": "src/Theory-Constraint-System.html#GoalStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "_gsLoopBreaker",
          "package": "tamarin-prover-theory",
          "partial": "Loop Breaker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:_gsLoopBreaker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "_gsNr",
          "package": "tamarin-prover-theory",
          "signature": "Integer",
          "source": "src/Theory-Constraint-System.html#GoalStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "_gsNr",
          "package": "tamarin-prover-theory",
          "partial": "Nr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:_gsNr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "_gsSolved",
          "package": "tamarin-prover-theory",
          "signature": "Bool",
          "source": "src/Theory-Constraint-System.html#GoalStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "_gsSolved",
          "package": "tamarin-prover-theory",
          "partial": "Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:_gsSolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll actions that hold in a sequent.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "allActions",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [(NodeId, LNFact)]",
          "source": "src/Theory-Constraint-System.html#allActions",
          "type": "function"
        },
        "index": {
          "description": "All actions that hold in sequent",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "allActions",
          "normalized": "System-\u003e[(NodeId,LNFact)]",
          "package": "tamarin-prover-theory",
          "partial": "Actions",
          "signature": "System-\u003e[(NodeId,LNFact)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:allActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of all KD-conclusions in the \u003ccode\u003e\u003ca\u003eSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "allKDConcs",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [(NodeId, RuleACInst, LNTerm)]",
          "source": "src/Theory-Constraint-System.html#allKDConcs",
          "type": "function"
        },
        "index": {
          "description": "list of all KD-conclusions in the System",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "allKDConcs",
          "normalized": "System-\u003e[(NodeId,RuleACInst,LNTerm)]",
          "package": "tamarin-prover-theory",
          "partial": "KDConcs",
          "signature": "System-\u003e[(NodeId,RuleACInst,LNTerm)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:allKDConcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll actions that hold in a sequent.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "allKUActions",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [(NodeId, LNFact, LNTerm)]",
          "source": "src/Theory-Constraint-System.html#allKUActions",
          "type": "function"
        },
        "index": {
          "description": "All actions that hold in sequent",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "allKUActions",
          "normalized": "System-\u003e[(NodeId,LNFact,LNTerm)]",
          "package": "tamarin-prover-theory",
          "partial": "KUActions",
          "signature": "System-\u003e[(NodeId,LNFact,LNTerm)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:allKUActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a predicate that is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first argument happens before\n the second argument in all models of the sequent.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "alwaysBefore",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e NodeId -\u003e NodeId -\u003e Bool",
          "source": "src/Theory-Constraint-System.html#alwaysBefore",
          "type": "function"
        },
        "index": {
          "description": "Returns predicate that is True iff the first argument happens before the second argument in all models of the sequent",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "alwaysBefore",
          "normalized": "System-\u003eNodeId-\u003eNodeId-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Before",
          "signature": "System-\u003eNodeId-\u003eNodeId-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:alwaysBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty constraint system, which is logically equivalent to true.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "emptySystem",
          "package": "tamarin-prover-theory",
          "signature": "CaseDistKind -\u003e System",
          "source": "src/Theory-Constraint-System.html#emptySystem",
          "type": "function"
        },
        "index": {
          "description": "The empty constraint system which is logically equivalent to true",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "emptySystem",
          "normalized": "CaseDistKind-\u003eSystem",
          "package": "tamarin-prover-theory",
          "partial": "System",
          "signature": "CaseDistKind-\u003eSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:emptySystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the constraint system that has to be proven to show that given\n formula holds in the context of the given theory.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "formulaToSystem",
          "package": "tamarin-prover-theory",
          "signature": "[LNGuarded]-\u003e CaseDistKind-\u003e SystemTraceQuantifier-\u003e LNFormula-\u003e System",
          "type": "function"
        },
        "index": {
          "description": "Returns the constraint system that has to be proven to show that given formula holds in the context of the given theory",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "formulaToSystem",
          "normalized": "[LNGuarded]-\u003eCaseDistKind-\u003eSystemTraceQuantifier-\u003eLNFormula-\u003eSystem",
          "package": "tamarin-prover-theory",
          "partial": "To System",
          "signature": "[LNGuarded]-\u003eCaseDistKind-\u003eSystemTraceQuantifier-\u003eLNFormula-\u003eSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:formulaToSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "gsLoopBreaker",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr GoalStatus Bool",
          "source": "src/Theory-Constraint-System.html#gsLoopBreaker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "gsLoopBreaker",
          "package": "tamarin-prover-theory",
          "partial": "Loop Breaker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:gsLoopBreaker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "gsNr",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr GoalStatus Integer",
          "source": "src/Theory-Constraint-System.html#gsNr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "gsNr",
          "package": "tamarin-prover-theory",
          "partial": "Nr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:gsNr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "gsSolved",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr GoalStatus Bool",
          "source": "src/Theory-Constraint-System.html#gsSolved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "gsSolved",
          "package": "tamarin-prover-theory",
          "partial": "Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:gsSolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd lemmas / additional assumptions to a constraint system.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "insertLemmas",
          "package": "tamarin-prover-theory",
          "signature": "[LNGuarded] -\u003e System -\u003e System",
          "source": "src/Theory-Constraint-System.html#insertLemmas",
          "type": "function"
        },
        "index": {
          "description": "Add lemmas additional assumptions to constraint system",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "insertLemmas",
          "normalized": "[LNGuarded]-\u003eSystem-\u003eSystem",
          "package": "tamarin-prover-theory",
          "partial": "Lemmas",
          "signature": "[LNGuarded]-\u003eSystem-\u003eSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:insertLemmas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given node id is guaranteed to be instantiated to an\n index in the trace.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "isInTrace",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e NodeId -\u003e Bool",
          "source": "src/Theory-Constraint-System.html#isInTrace",
          "type": "function"
        },
        "index": {
          "description": "True iff the given node id is guaranteed to be instantiated to an index in the trace",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "isInTrace",
          "normalized": "System-\u003eNodeId-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "In Trace",
          "signature": "System-\u003eNodeId-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:isInTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given node id is guaranteed to be instantiated to the last\n index of the trace.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "isLast",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e NodeId -\u003e Bool",
          "source": "src/Theory-Constraint-System.html#isLast",
          "type": "function"
        },
        "index": {
          "description": "True iff the given node id is guaranteed to be instantiated to the last index of the trace",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "isLast",
          "normalized": "System-\u003eNodeId-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Last",
          "signature": "System-\u003eNodeId-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:isLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll KU-actions.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "kuActionAtoms",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [(NodeId, LNFact, LNTerm)]",
          "source": "src/Theory-Constraint-System.html#kuActionAtoms",
          "type": "function"
        },
        "index": {
          "description": "All KU-actions",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "kuActionAtoms",
          "normalized": "System-\u003e[(NodeId,LNFact,LNTerm)]",
          "package": "tamarin-prover-theory",
          "partial": "Action Atoms",
          "signature": "System-\u003e[(NodeId,LNFact,LNTerm)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:kuActionAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enodeConcFact (NodeConc (v, i))\u003c/code\u003e accesses the \u003ccode\u003ei\u003c/code\u003e-th conclusion of the\n rule associated with node \u003ccode\u003ev\u003c/code\u003e under the assumption that \u003ccode\u003ev\u003c/code\u003e is labeled with\n a rule that has an \u003ccode\u003ei\u003c/code\u003e-th conclusion.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "nodeConcFact",
          "package": "tamarin-prover-theory",
          "signature": "NodeConc -\u003e System -\u003e LNFact",
          "source": "src/Theory-Constraint-System.html#nodeConcFact",
          "type": "function"
        },
        "index": {
          "description": "nodeConcFact NodeConc accesses the th conclusion of the rule associated with node under the assumption that is labeled with rule that has an th conclusion",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "nodeConcFact",
          "normalized": "NodeConc-\u003eSystem-\u003eLNFact",
          "package": "tamarin-prover-theory",
          "partial": "Conc Fact",
          "signature": "NodeConc-\u003eSystem-\u003eLNFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodeConcFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enodeConcNode\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e compute the node-id of the node conclusion \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "nodeConcNode",
          "package": "tamarin-prover-theory",
          "signature": "NodeConc -\u003e NodeId",
          "source": "src/Theory-Constraint-System.html#nodeConcNode",
          "type": "function"
        },
        "index": {
          "description": "nodeConcNode compute the node-id of the node conclusion",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "nodeConcNode",
          "normalized": "NodeConc-\u003eNodeId",
          "package": "tamarin-prover-theory",
          "partial": "Conc Node",
          "signature": "NodeConc-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodeConcNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enodePremFact prem se\u003c/code\u003e computes the fact associated to premise \u003ccode\u003eprem\u003c/code\u003e in\n sequent \u003ccode\u003ese\u003c/code\u003e under the assumption that premise \u003ccode\u003eprem\u003c/code\u003e is a a premise in\n \u003ccode\u003ese\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "nodePremFact",
          "package": "tamarin-prover-theory",
          "signature": "NodePrem -\u003e System -\u003e LNFact",
          "source": "src/Theory-Constraint-System.html#nodePremFact",
          "type": "function"
        },
        "index": {
          "description": "nodePremFact prem se computes the fact associated to premise prem in sequent se under the assumption that premise prem is premise in se",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "nodePremFact",
          "normalized": "NodePrem-\u003eSystem-\u003eLNFact",
          "package": "tamarin-prover-theory",
          "partial": "Prem Fact",
          "signature": "NodePrem-\u003eSystem-\u003eLNFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodePremFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enodePremNode prem\u003c/code\u003e is the node that this premise is referring to.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "nodePremNode",
          "package": "tamarin-prover-theory",
          "signature": "NodePrem -\u003e NodeId",
          "source": "src/Theory-Constraint-System.html#nodePremNode",
          "type": "function"
        },
        "index": {
          "description": "nodePremNode prem is the node that this premise is referring to",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "nodePremNode",
          "normalized": "NodePrem-\u003eNodeId",
          "package": "tamarin-prover-theory",
          "partial": "Prem Node",
          "signature": "NodePrem-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodePremNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enodeRule v\u003c/code\u003e accesses the rule label of node \u003ccode\u003ev\u003c/code\u003e under the assumption that\n it is present in the sequent.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "nodeRule",
          "package": "tamarin-prover-theory",
          "signature": "NodeId -\u003e System -\u003e RuleACInst",
          "source": "src/Theory-Constraint-System.html#nodeRule",
          "type": "function"
        },
        "index": {
          "description": "nodeRule accesses the rule label of node under the assumption that it is present in the sequent",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "nodeRule",
          "normalized": "NodeId-\u003eSystem-\u003eRuleACInst",
          "package": "tamarin-prover-theory",
          "partial": "Rule",
          "signature": "NodeId-\u003eSystem-\u003eRuleACInst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:nodeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the non-graph part of the sequent; i.e. equation store and\n clauses.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "prettyNonGraphSystem",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e d",
          "source": "src/Theory-Constraint-System.html#prettyNonGraphSystem",
          "type": "function"
        },
        "index": {
          "description": "Pretty print the non-graph part of the sequent i.e equation store and clauses",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "prettyNonGraphSystem",
          "normalized": "System-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Non Graph System",
          "signature": "System-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:prettyNonGraphSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a sequent\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "prettySystem",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e d",
          "source": "src/Theory-Constraint-System.html#prettySystem",
          "type": "function"
        },
        "index": {
          "description": "Pretty print sequent",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "prettySystem",
          "normalized": "System-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "System",
          "signature": "System-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:prettySystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(from,to)\u003c/code\u003e is in \u003ccode\u003erawEdgeRel se\u003c/code\u003e iff we can prove that there is an\n edge-path from \u003ccode\u003efrom\u003c/code\u003e to \u003ccode\u003eto\u003c/code\u003e in \u003ccode\u003ese\u003c/code\u003e without appealing to transitivity.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "rawEdgeRel",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [(NodeId, NodeId)]",
          "source": "src/Theory-Constraint-System.html#rawEdgeRel",
          "type": "function"
        },
        "index": {
          "description": "from to is in rawEdgeRel se iff we can prove that there is an edge-path from from to to in se without appealing to transitivity",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "rawEdgeRel",
          "normalized": "System-\u003e[(NodeId,NodeId)]",
          "package": "tamarin-prover-theory",
          "partial": "Edge Rel",
          "signature": "System-\u003e[(NodeId,NodeId)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:rawEdgeRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(from,to)\u003c/code\u003e is in \u003ccode\u003erawLessRel se\u003c/code\u003e iff we can prove that there is a path\n (possibly using the \u003ccode\u003e\u003ca\u003eLess\u003c/a\u003e\u003c/code\u003e relation) from \u003ccode\u003efrom\u003c/code\u003e to \u003ccode\u003eto\u003c/code\u003e in \u003ccode\u003ese\u003c/code\u003e without\n appealing to transitivity.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "rawLessRel",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [(NodeId, NodeId)]",
          "source": "src/Theory-Constraint-System.html#rawLessRel",
          "type": "function"
        },
        "index": {
          "description": "from to is in rawLessRel se iff we can prove that there is path possibly using the Less relation from from to to in se without appealing to transitivity",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "rawLessRel",
          "normalized": "System-\u003e[(NodeId,NodeId)]",
          "package": "tamarin-prover-theory",
          "partial": "Less Rel",
          "signature": "System-\u003e[(NodeId,NodeId)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:rawLessRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fact associated with this node conclusion, if there is one.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "resolveNodeConcFact",
          "package": "tamarin-prover-theory",
          "signature": "NodeConc -\u003e System -\u003e Maybe LNFact",
          "source": "src/Theory-Constraint-System.html#resolveNodeConcFact",
          "type": "function"
        },
        "index": {
          "description": "The fact associated with this node conclusion if there is one",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "resolveNodeConcFact",
          "normalized": "NodeConc-\u003eSystem-\u003eMaybe LNFact",
          "package": "tamarin-prover-theory",
          "partial": "Node Conc Fact",
          "signature": "NodeConc-\u003eSystem-\u003eMaybe LNFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:resolveNodeConcFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll facts associated to this node premise.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "resolveNodePremFact",
          "package": "tamarin-prover-theory",
          "signature": "NodePrem -\u003e System -\u003e Maybe LNFact",
          "source": "src/Theory-Constraint-System.html#resolveNodePremFact",
          "type": "function"
        },
        "index": {
          "description": "All facts associated to this node premise",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "resolveNodePremFact",
          "normalized": "NodePrem-\u003eSystem-\u003eMaybe LNFact",
          "package": "tamarin-prover-theory",
          "partial": "Node Prem Fact",
          "signature": "NodePrem-\u003eSystem-\u003eMaybe LNFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:resolveNodePremFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sCaseDistKind",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System CaseDistKind",
          "source": "src/Theory-Constraint-System.html#sCaseDistKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sCaseDistKind",
          "package": "tamarin-prover-theory",
          "partial": "Case Dist Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sCaseDistKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the conjunction of disjunctions of fresh substutitution in\n the equation store.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "sConjDisjEqs",
          "package": "tamarin-prover-theory",
          "signature": "System :-\u003e Conj (SplitId, Set LNSubstVFresh)",
          "source": "src/Theory-Constraint-System.html#sConjDisjEqs",
          "type": "function"
        },
        "index": {
          "description": "Label to access the conjunction of disjunctions of fresh substutitution in the equation store",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sConjDisjEqs",
          "normalized": "System-\u003eConj(SplitId,Set LNSubstVFresh)",
          "package": "tamarin-prover-theory",
          "partial": "Conj Disj Eqs",
          "signature": "System-\u003eConj(SplitId,Set LNSubstVFresh)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sConjDisjEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sEdges",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System (Set Edge)",
          "source": "src/Theory-Constraint-System.html#sEdges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sEdges",
          "package": "tamarin-prover-theory",
          "partial": "Edges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sEqStore",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System EqStore",
          "source": "src/Theory-Constraint-System.html#sEqStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sEqStore",
          "package": "tamarin-prover-theory",
          "partial": "Eq Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sEqStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sFormulas",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System (Set LNGuarded)",
          "source": "src/Theory-Constraint-System.html#sFormulas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sFormulas",
          "package": "tamarin-prover-theory",
          "partial": "Formulas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sFormulas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sGoals",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System (Map Goal GoalStatus)",
          "source": "src/Theory-Constraint-System.html#sGoals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sGoals",
          "package": "tamarin-prover-theory",
          "partial": "Goals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sGoals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sLastAtom",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System (Maybe NodeId)",
          "source": "src/Theory-Constraint-System.html#sLastAtom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sLastAtom",
          "package": "tamarin-prover-theory",
          "partial": "Last Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sLastAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sLemmas",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System (Set LNGuarded)",
          "source": "src/Theory-Constraint-System.html#sLemmas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sLemmas",
          "package": "tamarin-prover-theory",
          "partial": "Lemmas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sLemmas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sLessAtoms",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System (Set (NodeId, NodeId))",
          "source": "src/Theory-Constraint-System.html#sLessAtoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sLessAtoms",
          "normalized": "Lens a System(Set(NodeId,NodeId))",
          "package": "tamarin-prover-theory",
          "partial": "Less Atoms",
          "signature": "Lens arr System(Set(NodeId,NodeId))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sLessAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sNextGoalNr",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System Integer",
          "source": "src/Theory-Constraint-System.html#sNextGoalNr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sNextGoalNr",
          "package": "tamarin-prover-theory",
          "partial": "Next Goal Nr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sNextGoalNr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sNodes",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System (Map NodeId RuleACInst)",
          "source": "src/Theory-Constraint-System.html#sNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sNodes",
          "package": "tamarin-prover-theory",
          "partial": "Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Constraint.System",
          "name": "sSolvedFormulas",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr System (Set LNGuarded)",
          "source": "src/Theory-Constraint-System.html#sSolvedFormulas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sSolvedFormulas",
          "package": "tamarin-prover-theory",
          "partial": "Solved Formulas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sSolvedFormulas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel to access the free substitution of the equation store.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "sSubst",
          "package": "tamarin-prover-theory",
          "signature": "System :-\u003e LNSubst",
          "source": "src/Theory-Constraint-System.html#sSubst",
          "type": "function"
        },
        "index": {
          "description": "Label to access the free substitution of the equation store",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "sSubst",
          "normalized": "System-\u003eLNSubst",
          "package": "tamarin-prover-theory",
          "partial": "Subst",
          "signature": "System-\u003eLNSubst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:sSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard actions, i.e., non-KU-actions.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "standardActionAtoms",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [(NodeId, LNFact)]",
          "source": "src/Theory-Constraint-System.html#standardActionAtoms",
          "type": "function"
        },
        "index": {
          "description": "The standard actions i.e non-KU-actions",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "standardActionAtoms",
          "normalized": "System-\u003e[(NodeId,LNFact)]",
          "package": "tamarin-prover-theory",
          "partial": "Action Atoms",
          "signature": "System-\u003e[(NodeId,LNFact)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:standardActionAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll actions that hold in a sequent.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "unsolvedActionAtoms",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [(NodeId, LNFact)]",
          "source": "src/Theory-Constraint-System.html#unsolvedActionAtoms",
          "type": "function"
        },
        "index": {
          "description": "All actions that hold in sequent",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "unsolvedActionAtoms",
          "normalized": "System-\u003e[(NodeId,LNFact)]",
          "package": "tamarin-prover-theory",
          "partial": "Action Atoms",
          "signature": "System-\u003e[(NodeId,LNFact)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:unsolvedActionAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll unsolved destruction chains in the constraint system.\n\u003c/p\u003e",
          "module": "Theory.Constraint.System",
          "name": "unsolvedChains",
          "package": "tamarin-prover-theory",
          "signature": "System -\u003e [(NodeConc, NodePrem)]",
          "source": "src/Theory-Constraint-System.html#unsolvedChains",
          "type": "function"
        },
        "index": {
          "description": "All unsolved destruction chains in the constraint system",
          "hierarchy": "Theory Constraint System",
          "module": "Theory.Constraint.System",
          "name": "unsolvedChains",
          "normalized": "System-\u003e[(NodeConc,NodePrem)]",
          "package": "tamarin-prover-theory",
          "partial": "Chains",
          "signature": "System-\u003e[(NodeConc,NodePrem)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Constraint-System.html#v:unsolvedChains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormulas that represent security properties.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Model.Atom",
          "name": "Atom",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Atom.html",
          "type": "module"
        },
        "index": {
          "description": "Formulas that represent security properties",
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "Atom",
          "package": "tamarin-prover-theory",
          "partial": "Atom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAtom\u003c/code\u003e's are the atoms of trace formulas parametrized over arbitrary\n terms.\n\u003c/p\u003e",
          "module": "Theory.Model.Atom",
          "name": "Atom",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Atom.html#Atom",
          "type": "data"
        },
        "index": {
          "description": "Atom are the atoms of trace formulas parametrized over arbitrary terms",
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "Atom",
          "package": "tamarin-prover-theory",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtoms built over \u003ccode\u003e\u003ca\u003eBLTerm\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Theory.Model.Atom",
          "name": "BLAtom",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Atom.html#BLAtom",
          "type": "type"
        },
        "index": {
          "description": "Atoms built over BLTerm",
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "BLAtom",
          "package": "tamarin-prover-theory",
          "partial": "BLAtom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#t:BLAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLAtom\u003c/code\u003e are the atoms we actually use in graph formulas input by the user.\n\u003c/p\u003e",
          "module": "Theory.Model.Atom",
          "name": "LNAtom",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Atom.html#LNAtom",
          "type": "type"
        },
        "index": {
          "description": "LAtom are the atoms we actually use in graph formulas input by the user",
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "LNAtom",
          "package": "tamarin-prover-theory",
          "partial": "LNAtom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#t:LNAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLAtom\u003c/code\u003e are the atoms we actually use in graph formulas input by the user.\n\u003c/p\u003e",
          "module": "Theory.Model.Atom",
          "name": "NAtom",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Atom.html#NAtom",
          "type": "type"
        },
        "index": {
          "description": "LAtom are the atoms we actually use in graph formulas input by the user",
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "NAtom",
          "package": "tamarin-prover-theory",
          "partial": "NAtom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#t:NAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Atom",
          "name": "Action",
          "package": "tamarin-prover-theory",
          "signature": "Action t (Fact t)",
          "source": "src/Theory-Model-Atom.html#Atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "Action",
          "package": "tamarin-prover-theory",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Atom",
          "name": "EqE",
          "package": "tamarin-prover-theory",
          "signature": "EqE t t",
          "source": "src/Theory-Model-Atom.html#Atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "EqE",
          "package": "tamarin-prover-theory",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:EqE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Atom",
          "name": "Last",
          "package": "tamarin-prover-theory",
          "signature": "Last t",
          "source": "src/Theory-Model-Atom.html#Atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "Last",
          "package": "tamarin-prover-theory",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Atom",
          "name": "Less",
          "package": "tamarin-prover-theory",
          "signature": "Less t t",
          "source": "src/Theory-Model-Atom.html#Atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "Less",
          "package": "tamarin-prover-theory",
          "partial": "Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:Less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the atom is an action atom.\n\u003c/p\u003e",
          "module": "Theory.Model.Atom",
          "name": "isActionAtom",
          "package": "tamarin-prover-theory",
          "signature": "Atom t -\u003e Bool",
          "source": "src/Theory-Model-Atom.html#isActionAtom",
          "type": "function"
        },
        "index": {
          "description": "True iff the atom is an action atom",
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "isActionAtom",
          "normalized": "Atom a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Action Atom",
          "signature": "Atom t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:isActionAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the atom is an equality atom.\n\u003c/p\u003e",
          "module": "Theory.Model.Atom",
          "name": "isEqAtom",
          "package": "tamarin-prover-theory",
          "signature": "Atom t -\u003e Bool",
          "source": "src/Theory-Model-Atom.html#isEqAtom",
          "type": "function"
        },
        "index": {
          "description": "True iff the atom is an equality atom",
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "isEqAtom",
          "normalized": "Atom a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Eq Atom",
          "signature": "Atom t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:isEqAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the atom is a last atom.\n\u003c/p\u003e",
          "module": "Theory.Model.Atom",
          "name": "isLastAtom",
          "package": "tamarin-prover-theory",
          "signature": "Atom t -\u003e Bool",
          "source": "src/Theory-Model-Atom.html#isLastAtom",
          "type": "function"
        },
        "index": {
          "description": "True iff the atom is last atom",
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "isLastAtom",
          "normalized": "Atom a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Last Atom",
          "signature": "Atom t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:isLastAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the atom is a temporal ordering atom.\n\u003c/p\u003e",
          "module": "Theory.Model.Atom",
          "name": "isLessAtom",
          "package": "tamarin-prover-theory",
          "signature": "Atom t -\u003e Bool",
          "source": "src/Theory-Model-Atom.html#isLessAtom",
          "type": "function"
        },
        "index": {
          "description": "True iff the atom is temporal ordering atom",
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "isLessAtom",
          "normalized": "Atom a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Less Atom",
          "signature": "Atom t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:isLessAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Atom",
          "name": "prettyNAtom",
          "package": "tamarin-prover-theory",
          "signature": "NAtom v -\u003e d",
          "source": "src/Theory-Model-Atom.html#prettyNAtom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Atom",
          "module": "Theory.Model.Atom",
          "name": "prettyNAtom",
          "normalized": "NAtom a-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "NAtom",
          "signature": "NAtom v-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Atom.html#v:prettyNAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFacts used to formulate and reason about protocol execution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Model.Fact",
          "name": "Fact",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Fact.html",
          "type": "module"
        },
        "index": {
          "description": "Facts used to formulate and reason about protocol execution",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "Fact",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA direction tag\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "DirTag",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Fact.html#DirTag",
          "type": "data"
        },
        "index": {
          "description": "direction tag",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "DirTag",
          "package": "tamarin-prover-theory",
          "partial": "Dir Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:DirTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFacts.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "Fact",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Fact.html#Fact",
          "type": "data"
        },
        "index": {
          "description": "Facts",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "Fact",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:Fact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFact tags/symbols\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "FactTag",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Fact.html#FactTag",
          "type": "data"
        },
        "index": {
          "description": "Fact tags symbols",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "FactTag",
          "package": "tamarin-prover-theory",
          "partial": "Fact Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:FactTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFacts with literals arbitrary constants and logical variables.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "LFact",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Fact.html#LFact",
          "type": "type"
        },
        "index": {
          "description": "Facts with literals arbitrary constants and logical variables",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "LFact",
          "package": "tamarin-prover-theory",
          "partial": "LFact",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:LFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFacts used for proving; i.e. variables fixed to logical variables\n and constant fixed to names.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "LNFact",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Fact.html#LNFact",
          "type": "type"
        },
        "index": {
          "description": "Facts used for proving i.e variables fixed to logical variables and constant fixed to names",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "LNFact",
          "package": "tamarin-prover-theory",
          "partial": "LNFact",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:LNFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "Multiplicity",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Fact.html#Multiplicity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "Multiplicity",
          "package": "tamarin-prover-theory",
          "partial": "Multiplicity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:Multiplicity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFacts with literals containing names and arbitrary variables.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "NFact",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Fact.html#NFact",
          "type": "type"
        },
        "index": {
          "description": "Facts with literals containing names and arbitrary variables",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "NFact",
          "package": "tamarin-prover-theory",
          "partial": "NFact",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#t:NFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog-fact denoting that the intruder deduced\n a message using a construction rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "DedFact",
          "package": "tamarin-prover-theory",
          "signature": "DedFact",
          "source": "src/Theory-Model-Fact.html#FactTag",
          "type": "function"
        },
        "index": {
          "description": "Log-fact denoting that the intruder deduced message using construction rule",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "DedFact",
          "package": "tamarin-prover-theory",
          "partial": "Ded Fact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:DedFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "DnK",
          "package": "tamarin-prover-theory",
          "signature": "DnK",
          "source": "src/Theory-Model-Fact.html#DirTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "DnK",
          "package": "tamarin-prover-theory",
          "partial": "Dn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:DnK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "Fact",
          "package": "tamarin-prover-theory",
          "signature": "Fact",
          "source": "src/Theory-Model-Fact.html#Fact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "Fact",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:Fact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreshly generated value.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "FreshFact",
          "package": "tamarin-prover-theory",
          "signature": "FreshFact",
          "source": "src/Theory-Model-Fact.html#FactTag",
          "type": "function"
        },
        "index": {
          "description": "Freshly generated value",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "FreshFact",
          "package": "tamarin-prover-theory",
          "partial": "Fresh Fact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:FreshFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOfficially known by the intruder/network.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "InFact",
          "package": "tamarin-prover-theory",
          "signature": "InFact",
          "source": "src/Theory-Model-Fact.html#FactTag",
          "type": "function"
        },
        "index": {
          "description": "Officially known by the intruder network",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "InFact",
          "package": "tamarin-prover-theory",
          "partial": "In Fact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:InFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDown-knowledge fact in message deduction.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "KDFact",
          "package": "tamarin-prover-theory",
          "signature": "KDFact",
          "source": "src/Theory-Model-Fact.html#FactTag",
          "type": "function"
        },
        "index": {
          "description": "Down-knowledge fact in message deduction",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "KDFact",
          "package": "tamarin-prover-theory",
          "partial": "KDFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:KDFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUp-knowledge fact in messsage deduction.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "KUFact",
          "package": "tamarin-prover-theory",
          "signature": "KUFact",
          "source": "src/Theory-Model-Fact.html#FactTag",
          "type": "function"
        },
        "index": {
          "description": "Up-knowledge fact in messsage deduction",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "KUFact",
          "package": "tamarin-prover-theory",
          "partial": "KUFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:KUFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "Linear",
          "package": "tamarin-prover-theory",
          "signature": "Linear",
          "source": "src/Theory-Model-Fact.html#Multiplicity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "Linear",
          "package": "tamarin-prover-theory",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:Linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the protocol\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "OutFact",
          "package": "tamarin-prover-theory",
          "signature": "OutFact",
          "source": "src/Theory-Model-Fact.html#FactTag",
          "type": "function"
        },
        "index": {
          "description": "Sent by the protocol",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "OutFact",
          "package": "tamarin-prover-theory",
          "partial": "Out Fact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:OutFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "Persistent",
          "package": "tamarin-prover-theory",
          "signature": "Persistent",
          "source": "src/Theory-Model-Fact.html#Multiplicity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "Persistent",
          "package": "tamarin-prover-theory",
          "partial": "Persistent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:Persistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA protocol fact together with its arity and multiplicity.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "ProtoFact",
          "package": "tamarin-prover-theory",
          "signature": "ProtoFact Multiplicity String Int",
          "source": "src/Theory-Model-Fact.html#FactTag",
          "type": "function"
        },
        "index": {
          "description": "protocol fact together with its arity and multiplicity",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "ProtoFact",
          "package": "tamarin-prover-theory",
          "partial": "Proto Fact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:ProtoFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "UpK",
          "package": "tamarin-prover-theory",
          "signature": "UpK",
          "source": "src/Theory-Model-Fact.html#DirTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "UpK",
          "package": "tamarin-prover-theory",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:UpK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView a deduction logging fact.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "dedFactView",
          "package": "tamarin-prover-theory",
          "signature": "LNFact -\u003e Maybe LNTerm",
          "source": "src/Theory-Model-Fact.html#dedFactView",
          "type": "function"
        },
        "index": {
          "description": "View deduction logging fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "dedFactView",
          "normalized": "LNFact-\u003eMaybe LNTerm",
          "package": "tamarin-prover-theory",
          "partial": "Fact View",
          "signature": "LNFact-\u003eMaybe LNTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:dedFactView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fact logging that the intruder deduced a message using a construction\n rule. We use this to formulate invariants over normal dependency graphs.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "dedLogFact",
          "package": "tamarin-prover-theory",
          "signature": "t -\u003e Fact t",
          "source": "src/Theory-Model-Fact.html#dedLogFact",
          "type": "function"
        },
        "index": {
          "description": "fact logging that the intruder deduced message using construction rule We use this to formulate invariants over normal dependency graphs",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "dedLogFact",
          "normalized": "a-\u003eFact a",
          "package": "tamarin-prover-theory",
          "partial": "Log Fact",
          "signature": "t-\u003eFact t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:dedLogFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arity of a \u003ccode\u003e\u003ca\u003eFact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "factArity",
          "package": "tamarin-prover-theory",
          "signature": "Fact t -\u003e Int",
          "source": "src/Theory-Model-Fact.html#factArity",
          "type": "function"
        },
        "index": {
          "description": "The arity of Fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "factArity",
          "normalized": "Fact a-\u003eInt",
          "package": "tamarin-prover-theory",
          "partial": "Arity",
          "signature": "Fact t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe multiplicity of a \u003ccode\u003e\u003ca\u003eFact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "factMultiplicity",
          "package": "tamarin-prover-theory",
          "signature": "Fact t -\u003e Multiplicity",
          "source": "src/Theory-Model-Fact.html#factMultiplicity",
          "type": "function"
        },
        "index": {
          "description": "The multiplicity of Fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "factMultiplicity",
          "normalized": "Fact a-\u003eMultiplicity",
          "package": "tamarin-prover-theory",
          "partial": "Multiplicity",
          "signature": "Fact t-\u003eMultiplicity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factMultiplicity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "factTag",
          "package": "tamarin-prover-theory",
          "signature": "FactTag",
          "source": "src/Theory-Model-Fact.html#Fact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "factTag",
          "package": "tamarin-prover-theory",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arity of a \u003ccode\u003e\u003ca\u003eFactTag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "factTagArity",
          "package": "tamarin-prover-theory",
          "signature": "FactTag -\u003e Int",
          "source": "src/Theory-Model-Fact.html#factTagArity",
          "type": "function"
        },
        "index": {
          "description": "The arity of FactTag",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "factTagArity",
          "normalized": "FactTag-\u003eInt",
          "package": "tamarin-prover-theory",
          "partial": "Tag Arity",
          "signature": "FactTag-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTagArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe multiplicity of a \u003ccode\u003e\u003ca\u003eFactTag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "factTagMultiplicity",
          "package": "tamarin-prover-theory",
          "signature": "FactTag -\u003e Multiplicity",
          "source": "src/Theory-Model-Fact.html#factTagMultiplicity",
          "type": "function"
        },
        "index": {
          "description": "The multiplicity of FactTag",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "factTagMultiplicity",
          "normalized": "FactTag-\u003eMultiplicity",
          "package": "tamarin-prover-theory",
          "partial": "Tag Multiplicity",
          "signature": "FactTag-\u003eMultiplicity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTagMultiplicity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a fact tag, e.g., \u003ccode\u003efactTagName KUFact = \u003ca\u003eKU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "factTagName",
          "package": "tamarin-prover-theory",
          "signature": "FactTag -\u003e String",
          "source": "src/Theory-Model-Fact.html#factTagName",
          "type": "function"
        },
        "index": {
          "description": "The name of fact tag e.g factTagName KUFact KU",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "factTagName",
          "normalized": "FactTag-\u003eString",
          "package": "tamarin-prover-theory",
          "partial": "Tag Name",
          "signature": "FactTag-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "factTerms",
          "package": "tamarin-prover-theory",
          "signature": "[t]",
          "source": "src/Theory-Model-Fact.html#Fact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "factTerms",
          "normalized": "[a]",
          "package": "tamarin-prover-theory",
          "partial": "Terms",
          "signature": "[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:factTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fresh fact denotes a fresh unguessable name.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "freshFact",
          "package": "tamarin-prover-theory",
          "signature": "t -\u003e Fact t",
          "source": "src/Theory-Model-Fact.html#freshFact",
          "type": "function"
        },
        "index": {
          "description": "fresh fact denotes fresh unguessable name",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "freshFact",
          "normalized": "a-\u003eFact a",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "signature": "t-\u003eFact t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:freshFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fact denoting that the intruder sent a message to the protocol.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "inFact",
          "package": "tamarin-prover-theory",
          "signature": "t -\u003e Fact t",
          "source": "src/Theory-Model-Fact.html#inFact",
          "type": "function"
        },
        "index": {
          "description": "fact denoting that the intruder sent message to the protocol",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "inFact",
          "normalized": "a-\u003eFact a",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "signature": "t-\u003eFact t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:inFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the fact is a KD-fact.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "isKDFact",
          "package": "tamarin-prover-theory",
          "signature": "LNFact -\u003e Bool",
          "source": "src/Theory-Model-Fact.html#isKDFact",
          "type": "function"
        },
        "index": {
          "description": "True if the fact is KD-fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "isKDFact",
          "normalized": "LNFact-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "KDFact",
          "signature": "LNFact-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isKDFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the fact is a message-deduction fact.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "isKFact",
          "package": "tamarin-prover-theory",
          "signature": "LNFact -\u003e Bool",
          "source": "src/Theory-Model-Fact.html#isKFact",
          "type": "function"
        },
        "index": {
          "description": "True if the fact is message-deduction fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "isKFact",
          "normalized": "LNFact-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "KFact",
          "signature": "LNFact-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isKFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the fact is a KU-fact.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "isKUFact",
          "package": "tamarin-prover-theory",
          "signature": "LNFact -\u003e Bool",
          "source": "src/Theory-Model-Fact.html#isKUFact",
          "type": "function"
        },
        "index": {
          "description": "True if the fact is KU-fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "isKUFact",
          "normalized": "LNFact-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "KUFact",
          "signature": "LNFact-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isKUFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the fact is a linear fact.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "isLinearFact",
          "package": "tamarin-prover-theory",
          "signature": "Fact t -\u003e Bool",
          "source": "src/Theory-Model-Fact.html#isLinearFact",
          "type": "function"
        },
        "index": {
          "description": "True if the fact is linear fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "isLinearFact",
          "normalized": "Fact a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Linear Fact",
          "signature": "Fact t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isLinearFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the fact is a persistent fact.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "isPersistentFact",
          "package": "tamarin-prover-theory",
          "signature": "Fact t -\u003e Bool",
          "source": "src/Theory-Model-Fact.html#isPersistentFact",
          "type": "function"
        },
        "index": {
          "description": "True if the fact is persistent fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "isPersistentFact",
          "normalized": "Fact a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Persistent Fact",
          "signature": "Fact t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isPersistentFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the fact is a non-special protocol fact.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "isProtoFact",
          "package": "tamarin-prover-theory",
          "signature": "Fact t -\u003e Bool",
          "source": "src/Theory-Model-Fact.html#isProtoFact",
          "type": "function"
        },
        "index": {
          "description": "True iff the fact is non-special protocol fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "isProtoFact",
          "normalized": "Fact a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Proto Fact",
          "signature": "Fact t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:isProtoFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView a message-deduction fact.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "kFactView",
          "package": "tamarin-prover-theory",
          "signature": "LNFact -\u003e Maybe (DirTag, LNTerm)",
          "source": "src/Theory-Model-Fact.html#kFactView",
          "type": "function"
        },
        "index": {
          "description": "View message-deduction fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "kFactView",
          "normalized": "LNFact-\u003eMaybe(DirTag,LNTerm)",
          "package": "tamarin-prover-theory",
          "partial": "Fact View",
          "signature": "LNFact-\u003eMaybe(DirTag,LNTerm)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:kFactView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fact logging that the intruder knows a message.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "kLogFact",
          "package": "tamarin-prover-theory",
          "signature": "t -\u003e Fact t",
          "source": "src/Theory-Model-Fact.html#kLogFact",
          "type": "function"
        },
        "index": {
          "description": "fact logging that the intruder knows message",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "kLogFact",
          "normalized": "a-\u003eFact a",
          "package": "tamarin-prover-theory",
          "partial": "Log Fact",
          "signature": "t-\u003eFact t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:kLogFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "kdFact",
          "package": "tamarin-prover-theory",
          "signature": "t -\u003e Fact t",
          "source": "src/Theory-Model-Fact.html#kdFact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "kdFact",
          "normalized": "a-\u003eFact a",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "signature": "t-\u003eFact t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:kdFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Fact",
          "name": "kuFact",
          "package": "tamarin-prover-theory",
          "signature": "t -\u003e Fact t",
          "source": "src/Theory-Model-Fact.html#kuFact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "kuFact",
          "normalized": "a-\u003eFact a",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "signature": "t-\u003eFact t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:kuFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ematchLFact t p\u003c/code\u003e is a complete set of AC matchers for the term fact \u003ccode\u003et\u003c/code\u003e\n and the pattern fact \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "matchFact",
          "package": "tamarin-prover-theory",
          "signature": "Fact t-\u003e Fact t-\u003e Match t",
          "type": "function"
        },
        "index": {
          "description": "matchLFact is complete set of AC matchers for the term fact and the pattern fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "matchFact",
          "normalized": "Fact a-\u003eFact a-\u003eMatch a",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "signature": "Fact t-\u003eFact t-\u003eMatch t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:matchFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fact denoting a message sent by the protocol to the intruder.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "outFact",
          "package": "tamarin-prover-theory",
          "signature": "t -\u003e Fact t",
          "source": "src/Theory-Model-Fact.html#outFact",
          "type": "function"
        },
        "index": {
          "description": "fact denoting message sent by the protocol to the intruder",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "outFact",
          "normalized": "a-\u003eFact a",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "signature": "t-\u003eFact t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:outFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a fact.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "prettyFact",
          "package": "tamarin-prover-theory",
          "signature": "(t -\u003e d) -\u003e Fact t -\u003e d",
          "source": "src/Theory-Model-Fact.html#prettyFact",
          "type": "function"
        },
        "index": {
          "description": "Pretty print fact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "prettyFact",
          "normalized": "(a-\u003eb)-\u003eFact a-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "signature": "(t-\u003ed)-\u003eFact t-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:prettyFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eLFact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "prettyLNFact",
          "package": "tamarin-prover-theory",
          "signature": "LNFact -\u003e d",
          "source": "src/Theory-Model-Fact.html#prettyLNFact",
          "type": "function"
        },
        "index": {
          "description": "Pretty print LFact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "prettyLNFact",
          "normalized": "LNFact-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "LNFact",
          "signature": "LNFact-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:prettyLNFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eNFact\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "prettyNFact",
          "package": "tamarin-prover-theory",
          "signature": "LNFact -\u003e d",
          "source": "src/Theory-Model-Fact.html#prettyNFact",
          "type": "function"
        },
        "index": {
          "description": "Pretty print NFact",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "prettyNFact",
          "normalized": "LNFact-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "NFact",
          "signature": "LNFact-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:prettyNFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA protocol fact denotes a fact generated by a protocol rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "protoFact",
          "package": "tamarin-prover-theory",
          "signature": "Multiplicity -\u003e String -\u003e [t] -\u003e Fact t",
          "source": "src/Theory-Model-Fact.html#protoFact",
          "type": "function"
        },
        "index": {
          "description": "protocol fact denotes fact generated by protocol rule",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "protoFact",
          "normalized": "Multiplicity-\u003eString-\u003e[a]-\u003eFact a",
          "package": "tamarin-prover-theory",
          "partial": "Fact",
          "signature": "Multiplicity-\u003eString-\u003e[t]-\u003eFact t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:protoFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a fact tag as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e. This is the \u003ccode\u003e\u003ca\u003efactTagName\u003c/a\u003e\u003c/code\u003e prefixed with\n the multiplicity.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "showFactTag",
          "package": "tamarin-prover-theory",
          "signature": "FactTag -\u003e String",
          "source": "src/Theory-Model-Fact.html#showFactTag",
          "type": "function"
        },
        "index": {
          "description": "Show fact tag as String This is the factTagName prefixed with the multiplicity",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "showFactTag",
          "normalized": "FactTag-\u003eString",
          "package": "tamarin-prover-theory",
          "partial": "Fact Tag",
          "signature": "FactTag-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:showFactTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a fact tag together with its aritiy.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "showFactTagArity",
          "package": "tamarin-prover-theory",
          "signature": "FactTag -\u003e String",
          "source": "src/Theory-Model-Fact.html#showFactTagArity",
          "type": "function"
        },
        "index": {
          "description": "Show fact tag together with its aritiy",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "showFactTagArity",
          "normalized": "FactTag-\u003eString",
          "package": "tamarin-prover-theory",
          "partial": "Fact Tag Arity",
          "signature": "FactTag-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:showFactTagArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the two facts are unifiable.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "unifiableLNFacts",
          "package": "tamarin-prover-theory",
          "signature": "LNFact -\u003e LNFact -\u003e WithMaude Bool",
          "source": "src/Theory-Model-Fact.html#unifiableLNFacts",
          "type": "function"
        },
        "index": {
          "description": "True iff the two facts are unifiable",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "unifiableLNFacts",
          "normalized": "LNFact-\u003eLNFact-\u003eWithMaude Bool",
          "package": "tamarin-prover-theory",
          "partial": "LNFacts",
          "signature": "LNFact-\u003eLNFact-\u003eWithMaude Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:unifiableLNFacts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify a list of \u003ccode\u003eLFact\u003c/code\u003e equalities.\n\u003c/p\u003e",
          "module": "Theory.Model.Fact",
          "name": "unifyLNFactEqs",
          "package": "tamarin-prover-theory",
          "signature": "[Equal LNFact] -\u003e WithMaude [LNSubstVFresh]",
          "source": "src/Theory-Model-Fact.html#unifyLNFactEqs",
          "type": "function"
        },
        "index": {
          "description": "Unify list of LFact equalities",
          "hierarchy": "Theory Model Fact",
          "module": "Theory.Model.Fact",
          "name": "unifyLNFactEqs",
          "normalized": "[Equal LNFact]-\u003eWithMaude[LNSubstVFresh]",
          "package": "tamarin-prover-theory",
          "partial": "LNFact Eqs",
          "signature": "[Equal LNFact]-\u003eWithMaude[LNSubstVFresh]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Fact.html#v:unifyLNFactEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and operations for handling sorted first-order logic\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Model.Formula",
          "name": "Formula",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Formula.html",
          "type": "module"
        },
        "index": {
          "description": "Types and operations for handling sorted first-order logic",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Formula",
          "package": "tamarin-prover-theory",
          "partial": "Formula",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical connectives.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "Connective",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Formula.html#Connective",
          "type": "data"
        },
        "index": {
          "description": "Logical connectives",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Connective",
          "package": "tamarin-prover-theory",
          "partial": "Connective",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:Connective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst-order formulas in locally nameless representation with hints for the\n names/sorts of quantified variables.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "Formula",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Formula.html#Formula",
          "type": "data"
        },
        "index": {
          "description": "First-order formulas in locally nameless representation with hints for the names sorts of quantified variables",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Formula",
          "package": "tamarin-prover-theory",
          "partial": "Formula",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLFormula\u003c/code\u003e are FOL formulas with sorts abused to denote both a hint for\n the name of the bound variable, as well as the variable's actual sort.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "LFormula",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Formula.html#LFormula",
          "type": "type"
        },
        "index": {
          "description": "LFormula are FOL formulas with sorts abused to denote both hint for the name of the bound variable as well as the variable actual sort",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "LFormula",
          "package": "tamarin-prover-theory",
          "partial": "LFormula",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:LFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "LNFormula",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Formula.html#LNFormula",
          "type": "type"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "LNFormula",
          "package": "tamarin-prover-theory",
          "partial": "LNFormula",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:LNFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuantifiers.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "Quantifier",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Formula.html#Quantifier",
          "type": "data"
        },
        "index": {
          "description": "Quantifiers",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Quantifier",
          "package": "tamarin-prover-theory",
          "partial": "Quantifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#t:Quantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "(.||.)",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v -\u003e Formula a s v -\u003e Formula a s v",
          "source": "src/Theory-Model-Formula.html#.%7C%7C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "(.||.) .||.",
          "normalized": "Formula a b c-\u003eFormula a b c-\u003eFormula a b c",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v-\u003eFormula a s v-\u003eFormula a s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:.-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "(.&&.)",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v -\u003e Formula a s v -\u003e Formula a s v",
          "source": "src/Theory-Model-Formula.html#.%26%26.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "(.&&.) .&&.",
          "normalized": "Formula a b c-\u003eFormula a b c-\u003eFormula a b c",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v-\u003eFormula a s v-\u003eFormula a s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:.-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "(.\u003c=\u003e.)",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v -\u003e Formula a s v -\u003e Formula a s v",
          "source": "src/Theory-Model-Formula.html#.%3C%3D%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "(.\u003c=\u003e.) .\u003c=\u003e.",
          "normalized": "Formula a b c-\u003eFormula a b c-\u003eFormula a b c",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v-\u003eFormula a s v-\u003eFormula a s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:.-60--61--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "(.==\u003e.)",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v -\u003e Formula a s v -\u003e Formula a s v",
          "source": "src/Theory-Model-Formula.html#.%3D%3D%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "(.==\u003e.) .==\u003e.",
          "normalized": "Formula a b c-\u003eFormula a b c-\u003eFormula a b c",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v-\u003eFormula a s v-\u003eFormula a s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:.-61--61--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "All",
          "package": "tamarin-prover-theory",
          "signature": "All",
          "source": "src/Theory-Model-Formula.html#Quantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "All",
          "package": "tamarin-prover-theory",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "And",
          "package": "tamarin-prover-theory",
          "signature": "And",
          "source": "src/Theory-Model-Formula.html#Connective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "And",
          "package": "tamarin-prover-theory",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "Ato",
          "package": "tamarin-prover-theory",
          "signature": "Ato (Atom (VTerm c (BVar v)))",
          "source": "src/Theory-Model-Formula.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Ato",
          "package": "tamarin-prover-theory",
          "partial": "Ato",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Ato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "Conn",
          "package": "tamarin-prover-theory",
          "signature": "Conn !Connective (Formula s c v) (Formula s c v)",
          "source": "src/Theory-Model-Formula.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Conn",
          "package": "tamarin-prover-theory",
          "partial": "Conn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Conn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "Ex",
          "package": "tamarin-prover-theory",
          "signature": "Ex",
          "source": "src/Theory-Model-Formula.html#Quantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Ex",
          "package": "tamarin-prover-theory",
          "partial": "Ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "Iff",
          "package": "tamarin-prover-theory",
          "signature": "Iff",
          "source": "src/Theory-Model-Formula.html#Connective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Iff",
          "package": "tamarin-prover-theory",
          "partial": "Iff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Iff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "Imp",
          "package": "tamarin-prover-theory",
          "signature": "Imp",
          "source": "src/Theory-Model-Formula.html#Connective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Imp",
          "package": "tamarin-prover-theory",
          "partial": "Imp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Imp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "Not",
          "package": "tamarin-prover-theory",
          "signature": "Not (Formula s c v)",
          "source": "src/Theory-Model-Formula.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Not",
          "package": "tamarin-prover-theory",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "Or",
          "package": "tamarin-prover-theory",
          "signature": "Or",
          "source": "src/Theory-Model-Formula.html#Connective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Or",
          "package": "tamarin-prover-theory",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "Qua",
          "package": "tamarin-prover-theory",
          "signature": "Qua !Quantifier s (Formula s c v)",
          "source": "src/Theory-Model-Formula.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "Qua",
          "package": "tamarin-prover-theory",
          "partial": "Qua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:Qua"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Formula",
          "name": "TF",
          "package": "tamarin-prover-theory",
          "signature": "TF !Bool",
          "source": "src/Theory-Model-Formula.html#Formula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "TF",
          "package": "tamarin-prover-theory",
          "partial": "TF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:TF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a existential quantification with a sort hint for the bound variable.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "exists",
          "package": "tamarin-prover-theory",
          "signature": "s -\u003e v -\u003e Formula s c v -\u003e Formula s c v",
          "source": "src/Theory-Model-Formula.html#exists",
          "type": "function"
        },
        "index": {
          "description": "Create existential quantification with sort hint for the bound variable",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "exists",
          "normalized": "a-\u003eb-\u003eFormula a c b-\u003eFormula a c b",
          "package": "tamarin-prover-theory",
          "signature": "s-\u003ev-\u003eFormula s c v-\u003eFormula s c v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a formula.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "foldFormula",
          "package": "tamarin-prover-theory",
          "signature": "(Atom (VTerm c (BVar v)) -\u003e b) -\u003e (Bool -\u003e b) -\u003e (b -\u003e b) -\u003e (Connective -\u003e b -\u003e b -\u003e b) -\u003e (Quantifier -\u003e s -\u003e b -\u003e b) -\u003e Formula s c v -\u003e b",
          "source": "src/Theory-Model-Formula.html#foldFormula",
          "type": "function"
        },
        "index": {
          "description": "Fold formula",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "foldFormula",
          "normalized": "(Atom(VTerm a(BVar b))-\u003ec)-\u003e(Bool-\u003ec)-\u003e(c-\u003ec)-\u003e(Connective-\u003ec-\u003ec-\u003ec)-\u003e(Quantifier-\u003ed-\u003ec-\u003ec)-\u003eFormula d a b-\u003ec",
          "package": "tamarin-prover-theory",
          "partial": "Formula",
          "signature": "(Atom(VTerm c(BVar v))-\u003eb)-\u003e(Bool-\u003eb)-\u003e(b-\u003eb)-\u003e(Connective-\u003eb-\u003eb-\u003eb)-\u003e(Quantifier-\u003es-\u003eb-\u003eb)-\u003eFormula s c v-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:foldFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a universal quantification with a sort hint for the bound variable.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "forall",
          "package": "tamarin-prover-theory",
          "signature": "s -\u003e v -\u003e Formula s c v -\u003e Formula s c v",
          "source": "src/Theory-Model-Formula.html#forall",
          "type": "function"
        },
        "index": {
          "description": "Create universal quantification with sort hint for the bound variable",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "forall",
          "normalized": "a-\u003eb-\u003eFormula a c b-\u003eFormula a c b",
          "package": "tamarin-prover-theory",
          "signature": "s-\u003ev-\u003eFormula s c v-\u003eFormula s c v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogically false.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "lfalse",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v",
          "source": "src/Theory-Model-Formula.html#lfalse",
          "type": "function"
        },
        "index": {
          "description": "Logically false",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "lfalse",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:lfalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogically true.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "ltrue",
          "package": "tamarin-prover-theory",
          "signature": "Formula a s v",
          "source": "src/Theory-Model-Formula.html#ltrue",
          "type": "function"
        },
        "index": {
          "description": "Logically true",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "ltrue",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:ltrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the representation of atoms.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "mapAtoms",
          "package": "tamarin-prover-theory",
          "signature": "(Integer -\u003e Atom (VTerm c (BVar v)) -\u003e Atom (VTerm c1 (BVar v1))) -\u003e Formula s c v -\u003e Formula s c1 v1",
          "source": "src/Theory-Model-Formula.html#mapAtoms",
          "type": "function"
        },
        "index": {
          "description": "Change the representation of atoms",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "mapAtoms",
          "normalized": "(Integer-\u003eAtom(VTerm a(BVar b))-\u003eAtom(VTerm a(BVar b)))-\u003eFormula c a b-\u003eFormula c a b",
          "package": "tamarin-prover-theory",
          "partial": "Atoms",
          "signature": "(Integer-\u003eAtom(VTerm c(BVar v))-\u003eAtom(VTerm c(BVar v)))-\u003eFormula s c v-\u003eFormula s c v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:mapAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenFormula f\u003c/code\u003e returns \u003ccode\u003eJust (v,Q,f')\u003c/code\u003e if \u003ccode\u003ef = Q v. f'\u003c/code\u003e modulo\n alpha renaming and \u003ccode\u003eNothing otherwise\u003c/code\u003e. \u003ccode\u003ev\u003c/code\u003e is always chosen to be fresh.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "openFormula",
          "package": "tamarin-prover-theory",
          "signature": "LFormula c -\u003e Maybe (Quantifier, m (LVar, LFormula c))",
          "source": "src/Theory-Model-Formula.html#openFormula",
          "type": "function"
        },
        "index": {
          "description": "openFormula returns Just if modulo alpha renaming and Nothing otherwise is always chosen to be fresh",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "openFormula",
          "normalized": "LFormula a-\u003eMaybe(Quantifier,b(LVar,LFormula a))",
          "package": "tamarin-prover-theory",
          "partial": "Formula",
          "signature": "LFormula c-\u003eMaybe(Quantifier,m(LVar,LFormula c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:openFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenFormulaPrefix f\u003c/code\u003e returns \u003ccode\u003eJust (vs,Q,f')\u003c/code\u003e if \u003ccode\u003ef = Q v_1 .. v_k. f'\u003c/code\u003e\n modulo alpha renaming and \u003ccode\u003eNothing otherwise\u003c/code\u003e. \u003ccode\u003evs\u003c/code\u003e is always chosen to be\n fresh.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "openFormulaPrefix",
          "package": "tamarin-prover-theory",
          "signature": "LFormula c -\u003e m ([LVar], Quantifier, LFormula c)",
          "source": "src/Theory-Model-Formula.html#openFormulaPrefix",
          "type": "function"
        },
        "index": {
          "description": "openFormulaPrefix returns Just vs if modulo alpha renaming and Nothing otherwise vs is always chosen to be fresh",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "openFormulaPrefix",
          "normalized": "LFormula a-\u003eb([LVar],Quantifier,LFormula a)",
          "package": "tamarin-prover-theory",
          "partial": "Formula Prefix",
          "signature": "LFormula c-\u003em([LVar],Quantifier,LFormula c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:openFormulaPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a logical formula\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "prettyLNFormula",
          "package": "tamarin-prover-theory",
          "signature": "LNFormula -\u003e d",
          "source": "src/Theory-Model-Formula.html#prettyLNFormula",
          "type": "function"
        },
        "index": {
          "description": "Pretty print logical formula",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "prettyLNFormula",
          "normalized": "LNFormula-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "LNFormula",
          "signature": "LNFormula-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:prettyLNFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce a bound variable for a free variable.\n\u003c/p\u003e",
          "module": "Theory.Model.Formula",
          "name": "quantify",
          "package": "tamarin-prover-theory",
          "signature": "v -\u003e Formula s c v -\u003e Formula s c v",
          "source": "src/Theory-Model-Formula.html#quantify",
          "type": "function"
        },
        "index": {
          "description": "Introduce bound variable for free variable",
          "hierarchy": "Theory Model Formula",
          "module": "Theory.Model.Formula",
          "name": "quantify",
          "normalized": "a-\u003eFormula b c a-\u003eFormula b c a",
          "package": "tamarin-prover-theory",
          "signature": "v-\u003eFormula s c v-\u003eFormula s c v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Formula.html#v:quantify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRewriting rules representing protocol execution and intruder deduction. Once\n modulo the full Diffie-Hellman equational theory and once modulo AC.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Model.Rule",
          "name": "Rule",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html",
          "type": "module"
        },
        "index": {
          "description": "Rewriting rules representing protocol execution and intruder deduction Once modulo the full Diffie-Hellman equational theory and once modulo AC",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "Rule",
          "package": "tamarin-prover-theory",
          "partial": "Rule",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn index of a conclusion. The first conclusion has index '0'.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ConcIdx",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#ConcIdx",
          "type": "newtype"
        },
        "index": {
          "description": "An index of conclusion The first conclusion has index",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ConcIdx",
          "package": "tamarin-prover-theory",
          "partial": "Conc Idx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ConcIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes that have an associated name.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "HasRuleName",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#HasRuleName",
          "type": "class"
        },
        "index": {
          "description": "Types that have an associated name",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "HasRuleName",
          "package": "tamarin-prover-theory",
          "partial": "Has Rule Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:HasRuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn intruder rule modulo AC.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "IntrRuleAC",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#IntrRuleAC",
          "type": "type"
        },
        "index": {
          "description": "An intruder rule modulo AC",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "IntrRuleAC",
          "package": "tamarin-prover-theory",
          "partial": "Intr Rule AC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:IntrRuleAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn intruder rule modulo AC is described by its name.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "IntrRuleACInfo",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
          "type": "data"
        },
        "index": {
          "description": "An intruder rule modulo AC is described by its name",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "IntrRuleACInfo",
          "package": "tamarin-prover-theory",
          "partial": "Intr Rule ACInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:IntrRuleACInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn index of a premise. The first premise has index '0'.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "PremIdx",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#PremIdx",
          "type": "newtype"
        },
        "index": {
          "description": "An index of premise The first premise has index",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "PremIdx",
          "package": "tamarin-prover-theory",
          "partial": "Prem Idx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:PremIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA protocol rule modulo AC.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleAC",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#ProtoRuleAC",
          "type": "type"
        },
        "index": {
          "description": "protocol rule modulo AC",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleAC",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule AC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation for protocol rules modulo AC. The variants list the possible\n instantiations of the free variables of the rule. The typing is interpreted\n modulo AC; i.e., its variants were also built.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleACInfo",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
          "type": "data"
        },
        "index": {
          "description": "Information for protocol rules modulo AC The variants list the possible instantiations of the free variables of the rule The typing is interpreted modulo AC i.e its variants were also built",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleACInfo",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule ACInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleACInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation for instances of protocol rules modulo AC.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleACInstInfo",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#ProtoRuleACInstInfo",
          "type": "data"
        },
        "index": {
          "description": "Information for instances of protocol rules modulo AC",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleACInstInfo",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule ACInst Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleACInstInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rule modulo E is always a protocol rule. Intruder rules are specified\n abstractly by their operations generating them and are only available once\n their variants are built.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleE",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#ProtoRuleE",
          "type": "type"
        },
        "index": {
          "description": "rule modulo is always protocol rule Intruder rules are specified abstractly by their operations generating them and are only available once their variants are built",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleE",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name of a protocol rule is either one of the special reserved rules or\n some standard rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleName",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#ProtoRuleName",
          "type": "data"
        },
        "index": {
          "description": "name of protocol rule is either one of the special reserved rules or some standard rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleName",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:ProtoRuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewriting rules with arbitrary additional information and facts with names\n and logical variables.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "Rule",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#Rule",
          "type": "data"
        },
        "index": {
          "description": "Rewriting rules with arbitrary additional information and facts with names and logical variables",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "Rule",
          "package": "tamarin-prover-theory",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rule modulo AC is either a protocol rule or an intruder rule\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "RuleAC",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#RuleAC",
          "type": "type"
        },
        "index": {
          "description": "rule modulo AC is either protocol rule or an intruder rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "RuleAC",
          "package": "tamarin-prover-theory",
          "partial": "Rule AC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:RuleAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "RuleACConstrs",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#RuleACConstrs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "RuleACConstrs",
          "package": "tamarin-prover-theory",
          "partial": "Rule ACConstrs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:RuleACConstrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rule instance module AC is either a protocol rule or an intruder rule.\n The info identifies the corresponding rule modulo AC that the instance was\n derived from.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "RuleACInst",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#RuleACInst",
          "type": "type"
        },
        "index": {
          "description": "rule instance module AC is either protocol rule or an intruder rule The info identifies the corresponding rule modulo AC that the instance was derived from",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "RuleACInst",
          "package": "tamarin-prover-theory",
          "partial": "Rule ACInst",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:RuleACInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRule information for protocol and intruder rules.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "RuleInfo",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Rule.html#RuleInfo",
          "type": "data"
        },
        "index": {
          "description": "Rule information for protocol and intruder rules",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "RuleInfo",
          "package": "tamarin-prover-theory",
          "partial": "Rule Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#t:RuleInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "CoerceRule",
          "package": "tamarin-prover-theory",
          "signature": "CoerceRule",
          "source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "CoerceRule",
          "package": "tamarin-prover-theory",
          "partial": "Coerce Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:CoerceRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "ConcIdx",
          "package": "tamarin-prover-theory",
          "signature": "ConcIdx",
          "source": "src/Theory-Model-Rule.html#ConcIdx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ConcIdx",
          "package": "tamarin-prover-theory",
          "partial": "Conc Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ConcIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "ConstrRule",
          "package": "tamarin-prover-theory",
          "signature": "ConstrRule ByteString",
          "source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ConstrRule",
          "package": "tamarin-prover-theory",
          "partial": "Constr Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ConstrRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "DestrRule",
          "package": "tamarin-prover-theory",
          "signature": "DestrRule ByteString",
          "source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "DestrRule",
          "package": "tamarin-prover-theory",
          "partial": "Destr Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:DestrRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "FreshConstrRule",
          "package": "tamarin-prover-theory",
          "signature": "FreshConstrRule",
          "source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "FreshConstrRule",
          "package": "tamarin-prover-theory",
          "partial": "Fresh Constr Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:FreshConstrRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "FreshRule",
          "package": "tamarin-prover-theory",
          "signature": "FreshRule",
          "source": "src/Theory-Model-Rule.html#ProtoRuleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "FreshRule",
          "package": "tamarin-prover-theory",
          "partial": "Fresh Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:FreshRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "IRecvRule",
          "package": "tamarin-prover-theory",
          "signature": "IRecvRule",
          "source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "IRecvRule",
          "package": "tamarin-prover-theory",
          "partial": "IRecv Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:IRecvRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "ISendRule",
          "package": "tamarin-prover-theory",
          "signature": "ISendRule",
          "source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ISendRule",
          "package": "tamarin-prover-theory",
          "partial": "ISend Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ISendRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "IntrInfo",
          "package": "tamarin-prover-theory",
          "signature": "IntrInfo i",
          "source": "src/Theory-Model-Rule.html#RuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "IntrInfo",
          "package": "tamarin-prover-theory",
          "partial": "Intr Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:IntrInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "PremIdx",
          "package": "tamarin-prover-theory",
          "signature": "PremIdx",
          "source": "src/Theory-Model-Rule.html#PremIdx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "PremIdx",
          "package": "tamarin-prover-theory",
          "partial": "Prem Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:PremIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "ProtoInfo",
          "package": "tamarin-prover-theory",
          "signature": "ProtoInfo p",
          "source": "src/Theory-Model-Rule.html#RuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ProtoInfo",
          "package": "tamarin-prover-theory",
          "partial": "Proto Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ProtoInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleACInfo",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleACInfo",
          "source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleACInfo",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule ACInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ProtoRuleACInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleACInstInfo",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleACInstInfo",
          "source": "src/Theory-Model-Rule.html#ProtoRuleACInstInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ProtoRuleACInstInfo",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule ACInst Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ProtoRuleACInstInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "PubConstrRule",
          "package": "tamarin-prover-theory",
          "signature": "PubConstrRule",
          "source": "src/Theory-Model-Rule.html#IntrRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "PubConstrRule",
          "package": "tamarin-prover-theory",
          "partial": "Pub Constr Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:PubConstrRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "Rule",
          "package": "tamarin-prover-theory",
          "signature": "Rule",
          "source": "src/Theory-Model-Rule.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "Rule",
          "package": "tamarin-prover-theory",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome standard protocol rule\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "StandRule",
          "package": "tamarin-prover-theory",
          "signature": "StandRule String",
          "source": "src/Theory-Model-Rule.html#ProtoRuleName",
          "type": "function"
        },
        "index": {
          "description": "Some standard protocol rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "StandRule",
          "package": "tamarin-prover-theory",
          "partial": "Stand Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:StandRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "_pracLoopBreakers",
          "package": "tamarin-prover-theory",
          "signature": "[PremIdx]",
          "source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "_pracLoopBreakers",
          "normalized": "[PremIdx]",
          "package": "tamarin-prover-theory",
          "partial": "Loop Breakers",
          "signature": "[PremIdx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_pracLoopBreakers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "_pracName",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleName",
          "source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "_pracName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_pracName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "_pracVariants",
          "package": "tamarin-prover-theory",
          "signature": "Disj LNSubstVFresh",
          "source": "src/Theory-Model-Rule.html#ProtoRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "_pracVariants",
          "package": "tamarin-prover-theory",
          "partial": "Variants",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_pracVariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "_praciLoopBreakers",
          "package": "tamarin-prover-theory",
          "signature": "[PremIdx]",
          "source": "src/Theory-Model-Rule.html#ProtoRuleACInstInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "_praciLoopBreakers",
          "normalized": "[PremIdx]",
          "package": "tamarin-prover-theory",
          "partial": "Loop Breakers",
          "signature": "[PremIdx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_praciLoopBreakers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "_praciName",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleName",
          "source": "src/Theory-Model-Rule.html#ProtoRuleACInstInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "_praciName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_praciName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "_rActs",
          "package": "tamarin-prover-theory",
          "signature": "[LNFact]",
          "source": "src/Theory-Model-Rule.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "_rActs",
          "normalized": "[LNFact]",
          "package": "tamarin-prover-theory",
          "partial": "Acts",
          "signature": "[LNFact]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_rActs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "_rConcs",
          "package": "tamarin-prover-theory",
          "signature": "[LNFact]",
          "source": "src/Theory-Model-Rule.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "_rConcs",
          "normalized": "[LNFact]",
          "package": "tamarin-prover-theory",
          "partial": "Concs",
          "signature": "[LNFact]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_rConcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "_rInfo",
          "package": "tamarin-prover-theory",
          "signature": "i",
          "source": "src/Theory-Model-Rule.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "_rInfo",
          "package": "tamarin-prover-theory",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_rInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "_rPrems",
          "package": "tamarin-prover-theory",
          "signature": "[LNFact]",
          "source": "src/Theory-Model-Rule.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "_rPrems",
          "normalized": "[LNFact]",
          "package": "tamarin-prover-theory",
          "partial": "Prems",
          "signature": "[LNFact]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:_rPrems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate all conclusions of a rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "enumConcs",
          "package": "tamarin-prover-theory",
          "signature": "Rule i -\u003e [(ConcIdx, LNFact)]",
          "source": "src/Theory-Model-Rule.html#enumConcs",
          "type": "function"
        },
        "index": {
          "description": "Enumerate all conclusions of rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "enumConcs",
          "normalized": "Rule a-\u003e[(ConcIdx,LNFact)]",
          "package": "tamarin-prover-theory",
          "partial": "Concs",
          "signature": "Rule i-\u003e[(ConcIdx,LNFact)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:enumConcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate all premises of a rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "enumPrems",
          "package": "tamarin-prover-theory",
          "signature": "Rule i -\u003e [(PremIdx, LNFact)]",
          "source": "src/Theory-Model-Rule.html#enumPrems",
          "type": "function"
        },
        "index": {
          "description": "Enumerate all premises of rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "enumPrems",
          "normalized": "Rule a-\u003e[(PremIdx,LNFact)]",
          "package": "tamarin-prover-theory",
          "partial": "Prems",
          "signature": "Rule i-\u003e[(PremIdx,LNFact)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:enumPrems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "getConcIdx",
          "package": "tamarin-prover-theory",
          "signature": "Int",
          "source": "src/Theory-Model-Rule.html#ConcIdx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "getConcIdx",
          "package": "tamarin-prover-theory",
          "partial": "Conc Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:getConcIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "getPremIdx",
          "package": "tamarin-prover-theory",
          "signature": "Int",
          "source": "src/Theory-Model-Rule.html#PremIdx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "getPremIdx",
          "package": "tamarin-prover-theory",
          "partial": "Prem Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:getPremIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the rule is the special coerce rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "isCoerceRule",
          "package": "tamarin-prover-theory",
          "signature": "r -\u003e Bool",
          "source": "src/Theory-Model-Rule.html#isCoerceRule",
          "type": "function"
        },
        "index": {
          "description": "True iff the rule is the special coerce rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "isCoerceRule",
          "normalized": "a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Coerce Rule",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isCoerceRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the rule is a construction rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "isConstrRule",
          "package": "tamarin-prover-theory",
          "signature": "r -\u003e Bool",
          "source": "src/Theory-Model-Rule.html#isConstrRule",
          "type": "function"
        },
        "index": {
          "description": "True iff the rule is construction rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "isConstrRule",
          "normalized": "a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Constr Rule",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isConstrRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the rule is a destruction rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "isDestrRule",
          "package": "tamarin-prover-theory",
          "signature": "r -\u003e Bool",
          "source": "src/Theory-Model-Rule.html#isDestrRule",
          "type": "function"
        },
        "index": {
          "description": "True iff the rule is destruction rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "isDestrRule",
          "normalized": "a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Destr Rule",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isDestrRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the rule is the special fresh rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "isFreshRule",
          "package": "tamarin-prover-theory",
          "signature": "r -\u003e Bool",
          "source": "src/Theory-Model-Rule.html#isFreshRule",
          "type": "function"
        },
        "index": {
          "description": "True iff the rule is the special fresh rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "isFreshRule",
          "normalized": "a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Fresh Rule",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isFreshRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the rule is the special learn rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "isIRecvRule",
          "package": "tamarin-prover-theory",
          "signature": "r -\u003e Bool",
          "source": "src/Theory-Model-Rule.html#isIRecvRule",
          "type": "function"
        },
        "index": {
          "description": "True iff the rule is the special learn rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "isIRecvRule",
          "normalized": "a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "IRecv Rule",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isIRecvRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the rule is the special knows rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "isISendRule",
          "package": "tamarin-prover-theory",
          "signature": "r -\u003e Bool",
          "source": "src/Theory-Model-Rule.html#isISendRule",
          "type": "function"
        },
        "index": {
          "description": "True iff the rule is the special knows rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "isISendRule",
          "normalized": "a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "ISend Rule",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isISendRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the rule is an intruder rule\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "isIntruderRule",
          "package": "tamarin-prover-theory",
          "signature": "r -\u003e Bool",
          "source": "src/Theory-Model-Rule.html#isIntruderRule",
          "type": "function"
        },
        "index": {
          "description": "True iff the rule is an intruder rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "isIntruderRule",
          "normalized": "a-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Intruder Rule",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isIntruderRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the protocol rule has only the trivial variant.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "isTrivialProtoVariantAC",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleAC -\u003e ProtoRuleE -\u003e Bool",
          "source": "src/Theory-Model-Rule.html#isTrivialProtoVariantAC",
          "type": "function"
        },
        "index": {
          "description": "True if the protocol rule has only the trivial variant",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "isTrivialProtoVariantAC",
          "normalized": "ProtoRuleAC-\u003eProtoRuleE-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Trivial Proto Variant AC",
          "signature": "ProtoRuleAC-\u003eProtoRuleE-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:isTrivialProtoVariantAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elookupConc i ru\u003c/code\u003e returns the \u003ccode\u003ei\u003c/code\u003e-th conclusion of rule \u003ccode\u003eru\u003c/code\u003e, if possible.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "lookupConc",
          "package": "tamarin-prover-theory",
          "signature": "ConcIdx -\u003e Rule i -\u003e Maybe LNFact",
          "source": "src/Theory-Model-Rule.html#lookupConc",
          "type": "function"
        },
        "index": {
          "description": "lookupConc ru returns the th conclusion of rule ru if possible",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "lookupConc",
          "normalized": "ConcIdx-\u003eRule a-\u003eMaybe LNFact",
          "package": "tamarin-prover-theory",
          "partial": "Conc",
          "signature": "ConcIdx-\u003eRule i-\u003eMaybe LNFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:lookupConc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elookupPrem i ru\u003c/code\u003e returns the \u003ccode\u003ei\u003c/code\u003e-th premise of rule \u003ccode\u003eru\u003c/code\u003e, if possible.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "lookupPrem",
          "package": "tamarin-prover-theory",
          "signature": "PremIdx -\u003e Rule i -\u003e Maybe LNFact",
          "source": "src/Theory-Model-Rule.html#lookupPrem",
          "type": "function"
        },
        "index": {
          "description": "lookupPrem ru returns the th premise of rule ru if possible",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "lookupPrem",
          "normalized": "PremIdx-\u003eRule a-\u003eMaybe LNFact",
          "package": "tamarin-prover-theory",
          "partial": "Prem",
          "signature": "PremIdx-\u003eRule i-\u003eMaybe LNFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:lookupPrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the messages in premises and conclusions are in normal form\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "nfRule",
          "package": "tamarin-prover-theory",
          "signature": "Rule i -\u003e WithMaude Bool",
          "source": "src/Theory-Model-Rule.html#nfRule",
          "type": "function"
        },
        "index": {
          "description": "True if the messages in premises and conclusions are in normal form",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "nfRule",
          "normalized": "Rule a-\u003eWithMaude Bool",
          "package": "tamarin-prover-theory",
          "partial": "Rule",
          "signature": "Rule i-\u003eWithMaude Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:nfRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "pracLoopBreakers",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProtoRuleACInfo [PremIdx]",
          "source": "src/Theory-Model-Rule.html#pracLoopBreakers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "pracLoopBreakers",
          "normalized": "Lens a ProtoRuleACInfo[PremIdx]",
          "package": "tamarin-prover-theory",
          "partial": "Loop Breakers",
          "signature": "Lens arr ProtoRuleACInfo[PremIdx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:pracLoopBreakers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "pracName",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProtoRuleACInfo ProtoRuleName",
          "source": "src/Theory-Model-Rule.html#pracName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "pracName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:pracName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "pracVariants",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProtoRuleACInfo (Disj LNSubstVFresh)",
          "source": "src/Theory-Model-Rule.html#pracVariants",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "pracVariants",
          "package": "tamarin-prover-theory",
          "partial": "Variants",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:pracVariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "praciLoopBreakers",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProtoRuleACInstInfo [PremIdx]",
          "source": "src/Theory-Model-Rule.html#praciLoopBreakers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "praciLoopBreakers",
          "normalized": "Lens a ProtoRuleACInstInfo[PremIdx]",
          "package": "tamarin-prover-theory",
          "partial": "Loop Breakers",
          "signature": "Lens arr ProtoRuleACInstInfo[PremIdx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:praciLoopBreakers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "praciName",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ProtoRuleACInstInfo ProtoRuleName",
          "source": "src/Theory-Model-Rule.html#praciName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "praciName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:praciName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "prettyIntrRuleAC",
          "package": "tamarin-prover-theory",
          "signature": "IntrRuleAC -\u003e d",
          "source": "src/Theory-Model-Rule.html#prettyIntrRuleAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "prettyIntrRuleAC",
          "normalized": "IntrRuleAC-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Intr Rule AC",
          "signature": "IntrRuleAC-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyIntrRuleAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "prettyIntrRuleACInfo",
          "package": "tamarin-prover-theory",
          "signature": "IntrRuleACInfo -\u003e d",
          "source": "src/Theory-Model-Rule.html#prettyIntrRuleACInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "prettyIntrRuleACInfo",
          "normalized": "IntrRuleACInfo-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Intr Rule ACInfo",
          "signature": "IntrRuleACInfo-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyIntrRuleACInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "prettyLoopBreakers",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleACInfo -\u003e d",
          "source": "src/Theory-Model-Rule.html#prettyLoopBreakers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "prettyLoopBreakers",
          "normalized": "ProtoRuleACInfo-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Loop Breakers",
          "signature": "ProtoRuleACInfo-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyLoopBreakers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "prettyProtoRuleAC",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleAC -\u003e d",
          "source": "src/Theory-Model-Rule.html#prettyProtoRuleAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "prettyProtoRuleAC",
          "normalized": "ProtoRuleAC-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule AC",
          "signature": "ProtoRuleAC-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyProtoRuleAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "prettyProtoRuleE",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleE -\u003e d",
          "source": "src/Theory-Model-Rule.html#prettyProtoRuleE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "prettyProtoRuleE",
          "normalized": "ProtoRuleE-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule",
          "signature": "ProtoRuleE-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyProtoRuleE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "prettyProtoRuleName",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleName -\u003e d",
          "source": "src/Theory-Model-Rule.html#prettyProtoRuleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "prettyProtoRuleName",
          "normalized": "ProtoRuleName-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule Name",
          "signature": "ProtoRuleName-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyProtoRuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "prettyRuleAC",
          "package": "tamarin-prover-theory",
          "signature": "RuleAC -\u003e d",
          "source": "src/Theory-Model-Rule.html#prettyRuleAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "prettyRuleAC",
          "normalized": "RuleAC-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Rule AC",
          "signature": "RuleAC-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyRuleAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "prettyRuleACInst",
          "package": "tamarin-prover-theory",
          "signature": "RuleACInst -\u003e d",
          "source": "src/Theory-Model-Rule.html#prettyRuleACInst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "prettyRuleACInst",
          "normalized": "RuleACInst-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Rule ACInst",
          "signature": "RuleACInst-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyRuleACInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "prettyRuleName",
          "package": "tamarin-prover-theory",
          "signature": "Rule i -\u003e d",
          "source": "src/Theory-Model-Rule.html#prettyRuleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "prettyRuleName",
          "normalized": "Rule a-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "Rule Name",
          "signature": "Rule i-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:prettyRuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "rActs",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Rule i) [LNFact]",
          "source": "src/Theory-Model-Rule.html#rActs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "rActs",
          "normalized": "Lens a(Rule b)[LNFact]",
          "package": "tamarin-prover-theory",
          "partial": "Acts",
          "signature": "Lens arr(Rule i)[LNFact]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rActs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erConc i\u003c/code\u003e is a lens for the \u003ccode\u003ei\u003c/code\u003e-th conclusion of a rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "rConc",
          "package": "tamarin-prover-theory",
          "signature": "ConcIdx -\u003e Rule i :-\u003e LNFact",
          "source": "src/Theory-Model-Rule.html#rConc",
          "type": "function"
        },
        "index": {
          "description": "rConc is lens for the th conclusion of rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "rConc",
          "normalized": "ConcIdx-\u003eRule a-\u003eLNFact",
          "package": "tamarin-prover-theory",
          "partial": "Conc",
          "signature": "ConcIdx-\u003eRule i-\u003eLNFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rConc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "rConcs",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Rule i) [LNFact]",
          "source": "src/Theory-Model-Rule.html#rConcs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "rConcs",
          "normalized": "Lens a(Rule b)[LNFact]",
          "package": "tamarin-prover-theory",
          "partial": "Concs",
          "signature": "Lens arr(Rule i)[LNFact]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rConcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "rInfo",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Rule i) i",
          "source": "src/Theory-Model-Rule.html#rInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "rInfo",
          "package": "tamarin-prover-theory",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erPrem i\u003c/code\u003e is a lens for the \u003ccode\u003ei\u003c/code\u003e-th premise of a rule.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "rPrem",
          "package": "tamarin-prover-theory",
          "signature": "PremIdx -\u003e Rule i :-\u003e LNFact",
          "source": "src/Theory-Model-Rule.html#rPrem",
          "type": "function"
        },
        "index": {
          "description": "rPrem is lens for the th premise of rule",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "rPrem",
          "normalized": "PremIdx-\u003eRule a-\u003eLNFact",
          "package": "tamarin-prover-theory",
          "partial": "Prem",
          "signature": "PremIdx-\u003eRule i-\u003eLNFact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rPrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "rPrems",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Rule i) [LNFact]",
          "source": "src/Theory-Model-Rule.html#rPrems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "rPrems",
          "normalized": "Lens a(Rule b)[LNFact]",
          "package": "tamarin-prover-theory",
          "partial": "Prems",
          "signature": "Lens arr(Rule i)[LNFact]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:rPrems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of all reserved rule names.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "reservedRuleNames",
          "package": "tamarin-prover-theory",
          "signature": "[String]",
          "source": "src/Theory-Model-Rule.html#reservedRuleNames",
          "type": "function"
        },
        "index": {
          "description": "List of all reserved rule names",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "reservedRuleNames",
          "normalized": "[String]",
          "package": "tamarin-prover-theory",
          "partial": "Rule Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:reservedRuleNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts between these two types of rules.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ruleACIntrToRuleAC",
          "package": "tamarin-prover-theory",
          "signature": "IntrRuleAC -\u003e RuleAC",
          "source": "src/Theory-Model-Rule.html#ruleACIntrToRuleAC",
          "type": "function"
        },
        "index": {
          "description": "Converts between these two types of rules",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ruleACIntrToRuleAC",
          "normalized": "IntrRuleAC-\u003eRuleAC",
          "package": "tamarin-prover-theory",
          "partial": "ACIntr To Rule AC",
          "signature": "IntrRuleAC-\u003eRuleAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleACIntrToRuleAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts between these two types of rules.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ruleACIntrToRuleACInst",
          "package": "tamarin-prover-theory",
          "signature": "IntrRuleAC -\u003e RuleACInst",
          "source": "src/Theory-Model-Rule.html#ruleACIntrToRuleACInst",
          "type": "function"
        },
        "index": {
          "description": "Converts between these two types of rules",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ruleACIntrToRuleACInst",
          "normalized": "IntrRuleAC-\u003eRuleACInst",
          "package": "tamarin-prover-theory",
          "partial": "ACIntr To Rule ACInst",
          "signature": "IntrRuleAC-\u003eRuleACInst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleACIntrToRuleACInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts between these two types of rules, if possible.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ruleACToIntrRuleAC",
          "package": "tamarin-prover-theory",
          "signature": "RuleAC -\u003e Maybe IntrRuleAC",
          "source": "src/Theory-Model-Rule.html#ruleACToIntrRuleAC",
          "type": "function"
        },
        "index": {
          "description": "Converts between these two types of rules if possible",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ruleACToIntrRuleAC",
          "normalized": "RuleAC-\u003eMaybe IntrRuleAC",
          "package": "tamarin-prover-theory",
          "partial": "ACTo Intr Rule AC",
          "signature": "RuleAC-\u003eMaybe IntrRuleAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleACToIntrRuleAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eruleInfo proto intr\u003c/code\u003e maps the protocol information with \u003ccode\u003eproto\u003c/code\u003e and the\n intruder information with \u003ccode\u003eintr\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "ruleInfo",
          "package": "tamarin-prover-theory",
          "signature": "(p -\u003e c) -\u003e (i -\u003e c) -\u003e RuleInfo p i -\u003e c",
          "source": "src/Theory-Model-Rule.html#ruleInfo",
          "type": "function"
        },
        "index": {
          "description": "ruleInfo proto intr maps the protocol information with proto and the intruder information with intr",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ruleInfo",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eRuleInfo a c-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "Info",
          "signature": "(p-\u003ec)-\u003e(i-\u003ec)-\u003eRuleInfo p i-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Rule",
          "name": "ruleName",
          "package": "tamarin-prover-theory",
          "signature": "t -\u003e RuleInfo ProtoRuleName IntrRuleACInfo",
          "source": "src/Theory-Model-Rule.html#ruleName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "ruleName",
          "normalized": "a-\u003eRuleInfo ProtoRuleName IntrRuleACInfo",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "signature": "t-\u003eRuleInfo ProtoRuleName IntrRuleACInfo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:ruleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the rule name such that it can be used as a case name\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "showRuleCaseName",
          "package": "tamarin-prover-theory",
          "signature": "Rule i -\u003e String",
          "source": "src/Theory-Model-Rule.html#showRuleCaseName",
          "type": "function"
        },
        "index": {
          "description": "Pretty print the rule name such that it can be used as case name",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "showRuleCaseName",
          "normalized": "Rule a-\u003eString",
          "package": "tamarin-prover-theory",
          "partial": "Rule Case Name",
          "signature": "Rule i-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:showRuleCaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute \u003cem\u003esome\u003c/em\u003e rule instance of a rule modulo AC. If the rule is a\n protocol rule, then the given typing and variants also need to be handled.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "someRuleACInst",
          "package": "tamarin-prover-theory",
          "signature": "RuleAC -\u003e m (RuleACInst, Maybe RuleACConstrs)",
          "source": "src/Theory-Model-Rule.html#someRuleACInst",
          "type": "function"
        },
        "index": {
          "description": "Compute some rule instance of rule modulo AC If the rule is protocol rule then the given typing and variants also need to be handled",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "someRuleACInst",
          "normalized": "RuleAC-\u003ea(RuleACInst,Maybe RuleACConstrs)",
          "package": "tamarin-prover-theory",
          "partial": "Rule ACInst",
          "signature": "RuleAC-\u003em(RuleACInst,Maybe RuleACConstrs)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:someRuleACInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre these two rule instances unifiable.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "unifiableRuleACInsts",
          "package": "tamarin-prover-theory",
          "signature": "RuleACInst -\u003e RuleACInst -\u003e WithMaude Bool",
          "source": "src/Theory-Model-Rule.html#unifiableRuleACInsts",
          "type": "function"
        },
        "index": {
          "description": "Are these two rule instances unifiable",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "unifiableRuleACInsts",
          "normalized": "RuleACInst-\u003eRuleACInst-\u003eWithMaude Bool",
          "package": "tamarin-prover-theory",
          "partial": "Rule ACInsts",
          "signature": "RuleACInst-\u003eRuleACInst-\u003eWithMaude Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:unifiableRuleACInsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify a list of \u003ccode\u003eRuleACInst\u003c/code\u003e equalities.\n\u003c/p\u003e",
          "module": "Theory.Model.Rule",
          "name": "unifyRuleACInstEqs",
          "package": "tamarin-prover-theory",
          "signature": "[Equal RuleACInst] -\u003e WithMaude [LNSubstVFresh]",
          "source": "src/Theory-Model-Rule.html#unifyRuleACInstEqs",
          "type": "function"
        },
        "index": {
          "description": "Unify list of RuleACInst equalities",
          "hierarchy": "Theory Model Rule",
          "module": "Theory.Model.Rule",
          "name": "unifyRuleACInstEqs",
          "normalized": "[Equal RuleACInst]-\u003eWithMaude[LNSubstVFresh]",
          "package": "tamarin-prover-theory",
          "partial": "Rule ACInst Eqs",
          "signature": "[Equal RuleACInst]-\u003eWithMaude[LNSubstVFresh]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Rule.html#v:unifyRuleACInstEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSignatures for the terms and multiset rewriting rules used to model and\n reason about a security protocol.\n modulo the full Diffie-Hellman equational theory and once modulo AC.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Model.Signature",
          "name": "Signature",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Signature.html",
          "type": "module"
        },
        "index": {
          "description": "Signatures for the terms and multiset rewriting rules used to model and reason about security protocol modulo the full Diffie-Hellman equational theory and once modulo AC",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "Signature",
          "package": "tamarin-prover-theory",
          "partial": "Signature",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA theory signature.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "Signature",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Signature.html#Signature",
          "type": "data"
        },
        "index": {
          "description": "theory signature",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "Signature",
          "package": "tamarin-prover-theory",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e without an associated Maude process.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "SignaturePure",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Signature.html#SignaturePure",
          "type": "type"
        },
        "index": {
          "description": "Signature without an associated Maude process",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "SignaturePure",
          "package": "tamarin-prover-theory",
          "partial": "Signature Pure",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#t:SignaturePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e with an associated, running Maude process.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "SignatureWithMaude",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model-Signature.html#SignatureWithMaude",
          "type": "type"
        },
        "index": {
          "description": "Signature with an associated running Maude process",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "SignatureWithMaude",
          "package": "tamarin-prover-theory",
          "partial": "Signature With Maude",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#t:SignatureWithMaude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Signature",
          "name": "Signature",
          "package": "tamarin-prover-theory",
          "signature": "Signature",
          "source": "src/Theory-Model-Signature.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "Signature",
          "package": "tamarin-prover-theory",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Model.Signature",
          "name": "_sigMaudeInfo",
          "package": "tamarin-prover-theory",
          "signature": "a",
          "source": "src/Theory-Model-Signature.html#Signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "_sigMaudeInfo",
          "package": "tamarin-prover-theory",
          "partial": "Maude Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:_sigMaudeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty pure signature.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "emptySignaturePure",
          "package": "tamarin-prover-theory",
          "signature": "SignaturePure",
          "source": "src/Theory-Model-Signature.html#emptySignaturePure",
          "type": "function"
        },
        "index": {
          "description": "The empty pure signature",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "emptySignaturePure",
          "package": "tamarin-prover-theory",
          "partial": "Signature Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:emptySignaturePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a signature with maude.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "prettySignaturePure",
          "package": "tamarin-prover-theory",
          "signature": "SignaturePure -\u003e d",
          "source": "src/Theory-Model-Signature.html#prettySignaturePure",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print signature with maude",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "prettySignaturePure",
          "normalized": "SignaturePure-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Signature Pure",
          "signature": "SignaturePure-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:prettySignaturePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a pure signature.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "prettySignatureWithMaude",
          "package": "tamarin-prover-theory",
          "signature": "SignatureWithMaude -\u003e d",
          "source": "src/Theory-Model-Signature.html#prettySignatureWithMaude",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print pure signature",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "prettySignatureWithMaude",
          "normalized": "SignatureWithMaude-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Signature With Maude",
          "signature": "SignatureWithMaude-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:prettySignatureWithMaude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the maude handle in a signature.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "sigmMaudeHandle",
          "package": "tamarin-prover-theory",
          "signature": "SignatureWithMaude :-\u003e MaudeHandle",
          "source": "src/Theory-Model-Signature.html#sigmMaudeHandle",
          "type": "function"
        },
        "index": {
          "description": "Access the maude handle in signature",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "sigmMaudeHandle",
          "normalized": "SignatureWithMaude-\u003eMaudeHandle",
          "package": "tamarin-prover-theory",
          "partial": "Maude Handle",
          "signature": "SignatureWithMaude-\u003eMaudeHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:sigmMaudeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the maude signature.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "sigpMaudeSig",
          "package": "tamarin-prover-theory",
          "signature": "SignaturePure :-\u003e MaudeSig",
          "source": "src/Theory-Model-Signature.html#sigpMaudeSig",
          "type": "function"
        },
        "index": {
          "description": "Access the maude signature",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "sigpMaudeSig",
          "normalized": "SignaturePure-\u003eMaudeSig",
          "package": "tamarin-prover-theory",
          "partial": "Maude Sig",
          "signature": "SignaturePure-\u003eMaudeSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:sigpMaudeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure signature of a \u003ccode\u003e\u003ca\u003eSignatureWithMaude\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "toSignaturePure",
          "package": "tamarin-prover-theory",
          "signature": "SignatureWithMaude -\u003e SignaturePure",
          "source": "src/Theory-Model-Signature.html#toSignaturePure",
          "type": "function"
        },
        "index": {
          "description": "The pure signature of SignatureWithMaude",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "toSignaturePure",
          "normalized": "SignatureWithMaude-\u003eSignaturePure",
          "package": "tamarin-prover-theory",
          "partial": "Signature Pure",
          "signature": "SignatureWithMaude-\u003eSignaturePure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:toSignaturePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that maude is running and configured with the current signature.\n\u003c/p\u003e",
          "module": "Theory.Model.Signature",
          "name": "toSignatureWithMaude",
          "package": "tamarin-prover-theory",
          "signature": "FilePath-\u003e SignaturePure-\u003e IO SignatureWithMaude",
          "type": "function"
        },
        "index": {
          "description": "Ensure that maude is running and configured with the current signature",
          "hierarchy": "Theory Model Signature",
          "module": "Theory.Model.Signature",
          "name": "toSignatureWithMaude",
          "normalized": "FilePath-\u003eSignaturePure-\u003eIO SignatureWithMaude",
          "package": "tamarin-prover-theory",
          "partial": "Signature With Maude",
          "signature": "FilePath-\u003eSignaturePure-\u003eIO SignatureWithMaude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model-Signature.html#v:toSignatureWithMaude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSecurity protocol model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Model",
          "name": "Model",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Model.html",
          "type": "module"
        },
        "index": {
          "description": "Security protocol model",
          "hierarchy": "Theory Model",
          "module": "Theory.Model",
          "name": "Model",
          "package": "tamarin-prover-theory",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes to represent proofs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Proof",
          "name": "Proof",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html",
          "type": "module"
        },
        "index": {
          "description": "Types to represent proofs",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "Proof",
          "package": "tamarin-prover-theory",
          "partial": "Proof",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "AutoProver",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html#AutoProver",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "AutoProver",
          "package": "tamarin-prover-theory",
          "partial": "Auto Prover",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:AutoProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncremental proofs are used to represent intermediate results of proof\n checking/construction.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "IncrementalProof",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html#IncrementalProof",
          "type": "type"
        },
        "index": {
          "description": "Incremental proofs are used to represent intermediate results of proof checking construction",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "IncrementalProof",
          "package": "tamarin-prover-theory",
          "partial": "Incremental Proof",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:IncrementalProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrees with uniquely labelled edges.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "LTree",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html#LTree",
          "type": "data"
        },
        "index": {
          "description": "Trees with uniquely labelled edges",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "LTree",
          "package": "tamarin-prover-theory",
          "partial": "LTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:LTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proof is a tree of proof steps whose edges are labelled with case names.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "Proof",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html#Proof",
          "type": "type"
        },
        "index": {
          "description": "proof is tree of proof steps whose edges are labelled with case names",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "Proof",
          "package": "tamarin-prover-theory",
          "partial": "Proof",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:Proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path to a subproof.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "ProofPath",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html#ProofPath",
          "type": "type"
        },
        "index": {
          "description": "path to subproof",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "ProofPath",
          "package": "tamarin-prover-theory",
          "partial": "Proof Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:ProofPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe status of a \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "ProofStatus",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html#ProofStatus",
          "type": "data"
        },
        "index": {
          "description": "The status of Proof",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "ProofStatus",
          "package": "tamarin-prover-theory",
          "partial": "Proof Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:ProofStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proof steps is a proof method together with additional context-dependent\n information.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "ProofStep",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html#ProofStep",
          "type": "data"
        },
        "index": {
          "description": "proof steps is proof method together with additional context-dependent information",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "ProofStep",
          "package": "tamarin-prover-theory",
          "partial": "Proof Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:ProofStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvers whose sequencing is handled via the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cpre\u003e p1 `mappend` p2\n\u003c/pre\u003e\u003cp\u003eIs a prover that first runs p1 and then p2 on the resulting proof.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "Prover",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html#Prover",
          "type": "data"
        },
        "index": {
          "description": "Provers whose sequencing is handled via the Monoid instance p1 mappend p2 Is prover that first runs p1 and then p2 on the resulting proof",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "Prover",
          "package": "tamarin-prover-theory",
          "partial": "Prover",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:Prover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "SolutionExtractor",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Proof.html#SolutionExtractor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "SolutionExtractor",
          "package": "tamarin-prover-theory",
          "partial": "Solution Extractor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#t:SolutionExtractor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "AutoProver",
          "package": "tamarin-prover-theory",
          "signature": "AutoProver",
          "source": "src/Theory-Proof.html#AutoProver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "AutoProver",
          "package": "tamarin-prover-theory",
          "partial": "Auto Prover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:AutoProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe proof is complete: no annotated sorry,\n  no annotated solved step\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "CompleteProof",
          "package": "tamarin-prover-theory",
          "signature": "CompleteProof",
          "source": "src/Theory-Proof.html#ProofStatus",
          "type": "function"
        },
        "index": {
          "description": "The proof is complete no annotated sorry no annotated solved step",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "CompleteProof",
          "package": "tamarin-prover-theory",
          "partial": "Complete Proof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:CompleteProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "CutBFS",
          "package": "tamarin-prover-theory",
          "signature": "CutBFS",
          "source": "src/Theory-Proof.html#SolutionExtractor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "CutBFS",
          "package": "tamarin-prover-theory",
          "partial": "Cut BFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:CutBFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "CutDFS",
          "package": "tamarin-prover-theory",
          "signature": "CutDFS",
          "source": "src/Theory-Proof.html#SolutionExtractor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "CutDFS",
          "package": "tamarin-prover-theory",
          "partial": "Cut DFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:CutDFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "CutNothing",
          "package": "tamarin-prover-theory",
          "signature": "CutNothing",
          "source": "src/Theory-Proof.html#SolutionExtractor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "CutNothing",
          "package": "tamarin-prover-theory",
          "partial": "Cut Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:CutNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is a annotated sorry,\n   but no annotatd solved step.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "IncompleteProof",
          "package": "tamarin-prover-theory",
          "signature": "IncompleteProof",
          "source": "src/Theory-Proof.html#ProofStatus",
          "type": "function"
        },
        "index": {
          "description": "There is annotated sorry but no annotatd solved step",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "IncompleteProof",
          "package": "tamarin-prover-theory",
          "partial": "Incomplete Proof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:IncompleteProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "LNode",
          "package": "tamarin-prover-theory",
          "signature": "LNode",
          "source": "src/Theory-Proof.html#LTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "LNode",
          "package": "tamarin-prover-theory",
          "partial": "LNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:LNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "ProofStep",
          "package": "tamarin-prover-theory",
          "signature": "ProofStep",
          "source": "src/Theory-Proof.html#ProofStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "ProofStep",
          "package": "tamarin-prover-theory",
          "partial": "Proof Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:ProofStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is an annotated solved step\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "TraceFound",
          "package": "tamarin-prover-theory",
          "signature": "TraceFound",
          "source": "src/Theory-Proof.html#ProofStatus",
          "type": "function"
        },
        "index": {
          "description": "There is an annotated solved step",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "TraceFound",
          "package": "tamarin-prover-theory",
          "partial": "Trace Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:TraceFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll steps are unannotated\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "UndeterminedProof",
          "package": "tamarin-prover-theory",
          "signature": "UndeterminedProof",
          "source": "src/Theory-Proof.html#ProofStatus",
          "type": "function"
        },
        "index": {
          "description": "All steps are unannotated",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "UndeterminedProof",
          "package": "tamarin-prover-theory",
          "partial": "Undetermined Proof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:UndeterminedProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate a proof in a bottom-up fashion.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "annotateProof",
          "package": "tamarin-prover-theory",
          "signature": "(ProofStep a -\u003e [b] -\u003e b) -\u003e Proof a -\u003e Proof b",
          "source": "src/Theory-Proof.html#annotateProof",
          "type": "function"
        },
        "index": {
          "description": "Annotate proof in bottom-up fashion",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "annotateProof",
          "normalized": "(ProofStep a-\u003e[b]-\u003eb)-\u003eProof a-\u003eProof b",
          "package": "tamarin-prover-theory",
          "partial": "Proof",
          "signature": "(ProofStep a-\u003e[b]-\u003eb)-\u003eProof a-\u003eProof b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:annotateProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "apBound",
          "package": "tamarin-prover-theory",
          "signature": "Maybe Int",
          "source": "src/Theory-Proof.html#AutoProver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "apBound",
          "package": "tamarin-prover-theory",
          "partial": "Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:apBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "apCut",
          "package": "tamarin-prover-theory",
          "signature": "SolutionExtractor",
          "source": "src/Theory-Proof.html#AutoProver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "apCut",
          "package": "tamarin-prover-theory",
          "partial": "Cut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:apCut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "apHeuristic",
          "package": "tamarin-prover-theory",
          "signature": "Heuristic",
          "source": "src/Theory-Proof.html#AutoProver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "apHeuristic",
          "package": "tamarin-prover-theory",
          "partial": "Heuristic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:apHeuristic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eprf \u003ccode\u003e\u003ca\u003eatPath\u003c/a\u003e\u003c/code\u003e path\u003c/code\u003e returns the subproof at the \u003ccode\u003epath\u003c/code\u003e in \u003ccode\u003eprf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "atPath",
          "package": "tamarin-prover-theory",
          "signature": "Proof a -\u003e ProofPath -\u003e Maybe (Proof a)",
          "source": "src/Theory-Proof.html#atPath",
          "type": "function"
        },
        "index": {
          "description": "prf atPath path returns the subproof at the path in prf",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "atPath",
          "normalized": "Proof a-\u003eProofPath-\u003eMaybe(Proof a)",
          "package": "tamarin-prover-theory",
          "partial": "Path",
          "signature": "Proof a-\u003eProofPath-\u003eMaybe(Proof a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:atPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the proof and handle new cases using the given prover.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "checkAndExtendProver",
          "package": "tamarin-prover-theory",
          "signature": "Prover -\u003e Prover",
          "source": "src/Theory-Proof.html#checkAndExtendProver",
          "type": "function"
        },
        "index": {
          "description": "Check the proof and handle new cases using the given prover",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "checkAndExtendProver",
          "normalized": "Prover-\u003eProver",
          "package": "tamarin-prover-theory",
          "partial": "And Extend Prover",
          "signature": "Prover-\u003eProver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:checkAndExtendProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "children",
          "package": "tamarin-prover-theory",
          "signature": "Map l (LTree l a)",
          "source": "src/Theory-Proof.html#LTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "children",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProver that does one contradiction step.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "contradictionProver",
          "package": "tamarin-prover-theory",
          "signature": "Prover",
          "source": "src/Theory-Proof.html#contradictionProver",
          "type": "function"
        },
        "index": {
          "description": "Prover that does one contradiction step",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "contradictionProver",
          "package": "tamarin-prover-theory",
          "partial": "Prover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:contradictionProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a prover only to a sub-proof, fails if the subproof doesn't exist.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "focus",
          "package": "tamarin-prover-theory",
          "signature": "ProofPath -\u003e Prover -\u003e Prover",
          "source": "src/Theory-Proof.html#focus",
          "type": "function"
        },
        "index": {
          "description": "Apply prover only to sub-proof fails if the subproof doesn exist",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "focus",
          "normalized": "ProofPath-\u003eProver-\u003eProver",
          "package": "tamarin-prover-theory",
          "signature": "ProofPath-\u003eProver-\u003eProver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a proof.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "foldProof",
          "package": "tamarin-prover-theory",
          "signature": "(ProofStep a -\u003e m) -\u003e Proof a -\u003e m",
          "source": "src/Theory-Proof.html#foldProof",
          "type": "function"
        },
        "index": {
          "description": "Fold proof",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "foldProof",
          "normalized": "(ProofStep a-\u003eb)-\u003eProof a-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "Proof",
          "signature": "(ProofStep a-\u003em)-\u003eProof a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:foldProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einsertPaths prf\u003c/code\u003e inserts the path to every proof node.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "insertPaths",
          "package": "tamarin-prover-theory",
          "signature": "Proof a -\u003e Proof (a, ProofPath)",
          "source": "src/Theory-Proof.html#insertPaths",
          "type": "function"
        },
        "index": {
          "description": "insertPaths prf inserts the path to every proof node",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "insertPaths",
          "normalized": "Proof a-\u003eProof(a,ProofPath)",
          "package": "tamarin-prover-theory",
          "partial": "Paths",
          "signature": "Proof a-\u003eProof(a,ProofPath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:insertPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the information of every proof step.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "mapProofInfo",
          "package": "tamarin-prover-theory",
          "signature": "(a -\u003e b) -\u003e Proof a -\u003e Proof b",
          "source": "src/Theory-Proof.html#mapProofInfo",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the information of every proof step",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "mapProofInfo",
          "normalized": "(a-\u003eb)-\u003eProof a-\u003eProof b",
          "package": "tamarin-prover-theory",
          "partial": "Proof Info",
          "signature": "(a-\u003eb)-\u003eProof a-\u003eProof b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:mapProofInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the proof generated by the prover.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "mapProverProof",
          "package": "tamarin-prover-theory",
          "signature": "(IncrementalProof -\u003e IncrementalProof) -\u003e Prover -\u003e Prover",
          "source": "src/Theory-Proof.html#mapProverProof",
          "type": "function"
        },
        "index": {
          "description": "Map the proof generated by the prover",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "mapProverProof",
          "normalized": "(IncrementalProof-\u003eIncrementalProof)-\u003eProver-\u003eProver",
          "package": "tamarin-prover-theory",
          "partial": "Prover Proof",
          "signature": "(IncrementalProof-\u003eIncrementalProof)-\u003eProver-\u003eProver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:mapProverProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. A generalized union operator for maps with differing types.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "mergeMapsWith",
          "package": "tamarin-prover-theory",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e (a -\u003e b -\u003e c) -\u003e Map k a -\u003e Map k b -\u003e Map k c",
          "source": "src/Theory-Proof.html#mergeMapsWith",
          "type": "function"
        },
        "index": {
          "description": "generalized union operator for maps with differing types",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "mergeMapsWith",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003e(a-\u003ec-\u003eb)-\u003eMap d a-\u003eMap d c-\u003eMap d b",
          "package": "tamarin-prover-theory",
          "partial": "Maps With",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003eMap k a-\u003eMap k b-\u003eMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:mergeMapsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to execute one proof step using the given proof method.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "oneStepProver",
          "package": "tamarin-prover-theory",
          "signature": "ProofMethod -\u003e Prover",
          "source": "src/Theory-Proof.html#oneStepProver",
          "type": "function"
        },
        "index": {
          "description": "Try to execute one proof step using the given proof method",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "oneStepProver",
          "normalized": "ProofMethod-\u003eProver",
          "package": "tamarin-prover-theory",
          "partial": "Step Prover",
          "signature": "ProofMethod-\u003eProver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:oneStepProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResorts to the second prover, if the first one is not successful.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "orelse",
          "package": "tamarin-prover-theory",
          "signature": "Prover -\u003e Prover -\u003e Prover",
          "source": "src/Theory-Proof.html#orelse",
          "type": "function"
        },
        "index": {
          "description": "Resorts to the second prover if the first one is not successful",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "orelse",
          "normalized": "Prover-\u003eProver-\u003eProver",
          "package": "tamarin-prover-theory",
          "signature": "Prover-\u003eProver-\u003eProver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:orelse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parallel evaluation strategy well-suited for DFS traversal: As soon as\n a node is forced it sparks off the computation of the number of case-maps\n of all its children. This way most of the data is already evaulated, when\n the actual DFS traversal visits it.\n\u003c/p\u003e\u003cp\u003eNOT used for now. It sometimes required too much memory.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "parLTreeDFS",
          "package": "tamarin-prover-theory",
          "signature": "Strategy (LTree l a)",
          "source": "src/Theory-Proof.html#parLTreeDFS",
          "type": "function"
        },
        "index": {
          "description": "parallel evaluation strategy well-suited for DFS traversal As soon as node is forced it sparks off the computation of the number of case-maps of all its children This way most of the data is already evaulated when the actual DFS traversal visits it NOT used for now It sometimes required too much memory",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "parLTreeDFS",
          "package": "tamarin-prover-theory",
          "partial": "LTree DFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:parLTreeDFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "prettyProof",
          "package": "tamarin-prover-theory",
          "signature": "Proof a -\u003e d",
          "source": "src/Theory-Proof.html#prettyProof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "prettyProof",
          "normalized": "Proof a-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "Proof",
          "signature": "Proof a-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:prettyProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "prettyProofWith",
          "package": "tamarin-prover-theory",
          "signature": "(ProofStep a -\u003e d)-\u003e (ProofStep a -\u003e d -\u003e d)-\u003e Proof a-\u003e d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "prettyProofWith",
          "normalized": "(ProofStep a-\u003eb)-\u003e(ProofStep a-\u003eb-\u003eb)-\u003eProof a-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "Proof With",
          "signature": "(ProofStep a-\u003ed)-\u003e(ProofStep a-\u003ed-\u003ed)-\u003eProof a-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:prettyProofWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe status of a \u003ccode\u003e\u003ca\u003eProofStep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "proofStepStatus",
          "package": "tamarin-prover-theory",
          "signature": "ProofStep (Maybe a) -\u003e ProofStatus",
          "source": "src/Theory-Proof.html#proofStepStatus",
          "type": "function"
        },
        "index": {
          "description": "The status of ProofStep",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "proofStepStatus",
          "normalized": "ProofStep(Maybe a)-\u003eProofStatus",
          "package": "tamarin-prover-theory",
          "partial": "Step Status",
          "signature": "ProofStep(Maybe a)-\u003eProofStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:proofStepStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "psInfo",
          "package": "tamarin-prover-theory",
          "signature": "a",
          "source": "src/Theory-Proof.html#ProofStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "psInfo",
          "package": "tamarin-prover-theory",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:psInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "psMethod",
          "package": "tamarin-prover-theory",
          "signature": "ProofMethod",
          "source": "src/Theory-Proof.html#ProofStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "psMethod",
          "package": "tamarin-prover-theory",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:psMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all annotated sorry steps using the given prover.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "replaceSorryProver",
          "package": "tamarin-prover-theory",
          "signature": "Prover -\u003e Prover",
          "source": "src/Theory-Proof.html#replaceSorryProver",
          "type": "function"
        },
        "index": {
          "description": "Replace all annotated sorry steps using the given prover",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "replaceSorryProver",
          "normalized": "Prover-\u003eProver",
          "package": "tamarin-prover-theory",
          "partial": "Sorry Prover",
          "signature": "Prover-\u003eProver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:replaceSorryProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "root",
          "package": "tamarin-prover-theory",
          "signature": "a",
          "source": "src/Theory-Proof.html#LTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "root",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "runAutoProver",
          "package": "tamarin-prover-theory",
          "signature": "AutoProver -\u003e Prover",
          "source": "src/Theory-Proof.html#runAutoProver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "runAutoProver",
          "normalized": "AutoProver-\u003eProver",
          "package": "tamarin-prover-theory",
          "partial": "Auto Prover",
          "signature": "AutoProver-\u003eProver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:runAutoProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Proof",
          "name": "runProver",
          "package": "tamarin-prover-theory",
          "signature": "Prover -\u003e ProofContext -\u003e Int -\u003e System -\u003e IncrementalProof -\u003e Maybe IncrementalProof",
          "source": "src/Theory-Proof.html#runProver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "runProver",
          "normalized": "Prover-\u003eProofContext-\u003eInt-\u003eSystem-\u003eIncrementalProof-\u003eMaybe IncrementalProof",
          "package": "tamarin-prover-theory",
          "partial": "Prover",
          "signature": "Prover-\u003eProofContext-\u003eInt-\u003eSystem-\u003eIncrementalProof-\u003eMaybe IncrementalProof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:runProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a proof status to a redable string.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "showProofStatus",
          "package": "tamarin-prover-theory",
          "signature": "SystemTraceQuantifier -\u003e ProofStatus -\u003e String",
          "source": "src/Theory-Proof.html#showProofStatus",
          "type": "function"
        },
        "index": {
          "description": "Convert proof status to redable string",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "showProofStatus",
          "normalized": "SystemTraceQuantifier-\u003eProofStatus-\u003eString",
          "package": "tamarin-prover-theory",
          "partial": "Proof Status",
          "signature": "SystemTraceQuantifier-\u003eProofStatus-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:showProofStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proof using the \u003ccode\u003e\u003ca\u003esorry\u003c/a\u003e\u003c/code\u003e proof method.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "sorry",
          "package": "tamarin-prover-theory",
          "signature": "Maybe String -\u003e a -\u003e Proof a",
          "source": "src/Theory-Proof.html#sorry",
          "type": "function"
        },
        "index": {
          "description": "proof using the sorry proof method",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "sorry",
          "normalized": "Maybe String-\u003ea-\u003eProof a",
          "package": "tamarin-prover-theory",
          "signature": "Maybe String-\u003ea-\u003eProof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:sorry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the current proof with a sorry step and the given reason.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "sorryProver",
          "package": "tamarin-prover-theory",
          "signature": "Maybe String -\u003e Prover",
          "source": "src/Theory-Proof.html#sorryProver",
          "type": "function"
        },
        "index": {
          "description": "Replace the current proof with sorry step and the given reason",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "sorryProver",
          "normalized": "Maybe String-\u003eProver",
          "package": "tamarin-prover-theory",
          "partial": "Prover",
          "signature": "Maybe String-\u003eProver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:sorryProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to apply a prover. If it fails, just return the original proof.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "tryProver",
          "package": "tamarin-prover-theory",
          "signature": "Prover -\u003e Prover",
          "source": "src/Theory-Proof.html#tryProver",
          "type": "function"
        },
        "index": {
          "description": "Try to apply prover If it fails just return the original proof",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "tryProver",
          "normalized": "Prover-\u003eProver",
          "package": "tamarin-prover-theory",
          "partial": "Prover",
          "signature": "Prover-\u003eProver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:tryProver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proof denoting an unproven part of the proof.\n\u003c/p\u003e",
          "module": "Theory.Proof",
          "name": "unproven",
          "package": "tamarin-prover-theory",
          "signature": "a -\u003e Proof a",
          "source": "src/Theory-Proof.html#unproven",
          "type": "function"
        },
        "index": {
          "description": "proof denoting an unproven part of the proof",
          "hierarchy": "Theory Proof",
          "module": "Theory.Proof",
          "name": "unproven",
          "normalized": "a-\u003eProof a",
          "package": "tamarin-prover-theory",
          "signature": "a-\u003eProof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Proof.html#v:unproven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTokenizing infrastructure\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "Token",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Text-Parser-Token.html",
          "type": "module"
        },
        "index": {
          "description": "Tokenizing infrastructure",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "Token",
          "package": "tamarin-prover-theory",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for a stream of tokens.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "Parser",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Text-Parser-Token.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "parser for stream of tokens",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "Parser",
          "package": "tamarin-prover-theory",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBetween angular brackets.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "angled",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Theory-Text-Parser-Token.html#angled",
          "type": "function"
        },
        "index": {
          "description": "Between angular brackets",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "angled",
          "normalized": "Parser a-\u003eParser a",
          "package": "tamarin-prover-theory",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:angled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBetween braces.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "braced",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Theory-Text-Parser-Token.html#braced",
          "type": "function"
        },
        "index": {
          "description": "Between braces",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "braced",
          "normalized": "Parser a-\u003eParser a",
          "package": "tamarin-prover-theory",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:braced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBetween brackets.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "brackets",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Theory-Text-Parser-Token.html#brackets",
          "type": "function"
        },
        "index": {
          "description": "Between brackets",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "brackets",
          "normalized": "Parser a-\u003eParser a",
          "package": "tamarin-prover-theory",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA colon \u003ccode\u003e:\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "colon",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#colon",
          "type": "function"
        },
        "index": {
          "description": "colon",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "colon",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comma \u003ccode\u003e,\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "comma",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#comma",
          "type": "function"
        },
        "index": {
          "description": "comma",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "comma",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comma separated list of elements.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "commaSep",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e Parser [a]",
          "source": "src/Theory-Text-Parser-Token.html#commaSep",
          "type": "function"
        },
        "index": {
          "description": "comma separated list of elements",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "commaSep",
          "normalized": "Parser a-\u003eParser[a]",
          "package": "tamarin-prover-theory",
          "partial": "Sep",
          "signature": "Parser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:commaSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comma separated non-empty list of elements.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "commaSep1",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e Parser [a]",
          "source": "src/Theory-Text-Parser-Token.html#commaSep1",
          "type": "function"
        },
        "index": {
          "description": "comma separated non-empty list of elements",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "commaSep1",
          "normalized": "Parser a-\u003eParser[a]",
          "package": "tamarin-prover-theory",
          "partial": "Sep",
          "signature": "Parser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:commaSep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dot \u003ccode\u003e.\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "dot",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#dot",
          "type": "function"
        },
        "index": {
          "description": "dot",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "dot",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBetween double quotes.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "doubleQuoted",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Theory-Text-Parser-Token.html#doubleQuoted",
          "type": "function"
        },
        "index": {
          "description": "Between double quotes",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "doubleQuoted",
          "normalized": "Parser a-\u003eParser a",
          "package": "tamarin-prover-theory",
          "partial": "Quoted",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:doubleQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equal sign \u003ccode\u003e=\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "equalSign",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#equalSign",
          "type": "function"
        },
        "index": {
          "description": "The equal sign",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "equalSign",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Sign",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:equalSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formal comment; i.e., (header, body)\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "formalComment",
          "package": "tamarin-prover-theory",
          "signature": "Parser (String, String)",
          "source": "src/Theory-Text-Parser-Token.html#formalComment",
          "type": "function"
        },
        "index": {
          "description": "formal comment i.e header body",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "formalComment",
          "normalized": "Parser(String,String)",
          "package": "tamarin-prover-theory",
          "partial": "Comment",
          "signature": "Parser(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:formalComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a literal fresh name, e.g., \u003ccode\u003e~\u003ccode\u003en\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "freshName",
          "package": "tamarin-prover-theory",
          "signature": "Parser String",
          "source": "src/Theory-Text-Parser-Token.html#freshName",
          "type": "function"
        },
        "index": {
          "description": "Parse literal fresh name e.g",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "freshName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:freshName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an identifier as a string\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "identifier",
          "package": "tamarin-prover-theory",
          "signature": "Parser String",
          "source": "src/Theory-Text-Parser-Token.html#identifier",
          "type": "function"
        },
        "index": {
          "description": "Parse an identifier as string",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "identifier",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an identifier possibly indexed with a number.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "indexedIdentifier",
          "package": "tamarin-prover-theory",
          "signature": "Parser (String, Integer)",
          "source": "src/Theory-Text-Parser-Token.html#indexedIdentifier",
          "type": "function"
        },
        "index": {
          "description": "Parse an identifier possibly indexed with number",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "indexedIdentifier",
          "normalized": "Parser(String,Integer)",
          "package": "tamarin-prover-theory",
          "partial": "Identifier",
          "signature": "Parser(String,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:indexedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a list of items '[' item ',' ... ',' item ']'\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "list",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e Parser [a]",
          "source": "src/Theory-Text-Parser-Token.html#list",
          "type": "function"
        },
        "index": {
          "description": "Parse list of items item item",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "list",
          "normalized": "Parser a-\u003eParser[a]",
          "package": "tamarin-prover-theory",
          "signature": "Parser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arbitrary logical variable.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "lvar",
          "package": "tamarin-prover-theory",
          "signature": "Parser LVar",
          "source": "src/Theory-Text-Parser-Token.html#lvar",
          "type": "function"
        },
        "index": {
          "description": "An arbitrary logical variable",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "lvar",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:lvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a non-node variable.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "msgvar",
          "package": "tamarin-prover-theory",
          "signature": "Parser LVar",
          "source": "src/Theory-Text-Parser-Token.html#msgvar",
          "type": "function"
        },
        "index": {
          "description": "Parse non-node variable",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "msgvar",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:msgvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an natural.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "natural",
          "package": "tamarin-prover-theory",
          "signature": "Parser Integer",
          "source": "src/Theory-Text-Parser-Token.html#natural",
          "type": "function"
        },
        "index": {
          "description": "Parse an natural",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "natural",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a Unicode-subscripted natural number.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "naturalSubscript",
          "package": "tamarin-prover-theory",
          "signature": "Parser Integer",
          "source": "src/Theory-Text-Parser-Token.html#naturalSubscript",
          "type": "function"
        },
        "index": {
          "description": "Parse Unicode-subscripted natural number",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "naturalSubscript",
          "package": "tamarin-prover-theory",
          "partial": "Subscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:naturalSubscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a graph node variable.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "nodevar",
          "package": "tamarin-prover-theory",
          "signature": "Parser NodeId",
          "source": "src/Theory-Text-Parser-Token.html#nodevar",
          "type": "function"
        },
        "index": {
          "description": "Parse graph node variable",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "nodevar",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:nodevar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action-at-timepoint operator @.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opAt",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opAt",
          "type": "function"
        },
        "index": {
          "description": "The action-at-timepoint operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opAt",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "At",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bang operator \u003ccode\u003e!\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opBang",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opBang",
          "type": "function"
        },
        "index": {
          "description": "The bang operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opBang",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Bang",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opBang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe chain operator \u003ccode\u003e~~\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opChain",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opChain",
          "type": "function"
        },
        "index": {
          "description": "The chain operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opChain",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Chain",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equality operator \u003ccode\u003e=\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opEqual",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opEqual",
          "type": "function"
        },
        "index": {
          "description": "The equality operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opEqual",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Equal",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe logical-exists operator \u003ccode\u003eEx\u003c/code\u003e or \u003ccode\u003e&#8707;\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opExists",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opExists",
          "type": "function"
        },
        "index": {
          "description": "The logical-exists operator Ex or",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opExists",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Exists",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exponentiation operator \u003ccode\u003e^\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opExp",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opExp",
          "type": "function"
        },
        "index": {
          "description": "The exponentiation operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opExp",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Exp",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe logical-forall operator \u003ccode\u003eAll\u003c/code\u003e or \u003ccode\u003e&#8704;\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opForall",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opForall",
          "type": "function"
        },
        "index": {
          "description": "The logical-forall operator All or",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opForall",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Forall",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe logical-implies operator \u003ccode\u003e==\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opImplies",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opImplies",
          "type": "function"
        },
        "index": {
          "description": "The logical-implies operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opImplies",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Implies",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opImplies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe logical-and operator \u003ccode\u003e&\u003c/code\u003e or \u003ccode\u003e&#8743;\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLAnd",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLAnd",
          "type": "function"
        },
        "index": {
          "description": "The logical-and operator or",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLAnd",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "LAnd",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe logical-equivalence operator \u003ccode\u003e\u003ca\u003e=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLEquiv",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLEquiv",
          "type": "function"
        },
        "index": {
          "description": "The logical-equivalence operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLEquiv",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "LEquiv",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLEquiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logical false, \u003ccode\u003eF\u003c/code\u003e or \u003ccode/\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLFalse",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLFalse",
          "type": "function"
        },
        "index": {
          "description": "logical false or",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLFalse",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "LFalse",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe logical not operator \u003ccode\u003enot\u003c/code\u003e or \u003ccode/\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLNot",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLNot",
          "type": "function"
        },
        "index": {
          "description": "The logical not operator not or",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLNot",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "LNot",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe logical-or operator \u003ccode\u003e|\u003c/code\u003e or \u003ccode\u003e&#8744;\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLOr",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLOr",
          "type": "function"
        },
        "index": {
          "description": "The logical-or operator or",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLOr",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "LOr",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logical false, \u003ccode\u003eT\u003c/code\u003e or \u003ccode/\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLTrue",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLTrue",
          "type": "function"
        },
        "index": {
          "description": "logical false or",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLTrue",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "LTrue",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe leftarrow operator \u003ccode\u003e\u003c--\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLeftarrow",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLeftarrow",
          "type": "function"
        },
        "index": {
          "description": "The leftarrow operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLeftarrow",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Leftarrow",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLeftarrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe timepoint comparison operator \u003ccode\u003e\u003c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLess",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLess",
          "type": "function"
        },
        "index": {
          "description": "The timepoint comparison operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLess",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Less",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe longleftarrow operator \u003ccode\u003e\u003c--\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLongleftarrow",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLongleftarrow",
          "type": "function"
        },
        "index": {
          "description": "The longleftarrow operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLongleftarrow",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Longleftarrow",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLongleftarrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe longrightarrow operator \u003ccode\u003e--\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opLongrightarrow",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opLongrightarrow",
          "type": "function"
        },
        "index": {
          "description": "The longrightarrow operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opLongrightarrow",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Longrightarrow",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opLongrightarrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minus operator \u003ccode\u003e-\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opMinus",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opMinus",
          "type": "function"
        },
        "index": {
          "description": "The minus operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opMinus",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Minus",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe multiplication operator \u003ccode\u003e*\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opMult",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opMult",
          "type": "function"
        },
        "index": {
          "description": "The multiplication operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opMult",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Mult",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opMult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe multiplication operator \u003ccode\u003e*\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opPlus",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opPlus",
          "type": "function"
        },
        "index": {
          "description": "The multiplication operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opPlus",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Plus",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe requires-a-premise operator, \u003ccode\u003e&#9654; subscript-id\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opRequires",
          "package": "tamarin-prover-theory",
          "signature": "Parser PremIdx",
          "source": "src/Theory-Text-Parser-Token.html#opRequires",
          "type": "function"
        },
        "index": {
          "description": "The requires-a-premise operator subscript-id",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opRequires",
          "package": "tamarin-prover-theory",
          "partial": "Requires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opRequires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rightarrow operator \u003ccode\u003e--\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opRightarrow",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opRightarrow",
          "type": "function"
        },
        "index": {
          "description": "The rightarrow operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opRightarrow",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Rightarrow",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opRightarrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sharp operator \u003ccode\u003e#\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opSharp",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opSharp",
          "type": "function"
        },
        "index": {
          "description": "The sharp operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opSharp",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Sharp",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opSharp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe slash operator \u003ccode\u003e/\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "opSlash",
          "package": "tamarin-prover-theory",
          "signature": "Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#opSlash",
          "type": "function"
        },
        "index": {
          "description": "The slash operator",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "opSlash",
          "normalized": "Parser()",
          "package": "tamarin-prover-theory",
          "partial": "Slash",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:opSlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBetween parentheses.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "parens",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Theory-Text-Parser-Token.html#parens",
          "type": "function"
        },
        "index": {
          "description": "Between parentheses",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "parens",
          "normalized": "Parser a-\u003eParser a",
          "package": "tamarin-prover-theory",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser on the contents of a file.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "parseFile",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e FilePath -\u003e IO a",
          "source": "src/Theory-Text-Parser-Token.html#parseFile",
          "type": "function"
        },
        "index": {
          "description": "Run parser on the contents of file",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "parseFile",
          "normalized": "Parser a-\u003eFilePath-\u003eIO a",
          "package": "tamarin-prover-theory",
          "partial": "File",
          "signature": "Parser a-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a given parser on a given string.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "parseString",
          "package": "tamarin-prover-theory",
          "signature": "FilePath-\u003e Parser a-\u003e String-\u003e Either ParseError a",
          "type": "function"
        },
        "index": {
          "description": "Run given parser on given string",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "parseString",
          "normalized": "FilePath-\u003eParser a-\u003eString-\u003eEither ParseError a",
          "package": "tamarin-prover-theory",
          "partial": "String",
          "signature": "FilePath-\u003eParser a-\u003eString-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a literal public name, e.g., \u003ccode\u003e\u003ccode\u003en\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "pubName",
          "package": "tamarin-prover-theory",
          "signature": "Parser String",
          "source": "src/Theory-Text-Parser-Token.html#pubName",
          "type": "function"
        },
        "index": {
          "description": "Parse literal public name e.g",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "pubName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:pubName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBetween single quotes.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "singleQuoted",
          "package": "tamarin-prover-theory",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Theory-Text-Parser-Token.html#singleQuoted",
          "type": "function"
        },
        "index": {
          "description": "Between single quotes",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "singleQuoted",
          "normalized": "Parser a-\u003eParser a",
          "package": "tamarin-prover-theory",
          "partial": "Quoted",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:singleQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a logical variable with the given sorts allowed.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "sortedLVar",
          "package": "tamarin-prover-theory",
          "signature": "[LSort] -\u003e Parser LVar",
          "source": "src/Theory-Text-Parser-Token.html#sortedLVar",
          "type": "function"
        },
        "index": {
          "description": "Parse logical variable with the given sorts allowed",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "sortedLVar",
          "normalized": "[LSort]-\u003eParser LVar",
          "package": "tamarin-prover-theory",
          "partial": "LVar",
          "signature": "[LSort]-\u003eParser LVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:sortedLVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a symbol.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "symbol",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e Parser String",
          "source": "src/Theory-Text-Parser-Token.html#symbol",
          "type": "function"
        },
        "index": {
          "description": "Parse symbol",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "symbol",
          "normalized": "String-\u003eParser String",
          "package": "tamarin-prover-theory",
          "signature": "String-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a symbol without returning the parsed string.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser.Token",
          "name": "symbol_",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e Parser ()",
          "source": "src/Theory-Text-Parser-Token.html#symbol_",
          "type": "function"
        },
        "index": {
          "description": "Parse symbol without returning the parsed string",
          "hierarchy": "Theory Text Parser Token",
          "module": "Theory.Text.Parser.Token",
          "name": "symbol_",
          "normalized": "String-\u003eParser()",
          "package": "tamarin-prover-theory",
          "signature": "String-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser-Token.html#v:symbol_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing protocol theories. See the MANUAL for a high-level description of\n the syntax.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Text.Parser",
          "name": "Parser",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Text-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing protocol theories See the MANUAL for high-level description of the syntax",
          "hierarchy": "Theory Text Parser",
          "module": "Theory.Text.Parser",
          "name": "Parser",
          "package": "tamarin-prover-theory",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse DH intruder rules.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser",
          "name": "parseIntruderRules",
          "package": "tamarin-prover-theory",
          "signature": "MaudeSig -\u003e FilePath -\u003e IO [IntrRuleAC]",
          "source": "src/Theory-Text-Parser.html#parseIntruderRules",
          "type": "function"
        },
        "index": {
          "description": "Parse DH intruder rules",
          "hierarchy": "Theory Text Parser",
          "module": "Theory.Text.Parser",
          "name": "parseIntruderRules",
          "normalized": "MaudeSig-\u003eFilePath-\u003eIO[IntrRuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Intruder Rules",
          "signature": "MaudeSig-\u003eFilePath-\u003eIO[IntrRuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#v:parseIntruderRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a lemma for an open theory from a string.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser",
          "name": "parseLemma",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e Either ParseError (Lemma ProofSkeleton)",
          "source": "src/Theory-Text-Parser.html#parseLemma",
          "type": "function"
        },
        "index": {
          "description": "Parse lemma for an open theory from string",
          "hierarchy": "Theory Text Parser",
          "module": "Theory.Text.Parser",
          "name": "parseLemma",
          "normalized": "String-\u003eEither ParseError(Lemma ProofSkeleton)",
          "package": "tamarin-prover-theory",
          "partial": "Lemma",
          "signature": "String-\u003eEither ParseError(Lemma ProofSkeleton)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#v:parseLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a security protocol theory file.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser",
          "name": "parseOpenTheory",
          "package": "tamarin-prover-theory",
          "signature": "[String]-\u003e FilePath-\u003e IO OpenTheory",
          "type": "function"
        },
        "index": {
          "description": "Parse security protocol theory file",
          "hierarchy": "Theory Text Parser",
          "module": "Theory.Text.Parser",
          "name": "parseOpenTheory",
          "normalized": "[String]-\u003eFilePath-\u003eIO OpenTheory",
          "package": "tamarin-prover-theory",
          "partial": "Open Theory",
          "signature": "[String]-\u003eFilePath-\u003eIO OpenTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#v:parseOpenTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a security protocol theory from a string.\n\u003c/p\u003e",
          "module": "Theory.Text.Parser",
          "name": "parseOpenTheoryString",
          "package": "tamarin-prover-theory",
          "signature": "[String]-\u003e String-\u003e Either ParseError OpenTheory",
          "type": "function"
        },
        "index": {
          "description": "Parse security protocol theory from string",
          "hierarchy": "Theory Text Parser",
          "module": "Theory.Text.Parser",
          "name": "parseOpenTheoryString",
          "normalized": "[String]-\u003eString-\u003eEither ParseError OpenTheory",
          "package": "tamarin-prover-theory",
          "partial": "Open Theory String",
          "signature": "[String]-\u003eString-\u003eEither ParseError OpenTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Parser.html#v:parseOpenTheoryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral support for pretty printing theories.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Text.Pretty",
          "name": "Pretty",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Text-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "General support for pretty printing theories",
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "Pretty",
          "package": "tamarin-prover-theory",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a list of values as a comma-separated list wrapped in\n paragraph mode.\n\u003c/p\u003e",
          "module": "Theory.Text.Pretty",
          "name": "fsepList",
          "package": "tamarin-prover-theory",
          "signature": "(a -\u003e d) -\u003e [a] -\u003e d",
          "source": "src/Theory-Text-Pretty.html#fsepList",
          "type": "function"
        },
        "index": {
          "description": "Pretty print list of values as comma-separated list wrapped in paragraph mode",
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "fsepList",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "List",
          "signature": "(a-\u003ed)-\u003e[a]-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:fsepList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwAxiom",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#kwAxiom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwAxiom",
          "package": "tamarin-prover-theory",
          "partial": "Axiom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwAxiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwBy",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#kwBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwBy",
          "package": "tamarin-prover-theory",
          "partial": "By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwCase",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#kwCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwCase",
          "package": "tamarin-prover-theory",
          "partial": "Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwEnd",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#kwEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwEnd",
          "package": "tamarin-prover-theory",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwInstanceModulo",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e d",
          "source": "src/Theory-Text-Pretty.html#kwInstanceModulo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwInstanceModulo",
          "normalized": "String-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Instance Modulo",
          "signature": "String-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwInstanceModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwLemma",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#kwLemma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwLemma",
          "package": "tamarin-prover-theory",
          "partial": "Lemma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwModulo",
          "package": "tamarin-prover-theory",
          "signature": "String-\u003e String-\u003e d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwModulo",
          "normalized": "String-\u003eString-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Modulo",
          "signature": "String-\u003eString-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwNext",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#kwNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwNext",
          "package": "tamarin-prover-theory",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwQED",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#kwQED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwQED",
          "package": "tamarin-prover-theory",
          "partial": "QED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwQED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwRuleModulo",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e d",
          "source": "src/Theory-Text-Pretty.html#kwRuleModulo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwRuleModulo",
          "normalized": "String-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Rule Modulo",
          "signature": "String-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwRuleModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwTheoryHeader",
          "package": "tamarin-prover-theory",
          "signature": "d -\u003e d",
          "source": "src/Theory-Text-Pretty.html#kwTheoryHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwTheoryHeader",
          "normalized": "a-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Theory Header",
          "signature": "d-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwTheoryHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwTypesModulo",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e d",
          "source": "src/Theory-Text-Pretty.html#kwTypesModulo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwTypesModulo",
          "normalized": "String-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Types Modulo",
          "signature": "String-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwTypesModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "kwVariantsModulo",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e d",
          "source": "src/Theory-Text-Pretty.html#kwVariantsModulo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "kwVariantsModulo",
          "normalized": "String-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Variants Modulo",
          "signature": "String-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:kwVariantsModulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "lineComment",
          "package": "tamarin-prover-theory",
          "signature": "d -\u003e d",
          "source": "src/Theory-Text-Pretty.html#lineComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "lineComment",
          "normalized": "a-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Comment",
          "signature": "d-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:lineComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "lineComment_",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e d",
          "source": "src/Theory-Text-Pretty.html#lineComment_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "lineComment_",
          "normalized": "String-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Comment",
          "signature": "String-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:lineComment_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "multiComment",
          "package": "tamarin-prover-theory",
          "signature": "d -\u003e d",
          "source": "src/Theory-Text-Pretty.html#multiComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "multiComment",
          "normalized": "a-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Comment",
          "signature": "d-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:multiComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "multiComment_",
          "package": "tamarin-prover-theory",
          "signature": "[String] -\u003e d",
          "source": "src/Theory-Text-Pretty.html#multiComment_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "multiComment_",
          "normalized": "[String]-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Comment",
          "signature": "[String]-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:multiComment_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opAction",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opAction",
          "package": "tamarin-prover-theory",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opDedBefore",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opDedBefore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opDedBefore",
          "package": "tamarin-prover-theory",
          "partial": "Ded Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opDedBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opDot",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opDot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opDot",
          "package": "tamarin-prover-theory",
          "partial": "Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opEdge",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opEdge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opEdge",
          "package": "tamarin-prover-theory",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opEqual",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opEqual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opEqual",
          "package": "tamarin-prover-theory",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opExists",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opExists",
          "package": "tamarin-prover-theory",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opForall",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opForall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opForall",
          "package": "tamarin-prover-theory",
          "partial": "Forall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opIff",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opIff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opIff",
          "package": "tamarin-prover-theory",
          "partial": "Iff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opIff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opImp",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opImp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opImp",
          "package": "tamarin-prover-theory",
          "partial": "Imp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opImp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opLAnd",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opLAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opLAnd",
          "package": "tamarin-prover-theory",
          "partial": "LAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opLAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opLOr",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opLOr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opLOr",
          "package": "tamarin-prover-theory",
          "partial": "LOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opLOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opLess",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opLess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opLess",
          "package": "tamarin-prover-theory",
          "partial": "Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opPath",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opPath",
          "package": "tamarin-prover-theory",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opProvides",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opProvides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opProvides",
          "package": "tamarin-prover-theory",
          "partial": "Provides",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opProvides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Text.Pretty",
          "name": "opRequires",
          "package": "tamarin-prover-theory",
          "signature": "d",
          "source": "src/Theory-Text-Pretty.html#opRequires",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "opRequires",
          "package": "tamarin-prover-theory",
          "partial": "Requires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:opRequires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertically separate a list of documents by empty lines.\n\u003c/p\u003e",
          "module": "Theory.Text.Pretty",
          "name": "vsep",
          "package": "tamarin-prover-theory",
          "signature": "[d] -\u003e d",
          "source": "src/Theory-Text-Pretty.html#vsep",
          "type": "function"
        },
        "index": {
          "description": "Vertically separate list of documents by empty lines",
          "hierarchy": "Theory Text Pretty",
          "module": "Theory.Text.Pretty",
          "name": "vsep",
          "normalized": "[a]-\u003ea",
          "package": "tamarin-prover-theory",
          "signature": "[d]-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Text-Pretty.html#v:vsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract intepretation for partial evaluation of multiset rewriting\n systems.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "AbstractInterpretation",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-AbstractInterpretation.html",
          "type": "module"
        },
        "index": {
          "description": "Abstract intepretation for partial evaluation of multiset rewriting systems",
          "hierarchy": "Theory Tools AbstractInterpretation",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "AbstractInterpretation",
          "package": "tamarin-prover-theory",
          "partial": "Abstract Interpretation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to report on performing a partial evaluation.\n\u003c/p\u003e",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "EvaluationStyle",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-AbstractInterpretation.html#EvaluationStyle",
          "type": "data"
        },
        "index": {
          "description": "How to report on performing partial evaluation",
          "hierarchy": "Theory Tools AbstractInterpretation",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "EvaluationStyle",
          "package": "tamarin-prover-theory",
          "partial": "Evaluation Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#t:EvaluationStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "Silent",
          "package": "tamarin-prover-theory",
          "signature": "Silent",
          "source": "src/Theory-Tools-AbstractInterpretation.html#EvaluationStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools AbstractInterpretation",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "Silent",
          "package": "tamarin-prover-theory",
          "partial": "Silent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:Silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "Summary",
          "package": "tamarin-prover-theory",
          "signature": "Summary",
          "source": "src/Theory-Tools-AbstractInterpretation.html#EvaluationStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools AbstractInterpretation",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "Summary",
          "package": "tamarin-prover-theory",
          "partial": "Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "Tracing",
          "package": "tamarin-prover-theory",
          "signature": "Tracing",
          "source": "src/Theory-Tools-AbstractInterpretation.html#EvaluationStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools AbstractInterpretation",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "Tracing",
          "package": "tamarin-prover-theory",
          "partial": "Tracing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:Tracing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigher-order combinator to construct abstract interpreters.\n\u003c/p\u003e",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "interpretAbstractly",
          "package": "tamarin-prover-theory",
          "signature": "([Equal LNFact] -\u003e [LNSubstVFresh])-\u003e s-\u003e (LNFact -\u003e s -\u003e s)-\u003e (s -\u003e [LNFact])-\u003e [Rule i]-\u003e [(s, [Rule i])]",
          "type": "function"
        },
        "index": {
          "description": "Higher-order combinator to construct abstract interpreters",
          "hierarchy": "Theory Tools AbstractInterpretation",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "interpretAbstractly",
          "normalized": "([Equal LNFact]-\u003e[LNSubstVFresh])-\u003ea-\u003e(LNFact-\u003ea-\u003ea)-\u003e(a-\u003e[LNFact])-\u003e[Rule b]-\u003e[(a,[Rule b])]",
          "package": "tamarin-prover-theory",
          "partial": "Abstractly",
          "signature": "([Equal LNFact]-\u003e[LNSubstVFresh])-\u003es-\u003e(LNFact-\u003es-\u003es)-\u003e(s-\u003e[LNFact])-\u003e[Rule i]-\u003e[(s,[Rule i])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:interpretAbstractly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete partial evaluator activated with flag: --partial-evaluation\n\u003c/p\u003e",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "partialEvaluation",
          "package": "tamarin-prover-theory",
          "signature": "EvaluationStyle -\u003e [ProtoRuleE] -\u003e WithMaude (Set LNFact, [ProtoRuleE])",
          "source": "src/Theory-Tools-AbstractInterpretation.html#partialEvaluation",
          "type": "function"
        },
        "index": {
          "description": "Concrete partial evaluator activated with flag partial-evaluation",
          "hierarchy": "Theory Tools AbstractInterpretation",
          "module": "Theory.Tools.AbstractInterpretation",
          "name": "partialEvaluation",
          "normalized": "EvaluationStyle-\u003e[ProtoRuleE]-\u003eWithMaude(Set LNFact,[ProtoRuleE])",
          "package": "tamarin-prover-theory",
          "partial": "Evaluation",
          "signature": "EvaluationStyle-\u003e[ProtoRuleE]-\u003eWithMaude(Set LNFact,[ProtoRuleE])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-AbstractInterpretation.html#v:partialEvaluation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for reasoning with and about disjunctions of substitutions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "EquationStore",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-EquationStore.html",
          "type": "module"
        },
        "index": {
          "description": "Support for reasoning with and about disjunctions of substitutions",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "EquationStore",
          "package": "tamarin-prover-theory",
          "partial": "Equation Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "EqStore",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-EquationStore.html#EqStore",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "EqStore",
          "package": "tamarin-prover-theory",
          "partial": "Eq Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#t:EqStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex of disjunction in equation store\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "SplitId",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-EquationStore.html#SplitId",
          "type": "newtype"
        },
        "index": {
          "description": "Index of disjunction in equation store",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "SplitId",
          "package": "tamarin-prover-theory",
          "partial": "Split Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#t:SplitId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "EqStore",
          "package": "tamarin-prover-theory",
          "signature": "EqStore",
          "source": "src/Theory-Tools-EquationStore.html#EqStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "EqStore",
          "package": "tamarin-prover-theory",
          "partial": "Eq Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:EqStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "SplitId",
          "package": "tamarin-prover-theory",
          "signature": "SplitId",
          "source": "src/Theory-Tools-EquationStore.html#SplitId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "SplitId",
          "package": "tamarin-prover-theory",
          "partial": "Split Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:SplitId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "_eqsConj",
          "package": "tamarin-prover-theory",
          "signature": "Conj (SplitId, Set LNSubstVFresh)",
          "source": "src/Theory-Tools-EquationStore.html#EqStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "_eqsConj",
          "normalized": "Conj(SplitId,Set LNSubstVFresh)",
          "package": "tamarin-prover-theory",
          "partial": "Conj",
          "signature": "Conj(SplitId,Set LNSubstVFresh)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:_eqsConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "_eqsNextSplitId",
          "package": "tamarin-prover-theory",
          "signature": "SplitId",
          "source": "src/Theory-Tools-EquationStore.html#EqStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "_eqsNextSplitId",
          "package": "tamarin-prover-theory",
          "partial": "Next Split Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:_eqsNextSplitId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "_eqsSubst",
          "package": "tamarin-prover-theory",
          "signature": "LNSubst",
          "source": "src/Theory-Tools-EquationStore.html#EqStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "_eqsSubst",
          "package": "tamarin-prover-theory",
          "partial": "Subst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:_eqsSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a disjunction to the equation store at the beginning\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "addDisj",
          "package": "tamarin-prover-theory",
          "signature": "EqStore -\u003e Set LNSubstVFresh -\u003e (EqStore, SplitId)",
          "source": "src/Theory-Tools-EquationStore.html#addDisj",
          "type": "function"
        },
        "index": {
          "description": "Add disjunction to the equation store at the beginning",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "addDisj",
          "normalized": "EqStore-\u003eSet LNSubstVFresh-\u003e(EqStore,SplitId)",
          "package": "tamarin-prover-theory",
          "partial": "Disj",
          "signature": "EqStore-\u003eSet LNSubstVFresh-\u003e(EqStore,SplitId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:addDisj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a list of term equalities to the equation store. Returns the split\n identifier of the disjunction in resulting equation store.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "addEqs",
          "package": "tamarin-prover-theory",
          "signature": "MaudeHandle -\u003e [Equal LNTerm] -\u003e EqStore -\u003e m (EqStore, Maybe SplitId)",
          "source": "src/Theory-Tools-EquationStore.html#addEqs",
          "type": "function"
        },
        "index": {
          "description": "Add list of term equalities to the equation store Returns the split identifier of the disjunction in resulting equation store",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "addEqs",
          "normalized": "MaudeHandle-\u003e[Equal LNTerm]-\u003eEqStore-\u003ea(EqStore,Maybe SplitId)",
          "package": "tamarin-prover-theory",
          "partial": "Eqs",
          "signature": "MaudeHandle-\u003e[Equal LNTerm]-\u003eEqStore-\u003em(EqStore,Maybe SplitId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:addEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the given rule variants.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "addRuleVariants",
          "package": "tamarin-prover-theory",
          "signature": "Disj LNSubstVFresh -\u003e EqStore -\u003e (EqStore, SplitId)",
          "source": "src/Theory-Tools-EquationStore.html#addRuleVariants",
          "type": "function"
        },
        "index": {
          "description": "Add the given rule variants",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "addRuleVariants",
          "normalized": "Disj LNSubstVFresh-\u003eEqStore-\u003e(EqStore,SplitId)",
          "package": "tamarin-prover-theory",
          "partial": "Rule Variants",
          "signature": "Disj LNSubstVFresh-\u003eEqStore-\u003e(EqStore,SplitId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:addRuleVariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "dropNameHintsBound",
          "package": "tamarin-prover-theory",
          "signature": "EqStore -\u003e EqStore",
          "source": "src/Theory-Tools-EquationStore.html#dropNameHintsBound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "dropNameHintsBound",
          "normalized": "EqStore-\u003eEqStore",
          "package": "tamarin-prover-theory",
          "partial": "Name Hints Bound",
          "signature": "EqStore-\u003eEqStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:dropNameHintsBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eemptyEqStore\u003c/code\u003e is the empty equation store.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "emptyEqStore",
          "package": "tamarin-prover-theory",
          "signature": "EqStore",
          "source": "src/Theory-Tools-EquationStore.html#emptyEqStore",
          "type": "function"
        },
        "index": {
          "description": "emptyEqStore is the empty equation store",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "emptyEqStore",
          "package": "tamarin-prover-theory",
          "partial": "Eq Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:emptyEqStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "eqsConj",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr EqStore (Conj (SplitId, Set LNSubstVFresh))",
          "source": "src/Theory-Tools-EquationStore.html#eqsConj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "eqsConj",
          "normalized": "Lens a EqStore(Conj(SplitId,Set LNSubstVFresh))",
          "package": "tamarin-prover-theory",
          "partial": "Conj",
          "signature": "Lens arr EqStore(Conj(SplitId,Set LNSubstVFresh))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:eqsConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003eEqStore\u003c/a\u003e\u003c/code\u003e is contradictory.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "eqsIsFalse",
          "package": "tamarin-prover-theory",
          "signature": "EqStore -\u003e Bool",
          "source": "src/Theory-Tools-EquationStore.html#eqsIsFalse",
          "type": "function"
        },
        "index": {
          "description": "True iff the EqStore is contradictory",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "eqsIsFalse",
          "normalized": "EqStore-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Is False",
          "signature": "EqStore-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:eqsIsFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "eqsSubst",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr EqStore LNSubst",
          "source": "src/Theory-Tools-EquationStore.html#eqsSubst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "eqsSubst",
          "package": "tamarin-prover-theory",
          "partial": "Subst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:eqsSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe false conjunction. It is always identified with split number -1.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "falseEqConstrConj",
          "package": "tamarin-prover-theory",
          "signature": "Conj (SplitId, Set LNSubstVFresh)",
          "source": "src/Theory-Tools-EquationStore.html#falseEqConstrConj",
          "type": "function"
        },
        "index": {
          "description": "The false conjunction It is always identified with split number",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "falseEqConstrConj",
          "normalized": "Conj(SplitId,Set LNSubstVFresh)",
          "package": "tamarin-prover-theory",
          "partial": "Eq Constr Conj",
          "signature": "Conj(SplitId,Set LNSubstVFresh)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:falseEqConstrConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eperformSplit eqs i\u003c/code\u003e performs a case-split on the first disjunction\n with the given \u003ccode\u003e\u003ca\u003eSplitId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "performSplit",
          "package": "tamarin-prover-theory",
          "signature": "EqStore -\u003e SplitId -\u003e Maybe [EqStore]",
          "source": "src/Theory-Tools-EquationStore.html#performSplit",
          "type": "function"
        },
        "index": {
          "description": "performSplit eqs performs case-split on the first disjunction with the given SplitId",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "performSplit",
          "normalized": "EqStore-\u003eSplitId-\u003eMaybe[EqStore]",
          "package": "tamarin-prover-theory",
          "partial": "Split",
          "signature": "EqStore-\u003eSplitId-\u003eMaybe[EqStore]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:performSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print an \u003ccode\u003e\u003ca\u003eEqStore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "prettyEqStore",
          "package": "tamarin-prover-theory",
          "signature": "EqStore -\u003e d",
          "source": "src/Theory-Tools-EquationStore.html#prettyEqStore",
          "type": "function"
        },
        "index": {
          "description": "Pretty print an EqStore",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "prettyEqStore",
          "normalized": "EqStore-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Eq Store",
          "signature": "EqStore-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:prettyEqStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esimp eqStore\u003c/code\u003e simplifies the equation store.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "simp",
          "package": "tamarin-prover-theory",
          "signature": "MaudeHandle -\u003e (LNSubst -\u003e LNSubstVFresh -\u003e Bool) -\u003e EqStore -\u003e m EqStore",
          "source": "src/Theory-Tools-EquationStore.html#simp",
          "type": "function"
        },
        "index": {
          "description": "simp eqStore simplifies the equation store",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "simp",
          "normalized": "MaudeHandle-\u003e(LNSubst-\u003eLNSubstVFresh-\u003eBool)-\u003eEqStore-\u003ea EqStore",
          "package": "tamarin-prover-theory",
          "signature": "MaudeHandle-\u003e(LNSubst-\u003eLNSubstVFresh-\u003eBool)-\u003eEqStore-\u003em EqStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:simp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify given disjunction via EqStore simplification. Obtains fresh\n   names for variables from the underlying \u003ccode\u003e\u003ca\u003eMonadFresh\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "simpDisjunction",
          "package": "tamarin-prover-theory",
          "signature": "MaudeHandle -\u003e (LNSubst -\u003e LNSubstVFresh -\u003e Bool) -\u003e Disj LNSubstVFresh -\u003e m (LNSubst, Maybe [LNSubstVFresh])",
          "source": "src/Theory-Tools-EquationStore.html#simpDisjunction",
          "type": "function"
        },
        "index": {
          "description": "Simplify given disjunction via EqStore simplification Obtains fresh names for variables from the underlying MonadFresh",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "simpDisjunction",
          "normalized": "MaudeHandle-\u003e(LNSubst-\u003eLNSubstVFresh-\u003eBool)-\u003eDisj LNSubstVFresh-\u003ea(LNSubst,Maybe[LNSubstVFresh])",
          "package": "tamarin-prover-theory",
          "partial": "Disjunction",
          "signature": "MaudeHandle-\u003e(LNSubst-\u003eLNSubstVFresh-\u003eBool)-\u003eDisj LNSubstVFresh-\u003em(LNSubst,Maybe[LNSubstVFresh])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:simpDisjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eSplitId\u003c/a\u003e\u003c/code\u003e is valid.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "splitExists",
          "package": "tamarin-prover-theory",
          "signature": "EqStore -\u003e SplitId -\u003e Bool",
          "source": "src/Theory-Tools-EquationStore.html#splitExists",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the SplitId is valid",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "splitExists",
          "normalized": "EqStore-\u003eSplitId-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "Exists",
          "signature": "EqStore-\u003eSplitId-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:splitExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of cases for a given \u003ccode\u003e\u003ca\u003eSplitId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "splitSize",
          "package": "tamarin-prover-theory",
          "signature": "EqStore -\u003e SplitId -\u003e Maybe Int",
          "source": "src/Theory-Tools-EquationStore.html#splitSize",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of cases for given SplitId",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "splitSize",
          "normalized": "EqStore-\u003eSplitId-\u003eMaybe Int",
          "package": "tamarin-prover-theory",
          "partial": "Size",
          "signature": "EqStore-\u003eSplitId-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:splitSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of all \u003ccode\u003eSplitId\u003c/code\u003es valid for the given equation store\n sorted by the size of the disjunctions.\n\u003c/p\u003e",
          "module": "Theory.Tools.EquationStore",
          "name": "splits",
          "package": "tamarin-prover-theory",
          "signature": "EqStore -\u003e [SplitId]",
          "source": "src/Theory-Tools-EquationStore.html#splits",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of all SplitId valid for the given equation store sorted by the size of the disjunctions",
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "splits",
          "normalized": "EqStore-\u003e[SplitId]",
          "package": "tamarin-prover-theory",
          "signature": "EqStore-\u003e[SplitId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:splits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.EquationStore",
          "name": "unSplitId",
          "package": "tamarin-prover-theory",
          "signature": "Integer",
          "source": "src/Theory-Tools-EquationStore.html#SplitId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools EquationStore",
          "module": "Theory.Tools.EquationStore",
          "name": "unSplitId",
          "package": "tamarin-prover-theory",
          "partial": "Split Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-EquationStore.html#v:unSplitId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputate an under-approximation to the set of all facts with unique\n instances, i.e., fact whose instances never occur more than once in a\n state. We use this information to reason about protocols that exploit\n exclusivity of linear facts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Tools.InjectiveFactInstances",
          "name": "InjectiveFactInstances",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-InjectiveFactInstances.html",
          "type": "module"
        },
        "index": {
          "description": "Computate an under-approximation to the set of all facts with unique instances i.e fact whose instances never occur more than once in state We use this information to reason about protocols that exploit exclusivity of linear facts",
          "hierarchy": "Theory Tools InjectiveFactInstances",
          "module": "Theory.Tools.InjectiveFactInstances",
          "name": "InjectiveFactInstances",
          "package": "tamarin-prover-theory",
          "partial": "Injective Fact Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-InjectiveFactInstances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a simple under-approximation to the set of facts with injective\n instances. A fact-tag is has injective instances, if there is no state of\n the protocol with more than one instance with the same term as a first\n argument of the fact-tag.\n\u003c/p\u003e\u003cp\u003eWe compute the under-approximation by checking that\n (1) the fact-tag is linear,\n (2) every introduction of such a fact-tag is protected by a Fr-fact of the\n     first term, and\n (3) every rule has at most one copy of this fact-tag in the conlcusion and\n     the first term arguments agree.\n\u003c/p\u003e\u003cp\u003eWe exclude facts that are not copied in a rule, as they are already handled\n properly by the naive backwards reasoning.\n\u003c/p\u003e",
          "module": "Theory.Tools.InjectiveFactInstances",
          "name": "simpleInjectiveFactInstances",
          "package": "tamarin-prover-theory",
          "signature": "[ProtoRuleE] -\u003e Set FactTag",
          "source": "src/Theory-Tools-InjectiveFactInstances.html#simpleInjectiveFactInstances",
          "type": "function"
        },
        "index": {
          "description": "Compute simple under-approximation to the set of facts with injective instances fact-tag is has injective instances if there is no state of the protocol with more than one instance with the same term as first argument of the fact-tag We compute the under-approximation by checking that the fact-tag is linear every introduction of such fact-tag is protected by Fr-fact of the first term and every rule has at most one copy of this fact-tag in the conlcusion and the first term arguments agree We exclude facts that are not copied in rule as they are already handled properly by the naive backwards reasoning",
          "hierarchy": "Theory Tools InjectiveFactInstances",
          "module": "Theory.Tools.InjectiveFactInstances",
          "name": "simpleInjectiveFactInstances",
          "normalized": "[ProtoRuleE]-\u003eSet FactTag",
          "package": "tamarin-prover-theory",
          "partial": "Injective Fact Instances",
          "signature": "[ProtoRuleE]-\u003eSet FactTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-InjectiveFactInstances.html#v:simpleInjectiveFactInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.IntruderRules",
          "name": "IntruderRules",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-IntruderRules.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "IntruderRules",
          "package": "tamarin-prover-theory",
          "partial": "Intruder Rules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.IntruderRules",
          "name": "bpIntruderRules",
          "package": "tamarin-prover-theory",
          "signature": "WithMaude [IntrRuleAC]",
          "source": "src/Theory-Tools-IntruderRules.html#bpIntruderRules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "bpIntruderRules",
          "normalized": "WithMaude[IntrRuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Intruder Rules",
          "signature": "WithMaude[IntrRuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:bpIntruderRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edhIntruderRules\u003c/code\u003e computes the intruder rules for DH\n\u003c/p\u003e",
          "module": "Theory.Tools.IntruderRules",
          "name": "dhIntruderRules",
          "package": "tamarin-prover-theory",
          "signature": "WithMaude [IntrRuleAC]",
          "source": "src/Theory-Tools-IntruderRules.html#dhIntruderRules",
          "type": "function"
        },
        "index": {
          "description": "dhIntruderRules computes the intruder rules for DH",
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "dhIntruderRules",
          "normalized": "WithMaude[IntrRuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Intruder Rules",
          "signature": "WithMaude[IntrRuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:dhIntruderRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.IntruderRules",
          "name": "isDEMapRule",
          "package": "tamarin-prover-theory",
          "signature": "Rule (RuleInfo t IntrRuleACInfo) -\u003e Bool",
          "source": "src/Theory-Tools-IntruderRules.html#isDEMapRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "isDEMapRule",
          "normalized": "Rule(RuleInfo a IntrRuleACInfo)-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "DEMap Rule",
          "signature": "Rule(RuleInfo t IntrRuleACInfo)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:isDEMapRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.IntruderRules",
          "name": "isDExpRule",
          "package": "tamarin-prover-theory",
          "signature": "Rule (RuleInfo t IntrRuleACInfo) -\u003e Bool",
          "source": "src/Theory-Tools-IntruderRules.html#isDExpRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "isDExpRule",
          "normalized": "Rule(RuleInfo a IntrRuleACInfo)-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "DExp Rule",
          "signature": "Rule(RuleInfo t IntrRuleACInfo)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:isDExpRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.IntruderRules",
          "name": "isDPMultRule",
          "package": "tamarin-prover-theory",
          "signature": "Rule (RuleInfo t IntrRuleACInfo) -\u003e Bool",
          "source": "src/Theory-Tools-IntruderRules.html#isDPMultRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "isDPMultRule",
          "normalized": "Rule(RuleInfo a IntrRuleACInfo)-\u003eBool",
          "package": "tamarin-prover-theory",
          "partial": "DPMult Rule",
          "signature": "Rule(RuleInfo t IntrRuleACInfo)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:isDPMultRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.IntruderRules",
          "name": "mkDUnionRule",
          "package": "tamarin-prover-theory",
          "signature": "[LNTerm] -\u003e LNTerm -\u003e IntrRuleAC",
          "source": "src/Theory-Tools-IntruderRules.html#mkDUnionRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "mkDUnionRule",
          "normalized": "[LNTerm]-\u003eLNTerm-\u003eIntrRuleAC",
          "package": "tamarin-prover-theory",
          "partial": "DUnion Rule",
          "signature": "[LNTerm]-\u003eLNTerm-\u003eIntrRuleAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:mkDUnionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.IntruderRules",
          "name": "multisetIntruderRules",
          "package": "tamarin-prover-theory",
          "signature": "[IntrRuleAC]",
          "source": "src/Theory-Tools-IntruderRules.html#multisetIntruderRules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "multisetIntruderRules",
          "normalized": "[IntrRuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Intruder Rules",
          "signature": "[IntrRuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:multisetIntruderRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003especialIntruderRules\u003c/code\u003e returns the special intruder rules that are\n   included independently of the message theory\n\u003c/p\u003e",
          "module": "Theory.Tools.IntruderRules",
          "name": "specialIntruderRules",
          "package": "tamarin-prover-theory",
          "signature": "[IntrRuleAC]",
          "source": "src/Theory-Tools-IntruderRules.html#specialIntruderRules",
          "type": "function"
        },
        "index": {
          "description": "specialIntruderRules returns the special intruder rules that are included independently of the message theory",
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "specialIntruderRules",
          "normalized": "[IntrRuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Intruder Rules",
          "signature": "[IntrRuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:specialIntruderRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubtermIntruderRules maudeSig\u003c/code\u003e returns the set of intruder rules for\n   the subterm (not Xor, DH, and MSet) part of the given signature.\n\u003c/p\u003e",
          "module": "Theory.Tools.IntruderRules",
          "name": "subtermIntruderRules",
          "package": "tamarin-prover-theory",
          "signature": "MaudeSig -\u003e [IntrRuleAC]",
          "source": "src/Theory-Tools-IntruderRules.html#subtermIntruderRules",
          "type": "function"
        },
        "index": {
          "description": "subtermIntruderRules maudeSig returns the set of intruder rules for the subterm not Xor DH and MSet part of the given signature",
          "hierarchy": "Theory Tools IntruderRules",
          "module": "Theory.Tools.IntruderRules",
          "name": "subtermIntruderRules",
          "normalized": "MaudeSig-\u003e[IntrRuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Intruder Rules",
          "signature": "MaudeSig-\u003e[IntrRuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-IntruderRules.html#v:subtermIntruderRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputate the loop-breakers in the premise-conclusion graph of a set of\n multiset rewriting rules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Tools.LoopBreakers",
          "name": "LoopBreakers",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-LoopBreakers.html",
          "type": "module"
        },
        "index": {
          "description": "Computate the loop-breakers in the premise-conclusion graph of set of multiset rewriting rules",
          "hierarchy": "Theory Tools LoopBreakers",
          "module": "Theory.Tools.LoopBreakers",
          "name": "LoopBreakers",
          "package": "tamarin-prover-theory",
          "partial": "Loop Breakers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-LoopBreakers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all loop-breaker information with loop-breakers computed\n automatically from the dataflow relation \u003ccode\u003edataflowRelAC\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory.Tools.LoopBreakers",
          "name": "useAutoLoopBreakersAC",
          "package": "tamarin-prover-theory",
          "signature": "(a -\u003e [(PremIdx, LNFact)])-\u003e (a -\u003e [(ConcIdx, LNFact)])-\u003e (a -\u003e [LNSubstVFresh])-\u003e ([PremIdx] -\u003e a -\u003e a)-\u003e [a]-\u003e WithMaude ([a], Relation (a, PremIdx), [(a, PremIdx)])",
          "type": "function"
        },
        "index": {
          "description": "Replace all loop-breaker information with loop-breakers computed automatically from the dataflow relation dataflowRelAC",
          "hierarchy": "Theory Tools LoopBreakers",
          "module": "Theory.Tools.LoopBreakers",
          "name": "useAutoLoopBreakersAC",
          "normalized": "(a-\u003e[(PremIdx,LNFact)])-\u003e(a-\u003e[(ConcIdx,LNFact)])-\u003e(a-\u003e[LNSubstVFresh])-\u003e([PremIdx]-\u003ea-\u003ea)-\u003e[a]-\u003eWithMaude([a],Relation(a,PremIdx),[(a,PremIdx)])",
          "package": "tamarin-prover-theory",
          "partial": "Auto Loop Breakers AC",
          "signature": "(a-\u003e[(PremIdx,LNFact)])-\u003e(a-\u003e[(ConcIdx,LNFact)])-\u003e(a-\u003e[LNSubstVFresh])-\u003e([PremIdx]-\u003ea-\u003ea)-\u003e[a]-\u003eWithMaude([a],Relation(a,PremIdx),[(a,PremIdx)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-LoopBreakers.html#v:useAutoLoopBreakersAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariants of protocol rules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory.Tools.RuleVariants",
          "name": "RuleVariants",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-RuleVariants.html",
          "type": "module"
        },
        "index": {
          "description": "Variants of protocol rules",
          "hierarchy": "Theory Tools RuleVariants",
          "module": "Theory.Tools.RuleVariants",
          "name": "RuleVariants",
          "package": "tamarin-prover-theory",
          "partial": "Rule Variants",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-RuleVariants.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.RuleVariants",
          "name": "computeVariantsCached",
          "package": "tamarin-prover-theory",
          "signature": "LNTerm -\u003e MaudeHandle -\u003e [LNSubstVFresh]",
          "source": "src/Theory-Tools-RuleVariants.html#computeVariantsCached",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools RuleVariants",
          "module": "Theory.Tools.RuleVariants",
          "name": "computeVariantsCached",
          "normalized": "LNTerm-\u003eMaudeHandle-\u003e[LNSubstVFresh]",
          "package": "tamarin-prover-theory",
          "partial": "Variants Cached",
          "signature": "LNTerm-\u003eMaudeHandle-\u003e[LNSubstVFresh]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-RuleVariants.html#v:computeVariantsCached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.RuleVariants",
          "name": "tmpdir",
          "package": "tamarin-prover-theory",
          "signature": "FilePath",
          "source": "src/Theory-Tools-RuleVariants.html#tmpdir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools RuleVariants",
          "module": "Theory.Tools.RuleVariants",
          "name": "tmpdir",
          "package": "tamarin-prover-theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-RuleVariants.html#v:tmpdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the variants of a protocol rule.\n   1. Abstract away terms in facts with variables.\n   2. Compute variants of RHSs of equations.\n   3. Apply variant substitutions to equations\n      to obtain DNF of equations.\n   4. Simplify rule.\n\u003c/p\u003e",
          "module": "Theory.Tools.RuleVariants",
          "name": "variantsProtoRule",
          "package": "tamarin-prover-theory",
          "signature": "MaudeHandle -\u003e ProtoRuleE -\u003e ProtoRuleAC",
          "source": "src/Theory-Tools-RuleVariants.html#variantsProtoRule",
          "type": "function"
        },
        "index": {
          "description": "Compute the variants of protocol rule Abstract away terms in facts with variables Compute variants of RHSs of equations Apply variant substitutions to equations to obtain DNF of equations Simplify rule",
          "hierarchy": "Theory Tools RuleVariants",
          "module": "Theory.Tools.RuleVariants",
          "name": "variantsProtoRule",
          "normalized": "MaudeHandle-\u003eProtoRuleE-\u003eProtoRuleAC",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule",
          "signature": "MaudeHandle-\u003eProtoRuleE-\u003eProtoRuleAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-RuleVariants.html#v:variantsProtoRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWellformedness checks for intruder variants, protocol rules, and\n properties.\n\u003c/p\u003e\u003cp\u003eThe following checks are/should be performed\n (FIXME: compare the list below to what is really implemented.)\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eprotocol rules\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003col\u003e\u003cli\u003e no fresh names in rule. (protocol cond. 1)\n     ==\u003e freshNamesReport\n\u003c/li\u003e\u003cli\u003e no Out or K facts in premises. (protocol cond. 2)\n     ==\u003e factReports\n\u003c/li\u003e\u003cli\u003e no Fr, In, or K facts in conclusions. (protocol cond. 3)\n     ==\u003e factReports\n\u003c/li\u003e\u003cli\u003e vars(rhs) subset of vars(lhs) u V_Pub\n     ==\u003e multRestrictedReport\n\u003c/li\u003e\u003cli\u003e lhs does not contain reducible function symbols (*-restricted (a))\n     ==\u003e multRestrictedReport\n\u003c/li\u003e\u003cli\u003e rhs does not contain * (*-restricted (b))\n     ==\u003e multRestrictedReport\n\u003c/li\u003e\u003cli\u003e all facts are used with the same arity.\n\u003c/li\u003e\u003cli\u003e fr, in, and out, facts are used with arity 1.\n\u003c/li\u003e\u003cli\u003e fr facts are used with a variable of sort msg or sort fresh\n\u003c/li\u003e\u003cli\u003e fresh facts of the same rule contain different variables. [TODO]\n\u003c/li\u003e\u003cli\u003e no protocol fact uses a reserved name =\u003e\n        [TODO] change parser to ensure this and pretty printer to show this.\n\u003c/li\u003e\u003c/ol\u003e\u003cdl\u003e\u003cdt\u003esecurity properties\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003col\u003e\u003cli\u003e all facts occur with the same arity in the action of some\n        protocol rule.\n\u003c/li\u003e\u003cli\u003e no node variable is used in a message position and vice versa.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Theory.Tools.Wellformedness",
          "name": "Wellformedness",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-Wellformedness.html",
          "type": "module"
        },
        "index": {
          "description": "Wellformedness checks for intruder variants protocol rules and properties The following checks are should be performed FIXME compare the list below to what is really implemented protocol rules no fresh names in rule protocol cond freshNamesReport no Out or facts in premises protocol cond factReports no Fr In or facts in conclusions protocol cond factReports vars rhs subset of vars lhs Pub multRestrictedReport lhs does not contain reducible function symbols restricted multRestrictedReport rhs does not contain restricted multRestrictedReport all facts are used with the same arity fr in and out facts are used with arity fr facts are used with variable of sort msg or sort fresh fresh facts of the same rule contain different variables TODO no protocol fact uses reserved name TODO change parser to ensure this and pretty printer to show this security properties all facts occur with the same arity in the action of some protocol rule no node variable is used in message position and vice versa",
          "hierarchy": "Theory Tools Wellformedness",
          "module": "Theory.Tools.Wellformedness",
          "name": "Wellformedness",
          "package": "tamarin-prover-theory",
          "partial": "Wellformedness",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.Wellformedness",
          "name": "WfErrorReport",
          "package": "tamarin-prover-theory",
          "source": "src/Theory-Tools-Wellformedness.html#WfErrorReport",
          "type": "type"
        },
        "index": {
          "hierarchy": "Theory Tools Wellformedness",
          "module": "Theory.Tools.Wellformedness",
          "name": "WfErrorReport",
          "package": "tamarin-prover-theory",
          "partial": "Wf Error Report",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#t:WfErrorReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll 2-multicombinations of a list.\n multicombine2 :: [a] -\u003e [(a,a)]\n multicombine2 xs0 = do (x,xs) \u003ca\u003ezip xs0 $ tails xs0; (,) x \u003c$\u003c/a\u003e xs\n\u003c/p\u003e\u003cp\u003eReturns a list of errors, if there are any.\n\u003c/p\u003e",
          "module": "Theory.Tools.Wellformedness",
          "name": "checkWellformedness",
          "package": "tamarin-prover-theory",
          "signature": "OpenTheory -\u003e WfErrorReport",
          "source": "src/Theory-Tools-Wellformedness.html#checkWellformedness",
          "type": "function"
        },
        "index": {
          "description": "All multicombinations of list multicombine2 multicombine2 xs0 do xs zip xs0 tails xs0 xs Returns list of errors if there are any",
          "hierarchy": "Theory Tools Wellformedness",
          "module": "Theory.Tools.Wellformedness",
          "name": "checkWellformedness",
          "normalized": "OpenTheory-\u003eWfErrorReport",
          "package": "tamarin-prover-theory",
          "partial": "Wellformedness",
          "signature": "OpenTheory-\u003eWfErrorReport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#v:checkWellformedness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a note to the end of the theory, if it is not well-formed.\n\u003c/p\u003e",
          "module": "Theory.Tools.Wellformedness",
          "name": "noteWellformedness",
          "package": "tamarin-prover-theory",
          "signature": "WfErrorReport -\u003e OpenTheory -\u003e OpenTheory",
          "source": "src/Theory-Tools-Wellformedness.html#noteWellformedness",
          "type": "function"
        },
        "index": {
          "description": "Adds note to the end of the theory if it is not well-formed",
          "hierarchy": "Theory Tools Wellformedness",
          "module": "Theory.Tools.Wellformedness",
          "name": "noteWellformedness",
          "normalized": "WfErrorReport-\u003eOpenTheory-\u003eOpenTheory",
          "package": "tamarin-prover-theory",
          "partial": "Wellformedness",
          "signature": "WfErrorReport-\u003eOpenTheory-\u003eOpenTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#v:noteWellformedness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory.Tools.Wellformedness",
          "name": "prettyWfErrorReport",
          "package": "tamarin-prover-theory",
          "signature": "WfErrorReport -\u003e Doc",
          "source": "src/Theory-Tools-Wellformedness.html#prettyWfErrorReport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory Tools Wellformedness",
          "module": "Theory.Tools.Wellformedness",
          "name": "prettyWfErrorReport",
          "normalized": "WfErrorReport-\u003eDoc",
          "package": "tamarin-prover-theory",
          "partial": "Wf Error Report",
          "signature": "WfErrorReport-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory-Tools-Wellformedness.html#v:prettyWfErrorReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTheory datatype and transformations on it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Theory",
          "name": "Theory",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html",
          "type": "module"
        },
        "index": {
          "description": "Theory datatype and transformations on it",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "Theory",
          "package": "tamarin-prover-theory",
          "partial": "Theory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn axiom describes a property that must hold for all traces. Axioms are\n always used as lemmas in proofs.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "Axiom",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#Axiom",
          "type": "data"
        },
        "index": {
          "description": "An axiom describes property that must hold for all traces Axioms are always used as lemmas in proofs",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "Axiom",
          "package": "tamarin-prover-theory",
          "partial": "Axiom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:Axiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closed proto rule lists its original rule modulo E, the corresponding\n variant modulo AC, and if required the assertion soundness proof.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "ClosedProtoRule",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#ClosedProtoRule",
          "type": "data"
        },
        "index": {
          "description": "closed proto rule lists its original rule modulo the corresponding variant modulo AC and if required the assertion soundness proof",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "ClosedProtoRule",
          "package": "tamarin-prover-theory",
          "partial": "Closed Proto Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:ClosedProtoRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "ClosedRuleCache",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#ClosedRuleCache",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "ClosedRuleCache",
          "package": "tamarin-prover-theory",
          "partial": "Closed Rule Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:ClosedRuleCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClosed theories can be proven. Invariants:\n     1. Lemma names are unique\n     2. All proof steps with annotated sequents are sound with respect to the\n        closed rule set of the theory.\n     3. Maude is running under the given handle.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "ClosedTheory",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#ClosedTheory",
          "type": "type"
        },
        "index": {
          "description": "Closed theories can be proven Invariants Lemma names are unique All proof steps with annotated sequents are sound with respect to the closed rule set of the theory Maude is running under the given handle",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "ClosedTheory",
          "package": "tamarin-prover-theory",
          "partial": "Closed Theory",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:ClosedTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lemma describes a property that holds in the context of a theory\n together with a proof of its correctness.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "Lemma",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#Lemma",
          "type": "data"
        },
        "index": {
          "description": "lemma describes property that holds in the context of theory together with proof of its correctness",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "Lemma",
          "package": "tamarin-prover-theory",
          "partial": "Lemma",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:Lemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn attribute for a \u003ccode\u003e\u003ca\u003eLemma\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "LemmaAttribute",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#LemmaAttribute",
          "type": "data"
        },
        "index": {
          "description": "An attribute for Lemma",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "LemmaAttribute",
          "package": "tamarin-prover-theory",
          "partial": "Lemma Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:LemmaAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen theories can be extended. Invariants:\n   1. Lemma names are unique.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "OpenTheory",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#OpenTheory",
          "type": "type"
        },
        "index": {
          "description": "Open theories can be extended Invariants Lemma names are unique",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "OpenTheory",
          "package": "tamarin-prover-theory",
          "partial": "Open Theory",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:OpenTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProof skeletons are used to represent proofs in open theories.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "ProofSkeleton",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#ProofSkeleton",
          "type": "type"
        },
        "index": {
          "description": "Proof skeletons are used to represent proofs in open theories",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "ProofSkeleton",
          "package": "tamarin-prover-theory",
          "partial": "Proof Skeleton",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:ProofSkeleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA theory contains a single set of rewriting rules modeling a protocol\n and the lemmas that\n\u003c/p\u003e",
          "module": "Theory",
          "name": "Theory",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#Theory",
          "type": "data"
        },
        "index": {
          "description": "theory contains single set of rewriting rules modeling protocol and the lemmas that",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "Theory",
          "package": "tamarin-prover-theory",
          "partial": "Theory",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:Theory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA theory item built over the given rule type.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "TheoryItem",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#TheoryItem",
          "type": "data"
        },
        "index": {
          "description": "theory item built over the given rule type",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "TheoryItem",
          "package": "tamarin-prover-theory",
          "partial": "Theory Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:TheoryItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTraceQuantifier\u003c/a\u003e\u003c/code\u003e stating whether we check satisfiability of validity.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "TraceQuantifier",
          "package": "tamarin-prover-theory",
          "source": "src/Theory.html#TraceQuantifier",
          "type": "data"
        },
        "index": {
          "description": "TraceQuantifier stating whether we check satisfiability of validity",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "TraceQuantifier",
          "package": "tamarin-prover-theory",
          "partial": "Trace Quantifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#t:TraceQuantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "AllTraces",
          "package": "tamarin-prover-theory",
          "signature": "AllTraces",
          "source": "src/Theory.html#TraceQuantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "AllTraces",
          "package": "tamarin-prover-theory",
          "partial": "All Traces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:AllTraces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "Axiom",
          "package": "tamarin-prover-theory",
          "signature": "Axiom",
          "source": "src/Theory.html#Axiom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "Axiom",
          "package": "tamarin-prover-theory",
          "partial": "Axiom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:Axiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "AxiomItem",
          "package": "tamarin-prover-theory",
          "signature": "AxiomItem Axiom",
          "source": "src/Theory.html#TheoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "AxiomItem",
          "package": "tamarin-prover-theory",
          "partial": "Axiom Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:AxiomItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "ClosedProtoRule",
          "package": "tamarin-prover-theory",
          "signature": "ClosedProtoRule",
          "source": "src/Theory.html#ClosedProtoRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "ClosedProtoRule",
          "package": "tamarin-prover-theory",
          "partial": "Closed Proto Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:ClosedProtoRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "ClosedRuleCache",
          "package": "tamarin-prover-theory",
          "signature": "ClosedRuleCache",
          "source": "src/Theory.html#ClosedRuleCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "ClosedRuleCache",
          "package": "tamarin-prover-theory",
          "partial": "Closed Rule Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:ClosedRuleCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "ExistsTrace",
          "package": "tamarin-prover-theory",
          "signature": "ExistsTrace",
          "source": "src/Theory.html#TraceQuantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "ExistsTrace",
          "package": "tamarin-prover-theory",
          "partial": "Exists Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:ExistsTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "InvariantLemma",
          "package": "tamarin-prover-theory",
          "signature": "InvariantLemma",
          "source": "src/Theory.html#LemmaAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "InvariantLemma",
          "package": "tamarin-prover-theory",
          "partial": "Invariant Lemma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:InvariantLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "LemmaItem",
          "package": "tamarin-prover-theory",
          "signature": "LemmaItem (Lemma p)",
          "source": "src/Theory.html#TheoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "LemmaItem",
          "package": "tamarin-prover-theory",
          "partial": "Lemma Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:LemmaItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "ReuseLemma",
          "package": "tamarin-prover-theory",
          "signature": "ReuseLemma",
          "source": "src/Theory.html#LemmaAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "ReuseLemma",
          "package": "tamarin-prover-theory",
          "partial": "Reuse Lemma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:ReuseLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "RuleItem",
          "package": "tamarin-prover-theory",
          "signature": "RuleItem r",
          "source": "src/Theory.html#TheoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "RuleItem",
          "package": "tamarin-prover-theory",
          "partial": "Rule Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:RuleItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "TextItem",
          "package": "tamarin-prover-theory",
          "signature": "TextItem FormalComment",
          "source": "src/Theory.html#TheoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "TextItem",
          "package": "tamarin-prover-theory",
          "partial": "Text Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:TextItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "Theory",
          "package": "tamarin-prover-theory",
          "signature": "Theory",
          "source": "src/Theory.html#Theory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "Theory",
          "package": "tamarin-prover-theory",
          "partial": "Theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:Theory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "TypingLemma",
          "package": "tamarin-prover-theory",
          "signature": "TypingLemma",
          "source": "src/Theory.html#LemmaAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "TypingLemma",
          "package": "tamarin-prover-theory",
          "partial": "Typing Lemma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:TypingLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_axFormula",
          "package": "tamarin-prover-theory",
          "signature": "LNFormula",
          "source": "src/Theory.html#Axiom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_axFormula",
          "package": "tamarin-prover-theory",
          "partial": "Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_axFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_axName",
          "package": "tamarin-prover-theory",
          "signature": "String",
          "source": "src/Theory.html#Axiom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_axName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_axName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_cprRuleAC",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleAC",
          "source": "src/Theory.html#ClosedProtoRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_cprRuleAC",
          "package": "tamarin-prover-theory",
          "partial": "Rule AC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_cprRuleAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_cprRuleE",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleE",
          "source": "src/Theory.html#ClosedProtoRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_cprRuleE",
          "package": "tamarin-prover-theory",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_cprRuleE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_crcInjectiveFactInsts",
          "package": "tamarin-prover-theory",
          "signature": "Set FactTag",
          "source": "src/Theory.html#ClosedRuleCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_crcInjectiveFactInsts",
          "package": "tamarin-prover-theory",
          "partial": "Injective Fact Insts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_crcInjectiveFactInsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_crcRules",
          "package": "tamarin-prover-theory",
          "signature": "ClassifiedRules",
          "source": "src/Theory.html#ClosedRuleCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_crcRules",
          "package": "tamarin-prover-theory",
          "partial": "Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_crcRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_crcTypedCaseDists",
          "package": "tamarin-prover-theory",
          "signature": "[CaseDistinction]",
          "source": "src/Theory.html#ClosedRuleCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_crcTypedCaseDists",
          "normalized": "[CaseDistinction]",
          "package": "tamarin-prover-theory",
          "partial": "Typed Case Dists",
          "signature": "[CaseDistinction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_crcTypedCaseDists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_crcUntypedCaseDists",
          "package": "tamarin-prover-theory",
          "signature": "[CaseDistinction]",
          "source": "src/Theory.html#ClosedRuleCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_crcUntypedCaseDists",
          "normalized": "[CaseDistinction]",
          "package": "tamarin-prover-theory",
          "partial": "Untyped Case Dists",
          "signature": "[CaseDistinction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_crcUntypedCaseDists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_thyCache",
          "package": "tamarin-prover-theory",
          "signature": "c",
          "source": "src/Theory.html#Theory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_thyCache",
          "package": "tamarin-prover-theory",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_thyCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_thyItems",
          "package": "tamarin-prover-theory",
          "signature": "[TheoryItem r p]",
          "source": "src/Theory.html#Theory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_thyItems",
          "normalized": "[TheoryItem a b]",
          "package": "tamarin-prover-theory",
          "partial": "Items",
          "signature": "[TheoryItem r p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_thyItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_thyName",
          "package": "tamarin-prover-theory",
          "signature": "String",
          "source": "src/Theory.html#Theory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_thyName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_thyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "_thySignature",
          "package": "tamarin-prover-theory",
          "signature": "sig",
          "source": "src/Theory.html#Theory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "_thySignature",
          "package": "tamarin-prover-theory",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:_thySignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new axiom. Fails, if axiom with the same name exists.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "addAxiom",
          "package": "tamarin-prover-theory",
          "signature": "Axiom -\u003e Theory sig c r p -\u003e Maybe (Theory sig c r p)",
          "source": "src/Theory.html#addAxiom",
          "type": "function"
        },
        "index": {
          "description": "Add new axiom Fails if axiom with the same name exists",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "addAxiom",
          "normalized": "Axiom-\u003eTheory a b c d-\u003eMaybe(Theory a b c d)",
          "package": "tamarin-prover-theory",
          "partial": "Axiom",
          "signature": "Axiom-\u003eTheory sig c r p-\u003eMaybe(Theory sig c r p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addAxiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a comment to the theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "addComment",
          "package": "tamarin-prover-theory",
          "signature": "Doc -\u003e Theory sig c r p -\u003e Theory sig c r p",
          "source": "src/Theory.html#addComment",
          "type": "function"
        },
        "index": {
          "description": "Add comment to the theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "addComment",
          "normalized": "Doc-\u003eTheory a b c d-\u003eTheory a b c d",
          "package": "tamarin-prover-theory",
          "partial": "Comment",
          "signature": "Doc-\u003eTheory sig c r p-\u003eTheory sig c r p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "addFormalComment",
          "package": "tamarin-prover-theory",
          "signature": "FormalComment -\u003e Theory sig c r p -\u003e Theory sig c r p",
          "source": "src/Theory.html#addFormalComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "addFormalComment",
          "normalized": "FormalComment-\u003eTheory a b c d-\u003eTheory a b c d",
          "package": "tamarin-prover-theory",
          "partial": "Formal Comment",
          "signature": "FormalComment-\u003eTheory sig c r p-\u003eTheory sig c r p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addFormalComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd intruder proof rules.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "addIntrRuleACs",
          "package": "tamarin-prover-theory",
          "signature": "[IntrRuleAC] -\u003e OpenTheory -\u003e OpenTheory",
          "source": "src/Theory.html#addIntrRuleACs",
          "type": "function"
        },
        "index": {
          "description": "Add intruder proof rules",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "addIntrRuleACs",
          "normalized": "[IntrRuleAC]-\u003eOpenTheory-\u003eOpenTheory",
          "package": "tamarin-prover-theory",
          "partial": "Intr Rule ACs",
          "signature": "[IntrRuleAC]-\u003eOpenTheory-\u003eOpenTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addIntrRuleACs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new lemma. Fails, if a lemma with the same name exists.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "addLemma",
          "package": "tamarin-prover-theory",
          "signature": "Lemma p -\u003e Theory sig c r p -\u003e Maybe (Theory sig c r p)",
          "source": "src/Theory.html#addLemma",
          "type": "function"
        },
        "index": {
          "description": "Add new lemma Fails if lemma with the same name exists",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "addLemma",
          "normalized": "Lemma a-\u003eTheory b c d a-\u003eMaybe(Theory b c d a)",
          "package": "tamarin-prover-theory",
          "partial": "Lemma",
          "signature": "Lemma p-\u003eTheory sig c r p-\u003eMaybe(Theory sig c r p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new protocol rules. Fails, if a protocol rule with the same name\n exists.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "addProtoRule",
          "package": "tamarin-prover-theory",
          "signature": "ProtoRuleE -\u003e OpenTheory -\u003e Maybe OpenTheory",
          "source": "src/Theory.html#addProtoRule",
          "type": "function"
        },
        "index": {
          "description": "Add new protocol rules Fails if protocol rule with the same name exists",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "addProtoRule",
          "normalized": "ProtoRuleE-\u003eOpenTheory-\u003eMaybe OpenTheory",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule",
          "signature": "ProtoRuleE-\u003eOpenTheory-\u003eMaybe OpenTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addProtoRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a comment represented as a string to the theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "addStringComment",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e Theory sig c r p -\u003e Theory sig c r p",
          "source": "src/Theory.html#addStringComment",
          "type": "function"
        },
        "index": {
          "description": "Add comment represented as string to the theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "addStringComment",
          "normalized": "String-\u003eTheory a b c d-\u003eTheory a b c d",
          "package": "tamarin-prover-theory",
          "partial": "String Comment",
          "signature": "String-\u003eTheory sig c r p-\u003eTheory sig c r p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:addStringComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply partial evaluation.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "applyPartialEvaluation",
          "package": "tamarin-prover-theory",
          "signature": "EvaluationStyle -\u003e ClosedTheory -\u003e ClosedTheory",
          "source": "src/Theory.html#applyPartialEvaluation",
          "type": "function"
        },
        "index": {
          "description": "Apply partial evaluation",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "applyPartialEvaluation",
          "normalized": "EvaluationStyle-\u003eClosedTheory-\u003eClosedTheory",
          "package": "tamarin-prover-theory",
          "partial": "Partial Evaluation",
          "signature": "EvaluationStyle-\u003eClosedTheory-\u003eClosedTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:applyPartialEvaluation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "axFormula",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr Axiom LNFormula",
          "source": "src/Theory.html#axFormula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "axFormula",
          "package": "tamarin-prover-theory",
          "partial": "Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:axFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "axName",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr Axiom String",
          "source": "src/Theory.html#axName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "axName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:axName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a theory by closing its associated rule set and checking the proof\n skeletons and caching AC variants as well as precomputed case distinctions.\n\u003c/p\u003e\u003cp\u003eThis function initializes the relation to the Maude process with the\n correct signature. This is the right place to do that because in a closed\n theory the signature may not change any longer.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "closeTheory",
          "package": "tamarin-prover-theory",
          "signature": "FilePath-\u003e OpenTheory-\u003e IO ClosedTheory",
          "type": "function"
        },
        "index": {
          "description": "Close theory by closing its associated rule set and checking the proof skeletons and caching AC variants as well as precomputed case distinctions This function initializes the relation to the Maude process with the correct signature This is the right place to do that because in closed theory the signature may not change any longer",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "closeTheory",
          "normalized": "FilePath-\u003eOpenTheory-\u003eIO ClosedTheory",
          "package": "tamarin-prover-theory",
          "partial": "Theory",
          "signature": "FilePath-\u003eOpenTheory-\u003eIO ClosedTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:closeTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "cprRuleE",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr ClosedProtoRule ProtoRuleE",
          "source": "src/Theory.html#cprRuleE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "cprRuleE",
          "package": "tamarin-prover-theory",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:cprRuleE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault theory\n\u003c/p\u003e",
          "module": "Theory",
          "name": "defaultOpenTheory",
          "package": "tamarin-prover-theory",
          "signature": "OpenTheory",
          "source": "src/Theory.html#defaultOpenTheory",
          "type": "function"
        },
        "index": {
          "description": "Default theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "defaultOpenTheory",
          "package": "tamarin-prover-theory",
          "partial": "Open Theory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:defaultOpenTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe precomputed case distinctions.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "getCaseDistinction",
          "package": "tamarin-prover-theory",
          "signature": "CaseDistKind -\u003e ClosedTheory -\u003e [CaseDistinction]",
          "source": "src/Theory.html#getCaseDistinction",
          "type": "function"
        },
        "index": {
          "description": "The precomputed case distinctions",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "getCaseDistinction",
          "normalized": "CaseDistKind-\u003eClosedTheory-\u003e[CaseDistinction]",
          "package": "tamarin-prover-theory",
          "partial": "Case Distinction",
          "signature": "CaseDistKind-\u003eClosedTheory-\u003e[CaseDistinction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getCaseDistinction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe classified set of rules modulo AC in this theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "getClassifiedRules",
          "package": "tamarin-prover-theory",
          "signature": "ClosedTheory -\u003e ClassifiedRules",
          "source": "src/Theory.html#getClassifiedRules",
          "type": "function"
        },
        "index": {
          "description": "The classified set of rules modulo AC in this theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "getClassifiedRules",
          "normalized": "ClosedTheory-\u003eClassifiedRules",
          "package": "tamarin-prover-theory",
          "partial": "Classified Rules",
          "signature": "ClosedTheory-\u003eClassifiedRules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getClassifiedRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe facts with injective instances in this theory\n\u003c/p\u003e",
          "module": "Theory",
          "name": "getInjectiveFactInsts",
          "package": "tamarin-prover-theory",
          "signature": "ClosedTheory -\u003e Set FactTag",
          "source": "src/Theory.html#getInjectiveFactInsts",
          "type": "function"
        },
        "index": {
          "description": "The facts with injective instances in this theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "getInjectiveFactInsts",
          "normalized": "ClosedTheory-\u003eSet FactTag",
          "package": "tamarin-prover-theory",
          "partial": "Injective Fact Insts",
          "signature": "ClosedTheory-\u003eSet FactTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getInjectiveFactInsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe variants of the intruder rules.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "getIntrVariants",
          "package": "tamarin-prover-theory",
          "signature": "ClosedTheory -\u003e [IntrRuleAC]",
          "source": "src/Theory.html#getIntrVariants",
          "type": "function"
        },
        "index": {
          "description": "The variants of the intruder rules",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "getIntrVariants",
          "normalized": "ClosedTheory-\u003e[IntrRuleAC]",
          "package": "tamarin-prover-theory",
          "partial": "Intr Variants",
          "signature": "ClosedTheory-\u003e[IntrRuleAC]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getIntrVariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll lemmas.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "getLemmas",
          "package": "tamarin-prover-theory",
          "signature": "ClosedTheory -\u003e [Lemma IncrementalProof]",
          "source": "src/Theory.html#getLemmas",
          "type": "function"
        },
        "index": {
          "description": "All lemmas",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "getLemmas",
          "normalized": "ClosedTheory-\u003e[Lemma IncrementalProof]",
          "package": "tamarin-prover-theory",
          "partial": "Lemmas",
          "signature": "ClosedTheory-\u003e[Lemma IncrementalProof]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getLemmas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the proof context for a lemma of the closed theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "getProofContext",
          "package": "tamarin-prover-theory",
          "signature": "Lemma a -\u003e ClosedTheory -\u003e ProofContext",
          "source": "src/Theory.html#getProofContext",
          "type": "function"
        },
        "index": {
          "description": "Get the proof context for lemma of the closed theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "getProofContext",
          "normalized": "Lemma a-\u003eClosedTheory-\u003eProofContext",
          "package": "tamarin-prover-theory",
          "partial": "Proof Context",
          "signature": "Lemma a-\u003eClosedTheory-\u003eProofContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getProofContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll protocol rules modulo E.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "getProtoRuleEs",
          "package": "tamarin-prover-theory",
          "signature": "ClosedTheory -\u003e [ProtoRuleE]",
          "source": "src/Theory.html#getProtoRuleEs",
          "type": "function"
        },
        "index": {
          "description": "All protocol rules modulo",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "getProtoRuleEs",
          "normalized": "ClosedTheory-\u003e[ProtoRuleE]",
          "package": "tamarin-prover-theory",
          "partial": "Proto Rule Es",
          "signature": "ClosedTheory-\u003e[ProtoRuleE]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:getProtoRuleEs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "lAttributes",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Lemma p) [LemmaAttribute]",
          "source": "src/Theory.html#lAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "lAttributes",
          "normalized": "Lens a(Lemma b)[LemmaAttribute]",
          "package": "tamarin-prover-theory",
          "partial": "Attributes",
          "signature": "Lens arr(Lemma p)[LemmaAttribute]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "lFormula",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Lemma p) LNFormula",
          "source": "src/Theory.html#lFormula",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "lFormula",
          "package": "tamarin-prover-theory",
          "partial": "Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "lName",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Lemma p) String",
          "source": "src/Theory.html#lName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "lName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "lProof",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Lemma p) p",
          "source": "src/Theory.html#lProof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "lProof",
          "package": "tamarin-prover-theory",
          "partial": "Proof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "lTraceQuantifier",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Lemma p) TraceQuantifier",
          "source": "src/Theory.html#lTraceQuantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "lTraceQuantifier",
          "package": "tamarin-prover-theory",
          "partial": "Trace Quantifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lTraceQuantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the lemma with the given name.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "lookupLemma",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e Theory sig c r p -\u003e Maybe (Lemma p)",
          "source": "src/Theory.html#lookupLemma",
          "type": "function"
        },
        "index": {
          "description": "Find the lemma with the given name",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "lookupLemma",
          "normalized": "String-\u003eTheory a b c d-\u003eMaybe(Lemma d)",
          "package": "tamarin-prover-theory",
          "partial": "Lemma",
          "signature": "String-\u003eTheory sig c r p-\u003eMaybe(Lemma p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lookupLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve a path in a theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "lookupLemmaProof",
          "package": "tamarin-prover-theory",
          "signature": "LemmaRef -\u003e ClosedTheory -\u003e Maybe IncrementalProof",
          "source": "src/Theory.html#lookupLemmaProof",
          "type": "function"
        },
        "index": {
          "description": "Resolve path in theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "lookupLemmaProof",
          "normalized": "LemmaRef-\u003eClosedTheory-\u003eMaybe IncrementalProof",
          "package": "tamarin-prover-theory",
          "partial": "Lemma Proof",
          "signature": "LemmaRef-\u003eClosedTheory-\u003eMaybe IncrementalProof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:lookupLemmaProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the proof at the given lemma ref, if there is one. Fails if the\n path is not present or if the prover fails.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "modifyLemmaProof",
          "package": "tamarin-prover-theory",
          "signature": "Prover -\u003e LemmaRef -\u003e ClosedTheory -\u003e Maybe ClosedTheory",
          "source": "src/Theory.html#modifyLemmaProof",
          "type": "function"
        },
        "index": {
          "description": "Modify the proof at the given lemma ref if there is one Fails if the path is not present or if the prover fails",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "modifyLemmaProof",
          "normalized": "Prover-\u003eLemmaRef-\u003eClosedTheory-\u003eMaybe ClosedTheory",
          "package": "tamarin-prover-theory",
          "partial": "Lemma Proof",
          "signature": "Prover-\u003eLemmaRef-\u003eClosedTheory-\u003eMaybe ClosedTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:modifyLemmaProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize the theory representation such that they remain semantically\n equivalent. Use this function when you want to compare two theories (quite\n strictly) for semantic equality; e.g., when testing the parser.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "normalizeTheory",
          "package": "tamarin-prover-theory",
          "signature": "OpenTheory -\u003e OpenTheory",
          "source": "src/Theory.html#normalizeTheory",
          "type": "function"
        },
        "index": {
          "description": "Normalize the theory representation such that they remain semantically equivalent Use this function when you want to compare two theories quite strictly for semantic equality e.g when testing the parser",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "normalizeTheory",
          "normalized": "OpenTheory-\u003eOpenTheory",
          "package": "tamarin-prover-theory",
          "partial": "Theory",
          "signature": "OpenTheory-\u003eOpenTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:normalizeTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a theory by dropping the closed world assumption and values whose\n soundness dependens on it.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "openTheory",
          "package": "tamarin-prover-theory",
          "signature": "ClosedTheory -\u003e OpenTheory",
          "source": "src/Theory.html#openTheory",
          "type": "function"
        },
        "index": {
          "description": "Open theory by dropping the closed world assumption and values whose soundness dependens on it",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "openTheory",
          "normalized": "ClosedTheory-\u003eOpenTheory",
          "package": "tamarin-prover-theory",
          "partial": "Theory",
          "signature": "ClosedTheory-\u003eOpenTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:openTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print an axiom.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "prettyAxiom",
          "package": "tamarin-prover-theory",
          "signature": "Axiom -\u003e d",
          "source": "src/Theory.html#prettyAxiom",
          "type": "function"
        },
        "index": {
          "description": "Pretty print an axiom",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "prettyAxiom",
          "normalized": "Axiom-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Axiom",
          "signature": "Axiom-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyAxiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "prettyClosedSummary",
          "package": "tamarin-prover-theory",
          "signature": "ClosedTheory -\u003e d",
          "source": "src/Theory.html#prettyClosedSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "prettyClosedSummary",
          "normalized": "ClosedTheory-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Closed Summary",
          "signature": "ClosedTheory-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyClosedSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a closed theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "prettyClosedTheory",
          "package": "tamarin-prover-theory",
          "signature": "ClosedTheory -\u003e d",
          "source": "src/Theory.html#prettyClosedTheory",
          "type": "function"
        },
        "index": {
          "description": "Pretty print closed theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "prettyClosedTheory",
          "normalized": "ClosedTheory-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Closed Theory",
          "signature": "ClosedTheory-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyClosedTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a formal comment\n\u003c/p\u003e",
          "module": "Theory",
          "name": "prettyFormalComment",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e String -\u003e d",
          "source": "src/Theory.html#prettyFormalComment",
          "type": "function"
        },
        "index": {
          "description": "Pretty print formal comment",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "prettyFormalComment",
          "normalized": "String-\u003eString-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Formal Comment",
          "signature": "String-\u003eString-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyFormalComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a non-empty bunch of intruder rules.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "prettyIntruderVariants",
          "package": "tamarin-prover-theory",
          "signature": "[IntrRuleAC] -\u003e d",
          "source": "src/Theory.html#prettyIntruderVariants",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print non-empty bunch of intruder rules",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "prettyIntruderVariants",
          "normalized": "[IntrRuleAC]-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Intruder Variants",
          "signature": "[IntrRuleAC]-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyIntruderVariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a lemma.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "prettyLemma",
          "package": "tamarin-prover-theory",
          "signature": "(p -\u003e d) -\u003e Lemma p -\u003e d",
          "source": "src/Theory.html#prettyLemma",
          "type": "function"
        },
        "index": {
          "description": "Pretty print lemma",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "prettyLemma",
          "normalized": "(a-\u003eb)-\u003eLemma a-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "Lemma",
          "signature": "(p-\u003ed)-\u003eLemma p-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the lemma name together with its attributes.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "prettyLemmaName",
          "package": "tamarin-prover-theory",
          "signature": "Lemma p -\u003e d",
          "source": "src/Theory.html#prettyLemmaName",
          "type": "function"
        },
        "index": {
          "description": "Pretty print the lemma name together with its attributes",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "prettyLemmaName",
          "normalized": "Lemma a-\u003eb",
          "package": "tamarin-prover-theory",
          "partial": "Lemma Name",
          "signature": "Lemma p-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyLemmaName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print an open theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "prettyOpenTheory",
          "package": "tamarin-prover-theory",
          "signature": "OpenTheory -\u003e d",
          "source": "src/Theory.html#prettyOpenTheory",
          "type": "function"
        },
        "index": {
          "description": "Pretty print an open theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "prettyOpenTheory",
          "normalized": "OpenTheory-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Open Theory",
          "signature": "OpenTheory-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyOpenTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a \u003ccode\u003e\u003ca\u003eTraceQuantifier\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "prettyTraceQuantifier",
          "package": "tamarin-prover-theory",
          "signature": "TraceQuantifier -\u003e d",
          "source": "src/Theory.html#prettyTraceQuantifier",
          "type": "function"
        },
        "index": {
          "description": "Pretty print TraceQuantifier",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "prettyTraceQuantifier",
          "normalized": "TraceQuantifier-\u003ea",
          "package": "tamarin-prover-theory",
          "partial": "Trace Quantifier",
          "signature": "TraceQuantifier-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:prettyTraceQuantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProve both the assertion soundness as well as all lemmas of the theory. If\n the prover fails on a lemma, then its proof remains unchanged.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "proveTheory",
          "package": "tamarin-prover-theory",
          "signature": "(Lemma IncrementalProof -\u003e Bool)-\u003e Prover-\u003e ClosedTheory-\u003e ClosedTheory",
          "type": "function"
        },
        "index": {
          "description": "Prove both the assertion soundness as well as all lemmas of the theory If the prover fails on lemma then its proof remains unchanged",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "proveTheory",
          "normalized": "(Lemma IncrementalProof-\u003eBool)-\u003eProver-\u003eClosedTheory-\u003eClosedTheory",
          "package": "tamarin-prover-theory",
          "partial": "Theory",
          "signature": "(Lemma IncrementalProof-\u003eBool)-\u003eProver-\u003eClosedTheory-\u003eClosedTheory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:proveTheory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a lemma by name. Fails, if the lemma does not exist.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "removeLemma",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e Theory sig c r p -\u003e Maybe (Theory sig c r p)",
          "source": "src/Theory.html#removeLemma",
          "type": "function"
        },
        "index": {
          "description": "Remove lemma by name Fails if the lemma does not exist",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "removeLemma",
          "normalized": "String-\u003eTheory a b c d-\u003eMaybe(Theory a b c d)",
          "package": "tamarin-prover-theory",
          "partial": "Lemma",
          "signature": "String-\u003eTheory sig c r p-\u003eMaybe(Theory sig c r p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:removeLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "skeletonLemma",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e [LemmaAttribute] -\u003e TraceQuantifier -\u003e LNFormula -\u003e ProofSkeleton -\u003e Lemma ProofSkeleton",
          "source": "src/Theory.html#skeletonLemma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "skeletonLemma",
          "normalized": "String-\u003e[LemmaAttribute]-\u003eTraceQuantifier-\u003eLNFormula-\u003eProofSkeleton-\u003eLemma ProofSkeleton",
          "package": "tamarin-prover-theory",
          "partial": "Lemma",
          "signature": "String-\u003e[LemmaAttribute]-\u003eTraceQuantifier-\u003eLNFormula-\u003eProofSkeleton-\u003eLemma ProofSkeleton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:skeletonLemma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll axioms of a theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "theoryAxioms",
          "package": "tamarin-prover-theory",
          "signature": "Theory sig c r p -\u003e [Axiom]",
          "source": "src/Theory.html#theoryAxioms",
          "type": "function"
        },
        "index": {
          "description": "All axioms of theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "theoryAxioms",
          "normalized": "Theory a b c d-\u003e[Axiom]",
          "package": "tamarin-prover-theory",
          "partial": "Axioms",
          "signature": "Theory sig c r p-\u003e[Axiom]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:theoryAxioms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll lemmas of a theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "theoryLemmas",
          "package": "tamarin-prover-theory",
          "signature": "Theory sig c r p -\u003e [Lemma p]",
          "source": "src/Theory.html#theoryLemmas",
          "type": "function"
        },
        "index": {
          "description": "All lemmas of theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "theoryLemmas",
          "normalized": "Theory a b c d-\u003e[Lemma d]",
          "package": "tamarin-prover-theory",
          "partial": "Lemmas",
          "signature": "Theory sig c r p-\u003e[Lemma p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:theoryLemmas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll rules of a theory.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "theoryRules",
          "package": "tamarin-prover-theory",
          "signature": "Theory sig c r p -\u003e [r]",
          "source": "src/Theory.html#theoryRules",
          "type": "function"
        },
        "index": {
          "description": "All rules of theory",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "theoryRules",
          "normalized": "Theory a b c d-\u003e[c]",
          "package": "tamarin-prover-theory",
          "partial": "Rules",
          "signature": "Theory sig c r p-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:theoryRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "thyCache",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Theory sig c r p) c",
          "source": "src/Theory.html#thyCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "thyCache",
          "package": "tamarin-prover-theory",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:thyCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "thyItems",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Theory sig c r p) [TheoryItem r p]",
          "source": "src/Theory.html#thyItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "thyItems",
          "normalized": "Lens a(Theory b c d e)[TheoryItem d e]",
          "package": "tamarin-prover-theory",
          "partial": "Items",
          "signature": "Lens arr(Theory sig c r p)[TheoryItem r p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:thyItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "thyName",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Theory sig c r p) String",
          "source": "src/Theory.html#thyName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "thyName",
          "package": "tamarin-prover-theory",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:thyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theory",
          "name": "thySignature",
          "package": "tamarin-prover-theory",
          "signature": "Lens arr (Theory sig c r p) sig",
          "source": "src/Theory.html#thySignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "thySignature",
          "package": "tamarin-prover-theory",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:thySignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new unproven lemma from a formula modulo E.\n\u003c/p\u003e",
          "module": "Theory",
          "name": "unprovenLemma",
          "package": "tamarin-prover-theory",
          "signature": "String -\u003e [LemmaAttribute] -\u003e TraceQuantifier -\u003e LNFormula -\u003e Lemma ProofSkeleton",
          "source": "src/Theory.html#unprovenLemma",
          "type": "function"
        },
        "index": {
          "description": "Create new unproven lemma from formula modulo",
          "hierarchy": "Theory",
          "module": "Theory",
          "name": "unprovenLemma",
          "normalized": "String-\u003e[LemmaAttribute]-\u003eTraceQuantifier-\u003eLNFormula-\u003eLemma ProofSkeleton",
          "package": "tamarin-prover-theory",
          "partial": "Lemma",
          "signature": "String-\u003e[LemmaAttribute]-\u003eTraceQuantifier-\u003eLNFormula-\u003eLemma ProofSkeleton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tamarin-prover-theory/docs/Theory.html#v:unprovenLemma"
      }
    }
  ]
]