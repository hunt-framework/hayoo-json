[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GraphSCC/docs/Data-Graph-SCC.html#",
      "description": {
        "fct-module": "Data.Graph.SCC",
        "fct-package": "GraphSCC",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-SCC.html",
        "fct-type": "module",
        "title": "SCC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph SCC",
        "module": "Data.Graph.SCC",
        "name": "SCC",
        "normalized": "",
        "package": "GraphSCC",
        "partial": "SCC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GraphSCC/docs/Data-Graph-SCC.html#v:scc",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the strongly connected components (SCCs) of the graph in\n O(\u003ca name=\"edges + \"/\u003evertices) time.  The resulting tuple contains:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A (reversed) topologically sorted list of SCCs.\n     Each SCCs is assigned a unique identifier of type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e An O(1) mapping from vertices in the original graph to the identifier\n     of their SCC.  This mapping will raise an \"out of bounds\"\n     exception if it is applied to integers that do not correspond to\n     vertices in the input graph.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function assumes that the adjacency lists in the original graph\n mention only nodes that are in the graph. Violating this assumption\n will result in \"out of bounds\" array exception.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.SCC",
        "fct-package": "GraphSCC",
        "fct-signature": "Graph -\u003e ([(Int, [Vertex])], Vertex -\u003e Int)",
        "fct-source": "src/Data-Graph-ArraySCC.html#scc",
        "fct-type": "function",
        "title": "scc"
      },
      "index": {
        "description": "Computes the strongly connected components SCCs of the graph in vertices time The resulting tuple contains reversed topologically sorted list of SCCs Each SCCs is assigned unique identifier of type Int An mapping from vertices in the original graph to the identifier of their SCC This mapping will raise an out of bounds exception if it is applied to integers that do not correspond to vertices in the input graph This function assumes that the adjacency lists in the original graph mention only nodes that are in the graph Violating this assumption will result in out of bounds array exception",
        "hierarchy": "Data Graph SCC",
        "module": "Data.Graph.SCC",
        "name": "scc",
        "normalized": "Graph-\u003e([(Int,[Vertex])],Vertex-\u003eInt)",
        "package": "GraphSCC",
        "partial": "",
        "signature": "Graph-\u003e([(Int,[Vertex])],Vertex-\u003eInt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GraphSCC/docs/Data-Graph-SCC.html#v:sccGraph",
      "description": {
        "fct-descr": "\u003cp\u003eQuotient a graph with the relation that relates vertices that\n belong to the same SCC.  The vertices in the new graph are the\n SCCs of the old graph, and there is an edge between two components,\n if there is an edge between any of their vertices.\n The entries in the resulting list are in reversed-topologically sorted:\n if v1 in C1 points to v2 in C2, then C1 will come before C2 in the list.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.SCC",
        "fct-package": "GraphSCC",
        "fct-signature": "Graph -\u003e [(SCC Int, Int, [Int])]",
        "fct-source": "src/Data-Graph-SCC.html#sccGraph",
        "fct-type": "function",
        "title": "sccGraph"
      },
      "index": {
        "description": "Quotient graph with the relation that relates vertices that belong to the same SCC The vertices in the new graph are the SCCs of the old graph and there is an edge between two components if there is an edge between any of their vertices The entries in the resulting list are in reversed-topologically sorted if v1 in C1 points to v2 in C2 then C1 will come before C2 in the list",
        "hierarchy": "Data Graph SCC",
        "module": "Data.Graph.SCC",
        "name": "sccGraph",
        "normalized": "Graph-\u003e[(SCC Int,Int,[Int])]",
        "package": "GraphSCC",
        "partial": "Graph",
        "signature": "Graph-\u003e[(SCC Int,Int,[Int])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GraphSCC/docs/Data-Graph-SCC.html#v:sccList",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the list of strongly connected components of a graph.\n The components are topologically sorted:\n if v1 in C1 points to v2 in C2, then C2 will come before C1 in the list.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.SCC",
        "fct-package": "GraphSCC",
        "fct-signature": "Graph -\u003e [SCC Vertex]",
        "fct-source": "src/Data-Graph-SCC.html#sccList",
        "fct-type": "function",
        "title": "sccList"
      },
      "index": {
        "description": "Compute the list of strongly connected components of graph The components are topologically sorted if v1 in C1 points to v2 in C2 then C2 will come before C1 in the list",
        "hierarchy": "Data Graph SCC",
        "module": "Data.Graph.SCC",
        "name": "sccList",
        "normalized": "Graph-\u003e[SCC Vertex]",
        "package": "GraphSCC",
        "partial": "List",
        "signature": "Graph-\u003e[SCC Vertex]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GraphSCC/docs/Data-Graph-SCC.html#v:sccListR",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the list of strongly connected components of a graph.\n Each component contains the adjecency information from the original graph.\n The components are topologically sorted:\n if v1 in C1 points to v2 in C2, then C2 will come before C1 in the list.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.SCC",
        "fct-package": "GraphSCC",
        "fct-signature": "Graph -\u003e [SCC (Vertex, [Vertex])]",
        "fct-source": "src/Data-Graph-SCC.html#sccListR",
        "fct-type": "function",
        "title": "sccListR"
      },
      "index": {
        "description": "Compute the list of strongly connected components of graph Each component contains the adjecency information from the original graph The components are topologically sorted if v1 in C1 points to v2 in C2 then C2 will come before C1 in the list",
        "hierarchy": "Data Graph SCC",
        "module": "Data.Graph.SCC",
        "name": "sccListR",
        "normalized": "Graph-\u003e[SCC(Vertex,[Vertex])]",
        "package": "GraphSCC",
        "partial": "List",
        "signature": "Graph-\u003e[SCC(Vertex,[Vertex])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GraphSCC/docs/Data-Graph-SCC.html#v:stronglyConnComp",
      "description": {
        "fct-module": "Data.Graph.SCC",
        "fct-package": "GraphSCC",
        "fct-signature": "[(node, key, [key])] -\u003e [SCC node]",
        "fct-source": "src/Data-Graph-SCC.html#stronglyConnComp",
        "fct-type": "function",
        "title": "stronglyConnComp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph SCC",
        "module": "Data.Graph.SCC",
        "name": "stronglyConnComp",
        "normalized": "[(a,b,[b])]-\u003e[SCC a]",
        "package": "GraphSCC",
        "partial": "Conn Comp",
        "signature": "[(node,key,[key])]-\u003e[SCC node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GraphSCC/docs/Data-Graph-SCC.html#v:stronglyConnCompR",
      "description": {
        "fct-module": "Data.Graph.SCC",
        "fct-package": "GraphSCC",
        "fct-signature": "[(node, key, [key])] -\u003e [SCC (node, key, [key])]",
        "fct-source": "src/Data-Graph-SCC.html#stronglyConnCompR",
        "fct-type": "function",
        "title": "stronglyConnCompR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph SCC",
        "module": "Data.Graph.SCC",
        "name": "stronglyConnCompR",
        "normalized": "[(a,b,[b])]-\u003e[SCC(a,b,[b])]",
        "package": "GraphSCC",
        "partial": "Conn Comp",
        "signature": "[(node,key,[key])]-\u003e[SCC(node,key,[key])]"
      }
    }
  }
]