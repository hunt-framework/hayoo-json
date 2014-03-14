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
        "word": "reaction-logic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eResizable dependency graph.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Reactor.MinimalGraph",
          "name": "MinimalGraph",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-MinimalGraph.html",
          "type": "module"
        },
        "index": {
          "description": "Resizable dependency graph",
          "hierarchy": "Data Reactor MinimalGraph",
          "module": "Data.Reactor.MinimalGraph",
          "name": "MinimalGraph",
          "package": "reaction-logic",
          "partial": "Minimal Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-MinimalGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.MinimalGraph",
          "name": "Index",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-MinimalGraph.html#Index",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Reactor MinimalGraph",
          "module": "Data.Reactor.MinimalGraph",
          "name": "Index",
          "package": "reaction-logic",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-MinimalGraph.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimalGraph object definition. Add and resisze are splitted to permit new index to be used in computation of new constraint group .\n\u003c/p\u003e",
          "module": "Data.Reactor.MinimalGraph",
          "name": "MinimalGraph",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-MinimalGraph.html#MinimalGraph",
          "type": "data"
        },
        "index": {
          "description": "MinimalGraph object definition Add and resisze are splitted to permit new index to be used in computation of new constraint group",
          "hierarchy": "Data Reactor MinimalGraph",
          "module": "Data.Reactor.MinimalGraph",
          "name": "MinimalGraph",
          "package": "reaction-logic",
          "partial": "Minimal Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-MinimalGraph.html#t:MinimalGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.MinimalGraph",
          "name": "MinimalGraph",
          "package": "reaction-logic",
          "signature": "MinimalGraph",
          "source": "src/Data-Reactor-MinimalGraph.html#MinimalGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor MinimalGraph",
          "module": "Data.Reactor.MinimalGraph",
          "name": "MinimalGraph",
          "package": "reaction-logic",
          "partial": "Minimal Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-MinimalGraph.html#v:MinimalGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eappend a new value given its minimalendencies. Return its index\n\u003c/p\u003e",
          "module": "Data.Reactor.MinimalGraph",
          "name": "add",
          "package": "reaction-logic",
          "signature": "(a, [Index]) -\u003e (Index, MinimalGraph a)",
          "source": "src/Data-Reactor-MinimalGraph.html#MinimalGraph",
          "type": "function"
        },
        "index": {
          "description": "append new value given its minimalendencies Return its index",
          "hierarchy": "Data Reactor MinimalGraph",
          "module": "Data.Reactor.MinimalGraph",
          "name": "add",
          "normalized": "(a,[Index])-\u003e(Index,MinimalGraph a)",
          "package": "reaction-logic",
          "signature": "(a,[Index])-\u003e(Index,MinimalGraph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-MinimalGraph.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty minimal graph.\n\u003c/p\u003e",
          "module": "Data.Reactor.MinimalGraph",
          "name": "mkMinimalGraph",
          "package": "reaction-logic",
          "signature": "MinimalGraph a",
          "source": "src/Data-Reactor-MinimalGraph.html#mkMinimalGraph",
          "type": "function"
        },
        "index": {
          "description": "Create an empty minimal graph",
          "hierarchy": "Data Reactor MinimalGraph",
          "module": "Data.Reactor.MinimalGraph",
          "name": "mkMinimalGraph",
          "package": "reaction-logic",
          "partial": "Minimal Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-MinimalGraph.html#v:mkMinimalGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.MinimalGraph",
          "name": "prop_data_reactor_minimalgraph",
          "package": "reaction-logic",
          "signature": "Gen Bool",
          "source": "src/Data-Reactor-MinimalGraph.html#prop_data_reactor_minimalgraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor MinimalGraph",
          "module": "Data.Reactor.MinimalGraph",
          "name": "prop_data_reactor_minimalgraph",
          "package": "reaction-logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-MinimalGraph.html#v:prop_data_reactor_minimalgraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epossibly reduce the object as to contain only the subgraph\n\u003c/p\u003e",
          "module": "Data.Reactor.MinimalGraph",
          "name": "resize",
          "package": "reaction-logic",
          "signature": "[Index] -\u003e Maybe (MinimalGraph a)",
          "source": "src/Data-Reactor-MinimalGraph.html#MinimalGraph",
          "type": "function"
        },
        "index": {
          "description": "possibly reduce the object as to contain only the subgraph",
          "hierarchy": "Data Reactor MinimalGraph",
          "module": "Data.Reactor.MinimalGraph",
          "name": "resize",
          "normalized": "[Index]-\u003eMaybe(MinimalGraph a)",
          "package": "reaction-logic",
          "signature": "[Index]-\u003eMaybe(MinimalGraph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-MinimalGraph.html#v:resize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelements in the graph\n\u003c/p\u003e",
          "module": "Data.Reactor.MinimalGraph",
          "name": "values",
          "package": "reaction-logic",
          "signature": "[a]",
          "source": "src/Data-Reactor-MinimalGraph.html#MinimalGraph",
          "type": "function"
        },
        "index": {
          "description": "elements in the graph",
          "hierarchy": "Data Reactor MinimalGraph",
          "module": "Data.Reactor.MinimalGraph",
          "name": "values",
          "normalized": "[a]",
          "package": "reaction-logic",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-MinimalGraph.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperational values wrap reactions with some historical tag. Index is taken from \u003ca\u003eData.Reactor.MinimalGraph\u003c/a\u003e and is a key to an happened External event.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Reactor.Operational",
          "name": "Operational",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Operational.html",
          "type": "module"
        },
        "index": {
          "description": "Operational values wrap reactions with some historical tag Index is taken from Data.Reactor.MinimalGraph and is key to an happened External event",
          "hierarchy": "Data Reactor Operational",
          "module": "Data.Reactor.Operational",
          "name": "Operational",
          "package": "reaction-logic",
          "partial": "Operational",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Operational.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eReaction\u003c/a\u003e\u003c/code\u003e contextualized with its history.\n\u003c/p\u003e",
          "module": "Data.Reactor.Operational",
          "name": "Operational",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Operational.html#Operational",
          "type": "data"
        },
        "index": {
          "description": "Reaction contextualized with its history",
          "hierarchy": "Data Reactor Operational",
          "module": "Data.Reactor.Operational",
          "name": "Operational",
          "package": "reaction-logic",
          "partial": "Operational",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Operational.html#t:Operational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operational transformer. For reactions to react we store the index to external event and the actual internal event in the reader and store the new events produced by reactions in the writer\n\u003c/p\u003e",
          "module": "Data.Reactor.Operational",
          "name": "OperationalLayer",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Operational.html#OperationalLayer",
          "type": "type"
        },
        "index": {
          "description": "The operational transformer For reactions to react we store the index to external event and the actual internal event in the reader and store the new events produced by reactions in the writer",
          "hierarchy": "Data Reactor Operational",
          "module": "Data.Reactor.Operational",
          "name": "OperationalLayer",
          "package": "reaction-logic",
          "partial": "Operational Layer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Operational.html#t:OperationalLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Operational",
          "name": "Operational",
          "package": "reaction-logic",
          "signature": "Operational",
          "source": "src/Data-Reactor-Operational.html#Operational",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Operational",
          "module": "Data.Reactor.Operational",
          "name": "Operational",
          "package": "reaction-logic",
          "partial": "Operational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Operational.html#v:Operational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean index to the event that killed the reaction or the alive reaction\n\u003c/p\u003e",
          "module": "Data.Reactor.Operational",
          "name": "alive",
          "package": "reaction-logic",
          "signature": "Either Index (Reaction m)",
          "source": "src/Data-Reactor-Operational.html#Operational",
          "type": "function"
        },
        "index": {
          "description": "an index to the event that killed the reaction or the alive reaction",
          "hierarchy": "Data Reactor Operational",
          "module": "Data.Reactor.Operational",
          "name": "alive",
          "package": "reaction-logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Operational.html#v:alive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing if the reaction is a base reaction  or just an index to the contextualized event which borned it\n\u003c/p\u003e",
          "module": "Data.Reactor.Operational",
          "name": "borned",
          "package": "reaction-logic",
          "signature": "Maybe Index",
          "source": "src/Data-Reactor-Operational.html#Operational",
          "type": "function"
        },
        "index": {
          "description": "Nothing if the reaction is base reaction or just an index to the contextualized event which borned it",
          "hierarchy": "Data Reactor Operational",
          "module": "Data.Reactor.Operational",
          "name": "borned",
          "package": "reaction-logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Operational.html#v:borned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePruned object builder for \u003ccode\u003e\u003ca\u003eOperational\u003c/a\u003e\u003c/code\u003e values \n\u003c/p\u003e",
          "module": "Data.Reactor.Operational",
          "name": "mkOperationalPruned",
          "package": "reaction-logic",
          "signature": "Operational m-\u003e Pruned (OperationalLayer m) (Maybe Serial, [Index])",
          "type": "function"
        },
        "index": {
          "description": "Pruned object builder for Operational values",
          "hierarchy": "Data Reactor Operational",
          "module": "Data.Reactor.Operational",
          "name": "mkOperationalPruned",
          "normalized": "Operational a-\u003ePruned(OperationalLayer a)(Maybe Serial,[Index])",
          "package": "reaction-logic",
          "partial": "Operational Pruned",
          "signature": "Operational m-\u003ePruned(OperationalLayer m)(Maybe Serial,[Index])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Operational.html#v:mkOperationalPruned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Pruned",
          "name": "Pruned",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Pruned.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Reactor Pruned",
          "module": "Data.Reactor.Pruned",
          "name": "Pruned",
          "package": "reaction-logic",
          "partial": "Pruned",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Pruned.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pruned object keeps a pruned tree of values\n\u003c/p\u003e",
          "module": "Data.Reactor.Pruned",
          "name": "Pruned",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Pruned.html#Pruned",
          "type": "data"
        },
        "index": {
          "description": "pruned object keeps pruned tree of values",
          "hierarchy": "Data Reactor Pruned",
          "module": "Data.Reactor.Pruned",
          "name": "Pruned",
          "package": "reaction-logic",
          "partial": "Pruned",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Pruned.html#t:Pruned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Pruned",
          "name": "Pruned",
          "package": "reaction-logic",
          "signature": "Pruned",
          "source": "src/Data-Reactor-Pruned.html#Pruned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Pruned",
          "module": "Data.Reactor.Pruned",
          "name": "Pruned",
          "package": "reaction-logic",
          "partial": "Pruned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Pruned.html#v:Pruned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexpand the pruned , Nothing if nothing in it at the end\n\u003c/p\u003e",
          "module": "Data.Reactor.Pruned",
          "name": "expand",
          "package": "reaction-logic",
          "signature": "m (Maybe (Pruned m b))",
          "source": "src/Data-Reactor-Pruned.html#Pruned",
          "type": "function"
        },
        "index": {
          "description": "expand the pruned Nothing if nothing in it at the end",
          "hierarchy": "Data Reactor Pruned",
          "module": "Data.Reactor.Pruned",
          "name": "expand",
          "package": "reaction-logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Pruned.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuild a pruned given some functions and a value \n\u003c/p\u003e",
          "module": "Data.Reactor.Pruned",
          "name": "mkPruned",
          "package": "reaction-logic",
          "signature": "(a -\u003e m (a, [a]))-\u003e (a -\u003e Bool)-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e b)-\u003e a-\u003e Pruned m b",
          "type": "function"
        },
        "index": {
          "description": "build pruned given some functions and value",
          "hierarchy": "Data Reactor Pruned",
          "module": "Data.Reactor.Pruned",
          "name": "mkPruned",
          "normalized": "(a-\u003eb(a,[a]))-\u003e(a-\u003eBool)-\u003e(a-\u003ec-\u003ea)-\u003e(a-\u003ec)-\u003ea-\u003ePruned b c",
          "package": "reaction-logic",
          "partial": "Pruned",
          "signature": "(a-\u003em(a,[a]))-\u003e(a-\u003eBool)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb)-\u003ea-\u003ePruned m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Pruned.html#v:mkPruned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Pruned",
          "name": "prop_data_reactor_pruned",
          "package": "reaction-logic",
          "signature": "Gen Bool",
          "source": "src/Data-Reactor-Pruned.html#prop_data_reactor_pruned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Pruned",
          "module": "Data.Reactor.Pruned",
          "name": "prop_data_reactor_pruned",
          "package": "reaction-logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Pruned.html#v:prop_data_reactor_pruned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erestore the pruned given it's values\n\u003c/p\u003e",
          "module": "Data.Reactor.Pruned",
          "name": "restore",
          "package": "reaction-logic",
          "signature": "[b] -\u003e Pruned m b",
          "source": "src/Data-Reactor-Pruned.html#Pruned",
          "type": "function"
        },
        "index": {
          "description": "restore the pruned given it values",
          "hierarchy": "Data Reactor Pruned",
          "module": "Data.Reactor.Pruned",
          "name": "restore",
          "normalized": "[a]-\u003ePruned b a",
          "package": "reaction-logic",
          "signature": "[b]-\u003ePruned m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Pruned.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecollect the pruned values\n\u003c/p\u003e",
          "module": "Data.Reactor.Pruned",
          "name": "serialize",
          "package": "reaction-logic",
          "signature": "[b]",
          "source": "src/Data-Reactor-Pruned.html#Pruned",
          "type": "function"
        },
        "index": {
          "description": "collect the pruned values",
          "hierarchy": "Data Reactor Pruned",
          "module": "Data.Reactor.Pruned",
          "name": "serialize",
          "normalized": "[a]",
          "package": "reaction-logic",
          "signature": "[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Pruned.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReaction box and stepping function. \u003ccode\u003e\u003ca\u003eReaction\u003c/a\u003e\u003c/code\u003es leave the monad parameter free for the programmer. Around m a state transformer gives them the chance to use per reaction state.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "Reaction",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Reaction.html",
          "type": "module"
        },
        "index": {
          "description": "Reaction box and stepping function Reaction leave the monad parameter free for the programmer Around state transformer gives them the chance to use per reaction state",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "Reaction",
          "package": "reaction-logic",
          "partial": "Reaction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal event, it must be serializable\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "External",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Reaction.html#External",
          "type": "type"
        },
        "index": {
          "description": "External event it must be serializable",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "External",
          "package": "reaction-logic",
          "partial": "External",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#t:External"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal event, don't need to be serializable\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "Internal",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Reaction.html#Internal",
          "type": "type"
        },
        "index": {
          "description": "Internal event don need to be serializable",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "Internal",
          "package": "reaction-logic",
          "partial": "Internal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#t:Internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Reaction object is a container for a reaction. It's free in the type of value to react and in its internal state.\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "Reaction",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Reaction.html#Reaction",
          "type": "data"
        },
        "index": {
          "description": "Reaction object is container for reaction It free in the type of value to react and in its internal state",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "Reaction",
          "package": "reaction-logic",
          "partial": "Reaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#t:Reaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal state serializations, it must be serializable\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "Recover",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Reaction.html#Recover",
          "type": "type"
        },
        "index": {
          "description": "Internal state serializations it must be serializable",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "Recover",
          "package": "reaction-logic",
          "partial": "Recover",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#t:Recover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value reactions compute.\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "Response",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Reaction.html#Response",
          "type": "data"
        },
        "index": {
          "description": "The value reactions compute",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "Response",
          "package": "reaction-logic",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Reaction",
          "name": "Reaction",
          "package": "reaction-logic",
          "signature": "Reaction",
          "source": "src/Data-Reactor-Reaction.html#Reaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "Reaction",
          "package": "reaction-logic",
          "partial": "Reaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#v:Reaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Reaction",
          "name": "Response",
          "package": "reaction-logic",
          "signature": "Response",
          "source": "src/Data-Reactor-Reaction.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "Response",
          "package": "reaction-logic",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue to continue the reaction, or False if reaction if dead\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "continue",
          "package": "reaction-logic",
          "signature": "Bool",
          "source": "src/Data-Reactor-Reaction.html#Response",
          "type": "function"
        },
        "index": {
          "description": "True to continue the reaction or False if reaction if dead",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "continue",
          "package": "reaction-logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esome events to broadcast now as effects of the reaction\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "newevents",
          "package": "reaction-logic",
          "signature": "[Internal]",
          "source": "src/Data-Reactor-Reaction.html#Response",
          "type": "function"
        },
        "index": {
          "description": "some events to broadcast now as effects of the reaction",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "newevents",
          "normalized": "[Internal]",
          "package": "reaction-logic",
          "signature": "[Internal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#v:newevents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list of new reactions, just borned ready for the next event\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "newreas",
          "package": "reaction-logic",
          "signature": "[Reaction m]",
          "source": "src/Data-Reactor-Reaction.html#Response",
          "type": "function"
        },
        "index": {
          "description": "list of new reactions just borned ready for the next event",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "newreas",
          "normalized": "[Reaction a]",
          "package": "reaction-logic",
          "signature": "[Reaction m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#v:newreas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Reaction",
          "name": "prop_data_reactor_reaction",
          "package": "reaction-logic",
          "signature": "Gen Bool",
          "source": "src/Data-Reactor-Reaction.html#prop_data_reactor_reaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "prop_data_reactor_reaction",
          "package": "reaction-logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#v:prop_data_reactor_reaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reaction to an event of type \u003ccode\u003ea\u003c/code\u003e. It can modify its individual state in the outer monad layer. There are no constraint on the inner monad.\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "reaction",
          "package": "reaction-logic",
          "signature": "a -\u003e StateT b m (Response m)",
          "source": "src/Data-Reactor-Reaction.html#Reaction",
          "type": "function"
        },
        "index": {
          "description": "The reaction to an event of type It can modify its individual state in the outer monad layer There are no constraint on the inner monad",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "reaction",
          "normalized": "a-\u003eStateT b c(Response c)",
          "package": "reaction-logic",
          "signature": "a-\u003eStateT b m(Response m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#v:reaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal state of the reaction. Upon creation it must contatin the initial state.\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "reastate",
          "package": "reaction-logic",
          "signature": "b",
          "source": "src/Data-Reactor-Reaction.html#Reaction",
          "type": "function"
        },
        "index": {
          "description": "Internal state of the reaction Upon creation it must contatin the initial state",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "reastate",
          "package": "reaction-logic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#v:reastate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry a reaction of a Reaction, given an event in an Untyped box. If the event is not of the right type, the result is Nothing, otherwise an action in the monad m returning a modified \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e, with Bool mapped to Maybe (Reaction m).\n\u003c/p\u003e",
          "module": "Data.Reactor.Reaction",
          "name": "step",
          "package": "reaction-logic",
          "signature": "Reaction m-\u003e Internal-\u003e Maybe (m ([Reaction m], [Internal], Maybe (Reaction m)))",
          "type": "function"
        },
        "index": {
          "description": "Try reaction of Reaction given an event in an Untyped box If the event is not of the right type the result is Nothing otherwise an action in the monad returning modified Response with Bool mapped to Maybe Reaction",
          "hierarchy": "Data Reactor Reaction",
          "module": "Data.Reactor.Reaction",
          "name": "step",
          "normalized": "Reaction a-\u003eInternal-\u003eMaybe(a([Reaction a],[Internal],Maybe(Reaction a)))",
          "package": "reaction-logic",
          "signature": "Reaction m-\u003eInternal-\u003eMaybe(m([Reaction m],[Internal],Maybe(Reaction m)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Reaction.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Serialization",
          "name": "Serialization",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Serialization.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Reactor Serialization",
          "module": "Data.Reactor.Serialization",
          "name": "Serialization",
          "package": "reaction-logic",
          "partial": "Serialization",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Serialization.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epassive serialization of a reactor\n\u003c/p\u003e",
          "module": "Data.Reactor.Serialization",
          "name": "SerialReactor",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Serialization.html#SerialReactor",
          "type": "type"
        },
        "index": {
          "description": "passive serialization of reactor",
          "hierarchy": "Data Reactor Serialization",
          "module": "Data.Reactor.Serialization",
          "name": "SerialReactor",
          "package": "reaction-logic",
          "partial": "Serial Reactor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Serialization.html#t:SerialReactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eactive serialization of a reactor\n\u003c/p\u003e",
          "module": "Data.Reactor.Serialization",
          "name": "Serialization",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Serialization.html#Serialization",
          "type": "type"
        },
        "index": {
          "description": "active serialization of reactor",
          "hierarchy": "Data Reactor Serialization",
          "module": "Data.Reactor.Serialization",
          "name": "Serialization",
          "package": "reaction-logic",
          "partial": "Serialization",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Serialization.html#t:Serialization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea SerialReactor parser. It tries to fix the existentials, in the Recover and External boxes. Possible templates must be given for the task.\n\u003c/p\u003e",
          "module": "Data.Reactor.Serialization",
          "name": "parseSerialReactor",
          "package": "reaction-logic",
          "signature": "ParseSerial (SerialReactor c)",
          "source": "src/Data-Reactor-Serialization.html#parseSerialReactor",
          "type": "function"
        },
        "index": {
          "description": "SerialReactor parser It tries to fix the existentials in the Recover and External boxes Possible templates must be given for the task",
          "hierarchy": "Data Reactor Serialization",
          "module": "Data.Reactor.Serialization",
          "name": "parseSerialReactor",
          "package": "reaction-logic",
          "partial": "Serial Reactor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Serialization.html#v:parseSerialReactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Untypeds",
          "name": "Untypeds",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Untypeds.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Reactor Untypeds",
          "module": "Data.Reactor.Untypeds",
          "name": "Untypeds",
          "package": "reaction-logic",
          "partial": "Untypeds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Untypeds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Untypeds",
          "name": "ParseSerial",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Untypeds.html#ParseSerial",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Reactor Untypeds",
          "module": "Data.Reactor.Untypeds",
          "name": "ParseSerial",
          "package": "reaction-logic",
          "partial": "Parse Serial",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Untypeds.html#t:ParseSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA box to contain a serializable \n\u003c/p\u003e",
          "module": "Data.Reactor.Untypeds",
          "name": "Serial",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Untypeds.html#Serial",
          "type": "data"
        },
        "index": {
          "description": "box to contain serializable",
          "hierarchy": "Data Reactor Untypeds",
          "module": "Data.Reactor.Untypeds",
          "name": "Serial",
          "package": "reaction-logic",
          "partial": "Serial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Untypeds.html#t:Serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA box to contain any value \n\u003c/p\u003e",
          "module": "Data.Reactor.Untypeds",
          "name": "Untyped",
          "package": "reaction-logic",
          "source": "src/Data-Reactor-Untypeds.html#Untyped",
          "type": "data"
        },
        "index": {
          "description": "box to contain any value",
          "hierarchy": "Data Reactor Untypeds",
          "module": "Data.Reactor.Untypeds",
          "name": "Untyped",
          "package": "reaction-logic",
          "partial": "Untyped",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Untypeds.html#t:Untyped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Untypeds",
          "name": "Serial",
          "package": "reaction-logic",
          "signature": "Serial b",
          "source": "src/Data-Reactor-Untypeds.html#Serial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Untypeds",
          "module": "Data.Reactor.Untypeds",
          "name": "Serial",
          "package": "reaction-logic",
          "partial": "Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Untypeds.html#v:Serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Untypeds",
          "name": "Untyped",
          "package": "reaction-logic",
          "signature": "Untyped b",
          "source": "src/Data-Reactor-Untypeds.html#Untyped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Untypeds",
          "module": "Data.Reactor.Untypeds",
          "name": "Untyped",
          "package": "reaction-logic",
          "partial": "Untyped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Untypeds.html#v:Untyped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Untypeds",
          "name": "casting",
          "package": "reaction-logic",
          "signature": "(a -\u003e b) -\u003e c -\u003e Maybe b",
          "source": "src/Data-Reactor-Untypeds.html#casting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Untypeds",
          "module": "Data.Reactor.Untypeds",
          "name": "casting",
          "normalized": "(a-\u003eb)-\u003ec-\u003eMaybe b",
          "package": "reaction-logic",
          "signature": "(a-\u003eb)-\u003ec-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Untypeds.html#v:casting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse a string into a Serial box. It needs some hints on which types could go inside the box\n\u003c/p\u003e",
          "module": "Data.Reactor.Untypeds",
          "name": "parseSerial",
          "package": "reaction-logic",
          "signature": "[Serial] -\u003e Serial -\u003e Maybe Serial",
          "source": "src/Data-Reactor-Untypeds.html#parseSerial",
          "type": "function"
        },
        "index": {
          "description": "Try to parse string into Serial box It needs some hints on which types could go inside the box",
          "hierarchy": "Data Reactor Untypeds",
          "module": "Data.Reactor.Untypeds",
          "name": "parseSerial",
          "normalized": "[Serial]-\u003eSerial-\u003eMaybe Serial",
          "package": "reaction-logic",
          "partial": "Serial",
          "signature": "[Serial]-\u003eSerial-\u003eMaybe Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Untypeds.html#v:parseSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor.Untypeds",
          "name": "toUntyped",
          "package": "reaction-logic",
          "signature": "Serial -\u003e Untyped",
          "source": "src/Data-Reactor-Untypeds.html#toUntyped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor Untypeds",
          "module": "Data.Reactor.Untypeds",
          "name": "toUntyped",
          "normalized": "Serial-\u003eUntyped",
          "package": "reaction-logic",
          "partial": "Untyped",
          "signature": "Serial-\u003eUntyped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor-Untypeds.html#v:toUntyped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reactor is an object to hold a bunch of reactions, which create other reactions and events and respond to events.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Reactor",
          "name": "Reactor",
          "package": "reaction-logic",
          "source": "src/Data-Reactor.html",
          "type": "module"
        },
        "index": {
          "description": "reactor is an object to hold bunch of reactions which create other reactions and events and respond to events",
          "hierarchy": "Data Reactor",
          "module": "Data.Reactor",
          "name": "Reactor",
          "package": "reaction-logic",
          "partial": "Reactor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reactor object. Once created this closures control its lifecycle. Updaters return Nothing when the reactor is wrapped around no reactions.\n\u003c/p\u003e",
          "module": "Data.Reactor",
          "name": "Reactor",
          "package": "reaction-logic",
          "source": "src/Data-Reactor.html#Reactor",
          "type": "data"
        },
        "index": {
          "description": "The reactor object Once created this closures control its lifecycle Updaters return Nothing when the reactor is wrapped around no reactions",
          "hierarchy": "Data Reactor",
          "module": "Data.Reactor",
          "name": "Reactor",
          "package": "reaction-logic",
          "partial": "Reactor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor.html#t:Reactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reactor",
          "name": "Reactor",
          "package": "reaction-logic",
          "signature": "Reactor",
          "source": "src/Data-Reactor.html#Reactor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reactor",
          "module": "Data.Reactor",
          "name": "Reactor",
          "package": "reaction-logic",
          "partial": "Reactor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor.html#v:Reactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate itself digesting a new event\n\u003c/p\u003e",
          "module": "Data.Reactor",
          "name": "insertExternals",
          "package": "reaction-logic",
          "signature": "[External] -\u003e m (Maybe (Reactor m c))",
          "source": "src/Data-Reactor.html#Reactor",
          "type": "function"
        },
        "index": {
          "description": "Update itself digesting new event",
          "hierarchy": "Data Reactor",
          "module": "Data.Reactor",
          "name": "insertExternals",
          "normalized": "[External]-\u003ea(Maybe(Reactor a b))",
          "package": "reaction-logic",
          "partial": "Externals",
          "signature": "[External]-\u003em(Maybe(Reactor m c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor.html#v:insertExternals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuild a reactor object  from a list of basic reactions\n\u003c/p\u003e",
          "module": "Data.Reactor",
          "name": "mkReactor",
          "package": "reaction-logic",
          "signature": "[Reaction m]-\u003e Reactor m c",
          "type": "function"
        },
        "index": {
          "description": "build reactor object from list of basic reactions",
          "hierarchy": "Data Reactor",
          "module": "Data.Reactor",
          "name": "mkReactor",
          "normalized": "[Reaction a]-\u003eReactor a b",
          "package": "reaction-logic",
          "partial": "Reactor",
          "signature": "[Reaction m]-\u003eReactor m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor.html#v:mkReactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegenerate itself from a serialization\n\u003c/p\u003e",
          "module": "Data.Reactor",
          "name": "restoreReactor",
          "package": "reaction-logic",
          "signature": "SerialReactor c -\u003e m (Maybe (Reactor m c))",
          "source": "src/Data-Reactor.html#Reactor",
          "type": "function"
        },
        "index": {
          "description": "Regenerate itself from serialization",
          "hierarchy": "Data Reactor",
          "module": "Data.Reactor",
          "name": "restoreReactor",
          "normalized": "SerialReactor a-\u003eb(Maybe(Reactor b a))",
          "package": "reaction-logic",
          "partial": "Reactor",
          "signature": "SerialReactor c-\u003em(Maybe(Reactor m c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor.html#v:restoreReactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize its internals, for later restoring.\n\u003c/p\u003e",
          "module": "Data.Reactor",
          "name": "serializeReactor",
          "package": "reaction-logic",
          "signature": "SerialReactor c",
          "source": "src/Data-Reactor.html#Reactor",
          "type": "function"
        },
        "index": {
          "description": "Serialize its internals for later restoring",
          "hierarchy": "Data Reactor",
          "module": "Data.Reactor",
          "name": "serializeReactor",
          "package": "reaction-logic",
          "partial": "Reactor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reaction-logic/docs/Data-Reactor.html#v:serializeReactor"
      }
    }
  ]
]