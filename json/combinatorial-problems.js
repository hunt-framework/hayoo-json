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
        "word": "combinatorial-problems"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for the representation and manipulation of satisfiability problems.\n Currently this is expected to only be 3-SAT however I do not think the \n code is particularly limited to 3-SAT. The approach taken is that there\n is a complex data structure called SATProblem, which contains both the \n problem and the solution (settings of variables). In addition it contains \n a number additional fields that allow for making changes quickly, such \n as a table of clause positions. This is a Map from clause index to the \n number of variable terms that are currently set to true. \n\u003c/p\u003e\u003cp\u003eCurrently the only function for quickly changing a problem is the flipping \n of a single variable. I think some other low level operations for finding \n clauses not currently evaluating to true and so on would be useful.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CombinatorialOptimisation.SAT",
          "name": "SAT",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-SAT.html",
          "type": "module"
        },
        "index": {
          "description": "library for the representation and manipulation of satisfiability problems Currently this is expected to only be SAT however do not think the code is particularly limited to SAT The approach taken is that there is complex data structure called SATProblem which contains both the problem and the solution settings of variables In addition it contains number additional fields that allow for making changes quickly such as table of clause positions This is Map from clause index to the number of variable terms that are currently set to true Currently the only function for quickly changing problem is the flipping of single variable think some other low level operations for finding clauses not currently evaluating to true and so on would be useful",
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "SAT",
          "package": "combinatorial-problems",
          "partial": "SAT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.SAT",
          "name": "SATProblem",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
          "type": "data"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "SATProblem",
          "package": "combinatorial-problems",
          "partial": "SATProblem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#t:SATProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.SAT",
          "name": "SATProblem",
          "package": "combinatorial-problems",
          "signature": "SATProblem",
          "source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "SATProblem",
          "package": "combinatorial-problems",
          "partial": "SATProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:SATProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.SAT",
          "name": "clauseLookUp",
          "package": "combinatorial-problems",
          "signature": "Int -\u003e ([Int], [Int])",
          "source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "clauseLookUp",
          "normalized": "Int-\u003e([Int],[Int])",
          "package": "combinatorial-problems",
          "partial": "Look Up",
          "signature": "Int-\u003e([Int],[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:clauseLookUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.SAT",
          "name": "clausePosition",
          "package": "combinatorial-problems",
          "signature": "IntMap Int",
          "source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "clausePosition",
          "package": "combinatorial-problems",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:clausePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first low level operation. Takes a problem and changes the \n      setting of the indexed variable from true to false. This is \n      expected to be used in conjunction with other program logic\n      to select which index to flip. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.SAT",
          "name": "flipVariable",
          "package": "combinatorial-problems",
          "signature": "Int -\u003e SATProblem -\u003e (SATProblem, Int)",
          "source": "src/CombinatorialOptimisation-SAT.html#flipVariable",
          "type": "function"
        },
        "index": {
          "description": "The first low level operation Takes problem and changes the setting of the indexed variable from true to false This is expected to be used in conjunction with other program logic to select which index to flip",
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "flipVariable",
          "normalized": "Int-\u003eSATProblem-\u003e(SATProblem,Int)",
          "package": "combinatorial-problems",
          "partial": "Variable",
          "signature": "Int-\u003eSATProblem-\u003e(SATProblem,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:flipVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the purposes of getting a general impression of the state of the system, \n      it returns the number of variables in the True, and False positions. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.SAT",
          "name": "getTrueFalseCount",
          "package": "combinatorial-problems",
          "signature": "SATProblem -\u003e (Int, Int)",
          "source": "src/CombinatorialOptimisation-SAT.html#getTrueFalseCount",
          "type": "function"
        },
        "index": {
          "description": "For the purposes of getting general impression of the state of the system it returns the number of variables in the True and False positions",
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "getTrueFalseCount",
          "normalized": "SATProblem-\u003e(Int,Int)",
          "package": "combinatorial-problems",
          "partial": "True False Count",
          "signature": "SATProblem-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:getTrueFalseCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI am not sure how often this will be used in practice, as randomly created problems\n      often seem to be quite easy to solve. Requires a source of random numbers, the number\n      of variables and the number of clauses to create, in that order. It is assumed \n      that 3-SAT problems are the type wanted. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.SAT",
          "name": "makeRandomSATProblem",
          "package": "combinatorial-problems",
          "signature": "g -\u003e Int -\u003e Int -\u003e SATProblem",
          "source": "src/CombinatorialOptimisation-SAT.html#makeRandomSATProblem",
          "type": "function"
        },
        "index": {
          "description": "am not sure how often this will be used in practice as randomly created problems often seem to be quite easy to solve Requires source of random numbers the number of variables and the number of clauses to create in that order It is assumed that SAT problems are the type wanted",
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "makeRandomSATProblem",
          "normalized": "a-\u003eInt-\u003eInt-\u003eSATProblem",
          "package": "combinatorial-problems",
          "partial": "Random SATProblem",
          "signature": "g-\u003eInt-\u003eInt-\u003eSATProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:makeRandomSATProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.SAT",
          "name": "numClauses",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "numClauses",
          "package": "combinatorial-problems",
          "partial": "Clauses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:numClauses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.SAT",
          "name": "numSATEDClauses",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "numSATEDClauses",
          "package": "combinatorial-problems",
          "partial": "SATEDClauses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:numSATEDClauses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of unsatisfied clauses in the problem, the inverse of \u003ccode\u003enumSATEDClauses\u003c/code\u003e \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.SAT",
          "name": "numUnSATEDClauses",
          "package": "combinatorial-problems",
          "signature": "SATProblem -\u003e Int",
          "source": "src/CombinatorialOptimisation-SAT.html#numUnSATEDClauses",
          "type": "function"
        },
        "index": {
          "description": "The number of unsatisfied clauses in the problem the inverse of numSATEDClauses",
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "numUnSATEDClauses",
          "normalized": "SATProblem-\u003eInt",
          "package": "combinatorial-problems",
          "partial": "Un SATEDClauses",
          "signature": "SATProblem-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:numUnSATEDClauses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.SAT",
          "name": "numVariables",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "numVariables",
          "package": "combinatorial-problems",
          "partial": "Variables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:numVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor rapid initialisation of problem instances for usage in stochastic algorithms. \n      Specifically expected to be used for genetic algorithms and other forms of \n      stochastic meta-heuristic. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.SAT",
          "name": "randomiseVariables",
          "package": "combinatorial-problems",
          "signature": "g -\u003e SATProblem -\u003e SATProblem",
          "source": "src/CombinatorialOptimisation-SAT.html#randomiseVariables",
          "type": "function"
        },
        "index": {
          "description": "For rapid initialisation of problem instances for usage in stochastic algorithms Specifically expected to be used for genetic algorithms and other forms of stochastic meta-heuristic",
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "randomiseVariables",
          "normalized": "a-\u003eSATProblem-\u003eSATProblem",
          "package": "combinatorial-problems",
          "partial": "Variables",
          "signature": "g-\u003eSATProblem-\u003eSATProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:randomiseVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative constructor for the data structure. Takes only those elements that can \n      not be derived and correctly initialises the other components, such as calculating \n      how many clauses are currently evaluating to true. Requires the number of clauses,\n      the number of variables, the lookup function for variables (variable index \n      returning two lists, the first is the indexes of clauses in which this variable \n      is present, the second list the indexes of clauses in which the inverse of this variable \n      is present), the lookup table for clauses (clause index to lists of variable indexes) \n      and the current settings of each variable. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.SAT",
          "name": "satproblem",
          "package": "combinatorial-problems",
          "signature": "Int -\u003e Int -\u003e (Int -\u003e ([Int], [Int])) -\u003e (Int -\u003e ([Int], [Int])) -\u003e IntMap Bool -\u003e SATProblem",
          "source": "src/CombinatorialOptimisation-SAT.html#satproblem",
          "type": "function"
        },
        "index": {
          "description": "Alternative constructor for the data structure Takes only those elements that can not be derived and correctly initialises the other components such as calculating how many clauses are currently evaluating to true Requires the number of clauses the number of variables the lookup function for variables variable index returning two lists the first is the indexes of clauses in which this variable is present the second list the indexes of clauses in which the inverse of this variable is present the lookup table for clauses clause index to lists of variable indexes and the current settings of each variable",
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "satproblem",
          "normalized": "Int-\u003eInt-\u003e(Int-\u003e([Int],[Int]))-\u003e(Int-\u003e([Int],[Int]))-\u003eIntMap Bool-\u003eSATProblem",
          "package": "combinatorial-problems",
          "signature": "Int-\u003eInt-\u003e(Int-\u003e([Int],[Int]))-\u003e(Int-\u003e([Int],[Int]))-\u003eIntMap Bool-\u003eSATProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:satproblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor rapid initialisation of problem instances. This fixes the setting of \n      all variables to either true or false. The effect this has on the number \n      of clauses that evaluate to true is unknown until it is carried out. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.SAT",
          "name": "setAllVars",
          "package": "combinatorial-problems",
          "signature": "Bool -\u003e SATProblem -\u003e SATProblem",
          "source": "src/CombinatorialOptimisation-SAT.html#setAllVars",
          "type": "function"
        },
        "index": {
          "description": "For rapid initialisation of problem instances This fixes the setting of all variables to either true or false The effect this has on the number of clauses that evaluate to true is unknown until it is carried out",
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "setAllVars",
          "normalized": "Bool-\u003eSATProblem-\u003eSATProblem",
          "package": "combinatorial-problems",
          "partial": "All Vars",
          "signature": "Bool-\u003eSATProblem-\u003eSATProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:setAllVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial display function, for usage in show, displays some general statistics about \n      the solution status. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.SAT",
          "name": "summariseSAT",
          "package": "combinatorial-problems",
          "signature": "SATProblem -\u003e String",
          "source": "src/CombinatorialOptimisation-SAT.html#summariseSAT",
          "type": "function"
        },
        "index": {
          "description": "Partial display function for usage in show displays some general statistics about the solution status",
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "summariseSAT",
          "normalized": "SATProblem-\u003eString",
          "package": "combinatorial-problems",
          "partial": "SAT",
          "signature": "SATProblem-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:summariseSAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.SAT",
          "name": "variableLookUp",
          "package": "combinatorial-problems",
          "signature": "Int -\u003e ([Int], [Int])",
          "source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "variableLookUp",
          "normalized": "Int-\u003e([Int],[Int])",
          "package": "combinatorial-problems",
          "partial": "Look Up",
          "signature": "Int-\u003e([Int],[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:variableLookUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.SAT",
          "name": "variablePosition",
          "package": "combinatorial-problems",
          "signature": "IntMap Bool",
          "source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation SAT",
          "module": "CombinatorialOptimisation.SAT",
          "name": "variablePosition",
          "package": "combinatorial-problems",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:variablePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for the representation and manipulation of Time Tabling Problems.\n Still experimental and not particularly general. The underlying problem \n description is that used by the International Timetabling Competition, \n and the code is rather specialised towards that, with the aim of being used \n for meta-heuristics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "TIM",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html",
          "type": "module"
        },
        "index": {
          "description": "library for the representation and manipulation of Time Tabling Problems Still experimental and not particularly general The underlying problem description is that used by the International Timetabling Competition and the code is rather specialised towards that with the aim of being used for meta-heuristics",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "TIM",
          "package": "combinatorial-problems",
          "partial": "TIM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "Counter",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html#Counter",
          "type": "type"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "Counter",
          "package": "combinatorial-problems",
          "partial": "Counter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:Counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "DayNumber",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html#DayNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "DayNumber",
          "package": "combinatorial-problems",
          "partial": "Day Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:DayNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "DaySlot",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html#DaySlot",
          "type": "type"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "DaySlot",
          "package": "combinatorial-problems",
          "partial": "Day Slot",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:DaySlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "EventNumber",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html#EventNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "EventNumber",
          "package": "combinatorial-problems",
          "partial": "Event Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:EventNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "FeatureNumber",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html#FeatureNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "FeatureNumber",
          "package": "combinatorial-problems",
          "partial": "Feature Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:FeatureNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "PersonNumber",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html#PersonNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "PersonNumber",
          "package": "combinatorial-problems",
          "partial": "Person Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:PersonNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "RoomNumber",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html#RoomNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "RoomNumber",
          "package": "combinatorial-problems",
          "partial": "Room Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:RoomNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "TimeSlot",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeSlot",
          "type": "type"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "TimeSlot",
          "package": "combinatorial-problems",
          "partial": "Time Slot",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:TimeSlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCore concepts, location, timeslot, person, two events cannot happen in the same place at the same time.\n    This version expects a constrained data set, so that the roomEvent lookup for example only yields events that can \n    reasonably be scheduled in that room. \n\u003c/p\u003e\u003cp\u003eOriginally I intended the objectives (low over scheduling of people) and the soft objectives to be handled somewhere else.\n    At this time, I am unsure how to abstract this, and I want a system that works now, so I will over specialise to the \n    time tabling competition specifications. Hopefully this can be rectified in a later version. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "TimeTable",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "data"
        },
        "index": {
          "description": "Core concepts location timeslot person two events cannot happen in the same place at the same time This version expects constrained data set so that the roomEvent lookup for example only yields events that can reasonably be scheduled in that room Originally intended the objectives low over scheduling of people and the soft objectives to be handled somewhere else At this time am unsure how to abstract this and want system that works now so will over specialise to the time tabling competition specifications Hopefully this can be rectified in later version",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "TimeTable",
          "package": "combinatorial-problems",
          "partial": "Time Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:TimeTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "TimeTable",
          "package": "combinatorial-problems",
          "signature": "TimeTable",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "TimeTable",
          "package": "combinatorial-problems",
          "partial": "Time Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:TimeTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust a combination of existing useful functions. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "currentlyScheduledEvents",
          "package": "combinatorial-problems",
          "signature": "TimeTable -\u003e [EventNumber]",
          "source": "src/CombinatorialOptimisation-TIM.html#currentlyScheduledEvents",
          "type": "function"
        },
        "index": {
          "description": "Just combination of existing useful functions",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "currentlyScheduledEvents",
          "normalized": "TimeTable-\u003e[EventNumber]",
          "package": "combinatorial-problems",
          "partial": "Scheduled Events",
          "signature": "TimeTable-\u003e[EventNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:currentlyScheduledEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "daynumberDecode",
          "package": "combinatorial-problems",
          "signature": "TimeSlot -\u003e DayNumber",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "daynumberDecode",
          "normalized": "TimeSlot-\u003eDayNumber",
          "package": "combinatorial-problems",
          "partial": "Decode",
          "signature": "TimeSlot-\u003eDayNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:daynumberDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "dayslotDecode",
          "package": "combinatorial-problems",
          "signature": "TimeSlot -\u003e DaySlot",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "dayslotDecode",
          "normalized": "TimeSlot-\u003eDaySlot",
          "package": "combinatorial-problems",
          "partial": "Decode",
          "signature": "TimeSlot-\u003eDaySlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:dayslotDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFails silently if the event is not currently scheduled. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "descheduleEvent",
          "package": "combinatorial-problems",
          "signature": "EventNumber -\u003e TimeTable -\u003e TimeTable",
          "source": "src/CombinatorialOptimisation-TIM.html#descheduleEvent",
          "type": "function"
        },
        "index": {
          "description": "Fails silently if the event is not currently scheduled",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "descheduleEvent",
          "normalized": "EventNumber-\u003eTimeTable-\u003eTimeTable",
          "package": "combinatorial-problems",
          "partial": "Event",
          "signature": "EventNumber-\u003eTimeTable-\u003eTimeTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:descheduleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFails silently if the time slot and room number are not booked. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "descheduleSlot",
          "package": "combinatorial-problems",
          "signature": "TimeSlot -\u003e RoomNumber -\u003e TimeTable -\u003e TimeTable",
          "source": "src/CombinatorialOptimisation-TIM.html#descheduleSlot",
          "type": "function"
        },
        "index": {
          "description": "Fails silently if the time slot and room number are not booked",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "descheduleSlot",
          "normalized": "TimeSlot-\u003eRoomNumber-\u003eTimeTable-\u003eTimeTable",
          "package": "combinatorial-problems",
          "partial": "Slot",
          "signature": "TimeSlot-\u003eRoomNumber-\u003eTimeTable-\u003eTimeTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:descheduleSlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "eventLocation",
          "package": "combinatorial-problems",
          "signature": "Map EventNumber (TimeSlot, RoomNumber)",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "eventLocation",
          "normalized": "Map EventNumber(TimeSlot,RoomNumber)",
          "package": "combinatorial-problems",
          "partial": "Location",
          "signature": "Map EventNumber(TimeSlot,RoomNumber)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:eventLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "eventPersonLookup",
          "package": "combinatorial-problems",
          "signature": "EventNumber -\u003e [PersonNumber]",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "eventPersonLookup",
          "normalized": "EventNumber-\u003e[PersonNumber]",
          "package": "combinatorial-problems",
          "partial": "Person Lookup",
          "signature": "EventNumber-\u003e[PersonNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:eventPersonLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "eventRoomLookup",
          "package": "combinatorial-problems",
          "signature": "EventNumber -\u003e [RoomNumber]",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "eventRoomLookup",
          "normalized": "EventNumber-\u003e[RoomNumber]",
          "package": "combinatorial-problems",
          "partial": "Room Lookup",
          "signature": "EventNumber-\u003e[RoomNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:eventRoomLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "eventsInDay",
          "package": "combinatorial-problems",
          "signature": "Map (DayNumber, PersonNumber) Counter",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "eventsInDay",
          "normalized": "Map(DayNumber,PersonNumber)Counter",
          "package": "combinatorial-problems",
          "partial": "In Day",
          "signature": "Map(DayNumber,PersonNumber)Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:eventsInDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe objective function as specific by the 2002 competition rules. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "ittcObjectiveValue",
          "package": "combinatorial-problems",
          "signature": "TimeTable -\u003e Int",
          "source": "src/CombinatorialOptimisation-TIM.html#ittcObjectiveValue",
          "type": "function"
        },
        "index": {
          "description": "The objective function as specific by the competition rules",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "ittcObjectiveValue",
          "normalized": "TimeTable-\u003eInt",
          "package": "combinatorial-problems",
          "partial": "Objective Value",
          "signature": "TimeTable-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:ittcObjectiveValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe validity function as specific by the 2002 competition rules. Basically no clashes at this point.\n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "ittcValidity",
          "package": "combinatorial-problems",
          "signature": "TimeTable -\u003e Bool",
          "source": "src/CombinatorialOptimisation-TIM.html#ittcValidity",
          "type": "function"
        },
        "index": {
          "description": "The validity function as specific by the competition rules Basically no clashes at this point",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "ittcValidity",
          "normalized": "TimeTable-\u003eBool",
          "package": "combinatorial-problems",
          "partial": "Validity",
          "signature": "TimeTable-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:ittcValidity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "lastDay",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "lastDay",
          "package": "combinatorial-problems",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:lastDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "lastSlotOfDay",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "lastSlotOfDay",
          "package": "combinatorial-problems",
          "partial": "Slot Of Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:lastSlotOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "lastSlotOfDayCounter",
          "package": "combinatorial-problems",
          "signature": "Counter",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "lastSlotOfDayCounter",
          "package": "combinatorial-problems",
          "partial": "Slot Of Day Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:lastSlotOfDayCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "locationEvent",
          "package": "combinatorial-problems",
          "signature": "Map (TimeSlot, RoomNumber) EventNumber",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "locationEvent",
          "normalized": "Map(TimeSlot,RoomNumber)EventNumber",
          "package": "combinatorial-problems",
          "partial": "Event",
          "signature": "Map(TimeSlot,RoomNumber)EventNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:locationEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "moreThanTwoEventsCounter",
          "package": "combinatorial-problems",
          "signature": "Counter",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "moreThanTwoEventsCounter",
          "package": "combinatorial-problems",
          "partial": "Than Two Events Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:moreThanTwoEventsCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "numberOfEvents",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "numberOfEvents",
          "package": "combinatorial-problems",
          "partial": "Of Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:numberOfEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "numberOfPeople",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "numberOfPeople",
          "package": "combinatorial-problems",
          "partial": "Of People",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:numberOfPeople"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "numberOfRooms",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "numberOfRooms",
          "package": "combinatorial-problems",
          "partial": "Of Rooms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:numberOfRooms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "numberOfTimeSlots",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "numberOfTimeSlots",
          "package": "combinatorial-problems",
          "partial": "Of Time Slots",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:numberOfTimeSlots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "overSchedule",
          "package": "combinatorial-problems",
          "signature": "Counter",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "overSchedule",
          "package": "combinatorial-problems",
          "partial": "Schedule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:overSchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "personEventLookup",
          "package": "combinatorial-problems",
          "signature": "PersonNumber -\u003e [EventNumber]",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "personEventLookup",
          "normalized": "PersonNumber-\u003e[EventNumber]",
          "package": "combinatorial-problems",
          "partial": "Event Lookup",
          "signature": "PersonNumber-\u003e[EventNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:personEventLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "personUsage",
          "package": "combinatorial-problems",
          "signature": "Map (TimeSlot, PersonNumber) Counter",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "personUsage",
          "normalized": "Map(TimeSlot,PersonNumber)Counter",
          "package": "combinatorial-problems",
          "partial": "Usage",
          "signature": "Map(TimeSlot,PersonNumber)Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:personUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "roomEventLookup",
          "package": "combinatorial-problems",
          "signature": "RoomNumber -\u003e [EventNumber]",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "roomEventLookup",
          "normalized": "RoomNumber-\u003e[EventNumber]",
          "package": "combinatorial-problems",
          "partial": "Event Lookup",
          "signature": "RoomNumber-\u003e[EventNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:roomEventLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFails silently and does no update the schedule if the very hard constraints fail. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "schedule",
          "package": "combinatorial-problems",
          "signature": "TimeSlot -\u003e RoomNumber -\u003e EventNumber -\u003e TimeTable -\u003e TimeTable",
          "source": "src/CombinatorialOptimisation-TIM.html#schedule",
          "type": "function"
        },
        "index": {
          "description": "Fails silently and does no update the schedule if the very hard constraints fail",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "schedule",
          "normalized": "TimeSlot-\u003eRoomNumber-\u003eEventNumber-\u003eTimeTable-\u003eTimeTable",
          "package": "combinatorial-problems",
          "signature": "TimeSlot-\u003eRoomNumber-\u003eEventNumber-\u003eTimeTable-\u003eTimeTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "singleEventInDayCounter",
          "package": "combinatorial-problems",
          "signature": "Counter",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "singleEventInDayCounter",
          "package": "combinatorial-problems",
          "partial": "Event In Day Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:singleEventInDayCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple spread sheet display seems like a good idea. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "timeTableDetailsAsCSV",
          "package": "combinatorial-problems",
          "signature": "TimeTable -\u003e String",
          "source": "src/CombinatorialOptimisation-TIM.html#timeTableDetailsAsCSV",
          "type": "function"
        },
        "index": {
          "description": "simple spread sheet display seems like good idea",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "timeTableDetailsAsCSV",
          "normalized": "TimeTable-\u003eString",
          "package": "combinatorial-problems",
          "partial": "Table Details As CSV",
          "signature": "TimeTable-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:timeTableDetailsAsCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe a helper, making it public anyway. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "timeTableForRoomAsCSV",
          "package": "combinatorial-problems",
          "signature": "TimeTable -\u003e RoomNumber -\u003e String",
          "source": "src/CombinatorialOptimisation-TIM.html#timeTableForRoomAsCSV",
          "type": "function"
        },
        "index": {
          "description": "Maybe helper making it public anyway",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "timeTableForRoomAsCSV",
          "normalized": "TimeTable-\u003eRoomNumber-\u003eString",
          "package": "combinatorial-problems",
          "partial": "Table For Room As CSV",
          "signature": "TimeTable-\u003eRoomNumber-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:timeTableForRoomAsCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TIM",
          "name": "unscheduledEvents",
          "package": "combinatorial-problems",
          "signature": "[EventNumber]",
          "source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "unscheduledEvents",
          "normalized": "[EventNumber]",
          "package": "combinatorial-problems",
          "partial": "Events",
          "signature": "[EventNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:unscheduledEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting off the two parts of show, so we have a simple show for the state of the solution, \n    a more complex solution description and the constant constrained problem.\n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "viewConstrainedProblem",
          "package": "combinatorial-problems",
          "signature": "TimeTable -\u003e String",
          "source": "src/CombinatorialOptimisation-TIM.html#viewConstrainedProblem",
          "type": "function"
        },
        "index": {
          "description": "Splitting off the two parts of show so we have simple show for the state of the solution more complex solution description and the constant constrained problem",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "viewConstrainedProblem",
          "normalized": "TimeTable-\u003eString",
          "package": "combinatorial-problems",
          "partial": "Constrained Problem",
          "signature": "TimeTable-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:viewConstrainedProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe other part of the time table data type. See the current status of the solution. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TIM",
          "name": "viewTimeTableDetails",
          "package": "combinatorial-problems",
          "signature": "TimeTable -\u003e String",
          "source": "src/CombinatorialOptimisation-TIM.html#viewTimeTableDetails",
          "type": "function"
        },
        "index": {
          "description": "The other part of the time table data type See the current status of the solution",
          "hierarchy": "CombinatorialOptimisation TIM",
          "module": "CombinatorialOptimisation.TIM",
          "name": "viewTimeTableDetails",
          "normalized": "TimeTable-\u003eString",
          "package": "combinatorial-problems",
          "partial": "Time Table Details",
          "signature": "TimeTable-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:viewTimeTableDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple library for fixed point arithmetic. Pure Haskell style, \n unlikely to be efficient. Really this has been added as a bit of \n a hack at the present time to remove rounding errors in the TSP \n implementation (which was having them from the use of Float and Double).\n Not intended to be a full library on it's own, but I guess I see what happens.\n\u003c/p\u003e\u003cp\u003eInternally uses Int64 as the data type and this is then divided to 32 bits below \n the point, 31 above and the sign is still in place. \n Basic arithmetic becomes simple integer arithmetic (what I really really want), \n multiplication and division has to make use of conversion to Integer type and \n shifting, probably not that fast. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "FixedPoint",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TSP-FixedPoint.html",
          "type": "module"
        },
        "index": {
          "description": "Simple library for fixed point arithmetic Pure Haskell style unlikely to be efficient Really this has been added as bit of hack at the present time to remove rounding errors in the TSP implementation which was having them from the use of Float and Double Not intended to be full library on it own but guess see what happens Internally uses Int64 as the data type and this is then divided to bits below the point above and the sign is still in place Basic arithmetic becomes simple integer arithmetic what really really want multiplication and division has to make use of conversion to Integer type and shifting probably not that fast",
          "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "FixedPoint",
          "package": "combinatorial-problems",
          "partial": "Fixed Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "FP",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#FP",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "FP",
          "package": "combinatorial-problems",
          "partial": "FP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#t:FP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "FP",
          "package": "combinatorial-problems",
          "signature": "FP Int64",
          "source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#FP",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "FP",
          "package": "combinatorial-problems",
          "partial": "FP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#v:FP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "doubleToFP",
          "package": "combinatorial-problems",
          "signature": "Double -\u003e FP",
          "source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#doubleToFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "doubleToFP",
          "normalized": "Double-\u003eFP",
          "package": "combinatorial-problems",
          "partial": "To FP",
          "signature": "Double-\u003eFP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#v:doubleToFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "fpToDouble",
          "package": "combinatorial-problems",
          "signature": "FP -\u003e Double",
          "source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#fpToDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "fpToDouble",
          "normalized": "FP-\u003eDouble",
          "package": "combinatorial-problems",
          "partial": "To Double",
          "signature": "FP-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#v:fpToDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "unwrappedFP",
          "package": "combinatorial-problems",
          "signature": "Double -\u003e Int64",
          "source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#unwrappedFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
          "module": "CombinatorialOptimisation.TSP.FixedPoint",
          "name": "unwrappedFP",
          "normalized": "Double-\u003eInt",
          "package": "combinatorial-problems",
          "partial": "FP",
          "signature": "Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#v:unwrappedFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for the representation and manipulation of travelling salesperson\n problems.\n The approach taken is the creation of a complex data structure called \n TSPProblem which contains both the problem, the current solution and \n the current value of the route.\n The route is stored as a dictionary (\u003ccode\u003eData.Map\u003c/code\u003e) of vertex indexes\n to a pair of values, the previous vertex and the next vertex in the\n sequence. This is to facilitate changing the route quickly, and\n avoid searching for data in lists.\n\u003c/p\u003e\u003cp\u003eThe data structure also contains two additional fields, the \n \u003ccode\u003erouteElementToIndex\u003c/code\u003e and \u003ccode\u003eindexToRouteElement\u003c/code\u003e components.\n These exist to allow manipulation either by the vertex number\n or the position in the current solution. \n Solutions are hamiltonian cycles.\n For ease of reasoning it is recommended that users do not \n attempt to move vertex 0, or index 0, so that solutions\n are cycles from 0 to 0. I may change this in the future to \n lock this down a bit. In the meantime, there is no\n actual problem with making these changes, however \n later manipulations may not match up clearly with \n the way the show routines work.\n\u003c/p\u003e\u003cp\u003eCurrently only two functions are provided for manipulating routes,\n either by position in the sequence (\u003ccode\u003eexchangeCitiesOnIndex\u003c/code\u003e) or \n by vertex name (\u003ccode\u003eexchangeCities\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eI am not sure how this will clearly support meta-heuristics that\n work by deleting edges and recombining subsequences. However \n since I am storing association lists I think it should be possible \n to make this work, I will worry about it later.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "TSP",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TSP.html",
          "type": "module"
        },
        "index": {
          "description": "library for the representation and manipulation of travelling salesperson problems The approach taken is the creation of complex data structure called TSPProblem which contains both the problem the current solution and the current value of the route The route is stored as dictionary Data.Map of vertex indexes to pair of values the previous vertex and the next vertex in the sequence This is to facilitate changing the route quickly and avoid searching for data in lists The data structure also contains two additional fields the routeElementToIndex and indexToRouteElement components These exist to allow manipulation either by the vertex number or the position in the current solution Solutions are hamiltonian cycles For ease of reasoning it is recommended that users do not attempt to move vertex or index so that solutions are cycles from to may change this in the future to lock this down bit In the meantime there is no actual problem with making these changes however later manipulations may not match up clearly with the way the show routines work Currently only two functions are provided for manipulating routes either by position in the sequence exchangeCitiesOnIndex or by vertex name exchangeCities am not sure how this will clearly support meta-heuristics that work by deleting edges and recombining subsequences However since am storing association lists think it should be possible to make this work will worry about it later",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "TSP",
          "package": "combinatorial-problems",
          "partial": "TSP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are three possible internal storage forms. A full explicit matrix, an upper triangular matrix or recomputation \n      from data points. The advantage of full explicit is speed, but it takes more memory. It is also the only option for \n      asymmetric TSP problems. The triangular matrix is also fast, but can only be used in symmetric problems, and also \n      still requires quite a bit of memory. Recomputation is the last option, it is slow because it is no longer a lookup\n      table, but will take much less room. Can only be used with problems where the distance between two points can be\n      calculated. Currently I am only supporting symmetric TSPs for this.\n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "InternalStorage",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TSP.html#InternalStorage",
          "type": "data"
        },
        "index": {
          "description": "There are three possible internal storage forms full explicit matrix an upper triangular matrix or recomputation from data points The advantage of full explicit is speed but it takes more memory It is also the only option for asymmetric TSP problems The triangular matrix is also fast but can only be used in symmetric problems and also still requires quite bit of memory Recomputation is the last option it is slow because it is no longer lookup table but will take much less room Can only be used with problems where the distance between two points can be calculated Currently am only supporting symmetric TSPs for this",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "InternalStorage",
          "package": "combinatorial-problems",
          "partial": "Internal Storage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#t:InternalStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type for carrying the combination problem and solution to \n      the TSP. The route is stored as a dictionary of associations \n      from vertex name to a pair of values, the name of the preceding \n      vertex and the next vertex. This forms an infinite loop, so \n      use carefully.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003erouteElementToIndex\u003c/code\u003e/\u003ccode\u003eindexToRouteElement\u003c/code\u003e pair store \n      fixed indexes to the cities. This is intended to allow \n      a dumb heuristic to decide to switch elements 0 and 2, \n      knowing they must be separated by 1 element, rather than\n      vertices 0 and 2, which may be next to each other, or \n      very different parts of the cycle.\n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "TSPProblem",
          "package": "combinatorial-problems",
          "source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
          "type": "data"
        },
        "index": {
          "description": "The data type for carrying the combination problem and solution to the TSP The route is stored as dictionary of associations from vertex name to pair of values the name of the preceding vertex and the next vertex This forms an infinite loop so use carefully The routeElementToIndex indexToRouteElement pair store fixed indexes to the cities This is intended to allow dumb heuristic to decide to switch elements and knowing they must be separated by element rather than vertices and which may be next to each other or very different parts of the cycle",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "TSPProblem",
          "package": "combinatorial-problems",
          "partial": "TSPProblem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#t:TSPProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "ExplicitMatrix",
          "package": "combinatorial-problems",
          "signature": "ExplicitMatrix",
          "source": "src/CombinatorialOptimisation-TSP.html#InternalStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "ExplicitMatrix",
          "package": "combinatorial-problems",
          "partial": "Explicit Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:ExplicitMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "Recomputation",
          "package": "combinatorial-problems",
          "signature": "Recomputation",
          "source": "src/CombinatorialOptimisation-TSP.html#InternalStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "Recomputation",
          "package": "combinatorial-problems",
          "partial": "Recomputation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:Recomputation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "TSPProblem",
          "package": "combinatorial-problems",
          "signature": "TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "TSPProblem",
          "package": "combinatorial-problems",
          "partial": "TSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:TSPProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "TriangularMatrix",
          "package": "combinatorial-problems",
          "signature": "TriangularMatrix",
          "source": "src/CombinatorialOptimisation-TSP.html#InternalStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "TriangularMatrix",
          "package": "combinatorial-problems",
          "partial": "Triangular Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:TriangularMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "allVariations",
          "package": "combinatorial-problems",
          "signature": "Bool -\u003e [[Int]] -\u003e [[Int]]",
          "source": "src/CombinatorialOptimisation-TSP.html#allVariations",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "allVariations",
          "normalized": "Bool-\u003e[[Int]]-\u003e[[Int]]",
          "package": "combinatorial-problems",
          "partial": "Variations",
          "signature": "Bool-\u003e[[Int]]-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:allVariations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "cityNameToIndex",
          "package": "combinatorial-problems",
          "signature": "IntMap Int",
          "source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "cityNameToIndex",
          "package": "combinatorial-problems",
          "partial": "Name To Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:cityNameToIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternally all edge costs are stored as a fixed point values. \n     For external visibility however this function is provided, converting the values into floating point numbers. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "edgeCost",
          "package": "combinatorial-problems",
          "signature": "TSPProblem -\u003e Int -\u003e Int -\u003e a",
          "source": "src/CombinatorialOptimisation-TSP.html#edgeCost",
          "type": "function"
        },
        "index": {
          "description": "Internally all edge costs are stored as fixed point values For external visibility however this function is provided converting the values into floating point numbers",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "edgeCost",
          "normalized": "TSPProblem-\u003eInt-\u003eInt-\u003ea",
          "package": "combinatorial-problems",
          "partial": "Cost",
          "signature": "TSPProblem-\u003eInt-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:edgeCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "edgeCostI",
          "package": "combinatorial-problems",
          "signature": "Int -\u003e Int -\u003e FP",
          "source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "edgeCostI",
          "normalized": "Int-\u003eInt-\u003eFP",
          "package": "combinatorial-problems",
          "partial": "Cost",
          "signature": "Int-\u003eInt-\u003eFP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:edgeCostI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA brute force recalculation of the current length of the path. Use sparingly.\n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "evaluateRouteNaive",
          "package": "combinatorial-problems",
          "signature": "TSPProblem -\u003e TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#evaluateRouteNaive",
          "type": "function"
        },
        "index": {
          "description": "brute force recalculation of the current length of the path Use sparingly",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "evaluateRouteNaive",
          "normalized": "TSPProblem-\u003eTSPProblem",
          "package": "combinatorial-problems",
          "partial": "Route Naive",
          "signature": "TSPProblem-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:evaluateRouteNaive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWill generate an IntMap of the path, giving city to next and last city names as the structure.\n      This is effectively the edges involved in the process. Wow, how badly written was that. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "generateDirectionalRouteMap",
          "package": "combinatorial-problems",
          "signature": "TSPProblem -\u003e IntMap (Int, Int)",
          "source": "src/CombinatorialOptimisation-TSP.html#generateDirectionalRouteMap",
          "type": "function"
        },
        "index": {
          "description": "Will generate an IntMap of the path giving city to next and last city names as the structure This is effectively the edges involved in the process Wow how badly written was that",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "generateDirectionalRouteMap",
          "normalized": "TSPProblem-\u003eIntMap(Int,Int)",
          "package": "combinatorial-problems",
          "partial": "Directional Route Map",
          "signature": "TSPProblem-\u003eIntMap(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:generateDirectionalRouteMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "getTSPPathAsList",
          "package": "combinatorial-problems",
          "signature": "Int -\u003e TSPProblem -\u003e [Int]",
          "source": "src/CombinatorialOptimisation-TSP.html#getTSPPathAsList",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "getTSPPathAsList",
          "normalized": "Int-\u003eTSPProblem-\u003e[Int]",
          "package": "combinatorial-problems",
          "partial": "TSPPath As List",
          "signature": "Int-\u003eTSPProblem-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:getTSPPathAsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "indexToCityName",
          "package": "combinatorial-problems",
          "signature": "IntMap Int",
          "source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "indexToCityName",
          "package": "combinatorial-problems",
          "partial": "To City Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:indexToCityName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn implementation of kexchange methods as a series of combinators. kFragments\n      will break a problem at specified edges and give back the path segments. \n      allVariations will take a set of segments and give back every possible combination of them, \n      and their reversals (I feel this should be broken down further, due to similarities with the \n      stochastic segment reversal method). allVariations is also a more general function than \n      the others, not actually requiring reference to TSP. \n      minimumVariation is expected to be used with a set of paths (probably generated by the above two methods)\n      and give only the best.\n\u003c/p\u003e\u003cp\u003estochasticReversal and shuffleFragments are similarly not really approapriate just here, but for now they \n      stay. Together they allow for less detailed k-exchange methods, for example, rather than exhaustively creating \n      variations, we will use it as a mutator for a GA. For this we might want to only create 1 permutation, which \n      can be done as; kFragments \u003e\u003e\u003e shuffleFragments \u003e\u003e\u003e stochasticReversal \u003e\u003e\u003e as-\u003e[concat as] \u003e\u003e\u003e minimumVariation\n\u003c/p\u003e\u003cp\u003ekFragments will begin by being quite fragile. Please make sure that your input sequence is \n      assending and does not include duplicates. Remember to initialise your route before calling this. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "kFragments",
          "package": "combinatorial-problems",
          "signature": "[Int] -\u003e TSPProblem -\u003e [[Int]]",
          "source": "src/CombinatorialOptimisation-TSP.html#kFragments",
          "type": "function"
        },
        "index": {
          "description": "An implementation of kexchange methods as series of combinators kFragments will break problem at specified edges and give back the path segments allVariations will take set of segments and give back every possible combination of them and their reversals feel this should be broken down further due to similarities with the stochastic segment reversal method allVariations is also more general function than the others not actually requiring reference to TSP minimumVariation is expected to be used with set of paths probably generated by the above two methods and give only the best stochasticReversal and shuffleFragments are similarly not really approapriate just here but for now they stay Together they allow for less detailed k-exchange methods for example rather than exhaustively creating variations we will use it as mutator for GA For this we might want to only create permutation which can be done as kFragments shuffleFragments stochasticReversal as concat as minimumVariation kFragments will begin by being quite fragile Please make sure that your input sequence is assending and does not include duplicates Remember to initialise your route before calling this",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "kFragments",
          "normalized": "[Int]-\u003eTSPProblem-\u003e[[Int]]",
          "package": "combinatorial-problems",
          "partial": "Fragments",
          "signature": "[Int]-\u003eTSPProblem-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:kFragments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a TSPProblem instance for an Asymmetric TSP. That is, the distance\n      from A-B is the not necessarily the same as B-A. The actual route will \n      not be set up initially, the dictionaries will be empty. This could be \n      used directly for a global search system (branch and bound), or use in \n      conjunction with \u003ccode\u003esetRoute\u003c/code\u003e or \u003ccode\u003erandomiseRoute\u003c/code\u003e to initialise for local search. \n      Internal data structure is always fully explicit matrix.\n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "makeASymmetricTSPMap",
          "package": "combinatorial-problems",
          "signature": "(Double, Double) -\u003e Int -\u003e g -\u003e TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#makeASymmetricTSPMap",
          "type": "function"
        },
        "index": {
          "description": "Construct TSPProblem instance for an Asymmetric TSP That is the distance from A-B is the not necessarily the same as B-A The actual route will not be set up initially the dictionaries will be empty This could be used directly for global search system branch and bound or use in conjunction with setRoute or randomiseRoute to initialise for local search Internal data structure is always fully explicit matrix",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "makeASymmetricTSPMap",
          "normalized": "(Double,Double)-\u003eInt-\u003ea-\u003eTSPProblem",
          "package": "combinatorial-problems",
          "partial": "ASymmetric TSPMap",
          "signature": "(Double,Double)-\u003eInt-\u003eg-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:makeASymmetricTSPMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a TSPProblem instance for a Symmetric TSP. The route will not be\n      initially set up, the dictionaries will be empty. This does create the \n      vertices of the graph as points in a 2d space, and the lengths of edges \n      are calculated, so this supports all internal storage types. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "makeEuclideanTSPMap",
          "package": "combinatorial-problems",
          "signature": "InternalStorage -\u003e (Double, Double) -\u003e (Double, Double) -\u003e Int -\u003e g -\u003e TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#makeEuclideanTSPMap",
          "type": "function"
        },
        "index": {
          "description": "Construct TSPProblem instance for Symmetric TSP The route will not be initially set up the dictionaries will be empty This does create the vertices of the graph as points in space and the lengths of edges are calculated so this supports all internal storage types",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "makeEuclideanTSPMap",
          "normalized": "InternalStorage-\u003e(Double,Double)-\u003e(Double,Double)-\u003eInt-\u003ea-\u003eTSPProblem",
          "package": "combinatorial-problems",
          "partial": "Euclidean TSPMap",
          "signature": "InternalStorage-\u003e(Double,Double)-\u003e(Double,Double)-\u003eInt-\u003eg-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:makeEuclideanTSPMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a TSPProblem instance for a Symmetric TSP. That is, the distance\n      from A-B is the same as B-A. The actual route will not be set up initially,\n      the dictionaries will be empty. This could be used directly for a global \n      search system (branch and bound), or use in conjunction with \u003ccode\u003esetRoute\u003c/code\u003e or \n      \u003ccode\u003erandomiseRoute\u003c/code\u003e to initialise for local search. Should be noted that this\n      does not create locations and calculate distances, but rather randomly \n      assigns distances to each edge, making them symmetric. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "makeSymmetricTSPMap",
          "package": "combinatorial-problems",
          "signature": "InternalStorage -\u003e (Double, Double) -\u003e Int -\u003e g -\u003e TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#makeSymmetricTSPMap",
          "type": "function"
        },
        "index": {
          "description": "Construct TSPProblem instance for Symmetric TSP That is the distance from A-B is the same as B-A The actual route will not be set up initially the dictionaries will be empty This could be used directly for global search system branch and bound or use in conjunction with setRoute or randomiseRoute to initialise for local search Should be noted that this does not create locations and calculate distances but rather randomly assigns distances to each edge making them symmetric",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "makeSymmetricTSPMap",
          "normalized": "InternalStorage-\u003e(Double,Double)-\u003eInt-\u003ea-\u003eTSPProblem",
          "package": "combinatorial-problems",
          "partial": "Symmetric TSPMap",
          "signature": "InternalStorage-\u003e(Double,Double)-\u003eInt-\u003eg-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:makeSymmetricTSPMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "minimumVariation",
          "package": "combinatorial-problems",
          "signature": "TSPProblem -\u003e [[Int]] -\u003e TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#minimumVariation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "minimumVariation",
          "normalized": "TSPProblem-\u003e[[Int]]-\u003eTSPProblem",
          "package": "combinatorial-problems",
          "partial": "Variation",
          "signature": "TSPProblem-\u003e[[Int]]-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:minimumVariation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "numCities",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "numCities",
          "package": "combinatorial-problems",
          "partial": "Cities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:numCities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffles a simple list of cities and then passes off the work to setRoute. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "randomiseRoute",
          "package": "combinatorial-problems",
          "signature": "g -\u003e TSPProblem -\u003e TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#randomiseRoute",
          "type": "function"
        },
        "index": {
          "description": "Shuffles simple list of cities and then passes off the work to setRoute",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "randomiseRoute",
          "normalized": "a-\u003eTSPProblem-\u003eTSPProblem",
          "package": "combinatorial-problems",
          "partial": "Route",
          "signature": "g-\u003eTSPProblem-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:randomiseRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "routeMap",
          "package": "combinatorial-problems",
          "signature": "TSPProblem -\u003e IntMap Int",
          "source": "src/CombinatorialOptimisation-TSP.html#routeMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "routeMap",
          "normalized": "TSPProblem-\u003eIntMap Int",
          "package": "combinatorial-problems",
          "partial": "Map",
          "signature": "TSPProblem-\u003eIntMap Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:routeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a path through the system and a problem, insert the path into the system, \n      calculating distances and setting up appropriate look up tables. It does not\n      validate the list in terms of going through all the cities, or going through \n      a city more than once (though this is likely to break other parts of the system \n      very very fast). It does organise the list so that the starting node is vertex 0. \n\u003c/p\u003e\u003cp\u003eUses the \u003ccode\u003eevaluateRouteNaive\u003c/code\u003e to calculate the length of the path via a brute\n      force method. This is not expected to be used frequently. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "setRoute",
          "package": "combinatorial-problems",
          "signature": "[Int] -\u003e TSPProblem -\u003e TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#setRoute",
          "type": "function"
        },
        "index": {
          "description": "Take path through the system and problem insert the path into the system calculating distances and setting up appropriate look up tables It does not validate the list in terms of going through all the cities or going through city more than once though this is likely to break other parts of the system very very fast It does organise the list so that the starting node is vertex Uses the evaluateRouteNaive to calculate the length of the path via brute force method This is not expected to be used frequently",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "setRoute",
          "normalized": "[Int]-\u003eTSPProblem-\u003eTSPProblem",
          "package": "combinatorial-problems",
          "partial": "Route",
          "signature": "[Int]-\u003eTSPProblem-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:setRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the lookup table of a problem into a comma and newline delimited\n      string. This should facilitate copying into spreadsheets for checking the \n      problem being used and validating solutions by hand. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "showEdgeWeights",
          "package": "combinatorial-problems",
          "signature": "TSPProblem -\u003e String",
          "source": "src/CombinatorialOptimisation-TSP.html#showEdgeWeights",
          "type": "function"
        },
        "index": {
          "description": "Converts the lookup table of problem into comma and newline delimited string This should facilitate copying into spreadsheets for checking the problem being used and validating solutions by hand",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "showEdgeWeights",
          "normalized": "TSPProblem-\u003eString",
          "package": "combinatorial-problems",
          "partial": "Edge Weights",
          "signature": "TSPProblem-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:showEdgeWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "shuffleFragments",
          "package": "combinatorial-problems",
          "signature": "[a] -\u003e [[Int]] -\u003e [[Int]]",
          "source": "src/CombinatorialOptimisation-TSP.html#shuffleFragments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "shuffleFragments",
          "normalized": "[a]-\u003e[[Int]]-\u003e[[Int]]",
          "package": "combinatorial-problems",
          "partial": "Fragments",
          "signature": "[a]-\u003e[[Int]]-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:shuffleFragments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternally the value of the solution is stored as a fixed point value, stored in an Int64 data type. \n     For external visibility however this function is provided, converting the value into a floating point numbers. \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "solutionValue",
          "package": "combinatorial-problems",
          "signature": "TSPProblem -\u003e a",
          "source": "src/CombinatorialOptimisation-TSP.html#solutionValue",
          "type": "function"
        },
        "index": {
          "description": "Internally the value of the solution is stored as fixed point value stored in an Int64 data type For external visibility however this function is provided converting the value into floating point numbers",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "solutionValue",
          "normalized": "TSPProblem-\u003ea",
          "package": "combinatorial-problems",
          "partial": "Value",
          "signature": "TSPProblem-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:solutionValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "solutionValueI",
          "package": "combinatorial-problems",
          "signature": "FP",
          "source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "solutionValueI",
          "package": "combinatorial-problems",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:solutionValueI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CombinatorialOptimisation.TSP",
          "name": "stochasticReversal",
          "package": "combinatorial-problems",
          "signature": "[Bool] -\u003e [[Int]] -\u003e [[Int]]",
          "source": "src/CombinatorialOptimisation-TSP.html#stochasticReversal",
          "type": "function"
        },
        "index": {
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "stochasticReversal",
          "normalized": "[Bool]-\u003e[[Int]]-\u003e[[Int]]",
          "package": "combinatorial-problems",
          "partial": "Reversal",
          "signature": "[Bool]-\u003e[[Int]]-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:stochasticReversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWill perform a switch of 2 cities in the path. This is by city name, not current index\n      in the path. It looks up the current indexes by city name and passes the work off to \n      \u003ccode\u003eexchangeCitiesOnIndex\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "swapCities",
          "package": "combinatorial-problems",
          "signature": "Int -\u003e Int -\u003e TSPProblem -\u003e TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#swapCities",
          "type": "function"
        },
        "index": {
          "description": "Will perform switch of cities in the path This is by city name not current index in the path It looks up the current indexes by city name and passes the work off to exchangeCitiesOnIndex",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "swapCities",
          "normalized": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem",
          "package": "combinatorial-problems",
          "partial": "Cities",
          "signature": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:swapCities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the bulk of the work for exchanging elements of the cycle.\n      This version no longer assumes the indices are ordered due to confusion this\n      caused in my own code. In addition there was an oversight, when exchanging indices\n      0 and last. This is now fixed.\n\u003c/p\u003e",
          "module": "CombinatorialOptimisation.TSP",
          "name": "swapCitiesOnIndex",
          "package": "combinatorial-problems",
          "signature": "Int -\u003e Int -\u003e TSPProblem -\u003e TSPProblem",
          "source": "src/CombinatorialOptimisation-TSP.html#swapCitiesOnIndex",
          "type": "function"
        },
        "index": {
          "description": "Performs the bulk of the work for exchanging elements of the cycle This version no longer assumes the indices are ordered due to confusion this caused in my own code In addition there was an oversight when exchanging indices and last This is now fixed",
          "hierarchy": "CombinatorialOptimisation TSP",
          "module": "CombinatorialOptimisation.TSP",
          "name": "swapCitiesOnIndex",
          "normalized": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem",
          "package": "combinatorial-problems",
          "partial": "Cities On Index",
          "signature": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:swapCitiesOnIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe loading routines for the Conjunctive Normal Form (cnf) styled files\n that can be found on the SATLIB website. Relies upon the\n \u003ccode\u003eCombinatorialOptimisation.SAT\u003c/code\u003e library for the data structures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FileFormat.SATLIB",
          "name": "SATLIB",
          "package": "combinatorial-problems",
          "source": "src/FileFormat-SATLIB.html",
          "type": "module"
        },
        "index": {
          "description": "The loading routines for the Conjunctive Normal Form cnf styled files that can be found on the SATLIB website Relies upon the CombinatorialOptimisation.SAT library for the data structures",
          "hierarchy": "FileFormat SATLIB",
          "module": "FileFormat.SATLIB",
          "name": "SATLIB",
          "package": "combinatorial-problems",
          "partial": "SATLIB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-SATLIB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoading routine that takes the file path and returns a SATProblem. All variables will be set to false in the initial \nsetup, and the truth values of all clauses set appropriately. \n\u003c/p\u003e",
          "module": "FileFormat.SATLIB",
          "name": "loadCNFFile",
          "package": "combinatorial-problems",
          "signature": "FilePath -\u003e IO SATProblem",
          "source": "src/FileFormat-SATLIB.html#loadCNFFile",
          "type": "function"
        },
        "index": {
          "description": "Loading routine that takes the file path and returns SATProblem All variables will be set to false in the initial setup and the truth values of all clauses set appropriately",
          "hierarchy": "FileFormat SATLIB",
          "module": "FileFormat.SATLIB",
          "name": "loadCNFFile",
          "normalized": "FilePath-\u003eIO SATProblem",
          "package": "combinatorial-problems",
          "partial": "CNFFile",
          "signature": "FilePath-\u003eIO SATProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-SATLIB.html#v:loadCNFFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave routine for SATProblem, outputs back into SATLIB cnf format. The code \u003ccode\u003e(loadCNFFile f) \u003e\u003e= (saveAsCNF f)\u003c/code\u003e should \nhave no effect upon the file. All information such as variable settings and the truth values of clauses is lost.\nTo save extra information use standard prelude write file function with show. I will try to improve on that \nat some point. \n\u003c/p\u003e",
          "module": "FileFormat.SATLIB",
          "name": "saveAsCNF",
          "package": "combinatorial-problems",
          "signature": "FilePath -\u003e SATProblem -\u003e IO ()",
          "source": "src/FileFormat-SATLIB.html#saveAsCNF",
          "type": "function"
        },
        "index": {
          "description": "Save routine for SATProblem outputs back into SATLIB cnf format The code loadCNFFile saveAsCNF should have no effect upon the file All information such as variable settings and the truth values of clauses is lost To save extra information use standard prelude write file function with show will try to improve on that at some point",
          "hierarchy": "FileFormat SATLIB",
          "module": "FileFormat.SATLIB",
          "name": "saveAsCNF",
          "normalized": "FilePath-\u003eSATProblem-\u003eIO()",
          "package": "combinatorial-problems",
          "partial": "As CNF",
          "signature": "FilePath-\u003eSATProblem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-SATLIB.html#v:saveAsCNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe loading routines for the TIM file format. \n I am not sure what (if anything) TIM stands for.\n The format has been used by the |International Timetabling Competition|\n which has been run twice so far (2002,2007). Problems in this format can be found on \n their websites. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FileFormat.TIM",
          "name": "TIM",
          "package": "combinatorial-problems",
          "source": "src/FileFormat-TIM.html",
          "type": "module"
        },
        "index": {
          "description": "The loading routines for the TIM file format am not sure what if anything TIM stands for The format has been used by the International Timetabling Competition which has been run twice so far Problems in this format can be found on their websites",
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "TIM",
          "package": "combinatorial-problems",
          "partial": "TIM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is intended to be an internal format only, though I will provide access and visibility to it so that \n    it can be inspected by other programs. In practice I do not expect users to operate upon the raw problem, \n    but instead upon TimeTable.\n\u003c/p\u003e",
          "module": "FileFormat.TIM",
          "name": "RawTimeTableProblem",
          "package": "combinatorial-problems",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "data"
        },
        "index": {
          "description": "This is intended to be an internal format only though will provide access and visibility to it so that it can be inspected by other programs In practice do not expect users to operate upon the raw problem but instead upon TimeTable",
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "RawTimeTableProblem",
          "package": "combinatorial-problems",
          "partial": "Raw Time Table Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#t:RawTimeTableProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "RawTimeTableProblem",
          "package": "combinatorial-problems",
          "signature": "RawTimeTableProblem",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "RawTimeTableProblem",
          "package": "combinatorial-problems",
          "partial": "Raw Time Table Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:RawTimeTableProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the raw data to constrain problem. Only rooms that can reasonably be chosen (feature and size constraints) should be available for specific events and so on. \n    In short I am doing my own constraint (hard coded urg) processing here. \n\u003c/p\u003e",
          "module": "FileFormat.TIM",
          "name": "convertToConstrainedProblem",
          "package": "combinatorial-problems",
          "signature": "RawTimeTableProblem -\u003e TimeTable",
          "source": "src/FileFormat-TIM.html#convertToConstrainedProblem",
          "type": "function"
        },
        "index": {
          "description": "Use the raw data to constrain problem Only rooms that can reasonably be chosen feature and size constraints should be available for specific events and so on In short am doing my own constraint hard coded urg processing here",
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "convertToConstrainedProblem",
          "normalized": "RawTimeTableProblem-\u003eTimeTable",
          "package": "combinatorial-problems",
          "partial": "To Constrained Problem",
          "signature": "RawTimeTableProblem-\u003eTimeTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:convertToConstrainedProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a TIM file, and transform it into the constrained data format so that the look up tables no longer give back just ones and zeros, \n    but lists of valid options. This should be easier to work with. \n\u003c/p\u003e",
          "module": "FileFormat.TIM",
          "name": "loadTIMFile",
          "package": "combinatorial-problems",
          "signature": "String -\u003e IO TimeTable",
          "source": "src/FileFormat-TIM.html#loadTIMFile",
          "type": "function"
        },
        "index": {
          "description": "Load TIM file and transform it into the constrained data format so that the look up tables no longer give back just ones and zeros but lists of valid options This should be easier to work with",
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "loadTIMFile",
          "normalized": "String-\u003eIO TimeTable",
          "package": "combinatorial-problems",
          "partial": "TIMFile",
          "signature": "String-\u003eIO TimeTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:loadTIMFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad in a TIM file, but keep the data in the original form, as a large number of grids of bits.\n\u003c/p\u003e",
          "module": "FileFormat.TIM",
          "name": "loadTIMFileRaw",
          "package": "combinatorial-problems",
          "signature": "String -\u003e IO RawTimeTableProblem",
          "source": "src/FileFormat-TIM.html#loadTIMFileRaw",
          "type": "function"
        },
        "index": {
          "description": "Load in TIM file but keep the data in the original form as large number of grids of bits",
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "loadTIMFileRaw",
          "normalized": "String-\u003eIO RawTimeTableProblem",
          "package": "combinatorial-problems",
          "partial": "TIMFile Raw",
          "signature": "String-\u003eIO RawTimeTableProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:loadTIMFileRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparseFile is a file parser for the \u003cem\u003etim\u003c/em\u003e format. For the output format, the FullyDescriptiveTimeTableProblem data type, \n    I have included a number of slots per day and number of days. These are constants in this loading routine. \n\u003c/p\u003e",
          "module": "FileFormat.TIM",
          "name": "parseFile",
          "package": "combinatorial-problems",
          "signature": "Parser RawTimeTableProblem",
          "source": "src/FileFormat-TIM.html#parseFile",
          "type": "function"
        },
        "index": {
          "description": "parseFile is file parser for the tim format For the output format the FullyDescriptiveTimeTableProblem data type have included number of slots per day and number of days These are constants in this loading routine",
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "parseFile",
          "package": "combinatorial-problems",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawEventFeatureLookup",
          "package": "combinatorial-problems",
          "signature": "EventNumber -\u003e [FeatureNumber]",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawEventFeatureLookup",
          "normalized": "EventNumber-\u003e[FeatureNumber]",
          "package": "combinatorial-problems",
          "partial": "Event Feature Lookup",
          "signature": "EventNumber-\u003e[FeatureNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawEventFeatureLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawNumberOfDays",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawNumberOfDays",
          "package": "combinatorial-problems",
          "partial": "Number Of Days",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfDays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawNumberOfEvents",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawNumberOfEvents",
          "package": "combinatorial-problems",
          "partial": "Number Of Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawNumberOfFeatures",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawNumberOfFeatures",
          "package": "combinatorial-problems",
          "partial": "Number Of Features",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawNumberOfPeople",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawNumberOfPeople",
          "package": "combinatorial-problems",
          "partial": "Number Of People",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfPeople"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawNumberOfRooms",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawNumberOfRooms",
          "package": "combinatorial-problems",
          "partial": "Number Of Rooms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfRooms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawNumberOfSlotsPerDay",
          "package": "combinatorial-problems",
          "signature": "Int",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawNumberOfSlotsPerDay",
          "package": "combinatorial-problems",
          "partial": "Number Of Slots Per Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfSlotsPerDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawPersonEventLookup",
          "package": "combinatorial-problems",
          "signature": "PersonNumber -\u003e [EventNumber]",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawPersonEventLookup",
          "normalized": "PersonNumber-\u003e[EventNumber]",
          "package": "combinatorial-problems",
          "partial": "Person Event Lookup",
          "signature": "PersonNumber-\u003e[EventNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawPersonEventLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawRoomFeatureLookup",
          "package": "combinatorial-problems",
          "signature": "RoomNumber -\u003e [FeatureNumber]",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawRoomFeatureLookup",
          "normalized": "RoomNumber-\u003e[FeatureNumber]",
          "package": "combinatorial-problems",
          "partial": "Room Feature Lookup",
          "signature": "RoomNumber-\u003e[FeatureNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawRoomFeatureLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FileFormat.TIM",
          "name": "rawRoomSizes",
          "package": "combinatorial-problems",
          "signature": "RoomNumber -\u003e Int",
          "source": "src/FileFormat-TIM.html#RawTimeTableProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawRoomSizes",
          "normalized": "RoomNumber-\u003eInt",
          "package": "combinatorial-problems",
          "partial": "Room Sizes",
          "signature": "RoomNumber-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawRoomSizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is for human readability. It will take a raw format and return a comma and new line separated format as a String. Dump the string to a file\n    and it should now be easy to load into a spread sheet and inspect. I was not comfortable incoding this as a |show| function, it seems to me that there\n    is far too much information here to easily display it to a user, at least in a terminal window. \n\u003c/p\u003e",
          "module": "FileFormat.TIM",
          "name": "rawToCSV",
          "package": "combinatorial-problems",
          "signature": "RawTimeTableProblem -\u003e String",
          "source": "src/FileFormat-TIM.html#rawToCSV",
          "type": "function"
        },
        "index": {
          "description": "This is for human readability It will take raw format and return comma and new line separated format as String Dump the string to file and it should now be easy to load into spread sheet and inspect was not comfortable incoding this as show function it seems to me that there is far too much information here to easily display it to user at least in terminal window",
          "hierarchy": "FileFormat TIM",
          "module": "FileFormat.TIM",
          "name": "rawToCSV",
          "normalized": "RawTimeTableProblem-\u003eString",
          "package": "combinatorial-problems",
          "partial": "To CSV",
          "signature": "RawTimeTableProblem-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawToCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePartial loading routines for the TSPLIB file format.\n The format itself has a large number of variations, \n and this has only been designed to load the \u003ccode\u003etsp\u003c/code\u003e and \n \u003ccode\u003eatsp\u003c/code\u003e variants. It has been tried on all the files\n from the repository in these classes and it parses\n them at least. \n\u003c/p\u003e\u003cp\u003eRelies upon the \u003ccode\u003eCombinatorialOptimisation.TSP\u003c/code\u003e library.\n\u003c/p\u003e\u003cp\u003eCurrently this does not use the Haskell parsing \n libraries, nor ByteString, just some custom built\n routines.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FileFormat.TSPLIB",
          "name": "TSPLIB",
          "package": "combinatorial-problems",
          "source": "src/FileFormat-TSPLIB.html",
          "type": "module"
        },
        "index": {
          "description": "Partial loading routines for the TSPLIB file format The format itself has large number of variations and this has only been designed to load the tsp and atsp variants It has been tried on all the files from the repository in these classes and it parses them at least Relies upon the CombinatorialOptimisation.TSP library Currently this does not use the Haskell parsing libraries nor ByteString just some custom built routines",
          "hierarchy": "FileFormat TSPLIB",
          "module": "FileFormat.TSPLIB",
          "name": "TSPLIB",
          "package": "combinatorial-problems",
          "partial": "TSPLIB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TSPLIB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads a TSPLIB style file. The first parameter is the internal \n      storage type from \u003ccode\u003eCombinatorialProblems.TSP\u003c/code\u003e. It allows for \n      full matrix, triangular matrix and full recalculation. If the \n      requested internal storage cannot be used with the file, this \n      will throw an error (e.g. recomputation where you are given a \n      full matrix in the file).\n\u003c/p\u003e\u003cp\u003eThe second parameter is the file path. \n\u003c/p\u003e",
          "module": "FileFormat.TSPLIB",
          "name": "loadTSPFile",
          "package": "combinatorial-problems",
          "signature": "InternalStorage -\u003e FilePath -\u003e IO TSPProblem",
          "source": "src/FileFormat-TSPLIB.html#loadTSPFile",
          "type": "function"
        },
        "index": {
          "description": "Loads TSPLIB style file The first parameter is the internal storage type from CombinatorialProblems.TSP It allows for full matrix triangular matrix and full recalculation If the requested internal storage cannot be used with the file this will throw an error e.g recomputation where you are given full matrix in the file The second parameter is the file path",
          "hierarchy": "FileFormat TSPLIB",
          "module": "FileFormat.TSPLIB",
          "name": "loadTSPFile",
          "normalized": "InternalStorage-\u003eFilePath-\u003eIO TSPProblem",
          "package": "combinatorial-problems",
          "partial": "TSPFile",
          "signature": "InternalStorage-\u003eFilePath-\u003eIO TSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TSPLIB.html#v:loadTSPFile"
      }
    }
  ]
]