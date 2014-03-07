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
        "word": "fault-tree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FaultTree",
          "name": "FaultTree",
          "package": "fault-tree",
          "source": "src/Language-FaultTree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "FaultTree",
          "package": "fault-tree",
          "partial": "Fault Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event.\n\u003c/p\u003e",
          "module": "Language.FaultTree",
          "name": "Event",
          "package": "fault-tree",
          "source": "src/Language-FaultTree.html#Event",
          "type": "data"
        },
        "index": {
          "description": "An event",
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "Event",
          "package": "fault-tree",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical AND.\n\u003c/p\u003e",
          "module": "Language.FaultTree",
          "name": "And",
          "package": "fault-tree",
          "signature": "And [Event]",
          "source": "src/Language-FaultTree.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Logical AND",
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "And",
          "normalized": "And[Event]",
          "package": "fault-tree",
          "partial": "And",
          "signature": "And[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamed branch node.\n\u003c/p\u003e",
          "module": "Language.FaultTree",
          "name": "Branch",
          "package": "fault-tree",
          "signature": "Branch Name Event",
          "source": "src/Language-FaultTree.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Named branch node",
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "Branch",
          "package": "fault-tree",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeaf node.\n\u003c/p\u003e",
          "module": "Language.FaultTree",
          "name": "Leaf",
          "package": "fault-tree",
          "signature": "Leaf Name",
          "source": "src/Language-FaultTree.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Leaf node",
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "Leaf",
          "package": "fault-tree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical NOT.\n\u003c/p\u003e",
          "module": "Language.FaultTree",
          "name": "Not",
          "package": "fault-tree",
          "signature": "Not Event",
          "source": "src/Language-FaultTree.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Logical NOT",
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "Not",
          "package": "fault-tree",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical OR.\n\u003c/p\u003e",
          "module": "Language.FaultTree",
          "name": "Or",
          "package": "fault-tree",
          "signature": "Or [Event]",
          "source": "src/Language-FaultTree.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Logical OR",
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "Or",
          "normalized": "Or[Event]",
          "package": "fault-tree",
          "partial": "Or",
          "signature": "Or[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.FaultTree",
          "name": "cutsets",
          "package": "fault-tree",
          "signature": "FilePath -\u003e Int -\u003e Event -\u003e [Event] -\u003e IO ()",
          "source": "src/Language-FaultTree.html#cutsets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "cutsets",
          "normalized": "FilePath-\u003eInt-\u003eEvent-\u003e[Event]-\u003eIO()",
          "package": "fault-tree",
          "signature": "FilePath-\u003eInt-\u003eEvent-\u003e[Event]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#v:cutsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a Graphviz dot file from a set of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e (fault) trees.\n\u003c/p\u003e",
          "module": "Language.FaultTree",
          "name": "dot",
          "package": "fault-tree",
          "signature": "[Event] -\u003e String",
          "source": "src/Language-FaultTree.html#dot",
          "type": "function"
        },
        "index": {
          "description": "Render Graphviz dot file from set of Event fault trees",
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "dot",
          "normalized": "[Event]-\u003eString",
          "package": "fault-tree",
          "signature": "[Event]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical implication.\n\u003c/p\u003e",
          "module": "Language.FaultTree",
          "name": "imply",
          "package": "fault-tree",
          "signature": "Event -\u003e Event -\u003e Event",
          "source": "src/Language-FaultTree.html#imply",
          "type": "function"
        },
        "index": {
          "description": "Logical implication",
          "hierarchy": "Language FaultTree",
          "module": "Language.FaultTree",
          "name": "imply",
          "normalized": "Event-\u003eEvent-\u003eEvent",
          "package": "fault-tree",
          "signature": "Event-\u003eEvent-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fault-tree/docs/Language-FaultTree.html#v:imply"
      }
    }
  ]
]