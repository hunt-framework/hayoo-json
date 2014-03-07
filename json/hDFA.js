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
        "word": "hDFA"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003egraphviz DOT format operations.\n\u003c/p\u003e\u003cp\u003eSupport here is rudimentary. It is probably better to build it on\n top of one of the existing libraries on Hackage.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DFA.DOT",
          "name": "DOT",
          "package": "hDFA",
          "source": "src/Data-DFA-DOT.html",
          "type": "module"
        },
        "index": {
          "description": "graphviz DOT format operations Support here is rudimentary It is probably better to build it on top of one of the existing libraries on Hackage",
          "hierarchy": "Data DFA DOT",
          "module": "Data.DFA.DOT",
          "name": "DOT",
          "package": "hDFA",
          "partial": "DOT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA-DOT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite \u003ccode\u003eDFA\u003c/code\u003e to a file with the given \u003ccode\u003eFilePath\u003c/code\u003e in graphviz DOT\n format, using the given labelling function.\n\u003c/p\u003e",
          "module": "Data.DFA.DOT",
          "name": "writeToFile",
          "package": "hDFA",
          "signature": "DFA -\u003e FilePath -\u003e (Label -\u003e String) -\u003e IO ()",
          "source": "src/Data-DFA-DOT.html#writeToFile",
          "type": "function"
        },
        "index": {
          "description": "Write DFA to file with the given FilePath in graphviz DOT format using the given labelling function",
          "hierarchy": "Data DFA DOT",
          "module": "Data.DFA.DOT",
          "name": "writeToFile",
          "normalized": "DFA-\u003eFilePath-\u003e(Label-\u003eString)-\u003eIO()",
          "package": "hDFA",
          "partial": "To File",
          "signature": "DFA-\u003eFilePath-\u003e(Label-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA-DOT.html#v:writeToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBerkeley KISS2 format operations.\n\u003c/p\u003e\u003cp\u003eWe use this to interface with STAMINA.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DFA.KISS2",
          "name": "KISS2",
          "package": "hDFA",
          "source": "src/Data-DFA-KISS2.html",
          "type": "module"
        },
        "index": {
          "description": "Berkeley KISS2 format operations We use this to interface with STAMINA",
          "hierarchy": "Data DFA KISS2",
          "module": "Data.DFA.KISS2",
          "name": "KISS2",
          "package": "hDFA",
          "partial": "KISS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA-KISS2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003eDFA\u003c/code\u003e from Berkeley KISS2 format.\n\u003c/p\u003e\u003cp\u003eA very sloppy and incomplete parser. Assumes there is a single\n output.\n\u003c/p\u003e",
          "module": "Data.DFA.KISS2",
          "name": "read",
          "package": "hDFA",
          "signature": "Bool -\u003e String -\u003e IO DFA",
          "source": "src/Data-DFA-KISS2.html#read",
          "type": "function"
        },
        "index": {
          "description": "Read DFA from Berkeley KISS2 format very sloppy and incomplete parser Assumes there is single output",
          "hierarchy": "Data DFA KISS2",
          "module": "Data.DFA.KISS2",
          "name": "read",
          "normalized": "Bool-\u003eString-\u003eIO DFA",
          "package": "hDFA",
          "signature": "Bool-\u003eString-\u003eIO DFA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA-KISS2.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite \u003ccode\u003eDFA\u003c/code\u003e to a file with the given \u003ccode\u003eFilePath\u003c/code\u003e in Berkeley KISS2 format.\n\u003c/p\u003e",
          "module": "Data.DFA.KISS2",
          "name": "writeToFile",
          "package": "hDFA",
          "signature": "DFA -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-DFA-KISS2.html#writeToFile",
          "type": "function"
        },
        "index": {
          "description": "Write DFA to file with the given FilePath in Berkeley KISS2 format",
          "hierarchy": "Data DFA KISS2",
          "module": "Data.DFA.KISS2",
          "name": "writeToFile",
          "normalized": "DFA-\u003eFilePath-\u003eIO()",
          "package": "hDFA",
          "partial": "To File",
          "signature": "DFA-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA-KISS2.html#v:writeToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to the Berkeley/Colorado STAMINA tool.\n\u003c/p\u003e\u003cp\u003eSTAMINA minimizes the number of states in an under-specified finite\n state automata. This problem is NP-complete in general (unlike the\n problem solved by Hopcroft's algorithm and its modern\n descendants.).\n\u003c/p\u003e\u003cp\u003eIt is part of Berkeley's SIS distribution: \u003ca\u003ehttp://embedded.eecs.berkeley.edu/pubs/downloads/sis/index.htm\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DFA.STAMINA",
          "name": "STAMINA",
          "package": "hDFA",
          "source": "src/Data-DFA-STAMINA.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to the Berkeley Colorado STAMINA tool STAMINA minimizes the number of states in an under-specified finite state automata This problem is NP-complete in general unlike the problem solved by Hopcroft algorithm and its modern descendants It is part of Berkeley SIS distribution http embedded.eecs.berkeley.edu pubs downloads sis index.htm",
          "hierarchy": "Data DFA STAMINA",
          "module": "Data.DFA.STAMINA",
          "name": "STAMINA",
          "package": "hDFA",
          "partial": "STAMINA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA-STAMINA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimize an automaton using STAMINA.\n\u003c/p\u003e\u003cp\u003eThe first argument is the path to STAMINA.\n\u003c/p\u003e\u003cp\u003eFIXME This creates a new DFA (it really shouldn't). It inherits the\n debugging setting from the argument \u003ccode\u003eDFA\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DFA.STAMINA",
          "name": "minimize",
          "package": "hDFA",
          "signature": "FilePath -\u003e DFA -\u003e IO DFA",
          "source": "src/Data-DFA-STAMINA.html#minimize",
          "type": "function"
        },
        "index": {
          "description": "Minimize an automaton using STAMINA The first argument is the path to STAMINA FIXME This creates new DFA it really shouldn It inherits the debugging setting from the argument DFA",
          "hierarchy": "Data DFA STAMINA",
          "module": "Data.DFA.STAMINA",
          "name": "minimize",
          "normalized": "FilePath-\u003eDFA-\u003eIO DFA",
          "package": "hDFA",
          "signature": "FilePath-\u003eDFA-\u003eIO DFA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA-STAMINA.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentation of DFAs and some simple algorithms on them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DFA",
          "name": "DFA",
          "package": "hDFA",
          "source": "src/Data-DFA.html",
          "type": "module"
        },
        "index": {
          "description": "Representation of DFAs and some simple algorithms on them",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "DFA",
          "package": "hDFA",
          "partial": "DFA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of DFAs is abstract: it is a pointer to a C \u003ccode\u003estruct\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "DFA",
          "package": "hDFA",
          "source": "src/Data-DFA.html#DFA",
          "type": "data"
        },
        "index": {
          "description": "The type of DFAs is abstract it is pointer to struct",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "DFA",
          "package": "hDFA",
          "partial": "DFA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#t:DFA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabels are represented using C \u003ccode\u003eunsigned int\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "Label",
          "package": "hDFA",
          "source": "src/Data-DFA.html#Label",
          "type": "type"
        },
        "index": {
          "description": "Labels are represented using unsigned int",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "Label",
          "package": "hDFA",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStates are represented using C \u003ccode\u003eunsigned int\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "State",
          "package": "hDFA",
          "source": "src/Data-DFA.html#State",
          "type": "type"
        },
        "index": {
          "description": "States are represented using unsigned int",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "State",
          "package": "hDFA",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a transition from the given \u003ccode\u003eState\u003c/code\u003e on the given \u003ccode\u003eLabel\u003c/code\u003e to\n the given \u003ccode\u003eState\u003c/code\u003e to \u003ccode\u003eDFA\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "addTransition",
          "package": "hDFA",
          "signature": "DFA -\u003e (State, Label, State) -\u003e IO ()",
          "source": "src/Data-DFA.html#addTransition",
          "type": "function"
        },
        "index": {
          "description": "Add transition from the given State on the given Label to the given State to DFA",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "addTransition",
          "normalized": "DFA-\u003e(State,Label,State)-\u003eIO()",
          "package": "hDFA",
          "partial": "Transition",
          "signature": "DFA-\u003e(State,Label,State)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:addTransition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the debugging flag set?\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "debugging",
          "package": "hDFA",
          "signature": "DFA -\u003e IO Bool",
          "source": "src/Data-DFA.html#debugging",
          "type": "function"
        },
        "index": {
          "description": "Is the debugging flag set",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "debugging",
          "normalized": "DFA-\u003eIO Bool",
          "package": "hDFA",
          "signature": "DFA-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:debugging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a \u003ccode\u003eDFA\u003c/code\u003e to a file in a standard format. (See the accompanying examples and \u003ccode\u003edfa.c\u003c/code\u003e for details.)\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "dumpToFile",
          "package": "hDFA",
          "signature": "DFA -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-DFA.html#dumpToFile",
          "type": "function"
        },
        "index": {
          "description": "Dump DFA to file in standard format See the accompanying examples and dfa.c for details",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "dumpToFile",
          "normalized": "DFA-\u003eFilePath-\u003eIO()",
          "package": "hDFA",
          "partial": "To File",
          "signature": "DFA-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:dumpToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGarbage collect a \u003ccode\u003eDFA\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "finished",
          "package": "hDFA",
          "signature": "DFA -\u003e IO ()",
          "source": "src/Data-DFA.html#finished",
          "type": "function"
        },
        "index": {
          "description": "Garbage collect DFA",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "finished",
          "normalized": "DFA-\u003eIO()",
          "package": "hDFA",
          "signature": "DFA-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse the transitions of \u003ccode\u003eDFA\u003c/code\u003e by invoking the given function\n on each of them.\n\u003c/p\u003e\u003cp\u003eDFAs aren't functorial (they're monomorphic), so we cannot use\n \u003ccode\u003eTraversable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "foldTransitions",
          "package": "hDFA",
          "signature": "DFA -\u003e ((State, Label, State, Bool) -\u003e b -\u003e IO b) -\u003e b -\u003e IO b",
          "source": "src/Data-DFA.html#foldTransitions",
          "type": "function"
        },
        "index": {
          "description": "Traverse the transitions of DFA by invoking the given function on each of them DFAs aren functorial they re monomorphic so we cannot use Traversable",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "foldTransitions",
          "normalized": "DFA-\u003e((State,Label,State,Bool)-\u003ea-\u003eIO a)-\u003ea-\u003eIO a",
          "package": "hDFA",
          "partial": "Transitions",
          "signature": "DFA-\u003e((State,Label,State,Bool)-\u003eb-\u003eIO b)-\u003eb-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:foldTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the initial state.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "getInitialState",
          "package": "hDFA",
          "signature": "DFA -\u003e IO State",
          "source": "src/Data-DFA.html#getInitialState",
          "type": "function"
        },
        "index": {
          "description": "Get the initial state",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "getInitialState",
          "normalized": "DFA-\u003eIO State",
          "package": "hDFA",
          "partial": "Initial State",
          "signature": "DFA-\u003eIO State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:getInitialState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003eDFA\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "initialize",
          "package": "hDFA",
          "signature": "Bool-\u003e State-\u003e IO DFA",
          "type": "function"
        },
        "index": {
          "description": "Create new DFA",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "initialize",
          "normalized": "Bool-\u003eState-\u003eIO DFA",
          "package": "hDFA",
          "signature": "Bool-\u003eState-\u003eIO DFA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the state \u003ccode\u003es\u003c/code\u003e final?\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "isFinal",
          "package": "hDFA",
          "signature": "DFA -\u003e State -\u003e IO Bool",
          "source": "src/Data-DFA.html#isFinal",
          "type": "function"
        },
        "index": {
          "description": "Is the state final",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "isFinal",
          "normalized": "DFA-\u003eState-\u003eIO Bool",
          "package": "hDFA",
          "partial": "Final",
          "signature": "DFA-\u003eState-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:isFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003eDFA\u003c/code\u003e from a file in a standard format. (See the accompanying examples and \u003ccode\u003edfa.c\u003c/code\u003e for details.)\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "loadFromFile",
          "package": "hDFA",
          "signature": "FilePath -\u003e IO DFA",
          "source": "src/Data-DFA.html#loadFromFile",
          "type": "function"
        },
        "index": {
          "description": "Load DFA from file in standard format See the accompanying examples and dfa.c for details",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "loadFromFile",
          "normalized": "FilePath-\u003eIO DFA",
          "package": "hDFA",
          "partial": "From File",
          "signature": "FilePath-\u003eIO DFA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:loadFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the \u003ccode\u003eDFA\u003c/code\u003e using Antti Valmari's algorithm. The result\n should be the same as for the standard algorithm due to Hopcroft.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "minimize",
          "package": "hDFA",
          "signature": "DFA-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Reduce the DFA using Antti Valmari algorithm The result should be the same as for the standard algorithm due to Hopcroft",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "minimize",
          "normalized": "DFA-\u003eBool-\u003eIO()",
          "package": "hDFA",
          "signature": "DFA-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of states that are actually present in \u003ccode\u003eDFA\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "numStates",
          "package": "hDFA",
          "signature": "DFA -\u003e IO CUInt",
          "source": "src/Data-DFA.html#numStates",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of states that are actually present in DFA",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "numStates",
          "normalized": "DFA-\u003eIO CUInt",
          "package": "hDFA",
          "partial": "States",
          "signature": "DFA-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:numStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of symbols that are actually present in \u003ccode\u003eDFA\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "numSymbols",
          "package": "hDFA",
          "signature": "DFA -\u003e IO CUInt",
          "source": "src/Data-DFA.html#numSymbols",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of symbols that are actually present in DFA",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "numSymbols",
          "normalized": "DFA-\u003eIO CUInt",
          "package": "hDFA",
          "partial": "Symbols",
          "signature": "DFA-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:numSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the final bit associated with \u003ccode\u003eState\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe minimization algorithm will distinguish states with different\n bits (that are otherwise bisimilar).\n\u003c/p\u003e",
          "module": "Data.DFA",
          "name": "setFinal",
          "package": "hDFA",
          "signature": "DFA -\u003e State -\u003e IO ()",
          "source": "src/Data-DFA.html#setFinal",
          "type": "function"
        },
        "index": {
          "description": "Set the final bit associated with State The minimization algorithm will distinguish states with different bits that are otherwise bisimilar",
          "hierarchy": "Data DFA",
          "module": "Data.DFA",
          "name": "setFinal",
          "normalized": "DFA-\u003eState-\u003eIO()",
          "package": "hDFA",
          "partial": "Final",
          "signature": "DFA-\u003eState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hDFA/docs/Data-DFA.html#v:setFinal"
      }
    }
  ]
]