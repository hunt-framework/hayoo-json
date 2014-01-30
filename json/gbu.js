[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-Embedding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraph embedding algorithm is based on one of a graph planarity testing which \n   described in the book \"Graph Drawing. Algorithms for the Visualization of Graphs\".\n   Its authors are Giuseppe Di Battista, Peter Eades, Roberto Tamassia and Ioannis G. Tollis.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Embedding",
        "fct-package": "gbu",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Embedding.html",
        "fct-type": "module",
        "title": "Embedding"
      },
      "index": {
        "description": "Graph embedding algorithm is based on one of graph planarity testing which described in the book Graph Drawing Algorithms for the Visualization of Graphs Its authors are Giuseppe Di Battista Peter Eades Roberto Tamassia and Ioannis Tollis",
        "hierarchy": "Data Graph Embedding",
        "module": "Data.Graph.Embedding",
        "name": "Embedding",
        "normalized": "",
        "package": "gbu",
        "partial": "Embedding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-Embedding.html#v:embedDiGraph",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eembedDiGraph\u003c/a\u003e\u003c/code\u003e function embeds a planar directed graph into a plane. The source graph \n must be biconnected if throw off edges' directions and also any two nodes v and w can have \n either edge (v,w) or (w,v) but not both.\n\u003c/p\u003e\u003cp\u003eEdge's label of an embedded graph consists of a pair integers. First element is a position \n of the edge in its source node and second one is a position of the edge in its destination node.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Embedding",
        "fct-package": "gbu",
        "fct-signature": "Gr a b -\u003e Gr a (Int, Int)",
        "fct-source": "src/Data-Graph-Embedding.html#embedDiGraph",
        "fct-type": "function",
        "title": "embedDiGraph"
      },
      "index": {
        "description": "The embedDiGraph function embeds planar directed graph into plane The source graph must be biconnected if throw off edges directions and also any two nodes and can have either edge or but not both Edge label of an embedded graph consists of pair integers First element is position of the edge in its source node and second one is position of the edge in its destination node",
        "hierarchy": "Data Graph Embedding",
        "module": "Data.Graph.Embedding",
        "name": "embedDiGraph",
        "normalized": "Gr a b-\u003eGr a(Int,Int)",
        "package": "gbu",
        "partial": "Di Graph",
        "signature": "Gr a b-\u003eGr a(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-Embedding.html#v:embedGraph",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eembedGraph\u003c/a\u003e\u003c/code\u003e function embeds a planar biconnected undirected graph into a plane.  \n  Edge's label of an embedded graph is a position of the edge in its source node.\n\u003c/p\u003e\u003cp\u003eIn undirected graph each edge is presented a pair of directed edges. Therefore\n  it's enough each edge keeps only its position in the source node.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Embedding",
        "fct-package": "gbu",
        "fct-signature": "Gr a b -\u003e Gr a Int",
        "fct-source": "src/Data-Graph-Embedding.html#embedGraph",
        "fct-type": "function",
        "title": "embedGraph"
      },
      "index": {
        "description": "The embedGraph function embeds planar biconnected undirected graph into plane Edge label of an embedded graph is position of the edge in its source node In undirected graph each edge is presented pair of directed edges Therefore it enough each edge keeps only its position in the source node",
        "hierarchy": "Data Graph Embedding",
        "module": "Data.Graph.Embedding",
        "name": "embedGraph",
        "normalized": "Gr a b-\u003eGr a Int",
        "package": "gbu",
        "partial": "Graph",
        "signature": "Gr a b-\u003eGr a Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-InductivePlus.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eadditional functions for the graph structure defined in fgl library\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.InductivePlus",
        "fct-package": "gbu",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-InductivePlus.html",
        "fct-type": "module",
        "title": "InductivePlus"
      },
      "index": {
        "description": "additional functions for the graph structure defined in fgl library",
        "hierarchy": "Data Graph InductivePlus",
        "module": "Data.Graph.InductivePlus",
        "name": "InductivePlus",
        "normalized": "",
        "package": "gbu",
        "partial": "Inductive Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-InductivePlus.html#v:findPaths",
      "description": {
        "fct-descr": "\u003cp\u003eit finds and returns the path consiting of edges from first node to second one.\n If the path doesn't exist then the function returns the empty list.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.InductivePlus",
        "fct-package": "gbu",
        "fct-signature": "Node -\u003e Node -\u003e Gr a b -\u003e [Path]",
        "fct-source": "src/Data-Graph-InductivePlus.html#findPaths",
        "fct-type": "function",
        "title": "findPaths"
      },
      "index": {
        "description": "it finds and returns the path consiting of edges from first node to second one If the path doesn exist then the function returns the empty list",
        "hierarchy": "Data Graph InductivePlus",
        "module": "Data.Graph.InductivePlus",
        "name": "findPaths",
        "normalized": "Node-\u003eNode-\u003eGr a b-\u003e[Path]",
        "package": "gbu",
        "partial": "Paths",
        "signature": "Node-\u003eNode-\u003eGr a b-\u003e[Path]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-InductivePlus.html#v:getELabel",
      "description": {
        "fct-descr": "\u003cp\u003ethe function version of setELabel for an undirected graph\n\u003c/p\u003e",
        "fct-module": "Data.Graph.InductivePlus",
        "fct-package": "gbu",
        "fct-signature": "(Node, Node) -\u003e Gr a b -\u003e b",
        "fct-source": "src/Data-Graph-InductivePlus.html#getELabel",
        "fct-type": "function",
        "title": "getELabel"
      },
      "index": {
        "description": "the function version of setELabel for an undirected graph",
        "hierarchy": "Data Graph InductivePlus",
        "module": "Data.Graph.InductivePlus",
        "name": "getELabel",
        "normalized": "(Node,Node)-\u003eGr a b-\u003eb",
        "package": "gbu",
        "partial": "ELabel",
        "signature": "(Node,Node)-\u003eGr a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-InductivePlus.html#v:getVLabel",
      "description": {
        "fct-descr": "\u003cp\u003ethe function extracts a label of v node from the graph g\n\u003c/p\u003e",
        "fct-module": "Data.Graph.InductivePlus",
        "fct-package": "gbu",
        "fct-signature": "Node -\u003e Gr a b -\u003e a",
        "fct-source": "src/Data-Graph-InductivePlus.html#getVLabel",
        "fct-type": "function",
        "title": "getVLabel"
      },
      "index": {
        "description": "the function extracts label of node from the graph",
        "hierarchy": "Data Graph InductivePlus",
        "module": "Data.Graph.InductivePlus",
        "name": "getVLabel",
        "normalized": "Node-\u003eGr a b-\u003ea",
        "package": "gbu",
        "partial": "VLabel",
        "signature": "Node-\u003eGr a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-InductivePlus.html#v:isEdge",
      "description": {
        "fct-module": "Data.Graph.InductivePlus",
        "fct-package": "gbu",
        "fct-signature": "(Node, Node) -\u003e Gr a b -\u003e Bool",
        "fct-source": "src/Data-Graph-InductivePlus.html#isEdge",
        "fct-type": "function",
        "title": "isEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph InductivePlus",
        "module": "Data.Graph.InductivePlus",
        "name": "isEdge",
        "normalized": "(Node,Node)-\u003eGr a b-\u003eBool",
        "package": "gbu",
        "partial": "Edge",
        "signature": "(Node,Node)-\u003eGr a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-InductivePlus.html#v:mergeTwoGraphs",
      "description": {
        "fct-descr": "\u003cp\u003ethe function merges two graphs. E.i. if first graph hasn't got vertex v \n   but second one has got it then the node is inserted into first graph with \n   same label. Edges are processed too.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.InductivePlus",
        "fct-package": "gbu",
        "fct-signature": "Gr a b -\u003e Gr a b -\u003e Gr a b",
        "fct-source": "src/Data-Graph-InductivePlus.html#mergeTwoGraphs",
        "fct-type": "function",
        "title": "mergeTwoGraphs"
      },
      "index": {
        "description": "the function merges two graphs E.i if first graph hasn got vertex but second one has got it then the node is inserted into first graph with same label Edges are processed too",
        "hierarchy": "Data Graph InductivePlus",
        "module": "Data.Graph.InductivePlus",
        "name": "mergeTwoGraphs",
        "normalized": "Gr a b-\u003eGr a b-\u003eGr a b",
        "package": "gbu",
        "partial": "Two Graphs",
        "signature": "Gr a b-\u003eGr a b-\u003eGr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-InductivePlus.html#v:setELabel",
      "description": {
        "fct-module": "Data.Graph.InductivePlus",
        "fct-package": "gbu",
        "fct-signature": "(Node, Node, a) -\u003e a -\u003e Gr b a -\u003e Gr b a",
        "fct-source": "src/Data-Graph-InductivePlus.html#setELabel",
        "fct-type": "function",
        "title": "setELabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph InductivePlus",
        "module": "Data.Graph.InductivePlus",
        "name": "setELabel",
        "normalized": "(Node,Node,a)-\u003ea-\u003eGr b a-\u003eGr b a",
        "package": "gbu",
        "partial": "ELabel",
        "signature": "(Node,Node,a)-\u003ea-\u003eGr b a-\u003eGr b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-InductivePlus.html#v:setVLabel",
      "description": {
        "fct-descr": "\u003cp\u003ethe function updates a label of v node in the graph g\n\u003c/p\u003e",
        "fct-module": "Data.Graph.InductivePlus",
        "fct-package": "gbu",
        "fct-signature": "(Node, a)-\u003e a-\u003e Gr a b-\u003e Gr a b",
        "fct-type": "function",
        "title": "setVLabel"
      },
      "index": {
        "description": "the function updates label of node in the graph",
        "hierarchy": "Data Graph InductivePlus",
        "module": "Data.Graph.InductivePlus",
        "name": "setVLabel",
        "normalized": "(Node,a)-\u003ea-\u003eGr a b-\u003eGr a b",
        "package": "gbu",
        "partial": "VLabel",
        "signature": "(Node,a)-\u003ea-\u003eGr a b-\u003eGr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gbu/docs/Data-Graph-InductivePlus.html#v:setVLabel-39-",
      "description": {
        "fct-descr": "\u003cp\u003ethe function updates a label of v node in the graph g\n\u003c/p\u003e",
        "fct-module": "Data.Graph.InductivePlus",
        "fct-package": "gbu",
        "fct-signature": "Node -\u003e a -\u003e Gr a b -\u003e Gr a b",
        "fct-source": "src/Data-Graph-InductivePlus.html#setVLabel%27",
        "fct-type": "function",
        "title": "setVLabel'"
      },
      "index": {
        "description": "the function updates label of node in the graph",
        "hierarchy": "Data Graph InductivePlus",
        "module": "Data.Graph.InductivePlus",
        "name": "setVLabel'",
        "normalized": "Node-\u003ea-\u003eGr a b-\u003eGr a b",
        "package": "gbu",
        "partial": "VLabel'",
        "signature": "Node-\u003ea-\u003eGr a b-\u003eGr a b"
      }
    }
  }
]