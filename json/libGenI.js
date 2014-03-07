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
        "word": "libGenI"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Automaton",
          "name": "3ANFA",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Automaton",
          "module": "NLP.GenI.Automaton",
          "name": "3ANFA",
          "package": "libGenI",
          "partial": "ANFA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#t:3ANFA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Automaton",
          "name": "3AaddTrans",
          "package": "libGenI",
          "signature": "NFA st ab -\u003e st -\u003e Maybe ab -\u003e st -\u003e NFA st ab",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Automaton",
          "module": "NLP.GenI.Automaton",
          "name": "3AaddTrans",
          "normalized": "NFA a b-\u003ea-\u003eMaybe b-\u003ea-\u003eNFA a b",
          "package": "libGenI",
          "partial": "Aadd Trans",
          "signature": "NFA st ab-\u003est-\u003eMaybe ab-\u003est-\u003eNFA st ab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#v:3AaddTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Not quite the set of all paths, but the sets of all transitions\n",
          "module": "NLP.GenI.Automaton",
          "name": "3AautomatonPathSets",
          "package": "libGenI",
          "signature": "(NFA st ab) -\u003e [[[ab]]]",
          "type": "function"
        },
        "index": {
          "description": "Not quite the set of all paths but the sets of all transitions",
          "hierarchy": "NLP GenI Automaton",
          "module": "NLP.GenI.Automaton",
          "name": "3AautomatonPathSets",
          "normalized": "(NFA a b)-\u003e[[[b]]]",
          "package": "libGenI",
          "partial": "Aautomaton Path Sets",
          "signature": "(NFA st ab)-\u003e[[[ab]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#v:3AautomatonPathSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"NLP.GenI.Automaton\",\"NLP.GenI.Polarity\"]",
          "name": "3AautomatonPaths",
          "package": "libGenI",
          "signature": "(NFA st ab) -\u003e [[ab]]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#v:3AautomatonPaths\",\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AautomatonPaths\"]"
        },
        "index": {
          "hierarchy": "NLP GenI Automaton",
          "module": "NLP.GenI.Automaton",
          "name": "3AautomatonPaths",
          "normalized": "(NFA a b)-\u003e[[b]]",
          "package": "libGenI",
          "partial": "Aautomaton Paths",
          "signature": "(NFA st ab)-\u003e[[ab]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#v:3AautomatonPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"NLP.GenI.Automaton\",\"NLP.GenI.Polarity\"]",
          "name": "3AfinalSt",
          "package": "libGenI",
          "signature": "NFA st ab -\u003e [st]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#v:3AfinalSt\",\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AfinalSt\"]"
        },
        "index": {
          "hierarchy": "NLP GenI Automaton",
          "module": "NLP.GenI.Automaton",
          "name": "3AfinalSt",
          "normalized": "NFA a b-\u003e[a]",
          "package": "libGenI",
          "partial": "Afinal St",
          "signature": "NFA st ab-\u003e[st]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#v:3AfinalSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Automaton",
          "name": "3AlookupTrans",
          "package": "libGenI",
          "signature": "NFA st ab -\u003e st -\u003e (Maybe ab) -\u003e [st]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Automaton",
          "module": "NLP.GenI.Automaton",
          "name": "3AlookupTrans",
          "normalized": "NFA a b-\u003ea-\u003e(Maybe b)-\u003e[a]",
          "package": "libGenI",
          "partial": "Alookup Trans",
          "signature": "NFA st ab-\u003est-\u003e(Maybe ab)-\u003e[st]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#v:3AlookupTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Automaton",
          "name": "3AnumStates",
          "package": "libGenI",
          "signature": "NFA st ab -\u003e Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Automaton",
          "module": "NLP.GenI.Automaton",
          "name": "3AnumStates",
          "normalized": "NFA a b-\u003eInt",
          "package": "libGenI",
          "partial": "Anum States",
          "signature": "NFA st ab-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#v:3AnumStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Automaton",
          "name": "3AnumTransitions",
          "package": "libGenI",
          "signature": "NFA st ab -\u003e Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Automaton",
          "module": "NLP.GenI.Automaton",
          "name": "3AnumTransitions",
          "normalized": "NFA a b-\u003eInt",
          "package": "libGenI",
          "partial": "Anum Transitions",
          "signature": "NFA st ab-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Automaton.html#v:3AnumTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AAvPair",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AAvPair",
          "package": "libGenI",
          "partial": "AAv Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3AAvPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AFlist",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AFlist",
          "package": "libGenI",
          "partial": "AFlist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3AFlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AGNode",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AGNode",
          "package": "libGenI",
          "partial": "AGNode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3AGNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AGType",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AGType",
          "package": "libGenI",
          "partial": "AGType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3AGType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AGeniVal",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AGeniVal",
          "package": "libGenI",
          "partial": "AGeni Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3AGeniVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AILexEntry",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AILexEntry",
          "package": "libGenI",
          "partial": "AILex Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3AILexEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A lexicon maps semantic predicates to lexical entries.\n",
          "module": "NLP.GenI.Btypes",
          "name": "3ALexicon",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "description": "lexicon maps semantic predicates to lexical entries",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ALexicon",
          "package": "libGenI",
          "partial": "ALexicon",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3ALexicon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ALitConstr",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ALitConstr",
          "package": "libGenI",
          "partial": "ALit Constr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3ALitConstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AMTtree",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AMTtree",
          "package": "libGenI",
          "partial": "AMTtree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3AMTtree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AMacros",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AMacros",
          "package": "libGenI",
          "partial": "AMacros",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3AMacros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AMorphLexEntry",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AMorphLexEntry",
          "package": "libGenI",
          "partial": "AMorph Lex Entry",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3AMorphLexEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ANodeName",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ANodeName",
          "package": "libGenI",
          "partial": "ANode Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3ANodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3APred",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3APred",
          "package": "libGenI",
          "partial": "APred",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3APred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3APtype",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3APtype",
          "package": "libGenI",
          "partial": "APtype",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3APtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ASem",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ASem",
          "package": "libGenI",
          "partial": "ASem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3ASem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ASemInput",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ASemInput",
          "package": "libGenI",
          "partial": "ASem Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3ASemInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ASemPols",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ASemPols",
          "package": "libGenI",
          "partial": "ASem Pols",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3ASemPols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ASubst",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ASubst",
          "package": "libGenI",
          "partial": "ASubst",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3ASubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ATestCase",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ATestCase",
          "package": "libGenI",
          "partial": "ATest Case",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3ATestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ATtree",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ATtree",
          "package": "libGenI",
          "partial": "ATtree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#t:3ATtree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ACollectable",
          "package": "libGenI",
          "type": "class"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ACollectable",
          "package": "libGenI",
          "partial": "ACollectable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3ACollectable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AIdable",
          "package": "libGenI",
          "type": "class"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AIdable",
          "package": "libGenI",
          "partial": "AIdable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AIdable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AReplacable",
          "package": "libGenI",
          "type": "class"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AReplacable",
          "package": "libGenI",
          "partial": "AReplacable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AReplacable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AalphaConvert",
          "package": "libGenI",
          "signature": "String -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AalphaConvert",
          "normalized": "String-\u003ea-\u003ea",
          "package": "libGenI",
          "partial": "Aalpha Convert",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AalphaConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AalphaConvertById",
          "package": "libGenI",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AalphaConvertById",
          "normalized": "a-\u003ea",
          "package": "libGenI",
          "partial": "Aalpha Convert By Id",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AalphaConvertById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"NLP.GenI.Btypes\",\"NLP.GenI.Tags\"]",
          "name": "3Acollect",
          "package": "libGenI",
          "signature": "a -\u003e Set String -\u003e Set String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3Acollect\",\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3Acollect\"]"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3Acollect",
          "normalized": "a-\u003eSet String-\u003eSet String",
          "package": "libGenI",
          "partial": "Acollect",
          "signature": "a-\u003eSet String-\u003eSet String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3Acollect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A null \u003ctt\u003e\u003ca\u003eGNode\u003c/a\u003e\u003c/tt\u003e which you can use for various debugging or display purposes.\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AemptyGNode",
          "package": "libGenI",
          "signature": "GNode",
          "type": "function"
        },
        "index": {
          "description": "null GNode which you can use for various debugging or display purposes",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AemptyGNode",
          "package": "libGenI",
          "partial": "Aempty GNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AemptyGNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AemptyLE",
          "package": "libGenI",
          "signature": "ILexEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AemptyLE",
          "package": "libGenI",
          "partial": "Aempty LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AemptyLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A null tree which you can use for various debugging or display purposes.\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AemptyMacro",
          "package": "libGenI",
          "signature": "MTtree",
          "type": "function"
        },
        "index": {
          "description": "null tree which you can use for various debugging or display purposes",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AemptyMacro",
          "package": "libGenI",
          "partial": "Aempty Macro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AemptyMacro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AemptyPred",
          "package": "libGenI",
          "signature": "Pred",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AemptyPred",
          "package": "libGenI",
          "partial": "Aempty Pred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AemptyPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3Afoot",
          "package": "libGenI",
          "signature": "Tree GNode -\u003e GNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3Afoot",
          "normalized": "Tree GNode-\u003eGNode",
          "package": "libGenI",
          "partial": "Afoot",
          "signature": "Tree GNode-\u003eGNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3Afoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "(assumes that it's a GConst!)\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AfromGConst",
          "package": "libGenI",
          "signature": "GeniVal -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "assumes that it GConst",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AfromGConst",
          "normalized": "GeniVal-\u003e[String]",
          "package": "libGenI",
          "partial": "Afrom GConst",
          "signature": "GeniVal-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AfromGConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "(assumes that it's a GVar!)\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AfromGVar",
          "package": "libGenI",
          "signature": "GeniVal -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "assumes that it GVar",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AfromGVar",
          "normalized": "GeniVal-\u003eString",
          "package": "libGenI",
          "partial": "Afrom GVar",
          "signature": "GeniVal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AfromGVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the value of the \u003ca\u003ecat\u003c/a\u003e attribute, if available\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AgCategory",
          "package": "libGenI",
          "signature": "Flist -\u003e Maybe GeniVal",
          "type": "function"
        },
        "index": {
          "description": "Return the value of the cat attribute if available",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AgCategory",
          "normalized": "Flist-\u003eMaybe GeniVal",
          "package": "libGenI",
          "partial": "Ag Category",
          "signature": "Flist-\u003eMaybe GeniVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AgCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AgnnameIs",
          "package": "libGenI",
          "signature": "NodeName -\u003e GNode -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AgnnameIs",
          "normalized": "NodeName-\u003eGNode-\u003eBool",
          "package": "libGenI",
          "partial": "Agnname Is",
          "signature": "NodeName-\u003eGNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AgnnameIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AidOf",
          "package": "libGenI",
          "signature": "a -\u003e Integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AidOf",
          "normalized": "a-\u003eInteger",
          "package": "libGenI",
          "partial": "Aid Of",
          "signature": "a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AidOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AisAnon",
          "package": "libGenI",
          "signature": "GeniVal -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AisAnon",
          "normalized": "GeniVal-\u003eBool",
          "package": "libGenI",
          "partial": "Ais Anon",
          "signature": "GeniVal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AisAnon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AisConst",
          "package": "libGenI",
          "signature": "GeniVal -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AisConst",
          "normalized": "GeniVal-\u003eBool",
          "package": "libGenI",
          "partial": "Ais Const",
          "signature": "GeniVal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AisConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AisVar",
          "package": "libGenI",
          "signature": "GeniVal -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AisVar",
          "normalized": "GeniVal-\u003eBool",
          "package": "libGenI",
          "partial": "Ais Var",
          "signature": "GeniVal-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AisVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Attributes recognised as lexemes, in order of preference\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AlexemeAttributes",
          "package": "libGenI",
          "signature": "[String]",
          "type": "function"
        },
        "index": {
          "description": "Attributes recognised as lexemes in order of preference",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AlexemeAttributes",
          "normalized": "[String]",
          "package": "libGenI",
          "partial": "Alexeme Attributes",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AlexemeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that the first Subst is assumed to come chronologically\n   before the second one; so merging \u003ctt\u003e{ X -\u003e Y }\u003c/tt\u003e and \u003ctt\u003e{ Y -\u003e 3 }\u003c/tt\u003e\n   should give us \u003ctt\u003e{ X -\u003e 3; Y -\u003e 3 }\u003c/tt\u003e;\n\u003c/p\u003e\u003cp\u003eSee \u003ctt\u003eprependToSubst\u003c/tt\u003e for a warning!\n\u003c/p\u003e",
          "module": "NLP.GenI.Btypes",
          "name": "3AmergeSubst",
          "package": "libGenI",
          "signature": "Subst -\u003e Subst -\u003e Subst",
          "type": "function"
        },
        "index": {
          "description": "Note that the first Subst is assumed to come chronologically before the second one so merging and should give us See prependToSubst for warning",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AmergeSubst",
          "normalized": "Subst-\u003eSubst-\u003eSubst",
          "package": "libGenI",
          "partial": "Amerge Subst",
          "signature": "Subst-\u003eSubst-\u003eSubst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AmergeSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Plug the first tree into the second tree at the specified node.\n   Anything below the second node is silently discarded.\n   We assume the trees are pluggable; it is treated as a bug if\n   they are not!\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AplugTree",
          "package": "libGenI",
          "signature": "Tree NodeName -\u003e NodeName -\u003e Tree NodeName -\u003e Tree NodeName",
          "type": "function"
        },
        "index": {
          "description": "Plug the first tree into the second tree at the specified node Anything below the second node is silently discarded We assume the trees are pluggable it is treated as bug if they are not",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AplugTree",
          "normalized": "Tree NodeName-\u003eNodeName-\u003eTree NodeName-\u003eTree NodeName",
          "package": "libGenI",
          "partial": "Aplug Tree",
          "signature": "Tree NodeName-\u003eNodeName-\u003eTree NodeName-\u003eTree NodeName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AplugTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3Aprop_unify_anon",
          "package": "libGenI",
          "signature": "[GeniVal] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3Aprop_unify_anon",
          "normalized": "[GeniVal]-\u003eBool",
          "package": "libGenI",
          "partial": "Aprop",
          "signature": "[GeniVal]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3Aprop_unify_anon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3Aprop_unify_self",
          "package": "libGenI",
          "signature": "[GeniVal] -\u003e Property",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3Aprop_unify_self",
          "normalized": "[GeniVal]-\u003eProperty",
          "package": "libGenI",
          "partial": "Aprop",
          "signature": "[GeniVal]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3Aprop_unify_self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3Aprop_unify_sym",
          "package": "libGenI",
          "signature": "[GeniVal] -\u003e [GeniVal] -\u003e Property",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3Aprop_unify_sym",
          "normalized": "[GeniVal]-\u003e[GeniVal]-\u003eProperty",
          "package": "libGenI",
          "partial": "Aprop",
          "signature": "[GeniVal]-\u003e[GeniVal]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3Aprop_unify_sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3Areplace",
          "package": "libGenI",
          "signature": "Subst -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3Areplace",
          "normalized": "Subst-\u003ea-\u003ea",
          "package": "libGenI",
          "partial": "Areplace",
          "signature": "Subst-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3Areplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Here it is safe to say (X -\u003e Y; Y -\u003e Z) because this would be crushed\n   down into a final value of (X -\u003e Z; Y -\u003e Z)\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AreplaceList",
          "package": "libGenI",
          "signature": "[(String, GeniVal)] -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Here it is safe to say because this would be crushed down into final value of",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AreplaceList",
          "normalized": "[(String,GeniVal)]-\u003ea-\u003ea",
          "package": "libGenI",
          "partial": "Areplace List",
          "signature": "[(String,GeniVal)]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AreplaceList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AreplaceMap",
          "package": "libGenI",
          "signature": "Map String GeniVal -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AreplaceMap",
          "normalized": "Map String GeniVal-\u003ea-\u003ea",
          "package": "libGenI",
          "partial": "Areplace Map",
          "signature": "Map String GeniVal-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AreplaceMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AreplaceOne",
          "package": "libGenI",
          "signature": "(String, GeniVal) -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AreplaceOne",
          "normalized": "(String,GeniVal)-\u003ea-\u003ea",
          "package": "libGenI",
          "partial": "Areplace One",
          "signature": "(String,GeniVal)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AreplaceOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Default implementation for replaceOne but not a good idea for the\n   core stuff; which is why it is not a typeclass default\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AreplaceOneAsMap",
          "package": "libGenI",
          "signature": "(String, GeniVal) -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Default implementation for replaceOne but not good idea for the core stuff which is why it is not typeclass default",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AreplaceOneAsMap",
          "normalized": "(String,GeniVal)-\u003ea-\u003ea",
          "package": "libGenI",
          "partial": "Areplace One As Map",
          "signature": "(String,GeniVal)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AreplaceOneAsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3Aroot",
          "package": "libGenI",
          "signature": "Tree a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3Aroot",
          "normalized": "Tree a-\u003ea",
          "package": "libGenI",
          "partial": "Aroot",
          "signature": "Tree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3Aroot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3ArootUpd",
          "package": "libGenI",
          "signature": "Tree a -\u003e a -\u003e Tree a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3ArootUpd",
          "normalized": "Tree a-\u003ea-\u003eTree a",
          "package": "libGenI",
          "partial": "Aroot Upd",
          "signature": "Tree a-\u003ea-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3ArootUpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a lexical item \u003ctt\u003es\u003c/tt\u003e and a Tree GNode t, returns the tree t'\n   where l has been assigned to the anchor node in t'\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AsetAnchor",
          "package": "libGenI",
          "signature": "[String] -\u003e Tree GNode -\u003e Tree GNode",
          "type": "function"
        },
        "index": {
          "description": "Given lexical item and Tree GNode returns the tree where has been assigned to the anchor node in",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AsetAnchor",
          "normalized": "[String]-\u003eTree GNode-\u003eTree GNode",
          "package": "libGenI",
          "partial": "Aset Anchor",
          "signature": "[String]-\u003eTree GNode-\u003eTree GNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AsetAnchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a lexical item \u003ctt\u003el\u003c/tt\u003e and a tree node \u003ctt\u003en\u003c/tt\u003e (actually a subtree\n   with no children), return the same node with the lexical item as\n   its unique child.  The idea is that it converts terminal lexeme nodes\n   into preterminal nodes where the actual terminal is the given lexical\n   item\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AsetLexeme",
          "package": "libGenI",
          "signature": "[String] -\u003e Tree GNode -\u003e Tree GNode",
          "type": "function"
        },
        "index": {
          "description": "Given lexical item and tree node actually subtree with no children return the same node with the lexical item as its unique child The idea is that it converts terminal lexeme nodes into preterminal nodes where the actual terminal is the given lexical item",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AsetLexeme",
          "normalized": "[String]-\u003eTree GNode-\u003eTree GNode",
          "package": "libGenI",
          "partial": "Aset Lexeme",
          "signature": "[String]-\u003eTree GNode-\u003eTree GNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AsetLexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AshowAv",
          "package": "libGenI",
          "signature": "AvPair -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AshowAv",
          "normalized": "AvPair-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Av",
          "signature": "AvPair-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AshowAv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AshowFlist",
          "package": "libGenI",
          "signature": "Flist -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AshowFlist",
          "normalized": "Flist-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Flist",
          "signature": "Flist-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AshowFlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AshowLexeme",
          "package": "libGenI",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AshowLexeme",
          "normalized": "[String]-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Lexeme",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AshowLexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AshowPairs",
          "package": "libGenI",
          "signature": "Flist -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AshowPairs",
          "normalized": "Flist-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Pairs",
          "signature": "Flist-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AshowPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AshowPred",
          "package": "libGenI",
          "signature": "Pred -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AshowPred",
          "normalized": "Pred-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Pred",
          "signature": "Pred-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AshowPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AshowSem",
          "package": "libGenI",
          "signature": "Sem -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AshowSem",
          "normalized": "Sem-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Sem",
          "signature": "Sem-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AshowSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sort an Flist according with its attributes\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AsortFlist",
          "package": "libGenI",
          "signature": "Flist -\u003e Flist",
          "type": "function"
        },
        "index": {
          "description": "Sort an Flist according with its attributes",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AsortFlist",
          "normalized": "Flist-\u003eFlist",
          "package": "libGenI",
          "partial": "Asort Flist",
          "signature": "Flist-\u003eFlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AsortFlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sort semantics first according to its predicate, and then to its handles.\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AsortSem",
          "package": "libGenI",
          "signature": "Sem -\u003e Sem",
          "type": "function"
        },
        "index": {
          "description": "Sort semantics first according to its predicate and then to its handles",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AsortSem",
          "normalized": "Sem-\u003eSem",
          "package": "libGenI",
          "partial": "Asort Sem",
          "signature": "Sem-\u003eSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AsortSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "foot node of the aux tree\naux tree\nplace to adjoin in target tree\ntarget tree\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AspliceTree",
          "package": "libGenI",
          "signature": "NodeName-\u003e Tree NodeName-\u003e NodeName-\u003e Tree NodeName-\u003e Tree NodeName",
          "type": "function"
        },
        "index": {
          "description": "foot node of the aux tree aux tree place to adjoin in target tree target tree",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AspliceTree",
          "normalized": "NodeName-\u003eTree NodeName-\u003eNodeName-\u003eTree NodeName-\u003eTree NodeName",
          "package": "libGenI",
          "partial": "Asplice Tree",
          "signature": "NodeName-\u003eTree NodeName-\u003eNodeName-\u003eTree NodeName-\u003eTree NodeName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AspliceTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AsubsumeSem",
          "package": "libGenI",
          "signature": "Sem -\u003e Sem -\u003e [(Sem, Subst)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AsubsumeSem",
          "normalized": "Sem-\u003eSem-\u003e[(Sem,Subst)]",
          "package": "libGenI",
          "partial": "Asubsume Sem",
          "signature": "Sem-\u003eSem-\u003e[(Sem,Subst)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AsubsumeSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a Semantics, return the string with the proper keys\n   (propsymbol+arity) to access the agenda\n",
          "module": "NLP.GenI.Btypes",
          "name": "3AtoKeys",
          "package": "libGenI",
          "signature": "Sem -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Given Semantics return the string with the proper keys propsymbol arity to access the agenda",
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AtoKeys",
          "normalized": "Sem-\u003e[String]",
          "package": "libGenI",
          "partial": "Ato Keys",
          "signature": "Sem-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AtoKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3Aunify",
          "package": "libGenI",
          "signature": "[GeniVal] -\u003e [GeniVal] -\u003e m ([GeniVal], Subst)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3Aunify",
          "normalized": "[GeniVal]-\u003e[GeniVal]-\u003ea([GeniVal],Subst)",
          "package": "libGenI",
          "partial": "Aunify",
          "signature": "[GeniVal]-\u003e[GeniVal]-\u003em([GeniVal],Subst)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3Aunify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Btypes",
          "name": "3AunifyFeat",
          "package": "libGenI",
          "signature": "Flist -\u003e Flist -\u003e m (Flist, Subst)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Btypes",
          "module": "NLP.GenI.Btypes",
          "name": "3AunifyFeat",
          "normalized": "Flist-\u003eFlist-\u003ea(Flist,Subst)",
          "package": "libGenI",
          "partial": "Aunify Feat",
          "signature": "Flist-\u003eFlist-\u003em(Flist,Subst)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Btypes.html#v:3AunifyFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3ABuilder",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3ABuilder",
          "package": "libGenI",
          "partial": "ABuilder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3ABuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3ABuilderState",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3ABuilderState",
          "package": "libGenI",
          "partial": "ABuilder State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3ABuilderState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3ADerivation",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3ADerivation",
          "package": "libGenI",
          "partial": "ADerivation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3ADerivation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3ADispatchFilter",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3ADispatchFilter",
          "package": "libGenI",
          "partial": "ADispatch Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3ADispatchFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AIafMap",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AIafMap",
          "package": "libGenI",
          "partial": "AIaf Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3AIafMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AInput",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AInput",
          "package": "libGenI",
          "partial": "AInput",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3AInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3ANullState",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3ANullState",
          "package": "libGenI",
          "partial": "ANull State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3ANullState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AOutput",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AOutput",
          "package": "libGenI",
          "partial": "AOutput",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3AOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3ASemBitMap",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3ASemBitMap",
          "package": "libGenI",
          "partial": "ASem Bit Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3ASemBitMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3ASentenceAut",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3ASentenceAut",
          "package": "libGenI",
          "partial": "ASentence Aut",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3ASentenceAut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AUninflectedDisjunction",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AUninflectedDisjunction",
          "package": "libGenI",
          "partial": "AUninflected Disjunction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3AUninflectedDisjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AUninflectedSentence",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AUninflectedSentence",
          "package": "libGenI",
          "partial": "AUninflected Sentence",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3AUninflectedSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AUninflectedWord",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AUninflectedWord",
          "package": "libGenI",
          "partial": "AUninflected Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#t:3AUninflectedWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sequence two dispatch filters.\n",
          "module": "NLP.GenI.Builder",
          "name": "3A\u003e--\u003e",
          "package": "libGenI",
          "signature": "DispatchFilter s a -\u003e DispatchFilter s a -\u003e DispatchFilter s a",
          "type": "function"
        },
        "index": {
          "description": "Sequence two dispatch filters",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3A\u003e--\u003e",
          "normalized": "DispatchFilter a b-\u003eDispatchFilter a b-\u003eDispatchFilter a b",
          "package": "libGenI",
          "signature": "DispatchFilter s a-\u003eDispatchFilter s a-\u003eDispatchFilter s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3A\u003e--\u003e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AIafAble",
          "package": "libGenI",
          "type": "class"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AIafAble",
          "package": "libGenI",
          "partial": "AIaf Able",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AIafAble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AaddCounters",
          "package": "libGenI",
          "signature": "Statistics -\u003e Statistics -\u003e Statistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AaddCounters",
          "normalized": "Statistics-\u003eStatistics-\u003eStatistics",
          "package": "libGenI",
          "partial": "Aadd Counters",
          "signature": "Statistics-\u003eStatistics-\u003eStatistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AaddCounters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"NLP.GenI.Builder\",\"NLP.GenI.CkyEarley.CkyBuilder\"]",
          "name": "3AbitVectorToSem",
          "package": "libGenI",
          "signature": "SemBitMap -\u003e BitVector -\u003e Sem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AbitVectorToSem\",\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AbitVectorToSem\"]"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AbitVectorToSem",
          "normalized": "SemBitMap-\u003eBitVector-\u003eSem",
          "package": "libGenI",
          "partial": "Abit Vector To Sem",
          "signature": "SemBitMap-\u003eBitVector-\u003eSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AbitVectorToSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3Achart_size",
          "package": "libGenI",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3Achart_size",
          "package": "libGenI",
          "partial": "Achart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3Achart_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If the item meets some condition, use the first filter, otherwise\n   use the second one.\n",
          "module": "NLP.GenI.Builder",
          "name": "3AcondFilter",
          "package": "libGenI",
          "signature": "(a -\u003e Bool) -\u003e DispatchFilter s a -\u003e DispatchFilter s a -\u003e DispatchFilter s a",
          "type": "function"
        },
        "index": {
          "description": "If the item meets some condition use the first filter otherwise use the second one",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AcondFilter",
          "normalized": "(a-\u003eBool)-\u003eDispatchFilter b a-\u003eDispatchFilter b a-\u003eDispatchFilter b a",
          "package": "libGenI",
          "partial": "Acond Filter",
          "signature": "(a-\u003eBool)-\u003eDispatchFilter s a-\u003eDispatchFilter s a-\u003eDispatchFilter s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AcondFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AdefaultMetricNames",
          "package": "libGenI",
          "signature": "[String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AdefaultMetricNames",
          "normalized": "[String]",
          "package": "libGenI",
          "partial": "Adefault Metric Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AdefaultMetricNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Default implementation for the \u003ctt\u003estepAll\u003c/tt\u003e function in \u003ctt\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "NLP.GenI.Builder",
          "name": "3AdefaultStepAll",
          "package": "libGenI",
          "signature": "Builder st it pa -\u003e BuilderState st ()",
          "type": "function"
        },
        "index": {
          "description": "Default implementation for the stepAll function in Builder",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AdefaultStepAll",
          "normalized": "Builder a b c-\u003eBuilderState a()",
          "package": "libGenI",
          "partial": "Adefault Step All",
          "signature": "Builder st it pa-\u003eBuilderState st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AdefaultStepAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "assign a bit vector value to each literal in the semantics\n the resulting map can then be used to construct a bit vector\n representation of the semantics\n",
          "module": "NLP.GenI.Builder",
          "name": "3AdefineSemanticBits",
          "package": "libGenI",
          "signature": "Sem -\u003e SemBitMap",
          "type": "function"
        },
        "index": {
          "description": "assign bit vector value to each literal in the semantics the resulting map can then be used to construct bit vector representation of the semantics",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AdefineSemanticBits",
          "normalized": "Sem-\u003eSemBitMap",
          "package": "libGenI",
          "partial": "Adefine Semantic Bits",
          "signature": "Sem-\u003eSemBitMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AdefineSemanticBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the literals of the semantics (in bit vector form)\n   whose accesibility depends on the given index\n",
          "module": "NLP.GenI.Builder",
          "name": "3AdependentSem",
          "package": "libGenI",
          "signature": "IafMap -\u003e String -\u003e Sem",
          "type": "function"
        },
        "index": {
          "description": "Return the literals of the semantics in bit vector form whose accesibility depends on the given index",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AdependentSem",
          "normalized": "IafMap-\u003eString-\u003eSem",
          "package": "libGenI",
          "partial": "Adependent Sem",
          "signature": "IafMap-\u003eString-\u003eSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AdependentSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Like fromGConst but only for the non-disjoint ones: meant to be used as Maybe or List\n",
          "module": "NLP.GenI.Builder",
          "name": "3AfromUniConst",
          "package": "libGenI",
          "signature": "GeniVal -\u003e m String",
          "type": "function"
        },
        "index": {
          "description": "Like fromGConst but only for the non-disjoint ones meant to be used as Maybe or List",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AfromUniConst",
          "normalized": "GeniVal-\u003ea String",
          "package": "libGenI",
          "partial": "Afrom Uni Const",
          "signature": "GeniVal-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AfromUniConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AgetIdx",
          "package": "libGenI",
          "signature": "Flist -\u003e [GeniVal]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AgetIdx",
          "normalized": "Flist-\u003e[GeniVal]",
          "package": "libGenI",
          "partial": "Aget Idx",
          "signature": "Flist-\u003e[GeniVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AgetIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AiafAcc",
          "package": "libGenI",
          "signature": "a -\u003e [String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AiafAcc",
          "normalized": "a-\u003e[String]",
          "package": "libGenI",
          "partial": "Aiaf Acc",
          "signature": "a-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AiafAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the input semantics\nthe semantics of the item\n",
          "module": "NLP.GenI.Builder",
          "name": "3AiafBadSem",
          "package": "libGenI",
          "signature": "IafMap-\u003e SemBitMap-\u003e BitVector-\u003e a -\u003e BitVector-\u003e a-\u003e BitVector",
          "type": "function"
        },
        "index": {
          "description": "the input semantics the semantics of the item",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AiafBadSem",
          "normalized": "IafMap-\u003eSemBitMap-\u003eBitVector-\u003ea-\u003eBitVector-\u003ea-\u003eBitVector",
          "package": "libGenI",
          "partial": "Aiaf Bad Sem",
          "signature": "IafMap-\u003eSemBitMap-\u003eBitVector-\u003ea-\u003eBitVector-\u003ea-\u003eBitVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AiafBadSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AiafInacc",
          "package": "libGenI",
          "signature": "a -\u003e [String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AiafInacc",
          "normalized": "a-\u003e[String]",
          "package": "libGenI",
          "partial": "Aiaf Inacc",
          "signature": "a-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AiafInacc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AiafNewAcc",
          "package": "libGenI",
          "signature": "a -\u003e [String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AiafNewAcc",
          "normalized": "a-\u003e[String]",
          "package": "libGenI",
          "partial": "Aiaf New Acc",
          "signature": "a-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AiafNewAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AiafSetAcc",
          "package": "libGenI",
          "signature": "[String] -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AiafSetAcc",
          "normalized": "[String]-\u003ea-\u003ea",
          "package": "libGenI",
          "partial": "Aiaf Set Acc",
          "signature": "[String]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AiafSetAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AiafSetInacc",
          "package": "libGenI",
          "signature": "[String] -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AiafSetInacc",
          "normalized": "[String]-\u003ea-\u003ea",
          "package": "libGenI",
          "partial": "Aiaf Set Inacc",
          "signature": "[String]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AiafSetInacc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AincrCounter",
          "package": "libGenI",
          "signature": "String -\u003e Int -\u003e BuilderState st ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AincrCounter",
          "normalized": "String-\u003eInt-\u003eBuilderState a()",
          "package": "libGenI",
          "partial": "Aincr Counter",
          "signature": "String-\u003eInt-\u003eBuilderState st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AincrCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AinitNullBuilder",
          "package": "libGenI",
          "signature": "Input -\u003e Params -\u003e ((), Statistics)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AinitNullBuilder",
          "normalized": "Input-\u003eParams-\u003e((),Statistics)",
          "package": "libGenI",
          "partial": "Ainit Null Builder",
          "signature": "Input-\u003eParams-\u003e((),Statistics)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AinitNullBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AinitStats",
          "package": "libGenI",
          "signature": "Params -\u003e Statistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AinitStats",
          "normalized": "Params-\u003eStatistics",
          "package": "libGenI",
          "partial": "Ainit Stats",
          "signature": "Params-\u003eStatistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AinitStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the handle and arguments of a literal\n",
          "module": "NLP.GenI.Builder",
          "name": "3AliteralArgs",
          "package": "libGenI",
          "signature": "Pred -\u003e [GeniVal]",
          "type": "function"
        },
        "index": {
          "description": "Return the handle and arguments of literal",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AliteralArgs",
          "normalized": "Pred-\u003e[GeniVal]",
          "package": "libGenI",
          "partial": "Aliteral Args",
          "signature": "Pred-\u003e[GeniVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AliteralArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AmodifyStats",
          "package": "libGenI",
          "signature": "(Metric -\u003e Metric) -\u003e BuilderState st ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AmodifyStats",
          "normalized": "(Metric-\u003eMetric)-\u003eBuilderState a()",
          "package": "libGenI",
          "partial": "Amodify Stats",
          "signature": "(Metric-\u003eMetric)-\u003eBuilderState st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AmodifyStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AnamedMetric",
          "package": "libGenI",
          "signature": "String -\u003e Metric",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AnamedMetric",
          "normalized": "String-\u003eMetric",
          "package": "libGenI",
          "partial": "Anamed Metric",
          "signature": "String-\u003eMetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AnamedMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AnullBuilder",
          "package": "libGenI",
          "signature": "Builder () (NullState ()) Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AnullBuilder",
          "normalized": "Builder()(NullState())Params",
          "package": "libGenI",
          "partial": "Anull Builder",
          "signature": "Builder()(NullState())Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AnullBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A filter that always fails (i.e. no filtering)\n",
          "module": "NLP.GenI.Builder",
          "name": "3AnullFilter",
          "package": "libGenI",
          "signature": "DispatchFilter s a",
          "type": "function"
        },
        "index": {
          "description": "filter that always fails i.e no filtering",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AnullFilter",
          "package": "libGenI",
          "partial": "Anull Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AnullFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3Anum_comparisons",
          "package": "libGenI",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3Anum_comparisons",
          "package": "libGenI",
          "partial": "Anum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3Anum_comparisons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3Anum_iterations",
          "package": "libGenI",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3Anum_iterations",
          "package": "libGenI",
          "partial": "Anum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3Anum_iterations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3ApreInit",
          "package": "libGenI",
          "signature": "Input -\u003e Params -\u003e (Input, (Int, Int, Int), PolResult)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3ApreInit",
          "normalized": "Input-\u003eParams-\u003e(Input,(Int,Int,Int),PolResult)",
          "package": "libGenI",
          "partial": "Apre Init",
          "signature": "Input-\u003eParams-\u003e(Input,(Int,Int,Int),PolResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3ApreInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AqueryCounter",
          "package": "libGenI",
          "signature": "String -\u003e Statistics -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AqueryCounter",
          "normalized": "String-\u003eStatistics-\u003eMaybe Int",
          "package": "libGenI",
          "partial": "Aquery Counter",
          "signature": "String-\u003eStatistics-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AqueryCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Calculate the new set of accessibility/inaccesible indices, returning a\n   a tuple of accesible / inaccesible indices\n",
          "module": "NLP.GenI.Builder",
          "name": "3ArecalculateAccesibility",
          "package": "libGenI",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Calculate the new set of accessibility inaccesible indices returning tuple of accesible inaccesible indices",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3ArecalculateAccesibility",
          "normalized": "a-\u003ea",
          "package": "libGenI",
          "partial": "Arecalculate Accesibility",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3ArecalculateAccesibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Performs surface realisation from an input semantics and a lexical selection.\n",
          "module": "NLP.GenI.Builder",
          "name": "3Arun",
          "package": "libGenI",
          "signature": "Builder st it Params -\u003e Input -\u003e Params -\u003e (st, Statistics)",
          "type": "function"
        },
        "index": {
          "description": "Performs surface realisation from an input semantics and lexical selection",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3Arun",
          "normalized": "Builder a b Params-\u003eInput-\u003eParams-\u003e(a,Statistics)",
          "package": "libGenI",
          "partial": "Arun",
          "signature": "Builder st it Params-\u003eInput-\u003eParams-\u003e(st,Statistics)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3Arun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AsemToBitVector",
          "package": "libGenI",
          "signature": "SemBitMap -\u003e Sem -\u003e BitVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AsemToBitVector",
          "normalized": "SemBitMap-\u003eSem-\u003eBitVector",
          "package": "libGenI",
          "partial": "Asem To Bit Vector",
          "signature": "SemBitMap-\u003eSem-\u003eBitVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AsemToBitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3AsemToIafMap",
          "package": "libGenI",
          "signature": "Sem -\u003e IafMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AsemToIafMap",
          "normalized": "Sem-\u003eIafMap",
          "package": "libGenI",
          "partial": "Asem To Iaf Map",
          "signature": "Sem-\u003eIafMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AsemToIafMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Builder",
          "name": "3Ats_iafFailure",
          "package": "libGenI",
          "signature": "[String] -\u003e [Pred] -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3Ats_iafFailure",
          "normalized": "[String]-\u003e[Pred]-\u003eString",
          "package": "libGenI",
          "partial": "Ats Failure",
          "signature": "[String]-\u003e[Pred]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3Ats_iafFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Equivalent to \u003ctt\u003e\u003ca\u003eid\u003c/a\u003e\u003c/tt\u003e unless the input contains an empty or uninstatiated\n   semantics\n",
          "module": "NLP.GenI.Builder",
          "name": "3AunlessEmptySem",
          "package": "libGenI",
          "signature": "Input -\u003e Params -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to id unless the input contains an empty or uninstatiated semantics",
          "hierarchy": "NLP GenI Builder",
          "module": "NLP.GenI.Builder",
          "name": "3AunlessEmptySem",
          "normalized": "Input-\u003eParams-\u003ea-\u003ea",
          "package": "libGenI",
          "partial": "Aunless Empty Sem",
          "signature": "Input-\u003eParams-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Builder.html#v:3AunlessEmptySem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AChartId",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AChartId",
          "package": "libGenI",
          "partial": "AChart Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#t:3AChartId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3ACkyItem",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3ACkyItem",
          "package": "libGenI",
          "partial": "ACky Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#t:3ACkyItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3ACkyStatus",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3ACkyStatus",
          "package": "libGenI",
          "partial": "ACky Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#t:3ACkyStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AciAdjDone",
          "package": "libGenI",
          "signature": "CkyItem -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AciAdjDone",
          "normalized": "CkyItem-\u003eBool",
          "package": "libGenI",
          "partial": "Aci Adj Done",
          "signature": "CkyItem-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AciAdjDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AciRoot",
          "package": "libGenI",
          "signature": "CkyItem -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AciRoot",
          "normalized": "CkyItem-\u003eBool",
          "package": "libGenI",
          "partial": "Aci Root",
          "signature": "CkyItem-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AciRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AckyBuilder",
          "package": "libGenI",
          "signature": "CkyBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AckyBuilder",
          "package": "libGenI",
          "partial": "Acky Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AckyBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AearleyBuilder",
          "package": "libGenI",
          "signature": "CkyBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AearleyBuilder",
          "package": "libGenI",
          "partial": "Aearley Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AearleyBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AemptySentenceAut",
          "package": "libGenI",
          "signature": "SentenceAut",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AemptySentenceAut",
          "package": "libGenI",
          "partial": "Aempty Sentence Aut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AemptySentenceAut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns all the derivations trees for this item: note that this is\n not a TAG derivation tree but a history of inference rule applications\n in tree form\n",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AextractDerivations",
          "package": "libGenI",
          "signature": "CkyStatus -\u003e CkyItem -\u003e [Tree (ChartId, String)]",
          "type": "function"
        },
        "index": {
          "description": "Returns all the derivations trees for this item note that this is not TAG derivation tree but history of inference rule applications in tree form",
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AextractDerivations",
          "normalized": "CkyStatus-\u003eCkyItem-\u003e[Tree(ChartId,String)]",
          "package": "libGenI",
          "partial": "Aextract Derivations",
          "signature": "CkyStatus-\u003eCkyItem-\u003e[Tree(ChartId,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AextractDerivations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AfindId",
          "package": "libGenI",
          "signature": "CkyStatus -\u003e ChartId -\u003e Maybe CkyItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AfindId",
          "normalized": "CkyStatus-\u003eChartId-\u003eMaybe CkyItem",
          "package": "libGenI",
          "partial": "Afind Id",
          "signature": "CkyStatus-\u003eChartId-\u003eMaybe CkyItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AfindId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AmAutomatonPaths",
          "package": "libGenI",
          "signature": "Maybe (NFA st ab) -\u003e [[ab]]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AmAutomatonPaths",
          "normalized": "Maybe(NFA a b)-\u003e[[b]]",
          "package": "libGenI",
          "partial": "Am Automaton Paths",
          "signature": "Maybe(NFA st ab)-\u003e[[ab]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AmAutomatonPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AmJoinAutomata",
          "package": "libGenI",
          "signature": "Maybe SentenceAut -\u003e Maybe SentenceAut -\u003e Maybe SentenceAut",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AmJoinAutomata",
          "normalized": "Maybe SentenceAut-\u003eMaybe SentenceAut-\u003eMaybe SentenceAut",
          "package": "libGenI",
          "partial": "Am Join Automata",
          "signature": "Maybe SentenceAut-\u003eMaybe SentenceAut-\u003eMaybe SentenceAut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AmJoinAutomata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AunpackItemToAuts",
          "package": "libGenI",
          "signature": "CkyStatus -\u003e CkyItem -\u003e SentenceAutPairMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI CkyEarley CkyBuilder",
          "module": "NLP.GenI.CkyEarley.CkyBuilder",
          "name": "3AunpackItemToAuts",
          "normalized": "CkyStatus-\u003eCkyItem-\u003eSentenceAutPairMaybe",
          "package": "libGenI",
          "partial": "Aunpack Item To Auts",
          "signature": "CkyStatus-\u003eCkyItem-\u003eSentenceAutPairMaybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-CkyEarley-CkyBuilder.html#v:3AunpackItemToAuts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ABatchDirFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ABatchDirFlg",
          "package": "libGenI",
          "partial": "ABatch Dir Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ABatchDirFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ABuilderType",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ABuilderType",
          "package": "libGenI",
          "partial": "ABuilder Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ABuilderType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ADisableGuiFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ADisableGuiFlg",
          "package": "libGenI",
          "partial": "ADisable Gui Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ADisableGuiFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AEarlyDeathFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AEarlyDeathFlg",
          "package": "libGenI",
          "partial": "AEarly Death Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AEarlyDeathFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AExtraPolaritiesFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AExtraPolaritiesFlg",
          "package": "libGenI",
          "partial": "AExtra Polarities Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AExtraPolaritiesFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AFlag",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AFlag",
          "package": "libGenI",
          "partial": "AFlag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AFromStdinFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AFromStdinFlg",
          "package": "libGenI",
          "partial": "AFrom Stdin Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AFromStdinFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AGrammarType",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AGrammarType",
          "package": "libGenI",
          "partial": "AGrammar Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AGrammarType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AHelpFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AHelpFlg",
          "package": "libGenI",
          "partial": "AHelp Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AHelpFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AIgnoreSemanticsFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AIgnoreSemanticsFlg",
          "package": "libGenI",
          "partial": "AIgnore Semantics Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AIgnoreSemanticsFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AInstruction",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AInstruction",
          "package": "libGenI",
          "partial": "AInstruction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AInstructionsFileFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AInstructionsFileFlg",
          "package": "libGenI",
          "partial": "AInstructions File Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AInstructionsFileFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ALexiconFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ALexiconFlg",
          "package": "libGenI",
          "partial": "ALexicon Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ALexiconFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AMacrosFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AMacrosFlg",
          "package": "libGenI",
          "partial": "AMacros Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AMacrosFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AMaxTreesFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AMaxTreesFlg",
          "package": "libGenI",
          "partial": "AMax Trees Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AMaxTreesFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AMetricsFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AMetricsFlg",
          "package": "libGenI",
          "partial": "AMetrics Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AMetricsFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AMorphCmdFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AMorphCmdFlg",
          "package": "libGenI",
          "partial": "AMorph Cmd Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AMorphCmdFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AMorphInfoFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AMorphInfoFlg",
          "package": "libGenI",
          "partial": "AMorph Info Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AMorphInfoFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AMorphLexiconFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AMorphLexiconFlg",
          "package": "libGenI",
          "partial": "AMorph Lexicon Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AMorphLexiconFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ANoLoadTestSuiteFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ANoLoadTestSuiteFlg",
          "package": "libGenI",
          "partial": "ANo Load Test Suite Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ANoLoadTestSuiteFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AOptimisation",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AOptimisation",
          "package": "libGenI",
          "partial": "AOptimisation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AOptimisation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AOptimisationsFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AOptimisationsFlg",
          "package": "libGenI",
          "partial": "AOptimisations Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AOptimisationsFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AOutputFileFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AOutputFileFlg",
          "package": "libGenI",
          "partial": "AOutput File Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AOutputFileFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AParams",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AParams",
          "package": "libGenI",
          "partial": "AParams",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3APartialFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3APartialFlg",
          "package": "libGenI",
          "partial": "APartial Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3APartialFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ARegressionTestModeFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ARegressionTestModeFlg",
          "package": "libGenI",
          "partial": "ARegression Test Mode Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ARegressionTestModeFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ARootFeatureFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ARootFeatureFlg",
          "package": "libGenI",
          "partial": "ARoot Feature Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ARootFeatureFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AStatsFileFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AStatsFileFlg",
          "package": "libGenI",
          "partial": "AStats File Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AStatsFileFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ATestCaseFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ATestCaseFlg",
          "package": "libGenI",
          "partial": "ATest Case Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ATestCaseFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ATestInstructionsFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ATestInstructionsFlg",
          "package": "libGenI",
          "partial": "ATest Instructions Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ATestInstructionsFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ATestSuiteFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ATestSuiteFlg",
          "package": "libGenI",
          "partial": "ATest Suite Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ATestSuiteFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ATimeoutFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ATimeoutFlg",
          "package": "libGenI",
          "partial": "ATimeout Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ATimeoutFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3ATracesFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3ATracesFlg",
          "package": "libGenI",
          "partial": "ATraces Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3ATracesFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AVerboseModeFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AVerboseModeFlg",
          "package": "libGenI",
          "partial": "AVerbose Mode Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AVerboseModeFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AViewCmdFlg",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AViewCmdFlg",
          "package": "libGenI",
          "partial": "AView Cmd Flg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#t:3AViewCmdFlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AdefineParams",
          "package": "libGenI",
          "signature": "[Flag] -\u003e Params -\u003e Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AdefineParams",
          "normalized": "[Flag]-\u003eParams-\u003eParams",
          "package": "libGenI",
          "partial": "Adefine Params",
          "signature": "[Flag]-\u003eParams-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AdefineParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AdeleteFlagP",
          "package": "libGenI",
          "signature": "(x -\u003e f) -\u003e Params -\u003e Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AdeleteFlagP",
          "normalized": "(a-\u003eb)-\u003eParams-\u003eParams",
          "package": "libGenI",
          "partial": "Adelete Flag",
          "signature": "(x-\u003ef)-\u003eParams-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AdeleteFlagP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The default parameters configuration\n",
          "module": "NLP.GenI.Configuration",
          "name": "3AemptyParams",
          "package": "libGenI",
          "signature": "Params",
          "type": "function"
        },
        "index": {
          "description": "The default parameters configuration",
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AemptyParams",
          "package": "libGenI",
          "partial": "Aempty Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AemptyParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AgetFlag",
          "package": "libGenI",
          "signature": "(x -\u003e f) -\u003e [Flag] -\u003e Maybe x",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AgetFlag",
          "normalized": "(a-\u003eb)-\u003e[Flag]-\u003eMaybe a",
          "package": "libGenI",
          "partial": "Aget Flag",
          "signature": "(x-\u003ef)-\u003e[Flag]-\u003eMaybe x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AgetFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AgetFlagP",
          "package": "libGenI",
          "signature": "(x -\u003e f) -\u003e Params -\u003e Maybe x",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AgetFlagP",
          "normalized": "(a-\u003eb)-\u003eParams-\u003eMaybe a",
          "package": "libGenI",
          "partial": "Aget Flag",
          "signature": "(x-\u003ef)-\u003eParams-\u003eMaybe x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AgetFlagP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AgetListFlagP",
          "package": "libGenI",
          "signature": "([x] -\u003e f) -\u003e Params -\u003e [x]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AgetListFlagP",
          "normalized": "([a]-\u003eb)-\u003eParams-\u003e[a]",
          "package": "libGenI",
          "partial": "Aget List Flag",
          "signature": "([x]-\u003ef)-\u003eParams-\u003e[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AgetListFlagP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AhasFlag",
          "package": "libGenI",
          "signature": "(x -\u003e f) -\u003e [Flag] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AhasFlag",
          "normalized": "(a-\u003eb)-\u003e[Flag]-\u003eBool",
          "package": "libGenI",
          "partial": "Ahas Flag",
          "signature": "(x-\u003ef)-\u003e[Flag]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AhasFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AhasFlagP",
          "package": "libGenI",
          "signature": "(x -\u003e f) -\u003e Params -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AhasFlagP",
          "normalized": "(a-\u003eb)-\u003eParams-\u003eBool",
          "package": "libGenI",
          "partial": "Ahas Flag",
          "signature": "(x-\u003ef)-\u003eParams-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AhasFlagP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AhasOpt",
          "package": "libGenI",
          "signature": "Optimisation -\u003e Params -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AhasOpt",
          "normalized": "Optimisation-\u003eParams-\u003eBool",
          "package": "libGenI",
          "partial": "Ahas Opt",
          "signature": "Optimisation-\u003eParams-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AhasOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AisIaf",
          "package": "libGenI",
          "signature": "Params -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AisIaf",
          "normalized": "Params-\u003eBool",
          "package": "libGenI",
          "partial": "Ais Iaf",
          "signature": "Params-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AisIaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AmainBuilderTypes",
          "package": "libGenI",
          "signature": "[BuilderType]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AmainBuilderTypes",
          "normalized": "[BuilderType]",
          "package": "libGenI",
          "partial": "Amain Builder Types",
          "signature": "[BuilderType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AmainBuilderTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AnoArg",
          "package": "libGenI",
          "signature": "(() -\u003e f) -\u003e ArgDescr Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AnoArg",
          "normalized": "(()-\u003ea)-\u003eArgDescr Flag",
          "package": "libGenI",
          "partial": "Ano Arg",
          "signature": "(()-\u003ef)-\u003eArgDescr Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AnoArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AnubBySwitches",
          "package": "libGenI",
          "signature": "[OptDescr a] -\u003e [OptDescr a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AnubBySwitches",
          "normalized": "[OptDescr a]-\u003e[OptDescr a]",
          "package": "libGenI",
          "partial": "Anub By Switches",
          "signature": "[OptDescr a]-\u003e[OptDescr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AnubBySwitches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "flag\ndefault value\nstring reader (as in \u003ctt\u003ereqArg\u003c/tt\u003e)\ndescription\n",
          "module": "NLP.GenI.Configuration",
          "name": "3AoptArg",
          "package": "libGenI",
          "signature": "x -\u003e f-\u003e x-\u003e String -\u003e x-\u003e String-\u003e ArgDescr Flag",
          "type": "function"
        },
        "index": {
          "description": "flag default value string reader as in reqArg description",
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AoptArg",
          "normalized": "a-\u003eb-\u003ea-\u003eString-\u003ea-\u003eString-\u003eArgDescr Flag",
          "package": "libGenI",
          "partial": "Aopt Arg",
          "signature": "x-\u003ef-\u003ex-\u003eString-\u003ex-\u003eString-\u003eArgDescr Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AoptArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForBasicStuff",
          "package": "libGenI",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForBasicStuff",
          "normalized": "[OptDescr Flag]",
          "package": "libGenI",
          "partial": "Aoptions For Basic Stuff",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AoptionsForBasicStuff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForBuilder",
          "package": "libGenI",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForBuilder",
          "normalized": "[OptDescr Flag]",
          "package": "libGenI",
          "partial": "Aoptions For Builder",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AoptionsForBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForInputFiles",
          "package": "libGenI",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForInputFiles",
          "normalized": "[OptDescr Flag]",
          "package": "libGenI",
          "partial": "Aoptions For Input Files",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AoptionsForInputFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForMorphology",
          "package": "libGenI",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForMorphology",
          "normalized": "[OptDescr Flag]",
          "package": "libGenI",
          "partial": "Aoptions For Morphology",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AoptionsForMorphology"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForOptimisation",
          "package": "libGenI",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForOptimisation",
          "normalized": "[OptDescr Flag]",
          "package": "libGenI",
          "partial": "Aoptions For Optimisation",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AoptionsForOptimisation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForStandardGenI",
          "package": "libGenI",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForStandardGenI",
          "normalized": "[OptDescr Flag]",
          "package": "libGenI",
          "partial": "Aoptions For Standard Gen",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AoptionsForStandardGenI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForTesting",
          "package": "libGenI",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AoptionsForTesting",
          "normalized": "[OptDescr Flag]",
          "package": "libGenI",
          "partial": "Aoptions For Testing",
          "signature": "[OptDescr Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AoptionsForTesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AparseFlagWithParsec",
          "package": "libGenI",
          "signature": "String -\u003e CharParser () b -\u003e String -\u003e b",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AparseFlagWithParsec",
          "normalized": "String-\u003eCharParser()a-\u003eString-\u003ea",
          "package": "libGenI",
          "partial": "Aparse Flag With Parsec",
          "signature": "String-\u003eCharParser()b-\u003eString-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AparseFlagWithParsec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3Apolarised",
          "package": "libGenI",
          "signature": "Params -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3Apolarised",
          "normalized": "Params-\u003eBool",
          "package": "libGenI",
          "partial": "Apolarised",
          "signature": "Params-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3Apolarised"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AprocessInstructions",
          "package": "libGenI",
          "signature": "Params -\u003e IO Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AprocessInstructions",
          "normalized": "Params-\u003eIO Params",
          "package": "libGenI",
          "partial": "Aprocess Instructions",
          "signature": "Params-\u003eIO Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AprocessInstructions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "flag\nstring reader for flag (probably |id| if already a String)\ndescription\n",
          "module": "NLP.GenI.Configuration",
          "name": "3AreqArg",
          "package": "libGenI",
          "signature": "x -\u003e f-\u003e String -\u003e x-\u003e String-\u003e ArgDescr Flag",
          "type": "function"
        },
        "index": {
          "description": "flag string reader for flag probably id if already String description",
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AreqArg",
          "normalized": "a-\u003eb-\u003eString-\u003ea-\u003eString-\u003eArgDescr Flag",
          "package": "libGenI",
          "partial": "Areq Arg",
          "signature": "x-\u003ef-\u003eString-\u003ex-\u003eString-\u003eArgDescr Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AreqArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3Arootcatfiltered",
          "package": "libGenI",
          "signature": "Params -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3Arootcatfiltered",
          "normalized": "Params-\u003eBool",
          "package": "libGenI",
          "partial": "Arootcatfiltered",
          "signature": "Params-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3Arootcatfiltered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3Asemfiltered",
          "package": "libGenI",
          "signature": "Params -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3Asemfiltered",
          "normalized": "Params-\u003eBool",
          "package": "libGenI",
          "partial": "Asemfiltered",
          "signature": "Params-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3Asemfiltered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AsetFlag",
          "package": "libGenI",
          "signature": "(x -\u003e f) -\u003e x -\u003e [Flag] -\u003e [Flag]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AsetFlag",
          "normalized": "(a-\u003eb)-\u003ea-\u003e[Flag]-\u003e[Flag]",
          "package": "libGenI",
          "partial": "Aset Flag",
          "signature": "(x-\u003ef)-\u003ex-\u003e[Flag]-\u003e[Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AsetFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AsetFlagP",
          "package": "libGenI",
          "signature": "(x -\u003e f) -\u003e x -\u003e Params -\u003e Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AsetFlagP",
          "normalized": "(a-\u003eb)-\u003ea-\u003eParams-\u003eParams",
          "package": "libGenI",
          "partial": "Aset Flag",
          "signature": "(x-\u003ef)-\u003ex-\u003eParams-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AsetFlagP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AtreatArgs",
          "package": "libGenI",
          "signature": "[OptDescr Flag] -\u003e [String] -\u003e IO Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AtreatArgs",
          "normalized": "[OptDescr Flag]-\u003e[String]-\u003eIO Params",
          "package": "libGenI",
          "partial": "Atreat Args",
          "signature": "[OptDescr Flag]-\u003e[String]-\u003eIO Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AtreatArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AtreatArgsWithParams",
          "package": "libGenI",
          "signature": "[OptDescr Flag] -\u003e [String] -\u003e Params -\u003e IO Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AtreatArgsWithParams",
          "normalized": "[OptDescr Flag]-\u003e[String]-\u003eParams-\u003eIO Params",
          "package": "libGenI",
          "partial": "Atreat Args With Params",
          "signature": "[OptDescr Flag]-\u003e[String]-\u003eParams-\u003eIO Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AtreatArgsWithParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AtreatStandardArgs",
          "package": "libGenI",
          "signature": "[String] -\u003e IO Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AtreatStandardArgs",
          "normalized": "[String]-\u003eIO Params",
          "package": "libGenI",
          "partial": "Atreat Standard Args",
          "signature": "[String]-\u003eIO Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AtreatStandardArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Configuration",
          "name": "3AtreatStandardArgsWithParams",
          "package": "libGenI",
          "signature": "[String] -\u003e Params -\u003e IO Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Configuration",
          "module": "NLP.GenI.Configuration",
          "name": "3AtreatStandardArgsWithParams",
          "normalized": "[String]-\u003eParams-\u003eIO Params",
          "package": "libGenI",
          "partial": "Atreat Standard Args With Params",
          "signature": "[String]-\u003eParams-\u003eIO Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Configuration.html#v:3AtreatStandardArgsWithParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AAlphaNum",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AAlphaNum",
          "package": "libGenI",
          "partial": "AAlpha Num",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#t:3AAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3ABitVector",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3ABitVector",
          "package": "libGenI",
          "partial": "ABit Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#t:3ABitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AInterval",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AInterval",
          "package": "libGenI",
          "partial": "AInterval",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#t:3AInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3ATimeOut",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3ATimeOut",
          "package": "libGenI",
          "partial": "ATime Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#t:3ATimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3A!+!",
          "package": "libGenI",
          "signature": "Interval -\u003e Interval -\u003e Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3A!+!",
          "normalized": "Interval-\u003eInterval-\u003eInterval",
          "package": "libGenI",
          "signature": "Interval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3A!+!"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3A///",
          "package": "libGenI",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3A///",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "libGenI",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3A///"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Abasename",
          "package": "libGenI",
          "signature": "FilePath -\u003e FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Abasename",
          "normalized": "FilePath-\u003eFilePath",
          "package": "libGenI",
          "partial": "Abasename",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Abasename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Makes sure that index s is in the bounds of list l.  \n   Surely there must be some more intelligent way to deal with this.\n",
          "module": "NLP.GenI.General",
          "name": "3AboundsCheck",
          "package": "libGenI",
          "signature": "Int -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Makes sure that index is in the bounds of list Surely there must be some more intelligent way to deal with this",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AboundsCheck",
          "normalized": "Int-\u003e[a]-\u003eBool",
          "package": "libGenI",
          "partial": "Abounds Check",
          "signature": "Int-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AboundsCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Abuf_size",
          "package": "libGenI",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Abuf_size",
          "package": "libGenI",
          "partial": "Abuf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Abuf_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Acombinations",
          "package": "libGenI",
          "signature": "[[a]] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Acombinations",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "libGenI",
          "partial": "Acombinations",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Acombinations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Acomparing",
          "package": "libGenI",
          "signature": "(a -\u003e b) -\u003e (a -\u003e a -\u003e Ordering)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Acomparing",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ea-\u003eOrdering)",
          "package": "libGenI",
          "partial": "Acomparing",
          "signature": "(a-\u003eb)-\u003e(a-\u003ea-\u003eOrdering)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Acomparing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Drop all characters up to and including the one in question\n",
          "module": "NLP.GenI.General",
          "name": "3AdropTillIncluding",
          "package": "libGenI",
          "signature": "Char -\u003e String -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Drop all characters up to and including the one in question",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AdropTillIncluding",
          "normalized": "Char-\u003eString-\u003eString",
          "package": "libGenI",
          "partial": "Adrop Till Including",
          "signature": "Char-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AdropTillIncluding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AeFlush",
          "package": "libGenI",
          "signature": "IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AeFlush",
          "normalized": "IO()",
          "package": "libGenI",
          "partial": "Ae Flush",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AeFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AePutStr",
          "package": "libGenI",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AePutStr",
          "normalized": "String-\u003eIO()",
          "package": "libGenI",
          "partial": "Ae Put Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AePutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AePutStrLn",
          "package": "libGenI",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AePutStrLn",
          "normalized": "String-\u003eIO()",
          "package": "libGenI",
          "partial": "Ae Put Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AePutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Aequating",
          "package": "libGenI",
          "signature": "(a -\u003e b) -\u003e (a -\u003e a -\u003e Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Aequating",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ea-\u003eBool)",
          "package": "libGenI",
          "partial": "Aequating",
          "signature": "(a-\u003eb)-\u003e(a-\u003ea-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Aequating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Like exitFailure, except that we return with a code that we reserve for timing out\n",
          "module": "NLP.GenI.General",
          "name": "3AexitTimeout",
          "package": "libGenI",
          "signature": "IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like exitFailure except that we return with code that we reserve for timing out",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AexitTimeout",
          "normalized": "IO()",
          "package": "libGenI",
          "partial": "Aexit Timeout",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AexitTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AfilterTree",
          "package": "libGenI",
          "signature": "(a -\u003e Bool) -\u003e Tree a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AfilterTree",
          "normalized": "(a-\u003eBool)-\u003eTree a-\u003e[a]",
          "package": "libGenI",
          "partial": "Afilter Tree",
          "signature": "(a-\u003eBool)-\u003eTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AfilterTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Afst3",
          "package": "libGenI",
          "signature": "(a, b, c) -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Afst3",
          "normalized": "(a,b,c)-\u003ea",
          "package": "libGenI",
          "partial": "Afst",
          "signature": "(a,b,c)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Afst3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "errors specifically in GenI, which is very likely NOT the user's fault.\n",
          "module": "NLP.GenI.General",
          "name": "3AgeniBug",
          "package": "libGenI",
          "signature": "String -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "errors specifically in GenI which is very likely NOT the user fault",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AgeniBug",
          "normalized": "String-\u003ea",
          "package": "libGenI",
          "partial": "Ageni Bug",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AgeniBug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"NLP.GenI.General\",\"NLP.GenI.Geni\"]",
          "name": "3AgroupAndCount",
          "package": "libGenI",
          "signature": "[a] -\u003e [(a, Int)]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AgroupAndCount\",\"http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AgroupAndCount\"]"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AgroupAndCount",
          "normalized": "[a]-\u003e[(a,Int)]",
          "package": "libGenI",
          "partial": "Agroup And Count",
          "signature": "[a]-\u003e[(a,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AgroupAndCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Serves the same function as \u003ctt\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/tt\u003e.  It groups together\n   items by some property they have in common. The difference is that the\n   property is used as a key to a Map that you can lookup.\n",
          "module": "NLP.GenI.General",
          "name": "3AgroupByFM",
          "package": "libGenI",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e (Map b [a])",
          "type": "function"
        },
        "index": {
          "description": "Serves the same function as groupBy It groups together items by some property they have in common The difference is that the property is used as key to Map that you can lookup",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AgroupByFM",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e(Map b[a])",
          "package": "libGenI",
          "partial": "Agroup By FM",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e(Map b[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AgroupByFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AinsertToListMap",
          "package": "libGenI",
          "signature": "b -\u003e a -\u003e Map b [a] -\u003e Map b [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AinsertToListMap",
          "normalized": "a-\u003eb-\u003eMap a[b]-\u003eMap a[b]",
          "package": "libGenI",
          "partial": "Ainsert To List Map",
          "signature": "b-\u003ea-\u003eMap b[a]-\u003eMap b[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AinsertToListMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AisEmptyIntersect",
          "package": "libGenI",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AisEmptyIntersect",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "libGenI",
          "partial": "Ais Empty Intersect",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AisEmptyIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AisNumber",
          "package": "libGenI",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AisNumber",
          "normalized": "Char-\u003eBool",
          "package": "libGenI",
          "partial": "Ais Number",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AisNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Aival",
          "package": "libGenI",
          "signature": "Int -\u003e Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Aival",
          "normalized": "Int-\u003eInterval",
          "package": "libGenI",
          "partial": "Aival",
          "signature": "Int-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Aival"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AlazySlurp",
          "package": "libGenI",
          "signature": "ForeignPtr Word8 -\u003e Int -\u003e Int -\u003e IO String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AlazySlurp",
          "normalized": "ForeignPtr Word-\u003eInt-\u003eInt-\u003eIO String",
          "package": "libGenI",
          "partial": "Alazy Slurp",
          "signature": "ForeignPtr Word-\u003eInt-\u003eInt-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AlazySlurp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AlistRepNode",
          "package": "libGenI",
          "signature": "(Tree a -\u003e Tree a) -\u003e (Tree a -\u003e Bool) -\u003e [Tree a] -\u003e ([Tree a], Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AlistRepNode",
          "normalized": "(Tree a-\u003eTree a)-\u003e(Tree a-\u003eBool)-\u003e[Tree a]-\u003e([Tree a],Bool)",
          "package": "libGenI",
          "partial": "Alist Rep Node",
          "signature": "(Tree a-\u003eTree a)-\u003e(Tree a-\u003eBool)-\u003e[Tree a]-\u003e([Tree a],Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AlistRepNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A strict version of \u003ctt\u003e\u003ca\u003emap\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "NLP.GenI.General",
          "name": "3Amap'",
          "package": "libGenI",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "strict version of map",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Amap'",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "libGenI",
          "partial": "Amap'",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Amap'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AmapMaybeM",
          "package": "libGenI",
          "signature": "(a -\u003e m (Maybe b)) -\u003e [a] -\u003e m [b]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AmapMaybeM",
          "normalized": "(a-\u003eb(Maybe c))-\u003e[a]-\u003eb[c]",
          "package": "libGenI",
          "partial": "Amap Maybe",
          "signature": "(a-\u003em(Maybe b))-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AmapMaybeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Strict version of mapTree (for non-strict, just use fmap)\n",
          "module": "NLP.GenI.General",
          "name": "3AmapTree'",
          "package": "libGenI",
          "signature": "(a -\u003e b) -\u003e Tree a -\u003e Tree b",
          "type": "function"
        },
        "index": {
          "description": "Strict version of mapTree for non-strict just use fmap",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AmapTree'",
          "normalized": "(a-\u003eb)-\u003eTree a-\u003eTree b",
          "package": "libGenI",
          "partial": "Amap Tree'",
          "signature": "(a-\u003eb)-\u003eTree a-\u003eTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AmapTree'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Same as \u003ctt\u003e\u003ca\u003egroupByFM\u003c/a\u003e\u003c/tt\u003e, except that we let an item appear in\n   multiple groups.  The fn extracts the property from the item,\n   and returns multiple results in the form of a list\n",
          "module": "NLP.GenI.General",
          "name": "3AmultiGroupByFM",
          "package": "libGenI",
          "signature": "(a -\u003e [b]) -\u003e [a] -\u003e (Map b [a])",
          "type": "function"
        },
        "index": {
          "description": "Same as groupByFM except that we let an item appear in multiple groups The fn extracts the property from the item and returns multiple results in the form of list",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AmultiGroupByFM",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003e(Map b[a])",
          "package": "libGenI",
          "partial": "Amulti Group By FM",
          "signature": "(a-\u003e[b])-\u003e[a]-\u003e(Map b[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AmultiGroupByFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return pairs of (parent, terminal)\n",
          "module": "NLP.GenI.General",
          "name": "3ApreTerminals",
          "package": "libGenI",
          "signature": "Tree a -\u003e [(a, a)]",
          "type": "function"
        },
        "index": {
          "description": "Return pairs of parent terminal",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3ApreTerminals",
          "normalized": "Tree a-\u003e[(a,a)]",
          "package": "libGenI",
          "partial": "Apre Terminals",
          "signature": "Tree a-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3ApreTerminals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AreadFile'",
          "package": "libGenI",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AreadFile'",
          "normalized": "FilePath-\u003eIO String",
          "package": "libGenI",
          "partial": "Aread File'",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AreadFile'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Like \u003ctt\u003e\u003ca\u003erepNode\u003c/a\u003e\u003c/tt\u003e except that it performs the operations on\n   all nodes that match and doesn't care if any nodes match\n   or not\n",
          "module": "NLP.GenI.General",
          "name": "3ArepAllNode",
          "package": "libGenI",
          "signature": "(Tree a -\u003e Tree a) -\u003e (Tree a -\u003e Bool) -\u003e Tree a -\u003e Tree a",
          "type": "function"
        },
        "index": {
          "description": "Like repNode except that it performs the operations on all nodes that match and doesn care if any nodes match or not",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3ArepAllNode",
          "normalized": "(Tree a-\u003eTree a)-\u003e(Tree a-\u003eBool)-\u003eTree a-\u003eTree a",
          "package": "libGenI",
          "partial": "Arep All Node",
          "signature": "(Tree a-\u003eTree a)-\u003e(Tree a-\u003eBool)-\u003eTree a-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3ArepAllNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the list, modifying only the first matching item.\n",
          "module": "NLP.GenI.General",
          "name": "3ArepList",
          "package": "libGenI",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Return the list modifying only the first matching item",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3ArepList",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "libGenI",
          "partial": "Arep List",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3ArepList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3ArepNode",
          "package": "libGenI",
          "signature": "(Tree a -\u003e Tree a) -\u003e (Tree a -\u003e Bool) -\u003e Tree a -\u003e Maybe (Tree a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3ArepNode",
          "normalized": "(Tree a-\u003eTree a)-\u003e(Tree a-\u003eBool)-\u003eTree a-\u003eMaybe(Tree a)",
          "package": "libGenI",
          "partial": "Arep Node",
          "signature": "(Tree a-\u003eTree a)-\u003e(Tree a-\u003eBool)-\u003eTree a-\u003eMaybe(Tree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3ArepNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "which node?\n",
          "module": "NLP.GenI.General",
          "name": "3ArepNodeByNode",
          "package": "libGenI",
          "signature": "a -\u003e Bool-\u003e a-\u003e Tree a-\u003e Tree a",
          "type": "function"
        },
        "index": {
          "description": "which node",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3ArepNodeByNode",
          "normalized": "a-\u003eBool-\u003ea-\u003eTree a-\u003eTree a",
          "package": "libGenI",
          "partial": "Arep Node By Node",
          "signature": "a-\u003eBool-\u003ea-\u003eTree a-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3ArepNodeByNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "displays a bit vector, using a minimum number of bits\n",
          "module": "NLP.GenI.General",
          "name": "3AshowBitVector",
          "package": "libGenI",
          "signature": "Int -\u003e BitVector -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "displays bit vector using minimum number of bits",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AshowBitVector",
          "normalized": "Int-\u003eBitVector-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Bit Vector",
          "signature": "Int-\u003eBitVector-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AshowBitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AshowInterval",
          "package": "libGenI",
          "signature": "Interval -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AshowInterval",
          "normalized": "Interval-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Interval",
          "signature": "Interval-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AshowInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AshowTable",
          "package": "libGenI",
          "signature": "[String] -\u003e [a] -\u003e (a -\u003e [String]) -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AshowTable",
          "normalized": "[String]-\u003e[a]-\u003e(a-\u003e[String])-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Table",
          "signature": "[String]-\u003e[a]-\u003e(a-\u003e[String])-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AshowTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Asnd3",
          "package": "libGenI",
          "signature": "(a, b, c) -\u003e b",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Asnd3",
          "normalized": "(a,b,c)-\u003eb",
          "package": "libGenI",
          "partial": "Asnd",
          "signature": "(a,b,c)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Asnd3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A forgiving version of tail : if you give it the empty list, it returns the empty list\n",
          "module": "NLP.GenI.General",
          "name": "3Atail_",
          "package": "libGenI",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "forgiving version of tail if you give it the empty list it returns the empty list",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Atail_",
          "normalized": "[a]-\u003e[a]",
          "package": "libGenI",
          "partial": "Atail",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Atail_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Athd3",
          "package": "libGenI",
          "signature": "(a, b, c) -\u003e c",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Athd3",
          "normalized": "(a,b,c)-\u003ec",
          "package": "libGenI",
          "partial": "Athd",
          "signature": "(a,b,c)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Athd3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AtimeOutTc",
          "package": "libGenI",
          "signature": "TyCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AtimeOutTc",
          "package": "libGenI",
          "partial": "Atime Out Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AtimeOutTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AtoAlphaNum",
          "package": "libGenI",
          "signature": "String -\u003e [AlphaNum]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AtoAlphaNum",
          "normalized": "String-\u003e[AlphaNum]",
          "package": "libGenI",
          "partial": "Ato Alpha Num",
          "signature": "String-\u003e[AlphaNum]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AtoAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AtoLowerHead",
          "package": "libGenI",
          "signature": "String -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AtoLowerHead",
          "normalized": "String-\u003eString",
          "package": "libGenI",
          "partial": "Ato Lower Head",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AtoLowerHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AtoUpperHead",
          "package": "libGenI",
          "signature": "String -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AtoUpperHead",
          "normalized": "String-\u003eString",
          "package": "libGenI",
          "partial": "Ato Upper Head",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AtoUpperHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AtreeLeaves",
          "package": "libGenI",
          "signature": "Tree a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AtreeLeaves",
          "normalized": "Tree a-\u003e[a]",
          "package": "libGenI",
          "partial": "Atree Leaves",
          "signature": "Tree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AtreeLeaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3Atrim",
          "package": "libGenI",
          "signature": "String -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3Atrim",
          "normalized": "String-\u003eString",
          "package": "libGenI",
          "partial": "Atrim",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3Atrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "action to run upon timing out\nmain action to run\n",
          "module": "NLP.GenI.General",
          "name": "3AwithTimeout",
          "package": "libGenI",
          "signature": "Integer-\u003e IO a-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "action to run upon timing out main action to run",
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AwithTimeout",
          "normalized": "Integer-\u003eIO a-\u003eIO a-\u003eIO a",
          "package": "libGenI",
          "partial": "Awith Timeout",
          "signature": "Integer-\u003eIO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AwithTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.General",
          "name": "3AwordsBy",
          "package": "libGenI",
          "signature": "a -\u003e [a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI General",
          "module": "NLP.GenI.General",
          "name": "3AwordsBy",
          "normalized": "a-\u003e[a]-\u003e[[a]]",
          "package": "libGenI",
          "partial": "Awords By",
          "signature": "a-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-General.html#v:3AwordsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3AGeniResult",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AGeniResult",
          "package": "libGenI",
          "partial": "AGeni Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#t:3AGeniResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3AProgState",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AProgState",
          "package": "libGenI",
          "partial": "AProg State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#t:3AProgState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3AProgStateRef",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AProgStateRef",
          "package": "libGenI",
          "partial": "AProg State Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#t:3AProgStateRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Only used for instances of GenI where the grammar is compiled\n   directly into GenI.\n",
          "module": "NLP.GenI.Geni",
          "name": "3ASelector",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "description": "Only used for instances of GenI where the grammar is compiled directly into GenI",
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3ASelector",
          "package": "libGenI",
          "partial": "ASelector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#t:3ASelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Select and returns the set of entries from the lexicon whose semantics\n   subsumes the input semantics.\n",
          "module": "NLP.GenI.Geni",
          "name": "3AchooseLexCand",
          "package": "libGenI",
          "signature": "Lexicon -\u003e Sem -\u003e [ILexEntry]",
          "type": "function"
        },
        "index": {
          "description": "Select and returns the set of entries from the lexicon whose semantics subsumes the input semantics",
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AchooseLexCand",
          "normalized": "Lexicon-\u003eSem-\u003e[ILexEntry]",
          "package": "libGenI",
          "partial": "Achoose Lex Cand",
          "signature": "Lexicon-\u003eSem-\u003e[ILexEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AchooseLexCand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3Acombine",
          "package": "libGenI",
          "signature": "Macros -\u003e Lexicon -\u003e Tags",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3Acombine",
          "normalized": "Macros-\u003eLexicon-\u003eTags",
          "package": "libGenI",
          "partial": "Acombine",
          "signature": "Macros-\u003eLexicon-\u003eTags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3Acombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The program state when you start GenI for the very first time\n",
          "module": "NLP.GenI.Geni",
          "name": "3AemptyProgState",
          "package": "libGenI",
          "signature": "Params -\u003e ProgState",
          "type": "function"
        },
        "index": {
          "description": "The program state when you start GenI for the very first time",
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AemptyProgState",
          "normalized": "Params-\u003eProgState",
          "package": "libGenI",
          "partial": "Aempty Prog State",
          "signature": "Params-\u003eProgState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AemptyProgState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3AgetTraces",
          "package": "libGenI",
          "signature": "ProgState -\u003e String -\u003e [String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AgetTraces",
          "normalized": "ProgState-\u003eString-\u003e[String]",
          "package": "libGenI",
          "partial": "Aget Traces",
          "signature": "ProgState-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AgetTraces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3AinitGeni",
          "package": "libGenI",
          "signature": "ProgStateRef -\u003e IO (Input)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AinitGeni",
          "normalized": "ProgStateRef-\u003eIO(Input)",
          "package": "libGenI",
          "partial": "Ainit Geni",
          "signature": "ProgStateRef-\u003eIO(Input)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AinitGeni"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3AloadEverything",
          "package": "libGenI",
          "signature": "ProgStateRef -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AloadEverything",
          "normalized": "ProgStateRef-\u003eIO()",
          "package": "libGenI",
          "partial": "Aload Everything",
          "signature": "ProgStateRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AloadEverything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3AloadGeniMacros",
          "package": "libGenI",
          "signature": "ProgStateRef -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AloadGeniMacros",
          "normalized": "ProgStateRef-\u003eIO()",
          "package": "libGenI",
          "partial": "Aload Geni Macros",
          "signature": "ProgStateRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AloadGeniMacros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3AloadLexicon",
          "package": "libGenI",
          "signature": "ProgStateRef -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AloadLexicon",
          "normalized": "ProgStateRef-\u003eIO()",
          "package": "libGenI",
          "partial": "Aload Lexicon",
          "signature": "ProgStateRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AloadLexicon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Updates program state the same way as \u003ctt\u003e\u003ca\u003eloadTestSuite\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "NLP.GenI.Geni",
          "name": "3AloadTargetSemStr",
          "package": "libGenI",
          "signature": "ProgStateRef -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Updates program state the same way as loadTestSuite",
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AloadTargetSemStr",
          "normalized": "ProgStateRef-\u003eString-\u003eIO()",
          "package": "libGenI",
          "partial": "Aload Target Sem Str",
          "signature": "ProgStateRef-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AloadTargetSemStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe macros are stored as a hashing function in the monad.\n\u003c/p\u003e\u003cp\u003eThe results are stored as a lookup function in the monad.\n\u003c/p\u003e\u003cp\u003eStores the results in the tcase and tsuite fields\n\u003c/p\u003e",
          "module": "NLP.GenI.Geni",
          "name": "3AloadTestSuite",
          "package": "libGenI",
          "signature": "ProgStateRef -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The macros are stored as hashing function in the monad The results are stored as lookup function in the monad Stores the results in the tcase and tsuite fields",
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AloadTestSuite",
          "normalized": "ProgStateRef-\u003eIO()",
          "package": "libGenI",
          "partial": "Aload Test Suite",
          "signature": "ProgStateRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AloadTestSuite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3ArunGeni",
          "package": "libGenI",
          "signature": "ProgStateRef -\u003e Builder st it Params -\u003e IO ([GeniResult], Statistics, st)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3ArunGeni",
          "normalized": "ProgStateRef-\u003eBuilder a b Params-\u003eIO([GeniResult],Statistics,a)",
          "package": "libGenI",
          "partial": "Arun Geni",
          "signature": "ProgStateRef-\u003eBuilder st it Params-\u003eIO([GeniResult],Statistics,st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3ArunGeni"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Geni",
          "name": "3ArunGeniWithSelector",
          "package": "libGenI",
          "signature": "ProgStateRef -\u003e Selector -\u003e Builder st it Params -\u003e IO ([GeniResult], Statistics, st)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3ArunGeniWithSelector",
          "normalized": "ProgStateRef-\u003eSelector-\u003eBuilder a b Params-\u003eIO([GeniResult],Statistics,a)",
          "package": "libGenI",
          "partial": "Arun Geni With Selector",
          "signature": "ProgStateRef-\u003eSelector-\u003eBuilder st it Params-\u003eIO([GeniResult],Statistics,st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3ArunGeniWithSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Show the sentences produced by the generator, in a relatively compact form\n",
          "module": "NLP.GenI.Geni",
          "name": "3AshowRealisations",
          "package": "libGenI",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Show the sentences produced by the generator in relatively compact form",
          "hierarchy": "NLP GenI Geni",
          "module": "NLP.GenI.Geni",
          "name": "3AshowRealisations",
          "normalized": "[String]-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Realisations",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Geni.html#v:3AshowRealisations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This is only used by the script genimakesuite\n",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniDerivations",
          "package": "libGenI",
          "signature": "Parser [TestCaseOutput]",
          "type": "function"
        },
        "index": {
          "description": "This is only used by the script genimakesuite",
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniDerivations",
          "normalized": "Parser[TestCaseOutput]",
          "package": "libGenI",
          "partial": "Ageni Derivations",
          "signature": "Parser[TestCaseOutput]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniDerivations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniFeats",
          "package": "libGenI",
          "signature": "Parser Flist",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniFeats",
          "package": "libGenI",
          "partial": "Ageni Feats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniFeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniLanguageDef",
          "package": "libGenI",
          "signature": "LanguageDef ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniLanguageDef",
          "normalized": "LanguageDef()",
          "package": "libGenI",
          "partial": "Ageni Language Def",
          "signature": "LanguageDef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniLanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniLexicon",
          "package": "libGenI",
          "signature": "Parser [ILexEntry]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniLexicon",
          "normalized": "Parser[ILexEntry]",
          "package": "libGenI",
          "partial": "Ageni Lexicon",
          "signature": "Parser[ILexEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniLexicon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniMacros",
          "package": "libGenI",
          "signature": "Parser [MTtree]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniMacros",
          "normalized": "Parser[MTtree]",
          "package": "libGenI",
          "partial": "Ageni Macros",
          "signature": "Parser[MTtree]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniMacros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniMorphInfo",
          "package": "libGenI",
          "signature": "Parser [(String, Flist)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniMorphInfo",
          "normalized": "Parser[(String,Flist)]",
          "package": "libGenI",
          "partial": "Ageni Morph Info",
          "signature": "Parser[(String,Flist)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniMorphInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniMorphLexicon",
          "package": "libGenI",
          "signature": "Parser [MorphLexEntry]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniMorphLexicon",
          "normalized": "Parser[MorphLexEntry]",
          "package": "libGenI",
          "partial": "Ageni Morph Lexicon",
          "signature": "Parser[MorphLexEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniMorphLexicon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniPolarities",
          "package": "libGenI",
          "signature": "Parser (Map String Interval)",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniPolarities",
          "package": "libGenI",
          "partial": "Ageni Polarities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniPolarities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniSemanticInput",
          "package": "libGenI",
          "signature": "Parser (Sem, Flist, [LitConstr])",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniSemanticInput",
          "normalized": "Parser(Sem,Flist,[LitConstr])",
          "package": "libGenI",
          "partial": "Ageni Semantic Input",
          "signature": "Parser(Sem,Flist,[LitConstr])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniSemanticInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniSemantics",
          "package": "libGenI",
          "signature": "Parser Sem",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniSemantics",
          "package": "libGenI",
          "partial": "Ageni Semantics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniSemantics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniTagElems",
          "package": "libGenI",
          "signature": "Parser [TagElem]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniTagElems",
          "normalized": "Parser[TagElem]",
          "package": "libGenI",
          "partial": "Ageni Tag Elems",
          "signature": "Parser[TagElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniTagElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniTestSuite",
          "package": "libGenI",
          "signature": "Parser [TestCase]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniTestSuite",
          "normalized": "Parser[TestCase]",
          "package": "libGenI",
          "partial": "Ageni Test Suite",
          "signature": "Parser[TestCase]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniTestSuite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Just the String representations of the semantics\n   in the test suite\n",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniTestSuiteString",
          "package": "libGenI",
          "signature": "Parser [String]",
          "type": "function"
        },
        "index": {
          "description": "Just the String representations of the semantics in the test suite",
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniTestSuiteString",
          "normalized": "Parser[String]",
          "package": "libGenI",
          "partial": "Ageni Test Suite String",
          "signature": "Parser[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniTestSuiteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniValue",
          "package": "libGenI",
          "signature": "Parser GeniVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniValue",
          "package": "libGenI",
          "partial": "Ageni Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniWords",
          "package": "libGenI",
          "signature": "Parser String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AgeniWords",
          "package": "libGenI",
          "partial": "Ageni Words",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AgeniWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AtillEof",
          "package": "libGenI",
          "signature": "Parser a -\u003e Parser a",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AtillEof",
          "normalized": "Parser a-\u003eParser a",
          "package": "libGenI",
          "partial": "Atill Eof",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AtillEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniParsers",
          "name": "3AtoSemInputString",
          "package": "libGenI",
          "signature": "SemInput -\u003e String -\u003e SemInputString",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniParsers",
          "module": "NLP.GenI.GeniParsers",
          "name": "3AtoSemInputString",
          "normalized": "SemInput-\u003eString-\u003eSemInputString",
          "package": "libGenI",
          "partial": "Ato Sem Input String",
          "signature": "SemInput-\u003eString-\u003eSemInputString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniParsers.html#v:3AtoSemInputString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniShow",
          "name": "3AGeniShow",
          "package": "libGenI",
          "type": "class"
        },
        "index": {
          "hierarchy": "NLP GenI GeniShow",
          "module": "NLP.GenI.GeniShow",
          "name": "3AGeniShow",
          "package": "libGenI",
          "partial": "AGeni Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniShow.html#v:3AGeniShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniShow",
          "name": "3AgeniShow",
          "package": "libGenI",
          "signature": "a -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniShow",
          "module": "NLP.GenI.GeniShow",
          "name": "3AgeniShow",
          "normalized": "a-\u003eString",
          "package": "libGenI",
          "partial": "Ageni Show",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniShow.html#v:3AgeniShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniShow",
          "name": "3AgeniShowKeyword",
          "package": "libGenI",
          "signature": "String -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniShow",
          "module": "NLP.GenI.GeniShow",
          "name": "3AgeniShowKeyword",
          "normalized": "String-\u003eShowS",
          "package": "libGenI",
          "partial": "Ageni Show Keyword",
          "signature": "String-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniShow.html#v:3AgeniShowKeyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniShow",
          "name": "3AgeniShowSemInput",
          "package": "libGenI",
          "signature": "SemInput -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniShow",
          "module": "NLP.GenI.GeniShow",
          "name": "3AgeniShowSemInput",
          "normalized": "SemInput-\u003eShowS",
          "package": "libGenI",
          "partial": "Ageni Show Sem Input",
          "signature": "SemInput-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniShow.html#v:3AgeniShowSemInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniShow",
          "name": "3Aparens",
          "package": "libGenI",
          "signature": "String -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniShow",
          "module": "NLP.GenI.GeniShow",
          "name": "3Aparens",
          "normalized": "String-\u003eString",
          "package": "libGenI",
          "partial": "Aparens",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniShow.html#v:3Aparens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.GeniShow",
          "name": "3Asquares",
          "package": "libGenI",
          "signature": "String -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI GeniShow",
          "module": "NLP.GenI.GeniShow",
          "name": "3Asquares",
          "normalized": "String-\u003eString",
          "package": "libGenI",
          "partial": "Asquares",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-GeniShow.html#v:3Asquares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AMorphFn",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AMorphFn",
          "package": "libGenI",
          "partial": "AMorph Fn",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#t:3AMorphFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AMorphLexicon",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AMorphLexicon",
          "package": "libGenI",
          "partial": "AMorph Lexicon",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#t:3AMorphLexicon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AUninflectedDisjunction",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AUninflectedDisjunction",
          "package": "libGenI",
          "partial": "AUninflected Disjunction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#t:3AUninflectedDisjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AattachMorph",
          "package": "libGenI",
          "signature": "MorphFn -\u003e Sem -\u003e [TagElem] -\u003e [TagElem]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AattachMorph",
          "normalized": "MorphFn-\u003eSem-\u003e[TagElem]-\u003e[TagElem]",
          "package": "libGenI",
          "partial": "Aattach Morph",
          "signature": "MorphFn-\u003eSem-\u003e[TagElem]-\u003e[TagElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AattachMorph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AattachMorphHelper",
          "package": "libGenI",
          "signature": "Flist -\u003e TagElem -\u003e TagElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AattachMorphHelper",
          "normalized": "Flist-\u003eTagElem-\u003eTagElem",
          "package": "libGenI",
          "partial": "Aattach Morph Helper",
          "signature": "Flist-\u003eTagElem-\u003eTagElem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AattachMorphHelper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AinflectSentenceUsingLex",
          "package": "libGenI",
          "signature": "MorphLexicon -\u003e [UninflectedDisjunction] -\u003e [String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AinflectSentenceUsingLex",
          "normalized": "MorphLexicon-\u003e[UninflectedDisjunction]-\u003e[String]",
          "package": "libGenI",
          "partial": "Ainflect Sentence Using Lex",
          "signature": "MorphLexicon-\u003e[UninflectedDisjunction]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AinflectSentenceUsingLex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AinflectSentencesUsingCmd",
          "package": "libGenI",
          "signature": "String -\u003e [[UninflectedDisjunction]] -\u003e IO [[String]]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AinflectSentencesUsingCmd",
          "normalized": "String-\u003e[[UninflectedDisjunction]]-\u003eIO[[String]]",
          "package": "libGenI",
          "partial": "Ainflect Sentences Using Cmd",
          "signature": "String-\u003e[[UninflectedDisjunction]]-\u003eIO[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AinflectSentencesUsingCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return a list of results for each sentence\n",
          "module": "NLP.GenI.Morphology",
          "name": "3AinflectSentencesUsingLex",
          "package": "libGenI",
          "signature": "MorphLexicon -\u003e [[UninflectedDisjunction]] -\u003e [[String]]",
          "type": "function"
        },
        "index": {
          "description": "Return list of results for each sentence",
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AinflectSentencesUsingLex",
          "normalized": "MorphLexicon-\u003e[[UninflectedDisjunction]]-\u003e[[String]]",
          "package": "libGenI",
          "partial": "Ainflect Sentences Using Lex",
          "signature": "MorphLexicon-\u003e[[UninflectedDisjunction]]-\u003e[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AinflectSentencesUsingLex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return only n matches, but note any excessive ambiguities or missing matches\n",
          "module": "NLP.GenI.Morphology",
          "name": "3AinflectWordUsingLex",
          "package": "libGenI",
          "signature": "MorphLexicon -\u003e UninflectedDisjunction -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Return only matches but note any excessive ambiguities or missing matches",
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AinflectWordUsingLex",
          "normalized": "MorphLexicon-\u003eUninflectedDisjunction-\u003e[String]",
          "package": "libGenI",
          "partial": "Ainflect Word Using Lex",
          "signature": "MorphLexicon-\u003eUninflectedDisjunction-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AinflectWordUsingLex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AreadMorph",
          "package": "libGenI",
          "signature": "[(String, [AvPair])] -\u003e MorphFn",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AreadMorph",
          "normalized": "[(String,[AvPair])]-\u003eMorphFn",
          "package": "libGenI",
          "partial": "Aread Morph",
          "signature": "[(String,[AvPair])]-\u003eMorphFn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AreadMorph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AsansMorph",
          "package": "libGenI",
          "signature": "[(String, Flist)] -\u003e [String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AsansMorph",
          "normalized": "[(String,Flist)]-\u003e[String]",
          "package": "libGenI",
          "partial": "Asans Morph",
          "signature": "[(String,Flist)]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AsansMorph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AsetMorphAnchor",
          "package": "libGenI",
          "signature": "GNode -\u003e Tree GNode -\u003e Tree GNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AsetMorphAnchor",
          "normalized": "GNode-\u003eTree GNode-\u003eTree GNode",
          "package": "libGenI",
          "partial": "Aset Morph Anchor",
          "signature": "GNode-\u003eTree GNode-\u003eTree GNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AsetMorphAnchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3Asingleton",
          "package": "libGenI",
          "signature": "a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3Asingleton",
          "normalized": "a-\u003e[a]",
          "package": "libGenI",
          "partial": "Asingleton",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3Asingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Morphology",
          "name": "3AstripMorphSem",
          "package": "libGenI",
          "signature": "MorphFn -\u003e Sem -\u003e Sem",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Morphology",
          "module": "NLP.GenI.Morphology",
          "name": "3AstripMorphSem",
          "normalized": "MorphFn-\u003eSem-\u003eSem",
          "package": "libGenI",
          "partial": "Astrip Morph Sem",
          "signature": "MorphFn-\u003eSem-\u003eSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Morphology.html#v:3AstripMorphSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AAutDebug",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AAutDebug",
          "package": "libGenI",
          "partial": "AAut Debug",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#t:3AAutDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3ANFA",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3ANFA",
          "package": "libGenI",
          "partial": "ANFA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#t:3ANFA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3APolAut",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3APolAut",
          "package": "libGenI",
          "partial": "APol Aut",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#t:3APolAut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "intermediate auts, seed aut, final aut, potentially modified sem\n",
          "module": "NLP.GenI.Polarity",
          "name": "3APolResult",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "description": "intermediate auts seed aut final aut potentially modified sem",
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3APolResult",
          "package": "libGenI",
          "partial": "APol Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#t:3APolResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3APolState",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3APolState",
          "package": "libGenI",
          "partial": "APol State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#t:3APolState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AbuildAutomaton",
          "package": "libGenI",
          "signature": "SemInput -\u003e [TagElem] -\u003e Flist -\u003e PolMap -\u003e PolResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AbuildAutomaton",
          "normalized": "SemInput-\u003e[TagElem]-\u003eFlist-\u003ePolMap-\u003ePolResult",
          "package": "libGenI",
          "partial": "Abuild Automaton",
          "signature": "SemInput-\u003e[TagElem]-\u003eFlist-\u003ePolMap-\u003ePolResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AbuildAutomaton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AdeclareIdxConstraints",
          "package": "libGenI",
          "signature": "Flist -\u003e PolMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AdeclareIdxConstraints",
          "normalized": "Flist-\u003ePolMap",
          "package": "libGenI",
          "partial": "Adeclare Idx Constraints",
          "signature": "Flist-\u003ePolMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AdeclareIdxConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectIdxConstraints",
          "package": "libGenI",
          "signature": "Flist -\u003e Flist -\u003e PolMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectIdxConstraints",
          "normalized": "Flist-\u003eFlist-\u003ePolMap",
          "package": "libGenI",
          "partial": "Adetect Idx Constraints",
          "signature": "Flist-\u003eFlist-\u003ePolMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AdetectIdxConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectPolFeatures",
          "package": "libGenI",
          "signature": "[TagElem] -\u003e [String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectPolFeatures",
          "normalized": "[TagElem]-\u003e[String]",
          "package": "libGenI",
          "partial": "Adetect Pol Features",
          "signature": "[TagElem]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AdetectPolFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectPolPaths",
          "package": "libGenI",
          "signature": "[[TagElem]] -\u003e [(TagElem, BitVector)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectPolPaths",
          "normalized": "[[TagElem]]-\u003e[(TagElem,BitVector)]",
          "package": "libGenI",
          "partial": "Adetect Pol Paths",
          "signature": "[[TagElem]]-\u003e[(TagElem,BitVector)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AdetectPolPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectPols",
          "package": "libGenI",
          "signature": "[TagElem] -\u003e [TagElem]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectPols",
          "normalized": "[TagElem]-\u003e[TagElem]",
          "package": "libGenI",
          "partial": "Adetect Pols",
          "signature": "[TagElem]-\u003e[TagElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AdetectPols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectSansIdx",
          "package": "libGenI",
          "signature": "[TagElem] -\u003e [TagElem]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AdetectSansIdx",
          "normalized": "[TagElem]-\u003e[TagElem]",
          "package": "libGenI",
          "partial": "Adetect Sans Idx",
          "signature": "[TagElem]-\u003e[TagElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AdetectSansIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AfixPronouns",
          "package": "libGenI",
          "signature": "(Sem, [TagElem]) -\u003e (Sem, [TagElem])",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AfixPronouns",
          "normalized": "(Sem,[TagElem])-\u003e(Sem,[TagElem])",
          "package": "libGenI",
          "partial": "Afix Pronouns",
          "signature": "(Sem,[TagElem])-\u003e(Sem,[TagElem])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AfixPronouns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AmakePolAut",
          "package": "libGenI",
          "signature": "[TagElem] -\u003e Sem -\u003e PolMap -\u003e PolResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AmakePolAut",
          "normalized": "[TagElem]-\u003eSem-\u003ePolMap-\u003ePolResult",
          "package": "libGenI",
          "partial": "Amake Pol Aut",
          "signature": "[TagElem]-\u003eSem-\u003ePolMap-\u003ePolResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AmakePolAut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AshowLite",
          "package": "libGenI",
          "signature": "a -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AshowLite",
          "normalized": "a-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Lite",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AshowLite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AshowLitePm",
          "package": "libGenI",
          "signature": "PolMap -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AshowLitePm",
          "normalized": "PolMap-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Lite Pm",
          "signature": "PolMap-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AshowLitePm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AshowPolPaths",
          "package": "libGenI",
          "signature": "BitVector -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AshowPolPaths",
          "normalized": "BitVector-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Pol Paths",
          "signature": "BitVector-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AshowPolPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Polarity",
          "name": "3AshowPolPaths'",
          "package": "libGenI",
          "signature": "BitVector -\u003e Int -\u003e [Int]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Polarity",
          "module": "NLP.GenI.Polarity",
          "name": "3AshowPolPaths'",
          "normalized": "BitVector-\u003eInt-\u003e[Int]",
          "package": "libGenI",
          "partial": "Ashow Pol Paths'",
          "signature": "BitVector-\u003eInt-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Polarity.html#v:3AshowPolPaths'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AAgenda",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AAgenda",
          "package": "libGenI",
          "partial": "AAgenda",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#t:3AAgenda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AAuxAgenda",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AAuxAgenda",
          "package": "libGenI",
          "partial": "AAux Agenda",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#t:3AAuxAgenda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AChart",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AChart",
          "package": "libGenI",
          "partial": "AChart",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#t:3AChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3ASimpleGuiItem",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3ASimpleGuiItem",
          "package": "libGenI",
          "partial": "ASimple Gui Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#t:3ASimpleGuiItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3ASimpleItem",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3ASimpleItem",
          "package": "libGenI",
          "partial": "ASimple Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#t:3ASimpleItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3ASimpleState",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3ASimpleState",
          "package": "libGenI",
          "partial": "ASimple State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#t:3ASimpleState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3ASimpleStatus",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3ASimpleStatus",
          "package": "libGenI",
          "partial": "ASimple Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#t:3ASimpleStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AaddToAgenda",
          "package": "libGenI",
          "signature": "SimpleItem -\u003e SimpleState ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AaddToAgenda",
          "normalized": "SimpleItem-\u003eSimpleState()",
          "package": "libGenI",
          "partial": "Aadd To Agenda",
          "signature": "SimpleItem-\u003eSimpleState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AaddToAgenda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AaddToChart",
          "package": "libGenI",
          "signature": "SimpleItem -\u003e SimpleState ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AaddToChart",
          "normalized": "SimpleItem-\u003eSimpleState()",
          "package": "libGenI",
          "partial": "Aadd To Chart",
          "signature": "SimpleItem-\u003eSimpleState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AaddToChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3Agenconfig",
          "package": "libGenI",
          "signature": "SimpleStatus -\u003e Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3Agenconfig",
          "normalized": "SimpleStatus-\u003eParams",
          "package": "libGenI",
          "partial": "Agenconfig",
          "signature": "SimpleStatus-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3Agenconfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Creates an initial SimpleStatus.\n",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AinitSimpleBuilder",
          "package": "libGenI",
          "signature": "Bool -\u003e Input -\u003e Params -\u003e (SimpleStatus, Statistics)",
          "type": "function"
        },
        "index": {
          "description": "Creates an initial SimpleStatus",
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AinitSimpleBuilder",
          "normalized": "Bool-\u003eInput-\u003eParams-\u003e(SimpleStatus,Statistics)",
          "package": "libGenI",
          "partial": "Ainit Simple Builder",
          "signature": "Bool-\u003eInput-\u003eParams-\u003e(SimpleStatus,Statistics)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AinitSimpleBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AsimpleBuilder",
          "package": "libGenI",
          "signature": "Bool -\u003e SimpleBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AsimpleBuilder",
          "normalized": "Bool-\u003eSimpleBuilder",
          "package": "libGenI",
          "partial": "Asimple Builder",
          "signature": "Bool-\u003eSimpleBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AsimpleBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AsimpleBuilder_1p",
          "package": "libGenI",
          "signature": "SimpleBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AsimpleBuilder_1p",
          "package": "libGenI",
          "partial": "Asimple Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AsimpleBuilder_1p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AsimpleBuilder_2p",
          "package": "libGenI",
          "signature": "SimpleBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AsimpleBuilder_2p",
          "package": "libGenI",
          "partial": "Asimple Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AsimpleBuilder_2p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheAgenda",
          "package": "libGenI",
          "signature": "SimpleStatus -\u003e Agenda",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheAgenda",
          "normalized": "SimpleStatus-\u003eAgenda",
          "package": "libGenI",
          "partial": "Athe Agenda",
          "signature": "SimpleStatus-\u003eAgenda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AtheAgenda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheAuxAgenda",
          "package": "libGenI",
          "signature": "SimpleStatus -\u003e AuxAgenda",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheAuxAgenda",
          "normalized": "SimpleStatus-\u003eAuxAgenda",
          "package": "libGenI",
          "partial": "Athe Aux Agenda",
          "signature": "SimpleStatus-\u003eAuxAgenda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AtheAuxAgenda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheChart",
          "package": "libGenI",
          "signature": "SimpleStatus -\u003e Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheChart",
          "normalized": "SimpleStatus-\u003eChart",
          "package": "libGenI",
          "partial": "Athe Chart",
          "signature": "SimpleStatus-\u003eChart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AtheChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheResults",
          "package": "libGenI",
          "signature": "SimpleStatus -\u003e [SimpleItem]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheResults",
          "normalized": "SimpleStatus-\u003e[SimpleItem]",
          "package": "libGenI",
          "partial": "Athe Results",
          "signature": "SimpleStatus-\u003e[SimpleItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AtheResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheTrash",
          "package": "libGenI",
          "signature": "SimpleStatus -\u003e Trash",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AtheTrash",
          "normalized": "SimpleStatus-\u003eTrash",
          "package": "libGenI",
          "partial": "Athe Trash",
          "signature": "SimpleStatus-\u003eTrash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AtheTrash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AunpackResult",
          "package": "libGenI",
          "signature": "SimpleItem -\u003e [Output]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Simple SimpleBuilder",
          "module": "NLP.GenI.Simple.SimpleBuilder",
          "name": "3AunpackResult",
          "normalized": "SimpleItem-\u003e[Output]",
          "package": "libGenI",
          "partial": "Aunpack Result",
          "signature": "SimpleItem-\u003e[Output]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Simple-SimpleBuilder.html#v:3AunpackResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AMetric",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AMetric",
          "package": "libGenI",
          "partial": "AMetric",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#t:3AMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AStatistics",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AStatistics",
          "package": "libGenI",
          "partial": "AStatistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#t:3AStatistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AStatisticsState",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AStatisticsState",
          "package": "libGenI",
          "partial": "AStatistics State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#t:3AStatisticsState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AStatisticsStateIO",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AStatisticsStateIO",
          "package": "libGenI",
          "partial": "AStatistics State IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#t:3AStatisticsStateIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Adds a metric that will be printed out at regular intervals \n",
          "module": "NLP.GenI.Statistics",
          "name": "3AaddInspectionMetric",
          "package": "libGenI",
          "signature": "Metric -\u003e StatisticsState ()",
          "type": "function"
        },
        "index": {
          "description": "Adds metric that will be printed out at regular intervals",
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AaddInspectionMetric",
          "normalized": "Metric-\u003eStatisticsState()",
          "package": "libGenI",
          "partial": "Aadd Inspection Metric",
          "signature": "Metric-\u003eStatisticsState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AaddInspectionMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AaddIntMetrics",
          "package": "libGenI",
          "signature": "Metric -\u003e Metric -\u003e Metric",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AaddIntMetrics",
          "normalized": "Metric-\u003eMetric-\u003eMetric",
          "package": "libGenI",
          "partial": "Aadd Int Metrics",
          "signature": "Metric-\u003eMetric-\u003eMetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AaddIntMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Adds a metric at the end of the list (thus,\n   metrics are printed out in the order in which they were added \n",
          "module": "NLP.GenI.Statistics",
          "name": "3AaddMetric",
          "package": "libGenI",
          "signature": "Metric -\u003e StatisticsState ()",
          "type": "function"
        },
        "index": {
          "description": "Adds metric at the end of the list thus metrics are printed out in the order in which they were added",
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AaddMetric",
          "normalized": "Metric-\u003eStatisticsState()",
          "package": "libGenI",
          "partial": "Aadd Metric",
          "signature": "Metric-\u003eStatisticsState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AaddMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AemptyStats",
          "package": "libGenI",
          "signature": "Statistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AemptyStats",
          "package": "libGenI",
          "partial": "Aempty Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AemptyStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AincrIntMetric",
          "package": "libGenI",
          "signature": "String -\u003e Int -\u003e Metric -\u003e Metric",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AincrIntMetric",
          "normalized": "String-\u003eInt-\u003eMetric-\u003eMetric",
          "package": "libGenI",
          "partial": "Aincr Int Metric",
          "signature": "String-\u003eInt-\u003eMetric-\u003eMetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AincrIntMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AinitialStatisticsStateFor",
          "package": "libGenI",
          "signature": "(m a -\u003e Statistics -\u003e b) -\u003e m a -\u003e b",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AinitialStatisticsStateFor",
          "normalized": "(a b-\u003eStatistics-\u003ec)-\u003ea b-\u003ec",
          "package": "libGenI",
          "partial": "Ainitial Statistics State For",
          "signature": "(m a-\u003eStatistics-\u003eb)-\u003em a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AinitialStatisticsStateFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AmergeMetrics",
          "package": "libGenI",
          "signature": "(Metric -\u003e Metric -\u003e Metric) -\u003e Statistics -\u003e Statistics -\u003e Statistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AmergeMetrics",
          "normalized": "(Metric-\u003eMetric-\u003eMetric)-\u003eStatistics-\u003eStatistics-\u003eStatistics",
          "package": "libGenI",
          "partial": "Amerge Metrics",
          "signature": "(Metric-\u003eMetric-\u003eMetric)-\u003eStatistics-\u003eStatistics-\u003eStatistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AmergeMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AprintOutAllMetrics",
          "package": "libGenI",
          "signature": "StatisticsStateIO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AprintOutAllMetrics",
          "normalized": "StatisticsStateIO()",
          "package": "libGenI",
          "partial": "Aprint Out All Metrics",
          "signature": "StatisticsStateIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AprintOutAllMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AprintOutAllMetrics'",
          "package": "libGenI",
          "signature": "Statistics -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AprintOutAllMetrics'",
          "normalized": "Statistics-\u003eIO()",
          "package": "libGenI",
          "partial": "Aprint Out All Metrics'",
          "signature": "Statistics-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AprintOutAllMetrics'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AprintOutInspectionMetrics",
          "package": "libGenI",
          "signature": "StatisticsStateIO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AprintOutInspectionMetrics",
          "normalized": "StatisticsStateIO()",
          "package": "libGenI",
          "partial": "Aprint Out Inspection Metrics",
          "signature": "StatisticsStateIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AprintOutInspectionMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AqueryIntMetric",
          "package": "libGenI",
          "signature": "String -\u003e Metric -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AqueryIntMetric",
          "normalized": "String-\u003eMetric-\u003eMaybe Int",
          "package": "libGenI",
          "partial": "Aquery Int Metric",
          "signature": "String-\u003eMetric-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AqueryIntMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AqueryMetrics",
          "package": "libGenI",
          "signature": "(Metric -\u003e Maybe a) -\u003e Statistics -\u003e [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AqueryMetrics",
          "normalized": "(Metric-\u003eMaybe a)-\u003eStatistics-\u003e[a]",
          "package": "libGenI",
          "partial": "Aquery Metrics",
          "signature": "(Metric-\u003eMaybe a)-\u003eStatistics-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AqueryMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AsetPrintOutInterval",
          "package": "libGenI",
          "signature": "Int -\u003e StatisticsState ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AsetPrintOutInterval",
          "normalized": "Int-\u003eStatisticsState()",
          "package": "libGenI",
          "partial": "Aset Print Out Interval",
          "signature": "Int-\u003eStatisticsState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AsetPrintOutInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AshowFinalStats",
          "package": "libGenI",
          "signature": "Statistics -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AshowFinalStats",
          "normalized": "Statistics-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Final Stats",
          "signature": "Statistics-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AshowFinalStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Statistics",
          "name": "3AupdateMetrics",
          "package": "libGenI",
          "signature": "(Metric -\u003e Metric) -\u003e Statistics -\u003e Statistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Statistics",
          "module": "NLP.GenI.Statistics",
          "name": "3AupdateMetrics",
          "normalized": "(Metric-\u003eMetric)-\u003eStatistics-\u003eStatistics",
          "package": "libGenI",
          "partial": "Aupdate Metrics",
          "signature": "(Metric-\u003eMetric)-\u003eStatistics-\u003eStatistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Statistics.html#v:3AupdateMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3ATagDerivation",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3ATagDerivation",
          "package": "libGenI",
          "partial": "ATag Derivation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#t:3ATagDerivation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3ATagElem",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3ATagElem",
          "package": "libGenI",
          "partial": "ATag Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#t:3ATagElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3ATagSite",
          "package": "libGenI",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3ATagSite",
          "package": "libGenI",
          "partial": "ATag Site",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#t:3ATagSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3ATags",
          "package": "libGenI",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3ATags",
          "package": "libGenI",
          "partial": "ATags",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#t:3ATags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3ATagItem",
          "package": "libGenI",
          "type": "class"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3ATagItem",
          "package": "libGenI",
          "partial": "ATag Item",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3ATagItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AaddToTags",
          "package": "libGenI",
          "signature": "Tags -\u003e String -\u003e TagElem -\u003e Tags",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AaddToTags",
          "normalized": "Tags-\u003eString-\u003eTagElem-\u003eTags",
          "package": "libGenI",
          "partial": "Aadd To Tags",
          "signature": "Tags-\u003eString-\u003eTagElem-\u003eTags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AaddToTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a tree(GNode) returns a list of substitution or adjunction\n   nodes, as well as remaining nodes with a null adjunction constraint.\n",
          "module": "NLP.GenI.Tags",
          "name": "3AdetectSites",
          "package": "libGenI",
          "signature": "Tree GNode -\u003e ([TagSite], [TagSite], [TagSite])",
          "type": "function"
        },
        "index": {
          "description": "Given tree GNode returns list of substitution or adjunction nodes as well as remaining nodes with null adjunction constraint",
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AdetectSites",
          "normalized": "Tree GNode-\u003e([TagSite],[TagSite],[TagSite])",
          "package": "libGenI",
          "partial": "Adetect Sites",
          "signature": "Tree GNode-\u003e([TagSite],[TagSite],[TagSite])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AdetectSites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AdrawTagTrees",
          "package": "libGenI",
          "signature": "[TagElem] -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AdrawTagTrees",
          "normalized": "[TagElem]-\u003eString",
          "package": "libGenI",
          "partial": "Adraw Tag Trees",
          "signature": "[TagElem]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AdrawTagTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AemptyTE",
          "package": "libGenI",
          "signature": "TagElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AemptyTE",
          "package": "libGenI",
          "partial": "Aempty TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AemptyTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AmapBySem",
          "package": "libGenI",
          "signature": "[t] -\u003e Map Pred [t]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AmapBySem",
          "normalized": "[a]-\u003eMap Pred[a]",
          "package": "libGenI",
          "partial": "Amap By Sem",
          "signature": "[t]-\u003eMap Pred[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AmapBySem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Assigns a unique id to each element of this list, that is, an integer\n   between 1 and the size of the list.\n",
          "module": "NLP.GenI.Tags",
          "name": "3AsetTidnums",
          "package": "libGenI",
          "signature": "[TagElem] -\u003e [TagElem]",
          "type": "function"
        },
        "index": {
          "description": "Assigns unique id to each element of this list that is an integer between and the size of the list",
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AsetTidnums",
          "normalized": "[TagElem]-\u003e[TagElem]",
          "package": "libGenI",
          "partial": "Aset Tidnums",
          "signature": "[TagElem]-\u003e[TagElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AsetTidnums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AshowTagSites",
          "package": "libGenI",
          "signature": "[TagSite] -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AshowTagSites",
          "normalized": "[TagSite]-\u003eString",
          "package": "libGenI",
          "partial": "Ashow Tag Sites",
          "signature": "[TagSite]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AshowTagSites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AsubsumedBy",
          "package": "libGenI",
          "signature": "Sem -\u003e Pred -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AsubsumedBy",
          "normalized": "Sem-\u003ePred-\u003eBool",
          "package": "libGenI",
          "partial": "Asubsumed By",
          "signature": "Sem-\u003ePred-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AsubsumedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AtagLeaves",
          "package": "libGenI",
          "signature": "TagElem -\u003e [(String, UninflectedDisjunction)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AtagLeaves",
          "normalized": "TagElem-\u003e[(String,UninflectedDisjunction)]",
          "package": "libGenI",
          "partial": "Atag Leaves",
          "signature": "TagElem-\u003e[(String,UninflectedDisjunction)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AtagLeaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AtgIdName",
          "package": "libGenI",
          "signature": "t -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AtgIdName",
          "normalized": "a-\u003eString",
          "package": "libGenI",
          "partial": "Atg Id Name",
          "signature": "t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AtgIdName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AtgIdNum",
          "package": "libGenI",
          "signature": "t -\u003e Integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AtgIdNum",
          "normalized": "a-\u003eInteger",
          "package": "libGenI",
          "partial": "Atg Id Num",
          "signature": "t-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AtgIdNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3AtgSemantics",
          "package": "libGenI",
          "signature": "t -\u003e Sem",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3AtgSemantics",
          "normalized": "a-\u003eSem",
          "package": "libGenI",
          "partial": "Atg Semantics",
          "signature": "t-\u003eSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3AtgSemantics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3Ats_rootFeatureMismatch",
          "package": "libGenI",
          "signature": "Flist -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3Ats_rootFeatureMismatch",
          "normalized": "Flist-\u003eString",
          "package": "libGenI",
          "partial": "Ats Feature Mismatch",
          "signature": "Flist-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3Ats_rootFeatureMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3Ats_semIncomplete",
          "package": "libGenI",
          "signature": "[Pred] -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3Ats_semIncomplete",
          "normalized": "[Pred]-\u003eString",
          "package": "libGenI",
          "partial": "Ats Incomplete",
          "signature": "[Pred]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3Ats_semIncomplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3Ats_synIncomplete",
          "package": "libGenI",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3Ats_synIncomplete",
          "package": "libGenI",
          "partial": "Ats Incomplete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3Ats_synIncomplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.GenI.Tags",
          "name": "3Ats_tbUnificationFailure",
          "package": "libGenI",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP GenI Tags",
          "module": "NLP.GenI.Tags",
          "name": "3Ats_tbUnificationFailure",
          "package": "libGenI",
          "partial": "Ats Unification Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libGenI/docs/NLP-GenI-Tags.html#v:3Ats_tbUnificationFailure"
      }
    }
  ]
]