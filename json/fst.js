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
        "word": "fst"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinite state automatons\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.Automaton",
          "name": "Automaton",
          "package": "fst",
          "source": "src/FST-Automaton.html",
          "type": "module"
        },
        "index": {
          "description": "Finite state automatons",
          "hierarchy": "FST Automaton",
          "module": "FST.Automaton",
          "name": "Automaton",
          "package": "fst",
          "partial": "Automaton",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Automaton.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for an automaton\n\u003c/p\u003e",
          "module": "FST.Automaton",
          "name": "Automaton",
          "package": "fst",
          "source": "src/FST-Automaton.html#Automaton",
          "type": "data"
        },
        "index": {
          "description": "Data type for an automaton",
          "hierarchy": "FST Automaton",
          "module": "FST.Automaton",
          "name": "Automaton",
          "package": "fst",
          "partial": "Automaton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Automaton.html#t:Automaton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for conversion to/from an automaton\n\u003c/p\u003e",
          "module": "FST.Automaton",
          "name": "Convertable",
          "package": "fst",
          "source": "src/FST-Automaton.html#Convertable",
          "type": "class"
        },
        "index": {
          "description": "Type class for conversion to from an automaton",
          "hierarchy": "FST Automaton",
          "module": "FST.Automaton",
          "name": "Convertable",
          "package": "fst",
          "partial": "Convertable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Automaton.html#t:Convertable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an automaton\n\u003c/p\u003e",
          "module": "FST.Automaton",
          "name": "construct",
          "package": "fst",
          "signature": "(FirstState, LastState) -\u003e TransitionTable a -\u003e Sigma a -\u003e InitialStates -\u003e FinalStates -\u003e Automaton a",
          "source": "src/FST-Automaton.html#construct",
          "type": "function"
        },
        "index": {
          "description": "Construct an automaton",
          "hierarchy": "FST Automaton",
          "module": "FST.Automaton",
          "name": "construct",
          "normalized": "(FirstState,LastState)-\u003eTransitionTable a-\u003eSigma a-\u003eInitialStates-\u003eFinalStates-\u003eAutomaton a",
          "package": "fst",
          "signature": "(FirstState,LastState)-\u003eTransitionTable a-\u003eSigma a-\u003eInitialStates-\u003eFinalStates-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Automaton.html#v:construct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.Automaton",
          "name": "decode",
          "package": "fst",
          "signature": "decode",
          "source": "src/FST-Automaton.html#decode",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST Automaton",
          "module": "FST.Automaton",
          "name": "decode",
          "package": "fst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Automaton.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.Automaton",
          "name": "encode",
          "package": "fst",
          "signature": "encode",
          "source": "src/FST-Automaton.html#encode",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST Automaton",
          "module": "FST.Automaton",
          "name": "encode",
          "package": "fst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Automaton.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert automaton labelled with something other than\n   states to an \u003ccode\u003e\u003ca\u003eAutomaton\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FST.Automaton",
          "name": "rename",
          "package": "fst",
          "signature": "[(b, [(a, b)])] -\u003e Sigma a -\u003e [b] -\u003e [b] -\u003e StateTy -\u003e Automaton a",
          "source": "src/FST-Automaton.html#rename",
          "type": "function"
        },
        "index": {
          "description": "Convert automaton labelled with something other than states to an Automaton",
          "hierarchy": "FST Automaton",
          "module": "FST.Automaton",
          "name": "rename",
          "normalized": "[(a,[(b,a)])]-\u003eSigma b-\u003e[a]-\u003e[a]-\u003eStateTy-\u003eAutomaton b",
          "package": "fst",
          "signature": "[(b,[(a,b)])]-\u003eSigma a-\u003e[b]-\u003e[b]-\u003eStateTy-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Automaton.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay the automaton\n\u003c/p\u003e",
          "module": "[\"FST.Automaton\",\"FST.AutomatonInterface\"]",
          "name": "showAutomaton",
          "package": "fst",
          "signature": "Automaton a -\u003e String",
          "source": "src/FST-Automaton.html#showAutomaton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-Automaton.html#v:showAutomaton\",\"http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:showAutomaton\"]"
        },
        "index": {
          "description": "Display the automaton",
          "hierarchy": "FST Automaton",
          "module": "FST.Automaton",
          "name": "showAutomaton",
          "normalized": "Automaton a-\u003eString",
          "package": "fst",
          "partial": "Automaton",
          "signature": "Automaton a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Automaton.html#v:showAutomaton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAPI for finite state automatons\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.AutomatonInterface",
          "name": "AutomatonInterface",
          "package": "fst",
          "source": "src/FST-AutomatonInterface.html",
          "type": "module"
        },
        "index": {
          "description": "API for finite state automatons",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "AutomatonInterface",
          "package": "fst",
          "partial": "Automaton Interface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for an automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonInterface",
          "name": "Automaton",
          "package": "fst",
          "source": "src/FST-Automaton.html#Automaton",
          "type": "data"
        },
        "index": {
          "description": "Data type for an automaton",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "Automaton",
          "package": "fst",
          "partial": "Automaton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#t:Automaton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a minimized non-deterministic finite-state automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonInterface",
          "name": "compile",
          "package": "fst",
          "signature": "Reg a -\u003e Sigma a -\u003e StateTy -\u003e Automaton a",
          "source": "src/FST-AutomatonInterface.html#compile",
          "type": "function"
        },
        "index": {
          "description": "Compile minimized non-deterministic finite-state automaton",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "compile",
          "normalized": "Reg a-\u003eSigma a-\u003eStateTy-\u003eAutomaton a",
          "package": "fst",
          "signature": "Reg a-\u003eSigma a-\u003eStateTy-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a non-deterministic finite-state automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonInterface",
          "name": "compileNFA",
          "package": "fst",
          "signature": "Reg a -\u003e Sigma a -\u003e StateTy -\u003e Automaton a",
          "source": "src/FST-AutomatonInterface.html#compileNFA",
          "type": "function"
        },
        "index": {
          "description": "Compile non-deterministic finite-state automaton",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "compileNFA",
          "normalized": "Reg a-\u003eSigma a-\u003eStateTy-\u003eAutomaton a",
          "package": "fst",
          "partial": "NFA",
          "signature": "Reg a-\u003eSigma a-\u003eStateTy-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:compileNFA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a automaton complete (transition on every symbol at every state)\n\u003c/p\u003e",
          "module": "[\"FST.AutomatonInterface\",\"FST.Complete\"]",
          "name": "complete",
          "package": "fst",
          "signature": "Automaton a -\u003e Automaton a",
          "source": "src/FST-Complete.html#complete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:complete\",\"http://hackage.haskell.org/package/fst/docs/FST-Complete.html#v:complete\"]"
        },
        "index": {
          "description": "Make automaton complete transition on every symbol at every state",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "complete",
          "normalized": "Automaton a-\u003eAutomaton a",
          "package": "fst",
          "signature": "Automaton a-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:complete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a non-deterministic finite-state automaton deterministic\n\u003c/p\u003e",
          "module": "FST.AutomatonInterface",
          "name": "determinize",
          "package": "fst",
          "signature": "Automaton a -\u003e Automaton a",
          "source": "src/FST-AutomatonInterface.html#determinize",
          "type": "function"
        },
        "index": {
          "description": "Make non-deterministic finite-state automaton deterministic",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "determinize",
          "normalized": "Automaton a-\u003eAutomaton a",
          "package": "fst",
          "signature": "Automaton a-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:determinize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the initial state of a finite-state automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonInterface",
          "name": "initial",
          "package": "fst",
          "signature": "Automaton a -\u003e StateTy",
          "source": "src/FST-AutomatonInterface.html#initial",
          "type": "function"
        },
        "index": {
          "description": "Get the initial state of finite-state automaton",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "initial",
          "normalized": "Automaton a-\u003eStateTy",
          "package": "fst",
          "signature": "Automaton a-\u003eStateTy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimize an automaton using the Brzozowski algorithm. Note that\n the determinize function must construct an automaton with the\n usefulS property.\n\u003c/p\u003e",
          "module": "FST.AutomatonInterface",
          "name": "minimize",
          "package": "fst",
          "signature": "Automaton a -\u003e Automaton a",
          "source": "src/FST-AutomatonInterface.html#minimize",
          "type": "function"
        },
        "index": {
          "description": "Minimize an automaton using the Brzozowski algorithm Note that the determinize function must construct an automaton with the usefulS property",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "minimize",
          "normalized": "Automaton a-\u003eAutomaton a",
          "package": "fst",
          "signature": "Automaton a-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of states in a finite-state automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonInterface",
          "name": "numberOfStates",
          "package": "fst",
          "signature": "Automaton a -\u003e Int",
          "source": "src/FST-AutomatonInterface.html#numberOfStates",
          "type": "function"
        },
        "index": {
          "description": "Count the number of states in finite-state automaton",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "numberOfStates",
          "normalized": "Automaton a-\u003eInt",
          "package": "fst",
          "partial": "Of States",
          "signature": "Automaton a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:numberOfStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of transitions in a finite-state automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonInterface",
          "name": "numberOfTransitions",
          "package": "fst",
          "signature": "Automaton a -\u003e Int",
          "source": "src/FST-AutomatonInterface.html#numberOfTransitions",
          "type": "function"
        },
        "index": {
          "description": "Count the number of transitions in finite-state automaton",
          "hierarchy": "FST AutomatonInterface",
          "module": "FST.AutomatonInterface",
          "name": "numberOfTransitions",
          "normalized": "Automaton a-\u003eInt",
          "package": "fst",
          "partial": "Of Transitions",
          "signature": "Automaton a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonInterface.html#v:numberOfTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for Automaton\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.AutomatonTypes",
          "name": "AutomatonTypes",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html",
          "type": "module"
        },
        "index": {
          "description": "Types for Automaton",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "AutomatonTypes",
          "package": "fst",
          "partial": "Automaton Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of AutomatonFunctions\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "AutomatonFunctions",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#AutomatonFunctions",
          "type": "class"
        },
        "index": {
          "description": "Class of AutomatonFunctions",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "AutomatonFunctions",
          "package": "fst",
          "partial": "Automaton Functions",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#t:AutomatonFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinal states\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "FinalStates",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#FinalStates",
          "type": "type"
        },
        "index": {
          "description": "Final states",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "FinalStates",
          "package": "fst",
          "partial": "Final States",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#t:FinalStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst state\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "FirstState",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#FirstState",
          "type": "type"
        },
        "index": {
          "description": "First state",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "FirstState",
          "package": "fst",
          "partial": "First State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#t:FirstState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial states\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "InitialStates",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#InitialStates",
          "type": "type"
        },
        "index": {
          "description": "Initial states",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "InitialStates",
          "package": "fst",
          "partial": "Initial States",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#t:InitialStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast state\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "LastState",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#LastState",
          "type": "type"
        },
        "index": {
          "description": "Last state",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "LastState",
          "package": "fst",
          "partial": "Last State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#t:LastState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe alphabet of an automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "Sigma",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#Sigma",
          "type": "type"
        },
        "index": {
          "description": "The alphabet of an automaton",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "Sigma",
          "package": "fst",
          "partial": "Sigma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#t:Sigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "StateTy",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#StateTy",
          "type": "type"
        },
        "index": {
          "description": "state",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "StateTy",
          "package": "fst",
          "partial": "State Ty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#t:StateTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable of transitions\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "TransitionTable",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#TransitionTable",
          "type": "type"
        },
        "index": {
          "description": "Table of transitions",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "TransitionTable",
          "package": "fst",
          "partial": "Transition Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#t:TransitionTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransitions\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "Transitions",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#Transitions",
          "type": "type"
        },
        "index": {
          "description": "Transitions",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "Transitions",
          "package": "fst",
          "partial": "Transitions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#t:Transitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the alphabet of an automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "alphabet",
          "package": "fst",
          "signature": "f a -\u003e Sigma a",
          "source": "src/FST-AutomatonTypes.html#alphabet",
          "type": "method"
        },
        "index": {
          "description": "Get the alphabet of an automaton",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "alphabet",
          "normalized": "a b-\u003eSigma b",
          "package": "fst",
          "signature": "f a-\u003eSigma a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:alphabet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the final states of an automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "finals",
          "package": "fst",
          "signature": "f a -\u003e FinalStates",
          "source": "src/FST-AutomatonTypes.html#finals",
          "type": "method"
        },
        "index": {
          "description": "Get the final states of an automaton",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "finals",
          "normalized": "a b-\u003eFinalStates",
          "package": "fst",
          "signature": "f a-\u003eFinalStates",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:finals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first state of a automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "firstState",
          "package": "fst",
          "signature": "f a -\u003e StateTy",
          "source": "src/FST-AutomatonTypes.html#firstState",
          "type": "method"
        },
        "index": {
          "description": "Get the first state of automaton",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "firstState",
          "normalized": "a b-\u003eStateTy",
          "package": "fst",
          "partial": "State",
          "signature": "f a-\u003eStateTy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:firstState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the initial states of an automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "initials",
          "package": "fst",
          "signature": "f a -\u003e InitialStates",
          "source": "src/FST-AutomatonTypes.html#initials",
          "type": "method"
        },
        "index": {
          "description": "Get the initial states of an automaton",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "initials",
          "normalized": "a b-\u003eInitialStates",
          "package": "fst",
          "signature": "f a-\u003eInitialStates",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:initials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given state a final state?\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "isFinal",
          "package": "fst",
          "signature": "f a -\u003e StateTy -\u003e Bool",
          "source": "src/FST-AutomatonTypes.html#isFinal",
          "type": "method"
        },
        "index": {
          "description": "Is the given state final state",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "isFinal",
          "normalized": "a b-\u003eStateTy-\u003eBool",
          "package": "fst",
          "partial": "Final",
          "signature": "f a-\u003eStateTy-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:isFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last state of a automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "lastState",
          "package": "fst",
          "signature": "f a -\u003e StateTy",
          "source": "src/FST-AutomatonTypes.html#lastState",
          "type": "method"
        },
        "index": {
          "description": "Get the last state of automaton",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "lastState",
          "normalized": "a b-\u003eStateTy",
          "package": "fst",
          "partial": "State",
          "signature": "f a-\u003eStateTy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:lastState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the states of an automaton\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "states",
          "package": "fst",
          "signature": "f a -\u003e [StateTy]",
          "source": "src/FST-AutomatonTypes.html#states",
          "type": "method"
        },
        "index": {
          "description": "Get the states of an automaton",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "states",
          "normalized": "a b-\u003e[StateTy]",
          "package": "fst",
          "signature": "f a-\u003e[StateTy]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:states"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the transitions w.r.t. a state\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "transitionList",
          "package": "fst",
          "signature": "f a -\u003e StateTy -\u003e Transitions a",
          "source": "src/FST-AutomatonTypes.html#transitionList",
          "type": "method"
        },
        "index": {
          "description": "Get the transitions w.r.t state",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "transitionList",
          "normalized": "a b-\u003eStateTy-\u003eTransitions b",
          "package": "fst",
          "partial": "List",
          "signature": "f a-\u003eStateTy-\u003eTransitions a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:transitionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the transitionTable\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "transitionTable",
          "package": "fst",
          "signature": "f a -\u003e TransitionTable a",
          "source": "src/FST-AutomatonTypes.html#transitionTable",
          "type": "method"
        },
        "index": {
          "description": "Get the transitionTable",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "transitionTable",
          "normalized": "a b-\u003eTransitionTable b",
          "package": "fst",
          "partial": "Table",
          "signature": "f a-\u003eTransitionTable a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:transitionTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the transitions  w.r.t. a state and a symbol\n\u003c/p\u003e",
          "module": "FST.AutomatonTypes",
          "name": "transitions",
          "package": "fst",
          "signature": "f a -\u003e (StateTy, a) -\u003e [StateTy]",
          "source": "src/FST-AutomatonTypes.html#transitions",
          "type": "method"
        },
        "index": {
          "description": "Get the transitions w.r.t state and symbol",
          "hierarchy": "FST AutomatonTypes",
          "module": "FST.AutomatonTypes",
          "name": "transitions",
          "normalized": "a b-\u003e(StateTy,b)-\u003e[StateTy]",
          "package": "fst",
          "signature": "f a-\u003e(StateTy,a)-\u003e[StateTy]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-AutomatonTypes.html#v:transitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction for making an automaton complete (transition on every symbol at every state)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.Complete",
          "name": "Complete",
          "package": "fst",
          "source": "src/FST-Complete.html",
          "type": "module"
        },
        "index": {
          "description": "Function for making an automaton complete transition on every symbol at every state",
          "hierarchy": "FST Complete",
          "module": "FST.Complete",
          "name": "Complete",
          "package": "fst",
          "partial": "Complete",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Complete.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction for making automatons deterministic\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.Deterministic",
          "name": "Deterministic",
          "package": "fst",
          "source": "src/FST-Deterministic.html",
          "type": "module"
        },
        "index": {
          "description": "Function for making automatons deterministic",
          "hierarchy": "FST Deterministic",
          "module": "FST.Deterministic",
          "name": "Deterministic",
          "package": "fst",
          "partial": "Deterministic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Deterministic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an automaton deterministic and usefulS\n\u003c/p\u003e",
          "module": "FST.Deterministic",
          "name": "determinize",
          "package": "fst",
          "signature": "Automaton a -\u003e Automaton a",
          "source": "src/FST-Deterministic.html#determinize",
          "type": "function"
        },
        "index": {
          "description": "Make an automaton deterministic and usefulS",
          "hierarchy": "FST Deterministic",
          "module": "FST.Deterministic",
          "name": "determinize",
          "normalized": "Automaton a-\u003eAutomaton a",
          "package": "fst",
          "signature": "Automaton a-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Deterministic.html#v:determinize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction for making transducers deterministic\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.DeterministicT",
          "name": "DeterministicT",
          "package": "fst",
          "source": "src/FST-DeterministicT.html",
          "type": "module"
        },
        "index": {
          "description": "Function for making transducers deterministic",
          "hierarchy": "FST DeterministicT",
          "module": "FST.DeterministicT",
          "name": "DeterministicT",
          "package": "fst",
          "partial": "Deterministic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-DeterministicT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a deterministic, usefulS transducer\n\u003c/p\u003e",
          "module": "FST.DeterministicT",
          "name": "determinize",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a",
          "source": "src/FST-DeterministicT.html#determinize",
          "type": "function"
        },
        "index": {
          "description": "Construct deterministic usefulS transducer",
          "hierarchy": "FST DeterministicT",
          "module": "FST.DeterministicT",
          "name": "determinize",
          "normalized": "Transducer a-\u003eTransducer a",
          "package": "fst",
          "signature": "Transducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-DeterministicT.html#v:determinize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction for constructing an epsilon-free transducer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.EpsilonFreeT",
          "name": "EpsilonFreeT",
          "package": "fst",
          "source": "src/FST-EpsilonFreeT.html",
          "type": "module"
        },
        "index": {
          "description": "Function for constructing an epsilon-free transducer",
          "hierarchy": "FST EpsilonFreeT",
          "module": "FST.EpsilonFreeT",
          "name": "EpsilonFreeT",
          "package": "fst",
          "partial": "Epsilon Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-EpsilonFreeT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an epsilon-free, usefulS transducer\n\u003c/p\u003e",
          "module": "FST.EpsilonFreeT",
          "name": "epsilonfree",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a",
          "source": "src/FST-EpsilonFreeT.html#epsilonfree",
          "type": "function"
        },
        "index": {
          "description": "Construct an epsilon-free usefulS transducer",
          "hierarchy": "FST EpsilonFreeT",
          "module": "FST.EpsilonFreeT",
          "name": "epsilonfree",
          "normalized": "Transducer a-\u003eTransducer a",
          "package": "fst",
          "signature": "Transducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-EpsilonFreeT.html#v:epsilonfree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003efstStudio takes a program consisting of regular relations that denotes\nthe relation between two regular languages and constructs a\ntransducer. If a regular expression, not a relation, is given, then it\nis interpreted as the identity relation. The syntax is very similar to\nXerox's finite state transducer syntax with two fundamental\ndifferences: a distinction is made between functions (definitions) and\nstrings, and fststudio allows functional definitions.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\"a\"\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A symbol. Example: \u003ccode\u003e[\"b\"]\u003c/code\u003e denotes the language \u003ccode\u003e{\"b\"}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ea\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A variable. A symbol without quotes is a variable.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\"a\":\"b\"\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Describes a relation between the symbol \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\nThis relation is ordered and \u003ccode\u003ea\u003c/code\u003e is said to be a part of the /upper\nlanguage\u003cem\u003e and @b@ is said to be part of the \u003c/em\u003elower language/.\nExample: \u003ccode\u003e[\"a\":\"b\"]\u003c/code\u003e denotes the relation \u003ccode\u003e{(\"a\",\"b\")}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e0\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Epsilon symbol. The epsilon symbol denotes the string with no\nsymbols.  Example: \u003ccode\u003e[0]\u003c/code\u003e denotes the language \u003ccode\u003e{\"\"}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e?\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e All symbol. The all symbol denotes the union of all symbols in\nthe alphabet. Example: \u003ccode\u003e[?]\u003c/code\u003e and an alphabet \u003ccode\u003e{a,b,c}\u003c/code\u003e denotes the\nlanguage \u003ccode\u003e{\"a\",\"b\",\"c\"}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\"\"\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e quotes cancel every special meaning of the symbols. Example:\n\u003ccode\u003e[\"? 0\"]\u003c/code\u003e denotes the language \u003ccode\u003e{\"? 0\"}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[A]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e brackets are used to change the precedence of a regular\nrelation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e(A)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e parenthesis expresses optionality, and has the same meaning as\n\u003ccode\u003e[A|0]\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eA B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Concatenation of the expressions or relations A and\nB. Example: \u003ccode\u003e[[a b] [c d]]\u003c/code\u003e denotes the language \u003ccode\u003e{\"ac\", \"ad\", \"bc\",\n\"bd\"}\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eA^n\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Concatenation of \u003ccode\u003eA\u003c/code\u003e \u003cem\u003en\u003c/em\u003e times.  \u003ccode\u003eA^0\u003c/code\u003e is defined as the empty\nstring. Example: \u003ccode\u003e[a]^3\u003c/code\u003e describes the language \u003ccode\u003e{\"aaa\"}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eA|B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Union of the languages or relations \u003ccode\u003eA\u003c/code\u003e and \u003ccode\u003eB\u003c/code\u003e. Example: \u003ccode\u003e[a|b]\u003c/code\u003e\ndescribes the language \u003ccode\u003e{\"a\",\"b\"}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eA & B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Intersection of the languages \u003ccode\u003eA\u003c/code\u003e and \u003ccode\u003eB\u003c/code\u003e.  Example: \u003ccode\u003e[a b]\n& [a]\u003c/code\u003e describes the language \u003ccode\u003e{\"a\"}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eA - B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Minus of the languages \u003ccode\u003eA\u003c/code\u003e and \u003ccode\u003eB\u003c/code\u003e, and has the same meaning as\n\u003ccode\u003e[A & B]\u003c/code\u003e.  Example: \u003ccode\u003e[a b] - [a]\u003c/code\u003e describes the language \u003ccode\u003e{\"b\"}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e~A\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Describes the complement of an expression, and has the same\nmeaning as \u003ccode\u003e[?* - A]\u003c/code\u003e.  Note that complement is always defined over\nan alphabet. The expression \u003ccode\u003e[A]\u003c/code\u003e is only unambiguous with respect to\nan alphabet. Example: \u003ccode\u003e[a]\u003c/code\u003e denotes the language that doesn't contain\nthe string \u003ccode\u003e\"a\"\u003c/code\u003e. If the alphabet is \u003ccode\u003e{\"a\",\"b\"}\u003c/code\u003e then \u003ccode\u003e[a]\u003c/code\u003e\ndenotes the language \u003ccode\u003e{\"\",\"b\",\"aa\",\"ba\",...}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eA+\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Repetition (Kleenes plus).  A concatenated with itself an\narbitrary number of times, including zero times. Example: \u003ccode\u003e[a]+\u003c/code\u003e denotes\nthe infinite language \u003ccode\u003e{\"a\",\"aa\",\"aaa\",...}\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eA*\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Kleene&#8217;s star: \u003ccode\u003e[A+ | 0]\u003c/code\u003e.  Example: \u003ccode\u003e[a]*\u003c/code\u003e denotes the infinite\nlanguage \u003ccode\u003e{\"\",\"a\",\"aa\",...}\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e$A\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Containment.  The set of strings where \u003ccode\u003eA\u003c/code\u003e appear at least once\nas a substring. Containment is the same thing as \u003ccode\u003e[?* A ?*]\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eA .x. B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cross product of the languages \u003ccode\u003eA\u003c/code\u003e and \u003ccode\u003eB\u003c/code\u003e.  Example: \u003ccode\u003e[[a b]\n.x. c]\u003c/code\u003e describes the relations \u003ccode\u003e{(\"a\",\"c\"), (\"b\",\"c\")}\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eA .o. B\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Composition of the relations \u003ccode\u003eA\u003c/code\u003e and \u003ccode\u003eB\u003c/code\u003e.  Example: \u003ccode\u003e[a:b c:d]\n.o. [d:e]\u003c/code\u003e describes the relation \u003ccode\u003e{(\"c\",\"e\")}\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe precedence of the operators is as follows, where 4 is the highest\nprecedence:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003e.x.\u003c/code\u003e \u003ccode\u003e.o.\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e&\u003c/code\u003e \u003ccode\u003e-\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eConcatenation\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e~\u003c/code\u003e \u003ccode\u003e^\u003c/code\u003e \u003ccode\u003e*\u003c/code\u003e \u003ccode\u003e+\u003c/code\u003e \u003ccode\u003e$\u003c/code\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eA file containing a program must end with \u003ccode\u003e.fst\u003c/code\u003e, and an input file\nmustend with \u003ccode\u003e.dat\u003c/code\u003e.  A program is a collection of functions defining\nregular relations. A function with zero arguments is called a\ndefinition or a macro.  A definition, or a macro, can for example look\nlike this:\n\u003c/p\u003e\u003cpre\u003e \u003cdigits\u003e ::= \"1\" | \"2\" | \"3\" | \"4\" | \"5\" |\n              \"6\" | \"7\" | \"8\" | \"9\" | \"0\" ;\n\u003c/pre\u003e\u003cp\u003eand a function can look like this:\n\u003c/p\u003e\u003cpre\u003e \u003cswap,a,b\u003e ::= b a ;\n\u003c/pre\u003e\u003cp\u003eNote that strings are marked with quotes, and variables have no\nquotes. Every program must contain a \u003ccode\u003e\u003cmain\u003e\u003c/code\u003e definition (a program\nwithout one will result in a parse error).\n\u003c/p\u003e\u003cpre\u003e \u003cmain\u003e ::= ... ;\n\u003c/pre\u003e\u003cp\u003eThe alphabet of a program is the symbols in the regular relation\ndefined in the program.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExample program\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e \u003cnickel\u003e  ::= [\"n\" .x. \"c\"^5];\n \u003cdime\u003e    ::= [\"d\" .x. \"c\"^10];\n \u003cquarter\u003e ::= [\"q\" .x. \"c\"^25];\n \u003ccent\u003e    ::= [\"c\" .x. \"c\"];\n \u003cmoney\u003e   ::= [ \u003cnickel\u003e | \u003cdime\u003e | \u003cquarter\u003e | \u003ccent\u003e]*;\n \u003cdrink\u003e   ::= [\"c\"^65 .x. \"PLONK\"];\n \u003cmain\u003e    ::= [ \u003cmoney\u003e .o. \u003cdrink\u003e ];\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eBatch mode\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eUsage: \u003ccode\u003efst FILE [Options]\u003c/code\u003e.  FILE must end with \u003ccode\u003e.fst\u003c/code\u003e, which defines\nan FstStudio program, or \u003ccode\u003e.net\u003c/code\u003e, which defines a saved transducer. If\nno options are given, then input is taken from standard input, the\ntransducer is applied down, and the output, if any, is produced on\nstandard output.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e-u\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Apply the transducer up\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e-d\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Apply the transducer down\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e-i FILE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Take input from FILE\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e-o FILE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Write output to FILE\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e\u003cem\u003eInteractive mode - list of commands\u003c/em\u003e\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003er REG\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Read a regular relation from standard input. If a regular\nexpression is typed, then it is interpreted as the identity relation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eb\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Build an epsilon-free, deterministic, minimal transducer from a\nloaded/typed regular relation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ebn\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Build an epsilon-free, possibly non-deterministic, non-minimal\ntransducer from a load/typed regular relation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003em\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Minimize a built transducer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003edet\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Determinize a built transducer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003es FILE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Save to \u003ccode\u003eFILE\u003c/code\u003e. If \u003ccode\u003eFILE\u003c/code\u003e ends with \u003ccode\u003e.net\u003c/code\u003e, then the built\ntransducer is saved. Any other suffix saves the produced output in the\nsystem to \u003ccode\u003eFILE\u003c/code\u003e, if any.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003el FILE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Load from \u003ccode\u003eFILE\u003c/code\u003e. \u003ccode\u003eFILE\u003c/code\u003e must end with \u003ccode\u003e.fst\u003c/code\u003e, \u003ccode\u003e.net\u003c/code\u003e or\n\u003ccode\u003e.dat\u003c/code\u003e. If \u003ccode\u003eFILE\u003c/code\u003e ends with \u003ccode\u003e.fst\u003c/code\u003e, then a FstStudio program is loaded\ninto FstStudio. If \u003ccode\u003eFILE\u003c/code\u003e ends with \u003ccode\u003e.net\u003c/code\u003e, then a transducer is loaded\ninto FstStudio. If \u003ccode\u003eFILE\u003c/code\u003e ends with \u003ccode\u003e.dat\u003c/code\u003e, then input is loaded into\nFstStudio.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003el a | b\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Load and union two transducers. a and b must either be a\nfile ending with \u003ccode\u003e.net\u003c/code\u003e or the symbol \u003ccode\u003e*\u003c/code\u003e, which refers to the interior\ntransducer. The produced transducer is possibly non-deterministic and\nnon-minimal.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003el a b\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Load and concatenate two transducers. a and b must either be\nale ending with \u003ccode\u003e.net\u003c/code\u003e or the symbol \u003ccode\u003e*\u003c/code\u003e, which refers to the interior\ntransducer. The produced transducer is possibly non-deterministicand\nnon-minimal.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003el a*\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Load and apply Kleene&#8217;s star on a transducer. a must either\nbe a file ending with \u003ccode\u003e.net\u003c/code\u003e or the symbol \u003ccode\u003e*\u003c/code\u003e, which refers to the\ninterior transducer. The produced transducer is possibly\nnon-deterministicand non-minimal.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003el a .o. b\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Load and compose two transducers. a and b must either be\na file ending with \u003ccode\u003e.net\u003c/code\u003e or the symbol \u003ccode\u003e*\u003c/code\u003e, which refers to the\ninterior transducer. The produced transducer is possibly\nnon-deterministic andnon-minimal.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003evt\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e View loaded/built transducer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003evr\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e View loaded/typed regular relation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003evi\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e View loaded input.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003evo\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e View produced output.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ed\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Apply transducer down with loaded input.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eu\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Apply transducer up with loaded input.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ed SYMBOLS\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Apply tranducer down with \u003ccode\u003eSYMBOLS\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eu SYMBOLS\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Apply transducer up with \u003ccode\u003eSYMBOLS\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ec\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Clear memory.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eh\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e List commands.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eq\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e End session.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "FST.FSTStudio",
          "name": "FSTStudio",
          "package": "fst",
          "source": "src/FST-FSTStudio.html",
          "type": "module"
        },
        "index": {
          "description": "fstStudio takes program consisting of regular relations that denotes the relation between two regular languages and constructs transducer If regular expression not relation is given then it is interpreted as the identity relation The syntax is very similar to Xerox finite state transducer syntax with two fundamental differences distinction is made between functions definitions and strings and fststudio allows functional definitions symbol Example denotes the language variable symbol without quotes is variable Describes relation between the symbol and This relation is ordered and is said to be part of the upper language and is said to be part of the lower language Example denotes the relation Epsilon symbol The epsilon symbol denotes the string with no symbols Example denotes the language All symbol The all symbol denotes the union of all symbols in the alphabet Example and an alphabet denotes the language quotes cancel every special meaning of the symbols Example denotes the language brackets are used to change the precedence of regular relation parenthesis expresses optionality and has the same meaning as Concatenation of the expressions or relations and Example denotes the language ac ad bc bd Concatenation of times is defined as the empty string Example describes the language aaa Union of the languages or relations and Example describes the language Intersection of the languages and Example describes the language Minus of the languages and and has the same meaning as Example describes the language Describes the complement of an expression and has the same meaning as Note that complement is always defined over an alphabet The expression is only unambiguous with respect to an alphabet Example denotes the language that doesn contain the string If the alphabet is then denotes the language aa ba Repetition Kleenes plus concatenated with itself an arbitrary number of times including zero times Example denotes the infinite language aa aaa Kleene star Example denotes the infinite language aa Containment The set of strings where appear at least once as substring Containment is the same thing as Cross product of the languages and Example describes the relations Composition of the relations and Example describes the relation The precedence of the operators is as follows where is the highest precedence Concatenation file containing program must end with fst and an input file mustend with dat program is collection of functions defining regular relations function with zero arguments is called definition or macro definition or macro can for example look like this digits and function can look like this swap Note that strings are marked with quotes and variables have no quotes Every program must contain main definition program without one will result in parse error main The alphabet of program is the symbols in the regular relation defined in the program Example program nickel dime quarter cent money nickel dime quarter cent drink PLONK main money drink Batch mode Usage fst FILE Options FILE must end with fst which defines an FstStudio program or net which defines saved transducer If no options are given then input is taken from standard input the transducer is applied down and the output if any is produced on standard output Apply the transducer up Apply the transducer down FILE Take input from FILE FILE Write output to FILE Interactive mode list of commands REG Read regular relation from standard input If regular expression is typed then it is interpreted as the identity relation Build an epsilon-free deterministic minimal transducer from loaded typed regular relation bn Build an epsilon-free possibly non-deterministic non-minimal transducer from load typed regular relation Minimize built transducer det Determinize built transducer FILE Save to FILE If FILE ends with net then the built transducer is saved Any other suffix saves the produced output in the system to FILE if any FILE Load from FILE FILE must end with fst net or dat If FILE ends with fst then FstStudio program is loaded into FstStudio If FILE ends with net then transducer is loaded into FstStudio If FILE ends with dat then input is loaded into FstStudio Load and union two transducers and must either be file ending with net or the symbol which refers to the interior transducer The produced transducer is possibly non-deterministic and non-minimal Load and concatenate two transducers and must either be ale ending with net or the symbol which refers to the interior transducer The produced transducer is possibly non-deterministicand non-minimal Load and apply Kleene star on transducer must either be file ending with net or the symbol which refers to the interior transducer The produced transducer is possibly non-deterministicand non-minimal Load and compose two transducers and must either be file ending with net or the symbol which refers to the interior transducer The produced transducer is possibly non-deterministic andnon-minimal vt View loaded built transducer vr View loaded typed regular relation vi View loaded input vo View produced output Apply transducer down with loaded input Apply transducer up with loaded input SYMBOLS Apply tranducer down with SYMBOLS SYMBOLS Apply transducer up with SYMBOLS Clear memory List commands End session",
          "hierarchy": "FST FSTStudio",
          "module": "FST.FSTStudio",
          "name": "FSTStudio",
          "package": "fst",
          "partial": "FSTStudio",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-FSTStudio.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLeft-biased finite automata\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.LBFA",
          "name": "LBFA",
          "package": "fst",
          "source": "src/FST-LBFA.html",
          "type": "module"
        },
        "index": {
          "description": "Left-biased finite automata",
          "hierarchy": "FST LBFA",
          "module": "FST.LBFA",
          "name": "LBFA",
          "package": "fst",
          "partial": "LBFA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for LBFA (left-biased finite automata)\n\u003c/p\u003e",
          "module": "FST.LBFA",
          "name": "LBFA",
          "package": "fst",
          "source": "src/FST-LBFA.html#LBFA",
          "type": "data"
        },
        "index": {
          "description": "Data type for LBFA left-biased finite automata",
          "hierarchy": "FST LBFA",
          "module": "FST.LBFA",
          "name": "LBFA",
          "package": "fst",
          "partial": "LBFA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFA.html#t:LBFA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a regular expression to an minimal, useful and\n deterministic automaton, using the LBFA algorithm while building.\n\u003c/p\u003e",
          "module": "FST.LBFA",
          "name": "compileToAutomaton",
          "package": "fst",
          "signature": "Reg a -\u003e Sigma a -\u003e StateTy -\u003e Automaton a",
          "source": "src/FST-LBFA.html#compileToAutomaton",
          "type": "function"
        },
        "index": {
          "description": "Compile regular expression to an minimal useful and deterministic automaton using the LBFA algorithm while building",
          "hierarchy": "FST LBFA",
          "module": "FST.LBFA",
          "name": "compileToAutomaton",
          "normalized": "Reg a-\u003eSigma a-\u003eStateTy-\u003eAutomaton a",
          "package": "fst",
          "partial": "To Automaton",
          "signature": "Reg a-\u003eSigma a-\u003eStateTy-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFA.html#v:compileToAutomaton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a regular expression to a LBFA\n\u003c/p\u003e",
          "module": "FST.LBFA",
          "name": "compileToLBFA",
          "package": "fst",
          "signature": "Reg a -\u003e Sigma a -\u003e StateTy -\u003e LBFA a",
          "source": "src/FST-LBFA.html#compileToLBFA",
          "type": "function"
        },
        "index": {
          "description": "Compile regular expression to LBFA",
          "hierarchy": "FST LBFA",
          "module": "FST.LBFA",
          "name": "compileToLBFA",
          "normalized": "Reg a-\u003eSigma a-\u003eStateTy-\u003eLBFA a",
          "package": "fst",
          "partial": "To LBFA",
          "signature": "Reg a-\u003eSigma a-\u003eStateTy-\u003eLBFA a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFA.html#v:compileToLBFA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the initial state of a LBFA\n\u003c/p\u003e",
          "module": "FST.LBFA",
          "name": "initial",
          "package": "fst",
          "signature": "LBFA a -\u003e StateTy",
          "source": "src/FST-LBFA.html#initial",
          "type": "function"
        },
        "index": {
          "description": "Get the initial state of LBFA",
          "hierarchy": "FST LBFA",
          "module": "FST.LBFA",
          "name": "initial",
          "normalized": "LBFA a-\u003eStateTy",
          "package": "fst",
          "signature": "LBFA a-\u003eStateTy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFA.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLeft-biased finite transducers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.LBFT",
          "name": "LBFT",
          "package": "fst",
          "source": "src/FST-LBFT.html",
          "type": "module"
        },
        "index": {
          "description": "Left-biased finite transducers",
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "LBFT",
          "package": "fst",
          "partial": "LBFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for a LBFT (left-biased finite transducer)\n\u003c/p\u003e",
          "module": "FST.LBFT",
          "name": "LBFT",
          "package": "fst",
          "source": "src/FST-LBFT.html#LBFT",
          "type": "data"
        },
        "index": {
          "description": "Data type for LBFT left-biased finite transducer",
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "LBFT",
          "package": "fst",
          "partial": "LBFT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#t:LBFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.LBFT",
          "name": "LBFT",
          "package": "fst",
          "signature": "LBFT",
          "source": "src/FST-LBFT.html#LBFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "LBFT",
          "package": "fst",
          "partial": "LBFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#v:LBFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.LBFT",
          "name": "alpha",
          "package": "fst",
          "signature": "Sigma a",
          "source": "src/FST-LBFT.html#LBFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "alpha",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a regular relation to a LBFT\n\u003c/p\u003e",
          "module": "FST.LBFT",
          "name": "compileToLBFT",
          "package": "fst",
          "signature": "RReg a -\u003e Sigma a -\u003e LBFT a",
          "source": "src/FST-LBFT.html#compileToLBFT",
          "type": "function"
        },
        "index": {
          "description": "Compile regular relation to LBFT",
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "compileToLBFT",
          "normalized": "RReg a-\u003eSigma a-\u003eLBFT a",
          "package": "fst",
          "partial": "To LBFT",
          "signature": "RReg a-\u003eSigma a-\u003eLBFT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#v:compileToLBFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a regular relation to an minimal, useful and\n deterministic transducer, using the LBFT algorithm while building.\n\u003c/p\u003e",
          "module": "FST.LBFT",
          "name": "compileToTransducer",
          "package": "fst",
          "signature": "RReg a -\u003e Sigma a -\u003e Transducer a",
          "source": "src/FST-LBFT.html#compileToTransducer",
          "type": "function"
        },
        "index": {
          "description": "Compile regular relation to an minimal useful and deterministic transducer using the LBFT algorithm while building",
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "compileToTransducer",
          "normalized": "RReg a-\u003eSigma a-\u003eTransducer a",
          "package": "fst",
          "partial": "To Transducer",
          "signature": "RReg a-\u003eSigma a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#v:compileToTransducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.LBFT",
          "name": "finalS",
          "package": "fst",
          "signature": "[StateTy]",
          "source": "src/FST-LBFT.html#LBFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "finalS",
          "normalized": "[StateTy]",
          "package": "fst",
          "signature": "[StateTy]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#v:finalS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.LBFT",
          "name": "initS",
          "package": "fst",
          "signature": "StateTy",
          "source": "src/FST-LBFT.html#LBFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "initS",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#v:initS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.LBFT",
          "name": "lastS",
          "package": "fst",
          "signature": "StateTy",
          "source": "src/FST-LBFT.html#LBFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "lastS",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#v:lastS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.LBFT",
          "name": "trans",
          "package": "fst",
          "signature": "TTransitionTable a",
          "source": "src/FST-LBFT.html#LBFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST LBFT",
          "module": "FST.LBFT",
          "name": "trans",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-LBFT.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNeutral regular expressions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.NReg",
          "name": "NReg",
          "package": "fst",
          "source": "src/FST-NReg.html",
          "type": "module"
        },
        "index": {
          "description": "Neutral regular expressions",
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NReg",
          "package": "fst",
          "partial": "NReg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNeutral regular expressions\n\u003c/p\u003e",
          "module": "FST.NReg",
          "name": "NReg",
          "package": "fst",
          "source": "src/FST-NReg.html#NReg",
          "type": "data"
        },
        "index": {
          "description": "Neutral regular expressions",
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NReg",
          "package": "fst",
          "partial": "NReg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#t:NReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "Fun",
          "package": "fst",
          "signature": "Fun String [NReg a]",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "Fun",
          "normalized": "Fun String[NReg a]",
          "package": "fst",
          "partial": "Fun",
          "signature": "Fun String[NReg a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NAll",
          "package": "fst",
          "signature": "NAll",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NAll",
          "package": "fst",
          "partial": "NAll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NComp",
          "package": "fst",
          "signature": "NComp (NReg a) (NReg a)",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NComp",
          "package": "fst",
          "partial": "NComp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NComplement",
          "package": "fst",
          "signature": "NComplement (NReg a)",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NComplement",
          "package": "fst",
          "partial": "NComplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NComplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NCross",
          "package": "fst",
          "signature": "NCross (NReg a) (NReg a)",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NCross",
          "package": "fst",
          "partial": "NCross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NEmptySet",
          "package": "fst",
          "signature": "NEmptySet",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NEmptySet",
          "package": "fst",
          "partial": "NEmpty Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NEmptySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NEpsilon",
          "package": "fst",
          "signature": "NEpsilon",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NEpsilon",
          "package": "fst",
          "partial": "NEpsilon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NEpsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NIntersect",
          "package": "fst",
          "signature": "NIntersect (NReg a) (NReg a)",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NIntersect",
          "package": "fst",
          "partial": "NIntersect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NProduct",
          "package": "fst",
          "signature": "NProduct (NReg a) (NReg a)",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NProduct",
          "package": "fst",
          "partial": "NProduct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NRelation",
          "package": "fst",
          "signature": "NRelation a a",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NRelation",
          "package": "fst",
          "partial": "NRelation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NRelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NStar",
          "package": "fst",
          "signature": "NStar (NReg a)",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NStar",
          "package": "fst",
          "partial": "NStar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NSymbol",
          "package": "fst",
          "signature": "NSymbol a",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NSymbol",
          "package": "fst",
          "partial": "NSymbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NUnion",
          "package": "fst",
          "signature": "NUnion (NReg a) (NReg a)",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NUnion",
          "package": "fst",
          "partial": "NUnion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.NReg",
          "name": "NVar",
          "package": "fst",
          "signature": "NVar String",
          "source": "src/FST-NReg.html#NReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "NVar",
          "package": "fst",
          "partial": "NVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:NVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert variables to symbols\n\u003c/p\u003e",
          "module": "FST.NReg",
          "name": "nVarToSymbol",
          "package": "fst",
          "signature": "NReg String -\u003e NReg String",
          "source": "src/FST-NReg.html#nVarToSymbol",
          "type": "function"
        },
        "index": {
          "description": "Convert variables to symbols",
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "nVarToSymbol",
          "normalized": "NReg String-\u003eNReg String",
          "package": "fst",
          "partial": "Var To Symbol",
          "signature": "NReg String-\u003eNReg String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:nVarToSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf possible, build a regular expression instead of a regular relation\n\u003c/p\u003e",
          "module": "FST.NReg",
          "name": "toRReg",
          "package": "fst",
          "signature": "NReg a -\u003e Maybe (RReg a)",
          "source": "src/FST-NReg.html#toRReg",
          "type": "function"
        },
        "index": {
          "description": "If possible build regular expression instead of regular relation",
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "toRReg",
          "normalized": "NReg a-\u003eMaybe(RReg a)",
          "package": "fst",
          "partial": "RReg",
          "signature": "NReg a-\u003eMaybe(RReg a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:toRReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf possible, converts NReg to Reg\n\u003c/p\u003e",
          "module": "FST.NReg",
          "name": "toReg",
          "package": "fst",
          "signature": "NReg a -\u003e Maybe (Reg a)",
          "source": "src/FST-NReg.html#toReg",
          "type": "function"
        },
        "index": {
          "description": "If possible converts NReg to Reg",
          "hierarchy": "FST NReg",
          "module": "FST.NReg",
          "name": "toReg",
          "normalized": "NReg a-\u003eMaybe(Reg a)",
          "package": "fst",
          "partial": "Reg",
          "signature": "NReg a-\u003eMaybe(Reg a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-NReg.html#v:toReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for constructing a simplified regular relation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.RRegTypes",
          "name": "RRegTypes",
          "package": "fst",
          "source": "src/FST-RRegTypes.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for constructing simplified regular relation",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "RRegTypes",
          "package": "fst",
          "partial": "RReg Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype for a regular relations\n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "RReg",
          "package": "fst",
          "source": "src/FST-RRegTypes.html#RReg",
          "type": "data"
        },
        "index": {
          "description": "Datatype for regular relations",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "RReg",
          "package": "fst",
          "partial": "RReg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#t:RReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCross product operator\n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "(\u003c*\u003e)",
          "package": "fst",
          "signature": "Reg a -\u003e Reg a -\u003e RReg a",
          "source": "src/FST-RRegTypes.html#%3C%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Cross product operator",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "Reg a-\u003eReg a-\u003eRReg a",
          "package": "fst",
          "signature": "Reg a-\u003eReg a-\u003eRReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition operator\n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "(\u003c.\u003e)",
          "package": "fst",
          "signature": "RReg a -\u003e RReg a -\u003e RReg a",
          "source": "src/FST-RRegTypes.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "Composition operator",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "RReg a-\u003eRReg a-\u003eRReg a",
          "package": "fst",
          "signature": "RReg a-\u003eRReg a-\u003eRReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition       \n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "Comp",
          "package": "fst",
          "signature": "Comp (RReg a) (RReg a)",
          "source": "src/FST-RRegTypes.html#RReg",
          "type": "function"
        },
        "index": {
          "description": "Composition",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "Comp",
          "package": "fst",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCross product     \n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "Cross",
          "package": "fst",
          "signature": "Cross (Reg a) (Reg a)",
          "source": "src/FST-RRegTypes.html#RReg",
          "type": "function"
        },
        "index": {
          "description": "Cross product",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "Cross",
          "package": "fst",
          "partial": "Cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:Cross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty language    \n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "EmptyR",
          "package": "fst",
          "signature": "EmptyR",
          "source": "src/FST-RRegTypes.html#RReg",
          "type": "function"
        },
        "index": {
          "description": "Empty language",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "EmptyR",
          "package": "fst",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:EmptyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity relation \n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "Identity",
          "package": "fst",
          "signature": "Identity (Reg a)",
          "source": "src/FST-RRegTypes.html#RReg",
          "type": "function"
        },
        "index": {
          "description": "Identity relation",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "Identity",
          "package": "fst",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenation     \n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "ProductR",
          "package": "fst",
          "signature": "ProductR (RReg a) (RReg a)",
          "source": "src/FST-RRegTypes.html#RReg",
          "type": "function"
        },
        "index": {
          "description": "Concatenation",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "ProductR",
          "package": "fst",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:ProductR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(a:b)             \n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "Relation",
          "package": "fst",
          "signature": "Relation (Symbol a) (Symbol a)",
          "source": "src/FST-RRegTypes.html#RReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "Relation",
          "package": "fst",
          "partial": "Relation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:Relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKleene star       \n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "StarR",
          "package": "fst",
          "signature": "StarR (RReg a)",
          "source": "src/FST-RRegTypes.html#RReg",
          "type": "function"
        },
        "index": {
          "description": "Kleene star",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "StarR",
          "package": "fst",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:StarR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion             \n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "UnionR",
          "package": "fst",
          "signature": "UnionR (RReg a) (RReg a)",
          "source": "src/FST-RRegTypes.html#RReg",
          "type": "function"
        },
        "index": {
          "description": "Union",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "UnionR",
          "package": "fst",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:UnionR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity relation\n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "idR",
          "package": "fst",
          "signature": "Reg a -\u003e RReg a",
          "source": "src/FST-RRegTypes.html#idR",
          "type": "function"
        },
        "index": {
          "description": "Identity relation",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "idR",
          "normalized": "Reg a-\u003eRReg a",
          "package": "fst",
          "signature": "Reg a-\u003eRReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:idR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelation\n\u003c/p\u003e",
          "module": "FST.RRegTypes",
          "name": "r",
          "package": "fst",
          "signature": "a -\u003e a -\u003e RReg a",
          "source": "src/FST-RRegTypes.html#r",
          "type": "function"
        },
        "index": {
          "description": "Relation",
          "hierarchy": "FST RRegTypes",
          "module": "FST.RRegTypes",
          "name": "r",
          "normalized": "a-\u003ea-\u003eRReg a",
          "package": "fst",
          "signature": "a-\u003ea-\u003eRReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RRegTypes.html#v:r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for constructing a simplified regular expression.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.RegTypes",
          "name": "RegTypes",
          "package": "fst",
          "source": "src/FST-RegTypes.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for constructing simplified regular expression",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "RegTypes",
          "package": "fst",
          "partial": "Reg Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinators. The regular expressions are simplified while combined.\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "Combinators",
          "package": "fst",
          "source": "src/FST-RegTypes.html#Combinators",
          "type": "class"
        },
        "index": {
          "description": "Combinators The regular expressions are simplified while combined",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "Combinators",
          "package": "fst",
          "partial": "Combinators",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#t:Combinators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for a regular expression.\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "Reg",
          "package": "fst",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "data"
        },
        "index": {
          "description": "Data type for regular expression",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "Reg",
          "package": "fst",
          "partial": "Reg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#t:Reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for the collection of symbols in an expression.\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "Symbols",
          "package": "fst",
          "source": "src/FST-RegTypes.html#Symbols",
          "type": "class"
        },
        "index": {
          "description": "Type class for the collection of symbols in an expression",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "Symbols",
          "package": "fst",
          "partial": "Symbols",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#t:Symbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.RegTypes",
          "name": "(|\u003e)",
          "package": "fst",
          "signature": "(|\u003e)",
          "source": "src/FST-RegTypes.html#%7C%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "(|\u003e) |\u003e",
          "normalized": "()",
          "package": "fst",
          "signature": "()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.RegTypes",
          "name": "(\u003c|\u003e)",
          "package": "fst",
          "signature": "(\u003c|\u003e)",
          "source": "src/FST-RegTypes.html#%3C%7C%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "()",
          "package": "fst",
          "signature": "()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection \n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "(\u003c&\u003e)",
          "package": "fst",
          "signature": "Reg a -\u003e Reg a -\u003e Reg a",
          "source": "src/FST-RegTypes.html#%3C%26%3E",
          "type": "function"
        },
        "index": {
          "description": "Intersection",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "(\u003c&\u003e) \u003c&\u003e",
          "normalized": "Reg a-\u003eReg a-\u003eReg a",
          "package": "fst",
          "signature": "Reg a-\u003eReg a-\u003eReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:-60--38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinus. Definition A - B = A & ~B \n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "(\u003c-\u003e)",
          "package": "fst",
          "signature": "Reg a -\u003e Reg a -\u003e Reg a",
          "source": "src/FST-RegTypes.html#%3C-%3E",
          "type": "function"
        },
        "index": {
          "description": "Minus Definition",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "Reg a-\u003eReg a-\u003eReg a",
          "package": "fst",
          "signature": "Reg a-\u003eReg a-\u003eReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003e r1 | r2 \u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "FST.RegTypes",
          "name": ":|:",
          "package": "fst",
          "signature": "(Reg a) :|: (Reg a)",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "function"
        },
        "index": {
          "description": "r1 r2",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": ":|:",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v::-124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003e r1 & r2 \u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "FST.RegTypes",
          "name": ":&:",
          "package": "fst",
          "signature": "(Reg a) :&: (Reg a)",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "function"
        },
        "index": {
          "description": "r1 r2",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": ":&:",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003e r1 r2 \u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "FST.RegTypes",
          "name": ":.:",
          "package": "fst",
          "signature": "(Reg a) :.: (Reg a)",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "function"
        },
        "index": {
          "description": "r1 r2",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": ":.:",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v::.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e?\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "All",
          "package": "fst",
          "signature": "All",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "All",
          "package": "fst",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e~[ r1 ]\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "Complement",
          "package": "fst",
          "signature": "Complement (Reg a)",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "function"
        },
        "index": {
          "description": "r1",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "Complement",
          "package": "fst",
          "partial": "Complement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:Complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003e \u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "FST.RegTypes",
          "name": "Empty",
          "package": "fst",
          "signature": "Empty",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "Empty",
          "package": "fst",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "Epsilon",
          "package": "fst",
          "signature": "Epsilon",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "Epsilon",
          "package": "fst",
          "partial": "Epsilon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:Epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003e r2 \u003c/dt\u003e\u003cdd\u003e*\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "FST.RegTypes",
          "name": "Star",
          "package": "fst",
          "signature": "Star (Reg a)",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "function"
        },
        "index": {
          "description": "r2",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "Star",
          "package": "fst",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:Star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "Symbol",
          "package": "fst",
          "signature": "Symbol a",
          "source": "src/FST-RegTypes.html#Reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "Symbol",
          "package": "fst",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamines if a regular expression accepts the empty string.\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "acceptEps",
          "package": "fst",
          "signature": "Reg a -\u003e Bool",
          "source": "src/FST-RegTypes.html#acceptEps",
          "type": "function"
        },
        "index": {
          "description": "Examines if regular expression accepts the empty string",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "acceptEps",
          "normalized": "Reg a-\u003eBool",
          "package": "fst",
          "partial": "Eps",
          "signature": "Reg a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:acceptEps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a ?-free regular expression with respect to an alphabet [a]\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "allFree",
          "package": "fst",
          "signature": "Reg a -\u003e [a] -\u003e Reg a",
          "source": "src/FST-RegTypes.html#allFree",
          "type": "function"
        },
        "index": {
          "description": "Construct free regular expression with respect to an alphabet",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "allFree",
          "normalized": "Reg a-\u003e[a]-\u003eReg a",
          "package": "fst",
          "partial": "Free",
          "signature": "Reg a-\u003e[a]-\u003eReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:allFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll symbol\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "allS",
          "package": "fst",
          "signature": "Reg a",
          "source": "src/FST-RegTypes.html#allS",
          "type": "function"
        },
        "index": {
          "description": "All symbol",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "allS",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:allS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e symbol to union over alphabet. ? -\u003e [a|..] with respect to an alphabet [a]\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "allToSymbols",
          "package": "fst",
          "signature": "[a] -\u003e Reg a",
          "source": "src/FST-RegTypes.html#allToSymbols",
          "type": "function"
        },
        "index": {
          "description": "Transform the all symbol to union over alphabet with respect to an alphabet",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "allToSymbols",
          "normalized": "[a]-\u003eReg a",
          "package": "fst",
          "partial": "To Symbols",
          "signature": "[a]-\u003eReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:allToSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplement\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "complement",
          "package": "fst",
          "signature": "Reg a -\u003e Reg a",
          "source": "src/FST-RegTypes.html#complement",
          "type": "function"
        },
        "index": {
          "description": "Complement",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "complement",
          "normalized": "Reg a-\u003eReg a",
          "package": "fst",
          "signature": "Reg a-\u003eReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.RegTypes",
          "name": "empty",
          "package": "fst",
          "signature": "empty",
          "source": "src/FST-RegTypes.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "empty",
          "package": "fst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEpsilon\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "eps",
          "package": "fst",
          "signature": "Reg a",
          "source": "src/FST-RegTypes.html#eps",
          "type": "function"
        },
        "index": {
          "description": "Epsilon",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "eps",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:eps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.RegTypes",
          "name": "plus",
          "package": "fst",
          "signature": "plus",
          "source": "src/FST-RegTypes.html#plus",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "plus",
          "package": "fst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse the language denoted by the regular expression.\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "reversal",
          "package": "fst",
          "signature": "Reg a -\u003e Reg a",
          "source": "src/FST-RegTypes.html#reversal",
          "type": "function"
        },
        "index": {
          "description": "Reverse the language denoted by the regular expression",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "reversal",
          "normalized": "Reg a-\u003eReg a",
          "package": "fst",
          "signature": "Reg a-\u003eReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:reversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbol\n\u003c/p\u003e",
          "module": "FST.RegTypes",
          "name": "s",
          "package": "fst",
          "signature": "a -\u003e Reg a",
          "source": "src/FST-RegTypes.html#s",
          "type": "function"
        },
        "index": {
          "description": "Symbol",
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "s",
          "normalized": "a-\u003eReg a",
          "package": "fst",
          "signature": "a-\u003eReg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.RegTypes",
          "name": "star",
          "package": "fst",
          "signature": "star",
          "source": "src/FST-RegTypes.html#star",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "star",
          "package": "fst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.RegTypes",
          "name": "symbols",
          "package": "fst",
          "signature": "symbols",
          "source": "src/FST-RegTypes.html#symbols",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST RegTypes",
          "module": "FST.RegTypes",
          "name": "symbols",
          "package": "fst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RegTypes.html#v:symbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReverse an automaton\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.Reversal",
          "name": "Reversal",
          "package": "fst",
          "source": "src/FST-Reversal.html",
          "type": "module"
        },
        "index": {
          "description": "Reverse an automaton",
          "hierarchy": "FST Reversal",
          "module": "FST.Reversal",
          "name": "Reversal",
          "package": "fst",
          "partial": "Reversal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Reversal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse an automaton\n\u003c/p\u003e",
          "module": "FST.Reversal",
          "name": "reversal",
          "package": "fst",
          "signature": "Automaton a -\u003e Automaton a",
          "source": "src/FST-Reversal.html#reversal",
          "type": "function"
        },
        "index": {
          "description": "Reverse an automaton",
          "hierarchy": "FST Reversal",
          "module": "FST.Reversal",
          "name": "reversal",
          "normalized": "Automaton a-\u003eAutomaton a",
          "package": "fst",
          "signature": "Automaton a-\u003eAutomaton a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Reversal.html#v:reversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReverse an transducer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.ReversalT",
          "name": "ReversalT",
          "package": "fst",
          "source": "src/FST-ReversalT.html",
          "type": "module"
        },
        "index": {
          "description": "Reverse an transducer",
          "hierarchy": "FST ReversalT",
          "module": "FST.ReversalT",
          "name": "ReversalT",
          "package": "fst",
          "partial": "Reversal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-ReversalT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse a transducer\n\u003c/p\u003e",
          "module": "FST.ReversalT",
          "name": "reversal",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a",
          "source": "src/FST-ReversalT.html#reversal",
          "type": "function"
        },
        "index": {
          "description": "Reverse transducer",
          "hierarchy": "FST ReversalT",
          "module": "FST.ReversalT",
          "name": "reversal",
          "normalized": "Transducer a-\u003eTransducer a",
          "package": "fst",
          "signature": "Transducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-ReversalT.html#v:reversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRunning a transducer with some input\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.RunTransducer",
          "name": "RunTransducer",
          "package": "fst",
          "source": "src/FST-RunTransducer.html",
          "type": "module"
        },
        "index": {
          "description": "Running transducer with some input",
          "hierarchy": "FST RunTransducer",
          "module": "FST.RunTransducer",
          "name": "RunTransducer",
          "package": "fst",
          "partial": "Run Transducer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RunTransducer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transducer downwards\n\u003c/p\u003e",
          "module": "[\"FST.RunTransducer\",\"FST.TransducerInterface\"]",
          "name": "applyDown",
          "package": "fst",
          "signature": "Transducer a -\u003e [a] -\u003e Maybe [[a]]",
          "source": "src/FST-RunTransducer.html#applyDown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-RunTransducer.html#v:applyDown\",\"http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:applyDown\"]"
        },
        "index": {
          "description": "Apply transducer downwards",
          "hierarchy": "FST RunTransducer",
          "module": "FST.RunTransducer",
          "name": "applyDown",
          "normalized": "Transducer a-\u003e[a]-\u003eMaybe[[a]]",
          "package": "fst",
          "partial": "Down",
          "signature": "Transducer a-\u003e[a]-\u003eMaybe[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RunTransducer.html#v:applyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transducer upwards\n\u003c/p\u003e",
          "module": "[\"FST.RunTransducer\",\"FST.TransducerInterface\"]",
          "name": "applyUp",
          "package": "fst",
          "signature": "Transducer a -\u003e [a] -\u003e Maybe [[a]]",
          "source": "src/FST-RunTransducer.html#applyUp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-RunTransducer.html#v:applyUp\",\"http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:applyUp\"]"
        },
        "index": {
          "description": "Apply transducer upwards",
          "hierarchy": "FST RunTransducer",
          "module": "FST.RunTransducer",
          "name": "applyUp",
          "normalized": "Transducer a-\u003e[a]-\u003eMaybe[[a]]",
          "package": "fst",
          "partial": "Up",
          "signature": "Transducer a-\u003e[a]-\u003eMaybe[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-RunTransducer.html#v:applyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransducers and their functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.Transducer",
          "name": "Transducer",
          "package": "fst",
          "source": "src/FST-Transducer.html",
          "type": "module"
        },
        "index": {
          "description": "Transducers and their functions",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "Transducer",
          "package": "fst",
          "partial": "Transducer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class TConvertable\n\u003c/p\u003e",
          "module": "FST.Transducer",
          "name": "TConvertable",
          "package": "fst",
          "source": "src/FST-Transducer.html#TConvertable",
          "type": "class"
        },
        "index": {
          "description": "Type class TConvertable",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "TConvertable",
          "package": "fst",
          "partial": "TConvertable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#t:TConvertable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for a transducer\n\u003c/p\u003e",
          "module": "FST.Transducer",
          "name": "Transducer",
          "package": "fst",
          "source": "src/FST-Transducer.html#Transducer",
          "type": "data"
        },
        "index": {
          "description": "Data type for transducer",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "Transducer",
          "package": "fst",
          "partial": "Transducer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#t:Transducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two transducers\n\u003c/p\u003e",
          "module": "[\"FST.Transducer\",\"FST.TransducerInterface\"]",
          "name": "compositionT",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a -\u003e Transducer a",
          "source": "src/FST-Transducer.html#compositionT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:compositionT\",\"http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:compositionT\"]"
        },
        "index": {
          "description": "Compose two transducers",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "compositionT",
          "normalized": "Transducer a-\u003eTransducer a-\u003eTransducer a",
          "package": "fst",
          "signature": "Transducer a-\u003eTransducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:compositionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a transducer\n\u003c/p\u003e",
          "module": "FST.Transducer",
          "name": "construct",
          "package": "fst",
          "signature": "(StateTy, StateTy) -\u003e TTransitionTable a -\u003e Sigma a -\u003e InitialStates -\u003e FinalStates -\u003e Transducer a",
          "source": "src/FST-Transducer.html#construct",
          "type": "function"
        },
        "index": {
          "description": "Construct transducer",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "construct",
          "normalized": "(StateTy,StateTy)-\u003eTTransitionTable a-\u003eSigma a-\u003eInitialStates-\u003eFinalStates-\u003eTransducer a",
          "package": "fst",
          "signature": "(StateTy,StateTy)-\u003eTTransitionTable a-\u003eSigma a-\u003eInitialStates-\u003eFinalStates-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:construct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.Transducer",
          "name": "decode",
          "package": "fst",
          "signature": "Transducer a -\u003e f a",
          "source": "src/FST-Transducer.html#decode",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "decode",
          "normalized": "Transducer a-\u003eb a",
          "package": "fst",
          "signature": "Transducer a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.Transducer",
          "name": "encode",
          "package": "fst",
          "signature": "f a -\u003e Transducer a",
          "source": "src/FST-Transducer.html#encode",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "encode",
          "normalized": "a b-\u003eTransducer b",
          "package": "fst",
          "signature": "f a-\u003eTransducer a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial state\n\u003c/p\u003e",
          "module": "FST.Transducer",
          "name": "initial",
          "package": "fst",
          "signature": "Transducer a -\u003e StateTy",
          "source": "src/FST-Transducer.html#initial",
          "type": "function"
        },
        "index": {
          "description": "Initial state",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "initial",
          "normalized": "Transducer a-\u003eStateTy",
          "package": "fst",
          "signature": "Transducer a-\u003eStateTy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet first state to null\n\u003c/p\u003e",
          "module": "FST.Transducer",
          "name": "nullFirstState",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a",
          "source": "src/FST-Transducer.html#nullFirstState",
          "type": "function"
        },
        "index": {
          "description": "Set first state to null",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "nullFirstState",
          "normalized": "Transducer a-\u003eTransducer a",
          "package": "fst",
          "partial": "First State",
          "signature": "Transducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:nullFirstState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduct of two transducers\n\u003c/p\u003e",
          "module": "[\"FST.Transducer\",\"FST.TransducerInterface\"]",
          "name": "productT",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a -\u003e Transducer a",
          "source": "src/FST-Transducer.html#productT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:productT\",\"http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:productT\"]"
        },
        "index": {
          "description": "Product of two transducers",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "productT",
          "normalized": "Transducer a-\u003eTransducer a-\u003eTransducer a",
          "package": "fst",
          "signature": "Transducer a-\u003eTransducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:productT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert transducer labelled with something other than states to a Transducer\n\u003c/p\u003e",
          "module": "FST.Transducer",
          "name": "rename",
          "package": "fst",
          "signature": "[(b, [(Relation a, b)])] -\u003e Sigma a -\u003e [b] -\u003e [b] -\u003e StateTy -\u003e Transducer a",
          "source": "src/FST-Transducer.html#rename",
          "type": "function"
        },
        "index": {
          "description": "Convert transducer labelled with something other than states to Transducer",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "rename",
          "normalized": "[(a,[(Relation b,a)])]-\u003eSigma b-\u003e[a]-\u003e[a]-\u003eStateTy-\u003eTransducer b",
          "package": "fst",
          "signature": "[(b,[(Relation a,b)])]-\u003eSigma a-\u003e[b]-\u003e[b]-\u003eStateTy-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a transducer\n\u003c/p\u003e",
          "module": "[\"FST.Transducer\",\"FST.TransducerInterface\"]",
          "name": "showTransducer",
          "package": "fst",
          "signature": "Transducer a -\u003e String",
          "source": "src/FST-Transducer.html#showTransducer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:showTransducer\",\"http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:showTransducer\"]"
        },
        "index": {
          "description": "Show transducer",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "showTransducer",
          "normalized": "Transducer a-\u003eString",
          "package": "fst",
          "partial": "Transducer",
          "signature": "Transducer a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:showTransducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKleene star of two transducers\n\u003c/p\u003e",
          "module": "[\"FST.Transducer\",\"FST.TransducerInterface\"]",
          "name": "starT",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a",
          "source": "src/FST-Transducer.html#starT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:starT\",\"http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:starT\"]"
        },
        "index": {
          "description": "Kleene star of two transducers",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "starT",
          "normalized": "Transducer a-\u003eTransducer a",
          "package": "fst",
          "signature": "Transducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:starT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet transition as a list of states\n\u003c/p\u003e",
          "module": "[\"FST.Transducer\",\"FST.TransducerInterface\"]",
          "name": "transitions",
          "package": "fst",
          "signature": "Transducer a -\u003e (StateTy, Relation a) -\u003e [StateTy]",
          "source": "src/FST-Transducer.html#transitions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:transitions\",\"http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:transitions\"]"
        },
        "index": {
          "description": "Get transition as list of states",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "transitions",
          "normalized": "Transducer a-\u003e(StateTy,Relation a)-\u003e[StateTy]",
          "package": "fst",
          "signature": "Transducer a-\u003e(StateTy,Relation a)-\u003e[StateTy]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:transitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of two transducers\n\u003c/p\u003e",
          "module": "[\"FST.Transducer\",\"FST.TransducerInterface\"]",
          "name": "unionT",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a -\u003e Transducer a",
          "source": "src/FST-Transducer.html#unionT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:unionT\",\"http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:unionT\"]"
        },
        "index": {
          "description": "Union of two transducers",
          "hierarchy": "FST Transducer",
          "module": "FST.Transducer",
          "name": "unionT",
          "normalized": "Transducer a-\u003eTransducer a-\u003eTransducer a",
          "package": "fst",
          "signature": "Transducer a-\u003eTransducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-Transducer.html#v:unionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain API for finite-state transducer library.\nImporting this module gives you access to the folllowing functions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eRegular expressions\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFunctions for constructing a simplified regular expression.\n\u003c/p\u003e\u003cpre\u003e s          :: a -\u003e Reg a              -- symbol\n eps        :: Reg a                   -- epsilon\n empty      :: Reg a                   -- empty set\n allS       :: Reg a                   -- all symbol\n star       :: Reg a -\u003e Reg a          -- kleene&#8217;s star\n plus       :: Reg a -\u003e Reg a          -- kleene&#8217;s plus\n complement :: Reg a -\u003e Reg a          -- complement\n (\u003c|\u003e)      :: Reg a -\u003e Reg a -\u003e Reg a -- union\n (|\u003e)       :: Reg a -\u003e Reg a -\u003e Reg a -- product\n (\u003c&\u003e)      :: Reg a -\u003e Reg a -\u003e Reg a -- intersection\n (\u003c-\u003e)      :: Reg a -\u003e Reg a -\u003e Reg a -- set minus\n symbols    :: Reg a -\u003e a              -- collect all symbols.\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eRegular relations\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFunctions for constructing a simplified regular relation.\n\u003c/p\u003e\u003cpre\u003e r       :: a -\u003e a -\u003e Reg a            -- relation\n empty   :: RReg a                     -- empty set\n idR     :: Reg a -\u003e RReg a            -- identity\n star    :: RReg a -\u003e RReg a           -- kleene&#8217;s star\n plus    :: RReg a -\u003e RReg a           -- kleene&#8217;s plus\n (\u003c|\u003e)   :: RReg a -\u003e RReg a -\u003e RReg a -- union\n (|\u003e)    :: RReg a -\u003e RReg a -\u003e RReg a -- product\n (\u003c*\u003e)   :: Reg a -\u003e Reg a -\u003e RReg a   -- cross product\n (\u003c.\u003e)   :: RReg a -\u003e RReg a -\u003e RReg a -- composition\n symbols :: RReg a -\u003e a                -- collect all symbols\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eParsing regular relations\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFunctions for parsing regular relations.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eparseProgram\u003c/a\u003e\u003c/code\u003e takes a string containing a fstStudio program, and try\nto parse it - if unsuccessful, it returns a error message. \u003ccode\u003e\u003ca\u003eparseExp\u003c/a\u003e\u003c/code\u003e parses a\nstring containing a regular relation.\n\u003c/p\u003e\u003cpre\u003e parseProgram :: String -\u003e Either String (RReg String)\n parseExp     :: String -\u003e Either String (RReg String)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eConstruction and running\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFunctions for constructing and running a nite state transducer.\nThe function \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e construct a deterministic, epsilonfree, minimal\ntransducer, and \u003ccode\u003e\u003ca\u003ecompileN\u003c/a\u003e\u003c/code\u003e construct a epsilonfree, possibly non-deterministic,\nnon-minimal transducer. The \u003ccode\u003e\u003ca\u003eSigma\u003c/a\u003e\u003c/code\u003e type provides a way to add symbols\nthat is not present in the regular relation. \u003ccode\u003e\u003ca\u003eapplyDown\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eapplyUp\u003c/a\u003e\u003c/code\u003e are\nused to run the transducer.\n\u003c/p\u003e\u003cpre\u003e type Sigma a = [a]\n\n compile         :: Ord a =\u003e RReg a -\u003e Sigma a -\u003e Transducer a\n compileN        :: Ord a =\u003e RReg a -\u003e Sigma a -\u003e Transducer a\n determinize     :: Ord a =\u003e Transducer a -\u003e Transducer a\n minimize        :: Ord a =\u003e Transducer a -\u003e Transducer a\n unionT          :: Ord a =\u003e Transducer a -\u003e Transducer a -\u003e Transducer a\n productT        :: Ord a =\u003e Transducer a -\u003e Transducer a -\u003e Transducer a\n starT           :: Ord a =\u003e Transducer a -\u003e Transducer a\n compositionT    :: Ord a =\u003e Transducer a -\u003e Transducer a -\u003e Transducer a\n emptyTransducer :: Transducer a\n applyDown       :: Ord a =\u003e Transducer a -\u003e [a] -\u003e Maybe [[a]]\n applyUp         :: Ord a =\u003e Transducer a -\u003e [a] -\u003e Maybe [[a]]\n load            :: FilePath -\u003e IO (Either String (Transducer String))\n save            :: FilePath -\u003e Transducer String -\u003e IO (Either String ())\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eTransducer Information\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFunctions for getting information about a built transducer.\n\u003c/p\u003e\u003cp\u003etype StateTy = Int\n\u003c/p\u003e\u003cpre\u003e states              :: Transducer a -\u003e [StateTy]\n isFinal             :: Transducer a -\u003e StateTy -\u003e Bool\n initial             :: Transducer a -\u003e StateTy\n finals              :: Transducer a -\u003e [StateTy]\n transitonsU         :: Transducer a -\u003e (StateTy,a) -\u003e [(a,StateTy)]\n transitionsD        :: Transducer a -\u003e (StateTy,a) -\u003e [(a,StateTy)]\n showTransducer      :: Transducer a -\u003e String\n numberOfStates      :: Transducer a -\u003e Int\n numberOfTransitions :: Transducer a -\u003e Int\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "FST.TransducerInterface",
          "name": "TransducerInterface",
          "package": "fst",
          "source": "src/FST-TransducerInterface.html",
          "type": "module"
        },
        "index": {
          "description": "Main API for finite-state transducer library Importing this module gives you access to the folllowing functions Regular expressions Functions for constructing simplified regular expression Reg symbol eps Reg epsilon empty Reg empty set allS Reg all symbol star Reg Reg kleene star plus Reg Reg kleene plus complement Reg Reg complement Reg Reg Reg union Reg Reg Reg product Reg Reg Reg intersection Reg Reg Reg set minus symbols Reg collect all symbols Regular relations Functions for constructing simplified regular relation Reg relation empty RReg empty set idR Reg RReg identity star RReg RReg kleene star plus RReg RReg kleene plus RReg RReg RReg union RReg RReg RReg product Reg Reg RReg cross product RReg RReg RReg composition symbols RReg collect all symbols Parsing regular relations Functions for parsing regular relations parseProgram takes string containing fstStudio program and try to parse it if unsuccessful it returns error message parseExp parses string containing regular relation parseProgram String Either String RReg String parseExp String Either String RReg String Construction and running Functions for constructing and running nite state transducer The function compile construct deterministic epsilonfree minimal transducer and compileN construct epsilonfree possibly non-deterministic non-minimal transducer The Sigma type provides way to add symbols that is not present in the regular relation applyDown and applyUp are used to run the transducer type Sigma compile Ord RReg Sigma Transducer compileN Ord RReg Sigma Transducer determinize Ord Transducer Transducer minimize Ord Transducer Transducer unionT Ord Transducer Transducer Transducer productT Ord Transducer Transducer Transducer starT Ord Transducer Transducer compositionT Ord Transducer Transducer Transducer emptyTransducer Transducer applyDown Ord Transducer Maybe applyUp Ord Transducer Maybe load FilePath IO Either String Transducer String save FilePath Transducer String IO Either String Transducer Information Functions for getting information about built transducer type StateTy Int states Transducer StateTy isFinal Transducer StateTy Bool initial Transducer StateTy finals Transducer StateTy transitonsU Transducer StateTy StateTy transitionsD Transducer StateTy StateTy showTransducer Transducer String numberOfStates Transducer Int numberOfTransitions Transducer Int",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "TransducerInterface",
          "package": "fst",
          "partial": "Transducer Interface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for a transducer\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "Transducer",
          "package": "fst",
          "source": "src/FST-Transducer.html#Transducer",
          "type": "data"
        },
        "index": {
          "description": "Data type for transducer",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "Transducer",
          "package": "fst",
          "partial": "Transducer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#t:Transducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a deterministic, epsilon-free, minimal transducer\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "compile",
          "package": "fst",
          "signature": "RReg a -\u003e Sigma a -\u003e Transducer a",
          "source": "src/FST-TransducerInterface.html#compile",
          "type": "function"
        },
        "index": {
          "description": "Construct deterministic epsilon-free minimal transducer",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "compile",
          "normalized": "RReg a-\u003eSigma a-\u003eTransducer a",
          "package": "fst",
          "signature": "RReg a-\u003eSigma a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an epsilon-free, possibly non-deterministic, non-minimal transducer\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "compileN",
          "package": "fst",
          "signature": "RReg a -\u003e Sigma a -\u003e Transducer a",
          "source": "src/FST-TransducerInterface.html#compileN",
          "type": "function"
        },
        "index": {
          "description": "Construct an epsilon-free possibly non-deterministic non-minimal transducer",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "compileN",
          "normalized": "RReg a-\u003eSigma a-\u003eTransducer a",
          "package": "fst",
          "signature": "RReg a-\u003eSigma a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:compileN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a transducer deterministic\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "determinize",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a",
          "source": "src/FST-TransducerInterface.html#determinize",
          "type": "function"
        },
        "index": {
          "description": "Make transducer deterministic",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "determinize",
          "normalized": "Transducer a-\u003eTransducer a",
          "package": "fst",
          "signature": "Transducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:determinize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty transucer\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "emptyTransducer",
          "package": "fst",
          "signature": "Transducer a",
          "source": "src/FST-TransducerInterface.html#emptyTransducer",
          "type": "function"
        },
        "index": {
          "description": "The empty transucer",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "emptyTransducer",
          "package": "fst",
          "partial": "Transducer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:emptyTransducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a transducer from file\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "load",
          "package": "fst",
          "signature": "FilePath -\u003e ErrorT String IO (Transducer String)",
          "source": "src/FST-TransducerInterface.html#load",
          "type": "function"
        },
        "index": {
          "description": "Load transducer from file",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "load",
          "normalized": "FilePath-\u003eErrorT String IO(Transducer String)",
          "package": "fst",
          "signature": "FilePath-\u003eErrorT String IO(Transducer String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a transducer minimal\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "minimize",
          "package": "fst",
          "signature": "Transducer a -\u003e Transducer a",
          "source": "src/FST-TransducerInterface.html#minimize",
          "type": "function"
        },
        "index": {
          "description": "Make transducer minimal",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "minimize",
          "normalized": "Transducer a-\u003eTransducer a",
          "package": "fst",
          "signature": "Transducer a-\u003eTransducer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of states in a transducer\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "numberOfStates",
          "package": "fst",
          "signature": "Transducer a -\u003e Int",
          "source": "src/FST-TransducerInterface.html#numberOfStates",
          "type": "function"
        },
        "index": {
          "description": "Return the number of states in transducer",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "numberOfStates",
          "normalized": "Transducer a-\u003eInt",
          "package": "fst",
          "partial": "Of States",
          "signature": "Transducer a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:numberOfStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of transitions in a transducer\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "numberOfTransitions",
          "package": "fst",
          "signature": "Transducer a -\u003e Int",
          "source": "src/FST-TransducerInterface.html#numberOfTransitions",
          "type": "function"
        },
        "index": {
          "description": "Return the number of transitions in transducer",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "numberOfTransitions",
          "normalized": "Transducer a-\u003eInt",
          "package": "fst",
          "partial": "Of Transitions",
          "signature": "Transducer a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:numberOfTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a file and return contents as string\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "open",
          "package": "fst",
          "signature": "FilePath -\u003e ErrorT String IO String",
          "source": "src/FST-TransducerInterface.html#open",
          "type": "function"
        },
        "index": {
          "description": "Open file and return contents as string",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "open",
          "normalized": "FilePath-\u003eErrorT String IO String",
          "package": "fst",
          "signature": "FilePath-\u003eErrorT String IO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a regular expression from a string\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "parseExp",
          "package": "fst",
          "signature": "String -\u003e Either String (RReg String)",
          "source": "src/FST-Parse.html#parseExp",
          "type": "function"
        },
        "index": {
          "description": "Parse regular expression from string",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "parseExp",
          "normalized": "String-\u003eEither String(RReg String)",
          "package": "fst",
          "partial": "Exp",
          "signature": "String-\u003eEither String(RReg String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:parseExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a program from a string\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "parseProgram",
          "package": "fst",
          "signature": "String -\u003e Either String (RReg String)",
          "source": "src/FST-Parse.html#parseProgram",
          "type": "function"
        },
        "index": {
          "description": "Parse program from string",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "parseProgram",
          "normalized": "String-\u003eEither String(RReg String)",
          "package": "fst",
          "partial": "Program",
          "signature": "String-\u003eEither String(RReg String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:parseProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave a transducer from file\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "save",
          "package": "fst",
          "signature": "FilePath -\u003e Transducer String -\u003e ErrorT String IO ()",
          "source": "src/FST-TransducerInterface.html#save",
          "type": "function"
        },
        "index": {
          "description": "Save transducer from file",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "save",
          "normalized": "FilePath-\u003eTransducer String-\u003eErrorT String IO()",
          "package": "fst",
          "signature": "FilePath-\u003eTransducer String-\u003eErrorT String IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave contents (as string) to a file\n\u003c/p\u003e",
          "module": "FST.TransducerInterface",
          "name": "saveToFile",
          "package": "fst",
          "signature": "FilePath -\u003e String -\u003e ErrorT String IO ()",
          "source": "src/FST-TransducerInterface.html#saveToFile",
          "type": "function"
        },
        "index": {
          "description": "Save contents as string to file",
          "hierarchy": "FST TransducerInterface",
          "module": "FST.TransducerInterface",
          "name": "saveToFile",
          "normalized": "FilePath-\u003eString-\u003eErrorT String IO()",
          "package": "fst",
          "partial": "To File",
          "signature": "FilePath-\u003eString-\u003eErrorT String IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerInterface.html#v:saveToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType system for transducers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FST.TransducerTypes",
          "name": "TransducerTypes",
          "package": "fst",
          "source": "src/FST-TransducerTypes.html",
          "type": "module"
        },
        "index": {
          "description": "Type system for transducers",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "TransducerTypes",
          "package": "fst",
          "partial": "Transducer Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinal states\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "FinalStates",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#FinalStates",
          "type": "type"
        },
        "index": {
          "description": "Final states",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "FinalStates",
          "package": "fst",
          "partial": "Final States",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:FinalStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst state\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "FirstState",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#FirstState",
          "type": "type"
        },
        "index": {
          "description": "First state",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "FirstState",
          "package": "fst",
          "partial": "First State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:FirstState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial states\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "InitialStates",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#InitialStates",
          "type": "type"
        },
        "index": {
          "description": "Initial states",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "InitialStates",
          "package": "fst",
          "partial": "Initial States",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:InitialStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast state\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "LastState",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#LastState",
          "type": "type"
        },
        "index": {
          "description": "Last state",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "LastState",
          "package": "fst",
          "partial": "Last State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:LastState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower language\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "Lower",
          "package": "fst",
          "source": "src/FST-TransducerTypes.html#Lower",
          "type": "type"
        },
        "index": {
          "description": "Lower language",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "Lower",
          "package": "fst",
          "partial": "Lower",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:Lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation between upper/lower languages\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "Relation",
          "package": "fst",
          "source": "src/FST-TransducerTypes.html#Relation",
          "type": "type"
        },
        "index": {
          "description": "relation between upper lower languages",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "Relation",
          "package": "fst",
          "partial": "Relation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:Relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe alphabet of an automaton\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "Sigma",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#Sigma",
          "type": "type"
        },
        "index": {
          "description": "The alphabet of an automaton",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "Sigma",
          "package": "fst",
          "partial": "Sigma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:Sigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "StateTy",
          "package": "fst",
          "source": "src/FST-AutomatonTypes.html#StateTy",
          "type": "type"
        },
        "index": {
          "description": "state",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "StateTy",
          "package": "fst",
          "partial": "State Ty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:StateTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbol\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "Symbol",
          "package": "fst",
          "source": "src/FST-TransducerTypes.html#Symbol",
          "type": "data"
        },
        "index": {
          "description": "symbol",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "Symbol",
          "package": "fst",
          "partial": "Symbol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransducer transition table\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "TTransitionTable",
          "package": "fst",
          "source": "src/FST-TransducerTypes.html#TTransitionTable",
          "type": "type"
        },
        "index": {
          "description": "Transducer transition table",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "TTransitionTable",
          "package": "fst",
          "partial": "TTransition Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:TTransitionTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransducer transitions\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "TTransitions",
          "package": "fst",
          "source": "src/FST-TransducerTypes.html#TTransitions",
          "type": "type"
        },
        "index": {
          "description": "Transducer transitions",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "TTransitions",
          "package": "fst",
          "partial": "TTransitions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:TTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of TransducerFunctions\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "TransducerFunctions",
          "package": "fst",
          "source": "src/FST-TransducerTypes.html#TransducerFunctions",
          "type": "class"
        },
        "index": {
          "description": "Class of TransducerFunctions",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "TransducerFunctions",
          "package": "fst",
          "partial": "Transducer Functions",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:TransducerFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper language\n\u003c/p\u003e",
          "module": "FST.TransducerTypes",
          "name": "Upper",
          "package": "fst",
          "source": "src/FST-TransducerTypes.html#Upper",
          "type": "type"
        },
        "index": {
          "description": "Upper language",
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "Upper",
          "package": "fst",
          "partial": "Upper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#t:Upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "Eps",
          "package": "fst",
          "signature": "Eps",
          "source": "src/FST-TransducerTypes.html#Symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "Eps",
          "package": "fst",
          "partial": "Eps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:Eps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "S",
          "package": "fst",
          "signature": "S a",
          "source": "src/FST-TransducerTypes.html#Symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "S",
          "package": "fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "alphabet",
          "package": "fst",
          "signature": "f a -\u003e Sigma a",
          "source": "src/FST-TransducerTypes.html#alphabet",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "alphabet",
          "normalized": "a b-\u003eSigma b",
          "package": "fst",
          "signature": "f a-\u003eSigma a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:alphabet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "finals",
          "package": "fst",
          "signature": "f a -\u003e FinalStates",
          "source": "src/FST-TransducerTypes.html#finals",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "finals",
          "normalized": "a b-\u003eFinalStates",
          "package": "fst",
          "signature": "f a-\u003eFinalStates",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:finals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "firstState",
          "package": "fst",
          "signature": "f a -\u003e StateTy",
          "source": "src/FST-TransducerTypes.html#firstState",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "firstState",
          "normalized": "a b-\u003eStateTy",
          "package": "fst",
          "partial": "State",
          "signature": "f a-\u003eStateTy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:firstState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "initials",
          "package": "fst",
          "signature": "f a -\u003e InitialStates",
          "source": "src/FST-TransducerTypes.html#initials",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "initials",
          "normalized": "a b-\u003eInitialStates",
          "package": "fst",
          "signature": "f a-\u003eInitialStates",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:initials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "isFinal",
          "package": "fst",
          "signature": "f a -\u003e StateTy -\u003e Bool",
          "source": "src/FST-TransducerTypes.html#isFinal",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "isFinal",
          "normalized": "a b-\u003eStateTy-\u003eBool",
          "package": "fst",
          "partial": "Final",
          "signature": "f a-\u003eStateTy-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:isFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "lastState",
          "package": "fst",
          "signature": "f a -\u003e StateTy",
          "source": "src/FST-TransducerTypes.html#lastState",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "lastState",
          "normalized": "a b-\u003eStateTy",
          "package": "fst",
          "partial": "State",
          "signature": "f a-\u003eStateTy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:lastState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "states",
          "package": "fst",
          "signature": "f a -\u003e [StateTy]",
          "source": "src/FST-TransducerTypes.html#states",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "states",
          "normalized": "a b-\u003e[StateTy]",
          "package": "fst",
          "signature": "f a-\u003e[StateTy]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:states"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "transitionList",
          "package": "fst",
          "signature": "f a -\u003e StateTy -\u003e TTransitions a",
          "source": "src/FST-TransducerTypes.html#transitionList",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "transitionList",
          "normalized": "a b-\u003eStateTy-\u003eTTransitions b",
          "package": "fst",
          "partial": "List",
          "signature": "f a-\u003eStateTy-\u003eTTransitions a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:transitionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "transitionTable",
          "package": "fst",
          "signature": "f a -\u003e TTransitionTable a",
          "source": "src/FST-TransducerTypes.html#transitionTable",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "transitionTable",
          "normalized": "a b-\u003eTTransitionTable b",
          "package": "fst",
          "partial": "Table",
          "signature": "f a-\u003eTTransitionTable a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:transitionTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "transitionsD",
          "package": "fst",
          "signature": "f a -\u003e (StateTy, Symbol a) -\u003e [(Symbol a, StateTy)]",
          "source": "src/FST-TransducerTypes.html#transitionsD",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "transitionsD",
          "normalized": "a b-\u003e(StateTy,Symbol b)-\u003e[(Symbol b,StateTy)]",
          "package": "fst",
          "signature": "f a-\u003e(StateTy,Symbol a)-\u003e[(Symbol a,StateTy)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:transitionsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FST.TransducerTypes",
          "name": "transitionsU",
          "package": "fst",
          "signature": "f a -\u003e (StateTy, Symbol a) -\u003e [(Symbol a, StateTy)]",
          "source": "src/FST-TransducerTypes.html#transitionsU",
          "type": "method"
        },
        "index": {
          "hierarchy": "FST TransducerTypes",
          "module": "FST.TransducerTypes",
          "name": "transitionsU",
          "normalized": "a b-\u003e(StateTy,Symbol b)-\u003e[(Symbol b,StateTy)]",
          "package": "fst",
          "signature": "f a-\u003e(StateTy,Symbol a)-\u003e[(Symbol a,StateTy)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fst/docs/FST-TransducerTypes.html#v:transitionsU"
      }
    }
  ]
]