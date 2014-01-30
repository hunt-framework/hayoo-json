[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for the representation and manipulation of satisfiability problems.\n Currently this is expected to only be 3-SAT however I do not think the \n code is particularly limited to 3-SAT. The approach taken is that there\n is a complex data structure called SATProblem, which contains both the \n problem and the solution (settings of variables). In addition it contains \n a number additional fields that allow for making changes quickly, such \n as a table of clause positions. This is a Map from clause index to the \n number of variable terms that are currently set to true. \n\u003c/p\u003e\u003cp\u003eCurrently the only function for quickly changing a problem is the flipping \n of a single variable. I think some other low level operations for finding \n clauses not currently evaluating to true and so on would be useful.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "module",
        "fct-source": "src/CombinatorialOptimisation-SAT.html",
        "fct-type": "module",
        "title": "SAT"
      },
      "index": {
        "description": "library for the representation and manipulation of satisfiability problems Currently this is expected to only be SAT however do not think the code is particularly limited to SAT The approach taken is that there is complex data structure called SATProblem which contains both the problem and the solution settings of variables In addition it contains number additional fields that allow for making changes quickly such as table of clause positions This is Map from clause index to the number of variable terms that are currently set to true Currently the only function for quickly changing problem is the flipping of single variable think some other low level operations for finding clauses not currently evaluating to true and so on would be useful",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "SAT",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "SAT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#t:SATProblem",
      "description": {
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "data",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
        "fct-type": "data",
        "title": "SATProblem"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "SATProblem",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "SATProblem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:SATProblem",
      "description": {
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "SATProblem",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
        "fct-type": "function",
        "title": "SATProblem"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "SATProblem",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "SATProblem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:clauseLookUp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int -\u003e ([Int], [Int])",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
        "fct-type": "function",
        "title": "clauseLookUp"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "clauseLookUp",
        "normalized": "Int-\u003e([Int],[Int])",
        "package": "combinatorial-problems",
        "partial": "Look Up",
        "signature": "Int-\u003e([Int],[Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:clausePosition",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "IntMap Int",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
        "fct-type": "function",
        "title": "clausePosition"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "clausePosition",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:flipVariable",
      "description": {
        "fct-descr": "\u003cp\u003eThe first low level operation. Takes a problem and changes the \n      setting of the indexed variable from true to false. This is \n      expected to be used in conjunction with other program logic\n      to select which index to flip. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int -\u003e SATProblem -\u003e (SATProblem, Int)",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#flipVariable",
        "fct-type": "function",
        "title": "flipVariable"
      },
      "index": {
        "description": "The first low level operation Takes problem and changes the setting of the indexed variable from true to false This is expected to be used in conjunction with other program logic to select which index to flip",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "flipVariable",
        "normalized": "Int-\u003eSATProblem-\u003e(SATProblem,Int)",
        "package": "combinatorial-problems",
        "partial": "Variable",
        "signature": "Int-\u003eSATProblem-\u003e(SATProblem,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:getTrueFalseCount",
      "description": {
        "fct-descr": "\u003cp\u003eFor the purposes of getting a general impression of the state of the system, \n      it returns the number of variables in the True, and False positions. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "SATProblem -\u003e (Int, Int)",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#getTrueFalseCount",
        "fct-type": "function",
        "title": "getTrueFalseCount"
      },
      "index": {
        "description": "For the purposes of getting general impression of the state of the system it returns the number of variables in the True and False positions",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "getTrueFalseCount",
        "normalized": "SATProblem-\u003e(Int,Int)",
        "package": "combinatorial-problems",
        "partial": "True False Count",
        "signature": "SATProblem-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:makeRandomSATProblem",
      "description": {
        "fct-descr": "\u003cp\u003eI am not sure how often this will be used in practice, as randomly created problems\n      often seem to be quite easy to solve. Requires a source of random numbers, the number\n      of variables and the number of clauses to create, in that order. It is assumed \n      that 3-SAT problems are the type wanted. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "g -\u003e Int -\u003e Int -\u003e SATProblem",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#makeRandomSATProblem",
        "fct-type": "function",
        "title": "makeRandomSATProblem"
      },
      "index": {
        "description": "am not sure how often this will be used in practice as randomly created problems often seem to be quite easy to solve Requires source of random numbers the number of variables and the number of clauses to create in that order It is assumed that SAT problems are the type wanted",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "makeRandomSATProblem",
        "normalized": "a-\u003eInt-\u003eInt-\u003eSATProblem",
        "package": "combinatorial-problems",
        "partial": "Random SATProblem",
        "signature": "g-\u003eInt-\u003eInt-\u003eSATProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:numClauses",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
        "fct-type": "function",
        "title": "numClauses"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "numClauses",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Clauses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:numSATEDClauses",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
        "fct-type": "function",
        "title": "numSATEDClauses"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "numSATEDClauses",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "SATEDClauses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:numUnSATEDClauses",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of unsatisfied clauses in the problem, the inverse of \u003ccode\u003enumSATEDClauses\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "SATProblem -\u003e Int",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#numUnSATEDClauses",
        "fct-type": "function",
        "title": "numUnSATEDClauses"
      },
      "index": {
        "description": "The number of unsatisfied clauses in the problem the inverse of numSATEDClauses",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "numUnSATEDClauses",
        "normalized": "SATProblem-\u003eInt",
        "package": "combinatorial-problems",
        "partial": "Un SATEDClauses",
        "signature": "SATProblem-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:numVariables",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
        "fct-type": "function",
        "title": "numVariables"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "numVariables",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Variables",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:randomiseVariables",
      "description": {
        "fct-descr": "\u003cp\u003eFor rapid initialisation of problem instances for usage in stochastic algorithms. \n      Specifically expected to be used for genetic algorithms and other forms of \n      stochastic meta-heuristic. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "g -\u003e SATProblem -\u003e SATProblem",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#randomiseVariables",
        "fct-type": "function",
        "title": "randomiseVariables"
      },
      "index": {
        "description": "For rapid initialisation of problem instances for usage in stochastic algorithms Specifically expected to be used for genetic algorithms and other forms of stochastic meta-heuristic",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "randomiseVariables",
        "normalized": "a-\u003eSATProblem-\u003eSATProblem",
        "package": "combinatorial-problems",
        "partial": "Variables",
        "signature": "g-\u003eSATProblem-\u003eSATProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:satproblem",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative constructor for the data structure. Takes only those elements that can \n      not be derived and correctly initialises the other components, such as calculating \n      how many clauses are currently evaluating to true. Requires the number of clauses,\n      the number of variables, the lookup function for variables (variable index \n      returning two lists, the first is the indexes of clauses in which this variable \n      is present, the second list the indexes of clauses in which the inverse of this variable \n      is present), the lookup table for clauses (clause index to lists of variable indexes) \n      and the current settings of each variable. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int -\u003e Int -\u003e (Int -\u003e ([Int], [Int])) -\u003e (Int -\u003e ([Int], [Int])) -\u003e IntMap Bool -\u003e SATProblem",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#satproblem",
        "fct-type": "function",
        "title": "satproblem"
      },
      "index": {
        "description": "Alternative constructor for the data structure Takes only those elements that can not be derived and correctly initialises the other components such as calculating how many clauses are currently evaluating to true Requires the number of clauses the number of variables the lookup function for variables variable index returning two lists the first is the indexes of clauses in which this variable is present the second list the indexes of clauses in which the inverse of this variable is present the lookup table for clauses clause index to lists of variable indexes and the current settings of each variable",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "satproblem",
        "normalized": "Int-\u003eInt-\u003e(Int-\u003e([Int],[Int]))-\u003e(Int-\u003e([Int],[Int]))-\u003eIntMap Bool-\u003eSATProblem",
        "package": "combinatorial-problems",
        "partial": "",
        "signature": "Int-\u003eInt-\u003e(Int-\u003e([Int],[Int]))-\u003e(Int-\u003e([Int],[Int]))-\u003eIntMap Bool-\u003eSATProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:setAllVars",
      "description": {
        "fct-descr": "\u003cp\u003eFor rapid initialisation of problem instances. This fixes the setting of \n      all variables to either true or false. The effect this has on the number \n      of clauses that evaluate to true is unknown until it is carried out. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Bool -\u003e SATProblem -\u003e SATProblem",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#setAllVars",
        "fct-type": "function",
        "title": "setAllVars"
      },
      "index": {
        "description": "For rapid initialisation of problem instances This fixes the setting of all variables to either true or false The effect this has on the number of clauses that evaluate to true is unknown until it is carried out",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "setAllVars",
        "normalized": "Bool-\u003eSATProblem-\u003eSATProblem",
        "package": "combinatorial-problems",
        "partial": "All Vars",
        "signature": "Bool-\u003eSATProblem-\u003eSATProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:summariseSAT",
      "description": {
        "fct-descr": "\u003cp\u003ePartial display function, for usage in show, displays some general statistics about \n      the solution status. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "SATProblem -\u003e String",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#summariseSAT",
        "fct-type": "function",
        "title": "summariseSAT"
      },
      "index": {
        "description": "Partial display function for usage in show displays some general statistics about the solution status",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "summariseSAT",
        "normalized": "SATProblem-\u003eString",
        "package": "combinatorial-problems",
        "partial": "SAT",
        "signature": "SATProblem-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:variableLookUp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int -\u003e ([Int], [Int])",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
        "fct-type": "function",
        "title": "variableLookUp"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "variableLookUp",
        "normalized": "Int-\u003e([Int],[Int])",
        "package": "combinatorial-problems",
        "partial": "Look Up",
        "signature": "Int-\u003e([Int],[Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-SAT.html#v:variablePosition",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.SAT",
        "fct-package": "combinatorial-problems",
        "fct-signature": "IntMap Bool",
        "fct-source": "src/CombinatorialOptimisation-SAT.html#SATProblem",
        "fct-type": "function",
        "title": "variablePosition"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation SAT",
        "module": "CombinatorialOptimisation.SAT",
        "name": "variablePosition",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for the representation and manipulation of Time Tabling Problems.\n Still experimental and not particularly general. The underlying problem \n description is that used by the International Timetabling Competition, \n and the code is rather specialised towards that, with the aim of being used \n for meta-heuristics.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "module",
        "fct-source": "src/CombinatorialOptimisation-TIM.html",
        "fct-type": "module",
        "title": "TIM"
      },
      "index": {
        "description": "library for the representation and manipulation of Time Tabling Problems Still experimental and not particularly general The underlying problem description is that used by the International Timetabling Competition and the code is rather specialised towards that with the aim of being used for meta-heuristics",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "TIM",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "TIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:Counter",
      "description": {
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "type",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#Counter",
        "fct-type": "type",
        "title": "Counter"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "Counter",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:DayNumber",
      "description": {
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "type",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#DayNumber",
        "fct-type": "type",
        "title": "DayNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "DayNumber",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Day Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:DaySlot",
      "description": {
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "type",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#DaySlot",
        "fct-type": "type",
        "title": "DaySlot"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "DaySlot",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Day Slot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:EventNumber",
      "description": {
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "type",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#EventNumber",
        "fct-type": "type",
        "title": "EventNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "EventNumber",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Event Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:FeatureNumber",
      "description": {
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "type",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#FeatureNumber",
        "fct-type": "type",
        "title": "FeatureNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "FeatureNumber",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Feature Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:PersonNumber",
      "description": {
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "type",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#PersonNumber",
        "fct-type": "type",
        "title": "PersonNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "PersonNumber",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Person Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:RoomNumber",
      "description": {
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "type",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#RoomNumber",
        "fct-type": "type",
        "title": "RoomNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "RoomNumber",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Room Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:TimeSlot",
      "description": {
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "type",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeSlot",
        "fct-type": "type",
        "title": "TimeSlot"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "TimeSlot",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Time Slot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#t:TimeTable",
      "description": {
        "fct-descr": "\u003cp\u003eCore concepts, location, timeslot, person, two events cannot happen in the same place at the same time.\n    This version expects a constrained data set, so that the roomEvent lookup for example only yields events that can \n    reasonably be scheduled in that room. \n\u003c/p\u003e\u003cp\u003eOriginally I intended the objectives (low over scheduling of people) and the soft objectives to be handled somewhere else.\n    At this time, I am unsure how to abstract this, and I want a system that works now, so I will over specialise to the \n    time tabling competition specifications. Hopefully this can be rectified in a later version. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "data",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "data",
        "title": "TimeTable"
      },
      "index": {
        "description": "Core concepts location timeslot person two events cannot happen in the same place at the same time This version expects constrained data set so that the roomEvent lookup for example only yields events that can reasonably be scheduled in that room Originally intended the objectives low over scheduling of people and the soft objectives to be handled somewhere else At this time am unsure how to abstract this and want system that works now so will over specialise to the time tabling competition specifications Hopefully this can be rectified in later version",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "TimeTable",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Time Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:TimeTable",
      "description": {
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeTable",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "TimeTable"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "TimeTable",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Time Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:currentlyScheduledEvents",
      "description": {
        "fct-descr": "\u003cp\u003eJust a combination of existing useful functions. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeTable -\u003e [EventNumber]",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#currentlyScheduledEvents",
        "fct-type": "function",
        "title": "currentlyScheduledEvents"
      },
      "index": {
        "description": "Just combination of existing useful functions",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "currentlyScheduledEvents",
        "normalized": "TimeTable-\u003e[EventNumber]",
        "package": "combinatorial-problems",
        "partial": "Scheduled Events",
        "signature": "TimeTable-\u003e[EventNumber]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:daynumberDecode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeSlot -\u003e DayNumber",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "daynumberDecode"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "daynumberDecode",
        "normalized": "TimeSlot-\u003eDayNumber",
        "package": "combinatorial-problems",
        "partial": "Decode",
        "signature": "TimeSlot-\u003eDayNumber"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:dayslotDecode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeSlot -\u003e DaySlot",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "dayslotDecode"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "dayslotDecode",
        "normalized": "TimeSlot-\u003eDaySlot",
        "package": "combinatorial-problems",
        "partial": "Decode",
        "signature": "TimeSlot-\u003eDaySlot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:descheduleEvent",
      "description": {
        "fct-descr": "\u003cp\u003eFails silently if the event is not currently scheduled. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "EventNumber -\u003e TimeTable -\u003e TimeTable",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#descheduleEvent",
        "fct-type": "function",
        "title": "descheduleEvent"
      },
      "index": {
        "description": "Fails silently if the event is not currently scheduled",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "descheduleEvent",
        "normalized": "EventNumber-\u003eTimeTable-\u003eTimeTable",
        "package": "combinatorial-problems",
        "partial": "Event",
        "signature": "EventNumber-\u003eTimeTable-\u003eTimeTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:descheduleSlot",
      "description": {
        "fct-descr": "\u003cp\u003eFails silently if the time slot and room number are not booked. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeSlot -\u003e RoomNumber -\u003e TimeTable -\u003e TimeTable",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#descheduleSlot",
        "fct-type": "function",
        "title": "descheduleSlot"
      },
      "index": {
        "description": "Fails silently if the time slot and room number are not booked",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "descheduleSlot",
        "normalized": "TimeSlot-\u003eRoomNumber-\u003eTimeTable-\u003eTimeTable",
        "package": "combinatorial-problems",
        "partial": "Slot",
        "signature": "TimeSlot-\u003eRoomNumber-\u003eTimeTable-\u003eTimeTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:eventLocation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Map EventNumber (TimeSlot, RoomNumber)",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "eventLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "eventLocation",
        "normalized": "Map EventNumber(TimeSlot,RoomNumber)",
        "package": "combinatorial-problems",
        "partial": "Location",
        "signature": "Map EventNumber(TimeSlot,RoomNumber)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:eventPersonLookup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "EventNumber -\u003e [PersonNumber]",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "eventPersonLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "eventPersonLookup",
        "normalized": "EventNumber-\u003e[PersonNumber]",
        "package": "combinatorial-problems",
        "partial": "Person Lookup",
        "signature": "EventNumber-\u003e[PersonNumber]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:eventRoomLookup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "EventNumber -\u003e [RoomNumber]",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "eventRoomLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "eventRoomLookup",
        "normalized": "EventNumber-\u003e[RoomNumber]",
        "package": "combinatorial-problems",
        "partial": "Room Lookup",
        "signature": "EventNumber-\u003e[RoomNumber]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:eventsInDay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Map (DayNumber, PersonNumber) Counter",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "eventsInDay"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "eventsInDay",
        "normalized": "Map(DayNumber,PersonNumber)Counter",
        "package": "combinatorial-problems",
        "partial": "In Day",
        "signature": "Map(DayNumber,PersonNumber)Counter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:ittcObjectiveValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe objective function as specific by the 2002 competition rules. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeTable -\u003e Int",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#ittcObjectiveValue",
        "fct-type": "function",
        "title": "ittcObjectiveValue"
      },
      "index": {
        "description": "The objective function as specific by the competition rules",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "ittcObjectiveValue",
        "normalized": "TimeTable-\u003eInt",
        "package": "combinatorial-problems",
        "partial": "Objective Value",
        "signature": "TimeTable-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:ittcValidity",
      "description": {
        "fct-descr": "\u003cp\u003eThe validity function as specific by the 2002 competition rules. Basically no clashes at this point.\n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeTable -\u003e Bool",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#ittcValidity",
        "fct-type": "function",
        "title": "ittcValidity"
      },
      "index": {
        "description": "The validity function as specific by the competition rules Basically no clashes at this point",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "ittcValidity",
        "normalized": "TimeTable-\u003eBool",
        "package": "combinatorial-problems",
        "partial": "Validity",
        "signature": "TimeTable-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:lastDay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "lastDay"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "lastDay",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:lastSlotOfDay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "lastSlotOfDay"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "lastSlotOfDay",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Slot Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:lastSlotOfDayCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Counter",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "lastSlotOfDayCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "lastSlotOfDayCounter",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Slot Of Day Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:locationEvent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Map (TimeSlot, RoomNumber) EventNumber",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "locationEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "locationEvent",
        "normalized": "Map(TimeSlot,RoomNumber)EventNumber",
        "package": "combinatorial-problems",
        "partial": "Event",
        "signature": "Map(TimeSlot,RoomNumber)EventNumber"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:moreThanTwoEventsCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Counter",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "moreThanTwoEventsCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "moreThanTwoEventsCounter",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Than Two Events Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:numberOfEvents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "numberOfEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "numberOfEvents",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Of Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:numberOfPeople",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "numberOfPeople"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "numberOfPeople",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Of People",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:numberOfRooms",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "numberOfRooms"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "numberOfRooms",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Of Rooms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:numberOfTimeSlots",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "numberOfTimeSlots"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "numberOfTimeSlots",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Of Time Slots",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:overSchedule",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Counter",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "overSchedule"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "overSchedule",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Schedule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:personEventLookup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "PersonNumber -\u003e [EventNumber]",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "personEventLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "personEventLookup",
        "normalized": "PersonNumber-\u003e[EventNumber]",
        "package": "combinatorial-problems",
        "partial": "Event Lookup",
        "signature": "PersonNumber-\u003e[EventNumber]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:personUsage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Map (TimeSlot, PersonNumber) Counter",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "personUsage"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "personUsage",
        "normalized": "Map(TimeSlot,PersonNumber)Counter",
        "package": "combinatorial-problems",
        "partial": "Usage",
        "signature": "Map(TimeSlot,PersonNumber)Counter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:roomEventLookup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "RoomNumber -\u003e [EventNumber]",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "roomEventLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "roomEventLookup",
        "normalized": "RoomNumber-\u003e[EventNumber]",
        "package": "combinatorial-problems",
        "partial": "Event Lookup",
        "signature": "RoomNumber-\u003e[EventNumber]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:schedule",
      "description": {
        "fct-descr": "\u003cp\u003eFails silently and does no update the schedule if the very hard constraints fail. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeSlot -\u003e RoomNumber -\u003e EventNumber -\u003e TimeTable -\u003e TimeTable",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#schedule",
        "fct-type": "function",
        "title": "schedule"
      },
      "index": {
        "description": "Fails silently and does no update the schedule if the very hard constraints fail",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "schedule",
        "normalized": "TimeSlot-\u003eRoomNumber-\u003eEventNumber-\u003eTimeTable-\u003eTimeTable",
        "package": "combinatorial-problems",
        "partial": "",
        "signature": "TimeSlot-\u003eRoomNumber-\u003eEventNumber-\u003eTimeTable-\u003eTimeTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:singleEventInDayCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Counter",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "singleEventInDayCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "singleEventInDayCounter",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Event In Day Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:timeTableDetailsAsCSV",
      "description": {
        "fct-descr": "\u003cp\u003eA simple spread sheet display seems like a good idea. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeTable -\u003e String",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#timeTableDetailsAsCSV",
        "fct-type": "function",
        "title": "timeTableDetailsAsCSV"
      },
      "index": {
        "description": "simple spread sheet display seems like good idea",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "timeTableDetailsAsCSV",
        "normalized": "TimeTable-\u003eString",
        "package": "combinatorial-problems",
        "partial": "Table Details As CSV",
        "signature": "TimeTable-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:timeTableForRoomAsCSV",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe a helper, making it public anyway. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeTable -\u003e RoomNumber -\u003e String",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#timeTableForRoomAsCSV",
        "fct-type": "function",
        "title": "timeTableForRoomAsCSV"
      },
      "index": {
        "description": "Maybe helper making it public anyway",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "timeTableForRoomAsCSV",
        "normalized": "TimeTable-\u003eRoomNumber-\u003eString",
        "package": "combinatorial-problems",
        "partial": "Table For Room As CSV",
        "signature": "TimeTable-\u003eRoomNumber-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:unscheduledEvents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "[EventNumber]",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#TimeTable",
        "fct-type": "function",
        "title": "unscheduledEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "unscheduledEvents",
        "normalized": "[EventNumber]",
        "package": "combinatorial-problems",
        "partial": "Events",
        "signature": "[EventNumber]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:viewConstrainedProblem",
      "description": {
        "fct-descr": "\u003cp\u003eSplitting off the two parts of show, so we have a simple show for the state of the solution, \n    a more complex solution description and the constant constrained problem.\n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeTable -\u003e String",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#viewConstrainedProblem",
        "fct-type": "function",
        "title": "viewConstrainedProblem"
      },
      "index": {
        "description": "Splitting off the two parts of show so we have simple show for the state of the solution more complex solution description and the constant constrained problem",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "viewConstrainedProblem",
        "normalized": "TimeTable-\u003eString",
        "package": "combinatorial-problems",
        "partial": "Constrained Problem",
        "signature": "TimeTable-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TIM.html#v:viewTimeTableDetails",
      "description": {
        "fct-descr": "\u003cp\u003eThe other part of the time table data type. See the current status of the solution. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TimeTable -\u003e String",
        "fct-source": "src/CombinatorialOptimisation-TIM.html#viewTimeTableDetails",
        "fct-type": "function",
        "title": "viewTimeTableDetails"
      },
      "index": {
        "description": "The other part of the time table data type See the current status of the solution",
        "hierarchy": "CombinatorialOptimisation TIM",
        "module": "CombinatorialOptimisation.TIM",
        "name": "viewTimeTableDetails",
        "normalized": "TimeTable-\u003eString",
        "package": "combinatorial-problems",
        "partial": "Time Table Details",
        "signature": "TimeTable-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple library for fixed point arithmetic. Pure Haskell style, \n unlikely to be efficient. Really this has been added as a bit of \n a hack at the present time to remove rounding errors in the TSP \n implementation (which was having them from the use of Float and Double).\n Not intended to be a full library on it's own, but I guess I see what happens.\n\u003c/p\u003e\u003cp\u003eInternally uses Int64 as the data type and this is then divided to 32 bits below \n the point, 31 above and the sign is still in place. \n Basic arithmetic becomes simple integer arithmetic (what I really really want), \n multiplication and division has to make use of conversion to Integer type and \n shifting, probably not that fast. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "CombinatorialOptimisation.TSP.FixedPoint",
        "fct-package": "combinatorial-problems",
        "fct-signature": "module",
        "fct-source": "src/CombinatorialOptimisation-TSP-FixedPoint.html",
        "fct-type": "module",
        "title": "FixedPoint"
      },
      "index": {
        "description": "Simple library for fixed point arithmetic Pure Haskell style unlikely to be efficient Really this has been added as bit of hack at the present time to remove rounding errors in the TSP implementation which was having them from the use of Float and Double Not intended to be full library on it own but guess see what happens Internally uses Int64 as the data type and this is then divided to bits below the point above and the sign is still in place Basic arithmetic becomes simple integer arithmetic what really really want multiplication and division has to make use of conversion to Integer type and shifting probably not that fast",
        "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
        "module": "CombinatorialOptimisation.TSP.FixedPoint",
        "name": "FixedPoint",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#t:FP",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP.FixedPoint",
        "fct-package": "combinatorial-problems",
        "fct-signature": "newtype",
        "fct-source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#FP",
        "fct-type": "newtype",
        "title": "FP"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
        "module": "CombinatorialOptimisation.TSP.FixedPoint",
        "name": "FP",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "FP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#v:FP",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP.FixedPoint",
        "fct-package": "combinatorial-problems",
        "fct-signature": "FP Int64",
        "fct-source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#FP",
        "fct-type": "function",
        "title": "FP"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
        "module": "CombinatorialOptimisation.TSP.FixedPoint",
        "name": "FP",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "FP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#v:doubleToFP",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP.FixedPoint",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Double -\u003e FP",
        "fct-source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#doubleToFP",
        "fct-type": "function",
        "title": "doubleToFP"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
        "module": "CombinatorialOptimisation.TSP.FixedPoint",
        "name": "doubleToFP",
        "normalized": "Double-\u003eFP",
        "package": "combinatorial-problems",
        "partial": "To FP",
        "signature": "Double-\u003eFP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#v:fpToDouble",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP.FixedPoint",
        "fct-package": "combinatorial-problems",
        "fct-signature": "FP -\u003e Double",
        "fct-source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#fpToDouble",
        "fct-type": "function",
        "title": "fpToDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
        "module": "CombinatorialOptimisation.TSP.FixedPoint",
        "name": "fpToDouble",
        "normalized": "FP-\u003eDouble",
        "package": "combinatorial-problems",
        "partial": "To Double",
        "signature": "FP-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP-FixedPoint.html#v:unwrappedFP",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP.FixedPoint",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Double -\u003e Int64",
        "fct-source": "src/CombinatorialOptimisation-TSP-FixedPoint.html#unwrappedFP",
        "fct-type": "function",
        "title": "unwrappedFP"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP FixedPoint",
        "module": "CombinatorialOptimisation.TSP.FixedPoint",
        "name": "unwrappedFP",
        "normalized": "Double-\u003eInt",
        "package": "combinatorial-problems",
        "partial": "FP",
        "signature": "Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for the representation and manipulation of travelling salesperson\n problems.\n The approach taken is the creation of a complex data structure called \n TSPProblem which contains both the problem, the current solution and \n the current value of the route.\n The route is stored as a dictionary (\u003ccode\u003eData.Map\u003c/code\u003e) of vertex indexes\n to a pair of values, the previous vertex and the next vertex in the\n sequence. This is to facilitate changing the route quickly, and\n avoid searching for data in lists.\n\u003c/p\u003e\u003cp\u003eThe data structure also contains two additional fields, the \n \u003ccode\u003erouteElementToIndex\u003c/code\u003e and \u003ccode\u003eindexToRouteElement\u003c/code\u003e components.\n These exist to allow manipulation either by the vertex number\n or the position in the current solution. \n Solutions are hamiltonian cycles.\n For ease of reasoning it is recommended that users do not \n attempt to move vertex 0, or index 0, so that solutions\n are cycles from 0 to 0. I may change this in the future to \n lock this down a bit. In the meantime, there is no\n actual problem with making these changes, however \n later manipulations may not match up clearly with \n the way the show routines work.\n\u003c/p\u003e\u003cp\u003eCurrently only two functions are provided for manipulating routes,\n either by position in the sequence (\u003ccode\u003eexchangeCitiesOnIndex\u003c/code\u003e) or \n by vertex name (\u003ccode\u003eexchangeCities\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eI am not sure how this will clearly support meta-heuristics that\n work by deleting edges and recombining subsequences. However \n since I am storing association lists I think it should be possible \n to make this work, I will worry about it later.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "module",
        "fct-source": "src/CombinatorialOptimisation-TSP.html",
        "fct-type": "module",
        "title": "TSP"
      },
      "index": {
        "description": "library for the representation and manipulation of travelling salesperson problems The approach taken is the creation of complex data structure called TSPProblem which contains both the problem the current solution and the current value of the route The route is stored as dictionary Data.Map of vertex indexes to pair of values the previous vertex and the next vertex in the sequence This is to facilitate changing the route quickly and avoid searching for data in lists The data structure also contains two additional fields the routeElementToIndex and indexToRouteElement components These exist to allow manipulation either by the vertex number or the position in the current solution Solutions are hamiltonian cycles For ease of reasoning it is recommended that users do not attempt to move vertex or index so that solutions are cycles from to may change this in the future to lock this down bit In the meantime there is no actual problem with making these changes however later manipulations may not match up clearly with the way the show routines work Currently only two functions are provided for manipulating routes either by position in the sequence exchangeCitiesOnIndex or by vertex name exchangeCities am not sure how this will clearly support meta-heuristics that work by deleting edges and recombining subsequences However since am storing association lists think it should be possible to make this work will worry about it later",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "TSP",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "TSP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#t:InternalStorage",
      "description": {
        "fct-descr": "\u003cp\u003eThere are three possible internal storage forms. A full explicit matrix, an upper triangular matrix or recomputation \n      from data points. The advantage of full explicit is speed, but it takes more memory. It is also the only option for \n      asymmetric TSP problems. The triangular matrix is also fast, but can only be used in symmetric problems, and also \n      still requires quite a bit of memory. Recomputation is the last option, it is slow because it is no longer a lookup\n      table, but will take much less room. Can only be used with problems where the distance between two points can be\n      calculated. Currently I am only supporting symmetric TSPs for this.\n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "data",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#InternalStorage",
        "fct-type": "data",
        "title": "InternalStorage"
      },
      "index": {
        "description": "There are three possible internal storage forms full explicit matrix an upper triangular matrix or recomputation from data points The advantage of full explicit is speed but it takes more memory It is also the only option for asymmetric TSP problems The triangular matrix is also fast but can only be used in symmetric problems and also still requires quite bit of memory Recomputation is the last option it is slow because it is no longer lookup table but will take much less room Can only be used with problems where the distance between two points can be calculated Currently am only supporting symmetric TSPs for this",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "InternalStorage",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Internal Storage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#t:TSPProblem",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type for carrying the combination problem and solution to \n      the TSP. The route is stored as a dictionary of associations \n      from vertex name to a pair of values, the name of the preceding \n      vertex and the next vertex. This forms an infinite loop, so \n      use carefully.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003erouteElementToIndex\u003c/code\u003e/\u003ccode\u003eindexToRouteElement\u003c/code\u003e pair store \n      fixed indexes to the cities. This is intended to allow \n      a dumb heuristic to decide to switch elements 0 and 2, \n      knowing they must be separated by 1 element, rather than\n      vertices 0 and 2, which may be next to each other, or \n      very different parts of the cycle.\n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "data",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
        "fct-type": "data",
        "title": "TSPProblem"
      },
      "index": {
        "description": "The data type for carrying the combination problem and solution to the TSP The route is stored as dictionary of associations from vertex name to pair of values the name of the preceding vertex and the next vertex This forms an infinite loop so use carefully The routeElementToIndex indexToRouteElement pair store fixed indexes to the cities This is intended to allow dumb heuristic to decide to switch elements and knowing they must be separated by element rather than vertices and which may be next to each other or very different parts of the cycle",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "TSPProblem",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "TSPProblem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:ExplicitMatrix",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "ExplicitMatrix",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#InternalStorage",
        "fct-type": "function",
        "title": "ExplicitMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "ExplicitMatrix",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Explicit Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:Recomputation",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Recomputation",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#InternalStorage",
        "fct-type": "function",
        "title": "Recomputation"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "Recomputation",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Recomputation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:TSPProblem",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
        "fct-type": "function",
        "title": "TSPProblem"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "TSPProblem",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "TSPProblem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:TriangularMatrix",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TriangularMatrix",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#InternalStorage",
        "fct-type": "function",
        "title": "TriangularMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "TriangularMatrix",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Triangular Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:allVariations",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Bool -\u003e [[Int]] -\u003e [[Int]]",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#allVariations",
        "fct-type": "function",
        "title": "allVariations"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "allVariations",
        "normalized": "Bool-\u003e[[Int]]-\u003e[[Int]]",
        "package": "combinatorial-problems",
        "partial": "Variations",
        "signature": "Bool-\u003e[[Int]]-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:cityNameToIndex",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "IntMap Int",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
        "fct-type": "function",
        "title": "cityNameToIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "cityNameToIndex",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Name To Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:edgeCost",
      "description": {
        "fct-descr": "\u003cp\u003eInternally all edge costs are stored as a fixed point values. \n     For external visibility however this function is provided, converting the values into floating point numbers. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TSPProblem -\u003e Int -\u003e Int -\u003e a",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#edgeCost",
        "fct-type": "function",
        "title": "edgeCost"
      },
      "index": {
        "description": "Internally all edge costs are stored as fixed point values For external visibility however this function is provided converting the values into floating point numbers",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "edgeCost",
        "normalized": "TSPProblem-\u003eInt-\u003eInt-\u003ea",
        "package": "combinatorial-problems",
        "partial": "Cost",
        "signature": "TSPProblem-\u003eInt-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:edgeCostI",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int -\u003e Int -\u003e FP",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
        "fct-type": "function",
        "title": "edgeCostI"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "edgeCostI",
        "normalized": "Int-\u003eInt-\u003eFP",
        "package": "combinatorial-problems",
        "partial": "Cost",
        "signature": "Int-\u003eInt-\u003eFP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:evaluateRouteNaive",
      "description": {
        "fct-descr": "\u003cp\u003eA brute force recalculation of the current length of the path. Use sparingly.\n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TSPProblem -\u003e TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#evaluateRouteNaive",
        "fct-type": "function",
        "title": "evaluateRouteNaive"
      },
      "index": {
        "description": "brute force recalculation of the current length of the path Use sparingly",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "evaluateRouteNaive",
        "normalized": "TSPProblem-\u003eTSPProblem",
        "package": "combinatorial-problems",
        "partial": "Route Naive",
        "signature": "TSPProblem-\u003eTSPProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:generateDirectionalRouteMap",
      "description": {
        "fct-descr": "\u003cp\u003eWill generate an IntMap of the path, giving city to next and last city names as the structure.\n      This is effectively the edges involved in the process. Wow, how badly written was that. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TSPProblem -\u003e IntMap (Int, Int)",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#generateDirectionalRouteMap",
        "fct-type": "function",
        "title": "generateDirectionalRouteMap"
      },
      "index": {
        "description": "Will generate an IntMap of the path giving city to next and last city names as the structure This is effectively the edges involved in the process Wow how badly written was that",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "generateDirectionalRouteMap",
        "normalized": "TSPProblem-\u003eIntMap(Int,Int)",
        "package": "combinatorial-problems",
        "partial": "Directional Route Map",
        "signature": "TSPProblem-\u003eIntMap(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:getTSPPathAsList",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int -\u003e TSPProblem -\u003e [Int]",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#getTSPPathAsList",
        "fct-type": "function",
        "title": "getTSPPathAsList"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "getTSPPathAsList",
        "normalized": "Int-\u003eTSPProblem-\u003e[Int]",
        "package": "combinatorial-problems",
        "partial": "TSPPath As List",
        "signature": "Int-\u003eTSPProblem-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:indexToCityName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "IntMap Int",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
        "fct-type": "function",
        "title": "indexToCityName"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "indexToCityName",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "To City Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:kFragments",
      "description": {
        "fct-descr": "\u003cp\u003eAn implementation of kexchange methods as a series of combinators. kFragments\n      will break a problem at specified edges and give back the path segments. \n      allVariations will take a set of segments and give back every possible combination of them, \n      and their reversals (I feel this should be broken down further, due to similarities with the \n      stochastic segment reversal method). allVariations is also a more general function than \n      the others, not actually requiring reference to TSP. \n      minimumVariation is expected to be used with a set of paths (probably generated by the above two methods)\n      and give only the best.\n\u003c/p\u003e\u003cp\u003estochasticReversal and shuffleFragments are similarly not really approapriate just here, but for now they \n      stay. Together they allow for less detailed k-exchange methods, for example, rather than exhaustively creating \n      variations, we will use it as a mutator for a GA. For this we might want to only create 1 permutation, which \n      can be done as; kFragments \u003e\u003e\u003e shuffleFragments \u003e\u003e\u003e stochasticReversal \u003e\u003e\u003e as-\u003e[concat as] \u003e\u003e\u003e minimumVariation\n\u003c/p\u003e\u003cp\u003ekFragments will begin by being quite fragile. Please make sure that your input sequence is \n      assending and does not include duplicates. Remember to initialise your route before calling this. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "[Int] -\u003e TSPProblem -\u003e [[Int]]",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#kFragments",
        "fct-type": "function",
        "title": "kFragments"
      },
      "index": {
        "description": "An implementation of kexchange methods as series of combinators kFragments will break problem at specified edges and give back the path segments allVariations will take set of segments and give back every possible combination of them and their reversals feel this should be broken down further due to similarities with the stochastic segment reversal method allVariations is also more general function than the others not actually requiring reference to TSP minimumVariation is expected to be used with set of paths probably generated by the above two methods and give only the best stochasticReversal and shuffleFragments are similarly not really approapriate just here but for now they stay Together they allow for less detailed k-exchange methods for example rather than exhaustively creating variations we will use it as mutator for GA For this we might want to only create permutation which can be done as kFragments shuffleFragments stochasticReversal as concat as minimumVariation kFragments will begin by being quite fragile Please make sure that your input sequence is assending and does not include duplicates Remember to initialise your route before calling this",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "kFragments",
        "normalized": "[Int]-\u003eTSPProblem-\u003e[[Int]]",
        "package": "combinatorial-problems",
        "partial": "Fragments",
        "signature": "[Int]-\u003eTSPProblem-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:makeASymmetricTSPMap",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a TSPProblem instance for an Asymmetric TSP. That is, the distance\n      from A-B is the not necessarily the same as B-A. The actual route will \n      not be set up initially, the dictionaries will be empty. This could be \n      used directly for a global search system (branch and bound), or use in \n      conjunction with \u003ccode\u003esetRoute\u003c/code\u003e or \u003ccode\u003erandomiseRoute\u003c/code\u003e to initialise for local search. \n      Internal data structure is always fully explicit matrix.\n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "(Double, Double) -\u003e Int -\u003e g -\u003e TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#makeASymmetricTSPMap",
        "fct-type": "function",
        "title": "makeASymmetricTSPMap"
      },
      "index": {
        "description": "Construct TSPProblem instance for an Asymmetric TSP That is the distance from A-B is the not necessarily the same as B-A The actual route will not be set up initially the dictionaries will be empty This could be used directly for global search system branch and bound or use in conjunction with setRoute or randomiseRoute to initialise for local search Internal data structure is always fully explicit matrix",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "makeASymmetricTSPMap",
        "normalized": "(Double,Double)-\u003eInt-\u003ea-\u003eTSPProblem",
        "package": "combinatorial-problems",
        "partial": "ASymmetric TSPMap",
        "signature": "(Double,Double)-\u003eInt-\u003eg-\u003eTSPProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:makeEuclideanTSPMap",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a TSPProblem instance for a Symmetric TSP. The route will not be\n      initially set up, the dictionaries will be empty. This does create the \n      vertices of the graph as points in a 2d space, and the lengths of edges \n      are calculated, so this supports all internal storage types. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "InternalStorage -\u003e (Double, Double) -\u003e (Double, Double) -\u003e Int -\u003e g -\u003e TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#makeEuclideanTSPMap",
        "fct-type": "function",
        "title": "makeEuclideanTSPMap"
      },
      "index": {
        "description": "Construct TSPProblem instance for Symmetric TSP The route will not be initially set up the dictionaries will be empty This does create the vertices of the graph as points in space and the lengths of edges are calculated so this supports all internal storage types",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "makeEuclideanTSPMap",
        "normalized": "InternalStorage-\u003e(Double,Double)-\u003e(Double,Double)-\u003eInt-\u003ea-\u003eTSPProblem",
        "package": "combinatorial-problems",
        "partial": "Euclidean TSPMap",
        "signature": "InternalStorage-\u003e(Double,Double)-\u003e(Double,Double)-\u003eInt-\u003eg-\u003eTSPProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:makeSymmetricTSPMap",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a TSPProblem instance for a Symmetric TSP. That is, the distance\n      from A-B is the same as B-A. The actual route will not be set up initially,\n      the dictionaries will be empty. This could be used directly for a global \n      search system (branch and bound), or use in conjunction with \u003ccode\u003esetRoute\u003c/code\u003e or \n      \u003ccode\u003erandomiseRoute\u003c/code\u003e to initialise for local search. Should be noted that this\n      does not create locations and calculate distances, but rather randomly \n      assigns distances to each edge, making them symmetric. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "InternalStorage -\u003e (Double, Double) -\u003e Int -\u003e g -\u003e TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#makeSymmetricTSPMap",
        "fct-type": "function",
        "title": "makeSymmetricTSPMap"
      },
      "index": {
        "description": "Construct TSPProblem instance for Symmetric TSP That is the distance from A-B is the same as B-A The actual route will not be set up initially the dictionaries will be empty This could be used directly for global search system branch and bound or use in conjunction with setRoute or randomiseRoute to initialise for local search Should be noted that this does not create locations and calculate distances but rather randomly assigns distances to each edge making them symmetric",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "makeSymmetricTSPMap",
        "normalized": "InternalStorage-\u003e(Double,Double)-\u003eInt-\u003ea-\u003eTSPProblem",
        "package": "combinatorial-problems",
        "partial": "Symmetric TSPMap",
        "signature": "InternalStorage-\u003e(Double,Double)-\u003eInt-\u003eg-\u003eTSPProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:minimumVariation",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TSPProblem -\u003e [[Int]] -\u003e TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#minimumVariation",
        "fct-type": "function",
        "title": "minimumVariation"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "minimumVariation",
        "normalized": "TSPProblem-\u003e[[Int]]-\u003eTSPProblem",
        "package": "combinatorial-problems",
        "partial": "Variation",
        "signature": "TSPProblem-\u003e[[Int]]-\u003eTSPProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:numCities",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
        "fct-type": "function",
        "title": "numCities"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "numCities",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Cities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:randomiseRoute",
      "description": {
        "fct-descr": "\u003cp\u003eShuffles a simple list of cities and then passes off the work to setRoute. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "g -\u003e TSPProblem -\u003e TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#randomiseRoute",
        "fct-type": "function",
        "title": "randomiseRoute"
      },
      "index": {
        "description": "Shuffles simple list of cities and then passes off the work to setRoute",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "randomiseRoute",
        "normalized": "a-\u003eTSPProblem-\u003eTSPProblem",
        "package": "combinatorial-problems",
        "partial": "Route",
        "signature": "g-\u003eTSPProblem-\u003eTSPProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:routeMap",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TSPProblem -\u003e IntMap Int",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#routeMap",
        "fct-type": "function",
        "title": "routeMap"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "routeMap",
        "normalized": "TSPProblem-\u003eIntMap Int",
        "package": "combinatorial-problems",
        "partial": "Map",
        "signature": "TSPProblem-\u003eIntMap Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:setRoute",
      "description": {
        "fct-descr": "\u003cp\u003eTake a path through the system and a problem, insert the path into the system, \n      calculating distances and setting up appropriate look up tables. It does not\n      validate the list in terms of going through all the cities, or going through \n      a city more than once (though this is likely to break other parts of the system \n      very very fast). It does organise the list so that the starting node is vertex 0. \n\u003c/p\u003e\u003cp\u003eUses the \u003ccode\u003eevaluateRouteNaive\u003c/code\u003e to calculate the length of the path via a brute\n      force method. This is not expected to be used frequently. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "[Int] -\u003e TSPProblem -\u003e TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#setRoute",
        "fct-type": "function",
        "title": "setRoute"
      },
      "index": {
        "description": "Take path through the system and problem insert the path into the system calculating distances and setting up appropriate look up tables It does not validate the list in terms of going through all the cities or going through city more than once though this is likely to break other parts of the system very very fast It does organise the list so that the starting node is vertex Uses the evaluateRouteNaive to calculate the length of the path via brute force method This is not expected to be used frequently",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "setRoute",
        "normalized": "[Int]-\u003eTSPProblem-\u003eTSPProblem",
        "package": "combinatorial-problems",
        "partial": "Route",
        "signature": "[Int]-\u003eTSPProblem-\u003eTSPProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:showEdgeWeights",
      "description": {
        "fct-descr": "\u003cp\u003eConverts the lookup table of a problem into a comma and newline delimited\n      string. This should facilitate copying into spreadsheets for checking the \n      problem being used and validating solutions by hand. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TSPProblem -\u003e String",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#showEdgeWeights",
        "fct-type": "function",
        "title": "showEdgeWeights"
      },
      "index": {
        "description": "Converts the lookup table of problem into comma and newline delimited string This should facilitate copying into spreadsheets for checking the problem being used and validating solutions by hand",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "showEdgeWeights",
        "normalized": "TSPProblem-\u003eString",
        "package": "combinatorial-problems",
        "partial": "Edge Weights",
        "signature": "TSPProblem-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:shuffleFragments",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "[a] -\u003e [[Int]] -\u003e [[Int]]",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#shuffleFragments",
        "fct-type": "function",
        "title": "shuffleFragments"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "shuffleFragments",
        "normalized": "[a]-\u003e[[Int]]-\u003e[[Int]]",
        "package": "combinatorial-problems",
        "partial": "Fragments",
        "signature": "[a]-\u003e[[Int]]-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:solutionValue",
      "description": {
        "fct-descr": "\u003cp\u003eInternally the value of the solution is stored as a fixed point value, stored in an Int64 data type. \n     For external visibility however this function is provided, converting the value into a floating point numbers. \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "TSPProblem -\u003e a",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#solutionValue",
        "fct-type": "function",
        "title": "solutionValue"
      },
      "index": {
        "description": "Internally the value of the solution is stored as fixed point value stored in an Int64 data type For external visibility however this function is provided converting the value into floating point numbers",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "solutionValue",
        "normalized": "TSPProblem-\u003ea",
        "package": "combinatorial-problems",
        "partial": "Value",
        "signature": "TSPProblem-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:solutionValueI",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "FP",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#TSPProblem",
        "fct-type": "function",
        "title": "solutionValueI"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "solutionValueI",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:stochasticReversal",
      "description": {
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "[Bool] -\u003e [[Int]] -\u003e [[Int]]",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#stochasticReversal",
        "fct-type": "function",
        "title": "stochasticReversal"
      },
      "index": {
        "description": "",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "stochasticReversal",
        "normalized": "[Bool]-\u003e[[Int]]-\u003e[[Int]]",
        "package": "combinatorial-problems",
        "partial": "Reversal",
        "signature": "[Bool]-\u003e[[Int]]-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:swapCities",
      "description": {
        "fct-descr": "\u003cp\u003eWill perform a switch of 2 cities in the path. This is by city name, not current index\n      in the path. It looks up the current indexes by city name and passes the work off to \n      \u003ccode\u003eexchangeCitiesOnIndex\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int -\u003e Int -\u003e TSPProblem -\u003e TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#swapCities",
        "fct-type": "function",
        "title": "swapCities"
      },
      "index": {
        "description": "Will perform switch of cities in the path This is by city name not current index in the path It looks up the current indexes by city name and passes the work off to exchangeCitiesOnIndex",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "swapCities",
        "normalized": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem",
        "package": "combinatorial-problems",
        "partial": "Cities",
        "signature": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/CombinatorialOptimisation-TSP.html#v:swapCitiesOnIndex",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the bulk of the work for exchanging elements of the cycle.\n      This version no longer assumes the indices are ordered due to confusion this\n      caused in my own code. In addition there was an oversight, when exchanging indices\n      0 and last. This is now fixed.\n\u003c/p\u003e",
        "fct-module": "CombinatorialOptimisation.TSP",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int -\u003e Int -\u003e TSPProblem -\u003e TSPProblem",
        "fct-source": "src/CombinatorialOptimisation-TSP.html#swapCitiesOnIndex",
        "fct-type": "function",
        "title": "swapCitiesOnIndex"
      },
      "index": {
        "description": "Performs the bulk of the work for exchanging elements of the cycle This version no longer assumes the indices are ordered due to confusion this caused in my own code In addition there was an oversight when exchanging indices and last This is now fixed",
        "hierarchy": "CombinatorialOptimisation TSP",
        "module": "CombinatorialOptimisation.TSP",
        "name": "swapCitiesOnIndex",
        "normalized": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem",
        "package": "combinatorial-problems",
        "partial": "Cities On Index",
        "signature": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-SATLIB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe loading routines for the Conjunctive Normal Form (cnf) styled files\n that can be found on the SATLIB website. Relies upon the\n \u003ccode\u003eCombinatorialOptimisation.SAT\u003c/code\u003e library for the data structures.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FileFormat.SATLIB",
        "fct-package": "combinatorial-problems",
        "fct-signature": "module",
        "fct-source": "src/FileFormat-SATLIB.html",
        "fct-type": "module",
        "title": "SATLIB"
      },
      "index": {
        "description": "The loading routines for the Conjunctive Normal Form cnf styled files that can be found on the SATLIB website Relies upon the CombinatorialOptimisation.SAT library for the data structures",
        "hierarchy": "FileFormat SATLIB",
        "module": "FileFormat.SATLIB",
        "name": "SATLIB",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "SATLIB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-SATLIB.html#v:loadCNFFile",
      "description": {
        "fct-descr": "\u003cp\u003eLoading routine that takes the file path and returns a SATProblem. All variables will be set to false in the initial \nsetup, and the truth values of all clauses set appropriately. \n\u003c/p\u003e",
        "fct-module": "FileFormat.SATLIB",
        "fct-package": "combinatorial-problems",
        "fct-signature": "FilePath -\u003e IO SATProblem",
        "fct-source": "src/FileFormat-SATLIB.html#loadCNFFile",
        "fct-type": "function",
        "title": "loadCNFFile"
      },
      "index": {
        "description": "Loading routine that takes the file path and returns SATProblem All variables will be set to false in the initial setup and the truth values of all clauses set appropriately",
        "hierarchy": "FileFormat SATLIB",
        "module": "FileFormat.SATLIB",
        "name": "loadCNFFile",
        "normalized": "FilePath-\u003eIO SATProblem",
        "package": "combinatorial-problems",
        "partial": "CNFFile",
        "signature": "FilePath-\u003eIO SATProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-SATLIB.html#v:saveAsCNF",
      "description": {
        "fct-descr": "\u003cp\u003eSave routine for SATProblem, outputs back into SATLIB cnf format. The code \u003ccode\u003e(loadCNFFile f) \u003e\u003e= (saveAsCNF f)\u003c/code\u003e should \nhave no effect upon the file. All information such as variable settings and the truth values of clauses is lost.\nTo save extra information use standard prelude write file function with show. I will try to improve on that \nat some point. \n\u003c/p\u003e",
        "fct-module": "FileFormat.SATLIB",
        "fct-package": "combinatorial-problems",
        "fct-signature": "FilePath -\u003e SATProblem -\u003e IO ()",
        "fct-source": "src/FileFormat-SATLIB.html#saveAsCNF",
        "fct-type": "function",
        "title": "saveAsCNF"
      },
      "index": {
        "description": "Save routine for SATProblem outputs back into SATLIB cnf format The code loadCNFFile saveAsCNF should have no effect upon the file All information such as variable settings and the truth values of clauses is lost To save extra information use standard prelude write file function with show will try to improve on that at some point",
        "hierarchy": "FileFormat SATLIB",
        "module": "FileFormat.SATLIB",
        "name": "saveAsCNF",
        "normalized": "FilePath-\u003eSATProblem-\u003eIO()",
        "package": "combinatorial-problems",
        "partial": "As CNF",
        "signature": "FilePath-\u003eSATProblem-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe loading routines for the TIM file format. \n I am not sure what (if anything) TIM stands for.\n The format has been used by the |International Timetabling Competition|\n which has been run twice so far (2002,2007). Problems in this format can be found on \n their websites. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "module",
        "fct-source": "src/FileFormat-TIM.html",
        "fct-type": "module",
        "title": "TIM"
      },
      "index": {
        "description": "The loading routines for the TIM file format am not sure what if anything TIM stands for The format has been used by the International Timetabling Competition which has been run twice so far Problems in this format can be found on their websites",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "TIM",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "TIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#t:RawTimeTableProblem",
      "description": {
        "fct-descr": "\u003cp\u003eThis is intended to be an internal format only, though I will provide access and visibility to it so that \n    it can be inspected by other programs. In practice I do not expect users to operate upon the raw problem, \n    but instead upon TimeTable.\n\u003c/p\u003e",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "data",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "data",
        "title": "RawTimeTableProblem"
      },
      "index": {
        "description": "This is intended to be an internal format only though will provide access and visibility to it so that it can be inspected by other programs In practice do not expect users to operate upon the raw problem but instead upon TimeTable",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "RawTimeTableProblem",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Raw Time Table Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:RawTimeTableProblem",
      "description": {
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "RawTimeTableProblem",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "RawTimeTableProblem"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "RawTimeTableProblem",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Raw Time Table Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:convertToConstrainedProblem",
      "description": {
        "fct-descr": "\u003cp\u003eUse the raw data to constrain problem. Only rooms that can reasonably be chosen (feature and size constraints) should be available for specific events and so on. \n    In short I am doing my own constraint (hard coded urg) processing here. \n\u003c/p\u003e",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "RawTimeTableProblem -\u003e TimeTable",
        "fct-source": "src/FileFormat-TIM.html#convertToConstrainedProblem",
        "fct-type": "function",
        "title": "convertToConstrainedProblem"
      },
      "index": {
        "description": "Use the raw data to constrain problem Only rooms that can reasonably be chosen feature and size constraints should be available for specific events and so on In short am doing my own constraint hard coded urg processing here",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "convertToConstrainedProblem",
        "normalized": "RawTimeTableProblem-\u003eTimeTable",
        "package": "combinatorial-problems",
        "partial": "To Constrained Problem",
        "signature": "RawTimeTableProblem-\u003eTimeTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:loadTIMFile",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a TIM file, and transform it into the constrained data format so that the look up tables no longer give back just ones and zeros, \n    but lists of valid options. This should be easier to work with. \n\u003c/p\u003e",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "String -\u003e IO TimeTable",
        "fct-source": "src/FileFormat-TIM.html#loadTIMFile",
        "fct-type": "function",
        "title": "loadTIMFile"
      },
      "index": {
        "description": "Load TIM file and transform it into the constrained data format so that the look up tables no longer give back just ones and zeros but lists of valid options This should be easier to work with",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "loadTIMFile",
        "normalized": "String-\u003eIO TimeTable",
        "package": "combinatorial-problems",
        "partial": "TIMFile",
        "signature": "String-\u003eIO TimeTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:loadTIMFileRaw",
      "description": {
        "fct-descr": "\u003cp\u003eLoad in a TIM file, but keep the data in the original form, as a large number of grids of bits.\n\u003c/p\u003e",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "String -\u003e IO RawTimeTableProblem",
        "fct-source": "src/FileFormat-TIM.html#loadTIMFileRaw",
        "fct-type": "function",
        "title": "loadTIMFileRaw"
      },
      "index": {
        "description": "Load in TIM file but keep the data in the original form as large number of grids of bits",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "loadTIMFileRaw",
        "normalized": "String-\u003eIO RawTimeTableProblem",
        "package": "combinatorial-problems",
        "partial": "TIMFile Raw",
        "signature": "String-\u003eIO RawTimeTableProblem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:parseFile",
      "description": {
        "fct-descr": "\u003cp\u003eparseFile is a file parser for the \u003cem\u003etim\u003c/em\u003e format. For the output format, the FullyDescriptiveTimeTableProblem data type, \n    I have included a number of slots per day and number of days. These are constants in this loading routine. \n\u003c/p\u003e",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Parser RawTimeTableProblem",
        "fct-source": "src/FileFormat-TIM.html#parseFile",
        "fct-type": "function",
        "title": "parseFile"
      },
      "index": {
        "description": "parseFile is file parser for the tim format For the output format the FullyDescriptiveTimeTableProblem data type have included number of slots per day and number of days These are constants in this loading routine",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "parseFile",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawEventFeatureLookup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "EventNumber -\u003e [FeatureNumber]",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawEventFeatureLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawEventFeatureLookup",
        "normalized": "EventNumber-\u003e[FeatureNumber]",
        "package": "combinatorial-problems",
        "partial": "Event Feature Lookup",
        "signature": "EventNumber-\u003e[FeatureNumber]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfDays",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawNumberOfDays"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawNumberOfDays",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Number Of Days",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfEvents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawNumberOfEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawNumberOfEvents",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Number Of Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfFeatures",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawNumberOfFeatures"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawNumberOfFeatures",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Number Of Features",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfPeople",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawNumberOfPeople"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawNumberOfPeople",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Number Of People",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfRooms",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawNumberOfRooms"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawNumberOfRooms",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Number Of Rooms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawNumberOfSlotsPerDay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "Int",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawNumberOfSlotsPerDay"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawNumberOfSlotsPerDay",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "Number Of Slots Per Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawPersonEventLookup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "PersonNumber -\u003e [EventNumber]",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawPersonEventLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawPersonEventLookup",
        "normalized": "PersonNumber-\u003e[EventNumber]",
        "package": "combinatorial-problems",
        "partial": "Person Event Lookup",
        "signature": "PersonNumber-\u003e[EventNumber]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawRoomFeatureLookup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "RoomNumber -\u003e [FeatureNumber]",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawRoomFeatureLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawRoomFeatureLookup",
        "normalized": "RoomNumber-\u003e[FeatureNumber]",
        "package": "combinatorial-problems",
        "partial": "Room Feature Lookup",
        "signature": "RoomNumber-\u003e[FeatureNumber]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawRoomSizes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "RoomNumber -\u003e Int",
        "fct-source": "src/FileFormat-TIM.html#RawTimeTableProblem",
        "fct-type": "function",
        "title": "rawRoomSizes"
      },
      "index": {
        "description": "",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawRoomSizes",
        "normalized": "RoomNumber-\u003eInt",
        "package": "combinatorial-problems",
        "partial": "Room Sizes",
        "signature": "RoomNumber-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TIM.html#v:rawToCSV",
      "description": {
        "fct-descr": "\u003cp\u003eThis is for human readability. It will take a raw format and return a comma and new line separated format as a String. Dump the string to a file\n    and it should now be easy to load into a spread sheet and inspect. I was not comfortable incoding this as a |show| function, it seems to me that there\n    is far too much information here to easily display it to a user, at least in a terminal window. \n\u003c/p\u003e",
        "fct-module": "FileFormat.TIM",
        "fct-package": "combinatorial-problems",
        "fct-signature": "RawTimeTableProblem -\u003e String",
        "fct-source": "src/FileFormat-TIM.html#rawToCSV",
        "fct-type": "function",
        "title": "rawToCSV"
      },
      "index": {
        "description": "This is for human readability It will take raw format and return comma and new line separated format as String Dump the string to file and it should now be easy to load into spread sheet and inspect was not comfortable incoding this as show function it seems to me that there is far too much information here to easily display it to user at least in terminal window",
        "hierarchy": "FileFormat TIM",
        "module": "FileFormat.TIM",
        "name": "rawToCSV",
        "normalized": "RawTimeTableProblem-\u003eString",
        "package": "combinatorial-problems",
        "partial": "To CSV",
        "signature": "RawTimeTableProblem-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TSPLIB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePartial loading routines for the TSPLIB file format.\n The format itself has a large number of variations, \n and this has only been designed to load the \u003ccode\u003etsp\u003c/code\u003e and \n \u003ccode\u003eatsp\u003c/code\u003e variants. It has been tried on all the files\n from the repository in these classes and it parses\n them at least. \n\u003c/p\u003e\u003cp\u003eRelies upon the \u003ccode\u003eCombinatorialOptimisation.TSP\u003c/code\u003e library.\n\u003c/p\u003e\u003cp\u003eCurrently this does not use the Haskell parsing \n libraries, nor ByteString, just some custom built\n routines.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FileFormat.TSPLIB",
        "fct-package": "combinatorial-problems",
        "fct-signature": "module",
        "fct-source": "src/FileFormat-TSPLIB.html",
        "fct-type": "module",
        "title": "TSPLIB"
      },
      "index": {
        "description": "Partial loading routines for the TSPLIB file format The format itself has large number of variations and this has only been designed to load the tsp and atsp variants It has been tried on all the files from the repository in these classes and it parses them at least Relies upon the CombinatorialOptimisation.TSP library Currently this does not use the Haskell parsing libraries nor ByteString just some custom built routines",
        "hierarchy": "FileFormat TSPLIB",
        "module": "FileFormat.TSPLIB",
        "name": "TSPLIB",
        "normalized": "",
        "package": "combinatorial-problems",
        "partial": "TSPLIB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combinatorial-problems/docs/FileFormat-TSPLIB.html#v:loadTSPFile",
      "description": {
        "fct-descr": "\u003cp\u003eLoads a TSPLIB style file. The first parameter is the internal \n      storage type from \u003ccode\u003eCombinatorialProblems.TSP\u003c/code\u003e. It allows for \n      full matrix, triangular matrix and full recalculation. If the \n      requested internal storage cannot be used with the file, this \n      will throw an error (e.g. recomputation where you are given a \n      full matrix in the file).\n\u003c/p\u003e\u003cp\u003eThe second parameter is the file path. \n\u003c/p\u003e",
        "fct-module": "FileFormat.TSPLIB",
        "fct-package": "combinatorial-problems",
        "fct-signature": "InternalStorage -\u003e FilePath -\u003e IO TSPProblem",
        "fct-source": "src/FileFormat-TSPLIB.html#loadTSPFile",
        "fct-type": "function",
        "title": "loadTSPFile"
      },
      "index": {
        "description": "Loads TSPLIB style file The first parameter is the internal storage type from CombinatorialProblems.TSP It allows for full matrix triangular matrix and full recalculation If the requested internal storage cannot be used with the file this will throw an error e.g recomputation where you are given full matrix in the file The second parameter is the file path",
        "hierarchy": "FileFormat TSPLIB",
        "module": "FileFormat.TSPLIB",
        "name": "loadTSPFile",
        "normalized": "InternalStorage-\u003eFilePath-\u003eIO TSPProblem",
        "package": "combinatorial-problems",
        "partial": "TSPFile",
        "signature": "InternalStorage-\u003eFilePath-\u003eIO TSPProblem"
      }
    }
  }
]