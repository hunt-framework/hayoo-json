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
        "word": "fgl-extras-decompositions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEar decomposition of a graph.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "Ear",
          "package": "fgl-extras-decompositions",
          "source": "src/Data-Graph-Inductive-Query-Ear.html",
          "type": "module"
        },
        "index": {
          "description": "Ear decomposition of graph",
          "hierarchy": "Data Graph Inductive Query Ear",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "Ear",
          "package": "fgl-extras-decompositions",
          "partial": "Ear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl-extras-decompositions/docs/Data-Graph-Inductive-Query-Ear.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eears\u003c/a\u003e\u003c/code\u003e function takes a graph with no node or edge annotation and\n produces an ear decomposition. Each edge is annotated with a weight. Edges\n with the same weight are in the same ear.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "ears",
          "package": "fgl-extras-decompositions",
          "signature": "gr () () -\u003e gr () Int",
          "source": "src/Data-Graph-Inductive-Query-Ear.html#ears",
          "type": "function"
        },
        "index": {
          "description": "The ears function takes graph with no node or edge annotation and produces an ear decomposition Each edge is annotated with weight Edges with the same weight are in the same ear",
          "hierarchy": "Data Graph Inductive Query Ear",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "ears",
          "normalized": "a()()-\u003ea()Int",
          "package": "fgl-extras-decompositions",
          "signature": "gr()()-\u003egr()Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-extras-decompositions/docs/Data-Graph-Inductive-Query-Ear.html#v:ears"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "lca",
          "package": "fgl-extras-decompositions",
          "signature": "[[Node]] -\u003e LEdge () -\u003e LEdge Int",
          "source": "src/Data-Graph-Inductive-Query-Ear.html#lca",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Ear",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "lca",
          "normalized": "[[Node]]-\u003eLEdge()-\u003eLEdge Int",
          "package": "fgl-extras-decompositions",
          "signature": "[[Node]]-\u003eLEdge()-\u003eLEdge Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-extras-decompositions/docs/Data-Graph-Inductive-Query-Ear.html#v:lca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "sel3",
          "package": "fgl-extras-decompositions",
          "signature": "(t, t1, t2) -\u003e t2",
          "source": "src/Data-Graph-Inductive-Query-Ear.html#sel3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Ear",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "sel3",
          "normalized": "(a,a,a)-\u003ea",
          "package": "fgl-extras-decompositions",
          "signature": "(t,t,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-extras-decompositions/docs/Data-Graph-Inductive-Query-Ear.html#v:sel3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "shortestPaths",
          "package": "fgl-extras-decompositions",
          "signature": "Gr () Int -\u003e Edge -\u003e LEdge Int",
          "source": "src/Data-Graph-Inductive-Query-Ear.html#shortestPaths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Ear",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "shortestPaths",
          "normalized": "Gr()Int-\u003eEdge-\u003eLEdge Int",
          "package": "fgl-extras-decompositions",
          "partial": "Paths",
          "signature": "Gr()Int-\u003eEdge-\u003eLEdge Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-extras-decompositions/docs/Data-Graph-Inductive-Query-Ear.html#v:shortestPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "swap12",
          "package": "fgl-extras-decompositions",
          "signature": "(t1, t, t2) -\u003e (t, t1, t2)",
          "source": "src/Data-Graph-Inductive-Query-Ear.html#swap12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Ear",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "swap12",
          "normalized": "(a,a,a)-\u003e(a,a,a)",
          "package": "fgl-extras-decompositions",
          "signature": "(t,t,t)-\u003e(t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-extras-decompositions/docs/Data-Graph-Inductive-Query-Ear.html#v:swap12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "treeToEdges",
          "package": "fgl-extras-decompositions",
          "signature": "Tree Node -\u003e [Edge]",
          "source": "src/Data-Graph-Inductive-Query-Ear.html#treeToEdges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Ear",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "treeToEdges",
          "normalized": "Tree Node-\u003e[Edge]",
          "package": "fgl-extras-decompositions",
          "partial": "To Edges",
          "signature": "Tree Node-\u003e[Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-extras-decompositions/docs/Data-Graph-Inductive-Query-Ear.html#v:treeToEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "treeToPaths",
          "package": "fgl-extras-decompositions",
          "signature": "Tree Node -\u003e [[Node]]",
          "source": "src/Data-Graph-Inductive-Query-Ear.html#treeToPaths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Ear",
          "module": "Data.Graph.Inductive.Query.Ear",
          "name": "treeToPaths",
          "normalized": "Tree Node-\u003e[[Node]]",
          "package": "fgl-extras-decompositions",
          "partial": "To Paths",
          "signature": "Tree Node-\u003e[[Node]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-extras-decompositions/docs/Data-Graph-Inductive-Query-Ear.html#v:treeToPaths"
      }
    }
  ]
]