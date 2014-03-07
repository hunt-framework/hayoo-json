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
        "word": "data-reify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the shared definition of a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e in Data.Reify.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Reify.Graph",
          "name": "Graph",
          "package": "data-reify",
          "source": "src/Data-Reify-Graph.html",
          "type": "module"
        },
        "index": {
          "description": "This is the shared definition of Graph in Data.Reify",
          "hierarchy": "Data Reify Graph",
          "module": "Data.Reify.Graph",
          "name": "Graph",
          "package": "data-reify",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-reify/docs/Data-Reify-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e is a basic graph structure over nodes of the higher kind \u003ccode\u003ee\u003c/code\u003e, with a single root.\n There is an assumption that there is no Unique used in a node which does not have a \n corresponding entry is the association list.\n The idea with this structure is that it is trivial to convert into an \u003ccode\u003eArray\u003c/code\u003e, \n \u003ccode\u003eIntMap\u003c/code\u003e, or into a Martin Erwig's Functional Graph, as required.   \n\u003c/p\u003e",
          "module": "Data.Reify.Graph",
          "name": "Graph",
          "package": "data-reify",
          "source": "src/Data-Reify-Graph.html#Graph",
          "type": "data"
        },
        "index": {
          "description": "Graph is basic graph structure over nodes of the higher kind with single root There is an assumption that there is no Unique used in node which does not have corresponding entry is the association list The idea with this structure is that it is trivial to convert into an Array IntMap or into Martin Erwig Functional Graph as required",
          "hierarchy": "Data Reify Graph",
          "module": "Data.Reify.Graph",
          "name": "Graph",
          "package": "data-reify",
          "partial": "Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-reify/docs/Data-Reify-Graph.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reify.Graph",
          "name": "Unique",
          "package": "data-reify",
          "source": "src/Data-Reify-Graph.html#Unique",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Reify Graph",
          "module": "Data.Reify.Graph",
          "name": "Unique",
          "package": "data-reify",
          "partial": "Unique",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-reify/docs/Data-Reify-Graph.html#t:Unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reify.Graph",
          "name": "Graph",
          "package": "data-reify",
          "signature": "Graph [(Unique, e Unique)] Unique",
          "source": "src/Data-Reify-Graph.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reify Graph",
          "module": "Data.Reify.Graph",
          "name": "Graph",
          "normalized": "Graph[(Unique,a Unique)]Unique",
          "package": "data-reify",
          "partial": "Graph",
          "signature": "Graph[(Unique,e Unique)]Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-reify/docs/Data-Reify-Graph.html#v:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reify",
          "name": "Reify",
          "package": "data-reify",
          "source": "src/Data-Reify.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Reify",
          "module": "Data.Reify",
          "name": "Reify",
          "package": "data-reify",
          "partial": "Reify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-reify/docs/Data-Reify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMuRef\u003c/a\u003e\u003c/code\u003e is a class that provided a way to reference into a specific type,\n and a way to map over the deferenced internals.\n\u003c/p\u003e",
          "module": "Data.Reify",
          "name": "MuRef",
          "package": "data-reify",
          "source": "src/Data-Reify.html#MuRef",
          "type": "class"
        },
        "index": {
          "description": "MuRef is class that provided way to reference into specific type and way to map over the deferenced internals",
          "hierarchy": "Data Reify",
          "module": "Data.Reify",
          "name": "MuRef",
          "package": "data-reify",
          "partial": "Mu Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-reify/docs/Data-Reify.html#t:MuRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reify",
          "name": "mapDeRef",
          "package": "data-reify",
          "signature": "b -\u003e f u) -\u003e a -\u003e f (DeRef a u)",
          "source": "src/Data-Reify.html#mapDeRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Reify",
          "module": "Data.Reify",
          "name": "mapDeRef",
          "normalized": "a-\u003eb c)-\u003ed-\u003eb(DeRef d c)",
          "package": "data-reify",
          "partial": "De Ref",
          "signature": "b-\u003ef u)-\u003ea-\u003ef(DeRef a u)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-reify/docs/Data-Reify.html#v:mapDeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereifyGraph\u003c/a\u003e\u003c/code\u003e takes a data structure that admits \u003ccode\u003e\u003ca\u003eMuRef\u003c/a\u003e\u003c/code\u003e, and returns a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e that contains\n the dereferenced nodes, with their children as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e rather than recursive values.\n\u003c/p\u003e",
          "module": "Data.Reify",
          "name": "reifyGraph",
          "package": "data-reify",
          "signature": "s -\u003e IO (Graph (DeRef s))",
          "source": "src/Data-Reify.html#reifyGraph",
          "type": "function"
        },
        "index": {
          "description": "reifyGraph takes data structure that admits MuRef and returns Graph that contains the dereferenced nodes with their children as Int rather than recursive values",
          "hierarchy": "Data Reify",
          "module": "Data.Reify",
          "name": "reifyGraph",
          "normalized": "a-\u003eIO(Graph(DeRef a))",
          "package": "data-reify",
          "partial": "Graph",
          "signature": "s-\u003eIO(Graph(DeRef s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-reify/docs/Data-Reify.html#v:reifyGraph"
      }
    }
  ]
]