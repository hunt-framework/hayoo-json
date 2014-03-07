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
        "word": "RNAdesign"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "Assignment",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign-Assignment.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "Assignment",
          "package": "RNAdesign",
          "partial": "Assignment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "Assignment",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign-Assignment.html#Assignment",
          "type": "data"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "Assignment",
          "package": "RNAdesign",
          "partial": "Assignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#t:Assignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "Assignment",
          "package": "RNAdesign",
          "signature": "Assignment",
          "source": "src/BioInf-RNAdesign-Assignment.html#Assignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "Assignment",
          "package": "RNAdesign",
          "partial": "Assignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#v:Assignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a graph with base pairing constraints, return a \u003ccode\u003eAssignments\u003c/code\u003e data\n structure that provides all legal assignments.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "allCandidates",
          "package": "RNAdesign",
          "signature": "Int -\u003e Vector [Nuc] -\u003e gr () () -\u003e Assignment",
          "source": "src/BioInf-RNAdesign-Assignment.html#allCandidates",
          "type": "function"
        },
        "index": {
          "description": "Given graph with base pairing constraints return Assignments data structure that provides all legal assignments",
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "allCandidates",
          "normalized": "Int-\u003eVector[Nuc]-\u003ea()()-\u003eAssignment",
          "package": "RNAdesign",
          "partial": "Candidates",
          "signature": "Int-\u003eVector[Nuc]-\u003egr()()-\u003eAssignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#v:allCandidates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "assignment",
          "package": "RNAdesign",
          "signature": "Vector (Vector Nuc)",
          "source": "src/BioInf-RNAdesign-Assignment.html#Assignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "assignment",
          "package": "RNAdesign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#v:assignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "columns",
          "package": "RNAdesign",
          "signature": "Vector Int",
          "source": "src/BioInf-RNAdesign-Assignment.html#Assignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "columns",
          "package": "RNAdesign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "isExhaustive",
          "package": "RNAdesign",
          "signature": "Bool",
          "source": "src/BioInf-RNAdesign-Assignment.html#Assignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "isExhaustive",
          "package": "RNAdesign",
          "partial": "Exhaustive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#v:isExhaustive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "mkAssignments",
          "package": "RNAdesign",
          "signature": "Vector [Nuc] -\u003e [(Int, Int)] -\u003e [[Nuc]]",
          "source": "src/BioInf-RNAdesign-Assignment.html#mkAssignments",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "mkAssignments",
          "normalized": "Vector[Nuc]-\u003e[(Int,Int)]-\u003e[[Nuc]]",
          "package": "RNAdesign",
          "partial": "Assignments",
          "signature": "Vector[Nuc]-\u003e[(Int,Int)]-\u003e[[Nuc]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#v:mkAssignments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "mkEL",
          "package": "RNAdesign",
          "signature": "[(Int, Int)] -\u003e [Int]",
          "source": "src/BioInf-RNAdesign-Assignment.html#mkEL",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "mkEL",
          "normalized": "[(Int,Int)]-\u003e[Int]",
          "package": "RNAdesign",
          "partial": "EL",
          "signature": "[(Int,Int)]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#v:mkEL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "numAssignments",
          "package": "RNAdesign",
          "signature": "Integer",
          "source": "src/BioInf-RNAdesign-Assignment.html#Assignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "numAssignments",
          "package": "RNAdesign",
          "partial": "Assignments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#v:numAssignments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Assignment",
          "name": "vps",
          "package": "RNAdesign",
          "signature": "[(Nuc, Nuc)]",
          "source": "src/BioInf-RNAdesign-Assignment.html#vps",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Assignment",
          "module": "BioInf.RNAdesign.Assignment",
          "name": "vps",
          "normalized": "[(Nuc,Nuc)]",
          "package": "RNAdesign",
          "signature": "[(Nuc,Nuc)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Assignment.html#v:vps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "CandidateChain",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign-CandidateChain.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "CandidateChain",
          "package": "RNAdesign",
          "partial": "Candidate Chain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single candidate, with its sequence and the score, this sequence\n receives.  Candidates are ordered by their scores.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "Candidate",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#Candidate",
          "type": "data"
        },
        "index": {
          "description": "single candidate with its sequence and the score this sequence receives Candidates are ordered by their scores",
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "Candidate",
          "package": "RNAdesign",
          "partial": "Candidate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#t:Candidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis structure defines a \u003ca\u003edesign problem\u003c/a\u003e\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "DesignProblem",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#DesignProblem",
          "type": "data"
        },
        "index": {
          "description": "This structure defines design problem",
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "DesignProblem",
          "package": "RNAdesign",
          "partial": "Design Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#t:DesignProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe likelihood score we get.\n\u003c/p\u003e\u003cp\u003eTODO replace Score Likelihood / LogLikelihood (once we switch to the more\n generic MCMC library)\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "Score",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#Score",
          "type": "newtype"
        },
        "index": {
          "description": "The likelihood score we get TODO replace Score Likelihood LogLikelihood once we switch to the more generic MCMC library",
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "Score",
          "package": "RNAdesign",
          "partial": "Score",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#t:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "Candidate",
          "package": "RNAdesign",
          "signature": "Candidate",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#Candidate",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "Candidate",
          "package": "RNAdesign",
          "partial": "Candidate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:Candidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "DesignProblem",
          "package": "RNAdesign",
          "signature": "DesignProblem",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#DesignProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "DesignProblem",
          "package": "RNAdesign",
          "partial": "Design Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:DesignProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "Score",
          "package": "RNAdesign",
          "signature": "Score",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#Score",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "Score",
          "package": "RNAdesign",
          "partial": "Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "assignments",
          "package": "RNAdesign",
          "signature": "[Assignment]",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#DesignProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "assignments",
          "normalized": "[Assignment]",
          "package": "RNAdesign",
          "signature": "[Assignment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:assignments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "candidate",
          "package": "RNAdesign",
          "signature": "Primary",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#Candidate",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "candidate",
          "package": "RNAdesign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:candidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an initial, legal, candidate.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "mkInitial",
          "package": "RNAdesign",
          "signature": "(Primary -\u003e Score) -\u003e Int -\u003e DesignProblem -\u003e Rand m Candidate",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#mkInitial",
          "type": "function"
        },
        "index": {
          "description": "Create an initial legal candidate",
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "mkInitial",
          "normalized": "(Primary-\u003eScore)-\u003eInt-\u003eDesignProblem-\u003eRand a Candidate",
          "package": "RNAdesign",
          "partial": "Initial",
          "signature": "(Primary-\u003eScore)-\u003eInt-\u003eDesignProblem-\u003eRand m Candidate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:mkInitial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the current (or \u003ca\u003eold\u003c/a\u003e) sequence under the possible \u003ccode\u003e\u003ca\u003eassignment\u003c/a\u003e\u003c/code\u003es as\n prescribed by \u003ccode\u003e\u003ca\u003eAssignment\u003c/a\u003e\u003c/code\u003e. The modifying assignment is selected uniformly.\n The monadic \u003ccode\u003eold -\u003e new -\u003e Rand m Bool\u003c/code\u003e function chooses between the old and\n the new candidate. It can be used to, e.g., allow always choosing \u003ca\u003enew\u003c/a\u003e if\n it is better, but choosing \u003ca\u003enew\u003c/a\u003e as well if some stochastic value (hence\n dependence on \u003ccode\u003eRand m\u003c/code\u003e) indicates so.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "mutateOneAssignmentWith",
          "package": "RNAdesign",
          "signature": "(Primary -\u003e Score)-\u003e (Candidate -\u003e Candidate -\u003e Rand m Bool)-\u003e Candidate-\u003e Assignment-\u003e Rand m Candidate",
          "type": "function"
        },
        "index": {
          "description": "Mutate the current or old sequence under the possible assignment as prescribed by Assignment The modifying assignment is selected uniformly The monadic old new Rand Bool function chooses between the old and the new candidate It can be used to e.g allow always choosing new if it is better but choosing new as well if some stochastic value hence dependence on Rand indicates so",
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "mutateOneAssignmentWith",
          "normalized": "(Primary-\u003eScore)-\u003e(Candidate-\u003eCandidate-\u003eRand a Bool)-\u003eCandidate-\u003eAssignment-\u003eRand a Candidate",
          "package": "RNAdesign",
          "partial": "One Assignment With",
          "signature": "(Primary-\u003eScore)-\u003e(Candidate-\u003eCandidate-\u003eRand m Bool)-\u003eCandidate-\u003eAssignment-\u003eRand m Candidate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:mutateOneAssignmentWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "score",
          "package": "RNAdesign",
          "signature": "Score",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#Candidate",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "score",
          "package": "RNAdesign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "structures",
          "package": "RNAdesign",
          "signature": "[D1Secondary]",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#DesignProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "structures",
          "normalized": "[D Secondary]",
          "package": "RNAdesign",
          "signature": "[D Secondary]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:structures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "unScore",
          "package": "RNAdesign",
          "signature": "Double",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#Score",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "unScore",
          "package": "RNAdesign",
          "partial": "Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:unScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a stream of \u003ccode\u003e\u003ca\u003eCandidate\u003c/a\u003e\u003c/code\u003es from an initial candidate.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "unfoldStream",
          "package": "RNAdesign",
          "signature": "Int -\u003e Int -\u003e Int -\u003e (Primary -\u003e Score) -\u003e (Candidate -\u003e Candidate -\u003e Rand m Bool) -\u003e DesignProblem -\u003e Candidate -\u003e Stream (Rand m) Candidate",
          "source": "src/BioInf-RNAdesign-CandidateChain.html#unfoldStream",
          "type": "function"
        },
        "index": {
          "description": "Create stream of Candidate from an initial candidate",
          "hierarchy": "BioInf RNAdesign CandidateChain",
          "module": "BioInf.RNAdesign.CandidateChain",
          "name": "unfoldStream",
          "normalized": "Int-\u003eInt-\u003eInt-\u003e(Primary-\u003eScore)-\u003e(Candidate-\u003eCandidate-\u003eRand a Bool)-\u003eDesignProblem-\u003eCandidate-\u003eStream(Rand a)Candidate",
          "package": "RNAdesign",
          "partial": "Stream",
          "signature": "Int-\u003eInt-\u003eInt-\u003e(Primary-\u003eScore)-\u003e(Candidate-\u003eCandidate-\u003eRand m Bool)-\u003eDesignProblem-\u003eCandidate-\u003eStream(Rand m)Candidate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-CandidateChain.html#v:unfoldStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.Graph",
          "name": "Graph",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign-Graph.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign Graph",
          "module": "BioInf.RNAdesign.Graph",
          "name": "Graph",
          "package": "RNAdesign",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the graph into (simple, complex) components. The simple components\n can trivially be filled with any pair. The complex components require an Ear\n or Woffle decomposition. Simple components are acyclic.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.Graph",
          "name": "independentComponents",
          "package": "RNAdesign",
          "signature": "gr () () -\u003e [gr () ()]",
          "source": "src/BioInf-RNAdesign-Graph.html#independentComponents",
          "type": "function"
        },
        "index": {
          "description": "Split the graph into simple complex components The simple components can trivially be filled with any pair The complex components require an Ear or Woffle decomposition Simple components are acyclic",
          "hierarchy": "BioInf RNAdesign Graph",
          "module": "BioInf.RNAdesign.Graph",
          "name": "independentComponents",
          "normalized": "a()()-\u003e[a()()]",
          "package": "RNAdesign",
          "partial": "Components",
          "signature": "gr()()-\u003e[gr()()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Graph.html#v:independentComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the one to many structures, create the independent graphs, where\n each graph describes a set of dependent edges in the basepairing.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.Graph",
          "name": "independentGraphs",
          "package": "RNAdesign",
          "signature": "[String] -\u003e [Gr () ()]",
          "source": "src/BioInf-RNAdesign-Graph.html#independentGraphs",
          "type": "function"
        },
        "index": {
          "description": "Given the one to many structures create the independent graphs where each graph describes set of dependent edges in the basepairing",
          "hierarchy": "BioInf RNAdesign Graph",
          "module": "BioInf.RNAdesign.Graph",
          "name": "independentGraphs",
          "normalized": "[String]-\u003e[Gr()()]",
          "package": "RNAdesign",
          "partial": "Graphs",
          "signature": "[String]-\u003e[Gr()()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Graph.html#v:independentGraphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests if the given graph is bipartite, which is true if the even/odd BST\n trees contain no edges\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.Graph",
          "name": "isBipartite",
          "package": "RNAdesign",
          "signature": "gr a b -\u003e Bool",
          "source": "src/BioInf-RNAdesign-Graph.html#isBipartite",
          "type": "function"
        },
        "index": {
          "description": "Tests if the given graph is bipartite which is true if the even odd BST trees contain no edges",
          "hierarchy": "BioInf RNAdesign Graph",
          "module": "BioInf.RNAdesign.Graph",
          "name": "isBipartite",
          "normalized": "a b c-\u003eBool",
          "package": "RNAdesign",
          "partial": "Bipartite",
          "signature": "gr a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Graph.html#v:isBipartite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of several graphs, created from secondary structure.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.Graph",
          "name": "mkUnionGraph",
          "package": "RNAdesign",
          "signature": "[String] -\u003e Gr () ()",
          "source": "src/BioInf-RNAdesign-Graph.html#mkUnionGraph",
          "type": "function"
        },
        "index": {
          "description": "Union of several graphs created from secondary structure",
          "hierarchy": "BioInf RNAdesign Graph",
          "module": "BioInf.RNAdesign.Graph",
          "name": "mkUnionGraph",
          "normalized": "[String]-\u003eGr()()",
          "package": "RNAdesign",
          "partial": "Union Graph",
          "signature": "[String]-\u003eGr()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Graph.html#v:mkUnionGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pairlist, generate the secondary structure graph.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.Graph",
          "name": "pairlistToGraph",
          "package": "RNAdesign",
          "signature": "D1Secondary -\u003e Gr () ()",
          "source": "src/BioInf-RNAdesign-Graph.html#pairlistToGraph",
          "type": "function"
        },
        "index": {
          "description": "Given pairlist generate the secondary structure graph",
          "hierarchy": "BioInf RNAdesign Graph",
          "module": "BioInf.RNAdesign.Graph",
          "name": "pairlistToGraph",
          "normalized": "D Secondary-\u003eGr()()",
          "package": "RNAdesign",
          "partial": "To Graph",
          "signature": "D Secondary-\u003eGr()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Graph.html#v:pairlistToGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven k graphs, each with nodes [1..n], provide the union of all edges.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign.Graph",
          "name": "unions",
          "package": "RNAdesign",
          "signature": "[Gr a b] -\u003e Gr a b",
          "source": "src/BioInf-RNAdesign-Graph.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Given graphs each with nodes provide the union of all edges",
          "hierarchy": "BioInf RNAdesign Graph",
          "module": "BioInf.RNAdesign.Graph",
          "name": "unions",
          "normalized": "[Gr a b]-\u003eGr a b",
          "package": "RNAdesign",
          "signature": "[Gr a b]-\u003eGr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-Graph.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.LogMultinomial",
          "name": "LogMultinomial",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign-LogMultinomial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign LogMultinomial",
          "module": "BioInf.RNAdesign.LogMultinomial",
          "name": "LogMultinomial",
          "package": "RNAdesign",
          "partial": "Log Multinomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-LogMultinomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.LogMultinomial",
          "name": "logMultinomial",
          "package": "RNAdesign",
          "signature": "Int -\u003e Vector Double -\u003e Vector Int -\u003e Double",
          "source": "src/BioInf-RNAdesign-LogMultinomial.html#logMultinomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign LogMultinomial",
          "module": "BioInf.RNAdesign.LogMultinomial",
          "name": "logMultinomial",
          "normalized": "Int-\u003eVector Double-\u003eVector Int-\u003eDouble",
          "package": "RNAdesign",
          "partial": "Multinomial",
          "signature": "Int-\u003eVector Double-\u003eVector Int-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-LogMultinomial.html#v:logMultinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple parser designed to read the optimization string from an argument\n and together with the input computes the result of the the optimization\n query. Without \u003ccode\u003emkSingleOp\u003c/code\u003e and \u003ccode\u003emkMultiOp\u003c/code\u003e this just a trivial parser for\n simple arithmetic. The addional operations provide access to user-defined\n functions that can, for example, be used to calculate the energy of a\n sequence-structure pair. Those functions are not defined here but in the\n application that uses the parser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.RNAdesign.OptParser",
          "name": "OptParser",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign-OptParser.html",
          "type": "module"
        },
        "index": {
          "description": "simple parser designed to read the optimization string from an argument and together with the input computes the result of the the optimization query Without mkSingleOp and mkMultiOp this just trivial parser for simple arithmetic The addional operations provide access to user-defined functions that can for example be used to calculate the energy of sequence-structure pair Those functions are not defined here but in the application that uses the parser",
          "hierarchy": "BioInf RNAdesign OptParser",
          "module": "BioInf.RNAdesign.OptParser",
          "name": "OptParser",
          "package": "RNAdesign",
          "partial": "Opt Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-OptParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign.OptParser",
          "name": "parseOptString",
          "package": "RNAdesign",
          "signature": "NumSecStructs -\u003e [SingleOp] -\u003e [MultiOp] -\u003e [GlobalOp] -\u003e [PropOp] -\u003e String -\u003e Double",
          "source": "src/BioInf-RNAdesign-OptParser.html#parseOptString",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign OptParser",
          "module": "BioInf.RNAdesign.OptParser",
          "name": "parseOptString",
          "normalized": "NumSecStructs-\u003e[SingleOp]-\u003e[MultiOp]-\u003e[GlobalOp]-\u003e[PropOp]-\u003eString-\u003eDouble",
          "package": "RNAdesign",
          "partial": "Opt String",
          "signature": "NumSecStructs-\u003e[SingleOp]-\u003e[MultiOp]-\u003e[GlobalOp]-\u003e[PropOp]-\u003eString-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign-OptParser.html#v:parseOptString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign",
          "name": "RNAdesign",
          "package": "RNAdesign",
          "source": "src/BioInf-RNAdesign.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign",
          "module": "BioInf.RNAdesign",
          "name": "RNAdesign",
          "package": "RNAdesign",
          "partial": "RNAdesign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign",
          "name": "ensembleDefect",
          "package": "RNAdesign",
          "signature": "Vector a -\u003e D1Secondary -\u003e Double",
          "source": "src/BioInf-RNAdesign.html#ensembleDefect",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign",
          "module": "BioInf.RNAdesign",
          "name": "ensembleDefect",
          "normalized": "Vector a-\u003eD Secondary-\u003eDouble",
          "package": "RNAdesign",
          "partial": "Defect",
          "signature": "Vector a-\u003eD Secondary-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign.html#v:ensembleDefect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign",
          "name": "lmn",
          "package": "RNAdesign",
          "signature": "[Double] -\u003e Vector Nuc -\u003e Double",
          "source": "src/BioInf-RNAdesign.html#lmn",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign",
          "module": "BioInf.RNAdesign",
          "name": "lmn",
          "normalized": "[Double]-\u003eVector Nuc-\u003eDouble",
          "package": "RNAdesign",
          "signature": "[Double]-\u003eVector Nuc-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign.html#v:lmn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of structures, create the set of independent graphs and\n assignment possibilities.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign",
          "name": "mkDesignProblem",
          "package": "RNAdesign",
          "signature": "Int -\u003e [String] -\u003e String -\u003e DesignProblem",
          "source": "src/BioInf-RNAdesign.html#mkDesignProblem",
          "type": "function"
        },
        "index": {
          "description": "Given set of structures create the set of independent graphs and assignment possibilities",
          "hierarchy": "BioInf RNAdesign",
          "module": "BioInf.RNAdesign",
          "name": "mkDesignProblem",
          "normalized": "Int-\u003e[String]-\u003eString-\u003eDesignProblem",
          "package": "RNAdesign",
          "partial": "Design Problem",
          "signature": "Int-\u003e[String]-\u003eString-\u003eDesignProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign.html#v:mkDesignProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign",
          "name": "probabilityDefectAll",
          "package": "RNAdesign",
          "signature": "Vector a -\u003e [D1Secondary] -\u003e Double",
          "source": "src/BioInf-RNAdesign.html#probabilityDefectAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign",
          "module": "BioInf.RNAdesign",
          "name": "probabilityDefectAll",
          "normalized": "Vector a-\u003e[D Secondary]-\u003eDouble",
          "package": "RNAdesign",
          "partial": "Defect All",
          "signature": "Vector a-\u003e[D Secondary]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign.html#v:probabilityDefectAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve the optimization task. Each possible optimization function is\n given here. Try to keep the functions defined here in sync with some\n (non-existent ;-) documentation.\n\u003c/p\u003e",
          "module": "BioInf.RNAdesign",
          "name": "resolveOpt",
          "package": "RNAdesign",
          "signature": "String -\u003e t -\u003e Primary -\u003e [D1Secondary] -\u003e Double",
          "source": "src/BioInf-RNAdesign.html#resolveOpt",
          "type": "function"
        },
        "index": {
          "description": "Resolve the optimization task Each possible optimization function is given here Try to keep the functions defined here in sync with some non-existent documentation",
          "hierarchy": "BioInf RNAdesign",
          "module": "BioInf.RNAdesign",
          "name": "resolveOpt",
          "normalized": "String-\u003ea-\u003ePrimary-\u003e[D Secondary]-\u003eDouble",
          "package": "RNAdesign",
          "partial": "Opt",
          "signature": "String-\u003et-\u003ePrimary-\u003e[D Secondary]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign.html#v:resolveOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAdesign",
          "name": "scoreSequence",
          "package": "RNAdesign",
          "signature": "String -\u003e Vienna2004 -\u003e DesignProblem -\u003e Primary -\u003e Score",
          "source": "src/BioInf-RNAdesign.html#scoreSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAdesign",
          "module": "BioInf.RNAdesign",
          "name": "scoreSequence",
          "normalized": "String-\u003eVienna-\u003eDesignProblem-\u003ePrimary-\u003eScore",
          "package": "RNAdesign",
          "partial": "Sequence",
          "signature": "String-\u003eVienna-\u003eDesignProblem-\u003ePrimary-\u003eScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAdesign/docs/BioInf-RNAdesign.html#v:scoreSequence"
      }
    }
  ]
]